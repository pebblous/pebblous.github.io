---
title: The Government Built the Training Data. Then Other Agencies Built It Again.
subtitle: Korea
date: 2026-08-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Government Built the Training Data. Then Other Agencies Built It Again.

_Korea_

## Executive Summary

> [!callout]
> On 12 August 2026, Korea's Board of Audit and Inspection published the results of an audit into public AI training data. Local governments and public agencies had been building the same datasets the national government had already built. The Ministry of Science and ICT spent ₩7.38 billion (roughly US$5.5 million) on four categories of image data covering wildlife, household waste, concrete cracks and eggs. Five other bodies, including the Seoul Metropolitan Government and the Korea Expressway Corporation, then spent another ₩610 million building something similar. More than half of the household-waste images collected by Seo-gu, a district of the city of Daejeon, resembled images that were already public.

> Duplication is a symptom, not a cause. When an agency began a project, it had no practical way to find out what already existed. That absence is what the audit's phrase "no prior review process" actually describes, and it is a catalog and metadata problem before it is a budget problem. Quality follows the same shape. Nine of the 20 largest builders released their data without third-party verification. Quality standards exist in abundance. What did not exist was any party designated to apply one.

> What renders data unusable is usually not the data. It is the line that was never attached to it. Some 2,680 CCTV frames collected for autonomous-driving research were unusable. Nothing was wrong with the photographs. The annotation marking where each object sat in the frame was empty. The US Government Accountability Office found something comparable when it reviewed AI inventories at 23 federal agencies and judged only five complete, so this is not a Korean peculiarity. If your company has been pulling public datasets into a training pipeline because they are free and therefore unaudited, this audit is about you.

<!-- stat-card -->
**₩1.63tn** — Spent building public AI training data (about US$1.2bn) — Ministry of Science and ICT, 2017–2024

<!-- stat-card -->
**57.8%** — Of one district's waste images resembled data already published — 5,200 of 9,000 frames, ₩130m project

<!-- stat-card -->
**9 / 20** — Agencies that released data with no third-party verification — Among the 20 largest builders by volume

<!-- stat-card -->
**84.2%** — Of sampled datasets could not be quality-tested at all — 96 of 114 datasets at five agencies had no schema spec

## What the audit counted, and what it could not

The Board of Audit and Inspection of Korea, the country's supreme audit institution, ran its audit from September to December 2025 under the title "State of AI Industry Promotion III (AI Training Data)." Its subjects were the Ministry of Science and ICT, the Ministry of the Interior and Safety, the Personal Information Protection Commission and the National Information Society Agency, among others, and the findings were published on 12 August 2026. The audit counted two things. One is the ₩1.63 trillion of budget that went into building AI training data between 2017 and 2024. The other is the 908 datasets that were built with that money and published on AI Hub, the national training-data portal, as of November 2025.

The two figures are measured against different clocks. The first is eight years of cumulative spending; the second is a count at a single point in time. Dividing one by the other to get a cost per dataset would produce a number that means nothing. What they do say together is how this program has been measuring itself. Budget execution and dataset count were the two axes on which performance was reported, and the count kept climbing, from 833 datasets in 2023 to 908 in November 2025.

The stage for this audit, though, is outside those 908. Twenty-six public bodies had published a further 313 datasets on their own portals rather than on AI Hub. These are datasets that provincial governments and state-owned enterprises funded separately, built separately and posted on separate websites. The 313 do not appear alongside the 908 in any single search. Neither list could see what the other contained, and both grew anyway.

| What the audit counted | Figure | Basis |
| --- | --- | --- |
| Build budget | ₩1.6328 trillion | Ministry of Science and ICT, cumulative 2017–2024 |
| Datasets published on AI Hub | 908 | As of November 2025 |
| Datasets published outside AI Hub | 313 | On the portals of 26 individual public bodies |
| Audit period and subjects | Sept–Dec 2025 | Science and ICT, Interior and Safety, PIPC, NIA and others |

Source: Korean press coverage (Kyunghyang Shinmun, Aju Business Daily, Seoul Economic Daily, DigitalDaily, SBS) of the Board of Audit and Inspection's "State of AI Industry Promotion III (AI Training Data)" audit, released 12 August 2026.
