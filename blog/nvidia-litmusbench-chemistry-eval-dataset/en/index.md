---
title: NVIDIA
subtitle: NVIDIA opened nearly 50,000 chemistry questions drawn from lab records, but the 61% quantum dot score came from a partner grading its own model on a task it chose
date: 2026-11-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# NVIDIA

_NVIDIA opened nearly 50,000 chemistry questions drawn from lab records, but the 61% quantum dot score came from a partner grading its own model on a task it chose_

## Executive Summary

> [!callout]
> NVIDIA has turned chemistry lab records into an open dataset and released it alongside a model. Nemotron for Science, the science bundle unveiled on November 16 at SC26, the supercomputing conference in Chicago, contains a vision-language model, a post-training recipe and LitmusBench v0.2, a chemistry dataset of nearly 50,000 questions. The questions were built from molecular property data and records of real drug discovery work, and all of it is on Hugging Face.

> The number quoted most often from the announcement is 61%. Lila Sciences, a partner, post-trained the model on laboratory feedback until its accuracy on quantum dot synthesis protocols reached that level, ahead of the 54% GPT-6 Astra scored on the same task. The party that designed and ran that comparison was neither NVIDIA nor an independent evaluator; it was Lila Sciences. The test bed behind the figure was not LitmusBench v0.2 either, but a task Lila Sciences picked for itself. No one outside has posted a score on the 50,000 open questions.

> Sections 1 through 4 follow what NVIDIA announced and what the coverage reported. Section 5, which reads the release as a question about AI-Ready Data, is this article's own interpretation.

### Key Numbers

Source: [NVIDIA press release](https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents) (November 16, 2026) and reporting by [SiliconANGLE](https://siliconangle.com/2026/11/17/nvidia-at-sc26-agents-are-the-new-scientists-and-they-need-a-lab/) and [CDO Magazine](https://www.cdomagazine.tech/aiml/nvidia-launches-open-science-ai-models-and-50000-question-chemistry-dataset-for-research-agents) (November 17, 2026)

The first card gives the size of what was opened, and the second puts that 61% next to the score it beat. That comparison came out of a task the partner chose for itself, so it is not a score on the open questions. The third card counts the scores posted on those questions from outside, and the fourth is the cost gap NVIDIA stressed alongside the accuracy.

<!-- stat-card -->
**~50,000** — Questions in LitmusBench v0.2 — Drawn from molecular property data and drug discovery records

<!-- stat-card -->
**61% vs 54%** — Quantum dot protocol accuracy — The model Lila Sciences post-trained, against GPT-6 Astra

<!-- stat-card -->
**0** — Outside groups with a published score — The dataset is days old, so no third party has posted one

<!-- stat-card -->
**10-20x** — Inference cost gap — Lower than the comparison model, by NVIDIA's account

## What LitmusBench Actually Asks

Picture LitmusBench v0.2 as a chemistry quiz and you miss what it is. The raw material is experimental. How well a molecule dissolves in water, how the body absorbs and breaks it down, and other property measurements were turned into questions, together with records accumulated during real drug discovery work. The questions ask what a molecule will do rather than what is already recorded about it.

The size is nearly 50,000 questions, and they were built for two uses at once. They score models, and they were also designed to serve as post-training material for tuning a model toward scientific work. The exam paper and the textbook arrived in one package.
