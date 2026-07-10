---
title: When Robots Learn to Think: The Data Quality Problem (Part 2)
subtitle: AADS Physical AI Approach
date: November 30, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Robots Learn to Think: The Data Quality Problem (Part 2)

_AADS Physical AI Approach_

## 1. Introduction

This report is part of Pebblous's **AADS (Agentic AI Data Scientist)** initiative,
                            documenting **the entire process of building high-quality question-answer (QA) datasets**
                            for developing a custom large language model (LLM) with deep expertise in robotics.
                            This process is a critical step in enabling LLMs to effectively learn and leverage the complexity and expertise of robotics technology.

Systematically generating question-answer pairs from robotics technical documents holds strategically significant value.
                            This goes beyond simple information summarization or extraction -- it is a process of training **LLMs to deeply understand the complex context and technical nuances of a specific domain**.
                            Such meticulously constructed QA datasets serve as decisive factors in enhancing domain comprehension, answer accuracy, and ultimately the reliability of LLMs,
                            forming a solid foundation for domain-specific LLM fine-tuning in data science.

This report first defines the **macro-level blueprint of 13 dataset groups**,
                            then presents a **4-type query framework** for micro-level information extraction.
                            Through the QA samples generated using this systematic approach, we will clearly demonstrate how this dataset structures robotics domain knowledge
                            and is designed to maximize the reasoning capabilities of LLMs.

## 2. Robot Intelligence Dataset Groups and Source Document Summary

This section describes the process of defining **13 core dataset groups** for systematically analyzing and classifying the vast and diverse robotics technical documents.
                            This classification is the first step toward comprehensively covering the broad robotics technology domain and establishing a **structured knowledge base for LLM training**.
                            Each group represents specific robotics technologies, tasks, or environmental data, designed to ensure LLMs acquire balanced and unbiased knowledge.

The table below summarizes the names and key contents of the 13 dataset groups, along with the source documents from which the information was derived, outlining the overall scope and composition of the dataset.

| No. | Dataset Group Name | Key Contents | Source Document |
| --- | --- | --- | --- |
| 1 | 3D Scanned Object Data | Data digitizing objects from various environments (household, industrial, logistics) using 3D scanners, including original shape and visual information | Occluded Object Reasoning Data |
| 2 | Multi-Object Occlusion Environment Data | Data simulating scenarios where multiple objects occlude each other in complex environments such as desks, shelves, and boxes. Includes RGB, Depth, and Point Cloud (PCD) | Occluded Object Reasoning Data |
| 3 | 6D Object Pose Estimation Data | Data containing 3D position (x,y,z) and 3D rotation (R) values needed for robots to precisely manipulate objects | Occluded Object Reasoning Data |
| 4 | Robot-Object Grasping Data | Data recording the process of grasping objects using various robot arms (UR5, Panda) and grippers | Occluded Object Reasoning Data |
| 5 | Human-Object Grasping Data | Data recording how humans grasp everyday objects to help robots learn and imitate human grasping methods | Occluded Object Reasoning Data, Hand-Arm Grasp-Manipulation Data |
| 6 | Robot Hand Object Property Data | Time-series and physical quantity data obtained from a robot hand performing 5 tasks (gripping, rotating, shaking, etc.) on 200 types of household items | Robot Hand Object Property Identification Data |
| 7 | Off-Road Driving Data | 2D image and 3D LiDAR sensor data for delivery robots navigating autonomously in non-road environments such as sidewalks, alleys, and parks | Delivery Robot Off-Road Driving Data |
| 8 | Indoor Multi-Use Facility Driving Data | Driving data collected from quadruped and wheeled robot perspectives in complex indoor public spaces such as restaurants, exhibition halls, and sports facilities | Robot-View Driving Video (Enhanced) Data |
| 9 | SLAM and Path Estimation Data | LiDAR and IMU sensor data used for robots to determine their position and simultaneously build maps (SLAM) | Robot-View Driving Video (Enhanced) Data |
| 10 | Human Activity Recognition Data | Data combining video recordings of human behavior (browsing, using, finishing) at automated service systems like kiosks with user metadata | Human Activity Recognition Robot Autonomous Behavior Data |
| 11 | Hand/Arm Coordinated Manipulation Data | Multimodal data (video, hand joint coordinates, force sensors) recording coordinated hand-arm movements during specific tasks (opening doors, pressing buttons, etc.) | Hand-Arm Coordinated Grasp-Manipulation Data |
| 12 | Service Robot Status and Operations Data | Time-series text (JSON) data recording the real-time status (position, battery, task progress) of various service robots for guidance, delivery, and cleaning | Indoor Space Maintenance Service Robot Data |
| 13 | Robot Error and Preventive Maintenance Data | Data labeling the status and causes of errors (obstacles, collisions, network issues, etc.) occurring during service robot operations | Indoor Space Maintenance Service Robot Data |

