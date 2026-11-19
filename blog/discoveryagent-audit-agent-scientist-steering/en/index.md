---
title: DiscoveryAgent Lets One AI Check Another AI
subtitle: Stanford researchers released it on November 16, and scientists who used its audit agent recovered 14 times more planted errors than those reviewing alone
date: 2026-11-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# DiscoveryAgent Lets One AI Check Another AI

_Stanford researchers released it on November 16, and scientists who used its audit agent recovered 14 times more planted errors than those reviewing alone_

## Executive Summary

> [!callout]
> A second AI that does nothing but check the first one's work raised the number of errors a scientist caught 14-fold. The result comes from DiscoveryAgent, a paper that researchers at Stanford, with co-authors at UC Berkeley, UCSF, and SLAC, posted to arXiv on November 16. The paper calls the checker an audit agent.

> It is easy to read that figure as humans against AI, but both sides of the comparison were human. Working from the same research record, the scientists who had the audit agent recovered that many more of the deliberately planted errors than the scientists handed only the code and the report. Each group had four people, and the review lasted one hour. The sample is small, which is why this article reads the conditions alongside the size of the number.

> Sections 1 through 4 report what the paper says. Section 5 is the reading this article draws from it.

### Key Numbers

Four numbers take the measure of this paper: the gap the audit opened up, the accuracy of the audit agent itself, the model scores that came out of a steered hypothesis, and the size of the experiment those numbers came from.

Source: [DiscoveryAgent: A Framework for Scientist-centric Agentic AI](https://arxiv.org/abs/2611.21950) (arXiv:2611.21950, 2026-11-16).

<!-- stat-card -->
**14x** — Extra errors a scientist recovered with the audit agent — 3.50 per person against 0.25

<!-- stat-card -->
**0.965** — F1 of the audit agent at picking out corrupted claims — 50 claims were extracted and 25 of them deliberately altered

<!-- stat-card -->
**105** — Baselines the protein variant-effect predictor beat — The steered version lost to only one of 106 ProteinGym baselines

<!-- stat-card -->
**4** — People in each cohort behind the 14x — Four per group, with one hour of review

## The Scientist Swaps the Hypothesis Between Rounds

DiscoveryAgent differs from other AI scientist systems less in how much autonomy it has than in where a scientist can step in. The research runs in rounds, and between one round and the next the scientist picks the hypothesis to test next, refines it, or replaces it outright. The design is meant to work across fields, and scientist-centric is the term in the paper's own title.

Structurally there are two loops. The outer loop scopes the work into hypothesis branches; inside a branch, a director agent tests a single hypothesis on its own, calling on sub-agents for literature search, data analysis, and review. The scientist works on the outer loop. Whatever runs inside stays untouched, and the decision left to the scientist is which branch comes next.

Checkpoints hold this design up. Every step is recorded: which data the agent handled, how it handled them, and what it used as grounds for moving on. Because the record survives, a single claim can be picked up later and traced back to where it came from, and the same analysis can be run again. Rather than trading autonomy away for supervision, the design keeps the autonomy and makes the run possible to retrace.
