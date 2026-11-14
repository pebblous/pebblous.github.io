---
title: Simple Methods Nearly Match Deep Learning Published in Nature and Science
subtitle: On 36 tasks taken from Nature, Science and Cell papers, an AI wrote simple comparison models that matched or beat the published deep learning result on 12
date: 2026-11-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Simple Methods Nearly Match Deep Learning Published in Nature and Science

_On 36 tasks taken from Nature, Science and Cell papers, an AI wrote simple comparison models that matched or beat the published deep learning result on 12_

## Executive Summary

> [!callout]
> Researchers have had a language model check whether the deep learning studies published in Nature, Science and Cell-family journals were measured against a strong enough comparison. The paper went up on arXiv on October 28, from Carnegie Mellon, the University of Washington and Sunday Scientific. They assembled 36 supervised prediction tasks out of those papers, had a model write a simple comparison model for each one, and on 12 of the 36 the simple model matched or beat the deep learning score reported in the original study.

> The number that matters more sits in the middle of the distribution. These automatically built baselines recovered a median 95.5% of the gap between a trivial predictor and the deep learning model. Most of the improvement credited to deep learning came back from a single script that ran on a CPU in under thirty minutes, with no pretrained weights. On the remaining 24 tasks the deep learning method still leads, and the authors list, as a limitation of their own, the possibility that the model had already seen the source papers and datasets during pretraining.

> Sections 1 through 3 carry the numbers the paper reports and the method and background its authors describe. Section 4 carries the limitations they wrote down themselves. Section 5, which treats the building of a comparison as one step of a data review, is this article's reading.

### Key Numbers

All four come from the main experiment on the 36 tasks. The first two say how strong the automatic baselines were; the last two say what conditions produced them and where they fell short.

Source: Ellington et al., [Automatic Construction of Strong Simple Baselines](https://arxiv.org/abs/2610.40700) (arXiv:2610.40700, October 28, 2026)

<!-- stat-card -->
**95.5%** — Of the gap recovered — Median share of the deep learning model's gain over a trivial predictor. The mean is 85.7%

<!-- stat-card -->
**12 tasks** — Where the baseline caught up — Out of 36. On the other 24 the published model scores higher

<!-- stat-card -->
**30 minutes** — Allowed per baseline — No pretrained weights, CPU only, and one script came with that limit

<!-- stat-card -->
**6 tasks** — Where it got less than halfway — All six tasks whose median strength fell below 0.5 took input that was not tabular

## How Far the Simple Side Got

"Caught up" only means something against a scale. The researchers put three scores on every task: the score of a trivial predictor, the score of the deep learning model as reported in the original paper, and the score of the automatically built baseline. A trivial predictor is one that always returns the same answer. In a classification problem that is the most common class in the training set; in a regression problem, the average of the training targets.

Those three define simple baseline strength, or SBS. Put the trivial predictor at 0 and the deep learning model at 1, and the measure says where in between the automatic baseline stands. A value of 0 means the simple method added nothing at all. A value of 1 means it stands where the deep learning model stands. Above 1 means the simple method did better.

Across the 36 tasks, the median of that value was 0.955. The mean is lower, 0.857, because a handful of tasks sit far down the scale and pull it. Counting unscored attempts as zero drops the mean further, to 0.796, and leaves the median at 0.955. On twelve tasks the strength reached 1 or more. The paper writes "12 studies" at this point, though the unit the cohort is built from is the 36 tasks.
