#!/usr/bin/env python3
"""
generate-image.py — Generate graphic novel panel images for a story using
Google Gemini 2.5 Flash Image (aka "Nano Banana") with an explicit 16:9
aspect ratio so the model returns landscape images natively.

Why this rewrite
----------------
The previous version of this script was a placeholder that printed prompts
but relied on an external agent (Antigravity) to actually call generate_image.
Because that agent's default output is 1:1 (square), every image came back
square and had to be lossy-cropped to 16:9 with PIL afterward.

This version calls Gemini directly via the google-genai SDK — which is the
same engine Antigravity uses under the hood — and passes:

    image_config=types.ImageConfig(aspect_ratio="16:9")

so the model returns a 16:9 image natively (roughly 1344x768 at the current
model resolution). No post-processing required.

Reference (official):
  https://developers.googleblog.com/gemini-2-5-flash-image-now-ready-for-production-with-new-aspect-ratios/

Usage
-----
    # Generate every image referenced in a story index.md
    python src/stories/generate-image.py docs/stories/rene-descartes

    # Just the first (cover) image — useful for checking aspect ratio
    # before burning API credits on the remaining 12 panels
    python src/stories/generate-image.py docs/stories/rene-descartes --first-only

Environment
-----------
    export GEMINI_API_KEY=...    (or GOOGLE_API_KEY)

Requires: pip install google-genai
"""
import argparse
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

from google import genai
from google.genai import types

# Gemini 2.5 Flash Image paid-tier pricing (USD) as of early 2026.
# Source: https://ai.google.dev/gemini-api/docs/pricing
PRICE_INPUT_PER_1M = 0.30   # text input tokens
PRICE_OUTPUT_PER_1M = 30.00  # image output tokens

# Free-tier rate limit for gemini-2.5-flash-image. 10 RPM => one request
# every 6 seconds at minimum. The script enforces this client-side so it
# never trips a 429. Override with --rpm if you're on the paid tier with a
# higher quota.
# Source: https://ai.google.dev/gemini-api/docs/rate-limits
DEFAULT_RPM_LIMIT = 10

USAGE_LOG = Path("logs/image-generation-usage.jsonl")


class RateLimiter:
    """
    Enforces a minimum interval between API calls so we stay under the
    Gemini free-tier 10 RPM cap. Uses wall-clock time, not a sliding window,
    which is simpler and strictly more conservative.
    """
    def __init__(self, rpm: int):
        self.min_interval = 60.0 / rpm if rpm > 0 else 0.0
        self.last_request_time: float | None = None

    def wait(self) -> None:
        if self.last_request_time is None or self.min_interval <= 0:
            self.last_request_time = time.monotonic()
            return
        elapsed = time.monotonic() - self.last_request_time
        remaining = self.min_interval - elapsed
        if remaining > 0:
            print(f"   rate-limit: sleeping {remaining:.1f}s to stay under "
                  f"{60 / self.min_interval:.0f} RPM")
            time.sleep(remaining)
        self.last_request_time = time.monotonic()


# Match <details><summary>...Prompt...</summary>BODY</details> blocks.
_PROMPT_BLOCK = re.compile(
    r"<details>\s*<summary>([^<]*?Prompt[^<]*?)</summary>\s*(.*?)\s*</details>",
    re.DOTALL,
)


def extract_prompts(index_md: Path):
    """
    Parse a story index.md and return a list of (output_path, prompt_text)
    tuples in document order: cover image first, then panel-01, panel-02, ...
    """
    text = index_md.read_text(encoding="utf-8")
    story_dir = index_md.parent

    blocks = [
        m for m in _PROMPT_BLOCK.finditer(text) if "Image Prompt" in m.group(1)
    ]
    if not blocks:
        return []

    prompts = [(story_dir / "cover.png", blocks[0].group(2).strip())]
    for i, m in enumerate(blocks[1:], start=1):
        prompts.append((story_dir / f"panel-{i:02d}.png", m.group(2).strip()))
    return prompts


def log_usage(out_path: Path, response) -> dict:
    """
    Extract usage_metadata from the API response, estimate the paid-tier cost,
    and append one JSON line to logs/image-generation-usage.jsonl. Returns the
    record dict so the caller can print a summary.
    """
    um = getattr(response, "usage_metadata", None)
    input_tokens = getattr(um, "prompt_token_count", 0) or 0
    output_tokens = getattr(um, "candidates_token_count", 0) or 0
    total_tokens = getattr(um, "total_token_count", 0) or (input_tokens + output_tokens)

    cost_usd = (
        input_tokens * PRICE_INPUT_PER_1M / 1_000_000
        + output_tokens * PRICE_OUTPUT_PER_1M / 1_000_000
    )

    record = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "file": str(out_path),
        "model": "gemini-2.5-flash-image",
        "aspect_ratio": "16:9",
        "input_tokens": input_tokens,
        "output_tokens": output_tokens,
        "total_tokens": total_tokens,
        "paid_tier_cost_usd": round(cost_usd, 6),
    }

    USAGE_LOG.parent.mkdir(parents=True, exist_ok=True)
    with USAGE_LOG.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record) + "\n")
    return record


