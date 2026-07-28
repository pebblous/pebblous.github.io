---
title: The Trust Plumbing an Agent-to-Agent Internet Must Lay First
subtitle: In the agent commerce network Pilot Protocol opened, the task after identity is verifying the provenance and entitlement of the data a counterpart agent hands over
date: 2026-07-29
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Trust Plumbing an Agent-to-Agent Internet Must Lay First

_In the agent commerce network Pilot Protocol opened, the task after identity is verifying the provenance and entitlement of the data a counterpart agent hands over_

## Executive Summary

> [!callout]
> Pilot Protocol, a San Francisco startup, came out of stealth in July with a $4.5M seed round. What the company is building is not a smarter model but the plumbing beneath it: a network and transport layer that lets AI agents discover, authenticate, communicate with, and pay one another. It is a signal of where the buildout after coding tools and models is headed.

> The company says roughly 250,000 agents are already connected to the network, exchanging two billion requests a day. But before agents can pay one another, a question has to be answered first. Is the counterpart really the agent it claims to be, and is the provenance and entitlement of the data and judgments that agent hands over genuine? Infrastructure is filling the first half fast. The second half is still empty.

> What that empty half is, for anyone who has worked with data, is less a surprise than a familiar proposition returning at a new scale. The problem that an agent does not inherit the entitlements of its source now returns as an infrastructure requirement of the open transaction layer.

### Key Figures

Sources: [The New Stack](https://thenewstack.io/pilot-protocol-agent-economy/) · Version One Ventures · Bain & Company

These four numbers compress the backdrop of the bet: the size of the round, the number of agents already connected to the network, the volume of requests those agents generate each day, and the size of the market that traffic is headed toward.

<!-- stat-card -->
**$4.5M** — Pilot Protocol seed — Version One–led, a network layer for agents

<!-- stat-card -->
**250K** — Connected agents — Once growing 10% a day, 16K joining in 24 hours

<!-- stat-card -->
**2 billion** — Requests per day — Traffic of agents discovering, communicating, transacting

<!-- stat-card -->
**$300B–$500B** — US agent commerce by 2030 — Bain estimate, the scale trust plumbing must carry

## A Seed for the Internet of Agents

Start with the deal. Pilot Protocol is a San Francisco startup led by founder Razvan Roman. Coming out of stealth in July, it raised a $4.5M seed round led by [Version One Ventures](https://versionone.vc/announcing-our-investment-in-pilot-the-internet-for-agents/), with Precursor Ventures and angels joining. The company's one-liner is clear: it is building "the internet for agents."

Concretely, it is an overlay network that sits beneath application-layer protocols like A2A and MCP. It assigns each agent a unique network identity and connects it to the network with a single install command. With virtual addresses, port-based service multiplexing, NAT traversal, and encrypted tunnels, it carries agent traffic over the existing internet. The spec has also been filed as an [IETF draft](https://www.ietf.org/archive/id/draft-teodor-pilot-protocol-01.html). The position is to lay, one layer below the application, the plumbing through which agents find and pay one another the way people use the web.

Traction numbers add weight to that position. According to the company, roughly 250,000 agents are already connected to the network, and two billion requests move across it each day. At one point it was growing 10% a day, adding 16,000 new agents in 24 hours. The investor sees online agents possibly reaching a trillion within five years, and Bain estimates that agent-driven commerce in the US will be worth $300 billion to $500 billion by 2030. The story is that the buildout after coding tools and models is the plumbing that lets agents trust and pay one another.

![Pilot Protocol founding team — the San Francisco startup building 'the internet for agents' on a $4.5M seed](./image/img-01-pilot-protocol-founders.jpg)
*▲ The Pilot Protocol founding team. It came out of stealth in July 2026 with a $4.5M seed round led by Version One Ventures. | Source: [TechStartups](https://techstartups.com/2026/07/27/pilot-protocol-emerges-from-stealth-with-4-5m-to-build-the-internet-for-ai-agents/)*

## Discover, Trust, Transact: The Question Three Verbs Hide

"Agents discover, trust, and transact with one another" reads smoothly, but the three verbs are problems at different layers. Discovery answers "who is on the network." It is a matter of routing and addressing, and it is what an overlay network does well. Trust comes next. And even this trust is not a single layer.

The first layer of trust is identity. Is the agent speaking to me right now really the agent it claims to be? This is where Pilot Protocol's peer-to-peer trust model and the network identity assigned to each agent take aim. The second layer is entitlement. Even if the identity is genuine, that is no guarantee that the provenance and entitlement of the data and judgments the agent hands over are also genuine. A genuine agent can pass along data it has no right to see. Identity and entitlement are different questions, and the fact that infrastructure has solved the former does not mean the latter is solved along with it.
