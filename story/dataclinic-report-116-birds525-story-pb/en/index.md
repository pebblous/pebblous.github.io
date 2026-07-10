---
title: 525 Bird Species Images, The Secret Behind Quality Score 77
subtitle: BIRDS 525 DataClinic Report — What Changed Compared to Birds 450 (Quality Score 65)
date: 2026-03-16
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 525 Bird Species Images, The Secret Behind Quality Score 77

_BIRDS 525 DataClinic Report — What Changed Compared to Birds 450 (Quality Score 65)_

## Executive Summary

> [!callout]
> This post presents key insights from Pebblous [DataClinic](https://dataclinic.ai)'s [Quality Diagnosis Report #116](https://dataclinic.ai/en/report/116) for the BIRDS 525 SPECIES dataset, along with a comparative analysis against the predecessor Birds 450.

> BIRDS 525 is a large-scale bird classification dataset comprising 525 species and 89,880 images. The DataClinic comprehensive diagnosis yielded a **quality score of 77 (Fair)**. This is **12 points higher** than [Birds 450 (quality score 65)](https://blog.pebblous.ai/story/report11-story/ko/) — a result of multiple factors: ① preserving original resolutions (L1 improvement), ② expanded feature space coverage from 75 additional species (L2/L3 improvement), and ③ doubled L3 analysis precision (41→81 dimensions).

> In [L1](https://dataclinic.ai/data-clinic/skill) (Basic Quality) analysis, while Birds 450 had all images uniformly preprocessed to 224px, Birds 525 preserves original resolutions from 45px to 4,763px. The general-purpose AI lens ([L2](https://dataclinic.ai/data-clinic/skill), Feature Space Analysis) revealed two clusters, and L2 density comparison shows Birds 525 is distributed across a broader feature space than 450. The domain-specific lens ([L3](https://dataclinic.ai/data-clinic/skill), Domain-Specific Analysis) maintains a stable bell-shaped distribution in the 81-dimensional space.

> The most "typical" bird was the **PEACOCK**, while the most atypical were **EMU and BIRD OF PARADISE**. Note that commercial use is **not permitted**, so caution is needed for purposes beyond research and education.

## Birds 450 vs Birds 525 — What Changed

| Metric | Birds 450 (#11) | Birds 525 (#116) | Change |
| --- | --- | --- | --- |
| Overall Score | Quality score 65 (Fair) | Quality score 77 (Fair) | +12 pts ↑ |
| Classes | 450 species | 525 species | +75 species ↑ |
| Total Images | 75,100 | 89,880 | +14,780 ↑ |
| Avg per Class | 150.6 | 161.2 | +10.6 ↑ |
| Class Balance Std Dev | 15.7 | 20.6 | -4.9 ↓ |
| Min Resolution | 170×196px | 45×109px | Smaller |
| Max Resolution | 224×224px | 4,763×3,421px | Much more diverse ↑ |
| L1 Statistics Grade | Poor | Good | Major improvement ↑ |
| L2 Analysis Lens | BLIP (Multimodal) | Wolfram ImageIdentify Net V2 | Lens changed |
| L3 Dimensions | 41 dimensions | 81 dimensions | 2x more precise ↑ |
| Commercial Use | Allowed ✓ | Not allowed ✗ | ⚠️ Caution |

### 🔑 The Key to Score Improvement: Multiple Factors

### ⚠️ Important: Commercial Use Not Permitted

<!-- stat-card -->
**Birds 450 · Quality Score 65+12 →Birds 525 · Quality Score 77** — ******************************************** — The 12-point improvement is the result of **multiple improvements working in combination**, not a single factor: — **① Preserving Original Data (L1 contribution)** — Birds 450 preprocessed all images to 224×224px, destroying the natural pixel-level statistical diversity created by different shooting conditions — camera type, distance, lighting, and background. Birds 525 preserves original resolutions from 45px thumbnails to 4,763px professional photographs, dramatically improving the L1 statistics grade from "Poor" to "Good." — **② Expanded Class Diversity (L2/L3 contribution)** — With 75 additional species, the coverage of the feature space expanded. Newly included species (SNOWY SHEATHBILL, OILBIRD, JACOBIN PIGEON, etc.) are rare species and regional endemics with visual characteristics absent from the original 450. These fill previously empty regions of the feature space, improving the overall distribution balance. — **③ More Precise L3 Analysis (41→81 dimensions)** — Birds 525's domain-specific lens uses 81 dimensions, twice that of Birds 450. Higher dimensionality captures finer visual differences between species, improving class separability in the embedding space. — While Birds 450 permits commercial use, **Birds 525 does not allow commercial use**. It can only be used for research and educational purposes. For actual services or products, you should use Birds 450 or another dataset with appropriate licensing.

## Dataset Overview — The World of 525 Bird Species

## Level 1: Basic Quality Check — The Decisive Difference from 450

### ✅ Missing Values: None

### ✅ Channel Composition: Consistent RGB Throughout

### ✅ Class Balance: Good

### 🌟 Image Resolution: The Decisive Difference from Birds 450

- **Minimum**: 45×109px (very small thumbnails)
- **Maximum**: 4,763×3,421px (high-resolution professional photographs)

## Level 2: The Bird World Through a General-Purpose AI Lens

### 🔵 Two High-Density Clusters

- **Cluster A** — Tropical and subtropical birds with vivid colors and distinctive forms. Visually striking species such as Peacock, Bird of Paradise, Emerald Cuckoo, and Crowned Crane
- **Cluster B** — Brown and gray forest/grassland birds. Passeriformes (perching birds) with relatively similar appearances

### 📊 Density Distribution Comparison: Birds 450 vs. 525

### 🔬 Per-Class Density Comparison: Crowned Crane vs. Firefinch

## Level 3: Bird-Specific Lens — More Precise with 81 Dimensions

### 🔵 Cluster Structure Preserved

### 📈 Density Distribution Comparison: 450 vs. 525 at L3

## Outlier Analysis — Why the Peacock Is the Most "Typical" Bird

### 🏆 High-Density Samples — The "Typical Birds" as Seen by AI

- **Distinctive yet consistent visual pattern** — The male's fan-shaped tail feathers are highly distinctive, yet Peacock photographs are remarkably similar to each other
- **Color vividness** — The blue-green iridescent body and eye-patterned tail are visual patterns that AI models recognize strongly
- **Compositional consistency** — Front-facing photographs with spread tails are overwhelmingly common, resulting in low feature vector variance

### ⚠️ Low-Density Outliers — Birds That Break the Mold

- **SNOWY SHEATHBILL** (0.0529) — Nearly all-white with a sharp beak. Frequently photographed against snowy backgrounds, placing it at an extreme position in feature space
- **EMU** (0.0532) — A large flightless bird. Its long neck and massive body create a silhouette entirely unlike typical birds
- **BIRD OF PARADISE** (0.0541) — Males have extremely ornate and bizarre plumage. As flamboyant as Peacocks but with far more varied photography compositions
- **RED BILLED TROPICBIRD** (0.0545) — Distinctive long tail feathers and white body, with many in-flight capture photographs

### ↔️ Most Different Pair: OILBIRD vs. JACOBIN PIGEON

## Improvement Suggestions — Data Diet + Bulk-up Combined

### 🥗 Data Diet — Cleaning Up Peacock Class Duplicates

### 💉 Data Bulk-up — Reinforcing Outlier Classes

- **EMU** — Add images from diverse shooting angles (side, front, group) and varied environments (grassland, farm)
- **BIRD OF PARADISE** — Add various male courtship display scenes and female images to increase intra-class diversity
- **SNOWY SHEATHBILL** — Add non-snowy environment photographs to reduce background bias
