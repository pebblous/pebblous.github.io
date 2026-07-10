---
title: Diagnosing Quality of a 450-Species Bird Dataset
subtitle: DataClinic Report #11 — Birds 450
date: 2026-03-15
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Diagnosing Quality of a 450-Species Bird Dataset

_DataClinic Report #11 — Birds 450_

## Executive Summary

> [!callout]
> This report presents key insights from the [DataClinic](https://dataclinic.ai) quality diagnosis report on the [Birds 450 dataset](https://dataclinic.ai/en/report/11).

> Birds 450 is a computer vision dataset comprising 75,100 images across 450 bird species. The DataClinic comprehensive diagnosis scored it at **65 (Fair)**. While class balance (average 150.6 images per class, minimal deviation) and RGB consistency are excellent, low-density outliers and ambiguous class boundaries may hinder AI classification performance.

> L1 pixel analysis revealed black background padding and inconsistent image sizes in some images. L2 feature space analysis identified high-outlier classes such as BLUE DACNIS and FRIGATE, while L3 inter-class analysis showed embedding boundary overlap between visually similar species.

> Through data quality improvement, AI model performance can be elevated from 65 to over 90 points. Key action items include removing low-density samples, augmenting rare classes, and standardizing image sizes (224px).

## Dataset Overview

| Item | Details |
| --- | --- |
| Dataset Name | Birds 450 Species |
| Source | Kaggle |
| Total Images | 75,100 |
| Number of Classes | 450 species |
| Overall Score | 65 (Fair) |

## Level 1: Pixel Quality Analysis

### Blue Channel Dominance

### Spike Near Pixel Value 0

## Level 2: Feature Space Analysis

### Class Separability (PCA Visualization)

### Density Distribution

## Level 3: Domain-Specific Analysis

### Domain-Specific PCA Visualization

### Level 3 Density Distribution

### Top Outlier Classes

| Class | Density Score | Interpretation |
| --- | --- | --- |
| BLUE DACNIS | 0.87 | Visually distant from other bird species |
| FRIGATE | 0.90 | Outlier due to unique silhouette and background |

## Conclusion & Data Improvement

### Key Findings Summary

1. **Pixel Level**: The pixel value 0 spike caused by black background processing can introduce bias during model training.
2. **Channel Distribution**: Since the Blue channel is dominant, applying per-channel normalization is recommended.
3. **Outlier Classes**: Visually distinctive classes such as BLUE DACNIS and FRIGATE require additional data collection or data augmentation.

### Data Improvement Recommendations

- **Background Standardization**: Replace black background images with natural backgrounds, or apply background augmentation techniques
- **Outlier Class Reinforcement**: Collect additional data and ensure diversity for the bottom 10% density classes
- **Channel Normalization**: Apply ImageNet statistics-based normalization in the preprocessing pipeline
- **Cleansing Pipeline**: Add a preprocessing step to filter out images with a high proportion of pixel value 0
