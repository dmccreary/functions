---
title: Quadratic Functions
description: Exploring quadratic functions in three forms, the discriminant, solving techniques, and real-world applications including projectile motion and optimization
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:24:00
version: 0.07
---

# Quadratic Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Things are about to get curvy! Quadratic functions produce those beautiful U-shaped (and upside-down U-shaped) curves called parabolas. They model everything from basketball trajectories to business profits, and they're full of fascinating features waiting to be discovered. Every input has its output — and for quadratics, the outputs form some of the most elegant shapes in mathematics. Let's map this out!

## Summary

This chapter explores quadratic functions in depth, covering the three standard forms: standard form with y-intercept, factored form with roots, and vertex form. Students learn to find the vertex, axis of symmetry, and nature of roots using the discriminant. Solving techniques include factoring, completing the square, and the quadratic formula. The chapter also covers quadratic inequalities using sign diagrams and concludes with real-world applications including projectile motion and revenue optimization problems.

## Concepts Covered

This chapter covers the following 21 concepts from the learning graph:

1. Quadratic Function
2. Parabola
3. Standard Form Quadratic
4. Vertex of a Parabola
5. Factoring Quadratics
6. Factored Form Quadratic
7. Discriminant
8. Nature of Roots
9. Two Real Roots
10. Equal Real Roots
11. No Real Roots
12. Sign Diagram
13. Quadratic Inequalities
14. Completing the Square
15. Vertex Form Quadratic
16. Axis of Symmetry
17. Quadratic Formula
18. Solving Quadratic Equations
19. Quadratic Applications
20. Projectile Motion Model
21. Revenue Optimization

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)
- [Chapter 4: Linear Functions](../04-linear-functions/index.md)

---

## What Is a Quadratic Function?

A **quadratic function** is a function of the form:

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

The highest power of $x$ is $2$, which is what makes it "quadratic" (from the Latin *quadratus*, meaning "square"). The coefficients $a$, $b$, and $c$ are constants, and the requirement $a \neq 0$ ensures that the $x^2$ term is actually present — without it, we'd just have a linear function.

The graph of every quadratic function is a smooth, symmetric curve called a **parabola**. The shape of the parabola depends on the value of $a$:

- If $a > 0$, the parabola opens **upward** (like a bowl ∪) and has a minimum point
- If $a < 0$, the parabola opens **downward** (like an umbrella ∩) and has a maximum point
- The larger $|a|$ is, the narrower the parabola; the smaller $|a|$, the wider

Here are some examples:

| Function | $a$ | Opens | Shape |
|----------|-----|-------|-------|
| $f(x) = x^2$ | $1$ | Upward | Standard width |
| $g(x) = -2x^2 + 3$ | $-2$ | Downward | Narrow |
| $h(x) = \frac{1}{4}x^2 - x + 1$ | $\frac{1}{4}$ | Upward | Wide |

## Three Forms of a Quadratic

Just as linear functions can be written in different forms, quadratic functions have three standard forms, each revealing different information.

### Standard Form

The **standard form** (sometimes called general form) of a quadratic is:

$$f(x) = ax^2 + bx + c$$

This form directly shows the $y$-intercept, which is $c$ (since $f(0) = c$). It's the most common starting form for quadratic problems.

### Factored Form

The **factored form** reveals the roots (zeros) of the quadratic:

$$f(x) = a(x - p)(x - q)$$

where $p$ and $q$ are the $x$-intercepts (the values where $f(x) = 0$). This form makes it easy to read off where the parabola crosses the $x$-axis.

### Vertex Form

The **vertex form** reveals the turning point:

$$f(x) = a(x - h)^2 + k$$

where $(h, k)$ is the **vertex of the parabola** — the maximum or minimum point. This form tells you exactly where the parabola's peak or valley is located.

The following table summarizes what each form reveals:

