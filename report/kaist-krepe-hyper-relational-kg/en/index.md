---
title: When Several Slots Are Empty, It Still Builds New Facts
subtitle: KREPE from Professor Joyce Jiyoung Whang
date: 2026-07-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Several Slots Are Empty, It Still Builds New Facts

_KREPE from Professor Joyce Jiyoung Whang_

## Executive Summary

> [!callout]
> The knowledge bases that companies run always have holes in them. It is not just one entry that goes missing. Often several slots are empty at once, and sometimes nearly everything is blank. KREPE, presented at ICML 2026 by Professor Joyce Jiyoung Whang's team at KAIST, confronts this reality head-on. Until now, research on knowledge graph completion has stayed within link prediction: "given an almost-complete fact, rank the candidates for the one missing slot." KREPE breaks that frame and defines a new task, Fact Generation: producing a valid new fact in its entirety no matter how many slots are empty.

> The most striking result came from the hardest setting of all: fabricating a new fact from a completely empty input. The paper reports that KREPE outpaced large language model (LLM) baselines built on GPT-5.2 and Gemini 3 Pro by a wide margin. Unlike LLMs, which mimic facts from text probabilities, a model that learns graph structure and the context inside a fact directly produced structured knowledge more accurately and more efficiently. On top of that came a counterintuitive bonus: learning to generate also delivered top performance on the existing ranking task — relation prediction in particular.

> This article reads what KREPE changed through the lens of data quality. The core message is simple: a model's capability ultimately comes from the structure and completeness of its input data. All specific performance figures are as reported in the ICML 2026 paper (arXiv:2605.24064) and are cited with their source in the body below.

Four figures compress both this study's achievement and the backdrop behind it. The accuracy and efficiency of generation from empty inputs show what KREPE accomplished; the scale of Wikidata's gaps shows why that work was needed; and the relation-prediction performance shows that a model trained to generate also rose to first place on the ranking task.

<!-- stat-card -->
**0.855** — Empty-input generation accuracy — Valid-and-novel fact ratio, Scratch · WikiPeople⁻ (LLMs reach 0.46–0.60 at most)

<!-- stat-card -->
**2.85 tries** — Per valid fact — Competitors up to 27.58 — roughly 10× more efficient

<!-- stat-card -->
**12.5×** — Wikidata incompleteness — Missing inContinent facts are 12.5× the existing ones

<!-- stat-card -->
**1st everywhere** — Relation prediction — Beats prior methods across all datasets and settings

## Holes Are the Constant, Not the Exception

A knowledge graph is a structured way of writing down human knowledge so that computers can work with it. Search, recommendation, question answering, and reasoning systems all run on top of this structure. Its most basic unit is the triplet — a single fact written across three slots (subject, relation, object), as in "Einstein — received — Nobel Prize in Physics."

The problem is that facts in the real world do not fall neatly into three slots. The sentence "Einstein received the Nobel Prize in Physics" leaves out **when** and **for what work**. So large knowledge bases like Wikidata and YAGO attach auxiliary key-value pairs to the base triplet. This auxiliary information is called a qualifier. A knowledge graph that expresses complex facts by adding qualifiers — "year = 1921," "for = the photoelectric effect" — is called a hyper-relational knowledge graph (HKG).
