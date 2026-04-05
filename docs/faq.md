# IB Mathematics Functions — Frequently Asked Questions

## Getting Started Questions

### What is this course actually about?

This course is built around one big idea: **the function**, a rule that takes an input and produces exactly one output. Functions are the unifying thread that connects algebra, geometry, modeling, and even the sciences. You will learn to recognize functions in symbolic form (like $f(x) = 2x + 3$), as graphs on the coordinate plane, and as tables of values — and, more importantly, how to move fluently between these representations. The course covers linear, quadratic, polynomial, rational, exponential, logarithmic, and modulus functions, plus transformations and inverses. By the end, you should be able to look at a real-world situation — falling objects, compound interest, population growth — and pick the right kind of function to model it. See [the course description](course-description.md) for the full overview.

### Who is this textbook written for?

This book is written for IB Diploma Programme students, both Standard Level (SL) and Higher Level (HL/AHL). That means you are probably 16 to 18 years old and heading into university-level STEM, economics, or social-science work. We assume you already know basic algebra (solving linear equations, expanding brackets, working with fractions) and a little coordinate geometry (plotting points, reading a graph). Beyond that, we build everything from scratch. Where AHL-only content appears, it is clearly marked. If you are feeling rusty, begin with [chapter 1 on algebra foundations](chapters/01-algebra-foundations/index.md) to warm up.

### Do I need to be good at math to succeed here?

No — you need to be *willing* at math, which is different. The students who thrive in functions are not the ones who were born knowing the quadratic formula; they are the ones who show up, try things, and are not afraid to get a wrong answer on the way to a right one. Every topic in this course is built from smaller ideas you can master one at a time. If you can solve $2x + 3 = 11$, you already have the tools to eventually solve $e^{2x} = 7$. Trust the scaffolding and keep moving forward.

### How should I use this textbook most effectively?

Read actively, not passively. When you hit a worked example, cover the solution and try it yourself first. When a graph appears, ask: what are the intercepts, the turning points, the asymptotes? Work the "Try it yourself" exercises before moving on — these are where understanding actually forms. Use the interactive MicroSims to play with parameters and watch graphs respond in real time. And whenever a new term appears, check [the glossary](glossary.md) so you never bluff past a word you do not fully own.

### What math topics are NOT in this course?

To keep the focus sharp, this textbook does **not** cover calculus (derivatives and integrals), trigonometric functions in depth, probability density functions, statistics, or matrix representations of transformations. Those belong to other IB topics. We concentrate entirely on what functions *are*, how they behave, and how to model the world with them. If you are hoping to learn how to differentiate $x^2$, that is an exciting adventure — just not this one.

### What is a MicroSim and why should I use one?

A MicroSim is a small interactive simulation — usually a graph you can manipulate with sliders, checkboxes, or buttons. Instead of reading "as $a$ increases, the parabola gets narrower," you drag a slider and *watch* it happen. MicroSims turn passive reading into active experimentation, which is how mathematical intuition actually gets built. Most chapters include MicroSims that let you explore transformations, discriminants, asymptotes, and more. Spend a few minutes playing before you read the theory — your brain will thank you.

### What calculator should I use for this course?

You need a graphing display calculator (GDC) approved for IB exams — typically a TI-84, TI-Nspire, or Casio fx-CG50. The GDC is not a crutch; it is a research instrument. You will use it to sketch curves, find intersections, identify turning points, and solve equations that have no closed-form answer (like $e^x = \sin x$). Learning the buttons takes a week; learning to *think* with the calculator takes the whole course. Chapters on [graphing and key features](chapters/03-graphing-and-key-features/index.md) introduce the core skills.

### How are SL and HL topics different in this book?

SL content covers the core: linear, quadratic, exponential, logarithmic, and basic rational functions, plus inverses, composites, and transformations. HL/AHL content extends into polynomial functions of degree $n$, the factor and remainder theorems, sums and products of roots, modulus variants like $y = |f(x)|$, self-inverse analysis, and more complex rational functions. AHL material is flagged in the text. SL students are welcome to peek at AHL sections — curiosity is always rewarded — but you will not be assessed on it.

### Why are there so many ways to write the same equation?

Because each form tells you something different at a glance. Take a quadratic: standard form $f(x) = ax^2 + bx + c$ shows you the y-intercept immediately; factored form $f(x) = a(x - p)(x - q)$ shows you the roots; vertex form $f(x) = a(x - h)^2 + k$ shows you the turning point. Lines are similar — gradient-intercept form $y = mx + c$ makes the slope obvious, while the general form $ax + by + d = 0$ is cleaner for algebraic manipulation. Fluency with all forms means you can always pick the one that matches the question. See [chapter 5](chapters/05-quadratic-functions/index.md).

### How much writing is involved in a functions course?

More than you might expect. Mathematics is a language, and IB exams reward clear communication. You will write definitions, justify steps, state domain restrictions, and explain why a chosen model fits a situation. "Show that" and "justify" questions are common, and they cannot be answered with just a number. Practice writing math the way you practice solving it — neatly, logically, and with every step visible.

### Where do I find definitions when I get stuck on a word?

Head to [the glossary](glossary.md), which contains every key term in the course with a precise definition and, often, a small example. If a term is not in the glossary, it is probably built from terms that are, so look up its parts. Never let an undefined word slide past you — mathematics is built word by word, and a single fuzzy definition can topple a whole chapter of understanding.

### What is Rick the Raccoon doing in my math book?

Rick is your learning mascot — a cheerful, slightly punny raccoon who pops up to welcome you into chapters, warn you about common traps, and celebrate wins. His job is to keep the tone friendly and remind you that confusion is normal and temporary. His catchphrase is "Every input has its output!" which is both a functions joke and a study philosophy: the work you put in comes back out as understanding.

