---
title: The Audit Trail of AI Agents Deciding Loans and Fraud
subtitle: What Taktile
date: 2026-07-13
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Audit Trail of AI Agents Deciding Loans and Fraud

_What Taktile_

## Executive Summary

> [!callout]
> On June 24, 2026, a $110M Series C led by Goldman Sachs went into Taktile. Taktile is a New York, Berlin, and London-based company that automates lending underwriting, fraud decisions, claims, and KYC/AML workflows for banks and insurers by weaving together AI agents, rules, and human oversight. On the surface this reads as the familiar story that "finance is finally adopting agentic AI." But look at where the money actually went and the story changes. This piece asks why that investment reads not as buying a more accurate model, but as buying the trace left behind on each decision.

> In a regulated, high-risk decision, the first thing a bank has to prove is not its hit rate. It is whether it can later reconstruct which data, which version of the system, and whose approval led to that conclusion. Yet the regulation does not address this head-on. The EU AI Act classifies creditworthiness assessment as high-risk while explicitly excluding fraud detection, and the United States, in SR 26-2 — the model risk guidance it overhauled after fifteen years — put generative and agentic AI outside its scope entirely. It is the audit trail that is filling that empty space as a de facto standard.

> If the [EU AI Act Article 10 report](/report/eu-ai-act-article10-labeling-audit-evidence/en/) we published a few days ago dealt with evidence requirements at the stage of preparing training data, this signal is the evidence requirement at the opposite end of the same pipeline: the moment of real-time decision-making. Data lineage is what connects the two ends without a break, and the stronger the discipline grows, the more this unbroken record itself becomes a commercial asset. What Taktile sells, and what Goldman bought, is in the end that trace.

Four numbers speak first to where this shift plants its feet: the size of the round Goldman led, the depth of automation agents already handle, the drop in false positives on fraud decisions, and what financial institutions themselves fear most as a regulatory risk.

<!-- stat-card -->
**$110M** — Taktile Series C — Goldman Sachs-led · 2026-06-24 · $184M total

<!-- stat-card -->
**95%** — B2B underwriting automated — Taktile customer case · millions of decisions daily

<!-- stat-card -->
**75%** — AML false positives cut — Fraud & money-laundering alerts · Taktile metric

<!-- stat-card -->
**28.4%** — Named top regulatory risk — Explainability & transparency · Wolters Kluwer 2026 Q1

## The Decisions Banks Handed to Agents

A business owner submits an application to open an account. In the old world, an officer would check the documents, pull the credit history, cross-reference the sanctions lists, and then decide whether to approve. What Taktile does is move that flow of judgment inside software. An AI agent reads the context, a rules engine applies the policy conditions, and only the ambiguous borderline cases are handed to a human. The company calls this combination an "Agentic Decision Platform," and says it automates decisions across underwriting, claims, fraud, onboarding, and AML workflows at a scale of millions of judgments per day.

Founded in 2020 by Maik Taro Wehmeyer and Maximilian Eber, the company lists among its customers fintechs like Mercury, Monzo, Faire, and Pleo, along with an unnamed large insurer. Its published performance figures are concrete. It automates 95% of B2B underwriting decisions, cut AML false positives by 75%, and one insurer reportedly expects more than $90M in efficiency gains from claims processing. By the numbers alone, this is the story of an accurate, fast automation tool.

Yet when a bank hands such judgments to a machine, the first question a supervisor asks is not "is the judgment correct?" It is "can you show, six months later, exactly why this application was rejected, what data you looked at then, and which version of the rules applied?" The moment a single loan denial turns into a lawsuit or a discrimination review, what the bank must produce is not the model's accuracy report but a reconstructable record of that decision. The deeper the automation runs, the heavier this record requirement grows alongside it.

## What Investors Bought Was Not Accuracy

