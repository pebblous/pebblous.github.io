---
title: The Single-Cell Foundation Model That Reads Cells as Images
subtitle: Stanford
date: 2026-07-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Single-Cell Foundation Model That Reads Cells as Images

_Stanford_

## Executive Summary

> [!callout]
> Since 2023, single-cell AI has converged on almost a single recipe: treat a cell as a sentence of gene tokens and train a transformer on it as if it were a language model. Geneformer and scGPT paved that road. Then in July 2026, a Stanford team posted scVision to arXiv, folding up that sentence and rendering each cell as a single image instead. It assigns every gene a fixed coordinate on a 104×104 grid, paints expression levels as pixel brightness, and trains a vision transformer on 72 million human cells.

> The most striking result came not from training on more data but from changing only the representation. With its encoder frozen and no fine-tuning, scVision ranked first in cell-type classification across all six unseen tissue atlases. Given just a single label, it matched the performance competing models reached with fifty. That said, cell-type annotation is a relatively easy task, so whether this representation also helps on harder downstream problems such as perturbation and drug-response prediction remains unproven.

> This article borrows a genomics case to revisit one axis of data preparation. The same scRNA-seq data, laid out as gene tokens, blurs the relationships between genes and the magnitude of expression; drawn as an image, it comes back to life. We tend to treat AI-Ready Data as a problem of missing values and cleaning, but scVision shows that an earlier question — what you represent the data as — is what separates performance.

<!-- stat-card -->
**72 million** — human cells for training — Among the largest single-cell pretraining runs (scGPT used 33 million)

<!-- stat-card -->
**1 label = 50** — few-shot performance — One label matched competitors trained on fifty

<!-- stat-card -->
**1st in 6 tissues** — zero-shot cell-type classification — Top accuracy on every held-out atlas, with no fine-tuning

<!-- stat-card -->
**Unproven** — perturbation & drug response — Harder downstream tasks not yet demonstrated

## What Disappears When You Read Genes as a Sentence

Single-cell RNA sequencing (scRNA-seq) reads out, for each individual cell, which genes it is currently expressing and how strongly — as tens of thousands of numbers. Most attempts over the past few years to build a foundation model from this data borrowed the natural-language playbook wholesale. A gene becomes a word (a token), a cell becomes a sentence of those words, and the whole thing goes into a transformer exactly as a language model is trained. **Geneformer** (2023) and **scGPT** (2024) are the flagship examples, and scGPT — trained on 33 million cells — became the field's baseline.

The trouble lies in the act of translating into a sentence. Expression levels are originally continuous magnitudes, but to handle them as tokens you have to bin them into a few categories or convert them into ranks. This binning erases much of the magnitude information, and genes end up treated largely as an unordered set, blurring the structure of which gene co-fires with which. The preprocessing step meant to make data "AI-Ready" becomes the very place where the signal gets shaved off.

> [!callout]
> **Key observation**: Tokenization looks like an act of cleaning the data, but it is itself a gateway to information loss. The moment you read a cell as a sentence, two signals — the relationships between genes and the magnitude of expression — thin out together.

## What It Means to Draw a Cell as an Image

scVision's idea starts from skipping tokenization. It draws a cell's entire transcriptome as one continuous two-dimensional image. Every gene is assigned a single fixed coordinate on a 104×104 grid, and all cells share that same layout. The only thing that changes from cell to cell is the brightness at each coordinate. Highly expressed genes are drawn bright, lowly expressed ones dark, so expression magnitude is carried directly in pixel intensity without any binning.

How the coordinates are chosen is the heart of the method. scVision optimizes the gene layout with a technique called **Gromov-Wasserstein optimal transport**, placing co-regulated genes next to one another on the image. As a result, a gene program that works as one unit shows up as a local texture in the image — a bright patch in a particular region. The cell's state gets translated into the texture of the picture.
