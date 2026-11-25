---
title: TabPFN Learns Only From Fake Tables. Does Scaling It Up Help on Real Ones?
subtitle: 6,120 training runs remeasured TabPFN
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# TabPFN Learns Only From Fake Tables. Does Scaling It Up Help on Real Ones?

_6,120 training runs remeasured TabPFN_

## Executive Summary

> [!callout]
> Some models take a whole table at once and answer on the spot. There is no step where you retrain for each new dataset: feed the table in, and one forward pass returns the prediction. The TabPFN family works that way, and it is pretrained without a single real table. It learns only from the fake tables a generator invents. A paper posted to arXiv on November 18 measures from scratch how much that model improves when you make it bigger. It is the result of training 6,120 models of varying size and setup across roughly 80,500 GPU-hours.

> On the fake-table side the formula held. A curve fitted on runs between 1013 and 1016 FLOPs predicted a validation loss of 0.769 at 1017 FLOPs, and the measured value was 0.770. Carry the same formula onto real data, though, and it slips. Negative log-likelihood was predicted at 0.289 and measured at 0.309. The miss is 0.020, and it runs one way only. The formula expected the model to be better than it turned out to be.

> Sections 1 through 6 follow what the paper states and what we confirmed in the primary source. Section 7, which asks how anyone working with synthetic data should take this result, is this article's own reading.

### Key numbers

The first two show where the formula held and where it drifted. The last two set how far that formula can be trusted.

