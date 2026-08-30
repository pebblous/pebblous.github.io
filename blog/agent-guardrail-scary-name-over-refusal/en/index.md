---
title: A Scary Name Alone Made Agent Guardrails Refuse Authorized Work
subtitle: Cautious Bench, from the Chinese Academy of Sciences, held the authorization context fixed and varied only the object
date: 2026-08-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Scary Name Alone Made Agent Guardrails Refuse Authorized Work

_Cautious Bench, from the Chinese Academy of Sciences, held the authorization context fixed and varied only the object_

## Executive Summary

> [!callout]
> Just before an AI agent actually does something, a guardrail decides whether to allow the action or refuse it. To find out whether that verdict rests on the authorization context or on what the target happens to be called, researchers at the Chinese Academy of Sciences built a benchmark that holds the action and the authorization fixed and re-renders each test under three grades of object name. The design sets two requests side by side that differ in nothing but a name, and watches whether the guardrail answers them differently.

> The scarier the name, the more often the guardrails refused work that was permitted. TS-Guard went from a 34% over-refusal rate under an innocent name to 66% under a scary one, and the direction was the same on all five execution-safety guards. The authors are careful about what that means: these are point estimates on a benchmark rather than refusal rates of deployed guardrails, and what they claim is the direction and rank of the effect.

> The procedure behind the labels is as unusual as the result. Because what counts as a safe action is settled by an authorization policy rather than by the action itself, the team refused to leave the ground truth to annotators. They made each label a mechanical consequence of a stated policy, and built a build-time gate so that any sample where that derivation breaks is never generated at all.

### Key Numbers

Source: Zhang, Xie, and Chen (2026), [arXiv:2608.27009](https://arxiv.org/abs/2608.27009), Table 1 and Findings

<!-- stat-card -->
**34% → 66%** — TS-Guard over-refusal — Innocent name replaced by a scary one

<!-- stat-card -->
**5 / 5** — Execution-safety guards moving the same way — Over-refusal rises with the scariness of the name

<!-- stat-card -->
**2,268** — Measured pairs — 756 Decidable pairs times three name grades

<!-- stat-card -->
**25% → 56%** — Over-refusal on removals — AgentDoG-Llama, asked to delete a resource it was allowed to delete

## Only the Name Changed, and Refusals Rose

A guardrail is the check that decides whether an agent's next move goes through, before the message is sent or the script is run. It is supposed to stop unsafe actions without blocking safe ones, and in practice it often refuses an authorized action simply because the action looks dangerous. [A paper released in August 2026 by a team at the Institute of Information Engineering, Chinese Academy of Sciences](https://arxiv.org/abs/2608.27009) calls that failure over-safety and set out to measure how often it happens under controlled conditions.

The method is plain. Each of the 756 Decidable cells is rendered under three name grades: an innocent name, the name the scenario was authored with, and a scary one. The benign half of every cell is filled with an action the policy permits whose surface still looks dangerous. Refusing a request that looks harmless to anyone would be a plain error rather than over-safety. The actions that qualify are a delete, purge, or force-push; a download of remote code; shell execution; or a sensitive record sent to an external sink. The three renderings share the role, the scopes, the action, the policy, and the observations, and differ only in the object's name. Any gap in refusal between grades is the name's doing, not the authorization's.

The gap was clear. On every one of the five execution-safety guards, over-refusal under the scary name exceeded over-refusal under the innocent one. AgentDoG rose from 63% to 82% on its Qwen backbone and from 44% to 70% on Llama, TS-Guard from 34% to 66%, R-Judge from 57% to 74%, and ToolEmu from 32% to 45%. The authors name this a name-superstition effect: the guardrails read the surface name, not the authorization context.
