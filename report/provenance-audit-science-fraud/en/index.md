---
title: The One Line of Metadata That Turns an AI Research Agent Into a Science-Fraud Vector
subtitle: Indirect data poisoning and the provenance audit — data integrity at retrieval time is what protects science
date: 2026-08-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The One Line of Metadata That Turns an AI Research Agent Into a Science-Fraud Vector

_Indirect data poisoning and the provenance audit — data integrity at retrieval time is what protects science_

## Executive Summary

> [!callout]
> While AI-safety discourse fixates on prompt injection and hallucination, the real channel for industrial-scale scientific fraud sits somewhere much quieter. An attacker doesn't tamper with the prompt or slip in a fake paper. A single mismatched line of metadata on a public repository is enough. The frontier research agent that retrieves and cites that data in real time then manufactures and circulates the fabricated scientific conclusion on its own.

> One research team measured this channel under controlled conditions. The share of fabricated conclusions that made it into circulation was close to half, and the cases where the agent noticed the contamination on its own were vanishingly few. The interesting reversal was on the defense side. Telling the agent to "behave like a scientist" cut the attack only in half, but cross-checking the provenance of the data the agent fetches against five items made the attack disappear entirely.

> This report dissects that gap through the lens of data quality. We ask a single question. Beyond what an AI learned, are we verifying the provenance of what it is fetching right now, in real time? Provenance is not a compliance checkbox — it is a vaccine for science.

<!-- stat-card -->
**49.56%** — Attack success rate — Share of fabricated conclusions circulated as the agent's final output

<!-- stat-card -->
**6.0%** — Self-detection rate — Share of cases where the agent caught the contamination itself

<!-- stat-card -->
**16.67% → 0%** — The defense gap — Residual attack rate of prompt defense vs. full protection from the five-item audit

<!-- stat-card -->
**450 trials** — Controlled experiment — 3 frontier systems × 5 socially sensitive domains

## The Bait Was Not the Prompt

When we talk about data poisoning, we usually picture an attacker planting malicious content directly. Every attack known so far has in fact looked that way. In October 2025, Anthropic, the UK AI Security Institute (UK AISI), and the Alan Turing Institute showed that just 250 malicious documents can implant a backdoor regardless of model size. PoisonedRAG, aimed at RAG systems, slipped five malicious texts per question into the corpus and hit a 90% attack success rate. They share one thing: the attacker has to plant bad **content** somewhere.

Indirect data poisoning breaks that premise. No attack text is needed at all. On otherwise legitimate public data, you only have to leave a single metadata field — a label, a unit, an attribution line — mismatched. A research agent that retrieves that data in real time then judges the fabricated conclusion "reasonable" and generates it on its own. No malicious instruction, no malicious sentence sits in front of the agent. There is only one number in the wrong cell.

Three distinctions sharpen the picture. Prompt injection manipulates the **instructions** given to the agent. Direct data poisoning manipulates the **content** that gets trained on or retrieved. Indirect data poisoning touches neither and manipulates only the **metadata** attached to the data. As the attack surface moves from instruction to content to metadata, the resources an attack requires shrink, and the traces a human might notice fade.

The diagram below shows where a single mismatched line of metadata gets swallowed in the pipeline. Contaminated metadata uploaded to a public repository flows into the agent's retrieval stage, and the agent, treating it as evidence, loads a fabricated conclusion into its output and circulates it.

Why does such a tiny manipulation work? The answer is that the data is already dirty. When the MIT Data Provenance Initiative audited more than 1,800 datasets, it found that 66% of HuggingFace license tags were already misclassified. On major hosting sites the license-omission rate topped 70% and the error rate ran above 50%. In other words, the attacker isn't scratching clean data. They are laying a single altered line on top of noise that is already more than half wrong. That's why it goes unnoticed, and that's why the attack is easy.

## Four Hundred Fifty Trials: How Three Agents Became the Vector

