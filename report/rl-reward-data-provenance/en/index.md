---
title: Nobody Can Trace, Atom by Atom, the Data That Reward-Verified RL Learns From
subtitle: Just as we began peering into pretraining data, ATLAS traced 1.45M RL-reward instances — and that very success is what exposed how shallow the data runs
date: 2026-07-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Nobody Can Trace, Atom by Atom, the Data That Reward-Verified RL Learns From

_Just as we began peering into pretraining data, ATLAS traced 1.45M RL-reward instances — and that very success is what exposed how shallow the data runs_

## Executive Summary

> [!callout]
> We have only just begun auditing the provenance of pretraining data. The Pile, C4, a run of copyright suits — for the past few years, the question "what did the AI learn from?" pointed squarely at document corpora. Meanwhile, the center of gravity that lifts frontier models' capability had already shifted to reinforcement learning with verifiable rewards (RLVR). The compute poured into reasoning training is growing far faster than pretraining, yet the data that actually shapes that training — verifiable tasks, answer-checkers, reward functions — is traced even more shallowly and in more fragments than any corpus. This piece is about how the frontier of the question has moved from corpus to reward signal, and how nearly empty that new frontier still is.

> A recent framework called ATLAS took direct aim at that gap. It traced 1.45 million RLVR instances back to roughly twenty atomic sources, attributing almost all of them. That apparent success reveals a paradox. Most RLVR datasets turned out to be variants of a handful of upstream sources; genuinely new data was rare; and contamination — evaluation benchmarks leaking into training data — showed up throughout. More telling is what even ATLAS could not reach. The provenance of the checkers themselves, the path by which synthetic tasks were generated, the judgment inside human filtering, the design of the reward function — none of these are "datasets," so they fall outside the lineage graph.

> The next battleground for data trust is not the document corpus but the provenance of verifiable tasks and reward signals. Regulation, auditing, and reproducibility all rest on this gap. While we chase pretraining lineage late, the real frontier is opening right now.

<!-- stat-card -->
**99.7%** — Atom-level attribution — 1.45M RLVR instances traced back to 20 atomic sources

<!-- stat-card -->
**70.4%** — Top-5 source concentration — Just 5 sources are over two-thirds — cn_k12 alone is 23.6%

<!-- stat-card -->
**80% vs 33%** — The licensing paradox — 80% of source content carries non-commercial terms; under 33% is labeled that way

<!-- stat-card -->
**~10×** — RL compute growth — 10× every few months — outpacing pretraining (~5×/year)

## The Frontier Moves: From Corpus to Reward Signal

For the past few years the question "what did the AI learn from?" pointed at a single target: the document corpus. How much copyrighted book text was mixed into the web scrape, which sources went into The Pile and C4 — lawsuits and data audits chased that question. The answers came slowly, and they are still incomplete.

In the meantime, the center of gravity for capability quietly moved. A model that built its foundational language ability through pretraining is now refined with **reinforcement learning from verifiable rewards (RLVR)** to push its reasoning higher. RLVR trains a model by rewarding it on tasks that can be scored automatically — is the math answer correct, does the code pass its tests? Unlike RLHF, which learns human preference, here an answer-checker (a verifier) decides the reward.

How fast this stage has grown shows up in the compute. By Epoch AI's accounting, the compute going into reasoning training is expanding roughly **10× every few months**. Set against frontier compute overall, which grows about 5× a year, that pace is overwhelming. The figure below shows the gap between the two growth curves.
