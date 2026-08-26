---
title: AI-Written Pages Piled Up on .com at Ten Times the .edu Rate
subtitle: Pew measured AI authorship by domain across 490,000 crawled pages, and the numbers change how a training corpus should be filtered
date: 2026-08-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI-Written Pages Piled Up on .com at Ten Times the .edu Rate

_Pew measured AI authorship by domain across 490,000 crawled pages, and the numbers change how a training corpus should be filtered_

## Executive Summary

> [!callout]
> On August 20, Pew Research Center published [an analysis of nearly half a million webpages](https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/). The number the press carried was the headline one: more than a third of pages published since ChatGPT's release show signs of AI authorship. The part that touches day-to-day work sits further down the page, in the table that splits the same measure by domain.

> In the six-month average at the January 2026 crawl point, 9.35% of .com pages showed signs of AI authorship. The share on .org was half that, 4.59%. On .edu it was 1.03%, and on .gov 0.76%. In the second half of 2022, when ChatGPT went public, all four domains were bunched near 1%. The total has grown over the three and a half years since, but what changed more is where that total lands.

> For anyone training on crawl data, that stratification becomes a pipeline problem. A filter that sweeps a whole corpus behind one web-average figure runs without knowing where the contamination piled up. The per-domain source data Pew published alongside its chart puts numbers on why the filtering criterion has to move from the total to the source.

![Pew Research Center logo — the organization behind this per-domain AI authorship study](./image/img-01-pew-research-logo.svg)
*▲ Pew Research Center, the organization behind this study | Source: [Pew Research Center](https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/)*

### Key Numbers

The first three figures give the size of the domain gap and the speed at which it opened. The last is the limit that needs the most care when this study gets quoted.

Sources: [Pew Research Center](https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/) chart source data and [methodology](https://www.pewresearch.org/data-labs/2026/08/20/methodology-ai-content/) (2026-08-20)

<!-- stat-card -->
**9.35%** — of .com pages show signs of AI authorship — Six-month average at the January 2026 crawl point. In the same window .org was at 4.59%

<!-- stat-card -->
**0.76%** — of .gov pages show the same signs — .edu is at 1.03%. The two domains contributed only 669 and 1,571 sampled pages

<!-- stat-card -->
**8.7x** — growth on .com — From 1.07% in the July 2022 crawl, just before ChatGPT, to 9.35%. Over the same span .edu went from 0.64% to 1.03%

<!-- stat-card -->
**10-15%** — of pages carry a detectable publication date — The widely quoted 35% comes from that subset. Pew wrote down that it should not be read as the web as a whole

## The Four Domain Lines Came Apart in 2023

Pew drew a random sample of 10,000 English-language webpages from each of the 49 crawls Common Crawl produced between January 2021 and July 2026. The 490,000 pages went through a detection model, and the results were split by top-level domain and plotted as six-month averages. That time series is the most valuable part of the study. Plenty of outlets have already quoted the share at a single point in time, but the order in which those shares came apart exists only in the series.

![Common Crawl logo — the open web archive this study's page sample was drawn from](./image/img-02-common-crawl-logo.svg)
*▲ Common Crawl, the nonprofit that crawls and republishes the web every month | Source: [Common Crawl](https://commoncrawl.org/)*

In the July 2022 crawl, the last one before ChatGPT went public, the readings were .com 1.07%, .org 0.63%, .edu 0.64% and .gov 0.25%. Four lines pressed against the floor, nearly on top of one another. From the first half of 2023, .com pulls away first, .org follows at roughly half the pace, and .edu and .gov drift around 1% for four straight years.
