---
title: A 10-Million-Hour Open Video Dataset Whose Captions a Model Wrote
subtitle: LAION pulled 80 million videos out of CommonCrawl, then let a 2-billion-parameter model describe every clip
date: 2026-08-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A 10-Million-Hour Open Video Dataset Whose Captions a Model Wrote

_LAION pulled 80 million videos out of CommonCrawl, then let a 2-billion-parameter model describe every clip_

## Executive Summary

> [!callout]
> On August 25, researchers from LAION and the Tübingen AI Center posted LAION-BVD to arXiv, an open video corpus assembled from links scraped out of CommonCrawl. What they downloaded amounts to 10 million hours, more than ten times the size of any video-text dataset released before it. The scale opened up that far. The people who described what is in all that footage did not come with it.

> No person wrote the clip descriptions. A 2-billion-parameter model did, in twenty words or fewer. And the paper never asked a human whether those descriptions match the footage. It demonstrated the dataset's worth by training models on the captions and reporting how they scored on standard benchmarks. Its own limitations section concedes that systematic errors from the captioning model may have come along for the ride.

> Two questions follow for anyone who works with data. Can a dataset built on synthetic labels be measured with the same yardstick as one built on human labels? And once crawled video has been used for training, where and how does that fact get written down? Pieces of both answers are scattered through the body of the paper and the terms of use LAION attached to the release.

### Key Figures

Source: [LAION-BVD paper (arXiv 2608.24845), body text and Table 1](https://arxiv.org/abs/2608.24845)

<!-- stat-card -->
**1.3B** — Video links kept from the crawl — Narrowed from 4.7B candidates to three platforms

<!-- stat-card -->
**10M hours** — Video actually downloaded — 80M videos, roughly 13× the previous largest, InternVid

<!-- stat-card -->
**20 words** — Ceiling on caption length — Set by the prompt handed to Qwen3-VL-2B

<!-- stat-card -->
**2 of 19** — Datasets with human-written captions — Only MSR-VTT and DideMo among the 19 compared

## From 1.3 Billion Links to 80 Million Videos

LAION-BVD begins not with video but with addresses. The team pulled 4.7 billion candidate video links out of every CommonCrawl dump available as of March 2024, then narrowed the pool to three platforms, YouTube, Vimeo and Dailymotion, leaving 1.3 billion URLs. The paper gives two reasons for keeping only those three. One is reliable access. The other is that these platforms moderate their own harmful and unsafe content.

Then came the collection itself. Some 2,000 virtual servers were coordinated through a Celery cluster and fed by yt-dlp. To keep access from being throttled, the pipeline ran through a residential proxy network. Roughly 130 million downloads were attempted, about 60 percent succeeded, and the result is 80 million videos totalling 10 million hours.
