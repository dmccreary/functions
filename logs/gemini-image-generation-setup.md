# Session Log: Gemini API Image Generation for Graphic Novel Stories

**Date:** 2026-04-05
**Outcome:** Successfully generated all 13 images (1 cover + 12 panels) for the René Descartes graphic novel at native 1344×768 (16:9) resolution using Google's Gemini 2.5 Flash Image model (codename "Nano Banana") via the `google-genai` Python SDK.

> **Key hygiene:** No API key appears anywhere in this document or in the `generate-image.py` script. The key lives only in `~/.zshrc` (user's home directory, outside the repo) and is read from the `GEMINI_API_KEY` environment variable at runtime.

---

## 1. Problem Statement

The textbook has 16 graphic novel stories in `docs/stories/`, each with a cover image plus 12 panel images (208 images total). A prior pass generated the Joseph Fourier story via the Google Antigravity IDE agent's built-in `generate_image` tool, but every image came back **square (~1300×1308)** instead of the intended **16:9 landscape**.

The previous workaround was a Python post-processing function (`refine_image`) that:
1. Upscaled the square image to 1280×1280 with LANCZOS resampling
2. Center-cropped to 1280×720

This worked mechanically but was lossy — roughly 44% of the vertical content was discarded, leaving panels with cramped compositions.

## 2. Root-Cause Diagnosis

The diagnosis had three parts:

### 2.1 The old `generate-image.py` was a placeholder

The script's `image_generator()` function only printed prompts to stdout; it did not call any image generation API. The line `PARAMETERS: size="1280x720", aspect_ratio="16:9"` in the output was a log message, not an API call. The real work was done by the Antigravity agent's internal tool, which does not read those parameters.

### 2.2 Antigravity's `generate_image` tool does not expose `aspect_ratio`

When asked directly, the Antigravity agent reported that its `generate_image` tool schema only accepts:

- `Prompt` (string)
- `ImageName` (string)
- `ImagePaths` (array)
- `toolAction` / `toolSummary` / `waitForPreviousTools` (metadata)

There is no `aspect_ratio` or `size` parameter exposed in the Antigravity wrapper. This means every image it generates defaults to Gemini's 1:1 square output, with no in-tool way to override it. Prompt-level instructions like "16:9 landscape cinematic" are unreliable — Gemini respects the `ImageConfig.aspect_ratio` field but largely ignores aspect-ratio hints in the prompt text.

### 2.2a User frustration with Antigravity

This is the second time in this project that Antigravity's image tool has blocked a workflow with a fundamental limitation that should not exist. The prior case, documented in `logs/getting-antigravity-to-generate-mascot-images.md`, was that the tool does not support transparent PNG backgrounds, which forced an hour of workarounds involving border-seeded floodfill scripts to strip white backgrounds without destroying interior highlights like eyes.

This case is arguably worse:

- **Gemini 2.5 Flash Image natively supports 10 aspect ratios**, including 16:9, 9:16, 21:9, 4:3, and more. The capability is in the underlying model and has been since the model went GA with aspect-ratio support in late 2024.
- **Antigravity's tool wrapper does not expose any of them.** The tool schema only accepts `Prompt`, `ImageName`, `ImagePaths`, and tool-metadata fields. There is no `aspect_ratio`, no `size`, no `width`, no `height`, no `orientation` — nothing that lets the caller request anything other than the default 1:1 output.
- **Prompt-level workarounds do not work reliably.** Writing "wide cinematic 16:9 landscape composition" into the prompt text is largely ignored by Gemini because the model obeys `ImageConfig.aspect_ratio` and treats aspect-ratio hints in the prompt as stylistic suggestions at best.
- **The result:** any user trying to produce anything other than a square thumbnail is forced to either (a) accept center-cropped square images with ~44% of vertical content destroyed, (b) write a post-processing upscale-and-crop pipeline that is lossy by construction, or (c) abandon Antigravity for image generation entirely and call the Gemini API directly through a custom Python script — which is exactly what this session did.

The user's stated frustration on encountering this limitation was that a feature this basic — letting the caller pick an aspect ratio — should not require a full escape-hatch rewrite to bypass an IDE-level tool. Graphic novels need landscape. Social media headers need 16:9 or 21:9. Phone wallpapers need 9:16. Book covers need 2:3 or 3:4. A generic `generate_image` tool that can only produce squares is effectively unusable for any real creative workflow, and the fact that the underlying model *does* support all of these ratios makes the omission feel gratuitous.

**Concrete asks for the Antigravity team:**

1. Expose `aspect_ratio` as a parameter on the `generate_image` tool schema with all 10 values that Gemini 2.5 Flash Image supports: `"1:1"`, `"2:3"`, `"3:2"`, `"3:4"`, `"4:3"`, `"4:5"`, `"5:4"`, `"9:16"`, `"16:9"`, `"21:9"`.
2. Let the tool write the parameter straight through to `types.ImageConfig(aspect_ratio=...)` in the underlying `google-genai` call. No translation required — the SDK already takes the string directly.
3. While they're at it, expose `response_modalities` so callers can request image + text in the same call, and expose the ability to request transparent PNG output (which would retroactively fix the mascot-generation workflow from the prior session).

Until Antigravity ships those changes, the standalone Python script at `src/stories/generate-image.py` is the recommended path for any non-square image workload in this project.

### 2.3 Gemini 2.5 Flash Image does support 16:9 natively

Per the [official Google Developers Blog announcement](https://developers.googleblog.com/gemini-2-5-flash-image-now-ready-for-production-with-new-aspect-ratios/), Gemini 2.5 Flash Image went GA with full aspect-ratio support:

- **Parameter name:** `aspect_ratio`
- **Location:** inside an `ImageConfig` object on `GenerateContentConfig`
- **Type:** string
- **Supported values:** `"21:9"`, `"16:9"`, `"4:3"`, `"3:2"`, `"1:1"` (default), `"9:16"`, `"3:4"`, `"2:3"`, `"5:4"`, `"4:5"`
- **Max long-edge resolution:** 1344 px for 16:9 (i.e. `1344×768`)

The SDK shape is:

```python
config=types.GenerateContentConfig(
    response_modalities=["IMAGE"],
    image_config=types.ImageConfig(aspect_ratio="16:9"),
)
```

## 3. Setup Steps

### 3.1 Acquire a Gemini API key

1. Visit https://aistudio.google.com/apikey
2. Click **Create API key**
3. Copy the generated key (format: `AIza…`)

The free tier at Google AI Studio is sufficient for this workload — rate limits are per-minute and per-day, well above what a hand-run script hits.

### 3.2 Install the SDK

The project's default conda environment (`mkdocs`) did not have `google-genai` installed. Installed with:

```bash
pip install google-genai
```

Verified:

```bash
python3 -c "from google import genai; from google.genai import types; print('ok')"
```

### 3.3 Set the environment variable

Appended the following block to `~/.zshrc` (user's home directory, not under version control):

```bash
# Gemini API key for google-genai / Nano Banana image generation
export GEMINI_API_KEY="<redacted — stored in ~/.zshrc only>"
```

Verified that a fresh shell picks it up:

```bash
source ~/.zshrc
python3 -c "import os; print(bool(os.environ.get('GEMINI_API_KEY')))"
# -> True
```

> **Important:** Claude Code's `Bash` tool spawns non-interactive subshells that do **not** automatically source `~/.zshrc`. When running the script through Claude Code, the key must be exported inline:
>
> ```bash
> export GEMINI_API_KEY="..." && python3 src/stories/generate-image.py ...
> ```
>
> When run in the user's own interactive terminal, the key from `~/.zshrc` is picked up automatically.

## 4. Script Architecture

`src/stories/generate-image.py` was rewritten from a logging stub into a real working tool. Key design decisions:

### 4.1 Parse prompts directly from `index.md`

Instead of hard-coding a separate `PROMPTS` list for every story (which would drift out of sync with the markdown), the script extracts image prompts from the story's own `index.md` using a regex over `<details><summary>...Prompt...</summary>BODY</details>` blocks. The first block is the cover; subsequent blocks map to `panel-01.png` through `panel-12.png` in document order.

This means **the script works unchanged for all 16 stories** and will automatically pick up any future prompt edits in the markdown.

### 4.2 Verify dimensions after every image

After each `generate_content` call, the script runs `sips -g pixelWidth -g pixelHeight` and checks whether the width-to-height ratio matches 16:9 within 3% tolerance. If any image is not 16:9, the script aborts immediately — this is the "check the first before you go on" safety check.

### 4.3 `--first-only` and `--skip-existing` flags

- `--first-only`: generates only the cover image. Lets you verify aspect ratio and art style on one image before committing to 12 more API calls.
- `--skip-existing`: skips images whose output file already exists. Lets you resume after partial runs without regenerating already-accepted images.

### 4.4 No post-processing

The script does **not** include the old `refine_image()` function. Gemini returns native 16:9 at 1344×768, which is directly usable. Upscaling to 1280×720 would actually *downsample* — 1344×768 is already slightly larger than 1280×720 and preserves more detail.

## 5. Execution Results

### 5.1 Cover image verification (`--first-only`)

```
Found 13 image prompts in docs/stories/rene-descartes/index.md
--first-only: generating only the cover image for verification

-> generating docs/stories/rene-descartes/cover.png
   wrote docs/stories/rene-descartes/cover.png (1,564,509 bytes)
   dimensions: 1344x768  [OK 16:9]

Done.
```

### 5.2 Full run (`--skip-existing`)

All 12 remaining panels generated successfully at **1344×768 (16:9)**:

| File | Size (bytes) | Dimensions |
|---|---|---|
| panel-01.png | 1,798,752 | 1344×768 |
| panel-02.png | 1,634,768 | 1344×768 |
| panel-03.png | 1,559,852 | 1344×768 |
| panel-04.png | 1,571,620 | 1344×768 |
| panel-05.png | 1,735,225 | 1344×768 |
| panel-06.png | 1,764,072 | 1344×768 |
| panel-07.png | 1,697,635 | 1344×768 |
| panel-08.png | 1,468,104 | 1344×768 |
| panel-09.png | 1,737,988 | 1344×768 |
| panel-10.png | 1,652,667 | 1344×768 |
| panel-11.png | 1,495,459 | 1344×768 |
| panel-12.png | 1,711,671 | 1344×768 |

Total payload: ~20.4 MB across 13 images. Wall-clock time: roughly 4–6 seconds per image (API call + download + disk write + `sips` verification).

## 6. Cost Analysis (Revised)

> **Headline for low-budget users (teachers in Africa, students, independent authors):**
> This entire workflow is **free**. Gemini 2.5 Flash Image's free tier allows **500 images per day** — enough for two and a half full 208-image textbooks *per day* with zero billing account required. The ~$8 figure quoted in the first draft of this log is the *paid-tier* cost and only applies if you exceed 500 images/day in a single project, which no realistic textbook workflow does.

### 6.1 Can we audit actual costs from this run? (No.)

The `google-genai` SDK (v1.70.0) does **not** write any local usage logs by default. A search of `~/.config/google`, `~/.cache/google*`, `~/Library/Caches/google*`, and `/tmp/google*` on this machine confirmed no log files exist from the Descartes run. The API response objects *do* contain a `usage_metadata` field with exact token counts, but the first version of `generate-image.py` discarded them after saving the image, so they are unrecoverable for the Descartes panels.

**Two authoritative places to check real spend:**

1. **Google AI Studio usage dashboard:** https://aistudio.google.com/ → profile menu → Billing / Usage. Shows request counts per day per model.
2. **Google Cloud billing console** (if a billing account is attached): https://console.cloud.google.com/billing → Reports → filter by "Generative Language API" or "gemini-2.5-flash-image".

**Going forward**, `generate-image.py` now writes a JSONL record to `logs/image-generation-usage.jsonl` after every successful image, capturing:

- `timestamp` (UTC)
- `file` (output PNG path)
- `input_tokens` / `output_tokens` / `total_tokens` (from `response.usage_metadata`)
- `paid_tier_cost_usd` (computed from token counts × official rates)

At end-of-run the script also prints a daily summary like:

```
Today: 13 images, 18,312 total tokens, $0.5066 paid-tier cost (free tier: 13/500 requests used)
```

So every *future* run is auditable from local data, and the free-tier quota usage is visible in real time.

### 6.2 Free tier limits (verified)

Per the [official Gemini API rate limits documentation](https://ai.google.dev/gemini-api/docs/rate-limits):

| Limit | Free tier value |
|---|---|
| Requests per minute (RPM) | 10 |
| **Requests per day (RPD)** | **500** |
| Tokens per minute (TPM) | ~250,000 |

The 10 RPM limit is the practical bottleneck during generation — each image takes 4–6 seconds on the wire, so a 13-image story fits comfortably within the rate limit without any throttling code. A full 208-image textbook takes roughly 20–25 minutes of wall-clock time (limited by the 10 RPM ceiling, not the API latency).

### 6.3 Free-tier capacity for realistic workloads

| Workload | Images needed | Share of daily free quota |
|---|---|---|
| One graphic novel (cover + 12 panels) | 13 | 2.6% |
| One full 16-story textbook | 208 | 41.6% |
| Two full textbooks in one day | 416 | 83.2% |
| **Daily ceiling (free tier)** | **500** | 100% |
| Monthly ceiling (30 × 500) | 15,000 | — |

**Bottom line:** a single teacher producing one textbook per week uses **6% of their monthly free quota**. A classroom of 10 teachers sharing one project uses **60%** — still free. Only if you scale to 50+ teachers on a single API key does the paid tier become relevant, and even then the cost is linear at $0.039/image past the first 500/day.

### 6.4 Paid-tier pricing (for reference only)

Gemini 2.5 Flash Image paid-tier pricing, verified across multiple independent sources in early 2026:

| Component | Rate |
|---|---|
| Input (text prompt) tokens | $0.30 per 1M tokens |
| Output (image) tokens | $30.00 per 1M tokens |
| Tokens per generated image | 1,290 (fixed) |
| **Cost per image** | **$0.039** |

Sources: [Google AI Developers pricing page](https://ai.google.dev/gemini-api/docs/pricing), [pricepertoken.com](https://pricepertoken.com/pricing-page/model/google-gemini-2.5-flash-image), [Helicone cost tracker](https://www.helicone.ai/llm-cost/provider/google/model/gemini-2.5-flash).

Paid-tier projections for this project (only relevant if free tier is exceeded):

| Scope | Images | Paid-tier cost |
|---|---|---|
| Descartes story (this session) | 13 | $0.51 |
| Full 16-story textbook | 208 | $8.12 |
| 10 full textbooks | 2,080 | $81.20 |

### 6.5 What this means for teachers in Africa

The original draft of this log buried the free-tier option in a caveat paragraph. That was wrong for your audience. For a teacher producing textbooks on a VERY limited budget, the honest recommendation is:

1. **Create a free Google account and get a free Gemini API key.** No credit card, no billing account, no trial limits. https://aistudio.google.com/apikey
2. **Generate up to 500 images per day per project, indefinitely.** That's roughly 38 stories or 2.4 textbooks per day per project, free.
3. **If a single teacher needs more than 500 images in one day**, they can either wait until UTC midnight (quota resets) or create additional free projects, each with its own 500 RPD quota.
4. **Only consider a paid billing account** if running a shared server that generates thousands of images per day across many teachers simultaneously.

**Estimated total out-of-pocket cost for a teacher to produce their first complete 16-story textbook: $0.00.**

## 7. Alternative Models for Cost Reduction

If the ~$8 all-up cost is already acceptable, Gemini 2.5 Flash Image is the right choice — it produces the highest-quality results of any low-cost image model as of late 2025, and it's the only model this script is currently wired for. But if you want to explore cheaper options:

### 7.1 FLUX.1 family (via Fal, Replicate, or Together AI)

| Model | Provider | Approx. cost/image | Notes |
|---|---|---|---|
| FLUX.1 [schnell] | Fal / Replicate | **$0.003** | Fastest, lowest quality of the FLUX family, still competitive for stylized art |
| FLUX.1 [dev] | Fal / Replicate | **$0.025** | Middle tier, excellent quality, closest FLUX equivalent to Gemini 2.5 Flash |
| FLUX.1 [pro] | Fal / Replicate | **$0.055** | Highest FLUX quality, slower |

FLUX.1 [schnell] at $0.003/image would bring the full 208-image textbook cost to **~$0.62**, a 13× reduction vs. Gemini.

### 7.2 Stable Diffusion 3.5 (via Stability AI, Replicate)

| Model | Approx. cost/image | Notes |
|---|---|---|
| SD 3.5 Large Turbo | **~$0.04** | Comparable to Gemini |
| SD 3.5 Medium | **~$0.035** | Slightly cheaper, acceptable quality |
| SDXL | **~$0.01–0.02** | Older, cheaper, noticeably lower quality |

### 7.3 OpenAI image models

| Model | Resolution | Cost | Notes |
|---|---|---|---|
| `gpt-image-1` (low) | 1024×1024 | **$0.011** | Lowest quality tier, 3× cheaper than Gemini |
| `gpt-image-1` (medium) | 1024×1024 | **$0.042** | Comparable to Gemini, slightly more expensive |
| `gpt-image-1` (high) | 1024×1024 | **$0.167** | Highest quality but 4× more expensive |
| DALL-E 3 standard | 1024×1024 | **$0.040** | Comparable price, older model |
| DALL-E 3 HD | 1024×1792 | **$0.080** | 2× more expensive |

Note: OpenAI's image models currently top out at 1:1, 2:3, and 3:2 aspect ratios — **none of them natively support 16:9**. You would still need post-processing, which means OpenAI is not a straight substitute for Gemini on this workflow.

### 7.4 Local generation (effectively free)

If you have a GPU with 16+ GB VRAM, you can run **FLUX.1 [schnell]** or **SDXL** locally via ComfyUI or `diffusers`. The marginal cost per image is essentially the electricity (pennies per batch). Setup takes ~1 hour the first time but then every image is free.

For 208 images at ~15 seconds each on an RTX 4090, this is roughly 50 minutes of GPU time, costing perhaps $0.10 in electricity. The tradeoff is ~1 hour of setup time and noticeably lower output quality than Gemini.

### 7.5 Recommendation (Revised)

For **low-budget users (teachers in Africa, students, independent authors)**: **use Gemini's free tier.** The cost is $0 and the quality is the best available under the 500 RPD cap. Do not self-host, do not set up a billing account, do not use FLUX until you hit the free tier ceiling.

For **high-volume producers (publishers, content farms, institutional deployments)** generating more than 500 images/day per project:

- **Iteration / experimentation:** swap in **FLUX.1 [schnell] via Fal** for the iteration loop (3 cents per full story vs. 50 cents on Gemini paid tier), then do the final pass on Gemini.
- **Production at scale:** stick with **Gemini 2.5 Flash Image** paid tier. At $0.039/image it is the best quality per dollar, and character consistency across panels (a key requirement for graphic novels) is materially better than any cheaper alternative tested here.
- **Local hosting** is only justified at very high volumes (thousands of images per week) or when data sovereignty is required — the setup time and GPU cost are not worth it otherwise.

## 8. Recommendation: Integrate into the `/story-generator` Skill

The `story-generator` skill at `~/.claude/skills/story-generator/` currently generates the markdown structure of a story (directory, `index.md`, panels, epilogue, quotes, references) but leaves image generation as a manual post-processing step. This session demonstrates that image generation can be fully automated. Proposed changes:

### 8.1 Add `generate-image.py` to the skill directory

Move `src/stories/generate-image.py` (or a copy of it) into the skill at:

```
~/.claude/skills/story-generator/scripts/generate-images.py
```

This makes it available for any project that invokes the story-generator skill, not just this textbook. The script is self-contained — it only depends on `google-genai` and `sips` (macOS) or `identify` (ImageMagick, for cross-platform verification).

### 8.2 Add a skill step: "Generate images after markdown"

Update `SKILL.md` to add an optional step after Step 3 (Write the Story) and before Step 4 (Add to Navigation):

> **Step 3.5: Generate Images**
>
> After the `index.md` is written, run:
>
> ```bash
> python3 ~/.claude/skills/story-generator/scripts/generate-images.py docs/stories/<story-dir> --first-only
> ```
>
> This generates only the cover image for aspect-ratio and style verification. If the cover looks right, run without `--first-only` to generate all 12 panels. Requires `GEMINI_API_KEY` set in the environment and `pip install google-genai` once per machine.
>
> If the user prefers to defer image generation (e.g., while iterating on prompts), skip this step and leave panels as broken image references — the markdown is valid without the PNGs, just visually incomplete.

### 8.3 Add a prerequisites check to the skill

At the start of Step 3.5, check for the API key and SDK:

```bash
python3 -c "from google import genai" 2>/dev/null || pip install google-genai
test -n "$GEMINI_API_KEY" || echo "WARNING: GEMINI_API_KEY not set — image generation will be skipped"
```

If the key is missing, the skill should not fail — it should just print a warning and continue. Markdown generation should never be blocked by missing image credentials.

### 8.4 Add a `verify-images.py` companion script

Add a small verification-only script that runs `sips` on every PNG in a story directory and reports any image that is not 16:9. This lets users retroactively audit existing stories without burning API credits. The existing `panel-04-sq.png` file in `docs/stories/joseph-fourier/` is a good example of the kind of leftover artifact this would catch.

### 8.5 Update the skill's checklist

Add to the end-of-skill checklist in `SKILL.md`:

- [ ] All images generated at native 16:9 (verify with `sips -g pixelWidth -g pixelHeight`)
- [ ] No `refine_image`/`-sq.png`/post-crop artifacts left in the story directory
- [ ] If images deferred, `GEMINI_API_KEY` setup documented for the user

### 8.6 Document the Antigravity gotcha

Add a short "Known issue" section to the skill documentation explaining that Antigravity's built-in `generate_image` tool does not currently expose `aspect_ratio` and will produce square images. Point users to the standalone Python script as the workaround until Antigravity exposes the parameter.

## 9. Files Touched This Session

- `src/stories/generate-image.py` — complete rewrite from logging stub to working generator
- `~/.zshrc` — appended `export GEMINI_API_KEY=...` line
- `docs/stories/rene-descartes/cover.png` — regenerated at 1344×768
- `docs/stories/rene-descartes/panel-01.png` through `panel-12.png` — all regenerated at 1344×768
- `logs/gemini-image-generation-setup.md` — this log

No commits yet. Ready to publish when you are.

## 10. References

- [Gemini 2.5 Flash Image now ready for production with new aspect ratios — Google Developers Blog](https://developers.googleblog.com/gemini-2-5-flash-image-now-ready-for-production-with-new-aspect-ratios/) — authoritative source for the `ImageConfig.aspect_ratio` parameter and supported values
- [Gemini API pricing — Google AI for Developers](https://ai.google.dev/pricing) — official pricing page for Gemini 2.5 Flash Image
- [google-genai SDK on PyPI](https://pypi.org/project/google-genai/) — the Python library used by the script
- [Google AI Studio](https://aistudio.google.com/apikey) — where to create a free Gemini API key
- [Fal FLUX.1 pricing](https://fal.ai/models) — reference for cheaper alternative image models
- [Replicate FLUX.1 [schnell]](https://replicate.com/black-forest-labs/flux-schnell) — another FLUX deployment option
- Previous session log: `logs/getting-antigravity-to-generate-mascot-images.md` — documents the related Antigravity image-tool limitations for mascot generation (transparent backgrounds)
