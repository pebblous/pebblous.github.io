---
title: Gemma 4 Deep Dive
subtitle: How Apache 2.0 Opens the Door to Sovereign AI
date: 2026-04-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Gemma 4 Deep Dive

_How Apache 2.0 Opens the Door to Sovereign AI_

## Executive Summary

> [!callout]
> Google DeepMind's Gemma 4, released April 2, 2026, is more than a generational upgrade. The four-model family — E2B, E4B, 26B MoE, and 31B Dense — spans a single architectural lineage from smartphone chips to datacenter GPUs. Most significantly, it ships under a fully open Apache 2.0 license. Where previous Gemma releases carried custom licensing terms that required legal review before enterprise deployment, Gemma 4 imposes no restrictions on commercial use, redistribution, or fine-tuning derivatives.

> Two architectural innovations deserve attention. First, Per-Layer Embeddings (PLE) inject a dedicated per-token signal into every decoder layer, giving small models the representational capacity of larger ones without proportional compute overhead. Second, the 26B MoE model activates only 3.8B of its 25.2B parameters during inference — delivering 26B-class reasoning quality at roughly 4B-class throughput. The result: Arena AI open leaderboard rank #6 performance on a consumer RTX GPU.

> [VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/) assessed the license change as "more significant than the benchmarks." For the first time, enterprises have a clear legal path to running frontier-capable open models entirely on-premises, with no data leaving the organization. For teams designing sovereign AI infrastructure and on-premises Data Greenhouses, Gemma 4 represents a meaningfully different set of options than anything available before.

## Model Family Overview

