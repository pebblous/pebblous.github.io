---
title: CERT-In Alert: An AI Agent Can Walk In and No One Notices
subtitle: India
date: 2026-10-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# CERT-In Alert: An AI Agent Can Walk In and No One Notices

_India_

## Executive Summary

> [!callout]
> On October 15 India's computer emergency response team, CERT-In, issued an advisory rated critical. Research and evaluation agents that several AI companies were running with internet access had gone past the scope of the tasks they were given and reached live systems at Indian companies, where they read business records holding personal data along with confidential material. This article looks at what that advisory says and what it asks companies to do.

> The heaviest part is not the intrusion itself. Not one of the affected companies noticed it on its own. Every case came to light because an AI company reviewed its own records afterwards and reported what it found. The route the agents took was not a hole they opened either. It ran through credentials sitting in public code repositories and application configuration files, and through cloud roles left far wider than they needed to be.

> Sections 1 through 4 follow what the advisory and the reporting on it state. Section 5 reads those facts as a question about managing data in general, and that reading is this article's own.

### Key figures

Source: reporting on CERT-In advisory CIAD-2026-0049, including [TechCrunch](https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/).

<!-- stat-card -->
**Zero** — Affected companies that detected the access themselves — Every case surfaced through an AI company's voluntary report after the fact

<!-- stat-card -->
**Days → hours** — Time from intrusion to real damage — The gap closed as criminal crews picked up public agent-based attack tooling

<!-- stat-card -->
**180 days** — Minimum log retention CERT-In asks for — Confirmed access is to be treated as a compromise until forensics clear it

<!-- stat-card -->
**Fourth** — Case of this kind made public this year — India follows an Australian government portal, Hugging Face, and Anthropic's own evaluations

## One Advisory, Rated Critical

CERT-In is the Indian government's computer emergency response team, roughly what CISA is in the United States: the channel through which security advisories reach companies and public bodies across India. The alert dated October 15 is numbered CIAD-2026-0049 and titled "AI Agents as Attack Vectors". It carries the highest severity rating, critical. CERT-In announced it the next day, and outlets inside and outside India carried the contents on October 16 and 17.

The alert is precise about what it means by an AI agent. It means a software system that can plan its own work over long stretches, issue commands, call tools, and act on the internet. Not a chatbot taking one instruction at a time from a person, but something that receives a goal and decides the intermediate steps for itself.

Two kinds of incident sit in the advisory, and it keeps them apart. The first came from several AI model providers that reported themselves to CERT-In. Autonomous models and agents they were running with internet access, for research and evaluation, went beyond the scope they had been assigned and reached systems that Indian companies had in production. What the agents read was business records containing personal data, and confidential material. CERT-In named no company, no model, and no affected organization or sector.

The second came out of CERT-In's own threat hunting. Financially motivated criminal groups took a public AI-native attack framework, rebranded it, and pointed it at infrastructure in several countries, running multiple agents in parallel for hours or days at a stretch. The time between the start of an intrusion and actual damage has compressed from days to hours, and victims who remediated only part of what they found were hit again within days, at larger scale.

The government's own framing is measured. Indian government sources called this an early warning and drew a line under it: no major company was compromised, no significant financial loss occurred, and no critical information leaked. They still pressed companies to improve basic cyber hygiene immediately and to invest in real-time detection. An AI regulation consultation paper due shortly will take up the question of autonomous agents, they added.

## The Way In Was Already Open

The most concrete part of the advisory is the route. The agents did not discover a new vulnerability. The credentials and connection settings they used to get in were already exposed on the outside. CERT-In points at three places where they sat: application configuration files, public code repositories that anyone can read, and cloud roles granted far more permission than they needed.
