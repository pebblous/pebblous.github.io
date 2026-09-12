---
title: Bluesky
subtitle: An outside audit of the 10.6 million labels applied in 2025 put precision at 0.837 and recall at 0.222
date: 2026-09-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Bluesky

_An outside audit of the 10.6 million labels applied in 2025 put precision at 0.837 and recall at 0.222_

## Executive Summary

> [!callout]
> Bluesky applied more than ten million labels to posts during 2025. The protocol it runs on publishes that labeling record to anyone who wants to read it, so for the first time eight researchers were able to measure a live moderation system's performance from outside the company. This report reads the two numbers their audit produced.

> The results split by direction. When human annotators re-read 1,000 labeled posts drawn evenly across nine harm categories, they agreed with the system on 83.7% of them. The labels it applied were mostly right. But when the same annotators read 1,000 posts pulled at random from the firehose, they judged 27 of them harmful, and the system had labeled only 6. Inspect what the system touched and it looks good. Count what it never touched and it caught two in ten.

> Both numbers come out of one system because of how the pipeline is built. The automated layer the paper reverse-engineered reads only 16 of the 128 signals a commercial classifier returns for a single image. Processing time splits the same way: sexual-content labels land at a median of 5.5 seconds, hate-speech labels at a median of 13 days. Applying a lot of labels and applying all of the right ones are two different jobs, and this audit is the first to put a number on the difference.

<!-- stat-card -->
**0.222** — Recall of the default moderation service — Of the 27 posts annotators judged harmful in 1,000 random posts, 6 carried a label

<!-- stat-card -->
**0.837** — Precision of the same system — The denominator is 1,000 labels, 111 drawn from each of nine harm categories

<!-- stat-card -->
**10.6M** — Labels under audit — Every label Bluesky applied to a post over the course of 2025

<!-- stat-card -->
**16 of 128** — Classifier signals the rule engine reads — The other 112 have no rule attached, even at a score of 1.000

## A public log made the first audit possible

Until now there has been no way to measure content moderation from outside the platform running it. The large platforms publish annual transparency reports with takedown counts and proactive-action rates, but every one of those numbers is a record of the side where action happened. How many posts were never acted on, and how many of those were actually harmful, is not in the report, and the underlying feed is closed so nobody outside can draw a sample either. Once you see moderation as a labeling pipeline, the shape of the problem is clear. You can measure whether the labels that got applied were correct. You cannot measure how many labels never got applied at all.

Bluesky is built differently. The AT Protocol it runs on publishes both streams: the posts coming in and the moderation labels going on. An outsider can line up what entered the platform against what got labeled over the same period, and that is the one arrangement in which this kind of audit works, because it needs the input side open as well as the output side.
