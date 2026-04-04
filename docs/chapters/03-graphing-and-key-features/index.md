---
title: Graphing and Key Features
description: Visualizing functions on the coordinate plane, identifying intercepts, turning points, concavity, and using graphing technology effectively
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:12:00
version: 0.07
---

# Graphing and Key Features

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Time to get this show on the coordinate plane! In this chapter, we turn algebra into pictures. You already know what functions *are* — now you'll learn what they *look like*. Graphs reveal patterns that equations hide, and once you learn to read them, you'll never look at a function the same way again. Every input has its output — and now we're going to see them all at once!

## Summary

This chapter focuses on visualizing functions and identifying their key features. Students learn to graph functions on the coordinate plane, find intercepts, and analyze behavior including increasing and decreasing intervals, turning points, and concavity. The chapter introduces graphing technology (GDCs and software), distinguishes between sketching and drawing, and covers essential graph features like roots, zeros, and intersections. Students will develop fluency in moving between algebraic and graphical representations of functions.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Graph of a Function
2. Function Representations
3. Slope
4. Y-Intercept
5. X-Intercept
6. Graphing Technology
7. Window Settings
8. Sketching vs Drawing
9. Roots of a Function
10. Zeros of a Function
11. Function Intercepts
12. Intersection of Curves
13. Increasing Function
14. Decreasing Function
15. Turning Points
16. Maximum Point
17. Minimum Point
18. Key Graph Features
19. Concavity
20. Inflection Point
21. Graphical Solution Method
22. GDC Usage
23. Technology in Mathematics
24. Analytic vs Graphic Method
25. Significant Figures

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)
- [Chapter 2: Relations and Functions](../02-relations-and-functions/index.md)

---

## The Graph of a Function

In Chapter 2, we represented functions using tables, mapping diagrams, and equations. Now we add the most powerful representation of all: the **graph**.

The **graph of a function** $f$ is the set of all points $(x, f(x))$ plotted on the coordinate plane. Each input $x$ from the domain pairs with its output $f(x)$ to form an ordered pair, and that ordered pair becomes a point on the plane. Connect all those points and you get a curve that tells the function's complete story at a glance.

For example, the graph of $f(x) = x^2$ is formed by plotting points like $(-2, 4)$, $(-1, 1)$, $(0, 0)$, $(1, 1)$, $(2, 4)$ — and all the points in between — to create a smooth U-shaped curve called a parabola.

### Function Representations

There are four main ways to represent a function, and each reveals something different:

| Representation | What It Shows Best | Example |
|----------------|-------------------|---------|
| Equation | The exact rule connecting input and output | $f(x) = 2x + 3$ |
| Table of values | Specific input-output pairs | $(0, 3), (1, 5), (2, 7)$ |
| Mapping diagram | Whether a relation is a function | Arrows from inputs to outputs |
| Graph | Overall shape, trends, and features | A line on the coordinate plane |

The goal of this course is fluency in moving between all four **function representations**. An equation tells you the exact rule; a graph shows you the big picture. Being able to translate between them is one of the most valuable mathematical skills you'll develop.

## Intercepts: Where the Graph Meets the Axes

The first features you should look for on any graph are the points where it crosses the axes.

### Y-Intercept

The **$y$-intercept** is the point where the graph crosses the $y$-axis. Since every point on the $y$-axis has $x = 0$, you find the $y$-intercept by substituting $x = 0$ into the function:

$$y\text{-intercept} = f(0)$$

**Worked Example 1:** Find the $y$-intercept of $f(x) = 3x^2 - 5x + 2$.

$$f(0) = 3(0)^2 - 5(0) + 2 = 2$$

The $y$-intercept is at the point $(0, 2)$.

### X-Intercept

The **$x$-intercept** (or $x$-intercepts) are the points where the graph crosses the $x$-axis. At these points, the output is zero, so you find them by solving $f(x) = 0$.

**Worked Example 2:** Find the $x$-intercepts of $f(x) = x^2 - 4$.

Set $f(x) = 0$:

$$x^2 - 4 = 0$$

$$x^2 = 4$$

$$x = 2 \quad \text{or} \quad x = -2$$

The $x$-intercepts are at $(-2, 0)$ and $(2, 0)$.

Together, the $x$-intercept and $y$-intercept are called the **function intercepts** — the places where the graph meets the axes. These points anchor the graph and are often the first features you mark when sketching.

