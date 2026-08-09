---
title: Hiding the Audit Sample Made Faking AI Fairness Four Times Costlier
subtitle: Accepted at AIES 2026, the respir protocol uses cryptography to conceal the audit sample and raise the number of responses a provider must forge
date: 2026-08-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Hiding the Audit Sample Made Faking AI Fairness Four Times Costlier

_Accepted at AIES 2026, the respir protocol uses cryptography to conceal the audit sample and raise the number of responses a provider must forge_

## Executive Summary

> [!callout]
> Algorithmic fairness audits largely rest on the assumption that the audited party cooperates. If a model provider can tell when an audit is happening and with which queries, it can equalize outcomes across groups on those queries alone and pass. A paper posted to arXiv in August 2026 and accepted at AIES 2026 removes that assumption. Its protocol makes the audit sample itself unknowable to the provider.

> Under the protocol, named respir, the provider must answer for an entire candidate set, and cryptography conceals which of those items the audit actually uses. On credit card default data, the forgery needed to hide half of the unfairness rose from 38 responses to 152. When the protected group is a small share of the data, though, the defense weakens along with it.

> Auditability is already on the books as a requirement in several regulatory texts. What is still open is whether that requirement is satisfied by filing a report, or whether it demands a procedure built to hold up under manipulation.

### Key Numbers

Source: [Godinot et al., arXiv:2608.04365 (AIES 2026)](https://arxiv.org/abs/2608.04365)

<!-- stat-card -->
**38 → 152** — Forgeries needed to hide half the unfairness — Credit card default data, protected attribute sex

<!-- stat-card -->
**20.5%** — Detection rate with five canaries — 10.7% under standard black-box auditing, COMPAS race

<!-- stat-card -->
**3.6s** — Online lookup on an 8GiB candidate database — 2.4MiB of traffic, light against any audit cycle

<!-- stat-card -->
**8%** — Minority language share in HateDay — At this skew even 50 canaries barely lift the detection rate

## The Audited Side Knew the Search Terms

A Reuters report from late 2025, based on internal Meta documents, shows exactly the problem this paper is built around. Japanese regulators checking for scam ads on Facebook and Instagram searched the ad library that Meta publishes. Meta worked out which search terms and celebrity names regulators and journalists tended to use, ran those same searches itself first, and removed the scam ads that came up.

The goal written into the internal documents was to keep problem ads from being findable by regulators, investigators, and reporters. One memo records fewer than 100 ads found over a week and zero on the final four days. Japan ultimately did not impose the advertiser identity verification requirement Meta had been worried about, and the approach became what the documents describe as a global playbook covering the United States, Europe, India, Australia, and Brazil. Meta responded that the drop in scam ads visible in search results reflected real enforcement.

What broke here was not the institution of the ad library. Article 39 of the EU Digital Services Act places a legal obligation on very large online platforms to publish an ad repository, and the repository was in fact open. What broke was the condition that the way anyone looks inside it is visible to the other side. When audit queries are observable, the audited party does not have to fix the system. It only has to tidy the places the queries reach. Opening a transparency window and making that window hold up under manipulation are two different tasks.

Fairness evaluation has the same shape. A provider can infer sensitive attributes such as sex or race from the input with considerable accuracy, and by equalizing approval rates across groups only in the range likely to be audited, it passes a metric like demographic parity. The deployed service stays unfair. Whether the requirement is an explainability report or voluntary disclosure of fairness metrics, the gap remains as long as the method leans on the provider's cooperation and on the audit being predictable.

## What Changes When the Questions Are Hidden

The respir protocol proposed by Godinot and co-authors splits an audit into four steps. First the auditor and the provider agree on a candidate set, a body of data in the thousands or tens of thousands, far larger than the sample the audit will actually use. Then the provider runs its model over that entire candidate set and builds a database of input and output pairs. It has to answer for every item, including the ones the audit will never touch.

The third step is the important one. The auditor pulls out only the subset it needs from that database using a cryptographic technique called private information retrieval. The technique is built so that the party holding the database cannot learn which items were retrieved. The provider knows what is in the candidate set but not which of those items went into the actual assessment. Finally the auditor computes the gap between groups from the outputs it recovered and decides whether that gap falls within the allowed tolerance.
