---
title: LegalBench
subtitle: With model responses and the answer key untouched, correcting the scoring code alone raised accepted answers out of 96 cases from 8 or 9 to between 87 and 91
date: 2026-11-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LegalBench

_With model responses and the answer key untouched, correcting the scoring code alone raised accepted answers out of 96 cases from 8 or 9 to between 87 and 91_

## Executive Summary

> [!callout]
> An audit of nine public policy-based decision benchmarks found that in LegalBench's tax cases, the scoring code was deleting the decimal point written into the answer. The paper is by Yanru Xiao of Amazon Web Services and Yifei Cai of Iowa State University, posted to arXiv on November 4, and it ships the audit evidence and the corrected code together under the name BAR.

> Rescoring the same responses with nothing but the scorer repaired lifted accepted answers for three models from 8–9 to 87–91 out of 96. The references did not move and neither did the model answers. The order is the more striking part. GPT6 Luna, out in front under the original scoring, lands last under the corrected scoring. Not every correction hands out points, though. In ConditionalQA, tightening a lenient aggregation pushed two models down, one of them by more than ten percentage points. The paper has one more part that runs outside the scoreboard. When a benchmark solves an intermediate step and hands the answer to the model, a wrong value drags the model's final decision with it: one model got 50 of 69 cases right when handed those values and all 69 when handed none.

> Sections 1 through 5 follow what the paper and the public repository record. Section 6, which moves to the problem of in-house evaluation systems, is this article's own reading and is not in the paper.

### Key Numbers

Source: Xiao & Cai, [Follow the Policy, Fail the Benchmark](https://arxiv.org/abs/2611.07042), arXiv:2611.07042 (2026) · [BAR repository](https://github.com/SugarRuy/BAR-Policy-Decision)

The four numbers below rest on four different denominators. The first two are out of the 96 LegalBench tax cases, the third out of the 300 RuleArena tax cases, the fourth out of ConditionalQA's 285. Even within one paper each task is measured on its own ruler, so these figures cannot be added together or compared directly.

<!-- stat-card -->
**8 → 91** — Accepted answers (of 96) — Haiku 5.5. Responses and references left as they were; only the scorer was repaired

<!-- stat-card -->
**1st → 3rd** — Where GPT6 Luna lands — The model that stood alone in front under the original scoring finishes last of three once it is fixed

<!-- stat-card -->
**27 / 300** — References changed — RuleArena Tax. A floor rule the tax form requires was missing from the reference calculation

<!-- stat-card -->
**58.0 → 47.2** — Accuracy going down (%) — Gemma 4 31B on ConditionalQA. Correcting the scoring can also take points away

## Deleting the Period Along With the Comma Inflates the Amount a Hundredfold

LegalBench is a public benchmark for legal reasoning, and its SARA numeric task presents a tax scenario and asks how much tax is owed. The answer is a single amount, and the task description asks only that the amount be stated first. Nothing anywhere tells the model to leave out the cents. Scoring is described as accepting any answer within 10% of the reference.

The trouble lies one step before that 10% comparison, in the stage that turns the answer into a number. As the authors record it after reading LegalBench's scoring function directly, the original parser deletes commas and periods and then reads the first run of digits as a non-negative integer. Deleting the comma is the normal business of stripping a thousands separator. Deleting the period on the same line is where the accident lives. The two cents digits stay glued to the dollars, and the amount the model wrote enters the comparison a hundred times too large.
