---
title: Sepsis Prediction AI Scores the Same, but Does It Flag the Same Patients?
subtitle: On 40,336 ICU sepsis records, nine ways of filling in missing values score almost alike, and their high-risk alert lists overlap by only 52 to 75 percent.
date: 2026-10-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Sepsis Prediction AI Scores the Same, but Does It Flag the Same Patients?

_On 40,336 ICU sepsis records, nine ways of filling in missing values score almost alike, and their high-risk alert lists overlap by only 52 to 75 percent._

## Executive Summary

> [!callout]
> An AI that warns of sepsis in an intensive care unit reads a patient's record hour by hour, scores the risk, and raises an alert for the top few percent. Most of that record is empty, because a test is run only when a clinician judges it necessary. What value goes into an empty cell is a choice made before the model is built, and it is rarely written down in a paper's tables or a hospital's report. This article follows "Alert-List Concordance for Evaluating Imputation Strategies in ICU Sepsis Prediction," posted to arXiv on October 15 by a group at UMass Lowell, and asks how much that choice changes who gets the alert.

> Nine ways of filling in the blanks were each applied to the records of 40,336 patients in the public PhysioNet/CinC 2019 dataset. The classifier that follows, the probability calibration and the alert rule were all held fixed, so the only thing that varies is the blanks. Eight of the methods land inside an AUROC band 0.011 wide, and 22 of the 28 pairs among them are statistically indistinguishable. Under the same conditions their top-10% alert lists overlap by 52 to 75 percent. ForwardFill, the highest scorer of all, overlaps with every other method by only 40 to 45 percent.

> Everything through Section 4 follows what the paper records. Section 5, which reads the result through the lens of an in-house data pipeline, is this article's own interpretation.

### Key Figures

Source: Siddappa, Raju, Al Amin and Ma, [Alert-List Concordance for Evaluating Imputation Strategies in ICU Sepsis Prediction](https://arxiv.org/abs/2610.22635) (arXiv:2610.22635, October 15, 2026).

<!-- stat-card -->
**71.9%** — Average missing rate across the 39 variables fed to the model — 25 of the 26 lab values are absent in more than 90% of hours

<!-- stat-card -->
**22 of 28 pairs** — Method pairs whose overall scores are statistically indistinguishable — AUROC compared at the patient level with a Bonferroni correction

<!-- stat-card -->
**52–75%** — How much the top-10% lists those methods produce overlap — Each names exactly 1,211 patients, and barely half are the same people

<!-- stat-card -->
**5 vs. 22–26 hours** — Alert lead time for patients ForwardFill flags alone, against those every method flags — Its solo catches arrive later, not earlier

## The Scores Match, but the Lists Overlap by Barely Half

The experiment was built to hold everything else still. All ten arms pass through the same four steps: fill the blanks, train the same XGBoost classifier of 100 trees, calibrate the probabilities on 20% of the training data, and raise an alert for the top k% by risk. The classifier's settings, the calibration and the alert rule are all fixed. Only the first step differs.

The scoreboard shows almost no difference. On AUROC, the overall measure of discrimination, ForwardFill stands alone at 0.787, and XGBoostNative, which fills nothing and hands the missing structure straight to the trees, reaches 0.744. The remaining eight sit between 0.722 and 0.733, a band 0.011 wide. That is narrower than the confidence interval of any one of them. Compare the 28 pairs among those eight at the patient level with a Bonferroni correction and 22 of them show no significant difference. If the score is all there is to go on, almost any of them will do.

The other metrics do not read any differently. AUPRC, which does the same job when positives are rare, runs from 0.049 to 0.054 across those eight, and the Brier score, which measures how closely predicted probabilities track observed frequency, spans 0.01733 to 0.01737. The second of those splits only at the fifth decimal. ForwardFill sits at the better end of both, but nothing in any of these metrics puts the other eight in an order. The usual yardsticks for choosing an imputation method are reconstruction error, which asks how closely a held-out value was restored, and aggregate metrics of this kind. Neither asks who was selected.

What the paper does next is the new part. The authors pull out who each pipeline actually named and set the lists side by side. What an alert system hands a ward is not a ranking but a list of people of a fixed size. Take the top 10% of the 12,101 patients in the evaluation set and every method names exactly 1,211. The count is identical. Counting the people who appear in both is where it changes. Of everyone in either list, the share that appears in both, the Jaccard similarity, runs from 0.518 to 0.750.

The pair that overlaps most is DAE and MIDA. Two methods on the same autoencoder architecture, differing only in how noise is applied, and they reach 0.750 with a 95% confidence interval of 0.726 to 0.771. Two near-identical algorithms, and a quarter of the list is different people. Rank correlation hides this. Across all 45 pairs Spearman is high, 0.825 to 0.975, and so is Kendall's tau at 0.633 to 0.872. The overall ordering stays similar, and the methods part company only at the very top of it.
