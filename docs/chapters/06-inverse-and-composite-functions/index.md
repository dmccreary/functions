---
title: Inverse and Composite Functions
description: Exploring inverse functions, one-to-one mappings, reflections over y=x, composite functions, and domain restrictions for inverses
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:30:00
version: 0.07
---

# Inverse and Composite Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the chapter where functions start talking to each other! Inverse functions "undo" what a function does — like pressing rewind. Composite functions chain two functions together — like a relay race. Together, these two ideas unlock some of the most powerful techniques in mathematics. Every input has its output — and now we'll learn to reverse the process!

## Summary

This chapter introduces two fundamental operations on functions: inversion and composition. Students learn to identify one-to-one functions using the horizontal and vertical line tests, find inverse functions algebraically and graphically (as reflections over $y = x$), and understand domain restrictions for inverses. The reciprocal function is introduced as a key self-inverse example. Composite functions are explored through composition rules, order of composition, domain considerations, and decomposition techniques.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Vertical Line Test
2. Horizontal Line Test
3. One-to-One Function
4. Inverse Function
5. Inverse Function Notation
6. Finding an Inverse
7. Reflection Over Y Equals X
8. Reciprocal Function
9. Self-Inverse Function
10. Composite Function
11. Function Composition Rule
12. Order of Composition
13. Domain of Composite
14. Decomposing Functions
15. Domain Restriction Inverse

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)

---

## The Vertical Line Test

In Chapter 2, we defined a function as a relation where every input has exactly one output. But how can you tell from a graph whether a relation is a function?

The **vertical line test** answers this: if any vertical line drawn on the coordinate plane intersects the graph at more than one point, the graph does **not** represent a function. If every vertical line hits the graph at most once, it *is* a function.

Why does this work? A vertical line $x = k$ represents a single input value $k$. If the line crosses the graph twice, that means the input $k$ produces two different outputs — violating the function definition.

- Circle: $x^2 + y^2 = 1$ — **fails** the vertical line test (not a function)
- Parabola: $y = x^2$ — **passes** the vertical line test (is a function)

## One-to-One Functions

A function is called **one-to-one** (or injective) if different inputs always produce different outputs. In other words, no two different $x$-values give the same $y$-value.

$$\text{One-to-one:} \quad f(a) = f(b) \implies a = b$$

Some functions are one-to-one and some are not:

- $f(x) = 2x + 3$ is one-to-one — every output comes from exactly one input
- $g(x) = x^2$ is **not** one-to-one — for example, $g(-3) = g(3) = 9$

Why does this matter? Only one-to-one functions have inverse functions that are themselves functions. If two different inputs give the same output, you can't uniquely "reverse" the process.

### The Horizontal Line Test

The **horizontal line test** is the visual check for one-to-one: if any horizontal line intersects the graph at more than one point, the function is **not** one-to-one.

| Test | What It Checks | Horizontal Line Crosses Graph... |
|------|---------------|--------------------------------|
| Vertical line test | Is it a function? | At most once → yes |
| Horizontal line test | Is it one-to-one? | At most once → yes |

**Worked Example 1:** Is $f(x) = x^3$ one-to-one?

Draw horizontal lines across the graph of $y = x^3$. Every horizontal line crosses the curve exactly once, so $f(x) = x^3$ is one-to-one. ✓

**Worked Example 2:** Is $g(x) = x^2$ one-to-one?

The horizontal line $y = 4$ crosses the parabola at $x = -2$ and $x = 2$, so $g(x) = x^2$ is **not** one-to-one. ✗

## Inverse Functions

An **inverse function** reverses the action of the original function. If $f$ takes an input $a$ and produces output $b$, then the inverse function takes $b$ as input and returns $a$.

$$f(a) = b \iff f^{-1}(b) = a$$

Think of it this way: if $f$ is the process of putting on your shoes, then $f^{-1}$ is the process of taking them off.

The **inverse function notation** uses a superscript $-1$: the inverse of $f$ is written $f^{-1}$. This is *not* an exponent — $f^{-1}(x)$ does **not** mean $\frac{1}{f(x)}$.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    The notation $f^{-1}(x)$ means "the inverse function of $f$," NOT "$\frac{1}{f(x)}$." That $-1$ is a label, not a power! If you want the reciprocal, you'd write $[f(x)]^{-1}$ or $\frac{1}{f(x)}$. This catches out more students than any other notation in the IB.

