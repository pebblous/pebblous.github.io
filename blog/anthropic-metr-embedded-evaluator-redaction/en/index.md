---
title: METR Sees Inside Anthropic, and Anthropic Decides What Gets Hidden
subtitle: Anthropic opened its internal systems to six researchers from the nonprofit evaluator METR, and it can still ask for customer data and model architecture to be left out of the reports
date: 2026-10-17
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# METR Sees Inside Anthropic, and Anthropic Decides What Gets Hidden

_Anthropic opened its internal systems to six researchers from the nonprofit evaluator METR, and it can still ask for customer data and model architecture to be left out of the reports_

## Executive Summary

> [!callout]
> On October 15 Anthropic brought six employees of METR, a nonprofit evaluation organization, inside the company. It hands them company hardware and office space, and opens internal tools and systems at roughly the level its own risk assessment teams reach. Anthropic stated plainly that it cannot veto the publication of METR's analysis of its risk levels, incidents, or practices. This article looks at the condition written alongside that declaration. What information may the company ask to have redacted?

> Anthropic names three categories: data about customers, attorney-client privileged information, and information about model architectures. An e.g. sits in front of those three, though, and the clause on publication refers to them only as predefined categories like the ones above. Whether the three are the whole list or part of a longer one written into the agreement cannot be settled from the published text. METR may say publicly whether a redaction was justified, on the condition that it does not reveal the redacted information itself.

> Sections 1 through 3 stay with the Anthropic announcement and the reporting around it. Section 4, which carries this structure over to every agreement that opens data to an outside party, is this article's own reading.

### Key Figures

Source: Anthropic, [An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators) (2026-10-15), with cross-checking against [TechCrunch](https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/).

<!-- stat-card -->
**Six** — METR staff now working inside Anthropic — They receive company hardware and office space, and internal tool access roughly on par with Anthropic's own risk assessment teams

<!-- stat-card -->
**No veto** — Anthropic's power over publication — It cannot block analysis of its risk levels, incidents, or practices. Instead it can require redaction within set categories

<!-- stat-card -->
**Three examples** — Redaction categories the announcement names — Customer data, attorney-client privileged information, model architectures. An e.g. sits in front of them, so whether this is the full list is unconfirmed

<!-- stat-card -->
**Like tier two** — Publication rights at METR's tier three — The tiers are separated by level of access. Publishing without approval was already open to tier two evaluators

## Six Researchers Now Look Inside the Company Like Employees

METR is an American nonprofit that has spent years measuring how long and how complex a task a frontier model can carry out on its own. It holds to a principle of taking no money from the companies that build those models, while receiving from each of them the model access its evaluations require. This time METR received not access to a model but access to the company itself.

The two did not meet for the first time this week either. Anthropic wrote that over the past year it has worked with METR on several reviews of its Risk Reports. A relationship in which a finished report was read from outside has become one in which systems are watched from inside. The counterpart stayed the same, and the seat it occupies moved.

Anthropic wrote that it has brought six METR employees inside. They receive company hardware, office space, and access to internal tools and systems, at a level Anthropic described as roughly on par with what its own risk assessment teams can reach. Information sharing is not purely a matter of permissions, either. Anthropic encourages its own employees to share information with these researchers just as they would with a fellow employee working on alignment risk.

The publication side is what drew the most attention. METR publishes its own analysis of Anthropic's risk levels, incidents, or practices, and Anthropic cannot veto that publication. A structure in which the company under evaluation read the report first and decided whether it went out has clearly moved back a step.

The reason Anthropic gives is a gap. It aims to close the gap between what evaluators understand about a frontier AI company's systems and what the company itself understands. In September, naming Accenture its first embedded evaluator, Anthropic wrote that no standard yet existed for what an embedded evaluator should reach or for what and how it should report. This agreement is the first time concrete numbers and conditions have been written into that blank. The cost and independence arguments around the September announcement are set out in [An AI Company Invites Its Inspectors Inside and Picks Up the Bill](/blog/anthropic-accenture-embedded-evaluator-independence/en/).

![Anthropic co-founder and CEO Dario Amodei](./image/img-01-dario-amodei-techcrunch.jpg)
*▲ Dario Amodei. The company he leads gave up its veto over publication this time, while leaving the redaction categories in place | Source: [Wikimedia Commons (TechCrunch, CC BY 2.0)](https://commons.wikimedia.org/wiki/File:Dario_Amodei_at_TechCrunch_Disrupt_2023_04.jpg)*

## The Redaction Categories Are Listed Only as Examples

A condition sits directly beside the sentence about giving up the veto. Anthropic cannot block publication, but when information falls into a predefined category it can ask for that part to be removed. The announcement names three such categories: data about customers, attorney-client privileged information, and information about model architectures.

One word there is hard to walk past. Anthropic introduces those three with an e.g., and the publication clause calls them predefined categories like the ones above. Nowhere in the published text is there a sentence saying the three are all of them. Instead there is the phrase a small number of clearly defined categories, and the document holding that definition sits on the agreement side. A reader can check an example of the list today, and no more than that.

Of the three, the first two do not fight with evaluation. Customer data belongs to third parties, and attorney-client privileged material is redacted in any audit of any company. The third is the problem. Explaining why a model behaves the way it does often means pointing at how it is built. Risk assessment does not stop at what a model did; it moves on to where that behavior came from, so a conclusion can be published while part of the explanation holding it up is taken out. The narrower the redaction, the closer the report comes to a document somebody can check. The wider it goes, the closer the report comes to a document carrying only conclusions.

Another line in the same document makes this spot harder to miss. Anthropic sets out four conditions an evaluator needs, which are expertise, independence, access, and freedom to publish. The access condition reads that beyond access to the latest models, evaluators also need visibility into how those models were trained, into how the company's safeguards function. Training and safeguards are written down as what an evaluator needs. Architecture is written down on the side the company may ask to have removed. The two lines sit in the same document.
