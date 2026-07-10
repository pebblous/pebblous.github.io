---
title: How We Turned Factory Floors Into Training Data
subtitle: AADS Physical AI Approach
date: November 29, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How We Turned Factory Floors Into Training Data

_AADS Physical AI Approach_

## I. Introduction & Objectives

This report summarizes the **question-answer (QA) pair samples** built
                            under the **Agentic AI Data Scientist (AADS)** project,
                            aiming to **enhance manufacturing domain expertise**
                            for large language models (LLMs), based on provided dataset documents
                            (data descriptions and usage guidelines).

QA pairs were classified into the following 4 types:

#### A. Domain Definition/Purpose

Ultimate purpose of data, business goals, domain definition

#### B. Data Structure/Composition

Data scale, format, labeling components and distribution

#### C. AI Model/Task

Applied algorithms, AI task definition, prediction goals and performance metrics

#### D. Quality/Process Management

Data acquisition/processing/validation procedures and quality management criteria

## II. QA Dataset Overview

#### 14

Logical Data Groups

#### 28

QA Pairs (2 per group)

#### 25%

Equal distribution per type

A total of **28 QA pairs** were built
                            across **14 logical data groups**.
                            Each group consists of datasets sharing the same project or objective,
                            covering diverse domains in the manufacturing field.

QA pairs are **equally distributed at 25% each** across
                            the 4 types: **Domain Definition/Purpose (A), Data Structure/Composition (B), AI Model/Task (C), Quality/Process Management (D)**,
                            designed so the LLM acquires comprehensive knowledge across all areas of manufacturing data science.

## III. 14 Manufacturing Domain Datasets

Each dataset was built to solve specific problems in manufacturing settings,
                        incorporating multimodal data (images, sensors, text) and high-quality labeling.

### 01. Manufacturing Transport Device (OHT/AGV) Carbonization Predictive Maintenance Data

#### 🎯 Domain Definition/Purpose

Supporting service development to **predict and prevent carbonization**
                                        for OHT and AGV devices in semiconductor and display manufacturing sites

#### 📊 Data Structure/Composition

**Multimodal:** Sensor values (PM10, NTC, CT1-4, temperature, humidity, illuminance) + thermal images  
**Labeling:** 4-level carbonization state (0: Normal, 1: Caution, 2: Warning, 3: Danger)

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the ultimate purpose of building the OHT and AGV degradation dataset, and what are the primary target enterprises for this service? | The purpose of building this dataset is to support the development of services that predict and prevent carbonization in real-time for OHT and AGV devices at semiconductor, display, automotive, and medical manufacturing sites. The primary targets are semiconductor, display, automotive, and medical device manufacturers exposed to fire risks due to complex processes and expensive equipment. |
| B | What are the multimodal components of this dataset and the four carbonization state classification criteria used in the tagging labels? | The dataset consists of multimodal data including sensor values (PM10, NTC, CT1-CT4, external temperature, humidity, illuminance, etc.) and images (thermal images). Carbonization states are classified into four levels: 0: Normal, 1: Caution, 2: Warning, 3: Danger. |

********

### 02. Non-Destructive Quality Inspection Data for Kimchi Production Processes

#### 🎯 Domain Definition/Purpose

**Non-destructive quality grade prediction** AI model development and service support for kimchi manufacturing/production processes

#### 🤖 AI Model/Task

**Model:** MultiTask EfficientNetV2  
**Quality Grades:** High (0), Medium (1), Low (2)  
**Performance Target:** F1-score 70% or above

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the ultimate AI utilization goal of the kimchi production process dataset, and what quality indicators does the raw cabbage data estimate through hyperspectral imaging? | The primary task of the AI model is to support the development of non-destructive quality grade prediction AI models and services for kimchi manufacturing/production processes. The hyperspectral images of raw cabbage were built for AI training to estimate quality indicators including weight, size, sugar content, and moisture content. |
| C | How does the MultiTask EfficientNetV2 model classify grades for evaluating kimchi quality indicators, and what is the performance target for the salted cabbage quality prediction model? | The MultiTask EfficientNetV2 model is used to evaluate quality indicators, and all indicators are basically divided into High (0), Medium (1), and Low (2). The quantitative performance target for the salted cabbage quality grade prediction model is F1-score of 70% or above, applicable to both salinity grade prediction and sugar content grade prediction. |

