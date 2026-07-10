---
title: 21 Files, 5,526 Lines \u2014 Inside NanoClaw\u2019s Architecture
subtitle: A single-process multi-channel agent on Claude Agent SDK, and its structural trade-offs
date: 2026-04-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 21 Files, 5,526 Lines \u2014 Inside NanoClaw\u2019s Architecture

_A single-process multi-channel agent on Claude Agent SDK, and its structural trade-offs_

## Executive Summary

> [!callout]
> 21 files. 5,526 lines. When I first opened NanoClaw (v1.2.12), it was hard to believe an entire multi-channel AI agent lived inside something this small. A single Node.js process takes the message, spins up a container, schedules the work, and sends the reply back. The reasoning loop is handed off to the Claude Agent SDK — but everything around that loop, this one process carries by hand.

> 27,690 stars on GitHub, 12,607 forks. That kind of attention does not gather around a small codebase by accident. And yet the limits are just as clear. NanoClaw leans on a single SQLite file, refuses to scale horizontally, and lights up only two channels in real life: Slack and Gmail. Keeping things small comes with reasons. It also comes with a cost.

> This piece reads NanoClaw alongside two other answers to the same moment — the Claude Agent SDK (a library, v0.2.118, 16.8M monthly npm downloads) and Anthropic Managed Agents (a hosted platform, launched April 2026). Three shapes for the same problem: a library you embed, a self-hosted framework you run, and a fully managed service you rent. Some choices are elegant. Some choices pay a price. This report walks through them one at a time. This piece is the agent-architecture chapter of the [Claude Watch](/project/AnthropicClaude/en/) series — what to build directly on top of the Claude Agent SDK and what to leave to managed infrastructure.

## What Is NanoClaw — An AI Agent in 21 Files

NanoClaw was born as a lightweight alternative to OpenClaw (434,453 lines across 3,680 files). Its founding premise: "the entire codebase should be comprehensible in under 8 minutes." The measured scale is 21 source files and 5,526 lines, with just 8 runtime dependencies.

Three design principles underpin NanoClaw's architecture.

- •**Code-as-Configuration** — Zero configuration files. To change behavior, you modify the code directly. Compare this with OpenClaw's 53 config files.
- •**Skills Over Features** — Rather than baking capabilities into the framework, NanoClaw extends through skills (code snippets). The framework itself stays thin.
- •**AI-Native Debugging** — The codebase must be small enough that the agent can read and debug its own source code.

The following table compares the scale of OpenClaw and NanoClaw.

| Metric | OpenClaw | NanoClaw |
| --- | --- | --- |
| Source files | 3,680 | 21 |
| Lines of code | 434,453 | 5,526 |
| Dependencies | 70+ | 8 |
| Config files | 53 | 0 |

The tech stack consists of Node.js 20+, TypeScript (90.2% of the codebase), SQLite in WAL mode, Docker/Apple Container, and the Claude Agent SDK. Shell scripts account for 7.6%, Python for 1.2%.

## Architecture Teardown — How a Message Travels

Tracing a single message through NanoClaw reveals the system's design intent. A message follows this path from ingestion to response.

