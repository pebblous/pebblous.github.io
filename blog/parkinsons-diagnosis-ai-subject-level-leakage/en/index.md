---
title: Parkinson
subtitle: In an arXiv audit that re-splits three public datasets by patient, voice diagnosis accuracy falls from 0.892 to 0.780
date: 2026-11-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Parkinson

_In an arXiv audit that re-splits three public datasets by patient, voice diagnosis accuracy falls from 0.892 to 0.780_

## Executive Summary

> [!callout]
> The accuracy that machine-learning studies of Parkinson's disease report may say more about the evaluation protocol than about any ability to detect the disease. That is the claim of an audit posted to arXiv by Namrata Datta and Victor Miranda Soberanis of the Department of Mathematical Sciences at Auckland University of Technology, submitted on 9 October 2026. They took three public datasets of very different shapes, covering the voice, at-home telemonitoring and gene expression in blood, left the models untouched, and re-ran everything with one thing changed: the line that separates training data from test data.

> Voice accuracy fell from 0.892 to 0.780. Each speaker in that dataset left six or seven recordings behind, so shuffling recordings before splitting seats one patient on both sides, and the model earns credit for recognizing a voice rather than a disease. None of this turns the earlier results into fiction. The authors write that published voice results should be called inflated rather than spurious.

> Sections 1 through 4 take their numbers and quotations from the body and tables of this paper. The three limits the authors acknowledge are carried at the end of Section 4. Section 5, which reads the whole result as a data-preparation problem, is the interpretation of Pebblous.

### Key Numbers

The first three are pairs produced by running the same data through two evaluation protocols. The fourth comes from a separate check on what gene expression carries besides the disease.

