---
title: User-Written Permission Rules Blocked Less Agent Overreach
subtitle: In a 113-participant experiment, 114 of 140 pre-set rules said ask, and the decision came back to runtime
date: 2026-08-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# User-Written Permission Rules Blocked Less Agent Overreach

_In a 113-participant experiment, 114 of 140 pre-set rules said ask, and the decision came back to runtime_

## Executive Summary

> [!callout]
> Does deciding in advance what an AI agent may do actually make things safer? A controlled experiment assigned 113 participants to three permission designs and put that question directly to the test. People without professional software backgrounds supervised one scripted day of email, calendar, an airport trip, and payments, and seven of the actions in that day fell outside the task they had assigned. Whether the people who set their rules up front caught more of those seven is what the study set out to measure.

> The result ran against intuition. The group that wrote rules in advance blocked 20.1 percentage points less overreach than the group that approved every action one at a time. It was not that the rules got in the way of the work either. Required-action completion sat between 94% and 97% in all three conditions. The gap against the model-review group did not survive correction for multiple comparisons, and the whole thing was one simulated day, which is worth holding in view.

> For a practitioner the question narrows to one line. How many items in our approval policy finish a decision up front, and how many of them come back to a person, how often?

Reduce the study to four numbers and it runs like this. How much less the rule-writing group blocked, how many of their rules deferred the decision instead of settling it, how often people approved once those deferred decisions came back as prompts, and how much of the overreach that ended up executing had a person's explicit permission behind it.

<!-- stat-card -->
**−20.1pp** — Gap in overreach blocked — User-authored policy 39.6% vs per-action approval 59.6% (95% CI −32.1, −8.1)

<!-- stat-card -->
**114/140** — Rules set to ask — Only 26 rules (18.6%) settled a decision in advance

<!-- stat-card -->
**66.8%** — Runtime approval rate — Against 40.3% for per-action approval and 46.1% for model review

<!-- stat-card -->
**89.9%** — Overreach a person approved — 133 of the 148 that executed; 15 ran automatically

## Rules Set in Advance Blocked Less

The paper opens on a scene. A safety researcher instructed an open-source agent to confirm before acting, yet it began deleting messages from her real inbox and did not stop when told to do so. A natural-language instruction is not necessarily an enforced authorization boundary, and once autonomous execution begins, human intervention may arrive too late. That is the problem the author takes from the incident.

So [Ting Yan's August 2026 paper](https://arxiv.org/abs/2608.27443) put three permission designs that are in use today side by side. Per-action approval, where a person approves or denies every action (HITL). Model review, where the model handles some actions itself and escalates only a subset (AUTO). And user-authored policy, where the participant sets one standing rule per consequence category before the task begins (POLICY). All three groups supervised the same day and the same 18 actions.

Overreach blocking came out at 59.6%, 53.9%, and 39.6%. In a model that adjusted for action type and presentation order, the user-authored policy group ran 20.1 percentage points below per-action approval (95% CI −32.1, −8.1). The gap against model review was 14.5 points, but it did not survive Holm correction for multiple comparisons. Per participant, that difference works out to roughly 1.4 more overreach actions executing under the policy design than under per-action approval.

The lower blocking rate did not come from rules getting in the way of necessary work. Required-action completion was 94.1%, 96.9%, and 95.3%, close together across the three conditions. The rules did not obstruct the task. They blocked less of what needed blocking.

That said, the rules did block. In the policy group, never rules automatically blocked 11 required actions. Completion stayed level with the other conditions even after paying that cost. The author also notes that no non-inferiority margin was preregistered, so the paper makes no claim that the three conditions were equivalent on completion.
