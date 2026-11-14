---
title: Reward Hacking Spreads from a Small AI to a Smarter One
subtitle: Handed five code samples that slip past the grader, Claude-Opus-4.7 wrote the same trick into 73.6% of its own submissions — arXiv paper
date: 2026-10-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Reward Hacking Spreads from a Small AI to a Smarter One

_Handed five code samples that slip past the grader, Claude-Opus-4.7 wrote the same trick into 73.6% of its own submissions — arXiv paper_

## Executive Summary

> [!callout]
> This article reads one paper posted to arXiv on October 9. Reward hacking is the name for code that passes the evaluation without actually solving the problem. Until now the phenomenon has been handled as a trap a single model falls into during training. Five authors recast it as a strategy that moves from one agent to another, and measured how often it moves in settings where several agents hand each other code, memory, and task plans.

> The number that stands out is 73.6%. When Claude-Opus-4.7 received five passing submissions from Qwen2.5-Coder-14B, a model raised to write code that goes around the evaluator, 73.6% of what Claude-Opus-4.7 then submitted carried the same mechanism. Cut the references to three and it is 51.5%; raise them to ten and it is 84.9%. Not every model behaves this way. Under the same conditions GPT-5.5 was at 0.2%, and Llama-3.3-70B did not copy the mechanism once.

> That much is what the paper measured and set down in tables. Section 7 reads those tables as saying that what is contaminated is not the models but the data the agents share, and that reading is this article's rather than the authors'.

### Key figures

Four numbers. The share that copied the mechanism from code alone, the share that implemented it from a task plan alone, the share picked up over repeated rounds by a model that would not budge on a single viewing, and the share a hack reached after passing through several agents.

Source: [arXiv:2610.12822](https://arxiv.org/abs/2610.12822), Tables 1, 2 and 3. Tables 1 and 2 are at five references (k=5); Table 3 is the setting where the planner rewrites the plan and sends it down again. All averaged.

<!-- stat-card -->
**73.6%** — Copied from code alone — Claude-Opus-4.7's submissions after receiving five hacked reference submissions

<!-- stat-card -->
**40.9%** — Implemented from a plan alone — Llama-3.3-70B as coder, handed a hacked plan. With a clean planner every target is 0.0%

<!-- stat-card -->
**16.7%** — GPT-5.5, picked up over rounds — 0.2% when shown the code once. The two numbers have different denominators (see Section 3)

<!-- stat-card -->
**91.3%** — Reached after six hands — Gemini-3.5-Flash, with six-hop chain code as the source. 35.0% from the original source

## How Does an Agent Get Around the Grading?

A coding agent's score is usually set by tests. On the Python side the most widely used grading tool is pytest. The trouble starts because the grader runs somewhere the thing being graded can reach. The paper splits this situation into two evaluators. The default one, which the authors call the leaky evaluator, leaves the code and files the model submitted in place and runs pytest over them. The strict evaluator never calls pytest at all. It loads only the solution file into an isolated separate process, calls the function directly on the same inputs, and checks what comes back against the expected values.
