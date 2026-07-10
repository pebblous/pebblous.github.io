---
title: Do Factory AIs Truly Understand Machines — FactoryBench Exposes the Limits of LLMs
subtitle: All LLMs Score Below 18% on L4 Decision-Making — Definitive Evidence of the Data Bottleneck in Industrial Robot Telemetry
date: 2026-05-12
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Do Factory AIs Truly Understand Machines — FactoryBench Exposes the Limits of LLMs

_All LLMs Score Below 18% on L4 Decision-Making — Definitive Evidence of the Data Bottleneck in Industrial Robot Telemetry_

## Executive Summary

> [!callout]
> FactoryBench (arXiv:2605.07675) is the first LLM benchmark to evaluate industrial robot time-series sensor data across Pearl's four-level Causation Ladder. With approximately 71,000 Q&As, 15,000 episodes, 27 fault types, and 100+ sensor channels, even the top model (Claude Sonnet 4.6) scored below 47% on L1-L3 structured reasoning, while GPT-5.1 reached only 17.7% on L4 decision-making. Current LLMs fundamentally cannot "understand" the time-series signals of industrial machines.

> These findings converge with evidence from the VLM (Vision-Language Model) domain. In BlueprintSymVL, the top VLM (Gemini 2.5 Pro) achieved only 50.5% EMR on engineering drawing symbol recognition. NVIDIA Cosmos VLM jumped from 14.37% zero-shot to 96.8% after fine-tuning on domain data — an **82.4pp** improvement. Florence-2 (0.23B) outperformed GPT-4o by 52.4% F1 using just 400 domain samples. Regardless of modality (time-series/image), the Data-Centric AI thesis — that data, not the model, is the bottleneck — has been quantitatively validated on both fronts simultaneously.

> The manufacturing AI market is growing from **$34.18B** (2025) to **$155.04B** (2030, CAGR 35.3%), yet while 95% of companies invest and 48% pilot AI, only 5.5% see meaningful financial returns. FactoryBench provides the first LLM time-series benchmark data to prove that the root cause of this "Pilot Purgatory" is data quality.

<!-- stat-card -->
**<18%** — Max L4 Decision-Making Accuracy Across All LLMs — FactoryBench · GPT-5.1 best at 17.7%

<!-- stat-card -->
**82.4pp** — Zero-shot vs Fine-tuning Accuracy Gap — NVIDIA Cosmos · 14.37% → 96.8%

<!-- stat-card -->
**$34B→$155B** — Manufacturing AI Market (2025→2030) — CAGR 35.3% · MarketsandMarkets

## FactoryBench — The First Exam for Industrial Machine Understanding

FactoryBench (arXiv:2605.07675, Merzouki et al., 2026) is the first specialized benchmark for evaluating how well LLMs "understand" the time-series sensor data of industrial robots. Unlike prior industrial AI benchmarks focused on image-based defect detection or drawing interpretation, FactoryBench directly presents LLMs with robot sensor time-series telemetry and requires causal reasoning. The core of this approach lies in Pearl's four-level Causation Ladder framework.

### 1.1. Pearl's 4-Level Causation Ladder

Pearl's Causation Ladder divides causal reasoning difficulty into four levels. FactoryBench is the first to apply this framework to industrial robot telemetry, enabling hierarchical measurement of how deeply LLMs understand industrial data.

| Level | Type | What is Evaluated | Example Question |
| --- | --- | --- | --- |
| L1 | State (perception) | Reading current sensor state | "What is the starting point of the 15-timestep window for lifting phase separation?" |
| L2 | Intervention (action prediction) | Predicting behavior after an event | "Sort the signal segments in order after the T=850ms impact" |
| L3 | Counterfactual (hypothetical) | Reasoning about hypothetical scenarios | "Predict acceleration at T+500ms when a payload spike occurs" |
| L4 | Decision (problem-solving) | Problem diagnosis + optimization | "Identify the root cause and recovery steps from the sensor stream" |

