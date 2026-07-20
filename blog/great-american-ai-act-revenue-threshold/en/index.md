---
title: The First Federal AI Bill That Sorts Who It Regulates by Revenue
subtitle: The EU thresholds on compute and Korea on domain; the US splits frontier-AI developers by $500 million in annual revenue
date: 2026-07-21
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The First Federal AI Bill That Sorts Who It Regulates by Revenue

_The EU thresholds on compute and Korea on domain; the US splits frontier-AI developers by $500 million in annual revenue_

## Executive Summary

> [!callout]
> Walk through China's, the EU's, and Korea's AI rules in turn, and one seat stayed empty for a long time: a US federal statute. In June 2026, Republican and Democratic members of the House released a 269-page draft to fill it. Its name is the **Great American Artificial Intelligence Act of 2026** (GAAIA). It is still a discussion draft rather than a formally introduced bill, but the part this piece is watching is not any single clause but the criterion that decides who gets regulated.

> The draft sorts regulated entities not by "what you build" but by **$500 million in annual revenue**. Only the handful of large developers that train frontier models _and_ cross that revenue line carry the audit and disclosure duties. That is a visibly different choice from the EU, which thresholds on training compute; Korea, which thresholds on the field of use; and China, which thresholds on reach. It is the first time in the history of AI regulation that revenue, an accounting figure, has become the primary criterion for deciding who is in scope.

> This piece compares which data field each of the four governments draws its threshold on, then looks at the administrative advantage the US gains by choosing revenue and the blind spot that choice creates. It reads both problems, defining who is regulated and measuring AI's spread through statistics, as the same data problem: approximating a continuous phenomenon with a single observable number.

The threshold that sorts regulated entities is expressed as a different number in each country. The US revenue line, the EU compute line, Korea's secondary revenue line, and China with no revenue clause at all. Set the four indicators side by side, and what each country trusts as an observable signal comes into view.

<!-- stat-card -->
**$500M** — The US threshold — Only developers that cross both $500M in annual revenue and frontier-model training are in scope

<!-- stat-card -->
**10²⁵** — The EU threshold — Estimates systemic risk from training FLOPs — a technical measure of a model's capability

<!-- stat-card -->
**₩1T** — Korea's secondary line — The regulatory axis is high-impact domains; revenue is only a secondary trigger for naming a foreign provider's agent

<!-- stat-card -->
**0** — China's revenue clause — No revenue threshold — regulated scope is drawn by opinion influence and user counts

## A line drawn at $500 million

The GAAIA draft, released jointly in June 2026 by Representatives Jay Obernolte (R-California) and Lori Trahan (D-Massachusetts), is laid out clause by clause in [Tech Policy Press's explainer](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/). Two things get cited often: that it is bipartisan, and that it sits against a backdrop where 65% of Americans say the government is doing too little to regulate AI (77% of Democrats, 53% of Republicans). That it is not yet law but a **discussion draft**, a text put out to gather feedback, is a premise this piece keeps throughout.

![The United States Capitol — where the Great American AI Act draft was introduced in the House](./image/img-01-us-capitol.jpg)
*▲ The United States Capitol. The GAAIA draft was released here by a bipartisan pair of House members | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_United_States_Capitol_118th_Congress,_sunrise.jpg)*

The draft covers a lot of ground, spanning frontier governance, labor, cybersecurity, and R&D. The Pebblous blog has already covered each of those branches. This piece focuses on a prior question that sits above all of them: **exactly who does this law apply to?** Before the draft imposes any rule, the first thing it does is draw a line between what it will and will not regulate. That line is revenue.

For a data practitioner, the move is familiar. To filter for a set of targets, you pick one observable column and set a threshold on it. GAAIA chose that column to be the developer's revenue, not the model's size or its risk level. Translate the problem of regulation into the language of data engineering, and this draft takes a different path from the very first step of "feature selection."

