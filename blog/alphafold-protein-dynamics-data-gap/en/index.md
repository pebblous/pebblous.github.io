---
title: AlphaFold Still Doesn
subtitle: AlphaFold only ever learned proteins standing still — the dynamics data gap that builds AI
date: 2026-06-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AlphaFold Still Doesn

_AlphaFold only ever learned proteins standing still — the dynamics data gap that builds AI_

## Executive Summary

> [!callout]
> The 2024 Nobel Prize in Chemistry went to AlphaFold, for solving a half-century-old problem: predicting the three-dimensional shape a protein folds into from its amino acid sequence alone. Yet this achievement has a boundary that rarely gets mentioned. What AlphaFold draws is a protein's single most stable pose, in effect a still photo. This article looks at the distance between that still photo and the real protein.

> A living protein never stops moving. It changes shape to relay signals, to recognize partners, to receive a drug. Its function comes from that motion. In June 2026, a roadmap paper co-written by 43 researchers confronted exactly this point: what deep learning solved is static structure prediction, while a quantitative understanding of how proteins move remains unsolved.

> Why doesn't AlphaFold know motion? Not because the algorithm falls short. It's because the only thing we measured and turned into data was the still frame. The format of the data sets the limit on what patterns a model can learn. Pebblous has long argued that the data, not the model, builds the ceiling. Here that argument repeats, in the same shape, in the life sciences.

### Key Figures

Source: [arXiv:2606.08647](https://arxiv.org/abs/2606.08647), AlphaFold Protein Structure Database

AlphaFold's predictions sweep wide enough to cover nearly every known protein. Yet the experimental data the model actually learned from is more than a thousand times smaller, and all of it was captured in a single format: the still photo. That gap between scale and format, and the two blind spots a still-photo-only dataset leaves behind, are what the four numbers below carry.

<!-- stat-card -->
**214 million** — AlphaFold predictions — Predicted structures released in the database, covering nearly every known protein

<!-- stat-card -->
**~180,000** — PDB experimental structures — The experimental data AlphaFold trained on — mostly crystallized or frozen, static structures

<!-- stat-card -->
**~1/3** — Low-confidence residues — Share of amino acids lacking atomic-level precision — mostly flexible or disordered regions

<!-- stat-card -->
**1.1%** — Small-protein coverage — Share of EMDB structures under 50 kDa — exposing the gap in dynamics data

## What AlphaFold Solved, and What It Left

Protein folding was one of biology's oldest riddles. A protein is built from a chain of amino acids strung in a line, and only when that chain folds itself into a particular three-dimensional shape does it begin to work. Could you compute that shape from the sequence alone? AlphaFold effectively answered the question that had stayed unsolved for 50 years, and because the accuracy of its answer rivaled experiment, the work led to a Nobel Prize.

What AlphaFold returns is the most stable form a protein takes — the single, lowest-energy structure. In photographic terms, the one best shot. For a drug researcher quickly checking the shape of a target protein, or gauging where an enzyme's active site sits, that one shot is plenty powerful. That's why more than two million researchers across 190 countries use the tool routinely.

What's left out is every moment that one shot can't hold. How the protein arrived at that shape, which region bends and how as it does its job, how its form shifts when it meets another molecule. None of this realm of motion lives anywhere in AlphaFold's output. We've obtained the protein's portrait, but what the protein does while it's alive still has to be worked out separately.