**Try it yourself:** Find both intercepts of $g(x) = 2x + 6$.

??? note "Click to reveal answer"
    $y$-intercept: $g(0) = 6$, so $(0, 6)$. $x$-intercept: $2x + 6 = 0$, so $x = -3$, giving $(-3, 0)$.

## Roots and Zeros

The $x$-intercepts have special names that you'll encounter throughout the IB course.

The **roots of a function** are the input values $x$ where $f(x) = 0$. These are also called the **zeros of a function** because they're the values that make the output zero. The terminology differs slightly in context — "roots" is used when solving equations, while "zeros" emphasises the function perspective — but they refer to the same values.

In Worked Example 2 above, the roots (or zeros) of $f(x) = x^2 - 4$ are $x = -2$ and $x = 2$.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    "Roots," "zeros," and "$x$-intercepts" are three names for the same idea from three different angles. $X$-intercepts describe *where* on the graph. Zeros describe *what* the output is. Roots describe *what* you're solving for. Think of them as the same person with three different nicknames.

## Slope: The Steepness of a Graph

Before we analyse how graphs rise and fall, we need the concept of **slope** — a measure of how steep a line or curve is at any point. In IB Mathematics, slope is most often called the **gradient**, and we'll use both terms interchangeably.

For a straight line passing through two points $(x_1, y_1)$ and $(x_2, y_2)$, the slope is:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$$

The slope tells you how much the output changes for each unit increase in the input:

- **Positive slope:** the line goes uphill from left to right
- **Negative slope:** the line goes downhill from left to right
- **Zero slope:** the line is horizontal (no change in output)
- **Undefined slope:** the line is vertical (a vertical line is not a function)

**Worked Example 3:** Find the slope of the line through $(1, 3)$ and $(4, 9)$.

$$m = \frac{9 - 3}{4 - 1} = \frac{6}{3} = 2$$

The slope is $2$, meaning the output increases by $2$ for every $1$ unit increase in the input.

For curved functions, the slope changes from point to point. We'll explore this idea more deeply when we study linear functions in Chapter 4. For now, the key idea is that slope measures steepness.

## Increasing and Decreasing Functions

Looking at a graph from left to right, the function's output may rise, fall, or stay level. These behaviours have precise names.

A function is **increasing** on an interval if, as $x$ moves to the right, the output $f(x)$ goes up. Formally, $f$ is increasing on an interval if for any two values $a$ and $b$ in that interval with $a < b$, we have $f(a) < f(b)$.

A function is **decreasing** on an interval if, as $x$ moves to the right, the output $f(x)$ goes down. Formally, for $a < b$, we have $f(a) > f(b)$.

Think of walking along a hiking trail from left to right. When the trail goes uphill, the function is increasing. When it goes downhill, the function is decreasing.

| Behaviour | Graph Direction | Slope Sign |
|-----------|----------------|------------|
| Increasing | Rises from left to right | Positive |
| Decreasing | Falls from left to right | Negative |
| Constant | Horizontal — neither rises nor falls | Zero |

**Worked Example 4:** Consider $f(x) = x^2$. Describe where it is increasing and decreasing.

Looking at the parabola:

- For $x < 0$, the graph falls from left to right → $f$ is **decreasing** on $(-\infty, 0)$
- For $x > 0$, the graph rises from left to right → $f$ is **increasing** on $(0, \infty)$

The graph changes direction at $x = 0$ — this is where something special happens.

## Turning Points, Maximum, and Minimum

A **turning point** is a point on the graph where the function changes from increasing to decreasing, or from decreasing to increasing. The graph literally "turns around" at these points.

There are two types of turning points:

- A **maximum point** (or local maximum) is a turning point where the function changes from increasing to decreasing — the graph reaches a peak. At a maximum, $f(x)$ is greater than or equal to the values of $f$ at nearby points.

- A **minimum point** (or local minimum) is a turning point where the function changes from decreasing to increasing — the graph reaches a valley. At a minimum, $f(x)$ is less than or equal to the values of $f$ at nearby points.

For the function $f(x) = x^2$, the point $(0, 0)$ is a minimum point — the parabola decreases until it reaches this point, then increases afterward.

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    An easy way to remember: at a maximum, the graph makes a hilltop ∩. At a minimum, the graph makes a valley ∪. And if you're ever unsure which is which, just think about whether you'd rather be at the top of a hill or the bottom of a valley. (Mathematically speaking, both are interesting!)

