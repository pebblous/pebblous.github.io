---
title: MCP Turns Two, and Servers Now Send Instructions With Their Tools
subtitle: Anthropic opened Skills over MCP in public beta on November 24; monthly SDK downloads have gone from 90 million a year ago to more than 700 million
date: 2026-11-27
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# MCP Turns Two, and Servers Now Send Instructions With Their Tools

_Anthropic opened Skills over MCP in public beta on November 24; monthly SDK downloads have gone from 90 million a year ago to more than 700 million_

## Executive Summary

> [!callout]
> An MCP server used to hand over tools and stop there. It has now started handing over how to use them as well. On November 24, 2026, the day the Model Context Protocol turned two, Anthropic opened Skills over MCP as a public beta in Claude and Claude Code. Put skills next to tools on a server, and the model reads the matching instructions at the moment that work comes up.

> The anniversary numbers are large. Monthly downloads of the Python, TypeScript, C#, Rust and Ruby SDKs passed 700 million over the past 30 days, against 90 million in the same month a year earlier. A download count tells you how widely MCP has been installed. It says nothing about whether the instructions servers have started sending are worth reading.

> Sections 1 through 5 report what the official blog and the extension specification say. Section 2 separates what belongs to the MCP specification from what is a Claude product announcement. Section 6 is our reading.

### Key Figures

Each of these four points at something different. The first two measure how far MCP spread in two years, the third is the evidence that this extension is not one company's feature, and the fourth is the part the extension cannot enforce by machine.

Sources: [the official MCP anniversary post](https://blog.modelcontextprotocol.io/posts/mcp-turns-two/) and [modelcontextprotocol/ext-skills](https://github.com/modelcontextprotocol/ext-skills).

<!-- stat-card -->
**700M** — SDK downloads over the past 30 days, as of November 23 — The same month a year earlier ran 90 million

<!-- stat-card -->
**5B** — Cumulative SDK downloads over two years — 4.5 billion of them landed in the past year

<!-- stat-card -->
**64** — Implementations that already ship the published Skills extension — Out of 108 rows in the working group's list. Not an Anthropic-only feature

<!-- stat-card -->
**0** — Consent and integrity rules that machine validation enforces — The spec's JSON schema only checks shape, as the repository says itself

## The Numbers Published at the Two-Year Mark

MCP is the convention that defines how a model reaches tools and data outside itself. Anthropic open-sourced it on November 25, 2024, and the first revision of the specification carries the date 2024-11-05. The anniversary post reports the spread of the protocol in three lines.

- Monthly downloads of the Python, TypeScript, C#, Rust and Ruby SDKs passed 700 million over the 30 days ending November 23. They were close to zero at launch and crossed 90 million by the first birthday in November 2025.
- Cumulative downloads passed 5 billion, and more than 4.5 billion of those came in the past year alone.
- Unique contributors, counted once each, passed 2,500.

The event numbers came out alongside them. The MCP Dev Summit held in New York in April 2026 drew about 1,200 people, roughly four times the first summit in San Francisco in May 2025. Meetups ran through ten cities across four continents, and Seoul in August 2026 was one of them. The most recent ran for two days in Nairobi.

The two-year timeline records the order in which the specification grew. The two rows worth watching while reading this announcement are the last two.

| When | What happened |
| --- | --- |
| November 2024 | Anthropic open-sources MCP (specification 2024-11-05) |
| June 2025 | Elicitation and structured output enter the specification (2025-06-18) |
| December 2025 | MCP joins the Agentic AI Foundation under the Linux Foundation |
| January 2026 | MCP Apps becomes the first official extension |
| July 2026 | The largest revision so far makes the protocol stateless (2026-07-28) |
| October 2026 | Skills over MCP reaches beta |
| November 2026 | Events reaches beta |

▲ Drawn from the timeline in the anniversary post. The orange row is the extension this article covers.

The post closes its opening section with Angie Jones, VP of Developer Experience at the Agentic AI Foundation. "Whether an agent is querying a database to fix a bug, or helping a researcher access the data they need, MCP servers have become part of the fabric of the agentic internet." She ends on the builders: when they get a stake in shaping the technology they use, everyone wins.

> [!callout]
> Our reading starts here. A download count does not distinguish an install from a reinstall, and it climbs every time an automated build pulls the dependency. So 700 million tells you that MCP has become a default component in a great many projects. It does not tell you that any given installed server is worth connecting to. When this blog drew 400 servers at random from the public registry in September 2026 and tried to start them, 48.8% completed initialization. Adoption figures and operating figures have to be read together.

## Three Features Opened the Same Day, and Whose Public Beta It Is

Separately from the anniversary post, four items came out of the Claude product side the same day. Three are available now and one is a preview. The same post reports more than 10,000 usable MCP connectors. Each item carries a named customer, which makes it easier to judge what the feature is for.

| Feature | Status | What it does | Named users |
| --- | --- | --- | --- |
| Skills over MCP | Public beta | A server posts instructions for using its tools next to the tools themselves | Shopify, HubSpot, Atlassian, Carta (coming) |
| Tasks | Generally available | Runs a long job or an agent loop in the background and collects the result when it finishes | ZoomInfo |
| Elicitation | Generally available | Pauses mid-job to show the user a form or a link, then continues once an answer comes back | Supabase, Railway, GitHub |
| File Uploads | Shipping soon | Sends PDFs, spreadsheets and images straight to the server without passing through the context window | — |

▲ Statuses and named users as written in the Claude product post of November 24, 2026.

The four names in the first row show what kind of instructions a server ships. Shopify sends store design, HubSpot sends customer onboarding, and Atlassian sends the context of a team's own organization. Carta is described as preparing a skill that drafts equity paperwork. None of the four is a single tool call; each walks through several steps. In the second row, ZoomInfo uses Tasks to run deep account and contact research in the background.

What that feature is meant to prevent is clearest in the Elicitation examples. Supabase confirms cost before creating a paid project and before running irreversible SQL, Railway asks before changes such as removing a service, and GitHub makes the user type the repository name by hand before an agent deletes it.

### 2.1. "Public Beta" and "GA" Are Product States

The same words point at two different things on two different layers.

- **The specification layer** — SEP-2640, the basis for the Skills extension, was merged as Final on September 13, 2026, and the extension itself sits at the Beta stage of the lifecycle. Beta means breaking changes are allowed. The anniversary timeline also records it as "Skills over MCP beta in October."
- **The product layer** — The public beta of November 24 means the feature opened in the Claude and Claude Code products. The "generally available" labels on Tasks and Elicitation likewise describe product rollout status.

Tasks never appears in the anniversary post. Elicitation appears only as a timeline row saying it entered the specification in June 2025. Read the two posts as one event and the sentence "the MCP specification made Tasks generally available" assembles itself easily, but nowhere is that written.

The anniversary post itself landed in the specification repository as PR #3584. Its title is "docs(blog): celebrate two years of MCP" and the only files it changes are the blog post and its images. It is the PR that published the post, not a PR that changed the specification, so the basis for the Skills extension is SEP-2640 and the `modelcontextprotocol/ext-skills` repository.

## A Third Slot Appears Next to Tools and Resources

Until now an MCP server handed the model two kinds of thing: a list of actions it could take (tools) and material it could pull in (resources). A third slot has appeared, holding instructions for the order in which this server's work gets done (skills). Whether the job is processing a refund or reviewing code, anything that mixes several tool calls with conditional branches needs more than "here is what you can do." It needs "when this happens, do it this way."

The three slots carry different loads. The diagram below shows that division and when the instructions get read.
