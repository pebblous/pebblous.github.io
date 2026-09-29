---
title: Some countries in the AI usage rankings have no number of their own
subtitle: Microsoft
date: 2026-09-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Some countries in the AI usage rankings have no number of their own

_Microsoft_

## Executive Summary

> [!callout]
> Policy papers and news coverage cite "AI usage by country" as though it were a settled fact. This article takes one of those numbers and recounts it end to end, using nothing but published primary material. The number is the country-level share of AI users in the Q2 2026 Global AI Diffusion Report that Microsoft released on September 21, 2026. Recounting it shows that the rankings and the quarter-over-quarter changes come straight back out of the public dataset, that the three aggregates carried in the headline do not, and that the claim of a gap "continuing to widen" points in different directions depending on which yardstick is used.

> The nature of the leaderboard also differs from the way it gets cited. Open the technical paper the report names as its own methodology document and, of the 147 economies, 36 carry a figure that is not an observation of that country but a regional average shared with neighboring ones. The paper states this in its text and marks it row by row in an appendix table. That mark does not travel as far as the leaderboard. What a citing reader sees is an unmarked ranking. The same paper also records that for countries where few users consent to sending telemetry, the observed value is blended with the global average. Three layers of different provenance sit in one table.

> This article does not dispute the statistic. The report disclosed its adjustments and its own limitations, released the dataset under an MIT license, and wrote down in advance that widening the set of tools it counts will raise the figure for nearly every country, and that the rise will mainly reflect "improved measurement of existing usage rather than a sudden change in underlying adoption." That is a rare kind of candor. What is at issue here is the boundary of disclosure and the structural limits of a measurement design. Which is why the operating question is not the ranking but the denominator. What did the number we benchmark against actually count, and what did it not count?

36 of 147

Economies on the leaderboard with no figure observed for themselves

Marked row by row in the paper's appendix table. The observed count is 111

~600 million

People aged 15 to 64 living in those 36 economies

11.5% of the world's working-age population. Nigeria alone holds 126.4 million

19 tools

Size of the published list of what gets measured

Appendix A of the paper, as of 2025. Four Chinese tools are on it

382 million

Monthly users of the largest Chinese AI app, which is not on that list

Doubao. Larger than China's second and third apps combined (QuestMobile, May 2026)

## What That Number Counts

The definition of the metric is one line long. It measures, in Microsoft's words, "the share of people worldwide ages of 15 and 64 who have used a generative AI product during the reported period." The arithmetic behind that line is a product of three terms, and only the first of them is observed. The other two are estimated from outside data.

### 1.1. The Limitations the Report Wrote Down First

A word on the character of this article, before anything else. Everything below is a recount, not an exposé. The README of the GitHub repository that holds the dataset has a section headed "Limitations," and the report put four lines there itself.

"It reflects **usage, not capability or impact.** Cross-country comparisons depend on adjustments for infrastructure differences. U.S. subnational estimates are modeled small-area estimates, not direct raw county telemetry. Estimates are subject to revision as methodology improves."
                            Microsoft, README of the `microsoft/ai-diffusion-report` repository, "Limitations" section

The same section closes this way: "No single metric fully captures global AI adoption. This dataset should be considered alongside complementary indicators where possible." The fourth paragraph of the September 21 company blog post opens on the same note: "No single metric is perfect, and this one is no exception." So what this article does is measure, against published material, how large the limitations those sentences point at actually are.

### 1.2. The Method Is Not in This Report

The Q2 report runs eleven pages and has no methodology section. What it has instead is a "Citation and data availability" section on the last page that sends the reader to a different document. It says "This report is based on the following technical paper," names one arXiv paper, and adds that the same document is also available at `aka.ms/AI_Diffusion_Technical_Report`. Check whether the two addresses are different documents and they are not.

That paper is "Measuring AI Diffusion: A Population-Normalized Metric for Tracking Global AI Usage," posted on November 4, 2025, by five authors: Misra, Wang, McCullers, White, and Lavista Ferres. There is only a v1, and the data reaches to June 2025. The affiliation on it is the Microsoft AI for Good Lab, which is not the Microsoft AI Economy Institute that issued this quarter's report. The blog post carries the byline of the company's Chief Data Scientist, Juan Lavista Ferres. Everything from §1.3 onward comes out of that paper, and the party pointing readers to it is the report itself.

### 1.3. One Observation Multiplied by Two Estimates

The equation in Section 2 of the paper is a product of three terms. The first is the share of Microsoft product telemetry users for whom a visit to an AI site was observed. The second is desktop device penetration per person aged 15 to 64, built by dividing Windows monthly active devices by Windows share of the PC and tablet market to estimate total devices, then dividing by population. The third is a scaling factor added to account for mobile usage, built from each country's ratio of mobile to desktop traffic. The source data for the second and third terms sits outside Microsoft. Operating system share and platform traffic ratios come from StatCounter; population comes from the World Bank's World Development Indicators, with CEIC filling in countries the World Bank misses.
