---
title: Blocking the Crawlers Didn
subtitle: Rutgers and Wharton traffic data, paired with BuzzStream citation tracking, measure blocking
date: 2026-07-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Blocking the Crawlers Didn

_Rutgers and Wharton traffic data, paired with BuzzStream citation tracking, measure blocking_

## Executive Summary

> [!callout]
> A tidy intuition spread quickly among content publishers: "If I block GPTBot and Google-Extended in robots.txt, I protect my data." The measured results point the other way. Large news publishers that blocked AI crawlers lost a meaningful share of their visitors, yet the rate at which they were cited inside AI answers barely dropped. Blocking looked like a defense, but the data suggests it is closer to self-harm — severing your own distribution channel. This report retraces why that paradox arises, and where content owners should actually be holding their leverage, using first-party numbers.

> The clearest signal is the citation-retention rate after blocking. Depending on the bot, anywhere from 70.6% to 92.3% of sites that attempted to block were still cited in AI answers. The reason is structural. Blocking does not drain the reservoir of already-learned knowledge; it only shuts off the pipe that feeds new water in. Models build answers from frozen parameters and a separate search index, so changing robots.txt today leaves the standing water untouched. The size of the traffic loss is contested: an initial estimate of −23.1% for large publishers was revised down to roughly −7% on a weekly basis in the same authors' later draft.

> So the destination of this report is not the normative prescription "don't block." It is a reallocation of leverage. If the core problem is the asymmetry — crawlers take the content but return almost no visits — then the lever that reverses it is not the block switch but an infrastructure where sources are tracked and settled. Instead of locking your data away, structure "where it came from and how it was used" so it becomes settleable. That is where bargaining power begins.

<!-- stat-card -->
**92.3%** — Citation retention after blocking — Share of sites blocking Google-Extended still cited in AI answers. 70.6–92.3% by bot

<!-- stat-card -->
**~95%** — Citations from blocking sites — Even sites blocking training bots made up ~95% of ChatGPT's citation sources

<!-- stat-card -->
**−23% → −7%** — Large-publisher traffic loss — v1 monthly −23.1% → authors' later draft weekly ~−7%. Large publishers only

<!-- stat-card -->
**11,122 : 1** — Anthropic crawl-to-referral — Over 11,000 pages crawled per visitor sent. Extreme vs. Google's 5:1

## The Measured Paradox: Visitors Lost, Citations Kept

Start with the numbers on what blocking actually produced. When BuzzStream, a content-marketing tools company, analyzed 4 million AI citations and 3,600 prompts using the citation-tracking tool XOFU, it found that sites that blocked AI crawlers were mostly still cited afterward. Citation-retention rates ran ChatGPT-User 70.6%, OAI-SearchBot 82.4%, GPTBot 88.2%, and Google-Extended 92.3%. If the goal of blocking was "get my content out of AI answers," that goal was largely unmet.

The more counterintuitive part is the citation share held by blocking sites. Even the sites that blocked training bots still accounted for about 95% of ChatGPT's citation sources. There are concrete cases too. CNBC.com, which blocked several bots at once, still logged 1,298 citations inside the analyzed dataset, and Yahoo.com, which blocked Google-Extended, retained roughly 30,000 citations. The door was locked, yet the AI kept reaching in and pulling out what was inside.

The visitor side tells a different story, and here is the number this report handles most carefully. An initial draft (v1, 2025-12-31) by Junhao Zhao of Rutgers Business School and Ron Berman of Wharton, analyzing how publishers responded to generative AI, reported that **large** publishers that blocked crawlers lost 23.1% of total traffic on a monthly basis (human traffic −13.9%). But when the same authors re-measured with an identical methodology on a weekly basis in the v4 revision (2026-04, SSRN), the figure fell to roughly −7%. Widen the sample to the top 500 and mid-sized publishers actually gained traffic, while some publishers saw losses clear enough that they rolled their blocking rules back.

> [!callout]
> So "23%" should be read not as an absolute but as an **early estimate limited to large publishers**. Whether the headline number is 23.1% or 7%, this report's argument does not hinge on the value. The direction is the same in both: visitors are lost while citations remain. The magnitude of the loss is contested; the fact that loss and retention diverge is not.

The chart below puts that asymmetry on a single screen. On the left is the traffic large publishers lost (both versions shown); on the right is the citation-retention rate that survived blocking, by bot. The gap between the bar lengths is where this report begins.
