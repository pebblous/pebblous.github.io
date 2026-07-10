---
title: Money Is Pouring Into Physical AI
subtitle: Big Tech, Startups, and Korea Read the Board
date: 2026-04-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Money Is Pouring Into Physical AI

_Big Tech, Startups, and Korea Read the Board_

## Executive Summary

> [!callout]
> Everyone talks about "Physical AI," but few can see who is actually building this market. In 2025, robotics startup VC funding surpassed $13.8 billion, and humanoid-specific investment surged 300% year-over-year. Figure AI's valuation grew 15x in 18 months; Skild AI tripled in just seven.

> This report dissects the Physical AI ecosystem across three tiers: full-stack Big Tech (NVIDIA, Google, Tesla, Amazon), hardware + AI startups (Figure AI, Skild AI, Apptronik, 1X, PI), and Korea (Rainbow Robotics, HD Hyundai, K-Humanoid Alliance). Each player has entered this market with distinct roles and strategies.

> The real competition is not about a single robot. "Who will control the robot OS" is the central question of this war. NVIDIA has already drawn Figure AI, Boston Dynamics, Agility, and Skild AI into its Isaac ecosystem. The winner of this platform war will collect a software tax on every piece of hardware. This piece is the industry-landscape chapter of the [Physical AI](/project/PhysicalAI/en/) series — reading where capital and platforms actually flow.

$13.8B

2025 Robotics VC  
(YoY +77%)

$6.1B

2025 Humanoid-Specific  
(YoY +300%)

15x

Figure AI Valuation  
18-Month Growth

3x

Skild AI Valuation  
7-Month Growth

## 1. What Is Physical AI — Defining the Term

"Physical AI" is a term NVIDIA pushed to the forefront at CES 2025, but the concept is broader than any single company. It refers to AI that operates in the physical world, not the digital one. Where ChatGPT predicts text tokens, Physical AI perceives reality through cameras and sensors and acts on it through motors and actuators.

### The Scope of Physical AI

- •Humanoid robots — bipedal locomotion, dexterous manipulation
- •Manipulator robots — industrial arms, precision assembly
- •Autonomous vehicles — Tesla FSD, Waymo
- •AMRs (Autonomous Mobile Robots) — warehouse automation
- •Drones/UAVs, surgical robots

> [!callout]
> This report focuses on the VLA-based humanoid and manipulator robot ecosystem — the domain where AI directly learns action policies. A text-prediction error can be corrected; a robot-action error has physical consequences. That is the fundamental difference between Physical AI and LLMs.

## 2. Ecosystem Map — Three Tiers of Players

The Physical AI ecosystem is anything but simple. Big Tech, startups, and specialized component/software companies form three distinct tiers, each playing a different role. Companies building complete robots, companies building the AI that runs on them, and companies supplying the parts — understanding this structure is the key to reading investment flows.

Tier 1 · Full-Stack Big Tech

### AI + Hardware + Platform Vertical Integration

| Company | Strategy | Key Assets |
| --- | --- | --- |
| NVIDIA | AI infra + platform dominance | Isaac, Cosmos, GR00T, Jetson |
| Google/DeepMind | AI model + partnerships | Gemini Robotics, RT-X legacy |
| Tesla | Vertical integration (in-house HW+AI) | Optimus, FSD data, Dojo |
| Amazon | Deployment (warehouses) + investment | Agility Robotics acquisition, Digit |

Tier 2 · Hardware + AI Startups

### Beyond Unicorn — Into Decacorn Territory

| Company | Founded | Valuation | Key Investors |
| --- | --- | --- | --- |
| Figure AI | 2022 | $39B | NVIDIA, Microsoft, OpenAI, Bezos |
| Skild AI | 2023 | $14B | SoftBank, NVIDIA |
| Apptronik | 2016 | $5.3B | Google, Mercedes, John Deere |
| 1X Technologies | 2014 | ~$10B | OpenAI |
| Physical Intelligence | 2023 | Undisclosed | OpenAI, Bezos, Khosla |
| Boston Dynamics | 1992 | Hyundai-owned | Hyundai, SoftBank |

Tier 3 · Component & Software Specialists

### Hardware-Agnostic — The Layer That Sits on Every Robot

| Domain | Key Players |
| --- | --- |
| Manipulation AI | Covariant (Amazon-backed), Intrinsic (Google) |
| Foundation Policies | Skild AI ("Universal Brain"), Physical Intelligence |
| Simulation | NVIDIA Isaac Sim, MuJoCo (DeepMind) |
| Robot OS | ROS 2, Isaac ROS (NVIDIA) |
| Actuators / Components | Korea & Japan supply chain |

