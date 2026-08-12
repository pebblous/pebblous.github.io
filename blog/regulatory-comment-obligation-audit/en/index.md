---
title: Comment Volume Barely Predicted Which EPA Obligations Changed
subtitle: An obligation-level audit of 70,075 comments across 36 EPA rulemakings, and the resolution problem it leaves for every notice-and-comment record
date: 2026-08-13
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Comment Volume Barely Predicted Which EPA Obligations Changed

_An obligation-level audit of 70,075 comments across 36 EPA rulemakings, and the resolution problem it leaves for every notice-and-comment record_

## Executive Summary

> [!callout]
> If you have ever filed a comment on a proposed rule, you probably wondered what happened next. Which provision did it actually reach? A study posted to arXiv on August 11, 2026 took 70,075 public comments filed on 36 rulemakings at the US Environmental Protection Agency and matched them not to the rules as wholes but to the individual duties written inside those rules. Jianing Fan and Yue Yao wrote it, and the paper has been accepted as a full paper at ACM EAAMO this year in Munich.

> The paper starts from the gap between a right and a capacity: anyone may file a comment, but not everyone can move the text. Comments filed mostly by organizations landed on outcomes that tidied wording rather than outcomes that changed what a duty requires. The authors place that asymmetry upstream of the moment an agency writes its response, in the differing ability to locate a specific legal obligation, read it, and argue with it.

> Korea ran its own version of this procedure twice for the enforcement decree of the AI Framework Act, which took effect on July 21, 2026. No public record has been found that lets anyone follow those comments down to the provisions they changed. The EPA figures do not transfer to Korea. What transfers is the question that produced them.

### Key Figures

The first two numbers give the size of the audit. The last two are what did not come out as expected, even at that size.

Source: [arXiv:2608.10329](https://arxiv.org/abs/2608.10329)

<!-- stat-card -->
**70,075** — Comments matched duty by duty — The anchor sample drawn from 36 EPA rulemakings

<!-- stat-card -->
**786,197** — Comments in the corpus behind it — Across 6,145 dockets, from 2010 through 2022

<!-- stat-card -->
**Support or oppose** — The signal that split nothing — Neither direction clearly tracked where the final text landed

<!-- stat-card -->
**Editorial refinement** — Where organizational comments clustered — Their share of substantive changes to duties ran lower

## Receipt Is Recorded, Influence Is Not

Federal regulation in the United States runs through a procedure called notice-and-comment. An agency publishes a proposed rule, anyone affected may file a comment, and the agency has to consider those comments before it issues the final rule. The design is egalitarian, and that is where the paper begins. The formal right of access is identical for everyone; the substantive capacity to move rule text is not.

Measuring that difference has been the hard part. Existing approaches work on a rule as a single object, or on the comment corpus in aggregate. The paper argues that this unit is too coarse, because what commenters try to change is never the rule as a whole but a discrete obligation buried inside it. A request to stretch a reporting cycle from 90 days to 180, to lift a category of emission source out of scope, to loosen a measurement tolerance, all of them aim at one sentence somewhere in the text. Count at the level of the rule and whether that request was granted disappears into the average.

What the authors propose is obligation-level responsiveness auditing. It runs in four steps. First, extract the individual obligations from the proposed rule and from the final rule. Second, attach each incoming comment to the obligation it addresses. Third, classify what happened to that obligation on the way from proposal to final text. Fourth, check the results against blind human judgment at every component that carries weight. AI does the classification, and people, working blind, recount it to see whether the classification holds.
