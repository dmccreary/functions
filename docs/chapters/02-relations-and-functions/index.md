---
title: Relations and Functions
description: Introducing the central concept of the course — functions as mappings from inputs to outputs, along with domain, range, function notation, and the coordinate plane
generated_by: claude skill chapter-content-generator
date: 2026-04-03 21:07:07
version: 0.07
---

# Relations and Functions

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to Chapter 2 — the one where the main character finally shows up! Everything we do in this course revolves around one powerful idea: the **function**. But before we meet functions, we need to understand where they come from. Every input has its output — and by the end of this chapter, you'll know exactly what that means. Let's map this out!

## Summary

This chapter introduces the central concept of the course: the function. Starting with relations and ordered pairs, students build up to understanding functions as mappings that assign exactly one output to each input. The chapter covers domain, range, function notation, and the coordinate plane with Cartesian coordinates. Students also explore foundational function types including constant and identity functions, and learn to describe domains using interval and set builder notation. Concepts of continuity, boundedness, and domain restrictions provide the groundwork for all function families studied later.

## Concepts Covered

This chapter covers the following 27 concepts from the learning graph:

1. Relation
2. Function
3. Domain
4. Range
5. Input Variable
6. Output Variable
7. Function Notation
8. Dependent Variable
9. Independent Variable
10. Mapping Diagram
11. Ordered Pair
12. Coordinate Plane
13. X-Axis
14. Y-Axis
15. Origin
16. Cartesian Coordinates
17. Table of Values
18. Interval Notation
19. Set Builder Notation
20. Continuous Function
21. Discrete Function
22. Constant Function
23. Identity Function
24. Real Numbers
25. Continuity
26. Boundedness
27. Domain Restrictions

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Algebra Foundations](../01-algebra-foundations/index.md)

---

## Relations and Ordered Pairs

Mathematics is full of situations where two quantities are connected. The temperature outside is connected to the time of day. The cost of a pizza depends on its size. Your exam grade is linked to the hours you studied (hopefully). In each case, we're pairing one piece of information with another. This idea of pairing is exactly where our story begins.

An **ordered pair** is a pair of values written in a specific order, like $(3, 7)$ or $(-2, 5)$. The order matters — $(3, 7)$ is *not* the same as $(7, 3)$. The first value is sometimes called the **first component** and the second is the **second component**.

A **relation** is any set of ordered pairs. That's it — any collection of paired values counts as a relation. Here are some examples:

- $\{(1, 2), (3, 4), (5, 6)\}$ — a small, tidy relation
- $\{(1, 3), (1, 5), (2, 4)\}$ — notice that the input $1$ appears twice, paired with different outputs
- $\{(\text{Alice}, 85), (\text{Bob}, 72), (\text{Cara}, 91)\}$ — a relation pairing students with test scores

Relations are everywhere. Any time you can match items from one group with items from another group, you have a relation. But not all relations are created equal — some have a special property that makes them incredibly useful. To see what that property is, we first need a way to *visualise* our ordered pairs.

## The Coordinate Plane

To draw pictures of relations, we need a stage to draw them on. That stage is the **coordinate plane** — also called the Cartesian plane, named after the French mathematician René Descartes.

The coordinate plane is built from two perpendicular number lines. The horizontal line is called the **$x$-axis** and the vertical line is called the **$y$-axis**. The point where they cross is called the **origin**, located at $(0, 0)$.

Together, the two axes divide the plane into four quadrants and give us a grid where every point has a unique address. That address is written as an ordered pair $(x, y)$, called the **Cartesian coordinates** of the point. The first number tells you how far to move horizontally from the origin, and the second tells you how far to move vertically.

| Direction | Positive | Negative |
|-----------|----------|----------|
| Horizontal ($x$-axis) | Right of the origin | Left of the origin |
| Vertical ($y$-axis) | Above the origin | Below the origin |

**Worked Example 1:** Plot the point $(-3, 4)$.

Starting at the origin, move $3$ units to the left (because $-3$ is negative) and then $4$ units up. Mark the point.

**Try it yourself:** Plot the points $(2, -1)$, $(0, 3)$, and $(-4, -2)$ on a coordinate plane.

