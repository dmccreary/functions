---
title: Transformations
description: Geometric transformations of function graphs including translations, reflections, stretches, composite transformations, and their effects on coordinates
generated_by: claude skill chapter-content-generator
date: 2026-04-03 22:06:00
version: 0.07
---

# Transformations

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Time to give functions a makeover! In this chapter, we learn to slide, flip, and stretch any graph — turning one function into a whole family of related functions. Master transformations and you'll never need to memorize the graph of every function from scratch. Just start with the parent function and transform it. Every input has its output — and transformations show us how to move them around!

## Summary

This chapter covers geometric transformations applied to function graphs. Students learn to execute translations (horizontal and vertical shifts), reflections in the $x$-axis and $y$-axis, and stretches (vertical and horizontal) with scale factors. The chapter builds to composite transformations that combine multiple operations and explores how transformations affect coordinates of specific points.

## Concepts Covered

This chapter covers the following 13 concepts from the learning graph:

1. Scale Factor
2. Translation
3. Horizontal Translation
4. Vertical Translation
5. Reflection in X-Axis
6. Reflection in Y-Axis
7. Vertical Stretch
8. Horizontal Stretch
9. Composite Transformation
10. Transformation Notation
11. Effect on Coordinates
12. Transformation of Points
13. Graph Transformation Order

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)

---

## Scale Factor

Before we dive into specific transformations, we need the concept of a **scale factor** — a number that multiplies a quantity to make it larger or smaller.

- A scale factor greater than $1$ stretches (enlarges)
- A scale factor between $0$ and $1$ compresses (shrinks)
- A negative scale factor reflects and stretches

Scale factors appear in both vertical and horizontal transformations, and understanding how they work is essential for the rest of this chapter.

## Translations

A **translation** slides the entire graph to a new position without changing its shape, size, or orientation. There are two types.

### Vertical Translation

A **vertical translation** shifts the graph up or down. Starting from $y = f(x)$:

$$y = f(x) + b$$

- If $b > 0$: the graph shifts **up** by $b$ units
- If $b < 0$: the graph shifts **down** by $|b|$ units

This makes intuitive sense — you're adding $b$ to every output value.

**Worked Example 1:** Describe the transformation from $y = x^2$ to $y = x^2 + 3$.

The graph of $y = x^2$ is shifted **up by $3$ units**. Every point $(x, y)$ moves to $(x, y + 3)$. The vertex moves from $(0, 0)$ to $(0, 3)$.

### Horizontal Translation

A **horizontal translation** shifts the graph left or right. Starting from $y = f(x)$:

$$y = f(x - a)$$

- If $a > 0$: the graph shifts **right** by $a$ units
- If $a < 0$: the graph shifts **left** by $|a|$ units

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    Horizontal translations work the opposite way to what you'd expect! $f(x - 3)$ shifts the graph **right** (not left), and $f(x + 2)$ shifts it **left** (not right). The sign is opposite because the transformation acts on the *input* before the function processes it. This is the number one transformation mistake in IB exams.

**Worked Example 2:** Describe the transformation from $y = x^2$ to $y = (x - 4)^2$.

The graph shifts **right by $4$ units**. The vertex moves from $(0, 0)$ to $(4, 0)$.

**Worked Example 3:** Describe $y = (x + 2)^2 - 5$ as transformations of $y = x^2$.

Horizontal translation $2$ units left (replace $x$ with $x + 2$) and vertical translation $5$ units down (subtract $5$). The vertex moves from $(0, 0)$ to $(-2, -5)$.

**Try it yourself:** The point $(3, 7)$ is on the graph of $y = f(x)$. What point is on $y = f(x - 1) + 4$?

??? note "Click to reveal answer"
    Shift right $1$, up $4$: $(3 + 1, 7 + 4) = (4, 11)$.

The following table summarizes translations using **transformation notation** — a vector that describes the shift:

| Transformation | Equation | Notation | Effect on $(x, y)$ |
|---------------|----------|----------|-------------------|
| Up by $b$ | $y = f(x) + b$ | $\binom{0}{b}$ | $(x, y + b)$ |
| Down by $b$ | $y = f(x) - b$ | $\binom{0}{-b}$ | $(x, y - b)$ |
| Right by $a$ | $y = f(x - a)$ | $\binom{a}{0}$ | $(x + a, y)$ |
| Left by $a$ | $y = f(x + a)$ | $\binom{-a}{0}$ | $(x - a, y)$ |

## Reflections

A **reflection** flips the graph across a line, creating a mirror image.

### Reflection in the $x$-Axis

A **reflection in the $x$-axis** negates all output values:

$$y = -f(x)$$