An important property of inverse functions is that they "cancel" each other:

$$f(f^{-1}(x)) = x \quad \text{and} \quad f^{-1}(f(x)) = x$$

for all $x$ in the appropriate domains.

### Finding an Inverse

To find the inverse function algebraically, follow these steps:

1. Write $y = f(x)$
2. Swap $x$ and $y$ (interchange input and output)
3. Solve for $y$
4. Write the result as $f^{-1}(x)$

**Worked Example 3:** Find the inverse of $f(x) = 3x + 5$.

**Step 1:** $y = 3x + 5$

**Step 2:** Swap: $x = 3y + 5$

**Step 3:** Solve: $x - 5 = 3y$, so $y = \frac{x - 5}{3}$

$$f^{-1}(x) = \frac{x - 5}{3}$$

**Verification:** $f(f^{-1}(x)) = 3\left(\frac{x-5}{3}\right) + 5 = (x - 5) + 5 = x$ ✓

**Worked Example 4:** Find the inverse of $g(x) = \frac{2x + 1}{x - 3}$, $x \neq 3$.

**Step 1:** $y = \frac{2x + 1}{x - 3}$

**Step 2:** Swap: $x = \frac{2y + 1}{y - 3}$

**Step 3:** Solve: $x(y - 3) = 2y + 1$, so $xy - 3x = 2y + 1$, giving $xy - 2y = 3x + 1$, hence $y(x - 2) = 3x + 1$:

$$g^{-1}(x) = \frac{3x + 1}{x - 2}, \quad x \neq 2$$

**Try it yourself:** Find the inverse of $h(x) = 4x - 7$.

??? note "Click to reveal answer"
    $y = 4x - 7$. Swap: $x = 4y - 7$. Solve: $y = \frac{x + 7}{4}$. So $h^{-1}(x) = \frac{x + 7}{4}$.

### Reflection Over $y = x$

The graph of $f^{-1}$ is the **reflection** of the graph of $f$ **over the line $y = x$**. This makes geometric sense: swapping $x$ and $y$ in the equation is the same as reflecting every point $(a, b)$ to $(b, a)$.

If the point $(2, 7)$ is on the graph of $f$, then the point $(7, 2)$ is on the graph of $f^{-1}$.

#### Diagram: Inverse Function Reflector
<iframe src="../../sims/inverse-function-reflector/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Inverse Function Reflector</summary>
Type: microsim
**sim-id:** inverse-function-reflector<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show a function and its inverse as reflections over the line $y = x$, with corresponding points highlighted to build geometric intuition for inverse functions.

Learning Objective: Students will verify that a function and its inverse are reflections over $y = x$ by examining corresponding points (Understand L2 — explain, interpret).

Instructional Rationale: Seeing the reflection in real time as parameters change makes the abstract algebraic operation of "swapping $x$ and $y$" visually concrete. Highlighting corresponding point pairs reinforces that $(a, b)$ maps to $(b, a)$.

Visual elements:

- A coordinate grid with the line $y = x$ drawn as a dashed gray line
- The function $f$ drawn in blue
- The inverse $f^{-1}$ drawn in red
- Corresponding points highlighted: when the student hovers over a point on $f$, the reflected point on $f^{-1}$ lights up, and a dotted line connects them perpendicular to $y = x$
- Labels showing the coordinates of both points

Interactive controls:

- Dropdown: Select function from a bank: $f(x) = 2x + 1$, $f(x) = x^2$ (restricted to $x \geq 0$), $f(x) = x^3$, $f(x) = \frac{1}{x}$, $f(x) = e^x$
- Slider: Trace — moves a point along $f$, with the corresponding inverse point moving on $f^{-1}$
- Checkbox: "Show $y = x$ line"
- Checkbox: "Show connecting lines" — draws perpendicular bisectors from point pairs to $y = x$
- Button: "Reset"

Default: $f(x) = 2x + 1$ selected, $y = x$ line shown, trace at origin.

Canvas: Responsive, full width, 550px height
</details>

## The Reciprocal Function and Self-Inverse Functions

The **reciprocal function** is defined as:

$$f(x) = \frac{1}{x}, \quad x \neq 0$$

Its graph is a curve called a hyperbola with two branches — one in the first quadrant and one in the third quadrant. The reciprocal function has some special properties: it approaches the axes but never touches them (the axes are asymptotes), and its domain and range are both $\{x \mid x \neq 0\}$.

