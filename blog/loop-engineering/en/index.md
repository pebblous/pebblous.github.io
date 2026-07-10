---
title: The Developer Who Built Claude Code Now Calls His Job 
subtitle: What makes an autonomous loop trustworthy isn
date: 2026-06-29
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Developer Who Built Claude Code Now Calls His Job 

_What makes an autonomous loop trustworthy isn_

## Executive Summary

> [!callout]
> On June 2, 2026, Boris Cherny, the engineer who built Claude Code, said this in an interview: "I don't prompt Claude anymore. There are loops running, and it's the loops that prompt Claude and decide what to do. My job is to write the loops." Within days the line traveled through the developer community and picked up a name: loop engineering. This piece looks at what that shift is, and what makes it trustworthy.

> The core of the shift is that the human's seat moves. You go from the "operator" who types prompts directly to the "designer" who builds the system that prompts the agents. In Cherny's case, Claude Code wrote 100% of his code contributions over the past 30 days (259 pull requests), and merges per engineer per day on his team rose by 200%. But the more a loop runs on its own, the more the risk grows alongside it. If it grades its own output, an agent becomes a machine that agrees with its own answer and repeats forever.

> So what makes an autonomous loop trustworthy is not a smarter model but two data instruments that accumulate outside the loop. One is a verifier that judges completion separately; the other is a persistent memory that carries what yesterday's loop learned into today. This piece traces why these two instruments are the safety rail.

### Key Figures

Sources: [WorkOS](https://workos.com/blog/boris-cherny-claude-code-acquired-interview-takeaways), [The New Stack](https://thenewstack.io/loop-engineering/)

Four numbers show the weight of this shift. One person's contributions are written almost entirely by an agent, a team's throughput doubles, a meaningful share of public code carries one tool's fingerprint, and the time it takes a new hire to ramp up shrinks to a couple of days.

<!-- stat-card -->
**100%** — Cherny's code contributions — All of his contributions over 30 days written by Claude Code. 259 PRs

<!-- stat-card -->
**+200%** — Engineer productivity — Rise in merges per Anthropic engineer per day

<!-- stat-card -->
**~4%** — Public commit share — Estimated share of public GitHub commits made by Claude Code

<!-- stat-card -->
**~2 days** — New-hire onboarding — Ramp-up for a new engineer, down from weeks to about two days

## The Developer Who Stopped Prompting

Boris Cherny leads Claude Code at Anthropic. Claude Code is the coding agent he started as a side project in the fall of 2024. On June 2, 2026, he said in an interview that his way of working had crossed another threshold. He no longer prompts Claude directly; instead, loops run, prompting Claude and deciding what to do. And he summed up his job in a single line: "My job is to write the loops."

Cherny describes the change in three stages. At first he wrote code by hand with the help of autocomplete. Next he kept five to ten Claude sessions open at once and fed prompts into each one manually. Now the loops hand off the prompts for him. Hundreds of agents read GitHub, Slack, and Twitter and decide for themselves what to build. The person no longer sits inside the loop typing input; they step back to watch the loop run.
