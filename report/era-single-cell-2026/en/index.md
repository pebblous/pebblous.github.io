---
title: What AI Changed Wasn
subtitle: Google
date: 2026-06-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What AI Changed Wasn

_Google_

## Executive Summary

> [!callout]
> For the past decade, "AI for Science" has mostly tried to automate the **hypothesis**. It predicted protein structures (AlphaFold), churned out candidate materials (GNoME), and generated research ideas (AI Scientist). ERA (Empirical Research Assistance), which Google Research published in _Nature_ in 2026, moved the target one notch over. What ERA rewrites is not the hypothesis but the **analysis code itself**—the code that tests that hypothesis against data. This piece looks at what that one-notch shift means for every team that works with data.

> The method is tree search. An LLM proposes a variant of the analysis code, ERA actually runs it and scores it on a benchmark, keeps only the strong branches, and mutates again. Running this loop produced a large number of new single-cell RNA analysis methods that surpassed the human-built top entries on a public leaderboard, and on COVID-19 hospitalization forecasting it recorded lower error than the U.S. CDC's official ensemble. The point is not a flash of genius but that a repeatable search beat the best records experts had set.

> But the moment the reward function is a benchmark score, one question lingers. If the benchmark's data is biased, isn't ERA simply finding the code that reproduces that bias most faithfully? In an era where analysis code is generated automatically, the center of gravity for trust shifts from the model to the **data and the validation process**. The definition of "good data" moves one notch over to "good analysis"—and that notch is exactly where Pebblous has been working.

### ERA, by the numbers

Every figure below is explained in the body. Sources: the ERA paper (_Nature_ 654, 2026; arXiv:2509.06503v3) and GNoME (_Nature_, 2023).

<!-- stat-card -->
**40 / 87** — Methods beating the leaderboard top — Of 87 single-cell methods ERA tried, 40 exceeded the prior leaderboard top on overall score

<!-- stat-card -->
**+14%** — Gain over the prior best — In batch integration, ERA's BBKNN variant scored +14% on overall score versus the prior top, ComBat

<!-- stat-card -->
**26 vs 29** — COVID forecast WIS — Average hospitalization-forecast error (WIS, lower is better). ERA 26, CDC ensemble 29 — but retrospective

<!-- stat-card -->
**736 / 2.2M** — Prediction glut vs validation scarcity — Of the 2.2M crystal structures GNoME predicted, 736 were verified by independent experiment. Validation is always the bottleneck

## The AI Became the Examiner — Rewriting the Analysis Code, Not the Hypothesis

Think of an exam. The "AI scientist" we're used to is closer to a student solving the problems. It predicts how a protein will fold (AlphaFold), pours out stable crystal-structure candidates (GNoME), and writes up new research ideas (AI Scientist). All of these produce **answers**—hypotheses and outputs. Where ERA operates is different. ERA is less like the student and more like an **examiner who rewrites the grading scheme hundreds of times**. It automatically rewrites the analysis code itself—the code that decides how data is read, cleaned, and compared.

The distinction looks minor but is in fact large. In science, the same data can yield different conclusions depending on which analysis pipeline you run it through. Dozens of methods compete for how to align single-cell RNA data without batch effects, or how to forecast hospitalization counts as a time series, and which ones you pick and how you string them together is precisely the analyst's expertise. ERA stepped into that very space of selection and assembly. Humans still pose the hypothesis, but the code that tests it against data is searched by the machine.

Genealogically, ERA stands on the path opened by Google DeepMind's FunSearch (2023) and AlphaEvolve. Both systems had an LLM propose code, then executed and evaluated it to search for mathematical functions and algorithms. ERA widened the same idea into an **end-to-end analysis pipeline that handles experimental data**. The object of the search expanded from "a better mathematical function" to "a better method of data analysis."

> [!callout]
> In one sentence: **ERA rewrites analysis code, not hypotheses, through tree search.** "AI that accelerates discovery" and "AI that invents analysis methods" resemble each other but stand in different places. And the moment a machine starts producing analysis methods, a new question opens: who decides whether those methods are right, and how?
