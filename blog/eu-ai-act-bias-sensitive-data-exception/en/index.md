---
title: To Build Fair AI, the EU Unsealed Its Most Sensitive Data
subtitle: The paradox that erasing bias needs race and health data — and the five conditions the EU attached
date: July 4, 2026
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# To Build Fair AI, the EU Unsealed Its Most Sensitive Data

_The paradox that erasing bias needs race and health data — and the five conditions the EU attached_

## Executive Summary

> [!callout]
> On May 7, 2026, the EU Council and the European Parliament reached a provisional agreement on the "Digital Omnibus," the first package to amend the AI Act. Among the changes that cleared the Parliament vote on June 16, the quietest yet most fundamental one sits in Article 10. For the first time, the law spells out a legal basis for processing special-category personal data — race, health, biometrics, sexual orientation — that GDPR had in principle forbidden, provided the purpose is to detect and correct bias in AI. It is the strange sight of a law written in the name of fairness quietly unsealing the very data it had locked away.

> Behind it lies a paradox. To confirm whether an AI discriminates against a particular group, you need the very data that identifies that group. You cannot fix what you cannot measure. Yet GDPR Article 9 keeps data like race and health under seal, and as a result bias testing itself has often been blocked. In the United States, one survey found that 21 of 25 federal agencies could not carry out equity assessments because they lacked demographic data. The EU's amendment unblocks this — but opens the door only through a narrow gate of five conditions.

> For Pebblous readers, what makes this shift matter is that it draws a line around data rights themselves, not around a compliance calendar. Where the August transparency duties and the delayed hiring-AI deadline we covered earlier were questions of "by when must this be met," this one is a question of "which data are you even allowed to feed it." Beyond clean data, the text now decides which data the law recognizes as permissible to feed a model.

<!-- stat-card -->
**21 / 25** — Agencies unable to assess — U.S. federal agencies that could not run equity assessments for lack of demographic data (Stanford HAI)

<!-- stat-card -->
**Art. 9 → 10** — From seal to exception — Special-category data GDPR forbade now gets a processing path for bias detection

<!-- stat-card -->
**5 conditions** — Gates to clear — All must be met to use sensitive data for bias testing

<!-- stat-card -->
**2026-05-07** — First amendment deal — The Digital Omnibus provisional agreement — the first revision to the AI Act since its 2024 adoption

## To catch bias, you must know its target

Suppose a hiring AI is quietly filtering out women applicants. To prove that bias, you have to split the pass and fail outcomes by gender and compare them, which means you need the applicants' gender data. To test for racial discrimination you need race data; to test for disability discrimination you need data on disability status. Checking for fairness always begins by holding the most sensitive information in your hands. "You cannot fix what you cannot measure" works here in the most literal sense.

The problem is that the law has sealed that very data away. GDPR Article 9 prohibits, as a matter of principle, the processing of special-category personal data such as racial or ethnic origin, health, biometrics, and sexual orientation. A provision meant to protect the individual has, paradoxically, also blocked the work of checking whether that individual is being discriminated against. In practice, the more faithful a privacy team is to the data-minimization principle, the more likely it has been to tell the bias-testing team, "you're not allowed to collect that data."

That this deadlock is not an abstract worry is shown by a Stanford HAI survey: of 25 U.S. federal agencies, 21 could not perform equity assessments of the systems they use because they had not secured enough demographic data. The synthetic or anonymized data often floated as an alternative frequently fails to reproduce the fine-grained patterns of statistical bias, so its limits become clear precisely when the goal is to catch real discrimination. This is exactly where fairness and privacy collide head-on over the same data.
