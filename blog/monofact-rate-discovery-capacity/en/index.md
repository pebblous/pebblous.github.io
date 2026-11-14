---
title: Monofacts: Facts Seen Once Make AI Discover More
subtitle: Johns Hopkins researchers raised the monofact rate from 0% to 100%, and new discoveries climbed in materials science and genomics alike
date: 2026-11-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Monofacts: Facts Seen Once Make AI Discover More

_Johns Hopkins researchers raised the monofact rate from 0% to 100%, and new discoveries climbed in materials science and genomics alike_

## Executive Summary

> [!callout]
> The more facts that appear exactly once in the training data, the more new answers an AI finds. That is a measurement, posted to arXiv on November 2 by a team centered at Johns Hopkins University, and the once-only items have a name in it: monofacts. Rare data has mostly been handled as a warning sign until now. Knowledge that shows up seldom is recalled poorly, and in 2024 this very monofact rate was shown to set a floor under the hallucination rate. The authors read the same statistic in the other direction. A large unseen share is room for falsehood and room for discovery at once.

> To check the claim they built the monofact rate of the training set by hand, in eleven steps from 0% to 100%. Two scientific domains, materials science and regulatory genomics. Two open-weight model families, gpt-oss-20b and gemma-3-12b. Two training stages, and two ways of sampling answers, pass@1 and pass@16. In every one of those settings discovery rose monotonically with the rate. It is not free, though. Evaluate on the same distribution the model trained on and discovery and hallucination climb side by side, at an exchange rate the authors' own theory pins down in advance.

> Sections 1 through 5 follow what the paper measured and what it left open. Section 6 carries the result over to the data-cleaning pipeline, and that move is this article's reading rather than the paper's.

### Key Numbers

Source: Uzunoglu et al., [Tracing the Scientific Discovery Capacity of LLMs to Their Training Data](https://arxiv.org/abs/2611.03617), arXiv:2611.03617 (2026)

<!-- stat-card -->
**0% → 100%** — Monofact rate, built by hand — A separate training set at every level, stepping up by 0.1. Ten thousand examples in materials science, twenty thousand in regulatory genomics

<!-- stat-card -->
**0.98–0.99** — Unobserved mass on the test set — Measured on the evaluation set drawn ten months past the training data. The holdout taken from the training-era snapshot parts ways here

<!-- stat-card -->
**1 : 1** — Discovery to hallucination — What the theory hands back when half of the candidate band is taken to be true (Proposition 5). A theoretical value, not a measured one

<!-- stat-card -->
**1 epoch** — Seeing the same data once — Show it three times and five times and the variety stays put while the monotonic rise goes away

## What the Monofact Rate Counts

A monofact is a fact observed exactly once in the training set. The monofact rate divides the number of such facts by the number of training documents, and the paper writes it μ̂. Statistics has used the quantity for a long time. If a sample holds many elements that turned up a single time, the population probably still holds that much more the sample never reached, which is the Good–Turing estimator, a calculation Alan Turing and Irving Good are known to have used on codebreaking work during the Second World War.

What counts as one fact had to be fixed separately in each domain. In materials science the unit is the chemical system, the set of elements a material is built from. Water (H₂O) and hydrogen peroxide (H₂O₂) are different substances, and both belong to the single chemical system H–O. Regulatory genomics has no such natural grouping, so the line was drawn by sequence overlap: a DNA sequence is a monofact when no other example in the training set overlaps it on more than 150 nucleobases.

In 2024 Kalai and Vempala showed that this number gives a floor under the hallucination rate. A well-calibrated model will generate false statements at least as often as once-only facts appear in its training data. Inside that frame an unseen statement is treated as false by default, which leaves discovery nowhere to stand. This paper makes a place for it by splitting the statement space in three: the observed band the model trained on, the candidate band of statements not yet seen but plausibly true, and the arbitrary band beyond it. Discovery lives in the candidate band in the middle.

One qualification comes attached. Kalai and Vempala sorted facts into two kinds. Arbitrary facts, learnable only by observation, such as **"The Shining" was published in 1977**; and systematic facts, whose truth follows from rules, such as **2.345754 < 8.754**. A theory that counts once-only facts bites on the first kind. Discovery, the authors argue, fits neatly into neither, because it leans on abduction, forming hypotheses from plausible guesses, rather than on deduction or induction. The paper reaches for Newton at this point: **"No great discovery was ever made without a bold guess."** The candidate band is the strip drawn to give that guess somewhere to stand.
