---
title: Released Paper Code: AI Agents Ran It, and Half of It Failed
subtitle: The reproducibility bottleneck is runtime, dependencies, and data alignment — the distance between 
date: 2026-06-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Released Paper Code: AI Agents Ran It, and Half of It Failed

_The reproducibility bottleneck is runtime, dependencies, and data alignment — the distance between _

## Executive Summary

> [!callout]
> When we read a paper and see the line "the code is on GitHub," we tend to believe we can run those results again. But download that code onto a blank machine and run it from the start, and the story changes. Between 2024 and 2026, a series of benchmarks asked AI agents to do exactly this: here is the paper and the code, now reproduce the results starting from an empty environment. This article reads the numbers those experiments produced through the lens of data quality.

> Even in the area where they did best, the top agent's reproduction rate was 54.1%. That figure comes from AutoMat, a benchmark in computational materials science; on PaperBench, which asks agents to replicate a paper from scratch, it drops to 24.4%. The problem was not that the models could not write code. The walls stood in three places: runtime, dependencies, and data alignment. What had collapsed was not the code itself but the conditions surrounding it.

> So "released" and "runnable" are not the same words. Even when the code is up, if the environment spec, the dependencies, and the data pipeline are not provided alongside it, that code does not execute immediately — not for a human, and not for an AI. The reproducibility crisis is the "AI-Ready" problem we have long discussed about data, repeating itself on the code side.

### Key Numbers

Sources: [PaperBench (OpenAI, arXiv:2504.01848)](https://arxiv.org/abs/2504.01848), [ResearchCodeBench (arXiv:2506.02314)](https://arxiv.org/abs/2506.02314), and others

The four numbers below trace the road a single paper travels to run again. They begin with the share of papers that release code at all (19.5%), pass through the share of released code that breaks on first run (74%), and reach both the highest figure an AI agent managed to reproduce (54.1%) and the ceiling a human researcher hit on the same task (41.4%).

<!-- stat-card -->
**54.1%** — Top agent reproduction rate — The highest share at which a coding agent re-created a paper's results, on the AutoMat benchmark

<!-- stat-card -->
**19.5%** — Code release rate — Share of major ICLR/ICML/NeurIPS 2024 papers that actually released a code repository

<!-- stat-card -->
**74%** — First-run error rate — Share of released research code files that fail on first run in an untouched environment

<!-- stat-card -->
**41.4%** — Human researcher ceiling — Reproduction rate when ML PhDs spent 48 hours replicating the same paper from scratch

## The "Run It from Scratch" Test

There are many ways to measure reproducibility. The strictest is to make everyone — human or AI — start from the same conditions. You hand over only the paper text and, if there is any, the code, and you begin from a blank environment with nothing installed. Re-create the core numbers the paper reported, and it counts as a success; fail, and it counts as a failure. Recent benchmarks share this "from scratch" setup.

AutoMat had coding agents reproduce the results of computational materials science papers. [PaperBench](https://arxiv.org/abs/2504.01848), built by OpenAI, asks agents to replicate twenty ICML 2024 papers from scratch and scores them across 8,316 fine-grained subtasks. [ResearchCodeBench](https://arxiv.org/abs/2506.02314) draws 212 implementation tasks from top 2024–2025 ML papers and grades purely on whether the code actually runs, with no LLM judging. Princeton's [CORE-Bench](https://arxiv.org/abs/2409.11363) hands over 90 papers together with their code and data, and still asks whether they reproduce.

What these four experiments have in common is that they do not measure coding ability alone. Setting up the environment, matching the dependencies, putting the data in its proper place — all of it falls to the agent. So when the score comes out low, it does not mean the model cannot write code; it signals that the model could not satisfy the conditions outside the code.
