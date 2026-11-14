---
title: SELECTBENCH: AI-Designed Drug Candidates Bind the Wrong Proteins Too
subtitle: Nine molecule-generating models met a panel of 85 proteins linked to side effects, and the models trained to avoid stray binding scored about the same as ordinary ones
date: 2026-10-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# SELECTBENCH: AI-Designed Drug Candidates Bind the Wrong Proteins Too

_Nine molecule-generating models met a panel of 85 proteins linked to side effects, and the models trained to avoid stray binding scored about the same as ordinary ones_

## Executive Summary

> [!callout]
> This article is about whether the AI models that sketch new drug candidates manage to avoid sticking to the wrong proteins. SELECTBENCH, released on October 16 by researchers at the University of Toronto and the Université de Montréal, pulls that one question out on its own and lines up nine models against it. The property of binding to the intended protein while leaving the others alone is called selectivity, and until now the scorecards have asked only how tightly a molecule binds to the one target it was aimed at.

> Of the three tasks the researchers built, the one closest to actual practice is a safety panel that lays out 85 protein structures linked to adverse drug reactions and asks whether the molecule stays off them. The findings are sober. The two models trained specifically for selectivity scored about the same as ordinary ones, and the techniques that nudge a molecule toward selectivity while it is being generated added only a little.

> Sections 1 through 4 follow what the paper and its published evaluation setup state. Section 5, which asks why an ability nobody scored never shows up in a model, is this article's own reading.

### Key Figures

The first two describe the size of the board this benchmark lays out; the last two are the scores that came off it.

Source: [On the Selectivity of Generative Models in Structure-Based Drug Design](https://arxiv.org/abs/2610.24124) (arXiv:2610.24124, October 16, 2026)

<!-- stat-card -->
**85** — Off-target structures in the safety panel — Structures covering 77 targets that pharmaceutical teams screen against for adverse reactions, including a 22-structure high-risk subset

<!-- stat-card -->
**9,900** — Target pairs in the large-scale set — On-target and off-target pairs generated automatically from the public docking dataset CrossDocked2020

<!-- stat-card -->
**28** — Of those, the pairs graded hard — The places where the structures look alike enough that telling them apart really matters, and the one band evaluated in full

<!-- stat-card -->
**Under 50%** — Molecules clearing the strict bar — Even with generation-time guidance applied, molecules beating the off-target by a full standard deviation rarely formed a majority

## Binding Tightly and Being Safe Are Two Different Things

Structure-based drug design means looking into the pocket of a protein that drives a disease and sketching a small molecule that fits it. It is closer to studying the keyhole first and then cutting the key. These days a generative model does the cutting. Feed it the three-dimensional shape of a protein pocket and it draws, atom by atom, a molecule that might sit in there.

The trouble is that the key opens other doors too. A human body holds tens of thousands of proteins, and some of them have pockets shaped much like the one being aimed at. If the key that was cut also slides into those lookalike pockets, the drug does what it was asked to do and then some. A good share of what we call side effects starts there.
