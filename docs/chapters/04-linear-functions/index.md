---
title: Linear Functions
description: A comprehensive study of linear functions including gradient-intercept, general, and point-gradient forms, parallel and perpendicular lines, and real-world linear models
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:18:00
version: 0.07
---

# Linear Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the world of straight lines! Linear functions are the simplest functions you'll study, but don't let that fool you — they're everywhere. From phone plans to speed calculations to predicting costs, the humble straight line is the workhorse of mathematics. Every input has its output — and for linear functions, the relationship is beautifully predictable. Let's map this out!

## Summary

This chapter provides a comprehensive study of linear functions and straight lines. Students learn to construct equations in gradient-intercept, general, and point-gradient forms, and to calculate and interpret gradients including parallel and perpendicular line relationships. The chapter covers solving linear equations, systems of simultaneous equations using substitution and elimination, and finding intersections of lines graphically. Real-world applications including rate of change, direct proportion, and linear modeling connect abstract concepts to practical contexts.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. Linear Function
2. Gradient-Intercept Form
3. General Form of a Line
4. Point-Gradient Form
5. Gradient Calculation
6. Positive Gradient
7. Negative Gradient
8. Zero Gradient
9. Undefined Gradient
10. Parallel Lines
11. Perpendicular Lines
12. Rate of Change
13. Direct Proportion
14. Linear Equation Solving
15. Simultaneous Equations
16. Intersection of Lines
17. Real-World Linear Models
18. Function Modeling

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)
- [Chapter 3: Graphing and Key Features](../03-graphing-and-key-features/index.md)

---

## What Is a Linear Function?

A **linear function** is a function whose graph is a straight line. It has the general form:

$$f(x) = mx + c$$

where $m$ and $c$ are constants. The key property of a linear function is that it has a constant rate of change — every time the input increases by $1$, the output changes by the same amount $m$.

In Chapter 3, we met the concepts of slope and intercepts. Linear functions are the simplest class of functions that combine these ideas into a complete package. The constant $m$ is the gradient (slope), and $c$ is the $y$-intercept.

Here are a few examples of linear functions:

- $f(x) = 3x + 2$ — gradient $3$, $y$-intercept $2$
- $g(x) = -x + 5$ — gradient $-1$, $y$-intercept $5$
- $h(x) = \frac{1}{2}x$ — gradient $\frac{1}{2}$, $y$-intercept $0$

Notice that the identity function $f(x) = x$ from Chapter 2 is a linear function with $m = 1$ and $c = 0$, and the constant function $f(x) = c$ is a linear function with $m = 0$.

## Gradient Calculation

The **gradient** of a line measures its steepness. Given any two points $(x_1, y_1)$ and $(x_2, y_2)$ on the line, the **gradient calculation** is:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x} = \frac{\text{rise}}{\text{run}}$$

The gradient is the ratio of vertical change to horizontal change. It tells you how many units the line rises (or falls) for every unit it moves to the right.

**Worked Example 1:** Find the gradient of the line through $A(1, 3)$ and $B(4, 12)$.

$$m = \frac{12 - 3}{4 - 1} = \frac{9}{3} = 3$$

The gradient is $3$, meaning the output increases by $3$ for every $1$ unit increase in the input.

**Worked Example 2:** Find the gradient of the line through $P(-2, 7)$ and $Q(3, -3)$.

$$m = \frac{-3 - 7}{3 - (-2)} = \frac{-10}{5} = -2$$

The gradient is $-2$. The negative sign tells us the line falls from left to right.

**Try it yourself:** Find the gradient of the line through $(0, -4)$ and $(6, 8)$.

??? note "Click to reveal answer"
    $m = \frac{8 - (-4)}{6 - 0} = \frac{12}{6} = 2$

## Types of Gradient

The sign (and existence) of the gradient tells you the direction of the line. There are four cases:

A **positive gradient** ($m > 0$) means the line rises from left to right — as $x$ increases, $y$ increases. Think of walking uphill.

A **negative gradient** ($m < 0$) means the line falls from left to right — as $x$ increases, $y$ decreases. Think of walking downhill.

A **zero gradient** ($m = 0$) means the line is perfectly horizontal. The function is constant — the output never changes. For example, $y = 4$ is a horizontal line with zero gradient.

