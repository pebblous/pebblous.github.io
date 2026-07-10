---
title: The Drug-Discovery AI That Only Learned to Succeed
subtitle: Failed experiments never get published. Inside the representation flaw in training data that OpenBind exposes.
date: 2026-07-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Drug-Discovery AI That Only Learned to Succeed

_Failed experiments never get published. Inside the representation flaw in training data that OpenBind exposes._

## Executive Summary

> [!callout]
> Drug discovery AI tends to rate a candidate's activity higher than it really is. The cause is not the noise or errors that usually get blamed, but the things that never made it into the data at all. Experiments that went poorly, compounds that failed to bind, attempts that came to nothing — most of these never become papers. AI grew up seeing only the filtered successes, and it inherited a map on which promising candidates look far more common than they actually are. Let's follow, through the lens of data, how those blank spaces distort what the model predicts.

> One number shows the scale. By one analysis, roughly 60% of negative experimental results in drug research disappear from the public record. When an AI pipeline learns from a literature tilted this way, the bias is not washed out but amplified. In a three-stage system that automatically links retrieval, generation, and evaluation, one estimate puts the growth of that distortion at about 2.18 times.

> What matters most is that this flaw is not fixed by cleaning the data. Data that does not exist cannot be scrubbed or polished into being. So the question we ask of AI-Ready data has to change as well. Not "is this data clean," but "does this data include the failures too."

### Key Figures

The size of the problem compresses into four numbers: the share of negative results that vanish, the multiplier by which AI pipelines inflate the bias, the imbalance in screening data where success and failure are inverted, and how prediction accuracy changes once failure data is added.

Sources: [arXiv 2606.04220 (2026)](https://arxiv.org/abs/2606.04220), [ChemDiv Datasets](https://www.chemdiv.com/datasets/)

<!-- stat-card -->
**~60%** — Negative results lost — Share of failed experiments missing from the public record

<!-- stat-card -->
**2.18×** — Bias amplification — Multiplier by which a three-stage AI pipeline inflates literature bias

<!-- stat-card -->
**50:1–1000:1** — Active:inactive imbalance — Degree to which successes are over-represented in screening data

<!-- stat-card -->
**0.35 → 0.80** — Accuracy change — Toxicity prediction accuracy after adding failure data (hERG case)

## The Weight of Unpublished Experiments

Most of what gets tried in a lab ends in failure. A candidate does not bind to its target protein, the expected reaction never appears, toxicity gets in the way. These outcomes are a normal part of science. And yet those failures rarely become papers. Journals favor new and positive findings, and a researcher's time and budget go toward chasing what works rather than recording what does not.

For an individual lab, this choice is rational. The problem surfaces when tens of thousands of such choices pile up into a single body of literature. What remains in the world is a record of successes, while failures stay quietly in the drawer. This phenomenon is called publication bias. One analysis estimates that about 60% of negative results in drug research never make it onto the public record. More than half of the failures are invisible from the start.
