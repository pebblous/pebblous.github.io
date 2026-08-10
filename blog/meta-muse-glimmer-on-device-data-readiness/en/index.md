---
title: Meta
subtitle: Muse Glimmer puts 30 billion parameters on one GPU, and local data readiness becomes the new variable
date: 2026-08-11
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Meta

_Muse Glimmer puts 30 billion parameters on one GPU, and local data readiness becomes the new variable_

## Executive Summary

> [!callout]
> Meta released Muse Glimmer on August 10, 2026. It is an open-weight model that compresses 30 billion parameters into 4-bit so it runs on a personal PC or Mac with a single graphics card. The announcement is explicit about the purpose. An agent that manages your calendar, drafts your messages, and organizes your files needs deep access to personal context, so the inference should never leave the device.

> What this arrangement changes is not the performance chart but the origin of the input. When you call a cloud API, the model's ability comes from the pretraining data the provider assembled, and that data was never something you could touch. What an on-device agent actually reads on every request is the files, calendar entries, and messages stored on that machine. A variable that used to be out of reach is now within reach, and the responsibility for maintaining it came along with it.

> Sections 1 and 2 stay with what the announcement and the reporting said. Our own reading starts in Section 3.

### Key Numbers

The first two numbers are the conditions that let this model sit inside a personal device. The last two are where it wins and where it loses against open models of the same weight class.

Sources: [Meta AI Research](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model), [MarkTechPost](https://www.marktechpost.com/2026/08/10/meta-ai-releases-muse-glimmer/)

<!-- stat-card -->
**55GB → 18GB** — Model size after 4-bit quantization — Fits on one 24GB VRAM consumer GPU

<!-- stat-card -->
**120K+ tokens** — Context it can read at once — Sized to take in whole local documents and schedules

<!-- stat-card -->
**75.5 vs 62.5** — MCP-Atlas tool-calling score — Against Qwen3.6-27B, an open model of the same class

<!-- stat-card -->
**65.9 vs 75.6** — OSWorld computer-use score — Driving the screen directly is where it falls behind

## Thirty Billion Parameters on One Laptop

Muse Glimmer is a 30-billion-parameter dense multimodal model released by Meta Superintelligence Labs. The license is Apache 2.0 and the weights are open. It was distilled using the outputs of Muse Spark, Meta's top-tier closed model, as the teacher signal, which makes it something close to a scaled-down Spark by lineage. It takes text and images and returns text, and its knowledge cutoff is January 4, 2026.

The condition that lets it sit inside a device is size. At full precision it exceeds 55GB and will not fit on consumer hardware, but the 4-bit quantized builds come down to between 18GB and 20GB. Meta shipped two of them. The build for 32GB of VRAM loses 0.2% of average performance; the 17GB build targeted at 24GB loses 1.0%. Generation speed is pushed 1.5x to 3.1x higher by a drafter called DFlash that predicts 16 tokens at a time. On an RTX 5090, 74.9 tokens per second became 233.4, and on an Apple M5 Max, 26.6 became 50.2.

![DFlash speculative decoding performance chart — decode speed rising from 74.9 to 233.4 tokens per second on RTX 5090, and 1.5x-1.8x gains on Apple M5 Max and M4 Max, from Meta's official benchmark](./image/img-01-dflash-speed-benchmark.jpg)
*▲ The DFlash drafter lifts generation speed 3.1x on an RTX 5090 and 1.5x-1.8x on Apple M5/M4 Max | Source: [Meta AI Research](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)*

The distribution channels opened alongside it. Hugging Face carries the BF16 original, GGUF quantized builds, ExecuTorch builds for mobile and embedded targets, and the DFlash drafter that raises throughput. Integration with llama.cpp and MLX is announced as coming soon, and the model supports more than 100 languages. In other words, anyone can put it on their own hardware and run it without going through one company's app.

The benchmarks show plainly what the model was built for. On tasks that call tools and chain multiple steps together, it pulls well ahead of its comparison set. MCP-Atlas 75.5 is a wide gap next to Gemma4-31B at 54.2 and Qwen3.6-27B at 62.5. DeepSearch QA 74.6 and AIME 2026 94.7 point the same way. On OSWorld-Verified, which asks the model to look at a screen and drive the mouse and keyboard, it scores 65.9 against Qwen's 75.6, and it also trails on terminal work and SWE-Bench Verified. Planning and calling tools is the strong side; operating the screen by hand is still the weak one.

## Why Meta Wants This Model on Your Device

Meta states the reason up front in its announcement. An agent that manages schedules, drafts messages, organizes files, and learns how you work needs deep access to personal context, and that context contains personal files, conversation history, credentials, and internal company documents. For workflows that handle material like this, the announcement says, inference staying on the device is a precondition.

[TechCrunch](https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/) read the release as the first concrete artifact of the personal superintelligence idea Mark Zuckerberg has been describing. The line Meta drew is worth noting. The model people own and run themselves is open, while the more capable intelligence the company keeps control of stays closed. Glimmer is open and Spark is not. The technology outlet [MarkTechPost](https://www.marktechpost.com/2026/08/10/meta-ai-releases-muse-glimmer/) added regulated industries, air-gapped environments, and data residency requirements to that list. With no network calls at all, the reasoning goes, the data never crosses a border.

One more condition follows from this design. Because inference finishes inside the device, it works whether or not there is an internet connection. Zuckerberg's remark as relayed by TechCrunch runs in the same direction: when superintelligence is spread across individuals instead of pooled in a handful of servers, an era of expanded personal capability opens up.

That is where the announcement and the coverage stop. Looked at from the data side, though, one thing quietly changes places. In the era of calling a cloud API, what governed the quality of an answer was the pretraining data the provider had assembled. How that data was collected and cleaned was not our business, and what we sent was a few lines of prompt. What an on-device agent reads on every request is different: the attachment that arrived yesterday, last week's meeting notes, the entries still sitting in the calendar, the PDFs piling up in the downloads folder.

The left side of the diagram below is the arrangement we have had so far. The basis of the model's ability sits with the provider, and we take the result and use it. The right side is the arrangement Glimmer assumes. The weights are identical for everyone, but the input layered on top of them differs from device to device.
