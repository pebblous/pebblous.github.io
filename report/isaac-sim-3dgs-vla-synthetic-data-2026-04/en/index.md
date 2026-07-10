---
title: Giving Robots Eyes
subtitle: How 3D Gaussian Splatting Is Reshaping Synthetic Data for Physical AI
date: 2026-04-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Giving Robots Eyes

_How 3D Gaussian Splatting Is Reshaping Synthetic Data for Physical AI_

## Executive Summary

> [!callout]
> The hardest problem in Physical AI is not the model. It is the data. Training a Vision-Language-Action (VLA) model requires hundreds of thousands of manipulation trajectories, but collecting them with real robots is prohibitively slow and expensive. NVIDIA's GR00T N1 makes the point in stark terms: 88 hours of real-world data were augmented with 780K synthetic trajectories (6,500 hours), putting the synthetic share at roughly **98%**. Yet the visual fidelity gap between mesh-based rendering and the real world has long crippled zero-shot sim-to-real transfer.

> 3D Gaussian Splatting (3DGS) is closing that gap. At **100-200+ FPS**, it delivers photorealistic rendering tens of times faster than NeRF (1-5 FPS) while matching its visual quality. SplatSim achieved **86.25%** zero-shot sim-to-real success by simply swapping a physics simulator's meshes with Gaussian Splats. RoboSplat went further: from just a single real demonstration, 6-DoF augmentation on 3DGS yielded **87.8%** one-shot success, crushing the 57.2% baseline of hundreds of real demos plus 2D augmentation.

> NVIDIA's ecosystem is scaling this convergence to production. A four-layer stack of NuRec (reconstruction) + Warp (physics) + Cosmos (generative infill) + Marble (environment generation) forms an enterprise-grade pipeline. The Khronos glTF 3DGS standard (RC released, Q2 2026 ratification expected) and OpenUSD 3DGS support (ratified April 2026) are making 3DGS the "JPEG of 3D." With the synthetic data market projected to reach $1.79-3.7B by 2030 (CAGR 35-42%), quality assurance infrastructure for 3DGS-based synthetic data becomes the trust layer this market needs.

> For Pebblous, this shift is immediate. PebbloSim orchestrates Isaac Sim (physics simulation) and 3DGS (photorealistic rendering) in tandem, and Data Greenhouse's "zero-physical hallucination" quality guarantee is its core value proposition. This piece is the synthetic-data chapter of the [Physical AI](/project/PhysicalAI/en/) series — how do we paint the world a robot will learn from?

<!-- stat-card -->
**200+ FPS** — 3DGS Real-Time Rendering

<!-- stat-card -->
**780K** — Synthetic Trajectories (11 hrs)

<!-- stat-card -->
**+40%** — Mixed Training Boost

<!-- stat-card -->
**87.8%** — 1-Demo Sim-to-Real

<!-- stat-card -->
**$23B** — Embodied AI Market (2030)

## The Data Bottleneck in Physical AI

Physical AI is not stuck because of model limitations. It is stuck because of data limitations. Just as self-driving cars need billions of miles of driving logs, a robot arm needs hundreds of thousands of manipulation trajectories to learn how to grasp a cup, open a drawer, or move an object. The problem is that gathering this data with real robots means physical time and cost that scale exponentially.

### 1.1. GR00T N1: The Numbers Tell the Story

The training data breakdown of NVIDIA's GR00T N1, unveiled at GTC in March 2025, proves the case for synthetic data in hard numbers. Real robot data totaled just 88 hours. Isaac Sim-generated synthetic trajectories reached **780K episodes spanning 6,500 hours**. That puts the synthetic share at about 98%. And generating those 780K trajectories took only **11 hours**, a 591x efficiency gain over real-world collection.

Models trained on the real-synthetic mix outperformed real-data-only models by **40%**. Synthetic data was no longer just supplementing real data; it had become the backbone of training.

### 1.2. Data Hunger Across VLA Models

This is not unique to GR00T N1. Google DeepMind's pi0, successor to RT-2, was trained on **10,000+ hours** of data. OpenVLA drew on **970K episodes** from the Open X-Embodiment dataset, itself a collection of **1M+ trajectories across 527 skills** from 34 labs and 22 robot types. No single organization could realistically collect data at this scale.

### 1.3. The Synthetic Data Market Explosion

