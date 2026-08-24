---
title: Advanced-Degree Occupations Delegate Less to AI Despite Tool Reach
subtitle: A delegation exposure index built from 53,000 publicly shared agent specifications matched to O*NET task statements, where the one gap availability cannot fill sits at the very top
date: 2026-08-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Advanced-Degree Occupations Delegate Less to AI Despite Tool Reach

_A delegation exposure index built from 53,000 publicly shared agent specifications matched to O*NET task statements, where the one gap availability cannot fill sits at the very top_

## Executive Summary

> [!callout]
> There is no shortage of indexes for how far AI reaches into an occupation. What the technology can do in principle. What of that has become a usable product. What people have tried out. All three ask the same question: does AI touch this work? A team at KAIST asked a fourth one. Did a worker hand the work over? Their evidence is not a chat log. It is the agent configuration files people have written and published in open repositories. A configuration only exists because someone wrote down the goal, the procedure and the tools in advance, and once written it runs again and again. So it is not a record of having tried something. It is a record of having committed to it.

> The map that comes out of that data barely touches the computerization risk map drawn in 2017. The overlap is far below what you would expect from shuffling the two lists at random. Delegation tracked whether the tools already reach a job far more closely than it tracked where people have actually been observed using AI. Writing a configuration costs effort, so people spend that effort only where the technology dependably works. And the curve peaks around bachelor's-degree occupations and falls away on both sides. The fall at the bottom has an explanation: the tools cannot yet do that work. The fall at the top does not. The tools reach it, and it was not handed over.

> The authors set two readings side by side and refuse to choose. Either that work cannot be written down in advance, or it can be and professionals are declining, slowing the rate at which their own work gets codified. Their data cannot separate the two. Either way, the line being drawn is not about capability. It is about **whether the work can be specified in advance**. Read that way, this is not a map of jobs AI has eaten. It is a boundary between work that has already become data and work that has not.

### Four numbers this report rests on

These four carry the argument. The first two say what the map is made of and how far it diverges from the old one. The third is the evidence that what moves this index is the reach of the tools rather than socioeconomic position, and the fourth is the size of the hole that reach does not fill.

<!-- stat-card -->
**53,515** — agent specifications analyzed — What survived filtering from 117,887 collected, matched all-to-all against 17,951 task statements

<!-- stat-card -->
**0.05** — overlap with the 2017 risk list — Jaccard index. Two unrelated lists would be expected to land at 0.23 to 0.33 (this report's estimate)

<!-- stat-card -->
**57.8%** — of the variation explained by availability alone — More than the 34.9% from a model with wages and education combined

<!-- stat-card -->
**−0.018** — shortfall for master's-level occupations — Against bachelor's-level occupations, surviving the availability control. Roughly 12% of the full AAI range

## A Fourth Layer of AI Exposure

Attempts to measure what AI does to work have run along three tracks for the last decade. The first asked what the technology can do in principle. Felten and colleagues mapped progress in AI capabilities onto job requirements. The second kept only the part of that potential that had turned into something you can actually buy and use. Eloundou and colleagues took as their test whether a large language model could cut the time to complete a task by at least half. The third went straight to the logs, counting how often each kind of work shows up in real conversations, as Anthropic's economic index does.

The paper's argument is that all three are variations on one question. Its own sentence: **"each measures how far AI could or does touch an occupation's work, not whether a worker has committed the work to it."** They measure how far AI reaches into the work. They do not measure whether the worker **handed it over**. The fourth layer the authors propose is delegation.

The four layers line up like this. The first three each correspond to an established family of measures; only the last is new here.

| Layer | What it measures | Representative work |
| --- | --- | --- |
| Capability | The technical ceiling | Felten et al. 2018, 2019 |
| Availability | The part of that ceiling that became a product | Eloundou et al. 2024 |
| Observed use | What people have been seen using | Handa et al. 2025, Massenkoff & McCrory 2026 |
| Delegated | What a worker has committed to AI | This paper's proposal |

Splitting the first three apart is itself a claim. Earlier work separated use from the rest, the authors note, but it did not pull availability out of capability. What is possible in principle and what has become a thing you can pick up are different questions, and folding them together makes it impossible to tell a job the technology cannot do from a job for which nobody has shipped a tool. Why that distinction matters comes back as the conclusion in section 5.

### 1.1. Why chat logs will not do

The obvious objection: if you want to know whether people have handed work to AI, why not read the conversations? The authors give two reasons. First, sessions and tasks do not line up one to one. One session mixes several jobs; one job is scattered across several sessions. Second, a prompt carries no commitment. A one-line question might be an experiment, used once and never again.

A configuration file is different on four counts, by the authors' account. The user wrote it. It describes what the work is at roughly the same level of abstraction as a job description. It costs effort to produce. And once produced it runs repeatedly. The third and fourth points do the real work: effort means people do not write one for just anything, and repetition means this is not a one-off trial.

Figure 1 of the paper draws the four layers as nested boxes. The caption reads **"Four nested layers … Each layer is nested within the one before it"**. The diagram below follows that structure, with one warning attached. This is a **conceptual** containment, not an ordering confirmed in the data. Whether delegation actually behaves that way is settled in section 4. It does not.
