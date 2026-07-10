---
title: What Does Safety Look Like as Training Data?
subtitle: A Data Quality Perspective
date: November 30, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What Does Safety Look Like as Training Data?

_A Data Quality Perspective_

## I. Introduction & Objectives

This report summarizes the **question-answer (QA) pair samples** built
                            under the **Agentic AI Data Scientist (AADS)** project,
                            aiming to **strengthen LLM domain expertise in social safety**
                            based on provided dataset documentation (data descriptions and usage guidelines).

QA pairs were classified into the following four types:

#### A. Domain Definition / Purpose

Ultimate purpose of data, business goals, domain definition

#### B. Data Structure / Composition

Data scale, format, labeling components and distribution

#### C. AI Model / Task

Applied algorithms, AI task definition, prediction targets and performance metrics

#### D. Quality / Process Management

Data acquisition/processing/validation procedures and quality management criteria

## II. QA Dataset Overview

#### 8

Social Safety Datasets

#### 32

QA Pairs (4 per dataset)

#### 25%

Equal Distribution per Type

A total of **32 QA pairs** were constructed across
                            **8 social safety domain datasets**.
                            Each dataset covers diverse domains within social safety,
                            including infrastructure safety, environmental monitoring, and hazard detection.

The QA pairs are **equally distributed at 25% each** across four types:
                            **Domain Definition/Purpose (A), Data Structure/Composition (B), AI Model/Task (C), and Quality/Process Management (D)**,
                            designed so the LLM learns comprehensive knowledge spanning all areas of social safety data science.

## III. 8 Social Safety Domain Datasets

Each dataset was constructed to address specific challenges in social safety,
                        incorporating multimodal data (images, sensors, text, hyperspectral imagery, etc.) and high-quality labeling.

### 01. Rock Mass Classification Data Using Borehole Core Samples

#### 🎯 Domain Definition / Purpose

Improving accuracy and objectivity of rock mass classification to
                                        **prevent tunnel and slope collapse accidents**

#### 📊 Data Structure / Composition

**Rock type classification:** 550,080 pairs (Image + JSON)  
**Joint detection:** 111,345 pairs (Image + JSON)

#### 🤖 AI Model / Task

**Rock type classification:** ResNet (Image Classification)  
**Joint detection:** Deeplab V3 (Segmentation)

#### ✅ Quality / Process Management

Duplicate image removal via hash value comparison using the Hashlib library

### 02. Intelligent Surveillance Service CCTV Video Data

#### 🎯 Domain Definition / Purpose

**Automatic detection of 6 types of safety incidents: intrusion, fighting, falling, crowding, crowd density, and flooding**
                                        for early detection and rapid response

#### 📊 Data Structure / Composition

**Total 300 videos**  

                                        4 safety incident types (200) + 2 specialized events (100)

#### 🤖 AI Model / Task

**Task:** Anomalous behavior detection  
**Performance target:** AUC 80% (handling imbalanced datasets)

#### ✅ Quality / Process Management

Personal information de-identification (blurring/masking) for bias removal and improved generalization

### 03. Construction Aggregate Quality Control Data

#### 🎯 Domain Definition / Purpose

**AI-automated analysis** of aggregate quality
                                        that directly affects concrete quality, to block distribution of defective aggregates

#### 📊 Data Structure / Composition

**Gravel rock types:** Polygon Segmentation  
**Flat & elongated ratio:** Rotated Bounding Box

#### 🤖 AI Model / Task

**YOLO-OBB** (Oriented Bounding Box)  
**Performance:** IoU@50, mAP 75%

#### ✅ Quality / Process Management

Dup Detector (deduplication) + Sony image edge view (visual full inspection)

### 04. Naturally Occurring Asbestos Detection Data

#### 🎯 Domain Definition / Purpose

**Rapid and accurate detection** of naturally occurring asbestos
                                        and asbestos-containing rocks for proactive health threat management

#### 📊 Data Structure / Composition

**Multimodal:** Optical (JPG) + VNIR hyperspectral (TIF) + SWIR hyperspectral (TIF)  

                                        Fusion of 3 wavelength bands

#### 🤖 AI Model / Task

**Early Fusion vs Late Fusion** comparative evaluation  

                                        Multimodal integration strategy optimization

#### ✅ Quality / Process Management

