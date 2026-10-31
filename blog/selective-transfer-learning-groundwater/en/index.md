---
title: Transfer Learning Lifts the Average While Some Wells Get Worse
subtitle: An arXiv study of 457 Dutch groundwater monitoring wells found that a pretrained model forecast worse at 18 to 52 percent of them
date: 2026-11-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Transfer Learning Lifts the Average While Some Wells Get Worse

_An arXiv study of 457 Dutch groundwater monitoring wells found that a pretrained model forecast worse at 18 to 52 percent of them_

## Executive Summary

> [!callout]
> The claim that a model pretrained on somebody else's data will score better on yours holds on average and only on average. Researchers at the University of Amsterdam re-measured transfer learning on 457 Dutch groundwater monitoring wells and 13,718 test windows, and posted the result to arXiv on October 27. Their paper puts a number on the size of the losing side underneath that average. This article looks at how far that number reaches and where it stops.

> When the pretrained model was applied to every well alike, between 18.38 and 51.86 percent of the wells across five runs came out with worse forecasts than they would have had with no pretraining at all. The pooled error barely moved while that was happening. The selective method the authors propose clawed back at least part of the damage at 97.53 to 99.50 percent of the harmed wells, but only 23.46 to 43.78 percent were carried past the no-pretraining baseline. The authors state plainly that this recovery is not evidence the method recognized context.

> Sections 1 through 4 report what the paper sets out. Section 5 carries the result over to the questions a data team has to answer, and that part is our reading.

### Key numbers

All four figures are ranges taken across five repeated runs. The fact that they do not settle on a single value is itself part of what the paper reports. Hold the configuration fixed and change nothing but the random seed, and each of them still lands anywhere inside the ranges below.

Source: [Selective Transfer Learning for Groundwater Level Anomaly Forecasting](https://arxiv.org/abs/2610.37733), arXiv 2610.37733.

<!-- stat-card -->
**18.38–51.86%** — Wells harmed by transfer — The share that got worse once one pretrained model covered every site

<!-- stat-card -->
**97.53–99.50%** — Partially rescued — Harmed wells whose loss shrank under the selective method. Shrinking is not erasing

<!-- stat-card -->
**23.46–43.78%** — Fully rescued — Between one in four and two in five harmed wells ended up ahead of the no-pretraining model

<!-- stat-card -->
**0.424–1.084%** — Average error reduction — How much lower the selective method's error ran against the model with no pretraining

## One Line on the Scoreboard Hides a Split Among the Wells

The paper puts four methods side by side. All of them use the same network architecture, and the only thing that changes is how much of the outside learning each one lets in.

- •**No transfer** (No TL). Trained from scratch on the Dutch well records alone. This is the floor everything else is measured against
- •**Always transfer** (Always TL). Pretrained on hydroclimatic gridded data, then fine-tuned on the well records. This is what the industry usually means by transfer learning
- •**Global Convex Blend** (GCB). Mixes the predictions of the two models above, with the mixing weight fixed at one value for the whole run. Every well uses the same weight
- •**Context-aware selective learning** (CASL). Mixes the same two models, but sets the weight separately for each well and each point in time. This is what the paper proposes

Averaged over five repeated runs, the scoreboard comes out as follows. Lower is better for the two error measures, RMSE and MAE, and higher is better for R², which reports how much of the variation the model explains.

| Method | RMSE | MAE | R² |
| --- | --- | --- | --- |
| No transfer | 2.169 ± 0.016 | 0.936 ± 0.014 | 0.211 ± 0.012 |
| Always transfer | 2.167 ± 0.026 | 0.902 ± 0.032 | 0.212 ± 0.019 |
| Global Convex Blend | 2.166 ± 0.018 | 0.929 ± 0.013 | 0.213 ± 0.013 |
| Context-aware selective learning | 2.153 ± 0.015 | 0.904 ± 0.020 | 0.222 ± 0.011 |

Source: arXiv 2610.37733, Table 2. Means and sample standard deviations over five seeds.

Read the table alone and the four are much the same model. The RMSE gap between the best and the worst is 0.016, and the spread attached to each value is as wide as that or wider. In a meeting where the average is what gets presented, this would have closed with one line: transfer learning was applied and the error improved slightly.

Go column by column and the leader changes. On MAE, which averages the size of the errors as they are, always transfer sits lowest at 0.902 and the selective method follows at 0.904. On RMSE, which penalizes large errors more heavily, and on R², the order flips and the selective method leads. The paper describes the best model depending on the loss function as a consistent pattern across this comparison. None of the gaps clear the spread, so no ranking can be nailed down, but the table already carries the point that picking a method off one column gives a different answer than picking it off another.

Split the result by well and the picture changes. Across five runs, always transfer left 18.38 to 51.86 percent of the wells worse off than the model with no pretraining. In the worst case, seed 42, that was 201 of the 457 wells, or 43.98 percent. The swing matters as much as the level: nothing changed between runs except the random seed, and the size of the damage still moved by more than a factor of two. Whether one well in five takes the loss or something close to half of them cannot be known in advance.