## Core Concepts

### What is a function and how is it different from a relation?

A **relation** is any set of ordered pairs $(x, y)$ — it pairs inputs with outputs with no restrictions. A **function** is a special kind of relation with one extra rule: each input is paired with *exactly one* output. So $\{(1, 2), (1, 3)\}$ is a relation but not a function, because the input $1$ produces two different outputs. Every function is a relation, but not every relation is a function. This one-output-per-input rule is what makes functions predictable and useful for modeling, which is why so much of this course depends on it. **Example:** $f(x) = x^2$ is a function because squaring any real number gives one answer, but $x = y^2$ is not, because $x = 4$ gives both $y = 2$ and $y = -2$. See [chapter 2](chapters/02-relations-and-functions/index.md).

### Why do we use the vertical line test?

The vertical line test is a quick visual way to check whether a graph represents a function. You imagine sweeping a vertical line across the graph; if that line ever touches the graph in more than one point at the same $x$-value, then that $x$ has more than one output, which violates the definition of a function. It works because every vertical line corresponds to a single input. **Example:** A circle like $x^2 + y^2 = 25$ fails the vertical line test because a vertical line through $x = 0$ hits both $(0, 5)$ and $(0, -5)$. A parabola $y = x^2$ passes it. See [chapter 2](chapters/02-relations-and-functions/index.md).

### What are the domain and range of a function?

The **domain** is the set of all allowed inputs (the $x$-values you are permitted to feed the function), and the **range** is the set of all outputs that actually come out (the $y$-values the function can produce). Domain restrictions come from places the function breaks down: you cannot divide by zero, you cannot take the square root of a negative number (in the real numbers), and you cannot take the logarithm of zero or a negative. The range depends on the shape of the function. **Example:** For $f(x) = 1/(x-2)$, the domain is all real numbers except $x = 2$, and the range is all real numbers except $y = 0$.

### What does the discriminant tell me about a quadratic?

The discriminant $\Delta = b^2 - 4ac$ is the quantity under the square root in the quadratic formula, and it acts as a spoiler for the number of real roots of $ax^2 + bx + c = 0$. If $\Delta > 0$, there are two distinct real roots (the parabola crosses the x-axis twice). If $\Delta = 0$, there is one repeated real root (the parabola touches the x-axis exactly at its vertex). If $\Delta < 0$, there are no real roots (the parabola floats entirely above or below the x-axis). You can answer "does this equation have solutions?" without ever solving it. See [chapter 5](chapters/05-quadratic-functions/index.md).

### How do I find the inverse of a function algebraically?

The inverse function $f^{-1}$ undoes what $f$ does. To find it algebraically, start with $y = f(x)$, swap $x$ and $y$, then solve the new equation for $y$. That solution is $f^{-1}(x)$. **Example:** For $f(x) = 3x + 4$, write $y = 3x + 4$, swap to get $x = 3y + 4$, then solve: $y = (x - 4)/3$. So $f^{-1}(x) = (x - 4)/3$. You can verify by checking $f(f^{-1}(x)) = x$. Not every function has an inverse — only one-to-one functions do, which is why the horizontal line test matters. See [chapter 6](chapters/06-inverse-and-composite-functions/index.md).

### What is function composition and how do I compute it?

Composition chains two functions together: $(f \circ g)(x) = f(g(x))$ means "apply $g$ first, then apply $f$ to the result." The output of $g$ becomes the input of $f$. Order matters — $f \circ g$ is usually not the same as $g \circ f$. **Example:** If $f(x) = x^2$ and $g(x) = x + 1$, then $(f \circ g)(x) = f(x+1) = (x+1)^2 = x^2 + 2x + 1$, while $(g \circ f)(x) = g(x^2) = x^2 + 1$. Different functions entirely. See [chapter 6](chapters/06-inverse-and-composite-functions/index.md).

### When should I use vertex form instead of standard form?

Use vertex form $f(x) = a(x - h)^2 + k$ when you care about the turning point of a parabola — its coordinates are right there at $(h, k)$. Use standard form $f(x) = ax^2 + bx + c$ when you care about the y-intercept, which is $c$. Use factored form $f(x) = a(x - p)(x - q)$ when you care about the roots $p$ and $q$. The three forms describe the same parabola from three different angles. Completing the square is the bridge from standard to vertex form. See [chapter 5](chapters/05-quadratic-functions/index.md).

### What is the difference between $\log x$ and $\ln x$?

Both are logarithms, but with different bases. $\log x$ (the **common logarithm**) uses base $10$, so $\log 1000 = 3$ because $10^3 = 1000$. $\ln x$ (the **natural logarithm**) uses base $e \approx 2.718$, so $\ln e = 1$. Common logs show up in science and engineering (pH, decibels, the Richter scale) because we live in a base-10 world. Natural logs appear wherever continuous growth and decay do — compound interest, radioactive decay, population dynamics — because $e$ is the natural base for such processes. See [chapter 8](chapters/08-logarithmic-functions/index.md).

### How do transformations affect the domain and range?

Horizontal transformations (translations, stretches, reflections across the y-axis) change the domain, because they shuffle the allowed $x$-values. Vertical transformations (translations, stretches, reflections across the x-axis) change the range, because they shuffle the $y$-values. **Example:** The function $f(x) = \sqrt{x}$ has domain $x \geq 0$ and range $y \geq 0$. After the transformation $g(x) = \sqrt{x - 3} + 2$, the domain becomes $x \geq 3$ and the range becomes $y \geq 2$. Every transformation moves the function's "home" on the coordinate plane. See [chapter 12](chapters/12-transformations/index.md).

### What is an asymptote, really?

