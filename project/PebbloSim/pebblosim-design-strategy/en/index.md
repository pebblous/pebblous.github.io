---
title: PebbloSim
subtitle: Synthetic Data Generator for Physical AI
date: 2026-01-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# PebbloSim

_Synthetic Data Generator for Physical AI_

### PDF Download

<!-- stat-card -->
**View or download the full PebbloSim conceptual design document v2.0 as PDF.** — [View PDF](../../source/PebbloSim_ 피지컬 AI를 위한 시뮬레이션 기반 합성데이터 생성기 v2.0.pdf)[Download PDF](../../source/PebbloSim_ 피지컬 AI를 위한 시뮬레이션 기반 합성데이터 생성기 v2.0.pdf)

## Executive Summary

> [!callout]
> The Physical AI market is poised for explosive growth as AI technologies that interact with the physical world spread across manufacturing, robotics, defense, and shipbuilding. Yet rare data — defects, accidents, edge cases — that defines model robustness is nearly impossible to collect intentionally in the real world. This **Data Famine** is the structural bottleneck of industrial Physical AI adoption. PebbloSim is the strategic application designed to solve it, serving as the core execution engine of the Action layer in Pebblous Data Greenhouse.

> PebbloSim adopts a **Neuro-Symbolic Hybrid World Model** that combines the logical consistency of symbolic simulation with the visual expressiveness of neural generative models, producing high-quality synthetic data without physical hallucination. A four-stage workflow — Digital Twin Engine, GenSim Manager, Multimodal Generator, and PebbloScope Module — autonomously cycles through diagnosis, prescription, generation, and verification, with Vector-to-Param technology precisely targeting data voids.

> Across four quarterly PoC cycles spanning one year, PebbloSim progresses from automotive process validation (PoC 1) through defense (PoC 2), shipbuilding (PoC 3), to full autonomous operation (PoC 4). Throughout, it produces auditable operational evidence that supports regulatory compliance with the EU AI Act, ISO/IEC 42001, and similar frameworks. PebbloSim is the core infrastructure realizing the paradigm shift from _collecting_ data to _cultivating_ it. This article is part of the [Neuro-Symbolic × Ontology hub](/project/NeuroSymbolicOntology/en/) series — the execution engine where simulation produces data and ontology pins down what it means.

## Introduction — The Data Bottleneck of Physical AI

The Physical AI market is poised for explosive growth as AI technologies that interact with the physical world spread across manufacturing, robotics, defense, and shipbuilding. But behind that innovation lies a critical bottleneck — **Data Famine**.

Rare data such as **defects, edge cases, and disasters** — the very situations that determine AI model robustness — is nearly impossible to collect intentionally in the real world. Welding-line defects that occur at less than 0.001% in a smart factory, extreme weather and sudden accidents that an autonomous vehicle may face: this kind of scarcity is the single largest barrier to Physical AI adoption.

> [!callout]
> Defect data cannot be collected, accident data must be waited for, and disaster data must never occur. So how do we train AI?

**PebbloSim** is the strategic application designed to solve this bottleneck. Within the **Pebblous Data Greenhouse** ecosystem, it operates as the core execution engine of the Action layer — completing the autonomous cycle of Observe, Judge, Act, and Prove. It is the most powerful proof that Data Greenhouse is not merely an observation system but an operating framework that takes **responsibility** for data quality and lifecycle.

PebbloSim accelerates the development of industry-specific AI models — a key goal of the AADS (Agentic AI Data Scientist) Phase 2 program — and helps secure data sovereignty in the Physical AI market. This document defines PebbloSim's reason for existence (Why) and ultimate goal (What), then lays out the architecture and development strategy that realize them.

## Vision & Core Concepts

**PebbloSim** is the **core execution engine of the Action layer** within the **Pebblous Data Greenhouse** ecosystem, which autonomously cycles through Observe, Judge, Act, and Prove operations on data.

### 1.1. Core Concept & Objectives

PebbloSim is defined as **"a digital twin–based simulation and synthetic-data generation platform for Physical AI training data."** Beyond simply building virtual environments, it is organically integrated with the Data Greenhouse to autonomously produce high-quality, AI-ready data.

Where conventional generative AI (Sora, Stable Diffusion, and similar models) relies on probabilistic correlations and frequently violates physical laws — a phenomenon known as **Physical Hallucination** — PebbloSim grounds neural rendering in the physical consistency guaranteed by a digital twin engine. This **Zero Physical Hallucination** principle is the foundation of PebbloSim's technical credibility and the precondition for synthetic data to substitute for real process data on industrial floors.

#### High-Quality AI-Ready Data

<!-- stat-card -->
**Generates edge-case data with extremely low real-world frequency through hyper-synthetic data techniques.**

#### Operational Evidence

