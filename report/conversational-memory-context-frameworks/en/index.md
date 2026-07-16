---
title: Five Ways to Make a Chatbot Remember the Conversation
subtitle: Comparing Letta, Mem0, Zep, LangGraph, and LlamaIndex on memory and context management — and choosing the lightest fit for a dependency-free stack
date: 2026-07-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Five Ways to Make a Chatbot Remember the Conversation

_Comparing Letta, Mem0, Zep, LangGraph, and LlamaIndex on memory and context management — and choosing the lightest fit for a dependency-free stack_

## Executive Summary

> [!callout]
> Making a chatbot remember the conversation so far is usually not a matter of bolting on some grand long-term memory system. When a customer follows up with "So why is that?" and the conversation breaks, the cause is rarely a lack of intelligence — it is that the earlier turns were never placed in the prompt to begin with. That gap can be filled thinly, without any framework: send the conversation history along, and fold older turns into a summary once it grows long. To inform that judgment, this report dissects five representative memory frameworks through the lens of conversational memory and context management.

> One might object that "context windows are 1M now, so just put everything in." The data points the other way. Regardless of model size, performance degradation (context rot) accelerates once you pass roughly 30K tokens, and multiple independent studies find that the usable stretch of an advertised context is only about half of it. Summary folding is a defense of effective performance before it is ever a cost-saving trick.

> The five specialized tools differ in weight and philosophy, and their performance claims are mostly vendor self-reported and mutually contradictory. In particular Zep — the poster child of graph memory — discontinued its self-hosted edition, putting it squarely at odds with a stack that insists on being self-hosted and dependency-free. So this report's conclusion is a restrained roadmap. First priority: framework-free history plus summarization. The next step, when per-customer long-term memory or a graph of support records is genuinely needed, is to attach something like Graphiti or Mem0 alongside — not a wholesale adoption, but in the order the gaps actually appear.

<!-- stat-card -->
**O(n²)→O(n)** — Token curve of summary folding — ~86.5% cumulative token savings at 200 turns (illustrative estimate)

<!-- stat-card -->
**30K tokens** — Where context rot accelerates — Independent of window size — rebuts "just stuff it all in" (Chroma)

<!-- stat-card -->
**~90%** — Mem0's token-savings claim — vs. full context, vendor self-reported (arXiv:2504.19413)

<!-- stat-card -->
**2025-04** — Zep drops self-hosting — The only one of five to abandon self-host (Zep official blog)

## Every Turn Is a First Meeting

A language model is stateless by default. It answers based only on the prompt carried in a single request, and the moment it emits an answer, that conversation vanishes from the model's head. Everything outside the context window is a world that does not exist. So when you follow up with a support chatbot — "So why is that?" — it loses the earlier context and answers off the mark. We often call this "poor memory," but more precisely, the earlier conversation was simply never sent.

This diagnosis matters because it changes the difficulty of the fix entirely. If the problem were "the absence of long-term memory," you would need a heavy system with a vector database, a retrieval pipeline, and extraction logic. But if the problem is "the previous conversation wasn't sent," then simply loading the prior turns into every request solves most of it. The gap Pebblous's support product (internal codename No. 4) faces right now is exactly the latter. A large share of the memory problem is not that long-term memory is missing, but that the words just exchanged were never handed back.

> [!callout]
> In one sentence: **remembering well begins with not forgetting the previous conversation and handing it back.** Only after that comes the real long-term-memory question of "what should we keep for the long haul?"

### Sending the whole history makes cost grow quadratically

But implement "send the previous conversation along" naively and you soon hit a wall. If you re-send the entire conversation so far on every turn, input tokens balloon with the square of the conversation length — O(n²). At turn 10 you send the prior 9 turns; at turn 50 the prior 49 — so cumulative cost runs away. The alternative is simple: fold older turns into a fixed-size summary and keep only the most recent few turns verbatim. Then cumulative tokens converge to linear, O(n).

The table below estimates that difference with an illustrative model. Taking one support turn (question plus response) as an average of 150 tokens, Method A re-sends the full history every turn, while Method B keeps a fixed 600-token summary plus only the last 10 turns verbatim. This is not a figure from any specific paper — it is a calculation to compare the growth curves of the two approaches.

| Conversation length | Method A — re-send full history | Method B — summary + last 10 turns | Savings |
| --- | --- | --- | --- |
| 50 turns | 191,250 tokens | 92,250 tokens | ≈ 51.7% |
| 200 turns | 3,015,000 tokens | 407,250 tokens | ≈ 86.5% |

Illustrative estimate (our own calculation, not a figure from any specific paper). Converted at the Claude Sonnet 5 introductory input price of $2/M, the cumulative cost of a 200-turn conversation is about $6.03 for Method A and about $0.81 for Method B.

The widening gap is clearer as a picture. Below, cumulative input tokens are plotted against conversation length. Method A curves upward; Method B lies close to a gentle straight line.
