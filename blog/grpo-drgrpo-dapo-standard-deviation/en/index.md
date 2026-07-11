---
title: The Only Thing GRPO, Dr.GRPO, and DAPO Change Is One Standard Deviation
subtitle: A single identity shows that problems splitting evenly between right and wrong answers push learning the hardest, verified across Big-Math
date: 2026-07-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Only Thing GRPO, Dr.GRPO, and DAPO Change Is One Standard Deviation

_A single identity shows that problems splitting evenly between right and wrong answers push learning the hardest, verified across Big-Math_

## Executive Summary

> [!callout]
> GRPO, Dr.GRPO, and DAPO were released by different teams at different times, so the natural question is usually which of the three to adopt. A paper published in July 2026 flips that framing. The three methods are just different ways of handling one number: the standard deviation of the rewards. GRPO divides by it, Dr.GRPO removes the division, and DAPO throws out any problem where that number is zero.

> The paper's central result fits in one line. Under a binary reward that scores a correct answer as 1 and a wrong one as 0, the size of the learning update for a problem is exactly equal to the standard deviation of the model's responses to that problem. So a problem the model gets right about half the time pushes learning the hardest, while a problem it always gets right or always gets wrong has a standard deviation of zero and teaches nothing. Applied to the 210,000-problem Big-Math dataset at a group size of 8, the prediction that roughly 44% of all groups fall silent matched the measured value to within two percentage points.

> And that identity is what makes selecting problems a question to settle before choosing an algorithm. If the standard deviation is the amount of learning, then which difficulty of problem you put in the training set sets the direction of learning.

<!-- stat-card -->
**~44%** — Training groups wasted — Share that fall silent at standard deviation zero on Big-Math with group size 8

<!-- stat-card -->
**50%** — Accuracy that maximizes learning — Standard deviation peaks when right and wrong answers split evenly

<!-- stat-card -->
**0.99 ↔ 0.88** — Accuracy on the hardest problems — GRPO lifting extreme-difficulty problems versus Dr.GRPO stalling

<!-- stat-card -->
**~6x** — Sampling cost of hard problems — A 5%-accuracy problem needs this many more samples than a 50-50 one

## Three Names, One Dial

GRPO came out of DeepSeekMath in 2024. To optimize a policy without a critic (a value function), it has a model solve one problem many times and lets those responses score each other. The next year, researchers at Sea AI Lab in Singapore and NUS argued that dropping the division by the standard deviation makes learning cleaner, and proposed Dr.GRPO. Around the same time, ByteDance Seed released DAPO, a large-scale system that filters problems with a standard deviation of zero out of the batch entirely.

Each name carried its own paper, its own institution, its own story. So from a practitioner's seat, "should I use GRPO, switch to Dr.GRPO, or is DAPO better" becomes a natural question. The July 2026 paper by Bay and Yearick unsettles the premise of that question. The three methods only turn one knob in different ways, and the knob's name is standard deviation.

> [!callout]
> How much the right and wrong answers split when the same problem is solved many times, the size of that spread, is the standard deviation. GRPO divides by this value, Dr.GRPO does not divide, and DAPO discards problems where this value is zero. The difference between the three methods begins here and ends here.

## The Update Size Is the Standard Deviation

At the center of the paper is one short theorem. Under a binary reward that scores 1 for a correct answer and 0 for a wrong one, the size of the GRPO update for a problem is exactly equal to the standard deviation of the responses to that problem. If the group size is $G$ and $k$ of them are correct, the standard deviation works out as follows.

$$\sigma = \frac{\sqrt{k\,(G-k)}}{G}$$

This expression is zero when $k$ is 0 (all wrong) or $G$ (all correct), and reaches its maximum when the number of correct answers is half the group. In the authors' phrasing, the number that had long sat in the denominator to normalize the advantage was actually the length of the gradient itself. The value pulled out for the sake of dividing turned out to be a direct measure of how hard the problem pushes the model.

The intuition is simple. If the model solves a problem eight times and gets four right and four wrong, a clear contrast forms between the right and wrong answers, and that contrast makes a "go this way" signal. If it gets all eight right, there is no wrong answer to compare against and no basis for setting a direction. For learning to happen, the responses have to split, and the size of that split is the size of the learning.
