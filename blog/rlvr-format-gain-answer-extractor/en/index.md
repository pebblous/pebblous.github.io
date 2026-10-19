---
title: RLVR Moves the Answer Into a Box, and the Grading Program Calls It Progress
subtitle: A Monash University study re-read the answers of four released 7B model pairs with a different program, and the average gain fell from 22.5 points to 4.0.
date: 2026-10-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# RLVR Moves the Answer Into a Box, and the Grading Program Calls It Progress

_A Monash University study re-read the answers of four released 7B model pairs with a different program, and the average gain fell from 22.5 points to 4.0._

## Executive Summary

> [!callout]
> Reinforcement learning with verifiable rewards (RLVR) trains a model on problems whose answers a program can check. The training is mostly mathematics and code, and yet the finished model also scores higher on multiple-choice tests from a completely different domain. Reports of that have piled up, and they have been taken as evidence that what the model learned transfers. Those scores are assigned by a small program that finds the answer in the text the model wrote. This article follows "Same Answer, New Box," posted to arXiv on October 2 by Zongye Lyu of Monash University in Australia, and asks how much of the gain comes from where the answer was written.

> Across four released 7B SimpleRL base and RL pairs, the extractors copied from public code report an average out-of-domain multiple-choice gain of 22.5 points per comparison. Score the same outputs again with a single rule that also reads an answer stated in the text and 4.0 points remain. The 82% that disappears is not a gain from answering more questions correctly. It is a gain from the answer moving to the place the extractor looks first. That share only holds steady on out-of-domain multiple choice, though. Elsewhere in the study, changing which comparisons go into the pool moves the same figure by more than 50 points, and the paper holds back from quoting one there.

> Everything through Section 4 follows what the paper records. Section 5, which reads the result through the lens of an in-house model evaluation, is this article's own interpretation.

### Key Numbers

Source: Zongye Lyu, [Same Answer, New Box](https://arxiv.org/abs/2610.20639) (arXiv:2610.20639, October 2, 2026).

<!-- stat-card -->
**82%** — Of the reported gain, the part produced by where the answer sits — 82.2% pooled over 46 comparisons, with a 95% interval of 77.4 to 87.2%

<!-- stat-card -->
**22.5 → 4.0 pts** — What is left of the gain when only the extractor changes — The weights are untouched and the stored outputs are simply scored twice

<!-- stat-card -->
**26.6 → 58.3%** — Answers written in the box on out-of-domain multiple choice, base and RL — Nearly all the rest are stated in the text, where a box-only extractor misses them

<!-- stat-card -->
**2.1%** — The same share on the 32B DAPO pair, and no more — Over 9 comparisons, with a wide interval running from −18.5 to 19.9%

## The Same Answer, and Only One Model Is Marked Wrong

The paper opens on a single ARC-Challenge item. Anna ran 100 meters in 20 seconds, so what was her average speed, with 2 m/s, 5 m/s, 20 m/s and 25 m/s on offer and B) 5 m/s as the key. The base model Qwen2.5-7B ends its output with "The correct answer is B) 5 m/s." The output of the model that SimpleRL-Zoo trained from it by reinforcement learning ends with "Anna's average speed is \boxed{B}." The two answers are the same and both are correct.

The difference is on the scoring side. An extractor that reads only inside the answer box \boxed{} finds no box in the base model's output, abstains, and the item goes down as wrong. It reads the box the RL model filled and counts it as correct. Only one of the two scores.

What that difference comes to over a stack of items is shown by scoring twice. Over the 500 ARC-Challenge items, the box-only extractor reports that reinforcement learning raised accuracy by 30.6 points. Score the same outputs with a fixed extractor that takes a stated answer whether it sits in the box or in the text and the figure is 9.8 points. The 20.8-point difference is what the author calls the format gain, and on this set of items it is 68% of the reported gain.
