# Image Generation Log: ada-lovelace

**Run date:** 2026-04-05  
**Run started:** 2026-04-05T11:09:19-05:00  
**Run finished:** 2026-04-05T11:11:02-05:00  
**Total wall-clock:** 103.4 seconds (1.7 minutes)  
**Story directory:** `docs/stories/ada-lovelace`  
**Source index:** `docs/stories/ada-lovelace/index.md`  
**Model:** `gemini-2.5-flash-image`  
**Aspect ratio:** `16:9` (native, no post-processing)  
**Rate limit:** 10 RPM  
**Rate-limiter total sleep:** 0.0 seconds  
**CLI flags:** (none)

## Summary

- **Images generated:** 13
- **Total input tokens:** 2,677
- **Total output tokens:** 16,770
- **Total tokens:** 19,447
- **Total PNG payload:** 22,831,433 bytes (21.77 MB)
- **Sum of per-image wall-clock:** 103.0 seconds
- **Paid-tier cost:** $0.5039
- **Free-tier quota used:** 13/500 (2.6% of one day)
- **Actual cost on free tier:** $0.00

## Per-Image Details

| # | File | Dimensions | Size (bytes) | Tokens in | Tokens out | Total tokens | Wall-clock (s) | Paid cost (USD) |
|---|------|------------|--------------|-----------|------------|--------------|----------------|-----------------|
| 1 | `cover.png` | 1344x768 | 1,816,509 | 262 | 1290 | 1552 | 8.2 | $0.0388 |
| 2 | `panel-01.png` | 1344x768 | 1,801,944 | 271 | 1290 | 1561 | 7.8 | $0.0388 |
| 3 | `panel-02.png` | 1344x768 | 1,812,922 | 204 | 1290 | 1494 | 7.3 | $0.0388 |
| 4 | `panel-03.png` | 1344x768 | 1,799,518 | 197 | 1290 | 1487 | 7.4 | $0.0388 |
| 5 | `panel-04.png` | 1344x768 | 1,676,671 | 222 | 1290 | 1512 | 6.8 | $0.0388 |
| 6 | `panel-05.png` | 1344x768 | 1,946,438 | 191 | 1290 | 1481 | 6.5 | $0.0388 |
| 7 | `panel-06.png` | 1344x768 | 1,721,425 | 182 | 1290 | 1472 | 7.8 | $0.0388 |
| 8 | `panel-07.png` | 1344x768 | 1,756,072 | 188 | 1290 | 1478 | 15.8 | $0.0388 |
| 9 | `panel-08.png` | 1344x768 | 1,797,304 | 197 | 1290 | 1487 | 6.4 | $0.0388 |
| 10 | `panel-09.png` | 1344x768 | 1,642,959 | 188 | 1290 | 1478 | 7.0 | $0.0388 |
| 11 | `panel-10.png` | 1344x768 | 1,559,202 | 187 | 1290 | 1477 | 6.1 | $0.0388 |
| 12 | `panel-11.png` | 1344x768 | 1,812,383 | 193 | 1290 | 1483 | 6.6 | $0.0388 |
| 13 | `panel-12.png` | 1344x768 | 1,688,086 | 195 | 1290 | 1485 | 9.1 | $0.0388 |

## Prompt Excerpts

First ~160 characters of each prompt, for provenance:

1. **`cover.png`** — Please generate a wide-landscape 16:9 cover image in Victorian Pre-Raphaelite painting style depicting Ada Lovelace, a poised young woman in her late twenties w
2. **`panel-01.png`** — I am about to ask you to generate a series of images for a graphic novel. Please make the images have a consistent style and consistent characters. Do not ask a
3. **`panel-02.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 2 of 12. Make the characters and style consistent with the prior panel. 
4. **`panel-03.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 3 of 12. Make the characters and style consistent with the prior panels.
5. **`panel-04.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 4 of 12. Make the characters and style consistent with the prior panels.
6. **`panel-05.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 5 of 12. Make the characters and style consistent with the prior panels.
7. **`panel-06.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 6 of 12. Make the characters and style consistent with the prior panels.
8. **`panel-07.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 7 of 12. Make the characters and style consistent with the prior panels.
9. **`panel-08.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 8 of 12. Make the characters and style consistent with the prior panels.
10. **`panel-09.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 9 of 12. Make the characters and style consistent with the prior panels.
11. **`panel-10.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 10 of 12. Make the characters and style consistent with the prior panels
12. **`panel-11.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite painting style depicting panel 11 of 12. Make the characters and style consistent with the prior panels
13. **`panel-12.png`** — Please generate a 16:9 image in Victorian Pre-Raphaelite style blended with modern photorealism depicting panel 12 of 12. Make the style consistent with the pri

## Notes

- Token counts and costs come directly from `response.usage_metadata` on each API response.
- All images returned at native 1344×768 via `types.ImageConfig(aspect_ratio="16:9")`. No post-processing.
- Free-tier rate limits: 10 RPM, 500 RPD, ~250,000 TPM. This run used 13 of 500 daily requests.
- The machine-readable JSONL equivalent of this log lives at `logs/image-generation-usage.jsonl`.