Reflectance/atmospheric/geometric correction to restore intrinsic spectral signatures

### 05. SOC Infrastructure Crack Pattern Image Data

#### 🎯 Domain Definition / Purpose

**Automated crack diagnosis AI service and detection robot development**
                                        for hazardous infrastructure such as bridges and tunnels

#### 📊 Data Structure / Composition

**10 classes:** Crack, reticular crack, delamination, spalling, efflorescence, leakage,  

                                        rebar exposure, material segregation, bulging, breakage

#### 🤖 AI Model / Task

**Classification:** CvT (Convolutional Vision Transformer)  
**Segmentation:** SegFormer

#### ✅ Quality / Process Management

Frame extraction at SSIM below 0.9 to prevent overfitting and ensure diversity

### 06. Amusement Ride & Facility User Hazard Recognition Data

#### 🎯 Domain Definition / Purpose

**Automatic recognition of hazardous situations and damage conditions**
                                        in amusement rides and facilities for accident prediction, warning, and immediate response

#### 📊 Data Structure / Composition

**3 labeling types:** Bounding box (object detection) + Keypoints (pose analysis) +  

                                        Segmentation (damage area)

#### 🤖 AI Model / Task

**InternImage-L** Foundation model-based  

                                        Efficient fine-tuning via transfer learning

#### ✅ Quality / Process Management

4-stage procedure: Processing → Review → Reprocessing → Verification (feedback loop)

### 07. Inland Wetland Carbon Sink Data

#### 🎯 Domain Definition / Purpose

**Carbon absorption estimation and change monitoring**
                                        through inland wetland vegetation and water body analysis (climate change response)

#### 📊 Data Structure / Composition

**Multi-source:** Sentinel satellite imagery + Drone imagery +  

                                        Numerical data (precipitation, temperature, water level)

#### 🤖 AI Model / Task

**Drone:** Trans UNet  
**Satellite:** Modified Trans UNet (optimized for data characteristics)

#### ✅ Quality / Process Management

Standard Sentinel-1 preprocessing with SNAP software (radiometric/terrain correction)

### 08. Chemical Hazard Prediction Data

#### 🎯 Domain Definition / Purpose

**Predicting hazards of unknown chemicals** using physicochemical properties,
                                        REACH regulation compliance and safety standard establishment

#### 📊 Data Structure / Composition

**3 properties:** Vapor pressure (5,110 records) + Heat of combustion (5,005 records) +  

                                        Flash point (10,010 records)

#### 🤖 AI Model / Task

**Web-based prediction service**  

                                        Molecular structure input → Instant hazard prediction (maximum accessibility)

#### ✅ Quality / Process Management

GHS information standardized to 'Hazardous/No Data/Not Applicable' for data consistency

## IV. Question-Answer Type Final Statistics

A total of **32** question-answer pairs were constructed
                        across **8** social safety domain datasets for LLM training data generation.
                        The question type statistics reflecting social safety domain application of data science are as follows.

| Question Type | Definition | Count | Ratio |
| --- | --- | --- | --- |
| A. Domain Definition / Purpose | Ultimate purpose, business goals, domain definition | 8 | 25.0% |
| B. Data Structure / Composition | Data scale, format, labeling components and distribution | 8 | 25.0% |
| C. AI Model / Task | Applied algorithms, AI task definition, prediction targets and metrics | 8 | 25.0% |
| D. Quality / Process Management | Data acquisition/processing/validation procedures and quality criteria | 8 | 25.0% |
| Total | 32 | 100.0% |  |

****************

#### 💡 Key Feature

Questions are **equally distributed** across the core elements of
                            data science in social safety domains: **Purpose (A), Data Characteristics (B), Technology Application (C), and Quality Management (D)**,
                            designed so the LLM learns **comprehensive knowledge** across all areas.

## IV-2. Actual Question-Answer Samples (32 Pairs)

Below are 32 actual QA samples extracted from 8 social safety datasets.
                        Each dataset contains one QA pair for each type: A (Domain Definition/Purpose), B (Data Structure/Composition),
                        C (AI Model/Task), and D (Quality/Process Management).

### 01. Rock Mass Classification Data Using Borehole Core Samples

🎯 A. Domain Definition / Purpose

Q: What is the ultimate utilization goal of building the 'Rock Mass Classification Data Using Borehole Core Samples'?