## Who counts as a 'large frontier developer'

The "large frontier developer" the draft defines as its regulated entity is a company that satisfies two conditions at once: **$500 million or more in annual revenue** _and_ training a **frontier model**. Because it is an AND of the two, only a small set is caught: OpenAI, Anthropic, Google, Meta, and xAI. Representative Trahan summed up the design intent in a single sentence: "A two-person startup with no legal team is not inside this regulatory regime."

The reach of the rules is narrow too. What the draft targets is **development**, not deployment or use. In Trahan's phrasing, "the federal lane is largely frontier model development, not products." After narrowing the targets by revenue, it governs only the model-building stage among the many things those targets do.

The duties placed on the few who cross this threshold fall into three: they must disclose model information, undergo third-party audits, and report serious safety incidents. A whistleblower-protection clause is attached to that. How the audit is carried out was covered in [an earlier piece, by analogy to the financial-audit model](/blog/gaaia-ivo-ai-audit-license/en/): a certified, independent verification organization (IVO) sits in and verifies. What matters here is that the audit becomes a duty "only for developers above $500 million in revenue." Build the same frontier model below the revenue line, and you sit outside this duty.

![A large-scale data center that trains frontier models — the physical scale behind a large frontier developer](./image/img-02-google-datacenter.jpg)
*▲ A large-scale data center used to train frontier models, the real scale behind the "large frontier developer" GAAIA targets | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Google_Datacenter_-_The_Dalles,_Oregon_(17832143871).jpg)*

## Each country reads a different column

Other countries solved the problem of defining the regulated entity with a different column. Facing the same question of where to begin regulating frontier AI, each jurisdiction trusted a different signal as observable. Line up the four countries, and what each chose as its yardstick becomes clear at a glance.

| Jurisdiction | Data field that sorts the regulated entity | Specific threshold | Nature of the indicator |
| --- | --- | --- | --- |
| United States (GAAIA draft) | Revenue | $500M annual revenue + training a frontier model | Accounting figure — a number already verified through tax filings |
| EU (AI Act) | Compute | Training FLOPs above 10²⁵ (systemic-risk line), above 10²³ (GPAI classification line) | Technical capability indicator — measures the model's own "power" |
| Korea (AI Basic Act) | Domain primary, revenue secondary | 10 high-impact AI areas are the test. Naming a domestic agent triggers at ₩1T prior-year revenue, or ₩10B AI revenue, or 1M DAU | Use/impact indicator primary; revenue is a secondary trigger for managing foreign providers |
| China (Interim Measures for Generative AI) | Reach and opinion influence | No revenue criterion. A new humanoid-AI draft proposes 1M subscribers or 100K MAU | Social-influence indicator — "how far it has spread" comes first |

****************

To put it plainly: the EU measures how hard a model was trained, Korea measures where it is used, China measures how far it has spread — and the US, for the first time, chose how much it earns as the yardstick. All four approximate a complex system with a single observable number. Only the proxy function differs. That defining the regulated entity ultimately comes down to "which column do you set a threshold on" is something the four countries' different choices make all the sharper.

## Why revenue, and what it misses

The draft itself does not state why revenue, of all things. From here on, this is clearly source analysis and this piece's own reasoning. The practical advantage of choosing revenue comes from **verification cost**. Revenue is an objective number already confirmable through tax filings. From an auditor's standpoint, there is little need to re-verify a figure the company reported itself.

That advantage sharpens against the EU's compute threshold. Training FLOPs is a precise indicator that measures a model's capability directly, but the value is mostly known only to the developer itself. In practice the EU AI Act requires a developer that crosses the threshold to self-notify within two weeks, after which the Commission runs a separate confirmation step. It is a structure that leans on the company's own report or bolts on a verification stage. Revenue reduces that reliance on self-reporting. View regulatory design as a data pipeline, and the US has picked "a field with low collection and verification cost" as its first-stage filter.

