---
title: Grading AI\u2019s Textbook with ISO 5259
subtitle: ImageNet \u00d7 ISO/IEC 5259-2 Independent Evaluation Report
date: April 4, 2026
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Grading AI\u2019s Textbook with ISO 5259

_ImageNet \u00d7 ISO/IEC 5259-2 Independent Evaluation Report_

🔬

Evaluation Methodology

This report independently reinterprets **DataClinic's three-level diagnostic results (Level I / II / III)**
                            through the lens of the **ISO/IEC 5259-2:2024 Quality Measures (QM) framework**.
                            We mapped DataClinic's metrics and charts to each ISO QM definition and independently rendered
                            Pass / Fail / Caution / N/A verdicts.
                            For areas beyond DataClinic's reach — specifically label accuracy and semantic balance —
                            we cross-referenced academic literature (Northcutt et al. 2021) and public class listings.

DataClinic L1 Diagnosis→DataClinic L2/L3 Diagnosis→ISO 5259-2 QM Interpretation · Verdict

<!-- stat-card -->
****Summary:**
                        ImageNet (ILSVRC) is the 1,431,167-image, 1,000-class dataset that has underpinned the deep learning revolution since 2009.
                        This report independently reinterprets DataClinic's score of 60 (Fair) through the ISO/IEC 5259-2:2024 Quality Measures (QM) framework.
                        Of 12 QM items assessed, **5 received Fail, 4 Caution, 3 N/A, and 0 Pass**.
                        Key issues include the semantic imbalance of 120 dog breed classes, representativeness distortion dominated by peacocks in L2,
                        approximately 85,870 mislabeled images validated by Northcutt et al. (2021),
                        and biotic/abiotic skew in the feature space.
                        DataClinic's 60-point score reflects technical attributes only;
                        once semantic quality is factored in, the true quality is considerably lower.**

<!-- stat-card -->
**0 / 12** — Pass Items

<!-- stat-card -->
**5** — Fail Items

<!-- stat-card -->
**4** — Caution Items

<!-- stat-card -->
**3** — N/A (Not Measured)

## 1
                    Dataset Overview

ImageNet is the large-scale image recognition dataset built in 2009 by Fei-Fei Li's research team at Princeton and Stanford.
                    It defines 1,000 visual categories (synsets) based on the WordNet lexical hierarchy and assigns labels through
                    Amazon Mechanical Turk (AMT) crowdsourcing of web-crawled images.
                    After AlexNet achieved its breakthrough performance at the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) in 2012,
                    every landmark deep learning model — VGGNet, GoogLeNet, ResNet, and beyond — was trained and validated on this dataset.
                    It is, in effect, modern deep learning's textbook and the original source of pretrained weights
                    that have propagated through thousands of downstream models via transfer learning.

| Dataset | ImageNet (ILSVRC) |
| --- | --- |
| Source | ImageNet.org (Princeton/Stanford) |
| First Released | 2009 |
| Total Images | 1,431,167 |
| Classes | 1,000 (WordNet synsets) |
| Mean per Class | 1,281.2 (std 70.2) |
| Sample Range | 732 – 1,300 |
| Resolution | 20×17 – 7,056×4,488 px |
| Channels | RGB 98.43% / Grayscale 1.57% |
| DataClinic Score | 60 / 100 (Fair) |