??? note "Click to reveal answer"
    $(2, -1)$: right 2, down 1. $(0, 3)$: stay at zero horizontally, up 3. $(-4, -2)$: left 4, down 2.

#### Diagram: Coordinate Plane Explorer
<iframe src="../../sims/coordinate-plane-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Coordinate Plane Explorer</summary>
Type: microsim
**sim-id:** coordinate-plane-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Allow students to interactively explore the coordinate plane by clicking to place points and reading their Cartesian coordinates.

Learning Objective: Students will identify and plot points using Cartesian coordinates on the coordinate plane (Apply L3 — execute, practice).

Instructional Rationale: Direct manipulation of points on the plane builds spatial intuition for ordered pairs. Immediate coordinate feedback reinforces the connection between position and numerical address.

Visual elements:

- A coordinate grid with $x$-axis and $y$-axis clearly labelled, extending from $-10$ to $10$ in each direction
- Grid lines at every integer
- The origin marked and labelled $(0, 0)$
- Quadrant labels (I, II, III, IV) displayed in faint text
- Points placed by the student shown as coloured dots with their coordinates displayed

Interactive controls:

- Click anywhere on the grid to place a point — its coordinates appear as a label
- Button: "Clear All" — removes all placed points
- Button: "Quiz Mode" — displays a target coordinate and asks the student to click the correct location; provides feedback (correct/incorrect with distance from target)
- Checkbox: "Show Grid Lines" — toggles grid visibility
- Dropdown: "Grid Range" — select from ±5, ±10, ±20

Default: Grid range ±10, grid lines visible, quiz mode off.

Canvas: Responsive, full width, 500px height
</details>

## From Relations to Functions

Now we come to the big idea. Look at these two relations:

- Relation A: $\{(1, 3), (2, 5), (3, 7)\}$
- Relation B: $\{(1, 3), (1, 5), (2, 7)\}$

In Relation A, every first component (input) appears exactly once — each input is paired with one and only one output. In Relation B, the input $1$ is paired with *both* $3$ and $5$. If you asked "What does Relation B give me when I put in $1$?", you'd get two different answers. That ambiguity is a problem when we want clear, predictable rules.

A **function** is a special kind of relation where every input is paired with exactly one output. No input is left without a partner, and no input gets two different outputs. This "one output per input" rule is the defining property of a function.

Think of a function as a reliable machine: you feed in a value, the machine does its thing, and out comes exactly one result. Feed in the same value again and you always get the same result. No surprises, no contradictions.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Here's how I think about it: a function is like a vending machine. You press button B3 (input), and you get one specific snack (output). If pressing B3 sometimes gave you crisps and sometimes gave you a sandwich, you'd have a pretty unreliable vending machine — and an unreliable relation. Functions are the vending machines that *always* deliver the same snack for the same button.

### Input and Output Variables

When we write a function as a rule or equation, we use variables to represent the input and output. The **input variable** is the value you choose freely — it's the one you "put in." The **output variable** is the result the function gives back.

The input variable is also called the **independent variable** because its value is chosen independently — you decide what goes in. The output variable is called the **dependent variable** because its value *depends on* the input.

| Term | Also Known As | Role | Example |
|------|--------------|------|---------|
| Input variable | Independent variable | Value you choose | $x$ |
| Output variable | Dependent variable | Value the function returns | $y$ |

