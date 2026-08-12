---
title: Geography, Not Openness, Decided Which AI Models Science Runs On
subtitle: In an arXiv study that screened 21 million papers, researchers at Chinese institutions had 2.23 times the odds of running an open-weight model
date: 2026-08-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Geography, Not Openness, Decided Which AI Models Science Runs On

_In an arXiv study that screened 21 million papers, researchers at Chinese institutions had 2.23 times the odds of running an open-weight model_

## Executive Summary

> [!callout]
> For years now, the advice to scientists has been the same: if you want reproducible work, use a model whose weights you can download rather than an API you cannot inspect. In August 2026 a preprint appeared on arXiv that counted, paper by paper, what that advice actually produced. Open-weight use did rise. But what rose was not the category "open weights." It was one model ecosystem.

> The study screened 21 million papers and kept the roughly 157,000 in which a language model was genuinely used as an instrument. Papers that merely thanked a chatbot for polishing the prose were filtered out, and papers that used exactly one model family were isolated so that a researcher's choice could be read cleanly. Authors at Chinese institutions were more than twice as likely to choose open weights, and that tilt showed up only for Chinese-built models. The same papers reached for non-Chinese open weights less often than everyone else. If openness itself were the reason, that result could not happen.

> So this report treats model choice as a question of record-keeping rather than taste. Being able to download a set of weights and being able to reproduce the same result three years later are not the same thing. What an organization needs to leave behind, once a model enters a research or validation pipeline, is not the sentence "we used open weights" but a record of which weights, at which revision, in which runtime.

**Editor's note.** This piece follows [Doing Science with a Tool You Cannot Reproduce](/blog/closed-model-science-reproducibility/en/). Where that piece dealt with models being closed, this one deals with what happens when they are open and the choice still splits along national lines. It runs on a different axis from [America's Strongest Open-Weight Model — So Why Does It Trail China?](/report/nemotron-3-ultra-open-weight-2026-06/en/), written around the same time: that report watched the race to **build** models, while this one measures the distribution of who **uses** them. Both belong to the [Sovereign AI](/project/SovereignAI/en/) series.

### The four numbers this report rests on

The first three give the current share of open-weight use and the size of the tilt behind it; the last one shows that the tilt is not about openness. The values look similar to one another, but each rests on a different denominator and a different condition, so the sections below walk through them one at a time.

Source: [Dunivin, Z. O. (2026), _Who Uses Open-Weight Models? China and the Shifting Geography of AI in Science_](https://arxiv.org/abs/2608.11090), arXiv:2608.11090v1. All 2026 figures cover January through June only.

<!-- stat-card -->
**44.0%** — Open-weight share — Of 16,125 single-family papers, H1 2026

<!-- stat-card -->
**2.23x** — Odds ratio, Chinese institutions — After adjusting for 83 subfields and timing

<!-- stat-card -->
**+27.9pp** — Gap in choosing Chinese models — Adjusted probability 37.1% vs 9.2%

<!-- stat-card -->
**−3.5pp** — Non-Chinese open weights chosen less — 15.0% vs 18.5% — the openness story fails here

## What Got Filtered Out of 21 Million Papers

This study needs stating precisely. [_Who Uses Open-Weight Models? China and the Shifting Geography of AI in Science_](https://arxiv.org/abs/2608.11090), posted to arXiv on 11 August 2026, is a v1 preprint written solely by **Zackary Okun Dunivin** of the Institute for Social Sciences at the University of Stuttgart. It has not been peer reviewed. What it does have is a [reproduction repository](https://github.com/zackarydunivin/who-uses-open-weights) with code, seeds, frozen classification decisions and checksums. Every number in this report was verified against that v1 text and its appendix.

Most summaries of the paper open with the phrase "an analysis of 21 million papers." Open the sample-construction table in the appendix, though, and 21 million turns out to be not the analytic sample but **the size of the corpus that was screened**. The difference matters. It inflates the scale by a factor of more than 130, and more importantly it points at the wrong contribution: what this study is good at is not how much it looked at but **what it threw away**.

### 1.1. The funnel from 21 million to 157,000

The starting point is S2ORC, the Semantic Scholar full-text corpus. After cleaning up duplicate records left by a schema migration, 21,338,177 unique papers remain. Five filtering stages then fix the analytic sample. Watching how much falls away at each stage shows where the work went.
