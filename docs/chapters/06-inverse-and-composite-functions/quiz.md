# Quiz: Inverse and Composite Functions

Test your understanding of one-to-one functions, inverses, reflections, and function composition with these review questions.

---

#### 1. Which test is used to determine whether a graph represents a function?

<div class="upper-alpha" markdown>
1. Horizontal line test
2. Vertical line test
3. Reflection test
4. Composition test
</div>

??? question "Show Answer"
    The correct answer is **B**. The vertical line test checks whether any vertical line intersects the graph more than once. If any vertical line crosses the graph at two or more points, the same input produces multiple outputs, violating the function definition. The horizontal line test is used for a different purpose — it checks whether a function is one-to-one, which is required for the inverse to also be a function.

    **Concept Tested:** Vertical Line Test

---

#### 2. Find the inverse of $f(x) = 2x - 6$.

<div class="upper-alpha" markdown>
1. $f^{-1}(x) = \frac{1}{2x - 6}$
2. $f^{-1}(x) = \frac{x + 6}{2}$
3. $f^{-1}(x) = 2x + 6$
4. $f^{-1}(x) = \frac{x - 6}{2}$
</div>

??? question "Show Answer"
    The correct answer is **B**. Start with $y = 2x - 6$, then swap: $x = 2y - 6$. Solve for $y$: add $6$ to both sides to get $x + 6 = 2y$, then divide by $2$: $y = \frac{x + 6}{2}$. Option A confuses inverse function with reciprocal ($\frac{1}{f(x)}$). Verify: $f(f^{-1}(x)) = 2 \cdot \frac{x + 6}{2} - 6 = x + 6 - 6 = x$. ✓

    **Concept Tested:** Finding an Inverse

---

#### 3. The graph of $f^{-1}$ is obtained by reflecting the graph of $f$ over which line?

<div class="upper-alpha" markdown>
1. The $x$-axis
2. The $y$-axis
3. The line $y = x$
4. The origin
</div>

??? question "Show Answer"
    The correct answer is **C**. When you swap $x$ and $y$ in an equation (the algebraic operation of finding an inverse), the geometric effect is to reflect every point $(a, b)$ to $(b, a)$. This is a reflection over the line $y = x$. So if $(2, 7)$ is on $f$, then $(7, 2)$ is on $f^{-1}$. Reflection over the $x$-axis negates $y$, and over the $y$-axis negates $x$ — neither swaps them.

    **Concept Tested:** Reflection Over Y Equals X

---

#### 4. Given $f(x) = x^2$ and $g(x) = x + 3$, find $(f \circ g)(x)$.

<div class="upper-alpha" markdown>
1. $(x + 3)^2$
2. $x^2 + 3$
3. $x^2 + 6$
4. $x + 9$
</div>

??? question "Show Answer"
    The correct answer is **A**. The composition $(f \circ g)(x)$ means $f(g(x))$ — apply $g$ first, then $f$. So $f(g(x)) = f(x + 3) = (x + 3)^2$. A common mistake is to compute $(g \circ f)(x) = g(x^2) = x^2 + 3$ (option B) instead. Always work from the inside out, and remember that the order matters.

    **Concept Tested:** Composite Function

---

#### 5. Which function is its own inverse?

<div class="upper-alpha" markdown>
1. $f(x) = x + 1$
2. $f(x) = 2x$
3. $f(x) = x^2$
4. $f(x) = \frac{1}{x}$
</div>

??? question "Show Answer"
    The correct answer is **D**. A self-inverse function satisfies $f(f(x)) = x$. For the reciprocal function: $f(f(x)) = f(\frac{1}{x}) = \frac{1}{1/x} = x$. ✓ The graph of $y = \frac{1}{x}$ is symmetric about the line $y = x$. Option A shifts right, option B doubles, and option C squares — none of these undo themselves when applied twice.

    **Concept Tested:** Self-Inverse Function

---

#### 6. Which function is NOT one-to-one?

<div class="upper-alpha" markdown>
1. $f(x) = x^3$
2. $f(x) = 2x + 1$
3. $f(x) = x^2$
4. $f(x) = \sqrt{x}$
</div>

??? question "Show Answer"
    The correct answer is **C**. A function is one-to-one if each output comes from exactly one input. For $f(x) = x^2$, both $f(-3) = 9$ and $f(3) = 9$ — two different inputs give the same output, so it fails the horizontal line test. Cubic, linear, and square root functions are all one-to-one because they are monotonic (always increasing or always decreasing).

    **Concept Tested:** One-to-One Function

---

#### 7. If $f(x) = 3x$ and $g(x) = x + 2$, what is $(g \circ f)(4)$?

<div class="upper-alpha" markdown>
1. $14$
2. $18$
3. $12$
4. $20$
</div>

??? question "Show Answer"
    The correct answer is **A**. Work from the inside out: first compute $f(4) = 3(4) = 12$. Then apply $g$ to that result: $g(12) = 12 + 2 = 14$. So $(g \circ f)(4) = 14$. A common error is to apply the functions in the wrong order, getting $(f \circ g)(4) = f(6) = 18$ instead.

    **Concept Tested:** Order of Composition

---

#### 8. What does the notation $f^{-1}(x)$ mean?

<div class="upper-alpha" markdown>
1. $\frac{1}{f(x)}$
2. $f(x)$ raised to the power $-1$
3. The inverse function of $f$
4. $f(x)$ with the sign reversed
</div>

??? question "Show Answer"
    The correct answer is **C**. The superscript $-1$ in $f^{-1}(x)$ is a label indicating the inverse function, not an exponent. This is a frequent source of confusion: $f^{-1}(x)$ is the function that reverses what $f$ does, while $\frac{1}{f(x)}$ is the reciprocal. If you want the reciprocal of $f(x)$, write $[f(x)]^{-1}$ or $\frac{1}{f(x)}$ — never $f^{-1}(x)$.

    **Concept Tested:** Inverse Function Notation

---

#### 9. Decompose $h(x) = \sqrt{x + 5}$ as $(f \circ g)(x)$.

<div class="upper-alpha" markdown>
1. $f(x) = \sqrt{x} + 5$ and $g(x) = x$
2. $f(x) = \sqrt{x}$ and $g(x) = x + 5$
3. $f(x) = x + 5$ and $g(x) = \sqrt{x}$
4. $f(x) = x$ and $g(x) = \sqrt{x + 5}$
</div>

??? question "Show Answer"
    The correct answer is **B**. To decompose, identify the "inner" operation (what happens to $x$ first) and the "outer" operation. In $\sqrt{x + 5}$, the inner operation is "add $5$" and the outer operation is "take the square root." So $g(x) = x + 5$ (inner) and $f(x) = \sqrt{x}$ (outer). Verify: $(f \circ g)(x) = f(x + 5) = \sqrt{x + 5}$. ✓

    **Concept Tested:** Decomposing Functions

---

#### 10. To find an inverse for $f(x) = x^2$, which domain restriction makes it one-to-one?

<div class="upper-alpha" markdown>
1. $x \neq 0$
2. $x \in \mathbb{R}$
3. $-1 \leq x \leq 1$
4. $x \geq 0$
</div>

??? question "Show Answer"
    The correct answer is **D**. The full parabola $f(x) = x^2$ is not one-to-one because inputs $a$ and $-a$ produce the same output. Restricting the domain to $x \geq 0$ (or alternatively $x \leq 0$) removes this duplication, keeping only the right half of the parabola. With this restriction, the inverse is $f^{-1}(x) = \sqrt{x}$. Option C still includes both $-1$ and $1$, which map to the same output.

    **Concept Tested:** Domain Restriction Inverse

---
