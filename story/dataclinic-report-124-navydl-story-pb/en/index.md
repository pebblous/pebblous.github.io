---
title: Stop Night Sea Infiltration with AI
subtitle: A Data Diagnosis Story on Marine Border Surveillance Synthetic Data
date: 2026-03-17
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Stop Night Sea Infiltration with AI

_A Data Diagnosis Story on Marine Border Surveillance Synthetic Data_

## Executive Summary

> [!callout]
> This article is based on the analysis from **[DataClinic Report #124](https://dataclinic.ai/en/report/124)**.
>                             The **Military Border Operations Synthetic Data** is a marine border surveillance-specialized synthetic dataset built by Pebblous under a National Information Society Agency (NIA) project.
>                             Comprising **149,447 images** at **88GB**, it includes EO (electro-optical) and IR (infrared thermal) dual-sensor imagery, achieving a DataClinic overall score of **88 (Good)**.
>                             This predates [PBLS_Drone (87)](https://dataclinic.ai/en/report/226) and [PBLS_Military (68)](https://dataclinic.ai/en/report/224), making it the **origin of Pebblous defense synthetic data**.

88

DataClinic Overall Score

149,447

Total Images

88GB

Dataset Size

EO+IR

Dual-Sensor Modality

### DataClinic Grade Summary

<!-- stat-card -->
**L1 IntegrityBadImage size ratio exceeds threshold (variable resolution)** — L1 MissingGood — L1 Class Bal.N/ASingle class — L1 StatisticsGood — L2 DataLensN/A — L2 GeometryGood — L2 DistributionGood — L3Not DiagnosedThis report covers up to L2 only

## Why Border Surveillance AI? — Threats from the Night Sea

South Korea's coastline stretches approximately 15,000km. It is physically impossible to monitor this entire coastline 24/7 with human personnel alone.
                        Detecting infiltrations that are invisible to the naked eye — especially at night, in fog, heavy rain, or the bitter cold of winter —
                        is a core challenge of modern border operations.

North Korean submarine infiltration, small rubber boat maritime intrusion, and underwater approach are all real threats.
                        AI-based border surveillance systems must learn all these scenarios and respond faster and more accurately than humans.
                        However, actual infiltration scenes cannot be filmed or collected — that is why **synthetic data** is necessary.

### 15,000km Coastline

<!-- stat-card -->
**🌊** — 24/7 human monitoring impossible — AI automated alert system essential

### Night & Adverse Weather

<!-- stat-card -->
**🌑** — Real infiltrations exploit night, fog, and storms — EO cameras alone have limits

### Role of Synthetic Data

<!-- stat-card -->
**🏭** — Real infiltration scenes cannot be filmed — CG generates all infiltration scenarios

> [!callout]
> **NIA AI Data Construction Project:** The National Information Society Agency (NIA) supports AI training data construction
>                             through AI Hub (aihub.or.kr) to advance national AI capabilities.
>                             The Military Border Operations Synthetic Data was built by Pebblous under this program,
>                             aiming to establish **public data infrastructure for defense AI research**.

## Dataset Introduction — Pebblous' First Defense Synthetic Data

The Military Border Operations Synthetic Data is Pebblous' **earliest defense synthetic dataset**, with DataClinic diagnosis completed in early 2025.
                        As the predecessor of PBLS_Military (ground equipment) and PBLS_Drone (drone recognition),
                        it marks the starting point where Pebblous began accumulating defense synthetic data expertise.

Military Border Operations Synthetic Data — Representative Image Collage (DataClinic L1 Analysis)

High-density representative sample — EO night W6 H7 condition (density 0.664, dataset maximum)

#### 📊 Dataset Specifications

- 🖼️ **149,447 images** (diagnosed: 149,446)
- 📦 **88GB**
- 📐 **960x540 ~ 1920x1080** — variable resolution
- 🎨 **RGB channels** — both EO and IR encoded as RGB
- 🏷️ **Single class** — "images" (border surveillance scenes)
- 📅 **2025.02.24** diagnosis completed
- 🏛️ Source: **NIA (National Information Society Agency)**

#### 🎯 Data Characteristics

- 📷 **EO (Electro-Optical)** + **IR (Infrared Thermal)** dual sensor
- 🌙 Night (NT) + Day (DT) time periods
- ❄️ Summer (SU) + Winter (WI) seasons
- 🌧️ 7-level weather conditions (W1~W7)
- 📡 7-level camera altitude/angle (H1~H7)
- 🎯 Single to compound infiltration scenarios

> [!callout]
> ⚠️ Not Available for Commercial Use

> The Military Border Operations Synthetic Data was built for defense-specific purposes through an NIA project and
>                             **is not licensed for commercial use.** It may only be used for research, education, and defense AI development purposes.

## Decoding the Filename — Complete 7-Dimensional Condition Encoding

The filenames in this dataset are not simple numbers.
                        They fully encode **which sensor, which season/time/weather, what altitude, and what infiltration combination was captured**
                        using 7 codes. This structure itself reveals the design philosophy of defense synthetic data.

### Filename Structure Decoded

> [!callout]

## Edge Cases — The Spectrum of Infiltration Scenarios

> [!callout]
- **Sensor Switch**: AI recognition difficulty spikes when switching from EO (visible) to IR (thermal)
- **Environmental Extremes**: Winter (WI) + Daytime (DT) + Close-range (H1) is the most atypical combination
- **Infiltration Complexity**: Detection difficulty increases from solo (A1) to same-type group (A3A2A1) to mixed-type compound (E3D3, B3A3)

## Level 1 — Basic Quality Diagnosis

### Overall Mean Image — The "Archetype" of Border Surveillance Scenes

#### ✅ L1 Strengths

- 🎨 **RGB Channel Consistency**: Both EO and IR unified as RGB encoding
- ❌ **Zero Missing Values**: No corrupted or empty images among 149,447
- 📊 **L1 Statistics: Good** — Rich structural and textural diversity
- 🗂️ **149,447 images** — Largest scale among the three datasets

#### ⚠️ L1 Cautions

- 📐 **Integrity: Bad** — Variable resolution issue
- 🔀 **960x540 ~ 1920x1080**: Same aspect ratio but size threshold exceeded
- 📋 **No Labels**: Single class for unsupervised learning

> [!callout]

## Level 2 — DataLens Analysis (Wolfram ImageIdentify Net V2)

### L2 Key Metrics

> [!callout]

### 🔬 Pebbloscope L2 — Bottom 1,000 Density: The IR vs EO Boundary

### 🔬 Pebbloscope L2 — Top 1,000 Density: Darkness Creates Similarity

## Outlier Sample Analysis — The Invisible Boundary Between EO and IR

### 🟢 High Density — "Standard Surveillance" Scenes

### 🔴 Low Density — The Most Challenging Edge Cases for AI

### 🔄 The Two Most Different Scenes — EO vs IR Extremes

> [!callout]

## Pebblous' Three Defense Synthetic Datasets — An Evolutionary Trajectory

### Three Dataset Comparison

| Metric | #124 Border | #224 Military | #226 Drone |
| --- | --- | --- | --- |
| DataClinic Score | 88 | 68 | 87 |
| Images | 149,447 | 3,171 | 28,801 |
| Data Size | 88GB | — | 52GB |
| Classes | Single | 10 | Single |
| L2 Mean Density | 0.211 | — | 0.300 |
| Recommended Action | BulkUp | Diet | BulkUp |

## The 88-Point Paradox — What the Score Hides

### Why did 88 score high?

- Single class ("images") = no class balance penalty
- 149,447 images at large scale = L1 statistics Good
- Resolution and channel consistency = L1 missing values Good
- EO+IR mix = visual diversity metrics boosted

- No object crop = infiltration target quality unassessed
- Dark backgrounds dominate density = AI learns "background"
- IR/EO sensor separation = confuses single models
- No L3 domain-specialized diagnosis = surveillance-specific quality unverified

### Suggestions for more meaningful diagnosis

## Field Scenario — What If AI Gets It Wrong?

### 💡 The 88-Point Paradox

### Shared Lesson with PBLS_Drone

## Recommendations — Beyond 88, the Next Steps

### Data BulkUp — Focus on IR Region

### Resolution Normalization — Improve Integrity

> [!callout]

> [!callout]

## Conclusion — The Origin of Pebblous Defense Synthetic Data

### Key Summary Card