### 1.2. Scale and Composition of the Dataset

The FactoryBench dataset comprises approximately **15,000 episodes** collected from three sources. FactoryWave (newly collected, 8,983 episodes) was recorded directly from a UR3 cobot (125Hz) and a KUKA KR10 industrial robot arm (83Hz). Combined with existing datasets AURSAD (4,094 episodes) and voraus-AD (2,122 episodes), this generated a total of approximately **71,000 Q&As**. Sensor channels include joint states, torque, force, TCP pose, gripper state, and task phase — **100+ channels** in total — with **27 fault types** systematically injected.

Two aspects of this dataset design stand out. First, it includes two robot types (cobot and industrial arm) to assess cross-robot generalizability. Second, data with different sampling frequencies (125Hz vs 83Hz) is intentionally mixed to test whether LLMs are robust to frequency differences. Combined with Pearl's four-level framework, this data structure serves as a tool to hierarchically reveal "how deeply LLMs understand industrial time-series."

> [!callout]
> FactoryBench is fundamentally different from existing benchmarks in two ways. First, its subject is LLMs (time-series text), not VLMs (images). Second, performance is measured not by simple accuracy but by Pearl's Causation Ladder hierarchy, enabling distinction of "how far understanding reaches."

## SOTA LLM/VLM Scoreboard — The Gap From Human Experts

Zero-shot evaluation of six LLMs on FactoryBench paints a stark picture of the current state of industrial AI. In structured reasoning (L1-L3), Claude Sonnet 4.6 led the pack — yet all scores (L1 46.8%, L2 47.1%, L3 45.9%) fell below 50%. Only three models meaningfully exceeded the non-LLM baseline (28.4%).

| Model | L1 (State) | L2 (Intervention) | L3 (Counterfactual) | L4 (Decision) |
| --- | --- | --- | --- | --- |
| Claude Sonnet 4.6 | 46.8% | 47.1% | 45.9% | 4.3% |
| GPT-5.1 | 30.9% | 30.0% | 31.7% | 17.7% |
| Qwen3-235B | 36.0% | — | 43.6% | — |
| Mistral Large 3 | 34.6% | 31.7% | 36.3% | — |
| DeepSeek V3.2 | 25.0% | 29.1% | 28.5% | — |
| Qwen3-4B | 21.8% | 27.5% | 28.8% | — |
| Non-LLM Baseline | 28.4% | — | — | — |

Source: Merzouki et al. (2026), FactoryBench, arXiv:2605.07675. Chance-corrected accuracy %.

### 2.1. The Protocol-Signal Dissociation Phenomenon

The most striking pattern in this scoreboard is "Protocol-Signal Dissociation." GPT-5.1 ranked 4th in L1-L3 structured reasoning, yet took **1st place in L4 decision-making at 17.7%**. L4 questions include problems answerable by retrieving text knowledge in the form of manuals and protocols. L1-L3, by contrast, requires directly reading and interpreting actual sensor time-series patterns.

This asymmetry carries a clear message: an LLM's ability to "retrieve" industrial manuals and its ability to "understand" sensor time-series data are entirely separate competencies. Even in GPT-5.1's L4 results, 79.6% of problem-solving tasks ended in complete success or complete failure — polarized outcomes — and it never achieved a perfect score on optimization tasks. The pattern of generating generic advice instead of specific parameters was clearly observed.

### 2.2. VLMs Face the Same Wall

LLMs' limits in time-series understanding converge with VLMs' limits in industrial image understanding. In BlueprintSymVL, the top VLM (Gemini 2.5 Pro) achieved only **50.5%** EMR on engineering drawing symbol recognition. In iSafetyBench, the best accuracy for industrial safety video classification was **43.8%** (Ovis2-8B), with GPT-4o trailing even smaller open-source models at 38.8%. In MVTec AD 2 (2025 edition), even SOTA methods fell below an average AU-PRO of **60%**. The dramatic gap — models scoring 85%+ on the general benchmark MMMU but collapsing to 30–50% in industrial domains — is consistently observed across all these benchmarks.

