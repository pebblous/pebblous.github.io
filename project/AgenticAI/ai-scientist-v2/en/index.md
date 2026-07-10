---
title: The AI That Reads Papers and Runs Its Own Experiments
subtitle: AI Scientist v2: From Hypothesis to Paper, Autonomously — First AI-Generated Paper to Pass ICLR 2025 Workshop Peer Review (Then Withdrawn)
date: 2026-03-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI That Reads Papers and Runs Its Own Experiments

_AI Scientist v2: From Hypothesis to Paper, Autonomously — First AI-Generated Paper to Pass ICLR 2025 Workshop Peer Review (Then Withdrawn)_

## Executive Summary

v2

Fully autonomous  
experiments

1/3

ICLR 2025 workshop  
peer-review pass

~$25

Avg cost  
per paper

BFTS

Best-First  
Tree Search

> [!callout]
> Sakana AI's AI Scientist v2 is an agentic AI system that — given nothing but a research topic — autonomously carries out the entire research pipeline: hypothesis generation, experiment design and execution, data analysis, and paper writing. Released in April 2025, it moves beyond the linear pipeline of v1 by using Best-First Tree Search (BFTS), a tree-based algorithm that explores the research space in parallel.

> AI Scientist v2 submitted three fully AI-generated papers to an ICLR 2025 workshop, and one passed peer review — the first documented case of an AI-generated paper clearing human peer review. However, external evaluations of the passing paper also uncovered hallucinations, faked results, and overestimated novelty, exposing serious reliability challenges before real-world deployment.

> As AI research automation accelerates, training data quality becomes the critical bottleneck for system trustworthiness. Pebblous's DataGreenhouse and PebbloScope are the data infrastructure that strengthens the foundation of automated research loops — strategic partners for the era of industrial data automation that AI Scientist v2 is opening.

## Handing the Researcher's Role to Machines

Modern science is caught in a paradox of quantitative explosion. Millions of papers are published every year, and open datasets multiply exponentially. Yet the task of absorbing this vast body of knowledge and generating new hypotheses remains bottlenecked by human researchers.

Sakana AI first tackled this bottleneck head-on with AI Scientist v1 in 2024. The ML community reacted with intense interest — the idea that AI could generate ideas and run experiments was genuinely novel. But v1 had a constraint: it couldn't operate without human-written code templates.

v2, released in April 2025, breaks through that constraint. Define a research topic in markdown, and the system writes its own code, designs experiments, abandons failing paths, and concentrates resources on promising directions — all the way to a finished paper.

Paper Reference

"The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search"  

                            Yutaro Yamada et al. — Sakana AI, UBC, Vector Institute, Oxford  
arXiv:2504.08066 · April 10, 2025

The arrival of an era where AI conducts research goes beyond a technical milestone. Formulating hypotheses, designing experiments, interpreting results — these were the core acts of knowledge production. AI Scientist v2 is an attempt to implant an algorithm into that core.

## AI Scientist v1: The Linear Pipeline Starting Point

v1 was the first end-to-end system to automate machine learning research. Its structure was simple: a linear pipeline of idea generation → experiment design → experiment execution → result analysis → paper writing. Each stage was handled by an LLM, with code editing handled by `aider-chat`.

| Item | AI Scientist v1 | AI Scientist v2 |
| --- | --- | --- |
| Code template | Human-written baseline required | Not needed — fully autonomous generation |
| Experiment style | Linear sequential pipeline | Best-First Tree Search (parallel) |
| Scope | Specific domain, clear objective | Open-ended, diverse ML domains |
| Code editing | aider-chat based | LLM direct generation/editing |
| Reviewer | Standard AI review | VLM feedback loop integrated |
| Stability | High (well-defined structure) | Lower (exploratory, open-ended) |

The decisive limitation of v1 is its **template dependency**. Even if given a task like "optimize the learning rate schedule for a diffusion transformer," it cannot operate unless a human has pre-designed the code structure for that domain. This means v1 was effectively "automated repetition of human-designed experiments" rather than true research automation.

The linear pipeline is also brittle in the face of failure. When an experiment fails, the only strategies are to debug or give up. In complex search spaces, it gets stuck in local minima without finding an optimal path.

## v2's Innovation: Best-First Tree Search

v2's core innovation is a paradigm shift in how experiments are explored. Instead of a linear pipeline, it navigates the research space using a tree structure called **Best-First Tree Search (BFTS)**.

The intuition is borrowed from chess engines. Just as a chess engine considers all possible moves but concentrates computation on the most promising ones, BFTS prioritizes the most promising research paths while pruning failing branches.
