---
title: The Knowledge Graph Store That Kept All Six Planted Defects Out
subtitle: How Quipu judges every agent write at the door and folds trust labels through a lattice so that composition never widens
date: 2026-08-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Knowledge Graph Store That Kept All Six Planted Defects Out

_How Quipu judges every agent write at the door and folds trust labels through a lattice so that composition never widens_

## Executive Summary

> [!callout]
> Most of the AI-Ready Data conversation has run in one direction: take the data people already made and shape it so models can read it. Once the writer is an agent, though, the order flips. Quality stops being something you clean up after it has piled up and becomes something you judge at the door, with the judgment kept in a form you can go back and check. Two papers posted to arXiv on August 17 happen to stand one on each side of that line.

> Steve Brown's [Quipu paper](https://arxiv.org/abs/2608.16813) tests its own claim with a single deterministic benchmark run. Six defects were planted on purpose among 100 clean writes, and the same script was run twice. The gated store's final graph held 0 of the 6, and the control arm, the same script with its gates off, held all 6. The number comes from one run on one fixed seed, and the author states plainly that the single-run latencies are illustrative.

> If several agents are already writing into the same store, there are three questions you can put to it today without replacing anything. What does a write get judged against, is there a record of the writes you refused, and is trust quietly widening every time you join graphs of different provenance.

### Key numbers

Four numbers carry both the effect and the price of this design. Every planted defect was stopped and every audit record came out exact, while the latency of a single write doubled.

Source: [arXiv 2608.16813](https://arxiv.org/abs/2608.16813) (2026-08-17) · all figures from the Census run on seed 42

<!-- stat-card -->
**0 of 6** — Planted defects left in the final graph — The gated store stopped all six, and the control arm running the same script with its gates off took all six in

<!-- stat-card -->
**512 of 512** — Property questions answered correctly on an outside benchmark — Zero overclaim across eight degradation conditions, while baselines that only check whether a container exists overclaimed on up to 87.5%

<!-- stat-card -->
**12 of 12** — Label and vocabulary refusals cleared in one revision — Across four Claude models run three times each, no trial invented a predicate that did not exist

<!-- stat-card -->
**2.7 ms vs 1.3 ms** — Median latency of a gated write against an ungated one — Roughly double, and the extra time buys claim evaluation plus the signing and recording of a verdict

## Defaults built for human curators break down in front of agents

[Walk Before You Run](https://arxiv.org/abs/2608.16045), posted the same day by a University of Michigan team, takes on a familiar problem. It asks that a data-analysis agent understand what is actually inside a spreadsheet before it starts answering questions about it. The proposal is to make data exploration an explicit stage, one that identifies the logical tables behind physical sheets, interprets column semantics and recovers keys and relationships, and to make the resulting artifact something a person can inspect and correct. That is the direction of shaping data for a model to consume.

The gap the paper measured also sat below the surface rather than on it. Systems mostly manage to pull tables and columns out of a sheet, and the largest and most persistent gaps show up in logical understanding and relation recovery instead. In one task, a football-season workbook carried a bonus sheet that recorded, for each pair of teams, the bonus and the winner. Because it was laid out as a matrix rather than a row-wise table, the model never recovered it as a table at all, and the relations that should have hung off it disappeared with it. This is where the argument for a human-checkable checkpoint before analysis comes from.

The Quipu paper starts from the opposite end. Its first sentence says that agents now write knowledge graphs while knowledge-graph stores still carry the defaults set when humans curated them. It names four of those defaults, and argues that each one is individually convenient and that together they are untenable under agent workloads.

| The default | Why it was fine when humans wrote | Where it breaks when agents write |
| --- | --- | --- |
| Accept writes now and clean later | People write slowly enough that review keeps up | Well-formed, plausible and occasionally wrong facts pile up faster than review can drain them |
| Keep one time axis, or none | Human memory and logs fill in what the audit cannot see | Nobody can answer what was trusted, and what was permitted, at a given moment |
| Treat every writer's facts as equally trustworthy | There are few things to join and a person knows the context | Join an attested graph to a quarantined one and the result inherits the standing of the attested side |
| Leave governance to dashboards and middleware | Policy rarely changes and a person reconciles it by hand | The rules and the store drift apart with no mechanical check tying them together |

The posture the paper draws out of this is simple. Start strict, and let agents bear the cost of strictness. When a human was the curator, a strict store meant human rework, which is why it was never affordable. When the writer is an agent the arithmetic changes. If the refusal comes back carrying structured feedback, the party absorbing the retry is the agent rather than a person.

## Judging the post-write state at the door

The first design principle is that no fact enters the store except through a gate. But the real fork is in what the gate looks at. Not the request, and not the state just before the write, but the state that the write would create.
