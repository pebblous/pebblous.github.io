---
title: Unstructured Data Pipelines Break at Resolution and Provenance
subtitle: Field-level extraction accuracy reaches 72.9%, yet full-document completion stalls at 4.6%
date: 2026-08-06
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Unstructured Data Pipelines Break at Resolution and Provenance

_Field-level extraction accuracy reaches 72.9%, yet full-document completion stalls at 4.6%_

## Executive Summary

> [!callout]
> Inside the same organization, 65% say their structured data is "ready for AI," but only 39% say the same of unstructured documents — email, PDFs, contracts, meeting notes (HBR × Hyland, n=325, Dec 2025). That much is a familiar diagnosis. The real question isn't "unstructured is hard." It's what the minority who reported their data, processes, and applications as well-connected (27%) actually built. This report starts from a single observation: what they built was not a better parser.

> Reading a document into text (parsing) looks like it works. But even when fields come out mostly correct, the share of documents whose schema is completed cleanly end to end is just 4.6%. The bottleneck isn't parsing; it's resolution. On the same dataset, changing the method rather than the tool nearly triples entity-matching precision. And with no information about when, or from which version, a fact came, retrieval can succeed and the model will still invent the context it was never given.

> Yet there is no agreed industry-standard metric for measuring the quality of this layer. The break-even that separates a pilot from production isn't "buying one more parser" — it's whether you can measure which layer of the pipeline broke, and by how much. The absence of that measurement layer is precisely where Pebblous DataClinic stands.

<!-- stat-card -->
**59%** — Resolution is the bottleneck — Share of knowledge-graph build time spent merging entities and relations

<!-- stat-card -->
**72.9% → 4.6%** — The parsing illusion — Field-level accuracy vs. whole-document schema pass rate (ExtractBench)

<!-- stat-card -->
**35% → 95.4%** — A design problem — Entity-matching precision on the same benchmark, method changed only (Abt-Buy)

<!-- stat-card -->
**58%** — Provenance missing — Accuracy of standard RAG with no temporal or version information (VersionRAG)

## What a Semantic Layer Is — And How It Differs From a Vector Index

First, let's be precise about that 27%. The number is not a "share of organizations that own an enterprise semantic layer." It is an integration-perception measure — organizations that **self-reported** their data, processes, and applications as well-connected in the HBR × Hyland survey. It reflects self-assessment, not technical architecture. So the 27% doesn't mean a semantic layer got built. What actually made that minority feel well-connected is the real question — and the answer is not a search index; it's a layer of meaning, relationships, and standards.

Vector indexes and semantic layers are often lumped together, but they do different jobs. A vector index is a **retrieval layer**: it turns text fragments into embeddings and finds nearby fragments by similarity. It is good at "sentences similar to this one," but it knows nothing about relationships like "after Company A acquired Company B, which subsidiary does clause 3 of that contract apply to?" A semantic layer is a **meaning layer**: it merges entities scattered across documents (companies, people, clauses) into one, standardizes the relationships and schema among them, and makes "what connects to what, and how" consumable by a machine.

That difference shows up in performance. Ask GPT-4 forty-three enterprise questions with only the raw SQL schema, and accuracy sits at 16.7%. Give it a knowledge-graph representation of the same questions and it climbs past 54.2% — more than triple (data.world benchmark). Evidence runs the other way too. On an easy academic text-to-SQL benchmark (the original Spider), top models clear 86%; on Spider 2.0, which reflects real enterprise schemas, models of the same class land at just 31% execution accuracy. The gap between "easy benchmark" and "real schema" is exactly the space a semantic layer fills.

Same model, same data — the gap opens when you change the representation
