---
title: Image Dataset Quality Has Two Layers
subtitle: ISO/IEC 5259 Image Dataset Quality Evaluation Guide — Part 1: Theory
date: 2026-04-04
category: project
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Image Dataset Quality Has Two Layers

_ISO/IEC 5259 Image Dataset Quality Evaluation Guide — Part 1: Theory_

> [!callout]
> Image dataset quality divides into two distinct layers: the **'pixel level'** and the **'task level'**. ISO/IEC 5259-2 addresses both layers through a framework of 23 top-level QM categories. This guide maps every applicable QM item to image datasets and provides measurement methods alongside DataClinic automation support levels for each.

> Image datasets fall into three types — pure images, classification/detection annotations, and image-text pairs — and the relevant QM items differ by type. Common QMs cover pixel-level fundamentals such as file integrity, deduplication, and brightness/resolution distributions. Type-specific QMs measure task-oriented quality like label accuracy, bounding box IoU, and CLIP similarity.

> This guide provides a five-step evaluation workflow with Pass/Warn/Fail decision criteria, and clearly distinguishes items that DataClinic measures automatically from those requiring external tools. Practitioners can use this matrix to build a quality evaluation plan tailored to their dataset type.

## 1. Why Image Datasets Need Their Own Quality Standards

Image data carries fundamentally different quality problems from text. Pixel-level quality (brightness, resolution, corruption) and annotation quality (label accuracy, bounding box IoU) require completely separate measurement systems. In text, "consistency" means uniform vocabulary; in images, "consistency" means uniformity across RGB channel distributions or the absence of duplicate frames. Even the same ISO 5259 QM item demands a different measurement approach depending on the data type.

### Failure cases: numbers alone cannot guarantee quality

**ImageNet — 1,431,167 images**: The per-class image count ranged from 700 to 1,300, so the numbers looked balanced. Yet 120 dog breeds accounted for 12% of the entire dataset — a semantic imbalance that caused models trained on it to overfit dog breed classification and exhibit serious bias in real-world deployments.

**WikiArt — 81,444 images**: DataClinic reported "RGB consistent," yet the actual Red channel followed a bimodal distribution. The warm reds of Impressionist paintings and the dark tones of Classicist works formed two separate peaks. Automated diagnosis alone could not catch domain-specific patterns like this.

The conclusion is clear: **separating pixel-level diagnosis from task-level diagnosis is not optional — conflating them leads to failure.**

### The framework ISO 5259-2 provides for images

ISO/IEC 5259-2 structures image dataset quality across three layers.

- **Common quality characteristics** (Accuracy, Completeness, Consistency, Credibility, Currentness, etc.) — fundamental quality independent of data type. Measures whether files open, whether duplicates exist, and whether metadata is complete.
- **AI/ML additional quality characteristics** (Balance, Diversity, Effectiveness, Similarity, Representativeness) — distributional quality specific to image ML. Measures class balance, representativeness within feature space, and sample independence.
- **Task-specific extensions** — measures label and annotation quality matched to the task type, such as IoU for detection datasets and CLIP similarity for VLP datasets.

## 2. Three Types of Image Datasets

Applying the same QMs to every image dataset is inefficient. Classifying datasets into three types based on the presence and form of annotations lets you set the right QM priorities for each.

### Type A Pure Images (no annotations)

### Type B Classification / Detection / Segmentation Annotations

### Type C Image-Text Pairs (VLP / CLIP / Captioning)

### QM priorities by dataset type

| QM Item | Type A | Type B | Type C |
| --- | --- | --- | --- |
| Com-ML-1 File integrity | Required | Required | Required |
| Con-ML-1 Deduplication | Required | Required | Required |
| Cre-ML-1 Pixel quality | Required | Recommended | Recommended |
| Bal-ML-1 Brightness balance | Recommended | Recommended | Recommended |
| Bal-ML-2 Resolution balance | Recommended | Recommended | Recommended |
| Sim-ML-1/2/3 Similarity / independence | Required | Recommended | Recommended |
| Rep-ML-1 Representativeness | Required | Required | Required |
| Acc-ML-7 Label accuracy | — | Required | Recommended |
| Bal-ML-3 Class balance | — | Required | Recommended |
| Acc-ML-6 IoU | — | Required (detection) | — |
| Bal-ML-4/5/6 Bbox balance | — | Required (detection) | — |
| Acc-ML-2 CLIP similarity | — | — | Required |
| Acc-ML-4 RPN risk | Recommended | Required | Recommended |

## 3. Intrinsic Image Quality (Pixel-Level Layer)

### 3.1. Completeness

#### Com-ML-1 Value Completeness — File Integrity ✅ Auto (L1)

