---
title: Algebra Foundations
description: Essential algebraic building blocks including variables, expressions, equations, number systems, and factoring techniques for the IB Mathematics Functions course
generated_by: claude skill chapter-content-generator
date: 2026-04-03 20:49:14
version: 0.07
---

# Algebra Foundations

!!! mascot-welcome "Rick Says Welcome!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rick waving welcome">
    Welcome to the very first chapter! Before we dive into the world of functions, we need to make sure our algebra toolkit is sharp and ready. Think of this chapter as packing your backpack before a big hike — every tool you pick up here, you'll use on the trail ahead. Every input has its output — and your input today is showing up ready to learn. Let's map this out!

## Summary

This chapter establishes the essential algebraic building blocks needed throughout the course. Students will learn about variables, constants, coefficients, and how they combine into expressions, equations, and inequalities. The chapter covers number systems from integers to irrational numbers, and develops core manipulation skills including expanding brackets, collecting like terms, and factoring techniques such as difference of squares and perfect square trinomials. These algebraic foundations are prerequisites for every subsequent chapter.

## Concepts Covered

This chapter covers the following 22 concepts from the learning graph:

1. Coefficient
2. Variable
3. Constant
4. Number Systems
5. Real Number Line
6. Integers
7. Rational Numbers
8. Irrational Numbers
9. Parameter
10. Expression
11. Equation
12. Inequality
13. Solution Set
14. Substitution Method
15. Elimination Method
16. Expanding Brackets
17. Collecting Like Terms
18. Common Factor
19. Algebraic Manipulation
20. Difference of Squares
21. Perfect Square Trinomial
22. Sum and Difference Cubes

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

## The Building Blocks: Variables, Constants, and Coefficients

Every piece of algebra is built from just a few types of ingredients. Before we combine them into anything fancy, let's make sure we know exactly what each one is.

A **variable** is a symbol — usually a letter like $x$, $y$, or $t$ — that represents a quantity whose value can change. When you see $x$ in a mathematical statement, it's a placeholder waiting for a number to step in. Variables are what make algebra powerful: they let us write rules that work for infinitely many values, not just one.

A **constant** is a fixed value that does not change. The number $5$, the fraction $\frac{3}{4}$, and the famous $\pi \approx 3.14159$ are all constants. Constants are the anchors in any mathematical phrase — no matter what the variables do, constants stay put.

A **coefficient** is a number that multiplies a variable. In the term $7x$, the coefficient is $7$. In $-3y^2$, the coefficient is $-3$. If you see a variable standing alone, like $x$, its coefficient is $1$ (because $x = 1 \cdot x$). Coefficients tell you *how much* of a variable you have.

A **parameter** is a special kind of constant that stays fixed within a particular problem but can take different values in different contexts. For example, in $y = mx + c$, the letters $m$ and $c$ are parameters — they are constant for any single line, but they change when you describe a different line. Think of parameters as "adjustable constants."

The following table summarises these four building blocks:

| Term | Definition | Example in $3x^2 + 5x - 7$ |
|------|-----------|----------------------------|
| Variable | A symbol representing a changeable quantity | $x$ |
| Constant | A fixed numerical value | $-7$ |
| Coefficient | The number multiplying a variable | $3$ (on $x^2$), $5$ (on $x$) |
| Parameter | A constant that can vary across contexts | $m$ and $c$ in $y = mx + c$ |

## Expressions

An **expression** is a mathematical phrase built by combining variables, constants, and coefficients using operations like addition, subtraction, multiplication, and division. Expressions do not contain an equals sign — that would make them equations (we'll get there shortly).

Here are some examples:

- $4x + 9$ — two terms, first-degree in $x$
- $x^2 - 3x + 2$ — three terms, second-degree in $x$
- $\frac{2a + b}{5}$ — a fraction involving variables

Expressions can be evaluated by substituting specific values for the variables. For instance, if $x = 3$, then $4x + 9 = 4(3) + 9 = 21$.

!!! mascot-thinking "Rick's Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rick is thinking">
    Here's a way to remember this: an **expression** is like a phrase (no verb). "Three more than twice a number" is an expression. But add an equals sign and you get a full sentence — "Three more than twice a number *equals* fifteen." That's called an **equation**, and we'll define it properly in the next section.

## Number Systems

Not all numbers are created equal — they form a family tree, with each branch building on the one before it. Understanding these **number systems** helps you know what kinds of answers to expect when working through problems.

### Integers

The **integers** are the set of whole numbers and their negatives:

$$\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ...\}$$