********

### 03. 3D Printing Output Shape Correction Data

#### 📊 Data Structure/Composition

**Appearance Quality:** 165,780 images  
**Shrinkage Analysis:** 55,260 images  
**Printers:** FDM, SLA, DLP, MJP, SLS

#### ✅ Quality/Process Management

**Recall Inspection:** Checking for missing bounding boxes  
**Failure Handling:** Rework while retaining precision-passed bounding boxes

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| B | What are the total quantities of appearance quality image data and shrinkage analysis data built to verify 3D printing output quality, and what printer types were used? | 165,780 appearance quality images were built, and 55,260 shrinkage analysis images were built. Printer types used include G_FDM, I_FDM, SLA, DLP, MJP, and SLS. |
| D | In the 3D printing dataset labeling validation process, what errors does the recall inspection primarily check for, and how are failures handled? | The recall inspection checks whether objects that should have bounding boxes drawn are missing. Images that fail the recall inspection are returned to workers for rework while retaining bounding boxes that passed the precision inspection. |

********

### 04. Metal 3D Printing Spark Image and Mechanical Property Prediction Data

#### 🎯 Domain Definition/Purpose

**Mechanical property prediction** of metal additive manufacturing products
                                        through **metal 3D printing spark image analysis**

#### 📊 Data Structure/Composition

**Total Quantity:** 51,267,476 items  
**Formats:** .bmp (images), .json (mechanical properties), .txt (melt_temperature)

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the ultimate purpose of building the metal 3D printing spark image data, and what are the two expected benefits from this dataset? | The purpose is to build data enabling mechanical property prediction of metal additive manufacturing products through metal 3D printing spark image analysis. Expected benefits include improved quality reliability and productivity of metal 3D printing outputs, and cost reduction through optimal process condition recommendation service development. |
| B | What is the total quantity of metal 3D printing spark image data, and list the three file formats comprising the source data. | The total quantity of metal 3D printing spark image data is 51,267,476 items. The file formats comprising the source data are .bmp (images), .json (mechanical properties), and .txt (melt_temperature). |

********

### 05. Construction Equipment Unmanned Operation Autonomous Work Data

#### 🤖 AI Model/Task

**Task:** Activity Recognition  
**Model:** LSTM (time-series classification)  
**Performance:** F1-score 89.98%

#### ✅ Quality/Process Management

**Panoptic Segmentation:** Mask2Former (Transformer-based)  
**Performance:** PQ (Panoptic Quality) 78.41%

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| C | What is the AI model task and labeling method for the excavator's internal work sequence data using the construction equipment dataset, and what is the model's performance metric? | The AI model task for the excavator's internal work sequence data is Activity Recognition, and the labeling method is Frame-by-Frame Video Annotation. Using a time-series classification model (LSTM), this model achieved a validation performance metric of F1-score 89.98%. |
| D | Explain the operation mechanism and performance metric (PQ) of the algorithm used as the validation model for the panoptic segmentation model in the construction equipment unmanned operation data. | The panoptic segmentation model uses Mask2Former, which is based on Transformer architecture and introduces the Attention mechanism to predict segmentation masks for each pixel of the image. This model uses the validation metric PQ (Panoptic Quality) and achieved 78.41%. |

********

### 06. High-Quality R&D Lithium-Ion Secondary Battery Data

#### 🎯 Domain Definition/Purpose

**Utilizing LLM (GPT)** to extract information
                                        from experiments/methods and results sections in scientific publication PDFs

