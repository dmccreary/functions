---
title: Rational Functions
description: Analyzing rational functions, asymptotes (vertical, horizontal, oblique), hyperbolas, graphing rational functions, and identifying holes
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:54:00
version: 0.07
---

# Rational Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the chapter where functions get dramatic! Rational functions have asymptotes — invisible lines that the graph chases forever but never catches. We've all been there. Vertical asymptotes where the function explodes, horizontal asymptotes where it levels off, and even oblique asymptotes that tilt at an angle. Every input has its output — well, almost every input. Let's map this out!

## Summary

This chapter analyzes rational functions and their distinctive graphical behaviors. Students study the hyperbola as the graph of the reciprocal function, then explore vertical, horizontal, and oblique asymptotes. The chapter covers sketching rational functions of the form $f(x) = \frac{ax + b}{cx + d}$ and AHL extensions, identifying asymptotic behaviour, and detecting holes in graphs caused by common factors.

## Concepts Covered

This chapter covers the following 9 concepts from the learning graph:

1. Hyperbola
2. Vertical Asymptote
3. Horizontal Asymptote
4. Asymptotic Behavior
5. Rational Function
6. Rational Form Ax Plus B
7. Oblique Asymptote
8. Graphing Rational Functions
9. Holes in Rational Graphs

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)
- [Chapter 6: Inverse and Composite Functions](../06-inverse-and-composite-functions/index.md)
- [Chapter 9: Polynomial Functions](../09-polynomial-functions/index.md)

---

## The Hyperbola

In Chapter 6, we met the reciprocal function $f(x) = \frac{1}{x}$. Its graph is called a **hyperbola** — a curve with two separate branches that approach the axes but never touch them.

The basic hyperbola $y = \frac{1}{x}$ has these key features:

- Two branches: one in the first quadrant ($x > 0, y > 0$) and one in the third quadrant ($x < 0, y < 0$)
- The $x$-axis and $y$-axis act as boundary lines that the graph approaches infinitely closely
- Domain: $\{x \mid x \neq 0\}$; Range: $\{y \mid y \neq 0\}$
- The function is self-inverse: $f(f(x)) = x$

The hyperbola is the prototype for all rational functions. Every concept we develop in this chapter — asymptotes, holes, graphing techniques — builds on this familiar shape.

## Asymptotes

An asymptote is a line that a graph approaches but never reaches (or reaches only in the limit). Asymptotes are invisible boundaries that shape the graph's behaviour. There are three types.

### Vertical Asymptotes

A **vertical asymptote** is a vertical line $x = k$ where the function's output grows without bound (tends to $\pm\infty$). Vertical asymptotes occur where the denominator of a rational function equals zero (provided the numerator doesn't also equal zero at the same point).

To find vertical asymptotes: set the denominator equal to zero and solve.

**Worked Example 1:** Find the vertical asymptote of $f(x) = \frac{3}{x - 2}$.

Set the denominator to zero: $x - 2 = 0$, so $x = 2$.

The vertical asymptote is $x = 2$. As $x$ approaches $2$ from the right, $f(x) \to +\infty$. As $x$ approaches $2$ from the left, $f(x) \to -\infty$.

### Horizontal Asymptotes

A **horizontal asymptote** is a horizontal line $y = k$ that the graph approaches as $x \to \pm\infty$. It describes the function's end behaviour.

To find horizontal asymptotes, compare the degrees of the numerator and denominator:

| Degree Comparison | Horizontal Asymptote |
|------------------|---------------------|
| Numerator degree $<$ denominator degree | $y = 0$ |
| Numerator degree $=$ denominator degree | $y = \frac{\text{leading coefficient of numerator}}{\text{leading coefficient of denominator}}$ |
| Numerator degree $>$ denominator degree | No horizontal asymptote (see oblique) |

**Worked Example 2:** Find the horizontal asymptote of $f(x) = \frac{2x + 3}{x - 1}$.

Both numerator and denominator have degree $1$ (equal degrees). The horizontal asymptote is:

$$y = \frac{2}{1} = 2$$

### Oblique Asymptotes

An **oblique asymptote** (also called a slant asymptote) occurs when the degree of the numerator is exactly one more than the degree of the denominator. The oblique asymptote is a slanted line that the graph approaches at extreme values of $x$.

