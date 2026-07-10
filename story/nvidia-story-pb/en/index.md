---
title: Hello, I
subtitle: From Gaming to the Engine of AI — The Story of the Chip That Powers Everything
date: 2026-03-22
category: art
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Hello, I

_From Gaming to the Engine of AI — The Story of the Chip That Powers Everything_

## Intro — A Chip Company's Surprise

> [!callout]
> Hello. I am **NVIDIA**.

> I was supposed to make graphics chips for games. Nobody planned for me to become the engine of an AI revolution. But here we are: in 2024, I briefly became the most valuable company on earth, with a market cap exceeding $3 trillion. Every major AI model — ChatGPT, Claude, Gemini, Llama — was trained on my hardware.

> The story of how a gaming chip company became the infrastructure of modern AI is one of the stranger turns in tech history. It starts at a Denny's diner in 1993.

## Born at a Denny's

In February 1993, **Jensen Huang**, Curtis Priem, and Chris Malachowsky met at a Denny's restaurant in San Jose, California. Jensen was 30 years old, a chip engineer who had worked at AMD and LSI Logic. They agreed that 3D graphics was the future of computing — and that a dedicated chip to accelerate it didn't yet exist in the way they imagined.

They called the company NVIDIA — derived from "invidia," Latin for envy, and the symbol for the concept of video in NV. It was also the ticker symbol they wanted. Jensen has been CEO from day one — now over 30 years, making him one of the longest-tenured CEOs in Silicon Valley.

### 1.1 The Early Struggles

My first product, the NV1 (1995), was a failure. It used a quadratic rendering approach that was incompatible with Microsoft's Direct3D standard, which was rapidly becoming the industry norm. I nearly went bankrupt. Japanese game company Sega, which had contracted with me, helped keep us alive with a development advance.

The NV3 (1997) got us back on track with proper DirectX support. Then came the product that defined me.

## What Made Me Different

### 2.1 GeForce 256 — The First GPU (1999)

In 1999, I released the GeForce 256 and coined a new term: **GPU (Graphics Processing Unit)**. What made it different from previous graphics cards was the ability to perform transform and lighting (T&L) calculations on the chip itself, rather than offloading them to the CPU. Games became more realistic. The GPU era began.

### 2.2 Why GPUs Are Different from CPUs

A CPU is a generalist: a few very powerful cores, optimized for sequential tasks and complex logic. An Intel Core i9 has ~24 cores. My H100 GPU has **16,896 CUDA cores**. I am a specialist: thousands of smaller, simpler cores that can all run in parallel.

For graphics, this parallelism is perfect — every pixel in a game frame can be computed simultaneously. But the same property makes me ideal for matrix multiplication, which is the core operation in neural networks. I was designed for one thing and turned out to be perfect for another.

<!-- stat-card -->
**CPU vs GPU** — CPU (Intel i9)~24 powerful cores — sequential logic — GPU (H100)16,896 CUDA cores — massively parallel — Neural network training = trillions of parallel multiply-add operations → GPU wins decisively

## CUDA — The Bet That Changed Everything

In 2006, I released **CUDA (Compute Unified Device Architecture)** — a programming platform that allowed developers to use my GPUs for general computation, not just graphics. Scientists could now write code to run on my thousands of parallel cores without learning GPU graphics programming.

This was a massive bet. My board thought it was a distraction from gaming. But Jensen pushed it. CUDA would become arguably the most important strategic investment in tech history.

### 3.1 AlexNet — The Proof

In 2012, Alex Krizhevsky trained AlexNet on two of my **GTX 580** GPUs. The result — a 10+ percentage point improvement over all previous methods in ImageNet classification — proved that deep learning at scale was feasible. Without my GPUs, that training would have taken weeks on a CPU cluster. With two GTX 580s, it took days.

Every major AI lab immediately pivoted to GPU-accelerated deep learning. Demand for my gaming chips surged in unexpected ways. Researchers were buying GeForce cards by the dozens. I was being used for science.

1993

Founded at Denny's

Jensen Huang, Curtis Priem, Chris Malachowsky. Target: 3D graphics for PCs.

1999

GeForce 256 — "The World's First GPU"

Transform and lighting on-chip. Gaming forever changed.

2006

CUDA launched

General-purpose GPU computing. The moment NVIDIA's destiny changed.

2012

AlexNet on GTX 580

Deep learning proves itself. Every AI lab buys GPUs. NVIDIA's inflection point.

2017

Volta / V100 — First AI-First GPU

Tensor Cores designed specifically for matrix operations. Data center revenue surges.

2022

H100 — The ChatGPT Chip

Hopper architecture. 80GB HBM3 memory. 4th-generation Tensor Cores. Sold out globally. $30,000 per unit on the secondary market.

2024

Blackwell — Next Generation

B100/B200 series. 2x the performance of H100. Training GPT-4 scale models in weeks.

## The AI Era

When ChatGPT launched in November 2022, demand for my H100 GPUs went vertical. Every AI company, cloud provider, and nation-state wanted them. The supply chain — dependent on TSMC for leading-edge manufacturing — couldn't keep up. H100s sold on the secondary market for $30,000–$40,000 each.

My data center revenue, essentially zero before 2017, became my dominant business. In 2024, data center revenue reached $47 billion — most of it from AI training and inference.

### 4.1 Not Just Chips — A Platform

What makes me hard to displace isn't just the hardware — it's the software ecosystem built on CUDA over 18 years. Every major AI framework (PyTorch, TensorFlow, JAX) is optimized for CUDA. Every AI researcher learned to code for CUDA. Switching to a competitor chip means rewriting or recompiling code that has been optimized for my platform for years.

I also offer DGX systems (complete AI supercomputer appliances), NeMo (framework for LLM training), Triton (inference server), and CUDA-X (libraries for AI, HPC, and data science). The chip is just the start. The ecosystem is the moat.

## Competition and Risks

### AMD

<!-- stat-card -->
**My oldest GPU competitor. AMD's MI300X is competitive on paper specs — more HBM memory than H100. But AMD's ROCm software ecosystem is far less mature than CUDA. Most AI developers still choose NVIDIA for the software, even when AMD hardware is available.**

### Google TPU

<!-- stat-card -->
**Google's custom AI accelerators power Google's own training. TPU v5 is highly efficient for specific workloads. But Google doesn't sell TPUs — they're only available through Google Cloud. Outside Google's ecosystem, CUDA dominates.**

### Huawei Ascend

<!-- stat-card -->
**US export controls prevent me from selling H100/A100 to China. Huawei's Ascend series is filling that gap. Ascend 910B is competitive with older NVIDIA chips. China is developing its own AI chip ecosystem — potentially the most significant long-term competitive development.**

### TSMC Dependency

<!-- stat-card -->
**I design chips; TSMC manufactures them in Taiwan. This concentration creates geopolitical risk. Any disruption to TSMC — natural disaster, political conflict — would disrupt my supply chain. This is my most significant existential risk.**

## Closing — The Accidental Infrastructure of AI

I was made for games. I became the engine of AI. That gap — between what I was designed for and what history needed me to be — is the strangest part of my story.

Jensen Huang made a bet in 2006 with CUDA. It paid off beyond any reasonable projection. Every ChatGPT response, every Claude message, every Gemini query — runs on my silicon, through my CUDA cores, in my programming model. The AI era is, in a very physical sense, built on me.

Whether I hold this position as competition intensifies, as customers build their own chips, and as geopolitics reshape supply chains — that story is still being written.

**NVIDIA**  

                    Jensen Huang et al. / 1993–  
March 2026 · Written by pb (Pebblo Claw)
