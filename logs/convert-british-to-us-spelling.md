# Session Log: Convert British Spellings to US English

**Date:** 2026-04-05
**Task:** Audit the entire textbook content and replace British English spellings with US English equivalents. Target audience is US English readers.

## Motivation

While adding an introductory paragraph for the Expression Explorer MicroSim iframe in `docs/chapters/01-algebra-foundations/index.md`, the cSpell linter surfaced several "unknown word" diagnostics. The flagged words included `colour`, `visualise`, `recognise`, `recognises`, and `internalise` — all British spellings. The user had not realized the book contained British spellings and requested a full audit and replacement to US English, since the textbook is intended for a US audience. The user also requested that this preference be recorded in `CLAUDE.md` so future content generation follows the convention.

## Scope

- **Root directory audited:** `/Users/dan/Documents/ws/functions/docs/`
- **File types processed:** `.md`, `.txt`, `.js`, `.json`
- **Excluded:** `.git/`, `site/` build output, file/URL paths, and MkDocs Material theme color names

## Initial Discovery Pass

Ran a broad regex grep against `/Users/dan/Documents/ws/functions/docs/` to scope the problem. The initial hit list included British spellings across:

- Every chapter `index.md` (chapters 01–13)
- Multiple chapter `quiz.md` files
- `docs/glossary.md`
- `docs/course-notes.txt`
- `docs/learning-graph/diagram-details.md` and `diagram-table.md`
- `docs/sims/index.md`
- 20+ MicroSim JSON spec files in `docs/sims/TODO/`
- MicroSim JS source files (in code comments)
- The `simultaneous-equations-visualiser` MicroSim directory

The volume (~24KB of grep output) warranted delegation to a general-purpose sub-agent for systematic batch processing.

## Delegation and Replacement Rules

A general-purpose agent was given a complete replacement map covering the following British → US conversions (case-preserving for both lowercase and Capitalized forms):

### Spelling conversions applied

| British | US |
|---------|-----|
| behaviour / behaviours | behavior / behaviors |
| colour / colours / coloured / colouring | color / colors / colored / coloring |
| visualise / visualised / visualising / visualiser | visualize / visualized / visualizing / visualizer |
| recognise / recognised / recognises / recognising | recognize / recognized / recognizes / recognizing |
| organise / organised / organising | organize / organized / organizing |
| analyse / analysed / analyses / analysing | analyze / analyzed / analyzes / analyzing |
| internalise | internalize |
| summarise / summarises / summarising | summarize / summarizes / summarizing |
| categorise | categorize |
| emphasise | emphasize |
| utilise | utilize |
| realise / realised / realises | realize / realized / realizes |
| memorise | memorize |
| normalise | normalize |
| generalise | generalize |
| characterise | characterize |
| specialise | specialize |
| minimise / maximise / optimise | minimize / maximize / optimize |
| factorise / factorised / factorising | factorize / factorized / factorizing |
| parameterise | parameterize |
| centre / centred / centres / centring | center / centered / centers / centering |
| metre / metres | meter / meters |
| litre / litres | liter / liters |
| theatre | theater |
| fibre | fiber |
| favour / favoured / favours | favor / favored / favors |
| honour / labour / neighbour | honor / labor / neighbor |
| programme / programmes | program / programs *(except proper nouns)* |
| catalogue | catalog |
| grey / greyish | gray / grayish *(except MkDocs theme names)* |
| travelled / travelling | traveled / traveling |
| modelling / modelled | modeling / modeled |
| cancelled / cancelling | canceled / canceling |
| labelled / labelling | labeled / labeling |
| signalled / fuelled | signaled / fueled |
| practise / practised (verbs) | practice / practiced |
| learnt / spelt | learned / spelled |
| whilst / amongst | while / among |
| judgement / acknowledgement | judgment / acknowledgment |
| fulfil / fulfilment | fulfill / fulfillment |
| enrol / enrolment | enroll / enrollment |
| skilful | skillful |
| aluminium / sulphur | aluminum / sulfur |
| manoeuvre | maneuver |
| aeroplane | airplane |

### Preservation rules enforced