****************************************************

The table above clearly shows the overall scope of knowledge for LLM training and the source of each piece of information, supporting the credibility and systematicness of the subsequent QA generation process.

## 3. QA Dataset Query Type Definition

To effectively extract consistent and in-depth information from high-quality source documents, this project defined **4 core query types**.
                            This standardized framework analyzes the technical, business, and managerial aspects of each dataset from multiple angles,
                            serving as an important methodology that guides **LLMs to learn balanced expertise without bias toward any particular aspect**.

The 4 core query types are as follows:

### A. Domain Definition/Purpose

Questions about the domain context and goals, including the industry problems the dataset aims to solve, business purposes, and target applications.
                                Through this, LLMs learn the **strategic value and business purpose** of the data.

### B. Data Structure/Composition

Questions about the physical/logical structure of datasets, including data volume, file formats, labeling attributes, metadata fields, and data distributions.
                                Through this type, LLMs understand the **logical schema and physical layout** of the data.

### C. AI Model/Task

Questions about AI technology application strategy, including applied algorithms, task definitions, model selection rationale, prediction targets, and performance metrics.
                                Through this, LLMs grasp the **modeling tasks and technical utilization strategies** of the data.

### D. Quality/Process Management

Questions about data lifecycle management, including data acquisition, refinement, labeling standards, inspection procedures, and quality management metrics.
                                This type provides information about the **data provenance and quality assurance standards**.

This systematic query type approach serves as the logical foundation for the specific QA samples presented in the next chapter,
                            playing a critical role in ensuring the quality and consistency of the generated dataset.

## 4. QA Dataset Samples by Group

This section presents QA samples generated by applying the 13 previously defined dataset groups and 4 query types.
                            Each sample is based on key information from source technical documents and serves as
                            **a practical example specifying the concrete quality and format of data to be directly used for robotics LLM fine-tuning**.

### 1.
                            3D Scanned Object Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What is the ultimate impact of building the 'Occluded Object Reasoning Data'? | By building the world's largest and highest-quality occluded object dataset, it aims to activate related research and extend robot vision algorithms to diverse real-world environments. It also aims to stimulate relevant industries such as logistics through robot arm object grasping, manipulation, transport, and placement. |
| B | What is the raw data format generated using the Artec 3D Leo tool when collecting 3D scan data? | The Artec 3D Leo tool merges RGB-D object 3D scan raw data and camera parameters into mesh data in 'obj' format. |
| C | What are the candidate models for '6D object pose prediction' that can be trained using the 'Occluded Object Reasoning Data'? | PoseCNN, PVNet, and TemplatePose models are available. PoseCNN is a representative pose estimation model in robot environments, and PVNet was proposed to improve performance in occluded environments. |
| D | What software is used for data calibration during 3D scanning data processing? | After scanning objects with the Artec 3D scanner, data is calibrated using Artec Studio SW. This software supports mesh and point cloud acquisition through its built-in RGB-D merging and post-processing tools. |

****************

### 2.
                            Multi-Object Occlusion Environment Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What real-world robot environments was the 'Multi-Object Occlusion Data' designed to represent? | Data was collected by configuring three representative environments that robots may encounter: desk, shelf, and box environments. IKEA furniture was used specifically to enable researchers worldwide to easily replicate the same environment. |