This round, led by Goldman Sachs Alternatives (the firm's growth-capital arm), also drew Tiger Global, Index Ventures, Balderton Capital, Y Combinator, and Dig Ventures, bringing Taktile's total raised to $184M. The size itself is not especially large within the 2026 flow of AI investment into regulated industries. What is worth noting is the identity of the investor. Goldman is not a place that puts money into venture experiments; it is a party that knows better than most what regulated financial infrastructure demands.

![Goldman Sachs headquarters at 200 West Street in New York — the growth-capital arm that led Taktile's Series C](./image/img-01-goldman-sachs-hq.jpg)
*▲ Goldman Sachs headquarters, 200 West Street, New York. Its growth-capital arm led Taktile's Series C | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Goldman_Sachs_200_West_Street.JPG)*

Most of the coverage of the Taktile investment carried the same caveat: LLMs are hard to make explain why they reached a judgment, and no bank has yet automated a regulatory process end to end. That caveat is usually read as caution — "so it's still too early." But turn the same sentence over and it reads differently. Precisely because explanation is hard and full automation does not yet exist, the money flowing in today is aimed not at an accurate model but at the workflow that binds each judgment into a form submittable to an audit.

In regulated, high-risk decisions — credit, fraud, claims, onboarding, KYC, AML — what sells is not a few percentage points of hit rate. When two systems have the same accuracy, the one that survives in front of a supervisor is the one that can walk back through the inputs, intermediate steps, and approval path of every judgment. What Goldman bought for $110M is the capacity for that walk-back. Accuracy is only the ticket to the game; the deciding factor in procurement moves toward traceability.

> [!callout]
> In a regulated industry the moat is not the model. Models get copied and caught up to, but the data trace left unbroken on every judgment cannot be manufactured retroactively overnight. The gap between a company that produced the audit trail as an output of the pipeline from day one and one that reconstructs it under deadline becomes an unrecoverable distance in front of an examiner. This is why Goldman's bet reads as a bet on traceability, not accuracy.

## The Strange Line Regulators Drew

There is a paradoxical reason traceability became a de facto standard: the regulation itself does not deal with agentic AI head-on. Annex III of the EU AI Act names AI used for creditworthiness assessment as high-risk. Yet the same provision explicitly excludes AI used for financial fraud detection from the high-risk classification. Judge a loan and you are high-risk; judge fraud and you are in a gray zone.

The problem is that in the field the two do not separate cleanly. When a fraud decision at the onboarding stage leads to a rejected account opening or a credit decision, the AML monitoring that started outside the high-risk boundary gets pulled back inside it. When a single agent handles both credit decisions and fraud judgments, it is not clear which rule set applies. Even the effective date of the high-risk obligations is described inconsistently across sources, somewhere between August 2, 2026 and December 2027. Here we treat August 2 as the reference deadline, while noting that whether the delay discussions around the Digital Omnibus are settled or merely proposed still differs from source to source.

![EU member state flags in front of the European Parliament in Brussels — the EU AI Act Annex III splits credit scoring as high-risk while excluding fraud detection](./image/img-02-eu-parliament-flags.jpg)
*▲ EU member state flags outside the European Parliament, Brussels. Annex III of the EU AI Act names credit scoring as high-risk while explicitly excluding fraud detection | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:14_EU_Member_Flags_in_front_of_European_Parliament_in_Brussels.jpg)*

### 3.1. The US Took an Entirely Different Path

On April 17, 2026, the Federal Reserve, OCC, and FDIC wholesale replaced SR 11-7 — the bedrock of model risk management for fifteen years — with SR 26-2 (OCC Bulletin 2026-13). The key wording runs like this: generative AI and agentic AI are new and rapidly evolving and are therefore not within the scope of this guidance. The traditional statistical and quantitative models the agents operate on, meanwhile, stay inside the scope. Risk did not disappear; it moved to a place without a name.

As a result, bank boards and model risk teams are left to build their own agentic-AI governance with no framework to reference. The EU drew an awkward line between credit and fraud; the US pushed agentic AI out of scope entirely. Neither jurisdiction gives a clear rule that says "do it this way." The way practitioners fill that vacuum themselves is by leaving an auditable record on every judgment. When you do not know how the rules will land, the safest preparation is to make sure you can walk anything back — whatever you are later asked to show.

![The Marriner S. Eccles Federal Reserve Board Building in Washington, D.C. — SR 26-2 replaced SR 11-7 and placed generative and agentic AI outside its scope](./image/img-03-federal-reserve-eccles.jpg)
*▲ The Eccles Building, Federal Reserve headquarters in Washington, D.C. The Fed, OCC, and FDIC replaced SR 11-7 with SR 26-2 in April 2026 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg)*

## Explainability Alone Won't Pass an Audit

Two concepts that often get blurred here need to be pulled apart. Explainability answers "why did this decision come out?" Auditability proves "which system, on which version, on the basis of which data, through whose approval, produced that decision." What ECOA or GDPR mainly demand is the former; what the EU AI Act and the SR 26-2 line of guidance demand is the latter.

