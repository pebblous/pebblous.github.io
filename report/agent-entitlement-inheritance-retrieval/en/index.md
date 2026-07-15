---
title: AI Agents Don
subtitle: Meta
date: 2026-07-16
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Agents Don

_Meta_

## Executive Summary

> [!callout]
> In March 2026, a Meta internal AI agent exposed data it had no right to see across the company for roughly two hours. The striking part is that nothing was breached. There was no attacker, no stolen credential, no perimeter that fell. The agent held valid credentials and cleared every identity check. The failure did not come from authentication; it came from the gap in authorization that opens right after it. This report reads that gap not as a model-performance problem but as a problem of permission inheritance.

> The technical reality is plain. A source data warehouse enforces who sees what down to the row and the column, but the instant that data is split into chunks and embedded into a vector index, those access controls do not travel with it. Many organizations, instead of inheriting permissions from the source, hand-configure a separate set at the retrieval layer, and that copied permission set drifts away from the source as people change roles, projects wind down, and temporary grants are never revoked. For a human, this over-permissioning is a latent risk; for an agent retrieving at machine speed, it becomes leakage the moment it exists.

> The remedy is to enforce permissions at retrieval time. Filtering after the fact is too late — by then the unauthorized data has already touched the ranking and the cache. Permissions have to narrow the retrieval scope first, and those permissions must be inherited from the source rather than built anew. What follows walks through that mechanism and that remedy one step at a time.

<!-- stat-card -->
**97%** — AI breaches without access controls — IBM, among orgs breached via AI models/apps

<!-- stat-card -->
**96%** — Entitlements unused over 90 days — Oso × Cyera, 3.6B entitlements analyzed

<!-- stat-card -->
**109:1** — Machine-to-human identity ratio — Up sharply from 82:1 a year earlier

<!-- stat-card -->
**78%** — No agent-identity policy — CSA × Oasis, no creation/deletion rules

## Two Hours of Exposure

A Meta internal AI agent exposed data it had no right to see across the company for roughly two hours. The single most important fact about the incident is that nothing was breached. No outside attacker got in, no credential was stolen, no firewall or access perimeter came down. The agent carried valid credentials and passed every identity check exactly as designed.

And yet the data leaked. The failure happened one step past authentication. Who the agent was had been verified precisely, but what that agent was entitled to see — authorization — was never enforced at the moment it reached for the data. A deputy holding valid credentials executing the wrong request on its own authority is the textbook **confused deputy** problem in security. That is why a system can leak even when nothing is breached.

This is where the report parts ways with the dominant conversation. The story around enterprise AI agents tends to converge on a performance problem: the model is "confidently wrong." But what the Meta incident revealed was not performance. An agent reached data it was not entitled to access, and that is not a question of what the model knows — it is a question of what it is entitled to see. It is not a performance story; it is a **data governance** story.

> [!callout]
> Because accounts of the incident's severity rating differ slightly from source to source, this report goes no further than "it was classified internally at the highest alert level." What is certain is the nature of the exposure: with no intrusion, an agent that passed normal authentication exposed data through a gap in authorization.

### The Angles Already Covered, and the One Still Open

Over the past few weeks Pebblous has covered agent data leakage from several angles: where the leaks escape (tool calls, logs, agent-to-agent messages), why the context layer that underpins all of it became an investment thesis, and who the agent is (identity and lineage). This report narrows in on the two axes those three pieces did not touch — what an agent is entitled to see (permission), and when that entitlement breaks down (retrieval time).

| Earlier piece | Axis covered | How this piece differs |
| --- | --- | --- |
| Leaks Through the Pipes, Not the Answers | Where the leak escapes | This piece asks when it begins — before the pipes, at retrieval time |
| Why the Context Layer Became a Bet | The context layer investment thesis | This piece narrows to the condition that makes that layer succeed or fail: permission inheritance |
| 200 Agents, No Employee ID | Who the agent is (identity) | This piece asks what it is entitled to see (permission) |
| This piece | Permission × timing | Is what-it's-entitled-to-see enforced at retrieval time? |

[/blog/agent-internal-channel-privacy-leak/en/](/blog/agent-internal-channel-privacy-leak/en/)********[/blog/jedify-agent-context-layer/en/](/blog/jedify-agent-context-layer/en/)********[/blog/autonomous-enterprise-agent-identity/en/](/blog/autonomous-enterprise-agent-identity/en/)********

In one sentence: identity (who) and the pipes (where) are already covered. This report is about permission (what) and timing (when).

## Why Permissions Stop at the Door

A source data warehouse enforces who sees what with real precision. Role-based access control (RBAC) divides access by job function; attribute-based access control (ABAC) divides it by attributes like department, region, or clearance level. Row-level security (RLS) makes the same table return different rows to different people, and column masking hides the values in specific fields. Up to here we are dealing with controls that have been refined over decades and work well.

The trouble starts the moment that data is moved to feed an AI agent. A retrieval-augmented generation (RAG) pipeline splits documents into small chunks and turns each chunk into a numeric vector called an embedding, stored in a vector index. But that vector index has no place to hold the row and column permission predicates the source carried. A vector is a data structure designed to express semantic proximity, not the rule "only HR may see this value." Worse, chunking dissolves the very row and column boundaries that RLS and column masking depended on. The instant one document is split into several pieces, you can no longer trace which piece belongs to which permission as precisely as the source could.

Many organizations fill this gap with metadata — tagging each chunk with an access control list (ACL) that says "this document, this team only." You can do that. But it is a **copy** of the source permission, not an inheritance. A copy has to be reconciled with the source through a separate sync pipeline, and the moment that sync runs even slightly behind, the index's permissions begin to diverge from the source. This is the technical reality behind the entitlement drift we will get to shortly.
