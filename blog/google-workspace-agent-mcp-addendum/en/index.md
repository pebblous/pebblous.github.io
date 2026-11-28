---
title: Google Workspace Forces AI Agents Onto MCP, Bans Model Training
subtitle: AI agents must use Google
date: 2026-11-28
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google Workspace Forces AI Agents Onto MCP, Bans Model Training

_AI agents must use Google_

## Executive Summary

> [!callout]
> Google has narrowed the ways an AI agent can reach Google Workspace data to two dedicated channels. In a November 25 [Workspace blog post](https://workspace.google.com/blog/product-announcements/built-for-trust-and-control-new-ai-agent-protections-and-developer-tools-in-google-workspace), the company made the Workspace MCP server and the Workspace CLI generally available, and on the same day it published a new terms annex, the Workspace AI Tools Addendum. AI agents must use these two channels, not the existing REST APIs, to work with Gmail, Drive and Docs. Ordinary apps used by people keep the existing APIs.

> The addendum also limits what agents can do with the data they collect. Workspace data can't be used to train or fine-tune models, derived data such as embeddings can't be kept longer than 30 days, and everything must be deleted when a user disconnects the tool. Technical enforcement starts on February 1, 2027, and usage-based billing on April 1.

> Google's stated reason is that the old assumption, a valid OAuth token equals the user's intent, no longer holds once agents act on their own at machine speed. For any agent connected to company data, whose authority it uses and what record it leaves have now become questions of contract terms.

### Key Figures

Four numbers frame the change. The dedicated server covers eight apps, and derived data an agent builds must be gone within 30 days. Then there are two dates: rules are enforced technically from February 1, 2027, and charges begin on April 1.

Sources: [Workspace AI Tools Addendum](https://workspace.google.com/terms/ai-tools) (revised 2026-11-24) · [Google Cloud Blog](https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise)

<!-- stat-card -->
**8** — Apps with a managed MCP server — Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks

<!-- stat-card -->
**30 days** — Retention cap on derived data — Embeddings, memory indexes and more

<!-- stat-card -->
**Feb 1, 2027** — Technical enforcement begins — Agents calling REST APIs directly are held to Standard quota

<!-- stat-card -->
**Apr 1, 2027** — Usage-based billing begins — Starting with the Scaled tier

## Google Workspace MCP Server and CLI Go GA

On November 25, Google posted an announcement on the Workspace blog under the headline "Built for trust and control." It centers on two tools. The Workspace MCP server is a Google-managed server built on MCP (Model Context Protocol), an open standard, and it lets agents running in the cloud or on the web work across eight apps: Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat and Tasks. Google Keep will be added later.

Google says the MCP server doesn't hand over whole files or mailboxes. It returns only the context a task needs and keeps the work inside Workspace's security boundary. The Workspace CLI is for local agents running on a user's own machine and for terminal automation. It signs in with narrowly scoped access and returns results as structured JSON.

Google changed its terms on the same day. The first clause of the Workspace AI Tools Addendum, an annex to the Google APIs Terms of Service, says that a tool accessing Workspace must use Google MCP "if it is an AI agent or is powered by an AI agent." The Google Cloud blog put it more bluntly: AI agents must use the Workspace MCP server or the Workspace CLI, not the existing REST APIs.
