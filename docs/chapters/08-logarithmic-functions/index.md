---
title: Logarithmic Functions
description: Introducing logarithms as inverses of exponentials, logarithm laws, change of base, solving log equations, and logarithmic scales
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:42:00
version: 0.07
---

# Logarithmic Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Logarithms are just exponentials looking in a mirror. Reflect on that for a moment! In the last chapter, we asked "What do I get when I raise $2$ to the power $x$?" Now we flip the question: "What power do I need to raise $2$ to in order to get a certain number?" That's what logarithms answer. Every input has its output — and logarithms help us find the input when we only know the output!

## Summary

This chapter introduces logarithmic functions as the inverses of exponential functions. Students explore the log-exponential inverse relationship, then study common logarithms ($\log_{10}$) and natural logarithms ($\ln$). Key skills include applying logarithm laws, using the change of base rule, and solving logarithmic equations. The chapter also covers logarithmic scales and graphing logarithmic functions.

## Concepts Covered

This chapter covers the following 9 concepts from the learning graph:

1. Log-Exponential Inverse
2. Logarithmic Function
3. Common Logarithm
4. Natural Logarithm
5. Logarithm Laws
6. Change of Base Rule
7. Solving Log Equations
8. Logarithmic Scale
9. Graphing Logarithms

## Prerequisites

This chapter builds on concepts from:

- [Chapter 6: Inverse and Composite Functions](../06-inverse-and-composite-functions/index.md)
- [Chapter 7: Exponential Functions](../07-exponential-functions/index.md)

---

## The Log-Exponential Inverse Relationship

In Chapter 6, we learned that inverse functions "undo" each other. In Chapter 7, we met exponential functions but couldn't solve equations like $2^x = 5$ algebraically. Now we meet the tool that fills that gap.

The **log-exponential inverse** relationship is the fundamental connection:

$$\text{If } a^y = x, \quad \text{then } y = \log_a x$$

In words: the logarithm base $a$ of $x$ answers the question "What power do I raise $a$ to in order to get $x$?"

This means exponential and logarithmic functions are inverses:

$$f(x) = a^x \quad \text{and} \quad f^{-1}(x) = \log_a x$$

The key conversion between the two forms:

$$a^y = x \iff y = \log_a x$$

**Worked Example 1:** Convert between exponential and logarithmic form.

| Exponential Form | Logarithmic Form |
|-----------------|-----------------|
| $2^3 = 8$ | $\log_2 8 = 3$ |
| $10^2 = 100$ | $\log_{10} 100 = 2$ |
| $5^{-1} = 0.2$ | $\log_5 0.2 = -1$ |
| $e^0 = 1$ | $\ln 1 = 0$ |

**Try it yourself:** Write $3^4 = 81$ in logarithmic form, and write $\log_2 32 = 5$ in exponential form.

??? note "Click to reveal answer"
    $\log_3 81 = 4$ and $2^5 = 32$.

## The Logarithmic Function

A **logarithmic function** has the form:

$$f(x) = \log_a x, \quad a > 0, \; a \neq 1$$

Key properties:

- **Domain:** $(0, \infty)$ — you can only take the logarithm of a positive number
- **Range:** $(-\infty, \infty)$ — logarithms can output any real number
- **$x$-intercept:** $(1, 0)$ since $\log_a 1 = 0$ for any base
- **Vertical asymptote:** $x = 0$ (the $y$-axis)
- The graph is a reflection of $y = a^x$ over the line $y = x$

Notice how the domain and range of $\log_a x$ are the reverse of $a^x$. This makes sense — they're inverse functions, so inputs and outputs are swapped.

### Common Logarithm

The **common logarithm** uses base $10$ and is written simply as $\log x$ (without a subscript):

$$\log x = \log_{10} x$$

Common logarithms are called "common" because base $10$ matches our decimal number system. Your calculator's LOG button gives common logarithms.

Useful values to know:

- $\log 1 = 0$ (since $10^0 = 1$)
- $\log 10 = 1$ (since $10^1 = 10$)
- $\log 100 = 2$ (since $10^2 = 100$)
- $\log 1000 = 3$ (since $10^3 = 1000$)

### Natural Logarithm

The **natural logarithm** uses base $e$ and is written $\ln x$:

$$\ln x = \log_e x$$

Natural logarithms pair with the natural exponential $e^x$ as inverses:

$$e^{\ln x} = x \quad \text{and} \quad \ln(e^x) = x$$

Your calculator's LN button gives natural logarithms.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Common logs answer: "How many digits does this number have?" (roughly). Natural logs answer: "How many times does $e$ need to multiply itself?" Common logs are great for orders of magnitude. Natural logs are what nature actually uses. Both are useful — but in the IB, $\ln$ appears much more often.

## Logarithm Laws

The **logarithm laws** are rules that simplify logarithmic expressions. They follow directly from the laws of exponents.

