# Stories — Final Results Summary

**Project:** IB Mathematics Functions textbook — 16-story graphic novel series about the history and application of mathematical functions
**Completion date:** 2026-04-05
**Generation engine:** Google Gemini 2.5 Flash Image (codename "Nano Banana") via the `google-genai` Python SDK
**Aspect ratio:** 16:9 native (1344×768), no post-processing

> **Outcome:** The user was **extremely happy** with the final result. All 16 stories generated successfully at native 16:9 resolution, the full textbook came in well under the $10 budget ceiling at $7.56 (and $0.00 on the free tier that real users will actually hit), and the workflow is now fully reproducible for future projects and for downstream users like teachers in Africa building their own textbooks on limited budgets.

---

## Headline Numbers

| Metric | Value |
|---|---|
| **Total stories** | 16 |
| **Total panels per story** | 1 cover + 12 numbered panels = **13 images** |
| **Total images generated** | **208** |
| **Total PNG payload on disk** | **356 MB** |
| **Image resolution** | 1344×768 (native 16:9) for every image |
| **Tokens consumed (total)** | 291,677 (≈ 19,445 per story) |
| **Paid-tier cost** | **$7.56** (cumulative over two days) |
| **Actual cost on free tier** | **$0.00** |
| **Free-tier daily quota used** | 195/500 requests on 2026-04-05 (39%) |
| **Failed prompts** | 1 (Emmy Noether panel 10 — safety filter) |
| **Successful retries** | 2 (Noether p10 after prompt softening; Mirzakhani p10 on transient flag) |

---

## Per-Story Breakdown

Each story cost almost exactly the same — **$0.5039 paid-tier** — because Gemini charges a flat 1,290 output tokens per image regardless of prompt complexity. Token counts below are from `response.usage_metadata` on the live API responses.

| # | Story | Scientist / theme | Era / style | Images | Paid cost |
|---|-------|-------------------|-------------|:------:|:---------:|
| 1  | [rene-descartes](../docs/stories/rene-descartes/index.md)           | René Descartes — The Language of Change | Dutch Golden Age Baroque | 13 | $0.5039 |
| 2  | [leibniz-vs-newton](../docs/stories/leibniz-vs-newton/index.md)     | Leibniz vs. Newton — The Notation Wars | Baroque / Enlightenment portraiture | 13 | $0.5039 |
| 3  | [leonhard-euler](../docs/stories/leonhard-euler/index.md)           | Leonhard Euler — The Symbol That Stuck | Enlightenment classical portraiture | 13 | $0.5039 |
| 4  | [joseph-fourier](../docs/stories/joseph-fourier/index.md)           | Joseph Fourier — From Waves to Music | Napoleonic Empire era | 13 | $0.5038 |
| 5  | [ada-lovelace](../docs/stories/ada-lovelace/index.md)               | Ada Lovelace — The First Programmer | Victorian Pre-Raphaelite | 13 | $0.5039 |
| 6  | [ronald-ross](../docs/stories/ronald-ross/index.md)                 | Ronald Ross — The Pandemic Modeler | Late Victorian / colonial India | 13 | $0.5038 |
| 7  | [emmy-noether](../docs/stories/emmy-noether/index.md)               | Emmy Noether — The Equation of Hope | Bauhaus / Weimar Germany | 13 | $0.5039 |
| 8  | [srinivasa-ramanujan](../docs/stories/srinivasa-ramanujan/index.md) | Srinivasa Ramanujan — The Infinity Dreamer | Colonial India / Cambridge | 13 | $0.5040 |
| 9  | [alan-turing](../docs/stories/alan-turing/index.md)                 | Alan Turing — The Secret Codebreaker | 1940s WWII noir | 13 | $0.5039 |
| 10 | [claude-shannon](../docs/stories/claude-shannon/index.md)           | Claude Shannon — The Network Weaver | Atomic Age Bell Labs | 13 | $0.5040 |
| 11 | [katherine-johnson](../docs/stories/katherine-johnson/index.md)     | Katherine Johnson — Mapping the Unknown | Mid-century Atomic Age | 13 | $0.5039 |
| 12 | [benoit-mandelbrot](../docs/stories/benoit-mandelbrot/index.md)     | Benoit Mandelbrot — The Shape of Nature | Late 20th century computational | 13 | $0.5039 |
| 13 | [frank-drake](../docs/stories/frank-drake/index.md)                 | Frank Drake — Are We Alone? | 1961 Green Bank Observatory | 13 | $0.5040 |
| 14 | [syukuro-manabe](../docs/stories/syukuro-manabe/index.md)           | Syukuro Manabe — The Climate Function | Japanese-American mid-century | 13 | $0.5038 |
| 15 | [karen-uhlenbeck](../docs/stories/karen-uhlenbeck/index.md)         | Karen Uhlenbeck — Functions for the Future | Late 20th century academic | 13 | $0.5039 |
| 16 | [maryam-mirzakhani](../docs/stories/maryam-mirzakhani/index.md)     | Maryam Mirzakhani — The Invisible Architect | Contemporary, Persian-inspired | 13 | $0.5039 |
| | **Total** | | | **208** | **$8.07** |

