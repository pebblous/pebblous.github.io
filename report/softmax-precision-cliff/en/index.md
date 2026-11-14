---
title: Softmax: The Textbook and PyTorch Get It Wrong in the Same Place
subtitle: The two bugs Google DeepMind researchers found appear when a model is very sure of the right answer, and at that moment the loss and the training signal both turn into 0.0
date: 2026-10-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Softmax: The Textbook and PyTorch Get It Wrong in the Same Place

_The two bugs Google DeepMind researchers found appear when a model is very sure of the right answer, and at that moment the loss and the training signal both turn into 0.0_

## Executive Summary

> [!callout]
> This article is about a paper claiming that the standard implementations of softmax and cross-entropy, the first equations anyone meets when learning deep learning, carry two numerical bugs. Three Google DeepMind researchers posted the nine-page note to arXiv on October 22, 2026. The moment a model becomes very sure of the right answer, the gradient on the correct class alone rounds to 0.0 while the rest stay positive. Gradients that should add up to zero no longer do. At that same moment the loss is 0.0 as well, so the instrument panel reads the best value it can show.

> The trigger sits where two numbers meet. How sure a model has to be before the bug starts is set by the mantissa bits of the floating-point format, and how far that confidence is allowed to grow is set by the epsilon inside the Adam optimizer. Under the defaults almost everyone uses, the two numbers cross by a narrow gap. The loss spikes this bug produces have carried a name for four years without carrying a cause. That name, given in 2022, is the slingshot mechanism.

> Everything above is what the paper showed, and what follows is this article's reading of it. The paper demonstrated harm only on toy modular-arithmetic tasks and wrote in its own conclusion that the conditions are "uncommon in standard large-scale training." Yet the reason most training runs are fine today is not that this layer was audited. It is that framework defaults quietly promote the loss computation to fp32. The routes that step outside those defaults in exchange for speed were named in public for the first time this week: low-precision loss, fused kernels, and compiled execution.

<!-- stat-card -->
**5.5** — The precision cliff in bf16 — Past this logit margin the bug begins. In probability terms that is 99.6% on the correct class, a confidence classifiers routinely reach late in training

<!-- stat-card -->
**18.4 vs 16.6** — Equilibrium margin at Adam's default vs. the fp32 cliff — The margin that ε=10⁻⁸ carries you to sits just past the cliff. One decimal place larger and it would not have crossed

<!-- stat-card -->
**61% → 23%** — Test accuracy on the task run without weight decay — a²+b² mod 97 at ε=10⁻¹⁶, around step 1250. The fixed implementation reaches 85% in the same place

<!-- stat-card -->
**0.000e+00** — Target gradient fp32 returns at vocabulary 32,000 and margin 30 — The true value computed in fp64 is 2.994e-09. This number comes from a report filed against a real training stack

## The Loss Reads Its Best Value and Stops

The paper is titled **A Fix for Softmax and Cross-Entropy**, and the authors are Jonathan T. Barron, Dan Gnanapragasam and Michael Tschannen. The title page lists all three at Google DeepMind. Version 1 went up on October 22, 2026, and version 2 four days later on the 26th. The body runs nine pages with no appendix. Every number in this article is taken from that second version.

Credit first. The paper covers two bugs, and **the first one is not its own discovery.** The paper says so in its own introduction.

"The first bug, identified by Prieto et al. (2025) as Softmax Collapse…"

