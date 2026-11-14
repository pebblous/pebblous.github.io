---
title: CrowdStrike Is Buying the Company That Records What AI Agents Do
subtitle: Fiddler AI for about $400 million and Dreadnode for about $95 million, with both folded into the Falcon platform as the parts that watch what agents do
date: 2026-11-05
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# CrowdStrike Is Buying the Company That Records What AI Agents Do

_Fiddler AI for about $400 million and Dreadnode for about $95 million, with both folded into the Falcon platform as the parts that watch what agents do_

## Executive Summary

> [!callout]
> CrowdStrike is buying two AI security startups at once. It announced both agreements, for Fiddler AI and for Dreadnode, at its Falcon Europe event in Barcelona on November 3. The company did not disclose the price, and the Wall Street Journal put the two deals together at about $495 million.

> The place to look is where the money split. Dreadnode, which attacks models and agents before they ship in order to find the weak points, went for about $95 million. Fiddler AI, which writes down what an agent read and what it ran, went for about $400 million. The biggest check a security company wrote here bought a tool that keeps a record of behavior, not one that blocks an attack. George Kurtz, the chief executive, called Fiddler "the flight recorder for every agent" in the announcement.

> Sections 1 through 3 follow what the announcement and the reporting say. Section 4, which moves the deal from a security question to a question about how records are designed, is this article's reading.

### Key Numbers

The first cell is where the biggest money went in this deal, and the second is the advantage CrowdStrike claims there. The last two show the size of the market that judgment sits in, and when the product actually becomes usable.

Sources: [TechCrunch](https://techcrunch.com/2026/11/03/crowdstrike-to-shell-out-nearly-500m-for-2-ai-security-startups-as-the-market-for-securing-agents-takes-off) (2026-11-03), [CrowdStrike announcement](https://www.crowdstrike.com/en-us/blog/crowdstrike-to-acquire-fiddler/) (2026-11-03), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-08-26-gartner-forecasts-the-market-for-securing-ai-will-reach-almost-5-billion-in-2027) (2026-08-26)

<!-- stat-card -->
**About $400M** — Price of Fiddler AI — The amount is not CrowdStrike's own figure. It comes from the Wall Street Journal's reporting

<!-- stat-card -->
**Up to 98%** — Claimed cut in evaluation cost — A CrowdStrike claim, resting on a purpose-built model doing the evaluation without calling an outside large model

<!-- stat-card -->
**$4.8 billion** — Market for securing AI in 2027 — Gartner's forecast. Up 68.7% from $2.8 billion in 2026

<!-- stat-card -->
**Fiscal Q4 2027** — Falcon Observe general availability — The quarter starts in November 2026 and ends in January 2027. Both acquisitions are due to close inside it too

## What Fiddler AI and Dreadnode Actually Do

Fiddler AI started in Palo Alto in 2018 and has raised about $99 million. Its work is to follow an agent's decision path and tool calls one step at a time, and to watch for behavior drifting outside the boundary originally set. CrowdStrike will fold the technology into its own platform under the name Falcon Observe and make it generally available in the fourth quarter of fiscal 2027. Krishna Gade, the co-founder, put the reason he started the company this way in the announcement. "We started Fiddler to help enterprises answer a fundamental question: can I trust what my AI agents are doing?"

Dreadnode was founded in 2023 and has raised $14 million. This side attacks models, applications and agents directly, before they go into service, to find where they break. The scale the announcement gives is more than 100 known AI attack strategies. Jailbreaks and prompt injection are in there, along with attacks that dig in over several turns and attacks built specifically for agents. The targets are not a single model either. The reasoning loops an agent carries its thinking through, the business applications it works in, and the MCP servers that hand it tools all get hit together.

What stands out more is how the findings get handed over. Dreadnode ranks them by severity, maps each one to four public frameworks including the OWASP Top 10 for LLMs and MITRE ATLAS, and turns them into reports a team can export and use to make a go or no-go call before deployment. Brad Palm, the chief executive, gave his reason for founding the company. "AI fails in ways traditional testing was never designed to catch, and the people best equipped to find those failures think like attackers. We founded Dreadnode to expose those weaknesses before AI reaches production."

That technology goes into Falcon Guardian, and the Dreadnode team joins CrowdStrike's Cyber Superintelligence Lab. The announcement splits the duties of the two products. Guardian protects agents from attack and abuse, and Observe confirms that an agent behaved as intended. One connection runs between them, in a single direction. Weaknesses found in pre-deployment testing feed Falcon Guardian as policy recommendations, so a flaw caught before shipping thickens the protection at runtime. Guardian also picked up an AI kill switch the same day, which shuts an agent down where it is running, cuts it off the network, and stops it from starting again when it strays from its defined behavior.
