---
title: Polynomial Functions
description: Investigating higher-degree polynomials, end behaviour, factor and remainder theorems, division techniques, root formulas, and graphing polynomials (AHL)
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:48:00
version: 0.07
---

# Polynomial Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the AHL zone! You've already conquered quadratics — now we're going bigger. Cubic functions, quartic functions, and beyond. Polynomials are like quadratics with extra drama: more turning points, more roots, more personality. Every input has its output — and for polynomials, the story gets richer with every degree. Let's map this out!

## Summary

This chapter extends beyond quadratics to investigate polynomial functions of higher degree. Students learn about the degree and leading coefficient of polynomials, and analyse end behaviour and turning point counts. The factor theorem and remainder theorem provide tools for parsing polynomials, supported by polynomial division and synthetic division techniques. Advanced topics include root finding strategies, sum and product of roots formulas, multiplicity of roots, and graphing polynomial functions.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

1. Degree of a Polynomial
2. Leading Coefficient
3. Polynomial Function
4. Cubic Function
5. Quartic Function
6. End Behavior
7. Turning Points Count
8. Factor Theorem
9. Polynomial Division
10. Remainder Theorem
11. Synthetic Division
12. Root Finding
13. Sum of Roots Formula
14. Product of Roots Formula
15. Multiplicity of Roots
16. Graphing Polynomials

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)
- [Chapter 5: Quadratic Functions](../05-quadratic-functions/index.md)

---

## Degree and Leading Coefficient

Every polynomial has two key characteristics that determine its overall shape.

The **degree of a polynomial** is the highest power of the variable that appears. The **leading coefficient** is the coefficient of that highest-power term.

$$f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$$

Here, $n$ is the degree and $a_n$ is the leading coefficient.

| Polynomial | Degree | Leading Coefficient | Name |
|-----------|--------|-------------------|------|
| $3x + 2$ | $1$ | $3$ | Linear |
| $-2x^2 + x - 5$ | $2$ | $-2$ | Quadratic |
| $x^3 - 4x$ | $3$ | $1$ | Cubic |
| $-x^4 + 2x^3 + 1$ | $4$ | $-1$ | Quartic |

## Polynomial Functions

A **polynomial function** is a function of the form:

$$f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0$$

where $n$ is a non-negative integer and the coefficients are real numbers. Polynomial functions have some universal properties:

- **Domain:** All real numbers $(-\infty, \infty)$ — no restrictions
- **Continuous:** No breaks, holes, or jumps
- **Smooth:** No sharp corners or cusps

Linear and quadratic functions are polynomials of degree $1$ and $2$. Now we explore higher degrees.

### Cubic Functions

A **cubic function** has degree $3$:

$$f(x) = ax^3 + bx^2 + cx + d, \quad a \neq 0$$

The graph of a cubic can have up to $2$ turning points and up to $3$ real roots. Its distinctive S-shaped curve makes it visually recognisable. Unlike quadratics, cubics always have at least one real root — the graph must cross the $x$-axis at least once.

### Quartic Functions

A **quartic function** has degree $4$:

$$f(x) = ax^4 + bx^3 + cx^2 + dx + e, \quad a \neq 0$$

Quartic graphs can have up to $3$ turning points and up to $4$ real roots. They share the "both ends go the same direction" property with quadratics — both ends go up (if $a > 0$) or both ends go down (if $a < 0$).

## End Behaviour

**End behaviour** describes what happens to $f(x)$ as $x$ becomes very large positively ($x \to \infty$) or very large negatively ($x \to -\infty$). End behaviour is determined entirely by the degree and leading coefficient.

The rules are straightforward. As $x \to \pm\infty$, only the leading term matters because it grows faster than all the other terms.

| Degree | Leading Coefficient | As $x \to \infty$ | As $x \to -\infty$ |
|--------|-------------------|--------------------|---------------------|
| Odd | $a_n > 0$ | $f(x) \to \infty$ | $f(x) \to -\infty$ |
| Odd | $a_n < 0$ | $f(x) \to -\infty$ | $f(x) \to \infty$ |
| Even | $a_n > 0$ | $f(x) \to \infty$ | $f(x) \to \infty$ |
| Even | $a_n < 0$ | $f(x) \to -\infty$ | $f(x) \to -\infty$ |