| Form | Equation | Reveals |
|------|----------|---------|
| Standard | $f(x) = ax^2 + bx + c$ | $y$-intercept ($c$), direction ($a$) |
| Factored | $f(x) = a(x - p)(x - q)$ | $x$-intercepts ($p$ and $q$) |
| Vertex | $f(x) = a(x - h)^2 + k$ | Vertex $(h, k)$, direction ($a$) |

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Think of the three forms as three different camera angles on the same parabola. Standard form shows you the $y$-intercept. Factored form shows you where the curve hits the ground. Vertex form shows you the peak (or valley). Same parabola, different views — and a great mathematician can switch between them fluently.

## The Vertex and Axis of Symmetry

Every parabola has a line of symmetry — a vertical line that divides it into two mirror-image halves. This line is called the **axis of symmetry**, and it passes through the vertex.

In standard form $f(x) = ax^2 + bx + c$, the axis of symmetry has equation:

$$x = -\frac{b}{2a}$$

The **vertex** is the point on the parabola where this line crosses the curve. Its coordinates are:

$$\text{Vertex} = \left(-\frac{b}{2a},\; f\left(-\frac{b}{2a}\right)\right)$$

If $a > 0$, the vertex is the minimum point. If $a < 0$, the vertex is the maximum point.

**Worked Example 1:** Find the vertex and axis of symmetry of $f(x) = 2x^2 - 8x + 3$.

The axis of symmetry:

$$x = -\frac{-8}{2(2)} = \frac{8}{4} = 2$$

The $y$-coordinate of the vertex:

$$f(2) = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$$

The vertex is $(2, -5)$. Since $a = 2 > 0$, this is a **minimum point**.

**Try it yourself:** Find the vertex of $g(x) = -x^2 + 6x - 4$. Is it a maximum or minimum?

??? note "Click to reveal answer"
    $x = -\frac{6}{2(-1)} = 3$. $g(3) = -9 + 18 - 4 = 5$. The vertex is $(3, 5)$. Since $a = -1 < 0$, it is a **maximum point**.

## Factoring Quadratics

**Factoring quadratics** means rewriting $ax^2 + bx + c$ as a product of two linear factors. This is the reverse of expanding brackets, which we practiced in Chapter 1.

For a simple quadratic $x^2 + bx + c$, we look for two numbers $p$ and $q$ such that:

- $p + q = b$ (they add to the coefficient of $x$)
- $p \times q = c$ (they multiply to the constant term)

Then $x^2 + bx + c = (x + p)(x + q)$.

**Worked Example 2:** Factor $x^2 + 7x + 12$.

We need two numbers that add to $7$ and multiply to $12$. Testing: $3 + 4 = 7$ ✓ and $3 \times 4 = 12$ ✓.

$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

**Worked Example 3:** Factor $x^2 - 5x + 6$.

We need two numbers that add to $-5$ and multiply to $6$. Testing: $(-2) + (-3) = -5$ ✓ and $(-2) \times (-3) = 6$ ✓.

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

When $a \neq 1$, factoring is more involved. One approach: find two numbers that add to $b$ and multiply to $ac$, then use grouping.

**Worked Example 4:** Factor $2x^2 + 5x + 3$.

Here $a \times c = 6$. We need two numbers adding to $5$ and multiplying to $6$: that's $2$ and $3$.

Split the middle term: $2x^2 + 2x + 3x + 3$

Group: $2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1)$

**Try it yourself:** Factor $3x^2 - 10x + 8$.

??? note "Click to reveal answer"
    $a \times c = 24$. Numbers adding to $-10$ and multiplying to $24$: $-4$ and $-6$. Split: $3x^2 - 4x - 6x + 8 = x(3x - 4) - 2(3x - 4) = (x - 2)(3x - 4)$.

## Solving Quadratic Equations

**Solving quadratic equations** means finding the values of $x$ that satisfy $ax^2 + bx + c = 0$. There are three main methods.

### Method 1: Factoring

If the quadratic factors neatly, set each factor equal to zero.

**Worked Example 5:** Solve $x^2 - x - 12 = 0$.

$$x^2 - x - 12 = (x - 4)(x + 3) = 0$$

$$x = 4 \quad \text{or} \quad x = -3$$

### Method 2: Completing the Square

