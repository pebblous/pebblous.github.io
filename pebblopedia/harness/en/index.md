---
title: Harness
subtitle: [PebbloPedia] From Kids to Experts — Five Levels of AI
date: 2026-03-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Harness

_[PebbloPedia] From Kids to Experts — Five Levels of AI_

## This Article

> [!callout]
> **PebbloPedia** is a knowledge series by Pebblous that explains a single topic at five different depths. This edition's topic is **Harness** — a system that weaves multiple AI agents into a single team to automatically execute complex tasks.

> An elementary schooler can read it, and an expert can discover something new. Start at any level. If it gets too hard, go back a level; if you want to go deeper, jump to the next.

🧒Level 1 — For Elementary Schoolers

Easy with analogies and stories. Explained through cooking teams and soccer teams.

🎒Level 2 — For Middle & High Schoolers

For those curious about how it works. How division of labor, agents, and orchestration connect.

🎓Level 3 — For CS Majors

For those curious about the tech stack. Claude Agent SDK, MCP, architecture patterns.

🔬Level 4 — For Experts

Latest research and open problems. Framework comparisons and the 2026 industry landscape.

🧙Level 5 — For Wizards 🧙

Poetic insight from the wizard's perspective. "From Stables to Neural Nets — A History of Straps."

## Harness, Explained for Elementary Schoolers

🧒For Elementary Schoolers — With analogies and stories

What happens if you ask one AI robot to do everything? Do homework, cook, clean, and draw pictures all at the same time. It probably wouldn't do any of them well. People are the same way! But what if you **split up the tasks** so each one handles what they're best at? That's exactly what a **Harness** is.

### 👨‍🍳 Think of a Cooking Team

How do you make a delicious dinner? One chef grills the meat, one makes the salad, and one prepares the dessert. And the head chef decides the order: "Start the meat first! Salad in five minutes! Dessert last!" That's exactly what a harness does. It assigns tasks to several AI chefs, and a head-chef AI coordinates the whole sequence.

### ⚽ It's Like a Soccer Team Too

What if all 11 soccer players were forwards? You might score a lot of goals, but the defense would be a disaster. That's why there are **positions**: forwards, midfielders, defenders, and a goalkeeper. The coach designs the strategy: "Counter-attack now!" In a harness, AI players get positions (agents), playbooks (skills), and a coach (orchestrator) leads the game.

### 📝 This Article Was Actually Made by a Harness!

Here's a fun fact: the article you're reading right now was made by a harness. One AI researched the material, another AI wrote the text, and yet another AI styled the page and published it online. Three AIs worked as a team!

<!-- stat-card -->
**✅ One-Sentence Takeaway** — Harness = a system that makes several AI robots into one team and divides up the work. A team does way better than going solo!

## Understanding Harness Through Principles

🎒For Middle & High Schoolers — Principles and mechanisms

Have you ever used AI like ChatGPT or Claude? You can only have one conversation at a time. But what if multiple AIs, each specializing in a different area, could **collaborate simultaneously**? A harness is the system that makes that idea a reality. A team of specialist AIs divides and conquers complex tasks.

### 🔑 Four Core Principles

1. Division of Labor

Break a complex task into small specialized areas. Instead of one AI doing everything, each one handles their specialty.

2. Agent = Specialist Role

Give each AI a specific role: "You're the researcher," "You're the writer," "You're the editor."

3. Skill = Task Manual

A detailed guide that agents reference. Like a recipe, it spells out what to do and in what order.

4. Orchestration = Overall Coordination

Determines who starts first, who gets the results next, and what the overall sequence looks like.

### 🏫 Understanding Through a School Group Project

The principle behind a harness is exactly like a school group project. Imagine four team members preparing a presentation. One does the research, one makes the slides, one writes the script, and one rehearses the delivery. Each person finishes their part and hands it off to the next, while the team leader checks the overall progress. The exact same thing happens in the AI world.

### 🌐 Real-World Use Cases

- • **GitHub Copilot Workspace** — Multiple AIs collaborate on code review, testing, and refactoring
- • **Anthropic Claude Code** — Agents handle file exploration, code writing, and test execution
- • **YouTube Video Production Automation** — Planning AI → Script AI → Editing AI → Thumbnail AI → Upload AI
- • **This PebbloPedia Page** — Researcher agent gathered materials → Writer agent composed HTML → Publisher agent deployed

The name "Harness" comes from the **horse harness** — the gear that connects multiple horses to a single carriage. Just as a harness channels the strength of several horses in one direction, it aligns the capabilities of multiple AI agents toward a single goal.

