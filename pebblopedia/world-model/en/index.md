---
title: World Model
subtitle: [PebbloPedia] From Kids to Experts: Five Levels of One AI Concept
date: 2026-03-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# World Model

_[PebbloPedia] From Kids to Experts: Five Levels of One AI Concept_

## About This Article

> [!callout]
> **PebbloPedia** is Pebblous's knowledge series that explains one topic at five levels of depth. This edition focuses on **World Models** — the technology that lets AI simulate the world in its "mind" before it ever sees or acts.

> Whether you're a curious kid or a seasoned researcher, you can start at any level. Too hard? Step back one level. Want to go deeper? Jump to the next.

🧒Level 1 — Elementary

Analogies and stories. "An AI that imagines the future."

🎒Level 2 — Middle / High School

How World Models differ from VLMs and VLAs, and why prediction matters.

🎓Level 3 — Undergrad

Latent space, JEPA, Dreamer, diffusion-based world models — the tech stack.

🔬Level 4 — Expert

V-JEPA 2, Cosmos, Genie 3: 2025–2026 frontier research and open problems.

🧙Level 5 — Wizard 🧙

Poetic insight from the wizard's view. "Imagination walks first."

## World Models for Kids

🧒Elementary Level — Analogies & Stories

Before AI acts, it thinks inside its head — just like you imagine whether you can jump over a puddle before actually jumping. This ability to **simulate the world before acting** is called a World Model.

### 🎮 Imagine a Game AI

Picture Mario facing a gap. A smart Mario AI might think:

- • "At my current speed... I can probably jump across."
- • "Actually, I might need to run a little faster first."
- • "Let me play it through in my head first!"

That ability to **picture the outcome before trying** is exactly what a World Model does. Humans do it naturally; teaching AI to do the same is surprisingly hard.

### ☁️ Like Predicting the Weather

When a weather forecast says "Rain tomorrow," the meteorologist looked at today's clouds, pressure, and wind to **predict** the future. A World Model works the same way: the AI looks at the current situation and calculates, "What happens if I do this?"

### 🧸 AI Without a World Model

An AI without a World Model is like running with your eyes closed — you only find out there's a wall when you crash into it. With a World Model, the AI **predicts the wall is there** and steers around it before impact.

### 🏎️ Where Can You See This?

- • **Self-driving cars** — predicting what happens if the car in front brakes suddenly
- • **Robot arms** — imagining where fingers will land before grabbing an object
- • **AlphaGo** — thinking hundreds of moves ahead in its mind
- • **Game AI** — planning strategy by predicting consequences of each move

<!-- stat-card -->
**✅ One-sentence takeaway** — World Model = the ability of an AI to imagine the future in its head before acting — like picturing the outcome before you leap.

## World Models Explained by Principles

🎒Middle / High School Level — Principles & Mechanisms

AI has evolved in three major steps: **AI that sees (VLM)**, **AI that sees and acts (VLA)**, and **AI that sees, imagines, then acts (World Model)**. Understanding the difference shows you exactly why World Models matter.

### 📊 VLM vs VLA vs World Model

| Type | What It Does | What It Can't Do | Examples |
| --- | --- | --- | --- |
| VLMVision-Language Model | Looks at images, answers questions, describes scenes | Cannot act or predict the future | GPT-4o, Claude |
| VLAVision-Language-Action | Sees → outputs action commands directly | Cannot simulate outcomes before acting | RT-2, GR00T N1 |
| World Model | Sees → imagines future → picks the best action | Higher compute cost | V-JEPA 2, Cosmos |

****  
****  
****

### 🤔 Why Does "Imagining the Future" Matter?

Think about catching a baseball. You don't just stick your hand out the moment you see the ball. Instead, in a fraction of a second, your brain calculates:

- • "Given the speed and angle of the ball…"
- • "It will arrive at that spot in about 0.3 seconds."
- • "So I need to move my hand 20 cm up and to the left."

This **predict → plan → act** loop is the heart of a World Model. A VLA sees the ball and tries to move — but it's already too late. A World Model calculates the future and reacts **proactively**.

### 🧠 An Idea Born in Neuroscience

