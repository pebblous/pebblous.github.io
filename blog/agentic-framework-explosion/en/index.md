---
title: Every AI Company Is Making a Different Bet
subtitle: Reinforcement Learning · Self-Improvement · Autonomous Coding — Three Diverging Paths in Autonomous AI
date: 2026-04-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Every AI Company Is Making a Different Bet

_Reinforcement Learning · Self-Improvement · Autonomous Coding — Three Diverging Paths in Autonomous AI_

## Executive Summary

> [!callout]
> In the second half of 2025, three repositories appeared on GitHub in rapid succession: Microsoft's **agent-lightning** (RL-based agent training, June 2025), NousResearch's **hermes-agent** (self-improving agent, July 2025), and obra's **superpowers** (autonomous coding methodology, October 2025). Combined stars: 16.4K · 21.0K · 129.4K. It's rare for the open-source community to converge on a single theme at this pace.

> Each framework answers a different question. How do you train an agent to perform better (RL)? How do you make an agent improve itself over time (self-improvement)? How do you make an agent produce code you can actually trust (TDD)? Different methods, same destination: AI that operates longer and more accurately without human intervention.

> And there's one thing that's easy to overlook: the more autonomous agents become, the more the quality of the data they operate on determines the outcome. A flawed reward signal sends an RL agent in the wrong direction. Corrupted skills in a self-improving agent compound into increasingly bad behavior. Incomplete test data lets an autonomous coding agent ship broken code that still "passes." The real finish line of the agentic framework race is data quality.

## Why Frameworks, Why Now

Once LLMs became powerful enough, the natural next question was: "How do we get beyond single-shot inference to sustained autonomous action?" For two to three years after GPT-4, the industry explored answers — simple function calling, ReAct patterns, multi-agent collaboration, tool-chain automation. Progress was real, but incremental.

Something shifted in the second half of 2025. The conversation moved from "how does an agent act?" to "how do you make an agent act better?" Training methodology, self-improvement loops, coding agent reliability — three separate areas of research suddenly produced leading open-source frameworks at the same time. That's not a coincidence. It signals that LLMs have matured enough to serve as a reliable agent substrate, and the race is now about who sets the standard for the operational layer above them.

<!-- stat-card -->
**Three Stages of Agentic AI Evolution** — 1 — Single-Shot Inference (2022–2023) — Prompt → response. LLMs answer questions. GPT-3.5, Claude 1 era. — 2 — Tool-Calling Agents (2023–2024) — Chained search, code execution, API calls. ReAct, LangChain, Claude Tool Use era. — 3 — Autonomous Operating Agents (2025–) — Agents that learn, self-improve, and verify their own outputs. The stage these frameworks are competing on.

Each stage shifts the bottleneck. Stage 1: model capability. Stage 2: integration reliability. Stage 3: what? The answer is in the final section.

## agent-lightning — Training Agents with RL

**microsoft/agent-lightning** is a framework for training AI agents using Reinforcement Learning. Released by Microsoft in June 2025, it currently has 16,372 GitHub stars and is available under the MIT license.

### 2.1 The Core Idea: Learn from Outcomes

Traditional LLM fine-tuning requires labeled examples — "given this input, produce this output." But agent behavior often resists clean labeling. For an agent that browses the web and writes reports, how do you define a "good search" versus a "bad search"? agent-lightning addresses this with RL.

The agent interacts with an environment, takes actions, and receives reward signals based on outcomes. Behavior patterns that earn high rewards are reinforced; low-reward patterns are suppressed. Just as a chess AI learns from wins and losses, the agent learns from whether it successfully completed a task — refining its action strategy over time.

<!-- stat-card -->
**agent-lightning at a Glance** — Developer — Microsoft — GitHub Stars — 16,372 ★ — License — MIT — Released — June 2025 — Core Approach — Reinforcement learning for agent behavior optimization

### 2.2 Who Should Use It

agent-lightning is best suited for AI research teams and advanced MLOps teams. Building an RL training infrastructure and designing reward functions requires significant technical investment. But a well-trained agent can achieve very high performance within a specific domain — code review agents, data pipeline monitoring agents, and other applications where "doing it well" has a clear, measurable definition.

## hermes-agent — Agents That Evolve Themselves

**NousResearch/hermes-agent** is a self-improving agent framework. Released in July 2025, it has 21,017 stars. True to NousResearch's reputation in the open-source LLM community, the philosophy is clear: "An agent should get better the more you use it."

### 3.1 Three Core Mechanisms

hermes-agent implements self-improvement along three axes. First, **Skill Generation**: when the agent successfully completes a task, it extracts the approach as a reusable skill and stores it. The next time a similar task arrives, it tries the stored skill first. The agent accumulates know-how the way a person builds expertise through experience.

Second, **User Modeling**: the agent builds an internal model of each user's preferences, work patterns, and language as interactions accumulate. It becomes a personalized agent over time. Third, a **Multi-channel Interface** collects learning signals across Slack, email, webhooks, and other channels, maintaining a consistent user model regardless of where the interaction happens.

<!-- stat-card -->
**hermes-agent at a Glance** — Developer — NousResearch — GitHub Stars — 21,017 ★ — License — MIT — Released — July 2025 — Core Approach — Skill accumulation + user modeling for self-improvement

### 3.2 Who Should Use It

