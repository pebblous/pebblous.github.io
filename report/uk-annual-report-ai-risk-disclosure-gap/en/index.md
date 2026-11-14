---
title: AI Risk Disclosure Is Up at UK Listed Companies, and the Incident Line Is Blank
subtitle: All 9,821 UK annual reports classified end to end — 41.2% name AI as a risk, and 10.4% of those say what the company will do
date: 2026-10-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Risk Disclosure Is Up at UK Listed Companies, and the Incident Line Is Blank

_All 9,821 UK annual reports classified end to end — 41.2% name AI as a risk, and 10.4% of those say what the company will do_

## Executive Summary

> [!callout]
> This report reads a single preprint that classified, end to end, how UK listed companies have written about AI risk in 9,821 annual reports. It went up on 1 October 2026, the UK AI Security Institute's societal resilience team funded the work, and the classification code and result data are open alongside it. Two figures from it will be quoted most often. Reports naming AI as a risk rose from 2.8% to 41.2%, and the reports describing an AI incident that actually happened can be counted on one hand.

> Something else did not rise. Among the reports that name AI as a risk, the share that goes on to say something substantive has not moved from around 10% since 2023. The gap opened because more reports started writing, not because the writing thinned out year by year, and most of that middle ground is not copy-and-paste boilerplate either. Sentences that name where the risk sits and stop short of what the company will do about it account for the bulk of AI risk disclosure. The incident count does not transfer cleanly either. The author put the scorecard for that label in the same paper, showing it got nothing right in the validation sample, then reread every flagged passage in the corpus by hand and kept four. Between seven and four sits a verification step.

> That is what the study reports; what follows is this report's reading of it. The author asks you not to read the gap as concealment. What an annual report tells you is not how often incidents happen but where incidents get written down. The question then moves from corporate honesty to form design. Which field on which form records the failure your company had with AI, and who is allowed to read that field? When it sits empty, there is nowhere for remediation, insurance or regulation to stand.

<!-- stat-card -->
**41.2%** — Reports naming AI as a risk — 2025 · of 1,561 reports. In 2020 it was 2.8%

<!-- stat-card -->
**10.4%** — Of those, graded substantive — 2025 · of the 643 reports naming a risk. Flat near 10% since 2023

<!-- stat-card -->
**78.5%** — Middle grade, naming only where — 2025 · of the 643 reports naming a risk. The boilerplate grade is 11.0%

<!-- stat-card -->
**4 reports** — Describing an actual incident — 2020–2026 · of 9,821 reports. What remained after the author reread the 7 the classifier flagged

## Before the numbers came a counting rule

The study is a preprint posted to arXiv on 1 October 2026. It has not been peer reviewed, the author lists an independent affiliation, and the acknowledgements credit the UK AI Security Institute (AISI) societal resilience team for funding and for advice on the research direction. The classification code is under Apache-2.0 and the result data under CC BY 4.0. What kind of body the UK AI Security Institute is came up before, in [our piece on its review of a US model](/blog/us-first-model-review-uk-aisi/en/).

Before reading any figure from the body, it is worth establishing what this study counted, because every percentage that follows stands on the rules fixed here. There are three of them: the gate that decides which passages become candidates, the classification that decides what label a passage gets, and the aggregation that decides how those labels add up to a verdict on a single report.

### 1.1. Some words do not open the gate

A keyword gate comes first. A passage reaches the LLM classifier only if it contains at least one term from a fixed list. The list holds core terms such as artificial intelligence, machine learning, large language model and generative AI; techniques that clearly belong to AI, such as neural network, computer vision and natural language processing; named AI products and vendors; and applied terms such as robotic process automation, predictive analytics and chatbot. The author also pins down what does not get through.

Generic terms such as “data analytics,” “digital transformation,” and “automation” are not triggers on their own.
                        Source: arXiv:2610.02281v1, §3.2

That choice carries a price, and the author states it directly in the limitations section: the gate creates deliberate omissions. A company that avoids the word AI and writes around it as "intelligent systems" or by the name of its own platform never gets picked up. So the figures here should be read as the volume of discussion explicitly labelled AI. The volume of AI-related discussion overall is larger than that.

Noise in the other direction is documented too. Short acronyms collide with unrelated usage. ML in a water utility's report is megalitres, and the LLM in a director's biography is a master of laws. Some terms are matched case-sensitively so that a capitalised AI does not trigger inside Shanghai or Chairman. Passages that clear the gate come to 24,189, and each one carries two paragraphs on either side of the triggering sentence along with it as context.

### 1.2. Six labels, and two of the definitions carry this report

The stage-one classifier assigns each passage one or more of six labels: adoption, risk, vendor, harm, general/ambiguous and none. Two of those definitions are what the rest of this report leans on, and every figure that follows comes out of these two sentences.

| Label | The author's definition | What it takes to qualify |
| --- | --- | --- |
| Risk | A downside or exposure attributed to AI | The word risk appearing near the word AI is not enough; the downside has to be attributed to AI rather than merely mentioned near it |
| Harm | A past, specific AI-caused incident | A passage about something that could happen does not qualify. It has to have happened |

********

Stage-one label definitions from §3.3 of the paper. The adoption label carries its own extra condition: first-person company description indicating actual deployment.

At stage two, risk passages are sorted into ten categories and scored 1 to 3 for how explicit the attribution is. A 3 means a causal expression ties AI to the risk inside the same sentence, and the author calls only a signal of 3 explicit. The same stage also assigns a specificity grade, which section 3 takes up separately.
