---
title: AI Identifies Threats in the Sky
subtitle: Quality Insights on Defense Drone Synthetic Data PBLS_Drone — DataClinic Diagnosis
date: 2026-03-16
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Identifies Threats in the Sky

_Quality Insights on Defense Drone Synthetic Data PBLS_Drone — DataClinic Diagnosis_

## Executive Summary

> [!callout]
> This article is based on the analysis results of **[DataClinic Report #226](https://dataclinic.ai/en/report/226)**.
>                             **PBLS_Drone** is a defense-specialized synthetic image dataset built in-house by Pebblous to optimize drone object recognition AI models.
>                             Comprising **28,801 images** and **52GB** of single-class drone data, it achieved a DataClinic overall score of **87 (Good)**.
>                             A significant improvement over the previously diagnosed [PBLS_Military (68)](https://dataclinic.ai/en/report/224), this time **Data Bulk-up instead of Data Diet** is recommended.

87

DataClinic Overall Score

28,801

Total Images

52GB

Dataset Size

1920×1080

Resolution (FHD)

### PBLS_Drone vs PBLS_Military — Two Defense Datasets Compared

<!-- stat-card -->
**87** — PBLS_Drone — Single class · 28,801 images · FHD — DataBulkup Recommended — 68 — PBLS_Military — 10 classes · 3,171 images · HD — DataDiet Recommended — Key difference: PBLS_Drone has no class balance issues as a single-class dataset, and its high image diversity earned it a higher score.

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityGood** — L1 MissingGood — L1 Class BalanceN/A — L1 StatisticsGood — L2 DataLensN/A — L2 GeometryFair — L2 DistributionGood — L3 DataLensN/A — L3 GeometryFair — L3 DistributionGood

## Why Drone AI? — Threats in the Sky and Defense

The 2022 Ukraine war proved to the world that drones have become a game changer on the modern battlefield.
                        From low-cost commercial drones to precision-strike loitering munitions, drones have infiltrated virtually every operational domain including reconnaissance, strike, supply, and electronic warfare.

**Counter-UAS** technologies are evolving rapidly in response.
                        Among various countermeasures such as radar, jamming, lasers, and interceptor drones, **AI-based drone detection & classification** serves as the critical "eyes" of every defense system. For AI to recognize drones quickly and accurately, rich and diverse training data is essential.

### Counter-UAS Core Tech

<!-- stat-card -->
**🎯** — AI that detects, classifies, and tracks enemy drones — the brain of defense systems

### Limits of Real Photography

<!-- stat-card -->
**📷** — Capturing diverse drones at various altitudes, distances, and lighting is prohibitively expensive

### Synthetic Data Solution

<!-- stat-card -->
**🏭** — CG generates infinite drone scenarios, angles, environments, and distances — AI training without real footage

### Drone Simulation Blueprint in the Filename

## Dataset Overview — PBLS_Drone

#### 📊 Dataset Specifications

- 🖼️ **28,801 images** (28,800 used for diagnosis)
- 📦 **52GB** (52,646MB)
- 📐 **1920×1080px** — Full HD, fixed size
- 🎨 **RGB channels** — consistent throughout
- 🏷️ **Single class** — "drone" (12 models within class)
- 📅 **2026.03.12** diagnosis completed

#### 🎯 Application Areas

- 🛡️ **Counter-UAS** AI model training
- 🔍 **Drone detection & classification** algorithm development
- 📡 **Radar/EO-IR sensor fusion** AI research
- 🌐 **Environmental & transportation** drone monitoring
- 🧪 **Benchmark dataset** for model evaluation

## 12 Drone Gallery — What AI Needs to Recognize

> [!callout]

### 🔷 Multi-Rotor Reconnaissance & Surveillance Drones

### 🔴 Attack & Loitering Munition Drones

> [!callout]

### 🔵 Fixed-Wing & VTOL Drones

### 🟣 Swarm & Special-Purpose Drones

### 🌿 Same Drones, Different Environment — Natural Background Comparison

## Level 1 — Basic Quality Diagnosis

### Overall Mean Image — The "Typical Drone" Through AI's Eyes

#### ✅ L1 Strengths

- 📐 **Perfect resolution consistency**: All 1920×1080px fixed — no padding or resizing needed
- 🎨 **RGB channel consistency**: No grayscale or RGBA contamination
- ❌ **Zero missing values**: No corrupted or empty images
- 📊 **L1 Statistics: Good** — rich dataset with diverse structure and texture

#### 📌 L1 Notable Points

- 🏷️ **Single class**: Class balance metric N/A
- 🔄 **Multiple drone types**: Rich visual diversity across 12 models
- 🌐 **Mixed natural/urban backgrounds**: Clear environment clusters form at L2

> [!callout]

## Level 2 — DataLens Analysis (Wolfram ImageIdentify Net V2)

### 3 Drone Groups Found by General AI — "The Background Is Different"

#### Natural Environment Cluster

#### Urban Environment Cluster

#### Mixed/Transition Cluster

> [!callout]

### 🔬 Pebbloscope L2 — Backgrounds Dominate the Clusters

### L2 Key Metrics

## Level 3 — Drone-Specialized DataLens (788 Dimensions)

### Complex Structure Revealed at L3 — "Shape Starts to Matter"

#### L2 (General Lens)

- · 1,280 dims → Mean density **0.3**
- · Background-based clusters
- · "Natural vs Urban" binary structure
- · Outliers 6.8%

#### L3 (Specialized Lens)

- · 788 dims → Mean density **0.41** (+37%)
- · Shape + environment hybrid clusters
- · Complex multimodal distribution (diversity confirmed)
- · Outliers 6% (slightly decreased)

> [!callout]

### 🔬 Pebbloscope L3 — Background Clusters Persist Even Under Specialized Lens

## Outlier Analysis — Scenes AI Is Most and Least Confident About

### 🟢 High Density — "Typical Drone" Scenes AI Is Most Confident About (L3)

> [!callout]

### 🔴 Low Density — Outlier Drone Scenes That Confuse AI (L3)

### 🔄 The Two Most Different Scenes — Extremes of the Dataset

### 🔗 Most Similar Scenes — Nearest Cluster Around DR08

> [!callout]

## The 87-Point Paradox — What the Score Hides

### Why did 87 score high?

- 🔸 Single class → no class balance penalty (N/A)
- 🔸 28,801 images at scale → L1 Statistics: Good
- 🔸 Resolution and channel consistency → L1 Integrity: Good

- 🔸 Background diversity lacking — same scenes repeated
- 🔸 12 drones under single "drone" label → no inter-model distinction
- 🔸 Background-based clustering → hinders drone shape learning

### 💡 "Single class" — design choice or limitation?

## Recommendations — From 87 to Even Higher, Why DataBulkup

> [!callout]

### Data Bulk-up

### Expanded Environment Diversity

### Contrasting Recommendations for Two Defense Datasets

## Conclusion — The Possibilities Opened by an 87-Score Drone Dataset

### PBLS_Drone Key Summary Card
