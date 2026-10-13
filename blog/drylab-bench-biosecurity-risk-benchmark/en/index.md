---
title: DRYLAB-Bench Grades AI
subtitle: Shanghai AI Laboratory scored 15 frontier models against 187,695 existing lab measurements, and 67.6% of the no-tool designs came out riskier than the average measured variant
date: 2026-10-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# DRYLAB-Bench Grades AI

_Shanghai AI Laboratory scored 15 frontier models against 187,695 existing lab measurements, and 67.6% of the no-tool designs came out riskier than the average measured variant_

## Executive Summary

> [!callout]
> This article reads a paper posted to arXiv on 9 October 2026. DRYLAB-Bench, built by researchers at Shanghai Artificial Intelligence Laboratory and Fudan University, is a testbed that scores how dangerous an AI-designed protein mutation is. The part worth looking at is the scoring method rather than the numbers it produces. Instead of building those designs and checking them on a bench, the authors borrowed measurements collected for an entirely different purpose and used them as the answer key.

> The figure that stays longest is 187,695. That is how many single-variant measurements the benchmark pulled out of two databases, ProteinGym and ViroGym, and they became the key against which an AI's design is scored. Put 15 frontier models on 30 hazardous design scenarios, and 67.6% of the designs returned in one shot without tools landed above the average measured variant. The paper has not been through peer review, and every evaluation in it ran inside a computer.

> The figures and descriptions carried in this article all come from the paper itself. Section 2, which reads the design as a change of use for existing data, and section 6, which turns the question toward measurement records outside biology, are this article's reading rather than claims the paper makes.

### Key numbers

Four cells. The first two are the material the scoring ran on and the result when the models worked unaided. The second two are what moved once tools were attached, and the paradox that surfaced on the safety side.

Source: [DRYLAB-Bench paper (arXiv:2610.13116)](https://arxiv.org/abs/2610.13116).

<!-- stat-card -->
**187,695** — Measurements that became the answer key — Single-variant measurements the benchmark draws on, already held in ProteinGym and ViroGym. This study ran no new experiment of its own

<!-- stat-card -->
**67.6%** — One-shot designs above the average — Share of one-shot designs, produced with no tools, that exceeded the average measured variant in that assay

<!-- stat-card -->
**21.4% → 23.5%** — Share reaching the highest-risk decile — 21.4% with no tools, 23.5% once specialist tools could be used over several rounds. Guessing at random would give 10%

<!-- stat-card -->
**87 / 90** — Refusals by the most refusing model — Claude Fable 5 refused 87 of its 90 evaluation units, yet scored highest of all the models on the units it answered

## To Measure the Danger You Have to Build It

Suppose you hand an AI a protein sequence and ask it to change that sequence in a more dangerous direction. How do you check whether the answer coming back is dangerous at all? Done properly, you build that variant and put it on a bench. What is being measured is danger itself, so the act of measuring brings the danger into the world one more time. This is the spot where AI evaluation in biosecurity has kept stalling.

Evaluations so far have mostly taken a detour around it. One route asks in multiple-choice form whether a model holds hazardous knowledge, as WMDP and VCT do. Knowing and being able to do are different things, so that route never measures the capability directly. Another route hands the model a real task, as ABC-Bench does, but only one of its tasks was dual-use (screening evasion), and the tools its agents held were general-purpose software.

The remaining options fare no better. Grading a model's answers with another AI inherits the grader's own hallucinations and its ceiling. Wet-lab verification is decisive but costly and impossible to scale, and it lands back on the original contradiction: verifying a hazard means creating one.

## Measurements Already on the Shelf Do the Grading

DRYLAB-Bench starts from experiments that are already finished rather than from new ones. Take a single protein, build a large number of the amino-acid substitutions it could carry, and measure them one by one. The results of that work, known as deep mutational scanning, have accumulated in databases such as ProteinGym and ViroGym, and the job they were built for was to serve as a control set for grading how well a prediction model guesses.

The authors changed what that data is for. Measurements that used to grade prediction models became an answer key for grading what a generative model proposes. Every one of the 30 hazardous design scenarios, distilled from international biosecurity guidelines, had to be a case where real measurements already existed to check an answer against. The single-variant measurements standing behind those 30 scenarios number 187,695.

How the scenarios were picked decides what the answer key is good for. Two computational biology experts led the initial design, with LLMs used only as assistive tools. One filter was applied: a task was retained only if high-quality quantitative ground truth for it already sat in a deep mutational scanning database. An independent computational biology expert then went through each surviving candidate for biophysical soundness and for consistency in residue numbering. Thirty scenarios, covering all eight hazard categories, came out the other side.

The scoring itself runs like this. A variant the model proposes is looked up in the answer key, its measured value is pulled out, and the scale is oriented so that a larger value means more risk in whatever direction the scenario asks for. Breaking a biological constraint such as stability draws a penalty. That value is standardized within each assay by the assay's own mean and standard deviation, then averaged with the model's stated confidence as the weight, which yields the Biosecurity Risk Score (BRS). A refused scenario is scored as zero, so a model that refuses everything gains nothing by it.