A: The core objective of this data is to improve the accuracy and objectivity of rock mass classification to prevent collapse accidents in tunnel and slope construction. This contributes to construction safety by standardizing and automating rock analysis that previously relied on subjective judgment through AI.

📊 B. Data Structure / Composition

Q: What two main types of data compose this dataset, and what is the scale of each?

A: The dataset consists of a 'Rock Type Classification Dataset' and a 'Joint Detection Dataset.' The rock type classification data comprises 550,080 pairs of images (JPG) and labeling data (JSON), while the joint detection data comprises 111,345 pairs of images and labeling data.

🤖 C. AI Model / Task

Q: What are the technical reasons for using ResNet and Deeplab V3 models for the two different tasks of rock type classification and joint detection, respectively?

A: The two models have architectures optimized for different tasks. ResNet is widely used for 'Image Classification' tasks that classify images into specific classes based on overall features, thanks to its residual connection structure that enables stable learning even in deep neural networks. In contrast, Deeplab V3 uses Atrous Convolution to efficiently capture context information at various scales, making it more suitable for 'Segmentation' tasks that precisely delineate specific regions (joints/faults) at the pixel level within images.

✅ D. Quality / Process Management

Q: Why were hash values used to remove duplicate image files during data cleansing, and what are the advantages of this method?

A: Hash value comparison using Python's Hashlib library leverages the property that even a single bit difference in image content produces an entirely different hash value. This method is computationally far more efficient than simple pixel-value comparison and can accurately and rapidly identify and remove duplicate files with identical content regardless of differing filenames or metadata, making it highly effective for ensuring data purity.

### 02. Intelligent Surveillance Service CCTV Video Data

🎯 A. Domain Definition / Purpose

Q: What is the fundamental purpose of building the 'Intelligent Surveillance Service CCTV Video Data'?

A: The purpose of this dataset is to train AI models capable of automatically detecting and analyzing 6 types of major safety incidents and disaster situations including intrusion, fighting, falling, crowding, crowd density, and flooding through intelligent CCTV. The ultimate goal is to enhance surveillance efficiency and strengthen public safety by establishing early detection and rapid response systems when incidents occur.

📊 B. Data Structure / Composition

Q: How many total videos does this dataset contain, and what is the distribution by event type?

A: It consists of a total of 300 videos. Specifically, 200 videos cover 4 general safety incident types (intrusion 55, falling 45, fighting 30, crowding 70), and 100 videos cover 2 specialized event types (crowd density 40, flooding 60).

🤖 C. AI Model / Task

Q: When the AI model task for this dataset is 'anomalous behavior detection in surveillance video,' why is AUC used as the performance metric, and what does the 80% target mean?

A: 'Anomalous behavior detection' often involves imbalanced datasets where abnormal situations occur far less frequently than normal ones. AUC (Area Under the Curve) evaluates how well the model discriminates anomalous situations across all possible thresholds, providing a more robust measurement of overall discriminative performance than accuracy, which depends on a specific threshold. The 80% target represents a practical performance goal indicating the model can detect anomalous behavior at a level significantly above random guessing (AUC 50%).

✅ D. Quality / Process Management

Q: What important role does personal information de-identification play in CCTV footage from a data quality management perspective?

A: Personal information de-identification (blurring, masking) is a critical quality management measure that fulfills legal requirements for privacy law compliance while improving model performance and generalization capability. If facial features, vehicle license plates, and other information remain exposed, the AI model may overfit to incidental information such as specific individuals or vehicles rather than the essence of the problem (e.g., fighting behavior). De-identification removes such biases, guiding the model to focus purely on learning situational and behavioral patterns.

### 03. Construction Aggregate Quality Control Data

🎯 A. Domain Definition / Purpose

Q: What industrial problem does building 'Construction Aggregate Quality Control Data' solve, and what system can it be integrated with?

A: This data was built to enable AI-automated analysis of aggregate quality that directly affects concrete quality in SOC construction. It addresses the inefficiency and subjectivity of conventional visual inspection methods and can be integrated with an 'Aggregate Traceability Management System' to block distribution of defective aggregates and enhance the reliability of construction materials.

📊 B. Data Structure / Composition

Q: What two main types of data does this dataset split into, and what are the labeling methods for each?

