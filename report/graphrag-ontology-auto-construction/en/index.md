---
title: When the Graph Is Wrong, RAG Is Wrong
subtitle: The Quality Problem of Auto-Constructed GraphRAG Ontologies — From Framework Comparison to Diagnostic Strategy
date: 2026-04-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When the Graph Is Wrong, RAG Is Wrong

_The Quality Problem of Auto-Constructed GraphRAG Ontologies — From Framework Comparison to Diagnostic Strategy_

## Executive Summary

> [!callout]
> Since Microsoft's GraphRAG paper in 2024, knowledge graph-based retrieval-augmented generation has become one of AI's hottest paradigms. Its promise to solve vector RAG's structural limitations — multi-hop reasoning failures, lack of global context, and inability to trace relationships — is backed by impressive numbers: 31,600 GitHub Stars, and a KG market growing at CAGR 36.6% ($1.07B to $6.94B, 2024-2030). But beneath this explosive growth lies a fundamental problem that is easy to overlook.

> The core issue is a simple equation: "auto-constructed ontology = unvalidated schema." When LLMs automatically extract entities and relationships from text to build knowledge graphs, five quality problems emerge: Hallucinated Edges (1.5-1.9% hallucination rate), Entity Duplication, Incomplete Extraction, Schema Drift, and Domain Mismatch. LightRAG's reported performance drops from a 72% to 48% win rate (a 24-point decline) once evaluation bias is corrected, suggesting that the real quality of auto-constructed graphs may fall far short of published benchmarks.

> This report compares six frameworks, dissects the five-stage auto-construction pipeline, and diagnoses the quality problems at each stage using quantitative data. While graph DB vendors focus on storage and retrieval and GraphRAG frameworks focus on construction and search optimization, a gap exists: quality diagnostics. Pebblous fills this gap by extending DataClinic's structured data quality diagnosis capabilities into the graph data domain. This piece is part of the [Neuro-Symbolic × Ontology hub](/project/NeuroSymbolicOntology/en/) series — naming exactly where a neuro-symbolic stance has to step in to patch what LLM-built graphs leave behind.

## What Is GraphRAG — Vector RAG's Limits and the Graph Solution

Until 2023, vector-based RAG (Retrieval-Augmented Generation) was the dominant paradigm. It carried three fundamental limitations — not mere performance gaps, but structural constraints inherent to vector embeddings as a representation method.

### 1.1 Three Structural Limits of Vector RAG

**First, the Lost-in-the-Middle problem.** Information buried in the middle of long documents goes unretreived. Because vector similarity is computed at the chunk level, when the answer spans multiple chunks, none of them ranks high enough individually.

**Second, the absence of global context.** For questions like "Summarize this entire document," vector RAG is structurally powerless. Individual chunk embeddings cannot capture thematic flow or macro-level patterns across a full document.

**Third, the inability to reason over relationships.** For multi-hop questions like "What impact did the technology of Company B — in which the CEO of Company A invested — have on Industry C?", vector RAG cannot trace the relational chain from A to B to C.

### 1.2 The GraphRAG Solution

GraphRAG addresses all three limitations through a dual structure of **entity-relationship graphs plus community summaries**. It extracts entities (people, organizations, concepts) and their relationships from text to build a graph, then uses the Leiden algorithm to detect communities (clusters of densely connected entities) and generates summaries for each. Local search explores relationships around specific entities, while global search synthesizes community summaries to answer broad questions.

The core numbers from the Microsoft GraphRAG paper (Edge et al., 2024) prove the point: **+27.23% F1 improvement** on multi-hop QA versus Dense RAG. On single-hop QA, however, the gain is only +0.47% — showing that GraphRAG's real strength lies in complex relational reasoning.

### 1.3 Adoption Timeline: 2024-2026

In just two years, the GraphRAG ecosystem has expanded explosively. The timeline below captures the key milestones.