<!-- stat-card -->
**Basic Information** — [https://image-net.org](https://image-net.org)

| Category | Classes | Share |
| --- | --- | --- |
| Dog breeds | 120 | 12.0% |
| Other animals (birds, reptiles, etc.) | ~200 | ~20% |
| Plants, food, nature | ~80 | ~8% |
| Artifacts (tools, machines, instruments) | ~450 | ~45% |
| Other (structures, scenes, etc.) | ~150 | ~15% |

<!-- stat-card -->
**Semantic Class Distribution** — * 120 dog breeds account for 12% of all classes — a structural bias

▵ ImageNet dataset sample collage — diverse visual categories across 1,000 classes

<!-- stat-card -->
**ImageNet's 1,000 classes were selected from WordNet's lexical hierarchy.
                        This selection process over-represented biological taxonomies, resulting in 120 dog breed classes alone.
                        It includes many fine-grained distinctions that even experts struggle with —
                        Yorkshire terrier vs. silky terrier, Siberian husky vs. Alaskan malamute.
                        Meanwhile, critical domains of human life such as healthcare, transportation, and architecture
                        are represented by only a handful of classes.
                        This structure effectively demands that a model become a "dog expert"
                        while roughly classifying the rest of the world.**

## 2
                    ISO/IEC 5259-2 Evaluation Framework

ISO/IEC 5259-2:2024 is the international standard for measuring the quality of data used to train AI/ML systems.
                    This report maps DataClinic's three-level diagnostic results to the standard's Quality Measures (QM)
                    and renders independent verdicts.
                    We clearly distinguish between what DataClinic can and cannot measure,
                    supplementing the latter with academic literature and public data.

| DataClinic Level | What It Measures | Mapped ISO 5259-2 QMs |
| --- | --- | --- |
| Level I | Class count, sample count, missing values, pixel statistics, channel distribution | Con-ML-2, Bal-ML-1, Eft-ML-1 |
| Level II | Wolfram 1,280-dim embedding density, outliers, similarity | Rep-ML-1, Sim-ML-2, Div-ML-1 |
| Level III | BLIP image-text 122-dim density, cluster analysis | Rep-ML-3, Div-ML-1 |

## 3
                    Intrinsic Quality — Con-ML

| QM ID | Item | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Con-ML-2 | Pixel Channel Consistency | Statistical distribution consistency of image channels | ⚠️ Caution |

## 4
                    Balance Assessment — Bal-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Bal-ML-3 | Class Balance | Numerically 732–1,300 range, but severe semantic imbalance | ❌ Fail |
| Bal-ML-2 | Feature Space Balance | Cross-interaction of lens characteristics prevents isolated measurement | — N/A |

## 5
                    Identifiability Assessment — Eft-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Eft-ML-1 | Labeler Identifiability | Non-expert AMT labelers' limits on fine-grained classification | ⚠️ Caution |
| Eft-ML-2 | Annotation Completeness | Bounding boxes and similar not diagnosed | — N/A |

- Most labelers lack domain expertise (animal taxonomy, musical instrument knowledge)
- Labeling guidelines rely on visual examples with insufficient fine-grained criteria (e.g., anatomical differences)
- Crowdsourcing incentive structures that prioritize speed over accuracy
- Abstract WordNet synsets like "potpourri" and "stage" that are inherently visually ambiguous

## 6
                    Similarity Assessment — Sim-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Sim-ML-2 | Cross-Class Similarity | mousetrap↔piano, shovel↔plunger, etc. | ⚠️ Caution |
| Sim-ML-1 | Within-Class Similarity | Exhaustive measurement across 1,000 classes not feasible | — N/A |

## 7
                    Representativeness Assessment — Rep-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Rep-ML-1 | L2 Representativeness | 10 of 12 high-density core samples are peacock | ❌ Fail |
| Rep-ML-3 | L3 Representativeness | 10 of 12 high-density core samples are tarantula | ❌ Fail |

## 8
                    Diversity Assessment — Div-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Div-ML-1 | L2 Feature Space Diversity | Biotic categories disproportionately occupy feature space relative to abiotic | ❌ Fail |

## 9
                    Label Accuracy — Acc-ML

| QM ID | Item | Finding | Verdict |
| --- | --- | --- | --- |
| Acc-ML-7 | Label Accuracy | Northcutt et al. 2021: ~6% error = ~85,870 images | ❌ Fail |

- File-to-label mapping existence
- Channel distribution statistics
- Embedding density distribution
- Per-class sample count balance
- Outlier detection (density-based)

- Whether labels actually match images (6% error)
- Cultural/geographic representativeness (Western-centric)
- Semantic class balance (120 dog breeds)
- PII/ethical issues (person category)
- Transfer learning bias propagation

## 10
                    Overall Assessment & Prescriptions

| DQC Group | QM ID | Item | Verdict | Severity |
| --- | --- | --- | --- | --- |
| Balance | Bal-ML-3 | Class Balance (Semantic) | ❌ Fail | Critical |
| Representativeness | Rep-ML-1 | L2 Representativeness (Peacock Dominance) | ❌ Fail | Critical |
| Representativeness | Rep-ML-3 | L3 Representativeness (Tarantula Dominance) | ❌ Fail | High |
| Accuracy | Acc-ML-7 | Label Accuracy (~6% Error) | ❌ Fail | Critical |
| Diversity | Div-ML-1 | L2 Feature Space Diversity | ❌ Fail | High |
| Consistency | Con-ML-2 | Pixel Channel Consistency | ⚠️ Caution | Medium |
| Similarity | Sim-ML-2 | Cross-Class Similarity | ⚠️ Caution | Medium |
| Identifiability | Eft-ML-1 | Labeler Identifiability | ⚠️ Caution | Medium |
| Completeness | Com-ML-1 | Class Completeness (Ambiguous Synsets) | ⚠️ Caution | Medium |
| Balance | Bal-ML-2 | Feature Space Balance | — N/A | — |
| Similarity | Sim-ML-1 | Within-Class Similarity | — N/A | — |
| Identifiability | Eft-ML-2 | Annotation Completeness | — N/A | — |

- **Acc-ML-7:** Systematic label audit (using tools such as CleanLab). Manual review of at least 50,000 validation images
- **Bal-ML-3:** Consider restructuring the 120 dog breeds into higher-level categories
- **Rep-ML-1/3:** Downsample or diversify high-density clusters (peacock, tarantula)

- **Div-ML-1:** Augment abiotic classes with images from diverse angles and backgrounds
- **Con-ML-2:** Build a preprocessing pipeline to handle extreme pixel values (0, 255) from clipped images
- **Sim-ML-2:** Strengthen labeling guidelines for visually similar cross-class pairs

- **Eft-ML-1:** Periodic label quality audits for fine-grained classes
- **Com-ML-1:** Re-examine class definitions for abstract synsets
- **Eft-ML-2:** Diagnose completeness of additional annotations (bounding boxes, segmentation, etc.)

> [!callout]

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 — Part 2: Data quality measures.
- [2] DataClinic Report #123 — ImageNet. [dataclinic.ai/en/report/123](https://dataclinic.ai/en/report/123)
- [3] Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., & Fei-Fei, L. (2009). ImageNet: A Large-Scale Hierarchical Image Database. CVPR 2009.
- [4] Northcutt, C. G., Athalye, A., & Mueller, J. (2021). Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks. NeurIPS 2021.
- [5] Pebblous. (2025). [AI Data Quality Standards and Pebblous DataClinic: ISO/IEC 5259-2 Quantitative Mapping](/project/ISO5259/5259-pbls-dataclinic-02/en/)
- [6] Russakovsky, O. et al. (2015). ImageNet Large Scale Visual Recognition Challenge. IJCV.