**Law 1 — Product Rule:**

$$\log_a(mn) = \log_a m + \log_a n$$

The log of a product equals the sum of the logs.

**Law 2 — Quotient Rule:**

$$\log_a\left(\frac{m}{n}\right) = \log_a m - \log_a n$$

The log of a quotient equals the difference of the logs.

**Law 3 — Power Rule:**

$$\log_a(m^k) = k \cdot \log_a m$$

The log of a power brings the exponent out front as a multiplier.

These three laws, together with the identity $\log_a a = 1$ and $\log_a 1 = 0$, allow you to manipulate virtually any logarithmic expression.

**Worked Example 2:** Simplify $\log_2 8 + \log_2 4$.

$$\log_2 8 + \log_2 4 = \log_2(8 \times 4) = \log_2 32 = 5$$

**Worked Example 3:** Express $\log_a\left(\frac{x^3\sqrt{y}}{z^2}\right)$ in terms of $\log_a x$, $\log_a y$, and $\log_a z$.

$$= \log_a x^3 + \log_a \sqrt{y} - \log_a z^2$$

$$= 3\log_a x + \frac{1}{2}\log_a y - 2\log_a z$$

**Try it yourself:** Simplify $2\log 5 + \log 4$.

??? note "Click to reveal answer"
    $\log 5^2 + \log 4 = \log 25 + \log 4 = \log(25 \times 4) = \log 100 = 2$.

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    The log laws work in both directions! You can expand $\log(xy)$ into $\log x + \log y$ (useful for solving equations), or condense $\log x + \log y$ back into $\log(xy)$ (useful for simplifying). Being fluent in both directions is a superpower for the IB exam.

## Change of Base Rule

The **change of base rule** lets you convert a logarithm from one base to another:

$$\log_a x = \frac{\log_b x}{\log_b a}$$

The most common use is converting to base $10$ or base $e$ so you can use your calculator:

$$\log_a x = \frac{\log x}{\log a} = \frac{\ln x}{\ln a}$$

**Worked Example 4:** Calculate $\log_3 20$ using common logarithms.

$$\log_3 20 = \frac{\log 20}{\log 3} = \frac{1.3010}{0.4771} \approx 2.727$$

This means $3^{2.727} \approx 20$.

**Try it yourself:** Calculate $\log_5 100$ using your calculator.

??? note "Click to reveal answer"
    $\log_5 100 = \frac{\log 100}{\log 5} = \frac{2}{0.6990} \approx 2.861$.

## Solving Logarithmic Equations

**Solving log equations** involves using the log-exponential conversion and logarithm laws to isolate the variable. There are two main types.

### Type 1: Exponential equations solved with logarithms

These are the equations we couldn't solve in Chapter 7.

**Worked Example 5:** Solve $2^x = 5$.

Take $\log$ of both sides:

$$\log(2^x) = \log 5$$

$$x \log 2 = \log 5$$

$$x = \frac{\log 5}{\log 2} = \frac{0.6990}{0.3010} \approx 2.322$$

**Worked Example 6:** Solve $e^{3x} = 40$.

Take $\ln$ of both sides:

$$3x = \ln 40$$

$$x = \frac{\ln 40}{3} = \frac{3.6889}{3} \approx 1.230$$

### Type 2: Equations with logarithmic terms

**Worked Example 7:** Solve $\log_2(x + 3) = 5$.

Convert to exponential form:

$$x + 3 = 2^5 = 32$$

$$x = 29$$

**Worked Example 8:** Solve $\log x + \log(x + 3) = 1$.

Use the product rule:

$$\log[x(x + 3)] = 1$$

$$x(x + 3) = 10^1 = 10$$

$$x^2 + 3x - 10 = 0$$

$$(x + 5)(x - 2) = 0$$

$$x = -5 \quad \text{or} \quad x = 2$$

Check: $x = -5$ gives $\log(-5)$, which is undefined. So $x = 2$ is the only solution.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    Always check your answers when solving log equations! Logarithms are only defined for positive arguments. If your solution makes any logarithm argument negative or zero, that solution is extraneous — reject it. This trap catches students every exam cycle.

**Try it yourself:** Solve $3^{2x+1} = 54$.

??? note "Click to reveal answer"
    $\log(3^{2x+1}) = \log 54$. $(2x+1)\log 3 = \log 54$. $2x + 1 = \frac{\log 54}{\log 3} = \frac{1.7324}{0.4771} = 3.6309$. $2x = 2.6309$. $x \approx 1.315$.

#### Diagram: Logarithm Equation Solver
<iframe src="../../sims/logarithm-equation-solver/main.html" width="100%" height="512" scrolling="no"></iframe>

<details markdown="1">
<summary>Logarithm Equation Solver</summary>
Type: microsim
**sim-id:** logarithm-equation-solver<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Visualize the solution of exponential and logarithmic equations by showing the graphs of both sides and highlighting the intersection as the solution.

