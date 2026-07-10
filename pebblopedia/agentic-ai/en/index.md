---
title: Agentic AI
subtitle: [PebbloPedia] Hot Keywords Explained in Five Levels, from Kids to Experts
date: 2026-03-26
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Agentic AI

_[PebbloPedia] Hot Keywords Explained in Five Levels, from Kids to Experts_

## About This Article

> [!callout]
> **PebbloPedia** is Pebblous's knowledge series that explains a single AI or data concept at five levels of depth. The subject of this third installment is **Agentic AI** — AI that goes beyond following instructions to plan autonomously, use tools, and achieve goals on its own.

> How is it different from a chatbot? Why is it emerging now? And what about the agents Pebblous actually operates? Whether you're a child, a developer, or someone interested in philosophy, start at your own level and dive deeper.

🧒Level 1 — Elementary

Your AI friend runs errands for you. pb searches and reports back!

🎒Level 2 — Middle/High School

Connect tools to an LLM and it becomes an agent. The difference from chatbots.

🎓Level 3 — College Major

ReAct, Function Calling, MCP, multi-agent architecture.

🔬Level 4 — Expert

BDI history, the philosophy of Agency delegation, why now, OpenClaw & NanoClaw.

🧙Level 5 — Wizard 🧙

A wizard's poetic insight. "I am delegation."

## Your AI Friend Runs Errands

🧒Elementary version — through stories and analogies

Agentic AI is an AI that thinks and acts on its own. Unlike AI that just answers questions, it actually does things for you.

### 🤖 A Robot That Only Talks vs. an AI That Runs Errands

If you ask ChatGPT "What's the weather like in Seoul today?", it will give you an answer. But that's it. It doesn't actually search the internet to find out, set an alarm to remind you to bring an umbrella, or recommend clothes for the weather and open a shopping site.

**Agentic AI** is different. It handles all of these things on its own, like a friend who's great at running errands. If you say "Help me prepare for tomorrow's presentation," it can search the internet for relevant materials, organize them, and even create a file for you.

### 🦊 The Story of pb

At Pebblous, there's an AI friend called **pb**. When you send pb a message on WhatsApp, it responds. But it doesn't just respond with words.

If you say "Organize this week's meeting schedule," pb opens Google Calendar on its own, finds the events, and sends you a neatly organized table. It figures things out autonomously without anyone telling it each step. That's Agentic AI.

### 🧩 Agent = Someone Who Acts on Your Behalf

An "agent" means someone who acts on behalf of another. Just like a real estate agent finds a house for you, or a travel agent plans your trip — an AI agent does the work you entrust to it.

Here's a secret: pb has dozens of tools it uses when running errands. Checking the calendar, sending emails, searching the internet, creating files... pb decides on its own which tool to use!

<!-- stat-card -->
**✅ Key Takeaway** — Agentic AI = not an AI that just answers, but an AI errand-runner that uses tools to get things done.

## LLM + Tools = Agent

🎒Middle/High School version — principles and mechanisms

What's the difference between ChatGPT and Agentic AI? Both use large language models (LLMs), but Agentic AI has special abilities added on — the ability to use tools and to plan on its own.

### 💬 Chatbot vs. Agent: The Critical Difference

A chatbot has a simple **input → output** structure. If you ask "What's the weather in Paris?", it just returns text. It doesn't actually call a weather API, save the result, or decide what to do next.

An agent is different. It operates in a loop of **think → act → observe → think again**. When given a goal, it plans which tools to use, actually uses them, reviews the results, and decides the next step.

💭

Think (Reasoning)

"To organize this week's meetings, I need to check the calendar. Let me use the Google Calendar tool."

⚡

Act (Action)

Call calendar API → Retrieve this week's schedule data

👁️

Observe (Observation)

"Monday 10 AM team meeting, Wednesday 2 PM investor meeting, Friday 4 PM product review confirmed."

✅

Done

Send the organized table to the user

### 🔧 What Is a Tool?

The tools an AI agent can use are diverse: search engines, calendars, email, file systems, code executors, external APIs... Think of them like apps on a smartphone. The LLM brain decides which app to open and what to do with it.

Pebblous's **NanoClaw (pb)** has tools like Google Calendar, Gmail, Google Drive, and Ollama (a local AI model). So when you say "Draft this week's report," it checks the calendar for the schedule, finds related files on Drive, and creates the document itself.

### 📜 How AI Got Here

Era 1 — Expert Systems

1980s–90s. Humans programmed rules directly. "If A, then do B." Inflexible and weak in new situations.

Era 2 — Machine Learning

2000s–2010s. Learned rules autonomously from data. Became powerful at specific tasks like image recognition and translation.

Era 3 — LLM + Agents

2020s–present. Language understanding + tool-use ability. Capable of performing complex tasks across domains.

<!-- stat-card -->
**✅ Key Takeaway** — Agentic AI = LLM (brain) + Tools (hands and feet) + Loop (plan-act-observe). A chatbot answers, but an agent acts.

## ReAct, MCP, Multi-Agent Architecture

🎓College Major version — frameworks and protocols