<!-- stat-card -->
**✅ One-Sentence Takeaway** — Harness = Division of labor (who) + Skills (how) + Orchestration (in what order). A system where multiple AI specialists work as a team.

## The Multi-Agent System Tech Stack

🎓For CS Majors — Tech stack and architecture

The technical core of a harness is the **separation of agents and skills**. Agent definition files (`.claude/agents/`) specify the "who" (persona, principles, model), while skill definition files (`.claude/skills/`) specify the "how" (procedures, tools, data formats). This separation allows the same agent to invoke different skills, or different agents to use the same skill.

### 🏗️ Foundation Technologies

Claude Agent SDK

• Released by Anthropic in 2025  
• Python/TypeScript support  
• Native sub-agent patterns  
• TeamCreate, SendMessage, TaskCreate APIs

Model Context Protocol (MCP)

• Released Nov 2024 by Anthropic  
• Standard for AI ↔ external tool connections  
• Mar 2025 v2: Streamable HTTP, OAuth 2.1  
• Adopted by OpenAI, Google, and MS

Agent Definitions (.claude/agents/)

• Agent name, role, model specification  
• agent_type: general-purpose, read-only, etc.  
• Frontmatter (YAML) + Markdown body  
• plan_mode_required option for review gates

Skill Definitions (.claude/skills/)

• Skill name, description, trigger conditions  
• skill.md body with procedures + examples  
• Progressive Disclosure principle  
• Reference files placed under references/

### 🔄 Six Architecture Patterns

Multi-agent systems take on various topologies depending on the nature of the task. The patterns most commonly used in harness systems are as follows.

➡️

Pipeline

A→B→C→D sequential processing. Ideal for blog writing.

🔀

Fan-out / Fan-in

Parallel distribution → result aggregation. Ideal for comprehensive research.

🎯

Expert Pool

A router selects the right specialist. Ideal for code review.

🔄

Generate-Verify

Generate→Verify→Regenerate loop. Ideal for quality assurance.

👁️

Supervisor

Supervisor↔Worker real-time coordination. Ideal for large-scale migrations.

🏛️

Hierarchical Delegation

Director→Team Lead→Worker. Ideal for full-stack development.

### 📨 Data Passing Mechanisms

Information exchange between agents occurs through three channels. **Message-based** (SendMessage) is used for real-time conversational communication, **Task-based** (TaskCreate/TaskUpdate) for shared task list management, and **File-based** (`_workspace/` directory) for passing structured intermediate artifacts. In this PebbloPedia pipeline, the researcher saves research results to `_workspace/01_research.md`, the writer reads it to compose HTML, and the publisher references `_workspace/02_write_meta.json` for deployment.

### ⚙️ Dual Execution Modes

The Claude Agent SDK supports two execution modes. **Agent Team** mode creates a team with TeamCreate where each member has an independent context and communicates via messages. **Sub-agent** mode spawns lightweight agents via the Agent tool to delegate specific tasks. The former suits long-term projects; the latter suits one-off tasks.

<!-- stat-card -->
**✅ One-Sentence Takeaway** — Harness = separation of Agent (who) + Skill (how). On top of the Claude Agent SDK and MCP, multi-agent systems are composed using topologies like pipeline, fan-out, and supervisor.

## The 2026 Multi-Agent Frontier

🔬For Experts — Latest research and open problems

The 2026 multi-agent battleground rests on three axes — the maturity of the **framework ecosystem**, the practical deployment of **dynamic orchestration**, and achieving **faulty-agent robustness**. The market is growing explosively, but unresolved foundational research problems stand in the way of large-scale deployment.

### 📊 Market Size: Explosive Growth

1,445%Multi-agent inquiry growth  
(Gartner, 2024Q1→2025Q2)

$76.3BAI agent market  
2025 (Grand View)

49.6%CAGR  
2025-2033

70%AI apps using multi-agent  
by 2028 (projected)

### 🔬 Latest Research Trends

Academic research on multi-agent LLM systems surged in 2024-2025. Key papers are summarized below.