**Completing the square** transforms $ax^2 + bx + c$ into vertex form $a(x - h)^2 + k$.

The idea is to create a perfect square trinomial from the first two terms. For $x^2 + bx$, add and subtract $\left(\frac{b}{2}\right)^2$:

$$x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$$

**Worked Example 6:** Write $f(x) = x^2 + 6x + 2$ in vertex form by completing the square.

Take the coefficient of $x$, which is $6$. Half of $6$ is $3$, and $3^2 = 9$.

$$f(x) = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7$$

The vertex form is $f(x) = (x + 3)^2 - 7$, so the vertex is $(-3, -7)$.

**Worked Example 7:** Solve $x^2 + 4x - 1 = 0$ by completing the square.

$$x^2 + 4x = 1$$

$$(x + 2)^2 - 4 = 1$$

$$(x + 2)^2 = 5$$

$$x + 2 = \pm\sqrt{5}$$

$$x = -2 \pm \sqrt{5}$$

**Try it yourself:** Complete the square for $f(x) = x^2 - 8x + 10$ and find the vertex.

??? note "Click to reveal answer"
    $f(x) = (x^2 - 8x + 16) - 16 + 10 = (x - 4)^2 - 6$. Vertex: $(4, -6)$.

### Method 3: The Quadratic Formula

The **quadratic formula** solves any quadratic equation $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This formula always works — whether the quadratic factors neatly or not.

**Worked Example 8:** Solve $2x^2 + 3x - 5 = 0$.

$$x = \frac{-3 \pm \sqrt{9 + 40}}{4} = \frac{-3 \pm \sqrt{49}}{4} = \frac{-3 \pm 7}{4}$$

$$x = \frac{4}{4} = 1 \quad \text{or} \quad x = \frac{-10}{4} = -\frac{5}{2}$$

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    Which method should you use? Try factoring first — it's fastest when it works. If the numbers don't cooperate, go straight to the quadratic formula. Completing the square is best when you need to find the vertex or convert to vertex form. Think of it like choosing a tool: screwdriver for screws, hammer for nails, quadratic formula for everything.

#### Diagram: Quadratic Equation Solver
<iframe src="../../sims/quadratic-equation-solver/main.html" width="100%" height="522" scrolling="no"></iframe>

<details markdown="1">
<summary>Quadratic Equation Solver</summary>
Type: microsim
**sim-id:** quadratic-equation-solver<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students enter coefficients $a$, $b$, $c$ and see the quadratic solved by all three methods side by side, with the graph showing the roots visually.

Learning Objective: Students will solve quadratic equations using factoring, completing the square, and the quadratic formula, and relate the solutions to the graph (Apply L3 — solve, calculate).

Instructional Rationale: Showing all three solution methods simultaneously for the same equation helps students see that they yield the same result through different paths. The graph reinforces that algebraic solutions correspond to visual x-intercepts.

Visual elements:

- Left panel: A coordinate grid showing the parabola with x-intercepts (roots) marked
- Right panel: Three solution methods displayed step by step:
  - Factoring (if possible, or "Does not factor neatly" message)
  - Completing the square
  - Quadratic formula
- Discriminant value displayed prominently with color coding (positive = green, zero = yellow, negative = red)
- Vertex marked on the graph with coordinates

Interactive controls:

- Slider: $a$ ($-5$ to $5$, default $1$, step $0.5$, excluding $0$)
- Slider: $b$ ($-10$ to $10$, default $-2$, step $1$)
- Slider: $c$ ($-10$ to $10$, default $-3$, step $1$)
- Checkbox: "Show Step-by-Step" — expands each method to show intermediate steps
- Button: "Random Equation" — generates random integer coefficients
- Button: "Reset" — returns to $a=1, b=-2, c=-3$

Default: $a = 1$, $b = -2$, $c = -3$, showing $x^2 - 2x - 3 = 0$ with roots at $x = 3$ and $x = -1$.

Canvas: Responsive, full width, 550px height
</details>

## The Discriminant and Nature of Roots

The expression under the square root in the quadratic formula is called the **discriminant**:

