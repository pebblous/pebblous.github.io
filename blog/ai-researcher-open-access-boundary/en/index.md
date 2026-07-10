---
title: An AI Co-Scientist Hypothesizes Only Within the Papers It Can Read
subtitle: Co-Scientist and Robin landed in Nature on the same day. The limit they share isn
date: 2026-07-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI Co-Scientist Hypothesizes Only Within the Papers It Can Read

_Co-Scientist and Robin landed in Nature on the same day. The limit they share isn_

## Executive Summary

> [!callout]
> On 19 May 2026, two AI research agents appeared in **Nature** on the same day: Google DeepMind's Co-Scientist and FutureHouse's Robin. One pitted hypotheses against each other in a tournament; the other autonomously picked a drug candidate for a blinding eye disease. Yet the two systems share something that rarely gets named. Both can only form hypotheses inside the papers that are already open.

> A Nature editorial published in the same issue nailed the point in one line: efficiency is not the same as insight. The fact that AI reads faster and combines more does not automatically carry over the insight humans draw from failure and detour. And the range in which that efficiency operates is already narrow. Sixty-four percent of biomedical papers sit behind paywalls, beyond the reach of both systems.

> The ceiling of automated discovery is set not by how clever the model is, but by the boundary of the data it can read. So who is left to widen that boundary — to build the data that does not yet exist, and to open the data that stays closed?

The achievement and the limit of both systems live together in four numbers: the share that open literature holds, the share locked outside it, and what Robin actually produced inside that narrow field of view.

<!-- stat-card -->
**36%** — Open-access share — Of the ~39M papers indexed in PubMed, the share freely available

<!-- stat-card -->
**64%** — Behind paywalls — Biomedical papers AI research agents cannot reach

<!-- stat-card -->
**10 wks** — Robin drug repurposing — Time to scan 10 diseases using only open literature

<!-- stat-card -->
**0 papers** — Prior proposals — No existing paper had proposed ripasudil for dAMD

## Two AI Researchers, Published the Same Day

Co-Scientist is built from six specialized agents on top of Gemini. An agent that generates hypotheses, one that critiques them, and one that ranks them all interlock and turn together. The hypotheses compete in an Elo tournament, and as the agents simulate a kind of scientific debate among themselves, the surviving hypotheses rise to the top. Researchers at Calico Life Sciences went on to confirm one of the system's integrated stress response hypotheses in the lab.

Robin divides the roles more sharply. Crow summarizes the literature and proposes experiments, Falcon writes in-depth technical reports, and Finch analyzes raw data such as RNA-seq. Given dry age-related macular degeneration — a condition affecting roughly 196 million people worldwide — as input, the system narrowed about 400 papers down to 30 candidates and singled out ripasudil, a glaucoma drug, as a new indication candidate. No prior study had ever linked the drug to dry AMD.

The two systems differ in character, but they draw the raw material for their hypotheses from the same well. Co-Scientist leans on web search and open data such as ChEMBL and UniProt. Robin reads only open-access literature. Both run on top of repositories anyone can open — arXiv, PubMed Central, Semantic Scholar. Neither sees inside subscription databases.