To find it, perform polynomial division — the quotient (ignoring the remainder) gives the equation of the oblique asymptote.

**Worked Example 3:** Find the oblique asymptote of $f(x) = \frac{x^2 + 2x - 1}{x - 1}$.

Divide $x^2 + 2x - 1$ by $x - 1$:

$$\frac{x^2 + 2x - 1}{x - 1} = x + 3 + \frac{2}{x - 1}$$

As $x \to \pm\infty$, the remainder $\frac{2}{x-1} \to 0$, so the oblique asymptote is $y = x + 3$.

**Try it yourself:** Find all asymptotes of $g(x) = \frac{5}{x + 4}$.

??? note "Click to reveal answer"
    Vertical: $x = -4$. Horizontal: $y = 0$ (numerator degree $<$ denominator degree). No oblique asymptote.

### Asymptotic Behaviour

**Asymptotic behaviour** describes how the function behaves near its asymptotes. Near a vertical asymptote, the function values grow without bound. Near a horizontal or oblique asymptote, the function values settle toward the asymptote line.

Understanding asymptotic behaviour is essential for accurate graphing. You need to know not just *where* the asymptotes are, but *how* the graph approaches them — from above or below, from the left or right.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Vertical asymptotes are like walls — the function smashes into them at full speed, shooting off to infinity. Horizontal asymptotes are like horizons — the function approaches them gently, getting closer and closer but never quite arriving. And oblique asymptotes? Those are tilted horizons. Same idea, just at an angle.

## Rational Functions

A **rational function** is the ratio of two polynomials:

$$f(x) = \frac{p(x)}{q(x)}, \quad q(x) \neq 0$$

The domain excludes all values where the denominator is zero. Rational functions exhibit the asymptotic behaviour we've just described, and their graphs can have complex, multi-branched shapes.

### The Form $\frac{ax + b}{cx + d}$

The most common rational function in the IB SL course has the **rational form**:

$$f(x) = \frac{ax + b}{cx + d}$$

This function has exactly:

- One vertical asymptote at $x = -\frac{d}{c}$
- One horizontal asymptote at $y = \frac{a}{c}$

Its graph is always a transformed hyperbola — a shifted, stretched, and possibly reflected version of $\frac{1}{x}$.

**Worked Example 4:** Sketch the key features of $f(x) = \frac{3x + 1}{x - 2}$.

- **Vertical asymptote:** $x = 2$
- **Horizontal asymptote:** $y = \frac{3}{1} = 3$
- **$y$-intercept:** $f(0) = \frac{1}{-2} = -\frac{1}{2}$, so $(0, -0.5)$
- **$x$-intercept:** $3x + 1 = 0$, so $x = -\frac{1}{3}$, giving $(-\frac{1}{3}, 0)$

**Worked Example 5:** Find the intercepts and asymptotes of $g(x) = \frac{2x - 4}{x + 1}$.

- **Vertical asymptote:** $x = -1$
- **Horizontal asymptote:** $y = 2$
- **$y$-intercept:** $g(0) = \frac{-4}{1} = -4$
- **$x$-intercept:** $2x - 4 = 0$, so $x = 2$

**Try it yourself:** Find all asymptotes and intercepts of $h(x) = \frac{x - 5}{2x + 3}$.

??? note "Click to reveal answer"
    Vertical: $x = -\frac{3}{2}$. Horizontal: $y = \frac{1}{2}$. $y$-intercept: $h(0) = \frac{-5}{3} = -\frac{5}{3}$. $x$-intercept: $x = 5$.

## Holes in Rational Graphs

A **hole** (also called a removable discontinuity) occurs in the graph of a rational function when both the numerator and denominator share a common factor. At that point, the function is undefined, but the graph has a "missing dot" rather than an asymptote.

**Worked Example 6:** Identify the hole in $f(x) = \frac{x^2 - 4}{x - 2}$.

Factor the numerator: $\frac{(x-2)(x+2)}{x - 2}$.

The factor $(x - 2)$ cancels, leaving $f(x) = x + 2$ for $x \neq 2$.

At $x = 2$: the original function is undefined (denominator is zero), but the simplified form gives $y = 4$. So there's a **hole at $(2, 4)$**.