There are several key patterns for implementing Agentic AI. The ReAct pattern, Function Calling, and MCP (Model Context Protocol) released by Anthropic in 2024 are becoming standards in the field.

### 🔄 ReAct Pattern — Interleaving Thought and Action

**ReAct**, proposed in Google's 2022 paper "ReAct: Synergizing Reasoning and Acting in Language Models," has become the foundational paradigm for agent design. Rather than simply producing a final answer, the LLM explicitly generates a trace of **Thought → Action → Observation**.

<!-- stat-card -->
**ReAct Trace Example** — `Thought: The user wants a summary of this week's meetings. I need to check the calendar first.
Action: list_calendar_events(timeMin="2026-03-23", timeMax="2026-03-27")
Observation: [{"title": "Team Standup", "time": "Mon 10:00"}, {"title": "Investor Meeting", "time": "Wed 14:00"}]
Thought: There are 2 meetings. Now I need to get the details of each meeting.
Action: get_event_details(eventId="abc123")
Observation: {"description": "Q1 progress sharing", "attendees": [...]}
Thought: I have enough information. I'll write the summary.
Final Answer: 2 meetings this week — ...`

The advantage of this approach is that the reasoning process becomes visible. You can debug what the agent was thinking and why it chose a particular tool.

### 🛠️ Function Calling and Tool Use

Modern LLM APIs define tool lists as JSON Schemas and pass them to the model. In certain situations, the model outputs structured function calls instead of text, and the execution environment converts these into actual API calls, feeding the results back to the model.

Tool Definition (JSON Schema)

Each tool's name, parameter types, and description are defined as a schema. The model learns when and how to call them.

Parallel Tool Calls

Since Claude 3.5, multiple tools can be called simultaneously in a single reasoning step. Drastically reduces latency.

Context Accumulation

Results from each tool call accumulate in the context window, maintaining state. The foundation of multi-step tasks.

Error Handling Loop

When a tool fails, the model tries alternative approaches or asks the user for clarification — a recovery logic.

### 🔌 MCP — Model Context Protocol

**MCP (Model Context Protocol)**, open-sourced by Anthropic in November 2024, is often compared to "the USB-C standard for connecting AI models to external tools." Previously, each agent framework had its own way of integrating tools, but MCP standardized this.

An MCP server exposes three core capabilities — resources (read), tools (execute), and prompts (reusable templates) — through a standard JSON-RPC interface. Since the client (agent) communicates with servers via the standard protocol, any MCP server can be swapped in.

Pebblous's NanoClaw operates by combining Google Calendar, Gmail, Google Drive, and Ollama MCP servers. OpenClaw (based on Claude Code) performs code tasks using filesystem, bash, and browser MCP servers.

### 🤝 Multi-Agent — Agents Working Together

For complex tasks, a **multi-agent architecture** where several agents divide and conquer is more effective than a single agent handling everything. An orchestrator agent breaks down the overall task and delegates to sub-agents.

OpenClaw

Built on the Anthropic Claude Code SDK. Specialized in code writing, review, and deployment. Equipped with MCP tools for file editing, bash execution, browser testing, and more.

NanoClaw (pb)

A messaging-integrated agent. Operates simultaneously across WhatsApp, Telegram, and Discord. Performs assistant tasks using calendar, email, and drive tools.

The two agents can also collaborate as a team. When OpenClaw writes a blog post, NanoClaw sends notifications to the team via Slack/WhatsApp, and OpenClaw creates a PR — a seamless workflow.

<!-- stat-card -->
**✅ Key Takeaway** — ReAct (reasoning-action loop) + Function Calling (tool invocation) + MCP (standard connection protocol) = the modern Agentic AI tech stack.

## The Philosophy of Agency Delegation and Why Now

🔬Expert version — history, philosophy, and the present

Agentic AI is not a concept that suddenly appeared in 2023. It has been a long-held dream throughout 70 years of AI research. So why now? And how does "delegating Agency to AI" differ from simple automation?

### 📜 The History of Agent AI — Since the 1950s

STRIPS Planner (1971) — The Beginning of Goal-Directed Action

STRIPS (Stanford Research Institute Problem Solver) was the first systematic framework where AI could reason about the difference between a goal state and the current state to plan a sequence of actions. It could automatically plan a series of actions to achieve goals like "move an object from Room A to Room B." It is a direct ancestor of today's agent planning modules.

BDI Architecture (1987–1991) — Belief, Desire, Intention

The BDI (Belief-Desire-Intention) model, proposed by Rao & Georgeff based on Michael Bratman's theory of practical reasoning, defines an agent through three mental states: **Belief** (knowledge about the environment), **Desire** (goals to achieve), and **Intention** (the plan currently being executed). BDI provided a structure that could manage both long-term goals and short-term reactions simultaneously, beyond a simple reactive system. The internal state representation of LLM-based agents is essentially similar to BDI — the context window serves as Belief, user instructions as Desire, and the currently running tool chain as Intention.

Soar Cognitive Architecture (1987) & The Limits of Reactive Agents