The market confirms the trend. Gartner estimated that roughly 60% of AI projects already used synthetic data as of 2024. The synthetic data market is projected to grow from $310-576M (2024) to $1.79-3.7B by 2030 (CAGR 35-42%). Embodied AI is growing even faster: from $4.44B (2024) to **$23.06B** by 2030, at a 39% CAGR (MarketsandMarkets).

> [!callout]
> **Key takeaway:** What holds Physical AI back is not model size or architecture but the quantity and quality of training data. Synthetic data is no longer optional. The question has narrowed to: "How realistic can we make it?"

## How 3DGS Changes Simulation

Using simulators to produce synthetic data is nothing new. Physics engines like MuJoCo, Isaac Sim, and CoppeliaSim are already standard tools in robotics research. The bottleneck was rendering. Mesh-based rasterization is fast but visually far from the real world, and that gap sabotaged sim-to-real transfer. NeRF improved visual quality but at 1-5 FPS, making large-scale data generation impractical.

3D Gaussian Splatting (3DGS) resolves both problems at once.

### 2.1. 3DGS vs NeRF vs Rasterization

The table below compares the three rendering approaches on key metrics. 3DGS strikes the optimal balance between NeRF's visual quality and rasterization's speed.

| Metric | 3D Gaussian Splatting | NeRF | Raster (Mesh) |
| --- | --- | --- | --- |
| Rendering FPS | 100-200+ | 1-5 | 1,000+ |
| Visual Quality (PSNR) | 27.43 | 27.68 | Limited photorealism |
| Training Time | 23 min (FastGS: 100s) | 30 hours | N/A |
| Representation | Explicit (Gaussian points) | Implicit (MLP) | Explicit (mesh/polygon) |
| Sim-to-Real Transfer | 86-88% zero/one-shot | Unverified (speed constraint) | Low (visual gap) |
| Editability | Intuitive (GS swap/deform) | Difficult (retraining needed) | High (mature pipeline) |
| Standardization | glTF RC (Q2 2026), OpenUSD (2026.04) | None | Mature (glTF, USD) |

********

NeRF does edge out 3DGS slightly in PSNR (27.68 vs 27.43). But in real-time simulation, speed is decisive. When you need to generate hundreds of thousands of trajectories for VLA training, the gap between 1-5 FPS and 200+ FPS is the gap between a lab prototype and a production pipeline.

### 2.2. The SplatSim and RoboSplat Breakthroughs

Two studies proved 3DGS's practical value. CMU's **SplatSim** (CoRL Workshop 2024) replaced the mesh rendering in an existing physics simulator (MuJoCo) with Gaussian Splats, leaving the physics engine untouched. Just by changing the rendering layer, zero-shot sim-to-real success hit **86.25%**, dramatically narrowing the gap to the 97.5% achieved by real-data-trained models.

InternRobotics' **RoboSplat** (RSS 2025) pushed even further. From **a single real demonstration**, it performed 6-DoF augmentation (object type, pose, appearance, lighting, viewpoint, robot embodiment) using 3DGS's explicit representation. The result: **87.8%** one-shot success, crushing the 57.2% achieved by hundreds of real demos plus 2D augmentation. The explicit, point-based nature of 3DGS made intuitive editing possible.

**RoboGSim** (arXiv 2024) addressed an even more fundamental question: Can a model trained exclusively on 3DGS synthetic data match or beat one trained on real data? The answer was yes. In fact, the synthetically trained model showed stronger generalization to novel viewpoints and unseen scenes.

### 2.3. Standardization: Toward "the JPEG of 3D"

2026 is the year 3DGS becomes a standard. The Khronos Group released the **glTF KHR_gaussian_splatting** Release Candidate in February 2026, with ratification expected in Q2 2026. Backers include Google, NVIDIA, Apple, Bentley Systems, Niantic, Cesium, and Esri. In the same timeframe, **OpenUSD 3DGS support** was ratified in April 2026, enabling interoperability across NVIDIA Omniverse, Pixar, and Apple Vision Pro.

Limitations remain, however. In a February 2026 blog post, Waymo acknowledged the "visual quality degradation when leaving the capture path" inherent to 3DGS reconstruction and pivoted to a generative model (Genie 3-based World Model). This is a constraint for autonomous driving, where extensive novel views are required, but for robotic manipulation in bounded workspaces, 3DGS reconstruction remains highly effective. NVIDIA's NuRec (reconstruction) + Cosmos (generative infill) hybrid addresses both sides.