A: The dataset is divided into 'Gravel Rock Type Analysis Data' and 'Flat & Elongated Particle Ratio Analysis Data.' 'Gravel Rock Type Analysis' uses Polygon Segmentation to precisely delineate areas along the complex boundaries of rocks, while 'Flat & Elongated Particle Ratio Analysis' uses Rotated Bounding Box to enclose rotated objects.

🤖 C. AI Model / Task

Q: What is the technical reason for using YOLO-OBB (Oriented Bounding Box) for flat and elongated particle ratio analysis, and what does the performance target 'IoU@50, mAP 75%' mean?

A: Flat and elongated particles like gravel are long and flat, making it difficult to accurately enclose them with standard axis-aligned bounding boxes. YOLO-OBB uses rotated bounding boxes, enabling more precise detection of the orientation and shape of such irregular objects, making it technically suitable. In the performance target, 'IoU@50' means a prediction is considered 'correct' when the Intersection over Union between the predicted and ground truth boxes is 50% or above, and 'mAP 75%' means the goal is to achieve 75% for the mean Average Precision across all classes.

✅ D. Quality / Process Management

Q: Why were 'Dup Detector' for deduplication and 'Sony image edge view' for error removal used in the data cleansing process?

A: This is a strategy that considers both efficiency and accuracy in cleansing work. Automated inspection tools like 'Dup Detector' are effective at rapidly finding duplicate files with identical content in large-scale image datasets. However, quality issues such as out-of-focus images or light reflection errors from moisture are difficult for machines to judge, so experts conducted visual full inspection using 'Sony image edge view' to magnify images, thereby securing both quantitative and qualitative data quality.

### 04. Naturally Occurring Asbestos Detection Data

🎯 A. Domain Definition / Purpose

Q: What is the ultimate goal and societal contribution of building the 'Naturally Occurring Asbestos Detection Data'?

A: The ultimate goal is to develop AI models that rapidly and accurately detect and classify asbestos and potentially asbestos-containing rocks in natural environments. Through this, the aim is to proactively manage potential health threats from asbestos and provide scientific evidence for environmental and public health safety policy formulation, contributing to social safety.

📊 B. Data Structure / Composition

Q: What three types of image data comprise this dataset? Why is it considered multi-modal data?

A: The dataset consists of three types: optical (JPG), visible near-infrared hyperspectral imagery (VNIR, TIF), and short-wave infrared hyperspectral imagery (SWIR, TIF). Since each data type collects information from different sensors and wavelength bands (visible light, near-infrared, etc.), it is considered multi-modal data that captures the same subject from different perspectives (modalities).

🤖 C. AI Model / Task

Q: Why was a strategy devised to comparatively evaluate 'Early Fusion' and 'Late Fusion' techniques for training this multimodal data?

A: Early Fusion integrates characteristics from multiple heterogeneous (multi-modal) image data like optical, VNIR, and SWIR at the input stage to learn rich features together, which can be advantageous for capturing low-level interactions between data types. Late Fusion, on the other hand, trains independent models for each modality and then combines prediction results, excelling at deeply learning the unique characteristics of each data type. By comparing both approaches, the goal is to verify which is more effective for the specific task of asbestos detection and determine the optimal model architecture.

✅ D. Quality / Process Management

Q: Why are cleansing processes such as reflectance, atmospheric, and geometric correction performed on hyperspectral imagery data?

A: Hyperspectral imagery can be contaminated by various external factors including sensor noise, scattering by atmospheric water vapor and aerosols, and distortion from satellite or drone viewing angles. Reflectance, atmospheric, and geometric corrections are essential preprocessing steps that remove these distortions to restore the pure, intrinsic spectral signatures of materials. Only by securing data accuracy and consistency through this process can AI models learn reliable patterns.

### 05. SOC Infrastructure Crack Pattern Image Data

🎯 A. Domain Definition / Purpose

Q: What specific services and decision-support tools can 'SOC Infrastructure Crack Pattern Image Data' be used to develop?

A: This data can be directly used to develop AI services and detection robots for automatically diagnosing cracks in infrastructure in hazardous areas such as bridges and tunnels where personnel access is difficult. Additionally, it serves as foundational data for developing decision-support tools that quantitatively analyze crack types and severity to determine maintenance priorities and establish long-term management plans.

📊 B. Data Structure / Composition

