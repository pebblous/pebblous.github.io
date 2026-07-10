---
title: AI That Tells 12 Drones Apart
subtitle: PBLS_Drone_classification DataClinic Diagnostic Report — The Perfect Balance Trap
date: 2026-04-02
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI That Tells 12 Drones Apart

_PBLS_Drone_classification DataClinic Diagnostic Report — The Perfect Balance Trap_

## Executive Summary

> [!callout]
> This article is based on the findings of **[DataClinic Report #227](https://dataclinic.ai/en/report/227)**.
>                             **PBLS_Drone_classification** is a synthetic drone image dataset produced by Pebblous in-house.
>                             It uses the same underlying imagery as the previously diagnosed [PBLS_Drone (#226)](https://dataclinic.ai/en/report/226),
>                             but with **classification labels for 12 distinct drone types** added on top.
>                             The dataset contains **28,800 images** — exactly **2,399 per class**, achieving textbook-perfect balance.
>                             Yet DataClinic's overall score came in at **76 (Fair)**, lower than #226's 82.
>                             Why does flawless class balance still result in a lower score? That is the central question this diagnosis addresses.

76

DataClinic Overall Score

12

Drone Type Classes

28,800

Total Images

2,399

Images per Class (Perfect Balance)

### #226 vs #227 — Same Data, Different Diagnosis

<!-- stat-card -->
**82** — #226 PBLS_Drone — Single class "drone" · 28,801 images — DataBulkup recommended — 76 — #227 PBLS_Drone_classification — 12 classes DR01–DR12 · 28,800 images — DataDiet recommended — Adding class labels → 53-dimensional domain-specific lens applied → multi-cluster structure persists → score drops

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityGood** — L1 MissingGood — L1 Class BalanceGood — L1 StatisticsGood — L2 DataLensNo Issues — L2 GeometryGood — L2 DistributionPoor — L3 DataLensNo Issues — L3 GeometryFair — L3 DistributionPoor

## Detection vs Classification — What's the Difference?

Drone AI breaks down into two fundamentally different problems.

### Detection

<!-- stat-card -->
**🔍** — "Is that a drone?" — binary discrimination

### Classification

<!-- stat-card -->
**🎯** — "Which drone is that?" — type identification

In military operations, drone classification is more than a technical challenge. A small reconnaissance drone (DR01) and a loitering munition (DR05/DR09) represent entirely different threat levels. Only when AI can accurately classify the type can the appropriate response — jamming, laser intercept, or kinetic defense — be decided instantly.

> [!callout]
> **Different data requirements:** A detection model only needs to tell "drone vs. non-drone," so a single-class dataset suffices.
>                             A classification model must learn the discriminating features between classes, making both **intra-class diversity** and **inter-class separability** critical.
>                             This is the core reason the same image pool scores 82 for detection but only 76 for classification.

## Dataset Overview — PBLS_Drone_classification

PBLS_Drone_classification is a synthetic drone image classification dataset produced in-house by Pebblous.
                        28,800 **Full HD (1920×1080)** RGB images — generated through the same CG rendering pipeline — have been systematically labelled with 12 drone type categories.

PBLS_Drone_classification — 12-class synthetic drone image collage (DataClinic L1)

### Filename Structure — How Classes and Frames are Encoded

#### 📊 Dataset Specifications

- 🖼️ **28,800 images** (28,788 used in diagnosis)
- 📦 **52 GB** (52,644 MB)
- 📐 **1920×1080 px** — Full HD
- 🎨 **RGB channels** — fully consistent
- 🏷️ **12 classes** — DR01–DR12
- ⚖️ **Perfect balance** — 2,399 images per class, σ=0

#### 🎯 Intended Applications

- 🛡️ **Drone type classification** AI model training
- 🎯 **Threat-level identification** system development
- 🔬 **Fine-grained class discrimination** benchmarking
- 🌐 **Counter-UAS** decision-making AI
- 📡 **Multi-sensor fusion** classification research

## 12-Class Drone Gallery

> [!callout]

## Level 1 — Basic Quality: All Checks Pass

#### ✅ Image Integrity

#### ✅ Class Balance

#### L1 Summary — Synthetic Data's Precision Control

### Class Mean Images — Background Repetition Made Visible

## Level 2 — DataLens Analysis: Environments Cluster, Distribution Fragments

### Three Environment Clusters

#### Urban Environment

#### Natural Environment

#### Mixed Environment

#### L2 Distribution: Poor — What Multimodality Means

## Level 3 — Even the Domain-Specific Lens Can't Resolve the Split

### ⚠️ 3-Cluster Structure Persists — Domain-Specific Lens Fails to Heal the Split

- • **Primary cluster (center-left, dominant)**: The largest, highest-density group — the vast majority of data concentrates here
- • **Secondary cluster (upper-right)**: Medium-sized, spatially disconnected from the primary cluster
- • **Minor cluster (lower-right)**: Small, low-density outlier group

> [!callout]

### Density Histograms — Comparing L2 vs L3 Lenses

#### What the Two Lenses Capture Differently

### Per-Class Density Distribution — Which Drones Are Most Canonical?

#### What the Density Rankings Tell Us

## Outlier Analysis — Canonical vs Anomalous

### 🟢 High Density — Canonical (Most Repeated) Samples

### 🔴 Low Density — Outlier (Most Rare) Samples

#### High vs Low Density — What This Tells Us

## The 76-Point Paradox — Why Perfect Balance Still Scores Low

> [!callout]
#### The Real Risk for Classification Models

## Recommendation — Data Diet First

### 🥗 Data Diet — Removing Redundant Frames

#### ⚖️ #226 DataBulkup vs #227 DataDiet

#### 📈 Expected Outcomes

## Conclusion

> [!callout]
