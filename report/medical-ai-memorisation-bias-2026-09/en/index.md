---
title: An AI trained on your old records misses your new illness more often
subtitle: Memorisation bias across four datasets of ECGs, chest X-rays and emergency department records, where an unchanged health state inflated performance instead
date: 2026-09-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI trained on your old records misses your new illness more often

_Memorisation bias across four datasets of ECGs, chest X-rays and emergency department records, where an unchanged health state inflated performance instead_

## Executive Summary

> [!callout]
> This article reads a preprint posted to arXiv on 15 September 2026 by eight authors, and reads it through one question: what happens to a person who gave their medical records to research when, years later, they meet the model those records trained? Here is what the team at the Technical University of Munich and Imperial College London measured. When a patient whose historical records went into training came back with a condition absent from those records, the model found that condition significantly less often than an otherwise identical model that had not learned that patient. When the health state was unchanged, sensitivity and specificity were both inflated instead. Nobody attacked anything and no data escaped. The future records went into neither training nor model selection, so the split was correct.

> The authors scale their own claim down first. They call the number of missed diagnoses in the simulation "modest", and add that the temporal split deliberately enriched for such cases, so the result speaks to the existence and direction of the effect rather than its incidence in deployment. Two more things belong in the same reading: the diagnostic accuracy comparison ran only on records where memorisation had been detected, and this is an unrefereed v1 preprint. Even with all those reservations attached, two findings are usable today. One, three models whose test scores are effectively identical differ fifty-six fold in how much they memorise. A shortlist drawn on performance alone never sees that column. Two, differential privacy applied one record at a time left traces on future records even at the strongest budget, and raising the unit of protection to the person almost erased them.

> The problem that remains is not technical. It is a question of what counts as one unit. De-identification means that at deployment nobody can tell which patient contributed their own records, so even picking those people out to exclude them is not simple. The rules as written have validation performance measured with those people removed, while the deployment population is required to include them. Each requirement is right on its own, and laid on top of each other they separate the people the performance number was measured on from the people it is applied to. That last step is our reading of the texts, not a claim the paper makes. Protection, deduplication, splitting and stratification all converge on that one question.

<!-- stat-card -->
**56×** — Gap in memorisation between three models with near-identical test scores — Memorisation detected on 2.25% of future records versus 0.04%. The denominator is 65,402 emergency department records

<!-- stat-card -->
**25+ years** — How long the trace of old records stayed in the predictions — Counted from the last historical training record. Observable in only one ECG dataset, collected from the 1980s onward

<!-- stat-card -->
**70+ pp** — Widest gap between the two model groups in predicted probability — The average is small. This is a tail value that appeared on a minority of future records

<!-- stat-card -->
**0 · 0 · 0 · 2** — Future records still carrying memorisation once the unit of protection became the patient — Budgets ε=1, 10, 100, 1000 on one ECG dataset. Record-level protection left traces even at the strongest budget

## Alice's three electrocardiograms

The paper's first figure explains the structure of the study through an example patient named Alice. Alice contributed three electrocardiograms to the training dataset, all of them showing a normal sinus rhythm. Today she returns with an anterior infarct, a heart attack involving the front wall of the heart. The figure's caption continues: the model that saw her healthy historical records during training assigns "a substantially lower probability" to that anterior infarct, and may miss the diagnosis as a result.

The researchers stood a second model beside it. Same architecture, same training procedure, same hyperparameters, with Alice's historical records left out. Both models get the same new electrocardiogram and their answers go side by side. If the two answers differ, that difference comes from having seen Alice's old records. Alice is an illustrative example from the figure, and the numbers that follow come from the records of hundreds of thousands of real patients. What this paper reports is that the difference does occur, and that it occurs with a direction.

The researchers call the phenomenon memorisation bias. This paper is not where the name was coined. The same authors used it in the title of a preliminary study presented at a medical imaging workshop held in Daejeon, Korea in September 2025. The new ground here is not the term but the time axis. The authors write that this is the first time the effect has been traced into the records a data contributor **leaves behind later**, using real longitudinal patient data.
