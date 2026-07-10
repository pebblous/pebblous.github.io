---
title: 38B Tokens Beat 350B Tokens
subtitle: What FineWeb, Phi, and Llama 3 reveal about why better data—not bigger models—now decides performance
date: 2026-06-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 38B Tokens Beat 350B Tokens

_What FineWeb, Phi, and Llama 3 reveal about why better data—not bigger models—now decides performance_

## Executive Summary

> [!callout]
> Through 2024, the news from the pretraining side went quiet. Making models larger no longer drove the loss curve down as steeply as it once did, and most of the visible gains came from post-training and inference-time compute. As the strategy of adding parameters approached its limit, the variable that began to separate models again was the quality of the data. This article follows public numbers to trace why that shift happened and how data curation returned as the new bottleneck.

> The clearest evidence came from Hugging Face's FineWeb-Edu. When a model-based classifier kept only the text with high educational value, a model trained on 38B tokens matched one trained on an unfiltered 350B tokens. The same performance from nine times less data. But this curation is not free. High-quality human text is depleting fast, and the synthetic data that fills the gap can break a model if used carelessly. The moment the performance lever moved to data, choosing the data itself became the next bottleneck.

> The story picks up where Chinchilla's 20:1 ratio broke and follows a single causal chain: how curation became the lever that replaced sheer model size, and how, in the same move, it turned into the new bottleneck itself. It works downward from the evidence in pretraining datasets to the labeling pipelines on the ground—so if you work with data day to day, you can read it as a guide to what to check first in your own.

The way curation began to substitute for model size is compressed into four numbers: the efficiency of curation, how far practice overshot Chinchilla's optimum, the performance a small model reached, and the scale of contamination that makes data risky again.

<!-- stat-card -->
**38B = 350B** — FineWeb-Edu efficiency — Curated 38B matched unfiltered 350B—9x more efficient

<!-- stat-card -->
**1,875:1** — Llama 3 tokens/parameter — About 94x Chinchilla's optimal 20:1 over-training

<!-- stat-card -->
**50.6%** — Phi-1 HumanEval — A 1.3B small model surpassing far larger ones

<!-- stat-card -->
**74%** — New web pages with AI text — As of April 2025; without curation, contamination accelerates

## Bigger Models, Flatter Curve

For a long time, the starting point for predicting a foundation model's performance was the scaling law. DeepMind's 2022 [Chinchilla](https://www.jonvet.com/blog/llm-scaling-in-2025) study showed that, for a fixed compute budget, loss bottoms out when model size and data volume grow together. A 70B model outperformed the 280B Gopher trained on the same budget, and the compute-optimal ratio settled at roughly 20 tokens per parameter. For a while, this 20:1 was the compass for the people designing models.

But practice drifted away from that optimum. Once you account not just for training cost but also for inference cost after deployment, it pays to reach the same performance with a smaller model. So over-training—pouring far more data into smaller models—became the norm. The shift in ratio is steep.

- •Llama 1 (7B): starting around **142** tokens/parameter
- •Llama 2 (7B): about **284** tokens/parameter—double in a single generation
- •Llama 3 (8B, 15T tokens): **1,875** tokens/parameter, about 94x Chinchilla's optimum
- •Qwen3-0.6B (36T tokens): **60,000:1**—the ratio jumps from three digits to five