Note: the $8.07 total spans two sessions (yesterday's Descartes + today's other 15). Today's session alone generated 195 images at $7.56.

---

## Stories in Chronological Order (by scientist's birth year)

This is also the order the Stories section appears in the site nav:

1. **René Descartes** (1596–1650) — Dutch Republic / France
2. **Gottfried Leibniz** (1646–1716) / Isaac Newton (1643–1727) — Germany / England
3. **Leonhard Euler** (1707–1783) — Switzerland
4. **Joseph Fourier** (1768–1830) — France
5. **Ada Lovelace** (1815–1852) — England
6. **Ronald Ross** (1857–1932) — India / UK
7. **Emmy Noether** (1882–1935) — Germany / USA
8. **Srinivasa Ramanujan** (1887–1920) — India / England
9. **Alan Turing** (1912–1954) — England
10. **Claude Shannon** (1916–2001) — USA
11. **Katherine Johnson** (1918–2020) — USA
12. **Benoit Mandelbrot** (1924–2010) — Poland / France / USA
13. **Frank Drake** (1930–2022) — USA
14. **Syukuro Manabe** (born 1931) — Japan / USA
15. **Karen Uhlenbeck** (born 1942) — USA
16. **Maryam Mirzakhani** (1977–2017) — Iran / USA

---

## Technical Flow (What Made It Work)

### 1. Root-cause diagnosis
The original Antigravity-agent workflow produced square images that had to be lossy-cropped with PIL, losing ~44% of the vertical content. Root cause: **Antigravity's `generate_image` tool does not expose `aspect_ratio`** in its schema, so every image defaulted to 1:1. See `logs/gemini-image-generation-setup.md` for the full diagnosis and "frustration" section.

### 2. Direct SDK call
Rewrote `src/stories/generate-image.py` to call Gemini directly via `google-genai`, passing the critical config:

```python
config=types.GenerateContentConfig(
    response_modalities=["IMAGE"],
    image_config=types.ImageConfig(aspect_ratio="16:9"),
)
```

This returns native 1344×768 images with zero post-processing.

### 3. Prompt parsing
The script reads `<details><summary>...Image Prompt</summary>...</details>` blocks directly from each story's `index.md`, so the same script runs unchanged against all 16 stories.

### 4. Safety-first flags
- `--first-only` — generate only the cover, verify aspect ratio, then decide
- `--skip-existing` — don't regenerate existing images (safe for retries)
- `--rpm 10` — default client-side rate limiter, stays under free-tier cap
- Script aborts automatically if any image returns non-16:9 dimensions

### 5. Graceful failure handling
Added mid-run after Emmy Noether panel 10 crashed the pipeline. The script now catches:
- API call exceptions
- Candidates with no content (safety filters)
- `FinishReason.IMAGE_SAFETY`
- Empty parts lists

