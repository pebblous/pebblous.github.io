---
title: What Can We See When Art Becomes Data
subtitle: WikiArt \u00d7 ISO/IEC 5259-2 Independent Evaluation Report
date: April 4, 2026
category: image.
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What Can We See When Art Becomes Data

_WikiArt \u00d7 ISO/IEC 5259-2 Independent Evaluation Report_

🔬

Evaluation Methodology

This report is an independent evaluation that reinterprets **DataClinic's 3-level diagnostic results (Level I / II / III)**
                            through the **ISO/IEC 5259-2:2024 Quality Measures (QM) framework**.
                            We mapped DataClinic's metrics, charts, and outliers to each ISO QM criterion
                            and independently assigned Pass / Fail / Caution verdicts.
                            In particular, we critically reinterpret discrepancies between DataClinic API descriptions and actual chart data.

DataClinic L1 Diagnosis→DataClinic L2/L3 Diagnosis→ISO 5259-2 QM Interpretation · Verdict

<!-- stat-card -->
****Summary:** We independently evaluated the WikiArt art movement image dataset (81,444 images, 27 classes) against ISO/IEC 5259-2:2024 Quality Measures (QM). After mapping DataClinic's 3-level diagnostic metrics and charts to ISO QM criteria, we found **5 Fail**, **5 Caution**, and 3 N/A out of 13 assessed items — with **zero Pass**. The key issues are a 133x imbalance between Impressionism and Analytical Cubism, a single-cloud structure in L2, the Blanchard effect (a single painter defining "typical art" in L3), and Pop Art's medium fault line. DataClinic's overall score of 53/100 (Poor) is confirmed from the ISO perspective as well.**

<!-- stat-card -->
**0 / 13** — QM Items Passed

<!-- stat-card -->
**5** — Fail Items

<!-- stat-card -->
**5** — Caution Items

<!-- stat-card -->
**3** — N/A (Deferred)

## 1
                    Dataset Overview

| Dataset | WikiArt |
| --- | --- |
| Source | HuggingFace (huggan/wikiart) |
| Total Images | 81,471 (diagnosed: 81,444) |
| Classes | 27 (art movements) |
| Image Size | 750×597 ~ 1382×17768 px |
| DataClinic Score | 53 / 100 (Poor) |