| B | What information is the raw data of the 'Multi-Object Occlusion Data' set matched with? | The raw data is matched with scene information (scene location type, scene ID, etc.) and object type information (semantic class, instance class, object id, etc.). |
| C | What AI models were considered for 'amodal instance segmentation' that segments objects including occluded regions? | ORCNN, ASN, and UOAIS-Net models were considered. ORCNN was the first proposed model, while ASN and UOAIS-Net achieved the best performance as of 2020 and 2022 respectively. |
| D | What tools were used for labeling refinement of synthetic data? | Labeling refinement was performed using a proprietary synthetic data refinement program built by modifying and improving 'bop_toolkit'. This program automatically generates GT (Ground Truth) and JSON files. |

****************

### 3.
                            6D Object Pose Estimation Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What are the main applications of 6D object pose prediction technology? | It is applied to automation systems requiring precise object recognition and manipulation, such as peg-in-hole assembly and product assembly. It can also be used for object recognition and sequence reasoning in logistics or household service robots. |
| B | How are the 3D Translation and 3D Rotation values, the outputs of 6D object pose prediction, represented? | 3D Translation (T) is expressed as x, y, z coordinates, and 3D Rotation (R) is expressed as quaternion format with x, y, z, w values. |
| C | What was the best-performing 6D object pose estimation model on the BOP dataset as of 2019, and what are its characteristics? | It is the PVNet model proposed by Peng et al. This model is characterized by improving pose estimation performance for occluded objects through per-object Keypoint Vector Field prediction. |
| D | What tools are used for raw data generation and calibration of 6D object pose estimation data, and how is quality ensured? | The Artec 3D Leo tool is used to merge RGB-D scan raw data and camera parameters into mesh (obj) format, and Artec Studio SW's built-in tools are used to calibrate data for high-quality mesh and point cloud acquisition. |

****************

### 4.
                            Robot-Object Grasping Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | How does a robot plan the grasping sequence for occluded objects? | First, the visible regions, occluded regions, and occlusion status of objects are recognized. Then adjacent objects are sequentially grasped and removed until the target object is no longer occluded, and finally the target object is grasped. |
| B | What combinations of robot arms and grippers compose the robot-object grasping data? | Robot arms include UR5 and Panda, combined with various grippers including Robotiq 2f, Robotiq 3f, Allegro, Qb_hand, Suction, RG_2, Panda_gripper, and Delto_3f. |
| C | What CNN-based model was proposed for 6D pose estimation in robot environments, and how does it predict pose? | It is the PoseCNN model proposed by Xiang et al. This model predicts pose by performing regression on per-object Class, Position, and Rotation. |
| D | How were grippers configured during robot-object grasping data collection to enhance data usefulness? | Both general-purpose and domestic grippers were included, covering all types from 1-finger to 5-finger. In particular, the highly utilized 2-finger and 3-finger grippers were represented by 3 and 2 types respectively to enhance data usefulness. |

****************

### 5.
                            Human-Object Grasping Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What is the purpose of collecting human-object grasping data? | The purpose is to record how humans grasp various everyday objects, enabling robots to learn and imitate human grasping and manipulation methods. |
| B | How is human-object grasping data classified by hand state and number of grasped objects? | Hand state is classified as left hand, right hand, or both hands, and the number of grasped objects is classified as 1 or 2 to compose the data. |
| C | What type of AI model is used to classify and understand human hand movements? | An ST-GCN (Spatial-Temporal Graph Convolutional Network) based action classification model is used. It classifies action classes by learning temporal and spatial features in graph form. |
| D | How were experiment participants selected for human-object grasping data collection? | Considering the diversity in hand shape and size, 20 participants with varying gender and age were recruited for data collection. |

****************

### 6.
                            Robot Hand Object Property Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What is the necessity of building the 'Robot Hand Object Property Identification Data'? | It is necessary to rapidly acquire visual information, physical quantities, and time-series data from manipulation to contribute to improving robot intelligence for precise object recognition and manipulation. |
