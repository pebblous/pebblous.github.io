---
title: Europe
subtitle: A 15-judge Grand Chamber decides whether the EU
date: 2026-07-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Europe

_A 15-judge Grand Chamber decides whether the EU_

## Executive Summary

> [!callout]
> On March 10, 2026, the Grand Chamber of the Court of Justice of the European Union (CJEU) held a six-hour hearing — its first ever — on generative AI and copyright. The case is C-250/25, brought by the Hungarian news publisher Like Company against Google over Gemini. Three questions are in play, but the one that matters most to data practice is the third. If training an LLM is an act of reproduction, is that reproduction covered by the text-and-data-mining (TDM) exception in the EU Copyright Directive? The answer effectively sets the legal definition of what counts, in Europe, as lawfully trainable data.

> It matters because the frame itself differs from the United States. America weighs the legitimacy of training after the fact through fair use. Europe's TDM exception does the opposite: it permits mining by default but removes any work whose rightholder has reserved it in a machine-readable way — an ex-ante rule. So in Europe, legality is already decided at the moment data is scraped, by each work's opt-out status. The share of news sites blocking AI training crawlers jumped from 58% to 79% in two years. The law is catching up to a practice already well underway.

> Whichever way the ruling lands, the conclusion converges on one point. A dataset that cannot document and trace opt-out status, licenses, and provenance becomes a liability for European deployment. If the U.S. lawsuits were Act One of the debate over data trust, this hearing is Act Two — the moment it hardens into institutional rule. This report traces the point where provenance shifts from a litigation defense to a deployment requirement.

<!-- stat-card -->
**58% → 79%** — News sites blocking training crawlers — Feb 2024 → Jan 2026, opt-out practice surging

<!-- stat-card -->
**11 states** — EU members mandating opt-out form — Optional in 10 · unregulated in 6

<!-- stat-card -->
**3% / €15M** — AI Act GPAI fine ceiling — Of global turnover · enforced Aug 2, 2026

<!-- stat-card -->
**$1.5B** — Bartz v Anthropic settlement — Largest U.S. copyright settlement — the cost of settling after

## The Question That Finally Reached Europe's Top Court

On March 10, 2026, in the Grand Courtroom of the CJEU in Luxembourg, a fifteen-judge Grand Chamber took its seat. The Grand Chamber is the court's highest formation, convened only for cases the CJEU considers especially significant or of fundamental principle. The case that came before it, in six hours of oral argument, was [Like Company v Google Ireland, C-250/25](https://www.twobirds.com/en/insights/2026/like-company-v-google-cjeu-holds-first-ever-hearing-on-generative-ai-and-copyright-on-10-march-2026) — the first time Europe's top court squarely examined generative AI and copyright.

The claimant, Like Company, is a Hungarian media publisher running several news portals. The defendant is Google Ireland, which operates Gemini (formerly Bard). The case reached Luxembourg through a preliminary reference from a Budapest district court — the procedure by which a national court asks the CJEU what a piece of EU law means, then applies the answer to the dispute in front of it. That mechanism is the reason this hearing does not stop at Hungary: its outcome applies with equal weight to courts across the entire EU.

### Three core questions — and where the data question sits

The Budapest court referred three core questions (some sources split the TDM sub-issue into two and count four). The first concerns the right of communication to the public: when a chatbot returns output that partly matches a protected article, does that amount to communicating the work to the public? The second concerns the reproduction right: is LLM training, which observes patterns and adjusts to them, an act of reproduction under EU copyright law? And the third: if training does involve reproduction, can that reproduction fall within the TDM exception in Article 4 of the DSM Directive (2019/790)?

This report focuses on the third. Where the first two ask whether training collides with copyright at all, the third asks how wide the door is that could make the collision lawful. That door is the TDM exception. Fixing the width of the door goes beyond deciding one infringement case: it draws the boundary of what qualifies, across all of Europe, as lawful training data.

> [!callout]
> There is no ruling yet. What happened on March 10 was an oral hearing; the opinion of the Advocate General — the official who reads the case's likely direction in advance — is scheduled for September 3, 2026, with the final judgment to follow. So what we can read now is not "who won," but "what is at stake and which way the scale is tipping." This report reads the scale.
