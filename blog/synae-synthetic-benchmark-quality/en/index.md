---
title: Measuring the Quality of the Synthetic Data That Grades AI Agents
subtitle: SynAE diagnoses the synthetic test sets for tool-calling agents on validity, fidelity, and diversity
date: 2026-07-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Measuring the Quality of the Synthetic Data That Grades AI Agents

_SynAE diagnoses the synthetic test sets for tool-calling agents on validity, fidelity, and diversity_

## Executive Summary

> [!callout]
> To evaluate an AI agent that works by calling tools, you need a test. But real production data is sensitive and scarce, so the field is moving toward building those tests out of synthetic data. The problem is that no one grades whether the test itself actually resembles the real world. This piece looks at **SynAE** (arXiv 2605.22564, research from Carnegie Mellon University and Microsoft), a framework aimed squarely at that gap.

> One case SynAE surfaces makes that gap concrete. Build the same test with a standard synthetic-data tool (NVIDIA NeMo) but swap the backend model, and the validity scores stay almost identical at 0.98 and 0.99 while fidelity splits wide open at 0.71 and 0.94. Look at validity alone and the two tests seem equally good, yet how well they reproduce reality is entirely different. This is exactly why the researchers insist that no single metric can define the quality of synthetic data.

> For readers who diagnose data for a living, that conclusion translates into a question one layer deeper. To trust a model's score, you first have to diagnose the data that becomes the test that produced it.

<!-- stat-card -->
**0.71 vs 0.94** — Fidelity of the two backends — Same NeMo tool, split by Llama3.1-8B vs. GPT-4o-mini

<!-- stat-card -->
**0.98 vs 0.99** — Validity of the two backends — Nearly identical — validity alone can't tell them apart

<!-- stat-card -->
**≈1.0 → 0** — Blank Filling's KNN-precision — Push masking to the max and fidelity collapses while diversity actually rises

## Doubt the Test First

Tool-calling agents are usually evaluated on execution traces: a static dataset holding the user's instructions, the agent's responses, and the tool calls exchanged in between serves as the test to grade against. But real production data is hard to use as a test. It holds sensitive or proprietary information, and there is rarely enough of it to support comprehensive pre-deployment testing. So the practice of replacing or augmenting real data with synthetic data to build evaluation benchmarks has taken hold.

That is where the core difficulty arises. How do you confirm, in numbers, the relationship between this synthetic data and the real data it stands in for? SynAE is a framework built to answer exactly that question. It looks at synthetic data across **four axes**: task instructions and intermediate responses, tool calls, final output, and the downstream performance you observe when you actually grade agents with the test.

Each axis is then measured on **three properties**. Validity asks whether the synthesized instruction-response plausibly accomplishes the task goal; fidelity asks how faithfully it reproduces the distributions and patterns of the real data; diversity asks how wide a range it covers. Validity answers "does this make sense," fidelity answers "does this resemble reality," and diversity answers "is this wide enough."
