---
title: Apple Is Collecting Health Questions It Will Not Train On
subtitle: The US study that opened on November 15 asks 200,000 people whether the same answer lands harder once it knows their sleep and heart rate.
date: 2026-11-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Apple Is Collecting Health Questions It Will Not Train On

_The US study that opened on November 15 asks 200,000 people whether the same answer lands harder once it knows their sleep and heart rate._

## Executive Summary

> [!callout]
> Apple has opened a study in the United States that takes people's health questions. Announced on November 15, 2026, it is called the Apple Health AI Usage Study. Participants install a research app on an iPhone and ask about a symptom or a condition, and OpenEvidence, a clinical AI company, answers using literature such as The New England Journal of Medicine, the Journal of the American Medical Association, and Nature. Participants can also pick which HealthKit records to send along, among them resting heart rate, activity, sleep, and lab results, and enrollment is capped at 200,000 people age 21 and older.

> One condition is attached in the press release. The study data will not be used to train AI models. Records that pair a health question with the body of the person who asked it are among the hardest to obtain on the open market. Apple is collecting that pairing at a scale of 200,000 people and has closed the training door first. What it wrote down to look at instead is not whether the answer is correct, but how far people trust it, how much of it they understand, and what they do afterward.

> Sections 1 through 4 are the facts left by Apple's announcement, by press coverage, and by a June paper in Nature Medicine. Section 5 is the Pebblous reading.

### Key Figures

The first two numbers are the size of the study. The last two are the scores earned by the tool the study runs on. Putting them side by side is where the tension in this announcement shows.

Sources: [Apple Newsroom](https://www.apple.com/newsroom/2026/11/apple-launches-research-study-to-explore-the-use-of-ai-for-health/) (Nov 15, 2026) · [Nature Medicine, "General-purpose large language models outperform specialized clinical AI tools on medical benchmarks"](https://www.nature.com/articles/s41591-026-04431-5) (Jun 12, 2026).

<!-- stat-card -->
**200,000** — Enrollment cap — Open to people age 21 and older in the United States, with an Apple Intelligence-enabled iPhone running iOS 26 or later

<!-- stat-card -->
**12+ months** — Study length — Participants answer a monthly survey throughout. The length and the survey cadence are not in Apple's press release and come from press reports

<!-- stat-card -->
**62.6 : 88.0** — HealthBench score (out of 100) — What OpenEvidence and GPT scored in the June Nature Medicine comparison, a test of agreement with expert answers

<!-- stat-card -->
**2.84** — Clarity average (out of 4) — Across 100 real physician queries graded blind by 12 clinicians, OpenEvidence came out lowest of the six systems

## What Happens When You Join

What Apple opened is a study, not a shipping product. Install the Apple Health AI Usage Study app from the App Store, clear the consent steps, and you are a participant; from then on you simply ask whatever you have been wondering about. Whether it is all right to be sleeping this badly, what a lab number means, whether a symptom is worth a clinic visit. OpenEvidence writes the answer, and citations to the peer-reviewed literature behind it appear on screen alongside it. The app is not only a question box. Press reports list planning workouts and meals among its uses.

The conditions are US residence, age 21 or older, an Apple Intelligence-enabled iPhone (iPhone 15 Pro or later), and iOS 26 or later. Enrollment is capped at 200,000, and press reports say the study runs longer than 12 months with participants answering a monthly survey. Asking a question is not where it ends, in other words. Apple says the app carries safety guardrails meant to detect certain concerning questions, such as self-harm, and to suggest following up with a provider.

Several lines are drawn around the handling of the data as well. According to Apple, questions are stripped of identifying information before they travel to a secure third-party cloud, and OpenEvidence deletes queries and responses within 24 hours and does not train its own models on those queries. Whether to send HealthKit records, and whether to answer the survey, is the participant's call. Sitting above all of that is one sentence from the body of the press release.

"The study is designed from the ground up with privacy protections, transparency, and clinical guardrails, and study data will not be used to train AI models."

The last clause is the one that matters here. Apple's press release nails it down in the body of the announcement, under privacy.

One thing is worth keeping separate. Everything up to here is the design Apple describes, and no outside audit has confirmed any of it yet. The content of a promise and the evidence that the promise was kept are two different records, and the second has never been published. The name of the third-party cloud that holds the questions has not come out either.

## A Tool Built for Doctors Opens to the Public

OpenEvidence, the partner Apple picked, starts from somewhere other than the companies that grew out of consumer chatbots. Apple's press release introduces it as "a leading clinical AI platform widely used by healthcare professionals." It is the tool a physician opens mid-visit to check the evidence quickly, and the structure of attaching a source document to every answer was built for that use.

Pebblous gave this company a piece of its own back in June. The story there was that instead of growing a bigger model, it licensed literature such as The New England Journal of Medicine, the Journal of the American Medical Association, and Cochrane and built a moat out of it ([The Moat of the Medical AI 40% of US Doctors Use Is Licensed Journals](/report/openevidence-medical-ai-data-moat/en/)). The subject of that piece was the doctor. In this study, the person sitting in front of the screen is a layperson.

That difference becomes the raw material of the research. What happens when an answer tuned for professionals lands in front of someone who is not one? Apple does not know whether the title of a cited paper raises trust or goes past unread, or which answer a person follows when the accurate one is written in hard words and the less accurate one in plain words.

## The Four Things Apple Says It Will Measure

The press release names four aims for the study: what builds a user's trust, what the quality of the responses looks like, how much of an answer a participant comprehends, and what everyday health actions follow from it. Sumbul Desai, M.D., Apple's vice president of Health and Fitness, said at the announcement, "At Apple, we believe responsible innovation starts with scientific rigor and clinical grounding." Desai added that "Health is deeply personal, and conducting a dedicated research study is the most thoughtful way to understand how people engage with, comprehend, and evaluate health AI in everyday life."

Not one of the four asks directly whether the answer is medically correct. Even the quality rating has participants themselves scoring accuracy, specificity, and relevance, which puts a layperson in the grader's seat. The axis of measurement points at the person, not the model.

That is where the decision to leave HealthKit sharing optional comes from too. Apple describes it as a way to see how the experience changes once personal data is added. The same person receives answers that know their sleep and heart rate and answers that do not, which makes this a design for checking, across 200,000 people, whether an answer that knows your records lands harder.

The press release adds one more line outside those four. It says the study will also explore how health AI can potentially help participants better prepare for clinical visits with their own doctors. Working out what to ask and what to bring before seeing your own physician puts the thing being measured past the screen and up to the exam room door. The app also guides users toward specific providers on questions that look concerning, as reported.