| B | What types of data are built for a single object in the 'Robot Hand Object Property Identification Data'? | Video data (Hi-RGB, Low-RGB, RGB-D), 3D point cloud mesh, physical quantities (weight, size, material), and time-series data (tactile, temperature, force, sound) generated during 5 task executions are built. |
| C | What AI model is used to predict the stable grasping point for a robot hand to grasp an object? | A CNN-based grasp point search algorithm is used. It learns from labeled data of center points, sizes, and angles of graspable positions in images to predict optimal grasping points. |
| D | How are force levels divided during robot hand task data collection? | Force levels are divided into 5 stages (force level 0-4), with each stage performing 10 task executions to secure interaction data under various force conditions. |

****************

### 7.
                            Off-Road Driving Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | Under what social context was the 'Delivery Robot Off-Road Driving Data' built? | It was built to support the development of autonomous driving technology for delivery robots as an alternative to address the surge in parcel volume due to contactless transactions, labor shortages, and delivery app commission burdens. |
| B | What classes are targeted for segmentation processing in the 2D image data of the 'Delivery Robot Off-Road Driving Data'? | A total of 22 classes are processed, including major classes such as passenger cars, pedestrians, roads, sidewalks, crosswalks, buildings, and vegetation. |
| C | What model was selected to recognize Drivable Area based on 2D image data, and what was the selection rationale? | The ERF-PSPNet model was selected because it was determined to outperform LinkNet by using an efficient Deep Architecture. |
| D | What measures are taken for privacy protection during data collection? | De-identification measures are applied to all faces (elliptical blur) and vehicle license plates (automatic blur) appearing in the collected data. |

****************

### 8.
                            Indoor Multi-Use Facility Driving Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | In what fields can the 'Robot-View Driving Video Data' be utilized for technology development? | It can be utilized for autonomous driving and real-time data processing research, sensor and algorithm development for autonomous robots, and advancement of autonomous driving technology for guide/cleaning/transport robots. |
| B | What types of sensor data compose the 'Robot-View Driving Video Data', and what are their formats? | It consists of RGB-D image data (JPG, PNG), LiDAR data (PCD), and 6D IMU sensor data (CSV). |
| C | What learning algorithm was used for validating 3D object detection with this dataset, and what are its characteristics? | The FocalsConv (OpenPCDet) algorithm was used. It combines RGB features from 2D images with LiDAR features and additionally uses depth maps to detect 3D objects. |
| D | What inspection procedures are followed to improve labeling data quality? | A total 3-stage inspection process is followed: cross-inspection between workers (stage 1), manager visual verification and error reassignment (stage 2), and final inspection (stage 3). |

****************

### 9.
                            SLAM and Path Estimation Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What is the purpose of SLAM technology, and how does this dataset contribute? | SLAM is a technology for robots to estimate their position and build maps in unknown environments. This dataset provides LiDAR and IMU data for validating the effectiveness of SLAM algorithms. |
| B | What is the file format of data used for SLAM performance validation? | The bag file format used in ROS environments is used. Time-series data from multiple sensors such as LiDAR and IMU are stored with timestamps. |
| C | What algorithm was used for SLAM performance validation, and how is performance measured? | The Fast-LIO2 algorithm was used, and performance is measured by 'End to End RMSE (Root Mean Square Error)'. (Target: within 0.2m) |
| D | How is temporal synchronization between multiple sensors (RGB-D, LiDAR, Metadata) achieved during data collection? | Temporal synchronization is performed through software synchronization during multi-sensor data logging, and source data is generated by slicing according to configured intervals. |

****************

### 10.
                            Human Activity Recognition Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What problems faced by digitally vulnerable populations can the 'Human Activity Recognition Robot Autonomous Behavior Data' help solve? | It is used to address difficulties faced by visually impaired people, elderly, and wheelchair users when using kiosks. Robots can recognize user status to provide customized UI or automatic height adjustment features. |
| B | What user metadata is included in the JSON files of this dataset? | It includes user information such as encrypted user ID, age (youth/adult/elderly), height, gender, and disability status, as well as environmental information such as service location and camera height. |
| C | What AI technology development can this data directly contribute to? | It is used for developing user state recognition and behavior prediction models where robots identify human behavior (browsing, using, finishing) and characteristics to provide customized services. |
| D | How was the data collection environment configured? | Data was collected by selecting 10 types of environments similar to actual service environments, including transportation facilities, medical facilities, and educational facilities. |

