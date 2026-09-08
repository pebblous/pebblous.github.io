---
title: Public API Training Data Built From Only the Tool Links That Actually Ran
subtitle: LG CNS
date: 2026-09-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Public API Training Data Built From Only the Tool Links That Actually Ran

_LG CNS_

## Executive Summary

> [!callout]
> A paper five LG CNS researchers put on arXiv on September 4 inverts the order in which tool-calling training data gets made. The usual recipe generates a large pile of plausible scenarios first and then filters out the strange ones. This team took 2,318 Korean public API tools, checked by actually calling the live endpoints whether one tool's output can supply another tool's input, and then walked the graph of surviving links to assemble trajectories.

> Of the candidate links a large model had scored as feasible, 50.2% actually executed. Nothing before the call distinguished the dead links from the live ones, and a trajectory built on a dead link becomes a training label all the same. A 9-billion-parameter model trained on the filtered data closed the gap to an untuned 27-billion-parameter model to 1.7 percentage points.

> Sections 1 through 3 report what the paper reports. Section 4, which revisits how far the execution guarantee reaches and asks where the equivalent execution point sits in our own domain, is this article's reading and is not in the paper.

### Key Figures

Source: Kim et al., [Multi-Step Tool-Calling over Korean Open Public APIs](https://arxiv.org/abs/2609.05395), arXiv:2609.05395 (2026-09-04, accepted to the EMNLP 2026 industry track)

<!-- stat-card -->
**50.2% → 62.7%** — Share of links that actually execute — From the model-scored candidate graph to the graph filtered by live calls

<!-- stat-card -->
**1.7 pp** — Gap between the trained 9B and the untuned 27B — pass@1 of 0.4310 against 0.4482 over 145 tasks, at one-third the parameters

<!-- stat-card -->
**+22.6 pp** — Gain on platforms withheld from synthesis — 4B model, pass@4, larger than its +15.9 pp over the full benchmark

<!-- stat-card -->
**224,958** — Records consumed at a single junction, at most — Median 27, against a median of 1 in existing tool-use datasets

## Only Half the Links the Large Model Picked Actually Worked

The work starts by building a benchmark. Its name is KOPA-Bench. The researchers picked ten public API platforms across six domains, namely traffic, finance, education, law, politics and district administration, on three selection criteria: the domains had to be ones where public institutions genuinely open APIs, the platforms had to allow calls to be chained across them, and the Korea Open Government License had to permit derivative works. Parsing each platform's official documentation into a Model Context Protocol server yielded 2,318 tools, every one of them backed by a live endpoint. There are 145 tasks; a task takes five calls on average and up to fourteen, and 59% involve parallel execution.

The paper opens with two failure modes. One is skipping a prerequisite code lookup. The agent queries straight from a company name, but the API wants a corporate code, and one more lookup belongs in between. The other is ignoring pagination. The response arrives split across several pages and the agent answers from the first page alone. A finance-domain task in the appendix shows both at once. The question asks the agent to find the convertible bond Lightron issued in January 2026 and compute how far the previous day's closing price sits above the refixing floor price. Look up the corporate code, retrieve the convertible-bond issuance decision for the floor price of 532 won, look up the prior close of 1,680 won, and finish with the arithmetic for 215.78%. Drop any one of the four steps and no answer comes out.

Making training data for tasks like these requires knowing first which tool's output becomes which tool's input. Phase A of the pipeline the team named EDGE draws that map. Scoring all 2,318 tools pairwise is infeasible, so a dense retriever over signature embeddings narrows the candidates per tool: 15 neighbors from the same domain and 10 from other domains, where bindings are rarer. Each surviving candidate then gets a single call to Qwen3.5-122B, which returns a feasibility score and a parameter binding set, and anything below 0.3 is dropped. This is also where prior graph-based synthesis pipelines stop. As the paper's related-work appendix sets it out, Magnet, BUTTON and APIGen-MT link calls through signatures or model-proposed plans, while ToolACE adds a separate verification stage that is not aimed at live APIs. Two assumptions are common to all of them: links between calls are fixed without ever being checked against the live APIs, and each call is assumed to return a single result.

The appendix carries the prompt that told the scoring model what to judge on. It states explicitly that fields meaning the same thing should be bound even when their names differ. A mapping table shows that SIGUN_NM, REGION_NM and rgn all mean region name, and the prompt insists that a binding must not be rejected merely because the field names look different. That is an instruction to judge by meaning. Whether a semantically sound link also survives a call is a separate question.

Phase A's second half inverts the order. Rather than using the graph as drawn, the loop samples paths and executes them against the live APIs. It runs 100 iterations, sampling 500 paths in each. Thompson sampling decides which links to try, and successes and failures update each link's Beta posterior. Failures are split in two and treated differently. Structural failures, where the binding itself is wrong, are penalized heavily; environmental failures such as a transient server error are penalized lightly. Without that split, an incidental error would kill a sound link. A link whose posterior falls below the viability threshold is cut from the graph.