Every point $(x, y)$ maps to $(x, -y)$. The graph flips upside down.

**Worked Example 4:** The graph of $y = x^2$ is an upward parabola. The graph of $y = -x^2$ is a downward parabola — it's been reflected in the $x$-axis.

### Reflection in the $y$-Axis

A **reflection in the $y$-axis** negates all input values:

$$y = f(-x)$$

Every point $(x, y)$ maps to $(-x, y)$. The graph flips left-to-right.

**Worked Example 5:** If $f(x) = 2^x$ (exponential growth), then $f(-x) = 2^{-x} = \left(\frac{1}{2}\right)^x$ (exponential decay). The reflection converts growth into decay.

**Try it yourself:** The point $(2, 5)$ is on $y = f(x)$. Where is it on $y = -f(x)$? On $y = f(-x)$?

??? note "Click to reveal answer"
    On $y = -f(x)$: $(2, -5)$ (flip $y$). On $y = f(-x)$: $(-2, 5)$ (flip $x$).

## Stretches

A **stretch** changes the size of the graph in one direction while keeping the other direction fixed.

### Vertical Stretch

A **vertical stretch** by scale factor $p$ multiplies all output values by $p$:

$$y = p \cdot f(x)$$

- If $p > 1$: the graph is stretched vertically (taller)
- If $0 < p < 1$: the graph is compressed vertically (flatter)
- If $p < 0$: stretch plus reflection in the $x$-axis

Every point $(x, y)$ maps to $(x, py)$.

### Horizontal Stretch

A **horizontal stretch** by scale factor $\frac{1}{q}$ replaces $x$ with $qx$:

$$y = f(qx)$$

- If $q > 1$: the graph is compressed horizontally (narrower) — scale factor $\frac{1}{q} < 1$
- If $0 < q < 1$: the graph is stretched horizontally (wider) — scale factor $\frac{1}{q} > 1$

Every point $(x, y)$ maps to $\left(\frac{x}{q}, y\right)$.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Horizontal transformations are always "opposite" to what the algebra suggests. Adding inside shifts left, subtracting shifts right. Multiplying $x$ by $2$ makes the graph *narrower* (not wider). This is because horizontal changes affect the *input* before the function acts. Think of it as the function "seeing" different inputs than you'd expect.

**Worked Example 6:** Describe the transformations that map $y = x^2$ to $y = 3(2x)^2$.

- Replace $x$ with $2x$: horizontal compression by factor $\frac{1}{2}$ (graph is half as wide)
- Multiply by $3$: vertical stretch by factor $3$ (graph is three times as tall)

| Transformation | Equation Form | Effect on $(x, y)$ |
|---------------|--------------|-------------------|
| Vertical stretch by $p$ | $y = p \cdot f(x)$ | $(x, py)$ |
| Horizontal stretch by $\frac{1}{q}$ | $y = f(qx)$ | $\left(\frac{x}{q}, y\right)$ |

**Try it yourself:** The point $(4, 6)$ is on $y = f(x)$. Where is it on $y = 2f(3x)$?

??? note "Click to reveal answer"
    Horizontal: $x \to \frac{x}{3} = \frac{4}{3}$. Vertical: $y \to 2y = 12$. New point: $\left(\frac{4}{3}, 12\right)$.

#### Diagram: Transformation Explorer
<iframe src="../../sims/transformation-explorer/main.html" width="100%" height="522" scrolling="no"></iframe>

<details markdown="1">
<summary>Transformation Explorer</summary>
Type: microsim
**sim-id:** transformation-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students apply individual and combined transformations to a base function graph and observe the effects in real time, building intuition for how each parameter affects the graph.

Learning Objective: Students will predict and verify the effect of translations, reflections, and stretches on function graphs (Apply L3 — execute, demonstrate).

Instructional Rationale: Real-time parameter adjustment makes the relationship between algebraic notation and geometric transformation immediate. Students can test their predictions by adjusting one slider at a time.

Visual elements:

- A coordinate grid showing the original function $f(x)$ in gray and the transformed function in blue
- Labels showing the current transformation equation in the form $y = p \cdot f(q(x - a)) + b$
- Key points on both graphs connected by dotted lines showing the mapping
- Parameter values displayed prominently

Interactive controls:

- Dropdown: Select base function: $x^2$, $x^3$, $|x|$, $\sqrt{x}$, $\frac{1}{x}$, $2^x$
- Slider: $a$ (horizontal shift, $-5$ to $5$, default $0$)
- Slider: $b$ (vertical shift, $-5$ to $5$, default $0$)
- Slider: $p$ (vertical stretch, $-3$ to $3$, default $1$, step $0.25$)
- Slider: $q$ (horizontal stretch, $-3$ to $3$, default $1$, step $0.25$, excluding $0$)
- Checkbox: "Show original function" — toggle gray reference graph
- Checkbox: "Show point mapping" — connect corresponding points with dotted lines
- Button: "Reset All" — returns all parameters to default