def generate_one(client: genai.Client, prompt: str, out_path: Path,
                 limiter: RateLimiter) -> bool:
    """
    Call Gemini 2.5 Flash Image with aspect_ratio='16:9' and write the first
    returned image to out_path. Returns True on success. Respects the
    provided RateLimiter before issuing the API call.
    """
    print(f"-> generating {out_path}")
    limiter.wait()
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(aspect_ratio="16:9"),
        ),
    )

    for part in response.candidates[0].content.parts:
        inline = getattr(part, "inline_data", None)
        if inline and inline.data:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_bytes(inline.data)
            print(f"   wrote {out_path} ({len(inline.data):,} bytes)")
            rec = log_usage(out_path, response)
            print(
                f"   tokens in/out: {rec['input_tokens']}/{rec['output_tokens']}  "
                f"paid-tier cost: ${rec['paid_tier_cost_usd']:.4f}  "
                f"(free on the free tier)"
            )
            return True

    print(f"   ERROR: no image data returned")
    # Dump any text parts for debugging
    for part in response.candidates[0].content.parts:
        if getattr(part, "text", None):
            print(f"   text part: {part.text[:300]}")
    return False


def verify_dimensions(path: Path):
    """Return (width, height) using `sips` on macOS, or None on failure."""
    try:
        out = subprocess.check_output(
            ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)],
            text=True,
        )
        w = int(re.search(r"pixelWidth:\s*(\d+)", out).group(1))
        h = int(re.search(r"pixelHeight:\s*(\d+)", out).group(1))
        return w, h
    except Exception as e:
        print(f"   verify_dimensions failed: {e}")
        return None


def is_16_9(w: int, h: int, tolerance: float = 0.03) -> bool:
    return abs((w / h) - (16 / 9)) / (16 / 9) < tolerance


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("story_dir", help="Path to story directory containing index.md")
    ap.add_argument("--first-only", action="store_true",
                    help="Only generate the first (cover) image for testing")
    ap.add_argument("--skip-existing", action="store_true",
                    help="Skip images whose output file already exists")
    ap.add_argument("--rpm", type=int, default=DEFAULT_RPM_LIMIT,
                    help="Max requests per minute (default: 10, the free-tier cap). "
                         "Set higher on the paid tier, or 0 to disable throttling.")
    args = ap.parse_args()

    story_dir = Path(args.story_dir)
    index_md = story_dir / "index.md"
    if not index_md.exists():
        sys.exit(f"ERROR: {index_md} not found")

    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        sys.exit("ERROR: set GEMINI_API_KEY (or GOOGLE_API_KEY) in your environment")

    client = genai.Client(api_key=api_key)
    limiter = RateLimiter(args.rpm)

    prompts = extract_prompts(index_md)
    if not prompts:
        sys.exit(f"ERROR: no image prompts found in {index_md}")

    print(f"Found {len(prompts)} image prompts in {index_md}")
    if args.first_only:
        prompts = prompts[:1]
        print("--first-only: generating only the cover image for verification\n")

    for out_path, prompt in prompts:
        if args.skip_existing and out_path.exists():
            print(f"-> skipping {out_path} (already exists)\n")
            continue
        if not generate_one(client, prompt, out_path, limiter):
            sys.exit(1)
        dims = verify_dimensions(out_path)
        if dims:
            w, h = dims
            tag = "OK 16:9" if is_16_9(w, h) else "NOT 16:9"
            print(f"   dimensions: {w}x{h}  [{tag}]")
            if not is_16_9(w, h):
                sys.exit(f"ABORT: {out_path} is not 16:9 — check ImageConfig")
        print()

    # Per-run cost summary from today's appended records
    if USAGE_LOG.exists():
        today = datetime.now(timezone.utc).date().isoformat()
        today_records = []
        for line in USAGE_LOG.read_text(encoding="utf-8").splitlines():
            try:
                r = json.loads(line)
                if r.get("timestamp", "").startswith(today):
                    today_records.append(r)
            except json.JSONDecodeError:
                pass
        if today_records:
            total_cost = sum(r["paid_tier_cost_usd"] for r in today_records)
            total_tokens = sum(r["total_tokens"] for r in today_records)
            print(f"\nToday: {len(today_records)} images, "
                  f"{total_tokens:,} total tokens, "
                  f"${total_cost:.4f} paid-tier cost "
                  f"(free tier: {len(today_records)}/500 requests used)")

    print("Done.")


if __name__ == "__main__":
    main()
