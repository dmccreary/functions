---
title: Exponential Functions
description: Exploring exponential functions, Euler's number, growth and decay patterns, and real-world models including compound interest, population growth, and half-life
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:36:00
version: 0.07
---

# Exponential Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Get ready for the fastest-growing chapter in the book! Exponential functions describe things that multiply rather than add — and that makes them incredibly powerful. From bacteria doubling every hour to your savings account earning interest on interest, exponentials are the mathematics of explosive change. Every input has its output — and for exponentials, those outputs can get very big, very fast!

## Summary

This chapter explores exponential functions and their applications. Students learn about bases of exponentials, Euler's number $e$, and the natural exponential function. The chapter covers exponential growth and decay patterns, solving exponential equations, and graphing exponential functions using technology. Real-world applications include compound interest, population growth, and radioactive half-life models.

## Concepts Covered

This chapter covers the following 11 concepts from the learning graph:

1. Base of an Exponential
2. Euler's Number
3. Exponential Function
4. Exponential Growth
5. Exponential Decay
6. Natural Exponential
7. Exponential Equations
8. Compound Interest Model
9. Population Growth Model
10. Half-Life Model
11. Graphing Exponentials

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)
- [Chapter 4: Linear Functions](../04-linear-functions/index.md)
- [Chapter 6: Inverse and Composite Functions](../06-inverse-and-composite-functions/index.md)

---

## The Base of an Exponential

Before we define exponential functions, we need to understand what the **base of an exponential** is. In an expression like $a^x$, the number $a$ is called the base and $x$ is the exponent (or power). The base is the number being multiplied by itself repeatedly.

Some important facts about the base:

