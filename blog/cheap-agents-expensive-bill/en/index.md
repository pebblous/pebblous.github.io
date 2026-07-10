---
title: Cheap Agents, Expensive Bills
subtitle: Claude Sonnet 5 cut the token price, but when data is weak, agents spin and the bill grows
date: 2026-07-05
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Cheap Agents, Expensive Bills

_Claude Sonnet 5 cut the token price, but when data is weak, agents spin and the bill grows_

## Executive Summary

> [!callout]
> Anthropic unveiled Claude Sonnet 5 on June 30. At its introductory rate, it runs $2 per million input tokens and $10 per million output. That is 40–60% cheaper than the flagship Opus 4.8, while closing much of the gap in agentic coding. The headlines converged on one line: "You can now run your agents for less." But that headline is only half right. The other half is what decides the bill.

> Over the same stretch, the blended token price fell 67% in a year — yet enterprise AI bills rose 320%. At the root of that paradox is the agent loop, and what makes the loop run longer is weak data. Fully 85% of failed agent tasks trace back to data quality problems.

> So the axis of competition has moved. It is no longer the token price; it is the cost per completed task. A cheap model only lowers the starting line. When the data is weak, the agent spins its wheels, and the cost of reaching the finish line grows instead.

### Key Numbers

Read separately, the four numbers below are just statistics. Read left to right, they become a single chain of cause. The price clearly fell (−67%), yet the bill swelled anyway (+320%); what filled the gap was the lengthening agent loop (~50×); and most of what stretched that loop was weak data (85%).

Sources: [TechCrunch](https://techcrunch.com/2026/06/30/), EY, Gartner, KPMG (2025–2026)

<!-- stat-card -->
**−67%** — Blended token price — $18.40 → $6.07 (YoY)

<!-- stat-card -->
**+320%** — Enterprise bill — Avg. budget rise, same period

<!-- stat-card -->
**~50×** — Cost of a 10-turn session — vs. single call, context piles up

<!-- stat-card -->
**85%** — Cause of agent failure — Root cause is data quality

## The Price Fell — So Why Is This News?

Sonnet 5's price tag is genuinely attractive. The introductory rate, in effect through August 31, is $2 per million input tokens and $10 per million output. Standard pricing rises to $3/$15 in September, but even then it stays below Opus 4.8 ($5/$25). It is also unusual that Anthropic led with an introductory rate at all. A company spokesperson said they "want customers to test at the lowest cost against their real workloads."

But the real news isn't the numbers. On this announcement, TechCrunch was blunt: agentic capability is now "table stakes," and the contest has shifted to "how cheaply, and how reliably without human intervention, a system can carry a task all the way through." It reads less like a price cut and more like a declaration — the era of showing off capability is over, and the economics of completion has begun.

> [!callout]
> So reading this announcement as merely "a price-cut story" misses half of it. Anthropic playing the introductory-rate card, and the industry starting to talk about "cost per completion" instead of benchmarks, are the same signal: the axis of the contest is moving from token price to task completion.

## Price Down 67%, Bill Up 320%

Over the past year, the blended token price fell from $18.40 to $6.07 per million tokens — a 67% drop, measured across 2.4 billion API calls. By common sense, the bill should have shrunk too. Yet over the same period, enterprise AI budgets climbed from an average of $1.2 million to roughly $7 million — about 320% higher. The price is falling while spending rises. Where is it leaking?

### 2.1. First, the price cut itself may be an illusion

Sonnet 5 uses a new tokenizer. That means it splits the same text into roughly 30% more tokens than before. Even with the sticker price unchanged, effective cost can run 10–35% higher on certain workloads. Developer Simon Willison observed token counts inflating by up to 1.46× on one system prompt. The number on the price tag and the number on the bill are, in effect, two different languages.

### 2.2. The real bill comes from the loop

An agent isn't called once and done. Every turn, it resends the entire conversation so far. So a 10-turn session doesn't cost 10× a single call — it costs about 50×. Cost grows as a quadratic function of conversation length. Break down a busy coding agent's day and you find that 99% of the tokens processed are input tokens re-reading the accumulated trajectory; actual generation is just 1%.