$$\Delta = b^2 - 4ac$$

The discriminant is a powerful tool because it tells you the **nature of the roots** without actually solving the equation — it's like a spoiler alert for your quadratic.

The three cases are:

**Two real roots** ($\Delta > 0$): The parabola crosses the $x$-axis at two distinct points. The equation has two different solutions.

**Equal real roots** ($\Delta = 0$): The parabola just touches the $x$-axis at one point (the vertex sits on the $x$-axis). The equation has one repeated solution.

**No real roots** ($\Delta < 0$): The parabola doesn't reach the $x$-axis at all — it floats entirely above or entirely below it. The equation has no real solutions.

| Discriminant | Value | Number of Roots | Graph |
|-------------|-------|-----------------|-------|
| $\Delta > 0$ | Positive | Two distinct real roots | Parabola crosses $x$-axis twice |
| $\Delta = 0$ | Zero | One repeated real root | Parabola touches $x$-axis once |
| $\Delta < 0$ | Negative | No real roots | Parabola doesn't touch $x$-axis |

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    The discriminant is basically a spoiler alert for your quadratic. Positive? Two roots — the full drama. Zero? One root — a cliffhanger ending. Negative? No real roots — plot twist, the story never crosses the $x$-axis! Check $\Delta$ first and you'll know what to expect before you even start solving.

**Worked Example 9:** Determine the nature of the roots of $3x^2 - 4x + 5 = 0$.

$$\Delta = (-4)^2 - 4(3)(5) = 16 - 60 = -44$$

Since $\Delta < 0$, the equation has **no real roots**.

**Worked Example 10:** For what values of $k$ does $x^2 + kx + 9 = 0$ have equal real roots?

Equal roots require $\Delta = 0$:

$$k^2 - 4(1)(9) = 0$$

$$k^2 = 36$$

$$k = 6 \quad \text{or} \quad k = -6$$

**Try it yourself:** Determine the nature of the roots of $2x^2 + 5x + 1 = 0$.

??? note "Click to reveal answer"
    $\Delta = 25 - 8 = 17 > 0$. The equation has **two distinct real roots**.

## Quadratic Inequalities and Sign Diagrams

A **quadratic inequality** has the form $ax^2 + bx + c > 0$ (or $<$, $\geq$, $\leq$). To solve one, we need to determine which intervals of $x$-values make the expression positive or negative.

A **sign diagram** is a number line that shows where an expression is positive, negative, or zero. It's built from the roots of the corresponding equation.

Here's the process for solving a quadratic inequality:

1. Solve $ax^2 + bx + c = 0$ to find the roots
2. Plot the roots on a number line
3. Test a value in each interval to determine the sign
4. Select the intervals that satisfy the inequality

**Worked Example 11:** Solve $x^2 - 5x + 6 < 0$.

**Step 1:** Solve $x^2 - 5x + 6 = 0$: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.

**Step 2:** The roots divide the number line into three intervals: $(-\infty, 2)$, $(2, 3)$, $(3, \infty)$.

**Step 3:** Test values:

| Interval | Test value | $(x-2)(x-3)$ | Sign |
|----------|-----------|---------------|------|
| $x < 2$ | $x = 0$ | $(-2)(-3) = 6$ | $+$ |
| $2 < x < 3$ | $x = 2.5$ | $(0.5)(-0.5) = -0.25$ | $-$ |
| $x > 3$ | $x = 4$ | $(2)(1) = 2$ | $+$ |

**Step 4:** We want $< 0$ (negative), so the solution is $2 < x < 3$, or in interval notation: $(2, 3)$.

**Try it yourself:** Solve $x^2 - 1 \geq 0$.

??? note "Click to reveal answer"
    Roots: $x = -1$ and $x = 1$. Test intervals: $(-\infty, -1)$ gives $+$, $(-1, 1)$ gives $-$, $(1, \infty)$ gives $+$. We want $\geq 0$, so $x \leq -1$ or $x \geq 1$. Solution: $(-\infty, -1] \cup [1, \infty)$.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    Don't divide both sides of a quadratic inequality by $x$! Unlike equations, dividing an inequality by a variable can flip the inequality sign if the variable is negative. Always factor and use a sign diagram instead. It's the safe route every time.