<!-- stat-card -->
**Produces auditable records that prove the logic and rationale behind every step of data growth.**

### 1.2. Key Application Domains

PebbloSim targets four key domains where **Data Famine** is most severe. They share a common structural problem — collecting defect, accident, and edge-case data is practically impossible — and they show high demand for high-quality synthetic data with guaranteed physical consistency.

#### Automotive & Manufacturing

<!-- stat-card -->
**Generates stability data for autonomous manufacturing systems by simulating robot collisions, dislodged parts, and other anomalies in flexible-manufacturing environments.**

#### Defense

<!-- stat-card -->
**Generates surveillance and tactical-training data inside on-premise environments.**

#### Shipbuilding

<!-- stat-card -->
**Optimizes ship-construction processes through digital twins that combine 3D CAD with sensor data.**

#### Robotics

<!-- stat-card -->
**Generates data for the complex motions and edge-case responses of humanoid robots.**

### 1.3. Key Differentiators

The synthetic-data market already has many players. PebbloSim secures structural differentiation through three things — recording the generation process itself as auditable **Operational Evidence**, guaranteeing physical consistency through a **Neuro-Symbolic World Model**, and creating a **self-reinforcing Data Flywheel** whose diagnostic and generative accuracy improves with use.

#### Differentiator 1 — PebbloSim as Operational Evidence

Functioning as core **Operational Evidence** means PebbloSim is not merely a tool that produces synthetic data files (.jpg, .mp4, etc.) but a system that generates an **Audit Trail** proving "why this data was generated, and through what process its quality improved."

Conventional simulators deliver the data you requested — and nothing more. PebbloSim delivers a record of how Data Greenhouse autonomously solved the underlying problem. It does not merely generate "an image of a rainy day"; it records the full causal chain — Data Clinic diagnosed insufficient rainy-weather data (Why), AADS configured precipitation 10 mm and illuminance 50 lux (How), and PebbloSim generated the data (Action). The Operational Evidence Package combines three elements:

#### Diagnosis-Based Prescription

<!-- stat-card -->
**Records of reverse-converting Vector Space Void coordinates detected by Data Clinic into simulation parameters (Vector-to-Param).**

#### Execution & Generation Logs

<!-- stat-card -->
**Execution records covering digital twin state, applied physical laws, and the multimodal data produced.**

#### Improvement Verification Report

<!-- stat-card -->
**Before/After comparison showing how much the Quality Index improved with the generated data.**

#### Differentiator 2 — Neuro-Symbolic Hybrid World Model

To overcome the limitations of generative AI that ignores physical laws, PebbloSim combines the **logical consistency of symbolic simulation** with the **visual expressiveness of neural generative models**. Video-generation models such as Sora and Stable Diffusion learn only probabilistic correlations between pixels, producing physical hallucinations — cars floating in midair, shadows misaligned with light sources. PebbloSim instead first builds a **World Model** governed by gravity, friction, and optics, and then dresses that skeleton in generative-AI skin.

#### Zero Physical Hallucination

<!-- stat-card -->
**Guarantees physically consistent data without violations of physical law.**

#### Explainable Causality

<!-- stat-card -->
**Produces clear causal explanations such as "the car skidded because the friction coefficient was 0.3."**

#### Precise Controllability

<!-- stat-card -->
**Numerically precise control such as "rainfall 30 mm/h, collision angle 45°, speed 60 km/h."**

#### Differentiator 3 — Self-Reinforcing Cycle (Data Flywheel)

A structure that gets smarter with use. Data production strengthens AI intelligence, and stronger intelligence produces more sophisticated data — a self-reinforcing virtuous cycle that forms a technological moat competitors cannot easily replicate. The cycle operates through three mechanisms.

First, **internalizing intelligence**. The high-quality synthetic data (Curriculum Data) PebbloSim generates is not merely shipped to customers — it is also used to retrain the core AI models that serve as the system's brain. Through this self-training loop, the system evolves over time to understand more complex physical situations and to design more sophisticated scenarios.

Second, **reinforcement between diagnosis and generation**. When the system spots a data void, simulation fills it; as the model improves on that data, it begins to detect even subtler defects that were previously invisible. This infinite loop creates a Data Flywheel that exponentially compounds the value of an enterprise's data assets.

Third, **asset appreciation**. While conventional software becomes obsolete over time, the Data Greenhouse powered by PebbloSim is an **appreciating asset** whose diagnostic and generative accuracy improves as data accumulates. This is a moat that competitors cannot replicate in the short term.

### 1.4. Regulatory Compliance & Business Value

PebbloSim's operational evidence is the key to solving the AI regulatory and reliability challenges that enterprises face.

#### Regulatory Compliance Documentation

<!-- stat-card -->
**The EU AI Act and ISO/IEC 42001 (AI management systems) require proof of what data AI models were trained on. PebbloSim's operational evidence serves as auditable documentation that demonstrates exactly how insufficient safety data was scientifically diagnosed and reinforced.**