Integers include zero and extend infinitely in both the positive and negative directions. They are the numbers you use for counting, measuring debt, or tracking temperature changes.

### Rational Numbers

A **rational number** is any number that can be written as a fraction $\frac{p}{q}$ where $p$ and $q$ are integers and $q \neq 0$. This includes:

- All integers (since $5 = \frac{5}{1}$)
- Terminating decimals like $0.75 = \frac{3}{4}$
- Repeating decimals like $0.\overline{3} = \frac{1}{3}$

### Irrational Numbers

An **irrational number** cannot be expressed as a fraction of two integers. Its decimal expansion goes on forever without repeating. Famous examples include:

- $\sqrt{2} \approx 1.41421356...$
- $\pi \approx 3.14159265...$
- $e \approx 2.71828182...$

### The Real Number Line

Together, the rational and irrational numbers form the **real numbers**, denoted $\mathbb{R}$. Every real number has a unique position on the **real number line** — a continuous line stretching from $-\infty$ to $+\infty$ with zero at the centre.

The number system hierarchy looks like this:

$$\mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

This means every integer is rational, and every rational number is real, but not every real number is rational.

#### Diagram: Number System Hierarchy
<iframe src="../../sims/number-system-hierarchy/main.html" width="100%" height="512" scrolling="no"></iframe>

<details markdown="1">
<summary>Number System Hierarchy</summary>
Type: diagram
**sim-id:** number-system-hierarchy<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Visualise the nested relationship between integers, rational numbers, irrational numbers, and real numbers as concentric regions on a number line.

Learning Objective: Students will classify numbers into the correct number system (Remember L1 — identify, classify).

Visual elements:

- A horizontal real number line from -5 to 5 with tick marks at each integer
- Concentric colored regions (nested sets): Integers (innermost, blue), Rationals (middle, green), Reals (outermost, orange)
- Plotted example numbers: $-3$, $0$, $2$ (integers), $\frac{1}{2}$, $-0.75$, $1.\overline{3}$ (rationals), $\sqrt{2}$, $\pi$, $-\sqrt{5}$ (irrationals)
- Each number displayed as a draggable dot with a label

Interactive controls:

- Dropdown to select a number type filter (All, Integers, Rationals, Irrationals)
- Hover over any plotted number to see its classification and decimal expansion
- Button: "Add a Number" — enter a value and the sim classifies it and plots it

Color scheme: Integers blue, Rationals (non-integer) green, Irrationals orange, background light gray

Canvas: Responsive, full width, 450px height
</details>

## Equations, Inequalities, and Solution Sets

Now that we have expressions, we can connect them with relational symbols to make statements that are either true or false.

### Equations

An **equation** is a statement that two expressions are equal, written with the $=$ sign. For example:

$$2x + 3 = 11$$

This equation claims that $2x + 3$ and $11$ have the same value. Solving the equation means finding the value(s) of $x$ that make this true. Here, $x = 4$ is the solution because $2(4) + 3 = 11$.

### Inequalities

An **inequality** compares two expressions using $<$, $>$, $\leq$, or $\geq$ instead of $=$. For example:

$$3x - 1 > 8$$

Solving gives $x > 3$, which means any value greater than $3$ satisfies the inequality — not just one number, but infinitely many.

### Solution Sets

The **solution set** is the collection of all values that satisfy an equation or inequality. We write solution sets using set notation or interval notation:

- Equation $x^2 = 9$ → Solution set: $\{-3, 3\}$
- Inequality $x > 3$ → Solution set: $(3, \infty)$
- Equation with no solution $x + 1 = x$ → Solution set: $\emptyset$ (the empty set)