What makes the reciprocal function particularly interesting is that it is its own inverse:

$$f(x) = \frac{1}{x} \implies f^{-1}(x) = \frac{1}{x}$$

If you take the reciprocal of the reciprocal, you get back to where you started: $f(f(x)) = \frac{1}{1/x} = x$.

A function that is its own inverse is called a **self-inverse function**. The graph of a self-inverse function is symmetric about the line $y = x$ — it is its own reflection.

Other examples of self-inverse functions:

- $f(x) = -x$ (reflection in the $x$-axis)
- $f(x) = \frac{a - x}{1 + bx}$ for certain values of $a$ and $b$

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Self-inverse functions are mathematical palindromes — they read the same forwards and backwards. Apply the function twice and you're right back where you started. The reciprocal function is the classic example: flip a fraction, flip it again, and you've gone nowhere. Mathematically elegant. Practically useful.

## Domain Restrictions for Inverses

Not every function has an inverse that is also a function. Remember: only one-to-one functions have proper inverses. But we can work around this by restricting the domain.

A **domain restriction for inverses** means limiting the input values of a non-one-to-one function so that the restricted version *is* one-to-one — and then finding its inverse.

**Worked Example 5:** Find the inverse of $f(x) = x^2$ with the restriction $x \geq 0$.

Without restriction, $f(x) = x^2$ is not one-to-one (both $-3$ and $3$ give $9$). But with $x \geq 0$, every output has exactly one input.

**Step 1:** $y = x^2$, $x \geq 0$

**Step 2:** Swap: $x = y^2$, $y \geq 0$

**Step 3:** Solve: $y = \sqrt{x}$ (taking the positive root since $y \geq 0$)

$$f^{-1}(x) = \sqrt{x}, \quad x \geq 0$$

If instead we restrict to $x \leq 0$, the inverse would be $f^{-1}(x) = -\sqrt{x}$.

**Try it yourself:** Find the inverse of $g(x) = (x - 2)^2 + 1$ with $x \geq 2$.

??? note "Click to reveal answer"
    $y = (x-2)^2 + 1$. Swap: $x = (y-2)^2 + 1$. Solve: $(y-2)^2 = x - 1$, so $y - 2 = \sqrt{x-1}$ (positive root since $y \geq 2$). $g^{-1}(x) = 2 + \sqrt{x - 1}$, $x \geq 1$.

## Composite Functions

A **composite function** is formed by applying one function to the output of another — feeding the result of one function into a second function.

If $f$ and $g$ are functions, the composite $(f \circ g)(x)$ means "first apply $g$, then apply $f$ to the result":

$$(f \circ g)(x) = f(g(x))$$

The **function composition rule** tells us to work from the inside out: evaluate $g(x)$ first, then use that result as the input for $f$.

**Worked Example 6:** Given $f(x) = x^2$ and $g(x) = 3x + 1$, find $(f \circ g)(x)$.

$$(f \circ g)(x) = f(g(x)) = f(3x + 1) = (3x + 1)^2 = 9x^2 + 6x + 1$$

**Worked Example 7:** Using the same $f$ and $g$, find $(g \circ f)(x)$.

$$(g \circ f)(x) = g(f(x)) = g(x^2) = 3(x^2) + 1 = 3x^2 + 1$$

### Order of Composition

Notice that $(f \circ g)(x) = 9x^2 + 6x + 1$ and $(g \circ f)(x) = 3x^2 + 1$ — these are different! The **order of composition** matters. In general:

$$f \circ g \neq g \circ f$$

Think of it like getting dressed: putting on socks then shoes is very different from putting on shoes then socks.

**Try it yourself:** Given $h(x) = x + 4$ and $k(x) = 2x$, find $(h \circ k)(3)$ and $(k \circ h)(3)$.

??? note "Click to reveal answer"
    $(h \circ k)(3) = h(k(3)) = h(6) = 10$. $(k \circ h)(3) = k(h(3)) = k(7) = 14$. Different results!

### Domain of Composite Functions

The **domain of a composite** function $(f \circ g)(x)$ includes only those $x$-values where:

1. $x$ is in the domain of $g$ (so $g(x)$ is defined), **and**
2. $g(x)$ is in the domain of $f$ (so $f(g(x))$ is defined)

**Worked Example 8:** Given $f(x) = \sqrt{x}$ and $g(x) = x - 3$, find the domain of $(f \circ g)(x)$.

