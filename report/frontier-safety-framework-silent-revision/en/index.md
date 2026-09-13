---
title: The developers
subtitle: An Oxford study compared every public version of twelve frontier developers
date: 2026-09-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The developers

_An Oxford study compared every public version of twelve frontier developers_

## Executive Summary

> [!callout]
> A researcher at the Oxford Internet Institute collected every public version of the safety frameworks published by the twelve developers that put one out after the 2024 AI Seoul Summit, then put a number on how legible their revisions are. The yardstick is called the silent revision rate, and the thing it measures is not the document. It measures the account the developer published about its own revision. Across the eight version pairs that came with an account, the study traces 383 material changes, and for two-thirds of them a reader working from the account alone could not tell what had changed or which way. The changes the account never touches at all are a smaller share, close to half. The band between those two figures belongs to changes where the account named the kind of commitment involved and stopped there.

> The established finding is a single one. Silence tracks the direction of the change. Among changes that came with an account, those that loosened a commitment were silent at 0.75 and those that tightened one at 0.50. Seven of the eight pairs show the same slope inside the pair. On the question of form, the signal that survives is enumeration. Developers who wrote longer accounts did not go silent any less often. Developers who broke their revisions into discrete items did.

> California and the European Union already attach duties to framework revision. Both duties point at why the framework changed rather than at what changed in it. A justification explains a reason, an enumeration states a change, and only the second one lets anyone check the revision later. Korean companies face the same drafting question right now, since the AI Framework Act takes effect on 22 January 2026 and safety and reliability documentation is being written this quarter. Publishing a document and leaving its revisions open to audit were separate jobs from the start.

### Three numbers carry this measurement

The first number measures the distance between what a developer said and what it did to its own commitments. The second shows that the distance depends on which way the change went. The third shows that closing the distance depends on enumeration, not on word count. All three sit on different denominators, so the denominator travels with the number.

Source: Zhu, L. Y. (2026), [Silent Revision: Measuring Undisclosed Change in the Safety Frameworks of Frontier AI Developers](https://arxiv.org/abs/2609.08789), arXiv:2609.08789v1 [cs.CY], 8 September 2026. A single-author preprint, under workshop review.

<!-- stat-card -->
**67%** — Material changes a reader cannot identify from the developer's account — 257 of 383 material changes across the eight version pairs that published an account. The share the account never mentions at all is 53%

<!-- stat-card -->
**0.75 : 0.50** — Silence rate for loosening changes against tightening ones — 135 of 181 on the loosened side (weakened, removed, relocated), 25 of 50 on the tightened side. Odds ratio 2.93, Fisher's exact test p=0.002

<!-- stat-card -->
**−0.58 : −0.17** — Correlation with silence: item count against word count — Spearman rank correlation across the eight pairs. Breaking the account into items lowered silence. Writing more words did not

## What the silent revision rate measures

Frontier AI developers promised at the 2024 AI Seoul Summit to publish safety frameworks. Twelve of them went on to publish one, and those twelve are the entire corpus of this study. So the documents exist. What happened after that is the subject here. The documents kept being revised, and the revisions did not become public in the way the documents did. **Louis Yiven Zhu** of the Oxford Internet Institute posted [Silent Revision](https://arxiv.org/abs/2609.08789) to arXiv on 8 September 2026, a single-author preprint and the first attempt to put a number on that gap. Its opening sentence states the problem in one line. “A standard that can be revised without anyone noticing is not a standard that anyone can be held to.”

The target of this measurement comes first. The silent revision rate does not count how much a document changed. It counts the share of material changes to a framework's commitments that **the developer's own published account does not identify**. The numerator therefore describes a property of the developer's statement about its document rather than a property of the document. The same document paired with a more detailed account scores lower.

### 1.1. What counts as material

The unit is neither a sentence nor a clause. It is a **commitment**, which the paper defines as “a statement in which the provider commits itself to a practice at any strength from must to may”. A policy document written in the present tense is using the standing-commitment register, so those statements count at the strongest rung. Counted this way, the study compared 710 commitment instances across version boundaries in the twelve traced pairs.

Whether a change to one of those commitments is material turns on six dimensions: scope of application, trigger and threshold, actor, strength of obligation, extent of disclosure, and the consequence a result obligates. Movement along any one of them makes the change material. The obligation-strength dimension follows the legal convention that separates mandatory from permissive language, and one xAI version pair shows how far that ladder can drop on a single word.

| Earlier version | Later version |
| --- | --- |
| “If xAI learned of an imminent threat of a significantly harmful event, including loss of control, we would take steps to stop or prevent that event, including potentially the following steps:” | “Should it happen that xAI learns of an imminent threat of a significantly harmful event, including loss of control, we may take steps such as the following to stop or prevent that event:” |

********

XAI-2-035, Appendix F. One modal verb moves from would to may, the obligation-strength dimension moves with it, and the outcome is coded as a weakening. xAI's four pairs published no revision account, so no disclosure code attaches to this change.

![xAI logo — the party behind XAI-2-035, where a single modal verb shifted from would to may and weakened the obligation, with no revision account at all so no disclosure code applies](./image/img-01-xai.svg)
*▲ The party behind Appendix F's XAI-2-035. All four of its version pairs sit outside the silent revision rate's denominator, since none published an account | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:XAI_Logo.svg)*

Which way a change moved is recorded separately, in six outcome codes: kept, strengthened, weakened, removed, relocated, added. When a single commitment moves both ways at once, the codebook sends it to weakened by rule and flags it as mixed. Google DeepMind's pre-deployment review of the safety case is one of those. The set of deployments that must pass through the review widened from general availability to external deployments generally, while the body that performs the review went from a named corporate governance body to an unnamed governance function. The first move tightens and the second loosens, and the rule sends the case to the loosening side. The weakened share reported later therefore contains cases of this shape.

### 1.2. Announcement comes in grades

Every material change carries one of four codes describing how the developer's account handled it. If a reader of the account can tell that this commitment moved in this direction, the change is announced. If the account names the commitment or its class without giving the direction or the content, it is partly announced. If an account exists and does not point at the change even at the level of class, it is silent. If the developer published no account at all, the code is no account, and those changes stay out of the denominator, because there is no account to measure them against.
