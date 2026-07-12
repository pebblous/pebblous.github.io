---
title: Every Click on the Labeling Screen Becomes Audit Evidence
subtitle: The six data-preparation verbs named by EU AI Act Article 10, and the evidence a labeling workflow must leave behind
date: 2026-07-13
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Every Click on the Labeling Screen Becomes Audit Evidence

_The six data-preparation verbs named by EU AI Act Article 10, and the evidence a labeling workflow must leave behind_

## Executive Summary

> [!callout]
> EU AI Act Article 10 is the first law to name, clause by clause, how a high-risk AI system prepared the data it learned from. Paragraph 2(c) enumerates data-prep work as "annotation, labelling, cleaning, updating, enrichment and aggregation." Paragraph 3 demands that training, validation, and testing data be "relevant, sufficiently representative, and to the best extent possible free of errors and complete." And paragraphs 2(f)–(h) require that bias examination, mitigation, and the identification of data gaps all be put on paper. For years, data quality was an engineering problem — the work of pushing model performance higher. Under Article 10, it becomes a matter of evidence you hand to an auditor.

> The crux is not the deadline but the nature of the evidence. The Digital Omnibus pushed application of this obligation to 2 December 2027, yet the artifacts the regulation asks for are unchanged. Version history for labeling guidelines, inter-annotator agreement, label error rates, bias-examination records, data-gap logs — none of these can be produced retroactively once the model has been trained. The fact that even leading benchmark test sets carry an average 3.3% label error tells us up front that "free of errors" is a matter of measurement, not perfection.

> For a prepared organization, the 16-month deferral is not a break but a window to instrument the pipeline. The moment the work of diagnosing a dataset's representativeness, gaps, and bias — what Pebblous has long called "diagnosing the data" — translates one-to-one into the individual requirements of Article 10, compliance stops being a cost and becomes a barrier only the prepared can cross. This report follows where in the labeling workflow that translation happens.

Four numbers say first where this translation lands: that "free of errors" is a measurement rather than a declaration of perfection, the annotator agreement that gauges representativeness, the cost of standing up a new quality system, and the gap left by organizations that have yet to begin.

<!-- stat-card -->
**3.3%** — Average benchmark label error rate — Why "free of errors" is a measurement · Northcutt 2021

<!-- stat-card -->
**α ≥ 0.80** — Reliable annotator agreement — Quantitative evidence of representativeness · Krippendorff

<!-- stat-card -->
**€193K–330K** — Cost of a new QMS — Plus €71.4K/yr upkeep · CEPS estimate

<!-- stat-card -->
**26.2%** — Organizations that had begun — One month after the AI Act took force · Deloitte

## The Law Names the Labeling Process

An annotator draws a box over an image, picks "pedestrian" from a dropdown, and moves to the next frame. Repeated thousands of times a day, that click was for a long time an internal company affair. Whether the label was correct, whether the guidelines were consistent, who judged by what standard — all of it was left to the diligence of the team. EU AI Act Article 10 pulls that very workbench inside the statute.

We have covered the classification criteria for high-risk AI and the course of the deferral negotiations several times already, so we will not repeat them here. Readers who want the background can turn to [the high-risk deferral and data governance](/blog/eu-ai-act-high-risk-deferral-data-governance/en/) and [the practical impact of the Annex III deferral](/blog/eu-ai-act-omnibus-hiring-ai-governance-gap/en/). What this report digs into is one point none of that background touches: that Article 10 calls the labeling process itself by name.

### Six Verbs

Read Article 10(2)(c) as written and data-prep work is enumerated in six verbs: annotation, labelling, cleaning, updating, enrichment, and aggregation. No regulatory text has ever named the individual stages of data preparation this specifically. The list is not a set of examples but a set of audit coordinates. The moment a regulation calls a task by name, the artifacts that task leaves behind become something an auditor can demand.
