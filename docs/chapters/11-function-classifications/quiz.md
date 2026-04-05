# Quiz: Function Classifications

Test your understanding of symmetry, modulus functions, piecewise definitions, and function classification with these review questions.

---

#### 1. Which of the following is an even function?

<div class="upper-alpha" markdown>
1. $f(x) = x^3 - x$
2. $f(x) = 2x + 1$
3. $f(x) = x^4 + 3x^2$
4. $f(x) = \frac{1}{x}$
</div>

??? question "Show Answer"
    The correct answer is **C**. An even function satisfies $f(-x) = f(x)$. For option C: $f(-x) = (-x)^4 + 3(-x)^2 = x^4 + 3x^2 = f(x)$. ✓ Polynomials with only even powers (including constants) are even. Options A and D are odd functions, and option B is neither (it has both an even power $x^0 = 1$ and an odd power $x^1$).

    **Concept Tested:** Even Function

---

#### 2. A function $f$ satisfies $f(-x) = -f(x)$. This function is:

<div class="upper-alpha" markdown>
1. Even
2. Neither even nor odd
3. Periodic
4. Odd
</div>

??? question "Show Answer"
    The correct answer is **D**. This is the defining algebraic property of an odd function: negating the input negates the output. Odd functions have rotational symmetry about the origin — rotate the graph $180°$ around $(0, 0)$ and it looks the same. Classic examples include $f(x) = x$, $f(x) = x^3$, and $f(x) = \frac{1}{x}$.

    **Concept Tested:** Odd Function

---

#### 3. Solve $|3x - 1| = 8$.

<div class="upper-alpha" markdown>
1. $x = 3$ only
2. $x = 3$ or $x = -\frac{7}{3}$
3. $x = -3$ or $x = \frac{7}{3}$
4. $x = 3$ or $x = \frac{7}{3}$
</div>

??? question "Show Answer"
    The correct answer is **B**. Absolute value equations $|A| = k$ split into $A = k$ or $A = -k$. So $3x - 1 = 8$ gives $3x = 9$ and $x = 3$; or $3x - 1 = -8$ gives $3x = -7$ and $x = -\frac{7}{3}$. Both solutions are valid. Check: $|3(3) - 1| = |8| = 8$ ✓ and $|3(-7/3) - 1| = |-8| = 8$ ✓.

    **Concept Tested:** Absolute Value Equations

---

#### 4. Describe how the graph of $y = |f(x)|$ differs from the graph of $y = f(x)$.

<div class="upper-alpha" markdown>
1. Any portion below the $x$-axis is reflected above it
2. The entire graph is shifted up
3. The graph is mirrored about the $y$-axis
4. Every $y$-value is squared
</div>

??? question "Show Answer"
    The correct answer is **A**. The transformation $y = |f(x)|$ takes the absolute value of the output. Wherever $f(x)$ is positive, $|f(x)|$ equals $f(x)$ unchanged. Wherever $f(x)$ is negative, $|f(x)|$ is the positive mirror image — the graph is reflected up across the $x$-axis. Option C describes $f(|x|)$, option D describes $[f(x)]^2$.

    **Concept Tested:** Y Equals Mod F of X

---

#### 5. A piecewise function is defined as $f(x) = \begin{cases} x^2 & x < 1 \\ 3x - 1 & x \geq 1 \end{cases}$. What is $f(1)$?

<div class="upper-alpha" markdown>
1. $1$
2. $0$
3. $2$
4. $4$
</div>

??? question "Show Answer"
    The correct answer is **C**. Check which interval $x = 1$ belongs to. The first piece ($x^2$) applies when $x < 1$ (strictly less than). The second piece ($3x - 1$) applies when $x \geq 1$ — this includes $1$. So $f(1) = 3(1) - 1 = 2$. Always look carefully at whether the endpoint is included ($\leq$, $\geq$) or excluded ($<$, $>$) in each piece's condition.

    **Concept Tested:** Piecewise Function

---

#### 6. What is $\lfloor -2.3 \rfloor$?

<div class="upper-alpha" markdown>
1. $-2$
2. $-3$
3. $2$
4. $3$
</div>

??? question "Show Answer"
    The correct answer is **B**. The greatest integer function (floor) returns the greatest integer less than or equal to $x$. For negative numbers, this means rounding *down* (further from zero, not toward zero). The integers less than or equal to $-2.3$ are $\{..., -4, -3\}$ — notice $-2$ is greater than $-2.3$, so it doesn't qualify. The greatest of the valid integers is $-3$.

    **Concept Tested:** Greatest Integer Function

---

#### 7. Classify $f(x) = x^5 + 3x^3 - 2x$ as even, odd, or neither.

<div class="upper-alpha" markdown>
1. Even
2. Odd
3. Neither
4. Both even and odd
</div>

??? question "Show Answer"
    The correct answer is **B**. All powers of $x$ are odd ($x^5$, $x^3$, $x^1$), so we expect an odd function. Verify algebraically: $f(-x) = (-x)^5 + 3(-x)^3 - 2(-x) = -x^5 - 3x^3 + 2x = -(x^5 + 3x^3 - 2x) = -f(x)$. ✓ Only the zero function is both even and odd, so option D doesn't apply here.

    **Concept Tested:** Symmetry Testing

---

#### 8. The graph of $y = f(|x|)$ is obtained from $y = f(x)$ by:

<div class="upper-alpha" markdown>
1. Taking the right half of $f(x)$ (where $x \geq 0$) and mirroring it across the $y$-axis
2. Reflecting the parts below the $x$-axis above it
3. Shifting the graph left by 1 unit
4. Squaring all $y$-values
</div>

??? question "Show Answer"
    The correct answer is **A**. The transformation $f(|x|)$ replaces $x$ with $|x|$, which is always non-negative. So the function sees only $|x|$, meaning inputs $-2$ and $2$ produce the same output. This makes the graph symmetric about the $y$-axis: take the right half of $f$ (where $x \geq 0$) and reflect it to create the left half. The result is always an even function.

    **Concept Tested:** Y Equals F of Mod X

---

#### 9. The signum function $\text{sgn}(x)$ returns which value when $x = -5$?

<div class="upper-alpha" markdown>
1. $-5$
2. $5$
3. $0$
4. $-1$
</div>

??? question "Show Answer"
    The correct answer is **D**. The signum function returns the sign of its input: $-1$ for negative inputs, $0$ at zero, and $+1$ for positive inputs. Since $-5 < 0$, $\text{sgn}(-5) = -1$. The signum function doesn't return the actual value or its magnitude — just a flag indicating the sign direction.

    **Concept Tested:** Signum Function

---

#### 10. Which function is NOT periodic?

<div class="upper-alpha" markdown>
1. $f(x) = \sin x$
2. $f(x) = \cos x$
3. $f(x) = x^2$
4. A function where $f(x + 4) = f(x)$ for all $x$
</div>

??? question "Show Answer"
    The correct answer is **C**. A periodic function satisfies $f(x + T) = f(x)$ for some positive period $T$. The parabola $f(x) = x^2$ doesn't repeat — as $x$ gets larger, the output grows without bound and never returns to previous values. Sine and cosine are classic periodic functions with period $2\pi$, and option D describes a function with period $4$ by definition.

    **Concept Tested:** Periodic Function

---
