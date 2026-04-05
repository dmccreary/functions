# MicroSim Generation Session Log

**Date:** 2026-04-03 / 2026-04-04
**Skill:** microsim-generator v0.07 + microsim-utils
**Execution Mode:** Parallel (6 background agents + 4 manually written)

## Summary

Generated 27 interactive p5.js MicroSim implementations for all 13 chapters of the IB Mathematics Functions textbook. Each MicroSim includes scaffolded `main.html`, `index.md`, `metadata.json`, and a responsive JavaScript implementation with interactive controls.

## Timing

| Phase | Duration |
|-------|----------|
| TODO extraction (microsim-utils) | ~30s |
| Scaffold generation (27 sims) | ~10s |
| Manual JS writing (4 sims) | ~8 min |
| Agent JS writing (23 sims, 6 parallel agents) | ~3.5 min wall clock (~20 min compute) |
| Utility scripts (fix heights, update nav) | ~15s |
| Commit, push, deploy | ~30s |
| **Total wall-clock time** | **~15 min** |

## Token Usage

| Component | Tokens | Tool Uses | Duration |
|-----------|--------|-----------|----------|
| Main conversation (skill loading, scaffolding, 4 manual sims, CPD) | ~161,000 | ~40 | — |
| Agent: Ch2 (4 sims) | 32,513 | 11 | 208s |
| Agent: Ch3 (3 sims) | 29,009 | 10 | 167s |
| Agent: Ch4 (3 sims) | 28,730 | 10 | 175s |
| Agent: Ch5 (3 sims) | 29,784 | 8 | 209s |
| Agent: Ch6-8 (5 sims) | 33,364 | 10 | 229s |
| Agent: Ch9-13 (5 sims) | 32,560 | 8 | 217s |
| **Total** | **~347,000** | **~97** | **~20 min compute** |

## Output Statistics

| Metric | Value |
|--------|-------|
| MicroSim JS files created | 27 |
| Total JS lines of code | 8,834 |
| Total JS words | 34,298 |
| Scaffold files (main.html + index.md + metadata.json) | 81 |
| Total files in docs/sims/ | 139 |
| Iframe heights fixed | 27 |
| mkdocs.yml nav entries added | 28 |

## MicroSims by Chapter

| Ch | MicroSim | JS Lines | Library |
|----|----------|----------|---------|
| 1 | number-system-hierarchy | 250 | p5.js |
| 1 | factoring-decision-flowchart | 168 | p5.js |
| 1 | expression-builder | 234 | p5.js |
| 2 | coordinate-plane-explorer | 248 | p5.js |
| 2 | function-vs-non-function-mapping | 416 | p5.js |
| 2 | domain-restriction-finder | 310 | p5.js |
| 2 | constant-identity-grapher | 269 | p5.js |
| 2 | function-property-classifier | 419 | p5.js |
| 3 | key-graph-features-explorer | 315 | p5.js |
| 3 | window-settings-simulator | 408 | p5.js |
| 3 | function-feature-identifier | 389 | p5.js |
| 4 | gradient-explorer | 284 | p5.js |
| 4 | simultaneous-equations-visualiser | 309 | p5.js |
| 4 | linear-model-builder | 343 | p5.js |
| 5 | quadratic-equation-solver | 386 | p5.js |
| 5 | sign-diagram-builder | 473 | p5.js |
| 5 | projectile-motion-simulator | 452 | p5.js |
| 6 | inverse-function-reflector | 275 | p5.js |
| 6 | composite-function-machine | 267 | p5.js |
| 7 | exponential-growth-decay-explorer | 256 | p5.js |
| 7 | exponential-model-simulator | 302 | p5.js |
| 8 | logarithm-equation-solver | 297 | p5.js |
| 9 | polynomial-graph-explorer | 281 | p5.js |
| 10 | rational-function-grapher | 269 | p5.js |
| 11 | modulus-transformation-explorer | 200 | p5.js |
| 12 | transformation-explorer | 270 | p5.js |
| 13 | regression-model-fitter | 366 | p5.js |

## Workflow

1. **Extract specs** — `create-microsim-todo-json-files.py` scanned 13 chapters, found 27 `#### Diagram:` specs, wrote TODO JSON files to `docs/sims/TODO/`
2. **Convert & scaffold** — Converted TODO JSONs to spec format, ran `generate-sim-scaffold.py` to create 27 directories with `main.html`, `index.md`, `metadata.json`
3. **Implement JS** — Wrote 4 files manually (coordinate-plane-explorer, number-system-hierarchy, expression-builder, factoring-decision-flowchart), then launched 6 parallel background agents for the remaining 23
4. **Fix heights** — `fix-iframe-heights.py` updated all 27 iframe heights to match JS canvas dimensions
5. **Update nav** — `update-mkdocs-nav.py` added 28 MicroSim entries to mkdocs.yml
6. **Deploy** — Committed 55 files (8,513 insertions), pushed, deployed via `mkdocs gh-deploy`

## Utility Scripts Used

| Script | Purpose | Result |
|--------|---------|--------|
| `create-microsim-todo-json-files.py` | Extract diagram specs from chapters | 27 TODO JSONs |
| `generate-sim-scaffold.py` | Create directory structure | 27 directories scaffolded |
| `fix-iframe-heights.py` | Match iframe heights to JS canvas | 27 heights fixed |
| `update-mkdocs-nav.py` | Update mkdocs.yml navigation | 28 nav entries |
| `add-iframes-to-chapter.py` | Fix chapter iframe paths/heights | No changes needed |

## Notes

- All sims follow p5.js MicroSim standards: responsive width, `aliceblue` drawing area, `white` control area, `silver` borders, native p5.js controls, `CANVAS_HEIGHT` comment
- No charting MicroSims were needed (all specs were interactive educational simulations suitable for p5.js)
- The 6-agent parallel approach reduced wall-clock time from an estimated ~60 min (sequential) to ~3.5 min for the JS implementation phase
