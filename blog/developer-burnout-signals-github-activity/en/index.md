---
title: Burnout Showed Up in the Commit Log Months Before Anyone Said It
subtitle: Queen
date: 2026-09-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Burnout Showed Up in the Commit Log Months Before Anyone Said It

_Queen_

## Executive Summary

> [!callout]
> A paper went up on arXiv on September 16. Three researchers at Queen's University in Canada built a framework called BurnRiSc, and its job is simple. It takes activity already public on GitHub, when someone pushed a commit, how often they weighed in on reviews, what vocabulary they used in issue threads, splits that into fourteen separate signals, and folds them into one monthly burnout risk score. No questionnaire goes out, and nobody gets asked. This article looks at what that score actually showed, and at what changes when the same method walks inside a company.

> In the result, the striking part is the lag. Among ten developers who publicly disclosed burnout, six had a stretch, 6 to 15 months ahead of that disclosure, where the score rose above the threshold and stayed there for three straight months. Counting the peak-score month as well brings that to eight. But the framework carries fourteen weights, and the confirmed cases it learned them from number ten. The authors call this stage a demonstration of feasibility. The paper never claims validation.

> Sections 1 through 3 follow what sits in the paper and in the public record. Section 4, where this crosses over to company collaboration logs, extends a warning the authors wrote down themselves. Section 5, which asks where consent belongs, is this article's own reading.

### Key Numbers

Source: [BurnRiSc paper (arXiv:2609.19422, 2026-09-16)](https://arxiv.org/abs/2609.19422)

<!-- stat-card -->
**6 of 10** — Disclosures the score preceded — Six of the ten developers who disclosed burnout crossed the threshold 6 to 15 months ahead of saying so. Counting the peak month makes it eight

<!-- stat-card -->
**68** — Contributors scored in total — What remains after keeping only people with three years of history across ten repositories. Ten of them are confirmed cases, against fourteen weights

<!-- stat-card -->
**6.8%** — Share of the score sheer activity explains — The authors tested the "you just found busy people" objection themselves. The association is real, but it accounts for 6.8% of the variance

<!-- stat-card -->
**35 of 46** — Comparison contributors who never crossed — The other 11 did cross. Whether they are false alarms or cases nobody has disclosed is not something the paper can separate either

## From Public Traces to a Monthly Score

Until now the only instrument for measuring burnout was the questionnaire. The widely used Maslach Burnout Inventory is a proprietary tool, and the freely available Oldenburg Burnout Inventory asks about two dimensions, exhaustion and disengagement. Both require the person to write an answer. The contributors most in need of detection do not respond, and the ones who already left are not there to respond. A questionnaire captures only the moment it was administered, so it cannot be run backward across the past either. CHAOSS, the Linux Foundation's open source health-metrics project, defines a burnout metric as well, but specifies it entirely through surveys and interviews.

The question the researchers put is this. Can that questionnaire be approximated from the record contributors already leave in public? So they mapped the Oldenburg inventory's two dimensions onto fourteen signals computable from GitHub. The seven on the exhaustion side include the share of activity outside working hours, the days a pull request takes to reach a merge, and how closely someone's writing resembles phrases that voice exhaustion. The seven on the disengagement side include monthly commit count, review participation, the proportion of pull requests opened and never closed, and whether first-person pronouns run singular or plural. That last one rests on an assumption that as distance from the team grows, "we" turns into "I".

The important design decision is how the scoring runs. Every signal is graded against that person's own past rather than an absolute bar. Contribution volume in open source varies by orders of magnitude, so thirty commits in a month is routine for one person and unusual for another. Each signal therefore becomes two numbers, where the current value ranks among all of that contributor's prior values, and where the slope of the last four months ranks by the same measure, and those two are averaged. A four-month exponentially weighted moving average damps single-month noise, and a sigmoid function pushes the result into a value between 0 and 1. Averaging the two dimension scores gives the burnout risk score for that month.