## Beyond Static Scenes — Physics Integration in Dynamic GS

The biggest limitation of 3DGS is that it was originally designed for static scenes. Robots need to pick, push, and stack objects, which means scenes must change. This limitation has been addressed rapidly since 2024.

### 3.1. Three Approaches to Physics-Integrated GS

**PhysGaussian** (CVPR 2024 Highlight, Stanford/UIUC) integrated the Material Point Method (MPM) into 3DGS, enabling simulation of elastic bodies, plastic metals, non-Newtonian fluids, and granular materials. The key insight is that the same Gaussian kernel serves both rendering and physics simulation. With 279+ citations, it established the theoretical foundation for physics-integrated 3DGS.

**Physically Embodied Gaussians** (CoRL 2024, Boston Dynamics AI Institute) introduced a "Gaussian-Particle" dual representation. Particles drive physics simulation and predict future states; Gaussians are attached to particles for rendering. The difference between predicted and observed images generates "visual forces" that correct the physics state, forming a closed-loop architecture. It runs at **30Hz real-time** with just three cameras.

**GaussTwin** (ICRA 2026) integrated Position-Based Dynamics (PBD) and Cosserat rod models with 3DGS, creating a digital twin that handles both rigid and deformable bodies. It was validated on a Franka Research 3 robot performing real push tasks.

### 3.2. Dynamic GS Research Landscape

The table below compares nine key studies in physics-integrated 3DGS. The field has matured rapidly from 2024's theoretical foundations (PhysGaussian, 4D GS) to 2025-2026's robotic validations (GaussTwin, GWM).

| Study | Venue | Physics Method | Robot Validation | Key Differentiator |
| --- | --- | --- | --- | --- |
| PhysGaussian | CVPR 2024 | MPM solver | None | First physics integration, 4 material types |
| 4D GS | CVPR 2024 | Deformation field | Indirect | 82 FPS, successor 1000+ FPS |
| Embodied Gaussians | CoRL 2024 | Particle physics | Real-time world model | Predict-correct closed loop, 30Hz |
| Deformable GS | CVPR 2024 | Monocular deformation | Indirect | 50% storage reduction, 200% FPS boost |
| RoboGSim | arXiv 2024 | Real2Sim2Real 4-stage | Zero-shot transfer | Synthetic-only matches real data |
| GaussTwin | ICRA 2026 | PBD + Cosserat rod | Franka validation | Rigid + deformable physics digital twin |
| GWM | ICCV 2025 | Gaussian Diffusion Transformer | IL/MBRL | 3D world model, scaling |
| GS-LTS | arXiv 2025 | Gaussian editing | Long-term service robot | Active scene update |
| i-PhysGaussian | arXiv 2026 | Implicit physics | None | PhysGaussian successor, extended materials |

At present, fully general-purpose physics simulation on par with a dedicated engine like Isaac Sim has not been achieved within 3DGS alone. The practical solution today is a **"Isaac Sim physics + 3DGS rendering" hybrid**, with physics-integrated 3DGS representing the future convergence point.

> [!callout]
> **The Newton physics engine** also deserves attention. Jointly announced at GTC in March 2025 by NVIDIA, Google DeepMind, and Disney Research, this open-source engine provides Warp-based differentiable physics and achieves a closed-loop connection with 3DGS rendering (Warp + gsplat).

## The NVIDIA Technology Stack

Individual research breakthroughs do not become production pipelines on their own. They need an integrated ecosystem. NVIDIA has built that integration proactively with a four-layer stack: NuRec (reconstruction) + Warp (physics) + Cosmos (generative infill) + Marble (environment generation).

### 4.1. NuRec — Productionizing 3DGS Reconstruction

**Omniverse NuRec**, released as GA at GTC in March 2026, is built on NVIDIA's in-house 3DGS variant called 3DGUT (3D Gaussian Unscented Transform). Its key differentiator is native support for nonlinear camera projections (fisheye, rolling shutter), meaning it can directly process sensor data from real robots and vehicles.

NuRec reconstruction results export as USD files that integrate directly into Isaac Sim. Integration with CARLA, the autonomous driving simulator used by 150,000+ developers, is also complete. NVIDIA even demoed reconstructing an Isaac Sim simulation environment from smartphone footage alone.

