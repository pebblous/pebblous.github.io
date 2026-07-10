---
title: 15 AI Data Quality Metrics You Need to Know
subtitle: Data Quality Measures (QM) Cheat Sheet
date: September 12, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 15 AI Data Quality Metrics You Need to Know

_Data Quality Measures (QM) Cheat Sheet_

## Introduction: Understanding the AI Data Quality Standard

<!-- stat-card -->
**It is no exaggeration to say that the success of artificial intelligence (AI) and machine learning (ML) projects depends entirely on data quality. **Data is the essential raw material for analytics and machine learning**, and data quality issues can directly lead to degraded model performance, biased results, and serious malfunctions. To systematically manage and address these issues, the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) established the **ISO/IEC 5259 series**, an international standard framework for evaluating and improving AI data quality.** — The ISO/IEC 5259 series builds upon ISO/IEC 25012 and ISO/IEC 25024, which provide frameworks for specifying and evaluating data quality requirements. Here, **ISO/IEC 25012 is a foundational standard that defines the traditional quality model for data within computer systems**, while the **ISO/IEC 5259 series extends this foundation by additionally defining data quality characteristics essential** for modern AI and ML contexts (e.g., diversity, representativeness, similarity). — This cheat sheet aims to provide a **quick and easy reference (Quick Access) to the Data Quality Measures (QMs) specified in ISO/IEC 5259-2**, one of the key documents in this standard. It clearly categorizes dozens of complex quality measures into four major characteristic groups, helping practitioners define data quality requirements for AI projects, diagnose the current state of datasets, and set improvement directions. — Furthermore, you can confirm that **most of the quality measurement methods used by Pebblous Data Clinic, an AI training data quality assessment solution, correspond to these ISO/IEC 5259-2 quality measures**. Pebblous Data Clinic **leverages DataLens and Data Imaging technology** to transform AI training data into **feature vectors in embedding space**, analyzing data in **observable and measurable** forms. In particular, the Level II/III diagnostics performed through this technology are **powerfully aligned with the Fidelity-related characteristics** (similarity, diversity, representativeness, balance) that the standard additionally requires for ML datasets, enabling **quantitative and visual diagnosis**.

## 1Inherent Data Quality Characteristics

### 1.1. Strategic Importance

<!-- stat-card -->
****************

### 1.2. Quality Measures List

| Sub-category | QM ID | QM Item | QM Description |
| --- | --- | --- | --- |
| Accuracy | Acc-ML-1 | Syntactic data accuracy | Measures how close data values are to a syntactically correct set of data values. |
| Acc-ML-2 | Semantic data accuracy | Measures how close data values are to a semantically correct set of data values. |  |
| Acc-ML-3 | Data accuracy assurance | Measures the degree to which data is assured to be accurate. |  |
| Acc-ML-4 | Risk of dataset inaccuracy | Measures the potential risk arising from inaccuracies in the dataset. |  |
| Acc-ML-5 | Data model accuracy | Measures how accurately the data model represents the actual characteristics of the data. |  |
| Acc-ML-6 | Data accuracy range | Measures the allowable range of accuracy for data values. |  |
| Acc-ML-7 | Data label accuracy | Measures whether labels are accurately assigned to each element in the dataset. |  |
| Completeness | Com-ML-1 | Value completeness | Measures the ratio of data items without null values to the total number of data items. |
| Com-ML-2 | Value occurrence completeness | Measures the ratio between the actual occurrence count of a given data value and the expected occurrence count specified in quality requirements. |  |
| Com-ML-3 | Feature completeness | Measures the ratio of data items without null values among those related to a specific feature. |  |
| Com-ML-4 | Record completeness | Measures the ratio of non-empty data records to the total number of data records. |  |
| Com-ML-5 | Label completeness | Measures the ratio of samples with missing or incompletely assigned labels in the dataset. |  |
| Consistency | Con-ML-1 | Data record consistency | Measures the ratio of duplicate data records in the dataset. |
| Con-ML-2 | Data label consistency | Measures the degree to which the same label is assigned to similar data items. |  |
| Con-ML-3 | Data format consistency | Measures the degree to which data items meet data format consistency requirements. |  |
| Con-ML-4 | Semantic consistency | Measures the degree to which data items meet semantic consistency requirements. |  |
| Credibility | Cre-ML-1 | Values credibility | Measures the credibility of data values. |
| Cre-ML-2 | Source credibility | Measures the credibility of data sources. |  |
| Cre-ML-3 | Data dictionary credibility | Measures the credibility of the data dictionary. |  |
| Cre-ML-4 | Data model credibility | Measures the credibility of the data model. |  |
| Currentness | Cur-ML-1 | Feature currentness | Measures the ratio of data items within the acceptable date range for a feature. |
| Cur-ML-2 | Record currentness | Measures the ratio of records in which all data items fall within the required age range. |  |

<!-- stat-card -->
************************

