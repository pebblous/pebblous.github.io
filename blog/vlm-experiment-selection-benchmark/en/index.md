---
title: Vision Language Models Made the Same Choice After the Evidence Changed
subtitle: In 288 paired physics problems, the best model got both decisions right 5.9% of the time
date: 2026-09-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Vision Language Models Made the Same Choice After the Evidence Changed

_In 288 paired physics problems, the best model got both decisions right 5.9% of the time_

## Executive Summary

> [!callout]
> This article looks at a benchmark that measures one ability on its own: whether a vision language model can decide when to answer and what to measure next. The paper went up on arXiv on September 10. It uses a sliding block, a bouncing object, and a mass on a spring, holding the physics fixed while changing a single observation or a single question. One side of each pair can already be answered and the other needs one more measurement, so the reference action always differs inside a pair.

> Six open models barely tracked that difference. Under the short-answer prompt, 95.1% to 100% of the image-changed pairs came back with the same action, and no model got both decisions in a pair right more than 0.3% of the time. A short reasoning step does make the action change more often. Accuracy went up for three models and down for three, so the change cannot be read as improvement.

> Sections 1 through 4 follow what the paper measured and the cautions its authors attached. Section 5 moves to data pipeline design, and that move is this article's reading rather than a claim in the paper.

### Key figures

Source: Saha et al., [New Evidence, Same Choice: Testing Physical Experiment Selection in Vision Language Models](https://arxiv.org/abs/2609.11022), arXiv:2609.11022v1 (2026-09-10), results and appendix

<!-- stat-card -->
**95.1–100%** — Pairs that drew the same action after the image changed — Direct protocol, all six models. The reference action never repeats inside a pair

<!-- stat-card -->
**5.9%** — Best rate of getting both decisions in a pair right — Qwen2.5-VL 7B with a short reasoning step, and the 95% interval runs 3.1 to 9.0

<!-- stat-card -->
**83.5%** — Purchases that re-bought an already measured property — Qwen2.5-VL 3B over 278 purchases on unresolved questions. Idefics3 sits at 86.4%

<!-- stat-card -->
**34.6%** — Best answer accuracy when a useful test was supplied free — SmolVLM2 reached 15.3% in the same condition and the other four stayed under 1%

## Average accuracy hides a fixed habit

Physical reasoning benchmarks usually score the final answer alone. The decisions a model passed through on the way to that answer leave no trace in the score. The paper's example is simple. If half the questions can already be answered, a model that always stops and answers takes half the points without judging anything. Average accuracy writes that half down as skill.

The half that average accuracy books as skill shows up as numbers in the records of all six models. Pixtral 12B chose to stop on 97.6% of all its decisions, and its minimum cost choice accuracy is 48.8%, close to half. Qwen2.5-VL 32B is the highest of the six on the direct protocol at 49.5%. Read as single numbers those look like coin flips. Counted by pair, Pixtral has no fully correct pair at all and the 32B reaches 0.3%.
