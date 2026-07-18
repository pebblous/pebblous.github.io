---
title: AI Beat the Published Record in Only 16 of 90 Nature-Grade Tasks
subtitle: What NatureBench found when it set ten state-of-the-art coding agents against the SOTA of 90 Nature-family papers
date: 2026-07-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Beat the Published Record in Only 16 of 90 Nature-Grade Tasks

_What NatureBench found when it set ten state-of-the-art coding agents against the SOTA of 90 Nature-family papers_

## Executive Summary

> [!callout]
> Ten of today's most capable coding agents were set against tasks drawn from 90 Nature-family papers. The instruction was not to reproduce the papers, but to actually beat the best result each one reported. This is the design of NatureBench, a benchmark built by researchers at Tsinghua, Harvard, and Peking University. And the scorecard it produced leaves anyone who works with data an unexpected question.

> Even the best-performing model surpassed the existing record on only sixteen of the 90 tasks, or 17.8%. The other four-in-five could not clear the paper's bar. More telling is the character of the wins. Where an agent did prevail, it rarely invented a new scientific method; in most cases it recast an unfamiliar task as a familiar supervised-learning prediction problem and solved that instead.

> The causes of failure also run against the common assumption. Cases where an agent collapsed because it misunderstood the task itself accounted for just 3.1%. Most failures came from choosing the wrong method, or from running out of compute budget before pushing the chosen method far enough. Writing code, in other words, is no longer the bottleneck.

Four numbers hold up the result: the strongest model's rate of beating the record, the share of wins reached through an engineering path, and the gap between method choice and task comprehension that separated the failures.

<!-- stat-card -->
**17.8%** — Top model's rate of beating SOTA — Claude Opus 4.7, 16 of 90

<!-- stat-card -->
**82.7%** — Wins via an engineering path — Supervised translation, tuning, engineering combined

<!-- stat-card -->
**45.1%** — Leading cause of failure — Wrong method choice

<!-- stat-card -->
**3.1%** — Failures from misunderstanding the task — Running the code is not the bottleneck

## Ninety Nature-Grade Tasks, and Sixteen

Benchmarks that measure how well coding agents reproduce a paper already exist in number. NatureBench asks a step harder: can an agent go past reproduction and reach discovery? Put differently, can it beat the best performance a paper reported, on its own? The researchers drew 90 tasks from 90 peer-reviewed Nature-family papers, spread across six scientific domains — from single-cell omics and protein biology to physical modeling and molecular design.

Evaluation ran with web search fully disabled, so no answer could be looked up. Ten of the latest models were then run on top of three coding-agent environments (Claude Code, Codex CLI, and Gemini CLI) and pitted against one another. Each task was scored on a single question: did the run beat the best result the paper reported, or at least match it?

The strongest configuration was Claude Opus 4.7. Yet even this model clearly surpassed the existing record on only sixteen of the 90 tasks, or 17.8%. Widen the bar to tasks it beat or at least matched, and the figure is still just 47.8%, short of half. The remaining nine models scored lower, and the weakest beat the record on exactly one of the 90.
