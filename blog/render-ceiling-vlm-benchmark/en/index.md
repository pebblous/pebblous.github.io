---
title: The Answer Ceiling of a Crystal-Structure Benchmark, Computed Without a Model
subtitle: Certifying the ceiling on 2,160 rendered crystal structures separated where fourteen vision–language models actually failed
date: 2026-09-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Answer Ceiling of a Crystal-Structure Benchmark, Computed Without a Model

_Certifying the ceiling on 2,160 rendered crystal structures separated where fourteen vision–language models actually failed_

## Executive Summary

> [!callout]
> A model that misread an image and a model that read it correctly and then reasoned badly produce the same wrong answer. The repairs sit in different places. The first is fixed in the input and the render protocol, the second in the model. Every established way of telling the two apart puts a second model in the judging position, and the attribution then inherits that model's own errors. A paper posted to arXiv on 1 September takes the other route and removes the model from the reference entirely.

> Crystal structures drawn by five fixed cameras can be read backwards, and inverting those cameras returns exactly the answer the images support. The procedure has a single failure mode, a coincidence in which the projections of two distinct atoms overlap, and the authors certified that set empty across all 2,160 rendered structures. With the ceiling at 1.0000, every point a model falls short belongs to the model. Measured against it, exact coordinates and cell parameters handed over as text lifted all fourteen vision–language models, yet thirteen closed under half the gap, and a vision model with no language component at all read the same images at 0.8952, above all fourteen.

> Sections 1 through 5 follow what the paper measured and what it declined to claim. Section 6 moves to evaluation-dataset design, which is this article's reading rather than the paper's.

### Key figures

Source: Polat et al., [Separating perception from reasoning in vision–language models](https://arxiv.org/abs/2609.00663) arXiv:2609.00663v1 (2026-09-01), Results and Methods

<!-- stat-card -->
**1.0000** — Answer ceiling certified without a model — The oracle recovered the label on all 210 evaluation structures and all 1,950 scale-up structures, with no phantom accepted

<!-- stat-card -->
**13 of 14** — Models closing under half the gap even when handed the geometry — The median perception share is 0.2901 and the single exception is Grok 4.5

<!-- stat-card -->
**0.8952 vs 0.7333** — Pixel-only model against the best vision–language model — ResNet-50 trained at 224 px beat all fourteen models that saw 768 px renders

<!-- stat-card -->
**Median 0** — Coordinate recall of a strong model at the extraction stage — 105 of 206 structures had no atom within tolerance, yet the same model emitted a median of 48 well-formed atoms each

## One wrong answer, two causes

Vision–language models already sit in the reader's seat for figures, spectra and rendered structures, and they turn up as components inside materials-design pipelines. The flagship multimodal benchmark for the domain reports that models handle basic perception of chemistry and materials images well and then fail at spatial reasoning and multi-step inference. Crystal structures are the sharpest case in that domain, because they reach most readers as pictures, and a model that could read those pictures would inherit a century of crystallography that was drawn and never tabulated.

The difficulty starts once a model gets one wrong. Re-scoring after the image is swapped for a model-written description, serialising the visual stream into ground-truth text, a best-case ensemble, a selector fitted to the labels: those are the routes in use. The paper points at what they share. The reference against which a model's deficit is read has a second model inside it. Attribution inherits that model's errors, and the apparent headroom shifts whenever the evaluation artifacts change.

Without a reference, counting the remaining headroom also falls back on convention. The unsolved fraction of a benchmark is usually read as one minus the best score, which amounts to assuming the ceiling is 1. Attempts to measure the ceiling rather than assume it keep a model inside all the same, either a best-case ensemble over several models or a selector computed against the labels, and swapping that evaluation artifact moves the fraction counted as unsolvable by enough to change conclusions. An earlier crystal-structure stress test from the same group supplied the source crystallographic file alongside the image; the gap narrowed and did not close, and the yardstick it was read against was the best observed score rather than a measured bound.

For natural photographs there is no way around any of this. Recovering scene geometry from a single photograph is ill-posed, an infinite family of three-dimensional scenes projects to the same picture, and every practical reader supplies a learned prior in place of the missing constraint. Rendered scientific figures sit differently. A crystal-structure render is an orthographic projection of a structure whose coordinates are known exactly, taken by a camera set the experimenter chose. Invert those cameras, re-solve the correspondence between views, and the answer the images support arrives with no model at any step. The paper calls that quantity the render ceiling.
