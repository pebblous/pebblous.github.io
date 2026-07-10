---
title: LLM Bias Starts with Low-Quality Text Datasets
subtitle: A Measurement Guide Based on ISO 5259
date: October 23, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLM Bias Starts with Low-Quality Text Datasets

_A Measurement Guide Based on ISO 5259_

<!-- stat-card -->
****Summary:** When an LLM keeps hallucinating, showing bias, or failing to generalize, the root cause is often upstream — in the training data, not the model. ISO/IEC 5259 is the international standard that puts numbers on data quality and gives you a systematic path to improvement. This post walks you through the eight core quality criteria for text data and shows how they play out in practice.**

## Why LLM Data Quality Needs Its Own International Standard

When an LLM gives a wrong answer, we blame the model. Most of the time, the real problem sits upstream — in the training data. Previous standards like [ISO/IEC 25012](https://www.iso.org/standard/35736.html) looked at quality from the data producer's point of view. [ISO/IEC 5259](https://www.iso.org/standard/81088.html) flips the lens: **it defines quality from the perspective of the people who actually consume data to train AI models**.

Text data quality directly governs an LLM's **bias**, **generalization**, and **explainability**. That's the gap this standard fills.

Below is the framework ISO/IEC 5259 provides for assessing and managing LLM training datasets. Later in this post, you'll see how Pebblous DataClinic puts these criteria to work automatically.

| Standard Component | Core Functions and Roles |
| --- | --- |
| Part 1 (Overview, Terminology) | Presents the data quality conceptual framework and Data Life Cycle (DLC) model. |
| Part 2 (Measurement) | Defines AI/ML-specific data quality characteristics and Quality Measures. |
| Part 3 (Management Requirements) | Defines the Data Quality Management Life Cycle (DQMLC) and organizational requirements. |
| Part 4 (Process Framework) | Presents a cyclical process (DQPF: Plan-Assess-Improve-Verify) for executing quality activities. |
| Part 5 (Governance Framework) | Presents top-level decision-making systems and accountability measures for organizations. |

<!-- stat-card -->
************************

### 1.1. ISO/IEC 5259-2 Data Quality Measurement Items (LLM-Neutral)

ISO/IEC 5259-2 defines 24 Data Quality Characteristics for measuring AI/ML data quality. These characteristics are categorized into inherent properties, system-dependent properties, and additional characteristics, and serve as **LLM-neutral** assessment criteria applicable to all types of AI/ML data (text, image, tabular, etc.).

| Category | Quality Characteristic | Description |
| --- | --- | --- |
| Inherent | Accuracy | The degree to which data values correctly represent actual values |
| Completeness | The degree to which required data exists without omission |  |
| Consistency | The degree to which data is consistent and free of contradictions |  |
| Credibility | The degree to which data is considered trustworthy |  |
| Currentness | The degree to which data is from an appropriate time period for its purpose |  |
| Inherent &System-Dependent | Accessibility | The degree to which data can be accessed |
| Compliance | The degree to which data adheres to regulations, standards, and rules |  |
| Efficiency | The degree to which data can be processed with appropriate resources |  |
| Precision | The degree to which data is exact or discriminable |  |
| Traceability | The degree to which audit trails for data access and changes are available |  |
| Understandability | The degree to which users can read and interpret data |  |
| Confidentiality | The degree to which data is accessible only to authorized users (ISO/IEC 25012) |  |
| System-Dependent | Availability | The degree to which datasets can be retrieved |
| Portability | The degree to which data can be moved between systems while maintaining quality |  |
| Recoverability | The degree to which data can be maintained and recovered in case of failure |  |
| Additional(AI/ML Specific) | Auditability | The degree to which data has been audited or is auditable |
| Balance | The degree to which sample distribution across categories is uniform |  |
| Diversity | The degree to which a dataset contains a diverse range of features and values |  |
| Effectiveness | The degree to which a dataset meets the requirements of a specific ML task |  |
| Identifiability | The degree to which individuals can be identified through PII |  |
| Relevance | The degree to which a dataset is appropriate for a given context |  |
| Representativeness | The degree to which a dataset reflects the target population |  |
| Similarity | The degree of similarity between samples within a dataset |  |
| Timeliness | The delay between phenomenon occurrence and data recording |  |

## Quantifying Quality: The Eight Metrics That Matter

### 2.1. Essential Quality Characteristics for LLM Text Data (DQC)

| Quality Characteristic | Meaning and Application in LLM Data | Measurement Metric Examples (ISO/IEC 5259-2 QM) |
| --- | --- | --- |
| Accuracy | The degree to which data values (tokens, named entities) correctly represent real-world facts. In particular, data label accuracy for labeled text data is critical. | Semantic data accuracy, Data label accuracy (Acc-ML-7: number of labels providing appropriate information / total labels defined in the dataset). |
| Completeness | The degree to which essential information (entities, context) exists without omission. In particular, label completeness (whether labels are missing) is critical. | Value completeness (Com-ML-1). Label completeness (Com-ML-5: proportion of samples with missing or incomplete labels). |
| Consistency | Whether data is free of contradictions and identical labels are consistently assigned to similar data items (e.g., terminology uniformity in technical documents). | Data label consistency (Con-ML-2: number of similar item pairs with identical labels / total similar item pair comparisons), Data record consistency (duplicate record ratio). |
| Balance | How uniformly samples are distributed across categories (classes) within a dataset. This is critical for diagnosing LLM fairness and bias issues. | Label proportion balance (Bal-ML-7: difference in specific label value proportions between two categories), Label distribution balance (Bal-ML-8: divergence between label distribution and uniform label distribution). |
| Representativeness | How well a dataset reflects the target population (e.g., prompt distribution in operational environments). | Representativeness ratio (Rep-ML-1: number of target attributes in the dataset / number of relevant attributes in a specific context). |
| Diversity | How broad a range of features and values the dataset samples contain. Lack of diversity increases overfitting risk. | Label richness (Div-ML-1: number of unique labels in the dataset / total data items). |
| Relevance | How suitable the dataset's features are for solving a given AI task. Unnecessary features increase model complexity. | Feature relevance (Rel-ML-1: number of relevant features / total features in the dataset). |
| Auditability | Whether data is prepared to be reviewable for auditing or regulatory compliance. | Audited records (Aud-ML-1: number of audited records / total records). |

### 2.2. Quantitative Metric Application Example: Text Summarization (Completeness)

- **Background:** ROUGE (Recall-Oriented Understudy for Gisting Evaluation) evaluates how similar a machine-generated summary is to a human-written reference summary.
- **Measurement:** ROUGE-L Recall measures how completely the key information from the reference summary (based on the Longest Common Subsequence) is included in the generated summary without omission, which directly connects to the concept of completeness in evaluating information gaps.
- **Assessment Application:** By comparing the reference summaries (Ground Truth) in the training dataset with model-generated summaries, one can indirectly verify whether the dataset itself provides complete information to the model.

## From Diagnosis to Improvement: The Feedback Loop

### 3.1. Quality Management Along the Data Life Cycle (DLC)

1. **Data requirements:** Define data characteristics needed for LLM projects (e.g., science and technology QA LLM), required data volume, acceptable bias levels, and set relevant DQC targets.
2. **Data planning:** Design resources, timelines, and architecture (data models) for data acquisition and preparation, and establish DQ measurement execution plans.
3. **Data acquisition:** Collect text data according to plans, considering data provenance, bias, and reliability.
4. **Data preparation:** **The critical stage where substantial quality assessment and improvement activities are performed.** Data cleaning, transformation, labeling/annotation, and **data quality assessment** occur at this stage.
5. **Data provisioning:** Apply prepared data to LLM training and evaluation, and provide feedback to previous stages (preparation/acquisition) to improve data quality based on model performance evaluation results.
6. **Data decommissioning:** Manage archiving, transfer, or disposal of data no longer in use, and verify PII (Personally Identifiable Information) handling and regulatory compliance.

### 3.2. Data Quality Improvement Activities (ISO/IEC 5259-4)

- **Data Cleaning:** Remove or correct incomplete, inaccurate, or irrelevant text data. This includes removing duplicate records from combined datasets or correcting improperly formatted text data items.
- **Text data augmentation methods:** Synonym replacement, entity replacement, back translation, disrupting sentence order, or generating sentences using generative models.

- **Data Imputation:** Fill missing values (null data items) in text data with appropriate values using statistical methods (mean, median, mode) or iterative multivariate imputation (Iterative Imputer).
- **Data De-identification:** When training data contains PII (e.g., names, IP addresses), apply anonymization, pseudonymization, or aggregation methods to protect data subjects' privacy.

## AADS in Action: What Automated Quality Management Looks Like

### 4.1. Project Goals and Assessment Items

| Assessment Item | LLM Text Data Goals | Assessment Method and Standard Basis |
| --- | --- | --- |
| Multimodal Data Quality Index (QI) | Achieve comprehensive score targets integrating text/image/table (e.g., Phase 1: 88, Final: 95). | Measure text and multimodal quality scores based on ISO/IEC 25012 data quality characteristics, applying weights to convert to a single comprehensive score (QI). |
| Quality Diagnosis Text LLM Accuracy | Verify performance of LLM specialized for data quality diagnosis (KONI-4B based AADS-LLM) (Target accuracy: 95%). | Measure API accuracy using proprietary standard API test sets and referencing the AgentBench evaluation framework. |
| Autonomous Agent Task Success Rate | Measure how autonomously agents complete complex data management tasks (quality diagnosis, improvement, governance). | Develop a proprietary standard Task Suite (AADS-DQ-Bench) referencing AgentBench to verify autonomous execution success rate. |

### 4.2. ISO/IEC 5259 Process Application Scenario

1. **Planning and requirements definition:** AADS defines AI-specific metrics from ISO/IEC 5259-2 such as **Balance, Representativeness, and Diversity** as core diagnostic functions based on AI project requirements (e.g., robot/manufacturing/public domain-specific LLM) and sets target QI.
2. **Assessment and diagnosis:** The developed text quality diagnosis LLM (AADS-LLM) analyzes text training datasets and measures ISO/IEC 5259-2-based quality indicators (QI). In particular, it identifies issues such as dataset bias, lack of representativeness, and data drift potential through **quantitative metrics and visualization**.
3. **Improvement activity automation:** When quality issues are discovered through assessment, AADS autonomously performs improvement activities specified in **ISO/IEC 5259-4**, including data cleaning, data augmentation, and imputation. For example, it can automatically recommend specific strategies such as data augmentation or resampling to resolve imbalance issues.
4. **Governance and reporting:** AADS automatically records logs, decision-making processes, and final results of all data quality activities, internalizes the governance framework of **ISO/IEC 5259-5**, and generates **audit-ready compliance reports**. This ensures AI model transparency and accountability.

### 4.3. Quantifying LLM Training Dataset Quality: QI Index

- **Weight setting example:** For robot work instruction text data, higher weights can be assigned to command **Consistency** and **Completeness** (e.g., $w_{\text{consistency}}=0.4$, $w_{\text{completeness}}=0.3$).

## Proving Data Trust in the Age of AI Regulation

### 5.1. Governance Framework (ISO/IEC 5259-5)

- **Role of the Governing Body:** Establish data quality strategy, direct and oversee alignment of organizational business objectives (ML-supported business objectives) with data quality objectives.
- **Role of Management:** Implement data quality strategy, establish and enforce comprehensive data quality policies, implement data quality management processes (ISO/IEC 5259-3), and build risk management systems.

### 5.2. Regulatory Compliance and Auditability

- **Ensuring Auditability:** ISO/IEC 5259-2 defines Auditability and Traceability as important quality characteristics. This requires maintaining records of where LLM data came from and how it was processed (Data provenance).
- **Automated Reporting:** As demonstrated in the AADS case, the ability to automatically generate evidence materials (logs, reports) for key control items of **ISO 42001 (AI Management System International Standard)** is a core element providing 'trust' and 'accountability' to enterprise customers in heavily regulated industries (finance, healthcare).