## 3. NVIDIA — The Infrastructure Play

NVIDIA's Physical AI strategy does not end with selling chips. The goal is to own the entire vertical stack: GPU (training) to simulator (Isaac Sim) to foundation model (GR00T) to on-device chip (Jetson Thor) to deployment platform (Isaac ROS). Their declaration of becoming "the Intel of the AI era" is now extending into the physical world.

### Core Components of the Isaac Ecosystem

NVIDIA Isaac is not a single product but a stack covering the entire robot development pipeline. It is designed so that developers never need to leave NVIDIA tools from training to deployment.

Isaac SimHigh-fidelity physics simulator. Generates unlimited synthetic data to address real-world data scarcity.

Isaac LabRobot learning framework. Runs reinforcement learning + imitation learning in GPU-parallel mode.

Isaac ROSGPU-accelerated deployment layer built on ROS 2. Optimized for real-time inference.

CosmosWorld foundation model. Predict (future forecasting) + Reason (physics reasoning) + Policy (action policy).

GR00T N1.7Open VLA foundation model. Released as open source — free distribution, monetized through infrastructure.

Jetson ThorOn-device AI chip for robots. Atlas (Boston Dynamics) runs on Jetson Thor.

NewtonOpen-source physics engine (released Sep 2025). Competes with MuJoCo.

### Partnerships Already Secured

Figure AI, Boston Dynamics, Agility Robotics, Franka Robotics, Skild AI, Disney Research — all have adopted the Isaac ecosystem. This is a clear signal that NVIDIA's strategy is working.

> [!callout]
> NVIDIA's real weapon is not GR00T alone. It is the ecosystem where robot developers train on NVIDIA hardware, run inference on NVIDIA chips, and deploy on NVIDIA's platform. Open-sourcing GR00T is part of this strategy — give the model away for free, and profit from the infrastructure underneath.

## 4. Google/DeepMind — Model Advantage + Hardware Neutrality

Google's robotics history runs deep. In 2023, RT-X (Robotics Transformer-X) set a precedent for multi-institution collaborative robot learning. With the arrival of Gemini 2.0, the Gemini Robotics line began integrating language reasoning with robot action in earnest.

### Google's Differentiators

- •Hardware-neutral: Not tied to any specific robot platform. Partners with Apptronik, ALOHA, and others.
- •Apptronik investment: Google is a major investor. The Apollo humanoid runs Gemini Robotics policies.
- •Gemini Robotics On-Device (Jul 2025): A lightweight version that runs inside the robot without cloud connectivity.
- •Multi-embodiment: Motion Transfer enables a single checkpoint to support multiple hardware platforms.

### Google's Limitations

Google does not build robot hardware — it depends on partnerships. Gemini Robotics is API-based, limiting customization compared to open-source models. Unlike NVIDIA, Google lacks a vertical ecosystem spanning chips, simulators, and deployment platforms.

> [!callout]
> Google's position is "build the best AI model and let partners handle the hardware." This is both a strength and a weakness. Regardless of which hardware wins the market, Google's model can sit on top — but its influence at the robot OS level remains limited compared to NVIDIA.

## 5. Tesla — Data Flywheel + Vertical Integration

As of late 2025, over 1,000 Tesla Optimus units have been deployed in factories. But as Musk himself has acknowledged, none are yet doing "useful work." They are in a data-collection phase for training and iteration. The Optimus V3 is slated to begin production at Fremont in the second half of 2026.

### Tesla's Real Weapon

It is the FSD (Full Self-Driving) data pipeline. The hypothesis that real-world driving data from millions of Tesla vehicles, combined with the Dojo supercomputer, can be repurposed for Optimus training is what drives market expectations. However, the actual transferability of autonomous driving data to manipulation learning remains unproven.

> [!callout]
> Tesla's position is full vertical integration — Dojo supercomputer (training) + FSD pipeline (data) + Optimus (hardware) + in-house factories (deployment). None of this infrastructure is open to external robots. It holds the strengths and weaknesses of a closed ecosystem simultaneously. It is also the player with the widest gap between announcements and actual deployment.

## 6. The Startup Ecosystem — Where Money Meets Vision

The most striking phenomenon in the 2025 Physical AI startup landscape is the speed of valuation growth. Companies have surged 3x to 15x in just 7 to 18 months. Whether this reflects real revenue potential or AI-hype premium — the answer will come from commercial deployment results in 2026-2027.

