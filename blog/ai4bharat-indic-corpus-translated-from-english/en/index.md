---
title: AI4Bharat
subtitle: The 2.8-trillion-token corpus NVIDIA and AI4Bharat are about to release for 22 Indian languages is English web text put through a translation model
date: 2026-10-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI4Bharat

_The 2.8-trillion-token corpus NVIDIA and AI4Bharat are about to release for 22 Indian languages is English web text put through a translation model_

## Executive Summary

> [!callout]
> On October 16, NVIDIA and AI4Bharat, the Indic language lab at IIT Madras, published 2.8 trillion tokens of pretraining data covering the 22 languages named in India's constitution, along with the pipeline that produced it. The Indian startup Bodhan AI supplied one of the translation models. What stands out is not the size but the origin. These 2.8 trillion tokens were not gathered in India. They are 15 subsets of the English web corpus Nemotron-CC-v2, carried across by machine. This article looks at what that pipeline filtered, and how.

> A single number sits at the center of it. Each translated document is scored against a 100-point rubric, and anything under 75 is sent back to be rewritten rather than discarded, then scored again. That loop brought back 438.4 billion tokens, a share already counted inside the 2.8 trillion. Training a model on a further 10 billion tokens, mixing the 12-language portion of this corpus with text originally written in Indian languages, lifted five Indic benchmarks by 4.98 to 9.82 percentage points. In a separate comparison against the previous generation of the model, five of six tasks improved and instruction following fell by 2.04 points.

> Sections 1 through 4 follow what the announcement states. Section 5, which reads this design against Korean-language data practice, is our interpretation.

### Key Numbers

Source: NVIDIA and AI4Bharat, [Hugging Face announcement](https://huggingface.co/blog/nvidia/scaling-indic-pretraining) (October 16, 2026).

<!-- stat-card -->
**2.8T tokens** — Total pretraining data across 22 Indian languages — 2,601.0B in native scripts plus 224.6B in Roman script

<!-- stat-card -->
**438.4B tokens** — Recovered by rewriting text that missed the bar — Already counted inside the 2.8 trillion, not added on top

<!-- stat-card -->
**+4.98–9.82%p** — Gain across five Indic benchmarks — Measured before and after a stage fed 10 billion Indic tokens of mixed synthetic and natural text

<!-- stat-card -->
**−2.04 points** — Drop on the instruction-following evaluation — The only one of six tasks to fall against the previous generation

## 2.8 Trillion Tokens That Begin in English

AI4Bharat is an Indian language research lab based at IIT Madras. It has spent years assembling open corpora in Indian languages, and Mitesh Khapra of the lab has put the reason for that work into a single sentence. There is not enough data to go around in Indian languages. This announcement is about filling that gap, and the method is not collection.

According to the post NVIDIA and AI4Bharat put on Hugging Face on October 16, the new pretraining data covers all 22 languages listed as official in India's constitution. By the 2011 census those are the first languages of 97% of the country, roughly 1.2 billion people. The size is 2.8 trillion tokens as counted by the Gemma-4 tokenizer.

Those 2.8 trillion split into two parts. Text written in each language's own script accounts for 2,601.0B tokens and spans all 22 languages. Text written in the Roman alphabet accounts for 224.6B tokens and covers only 12 of them. Counted together, the 22 languages yield 34 language-script combinations. Roman script here does not mean text translated into English. It means an Indian language spelled out in Latin letters, the way people type Hindi on a phone keyboard. Native script likewise refers only to the writing system, and the announcement notes separately that this text was carried over from English as well.
