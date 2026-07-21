---
title: AI-Ready Data Means Something Different in Every Scientific Field
subtitle: Completeness, consistency, and fitness carry the same names across domains — the REDI framework automatically checks how their rules diverge
date: 2026-07-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI-Ready Data Means Something Different in Every Scientific Field

_Completeness, consistency, and fitness carry the same names across domains — the REDI framework automatically checks how their rules diverge_

## Executive Summary

> [!callout]
> Even in the age of scientific AI, the task that truly eats time before training begins is confirming that the data is usable — and the standard for "usable" changes from one field to the next. Data that perfectly honors the FAIR principles (Findable, Accessible, Interoperable, Reusable) can still be useless for AI training if it lacks structure or if its representations don't line up. This article uses REDI, an automated data-readiness framework from U.S. national labs, to show how a single set of names — completeness, consistency, fitness — gets translated into entirely different rules in each domain.

> REDI turns the massive datasets of four scientific domains — climate, proteomics, materials, and fusion — into AI-training-ready data automatically, running on supercomputers. Fusion simulation data goes through a normalization that compresses the original by 298×; protein data has to place its gap token at exactly index 21 or training breaks silently. The same pipeline is used across all four, yet the point of intervention differs by domain. And REDI itself admits that the deeply domain-specific transformations still resist full automation.

> When the domain-specific diagnosis Pebblous DataClinic has done for image data extends to science data at national-supercomputer scale, what carries over unchanged and what has to be built anew? Two things shift: the scale of the compute, and who renders the verdict on validation — where the human eye gives way to the laws of physics.

<!-- stat-card -->
**298×** — Fusion data compression — Normalizing XGC1 electron density to [0,1] shrinks it 298× vs. the original

<!-- stat-card -->
**Index 21** — Protein gap-token position — Put it at 20 by mistake and training corrupts silently, with no error

<!-- stat-card -->
**86%** — Ingest share of fusion runtime — The bottleneck moves by domain — climate spends 70% on the output stage

<!-- stat-card -->
**Levels 3–5** — Where each domain stands — Materials and climate near level 5; fusion and life sciences sit at 3–4

## 'AI-Ready' Is a Different Word in Every Field

The flashier model architectures get, the easier it is to forget one fact. In a scientific AI project, the work that actually consumes the most time before training starts is confirming that the data is in usable shape and converting it into that shape. Because it's tedious, this step often gets skipped or rushed — but data that goes wrong here comes back as poor performance no matter how good a model you stack on top.

A paper from researchers in the U.S. national laboratory system, **"Automated Data Readiness for Scientific AI,"** confronts one misconception head-on: honoring the FAIR principles does not make data ready for AI. FAIR data can still lack structure, carry representations that contradict one another, miss the metadata needed for feature extraction, or fail to match the format training demands. The paper calls this broader idea **"Data Readiness for AI"** — a notion of data quality that spans schema consistency, feature completeness, provenance traceability, governance constraints, and validation against domain expectations.

This article's central claim goes one step further. The data-quality criteria carry the same names in every field: completeness, consistency, fitness. But the rules those names actually point to differ completely by domain. In climate data, "completeness" means the grid is aligned with no gaps; in genomic data it means personal information has been properly anonymized; in fusion data it means the laws of physics are preserved within a precision tolerance. Same word, different yardstick.

## REDI, a National-Lab Automated Checking Pipeline

The framework the paper proposes is called **REDI**. It's a five-stage pipeline that automatically converts massive scientific datasets into AI-training-ready data, following the sequence ingest → preprocess → transform → structure → output, with provenance instrumentation built into each stage for reproduction and distribution. A companion tool, SetGo, automates FAIR compliance and catalog publication.

The scale is not laboratory-sized. REDI achieved near-ideal parallel scaling out to 100 nodes on a Frontier-class supercomputer. The goal is not raw performance but something else: turning data preparation — until now locked inside individual researchers' scripts — into a reproducible, reusable community asset. It's an attempt to let the know-how of preparing data be shared and verified the way papers and code are.

> [!callout]
> The heart of REDI is that the stage names stay identical across the four domains while what actually happens inside each stage is completely different from one domain to the next — a structure that pairs a domain-neutral skeleton with domain-specific parameters. That difference comes into focus in the measured numbers of the next section.
