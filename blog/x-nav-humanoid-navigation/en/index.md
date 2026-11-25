---
title: X-Nav Humanoid Walks From an Office Lobby to a Store Across the Street
subtitle: Training on recovery segments gathered inside a 3D copy of that building took success from 40% to 80% across 100 runs in the copy
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# X-Nav Humanoid Walks From an Office Lobby to a Store Across the Street

_Training on recovery segments gathered inside a 3D copy of that building took success from 40% to 80% across 100 runs in the copy_

## Executive Summary

> [!callout]
> A biped humanoid left an office lobby, crossed a street and stopped outside a store in the next building, 96.6 metres away, acting on spoken instructions and nothing else. The walk is reported in [X-Nav](https://arxiv.org/abs/2611.17598), a technical report posted to arXiv by a team led by AgiBot X-Lab, and the robot that did the walking is the Lingxi X2. No map was drawn in advance, and no route was fixed.

> The measured numbers, though, belong to a copy of that same building rather than to the walk. The team scanned the lobby where the robot would work, rebuilt it in three dimensions, and gathered 15,602 extra segments covering what the policy should do when it drifts off the path and how it should settle onto a stopping spot. After training on those segments, success across 100 runs inside the copy went from 40% to 80%. The same training pushed the share of runs that ended within one metre of the target down from 28% to 20%.

> Sections 1 through 5 follow the design and the numbers the report discloses. Section 6, which reads the result as a question about collecting data site by site, is this article's own interpretation.

### Key Figures

Source: [X-Nav Technical Report: Real-World Long-Horizon Indoor-to-Outdoor Navigation on a Humanoid Robot](https://arxiv.org/abs/2611.17598) (arXiv:2611.17598)

The first card is the distance the robot covered in a real building. The other three come from 100 runs inside the digital copy of that building: the number of extra training segments gathered there, the success rate after those segments were added, and the one metric that moved the other way under the same training.

<!-- stat-card -->
**96.6 m · 3 min 24 s** — Real lobby to the store — 34.2 m indoors, then 62.4 m outdoors

<!-- stat-card -->
**15,602** — Correction segments from the copy — Recovering from a drift, and settling onto a stop

<!-- stat-card -->
**40% → 80%** — Runs that arrived within 3 m — Measured over 100 runs in the same copy

<!-- stat-card -->
**28% → 20%** — Runs that stopped within 1 m — The one decline the authors record as a limitation

## A Spoken Sentence Is All It Gets

The run begins in an office lobby. At 9.1 metres an operator speaks a new destination, a convenience store in the building next door. The robot turns, passes through a glass door at the 34.2-metre mark and continues outdoors, then waits 24 seconds between 63.7 and 65.5 metres for vehicles and pedestrians to clear. The storefront sign comes into view at 85.9 metres, and at 96.6 metres the robot stops in front of the entrance. The whole thing takes 3 minutes 24 seconds, 34.2 metres of it indoors and 62.4 metres outdoors.

There is a yardstick for that distance. An episode in the public navigation benchmarks usually runs 10 to 15 metres, so this walk is several times longer. Length is not the only thing that stretched. Indoor vision, where a wall sits a few metres ahead, turns into evening sunlight and buildings tens of metres away the moment the robot clears the glass door, and the same model keeps walking through the change with nothing swapped in.
