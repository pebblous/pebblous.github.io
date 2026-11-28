---
title: Label Noise Audit Counts Wrong Labels a Model Already Memorized
subtitle: Dropping labels a trained model flags lifts accuracy up to 47 points
date: 2026-11-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Label Noise Audit Counts Wrong Labels a Model Already Memorized

_Dropping labels a trained model flags lifts accuracy up to 47 points_

## Executive Summary

> [!callout]
> A method posted to arXiv finds wrong labels in a training set, and estimates how many there are, using nothing but one trained classifier. The paper by Yuchen Li and four co-authors, "[Find, Count and Fix Wrong Labels from a Trained Model, without Clean Labels or Shared Data](https://arxiv.org/abs/2611.22449)" (submitted November 17, 2026, revised November 21), checks which parameters each example's gradient leans toward and compares that with the average of examples carrying the same label. The authors say the method needs no clean reference set, no held-out validation set and no retraining.

> Label noise gets hard to detect once a model has memorized the wrong labels. According to the paper, after the model fits 99–100% of its wrong labels, scores that rank examples by loss or gradient size fall to an AUC of 0.73–0.76 on the human-labeled CIFAR-10N set. Gradient allocation held at 0.94–0.96 under the same conditions. Retraining without the flagged examples raised test accuracy in all 22 image noise settings.

> It does not clearly beat the existing method. Against confident learning in 11 settings, the difference in detection AUC was not statistically significant, and confident learning came closer to the true wrong-label rate. The advantage is that the computation ends with reading a single final model. Pebblous sees the method as a candidate for putting a number on "data label accuracy" (Acc-ML-7), a measure under the accuracy characteristic of ISO/IEC 5259-2, without an answer key. The paper does not mention any ISO standard; this mapping is Pebblous's interpretation.

### Key Figures

Source: [arXiv 2611.22449](https://arxiv.org/abs/2611.22449) v2, abstract and full text

<!-- stat-card -->
**0.94–0.96** — Wrong-label detection AUC — CIFAR-10N worst labels, model that memorized them. Loss and gradient norm: 0.73–0.76

<!-- stat-card -->
**54–96%** — Share of true rate captured — CIFAR-10. Prediction and feature-margin estimates: 0–6%

<!-- stat-card -->
**48.1→94.7%** — Test accuracy after retraining — CIFAR-10, 60% symmetric noise, ViT-S. Mean +11.6 points over 22 settings

<!-- stat-card -->
**14–27 s** — Time to audit 5,000 images — One GPU (RTX 4090). Confident learning needs about 23 GPU-minutes of extra training

## On CIFAR-10N's Worst Labels, Loss Scores Fail Once the Model Memorizes

Label noise means the answer attached to a training example is wrong, as when a photo of a cat carries the label "dog." The paper relies mainly on CIFAR-10N, a public dataset that collects labels human annotators re-assigned to the 50,000 CIFAR-10 images. Its "worst" version picks a wrong annotator label whenever one exists, so it has the most errors. By the paper's count, 9.0% of labels are wrong in the majority-vote version (aggregate), 17.2% in the single-annotator version (random-1) and 40.2% in the worst version. Because these are mistakes real people made, they are harder to find than synthetic noise created by shuffling labels at random.

The usual approach looks for examples the model finds unusually hard. Examples with high loss, large gradients or high self-influence are put forward as wrong-label candidates. The trouble is that with long enough training the model fits the wrong labels too. The models in the authors' experiments reproduced 99–100% of the wrong labels on the training data. At that point a wrong example's loss is small as well and no longer stands apart from correct ones.

The paper's results on CIFAR-10N's worst labels are below. AUC is the probability that, given one randomly drawn wrong label and one correct label, the score ranks the wrong one higher. A value of 1 separates them perfectly; 0.5 is a coin toss.

| Score | What it looks at | AUC on a model that memorized the labels |
| --- | --- | --- |
| Loss · gradient norm · self-influence | How hard the model finds the example | 0.73–0.76 |
| Feature-space margin | How close the internal representation sits to another class | 0.79–0.84 |
| Gradient allocation (proposed) | Which parameters the gradient concentrates on | 0.94–0.96 |

********

The gap is wider when it comes to counting. Estimating the wrong-label rate from the model's predictions or feature margins captured only 0–6% of the true rate on a model that had memorized the labels, the paper reports. Even if four images in ten are mislabeled, the estimate comes out close to "nearly clean." In a data quality audit, that is the most dangerous kind of error.

## Gradient Allocation Drops Magnitude and Compares Direction With the Class Average

The authors monitor the output projection layers of the last four backbone blocks: the attention and MLP output projections in ViT-S, and the MLP output projections in ConvNeXt-T. For one example and its label, they compute the gradient at these layers and divide the absolute values by their total. Magnitude disappears, and what remains is the proportion of change the model wants to make in each parameter. The paper calls this the allocation.

The decision takes four steps.

1. Average the allocations of examples sharing a label to build a reference allocation for each class.
2. Take how closely the example's allocation matches its own label's reference (cosine similarity) and subtract its similarity to the closest other class. This is the margin.
3. Switch the label to the closest other class and repeat the calculation.
4. If the switched label's margin is larger than the original label's, flag the example as mislabeled.