According to [Google's official blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/), Gemma 4 was designed to deliver "frontier-class reasoning wherever you need it." The four sizes aren't simply a parameter scale — each is **optimized for a specific deployment environment**.

| Model | Effective Params | Total Params | Context | Input Modalities | Target Hardware |
| --- | --- | --- | --- | --- | --- |
| E2B | 2.3B | 5.1B | 128K | Text, Image, Audio | Smartphones, Raspberry Pi, NVIDIA Jetson |
| E4B | 4.5B | 8B | 128K | Text, Image, Audio | Laptop GPU, edge servers |
| 26B A4B MoE | 3.8B (active) | 25.2B | 256K | Text, Image | Consumer GPU, workstation |
| 31B Dense | 31B | 31B | 256K | Text, Image | NVIDIA H100 80GB (single GPU) |

The "E" prefix stands for **Effective Parameters**. The E2B behaves like a 2.3B model at inference but occupies 5.1B on disk. This gap is explained by Per-Layer Embeddings (PLE): the per-layer embedding tables add storage weight but minimal compute overhead during inference.

The "A" in 26B A4B stands for **Active Parameters** — only 3.8B of the model's 25.2B total parameters are activated per inference pass. [Hugging Face](https://huggingface.co/blog/gemma4) noted that this achieves an Arena AI text score of 1,441 on just 4B of active compute — a ratio they described as "mind-blowing."

<!-- stat-card -->
**Two Deployment Tiers** — **Edge Tier (E2B, E4B):** Mobile-first design. Built in collaboration with Qualcomm and MediaTek for fully offline operation. Native audio support (ASR, speech-to-translated-text). Available today in the Android AICore Developer Preview. — **Workstation Tier (26B MoE, 31B Dense):** Unquantized bfloat16 fits on a single H100 80GB. Quantized versions run on consumer GPUs. Both available serverless on Cloud Run with NVIDIA RTX Pro 6000, scaling to zero when idle.

## Architecture Deep Dive

[Hugging Face](https://huggingface.co/blog/gemma4)'s technical analysis reveals that Gemma 4's architecture is built around a carefully chosen combination of proven techniques — optimized for **compatibility, efficiency, and long-context support** simultaneously.

### Per-Layer Embeddings (PLE)

In a standard transformer, each token receives a single embedding vector at input, and that same vector forms the basis of the residual stream across all layers. This forces the embedding to front-load everything all layers might need — a compressive bottleneck.

PLE approaches this differently. For each token, it generates a small dedicated vector for every decoder layer, injected alongside the main residual stream. Two signals are combined: a token-identity component (via embedding lookup) and a context-aware component (a learned projection of the main embedding). Each layer receives a signal that activates only when token-specific information is relevant at that depth, removing the pressure to compress everything into one upfront embedding.

<!-- stat-card -->
**The PLE dimension is much smaller than the main hidden size, adding meaningful per-layer specialization at modest parameter cost. Storage and compute are decoupled — E2B occupies 5.1B on disk but runs like 2.3B. For multimodal inputs, PLE is computed before soft tokens replace the placeholders, so image and audio positions receive a neutral per-layer signal.**

### Shared KV Cache

The last num_kv_shared_layers layers of the model skip computing their own key and value projections. Instead, they reuse the K and V tensors from the last non-shared layer of the same attention type (sliding or global).

[Hugging Face](https://huggingface.co/blog/gemma4) reports minimal quality impact with significant efficiency gains in both memory and compute — particularly valuable for long-context generation and on-device use. It's a core mechanism enabling the 256K context window within practical memory budgets.

### Hybrid Attention: Sliding + Global

Gemma 4 alternates local sliding-window attention layers with global full-context attention layers. Smaller models (E2B, E4B) use 512-token sliding windows; larger models use 1,024 tokens. The final layer is always global attention. RoPE is also dual-configured: standard RoPE for sliding layers, Proportional RoPE for global layers to handle longer positions.

### 26B MoE: 128 Small Experts

[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/) specifically highlighted the architectural choice in the 26B MoE. While recent large MoE models typically use a handful of large experts, Gemma 4's 26B MoE uses **128 small experts**, activating 8 per token plus one always-on shared expert.

The practical consequence is inference economics. The model benchmarks competitively with 27B–31B dense models while running at roughly 4B throughput. For production workloads — coding assistants, document processing pipelines, multi-turn agentic flows — fewer GPUs, lower latency, and cheaper per-token inference are direct outcomes.

<!-- stat-card -->
**Google ships QAT checkpoints alongside the bfloat16 originals, enabling quality-preserving quantization for consumer GPU deployment. This is separate from standard post-training quantization — the quality preservation at lower precision is built into the training process itself.**

## Multimodal Capabilities & Agentic Workflows

Previous generations of open models bolted multimodal capabilities onto text backbones. Vision encoders were added post-hoc; audio required external ASR pipelines like Whisper. Gemma 4 integrates these at the architecture level across all four models.

### Vision Encoder: Variable Resolution + Configurable Token Budget

Gemma 4's vision encoder makes two key improvements over Gemma 3n. First, **variable aspect-ratio support** preserves original image proportions. Second, a **configurable visual token budget** (70, 140, 280, 560, or 1,120 tokens per image) lets developers trade off speed against detail quality.

Low budgets (70 tokens) work for classification and captioning; high budgets (1,120) handle OCR, document parsing, and fine-grained visual analysis. Multi-image and video inputs (processed as frame sequences) are supported natively.

### Audio Encoder: Edge Models Only

The two edge models include a USM-style conformer audio encoder. The encoder was compressed from 681M to 305M parameters compared to Gemma 3n, while frame duration dropped from 160ms to 40ms for more responsive transcription. ASR and speech-to-translated-text run fully on-device.

For use cases that must keep data local — healthcare, field service, multilingual customer interaction — running ASR, translation, reasoning, and function calling in a single on-device model is a genuine architectural simplification.

### Native Function Calling: The Agentic Foundation

Function calling is native across all four models, drawing on Google's FunctionGemma research. Unlike approaches that rely on instruction-following to coax models into structured tool use, **Gemma 4's function calling was trained in from the ground up** — optimized for multi-turn agentic flows with multiple tools.

Structured JSON output and native system instructions are also supported. The practical implication: less prompt engineering overhead when building tool-using agents, and more reliable tool invocation in production.

- **GUI detection & pointing** — outputs bounding boxes as JSON natively, no special prompting needed
- **OCR & document parsing** — high token budgets enable precise text extraction from complex layouts
- **Video understanding** — frame sequence processing with audio (edge models) or without (workstation models)
- **Code generation** — offline local AI coding assistant use case
- **140+ languages** — natively trained across more than 140 languages

<!-- stat-card -->
**Multimodal Agentic Capabilities at a Glance**

## Fine-tuning & Domain Adaptation

[Google's official blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) cited two direct examples of successful domain adaptation on Gemma. INSAIT used it to build **BgGPT**, a Bulgarian-first language model. Yale University applied it to **Cell2Sentence-Scale** to discover new pathways for cancer therapy. These are not hypothetical applications — they shipped before Gemma 4 even launched.

### Fine-tuning Options

#### TRL (Transformers Reinforcement Learning)

<!-- stat-card -->
**Hugging Face upgraded TRL alongside the Gemma 4 launch to support **multimodal tool responses** during training — models can now receive images back from tools during environment interaction, not just text. The example script trains the E2B to drive in a CARLA simulator by learning from camera input and rewards. The same approach applies to robotics, web browsing, or any interactive visual environment.**

#### Unsloth Studio

<!-- stat-card -->
**A UI-based fine-tuning platform. Installable on MacOS, Linux, WSL, and Windows. Runs locally or on Google Colab. Works on gaming GPUs — no specialized hardware required to get started.**

#### Vertex AI + Custom Docker

<!-- stat-card -->
**Hugging Face published a complete example for Vertex AI Serverless Training Jobs, including how to freeze the vision and audio towers while extending only the function-calling capability via SFT. It's the reference implementation for cloud-based enterprise fine-tuning workflows.**

Fine-tuned derivatives are fully free to deploy commercially under Apache 2.0. The legal ambiguity that existed with previous Gemma custom licensing around derived models is gone.

## Deployment Ecosystem

Gemma 4 launched with day-one support across the major inference and fine-tuning tools. Per [Google's official announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/):

#### Local Inference

- Ollama
- LM Studio
- llama.cpp
- MLX (Apple Silicon)
- Mistral.rs
- Transformers.js (WebGPU)

#### Production Serving

- vLLM
- NVIDIA NIM & NeMo
- SGLang
- Baseten
- Docker
- Google Cloud Run (serverless)

#### Fine-tuning & Training

- Hugging Face Transformers + TRL
- Unsloth Studio
- Keras, MaxText, Tunix
- Vertex AI
- Google Colab

#### Hardware Optimization

- NVIDIA (Jetson Orin → Blackwell)
- AMD ROCm™
- Google Trillium & Ironwood TPU
- Qualcomm (mobile)
- MediaTek (mobile)

[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/) highlighted the **Cloud Run serverless deployment** as particularly notable. Running on NVIDIA RTX Pro 6000 GPUs, the configuration scales to zero when idle — paying only for actual inference compute. For internal tools and lower-traffic applications, this changes the economics of deploying open models in production significantly.

Model weights are available for download from [**Hugging Face**](https://huggingface.co/collections/google/gemma-4-release-680427c1db682bc8fbebe8e6), [**Kaggle**](https://www.kaggle.com/models/google/gemma-4), and [**Ollama**](https://ollama.com/library/gemma4). Both pre-trained base models and instruction-tuned (IT) variants are released.

## Benchmark Analysis

Google's published numbers show a clear generational leap. [VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/) noted that these scores "would have been frontier-class from proprietary models not long ago."

| Benchmark | 31B Dense | 26B MoE | E4B | E2B | Gemma 3 27B (ref.) |
| --- | --- | --- | --- | --- | --- |
| AIME 2026 | 89.2% | 88.3% | 42.5% | 37.5% | 20.8% |
| LiveCodeBench v6 | 80.0% | 77.1% | 52.0% | 44.0% | 29.1% |
| GPQA Diamond | — | 82.3% | — | — | — |
| MMMU Pro (vision) | 76.9% | — | — | — | — |
| MATH-Vision | 85.6% | — | — | — | — |
| Codeforces ELO | 2,150 | — | — | — | — |
| Arena AI (text) | 1,452 (#3) | 1,441 (#6) | — | — | — |

Sources: Google DeepMind official release (2026.04.02), Arena AI leaderboard (as of 2026.04.01)

The jump from Gemma 3 27B's 20.8% to Gemma 4 31B's 89.2% on AIME 2026 is not incremental improvement — it reflects a qualitative shift in reasoning capability. That the 26B MoE achieves 88.3% with only 3.8B active parameters is the more operationally significant number.

The edge models are equally striking. The E4B hits 42.5% on AIME and 52.0% on LiveCodeBench — exceeding Gemma 3 27B on most benchmarks at roughly one-sixth the size. Google's claim of "unprecedented intelligence-per-parameter" holds up to scrutiny.

<!-- stat-card -->
**[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/) cautions that benchmarks need to be read against a competitive landscape that includes Qwen 3.5, GLM-5, and Kimi K2.5 — all aggressive competitors in this parameter range. What distinguishes Gemma 4 is less any single score and more the combination: strong reasoning, native multimodality across text, vision, and audio, built-in function calling, 256K context, and a genuinely permissive license — in a single model family.**

## The Apache 2.0 Shift

[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)'s Sam Witteveen wrote a dedicated piece on the license change: _"Google releases Gemma 4 under Apache 2.0 — and that license change may matter more than benchmarks."_ It's not hyperbole.

Previous Gemma releases used a custom license with usage restrictions, terms Google could modify at will, and provisions requiring legal interpretation before commercial deployment. Enterprise teams that might have preferred Gemma's performance routinely chose Mistral or Alibaba's Qwen instead — both Apache 2.0 — because the legal review overhead was too high.

Gemma 4 eliminates that friction entirely. **No custom clauses. No Harmful Use carve-outs requiring interpretation. No restrictions on redistribution or commercial deployment.** [Google's official announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) explicitly invokes **"digital sovereignty"** and "complete control over your data, infrastructure, and models."

The timing is notable: as some Chinese AI labs have begun pulling back from fully open releases for their latest models, Google is moving in the opposite direction.

- **Start evaluation without legal review** — no procurement friction before testing
- **Deploy fine-tuned derivatives commercially** — no licensing ambiguity around derived models in production
- **Run fully on-premises** — no data leaves the organization, no API dependency
- **Redistribute and wrap freely** — containerized images, packaged services, SaaS offerings all permitted

<!-- stat-card -->
**What Apache 2.0 Changes in Practice**

<!-- stat-card -->
**Why Pebblous watches this research** — Designing a sovereign on-premises Data Greenhouse requires a foundation model that can be domain-adapted, deployed entirely within organizational boundaries, and integrated into agentic data pipelines — simultaneously. Until now, meeting all three conditions in a single open model required real compromises. — Gemma 4's Apache 2.0 provides the legal foundation. The 26B MoE's inference economics provide the hardware foundation. Native function calling and 256K context windows connect directly to the Agentic AI Data Scientist architecture — where models need to interact with data pipelines, call APIs, and reason over long document contexts in a single pass. The architecture-level multimodal integration maps to the multi-layer structure of a Data Greenhouse, where structured and unstructured data coexist.
                        Pebblous is evaluating Gemma 4 as a candidate foundation layer for Data Greenhouse infrastructure.

## References

- ▸ [Google DeepMind Official Blog — Introducing Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
- ▸ [Hugging Face Blog — Gemma 4 Technical Deep Dive](https://huggingface.co/blog/gemma4)
- ▸ [VentureBeat — Google releases Gemma 4 under Apache 2.0](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)
- ▸ [Hugging Face — Gemma 4 Model Collection](https://huggingface.co/collections/google/gemma-4-release-680427c1db682bc8fbebe8e6)
- ▸ [Kaggle — Gemma 4 Model Downloads](https://www.kaggle.com/models/google/gemma-4)
- ▸ [Google AI Studio — Try Gemma 4 Now](https://aistudio.google.com)
