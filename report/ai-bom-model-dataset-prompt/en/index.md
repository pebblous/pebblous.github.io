---
title: The AI Bill of Materials (AI BOM) That Clears Out Shadow AI
subtitle: From models, datasets, and prompts to whether the data can be trusted
date: 2026-06-30
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Bill of Materials (AI BOM) That Clears Out Shadow AI

_From models, datasets, and prompts to whether the data can be trusted_

## Executive Summary

> [!callout]
> A software bill of materials (SBOM) is a list of which code components went into a product. But an AI system does not run on code alone. Model weights, training datasets, system prompts, external APIs, guardrails, and increasingly agents and MCP servers are all tangled together at runtime. Look only at the code list, and those components stay in a blind spot. The name for that blind spot is "shadow AI." This report sets out what an AI bill of materials (AI BOM) records once it reaches beyond code, and why it is hardening into a regulatory requirement.

> The size of the blind spot shows up in the numbers. The average company runs 14 AI tools but IT only knows about four or five of them, and one in four organizations cannot say which AI services are running inside the company right now. What is not on the list cannot be governed or audited. That is why a breach involving shadow AI costs an average of $670,000 more than a standard one and takes 267 days to detect.

> Yet "the dataset is on the list" and "the dataset can be trusted" are two different claims. Security tools are good at finding AI components, but they do not judge whether the underlying data carries contamination, duplication, label errors, or license violations. This is where Pebblous starts from a single premise: data you cannot audit is data you cannot regulate. If an AI BOM is the parts list, then data quality and provenance monitoring are the certificate of quality stapled to each part.

<!-- stat-card -->
**63%** — No AI governance policy — Share of orgs running AI with no list and no control baseline (IBM 2025)

<!-- stat-card -->
**+$670K** — Added cost of a shadow-AI breach — Average premium over a standard breach (IBM 2025)

<!-- stat-card -->
**73%** — Exposed to prompt injection — Production AI found vulnerable in security audits

<!-- stat-card -->
**€35M / 7%** — Top EU AI Act penalty — 7% of revenue or €35M for prohibited practices (Article 99)

## The Limits of a Code-Only Manifest

A software bill of materials works much like the ingredient label on a food package. Record which library went in, at which version, under which license, and when a vulnerability later surfaces in one of them you can quickly find every product it touched. After the 2021 Log4Shell crisis, SBOMs became table stakes for supply-chain security, and Gartner expects SBOM adoption among large enterprises to climb from 56% in 2025 to 85% by 2028.

The SBOM rests on a single assumption: the parts are fixed at build time. Once you ship, the list of libraries inside does not change, so one static list is enough. AI systems break exactly that assumption.

Models keep evolving through fine-tuning and retraining. At runtime they call external APIs and pull in fresh data through retrieval. The same code behaves differently the moment you swap a system prompt or a guardrail. The system stays alive long after the build has finished. A static parts list cannot keep pace with a system that flows like this.

So an AI bill of materials does not stop at listing parts. It tracks the **relationships** between them. Which application uses which model (`USES_LLM`), which tools it calls (`USES_TOOL`), which retrievers and memory stores it connects to (`USES_RETRIEVER`, `USES_MEMORY`) — all drawn as a graph. It is not a list but a dependency graph.

Laying the two manifests side by side, item by item, makes the difference plain.

| Dimension | SBOM (software) | AI BOM (AI bill of materials) |
| --- | --- | --- |
| What it tracks | Code, libraries, dependencies | Models, datasets, prompts, agents, even MCP servers |
| Time assumption | Fixed at build (static) | Keeps evolving in training and runtime (dynamic) |
| Structure | A list of parts | A dependency graph that captures relationships |
| Core risk | Known CVEs, vulnerable libraries | Data poisoning, prompt injection, model backdoors |
| Quality question | Is the version current? | Can this data be trusted? |
