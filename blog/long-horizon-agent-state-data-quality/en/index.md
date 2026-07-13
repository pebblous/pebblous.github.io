---
title: AI Agents Collapse on Tasks Longer Than an Hour
subtitle: Across OSWorld-V2
date: 2026-07-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Agents Collapse on Tasks Longer Than an Hour

_Across OSWorld-V2_

## Executive Summary

> [!callout]
> Can you really hand an AI agent a multi-hour, real-world task and walk away? A new benchmark puts exactly that question to the test. On the previous generation, which bundled short manipulation tasks, top agents climbed to 83.5% and the problem looked essentially solved. Once the tasks were stretched to the length of actual work, agents from the same generation slumped to around 20%. This article looks at where that collapse comes from.

> The 108 tasks in OSWorld-V2 take a median of about 1.6 hours. Even the top agent finished only 20.6% of them within 500 steps. Completion rates that hovered around 20% in the 45-minutes-or-less band dropped below 10% past the two-hour mark, and beyond 163 minutes no model finished a single task. Most failures happened not because the model lacked knowledge, but because it could not carry the constraints it confirmed early on and the facts that arrived midway all the way to the end.

> The bottleneck, then, is state, not intelligence. Context that piles up over hours is ultimately a single dataset, and left with no schema, no freshness check, and no validation gate, it rots and breaks exactly the way a human-built pipeline does. This article argues for treating that state as data to be managed.

### Key Figures

Source: [OSWorld-V2 (arXiv:2606.29537)](https://arxiv.org/abs/2606.29537), [project page](https://osworld-v2.xlang.ai/)

<!-- stat-card -->
**20.6%** — Best completion rate — Share of tasks the top agent finished within 500 steps

<!-- stat-card -->
**0%** — The three-hour wall — No model finished any task running longer than 163 minutes

<!-- stat-card -->
**1.6 hrs** — Median task length — About 48× longer than the prior generation (~2 min)

<!-- stat-card -->
**83.5% → 20%** — Change length alone — A saturated short-task score collapses at real length

## Short Tasks Are Already Solved

Agents that operate a computer directly have improved remarkably over the past two years. On OSWorld 1.0, which served as the standard yardstick, frontier agents climbed to around 80%, and according to the OSWorld team the best score reached 83.5%. In plain terms, tasks like opening a file, changing a setting, or looking something up on the web and typing it in are now handled largely without human intervention.

The question is what that 83.5% was actually measuring. The tasks in OSWorld 1.0 had a median duration of about two minutes and ran to roughly 30 steps on average, single-shot operations. Doing well at something a skilled user would finish in two minutes is clearly progress, but it is not the shape of the work we actually want to hand agents. Gathering material from several places into a table, filtering a document down to the entries that meet a condition, revising it again to reflect a requirement that changed midway through, these take hours, not minutes.

So XLang Lab, the group behind OSWorld, released a follow-up benchmark and asked: does short-task saturation mean the problem is solved? The answer was no. The benchmark's measured difficulty simply had not captured the difficulty of real work. To clear away the illusion, the tasks had to be returned to their true length.

> [!callout]
> **The core point**: 83.5% is a signal that agents have grown capable, and also a signal that the ruler measuring that capability was too short. Short-task saturation was not the solution to the problem but the starting point of the next question.

## Measured at Real Length, Completion Falls Off a Cliff

Released in June 2026, OSWorld-V2 is built from 108 long-horizon workflows. It spans 7 professional domains and 21 subcategories, and it runs in a controlled environment that self-hosts 31 services so external service changes cannot shake the results. The median task takes about 1.6 hours, and 69.6% of the tasks run longer than an hour. Compared with the roughly two minutes of OSWorld 1.0, the axis of difficulty has shifted heavily toward duration rather than knowledge.

When frontier agents from the same generation were dropped into this environment, the scores flipped. In the best configuration, the top agent finished only 20.6% of tasks within 500 steps, and even counting partial credit it reached just 54.8%. Models that had scored 83.5% on short tasks sank to a fifth of that in the face of real length. The models did not suddenly get worse; a wall the short benchmark had kept hidden came into view.

This collapse was not one model's weakness. The agent that reached the top of the completion ranking poured out more output tokens than any other model and still stayed put, while the model that spent tokens most frugally was stuck around 13%. In other words, throwing more compute at the problem or swapping in a different frontier model did not move completion much. The wall lay not in any particular model but in task length itself.

The sharper picture is in completion by task length. Below 45 minutes it holds in the low 20s, but from the 137-to-163-minute band it drops below 10%, and past 163 minutes no model finished a single one. Performance does not decline gently. It is a cliff: it begins to break around the one-hour mark and touches bottom by three hours.