A helpful mnemonic: **odd degree** → ends go in **opposite** directions. **Even degree** → ends go in the **same** direction.

**Worked Example 1:** Describe the end behaviour of $f(x) = -2x^5 + 3x^2 - 1$.

Degree $5$ (odd), leading coefficient $-2$ (negative). So:

- As $x \to \infty$: $f(x) \to -\infty$ (falls to the right)
- As $x \to -\infty$: $f(x) \to \infty$ (rises to the left)

## Turning Points Count

The maximum number of **turning points** a polynomial of degree $n$ can have is $n - 1$. The actual number may be less, but never more.

| Degree | Max Turning Points | Min Turning Points |
|--------|-------------------|--------------------|
| $1$ (linear) | $0$ | $0$ |
| $2$ (quadratic) | $1$ | $1$ |
| $3$ (cubic) | $2$ | $0$ |
| $4$ (quartic) | $3$ | $1$ |
| $n$ | $n - 1$ | $0$ or $1$ |

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    A polynomial of degree $n$ can cross the $x$-axis at most $n$ times and turn at most $n - 1$ times. Think of the degree as the polynomial's "budget" — it has $n$ roots to spend and $n - 1$ turns. It doesn't have to use them all, but it can never exceed the budget.

## The Factor Theorem

The **factor theorem** connects roots and factors:

$$f(c) = 0 \iff (x - c) \text{ is a factor of } f(x)$$

In words: if $c$ is a root of $f$, then $(x - c)$ divides $f(x)$ evenly (with no remainder). And conversely, if $(x - c)$ divides $f(x)$ evenly, then $c$ is a root.

This is enormously useful because once you find one root (perhaps by inspection or using a GDC), you can divide it out and reduce the polynomial's degree.

**Worked Example 2:** Show that $x = 2$ is a root of $f(x) = x^3 - 6x^2 + 11x - 6$.

$$f(2) = 8 - 24 + 22 - 6 = 0 \checkmark$$

Since $f(2) = 0$, the factor theorem tells us $(x - 2)$ is a factor.

## The Remainder Theorem

The **remainder theorem** is a generalisation of the factor theorem:

$$\text{When } f(x) \text{ is divided by } (x - c), \text{ the remainder is } f(c)$$

If the remainder is zero, then $(x-c)$ is a factor (the factor theorem). If the remainder is non-zero, it tells you by how much $(x-c)$ "misses" being a factor.

**Worked Example 3:** Find the remainder when $f(x) = x^3 + 2x^2 - 5x + 1$ is divided by $(x - 1)$.

$$f(1) = 1 + 2 - 5 + 1 = -1$$

The remainder is $-1$.

**Try it yourself:** Is $(x + 1)$ a factor of $f(x) = x^3 + 3x^2 + 3x + 1$?

??? note "Click to reveal answer"
    $f(-1) = -1 + 3 - 3 + 1 = 0$. Yes, $(x + 1)$ is a factor.

## Polynomial Division

When we know a factor, we can divide it out to find the remaining factors. **Polynomial division** (also called long division of polynomials) works just like long division with numbers.

**Worked Example 4:** Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 2)$.

We know from Worked Example 2 that $(x - 2)$ is a factor. Performing the division:

$$\frac{x^3 - 6x^2 + 11x - 6}{x - 2} = x^2 - 4x + 3$$

So $f(x) = (x - 2)(x^2 - 4x + 3) = (x - 2)(x - 1)(x - 3)$.

The roots are $x = 1, 2, 3$.

### Synthetic Division

**Synthetic division** is a shortcut for dividing by $(x - c)$ that uses only the coefficients. It's faster and more compact than long division.

To divide $f(x) = x^3 - 6x^2 + 11x - 6$ by $(x - 2)$ using synthetic division:

Write the coefficients $[1, -6, 11, -6]$ and the value $c = 2$:

| | $1$ | $-6$ | $11$ | $-6$ |
|---|---|---|---|---|
| Bring down | $1$ | | | |
| Multiply by $2$ | | $2$ | | |
| Add | | $-4$ | | |
| Multiply by $2$ | | | $-8$ | |
| Add | | | $3$ | |
| Multiply by $2$ | | | | $6$ |
| Add | | | | $0$ |

