---
title: Costly Scans Help a Lung Cancer AI Only Where It Was Built
subtitle: A Nature Medicine study of 2,396 lung cancer patients in six countries found the gain from added CT scans and pathology never reached the set held back for testing
date: 2026-09-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Costly Scans Help a Lung Cancer AI Only Where It Was Built

_A Nature Medicine study of 2,396 lung cancer patients in six countries found the gain from added CT scans and pathology never reached the set held back for testing_

## Executive Summary

> [!callout]
> Published in Nature Medicine in mid-September, the I3LUNG study pooled 2,396 patients with advanced non-small cell lung cancer who received immunotherapy at six centers across five European countries and the United States. An explainable AI built on nothing but clinical records and blood tests beat every established marker it was measured against, PD-L1, ECOG performance status, and LDH among them, by a statistically significant margin. That comparison ran on an independent set sealed off from training, and at a separate US center the model's own scores dropped a rung. This article looks not at that achievement but at the other model in the same paper, the one whose validation columns were never filled in.

> The number the press release led with is 0.88. It is what the model that added CT imaging and digital pathology scored when predicting 24-month survival in first-line patients, against 0.68 for the records-and-blood model under the same conditions. That comparison, though, took place in the cross-validation that runs while a model is still being built. The paper states, once in the results and once in the discussion, that the improvement was not consistently reproduced on the independent set.

> Sections 1 through 4 follow what the paper and the press release put on the page. Section 5, which carries the result over into a question about where an organization spends its data budget, is this article's reading and is not in the paper.

### Key Figures

Sources: the [paper published in Nature Medicine](https://www.nature.com/articles/s41591-026-04488-2) (2026) and the [University of Chicago Medicine press release](https://www.eurekalert.org/news-releases/1143871) (September 14, 2026).

<!-- stat-card -->
**339** — Patients with all four data types — Records and blood, CT, digital pathology, and genomics together. That is 14% of the 2,396 enrolled

<!-- stat-card -->
**0.68 → 0.88** — The lift from adding imaging and pathology — 24-month survival in the first-line group. Two models fit to the same small subgroup, weighed against each other in cross-validation

<!-- stat-card -->
**0.72 → 0.87** — Sensitivity of 20 doctors at spotting responders — After seeing the AI prediction and its explanation. The model in that experiment had no imaging and no pathology

<!-- stat-card -->
**0.96 and 0.63** — Sensitivity split by center — The same model scored 0.96 at the Greek center and 0.63 at the Italian one

## Two Sentences the Paper Puts Side by Side

I3LUNG is an international collaboration funded by the European Union's Horizon Europe programme. Five centers in Italy, Germany, Greece, Israel, and Spain took part alongside the University of Chicago Medical Center, and together they assembled real-world clinical data on 2,396 patients with advanced non-small cell lung cancer enrolled between September 2012 and October 2023. The authors call it the largest international multi-center multimodal AI study on real-world data to date. The analysis cohort, first-line and later-line patients combined, came to 2,075, split into 1,550 for training and 274 for an independent set, with 251 patients from the geographically separate US center held aside for external validation.

Start with the part that held. On the independent set, the explainable model built on clinical records and blood tests reached an AUC of 0.77. AUC is a score where 1 means a perfect call and 0.5 means a coin flip. Measured on the same patients, the markers a clinic reaches for today came in at 0.53 for PD-L1, 0.62 for ECOG performance status, 0.58 for LDH, and 0.66 for the neutrophil-to-lymphocyte ratio. The model beat all of them by a statistically significant margin. The head-to-head against those markers, though, happened on the independent set. For the external validation cohort at the US center, the paper reports only the model's own scores, and those fell to between 0.55 and 0.72. The lowest of them, predicting disease control, sits at 0.55 with a confidence interval running from 0.48 to 0.62, which contains 0.5.

Trouble shows up on the next layer. The team also built a multimodal model that added radiomic features extracted from CT scans and digital pathology images, and compared it against the first. The 0.88 the press release quotes belongs to that model. Yet the same results section carries another sentence. The multimodal improvement was not consistently reproduced on the independent set, it says, and reproduced only inconsistently in the external validation cohort. The discussion repeats the judgment. Adding imaging-derived data pushed the cross-validated model up to an AUC of 0.88, the authors write, but the gain was not consistently reproduced in the independent and external validation sets, and they attribute that to the limited multimodal data.

The two sentences do not contradict each other. They point at different places. The 0.88 was measured by folding the training data five ways while the model was still being built, and the finding that it did not reproduce is about what happened when that model met patients it had never seen. The diagram below lays the two models over the same three columns to show how far each one got.
