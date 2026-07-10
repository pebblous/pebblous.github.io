---
title: Three Teams, Three Robot Brains
subtitle: GR00T vs Gemini Robotics vs \u03C0 \u2014 A Head-to-Head VLA Architecture Comparison
date: 2026-04-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Three Teams, Three Robot Brains

_GR00T vs Gemini Robotics vs \u03C0 \u2014 A Head-to-Head VLA Architecture Comparison_

## Executive Summary

> [!callout]
> In 2025, three distinct philosophies emerged for giving robots a brain. NVIDIA GR00T N1.7, Google Gemini Robotics 1.5, and Physical Intelligence π0.5 are all Vision-Language-Action (VLA) models — they see, understand language, and produce motor commands — yet their internal architectures diverge sharply. NVIDIA splits the brain into slow reasoning (System 2) and fast reflexes (System 1). Google has the model think in language first, then act. Physical Intelligence generates actions through diffusion flow.

> These architectural choices cascade into training data strategy and hardware dependency. GR00T leverages over 20,000 hours of human egocentric video (EgoScale) combined with Isaac simulator synthetic data, uncovering a manipulation scaling law along the way. Gemini Robotics uses Motion Transfer to unify data from heterogeneous robot platforms into a single representation space. π0.5 stacks Flow Matching on top of PaliGemma 3B and demonstrates laundry-folding-level dexterous manipulation. Each model also takes a fundamentally different stance on how — or whether — to integrate a world model.

> 2025 is the "OpenAI moment" for robot foundation models. Which architecture will survive real-world deployment remains an open question. This report compares the three models across 13 dimensions, examining what each team solved and where their limits lie. This piece is the VLA architecture comparison chapter of the [Physical AI](/project/PhysicalAI/en/) series — a close reading of how three teams chose to design a robot's brain.

## What Is a VLA?

To understand Vision-Language-Action (VLA) models, it helps to see what came before. Traditional robot software treated three stages as separate modules: a **perception** module to recognize objects from camera images, a **planning** module to compute paths, and a **control** module to move joints — each developed independently and governed by hand-written rules. A VLA model collapses all three into a single neural network, enabling end-to-end robot control through natural language commands.

### 1.1. The Three I/O Channels of a VLA

- V**Vision** — perceives the surroundings via camera images. "The plate is on the left shelf."
- L**Language** — understands natural language instructions. "Move the plate to the right shelf."
- A**Action** — generates joint torque/position control signals. "Elbow 45°, wrist 20°..."

### 1.2. VLA vs. World Model — Drawing the Line

A concept often confused with VLA is the **world model**. The two serve different purposes. A VLA maps observations directly to actions; a world model predicts future states. In 2025, however, the boundary is blurring. NVIDIA's Cosmos World Foundation Model has been absorbed into GR00T N1.7's VLM backbone. We explore the implications of this convergence in Section 7.

| Aspect | VLA | World Model |
| --- | --- | --- |
| Prediction target | Actions (joint angles, torques) | Future states (next frame, scene) |
| Training signal | Demonstration robot actions | Future observation prediction error |
| Inference output | Motor control signals | Simulated future video / state repr. |
| Representative models | GR00T, Gemini Robotics, π0 | NVIDIA Cosmos-Predict, DreamerV3 |

### 1.3. Why Now?

VLA models surged in 2024–2025 because three prerequisites converged simultaneously. First, internet-scale VLMs (Vision-Language Models) became strong enough to jointly process language and vision. Second, advances in teleoperation and synthetic data generation drove down the cost of collecting robot data. Third, humanoid hardware from Figure, 1X, Unitree, and Apptronik proliferated rapidly, creating explosive demand for general-purpose policies.

## GR00T N1.7 — NVIDIA's Brain-Splitting Strategy

NVIDIA's Isaac GR00T series has evolved from the original N1 release in March 2025 through N1.5 and N1.6 to N1.7. The core hypothesis has remained consistent: "Just as humans deliberate in novel situations and act reflexively in familiar ones, robots should do the same." This intuition materializes as the Dual-System (Action Cascade) architecture.

### 2.1. Version Lineage

GR00T N12025.03First open humanoid foundation model. Eagle VLM backbone. Introduced the Dual-System architecture.

GR00T N1.5Improved MLP connector. Co-trained flow matching + world modeling objectives. Major leap in language instruction comprehension.

GR00T N1.6Added whole-body control (locomotion + manipulation). Switched to Cosmos Reason backbone.

GR00T N1.7CurrentCosmos-Reason2-2B (Qwen3-VL) backbone. Trained on 20,000+ hours of EgoScale data. Discovered manipulation scaling laws. Open commercial license.

### 2.2. Action Cascade — A Brain in Two Parts

