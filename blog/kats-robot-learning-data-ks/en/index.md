---
title: KATS Drafts Korea
subtitle: Robot motion data gets a set format now; accuracy rules come in 2027
date: 2026-11-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# KATS Drafts Korea

_Robot motion data gets a set format now; accuracy rules come in 2027_

## Executive Summary

> [!callout]
> South Korea has drafted a national standard for how AI robots such as humanoids record the motion data they learn from. The Korean Agency for Technology and Standards (KATS), part of the Ministry of Trade and Industry, issued a 60-day public notice for a draft Korean Industrial Standard (KS) titled "Datasets for Robot Manipulation Learning" and is taking comments from industry. It aims to finalize the standard in the first half of 2027.

> The draft sets step-by-step collection procedures, a record structure and a storage format. It also sets minimum requirements for aligning sensor data such as video and audio with the robot's state and action records in time, along with a metadata format. It does not include a quality standard for judging whether the data is complete and accurate. KATS said it will develop that standard separately in early 2027 and propose it as an international standard.

> Once the format KS is in place, data collected in Korea's humanoid demonstration projects and robot data factories will share one structure. Until the quality standard arrives, there is no common yardstick for whether that data is good enough to train on.

### Key Figures

Source: KATS announcement (Nov 27, 2026, as reported by [EBN](https://www.ebn.co.kr/news/articleView.html?idxno=1733181) and [BetaNews](https://www.betanews.net/article/view/beta202611270006)); success rates from [AI Times](https://www.aitimes.com/news/articleView.html?idxno=217856) coverage of [Open X-Embodiment (arXiv:2310.08864)](https://arxiv.org/abs/2310.08864)

<!-- stat-card -->
**60 days** — Public notice period — Comments open from Nov 27; the KS is due to be finalized in the first half of 2027

<!-- stat-card -->
**38 companies** — Forum members behind the draft — Joined by about 170 experts in the Korea Robot Standards Forum

<!-- stat-card -->
**41%→63%** — Task success rate — Average for prior models vs. RT-1-X, trained on multi-robot data pooled in a common format

<!-- stat-card -->
**Early 2027** — Quality standard development — A separate completeness and accuracy standard; no adoption date announced

## KATS Opens 60-Day Notice on Robot Manipulation Dataset KS

KATS said on November 27 that it had issued public notice of a draft KS, "Datasets for Robot Manipulation Learning." It will collect industry comments for 60 days and plans to finalize the standard in the first half of 2027. News1, EBN, BetaNews, Pointe Economy and other Korean outlets reported the announcement the same day.

KATS explained that datasets used to develop, train and evaluate robots differ in structure and attributes from one manufacturer and robot model to the next, which has made it hard for companies to share or reuse data. It also cited the absence of an established international standard for robot learning datasets. Seeing standardization of Korea's AI robot industry as urgent, it chose to set a national standard first.

The draft lists requirements for each stage of building a dataset: planning, collection, preprocessing and storage. It defines a data structure that records what task a robot performed, in what environment and through what steps. It sets minimum rules so that sensor data captured during a task, such as video and audio, lines up in time with the robot's state and action data. It also formalizes a metadata format covering the collection environment, data type and storage location.

News1 and some other outlets carried the announcement's breakdown of the draft into four parts.

| Part of the draft | What it covers |
| --- | --- |
| Data generation and management procedures | Data lifecycle (planning, collection, preprocessing, storage) |
| Learning dataset hierarchy | Units that make up the data |
| Data types and attribute definitions | Data content (sensor data, robot state and actions) |
| Storage structure and file format | Data representation (storage method, metadata) |

Source: compiled from Korean press coverage of the KATS announcement. The reports did not give specific field lists or file format names.

The Korea Robot Standards Forum (KOROS) wrote the initial draft based on results from a ministry-funded robot R&D project. The forum includes 38 companies, among them LG Electronics, Samsung Electronics, HD Hyundai Robotics and Doosan Robotics, and about 170 experts. KATS refined the draft through consultations with companies and experts and a technical review.

KATS Administrator Kim Kyu-sung said the draft "is a case where demand proposed by industry, built on robot R&D results, was developed into a KS draft, and it matters because it can be applied in the field." KATS said that once adopted, the standard will be used to collect training data in a uniform format in its humanoid demonstration and deployment projects and its robot data factory program.

## KATS Plans a Separate Quality Standard in Early 2027

The draft contains no criteria for judging data quality. KATS said it will separately develop a standard in early 2027 that sets out how to validate and evaluate the completeness and accuracy of robot learning data, and that it intends to propose that standard internationally.

The two standards do different jobs. The format standard decides which fields go into a single demonstration record, what time reference links the camera log to the joint log, and how files are stored. The quality standard decides how to check that those records have no missing stretches and that the recorded values match what the robot actually did. Data that follows the format standard can still carry sensor errors or gaps.

Here is the timeline KATS announced for each standard.

| When | Format standard (this KS) | Quality standard |
| --- | --- | --- |
| Nov 27, 2026 | Draft notice issued; 60-day comment period begins | Not applicable |
| Early 2027 | Comments incorporated | Completeness and accuracy standard developed |
| First half of 2027 | KS adoption targeted | International proposal planned (timing not announced) |

Source: KATS announcement (compiled from Korean press coverage). The reports did not give the end date of the comment period.

The format KS is set to be finalized in the first half of the year, while the quality standard will still be in development around then. No adoption date for the quality standard has been announced. In the meantime, the only common rule applying to data gathered in the humanoid demonstration projects and robot data factories is the format KS.

## Open X-Embodiment's 41% and 63%: Results From Pooled Multi-Robot Training

In its coverage of the draft, [AI Times](https://www.aitimes.com/news/articleView.html?idxno=217856) also cited a study from abroad. Researchers converted data collected from different robots into a common format and used it to train an AI model, RT-1-X. In evaluations at five university labs on tasks such as opening doors and manipulating objects, prior models trained on each lab's own data averaged a 41% task success rate, while RT-1-X, trained on the pooled data, averaged 63%.

*▲ Pebblous original diagram — average task success rate (averages only; accuracy of each record was not part of the comparison) | Source: [Open X-Embodiment (arXiv:2310.08864)](https://arxiv.org/abs/2310.08864)*

The study is "[Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)," released in 2023 by Google DeepMind and 20 other institutions and presented at the ICRA 2024 robotics conference. The researchers organized more than one million demonstration episodes from 22 robot types into a single format and released them. The paper reports that in labs with small datasets, RT-1-X achieved a success rate 50% higher on average than each lab's original method. The 41% and 63% in the press coverage are the averages behind that comparison.

What this comparison measured was the effect of training on data from many robot types together. The common format was the precondition for pooling the data. How accurate each pooled record was is not part of the comparison. The new KS addresses that precondition.

## Korea's KS Arrives While ISO 26264 Is Still a Working Draft

Work on robot data standards is also under way at the International Organization for Standardization (ISO). ISO/WD 26264-1, which covers humanoid robot data, was released as a working draft (WD) in June 2026. A working draft is the earliest stage; it still has to pass through committee draft (CD) and draft international standard (DIS) stages before it becomes a published international standard. Pebblous summarized that draft in "[Robots Are Multiplying. Why Isn't Their Experience?](/report/humanoid-robot-data-iso-standard/en/)"

That is the backdrop to KATS issuing a KS first on the grounds that no international standard has been established. If Korean companies build up data in the KS format and the international standard later settles on a different format, conversion work may follow. What KATS named as its candidate for an international proposal is the quality standard it will develop after this format KS.

On that sequence, the format will be fixed first as a domestic KS, and the method for evaluating quality will be settled through international discussion. If that discussion picks quality-evaluation items that the format KS does not record, data already collected in the KS format will need those items filled in after the fact. That is why it matters that the quality standard draft be built to mesh with the KS's time-alignment and metadata fields.

## Why Pebblous Is Watching This News

Pebblous diagnoses and certifies the quality of AI training data. The completeness and accuracy evaluation standard that KATS plans to develop in early 2027 falls in the same territory. The time-alignment and metadata fields set by the format KS are also what quality measurements will be checked against.

Pebblous has covered the absence of data quality validation in the government's physical AI investment plan in "[Robot Experience Data Can't Be Bought](/report/korea-880-trillion-physical-ai-data-gap/en/)," and how Korean data quality test reports are treated under European regulation in "[Korean Data-Quality Test Reports Count Only as Evidence in Europe](/report/korea-robot-training-center-evidence-chain/en/)." This KS notice shows the format standard being settled first, while the quality standard so far has only a schedule.

We were unable to check the original KATS press release on korea.kr. The facts here were compiled by cross-checking reports of the same announcement from EBN, BetaNews, Pointe Economy, News1, AI Times and others, and the 41% and 63% figures were checked against the Open X-Embodiment paper.

## References

### Academic Paper

- 1.Open X-Embodiment Collaboration. (2023). "[Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)." ICRA 2024.

### Press Coverage

- 2.Lee Jik. (2026). "[로봇마다 제각각이던 학습 데이터…국표원, KS 표준으로 묶는다](https://www.betanews.net/article/view/beta202611270006)." BetaNews, November 27, 2026.
- 3.Shin Seung-hoon. (2026). "[산업부, AI 로봇 학습 데이터 국가표준 추진…내년 상반기 제정](https://www.ebn.co.kr/news/articleView.html?idxno=1733181)." EBN, November 27, 2026.
- 4.Kim Jun-ho. (2026). "[휴머노이드 등 AI 로봇 학습 데이터 표준화 첫발…국표원, KS 제정안 예고고시](https://www.pointe.co.kr/news/articleView.html?idxno=88552)." Pointe Economy, November 27, 2026.
- 5.Joo Young-hyo. (2026). "[서로 다른 AI 로봇도 학습데이터 공유…정부, 국가표준 제정 추진](https://www.aitimes.com/news/articleView.html?idxno=217856)." AI Times, November 27, 2026.