An **asymptote** is a line that a curve approaches but never actually touches as you zoom out toward infinity. Vertical asymptotes appear where a function blows up (typically where a denominator hits zero), horizontal asymptotes describe the long-run behavior as $x \to \pm \infty$, and oblique (slanted) asymptotes appear in certain rational functions when the numerator's degree is exactly one more than the denominator's. Asymptotes are not part of the graph — they are guide rails the graph chases forever. See [chapter 10](chapters/10-rational-functions/index.md).

### Why is $y = 1/x$ called a self-inverse function?

Because if you take its inverse using the usual procedure, you get the same function back. Start with $y = 1/x$, swap variables to get $x = 1/y$, solve for $y$: $y = 1/x$. Same function. Geometrically, the graph of $y = 1/x$ is symmetric about the line $y = x$ — its reflection across that line lands exactly on itself. Self-inverse functions are rare and special, and $1/x$ is the classic example. See [chapter 10](chapters/10-rational-functions/index.md).

### What does it mean for a function to be even or odd?

A function is **even** if $f(-x) = f(x)$ for every $x$ in its domain — its graph is symmetric about the y-axis. A function is **odd** if $f(-x) = -f(x)$ — its graph has rotational symmetry about the origin. Most functions are neither. **Example:** $f(x) = x^2$ is even because $(-x)^2 = x^2$; $f(x) = x^3$ is odd because $(-x)^3 = -x^3$; $f(x) = x^2 + x$ is neither. Recognizing symmetry often saves time on exams because you only have to analyze half the graph. See [chapter 11](chapters/11-function-classifications/index.md).

### What is the identity function and why does it matter?

The **identity function** is $f(x) = x$ — it returns whatever you give it, unchanged. It matters because it is the "do nothing" operation in the world of functions, playing the same role as $0$ in addition or $1$ in multiplication. Composing any function with the identity gives that function back: $(f \circ \text{id})(x) = f(x)$. The identity also shows up as the axis of reflection for inverse functions: $f$ and $f^{-1}$ are mirror images across the line $y = x$.

### How do I tell if a function is one-to-one?

A function is **one-to-one** (or injective) if every output corresponds to exactly one input — no two different $x$-values share the same $y$-value. Visually, you apply the **horizontal line test**: if any horizontal line crosses the graph more than once, the function is not one-to-one. Only one-to-one functions have inverses that are themselves functions. **Example:** $f(x) = x^3$ is one-to-one; $f(x) = x^2$ is not, because $f(2) = f(-2) = 4$. To give $x^2$ an inverse, you restrict its domain to $x \geq 0$.

### What is exponential growth and how do I recognize it?

Exponential growth happens when a quantity is multiplied by the same factor at regular intervals, producing the function $f(x) = a \cdot b^x$ with $b > 1$. The defining feature is that the rate of growth is proportional to the current amount — the bigger it is, the faster it grows. Populations, bank balances with compound interest, and viral spread all show this behavior. **Example:** $f(x) = 100 \cdot 2^x$ doubles every step: $100, 200, 400, 800, \ldots$. Contrast this with linear growth, which adds the same amount each step. See [chapter 7](chapters/07-exponential-functions/index.md).

### What is a polynomial function?

A **polynomial function** is a function of the form $f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$, where the exponents are non-negative integers and the coefficients are real numbers. The **degree** is the highest exponent, and the coefficient in front of that highest term is the **leading coefficient**. Linear and quadratic functions are polynomials of degree $1$ and $2$. Higher-degree polynomials (cubics, quartics, and beyond) appear in the AHL curriculum, where you learn about end behavior, the factor theorem, and counting turning points. See [chapter 9](chapters/09-polynomial-functions/index.md).

### What is the factor theorem?

The **factor theorem** says that $(x - a)$ is a factor of a polynomial $P(x)$ if and only if $P(a) = 0$. In plain language: if plugging a number into a polynomial gives zero, then that number is a root, and the corresponding linear factor divides the polynomial cleanly. This turns the scary job of factoring a cubic or quartic into a search for nice numbers that make the polynomial zero. **Example:** For $P(x) = x^3 - 6x^2 + 11x - 6$, check $P(1) = 1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor. See [chapter 9](chapters/09-polynomial-functions/index.md).

### What is the modulus function and how is it graphed?

The **modulus function**, written $|x|$, returns the non-negative magnitude of $x$. So $|3| = 3$ and $|-3| = 3$. Its graph is a V-shape with its vertex at the origin, made of two line segments with gradients $1$ and $-1$. When you apply it to another function as $y = |f(x)|$, every part of $f$ that lies below the x-axis gets flipped up above it — the rest stays put. Meanwhile $y = f(|x|)$ takes the right half of $f$'s graph and mirrors it across the y-axis. See [chapter 11](chapters/11-function-classifications/index.md).

### How are exponential and logarithmic functions related?

They are inverses of each other. If $y = a^x$, then $x = \log_a y$. Whatever the exponential does, the logarithm undoes, and vice versa. Their graphs are mirror images reflected across the line $y = x$: exponentials shoot upward with a horizontal asymptote on the x-axis, while logarithms grow slowly with a vertical asymptote on the y-axis. This inverse relationship is why logarithms are the right tool for solving equations where the unknown sits in an exponent. See [chapter 8](chapters/08-logarithmic-functions/index.md).

### What are parallel and perpendicular lines in terms of gradient?

Two lines are **parallel** if and only if they have the same gradient: $m_1 = m_2$. They never meet (unless they are the same line). Two lines are **perpendicular** if the product of their gradients is $-1$: $m_1 \times m_2 = -1$, which means each gradient is the negative reciprocal of the other. **Example:** A line with gradient $2$ is perpendicular to a line with gradient $-1/2$. Vertical and horizontal lines are a special case — they are perpendicular to each other even though the formula does not apply directly. See [chapter 4](chapters/04-linear-functions/index.md).