<!-- stat-card -->
**Basic Information** — [https://huggingface.co/datasets/huggan/wikiart](https://huggingface.co/datasets/huggan/wikiart)

| Class (Movement) | Samples |
| --- | --- |
| Impressionism | 13,060 |
| Realism | 10,733 |
| Romanticism | 7,019 |
| Expressionism | 6,736 |
| Post_Impressionism | 6,450 |
| Art_Nouveau | 4,334 |
| Baroque | 4,241 |
| Symbolism | 3,421 |
| Abstract_Expressionism | 2,782 |
| Naive_Art | 2,405 |
| ... (17 movements omitted) |  |
| Analytical_Cubism | 98 |

<!-- stat-card -->
**Top 10 Classes by Sample Count (L1)** — Max-to-min class ratio: **133 : 1** (Impressionism vs Analytical_Cubism)

▲ WikiArt dataset representative image collage — 27 art movements from Renaissance to Pop Art

<!-- stat-card -->
**WikiArt is a large-scale image dataset for art movement classification and one of the most widely used art AI benchmarks on HuggingFace.
                        It spans 27 movements and approximately 81,000 works, from the Renaissance to contemporary art.
                        However, the inherent disparities in the number of surviving works across historical periods, digitization bias, and Western-centric curation
                        all affect its quality as an ML training dataset.
                        DataClinic's overall score of 53 (Poor) reflects these structural issues.**

## 2
                    ISO/IEC 5259-2 Evaluation Framework

| DataClinic Level | What It Measures | Mapped ISO 5259-2 QMs |
| --- | --- | --- |
| Level I | Class count, sample count, missing values, pixel statistics (RGB), resolution range | Com-ML, Bal-ML-3, Eft-ML-1 |
| Level II | Wolfram ImageIdentify Net V2 embeddings (1,280-dim) — general-purpose shape recognition | Sim-ML, Rep-ML-1, Div-ML-1, Con-ML-2 |
| Level III | BLIP image-text matching (56-dim) — semantic analysis | Rep-ML-3, Sim-ML-1, Acc-ML-7 |

## 3
                    Intrinsic Quality Assessment

| QM ID | Criterion | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Com-ML-1 | Class Completeness | Whether the target domain's class taxonomy is sufficiently covered | Caution |
| Con-ML-2 | Pixel Channel Consistency | Statistical consistency of RGB channel distributions | Caution |

## 4
                    Balance Assessment — Bal-ML

| QM ID | Criterion | Measurement | Verdict |
| --- | --- | --- | --- |
| Bal-ML-3 | Class Balance | 133x imbalance, stdDev(3,269) > mean(3,016) | Fail |
| Bal-ML-2 | Feature Space Balance | L3 period-based stratification (classical 1.84-1.87, modern 1.49-1.67) | N/A |

## 5
                    Distinguishability and Label Accuracy

| QM ID | Criterion | Measurement | Verdict |
| --- | --- | --- | --- |
| Eft-ML-1 | Distinguishability | L2 classes inseparable (single cloud) | Caution |
| Eft-ML-2 | Annotation Completeness | Metadata (artist, year) completeness not diagnosed | N/A |
| Acc-ML-7 | Label Accuracy | Dali → Abstract_Expressionism misclassification, Pop Art medium contamination | Fail |

## 6
                    Similarity Assessment — Sim-ML

| QM ID | Criterion | Measurement | Verdict |
| --- | --- | --- | --- |
| Sim-ML-1 | Intra-class Similarity | Some classes (Cubism variants) show high cohesion, but full quantification unavailable | N/A |
| Sim-ML-2 | Cross-class Similarity | Minimalism ≈ Color_Field_Painting (same L2 cluster) | Caution |

## 7
                    Representativeness Assessment — Rep-ML

| QM ID | Criterion | ISO Definition | Verdict |
| --- | --- | --- | --- |
| Rep-ML-1 | L2 Representativeness | Whether the feature-space core represents the full domain | Fail |
| Rep-ML-3 | L3 Representativeness | Whether "typical" samples in semantic space represent the domain | Fail |

## 8
                    Diversity Assessment — Div-ML

| QM ID | Criterion | Verdict |
| --- | --- | --- |
| Div-ML-1 | L2 Diversity — All 27 classes form a single continuous cloud in L2 | Fail |
| Sim-ML-1 | L3 Diversity — Dramatic Pop Art separation, period-based stratification present | Caution |

## 9
                    Two Lenses Compared: L2 vs L3

| Dimension | L2 Findings (General Shape AI) | L3 Findings (Semantic AI) |
| --- | --- | --- |
| High-density Core | Minimalism / Color_Field_PaintingVisual simplicity interpreted as "universal pattern" | Antoine Blanchard's Parisian boulevardsSemantically consistent representational cityscapes |
| Low-density Outliers | Degas portraits, Ukiyo-e prints, Mabe abstracts"Unusual" visual patterns for general lens | Pop Art installation photos, contemporary architectureNon-painting media → semantic space outliers |
| Cluster Structure | Single cloud (no class separation)All paintings converge to one "image" category | Dramatic Pop Art separation + period stratificationSemantic lens distinguishes period and medium |
| ISO Implications | Div-ML-1 Fail, Eft-ML-1 CautionGeneral-purpose lens cannot classify art movements | Rep-ML-3 Fail, Sim-ML-1 CautionSemantic lens finds structure but reveals representation bias |

## 10
                    Overall Assessment and Recommendations

| DQC Group | QM ID | Criterion | Verdict | Severity |
| --- | --- | --- | --- | --- |
| Balance | Bal-ML-3 | Class Balance (133x) | Fail | Critical |
| Representativeness | Rep-ML-1 | L2 Minimalism bias | Fail | Critical |
| Representativeness | Rep-ML-3 | L3 Blanchard effect | Fail | High |
| Diversity | Div-ML-1 | L2 single cloud | Fail | Critical |
| Accuracy | Acc-ML-7 | Dali misclassification, Pop Art medium contamination | Fail | High |
| Completeness | Com-ML-1 | Rare movements: 98-120 samples | Caution | Medium |
| Distinguishability | Eft-ML-1 | L2 classes inseparable | Caution | Medium |
| Similarity | Sim-ML-2 | Minimalism ≈ Color_Field | Caution | Medium |
| Diversity | Sim-ML-1 | Pop Art medium fault line | Caution | Medium |
| Consistency | Con-ML-2 | RGB channel discrepancy | Caution | Medium |
| Similarity | Sim-ML-1 | Intra-class quantification unavailable | N/A | — |
| Distinguishability | Eft-ML-2 | Metadata completeness not diagnosed | N/A | — |
| Balance | Bal-ML-2 | Period-based stratification (historical reality) | N/A | — |

- **Bal-ML-3:** Augment rare movements (Analytical_Cubism, Action_Painting, etc.) to 300+ samples
- **Acc-ML-7:** Full label audit. Correct systematic errors such as Dali → Surrealism
- **Div-ML-1:** Redesign class taxonomy — evaluate merging or hierarchical restructuring of 27 movements

- **Rep-ML-1/3:** Adjust overrepresentation of commercial repetitions (e.g., Blanchard) via downsampling or weighting
- **Sim-ML-1:** Split Pop Art class into "painting" and "non-painting (installation/photography)" subclasses
- **Sim-ML-2:** Merge Minimalism & Color_Field_Painting or introduce hierarchical labeling

- **Con-ML-2:** Develop RGB channel normalization strategies (painting-domain-specific)
- **Eft-ML-1:** Evaluate domain-specific lens-based classification pipelines
- **Com-ML-1:** Consider expansion to non-Western movements (East Asian painting, Islamic miniatures, etc.)

| # | DataClinic API Claim | Actual Chart Data | ISO Verdict Impact |
| --- | --- | --- | --- |
| D1 | "RGB channels consistent" | Blue left-skewed, Red bimodal + 255 spike | Con-ML-2 upgraded to Caution |
| D2 | "3 high-density clusters" | 1 connected mass with 2 density centers | Div-ML-1 Fail maintained |
| D3 | L2 Geometry "Good" | 27 classes in single cloud, no separation | Eft-ML-1 Caution |
| D4 | L3 clusters "unclear" | Dramatic Pop Art separation + period stratification clearly visible | Sim-ML-1 Caution (underestimate corrected) |

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 — Part 2: Data quality measures.
- [2] DataClinic Report #115 — WikiArt. [dataclinic.ai/en/report/115](https://dataclinic.ai/en/report/115)
- [3] WikiArt Dataset (huggan/wikiart). [HuggingFace](https://huggingface.co/datasets/huggan/wikiart)
- [4] Pebblous. (2025). [AI Data Quality Standards and Pebblous DataClinic: ISO/IEC 5259-2 Quantitative Mapping](/project/ISO5259/5259-pbls-dataclinic-02/en/)
- [5] Pebblous. (2026). [SpectralWaste ISO/IEC 5259-2 Independent Evaluation Report](/project/ISO5259/spectralwaste-iso5259-eval/en/)
