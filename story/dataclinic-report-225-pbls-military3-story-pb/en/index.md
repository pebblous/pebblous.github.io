---
title: Cannon vs Truck: How AI Tells Them Apart
subtitle: A Data Story on 3-Class Military Synthetic Data
date: 2026-03-19
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Cannon vs Truck: How AI Tells Them Apart

_A Data Story on 3-Class Military Synthetic Data_

## Executive Summary

> [!callout]
> This article is based on **[DataClinic Report #225](https://dataclinic.ai/en/report/225)**. **PBLS_Military 3-Class** is a synthetic military dataset consisting of 3 classes — K9 self-propelled howitzer, M35A2 truck (covered), and M35A2 truck (uncovered) — with 648 images each, totaling **1,947 images**.

> DataClinic overall quality score: **79 (Medium)**. This is 11 points higher than the [10-class version (68)](https://blog.pebblous.ai/story/dataclinic-report-224-pbls-military-story-pb/en/). Class balance, integrity, and diversity are all excellent, but L2 and L3 both show **Poor distribution**. The **multimodal clusters** created by the camera angle (cm) parameter are the key factor suppressing the score.

> In this post, we bring in DataClinic's high-density and low-density sample images to directly verify **which parameter combinations are "typical" and which are "outliers"** using actual synthetic images.

79

DataClinic Overall Score

3

Classes (Perfect Balance)

1,947

Total Images

648

Images per Class

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityGood** — L1 Missing ValuesGood — L1 Class BalanceGood — L1 StatisticsGood — L2 DataLensNo Anomaly — L2 GeometryMedium — L2 DistributionPoor — L3 DataLensNo Anomaly — L3 GeometryGood — L3 DistributionPoor

## Why 3 Classes — The Tactical Pair of Artillery and Logistics

<!-- stat-card -->
**While [PBLS_Military (#224) covered 10 diverse weapon systems](https://blog.pebblous.ai/story/dataclinic-report-224-pbls-military-story-pb/en/), this #225 dataset **focuses on a specific tactical combination**: one K9 self-propelled howitzer class and two M35A2 truck classes (covered/uncovered).** — This combination is not accidental. In modern artillery combat, **self-propelled howitzers (K9) and supply trucks (M35A2) always appear together**. The howitzer provides firepower while the truck supplies ammunition, fuel, and materiel. An AI model's ability to distinguish "Is that vehicle a supply truck or combat equipment?" in battlefield imagery is central to tactical situational awareness. — 🔫 — K9 Self-Propelled Howitzer — 155mm howitzer. High-speed mobility and autoloading capability. Exported to 14 countries. — 🚛 — M35A2 Truck (Covered) — Military 2.5-ton cargo truck. Tarpaulin cover conceals the cargo bed. — 🚚 — M35A2 Truck (Uncovered) — Same chassis, no cover. Cargo bed structure exposed. — It is noteworthy that the two states of the M35A2 (covered/uncovered) are managed as **separate classes**. In reality, the M35A2 has its tarpaulin put on or removed depending on the mission, so it is important for AI models to recognize both states as the same vehicle. This is an intentional design to **train the model on state variation of the same object**.

## The Blueprint of Synthetic Data — What Filenames Reveal

## 3-Class Gallery — Actual Samples and Mean Images

## Level 1 — What All-"Good" Basic Quality Means

| Item | Grade | Details |
| --- | --- | --- |
| Image Integrity | ✅ Good | RGB channels 100%, uniform 1336~1344×768px |
| Missing Values | ✅ Good | No missing values — all items complete |
| Class Balance | ✅ Good | K9: 648, M35A2: 648, M35A2_uncovered: 648 (SD=0.0) |
| Statistical Measurement | ✅ Good | Pixel mean image analysis: diverse structure/viewpoint mix → high diversity |

## Level 2 — The Nature of Multimodal Distribution Through a General Lens

### Geometry: Medium

### Distribution: Poor — The Cause of Multimodal Patterns

### 🔬 Multimodal Clusters Through Pebbloscope

## Level 3 — What the Military-Specialized Lens Reveals

### Geometry: Good ↑

### Distribution: Poor — Still Multimodal

## Typical vs Outliers — Reading Quality Through Real Images

### 🔫 K9 Howitzer — Typical vs Outliers

### 🚛 M35A2 (Covered) — Typical vs Outliers

### 🚚 M35A2 (Uncovered) — Typical vs Outliers

### 📊 High-Density vs Low-Density Parameter Pattern Summary

| Category | Camera (cm) | Environment (en) | Background (bg) | Quality Implication |
| --- | --- | --- | --- | --- |
| ✅ High-Density (Typical) | cm1 front-view dominant | en2~en6 (daytime, normal conditions) | bg2~bg6 (natural terrain) | Compact within class → training efficiency ↑ |
| ⚠️ Low-Density (Outlier) | cm3·cm2 diagonal/side | en1 (extreme lighting/night) | bg1·bg7·bg9 (unusual terrain) | Distribution deviation → model confusion ↑ |

## Improvement Suggestions — From 79 to 90

## Field Scenario — What If AI Gets It Wrong?

### ⚠️ Scenario: K9 Howitzer at Diagonal Angle + Extreme Environment

### 🔄 The reverse error is also possible

### ✅ Solution: Reinforce Low-Density Parameter Combinations

## Conclusion

| Item | Result | One-Line Assessment |
| --- | --- | --- |
| DataClinic Score | Quality score 79 (Medium) | 11 points above 10-class (68), target is 85+ |
| Class Balance | SD = 0.0 | Textbook-perfect synthetic data balance |
| L1 Quality | All items Good | Solid basic fitness |
| L2/L3 Distribution | Poor (multimodal) | Camera angle clusters = side effect of intentional diversity |
| Outlier Ratio | L3 below 7.4% | Stable, mainly from night/unusual terrain combinations |
| Key Improvement | Reinforce cm2/cm3 | Camera angle balancing to mitigate multimodal pattern |
