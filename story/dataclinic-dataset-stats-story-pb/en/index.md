---
title: What 12 Million Images Reveal
subtitle: DataClinic Full Analysis of 134 Datasets: Scale & Imbalance
date: 2026-03-16
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What 12 Million Images Reveal

_DataClinic Full Analysis of 134 Datasets: Scale & Imbalance_

## Executive Summary

> [!callout]
> This analysis is a comprehensive census of scale and class imbalance statistics across 134 image classification datasets diagnosed by Pebblous [DataClinic](https://dataclinic.ai). Per-class image counts were collected directly via the public API.

> The 134 datasets contain a total of **12.05 million images**. The median dataset size is **11,505 images**, with more than half concentrated around the 10K mark, yet the top 4 datasets each exceed 1 million images, making the distribution extremely skewed.

> Class imbalance is even more dramatic. While 25% (33 datasets) are perfectly balanced, 15 datasets have a max-to-min class ratio exceeding 100x. The most extreme case reaches **73,384x**, where a class with just 3 images coexists with one containing 220,000 images in the same dataset.

## Overview

<!-- stat-card -->
**134** — Datasets Analyzed

<!-- stat-card -->
**12.05M** — Total Images

<!-- stat-card -->
**11,505** — Median (images)

<!-- stat-card -->
**50.8** — Avg. Classes

<!-- stat-card -->
**Of the 158 public reports on [DataClinic](https://dataclinic.ai), 134 are image classification tasks with per-class image count data. The remaining 24 are unlabeled datasets for unsupervised learning or formats where class distinctions do not apply.** — The 134 datasets have a combined total of **6,805 classes** containing **12,054,130 images**. The average dataset size is 89,956 images, but this is heavily skewed by 4 datasets exceeding 1 million images each. The fact that the median (11,505) is only one-eighth of the mean (89,956) starkly illustrates the extreme asymmetry of the distribution. Full reports are available at [dataclinic.ai](https://dataclinic.ai).

## Dataset Size Distribution

## Class Count Distribution

1. **[ImageNet](https://dataclinic.ai/en/report/123)** — 1,000 classes (1,281,167 images)
2. **[OpenImages](https://dataclinic.ai/en/report/129)** — 599 classes (1,743,042 images)
3. **[Birds 525](https://dataclinic.ai/en/report/116)** — 525 classes (89,885 images) · [Story](/story/dataclinic-report-116-birds525-story-pb/en/)
4. **[Birds 450](https://dataclinic.ai/en/report/11)** — 450 classes (67,792 images) · [Story](/story/report11-story/en/)
5. **MPII (Human Pose)** — 398 classes (40,522 images)

## Class Imbalance Status

## Key Rankings

### 📦 Size Top 10 (Total Images)

### ⚠️ Imbalance Top 10 (max/min ratio)

### 🗂 Class Count Top 10

### ✅ Most Balanced Top 5

## 3 Key Insights

### 1. Mid-sized datasets dominate, but actual data volume is concentrated in a few giants

### 2. Imbalance is unavoidable, but many datasets achieve balance through intentional design

### 3. More classes mean fewer images per class, increasing quality risk