### What is the quadratic formula and when should I use it?

The quadratic formula solves any quadratic equation $ax^2 + bx + c = 0$:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
Use it when factoring is awkward or impossible. Use factoring when the roots are obvious integers. Use completing the square when you need to convert to vertex form. The formula always works; the others are faster when they apply. **Example:** For $2x^2 + 3x - 5 = 0$, plugging in $a = 2$, $b = 3$, $c = -5$ gives $x = (-3 \pm \sqrt{9 + 40})/4 = (-3 \pm 7)/4$, so $x = 1$ or $x = -5/2$.

### What does "completing the square" actually do?

Completing the square rewrites a quadratic from standard form into vertex form by constructing a perfect square trinomial. It reveals the turning point $(h, k)$ directly and is the algebraic trick behind the quadratic formula itself. **Example:** To convert $x^2 + 6x + 5$ to vertex form, take half of $6$ to get $3$, square it to get $9$, then write $x^2 + 6x + 9 - 9 + 5 = (x + 3)^2 - 4$. The vertex is at $(-3, -4)$. See [chapter 5](chapters/05-quadratic-functions/index.md).

### What is a piecewise function?

A **piecewise function** is defined by different rules over different parts of its domain. You pick which rule applies based on the input. This lets you model situations where behavior changes at a threshold, like tax brackets or shipping costs. **Example:**
$$f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ 2x + 1 & \text{if } x \geq 0 \end{cases}$$
For $x = -3$, use the first rule: $f(-3) = 9$. For $x = 2$, use the second: $f(2) = 5$. Graphing piecewise functions means graphing each rule only over its assigned interval.

### What does it mean to model a real-world situation with a function?

Modeling means choosing a function that approximates how one quantity depends on another in the real world. A falling ball's height over time is well-modeled by a quadratic; the amount in a compound-interest account over time is modeled by an exponential; radioactive decay by a decreasing exponential. Modeling is never perfect — the point is to capture the *essential* behavior accurately enough to make useful predictions. You also have to state the domain carefully, because real situations rarely let $x$ be anything at all. See [chapter 13](chapters/13-modeling-and-applications/index.md).

### What are the roots or zeros of a function?

The **roots** (or **zeros**) of a function $f$ are the input values that make $f(x) = 0$ — in other words, the x-intercepts of the graph. Finding roots is one of the most common tasks in all of algebra because it answers questions like "when does the projectile hit the ground?" or "at what price does profit drop to zero?" Different function types call for different root-finding techniques: factoring and the quadratic formula for quadratics, the factor theorem for polynomials, logarithms for exponentials, and graphing technology when everything else fails.

## Technical Detail Questions

### How do I write a domain using interval notation?

Interval notation uses square brackets for included endpoints and round brackets for excluded ones, separated by a comma. A square bracket means "up to and including"; a round bracket means "up to but not including." Infinity always gets a round bracket because you can never include infinity itself. **Example:** The domain $-2 \leq x < 5$ is $[-2, 5)$. The domain "all real numbers greater than $3$" is $(3, \infty)$. To express a domain with a hole — say, all reals except $x = 1$ — use a union: $(-\infty, 1) \cup (1, \infty)$.

### How do I calculate the gradient between two points?

Given two points $(x_1, y_1)$ and $(x_2, y_2)$, the gradient is the change in $y$ divided by the change in $x$:
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$
Order consistently: if you subtract $y_1$ from $y_2$ on top, subtract $x_1$ from $x_2$ on the bottom. **Example:** Between $(2, 3)$ and $(5, 12)$, the gradient is $(12 - 3)/(5 - 2) = 9/3 = 3$. If the denominator comes out zero, the line is vertical and its gradient is undefined. See [chapter 4](chapters/04-linear-functions/index.md).

### What is the formula for the axis of symmetry of a parabola?

For a quadratic in standard form $f(x) = ax^2 + bx + c$, the axis of symmetry is the vertical line
$$x = -\frac{b}{2a}$$
This line passes through the vertex and cuts the parabola into two mirror-image halves. The x-coordinate of the vertex is exactly $-b/(2a)$, and you find the y-coordinate by plugging that value back into $f$. **Example:** For $f(x) = 2x^2 - 8x + 1$, the axis of symmetry is $x = -(-8)/(2 \cdot 2) = 2$, and the vertex is $(2, f(2)) = (2, -7)$.

### How do I change the base of a logarithm?

Use the **change of base rule**:
$$\log_a x = \frac{\log_b x}{\log_b a}$$
where $b$ is any convenient base — usually $10$ or $e$, because those are what your calculator has. **Example:** To compute $\log_2 7$, use $\log_2 7 = \ln 7 / \ln 2 \approx 1.9459/0.6931 \approx 2.807$. Change of base is essential because calculators do not have buttons for every possible base, but they can still evaluate any logarithm you need. See [chapter 8](chapters/08-logarithmic-functions/index.md).

### What are the logarithm laws?

The three fundamental laws, valid for $x, y > 0$:
$$\log_a(xy) = \log_a x + \log_a y$$

$$\log_a(x/y) = \log_a x - \log_a y$$

$$\log_a(x^n) = n \log_a x$$
They work because logarithms are exponents, and these laws mirror the exponent laws for multiplication, division, and powers. Also useful: $\log_a 1 = 0$ and $\log_a a = 1$. These rules let you turn products into sums, which is exactly why logarithms were invented in the first place — to make multiplication feel like addition.

### How do I perform polynomial long division?

