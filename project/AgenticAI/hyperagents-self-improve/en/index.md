---
title: AI That Rewrites Itself — Self-Referential Agents and Autonomous Data Operations
subtitle: Meta FAIR HyperAgents: a meta-agent that simultaneously modifies both itself and the task agent in a recursive self-improvement loop
date: 2026-03-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI That Rewrites Itself — Self-Referential Agents and Autonomous Data Operations

_Meta FAIR HyperAgents: a meta-agent that simultaneously modifies both itself and the task agent in a recursive self-improvement loop_

## Executive Summary

> [!callout]
> HyperAgents goes beyond the Darwin Godel Machine (DGM) to achieve domain-agnostic self-improvement across six domains: coding, math, science, language, games, and search. By making both the Task Agent and Meta Agent layers editable, it implements a recursive self-improvement architecture where the rate of improvement itself accelerates once metacognitive modification becomes possible.

> This research marks the beginning of an era where AI agents can evolve autonomously without external intervention. For Pebblous's Agentic AI Data Scientist (AADS) initiative, agent self-improvement is a core research direction, and HyperAgents' domain-agnostic architecture offers a design pattern directly applicable to data quality automation.

6

Test Domains

Coding · Math · Science · Language · Games · Search — domain-agnostic self-improvement validated

2

Agent Layers

Task Agent (executes goals) + Meta Agent (modifies agents) — both layers are editable

∞

Theoretical Depth

When metacognitive modification is possible, the rate of improvement itself improves — recursive self-acceleration

To understand HyperAgents, you first need to know the **Darwin Gödel Machine (DGM)**. DGM is an open-ended self-improving system where AI directly modifies its own code to improve performance. In coding tasks, agents generate variants of themselves, evaluate each variant, and select better ones — an evolutionary approach.

DGM's core strength is the alignment that "as coding ability improves, self-modification ability improves too." An agent that codes better can modify itself better. But this alignment has a fundamental limitation: **it only holds in the coding domain**.

"Prior self-improving systems rely on fixed, hand-crafted meta-level mechanisms, imposing fundamental limits on how quickly a system can improve."

HyperAgents removes exactly this constraint. It redesigns the architecture so that self-improvement works in **any domain** — coding, math, language, or games. The key is making the meta-agent itself editable.

HyperAgents consists of two agents and one loop. The task agent executes objectives; the meta-agent modifies both. Critically, **the meta-agent is also a target for modification**.

🧬 Meta Agent
                            Modifies self + task agentEditable program

modify→

🎯 Task Agent
                            Executes goalsEditable program

evaluate→

📊 Evaluate & Select
                            Measure performanceUpdate archive

↩

![HyperAgents self-referential loop — DGM-H architecture where the meta-agent simultaneously modifies the task agent and itself](./image/img-01-loop.png)
*▲ HyperAgents (DGM-H) architecture: the meta-agent edits both itself and the task agent in a recursive loop | Source: [arXiv:2603.19461](https://arxiv.org/abs/2603.19461)*

🧬

#### Meta Agent

Responsible for modifying the task agent. In HyperAgents, **it is also a modification target itself**. By improving the modification mechanism, it increases the rate of future improvements.

🎯

#### Task Agent

The agent that actually executes objectives. Continuously modified by the meta-agent. Each generation produces new variants; the best-performing variant becomes the parent of the next generation.

#### What is metacognitive self-modification?

Prior self-improving AI modified itself to "perform better." HyperAgents modifies itself to "improve better." This distinction seems small but is fundamental.

1st-order improvement (prior work)

Performance enhancement: modify the agent to solve tasks better

2nd-order improvement (HyperAgents)

Improvement mechanism enhancement: modify the meta-level so that **the improvement process itself** improves better
