---
title: a16z
subtitle: The 
date: 2026-10-08
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# a16z

_The _

## Executive Summary

> [!callout]
> This report traces, back to the primary sources, the two slides from State of Markets II that went round the internet in the week Andreessen Horowitz (a16z) published it on 30 September 2026. The deck runs to 90 pages of charts. One of those two says 69% of the S&P 500 point to a live AI deployment while only 2% disclose a metric they track over time; the other says 98% of US households are not yet paying for AI. Neither number is wrong. In both charts, though, the group named on the axis is not the group that was counted.

> a16z did not produce the 69% and the 2%. They come from an outside index by way of Apollo, and that index draws its sample from the S&P 500 and the FTSE 100 combined, minus the chipmakers and AI software vendors — 532 companies. The disclosure ladder it uses has five rungs; the rung that travelled is the fourth, and the top one has been empty two quarters running. The consumer side has the same shape. Where the chart says 'US households', the source says what PNC wrote in the body of its report: PNC households. And that name had already widened in a news story five and a half months before the a16z deck appeared.

> Everything above can be checked by anyone who puts the public documents side by side. What follows is this report's reading of them. Calling a bank's customer data 'US households' is not a change of wording. One bank institute that set out to do exactly that built an income estimation model, reweighted its results to the national distribution, and then printed a mean absolute error of 41% in the technical note; the US Bureau of Labor Statistics ruled in January this year that data of the same kind cannot substitute for a survey. What a16z skipped is not a word but that procedure. And PNC never claimed to be speaking about the country.

<!-- stat-card -->
**0 firms** — Report AI value as a line of its own, every quarter — Of the index sample of 532 · Q1 and Q2 2026 alike. This is the fifth rung of the ladder

<!-- stat-card -->
**12 firms** — Disclose the same measure again the next quarter — 2% of the same 532. This division is the only published basis for the 2% that travelled

<!-- stat-card -->
**2.2%** — The source figure where a16z wrote 'US households' — PNC customer households · May 2026. PNC's own text calls it the share of PNC households

<!-- stat-card -->
**41%** — Income estimation error left after taking transaction data national — The mean absolute error another bank institute printed in the technical note for the same job

## Only two of the 90 pages made it out of the deck

State of Markets II is a 90-page slide deck published on 30 September 2026. Its contents run to eight parts, sweeping through a year of markets in charts: macro indicators, semiconductor capital expenditure, the IPO market, consumer AI. Follow-on coverage introduced it as "over 100 charts", a figure a16z never states anywhere. Count the pages yourself and you get 90. One disclosure before anything else: a16z is a venture capital firm with heavy exposure to AI companies, and this deck is market material it published under its name.

Two of the 90 pages broke off and circulated on their own that week: the right-hand chart on page 27 and the top-left chart on page 38. Here is what those two charts actually have printed on them. Everything that follows stands on those words.

69% of the S&P 500 Point To A Live AI deployment. Only 2% Disclose A Metric They Track Over Time.
                        Source: a16z, State of Markets II, p. 27, chart title. Subtitle "Share of SP500 companies" · y-axis "% of S&P 500 Companies" · source footnote "Apollo Daily Spark (9/11/26)"

More and More Households are Paying for AI
                        Source: a16z, State of Markets II, p. 38, top-left chart title. Subtitle "Share of US Households with paid AI subscriptions" · final bar 2.2% · source footnote "PNC Research, Internal Data (July 13, 2026)"

The route the two charts travelled also lies outside the deck. a16z's own summary post restated both figures in prose with no source attribution, and the official social card posted on the evening of 1 October consists of one line — "98% of US households aren't paying for AI yet" — and a link. That is where a positive statement flips into a negative one about the complement. Everyone whose payment has simply not been observed is reclassified as someone who does not pay. Two days later the tech press picked up the sentence, and on 5 October a Korean-language article rendered it as "only 2.2% of US households subscribe to paid AI".

