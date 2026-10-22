---
title: OlmoEarth Boils the Whole Planet Down to Numbers
subtitle: The Allen Institute for AI released a free 2023 to 2025 global dataset that turns a year of satellite observation into 128 numbers per 10-meter square
date: 2026-10-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OlmoEarth Boils the Whole Planet Down to Numbers

_The Allen Institute for AI released a free 2023 to 2025 global dataset that turns a year of satellite observation into 128 numbers per 10-meter square_

## Executive Summary

> [!callout]
> This article reads OlmoEarth v1.3, released by the Allen Institute for AI (Ai2) on October 22, 2026. What the institute put out is not only a model. It summarized a full year of radar and multispectral satellite observation into 128 numbers for every 10-meter square, computed those summaries for the entire planet in advance, and made them downloadable. The work of fetching satellite imagery and running a model over it arrives already finished.

> In 27 evaluations across six continents, first place went to the 128-dimension version 20 times and to the lighter 64-dimension version 18 times. The comparisons were against Google's AlphaEarth Foundations and Tessera v2. The years filled in for the whole planet, though, run from 2023 to 2025, and the stretch from 2017 to 2022 covers only some countries.

> Sections 1 through 4 follow what the institute's announcement and outside coverage say. Section 5, which reads this release against the decision to prepare data ahead of time, is this article's own interpretation.

### Key Numbers

The first two say what this release puts in your hands; the last two say what it cost to make and which parts are still empty.

Sources: [Ai2 announcement](https://allenai.org/blog/olmoearth-v1-3) · [Unite.ai](https://www.unite.ai/ai2-releases-olmoearth-v1-3-with-global-10m-satellite-embeddings/) (October 22, 2026)

<!-- stat-card -->
**128** — numbers per 10-meter square — A year of satellite observation shrinks to this much. The first 64 can be used on their own

<!-- stat-card -->
**20 / 27** — evaluations where it placed first — Out of 27 evaluations on six continents, for the 128-dimension version. The 64-dimension version led on 18

<!-- stat-card -->
**53%** — training time against the previous version — 53% of v1.2 and 18% of the original v1. Rerunning the final training costs about $2,720 at H100 rental rates

<!-- stat-card -->
**2017–2022** — the stretch that is not global — Only some countries are covered here. Worldwide coverage picks up at 2023 and runs to 2025

## 128 Numbers for a Single 10-Meter Square

Satellite imagery of Earth is already public in more volume than anyone can use. The European Space Agency's Sentinel satellites and America's Landsat satellites pass over the same ground every few days and have been stacking up records for decades, free for anyone to download. The difficulty starts after the download. Raw imagery for an area the size of one country runs to several terabytes, and finding anything in it means running a model that reads the whole stack. Only those with the storage and the GPUs got to ask questions.

What OlmoEarth v1.3 changes is that earlier step. The institute pushed a year of observation from Sentinel-1, which images with radar, and from Sentinel-2 and Landsat, which split light into many bands, through the model first, and pulled out a set of 128 numbers for each 10-meter square. A bundle of numbers like that is called an embedding. It is closer to a fingerprint the model has written down for that spot: color, texture and the way the place shifts with the seasons are all pressed in together. No person can read it, but for machines comparing one place against another it is far easier to handle than the original imagery.

![OlmoEarth 1.3 logo image showing the Earth broken into 10-meter pixel squares, each colored to represent an embedding value](./image/img-01-olmoearth-globe.png)
*▲ The idea of turning the whole planet into numbers, one 10-meter square at a time, carried straight into the logo | Source: [Ai2 announcement](https://allenai.org/blog/olmoearth-v1-3)*
