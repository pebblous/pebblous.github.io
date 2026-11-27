---
title: Google Workspace Gives AI Agents a Separate Door and Bans Model Training
subtitle: From February 1, 2027, AI agents must reach Workspace data through the MCP servers or CLI, and the new addendum bans model training on it
date: 2026-11-28
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google Workspace Gives AI Agents a Separate Door and Bans Model Training

_From February 1, 2027, AI agents must reach Workspace data through the MCP servers or CLI, and the new addendum bans model training on it_

## Executive Summary

> [!callout]
> Google has separated the AI agents that reach Workspace data from the apps people drive by hand. The Workspace MCP servers and the command line tool (CLI), released in general availability on November 25, 2026, are the only door left open to agents, and the Workspace AI Tools Addendum published alongside them sets out how far the data taken through that door may be used. Apps a person clicks through keep calling the REST APIs as before. It is the agents whose position changes.

> The deadlines for the change came with it. Technical enforcement begins on February 1, 2027, and billing on the usage tiers begins on April 1. What the addendum asks falls more on use than on route. Workspace data and anything derived from it may not be used to train or fine-tune a model, the derived information may not be held past 30 days, and scraping the APIs is out. When a customer disconnects an agent, the data taken has to go.

> Sections 1 through 4 are facts confirmed in the Google Workspace announcement, the Google Cloud blog, the Workspace Updates post, and the full text of the addendum. The clause distinctions and the wording in section 4 were compared directly against the addendum itself. Section 5, which reads this change as a move from borrowing a person's account to giving an agent an identity of its own, is this article's interpretation.

### Key Figures

Sources: the Google Workspace announcement [Built for trust and control](https://workspace.google.com/blog/product-announcements/built-for-trust-and-control-new-ai-agent-protections-and-developer-tools-in-google-workspace) (November 25, 2026), the [Workspace Updates post](https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html) (November 24, 2026), and the full text of the [Workspace AI Tools Addendum](https://workspace.google.com/terms/ai-tools) (last modified November 24, 2026). The retention cap on derived data was read in the addendum itself.

We picked out four numbers from the announcement. The first two are the size of the new door and the day the change lands. The other two are how long data may be held and how far the money reaches.

<!-- stat-card -->
**8 apps** — Opened by the MCP servers — Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks. Keep is planned

<!-- stat-card -->
**Feb 1, 2027** — Technical enforcement begins — The day the MCP and CLI requirement for agents takes effect

<!-- stat-card -->
**30 days** — Cap on holding derived data — Vector embeddings, memory indexes, user profiles and org graphs fall here

<!-- stat-card -->
**99%** — Developers already on the standard tier — Google's own count. The rest move to the scaled tier

## Agents Now Have a Door of Their Own

Google shipped the Workspace MCP servers and the Workspace CLI in general availability on November 25. The MCP servers connect eight apps: Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat and Tasks. Keep follows soon. The CLI is the side meant for agents running on a laptop or a server and for automation driven from a terminal. It returns structured JSON and narrows the scopes it asks for at sign-in.

The terms published in the same post are the Workspace AI Tools Addendum. They require an AI agent reaching Workspace data to go through an MCP server or the CLI instead of calling the REST APIs directly. The requirement lands on agents, not on all software. An app running in front of a person keeps the APIs it uses today.

A marker that tells the two apart arrived as well. OAuth 2.0 client settings in the Google Cloud console now carry a checkbox reading "Use this client for an AI-powered agent," which is stored in the configuration as is_agentic. The guidance alongside it says traditional non-agent features should use a separate client. The MCP servers refuse clients that are not marked as agents, and they interlock with Model Armor, Google Cloud's prompt injection screening service. A company running both an agent and an ordinary app will have to take apart any setup that drives the two on a single credential.

## When One Valid Token Meant the User Wanted It

Why a separate route is being cut at all is set out in one paragraph on the Google Cloud blog, written jointly by Chandu Thota, VP, Engineering, Workspace, and Brad Calder, President, Google Cloud Platform and SRE.

Traditional REST APIs were built for human-paced apps where a valid OAuth token implied user intent. As AI agents shift from reading information to acting autonomously at machine speed across email, documents, datasets, and cloud infrastructure, a valid token is no longer enough. Policy checks, data boundaries, and human confirmation have to live in the request path.

Source: Google Cloud, "Deploying agents safely in your enterprise" (November 25, 2026).

The paragraph holds an assumption and the point where it gives way. The assumption is that the person who handed over the token wants this particular thing done right now. Back when every click sent one request, that held almost always. An agent fires requests long after a person approved once, at a speed no person can read along with. The token is still valid, but it says nothing about whether a person wanted that particular request.

The same post puts a number on how much rides on that assumption. Workspace APIs now handle more than 2.8 trillion calls a month. Public Drive API traffic alone is more than two and a half times the volume of 2022, and more than 18 billion reads from Drive each day come from API callers rather than from a person's screen. The rule that reads one token as a person's intent applies to every one of those calls.

So the answer Google picked is to move the checking into the request path. The upper half of the diagram below is the route as it stands, and the lower half is the route agents have to take from February 2027.
