---
title: Data Quality Matters in Art Too
subtitle: DataClinic Diagnosis of 81,471 WikiArt Images — The Truth Behind a Quality Score of 53 (Poor)
date: 2026-03-15
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Data Quality Matters in Art Too

_DataClinic Diagnosis of 81,471 WikiArt Images — The Truth Behind a Quality Score of 53 (Poor)_

## Executive Summary

> [!callout]
> This report presents key insights from the [quality diagnosis report](https://dataclinic.ai/en/report/115) of the WikiArt dataset using Pebblous [DataClinic](https://dataclinic.ai).

> WikiArt is an art image dataset consisting of 81,471 images across 27 styles, from Abstract Expressionism to Baroque. The DataClinic overall diagnosis resulted in a quality score of **53 (Poor)**. Class imbalance is extreme, ranging from a minimum of 98 images to a maximum of 13,060 images — a difference of over 133x — which creates a high risk of training classifiers biased toward specific art styles.

> The [L2](https://dataclinic.ai/data-clinic/skill) (Feature Space Analysis) using Wolfram ImageIdentify Net V2 (1,280 dimensions) discovered 3 high-density clusters, but the boundaries between art styles are unclear and class separation is blurry. The [L3](https://dataclinic.ai/data-clinic/skill) (Domain-Specific Analysis) using BLIP Image-Text Matching (56 dimensions) also showed difficulty in cluster separation, though the overall distribution shape was satisfactory.

> To improve data quality, both minority class augmentation (bulk-up) and majority class deduplication (diet) are needed simultaneously. In particular, label consistency review should be prioritized due to the visual similarity among abstract art styles.

## Dataset Overview

| Item | Details |
| --- | --- |
| Dataset Name | WikiArt |
| Source | Kaggle (WikiArt) |
| Total Images | 81,471 |
| Number of Classes | 27 Art Styles |
| Overall Score | 53 (Poor) |
| Report Date | 2025.01.01 |

## Overall Diagnosis: 53 (Poor)

## Level 1: Pixel Quality Analysis

### RGB Channel Consistency: Good

### Missing Values: None

### Class Imbalance: Poor — The Core Issue

- Minimum class: **98 images** (Analytical_Cubism, etc.)
- Maximum class: **13,060 images** (Impressionism, etc.)
- Mean: 3,016 images
- Standard deviation: 3,269 (greater than the mean — extreme variance)

## Level 2: Feature Space Analysis (Wolfram ImageIdentify Net V2)

### 3 High-Density Clusters Discovered

### Unclear Boundaries Between Styles

### Distribution: Bell-shaped

## Level 3: Domain-Specific Analysis (BLIP Image-Text Matching)

### Cluster Separation: Still Unclear

### Geometry: Fair / Distribution: Good

## Outlier Analysis: High-Density vs. Low-Density Samples

### High-Density Samples — Representative Images

### Low-Density Samples — Outlier Images

## Recommendations: Simultaneous Bulk-Up + Diet Strategy

### 1. Minority Class Bulk-Up (Data Collection and Augmentation)

- **Additional Collection**: Collect additional images from the official WikiArt website, museum APIs, etc. for classes with fewer than 100 images, such as Analytical_Cubism (98 images) and Action_painting
- **Data Augmentation**: Use augmentation techniques such as rotation, color adjustment, and cropping to ensure at least 500 images per minority class
- **Target**: Balance all classes to a minimum of 300 images

### 2. Majority Class Diet (Deduplication)

- **Similarity-Based Deduplication**: Classify image pairs with cosine similarity above 0.95 in the L2 embedding space as duplicates and remove one
- **High-Density Cluster Sampling**: Select and retain 3,000 representative samples centered on high-density regions for majority classes exceeding 13,000 images (e.g., Impressionism)
- **Target**: Limit maximum images per class to 5,000 or fewer

### 3. Label Consistency Review

- **Boundary Style Review**: Re-verify label consistency for overlapping classes in the embedding space, such as Abstract_Expressionism, Action_painting, Color_Field_Painting, and Minimalism
- **Outlier Review**: Manually re-confirm or remove samples in the bottom 5% density (low-density outliers)
- **Class Merging Consideration**: Consider merging overly similar styles (e.g., Analytical_Cubism + Synthetic_Cubism) into parent classes

### Expected Improvement Results

| Metric | Current | Expected After Improvement |
| --- | --- | --- |
| Class Imbalance | Poor (98–13,060 images) | Good (300–5,000 images) |
| Outlier Ratio | ~5% | <1% |
| Label Consistency | Fair | Good |
| Overall Score | 53 (Poor) | 75–80 (Fair–Good) |