| Statement Type | Symbol | Example | Solution Set |
|---------------|--------|---------|-------------|
| Equation | $=$ | $2x = 10$ | $\{5\}$ |
| Strict inequality | $>$ or $<$ | $x > 3$ | $(3, \infty)$ |
| Non-strict inequality | $\geq$ or $\leq$ | $x \leq 7$ | $(-\infty, 7]$ |

## Algebraic Manipulation

**Algebraic manipulation** is the art of rewriting expressions and equations into different but equivalent forms. It's the core skill that powers everything in this course. The two most fundamental techniques are expanding brackets and collecting like terms.

### Expanding Brackets

**Expanding brackets** (also called distribution) means multiplying each term inside the brackets by the factor outside. The distributive property states:

$$a(b + c) = ab + ac$$

**Worked Example 1:** Expand $3(2x + 5)$.

$$3(2x + 5) = 3 \cdot 2x + 3 \cdot 5 = 6x + 15$$

When two **binomials** (two-term expressions) are multiplied, expand using the FOIL pattern (First, Outer, Inner, Last):

$$\begin{aligned}
(x + 3)(x + 4) &= x \cdot x + x \cdot 4 + 3 \cdot x + 3 \cdot 4 \\
&= x^2 + 4x + 3x + 12 \\
&= x^2 + 7x + 12
\end{aligned}$$

**Try it yourself:** Expand $(2x - 1)(x + 5)$.

??? note "Click to reveal answer"
    $(2x - 1)(x + 5) = 2x^2 + 10x - x - 5 = 2x^2 + 9x - 5$

### Collecting Like Terms

**Collecting like terms** means combining terms that have the same variable raised to the same power. Only like terms can be added or subtracted.

**Worked Example 2:** Simplify $5x^2 + 3x - 2x^2 + 7 - x + 4$.

Group the like terms:

$$\begin{aligned}
&= (5x^2 - 2x^2) + (3x - x) + (7 + 4) \\
&= 3x^2 + 2x + 11
\end{aligned}$$

**Try it yourself:** Simplify $4a - 3b + 2a + 5b - 7$.

??? note "Click to reveal answer"
    $(4a + 2a) + (-3b + 5b) + (-7) = 6a + 2b - 7$

!!! mascot-tip "Rick's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    When collecting like terms, I like to underline or circle each group of like terms in a different colour before combining. It's like sorting laundry — socks with socks, shirts with shirts. Except way more fun. Okay, maybe not *way* more fun, but definitely more useful.

## Factoring Techniques

Factoring is the reverse of expanding — you take an expression and rewrite it as a product of simpler factors. Factoring is one of the most important skills in algebra because it lets you solve equations, simplify expressions, and reveal hidden structure.

### Common Factor

The simplest factoring technique is pulling out a **common factor** — a term that divides evenly into every part of the expression.

**Worked Example 3:** Factor $6x^2 + 9x$.

Both terms share the factor $3x$:

$$6x^2 + 9x = 3x(2x + 3)$$

Always look for a common factor first — it makes every other technique easier.

**Try it yourself:** Factor $12a^3 - 8a^2 + 4a$.

??? note "Click to reveal answer"
    The common factor is $4a$: $12a^3 - 8a^2 + 4a = 4a(3a^2 - 2a + 1)$

### Difference of Squares

The **difference of squares** pattern recognises that:

$$a^2 - b^2 = (a + b)(a - b)$$

This works because the middle terms cancel when you expand: $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$.

**Worked Example 4:** Factor $x^2 - 25$.

Recognise that $x^2 = (x)^2$ and $25 = (5)^2$:

$$x^2 - 25 = (x + 5)(x - 5)$$

**Worked Example 5:** Factor $4y^2 - 9$.

Here $4y^2 = (2y)^2$ and $9 = (3)^2$:

$$4y^2 - 9 = (2y + 3)(2y - 3)$$