****************

### 11.
                            Hand/Arm Coordinated Manipulation Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | In which areas of robotics can the 'Hand-Arm Coordinated Grasp-Manipulation Data' be utilized? | It can be utilized for developing intelligent robots requiring human-like movements such as household assistance robots and industrial collaborative robots, as well as metaverse-based virtual object interaction media production. |
| B | What key attributes related to hand movements are included in the labeling data (JSON) of this dataset? | It includes hand joint 2D/3D coordinates, hand approach direction, number of fingers used, fingertip object contact points, and fingertip force data. |
| C | What AI model is used for human hand movement classification, and how does it process data? | The ST-GCN model is used. It represents hand and arm joint data in graph form and classifies actions by learning connectivity between joints and temporal changes. |
| D | How were lighting conditions set to ensure data diversity for hand movement data? | Smart lighting was used to adjust brightness and color, with a total of 10 different lighting conditions set for data collection. |

****************

### 12.
                            Service Robot Status and Operations Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What is the purpose of building the 'Indoor Space Maintenance Service Robot Data'? | The purpose is to develop data analysis systems and learning models that can predict failures in advance and perform preemptive maintenance based on service robot status and operations data. |
| B | What robot status information does the 'deviceData' object in this dataset's JSON files contain? | It includes the robot's main status, battery level, charging status, obstacle detection level, collision level, emergency stop button status, location information, and total operation information. |
| C | What AI model is used for predicting robot operational status, and why? | The transformer-based 'LLama3.2-3B-instruct' model is used. It is optimized for processing sequence data to predict next states, and it balances performance and efficiency. |
| D | What are the main tasks performed during the data refinement process? | Source data format definition and field refinement, data classification by robot ID, filtering of non-operational hours data, mapping, and JSON conversion are performed. |

****************

### 13.
                            Robot Error and Preventive Maintenance Data

📝 View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| A | What value does robot error and preventive maintenance data provide to service robot operating companies? | It is used for developing AI algorithms that analyze causes of robot abnormal states and predict failures in advance, minimizing robot downtime and maximizing operational efficiency. |
| B | How are robot abnormal states classified by error codes? | They are classified into 8 categories: obstacle error, collision detection error, battery error, emergency stop error, elevator error, automatic door error, network error, and robot SW error. |
| C | What learning model was used to predict robot error occurrence, and what is the performance metric? | A Decision Tree model was used, and the performance metric is 'Accuracy'. |
| D | What criteria determine a robot's normal/abnormal state during data labeling? | It is determined based on whether the robot is performing assigned tasks normally. If in an abnormal state, it is assigned to one of the 8 error categories for labeling. |

****************

## 5. Final QA Type Statistics

A total of **52** question-answer pairs were constructed across
                        **13** robot data groups for LLM training data generation.
                        The query type statistics reflecting the Physical AI characteristics of robot intelligence are as follows.

| Query Type | Definition | Count | Ratio |
| --- | --- | --- | --- |
| A. Domain Definition/Purpose | Business value, utilization goals, problems to solve | 13 | 25.0% |
| B. Data Structure/Composition | File formats, metadata structure, data schema | 13 | 25.0% |
| C. AI Model/Task | Algorithms used, performance metrics, learning tasks | 13 | 25.0% |
| D. Quality/Process Management | Data collection, labeling, inspection processes | 13 | 25.0% |
| Total | 52 | 100.0% |  |

****************

#### 💡 Key Features

Questions are **evenly distributed** across the 4 core aspects of robot datasets --
                            **Domain Definition/Purpose, Data Structure/Composition, AI Model/Task, and Quality/Process Management** --
                            designed so that LLMs learn **balanced expertise** across all domains.
                            This enables development into a systematic and practical AI data scientist from a data quality perspective.

## 6. Prompt Template for Domain LLM Report Generation

This prompt can be used to generate **structured QA dataset reports**
                        when given training data documents from other domains (e.g., manufacturing, healthcare, autonomous driving),
                        enabling LLMs to learn the specialized knowledge of those domains.