#### 🤖 AI Model/Task

**Fine-tuning Techniques:** Few-Shot Learning, Prompt Engineering  
**Output:** Tabular data

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the core construction method of this dataset in utilizing LLMs, and what is the original source of the extracted text? | This project uses large language models (LLMs), specifically GPT models, to extract intended information from scientific publications. The original source of the extracted text is PDF files of scientific publications, from which only the experiments/methods and results/discussion sections are extracted while the rest is discarded. |
| C | What fine-tuning techniques were used to improve LLM performance and efficiency and obtain accurate tabular output from scientific publications? | Few-Shot Learning and Prompt Engineering techniques were used for fine-tuning the LLM, training the model to accurately extract required data and output it in tabular format. |

********

### 07. Home Appliance Power Consumption Data for Intelligent Electrical Infrastructure

#### 🎯 Domain Definition/Purpose

**NILM (Non-Intrusive Load Monitoring)** technology development  

                                        Estimating individual appliance usage patterns from total panel board power

#### 🤖 AI Model/Task

**Task 1:** Active power disaggregation (seq2points)  
**Task 2:** Active-inactive state classification (unet, F1-score 95.5%)

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What does the NILM technology targeted by this dataset mean, and what is the scale of home appliance power consumption data in the construction target volume? | This dataset is for AI-based NILM (Non-Intrusive Load Monitoring) technology development. NILM is a technology that estimates individual appliance power usage patterns from the total power consumption data of a distribution panel. The construction target is 37,231 records of home appliance power consumption data out of a total of 40,641 records. |
| C | What are the two main AI tasks that can be implemented using this dataset, along with example algorithms for each and their validation results? | The two main AI tasks are per-device active power disaggregation and device active-inactive state classification. The seq2points model is applied to the active power disaggregation model, and the unet is applied to the active-inactive detection model, with a state classification validation result of F1-score 95.5%. |

********

### 08. CMF (Color, Material, Finish) Image Identification Data

#### 🎯 Domain Definition/Purpose

**Task:** Image Classification  
**Top Model:** Swin Transformer (hierarchical structure)

#### 📊 Data Structure/Composition

**Required Info:** Bounding box, color, material_finishing  
**Range:** 0-32 (33 types)

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the target task type for building the CMF identification dataset, and what is the top-ranked algorithm among training model candidates and its selection rationale? | The task type for this dataset is Image Classification. The top-ranked algorithm among training model candidates is Swin Transformer, which has a hierarchical transformer structure that computes attention by dividing images using a shifted window approach, capable of efficiently detecting objects from small to large and achieving high performance. |
| B | What are the three required pieces of information included in the CMF labeling details (annotations.label), and what is the description range of the material_finishing attribute? | The labeling details must include bounding box information (bndbox), color information (color), and material_finishing information. The material_finishing attribute ranges from code 0 to 32, encompassing 33 types from mirror-polished metallic finishes to woven wood textures. |

********

### 09. Experiment-Based Material Property Data

#### 🎯 Domain Definition/Purpose

Databasing material property data for
                                        **AI-based metal property prediction** model utilization

#### 🤖 AI Model/Task

**Model:** Random Forest Regressor (ensemble)  
**Data:** 1,000 rows (Train 80%, Test 20%)  
**Metric:** Predicted R²

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the main utilization purpose of this dataset, and what type of learning algorithm does the Hardness prediction model use? | This dataset aims to database material property data for use in AI-based metal property prediction models. The learning algorithm for the Hardness prediction model is Random Forest Regressor, which uses an Ensemble model approach that combines multiple results to derive the final output. |
| C | What is the data ratio used by the Hardness prediction AI model, and what are the model's performance metric and target? | The Hardness prediction model uses 100% (1,000 rows) of the total constructed data, with a Training Set ratio of 80% (800 rows) and Test Set ratio of 20% (200 rows). The performance metric is Predicted R², and while the target value is not explicitly stated, excellent prediction is the goal. |

