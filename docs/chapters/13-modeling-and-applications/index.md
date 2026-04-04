---
title: Modeling and Applications
description: Applying functions to real-world problems through the mathematical modeling cycle, regression, curve fitting, interpolation, extrapolation, and practical considerations
generated_by: claude skill chapter-content-generator
date: 2026-04-03 22:12:00
version: 0.07
---

# Modeling and Applications

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the grand finale! This is where all the mathematics we've learned comes alive. Every function family — linear, quadratic, exponential, logarithmic — was invented to describe something real. In this chapter, we learn how to choose the right function for the right situation, fit it to real data, and use it to make predictions. Every input has its output — and now we'll use that principle to model the world. Let's map this out one last time!

## Summary

This capstone chapter applies function concepts from throughout the course to real-world mathematical modeling. Students learn the complete mathematical modeling cycle, use regression models and curve fitting to match data, and apply interpolation and extrapolation to make predictions. The chapter also addresses practical considerations including units and dimensions, and the distinction between exact and approximate values.

## Concepts Covered

This chapter covers the following 7 concepts from the learning graph:

1. Mathematical Modeling Cycle
2. Regression Model
3. Curve Fitting
4. Extrapolation
5. Interpolation
6. Units and Dimensions
7. Exact vs Approximate

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)
- [Chapter 4: Linear Functions](../04-linear-functions/index.md)

---

## The Mathematical Modeling Cycle

**Mathematical modeling** is the process of using mathematics to represent, analyse, and solve real-world problems. It's not a one-step process — it's a cycle that you repeat and refine.

The **mathematical modeling cycle** has four stages:

1. **Formulate:** Identify the real-world problem, make simplifying assumptions, choose variables, and select a function type (linear, quadratic, exponential, etc.)

2. **Solve:** Use mathematical techniques to work with the model — substitute values, solve equations, find key features

3. **Interpret:** Translate the mathematical results back into real-world terms — what do the answers actually mean in context?

4. **Validate:** Compare the model's predictions with real data — does it work? If not, refine assumptions and cycle back to step 1

This cycle reflects how mathematics is actually used in science, engineering, and business. Models are never perfect — they're useful approximations that we improve over time.

**Worked Example 1:** A farmer records the yield of wheat (in kg) versus the amount of fertiliser used (in g/m²):

| Fertiliser (g/m²) | 0 | 10 | 20 | 30 | 40 | 50 |
|-------------------|---|----|----|----|----|-----|
| Yield (kg) | 20 | 35 | 48 | 55 | 58 | 56 |

**Formulate:** The yield increases at first but appears to level off and decrease at high fertiliser levels. This suggests a quadratic model $Y(x) = ax^2 + bx + c$.