Polynomial long division works like numerical long division but with terms instead of digits. You divide the leading term of the dividend by the leading term of the divisor, write that quotient term above, multiply it back through the divisor, subtract from the dividend, and repeat with the new polynomial. Continue until the remaining polynomial has lower degree than the divisor. **Example:** Dividing $x^3 - 2x^2 + 5x - 6$ by $x - 1$ yields quotient $x^2 - x + 4$ and remainder $-2$. Synthetic division is a shortcut when dividing by a linear factor $(x - a)$. See [chapter 9](chapters/09-polynomial-functions/index.md).

### How do I identify vertical and horizontal asymptotes of a rational function?

For a rational function $f(x) = P(x)/Q(x)$ in lowest terms, vertical asymptotes occur where $Q(x) = 0$ (the denominator is zero but the numerator is not). Horizontal asymptotes depend on the degrees of $P$ and $Q$: if $\deg P < \deg Q$, the horizontal asymptote is $y = 0$; if $\deg P = \deg Q$, it is $y$ equals the ratio of leading coefficients; if $\deg P > \deg Q$, there is no horizontal asymptote (you may get an oblique one instead). See [chapter 10](chapters/10-rational-functions/index.md).

### What is Euler's number and where does it come from?

Euler's number $e \approx 2.71828$ is the base of the natural exponential function. It arises naturally as the limit of $(1 + 1/n)^n$ as $n$ grows without bound — the value you approach when you compound interest infinitely often. It has the magical property that the exponential function $f(x) = e^x$ equals its own derivative (a calculus fact you will meet later). For the functions course, it is enough to know that $e$ is the "natural" base for continuous growth and decay models.

### How do I solve an exponential equation like $3^x = 20$?

Take the logarithm of both sides. Any base works, but pick one your calculator supports. Using the natural log: $\ln(3^x) = \ln 20$, then by the power law $x \ln 3 = \ln 20$, so $x = \ln 20 / \ln 3 \approx 2.996/1.099 \approx 2.727$. The same idea handles any equation with the unknown in an exponent — logarithms are the keys that unlock exponents. If the equation has two exponential terms like $2 \cdot 3^x = 5^x$, take logs after getting everything onto a convenient form.

### What does multiplicity of a root mean?

The **multiplicity** of a root is how many times the corresponding factor appears in the factored form of a polynomial. A root of multiplicity $1$ corresponds to the graph crossing the x-axis. A root of even multiplicity means the graph touches the x-axis and bounces back. A root of odd multiplicity greater than $1$ means the graph crosses but flattens at the crossing. **Example:** In $f(x) = (x - 2)^3 (x + 1)^2$, the root $x = 2$ has multiplicity $3$ and the root $x = -1$ has multiplicity $2$. See [chapter 9](chapters/09-polynomial-functions/index.md).

### How do I find the intersection of two lines algebraically?

Set them equal or solve the system as simultaneous equations. If both are in gradient-intercept form, equate the expressions for $y$ and solve. Otherwise use substitution or elimination. **Example:** To intersect $y = 2x + 1$ and $y = -x + 7$, set $2x + 1 = -x + 7$, giving $3x = 6$, so $x = 2$ and $y = 5$. The intersection is $(2, 5)$. Two lines with equal gradients but different intercepts do not intersect — they are parallel. See [chapter 4](chapters/04-linear-functions/index.md).

### What is the point-gradient form of a line?

The **point-gradient form** writes a line given one point $(x_1, y_1)$ and its gradient $m$:
$$y - y_1 = m(x - x_1)$$
It is often the fastest way to construct a line's equation, because you just plug in the point and the gradient without solving for the y-intercept. **Example:** The line through $(4, -1)$ with gradient $3$ is $y - (-1) = 3(x - 4)$, which simplifies to $y = 3x - 13$. Convert to whichever form the question asks for afterward.

### How do I determine the end behavior of a polynomial?

End behavior is governed by the leading term $a_n x^n$. Two things matter: the degree $n$ and the sign of the leading coefficient $a_n$. If $n$ is even and $a_n > 0$, both ends go up; if $a_n < 0$, both ends go down. If $n$ is odd and $a_n > 0$, the graph falls on the left and rises on the right; if $a_n < 0$, it rises on the left and falls on the right. Everything else about the graph — bumps, roots, wiggles — happens in the finite middle; the leading term dominates the extremes. See [chapter 9](chapters/09-polynomial-functions/index.md).

### How do I decide which transformation applies: inside or outside the function?

Transformations **inside** the function, like $f(x - a)$ or $f(qx)$, act on the input and therefore affect the graph **horizontally**, often in counterintuitive ways: $f(x - 3)$ shifts the graph three units to the *right*, and $f(2x)$ compresses it horizontally by a factor of $2$. Transformations **outside** the function, like $f(x) + b$ or $pf(x)$, act on the output and affect the graph **vertically** in the expected direction. Inside acts on $x$ and goes "backwards"; outside acts on $y$ and goes "forwards." See [chapter 12](chapters/12-transformations/index.md).

### How do I convert between set-builder notation and interval notation?

Set-builder notation describes a set with a condition, like $\{x \in \mathbb{R} : x > 3\}$, while interval notation uses brackets: $(3, \infty)$. To convert, read the condition and translate each inequality into a bracket. Strict inequalities ($<$, $>$) become round brackets; non-strict ($\leq$, $\geq$) become square brackets. **Example:** $\{x \in \mathbb{R} : -1 \leq x < 4\}$ becomes $[-1, 4)$. Set-builder is more flexible but wordier; interval notation is cleaner but only works for intervals.

### What is the remainder theorem?