$$(f \circ g)(x) = f(g(x)) = f(x - 3) = \sqrt{x - 3}$$

For $\sqrt{x - 3}$ to be defined, we need $x - 3 \geq 0$, so $x \geq 3$.

Domain of $(f \circ g)$: $[3, \infty)$.

### Decomposing Functions

**Decomposing functions** is the reverse of composition — breaking a complex function into simpler pieces. Given a composite function, you identify the "inner" and "outer" functions.

**Worked Example 9:** Express $h(x) = (2x + 5)^3$ as a composite $(f \circ g)(x)$.

Let $g(x) = 2x + 5$ (the inner function) and $f(x) = x^3$ (the outer function).

Then $(f \circ g)(x) = f(2x + 5) = (2x + 5)^3 = h(x)$. ✓

**Try it yourself:** Decompose $k(x) = \sqrt{x^2 + 1}$ into a composite of two functions.

??? note "Click to reveal answer"
    Let $g(x) = x^2 + 1$ and $f(x) = \sqrt{x}$. Then $(f \circ g)(x) = \sqrt{x^2 + 1} = k(x)$.

#### Diagram: Composite Function Machine
<iframe src="../../sims/composite-function-machine/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Composite Function Machine</summary>
Type: microsim
**sim-id:** composite-function-machine<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Visualise composite functions as two "machines" connected in series, where the output of the first machine feeds into the second, showing how composition works step by step.

Learning Objective: Students will evaluate composite functions by tracing inputs through two function machines and will distinguish $(f \circ g)$ from $(g \circ f)$ (Understand L2 — explain, compare).

Instructional Rationale: The function machine metaphor makes the abstract idea of composition tangible. Seeing the intermediate value between the two machines clarifies why order matters and where domain restrictions arise.

Visual elements:

- Two "machine" boxes connected by an arrow, each labelled with its function rule
- An input value entering the first machine on the left
- The intermediate value displayed on the connecting arrow
- The final output emerging from the second machine on the right
- Below: the algebraic expression for the composite shown step by step

Interactive controls:

- Dropdown: Function $f$ from bank: $x^2$, $2x+1$, $\sqrt{x}$, $\frac{1}{x}$, $x-3$
- Dropdown: Function $g$ from bank: $x+4$, $3x$, $x^2$, $x-1$, $2x+5$
- Slider: Input value $x$ ($-5$ to $5$, default $2$, step $0.5$)
- Toggle: "Swap Order" — switches between $(f \circ g)$ and $(g \circ f)$, rearranging the machines
- The intermediate and final values update in real time as $x$ changes
- Red warning appears if the intermediate value is outside the domain of the second function

Default: $f(x) = x^2$, $g(x) = x + 4$, input $x = 2$, order $(f \circ g)$.

Canvas: Responsive, full width, 500px height
</details>

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    When evaluating $(f \circ g)(x)$, always start with the function closest to $x$ — that's $g$. Read it inside out, like peeling an onion. First $g$ processes the input, then $f$ processes the result. If you remember "inside out," you'll never get the order wrong.

## Key Takeaways

This chapter introduced two powerful operations that connect functions to each other:

- The **vertical line test** checks if a graph is a function; the **horizontal line test** checks if it's **one-to-one**
- An **inverse function** $f^{-1}$ reverses the action of $f$: if $f(a) = b$, then $f^{-1}(b) = a$
- **Finding an inverse** algebraically: swap $x$ and $y$, then solve for $y$
- The graph of $f^{-1}$ is a **reflection over $y = x$** of the graph of $f$
- The **reciprocal function** $f(x) = \frac{1}{x}$ is a **self-inverse function** — it equals its own inverse
- **Domain restrictions** allow non-one-to-one functions (like $x^2$) to have inverses on restricted intervals
- A **composite function** $(f \circ g)(x) = f(g(x))$ applies $g$ first, then $f$
- The **order of composition** matters: $f \circ g \neq g \circ f$ in general
- The **domain of a composite** requires both $g(x)$ to be defined and $g(x)$ to be in the domain of $f$
- **Decomposing functions** breaks a complex function into an inner and outer function

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've unlocked two superpowers: reversing functions and chaining them together. Inverses undo, composites combine — and together they open the door to understanding logarithms (the inverse of exponentials) and so much more. The function universe is expanding, and you're right in the middle of it. Now that's a function worth knowing!