Default: $f(x) = x^2$, all parameters at identity (no transformation).

Canvas: Responsive, full width, 550px height
</details>

## Transformation Notation and Effect on Coordinates

**Transformation notation** provides a compact way to describe transformations. The general transformed function is:

$$y = p \cdot f(q(x - a)) + b$$

where:

- $a$ = horizontal translation (right if positive)
- $b$ = vertical translation (up if positive)
- $p$ = vertical stretch factor
- $q$ = horizontal compression factor

The **effect on coordinates** summarizes how a point $(x, y)$ on $y = f(x)$ moves under this transformation:

$$(x, y) \to \left(\frac{x}{q} + a, \; py + b\right)$$

### Transformation of Points

**Transformation of points** means applying the coordinate mapping to specific known points.

**Worked Example 7:** The point $(2, 8)$ is on the graph of $y = x^3$. Find the corresponding point on $y = -2(x + 1)^3 + 5$.

Identify the parameters: $a = -1$, $b = 5$, $p = -2$, $q = 1$.

$$x' = \frac{2}{1} + (-1) = 1$$

$$y' = (-2)(8) + 5 = -11$$

The corresponding point is $(1, -11)$.

**Try it yourself:** The point $(4, 2)$ is on $y = \sqrt{x}$. Find the corresponding point on $y = 3\sqrt{x - 1} + 2$.

??? note "Click to reveal answer"
    $a = 1$, $b = 2$, $p = 3$, $q = 1$. $x' = 4 + 1 = 5$. $y' = 3(2) + 2 = 8$. Point: $(5, 8)$.

## Composite Transformations and Order

A **composite transformation** applies multiple transformations in sequence. The crucial question is: what **order** should they be applied?

### Graph Transformation Order

The standard **graph transformation order** when working from the equation $y = p \cdot f(q(x - a)) + b$ is:

1. **Horizontal operations first** (inside the function):
    - Horizontal translation by $a$
    - Horizontal stretch by factor $\frac{1}{q}$
2. **Vertical operations second** (outside the function):
    - Vertical stretch by factor $p$
    - Vertical translation by $b$

Alternatively, when building the equation from a known graph:

1. Apply stretches and reflections first
2. Apply translations last

**Worked Example 8:** Starting from $y = x^2$, apply the following transformations in order: reflect in the $x$-axis, then stretch vertically by factor $2$, then translate up by $3$.

- Start: $y = x^2$
- Reflect in $x$-axis: $y = -x^2$
- Vertical stretch by $2$: $y = -2x^2$
- Translate up by $3$: $y = -2x^2 + 3$

The vertex of the original parabola was $(0, 0)$. After all transformations: $(0, 3)$.

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    When you're confused about transformation order, remember: work from the **inside out** when reading an equation, but from the **outside in** when building one. For $y = 2f(x - 3) + 1$, the function first shifts right by $3$, then stretches by $2$, then shifts up by $1$. It's like getting dressed: socks, then shoes, then walking to the bus.

**Try it yourself:** Describe the transformations that map $y = \frac{1}{x}$ to $y = \frac{3}{x - 2} + 1$.

??? note "Click to reveal answer"
    Rewrite as $y = 3 \cdot \frac{1}{x - 2} + 1$. Horizontal translation $2$ right, vertical stretch by $3$, vertical translation $1$ up.

## Key Takeaways

This chapter gave you the tools to transform any function graph:

- A **scale factor** multiplies a quantity to stretch or compress
- **Translations** slide the graph: $f(x) + b$ (vertical), $f(x - a)$ (horizontal — direction is *opposite* the sign)
- **Reflection in the $x$-axis**: $y = -f(x)$; **reflection in the $y$-axis**: $y = f(-x)$
- **Vertical stretch** by $p$: $y = pf(x)$; **horizontal stretch** by $\frac{1}{q}$: $y = f(qx)$
- The general form $y = p \cdot f(q(x - a)) + b$ combines all transformations
- **Effect on coordinates**: $(x, y) \to \left(\frac{x}{q} + a, py + b\right)$
- **Composite transformations** apply multiple operations; the **order** matters — horizontal first, vertical second
- **Transformation notation** provides a compact algebraic description

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You can now take any function and slide it, flip it, stretch it, and squish it — and predict exactly where every point ends up. That's an incredibly powerful skill. In the final chapter, we'll bring everything together with modeling and applications. The grand finale awaits!
