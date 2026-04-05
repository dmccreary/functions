# Image Generation Log: frank-drake

**Run date:** 2026-04-05  
**Run started:** 2026-04-05T12:13:46-05:00  
**Run finished:** 2026-04-05T12:15:37-05:00  
**Total wall-clock:** 111.7 seconds (1.9 minutes)  
**Story directory:** `docs/stories/frank-drake`  
**Source index:** `docs/stories/frank-drake/index.md`  
**Model:** `gemini-2.5-flash-image`  
**Aspect ratio:** `16:9` (native, no post-processing)  
**Rate limit:** 10 RPM  
**Rate-limiter total sleep:** 0.0 seconds  
**CLI flags:** `--skip-existing`

## Summary

- **Images generated:** 13
- **Total input tokens:** 2,947
- **Total output tokens:** 16,770
- **Total tokens:** 19,717
- **Total PNG payload:** 22,326,271 bytes (21.29 MB)
- **Sum of per-image wall-clock:** 111.2 seconds
- **Paid-tier cost:** $0.5040
- **Free-tier quota used:** 13/500 (2.6% of one day)
- **Actual cost on free tier:** $0.00

## Per-Image Details

| # | File | Dimensions | Size (bytes) | Tokens in | Tokens out | Total tokens | Wall-clock (s) | Paid cost (USD) |
|---|------|------------|--------------|-----------|------------|--------------|----------------|-----------------|
| 1 | `cover.png` | 1344x768 | 1,645,117 | 222 | 1290 | 1512 | 6.8 | $0.0388 |
| 2 | `panel-01.png` | 1344x768 | 1,606,216 | 224 | 1290 | 1514 | 13.7 | $0.0388 |
| 3 | `panel-02.png` | 1344x768 | 1,943,728 | 228 | 1290 | 1518 | 12.5 | $0.0388 |
| 4 | `panel-03.png` | 1344x768 | 1,859,980 | 209 | 1290 | 1499 | 8.2 | $0.0388 |
| 5 | `panel-04.png` | 1344x768 | 1,980,322 | 249 | 1290 | 1539 | 9.0 | $0.0388 |
| 6 | `panel-05.png` | 1344x768 | 1,397,812 | 203 | 1290 | 1493 | 6.0 | $0.0388 |
| 7 | `panel-06.png` | 1344x768 | 1,823,819 | 226 | 1290 | 1516 | 8.4 | $0.0388 |
| 8 | `panel-07.png` | 1344x768 | 1,862,884 | 253 | 1290 | 1543 | 8.0 | $0.0388 |
| 9 | `panel-08.png` | 1344x768 | 1,491,348 | 224 | 1290 | 1514 | 6.7 | $0.0388 |
| 10 | `panel-09.png` | 1344x768 | 1,362,064 | 226 | 1290 | 1516 | 6.6 | $0.0388 |
| 11 | `panel-10.png` | 1344x768 | 1,626,995 | 229 | 1290 | 1519 | 7.8 | $0.0388 |
| 12 | `panel-11.png` | 1344x768 | 1,994,817 | 225 | 1290 | 1515 | 9.2 | $0.0388 |
| 13 | `panel-12.png` | 1344x768 | 1,731,169 | 229 | 1290 | 1519 | 8.2 | $0.0388 |

## Prompt Excerpts

First ~160 characters of each prompt, for provenance:

1. **`cover.png`** — Please generate a wide-landscape 16:9 cover image in mid-century space age graphic-novel style depicting Frank Drake as a young astronomer in a dark suit, narro
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