Learning Objective: Students will solve exponential and logarithmic equations graphically and algebraically, verifying that solutions correspond to graph intersections (Apply L3 — solve, demonstrate).

Instructional Rationale: Graphical verification of algebraic solutions strengthens understanding of why logarithms "undo" exponentials. Seeing the intersection point reinforces that the solution satisfies both sides of the equation.

Visual elements:

- A coordinate grid showing two functions: the left-hand side and right-hand side of the equation
- The intersection point highlighted and its coordinates displayed
- The algebraic solution steps shown in a side panel
- Domain restrictions highlighted (e.g., the region where $\log$ is undefined shown in gray)

Interactive controls:

- Dropdown: Select equation type from a bank: "$2^x = 5$," "$e^{3x} = 40$," "$\log_2(x+3) = 5$," "$\log x + \log(x+3) = 1$," "$3^x = 10$"
- Checkbox: "Show algebraic solution" — reveals step-by-step solution
- Checkbox: "Show domain restriction" — grays out region where logarithm is undefined
- Slider: Zoom level (to examine the intersection more closely)
- Button: "Next Equation"

Default: "$2^x = 5$" selected, algebraic solution hidden.

Canvas: Responsive, full width, 550px height
</details>

## Logarithmic Scales

A **logarithmic scale** uses powers of $10$ (or another base) instead of equal intervals. On a logarithmic scale, each step represents a multiplication rather than an addition.

Logarithmic scales are used when data spans many orders of magnitude — when the smallest and largest values differ by factors of thousands or millions.

Famous examples of logarithmic scales:

| Scale | Measures | Each unit increase means... |
|-------|----------|---------------------------|
| Richter scale | Earthquake intensity | $10\times$ more shaking |
| Decibel scale | Sound intensity | $10\times$ more energy |
| pH scale | Acidity | $10\times$ more H⁺ ions |
| Stellar magnitude | Star brightness | $\approx 2.5\times$ dimmer |

**Worked Example 9:** The Richter scale defines magnitude as $M = \log\left(\frac{I}{I_0}\right)$ where $I$ is intensity and $I_0$ is a reference level. How many times more intense is a magnitude $7$ earthquake compared to a magnitude $5$?

Difference in magnitude: $7 - 5 = 2$.

Since each magnitude unit represents a factor of $10$:

$$\frac{I_7}{I_5} = 10^2 = 100$$

A magnitude $7$ earthquake is $100$ times more intense than a magnitude $5$.

## Graphing Logarithms

**Graphing logarithmic functions** reveals a shape that is the mirror image of the corresponding exponential — reflected over the line $y = x$.

Key features of $f(x) = \log_a x$ (where $a > 1$):

- Passes through $(1, 0)$ (since $\log_a 1 = 0$)
- Passes through $(a, 1)$ (since $\log_a a = 1$)
- Vertical asymptote at $x = 0$
- Increases slowly — logarithmic growth is the opposite of exponential growth
- Domain: $(0, \infty)$; Range: $(-\infty, \infty)$
- Always concave down

**Try it yourself:** Sketch the key features of $f(x) = \log_2 x$. What is $f(8)$? What is $f(\frac{1}{4})$?

??? note "Click to reveal answer"
    $f(8) = \log_2 8 = 3$. $f(\frac{1}{4}) = \log_2 \frac{1}{4} = -2$. The graph passes through $(1, 0)$, $(2, 1)$, $(4, 2)$, $(8, 3)$ and approaches $-\infty$ as $x \to 0^+$.

## Key Takeaways

This chapter introduced logarithmic functions — the inverse of exponentials:

- The **log-exponential inverse** relationship: $a^y = x \iff y = \log_a x$
- A **logarithmic function** $f(x) = \log_a x$ has domain $(0, \infty)$ and vertical asymptote $x = 0$
- **Common logarithm** $\log x = \log_{10} x$; **natural logarithm** $\ln x = \log_e x$
- Three **logarithm laws**: product ($\log mn = \log m + \log n$), quotient ($\log \frac{m}{n} = \log m - \log n$), power ($\log m^k = k\log m$)
- The **change of base rule**: $\log_a x = \frac{\log x}{\log a}$ lets you use your calculator for any base
- **Solving log equations**: use log-exponential conversion and always check for extraneous solutions
- **Logarithmic scales** (Richter, decibel, pH) compress vast ranges into manageable numbers
- **Graphing logarithms** produces a slowly-increasing curve that mirrors the exponential

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've now mastered both sides of the exponential-logarithm mirror! Exponentials and logarithms are one of the great partnerships in mathematics — like multiplication and division, they complete each other. With these tools, you can solve any exponential equation and understand phenomena that span from earthquakes to sound waves. Trust the process — and the math!