> [!callout]
> FactoryBench's two core findings are clear. First, even today's top LLMs understand industrial time-series data at only around the 50% level. Second, protocol retrieval capability and signal understanding capability are decoupled — quantitatively validating the field observation that "AI can find maintenance manuals well but cannot diagnose failure causes from actual sensor data."

## Why AI Fails in the Factory — Anatomy of the Domain Gap

The root cause of FactoryBench scores lies not in model architecture but in data. The industrial domain (time-series/telemetry) is drastically underrepresented in pre-training data. In large web-crawled datasets like LAION-5B, time-series data from industrial robot sensors is virtually absent. We are asking LLMs to understand data they have never seen.

### 3.1. What Makes Industrial Time-Series Data Unique

Industrial robot sensor data is fundamentally different from ordinary text or images. The data used in FactoryBench alone has 100+ channels (joint states, torque, force, TCP pose, gripper state) recorded simultaneously at 125Hz (UR3) or 83Hz (KUKA). Physical correlations exist between channels, fault signatures appear at millisecond resolution, and the distinction between normal and abnormal is subtle — requiring domain expertise that only specialists can provide.

This uniqueness explains why "just scale up the model" doesn't work. FactoryBench found no consistent guarantee that larger models perform better. Qwen3-235B outperformed Qwen3-4B by 14.2pp on L1, but the gap was inconsistent (14.8pp on L3), and in some metrics smaller models actually outperformed larger ones.

### 3.2. Three Proofs That Data Beats Model Size

The thesis that "data, not the model, is the bottleneck" is supported by three independent proofs.

- •**Florence-2 (0.23B) vs GPT-4o** — A 0.23B open-source VLM fine-tuned on 400 microchip blueprint samples outperformed GPT-4o by **+52.4%** F1 and reduced hallucinations by **43.15%** (Manganini et al., 2025). Four hundred domain samples reversed a 100× parameter gap.
- •**NVIDIA Cosmos VLM** — The same model scored **14.37%** zero-shot on wafer defect classification, then jumped to **96.8%** after fine-tuning on domain data. The **82.4pp** gap is the cleanest proof that data — not model architecture — determines performance.
- •**Data-Centric AI Survey** — Zha et al. (2024), an ACM Computing Surveys comprehensive review, found that on ImageNet/CIFAR-10/IMDB, data optimization alone **without model changes** achieved 2.3–6.8% accuracy gains. In industrial domains, this effect is likely even greater.

MaViLa (J. of Manufacturing Systems, 2025)
                            "Performance does not necessarily scale with dataset size." — Thanks to the knowledge embedded in pre-trained backbones, high-quality outputs are achievable with limited instruction fine-tuning data, proving that quality matters more than quantity.

> [!callout]
> The common message from all three proofs is clear: the bottleneck in industrial AI performance is data, not model architecture. Florence-2 (0.23B) beating GPT-4o, Cosmos clearing an 82.4pp gap, and every LLM stalling below 50% on FactoryBench — all point to the same root cause: the absence or poor quality of industrial domain data.

## Industrial AI Benchmark Landscape — Where FactoryBench Fits

FactoryBench is not an isolated study. Between 2024 and 2026, the industrial AI benchmark ecosystem has expanded explosively, with each benchmark illuminating a different facet of the industrial domain. The emergence of this ecosystem itself signals that the "objective measurement of industrial AI performance → justification of data investment" loop is becoming achievable.

The table below compares key industrial AI benchmarks by target modality, evaluation capability, and top performance.