An **undefined gradient** occurs when the line is vertical. A vertical line has the equation $x = k$ for some constant $k$. The gradient formula gives $\frac{\Delta y}{0}$, which is undefined. Note that a vertical line is *not* a function (it fails the "one output per input" rule from Chapter 2).

| Gradient Type | Value of $m$ | Line Direction | Example |
|---------------|-------------|----------------|---------|
| Positive | $m > 0$ | Rises left to right ↗ | $y = 2x + 1$ |
| Negative | $m < 0$ | Falls left to right ↘ | $y = -3x + 5$ |
| Zero | $m = 0$ | Horizontal → | $y = 4$ |
| Undefined | Division by zero | Vertical ↑ | $x = 2$ |

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    The steeper the line, the larger the absolute value of the gradient. A gradient of $10$ is steeper than a gradient of $2$. A gradient of $-10$ is just as steep as $10$, but going in the opposite direction. And a gradient of $0$? That's as flat as a pancake. A delicious, mathematical pancake.

#### Diagram: Gradient Explorer
<iframe src="../../sims/gradient-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Gradient Explorer</summary>
Type: microsim
**sim-id:** gradient-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore how the gradient value affects the steepness and direction of a line by adjusting a slider and observing the graph in real time.

Learning Objective: Students will describe how the gradient value determines the steepness and direction of a linear function's graph (Understand L2 — explain, interpret).

Instructional Rationale: Real-time manipulation of the gradient parameter builds intuition for the gradient-graph relationship. Seeing the line rotate around the y-intercept as the slider moves makes the connection between the number and the visual immediate and visceral.

Visual elements:

- A coordinate grid from $-10$ to $10$ in both axes
- A straight line drawn through the y-intercept, with gradient determined by the slider
- The rise and run triangle shown visually between two highlighted points on the line
- Current gradient value displayed prominently (e.g., "$m = 2.5$")
- Labels: "rise" on the vertical leg, "run" on the horizontal leg of the gradient triangle

Interactive controls:

- Slider: Gradient $m$ (from $-5$ to $5$, default $1$, step $0.1$)
- Slider: $y$-intercept $c$ (from $-8$ to $8$, default $0$, step $0.5$)
- Checkbox: "Show Rise/Run Triangle" — toggles the gradient triangle visibility
- Checkbox: "Show Equation" — displays $y = mx + c$ with current values
- Button: "Reset" — returns to $m = 1$, $c = 0$

Default: $m = 1$, $c = 0$, gradient triangle visible, equation shown.

Canvas: Responsive, full width, 500px height
</details>

## Three Forms of a Linear Equation

Linear functions can be written in three standard forms, each useful in different situations.

### Gradient-Intercept Form

The **gradient-intercept form** is:

$$y = mx + c$$

This is the most common form because you can read off the gradient ($m$) and $y$-intercept ($c$) directly. In IB Mathematics, we use $c$ for the $y$-intercept, not $b$.

**Worked Example 3:** Write the equation of a line with gradient $3$ and $y$-intercept $-2$.

$$y = 3x + (-2) = 3x - 2$$

### Point-Gradient Form

The **point-gradient form** is useful when you know the gradient and one point $(x_1, y_1)$ on the line:

$$y - y_1 = m(x - x_1)$$

**Worked Example 4:** Find the equation of a line with gradient $-2$ passing through $(3, 5)$.

$$y - 5 = -2(x - 3)$$

$$y - 5 = -2x + 6$$

$$y = -2x + 11$$

### General Form

The **general form of a line** is:

$$ax + by + d = 0$$

where $a$, $b$, and $d$ are integers (by convention, $a > 0$). This form is useful for certain algebraic operations and is the standard form used in some IB examination questions. Note that we use $d$ instead of $c$ for the constant term to avoid confusion with the $y$-intercept $c$ in gradient-intercept form.

**Worked Example 5:** Convert $y = \frac{2}{3}x - 4$ to general form.

Multiply both sides by $3$ to clear the fraction:

$$3y = 2x - 12$$

Rearrange to get everything on one side:

$$2x - 3y - 12 = 0$$

The following table summarises when each form is most useful:

| Form | Equation | Best Used When... |
|------|----------|------------------|
| Gradient-intercept | $y = mx + c$ | You need to identify gradient and $y$-intercept quickly |
| Point-gradient | $y - y_1 = m(x - x_1)$ | You know the gradient and a specific point |
| General | $ax + by + d = 0$ | Solving systems or when the question requires it |

