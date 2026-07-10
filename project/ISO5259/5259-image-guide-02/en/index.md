---
title: When Diagnostic Data Meets ISO 5259
subtitle: ISO/IEC 5259 Image Dataset Quality Evaluation Guide — Part 2: Practice
date: 2026-04-04
category: project
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Diagnostic Data Meets ISO 5259

_ISO/IEC 5259 Image Dataset Quality Evaluation Guide — Part 2: Practice_

## Executive Summary

> [!callout]
> The L1 pixel histograms, L2 density contours, and L3 cluster distributions that DataClinic generates all have a 1:1 correspondence with the quality measurement (QM) items defined in ISO/IEC 5259-2.
>                         This article presents a methodology for directly mapping the actual diagnostic results from three public datasets — ImageNet (1,431,167 images), WikiArt (81,444 images), and SpectralWaste (2,794 images) —
>                         to specific QM codes such as Bal-ML, Div-ML, and Rep-ML.
>                         Each dataset reveals a distinct failure pattern: scale does not guarantee quality (ImageNet), bias lives in density rather than counts (WikiArt), and small datasets have structural limits (SpectralWaste).

> DataClinic L1 automatically covers Com-ML-1, Con-ML-1/3, Bal-ML-1/2/3, and Div-ML-1/2/3.
>                         L2/L3 measure Sim-ML-1/2/3, Rep-ML-1, Eft-ML-1/2/3, and Acc-ML-7 using neural network–based analysis.
>                         Items that DataClinic does not automatically cover — including Aud-ML, Cur-ML, and Acc-ML-2 (label accuracy) —
>                         can be assessed through metadata analysis, visual sample review, and tools such as the C2PA toolkit.

> After reading this article, you will be able to open your own DataClinic diagnostic report and immediately identify which ISO 5259 item each metric corresponds to.
>                         DataClinic is the measurement instrument for ISO 5259; ISO 5259 is the interpretive framework for DataClinic.

## 1
                    The DataClinic → ISO 5259 Mapping Framework

| Diagnostic Level | What It Measures | ISO 5259-2 QM Items |
| --- | --- | --- |
| L1 — Pixel Statistics | Class count, sample count, missing values, RGB channel distributions, resolution range, per-class image count bar chart | Com-ML-1,                                         Con-ML-1 Con-ML-3,                                         Bal-ML-3.Bal-ML-2 Bal-ML-3,                                         Div-ML-1 Div-ML-2 Div-ML-3 |
| L2 — General-Purpose Embedding | Density distribution, clusters, outliers, and similarity pairs in Wolfram's 1,280-dimensional feature space | Sim-ML-1 Sim-ML-2 Sim-ML-3,                                         Rep-ML-1,                                         Eft-ML-1 Eft-ML-2 Eft-ML-3,                                         Acc-ML-7 |
| L3 — Domain Embedding | Semantic density distribution based on BLIP image-text matching, inter-class semantic drift | Rep-ML-1,                                         Acc-ML-2 (partial),                                         Rep-ML-1 (domain representativeness patterns) |
| Not Covered by DataClinic | Direct label accuracy measurement, copyright/license auditing, collection timestamp metadata, portability | Acc-ML-2,                                         Aud-ML-1,                                         Cur-ML-1,                                         Rel-ML-1,                                         Tml-ML-1,                                         Por-ML-1 |

- Acc-ML-2 (label accuracy) —
                            Extract low-density samples from DataClinic L3 and review them visually. Low density means the sample lies far from the class prototype — making it a prime candidate for a mislabel.
                            Northcutt et al. (2021) used this approach to find 85,870 errors in ImageNet.
- Aud-ML-1 (copyright/license auditing) —
                            Verify per-image provenance signatures using the C2PA metadata toolkit. Especially important for copyright-sensitive datasets like WikiArt.
- Cur-ML-1 (feature currentness) —
                            Extract capture years from image EXIF metadata, or analyze timestamps in the crawl collection logs.
- Sim-ML-1 (duplicate images) —
                            Detect near-identical image pairs using pHash (perceptual hashing)–based similarity. Particularly important for small datasets.

## 2
                    ImageNet — Scale Does Not Guarantee Quality

| DataClinic Diagnostic Chart / Metric | ISO 5259-2 QM Code | Verdict |
| --- | --- | --- |
| L1 — Total image count 1,431,167; missing values: 0 | Com-ML-1 (value completeness) | Pass |
| L1 — 120 dog breed classes / 12% of all 1,000 classes; semantic overcrowding | Bal-ML-3 (balance of images between categories) | Fail |
| L1 — Blue channel spike of ~1.6B at pixel=255 and ~830M at pixel=0 | Cre-ML-1 (pixel quality) | Warn |
| L2 — Peacock cluster dominates the biological feature space in the density contour | Sim-ML-1 (sample similarity) | Fail |
| L3 — Peacock-centered embeddings drift toward non-biological classes such as tarantula | Rep-ML-1 (domain representativeness) | Fail |
| L3 — Focused analysis of low-density samples (outliers) → cross-validated against Northcutt et al. (2021): 85,870 errors | Acc-ML-7 (label anomaly proxy) | Warn |

### Bal-ML-3: The Gap Between Numerical Balance and Semantic Balance