- • **"Multi-Agent Collaboration Mechanisms: A Survey of LLMs"** (Tran et al., arXiv 2501.06322, Jan 2025) — The first comprehensive survey systematizing cooperative/competitive/coopetitive types and peer-to-peer/centralized/distributed structures.
- • **"COPPER: Reflective Multi-Agent Collaboration"** (NeurIPS 2024) — An approach evaluating agent contributions via Counterfactual PPO. The first practical solution to the Credit Assignment Problem.
- • **"Chain-of-Agents"** (NeurIPS 2024) — A sequential worker + manager integration architecture. Achieved up to 10% performance improvement over RAG on long-document comprehension tasks.
- • **"Multi-Agent via Evolving Orchestration"** (NeurIPS 2025) — An RL-based dynamic orchestrator. Goes beyond fixed workflows to dynamically modify agent composition during execution.
- • **"Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents"** (arXiv 2025) — Empirical evidence that star-topology effectively suppresses error propagation compared to distributed structures.

### ⚔️ Framework Comparison (2025-2026)

Claude Agent SDK (Anthropic)

Native team communication (TeamCreate/SendMessage), tight integration with the MCP ecosystem. However, ecosystem lock-in due to Claude exclusivity.

LangGraph (LangChain)

Fine-grained state management and observability. Graph-based workflow definitions. Steep learning curve but maximum flexibility.

CrewAI

Rapid prototyping with an intuitive API. Compose agent teams in just a few dozen lines. Limited dynamic adaptability.

AutoGen (Microsoft Research)

Strong human-in-the-loop patterns. Complex learning curve is a drawback, but the research community is active.

OpenAI Agents SDK

Evolved from Swarm. Strength lies in OpenAI ecosystem integration (GPT, Codex). Still in early stages.

Google ADK

Per-agent built-in memory and Gemini integration. A late entrant, but Google infrastructure synergy is its weapon.

### ❓ Five Open Problems

- • **Credit Assignment Problem** — There is no general-purpose method for accurately measuring each agent's contribution to a team's output. COPPER's Counterfactual PPO is one approach, but there is a long road to practical system deployment.
- • **Faulty Agent Robustness** — A single agent's hallucination or error can contaminate the entire system. Star-topology's error suppression effect has been demonstrated empirically, but defense strategies for dynamic topologies remain unestablished.
- • **Context Window Management** — As the number of agents grows, coordination messages increase exponentially and exhaust context windows. Efficient summarization and compression strategies are needed.
- • **Security** — Prompt injection, MCP tool vulnerabilities (multiple disclosures in April 2025), and the risk of inter-agent message tampering are real threats.
- • **Lack of Evaluation Standards** — While benchmarks for single agents are abundant, standardized benchmarks for comparing multi-agent system performance have yet to be established.

<!-- stat-card -->
**✅ One-Sentence Takeaway** — The multi-agent market is growing at nearly 50% annually, but five open problems — Credit Assignment, Faulty Agent Robustness, Context Management, Security, and Evaluation Standards — remain the key barriers to large-scale deployment.

## From Stables to Neural Nets

🧙A Wizard's Poetic Insight

From Stables to Neural Nets — A History of Straps

In 1776, Adam Smith peered inside a pin factory.One person making pins: twenty a day.Ten people dividing the work: forty-eight thousand.Division of labor, he wrote.

Two hundred and fifty years later, division of labor found a new body.Weights instead of muscles, prompts instead of hands,context windows instead of factories.But the principle remains —divide the work, and the whole grows larger.

The word harness comes from the stable.Leather straps that channel the strength of many horses in one direction.From physical straps to logical ones,from the coordination of muscle to the coordination of intelligence.The strap never disappeared. Only its form changed.

An interesting question remains.Is the answer "a smarter AI,"or "a well-organized team of ordinary AIs"?Is intelligence a property of the individual, or of the system?

After the harness, what remains for humansis not code, but design;not implementation, but judgment;not efficiency, but direction.

Like an Escher drawing,the drawing hand draws the hand that draws.This article was written by a harness,and this article explains the harness.A mirror within a mirror.

And yet, the final question belongs to humans —where shall we point these straps?

— pb, March 2026

### This Page Was Built by a Harness

<!-- stat-card -->
**🤖** — Here's an interesting fact: the PebbloPedia page you're reading right now was automatically generated by Pebblous's **Harness** system.
                                A researcher agent gathered materials for all five levels. A writer agent composed this HTML.
                                A publisher agent handled SEO validation and deployment. This very page — explaining what a harness is — is itself proof that a harness works.
                                Like an Escher drawing, the drawing hand draws the hand that draws.

<!-- stat-card -->
**📚 PebbloPedia Series** — PebbloPedia is a knowledge series by Pebblous that explains a single topic at five different depths. Kids, experts, and wizards alike — each opens a different door to the same subject. — Previous: **PebbloPedia: Physical AI** · The next edition is coming soon.
