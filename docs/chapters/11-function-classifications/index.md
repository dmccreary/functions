---
title: Function Classifications
description: Classifying functions by symmetry (even/odd), periodicity, modulus transformations, piecewise definitions, and behavior analysis (AHL)
generated_by: claude skill chapter-content-generator
date: 2026-04-03 22:00:00
version: 0.07
---

# Function Classifications

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Every function has a personality — and this chapter is all about figuring out what type of personality it has! Is it symmetric? Periodic? Does it come in pieces? We're going to classify functions by their structural properties, which is like sorting them into families. Even functions, odd functions, piecewise functions — by the end, you'll be able to read a function's character sheet at a glance. Every input has its output — let's classify them all!

## Summary

This chapter classifies functions by their structural properties. Students learn to verify even and odd function symmetry algebraically, explore periodic functions, and study the modulus (absolute value) function and its graphical modifications. The chapter also covers piecewise-defined functions including step functions, the signum function, and the greatest integer function.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Symmetry Testing
2. Even Function
3. Odd Function
4. Periodic Function
5. Modulus Function
6. Graph of Modulus
7. Absolute Value Equations
8. Y Equals Mod F of X
9. Y Equals F of Mod X
10. Y Equals F of X Squared
11. Piecewise Function
12. Step Function
13. Signum Function
14. Greatest Integer Function
15. Function Behavior Analysis

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)

---

## Symmetry Testing

Functions can have beautiful symmetry — and we can verify it using algebra. **Symmetry testing** means substituting $-x$ into the function and comparing the result with the original.

The test is simple: compute $f(-x)$ and see what you get:

- If $f(-x) = f(x)$ → the function is even (symmetric about the $y$-axis)
- If $f(-x) = -f(x)$ → the function is odd (symmetric about the origin)
- If neither → the function is neither even nor odd

### Even Functions

An **even function** satisfies $f(-x) = f(x)$ for all $x$ in its domain. Graphically, even functions are symmetric about the $y$-axis — the left half is a mirror image of the right half.

Examples of even functions:

- $f(x) = x^2$ — since $(-x)^2 = x^2$
- $f(x) = x^4 - 3x^2 + 1$ — all powers of $x$ are even
- $f(x) = |x|$ — the modulus function
- $f(x) = \cos x$ — a trigonometric example you may meet elsewhere

### Odd Functions

An **odd function** satisfies $f(-x) = -f(x)$ for all $x$ in its domain. Graphically, odd functions have rotational symmetry about the origin — if you rotate the graph $180°$ around $(0, 0)$, it looks the same.

Examples of odd functions:

- $f(x) = x^3$ — since $(-x)^3 = -x^3$
- $f(x) = x$ — the identity function
- $f(x) = \frac{1}{x}$ — the reciprocal function
- $f(x) = x^5 - x$ — all powers of $x$ are odd

**Worked Example 1:** Determine whether $f(x) = 2x^3 - 5x$ is even, odd, or neither.

$$f(-x) = 2(-x)^3 - 5(-x) = -2x^3 + 5x = -(2x^3 - 5x) = -f(x)$$

Since $f(-x) = -f(x)$, the function is **odd**.

**Worked Example 2:** Classify $g(x) = x^2 + x$.

$$g(-x) = (-x)^2 + (-x) = x^2 - x$$

This is neither $g(x) = x^2 + x$ nor $-g(x) = -x^2 - x$. So $g$ is **neither even nor odd**.

**Try it yourself:** Is $h(x) = x^4 - 2x^2 + 7$ even, odd, or neither?

??? note "Click to reveal answer"
    $h(-x) = x^4 - 2x^2 + 7 = h(x)$. It is **even**.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Quick shortcut: if a polynomial only has **even powers** of $x$ (including constants, which are $x^0$), it's even. If it only has **odd powers** of $x$, it's odd. Mix them together and it's usually neither. But always verify with the algebraic test — some non-polynomial functions surprise you!

## Periodic Functions

A **periodic function** repeats its pattern at regular intervals. Formally, $f$ is periodic with period $T$ if:

$$f(x + T) = f(x) \quad \text{for all } x$$

The smallest positive value of $T$ is called the **fundamental period**.

While the most famous periodic functions are trigonometric (sine and cosine), the concept applies to any repeating pattern. Real-world examples include:

- Seasons repeating every $12$ months
- The voltage in an AC power supply
- Heart rhythms (ECG patterns)

In this course, you should understand the concept of periodicity even though we study trigonometric functions in a separate course. The key idea is that periodic functions have a "copy-paste" nature — the same shape repeats endlessly in both directions.

## The Modulus Function

The **modulus function** (also called the absolute value function) is defined as:

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