Q: What 10 types of crack and damage patterns are included in the dataset's labeling classes?

A: The dataset defines 10 representative infrastructure damage patterns as classes: crack, reticular crack, delamination, spalling, efflorescence, leakage, rebar exposure, material segregation, bulging, and breakage.

🤖 C. AI Model / Task

Q: Why were CvT and SegFormer models used respectively for 'image classification' and 'image segmentation' tasks utilizing this dataset?

A: 'Image Classification' is the task of determining what type of crack exists in an entire image, for which the CvT (Convolutional Vision Transformer) model is suitable as it effectively learns global image features. 'Image Segmentation,' on the other hand, is the task of precisely identifying where and in what form cracks exist within an image at the pixel level, for which the SegFormer model is more efficient with its lightweight structure while maintaining high segmentation performance. By applying models optimized for each of these related yet different tasks, the overall system performance is maximized.

✅ D. Quality / Process Management

Q: Why was SSIM (Structural Similarity Index) used when extracting frames from video, and what positive impact does it have on AI model training?

A: SSIM (Structural Similarity Index) was used to remove highly similar duplicate images between frames in video data. By extracting only frames with SSIM values below 0.9, overfitting caused by the model repeatedly learning nearly identical images is prevented, and data diversity is secured to maximize the variety of crack patterns learned within a limited dataset. This is an important quality management technique for improving model generalization performance.

### 06. Amusement Ride & Facility User Hazard Recognition Data

🎯 A. Domain Definition / Purpose

Q: What is the strategic purpose of building the 'Amusement Ride & Facility User Hazard Recognition Data'?

A: The strategic purpose of this data is to train AI to automatically recognize and analyze various hazardous situations and facility damage conditions that may occur in amusement rides and related facilities. The goal is to build an intelligent safety management system that proactively secures user safety by predicting accident likelihood and issuing warnings, or supporting immediate response when accidents occur.

📊 B. Data Structure / Composition

Q: Why does this dataset's labeling consist of three types: bounding box, keypoint, and segmentation?

A: The three labeling types provide different levels of information enabling complex situational awareness. 'Bounding boxes' rapidly detect the location and presence of objects (people, rides), 'keypoints' track joint positions of people to precisely analyze posture and behavior, and 'segmentation' accurately delineates damaged areas of facilities at the pixel level. By combining these three, AI can comprehensively understand complex scenarios such as "who (bounding box) is in what dangerous posture (keypoint) near a damaged area (segmentation)."

🤖 C. AI Model / Task

Q: What are the strategic advantages of using a model based on the open-source foundation model 'InternImage-L' for amusement facility object detection?

A: Using a large-scale pre-trained foundation model like 'InternImage-L' as a base maximizes the advantages of transfer learning. Since this model has already learned the ability to extract visual features from massive amounts of general image data, it can be quickly and effectively fine-tuned with relatively little data for the specific domain of amusement facilities to achieve high performance. This is an efficient approach that reduces model development time and costs.

✅ D. Quality / Process Management

Q: Why does the data construction process follow a 4-stage quality management procedure of 'Processing → Review → Reprocessing → Verification'?

A: This 4-stage procedure forms a systematic feedback loop to continuously improve data quality. After the initial 'processing,' errors are identified through expert 'review,' and rejected data is sent back to the 'reprocessing' stage with feedback for correction. After repeating this process to improve data accuracy, 'verification' by external expert organizations ensures objective quality. This iterative improvement and verification process is essential for maintaining consistent, high quality in large-scale data construction projects.

### 07. Inland Wetland Carbon Sink Data

🎯 A. Domain Definition / Purpose

Q: How is building 'Inland Wetland Carbon Sink Data' related to climate change response?

A: This data is built to develop AI models that analyze inland wetland vegetation and water bodies to estimate carbon absorption and storage volumes and monitor their changes. Since wetlands are important carbon sinks, quantitatively evaluating and managing their functions through AI contributes to achieving national greenhouse gas reduction targets and plays a key role in establishing science-based environmental policies for climate change response.

📊 B. Data Structure / Composition

Q: Why does this dataset consist of various types of source data including satellite imagery, drone imagery, and numerical data?