********

### 10. Battery Defect Image Diagnostic Data

#### 🎯 Domain Definition/Purpose

Comprehensive evaluation of **electrical testing + internal state**
                                        to establish **new battery grading standards**

#### ✅ Quality/Process Management

**Validation Criteria:** Minimum polygon size of 4x4 pixels  
**CT Performance:** mIoU 92.79%

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the direction of establishing new standards that can complement existing electrical testing through the construction of battery defect image data? | Through this dataset, it is possible to establish new battery grading standards that comprehensively evaluate internal states beyond existing electrical tests, and it can be used for research to reveal correlations between electrical test grades and internal battery defects. |
| D | What is the minimum size criterion for labeling validation in the battery defect image data construction process, and what is the final defect detection performance (mIoU) of the CT dataset? | The minimum polygon size for labeling validation was set to 4x4 pixels or larger. The final defect detection performance (AI model training result) of the CT dataset achieved mIoU 92.79%. |

********

### 11. LNG Tank Component Quality Inspection Video Data

#### 📊 Data Structure/Composition

**Labeling:** Polygon, BB (Bounding Box), Classification  
**Attributes:** tank_type, volume, material, location, part, quality

#### 🤖 AI Model/Task

**Model:** Mask DINO (Transformer-based)  
**Performance:** mAP 95.72% (exceeded target of 79.43%)

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| B | Describe the three labeling types in the LNG tank quality inspection data and three unique attributes of LNG tanks included in the JSON labeling data. | The labeling types are Polygon, BB (Bounding Box), and Classification. The JSON labeling data attributes include tank_type, volume, material, location, part, quality, etc. For example, tank_type, volume, and material can be cited. |
| C | What are the mAP result and quantitative target of the segmentation object detection model in the LNG tank quality inspection image dataset validation, and what algorithm was used? | The segmentation object detection model's validation result achieved mAP 95.72% (target 79.43% or above). This model utilizes Mask DINO and is based on Transformer architecture. |

********

### 12. Shipbuilding/Offshore Plant P&ID Symbol Identification Data

#### 🎯 Domain Definition/Purpose

**Engineering drawing** P&ID symbol auto-classification,
                                        quantity/location output, **incorrect P&ID detection**

#### 📊 Data Structure/Composition

**Required Attributes:** vendor, shipType, pidLabel  
**Target Types:** FPSO, Drillship, Semi-Flg, etc.

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | Describe two main functions that an AI model can perform in design and quality management using the shipbuilding/offshore plant P&ID symbol identification dataset. | The AI model can automatically classify P&ID symbols in engineering drawings using the trained model, output per-P&ID quantities and positions on drawings, and identify unnecessary or incorrect P&IDs. |
| B | Present three required attributes in the JSON labeling data for P&ID symbol objects, and provide three examples of shipType among these attributes. | The required attributes are designer code (vendor), target type (shipType), and P&ID symbol character (pidLabel). Examples of target type (shipType) include FPSO, Drillship, and Semi-Flg. |

********

### 13. Ship Coating Quality Measurement Data

#### 🎯 Domain Definition/Purpose

Understanding **ship coating damage levels** and
                                        **improving inspection accuracy**  

                                        Welding damage: 20,352 cases (19.8%)

#### ✅ Quality/Process Management

**Secondary Inspection:** Screening inspection (crowdsourcing)  
**Metrics:** Top-1 Accuracy, mAP@50, MIOU

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| A | What is the purpose of building the ship coating quality measurement dataset, and what percentage do welding damages represent among the coating defect types in this dataset? | The purpose is to understand the extent of ship coating damage and improve coating quality inspection accuracy. Among defect types, welding damage accounts for 20,352 cases representing 19.8%. |
| D | How is the secondary inspection of the ship coating quality dataset performed, and present two performance metrics used in validation. | The secondary inspection is conducted as a screening inspection, verifying whether labeling values match the Ground Truth through eye checking using a crowdsourcing platform. The main performance metrics used in validation include Top-1 Accuracy, mAP@50, and MIOU. |