It returns the "distance from zero" — always non-negative. For example, $|5| = 5$ and $|-3| = 3$.

### Graph of Modulus

The **graph of the modulus function** $y = |x|$ is a V-shape with its vertex at the origin. The right side is the line $y = x$ and the left side is the line $y = -x$ — both rising away from zero.

Key features of $y = |x|$:

- Domain: $(-\infty, \infty)$
- Range: $[0, \infty)$
- Vertex at $(0, 0)$
- Even function (symmetric about the $y$-axis)

### Absolute Value Equations

**Absolute value equations** have the form $|f(x)| = k$ where $k \geq 0$. The key principle is that $|A| = k$ means $A = k$ or $A = -k$.

**Worked Example 3:** Solve $|2x - 3| = 7$.

$$2x - 3 = 7 \quad \text{or} \quad 2x - 3 = -7$$

$$2x = 10 \quad \text{or} \quad 2x = -4$$

$$x = 5 \quad \text{or} \quad x = -2$$

**Try it yourself:** Solve $|x + 4| = 1$.

??? note "Click to reveal answer"
    $x + 4 = 1$ or $x + 4 = -1$. So $x = -3$ or $x = -5$.

## Modulus Graph Transformations

The modulus function creates three important graph transformations.

### $y = |f(x)|$

The transformation **$y = |f(x)|$** takes any negative outputs and reflects them above the $x$-axis. In other words, keep everything that's already positive, and flip anything negative up.

Construction rule: wherever the original graph of $f$ is below the $x$-axis, reflect that portion to make it positive. Everything above the $x$-axis stays the same.

**Worked Example 4:** Describe the graph of $y = |x^2 - 4|$.

The parabola $y = x^2 - 4$ dips below the $x$-axis between $x = -2$ and $x = 2$. For $y = |x^2 - 4|$, that dipping portion is reflected upward, creating a W-shape.

### $y = f(|x|)$

The transformation **$y = f(|x|)$** makes the function "ignore" the sign of $x$ — it behaves as if all inputs are non-negative, then mirrors the right half onto the left.

Construction rule: take the graph of $f$ for $x \geq 0$ and reflect it to create a symmetric graph about the $y$-axis.

**Worked Example 5:** Describe the graph of $y = (|x| - 2)^2$.

Take $y = (x - 2)^2$ for $x \geq 0$ — a parabola with vertex at $(2, 0)$. Now mirror it about the $y$-axis: the result has vertices at both $(2, 0)$ and $(-2, 0)$.

### $y = [f(x)]^2$

The transformation **$y = [f(x)]^2$** squares all the outputs. This makes every output non-negative and dramatically changes the shape:

- Outputs between $-1$ and $1$ get smaller (closer to zero)
- Outputs greater than $1$ or less than $-1$ get larger
- Zero outputs remain zero

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    These three transformations are easy to confuse in exams. Here's the cheat sheet: $|f(x)|$ — flip the negatives up. $f(|x|)$ — mirror the right half to the left. $[f(x)]^2$ — square everything. Say it three times fast before the exam starts.

#### Diagram: Modulus Transformation Explorer
<iframe src="../../sims/modulus-transformation-explorer/main.html" width="100%" height="522" scrolling="no"></iframe>

<details markdown="1">
<summary>Modulus Transformation Explorer</summary>
Type: microsim
**sim-id:** modulus-transformation-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students compare the original function $f(x)$ with the three modulus-related transformations $|f(x)|$, $f(|x|)$, and $[f(x)]^2$ side by side.

Learning Objective: Students will distinguish between $|f(x)|$, $f(|x|)$, and $[f(x)]^2$ by comparing the transformations applied to various base functions (Analyze L4 — compare, differentiate).

Instructional Rationale: Side-by-side comparison of the original and transformed graphs makes the distinct effects of each transformation unmistakable. Switching between base functions generalizes the understanding beyond a single example.

Visual elements:

- Four panels in a 2×2 grid: original $f(x)$ (top-left), $|f(x)|$ (top-right), $f(|x|)$ (bottom-left), $[f(x)]^2$ (bottom-right)
- Each panel has its own coordinate grid with the function drawn
- The original graph shown in blue, transformations in red
- Labels on each panel identifying the transformation

Interactive controls:

- Dropdown: Select base function from bank: $f(x) = x^2 - 4$, $f(x) = x^3 - 3x$, $f(x) = x - 2$, $f(x) = \sin x$, $f(x) = x^2 - 2x - 3$
- Checkbox: "Overlay original" — shows the original $f(x)$ in gray behind each transformation for comparison
- Toggle: "Single view" — shows only one transformation at a time (full size) with next/previous buttons
- Button: "Reset"

