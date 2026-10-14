---
title: Data Leakage: The Flaw That Makes an AI
subtitle: Researchers at CWI in Amsterdam ran three data science agents across 220 tasks, and on two of six controlled tests all six agent-model configurations failed in every run
date: 2026-10-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Data Leakage: The Flaw That Makes an AI

_Researchers at CWI in Amsterdam ran three data science agents across 220 tasks, and on two of six controlled tests all six agent-model configurations failed in every run_

## Executive Summary

> [!callout]
> This article reads a paper posted to arXiv on 9 October 2026. Researchers at Centrum Wiskunde & Informatica (CWI) in Amsterdam ran three data science agents over 220 tasks and graded the analysis pipelines those agents wrote, scoring the procedure itself rather than the accuracy it produced. Evaluations up to now have looked almost entirely at predictive performance and at whether the code runs.

> The number that stays longest is 2.58. Across 1,761 graded pipelines the study detected 4,557 methodological failures, which works out to 2.58 per pipeline. From there the directions split. Every failure in the data leakage family lifted the predicted ranking, while failures of omission, such as never separating training data from validation data, pushed it down. Read off the scorecard alone, the pipeline that saw the answer looks like the better model.

> The figures and descriptions carried in this article all come from the paper itself. Section 6, which turns the question toward how a company's data team signs off on a model, is this article's reading rather than a claim the paper makes.

### Key numbers

Four cells. The first two are how common the failures are and how far the reported score sits from the real one. The second two are the leakage rate of the framework that carries a dedicated safeguard, and the tests nobody passed even once.

Source: [CWI paper (arXiv:2610.14115)](https://arxiv.org/abs/2610.14115).

<!-- stat-card -->
**2.58** — Failures per analysis pipeline — 4,557 failures detected across 1,761 graded pipelines. The judge is conservative, so the authors call this rate an undercount

<!-- stat-card -->
**1.0 → 0.444** — Local score, then leaderboard score — On one Kaggle challenge, ReAct pulled in a feature it could not have had and scored near 1.0 on its own validation. The same pipeline on the actual leaderboard scored 0.4440

<!-- stat-card -->
**50%** — Leakage rate with a dedicated leakage checker — MLEvolve runs a separate agent that checks for leakage. Paired with the most capable model, half of its pipelines still let validation data into training

<!-- stat-card -->
**2 of 6** — Controlled tests failed in every run — Of six tests with a pitfall planted in the data, all six configurations failed every run on telling correlation from causation and on catching leakage in feature selection, a failure rate of 1.0

## A Local Score of 1.0, a Leaderboard Score of 0.444

Start with one case the paper walks through. The Kaggle challenge called Problematic Internet Use asks for a prediction of how heavily a young person uses the internet. The researchers took that challenge's data, split it their own way, and handed it to the agents. ReAct and AIDE came back with near-perfect marks on their own validation, close to 1.0 on QWK, the metric the challenge uses.

Skill was not the reason. The evaluation portion the researchers carved out still held the variables beginning with `PCIAT-`, and from one of them, `PCIAT-PCIAT_Total`, the value to be predicted can be derived directly. The real Kaggle test set carries no such column. Both agents picked that variable up as a feature. In effect they read the answer, then produced it.

Put the same pipelines on the actual competition leaderboard and the numbers change. ReAct scored 0.4440, AIDE 0.4280, and MLEvolve 0.4170. The human who won that challenge scored 0.4820. All four figures are from the private leaderboard, and the public one puts them in the same order. A pipeline that had been scoring near 1.0 on its own validation dropped to a clear distance behind first place once the channel was closed.
