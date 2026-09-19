---
title: Can a Machine Read a Dataset
subtitle: An arXiv preprint adds a decision procedure to Croissant, the ML dataset standard, and on three descriptors gating a real pipeline it matched the existing checks
date: 2026-09-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can a Machine Read a Dataset

_An arXiv preprint adds a decision procedure to Croissant, the ML dataset standard, and on three descriptors gating a real pipeline it matched the existing checks_

## Executive Summary

> [!callout]
> A machine learning dataset travels with a descriptor, a document that states in machine-readable form what the data is, where it came from and how to load it. Croissant is the standard for that document, and since version 1.1, published in January of this year, it carries conditions of use as well. There is now a place to write down that the data is for non-commercial purposes only, or that it may be used only after it has passed quality control. This article looks at an arXiv paper posted on September 17 that supplies the procedure by which a machine reads what sits in that place and actually refuses a request.

> The paper names five gaps. Croissant 1.1 settled where a condition is written and left open how a condition is evaluated, what evaluation may cost, what happens to a condition an implementation cannot check, whether anything is recorded about what was checked, and how all of this composes with the authority that governs the caller. The author closes the operator set at five and states each operator's decision procedure in the paper itself, which supplies half of that list. Across three descriptors that gated a real analysis pipeline, decisions taken from the profile document matched the existing gate's records exactly. Across a corpus generated from the profile's grammar, 552 decision records agreed three ways.

> Sections 1 through 5 follow what the paper reports. Section 4 on evaluation cost and Section 5 on the two authorities both mix measurement with claims the author withdraws and with a caller side the author describes as modelled, so each of those is marked where it appears. Section 6 reads the structure from the AI-Ready Data side, and that reading belongs to this article.

### Key figures

Source: [arXiv:2609.19640, "A Policy Profile for Croissant" (September 17, 2026)](https://arxiv.org/abs/2609.19640)

<!-- stat-card -->
**+11.7µs** — Added to a single decision — Measured against a decision that takes 119µs. Translate the document once and reuse it, and the addition is zero

<!-- stat-card -->
**~250×** — Delivery against the decision itself — The decision costs 119µs and the process that delivers one costs 30ms. The paper works out the ratio itself and prints it

<!-- stat-card -->
**552** — Decision records three carriers agreed on — Not the permit and refuse verdicts alone. The refusal class, the reasons, and every condition with its observed value were compared too

<!-- stat-card -->
**19%** — Where the two authorities disagreed — 35 of 184 requests. Keep one authority only and that is the share the other would have stopped, though the caller side here is a model the author wrote

## Writing a Restriction Down, and Refusing a Request

Writing "not for commercial use" onto a data card is an old practice. Licence documents, terms of use, the restriction clauses stapled to a consent form: in the end all of them were sentences a person read and a person honoured. A machine could carry those sentences around inside a file, but it never stopped a job on the strength of one.

Croissant is the standard that moved those sentences somewhere a machine can read them. It is a dataset descriptor written as JSON-LD over schema.org, and Hugging Face, Kaggle and OpenML publish datasets in it while Google Dataset Search consumes it. Version 1.1 added a responsible-AI and governance section, which puts use restrictions in the sc:usageInfo slot. For simple conditions it points at DUO, the consent vocabulary that came out of biomedical data sharing, and for fine-grained permissions at ODRL, the W3C Recommendation. The specification states that machine-readable use restrictions can support automated compliance checking. A further thread runs alongside that one: an endpoint through which an agent discovers, downloads and loads a dataset, built on top of the same descriptor. Describing the data and driving an agent from that description now run alongside each other. Neither one refuses.

The gap the paper works in is the second half of that sentence about compliance checking. The standard never says how. A vocabulary in which a condition can be written is not a procedure by which a request is decided, and the paper splits the difference into five items.

- No evaluation semantics. Neither the standard nor either vocabulary it recommends says what it means to check a condition against a request. Two conforming consumers may reach different verdicts on the same document without either being wrong.
- No bound on cost. Nothing constrains what a condition may cost to evaluate. In a check that runs on every access, that turns into a performance question.
- No failure semantics. A condition an implementation does not understand has no specified outcome. Whether the request is refused or the condition is skipped decides whether the mechanism is a gate or a suggestion.
- No record. A check that leaves no trace of which conditions it evaluated, with the values it observed, cannot be audited after the fact and cannot be re-decided against a later policy.
- No composition. A dataset-side condition and a caller-side authority constrain the same request, and the standard does not address the relationship.

> [!callout]
> The paper's claim is not that Croissant cannot express policy. It is that expressing policy and admitting a request are different problems. The properties an auditor needs are won or lost in the second. That is why the title calls refusal a property of the dataset.

## A Decision Language Closed at Five Operators

The proposed profile hangs a single policy node off Croissant's dataset node. The policy carries the dataset's lifecycle state. A failClosed field is mandatory, meaning that anything unevaluable is refused. It also carries one or more actions, each naming the states that admit it and the list of conditions attached to it. Conditions may use five operators, and those five are the whole language.
