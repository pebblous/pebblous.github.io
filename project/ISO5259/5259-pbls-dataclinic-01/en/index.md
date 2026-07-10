---
title: How DataClinic Maps to the Global AI Data Quality Standard
subtitle: Quantitative Mapping Analysis with ISO/IEC 5259-2 Quality Measures (QM)
date: November 16, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How DataClinic Maps to the Global AI Data Quality Standard

_Quantitative Mapping Analysis with ISO/IEC 5259-2 Quality Measures (QM)_

Contents

- [Abstract](#summary)
- [1. Background](#section-1)
- [2. ISO/IEC 5259 Series](#section-2)
- [3. ISO/IEC 5259-2 QM Analysis](#section-3)
- [4. Quantitative Mapping](#section-4)
- [5. Technical Implementation](#section-5)
- [6. Case Studies](#section-6)
- [7. Policy Recommendations](#section-7)
- [References](#references)
- [PDF Download](#pdf-download)

Quantitative Mapping Analysis with ISO/IEC 5259-2 Quality Measures (QM)

## Abstract

This report provides an in-depth analysis of the technical correlation between the international AI data quality standards represented by the **ISO/IEC 5259 series** and
                                **Pebblous DataClinic**.
                                The performance of AI models directly depends on the quality of training data, and data quality management has become a mandatory requirement rather than an option.

**ISO/IEC 5259-2** defines 7 core Data Quality Characteristics (DQC) and
                                over 60 quantitative Quality Measures (QM) for AI/ML datasets, and Pebblous DataClinic implements these through
                                **DNN-based DataLens** and **Data Imaging** technologies.

Through this analysis, we demonstrate that DataClinic's **Level I (Basic EDA)**,
                                **Level II (General Lens)**, and
                                **Level III (Data-Specific Lens)** diagnostic framework
                                maps 1:1 to the core QMs of ISO/IEC 5259-2, including Completeness, Similarity, and Representativeness.

## 1. Background: The Importance of AI Data Quality

The reliability and fairness of AI systems are determined by the quality of their training data.
                            The **EU AI Act** (2024) and the **U.S. AI Executive Order** (EO 14110, 2023)
                            mandate data quality verification for high-risk AI systems.

### Regulatory Landscape

- ▸**EU AI Act**: Mandates data quality for high-risk AI systems
- ▸**U.S. EO 14110**: AI safety standards and data governance
- ▸**Korea's Intelligence Information Act**: AI ethics standards and data management

### Technical Challenges

- ▸**Biased Data**: Produces discriminatory AI outcomes
- ▸**Incomplete Data**: Fails to learn specific classes
- ▸**Excessive Similar Data**: Causes overfitting

**Key Message:**
                                AI data quality management is an essential technical infrastructure not only for regulatory compliance but also for ensuring model performance, fairness, and reliability.
                                Pebblous DataClinic is an international standards-based solution that addresses these requirements.

## 2. ISO/IEC 5259 Series Overview

The **ISO/IEC 5259** series is the international standard for data quality management
                        for AI/ML systems, consisting of three parts.

Part 1

### Overview and Terminology

Defines core concepts including Data Quality Characteristics (DQC),
                                Quality Measures (QM), and evaluation methodologies

Part 2

### Data Quality Measures

Presents 7 DQCs and over 60 quantitative QMs.
                                **The core analysis subject of this report**

Part 3

### Data Quality Management Framework

Provides organizational data quality management processes,
                                roles, responsibilities, and quality improvement procedures

### 7 Data Quality Characteristics (DQC)

#### Inherent DQC

- **Accuracy**
- **Completeness**
- **Consistency**

#### Additional DQC

- **Balance**
- **Diversity**
- **Representativeness**
- **Similarity**

## 3. ISO/IEC 5259-2 Core Quality Measures (QM) Analysis

ISO/IEC 5259-2 presents various QMs for quantitatively measuring each DQC.
                        Below are the key QMs important for mapping with DataClinic.

### Completeness QM

| QM ID | Description | AI Model Risk |
| --- | --- | --- |
| Com-ML-3 | Ratio of instances with missing feature data | Failure to learn specific features |
| Com-ML-5 | Missing instance rate per class | Degraded classification performance for specific classes |

### Similarity QM

| QM ID | Description | AI Model Risk |
| --- | --- | --- |
| Sim-ML-1 | Ratio of similar instances within dataset | Causes overfitting |
| Sim-ML-2 | Average similarity within class | Degraded generalization performance |

### Representativeness QM

| QM ID | Description | AI Model Risk |
| --- | --- | --- |
| Rep-ML-1 | Target domain coverage | Degraded performance in real-world environments |
| Rep-ML-3 | Distribution distance (KL-divergence) | Decreased prediction reliability after deployment |

## 4. Core Analysis: Quantitative Mapping Between DataClinic and ISO/IEC 5259-2

Pebblous DataClinic's three-level diagnostic framework maps directly to the core QMs of ISO/IEC 5259-2.
                        The table below illustrates this 1:1 correspondence.

### ISO/IEC 5259-2 ↔ DataClinic Mapping Table

| ISO/IEC 5259-2 Characteristic | QM ID (Example) | AI Model Risk | DataClinic Measurement | DataClinic Prescription |
| --- | --- | --- | --- | --- |
| Inherent: Completeness | Com-ML-5 | Model fails to learn specific classes | Level I: Missing value measurement | Manual/automatic labeling |
| Additional: Similarity | Sim-ML-1 | Severe overfitting | Level II/III: Density measurement chart | Data Diet |
| Additional: Representativeness | Rep-ML-1 | Degraded performance in real-world environments | Level II/III: Manifold gap analysis | Data Bulk-Up |
| Additional: Balance | Bal-ML-3 | Ignores minority classes, biased predictions | Level I: Class distribution visualization | Class resampling |
| Additional: Diversity | Div-ML-2 | Learns only specific scenarios | Level II/III: Intrinsic dimension analysis | Diversity enhancement strategy |

************************************************

**Key Insight:**
                            DataClinic's measurement capabilities directly implement the major QMs of ISO/IEC 5259-2, and
                            the **Data Diet** (duplicate removal) and
                            **Data Bulk-Up** (sparse region augmentation) prescriptions based on diagnostic results
                            align precisely with the quality improvement activities required by the standard.

## 5. Pebblous DataClinic: Technical Implementation and DNN-Based Approach

### Three-Level Diagnostic Framework

Level I

#### Basic EDA

- • Missing value analysis
- • Class distribution
- • Basic statistics
- • Outlier detection

Level II

#### General Lens

- • General-purpose embedding
- • Density measurement
- • Distance distribution analysis
- • Manifold shape

Level III

#### Data-Specific Lens

- • Custom embedding
- • Intrinsic dimension analysis
- • Precision quality measurement
- • Domain-specific diagnosis

### DataLens: DNN-Based Data Analysis

DataLens leverages the embedding layers of deep learning models to project data into high-dimensional vector spaces,
                                enabling quantitative measurement of ISO/IEC 5259-2 QMs.

#### Core Capabilities

- ▸**Data Imaging**: Raw data → Feature vectors → Embedding space
- ▸**Density Measurement**: k-NN distance-based density quantification
- ▸**Manifold Analysis**: Identifying geometric structure of data distributions

#### Measurement Functions

- ▸**Density(x)**: Density around sample x
- ▸**Distance(x, C)**: Minimum distance to class C
- ▸**ManifoldShape(D)**: Manifold shape of dataset D

### Data Prescription System

#### Data Diet

**Purpose:** Resolving excessive Similarity issues

- • Remove duplicate samples
- • Sampling from dense regions
- • Reduce overfitting risk

#### Data Bulk-Up

**Purpose:** Resolving insufficient Representativeness

- • Manifold gap augmentation
- • Adding data in sparse regions
- • Improving generalization performance

## 6. Case Studies: Applying ISO/IEC 5259-2 with DataClinic

### Case 1: Image Dataset Diagnosis

#### Issues Discovered

- ▸**Excessive Similarity (Sim-ML-1)**:
                                                Level III density measurement revealed 40% of samples concentrated in specific regions
- ▸**Insufficient Representativeness (Rep-ML-1)**:
                                                Manifold gap analysis identified 5 sparse regions

#### Prescription and Results

- ✓**Data Diet**:
                                                Removed 25% from dense regions → 30% reduction in training time
- ✓**Data Bulk-Up**:
                                                Augmented sparse regions by 15% → 7% improvement in test accuracy

### Case 2: Text Dataset Quality Verification

#### Issues Discovered

- ▸**Insufficient Completeness (Com-ML-5)**:
                                                Level I missing value analysis found 20% missing in specific classes
- ▸**Balance Issue (Bal-ML-3)**:
                                                Class imbalance ratio of 1:15 discovered

#### Prescription and Results

- ✓**Automatic Labeling**:
                                                Supplemented missing classes → Achieved 95% completeness
- ✓**Class Resampling**:
                                                SMOTE-based synthesis → 18% improvement in F1-score

## 7. Policy Recommendations and Conclusion

### Policy Recommendations

#### 1. Accelerate Domestic Adoption of ISO/IEC 5259

Rapidly adopt the ISO/IEC 5259 series as national standards (KS) as a core element of the national AI strategy,
                                        and designate them as mandatory compliance requirements for public AI projects

#### 2. Foster a Data Quality Verification Tool Ecosystem

Support development of ISO/IEC 5259-compliant tools like DataClinic and
                                        introduce a public dataset quality certification system

#### 3. Integrate Data Quality into AI Governance Frameworks

In alignment with the EU AI Act and U.S. EO 14110,
                                        mandate data quality audits for high-risk AI systems

#### 4. Cultivate Data-Centric AI Talent

Develop ISO/IEC 5259-based data quality training curricula and
                                        establish a data quality professional certification framework

### Conclusion

This report demonstrates through the technical mapping between **ISO/IEC 5259-2** Quality Measures (QM) and
                                    **Pebblous DataClinic** that
                                    international standards-based AI data quality management is practically implementable.

DataClinic's **DNN-based DataLens** and
                                    **Data Imaging** technologies
                                    quantitatively measure core DQCs including Completeness, Similarity, and Representativeness, while
                                    the **Data Diet** and
                                    **Data Bulk-Up** prescriptions based on diagnostic results
                                    align precisely with the quality improvement activities required by ISO standards.

In an era where AI is deeply integrated across society, data quality management goes beyond technical excellence to become
                                    a matter of **social trust** and **ethical responsibility**.
                                    Pebblous DataClinic serves as a
                                    **standards-based data quality solution** that meets these demands of our time,
                                    contributing to strengthening the international competitiveness of Korea's AI ecosystem.

## References

### International Standards, Laws & Policies

- 1.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-1:2024 — Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 1: Overview, terminology, and examples](https://www.iso.org/standard/81088.html).
- 2.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-2:2024 — Part 2: Data quality measures](https://www.iso.org/standard/81653.html).
- 3.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-3:2024 — Part 3: Data quality management requirements and guidelines](https://www.iso.org/standard/81654.html).
- 4.European Parliament. (2024). [Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj).
- 5.The White House. (2023). [Executive Order 14110 on Safe, Secure, and Trustworthy Artificial Intelligence](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/).
- 6.Ministry of Science and ICT, Korea. (2024). AI Ethics Standards and Trustworthiness Guidelines.
- 7.National Information Society Agency (NIA), Korea. (2023). AI Data Quality Management Guidelines v2.0.

### Academic Papers

- 8.Sambasivan, N., et al. (2021). "Everyone wants to do the model work, not the data work": Data Cascades in High-Stakes AI. _CHI 2021_. [doi.org/10.1145/3411764.3445518](https://dl.acm.org/doi/10.1145/3411764.3445518)
- 9.Gebru, T., et al. (2021). Datasheets for Datasets. _Communications of the ACM_, 64(12), 86–92. [arXiv:1803.09010](https://arxiv.org/abs/1803.09010)
- 10.Mitchell, M., et al. (2019). Model Cards for Model Reporting. _FAT* 2019_. [arXiv:1810.03677](https://arxiv.org/abs/1810.03677)

## PDF Download

Download the full report as a PDF for offline reading.

[PDF Download](/project/ISO5259/source/AI 데이터 품질 표준과 페블러스 데이터클리닉.pdf)