The Prieto et al. paper went to arXiv in January 2025 and appeared at ICLR that year. The name and the diagnosis both came from there. What this paper adds is **the second bug, Softmax Cancellation** (the paper's own phrasing is "which we will call"), and **one implementation that fixes both at once**. On the first bug its contribution is a fix, not a rediscovery. Drop that distinction and a four-year lineage collapses into the credit of a single paper. Section 5 lays that lineage out across six points in time.

### 1.1. Past a Certain Confidence, the Loss Becomes 0.0

A classifier emits one score per class in its final layer. Those scores are called **logits**. Cross-entropy loss looks at how much larger the correct class's logit is than the rest, and the single number that records "how much larger" is the **logit margin**. Take the correct logit, then subtract the log of the summed exponentials of all the others.

m = zt − log Σj≠t ezj

Rewritten in terms of that margin, the loss takes a very simple form: the log of 1 plus e−m. The surer the model is about the right answer, the larger m grows and the closer e−m gets to zero. In human arithmetic the loss still stays above zero. In floating point it does not. Once e−m is small enough relative to 1, **1 + e−m simply rounds to 1.0**, and since log(1) = 0, the loss becomes exactly 0.0.

loss = log(1 + e−m) → log(1.0) = 0.0

The backward pass fails in the same spot. The gradient on the correct class is the probability the model assigned to it minus 1, and that probability is itself of the form 1 ÷ (1 + e−m), so it suffers the same rounding. 1.0 − 1 = 0.0. So **the loss is 0.0 and the gradient on the correct class is 0.0**. No warning, no NaN, no divergence.

The paper's example uses three logits. In fp32, feed in z = [9.0, −9.0, −9.0] with the first class as the target, and the standard implementation in JAX and optax parts ways with the paper's fixed one as follows.

| Implementation | Log-prob of the target | Loss | Target gradient |
| --- | --- | --- | --- |
| Standard (jax.nn, optax) | 0.0 | 0.0 | 0.0 |
| The paper's fixed implementation | −3.046e-8 | 3.046e-8 | −3.046e-8 |

Conditions are fp32, z = [9.0, −9.0, −9.0], with the first class as the target. On the same input the standard implementation records the target's log-probability as 0.0 and the fixed one as −3.046e-8. The gap between them is about three hundred-millionths, and that gap is the entire training signal.

### 1.2. The Real Problem Is Not That It Hit Zero but That Only One Side Did

One more step is needed before the character of this bug comes into view. What went to 0.0 is **the single slot for the correct class**. In the example above, the gradients in the other two slots survive intact at 1.523e-8 each. Cross-entropy gradients are supposed to add up to zero: the target slot pulls negative, the remaining slots push positive, and the two forces interlock exactly. Round one slot to zero and that balance breaks. That is precisely what the paper's abstract names as the consequence.

"…gradients that no longer sum to zero."

The surviving positives are tiny. Left alone, 1.523e-8 barely moves a weight. The damage comes next. Adam-family optimizers divide the gradient by a running average of its own magnitude, which **amplifies a signal that is small but one-sided into a full-size update**. With the brake on the target side gone, the remaining logits keep getting pushed down, the margin grows further, and the loss curve picks up the spikes we will see later.

**This is not vanishing gradients.** Vanishing gradients is the old problem of a signal shrinking as it propagates back through layers. What happens here is that the true values are already small, **one term alone** rounds to 0.0, and the sum breaks. Translating both into the same phrase leaves a reader picturing something else entirely. This article reserves "vanishing gradients" for the former and says "the gradients stop summing to zero" for the latter.

One reassuring detail is worth recording. The value 3.046e-8 that the fixed implementation returns shows up independently in three places: the body of the paper, the description on the PyTorch fix PR, and a third party's port that appears later in this article. Three separate implementations printing the same number at the same point means that at least there is no dispute about what the true value is.

## The Height of the Cliff Is Set by Mantissa Bits

The point where the rounding in section 1 occurs has a name. The paper calls that line the **precision cliff**. Once the margin goes past the cliff, the loss and the target gradient drop to 0.0. Some coverage renders it as "critical margin," but that phrasing is better avoided. The margin is the thing that crosses; the cliff is the line.

The height of the cliff is not a constant anyone has to memorize. One choice of number format fixes it. Floating point stores a value as "significand × a power of two," and how many bits go to the significand differs by format. When you add a very small number to 1 and that small number falls below the last place the mantissa bits can hold, the addition is erased entirely. Convert that boundary into margin terms and it comes out as the number of mantissa bits times ln2.

cliff height = mantissa bits × ln2

That one line was derived by Maaz, the author of the follow-up paper. Plug the formats in and it matches the three values Barron's team measured. In Maaz's own words, "These predicted thresholds line up with the numerical experiments of Barron et al. (2026)."

| Format | Mantissa bits | Cliff (as the paper writes it) | Derived value | Probability on the target there |
| --- | --- | --- | --- | --- |
| bf16 | 8 | 5.5 | 5.545 | 0.9959 |
| fp32 | 24 | 16.6 | 16.636 | 1 − 6.2×10⁻⁸ |
| fp64 | 53 | 36.7 | 36.737 | 1 − 1.2×10⁻¹⁶ |

The three values from the caption of the paper's Figure 1, placed next to the values derived from mantissa bits × ln2. The differing decimal places are not a disagreement, just the same quantity rounded two ways. The rightmost column is this article's own recalculation of the probability the model is assigning to the correct class at the cliff.

The far-right column says the most. In bf16 the confidence that reaches the cliff is **99.6%**. A model putting 99.6% on the right answer is utterly ordinary late in training. In fp32 the situation is completely different: the probability on the target has to sit within roughly six hundred-millionths of 1 before the cliff is reached. The mantissa only tripled in bits, yet the threshold of confidence moved more than sixty thousand times further away.

One caveat belongs here. The exact position of the cliff is not pinned down to one decimal place. The derived value shifts by about half a step depending on which rounding model you assume, and the measured value wobbles depending on the order in which the sum is accumulated. One developer who reran the experiment in NumPy independently of the paper measured the fp32 cliff at 16.0, and on re-measuring with varied inputs found values scattered between 15.8 and 16.7. His conclusion was that the location of the cliff is a property of your summation order more than of any natural constant. The number this article anchors to is the **16.6** the paper measured, with roughly one ln2 of wobble around it.

There is a second source of wobble. Not everyone uses the word margin to mean the same thing. The margin in this article subtracts the log of the summed exponentials of the non-target logits from the target logit. But the Liu et al. paper from May 2026, which proved this bug to be a consequence of floating point, uses a definition that subtracts only **the single largest** of the others. Measured with that ruler, the fp32 threshold becomes mantissa bits minus one, times ln2, which lands close to 16. So 16.6 and 16 are not conflicting measurements but the same line measured with two different rulers. That is why this article does not put them in one table.

fp16 is absent from the table because the paper did not cover it. bf16 and fp16 are both 16-bit, but their mantissas differ at 8 bits and 11 bits, so their cliffs stand in different places. This article does not derive and publish a value the paper never measured.

## Does the Margin Grow All the Way to the Cliff

With the height of the cliff known, one question remains. Over a real training run, does the margin really travel that far? If it does not, the cliff is just a line on a chart. And what decides where the margin stops is neither the loss function nor the data. It is **a single optimizer setting**.

Adam-family optimizers divide the gradient by a running average of its magnitude. To keep that division from blowing up at zero, a very small number is added to the denominator. That number is **ε**, and its default is usually 10⁻⁸. Turn on weight decay as well and the force growing the logits meets the force shrinking the weights, and the two balance at some point. Section 5 of the paper writes that stopping point, the equilibrium margin, as a single line. The smaller ε is, the further the margin travels.

equilibrium margin ≈ log(1 / ε)

Put in the default 10⁻⁸ and you get 18.4. The fp32 cliff is at 16.6. **Train with the default settings and the margin is set up to cross the cliff.** It crosses by a narrow gap, too. The sentence the paper leaves at that same spot is the coldest line in this article.

"…whereas for ϵ ≥ 10−7, log(1/ϵ) ≤ 16.1 < c32 and standard cross-entropy settles without spiking."

The c32 in that sentence is the fp32 cliff, 16.6. One decimal place larger on ε and nothing would have happened. Neither the people who chose the default nor the people who use it had any way to see this crossing. The two numbers come from different neighborhoods. One comes from the mantissa bits of a floating-point format, the other from a conventional value picked to avoid dividing by zero. Nobody had checked that the two meet on the same scale. The figure below is that scale.

The equilibrium-margin formula from section 5 of the paper and the cliff values from its Figure 1, placed on one scale. The orange lines above are the lines that must not be crossed; the black markers below are where training actually comes to rest. bf16 sits at the left end of the scale, hard to avoid at any ε, while fp32 is overshot by 1.8 at the default. At the far right the fp64 cliff at 36.7 and the ε=10⁻¹⁶ equilibrium margin at 36.8 nearly coincide, though an ε that small is rarely used.

bf16 is in worse shape. Avoiding the cliff at 5.5 would require an ε larger than 0.004, a value that rewrites Adam's denominator and turns training into a different algorithm. In Table 1 of the paper, the final margin for standard cross-entropy in bf16 stays at **5.1, 5.6 and 5.8** as ε drops from 10⁻⁸ to 10⁻¹² to 10⁻¹⁶. A margin that barely moves across three settings means it never traveled to where ε would have taken it. It stuck to the cliff instead.

One more line exists outside the paper, in a post the author put on X. The industry folklore that small ε is dangerous may in fact have been this bug all along. Weight decay and Adam's ε together set the ceiling on how far logits can grow, the author wrote, and the default 10⁻⁸ happens to land just past the point where the bug begins in fp32. Since that sentence lives in the author's post rather than in the paper, it is worth reading at a different grade of evidence than the paper's claims.

### 3.1. Four Years of Being Called by a Name Instead of a Cause

What appears on the training curve once the margin passes the cliff has been known since 2022. A paper by Thilak and five co-authors, posted to arXiv that June, gave the phenomenon the name **the slingshot mechanism**. Their observation was that training long enough with an adaptive optimizer produces repeated episodes where the loss suddenly jumps and comes back, and that grokking, the sudden onset of generalization, often follows right after. The authors wrote plainly in the abstract that they had not found the cause.

"…the Slingshot Mechanism does not follow from any known optimization theories that we are aware of, and can be easily overlooked without an in depth examination."

It took two years and seven months for an answer to attach itself to that sentence. Prieto et al. named Softmax Collapse as the cause in January 2025, and section 4 of this new paper ties the two together in a single sentence: the slingshot spikes are a direct consequence of Softmax Collapse. For four years what people were looking at was not the bug but the bug's shadow, and the shadow got named first.

Below are the paper's results from running the standard and the fixed implementation side by side on grokking tasks. Lifting the numbers out without their conditions would turn them into an exaggeration, so each row carries its task and settings.

| Task and settings | Standard cross-entropy | Fixed cross-entropy |
| --- | --- | --- |
| a+b mod 31 · with weight decay (λ=1) · ε=10⁻⁸ | 94 ± 5% | 100 ± 0% |
| a²+b² mod 97 · no weight decay (λ=0) · ε=10⁻¹⁶ | 61% → 23% | 85% |
| a³+b mod 97 · same settings | 60% → 21% | not reported in the paper |

All runs are fp32. The arrow in the middle row means test accuracy fell from 61% to 23% at the moment the margin reached the fp32 cliff, around step 1250. The bottom row is a different task under the same settings; the paper reports no value for the fixed implementation there, so the cell is left empty.

There are two ways to read this. First, in an ordinary setup with weight decay turned on, the loss is about 6 percentage points. Small, but 6 points available for free. Second, with weight decay and normalization both off, training climbs once and then collapses. The same bug swings between "slightly worse" and "everything lost" depending on conditions, which is why lifting out "accuracy drops from 61% to 23%" on its own makes the claim false. The fixed side reaching 85% rather than 100% has to be read along with it.

One more setting is missing from the table, and it is the one that explains the 2022 observation. The paper writes that whether a spike helps or hurts generalization depends on what is holding the network's weight norm in place. Put layer normalization in front of the output layer and use no weight decay, and growing the weights before it leaves the logits unchanged while shrinking only the effective learning rate. Every spike inflates the weight norm, and the learning rate gets trimmed by exactly that much on its own. That is the setup Thilak et al. and Prieto et al. were looking at. In that configuration the slingshot looked less like harm and more like an accidental learning-rate decay, which is how the bug's shadow sometimes read as a benefit for four years.

## A Student Identical to Its Teacher Gets Pushed Away

That was the first bug. The second is the one this paper names for the first time: **Softmax Cancellation**. It strikes somewhere else. Where the first arises when a model is confident about the right answer, the second arises **when two models produce almost the same answer**. Distillation is exactly that situation.

Distillation trains a small model (the student) to imitate the probability distribution of a large one (the teacher). Once the student has fully caught up, the two probabilities are equal, and the gradient formed from their difference should be exactly zero. Nothing left to learn means nothing left to move. That is the property that must not break, the invariant.

In floating point it breaks. Subtract two nearly equal numbers and the leading digits all cancel, leaving only the trailing digits as the result, and those trailing digits hold rounding residue rather than true value. It is an old trap in numerical analysis, old enough to have a name: catastrophic cancellation. One more thing compounds it here. The softmax in the forward pass and the log-softmax used in the backward pass should give mathematically identical values, but the implementations differ, so their last digits disagree. Subtracting those two disagreeing numbers is precisely the distillation gradient. What cancels is the leading digits; what remains is the disagreement itself.

The paper's example puts the teacher logits at [2.0, 1.0, 0.0] with the student standing one ten-millionth off. Here are the gradients the standard implementation returns next to the true values computed in fp64, which the fixed implementation also reproduces.

| Gradient term | Standard implementation | True value (fp64, fixed implementation) | How it went wrong |
| --- | --- | --- | --- |
| First | −5.960e-8 | −4.596e-8 | Magnitude inflated by 1.3x |
| Second | 1.452e-8 | 4.144e-8 | Shrunk by a factor of 2.85 |
| Third | −1.123e-9 | 4.513e-9 | Sign flipped |

Conditions are fp32, teacher logits [2.0, 1.0, 0.0], and student logits equal to those plus [−1e-7, 1e-7, 0]. The paper describes this as shrinking the second term by nearly 3x and flipping the sign of the third; dividing the two values directly confirms the factor as 2.85. The third term went from negative to positive, so it pushes against the direction training is supposed to go.

A student handed a gradient pointing the wrong way does not move closer to its teacher. It **gets pushed away from the teacher**. Training an already finished student further makes it worse. If the bug in section 1 lies to the instrument panel, this one turns the steering wheel the wrong way.

### 4.1. How Far It Gets Pushed Is Set by Precision

That said, repeating "the student gets pushed away" without conditions overstates it. Section 7 of the paper runs all three precisions and reports three different outcomes. In **bf16** the discrepancy sits around 10⁻³, and the student really does get pushed away from the teacher as test accuracy falls. In **fp32** the discrepancy is around 10⁻⁸, so the distance between the two distributions spikes once early in training and then stops descending at a floor near 10⁻⁶. In **fp64** the discrepancy is around 10⁻¹⁷, too small even to move weights stored in fp32. The only precision where the damage is visible in practice is bf16.

**The scale of the experiment belongs here.** The model in this distillation experiment is a two-layer ReLU multilayer perceptron, and the task is distilling a teacher that solves a+b mod 53 at 100% accuracy into a student with identical weights over 2,000 steps. Temperature 4, learning rate 2×10⁻³, no weight decay, ε=10⁻⁸. Every experiment in the paper is a modular-arithmetic task of this kind. There is not one language-model-scale run and not one run on a real dataset. That is why section 6 of this article states the scope of the demonstrated harm separately.

## A Fix of a Fix of a Fix

Before laying out the lineage, it is worth seeing what this paper's fix actually does. Both prescriptions come from one principle: **never add 1**. The loss hit 0.0 in section 1 because the implementation physically constructed 1 + e−m, and the paper rewrites the computation so that addition never appears in the expression at all. It pins the largest logit at 0, collects only the remaining terms to obtain the margin m, then computes the loss directly with softplus. Softplus is the function that evaluates log(1 + ex) without ever forming 1 + ex. The gradient follows the same route and remains in the form −e−m ÷ (1 + e−m). Even if the denominator rounds to 1.0, the e−m in the numerator is not erased, so dividing by 1.0 leaves exactly the true value. In fp32 this form holds until the margin reaches about 88, where the exponent range itself runs out.

Pebblous original diagram (Fig. reinterpretation) — two routes to the same loss formula. The standard implementation on the left physically constructs the intermediate value 1 + e⁻ᵐ, and e⁻ᵐ gets rounded away inside it. The paper's fix on the right uses softplus to erase that intermediate value from the expression itself, preserving the same small value all the way through. Both routes compute the same number mathematically; in floating point, the route decides the result.

The cancellation in section 4 yields to the same principle. Instead of subtracting the student's and teacher's probabilities directly, the fix takes the ratio of the two in log space and recovers the difference there using expm1 and log1p. Both functions exist precisely to erase the place where a 1 would be added or subtracted. A final term then adjusts the gradients so they sum to zero. That way, when student and teacher become exactly equal, the gradient becomes exactly zero.

The paper's abstract states the effect of both fixes in one sentence, and a clause easy to skim past is attached to it.

"Rewriting these functions in log space using softplus, expm1, and log1p restores accurate, zero-sum gradients across bf16, fp32, and fp64 without internally casting to higher precision."

That closing clause matters. The autocast machinery we will meet in section 6 promotes only the loss computation to fp32 and pushes the cliff further out. This fix leaves the working precision exactly where it is and changes the expression instead. The former routes around the bug; the latter removes it.

The history of this bug is not one paper's discovery story. Over four years, humans and machines took turns entering six times, and **each pass fixed something and left something behind.** What one pass left behind is what the next one found. Here are the six points in time.

| When | Who | What they found | What they left behind |
| --- | --- | --- | --- |
| 2022-06 | Thilak et al. (human) | Named the loss spikes the slingshot mechanism and studied them empirically | Could not find the cause, and said so in the abstract |
| 2025-01 | Prieto et al. (human) | Identified the cause as Softmax Collapse and gave it that name | Offered StableMax as a replacement, but being linear instead of exponential it lets the margin run away into four digits, from 2,322 to 21,252 |
| 2026-05 | Liu et al. (human) | Proved the bug to be a consequence of floating-point limits and derived the threshold formula | Proposed subtracting the mean from the gradient, which drops accuracy to 48.9% in small-ε settings |
| 2026-10-22 | Barron et al. (Google DeepMind) | Found Softmax Cancellation and shipped one implementation that fixes both bugs | Gradients become NaN on a row whose values are all −∞ |
| 2026-10-27 | Maaz (human plus property-based testing) | Rediscovered that NaN from one property alone: the rows of the Jacobian sum to zero | Fixed it by swapping one function, and noted himself that the method is not a new idea |
| 2026-10-27 | Astra (AI reviewer) | Caught an overflow in the PyTorch port where finite inputs produce infinity | Being a review, it carries no code, and that PR is still a draft |

The "left behind" column is a starting point for the next entry, not an accusation. The middle three rows were all attempts to fix the loss function, and all three left a side effect of their own. The gaps are worth noting too. Two years and seven months separate the first two, one year and nine months separate the second and the fourth, and the last three all happened **within five days**.

The two middle entries deserve a little more. The StableMax that Prieto et al. introduced replaces the exponential with a piecewise rational function and so avoids Softmax Collapse outright. The cost is that probability now decays only linearly in the logits, so reaching the same confidence requires the logits to spread much wider. That is why StableMax's final margins in Table 1 of the paper run to four digits. The Liu et al. correction subtracts the mean from the gradient vector to force the sum back to zero, but when the target gradient has already rounded to zero, subtracting the mean leaves the target with only −1/K of the total from the rest. In Table 1 that configuration's accuracy falls below half.

### 5.1. Finder, Fixer and Breaker Were All Half Machine

This episode has a second storyline that never made it into the paper. According to a post the author put on X, **the bug was first found and fixed by Gemini Flash 3.7**, most of the paper's experiments were run by Flash 3.8, and the first draft and the figures were written by Gemini 4 Argon. The author added that he reworked that draft obsessively, that the content got stronger, and that the prose did not. The primary source for this claim is the author's post rather than the paper, and it is corroborated once more by the follow-up paper, whose background section records that "They claim that these issues were found and fixed using Gemini Flash 3.7."

The PyTorch side looks similar. Three days after the paper went up, a user filed an issue on the PyTorch repository asking for the fix to be adopted, and on the fourth day a maintainer opened a PR. The diff in that PR was written by an agent, not a person. The maintainer's only comment on the issue describes the situation exactly.

"I'm noodling on …/pull/202049 but the agent generated an annoyingly long diff so I'm still reading it"

All five review comments on that PR open with a header saying they were posted by an AI assistant named Astra on the maintainer's behalf. And one of those five caught **a real bug no human had seen**. In fp32, with logits [1, 0, 0] and a backward input of [2e38, −1.75e38, −1.75e38], a newly added branch overflows to negative infinity in an intermediate step and the first gradient comes out as infinity. The true value computed in fp64 is 2.8641753e38, which sits comfortably inside the range fp32 can represent. A perfectly representable answer was turned into infinity.

The timestamps are sharp. The five reviews went up at 15:15 and 15:17 on October 27, and a commit labeled as addressing review comments landed 1 hour and 37 minutes later at 16:52. The PR description updated at 18:21 that day explains that a sign condition and a finiteness condition now block the overflow. The commit message does not say which review it answers, so nothing can be asserted beyond this: **a commit addressing the reviews landed less than two hours after they were posted**.

The reverse case happened the same week. Maaz, author of the follow-up paper, found the NaN in Barron's implementation using property-based testing: write down the properties a function must uphold on any input, then let a tool hunt automatically for counterexamples. The inputs the tool produced to break two properties were [0.0, 37.0] and **[0.0, 1.0]**. The first is an extreme value whose margin of 37 exceeds the fp64 cliff at 36.737. The second is an ordinary vector that could appear in any textbook. A human-built tool broke a machine-written fix, and the lineage of that tool runs back to QuickCheck in 2000 and Hypothesis in 2019. Maaz himself wrote a 2025 paper on pairing that tool with agents to find bugs in libraries, and here he pointed the method at the softmax fix.

So this section takes no side. The bug a machine found was real, the diff a machine wrote was too long for a human to finish reading, the review a machine performed caught an overflow a human missed, a human-built tool broke the machine's fix, and the two earlier human corrections each left a side effect. All six entries are facts.

### 5.2. All Six Found It Through an Invariant, Not a Metric

The common thread lies elsewhere. The method of discovery was the same in all six entries. Nobody started from "accuracy dropped, so something is wrong." Each brought along one property that must not break. **Do the gradients sum to zero? If student and teacher match, is the gradient zero? Do the rows of the Jacobian sum to zero? Does a finite input yield a finite output?** None of the four asks whether the model is doing well. All four ask whether the arithmetic is keeping its own promise. What average scores never revealed showed up in that one line.

One last quiet detail. The method Maaz used to repair the NaN in Barron's implementation was already known in numerical analysis, and the source he cites is a 2021 paper in a numerical analysis journal on computing log-sum-exp and softmax. Both papers cite it. The max-subtraction stabilization trick and the function swap used here were both in that paper five years ago. Five years from a numerical analysis journal to a deep learning loss function.

## So Who Is Exposed Right Now

Saying a bug exists is not the same as saying your training run is wrong today. The clearest line on that was drawn by the paper itself, in its concluding paragraph.

"Though the extreme margins and near-zero student–teacher gaps probed by our experiments are uncommon in standard large-scale training, our fixed functions are easy drop-in replacements…"

Write this article without that sentence and it becomes scaremongering. Read only that sentence and close the tab, and you miss the other half. **The trigger is common; the demonstrated harm exists only on toy tasks.** That single line sets the register of this entire article. What follows is where that trigger is laid, confirmed against primary documents.

### 6.1. The Defaults Have Been Shielding You

In the table from section 2, the bf16 cliff at 5.5 corresponds to a probability of 99.6% on the correct class, a level of confidence common for a classifier late in training. There is a reason most runs are fine anyway. PyTorch's autocast picks a precision per operation during mixed-precision training, and the official documentation's **list of operations that are promoted to fp32** contains cross-entropy, log-softmax and softmax, all three. So even when a user trains in bf16, the loss computation alone is promoted to fp32. The cliff moves from 5.5 to 16.6.

**Fact and interpretation, separated.** The fact is only that those operations appear on the list. The PyTorch documentation never states why the list was drawn that way. So writing "they were placed there out of concern for numerical stability" is a plausible guess the documentation does not underwrite. One sentence is verifiable: being on the list, they end up avoiding the bf16 cliff.

### 6.2. The Routes Outside the Defaults Now Have Names

What is exposed, then, is whatever leaves the defaults. And the list of those routes is not guesswork. It comes from the exclusion list the PyTorch fix PR wrote for itself. Even once the fix merges, the paths named there keep the old numerics.

| Route | Where it stands today | Evidence |
| --- | --- | --- |
| Ordinary training inside autocast | The loss is promoted to fp32 and avoids the bf16 cliff | PyTorch autocast documentation |
| Loss computed in bf16 outside autocast | Stands directly on the cliff at 5.5 | The author of the PyTorch issue hit it and wrote that he worked around it by moving to fp32 |
| fp32 with Adam's default ε | An equilibrium margin of 18.4 crosses the cliff at 16.6 | Section 5 of the paper |
| Compiled execution (torch.compile) | Keeps the old numerics even after the PR merges | Exclusion list in the PR description |
| Apple Silicon (MPS), XPU, Vulkan, Metal and others | Outside the scope of the fix | Exclusion list in the PR description |
| Fused and chunked cross-entropy paths | Out of scope because they compute the normalization term themselves | The PR description names that path and excludes it |

Only the first row is on the safe side; every other row is outside the defaults. They share something. The routes on the exclusion list are mostly **routes built to go faster**: faster by compiling, faster by fusing kernels, faster by dropping precision.

Everything to this point is possibility. In the week the paper appeared, the possibility acquired names. Three frameworks used for large language model training received reports that the log-probability and gradient of a confident correct token go to exactly zero, with the files and functions named.

| Repository | Location named | Status |
| --- | --- | --- |
| torchtitan | The loss-parallel cross-entropy function. The report notes that the per-token log-probability computation for reinforcement learning, which reuses the same function, is affected the same way | Open |
| verl | Two log-probability functions and the Triton fused linear cross-entropy kernel. The report states that the bf16 branch already rounds at a margin of 5.5 | Open |
| prime-rl | The chunked log-probability and entropy functions for reinforcement learning, and the chunked cross-entropy function for supervised fine-tuning | Open |

The reproduction code in all three reports takes the same shape. Set up a vocabulary of 32,000 where the correct logit leads the rest by 30, and in fp32 the loss, the log-probability and the target gradient all read **0.000e+00**, leaving only the sum of the remaining gradients at 2.994e-09. The true values computed in fp64 are −2.994e-09 on the target and 2.994e-09 for the rest. At a vocabulary of 32,000, a margin of 30 is common.

**Three caveats have to travel with these reports.** First, all three were filed by **the same person**, two of them one second apart. This is not "three teams each found it" but one person locating the same spot across three stacks. Second, the reproduction code uses hand-constructed logits, **not a record of a training run that broke.** Third, the four accompanying fix PRs are **all unmerged** as of this writing. These reports still matter for one reason. The condition the paper called uncommon is routine rather than exceptional in per-token log-probabilities for reinforcement learning and in fused language model heads, and the names of those paths were written down in public for the first time.

JAX is a different story again. JAX has no autocast, so the precision the loss is computed in is entirely whatever the user wrote. And the paper's own worked example from section 1 was a scene of 0.0 coming out of JAX and optax. Even so, neither repository has a single issue or PR citing this paper yet.

### 6.3. Who Pays for the Fix

The price on the fixing side has to be counted too. The paper's conclusion says the fix can be implemented "without meaningful slowdown." The kernel measurements posted on the PyTorch PR are more varied than that. On a large GPU, the log-softmax forward pass slows by 1.03x in fp32 and 1.15x in bf16, and cross-entropy forward plus backward comes to 1.02x and 1.10x. CPU lands between 1.0x and 1.3x. But **isolate the log-softmax backward pass alone and it rises to as much as 1.7x**. x86 was not measured.

Lined up together, the three figures broadly support the paper's claim while showing its edges. And the sharpest observation came from the AI reviewer: as currently designed, compiled execution does not receive the fix and carries the bug forward, while eager execution pays the reported slowdown. **One side pays the cost and the other side never collects the benefit.**

### 6.4. The Large-Scale Evidence Sits in the Next Neighborhood

So is there no case yet where the harm was measured in a large training run? For Softmax Collapse, no. But there is one **very close by**. A different paper posted on September 28, 24 days before this one, reported a broken conservation law in bf16 attention. While pretraining a 450-million-parameter model on 50 billion tokens, the gradient norm jumped by a factor of 1000 at the 25-billion-token mark, and the final loss came out 0.2 nats worse than the fp32 run. Throughout, **not a single NaN appeared.** Here is the sentence that paper's abstract names as part of the cause.

"The remaining error comes from a broken conservation law. The softmax score gradient sums to zero along every row… rounding it to BF16 leaves a small nonzero sum that leaks the mean key into the gradient."

This must not be read as the same bug. **The broken invariant is the same; the reason it breaks is not.** That case is not about 1 + e⁻ᵐ rounding to 1. It is about the row sum leaking after a cast to bf16. Still, putting the two side by side fixes the register of this article. What happens in large-scale training when one softmax invariant breaks has already been measured, in the operation right next door. And there too, no warning fired.

### 6.5. No Mainstream Framework Has Merged the Fix

Counting the state of the ecosystem as of October 29, 2026, a week after the paper appeared: the PyTorch issue is open with a single comment. The fix PR sits in draft, unmerged. The Hacker News thread has 19 points and one comment. Across all of GitHub, 51 issues and PRs cite this paper's number. **Among mainstream Python frameworks, zero have merged the fix.** The places that merged it are two Rust reimplementations owned by one person and a Go library.

Public testimony amounting to "we hit this in our own training" stands at one. The user who filed the PyTorch issue wrote that he hit Softmax Collapse in bf16 and worked around it by moving the loss computation alone to fp32. The rest of the public activity is reproductions, ports and reports, all posted by a handful of individuals. The independent reproduction from section 2 appeared on a personal blog, and the porting repositories carry star counts in the single digits to the low teens.

None of this has to be read as laziness. Changing the numerics of a loss function shifts every user's training results slightly, the same expression has to be transplanted across hundreds of backends and compilation paths, and a human has to finish reading a 700-line diff an agent wrote. **Stated purely as facts about speed:** in the week since the bug went public, the academic rebuttal, the reproduction and the follow-up paper all arrived within five days, and the fix in the standard library is still a draft.

## Why Pebblous Is Watching

There is a reason Pebblous spent this long on a numerical analysis paper. When a model performs badly, the first thing we suspect is almost always the data. That suspicion is usually right. The problem is what comes after it.

### 7.1. The Question of Readiness Has One More Layer Beneath It

AI-Ready Data asks whether a dataset is in a usable state. This episode exposes one more layer underneath that question. **Is the arithmetic that transcribes that data into numbers in a usable state?** And the safety of that layer was never guaranteed by design. As section 6 showed, a default was promoting the loss to fp32, and the documentation does not even record why. Step outside the defaults in pursuit of performance and the guarantee leaves with you. The structure is identical on the data side. The faster the path, the more checks it skips, and the skipped checks are recorded nowhere.

### 7.2. What "The Data Was Fine" Needs in Order to Mean Something

The most common sentence in data quality verdicts is "we looked at the data and it was fine." For that sentence to mean "the data is not the culprit," there has to be separate evidence that the other layers are clean. In this episode that evidence was **"because it is the standard implementation."** And as section 5 showed, that evidence was slightly wrong six times in a row. For a data quality report to mean anything, it needs a field recording the assumptions of the arithmetic layer: what precision the loss was computed in, which kernel it went through, whether it was a compiled path. No data quality report today has that field.

This axis connects to two earlier pieces on the Pebblous blog, with a different question each time. [The piece on publishing weights, data and recipe and still not getting the same model](/blog/open-1b-auditable-training-run/en/) was about floating point breaking **reproducibility**. This one is not about failing to get the same number. It is about **getting a wrong number**. [The piece arguing that the bottleneck in the AI era is verification rather than generation](/report/ai-driven-discovery-verification/en/) asked whether verification was present at all. In this subject verification was present six times. Something was left behind on every one of them.

### 7.3. Four Checks You Can Run Today

If you run training yourself, there are four things you can check today, and none of the four needs a new tool.

- Check whether the loss is being computed in low precision outside autocast. That is exactly what the author of the PyTorch issue hit.
- Count whether any **step shows a loss of exactly 0.0** during training. If one does, that may be the cliff rather than convergence.
- If you distill, watch whether the distance between the two distributions hits a floor and stops descending once the student has closed in on the teacher.
- If you use reinforcement learning fine-tuning or a fused language model head, count how many **tokens record a log-probability of exactly 0.0**. That is the spot the reports in section 6 named.

None of the four inspects a score. All four check **whether something that must not break has broken**.

### 7.4. The Place That Asks About Invariants Rather Than Metrics

The common thread from section 5 overlaps with where Pebblous stands. All six entries carried an invariant instead of a performance metric. Do the gradients sum to zero, is the gradient zero when student and teacher match, does a finite input yield a finite output. The equivalent position on the data side is not the one asking whether the distribution looks good. It is **the one asking whether a property that must not break has broken**. That is where Pebblous means to stand.

So this article ends on one point. **"We verified it" only means something once you say which layer you verified down to.** We looked at the data. We looked at the model architecture. Who looked at the implementation of the loss function? And at the cliff the floating-point format brings with it, one layer below that?

The numbers in this article were checked against the second version of the paper, the follow-up paper, and the original text of the PyTorch issue and PR, and the ratios and probabilities were recomputed. What could not be confirmed is recorded too. The author's post on X could not be reached on its original page, so this article relied on the English text obtained through a mirror, which is why section 5 uses indirect speech rather than quotation marks. Among fused cross-entropy kernels, the only ones this article can name on the record are verl, which filed its own report, and PyTorch, which wrote the exclusion list into its own PR; whether other kernels stand on the fp32 cliff is not something this article rules on. Sections 1 through 6 are what the primary sources say, and section 7 is Pebblous's reading, so please read them apart. Thank you for reading this far.

## References

The sources come at different grades of evidence, so they are split into three groups. The first holds the academic literature the article's numbers came from, the second holds code, issues and official documentation, and the third holds adjacent Pebblous pieces that approached the same question along a different axis.

### Academic literature

- 1.Barron, J. T., Gnanapragasam, D., Tschannen, M. (2026). **A Fix for Softmax and Cross-Entropy.** arXiv:2610.31642. v1 2026-10-22, v2 2026-10-26. The numbers in sections 1, 2, 3, 4 and 6 come from the body of the second version. [arxiv.org](https://arxiv.org/abs/2610.31642)
- 2.Maaz, M. (2026). **Property-Based Testing for Robust Softmax and Cross-Entropy.** arXiv:2610.36427 v1, 2026-10-27. Source of the cliff-height derivation, the NaN counterexample and the function swap. [arxiv.org](https://arxiv.org/abs/2610.36427)
- 3.Prieto, L., Barsbey, M., Mediano, P. A. M., Birdal, T. (2025). **Grokking at the Edge of Numerical Stability.** ICLR 2025, arXiv:2501.04697. The paper that named Softmax Collapse. [arxiv.org](https://arxiv.org/abs/2501.04697)
- 4.Liu et al. (2026). **Grokking or Glitching? How Low-Precision Drives Slingshot Loss Spikes.** arXiv:2605.06152. Proved the bug to be a consequence of floating point and proposed zero-sum projection. [arxiv.org](https://arxiv.org/abs/2605.06152)
- 5.Thilak, V., Littwin, E., Zhai, S., Saremi, O., Paiss, R., Susskind, J. (2022). **The Slingshot Mechanism: An Empirical Study of Adaptive Optimizers and the Grokking Phenomenon.** arXiv:2206.04817. The verbatim quotation in section 3.1 comes from this abstract. [arxiv.org](https://arxiv.org/abs/2206.04817)
- 6.Blanchard, P., Higham, D. J., Higham, N. J. (2021). **Accurately computing the log-sum-exp and softmax functions.** IMA Journal of Numerical Analysis 41(4):2311–2330. The numerical analysis reference both papers cite, and the source of the irony in section 5.2.
- 7.Twelve authors (2026). **Broken Symmetry in BF16 Attention.** arXiv:2609.34272, 2026-09-28. The large-scale measurement in section 6.4 comes from this abstract. It has to be read with the caveat attached: **same invariant, different mechanism**. [arxiv.org](https://arxiv.org/abs/2609.34272)
- 8.Qiu, Z., Yao, A. (2026). **Why Low-Precision Transformer Training Fails: An Analysis on Flash Attention.** ICLR 2026, arXiv:2510.04212. The Barron paper cites this as evidence that the same bug affects standalone softmax. The mechanism in this paper's body is low-rank representation plus biased rounding in bf16 accumulation, which is a different story. **That is why this article does not lean on the citation to claim spread into attention.** [arxiv.org](https://arxiv.org/abs/2510.04212)
- 9.Maaz, M., DeVoe, J., Hatfield-Dodds, Z., Carlini, N. (2025). **Agentic property-based testing.** arXiv:2510.09907, NeurIPS 2025 DL4C workshop. The lineage of the tool in section 5.1. Above it sit Claessen & Hughes's QuickCheck (ICFP 2000) and MacIver et al.'s Hypothesis (JOSS 4(43):1891, 2019). [arxiv.org](https://arxiv.org/abs/2510.09907)

### Code, issues and official documentation

- 10.PyTorch issue **#201986** (2026-10-25, a feature request filed by a third party, open) and fix PR **#202049** (2026-10-26, draft, unmerged). The exclusion list, the kernel benchmarks, the five Astra reviews and the maintainer's comment all live in these two threads. [github.com](https://github.com/pytorch/pytorch/issues/201986)
- 11.PyTorch **torch.amp documentation** — the "CUDA Ops that can autocast to float32" list. The basis for section 6.1, and where the caveat that the docs give no reason was confirmed. [docs.pytorch.org](https://docs.pytorch.org/docs/stable/amp.html)
- 12.Three reports against training stacks — **torchtitan #5623, verl #8376, prime-rl #4271** (2026-10-25 to 26, all open) and the four fix PRs attached to them (#5624, #8377, #8378, #4272, all unmerged). The table and reproduction figures in section 6.2 come from the text of these reports. All three were filed by the same person.
- 13.Independent ports and reimplementations — mmaaz-git/softmax-fix (the follow-up paper's own author), PwnerHarry/barron-softmax-fix, and Dicklesworthstone/frankentorch #8 with frankenjax #1 (Rust reimplementations owned by one person, where the fix was merged).
- 14.Barron, J. T. **X thread** (2026-10-23). The primary source for the Gemini attribution and the remarks about ε. The original page was unreachable, so this article relied on the English text obtained through a mirror and reports it only in indirect speech.
- 15.Chu, F. **Independent NumPy reproduction** (personal blog, 2026-10-23) and the Hacker News thread (2026-10-23, 19 points, 1 comment). The cliff wobble in section 2 and the ecosystem counts in section 6.5 come from here. Both are self-published, and are cited with that grade stated.

### Adjacent pieces on the Pebblous blog

- 16.[Why publishing the weights, the data and the recipe still does not reproduce the same model](/blog/open-1b-auditable-training-run/en/) — the floating point and **reproducibility** axis. This article runs on the axis of a **wrong number** instead of a different one.
- 17.[The piece arguing the bottleneck in the AI era is verification, not generation](/report/ai-driven-discovery-verification/en/) — the axis of whether verification exists at all. This article extends it by asking what was left behind each of the six times verification did happen.
