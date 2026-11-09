---
title: On the PMO Drug Molecule Test, Does the AI Discover or Look Up?
subtitle: Hiding the task name and the reference molecule drops an LLM agent
date: 2026-11-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# On the PMO Drug Molecule Test, Does the AI Discover or Look Up?

_Hiding the task name and the reference molecule drops an LLM agent_

## Executive Summary

> [!callout]
> A new paper argues that much of what AI agents score when they claim to find drug candidate molecules in very few tries comes from hints printed on the exam paper itself. Researchers at the University at Buffalo and MBZUAI posted it to arXiv on October 30. On PMO, a molecular optimization benchmark, erasing the task name and the reference compound from the prompt pushed the summed AUC of their GPT-4o mini agent down to 4.85. With both shown, the same agent scored 14.44.

> The sharper number belongs to a baseline that never calls an LLM at all. A procedure that submits the reference compound it was handed and then works through single-atom variants in a fixed order scored 12.16, or 84% of the 14.44 the agent earned with every piece of information in front of it. None of this adds up to a case against LLMs. A population-based agent that never pulls in the reference compound beat REINVENT, the classic reinforcement learning method, at the same call budget.

> Sections 1 through 4 follow the experimental design and the numbers the paper reports. Section 5, which reads the same opening into the evaluation data companies keep in house, is this article's own interpretation.

### Key Numbers

Source: Qin et al., [What Are LLM Agents Actually Learning on Low-Budget Molecular Optimization Benchmarks?](https://arxiv.org/abs/2611.08522), arXiv:2611.08522 (October 30, 2026)

The two numbers in the first card below are one agent solving one set of tasks, and all that separates them is what the prompt said. The second card shows that with the same information in hand an LLM becomes optional, the third says how much of the answer the test gives away before anyone starts, and the fourth is what all of it cost to run.

<!-- stat-card -->
**14.44 → 4.85** — Summed AUC before and after blinding — 23 PMO tasks solved on a budget of 50 oracle calls

<!-- stat-card -->
**12.16** — Retrieval-only score with no LLM — 84 percent of the fully informed agent's 14.44

<!-- stat-card -->
**14 of 23** — Tasks naming a drug or a target — The identifier itself says what the test is looking for

<!-- stat-card -->
**$0.63** — API cost of the whole experiment — Ledger total including discarded smoke tests. No special hardware to copy it

## What the PMO Test Measures

PMO, short for Practical Molecular Optimization, is a shared test bed built in 2022 so that algorithms searching for drug candidate molecules could be compared side by side. Twenty-three tasks run through a single oracle interface. The oracle is a scorer that takes one molecule and returns one number, and depending on the task it reports how closely the molecule resembles a particular drug or how well it is likely to bind to a particular target protein. A contestant submits a molecule, reads the score, and edits the next molecule accordingly.

What makes the test distinctive is the cap on how often you may ask. In real drug discovery, evaluating a single molecule is itself expensive, so the value of an algorithm turns on how few questions it needs before it lands on something good. The oracle may therefore be called only 50 times, and the area under the curve of the running best score is measured and summed across the 23 tasks. The faster a method reaches a good molecule, the larger the sum.

Reports of LLM agents far outrunning classical algorithms on this test have been arriving steadily. The one the paper names first is SEISMO, a workflow built on Claude Opus 4.5, which reported a summed AUC of 18.12 at 50 calls in its August 2026 v3. REINVENT, a reinforcement learning method from 2017, earns 7.06 on the same budget, so the gap is more than double. Work reporting 15.42 under a 1,000-call setting is cited alongside it.

The exam paper, however, carries quite a lot of readable text. Fourteen of the 23 tasks spell out a drug name or a target name inside the task identifier itself. Sometimes the drug to be found is written out in full, as in celecoxib_rediscovery; sometimes the abbreviation for the target protein is the whole identifier, as with drd2 and jnk3. A model that read the chemical literature on the open web during pretraining can summon a near-correct molecule from that name alone. The standard prompt then adds the oracle description and the reference compound on top. The reference compound is the exemplar molecule the task wants you to resemble, which on a similarity task amounts to coordinates next to the answer.

> [!callout]
> The SEISMO side was not blind to this. The same v3 report wrote down its own number for a fully anonymous condition with every task description stripped out, where the score drops to 8.50. The new paper takes that one line as its starting point and pushes it until the name and the reference molecule come apart.

## With Both Hidden, the Score Falls to a Third

The researchers stood up an agent of their own and reproduced the standard condition exactly. Running GPT-4o mini with the task name, the oracle description and the reference compound all in the prompt, they measured a summed AUC of 14.44. The 18.12 in the previous section came from a different model and a different architecture; every one of the four numbers that follow is this single agent, measured again with the conditions switched. Two things were switched: whether the task name and description appear, and whether the reference compound appears.