!!! mascot-warning "Rick's Common Mistake Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rick warns you">
    The *sum* of two squares $a^2 + b^2$ does **not** factor over the real numbers. Don't try to write $x^2 + 9 = (x + 3)(x - 3)$ — that gives $x^2 - 9$, not $x^2 + 9$! The difference of squares only works with a minus sign in the middle.

### Perfect Square Trinomial

A **trinomial** is a three-term expression. A **perfect square trinomial** is a special trinomial that factors into the square of a binomial:

$$a^2 + 2ab + b^2 = (a + b)^2$$

$$a^2 - 2ab + b^2 = (a - b)^2$$

The key is spotting the pattern: the first and last terms are perfect squares, and the middle term is exactly $2ab$.

**Worked Example 6:** Factor $x^2 + 10x + 25$.

Check: $x^2 = (x)^2$ ✓, $25 = (5)^2$ ✓, $10x = 2(x)(5)$ ✓

$$x^2 + 10x + 25 = (x + 5)^2$$

**Try it yourself:** Factor $9y^2 - 12y + 4$.

??? note "Click to reveal answer"
    $9y^2 = (3y)^2$, $4 = (2)^2$, $12y = 2(3y)(2)$. So $9y^2 - 12y + 4 = (3y - 2)^2$.

### Sum and Difference of Cubes

For cubic expressions, two special patterns exist:

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

A helpful mnemonic: **SOAP** — Same sign, Opposite sign, Always Positive.

- The first bracket has the **Same** sign as the original expression
- The second bracket starts with the **Opposite** sign on the $ab$ term
- The last term ($b^2$) is **Always Positive**

**Worked Example 7:** Factor $x^3 - 8$.

Recognise $8 = 2^3$, so this is a difference of cubes:

$$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$$

**Try it yourself:** Factor $27y^3 + 1$.

??? note "Click to reveal answer"
    $27y^3 = (3y)^3$ and $1 = (1)^3$. Using the sum of cubes: $27y^3 + 1 = (3y + 1)(9y^2 - 3y + 1)$.

#### Diagram: Factoring Decision Flowchart
<iframe src="../../sims/factoring-decision-flowchart/main.html" width="100%" height="532" scrolling="no"></iframe>

<details markdown="1">
<summary>Factoring Decision Flowchart</summary>
Type: workflow
**sim-id:** factoring-decision-flowchart<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Guide students through choosing the correct factoring technique for any given expression.

Learning Objective: Students will select and apply the appropriate factoring strategy for a given polynomial (Apply L3 — execute, implement).

Instructional Rationale: A decision tree helps students internalise the factoring selection process by making implicit expert reasoning explicit and visual.

Flowchart steps:

1. Start: "Given expression to factor"
2. Decision: "Is there a common factor?" → Yes: "Factor it out first" then loop back → No: Continue
3. Decision: "How many terms?"
   - 2 terms → Decision: "Is it $a^2 - b^2$?" → Yes: "Difference of Squares" / No → Decision: "Is it $a^3 \pm b^3$?" → Yes: "Sum/Difference of Cubes" / No: "Cannot factor with these techniques"
   - 3 terms → Decision: "Is it a perfect square trinomial?" → Yes: "$(a \pm b)^2$" / No: "Try other methods (Chapter 5)"
   - 4+ terms → "Try grouping (advanced)"

Interactive features:

- Hover over each decision node to see examples
- Click any technique box to see a worked example appear in a side panel
- "Practice" button generates a random expression and highlights the correct path

Color scheme: Decision diamonds in gold, technique boxes in green, start/end in blue

Canvas: Responsive, full width, 500px height
</details>

## Solving Systems with Substitution and Elimination

When you have two equations with two unknowns, you need a strategy to find values that satisfy both simultaneously. The two main methods are **substitution** and **elimination**.

### Substitution Method

The **substitution method** works by solving one equation for one variable, then substituting that expression into the other equation.

**Worked Example 8:** Solve the system:

$$\begin{cases} y = 2x + 1 \\ 3x + y = 11 \end{cases}$$

Since the first equation already gives us $y$ in terms of $x$, substitute into the second:

