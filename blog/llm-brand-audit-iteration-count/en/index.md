---
title: How Many Times an AI Brand Audit Has to Ask the Same Question
subtitle: A reanalysis of five brand-recommendation audits puts reliability at 0.58 for five iterations and 0.81 for fifteen
date: 2026-09-06
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How Many Times an AI Brand Audit Has to Ask the Same Question

_A reanalysis of five brand-recommendation audits puts reliability at 0.58 for five iterations and 0.81 for fifteen_

## Executive Summary

> [!callout]
> Dashboards that track how often generative AI recommends your brand are multiplying. Nobody has settled how many times you have to ask the same question before the number on the dashboard means anything. A paper Dmitrij Żatuchin of the Estonian Entrepreneurship University of Applied Sciences posted to arXiv on 3 September proposes a statistical procedure for setting that count, and runs the procedure over the raw data of five brand-recommendation audits he had published earlier.

> The answer arrives as a reliability value per iteration count. Five iterations give 0.58, ten give 0.74, fifteen give 0.81. The reason those numbers start so low lies in the shape of the variance. In this audit of brand counts, the model and prompt combination accounts for 21.8% of total variance, and the remaining 78.2% is what appears when the same question goes back to the same model. Iteration is the lever that presses down on that 78.2% so the rest becomes visible. The 0.90 bar used for judgments about a single prompt, though, is not reached even at twenty.

> Sections 1 through 3 follow what the paper computed and what broke on third-party data. The dashboard-side questions added in Section 4 are this article's reading, not claims the paper makes.

### Key Figures

Source: Żatuchin, [The Dice Roll Method: A Standardized Protocol for Repeated-Query Auditing of Large Language Model Brand Recommendations](https://arxiv.org/abs/2609.04047), arXiv:2609.04047 (2026), Tables 7, 8 and 11 and Section 6.2

<!-- stat-card -->
**78.2%** — Noise inside the cell — Share of variance produced by asking the same model the same question again

<!-- stat-card -->
**0.58 → 0.81** — Five iterations to fifteen — Generalizability coefficient. 0.80 is the conventional bar for group-level decisions

<!-- stat-card -->
**0.07** — One model at five iterations — qwen-14b-chat in a third-party corpus. The same five iterations split this far by model

<!-- stat-card -->
**$18.75** — Cost of going from five to ten — Extra API spend for a 250-query study across three models

## A Single Answer Rides on Top of the Noise

How much the answer shifts each time the same question is asked again is left in raw form in the same author's earlier work. That was a study of Christmas gift recommendations, putting the same question to three models up to forty times. Revisiting the data, the methodology paper records brand-count standard deviations running from 0.49 to 3.67 across cells. In the most volatile cells, three or four brands came and went every time the question was asked again.

Change the wording of the question a little and the answer changes. Switching the prompt from husband to wife dropped Gemini's mean from 11.03 brands to 6.28 and Grok's from 10.60 to 4.13. GPT-5.2 mentioned no brand at all in 28 of 40 husband-prompt responses, a pattern the author calls brand abstinence and reads as a deliberate design choice to avoid commercial recommendations rather than as bias.

The models do not agree with each other either. On the husband prompt, the overlap between Gemini and Grok came to a Jaccard similarity of 0.68, while Gemini and GPT sat at 0.14 and Grok and GPT at 0.18. When the question dropped gender and simply asked about 2025 gifts, the only brand all three models named was LEGO. A recommendation share on a dashboard therefore shows a different world depending on which model it measures.

The methodology paper splits the source of that instability four ways. There is token-level sampling variance created by temperature and nucleus sampling, variance from prompt phrasing within a semantic equivalence class, run-to-run variance from executing the same prompt at a different time, and variance from model versions changing underneath. Repeated queries press down on the first of those only; the other three have to be fixed by design or measured separately. The paper's analysis was carried out at temperature 0.3 across three models.

So how much of the total movement is the signal we are trying to measure. The author pooled two of the studies and split the variance over 450 iteration-level observations across 75 model by prompt cells. The object of measurement is the true value for a given prompt put to a given model, and the differences between those cells accounted for 21.8% of total variance. The other 78.2% arose inside the cells, which is to say while the same question was going back to the same model.

## Five Iterations Give 0.58, Fifteen Give 0.81

Educational measurement already has a tool for this calculation. Generalizability theory first splits variance into components, then projects how far reliability climbs as the number of iterations rises. The value it produces is the generalizability coefficient, and the convention is that anything above 0.80 is usable for group-level decisions, while judging a single object on its own calls for 0.90.

The inferential machinery is not newly invented either. Fitting a mixed model to data whose observations are not independent and obtaining power by simulation is exactly the pairing the US National Institute of Standards and Technology recommends in its AI 800-3 report on AI benchmark evaluation, and neither approach had previously been deployed in the LLM auditing literature. Existing audits that used repeated queries each chose an iteration count for pragmatic reasons, and that is the paper's starting point.

Feed the two variance components from the previous section into that framework and a value per iteration count falls out.

| Iterations | 5 | 7 | 10 | 12 | 15 | 20 |
| --- | --- | --- | --- | --- | --- | --- |
| Generalizability coefficient | 0.58 | 0.66 | 0.74 | 0.77 | 0.81 | 0.85 |

Orange marks the values above 0.80, the group-level decision threshold. The 0.90 threshold for individual-prompt decisions is not reached within twenty iterations. Source: arXiv:2609.04047, Table 8.
