---
title: You Can
subtitle: The Anthropic–Alibaba distillation dispute exposes the real bottleneck of sovereign AI: source data
date: 2026-07-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# You Can

_The Anthropic–Alibaba distillation dispute exposes the real bottleneck of sovereign AI: source data_

## Executive Summary

> [!callout]
> Tech columnist Will Lockett called it hypocrisy when Anthropic denounced Alibaba's "distillation attack." After all, Anthropic itself trained on books scraped without their authors' consent, and settled for $1.5 billion over it. But "who is the bigger hypocrite" is only the surface of this affair. Peel back one layer and a far more important question appears: why is distillation so cheap and so powerful? This piece follows that question through the lens of sovereign AI and source data.

> The answer is simple. Distillation is cheap because it **free-rides** on the diversity and curation quality of the data that the original model absorbed. The teacher model's outputs are effectively a compressed version of that data distribution, and the student model copies that distribution on the cheap. No source, no distillation. Yet if generation after generation trains only on distilled and synthetic data, the tails of the distribution vanish first and the model collapses. The one verified remedy a 2024 Nature study identified was mixing in 10% real source data every generation.

> Through this lens, the bottleneck in the sovereign AI race that nations are now waging looks different. Sovereign AI project budgets worldwide skew toward compute infrastructure at 59% and models at 34%, while national data initiatives account for just 7%. No matter how many GPUs you stack, without a pipeline of licensed, high-quality source data you end up chasing the frontier by distilling it. Data sovereignty is AI sovereignty.

Four numbers run through this piece.

59% vs 7%

Sovereign AI budgets — compute infrastructure vs. national data initiatives (CNAS)

$1.5B

The legal bill for unauthorized source-data acquisition — about $3,000 per book (Bartz v. Anthropic)

10–100×

The training-cost gap of a distilled student vs. a frontier model (depending on the baseline)

10% source

The only verified remedy against model collapse (Shumailov, Nature 2024)

## The "Hypocrisy" Hook and the Question Beneath It

The title of Will Lockett's piece is provocative: "AI Distillation Attacks Are Profoundly Stupid." The gist runs like this. Anthropic went so far as to send letters to regulators claiming that a competitor had distilled its models — yet Anthropic itself trained its models on books scraped without the copyright holders' consent, and paid $1.5 billion for it. If someone else's unauthorized training is an "attack" while your own unauthorized training is "innovation," that standard doesn't hold together.

First, the facts need sorting out, because two events are routinely conflated here. One is the distillation activity Anthropic disclosed in February 2026, at a scale of **16M conversations / 24,000 accounts** — but that figure is the combined total across three companies: DeepSeek, Moonshot, and MiniMax. The other, revealed in a June 2026 letter to the U.S. Senate Banking Committee, is a scale of **28.8M conversations / roughly 25,000 accounts**, which Anthropic described as "the largest known distillation attack ever" and attributed to Alibaba (Qwen). The window was specified as April 22 to June 5, 2026. The two events differ in both scale and target.