$$\begin{aligned}
3x + (2x + 1) &= 11 \\
5x + 1 &= 11 \\
5x &= 10 \\
x &= 2
\end{aligned}$$

Now substitute back: $y = 2(2) + 1 = 5$.

The solution is $x = 2$, $y = 5$.

### Elimination Method

The **elimination method** works by adding or subtracting equations to eliminate one variable.

**Worked Example 9:** Solve the system:

$$\begin{cases} 2x + 3y = 12 \\ 4x - 3y = 6 \end{cases}$$

The $y$-terms have opposite signs with the same coefficient, so add the equations:

$$\begin{aligned}
(2x + 3y) + (4x - 3y) &= 12 + 6 \\
6x &= 18 \\
x &= 3
\end{aligned}$$

Substitute back into the first equation: $2(3) + 3y = 12$, so $3y = 6$, giving $y = 2$.

The solution is $x = 3$, $y = 2$.

**Try it yourself:** Solve using either method:

$$\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases}$$

??? note "Click to reveal answer"
    **Using substitution:** From equation 1, $x = 7 - 2y$. Substitute into equation 2: $3(7 - 2y) - y = 7$, so $21 - 6y - y = 7$, giving $-7y = -14$ and $y = 2$. Then $x = 7 - 2(2) = 3$. Solution: $x = 3$, $y = 2$.

#### Diagram: Expression Builder MicroSim
<iframe src="../../sims/expression-builder/main.html" width="100%" height="532" scrolling="no"></iframe>

<details markdown="1">
<summary>Expression Builder MicroSim</summary>
Type: microsim
**sim-id:** expression-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let students build algebraic expressions from components and see them simplified in real time.

Learning Objective: Students will construct and simplify algebraic expressions by combining variables, constants, and coefficients (Apply L3 — execute, practice).

Instructional Rationale: Hands-on construction of expressions builds intuition for how terms combine. Immediate feedback on simplification reinforces the collecting-like-terms skill without rote memorization.

Visual elements:

- Top area: A "workspace" displaying the current expression being built
- Middle area: Draggable term tiles showing variables ($x$, $y$, $x^2$), constants ($1$ through $9$, $-1$ through $-9$), and operation tiles ($+$, $-$)
- Bottom area: The simplified result, updated live as terms are added

Interactive controls:

- Drag and drop tiles into the workspace to build an expression
- Button: "Simplify" — collects like terms and shows step-by-step work
- Button: "Clear" — resets the workspace
- Slider: Coefficient multiplier (1 to 5) — changes the coefficient on the next tile placed
- Dropdown: Challenge mode — presents a target simplified expression and asks the student to build an expression that simplifies to it

Data Visibility Requirements:

- Stage 1: Show the raw expression as tiles are placed (e.g., $3x + 2 + 5x - 1$)
- Stage 2: Show grouping by like terms with colour highlighting ($3x + 5x$ in blue, $2 + (-1)$ in green)
- Stage 3: Show simplified result ($8x + 1$)

Default: Workspace starts empty. Challenge mode off.

Canvas: Responsive, full width, 500px height
</details>

## Key Takeaways

This chapter covered the fundamental algebraic tools you'll use throughout your study of functions:

- **Variables, constants, coefficients, and parameters** are the basic ingredients of all algebraic expressions
- The **number systems** — integers, rationals, irrationals — nest inside the real numbers, which live on the real number line
- **Equations** use $=$, **inequalities** use $<, >, \leq, \geq$, and both have **solution sets**
- **Expanding brackets** uses the distributive property; **collecting like terms** simplifies by combining matching terms
- **Factoring** reverses expansion: look for a common factor first, then check for difference of squares, perfect square trinomials, or sum/difference of cubes
- **Substitution** and **elimination** are two systematic methods for solving systems of equations

!!! mascot-celebration "Nice Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rick celebrates">
    You've just loaded up your algebra toolkit with everything you need for the chapters ahead. Variables? Check. Factoring? Check. Solving systems? Double check. You're basically a math detective now — ready to crack the case of the mysterious function. Onward to Chapter 2!
