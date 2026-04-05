# Quiz: Logarithmic Functions

Test your understanding of logarithms, logarithm laws, and solving log equations with these review questions.

---

#### 1. Rewrite $\log_3 81 = 4$ in exponential form.

<div class="upper-alpha" markdown>
1. $4^3 = 81$
2. $3^4 = 81$
3. $81^3 = 4$
4. $3^{81} = 4$
</div>

??? question "Show Answer"
    The correct answer is **B**. The log-exponential conversion is: $\log_a x = y \iff a^y = x$. Here the base is $3$, the result (exponent) is $4$, and the argument is $81$. So $3^4 = 81$. A common mistake is to swap the roles of base and argument. Remember: the base of the log becomes the base of the power, and the log's value becomes the exponent.

    **Concept Tested:** Log-Exponential Inverse

---

#### 2. What is $\log_2 32$?

<div class="upper-alpha" markdown>
1. $4$
2. $5$
3. $16$
4. $6$
</div>

??? question "Show Answer"
    The correct answer is **B**. $\log_2 32$ asks: "To what power must $2$ be raised to get $32$?" Since $2^5 = 32$, the answer is $5$. Working in increments: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$. Counting the powers of $2$ up to $32$ is a reliable way to verify.

    **Concept Tested:** Logarithmic Function

---

#### 3. Which expression equals $\log(xy)$?

<div class="upper-alpha" markdown>
1. $\log x \cdot \log y$
2. $(\log x)(\log y)$
3. $\log x + \log y$
4. $\log x - \log y$
</div>

??? question "Show Answer"
    The correct answer is **C**. The product rule of logarithms states that $\log(mn) = \log m + \log n$ — the log of a product equals the sum of the logs. A very common mistake is to think the log of a product is the product of the logs (options A/B). Remember: logs convert multiplication into addition, which is their historic superpower for simplifying calculations.

    **Concept Tested:** Logarithm Laws

---

#### 4. Which logarithm is the natural logarithm?

<div class="upper-alpha" markdown>
1. $\log_{10} x$
2. $\log_2 x$
3. $\ln x$
4. $\log x$
</div>

??? question "Show Answer"
    The correct answer is **C**. The natural logarithm uses Euler's number $e$ as its base and is written $\ln x$, which is shorthand for $\log_e x$. Option A and D are both the common logarithm (base $10$) — in fact $\log x$ without a subscript means $\log_{10} x$. Option B is base $2$, sometimes called the binary logarithm.

    **Concept Tested:** Natural Logarithm

---

#### 5. Solve $2^x = 20$ using logarithms. Which expression gives $x$?

<div class="upper-alpha" markdown>
1. $x = \frac{\log 20}{\log 2}$
2. $x = \log 20 - \log 2$
3. $x = \log 20 \cdot \log 2$
4. $x = \frac{20}{2}$
</div>

??? question "Show Answer"
    The correct answer is **A**. Take the log of both sides: $\log(2^x) = \log 20$. By the power rule, $x \log 2 = \log 20$. Divide by $\log 2$: $x = \frac{\log 20}{\log 2} \approx 4.32$. This is essentially the change of base formula: $x = \log_2 20$. Option B incorrectly applies the quotient rule; option D incorrectly treats the exponential as simple division.

    **Concept Tested:** Solving Log Equations

---

#### 6. What is the $x$-intercept of $f(x) = \log_5 x$?

<div class="upper-alpha" markdown>
1. $(1, 0)$
2. $(0, 0)$
3. $(5, 0)$
4. $(0, 1)$
</div>

??? question "Show Answer"
    The correct answer is **A**. For any base $a$, $\log_a 1 = 0$ because $a^0 = 1$. So the graph of $f(x) = \log_a x$ always crosses the $x$-axis at $x = 1$, giving the point $(1, 0)$. The graph has a vertical asymptote at $x = 0$, so there is no point on the $y$-axis. This is a key feature shared by all logarithmic functions.

    **Concept Tested:** Graphing Logarithms

---

#### 7. Simplify $\log_3 54 - \log_3 6$.

<div class="upper-alpha" markdown>
1. $9$
2. $48$
3. $2$
4. $3$
</div>

??? question "Show Answer"
    The correct answer is **C**. Using the quotient rule: $\log_3 54 - \log_3 6 = \log_3 \frac{54}{6} = \log_3 9 = 2$ (since $3^2 = 9$). Don't subtract the arguments directly (option B gives $48$, which is wrong). The quotient rule converts subtraction of logs into division of arguments.

    **Concept Tested:** Logarithm Laws

---

#### 8. Using change of base, express $\log_4 50$ in terms of common logarithms.

<div class="upper-alpha" markdown>
1. $\log 50 \cdot \log 4$
2. $\log 50 - \log 4$
3. $\log 50 + \log 4$
4. $\frac{\log 50}{\log 4}$
</div>

??? question "Show Answer"
    The correct answer is **D**. The change of base rule states $\log_a x = \frac{\log_b x}{\log_b a}$. Applying with $a = 4$, $x = 50$, and $b = 10$: $\log_4 50 = \frac{\log 50}{\log 4}$. This lets you evaluate any logarithm using a calculator's LOG button. Numerically, $\log_4 50 \approx \frac{1.699}{0.602} \approx 2.822$.

    **Concept Tested:** Change of Base Rule

---

#### 9. A magnitude $6$ earthquake is how many times more intense than a magnitude $4$?

<div class="upper-alpha" markdown>
1. $2$ times
2. $20$ times
3. $1000$ times
4. $100$ times
</div>

??? question "Show Answer"
    The correct answer is **D**. The Richter scale is logarithmic: each whole-number increase represents a $10$-fold increase in intensity. The difference between magnitudes $6$ and $4$ is $2$ units, so the intensity ratio is $10^2 = 100$. Logarithmic scales compress huge ranges, so small differences in magnitude mean large differences in actual intensity — this is why a magnitude $8$ quake is so catastrophic.

    **Concept Tested:** Logarithmic Scale

---

#### 10. Solve $\log_2(x - 1) = 3$.

<div class="upper-alpha" markdown>
1. $x = 7$
2. $x = 9$
3. $x = 4$
4. $x = 10$
</div>

??? question "Show Answer"
    The correct answer is **B**. Convert to exponential form: $\log_2(x - 1) = 3$ means $2^3 = x - 1$, so $8 = x - 1$ and $x = 9$. Verify: $\log_2(9 - 1) = \log_2 8 = 3$. ✓ Remember that log equations must be checked to ensure the argument is positive; here $x - 1 = 8 > 0$, so the solution is valid.

    **Concept Tested:** Solving Log Equations

---
