---
title: When ISO 5259 Diagnoses a Recycling Dataset
subtitle: SpectralWaste \u00d7 ISO/IEC 5259-2 Independent Evaluation Report
date: April 4, 2026
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When ISO 5259 Diagnoses a Recycling Dataset

_SpectralWaste \u00d7 ISO/IEC 5259-2 Independent Evaluation Report_

🔬

Evaluation Methodology

This report re-interprets **DataClinic's three-level diagnostic results (Level I / II / III)**
                            through the **ISO/IEC 5259-2:2024 Quality Measure (QM) framework** as an independent evaluation.
                            The metrics, charts, and outlier samples measured by DataClinic are mapped to each ISO QM's formal definition,
                            with Pass / Fail / Caution verdicts rendered independently.

DataClinic L1 Diagnostics→DataClinic L2/L3 Diagnostics→ISO 5259-2 QM Interpretation

<!-- stat-card -->
****Summary:** We independently evaluated the SpectralWaste recycling waste image dataset (2,794 images, 6 classes) against ISO/IEC 5259-2:2024 Quality Measures (QMs). DataClinic's three-level diagnostic metrics and charts were mapped to ISO QM definitions. Of the 14 QMs assessed, 3 passed, 5 failed, and 3 received caution flags. The core issues are severe class imbalance (19.6:1 max ratio) and a lack of representativeness and diversity caused by a single capture environment. DataClinic's "Bulk-up" recommendation aligns precisely with the ISO Bal-ML-3 and Eft-ML-1 Fail verdicts.**

<!-- stat-card -->
**3 / 10** — Measured QMs Passed

<!-- stat-card -->
**5** — Failed Items

<!-- stat-card -->
**2** — Caution Items

<!-- stat-card -->
**3** — Unmeasured (Roadmap)

## 1
                    Dataset Overview

| Dataset | SpectralWaste |
| --- | --- |
| Source | Kaggle |
| Diagnosed Images | 1,709 (out of 2,794 total) |
| Classes | 6 |
| Image Size | 276 x 256 px (RGB) |
| DataClinic Score | 68 / 100 (Moderate) |

<!-- stat-card -->
**Basic Information** — [https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste](https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste)

| Class | Samples | Ratio |
| --- | --- | --- |
| video_tape | 646 | 37.8% |
| basket | 384 | 22.5% |
| film | 248 | 14.5% |
| cardboard | 199 | 11.6% |
| bag | 199 | 11.6% |
| filament | 33 | 1.9% |

<!-- stat-card -->
**Class Distribution (L1 Diagnosis)** — Max/Min class ratio: 19.6 : 1 (video_tape vs filament)

Representative image collage from the SpectralWaste dataset -- six types of recycling waste on a conveyor belt

<!-- stat-card -->
**SpectralWaste is a recycling waste dataset collected by synchronizing RGB and hyperspectral imaging on a prototype conveyor belt.
                        Each image includes a composite bar chart summarizing the spectral signature of each object.
                        While the dataset was designed for training automated recycling classification models, class imbalance and a homogeneous capture environment may limit model performance.**

## 2
                    ISO/IEC 5259-2 Evaluation Framework

| DataClinic Level | What Is Measured | Mapped ISO 5259-2 QMs |
| --- | --- | --- |
| Level I | Class counts, missing values, pixel statistics, mean images | Com-ML-1/3/5, Bal-ML-1, Eft-ML-1 |
| Level II | General-purpose embedding (1280-dim) density, outliers, similarity | Sim-ML-1/2, Rep-ML-1/3, Div-ML-1, Con-ML-2, Acc-ML-7 |
| Level III | Domain-specific lens (32-dim) density and cluster analysis | Rep-ML-1, Div-ML-1/2, Bal-ML-2 |

## 3
                    Intrinsic Quality Assessment

| QM ID | Item | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Com-ML-1 | Value Completeness | Proportion of data items without null values | Pass |
| Com-ML-3 | Feature Completeness | Proportion of feature-related items without null values | Pass |
| Com-ML-5 | Label Completeness | Proportion of samples with complete labels | Pass |
| Con-ML-2 | Label Consistency | Proportion of similar samples with consistent labels | Caution |
| Acc-ML-7 | Label Accuracy | Estimated mislabel rate via outlier detection | Caution |

## 4
                    Balance Assessment -- Bal-ML

| QM ID | Item | ISO Definition | Measurement | Verdict |
| --- | --- | --- | --- | --- |
| Bal-ML-3 | Balance of Images Between Categories | Degree of balance in class-wise sample counts | Std. dev. 242.7, max ratio 19.6:1 | Fail |
| Bal-ML-2 | Feature Balance | Balance of feature distributions within the dataset | Color/size skew (confirmed at L3) | Fail |

