---
title: The Doctors MAI-DxO Beats Are Not Specialists
subtitle: Microsoft
date: 2026-10-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Doctors MAI-DxO Beats Are Not Specialists

_Microsoft_

## Executive Summary

> [!callout]
> This article reads the Microsoft paper "Sequential diagnosis with language models," published in Science on October 22, 2026. Outlets around the world rendered the study as "AI beat doctors," and on the numbers alone that is not a wrong summary. A scorecard only means something once it is read together with who was on the other side of it and how the test was built. Those two things are what this article looks at.

> MAI-DxO, a diagnostic orchestrator, solved 83.2% of the cases that are difficult to diagnose, while the physicians working the same cases stopped at 36.1%. Those 56 physicians are all generalists. The study never put a specialist or a multidisciplinary team on the other side, and the authors wrote in the paper that they expect the score gap to shrink against a specialist.

> Sections 1 through 4 follow what is written in the paper and in the reporting. Section 5, which lays this scorecard over the moment a company announces how well its own AI scored, is this article's own.

### Key numbers

The first two are the values the paper put up. The last two say what conditions those values came out of.

Source: [Science, volume 394, issue 6822](https://www.science.org/doi/10.1126/science.aeh7930) (October 22, 2026)

<!-- stat-card -->
**83.2%** — Diagnostic accuracy of MAI-DxO — On the 304 NEJM cases. Physicians averaged 36.1% on the same cases

<!-- stat-card -->
**56** — Physicians who sat the test — All of them generalists. Specialists and multidisciplinary teams are not in the comparison group

<!-- stat-card -->
**629** — Cases that went into the test — 304 NEJM cases plus 325 emergency department records, all of them past records with the conclusion already written

<!-- stat-card -->
**$5,431** — Testing cost per case — In the setting where accuracy is highest. The upper end of the physician estimate on the same cases is $4,725

## The Numbers on the Scorecard Are Right

MAI-DxO is not a single model. It hands several virtual physicians different roles so that they put up hypotheses and argue against each other, and while that runs it weighs which test to order next and how far the bill has climbed. The DxO in the name comes from Diagnostic Orchestrator. Rather than producing a diagnosis in one shot, it stacks questions and tests in order and closes in on the answer. The paper's title, sequential diagnosis, names that procedure.

The results came in two sets. One is 304 cases from the clinicopathological conferences published in the New England Journal of Medicine, the other 325 emergency department records. The first group are cases that experts could not answer easily, which is how they ended up in a journal as material for discussion. The second group are ordinary records from patients who walked into an emergency department.

| Case set | MAI-DxO | Physician average | Best physician |
| --- | --- | --- | --- |
| 304 NEJM cases | 83.2% | 36.1% | 51.8% |
| 325 emergency department cases | 80.3% | 46.8% | 62.5% |

Put up the score of the best-performing physician instead of the average and MAI-DxO still sits above it. On the difficult cases that is 51.8% against 83.2%, and on the emergency department cases 62.5% against 80.3%. There is not much room to argue over the size of that gap itself.

The study also reports that the result holds when the model underneath changes. Gemini 2.5 Flash scored 46.4% working on its own, and once it ran inside the MAI-DxO procedure it climbed to somewhere around 69%. Microsoft leans on this when it describes the study as the performance of a procedure rather than of one particular model.

One place calls for care when citing figures. A preprint released in June 2025 carried 85% against 20% with 21 physicians, and articles that took those numbers over as they stood are still in circulation. Every figure in this article is from the final Science version of October 22, 2026.

## A Comparison Group of 56 Generalists

So who ended up on the 36.1% side? Fifty-six physicians sat the test and all of them are generalists. No specialists took it, and neither did the multidisciplinary teams in which several departments see a patient together. Reference material was not blocked. The study ran both a condition with textbooks and the internet closed off and a condition with them open, and 36.1% is the average across the two. Take the closed condition on its own and it falls to 22.3%.
