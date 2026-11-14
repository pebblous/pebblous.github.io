---
title: One Axis Order Decides the Score in Brain MRI Anomaly Detection
subtitle: An evaluation protocol called MIRTO found that a mismatched axis order alone took one model
date: 2026-10-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# One Axis Order Decides the Score in Brain MRI Anomaly Detection

_An evaluation protocol called MIRTO found that a mismatched axis order alone took one model_

## Executive Summary

> [!callout]
> This article looks at a case where the report card for a brain MRI anomaly detection AI moved because of the scoring procedure rather than the model. The source is a paper posted to arXiv on October 1, and its authors named the evaluation protocol they propose MIRTO. Its subjects are four models that learn from healthy brain scans alone and then mark, on their own, the places that look wrong in a scan that holds a lesion. Models like these are usually ranked by a single score, and behind that score stands a line of choices that almost never get reported.

> The two numbers that stand out are 0.873 and 0.583. One diffusion model's anomaly map was read in the wrong axis order, the cropped field of view was never restored, and the voxel-level score fell from 0.873 to 0.583. The model, the weights and the test data were all untouched. In that same accident the slice-level score moved by only 0.112, so anyone watching the summary number saw nothing go wrong.

> Sections 1 through 4 follow what the paper measured and the figures its authors recorded. Section 5 carries the finding over to training-data quality, and that move is this article's reading rather than anything the paper claims.

### Key figures

All four cards below come from the same paper. The first two set a single accident beside the two scores that watched it, and they disagree. The third is a signal that surfaces only once the overall average is broken apart. In the fourth, changing the metric changed what the score is really tracking.

Source: Kafee Hernashki and Chatterjee, [MIRTO: a registration-gated, multiverse-tested evaluation protocol for unsupervised anomaly segmentation in brain MRI](https://arxiv.org/abs/2610.02136), arXiv:2610.02136 (2026-10-01), abstract and text

<!-- stat-card -->
**0.873→0.583** — Voxel-level score under a mismatched axis order — The model, the weights and the test data never changed

<!-- stat-card -->
**0.112** — How far the slice-level score moved in that same accident — The voxel-level score moved 0.290. By median the slice figure is 0.083

<!-- stat-card -->
**24%** — Share of subjects scored backwards — Their per-subject score sits below 0.5, which a coin flip beats

<!-- stat-card -->
**0.95 vs 0.14** — How much "which model" explains the score — 0.95 for the voxel-level score, 0.14 for lesion sensitivity

## What Dropped the Score Was Not the Model

Brain MRI anomaly detection never learns what a lesion looks like. A model is shown nothing but scans of healthy brains until it has absorbed what normal looks like, and then it is handed a new scan and asked to mark the places that depart from that normal. What comes out is a single map the same size as the scan. Every voxel in it carries a score saying how unusual that spot is, and the map is called an anomaly map.

Scoring means holding that map up against the answer key. The answer key is a label a person painted over the tumour region. The test data in this paper is 312 subjects from BraTS 2020, and all four models were trained on the same healthy scans and tested on the same subjects. The four compared are REFLECT, cDDPM, UCCD and AnomalyDINO. One restores a normal scan in a single pass, two are conditioned diffusion models, and one does no training at all and simply remembers the features of an off-the-shelf foundation model.

The usual score is the voxel-level AUROC. Pick one lesion voxel and one healthy voxel at random, and it is the probability that the model gave the lesion voxel the higher score. Close to 1 means the model marked the right places, 0.5 is a coin flip, and anything below 0.5 means the model is pointing the wrong way.

The accident happened where the map gets read. Preprocessing differs from model to model, so each one stores its map in its own way. Which axis gets written first, how far the field of view was cropped, how much the resolution was reduced, all of it varies. Comparing against the answer key means undoing those choices one by one, and the authors wrote that this undoing is easy to get wrong and hard to see. In practice a mapping was used that read cDDPM's map in the wrong axis order and ignored the cropped field of view, and the voxel-level score under it was 0.583. Undoing the same map correctly gave 0.873. The difference is 0.290, with an interval from 0.277 to 0.302.

A mismatched axis order means the whole map is flipped or twisted. A three-dimensional scan is stored as a block of numbers, and which direction was written as the first axis travels only as a convention outside the file. Break that convention and a signal from the front left lands at the upper right. The model marked the tumour correctly, and the scoresheet is looking somewhere else.