Figure AI

$39B15x / 18 months

Founded 2022. Grew from $2.6B (Feb 2024) to $39B (Sep 2025). Demonstrated revenue viability with BMW factory deployment. Joint investment from NVIDIA, Microsoft, OpenAI, and Bezos. Uses both its proprietary VLA model (Helix) and GR00T.

Skild AI

$14B3x / 7 months

Founded 2023 by CMU robotics researchers. $1.4B investment from SoftBank and NVIDIA. "Skild Brain" — aims to build a universal action policy applicable to any robot, any task.

Apptronik

$5.3B($935M raised)

Apollo humanoid. Backed by Google, Mercedes-Benz, John Deere, and Qatar's sovereign wealth fund. Commercial deployment strategy centered on manufacturing and logistics. Uses Google Gemini Robotics as its policy layer.

1X Technologies

~$10B(under negotiation)

Norway-based. Early investment from OpenAI. Developing the Neo model. The largest European robotics startup by scale.

Physical Intelligence (pi)

Undisclosed

Software (policy) only — no hardware. Backed by OpenAI, Bezos, and Khosla. Open-sourced pi-0 to build community. Hardware-agnostic strategy provides policies to any robot partner.

### Agility Robotics — The Only Real Deployment

As of 2026, the only humanoid deployed at meaningful commercial scale is Agility's Digit. It performs empty-tote transfer tasks at Amazon, GXO, and Toyota facilities. Amazon acquired the company and is prioritizing internal logistics deployment.

> [!callout]
> "The flashiest demo" and "a robot that actually makes money" are two different things. So far, only Agility's Digit qualifies for the latter. The rest remain in demo or pilot stages. ABI Research projects 2026-2027 as the decisive period for closing this gap.

## 7. Korea's Physical AI — The Quiet Supply-Chain Powerhouse

There is a reason global analysts call Korea "the quiet winner." It is not about finished robots — it is the component supply chain. Reducers, motors, actuators, sensors — regardless of which robot company builds the final product, these parts come from Korea and Japan. Hyundai, Samsung, and SK are deeply embedded in this supply chain.

### Rainbow Robotics — From KAIST to Samsung

Founded by Professor Oh Jun-ho's team at KAIST — the same group that built HUBO, Korea's first humanoid, in 2005. In late 2024, Samsung Electronics exercised its call option and raised its stake from 14.7% to 35%, making Rainbow effectively a Samsung subsidiary. Two decades of accumulated expertise in joints, control systems, and actuators is the core asset.

### HD Hyundai Robotics + Boston Dynamics

Hyundai Mobis signed a partnership with Boston Dynamics in January 2026. Hyundai Mobis will produce the actuators for the commercial version of Atlas. Hyundai's ownership of Boston Dynamics strengthens production capacity through this collaboration.

### K-Humanoid Alliance

Launched in December 2025. Combines Samsung Electronics, Hyundai Motor, SK Inc., Rainbow Robotics, and specialized component SMEs. The Korean government's "Physical AI Core Technology PoC" program is led by KAIST as the principal research institution.

> [!callout]
> Korea's position is unique. It cannot directly compete with Figure AI or Boston Dynamics in finished robots, but whoever wins the end-game, the internal components of their robots will come from Korea. This is the essence of the "quiet winner" strategy. Rainbow Robotics (Samsung subsidiary) is building additional competitiveness on the software + hardware integration side.

## 8. Investment Trends — The Physical AI Boom in Numbers

2025 marks a historic inflection point for Physical AI investment. Total robotics startup VC funding surpassed the 2021 AI-boom peak ($13.1B) for the first time, and humanoid-specific investment grew 143x in four years.

| Year | Robotics Startup VC Total | Humanoid-Specific | Notes |
| --- | --- | --- | --- |
| 2020 | — | $42.6M | Baseline |
| 2023 | $8.0B | $1.5B | Around VLA emergence |
| 2024 | $7.8B | $1.5B | Pre-GR00T announcement |
| 2025 | $13.8B (+77%) | $6.1B (+300%) | Surpassed 2021 peak |

### Investor Positioning by Player

Follow the money and the strategy reveals itself. NVIDIA invests broadly across its Isaac ecosystem partners. OpenAI bets on the software policy layer. SoftBank goes all-in on the universal brain (Skild AI).