The **remainder theorem** states that when a polynomial $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$. You do not need to do the whole division — just substitute $a$. This is the theoretical cousin of the factor theorem: if $P(a) = 0$, the remainder is zero and $(x - a)$ is a factor. **Example:** For $P(x) = x^3 + 2x^2 - 5x + 1$, the remainder when divided by $(x - 2)$ is $P(2) = 8 + 8 - 10 + 1 = 7$. No long division required. See [chapter 9](chapters/09-polynomial-functions/index.md).

### How do I find the inverse of a linear function?

Start with $y = mx + c$, swap $x$ and $y$ to get $x = my + c$, then solve for $y$:
$$y = \frac{x - c}{m}$$
So the inverse is $f^{-1}(x) = (x - c)/m$, another linear function with gradient $1/m$ and a new intercept. Linear functions (except horizontal ones, $m = 0$) are always one-to-one, so their inverses always exist. **Example:** For $f(x) = 4x - 8$, the inverse is $f^{-1}(x) = (x + 8)/4$. Check: $f(f^{-1}(x)) = 4((x+8)/4) - 8 = x + 8 - 8 = x$. See [chapter 6](chapters/06-inverse-and-composite-functions/index.md).

### What are sum and product of roots formulas for polynomials?

For a polynomial $a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0$, the sum of all roots (counted with multiplicity) is $-a_{n-1}/a_n$ and the product of all roots is $(-1)^n a_0 / a_n$. For a monic quadratic $x^2 + bx + c$, this reduces to: sum of roots is $-b$ and product is $c$. These relationships let you work with roots without actually finding them — useful for HL problems where knowing the symmetric functions of roots is enough. See [chapter 9](chapters/09-polynomial-functions/index.md).

## Common Challenges

### Why do I keep shifting the graph the wrong direction on horizontal translations?

Because horizontal translations feel backwards. The transformation $f(x - 3)$ shifts the graph three units to the **right**, not the left. The logic: to get the same output as $f$ at input $0$, the new function needs input $x - 3 = 0$, meaning $x = 3$. So whatever $f$ was doing at $0$, the new function does at $3$ — the graph has slid right. A helpful rule: whatever number is attached to $x$ inside, flip its sign to find the shift direction. $f(x + 5)$ shifts left by $5$, $f(x - 5)$ shifts right by $5$. See [chapter 12](chapters/12-transformations/index.md).

### Why does my graphing calculator show a blank screen?

Nine times out of ten, the problem is the viewing window. If your function's interesting features live between $x = -100$ and $x = 100$ but your window is set to $[-10, 10]$, you will see nothing. Press "ZOOM Standard" to reset, then adjust manually by estimating where the function's key features (intercepts, vertex, asymptotes) should be. For exponentials, expect huge y-values; for logarithms, expect a narrow x-range near zero. Learning to set the window thoughtfully is a skill on its own — not a calculator problem, a thinking problem.

### I can't tell when to factor, complete the square, or use the quadratic formula. How do I choose?

Start by trying to factor — it is fastest when the roots are nice integers. If the numbers get ugly, check the discriminant; if $\Delta$ is not a perfect square, factoring will be painful, so go straight to the quadratic formula. Reach for completing the square when the question asks for vertex form or the coordinates of the turning point, or when you need to derive something symbolically. With practice, you will glance at a quadratic and know which tool fits. See [chapter 5](chapters/05-quadratic-functions/index.md).

### Why do I keep forgetting to state domain restrictions?

Because when you are deep in algebra, it is easy to forget that the original function had rules. A classic trap: simplifying $f(x) = (x^2 - 4)/(x - 2)$ to $x + 2$ and forgetting that $x = 2$ is still forbidden — the simplified form has a hole there. Make it a habit: every time you write a rational function, immediately note where the denominator equals zero. Every time you write a square root, note where the inside is non-negative. Every time you write a logarithm, note where the argument is positive. Domain restrictions come first, not last.

### I keep confusing $(f \circ g)(x)$ with $(g \circ f)(x)$. Any tips?

Read composition right-to-left: in $(f \circ g)(x)$, $g$ acts **first** (it is the inner function), and then $f$ acts on $g$'s output. The function closer to $x$ runs first. Another way: think of it as a pipeline. $x$ enters $g$, comes out as $g(x)$, enters $f$, comes out as $f(g(x))$. The order almost always matters — composing is not commutative. Write out both orders with concrete numbers a few times and it will stick. See [chapter 6](chapters/06-inverse-and-composite-functions/index.md).

### My inverse function doesn't match the original's graph reflected over $y = x$. What went wrong?

Usually one of two things: you made an algebra error when swapping and solving, or the original function is not one-to-one, so its "inverse" is actually a relation, not a function. First, verify the function is one-to-one (horizontal line test). Then redo the swap-and-solve carefully. Finally, check by composing: $f(f^{-1}(x))$ should equal $x$ for every $x$ in the domain. If it does not, there is an error somewhere in your algebra. If the function isn't one-to-one, restrict its domain first.

### I don't understand why $\log(a + b) \neq \log a + \log b$. What's the rule again?

The law is $\log(ab) = \log a + \log b$ — logarithms turn **products** into sums, not sums into sums. There is no simple rule for $\log(a + b)$; it generally cannot be simplified at all. Writing $\log(a + b) = \log a + \log b$ is one of the most common mistakes in algebra. The reason the real rule works is that logs undo exponentials, and exponent rules say $a^m \cdot a^n = a^{m+n}$ — multiplication becomes addition in the exponent. Addition has no such luck.

### I get lost in multi-step transformation problems. How should I tackle them?

Break them into individual steps and apply them in order. The standard order for $y = a f(b(x - h)) + k$ is: horizontal shift, horizontal stretch, vertical stretch, vertical shift — though you must be careful when both horizontal and vertical operations are chained. Sketch the parent function first, then redraw after each single transformation. Label the coordinates of a few key points and track where they move. Trying to do everything at once leads to errors; going slowly leads to confidence. See [chapter 12](chapters/12-transformations/index.md).

