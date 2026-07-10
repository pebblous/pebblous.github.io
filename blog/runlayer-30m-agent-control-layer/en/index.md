---
title: The Company Khosla Wanted to Buy Whole Doesn
subtitle: Runlayer raised a $30M Series A for an MCP-based agent control layer — in the agent economy, the moat isn
date: 2026-06-30
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Company Khosla Wanted to Buy Whole Doesn

_Runlayer raised a $30M Series A for an MCP-based agent control layer — in the agent economy, the moat isn_

## Executive Summary

> [!callout]
> Runlayer, a New York startup, raised $30 million in a Series A on June 24. Felicis led the round and Khosla Ventures joined, and according to Fortune, Vinod Khosla said he wanted to buy every dollar of the round. Yet this company is not building a smarter model. It builds a layer that records and controls what AI agents inside a company can reach and what they actually do.

> Felicis's Jake Storm called it a "Swiss business" — a neutral control layer that no AI platform can own. The bet sits on top of a hard number: 91% of enterprises already run AI agents, but 44% of them have no governance framework at all. The money flowed not toward model intelligence, but toward a window into how agents behave.

> This piece looks at what Runlayer's $30 million points to. For anyone who works with data, the investment translates into a single question. Is the moat of the agent economy a smarter model, or the ability to trace and audit which data that model touched?

### Key Numbers

Sources: [Fortune, 2026](https://fortune.com/2026/06/24/exclusive-vinod-khosla-felicis-runlayer-nanit-30-million-enterprise-ai/) · Okta, Gartner, Anthropic, and others

Four numbers compress the backdrop to this investment: the size of the round, the share of companies already running agents without any way to control them, the scale of forced shutdowns that governance failures will trigger, and the adoption speed of the protocol that underpins all of it.

<!-- stat-card -->
**$30M** — Runlayer Series A — $42M total, Felicis-led, Khosla joined

<!-- stat-card -->
**44%** — Enterprises with no governance — 91% already use agents (Okta 2025)

<!-- stat-card -->
**40%** — Forced to block agents by 2027 — Due to governance failures (Gartner)

<!-- stat-card -->
**97M** — MCP monthly SDK downloads — Linux Foundation standard, de facto baseline

## The Company Khosla Wanted to Buy Whole

Start with the deal. Runlayer is a New York company that came out of stealth in November 2025. This $30 million Series A brings its total raised to $42 million. Felicis Ventures led the round, with Khosla Ventures participating. According to Fortune, Vinod Khosla said he wanted to buy every dollar of the round. It is unusual for an early investor to want the entire round, and it signals just how highly he rates the position this company holds.

The founders' track record explains that position. CEO Andrew Berman is a three-time founder. He started the baby-monitor company Nanit and built the AI video-meeting tool Vowel, which he sold to Zapier in 2024. Co-founder Tal Peretz is the person who stood up Zapier's MCP integration in just two days and turned it into the company's fastest-growing product. The advisor list includes David Soria Parra, who designed MCP. These are the people who have watched, from the closest possible vantage point, the junction where agents connect to tools.

The name Felicis's Jake Storm gave the company cuts to the core. "It's a Swiss business. No platform can own this. A neutral control layer is absolutely critical." Companies do not want to be locked into a single AI vendor. Whether it is OpenAI, Anthropic, or Google, a company runs several models and keeps swapping them out. On top of all of them, it needs a neutral zone that records and controls, in one place, who accessed what. That is the seat Runlayer is aiming for.

## What Runlayer Actually Does

The picture CEO Andrew Berman paints goes like this. "Every employee will delegate their work to swarms of agents, as a core part of how work gets done." The catch is in the next sentence. "The challenge is that most companies still do not have a secure, scalable way to make that possible. That is the problem Runlayer exists to solve." In other words, what Runlayer sells is not the agents themselves, but the safeguards that let a company turn them loose with confidence.

Runlayer is a governance control layer that sits between employees and AI tools. For an agent to reach internal systems, it has to pass through this layer. At that junction, the company decides who can use which agent to access what, watches it in real time, and keeps a record. The core capabilities group into four.

- •**MCP gateway and catalog** — securely connects more than 18,000 MCPs to the enterprise. Which tool which person may use is decided at this gateway.
- •**Shadow AI detection** — catches unapproved agents, MCPs, and plugins running quietly in the background. The biggest threat is the usage no one can see.
- •**Access control and identity management** — sets the access scope, OAuth permissions, and runtime conditions per user and per agent. Agents get permissions the same way people do.
- •**Real-time security scanning** — inspects tool calls, outputs, intent, and sensitive data in real time to block prompt injection, tool poisoning, and data exfiltration.
