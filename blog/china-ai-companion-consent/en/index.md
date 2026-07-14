---
title: China Bars AI Companions From Training on Your Chats Without Consent
subtitle: Unlike California
date: 2026-07-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# China Bars AI Companions From Training on Your Chats Without Consent

_Unlike California_

## Executive Summary

> [!callout]
> On July 15, 2026, China's interim rules for anthropomorphic AI interaction services take effect. Until now, the emotional conversations users held with an AI companion flowed into model training with little in the way of a gate. From today, a gate called consent stands in that flow. This piece reads the rule through its focus on training consent, not deletion.

> Article 16 bars interaction data that qualifies as a user's sensitive personal information from being used for training without separate consent, and it mandates copy and deletion rights over chat records. The telling detail is that an earlier draft targeted all interaction data before the final text narrowed the scope to sensitive information. In doing so, the rule effectively conceded that much of a companion conversation is sensitive to begin with.

> The real asset of a companion AI is not the model but the emotional conversation data a user has built up over time. Yet a relational AI designed around persistent memory and a regulation that demands deletion rights and exit friction push against each other at the architecture layer. This piece reframes that collision as a question of data ownership and governance.

The rule comes down to four numbers: when it takes effect, whom it applies to, how much was already erased before it landed, and how the same structural tension has surfaced in another law.

<!-- stat-card -->
**Jul 15** — Effective date — Joint issuance by the CAC and four other agencies

<!-- stat-card -->
**All users** — Scope of training consent — SB 243 and HB 2225 center on minors

<!-- stat-card -->
**14,000+** — Agents deleted ahead of time — Shanghai authorities, a month before

<!-- stat-card -->
**10 years** — EU AI Act log retention — A precedent that clashes with GDPR's right to erasure

## Today, One Rule Redraws a Chat's Fate

On July 15, China's interim measures for the administration of anthropomorphic AI interaction services take effect. Issued on April 10 by five agencies including the Cyberspace Administration of China (CAC), the rule targets services that mimic a person's personality, way of thinking, and manner of speaking to build a sustained emotional relationship with users. Ahead of the effective date, ByteDance's Doubao and Alibaba's Qwen are shutting down user-created agent features and erasing their chat records. Qwen said the deletion is immediate and permanent with no path to migrate the data, and Shanghai authorities preemptively deleted more than 14,000 non-compliant agents a month before the rule landed.

A piece on the memory that Doubao and Qwen are erasing, viewed through the lens of data ownership, already lives on the Pebblous blog. [The data ownership of agent memory](/blog/china-ai-agent-memory-ownership/en/) examined the portability gap: the memory can be deleted, but there is no way to move it. This piece looks at a different clause of the same regulation. Before the ending where a conversation is erased, there is a prior question of whether that conversation should have been trained on without consent at all.

![Alibaba Group headquarters in Hangzhou, the company behind Qwen, which shut down its agent feature the day China's rule took effect](./image/img-01-alibaba-hq.jpg)
*▲ Alibaba Group headquarters in Hangzhou. Alibaba, which runs Qwen, fully shut down its user-created agent feature and permanently erased chat records on July 15, the day the rule took effect. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Alibaba_group_Headquarters.jpg) (CC BY-SA 3.0)*

The era when the conversations you shared your feelings in quietly became training data closes today, with one rule. The regulation did not directly order deletion. Platforms simply calculated that shutting down was cheaper than compliance. But peel back one layer of the regulatory text and the real center of gravity rests not on service shutdowns but on training consent. Reading exactly what that clause prohibits has to come first.

## What Article 16 Actually Prohibits

The rule's data provisions are gathered in Article 16. Training data must come from lawful sources, pass cleaning and labeling to raise its reliability, and be backed by measures against data poisoning and tampering. So far, this is not far from any other AI regulation. The decisive sentence comes next: unless a law provides otherwise or the user's separate consent (单独同意) is obtained, interaction data that qualifies as a user's sensitive personal information may not be used for model training.

One misreading needs to be cleared away here. This does not mean every conversation is off-limits for training without consent. The consultation draft attached the consent requirement to all user interaction data, but the enacted text narrowed that scope to sensitive personal information. What looks at first like a retreat actually exposes the heart of the matter. Much of what people share with a companion AI, such as health, beliefs, relationships, and sexual orientation, maps directly onto the definition of sensitive information. In a service that sells emotional interaction, narrowing the scope to sensitive information is, in practice, no different from aiming at the core of the conversation.

Article 16 also touches the deletion side. It requires services to offer users the option to copy and delete interaction data such as chat records, and to make leaving the service straightforward. Handing interaction data to a third party without a legal basis or clear consent is also prohibited. The structure sets consent at the training entrance and copy and deletion at the exit. Yet copy and deletion are a different right from portability. Copied text does not come back to life in another service carrying the original relational context with it.