1. **"Programme"** preserved only when part of the proper noun **"International Baccalaureate Diploma Programme"**.
2. **"grey" / "blue grey"** preserved only when referencing the MkDocs Material palette color names (e.g., in `docs/teachers-guide/index.md`).
3. **Filesystem and URL paths** for the existing `simultaneous-equations-visualiser` sim directory were left untouched to avoid breaking links; display/title text in prose was still converted to "Visualizer".
4. **Code identifiers** (variable names, function names, API identifiers) left alone; code **comments** were converted.
5. **Case preserved** on every substitution (e.g., `Behaviour` → `Behavior`, `Visualise` → `Visualize`).
6. **URLs and filenames** never modified.

## Results

### Files modified: 45

**Chapter content (16 files):**

- `docs/chapters/01-algebra-foundations/index.md`
- `docs/chapters/02-relations-and-functions/index.md`
- `docs/chapters/03-graphing-and-key-features/index.md`, `quiz.md`
- `docs/chapters/04-linear-functions/index.md`
- `docs/chapters/05-quadratic-functions/index.md`
- `docs/chapters/06-inverse-and-composite-functions/index.md`
- `docs/chapters/07-exponential-functions/index.md`
- `docs/chapters/08-logarithmic-functions/index.md`
- `docs/chapters/09-polynomial-functions/index.md`, `quiz.md`
- `docs/chapters/10-rational-functions/index.md`
- `docs/chapters/11-function-classifications/index.md`
- `docs/chapters/12-transformations/index.md`
- `docs/chapters/13-modeling-and-applications/index.md`, `quiz.md`

**Reference / supporting content (4 files):**

- `docs/glossary.md`
- `docs/course-notes.txt`
- `docs/learning-graph/diagram-details.md`
- `docs/learning-graph/diagram-table.md`

**MicroSim files (25 files):**

- `docs/sims/index.md`
- `docs/sims/polynomial-graph-explorer/polynomial-graph-explorer.js` (code comments)
- `docs/sims/simultaneous-equations-visualiser/index.md`
- `docs/sims/simultaneous-equations-visualiser/metadata.json`
- `docs/sims/simultaneous-equations-visualiser/simultaneous-equations-visualiser.js`
- All 20 JSON spec files under `docs/sims/TODO/`

### Intentionally preserved items

| Item | Location | Reason |
|------|----------|--------|
| "Programme" (x5) | `about.md`, `course-description.md`, `teachers-guide/index.md`, `faq.md` | Part of proper noun "International Baccalaureate Diploma Programme" |
| "grey" / "blue grey" | `teachers-guide/index.md:270` | MkDocs Material theme palette color names |
| `simultaneous-equations-visualiser` path | Directory name, PNG filenames, iframe src attributes, sim_id fields, anchor fragments in `sims/index.md`, the sim's own `index.md`, the TODO JSON spec, chapter 04 index, and learning-graph markdown | Filesystem/URL stability — renaming would break inbound links and deployment |
| "enrol" (bare form) | n/a | Not found; rule documented but not applied to avoid collision with "enrolled" |
| "dialogue" | n/a | Not found in prose |

### Verification

A post-audit grep confirmed no remaining British spellings except the preserved items above. False-positive substring matches (`characteristic`, `cancellation`) are already standard US English and were left as-is.

## CLAUDE.md Update

Added a new bullet under `## Content Style Guide → ### Audience and Tone` in `/Users/dan/Documents/ws/functions/CLAUDE.md`:

> **US English spelling only** — this textbook targets US English readers. Always use US spellings: color (not colour), behavior (not behaviour), center (not centre), meter (not metre), analyze (not analyse), visualize (not visualise), recognize (not recognise), modeling (not modelling), labeled (not labelled), practice (not practise as a verb), etc. The one exception is the proper noun "International Baccalaureate Diploma Programme," which retains its official British spelling.

This ensures future chapter-content-generator, glossary-generator, quiz-generator, and MicroSim-generator skill runs will default to US English.

## Follow-up Items (not done in this session)

- The `simultaneous-equations-visualiser` directory name still uses the British spelling. Renaming it to `simultaneous-equations-visualizer` would require coordinated updates across filesystem, iframe `src` attributes, `mkdocs.yml` nav, sim metadata, and any deployed/cached links. Deferred to avoid breaking the live site.
- Consider enabling a cSpell configuration with a shared US English dictionary for the project so future British spellings are caught at author time.
- No files were committed or pushed; the user can run `/publish` (CPD) when ready to deploy.

## Files Touched in This Session

- 45 content files under `docs/` (British → US spelling conversions)
- `CLAUDE.md` (added US English spelling rule)
- `logs/convert-british-to-us-spelling.md` (this log)
