---
title: An AI Detector Screened 2.6 Million Cancer Papers and Flagged 260,000 Fakes
subtitle: How a BERT-based classifier scanned 2.64 million cancer studies for paper-mill fingerprints — and where its recall falls short
date: 2026-07-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI Detector Screened 2.6 Million Cancer Papers and Flagged 260,000 Fakes

_How a BERT-based classifier scanned 2.64 million cancer studies for paper-mill fingerprints — and where its recall falls short_

## Executive Summary

> [!callout]
> A 2026 study published in the _BMJ_ ran a single pass over 2.64 million cancer research papers published between 1999 and 2024. The tool, built by Adrian Barnett's team at Queensland University of Technology in Australia, is a BERT-based classifier that reads only a paper's title and abstract to judge whether it is fabricated. The result was sobering: 260,000 papers, 9.87% of the total, matched the fingerprint of a so-called paper mill. But what the detector found raises a question just as pressing: what does it structurally fail to find?

> Stop there and you have only half the story. The detector's accuracy was reported at 91%, but that 91% is **accuracy against yesterday's style of fraud**. The fabricated papers it trained on followed formulaic templates, and the detector learned the fingerprint of that prose. Now that generative AI can churn out fake papers on demand, the template itself is dissolving. Passing the detector does not mean a paper is clean.

> Why this matters to data practitioners comes down to one thing. This contaminated corpus is the very source of knowledge that AI trains on, that RAG systems retrieve from, and that physicians cite. If even the tool built to measure the contamination misses a sizeable share, with what confidence are we swallowing this corpus whole?

<!-- stat-card -->
**9.87%** — Flagged as paper mill — 261,245 of 2.64M papers — roughly one in ten

<!-- stat-card -->
**91%** — Detector accuracy — On the validation set — but accuracy against yesterday's fake templates

<!-- stat-card -->
**2×** — Citations of flagged papers — Versus clean papers — contamination that amplifies itself

<!-- stat-card -->
**19/20** — Journals with flags — Of the top 20 journals examined — only one was the exception

## 260K in a Corpus of 2.6M

Start with the scale. The team scanned 2,647,471 cancer research papers published between 1999 and 2024, and flagged 261,245 of them as suspected paper-mill products. That is 9.87%, roughly one in ten. This is not the careless slip of an individual researcher; it is the trace left by an **industrialized fraud business** that buys and sells authorship slots like commodities.

More striking is the trajectory over time. In the early 2000s the suspected-contamination rate hovered around 1%, but it climbed steadily to about 16% by 2022. Some fields are worse. In liver, stomach, and bone cancer research, the suspected rate reaches 20–22%.