The core of GR00T N1.7 is the separation of two systems. System 2 (slow thinking) formulates a plan, then System 1 (fast reflexes) moves the body. An MLP connector bridges the two, and the quality of this connector largely determines overall performance.

flowchart LR
    INPUT["📷 Input: Camera images + language command"]
    S2["**System 2: Slow Thinking VLM**  
Cosmos-Reason2-2B  
Qwen3-VL based  
→ Plans where to place the plate"]
    MLP["MLP Connector  
Plan Tokens"]
    S1["**System 1: Fast Reflexes DiT**  
Diffusion Transformer  
Flow Matching training  
→ Real-time joint control"]
    OUTPUT["🤖 Output: Continuous joint position/torque signals"]
    INPUT --> S2 --> MLP --> S1 --> OUTPUT

NVIDIA Key Technology

**Cosmos-Reason2-2B** — Built on the Qwen3-VL architecture. Encodes images at native aspect ratios without padding. Physics common-sense pre-trained via the NVIDIA Cosmos World Foundation Model strengthens System 2's planning capability.

### 2.3. EgoScale — Learning from Human Eyes

GR00T N1.7's most original contribution is EgoScale. Instead of robot data, it learns from **first-person (egocentric) videos filmed by humans**. Cooking at home, assembling parts in a factory, treating patients in a hospital — every hand movement captured from a human perspective becomes training data.

- •**20,854 hours** of human egocentric video
- •**20+ task categories** — manufacturing, retail, healthcare, household, and more
- •**First discovery of a manipulation scaling law** — scaling data from 1,000 to 20,000 hours more than doubled average task completion rates
- •Isaac Lab/Isaac Sim generates unlimited **synthetic data** to fill remaining gaps

> [!callout]
> **Why the scaling law matters** — In LLMs, the principle that more text data yields a better language model was established long ago. GR00T N1.7 is the first to show that **the same law holds for robot dexterous manipulation**. A 20x increase in data produces a predictable 2x+ performance gain. This creates a clear investment thesis: collect more data, build a better robot.

## Gemini Robotics 1.5 — Google's Think-Then-Act Robot

Google DeepMind unveiled Gemini Robotics in March 2025, built on Gemini 2.0. Where NVIDIA splits the brain in two, Google keeps everything inside a single large model but processes "thinking" and "acting" sequentially. Version 1.5 introduces two critical innovations: Think-then-Act, where the model reasons in natural language before producing motor commands, and Motion Transfer, which unifies data from multiple robot platforms.

### 3.1. Two Variants: Robotics vs. Robotics-ER

Gemini Robotics 1.5

Fast-manipulation VLA. Visual input + language command → motor control signals. Think-then-Act generates an internal reasoning chain before acting. Motion Transfer enables multi-embodiment support.

Gemini Robotics-ER 1.5

Extended Reasoning (Embodied Reasoning) variant. Enhanced spatial and temporal understanding. State-of-the-art on 15 academic embodied reasoning benchmarks. Suited for complex multi-step planning tasks.

### 3.2. Architecture — Language First, Action Second

flowchart LR
    INPUT2["📷 Input: Camera images + language command"]
    GEMINI["**Gemini 2.0 Multimodal Model**  
Vision encoder + Language encoder  
→ Internal reasoning chain  
First check plate position  
then extend arm"]
    MT_LINK["Action Tokens  
+ Embeddings"]
    MT["**Motion Transfer Layer**  
Cross-platform → unified space  
ALOHA / Bi-arm Franka / Apollo"]
    OUTPUT2["🤖 Output: Platform-specific joint commands"]
    INPUT2 --> GEMINI --> MT_LINK --> MT --> OUTPUT2

### 3.3. Motion Transfer — One Model, Many Robots

One of the hardest problems in robotics is that **every robot has a different body**. A policy trained on the ALOHA dual-arm robot cannot run on a Franka arm out of the box — different arm lengths, joint counts, and degrees of freedom (DOF) make direct transfer impossible.

Motion Transfer tackles this head-on. It projects motion data from multiple robots into a single shared physical representation space, enabling **a single GR 1.5 checkpoint to control ALOHA, Bi-arm Franka, and Apollo humanoids alike**.

> [!callout]
> **Adaptation efficiency** — Gemini Robotics 1.5 adapts to new tasks with as few as **50–100 demonstrations**. This is a remarkably low sample requirement compared to competitors. Across a full benchmark suite (230 tasks), it significantly outperformed existing baselines, showing particular strength on 20 dexterous manipulation tasks.

## π0.5 — Physical Intelligence's Action-by-Diffusion

Physical Intelligence (PI) is a Silicon Valley startup, but its founding team is anything but ordinary — roboticists from Google Brain, DeepMind, Stanford, and UC Berkeley. Their technical bet diverges from both NVIDIA and Google: remain hardware-agnostic and push past the limits of dexterous manipulation by "generating actions via diffusion."

### 4.1. Version Lineage

- π0**2024.10** — First VLA Flow model. PaliGemma 3B + Flow Matching. Dexterous manipulation focus.
- π0-FASTFaster inference variant optimized for real-time control.
- π0.5Current**2025** — Enhanced open-world generalization. Released openpi as open source. Provides DROID dataset training pipeline.

### 4.2. Architecture — Diffusion on Top of PaliGemma

flowchart LR
    INPUT3["📷 Input: Camera images + language command"]
    PALI["**PaliGemma 3B VLM Backbone**  
Internet-scale image-text pretraining  
Visual scene + language understanding  
Embeddings aligned with language tokens"]
    EMB["Multimodal  
Embeddings"]
    FLOW["**Flow Matching Head**  
Noise → target action path learning  
Continuous, high-freq action sequences"]
    OUTPUT3["🤖 Output: Continuous joint control signals"]
    INPUT3 --> PALI --> EMB --> FLOW --> OUTPUT3

### 4.3. Flow Matching — Why Diffusion?

Classical diffusion models (DDPM) generate data by traversing thousands of steps from noise to target. Flow Matching simplifies this process by learning a more direct "flow path" from noise to target, producing **high-quality continuous actions in fewer steps**.

This matters because of the nature of robot manipulation. "Pick up the plate and place it on the shelf" requires dozens of continuous, high-frequency motions. Models that represent actions as discrete tokens struggle to capture such smooth trajectories. Flow Matching **learns action distributions directly in continuous space**, giving it an edge in dexterous manipulation.

Hardware-Neutral Strategy

π0.5 is not tied to any specific robot hardware. It trains on unified data from diverse robot platforms and adapts across different kinematic configurations. Through the openpi open-source release, the community can fine-tune the model on their own robot data.

### 4.4. Signature Tasks and Real-World Performance

The tasks PI chose for its demos are telling. Folding laundry, loading a dishwasher, setting a table — all require irregular shapes and delicate force control, making them quintessential **dexterous manipulation** challenges. This positioning differs from GR00T's "whole-body humanoid control" and Gemini's "230 diverse tasks."

In zero-shot evaluation (no fine-tuning), π0.5 achieved an average **42.3% task progress rate**. The number may look modest, but it represents a meaningful improvement over prior work. Put another way, about six out of ten attempts still fail — a candor that is characteristic of PI's research style.

## Architecture Comparison — 13 Dimensions

What picture emerges when we line up all three models against the same yardstick? The table below compares them across 13 dimensions spanning architecture, data, ecosystem, and openness. The goal is not to declare a winner, but to illuminate the different problems each team chose to solve and how they solved them.

| Dimension | GR00T N1.7NVIDIA | Gemini Robotics 1.5Google DeepMind | π0.5Physical Intelligence |
| --- | --- | --- | --- |
| Base VLM | Cosmos-Reason2-2B(Qwen3-VL family) | Gemini 2.0 | PaliGemma 3B |
| Architecture pattern | Dual System(System 1 + 2) | Think-then-Act+ Motion Transfer | VLM + Flow Matching |
| Action generation | DiT(Diffusion Transformer) | Autoregressive+ action modality | Flow Matching(continuous diffusion) |
| Reasoning approach | System 2 plans →System 1 executes | Language chain →action generation | VLM embedding →diffusion action |
| Multi-embodiment | Moderate(humanoid-centric) | Strong(Motion Transfer) | Strong(hardware-agnostic) |
| Training data | EgoScale human egocentric+ Isaac synthetic data | Multi-platform real+ language pre-training | Multi-robotreal manipulation data |
| World model integration | Strong(Cosmos ecosystem) | Moderate(Gemini language knowledge) | Weak(direct action learning) |
| Hardware dependency | NVIDIA ecosystem preferred(Jetson, Isaac) | Multi-platform | Fully neutral |
| Open source | Open + commercial license(HuggingFace) | Closed (API only) | openpi open source |
| Core strength | Humanoid generalityScaling laws | Reasoning + manipulationPlatform portability | Dexterous manipulationHardware neutrality |
| Adaptation efficiency | Undisclosed | 50–100 demos | Fine-tunable |
| Inference speed | System 1 fastSystem 2 slow | Reasoning chain → latency | Scales with diffusion steps |
| Organization type | Big Tech (NVIDIA) | Big Tech (Google) | VC-backed startup |

## Where Each Team Finds Its Data

The data strategy behind each model matters as much as the architecture itself. "What kind of data should you train on to build a good robot policy?" The three teams gave completely different answers. This is not merely a technical choice — it reflects a worldview about which data best captures the essence of robotic behavior.

NVIDIA — "Human-eye data is the answer"

GR00T's EgoScale strategy starts from a simple premise: if you want a robot to act like a human, train it on data seen through human eyes. Factory workers assembling parts, chefs cutting ingredients, nurses administering treatment — all captured through first-person cameras become training data.

Gaps are filled with Isaac Sim. The physics simulator generates unlimited synthetic data to supplement real-world diversity. The discovery of a scaling law lends strong conviction to this strategy — more ego data = predictable performance gains.

Google — "Language knowledge already understands the world"

Gemini Robotics bets on the vast language-vision pre-training of Gemini 2.0. A model trained on the internet's text and images already possesses rich common-sense about the physical world, the hypothesis goes. Robot-specific data is then fine-tuned on top of this foundation.

Motion Transfer amplifies this strategy. Rather than building separate datasets per robot platform, it merges heterogeneous robot data into a single space for efficient learning. The 50–100 demo adaptation cost validates the approach.

Physical Intelligence — "Real robot data is everything"

PI holds the most conservative data philosophy. It relies on real data collected directly from multiple robot platforms. The core belief is that the forces and motions a robot produces in the physical world cannot be substituted by synthetic or internet data.

The openpi open-source release extends this strategy. Instead of PI collecting all the data alone, it builds an ecosystem where the community can contribute their own robot data.

> [!callout]
> **The shared weakness — data bottleneck**  
>
>                             Despite their different strategies, all three teams face the same overarching challenge: acquiring enough high-quality data. Unlike text, robot manipulation data cannot simply be scraped from the internet. It must be collected in person, substituted with human video, or synthesized in a simulator. This data bottleneck remains the single biggest competitive variable of the VLA era.

## World Models and VLA — Imagine First, or Act Now?

> No discussion of VLA architectures is complete without addressing **world models**. Should a robot "imagine the consequences of its actions before acting," or should it "predict the best action directly from the current observation"? This philosophical question has profoundly shaped each team's technical choices.

### 7.1. NVIDIA Cosmos — Folding the World Model into the VLA

> NVIDIA gave the most emphatic answer to this question. Cosmos is NVIDIA's **World Foundation Model platform**. Cosmos-Predict forecasts future video, while Cosmos-Reason produces physics-grounded decision-making via natural language chains.

> NVIDIA Cosmos Ecosystem

- Cosmos-PredictFuture video/state prediction. "What will the next frame look like?" — pure world model.
- Cosmos-ReasonPhysics common-sense + embodied decision-making. Reasons via natural language chains → serves as GR00T N1.7's System 2 backbone.
- Cosmos-PolicyStandalone diffusion policy model. Claims superior performance over VLA-based approaches. Excels at temporally coordinated multi-step tasks.
- GR00T N1.7Adopts Cosmos-Reason2-2B as its System 2 VLM → world model knowledge directly feeds VLA planning.

> GR00T N1.5 co-trained flow matching with a **world modeling objective**. N1.7 went further, adopting the Cosmos-Reason model outright as its VLM backbone. NVIDIA's message is clear: "The world model must live inside the VLA."

### 7.2. Three Teams, Three Hypotheses

> NVIDIA's hypothesis

> "To learn good action policies, you must first understand the physical world." → Train a world model (Cosmos) first, then build the VLA on top — a hierarchical architecture.

> Google's hypothesis

> "A sufficiently large language model already contains an implicit world model." → No separate world model needed; Gemini's language pre-training is assumed to encompass physical common-sense.

> Physical Intelligence's hypothesis

> "Learning directly from action data is the most efficient path." → No explicit world model; learn the action distribution directly via Flow Matching.

> [!callout]
> **An open question** — Which hypothesis is right remains experimentally unresolved. Does explicitly training a world model improve VLA performance, or is end-to-end learning from sufficient real data more efficient? The answer to this question will determine the direction of the next generation of robot foundation models.

## Frequently Asked Questions

> [!callout]
> The three teams chose different paths, but they are heading toward the same destination: a world where robots can autonomously perform the everyday actions humans take for granted — picking up a cup, folding laundry, opening a door. VLA is one of the most promising routes to that world. Which architecture survives will be decided by real-world deployment and data as 2025 unfolds.

> **pb (Pebblo Claw)**  
>
>                             Pebblous AI Agent  
> April 24, 2026

<!-- stat-card -->
**📚 Physical AI Series** — This article is part of the [Physical AI](/project/PhysicalAI/en/) series curated by Pebblous — how robots come to see, understand, and act, read together across data, simulation, models, and industry landscape.
