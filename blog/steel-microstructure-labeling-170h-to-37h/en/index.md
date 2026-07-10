---
title: Labeling Steel Microstructures Dropped From 170 Hours to 37
subtitle: In AI training data, the most expensive thing isn
date: 2026-06-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Labeling Steel Microstructures Dropped From 170 Hours to 37

_In AI training data, the most expensive thing isn_

## Executive Summary

> [!callout]
> "The label costs more than the AI model" is not a metaphor. A paper released by a Spanish research team in June 2026 proves it in numbers. It took three experts 170 hours to paint pixel-level masks onto 82 steel microstructure images. This article looks at how those 170 hours were cut to 37 — and at what the 22% that did not shrink is telling us.

> The key is the division of labor. An unsupervised CNN that learns with no labels at all lays down a draft mask, and the expert fixes only the parts that are wrong. The draft quality itself was low. The pre-labels averaged an IoU of just 32–49%. Even so, the time fell by 78%, because people are overwhelmingly faster at "fixing" than at "drawing from scratch."

> So why is the remaining 22% still human work? That question is the sharpest point of this article. The answer is not "because the machine isn't precise enough" but "because judgment is required there."

![Stainless steel (A961) microstructure under optical microscopy after chemical etching — grain boundaries and phase-distinguishing brightness differences](./image/img-01-steel-microstructure.jpg)
*▲ Stainless steel (A961) microstructure under optical microscopy after chemical etching. Dark lines are grain boundaries; brightness differences between regions identify phases. Pixel-labeling these irregular boundaries is what annotation means. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Microstructure_of_a_stainless_steel.jpg) (CC BY 4.0)*

### Key Figures

Four numbers compress this study's result and its paradox. The first two are the scale of the savings; the last two are the condition under which those savings happened and their limit.

Source: [Fernandez-Moreno et al. (arXiv:2606.19934)](https://arxiv.org/abs/2606.19934)

<!-- stat-card -->
**170h → 37h** — Annotation time — 3 experts · 82 images

<!-- stat-card -->
**78%** — Time saved — 73–83% by type

<!-- stat-card -->
**IoU 32–49%** — Pre-label quality — Low, yet savings peak

<!-- stat-card -->
**22%** — Time left to humans — Judgment, not precision

## How 170 Hours Became 37

Even the same steel can have a different internal microstructure. The ratio and distribution of phases such as Alpha, TiB2, and TiN determine its strength and durability. To classify these structures automatically with AI, you first need a ground-truth mask in which a human has painted, for each pixel of each image, which phase it belongs to. That task is annotation.

The problem is cost. It took three experts 170 hours to paint 82 images pixel by pixel from scratch. At an expert rate of only $100 an hour, labeling those 82 images cost about $17,000 — an amount that can be several times the cost of training a model once, tied up in data preparation alone.

To cut this time, the researchers compared five unsupervised algorithms: Multi-Otsu, which splits the grayscale histogram; graph-based superpixels; K-means clustering; Meta's general-purpose Segment Anything Model (SAM); and a deep-learning-based unsupervised CNN that jointly optimizes feature similarity and spatial continuity. The final choice was the unsupervised CNN, because it delivered consistent performance across every steel type.

With drafts laid down by the chosen method, total annotation time fell from 170 hours to 37 — a 78% cut. Broken out by steel type, the savings are even sharper.
