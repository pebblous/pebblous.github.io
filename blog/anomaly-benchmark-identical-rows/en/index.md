---
title: On the AI Exam, the Same Row Carries Two Different Answers
subtitle: An exact-row audit of all 690 OddBench anomaly detection datasets found train-test overlap in 355 and conflicting labels on identical rows in 147
date: 2026-09-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# On the AI Exam, the Same Row Carries Two Different Answers

_An exact-row audit of all 690 OddBench anomaly detection datasets found train-test overlap in 355 and conflicting labels on identical rows in 147_

## Executive Summary

> [!callout]
> When a table arrives and a model is graded on it, we usually count one row as one observation. But if rows with identical values appear several times over, the first thing to settle is what that repetition is. It might be a record of the same account transacting normally for three days straight. It might be the mark left by one record copied three times while two tables were joined. A paper posted to arXiv on 27 August put that question to every public dataset in the anomaly detection field. This article looks at what the audit turned up, and at how much the scoreboard moves once the counting unit changes.

> An exact-row audit of the 690 datasets in the anomaly detection benchmark collection OddBench found that in 355 of them, more than half, the training set and the test set both contained the very same row. And in 147, two rows that did not differ in a single cell carried the labels normal and anomalous respectively. The author stops short of calling this an error. There are legitimate reasons for a row to repeat, and the released table alone cannot tell you which reason applies — that is the paper's actual claim.

> Sections 1 through 4 report what the paper says. Section 5 is this article's own reading of it.

### Key Figures

Source: Deng, [arXiv:2609.29580](https://arxiv.org/abs/2609.29580), abstract, Table 1, and experimental sections.

<!-- stat-card -->
**355 / 690** — Datasets where training and test data overlap — Both sides hold a row whose values match exactly, which is 51.4% of the benchmark

<!-- stat-card -->
**137** — Datasets that grade a normal as an anomaly — A row marked anomalous in the test set is identical to a row taught as normal

<!-- stat-card -->
**50–61** — Datasets where AUROC moved by more than 0.05 — With the model untouched and only the counting unit switched from rows to values, for each of four detectors

<!-- stat-card -->
**30** — Datasets where the top detector changed — The same four detectors ran on the same data, and the winner depended on the counting unit

## 690 Datasets, Compared One Row at a Time

Anomaly detection is the work of picking out what stands apart from the normal crowd. Card fraud, early signs of equipment failure, attempts to break into a server. Researchers in this field score every new method against a collection of public datasets. OddBench is one such collection, holding 690 tabular datasets already divided into training and test portions.

What the author did is simple. He opened all 690 and counted where, and how often, a row appeared whose values did not differ in a single cell. Not approximate matches, not similarity, only exact equality. The result is Table 1 of the paper.

This sits on a different layer from the checks the field has run so far. ADBench, from 2022, compared 30 methods across 57 datasets, and MacrOData, out this year, pushed that scale to 2,446. There has been work cataloguing the traps that splitting procedures set in tabular deep learning, and there are tools that learn a representation and rank the samples most likely to be duplicates or label errors. What grew in all of those was the number of methods compared and the number of datasets. What this paper counts is neither methods nor datasets but the rows inside a dataset. Which is why growing the model side does not reach it, as the author notes up front in the introduction. A detector that swaps only its encoder or prediction head cannot recover missing provenance, entity numbers, time, or exposure, and bringing in a foundation model trained on tables wholesale still maps identical rows to identical scores.