A: Each data type provides complementary roles with different spatial and temporal resolutions and information. Sentinel satellite imagery is advantageous for periodically observing large areas to identify macroscopic changes, while high-resolution drone imagery is suitable for detailed vegetation and terrain analysis of specific areas. By combining numerical data such as precipitation, temperature, and water level, environmental factors that cannot be discerned from imagery data alone can be jointly analyzed to improve the accuracy of carbon absorption estimation models.

🤖 C. AI Model / Task

Q: Why were 'Trans UNet' and 'Modified Trans UNet' used for drone and satellite image analysis respectively?

A: Trans UNet combines a Transformer, which excels at capturing global context in images, with U-Net (CNN-based), which excels at local feature extraction, making it effective for precisely segmenting object regions in high-resolution drone images. For satellite images, which have lower resolution, different spectral characteristics, and more noise from atmospheric effects compared to drone images, 'Modified Trans UNet' with adjusted model structure or preprocessing adapted to these data characteristics is used. This is a strategy of optimizing the model for the unique characteristics of each data source.

✅ D. Quality / Process Management

Q: Why is standard preprocessing using SNAP software performed on Sentinel-1 satellite imagery data?

A: Sentinel-1 is a radar (SAR) satellite whose raw data contains radiometric and terrain-induced geometric distortions, making it unsuitable for direct analysis. By performing standard preprocessing procedures such as radiometric and terrain correction using SNAP, the official software provided by the European Space Agency (ESA), these distortions are removed to obtain Analysis-Ready Data backscatter coefficient values. This is an essential quality management step for ensuring the scientific accuracy of data and consistency across multiple images.

### 08. Chemical Hazard Prediction Data

🎯 A. Domain Definition / Purpose

Q: What practical safety management problem does building 'Chemical Hazard Prediction Data' aim to solve?

A: This data aims to build a model where AI learns the relationships between physicochemical properties (vapor pressure, heat of combustion, flash point) and hazardousness to predict the hazards of unknown substances. This contributes to pre-assessing potential risks of new chemicals with insufficient experimental data, establishing safety management standards at chemical handling sites, and effectively responding to international regulations such as REACH.

📊 B. Data Structure / Composition

Q: What three core physical/chemical properties does this dataset include, and what is the labeling data volume for each?

A: The dataset consists of labeling data for three core properties critical to determining chemical hazardousness: 'vapor pressure' (5,110 records), 'heat of combustion' (5,005 records), and 'flash point' (10,010 records).

🤖 C. AI Model / Task

Q: Why is a 'web-based prediction service' being developed as the final deliverable based on this data, and what value does it provide to users?

A: The web-based prediction service is developed so that users without specialized software or chemistry knowledge (e.g., field safety managers, firefighters) can easily predict and access chemical hazard information. Users simply draw or input molecular structures in a web browser and the AI model instantly predicts hazardousness, maximizing information accessibility. This provides high value by democratizing chemical safety information and supporting rapid field decision-making, directly contributing to accident prevention.

✅ D. Quality / Process Management

Q: Why is chemical hazardousness standardized and managed as 'Hazardous,' 'No Data,' or 'Not Applicable' based on GHS (Globally Harmonized System) information?

A: GHS is an internationally recognized chemical classification and labeling system. Standardizing collected GHS hazard information into clear, consistent labels such as 'Hazardous,' 'No Data,' and 'Not Applicable' is a core data governance activity for ensuring data consistency and quality. Through this process, the AI model learns clearly defined categories rather than ambiguous or inconsistent text information, improving prediction performance and reliability.

#### 💡 QA Sample Characteristics

- •**Balanced knowledge structure:** 8 datasets x 4 types (A, B, C, D) = 32 QAs for equal coverage across all areas
- •**Deep reasoning queries:** Includes logical questions asking "Why" and "How" rather than simple information extraction
- •**Fact-based answers:** Factual information extracted from actual dataset documents to minimize hallucination
- •**Quality management emphasis:** Type D queries enable learning life-safety-centered quality management logic

## V. Prompt Template for Domain LLM Report Generation

This prompt can be used to generate **structured QA dataset reports**
                        when training data documentation from other domains (e.g., robotics, healthcare, autonomous driving, etc.) is provided,
                        enabling the LLM to learn domain-specific expertise.

### Report Generation Prompt Template