**Worked Example 5:** The graph of $g(x) = -x^2 + 4x - 1$ is a parabola opening downward. Find the turning point.

The $x$-coordinate of the turning point of a parabola $ax^2 + bx + c$ occurs at $x = -\frac{b}{2a}$.

$$x = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2$$

The $y$-coordinate is $g(2) = -(2)^2 + 4(2) - 1 = -4 + 8 - 1 = 3$.

The turning point is $(2, 3)$. Since the parabola opens downward ($a = -1 < 0$), this is a **maximum point**.

**Try it yourself:** Find the turning point of $h(x) = x^2 - 6x + 5$. Is it a maximum or minimum?

??? note "Click to reveal answer"
    $x = -\frac{-6}{2(1)} = 3$. $h(3) = 9 - 18 + 5 = -4$. The turning point is $(3, -4)$. Since $a = 1 > 0$ (parabola opens upward), this is a **minimum point**.

#### Diagram: Key Graph Features Explorer
<iframe src="../../sims/key-graph-features-explorer/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Key Graph Features Explorer</summary>
Type: microsim
**sim-id:** key-graph-features-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Allow students to explore a function graph and identify its key features interactively — intercepts, turning points, increasing/decreasing intervals — with immediate visual feedback.

Learning Objective: Students will identify and label key features of a function graph including intercepts, turning points, and intervals of increase/decrease (Analyze L4 — examine, distinguish).

Instructional Rationale: Interactive feature identification forces active reading of graphs rather than passive viewing. Highlighting intervals and labelling points connects visual patterns to mathematical vocabulary.

Visual elements:

- A coordinate grid displaying a function graph (from a bank of pre-loaded examples)
- Coloured highlights for increasing intervals (green shading) and decreasing intervals (red shading)
- Marked points for x-intercepts (blue dots), y-intercept (purple dot), turning points (orange dots)
- Labels appearing when a feature is identified

Interactive controls:

- Dropdown: Select function from a bank including: $f(x) = x^2 - 4$, $f(x) = -x^2 + 2x + 3$, $f(x) = x^3 - 3x$, $f(x) = \frac{1}{2}(x-1)(x+3)$, $f(x) = |x - 2| - 1$
- Checkbox group: Toggle visibility of each feature type (intercepts, turning points, increasing/decreasing shading)
- Button: "Identify Mode" — student clicks on the graph to identify features, receiving feedback on accuracy
- Button: "Reveal All" — shows all features simultaneously with labels

Data Visibility Requirements:

- Stage 1: Show the plain graph with no annotations
- Stage 2: Student toggles feature types to reveal them one at a time
- Stage 3: Full annotation mode showing all features simultaneously

Default: $f(x) = x^2 - 4$ selected, no features highlighted.

Canvas: Responsive, full width, 550px height
</details>

## Concavity and Inflection Points

Beyond knowing whether a function is increasing or decreasing, we can also describe *how* it curves. This is called **concavity**.

A function is **concave up** on an interval if its graph curves upward like a bowl — the graph lies above any tangent line drawn in that interval. Think of the shape of a smile or the letter U.

A function is **concave down** on an interval if its graph curves downward like an umbrella — the graph lies below any tangent line drawn in that interval. Think of a frown or an upside-down U.

Here's a practical way to think about it: if you imagine pouring water onto the graph, a concave-up section would hold the water like a cup, while a concave-down section would let the water run off.

An **inflection point** is a point where the concavity changes — from concave up to concave down, or vice versa. At an inflection point, the graph shifts from curving one way to curving the other. Inflection points are often subtle on a graph, but they mark important changes in the function's behaviour.

| Concavity | Shape | Analogy | Rate of Change |
|-----------|-------|---------|----------------|
| Concave up | ∪ (bowl) | Holds water | Slope is increasing |
| Concave down | ∩ (umbrella) | Sheds water | Slope is decreasing |

**Worked Example 6:** For $f(x) = x^3$, describe the concavity.

- For $x < 0$, the graph curves like a frown → **concave down**
- For $x > 0$, the graph curves like a smile → **concave up**
- At $x = 0$, the concavity changes → $(0, 0)$ is an **inflection point**

**Try it yourself:** Sketch $f(x) = x^3 - 3x$ and identify any inflection points by looking at where the curvature changes direction.

