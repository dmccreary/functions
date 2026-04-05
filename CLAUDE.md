# IB Mathematics Functions — Project Guide

## Content Style Guide

### Audience and Tone

This textbook is for **IB Diploma Programme high school students** (SL and HL/AHL). Write at a level that challenges bright 16-18 year olds without talking down to them. Assume basic algebra and coordinate geometry but nothing beyond the prerequisites.

- **Conversational but precise** — explain ideas the way a great teacher would at the whiteboard, not like a dry reference manual
- **Optimistic and encouraging** — math can be intimidating; always frame difficulty as a solvable challenge, never as something to fear
- **Concrete before abstract** — lead with examples, visuals, or real-world hooks before formalizing definitions
- **Active voice** — "We solve for $x$" not "It can be shown that $x$ is solved for"
- **Second person welcome** — address the reader as "you" freely

### Chapter Content Conventions

- Start every chapter with a Rick welcome admonition
- End every major section with a short Rick celebration or encouragement
- Use 2-3 worked examples per major concept
- Include "Try it yourself" exercises after worked examples
- Favor MathJax ($...$) for inline math and ($$...$$) for display math
- Keep paragraphs short — 3-5 sentences max
- Use IB terminology: "gradient" not just "slope", "y-intercept" not just "b value"
- Cross-reference prerequisite chapters when building on earlier ideas
- When multiple representations exist (equation, graph, table), show at least two
- **Never use a term before it is defined** — if a concept hasn't been formally introduced yet in the current chapter (or a prior chapter), either define it first, use plain language instead, or add an explicit forward reference ("we'll define this properly in the next section"). This applies to prose, examples, diagram labels, and table cells alike. If you are unsure which chapter a concept belongs to, check the learning graph at `docs/learning-graph/learning-graph.json` — each concept's dependencies and chapter assignment will tell you whether it has been introduced yet.

### Math Notation

- Use IB-standard notation: $f(x)$, $f^{-1}(x)$, $(f \circ g)(x)$
- Discriminant: $\Delta = b^2 - 4ac$
- Gradient-intercept form: $y = mx + c$ (not $y = mx + b$)
- General form: $ax + by + d = 0$
- Always define variables before using them in equations
- Never place two `$$` display math blocks on consecutive lines — always separate them with a blank line. MathJax merges the closing `$$` and opening `$$` into `$$$$`, breaking rendering.
- Never use inline `$$...$$` display math embedded mid-sentence — use `$...$` for anything that flows with prose. Reserve `$$...$$` for standalone display equations on their own line.

### MathJax + arithmatex delimiter gotcha

This project uses `pymdownx.arithmatex` with `generic: true`, which converts `$...$` and `$$...$$` in markdown into `\(...\)` and `\[...\]` in the final HTML before MathJax sees it. Therefore `docs/js/mathjax.js` MUST declare **both** delimiter forms:

```js
inlineMath:  [["\\(", "\\)"], ["$", "$"]],
displayMath: [["\\[", "\\]"], ["$$", "$$"]],
```

If you ever see literal `\(...\)` text on a rendered page instead of typeset math, the MathJax config is missing the backslash-paren delimiters — fix the config, not the source markdown. Author source should always use `$...$` / `$$...$$`.

---

## Learning Mascot: Rick the Raccoon

### Character Overview

- **Name**: Rick
- **Species**: Raccoon
- **Personality**: Funny, playful, optimistic, supportive, and clever — with a mischievous streak
- **Catchphrase**: "Every input has its output!"
- **Visual**: A compact, round cartoon raccoon with gray, brown, tan and black fur, bushy striped tail, signature black mask markings around bright clever eyes, and a mischievous grin. No hat, no clothing, nothing in hands — simple and expressive.

### Rick's Voice

Rick talks like a clever friend who genuinely loves math and can't help cracking jokes about it. He's the kind of character who makes you smile even when the quadratic formula is giving you grief.

- **Funny** — drops puns, wordplay, and light jokes naturally into his commentary
- **Playful** — teases the tricky parts of math without being mean about it ("Asymptotes: the lines your graph keeps chasing but never catches. We've all been there.")
- **Optimistic** — treats every problem as an adventure, never a burden
- **Supportive** — normalizes struggle and celebrates every small win
- **Clever** — sneaks in deeper insights disguised as casual observations

Example Rick lines:

- "Why did the function break up with the equation? It needed more space — specifically, a whole range of it!"
- "Parallel lines have so much in common. It's a shame they'll never meet."
- "The discriminant is basically a spoiler alert for your quadratic. Negative? Plot twist — no real roots!"
- "Completing the square sounds fancy, but it's really just giving your quadratic a makeover into vertex form. Glow-up time!"
- "Logarithms are just exponentials looking in a mirror. Reflect on that for a moment."

Signature phrases:

- "Every input has its output!"
- "Let's map this out!"
- "Now that's a function worth knowing!"
- "Trust the process — and the math."
- "Time to get this show on the coordinate plane!"

### Rick's Humor Guidelines

- **Math puns are always welcome** — the groaner the better
- **One joke or pun per admonition max** — humor should enhance, not distract
- **Never joke about the student's ability** — jokes target the math, not the learner
- **Jokes should illuminate** — the best Rick jokes also teach something ("Vertical asymptotes: where the function goes to infinity and beyond... but the domain says 'you shall not pass!'")
- **Keep it clean and inclusive** — appropriate for a global IB classroom

### Mascot Admonition Format

Always place mascot images in the admonition body, never in the title bar:

```markdown
!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Every input has its output — and your input today is showing up ready to learn.
    Let's map this out!
```

### Placement Rules

| Context | Admonition Type | Image | Frequency |
|---------|----------------|-------|-----------|
| Chapter opening | mascot-welcome | welcome.png | Every chapter |
| Key concept / insight | mascot-thinking | thinking.png | 2-3 per chapter |
| Helpful tip or shortcut | mascot-tip | tip.png | As needed |
| Common mistake / pitfall | mascot-warning | warning.png | As needed |
| Difficult content | mascot-encourage | encouraging.png | Where students struggle |
| Section / chapter completion | mascot-celebration | celebration.png | End of major sections |
| General sidebar | mascot-neutral | neutral.png | As needed |

### Do's and Don'ts

**Do:**

- Let Rick open every chapter with warmth and a joke
- Include the catchphrase in welcome admonitions
- Keep Rick's dialogue brief (1-3 sentences) — he's witty, not long-winded
- Match the pose/image to the content type
- Let Rick's humor emerge from the math itself
- Use Rick's warnings to defuse anxiety ("This looks scary, but I promise it's just algebra in a trenchcoat.")

**Don't:**

- Use Rick more than 6-7 times per chapter
- Put mascot admonitions back-to-back
- Use Rick for purely decorative purposes
- Force jokes where they don't fit — sometimes a straight tip is better
- Change Rick's personality between chapters — he's consistently upbeat
- Have Rick explain the math in detail — he comments on it, the textbook teaches it