### I can solve equations but I freeze on "justify" or "show that" questions. Help?

These questions reward reasoning, not just answers. Start by writing what you know and what you want to prove. Then connect them with logical steps, each one justified by a definition, a theorem, or an algebraic identity. Use phrases like "because $\Delta < 0$, there are no real roots" or "since $f(a) = 0$, by the factor theorem $(x - a)$ is a factor." Every step should be defensible. Examiners want to see your thought process — answering the question is often the last step, not the only one.

### I can plot points but my curves look lumpy. How do I sketch smoothly?

Sketching is about capturing the *shape*, not matching every pixel. Start by identifying and marking the key features: intercepts, turning points, asymptotes, end behavior. Those are your anchor points. Then connect them with smooth curves that respect the overall behavior — parabolas are symmetric, exponentials curve one way, rationals approach asymptotes gently. A good sketch is a cartoon of the function: exaggerated in the right places and faithful to the important landmarks. Plot as few points as possible but include all the critical ones. See [chapter 3](chapters/03-graphing-and-key-features/index.md).

### I understand each topic in isolation but can't combine them on exam questions. Any strategy?

Exam questions are layered by design — they test whether you can bring multiple ideas together under pressure. Build connections deliberately: when you study inverses, revisit functions you already know and find their inverses. When you study transformations, apply them to every function type. When you study the discriminant, think about what it tells you graphically. Make a habit of asking "what does this topic have to do with what I learned last week?" The exam rewards a web of understanding, not a list of isolated facts.

### My algebra is fine but I keep losing marks for notation. What should I watch for?

Use the IB notation exactly: $f(x)$ with parentheses, $f^{-1}(x)$ with the $-1$ in the exponent position, $(f \circ g)(x)$ with the open ring for composition, $\Delta = b^2 - 4ac$ for the discriminant, and "gradient" rather than "slope" in written explanations. Write equals signs aligned vertically, show units in context problems, and label axes on graphs. Rounding matters too — give exact answers when possible, and otherwise state how many significant figures you are using. Neat notation is free marks; sloppy notation is free mark-losses.

## Best Practice Questions

### What's the best way to study for a functions exam?

Active recall and spaced practice beat re-reading every time. Close the book and try to state each key definition from memory; reopen it only to check. Rework the examples from scratch without peeking. Do past-paper questions under exam conditions, not open-book. Space your sessions across days rather than cramming — your brain consolidates overnight, and review after a break is where learning actually sticks. And talk about the math: explaining a concept out loud exposes exactly the gaps a silent reread will hide.

### How do I know when my answer to a "find the roots" problem is correct?

Substitute your answer back into the original equation and verify it produces zero. If solving $x^2 - 5x + 6 = 0$ gives $x = 2$ and $x = 3$, check: $(2)^2 - 5(2) + 6 = 0$ and $(3)^2 - 5(3) + 6 = 0$. Both true. Verification takes ten seconds and catches almost every algebra error. You should also check that the number of roots matches what the discriminant predicted — if $\Delta > 0$ and you only found one root, something went wrong.

### When should I use technology versus work by hand?

Use technology when the problem is computationally tedious or analytically impossible — finding intersection points of $e^x$ and $\sin x$, for example, or optimizing a messy rational function. Use hand calculation for problems where the numbers are designed to come out clean, where the process itself is being assessed, or where you need to show algebraic reasoning. Exam papers tell you which section permits a calculator and which does not. Outside exams, a good rule is: use technology to check hand work, not replace it.

### How should I approach a multi-part modeling question?

Read the entire question before starting any part. Each part usually builds on the previous one, so if you misunderstand part (a), the rest will collapse. Identify what the variables represent in real-world terms, including their units. State your chosen model explicitly and justify it briefly. Answer each sub-question with appropriate precision — exact values where possible, otherwise sensible significant figures. End by sanity-checking: does the answer make real-world sense? A population cannot be negative; a time cannot be before zero. See [chapter 13](chapters/13-modeling-and-applications/index.md).

### How much should I memorize versus understand?

You need both, in different proportions. Memorize: key formulas (quadratic formula, discriminant, gradient formula, log laws, sum/product of roots), standard shapes (parabola, exponential, log, hyperbola, modulus), and notation. Understand: why those formulas work, when each one applies, and how the shapes transform. A student who has memorized without understanding gets stuck the moment a problem departs from the textbook pattern. A student who has understood without memorized is slow and makes small errors under pressure. Aim for fluency — memorized facts backed by deep reasons.

### How do I organize my work so I can find my mistakes?

Write one equation per line, aligned neatly, with the operation being performed on each step clearly visible (even if only in your head). Skip a line between distinct problems. When you make a mistake, rewrite the correct line below rather than erasing — you learn from seeing the error next to the fix. Label diagrams and annotate important quantities. A messy page hides errors; a clean page exposes them. Your future self, reading your notes two weeks from now, should be able to follow the logic without any context.

### Should I work alone or with a study group?

Both, in rotation. Work alone first to build independent skill — you cannot outsource understanding, and you will not have classmates next to you on exam day. Then meet with a small group to explain your thinking, hear others' approaches, and teach the parts you know best. Teaching is one of the most powerful forms of learning because it forces you to organize your thoughts. Avoid groups that copy rather than explain, and avoid solo work that drifts into passive reading.

### What should I do when I get a problem completely wrong?

Treat it as information, not defeat. Identify the exact step where things went off track. Was it a misread question? A sign error? A missing domain restriction? A misunderstood concept? The specific type of mistake tells you what to practice next. Redo the problem from scratch once you have found the fix. Then find two similar problems and do them the right way to overwrite the wrong pattern. Every error is a signpost pointing to something you are about to learn.

