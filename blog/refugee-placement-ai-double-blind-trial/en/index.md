---
title: Can AI Pick a Better Place for a Refugee to Find Work?
subtitle: The Swiss government split about 2,000 refugee cases at random and followed them for three years, and the side that got the AI recommendation worked more months
date: 2026-09-30
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can AI Pick a Better Place for a Refugee to Find Work?

_The Swiss government split about 2,000 refugee cases at random and followed them for three years, and the side that got the AI recommendation worked more months_

## Executive Summary

> [!callout]
> Between January 2020 and June 2023 the Swiss federal migration office split about 2,000 refugee cases at random into two arms. A case is one household placed together, or one person where someone arrived alone. One arm had a canton chosen by calculating employment probability shown on the placement officer's screen as a recommendation; the other had a random recommendation that imitated the existing procedure. The two screens looked identical, and neither the officer nor the refugee knew which was which. This article looks at what those three and a half years established and what they did not.

> The pre-registered primary outcome is the share of the three years after placement spent in work. The control group came in at 22.3 percent, and the side that received the AI recommendation was 2.2 percentage points higher. Drop the 2020 placements, made while COVID-19 was shaking the labor market, and the gap is 2.7 points; look only at the 2022 and 2023 placements, made after the market had largely returned to normal, and it widens to 3.9. The lower end of the 95 percent confidence interval for the full sample sits at +0.05 points, though, a hair above zero.

> Sections 1 through 4 report what the paper and its appendix say. Section 5 rereads the trial's design through the lens of data quality, and that reading is this article's own.

### Key Figures

Source: Bansak et al. (2026). [arXiv:2609.35448](https://arxiv.org/abs/2609.35448), Table 1 in the main text and appendix Tables S9 and S13.

<!-- stat-card -->
**+2.2pp** — Share of months worked in three years — About 10 percent above the control group's 22.3 percent. 95% CI +0.05 to +4.33pp

<!-- stat-card -->
**+3.9pp** — 2022–2023 placements — Among the 1,212 cases placed after the labor market returned to normal, the effect grows to about 17 percent

<!-- stat-card -->
**97%** — Recommendations the officers followed — Final authority rested with a person, and that person did not know which kind of recommendation it was

<!-- stat-card -->
**Half** — Realized against the 2018 forecast — The 2018 backtest promised 11 percentage points; measured the same way, the trial returned 5.2

## Nobody Knew Who Got the AI Recommendation

Where a refugee settles shapes the work that follows for a long time. In a study across 20 European countries, refugees were about 12 percent less likely to be employed than otherwise comparable migrants, and the gap persisted 10 to 15 years after arrival. That the first months and first few years weigh heavily on everything after them is a long-standing observation in this field. Yet in most countries the place of settlement is fixed by administrative rules such as population share. Who is likely to do well where does not enter the criteria. The person making the assignment has almost no information to base such a judgment on.

Someone who applies for asylum in Switzerland and receives protection status is assigned to one of 26 cantons. Which canton is not the person's choice; a placement officer at the federal migration office, the State Secretariat for Migration, decides. Placements have to respect a distribution key drawn up in proportion to cantonal population, and several nationality groups have to be balanced separately across cantons. Within those constraints the officer decides, day by day, who goes where.

GeoMatch, built by the Immigration Policy Lab at Stanford University and ETH Zurich, lays one recommendation on top of that step. A prediction model trained separately for each canton estimates how much this person would work over three years in each canton, and the tool picks the canton that makes total predicted employment as large as possible while respecting the constraints. Cases are handled one at a time as they arrive, so a decision has to be made now without knowing who comes next. The tool dealt with that by sketching the mix of cases still to come and choosing the canton that disturbs that expected distribution least. It is a rule against spending in advance the places later arrivals will need.

The trial ran by preparing two versions of that recommendation screen. An eligible case had been routed through the fast-track procedure, had already received subsidiary protection or refugee status, was not legally required to go to a particular canton, and included at least one adult. Every case meeting those terms was split as if by a coin toss, half shown the canton the algorithm had chosen and half shown a canton drawn at random in imitation of the existing procedure. The two screens had the same format, and nothing marked which procedure had produced the recommendation. An officer could respond to the recommendation on the screen but not to its source. The refugee did not know either.