Source: [arXiv:2611.14533](https://arxiv.org/abs/2611.14533), Tables V, VII, VIII and X, plus the body text.

<!-- stat-card -->
**0.892 → 0.780** — Voice diagnosis accuracy (AUROC) under a subject-level split — Isolating the leakage on its own brings it down to 0.693

<!-- stat-card -->
**−0.037** — R² for symptom-score prediction from telemonitoring, split by patient — A record-level split gave 0.105, and a training-mean baseline sits at 0

<!-- stat-card -->
**0.998** — Blood transcriptomic accuracy when genes are chosen before the split — The same setup scores 0.711 when the choice stays inside the fold

<!-- stat-card -->
**0.906** — Accuracy of predicting a patient's recruitment wave from gene expression — Measured among Parkinson's patients only. Permutation p=0.010

## Same Model, Different Split Line

Diagnosing Parkinson's disease with machine learning is a fairly old research topic. Models read tremor out of a sustained vowel, track symptom scores from a device sitting in someone's home, and separate patients from controls using gene expression in blood. What has pushed the field along is the promise of early detection that is cheap and easy to deploy widely.

This paper proposes no new model. It takes the same three public datasets that earlier work already used, holds the model fixed, and runs it twice under two ways of deciding which data trains and which data grades. The gap the authors name sits in exactly that place. Both leakage mechanisms are recognized in general terms, but their size has rarely been measured side by side on structurally different Parkinson's datasets with the model held fixed, and no earlier study had separated supervised from unsupervised selection in Parkinson's transcriptomics.

The three datasets differ in shape, and how many records one person leaves behind decides most of the numbers that follow.

| Dataset | Source | People | Records | Variables |
| --- | --- | --- | --- | --- |
| Voice | UCI Parkinsons | 32 (24 patients, 8 controls) | 195 recordings | 22 acoustic |
| Telemonitoring | UCI Telemonitoring | 42 (all patients) | 5,875 records | 16 acoustic, plus age and sex |
| Blood transcriptome | GEO GSE72267 | 59 (40 patients, 19 controls) | 59 measurements | 22,277 probes |

▲ The three public datasets used in the audit. | Source: [arXiv:2611.14533, Table III](https://arxiv.org/abs/2611.14533)

> [!callout]
> The first two datasets collect several records per person: six or seven for voice, around 140 for telemonitoring. The third measures each person once and carries more than 22,000 variables instead. A dataset with more records than people and a dataset with more variables than people inflate a score in two different ways.

## The Score Falls When One Patient Stays on One Side

For the voice data, the established protocol shuffles all 195 recordings, cuts them 70/30, and repeats that 20 times. Under that scheme, five of a patient's seven recordings land in training and two land in test almost every round. The alternative the audit uses takes the person as the unit. Every recording from one patient goes entirely into training or entirely into test, and never straddles the two.

▲ Pebblous original diagram. The recording counts are illustrative, and both accuracy values come from Table V of the paper.

Splitting by patient gives 0.780. With a Random Forest in place of the original model, the same subject-level folds reach 0.829, which still falls short of the 0.892 that record-level folds produced. The authors ran the same model swap on the telemonitoring data and got the same outcome, so the paper records that Random Forest recovered neither gap, in voice or in telemonitoring. These were not points a stronger model could retrieve, which is also where the conclusion comes from: the inflation belongs to the evaluation protocol rather than to the model.

To measure the size of the leakage on its own, the authors held the fold count and the model identical and paired record-level folds against subject-level folds. Pooling every out-of-fold prediction and scoring once gives 0.892 against 0.693, a difference of 0.200 (95% CI [0.087, 0.330]). Scoring each fold separately and averaging gives 0.899 against 0.723, a difference of 0.175 (95% CI [−0.021, 0.371], corrected p = 0.039). Change the way the scores are aggregated and the gap still runs in the same direction.

### 2.1. In Telemonitoring, Explained Variance Drops Below the Baseline

In the telemonitoring data, where one person leaves around 140 records, the same thing happens on a larger scale. Unlike classification, this task is a regression that predicts a symptom score as a number, and it is graded by R² and mean absolute error. A record-level split gives an R² of 0.105. A subject-level split gives −0.037. Pooling every out-of-fold prediction, as in the voice data, gives 0.106 against −0.065, and resampling at the patient level puts the difference at 0.171 (95% CI [0.138, 0.225]). This is the track the paper singles out as the most severe inflation of the three.

A negative R² means the model explains less than a baseline that ignores every feature and predicts the mean of the training scores. Measured as error, the gap is narrower than that sounds. The mean absolute error of the subject-level model is 8.86 points in the paper's table and 9.12 points in its body text, against 8.91 points for the mean-only baseline. Either figure sits right beside the baseline, and a paired test corrected for the overlap between folds could not tell the two apart (p = 0.716). The accurate reading is that whatever this model adds in front of an unseen patient has not been measured. Swapping in a Random Forest makes matters worse, with an R² of −0.483 and an error of 10.53 points.

The authors also opened up what the model was keying on when it produced a symptom score. In the model run honestly at the patient level, the largest contributor to the prediction was age, with a mean SHAP value of 0.805 against 0.453 for DFA in second place, while the remaining acoustic features contributed little or were shrunk to zero. Age differs from person to person but barely moves within one person. Much of the apparent skill that the record-level model displayed was pointing at whose record this was, not at an acoustic marker of severity. The account of a model memorizing people instead of disease surfaces here in a single variable.

> [!callout]
> The two datasets overlap in exactly one condition: each person carries more than one record. The tasks differ, classification against regression, and so do the variables, yet the same shape of inflation came out of both. That makes it hard to read as an accident of one dataset, and it makes the same question worth putting to any data with repeated measurements.

## Choosing Genes Before the Split Lifts Accuracy to 0.998

The blood transcriptome data measures each person once, so nobody can sit on both sides. A different door stands open instead. There are 22,277 probes and only 59 people, which means some probes have to be narrowed down before anything reaches the model. When that narrowing happens is what decides the score.

When the 50 probes that best separate patients from controls are ranked across all 59 people and the split comes afterwards, accuracy lands at 0.998. When the same ranking stays inside the training fold and the grade comes from a fold the selector never touched, it lands at 0.711. The difference is 0.287 (95% CI [0.096, 0.477], p = 0.003). Widening the panel to 1,000 probes leaves a gap of 0.997 against 0.797, and swapping in a Random Forest leaves 0.963 against 0.747.

▲ Pebblous original diagram. Both accuracy values come from the paper's text.

On that evidence alone, the lesson reads as "never pick variables before splitting." That is why the authors added a second way of picking to the comparison. A variance filter, which never touches the outcome labels and keeps only the probes whose values swing the most, went through the same test. Applied to the full cohort it scores 0.502, and applied inside the fold it scores 0.518, a difference of −0.016 (95% CI [−0.081, 0.049], p = 0.698). Statistically the two cannot be told apart.

That both numbers sit near 0.5 matters as much as the comparison between them. That is the level of a coin toss, and an inspection of the full-data fit found that the penalty had shrunk every coefficient to zero, leaving the classifier with nothing but an intercept. Probes picked without the labels classified nothing, on either side of the split. Turned around, picking with the labels is worth doing. Confined to the training fold, that same supervised selection lifted a chance-level model into the range of 0.71 to 0.80. This is why the authors write the safeguard as "never let labels reach a selection step outside the training fold" rather than "avoid pre-filtering."

> [!callout]
> The problem is not the bare fact that variables were picked before the split. It is whether the answers were in the room while the picking happened. Fifty probes chosen with the labels in hand amount to opening the answer key while the exam is still being written, which is why 0.998 measures the size of that participation rather than any diagnostic ability. Selection that never touched the labels happened just as early and moved the score not at all.

## The Signal That Survives a Stricter Split

The transcriptomic data carried one more hidden structure. GSE72267 records no batch field, but the raw CEL file names carry an enrollment code, and grouping the samples by that code gives 36 samples in codes that hold both a patient and a control (18 patients, 18 controls) and 23 samples in codes that hold only one class (22 patients, 1 control). The composition splits along the recruitment waves.

To check whether that structure had mixed into the score, the authors kept the Parkinson's patients only and asked a model to predict, from gene expression, which recruitment wave a person had arrived in. The accuracy is 0.906 (95% CI [0.759, 1.000]). The permutation statistic was 0.882 against a null mean of 0.515 and a 95th percentile of 0.703, which gives p = 0.010. Part of what those expression values encode is when the measurement took place, not whether the person has the disease.

So the audit kept the 36 samples that are half patients and half controls, took the recruitment structure out, and measured again. Diagnostic accuracy came to 0.838 with 1,000 probes and the same 0.838 with a 50-probe panel chosen inside the fold. Lining up Random Forest scores by panel size under honest fold-internal selection, 50 probes give 0.811 and 1,000 variance-filtered probes give 0.844, a difference of 0.033 (95% CI [−0.065, 0.130], corrected p = 0.486) that cannot be told apart. Some probes also kept coming back across folds: 19 were selected in more than half of them, and 5 in at least 80%.

Among panels of the same size, the method of choosing decided the score. Fifty probes chosen only by how much their values swing reached 0.497 and stayed at chance, while 50 chosen by importance inside the fold reached 0.811. What the selector uses outranks how far the panel is trimmed. The authors stopped short of declaring 50 the equal of 1,000, though. The one-sided upper bound on any loss is 0.113, so a formal non-inferiority claim at a 0.05 margin needs a larger cohort, and 3 of the 19 stable probes also rank among the 50 probes that best predict recruitment wave, which the authors flag as a reason for particular care when these probes are read biologically.

The risk the authors set down separately in their ethics statement is over-claiming. A classifier carrying inflated accuracy into clinical use could produce false reassurance or false alarm, and inflated estimates accumulate in the literature and go on to shape which biomarkers get pursued. That is also why this audit reports the rigorous numbers as its primary results and calls the transcriptomic panel a validated selection procedure rather than a diagnostic test.

The paper sets three limits on itself. Every conclusion rests on a single public cohort per modality; the voice and blood control groups are small, at 8 and 19; and the recruitment waves were inferred from file names rather than confirmed from metadata that the instruments recorded. The last of those lands directly on the batch analysis at the top of this section. The next task the authors name is validating the stable panel on an independent cohort.

> [!callout]
> The numbers in this section bend the story once. An honest split lowers the score, but it does not take the score to zero. A value of 0.838 survives in the 36 wave-balanced samples, and it survives a panel cut to a twentieth of its original size. Clearing out the inflation does not erase the signal. It shows what the signal is worth.

## Why Pebblous Is Watching This Audit

This paper reads easily as medical-AI news. From where data work sits, a different part of it remains. Not one line of the models changed, the raw data stayed as it was, and the scores still moved by 0.1 to 0.3. Only two pieces of work happened in between. What unit separates training from test, and whether the choosing of variables sits before that split or after it. Both are decisions made while preparing data, not while modeling.

The five recommendations the paper closes with all aim at that same stage: use group-aware splitters and verify that repeats really do produce distinct partitions; report pooled out-of-fold estimates with resampling at the patient level; include a supervised-selection arm whenever pre-split selection is examined; pre-specify an equivalence margin before claiming that a smaller panel performs the same; and audit batch structure within the outcome classes.

The first item comes with a trap the authors walked into themselves. The GroupKFold splitter in Python's scikit-learn does not re-randomize when the rows are shuffled, because it assigns groups to folds in order of size. Permuting the row order of the voice data ten times produced the same assignment of patients to folds every time. An experiment written up as repeated cross-validation may in fact be one partition run ten times. The authors switched to StratifiedGroupKFold with shuffling turned on, built ten distinct partitions, and put only those estimates into their tests.

For anyone on the receiving end of a scorecard from a vendor, those five collapse into three questions. None of the three asks about model architecture or parameter count. They still tell you first how much of the scorecard will survive.

- What unit separated training from test. If data with repeated measurements was separated by record, that number is an upper bound, not a performance figure.
- Which side of the split the preprocessing and the variable selection ran on. If variables chosen with the answers in hand sit before the split, the evaluation is reading back the result of that choice.
- Whether when and where the data was collected is tangled up with the outcome. If recruitment period or instrument or institution moves together with the label, the model learns that first.

When Pebblous prepares data into a state that AI can use, it treats the context attached to a value as a quality property alongside the accuracy of the value itself, and this is the reason. Which person a record came from, when it was collected, which instrument produced it: all of that has to stay attached to the value for an evaluation to be designed around those lines. Splitting by patient was possible in this paper only because patient identifiers survived in the data, and auditing the recruitment structure was possible only because an enrollment code survived in the file names. In a dataset without those markers, leakage happens and nobody learns that it did.

One question is left over. Which split produced the numbers on the model scorecard you were handed? If no answer comes back, the safer place to record that number is as an upper bound rather than as performance.
