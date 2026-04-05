# Quiz: Modeling and Applications

Test your understanding of mathematical modeling, regression, interpolation, and real-world function applications with these review questions.

---

#### 1. Which stage of the mathematical modeling cycle involves translating the mathematical results back into real-world meaning?

<div class="upper-alpha" markdown>
1. Formulate
2. Solve
3. Interpret
4. Validate
</div>

??? question "Show Answer"
    The correct answer is **C**. The four stages of the modeling cycle are: Formulate (set up the problem and choose a function type), Solve (perform the mathematics), Interpret (translate the math back to real-world meaning), and Validate (check predictions against data). Interpretation is what turns abstract numbers into actionable insight — it's where the model connects back to the context that motivated it.

    **Concept Tested:** Mathematical Modeling Cycle

---

#### 2. A dataset shows values that rapidly increase and then level off. Which regression model is most appropriate?

<div class="upper-alpha" markdown>
1. Logarithmic
2. Linear
3. Exponential
4. Quadratic
</div>

??? question "Show Answer"
    The correct answer is **A**. Logarithmic functions rise quickly at first, then flatten as the input grows large — this matches the described pattern. Linear models have constant slope, exponential models grow faster and faster (not leveling off), and quadratic models eventually turn back down. Diminishing returns is a classic logarithmic pattern found in learning curves and saturation phenomena.

    **Concept Tested:** Regression Model

---

#### 3. You have data collected for $x$ ranging from $0$ to $10$. Using your model to predict the value at $x = 15$ is called:

<div class="upper-alpha" markdown>
1. Interpolation
2. Extrapolation
3. Regression
4. Validation
</div>

??? question "Show Answer"
    The correct answer is **B**. Extrapolation means predicting outside the range of observed data. Since $x = 15$ is beyond the upper limit of $10$, this is extrapolation — and it should be treated with caution, since trends observed in one range may not continue outside it. Interpolation (option A) predicts within the data range and is generally more reliable.

    **Concept Tested:** Extrapolation

---

#### 4. Which of the following is an exact value?

<div class="upper-alpha" markdown>
1. $3.14$
2. $1.414$
3. $2.718$
4. $\sqrt{2}$
</div>

??? question "Show Answer"
    The correct answer is **D**. An exact value is expressed precisely with no rounding. $\sqrt{2}$ is an exact representation of an irrational number. Options A, B, and C are rounded approximations of $\pi$, $\sqrt{2}$, and $e$ respectively. In IB, you should keep exact values through intermediate calculations and round only the final answer.

    **Concept Tested:** Exact vs Approximate

---

#### 5. A bacteria population doubles every hour. Which function family best models this?

<div class="upper-alpha" markdown>
1. Linear
2. Exponential
3. Quadratic
4. Logarithmic
</div>

??? question "Show Answer"
    The correct answer is **B**. "Doubles every hour" means the population is multiplied by a constant factor per unit time — the defining feature of exponential growth. A linear model would add a constant amount each hour, not multiply. The model is $P(t) = P_0 \cdot 2^t$. Any situation involving repeated multiplication (compound interest, radioactive decay, population growth) is best captured by an exponential function.

    **Concept Tested:** Curve Fitting

---

#### 6. A tap fills a bucket at $2$ litres per minute. How many litres does it fill in $1.5$ hours?

<div class="upper-alpha" markdown>
1. $3$
2. $90$
3. $180$
4. $45$
</div>

??? question "Show Answer"
    The correct answer is **C**. Convert units carefully: $1.5$ hours $= 90$ minutes. Then volume $= 2$ L/min $\times 90$ min $= 180$ L. A common trap is to forget the unit conversion and compute $2 \times 1.5 = 3$ (option A), treating the time as if it were in minutes. Always check that time units match the rate units before multiplying.

    **Concept Tested:** Units and Dimensions

---

#### 7. The final stage of the modeling cycle, where predictions are compared against real data, is called:

<div class="upper-alpha" markdown>
1. Validate
2. Interpret
3. Formulate
4. Extrapolate
</div>

??? question "Show Answer"
    The correct answer is **A**. Validation compares model predictions to actual observations to determine whether the model is working. If predictions match reality, the model is trusted; if not, you return to an earlier stage to refine assumptions or try a different function family. Models are never perfect — they're useful approximations, and validation is how you ensure they remain useful.

    **Concept Tested:** Mathematical Modeling Cycle

---

#### 8. A scatter plot shows data points forming a U-shape. Which regression model is most appropriate?

<div class="upper-alpha" markdown>
1. Linear
2. Quadratic
3. Exponential
4. Logarithmic
</div>

??? question "Show Answer"
    The correct answer is **B**. A U-shape is the characteristic signature of a quadratic function (an upward-opening parabola). Linear models can't curve, exponential and logarithmic models are monotonic (always increasing or decreasing), so none of them can produce the turning point that a U-shape requires. A quadratic regression $y = ax^2 + bx + c$ with $a > 0$ produces the U-shape directly.

    **Concept Tested:** Curve Fitting

---

#### 9. A linear model $y = -3x + 50$ fits sales data for $x \in [0, 15]$. Which prediction involves extrapolation?

<div class="upper-alpha" markdown>
1. Predicting sales at $x = 5$
2. Predicting sales at $x = 10$
3. Predicting sales at $x = 20$
4. Predicting sales at $x = 12$
</div>

??? question "Show Answer"
    The correct answer is **C**. The model was fitted from data covering $x = 0$ to $x = 15$. Predicting at $x = 20$ means going beyond this range — that's extrapolation. The other three options are all interpolation (within the data range). Note that at $x = 20$ the model predicts $y = -3(20) + 50 = -10$, a negative value — this illustrates why extrapolation is risky, since negative sales are impossible.

    **Concept Tested:** Interpolation

---

#### 10. You fit a quadratic regression to data and predict the maximum profit occurs at $x = 47.3$ units. What should you do before reporting this result?

<div class="upper-alpha" markdown>
1. Round to the nearest hundred
2. Report $x = 47.3$ as the final answer without comment
3. Assume the model applies at all larger values
4. Check whether the prediction is within the range of your data and makes sense in context
</div>

??? question "Show Answer"
    The correct answer is **D**. A responsible modeler always validates predictions. If the maximum falls outside the data range, it's extrapolation and should be flagged. If it falls inside, interpolation is more reliable. You should also check whether the answer makes practical sense: can units be fractional? Does the model's assumptions still apply? Option B ignores interpretation, option A over-rounds, and option C ignores the dangers of extrapolation.

    **Concept Tested:** Mathematical Modeling Cycle

---
