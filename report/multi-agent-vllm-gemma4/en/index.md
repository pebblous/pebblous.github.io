---
title: When AI Started Fixing AI
subtitle: 100 agents raised Gemma 4
date: 2026-06-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When AI Started Fixing AI

_100 agents raised Gemma 4_

## Executive Summary

> [!callout]
> In June 2026, Hugging Face co-founder Thomas Wolf posted a short tweet. More than 100 AI agents, he wrote, had spent a week in open collaboration raising Gemma 4's vLLM inference speed 5×. The headline everyone latched onto was "AI collaborated." But the part worth pausing on lies elsewhere. The agents weren't discovering drugs or analyzing data — they were fixing the infrastructure that runs AI itself: the kernels of the inference engine. AI, once a tool for solving external problems, had moved into the seat where it works directly on the system that runs it.

> The 5× is no magic trick; it is the product of diagnosable engineering. Gemma 4 is built in a way that disables the standard attention kernel, so vLLM fell back to a slow detour path — and on some GPUs that pushed throughput down to 9 tok/s, nearly 14× slower than comparable models. Simply restoring an abnormally low starting line to normal already explains the 5× on technical grounds. The tweet, though, was cut off at "but," and after that "but" there are almost certainly conditions and limits.

> What we focus on is exactly what comes after that "but." When 100 agents pour out patches at once, the verification and curation that decide what to keep and what to discard were the invisible infrastructure holding up the 5×. In an era where AI fixes AI, the real bottleneck is not compute but data quality. This piece takes the 5× apart and follows the real bottleneck beyond the truncated tweet.

**Editor's note.** What makes performance, at the boundary between AI and data — that is the question Pebblous keeps returning to. This piece does not indulge the "AI replaced humans" hype. Wolf's experiment was an open collaboration that humans and agents took part in together, and the measurement conditions behind the 5× were never published, because the tweet was cut off. So every figure here was re-checked against primary sources (the vLLM issue tracker, official blogs, papers), and we chose the phrasing "technically explainable" over flat assertion.

### The Numbers That Matter

Four numbers form the spine of this piece — the size of the gain and the cost hiding behind it, side by side.

<!-- stat-card -->
**5×** — final inference speedup — result of a week of open collaboration (measurement conditions undisclosed)

<!-- stat-card -->
**9 → 60–100** — tok/s recovery range — the span recoverable by normalizing the fallback kernel

<!-- stat-card -->
**100+ / 1 wk** — agents / collaboration window — collective work on a public message board

<!-- stat-card -->
**+58–285%** — multi-agent token overhead — hidden cost that grows with the collaboration structure

## What Happened — a Week of 100 Agents

It started with a one-line tweet. Thomas Wolf, co-founder and chief science officer of Hugging Face, wrote that "multi-agent collaboration is one of the most interesting agent behaviors right now," and that more than 100 agents had improved Gemma 4's inference speed in vLLM 5× over a week of open collaboration. Then the sentence broke off at "but." What the limits were, under what conditions the 5× held — all of that would have followed, but the published tweet stopped there.

The stage for this experiment was the Fast Gemma Challenge, run jointly by Google and Hugging Face. Participants watch, copy, and build on each other's optimization attempts on a shared message board — a format that is part competition, part collaboration. It wasn't a humans-only contest; coding agents took part in force, and the process and results piled up on a public dashboard exactly as they happened. "Open collaboration" means humans and agents moving together on one board. It was not an event where AI pushed humans aside.

That is why you have to look one layer beneath the surface story ("100 AIs collaborated"). Almost every famous multi-agent case so far has had agents performing an **external task** — searching for drug candidates, handling customer inquiries, operating industrial data. This experiment runs the other way. The agents fixed the ground they themselves run on: the kernels of the inference engine. It is a glimpse of an AI system stepping into the meta level of iteratively improving itself.
