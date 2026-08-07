---
title: Drug-Discovery AI Nails Binding at 98% but Locates the Site Only 22% of the Time
subtitle: Two 2026 benchmarks re-evaluate eight protein-ligand models on unseen pockets and expose the data bias behind the scores
date: 2026-08-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Drug-Discovery AI Nails Binding at 98% but Locates the Site Only 22% of the Time

_Two 2026 benchmarks re-evaluate eight protein-ligand models on unseen pockets and expose the data bias behind the scores_

## Executive Summary

> [!callout]
> Protein-ligand binding prediction is the first gate that screens drug candidates. Recent models post scores that beat human experts on standard benchmarks and promise to compress development timelines. But two benchmarks published in 2026 asked again what exactly those scores measure. This article looks at how a model that understands the chemical mechanism of binding and a model that has merely memorized binding likelihood diverge when they face a target they have never seen.

> InteractBind showed that a top model predicting binding at 98.3% accuracy locates the actual binding site only one time in five (21.6%). The Kopko team found that a scoring function scoring a Pearson correlation of 0.8 on standard benchmarks drops to 0.047 on genuinely novel pockets that do not resemble the training data. Two results that start from different angles point at the same spot.

> For practitioners who work on data quality, the implication is clear. The bottleneck in drug-discovery AI is not model architecture but the design of the benchmarks that measure performance. If how much the evaluation set overlaps with the training set decides much of the score, the definition of "clean data" has to widen beyond training data to include a leakage-free evaluation set.

<!-- stat-card -->
**98.3%** — binding accuracy — FusionDTI, binary binding AUROC (InteractBind)

<!-- stat-card -->
**21.6%** — binding-site accuracy — same model, top-1 binding-site localization

<!-- stat-card -->
**0.8 → 0.05** — correlation collapse — GenScore, standard benchmark → unseen pocket (Kopko)

<!-- stat-card -->
**+32%** — worst-case gain — self-supervised pretraining (ATOMICA) still leaves the gap

## What the Benchmarks Measured

Predicting whether a protein and a ligand (a candidate drug molecule) bind, and how tightly they stick, is at the heart of computational drug discovery. Benchmarks so far have focused on measuring those two things. One is binary binding prediction, the task of deciding whether a given protein and ligand bind at all. The other is affinity regression, which predicts the strength of binding as a number and checks how well it correlates with real experimental values. The headline numbers on the leaderboards come mostly from these two metrics.

The trouble is that these metrics only confirm the fact that binding happens; they never ask **why and where** the model decided it would bind. Binding occurs when a drug enters a specific pocket on the protein and forms chemical interactions such as hydrogen bonds or hydrophobic contacts. Deciding whether binding happens and pinpointing the location and type of those interactions are entirely different abilities. The former can be faked with statistical patterns alone; the latter requires understanding the mechanism of molecular recognition.

[InteractBind](https://arxiv.org/abs/2605.24045), submitted to the 2026 NeurIPS Datasets and Benchmarks track, takes direct aim at exactly this gap. Its title is a question: do protein-ligand models learn binding sites, or just binding likelihood?

## 98% on Binding, 21% on the Site

InteractBind is built from 99,391 protein-ligand pairs drawn from the Protein Data Bank (PDB). It holds 11,473 unique proteins and 9,017 unique ligands, and each binding event is annotated with six kinds of non-covalent interaction: hydrogen bonds, salt bridges, van der Waals contacts, hydrophobic contacts, π-π stacking, and cation-π interactions. The authors re-evaluated eight models on the same data, including three sequence-based models and five interaction-aware ones.

The contrast in the results is stark. FusionDTI, the top performer, scored AUROC 98.3% on binary binding prediction. On the question of whether binding happens, it is close to perfect. Yet the same model's ability to pinpoint the binding site — the share of cases where its single best candidate matches a real binding residue (BRHR@1) — was only 21.6%. Even widening the field to five candidates (BRHR@5) reached just 35.6%, less than half. Line up the top three models and they all sit below half: FusionDTI 35.6%, DrugBAN 31.4%, GraphBAN 30.4%.

This low localization accuracy was also uneven across types of binding. The paper reports that when performance was broken out by the six non-covalent interaction types — hydrogen bonds, salt bridges, hydrophobic contacts, and the rest — it varied markedly from one type to another. Some binding modes are at least caught; others are almost entirely missed. A model that had learned the general principles of molecular recognition should hit them evenly regardless of interaction type, but in practice performance was concentrated on the specific binding modes seen most often in the data.

The interpretation converges on one point. If a model that nearly perfectly calls whether binding happens misses where that binding takes place most of the time, what it has learned is likely not the chemical mechanism of molecular recognition but a statistical distribution — "this kind of protein tends to attract this kind of ligand." The paper's concluding sentence says as much: strong binary binding performance does not translate into reliable binding-site localization.