The concept of the World Model actually traces back to psychologist Kenneth Craik, who proposed in 1943 that the human brain maintains an **Internal Model** of the outside world. That's why you can walk through a dark room you know well — your brain has a map of it. AI researchers started applying this idea to machines 70 years later.

1943Year Kenneth Craik proposed the "Internal Model" theory

2018DreamerV1 — first practical learnable world model for AI

30×Faster robot planning by V-JEPA 2 vs. NVIDIA Cosmos

1.2BV-JEPA 2 parameters (trained on 1M+ hours of video)

<!-- stat-card -->
**✅ One-sentence takeaway** — World Model = AI that sees → imagines possible futures → chooses the best action. Because it pre-computes outcomes, it acts smarter than a VLA.

## World Models Through a Technical Lens

🎓Undergrad Level — Architecture & Tech Stack

Technical definition: a World Model is **a generative model that takes observation o_t and action a_t as inputs and predicts the next state o_{t+1}**. The key is that this prediction happens in _latent space_, not pixel space.

### 🏗️ The Four Components of a World Model

① Encoder

Compresses high-dimensional observations (images, video) into low-dimensional latent vectors z_t. ViT or CNN-based. Retains important information, discards noise.

② Predictor

Takes the current latent z_t and action a_t, predicts the future latent ẑ_{t+k}. Transformer-based architectures dominate. This is the core module of a World Model.

③ Decoder

Reconstructs images from latent vectors when needed. Required by generative world models (Cosmos). Prediction-only models (V-JEPA 2) can omit it entirely.

④ Reward / Value Model

Computes reward signals from simulated future states. Essential when combined with reinforcement learning (RL). Evaluates which action sequence is optimal.

### 🔬 JEPA vs. Generation-Based World Models

World Model implementations generally split into two schools of thought.

| Dimension | JEPA Family | Generation-Based |
| --- | --- | --- |
| Prediction space | Latent space (no pixel reconstruction) | Pixel / token space |
| Key models | I-JEPA, V-JEPA 2 | NVIDIA Cosmos, Genie 3, Sora |
| Training efficiency | High (ignores unnecessary detail) | Low (reconstructs every pixel) |
| Planning speed | Fast (V-JEPA 2: 30× advantage) | Slow (video generation is expensive) |
| Strengths | Robot planning, real-time control | Data synthesis, visualization, creative simulation |

********************

### 📚 Key Technical Concepts

RSSM / Dreamer

Recurrent State Space Model. Hafner et al. (2018–). The first practical world model framework for RL in latent space. Achieved SOTA on Atari and continuous control benchmarks.

JEPA

Joint Embedding Predictive Architecture. LeCun et al. Self-supervised learning by predicting between latent representations of two views — no pixel reconstruction required.

MPC

Model Predictive Control. Simulates multiple action sequences with the world model → selects the one closest to the goal → executes only the first action → repeats. V-JEPA 2's robot planning strategy.

<!-- stat-card -->
**✅ One-sentence takeaway** — World Model = Encoder compresses observations → Predictor forecasts future latent states → MPC selects the optimal action. The closer to latent space, the faster and more efficient.

## World Models at the Research Frontier

🔬Expert Level — 2025–2026 Frontier

2025 was an inflection point for World Models. NVIDIA Cosmos introduced physics-grounded video generation; V-JEPA 2 demonstrated MPC-based robot control; Google DeepMind's Genie 3 enabled interactive 3D environment synthesis — three distinct trajectories emerging simultaneously. Here we examine what each solves and what remains open.

### 🚀 2025 Model Landscape

V-JEPA 2NVIDIA · Jun 2025

1.2B parameters. Pre-trained on 1M+ hours of video. Learns physics purely by predicting in latent space — no pixel reconstruction. **Achieves 30× faster robot planning than NVIDIA Cosmos via MPC integration.** Performs zero-shot robot arm manipulation. Logged 62 hours of continuous autonomous manipulation without fine-tuning. Key limitation: compounding errors on long-horizon tasks (horizon > 10).

NVIDIA CosmosNVIDIA · Jan 2025

