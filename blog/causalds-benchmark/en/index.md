---
title: The Causal-Reasoning Benchmark That Reordered Six AI Data-Science Agents
subtitle: Michigan
date: 2026-07-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Causal-Reasoning Benchmark That Reordered Six AI Data-Science Agents

_Michigan_

## Executive Summary

> [!callout]
> Computing a correlation is no longer hard for an AI data-science agent. The hard part is the question that sits in front of it. What is the cause? Can this data even answer that question at all? The CausalDS benchmark, released in July 2026 by the University of Michigan's statistics department, puts six frontier and open-weight models on exactly this footing, scoring them not only on correlational prediction but on interventional and counterfactual reasoning, and on the judgment to step back and say the question cannot be answered.

> The most striking result is a reversal in the rankings. GPT-5.5 tied Claude Opus 4.8 for the top accuracy score (82.4%), yet it landed fifth in the composite standing. Getting an answer right and knowing how much to trust that answer turn out to be different axes, and GPT-5.5 collapsed on the second one. These figures come from a single preprint, so they are best read as values this study reported rather than as settled fact.

> This piece looks at what that gap asks of the definition of data quality. Data that is statistically clean is not the same as data that can answer a causal question.

<!-- stat-card -->
**0.278** — Claude's composite score — Lower is better — 1st of 6

<!-- stat-card -->
**82.4%** — Tied for top accuracy — Claude and GPT-5.5 level

<!-- stat-card -->
**~4×** — Gap in abstention — Unanswerable-case recognition 18.8→75.0%

<!-- stat-card -->
**20–71%** — Actual CI coverage — vs. nominal 95% — collapsed for every model

## CausalDS Tests the Three Rungs of Causation

AI benchmarks for causal reasoning have so far split into two camps. One asked purely symbolic causal questions with no realistic data analysis attached. The other made models analyze data, but the data carried no principled causal generating structure inside it. CausalDS folds the two together. Each scene is built by sampling a structural causal model (SCM), generating observational data from it, and dressing that data in a realistic domain story.

The tasks span the three rungs of the ladder of causation that Judea Pearl laid out. The first rung, association, asks what moves together with what. The second, intervention, asks what happens to that if I change this. The third, counterfactual, asks how the outcome would have changed had things gone differently back then. The higher you climb, the less the data alone can tell you, and the more you have to know the structure that produced it.
