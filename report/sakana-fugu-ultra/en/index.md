---
title: The Model That Conducts Other Models Is Here
subtitle: Sakana AI
date: 2026-06-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Model That Conducts Other Models Is Here

_Sakana AI_

## Executive Summary

> [!callout]
> The center of gravity in the LLM race is shifting from "one bigger model" to "a trained coordinator that directs several models." The clearest example is Fugu Ultra, which Sakana AI moved to general availability in June 2026. Fugu is not a new foundation model. It is a model trained to call other LLMs: behind a single endpoint it breaks a task apart, decides which sub-model should handle what, then verifies and synthesizes the results. What sets it apart from if-else rules or embedding-similarity prompt routing is that the routing policy itself is learned from a reward signal. This report looks at what that shift really is, and why it is, at bottom, a data problem.

> Sakana announced that Fugu Ultra led or tied the field on 8 of 10 benchmarks against Opus 4.8, Gemini 3.1 Pro, and GPT-5.5. Read closely, the claim is thinner than it sounds. The outright wins number seven, and the two clear losses both land on long-context tasks, where orchestration adds coordination noise rather than removing it. Every baseline score is vendor-reported, and the open-versus-closed makeup of the model pool is left undisclosed, so the interesting question is less the leaderboard than its auditability.

> Fugu's marketing wrapper is "AI sovereignty": the claim that it stays competitive without the frontier models that export controls keep out of its pool. But a coordinator can only route well if its picture of which model is good at what is accurate, and that picture is only as good as the benchmark and evaluation data behind it. The ceiling on orchestration performance is the quality of model-evaluation data. Seen from Pebblous's vantage, that is the natural extension of "data over models": now the model itself has to be diagnosed, selected, and managed like data.

The four numbers below mark the corners of that argument: Fugu's reported benchmark standing, the cost environment that makes routing urgent, and the measured edge a good combination wins over any single model.

<!-- stat-card -->
**8 / 10** — Benchmarks led or tied — Sakana's claim; seven are outright wins (vendor-reported)

<!-- stat-card -->
**~10× / yr** — Inference cost decline — Equal-quality $/token, a16z "LLMflation" (estimate)

<!-- stat-card -->
**75%** — Routing cost savings — RouteLLM at 95% of GPT-4 quality

<!-- stat-card -->
**+7.6%p** — Combination's accuracy edge — Mixture-of-Agents over GPT-4 Omni on AlpacaEval

## The Model That Conducts Models: What Fugu Ultra Actually Did

The easiest way to misread Fugu Ultra is to file it next to GPT-5.5 or Gemini 3.1 Pro as one more frontier model. It is a different kind of object. Behind a single API endpoint, Fugu takes an incoming task, decomposes it, decides which underlying LLM should handle each piece, calls those models (recursively, when a sub-task needs further breaking down), and then verifies and synthesizes their outputs into one answer. Sakana's own shorthand for it is blunt: an LLM trained to call other LLMs. The work that a human systems engineer would do by hand when stitching several models into a pipeline is folded into the model itself.
