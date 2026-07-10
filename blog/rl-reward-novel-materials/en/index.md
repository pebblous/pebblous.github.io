---
title: A Verifiable Reward Steers Generative AI Toward Unexplored Crystals
subtitle: Bolting a verifiable multi-objective reward onto a crystal-structure generator lifted its novel-materials success rate from 15.9% to 61.3%, past the previous state of the art
date: 2026-07-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Verifiable Reward Steers Generative AI Toward Unexplored Crystals

_Bolting a verifiable multi-objective reward onto a crystal-structure generator lifted its novel-materials success rate from 15.9% to 61.3%, past the previous state of the art_

## Executive Summary

> [!callout]
> Generative AI builds well only where its training data is thick, among compositions that are already plausible. The unexplored regions where new materials might hide are empty of data, so the model assigns them low probability and keeps steering around them. Hyunsoo Park and Aron Walsh of Imperial College London filled that gap not with more data but with a reward. This article looks at how they did it and what came of it.

> The core move was to attach to a crystal-structure generative model a verifiable reward that scores creativity, stability, and diversity at once. As a result, the share of structures that are simultaneously metastable, unique, and novel (mSUN) rose from 15.9% to 61.3%, overtaking even MatterGen (41.0%), the leader until then. One diversity metric dipped slightly, a trace of a design that balances several objectives rather than maximizing a single number.

> The question this study raises runs well beyond materials science. To make a model explore where good data simply does not exist, what fills the absence of data? This paper's answer is reward design — defining the goal as if it were data.

<!-- stat-card -->
**15.9→61.3%** — mSUN surge — Roughly 4× from the same base model, adding only the RL reward

<!-- stat-card -->
**41.0%** — Best prior mark passed — MatterGen, the leader until then, was overtaken

<!-- stat-card -->
**≈0%** — Collapse of prior guidance — Push the band gap with CFG and mSUN falls to near zero

<!-- stat-card -->
**97.5%** — Novelty — Up from 62.3% — aimed at structures absent from the data

## Why Generative Models Build Only Where Probability Is High

Generative AI such as diffusion models has learned to produce chemically plausible compositions and structures. But at bottom these models are optimized to reproduce whatever is high-probability in the training distribution. High probability means plenty of data nearby, and plenty of data nearby means many already-known or closely related compounds.

The trouble is that the places where new materials might live are exactly where the data is thin. No one has been there yet, so the training set is empty and the model assigns those regions low probability. Sampling by likelihood and the real goal of searching where no one has gone pull in opposite directions. The paper calls this mismatch an objective misalignment.

Force the model toward novelty and it hits a different wall. The harder you steer toward diversity, the more it pours out structures that are thermodynamically unstable or physically nonsensical. Prioritize stability alone and it circles the compositions it already knows. This is the dilemma in which novelty and stability trip each other up. The concept diagram below summarizes that terrain.