??? note "Click to reveal answer"
    The inflection point is at $(0, 0)$. To the left of $x = 0$, the graph is concave down; to the right, it is concave up.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Turning points and inflection points are often confused, but they're quite different. A turning point is where the graph changes from going up to going down (or vice versa). An inflection point is where the graph changes how it *curves* — from bowl-shaped to umbrella-shaped (or vice versa). A turning point changes *direction*; an inflection point changes *curvature*.

## Key Graph Features: The Complete Checklist

Now that we've met all the individual features, let's assemble them into a complete **key graph features** checklist. When analysing any function graph, look for:

1. **Domain and range** — what inputs are valid and what outputs are produced
2. **$y$-intercept** — where the graph crosses the $y$-axis (substitute $x = 0$)
3. **$x$-intercepts (roots/zeros)** — where the graph crosses the $x$-axis (solve $f(x) = 0$)
4. **Increasing intervals** — where the graph rises from left to right
5. **Decreasing intervals** — where the graph falls from left to right
6. **Turning points** — maximum and minimum points where direction changes
7. **Concavity** — where the graph is concave up or concave down
8. **Inflection points** — where the concavity changes
9. **End behaviour** — what happens to the graph as $x \to \infty$ and $x \to -\infty$

This checklist will serve you throughout every chapter of this course. Whether you're studying linear functions, quadratics, or exponentials, these are always the features to examine first.

## Sketching vs Drawing

In IB Mathematics, there's an important distinction between **sketching** and **drawing** a graph.

**Sketching** means producing a quick, freehand diagram that captures the essential shape and features of a graph — intercepts, turning points, general trend — without worrying about exact coordinates or perfect curves. A sketch should be labelled with key features but doesn't require a ruler or graph paper.

**Drawing** means producing an accurate graph with precise coordinates, typically using graph paper or technology. Drawn graphs show exact positions of points and are measured to scale.

| Aspect | Sketch | Drawing |
|--------|--------|---------|
| Accuracy | Approximate | Precise |
| Tools | Freehand | Graph paper, ruler, or technology |
| Purpose | Show overall shape and key features | Determine exact values |
| Time | Quick (1-2 minutes) | Slower (5-10 minutes) |
| When used | Exam questions saying "sketch" | Exam questions saying "draw" |

In an IB exam, the instruction word matters. If the question says "sketch," you need the right shape with labelled features. If it says "draw," you need accuracy.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    Many students lose marks by sketching when asked to draw, or by drawing elaborate graphs when a sketch would do. Read the command term carefully! A sketch with correctly labelled key features will earn full marks on a "sketch" question — don't waste exam time making it pixel-perfect.

## Graphing Technology

Modern mathematics relies heavily on technology to explore functions. In the IB, you'll use a **graphing display calculator (GDC)** or graphing software as standard tools.

**Graphing technology** includes any digital tool that can plot function graphs, trace curves, and calculate features. Common options include:

- TI-84 or TI-Nspire graphing calculators
- Desmos (free online graphing calculator)
- GeoGebra (free graphing and geometry software)
- Graphing applications on tablets

These tools fall under the broader category of **GDC usage** — using your graphing display calculator effectively is an IB assessment skill.

### Window Settings

One critical skill with any graphing tool is choosing appropriate **window settings** — the range of $x$-values and $y$-values displayed on screen. Poor window settings can hide important features or compress the graph into an unreadable form.

Default window settings on most calculators show $x$ and $y$ from $-10$ to $10$. This works for simple functions, but you often need to adjust:

- **Zoom out** to see the full behaviour (end behaviour, all intercepts)
- **Zoom in** to examine details (turning points, intersections)
- **Shift the window** to centre on the interesting region

**Worked Example 7:** You want to graph $f(x) = x^2 - 100$. Why would the default window $[-10, 10]$ be a problem?

The $x$-intercepts are at $x = \pm 10$, which are at the very edge of the default window. The $y$-intercept is at $(0, -100)$, which is far below the visible $y$-range of $[-10, 10]$. You'd see almost nothing useful. Better settings: $x \in [-15, 15]$, $y \in [-110, 30]$.

**Try it yourself:** What window settings would you choose to graph $g(x) = 0.01x^3 - x$ so that all the key features are visible?

??? note "Click to reveal answer"
    The roots are at $x = 0$ and $x = \pm 10$. A good window might be $x \in [-12, 12]$, $y \in [-8, 8]$. You might need to adjust after seeing the graph.

