---
title: A Benchmark That Scores Data Agents Skill by Skill
subtitle: The first benchmark to grade the cleaning, joining, and anomaly-detection skills hidden behind a single success rate
date: 2026-07-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Benchmark That Scores Data Agents Skill by Skill

_The first benchmark to grade the cleaning, joining, and anomaly-detection skills hidden behind a single success rate_

## Executive Summary

> [!callout]
> When we decide whether to put a data analysis agent into production, we usually look at one number on a leaderboard: the success rate. But data work doesn't break in only one place. An agent can read the schema correctly yet botch the join, clean the data cleanly yet miss the outliers, write code that runs yet ignores a business constraint. This article looks at **AgenticDataBench** (arXiv 2607.01647), a benchmark aimed squarely at that gap.

> The key move is changing the unit of scoring. Instead of measuring whether a task was completed as a single total score, the benchmark attaches ground-truth labels to individual data skills—cleaning, joining, anomaly detection, visualization, schema exploration—and grades each one. It mines 433 representative skills from 6,510 high-quality Stack Overflow solutions via hierarchical clustering, then combines them into 344 tasks. With each task requiring an average of 23.5 skills, two agents can share the same total score yet reveal very different strengths and weak spots.

> The question this design raises lands directly on anyone evaluating adoption. When we trust an agent, what are we actually verifying—the outcome, or the ability?

<!-- stat-card -->
**433** — Representative data skills — Extracted from 6,510 Stack Overflow solutions via hierarchical clustering

<!-- stat-card -->
**344** — Benchmark tasks — Averaging 23.5 skills combined per task

<!-- stat-card -->
**15** — Industry domains — Including 5 real B2B fintech use cases

<!-- stat-card -->
**38%** — Best-model pass@1 — Adjacent evaluation (arXiv 2603.20576) — the totals themselves are still low

## Solved Is Not the Same as Trusted

A leaderboard success rate is a convenient number. It compresses how many of 100 tasks an agent finished into a single figure, which makes it easy to line models up and pick one. The trouble is that the number can't tell **"finished"** apart from **"did it right."** In a data pipeline, an error early on propagates quietly downstream, and the final output gets dressed up in a plausible table or chart. If the success verdict only inspects the shape of the deliverable, a join that went sideways or a missing value that slipped through never shows up in the score.

For an organization, that distinction is anything but trivial. Say an agent cleaned some sales data, aggregated it by department, and produced a report. A total-score benchmark confirms only that "a report came out." Whether that report double-counted duplicate records, mixed currency units, or waved an anomalous transaction through as normal is a separate matter. An agent with a high success rate can still slip repeatedly at one specific point, and that slip stays hidden behind the total.

So the question we need is this: what exactly does the number we call a success rate guarantee, and what does it miss?