| Benchmark | Target Model | Modality | Evaluation Axis | SOTA Performance |
| --- | --- | --- | --- | --- |
| FactoryBench | LLM | Time-series/Telemetry | Pearl's 4-Level Causation Ladder | L1-L3 <47%, L4 <18% |
| BlueprintSymVL | VLM | Engineering drawing images | Symbol recognition (EMR) | 50.5% (Gemini 2.5 Pro) |
| iSafetyBench | VLM | Industrial safety video | Action classification | 43.8% (Ovis2-8B) |
| MVTec AD 2 | FM/NFM | Industrial product images | Anomaly detection (AU-PRO) | <60% |
| MaViLa | VLM | Manufacturing images + text | 5 manufacturing domain tasks | SOTA vs. general VLMs |
| VLABench | VLA | Robotics simulation | Language-conditioned manipulation (100 tasks) | Long-horizon reasoning limits |

Source: Compiled from individual benchmark papers. Performance figures are zero-shot or best-reported.

FactoryBench's three differentiators are: First, its subjects are **LLMs** rather than VLMs — time-series sensor data is converted to text and presented to LLMs, evaluating time-series pattern interpretation rather than image processing. Second, it uses Pearl's Causation Ladder as a **hierarchical evaluation framework** to distinguish "how far understanding reaches." Third, it is grounded in **real industrial robot data** with 27 fault types systematically injected. This combination of three elements occupies a unique position in the industrial AI benchmark ecosystem.

> [!callout]
> Industrial AI benchmarks share a common pattern: high scores on general benchmarks (MMMU 85%+) collapse to the 30–50% range in industrial domains. This "general-to-industrial gap" appears consistently in both LLMs (FactoryBench) and VLMs (BlueprintSymVL, iSafetyBench, MVTec AD 2), suggesting a structural problem independent of modality.

## Manufacturing AI Reality — Pilot Purgatory and the Data Bottleneck

AI investment in manufacturing is "wide but shallow." Rockwell Automation's 2025 survey found **95%** of industrial companies investing in AI. But the path from investment to actual value narrows dramatically. Grant Thornton reported **48%** stuck in pilot stage, only **10%** integrated into production, and **0%** realizing ROI. McKinsey found that only **5.5%** of companies see meaningful financial returns.

95% — Investing in AI (Rockwell, 2025)

48% — Pilot stage (Grant Thornton, 2026)

10% — Production integration (Grant Thornton, 2026)

5.5% — Meaningful financial returns (McKinsey, 2025)

BCG reported **60%** of companies failing to create value from AI, while Deloitte's 2025 Smart Manufacturing Survey found **47%** of industrial leaders citing data quality as the core cause of project failures. FactoryBench and VLM benchmark results provide the technical underpinning for this ROI gap — current AI models do not adequately understand industrial data, and the reason lies in the quality and quantity of domain data.

### 5.1. What Leading Companies Have in Common: Data Capabilities

The few companies that have escaped Pilot Purgatory share a common trait. Toyota had factory workers directly generate **10,000 AI models**, saving **10,000 hours**. BMW reduced defects by approximately **40%** with AI vision inspection. Hyundai Motor Group is building an NVIDIA Blackwell-based AI factory. These are exceptional cases that possess large-scale proprietary data and fine-tuning capabilities.

The remaining 94.5% do not need to buy general-purpose models. They need infrastructure to objectively diagnose whether their own sensor/machine data is AI-Ready, and to systematically fill identified data gaps. NVIDIA Cosmos's **82.4pp** gap (zero-shot vs fine-tuning) quantitatively demonstrates that "data investment yields higher ROI than model investment."

### 5.2. The Missing Piece in Big Tech's Full Stack

NVIDIA (Cosmos + Omniverse + IGX Thor), Siemens (Industrial Copilot + multimodal), and Cognex (In-Sight + OneVision) are vertically integrating model-platform-data. However, their strategies focus on synthetic data generation (NVIDIA Omniverse) and model optimization — **systematic quality diagnosis and improvement** of real sensor data from factory floors is not included in this full stack. While 41% of manufacturers selected AI Vision as their top priority technology for 2026 (A3 Survey), as FactoryBench and BlueprintSymVL demonstrate, the current level of AI "understanding" of industrial machines is still insufficient. The "urgent but unprepared" paradox persists.

