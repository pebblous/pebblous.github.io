---
title: Dormant AI Agents Still Hold Live Keys to Company Data — Arrakis Security
subtitle: Arrakis Security watched thousands of agents in customer environments for 12 weeks, and found that 76% of enabled agents had not run in two months while their logins still worked
date: 2026-10-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Dormant AI Agents Still Hold Live Keys to Company Data — Arrakis Security

_Arrakis Security watched thousands of agents in customer environments for 12 weeks, and found that 76% of enabled agents had not run in two months while their logins still worked_

## Executive Summary

> [!callout]
> Seven out of every ten AI agents a company built for its own use have not run once in two months, and the login details those agents hold are still live. The finding comes from the 2026 Autonomous Agents Threat Report by Arrakis Security, an Israeli security firm, which security outlets wrote up between October 21 and 26. The company gathered twelve weeks of records from thousands of agents running in customer production environments. This article looks at what those numbers counted and why organizations end up in that state.

> The figure that stands out is 76%, the share of enabled agents that did not run once in 60 days. Not running and losing access turned out to be separate things. The credentials were still valid and the triggers still fired. The number does come from Arrakis customer environments, and because dormancy was decided by last run time, a scheduled job that fires once a quarter could have been counted as dormant.

> Sections 1 through 5 follow the figures the report released and the coverage from the three outlets that carried them. The METR investigation in Section 3 is the one exception, a separate record that Help Net Security placed alongside the report. Section 6, which carries the findings over to the questions they raise for people who own data, is this article's interpretation.

### Key Numbers

Source: the Arrakis Security 2026 Autonomous Agents Threat Report as carried by [Help Net Security](https://www.helpnetsecurity.com/2026/10/26/arrakis-dormant-ai-agent-risks-report/), [securityonline.info](https://securityonline.info/arrakis-security-report-finds-76-of-ai-agents-are-dormant-but-keep-their-credentials-and-connections/), and [CIO Influence](https://cioinfluence.com/security/arrakis-security-report-finds-76-of-ai-agents-are-dormant-but-keep-their-credentials-and-connections/).

<!-- stat-card -->
**76%** — Agents that had not run once in two months — Counted among enabled agents. Their credentials stayed valid and their triggers stayed armed

<!-- stat-card -->
**About 25%** — Dormant agents that can be woken from outside the organization — A webhook that checks no signature runs them when a request arrives. Two outlets wrote 24%

<!-- stat-card -->
**99.4%** — Agents reaching sensitive systems with no confirmed leak prevention — 70% of all agents reach sensitive systems such as cloud storage and AI services

<!-- stat-card -->
**19%** — Agents using keys and tokens that never expire — Once issued they stay valid until someone revokes them. Stop using the agent and the key remains

## A Sleeping Agent Still Carries Its Badge

What Arrakis counted is the number of agents that **nobody uses and nobody has switched off**. That is a different count from how many agents have outlived their purpose. Among enabled agents, 76% had not run once in 60 days, and 44% had not run in 180 days. Six months is long enough for the person who built the agent to have changed teams or left the company.

The sentence that follows is the one that matters. All three outlets carrying the report repeated the same wording. The agents had not run, but their credentials still worked and their triggers still fired. In human terms, somebody stopped showing up without handing in a badge. The entry log is empty while the entry rights are intact.

That distinction decides how a review is run. When hunting for unused resources, most teams look at run logs. An empty log means unused, and unused drops off the risk list. The Arrakis numbers say that sorting runs exactly backwards. The ones with empty logs hold their access the longest without anyone looking at them.

The table below collects what the report counted, each figure with its denominator. The last two rows work differently from the rest. Arrakis grouped defects of different kinds, including connections where outbound data goes uninspected, unsecured triggers, and excessive permissions, under the single name of exposure, and an agent flagged more than once within the same category was counted only once there. Counted that way, 82% of the agents surveyed had at least one recorded exposure, and within that 82%, 46% had two or more distinct exposures. Dormancy does not enter this tally, and the categories that count as exposure were set by Arrakis.

| What the report counted | Share | Share of what |
| --- | --- | --- |
| No run in 60 days | 76% | All enabled agents |
| No run in 180 days | 44% | All enabled agents |
| Can be run by an unsigned external webhook | About 25% | Dormant agents |
| At least one unsecured trigger | 22.9% | All agents surveyed |
| Uses API keys or tokens that never expire | 19% | All agents surveyed |
| At least one connection to a sensitive system | 70% | All agents surveyed |
| No confirmed leak prevention | 99.4% | Agents connected to sensitive systems |
| At least one recorded exposure | 82% | All agents surveyed |
| Two or more distinct exposures | 46% | Agents with at least one exposure |

Source: the Arrakis Security report as carried by [Help Net Security](https://www.helpnetsecurity.com/2026/10/26/arrakis-dormant-ai-agent-risks-report/). The denominator changes from row to row, so adding or comparing these percentages distorts what they say.

## The Doors That Wake an Agent Open from Outside Too

Being asleep is not itself the risk. The risk comes from how many ways there are to wake the agent and how many of those are open beyond the organization. According to the report, about 25% of dormant agents will run on a single unsigned webhook call arriving from outside. Help Net Security put this at about a quarter and the other two outlets at 24%.

A webhook is an arrangement to start a job when a request of an agreed shape reaches a particular address. When a signature is attached, the receiving side can tell who sent the request; a webhook that checks no signature accepts a request from anyone who knows the address. If the address is reachable from outside, that includes requests from outside. In human terms, a back door that opens without a password sits on an office nobody has walked into for months.
