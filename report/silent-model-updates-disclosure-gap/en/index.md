---
title: No provider could show that the evaluated model is the one answering you
subtitle: Silent Updates, accepted to AIES-26, measured post-deployment disclosure at nine first-party API providers and seven inference hosts
date: 2026-08-14
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# No provider could show that the evaluated model is the one answering you

_Silent Updates, accepted to AIES-26, measured post-deployment disclosure at nine first-party API providers and seven inference hosts_

## Executive Summary

> [!callout]
> AI governance rests on one assumption: that the model a system card or a safety evaluation refers to is the model now answering users. **Silent Updates**, a paper accepted to AIES-26, measured post-deployment disclosure practices at nine first-party API providers and seven third-party inference hosts. Across the 16 organizations surveyed, none had made it possible for an outsider to confirm that the documented model and the served artifact are the same thing. The reason is not missing safety documentation. The documentation is thick. What is missing is the link between the documents and the artifact.

> Fine-tuning, classifier updates, system prompt revisions, retrieval changes, routing changes. All five paths the paper catalogs change model behavior without incrementing a version number. The paper defines such a change as one that arrives with no public notice, no version increment, and no re-evaluation. In one case inside the sample, a single stable identifier pointed to ten releases over 19 months. The name callers typed stayed put while the artifact behind it kept changing.

> This is structurally the same problem the data layer has worked on for years. A catalog without lineage is useless in front of an audit, because the audit does not ask what the catalog says it holds. It asks whether you can prove that the entry is the data now in use. Right now, just after the EU AI Act's transparency duties switched on and its GPAI enforcement powers became operative, nobody has answered what those required documents actually verify. The paper's authors call this state **transparency without verifiability**.

**Editor's note.** This report is about the provenance of model identity. It pairs with our report on the lineage gap in training data, [the data sourcing lineage behind the MAI models](/report/microsoft-mai-provenance-gap/en/), but sits one layer up. That piece asked where what went into a model came from. This one asks what the identity of the thing answering right now is. For the EU AI Act timeline and the reading of individual articles, we follow [what actually switched on this August](/report/eu-ai-act-august-2026-deadline-reality/en/).

### Four numbers measure the gap between the documentation and the artifact

The first two show where the volume of disclosure and the absence of verification came apart. The third shows what blocks an outsider who tries to measure that absence directly. The fourth shows how far a name and an artifact can drift from each other. The denominator splits into 37 and 35 depending on which items apply, and that difference flips the top rank.

Source: [Abraham, S., & Bucknall, B. (2026), Silent Updates: Measuring and Closing the Post-Deployment Disclosure Gap](https://arxiv.org/abs/2608.11803), arXiv:2608.11803v1. Every figure is scoped to the paper's stated sample of 16 organizations (9 first-party providers and 7 hosts), and the authors label their results preliminary.

<!-- stat-card -->
**0 / 9** — Providers where the evaluation-to-deployment link is checkable — First-party providers whose served model can be mapped to a published safety evaluation

<!-- stat-card -->
**16.4 / 37** — Average first-party disclosure score — 29 items across 7 domains, 44.4% of the applicable maximum

<!-- stat-card -->
**3 / 9** — Terms of service that permit publishing benchmark results — The other six restrict it through benchmarking clauses or broader competing-product clauses

<!-- stat-card -->
**10 releases / 19 months** — What one identifier pointed to — Name fixed, served artifact swapped ten times

## A model can change without its version number moving

[Silent Updates: Measuring and Closing the Post-Deployment Disclosure Gap](https://arxiv.org/abs/2608.11803), posted to arXiv on 12 August 2026, is a cs.CY paper by **Sophia Abraham** and **Ben Bucknall**, accepted to AIES-26, the conference on AI, ethics and society. The authors label their results preliminary themselves. Every figure in this report comes from that v1 text and its abstract.

The paper's starting fact is simple. A deployed foundation model is not a fixed system. A provider can change how it behaves without taking it down and without giving it a new name. The abstract names five paths. Looking at what each one touches shows why a version number fails to catch the change.

| Change path | What changes | What the user experiences |
| --- | --- | --- |
| Fine-tuning | The weights themselves | A different reasoning path and a different answer to the same prompt |
| Classifier updates | Safety filters wrapped around input and output | A question answered yesterday is refused today |
| System prompt revisions | The standing instruction injected before the user's text | Tone, length, and how cautious the answers get |
| Retrieval changes | The external documents pulled in as grounding | Different facts and different citations for the same question |
| Routing changes | Which sub-model receives the request | A different model answering under the same name |

The names and order of the five paths follow the abstract of arXiv:2608.11803v1. The two right-hand columns summarize how each path shows up in practice.

What the five paths share is that **none of them touches the model identifier**. The string in the API call stays the same, and so does the name on the invoice. Whatever changes on the left, the name in the middle does not move.
