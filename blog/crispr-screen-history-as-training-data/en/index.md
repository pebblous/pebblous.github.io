---
title: An AI Tested 5% of the CRISPR Library and Found 27.7% of the Hits
subtitle: Genentech researchers trained an acquisition policy on the records of 1,389 completed screens to choose what to perturb next
date: 2026-09-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI Tested 5% of the CRISPR Library and Found 27.7% of the Hits

_Genentech researchers trained an acquisition policy on the records of 1,389 completed screens to choose what to perturb next_

## Executive Summary

> [!callout]
> Knocking out every gene one by one is not an option, so a CRISPR screen has always been a question of what to assay first inside a fixed budget. A paper Genentech researchers posted to arXiv on September 10 declines to leave that order to a scientist's intuition or to the feedback gathered inside the screen in progress. It trains a policy on the records of 1,389 completed screens to choose what to perturb in the next round.

> On 20 screens held out by date, the policy picked 1,000 genes across ten rounds and recovered 27.7% of the hits in those screens. Those 1,000 genes are about 5% of a library holding 18,000 to 22,000 genes. That is 5.67 times what random selection finds, and a little over twice what the established methods reach when they adapt only within the screen at hand and never touch past screens. One further result deserves attention. Initializing the gene representations from textbook biology performed worse than initializing them at random, and initializing them from the hit matrix of past screens performed best of all.

> Sections 1 through 4 follow what the paper measured and what it withheld. Section 5 moves to the cost of an experiment and to the experimental records an organization keeps, and that reading is ours rather than the paper's.

### Key Figures

Source: Edwards et al., [Biology-in-the-loop: Amortized Adaptive Hit Discovery in CRISPR Screens](https://arxiv.org/abs/2609.11877), arXiv:2609.11877 (2026), Table 1 and Appendix B

<!-- stat-card -->
**27.7%** — of hits recovered from 5% of the library — On the same budget random selection found 4.9%, and the best method that ignores past screens found 14.5%

<!-- stat-card -->
**5.67×** — enrichment factor over random selection — Average across 20 screens published after 2021, measured after ten rounds of 100 genes each

<!-- stat-card -->
**2.60 vs 4.83** — what the gene representations started from — The first from embeddings built out of gene description text, the second from a factorization of the hit matrix of past screens

<!-- stat-card -->
**30.1%** — of recovered hits are common essential genes — The baseline that chases hits which recurred often in the past sat at 99.1% on this measure

## The Denominators Behind the 5% and the 27.7%

A screen in this paper is defined by three things: a natural-language description of the experimental setup, the list of genes measured in that experiment, and a binary label on each of those genes. A gene is a hit or it is not. The policy picks 100 genes out of that library and hands them over, gets the labels for those 100 back, and chooses the next 100 in light of what came back. Ten of those round trips exhaust the budget. The genes picked add up to 1,000.
