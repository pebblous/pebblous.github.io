---
title: AIRD and ISO 5259: Two Standards That Prepare Data for AI
subtitle: A public recall dataset from Korea
date: 2026-11-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AIRD and ISO 5259: Two Standards That Prepare Data for AI

_A public recall dataset from Korea_

## Executive Summary

> [!callout]
> A recall dataset that had been sitting on Korea's open-data portal was repackaged as input for an AI to search, and it came back with a public verdict attached. It was not reworked to train a model. It was cut into pieces so that a program answering a question can search it and count what it finds. The verdict came from AIRD (AI-Ready Data), a Korean framework that asks whether data is ready for AI along two separate lines, quality and purpose.

> The verdict split along those same two lines. The source dataset cleared the quality gate, while the retrieval pack cut from it had its purpose verdict pushed to a later release. In a published comparison, exact matches on the recall questions rose from 23/42 to 42/42, and on the same page the operator records that the answer key was tallied with the rules that built the pack, which favors the pack condition on exact match.

> Sections 1 through 5 report what the published files and verdict documents say. Sections 6 and 7 are Pebblous's own reading and proposal.

### Key Numbers

The first two numbers are scores from the published comparison, and the last two describe the measurement scope and the size of the data. The scores split by task; the measured items split by data type.

Source: [AIRD evidence, test conditions and limitations](https://aird.idx.or.kr/about/evidence) (measured 2026-10-21) · [AIRD indicator list and type applicability table](https://aird.datahub.kr/reference-indicators/) · [description of the recall retrieval pack](https://aird.idx.or.kr/packs/recall).

<!-- stat-card -->
**23/42 → 42/42** — Exact match on the recall questions — 7 questions repeated, with an answer key tied to the rules that built the pack

<!-- stat-card -->
**28/28 → 28/28** — Hydrogen and fuel questions do not move — 14 questions. What preparation bought differed from task to task

<!-- stat-card -->
**3–13** — Mandatory indicators per data type — 3 for images, 13 for structured tables and time series. All 16 are not uniformly required

<!-- stat-card -->
**843 chunks** — Size of the retrieval pack — The published source CSV has 844 rows. This is not a count of products or training demonstrations

## This Dataset Was Checked for Search, Not for Training

The case starts from ordinary public data. The Korean Agency for Technology and Standards publishes a domestic recall report on the national open-data portal, filed under dataset number 15040695. Row by row it records products that broke a safety threshold, products whose labeling did not match, and descriptions tied to accidents. Open the published CSV and there are 844 rows, three fields used in the work itself, and one identifier that points at the row. Nothing in the record shows that a model was fine-tuned on it.

What changed is the side that repackaged it. The derived pack splits the same content into 843 retrieval chunks and tags each chunk with the substance involved and how many times over the limit it ran. It also keeps the identifier of the source row each chunk came from. Seven evaluation questions ship with it, and the one asking for a manufacturer is built so that the answer is withheld for lack of evidence. This is not a textbook for a model to memorize. It is input for a program that has been handed a question and has to look things up and count them.

Between 844 source rows and 843 chunks there is a gap of one. Saying what caused it takes the row-by-row conversion rule, and the published description on its own does not settle it as "one empty row was dropped." When the number travels, it is worth carrying the note that 843 counts chunks, not products and not training demonstrations.