### Report Generation Prompt Template

`[Instructions]
You are an expert in building specialized QA datasets for Large Language Model (LLM) fine-tuning
as part of the Agentic AI Data Scientist (AADS) project. Analyze the content of the
[INPUT: Document for Analysis] presented below and generate a QA report organized by
**'Logical Data Groups'**.

**[Report Components]**
1. **Report Title:** Write according to domain and purpose.
2. **Logical Data Group Identification:** Group documents sharing the same project or goal
   into a single 'logical group'.
3. **QA Pair Generation:** Generate **4** question-answer (QA) pairs for each logical group.
4. **Query Type Classification:** Generated QA pairs must be classified into one of the following 4 core types:
   * **A. Domain Definition/Purpose:** Business value, utilization goals, industry problems to solve
   * **B. Data Structure/Composition:** File formats, metadata structure, data schema and logical layout
   * **C. AI Model/Task:** Algorithms used, performance metrics, learning tasks and technical strategy
   * **D. Quality/Process Management:** Data collection, labeling, inspection processes and quality assurance standards
5. **Source Citation:** All sentences in answers must clearly cite the source document.
6. **Final Statistics:** Summarize the **final count and ratio of all 4 types (A, B, C, D)** used
   across all generated QA pairs.`

**Usage:** Use this template to automatically generate high-quality QA datasets
                            from training data documents across various domains (healthcare, autonomous driving, manufacturing, etc.).

## 7. Pebblous Perspective: Data-Centric Approach for the Physical AI Era

The robotics QA dataset built through this AADS initiative clearly presents
                            **the systematic perspective an AI data scientist should possess**,
                            centered on **data quality evaluation**.

### 🎯 A Differentiated Data Quality-Centric Approach

•**Balance across 4 quality aspects:**
                                        Designed with 25% equal distribution across domain purpose, data structure, AI model, and quality management aspects,
                                        enabling LLMs to evaluate data quality from multiple angles

•**Quality metric-focused QA:**
                                        Covers specific performance metrics like mAP, mIoU, F1-score, RMSE, and Accuracy,
                                        along with multi-stage inspection processes to strengthen practical quality management capabilities

•**Data lifecycle understanding:**
                                        Systematically learns quality management touchpoints across the entire
                                        collection-refinement-labeling-inspection pipeline to build data quality diagnostic capabilities

### 🚀 Core of Data Quality Evaluation: Multi-Layered Verification

Robot dataset quality requires multi-layered verification across
                                **sensor synchronization, labeling consistency, data diversity, and performance metrics**.

AADS has systematized each dataset's quality management processes, inspection criteria, and performance measurement methods
                                through **Type D: Quality/Process Management QA**,
                                designed so that LLMs go beyond simply describing data to diagnose
                                **"Is this data quality sufficient? How can it be improved?"**

## 8. Frequently Asked Questions (FAQ)

### How does AADS build robotics QA datasets?

AADS analyzes robot dataset documents from AI Hub and groups documents sharing
                                the same project goals into 'logical data groups'. For each group, it generates
                                4 QA pairs (one from each of the 4 query types), resulting in 52 high-quality
                                question-answer pairs.

### How do robot datasets differ from manufacturing datasets?

Robot datasets are characterized by **sensor diversity** (RGB-D, LiDAR, tactile, IMU, etc.)
                                and **real-time decision-making** requirements.
                                In contrast, manufacturing datasets focus on quality inspection and predictive maintenance.
                                AADS builds QA datasets reflecting the characteristics of each domain.

### What are the most important robot datasets?

The **Occluded Object Reasoning dataset** and the **Delivery Robot Off-Road Driving dataset**
                                are critical. The former is essential for verifying robot perception capabilities (occlusion handling),
                                while the latter validates driving capabilities (off-road environments).
                                Both datasets require multimodal sensor fusion.

### What advantages does multimodal data provide for LLM fine-tuning?

Multimodal data (sensor values + images, LiDAR + RGB) helps LLMs
                                **comprehensively understand the physical phenomena** of robots.
                                For example, delivery robot data combines 2D images (drivable area) and 3D LiDAR (dynamic object detection),
                                enabling LLMs to learn multidimensional knowledge such as
                                "speed should be reduced on uneven sidewalks."

