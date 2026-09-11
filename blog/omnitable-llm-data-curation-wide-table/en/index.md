---
title: Ant Group Cut Its LLM Data Curation Cycle From 14 Days to 2.5
subtitle: A VLDB 2026 best industry paper folds 35 petabytes into one wide table and records lineage automatically
date: 2026-09-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Ant Group Cut Its LLM Data Curation Cycle From 14 Days to 2.5

_A VLDB 2026 best industry paper folds 35 petabytes into one wide table and records lineage automatically_

## Executive Summary

> [!callout]
> The work of building LLM training data usually grows one pipeline at a time. A source arrives and a few tables appear with it; one more feature gets computed and a task attaches to every one of those tables. A paper Ant Group posted to arXiv on September 10 calls that end state a pipeline maze. The paper records how the company replaced the maze in its own production with one logical table per domain, and it was named VLDB 2026 Best Industry Paper.

> The figure that stands out is the human-in-the-loop curation cycle, which fell from about 14 days to about 2.5. That compares one scenario end to end, preparing data for supervised fine-tuning, and it does not mean 35 petabytes get processed in 2.5 days. Most of the saving came from the stage that backfills features. There, 9.5 days became 1.7.

> Sections 1 through 4 follow what the paper measured and the limits its authors state. Section 5 moves to a yardstick for organizational data readiness, and that move is this article's reading rather than the paper's.

### Key figures

Source: Fu et al., [OmniTable: A Unified Wide-Table System for Petabyte-Scale LLM Data Curation and Exploration](https://arxiv.org/abs/2609.11148), arXiv:2609.11148 (September 10, 2026), sections 5 and 6

<!-- stat-card -->
**14 days → 2.5** — Human-in-the-loop curation cycle — An end-to-end comparison on one supervised fine-tuning scenario, a 5.6x gain

<!-- stat-card -->
**106** — Tables dragged onto a canvas for one feature — A number the introduction gives as something that happened inside the company

<!-- stat-card -->
**45 → 12** — Manual operation steps — Pipelines and scripts went from 24 to 10

<!-- stat-card -->
**30 to 40%** — Engineering hours spent finding the cause of failures — 3 to 5% more execution spend on record-level isolation removed this category

## One of the Three Bottlenecks Is a Different Kind of Problem

The introduction lists three pain points where industrial LLM data preparation collapses into a maze. The first is data silos. Corpora from dozens of sources sit scattered across hundreds of physical tables, so finding what lives where across datasets is already hard. The second is costly feature engineering. Adding a single feature means coordinating tasks by hand across every dataset it touches, and the authors attach an in-house case to that point, quotation marks and all. For one feature, an engineer had to "drag and drop 106 tables onto the task canvas."

The third is broken lineage. UDF logic is spread across codebases with no centralized version control, so the same feature ends up defined differently in different places. Lineage and feature definitions are not systematically captured, so teams cannot reliably trace how each data and feature iteration affected the training runs and the model quality that followed. The paper carries this item into its design requirements, writing that stale lineage brings definition drift and irreproducible results.

The first two are problems that scale created. They appeared because sources multiplied and data grew, so a faster engine and a bigger cluster pay some of the debt back. The third does not work that way. Double the cluster and there is still nothing written down anywhere about which filter trimmed which corpus by how much. Two problems of scale sit beside one problem of quality, and the one this article follows is the third.
