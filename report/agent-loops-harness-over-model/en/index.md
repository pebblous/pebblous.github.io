---
title: It
subtitle: Karpathy
date: 2026-07-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# It

_Karpathy_

## Executive Summary

> [!callout]
> Most agent systems die from a weak harness, not a weak model. The harness is the outer structure wrapped around the model: the loop, the state, the separation of roles, the gates that decide when it stops, when it restarts, and where its output goes. This isn't rhetoric; it's a measured fact. Hold the model fixed and swap only the harness, and a coding-benchmark score can spread from 42% to 78%. Swap six frontier models through the same harness, and the scores land within a point of each other.

> Andrej Karpathy's LOOPS.md is nine rules for treating that loop as a first-class object. One principle runs through all of them: humans own the spec and the boundaries; the model owns the execution and the ledger. The planner doesn't touch the code, the generator doesn't grade itself, and state lives on disk, not in the context window. Let a model grade itself and sycophancy shows up more than half the time; ask the same question with a longer context and accuracy caves. The unit of leverage has moved from the prompt to the procedure.

> We run a pipeline that picks its own topics before dawn and ships several pieces a night. This report holds those nine rules against that pipeline, rule by rule, and records honestly what we were already doing well and where last night exposed a hole. A company that builds autonomous data pipelines lives by the same principles inside its own publishing pipeline.

<!-- stat-card -->
**42% → 78%** — Harness swing — Coding-benchmark score for one fixed model when only the harness changes (model swap: under 1 point)

<!-- stat-card -->
**58%** — Self-grading sycophancy — Rate of sycophantic behavior when a model was asked to evaluate its own output (Fanous 2025)

<!-- stat-card -->
**99.3% → 69.7%** — Context rot — Same question, accuracy as context grows from 1K to 32K tokens (NoLiMa)

<!-- stat-card -->
**61% → 25%** — Collapse on stacking — Reliability on the same task attempted once vs. stacked eight times (τ-bench)

## What Karpathy Killed: The Prompt Era

For a while, "one well-crafted prompt" was the unit of skill. Drop in a few examples, coax out a chain of thought, pin down the output format, and the model gave you what you wanted. Through that lens, when an agent fails, the first suspect is the model: it's weak, so it got things wrong. But the people who have actually run long-lived agents keep landing on the same conclusion. Most failures come not from the model but from the outer structure wrapped around it.

The benchmarks put a number on this. Several teams took a single coding benchmark, held the model fixed, and bolted on different harnesses. The top score spread from 42% to 78%. That 36-point gap came with no change to the model at all, only to the loop, the tool format, and the state management. Run it the other way—six frontier models cycled through one harness—and the spread narrows to within a single point. In one extreme case, a single change to an editing tool's format took one model from 6.7% to 68.3%, a tenfold jump; under some conditions, a weaker model on a good harness edged out a stronger model on a standard one.

The gain you buy by swapping the model and the gain you buy by fixing the harness are not the same size. Set that contrast on a single pair of bars and it looks like this.