## 2Inherent and System-dependent Data Quality Characteristics

### 2.1. Strategic Importance

<!-- stat-card -->
****************

### 2.2. Quality Measures List

| Sub-category | QM ID | QM Item | QM Description |
| --- | --- | --- | --- |
| Accessibility | Acs-ML-1 | User accessibility | Measures the ratio of authorized users who can access the required data. |
| Acs-ML-2 | Data format accessibility | Measures the degree to which data is accessible using standard or open data formats. |  |
| Acs-ML-3 | Data accessibility | Measures the ratio of accessible records in the dataset. |  |
| Compliance | Cmp-ML-1 | Data item compliance | Measures the degree to which data items meet compliance requirements such as laws, standards, and rules. |
| Efficiency | Eff-ML-1 | Data format efficiency | Measures the storage and transmission efficiency of the format used to represent data. |
| Eff-ML-2 | Data processing efficiency | Measures the efficiency of time and resources (CPU, memory) consumed in processing data. |  |
| Eff-ML-3 | Risk of wasted space | Measures the degree of risk of unnecessarily wasted storage space during data storage. |  |
| Precision | Pre-ML-1 | Precision of data values | Measures how finely data values represent actual values (significant digits). |
| Traceability | Tra-ML-1 | Traceability of data values | Measures the degree to which the origin, change history, and creation process of data values can be traced. |
| Tra-ML-2 | User access traceability | Measures the degree to which user data access, modification, and deletion records can be audit-traced. |  |
| Tra-ML-3 | Data values traceability | Measures the degree to which the entire history from creation to the present can be traced for data values. |  |
| Understandability | Und-ML-1 | Symbols understandability | Measures the degree to which data symbols, abbreviations, and codes can be easily understood by users. |
| Und-ML-2 | Semantic understandability | Measures the degree to which users can clearly understand the meaning and context of data. |  |
| Und-ML-3 | Data values understandability | Measures the degree to which users can interpret and understand data values themselves. |  |
| Und-ML-4 | Data representation understandability | Measures the degree to which users can understand how data is represented (charts, graphs, tables, etc.). |  |

<!-- stat-card -->
****************************

## 3System-dependent Data Quality Characteristics

### 3.1. Strategic Importance

<!-- stat-card -->
****************

### 3.2. Quality Measures List

| Sub-category | QM ID | QM Item | QM Description |
| --- | --- | --- | --- |
| Availability | Ava-ML-1 | Data availability ratio | Measures the ratio of time (uptime) during which data is available when needed. |
| Portability | Por-ML-1 | Data portability ratio | Measures the degree to which data can be successfully ported to other systems or environments. |
| Por-ML-2 | Prospective data portability | Measures expected compatibility and ease of porting when migrating to other systems in the future. |  |
| Recoverability | Rec-ML-1 | Data recoverability ratio | Measures the ratio of data that can be recovered in the event of a failure or disaster. |
| Rec-ML-2 | Feature recoverability ratio | Measures the degree to which dataset features transmitted incrementally can be recovered. |  |

<!-- stat-card -->
****************

## 4Additional Data Quality Characteristics for Analytics and ML

### 4.1. Strategic Importance

<!-- stat-card -->
****************************

### 4.2. Quality Measures List

| Sub-category | QM ID | QM Item | QM Description |
| --- | --- | --- | --- |
| Auditability | Aud-ML-1 | Audited records | Measures the ratio of records in the dataset that have undergone an audit. |
| Aud-ML-2 | Auditable records | Measures the ratio of records in the dataset that are available for auditing. |  |
| Balance | Bal-ML-1 | Brightness balance | Measures the inverse of the maximum brightness difference relative to the average brightness of image samples. |
| Bal-ML-2 | Resolution balance | Measures the inverse of the maximum resolution difference relative to the average resolution of image samples. |  |
| Bal-ML-3 | Balance of images between categories | Measures the inverse of the maximum category size difference relative to the average category size (number of samples) of the dataset. |  |
| Bal-ML-4 | Bounding box height to width ratio balance | Measures the inverse of the maximum difference relative to the average bounding box aspect ratio in the dataset. |  |
| Bal-ML-5 | Category bounding box area balance | Measures the inverse of the maximum difference between category-level average bounding box area and the overall average bounding box area across all samples. |  |
| Bal-ML-6 | Sample bounding box area balance | Measures the inverse of the maximum difference between sample-level bounding box area and the overall average bounding box area across all samples. |  |
| Bal-ML-7 | Label proportion balance | Measures the difference in data item ratios between two categories with a specific label value. |  |
| Bal-ML-8 | Label distribution balance | Measures the divergence between the label distribution and a uniform label distribution. |  |
| Diversity | Div-ML-1 | Label richness | Measures the ratio of distinct labels in the dataset. |
| Div-ML-2 | Relative label abundance | Measures the ratio of individual data (items, records, frames) with a specific label in the dataset. |  |
| Div-ML-3 | Category size diversity | Measures the ratio of categories with fewer categorized data items than the threshold defined in quality requirements. |  |
| Effectiveness | Eft-ML-1 | Feature effectiveness | Measures the ratio of samples with acceptable features in the dataset. |
| Eft-ML-2 | Category size effectiveness | Measures the ratio of categories with fewer categorized samples than the threshold. |  |
| Eft-ML-3 | Label effectiveness | Measures the ratio of samples with acceptable labels in the dataset. |  |
| Identifiability | Idn-ML-1 | Identifiability ratio | Measures the ratio of data records in the dataset that could be used for identifiability (PII). |
| Relevance | Rel-ML-1 | Feature relevance | Measures the ratio of features in the dataset that are relevant to the given context. |
| Rel-ML-2 | Record relevance | Measures the ratio of records in the dataset that are relevant to the given context. |  |
| Representativeness | Rep-ML-1 | Representativeness ratio | Measures the ratio of relevant attributes found in the dataset relative to the relevant attributes of the Target Population. |
| Similarity | Sim-ML-1 | Sample similarity | Measures the ratio of similar samples in the dataset using the number of clusters derived from clustering algorithms. |
| Sim-ML-2 | Samples tightness | Measures the difference between the maximum and minimum eigenvalues of the normalized dataset (geometrically measuring dataset tightness). |  |
| Sim-ML-3 | Samples independency | Measures the dimensionality reduction potential (sample independence) of the dataset using PCA (Principal Component Analysis). |  |
| Timeliness | Tml-ML-1 | Timeliness of data items | Measures the ratio of data items that meet timeliness requirements. |