The next question is whether these two pages were the exception. Rendered as ten low-resolution contact sheets and sorted by the source footnote on each chart, the largest group is commercial data providers. Next come panel and internal data, roughly twenty pages, and they cluster in two places. One is the front block that handles AI metrics; the other is the last nine pages of the deck. Pages 82 through 90 are, without exception, first-party data from a16z portfolio companies, and nearly every one carries a footnote pointing to the firm's list of investments. Since the counting was done by scanning contact sheets, "roughly twenty pages" is rounded, but the range of the final nine is fixed page by page. We have read this firm's material once before, in [a16z's hardware-only fund](/blog/a16z-machine-age-fund-hardware-data-gap/en/).

## a16z did not do the counting

Follow the footnote on the page 27 chart up one level and you reach Apollo. The chief economist at the asset manager Apollo published a short note called the Daily Spark on 11 September 2026, and its chart title matches the sentence on a16z's slide almost word for word. So the label "S&P 500" was attached by Apollo, not by a16z; a16z inherited the sentence intact. Go up one more level and you reach the outside index Apollo cites: an AI value realisation index that runs under the name The AI Value Gap.

The index is new and close to a one-person operation. Its author is named, so is his methodology adviser, it states that its evidence comes from earnings calls, 8-K filings, major press and securities filings, and it opens a verdict page for each company by ticker. There is no basis for discounting a source that publishes its methodology and shows its individual judgements simply because the name is unfamiliar. One thing should be plain, though: this is not official S&P 500 statistics. How the index operator assembled his sample is a question for the next section.

Lay out the dates and it becomes clear that the figure had already done a lap of the press before it reached the deck. Forbes ran a story on the same numbers the day Apollo's note went up, 19 days ahead of a16z. After the deck appeared, the direction reverses. The number stays the same from hand to hand while the sourcing comes off one layer at a time.

| Date | Who | What is written there |
| --- | --- | --- |
| 2026-09-11 | Apollo Daily Spark | "69% of the S&P 500 point to a live AI deployment." No sample size, no mention of the FTSE 100. Source given as The AI Value Gap |
| 2026-09-11 | Forbes | "Nearly 70% Of S&P 500 Companies Deploy AI—But Few Track Metrics Over Time". 19 days ahead of the deck |
| 2026-09-28 | Index operator, Q2 update | "532 companies across the S&P 500 and FTSE 100" · "twelve, still just 2% of the sample" |
| 2026-09-30 | a16z deck, p. 27 | Axis "% of S&P 500 Companies", footnote "Apollo Daily Spark (9/11/26)" — the source is named |
| 2026-09-30 | a16z summary post | "nearly 30% of SP500 companies report some 'quantifiable impact' of AI, only ~2% are reporting any tracked metric" — no source given |
| 2026-10-01 | a16z social card | "98% of US households aren't paying for AI yet" — no source given |

Each row reproduces the sentence actually printed in that place. The 28 September update puts figures 2–3 percentage points higher on every rung for the same quarter (see section 4).

The conclusion of this section is therefore not that a16z hid anything. It is closer to the opposite. The deck names its sources on both page 27 and page 38, and those footnotes are what allowed us to climb back to the primary material. The label grows widest and the source disappears not in the deck but in **the formats that break off from it**. The summary post and the social card drop the qualifier and the footnote at the same time. When the word count shrinks, the first thing cut is precisely the condition you need in order to read the number.

## The top rung has been empty two quarters running

The headline that went round quotes two numbers, but the chart it came from has five pairs of bars. The index places companies on five rungs, and each rung carries a one-sentence definition. The table below gives those definitions first and then attaches the Q1 and Q2 2026 figures. Definitions come first because what this ladder measures is not AI adoption but **what a company wrote in its earnings calls and filings**.

| Rung | The index's own definition | Q1 | Q2 |
| --- | --- | --- | --- |
| 1. Intent | An ambition, target or planned investment, with no result yet | 68% | 74% |
| 2. Live | A live deployment with usage, adoption or spend to show for it, but no result | 64% | 69% |
| 3. Quantified once | The first real, quantified result | 26% | 29% |
| 4. Tracked | A result tracked over time — a defined metric, such as cost or margin, that can be followed | 1% | 2% |
| 5. Broken out | AI value reported as its own metric or P&L line, in the same place every quarter, so an outsider can track the same figure over time | 0% | 0% |

********

Definitions are verbatim from the index; the figures were re-read off the a16z page 27 chart at 600dpi, down to the footnote text. The index caps pilots at rung 2 and states separately that it does not count them as proof.
