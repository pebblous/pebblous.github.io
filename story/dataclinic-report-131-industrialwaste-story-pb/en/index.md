---
title: Even Trash Has Patterns
subtitle: 1M National Industrial Waste Images — DataClinic Diagnosis (AI Hub #137)
date: 2026-03-17
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Even Trash Has Patterns

_1M National Industrial Waste Images — DataClinic Diagnosis (AI Hub #137)_

## Executive Summary

> [!callout]
> This article is based on the analysis results from **[DataClinic Report #131](https://dataclinic.ai/en/report/131)**.
>                             The **Industrial Waste Image** dataset is the largest industrial waste image collection provided by AI Hub (Korea's national AI data platform under the Ministry of Science and ICT).
>                             Despite its impressive scale of 72 waste categories and **1 million images**, it scored only **51 (Poor)** in the DataClinic diagnosis.
>                             Class imbalance reaches up to **3,978x**, and the dataset is flooded with visually similar images.

51

DataClinic Overall Score

72

Waste Classes

1M

Total Images

3,978x

Max Class Imbalance

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityFair** — L1 MissingFair — L1 Class BalancePoor — L1 StatisticsPoor — L2 DataLensNo Issues — L2 GeometryGood — L2 DistributionGood — L3 DataLensNo Issues — L3 GeometryGood — L3 DistributionGood

> [!callout]
> **💡 How is the 51-point score calculated?**
>                             The DataClinic composite score is a weighted sum of sub-grades across L1 (basic quality), L2 (general neural network), and L3 (domain-specific), yielding a 0–100 score.
>                             This dataset scored **'Good'** on L2/L3 distribution and geometry, but **'Bad'** on L1 class balance and statistics — dragging down the overall score significantly.
>                             In short, **the data structure is sound, but basic quality management failed** — a textbook case.

### 📊 DataClinic's 3-Level Diagnostic Framework

<!-- stat-card -->
**DataClinic diagnoses datasets at **3 levels of depth**. From surface-level statistics to domain-specific analysis, each level uncovers increasingly precise quality issues.** — L1Basic Quality Diagnostics — Checks missing values, class balance, resolution, and statistical diversity — the dataset's fundamental health. The fastest way to spot problems. — L2DataLens Analysis (General-Purpose Neural Network) — Vectorizes images via Wolfram ImageIdentify Net V2 (1,280 dimensions), then analyzes geometric relationships and density distributions between classes. Seeing data through "AI's eyes." — L3Domain-Specific Analysis (Optimized Lens) — Optimizes dimensions for the specific domain (136 dimensions for this dataset). Captures domain-specific patterns and outliers that general-purpose L2 misses.

## Dataset Overview — Government-Built Waste AI Data

South Korea generates approximately **200 million tons** of industrial waste annually, much of which is still sorted manually.
                        Automating waste classification is a critical challenge for achieving carbon neutrality and a circular economy, with AI-based sorting systems at the center of the solution.
                        Against this backdrop, the government embarked on building large-scale waste image datasets.

Since 2019, the Korean government has been building national AI training data through AI Hub.
                        The Industrial Waste Image dataset is **Korea's largest industrial waste image collection** produced as part of this initiative.
                        It consists of high-resolution images of 72 types of waste captured at actual factories and industrial sites.

▲ Industrial waste image dataset collage — 72 diverse waste types including Metal Waste, Textile Waste, Glass & Ceramic, Synthetic Resin, and more

### National AI Data

### Real-World High-Res

### Recycling & Classification AI

> [!callout]
## 72 Waste Categories — What Kinds of Trash Are There?

## Level 1 — Basic Quality Diagnosis

#### ✅ Strengths

- 🎨 **RGB Channel Consistency**: All images in unified RGB format
- 📐 **High Resolution**: Min 1,920×1,080px to Max 3,024×4,032px
- 🏷️ **Label Integrity**: No classification label consistency issues
- ✅ **Minimal Missing Data**: Only 2 images missing out of 1M (0.0002%)

#### ⚠️ Key Issues

- 📊 **Class Balance: Poor** — Min 20 images vs Max 79,560 images
- 🔄 **Visual Diversity: Poor** — Too many similar images
- 📏 **Resolution Inconsistency**: Large gap between min and max resolution

### Class Mean Images — The "Face" of Each Waste Through AI's Eyes

> [!callout]

## Class Imbalance Deep Dive — The Shock of 3,978x

### Imbalance Visualization

> [!callout]

#### 🤔 Is this imbalance collection bias or reality?

## Level 2 — DataLens Analysis (Wolfram ImageIdentify Net V2)

> [!callout]

### Per-Class Density Plots (L2)

## Level 3 — Domain-Specialized Analysis (136 Dimensions)

### 3 Waste Groups Discovered by L3

#### Rigid Waste Group

#### Flexible Waste Group

#### Mixed / Boundary Group

### Per-Class Density Plots (L3)

## Outlier Analysis — Why Is Ceramic Typical and Plastic Abnormal?

### 🎯 High Density — The Most "Typical" Waste for AI (Glass & Ceramic-Ceramic)

> [!callout]

### ⚠️ Low Density — The Most Confusing Outliers for AI

### 🔄 The Two Most Different Waste Types — Glass & Ceramic vs Window Glass / Waste Concrete

> [!callout]

## Improvement Recommendations — From 51 to 70+

### ① Data Diet

### ② Data Bulk-up

1. Remove duplicate images (Diet) — Quick quality improvement
2. Focus on reinforcing classes with 20–100 images (Bulk-up)
3. Expand diversity of low-density outlier classes (Plastic, Metal-Paint Can)
4. Standardize resolution — Unify camera equipment and shooting distance guidelines

## Conclusion — The Potential and Challenges of 1 Million Images

### Industrial Waste Image Key Summary

### 🔗 Related Datasets — Complementary Waste & Environmental Data

#### Household Waste Images (AI Hub)

#### TrashNet (Stanford)

#### TACO (Trash Annotations in Context)

#### WasteNet (Kaggle)
