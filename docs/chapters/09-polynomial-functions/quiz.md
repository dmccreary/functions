# Quiz: Polynomial Functions

Test your understanding of polynomial functions, end behaviour, division techniques, and root finding with these review questions.

---

#### 1. What is the degree of the polynomial $f(x) = 4x^5 - 2x^3 + 7x^2 - 1$?

<div class="upper-alpha" markdown>
1. $4$
2. $5$
3. $3$
4. $10$
</div>

??? question "Show Answer"
    The correct answer is **B**. The degree of a polynomial is the highest power of the variable that appears. Here, $x^5$ is the highest power, so the degree is $5$. Option A mistakes the leading coefficient for the degree. The degree tells us important structural information: a degree-$5$ polynomial can have up to $5$ real roots and up to $4$ turning points.

    **Concept Tested:** Degree of a Polynomial

---

#### 2. Describe the end behaviour of $f(x) = -3x^4 + 2x^2 - 1$ as $x \to \infty$.

<div class="upper-alpha" markdown>
1. $f(x) \to \infty$
2. $f(x) \to 0$
3. $f(x) \to -\infty$
4. $f(x)$ oscillates
</div>

??? question "Show Answer"
    The correct answer is **C**. The degree is $4$ (even) and the leading coefficient is $-3$ (negative). For even degree with negative leading coefficient, both ends of the graph go down, so as $x \to \infty$, $f(x) \to -\infty$ (and same as $x \to -\infty$). Only the leading term matters for end behaviour because it dominates all lower-order terms for large $|x|$.

    **Concept Tested:** End Behavior

---

#### 3. The factor theorem states that $(x - c)$ is a factor of $f(x)$ if and only if:

<div class="upper-alpha" markdown>
1. $f(0) = c$
2. $f(c) = 0$
3. $f(c) = c$
4. $f(1) = c$
</div>

??? question "Show Answer"
    The correct answer is **B**. The factor theorem says that $(x - c)$ divides $f(x)$ evenly precisely when $c$ is a root of $f$, i.e., $f(c) = 0$. This is enormously useful: once you find a root by inspection or trial, you can factor out $(x - c)$ and reduce the polynomial's degree, making further factoring easier. The factor theorem is a special case of the remainder theorem.

    **Concept Tested:** Factor Theorem

---

#### 4. What is the maximum number of turning points a polynomial of degree $6$ can have?

<div class="upper-alpha" markdown>
1. $5$
2. $6$
3. $7$
4. $3$
</div>

??? question "Show Answer"
    The correct answer is **A**. A polynomial of degree $n$ can have at most $n - 1$ turning points. For degree $6$: $6 - 1 = 5$. The actual number can be less, but never more. This "one less than the degree" rule is a direct consequence of calculus (the derivative has one less degree). Use this fact to sanity-check your sketches of polynomial graphs.

    **Concept Tested:** Turning Points Count

---

#### 5. What is the remainder when $f(x) = x^3 - 2x^2 + 3x - 5$ is divided by $(x - 2)$?

<div class="upper-alpha" markdown>
1. $-3$
2. $5$
3. $1$
4. $0$
</div>

??? question "Show Answer"
    The correct answer is **C**. By the remainder theorem, the remainder when dividing $f(x)$ by $(x - c)$ is $f(c)$. Here, $f(2) = 8 - 8 + 6 - 5 = 1$. Since the remainder is not zero, $(x - 2)$ is not a factor. The remainder theorem is a huge time-saver — you avoid performing the full division just to find the remainder.

    **Concept Tested:** Remainder Theorem

---

#### 6. For the polynomial $f(x) = (x - 2)^2(x + 3)$, what happens at $x = 2$?

<div class="upper-alpha" markdown>
1. The graph crosses the $x$-axis
2. The graph touches the $x$-axis and bounces back
3. The graph has a vertical asymptote
4. The graph has a hole
</div>

??? question "Show Answer"
    The correct answer is **B**. The factor $(x - 2)^2$ indicates that $x = 2$ is a root with multiplicity $2$. Roots with even multiplicity cause the graph to touch the $x$-axis and bounce back rather than cross. Roots with odd multiplicity cause crossing. Holes and asymptotes are features of rational functions, not polynomials — polynomials are continuous and smooth everywhere.

    **Concept Tested:** Multiplicity of Roots

---

#### 7. The roots of $x^3 + 2x^2 - 5x - 6 = 0$ sum to what value (using the sum of roots formula)?

<div class="upper-alpha" markdown>
1. $2$
2. $6$
3. $-6$
4. $-2$
</div>

??? question "Show Answer"
    The correct answer is **D**. For a polynomial $a_n x^n + a_{n-1}x^{n-1} + \cdots$, the sum of roots is $-\frac{a_{n-1}}{a_n}$. Here $a_n = 1$ (coefficient of $x^3$) and $a_{n-1} = 2$ (coefficient of $x^2$). So the sum is $-\frac{2}{1} = -2$. This formula lets you find the sum of roots without actually solving the polynomial.

    **Concept Tested:** Sum of Roots Formula

---

#### 8. Which of the following describes a cubic function?

<div class="upper-alpha" markdown>
1. Degree $2$, up to $1$ turning point
2. Degree $4$, up to $3$ turning points
3. Degree $3$, up to $2$ turning points
4. Degree $5$, up to $4$ turning points
</div>

??? question "Show Answer"
    The correct answer is **C**. A cubic function has degree $3$, and by the rule "at most $n - 1$ turning points," it can have up to $2$ turning points. Cubics always have at least one real root (the graph must cross the $x$-axis at least once because of the opposing end behaviour of odd-degree polynomials). Option A describes a quadratic, B describes a quartic, and D describes a quintic.

    **Concept Tested:** Cubic Function

---

#### 9. Given that $x = -1$ is a root of $f(x) = x^3 - 4x^2 + x + 6$, what are the remaining two roots?

<div class="upper-alpha" markdown>
1. $x = 2$ and $x = 3$
2. $x = -2$ and $x = 3$
3. $x = 2$ and $x = -3$
4. $x = -2$ and $x = -3$
</div>

??? question "Show Answer"
    The correct answer is **A**. First verify: $f(-1) = -1 - 4 - 1 + 6 = 0$. ✓ Divide $f(x)$ by $(x + 1)$ using synthetic division with coefficients $[1, -4, 1, 6]$ and $c = -1$: the quotient is $x^2 - 5x + 6$. Factor: $(x - 2)(x - 3) = 0$, giving $x = 2$ and $x = 3$. So the three roots are $-1, 2, 3$.

    **Concept Tested:** Polynomial Division

---

#### 10. What is the leading coefficient of $f(x) = 5 - 3x + 2x^4 - x^2$?

<div class="upper-alpha" markdown>
1. $5$
2. $-1$
3. $-3$
4. $2$
</div>

??? question "Show Answer"
    The correct answer is **D**. The leading coefficient is the coefficient of the highest-power term. First rewrite in standard order: $f(x) = 2x^4 - x^2 - 3x + 5$. The highest power is $x^4$, with coefficient $2$. A common mistake is to pick the first coefficient you see (option A picks the constant term) without rearranging. Always reorder by descending powers first.

    **Concept Tested:** Leading Coefficient

---