#### Physical AI Safety Assurance

<!-- stat-card -->
**In Physical AI domains such as robotics and autonomous driving, learning from accident data is essential. PebbloSim generates accident data that cannot be obtained in reality and serves as a safety-assurance certificate proving that models were trained on it.**

## System Architecture

PebbloSim is a core application that runs on top of Data Greenhouse, an AI data operating system (Data OS). Its workflow is captured by a single equation — **Engine (infrastructure) + Scenario (blueprint) = Simulator Instance (GenSim)**.

### 2.1. Four-Stage Workflow

PebbloSim's workflow is not the operation of a stand-alone simulator but the **execution cycle of an application running on a data operating system**. It is dedicated to **Data Bulk-up** — using physics simulation to reinforce sparse regions of the data distribution — while staying fully synchronized with the Data Greenhouse's Observe-Judge-Act-Prove loop. This is what lets PebbloSim function not as an individual tool but as **scalable platform infrastructure**.

The four stages are **Twin (Base Class) → Design (Architect) → Generate (Action) → Verify (Director)**. The Twin stage prepares a digital twin environment that respects physical law. The Design stage translates abstract commands into concrete scenario scripts. The Generate stage actively produces multimodal data, and the Verify stage uses PebbloScope to surface results in a form a human reviewer can audit. The cycle runs without breaks, keeping each GenSim instance autonomous.

### 2.2. Core Modules

| Module | Role | Core Technology |
| --- | --- | --- |
| Digital Twin EngineThe Base Class | Digital base environment that precisely replicates real-world physics and surroundings | NVIDIA Omniverse, Reality Sync, Ground Truth provisioning |
| GenSim ManagerThe Architect | Translates abstract commands into concrete simulation scripts | Ontology & LLM, intent translation |
| Multimodal GeneratorAction Engine | Actively produces multimodal data inside a GenSim instance | Vector-to-Param, precision targeting |
| PebbloScope ModuleThe Director | Visually monitors the simulation and provides final approval | Interactive Link, human-in-the-loop |

****  
****  
****  
****

### 2.3. Greenhouse Integration

The business value of PebbloSim does not come from running it standalone — it comes from the **organic integration with the Greenhouse ecosystem**. As the pipeline from diagnosis to generation to verification is automated, the customer no longer has to build separate manual pipelines to improve data quality. The repetitive work of data engineers is reduced, and the cost and time of quality improvement is structurally compressed.

#### From Diagnosis to Prescription (Clinic → Architect)

<!-- stat-card -->
**Data bias and deficiency information diagnosed by Data Clinic is forwarded to GenSim Manager and used as the blueprint for precision scenario generation.**

#### Execution & Supply (Action Engine → Greenhouse)

<!-- stat-card -->
**Vector-to-Param technology precisely targets voids in the neuro-symbolic representation space, achieving high-efficiency data bulk-up.**

#### Verification & Circulation (Director → Flywheel)

<!-- stat-card -->
**Only data that passes PebbloScope's approval gate is assetized; AI model retraining then completes the Data Flywheel.**

## Scenario-Based Workflow

> [!callout]
> **Example scenario.** An automotive paint line lacks micro-scratch defect data under low-light conditions, and AI detection accuracy drops as a result. This is the workflow that solves it.

We chose automotive painting as the first validation scenario for a clear reason — it is a textbook case where the absence of **rare defect data** directly bottlenecks AI model performance. Micro-scratches occur at less than 0.1% in real production lines, making it hard to assemble enough training data, and detection difficulty changes drastically with lighting conditions on the floor. The scenario also lets us quantify Sim-to-Real transfer effects, making it the **industry reference that most directly demonstrates PebbloSim's ROI** to both investors and customers.

### 3.1. Five-Step Execution

#### 1. Diagnosis & Prescription

<!-- stat-card -->
****Data Clinic** reports that "micro-scratch data under 50 lux is below 1%," and **AADS** issues the command "generate 1,000 micro-scratch images under low-light conditions."**

#### 2. Scenario Translation & Design

<!-- stat-card -->
****GenSim Manager** consults the ontology and translates the abstract command into concrete parameters — "light source 30–50 lux," "scratch texture within 0.1 mm depth and 2 cm length."**

#### 3. Virtual Environment & Generation

<!-- stat-card -->
****Digital Twin Engine** reproduces the actual factory environment, and **Vector-to-Param** precisely targets the missing low-light region to generate the data.**

#### 4. Visualization & Verification

<!-- stat-card -->
****PebbloScope** confirms that the data lands in the intended region of the distribution, and **Interactive Link** verifies the ontology connections.**

#### 5. Governance Approval & Ingestion