- The base must be positive: $a > 0$
- The base cannot be $1$ (since $1^x = 1$ for all $x$ — that's just a constant function)
- Common bases include $2$, $3$, $10$, and the special number $e$

When we write $2^3 = 8$, the base is $2$ and it's multiplied by itself $3$ times: $2 \times 2 \times 2 = 8$.

## Euler's Number

One of the most important numbers in all of mathematics is **Euler's number**, denoted $e$:

$$e \approx 2.71828182845...$$

Like $\pi$, the number $e$ is irrational — its decimal expansion never terminates or repeats. It arises naturally in many contexts: compound interest, population growth, radioactive decay, and probability theory.

One way to understand $e$ is through compound interest. Imagine you invest $\$1$ at $100\%$ annual interest:

| Compounding | Formula | Amount after 1 year |
|-------------|---------|-------------------|
| Annually (1 time) | $(1 + 1)^1$ | $\$2.00$ |
| Semi-annually (2 times) | $(1 + 0.5)^2$ | $\$2.25$ |
| Quarterly (4 times) | $(1 + 0.25)^4$ | $\$2.4414$ |
| Monthly (12 times) | $(1 + 1/12)^{12}$ | $\$2.6130$ |
| Daily (365 times) | $(1 + 1/365)^{365}$ | $\$2.7146$ |
| Continuously ($n \to \infty$) | $\lim_{n\to\infty}(1 + 1/n)^n$ | $\$2.7183 = e$ |

As you compound more and more frequently, the result approaches $e$. This is why $e$ appears so naturally in finance and growth models.

## Exponential Functions

An **exponential function** has the form:

$$f(x) = a^x, \quad a > 0, \; a \neq 1$$

The key feature is that the variable $x$ appears in the exponent, not the base. Compare this with a power function like $x^2$ (where the variable is in the base) — exponential functions grow fundamentally differently.

Properties of $f(x) = a^x$:

- **Domain:** All real numbers $(-\infty, \infty)$
- **Range:** $(0, \infty)$ — the output is always positive
- **$y$-intercept:** $(0, 1)$ since $a^0 = 1$ for any valid base
- **Horizontal asymptote:** $y = 0$ (the $x$-axis)
- **No $x$-intercept:** The graph never touches the $x$-axis

### The Natural Exponential

The **natural exponential** function uses $e$ as its base:

$$f(x) = e^x$$

This function is arguably the most important in mathematics. It has the unique property that its rate of growth is proportional to its current value — it is its own derivative (a concept you'll meet in calculus). For now, think of $e^x$ as the "default" exponential function that appears whenever growth or decay happens naturally.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Why is $e$ so special? Because $e^x$ grows at a rate exactly equal to itself. If you have $e^x$ bacteria at time $x$, they're producing new bacteria at rate $e^x$ too. No other base has this perfect self-matching property. It's the Goldilocks of exponential bases — not too fast, not too slow, but just right for nature.

## Exponential Growth and Decay

The behaviour of an exponential function depends on its base:

**Exponential growth** occurs when $a > 1$. As $x$ increases, $a^x$ increases rapidly — the function "takes off" to the right. The larger the base, the faster the growth.

**Exponential decay** occurs when $0 < a < 1$. As $x$ increases, $a^x$ decreases toward zero — the function "dies away" to the right. Alternatively, exponential decay can be written as $a^{-x}$ where $a > 1$.

| Behaviour | Base Condition | As $x \to \infty$ | Example |
|-----------|---------------|-------------------|---------|
| Growth | $a > 1$ | $f(x) \to \infty$ | $2^x$, $e^x$, $10^x$ |
| Decay | $0 < a < 1$ | $f(x) \to 0$ | $0.5^x$, $e^{-x}$, $0.9^x$ |

**Worked Example 1:** Compare the values of $2^x$ and $3^x$ for $x = 0, 1, 2, 3, 4, 5$.

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|-----|-----|-----|-----|-----|-----|
| $2^x$ | $1$ | $2$ | $4$ | $8$ | $16$ | $32$ |
| $3^x$ | $1$ | $3$ | $9$ | $27$ | $81$ | $243$ |

Both start at $1$, but $3^x$ grows much faster. By $x = 5$, $3^x$ is nearly $8$ times larger than $2^x$.

**Try it yourself:** Calculate $\left(\frac{1}{2}\right)^x$ for $x = 0, 1, 2, 3, 4$. What pattern do you notice?

??? note "Click to reveal answer"
    $1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}$. The values halve each time — this is exponential decay with base $\frac{1}{2}$.

#### Diagram: Exponential Growth and Decay Explorer
<iframe src="../../sims/exponential-growth-decay-explorer/main.html" width="100%" height="482" scrolling="no"></iframe>

<details markdown="1">
<summary>Exponential Growth and Decay Explorer</summary>
Type: microsim
**sim-id:** exponential-growth-decay-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore how the base of an exponential function affects the growth or decay rate by adjusting the base with a slider and observing the graph in real time.

Learning Objective: Students will compare exponential growth and decay functions and explain how the base value determines the behaviour (Understand L2 — compare, explain).

Instructional Rationale: Adjusting the base continuously and seeing the graph morph between rapid growth, gentle growth, and decay builds intuition for the role of the base parameter. The transition point at $a = 1$ (constant function) is particularly illuminating.

Visual elements:

- A coordinate grid showing the exponential function $f(x) = a^x$
- Horizontal asymptote $y = 0$ shown as a dashed line
- The $y$-intercept at $(0, 1)$ always marked
- A shaded region indicating growth (green, $a > 1$) or decay (red, $0 < a < 1$)
- Current equation and base value displayed

Interactive controls:

- Slider: Base $a$ ($0.1$ to $5$, default $2$, step $0.1$)
- Checkbox: "Show $e^x$ reference" — overlays $e^x$ in gray as a comparison
- Checkbox: "Show table of values" — displays a small table for $x = -2, -1, 0, 1, 2, 3$
- Button: "Toggle Decay Form" — switches display between $a^x$ and $a^{-x}$ form
- Button: "Reset"

Default: Base $a = 2$, reference hidden, table hidden.

Canvas: Responsive, full width, 550px height
</details>

## Graphing Exponentials

**Graphing exponential functions** using technology reveals their distinctive shape. Here are the key features to look for:

For $f(x) = a^x$ where $a > 1$:

- The graph passes through $(0, 1)$
- It increases rapidly to the right
- It approaches $0$ (but never reaches it) to the left
- The graph is always concave up
- There are no turning points

For $f(x) = ka^x + d$, the parameters shift and scale the basic exponential:

- $k$ stretches or reflects the graph vertically
- $d$ shifts the horizontal asymptote from $y = 0$ to $y = d$

**Worked Example 2:** Sketch the key features of $f(x) = 2^x - 3$.

- Horizontal asymptote: $y = -3$ (shifted down by $3$)
- $y$-intercept: $f(0) = 2^0 - 3 = 1 - 3 = -2$, so $(0, -2)$
- $x$-intercept: Solve $2^x - 3 = 0 \implies 2^x = 3 \implies x = \log_2 3 \approx 1.585$
- The graph rises from the asymptote and increases to the right

**Try it yourself:** Find the $y$-intercept and horizontal asymptote of $g(x) = 3 \cdot 2^x + 1$.

??? note "Click to reveal answer"
    $y$-intercept: $g(0) = 3(1) + 1 = 4$. Horizontal asymptote: $y = 1$.

## Solving Exponential Equations

**Exponential equations** have the variable in the exponent. Simple ones can be solved by rewriting both sides with the same base.

**Worked Example 3:** Solve $2^{3x-1} = 16$.

Write $16$ as a power of $2$: $16 = 2^4$.

$$2^{3x-1} = 2^4$$

Since the bases are equal, the exponents must be equal:

$$3x - 1 = 4$$

$$3x = 5$$

$$x = \frac{5}{3}$$

**Worked Example 4:** Solve $9^x = 27$.

Write both sides as powers of $3$: $9 = 3^2$ and $27 = 3^3$.

$$(3^2)^x = 3^3$$

$$3^{2x} = 3^3$$

$$2x = 3$$

$$x = \frac{3}{2}$$

For more complex exponential equations (like $2^x = 5$), we need logarithms — the topic of the next chapter.

**Try it yourself:** Solve $4^x = \frac{1}{8}$.

??? note "Click to reveal answer"
    Write as powers of $2$: $(2^2)^x = 2^{-3}$, so $2^{2x} = 2^{-3}$, giving $2x = -3$ and $x = -\frac{3}{2}$.

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    When solving exponential equations, your first instinct should always be: "Can I write both sides with the same base?" If you can, the exponents must be equal and you've got a simple algebra problem. If you can't — that's when you'll need the logarithms we'll learn in Chapter 8.

## Real-World Exponential Models

Exponential functions model situations where a quantity multiplies by a constant factor over equal time periods.

### Compound Interest Model

The **compound interest model** describes how money grows when interest is earned on both the principal and accumulated interest:

$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

where $P$ is the principal (initial amount), $r$ is the annual interest rate (as a decimal), $n$ is the number of compounding periods per year, $t$ is the time in years, and $A$ is the final amount.

**Worked Example 5:** You invest $\$5000$ at $4\%$ annual interest compounded quarterly. How much do you have after $6$ years?

$$A = 5000\left(1 + \frac{0.04}{4}\right)^{4 \times 6} = 5000(1.01)^{24}$$

$$A = 5000(1.2697...) = \$6348.67$$

### Population Growth Model

The **population growth model** describes a population that grows at a constant percentage rate:

$$P(t) = P_0 \cdot a^t \quad \text{or equivalently} \quad P(t) = P_0 \cdot e^{kt}$$

where $P_0$ is the initial population, $a$ is the growth factor per time period, and $k$ is the continuous growth rate.

**Worked Example 6:** A bacterial colony starts with $500$ cells and triples every hour. How many cells are there after $4$ hours?

$$P(t) = 500 \cdot 3^t$$

$$P(4) = 500 \cdot 3^4 = 500 \cdot 81 = 40{,}500 \text{ cells}$$

### Half-Life Model

The **half-life model** describes radioactive decay — the time it takes for half of a substance to decay:

$$A(t) = A_0 \cdot \left(\frac{1}{2}\right)^{t/h}$$

where $A_0$ is the initial amount, $t$ is time, and $h$ is the half-life period.

**Worked Example 7:** A radioactive isotope has a half-life of $8$ years. If you start with $200$ g, how much remains after $24$ years?

$$A(24) = 200 \cdot \left(\frac{1}{2}\right)^{24/8} = 200 \cdot \left(\frac{1}{2}\right)^3 = 200 \cdot \frac{1}{8} = 25 \text{ g}$$

**Try it yourself:** You invest $\$1000$ at $5\%$ annual interest compounded monthly. How much do you have after $10$ years?

??? note "Click to reveal answer"
    $A = 1000\left(1 + \frac{0.05}{12}\right)^{120} = 1000(1.004167)^{120} \approx \$1647.01$

#### Diagram: Exponential Model Simulator
<iframe src="../../sims/exponential-model-simulator/main.html" width="100%" height="522" scrolling="no"></iframe>

<details markdown="1">
<summary>Exponential Model Simulator</summary>
Type: microsim
**sim-id:** exponential-model-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore compound interest, population growth, and half-life models by adjusting parameters and seeing how the exponential curve changes over time.

Learning Objective: Students will apply exponential models to real-world scenarios by adjusting parameters and interpreting the resulting growth or decay curves (Apply L3 — calculate, implement).

Instructional Rationale: Connecting adjustable parameters to real-world contexts (interest rates, doubling times, half-lives) transforms abstract exponential curves into tangible financial and scientific predictions.

Visual elements:

- A coordinate grid with time on the $x$-axis and quantity on the $y$-axis
- The exponential curve plotted based on the selected model
- Key values labelled: initial amount, final amount at a specified time, doubling time (growth) or half-life (decay)
- A data table showing values at regular intervals

Interactive controls:

- Dropdown: Model type — "Compound Interest," "Population Growth," "Half-Life Decay"
- For Compound Interest: sliders for Principal ($100$-$10000$, default $1000$), Rate ($1\%$-$15\%$, default $5\%$), Compounding frequency (1/2/4/12/365, default 12)
- For Population Growth: sliders for Initial population ($10$-$10000$, default $500$), Growth factor ($1.1$-$5$, default $2$)
- For Half-Life: sliders for Initial amount ($10$-$1000$, default $200$), Half-life period ($1$-$50$ years, default $8$)
- Slider: Time range ($1$-$100$ years, default $20$)
- Checkbox: "Show doubling/halving markers" — marks where the quantity doubles or halves
- Button: "Reset"

Default: Compound Interest model, $\$1000$ at $5\%$ compounded monthly over $20$ years.

Canvas: Responsive, full width, 550px height
</details>

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Rick encouraging you">
    Exponential growth can feel mind-bending — how can something double so many times so fast? But once you've got the formula and the shape of the graph in your head, these problems become routine. The hard part is believing how powerful repeated multiplication really is. Trust the math.

## Key Takeaways

This chapter introduced exponential functions — one of the most important function families in mathematics:

- The **base of an exponential** is the number being raised to a power; it must satisfy $a > 0$, $a \neq 1$
- **Euler's number** $e \approx 2.718$ arises naturally from continuous compounding
- An **exponential function** $f(x) = a^x$ always passes through $(0, 1)$ with asymptote $y = 0$
- The **natural exponential** $f(x) = e^x$ is the most important exponential function
- **Exponential growth** ($a > 1$) increases rapidly; **exponential decay** ($0 < a < 1$) decreases toward zero
- **Exponential equations** with matching bases are solved by equating exponents
- **Graphing exponentials** reveals the distinctive J-shaped (growth) or reverse-J (decay) curve
- Real-world models: **compound interest** ($A = P(1+r/n)^{nt}$), **population growth** ($P = P_0 a^t$), and **half-life** ($A = A_0(1/2)^{t/h}$)

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've tamed the exponential! From compound interest to radioactive decay, you now understand the mathematics behind some of the most dramatic changes in nature and finance. But we left one question unanswered: how do you solve $2^x = 5$ exactly? For that, we need the inverse of exponential functions — logarithms. See you in Chapter 8!
