---
title: A Cheap LLM Judge Matched Frontier Models at Citation Verification
subtitle: GPT-5-mini scored F1 0.908 on source relevance, but pass-rate bias ranged from 42.9% to 72.0% across judges
date: 2026-07-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Cheap LLM Judge Matched Frontier Models at Citation Verification

_GPT-5-mini scored F1 0.908 on source relevance, but pass-rate bias ranged from 42.9% to 72.0% across judges_

## Executive Summary

> [!callout]
> A deep-research agent attaches a footnote to every claim it makes. The links usually resolve, and the titles look on-topic. But to check whether those footnotes are actually right, the received wisdom has been that you need to stand up another large model as the grader. A recent benchmark knocks that assumption head-on.

> A paper released in July 2026 scored eight off-the-shelf LLM judges against 1,248 gold-labeled items. On the task of deciding whether a source is relevant to the topic, the low-cost model GPT-5-mini landed highest at F1 0.908, ahead of the frontier models. That means verification can be automated cheaply. These figures come from a controlled benchmark, so read them as values the study reported rather than settled fact.

> The trouble starts next. All eight judges rated citations more strictly than the human gold pass rate of 79.3%, but that strictness spread from 42.9% to 72.0% across models. In other words, judges with the same F1 still err in different directions. Use that bias directly as a reinforcement-learning reward, the paper insists, and the direction gets amplified inside the training loop.

<!-- stat-card -->
**0.908** — GPT-5-mini source-relevance F1 — Best of 8, ahead of frontier

<!-- stat-card -->
**42.9–72.0%** — Pass-rate range across 8 judges — All below gold's 79.3%

<!-- stat-card -->
**79.3%** — Human gold pass rate — Undercut by all 8 judges

<!-- stat-card -->
**39–77%** — Factual accuracy of deep-research citations — Prior work, even with 94% valid links

## Why deep research's footnotes are shaky

Ask a deep-research agent for a long answer and every sentence comes back with a footnote attached. It looks reassuring. Click a link and the page opens; even the title alone seems on-topic. But a link resolving and the document actually supporting the sentence in front of it are two entirely different things.

One prior study put a number on that gap. It parsed the citations produced by deep-research agents and measured them three ways: link validity came in above 94% and topical relevance above 80%, yet the share of citations that factually supported the claim landed at just 39% to 77%. Scaling the search tool from 2 calls to 150 dropped accuracy by an average of 42%. Looking harder did not make the footnotes any sturdier.

A natural question follows. If the footnotes are this unreliable, who verifies them, and how cheaply can that verifier be built? Where the earlier study questioned the trustworthiness of the citations themselves, this new paper takes aim at the verifier side.

## Eight judges, 1,248 verdicts, and a cheap model

The paper lined up eight off-the-shelf LLM judges in one place. It spread three families evenly: Claude (Haiku, Sonnet, Opus 4.6), Gemini (3.1 Flash Lite, Pro), and GPT (GPT-5-mini, GPT-5.4-mini, GPT-OSS-120B). The material under review was an adversarial benchmark seeded across several domains with deliberate factual errors and misleading citations. A human-reviewed gold set of 1,248 items, plus 378 hard cases where judges disagreed and a person arbitrated, became the baseline.

There are two axes of evaluation. One is source relevance: does the citation relate to the topic? The other is factual support: does the cited content actually back the claim? Relevance is the relatively easy call; factual support is far harder.

On source relevance, the winner was the low-cost model. GPT-5-mini topped all eight judges at F1 0.908 on the pass class, with agreement κ of 0.636. Frontier-tier models like Claude Opus 4.6 and Gemini 3.1 Pro sat below it. For deciding relevance, the assumption that the most expensive model is the best judge simply did not hold.

On the harder factual-support axis there was no separate winner. All eight models' confidence intervals overlapped, so they were statistically indistinguishable. By the raw numbers Claude Opus 4.6 edged ahead at F1 0.750, but not by a meaningful margin. On neither axis did the data support the hypothesis that a pricier model is a better judge.
