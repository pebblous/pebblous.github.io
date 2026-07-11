---
title: When the Labels Vanished, What Was Left Was Choosing People
subtitle: The expert data market is splitting in two, and even the judgment of picking who fills that role now belongs to AI
date: 2026-07-12
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When the Labels Vanished, What Was Left Was Choosing People

_The expert data market is splitting in two, and even the judgment of picking who fills that role now belongs to AI_

## Executive Summary

> [!callout]
> The data labeling market is splitting in two directions at once in 2026. At the bottom, "easy labels" (bounding boxes, simple classification, basic RLHF) are being swallowed by AI pre-labeling and collapsing into a commodity layer. At the top, only PhD-level domain experts earning $50–200 an hour remain, forming a premium layer. The first quantitative proof of this polarization is that the semi-supervised, human-in-the-loop (HITL) segment, the work that requires a human, is growing more than ten percentage points faster than the market as a whole. The structure of that restructuring, and the new gap opening inside it, is best read through one lens: data quality.

> The more decisive shift is that even the judgment of finding and vetting those scarce experts is now being delegated to AI. Mercor screens candidates with a 20-minute AI video interview, Micro1 lets an AI agent pass only the top 1%, and Handshake AI sources experts at a near-zero cost from a verified credential-identity graph built over twelve years. The axis of competition has moved from "how many labels can you attach" to "how fast can you find the right person" — and the proof is that the revenue of these three vendors doubles every few months.

> If the filter that picks people is an AI, then the filter's biases and errors are imprinted on the labeler pool, seep into the labels, harden into the training data, and propagate into the model's internal representations. Who, this time, verifies the experts who verify the labels? With the wages of top-tier experts and bottom-tier Global South moderators coexisting inside a single market, the question narrows to one: who, in the end, is the final guarantor of data quality?

<!-- stat-card -->
**$2.32B→$6.53B** — Labeling market size — 2026→2031, CAGR 22.95% · Mordor

<!-- stat-card -->
**33.15%** — HITL segment CAGR — +10.2pp above the market · Mordor

<!-- stat-card -->
**$50–200** — Frontier expert hourly rate — Cross-checked: Surge · Mercor · Handshake

<!-- stat-card -->
**25–150×** — Top-vs-bottom wage gap — Expert vs. moderator $1.32–2

## What Mechanical Turk Left Behind

Yesterday we covered [the retirement of Mechanical Turk](/blog/mechanical-turk-sunset-data-provenance/en/) — Amazon's decision to stop accepting new customers for its 20-year-old crowdsourced labeling platform starting July 30, 2026. That piece concluded that "AI had already been quietly replacing the bottom-tier labelers." This report begins with the next question: what moved into the space the easy labels left behind?

The answer is not an empty seat but a re-stratification. Simple classification and bounding boxes were swallowed by AI pre-labeling. Industry vendors now handle roughly 80% of all labeling automatically, and humans remain only on the hard-judgment 20% at the boundary (HeroHunt). The labeling labor market splits into an upper and a lower tier as a result. Below is a repetitive-task layer at $1–12 an hour; above is a domain-expert layer at $50–200 an hour. The middle ground between them is thinning fast.
