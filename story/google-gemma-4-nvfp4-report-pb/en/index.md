---
title: Gemma 4 31B Runs on a 24GB GPU
subtitle: A Deep Dive into NVIDIA NVFP4 Quantization
date: 2026-04-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Gemma 4 31B Runs on a 24GB GPU

_A Deep Dive into NVIDIA NVFP4 Quantization_

> [!callout]
## Executive Summary

> Three days after Google DeepMind released the Gemma 4 family under the Apache 2.0 license,
>                             NVIDIA uploaded an NVFP4-quantized version of the 31B Dense model to Hugging Face.
>                             What makes this significant is not simply that it got smaller.
>                             **0.25% accuracy loss on GPQA Diamond, 256K context preserved,
>                             everyday inference on a 24GB GPU** — all three hold at the same time.

> [Gemma 4 Part 1: The Open Door to Sovereign AI via Apache 2.0](https://blog.pebblous.ai/story/google-gemma-4-report-pb/en/) covered the license and architecture.
>                             This part is about how to actually run that model.

## What is NVFP4

To understand Gemma 4 31B NVFP4, you first need to understand the NVFP4 format itself.

### Structure of 4-bit floating point

NVFP4 has a simple bit layout: **1 sign bit + 2 exponent bits + 1 mantissa bit**.
                        The representable range is approximately -6 to 6.

S

E E

M

= 4 bits total (1 sign + 2 exp + 1 mantissa)

How can this narrow range be applied to large language model weights while preserving accuracy?
                        The answer lies in **dual-level block scaling**.

<!-- stat-card -->
**Step 1: Fine-grained block scaling** — Every 16 values share one FP8 (E4M3) scale factor.
                                    Compared to the competing MXFP4 format that groups 32 values, this is **2× more granular**. — Step 2: Global tensor scaling — An FP32 scalar is applied on top of the FP8 scale blocks,
                                    allowing the fine-grained blocks to effectively represent values that are not powers of two.

The effective bit width is **4.5 bits/value**
                        (4-bit weights + FP8 scale overhead). This translates to **3.5× memory savings** vs. FP16
                        and **1.8× savings** vs. FP8.

NVIDIA Blackwell's 5th-generation Tensor Cores handle this fine-grained block grouping, dynamic scaling, and 4-bit matrix operations
                        automatically at the hardware level. Testing on H100 (Hopper) has also been completed,
                        but peak performance comes from the Blackwell architecture.

## Accuracy Loss: Real Numbers

Numbers speak louder than theory. These are the benchmarks NVIDIA published.

| Benchmark | BF16 Original | NVFP4 | Delta |
| --- | --- | --- | --- |
| GPQA Diamond | 75.71% | 75.46% | -0.25% |
| AIME 2025 | 66.25% | 65.94% | -0.31% |
| MMLU Pro | 85.25% | 84.94% | -0.31% |
| LiveCodeBench (pass@1) | 70.90% | 70.63% | -0.27% |
| Scicode subtask | 33.61% | 33.18% | -0.43% |
| Terminal-Bench Hard | 27.08% | 27.08% | 0% |

Across all benchmarks, the absolute loss is **under 0.5%** —
                        within the reproducibility margin between human evaluators.
                        The claim of "4× smaller with essentially the same performance" is not an exaggeration.

The quantization method used is **PTQ (Post-Training Quantization)** —
                        weights and activations were converted to NVFP4 without retraining.
                        The calibration dataset was 300,000 CNN DailyMail news articles.
                        NVIDIA Model Optimizer v0.42.0 was used.

## What Changed from Part 1

Compared to the original Gemma 4 specs covered in Part 1, there are three notable changes worth highlighting.

### ① Context window: 128K → 256K

<!-- stat-card -->
**The 31B that was introduced with a 128K context in Part 1 now specifies
                                **256K tokens** on the NVFP4 HuggingFace model card.
                                This is tied to a Gemma 4 architecture update,
                                and significantly improves the practicality of processing long single documents on consumer GPUs.**

### ② Multimodal: image → image + video

<!-- stat-card -->
**Support has expanded from images only to
                                **video (MP4/WebM, up to 60 seconds, 1fps sampling)**.
                                Visual token budget can be selected from 70, 140, 280, 560, or 1120.**

### ③ License note

<!-- stat-card -->
**Apache 2.0, the central topic of Part 1, applies to Google's original model.
                                This NVFP4 quantized version is subject to a
                                **NVIDIA Open Model License Agreement + Apache 2.0**
                                dual license. Commercial distribution is possible, but NVIDIA's terms must be reviewed separately.**

## VRAM Reality

Here are the numbers frequently cited on LinkedIn, organized by actual use scenario.

| Use Scenario | VRAM Required | Applicable GPU |
| --- | --- | --- |
| Weights only (load) | ~16–21 GB | RTX 4090 (24GB) feasible |
| Everyday inference (short context) | 24 GB | RTX 4090, RTX 5090 |
| 256K full context | ~32 GB | RTX 5090 (32GB) |
| Datacenter deployment | tensor-parallel 8 | H100 × 8 |

<!-- stat-card -->
****Note:**
                            The example command in the official HF model card recommends `--tensor-parallel-size 8`.
                            That is for datacenter use; single consumer GPU inference figures are based on community-validated numbers.
                            OOM may occur when processing long contexts on a single RTX 4090.**

## How to Run It

Supported in vLLM v0.17.2rc1 and above. For a single-GPU setup:

<!-- stat-card -->
**`pip install vllm>=0.17.2rc1

vllm serve nvidia/Gemma-4-31B-IT-NVFP4 \
  --quantization modelopt \
  --tensor-parallel-size 1`**

For multimodal input, use the `--limit-mm-per-prompt` option
                        to adjust the visual token budget.
                        Video processing supports up to 60 seconds at 1fps; for longer videos, it is recommended to extract frames manually and pass them as an image batch.

## What This Means

Gemma 4 NVFP4 has set several benchmarks in the category of "quantized open models."

<!-- stat-card -->
**The accuracy-vs-memory trade-off has improved dramatically** — Earlier INT4 approaches typically incurred several percent of accuracy loss. A 0.25% loss is a difference in design —
                                it means that fine-grained block scaling at 16-value granularity actually works.

<!-- stat-card -->
**Frontier-level inference has come within consumer hardware reach** — GPQA Diamond 75% represents GPT-4-level scientific reasoning ability.
                                Running this locally on a single RTX 4090 was something that would have been
                                hard to imagine just a year ago.

<!-- stat-card -->
**Hardware requirements for sovereign AI infrastructure have become realistic** — Running frontier-level AI without cloud APIs, in an environment where data never leaves your premises —
                                that is the practical prerequisite for enterprise sovereign AI.

> [!callout]
> If Part 1 said the license "opened the door," NVFP4 is how you actually walk through it.

<!-- stat-card -->
**🔍 The next bottleneck for sovereign AI: data quality** — Now that the hardware door is open, the next bottleneck is what you run on it.
                            Running Gemma 4 31B on-premises is now possible,
                            but the quality of the data fed to the model determines the outcome.
                            Whether fine-tuning, RAG indexing, or agent context —
                            [DataClinic](https://dataclinic.ai)'s
                            diagnostic layer filters out data distribution anomalies, duplicates, and label errors upfront,
                            which is when on-premises AI delivers its real performance.

## References

- [NVIDIA Gemma-4-31B-IT-NVFP4 (Hugging Face)](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)
- [Bringing AI Closer to the Edge and On-Device with Gemma 4 | NVIDIA Technical Blog](https://developer.nvidia.com/blog/bringing-ai-closer-to-the-edge-and-on-device-with-gemma-4/)
- [Introducing NVFP4 for Efficient and Accurate Low-Precision Inference | NVIDIA Technical Blog](https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/)
- [Gemma 4 Part 1: The Open Door to Sovereign AI via Apache 2.0 | Pebblous](https://blog.pebblous.ai/story/google-gemma-4-report-pb/en/)