### Sim-ML-1 vs Rep-ML-1: What L2 and L3 Each Catch

### Acc-ML-2: Measuring Label Accuracy Outside DataClinic

## 3
                    WikiArt — Bias Lives in Density, Not in Counts

| DataClinic Diagnostic Chart / Metric | ISO 5259-2 QM Code | Verdict |
| --- | --- | --- |
| L1 — Impressionism 13,060 images vs. Analytical_Cubism 98 images (133:1 ratio) | Bal-ML-3 (balance of images between categories) | Fail |
| L1 — Red channel histogram shows bimodal distribution (Impressionist warm tones + Classical dark tones) | Cre-ML-1 (pixel quality) | Fail |
| L2 — Pop Art cluster forms an isolated community separated from all other movements | Sim-ML-1 (sample similarity) | Fail |
| L3 — Antoine Blanchard (Parisian street painter) shows ultra-high-density concentration in the Impressionist zone | Rep-ML-1 (domain representativeness) | Warn |
| L3 — The entire Impressionist embedding space is skewed by Blanchard's visual characteristics | Rep-ML-1 (domain representativeness) | Fail |
| L1 — Total 81,444 images; missing values: 0 (completeness itself is fine) | Com-ML-1 (value completeness) | Pass |

### Cre-ML-1: What the Red Channel Bimodal Distribution Tells Us

### L2 vs L3: Two Lenses, Two Kinds of Bias

### Aud-ML-1: How to Measure WikiArt's Copyright Issues

## 4
                    SpectralWaste — The Structural Limits of Small Industrial Datasets

| DataClinic Diagnostic Chart / Metric | ISO 5259-2 QM Code | Verdict |
| --- | --- | --- |
| L1 — Total 2,794 images (insufficient absolute quantity for industrial deployment) | Com-ML-1 (value completeness / quantity) | Fail |
| L1 — video_tape 646 images vs. filament 33 images (19.6:1 imbalance) | Bal-ML-3 (balance of images between categories) | Fail |
| L1 — Missing values: 0; label completeness: 100% | Com-ML-3 Com-ML-5 | Pass |
| L2 — All embeddings densely packed into a single cloud (no environmental diversity) | Div-ML-1 (environmental diversity) | Fail |
| L3 — High-density concentration → only a single conveyor belt environment represented; real recycling sites not reflected | Rep-ML-1 (domain representativeness) | Fail |
| L2 — filament class samples intermixed with basket and bag embedding zones | Con-ML-2 (label consistency) | Warn |

### Com-ML-1 + Bal-ML-3: A Double Burden of Insufficient Quantity and Imbalance

### Div-ML-1: The Single-Cloud Embedding as Evidence of Missing Environmental Diversity

### Div-ML-1: Methodology for Improving Environment Diversity

## 5
                    Three-Dataset Comparison Matrix

| QM Item | QM ID | ImageNet | WikiArt | SpectralWaste | Measurement Method |
| --- | --- | --- | --- | --- | --- |
| Accuracy |  |  |  |  |  |
| Label accuracy | Acc-ML-2 | Fail~6% errors | Manual review required | Manual review required | Visual review of L3 low-density samples |
| Label anomaly detection | Acc-ML-7 | Warn | Warn | Warn | DataClinic L3 (auto proxy) |
| Completeness |  |  |  |  |  |
| Value completeness | Com-ML-1 | Pass | Pass | FailInsufficient quantity | DataClinic L1 (auto) |
| Balance |  |  |  |  |  |
| Class balance | FailSemantic skew | Fail133:1 | Fail19.6:1 | DataClinic L1 (auto) |  |
| Diversity |  |  |  |  |  |
| Environmental diversity | Div-ML-1 | Warn | Warn | Fail | DataClinic L2 (auto) |
| Cluster diversity | Sim-ML-1 | FailPeacock dominance | FailPop Art fault line | Warn | DataClinic L2 (auto) |
| Representativeness |  |  |  |  |  |
| Domain representativeness | Rep-ML-1 | Fail | FailBlanchard bias | FailSingle environment | DataClinic L3 (auto) |
| Consistency |  |  |  |  |  |
| Pixel consistency | Cre-ML-1 | WarnBlue spike | FailRed bimodal | Pass | DataClinic L1 (auto) |
| Similarity |  |  |  |  |  |
| Duplicate images | Sim-ML-1 | Pass | Warn | Manual required | pHash analysis supplement |
| Identifiability |  |  |  |  |  |
| Data source identification | Rep-ML-1 | N/A | WarnBlanchard pattern | N/A | DataClinic L3 (partial) |
| Auditability |  |  |  |  |  |
| Copyright/license | Aud-ML-1 | Manual required | FailCopyright risk | Manual required | C2PA metadata analysis |
| Currentness |  |  |  |  |  |
| Feature currentness | Cur-ML-1 | WarnCollected 2009 | Warn | Manual required | EXIF timestamp analysis |
| Effectiveness |  |  |  |  |  |
| Collection efficiency | Div-ML-1 | Pass | Warn | FailSingle environment | DataClinic L2/L3 + supplement |

## 6
                    Conclusion — Separating Responsibilities Across Two Layers

> [!callout]
