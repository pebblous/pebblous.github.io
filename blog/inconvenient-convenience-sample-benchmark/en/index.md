---
title: INCONVENIENT: A Test Where Easy-to-Collect Data Breaks AI
subtitle: Build about 15,500 skewed training samples out of 200 tabular datasets, and seven standard models lose 20% to 45% of their performance
date: 2026-10-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# INCONVENIENT: A Test Where Easy-to-Collect Data Breaks AI

_Build about 15,500 skewed training samples out of 200 tabular datasets, and seven standard models lose 20% to 45% of their performance_

## Executive Summary

> [!callout]
> INCONVENIENT, posted to arXiv on October 15 by researchers at Michigan State University and Henry Ford Health, is a tabular benchmark that isolates one thing: how far a model falls when its training data was gathered because it was easy to get. Data that accumulates in the field is not drawn evenly from a population. It piles up wherever hands can reach, in the patients of one hospital, the users of one platform, the people who happened to answer a survey. Statistics calls a sample collected that way a convenience sample. This article looks at what a test turned up when that tilt alone was made the variable.

> The number the paper puts in its conclusion is plain. Across 200 tabular datasets and about 15,500 skewed training samples built from them, seven standard models lose between 20% and 45% of their performance on average. The part worth lingering on is that the models cannot tell. The validation split comes out of the same skewed sample, so the metrics watched during training raise no flag at all.

> Sections 1 through 4 follow what the paper records. Section 5, which reads the design from the vantage of day-to-day data work, is this article's interpretation.

### Key Numbers

Source: Rezaeimanesh et al., [the INCONVENIENT paper](https://arxiv.org/abs/2610.21038) (arXiv:2610.21038, October 15, 2026).

<!-- stat-card -->
**20–45%** — Performance the seven standard models lose on average — The figure the paper's conclusion puts on all 200 datasets taken together

<!-- stat-card -->
**~15,500** — Skewed training samples kept after filtering — 6,489 classification variants plus 8,970 regression variants

<!-- stat-card -->
**104–109%** — How far untouched coefficients moved in classification — Median relative change, the sign that aiming at one feature spreads distortion across the whole table

<!-- stat-card -->
**37.4%** — How often the LLM pointed at a suspect feature — That is 2.2× the 16.8% chance baseline, and still short of half

## Gathered Within Reach, Not Drawn From the Population

The full name is "INCONVENIENT: A Benchmark to Assess LLM Generalization Capabilities from Convenience Samples." Sara Rezaeimanesh and Mohammad Ghassemi of Michigan State University wrote it with Chad Klochko and Kundan Thind of Henry Ford Health, and it went up on arXiv on October 15. The header on page one says it is published as a conference paper at ICLR 2027.

The data the benchmark works on is tabular. One row is one person or one event, one column is one variable, and into that table go the records that decisions rest on directly, such as a hospital's clinical notes or a company's underwriting history. Two of the four authors are based at Henry Ford Health, a hospital system.

The setup the benchmark builds is simple. It treats data as two things, a population and a convenience sample. The population is the whole world the model will actually work in, and the convenience sample is the share of that world that arrived systematically tilted to one side. Training happens on the convenience sample, and evaluation always happens on the original population. That is the order of events in the field. You build a model out of the data you can collect, and then you apply the model to everyone.

Earlier distribution-shift benchmarks do not use this setup. Collections like WILDS and TableShift split data along naturally occurring domains such as hospital, region or time period, then train on one side and evaluate on the other. When the score drops, the cause then forks in two. You cannot separate a failure to adapt to an unseen domain from a failure to recover the population's relationships out of a skewed sample. INCONVENIENT pins the evaluation side to the population and twists only the training sample, which fixes the cause of the drop on the collection method alone.