********

### 14. Welding AI Training Data (Visual and Radiographic Inspection)

#### 🤖 AI Model/Task

**Model:** YOLOv5x-seg  
**Task:** Defect detection for welding automation  
**Labeling:** Polygon

#### 📊 Data Structure/Composition

**General Steel (VTST):** 74,019 images  
**Major Defects:** Incomplete penetration 16,180, Undercut 12,195

📝 View QA Samples (2 pairs)

| Type | Query | Answer |
| --- | --- | --- |
| C | What algorithm was proposed as the AI training model for detecting welding defects using welding AI training data, and what are the main task and labeling type this model performs? | The applied model (algorithm) is YOLOv5x-seg, and this model is used for building welding image data by inspection type for welding automation. The data labeling type is Polygon. |
| B | What is the total source data quantity for visual inspection (VTST) data of general steel base material, and what are the two most commonly built defect types? | The total source data quantity for visual inspection of general steel base material (VTST) is 74,019 images. The two most commonly built defect types are Incomplete penetration at 16,180 and Undercut at 12,195. |

********

## IV. Query-Answer Type Final Statistics

For LLM training data generation, a total of **28** QA pairs were
                        constructed across **14** logical data groups.
                        The query type statistics reflecting the application of data science to the manufacturing domain are as follows.

| Query Type | Definition | Count | Ratio |
| --- | --- | --- | --- |
| A. Domain Definition/Purpose | Ultimate purpose of data, business goals, domain definition | 7 | 25.0% |
| B. Data Structure/Composition | Data scale, format, labeling components and distribution | 7 | 25.0% |
| C. AI Model/Task | Applied algorithms, AI task definition, prediction goals and performance metrics | 7 | 25.0% |
| D. Quality/Process Management | Data acquisition/processing/validation procedures and quality management criteria | 7 | 25.0% |
| Total | 28 | 100.0% |  |

****************

#### 💡 Key Characteristics

Questions are **equally distributed** across the core elements
                            of manufacturing domain data science: **Purpose (A), Data Features (B), Technology Application (C), Quality Management (D)**,
                            designed so the LLM acquires **comprehensive knowledge** across all areas.

## V. Prompt Template for Domain LLM Report Generation

This prompt can be used to generate **structured QA dataset reports**
                        when given training data documents from other domains (e.g., robotics, healthcare, autonomous driving),
                        enabling the LLM to learn domain-specific expertise.

### Report Generation Prompt Template

`[Instructions]
You are an expert in building specialized QA datasets for large language model (LLM)
fine-tuning in the Agentic AI Data Scientist (AADS) project. Analyze the content of the
[INPUT: Target Analysis Document] below and generate a QA report grouped by
**'Logical Data Groups'**.

**[Report Components]**
1. **Report Title:** Write according to the domain and purpose.
2. **Logical Data Group Identification:** Group documents sharing the same project
   or objectives within the document as a 'logical group'.
3. **QA Pair Generation:** Generate **2** question-answer (QA) pairs per logical group.
4. **Query Type Classification:** Generated QA pairs must be classified into one of 4 core types:
   * **A. Domain Definition/Purpose:** Industry problems and business objectives the data addresses
   * **B. Data Structure/Composition:** Data scale, format, labeling components and distribution
   * **C. AI Model/Task:** Applied algorithms, AI task definition, prediction goals, performance metrics
   * **D. Quality/Process Management:** Data acquisition/processing/validation procedures, labeling criteria, quality management criteria
5. **Source Citation:** All sentences in answers must clearly cite original document sources in [i] format.
6. **Final Statistics:** Summarize the **final counts and ratios of A, B, C, D types** used
   across all generated QA pairs.`