#### Diagram: Sign Diagram Builder
<iframe src="../../sims/sign-diagram-builder/main.html" width="100%" height="502" scrolling="no"></iframe>

<details markdown="1">
<summary>Sign Diagram Builder</summary>
Type: microsim
**sim-id:** sign-diagram-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Guide students through constructing sign diagrams for quadratic expressions, showing the connection between the roots on the number line and the sign of the expression in each interval.

Learning Objective: Students will solve quadratic inequalities by constructing and interpreting sign diagrams (Apply L3 — execute, solve).

Instructional Rationale: A step-by-step sign diagram builder makes the abstract process of inequality solving visual and procedural. Seeing the parabola above/below the x-axis alongside the number line signs reinforces the geometric meaning.

Visual elements:

- Top area: The parabola graph showing where it is above ($+$) and below ($-$) the $x$-axis, with those regions shaded green and red respectively
- Bottom area: A number line sign diagram with roots marked, interval signs displayed, and the solution interval highlighted
- The parabola and sign diagram are vertically aligned so students see the correspondence

Interactive controls:

- Slider: $a$ ($-3$ to $3$, default $1$, step $0.5$, excluding $0$)
- Slider: Root 1 ($-8$ to $8$, default $2$, step $0.5$)
- Slider: Root 2 ($-8$ to $8$, default $5$, step $0.5$)
- Dropdown: Inequality type ($> 0$, $\geq 0$, $< 0$, $\leq 0$)
- The solution interval is highlighted in blue on both the graph and the number line
- Button: "Show Step-by-Step" — walks through the process: find roots, test intervals, select solution
- Button: "Reset"

Default: $a = 1$, roots at $2$ and $5$, inequality $> 0$.

Canvas: Responsive, full width, 500px height
</details>

## Quadratic Applications

Quadratic functions model many real-world situations. Two of the most common are projectile motion and optimization problems.

### Projectile Motion Model

When an object is launched into the air (ignoring air resistance), its height follows a quadratic function. The **projectile motion model** has the general form:

$$h(t) = -\frac{1}{2}gt^2 + v_0 t + h_0$$

where $g$ is gravitational acceleration ($9.8$ m/s² or approximately $10$ m/s²), $v_0$ is the initial velocity, and $h_0$ is the initial height. Since $a < 0$, the parabola opens downward — what goes up must come down.

**Worked Example 12:** A ball is thrown upward from a height of $1.5$ m with an initial velocity of $20$ m/s. Using $g = 10$ m/s²:

**(a)** Write the height function.

$$h(t) = -5t^2 + 20t + 1.5$$

**(b)** Find the maximum height.

$$t = -\frac{20}{2(-5)} = 2 \text{ seconds}$$

$$h(2) = -5(4) + 20(2) + 1.5 = -20 + 40 + 1.5 = 21.5 \text{ m}$$

**(c)** When does the ball hit the ground?

Solve $-5t^2 + 20t + 1.5 = 0$. Using the quadratic formula:

$$t = \frac{-20 \pm \sqrt{400 + 30}}{-10} = \frac{-20 \pm \sqrt{430}}{-10}$$

$$t \approx \frac{-20 + 20.74}{-10} \approx -0.074 \quad \text{or} \quad t \approx \frac{-20 - 20.74}{-10} \approx 4.07$$

The ball hits the ground at $t \approx 4.07$ seconds (we discard the negative value).

### Revenue Optimization

**Revenue optimization** uses the vertex of a downward-opening parabola to find the maximum revenue.

**Worked Example 13:** A cinema finds that when tickets are priced at $\$p$, the number of tickets sold is $500 - 20p$. Find the price that maximizes revenue.

Revenue = price × quantity:

$$R(p) = p(500 - 20p) = 500p - 20p^2 = -20p^2 + 500p$$

This is a downward-opening parabola. Maximum at:

$$p = -\frac{500}{2(-20)} = \frac{500}{40} = \$12.50$$