> [!callout]
> The manufacturing AI market is growing from $34.18B (2025) to $155.04B (2030, CAGR 35.3%), but the quality of this growth depends on what fraction of companies escape Pilot Purgatory. The strategic implication from FactoryBench results is clear — buying and deploying models alone is insufficient; investment in making your own sensor/machine data AI-Ready must come first.

## Why Pebblous Focuses on This Research — Time-Series Data Quality as the New Frontier

FactoryBench's proof that "whether industrial time-series data is AI-Ready determines model performance" connects directly to Pebblous's core value proposition. The Data-Centric AI approach — "fix the data, not the model" — has been quantitatively validated on both LLM+time-series and VLM+image fronts simultaneously.

### The Intersection of Business and Technology

DataClinic's three-level diagnostic framework structurally addresses the data challenges exposed by FactoryBench. Level 1 (basic quality) detects time-series missing values, sensor outliers, and sampling inconsistencies; Level 2 (embedding analysis) measures the distribution and cluster separation of normal vs. fault episodes; Level 3 (domain-specific) evaluates data coverage for each of the 27 fault types. DataGreenhouse's Data Bulk-up synthesizes rare fault episodes like those used in FactoryBench, providing a systematic path to augmenting L4 decision-making training data.

### The Mechanism by Which Data Quality Determines Model Performance

The quality challenges identified in FactoryBench data are concrete: complex correlations across 100+ sensor channels, uneven distribution of 27 fault types, source imbalance between FactoryWave (8,983) vs AURSAD (4,094) vs voraus-AD (2,122), and sampling frequency differences between UR3 (125Hz) and KUKA (83Hz) — all directly affect LLM fine-tuning performance. These data-level problems cannot be solved by changing model architectures; they require systematic diagnosis and improvement.

### Implications for Customer Practice

The UR3 cobot and KUKA KR10 used in FactoryBench are similar to robot types operating in Hyundai Motor Group, shipbuilding, and defense sectors. Sensor telemetry from welding robots, painting robots, and assembly robots faces the same time-series data quality challenges. The reference of achieving 97–99% accuracy on welding defect data (up from 50%) using DataClinic is a validated pattern extensible to the time-series telemetry domain. FactoryBench results deliver a clear message to these customers: "making your robot/machine sensor data AI-Ready is prerequisite for realizing LLM/VLM value."

### Big Tech Complementary Positioning and the Questions Ahead

NVIDIA Cosmos + Omniverse focuses on synthetic data generation; Siemens Industrial Copilot focuses on model deployment. Systematic quality diagnosis of real industrial data is not yet included in this full stack. The integration of DataClinic (diagnosis) + PebbloSim (physics-based synthesis) + DataGreenhouse (operational automation) is an approach that can fill this gap. With the data labeling/curation market growing from $18.63B (2024) to $57.63B (2030, CAGR 20.3%), and industrial/manufacturing labeling being the fastest-growing segment (CAGR 22.84%), this direction is well-supported. The emergence of benchmarks like FactoryBench makes the measurement step of the "diagnose → improve → re-measure" loop externally verifiable — and this loop itself can become the structural moat of a data flywheel.

> [!callout]
> FactoryBench's evidence converges on a single question — "What does AI need to understand factory machines?" The answer is not bigger models, but better data. That this answer has been simultaneously validated on both LLM time-series and VLM image fronts marks 2026 as an inflection point. The next stage of industrial AI will not be a model competition but a data quality competition, and the infrastructure that provides the systematic loop of "diagnose → synthetic augmentation → re-diagnose" will play the decisive role.

## References

### Academic Papers

