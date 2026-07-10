---
title: The AI Saw the Anomaly. It Just Never Acted on It.
subtitle: The judgment gap OpenAI
date: 2026-07-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Saw the Anomaly. It Just Never Acted on It.

_The judgment gap OpenAI_

## Executive Summary

> [!callout]
> On June 30, 2026, OpenAI released **GeneBench Pro**, a computational biology benchmark. It poses problems drawn from real genomics research and grades the answers, and so far no model has cleared half of them. The top scorer, GPT-5.6 Sol Pro, reached 31.5%. Two out of every three answers were still wrong. So why did the other 68.5% get it wrong?

> It's the way it fails that stands out. The model notices that the data contains outliers or confounders. But it fails to carry that observation into the analytical decisions that follow. OpenAI called this failure the "noticing-to-acting gap." The model doesn't get it wrong because it didn't know—it gets it wrong because it knew and moved on anyway.

> For anyone working on data quality, this result is the flip side of a familiar question. If AI-Ready Data means "making clean data that AI can use," GeneBench Pro asks about "making AI that can read messy data and judge it well." Both questions share the same ceiling.

Here is the scale of that broken judgment, in numbers.

<!-- stat-card -->
**31.5%** — Top score — GPT-5.6 Sol Pro, max reasoning setting

<!-- stat-card -->
**16.0%** — Claude Opus 4.8 — Accuracy of the runner-up tier

<!-- stat-card -->
**<5%** — Starting point — GPT-5 early in benchmark design

<!-- stat-card -->
**129** — Problems — 10 domains, deterministic grading

## Where the Knowledge Exam Ends

On established benchmarks like MMLU or GPQA, AI has already brushed against the ceiling. Top models cleared 81% on the biology portion of GPQA. These exams mostly test knowledge: the answer sits somewhere in the text, and the model just has to find it and pull it out.

GeneBench Pro asks something else. Its problems resemble actual research. It hands over noisy genomic data, asks the model to choose an appropriate analytical path, and then to produce an estimate that fits the decision downstream. The 129 problems span 10 domains—statistical genetics, cancer genomics, pharmacogenomics, clinical diagnostics, and more. Each problem is generated from a known causal structure, so the correct answer is deterministic. Analyses that look plausible but are wrong are designed to be caught at the grading stage.

One figure gives a sense of the difficulty. A human expert is estimated to need 20 to 40 hours to solve a single problem. A model attempts the same problem with a few dollars' worth of inference. Here is how the ranking came out under those conditions.

| Model | GeneBench Pro accuracy |
| --- | --- |
| GPT-5.6 Sol Pro | 31.5% |
| GPT-5.6 Sol | 28.7% |
| Claude Opus 4.8 | 16.0% |
| GPT-5.5 | 12.0% |
| GPT-5.4 | 8.9% |
| Gemini 3.5 Flash | 8.1% |
| Gemini 3.1 Pro | 3.1% |

On a knowledge exam, every one of these models is an honor student. Move to an exam that tests judgment, and even the top model barely clears a third. What the leaderboard shows isn't a gap in performance—it's that the kind of ability being measured has changed.

## It Notices, but Doesn't Act

The name OpenAI gave to the wrong answers, after taking them apart, is the noticing-to-acting gap. The model generally spots the quality problems in the data. It even states them: there's an outlier, a confounder is mixed in, a quality-control signal has failed. But it can't push that recognition forward into the next analytical decision. Judgment snaps somewhere between the sentence that spots the problem and the sentence that runs the analysis.

A pharmacogenomic survival-analysis problem is a telling case. GPT-5.5 noticed that the treatment variable changed over time, but it couldn't handle the structure in which treatment and confounders feed back on each other. GPT-5.6 Sol, by contrast, layered a structural Cox model on a new-user design, stabilized the inverse-probability weights, and accounted for a 90-day lag in the effect—choosing a causally correct path. The difference between the two models wasn't the amount of knowledge they held; it was the judgment that connects what you notice to what you decide.