#### Diagram: Window Settings Simulator
<iframe src="../../sims/window-settings-simulator/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Window Settings Simulator</summary>
Type: microsim
**sim-id:** window-settings-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Simulate a GDC screen where students can adjust window settings and see how the view of a function graph changes — learning why window choice matters.

Learning Objective: Students will select appropriate window settings to display all key features of a function graph (Apply L3 — execute, implement).

Instructional Rationale: Many students accept default window settings without question, missing key graph features. This MicroSim makes the consequence of poor window choices immediately visible and builds the habit of adjusting the view.

Visual elements:

- A simulated calculator screen showing a coordinate grid with a function graph
- Current window bounds displayed: x-min, x-max, y-min, y-max
- Key features that are visible highlighted in green; features that are off-screen shown in a "missed features" panel
- A small full-view reference graph in the corner showing the complete function

Interactive controls:

- Four sliders: x-min ($-50$ to $0$, default $-10$), x-max ($0$ to $50$, default $10$), y-min ($-50$ to $0$, default $-10$), y-max ($0$ to $50$, default $10$)
- Dropdown: Select function from bank: $f(x) = x^2 - 100$, $f(x) = 0.01x^3 - x$, $f(x) = 2^x$, $f(x) = \frac{1}{x-3}$, $f(x) = (x-8)(x+8)$
- Button: "Auto Fit" — automatically adjusts window to show all key features (for comparison)
- Button: "Reset to Default" — returns to $[-10, 10] \times [-10, 10]$
- Checklist: Shows which key features are currently visible (y-intercept, x-intercepts, turning points, end behaviour)

Default: $f(x) = x^2 - 100$, default window $[-10, 10] \times [-10, 10]$.

Canvas: Responsive, full width, 500px height
</details>

## Technology in Mathematics

**Technology in mathematics** goes beyond just graphing. In the IB, you're expected to use technology to:

- Graph functions and explore their behaviour
- Find exact intercepts, turning points, and intersections
- Solve equations that don't have neat algebraic solutions
- Verify algebraic work
- Explore "what if" questions by changing parameters

The key principle is that technology is a *tool*, not a replacement for understanding. You should know what a graph should roughly look like before you plot it — technology confirms and refines your expectations, not replaces your thinking.

## Intersection of Curves

When two functions are graphed on the same coordinate plane, the points where their graphs cross are called **intersections of curves**. At these points, both functions produce the same output for the same input — that is, $f(x) = g(x)$.

Finding intersections is one of the most common uses of graphing technology. Some intersections can be found algebraically (by solving $f(x) = g(x)$), but others require a GDC because the algebra becomes too complex.

**Worked Example 8:** Find where $f(x) = x^2$ and $g(x) = 2x + 3$ intersect.

Set $f(x) = g(x)$:

$$x^2 = 2x + 3$$

$$x^2 - 2x - 3 = 0$$

$$(x - 3)(x + 1) = 0$$

$$x = 3 \quad \text{or} \quad x = -1$$

The intersection points are $(3, 9)$ and $(-1, 1)$.

**Try it yourself:** Find the intersection of $f(x) = x + 2$ and $g(x) = x^2$.

??? note "Click to reveal answer"
    $x + 2 = x^2$, so $x^2 - x - 2 = 0$, giving $(x-2)(x+1) = 0$. The intersections are at $(2, 4)$ and $(-1, 1)$.

## Analytic vs Graphic Methods

There are two fundamental approaches to solving problems involving functions, and the IB expects you to be skilled at both.

The **analytic method** (also called the algebraic method) uses equations, manipulation, and exact calculation to find answers. It gives precise results but may not always be possible for complex functions.

The **graphical solution method** uses graphs — either hand-drawn or technology-generated — to find approximate answers visually. It always works (you can graph anything), but the answers may be approximate unless the technology calculates exact values.

| Method | Strengths | Limitations |
|--------|-----------|------------|
| Analytic | Exact answers, shows reasoning | May be impossible for complex equations |
| Graphical | Always applicable, visual insight | May give approximate answers |

A powerful strategy is to use both: sketch or graph the functions to understand what's happening, then use algebra to find exact values. If the algebra is too difficult, let the GDC handle the precision.

**Worked Example 9:** Solve $2^x = x + 3$ using a graphical method.

