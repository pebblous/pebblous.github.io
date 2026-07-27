---
title: Single-Agent Skill Determines Whether Multi-Agent Collaboration Pays Off
subtitle: The boundary line Google DeepMind and MIT confirmed with 260 controlled experiments
date: 2026-07-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Single-Agent Skill Determines Whether Multi-Agent Collaboration Pays Off

_The boundary line Google DeepMind and MIT confirmed with 260 controlled experiments_

## Executive Summary

> [!callout]
> Multi-agent systems are already deployed everywhere, yet it was never clear when collaboration among several agents actually beats one strong single agent. A joint team from Google DeepMind and MIT answered the question with a controlled experiment that held the prompt, the tools, and the compute budget fixed while varying only the coordination structure and the model's capability. This article reads what they found.

> The variable that best separated collaboration's gains from its losses was neither the architecture nor the number of tools. It was how well a single agent solved the task on its own in the first place — its baseline performance. Once baseline accuracy climbed past roughly 45%, adding agents brought almost no improvement, and the very same collaboration that lifted decomposable financial reasoning sharply pulled down sequential planning, where each step leans on the decision before it.

> So "how many agents should we add" turns out not to be a matter of architectural taste but a measurable decision. This article lays out what to measure first in order to make that call.

<!-- stat-card -->
**~45%** — Capability-saturation threshold — Above this baseline, adding agents stops paying off

<!-- stat-card -->
**+80.8%** — Financial reasoning — Gain from collaboration on a decomposable task

<!-- stat-card -->
**−70.0%** — Sequential planning — Drop from collaboration on a step-dependent task

<!-- stat-card -->
**94%** — Gain-sign prediction — Rate at which the baseline rule called the sign of the gain

## Agents Added on Instinct

For the past two years, systems that wire several agents together have carried something close to an article of faith: two are better than one, and one orchestrator makes it better still. Benchmark reports seemed to back the intuition up, since results kept showing scores rising as more agents were added.

The trouble is that the source of those higher scores was tangled together. Adding agents usually means more tool calls, more compute budget, and more total tokens as well. So it was never clear whether the score went up because of the collaboration structure itself or simply because more resources had been burned. The claim that "multi-agent is better" hardened without ever controlling for that confound.

The study Google DeepMind and MIT published in Nature Machine Intelligence aims squarely at this point. The team fixed the task prompt, the available tools, and the compute budget, leaving only the coordination structure and the model's capability as variables. Hold the resources still and change only the structure, and any difference in score belongs entirely to the way agents collaborate.

> [!callout]
> That a Big Tech lab (Google) and academia (MIT) put their names on the work together, and that its conclusion actually pumps the brakes on the multi-agent marketing those same companies sell, adds weight when you read the result.

## The Predictor 260 Experiments Found

The experiment spanned 260 configurations. Across six benchmarks — web browsing, financial reasoning, planning, work automation, software engineering, and terminal tasks — the team crossed five coordination structures with three LLM families. The coordination structures were a single agent (the baseline), parallel independent runs with no communication, a centralized orchestrator-led setup, a fully connected decentralized setup where everyone talks to everyone, and a hybrid that mixes hierarchy with limited peer communication.
