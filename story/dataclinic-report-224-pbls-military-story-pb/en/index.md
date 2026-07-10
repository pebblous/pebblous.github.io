---
title: AI Learns Without Live Fire
subtitle: A Data Quality Story on 10-Class Ground Weapon Synthetic Data
date: 2026-03-16
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Learns Without Live Fire

_A Data Quality Story on 10-Class Ground Weapon Synthetic Data_

## Executive Summary

> [!callout]
> This article is based on the analysis results from **[DataClinic Report #224](https://dataclinic.ai/en/report/224)**.
>                             **PBLS_Military** is a synthetic image dataset of 10 military equipment classes generated via computer graphics, including Korea's key defense export products.
>                             Comprising **3,171 images** created by combining various scenarios, environments, and backgrounds without actual combat photography, it received a DataClinic overall score of **68 (Fair)**.

68

DataClinic Overall Score

10

Weapon System Classes

3,171

Total Images

216

Images per Class (Perfectly Balanced)

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityGood** — L1 MissingGood — L1 Class BalanceGood — L1 StatisticsBad — L2 DataLensNo Issues — L2 GeometryGood — L2 DistributionBad — L3 DataLensNo Issues — L3 GeometryFair — L3 DistributionFair

## Why Synthetic Data? — Building the Battlefield with Data

Imagine photographing an actual K-2 Black Panther tank in deserts, snowfields, and urban ruins under different lighting and weather conditions.
                        Deploying over a dozen tanks worth billions of dollars to stage hundreds of scenes is practically impossible.
                        That is why defense AI researchers choose **Synthetic Data**.

Synthetic data consists of images generated via computer graphics, enabling the creation of infinite combinations of training data without actual photography.
                        PBLS_Military is a dataset that puts this concept into practice.

### Infinite Environment Combos

<!-- stat-card -->
**🎮** — Combat scenarios impossible to film in real life, built with CG

### Perfect Class Balance

<!-- stat-card -->
**⚖️** — Exactly 216 images for all 10 classes — bias-free training data

### No Security Concerns

<!-- stat-card -->
**🔒** — No need to photograph real military facilities, zero classified info exposure

### The Battlefield Blueprint Hidden in Synthetic Data Filenames

## Dataset Introduction — PBLS_Military

## 10 Weapon Systems Gallery — The Battlefield Players

### 🇰🇷 Pride of Korean Defense Exports

### 🎯 Enemy Vehicles for IFF Training

> [!callout]

### 🚁 Air Power & Support Vehicles

## Level 1 — Basic Quality Diagnosis

### Mean Images per Class — Each Weapon's "Archetype" Through AI's Eyes

#### ✅ Strengths

- 📐 **Perfect Class Balance**: Std. deviation 0.0 — exactly 216 images for all 10 classes
- 🎨 **RGB Channel Consistency**: All images in RGB format, no grayscale or RGBA contamination
- ❌ **Zero Missing Values**: No corrupted files, no empty images
- 🖼️ **HD Resolution**: 1,338~1,344 × 768px widescreen rendering

#### ⚠️ Cautions

- 📊 **L1 Statistics: Bad** — Lack of visual diversity
- 🔄 **Similar Compositions**: Most images share similar framing
- 📁 **Synthetic Data Limitations**: Texture and lighting realism gap vs. real-world images

> [!callout]

## Level 2 — DataLens Analysis (Wolfram ImageIdentify Net V2)

> [!callout]

### Density Plots per Class — Distribution Patterns of Each Equipment

### 🔬 K806 Through Pebbloscope — Clusters Created by Seasons

## Level 3 — Military-Specialized DataLens (79 Dimensions)

### 3 Groups Discovered by Military AI

#### Heavy Armored Combat Vehicles

#### SPH & Heavy Artillery

#### Light Support & Air Power

### L3 Density Plots per Class

### 🔬 Pebbloscope L3 — Military Lens Reduces Background Bias

## Outlier Sample Analysis — The Most Striking Scenes for AI

### 🎯 High Density — The "Core" Scenes AI Is Most Confident About (L3)

> [!callout]

### ⚠️ Low Density — The Most Confusing Outlier Scenes for AI (L3)

### 🔄 The Two Most Different Scenes — Extremes of the Dataset

## Recommendations — From 68 to a Higher Score

### Data Diet

### Expand Environmental Diversity

## Field Scenario — What If AI Gets It Wrong?

### ⚠️ Scenario: T-80U Enemy Tank in Low-Visibility Conditions

### 📊 Why Does This Error Occur?

### ✅ Solution: Reinforce Low-Density Conditions

## Conclusion — Possibilities and Limits of the Synthetic Battlefield

### PBLS_Military Key Summary Card
