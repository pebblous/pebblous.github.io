---
title: AI Quietly Gets Data Analysis Wrong as It Runs Longer
subtitle: The reality of failed analytical-state management, seen across 68 LongDS-Bench tasks
date: 2026-07-04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Quietly Gets Data Analysis Wrong as It Runs Longer

_The reality of failed analytical-state management, seen across 68 LongDS-Bench tasks_

## Executive Summary

> [!callout]
> We took 68 data-analysis tasks pulled from real Kaggle notebooks and handed them to five frontier models. Each task ran about 33 turns on average, 2,225 turns in total, long and drawn out. The results were sobering. The best model averaged 48.45% accuracy, never crossing half. Models that handled a single short question just fine began to quietly get things wrong as the analysis stretched on. Through a data team's eyes, this piece reads where, and why, that collapse begins.

> The most painful number is the gap between early and late turns. Within a single task, accuracy on later turns fell nearly 47pp below the early ones. And it wasn't because the models forgot. It was because they failed to hold, revise, and restore the "analytical state" (the definitions, filters, and assumptions set earlier) in time, so that one wrong intermediate result contaminated every calculation that followed.

> More steps weren't the answer. The model that used the most steps actually scored lower than the top model. The bottleneck wasn't how many times it tried, but how correctly it held the analytical state. If your team has already handed data work to an agent, this is the moment to ask whether that work is drifting wrong in ways too subtle to catch the longer it runs.

### Key figures

Source: [LongDS-Bench (arXiv:2605.30434)](https://arxiv.org/abs/2605.30434)

The four numbers below capture both the size and the cause of the collapse. The first two show how large it is; the last two point to why it's a problem of state management, not memory.

<!-- stat-card -->
**48.45%** — Best-model accuracy — Even top-ranked Gemini-3.1-Pro couldn't cross half

<!-- stat-card -->
**47pp** — Late-turn drop — Accuracy gap from early to late turns in the same task

<!-- stat-card -->
**52–69%** — Long-horizon errors — Share of all failures that are state-management type

<!-- stat-card -->
**11.3 turns** — Avg. state-dependency distance — A request relied on state from 11.3 turns earlier on average

## 68 Tasks That Look Like Real Analysis

Released in May 2026 by a joint team from Zhejiang University and Ant Group, LongDS-Bench has a different grain than the data-analysis benchmarks that came before it. Most existing benchmarks pose a single, self-contained question and score the answer. But real data analysis doesn't flow that way. You define a cohort, apply a filter, build an intermediate metric, quietly change that definition a few days later, then roll back to a version you froze yesterday to answer a question, all tangled across many turns.

To reproduce that flow, the researchers drew 68 tasks from real Kaggle notebooks and rebuilt them as multi-turn conversations. They span six domains (earth science, business, education, sports, social good, and community), averaging 33 turns per task, 2,225 turns in all. What matters is that these turns aren't independent. A single request depended on state from 11.3 turns earlier on average, and a single turn had to reference 2.9 prior states at once. Miss what was defined earlier, and how, and everything downstream shakes loose.