| Investor | Key Bets |
| --- | --- |
| NVIDIA | Figure AI, Apptronik, Skild AI + multiple strategic partnerships |
| SoftBank | Skild AI ($14B) — with prior Boston Dynamics investment experience |
| OpenAI | Figure AI, 1X Technologies, Physical Intelligence |
| Bezos | Figure AI, Physical Intelligence |
| Google | Apptronik |
| Microsoft | Figure AI |
| John Deere | Apptronik (farm equipment to humanoid strategy) |

> [!callout]
> ABI Research identifies 2026-2027 as the commercial inflection point for Physical AI. 139 deals, +300% growth — the numbers are impressive, but the question "bubble or boom?" will persist until these investments translate into actual products and deployments.

## 9. The Platform War — Who Will Own the Robot OS

Think about the smartphone war. Nokia, Motorola, Samsung — who won? Not the hardware makers. iOS and Android — the software platforms — won. Robotics follows the same logic. Regardless of which hardware gets built, the software platform running on top controls the ecosystem.

### Current Platform Landscape

Below is a relative positioning based on ecosystem influence — a composite of partner adoption, vertical integration depth, and developer tooling maturity.

NVIDIA Isaac

Figure, Atlas, Agility, Skild

ROS 2 (Open Source)

Neutral base, coexists with Isaac ROS

Google (API)

Apptronik partner, no hardware

Tesla (Closed)

Optimus-only, no external access

### NVIDIA's Open-Source Strategy

NVIDIA did not open-source GR00T out of charity. Even if the model is free, training requires DGX (NVIDIA GPU servers) and inference requires Jetson. The more the ecosystem builds on NVIDIA, the more chip demand grows.

> [!callout]
> Current scoreboard in the "Robot OS War": NVIDIA Isaac leads. Most major hardware players have already joined the Isaac ecosystem. ROS 2 coexists as a neutral base. Google is strong at the model layer but weak at the platform layer. Tesla is closed off and disconnected from the external ecosystem. For this to change, Google or a new entrant would need to massively expand hardware partnerships.

## Frequently Asked Questions

### What is the difference between Physical AI and software AI?

Software AI (LLMs, generative AI) processes digital data — text, images, and so on. Physical AI perceives the physical world through cameras and sensors and acts on it through motors and actuators. The key difference: real-world physics cannot be hand-waved away. A text-prediction error can be corrected; a robot-action error has physical consequences.

### Why did investment explode in 2025?

Three conditions converged. First, VLA models made "universal robot policies" technically feasible. Second, hardware maturity reached deployment level with Figure AI, Boston Dynamics Atlas, and others. Third, post-ChatGPT AI investment sentiment overheated and robotics emerged as "the next AI wave."

### What role do Korean companies play?

Korea's strength lies in the component supply chain rather than finished robots. Reducers, motors, actuators — regardless of which robot hardware company succeeds, these parts are sourced from Korea and Japan. Rainbow Robotics (Samsung subsidiary) competes in software + hardware integration, and the K-Humanoid Alliance is building a national-level collaboration framework.

### How far along is Tesla Optimus?

As of April 2026, Musk himself has admitted that "no Optimus is doing useful work yet." Over 1,000 units are deployed in factories, primarily for data collection and training. Commercial production is scheduled to begin in the second half of 2026. It is the player with the largest gap between announcements and reality.

### What justifies Figure AI's $39B valuation?

Investors cite three factors. BMW factory deployment demonstrated revenue potential. NVIDIA, Microsoft, OpenAI, and Bezos all investing signals strong strategic backing. And sector-wide optimism toward robotics adds a premium. The 15x growth in 18 months reflects a bet on future potential rather than current revenue.

### Why does Skild AI call itself the "Universal Brain"?

Skild AI's goal is not a model specialized for a specific task or platform, but a universal action policy usable on any robot, for any task. It shares a similar positioning with Physical Intelligence's pi series, but Skild Brain claims broader generality. The SoftBank + NVIDIA investment combination represents a major bet on this thesis.

### Which of these players will survive?

As of 2026, the only humanoid deployed at meaningful commercial scale is Agility's Digit. Companies that possess the full hardware + AI + deployment pipeline are most likely to survive. Those with flashy demos but no deployment track record will struggle in the capital-burn race. In the platform competition, NVIDIA currently holds the most advantageous position.

<!-- stat-card -->
**📚 Physical AI Series** — This article is part of the [Physical AI](/project/PhysicalAI/en/) series curated by Pebblous — how robots come to see, understand, and act, read together across data, simulation, models, and industry landscape.
