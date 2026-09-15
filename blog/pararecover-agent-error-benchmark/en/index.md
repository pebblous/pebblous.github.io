---
title: AI Agents Can Find Their Own Mistakes but Not Fix Them
subtitle: ParaRecover, a benchmark of 10,626 parallel tool-call errors in 14 types, leaves all 16 models tested below 70 out of 100
date: 2026-09-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Agents Can Find Their Own Mistakes but Not Fix Them

_ParaRecover, a benchmark of 10,626 parallel tool-call errors in 14 types, leaves all 16 models tested below 70 out of 100_

## Executive Summary

> [!callout]
> When an AI agent calls several tools at once and something goes wrong in the middle, how well does it catch the error and repair its own plan? A new benchmark measures that ability on its own. It is called ParaRecover, it comes from a team at Dalian University of Technology in China, it went up on arXiv on 11 September, and it has been accepted to the main conference of EMNLP 2026. This article looks at what the benchmark newly measures, and at why building that yardstick is a question of data design.

> One number sums up the problem. Claude Opus 4.6 posts the highest average of any model tested and completes 94.78% of the tasks it is given. On those same runs, the score for how precisely it rewrote its plan is 55.18. The agent nearly always arrives, and along the way it piles up redundant calls and trial-and-error loops. One caveat sits underneath all of it: the benchmark runs in a controlled simulation rather than against live APIs.

> Sections 1 through 4 follow what the paper reports. Section 5 moves the findings toward data practice, and that reading belongs to this article rather than to the paper.

### Key figures

Source: [ParaRecover (arXiv:2609.12345, 11 Sep 2026)](https://arxiv.org/abs/2609.12345)

<!-- stat-card -->
**10,626** — labeled error cases — Part harvested from real execution logs, part built by injecting errors into clean trajectories. Split across two difficulty levels

<!-- stat-card -->
**69.23** — top model's average score — LEVEL-1 average out of 100. Claude Opus 4.6 leads and every other row sits below it

<!-- stat-card -->
**55.18** — same model's replanning score — It scores 78.94 on diagnosing the error. Rewriting the plan is where it stops

<!-- stat-card -->
**10.25% → 5.90%** — unexecutable plans — Qwen3-8B after preference training on the error labels. The same run moved completion from 91.84% to 94.30%

## Finishing Is Not the Same as Doing It Well

Agent evaluation mostly comes down to one question. Did the agent get the answer, and did it reach the end? Right answer, 1. Wrong answer, 0. The appeal is obvious: nobody has to make a judgment call, and the result collapses into a single number. That number also says nothing whatsoever about what the agent did on its way to the answer.

The paper's introduction puts the gap in one sentence.

“However, successful task completion does not necessarily imply reliable agent behavior. An agent may still complete the task through redundant calls, repeated trial and error, or incorrect recovery strategies, leading to high cost in real systems.”

Redundant calls, repeated trial and error, and botched recovery strategies all still finish the task. They finish it, and a real system pays for it. Tokens go out, external APIs get hit more often, the clock runs longer. A completion metric records none of that cost.

Other groups have tried to look at process. In the comparison table the paper assembles, ToolSandbox and TRAJECT-Bench already cover structured trajectories and parallel calls, and BFCL covers parallel calls too. Those benchmarks stop at whether a tool call succeeded and whether its format held. A separate line of reward-model benchmarks asks which of two whole trajectories is better, but that exercise ranks trajectories that mostly went right. No one had handed an agent a broken trajectory and started the clock there. In the table, exactly one row is ticked for tracing an error back to its source and for deciding to replan, and that row is ParaRecover.

| Benchmark | Structuredtrajectories | Parallelcalls | Error-stateevaluation | Reflectivelocalization | Replanningdecision | Processmetrics |
| --- | --- | --- | --- | --- | --- | --- |
| API-Bank | ✗ | ✗ | ✓ | ✗ | ✗ | △ |
| Tool-Bench | ✗ | ✗ | △ | ✗ | ✗ | △ |
| BFCL | ✗ | ✓ | ✗ | ✗ | ✗ | △ |
| ToolSandbox | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| TRAJECT-Bench | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| ParaRecover | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

Reproduced from Table 1 of the paper. ✓ marks support, ✗ marks no support, △ marks partial support.

The tasks come from the BUTTON dataset, and tool execution runs in a simulation rather than against real APIs. The authors explain the choice: the target is judgment under a mid-run error state, not the reliability of an external API, so they wanted a controlled environment. That buys reproducibility and the ability to inject errors, and it gives up the latency and shifting state of a live system. The authors list this first among their limitations.

## Failure, Sorted into Fourteen Boxes

An error taxonomy sits at the bottom of the benchmark. The agent's execution is modeled as a directed acyclic graph, where nodes are subtasks and tool calls and edges are the dependencies between them. On top of that model the authors carve out fourteen ways things can go wrong. Alongside the tool-call-level mistakes earlier work already covered, they mined large volumes of execution logs for the mistakes that only appear when work runs in parallel across several rounds.

| Family | Types | What goes wrong |
| --- | --- | --- |
| Structure4 types | Wrong dependency · Missing dependency · Wrong parallelization · Wrong serialization | Node 3 should hang off node 2 but is written to hang off node 1, or node 2 takes node 1's output as input yet is scheduled to run beside it |
| Parameters4 types | Wrong name · Invalid value · Missing required field · Wrong type | Passing begin-date where the schema lists begin_date, putting "2026/02/32" in a date field, or handing the string "16" to a field that wants the integer 16 |
| Tools6 types | Empty response · Timeout · Nonexistent tool name · Wrong tool choice · Missing necessary call · Redundant call | A tool returns nothing, a network problem runs out the clock, or the agent picks the wrong one of two tools that do similar things |

````  
Grouped by family from the error type definitions in Appendix C of the paper. The examples come from the same appendix.