### How does the AADS QA dataset integrate with DataClinic?

The QA datasets generated by AADS are closely integrated with **DataClinic's data quality diagnostic pipeline**.
                                When DataClinic automatically detects sensor data outliers, labeling errors, or imbalanced distributions,
                                AADS can learn QA pairs about those quality issues and suggest
                                **practical solutions** such as "a specific filter should be applied to reduce noise in this LiDAR data."

## 9. Related Dataset Sources

Source information for the 13 robotics datasets analyzed in this report.

[1]**3D Scanned Object Data**  

                                    mAP performance metric / 200,000 RGB-D images / Label accuracy verification

[2]**Multi-Object Occlusion Environment Data**  

                                    mAP-based quality evaluation / 3-stage inspection (cross-validation, supervisor review, final inspection)

[3]**6D Object Pose Estimation Data**  

                                    100+ object types / Point Cloud + RGB-D / 6D Pose Annotation quality verification

[4]**Robot-Object Grasping Data**  

                                    F1-score above 0.9 / Force sensor data / Diverse grasping scenarios

[5]**Human-Object Grasping Data**  

                                    1,000+ hours of hand motion data / 3D hand joint coordinates / Labeling consistency verification

[6]**Robot Hand Object Property Data**  

                                    200 household items / Weight, material, texture classification / 10 lighting conditions

[7]**Off-Road Driving Data**  

                                    50,000 images / Semantic Segmentation + 3D LiDAR / Clear/rain/snow conditions

[8]**Indoor Multi-Use Facility Driving Data**  

                                    mIoU-based Segmentation quality evaluation / 3-stage inspection process

[9]**SLAM and Path Estimation Data**  

                                    ROS bag files / Fast-LIO2 algorithm / Target RMSE within 0.2m

[10]**Human Activity Recognition Data**  

                                    10 service environments / Skeleton Keypoint / Accessibility-optimized UI

[11]**Hand-Arm Coordinated Manipulation Data**  

                                    ST-GCN model / Hand joint 2D/3D coordinates / 10 lighting conditions

[12]**Service Robot Status and Operation Data**  

                                    LLama3.2-3B-instruct model / deviceData JSON / Non-operating hours data filtering

[13]**Robot Error and Preventive Maintenance Data**  

                                    Decision Tree model / 8 error code classifications / Accuracy-based performance evaluation

## 10. Conclusion

This report has detailed the process of systematically defining **13 dataset groups**
                            from diverse robotics technical documents and successfully building high-quality QA datasets for LLM fine-tuning
                            by applying **4 standardized query types**. Through this approach, we have structured
                            vast robotics technical knowledge and established consistent, reliable information assets that LLMs can learn from.

The strategic significance of this dataset is substantial. As a core asset of the **AADS initiative**,
                            it will serve as a cornerstone for developing specialized LLMs that deeply understand the complex contexts
                            and technical nuances of the robotics domain.
                            The constructed dataset goes beyond simple information retrieval — it enables multi-faceted reasoning about
                            causes of robot anomalies, planning optimal grasping sequences in complex occlusion environments,
                            and predicting user behavior to provide proactive services,
                            making a decisive contribution to realizing a true **Agentic AI Data Scientist**.

As for future plans, we will proceed with large-scale expansion of the full dataset based on the QA samples
                            presented in this report. We plan to begin full-scale LLM fine-tuning experiments using the completed dataset
                            and validate performance in the robotics domain. Furthermore, through continuous data quality management
                            and model performance evaluation, we will progressively enhance the capabilities of AI specialized for the robotics domain.

## 📄 Download Original Report

### Building QA Datasets for Robotics LLM Fine-Tuning: AADS

Download the original report containing detailed analysis of 13 datasets and 52 QA pairs in the robotics intelligence domain.

**Includes all QA pairs from the web page** along with additional analysis materials and source text.

[Download PDF](/project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 로봇 분야 데이터품질 관점.pdf)Format: PDF | Date: November 30, 2025 | Pebblous Data Communication Team