**How to use:** Use this template to automatically generate high-quality QA datasets
                            from training data documents across various domains (healthcare, autonomous driving, robotics, etc.).

## Pebblous Perspective: Data-Centric Approach in the Physical AI Era

The manufacturing QA dataset built in this AADS project clearly demonstrates
                            the **difference in intelligence that data quality creates**
                            in the era of **Physical AI**.

### 🎯 AADS Differentiated Approach

•**Balanced Knowledge Structure:**
                                        Designed so the LLM acquires unbiased expertise by equally distributing
                                        domain definition, data structure, AI model, and quality management areas at 25% each

•**Practice-Oriented QA:**
                                        Factual Q&A extracted from actual dataset documents across 14 manufacturing domains
                                        to minimize hallucination

•**Scalable Template:**
                                        A reusable structure that can be immediately extended to other domains
                                        (healthcare, autonomous driving, etc.) through the prompt template

#### Integration with DataClinic

The high-quality QA datasets built by AADS are combined with **DataClinic's**
                                    data quality diagnosis and refinement pipeline to pre-verify and optimize
                                    data quality before LLM fine-tuning.

#### Physical AI Strategy

By fine-tuning LLMs to understand **multimodal data**
                                    (sensors, images, text) from manufacturing sites,
                                    we lay the foundation for **AI that interacts with the physical world**.

Through this project, Pebblous has reaffirmed the importance of the
                            **Data-Centric AI** approach.
                            This case demonstrates that true intelligence emerges not by simply scaling up model size,
                            but by fine-tuning with **high-quality data infused with domain expertise**.

## Frequently Asked Questions (FAQ)

### How does AADS build manufacturing QA datasets?

AADS analyzes actual dataset documents (data descriptions, usage guidelines) from manufacturing sites
                                        and groups documents sharing the same project objectives into 'logical data groups'.
                                        For each group, 2 QA pairs are generated across the 4 types of domain definition, data structure,
                                        AI model, and quality management, building a total of 28 high-quality Q&A pairs.

### Why is the QA format important for LLM fine-tuning?

The QA format is an optimized structure for LLMs to efficiently learn domain-specific expertise.
                                        Through clear question and fact-based answer pairs, the model acquires accurate knowledge
                                        and internalizes information in a form immediately usable for Few-Shot Learning or prompt engineering.
                                        Especially in domains where accuracy is critical, like manufacturing, structured learning through QA format is essential.

### Which of the 14 datasets showed the highest performance?

The **Home Appliance Power Consumption Data (NILM)** active-inactive state classification model
                                        recorded the highest performance with an F1-score of 95.5%.
                                        Additionally, the **LNG Tank Quality Inspection Data** segmentation object detection model (Mask DINO)
                                        significantly exceeded its target (79.43%) with mAP 95.72%.
                                        This is the result of combining high-quality labeling with appropriate model selection.

### What advantages does multimodal data provide for LLM fine-tuning?

Multimodal data (sensor values + images, text + numerical values) helps LLMs
                                        **comprehensively understand physical phenomena** in manufacturing sites.
                                        For example, OHT/AGV carbonization predictive maintenance data combines sensor values (PM10, temperature, humidity)
                                        with thermal images, enabling the LLM to learn multi-dimensional knowledge such as
                                        "carbonization state level 3 (danger) corresponds to increased PM10 values + specific thermal image patterns."
                                        This is a core element for implementing Physical AI.

### Why is data quality management (Type D) included in the QA dataset?

For an AI data scientist to be truly useful in practice,
                                        it must understand **data quality verification and validation procedures**.
                                        For example, knowledge that "the recall inspection of 3D printing data checks for missing bounding boxes"
                                        is essential for AADS to proactively detect quality issues and suggest improvement measures during dataset construction.
                                        This is a strategy for creating an AI that understands the **entire data pipeline**, not just model training.