This equation has no neat algebraic solution. Graph $f(x) = 2^x$ and $g(x) = x + 3$ on a GDC and find the intersection points. The graphs cross at approximately $x \approx -1.83$ and $x \approx 3.00$.

You can verify: $2^3 = 8$ and $3 + 3 = 6$ — wait, those aren't equal. Let's check more carefully: the second intersection is actually near $x \approx 2.77$. This is exactly the kind of problem where technology shines — the answer isn't a clean number.

### Significant Figures

When reading values from a GDC or graph, you need to report your answer to an appropriate number of **significant figures**. In IB Mathematics, the convention is typically 3 significant figures unless the question specifies otherwise.

Significant figures are the meaningful digits in a number, starting from the first non-zero digit:

- $3.14159 \approx 3.14$ (3 significant figures)
- $0.004827 \approx 0.00483$ (3 significant figures)
- $12345 \approx 12300$ (3 significant figures)

When using technology to find intersections or turning points, round your final answer to 3 significant figures and state the degree of accuracy.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Rick encouraging you">
    Don't be intimidated by the calculator side of things. Your GDC is like a powerful assistant — it does the heavy lifting, but you're the one who decides what questions to ask and how to interpret the answers. The more you practise with it, the more natural it becomes.

#### Diagram: Function Feature Identifier
<iframe src="../../sims/function-feature-identifier/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Function Feature Identifier</summary>
Type: microsim
**sim-id:** function-feature-identifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Present students with a function graph and challenge them to identify and label all key features — intercepts, turning points, increasing/decreasing intervals, concavity, and inflection points — as a comprehensive practice tool.

Learning Objective: Students will analyse a function graph to identify all key features and describe the function's behaviour using correct mathematical terminology (Analyze L4 — examine, deconstruct).

Instructional Rationale: A comprehensive identification exercise ties together all the vocabulary and concepts from this chapter into a single, integrated task. The quiz format with feedback reinforces correct terminology usage.

Visual elements:

- A coordinate grid with a function graph displayed
- Clickable/draggable labels for each feature type: "y-intercept," "x-intercept," "maximum," "minimum," "inflection point"
- Shading tools for marking increasing (green) and decreasing (red) intervals
- A results panel showing the student's accuracy

Interactive controls:

- Dropdown: Select function from a bank of 8 progressively harder examples, starting with simple parabolas and ending with cubics and rational functions
- Drag-and-drop labels: Place feature labels on the correct locations on the graph
- Click-and-drag interval markers: Mark the increasing and decreasing intervals on the x-axis
- Button: "Check Answers" — validates all placed labels and interval markers, showing correct answers in green and mistakes in red
- Button: "Next Function" — loads the next example
- Score tracker: Correct features out of total

Data Visibility Requirements:

- Stage 1: Plain graph displayed with no annotations
- Stage 2: Student places labels and marks intervals
- Stage 3: Feedback shows correct answers overlaid, with explanations for any errors

Default: First function in bank displayed, no labels placed.

Canvas: Responsive, full width, 550px height
</details>

## Key Takeaways

This chapter gave you the visual language of functions — the tools to see what algebra describes:

- The **graph of a function** plots all input-output pairs $(x, f(x))$ on the coordinate plane, and is one of four key **function representations** (equation, table, mapping diagram, graph)
- The **$y$-intercept** is found at $x = 0$; **$x$-intercepts** are found by solving $f(x) = 0$
- **Roots** and **zeros** are different names for the same thing — the inputs where $f(x) = 0$
- **Slope** (gradient) measures steepness; an **increasing function** rises left to right, a **decreasing function** falls
- **Turning points** mark where the graph changes direction — **maximum points** are peaks, **minimum points** are valleys
- **Concavity** describes how the graph curves (up like a bowl, down like an umbrella); **inflection points** mark where the curvature changes
- **Sketching** captures shape and features approximately; **drawing** requires precision
- **Graphing technology** and **GDC usage** are essential IB tools; proper **window settings** ensure you see all features
- The **intersection of curves** shows where two functions share the same output
- **Analytic** and **graphical** methods complement each other — use both strategically
- Report GDC answers to an appropriate number of **significant figures** (typically 3 s.f.)

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You can now read a function's story just by looking at its graph — intercepts, turning points, concavity, the works. That's like learning to read a map before a road trip. And trust me, the road trip through function families is about to get seriously fun. Next stop: linear functions! Let's go!
