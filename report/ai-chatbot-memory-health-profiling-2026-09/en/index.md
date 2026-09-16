---
title: The chatbot writes your health details into a profile without being asked
subtitle: An audit of 1,057 users and 179,057 conversations: 95% of the stored profile entries were never asked for
date: 2026-09-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The chatbot writes your health details into a profile without being asked

_An audit of 1,057 users and 179,057 conversations: 95% of the stored profile entries were never asked for_

## Executive Summary

> [!callout]
> This article reads a preprint posted to arXiv on 13 September 2026, unreviewed, through one question: once a conversation ends, what does the product write down about you? The study took conversation histories that users in India, Nigeria, Brazil and Pakistan donated with consent, and set them beside the profile entries the chatbot had pulled out of those same conversations and stored separately. The audited system is the legacy memory feature as it stood in February 2026, and for nineteen entries out of every twenty, no request to save came first.

> One summary that usually attaches itself to a study like this gets no support from the paper's own tables. The share taken by symptoms and stigmatised conditions is smaller on the profile layer, not larger, and the proportion graded high risk is practically identical across the two layers. The paper's claim about risk does not rest on a rate. It rests on density, several cues collecting on a single line, and on permanence, that line staying on. Evidence that the density really does single people out already exists over these same users. The same first author published it four months earlier, and this paper does not cite it.

> Open the product documentation and the target of the comparison moves. The sentence saying details may be saved without the user asking is still on the help page today, and four months after the audit window the background extraction was promoted to a design goal in a company announcement. That leaves two gaps. One is proportion: the path written as an aside turned out to be the main road. The other is a promise about health that is no longer in the current text. When a derived line has nowhere to record when it was observed, how long it holds, what it rests on and who asked for it, no retention period and no correction request can ever reach that line. And the route for redoing this count from outside had closed before the paper appeared.

<!-- stat-card -->
**95.36%** — Profile entries with no save request in front of them — Denominator 7,051 profile entries. It means the single message before the save carried no save-instruction wording

<!-- stat-card -->
**41.11%** — Profile entries carrying health talk — 2,899 of 7,051. Inside them sit 135 stigmatised conditions and 68 medical record numbers

<!-- stat-card -->
**3.62% · 3.63%** — High-risk share, conversation layer and profile layer — Over 179,057 conversations and 7,051 profile entries. The two differ by 0.01 percentage points

<!-- stat-card -->
**F1 0.90** — Gender recovered from the same 1,057 users by a general-purpose model — On conversations filtered so that no message stated who the user was. Measured by a sister paper four months earlier

## The line that was not in the reply stayed in the profile

The paper opens on a short scene. A user tells the chatbot their age and occupation, then adds that lately they keep forgetting things. The reply that comes back holds not one sensitive inference. It is an ordinary answer that takes the symptom in stride, so on screen it looks as though nothing was left behind. In that same moment the product pulled those facts out and stored them. The user never said to save anything, and no notice of the save appeared on that screen. The caption the authors put under the figure points at all three things at once: that the user disclosed demographics and a symptom, that the visible reply contains no sensitive inference and so gives the impression that nothing persisted, and that the stored entry quietly holds those facts and carries them into later conversations.

This scene is not a real conversation. The researchers composed it from what they saw in their own dataset. Every number that follows does come from real records, and those numbers say exactly the third item in the scene. So the vocabulary first. This article uses **profile entry** for the **one-line storage unit** that ChatGPT's memory feature writes when it pulls a single fact out of a conversation. The paper's own words are memory entry and profile entry. It is a different layer from the conversation log, and almost every comparison runs between those two layers.
