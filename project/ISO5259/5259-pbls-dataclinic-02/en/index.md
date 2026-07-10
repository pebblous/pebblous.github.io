---
title: Does DataClinic Actually Meet ISO 5259? The Quantitative Answer.
subtitle: Quantitative Mapping Analysis with ISO/IEC 5259-2 Quality Measures (QM)
date: November 16, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does DataClinic Actually Meet ISO 5259? The Quantitative Answer.

_Quantitative Mapping Analysis with ISO/IEC 5259-2 Quality Measures (QM)_

## Abstract: The Need for AI Data Quality Management

<!-- stat-card -->
**The performance of AI models directly depends on the quality of training data, and data quality management is no longer optional but a mandatory requirement.
                        This analysis provides an in-depth examination of the technical correlation between international AI data quality standards represented by the **ISO/IEC 5259 series** and **Pebblous DataClinic**.** — **ISO/IEC 5259-2** defines over 60 quantitative Quality Measures (QMs), including 9 additional data quality characteristics essential for analytics and ML beyond traditional quality characteristics.
                        Pebblous DataClinic implements these through **DNN-based DataLens** and **Data Imaging** technologies. — Through this analysis, we demonstrate that DataClinic's diagnostic framework of **Level I (Basic EDA)**, **Level II (General Lens)**, and **Level III (Data-Specific Lens)**
                        comprehensively measures and addresses key QM groups in ISO/IEC 5259-2, including completeness, similarity, representativeness, and diversity.
                        Pebblous's DataLens technique can be interpreted as providing concrete measurement functions for effectively applying the abstract quality characteristics of ISO standards to high-dimensional training data.

## 1Background: The Importance of AI Data Quality

### 1.1. Regulatory Landscape