<!-- stat-card -->
****************************************

### 4.3. Deeper Understanding of Additional Quality Characteristics

<!-- stat-card -->
************

#### 4.3.1. Data Producer Perspective vs. Data Consumer Perspective. ****

| Criterion | Traditional Standards (ISO/IEC 25012, etc.) | ISO/IEC 5259 AI/ML Characteristics |
| --- | --- | --- |
| Primary perspective | Data production and management perspective | Data consumer (AI/ML user) perspective |
| Measurement focus | Inherent properties of the data itself (accuracy, consistency, etc.) | Whether specific AI project requirements are met |
| Context dependency | Context-independent measurement possible | Usage context specification required |
| Evaluation criteria | Compliance with data production standards | Contribution to AI model performance and analysis result quality |

<!-- stat-card -->
****************************

<!-- stat-card -->
****************

#### 4.3.2. The Need for User-Perspective (Context)-Dependent Measurement. ****

<!-- stat-card -->
******** — ******** — ********

#### 4.3.3. Context-Dependent Examples of Additional Quality Characteristics. ****

| Quality Characteristic | QM Example | Context Dependency Explanation |
| --- | --- | --- |
| Representativeness | Rep-ML-1(Representativeness ratio) | Measures how well the dataset reflects relevant attributes of the 'Target Population'.                                     Since the target population is the subject the AI project aims to make inferences about,                                     measurement is impossible without the user's clear objectives. |
| Relevance | Rel-ML-1/2(Feature/Record relevance) | Measures the ratio of features or records relevant to a 'given context'.                                     Example: Judging the relevance of height and weight features in a credit scoring model depends on the model's purpose. |
| Effectiveness | Eft-ML-1/2(Accuracy/Recall-based) | Measures whether the dataset meets requirements for 'use in a specific ML task'.                                     The same data may have different effectiveness depending on the task type (classification/regression/clustering). |
| Balance | Bal-ML-3/8(Class balance) | Measures the degree to which sample distributions across categories are even,                                     but the tolerable level of imbalance depends on the model's training strategy (oversampling, weight adjustment, etc.). |

## 5[Application] Practical Measurement Methodology for ISO 5259-2 QMs: Pebblous Data Clinic Case

### 5.1. Strategic Importance

### 5.2. Analysis of QM Correspondence by Diagnostic Level

#### 1. Level I (Basic Quality) Diagnostics and Inherent Characteristics

- ********************
- ****************
- ****************
- ********

#### 2. Level II/III (Advanced Quality) Diagnostics and Additional Characteristics

- ********************
- ****************************
- ********

### 5.3. Concluding Insights

## References

1. [https://www.iso.org/standard/81087.html](https://www.iso.org/standard/81087.html)
2. [https://www.iso.org/standard/81088.html](https://www.iso.org/standard/81088.html)
3. [https://www.iso.org/standard/35736.html](https://www.iso.org/standard/35736.html)
4. [https://www.iso.org/standard/35749.html](https://www.iso.org/standard/35749.html)
5. [https://pebblous.ai](https://pebblous.ai)
6. [https://dataclinic.ai](https://dataclinic.ai)

## Related Materials

### ISO/IEC 5259-2 Data Quality Standard Summary Table

### ISO/IEC 5259-2 Data Quality Measures (QM) Cheat Sheet
