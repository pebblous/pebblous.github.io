---
title: AI Found Its Own Conditions to Grow a Topological Ferromagnet Film
subtitle: HKUST swapped the surrogate model inside Bayesian optimization for a random forest and closed an autonomous growth loop in 21 runs
date: 2026-08-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Found Its Own Conditions to Grow a Topological Ferromagnet Film

_HKUST swapped the surrogate model inside Bayesian optimization for a random forest and closed an autonomous growth loop in 21 runs_

## Executive Summary

> [!callout]
> Physicists at the Hong Kong University of Science and Technology wrapped an active learning loop around a molecular beam epitaxy chamber, the machine that stacks a film an atomic layer at a time, and let it pick its own next experiment. A paper posted on August 18 records how that loop found the conditions where the topological ferromagnet Fe₃Sn grows. The part worth pausing on is what the team left alone. They kept the search algorithm as it was and replaced a single component, the surrogate model that decides what shape the experimental space is assumed to have.

> The Gaussian process used by standard Bayesian optimization carries a continuous kernel, and with it the assumption that the parameter space is smooth. The phase boundaries of this material are closer to cliffs. Validated against 17 growth runs, the Gaussian process reached a mean absolute error of 9.92 and the random forest 10.16. On the metric the Gaussian process was slightly ahead, but unfolding the predicted landscape showed that the low error came from a kernel that had smoothed the steep drop away and pushed its predictions toward the global mean of the dataset.

> That is why what remains from this work is not the material but the judgment call. A single summary metric cannot tell you whether a model is drawing the experimental space or retreating behind its own average. The difference usually surfaces only after the result fails to arrive.

### Key Numbers

The four numbers below point to the trap in the metric, the weight of the input data, the experiment budget, and the slack the conditions leave. All are taken from the text and figures of the paper.

Source: Bollampally et al., [arXiv:2608.17742](https://arxiv.org/abs/2608.17742) (2026-08-18)

<!-- stat-card -->
**9.92 : 10.16** — Cross-validation error of the two surrogates — Mean absolute error on a 100-point scale. The Gaussian process led on the metric, but its predicted landscape was pressed flat toward the mean

<!-- stat-card -->
**0.37** — Importance of the incoming substrate quality — Larger than the Fe/Sn flux ratio at 0.22, which is the growth recipe, and second only to filament power at 0.41, the proxy for substrate temperature

<!-- stat-card -->
**21 runs** — Growths used to close the loop — 17 runs a person guided plus 4 active learning runs, against 24 to 44 runs in earlier work that applied standard optimization to perovskite oxides

<!-- stat-card -->
**~30K** — Temperature width of the plateau of success — Around 3.6W of filament power and an Fe:Sn flux ratio of 0.8, crystallinity holds even when the conditions drift a little

## Fe₃Sn Only Grows Inside a 100K Window

Fe₃Sn is a material with an obvious payoff. It is an intermetallic compound with a kagome lattice, and topological Weyl points in its electronic structure give it an in-plane anomalous Hall effect at room temperature, which is the property you would want under a magnetic sensor. The trouble is on the growing side. Within the equilibrium Fe-Sn phase diagram, Fe₃Sn exists as a metastable line compound over a temperature range roughly 100K wide, and a small drift in composition tips it into a competing FexSny phase. The growth window itself is a narrow corridor with cliffs on either side.