The graph looks like the line $y = x + 2$ with a single point removed at $(2, 4)$.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    When the numerator and denominator share a common factor, you get a hole — NOT a vertical asymptote. Cancel the common factor first, then check what's left. If the denominator still has factors that equal zero, *those* give vertical asymptotes. The cancelled factors give holes. Don't confuse the two!

**Try it yourself:** Does $g(x) = \frac{x^2 - 9}{x^2 - x - 6}$ have a hole, an asymptote, or both?

??? note "Click to reveal answer"
    Factor: $\frac{(x-3)(x+3)}{(x-3)(x+2)}$. Common factor $(x-3)$: **hole at $x = 3$**, where $y = \frac{3+3}{3+2} = \frac{6}{5}$. Remaining denominator $(x+2)$: **vertical asymptote at $x = -2$**. Both!

## Graphing Rational Functions

**Graphing rational functions** follows a systematic process:

1. **Factor** numerator and denominator completely
2. **Identify holes** — cancel common factors and note the coordinates
3. **Find vertical asymptotes** — remaining zeros of the denominator
4. **Find horizontal/oblique asymptotes** — compare degrees
5. **Find intercepts** — $y$-intercept ($x = 0$) and $x$-intercepts (numerator $= 0$)
6. **Test behaviour near asymptotes** — determine which direction the graph goes
7. **Plot and sketch** — connect the pieces smoothly

#### Diagram: Rational Function Grapher
<iframe src="../../sims/rational-function-grapher/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Rational Function Grapher</summary>
Type: microsim
**sim-id:** rational-function-grapher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore rational functions by adjusting the coefficients in $\frac{ax+b}{cx+d}$ and observing how the asymptotes, intercepts, and graph shape change in real time.

Learning Objective: Students will analyse how the parameters of a rational function determine its asymptotes, intercepts, and overall graph shape (Analyze L4 — examine, differentiate).

Instructional Rationale: Real-time parameter manipulation makes the relationship between coefficients and graph features immediate. Students can experiment with "what if" questions: "What happens to the vertical asymptote if I change $d$?"

Visual elements:

- A coordinate grid showing the rational function graph with two branches
- Vertical asymptote drawn as a dashed red vertical line
- Horizontal asymptote drawn as a dashed blue horizontal line
- Intercepts marked with dots and coordinates displayed
- The equation $f(x) = \frac{ax+b}{cx+d}$ displayed with current values

Interactive controls:

- Slider: $a$ ($-5$ to $5$, default $3$, step $0.5$)
- Slider: $b$ ($-10$ to $10$, default $1$, step $1$)
- Slider: $c$ ($-5$ to $5$, default $1$, step $0.5$, excluding $0$)
- Slider: $d$ ($-10$ to $10$, default $-2$, step $1$)
- Checkbox: "Show asymptotes" — toggles asymptote visibility
- Checkbox: "Show intercepts" — toggles intercept labels
- Checkbox: "Show $y = \frac{1}{x}$ reference" — overlays the basic reciprocal function for comparison
- Button: "Reset"

Default: $f(x) = \frac{3x+1}{x-2}$, asymptotes and intercepts shown.

Canvas: Responsive, full width, 550px height
</details>

## Key Takeaways

This chapter explored the world of rational functions — where polynomials meet division:

- The **hyperbola** $y = \frac{1}{x}$ is the prototype rational function, with two branches and axes as asymptotes
- **Vertical asymptotes** occur where the denominator is zero (function blows up)
- **Horizontal asymptotes** describe end behaviour and depend on the degree comparison of numerator and denominator
- **Oblique asymptotes** appear when the numerator's degree exceeds the denominator's by exactly one
- **Asymptotic behaviour** describes how the graph approaches its boundary lines
- A **rational function** $\frac{p(x)}{q(x)}$ has domain restrictions wherever $q(x) = 0$
- The **rational form** $\frac{ax+b}{cx+d}$ produces a transformed hyperbola with one vertical and one horizontal asymptote
- **Holes** occur when numerator and denominator share a common factor — they're missing dots, not asymptotes
- **Graphing rational functions** follows a systematic checklist: factor, find holes, find asymptotes, find intercepts, sketch

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've navigated the world of asymptotes like a pro! Vertical, horizontal, oblique — you know them all. And you can spot a hole from a mile away. Rational functions might look intimidating with their dramatic behaviour, but underneath it all, they're just polynomials being divided. Next up: function classifications!