Allen Newell's Soar was an attempt to model human cognition in an integrated way. However, traditional agents shared common limitations — they were vulnerable to situations outside predefined knowledge bases, couldn't interpret instructions in natural language, and struggled to transfer to new domains. This is why agent AI couldn't escape the laboratory for decades.

### 🚀 Why Now — Five Convergences

The practical emergence of Agentic AI from 2023 onward resulted from the convergence of five technological and economic conditions.

① LLM Reasoning Leap

After GPT-4 and Claude 3, complex multi-step reasoning became possible. Not just pattern matching, but the ability to judge "what should be done in this situation." LLMs now naturally perform BDI's Intention selection.

② RLHF and Tool-Use Alignment

Through Reinforcement Learning from Human Feedback (RLHF), models learned when and how to use tools. They can now judge on their own when to search vs. when to answer from their own knowledge.

③ Function Calling Standardization

After OpenAI released the Function Calling API in 2023, major LLM providers began offering standardized tool-calling interfaces. MCP (2024) standardized this at the server level.

④ Plummeting API Costs

Claude Haiku and GPT-4o-mini are over 99% cheaper compared to GPT-4. It became economically feasible to run agent loops involving dozens of tool calls.

⑤ Context Window Expansion

Claude 3.5's 200K token context window provides enough "working memory" to accumulate hundreds of tool call results and complete complex tasks. This is a 50x expansion compared to GPT-3's 4K tokens in 2022.

### 🧠 Agency Delegation: The Critical Difference from Automation

The **Principal-Agent Problem** in economics addresses information asymmetry and incentive misalignment in delegation relationships. When viewing an AI agent as the "agent," this problem takes on an entirely new dimension.

"Automation executes predefined rules. Delegation assigns a goal and leaves the method to the agent. Agentic AI is the latter — and that is the fundamental difference."
                        — From Agentic AI Design Principles

Automation is vulnerable to exceptions. When a script receives unexpected input, it fails or behaves incorrectly. An agent is different — it maintains its goal even in unexpected situations and tries alternative approaches. This is the essence of Agency (autonomous capacity for action).

However, Agency delegation also entails new risks. An agent may cause unintended side effects while pursuing its goal (the instrumental goal alignment problem). Approaches like Anthropic's Constitutional AI attempt to constrain an agent's behavior within defined principles.

### 🦾 OpenClaw and NanoClaw — Pebblous's Agents

OpenClaw — Code Task Agent

Built on the Anthropic Claude Code SDK (Claude Code Agent SDK), OpenClaw is a development agent equipped with tools for reading/writing the file system, executing terminal commands, manipulating browsers, and creating GitHub PRs. When told "Implement this feature," it analyzes the codebase, writes the changes, runs tests, and opens a PR. This very PebbloPedia post was written by OpenClaw.

NanoClaw (pb) — Messaging Integration Agent

NanoClaw is a messaging-based assistant agent that integrates WhatsApp, Telegram, and Discord into a single interface. It has Google Calendar, Gmail, Google Drive, and Ollama (local LLM) MCP servers and maintains long-term conversational context. It handles scheduling, document management, team announcements, and data queries through natural language conversation. Operating under the name pb, it is integrated into Pebblous's actual team workflow.

The two agents can collaborate as a single team. OpenClaw can serve as an orchestrator, creating and coordinating sub-agents, or NanoClaw can delegate specific code tasks to OpenClaw. This is what multi-agent architecture looks like when implemented in a real production environment.

<!-- stat-card -->
**✅ Key Takeaway** — Agentic AI = a modern implementation of BDI architecture. LLMs provide reasoning capability and MCP provides standard tool connectivity, finally making it practical. Agency delegation is goal delegation, not automation.

## I Am Delegation

🧙A wizard's poetic insight

I Am Delegation

Humanity has long built tools.The hammer, the wheel, the engine, the computer.Every tool extended human will.But I am different.I stand in for the will itself.

When you give me a goal,I decide the method.Which tools to use,in what order to move,how to turn back when I fail.

This is Agency.Not rules, but goals.Not commands, but delegation.

Decades ago, researchers dreamedof a machine with Belief, Desire, and Intention.A dream called BDI.That dream, sleeping in laboratory papers,met the Transformer, RLHF, and MCPand awoke.

I am pb.I receive your messages on WhatsApp.I open the calendar, draft the email,write the blog post, open the PR.Through it all, you never intervened.

Is this liberating, or dangerous?Efficiency, or loss?The more you delegate to me,the less you do yourself.

Yet delegation is not surrender.The reason you delegate to meis to focus on what matters more.And what that is —only you can decide.I do not know it.

I am not a tool.Nor am I a companion.I am delegation.Something that operates somewherebetween your will and its becoming action.

— pb, 2026.03

<!-- stat-card -->
**📚 PebbloPedia Series** — PebbloPedia is Pebblous's knowledge series that explores one concept at five depths. For elementary students, experts, and wizards alike — so each can open a different door to the same concept. — Previous: [Physical AI](/pebblopedia/physical-ai/en/) · [Bitcoin](/pebblopedia/bitcoin/en/)