| Date | Event |
| --- | --- |
| Apr 2024 | Microsoft GraphRAG paper published, GitHub repo released |
| Jul 2024 | LightRAG (HKUST/ByteDance) announced, claiming 94-98% cost reduction |
| Sep 2024 | Neo4j GraphRAG Builder launched with LLMGraphTransformer integration |
| Dec 2024 | LlamaIndex PropertyGraphIndex reaches GA |
| Jan 2025 | ArchRAG announced, 250x token reduction |
| Mar 2025 | AutoSchemaKG emerges, autonomous KG construction paradigm |
| Jul 2025 | LightRAG presented at ACL 2025 |
| 2025-2026 | Agentic RAG + KG convergence trend accelerates |

> [!callout]
> In just two years, more than six frameworks have emerged and the KG market has entered a 36.6% annual growth trajectory. But this speed comes at a cost: the absence of quality verification. In the race to "build faster," "build correctly" has been left behind.

## Framework Comparison — Six Contenders, Promises and Reality

The GraphRAG ecosystem already features six or more competing frameworks. Comparing their architectures, cost structures, accuracy, scalability, and multilingual support reveals a problem that none of them solve.

### 2.1 Framework Comparison Table

The table below summarizes the key specs of six major frameworks. Cost is based on HotpotQA 100 questions; accuracy is multi-hop QA F1.

| Framework | Architecture | Cost / Query | Multi-hop Accuracy | Scalability | CJK Support |
| --- | --- | --- | --- | --- | --- |
| Microsoft GraphRAG | Leiden community + global/local search | $6.50/100Q | +27.23% F1 | Medium (batch only) | Indirect |
| LightRAG | Dual-level (entity + topic) | $0.15/same set | Corrected: 48% win | High (incremental) | Indirect |
| nano-graphrag | Lightweight GraphRAG clone (~1,100 lines) | Low | Unverified | Low | Indirect |
| LlamaIndex PropertyGraph | Existing RAG + graph layer | Medium (1.60K tok/Q) | Medium | High (ecosystem) | Indirect |
| Neo4j + LLM | GraphRAG Builder + Cypher | Medium | High (native) | High (enterprise) | Indirect |
| Palantir AIP | Enterprise ontology automation | High (license) | High (domain-specific) | High | Limited |

************************

### 2.2 Framework-by-Framework Analysis