#### Com-ML-2 Value Occurrence Completeness — Object Presence Check ❌ External Tool

#### Com-ML-3 Feature Completeness — Annotation Completeness ❌ External Tool

#### Com-ML-4 Record Completeness — Metadata Completeness ⚠️ Partial

#### Com-ML-5 Label Completeness — Label Coverage ✅ Auto (L1)

### 3.2. Consistency

#### Con-ML-1 Data Record Consistency — Duplicate Images ✅ Auto (L1)

#### Con-ML-2 Data Label Consistency — Label-Image Consistency ⚠️ L2/L3

#### Con-ML-3 Data Format Consistency — Format Consistency ✅ Auto (L1)

#### Con-ML-4 Semantic Consistency — Semantic Anomaly Detection ❌ External Tool

### 3.3. Credibility

#### Cre-ML-1 Values Credibility — Pixel Quality ⚠️ Partial (L1)

#### Cre-ML-2 Source Credibility — Data Provenance 〰️ Manual

#### Cre-ML-3 Data Dictionary Credibility — Schema Alignment 〰️ Manual

#### Cre-ML-4 Data Model Credibility — Standard Schema Compliance ❌ External Tool

### 3.4. Accuracy — Common Items

#### Acc-ML-3 Data Accuracy Assurance — Quality Assurance 〰️ Manual

#### Acc-ML-4 Risk of Dataset Inaccuracy — Inaccuracy Risk (RPN) ⚠️ L2/L3

#### Acc-ML-5 Data Model Accuracy — Ontology Alignment ❌ External Tool

### 3.5. AI/ML Distributional Quality

#### Balance — Common

#### Similarity

#### Representativeness

#### Effectiveness

### 3.6. Governance Quality

| QM Item | Description | DataClinic |
| --- | --- | --- |
| Idn-ML-1 | Identifiability: proportion of images containing PII (faces, license plates) | ❌ |
| Tra-ML-1~3 | Traceability: records of image collection routes and processing history | ❌ |
| Aud-ML-1~2 | Auditability: quality inspection records and audit trail availability | ❌ |
| Acs-ML-1~3 | Accessibility: data access permission management | ❌ |
| Cmp-ML-1 | Compliance: copyright, privacy law, and license adherence | ❌ |
| Eff-ML-1~3 | Efficiency: file size optimization, format efficiency | ⚠️ |
| Cur-ML-1~2 | Currentness: timeliness of data collection | ❌ |

## 4. Task-Oriented Quality (Task-Level Layer)

### 4.1. Classification Datasets

#### Acc-ML-7 Label Accuracy ✅ L2/L3

#### Bal-ML-3 Inter-Class Balance ✅ L1

#### Diversity — Div-ML-1/2/3 ✅ L1

#### Label distribution — Bal-ML-7/8 ❌ External Tool

### 4.2. Object Detection Datasets

#### Acc-ML-6 Bounding Box Accuracy (IoU) ❌ External Tool

#### Bounding Box Balance — Bal-ML-4/5/6 ❌ External Tool

### 4.3. Image-Text Pairs (VLP / CLIP)

#### Acc-ML-1 Syntactic Accuracy — Caption Grammar Accuracy ❌ External Tool

#### Acc-ML-2 Semantic Accuracy — CLIP Semantic Alignment ✅ L3

#### Con-ML-2 Label-Image Consistency ⚠️ Partial

## 5. QM Evaluation Workflow

### Step 1: Classify the dataset type

### Step 2: Measure common QMs (automatable)

### Step 3: Measure ML-specific distributional quality

### Step 4: Measure type-specific task quality

### Step 5: Pass / Fail / Warn determination

### Example decision criteria

| QM Item | Pass | Warn | Fail |
| --- | --- | --- | --- |
| Com-ML-1 | ≥ 99% | 97–99% | < 97% |
| Con-ML-1 | < 1% duplicates | 1–3% | > 3% |
| Bal-ML-3 | ≤ 5:1 | 5–20:1 | > 20:1 |
| Acc-ML-6 | IoU ≥ 0.75 | 0.5–0.75 | < 0.5 |
| Acc-ML-2 | CLIP ≥ 0.30 | 0.25–0.30 | < 0.25 |

## 6. Complete QM Matrix