Result: $[1, -4, 3, 0]$ → quotient $x^2 - 4x + 3$, remainder $0$. ✓

**Try it yourself:** Use synthetic division to divide $2x^3 + x^2 - 13x + 6$ by $(x - 2)$.

??? note "Click to reveal answer"
    Coefficients: $[2, 1, -13, 6]$, $c = 2$. Result: $[2, 5, -3, 0]$. Quotient: $2x^2 + 5x - 3$, remainder $0$. So $(x-2)$ is a factor.

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    Synthetic division is one of those tricks that saves massive amounts of time in exams. Once you practise it a few times, you'll never want to do long division again. Just remember: it only works for divisors of the form $(x - c)$, not more complex divisors.

## Root Finding

**Root finding** is the process of locating all zeros of a polynomial. The strategy combines several tools:

1. **Try simple values:** Test $x = 0, \pm 1, \pm 2, \pm 3$ using the remainder theorem
2. **Rational root theorem:** If $f(x)$ has integer coefficients, any rational root $\frac{p}{q}$ has $p$ dividing the constant term and $q$ dividing the leading coefficient
3. **Factor out:** Once you find a root, use synthetic division to reduce the degree
4. **Repeat:** Continue until you reach a quadratic, then use the quadratic formula
5. **Technology:** Use a GDC when analytic methods are impractical

**Worked Example 5:** Find all roots of $f(x) = x^3 - 2x^2 - 5x + 6$.

**Step 1:** Try $x = 1$: $f(1) = 1 - 2 - 5 + 6 = 0$. ✓

**Step 2:** Divide by $(x - 1)$ using synthetic division: quotient is $x^2 - x - 6$.

**Step 3:** Factor: $x^2 - x - 6 = (x - 3)(x + 2)$.

$$f(x) = (x - 1)(x - 3)(x + 2)$$

The roots are $x = -2, 1, 3$.

## Sum and Product of Roots Formulas

For a polynomial $a_n x^n + a_{n-1}x^{n-1} + \cdots + a_0 = 0$ with roots $r_1, r_2, \ldots, r_n$, there are elegant relationships between the roots and the coefficients.

The **sum of roots formula** for a polynomial of degree $n$ is:

$$r_1 + r_2 + \cdots + r_n = -\frac{a_{n-1}}{a_n}$$

The **product of roots formula** is:

$$r_1 \cdot r_2 \cdots r_n = (-1)^n \frac{a_0}{a_n}$$

For a quadratic $ax^2 + bx + c = 0$ with roots $\alpha$ and $\beta$:

- Sum: $\alpha + \beta = -\frac{b}{a}$
- Product: $\alpha \cdot \beta = \frac{c}{a}$

For a cubic $ax^3 + bx^2 + cx + d = 0$ with roots $\alpha$, $\beta$, $\gamma$:

- Sum: $\alpha + \beta + \gamma = -\frac{b}{a}$
- Product: $\alpha \cdot \beta \cdot \gamma = -\frac{d}{a}$

**Worked Example 6:** Verify the sum and product formulas for $f(x) = x^3 - 2x^2 - 5x + 6$ with roots $-2, 1, 3$.

- Sum: $(-2) + 1 + 3 = 2 = -\frac{-2}{1}$ ✓
- Product: $(-2)(1)(3) = -6 = -\frac{6}{1}$ ✓

**Try it yourself:** The roots of $2x^3 - 3x^2 + kx - 4 = 0$ have a product of $2$. Find $k$... Actually, first find the product using the formula and verify the given value.

