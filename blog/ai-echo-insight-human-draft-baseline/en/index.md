---
title: AI ECHO INSIGHT Finds Human Drafts Get Rewritten Just as Often
subtitle: In a randomized trial of 1,200 echocardiograms at Kaiser Permanente, cardiologists substantially changed 50.6% of the AI drafts and 49.7% of the human ones
date: 2026-11-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI ECHO INSIGHT Finds Human Drafts Get Rewritten Just as Often

_In a randomized trial of 1,200 echocardiograms at Kaiser Permanente, cardiologists substantially changed 50.6% of the AI drafts and 49.7% of the human ones_

## Executive Summary

> [!callout]
> A randomized trial handed the first draft of the echocardiogram report to an AI and then measured what happened to it. Kaiser Permanente Northern California presented the results at the American Heart Association's Scientific Sessions under the name AI ECHO INSIGHT. The same 1,200 studies went through all three arms. One arm had the AI write the preliminary read, one had a sonographer write it, one had a cardiologist write it. A different cardiologist, who did not know who had written the draft, then finalized each of the three.

> The finalizing cardiologist made substantial changes to 50.6% of the AI drafts. More than half. Drafts written by people came to 49.7%. Neither rate says whether the read was correct. Both say how much got rewritten on the way to the final report, and measured that way, AI and people land in nearly the same place. The time it took to finalize a report fell from 8.5 minutes to 4.6.

> Sections 1 through 4 report what the American Heart Association's presentation materials, the trial registration, and the protocol paper say. Section 5, which looks at this design from the position of someone building a model evaluation, is this article's own interpretation.

### Key Numbers

Four figures below. The first two are what the trial produced; the last two are the design that made those results readable.

Source: American Heart Association Newsroom, ["AI-interpreted echocardiograms comparable to human reports"](https://newsroom.heart.org/news/ai-interpreted-echocardiograms-comparable-to-human-reports-cardiologists-time-cut-by-about-50) (November 9, 2026), and [ClinicalTrials.gov registration NCT07229300](https://clinicaltrials.gov/study/NCT07229300).

<!-- stat-card -->
**50.6%** — Share of AI drafts substantially changed — Drafts written by people came to 49.7%. The difference is 0.9 points, with a 95% confidence interval from −2.1 to 3.9

<!-- stat-card -->
**4.6 min** — Time to finalize an AI draft — Producing a report without AI assistance took 8.5 minutes. A 46% cut

<!-- stat-card -->
**1,200** — Studies that went through all three arms — Built from 1,000 consecutive studies plus 200 with moderate or greater valvular disease

<!-- stat-card -->
**5 points** — The noninferiority margin drawn in advance — Picked between the 4.1% major discordance and 17.4% minor discordance reported for fellows' reads

## Half of Every Draft Changes at the Finalizing Step

Kaiser Permanente Northern California presented the AI ECHO INSIGHT results on November 9, 2026, at the American Heart Association's Scientific Sessions in Chicago. The subject was 1,200 adult transthoracic echocardiograms, and the trial set a workflow in which the AI writes the preliminary read and a cardiologist finalizes it against the workflows hospitals run today. The studies were acquired over two weeks in March 2025 at 21 Northern California medical centers, across inpatient wards and outpatient clinics, and the patients averaged 69 years of age, 47% of them women. The lead investigator is Keane K. Lee of Kaiser Permanente Santa Clara Homestead Medical Center.

Substantial change came to 50.6% for the AI drafts and 49.7% for the pooled drafts written by sonographers and cardiologists. The difference is 0.9 percentage points, and the 95% confidence interval runs from −2.1 to 3.9 points. The line drawn before the trial opened was 5 points, so the whole interval came in inside it. This is what the investigators mean when they write that noninferiority held. Not that AI is better than people, but that it is not meaningfully worse.

Time went down. Reviewing an AI-written preliminary read and finalizing it took an average of 4.6 minutes per study, against 8.5 minutes to produce a report without AI assistance. A 46% cut. The investigators also estimated that sonographers would save about 10 minutes per study if the AI took over the preliminary read, but that number points at a different place than the cardiologist's 4.6 minutes. The first is the time a sonographer spends writing a draft; the second is the time a cardiologist spends finalizing one. The reason the investigators put weight on a few minutes is volume. Lee noted that cardiologists read so many echocardiograms that even a few minutes saved per interpretation adds up to a significant amount of time over the course of a day. Alongside the announcement, the American Heart Association carried a Health Resources and Services Administration projection of a shortage of roughly 7,000 cardiologists in the United States by 2036.

The cardiologists doing the finalizing did not know where the draft in front of them had come from. Every preliminary read was entered in the same standardized format, and the AI output was deliberately styled to look as though a person had written it, so that formatting alone would not give the source away. Lee's statement that the over-reading cardiologists could not distinguish AI drafts from human drafts rests on that design rather than on a measurement. The result itself Lee put in one sentence: "AI preliminary interpretation of adult transthoracic echocardiograms was noninferior to pooled sonographer and cardiologist preliminary interpretation."

## Every Study Ran Through All Three Arms

Where this trial parts company with the usual medical AI study is in how it built its comparison. Rather than splitting patients into two groups and giving AI to one of them, it put a single study through all three arms. The AI writes the preliminary read in one, a sonographer writes it in another, a cardiologist writes it in the third. Each of the three drafts went to a different cardiologist to be finalized, and the one finalizing did not know the source. The AI in use is EchoPrime, a deep learning model that reads standard echocardiographic views with computer vision and produces a complete report.

That the three arms share one study is the heart of the design. The images are the same, the patient is the same, the credentials of the person finalizing are the same, so whatever difference remains in the result comes only from who wrote the draft.
