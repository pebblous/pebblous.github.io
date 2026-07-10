---
title: What Happens When You Train AI to Read Regulations?
subtitle: Regulation & Governance Domain
date: December 02, 2024
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What Happens When You Train AI to Read Regulations?

_Regulation & Governance Domain_

## I. Introduction & Objectives

This report describes the strategic composition and detailed content of a QA dataset related to the
                            **EU Artificial Intelligence Act (EU AI Act)**, which serves as one of the key training resources
                            for fine-tuning the **AADS (Agentic AI Data Scientist) LLM**.

The ultimate goal of the AADS project is to develop an **autonomous AI agent** that can effectively assist data scientists.
                            The AADS LLM utilizes a wide range of documents as training materials to inject data science theory and regulatory knowledge,
                            and is designed to serve as a **Data Auditor** that guarantees data reliability through a dual identity.

#### Core Knowledge Provided by the EU AI Act

- **Trustworthiness & Ethical Foundation:** A legal framework based on EU values and fundamental rights, ensuring AI serves as a human-centric tool with positive societal impact
- **Regulatory Knowledge Injection:** Ensuring the proper functioning of the EU single market while fostering conditions for the development and use of safe, trustworthy AI

#### Dual Objectives of the EU AI Act

The EU AI Act was proposed as part of the European Commission's agenda to make Europe fit for the digital age.
                            The legislation aims to achieve two goals: an **"ecosystem of excellence"** and
                            an **"ecosystem of trust"**.

| General Objective | Specific Objectives |
| --- | --- |
| Ensure the proper functioning of the single market                                             by fostering conditions for the development and use of trustworthy AI | 1. Ensure safety and respect for fundamental rights and Union values of AI systems |
| 2. Ensure legal certainty to facilitate investment and innovation in AI |  |
| 3. Enhance governance and effective enforcement of fundamental rights and safety requirements |  |
| 4. Facilitate the development of a single market for lawful, safe, and trustworthy AI and prevent market fragmentation |  |

****************************

## II. QA Dataset Overview

#### 5

Policy Objective Areas

#### 20

QA Pairs (4 per objective)

#### 4

Query Types (A/B/C/D)

A total of **20 QA pairs** were constructed across
                            **5 policy objective areas** (1 general objective + 4 specific objectives).
                            Each objective systematically covers the core regulatory framework of the EU AI Act.

The QA pairs are **evenly distributed at 25% each** across four types:
                            **Domain Definition/Purpose (A), Data Structure/Composition (B), AI Model/Mission (C), and Quality/Process Management (D)**,
                            ensuring the LLM acquires comprehensive knowledge spanning all areas of regulatory compliance.

## III. Strategy & Methodology

#### Four Core Query Types

The AADS LLM is fine-tuned using four types of question-answer pairs that go beyond simple information extraction,
                            enabling it to evaluate the value and quality of data within a legal context.

| Type | Type Name | Definition (Learning Objective) |
| --- | --- | --- |
| A | Domain Definition/Purpose | Verify understanding of the AI Act's core purpose, risk classification, and prohibited areas |
| B | Data Structure/Composition | Verify obligations for data quality standards, data governance, logging, and record-keeping required for high-risk AI and GPAI models |
| C | AI Model/Mission | AI technology application strategies including classification criteria, technical requirements, and conformity assessment procedures |
| D | Quality/Process Management | Compliance and enforcement procedures including pre-market conformity assessment, post-market surveillance, quality management systems, and transparency obligations |

********************************

#### Risk-Based Hierarchical Approach of the AI Act

At the core of the AI Act is a risk-based approach that **hierarchically classifies**
                            AI systems according to their potential risk level and imposes different regulatory obligations on each tier.

Unacceptable RiskAI systems posing clear threats to safety, livelihood, or fundamental rights are **prohibited**

High Risk**Strict obligations and conformity assessment** required before market placement

Limited Risk**Transparency obligations** imposed on users (e.g., chatbots, deepfakes)

Minimal Risk**Permitted** without additional regulation (e.g., spam filters, recommendation systems)

## IV. EU AI Act QA Datasets: Objective-Based Training Materials

Four types of QA pairs were constructed for each of the EU AI Act's
                            **1 general objective** and
                            **4 specific objectives**.
                            Each QA pair is designed to help the LLM comprehensively understand the purposes, data requirements, technical obligations, and quality management procedures of regulation.

### 1.
                            General Objective: Fostering a Single Market & Trustworthy AI

The general objective of the EU AI Act is to ensure the proper functioning of the **single market**
                                and to foster conditions ensuring that AI systems are safe and comply with existing laws and **Union values**.

