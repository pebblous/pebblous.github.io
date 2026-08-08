---
title: A Paused Agent Resumes on a Model That Changed While It Waited
subtitle: A new arXiv paper carries the isolation problem databases solved 40 years ago up to the semantic layer
date: 2026-08-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Paused Agent Resumes on a Model That Changed While It Waited

_A new arXiv paper carries the isolation problem databases solved 40 years ago up to the semantic layer_

## Executive Summary

> [!callout]
> An agent that sat still for two hours waiting on an approval starts moving again. In those two hours the search index was rebuilt and the model alias came to point at a new version. The resumed run finishes its answer on premises that differ from the ones it gathered evidence under, and not one call fails. Runs now stretch for hours through pauses and retries, through branches and delegation, while the prompts, model aliases, search indexes, and policies underneath them ship on their own schedules, unaware of each other. The name in the code holds still and only what that name points at moves.

> Barzan Mozafari posted the paper to arXiv on August 5. Its claim is that when saved state meets changed premises inside one run, every call can succeed and the result can still contradict itself. A source audit of the 100 most-starred public repositories containing runnable LangGraph code found that 7.4% of codebases using durable workflows reference live or runtime-selected resources with no immutable binding in sight.

> For practitioners, the formal proofs matter less than one property of this failure: it is quiet. No exception, no failed retry, nothing in the logs but a clean completion. What follows walks through the four names the paper gives that gap as it formalizes it into a database isolation problem, what each one looks like in production, and what the data side has to record for any of them to be detectable at all.

### Key Numbers

Source: [arXiv:2608.05412](https://arxiv.org/abs/2608.05412)

This is not a risk waiting to arrive. It was measured in code that is already deployed.

<!-- stat-card -->
**7.4%** — Codebases referencing resources unguarded — Share running durable workflows with no immutable binding visible in the source

<!-- stat-card -->
**100** — Public repositories audited — Top-starred repos with runnable LangGraph code, not a synthetic benchmark

<!-- stat-card -->
**Microseconds** — Cost of the prototype's checks — Time scale at which SemIso blocks incompatible resources and unsafe branch merges at runtime

## Nothing Shows Up in the Error Log

Picture an agent parked in front of an approval request. Step 1 searched the internal document store and gathered the evidence; step 2 will turn that evidence into an answer. The reviewer takes two hours to click approve, and during those two hours a nightly batch rebuilds the search index. The resumed run finishes its answer on top of the new index. The world the evidence came from and the world the answer was written in are not the same world.

This failure never surfaces as an exception. The retrieval succeeded. The model call succeeded. No retry fired, no timeout tripped. What the observability stack shows is one run that completed normally. That is exactly the point the paper presses on: a workflow ends up mixing state it saved with premises that moved underneath it, and the result can be internally inconsistent while every single call reports success.

The harder part is that none of the names change. In the paper's phrasing, stable names acquire new behavior. The model alias in the code is the one from last month, the prompt template lives at the same path, the vector index answers to the same identifier. What moved is the thing those names point at today. From the deployment pipeline's side this is a routine update. From the running workflow's side the ground has split.

## The Run Outlives the Environment It Started In

The paper sets its condition in the first sentence. AI executions can now outlive the environments they started in. Work that used to fit inside a single model call now unfolds across pauses and retries, across branches, subagents, and tool calls the model chooses at runtime. The longer a run lives, the more room there is underneath it for resources to be swapped out.

The diagram below lays two clocks on top of each other. The upper track is the workflow's progress; the lower one is the deployment schedule of the resources that workflow depends on. Neither track knows the other exists.