![NanoClaw message flow sequence diagram — Platform → Chat SDK Bridge → Router → Session Manager → inbound.db → Container → outbound.db → Delivery Poller](./image/arch-message-flow.png)
*▲ NanoClaw message flow — click to enlarge | Source: [NanoClaw official docs](https://github.com/qwibitai/nanoclaw/blob/main/docs/architecture-diagram.html)*

> [!callout]
> Messaging app (Slack/Gmail) → **Channel Adapter** → SQLite (inbound store) → **2-second polling loop** → Container launch (Claude Agent SDK) → **IPC (filesystem)** → Host process → Messaging app response

`src/index.ts` (662 lines) serves as the system-wide orchestrator. It maps precisely to Anthropic's recommended Orchestrator-Workers pattern. This single file handles channel registration, message polling, container management, and response routing.

### 2.1 Channel Self-Registration Pattern

Channel connectivity is implemented through a Map-based pattern in `registry.ts` (28 lines). If credentials exist as environment variables, the corresponding channel activates automatically. An elegant design that avoids hardcoding channels — yet as of v1.2.12, only Slack and Gmail are actually active. WhatsApp, Telegram, and Discord adapters exist in the code but are commented out.

### 2.2 Concurrency Control: GroupQueue

`group-queue.ts` (366 lines) manages two dimensions of concurrency simultaneously. It preserves message ordering within groups while enforcing a global ceiling of `MAX_CONCURRENT_CONTAINERS=5`. No more than five containers can run at once.

From an academic perspective, this structure corresponds to the Supervisor/Hub-Spoke pattern — the most mature orchestration model, but one with a well-known limitation: "the central orchestrator becomes a bottleneck at scale" (arXiv:2601.13671).

## Container Isolation — Security at the OS Boundary

Where NanoClaw diverges most sharply from other agent frameworks is in embedding OS-level container isolation directly into the framework itself. None of LangGraph, CrewAI, or AutoGen offer this level of isolation out of the box.

### 3.1 .env Shadowing: Physically Blocking API Keys

The `buildVolumeMounts()` function mounts the `.env` file to `/dev/null`. API keys physically do not exist inside the container. This goes beyond merely withholding environment variables — it overwrites the file itself with an empty device node.

### 3.2 Credential Proxy Pattern

`credential-proxy.ts` (126 lines) manages API keys on the host side, and containers access external services only through the proxy. This design addresses OWASP ASI05 (Unexpected Code Execution) and ASI03 (Identity and Privilege Abuse).

### 3.3 Filesystem-Based IPC

Agent-host communication uses filesystem-based IPC rather than network sockets (`ipc.ts`, 490 lines). No network ports are opened, reducing the attack surface.

### 3.4 Three Tiers of Isolation

NanoClaw offers three levels of isolation.

- •**Docker containers** — Default isolation. Runs on a shared kernel, so kernel vulnerabilities remain a concern.
- •**Docker Sandboxes (microVMs)** — Firecracker-grade isolation. Boot time around 125ms, memory footprint under 5 MiB.
- •**Apple Container** — Native macOS virtualization. Provides isolation without Docker in development environments.

That said, container isolation alone does not complete the security picture. Both academic research and NanoClaw's own codebase reveal additional considerations.

> [!callout]
> **Note:** Container isolation is a starting point, not an endpoint, for security. Research from IsolateGPT (NDSS 2025) shows that containers share the host kernel, making microVMs the recommended choice for untrusted code execution. `mount-security.ts` (420 lines) adds an allowlist-based mount path validation layer as a further line of defense.

## Scheduler and State Management — Time on SQLite

All of NanoClaw's state lives in a single SQLite file. Message storage, group registration, schedule state, and session mappings share 7 tables and 4 indexes running in WAL mode. `db.ts` (698 lines) exposes 30 functions that handle all data access.

### 4.1 Three Schedule Types

`task-scheduler.ts` (297 lines) supports three schedule types.

- •**cron** — Recurring execution at specific times. Uses standard cron expressions.
- •**interval** — Recurring execution at fixed intervals, specified in milliseconds.
- •**once** — Single execution at a specified time, then deleted.

### 4.2 Drift Prevention

The scheduler's core mechanism is its drift prevention logic. The `computeNextRun()` function anchors interval-type tasks to `task.next_run` rather than `Date.now()`. A `while (next <= now) next += ms;` loop skips missed intervals while preventing cumulative execution drift. However, since `SCHEDULER_POLL_INTERVAL` is 60 seconds, up to 60 seconds of execution latency is unavoidable.

### 4.3 A Deliberate Trade-Off

The single SQLite file is a deliberate trade-off. No external database server is needed, and a single file handles deployment — operational simplicity at the cost of horizontal scalability. Even in WAL mode, writes are serialized. The vector search and reflective memory proposed by the agent memory survey (arXiv:2603.07670) are absent entirely.

## Skills System and MCP Integration — Designing for Extension

NanoClaw connects to the outside world through two pathways: the Skills system and MCP (Model Context Protocol) integration.

### 5.1 Skills: Extensions Defined in Code

Skills use a YAML frontmatter-based just-in-time loading mechanism. When the agent needs a particular skill, it loads that skill's definition and injects it into context. This "load only when needed" approach is designed for efficient use of the context window.

### 5.2 MCP Passthrough

MCP (announced by Anthropic in November 2024) is a tool integration protocol built on a Host/Client/Server triad and JSON-RPC 2.0. NanoClaw connects to MCP servers via the Claude Agent SDK's `mcpServers` option using stdio/HTTP transport. Of MCP's five primitives (Tools, Resources, Prompts, Sampling, Elicitation), NanoClaw primarily uses Tools.

Academically, MCP standardizes at the infrastructure level the "tool selection and invocation" paradigm proposed by Toolformer (NeurIPS 2023). NanoClaw adopts this standard as a passthrough without adding its own tool selection logic. It wraps the Claude Agent SDK's `query()` call and uses `allowedTools`, `mcpServers`, and `agents` options to control the agent's capability scope.

### 5.3 Fork-Based Customization

Instead of a plugin system or configuration files, NanoClaw recommends customization through forking. With just 5,526 lines, forking the entire codebase and modifying it directly is a practical option. This is the natural consequence of the Code-as-Configuration principle.

## Architecture Comparison — NanoClaw vs. Agent SDK vs. Managed Agents

Understanding NanoClaw's position requires comparing it within the Anthropic ecosystem. Self-hosting (NanoClaw), library embedding (Claude Agent SDK), and hosted platform (Managed Agents) represent three approaches, each solving different problems.

### 6.1 Managed Agents' Three-Part Architecture

Launched in April 2026, Managed Agents separates concerns into Brain (stateless reasoning), Hands (sandboxed execution), and Session (append-only event log). Because Brain is stateless, it scales horizontally; Session logs enable automatic recovery from failures. The platform achieves approximately 60% reduction in p50 TTFT (Time to First Token) and over 90% reduction in p95 TTFT. Pricing is $0.08 per session-hour plus token costs.

### 6.2 Three-Way Comparison

The following table compares the three approaches across key dimensions.

| Dimension | NanoClaw | Agent SDK | Managed Agents |
| --- | --- | --- | --- |
| Deployment | Self-hosted single process | Library embedding | Anthropic-hosted cloud |
| Isolation unit | Docker/Apple Container per group | Developer's responsibility | Brain/Hands/Session separation |
| State management | SQLite single file (WAL) | Session ID-based local files | Server-side event log |
| Scalability | Vertical only (max 5 concurrent) | Application-dependent | Horizontal (stateless Brain) |
| MCP integration | Passthrough (stdio/HTTP) | Native | Native |
| Messaging | Built-in (Slack + Gmail) | None | None |
| Scheduling | cron/interval/once built-in | None | None |
| Cost model | Infra + API tokens | API tokens only | Tokens + $0.08/session-hour |
| Failure recovery | Manual restart | Session resume | Auto-recovery via Session log |
| Code transparency | 5,526 lines, fully auditable | Open-source SDK | Black-box infrastructure |
| Credential security | Credential Proxy + .env shadowing | Direct env var exposure | Credential isolation (outside sandbox) |

### 6.3 Position Among Competing Frameworks

By GitHub stars, the ranking is AutoGen (57,347), CrewAI (49,605), LangGraph (30,088), and NanoClaw (27,690). Yet NanoClaw is effectively the only framework that embeds OS-level container isolation within the framework itself, with messaging app integration as a first-class citizen. On the other hand, NanoClaw lacks multi-vendor LLM support, graph-based workflows, and role-based team composition — advanced orchestration patterns found in its competitors.

## Structural Limitations — NanoClaw's Ceiling

NanoClaw's minimalism comes with a clear ceiling. What follows is a data-driven analysis of its structural limitations.

### 7.1 Single-Process Bottleneck

`MAX_CONCURRENT_CONTAINERS=5` is the hard ceiling. When a sixth group requests processing, it queues. SQLite synchronous writes and container startup (~3 seconds) risk blocking the event loop. If the process crashes, every channel, schedule, and session goes down simultaneously — a single point of failure (SPOF).

### 7.2 SQLite Scalability Limits

Even in WAL mode, writes are serialized. When multiple groups process messages concurrently, write contention occurs. Seven tables consolidate messages, sessions, schedules, and router state, so table sizes grow linearly. As a file-based database, horizontal scaling across multiple servers is structurally impossible.

### 7.3 Channel Support Gap

While officially claiming support for 13+ channels, source code analysis of v1.2.12 reveals only two active channel adapters: Slack (606 lines) and Gmail (419 lines). The channel self-registration pattern (`registry.ts`, 28 lines) is elegant, but each real adapter implementation demands 400-600 lines of effort.

### 7.4 No Observability or Recovery

There is no built-in monitoring or alerting system. A logger (pino) exists in 17 lines, but it connects to no external dashboard or notification channel. Failure recovery means manual restarts — a stark contrast to Managed Agents' Session log-based automatic recovery.

### 7.5 Memory Architecture Gaps

Vector search, reflective memory, and semantic graphs are absent. The write-manage-read loop proposed by the agent memory survey (arXiv:2603.07670) remains unimplemented. Long-running agents face context window exhaustion, with compaction relying entirely on Claude Agent SDK's built-in capabilities.

## Implications — The Reality of Building Local AI Agents

### 8.1 What NanoClaw Proved

It proved that a production-grade multi-channel AI agent is possible in 5,526 lines. Container isolation and Credential Proxy demonstrated that security can be addressed at the code level. NanoClaw is a concrete embodiment of Anthropic's recommendation to "start with the simplest solution and add complexity only when needed."

### 8.2 What NanoClaw Exposed

The single-process ceiling is unambiguous. In the era of Managed Agents, the value proposition of self-hosting lies in "total control" and "code transparency." According to Gartner, enterprise inquiries about multi-agent systems surged 1,445% between Q1 2024 and Q2 2025, while the share of enterprise AI projects using multi-agent architectures jumped from 23% to 72%. Within this trajectory, minimalist frameworks like NanoClaw serve primarily as tools for understanding and learning.

### 8.3 Decision Framework

The right choice depends on your situation.

- •**Messaging integration is core, team is small** — NanoClaw. You can audit the entire codebase yourself, and messaging channel support is built into the framework.
- •**Embedding agents into an existing app, CI/CD automation** — Claude Agent SDK. Embed as a library and add agent capabilities wherever you need them.
- •**Enterprise long-running async workloads** — Managed Agents. If you need horizontal scaling, automatic failure recovery, and observability, delegate the infrastructure.

> [!callout]
> 21 files. 5,526 lines. These numbers approximate the upper bound of an AI agent architecture that a single person can fully comprehend. NanoClaw is an experiment that simultaneously demonstrates what is possible within that limit — and what is not.

**Pebblous Team**  

                        Pebblous Data Communication  
April 2026

<!-- stat-card -->
**📚 Claude Watch Series** — This article is part of the [Claude Watch](/project/AnthropicClaude/en/) series curated by Pebblous — tracking Anthropic's Claude across the politics of model release, the harness microstructure, AI alignment, agent architecture, and coding behavior correction.
