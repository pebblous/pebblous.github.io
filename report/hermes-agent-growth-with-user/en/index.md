---
title: When Agents Grow With You
subtitle: Hermes Agent and the Rise of the Autonomous Data OS
date: 2026-05-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Agents Grow With You

_Hermes Agent and the Rise of the Autonomous Data OS_

## Executive Summary

> [!callout]
> hermes-agent crossed 61,000 GitHub stars in seven weeks, and returned to GitHub trending at **+2,065 stars/day** on May 13, 2026. The essence of this explosive growth is not technical superiority alone — it is the promise of **"an agent that grows with you."** A four-stage self-learning loop (Task Execution → Outcome Evaluation → Skill Abstraction → Skill Refinement), Honcho-based dialectical user profiling, and persistent cross-session memory together transcend LangChain's statelessness, CrewAI's limited memory, and AutoGPT's self-prompting in a single paradigm shift.

> This signals that the agentic AI market's growth from $4.35B (2025) to $139.19B (2034) is not merely a tool market — it is the rise of the **Autonomous Data OS**. An agent that gets better with use is, by extension, a data pipeline that gets more refined with use. This sits on the exact same trajectory as Pebblous's Data Greenhouse vision.

> Of course, self-evolution has shadows — we faced them head-on in the [companion piece: hermes-agent's Self-Learning Loop and How Data Quality Degrades](../../hermes-agent-data-quality-risk/en/). The two articles are two sides of the same phenomenon. This piece focuses on **how agents grow**, and how that growth meets the autonomous data future Pebblous is building.

## From Tool to Companion

In April 2026, hermes-agent reached the top of GitHub trending. On May 13, one month later, it returned to #1 with **+2,065 stars/day**. With cumulative stars now past 145,000, this project signals something beyond popularity. The developer community as a whole has cast its vote for a new agent paradigm: **"not a tool, but a companion."**

Conventional LLM-based agents follow a stateless "ask and answer" model. Every session begins blank, and users must re-explain themselves repeatedly. This treats AI as a **tool**. A hammer is always the same hammer; it doesn't remember what it nailed yesterday.

hermes-agent promises something different. "Grows with you" is not a marketing tagline — it's an architectural declaration. Every user interaction accumulates in the agent's skill library, user preferences and reasoning patterns are dialectically profiled, and learning persists across sessions. **An agent where what you taught it today is still alive tomorrow** has appeared in open source for the first time.

> [!callout]
> **Key insight**: The significance of the May trending return is that "growing agents" is not a fleeting April trend but a **sustainable paradigm shift**. In one month, 393 contributors joined and 393+ pull requests were merged.

## Inside the 4-Stage Learning Loop

The heart of hermes-agent is the **Closed Learning Loop**. This is not a simple reinforcement learning loop. Every task execution automatically triggers four stages.

<!-- stat-card -->
**① Task Execution** — Parses user intent, calls appropriate skills, or synthesizes new ones. Execution context is preserved in memory.

<!-- stat-card -->
**② Outcome Evaluation** — Self-evaluates success or failure. User feedback, error logs, and tool call patterns become inputs.

<!-- stat-card -->
**③ Skill Abstraction** — Generalizes recurring patterns into reusable skills. One-off code becomes reusable methods.

<!-- stat-card -->
**④ Skill Refinement** — Updates existing skills with new experience. The evolution mechanism that handles the same job faster and more accurately.

These four stages run **per task**, not at session end. The agent learns while it works. The absence of a separate learning phase is the decisive difference from LangChain's LCEL-based static chains.

What matters is that this loop enables **progressive mastery of tools**. A tool clumsily used on day one is wielded with near-expert pattern by the 100th call. This is true learning that cannot be mimicked by simple caching or retrieval-augmented generation.

## Three-Tier Memory Architecture

The way hermes-agent actually delivers on "grows with you" is its **three-tier memory system**. Each tier operates on a different time scale, a different data format, and a different learning objective.

### 3.1. Skill Library — Procedural Memory

Every skill the agent has learned is stored in a searchable library. Python functions, API call sequences, and tool composition patterns are saved with metadata (tags, descriptions, usage frequency, success rate). This corresponds to human **"know-how"** — procedural knowledge.

### 3.2. Honcho — Dialectical User Profiling

Honcho is the dialectical user modeling system that hermes-agent adopted. Rather than simply logging "the user said X," it extracts the user's **assumptions, preferences, reasoning patterns, and value systems** from conversation to build an evolving user profile. When users show contradictory preferences, the system absorbs the contradiction itself as deeper context.

### 3.3. Session Persistence — Persistent Memory

Conversation context, in-progress project state, and incomplete tasks persist across sessions. When users continue today the code they were writing yesterday, the agent knows "where we left off." This extends OpenAI Assistants API's thread concept, combined with metadata indexing and semantic search.

> [!callout]
> **Key differentiator**: These three memories are not separate but combined into a **cross-referencing graph**. User profile influences skill selection, and skill usage patterns refine the user profile. This is bidirectional learning, not unidirectional.

## Why It Surpassed LangChain and CrewAI

Existing agent frameworks each had their limits. hermes-agent's emergence is the first attempt to resolve them all at once.

| Framework | Memory Model | Learning Mechanism | Limitation |
| --- | --- | --- | --- |
| LangChain | Stateless chains | None | Every call is independent, no learning |
| CrewAI | Limited short-term | Roleplay consensus | No long-term memory, no skill evolution |
| AutoGPT | Self-prompting | Self-critique | Divergent, no convergence guarantee |
| hermes-agent | Triple persistent | 4-stage loop | Shadow of self-evolution (companion piece) |

********

What sets hermes-agent decisively apart is the design philosophy that **"learning is a byproduct of use."** LangChain requires separate fine-tuning pipelines for learning. CrewAI requires explicit memory management. AutoGPT's self-prompting costs are uncontrolled. hermes-agent resolves all three at the architectural level.

## Meeting the Autonomous Data OS

This is where Pebblous's attention concentrates. What hermes-agent showed is the fact that **"when agents self-evolve, the data pipelines they process also self-evolve."** And this is precisely the same trajectory as the Autonomous Data OS vision that Pebblous's Data Greenhouse has been pursuing.

<!-- stat-card -->
**Hermes Agent's Self-Evolution** — User intent → skill synthesis → evaluation → skill library update. Over time, more refined tool invocation.

<!-- stat-card -->
**Data Greenhouse's Autonomous Operation** — Data diagnosis → quality enhancement → learning → pipeline update. Over time, more refined data operations.

Both systems share the same meta-architecture: **"learn while executing, and what is learned improves the next execution."** The difference is the learning target. Hermes learns skills; Data Greenhouse learns data pipelines. And when the two combine, a true Autonomous Data OS becomes possible.

The forecast that the agentic AI market will grow 32x from $4.35B (2025) to $139.19B (2034) is not a simple expansion of a tool market. **It signals a transition from tools to self-evolving systems.** And the data processed by those systems must share the same property — data that self-diagnoses, self-enhances, and self-updates.

## The Shadow Side, Balanced in One Frame

"Growth" is in itself half-truth. Every growth has its cost, and self-evolution carries the risk of uncontrolled divergence. We address hermes-agent's shadow side — the structural risks self-learning loops pose to data quality — head-on in this article's companion piece.

> [!callout]
> **📖 Read the companion piece**: [hermes-agent's Self-Learning Loop: How Data Quality Degrades](../../hermes-agent-data-quality-risk/en/)

> The risk piece covers three structural risks: Feedback Loop Contamination, Distribution Shift, and Error Fossilization. The Nature paper's empirical demonstration of model collapse (occurring with as little as 1/1000 synthetic data), the documentation obligations under EU AI Act's full enforcement in August 2026, and the fact that external verifier insertion is the only academically proven solution.

The two articles are not critique versus advocacy — they are **two sides of the same phenomenon**. Pebblous acknowledges the possibility of self-evolving agents (this piece) while squarely facing the risks when that evolution goes uncontrolled (companion piece). This dimensional view leads to **architectural insight** rather than simple tool comparison.

The real value of "growing agents" is realized only when they remain controllable. And that control must come from outside — not from the agent itself, but from an **independent verification system** that continuously diagnoses data quality.

## One Month Later: How NousResearch Responded

Since the companion piece's publication on April 12, 2026, NousResearch has shipped five official releases — v0.9.0 (4/13), v0.10.0 (4/16), v0.11.0 (4/23), **v0.12.0 (4/30)**, and **v0.13.0 (5/7)**. Over 4,000 commits and 2,000 PRs were merged across this period. Within this rapid development cadence, we examine — fact by fact — how the **three structural risks** the companion piece raised have actually been addressed.

### 7.1. Autonomous Curator (v0.12.0, April 30) — Direct Response to Error Fossilization

The flagship feature of v0.12.0 is the **Autonomous Curator**. `hermes curator` runs as a background agent on the gateway's cron ticker (7-day cycle default), automatically **grading, consolidating, and pruning** the skill library. Based on usage frequency and success rates, dead skills are archived, related skills are merged via model + heuristic classification, and every run leaves an audit trail at `logs/curator/run.json` and `REPORT.md`.

This is the first official mechanism that directly targets the **Error Fossilization** risk raised in the companion piece. The release notes also explicitly state that the self-improvement loop — the background review fork that decides what to save after each turn — was "substantially upgraded" in this release.

### 7.2. Hallucination Gate & Kanban (v0.13.0, May 7) — Outcome Evaluation Hardening

The v0.13.0 "Tenacity Release" introduces a multi-agent Kanban board with **heartbeat, reclaim, zombie detection, per-task retries, hallucination recovery, and a hallucination gate**. This reads as a partial response to the self-evaluation failure the companion piece raised — "the agent always thinks it did a good job." External verifiers are still absent, but internal gates and retry budgets now act as safety nets against unbounded divergence.

### 7.3. Security & Governance (v0.13.0) — 8 P0 Issues Closed

The same release closes 8 P0 security issues: redaction is now ON by default, Discord role allowlists are guild-scoped, WhatsApp rejects strangers by default, and TOCTOU windows close across auth.json and MCP OAuth. With EU AI Act's August 2026 enforcement looming, governance hardening is visibly accelerating.

### 7.4. Fact-Based Scorecard — What Was Addressed and What Remains

| Risk Raised in Companion (2026-04-12) | Response One Month Later | Assessment |
| --- | --- | --- |
| Error Fossilization | v0.12.0 Autonomous Curator — auto prune/consolidate on 7-day cycle | Partially addressed (internal automation) |
| Feedback Loop Contamination | v0.12.0 self-improvement review fork "substantially upgraded", v0.13.0 hallucination gate | Partially mitigated (internal gates) |
| Distribution Shift | No direct mention in release notes | Unaddressed |
| Absence of External Verifier | All new mechanisms remain internal self-evaluation | Unaddressed — Pebblous solution stays valid |
| Regulatory & Governance Readiness | v0.13.0 closes 8 P0 security issues, redaction ON by default | In progress |

> [!callout]
> **Fair assessment**: NousResearch did not ignore the issues the companion piece raised. The Autonomous Curator is a serious response, and the hallucination gate moves in the right direction. What has not changed, however, is that **every new mechanism still operates inside the agent**. It evaluates itself and curates its own skills. This is precisely why the companion piece's core point — "external verification is the only academically proven solution" — remains valid.

## What May 2026 Trending Really Means

On May 13, 2026, hermes-agent returned to #1 on GitHub trending at **+2,065 stars/day**. Given that a month has passed since the April peak, this is not simple "new project hype."

### Three Meanings of the May Return

- •**① Concept Durability Validation**: "Agents that grow with you" is not a passing April trend but evidence of sustained developer demand. Maintaining traffic after a month of use means it actually works.
- •**② Enterprise Adoption Signal**: A significant portion of May's star surge is presumed to come from April adopter teams recommending it to colleagues. In other words, 1:N propagation has begun.
- •**③ Market Consensus Formation**: NousResearch reaching $1B valuation in Series A reflects a market consensus, not mere hype, that **"the era of stateless agents is over."**

At the same time, a new signal has emerged in May. In the GitHub issue tracker, **"memory costs"** and **"learning data audit"** have risen as the most discussed topics. Users have moved past the magic of self-evolution and have begun asking about **operational control and governance**. This is exactly the question Pebblous DataClinic must answer.

## Pebblous's Response: Evolving Data Meets Evolving Agents

In the age of self-evolving agents, Pebblous's answer is simple: **"Don't just evolve the agent. Evolve the data with it."**

Current hermes-agent adoption rests on one assumption — that the quality of data used for learning remains stable over time. But self-evolving agents reuse data they themselves generate for learning. As covered in the companion piece, this can lead to model collapse and error fossilization. **The solution is not to stop learning, but to continuously diagnose and enhance the data being learned.**

<!-- stat-card -->
**DataClinic's Role** — Diagnose agent-generated data externally. Detect distribution shift, contamination, and fossilization patterns early and signal the learning loop.

<!-- stat-card -->
**Data Greenhouse's Role** — Automatically refine, synthesize, and enhance diagnosed data. The agent's self-evolution and the data's self-evolution operate in the same rhythm.

<!-- stat-card -->
**PebbloSim's Role** — Physics simulation-based synthetic data compensates for distribution shift. Supplies the "coherent diversity" that GenAI cannot produce.

Pebblous's approach is not to stop hermes-agent's self-evolution. **The goal is to make that evolution safe and sustainable.** Insert external verifiers (DataClinic) into the Closed Learning Loop, connect external data suppliers (Data Greenhouse + PebbloSim), and the self-evolving agent becomes not short-term magic but a long-term asset.

> [!callout]
> **Summary**: hermes-agent showed the future of agents. Pebblous is responsible for the future of the data those agents process. The two futures cannot be separated.

> Deeper risk analysis and EU AI Act readiness strategies are covered in the [companion piece](../../hermes-agent-data-quality-risk/en/).
