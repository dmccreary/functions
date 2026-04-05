# Image Generation Log: katherine-johnson

**Run date:** 2026-04-05  
**Run started:** 2026-04-05T12:09:18-05:00  
**Run finished:** 2026-04-05T12:11:06-05:00  
**Total wall-clock:** 108.3 seconds (1.8 minutes)  
**Story directory:** `docs/stories/katherine-johnson`  
**Source index:** `docs/stories/katherine-johnson/index.md`  
**Model:** `gemini-2.5-flash-image`  
**Aspect ratio:** `16:9` (native, no post-processing)  
**Rate limit:** 10 RPM  
**Rate-limiter total sleep:** 0.0 seconds  
**CLI flags:** `--skip-existing`

## Summary

- **Images generated:** 13
- **Total input tokens:** 2,597
- **Total output tokens:** 16,770
- **Total tokens:** 19,367
- **Total PNG payload:** 22,307,676 bytes (21.27 MB)
- **Sum of per-image wall-clock:** 107.8 seconds
- **Paid-tier cost:** $0.5039
- **Free-tier quota used:** 13/500 (2.6% of one day)
- **Actual cost on free tier:** $0.00

## Per-Image Details

| # | File | Dimensions | Size (bytes) | Tokens in | Tokens out | Total tokens | Wall-clock (s) | Paid cost (USD) |
|---|------|------------|--------------|-----------|------------|--------------|----------------|-----------------|
| 1 | `cover.png` | 1344x768 | 1,727,648 | 195 | 1290 | 1485 | 7.8 | $0.0388 |
| 2 | `panel-01.png` | 1344x768 | 1,526,237 | 211 | 1290 | 1501 | 6.9 | $0.0388 |
| 3 | `panel-02.png` | 1344x768 | 2,113,534 | 211 | 1290 | 1501 | 12.1 | $0.0388 |
| 4 | `panel-03.png` | 1344x768 | 1,888,404 | 212 | 1290 | 1502 | 10.2 | $0.0388 |
| 5 | `panel-04.png` | 1344x768 | 1,801,110 | 197 | 1290 | 1487 | 10.0 | $0.0388 |
| 6 | `panel-05.png` | 1344x768 | 1,678,460 | 199 | 1290 | 1489 | 8.5 | $0.0388 |
| 7 | `panel-06.png` | 1344x768 | 1,645,510 | 214 | 1290 | 1504 | 9.0 | $0.0388 |
| 8 | `panel-07.png` | 1344x768 | 1,925,735 | 199 | 1290 | 1489 | 6.4 | $0.0388 |
| 9 | `panel-08.png` | 1344x768 | 1,654,432 | 177 | 1290 | 1467 | 7.0 | $0.0388 |
| 10 | `panel-09.png` | 1344x768 | 1,155,248 | 202 | 1290 | 1492 | 6.5 | $0.0388 |
| 11 | `panel-10.png` | 1344x768 | 1,437,536 | 201 | 1290 | 1491 | 6.9 | $0.0388 |
| 12 | `panel-11.png` | 1344x768 | 1,913,952 | 192 | 1290 | 1482 | 8.9 | $0.0388 |
| 13 | `panel-12.png` | 1344x768 | 1,839,870 | 187 | 1290 | 1477 | 7.5 | $0.0388 |

## Prompt Excerpts

First ~160 characters of each prompt, for provenance:

1. **`cover.png`** — Please generate a wide-landscape 16:9 cover image in mid-century Atomic Age illustration style depicting Katherine Johnson, an African American mathematician in
2. **`panel-01.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
3. **`panel-02.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
4. **`panel-03.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
5. **`panel-04.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
6. **`panel-05.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
7. **`panel-06.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
8. **`panel-07.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
9. **`panel-08.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
10. **`panel-09.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
11. **`panel-10.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
12. **`panel-11.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
13. **`panel-12.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a

## Notes

- Token counts and costs come directly from `response.usage_metadata` on each API response.
- All images returned at native 1344×768 via `types.ImageConfig(aspect_ratio="16:9")`. No post-processing.
- Free-tier rate limits: 10 RPM, 500 RPD, ~250,000 TPM. This run used 13 of 500 daily requests.
- The machine-readable JSONL equivalent of this log lives at `logs/image-generation-usage.jsonl`.
