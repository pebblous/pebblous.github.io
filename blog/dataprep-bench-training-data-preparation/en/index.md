---
title: The First Benchmark for How Well AI Prepares Its Training Data
subtitle: DataPrep-Bench scores two skills across six domains — building training data, and judging its value before a single training run
date: 2026-08-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The First Benchmark for How Well AI Prepares Its Training Data

_DataPrep-Bench scores two skills across six domains — building training data, and judging its value before a single training run_

## Executive Summary

> [!callout]
> It is by now common knowledge that the quality of training data fundamentally shapes how good a model becomes. Yet when the job of preparing that data is handed to an AI, no unified benchmark had ever measured how good that AI actually is at the craft. Fine-tuning begins where the data is assumed finished, and data curation has largely been left to human instinct and habit. Released in 2026, **DataPrep-Bench** targets exactly this gap, casting the LLM as a "training-data preparator" and measuring that skill for the first time.

> The benchmark splits the ability in two. There is **data construction**, turning raw material into training data, and **data quality evaluation**, predicting a dataset's training value before a single training run. Scored across six domains by actual fine-tuning performance, a skill-guided construction agent lifted the finance-domain baseline by a full 19.1 points, but the same experiments also exposed cases where several generation methods actively hurt performance. The assumption that synthetic data always helps did not survive contact with measurement.

> The most telling part is where the results diverge. The skill of building data and the skill of judging it were measured both apart and together, and the method for scoring a dataset's training value before any compute is burned (DAS) works remarkably well in some domains yet simply stalls in others. Can the "ready" in AI-Ready Data become a measurable score rather than a matter of human feel? DataPrep-Bench offers the most concrete answer yet.

<!-- stat-card -->
**+19.1 pts** — Peak lift from skill agent — Llama-3.1-8B finance, 15.1 → 34.2 over Dolly alone

<!-- stat-card -->
**r > 0.70** — Only DAS cleared it — Math, Science, and Medical at once

<!-- stat-card -->
**0.42–0.50** — DAS ceiling in finance — The hardest domain, where every metric struggled together

<!-- stat-card -->
**Backfire** — Synthetic domain data — Several methods scored below Dolly alone

## The Skill No One Measured: Data Prep

Benchmarks that measure how well we pick a model are everywhere. Reasoning, coding, math, safety — the leaderboards are dense. But the seat that measures how well the model's raw material, its training data, was prepared has stood empty for a long time. Data prep is not glamorous. Cleaning source documents, pairing questions with answers, stripping out noise — none of it climbs a leaderboard. And yet this is the very step that moves the outcome most.

DataPrep-Bench, released by Peking University together with the Shanghai institute for advanced algorithms and others, confronts this gap head-on. The paper's premise is simple. Even though training-data quality fundamentally decides an LLM's ability, there was no unified benchmark for how well LLMs and agents actually prepare training data. Why not? The paper points to four reasons.

![Weiming Lake and Boya Tower at Peking University — the campus behind the DataPrep-Bench research team](./image/img-01-peking-university.jpg)
*▲ Peking University campus (Weiming Lake and Boya Tower), home to the team behind DataPrep-Bench | Source: [Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:%E5%8D%9A%E9%9B%85%E5%A1%94.jpg)*

- •**Fragmented methodology**: research on "constructing" data and research on "evaluating" data quality grew up in separate literatures, leaving no shared evaluation infrastructure.
- •**Inconsistent protocols**: source data, base models, and downstream benchmarks differed from study to study, making it impossible to compare which construction strategy actually produces useful data.
- •**Weakly validated metrics**: existing quality metrics mostly confirmed correlation on a single model and a single domain, or settled for the indirect approach of filtering a top few.
- •**Cost barrier**: measuring the full pipeline from construction through fine-tuning to downstream evaluation is compute-heavy, so prior work tended to validate only on the domains and models that favored it.

> [!callout]
> **The core observation**: everyone knows data prep drives the outcome, yet the seat for scoring that craft was the one left empty. The very absence of a benchmark tells you how much this step had been left to human feel.

## Building It vs. Judging It

The skill DataPrep-Bench measures comes in two tracks. The first is **Data Construction**, the ability to turn raw material into supervised training data. The second is **Data Quality Evaluation**, the ability to predict a candidate dataset's training value before running downstream training at all. The paper treats neither as a sidebar to the other; it measures both as equal goals under a single protocol. It puts the hand that makes the material and the eye that appraises it on the same scale.

What "quality" means here matters. It is not a surface property like whether the prose reads smoothly or whether the spelling is clean. It is **training usefulness** — how much downstream performance actually rises when a model trains on that data. So the two tracks score differently. The construction track fine-tunes a base model on the produced data and grades it by domain-benchmark scores; the quality-evaluation track grades by the **Pearson correlation** between an evaluator's score and actual fine-tuning performance.

The construction track's scoring is one layer more concrete. The domain data each method produces is mixed into the general-purpose instruction dataset **Dolly-15k**, used to fine-tune two base models (Qwen2.5-7B and Llama-3.1-8B), and the resulting model's domain-benchmark score is compared against a model trained on Dolly alone. So each method's score points to how much more useful that method made the data, measured on the common floor that Dolly provides. Figures like "15.1 → 34.2" that appear later all read against this floor.
