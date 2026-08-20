---
title: A Work Filter Cut Half the Conversations Out of AI Use Statistics
subtitle: MIT and Stanford researchers rebuilt the occupational filter from Anthropic
date: 2026-08-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Work Filter Cut Half the Conversations Out of AI Use Statistics

_MIT and Stanford researchers rebuilt the occupational filter from Anthropic_

## Executive Summary

> [!callout]
> Almost everything the public knows about how AI actually gets used comes from reports that vendors wrote about their own logs, using samples they selected themselves. The AI Observatory, released in August 2026, is the first large attempt to break that dependence. Researchers at a dozen or so institutions, MIT and Stanford among them, annotated seven public conversation corpora with verified consent grounds under a single taxonomy, then rebuilt the occupational classification gate that Anthropic had published under CC-BY and MIT licences and ran it back over their own data.

> The result was half. 47.9% of conversations were classed as non-occupational and dropped out before any task distribution was counted, and the discarded side was much denser in health, relationships, harassment and sexual content than the side that survived. That number should not be read as a finding about Anthropic's data. The paper itself refuses to present it as an estimate of Claude traffic. It is a finding about what one line of preprocessing does.

> The uncomfortable part is that this test was only possible because of Anthropic. The prompt and the taxonomy were published, so someone outside could run the same rule again. Anthropic has since changed its measurement method three times. The problem this report is about is not concealment. It is the absence of reproducibility.

### Four Numbers This Report Rests On

Four figures carry the argument. The first two show what a single rule removes from a statistic, and how differently that same rule behaves depending on which sample it meets. The second two show that holding the sample fixed is not enough, because the window of time also moves the conclusion. One of those came from the independent corpus, the other from a vendor's own data.

<!-- stat-card -->
**47.9%** — Excluded by the work filter — Of 22,956 conversations pooled from the six sources the gate could run on

<!-- stat-card -->
**34.2–61.9%** — Same rule, spread across sources — AI Archive lowest, LMSYS-Chat-1M highest

<!-- stat-card -->
**35% → 50%** — Personal use, weekday to weekend — The first thing Anthropic saw after switching to continuous sampling

<!-- stat-card -->
**+1,049.5%** — Growth in prompt length — Inside WildChat alone, April 2023 to July 2025

## 47.9% of What, Exactly

Start with what the study is. [**The AI Observatory: A Public Measure of Real-World AI Use**](https://www.dataprovenance.org/ai_observatory.pdf) is a preprint with three co-first authors: Shayne Longpre of MIT, Anka Reuel of Stanford and Dayeon Ki of the University of Maryland. The affiliation list runs through MIT, Stanford, Northeastern, Johns Hopkins, Berkeley, Carnegie Mellon, Brown, NYU, Waterloo and Maryland, along with EleutherAI and Cohere. What this group did was not build a model or release a benchmark. They **gathered conversations that were already public and annotated all of them against one yardstick**. Reuel's account of why is short. Of the usage statistics vendors publish, she says, **"There is no independent source to corroborate it."**

The haul is seven sources, 23,158 conversations and 85,633 turns. There are widely used public datasets such as WildChat and ShareGPT, Grok conversations crawled from public share links, and NIO data captured through browser instrumentation. Onto that they fixed a single taxonomy of 145 attributes, spanning four levels — prompt, response, turn and conversation — and grouped into nine families that run from language and media format through topic and sensitive use. Ten trained authors refined the scheme across five pilot rounds, and GPT-4.1 performed the actual annotation. How closely that automated labelling tracked human judgement was measured separately: two annotators independently labelled a validation set of 594 turns across 120 conversations, a third adjudicated disagreements, and the pipeline's output was compared against that consensus. Annotating all seven sources cost **$5,680**.

### 1.1. Borrowing Someone Else's Rule and Running It on Your Own Corpus

All of that is corpus construction. What made the study news is the experiment that followed. The 27 March 2025 edition of Anthropic's Economic Index works in two stages. A binary filter keeps only work-related conversations, and whatever survives is mapped by the Clio pipeline onto O*NET occupational task clusters. Anthropic published the system prompt and the taxonomy for that process. The researchers rebuilt it exactly and **ran it back over their own corpus.**

The rebuilt pipeline has five stages. ① The is_occupational_task binary filter decides whether a conversation is work-related; only what passes goes on to ② top-level cluster, ③ mid-level cluster and ④ base-level cluster, before ⑤ multi-label assignment of occupational skills. Conversations judged non-occupational stop at stage ①. They never appear in the task distribution at all.

The gate could be run on six of the seven sources. NIO's data use agreement permits only pre-agreed aggregate annotations to leave the enclave, which made executing the pipeline impossible in the first place. That left **22,956** conversations pooled from six sources as the comparison set, and close to half of them fell at the first hurdle.
