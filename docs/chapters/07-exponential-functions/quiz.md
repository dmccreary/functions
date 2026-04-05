# Quiz: Exponential Functions

Test your understanding of exponential functions, Euler's number, growth and decay, and real-world exponential models with these review questions.

---

#### 1. Which of the following is the natural exponential function?

<div class="upper-alpha" markdown>
1. $f(x) = x^e$
2. $f(x) = e^x$
3. $f(x) = 10^x$
4. $f(x) = 2^x$
</div>

??? question "Show Answer"
    The correct answer is **B**. The natural exponential function uses Euler's number $e \approx 2.71828$ as its base: $f(x) = e^x$. Note the crucial distinction: in $e^x$, the variable is in the exponent, whereas in $x^e$ the variable is in the base (which is a power function, not exponential). Options C and D are also exponential functions but not the "natural" one.

    **Concept Tested:** Natural Exponential

---

#### 2. What is the $y$-intercept of $f(x) = 5^x$?

<div class="upper-alpha" markdown>
1. $(0, 0)$
2. $(0, 5)$
3. $(0, 1)$
4. $(1, 5)$
</div>

??? question "Show Answer"
    The correct answer is **C**. For any valid exponential function $f(x) = a^x$, we have $f(0) = a^0 = 1$. So all exponential functions of this form pass through the point $(0, 1)$ regardless of the base. This is a reliable anchor point when sketching exponential graphs. The graph never touches the $x$-axis — it has $y = 0$ as a horizontal asymptote.

    **Concept Tested:** Exponential Function

---

#### 3. Which function represents exponential decay?

<div class="upper-alpha" markdown>
1. $f(x) = 3^x$
2. $f(x) = 0.8^x$
3. $f(x) = e^x$
4. $f(x) = 10^x$
</div>

??? question "Show Answer"
    The correct answer is **B**. Exponential decay occurs when the base is strictly between $0$ and $1$. Here $0.8 < 1$, so as $x$ increases, $(0.8)^x$ decreases toward zero. The other options all have bases greater than $1$, so they represent exponential growth. Equivalently, decay can be written as $a^{-x}$ for $a > 1$.

    **Concept Tested:** Exponential Decay

---

#### 4. Solve $3^{x+1} = 81$.

<div class="upper-alpha" markdown>
1. $x = 3$
2. $x = 27$
3. $x = 4$
4. $x = 80$
</div>

??? question "Show Answer"
    The correct answer is **A**. Write $81$ as a power of $3$: $81 = 3^4$. So the equation becomes $3^{x+1} = 3^4$. When the bases are equal, the exponents must be equal: $x + 1 = 4$, giving $x = 3$. Verify: $3^{3+1} = 3^4 = 81$. ✓ The key strategy for exponential equations is to express both sides with the same base.

    **Concept Tested:** Exponential Equations

---

#### 5. A bacterial culture doubles every hour. Starting with $200$ bacteria, how many will there be after $5$ hours?

<div class="upper-alpha" markdown>
1. $2000$
2. $1000$
3. $3200$
4. $6400$
</div>

??? question "Show Answer"
    The correct answer is **D**. The population doubles each hour, so the model is $P(t) = 200 \cdot 2^t$. After $5$ hours: $P(5) = 200 \cdot 2^5 = 200 \cdot 32 = 6400$. A common mistake is to multiply $200$ by $5$ and then by $2$, which treats the growth as linear. Exponential growth compounds: each hour doubles everything that was there.

    **Concept Tested:** Population Growth Model

---

#### 6. Euler's number $e$ is approximately equal to:

<div class="upper-alpha" markdown>
1. $3.14159$
2. $1.41421$
3. $2.71828$
4. $1.61803$
</div>

??? question "Show Answer"
    The correct answer is **C**. Euler's number is $e \approx 2.71828182845...$ It is an irrational number that arises naturally in situations involving continuous growth. Option A is $\pi$, option B is $\sqrt{2}$, and option D is the golden ratio $\phi$. Don't confuse these famous mathematical constants — each has its own distinct role.

    **Concept Tested:** Euler's Number

---

#### 7. A radioactive isotope has a half-life of 10 years. If you start with 80 g, how much remains after 30 years?

<div class="upper-alpha" markdown>
1. $20$ g
2. $40$ g
3. $8$ g
4. $10$ g
</div>

??? question "Show Answer"
    The correct answer is **D**. Using the half-life model: $A(t) = A_0 \cdot (1/2)^{t/h}$, with $A_0 = 80$, $h = 10$, $t = 30$. So $A(30) = 80 \cdot (1/2)^3 = 80 \cdot 1/8 = 10$ g. In three half-lives the amount halves three times: $80 \to 40 \to 20 \to 10$. A common mistake is to simply divide by $3$ (giving about $27$ g), which treats decay as linear.

    **Concept Tested:** Half-Life Model

---

#### 8. You invest $\$2000$ at $6\%$ annual interest compounded annually. How much do you have after $3$ years?

<div class="upper-alpha" markdown>
1. $\$2360.00$
2. $\$2382.03$
3. $\$2360.18$
4. $\$2120.00$
</div>

??? question "Show Answer"
    The correct answer is **B**. Using the compound interest formula: $A = P(1 + r)^t = 2000(1.06)^3 = 2000 \times 1.191016 = \$2382.03$. Option A uses simple (not compound) interest: $2000 + 3 \times 0.06 \times 2000 = 2360$. The difference is interest earned on interest, which is what "compounding" captures — each year's interest is calculated on the new, larger balance.

    **Concept Tested:** Compound Interest Model

---

#### 9. What is the horizontal asymptote of $f(x) = 2^x + 4$?

<div class="upper-alpha" markdown>
1. $y = 2$
2. $y = 0$
3. $y = 4$
4. $x = 0$
</div>

??? question "Show Answer"
    The correct answer is **C**. The basic exponential $2^x$ has a horizontal asymptote at $y = 0$. Adding $4$ shifts the entire graph up by $4$ units, moving the asymptote to $y = 4$. As $x \to -\infty$, $2^x \to 0$, so $f(x) \to 0 + 4 = 4$. Note that option D represents a vertical line, not a horizontal asymptote.

    **Concept Tested:** Graphing Exponentials

---

#### 10. Which condition must the base $a$ of an exponential function $f(x) = a^x$ satisfy?

<div class="upper-alpha" markdown>
1. $a > 0$ and $a \neq 1$
2. $a$ can be any real number
3. $a > 1$ only
4. $a$ must be a whole number
</div>

??? question "Show Answer"
    The correct answer is **A**. The base must be positive (so that $a^x$ is defined for all real $x$ — otherwise negative bases raised to fractional exponents give complex numbers) and not equal to $1$ (because $1^x = 1$ is just a constant function, not a true exponential). So the valid range is $a > 0$ and $a \neq 1$. Bases in both $(0, 1)$ and $(1, \infty)$ are acceptable, giving decay and growth respectively.

    **Concept Tested:** Base of an Exponential

---