**Solve:** Using technology to find the best-fit quadratic (we'll learn how shortly), we get approximately $Y(x) = -0.017x^2 + 1.21x + 20.1$.

**Interpret:** The model predicts maximum yield at $x = -\frac{1.21}{2(-0.017)} \approx 35.6$ g/m², giving $Y \approx 41.6$ kg. Beyond this point, adding more fertiliser actually reduces yield.

**Validate:** The model predicts $Y(50) = -0.017(2500) + 1.21(50) + 20.1 = -42.5 + 60.5 + 20.1 = 38.1$. The actual value is $56$ — so our model needs improvement. Perhaps a different function type would work better, or we need more data points.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Models are like maps — they're not the territory, they're a simplification of it. A map that was as detailed as the real world would be useless! The art of modelling is choosing the right level of simplification: detailed enough to be useful, simple enough to be manageable. And just like maps, you should always check whether your model matches reality before trusting it.

## Regression Models

A **regression model** uses statistical techniques to find the function that best fits a set of data points. Your GDC can perform regression automatically for several function types.

The most common regression types correspond to our function families:

| Regression Type | Function Form | When to Use |
|----------------|---------------|-------------|
| Linear | $y = mx + c$ | Data shows constant rate of change |
| Quadratic | $y = ax^2 + bx + c$ | Data curves up then down (or vice versa) |
| Exponential | $y = a \cdot b^x$ | Data grows or decays by a constant ratio |
| Power | $y = ax^b$ | Data follows a power relationship |
| Logarithmic | $y = a + b\ln x$ | Data increases rapidly then levels off |

Each regression calculates the "line (or curve) of best fit" — the function that minimises the overall distance between the data points and the curve.

**Worked Example 2:** The table shows the population of a bacterial colony over time:

| Hours | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Population | 100 | 210 | 430 | 900 | 1850 | 3800 |

The population roughly doubles each hour, suggesting an exponential model. Using exponential regression on a GDC:

$$P(t) \approx 102.4 \times 2.04^t$$

This tells us the initial population was about $102$ and the growth factor is approximately $2.04$ per hour (doubling time ≈ $1$ hour).

**Try it yourself:** Would a linear model be a good fit for the bacteria data above? Why or why not?

??? note "Click to reveal answer"
    No. A linear model assumes constant *additive* change, but the population increases by larger amounts each hour (110, 220, 470, 950, 1950). The changes are *multiplicative* (roughly doubling), which is exponential, not linear.

## Curve Fitting

**Curve fitting** is the broader practice of finding a mathematical function that passes through or near a set of data points. While regression is the most common method, curve fitting also includes:

- **Exact fit:** Finding a function that passes through every data point (possible with polynomial interpolation — a degree-$n$ polynomial can pass through $n + 1$ points exactly)
- **Best fit:** Finding the function that minimises the overall error (regression)
- **Model selection:** Deciding which type of function (linear, quadratic, exponential, etc.) best describes the data pattern

The key question in curve fitting is: **which function family should I choose?** Here are visual clues:

| Data Pattern | Suggested Model |
|-------------|----------------|
| Straight line trend | Linear |
| Single curve (U or ∩ shape) | Quadratic |
| S-curve or multiple turns | Polynomial (degree 3+) |
| Rapid increase/decrease | Exponential |
| Rapid start, then levelling off | Logarithmic |

#### Diagram: Regression Model Fitter
<iframe src="../../sims/regression-model-fitter/main.html" width="100%" height="502" scrolling="no"></iframe>

<details markdown="1">
<summary>Regression Model Fitter</summary>
Type: microsim
**sim-id:** regression-model-fitter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students plot data points, select different regression types, and compare how well each model fits the data — building intuition for model selection.

Learning Objective: Students will select the most appropriate regression model for a given dataset by comparing the fit of linear, quadratic, and exponential models (Evaluate L5 — assess, justify).

Instructional Rationale: Comparing multiple regression curves on the same data makes the strengths and weaknesses of each model type visually obvious. Students learn that model choice matters and can justify their selection.

Visual elements:

- A coordinate grid with data points plotted as large dots
- Up to three regression curves displayed simultaneously in different colours (linear = blue, quadratic = green, exponential = red)
- $R^2$ (coefficient of determination) displayed for each active model, indicating goodness of fit
- Residuals optionally shown as vertical lines from each data point to the curve

Interactive controls:

- Dropdown: Select preset dataset from a bank of 5 real-world scenarios (population growth, falling object, temperature cooling, savings growth, crop yield)
- Checkboxes: Toggle each regression type (linear, quadratic, exponential, logarithmic)
- Checkbox: "Show residuals" — displays residual lines and sum of squared residuals
- Checkbox: "Show $R^2$ values" — displays goodness-of-fit measure
- Button: "Add Custom Point" — lets students click to add their own data points and refit
- Button: "Clear Custom" — removes added points
- Button: "Reset"

Default: Population growth dataset, linear regression shown.

Canvas: Responsive, full width, 550px height
</details>

## Interpolation and Extrapolation

Once you have a model, you can use it to make predictions. There are two types, and one is much more reliable than the other.

**Interpolation** means using your model to predict values *within* the range of your data. If you have data from $x = 0$ to $x = 50$ and you predict the value at $x = 25$, that's interpolation.

**Extrapolation** means using your model to predict values *beyond* the range of your data. If you predict the value at $x = 100$ when your data only goes to $x = 50$, that's extrapolation.

| Method | Definition | Reliability |
|--------|-----------|-------------|
| Interpolation | Predicting within the data range | Generally reliable |
| Extrapolation | Predicting beyond the data range | Risky — use with caution |

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    Extrapolation is the most dangerous thing you can do with a model. Just because a trend holds for the data you've seen doesn't mean it continues forever. A quadratic model for profit might predict infinite profits at extreme values — clearly unrealistic! Always state clearly when you're extrapolating, and treat the prediction with healthy scepticism.

**Worked Example 3:** Using the bacterial population model $P(t) = 102.4 \times 2.04^t$:

**(a)** Estimate the population at $t = 2.5$ hours (interpolation).

$$P(2.5) = 102.4 \times 2.04^{2.5} \approx 102.4 \times 5.95 \approx 609$$

This is interpolation (within the data range $0$–$5$) and likely reliable.

**(b)** Estimate the population at $t = 10$ hours (extrapolation).

$$P(10) = 102.4 \times 2.04^{10} \approx 102.4 \times 1167 \approx 119{,}500$$

This is extrapolation (beyond the data range) and should be treated cautiously — in reality, bacteria often hit resource limits and stop growing exponentially.

## Units and Dimensions

**Units and dimensions** are often overlooked but critically important in mathematical modeling. Every variable in a real-world model should have a unit, and the units must be consistent throughout your work.

Common practices:

- Always state units when defining variables ($t$ in seconds, $d$ in metres, $C$ in dollars)
- Check that both sides of an equation have the same units
- Convert units before substituting into formulas (e.g., convert minutes to hours if the rate is per hour)

**Worked Example 4:** A car travelling at $v$ km/h covers a distance $d$ km in $t$ hours:

$$d = vt$$

Check units: (km/h) × (h) = km ✓

If the speed is $80$ km/h and the time is $2.5$ hours:

$$d = 80 \times 2.5 = 200 \text{ km}$$

If you accidentally use minutes instead of hours: $d = 80 \times 150 = 12{,}000$ — clearly wrong! Units matter.

**Try it yourself:** A tank fills at $3$ litres per minute. How many litres does it contain after $2$ hours? Be careful with units.

??? note "Click to reveal answer"
    Convert: $2$ hours $= 120$ minutes. Volume $= 3 \times 120 = 360$ litres.

## Exact vs Approximate Values

In mathematical modeling, it's important to understand the distinction between **exact** and **approximate** values.

An **exact value** is a number expressed precisely with no rounding: $\frac{1}{3}$, $\sqrt{2}$, $\pi$, $e^2$.

An **approximate value** is a rounded or estimated number: $0.333$, $1.414$, $3.14$, $7.39$.

In modeling contexts:

- Input data is usually approximate (measurements have limited precision)
- Calculated results inherit this approximation
- Report final answers to an appropriate number of significant figures (typically $3$ s.f. in IB unless stated otherwise)
- Keep exact values through intermediate calculations and only round at the end

| Context | Use Exact | Use Approximate |
|---------|-----------|----------------|
| Algebraic manipulation | ✓ ($\sqrt{2}$, $\frac{\pi}{4}$) | |
| Model parameters from data | | ✓ ($m \approx 2.34$) |
| Intermediate calculations | ✓ (avoid rounding errors) | |
| Final answers to applied problems | | ✓ (round to 3 s.f.) |

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    In IB exams, a common instruction is "Give your answer correct to 3 significant figures." But don't round too early! If you round an intermediate step, the rounding error can snowball. Keep full precision on your calculator until the very last step, then round. Your calculator is better at remembering decimals than you are.

## Choosing the Right Model

To bring everything together, here's a decision framework for choosing a function model:

1. **Plot the data** — always look at the scatter plot first
2. **Identify the pattern** — is it linear, curved, exponential?
3. **Consider the context** — what does the science or scenario suggest?
4. **Try regression** — fit a model and check the $R^2$ value
5. **Validate** — do the predictions make sense in context?
6. **State limitations** — where does the model break down?

**Worked Example 5:** A coffee shop owner records daily sales ($y$) versus temperature ($x$ in °C):

| Temp | 5 | 10 | 15 | 20 | 25 | 30 |
|------|---|----|----|----|----|-----|
| Sales | 180 | 160 | 130 | 95 | 70 | 50 |

The data shows a decreasing trend that appears roughly linear. A linear regression gives:

$$y \approx -5.1x + 203$$

**Interpret:** For every $1°C$ increase in temperature, sales decrease by about $\$5.10$. The $y$-intercept of $203$ represents predicted sales at $0°C$.

**Validate:** The model predicts $y(20) = -102 + 203 = 101$, close to the actual $95$ ✓.

**Limitations:** The model predicts $y(40) = -1$, which is negative — clearly impossible. The model is only valid within the observed temperature range.

## Key Takeaways

This capstone chapter connected all your function knowledge to real-world problem solving:

- The **mathematical modeling cycle** has four stages: formulate, solve, interpret, validate — and it repeats
- **Regression models** use your GDC to find the best-fit function (linear, quadratic, exponential, etc.)
- **Curve fitting** matches data to a function; the choice of function family depends on the data pattern
- **Interpolation** (within data range) is reliable; **extrapolation** (beyond data range) is risky
- **Units and dimensions** must be consistent — always state and check them
- **Exact values** are precise; **approximate values** are rounded — keep exact values through calculations and round only at the end

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've made it to the end of the book! From algebraic foundations all the way to real-world modelling, you've built an incredible toolkit of mathematical skills. Linear, quadratic, exponential, logarithmic, polynomial, rational — you know them all. You can transform them, compose them, invert them, and model the real world with them. That's not just a function worth knowing — that's a whole *course* worth knowing! Trust the process — and the math. You've earned this! 🎓