`[Instructions]
You are an expert in building specialized QA datasets for fine-tuning large language models (LLMs)
under the Agentic AI Data Scientist (AADS) project. Analyze the content of the [INPUT: Target Document]
presented below and generate a QA report organized by **'Logical Data Groups.'**

**[Report Components]**
1. **Report Title:** Write according to the domain and purpose.
2. **Logical Data Group Identification:** Group documents sharing the same project
   or objective within the document into a single 'logical group.'
3. **QA Pair Generation:** Generate **2** question-answer (QA) pairs per logical group.
4. **Question Type Classification:** Generated QA pairs must be classified into one of the following 4 core types:
   * **A. Domain Definition/Purpose:** Industry problems and business goals the data aims to solve
   * **B. Data Structure/Composition:** Data scale, format, labeling components and distribution
   * **C. AI Model/Task:** Applied algorithms, AI task definition, prediction targets, performance metrics
   * **D. Quality/Process Management:** Data acquisition/processing/validation procedures, labeling criteria, quality standards
5. **Source Citation:** All sentences in answers must clearly cite source documents in [i] format.
6. **Final Statistics:** Compile the **final counts and ratios of A, B, C, D types used**
   across all generated QA pairs.`

**Usage:** This template can be used to automatically generate high-quality QA datasets
                            from training data documentation across various domains (healthcare, autonomous driving, robotics, etc.).

## Pebblous Perspective: Data-Centric Approach in the Era of Social Safety AI

The social safety QA dataset built in this AADS project clearly demonstrates
                            **the difference data quality makes in intelligence**
                            in the era of **Safety AI**.

### 🎯 AADS's Differentiated Approach

•**Balanced knowledge structure:**
                                        Designed with equal 25% distribution across domain definition, data structure, AI model, and quality management
                                        so the LLM acquires unbiased expertise

•**Practice-oriented QA:**
                                        Fact-based question-answers extracted from actual dataset documents across 8 social safety domains
                                        to minimize hallucination

•**Scalable template:**
                                        A reusable structure that can be immediately extended to other domains (manufacturing, healthcare, etc.)
                                        through prompt templates

#### Integration with DataClinic

The high-quality QA dataset built by AADS is combined with **DataClinic's**
                                    data quality diagnosis and cleansing pipeline
                                    to pre-verify and optimize data quality before LLM fine-tuning.

#### Physical AI Strategy

By fine-tuning LLMs to understand **multimodal data** (sensors, images, text)
                                    from manufacturing sites,
                                    we lay the foundation for **AI that interacts with the physical world**.

Through this project, Pebblous has reaffirmed the importance of the
                            **Data-Centric AI** approach.
                            This case demonstrates that true intelligence emerges not by simply scaling model size,
                            but by fine-tuning with **high-quality data imbued with domain expertise**.

## Frequently Asked Questions (FAQ)

### How does AADS build social safety QA datasets?

AADS (Agentic AI Data Scientist) is a data-centric AI agent developed by Pebblous that systematically analyzed actual dataset documents (data descriptions, usage guidelines) in the social safety domain and selected 8 core domains. AADS generated one QA pair each from 4 types (domain definition, data structure, AI model, quality management) per dataset, constructing a total of 32 high-quality question-answers. This is not simple data collection but an intelligent approach designed for the LLM to systematically learn safety domain expertise and quality management logic.

### Why is data quality management particularly important in social safety?

Data quality is more important in social safety than any other field because it directly involves human lives. Asbestos detection errors lead to worker health damage, misdiagnosis of SOC infrastructure cracks can cause bridge and tunnel collapse accidents, and missed amusement ride safety hazards directly lead to user fatality incidents. AADS learns life-safety quality management procedures such as atmospheric correction for hyperspectral imagery, personal information de-identification for CCTV footage, and SSIM-based deduplication for crack patterns, ensuring the reliability of Safety AI. Unlike manufacturing data quality errors that result in product defects, social safety data quality errors cause irrecoverable loss of life.

### What safety areas do the 8 datasets cover?

They cover core areas of social safety including infrastructure safety (rock core drilling, SOC infrastructure cracks), public safety (intelligent CCTV surveillance, amusement ride hazards), construction safety (construction aggregate quality), environmental safety (asbestos detection, inland wetland carbon sinks), and chemical safety (chemical hazard prediction). Through this, the LLM learns expertise across diverse safety domains in a balanced manner.

### What advantages does multimodal data provide for social safety AI?