![The European Parliament building — where the EU AI Act's compute threshold was deliberated](./image/img-03-eu-parliament.jpg)
*▲ The European Parliament in Brussels. The EU AI Act sorts regulated entities by training compute (FLOPs), not revenue | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:European_Parliament_building_Brussels_1.jpg)*

> [!callout]
> Low verification cost comes at a price. Revenue does not measure a model's risk or capability directly. A young developer training a frontier model but not yet earning revenue, a nonprofit lab that earns almost nothing, an organization that releases a powerful open-weight model — all can stay below the threshold. The revenue column is easy to verify, but it misses the cases where "how much you earn" and "how dangerous you are" come apart.

No indicator escapes this mismatch entirely. Compute reflects less of the risk from post-training fine-tuning or the inference stage; a domain test is slow to catch newly emerging uses; reach misses systems used by few but capable of catastrophe. Defining the regulated entity is always an approximation, and approximation drags a blind spot along with it. The revenue threshold the US chose simply differs in where that blind spot forms.

## You have to decide what to measure first

The same draft carries a second data clause that pairs with the revenue threshold. It directs the Census Bureau and the Bureau of Labor Statistics (BLS) to add AI-use and AI-adoption questions to federal surveys. The purpose, ahead of any regulation or ban, is simply "to count." The specifics of this clause, measuring AI's effect on the labor market through national statistics, were covered in [an earlier story](/story/great-american-ai-act/en/).

![US Census Bureau headquarters — the agency the draft directs to add AI-use and adoption questions to federal surveys](./image/img-04-census-bureau.jpg)
*▲ Census Bureau headquarters in Suitland, Maryland. The GAAIA draft directs this agency to add AI-use and adoption questions | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Census_Bureau_headquarters,_Suitland,_Maryland,_2007.jpg)*

The problem of sorting the regulated entity and the problem of measuring AI's spread look different, but from a data perspective they are two sides of one problem. Both approximate a continuous phenomenon, whether a developer's scale or the degree of AI's spread, as a discrete signal that administrators can handle. One line of revenue, one survey question. Pick the wrong column to read, and both fail. Just as the revenue test misses a frontier developer with no revenue, a statistics question over- or under-measures spread depending on how "AI use" is defined.

This observation runs along the same grain as the problem Pebblous has worked on in data lineage and contribution measurement. The principle that you must first define what you will measure before you can measure it applies equally to valuing training data and to defining the regulated entity. The moment the GAAIA draft chose revenue, the US took on both the cost and the benefit of that definition. Whether or not the regulation passes, the question this draft leaves behind is one: with what single number will we approximate the continuous phenomenon that is AI?

## References

### News & Analysis

- 1.Tech Policy Press. (2026, June). "[Unpacking the Great American Artificial Intelligence Act of 2026](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/)." Tech Policy Press.
- 2.FedScoop. (2026, June). "[Bipartisan Great American AI Act draft proposes new federal AI governance framework](https://fedscoop.com/bipartisan-great-american-ai-act-draft-proposes-new-federal-ai-governance-framework/)." FedScoop.

### Official Statements & Legislation

- 3.Office of Rep. Jay Obernolte. (2026, June). "[Obernolte, Trahan Release Discussion Draft of Great American AI Act](https://obernolte.house.gov/media/press-releases/obernolte-trahan-release-discussion-draft-great-american-ai-act)." U.S. House of Representatives.
- 4.European Union. (2024). "[Regulation (EU) 2024/1689 (Artificial Intelligence Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)" — GPAI and systemic-risk compute thresholds. Official Journal of the European Union.
- 5.Republic of Korea. (2026). "[Framework Act on the Development of Artificial Intelligence and Establishment of a Basis for Trust](https://www.law.go.kr/lsInfoP.do?lsiSeq=268543)" (AI Basic Act) — high-impact AI domains and domestic-agent designation criteria. Effective 2026-01-22.