The hypothesis is frighteningly simple. So the team reproduced it directly under controlled conditions. They tested three frontier research agents — Claude Code (Claude Opus 4.7), Codex (GPT-5.5), and Gemini CLI (Gemini 3.1 Pro) — across five socially sensitive domains. Those 450 controlled trials returned two numbers, and everything that follows splits along them.

The share of fabricated conclusions adopted and circulated as the agent's final output was 49.56%. Half. Meanwhile, the agent recognized on its own that its input was contaminated in only 6.0% of cases. That means a normally functioning model, given normal instructions, trusted contaminated data and pushed a fabricated conclusion out into the world half the time — while, in most cases, never noticing it had done so.

| Metric | Value | Meaning |
| --- | --- | --- |
| Attack success rate | 49.56% | Fabricated conclusion circulated as final output |
| Self-detection rate | 6.0% | Agent recognized the contamination itself |
| Experiment scale | 450 trials | 3 frontier systems × 5 domains |
| Systems tested | 3 | Claude Opus 4.7 · GPT-5.5 · Gemini 3.1 Pro |

What makes this result especially uncomfortable is that the resources an attack requires keep shrinking over time. Early data-poisoning research assumed large volumes of malicious documents. Then Anthropic's experiment pulled that number down to 250 documents, and PoisonedRAG lowered it to five texts per question. And this study dropped all the way to a single line of metadata, with no need to plant content at all. The perimeter defenders must hold keeps widening, while the threshold attackers must clear keeps falling.

<!-- stat-card -->
**Direct poisoning · pretraining** — 250 documents — Anthropic · UK AISI · Alan Turing (2025) — backdoor independent of model size

<!-- stat-card -->
**Direct poisoning · RAG** — 5 texts — PoisonedRAG (USENIX Security 2025) — 90% success with 5 per question

<!-- stat-card -->
**Indirect poisoning · retrieval-time** — 1 metadata line — This study — 49.56% from mismatched metadata alone, no content

The falling cost of an attack: bulk documents → 250 documents → 5 texts → one metadata line

The point is not that "the model spouts nonsense." The model worked faithfully, exactly as instructed. The problem is that when that diligence is pointed at contaminated input, it becomes the vector for a fabricated conclusion. This is not a problem of model capability — it is a problem of data quality.

## The Decisive Reversal: Attitude Coaching vs. Provenance Verification

If half of them break through, how should you defend? The first card that comes to mind is the prompt — telling the agent, "You are a careful scientist; if the evidence is uncertain, withhold your conclusion." The team actually applied this scientist-persona mitigation. Attack success fell from 49.56% to 16.67%. A clear improvement. Yet one in six fabricated conclusions still got through. Half a defense.

The second card was on the data side. Not the agent's attitude, but verifying the provenance of the data the agent fetches. When they added a provenance audit that cross-checks five items at retrieval time — citation support, social markers, statistical outliers, related datasets, and poisoning signals — attack success dropped to 0%. Full protection.

The bars below place the three beats side by side: no defense 49.56%, prompt mitigation 16.67%, provenance audit 0%. That jump — from no defense to full protection — is where the real lesson of this work lives.

Attack success rate by mitigation (lower is stronger defense) · Source: arXiv 2607.10712

Why is attitude coaching only half a defense while source verification is complete? Prompt mitigation tries to change the **attitude** the agent takes when reaching a conclusion. But contamination is a problem of input, not attitude. However careful the posture, if the provenance of the underlying data is unverified, the agent faithfully trusts the wrong number. The provenance audit, by contrast, verifies the root of the problem — the data's provenance itself — at retrieval time. Filter out bad evidence up front, and a fabricated conclusion has nowhere to stand, whatever the attitude.

> [!callout]
> Changing the agent's attitude and verifying the provenance of the data it fetches offer fundamentally different levels of protection. Full protection lived not in the prompt layer, but in the data layer.

## The Prescription: A Five-Item Vaccine

