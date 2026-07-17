---
title: Peregrine Builds Governance Into the Data Layer at a $6.8B Valuation
subtitle: Public-safety AI that embeds role-based access, purpose limitation, and audit trails from day one, and the surveillance question that remains
date: 2026-07-18
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Peregrine Builds Governance Into the Data Layer at a $6.8B Valuation

_Public-safety AI that embeds role-based access, purpose limitation, and audit trails from day one, and the surveillance question that remains_

## Executive Summary

> [!callout]
> Peregrine Technologies, a public-safety software company, raised $250 million in Series D at a $6.8 billion valuation. The striking part is not the number itself but two things around it: every investor in the round was an existing shareholder, and the design principle the company keeps foregrounding. Peregrine defines itself not as a firm that collects and sells new data, but as one that connects data agencies already hold, according to permission and purpose. This article looks at what that design actually means from a data-engineering standpoint, and what questions it leaves open in the heavy context of public safety.

> The crux is where governance lives. Most systems bolt access control and audit logging onto the application after the fact. Peregrine says it embedded role-based access, purpose limitation, and audit trails into the layer that handles the data itself, and claims it put privacy and civil-liberties protection at the center of the product from day one. But the existence of an audit log and the log actually preventing misuse are two different things, and a survey released around the same time found that 54% of Americans consider AI-driven mass surveillance too dangerous.

> So rather than tidying either one away, what follows sets the company's three differentiation claims and civil society's concerns side by side. It closes with an open question instead of a verdict.

### Key Figures

Sources: [PRNewswire release](https://www.prnewswire.com/news-releases/peregrine-technologies-raises-250-million-series-d-at-6-8-billion-valuation-302808115.html) · 54% from [Fortune, citing ITIF 2026 survey](https://fortune.com/2026/06/22/exclusive-peregrine-nick-noone-ai-public-safety-palantir-2026-world-cup-just-sequoia-capital/)

These four numbers form the spine of the article. The first three measure the trust the market has placed in this company; the last one measures the social tension around where that trust sits.

<!-- stat-card -->
**$6.8B** — Series D valuation — About 2.7x the $2.5B of 15 months ago

<!-- stat-card -->
**$250M** — Series D raise — Every participant an existing shareholder

<!-- stat-card -->
**400+** — Agencies served — Covering ~125M people, customer base doubled

<!-- stat-card -->
**54%** — "AI mass surveillance too risky" — Of Americans, ITIF 2026 survey

## 2.7x With No New Investors

Peregrine's Series D is more interesting for its composition than its size. The $250 million raise lifted the valuation to $6.8 billion; at the round 15 months earlier it stood at $2.5 billion, so it jumped roughly 2.7x. Yet not a single new investor joined this round. Fifth Down Capital, Sequoia Capital, XYZ Ventures, and the rest of the participants were all existing shareholders who already held a stake.

An absence of new investors usually reads one of two ways. Either the story is too weak to attract fresh capital, or the people who have watched the company most closely decided to bet bigger. In Peregrine's case, with its customer base doubling in 15 months and its footprint growing to more than 400 agencies and 125 million people, the second reading is the natural one. Rather than opening unfamiliar wallets with a new narrative, this is a round where people who already knew the company doubled their conviction.

The sentence the company repeats as the basis for that conviction is where this article begins. That instead of bolting governance on later, it planted governance in the data layer from the start. CEO Nick Noone says privacy and civil-liberties protection sat at the center of the product from day one. It is a sentence you could dismiss as marketing, but inside it lies a concrete data-engineering choice. That choice splits into two questions: what it refuses to collect, and where governance sits.
