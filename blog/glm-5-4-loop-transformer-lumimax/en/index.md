---
title: GLM-5.4 and LumiMax Scorecards Rest on Their Own Tests
subtitle: Zhipu tested GLM-5.4 on a smaller model; LumiMax graded its own 92.84%
date: 2026-11-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# GLM-5.4 and LumiMax Scorecards Rest on Their Own Tests

_Zhipu tested GLM-5.4 on a smaller model; LumiMax graded its own 92.84%_

## Executive Summary

> [!callout]
> China's Zhipu AI (智谱) has released GLM-5.4, a loop transformer that sends tokens through 28 layers of a GLM-5-based model twice with the same weights, adding computational depth without adding parameters. Haima Cloud (海马云) has launched LumiMax, a knowledge base that compiles company documents into a network of sourced facts for agents to query, and says it took first place on eight public benchmarks. GLM-5.4 targets reasoning inside the model; LumiMax targets the memory kept outside it.

> Both scorecards come with conditions. Zhipu has published no benchmark table for the 750B flagship, only an ablation that adds and removes the loop on a 30B model of the same design. Its claim of "intelligence levels comparable to 2T-3T parameter models" carries no numbers. Counting LumiMax's published per-question result files, its 92.84% on FRAMES is 765 correct answers out of 824 under what the company calls its "official" grading; 466 answers (56.6%) match the reference answer exactly.

> Sections 1 to 4 report what we confirmed in the two companies' announcements, their public files and the original benchmark papers. Section 5 is Pebblous's interpretation: because agents multiply errors across steps, a compiled knowledge network needs the same diagnosis as training data.

### Key Figures

The first two cards show how far GLM-5.4's evidence goes. The third shows how much LumiMax's score depends on the grading standard, and the fourth shows how quickly step errors compound in an agent.

Sources: [Z.ai GLM-5.4 blog](https://z.ai/blog/glm-5.4), [LumiMax FRAMES per-question results](https://www.lumimax.ai/benchmark/frames). The fourth card is a Pebblous calculation.

<!-- stat-card -->
**19.17 → 30.42** — AIME25 score in GLM-5.4's 30B ablation — Same parameter count, about 10% more training compute

<!-- stat-card -->
**0** — Published benchmark tables for the 750B flagship — Weights and API are still closed, so no one outside can reproduce it

<!-- stat-card -->
**765 / 466** — LumiMax correct answers on 824 FRAMES questions — Company "official" grading vs. exact match

<!-- stat-card -->
**~36%** — Chance of clearing 20 steps at 95% per-step accuracy — 0.95 to the 20th power, assuming independent steps

## Zhipu's GLM-5.4 Is a Loop Transformer That Runs 28 GLM-5 Layers Twice

Z.ai, Zhipu's international brand, introduced GLM-5.4 on its official blog on November 23 as "our first flagship model built on the Loop Transformer architecture." In an ordinary transformer, the input passes through each layer once. A loop transformer runs a block of weight-sharing layers several times, refining in each pass the internal representation built by the previous one. GLM-5.4 sends tokens through 28 layers of a GLM-5-based model twice. The stored weights do not change, so the parameter count stays the same, while the computation each token goes through gets deeper.

Z.ai acknowledged in the post that the idea is not new. The Universal Transformer proposed weight-shared depth in 2018, and later studies showed gains at small scale. But models trained as loops from scratch fell behind ordinary models given the same pretraining compute, Z.ai says. So Zhipu took a base model that had already finished pretraining and converted it to the loop design through continued training.

The design is summarized below. Z.ai shows where the 28 layers sit within the full stack only in a figure and does not give layer numbers.
