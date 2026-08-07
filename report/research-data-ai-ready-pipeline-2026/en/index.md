---
title: From Stored Research Data to AI Training Data
subtitle: A practitioner
date: 2026-07-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# From Stored Research Data to AI Training Data

_A practitioner_

## Executive Summary

> [!callout]
> Between depositing data in a repository and having that data train an AI model lies a process that cannot be skipped. The naive open-data optimism that "if you publish it, it gets reused" has already collapsed against the evidence. A large share of the repositories studied failed even FAIR's reusability requirement, yet researcher awareness of FAIR runs as high as 94.7%. The problem isn't ignorance — it's that the process between deposit and trainability has never been automated. This report answers that process in four questions: what to do, by which standard, how to measure it, and who is accountable.

> That process now exists not as a concept but as standards. On top of the metadata that handles discovery sits Croissant, a metadata standard for ML training; and for data quality, the ISO/IEC 5259 series defines completeness, accuracy, representativeness, and label reliability as auditable measures. So one axis of this piece is a distinction: FAIR is the floor, and AI-Ready is the higher bar that adds quality, labels, representativeness, machine loading, and provenance on top of it. How dangerous unmeasured quality can be is captured in a single number: even the test sets of major ML benchmarks carried an average of 3.3% mislabeled examples, and fixing them flipped the model performance rankings.

> With Korea's National Research Data Act taking effect in May 2027, the leading international repositories have already built deposit-time validation, ML metadata exposure, and quality measurement into their pipelines. By contrast, many national repositories — including Korea's DataON — automate only the discovery layer, leaving four points empty: automated validation, ML training metadata, quality measurement, and automated curation. Filling those blanks is the task, and its scale is beyond manual human effort — which makes automated quality diagnosis and curation a prerequisite rather than an option.

<!-- stat-card -->
**3.3%** — Benchmark label errors — Average across 10 major ML benchmark test sets — QuickDraw peaks at 10.12%

<!-- stat-card -->
**11%** — Meet all FAIR elements — Awareness is 94.7% — the gap between knowing and doing

<!-- stat-card -->
**700K+** — Croissant datasets — The ML training-layer standard has already spread web-wide (Feb 2026)

<!-- stat-card -->
**4** — Blanks in DataON — Automated validation, ML metadata, quality measurement, and automated curation are absent

## Stored Doesn't Mean Trainable

Picture a scene. A research team uploads three years of experimental measurements to a national repository. A DOI is issued, a license is attached, and it shows up cleanly in search. On paper, it's "open research data." A few months later, another team tries to train a model on it — and gives up. The columns are named `var1, var2, var3`, with units recorded nowhere. There's no telling whether a missing value is a blank, a `0`, or `-999`, and the codebook explaining what the labels mean lives somewhere on the author's laptop. It was stored, but it can't be trained on. That gap is where this report begins.

This kind of break is closer to the rule than the exception. The open-data optimism that "if you publish it, it gets reused" has already collapsed against the evidence. Studies find that 38% of repositories fail FAIR's reusability (R1) requirement, and in 30% of cases the metadata is too ambiguous to interpret. Of the 250,000 samples in the gene-expression database GEO, only 11.5% shared complete metadata. More painful still is the gap between awareness and practice: researcher awareness of FAIR is near-saturated at 94.7%, yet only 11% meet all of FAIR's elements and just 23.8% have institutional support staff. The problem isn't ignorance — it's that the process between deposit and trainability has never been automated.

What has to go missing from that process to block training resolves into a handful of typical failure modes. Below are the five defects found again and again in data that was "stored but can't be trained on."

- ·**No machine-readable schema:** column types, units, meanings, and the codebook exist only as human notes, so code can't parse them automatically.
- ·**Inconsistent labeling conventions:** which field is the ground-truth label, and who labeled it by what criteria, is neither documented nor measured.
- ·**Broken provenance:** you can't trace what preprocessing turned the source data into this file, so neither reproduction nor audit is possible.
- ·**Undefined training rights:** redistribution is allowed, but whether it may be used for AI training, and how privacy and security exceptions are handled, is left unstated.
- ·**Unmeasured representativeness and quality:** how well the data represents its target population, and how many missing values or outliers it contains, is never captured as a number.

### 1.1. Passing FAIR Still Doesn't Make It Trainable

A common misconception has to be addressed here: "Doesn't following the FAIR principles solve reuse?" FAIR (Findable, Accessible, Interoperable, Reusable; Wilkinson et al., 2016) is a set of 15 principles for making data findable, accessible, interoperable, and reusable. From the start it aimed at machine-actionable metadata rather than human-readable documents — an excellent floor. The catch is that FAIR is a set of principles, not a standard or specification. In particular, reusability principle R1 only asks you to "describe the metadata richly"; it doesn't define the concrete conditions ML training needs — field schemas, label reliability, representativeness, train/test splits, quantitative quality measurement.

So even the `var1, var2` CSV above can nominally pass FAIR as long as it has a PID, a license, and minimal metadata. Training is still impossible. FAIR is "the floor for being found and reused," and AI-Ready is the higher bar that adds quality measurement, label reliability, representativeness, machine-loading specifications, and provenance on top of it. Fail to distinguish the two, and "FAIR-but-untrainable" data keeps piling up in the repository.
