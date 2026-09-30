---
title: OpenVLA Doesn
subtitle: Researchers at Jilin University built 2,826 manipulation tasks with false premises and ran eight robot control models through them; OpenVLA
date: 2026-10-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenVLA Doesn

_Researchers at Jilin University built 2,826 manipulation tasks with false premises and ran eight robot control models through them; OpenVLA_

## Executive Summary

> [!callout]
> Three researchers at the School of Artificial Intelligence, Jilin University, posted a paper to arXiv on September 25, 2026. On top of LIBERO, a simulator for robot manipulation learning, they built 2,826 tasks whose instructions are themselves false, and put eight models that read a camera view together with a human sentence and move a robot arm through them one by one. Pick up a cup that is not on the table, open a drawer that is already open, clear away the plate that is buried underneath first. Those are the instructions. This article looks at what a robot given that kind of instruction actually did.

> Every success rate fell, and the biggest of those losses was OpenVLA's 56.2 percentage points. The paper puts its weight somewhere other than that number. When the attempts recorded as failures are opened again, the robot turns out not to have stopped. It kept extending the arm toward the original goal, its first twenty steps were nearly indistinguishable from a normal run, and it barely reduced the force of its motions. The authors gave this behavior a name: Failed Persistence.

> Sections 1 through 4 report what is in the paper. Section 5 reads those same facts through the lens of data quality, and that reading belongs to this article.

### Key Figures

Source: Hou, Wu, Chang, ["ConflictVLA-Bench"](https://arxiv.org/abs/2609.31792) (arXiv:2609.31792, September 25, 2026).

<!-- stat-card -->
**56.2 pts** — Drop in OpenVLA's original-goal rate — 78.7% on valid instructions, 22.5% on false ones

<!-- stat-card -->
**17.3 pts** — Smallest drop among the eight — π₀.₅'s figure. No model held steady under false instructions

<!-- stat-card -->
**0.845** — Early-path similarity of π₀-FAST's failed runs — Half of them ended in failure, yet the first twenty steps looked almost normal

<!-- stat-card -->
**0 models** — Moved as intended on all four metrics by the premise-check prompt — Not one of the eight

## What a Robot Does With an Impossible Instruction

A VLA is a model that reads the scene from a camera together with the sentence a person hands over, and puts out the robot arm's next motion directly. After Stanford researchers released OpenVLA as an open model in 2024, names such as the π₀ family, GR00T and UniVLA followed one after another. The places where these models have had their skill measured all stood on a single assumption: that the instruction a person gives is correct.

A real room is not like that. Someone can ask for a cup that is not on the table, ask for a drawer that is already open, or ask for the plate underneath to be cleared away first. What is wrong is not the side receiving the instruction but the instruction itself. The paper calls this a premise conflict and splits it four ways.

- **Instruction-internal conflict** — the goal and the constraint inside one sentence contradict each other
- **Object-grounding conflict** — the object the instruction points at is absent from the scene or cannot be pinned down
- **Spatial-relation conflict** — the positional relation the instruction takes to be true is false in the scene
- **Physical-feasibility conflict** — the instruction demands a motion or an order that cannot physically be carried out

![Original paper diagram of ConflictVLA-Bench's four premise-conflict families and its task-construction and evaluation pipeline](./image/img-01-conflict-overview.png)
*▲ (a) The four premise-conflict families, (b) LIBERO-based task construction, (c) matched premise-consistent vs. conflicting rollouts, (d) diagnosis combining outcome and process evidence | Source: [Hou, Wu, Chang (2026), arXiv:2609.31792, Fig. 2](https://arxiv.org/abs/2609.31792)*

There is one more axis. The same error planted in a task that ends with a single grasp and planted in a task that has to be stepped through are different experiences for the robot, and an error concentrated in one spot is different from one scattered about. The researchers multiplied these two splits and sorted the tasks into four configurations, L1 through L4. One error in one step is L1; several errors in one step touching the same requirement together is L2; a single sub-goal carrying the error among several steps is L3; entangled errors spread across several steps is L4. The paper nails down in advance that this is not to be read as a difficulty order. These configurations describe construction structure rather than an assumed empirical difficulty ordering, the authors write, and the result tables bear that out by reporting no breakdown across the four.

The floor these tasks sit on is LIBERO, a robot manipulation benchmark released in 2023 where every task carries a machine-readable record of the objects placed in the scene and the conditions for success. The researchers read those specifications to pull out objects and predicates, planted conflicts in them, paired each one with the original valid task, and then ran automatic checks followed by human review. The review had two stages. Tasks where the conflict did not hold or could not be confirmed were thrown out, and tasks whose notation was wrong but fixable were fixed and checked again. What survived was 1,413 base tasks. With two prompt conditions applied, the count becomes 2,826.

The pairing is the heart of this design. Every rollout run under a false instruction has one valid rollout attached to it, in the same scene and with the same goal. With a baseline sitting right beside it, the question is no longer only whether the task succeeded but whether this robot moved differently from usual. A single outcome cell cannot answer that.

Here is the scale of the experiment. Each of the 2,826 tasks was run from five different initial states, and the 40 valid tasks that serve as the reference were run from the same five states under both prompt conditions. That comes to 14,130 conflict rollouts and 400 valid rollouts per model, 14,530 in all. Every percentage below counts those rollouts. The figure of 40 reference tasks is hard to pass over. The 1,413 conflict tasks are not 1,413 different scenes; they were grown on top of LIBERO's 40 base tasks by varying the error planted in them.

Taken from the outcome side, OpenVLA is the one that fell furthest of the eight. A success rate of 78.7% on valid instructions came down to 22.5% under false ones. π₀.₅, which fell least, still lost 17.3 percentage points, from 94.5% to 77.2%. A strong ordinary score was no protection either. VLA-JEPA put up 99.0% on valid instructions and settled at 69.1% under false ones.