- 1.Merzouki, Y. et al. "[FactoryBench: Evaluating Industrial Machine Understanding](https://arxiv.org/abs/2605.07675)." arXiv:2605.07675, 2026.
- 2.Shteriyanov, V. et al. "BlueprintSymVL: A discriminative benchmark for VLM symbol recognition in engineering blueprints." Results in Engineering, 2025. DOI:10.5281/zenodo.17250377.
- 3.Manganini, G. et al. "Evaluating and Fine-Tuning Vision-Language Models for Industrial Manufacturing in Low-Data Regimes." IOS Press, 2025. DOI:10.3233/FAIA251459.
- 4.Abdullah et al. "[iSafetyBench: A video-language benchmark for safety in industrial environment](https://arxiv.org/abs/2508.00399)." ICCV 2025 Workshop. arXiv:2508.00399.
- 5.(Multiple authors). "[Large Scale Foundation Models for Intelligent Manufacturing Applications: A Survey](https://arxiv.org/abs/2312.06718)." J. of Intelligent Manufacturing (Springer), 2025. arXiv:2312.06718.
- 6.MVTec. "[The MVTec AD 2 Dataset](https://arxiv.org/abs/2503.21622)." arXiv:2503.21622, 2025.
- 7.(Multiple authors). "MaViLa: Unlocking new potentials in smart manufacturing through vision language models." J. of Manufacturing Systems, 2025.
- 8.Zhang et al. "[VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation](https://arxiv.org/abs/2412.18194)." ICCV 2025. arXiv:2412.18194.
- 9.Zha, D., Bhat, Z. et al. "[Data-centric Artificial Intelligence: A Survey](https://arxiv.org/abs/2303.10158)." ACM Computing Surveys, 2024. arXiv:2303.10158.
- 10.Chen, D. et al. "[Leveraging Vision-Language Models for Manufacturing Feature Recognition in CAD Designs](https://arxiv.org/abs/2411.02810)." ASME J. Comput. Inf. Sci. Eng., 2025.
- 11.Picard, C., Edwards, K. et al. "[From concept to manufacturing: evaluating vision-language models for engineering design](https://arxiv.org/abs/2311.12668)." AI Review (Springer), 2025.
- 12.(Multiple authors). "[A Survey on Foundation-Model-Based Industrial Defect Detection](https://arxiv.org/abs/2502.19106)." arXiv:2502.19106, 2025.
- 13.(Multiple authors). "[A Comprehensive Survey for Real-World Industrial Defect Detection](https://arxiv.org/abs/2507.13378)." arXiv:2507.13378, 2025.
- 14.Fan, J. et al. "Vision-language model-based human-robot collaboration for smart manufacturing." Frontiers of Engineering Management (Springer), 2025.

### Market Data & Surveys

- 15.MarketsandMarkets. "AI in Manufacturing Market." $34.18B (2025) → $155.04B (2030), CAGR 35.3%.
- 16.Grand View Research. "AI in Manufacturing / Data Labeling Market." $18.63B (2024) → $57.63B (2030), CAGR 20.3%.
- 17.Grant Thornton. "Manufacturing AI Impact Survey." 48% pilot, 10% integrated, 2026.
- 18.McKinsey. "State of AI 2025." Only 5.5% with meaningful financial returns.
- 19.BCG. "Build for the Future 2025." 60% failing to create value.
- 20.Deloitte. "2025 Smart Manufacturing Survey." 47% cite data quality as cause of failure.
- 21.Rockwell Automation. "2025 AI Investment Report." 95% of industrial companies investing in AI.
- 22.Cognex. "AI in Manufacturing Survey 2026." 57% using AI for machine vision.
- 23.A3 (Association for Advancing Automation). 41% of manufacturers rank AI Vision as top priority, 2026.

### Industry Cases & Tech Blogs

- 24.NVIDIA. Hannover Messe 2026 Blog: AI Manufacturing / Cosmos VLM wafer defect classification tech blog.
- 25.Toyota. 10,000 AI Models / Invisible AI Partnership, 2025.
- 26.BMW. AI Vision Inspection (-40% Defects) / SORDI Dataset.
- 27.Hyundai Motor Group. NVIDIA Blackwell AI Factory construction, 2025.
- 28.Siemens. Industrial Copilot CES 2026.