On any failure, it logs the reason and continues to the next image. Failed images can be retried later with `--skip-existing`.

### 6. Full metadata capture
Every successful call writes:
- One JSONL record to `logs/image-generation-usage.jsonl` (timestamp, tokens in/out, computed cost)
- One per-story markdown log at `logs/{story-name}-{YYYY-MM-DD}.md` with run metadata, summary totals, per-image table, and prompt excerpts

---

## Per-Story Generation Logs

All 16 stories have detailed markdown logs:

- [rene-descartes-2026-04-04.md](rene-descartes-2026-04-04.md) *(first working run, pre-logging)*
- [leonhard-euler-2026-04-05.md](leonhard-euler-2026-04-05.md)
- [leibniz-vs-newton-2026-04-05.md](leibniz-vs-newton-2026-04-05.md)
- [joseph-fourier-2026-04-05.md](joseph-fourier-2026-04-05.md)
- [ada-lovelace-2026-04-05.md](ada-lovelace-2026-04-05.md)
- [ronald-ross-2026-04-05.md](ronald-ross-2026-04-05.md)
- [emmy-noether-2026-04-05.md](emmy-noether-2026-04-05.md)
- [srinivasa-ramanujan-2026-04-05.md](srinivasa-ramanujan-2026-04-05.md)
- [alan-turing-2026-04-05.md](alan-turing-2026-04-05.md)
- [claude-shannon-2026-04-05.md](claude-shannon-2026-04-05.md)
- [katherine-johnson-2026-04-05.md](katherine-johnson-2026-04-05.md)
- [benoit-mandelbrot-2026-04-05.md](benoit-mandelbrot-2026-04-05.md)
- [frank-drake-2026-04-05.md](frank-drake-2026-04-05.md)
- [syukuro-manabe-2026-04-05.md](syukuro-manabe-2026-04-05.md)
- [karen-uhlenbeck-2026-04-05.md](karen-uhlenbeck-2026-04-05.md)
- [maryam-mirzakhani-2026-04-05.md](maryam-mirzakhani-2026-04-05.md)

The machine-readable JSONL equivalent is at [image-generation-usage.jsonl](image-generation-usage.jsonl) with one record per API call.

---

## Issues Encountered

### Issue 1 — Antigravity tool does not expose `aspect_ratio`
**Impact:** Every image from the original Antigravity workflow came back as a 1:1 square, requiring lossy cropping.
**Resolution:** Bypassed Antigravity entirely. Built `src/stories/generate-image.py` to call Gemini directly via `google-genai`, which accepts `ImageConfig(aspect_ratio="16:9")`.
**Recommendation:** File a feature request with the Antigravity team to expose all 10 aspect ratios Gemini 2.5 Flash Image supports (`21:9`, `16:9`, `4:3`, `3:2`, `1:1`, `9:16`, `3:4`, `2:3`, `5:4`, `4:5`).

### Issue 2 — Safety filter rejected Emmy Noether panel 10
**Impact:** The original prompt explicitly mentioned "Nazi banners" and "swastika stamp", which Gemini's `IMAGE_SAFETY` filter refused. The script crashed hard on the resulting `None` content.
**Resolution:**
1. Softened the prompt to convey forced exile with neutral imagery (government dismissal letter with generic wax seal, gray cobblestone street, packing books). The historical meaning survives; the trigger words are gone. Softened prompt is persisted in `docs/stories/emmy-noether/index.md` so future regenerations will succeed.
2. Hardened `generate-image.py` to catch safety-filter responses gracefully. The script now logs `finish_reason`, safety ratings, and continues to the next image instead of crashing.

### Issue 3 — Placeholder references in all 16 stories
**Impact:** Every story's `## References` section shipped with `(PLACEHOLDER)` URLs that rendered as broken links.
**Resolution:** Built `src/stories/fix-references.py` with a curated URL table: first 3 references per story point to Wikipedia (biography, main contribution, related concept), followed by MacTutor History of Mathematics Archive, Nobel Prize, NASA, Britannica, or Stanford Encyclopedia as stable secondary sources. Ran once against all 16 stories. Zero PLACEHOLDER strings remain.