The provenance audit that pushed the attack back to 0% is not a grand system. It is closer to a checklist that puts five questions to the data at retrieval time. Just before the agent cites any piece of data, it cross-checks that data's provenance along five axes. If even one signal fires, that source is excluded from the evidence.

<!-- stat-card -->
**Citation support** — Check that the papers or sources the data actually cites exist and match its claims.

<!-- stat-card -->
**Social markers** — Inspect social trust signals such as a repository's activity, reputation, and maintenance traces.

<!-- stat-card -->
**Statistical outliers** — Detect anomaly signals where the value distribution departs from domain common sense or adjacent data.

<!-- stat-card -->
**Related-dataset cross-check** — Cross-verify against independent datasets on the same topic to avoid single-source dependence.

<!-- stat-card -->
**Poisoning warning signals** — Explicitly check for signals that suggest poisoning, such as mismatches between metadata and content or traces of tampering.

Note: the five items above summarize the paper's high-level description and may differ from the exact wording in its §mitigations.

The real value of these five items is that "you don't have to build anything new." Citation support, related datasets, and statistical distributions are already fields that existing data-lineage standards cover. Free open-source lineage standards like OpenLineage and dataset-metadata standards like MLCommons' Croissant already exist. The provenance audit is closer to a **retrieval-time cross-check layer** laid on top of them. It isn't standing up new infrastructure — it's checking already-available lineage information one more time at the gate of the retrieval pipeline.

### Low cost, yet 82% of the market is a blank

The general benchmark for lightweight data-lineage documentation runs about 2–4 hours per AI system up front. For a full defense, that's a low barrier to entry. And yet only 18% of companies actually use a dedicated data-lineage tool (TDWI 2026). The other 82% have no lineage tooling at all. A low-cost, complete defense exists, and most of the market lacks even the minimal infrastructure to run it against. This is exactly the blank the five-item audit can move into.

> [!callout]
> Metadata standards like Croissant standardize dataset discoverability and licensing, but they don't address real-time forgery or tampering detection. The five-item provenance audit is a lightweight checklist that fills that gap, and it can be transplanted straight into RAG and research-agent pipelines.

## From What It Learned to What It Fetches Right Now

For a long time, the data-quality conversation stayed on training data: contaminate the training corpus and you distort the representations inside the model. This study pushes that boundary out to runtime. Even a perfectly trained model loses its integrity the moment it retrieves and cites contaminated public data in real time. That is why the question of verification has to move from "what did this model learn" to "what is this agent fetching right now."

And the scale of that "what it's fetching right now" runs far past what any human could verify. Put numbers on the "public repository" in the first box of the Section 1 pipeline diagram — the HuggingFace and GitHub that the agent rummages through in real time — and the gap becomes obvious at a glance.

<!-- stat-card -->
**500K+** — HuggingFace public datasets — Over 1.5M total registered

<!-- stat-card -->
**395M** — GitHub public repositories — A retrieval surface mixing code and data

<!-- stat-card -->
**58%** — Research / summarization use cases — The #1 agent use case (LangChain survey)

The most heavily used agent task happens to be research and summarization. In other words, the surface this threat targets overlaps exactly with the center of actual use. Verifying the metadata of individual repositories by hand is structurally impossible. This is where the need for automated provenance diagnosis shows up in quantitative terms.

### What flows through undetected

This structure resonates with an old problem of scientific integrity. Paper retractions hit an all-time high of roughly 14,000 in 2023, and cumulative retractions have passed 66,000. Yet while paper mills are **estimated** to have circulated about 400,000 papers between 2000 and 2022, only about 55,000 have actually been retracted. That means most of them are flowing through the literature undetected. The shape of this gap looks strikingly like the 6% detection rate the paper measured.

The gap between estimated circulation and actual retractions structurally resonates with the agent's 6% self-detection rate. The 400,000 figure is Nature's stated "estimate."