**Try it yourself:** A line has gradient $\frac{1}{2}$ and passes through $(4, 1)$. Write its equation in all three forms.

??? note "Click to reveal answer"
    Point-gradient: $y - 1 = \frac{1}{2}(x - 4)$. Gradient-intercept: $y = \frac{1}{2}x - 1$. General: $x - 2y - 2 = 0$.

## Parallel and Perpendicular Lines

Two important relationships between lines are defined by their gradients.

**Parallel lines** have the same gradient. If line 1 has gradient $m_1$ and line 2 has gradient $m_2$, then:

$$\text{Lines are parallel} \iff m_1 = m_2$$

Parallel lines never intersect — they run side by side forever.

**Perpendicular lines** meet at right angles ($90°$). Their gradients are connected by the relationship:

$$\text{Lines are perpendicular} \iff m_1 \times m_2 = -1$$

This means the gradient of a perpendicular line is the *negative reciprocal* of the original. If one line has gradient $\frac{2}{3}$, a perpendicular line has gradient $-\frac{3}{2}$.

**Worked Example 6:** Line $L_1$ has equation $y = 4x - 3$. Find the equation of the line through $(2, 1)$ that is:

**(a)** parallel to $L_1$

The parallel line has the same gradient: $m = 4$.

$$y - 1 = 4(x - 2) \implies y = 4x - 7$$

**(b)** perpendicular to $L_1$

The perpendicular gradient is $m = -\frac{1}{4}$.

$$y - 1 = -\frac{1}{4}(x - 2) \implies y = -\frac{1}{4}x + \frac{3}{2}$$

**Try it yourself:** Line $L$ has equation $2x + 3y = 12$. Find the gradient of a line perpendicular to $L$.

??? note "Click to reveal answer"
    First find the gradient of $L$: $3y = -2x + 12$, so $y = -\frac{2}{3}x + 4$, giving $m = -\frac{2}{3}$. The perpendicular gradient is $m = \frac{3}{2}$ (negative reciprocal).

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    Parallel lines have so much in common — same gradient, same direction, same steepness. It's a shame they'll never meet. Perpendicular lines, on the other hand, are complete opposites — but they cross paths exactly once, at a perfect right angle. There's a life lesson in there somewhere.

## Rate of Change and Direct Proportion

The gradient of a linear function has a powerful real-world interpretation: it is the **rate of change** — how quickly the output changes relative to the input.

If $f(x) = mx + c$, then $m$ tells you how much $f(x)$ changes for each unit increase in $x$. For instance:

