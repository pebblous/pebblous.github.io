---
title: Exams that AI both writes and grades are two in a hundred
subtitle: Across 14,767 arXiv evaluation papers, the share handing scoring to a model rose from 26% to 40%, while the share letting models write the items reached half and stopped
date: 2026-09-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Exams that AI both writes and grades are two in a hundred

_Across 14,767 arXiv evaluation papers, the share handing scoring to a model rose from 26% to 40%, while the share letting models write the items reached half and stopped_

## Executive Summary

> [!callout]
> This article does not take one benchmark apart. It reads the distribution of design choices across 14,767 papers that put a new or updated evaluation resource on arXiv over four years and eight months. There is a line everyone repeats now: AI writes the questions and AI grades the answers. The article does not argue that line. Because the author released the code and the data along with the paper, the line can be counted.

> Counted, the grading desk really did change hands. Matching answers against a key written in advance gave ground, and two other mechanisms rose in its place: a model reading the answer and assigning a score, and code being run so the outcome decides. The same thing did not happen where the items get written. The share of papers using model-generated material climbed steeply after 2022, reached half, and has sat there since. The two roles do not ride one automation dial. That is the real finding in this study.

> So how many exams look the way the line describes, with a model writing the items, a model assigning the score, and no person, no answer key and no execution check anywhere in the design? Open the data files the author published and the count is at most one in forty. At most, because a paper-level label cannot tell you whether the model that wrote the items and the model that graded them were the same model. And the numbers themselves were attached paper by paper by a single model, whose accuracy at that job was never measured. The author did not hide that. He published it alongside everything else. So the question this article leaves behind is a single one. Whose ruler produced the AI scorecard we are citing?

<!-- stat-card -->
**25.8% → 40.3%** — papers where a model reads the answer and assigns the score — Matched January–August windows, 2024 against 2026. Assume 5% of labels are wrong and the direction still holds

<!-- stat-card -->
**9.8% → 4.7%** — papers where people did the scoring themselves — The share halved while the count went from 165 papers to 268. What shrank was the slice, not the amount

<!-- stat-card -->
**49.5% → 51.3%** — papers containing model-generated material — Under the same error assumption the sign flips. This is not a value you can call a rise

<!-- stat-card -->
**at most 2.4%** — designs with model-only items, model-only grading, no other check — 359 of 14,763 valid records. An upper bound, since the labels cannot tell whether one model held both roles

## Seven fields a scorecard never fills in

When we talk about an AI model's score we usually look only at the score. Which test, how many points, how much better than the last model. But a score needs a test paper first, and a test paper has someone who made it. Who wrote the items, who fixed the correct answers, who assigned the points. Those three are properties of the evaluation material rather than of the model. Which is to say that an evaluation is a dataset before it is a ruler, and a dataset ought to come with a quality history.

We already ask that of training data. Where did it come from, who labeled it, what was it derived from. We almost never ask the same of an evaluation set. A preprint that Chao Wang, an independent researcher, posted to arXiv on 15 September 2026 turns that question into a form. The study gathers papers that introduce or substantially update an evaluation resource and records the design each one chose in seven fields.

### 1.1. The form that records a design

Here are the seven. What each one records is defined in a single appendix table, and that definition holds up every number in the study. The two this article follows are the fifth and the sixth, material source and scoring source.

| Field | What it records |
| --- | --- |
| Target system | A model that produces an answer, an agent that handles tools and environments, or a system that controls a body. Running submitted code in order to grade it does not by itself make the target an agent |
| Evaluation domain | The knowledge or application area actually tested, judged by the content of the test rather than the paper's framing |
| Evaluation setup | Whether the items are fixed in advance, produced during the run, or answered under feedback that responds to behavior |
| Modality | The form of the input and of the output being scored: text, image, video, audio, code, structured data |
| Material source | Where the evaluation content came from. Written by people or recorded from the real world, produced by a generative model, or produced by a program or simulator |
| Scoring source | What produces the score on a single item. Reference or metric, execution or environment outcome, human judge, LLM judge, or some other learned scorer |
| Task language | The natural language used in the actual items, instructions and required responses. Not the language the paper is written in |

****************

The seven coding fields (paper, Table 1). The two in bold are what this article follows. The scoring field carries one qualification in its definition: it counts what produces the item-level score, not how those scores are later averaged together.

### 1.2. From 1.15 million records down to 14,767

The study did not read every paper on arXiv one by one. It is a selective pipeline that filters at each stage, and the author puts that in the paper himself: "This selective pipeline may miss eligible papers before full-text assessment." The methods notes released with the repository are blunter still. The top-15% cut is "a conservative development choice, not an estimated population-recall guarantee."