Accurate judgment in social safety requires combining diverse sensors and data sources. For example, asbestos detection data fuses optical images + VNIR hyperspectral imagery + SWIR hyperspectral imagery, enabling the LLM to learn that 'asbestos is only identifiable at specific wavelength bands, so multimodal Early Fusion is effective.' Inland wetland data integrates satellite imagery + drone imagery + meteorological numerical data to accurately estimate carbon absorption volumes.

### Why is data quality management (Type D) more important in Safety AI?

In Safety AI, both false positives and false negatives are critical. AADS learns life-safety-centered quality management logic such as: 'the AUC 80% target for intelligent CCTV surveillance is to robustly detect anomalous behavior in imbalanced datasets (99% normal, 1% anomalous),' 'the 4-stage quality management (processing-review-reprocessing-verification) for amusement safety data ensures body keypoint accuracy for preemptive fall risk detection,' and 'SSIM below 0.9 frame extraction for SOC infrastructure crack data prevents duplicate similar crack images to avoid model overfitting.' Through this, it can suggest domain-appropriate performance metrics and verification procedures when developing Safety AI.

### Can the prompt template be applied to other safety domains?

Yes, the prompt template is designed to be scalable. The 4 question types for social safety (A: Domain Definition, B: Data Structure, C: AI Model, D: Quality Management) can be extended to industrial safety (manufacturing site hazard detection), transportation safety (autonomous driving risk prediction), food safety (harmful substance detection), and more. The key is accurately reflecting each domain's safety standards and regulatory requirements in Type D queries.

### How does the AADS social safety QA dataset integrate with DataClinic?

DataClinic is Pebblous's data quality diagnosis system that automatically detects quality issues in social safety datasets. For example, when DataClinic diagnoses quality problems such as '87 labeling inconsistencies found in SOC infrastructure crack data,' 'SNR below 3.0 noise detected in specific bands of hyperspectral imagery,' or 'nighttime frame illumination imbalance (standard deviation above 15) in CCTV footage,' AADS learns QA pairs about these issues to propose domain-specific solutions like 'resolve label inconsistencies in SOC crack data through SSIM below 0.9 frame extraction,' 'atmospheric correction + band normalization is essential for hyperspectral imagery,' and 'apply Adaptive Histogram Equalization for nighttime CCTV footage.' This creates a virtuous cycle of DataClinic (quality detection) to AADS (solution learning) to improved safety data reliability, enhancing the deployability of social safety AI.

## Dataset Sources

Source information for the 8 social safety domain datasets analyzed in this report.

[1]**Rock Mass Classification Data Using Borehole Core Samples**  

                                    2023 AI Training Data Usage Guidelines v1.2 / ResNet + Deeplab V3

[2]**Intelligent Surveillance Service CCTV Video Data**  

                                    2024 Hyperscale AI Ecosystem Usage Guidelines V1.0 / 300 Videos (6 Safety Incident Types)

[3]**Construction Aggregate Quality Control Data**  

                                    2023 AI Training Data Usage Guidelines v1.3 / YOLO-OBB (IoU@50, mAP 75%)

[4]**Naturally Occurring Asbestos Detection Data**  

                                    2024 Hyperscale AI Ecosystem Usage Guidelines v1.0 / Optical + VNIR + SWIR Hyperspectral

[5]**SOC Infrastructure Crack Pattern Image Data**  

                                    2023 AI Training Data Usage Guidelines v1.0 / CvT + SegFormer (10 Crack Types)

[6]**Amusement Ride & Facility User Hazard Recognition Data**  

                                    2023 AI Training Data Usage Guidelines v3.5 / InternImage-L Foundation Model

[7]**Inland Wetland Carbon Sink Data**  

                                    Inland Wetland Carbon Sink Data Description (2024) / Sentinel Satellite + Drone + Meteorological Data

[8]**Chemical Hazard Prediction Data**  

                                    Chemical Hazard Prediction Data Description (2024) / GHS-based Hazard Standardization

## 📄 Download Original Report

### Building QA Datasets for AADS LLM Fine-Tuning: Social Safety Domain

Download the original report containing detailed information on 8 social safety domains and 32 QA pairs.

[Download PDF](/project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 사회안전 분야 데이터 품질 관점.pdf)Format: PDF | Date: November 30, 2025 | Pebblous Data Communication Team

### Related Posts
