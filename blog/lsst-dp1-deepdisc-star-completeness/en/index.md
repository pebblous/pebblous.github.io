---
title: Why Does AI Find Galaxies but Lose Stars in LSST
subtitle: On the first public images from Vera C. Rubin Observatory
date: 2026-10-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Why Does AI Find Galaxies but Lose Stars in LSST

_On the first public images from Vera C. Rubin Observatory_

## Executive Summary

> [!callout]
> This article reads one paper posted to arXiv on 7 October 2026. Before Vera C. Rubin Observatory started LSST, its ten-year survey of the sky, it released a first set of real observations, and the paper is the first run of DeepDISC on that data. DeepDISC is a deep learning model that finds objects and tells them apart in a single pass. Over the same sky, it recovered more than eight galaxies in ten and fewer than half the stars.

> The star-galaxy classification accuracy the paper reports is 97.4%, within 1.1 percentage points of the 98.5% from an established random forest that works from photometry alone. But that number puts only the objects the model found into its denominator. Anything dropped at the detection step never reaches the place where accuracy is counted. What the paper names as the cause is not the architecture but the annotations the model trained on.

> Every figure and quotation here comes from the body of the paper (arXiv:2610.10986), and the start date and data volumes for LSST were checked against Rubin Observatory's own pages. The reading in section 5, on why reporting accuracy alone is an old trap in data quality, belongs to this article rather than to the paper.

### Key numbers

Source: [Yadav et al., arXiv:2610.10986 (2026-10-07)](https://arxiv.org/abs/2610.10986).

<!-- stat-card -->
**84.2%** — Galaxy detection completeness — Share of the galaxies in the ground truth that the model recovered in place

<!-- stat-card -->
**49.1%** — Star detection completeness — Same model, same sky, same scoring rule

<!-- stat-card -->
**97.4%** — Star-galaxy classification accuracy — Counts only what was found. The missed stars are not in this denominator

<!-- stat-card -->
**6 to 1** — Galaxies to stars in the training annotations — 163,687 galaxy annotations against 28,346 star annotations

## The Same Sky, Two Report Cards

Vera C. Rubin Observatory began LSST, a ten-year survey of the sky, on the night of 29 June 2026. It records about 10 terabytes a night, some 30 petabytes over the decade, and returns to the same patch of sky close to 800 times so that what changes can be separated from what does not. Before the survey proper, the observatory released a rehearsal. That release is Data Preview 1. It holds six-band images of seven fields, about 15 square degrees in all, taken with the commissioning camera from late October 2024 to early January 2025.

![Vera C. Rubin Observatory and the Simonyi Survey Telescope dome atop Cerro Pachón, Chile](./image/img-01-rubin-telescope.jpg)
*▲ Vera C. Rubin Observatory atop Cerro Pachón, Chile. The Data Preview 1 data this paper analyzes was taken with the commissioning camera, not the Simonyi Survey Telescope's main camera shown here | Source: [Rubin Observatory/NOIRLab/AURA/NSF/J.Fuentes, CC BY 4.0](https://commons.wikimedia.org/wiki/File:A_Cloudy_Day_for_Rubin_(Rubin_dome_jfuentes-CC).jpg)*

The paper works with the two deepest of those fields. ECDFS and EDFS reach r-band magnitudes of 26.0 and 25.5. DeepDISC was run on them. The model finds an object, traces its outline and decides whether it is a star or a galaxy, all in one inference pass, which is a different shape from a pipeline that runs detection, deblending and classification in sequence. Its backbone is a Swin-B vision transformer, 86.8 million parameters in the backbone and 139 million in total.

Training began from a model pretrained on LSST simulations. The DP1 six-band images of the real sky were then shown to it with every weight unfrozen. The paper calls this Stage 1. Before it saw the real sky, the model scored 40.2% on galaxies and 13% on stars. After the real images, it reached 84.2% and 49.1%. Both classes improved a great deal, and the distance between them stayed where it was.