### 4.2. Warp + gsplat — Closing the Physics-Rendering Loop

In a July 2025 blog post, NVIDIA unveiled the Warp + gsplat closed-loop architecture. The physics engine (Warp) updates particle states; the differentiable renderer (gsplat) renders Gaussians; the visual error between rendered and observed images generates corrective forces fed back into the physics engine. With just a few images and basic physics priors, this creates a digital twin that serves as "the robot's mental model."

### 4.3. Cosmos — Filling the Gaps Reconstruction Cannot

**Cosmos Predict 2.5** (December 2025) plays a complementary role to 3DGS rendering. Where 3DGS provides the geometric backbone (scene reconstruction), Cosmos's Fixer model uses diffusion to remove 3DGS rendering artifacts and restore unobserved regions. This is the hybrid architecture that addresses the "reconstruction alone is not enough" limitation Waymo identified.

### 4.4. World Labs Marble — From Text to Simulation

The NVIDIA-World Labs partnership announced in December 2025 changed the paradigm for building simulation environments. Input a text or image prompt, and Marble generates a 3D scene via Gaussian Splatting. After PLY export and NuRec conversion to USDZ, the scene imports directly into Isaac Sim. What used to take **weeks** to build now takes **hours**.

Caveats remain: PLY-to-USDZ conversion is still in beta, and 4D GS sequences are not yet supported in USDZ. For now, the practical approach is **static 3DGS backgrounds + Isaac Sim dynamic objects**.

### 4.5. Isaac Sim Version Timeline

Isaac Sim's 3DGS integration is progressing in stages.

| Version | Date | 3DGS-Related Changes |
| --- | --- | --- |
| Isaac Sim 5.0 | H1 2025 | First NuRec neural reconstruction integration |
| Isaac Sim 5.1.0 | October 2025 | Kit 107.3.3, improved semantic segmentation |
| Isaac Sim 6.0 | 2026 (pre-release) | Multi-backend physics, pluggable renderer |

## The Six-Stage VLA Data Pipeline

The 3DGS + Isaac Sim VLA training data pipeline breaks down into six stages. Data quality verification is essential at every stage; a defect at any point directly degrades the final VLA model's performance.

| Stage | Name | Core Technology | Key Tools | Quality Checkpoint |
| --- | --- | --- | --- | --- |
| 1 | Real-World Capture | RGB-D, LiDAR, smartphone | NuRec, Scaniverse | Sensor noise, camera pose accuracy |
| 2 | Digital Twin Construction | 3DGS reconstruction + physics properties | PhysGaussian, GaussTwin, Warp | PSNR, geometric fidelity |
| 3 | Scene Synthesis / Augmentation | GS editing, Domain Randomization | RoboSplat, World Labs Marble | Distribution diversity, physical plausibility |
| 4 | Interaction Simulation | Physics engine + GS rendering | Isaac Sim + SplatSim | Collision/contact accuracy |
| 5 | Data Quality Verification | Statistical consistency, bias detection | PebbloSim, DataClinic | Physical hallucination detection, distribution validation |
| 6 | VLA Training / Evaluation | Trajectory + image + language integration | GR00T N1, GeoPredict | Sim-to-Real transfer rate |

### 5.1. From Capture to Twin (Stages 1-2)

The first stage reconstructs the real world as 3DGS. NuRec performs 3DGUT-based reconstruction from smartphone footage or RGB-D sensor data. SplaTAM (CVPR 2024, CMU) is a SLAM technique that lets a robot build a 3DGS map in real time while exploring its environment, delivering **2x the performance** of prior approaches. In the second stage, physics properties are assigned to the reconstructed scene. PhysGaussian or Warp assigns mass, elasticity, and friction to each Gaussian.

### 5.2. From Augmentation to Simulation (Stages 3-4)

The third stage diversifies the scene. RoboSplat's 6-DoF augmentation (object replacement, pose variation, appearance/lighting/viewpoint changes, robot embodiment swaps) is the prime example. The explicit representation of 3DGS makes this editing intuitive. World Labs Marble can generate entirely new simulation environments from text prompts alone.

In the fourth stage, Isaac Sim's physics engine simulates robot-environment interactions while 3DGS renders each frame photorealistically. The SplatSim approach (keep the physics engine, swap the rendering to GS) is currently the most practical method.