Maximum revenue: $R(12.50) = -20(156.25) + 500(12.50) = -3125 + 6250 = \$3125$.

**Try it yourself:** A farmer has $100$ m of fencing to enclose a rectangular pen along a wall (three sides needed). Express the area as a function of width and find the maximum area.

??? note "Click to reveal answer"
    If width $= w$, then length $= 100 - 2w$. Area $= w(100 - 2w) = -2w^2 + 100w$. Maximum at $w = -\frac{100}{2(-2)} = 25$. Maximum area $= 25(50) = 1250$ m².

#### Diagram: Projectile Motion Simulator
<iframe src="../../sims/projectile-motion-simulator/main.html" width="100%" height="522" scrolling="no"></iframe>

<details markdown="1">
<summary>Projectile Motion Simulator</summary>
Type: microsim
**sim-id:** projectile-motion-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Simulate projectile motion with adjustable initial velocity and height, showing the quadratic trajectory and key features (maximum height, time of flight, landing point).

Learning Objective: Students will model projectile motion using quadratic functions and interpret the vertex and roots in context (Analyze L4 — examine, attribute).

Instructional Rationale: Projectile motion is one of the most intuitive real-world applications of quadratics. Adjusting parameters and seeing the trajectory change builds the connection between the abstract equation and the physical motion.

Visual elements:

- A side-view scene showing the ground, a launch platform, and the ball's trajectory as a parabolic arc
- The quadratic equation displayed in standard form with current parameter values
- Key features labeled: maximum height (vertex), time of flight, landing point
- A height-vs-time graph alongside the animation, with the parabola traced as the ball flies
- Dotted vertical lines marking the axis of symmetry and time of landing

Interactive controls:

- Slider: Initial velocity $v_0$ ($5$ to $30$ m/s, default $20$, step $1$)
- Slider: Initial height $h_0$ ($0$ to $10$ m, default $1.5$, step $0.5$)
- Slider: Gravity $g$ ($5$ to $15$ m/s², default $10$, step $0.5$)
- Button: "Launch" — animates the ball along the parabolic trajectory
- Button: "Reset" — clears the animation and returns to start
- Checkbox: "Show Equation" — displays $h(t) = -\frac{1}{2}gt^2 + v_0t + h_0$
- Checkbox: "Show Key Features" — labels maximum height, time up, time down, total time

Default: $v_0 = 20$, $h_0 = 1.5$, $g = 10$, equation and features shown.

Canvas: Responsive, full width, 550px height
</details>

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Rick encouraging you">
    If quadratics feel like a lot, remember — every technique here connects back to the same parabola. Factoring finds the roots. The formula finds the roots. Completing the square finds the vertex. The discriminant predicts the roots. They're all different windows into the same beautiful curve. Trust the process — and the math.

## Key Takeaways

This chapter explored the rich world of quadratic functions:

- A **quadratic function** $f(x) = ax^2 + bx + c$ produces a **parabola** that opens up ($a > 0$) or down ($a < 0$)
- Three forms: **standard** (shows $y$-intercept), **factored** (shows roots), **vertex** (shows turning point)
- The **vertex** is at $\left(-\frac{b}{2a}, f\left(-\frac{b}{2a}\right)\right)$ and the **axis of symmetry** is $x = -\frac{b}{2a}$
- **Factoring quadratics** reverses expansion to find roots; the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ always works
- **Completing the square** converts to vertex form and is key for deriving the formula
- The **discriminant** $\Delta = b^2 - 4ac$ determines the **nature of roots**: **two real** ($\Delta > 0$), **equal** ($\Delta = 0$), or **none** ($\Delta < 0$)
- **Sign diagrams** solve **quadratic inequalities** by identifying positive and negative intervals
- **Projectile motion** and **revenue optimization** are classic **quadratic applications**

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    Completing the square? Done. Quadratic formula? Mastered. Discriminant? You've spoiled the ending for every quadratic you'll ever meet. You've conquered the parabola — and that's no small feat. Up next: inverse and composite functions. The plot thickens!