<!-- stat-card -->
**After the user clicks **Approve**, the data lands in the data lake. The full process is captured as an **Audit Log** for regulatory compliance.**

> [!callout]
> **Data Flywheel effect.** As this workflow repeats, the customer's data system evolves into a living asset, and Pebblous's AADS-LLM and VLM are reinforced alongside it — a network effect that compounds over time.

## Development Strategy

A complex, ambitious platform like PebbloSim cannot be built big-bang. Pebblous adopts an incremental, iterative strategy — four quarterly PoC cycles over one year that progressively complete PebbloSim.

The core of this approach is a **Wedge Use Case** strategy. We start with the most urgent, ROI-clear automotive process (PoC 1) to prove immediate value, then expand into defense (PoC 2) and shipbuilding (PoC 3), and finally complete a fully autonomous platform (PoC 4). Each stage deepens integration with Data Greenhouse and is designed to contribute directly to the quantitative goals of the AADS Phase 2 government program — a progressive deepening strategy moving from **Closing the Loop → Sovereignty → Depth → Autonomy**.

The four-cycle strategy is also a **risk-management framework**. Each PoC depends on outputs from the previous stage, so technical uncertainties surfaced early flow immediately into later designs. And because every cycle's deliverable feeds directly into the AADS Phase 2 technical report, technology validation and project execution stay synchronized on a single timeline.

### 4.1. Four-Cycle PoC Roadmap

#### PoC #1 · Foundation & Automotive Process Validation (months 1–3)

- · Build the basic physical environment (Class) of an automotive line — robot arms, conveyor belts, etc.
- · Implement manual selection and execution of 2–3 fixed scenarios
- · Develop an initial synthetic-data module focused on visual data (RGB images)

<!-- stat-card -->
**Focus on **Closing the Loop** — proving that the diagnosis-prescription-generation-verification pipeline runs end-to-end without breaks.**

#### PoC #2 · Defense Domain & Sovereign Stack Validation (months 4–6)

- · Add complex defense-specific scenarios (intrusion, loitering, abandonment, etc.)
- · Embed a tamper-proof governance module for security audits
- · Package the system to run on in-house sLLM and rendering engines without foreign platforms

<!-- stat-card -->
**Focus on **Sovereignty & Security** — validating a self-contained Data Greenhouse inside closed defense networks.**

#### PoC #3 · Multimodal Depth & Shipbuilding Application (months 7–9)

- · Spatio-temporally synchronized data engine combining 3D CAD with sensor logs
- · Industrial VLM that automatically converts CAD annotations into physical constraints
- · Apply Interactive Link in PebbloScope (bidirectional neuro-symbolic visualization)

<!-- stat-card -->
**Focus on **Depth of Data** — enhancing complex data handling and intelligent generation that understands unstructured information.**

#### PoC #4 · Full Autonomy & Platform Completion (months 10–12)

- · Complete the dedicated Agentic API Gateway for AADS agents
- · Full automation of Vector-to-Param (core patent US 12,481,720)
- · Autonomous PDIG loop with a Human-in-the-Loop Smart Gate

<!-- stat-card -->
**Focus on **Autonomy** — humans set goals, AI agents drive the entire process, and a Self-Driving Data Ops environment is realized.**

## Conclusion

### 5.1. The Paradigm Shift

We declare a transition — from an era of _collecting_ data we happen to find in the real world, to an era of **cultivating** data we deliberately design. PebbloSim is the cornucopia that supplies AI-ready data without the constraints of physical risk, cost, or time.

### 5.2. Business Impact

#### Growth

<!-- stat-card -->
**Through the Data Flywheel, the system evolves into an appreciating asset whose value grows with time.**

#### Trust

<!-- stat-card -->
**An audit trail compliant with ISO/IEC 5259 and ISO 42001 evidences the safety and transparency of AI models.**

In the era of Physical AI, collecting data is no longer enough. **Cultivating** it — and accumulating every piece of evidence about that cultivation in auditable form — is becoming the precondition for entering the market. PebbloSim is the center of that paradigm shift, the system that closes Data Greenhouse's diagnose-judge-generate-verify pipeline into a **fully automated operating framework**.

> [!callout]
> **Vision — essential infrastructure for the Physical AI era.** PebbloSim is the most powerful execution tool that realizes Pebblous's "Makes Data Tangible" vision. It will become the data infrastructure that allows Korea's flagship industries — automotive, defense, shipbuilding — to combine AI with manufacturing depth and secure decisive competitive advantage.

<!-- stat-card -->
**📚 Neuro-Symbolic × Ontology Series** — This article is part of a series curated in the [Neuro-Symbolic × Ontology hub](/project/NeuroSymbolicOntology/en/) — 13 pieces threading System 1/2 integration, ontology as a formal foundation, and the diverse approaches from Palantir and the Semantic Web to Pebblous CURK.