<!-- stat-card -->
************ — **EU AI Act**: Mandatory data quality for high-risk AI systems — [Official Doc](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)|[Data Governance Commentary](https://artificialintelligenceact.eu/article/10/) — ▸**U.S. EO 14110**: AI safety standards and data governance — [Official Doc](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence)|[2024 Implementation Assessment](https://www.gao.gov/products/gao-24-107332) — ▸**Korea Intelligent Informatization Act**: AI ethics standards and data management — [Official Doc](https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=233999)|[AI Hub Quality Guideline 2025](https://www.aihub.or.kr/aihubnews/qlityguidance/view.do?currMenu=135&topMenu=103&nttSn=10404)

### 1.2. Technical Challenges

| Problem | Definition | Impact (Case) | Response |
| --- | --- | --- | --- |
| Biased Data | Training data skewed toward specific demographics or situations | Generates discriminatory AI outcomes                                     Case | Representativeness, balance verification |
| Incomplete Data | Data with missing or insufficient required classes or attributes | Learning failure for specific classes                                     Case | Completeness measurement and remediation |
| Excessive Similar Data | Excessive inclusion of duplicate or overly similar data samples | Causes overfitting                                     Case | Similarity measurement, Data Diet |

<!-- stat-card -->
******[https://jtip.law.northwestern.edu/2025/01/30/algorithmic-bias-in-ai-employment-decisions/](https://jtip.law.northwestern.edu/2025/01/30/algorithmic-bias-in-ai-employment-decisions/)****[https://www.nature.com/articles/s41586-024-07566-y](https://www.nature.com/articles/s41586-024-07566-y)****[https://link.springer.com/article/10.1007/s10462-024-11040-6](https://link.springer.com/article/10.1007/s10462-024-11040-6)**

<!-- stat-card -->
****Key Message:**
                        AI data quality management is essential technical infrastructure not only for regulatory compliance but also for ensuring model performance, fairness, and reliability.
                        Pebblous DataClinic is an international standards-based solution that addresses these requirements.**

## 2ISO/IEC 5259 Series Overview

<!-- stat-card -->
********

| Part | Title | Content |
| --- | --- | --- |
| Part 1 | Overview, Terminology, and Examples | Defines core concepts including Data Quality Characteristics (DQC), Quality Measures (QM), and assessment methodologies with practical examples |
| Part 2 | Data Quality Measures | Presents 24 DQCs and over 65 quantitative QMs. The core analysis subject of this report |
| Part 3 | Data Quality Management Requirements and Guidelines | Provides requirements and guidelines for establishing, implementing, maintaining, and improving organizational data quality management systems |
| Part 4 | Data Quality Process Framework | Provides an operational process framework to meet the management requirements of Part 3 |
| Part 5 | Data Quality Governance Framework | A governance-level framework for ensuring high-quality data throughout the data lifecycle (published Feb. 2025) |
| Part 6 | Visualization Framework (Technical Report) | Provides methodology for visualizing data quality measurement results (forthcoming) |

<!-- stat-card -->
********************************

### 2.1. AI/ML Data Quality Characteristics: Inherent and Additional

<!-- stat-card -->
************ — ********************[/project/ISO5259/5259-2-cheetsheet-01.html#section-4](/project/ISO5259/5259-2-cheetsheet-01.html#section-4)

| Category | Quality Characteristic | Description | AI/ML Relevance |
| --- | --- | --- | --- |
| Inherent Quality Characteristics(Intrinsic properties of the data) | Accuracy | How closely data values and labels match actual values | Inaccurate labels distort model training |
| Completeness | Whether all required data and labels exist | Missing values are a major cause of model performance degradation |  |
| Consistency | No contradictions between data, and identical labels for similar data | Label inconsistencies cause model confusion |  |
| Credibility | Trustworthiness of data sources and values | Unreliable data reduces trust in AI results |  |
| Currentness | Whether data is within an acceptable time range | Outdated data causes misalignment with current conditions |  |
| Additional Quality Characteristics(AI/ML-specific, 9 total) | Auditability | The degree to which data has been or can be audited | Required for regulatory compliance and data provenance tracking |
| Balance | The degree to which sample distribution across categories is uniform | Imbalanced data produces biased models |  |
| Diversity | The extent to which the dataset covers a wide range of features and values | Lack of diversity creates models that only work in specific situations |  |
| Effectiveness | The degree to which the dataset meets requirements for specific ML tasks | Ineffective data degrades training performance |  |
| Identifiability | The degree to which individuals can be identified through PII | Requires privacy protection and risk management |  |
| Relevance | The degree to which the dataset is suitable for its given context/purpose | Irrelevant data reduces training efficiency |  |
| Representativeness | The degree to which the dataset reflects the target population | Lack of representativeness causes degraded real-world performance |  |
| Similarity | The degree of similarity among samples within the dataset | Excessive similar data causes overfitting |  |
| Timeliness | The delay between event occurrence and data recording | Time delays reduce data reliability and applicability |  |

## 3ISO/IEC 5259-2 Key Quality Measures (QM) Analysis

### 3.1. Completeness QMs

| QM ID | QM Item | Description | AI Model Risk |
| --- | --- | --- | --- |
| Com-ML-1 | Value completeness | Ratio of data items without null values | Training failure due to missing values |
| Com-ML-3 | Feature completeness | Ratio of data items related to specific features without null values | Failure to learn specific characteristics |
| Com-ML-5 | Label completeness | Ratio of samples with missing or incomplete labels | Degraded classification performance for specific classes |

### 3.2. Similarity QMs

| QM ID | QM Item | Description | AI Model Risk |
| --- | --- | --- | --- |
| Sim-ML-1 | Ratio of similar instances in dataset | Measures the proportion of similar samples within the dataset | Causes overfitting |
| Sim-ML-2 | Average intra-class similarity | Average similarity between samples within the same class | Degraded generalization performance |

### 3.3. Representativeness QMs

| QM ID | QM Item | Description | AI Model Risk |
| --- | --- | --- | --- |
| Rep-ML-1 | Target domain coverage | How comprehensively the data covers various real-world application scenarios | Degraded real-world performance |
| Rep-ML-3 | Distribution distance (KL-divergence) | Difference between training data distribution and actual data distribution | Reduced prediction reliability after deployment |

### 3.4. Balance QMs

| QM ID | QM Item | Description | AI Model Risk |
| --- | --- | --- | --- |
| Bal-ML-3 | Balance of images between categories | Degree of balance in sample counts per class | Minority class ignored, biased predictions |
| Bal-ML-2 | Feature balance | Balance of feature distributions within the dataset | Excessive dependence on specific features |

## 4Core Analysis: Quantitative Mapping of DataClinic to ISO/IEC 5259-2

### 4.1. Inherent Quality Characteristics Mapping

| ISO 5259-2 Characteristic | QM ID | DataClinic Measurement | Status |
| --- | --- | --- | --- |
| Completeness | Com-ML-5 | Level I: Missing value measurement, label completeness analysis | Supported |
| Consistency | Con-ML-2 | Level II/III: Label consistency analysis (comparing labels of similar samples) | Supported |
| Accuracy | Acc-ML-7 | Level II/III: Label accuracy verification (anomaly detection) | Supported |

### 4.2. AI/ML Additional Quality Characteristics Mapping (9 Characteristics)

| ISO 5259-2 Characteristic | Representative QM ID | DataClinic/AADS Measurement | Status |
| --- | --- | --- | --- |
| Balance | Bal-ML-3, Bal-ML-8 | Level I: Class distribution analysis, label imbalance measurement | Supported |
| Diversity | Div-ML-1, Div-ML-2 | Level II/III: Intrinsic dimension analysis, feature diversity measurement | Supported |
| Representativeness | Rep-ML-1 | Level II/III: Manifold gap analysis, population coverage measurement | Supported |
| Similarity | Sim-ML-1, Sim-ML-2 | Level II/III: Sample density measurement, duplicate data detection | Supported |
| Relevance | Rel-ML-1, Rel-ML-2 | Level II/III: Contextual relevance analysis (outlier detection) | AADS Expansion |
| Effectiveness | Eft-ML-1, Eft-ML-3 | Level I/II: Valid sample ratio, quality threshold verification | AADS Expansion |
| Auditability | Aud-ML-1, Aud-ML-2 | AADS: Data lineage tracking, quality audit logs | AADS Expansion |
| Identifiability | Idn-ML-1 | AADS: PII detection and anonymization level assessment | Roadmap |
| Timeliness | Tml-ML-1 | AADS: Data freshness measurement, latency analysis | Roadmap |

- **Current DataClinic** can directly measure and improve 3 inherent quality characteristics and 4 out of 9 AI/ML additional characteristics of ISO/IEC 5259-2
- Through the **ongoing 2025 AADS expansion**, 3 additional characteristics including auditability and effectiveness are being added
- The **post-2025 roadmap** includes development of identifiability (PII protection) and timeliness (data freshness) capabilities
- Diagnostic-driven **Data Diet** (duplicate removal) and **Data Bulk-up** (deficient area augmentation) align precisely with quality improvement activities required by the standard

## 5Pebblous DataClinic: Technical Implementation and DNN-Based Approach

### 5.1. 3-Level Diagnostic Framework

| Level | Name | Measurement Capabilities | Corresponding ISO QM |
| --- | --- | --- | --- |
| Level I | Basic EDA | - Missing value analysis                                     - Class distribution                                     - Basic statistics                                     - Outlier detection | Com-ML (Completeness)                                     Bal-ML (Balance) |
| Level II | General Lens | - General-purpose embeddings                                     - Density measurement                                     - Distance distribution analysis                                     - Manifold shape | Sim-ML (Similarity)                                     Rep-ML (Representativeness)                                     Div-ML (Diversity) |
| Level III | Data-Specific Lens | - Custom embeddings                                     - Intrinsic dimension analysis                                     - Precision quality measurement                                     - Domain-specific diagnostics | Sim-ML, Rep-ML, Div-MLPrecision Measurement |

### 5.2. DataLens: DNN-Based Data Analysis

#### Core Functions

- **Data Imaging**: Raw data → Feature vectors → Embedding space
- ▸**Density Measurement**: k-NN distance-based density quantification
- ▸**Manifold Analysis**: Understanding geometric structure of data distributions

#### Measurement Functions

- ▸**Density(x)**: Density around sample x
- ▸**Distance(x, C)**: Minimum distance to class C
- ▸**ManifoldShape(D)**: Manifold shape of dataset D

### 5.3. Data Prescription System

| Prescription | Purpose | Method | Effect |
| --- | --- | --- | --- |
| Data Diet | Resolve excessive Similarity | - Remove duplicate samples                                     - Sampling from dense regions | Reduced overfitting risk |
| Data Bulk-up | Resolve insufficient Representativeness | - Manifold gap augmentation                                     - Adding data to sparse regions | Improved generalization performance |

## 6Case Studies: Applying ISO/IEC 5259-2 with DataClinic

### 6.1. Image Dataset Diagnostics

| Phase | ISO QM | Findings | Prescription & Results |
| --- | --- | --- | --- |
| Issue Found | Sim-ML-1 | Level III density measurement revealed 40% of samples concentrated in specific regions | Data Diet: Removed 25% from dense regions → 30% reduction in training time |
| Issue Found | Rep-ML-1 | Manifold gap analysis discovered 5 sparse regions | Data Bulk-up: Augmented sparse regions by 15% → 7% improvement in test accuracy |

### 6.2. Text Dataset Quality Verification

| Phase | ISO QM | Findings | Prescription & Results |
| --- | --- | --- | --- |
| Issue Found | Com-ML-5 | Level I missing value analysis found 20% missing in a specific class | Auto-labeling: Supplemented missing class → Achieved 95% completeness |
| Issue Found | Bal-ML-3 | Discovered class imbalance ratio of 1:15 | Class Resampling: SMOTE-based synthesis → 18% improvement in F1-score |

## 7Policy Recommendations and Conclusion

### 7.1. Policy Recommendations

#### 1. Accelerate Domestic Adoption of ISO/IEC 5259

#### 2. Foster a Data Quality Verification Tool Ecosystem

#### 3. Integrate Data Quality into AI Governance Frameworks

#### 4. Cultivate Data-Centric AI Talent

### 7.2. Conclusion

## References

### International Standards, Laws & Policies

- ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-1:2024 — Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 1: Overview, terminology, and examples](https://www.iso.org/standard/81088.html).
- 2.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-2:2024 — Part 2: Data quality measures](https://www.iso.org/standard/81653.html).
- 3.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-3:2024 — Part 3: Data quality management requirements and guidelines](https://www.iso.org/standard/81654.html).
- 4.European Parliament. (2024). [Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj).
- 5.The White House. (2023). [Executive Order 14110 on Safe, Secure, and Trustworthy Artificial Intelligence](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/).
- 6.Ministry of Science and ICT, Korea. (2024). AI Ethics Standards and Reliability Assurance Guidelines.
- 7.National Information Society Agency (NIA), Korea. (2023). AI Data Quality Management Guideline v2.0.

### Academic Papers

- 8.Sambasivan, N., et al. (2021). "Everyone wants to do the model work, not the data work": Data Cascades in High-Stakes AI. _CHI 2021_. [doi.org/10.1145/3411764.3445518](https://dl.acm.org/doi/10.1145/3411764.3445518)
- 9.Gebru, T., et al. (2021). Datasheets for Datasets. _Communications of the ACM_, 64(12), 86–92. [arXiv:1803.09010](https://arxiv.org/abs/1803.09010)
- 10.Mitchell, M., et al. (2019). Model Cards for Model Reporting. _FAT* 2019_. [arXiv:1810.03677](https://arxiv.org/abs/1810.03677)