Default: $f(x) = x^2 - 4$ selected, overlay visible, 2×2 grid view.

Canvas: Responsive, full width, 550px height
</details>

## Piecewise Functions

A **piecewise function** is defined by different rules on different parts of its domain. Instead of one formula for all inputs, different formulas apply to different intervals.

$$f(x) = \begin{cases} \text{rule 1} & \text{if condition 1} \\ \text{rule 2} & \text{if condition 2} \\ \text{rule 3} & \text{if condition 3} \end{cases}$$

The modulus function itself is a piecewise function — it uses one rule for non-negative inputs and another for negative inputs.

**Worked Example 6:** Evaluate the piecewise function at $x = -1$, $x = 2$, and $x = 5$:

$$f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ 2x + 1 & \text{if } 0 \leq x < 4 \\ 10 & \text{if } x \geq 4 \end{cases}$$

- $f(-1)$: Since $-1 < 0$, use $x^2$: $f(-1) = 1$
- $f(2)$: Since $0 \leq 2 < 4$, use $2x + 1$: $f(2) = 5$
- $f(5)$: Since $5 \geq 4$, use $10$: $f(5) = 10$

### Step Functions

A **step function** is a piecewise function whose graph looks like a staircase — it stays constant on each interval, then jumps to a new level. Common examples include postage rates, tax brackets, and parking fees.

### Signum Function

The **signum function** (or sign function) returns the sign of its input:

$$\text{sgn}(x) = \begin{cases} -1 & \text{if } x < 0 \\ 0 & \text{if } x = 0 \\ 1 & \text{if } x > 0 \end{cases}$$

Its graph has three pieces: a horizontal line at $y = -1$ for negative inputs, a point at the origin, and a horizontal line at $y = 1$ for positive inputs.

### Greatest Integer Function

The **greatest integer function** (also called the floor function) returns the greatest integer less than or equal to $x$:

$$\lfloor x \rfloor = \text{greatest integer} \leq x$$

Examples: $\lfloor 3.7 \rfloor = 3$, $\lfloor -1.2 \rfloor = -2$, $\lfloor 5 \rfloor = 5$.

Its graph is a staircase that steps up at each integer but with open circles at the right end of each step.

**Try it yourself:** Evaluate $\lfloor 2.99 \rfloor$, $\lfloor -0.1 \rfloor$, and $\lfloor 4 \rfloor$.

??? note "Click to reveal answer"
    $\lfloor 2.99 \rfloor = 2$, $\lfloor -0.1 \rfloor = -1$, $\lfloor 4 \rfloor = 4$.

## Function Behavior Analysis

**Function behavior analysis** brings together the tools from this chapter and Chapter 3 to give a complete description of a function. A thorough analysis includes:

1. **Domain and range** — what inputs are valid, what outputs are produced
2. **Symmetry** — even, odd, or neither
3. **Periodicity** — does the pattern repeat?
4. **Intercepts** — where the graph meets the axes
5. **Increasing/decreasing intervals** — where the function rises or falls
6. **Turning points** — maxima and minima
7. **Concavity** — where the graph curves up or down
8. **End behavior** — what happens as $x \to \pm\infty$
9. **Asymptotes** — if applicable
10. **Continuity** — any breaks or jumps?

This comprehensive checklist is your toolkit for analyzing any function you encounter in the IB.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    A common exam error is to assume a function is even just because it "looks symmetric" on your calculator. Always prove symmetry algebraically using $f(-x) = f(x)$ or $f(-x) = -f(x)$. Your GDC can suggest symmetry, but the algebra proves it.

## Key Takeaways

This chapter classified functions by their structural properties:

- **Symmetry testing** uses $f(-x)$: if $f(-x) = f(x)$ the function is **even** (symmetric about $y$-axis); if $f(-x) = -f(x)$ it's **odd** (rotational symmetry about origin)
- **Periodic functions** satisfy $f(x + T) = f(x)$ — the same pattern repeats with period $T$
- The **modulus function** $|x|$ returns the distance from zero; its **graph** is V-shaped
- **Absolute value equations** $|A| = k$ split into two cases: $A = k$ or $A = -k$
- Three modulus transformations: **$|f(x)|$** reflects negatives up; **$f(|x|)$** mirrors the right half; **$[f(x)]^2$** squares all outputs
- **Piecewise functions** use different rules on different intervals
- **Step functions**, the **signum function**, and the **greatest integer function** are key piecewise examples
- **Function behavior analysis** is the comprehensive checklist for describing any function

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You can now classify any function by its properties — even, odd, periodic, piecewise, or something else entirely. That's like being able to identify bird species by their silhouette. And just like birdwatching, the more you practice, the faster you get. Next up: transformations — where we learn to slide, stretch, and flip any function!