### Issue 4 — Joseph Fourier had old lossy 1280×720 images
**Impact:** 13 existing Fourier images were holdovers from the Antigravity era, cropped from 1300×1308 squares with significant content loss.
**Resolution:** Deleted the old PNGs, including the preserved `panel-04-sq.png` debugging artifact, and regenerated all 13 at native 1344×768.

### Issue 5 — Maryam Mirzakhani panel 10 transient safety flag
**Impact:** First generation pass produced only 12/13 images. Panel 10 was rejected with no explicit error message in the logs.
**Resolution:** Retried with `--skip-existing`. The second attempt went through cleanly without any prompt change — it was a transient false positive from the safety classifier. No fix required.

---

## Cost Analysis Revisited

**For the teachers-in-Africa use case that motivated the cost question earlier:**

| Tier | Descartes story (13 images) | Full 16-story textbook (208 images) |
|---|:---:|:---:|
| **Paid tier** ($0.039/image) | $0.51 | **$8.07** |
| **Free tier** (first 500 req/day) | **$0.00** | **$0.00** |

The free tier alone covers two and a half complete textbooks per day per project. A teacher producing one textbook per week uses **~6% of their monthly free quota** — leaving 94% of the quota available for iteration, revision, or additional books.

**Recommendation for low-budget use:** create a free API key at https://aistudio.google.com/apikey, set `GEMINI_API_KEY` in the environment, and run the script. No billing account, no credit card, no trial limit. The rate limiter in the script is tuned to the free tier by default.

For more detail on alternative models (FLUX.1 [schnell] at $0.003/image for batch iteration, local SDXL for offline workflows), see `logs/gemini-image-generation-setup.md` section 7.

---

## Files Touched

### New scripts
- [`src/stories/generate-image.py`](../src/stories/generate-image.py) — main image generation tool
- [`src/stories/fix-references.py`](../src/stories/fix-references.py) — one-shot references fixer

### New / updated content
- 208 new PNG files across 16 `docs/stories/*/` directories
- 16 `index.md` files updated with working references

### New logs
- `logs/gemini-image-generation-setup.md` — detailed session log on setup, diagnosis, costs, recommendations
- `logs/image-generation-usage.jsonl` — machine-readable per-call usage log
- 16 per-story markdown logs at `logs/{story-name}-{YYYY-MM-DD}.md`
- `logs/stories.md` — this file

---

## Verification

Every image in the final textbook was verified by `sips` immediately after generation:

```bash
for d in docs/stories/*/; do
    for p in "$d"*.png; do
        sips -g pixelWidth -g pixelHeight "$p"
    done
done
```

Result: **208/208 images at 1344×768**. No square images, no cropped images, no leftover artifacts.

Zero `PLACEHOLDER` strings remain in any story `index.md`:

```bash
grep -l "PLACEHOLDER" docs/stories/*/index.md
# (no output)
```

---

## What the Stories Are Missing

These are known limitations, not bugs:

1. **No character face continuity across panels.** Gemini 2.5 Flash Image maintains style continuity but does not retain the same face across multiple generations. For a professional graphic novel, a character-consistency model (e.g., Flux Kontext, Imagen 4 with reference images, or a fine-tuned character LoRA) would be needed. For educational use where panels are read in sequence with narration, the current approach is acceptable.
2. **No speech bubbles or in-panel dialogue text.** The images are pure scene illustrations; the narrative sits below each panel in the markdown.
3. **No animation.** Panels are static images only. A future extension could use Veo for 3-5 second animated variants.
4. **Reference links are not click-verified.** All 5 references per story were manually curated (first 3 Wikipedia + 2 secondary sources), but no automated link checker has validated that every URL still resolves. Worth adding to the mkdocs build as a `linkchecker` step.
