---
title: AI Now Grades Your Data
subtitle: How SciHorizon-DataEVA turns data readiness into a score — and raises the question of who vouches for the rubric
date: 2026-07-04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Now Grades Your Data

_How SciHorizon-DataEVA turns data readiness into a score — and raises the question of who vouches for the rubric_

## Executive Summary

> [!callout]
> "AI-Ready Data" has long been, in Pebblous's telling, a case to be argued rather than a thing to be measured. Whether, and how far, a dataset was actually ready was usually judged after the fact, by a person with a checklist. A study released in April 2026 moves that judgment seat wholesale. The party doing the scoring shifts from a human to a multi-agent system; the object being scored shifts from a finished, trained model to the dataset about to enter training; and the moment of scoring shifts from after the fact to before the data ever enters the pipeline. For the first time, readiness becomes something you can put a number on.

> The scoring runs along a four-dimensional rubric called Sci-TQA²: governance trustworthiness, data quality, AI compatibility, and scientific adaptability. The system reads roughly 80 heterogeneous datasets across six fields — from astronomy to socio-economics — and writes, on its own, whatever analysis tool each dataset needs to be scored. Overall evaluation success reached 89.0%, and human experts rated the accuracy of that scoring at 4.15 out of 5. On the surface, reassuring numbers.

> But the moment an agent does the grading, the trust question climbs one level — from the data to the rubric itself. Agreement between the system and human experts came in at ICC 0.742: a hair (0.008) short of the 0.75 threshold usually called "good," useful but not yet fully trusted. And when the loop that lets the system re-check its own scores is removed, success collapses from 89.0% to 33.0%. This report dissects the shift that turned readiness into a scorable object — and then asks the next question it forces: who vouches for the rubric?

<!-- stat-card -->
**89.0%** — Evaluation success rate — Share of datasets the agents actually produced a score for

<!-- stat-card -->
**97.4%** — Tool auto-generation success — Writes a bespoke analysis tool per dataset (1.19 attempts on average)

<!-- stat-card -->
**ICC 0.742** — Human–system agreement — 0.008 short of the 0.75 "good" line — a ceiling on rubric trust

<!-- stat-card -->
**89→33%** — Without the verification loop — Remove Self-Correction and success drops to a third

## Readiness: From Slogan to Score

Any data team has fielded the question at least once: "Is our data actually usable for AI?" Until now, the way to answer it was more or less fixed. An experienced hand opens a checklist, scans for missing values and label errors, and rules the data roughly "usable" or "needs more work." The verdict leaned on human eyes and instinct, and it usually came after the data had already been handled a great deal.

This is precisely the spot Pebblous has returned to on the blog more than once. We wrote that "cleaning your data is only where AI-readiness begins," and we asked, "the model is ready — is your table?" We made the case for **why** readiness matters. What we left blank was **who scores it, and against what standard**. A study named SciHorizon-DataEVA (arXiv:2604.26645) fills exactly that blank.

### 1.1 Three Things Moved at Once

What makes this study interesting is that it changes not one thing but three at the same time. In the act of judging readiness, the **who**, the **what**, and the **when** all move together.

| Axis | The old way | This study's way |
| --- | --- | --- |
| Who — scores it | A person with a checklist | A multi-agent system with a rubric |
| What — is scored | The performance of a trained model | The dataset itself, before training |
| When — it happens | After-the-fact diagnosis | A gate before data ingestion |

The shift in timing carries the most practical weight. Discovering "the data was the problem" only after a model is fully trained is a different order of cost from filtering the data out before it ever enters the pipeline. When readiness scoring moves upstream, the losses bad data would have caused get blocked before training even begins.
