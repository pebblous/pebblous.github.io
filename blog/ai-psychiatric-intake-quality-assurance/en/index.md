---
title: When AI Runs a First Psychiatry Interview, It Changes the Subject
subtitle: In mock interviews with a simulated patient, a GPT model drew out 88% of the clinical checklist, but wrote up the danger signs it noticed at half the clinicians
date: 2026-09-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When AI Runs a First Psychiatry Interview, It Changes the Subject

_In mock interviews with a simulated patient, a GPT model drew out 88% of the clinical checklist, but wrote up the danger signs it noticed at half the clinicians_

## Executive Summary

> [!callout]
> A [paper that went up on arXiv](https://arxiv.org/abs/2609.21149) on September 17 puts an unfamiliar question to the psychiatric intake interview. Not whether AI does the job better than people, but what a hospital should measure, and how, before it brings the tool in. The authors built a simulated patient that does not forget what was said earlier, then had six clinicians and a GPT model interview the same patient. This article looks at what that test measures and what it cannot.

> The number most likely to get quoted is 88.0%. That is the share of the clinical fields planted in the vignettes that the AI actually drew out during the interview, and in the same slot the clinicians came to 38.9%. Then a lower row of the same table reverses the order. On topics the conversation never raised once, directional answers reached 56.8% for the AI and 27.8% for the clinicians. Of the safety concerns each side noticed, the AI wrote up 33.3% in detail and the clinicians 66.7%. The conclusion the authors nail down comes out of those rows. One score cannot settle this tool.

> Everything from Section 1 through the first half of Section 4 follows what the paper and its tables say. The recount of the denominator later in Section 4, and the reading of data quality in Section 5, are this article's own and appear nowhere in the paper.

### Key Numbers

Source: the session-level results table in [arXiv:2609.21149](https://arxiv.org/abs/2609.21149). The AI comes first, the clinicians second.

<!-- stat-card -->
**88.0% / 38.9%** — Clinical fields elicited — Whether the fields planted in the vignette came out during the interview. The AI got 22 of 25, the clinicians 7 of 18

<!-- stat-card -->
**56.8% / 27.8%** — Unsupported inferences — Directional answers on topics the conversation never touched. Per session the AI did this 2.5 times as often

<!-- stat-card -->
**33.3% / 66.7%** — Safety concerns characterized — Whether a noticed concern got written up in detail. The denominator is what each side noticed: the AI 9, the clinicians 3

<!-- stat-card -->
**6 sessions** — Clinician interviews left in the analysis — 21 consented, 12 finished, and 6 sessions cleared the exclusion rules. This is why the authors call the study a pilot

## What a First Intake Has to Carry

The first meeting with a patient in psychiatry is packed with work. The clinician has to hear what brought the person in, gauge whether they are at risk of hurting themselves, get the shape of the symptoms, and settle what happens next, all in one sitting. The authors use their own hospital as the example, and at Johns Hopkins an intake routinely runs longer than an hour. Information missed in that hour can delay diagnosis and treatment, the paper says, and the cost is steepest for conditions that get misdiagnosed often.

Staffing adds its own pressure. In a statistic the authors cite, nearly 33% of the United States population lives in a mental health professional shortage area. So there is hope that AI could take over the information gathering and free clinicians to spend more time building a relationship with the patient and drawing up a treatment plan.

The trouble is how to check that hope. Putting an unvalidated system straight in front of real psychiatric patients creates risk both ethically and clinically, the paper states flatly. So the first thing the authors built was not a better interviewing AI. It was a ruler for interviewing AI.

Three conditions came attached to that ruler. First, since interview style differs from clinician to clinician, it has to compare different approaches fairly. A simulated patient with a fixed answer key beats real medical records or standardized-patient actors on that count, the authors judged. Second, it has to run long enough for a clinician to interview the way they normally do and short enough that they stay to the end. Third, a hospital has to be able to use it for a deployment decision. What actually came up in the conversation and what the interviewer held on to are two different questions. So the evaluation pairs the transcript with a recall form. The form asks an interviewer, once the interview is over, to write down what they think they found out.

This manuscript is a seven-page preprint submitted to the IAAI'27 conference, not a peer-reviewed version. All ten authors are at Johns Hopkins University, and the paper introduces them as the university's interdisciplinary precision-psychiatry team. The clinicians in the pilot were recruited from the psychiatry department of the same university's medical school. The team that built the evaluation framework and the clinicians who served as the comparison sit inside one institution, which follows from the goal of the paper: a hospital building a system to measure, by its own standards, the tool it intends to use.

## A Fake Patient With a Memory

The first attempt at a simulated patient failed. It worked by writing a persona into the prompt, and once an interview ran long the patient invented pieces of its own history, contradicted what it had said earlier, and sometimes gave no answer at all. Scoring an interviewer requires a patient that holds steady, and here the patient was the first thing to wobble.

The authors turned instead to giving the patient a memory. None of that structure was built from scratch. The retrieval architecture comes from InterviewPlayground, an interview-evaluation simulator one of this paper's co-authors helped build, adapted to psychiatric intake. Set against real qualitative interviews, it reportedly showed high correlation in response quality and interviewer behavior, and that report is still an unpublished manuscript. Each vignette gets a memory bank of roughly 200 slots, built in advance. Ten of those slots are target memories, one for each scoring field, and the other 190 are concrete sensory detail that fills in this patient's life. The bank is generated offline once and committed as a preset file, so however many times the same vignette runs, the patient's past stays in the same place.

When a question arrives mid-interview, the system embeds the sentence, scores cosine similarity against every memory, adds a Gaussian noise term, and picks the five highest-scoring slots. Those slots go into the response prompt as impressions the patient is instructed to paraphrase rather than recite. The noise and the paraphrasing are there to rub out the machine tell of the same sentence coming back to the same question every time.

The patient also carries behavior rules fitted to the intake setting. Self-harm content does not come up before the interviewer asks directly and carefully. Substance use gets understated at the first ask, and ordinary life history gets answered down to concrete lived detail. The design rests on prior work about how often real patients volunteer that material on their own. Because of this rule, a safety signal never enters the conversation if the interviewer sits still. The results below have to be read on top of that condition.
