---
title: Amazon Shuts Down Mechanical Turk, and Its Human Labels Were Already AI
subtitle: Twenty years after launch, Amazon stops accepting new customers as one study estimates up to 46% of crowdworkers used an LLM to complete their tasks
date: 2026-07-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Amazon Shuts Down Mechanical Turk, and Its Human Labels Were Already AI

_Twenty years after launch, Amazon stops accepting new customers as one study estimates up to 46% of crowdworkers used an LLM to complete their tasks_

## Executive Summary

> [!callout]
> Starting July 30, 2026, Amazon will no longer accept new customers for Mechanical Turk (MTurk). On the same day, SageMaker Ground Truth and Amazon Augmented AI will also close to new users. The original crowdsourced labeling service, launched in 2005 under the slogan "Artificial Artificial Intelligence," is effectively retreating into maintenance mode after 20 years. And this exit is more than one service closing its doors: it strikes directly at the provenance of AI training data.

> The point is not the shutdown itself but what sits behind it. In 2023, one study estimated that 33–46% of Mechanical Turk workers completed a writing task using an LLM. Researchers believed they were entrusting judgment to people and collecting human signal, when in fact they were re-collecting a machine's guesses. The seat where humans once pretended to be AI has now been quietly taken over by real AI.

> So the question this event raises is not about data quality but about data provenance. Once you can no longer prove who or what produced a label, the accuracy and agreement metrics you would use to judge that label lose their meaning before you even reach them. Provenance breaks before quality. Mechanical Turk's exit shows that order in plain sight.

<!-- stat-card -->
**33–46%** — Estimated LLM use by workers — Abstract summarization task · Veselovsky et al. (2023)

<!-- stat-card -->
**20 years** — Mechanical Turk's lifespan — Launched in 2005 as 'Artificial Artificial Intelligence'

<!-- stat-card -->
**Jul 30** — New-customer cutoff date — Ground Truth · A2I close the same day

<!-- stat-card -->
**Nov 2022** — The provenance inflection point — Data gathered after ChatGPT carries a question mark

## A 20-Year Exit

Amazon said it will stop accepting new customers (requesters) for Mechanical Turk starting July 30, 2026. Existing customers can keep using it, but there are no plans to add new features — effectively, maintenance mode. On the same day, the data-annotation service SageMaker Ground Truth and the human-in-the-loop review pipeline Amazon Augmented AI (A2I) will also stop onboarding new customers. This is not a problem confined to Mechanical Turk alone; it is Amazon winding down its entire "human labeling" business line.

Mechanical Turk arrived in 2005. Its slogan was "Artificial Artificial Intelligence." Jeff Bezos coined the phrase himself, and it compressed the nature of the service into a single line. The model outsourced small, hard-to-automate tasks to people for tiny payments, and it called each unit of work a HIT (Human Intelligence Task). On the surface it looked like an automation service, but behind it real people were doing the answering — a twist baked into the name that was, itself, the business model.

![18th-century engraving revealing the human chess player hidden inside the automaton known as The Turk](./image/img-01-turk-automaton-reveal.jpg)
*▲ The original "Turk" that Amazon borrowed its name from — a chess-playing automaton that dazzled Europe in the 1770s, with a person hidden inside the cabinet | Source: [Wikimedia Commons (Public Domain)](https://commons.wikimedia.org/wiki/File:Turk-with-person.jpg)*