### 5.3. From Verification to Training (Stages 5-6)

The fifth stage verifies the quality of generated synthetic data. Physical consistency (Is gravity correct? Are collision responses natural?), visual fidelity (Are there artifacts? How are unobserved regions handled?), and distributional bias (Is the data skewed toward certain viewpoints or lighting conditions?) must all be systematically checked. Skipping this stage risks "Physical Hallucinations" contaminating the training data.

In the sixth stage, verified synthetic data feeds into VLA model training. **GeoPredict** (arXiv 2024) directly couples 3D geometric prediction with VLA models, using 3DGS geometry only during training with zero inference overhead. **GaussianVLM** (2025) compresses 40K Gaussians into just 132 tokens for direct input into a VLM, becoming the first Gaussian-based 3D VLM.

## Why Pebblous Is Watching

The explosion of 3DGS-based synthetic data raises a new question. Being able to generate data at scale does not automatically mean it is good data. In fact, as synthetic data volumes grow, finding the defects hidden within becomes even harder.

### 6.1. Where PebbloSim Meets the 3DGS Pipeline

PebbloSim orchestrates Isaac Sim (physics simulation) and 3DGS (photorealistic rendering) as a unified system. Within the six-stage pipeline described in this report, PebbloSim sits primarily at Stage 5 (data quality verification). Its core capabilities include detecting 3DGS reconstruction artifacts, classifying unobserved regions, and flagging inconsistencies between physics simulation and rendering.

### 6.2. Data Quality Determines Sim-to-Real Success

SplatSim's 86.25% and RoboSplat's 87.8% success rates are encouraging, but the flip side is that 12-14% still fail. A significant portion of these failures trace back to Physical Hallucinations in the training data: objects that defy gravity, robot arms that phase through walls, lighting conditions that cannot exist in reality. When these slip into the dataset, the model learns policies that do not work in the real world.

DataClinic's data quality diagnostics address this problem head-on. Reconstruction quality (PSNR, geometric fidelity), physical plausibility (collision and contact accuracy), and distributional balance (domain randomization bias) are systematically diagnosed. Guaranteeing "zero-physical hallucination" is the core value proposition of both DataClinic and PebbloSim.

### 6.3. Opportunities in Korea's Ecosystem

Superb AI is currently the only company in Korea running a production-grade Isaac Sim + 3DGS synthetic data pipeline. Through the Korean government's "Dok-Pa-Mo" program (a national initiative to build core AI datasets for strategic industries), the company is constructing 1.08 million frames of Korean robot data. On the academic side, KAIST Prof. Sung-Eui Yoon's SHARE technology demonstrated a low-cost approach to 3D scene reconstruction from ordinary video without precise camera positioning (ICIP 2025 Best Student Paper Award). Research results are emerging as well: Prof. Sungkil Lee's team at Sungkyunkwan University (SKKU) proposed DC4GS (NeurIPS 2025), which leverages gradient directional consistency to reduce 3DGS primitive counts by up to 30% while improving reconstruction quality. Primitive efficiency directly impacts rendering speed and memory in large-scale synthetic data generation, making it foundational technology for practical simulation pipelines. KISTI's computational infrastructure and the SW StarLab program also serve as accelerators for this ecosystem.

Yet no one in Korea currently provides **quality assurance infrastructure** for synthetic data. As the synthetic data market grows to $1.79-3.7B (2030) and the humanoid TAM expands to $38B (2035, Goldman Sachs), preempting the "trust layer" of this market is Pebblous's positioning.

### 6.4. Questions for Further Exploration

We close this report with the questions Pebblous plans to investigate next.

- •What is the floor for 3DGS reconstruction quality? Below what PSNR threshold does VLA training performance degrade sharply?
- •What is the optimal distribution for domain randomization? Is matching real-world distributions more effective than uniform sampling?
- •How far can automated detection of Physical Hallucinations go? What is the performance gap between single-frame and sequence-based inspection?
- •Does the optimal mix ratio of synthetic to real data vary by task? Can GR00T N1's 98% synthetic share serve as a universal benchmark?

> [!callout]
> 3DGS gave robots eyes. But not everything the eyes see is true. Verifying that simulation-generated data obeys real-world physics with precision is the next problem Data Greenhouse and PebbloSim are built to solve.

## References

