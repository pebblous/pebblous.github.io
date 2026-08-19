---
title: Kaggle Medals Stop Predicting Performance After One Year
subtitle: A Washington University study of 444,698 contest entries pushes back on the belief that generative AI drained the value of credentials
date: 2026-08-20
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Kaggle Medals Stop Predicting Performance After One Year

_A Washington University study of 444,698 contest entries pushes back on the belief that generative AI drained the value of credentials_

## Executive Summary

> [!callout]
> Song Yao, a professor at Washington University in St. Louis, went through Kaggle's public record and measured how long a medal keeps predicting the performance that follows it, across 444,698 contest entries. The answer was one year. A medal less than a year old predicted the next result clearly, and anything older predicted almost nothing. The pattern was already in place long before ChatGPT arrived.

> The part of the story that generative AI seems to own is the upload-format medal. That stock lost 82% of its predictive power in the AI era, but once the author broke the loss apart, somewhere between half and three quarters of it had nothing to do with AI making medals cheap. The contest format itself had already been retired, no new medals were being issued, and the remaining stock simply aged at its usual rate.

> No evidence turned up that the people winning medals had changed. What changed sat on the institutional side, in how the signal is issued and displayed. So when you read a credential on a résumé, when it was earned matters more than what it was.

### Key Numbers

Source: Song Yao, [arXiv:2608.17111](https://arxiv.org/abs/2608.17111) (2026-08-17)

<!-- stat-card -->
**10 to 12 pts** — The gap a fresh medal opens — A competitor holding one medal less than a year old finished that many leaderboard percentile points above one holding none

<!-- stat-card -->
**99% · 95%** — Explanatory power sitting in the first year — Share of the performance spread that the under-one-year bands capture on their own, before AI and in the AI era

<!-- stat-card -->
**82%** — Predictive power lost by upload medals — Over the same span, code-format medals moved the other way, from 0.065 up to 0.087

<!-- stat-card -->
**43 to 87%** — Share of that loss explained by aging — 43 to 62% under the attribution least favorable to aging, 64 to 87% under the most favorable one

## Where the Belief Came From

The claim that generative AI destroyed the value of credentials rests on real evidence. On freelance platforms, proposals started reading better while telling clients less about the person who sent them. In unproctored exams, scores inflated. In both cases the reason was the same: unverified words became cheap. Once a polished cover letter and a clean exam answer are things anyone can produce in seconds, the habit of picking people by reading them starts to wobble.

A Kaggle medal is not that kind of signal. A competitor submits predictions, those predictions are scored against answers nobody can see, and the ranking comes from a direct comparison with everyone else working the same problem. Polished writing does not carry anyone to the top of a leaderboard. Generative AI did make plausible-looking submissions cheap, but it did not make a top finish cheap.

So the question this study asks is a narrower one. Does a verified signal survive the AI era? The author's answer is close to yes, though it is not the reassuring kind of yes. Something else was eating the signal, and verification could not stop it.

## Why Kaggle Works as a Laboratory

The decisive condition is that Kaggle ran two scoring regimes side by side for years. In an upload-format competition, a competitor submits predicted values and nobody checks how those predictions were produced. In a code-format competition, the competitor submits code, and the platform executes that code on data it keeps hidden before assigning a score. Scoring that reads only the output and scoring that runs the process coexisted on the same leaderboards, among the same people.

The record is deep enough for that comparison. Kaggle has logged 18.67 million contest submissions since 2010, and it awards medals along with lifetime tiers named Expert, Master and Grandmaster. Plenty of data scientists put those tiers on a résumé or a profile. The panel the author analyzed covers 214 medal competitions that closed between 2018 and 2025, with 197,561 competitors and 444,698 entries. The quarter in which ChatGPT was released, the fourth quarter of 2022, was treated as a boundary and left out of both eras, and the years from 2010 through 2017 entered the study only as the medal history each competitor had accumulated by then, never as performance.

Performance is measured as the final leaderboard percentile, and the predictor is the count of medals a competitor had accumulated before entering that contest. Medals are sorted into bands by how long ago they were won and by which format produced them. The slope of each band is how much information that medal carries about performance.

Some things were filtered out while building the panel. Three formats whose standings depend on data generated after the deadline were dropped: simulation competitions where competitors' programs play against each other, two-stage competitions where the final test data arrives after the close, and forecasting competitions that score predictions about events yet to happen. Seventy-three percent of entries came from solo competitors, and team results were credited equally to every member, though the conclusions held when the panel was restricted to solo entries or when results were credited only to the person who actually submitted.

## A Medal Lasts One Year

For medals less than a year old, the slope ran between 0.15 and 0.18 per log medal. In plain terms, a competitor with one such medal finished 10 to 12 leaderboard percentile points above a competitor with none. For medals past their first year, the slope drops to somewhere between 0.01 and 0.03, which is not meaningfully different from having nothing at all.

Measured as information, the concentration is even starker. When medals of every age and both formats are used together to predict performance, the two under-one-year bands alone deliver 99% of what the full set explains. Recomputed on AI-era results, the figure is 95%. Adding every remaining band back in leaves very little on the table.
