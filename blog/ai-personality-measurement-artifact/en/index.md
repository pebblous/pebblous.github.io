---
title: AI Personality Tests Weren
subtitle: A psychometric audit of 56 language models found the gaps came from answering habits, not Big Five traits
date: 2026-06-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Personality Tests Weren

_A psychometric audit of 56 language models found the gaps came from answering habits, not Big Five traits_

## Executive Summary

> [!callout]
> Run a personality test on a language model and a sharp profile comes out. One model reads as extraverted, another as neurotic. But a study that re-examined 56 models with proper psychometric methods says those profiles are not measuring personality at all. The paper, by Meyer, Garcia, and Wulff, went up on arXiv in June 2026.

> Between 81% and 90% of the personality differences across models came not from real traits but from a habit of answering surveys — a measurement bias. In humans, only 9% to 16% of the same gaps trace back to that habit. What the personality test captured was not a model's inner life but its steady tendency to agree with, or push back on, the items put in front of it.

> This piece reads that finding through the lens of data quality. We believe we are measuring the emotions and personalities of AI with growing precision, but if the ruler itself is bent, the score is not data — it is noise.

### Key Figures

Source: [Meyer, Garcia & Wulff (2026), arXiv:2606.20205](https://arxiv.org/abs/2606.20205)

The four numbers below are different cross-sections of the same conclusion. Most of a model's personality difference is bias (81–90%); the bias shows itself in how models answer mirror-image items (forward–reverse correlation of +0.7); the result was confirmed at scale (56 models); and as a result the profile shifts far too easily (up to 0.99 standard deviations).

<!-- stat-card -->
**81–90%** — Of the gap is bias — Share of between-model personality differences driven by response bias, not real traits (humans: 9–16%)

<!-- stat-card -->
**+0.7** — Forward–reverse correlation — On oppositely worded items, LLMs answer in the same direction (humans: −0.7)

<!-- stat-card -->
**56** — Models tested — 46 open-source models plus 10 from the GPT, Claude, Gemini, Qwen, and Grok families

<!-- stat-card -->
**0.99 SD** — How far profiles drifted — Largest standard-deviation gap a single model's personality opened up depending on which items were used

## Personality Tests on 56 Models

The researchers gathered 56 instruction-tuned language models in one place. Forty-six open-source models ranging from 1B to 70B parameters, plus ten commercial models from the GPT, Claude, Gemini, Qwen, and Grok families. They ran the same standard instrument used to measure human personality: the Big Five. It is the very questionnaire that has measured human dispositions along five axes — openness, conscientiousness, extraversion, agreeableness, and neuroticism. They also administered a risk-preference survey (DOSPERT) and a moral-foundations questionnaire, and set a large human sample alongside the models for comparison.

At first glance the picture was crisp. Each model showed a distinct personality profile. Some scored high on openness, others stood out on agreeableness. Cronbach's α, which gauges a test's internal consistency, landed between 0.85 and 0.96 — as stable as anything you would see in humans. Taken at face value, this was exactly the kind of data that invites the conclusion "language models have personalities too." And over the past few years, no small number of studies went down that road.

> [!callout]
> So far, a familiar story: run a personality test on a model and a personality comes out. The trouble starts next, when the researchers added one simple check.

## Asked in Reverse, the Models Still Agreed

A well-built personality test mixes in items that ask about the same trait in reverse. If "I am full of curiosity" is a forward item, "I have no curiosity" is the reverse item. The two ask about the same disposition in opposite directions. So a person with a consistent personality should agree with one and reject the other. Someone curious answers "yes" to the first and "no" to the second. The two responses move in opposite directions, which shows up statistically as a negative correlation.

The human sample did exactly that. Responses to forward and reverse items correlated between −0.69 and −0.82 — negative. The answers flipped consistently with the direction of the item, and that consistency is the very signal we call personality.

The language models were the opposite. On the same two items, their responses correlated between +0.61 and +0.81 — positive. A model that agreed with "I am full of curiosity" also agreed with "I have no curiosity." The content was reversed, but the answer went the same way. The models were not tracking what the item asked; they were holding to a steady habit of reacting to the survey itself. What stayed consistent was not personality but a response habit.
