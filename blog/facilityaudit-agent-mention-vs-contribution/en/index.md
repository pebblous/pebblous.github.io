---
title: FacilityAudit-Agent Picks Out Papers That Only Name the Telescope
subtitle: A system from the Chinese Academy of Sciences sorts how far a paper leans on a telescope
date: 2026-10-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# FacilityAudit-Agent Picks Out Papers That Only Name the Telescope

_A system from the Chinese Academy of Sciences sorts how far a paper leans on a telescope_

## Executive Summary

> [!callout]
> Researchers at the National Astronomical Observatories of the Chinese Academy of Sciences have released a system that reads an astronomy paper and works out whether it actually used a given telescope's data. It is called FacilityAudit-Agent, and its verdict comes back on a six-level scale running from non-use through mention-only to auxiliary, major, and exclusive data support. This article looks at what those six levels separate, and at why separating them reaches all the way to a telescope's budget.

> The score the paper puts forward is 89.1% accuracy. The exam was 39,358 paper-facility pairs that people had graded by hand, and the system came out ahead of feeding whole papers to a language model, of the common retrieval-augmented approach, and of an earlier purpose-built system. Judging one paper costs somewhere between 142,000 and 455,000 tokens, though, and ambiguous cases still go up to a person. The place the authors give the system is not a replacement for bibliographers but a screening layer set in front of them.

> Sections 1 through 5 follow what the paper records and the figures it published. Section 6, which carries the distinction over to AI training data and public data, is this article's interpretation and not something the paper claims.

### Key Numbers

All four numbers are values the paper published. The accuracy was measured in the mode that audits one named facility, and the token figure is an average over the papers used in testing.

Source: [arXiv:2610.32135](https://arxiv.org/abs/2610.32135), posted October 23, 2026.

<!-- stat-card -->
**89.1%** — Accuracy in single-facility audit mode — Measured against the levels people assigned, taken as the answer key. Feeding whole papers to a model stopped at 83.3%

<!-- stat-card -->
**39,358** — Paper-facility pairs used in testing — The share set aside for testing out of 79,407 pairs, covering 4,093 papers. Each level here was assigned by two people reading separately

<!-- stat-card -->
**12.1 points** — Accuracy gap over the earlier purpose-built system — The narrowest gap is 5.8 points. Of the six levels, the distance from the compared approaches ran largest at L2 and L5

<!-- stat-card -->
**142K–455K** — Tokens to judge one paper — An average over the papers used in testing, varying with the model. It is one of the limitations the paper records about itself

## A Name in the Paper Counted as Use

A large observing facility, once built, runs for decades. Decades of operating budget, the upkeep of the archive, and the decision whether to build the next instrument all hang on one question. How much has this facility actually contributed to peer-reviewed papers? That is the motive the researchers give for building the system. These are among the most expensive scientific installations humanity has ever put up, and the indicator that speaks for what they produced is, in practice, a literature tally and nothing else.

The way it is taken, though, is plain. If a facility's name appears somewhere in a paper, the paper counts toward that facility. The title of the paper aims at exactly this habit. The original reads **Beyond Mention-as-Usage**, which is to say: get past the arithmetic that treats a mention as a use.

Under that arithmetic, a paper whose introduction notes once that such a survey exists and a paper that drew every observation behind its conclusion from that facility are both a single count. What the two papers owe the facility is nothing alike. And then budgets are divided by that number.

## What the Six Levels Separate

The scale the system assigns has six levels. There is one criterion: how far the data out of that facility holds up the paper's scientific argument. It does not count how many times the name appears. It asks whether the conclusion still stands without that data.

| Level | What it points to |
| --- | --- |
| L0 Non-use | The facility is not even mentioned, or the abbreviation is ambiguous enough that no particular facility can be pinned down |
| L1 Mention-only | Only the name turns up, in background discussion. None of the facility's observational data is used |
| L2 Instrument and engineering discussion | The paper deals with the facility's design or calibration itself. It does not scientifically analyze the facility's observational data |
| L3 Auxiliary contribution | The data is used for calibration or comparison. It is not the core evidence holding up the final conclusion |
| L4 Major contribution | The core conclusion leans on this facility's data together with data from other observing facilities |
| L5 Exclusive contribution | The data the conclusion rests on came from this facility and no other |

Source: the L0 through L5 definitions in [arXiv:2610.32135](https://arxiv.org/abs/2610.32135).

What the old tally counted as one splits five ways on this scale. L1 and L5 were the same single line in the ledger, but measured by what the facility contributed to the paper, they sit at opposite ends.