Physics-based world simulator and video generation model. Text/image/video → photorealistic, physically consistent video. **Core component of the GR00T Blueprint synthetic data pipeline.** Provides specialized checkpoints for autonomous driving, robotics, and digital twins. Limitation: high compute cost, slower planning than V-JEPA 2. Strength: rich visual synthesis and data augmentation.

Genie 3Google DeepMind · 2025

A single text prompt generates an **interactive 3D world environment** instantly. Produces causally consistent virtual environments that respond to user actions. Can serve as an infinite training ground for RL agents. While Genie 2 (2024) generated 2D worlds, Genie 3 extends to 3D with physical consistency. Limitation: Sim-to-Real transfer to physical robots still limited.

DreamerV3Google DeepMind · 2023–

SOTA across diverse domains (Atari, DMC, Crafter, Minecraft diamond collection) without hyperparameter tuning. Current best in RSSM-based latent-space RL. Trains World Model + Actor-Critic end-to-end. **Demonstrated long-horizon planning by collecting diamonds in Minecraft** — previously considered infeasible — by practicing in imagination.

### ⚠️ Open Problems

① Absence of Causal Reasoning

Current World Models learn "B follows A" but not "A causes B." This is why predictions break down on out-of-distribution inputs — the model has pattern knowledge but lacks causal understanding.

② Compounding Error

Small prediction errors accumulate over long horizons. 10-step rollouts may look fine; 100-step rollouts typically fail. A shared limitation of Dreamer-family models.

③ Data Efficiency

Acquiring sufficient physical knowledge still requires massive video corpora. Humans generalize physics from a handful of experiences; current World Models cannot yet do the same.

④ Reliable Uncertainty Estimation

Knowing when to say "I don't know" — calibrated uncertainty quantification — remains immature. Overconfident predictions under novel conditions can lead to dangerous robot behaviors.

<!-- stat-card -->
**✅ One-sentence takeaway** — In 2025, World Models diverged into three branches — prediction speed (V-JEPA 2), visual synthesis (Cosmos), and environment generation (Genie 3). Causal reasoning and long-horizon error accumulation remain the critical open challenges.

## The Wizard's World Model

🧙Wizard Level — Poetic Insight

From the moment we are born, we begin building a model of the world. When an infant drops a cup and hears it shatter, something is written in the brain: "solid objects make noise when they fall." We spend our entire lives updating this internal model. AI's World Model is an attempt — in equations — to replicate the miracle that 3.8 billion years of evolution produced.

— Imagination Walks First —

Humans know how to walk before they walk.Have you ever watched a newborn's legs move through the air,feet that have never touched the ground already walking?

To give a machine a World Modelis to give it the gift of dreams —a space to imagine before acting,a safe interior to fail before failing for real.

But be careful.Imagination is not precise.World Models get things wrong.Errors accumulate with every step.

What makes humans remarkableis not perfect prediction,but knowing how to compare a wrong imagining against realityand correct it.AI's World Model must learn the same —to know what it does not know. The grace of uncertainty.

To model a worldis not to declare you understand it.It is a humble promiseto be wrong alongside it, and learn alongside it.

<!-- stat-card -->
**🧙 Wizard's Insight** — The real goal of a World Model is not to simulate the world perfectly — it is to fail well enough to learn from failure. Human intelligence works the same way: not through perfect prediction, but through rapid correction and the continuous loop of learning.

## Dive Deeper

Deep Dive

VLM & VLA Limits and the Rise of World Models

A Pebblous deep-dive analyzing V-JEPA 2, Cosmos, and Genie 3 as the next architecture for Physical AI.

[/project/AgenticAI/world-model-rise/en/](/project/AgenticAI/world-model-rise/en/)PebbloPedia

Physical AI

The story of AI stepping off the screen and into a body. Physical AI — the backdrop to World Models — in the same five-level format.

[/pebblopedia/physical-ai/en/](/pebblopedia/physical-ai/en/)

<!-- stat-card -->
**📚 World Model Series** — This article is part of the series curated by the [World Models](/project/WorldModel/en/) hub — the two paths AI takes to understand the world and predict the future, from intro to JEPA, Sora, and Genie, five articles in one place.
