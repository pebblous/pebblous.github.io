---
title: When Models Became Free, the Money Flowed to Inference
subtitle: What Fireworks
date: 2026-07-27
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Models Became Free, the Money Flowed to Inference

_What Fireworks_

## Executive Summary

> [!callout]
> In the summer of 2026, the center of gravity of AI venture capital visibly shifted. The money flowed not toward **training** new models but toward actually **running** the ones others had built. Fireworks, an inference-serving startup, saw its valuation jump from $4B to $17.5B in nine months; Baseten climbed from $5B to $13B in five. It is the next chapter of the Together AI story (GPU rental, $8.3B) we covered three weeks ago. The same capital climbed one more layer up the infrastructure stack — moving past the bottom tier that rents GPUs by the hour to re-price the middle tier that serves models as APIs on top of them.

> Why inference, specifically? Open-weight models have commoditized, closing the gap with closed frontier models to a low single-digit percentage, and token prices have collapsed by the high-90s percent over three years. That capital pours in even as prices crater looks like a paradox, but the reason is simple: no matter how low the per-token price falls, the sheer volume of tokens to be processed overwhelms it. So the value migrates from "which model you pay for" to "what you serve, and how."

> And the added value of serving ultimately converges on data. The evidence came from the operators themselves. Fireworks disclosed that of the 40 trillion tokens it processes daily, more than 95% come not from general-purpose models but from models specialized on customers' proprietary data. Even when the weights are free, the value is made by inference that has been tuned and grounded on fresh, verified data. Taking the price tag now attached to the serving layer as our starting thread, this report follows where capital settles as it climbs the stack.

<!-- stat-card -->
**4.4×** — Fireworks valuation — $4B → $17.5B in nine months (Baseten: 2.6× in five)

<!-- stat-card -->
**95%+** — Custom fine-tuned share — Fireworks traffic from customer-data-specialized models (company-reported)

<!-- stat-card -->
**40T/day** — Fireworks daily tokens — Up roughly 3× from 15T previously (company-reported)

<!-- stat-card -->
**33% → 70%+** — Compute spent on inference — From ~33% in 2023 to a projected 70–80% by end-2026 (estimates vary)

## Capital Climbed One Layer Up

Three weeks ago we devoted [a full report](/blog/together-ai-neocloud-8-3b-valuation/en/) to Together AI, a company that rents GPUs by the hour, earning an $8.3B valuation. The conclusion was this: once models commoditized, the money flowed down to the layer beneath them — the physical compute needed to run models. But the flow did not stop there. This summer, the same capital climbed one more layer up the stack. Not the bottom tier of GPU rental, but the layer above it that actually executes models and serves them as APIs: the **inference serving** layer.

The numbers lay the move bare. Fireworks was valued at $4B in its October 2025 Series C; in July 2026 it raised $1.5B in a Series D that closed at $17.5B — roughly 4.4× in nine months. Baseten was at $5B in January 2026, then rose to $13B (with some tranches at $11B) after raising $1.5B in a June Series F — 2.6× in five months. Set against Together AI's 2.5× over sixteen months, what stands out is less the multiple itself than the **speed of arrival**. Capital enters the serving layer faster than it entered the hardware-rental tier beneath it.

Captured on a single page, this terrain resolves into three layers. At the bottom sits the hardware tier that owns GPUs and rents them by the hour (neoclouds like Together AI). Above it sits the software tier that loads models and optimizes them with batching, caching, and routing to serve as APIs (Fireworks and Baseten, the subjects of this report). And at the top sits the data-and-application tier that actually makes that inference worth paying for. What capital re-priced this time was precisely the middle layer.
