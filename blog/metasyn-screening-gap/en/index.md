---
title: AI Found 91% of the Papers — and Picked Only Half
subtitle: What the MetaSyn benchmark reveals about the 38-point gap between retrieval and screening
date: 2026-06-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Found 91% of the Papers — and Picked Only Half

_What the MetaSyn benchmark reveals about the 38-point gap between retrieval and screening_

## Executive Summary

> [!callout]
> A meta-analysis gathers hundreds of scattered studies and compresses them into a single conclusion. The first step is sifting through an enormous pile of literature to find the papers that fit the question, and for a long time that work needed human hands. A benchmark released in June 2026 tested whether AI can take over that step, using 442 expert meta-analyses as the answer key. This article reads the results through the lens of data quality.

> The headline first: AI pulled 90.9% of the correct papers out of a pool of 140,000. Search is all but solved. Yet of the papers that actually belonged in the meta-analysis, it selected only 52.7%. The failure was not in finding them. It was in filtering out the "plausible" papers — the ones close in topic but off on the criteria.

> So AI's bottleneck turns out to be selection, not search. The hard part is judging which data fits the criteria, a problem of labeling and standards. Put another way: where search ends, data quality begins.

### Key Figures

Source: [Xie et al., MetaSyn benchmark, arXiv:2606.17041 (2026)](https://arxiv.org/abs/2606.17041)

The four numbers below trace the same pipeline from its entrance to its exit. Between the ceiling search reaches (90.9%) and the floor screening actually recovers (52.7%) sits a 38-point gap, and the cause of that gap is compressed into the ratio of traps buried in a single query (16 to 184).

<!-- stat-card -->
**90.9%** — Search recall — Share of correct papers the fine-tuned MA-Retriever pulled into its top 200

<!-- stat-card -->
**52.7%** — Screening recall — Best system's rate of selecting the truly included papers from the retrieved pool

<!-- stat-card -->
**38pp** — Search-to-screening gap — Distance between the ceiling search reaches and what screening actually recovers

<!-- stat-card -->
**16 vs 184** — Traps per query — ~16 papers to include, sitting beside ~184 look-alikes that miss only on the criteria

## What MetaSyn Tested

Built by researchers at Tsinghua University, MetaSyn is a benchmark that measures how far an LLM agent can take over the work of a meta-analysis. Its raw material is 442 expert-curated meta-analyses published in Nature Portfolio journals. Each one's set of included papers becomes the answer key, and the test asks whether AI can find and pick those same papers again.

The corpus to search is a body of 140,585 PubMed papers. Only 8,674 of them actually belong; the remaining 131,911 are "hard negatives" — papers that look alike in topic but miss on the criteria, the tricky traps. The problem AI has to solve is to pull only the real matches out of that vast pile.

What sets MetaSyn apart is that it measures the pipeline stage by stage. Because retrieval and screening are scored separately, the bottleneck that a single overall score would have hidden becomes visible. Nine RAG variants plus one protocol agent — twelve configurations in all — were compared on the same yardstick.