View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| ADomain Def. | What is the general objective of the EU AI Act, and which core EU values is it based on? | The general objective is to ensure the proper functioning of the single market and to foster conditions ensuring that AI systems are safe and comply with existing laws and Union values. |
| BData Structure | When the AI Act targets safe and trustworthy AI, what information obligations (IOs) are required regarding the acquisition and use of data? | Information obligations regarding data acquisition include providing details on the data collection process, the sources of data, and the original purpose of collection in the case of personal data. |
| CAI Model | What three performance characteristics of the model must providers specify in technical documentation to demonstrate the "trustworthy AI" pursued by the AI Act? | The performance of an AI system must describe the expected levels and margins of error for accuracy, fairness, robustness, and safety in achieving its intended purpose. |
| DQuality Mgmt. | What voluntary mechanism does the AI Act recommend to enhance the trustworthiness of AI systems not classified as high-risk, and what is the evaluation cycle? | The impact and effectiveness of voluntary codes of conduct must be evaluated, starting 4 years after the date of entry into force and every 3 years thereafter. |

****  
************  
****  
********  
********

### 2.
                            Specific Objective 1: Safety & Fundamental Rights

This objective ensures **safety** when AI systems are placed on the market or put into service,
                                and ensures respect for **fundamental rights and Union values** under existing laws.

View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| ADomain Def. | What are the two core assurance elements that the first specific objective seeks to achieve for high-risk AI systems? | To ensure safety when AI systems are placed on the market or put into service, and to ensure respect for fundamental rights and Union values under existing laws. |
| BData Structure | What types of risks must providers of high-risk AI systems specify in technical documentation to mitigate the system's potential impact on fundamental rights? | Providers must document the potential side effects and fundamental rights risks posed by the AI system, including all foreseeable circumstances that could affect the system's accuracy, fairness, robustness, and safety. |
| CAI Model | Provide two specific use cases classified as high-risk AI systems in educational and vocational training institutions. | AI systems used to assess the level of education that an individual may receive or access, or AI systems used to monitor and detect prohibited behavior of students during examinations. |
| DQuality Mgmt. | What formal management system must providers of high-risk AI systems have in place before market placement to ensure ongoing regulatory compliance? | They must establish and implement a Quality Management System that ensures regulatory compliance throughout the system's lifecycle. |

****  
************  
************  
************  
****

### 3.
                            Specific Objective 2: Ensuring Legal Certainty

By providing a clear and harmonized legal framework, this objective reduces market uncertainty
                                and facilitates **investment** and **innovation**
                                in AI technology development and deployment.

View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| ADomain Def. | How is the second specific objective, "ensuring legal certainty," intended to positively impact investment and innovation in the AI sector? | By providing a clear and harmonized legal framework, it reduces market uncertainty and facilitates investment and innovation in AI technology development and deployment. |
| BData Structure | For legal certainty, what detailed information related to the resources used in AI system development must providers of high-risk AI systems document? | Providers must document the computational resources used for AI system development, training, testing, and validation, along with evidence that data was processed according to standardized protocols. |
| CAI Model | What important decisions related to technical solutions for compliance with the AI Act's regulatory requirements must providers document? | They must document the decisions made regarding all possible trade-offs adopted in the technical solutions to comply with the requirements set out in Chapter 3, Section 2. |
| DQuality Mgmt. | What controlled environment has been established to encourage AI innovation while providing regulatory oversight, and what does it aim to enhance? | AI regulatory sandboxes are established, providing opportunities to develop, train, validate, and test innovative AI systems under regulatory oversight, aiming to enhance legal certainty. |

****  
************  
************  
********  
********

### 4.
                            Specific Objective 3: Strengthening Governance & Effective Enforcement

This objective focuses on strengthening the governance and
                                **effective enforcement** of
                                **fundamental rights and safety requirements** applicable to AI systems.

View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| ADomain Def. | What does the third specific objective of governance strengthening focus on ensuring the effective enforcement of? | It focuses on strengthening the governance and effective enforcement of fundamental rights and safety requirements applicable to AI systems. |
| BData Structure | What data-related functions does the Scientific Panel established to support regulatory enforcement perform regarding GPAI model evaluation? | The Scientific Panel contributes to the development of tools and methodologies for evaluating the capabilities of general-purpose AI models and systems, including the development of benchmarks. |
| CAI Model | What key governance body must Member States designate to ensure regulatory compliance before market placement of high-risk AI systems, and what is their role? | Each Member State must designate a Notifying Authority responsible for establishing and carrying out the procedures necessary for the assessment, designation, and notification of conformity assessment bodies. |
| DQuality Mgmt. | As part of the governance system, how must the results of the Advisory Forum's activities be made public? | The Advisory Forum must prepare annual reports on its activities, and these reports must be made publicly available. |

****  
************  
************  
********  
********

