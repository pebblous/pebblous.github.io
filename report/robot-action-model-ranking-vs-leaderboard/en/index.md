---
title: The Top Seven Robot VLA Models on This List Have No Row on the Public Leaderboard
subtitle: Only one of the fifteen shows up on a real-robot board, and near the top of that board almost every row is a score the model
date: 2026-11-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Top Seven Robot VLA Models on This List Have No Row on the Public Leaderboard

_Only one of the fifteen shows up on a real-robot board, and near the top of that board almost every row is a score the model_

## Executive Summary

> [!callout]
> A list ranking fifteen of the AI models that drive robots went up on LinkedIn last week and traveled fast. The industry calls these VLAs, short for Vision-Language-Action: models that take in what a camera sees and what a person says, and put out robot motion. The list has ranks and it has nationalities, and the author set out in four lines what he looked at when choosing. What it does not have is scores, or the procedure behind them. This report traces all fifteen back to their primary sources and lines them up against a public leaderboard that was already running, and updating, in the same week.

> Lined up, the top seven of the ranking had no row on the public leaderboard at all. No record of those seven submitting anything, and no baseline run on their behalf by the team that operates the board. This is not a gap left by the absence of a yardstick. The shared board was being updated right up to the day before the list was posted, and it held seventy-nine policy rows sitting on one shared procedure. Open that board all the way, though, and the other half of the story appears. On both public boards, almost every row near the top was submitted by the party that built the model, and the rows the operating team ran without the builder's involvement start far further down. So what this report is aimed at is not a missing yardstick. It is the habit of reading any row without asking who put it there.

> Everything to this point is what we counted by opening the primary sources. From here on it is our reading. A blank where a name would be is not information about how the model performs. It is information about where the evidence an outsider can hold in their hands runs out. What was counted and what was interpreted are kept apart section by section, and where something went unconfirmed we wrote it down as unconfirmed.

<!-- stat-card -->
**0 rows** — Rows the top seven of the ranking hold on the public leaderboard — No submitted row, and no baseline row run by the operating team. There is nothing whose conditions could even be argued over (section 3)

<!-- stat-card -->
**1 of 15** — Named on the board that measures on real robots — GR00T N1.7, at a 1.70% success rate. Even that row is not a figure NVIDIA produced but a baseline the operating team ran (sections 3 and 4)

<!-- stat-card -->
**rank 32 of 66** — Highest-placed row on the sim board whose submitter field is blank — These are rows the operating team ran when the board opened. Not one of them appears in the thirty-one rows above (section 4)

<!-- stat-card -->
**298 vs 0** — Derived checkpoints built on GR00T N1.7 and on Isaac 0.5 — Isaac 0.5 is the one with the looser terms. The side that opened its license widest gets used less (section 6)

## The List Posted on the Afternoon of 31 October

The moment the list went up on LinkedIn can be pinned down by arithmetic: 16:31 UTC on 31 October 2026. LinkedIn attaches an activity identifier to every post, and the top 41 bits of that number are a millisecond timestamp. The headline read **"Which robot action models are best at learning new tasks?"**, and the author wrote that he had reviewed thirty robot action models and narrowed them to fifteen. Seventy-two reactions and two comments followed. It is one person's reading, and this report is not aimed at that person. What it is aimed at is why lists like this get made so quickly and travel so fast.

One thing deserves to be said up front, in fairness. The list does not hide its reasoning. The author named four things he weighed when putting the models in order: whether a model handles a new task zero-shot, whether it learns from a handful of demonstrations, whether it adapts on site, and whether it transfers to a different body. He even listed where to look next. What is missing is the **scores** on those four axes and the **procedure** that produced them. Across fifteen lines there is not a single number.

We opened `embodied.guide` too, the site named as further reading. It does not publish rankings. Its own description says **"Independent by design — No paid listings. No affiliate links. No manufacturer rankings."** It is a catalog of specifications for 366 pieces of robot **hardware** (255 from China, 34 from the United States, 13 from India), which is a different axis from a model ranking. So there is, in practice, no outside basis holding up the order of the list.

The nationalities the list assigns are also hard to carry over as given. The post splits the fifteen into nine American and six Chinese, yet Gemini Robotics 2 in third place was built by Google DeepMind, which is headquartered in London. The count changes with the counting rule. This report does not use the regional tally as a load-bearing part of its argument.

### 1.1. "Roughly Two per Week" Turns Out Not to Be an Exaggeration

The post contains the sentence **"New robot action models are appearing at a remarkable pace, roughly two per week"**. That is the author's estimate, not a tally. But checking the first announcement date of each of the fifteen models on the list, one by one, the estimate does not err on the high side. **All fifteen** arrived between April and October 2026, inside seven months. Ten of them are packed into the three months from August to October alone.