Source: [Towards Reliable Scaling Laws for Tabular Foundation Models](https://arxiv.org/abs/2611.24214) (arXiv 2611.24214, submitted November 18, 2026).

<!-- stat-card -->
**0.001** — extrapolation error on fake-table loss — at 10¹⁷ FLOPs, predicted 0.769, measured 0.770

<!-- stat-card -->
**0.020** — how far real-data accuracy was overrated — NLL predicted 0.289, measured 0.309

<!-- stat-card -->
**8 and 20** — datasets before the overrating settles — same model: 8 for NLL, 20 for ROC AUC

<!-- stat-card -->
**6,120 runs** — training behind a single formula — about 80,500 GPU-hours, 10¹³ to 10¹⁷ FLOPs

## A Model That Never Sees a Real Table

For a long time there was one way to work with tabular data. You train a model on the data you have, and when the data changes you train again. The TabPFN family reverses that order. Bundle the training rows and the rows you want predicted into one block, hand it to the model, and the model reads the pattern inside and hands back an answer. There is no training step. TabPFNv2, published in Nature in 2025, lifted this approach to something usable on small tables, and the name tabular foundation model stuck to it afterwards.

What makes the family unusual is its pretraining data. It does not collect real tables. A generator builds millions of tables by rule, and that is all the model ever sees. Measured by how far it leans on synthetic data, this is the furthest out of any model family in use today. So applying a scaling law to TabPFN raises one extra question. When you make it bigger, is it the fake-table score that improves, or the real-table score?

What gets measured is not TabPFNv2 itself but nanoTabPFN, open code that reimplements the architecture in simpler form. The pretraining tables are classification problems from the MLP generator in TabICLv1, and training and evaluation were run as one pipeline with TFM-Playground, a tool that already existed. The setup is built so a grid can be filled densely at sizes a research budget can afford. The authors also wrote down why they chose it: when the work began, few tabular foundation models had their training pipeline open as well. What the authors released this time is the scaling-law measurements and the code that redraws the figures. The smallest model holds 1,826 parameters and the largest 553,482, across twenty sizes.

Who did the measuring matters for reading the result. The seven authors list the University of Freiburg, TU Delft, the ELLIS Institute Tübingen, and Prior Labs. Prior Labs is the company that turns TabPFN into a product, and SAP acquired it in May 2026. Frank Hutter, named on both TabPFN papers, is a co-author. A report that the scaling law breaks on real data is coming from the side that builds and sells the model.

Eight conditions were varied across the grid. Alongside the training and architecture knobs, one entry stands out: the size of a single pretraining table is part of the search. How many rows and columns a table may hold sits on the same line as model size and learning rate.

| Condition varied | Values |
| --- | --- |
| Learning rate | 12 values between 5×10⁻⁵ and 5×10⁻¹ |
| Weight decay | 0, 0.0001, 0.1 |
| Batch size | 32, 64, 128 |
| Embedding size | 8, 16, 32, 64 |
| Number of layers | 1, 2, 4, 6, 8, 10 |
| Attention heads | 2, 4 |
| Maximum columns per table | 2, 4, 8, 16 |
| Maximum rows per table | 100, 200, 400, 800, 1200 |

▲ The optimizer is fixed to AdamW and the MLP hidden size to four times the embedding size. Source: arXiv 2611.24214, Table 1

## The Formula Was Built on One Range and Tested on Another

The most common weakness in scaling-law work is using the data that built the formula to argue the formula fits. This paper split those two apart from the start. Runs at four budgets from 1013 to 1016 FLOPs, 6,075 of them, built the formula. The 45 runs between 1016.25 and 1017 FLOPs were held out, never seen during fitting, and used only to check whether the prediction lands.

| Compute budget | 10¹³ | 10¹⁴ | 10¹⁵ | 10¹⁶ | 10¹⁷ |
| --- | --- | --- | --- | --- | --- |
| Training runs | 4,050 | 1,651 | 288 | 86 | 45 |

▲ The first four columns, 6,075 runs, built the formula; the 45 runs in the 10¹⁷ column were used only to check extrapolation. Source: arXiv 2611.24214, Table 2

How those 45 runs were chosen has to be read alongside the number. They were not drawn from the grid above. They are configurations picked around what the formula prescribed, and they are not bound to the values in Table 1. So the question this test answers is not whether the formula holds for any configuration scaled up to 1017 FLOPs. It is whether a configuration chosen the way the formula says lands where the formula said it would. That is close to how a scaling law actually gets used, but it leaves standing the fact that the test subject was picked by the test instrument.

The fitting procedure runs like this. At each compute budget, only the best-scoring runs are kept, which traces a frontier. That line is not made of runs that wasted compute on badly chosen settings; it is the best that budget could buy. The following function is fitted to that line.

<!-- stat-card -->
**L(C) = A · C−α + L0** — C is compute and L is loss. For a bounded metric such as ROC AUC, L is one minus the metric.

Why that subtraction is there shows up in earlier work. Scaling for tabular foundation models has been looked at before. TabDPT fitted a power law between model size and real pretraining data, LimiX looked at scale on the synthetic side, and MegaTabICL worked out model size and training length for a given compute. The point the authors single out, pointing at LimiX, is the shape of the function. A formula fitted without constraints can predict a value above 1 for a metric like ROC AUC that cannot exceed 1. Taking one minus the metric as the loss and holding the floor term L0 positive keeps the prediction improving with compute without passing the metric's ceiling.

Fitting minimises a Huber loss in log space, with 105 starting points each run through and the best one kept. How compute should be split between model size and data size was derived separately by least squares in log-log space, following the first approach Hoffmann and colleagues used in the Chinchilla paper, as the authors state.

Scores were measured three ways. Synthetic validation loss is measured on synthetic tables held out of training: 2,048 small tables of 500 to 1,000 rows and 5 to 50 columns, and 1,024 medium tables of 1,000 to 3,000 rows and 50 to 150 columns. Each group is averaged, and the two averages are then averaged again with equal weight into one number. The counts differ two to one, 2,048 against 1,024, but they carry the same weight in the score. Real-data scores were measured as negative log-likelihood and ROC AUC on 21 datasets drawn from the TabArena benchmark under a cut of 500 columns and 10,000 rows. That cut is the same range TabPFNv2 was designed to handle.

> [!callout]
> It helps to fix how differently these three behave before going further. Synthetic validation loss shows how well the model does inside the world it learned. Real-data NLL asks how close the probabilities it emits are to the true distribution. ROC AUC sets the probability values aside and asks only whether the ranking is right. As the sections below show, the three give different answers about where the next unit of compute should go.

## The Synthetic Side Held, the Real Side Drifted

All three metrics fit the scaling law cleanly. The coefficients of determination run from 0.986 to 0.997. On the numbers alone you could say the TabPFNv2 family draws a predictable curve like any other model family. The trouble starts when that formula is carried out past the range it was fitted on.

| Metric | Measured at 10¹⁷ | Predicted at 10¹⁷ | Fit R² | Mean extrapolation error |
| --- | --- | --- | --- | --- |
| Synthetic validation loss | 0.770 | 0.769 | 0.997 | 0.001 |
| Real-data NLL | 0.309 | 0.289 | 0.986 | 0.011 |
| Real-data ROC AUC | 0.877 | 0.873 | 0.991 | 0.004 |

▲ The fit uses the frontier up to 10¹⁶ FLOPs, and extrapolation was checked at four budgets from 1016.25 to 10¹⁷. Source: arXiv 2611.24214, Table 3

Synthetic validation loss came in at 0.770 against a prediction of 0.769. Ten times the compute further out, and the match holds to three decimal places. Judging on that metric alone, you could reasonably say the formula is good enough to plan an investment around.

Real-data NLL came in at 0.309 against a prediction of 0.289. That is 0.020 in absolute terms and a little over 6% of the measured value. It is a small-looking number, and two things make it hard to wave off. First, the miss runs one way. The formula expected the model to do better than it did. Second, the gap showed up as something that widens with compute. It stays invisible inside the fitting range and opens once the formula steps outside it.

ROC AUC came in at 0.877 against 0.873, a smaller miss than NLL. That metric, though, swings hardest somewhere else, which the sections below take up.