> [!callout]
> Translated into a data practitioner's language, Article 16 becomes three obligations: attaching a consent ledger to any training corpus that contains sensitive information, making data copyable and deletable at the per-user level, and leaving a basis at every third-party transfer path. All three are only possible with a system that knows where data came from and where it is going.

## Where It Splits From California and Washington

The attempt to regulate AI companions is not China's alone. California passed SB 243, effective January 2026, and Washington passed HB 2225, set to take effect in January 2027. Lay the three regulations side by side and the difference in approach comes into sharp relief. In the table below the effective dates and focuses diverge too, but the first rows a practitioner should read are the training-consent clause and the copy-and-delete right. On these two items alone, China stands apart on its own.

| Item | China interim measures | California SB 243 | Washington HB 2225 |
| --- | --- | --- | --- |
| Effective date | 2026-07-15 | 2026-01-01 | 2027-01-01 |
| Scope | All users | Mainly minor safety | Centered on minors (under 18) |
| Training-consent clause | Yes (separate consent for sensitive info) | None | None |
| Copy and delete right | Yes (mandatory) | Not specified | Not specified |
| Core focus | Data privacy and governance | Mental-health crisis response | Banning manipulative engagement techniques |

The two US state laws are built around safety. SB 243 puts its weight on suicide and self-harm crisis-intervention protocols and on the duty to disclose that the user is talking to an AI, while HB 2225 targets manipulative engagement techniques that induce emotional dependence. Both center on protecting minors, and neither includes a training-consent or deletion clause aimed at all users.

China's regulation incorporates much of these safety provisions and then lays one more layer on top: a data governance layer aimed at all users. The decisive difference is that it codifies consent-based training limits and copy-and-delete rights without distinguishing between minors and adults. One legal analysis judged that, on paper, these provisions carry a level of user data protection that the EU, the US Federal Trade Commission, or California's SB 243 have yet to reach. If safety regulation protects users from danger, these clauses set out to protect users' rights over their own data. For a practitioner, the latter is far heavier, because it requires redrawing the system's data flows themselves.

## Persistent Memory as an Asset vs. the Right to Delete

A companion AI's worth does not come from the size of the model. It comes from the thickness of the relationship. Modern companion architectures treat persistent memory not as a feature bolted on later but as the foundation of the system from the start. The longer a user and agent exchange, the better the agent understands that person, and that understanding compounds into personalization and trust. The industry's basic grammar is exactly this: design so that value grows as the relationship deepens.

What the regulation demands runs in exactly the opposite direction. A one-tap exit, algorithms that detect over-reliance in real time, and friction that prevents addiction are forces meant to sever the relationship. The right to delete is the same. When a user erases a conversation, the relational memory built on top of it, the agent's understanding of that user, disappears along with it. In the end, the right to delete opens the door for a user to destroy a companion AI's core asset with their own hands. A design meant to sustain the relationship and a regulation that guarantees the right to end it collide inside the same system.

This tension is not being felt for the first time. Article 17 of the GDPR, the right to erasure, and the ten-year audit-log retention duty for high-risk systems under the EU AI Act, which fully applies in August 2026, have already been flagged as colliding head-on. One says erase, the other says keep. The structure in which a demand to retain and a demand to delete point in opposite directions over the same data did not first appear with companion AI. It recurs every time a regulation touches the time axis of data.

![The European Parliament building in Brussels, where GDPR's right to erasure and the EU AI Act's log-retention duty collide](./image/img-02-ep-brussels.jpg)
*▲ The European Parliament building in Brussels. The same legislature passed both GDPR's right to erasure and the EU AI Act's ten-year log-retention duty, a precedent for a demand to delete colliding with a demand to keep. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:European_Parliament_building_Brussels_3.jpg) (CC BY-SA 4.0)*

> [!callout]
> The danger of piling up persistent memory without privacy by design has already been confirmed by an incident. In February 2026, an AI chat app leaked 300 million messages from 25 million users, mixed with sensitive content such as suicide counseling and personal confessions. The cause was a database that had stayed publicly exposed since launch. Memory is an asset and a liability at once. Without a management design, the asset flips into a liability in an instant.

## It Only Resolves as a Data Governance Redesign

To honor training consent and the right to delete at the same time while keeping relational memory alive, memory has to be treated not as a single database but as a governance layer. A recently proposed design splits memory into three roles. A Canonical Memory Registry, which manages the authoritative records, holds each memory's provenance and scope, its retention period, and its deletion status together. A Policy Engine decides, moment to moment, whether a given memory can be used and whether it may be queried, exported, or trained on. A Deletion and Retention Worker erases expired memories, cleans up the derived indexes, summaries, caches, and backups that trail them, and leaves a deletion-proof log behind.