- If a taxi charges $\$2.50$ per kilometre, the rate of change is $2.50$ dollars per km
- If a tank drains at $3$ litres per minute, the rate of change is $-3$ litres per minute (negative because it's decreasing)

A special case occurs when the $y$-intercept is zero: $f(x) = mx$. This is called **direct proportion** — the output is directly proportional to the input, and the graph passes through the origin. We write $y \propto x$, which means $y = kx$ for some constant $k$.

| Relationship | Equation | Graph | $y$-intercept |
|-------------|----------|-------|---------------|
| Linear function | $y = mx + c$ | Straight line | $c$ (any value) |
| Direct proportion | $y = kx$ | Straight line through origin | $0$ |

**Worked Example 7:** A spring stretches $2$ cm for every $100$ g added. If the spring is $15$ cm long with no weight:

**(a)** Write the function for length $L$ in terms of mass $m$ (in grams).

The rate of change is $\frac{2}{100} = 0.02$ cm per gram. The initial length is $15$ cm.

$$L(m) = 0.02m + 15$$

**(b)** Is this direct proportion?

No, because the $y$-intercept is $15$, not $0$. The length is not directly proportional to the mass, though the *extension* (length minus $15$) is.

## Solving Linear Equations

**Linear equation solving** means finding the value of the variable that makes the equation true. The strategy is to isolate the variable using inverse operations.

**Worked Example 8:** Solve $5x - 3 = 2x + 9$.

$$5x - 3 = 2x + 9$$

$$5x - 2x = 9 + 3$$

$$3x = 12$$

$$x = 4$$

**Try it yourself:** Solve $\frac{3x + 1}{2} = 7$.

??? note "Click to reveal answer"
    $3x + 1 = 14$, so $3x = 13$, giving $x = \frac{13}{3}$.

## Simultaneous Equations and Intersection of Lines

When two linear functions are graphed, their graphs are straight lines that (usually) cross at exactly one point. Finding that **intersection of lines** means solving a system of **simultaneous equations**.

In Chapter 1, we met the substitution and elimination methods. Now we apply them in the context of linear functions.

**Worked Example 9:** Find where $y = 3x - 1$ and $y = -x + 7$ intersect.

Since both expressions equal $y$, set them equal:

$$3x - 1 = -x + 7$$

$$4x = 8$$

$$x = 2$$

Substitute back: $y = 3(2) - 1 = 5$.

The lines intersect at $(2, 5)$.

**Worked Example 10:** Solve the system:

$$\begin{cases} 3x + 2y = 16 \\ x - y = 2 \end{cases}$$

From the second equation: $x = y + 2$. Substitute into the first:

$$3(y + 2) + 2y = 16$$

$$3y + 6 + 2y = 16$$

$$5y = 10$$

$$y = 2, \quad x = 4$$

The intersection point is $(4, 2)$.

**Try it yourself:** Find the intersection of $2x + y = 10$ and $x - 3y = -5$.

??? note "Click to reveal answer"
    From the second equation: $x = 3y - 5$. Substitute: $2(3y - 5) + y = 10$, so $6y - 10 + y = 10$, giving $7y = 20$ and $y = \frac{20}{7}$. Then $x = 3(\frac{20}{7}) - 5 = \frac{25}{7}$. The intersection is $\left(\frac{25}{7}, \frac{20}{7}\right)$.

#### Diagram: Simultaneous Equations Visualiser
<iframe src="../../sims/simultaneous-equations-visualiser/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Simultaneous Equations Visualiser</summary>
Type: microsim
**sim-id:** simultaneous-equations-visualiser<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students graph two linear equations simultaneously and see how the intersection point corresponds to the algebraic solution of the system.

Learning Objective: Students will solve systems of two linear equations graphically and verify the solution algebraically (Apply L3 — solve, demonstrate).

Instructional Rationale: Seeing two lines intersect on a graph while the algebraic solution appears alongside reinforces the connection between graphical and analytic methods. Adjustable equations let students explore how changes affect the intersection.

Visual elements:

- A coordinate grid with two straight lines drawn in different colours (blue and red)
- The intersection point highlighted with a large dot and its coordinates displayed
- Each line's equation shown in gradient-intercept form near the line
- When lines are parallel (no intersection), a message appears: "No solution — parallel lines"

Interactive controls:

- Slider: $m_1$ gradient of line 1 ($-5$ to $5$, default $2$, step $0.5$)
- Slider: $c_1$ y-intercept of line 1 ($-8$ to $8$, default $-1$, step $0.5$)
- Slider: $m_2$ gradient of line 2 ($-5$ to $5$, default $-1$, step $0.5$)
- Slider: $c_2$ y-intercept of line 2 ($-8$ to $8$, default $7$, step $0.5$)
- Checkbox: "Show Algebraic Solution" — displays the step-by-step substitution solution
- Checkbox: "Show Parallel/Perpendicular Status" — indicates if lines are parallel or perpendicular
- Button: "Reset" — returns to default values

Default: Line 1: $y = 2x - 1$ (blue), Line 2: $y = -x + 7$ (red), intersection at $(2.67, 4.33)$.

Canvas: Responsive, full width, 550px height
</details>

## Real-World Linear Models and Function Modeling

Linear functions are the foundation of **real-world linear models** — using straight-line equations to represent practical situations. **Function modeling** is the broader practice of choosing and fitting a function to describe real data.

Here are some classic real-world linear situations:

- **Phone plans:** Monthly cost = fixed fee + rate per minute used
- **Taxi fares:** Cost = flag fall + rate per kilometre
- **Temperature conversion:** $F = \frac{9}{5}C + 32$
- **Depreciation:** Value decreasing by a fixed amount each year

**Worked Example 11:** A plumber charges a $\$60$ call-out fee plus $\$45$ per hour.

**(a)** Write the cost function $C(h)$ where $h$ is hours worked.

$$C(h) = 45h + 60$$

**(b)** How much does a $3$-hour job cost?

$$C(3) = 45(3) + 60 = 135 + 60 = \$195$$

**(c)** If the bill is $\$330$, how many hours did the plumber work?

$$45h + 60 = 330$$

$$45h = 270$$

$$h = 6 \text{ hours}$$

**(d)** What is the rate of change and what does it represent?

The rate of change is $45$ — it represents the hourly charge in dollars per hour.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    When writing linear models, students often confuse the gradient with the $y$-intercept. The gradient is the *rate* — the amount that changes *per unit*. The $y$-intercept is the *starting value* — what you get when the input is zero. In the plumber example, $\$45$/hour is the gradient and $\$60$ is the $y$-intercept. Swapping them gives a very different (and wrong!) bill.

**Worked Example 12:** An access ramp must have a gradient no steeper than $\frac{1}{12}$ (a rise of $1$ metre for every $12$ metres of horizontal distance). If a ramp needs to reach a height of $0.75$ m, what is the minimum horizontal length?

The gradient requirement gives us:

$$m \leq \frac{1}{12}$$

$$\frac{0.75}{\text{run}} \leq \frac{1}{12}$$

$$\text{run} \geq 0.75 \times 12 = 9 \text{ m}$$

The ramp must be at least $9$ metres long horizontally.

**Try it yourself:** A mountain road rises $150$ m over a horizontal distance of $3$ km. What is the gradient? Express it as a percentage.

??? note "Click to reveal answer"
    $m = \frac{150}{3000} = 0.05 = 5\%$

#### Diagram: Linear Model Builder
<iframe src="../../sims/linear-model-builder/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Linear Model Builder</summary>
Type: microsim
**sim-id:** linear-model-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students build linear models from real-world scenarios by identifying the gradient (rate of change) and y-intercept (starting value), then see the resulting graph and use it to make predictions.

Learning Objective: Students will construct linear models from verbal descriptions and use them to make predictions (Create L6 — construct, formulate).

Instructional Rationale: Translating a verbal scenario into a linear equation is a higher-order skill that integrates all the concepts in this chapter. The visual feedback of seeing the model graph appear confirms whether the translation is correct.

Visual elements:

- A scenario panel at the top displaying a real-world situation in text
- Input fields for the student to enter the gradient and y-intercept
- A coordinate grid showing the resulting linear function graph
- A prediction panel where students enter an input value and see the model's prediction
- Feedback: correct/incorrect indicators when the student's model is checked

Interactive controls:

- Dropdown: Select scenario from a bank of 6 real-world situations (taxi fare, phone plan, water tank draining, savings account, temperature conversion, plumber's bill)
- Input field: "Gradient (rate of change)" — student enters a number
- Input field: "$y$-intercept (starting value)" — student enters a number
- Button: "Plot My Model" — graphs the student's linear function
- Button: "Check Answer" — compares the student's model to the correct one, highlighting differences
- Input field: "Predict for input =" — student enters an $x$ value and the model returns the prediction
- Button: "Next Scenario" — loads a new scenario

Default: Taxi fare scenario displayed, input fields empty.

Canvas: Responsive, full width, 550px height
</details>

## Key Takeaways

This chapter covered everything about the straight line — the simplest and most practical function family:

- A **linear function** has the form $f(x) = mx + c$ and its graph is a straight line
- The **gradient** $m$ is calculated as $\frac{\Delta y}{\Delta x}$; it can be **positive** (uphill), **negative** (downhill), **zero** (horizontal), or **undefined** (vertical)
- Three equation forms: **gradient-intercept** ($y = mx + c$), **point-gradient** ($y - y_1 = m(x - x_1)$), and **general** ($ax + by + d = 0$)
- **Parallel lines** share the same gradient ($m_1 = m_2$); **perpendicular lines** have gradients satisfying $m_1 \times m_2 = -1$
- The gradient represents the **rate of change**; when the line passes through the origin, we have **direct proportion**
- **Linear equation solving** isolates the variable; **simultaneous equations** find the **intersection of lines**
- **Real-world linear models** use $y = mx + c$ to describe practical situations; **function modeling** connects algebra to the real world

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've mastered the straight line! Gradients, intercepts, parallel lines, perpendicular lines, real-world models — that's a lot of ground covered, and you've walked every metre of it (with a gradient you can now calculate). Next up: quadratic functions. Things are about to get curvy!
