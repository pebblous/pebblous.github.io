---
title: Does an AI Give the Same ICLR Paper the Same Score Twice?
subtitle: In 14,000 AI reviews of 200 ICLR papers, even the steadiest model returned an identical score ten times out of ten on only 56.5% of them.
date: 2026-10-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does an AI Give the Same ICLR Paper the Same Score Twice?

_In 14,000 AI reviews of 200 ICLR papers, even the steadiest model returned an identical score ten times out of ten on only 56.5% of them._

## Executive Summary

> [!callout]
> This article reads an experiment in which researchers at the University of Auckland in New Zealand ran close to 14,000 AI reviews on 200 papers from ICLR 2025 and ICLR 2026. The question behind it is a plain one. If the same paper is reviewed again under the same conditions, does the same score come back?

> Across ten repeats, the share of papers that drew an identical score every single time was 56.5% for the steadiest model, and the other two sat in the low thirties. The scores do not swing wildly. The spread across ten reviews stayed inside one point for between 91.5% and 100% of papers. The awkward part is not the size of the wobble. It shows up when a single review has to decide which of two papers is the better one.

> Sections 1 through 5 carry the design and the tables as the paper sets them down. Section 6, which pulls the result over to document screening and quality grading inside companies, is this article's own reading.

### Key numbers

Four cells. The first two are how far a repeated review moves. The second two are the price of trying to settle that movement.

Source: Zongrui Yang et al., ["Can We Believe AI Peer Review?"](https://arxiv.org/abs/2610.19339) (arXiv:2610.19339, 14 October 2026), Tables 1, 3, 4 and 7.

<!-- stat-card -->
**56.5%** — Identical score ten times out of ten — The record of GPT-6-Sol, steadiest of the three models. GPT-5.6-Sol managed 30.0% and GPT-6-Luna 32.5%

<!-- stat-card -->
**36.71%** — Ties after a single review — When two papers are reviewed once each to rank them, one pair in three ends tied and no order forms. Five reviews bring that down to 13.38%

<!-- stat-card -->
**+0.693 points** — The lift decimal scoring gave the mean — Measured on GPT-6-Luna. The standard deviation fell from 0.390 to 0.329, and the whole mean moved upward

<!-- stat-card -->
**0.822 points** — Two scores for one revision — Luna added 0.474 points to the same revised draft and Claude Haiku 5.5 took 0.348 points away

## Ten Reviews of the Same Paper

The papers come from ICLR 2025 and ICLR 2026, a hundred from each, 200 in all. They were not picked at random. The sample was stratified on the official subject area the conference assigns and on the band the human reviewers' average score fell into. The scale is the one ICLR uses, 1 to 10, where 1 is a strong reject and 10 a strong accept.

Three settings sat in the reviewer's seat. GPT-5.6-Sol ran at medium reasoning effort, GPT-6-Luna at low, and GPT-6-Sol also at low. Each setting reviewed each paper ten times, which comes to 6,000 reviews in this base experiment alone. Neither the prompt nor the paper changed. The only thing that changed was which run it was.

| Model | Mean score | Identical ten times | Spread within 1 point | Standard deviation | AUC for acceptance |
| --- | --- | --- | --- | --- | --- |
| GPT-5.6-Sol | 4.28 | 30.0% | 95.0% | 0.374 | 0.713 |
| GPT-6-Luna | 3.47 | 32.5% | 91.5% | 0.386 | 0.648 |
| GPT-6-Sol | 4.66 | 56.5% | 100.0% | 0.272 | 0.714 |

▲ Table 1 of the paper. The AUC column reads how well the ten-run average separates the papers that were accepted from the ones that were rejected.

Two things sit side by side in those columns. The share of papers that held one score for all ten runs tops out at 56.5% in the best setting, and the other two land at about three in ten. Yet the column right beside it, the spread, is packed inside a single point. No model called a paper an 8 one time and a 3 the next. It kept changing its mind between a 4 and a 5.