Where this distinction bites in practice is clear. Even an agent that perfectly explains why it approved a loan fails compliance if the data used in that judgment was cleaned wrong or an identity check was missing. Downstream transparency without upstream control is only a governance illusion. In fact, 28.4% of financial institutions named explainability and transparency as their most serious AI regulatory risk (Wolters Kluwer, 2026 Q1), and more than 70% already use agentic AI at least in part while their governance frameworks fail to keep pace (EY, 2026).

What connects explainability and auditability is data lineage: one unbroken record running from where the training data came from and how it was prepared, through which inputs and intermediate steps a real-time judgment passed to reach which output. The [EU AI Act Article 10](/report/eu-ai-act-article10-labeling-audit-evidence/en/) that our recent report covered demanded the evidence that the upstream end of this lineage — labeling, cleaning, bias testing — must leave behind. This signal demands the evidence the downstream end — lending and fraud decisions — must leave. Join the two ends into a single lineage and the picture completes: the entire regulated AI pipeline demands an audit trail. The stronger the discipline grows, the more this unbroken record becomes not a cost but a product that sells.

## Why Pebblous Is Watching

In regulated finance, the procurement bar moving from accuracy to traceability means the terrain is shifting for companies that work with data. Until now, "AI-ready data" was a voluntary concern of teams trying to push performance up. The moment the audit trail becomes a procurement criterion, proving where that data came from and how it was verified stops being a marketing line and becomes a condition of the contract.

From the vantage point Pebblous has held in treating data quality and lineage as something diagnosable, Goldman's money heading to Taktile is a market signal. The competition to build an accurate model has already leveled up, and what procurement officers in regulated industries actually check is whether the basis for a judgment can be traced back. A lineage that connects the preparation history of training data all the way to the inputs and outputs of a real-time decision, without a break, is what turns verifiable data into a commercial asset in a market where discipline is tightening.

> [!callout]
> **Editor's Note.** If an agent decides loans and fraud and leaves that process as a log, the log answers "what did it do?" The remaining question is "was the data underlying that judgment representative and verified?" Diagnosing the quality, representativeness, and lineage of a dataset to turn that answer into evidence is the seat Pebblous DataClinic has aimed at. This does not replace the agent's judgment; it stands in the adjacent seat, diagnosing the data that judgment rests on.

## References

This piece was written by cross-checking the investment coverage, primary regulatory documents, and industry surveys below. Investment size and performance figures follow company announcements and the coverage citing them; regulatory wording follows the primary sources.

### Investment & Industry Coverage

- 1.Fortune (2026-06-24). "Exclusive: Taktile raises $110M in Goldman Sachs-led round to bring AI to banks and insurers." [Link](https://fortune.com/2026/06/24/exclusive-taktile-goldman-sachs-ai-bank-insurance-funding/)
- 2.Business Wire (2026-06-24). "Taktile Secures $110M in Goldman Sachs-Led Series C to Power AI Transformation in Financial Institutions." [Link](https://www.businesswire.com/news/home/20260624713959/en/Taktile-Secures-110M-in-Goldman-Sachs-Led-Series-C-to-Power-AI-Transformation-in-Financial-Institutions)
- 3.American Banker (2026-06-24). "Goldman leads $110M bet on Taktile's AI software." [Link](https://www.americanbanker.com/news/goldman-leads-110m-bet-on-taktiles-ai-software)

### Regulatory & Primary Documents

- 4.EU AI Act — Annex III, High-Risk AI Systems (creditworthiness designated high-risk, fraud detection excluded). [Link](https://artificialintelligenceact.eu/annex/3/)
- 5.EU AI Act (Reg. (EU) 2024/1689), Article 10 — Data and data governance. [Link](https://artificialintelligenceact.eu/article/10/)
- 6.OCC Bulletin 2026-13 / SR 26-2 (2026-04-17), Model Risk Management — Federal Reserve, OCC, FDIC; replaces SR 11-7. [Link](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html)

### Industry Surveys

- 7.Wolters Kluwer, "Q1 2026 Banking Compliance AI Trend Report" (explainability & transparency, 28.4% of respondents).
- 8.EY, "2026 Global Financial Services Regulatory Outlook" (agentic AI adoption and the governance gap).

※ Performance figures (95% automation, 75% AML false-positive reduction, $90M in efficiency gains) follow coverage citing Taktile and its customers; effective dates and market-size statistics vary by definition and survey period across institutions, so caveats are noted inline.