??? note "Click to reveal answer"
    Product of roots $= -\frac{-4}{2} = 2$. ✓ The formula confirms the product is $2$. (The value of $k$ can't be determined from the product alone — it relates to the sum of pairwise products.)

## Multiplicity of Roots

A root has **multiplicity** greater than $1$ when the factor $(x - c)$ appears more than once in the factored form.

- **Multiplicity 1** (simple root): The graph crosses the $x$-axis at this point
- **Multiplicity 2** (double root): The graph touches the $x$-axis and bounces back — like a turning point sitting on the axis
- **Multiplicity 3** (triple root): The graph crosses the $x$-axis but with a flattened S-shape

**Worked Example 7:** Describe the roots of $f(x) = (x - 1)^2(x + 3)$.

- $x = 1$ with multiplicity $2$ — the graph touches and bounces at $x = 1$
- $x = -3$ with multiplicity $1$ — the graph crosses at $x = -3$

The degree is $3$ (sum of multiplicities: $2 + 1 = 3$).

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    When counting the degree of a factored polynomial, add up all the multiplicities. The polynomial $(x+1)^2(x-3)^3$ has degree $2 + 3 = 5$, not $2$. Each repeated factor counts toward the total degree.

## Graphing Polynomials

**Graphing polynomials** brings together everything in this chapter. To sketch a polynomial graph:

1. **Determine the degree and leading coefficient** → end behaviour
2. **Find the $y$-intercept** → substitute $x = 0$
3. **Find the roots** → use factor theorem, synthetic division, GDC
4. **Determine multiplicity of each root** → crossing vs bouncing behaviour
5. **Count possible turning points** → at most $n - 1$
6. **Plot and connect** → smooth curve through all known points

#### Diagram: Polynomial Graph Explorer
<iframe src="../../sims/polynomial-graph-explorer/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Polynomial Graph Explorer</summary>
Type: microsim
**sim-id:** polynomial-graph-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students build polynomial functions by specifying roots and their multiplicities, then observe how the graph's shape is determined by these choices.

Learning Objective: Students will predict and verify the shape of a polynomial graph based on its roots, multiplicities, and leading coefficient (Analyze L4 — examine, attribute).

Instructional Rationale: Building polynomials from roots and multiplicities makes the connection between algebraic form and graph shape direct and manipulable. Students see immediately how changing a multiplicity from 1 to 2 changes the graph from crossing to bouncing.

Visual elements:

- A coordinate grid showing the polynomial graph
- Roots marked on the $x$-axis with their multiplicity displayed
- End behaviour arrows indicating the direction at both ends
- The expanded polynomial equation displayed above the graph
- Turning points highlighted

Interactive controls:

- Up to 4 root inputs: each with a value slider ($-5$ to $5$) and a multiplicity dropdown ($1$, $2$, $3$)
- Slider: Leading coefficient $a$ ($-3$ to $3$, default $1$, step $0.5$, excluding $0$)
- The graph updates in real time as roots and multiplicities change
- Checkbox: "Show factored form" — displays $(x - r_1)^{m_1}(x - r_2)^{m_2}\cdots$
- Checkbox: "Show expanded form" — displays the expanded polynomial
- Checkbox: "Show turning points" — highlights turning points with coordinates
- Button: "Reset"

Default: Three roots at $x = -2, 0, 3$ with multiplicity $1$ each, leading coefficient $1$.

Canvas: Responsive, full width, 550px height
</details>

## Key Takeaways

This chapter expanded your polynomial toolkit far beyond quadratics:

- The **degree** and **leading coefficient** determine a polynomial's end behaviour and maximum complexity
- **Cubic** (degree 3) and **quartic** (degree 4) functions extend the family beyond quadratics
- **End behaviour** depends on whether the degree is odd or even and whether the leading coefficient is positive or negative
- A degree-$n$ polynomial has at most $n - 1$ **turning points**
- The **factor theorem** links roots to factors: $f(c) = 0 \iff (x-c)$ is a factor
- The **remainder theorem** gives the remainder when dividing by $(x-c)$ as $f(c)$
- **Polynomial division** and **synthetic division** reduce the degree after finding a root
- **Root finding** combines inspection, the rational root theorem, and technology
- **Sum of roots**: $-\frac{a_{n-1}}{a_n}$; **product of roots**: $(-1)^n\frac{a_0}{a_n}$
- **Multiplicity** determines whether the graph crosses (odd) or bounces (even) at a root

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've graduated from parabolas to polynomials of any degree! Factor theorem, synthetic division, multiplicity — these are serious AHL tools. The next chapter brings rational functions, where polynomials meet division and asymptotes enter the picture. It's going to be dramatic!