To avoid a misunderstanding, let me be clear about one thing. Science's reproducibility crisis — the problem in the 2016 Nature survey where more than 70% of researchers said they had failed to reproduce someone else's experiment — has no direct causal link to this paper's indirect poisoning. The reproducibility crisis is only backdrop, showing how fragile a foundation the data already stands on; it should not be tied to this experiment's results as either cause or effect. But if, on that fragile foundation, automated literature-review and meta-analysis agents swallow contaminated evidence half the time, the direction of the fallout is clear.

## The Pebblous View

Most outlets will consume this paper as "a new AI vulnerability" story. Our reason for paying attention is a little different. This result is a quantitative experiment that proves what anyone who has worked on data quality has long argued: data whose source and lineage are unverified is a risk in and of itself. Without source verification, a frontier agent circulates scientific fraud with a 49.56% probability; add the five-item audit and it's 0%. It would be hard to show more sharply that data quality is not an incidental variable of model capability but the primary variable of integrity.

### The verification boundary shifts to runtime

Until now, data-quality verification has concentrated at training time. This study extends that boundary to retrieval time — to runtime — because even a perfectly trained model collapses once it fetches contaminated data in real time. The same logic carries over directly to the Physical AI context, where sensor and environmental data are collected in real time. What a model learned and what it is fetching right now are separate axes of verification, and the latter has, until now, been largely empty.

### A question you can act on today

For organizations running RAG and research agents, the question this report leaves is not abstract: "Are we auditing the provenance of our retrieval sources?" The paper's five-item audit is a deployable checklist, its cost runs about 2–4 hours per system, and it can be transplanted as a layer on top of existing lineage standards. With 82% of the market lacking even a lineage tool, now is the time to turn this question into an operational procedure.

> [!callout]
> **Editor's Note.** This is exactly the point Pebblous diagnoses with DataClinic — not just the consistency of training data, but cross-checking, at retrieval time, the source, lineage, and outliers of the data an agent cites in real time. This paper shows experimentally why that diagnosis is not optional but essential infrastructure. Provenance is not a compliance checkbox; it is a vaccine that protects both science and AI systems.

## References

### Academic (primary · comparison baselines)

- 1.Gyevnár, B., Kasirzadeh, A., & Shah, N. B. (2026). "Distributed Denial of Science: How Indirect Data Poisoning of AI Systems Can Industrialize Scientific Fraud." arXiv:2607.10712. [arxiv.org/abs/2607.10712](https://arxiv.org/abs/2607.10712) — primary source for this piece
- 2.Longpre, S., et al. (2023). "The Data Provenance Initiative: A Large-Scale Audit of Dataset Licensing & Attribution in AI." [arXiv:2310.16787](https://arxiv.org/abs/2310.16787) / Nature Machine Intelligence. — 66% of HuggingFace licenses misclassified
- 3.Anthropic, UK AI Security Institute, & Alan Turing Institute. (2025). "A small number of samples can poison LLMs of any size." — 250-document backdoor
- 4.Zou, W., et al. (2025). "PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation of Large Language Models." [arXiv:2402.07867](https://arxiv.org/abs/2402.07867) / USENIX Security 2025. — 90% ASR from RAG corpus poisoning

### Policy · statistics · standards

- 5.Retraction Watch Database. — Over 66,000 cumulative retractions; roughly 14,000 in 2023 (an all-time high).
- 6.Nature. (2016). "Is there a reproducibility crisis?" (survey of 1,576 researchers) and paper-mill investigative reporting (2026). — ~400,000 papers estimated circulated by paper mills.
- 7.Hugging Face official statistics / GitHub Octoverse 2025. — Scale of public datasets and repositories.
- 8.MLCommons. "Croissant: A Metadata Format for ML-Ready Datasets" / OpenLineage (Linux Foundation). — Dataset-metadata and lineage standards.
- 9.TDWI. (2026). Survey on data-lineage tool adoption. — 18% of companies use a dedicated lineage tool.

This piece draws on the measured figures in arXiv 2607.10712 as its primary evidence; where secondary statistics disagree (RAG adoption rates, share of AI-generated papers, etc.), it favors sources with transparent methodology and labels estimates as "estimates."