### 5.
                            Specific Objective 4: Facilitating Single Market Development & Preventing Fragmentation

This objective promotes the **development of a single market** for lawful, safe, and trustworthy AI applications,
                                and prevents **market fragmentation** caused by divergent regulations among Member States.

View QA Samples (4 pairs)

| Type | Question | Answer |
| --- | --- | --- |
| ADomain Def. | What economic benefit does the fourth specific objective aim to achieve, and what negative outcome does it seek to prevent from a regulatory perspective? | It promotes the development of a single market for lawful, safe, and trustworthy AI applications and prevents market fragmentation caused by divergent regulations among Member States. |
| BData Structure | When the AI Office develops risk-level assessment methodologies, what three regulatory listing criteria must be considered to prevent market fragmentation and ensure regulatory consistency? | The criteria are based on the Annex III list (high-risk systems), the list of prohibited practices (Article 5), and the list of AI systems requiring additional transparency measures (Article 52) for including new systems. |
| CAI Model | According to the impact assessment report, which industry sector was expected to bear the highest regulatory compliance cost weight (0.210) in 2020 regarding AI Act compliance? | Manufacturing was expected to bear the highest regulatory compliance cost weight at 0.210 in 2020. |
| DQuality Mgmt. | How must Notifying Authorities develop conformity assessment procedures to prevent market fragmentation and ensure enforcement uniformity? | The procedures for assessment, designation, and notification of conformity assessment bodies must be developed through cooperation among Notifying Authorities of all Member States. |

****  
************  
****************  
********  
****

## V. Conclusion & AADS Project Contribution

#### 1. Systematization of Regulatory & Governance Knowledge

The EU AI Act QA dataset helps the AADS LLM function not only as a data scientist but also as a
                            **responsible agent** capable of objectively evaluating the trustworthiness and safety of AI systems
                            within the **global regulatory environment**.

This dataset fine-tunes the LLM to clearly understand the AI Act's structure of
                            **differentiating regulatory obligations by risk level** (prohibited, high-risk, limited risk).
                            In particular, in-depth Q&A on **data quality (High Quality Datasets) and governance requirements**
                            for high-risk AI systems provides the logical foundation for the AADS LLM to perform the role of Data Auditor.

#### 2. Strengthening the LLM Fine-Tuning Foundation

The regulation and governance domain-specific dataset injects into the LLM an understanding that goes beyond simple legal interpretation:
                            the **policy context and purpose** behind regulation (Domain Definition/Purpose),
                            **structural requirements for AI models** (AI Model/Mission), and
                            **data lifecycle management procedures for legal compliance** (Quality/Process Management).

This enables the AADS LLM to reason that **data quality and reliability are at the core of regulatory compliance**.

#### Core Value Proposition

The EU AI Act QA dataset will serve as a key intelligent asset enabling the AADS LLM to
                            **proactively identify legal risks** in the complex and rapidly evolving regulatory environment
                            and to assure clients of **AI-Ready Data**.

## FAQ

Q1. When does the EU AI Act take effect?
                            The EU AI Act entered into force on August 1, 2024, with most provisions applying from August 2, 2026. However, provisions on prohibited AI practices apply from February 2, 2025, and provisions on general-purpose AI (GPAI) models apply from August 2, 2025.

Q2. What are the criteria for determining high-risk AI systems?
                            High-risk AI systems are classified into two categories: (1) AI systems used as safety components under product safety legislation, and (2) AI systems used in specific areas listed in Annex III (biometrics, critical infrastructure, education, employment, essential services, law enforcement, immigration, judiciary, etc.).

Q3. How is the EU AI Act QA dataset used in the AADS project?
                            Through this QA dataset, the AADS LLM strengthens its capabilities in (1) understanding core AI regulatory concepts and risk classification systems, (2) identifying data quality and governance requirements, (3) acquiring knowledge of conformity assessment procedures and quality management systems, and (4) identifying legal risks and supporting regulatory compliance.

Q4. Why are the four query types (A/B/C/D) important?
                            These four types are designed to enable the LLM to learn regulatory knowledge multidimensionally. (A) Domain Definition covers the purpose and scope of regulation, (B) Data Structure addresses data governance requirements, (C) AI Model covers technical requirements and use cases, and (D) Quality Management addresses compliance procedures and enforcement mechanisms. This allows the LLM to understand the entire regulatory ecosystem.

Q5. What is an AI Regulatory Sandbox?
                            A regulatory sandbox is a framework that allows innovative AI systems to be developed, trained, validated, and tested in a controlled environment under regulatory oversight. This enables companies to pursue innovation while ensuring legal certainty, and allows regulatory authorities to understand the risks and benefits of new AI technologies in real time.

### Related Posts