### How do I transfer a function skill from one chapter to the next?

Actively look for the connection. When you learn about inverses in [chapter 6](chapters/06-inverse-and-composite-functions/index.md), apply the idea to the exponential and logarithmic functions in chapters 7 and 8 — they are inverses of each other. When you learn transformations in [chapter 12](chapters/12-transformations/index.md), apply them to every function type you have met. Write a small note to yourself: "this connects to X from chapter Y." Over time, these notes become a web, and the web becomes understanding that survives the exam.

### How much time should I spend on Try-It-Yourself exercises?

Enough to finish most of them, and enough that the ones you cannot finish become clear targets for review. The goal is not to grind through every problem mechanically but to use them as diagnostics: if five in a row go smoothly, move on; if three in a row stump you, stop and revisit the worked examples. Quality beats quantity. Ten problems done with full attention teach more than thirty done on autopilot.

## Advanced Topics

### How do I rigorously prove a function is self-inverse?

Show that $f(f(x)) = x$ for every $x$ in the function's domain. That is the definition of self-inverse: applying the function twice returns the original input. **Example:** For $f(x) = 1/x$, compute $f(f(x)) = f(1/x) = 1/(1/x) = x$, which holds for all $x \neq 0$. So $f$ is self-inverse on its domain. Equivalently, you can show that $f = f^{-1}$ algebraically by finding the inverse the usual way and observing it matches $f$. Self-inverse functions are symmetric about the line $y = x$. See [chapter 11](chapters/11-function-classifications/index.md).

### What makes a rational function have an oblique asymptote instead of a horizontal one?

An oblique (slanted) asymptote appears when the degree of the numerator is **exactly one more** than the degree of the denominator. In that case, performing polynomial long division gives a linear quotient plus a remainder that shrinks to zero at infinity — the linear quotient is your oblique asymptote. **Example:** For $f(x) = (x^2 + 1)/(x - 1)$, dividing gives $x + 1 + 2/(x - 1)$, so the oblique asymptote is $y = x + 1$. If the numerator's degree exceeds the denominator's by two or more, you get a curved asymptote instead (not typically covered in IB). See [chapter 10](chapters/10-rational-functions/index.md).

### How do I restrict a domain to force a function to have an inverse?

Choose a subset of the original domain on which the function is one-to-one — typically a maximal interval where the function is strictly increasing or strictly decreasing. For $f(x) = x^2$, restricting to $x \geq 0$ makes it one-to-one with inverse $\sqrt{x}$. For a parabola, restrict at the vertex. For a periodic function, restrict to one monotonic branch. Always state the restricted domain clearly when you write the inverse, because the inverse's own domain is the original function's restricted range. See [chapter 11](chapters/11-function-classifications/index.md).

### Why do we study $y = |f(x)|$ and $y = f(|x|)$ separately?

Because they transform the graph in fundamentally different ways. $y = |f(x)|$ takes the absolute value of the **output**: anywhere the original graph dipped below the x-axis is reflected upward, so the result is always non-negative. $y = f(|x|)$ takes the absolute value of the **input**: the function ignores negative $x$-values and replaces them with their positive twins, so the graph for $x \geq 0$ is copied across the y-axis. One changes where the graph sits; the other changes what it is fed. Both are common and both trip students up, which is why they deserve separate treatment. See [chapter 11](chapters/11-function-classifications/index.md).

### How do the sum and product of roots formulas generalize to higher degrees?

For a polynomial $a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$, the sum of all roots is $-a_{n-1}/a_n$ and the product of all roots is $(-1)^n a_0 / a_n$. But you can also write symmetric expressions for the pairwise products, triple products, and so on, each tied to a specific coefficient. These are called **Vieta's formulas**, and they let you extract information about the roots of a polynomial directly from its coefficients without finding the roots themselves. For a cubic $x^3 + bx^2 + cx + d$: sum of roots $= -b$, sum of pairwise products $= c$, product of all three roots $= -d$.

### Can a function be both even and odd?

Yes, but only one: the zero function $f(x) = 0$. To be even, $f(-x) = f(x)$; to be odd, $f(-x) = -f(x)$. Setting these equal gives $f(x) = -f(x)$, which forces $f(x) = 0$ for every $x$. Every other function is either even, odd, or neither. This is a surprisingly useful fact — it tells you that "even" and "odd" carve the function space into three non-overlapping categories (even, odd, neither), with the zero function sitting on the boundary.

### How does the modulus function appear in solving equations like $|x - 3| = 5$?

Equations with modulus always branch into cases based on the sign of what is inside. $|x - 3| = 5$ means either $x - 3 = 5$ or $x - 3 = -5$, giving $x = 8$ or $x = -2$. More complex equations like $|2x - 1| = |x + 4|$ branch into four sub-cases (positive/positive, positive/negative, and so on), most of which collapse on inspection. Alternatively, square both sides: $(2x - 1)^2 = (x + 4)^2$, which removes the modulus entirely because $|a|^2 = a^2$. Always check that your final answers satisfy the original modulus equation — squaring can introduce extraneous solutions.

### What is the logarithmic scale and where is it used?

A **logarithmic scale** measures a quantity by its logarithm rather than its raw value, so each unit on the scale represents multiplication by a fixed factor (usually $10$). It is used whenever a quantity spans many orders of magnitude: the Richter scale for earthquakes, pH for acidity, decibels for sound, and magnitudes for star brightness. An earthquake of magnitude $7$ is $10$ times stronger than one of magnitude $6$, and $100$ times stronger than one of magnitude $5$. Logarithmic scales let us visualize and reason about quantities whose linear values would be unwieldy. See [chapter 8](chapters/08-logarithmic-functions/index.md).