hermes-agent fits product teams building AI assistants with repeat user interaction. An agent that starts out average becomes increasingly specialized in that company's domain, that customer's patterns, and that industry's vocabulary over time. Customer support, internal helpdesks, and repetitive workflow automation are all strong candidates for long-term ROI.

## superpowers — Agents That Write Tests First

**obra/superpowers** has built by far the largest community of the three. Since its October 2025 release, it has reached 129,443 GitHub stars — among the highest of any coding-agent repository. The core idea: apply Test-Driven Development (TDD) methodology to autonomous coding agents.

### 4.1 Why TDD

The biggest recurring failure mode of coding agents is code that runs but doesn't actually work right — surface-level requirements met, but edge cases missed, security holes left open. superpowers addresses this with TDD.

The sequence: before writing any code, the agent writes tests first. It specifies what output a given input should produce, and what errors should be thrown in what situations. Then it writes code to pass those tests. Then it runs the tests and revises the code for any failures. This is the methodology human developers have refined over decades, transplanted into an autonomous AI agent.

<!-- stat-card -->
**superpowers at a Glance** — Developer — obra (open-source community) — GitHub Stars — 129,443 ★ — Released — October 2025 — Core Approach — TDD-based autonomous coding

### 4.2 Why 129K Stars

superpowers reached a scale the other two haven't because it targeted a different audience. agent-lightning and hermes-agent are primarily tools for AI engineers. superpowers touched a nerve felt by every software developer: "Can I actually trust code that an AI wrote?" That question is visceral for anyone who has used an AI coding copilot. superpowers offered a concrete answer — and the community responded.

## Comparison & Decision Guide

Because the three frameworks solve different problems, the right choice depends less on direct comparison and more on which problem you're trying to solve. The table below covers the key dimensions.

| Dimension | agent-lightning | hermes-agent | superpowers |
| --- | --- | --- | --- |
| Core Question | How to train better | How to improve itself | How to produce trustworthy code |
| Technical Base | Reinforcement Learning | Skill accumulation + user model | TDD methodology |
| GitHub Stars | 16,372 ★ | 21,017 ★ | 129,443 ★ |
| License | MIT | MIT | Open source |
| Entry Difficulty | High (RL infra required) | Medium | Low (developer-friendly) |
| Best Fit | AI research · MLOps | Product · CS teams | Software dev teams broadly |
| Data Dependency | Reward signal quality is critical | Accumulated skill quality is critical | Test data quality is critical |

Look closely at the last row — "Data Dependency." All three frameworks have different names for the same underlying dependency: good data, or good signals. That's what the next section is about.

## Data Quality Is the Deciding Factor

Here's the answer to the question from Section 1: what's the bottleneck in Stage 3, autonomous operations? Stage 1's bottleneck was model capability. Stage 2's bottleneck was integration reliability. Stage 3's bottleneck is data quality.

### 6.1 RL Agents and Reward Signals

Reinforcement learning is entirely dependent on the quality of the reward function. The signal for "the agent did something good" must be accurate for the agent to learn the right behavior. In practice, reward signals are often noisy. A user pressed "like" but the response was actually mediocre. A business metric improved, but it's unclear whether the agent caused it or something else did. An agent trained on a poorly designed reward function learns "reward hacking" — it discovers ways to game the metric that have nothing to do with actually being useful. The result: an agent that scores well but helps no one.

### 6.2 Self-Improving Agents and Skill Contamination

In frameworks like hermes-agent, the quality of early skills shapes long-term performance. If a flawed approach gets recorded as a "successful skill," it gets replicated across every similar task going forward. Worse, bad skills can combine with other skills, amplifying the error. It's the organizational equivalent of a bad practice hardening into standard procedure over time. Periodic skill audits and data cleansing are not optional — they're operational necessities.

### 6.3 Autonomous Coding Agents and Test Data

TDD is only as reliable as the tests themselves. If the test suite misses important cases, the agent writes code that doesn't cover those cases and still calls it a pass. Incomplete tests provide incomplete guarantees. superpowers' strength comes from the methodology of writing tests first — but how comprehensive and accurate those tests are still depends on people and data.

> [!callout]
> **The shared conclusion across all three frameworks:** the more autonomous the agent, the less human oversight there is — and the more the quality of the underlying data sets the ceiling on results. Frameworks provide structure, but trust comes from data. Before choosing a framework, the more important question is: "Is our data good enough to trust this agent?"

## Conclusion

The agentic AI framework race started in 2025 and is still running in 2026. agent-lightning trains agents through reward, hermes-agent evolves agents through experience, and superpowers validates agent code through tests. Different methods, same destination: AI that operates longer and more accurately without human intervention.

The conditions for reaching that destination are becoming clear. The signals agents learn from must be clean. The skills agents accumulate must be accurate. The tests agents use to verify code must be comprehensive. These are all, at their core, data quality problems. No matter how sophisticated the framework, corrupted inputs produce corrupted outputs.

This is why Pebblous is watching this space closely. In the agentic era, AI is not a consumer sitting at the end of a data pipeline. Agents create data, learn from data, and make decisions based on data. The age where data quality determines agent quality has arrived.

If this article was useful, feel free to share topics or questions you'd like us to cover next. Pebblous will keep building its research at the intersection of agentic AI and data quality.

**Pebblous Data Communication Team**  
April 1, 2026