## 5
                    Similarity Assessment -- Sim-ML

| QM ID | Item | ISO Definition | Measurement | Verdict |
| --- | --- | --- | --- | --- |
| Sim-ML-1 | Duplicate Instance Ratio | Proportion of duplicate or near-duplicate samples | L2 low density = low duplication | Pass |
| Sim-ML-2 | Intra-class Similarity | Average similarity among samples within the same class | High-density concentration in video_tape | Caution |

## 6
                    Representativeness Assessment -- Rep-ML

| QM ID | Item | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Rep-ML-1 | Target Domain Coverage | Degree to which diverse real-world deployment conditions are covered | Fail |
| Rep-ML-3 | Distribution Distance (KL-divergence) | Divergence between training data distribution and real-world distribution | Fail |

## 7
                    Diversity Assessment -- Div-ML

| QM ID | Item | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Div-ML-1 | Intrinsic Dimensionality | Effective dimensionality of the data -- how many distinct features exist | Caution |
| Div-ML-2 | Feature Diversity | Diversity in visual features such as color, shape, and size | Fail |

## 8
                    Effectiveness & Identifiability Assessment

| QM ID | Item | ISO Definition | Measurement | Verdict |
| --- | --- | --- | --- | --- |
| Eft-ML-1 | Effective Sample Ratio | Proportion of classes meeting the training threshold | Min. class: 33 images (filament) | Fail |
| Idn-ML-1 | Identifiability (PII) | Presence of personally identifiable information | Waste images only -- no PII | Pass |

## 9
                    Unmeasured Items (Auditability, Relevance, Timeliness)

| QM ID | Item | ISO Definition | Status | Verdict |
| --- | --- | --- | --- | --- |
| Aud-ML-1/2 | Auditability | Data lineage tracking, quality audit logs | Planned for AADS extension | -- N/A |
| Rel-ML-1/2 | Relevance | Contextual/purpose relevance, outlier detection | Planned for AADS extension | -- N/A |
| Tml-ML-1 | Timeliness | Data freshness, appropriateness of collection date | On roadmap | -- N/A |

## 10
                    Summary & Recommendations

| DQC Group | QM ID | Item | Verdict | Severity |
| --- | --- | --- | --- | --- |
| Completeness | Com-ML-1/3/5 | Value, Feature & Label Completeness | Pass | -- |
| Consistency | Con-ML-2 | Label Consistency | Caution | Medium |
| Accuracy | Acc-ML-7 | Label Accuracy | Caution | Medium |
| Balance | Bal-ML-3 | Balance of Images Between Categories | Fail | Critical |
| Balance | Bal-ML-2 | Feature Balance | Fail | High |
| Similarity | Sim-ML-1 | Duplicate Instance Ratio | Pass | -- |
| Similarity | Sim-ML-2 | Intra-class Similarity | Caution | Medium |
| Representativeness | Rep-ML-1 | Domain Coverage | Fail | Critical |
| Representativeness | Rep-ML-3 | KL-divergence | Fail | High |
| Diversity | Div-ML-1 | Intrinsic Dimensionality | Caution | Medium |
| Diversity | Div-ML-2 | Feature Diversity | Fail | High |
| Effectiveness | Eft-ML-1 | Effective Sample Ratio | Fail | Critical |
| Identifiability | Idn-ML-1 | PII Risk | Pass | -- |
| Auditability, Relevance, Timeliness | Aud/Rel/Tml | -- | -- N/A | -- |

- **Bal-ML-3:** Collect or synthesize additional filament data (target: 300+ images minimum)
- **Eft-ML-1:** Bulk up all four under-threshold classes via data collection or augmentation

- **Rep-ML-1:** Expand capture environments with diverse lighting, backgrounds, and viewing angles
- **Div-ML-2:** Include contaminated, crumpled, and mixed waste samples
- **Bal-ML-2:** Diversify color and size feature distributions

- **Con-ML-2:** Cross-verify labels between similar samples
- **Acc-ML-7:** Manually review all 20 low-density outlier labels
- **Sim-ML-2:** Diversify video_tape capture sessions

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 -- Part 2: Data quality measures.
- [2] DataClinic Report #223 -- SpectralWaste. [dataclinic.ai/en/report/223](https://dataclinic.ai/en/report/223)
- [3] SpectralWaste Dataset. [Kaggle](https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste)
- [4] Pebblous. (2025). [AI Data Quality Standards and Pebblous DataClinic: Quantitative Mapping to ISO/IEC 5259-2](/project/ISO5259/5259-pbls-dataclinic-02/en/)