In the equation $y = 2x + 1$, the variable $x$ is independent (you choose it) and $y$ is dependent (it's determined by $x$). If $x = 3$, then $y = 2(3) + 1 = 7$ — no choice involved in what $y$ turns out to be.

### Domain and Range

Not every input may be valid for a given function, and not every output may be achievable. We need language to describe the sets of allowed inputs and possible outputs.

The **domain** of a function is the set of all valid inputs — every value you're allowed to feed into the machine. The **range** is the set of all outputs the function actually produces.

**Worked Example 2:** A function is defined by $f(x) = x^2$ for $x \in \{-2, -1, 0, 1, 2\}$.

- Domain: $\{-2, -1, 0, 1, 2\}$ — these are the inputs we're allowed to use
- Outputs: $f(-2) = 4$, $f(-1) = 1$, $f(0) = 0$, $f(1) = 1$, $f(2) = 4$
- Range: $\{0, 1, 4\}$ — these are the actual output values produced

Notice that the range has only three elements even though the domain has five. That's because $f(-2) = f(2) = 4$ and $f(-1) = f(1) = 1$ — different inputs can produce the same output. That's perfectly fine for a function. What *isn't* allowed is one input producing different outputs.

**Try it yourself:** A function is defined by $g(x) = 3x - 1$ for $x \in \{0, 1, 2, 3\}$. Find the range.

??? note "Click to reveal answer"
    $g(0) = -1$, $g(1) = 2$, $g(2) = 5$, $g(3) = 8$. The range is $\{-1, 2, 5, 8\}$.

## Function Notation

Instead of always writing "$y$ equals some rule involving $x$," mathematicians use a compact notation. **Function notation** writes $f(x)$ to mean "the output of function $f$ when the input is $x$." The letter $f$ is the name of the function, and the value in the brackets is the input.

$$f(x) = 2x + 1$$

This says: "the function $f$ takes an input $x$ and returns $2x + 1$." To find a specific output, replace $x$ with the input value:

$$f(3) = 2(3) + 1 = 7$$

Function notation is flexible. We're not limited to the letter $f$ or the variable $x$:

- $g(t) = t^2 - 4t$ — a function called $g$ with input $t$
- $v(t) = 9.8t$ — a velocity function with time as input
- $C(n) = 5n + 20$ — a cost function where $n$ is the number of items

The choice of letters often hints at meaning: $t$ for time, $v$ for velocity, $C$ for cost, $n$ for a count.

**Worked Example 3:** Given $h(x) = x^2 - 3x + 2$, evaluate $h(5)$ and $h(-1)$.

$$h(5) = (5)^2 - 3(5) + 2 = 25 - 15 + 2 = 12$$

$$h(-1) = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6$$

**Try it yourself:** Given $p(x) = 4x - x^2$, find $p(0)$, $p(2)$, and $p(4)$.

??? note "Click to reveal answer"
    $p(0) = 0 - 0 = 0$. $p(2) = 8 - 4 = 4$. $p(4) = 16 - 16 = 0$.

## Visualising Functions: Tables, Mappings, and Graphs

Functions can be represented in several ways. Being able to move between these representations is a key skill throughout this course.

### Tables of Values

A **table of values** is exactly what it sounds like — a table listing input-output pairs side by side. Tables are especially useful for spotting patterns and for plotting graphs.

Here is a table for $f(x) = 2x - 3$:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|-----|-----|-----|-----|
| $f(x)$ | $-7$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ |

From the table, we can quickly see that the outputs increase by $2$ every time the input increases by $1$, and that the output is $-3$ when $x = 0$.

### Mapping Diagrams

A **mapping diagram** shows the domain on the left and the range on the right, with arrows connecting each input to its output. This visual format makes it easy to check whether a relation is a function — if any input has two or more arrows leaving it, the relation is *not* a function.

Before we look at the diagram below, here's what to watch for: each element on the left (the input) should have exactly one arrow pointing to the right (the output). Multiple inputs are allowed to share the same output, but a single input must never point to two different outputs.

#### Diagram: Function vs Non-Function Mapping
<iframe src="../../sims/function-vs-non-function-mapping/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Function vs Non-Function Mapping</summary>
Type: diagram
**sim-id:** function-vs-non-function-mapping<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show side-by-side mapping diagrams comparing a relation that IS a function with one that is NOT, making the "one output per input" rule visual and concrete.

Learning Objective: Students will distinguish between relations that are functions and those that are not by examining mapping diagrams (Understand L2 — classify, compare).

Instructional Rationale: Side-by-side comparison with mapping arrows makes the abstract "one output per input" rule tangible. Students can visually trace arrows to verify the function property.

Visual elements:

- Two mapping diagrams displayed side by side, each with an oval on the left (domain) and an oval on the right (range)
- Left diagram (labelled "Function"): Domain {1, 2, 3, 4}, Range {A, B, C}. Arrows: 1→A, 2→B, 3→B, 4→C. Each input has exactly one arrow.
- Right diagram (labelled "Not a Function"): Domain {1, 2, 3}, Range {A, B, C}. Arrows: 1→A, 1→B, 2→C, 3→A. Input 1 has TWO arrows (highlighted in red).
- Labels: "Every input has exactly one arrow" (green) under the function, "Input 1 has two arrows!" (red) under the non-function

Interactive controls:

- Button: "Randomise" — generates a new pair of mapping diagrams (one function, one non-function) with random values
- Button: "Build Your Own" — lets the student draw arrows between inputs and outputs, then checks if the result is a function
- Toggle: "Show Labels" — reveals or hides the explanatory annotations

Color scheme: Function arrows in blue, non-function conflicting arrows in red, domain ovals in light blue, range ovals in light green

Canvas: Responsive, full width, 500px height
</details>

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    Mapping diagrams are your best friend when you need to quickly check if a relation is a function. Just look at the left side: if any element has more than one arrow leaving it, it's not a function. One arrow per input — that's the golden rule.

## Describing Domains and Ranges

So far we've described domains and ranges by listing their elements in curly brackets, like $\{-2, -1, 0, 1, 2\}$. That works well for small, finite sets, but many functions have domains that include all real numbers or large continuous intervals. We need more powerful notation.

### Real Numbers

In Chapter 1, we met the number systems: integers ($\mathbb{Z}$), rational numbers ($\mathbb{Q}$), and irrational numbers. Together, the rational and irrational numbers form the **real numbers**, denoted $\mathbb{R}$. The real numbers fill the entire number line with no gaps — every point on the line corresponds to exactly one real number.

Unless stated otherwise, most functions in this course have domains and ranges that are subsets of the real numbers. When we say "the domain of $f$ is all real numbers," we mean you can plug any real number into $f$ and get a valid output.

### Interval Notation

**Interval notation** uses brackets and parentheses to describe continuous sets of real numbers:

- **Square brackets** $[\ ]$ mean the endpoint *is* included (the inequality is $\leq$ or $\geq$)
- **Round brackets** $(\ )$ mean the endpoint is *not* included (the inequality is $<$ or $>$)
- The symbol $\infty$ (infinity) is never included, so it always gets a round bracket

Here are the main types:

| Interval | Notation | Meaning |
|----------|----------|---------|
| Closed | $[a, b]$ | All real numbers from $a$ to $b$, including both |
| Open | $(a, b)$ | All real numbers between $a$ and $b$, excluding both |
| Half-open | $[a, b)$ or $(a, b]$ | One endpoint included, one excluded |
| Unbounded right | $[a, \infty)$ | All real numbers greater than or equal to $a$ |
| Unbounded left | $(-\infty, b]$ | All real numbers less than or equal to $b$ |
| All reals | $(-\infty, \infty)$ | Every real number |

**Worked Example 4:** Write the domain "$x$ is at least $-3$ but strictly less than $5$" in interval notation.

"At least $-3$" means $x \geq -3$, so the left endpoint is included: use $[$. "Strictly less than $5$" means $x < 5$, so the right endpoint is excluded: use $)$.

$$\text{Domain} = [-3, 5)$$

### Set Builder Notation

**Set builder notation** describes a set by stating a condition that its members must satisfy. It follows the pattern:

$$\{x \mid \text{condition on } x\}$$

The vertical bar $\mid$ is read "such that." For example:

- $\{x \mid x > 0\}$ — the set of all $x$ such that $x$ is greater than $0$
- $\{x \mid x \in \mathbb{R}, x \neq 3\}$ — all real numbers except $3$

Set builder notation is especially useful when the domain has gaps or excluded points that are hard to express with a single interval.

**Worked Example 5:** Express the domain "all real numbers except $0$" in both notations.

- Set builder: $\{x \mid x \in \mathbb{R}, x \neq 0\}$
- Interval: $(-\infty, 0) \cup (0, \infty)$

The symbol $\cup$ means "union" — it joins two separate intervals together.

**Try it yourself:** Write "$x$ is a real number greater than $2$" in both interval and set builder notation.

??? note "Click to reveal answer"
    Interval: $(2, \infty)$. Set builder: $\{x \mid x > 2\}$.

## Domain Restrictions

Some functions cannot accept every real number as input. A **domain restriction** occurs when certain input values would cause the function to produce an undefined result. There are two common situations in this course:

1. **Division by zero:** If the function has $x$ in a denominator, any value that makes the denominator zero must be excluded. For example, $f(x) = \frac{1}{x}$ is undefined at $x = 0$.

2. **Square roots of negatives:** If the function involves $\sqrt{x}$, then $x$ must be non-negative (for real-number outputs). For example, $g(x) = \sqrt{x - 4}$ requires $x \geq 4$.

**Worked Example 6:** Find the domain of $f(x) = \frac{3}{x - 2}$.

The denominator is $x - 2$. Setting it equal to zero: $x - 2 = 0$, so $x = 2$. This value must be excluded.

$$\text{Domain} = \{x \mid x \in \mathbb{R}, x \neq 2\} = (-\infty, 2) \cup (2, \infty)$$

**Worked Example 7:** Find the domain of $g(x) = \sqrt{2x + 6}$.

We need $2x + 6 \geq 0$, so $2x \geq -6$, giving $x \geq -3$.

$$\text{Domain} = [-3, \infty)$$

**Try it yourself:** Find the domain of $h(x) = \frac{5}{\sqrt{x - 1}}$.

??? note "Click to reveal answer"
    We need $x - 1 > 0$ (strictly greater, since $\sqrt{0} = 0$ would put zero in the denominator). So $x > 1$. Domain: $(1, \infty)$.

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    When you have a square root in the denominator, like $\frac{1}{\sqrt{x}}$, you need $x > 0$, not $x \geq 0$. That zero sneaks in and causes division by zero — it's a double threat! Always check what's *under* the root and what's *in* the denominator separately.

#### Diagram: Domain Restriction Finder
<iframe src="../../sims/domain-restriction-finder/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Domain Restriction Finder</summary>
Type: microsim
**sim-id:** domain-restriction-finder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore how domain restrictions arise by entering function rules and seeing which input values are excluded and why.

Learning Objective: Students will determine the domain of a function by identifying values that cause division by zero or negative square root arguments (Apply L3 — solve, calculate).

Instructional Rationale: Interactive exploration of domain restrictions builds procedural fluency. Seeing the excluded values highlighted on a number line connects the algebraic condition to a geometric picture.

Visual elements:

- Top area: Display of the function rule (pre-loaded examples or student-entered)
- Middle area: A number line from $-10$ to $10$ showing the domain, with excluded points marked as open circles in red and valid regions shaded in blue
- Bottom area: Step-by-step explanation of why each restriction exists

Interactive controls:

- Dropdown: Select from preset functions: $\frac{1}{x}$, $\frac{3}{x-2}$, $\sqrt{x}$, $\sqrt{x-4}$, $\frac{1}{\sqrt{x-1}}$, $\frac{x+1}{x^2-9}$
- The number line updates immediately when a new function is selected
- Hover over any red excluded point to see the explanation (e.g., "x = 2 makes the denominator zero")
- Button: "Show Interval Notation" — reveals the domain in interval notation
- Button: "Show Set Builder" — reveals the domain in set builder notation

Data Visibility Requirements:

- Stage 1: Show the function rule with the "dangerous" part highlighted (denominator or radicand)
- Stage 2: Show the equation or inequality that identifies excluded values
- Stage 3: Show the number line with domain shaded and excluded points marked
- Stage 4: Show the domain in both interval and set builder notation

Default: $\frac{1}{x}$ selected, all annotations visible.

Canvas: Responsive, full width, 500px height
</details>

## Types of Functions: Continuous and Discrete

Functions come in different flavours depending on the nature of their domain and how their outputs behave.

A **discrete function** is defined only at isolated, separated input values — typically integers or specific points. For example, the function "number of students in a class" only makes sense for whole-number inputs. You can't have $2.7$ students. When graphed, discrete functions appear as individual dots with gaps between them.

A **continuous function** is one whose graph can be drawn without lifting your pencil from the paper. There are no breaks, jumps, or holes. For a continuous function, every small change in the input produces a correspondingly small change in the output — the graph flows smoothly.

| Property | Discrete Function | Continuous Function |
|----------|------------------|---------------------|
| Domain | Isolated points (often integers) | An interval or union of intervals |
| Graph | Separate dots | Unbroken curve |
| Example | Postage cost by weight class | Temperature over a day |
| Typical notation | $f(n)$ where $n \in \mathbb{Z}$ | $f(x)$ where $x \in \mathbb{R}$ |

**Continuity** is the formal name for this "no breaks" property. We say a function has **continuity** at a point if the function is defined there, the output approaches a definite value as the input gets close, and that value matches the actual output. For now, the pencil test is a reliable intuition: if you can trace the graph through a region without lifting your pencil, the function is continuous there.

## Special Functions: Constant and Identity

Two simple but important functions deserve their own spotlight because they appear everywhere in mathematics.

### The Constant Function

A **constant function** returns the same output no matter what input you give it. It has the form:

$$f(x) = c$$

where $c$ is a fixed real number. For example, $f(x) = 5$ gives the output $5$ for every input: $f(0) = 5$, $f(100) = 5$, $f(-\pi) = 5$.

The graph of a constant function is a horizontal line at height $c$. Its domain is all real numbers $(-\infty, \infty)$, and its range is the single value $\{c\}$.

### The Identity Function

The **identity function** is the function that returns exactly what you give it:

$$f(x) = x$$

Every input passes straight through unchanged: $f(3) = 3$, $f(-7) = -7$, $f(0) = 0$. The name "identity" comes from the idea that the function leaves the input's identity intact.

The graph of the identity function is a straight line through the origin with a gradient of $1$ — it makes a $45°$ angle with the $x$-axis. Its domain and range are both $(-\infty, \infty)$.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    The constant function and the identity function are like the "zero" and "one" of the function world. The constant function ignores its input completely, while the identity function respects it completely. Every other function falls somewhere in between — transforming the input by some rule. Keep these two in your back pocket; they'll come up again when we study transformations and composition.

#### Diagram: Constant and Identity Function Grapher
<iframe src="../../sims/constant-identity-grapher/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Constant and Identity Function Grapher</summary>
Type: microsim
**sim-id:** constant-identity-grapher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students explore the graphs of constant and identity functions by adjusting parameters and observing how the graph changes.

Learning Objective: Students will compare the graphs of constant and identity functions and describe how the parameter $c$ affects the constant function's graph (Understand L2 — compare, describe).

Instructional Rationale: Adjusting the constant $c$ with a slider and seeing the horizontal line move in real time makes the relationship between the algebraic rule and the graph concrete. Overlaying the identity function provides a reference for comparison.

Visual elements:

- A coordinate grid from $-10$ to $10$ in both axes
- The identity function $f(x) = x$ drawn as a dashed blue line (always visible as a reference)
- The constant function $g(x) = c$ drawn as a solid red horizontal line
- Labels showing $f(x) = x$ and $g(x) = c$ with the current value of $c$
- A point on each graph at the current $x$ position showing the output value

Interactive controls:

- Slider: Value of $c$ (from $-8$ to $8$, default $3$, step $0.5$)
- Slider: Trace $x$ — moves a vertical dashed line across the graph, showing the output of both functions at that $x$ value
- Checkbox: "Show Table" — displays a small table of values for both functions at integer $x$ values
- Button: "Reset" — returns $c$ to $3$ and trace to $0$

Default: $c = 3$, trace at $x = 0$, table hidden.

Canvas: Responsive, full width, 500px height
</details>

## Boundedness

A function is **bounded** if its output values stay within some fixed limits — they don't shoot off to infinity in either direction. More precisely:

- A function is **bounded above** if there exists a real number $M$ such that $f(x) \leq M$ for all $x$ in the domain
- A function is **bounded below** if there exists a real number $m$ such that $f(x) \geq m$ for all $x$ in the domain
- A function is **bounded** if it is both bounded above and bounded below

The constant function $f(x) = 5$ is bounded — its outputs never leave $5$. The identity function $f(x) = x$ is *not* bounded, because as $x$ grows larger, so does the output without limit.

**Boundedness** becomes important later when we study how function families behave. Some families (like quadratics with a maximum or minimum) are bounded in one direction, while others (like exponentials) grow without bound.

#### Diagram: Function Property Classifier
<iframe src="../../sims/function-property-classifier/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Function Property Classifier</summary>
Type: microsim
**sim-id:** function-property-classifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Present students with function graphs and ask them to classify each function's properties — continuous vs discrete, bounded vs unbounded, constant vs non-constant.

Learning Objective: Students will classify functions by their properties (continuous/discrete, bounded/unbounded) by examining their graphs (Analyze L4 — classify, distinguish).

Instructional Rationale: A classification quiz using visual graphs forces students to apply definitions to concrete cases, strengthening conceptual understanding beyond rote memorisation.

Visual elements:

- A coordinate grid displaying one function graph at a time
- A panel listing properties to classify: Continuous/Discrete, Bounded Above/Below/Both/Neither, Constant/Identity/Other
- Feedback area showing whether the student's classification is correct

Interactive controls:

- Button: "Next Function" — displays a new function graph from a bank of 10 examples including: $f(x) = 3$ (constant), $f(x) = x$ (identity), $f(x) = x^2$ (bounded below), a discrete set of points, $f(x) = -2$ (constant), a step function, and others
- Radio buttons for each property category
- Button: "Check Answer" — reveals whether the classification is correct with explanation
- Score counter: tracks correct answers out of total attempts

Data Visibility Requirements:

- Stage 1: Show the graph clearly with axes labelled
- Stage 2: Student selects classifications
- Stage 3: Feedback reveals correct classifications with brief justification

Default: First function displayed, no classifications selected.

Canvas: Responsive, full width, 500px height
</details>

## Putting It All Together

Let's consolidate everything with a comprehensive example that uses all the ideas from this chapter.

**Worked Example 8:** A cinema charges $12 per ticket. The function $C(n)$ gives the total cost for $n$ tickets.

**(a)** Write the function rule.

$$C(n) = 12n$$

**(b)** What type of variable is $n$? What about $C$?

$n$ is the independent variable (input) — you choose how many tickets to buy. $C$ is the dependent variable (output) — the cost depends on $n$.

**(c)** State the domain.

You can't buy a negative number of tickets or a fraction of a ticket. And there's presumably some maximum (let's say the cinema has $200$ seats). So:

$$\text{Domain} = \{n \mid n \in \mathbb{Z}, 0 \leq n \leq 200\}$$

This is a discrete function — only whole-number inputs make sense.

**(d)** State the range.

$$\text{Range} = \{0, 12, 24, 36, \ldots, 2400\}$$

Or equivalently, $\{12n \mid n \in \mathbb{Z}, 0 \leq n \leq 200\}$.

**(e)** Is this function bounded?

Yes — bounded below by $0$ and bounded above by $2400$.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Rick encouraging you">
    If that example felt like a lot, don't worry — you just used nearly every concept from this entire chapter in one go! Domain, range, function notation, discrete vs continuous, independent and dependent variables, boundedness. That's a serious toolkit. You're doing great.

## Key Takeaways

This chapter introduced the foundational language of functions that we'll use throughout the rest of the course:

- An **ordered pair** $(x, y)$ pairs two values in a specific order; a **relation** is any set of ordered pairs
- The **coordinate plane** is built from the $x$-axis and $y$-axis meeting at the **origin** $(0, 0)$; every point has unique **Cartesian coordinates**
- A **function** is a relation where every input has exactly one output — the "one output per input" rule
- The **input variable** (independent) is chosen freely; the **output variable** (dependent) is determined by the function
- **Function notation** $f(x)$ names the function and specifies the input; **tables of values** and **mapping diagrams** are alternative representations
- The **domain** is the set of valid inputs; the **range** is the set of actual outputs
- **Interval notation** and **set builder notation** describe domains and ranges precisely
- **Domain restrictions** arise from division by zero and square roots of negatives
- **Discrete functions** are defined at isolated points; **continuous functions** have unbroken graphs
- The **constant function** $f(x) = c$ and the **identity function** $f(x) = x$ are the simplest function types
- A **bounded** function has outputs that stay within fixed limits

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've just met the star of the show — the function! From here, every chapter builds on this idea. Linear functions, quadratics, exponentials, logarithms — they're all specific *types* of functions with their own personalities. But the core concept? One input, one output. You've got that down. Now that's a function worth knowing! Onward to Chapter 3!