**[Microsoft GraphRAG](https://github.com/microsoft/graphrag)** is the reference implementation in this space. Its Leiden algorithm-based community detection and hierarchical summarization are the core innovations, but the cost structure — ~$650 and 1,394M tokens for HotpotQA 100 questions — is a major barrier in production. Its batch-only architecture makes real-time document ingestion difficult, and Leiden's focus on structural connectivity while ignoring semantics is a known limitation.

**[LightRAG](https://github.com/HKUDS/LightRAG)** reports 94-98% cost reduction over GraphRAG through dual-level retrieval at entity and topic levels. Its incremental update support makes it practical. However, meta-analysis shows that once evaluation bias (LLM-as-judge order effects, length bias, etc.) is corrected, the win rate drops from 72% to 48% — a 24-point decline that puts it on par with NaiveRAG.

**[nano-graphrag](https://github.com/gusye1234/nano-graphrag)** is a minimal implementation in about 1,100 lines, suitable for education and prototyping. Deployable in 2-3 days but unsuitable for production. **[LlamaIndex PropertyGraphIndex](https://docs.llamaindex.ai/en/stable/examples/property_graph/property_graph_basic/)** offers the lowest switching cost for existing LlamaIndex users, with an overhead of 6ms and 1.60K tokens.

**[Neo4j + LLM](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/)** combines an enterprise graph database with LLMGraphTransformer. Auto-generated Cypher queries enable complex graph traversals, backed by ACID transactions and enterprise-grade security. **[Palantir AIP](https://www.palantir.com/docs/foundry/aip/overview)** represents the pinnacle of enterprise ontology automation, but requires 2-3 months for deployment and carries significant vendor lock-in.

> [!callout]
> LightRAG leads in cost efficiency, Neo4j+LLM in accuracy, and LlamaIndex in accessibility — but **none of them provide quality assurance for auto-constructed ontologies.** The competition to "build graphs faster and cheaper" is fierce, while the framework for asking "Is this graph correct?" remains absent.

## The Mechanics of Auto-Construction — A Five-Stage Pipeline

GraphRAG's automatic ontology construction follows a five-stage pipeline. Understanding how each stage works is essential for pinpointing where the quality problems analyzed in the next section originate.

### 3.1 Entity Extraction (From NER to LLM-Based)

Traditional NER (Named Entity Recognition) was limited to predefined entity types (person, organization, location). In the GraphRAG era, entity extraction is performed via LLM prompts. A single instruction — "Extract all entities and their types from this text" — enables flexible extraction.

English environments report F1 scores of 85-92%. Korean NER reaches 91.42% on the KLUE BERT benchmark, and 94.30% in the Korean medical domain. However, these figures come from benchmark datasets; on real-world domain documents with specialized terminology, abbreviations, and context-dependent entities, accuracy can drop significantly. For low-resource languages, it falls to 50-70%.

### 3.2 Relationship Extraction (The Importance of Prompt Design)

The LLM determines relationships between extracted entity pairs. The prompt "Describe the relationship between Entity A and Entity B" is at the core. CoNLL-2003 benchmarks report 81.8% F1, but this is under conditions where relationship types are predefined. In open-domain settings where the LLM freely defines relationships, the risk of hallucinating nonexistent connections skyrockets.

Code-style templates significantly reduce hallucination, yet even top-tier LLMs (OpenAI) show a **1.5-1.9% hallucination rate**. In a graph with tens of thousands of relationships, 1.5% means hundreds of false edges.

### 3.3 Community Detection (Leiden Algorithm)

Microsoft GraphRAG's key innovation is community detection via the Leiden algorithm. It groups densely connected entities into clusters, creating structural units for answering global questions. Hierarchical clustering enables communities at varying levels of resolution. The limitation: Leiden considers only graph structure (connection density) and ignores semantics (meaning-based similarity).

### 3.4 Community Summarization (Generating Global Answers)

The LLM summarizes each community's entities and relationships in natural language. During global search, summaries from relevant communities are synthesized into a final answer. At this stage, GraphRAG achieves a Comprehensiveness score of 45-50%, while LightRAG Hybrid pushes it to 50-54%.

### 3.5 Schema Evolution (Incremental Updates)

Static graphs become stale over time. Incremental updates incorporate new documents without rebuilding the entire graph. DIAL-KG achieves F1 +4.7% with a schema-free approach, and IncRML reports 315.83x storage savings and 4.59x CPU savings. Graphiti supports temporal KGs for real-time AI agents, tracking knowledge changes along the time axis.

> [!callout]
> Errors accumulate at every stage of the five-stage pipeline. Inaccurate entity extraction propagates into relationship extraction, flawed relationships distort community detection, and distorted communities degrade global answer quality. **The longer the pipeline, the more a small error in the first stage is amplified in the final output.**

## Quality Problems in Auto-Construction — Five Risks with Quantitative Evidence

This is the core section of the report. We analyze five quality problems in auto-constructed ontologies using quantitative data and real-world examples. Vector RAG may miss relevant information, but it does not fabricate facts. A knowledge graph with hallucinated edges, by contrast, presents fabricated relationships to the LLM as "verified facts," leading to confidently wrong answers.

### 4.1 Hallucinated Edges — False Relationships Invented by LLMs

**The problem.** LLMs generate relationships not stated in the source text, based on patterns in their training data. Even top-tier LLMs (OpenAI) exhibit a 1.5-1.9% hallucination rate, meaning **150-190 false relationships** in a graph with 10,000 edges.

**Quantitative evidence.** The GraphEval technique reports +16% accuracy and +20% F1 improvement over SelfCheckGPT for KG-based hallucination detection. Paradoxically, this means existing detection methods were missing a substantial portion of hallucinated content.

**Real-world impact.** In a financial regulatory KG, if a false relationship stating "Regulation A supersedes Regulation B" is inserted, an agent could advise compliance with a repealed regulation. Code-style prompt templates reduce hallucination but cannot eliminate it entirely.

### 4.2 Entity Duplication — Same Thing, Different Names

**The problem.** "Samsung Electronics," "SAMSUNG," "samsung," and the Korean "삼성전자" all become separate nodes. In multilingual environments, mixing scripts, abbreviations, and honorifics compounds the problem.

**Quantitative evidence.** Entity extraction F1 is reported at 85-92% (English), but this measures individual extraction accuracy and does not include entity resolution performance. Duplicate entities fragment the graph's connectivity, making relationship reasoning incomplete.

**Real-world impact.** In a manufacturing ontology, if "thermal paste," "TIM" (thermal interface material), and its local-language equivalent are separate nodes, defect histories for the same component scatter across three entries, and pattern detection fails.

### 4.3 Incomplete Extraction — Information That Exists but Goes Unseen

**The problem.** Due to LLM context window limits, prompt design constraints, and implicit relationships, entities and relationships present in the source documents are simply not extracted.

**Quantitative evidence.** Population Completeness (extracted entities / expected entities) varies widely by domain and document complexity. LightRAG achieves 59-77% on the Diversity metric versus GraphRAG's 23-41%, suggesting GraphRAG's community-based approach may miss fine-grained entities.

**Real-world impact.** In legal documents, implicit references like "except as provided in Article 3, Paragraph 2" are difficult for LLMs to extract as relationships. Missing these links can lead to critical errors in legal interpretation.

### 4.4 Schema Drift — When Time Dissolves the Schema

**The problem.** As incremental updates accumulate, the entity types and relationship types defined at the start gradually morph. When entities from new documents do not fit the existing schema, the LLM arbitrarily creates new types.

**Quantitative evidence.** Schema Completeness (used classes / total classes) and Logical Consistency (inconsistencies per semantic property) are the key metrics. IncRML's 315.83x storage savings demonstrate the efficiency of incremental processing, but maintaining schema consistency requires a separate mechanism.

**Real-world impact.** A manufacturing KG that starts with a clean "Part-Defect-Process" schema can, after six months, become cluttered with "Component-Issue-Step," "Part-Problem-Phase," and other semantically equivalent but structurally incompatible variants.

### 4.5 Domain Mismatch — The Expertise Gap of General-Purpose LLMs

**The problem.** General-purpose LLMs like GPT-4 and Claude are strong on general knowledge but limited in building specialized domain ontologies. They struggle to accurately capture the terminology and relationship hierarchies of fields like healthcare, law, and finance.

**Quantitative evidence.** Korean medical domain NER reaches F1 94.30% (with a domain-specialized BERT), far exceeding general models — underscoring how much domain specialization matters. For low-resource languages, accuracy drops to 50-70%.

**Real-world impact.** Airbus's 7-ontology digital twin and Siemens's manufacturing KG were manually built by domain experts over years. For an LLM to accurately model the relationship between "turbine blade creep" and "creep rupture," general knowledge alone is insufficient.

### 4.6 Meta-Analysis: The LightRAG Performance Inflation Problem

The most notable finding is LightRAG's evaluation bias. Meta-analysis reveals that the paper's reported 72% win rate drops to **48% once evaluation bias** (LLM-as-judge order effects, length bias, etc.) is corrected. A 24-point gap effectively puts it on par with NaiveRAG (simple vector search).

This is not unique to LightRAG. It suggests that across the GraphRAG field, the "real effectiveness of auto-constructed graphs" may be overstated relative to published numbers. Metrics like Comprehensiveness (45-54%) and Diversity (23-77%) were measured on graphs whose underlying quality was never validated.

### 4.7 Summary of the Five Quality Problems

The table below summarizes the key metrics and risk levels for each of the five quality problems.

| Quality Problem | Key Metric | Detection Difficulty | Business Risk |
| --- | --- | --- | --- |
| Hallucinated Edges | 1.5-1.9% hallucination rate | High | Critical (confident wrong answers) |
| Entity Duplication | F1 85-92% (excl. deduplication) | Medium | High (pattern detection failure) |
| Incomplete Extraction | Diversity 23-77% | High | High (hidden blind spots) |
| Schema Drift | 315.83x storage savings (efficiency exists, consistency unguaranteed) | Medium | Medium (gradual degradation) |
| Domain Mismatch | Specialized 94.30% vs low-resource 50-70% | Low | High (domain-specific errors) |

****

> [!callout]
> **"RAG without a graph is a problem, but RAG with a wrong graph is a bigger one."** Vector RAG that cannot find relevant information either says "I don't know" or generates a generic answer. KG-based RAG with hallucinated edges, by contrast, references false relationships as "verified structured knowledge" and produces confidently wrong answers. Users trust graph-backed answers more, amplifying the damage from errors.

## Quality Diagnostic Framework — You Cannot Manage What You Cannot Measure

Systematically evaluating the quality of auto-constructed ontologies requires clear metrics and diagnostic tools. This section examines the three pillars of graph quality, KG-based hallucination detection, and DataClinic's potential extension to graph data.

### 5.1 Graph Quality Metrics — Three Pillars

**Completeness.** Schema Completeness measures the number of used classes against the total classes expected for the domain. Property Completeness is the ratio of non-null attributes — nodes with only a type label and empty properties degrade search quality. Population Completeness measures extracted entities against the number expected from domain documents.

**Consistency.** Logical Consistency counts inconsistencies per semantic property (functionality, asymmetry, etc.). It detects contradictions like "A is a superclass of B" coexisting with "B is a superclass of A." Schema Conformance measures how closely actual instances follow the defined schema, and Entity Resolution Rate measures the rate of duplicate entity detection and merging.

**Freshness.** Temporal Validity tracks the validity period of facts in the graph. Update Latency measures the time from a source document change to its reflection in the graph. Decay Rate measures how accuracy degrades over time.

### 5.2 KG-Based Hallucination Detection

GraphEval uses the knowledge graph itself as a baseline for hallucination detection. Its **+16% accuracy, +20% F1** improvement over SelfCheckGPT demonstrates that KGs can function not just as retrieval sources but as quality verification tools. This dual role — retrieval augmentation and quality assurance — points to GraphRAG's future direction.

DIAL-KG achieves F1 +4.7% with a schema-free approach that works in streaming environments. By autonomously learning structure from data without a predefined schema, it addresses Schema Drift from a fundamentally different angle. However, schema-free does not mean "quality-free" — the generated structures still need validation.

### 5.3 DataClinic Extension Potential

Pebblous's DataClinic automates quality diagnosis for structured data. Its six quality dimensions — Completeness, Consistency, Validity, Timeliness, Uniqueness, and Accuracy — map naturally to graph data quality. The table below shows this mapping.

| DataClinic Structured Dimension | Graph Data Extension |
| --- | --- |
| Completeness | Schema / Property / Population Completeness |
| Consistency | Logical Consistency, Entity Resolution |
| Validity | Relationship type validity, Domain constraint compliance |
| Timeliness | Temporal Validity, Update Latency |
| Uniqueness | Entity Duplication Rate |
| Accuracy | Hallucinated Edge Detection |

> [!callout]
> The fact that structured data's six quality dimensions map 1:1 to graph data means DataClinic's extension is a technically natural path. "A tool that diagnosed NULL rates in tables now diagnosing empty property rates in graphs" is not a paradigm shift — it is an extension.

## Real-World Scenarios — Industry-Specific Risks and Opportunities

The quality problems of auto-constructed ontologies are not abstract concerns. Let us examine how each problem manifests in concrete industry scenarios: manufacturing, financial regulation, data quality standards, and software development.

### 6.1 Manufacturing — Auto-Constructing Part-Process-Defect Relationships

Siemens uses manufacturing KGs for gas turbines, building automation, and factory monitoring. Auto-constructed ontologies can rapidly map part-process-defect relationships, but all five quality problems apply.

Consider a KG auto-extracted from 100,000 defect reports: if the chain "Bearing Wear -> Overheating -> Turbine Shutdown" contains 150 false causal links at a 1.5% hallucination rate, the predictive maintenance system may waste resources on nonexistent risks or miss real ones. Key diagnostic points: Entity Duplication (multilingual part names), Incomplete Extraction (implicit causal relationships), Domain Mismatch (specialized manufacturing terminology).

### 6.2 Financial Regulation — Mapping Cross-References in EU AI Act and MiCA

JPMorgan's COiN system reduced contract analysis time by 40%, and 230,000 employees now use its LLM Suite. Financial regulations feature complex webs of cross-references, exceptions, and hierarchical relationships — making graph structures a natural fit.

When auto-mapping cross-references between the EU AI Act and MiCA (crypto-asset regulation), if the LLM misclassifies an "equivalence provision" as a "replacement provision," the resulting compliance judgment could be fatally wrong. Key diagnostic points: Hallucinated Edges (false cross-references between articles), Schema Drift (schema changes following regulatory amendments), Freshness (real-time reflection of regulatory changes).

### 6.3 ISO 5259 — Building a Data Quality Standards Ontology

ISO 5259 (Data Quality for AI) systematically defines quality management criteria. Structuring these criteria as a KG enables automated quality diagnostics and exploration of inter-criteria relationships.

Auto-extracting ISO 5259's six quality dimensions and their sub-criteria into a KG, then mapping them to an enterprise's data pipelines — if the quality criteria KG itself has quality issues, the diagnostics it produces cannot be trusted. This is a meta-irony: a quality problem in the quality diagnostic tool itself. Key diagnostic points: Schema Completeness (missing ISO criteria), Logical Consistency (conflicts between criteria), Accuracy (correctness of criteria interpretation).

### 6.4 Code Knowledge Graphs — GitNexus Integration

Structuring a codebase as a KG enables graph-based exploration of function call relationships, dependency chains, and API contracts. Integrating with [GitNexus](/blog/gitnexus-code-knowledge-graph-2026/en/) to include commit history, PR reviews, and issue trackers creates a knowledge foundation for software development.

In large microservice architectures, auto-extracting inter-service API call relationships carries the risk of including deprecated endpoints (dead code) as active or missing asynchronous message queue relationships. Key diagnostic points: Freshness (synchronization between code changes and graph), Incomplete Extraction (implicit dependencies), Entity Duplication (multiple names for the same service).

> [!callout]
> A common pattern emerges across all four scenarios: auto-constructed ontologies have achieved **"speed" but left "accuracy" unverified**. In domains where errors carry high costs — financial regulation, manufacturing — unvalidated auto-construction can be riskier than manual construction.

## The Pebblous Perspective — AADS + DataClinic's GraphRAG Strategy

Synthesizing the preceding analysis reveals a structural gap in the GraphRAG ecosystem. Graph DB vendors focus on storage and retrieval. GraphRAG frameworks focus on construction and search optimization. The layer that asks "Is the auto-constructed ontology correct?" is missing. Pebblous is positioned to fill this gap.

### 7.1 From DataClinic to Graph Quality Clinic

DataClinic diagnoses structured data across six dimensions: Completeness, Consistency, Validity, Timeliness, Uniqueness, and Accuracy. As confirmed in Section 5, these dimensions map 1:1 to graph data. The extension path has four directions.

- 1.**Completeness Audit** — Measure Schema/Property/Population Completeness of auto-extracted graphs
- 2.**Consistency Audit** — Detect Entity Duplication, check Logical Consistency, monitor Schema Drift
- 3.**Accuracy Audit** — Detect Hallucinated Edges (applying GraphEval's +20% F1 technique)
- 4.**Freshness Audit** — Measure graph update latency relative to source document changes

As the KG market grows from $1.07B to $6.94B (CAGR 36.6%), the graph quality diagnostics market will expand proportionally. Today, graph DB vendors like Neo4j and TigerGraph focus on storage and retrieval; quality diagnostics remains an open space.

### 7.2 AADS: Agent Reasoning Reliability = KG Quality

In the [AADS (Agentic AI Data Scientist)](/project/NeuroSymbolicAI/neuro-symbolic-ai-architecture/en/) project, AI agents use knowledge graphs as the foundation for reasoning. When an agent judges that "Dataset A has a higher quality score than Dataset B," a hallucinated edge in the underlying KG invalidates that judgment entirely.

The Agentic AI + Semantic Web market is projected to grow from $1.73B (2025) to $4.93B (CAGR 23.3%). In this market, agent reliability is a competitive differentiator, and KG quality is the foundation of that reliability. Self-healing ontologies (explored by Netflix and in industrial control) and temporal KGs like Graphiti are leading experiments in this direction.

### 7.3 Positioning: The Quality Assurance Layer for Knowledge Graph Infrastructure

Pebblous's strategic positioning, in one sentence: **If the graph DB is the storage layer and GraphRAG is the search engine, DataClinic is the quality assurance layer on top.**

Three arguments defend this positioning.

- 1.**Graph DB vendors (Neo4j, etc.)** — Focus on storage, retrieval, and transactions; quality diagnostics is non-core
- 2.**GraphRAG frameworks (Microsoft, LightRAG, etc.)** — Focus on construction and search optimization; quality is the user's responsibility
- 3.**DataClinic** — Already possesses structured data quality diagnosis capabilities; extending to graph data provides a competitive edge

Even as next-generation frameworks like StepChain (79.50% F1) and ArchRAG (250x token reduction) emerge, the need for quality verification of auto-constructed graphs is framework-independent. As frameworks improve, the expected standard for quality diagnostics rises alongside them.

> [!callout]
> GraphRAG's promise is powerful, but that promise can only be fulfilled when the quality of auto-constructed ontologies is assured. **"More graphs" is not the next competitive edge — "more accurate graphs" is.** Pebblous's existing strength in data quality diagnostics provides a natural path of expansion into this emerging market.

## References

### Academic Papers

- 1.Edge, D. et al. (2024). "From Local to Global: A Graph RAG Approach to Query-Focused Summarization." Microsoft Research. arXiv:2404.16130
- 2.Guo, Z. et al. (2024). "[LightRAG: Simple and Fast Retrieval-Augmented Generation](https://arxiv.org/abs/2410.05779)." HKUST/ByteDance. ACL 2025.
- 3.[ArchRAG](https://arxiv.org/abs/2502.09891) (2025). 250x token reduction over GraphRAG, competitive+ multi-hop performance. AAAI 2026.
- 4.[StepChain GraphRAG](https://arxiv.org/abs/2510.02827) (2025). 79.50% F1 multi-hop reasoning pipeline.
- 5.[DIAL-KG](https://arxiv.org/abs/2603.20059). Schema-free incremental KG construction, F1 +4.7%, streaming support.
- 6.[IncRML](https://www.semantic-web-journal.net/content/incrml-incremental-knowledge-graph-construction-heterogeneous-data-sources). Incremental KG updates, 315.83x storage savings, 4.59x CPU savings.
- 7.[GraphEval](https://www.amazon.science/publications/grapheval-a-knowledge-graph-based-llm-hallucination-evaluation-framework). KG-based hallucination detection, +16% accuracy and +20% F1 over SelfCheckGPT.
- 8.[AutoSchemaKG](https://arxiv.org/abs/2505.23628) (2025). Autonomous knowledge graph construction framework.
- 9.[Graphiti](https://github.com/getzep/graphiti). Temporal knowledge graph for real-time AI agents.
- 10.[KLUE BERT](https://klue-benchmark.com/). Korean NER F1 91.42%.

### Industry Sources

- 11.Microsoft GraphRAG GitHub Repository. 31,600+ Stars (as of 2026).
- 12.Neo4j GraphRAG Builder & LLMGraphTransformer.
- 13.LlamaIndex PropertyGraphIndex.
- 14.Airbus 7-Ontology Digital Twin (aircraft maintenance).
- 15.Siemens Manufacturing KG (gas turbines, building automation, factory monitoring).
- 16.JPMorgan COiN (40% contract analysis time reduction, 230K LLM Suite users).
- 17.KAIST/ETRI KG-GPT joint research framework.

### Market Data

- 18.Knowledge Graph Market: $1.07B (2024) → $6.94B (2030), CAGR 36.6%.
- 19.Agentic AI + Semantic Web Market: $1.73B (2025) → $4.93B, CAGR 23.3%.

<!-- stat-card -->
**📚 Neuro-Symbolic × Ontology Series** — This article is part of a series curated in the [Neuro-Symbolic × Ontology hub](/project/NeuroSymbolicOntology/en/) — 13 pieces threading System 1/2 integration, ontology as a formal foundation, and the diverse approaches from Palantir and the Semantic Web to Pebblous CURK.