1. Kerbl, B. et al. "3D Gaussian Splatting for Real-Time Radiance Field Rendering." ACM TOG (SIGGRAPH 2023).
2. Xie, T. et al. "PhysGaussian: Physics-Integrated 3D Gaussians for Generative Dynamics." CVPR 2024 Highlight. arXiv: 2311.12198.
3. Li, S. et al. "RoboGSim: A Real2Sim2Real Robotic Gaussian Splatting Simulator." arXiv: 2411.11839 (2024).
4. Wu, G. et al. "4D Gaussian Splatting for Real-Time Dynamic Scene Rendering." CVPR 2024. arXiv: 2310.08528.
5. Abou-Chakra, J. et al. "Physically Embodied Gaussian Splatting." CoRL 2024. arXiv: 2406.10788.
6. Keetha, N. et al. "SplaTAM: Splat Track & Map 3D Gaussians for Dense RGB-D SLAM." CVPR 2024. arXiv: 2312.12235.
7. Qureshi, A. et al. "SplatSim: Zero-Shot Sim2Real Transfer of RGB Manipulation Policies Using Gaussian Splatting." CoRL Workshop 2024. arXiv: 2409.10161.
8. Yang, Z. et al. "RoboSplat: Scaling Up Robot Data by One-Shot Gaussian-Splatting Data Augmentation." RSS 2025. arXiv: 2504.13175.
9. GeoPredict. "Geometry-Aware VLA." arXiv: 2512.16811 (2024).
10. GaussianVLM. "Language-Aligned Gaussian Splats for 3D VLM." arXiv: 2507.00886 (2025).
11. GaussTwin. "Physics-Integrated Gaussian Digital Twin." ICRA 2026. arXiv: 2603.05108.
12. Lu, S. et al. "GWM: Gaussian World Model for Robotic Manipulation." ICCV 2025. arXiv: 2508.17600.
13. NavGSim. "Large-Scale Navigation Simulator with Gaussian Splatting." arXiv: 2603.15186 (2026).
14. Wu, J. et al. "RL-GSBridge: 3D Gaussian Splatting Based Real2Sim2Real Method for Robotic Manipulation Learning." arXiv: 2409.20291 (2024).
15. NVIDIA. "Omniverse NuRec Documentation." [docs.nvidia.com/nurec](https://docs.nvidia.com/nurec/) (2026).
16. NVIDIA. "Building Robotic Mental Models with NVIDIA Warp and Gaussian Splatting." NVIDIA Developer Blog (2025-07).
17. NVIDIA. "Cosmos World Foundation Models." [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools) (2025-12).
18. NVIDIA. "Simulate Robotic Environments Faster with Isaac Sim and World Labs Marble." NVIDIA Developer Blog (2025-12).
19. Khronos Group. "glTF Gaussian Splatting Extension Release Candidate." [khronos.org](https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release) (2026-02).
20. Waymo. "The Waymo World Model: A New Frontier for Autonomous Driving Simulation." Waymo Blog (2026-02).
21. Zhu, Z. et al. "3D Gaussian Splatting in Robotics: A Survey." arXiv: 2410.12262 (2024).
22. NVIDIA. "GR00T N1: Open Foundation Model for Humanoid Robots." GTC 2025 (2025-03).
23. Open X-Embodiment Collaboration. "Open X-Embodiment: Robotic Learning Datasets and RT-X Models." ICRA 2024.
24. MarketsandMarkets. "Embodied AI Market." (2024). / Grand View Research. "Synthetic Data Generation Market." (2024).
25. Superb AI. "Building Synthetic Data Pipelines with NVIDIA Isaac Sim." [blog-ko.superb-ai.com](https://blog-ko.superb-ai.com/nvidia-isaac-sim-synthetic-data-pipeline/)
26. Jeong, M. et al. "DC4GS: Directional Consistency-Driven Adaptive Density Control for 3D Gaussian Splatting." NeurIPS 2025. arXiv: 2510.26921.

<!-- stat-card -->
**📚 Physical AI Series** — This article is part of the [Physical AI](/project/PhysicalAI/en/) series curated by Pebblous — how robots come to see, understand, and act, read together across data, simulation, models, and industry landscape. — It is also curated in the [Graphics for Physical AI](/project/GraphicsForPhysicalAI/en/) hub — where 3DGS and differentiable rendering become a robot's eyes.
