---
title: The Data Behind Robots That Learn to Think
subtitle: AADS Physical AI Approach
date: November 30, 2025
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Data Behind Robots That Learn to Think

_AADS Physical AI Approach_

## I. Introduction & Objectives

This report introduces **52 QA (Question-Answer) pairs** built from actual AI Hub dataset documentation
                            under the **Agentic AI Data Scientist (AADS)** project,
                            with the goal of **enhancing LLM domain expertise in robotics intelligence**.

Pebblous reorganized **13 robotics datasets** into "logical data groups" and
                            systematically generated QA pairs in **4 types (Simple Information Extraction, Summary & Explanation, Comparison & Analysis, Reasoning & Application)**
                            for each group. This design enables LLMs to understand
                            **the entire lifecycle of Physical AI**, from robot data collection to AI model training and quality management.

The dataset covers core areas of robotics intelligence including **occluded object reasoning, delivery robot off-road navigation, driving video, indoor space maintenance, object property identification,
                            grasp-manipulation actions, and human activity recognition**,
                            and is structured for immediate practical use through Few-Shot Learning and prompt engineering.

#### Original Report Guide

This web page contains all **52 core QA pairs across 13 robot datasets**.
                            For more detailed analysis and original text, please [download the PDF report](#pdf-download) at the bottom.

## II. QA Dataset Overview

#### 13

Robot Data Groups

#### 52

QA Pairs (4 per group)

#### 25%

Equally Distributed per Type

A total of **52 QA pairs** were constructed for
                            **13 robot data groups**.
                            Each group covers core Physical AI functions including robot perception, navigation, manipulation, and maintenance.

The QA pairs are **equally distributed at 25% each** across
                            the four types: **Simple Information Extraction, Summary & Explanation, Comparison & Analysis, and Reasoning & Application**,
                            designed to enable LLMs to learn comprehensive knowledge across all areas of robot data science.

## III. QA Construction Based on Robot Intelligence Datasets

The robotics intelligence field demands high data quality due to
                            **sensor data diversity** and
                            **real-time decision-making requirements**.
                            AADS analyzed 13 robotics datasets from AI Hub and generated 4 types of QA pairs tailored to each dataset's characteristics.

Each dataset was systematically documented across four dimensions:
                            **Domain Definition** (data collection purpose and structure),
                            **Data Structure** (labeling methods and environments),
                            **AI Models** (learning algorithms and applications), and
                            **Quality Management** (validation criteria and performance metrics).

### 1.
                            Occluded Object Reasoning Dataset

#### 1-1. Overview & Structure

For robots to perform missions in real industrial and living spaces beyond controlled laboratory environments, the ability to cope with unpredictable complexity is essential. In particular, occlusion -- where a target object is partially or fully hidden by other objects -- is one of the greatest challenges in robot vision technology. The 'Occluded Object Reasoning Dataset' is key data for solving this problem, with strategic importance in training robots to accurately infer the complete shape and position of objects from incomplete visual information alone. This dataset serves as the cornerstone of foundational technology that directly contributes to advancing sophisticated object recognition, grasping, and manipulation capabilities, from picking robots in logistics facilities to assembly robots in smart factories.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | Which lead organization and participating organizations were responsible for data collection in the 'Occluded Object Reasoning Data' construction project? | The lead organization is 'Saram-gwa-Sup,' and the participating organizations are 'Gwangju Institute of Science and Technology (GIST)' and 'Hanaleum Information.' |
| Summary & Explanation | Please describe the four major data types that constitute the folders of this dataset. | The dataset consists of four major folders: 'Object 3D Scan Data,' 'Multi-Object Occlusion Data,' 'Robot-Object Grasping Data,' and 'Human-Object Grasping Data.' |
| Comparison & Analysis | Compare the objects in the 'Industrial' category with those in the 'Logistics' category included in the dataset, and analyze the characteristics of each category. | The 'Industrial' category consists of individual functional objects such as 'parts,' 'tools,' and '3D printed parts' (e.g., brackets, spanners, gearboxes). In contrast, the 'Logistics' category centers on commercialized objects designed for packaging and transport, such as 'Amazon logistics,' 'cardboard-type packages,' and 'box-type packages' (e.g., crayon boxes, CPU boxes). This reflects the distinct characteristics of different robot application fields: assembly/maintenance in industrial settings vs. picking/sorting in logistics settings. |
| Reasoning & Application | To achieve the stated impact of 'revitalizing related industrial fields such as logistics through robot arm object grasping, manipulation, transport, and placement,' please infer what specific problems this data can contribute to solving. | In logistics settings, products of various sizes and shapes are often randomly stacked in boxes or overlapping on shelves. This dataset trains robots to accurately infer the complete shape and position (6D Pose) of occluded products, enabling them to plan grasping sequences by determining which products must be removed first to reach the target. This directly contributes to revitalizing the logistics industry by reducing picking task failure rates and maximizing automation efficiency. |

****************

The next section examines the data collection environment and tools that ensure the quality of this critical data in greater detail.

#### 1-2. Collection Environment & Tools

The value of AI training datasets is determined not only by the volume of data but also by its quality and reproducibility. In particular, to ensure generalization performance of robot vision models, the specific specifications of the collection environment, location, and tools used are critically important. This prevents AI models from overfitting to specific environments and enables robust performance across diverse real-world situations. Therefore, information about the standardized collection environment and precision tools used in building the 'Occluded Object Reasoning Dataset' is a key factor in enhancing dataset reliability.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What is the model name of the 3D scanner used for data collection? | The Artec 3D Leo tool was used to generate RGB-D object 3D scan raw data. |
| Summary & Explanation | Please summarize three key features of the 'Multi-Object Occlusion Data' collection environment. | The key features are as follows. First, three representative robot environments were configured: desk, shelf, and box. Second, data diversity was ensured by equally utilizing 5 furniture pieces and 5 backgrounds per environment. Third, IKEA furniture was used so that researchers worldwide could replicate the same environment. |
| Comparison & Analysis | Analyze the diversity of grippers used in robot-object grasping data collection, and explain the positive impact of this selection on the dataset's usefulness. | The dataset achieved morphological diversity by including 1-finger (1 type), 2-finger (3 types), 3-finger (2 types), 4-finger (1 type), and 5-finger (1 type) grippers. In particular, 2-finger and 3-finger grippers, which are most commonly used in research, were used in 3 and 2 variants respectively to increase data density. This configuration enables the development of universal grasping algorithms applicable to various robot hands without overfitting to specific gripper types, significantly enhancing the dataset's practical usefulness. |
| Reasoning & Application | It was mentioned that various lighting conditions, camera viewpoints, and types were used during data collection. If a robot trained with this dataset were deployed in an actual logistics warehouse with dim lighting or heavy shadows, what performance could be expected? | As stated in the source context, the data was acquired under various lighting conditions. Therefore, robot vision algorithms trained on this data are expected to exhibit robust performance against illumination changes. Even in actual logistics warehouse environments with dim or shadow-heavy lighting, there is a high likelihood of more stable extraction and recognition of object feature points, which can directly lead to improved grasping success rates. |

****************

Next, we examine what learning models can be developed and applied based on this systematically collected data.

#### 1-3. Learning Models & Applications

The ultimate value of a high-quality dataset is realized when it contributes to solving real industrial problems through superior AI models. A dataset alone is merely potential; its value can only be realized through learning models that interpret and utilize it. This section analyzes representative AI models used to validate the effectiveness and maximize the utilization potential of the 'Occluded Object Reasoning Dataset.' By illuminating the concrete application services that can be realized, we explore how data is transformed into practical technology.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | Among the models used for 'amodal instance segmentation,' what is the name of the GIST-developed model selected as the best-performing model as of 2022? | It is UOAIS-Net. This model was proposed to detect occluded regions of unseen objects as well. |
| Summary & Explanation | Please explain the key principle by which the 6D Object Pose Estimation model 'PVNet' improves performance in occluded environments. | PVNet improves performance through per-object Keypoint Vector Field prediction. That is, by having each pixel in the image predict a direction vector pointing toward a specific keypoint of the object, the positions of occluded keypoints can be estimated through pixel voting from visible parts, even when portions of the object are hidden, thus improving occluded object pose estimation performance. |
| Comparison & Analysis | What is the most significant structural difference between instance segmentation models Mask R-CNN and SOLOv2, and how does this difference affect efficiency? | The biggest difference is that Mask R-CNN has a 'two-stage' architecture while SOLOv2 has a 'single-stage' architecture. The two-stage Mask R-CNN first extracts region proposal candidates and then predicts masks for each candidate region. In contrast, the single-stage SOLOv2 processes both steps simultaneously. Due to this structural difference, SOLOv2 achieves faster prediction speed by eliminating the inefficiencies of the two-stage architecture. |
| Reasoning & Application | Based on GIST AILAB's 'Robot Occluded Object Grasping Sequence Planning' application service example, infer how applying this technology to a smart factory parts assembly line could improve productivity. | In parts assembly lines, various components are often stacked and overlapping in parts bins. Applying the technology presented in the source context, when a target part is occluded by other parts, the robot arm can accurately recognize occluded and visible regions and autonomously determine which parts to remove first to reach the target, planning the sequence accordingly. This eliminates the need for human intervention to rearrange parts and reduces robot idle time, significantly improving productivity by shortening the overall assembly line cycle time. |

****************

Having covered object recognition in logistics and industrial environments, the next chapter continues the discussion by examining the characteristics of another key dataset: 'Delivery Robot Off-Road Navigation Data.'

### 2.
                            Delivery Robot Off-Road Navigation Dataset

#### 2-1. Overview & Labeling

As the autonomous navigation domain for robots expands beyond well-maintained 'roads' to 'off-road' environments with many unpredictable elements such as sidewalks, parks, and indoor spaces, new types of datasets are becoming essential. Off-road environments contain complexities that cannot be addressed by conventional road driving data, including unspecified pedestrians, various types of obstacles, and unclear boundaries. This section analyzes the overview of the 'Delivery Robot Off-Road Navigation Dataset' and its core components: the labeling class definitions for 2D and 3D data. Through this, we describe the importance of how this dataset enables AI to structurally understand the complexity of off-road environments.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What is the labeling type of the 3D LiDAR data, and how many processing target classes are defined in total? | The labeling type is 'Cuboid,' and there are 9 processing target classes in total: 'passenger car,' 'motorcycle,' 'bicycle,' 'kickboard,' 'pedestrian,' 'bus,' 'truck,' 'other dynamic objects,' and 'other static objects.' |
| Summary & Explanation | Among the Semantic Segmentation processing principles for 2D image data, how are cases handled where the same object is occluded by another object (Area A) or where pedestrians with expected sudden behavior are occluded (Area B)? | For Area A, the same object is divided into two regions and annotated separately. For Area B, pedestrians who pose a safety risk are processed with the 'is_crowd' (occluded) attribute, enabling the robot to recognize and prevent potential dangers. |
| Comparison & Analysis | Compare the 2D processing target classes (22 types) with the 3D processing target classes (9 types), and analyze the reasons for the difference in relation to sensor characteristics. | 2D classes are rich in information about the surrounding environment and background such as 'road,' 'sidewalk,' 'signs,' 'traffic lights,' and 'buildings,' while 3D classes focus primarily on dynamic or static 'objects' such as 'passenger cars' and 'pedestrians.' This is due to the information collection characteristics of each sensor. 2D images are advantageous for recognizing planar environmental information such as drivable areas and signs through color and texture information, while 3D LiDAR has greater strength in accurately detecting the position and size of three-dimensional objects through distance and shape information. In other words, the labeling targets were optimized according to each sensor's information collection method. |
| Reasoning & Application | The JSON structure of the labeling data includes a 'sidewalk_flatness' (road surface flatness) attribute. Infer how delivery robots could utilize this attribute data for safer and more efficient navigation. | Delivery robots can learn from 'sidewalk_flatness' data to proactively identify sections with 'low' flatness. This allows them to autonomously decelerate before entering such sections or switch to a driving mode that minimizes vibration, reducing the risk of damage to items being delivered. Additionally, as this information accumulates, it can enhance path planning algorithms that prioritize the smoothest routes, contributing to long-term reduction of mechanical wear on robots and maintenance cost savings. |

****************

Since data quality largely depends on the collection location and environment, the next section provides a detailed analysis of where and how this dataset was collected.

#### 2-2. Collection Locations & Environment

For AI models to be universally applicable across diverse real-world environments rather than becoming 'greenhouse flowers' that only work in specific settings, securing comprehensiveness and realism from the data collection stage is paramount. The choice of data collection locations directly determines dataset diversity, which is ultimately the key variable that determines an AI model's generalization performance. This section analyzes the environmental characteristics of the specific locations where the 'Delivery Robot Off-Road Navigation Dataset' was collected, evaluating the strategic significance of how these location selections guarantee the dataset's realism and how well they reflect the actual challenges robots will face.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | Among the data collection locations, which location enabled free autonomous driving operation through a regulatory sandbox? | It is Sejong Central Park. |
| Summary & Explanation | Please explain from two perspectives why 'Bukchon Hanok Village' is considered an optimal location for verifying off-road environment driving robots. | First, it includes both narrow roads where vehicles can pass and alley environments where vehicle entry is restricted, enabling testing of various off-road conditions. Second, as a complex cultural heritage area where residential and commercial zones coexist, it provides a realistic environment with diverse types of pedestrians and static/dynamic obstacles. |
| Comparison & Analysis | Compare the environmental characteristics of the outdoor collection location 'Insadong' and the indoor collection location 'Naver New Headquarters (1784),' and analyze what different challenges each location presents for robot autonomous driving technology verification. | 'Insadong' is alley-centric with very high pedestrian density, focusing on verification of dynamic obstacle avoidance technology for safe navigation while avoiding unpredictable movements among numerous unspecified pedestrians. In contrast, 'Naver New Headquarters' is a refined indoor space where actual robot services operate, suitable for verification of more precise SLAM and localization technologies, including accurate recognition of narrow corridors, glass walls, and indoor structures, and building continuous indoor-outdoor driving datasets. |
| Reasoning & Application | This dataset was collected during 'summer' and 'autumn.' If a robot trained with this data were operated in off-road environments during a snowy 'winter,' what potential problems could arise, and what additional data would be needed to resolve them? | According to the given information, data was only collected during summer and autumn. Therefore, in winter, snow would blur the distinction between lanes, sidewalks, and curbs, and LiDAR sensors could misidentify snow as obstacles or suffer performance degradation due to diffuse reflection. Additionally, pedestrian walking patterns (slipping, etc.) would differ. Consequently, driving performance in winter could be significantly degraded with the current dataset alone. To resolve this, winter-specific driving data (images and LiDAR) from snow-covered environments, snowy conditions, and icy roads should be additionally collected along with corresponding labeling data (e.g., adding 'snow-covered sidewalk' and 'icy road' classes) for model retraining. |

****************

Next, we explore the learning models developed and verified using data collected from these diverse environments, and their application potential.

#### 2-3. Learning Models & Applications

The effectiveness of a dataset is ultimately proven through AI model performance and real-world application potential. No matter how vast and diverse the data, it merely occupies storage space without models that can effectively learn from and utilize it. This section analyzes the 2D and 3D learning models selected to validate the 'Delivery Robot Off-Road Navigation Dataset.' We evaluate the technical value of the data through each model's selection rationale and development details, and assess the industrial value by examining the specific application services that can be realized through these models.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | Among the 3D dynamic object detection model candidates, which model was not finally selected due to poor performance reproducibility of its open-source code? | It is the BtcDet model. |
| Summary & Explanation | Please describe the development details of 'ERF-PSPNet,' which was selected as the 2D driving environment recognition model. | This model takes 2D RGB images as input and outputs pixel-wise recognition results for road, sidewalk, curb, crosswalk, and indoor floor surfaces relevant to robot autonomous driving, identifying drivable areas. |
| Comparison & Analysis | While 'PointPillars' was selected as the 3D dynamic object detection model, 'VoxelRCNN' was not selected. Compare and analyze the selection and non-selection rationale that can estimate the performance difference between the two models. | PointPillars was selected because it showed good performance on the KITTI dataset with high performance reproducibility, suggesting stable detection performance even in environments with various objects. In contrast, VoxelRCNN was not selected because it exhibited degraded performance when detecting multiple objects simultaneously, which was deemed unsuitable for delivery robot missions that require simultaneous processing of multiple dynamic objects (pedestrians, bicycles, etc.) in complex off-road environments. |
| Reasoning & Application | Assume we combine the drivable area recognition model and dynamic object detection model developed with this dataset and apply them to a 'patrol robot in a park environment.' Infer how this robot could perform its patrol mission more safely and intelligently. | The drivable area recognition model helps the robot clearly distinguish sidewalks, grass, and bicycle paths within the park to patrol stably without deviating from designated routes. Simultaneously, the dynamic object detection model detects and predicts dynamic objects in real time, such as suddenly running children, fast-passing bicycles, and people playing ball. Through the combination of these two models, the patrol robot can go beyond simply following a path to make intelligent decisions such as proactively recognizing dangerous situations and autonomously stopping or detour to safe routes, ensuring the safety of park visitors while performing patrol missions. |

****************

In the next chapter, we deepen the discussion by analyzing the characteristics of 'Robot-View Driving Video Data,' which focuses more on complex indoor environments as well as outdoor ones.

### 3.
                            Robot-View Driving Video Dataset

#### 3-1. Overview & Class Distribution

As the operating environment of autonomous robots expands beyond outdoors to complex indoor multi-use facilities such as restaurants, shopping malls, and terminals, the importance of data for understanding and interpreting the world from a robot's perspective is growing. Indoor environments pose significant challenges for robot navigation due to frequent lighting changes, dense dynamic obstacles like people, and numerous unpredictable static obstacles (chairs, tables, etc.). This section analyzes the core data composition of the 'Robot-View Driving Video Dataset' designed to address these challenges, evaluating the dataset's realism and balance by examining class statistics that reflect the object distribution in real environments.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What are the three sensor data formats included in the source data of the 'Robot-View Driving Video Data'? | They are PCD (LIDAR data), CSV (6D IMU Sensor data), and PNG (RGB-D Depth data). |
| Summary & Explanation | Describe the two types of robots used to collect data for this dataset, and provide the data construction ratio for each. | Data was collected using a quadruped walking robot (RB1) and a wheeled driving robot (RB2). The data construction ratio is 45.92% (68,980 items) for the quadruped robot and 54.08% (81,249 items) for the wheeled robot. |
| Comparison & Analysis | What are the top 3 locations with the highest composition ratios and the bottom 3 locations with the lowest composition ratios in the collection location distribution, and how can the dataset's collection environment characteristics be analyzed through this? | The top 3 locations are medium-sized restaurants (9.53%), banks (9.50%), and terminals (9.38%), while the bottom 3 are large marts (6.60%), exhibition halls (7.09%), and indoor parking lots (7.52%). This distribution shows a relatively even spread between 6.6% and 9.53% without bias toward any specific environment, indicating the intent to ensure data diversity and balance so that robots can be universally deployed across various indoor multi-use facility environments. |
| Reasoning & Application | Among static object classes, 'chairs' account for 22.29% and 'pillars' for 9.76%, while the dynamic object 'people' holds an overwhelming 51.41%. What strengths can be inferred for a robot trained with this data during indoor autonomous driving? | According to the source context, 'people,' 'chairs,' and 'pillars' are the most commonly encountered dynamic and static obstacles in indoor environments. The abundance of data for these classes means the robot will specialize in avoiding unpredictable human movements, navigating through randomly arranged chairs, and reliably recognizing fixed structures like pillars. Therefore, this robot can be expected to demonstrate excellent avoidance maneuvers and path planning capabilities even in complex indoor environments with many people and obstacles, such as crowded restaurants or lobbies. |

****************

Next, we examine the verification environment and models used to ensure the quality and validity of this dataset.

#### 3-2. Verification Environment & Models

Dataset reliability cannot be achieved simply by collecting large volumes of data. Its technical completeness is only proven through rigorous verification procedures conducted with objective performance metrics and standardized hardware and software environments. This section details the hardware and software environments configured to validate the 'Robot-View Driving Video Dataset.' Additionally, we analyze the state-of-the-art learning algorithms used to evaluate performance in 2D bounding box, 3D cuboid, and SLAM (Simultaneous Localization and Mapping), assessing the technical completeness of the data.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What are the name and performance metric of the learning algorithm used for SLAM performance validation? | The learning algorithm is Fast-LIO2, and the performance metric is End to End RMSE (within 0.2m). |
| Summary & Explanation | When validating 2D bounding box object detection, please describe the ratio for splitting total data into Training, Validation, and Test sets, and the number of data items in each set. | The total data is split in a Train:Val:Test = 80:10:10 ratio. The Training Set comprises 80% with 120,220 items, the Validation Set comprises 10% with 14,993 items, and the Test Set comprises 10% with 15,016 items. |
| Comparison & Analysis | Compare the GPU and OS environments used for 2D object detection (YOLOV7) and 3D object detection (FocalsConv) validation, and explain the differences from the SLAM performance verification environment. | Both 2D and 3D object detection are deep learning-based models, so they identically use 'NVIDIA RTX A6000 * 4' GPUs and 'Ubuntu 18.04.6 LTS' for large-scale parallel computation. In contrast, the Fast-LIO2 algorithm used for SLAM performance verification is not an AI model, so it uses only CPU (AMD EPYC 7742) without GPU, and the OS also differs with 'Ubuntu 20.04.' This shows that optimized environments were configured according to the computational characteristics of each verification target algorithm. |
| Reasoning & Application | The 3D object detection model FocalsConv is said to combine RGB (3 channels) with Depth map (1 channel). Infer what advantages this approach could have over using only LiDAR data, particularly when recognizing objects like 'glass doors.' | LiDAR sensors may fail to properly recognize transparent 'glass doors,' passing through them or treating them as noise. However, RGB cameras can capture visual features such as the door frame, handle, and surface reflections. By combining RGB and Depth information like the FocalsConv model, the visual information from the camera can compensate for what LiDAR misses. That is, Depth information detects the approximate presence of a plane, and RGB information identifies the visual context that it is a 'door,' significantly increasing the probability that the robot accurately recognizes glass doors as obstacles rather than misidentifying them as passable spaces. |

****************

While we have focused on the robot's interaction with the external environment through 'perception' and 'navigation,' the next chapter analyzes datasets for diagnosing the robot's own 'status' and 'maintenance.'

### 4.
                            Indoor Space Maintenance Service Robot Dataset

#### 4-1. Overview & Format

For service robots to reliably proliferate across industrial sites and everyday spaces, maintenance technology that goes beyond simply performing assigned tasks to self-diagnose conditions and preemptively predict failures is essential. This requires data that records the robot's internal state in real-time. This section highlights the unique characteristics of the 'Indoor Space Maintenance Service Robot Dataset' built for this purpose -- namely, that it consists of text-based status data rather than images or video. By analyzing the detailed JSON data format, we evaluate what information this data provides for developing AI models for robot state reasoning and anomaly detection.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | In the JSON format of the labeling data, what are the attribute names (keys) indicating whether a robot error has occurred and the error code, respectively? | Error occurrence is 'errorState' (boolean), and error code is 'errorCode' (String). |
| Summary & Explanation | Please describe the five pieces of information whose combination constitutes the filename of this dataset, in order. | The filename consists of 'robot type,' 'unique ID assigned to the robot,' 'month the data was generated,' 'task ID the robot performs,' and 'data sequence number,' in that order. (e.g., GuideRobot_GuideRobot01_11_task01_05233.json) |
| Comparison & Analysis | Compare the information types of the 'deviceData' object and the 'taskData' object included in the source data, and analyze how these two types of information can be used complementarily from a robot maintenance perspective. | 'deviceData' contains the robot's physical and hardware state information such as battery level, collision count, and current speed. In contrast, 'taskData' contains logical and software state information of the mission the robot performs, such as task name, estimated duration, and current task status. By combining both, for example, one can discover that 'collision' counts spike only during specific 'tasks' to diagnose path planning issues, or identify that 'batteryLevel' depletes unusually fast during certain 'tasks' to analyze that the mission is overloading the robot -- enabling diagnosis of complex problem causes between task and state rather than simple hardware failures. |
| Reasoning & Application | The 'errorStatementLong' attribute in the labeling data describes error situations in detailed natural language sentences. If this data were used for LLM fine-tuning, infer what practical help it could provide to robot control system operators. | Simple error codes like 'E-ENV-O' alone make it difficult for operators to immediately identify the cause of problems. However, an LLM fine-tuned with 'errorStatementLong' data ("The current robot... judged to be an immobility error due to obstacle detection...") can automatically convert the code's meaning into sentences including specific situations and causes, such as "The serving robot is currently immobile due to obstacle detection in a congested office." Furthermore, the LLM can suggest solutions such as "It is recommended to check surrounding obstacles and reset the route, or wait until the congestion level in the area decreases." This would shorten the operator's situation assessment time and enable rapid and accurate initial response, significantly improving robot operation efficiency. |

****************

Having examined robot perception of external environments through internal state diagnosis, we now shift the analytical focus to 'Robot Hand Object Property Identification Data' related to the robot's core function of 'manipulation.'

### 5.
                            Robot Hand Object Property Identification Dataset

#### 5-1. Overview & Structure

For robots to handle diverse objects as skillfully as humans, it is essential to go beyond simply seeing and recognizing shapes to understanding physical properties such as weight, material, and rigidity. Without understanding these physical properties, manipulation requiring delicate force control is impossible. This section analyzes the multi-modal composition of 'Robot Hand Object Property Identification Data' built to address these challenges. We evaluate the importance of how visual information (images, 3D meshes) and physical information (physical quantities, time-series sensor data) are integrated to establish the foundation for object manipulation intelligence.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | How many types of household items are targeted for dataset construction, and what is the target image data quantity per item? | There are 200 types of target items in total, with the goal of collecting at least 600 images each of Low-RGB, Hi-RGB, and RGB-D per item. |
| Summary & Explanation | Please list the five robot hand manipulation tasks that constitute the 'mission data' of this dataset. | It consists of five manipulation tasks: 'grasping,' 'squeezing,' 'rotating,' 'shaking,' and 'scratching.' |
| Comparison & Analysis | Describe the differences between 'Hi-RGB' and 'Low-RGB' images in the 'item data,' and analyze how collecting both types benefits the robustness of robot vision models. | 'Hi-RGB' is a high-resolution, uncompressed image in 12bit raw data format, while 'Low-RGB' is a lossy compressed image in 8bit jpg format. High-quality 'Hi-RGB' data is advantageous for learning fine object features, while low-quality 'Low-RGB' data simulates realistic situations where low-spec cameras on actual robots or quality degradation during communication occurs. By training on both types, robot vision models can achieve robustness with stable recognition performance across various quality image inputs. |
| Reasoning & Application | This dataset includes physical quantity information such as object 'weight,' 'size,' and 'material' as well as time-series data like 'tactile' and 'force' feedback. When a robot attempts to lift an object it sees for the first time, infer how it could comprehensively utilize this data to grasp the object safely and efficiently. | The robot first uses visual information (images, 3D meshes) to determine which objects in the dataset are similar to the unfamiliar object. Based on the 'material' and 'size' information of similar objects, it predicts the surface slipperiness and center of gravity, and estimates the minimum force needed to lift the object from 'weight' information. Then, as grasping begins, it receives real-time feedback from 'tactile' and 'force' sensor data, enabling fine adjustment of grasping force to prevent the object from slipping or being crushed. This enables sophisticated and stable grasping based on physical properties, which is impossible with visual information alone. |

****************

Next, we examine in detail the specific tools and standardized procedures used to collect this rich multi-modal data.

#### 5-2. Collection Tools & Procedures

Reliable datasets are built through standardized collection tools and systematic procedures, not intuition or subjectivity. The precision of sensors used for data collection and consistent collection procedures guarantee data quality, forming the foundation that ensures the reproducibility and reliability of AI models trained on this data. This section analyzes the specifications of key collection tools, including high-precision sensors and robot hands, used to build the 'Robot Hand Object Property Identification Dataset.' Additionally, we illuminate the quality assurance process by explaining the step-by-step collection procedures through which data is consistently acquired.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What are the measurement range and measurement error of the 'digital vernier caliper' used to measure object size? | The measurement range is 0-150mm, and the measurement error is 0.2mm. |
| Summary & Explanation | Please describe the features of the 'photography jig' configured to photograph 200 items under consistent conditions. | The photography jig consists of brackets physically fixed to a surface plate, 5 sets of cameras and RGB-D sensors, and a rotating turntable for placing objects. This enables systematic acquisition of data from multiple viewpoints by rotating objects at consistent angles. |
| Comparison & Analysis | Analyze the respective roles of the 'Allegro Hand' and 'finger-type tactile sensor' used in data collection, and explain how the combination of these two tools enables data collection similar to a human hand. | The 'Allegro Hand' controls 16 independent joints to perform 'motions' similar to a human hand, such as grasping and squeezing. The 'finger-type tactile sensors' attached to it collect pressure distribution data, or 'sensory' data, generated when contacting objects during those motions. The combination of both enables the robot to go beyond simply grasping objects to digitize subtle force changes and contact states during grasping, simulating human 'tactile-accompanied manipulation.' |
| Reasoning & Application | There is a data collection procedure where 'force levels are divided into 5 stages with 10 mission executions per stage during robot hand task performance.' Infer what advantages this fine-grained force level data collection approach could provide when developing robots that handle objects like 'fragile eggs' or 'soft tofu.' | Collecting data with fine-grained force levels enables building precise models of how objects deform and how sensor (tactile, force) values change at each force level. Through this, when handling delicate objects like 'eggs' or 'tofu,' the robot can learn the critical force threshold just before the object breaks. Consequently, the robot acquires sophisticated force control capabilities such as stably grasping objects with minimal force or immediately reducing force upon detecting object deformation, significantly enhancing the practicality of domestic assistance robots. |

****************

Having analyzed sophisticated robot manipulation, we next examine 'Hand-Arm Coordinated Grasp-Manipulation Motion Data' for understanding and imitating the motions of 'humans' who are the subjects of such manipulation.

### 6.
                            Hand-Arm Coordinated Grasp-Manipulation Motion Dataset

#### 6-1. Overview & Labeling Attributes

For robots to naturally integrate into human living spaces and effectively imitate human tasks, a deep understanding of complex and sophisticated human movements -- particularly 'hand-arm coordination' -- is a prerequisite. When grasping and manipulating objects, humans organically use their fingers, wrists, arms, and even upper body to create optimal movements. This section examines the composition of the 'Hand-Arm Coordinated Grasp-Manipulation Motion Dataset' built for in-depth analysis of such human grasp-manipulation motions. We evaluate the information density and utilization potential of the data by analyzing the multi-layered labeling attributes that encompass hand joints, upper body, force, and object information.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | What does the 'gesture.hand_gesture_data.hand_keypoints_2D' attribute in the labeling data represent? | It represents 2D coordinate data for each joint of the human hand. |
| Summary & Explanation | Please explain the three values (1, 0, -1) representing 'hand joint data visibility' in the annotation format and what state each indicates. | '1' means the joint is observable by the camera, '0' means it is occluded by another object or hand part, and '-1' means the joint is located outside the camera's field of view. |
| Comparison & Analysis | This dataset's labeling attributes include both 'object.object_2D' (object bounding box) and 'object.grasp_2D' (object graspable points). What are the differences between these two pieces of information, and analyze the advantages of providing both for robot learning. | 'object.object_2D' is information indicating the overall position and size of the object. In contrast, 'object.grasp_2D' is more detailed information specifying specific regions or points within the object where the robot hand can stably grasp. Unlike knowing only the overall object position, a robot that has learned graspable points can go beyond simply detecting objects to establish optimal strategies for 'how to grasp.' This provides a key advantage of enabling faster, higher-success-rate manipulation by reducing the search space for grasp planning. |
| Reasoning & Application | The dataset includes a 'light_source.light_degree' (lighting level) attribute. Infer how this information could be used to make user experiences of interacting with virtual objects in AR (Augmented Reality) environments more realistic. | When placing virtual objects in real spaces in AR environments, they look very unnatural if they don't match the surrounding lighting. An AI model trained with 'light_degree' data can recognize the lighting brightness and color of the actual space where the user is located. Based on this information, the AR system can adjust virtual object shadow direction, brightness, surface reflections, and more in real time to render them in perfect harmony with the actual lighting environment. This maximizes the immersion and realism of AR experiences by making users feel as if virtual objects actually exist. |

****************

Finally, we conclude the report by analyzing 'Human Activity Recognition Robot Autonomous Behavior Data,' which addresses task-specific robot-human interaction.

### 7.
                            Human Activity Recognition Robot Autonomous Behavior Dataset

#### 7-1. Overview & Use Cases

For service robots to provide truly useful experiences beyond simple functions in public places and commercial facilities, social intelligence that accurately identifies the behavior and intentions of surrounding people and autonomously responds accordingly is essential. Helping users who struggle with automated systems like kiosks is an important use case that enhances the social value of robots. This section examines the overview of 'Human Activity Recognition Robot Autonomous Behavior Data' built to analyze such interactions, and evaluates the social and technical value of the data by analyzing concrete use cases that address problems of informationally vulnerable populations.

View QA Samples (4 pairs)

| Question Type | Question | Answer |
| --- | --- | --- |
| Simple Extraction | How many hours of video data were used to construct the source data of this dataset, and from how many types of real service environments was it collected? | It was constructed from over 1,000 hours of automated service system operation video data, collected from a total of 10 types of service environments including transportation, medical, and educational facilities. |
| Summary & Explanation | Please describe two solutions to the 'kiosk problems for wheelchair users and people of short stature' presented as use cases of the dataset. | The first is 'automatic height adjustment,' where sensors recognize the user's condition (e.g., wheelchair use) and automatically adjust the kiosk height. The second is 'enhanced accessibility design,' which optimizes the positions of screens and control buttons so users with various physical conditions can easily use them. |
| Comparison & Analysis | Please analyze the 'age distribution' and 'environment distribution' in the data distribution. Evaluate whether the data has secured diversity without bias toward specific groups or environments. | The 'age distribution' is dominated by young and middle-aged adults at 84.57%, but also includes substantial representation of informationally vulnerable groups such as youth (4.7%) and elderly (10.73%), securing diversity. The 'environment distribution' shows higher proportions for educational facilities (21.97%) and convenience facilities (15.41%), but all 10 categories show relatively even distribution between 4.97% and 21.97%, indicating no bias toward specific environments. This means the data composition is suitable for developing robot activity recognition models across diverse user groups and environments. |
| Reasoning & Application | The metadata of this dataset includes users' encrypted IDs, age, height, and disability status. Infer how this information could be used to implement commercial robot services that provide personalized advertisements or promotions. | The AI installed in the robot recognizes users standing before the kiosk and matches them with metadata. If the user is in the 'youth' age group, the robot can display or verbally announce advertisements related to toys or children's menus. When an 'elderly' user approaches, it can prioritize providing information about health supplements or senior discount benefits. In this way, by identifying individual characteristics in real time and immediately providing the most relevant information and services, highly personalized commercial services can be implemented that increase user satisfaction and maximize purchase conversion rates. |

****************

So far, we have analyzed robot intelligence data from 7 datasets (13 groups) to establish the foundation for QA datasets for LLM fine-tuning. The following section provides a comprehensive summary of statistics and utilization methods.

## IV. Final QA Type Statistics

A total of **52** QA pairs were constructed for
                        **13** robot data groups for LLM training data generation.
                        The QA type statistics reflecting the Physical AI characteristics of robotics intelligence are as follows.

| Question Type | Definition | Usage Count | Ratio |
| --- | --- | --- | --- |
| Simple Extraction | Direct extraction of factual information stated in documents | 13 | 25.0% |
| Summary & Explanation | Comprehensive summary of specific concepts or processes | 13 | 25.0% |
| Comparison & Analysis | Analyzing differences by comparing two or more concepts | 13 | 25.0% |
| Reasoning & Application | Inferring outcomes of specific situations based on given information | 13 | 25.0% |
| Total | 52 | 100.0% |  |

****************

#### Key Features

Questions are **equally distributed** across the core elements of robotics intelligence data:
                            **information extraction, concept explanation, comparative analysis, and applied reasoning**,
                            designed to enable LLMs to learn **comprehensive knowledge** across all domains.

## V. Prompt Template for Domain LLM Report Generation

This prompt can be used to generate **structured QA dataset reports** that enable LLMs
                        to learn domain expertise when given training data documents from other domains
                        (e.g., manufacturing, healthcare, autonomous driving, etc.).

### Report Generation Prompt Template

`[지시사항]
당신은 Agentic AI Data Scientist (AADS) 과제에서 대규모 언어 모델(LLM) 파인튜닝을 위한
전문 QA 데이터셋을 구축하는 전문가입니다. 아래에 제시된 [INPUT: 분석 대상 문서]의 내용을 분석하여,
**'논리적 데이터 그룹'** 단위로 묶어 QA 보고서를 생성해야 합니다.

**[보고서 구성 요소]**
1. **보고서 제목:** 도메인 및 목적에 맞게 작성하십시오.
2. **논리적 데이터 그룹 식별:** 문서 내에서 동일한 프로젝트나 목표를 공유하는 문서들을
   하나의 '논리적 그룹'으로 묶습니다.
3. **QA 쌍 생성:** 각 논리적 그룹별로 **4개**의 질의응답(QA) 쌍을 생성해야 합니다.
4. **Question Type 분류:** 생성된 QA 쌍은 다음 4가지 핵심 유형 중 하나로 분류되어야 합니다.
   * **단순 정보 추출형:** Direct extraction of factual information stated in documents
   * **요약 및 설명형:** Comprehensive summary of specific concepts or processes
   * **비교 및 분석형:** 둘 이상의 개념을 비교하여 차이점과 공통점 분석
   * **추론 및 적용형:** 주어진 정보를 바탕으로 특정 상황의 결과나 응용 추론
5. **출처 표기:** 응답의 모든 문장은 원본 문서의 출처를 명확하게 표기해야 합니다.
6. **최종 통계:** 생성된 모든 QA 쌍을 대상으로, 사용된 **4가지 유형의 최종 횟수와 Ratio**을
   정리해야 합니다.`

**Usage:** Use this template to automatically generate high-quality QA datasets
                            from training data documents across various domains (healthcare, autonomous driving, manufacturing, etc.).

## Pebblous Perspective: A Data-Centric Approach for the Physical AI Era

The robotics QA dataset built in this AADS project clearly demonstrates
                            **the intelligence difference that data quality creates**
                            in the era of **Physical AI**.

### AADS's Differentiated Approach

•**Balanced Knowledge Structure:**
                                        Evenly distributing 4 Question Types at 25% each,
                                        designed for LLMs to acquire unbiased expertise

•**Practice-Oriented QA:**
                                        Minimizing hallucination through factual QA extracted from actual documents
                                        of 13 robotics datasets

•**Scalable Template:**
                                        Reusable structure that can be immediately extended to other domains
                                        (healthcare, autonomous driving, etc.) through prompt templates

### The Core of Physical AI: Understanding Sensor Data

Understanding the physical characteristics of various sensors including
                                **RGB-D cameras, LiDAR, tactile sensors, and IMU** is essential for robotics intelligence datasets.

AADS systematized each sensor's information collection methods, labeling class differences, and model selection criteria
                                through **Comparison & Analysis QA**,
                                designing LLMs to go beyond simply listing data to
                                reason about **"why is this sensor suitable for this task?"**

## Frequently Asked Questions (FAQ)

### How does AADS build robotics QA datasets?

AADS analyzes AI Hub's robot dataset documents and groups
                                documents sharing the same project objectives into 'logical data groups.'
                                For each group, it generates one QA pair from each of the 4 Question Types
                                (information extraction, summary & explanation, comparison & analysis, reasoning & application),
                                producing a total of 4 QA pairs per group, resulting in 52 high-quality question-answers.

### How do robotics datasets differ from manufacturing datasets?

Robotics datasets are characterized by **sensor diversity** (RGB-D, LiDAR, tactile, IMU, etc.) and
                                **real-time decision-making** requirements.
                                In contrast, manufacturing datasets focus on quality inspection and predictive maintenance.
                                AADS builds QA datasets reflecting the characteristics of each domain.

### What are the most important robotics datasets?

The **Occluded Object Reasoning Dataset** and the **Delivery Robot Off-Road Navigation Dataset** are
                                the most critical. The former is essential for validating robot perception capabilities (occlusion handling),
                                while the latter validates navigation capabilities (off-road environments). Both datasets require multimodal sensor fusion.

### What advantages does multimodal data provide for LLM fine-tuning?

Multimodal data (sensor values + images, LiDAR + RGB) helps LLMs
                                **comprehensively understand physical phenomena** of robots.
                                For example, delivery robot data combines 2D images (drivable areas) and 3D LiDAR (dynamic object detection),
                                enabling LLMs to learn multidimensional knowledge such as
                                "speed should be reduced on sidewalks with low flatness."

### How does the AADS QA dataset integrate with DataClinic?

The QA dataset generated by AADS is closely integrated with **DataClinic's data quality diagnosis pipeline**.
                                When DataClinic automatically detects outliers, labeling errors, and imbalanced distributions in sensor data,
                                AADS can learn QA pairs about those quality issues and suggest
                                **practical solutions** such as
                                "a specific filter should be applied to reduce noise in this LiDAR data."

## Related Dataset Sources

Below is the source information for the 13 robotics datasets analyzed in this report.

[1]**Occluded Object Reasoning Data**  

                                    RGB-D Camera / Object 3D Scan, Multi-Object Occlusion, Grasping Data

[2]**Delivery Robot Off-Road Navigation Data**  

                                    2D Image (Semantic Segmentation) + 3D LiDAR (Cuboid) / 9 Dynamic/Static Object Types

[3]**Robot-View Driving Video Data**  

                                    Quadruped Robot (45.92%) + Wheeled Robot (54.08%) / RGB, PCD, CSV, Depth

[4]**Indoor Space Maintenance Service Robot Data**  

                                    JSON-based State Data / errorState, batteryLevel, collision, etc.

[5]**Robot Hand Object Property Identification Data**  

                                    200 Household Items / Hi-RGB, Low-RGB, RGB-D / Weight, Size, Material, Tactile

[6]**Hand-Arm Coordinated Grasp-Manipulation Motion Data**  

                                    Hand Joint 2D/3D Coordinates, Upper Body Pose, Graspable Points, Force Sensor Data

[7]**Human Activity Recognition Robot Autonomous Behavior Data**  

                                    1,000+ Hours Video / 10 Service Environments / Kiosk Accessibility Enhancement

## 결론

This report introduced the **52 QA pairs in the robotics intelligence domain**
                            built through the **AADS project**.
                            The 13 datasets cover core areas of robotics intelligence including **occluded object reasoning, delivery robot off-road navigation, driving video, indoor space maintenance,
                            object property identification, grasp-manipulation actions, and human activity recognition**.

Each dataset was systematically analyzed across four dimensions: **Domain Definition, Data Structure, AI Models, and Quality Management**,
                            and composed of four QA types -- **Simple Information Extraction, Summary & Explanation, Comparison & Analysis, and Reasoning & Application** --
                            to strengthen the LLM's **Physical AI domain expertise**.

Through this dataset, Pebblous applied **Few-Shot Learning** and
                            **Prompt Engineering**,
                            designing LLMs to support decision-making in practical environments for robot data analysis, model selection, and quality management.

Going forward, AADS plans to integrate with the **DataClinic** platform
                            to provide automated quality diagnosis and improvement recommendations for robotics intelligence datasets,
                            and to strengthen collaboration between domain experts and AI models.

## Original Report Download

### AADS LLM Fine-Tuning QA Dataset Construction: Robotics

Download the original report containing detailed analysis of 13 datasets and 52 QA pairs in the robotics intelligence domain.

**In addition to all QA on this web page**, additional analysis materials and original text are included.

[Download PDF](/project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 로봇 분야.pdf)File format: PDF | Written: November 30, 2025 | Pebblous Data Communication Team
