---
title: AI Agents Leak in the Channels, Not the Answer
subtitle: Audits that inspect only the output miss 41.7% of privacy violations
date: 2026-07-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Agents Leak in the Channels, Not the Answer

_Audits that inspect only the output miss 41.7% of privacy violations_

## Executive Summary

> [!callout]
> An answer that clears the output guardrail is not proof that no personal data leaked while the agent was producing it. Beyond the final answer, an agent spills data through tool-call arguments, system logs, and messages passed between agents. This article looks at why an audit cannot stop at the final answer.

> AgentLeak, a benchmark released in 2026, reported that an audit inspecting only the answer misses 41.7% of privacy violations. Inter-agent messages leak personal data at a rate of 68.8%, while the final output leaks only 27.2%. These figures come from controlled benchmark scenarios, so read them as values a study reported rather than as settled fact.

> The dividing line isn't where data is stored, but which channel it can be observed through. The sections below walk those channels one at a time.

<!-- stat-card -->
**41.7%** — of violations an output audit misses — C2 68.8% − C1 27.2%

<!-- stat-card -->
**68.8%** — inter-agent message leak rate — 2.5× the 27.2% of final output

<!-- stat-card -->
**~85%** — peak leak via tool input & logs — even when the output is sanitized

<!-- stat-card -->
**2.6×** — internal channels vs external — internal 74% vs external 28.2%

## The Illusion of a Clean Answer

For many teams, the privacy audit hangs on a single point: the final answer the model hands back to the user. They attach an output filter, check whether personal data slipped into the answer, and call it safe once it passes. The approach is intuitive, and it seems to match the picture most regulatory documents draw.

The trouble is that an agent is not a thing that produces one answer and nothing else. While handling a single task, an agent calls tools, writes intermediate results to logs, and sends messages to other agents. Every one of those flows is a channel that data passes through. The final answer is only the last slot in the sequence.

AgentLeak, a benchmark released in 2026, put a number on this blind spot. It instrumented seven communication channels and measured how much personal data leaked at each one separately. The final output leaked 27.2%, but inter-agent messages leaked 68.8%. The 41.7-point gap between those two figures is exactly the size of the violations that an output-only audit never sees. The answer passed; the channel failed.