| QM Code | QM Item | A | B | C | DataClinic |
| --- | --- | --- | --- | --- | --- |
| Com-ML-1 | File integrity | Required | Required | Required | ✅ L1 |
| Com-ML-2 | Object presence check | - | Recommended | Recommended | ❌ |
| Com-ML-3 | Annotation completeness | - | Recommended | - | ❌ |
| Com-ML-4 | Metadata completeness | Recommended | Recommended | Recommended | ⚠️ |
| Com-ML-5 | Label completeness | - | Required | Recommended | ✅ L1 |
| Con-ML-1 | Deduplication | Required | Required | Required | ✅ L1 |
| Con-ML-2 | Label consistency | - | Recommended | Recommended | ⚠️ L2/L3 |
| Con-ML-3 | Format consistency | Required | Required | Required | ✅ L1 |
| Con-ML-4 | Semantic anomaly detection | Recommended | Recommended | Recommended | ❌ |
| Cre-ML-1 | Pixel quality | Required | Recommended | Recommended | ⚠️ L1 |
| Cre-ML-2 | Source credibility | Recommended | Recommended | Recommended | 〰️ |
| Cre-ML-3 | Schema alignment | Recommended | Recommended | Recommended | 〰️ |
| Cre-ML-4 | Standard schema compliance | - | Recommended | Recommended | ❌ |
| Acc-ML-1 | Syntactic accuracy | - | - | Recommended | ❌ |
| Acc-ML-2 | Semantic accuracy (CLIP) | - | - | Required | ✅ L3 |
| Acc-ML-3 | Quality assurance | Recommended | Recommended | Recommended | 〰️ |
| Acc-ML-4 | Inaccuracy risk (RPN) | Recommended | Required | Recommended | ⚠️ L2/L3 |
| Acc-ML-5 | Ontology alignment | - | Recommended | - | ❌ |
| Acc-ML-6 | Bbox IoU accuracy | - | Required (detection) | - | ❌ |
| Acc-ML-7 | Label accuracy | - | Required | Recommended | ✅ L2/L3 |
| Bal-ML-1 | Brightness balance | Recommended | Recommended | Recommended | ✅ L1 |
| Bal-ML-2 | Resolution balance | Recommended | Recommended | Recommended | ✅ L1 |
| Bal-ML-3 | Inter-class balance | - | Required | Recommended | ✅ L1 |
| Bal-ML-4 | Bbox H/W balance | - | Recommended (detection) | - | ❌ |
| Bal-ML-5 | Bbox area balance (by class) | - | Recommended (detection) | - | ❌ |
| Bal-ML-6 | Bbox area balance (by sample) | - | Recommended (detection) | - | ❌ |
| Bal-ML-7 | Label proportion balance | - | Recommended | Recommended | ❌ |
| Bal-ML-8 | Label distribution balance | - | Recommended | - | ❌ |
| Div-ML-1 | Label richness | - | Recommended | Recommended | ✅ L1 |
| Div-ML-2 | Relative label abundance | - | Recommended | Recommended | ✅ L1 |
| Div-ML-3 | Category size diversity | - | Recommended | Recommended | ✅ L1 |
| Eft-ML-1 | Feature effectiveness | Recommended | Recommended | Recommended | ✅ L2/L3 |
| Eft-ML-2 | Class size effectiveness | - | Recommended | - | ✅ L2/L3 |
| Eft-ML-3 | Label effectiveness | - | Recommended | Recommended | ✅ L2/L3 |
| Sim-ML-1 | Sample similarity | Required | Recommended | Recommended | ✅ L2/L3 |
| Sim-ML-2 | Sample tightness | Required | Recommended | Recommended | ✅ L2/L3 |
| Sim-ML-3 | Sample independency | Recommended | Recommended | Recommended | ✅ L2/L3 |
| Rep-ML-1 | Representativeness | Required | Required | Required | ✅ L2/L3 |
| Idn-ML-1 | Identifiability (PII) | Recommended | Recommended | Recommended | ❌ |
| Cur-ML-1 | Feature currentness | Recommended | Recommended | Recommended | ❌ |
| Cur-ML-2 | Record currentness | Recommended | Recommended | Recommended | ❌ |
| Rel-ML-1 | Feature relevance | Recommended | Recommended | Recommended | ❌ |
| Rel-ML-2 | Record relevance | Recommended | Recommended | Recommended | ❌ |
| Tra-ML-1~3 | Traceability | Recommended | Recommended | Recommended | ❌ |
| Aud-ML-1~2 | Auditability | Recommended | Recommended | Recommended | ❌ |
| Acs-ML-1~3 | Accessibility | Recommended | Recommended | Recommended | ❌ |
| Cmp-ML-1 | Compliance | Recommended | Recommended | Recommended | ❌ |
| Eff-ML-1~3 | Efficiency | Recommended | Recommended | Recommended | ⚠️ |
| Por-ML-1~2 | Portability | Recommended | Recommended | Recommended | ❌ |
| Tml-ML-1 | Timeliness | Recommended | Recommended | Recommended | ❌ |