### What should be considered when applying the prompt template to other domains?

When applying the prompt template to other domains such as healthcare or autonomous driving,
                                        **domain-specific query types** must be redefined.
                                        Manufacturing's "Quality/Process Management (D)" can be transformed into
                                        "Clinical Validation/Regulatory Compliance" in healthcare
                                        or "Safety Certification/Test Scenarios" in autonomous driving.
                                        The key is to accurately reflect each domain's core knowledge areas
                                        while maintaining the **principle of equal distribution across 4 types**.

### How does the AADS QA dataset integrate with DataClinic?

The QA datasets generated by AADS are closely integrated with **DataClinic's data quality diagnosis pipeline**.
                                        When DataClinic automatically detects data outliers, labeling errors, imbalanced distributions, etc.,
                                        AADS can learn QA pairs about those quality issues and provide
                                        **practical solutions** such as "SMOTE technique should be applied to resolve this dataset's class imbalance problem."
                                        This creates a virtuous cycle of data diagnosis (DataClinic) followed by quality improvement suggestions (AADS).

## Dataset Sources

Source information for the 14 manufacturing domain datasets analyzed in this report.

[1]**Manufacturing Transport Device (OHT/AGV) Carbonization Predictive Maintenance Data**  

                                    Semiconductor and display manufacturing / Sensor + thermal image multimodal

[2]**Non-Destructive Quality Inspection Data for Kimchi Production Processes**  

                                    MultiTask EfficientNetV2 / Quality grade prediction F1-score 70% target

[3]**3D Printing Output Shape Correction Data**  

                                    Appearance quality 165,780 + Shrinkage analysis 55,260 / FDM, SLA, DLP, MJP, SLS

[4]**Metal 3D Printing Spark Image and Mechanical Property Prediction Data**  

                                    51,267,476 images / .bmp, .json, .txt formats

[5]**Construction Equipment Unmanned Operation Autonomous Work Data**  

                                    LSTM Activity Recognition F1-score 89.98% / Mask2Former PQ 78.41%

[6]**High-Quality R&D Lithium-Ion Secondary Battery Data**  

                                    LLM (GPT)-based scientific publication information extraction / Few-Shot Learning + Prompt Engineering

[7]**Home Appliance Power Consumption Data for Intelligent Electrical Infrastructure**  

                                    NILM technology / seq2points, unet / F1-score 95.5%

[8]**CMF (Color, Material, Finish) Image Identification Data**  

                                    Swin Transformer / 33 material_finishing types (0-32)

[9]**Experiment-Based Material Property Data**  

                                    Random Forest Regressor / 1,000행 (Train 80%, Test 20%) / Predicted R²

[10]**Battery Defect Image Diagnostic Data**  

                                    Comprehensive internal state evaluation / CT dataset mIoU 92.79%

[11]**LNG Tank Component Quality Inspection Video Data**  

                                    Mask DINO / mAP 95.72% (exceeded target 79.43%)

[12]**Shipbuilding/Offshore Plant P&ID Symbol Identification Data**  

                                    FPSO, Drillship, Semi-Flg, etc. / vendor, shipType, pidLabel attributes

[13]**Ship Coating Quality Measurement Data**  

                                    Welding damage 20,352 cases (19.8%) / Top-1 Accuracy, mAP@50, MIOU

[14]**Welding AI Training Data (Visual and Radiographic Inspection)**  

                                    YOLOv5x-seg / General steel (VTST) 74,019 images / Incomplete penetration 16,180, Undercut 12,195

## 📄 Download Original Report

### AADS QA Dataset Construction for LLM Fine-Tuning: Manufacturing Sector

Download the original report containing 28 QA pairs across 14 manufacturing domains in detail.

[Download PDF](/project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 제조 분야.pdf)Format: PDF | Date: November 29, 2025 | Pebblous Data Communication Team

### Related Posts
