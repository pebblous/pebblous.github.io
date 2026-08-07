---
title: Memory Without a Name Tag Can
subtitle: The personal data AI agents write out of session, and data governance
date: 2026-07-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Memory Without a Name Tag Can

_The personal data AI agents write out of session, and data governance_

## Executive Summary

> [!callout]
> AI agents have started quietly writing your personal data to files that outlive the session. As tools like Claude Memory Tool and ChatGPT Memory move into real workflows, an agent records its own observations — "this user is …" — into unstructured memory such as session-context.md. The problem is that these entries carry no name tag. Nothing in the file says whose data it is. The deployer controls the store but has no idea what accumulates inside it, or under whose name. So when a "delete me" request arrives, there is no way to identify which memories belong to that person — and the deletion procedure physically fails to reach its target.

> This report's thesis is the one we published yesterday (July 28, 2026), ["Token-Level Provenance: Erasing One Person's Share From Training Data,"](/blog/token-level-provenance-unlearning/en/) carried over from training weights to runtime memory. On the training-data side, learning without provenance tags meant that removing a single author swept away up to 101× as much innocent data, and token-level provenance cut that over-deletion to 1.3×. On the runtime-memory side, writing without tags means the deletion request never even gets off the ground. Different layers, the same point of collapse.

> So the one sentence this piece keeps returning to is this: if you don't attach a name tag — a provenance record of "whose memory is this?" — at write time, no deletion procedure will ever work retroactively. The fix is not a delete button bolted on after the fact, but the design of the moment of recording itself. And that design is, in turn, the very instrument of regulatory compliance.

Four numbers fix the size of this problem: how many times more innocent data dataset-level deletion swept away in training data; how far information exposure jumps in multi-user systems the moment you attach memory; how much more the internal channels agents use to talk to each other leak than the final output; and how fast the agent adoption widening this attack surface is moving.

<!-- stat-card -->
**101× → 1.3×** — Training-data over-deletion — Dataset-level deletion vs. token-level provenance · the companion-series counterpoint

<!-- stat-card -->
**36–47% → 63–90%** — Exposure violations surge once memory is added — PiSAs multi-user benchmark · violations migrate into memory

<!-- stat-card -->
**68.8%** — Agent-to-agent message leakage rate — AgentLeak · 2.5× the final output (27.2%); output-only audits miss 41.7%

<!-- stat-card -->
**5% → 40%** — Enterprise apps with AI agents — Gartner · under 5% in 2025, projected 40% by end of 2026

## The Agent That Started Remembering Me

For a long time, the default nature of an AI chatbot was forgetting. Close the window and the conversation you'd just had was gone; open it again and the other side greeted you as a stranger. In 2026 that default quietly flipped. As tools that persist information beyond the session — Anthropic's Claude Memory Tool, OpenAI's ChatGPT Memory, Google Gemini's personalization — arrived one after another in real workflows, agents now keep their observations about you in a file even after the conversation ends. Next time you meet, they read that file first. Not-remembering, once the default, has been replaced by remembering.

Technically, this memory is usually a human-readable text file. During a conversation, the agent writes whatever it judges "likely to help next time" into a memory file with a name like session-context.md. That can include your name, your affiliation, the projects you're working on, your preferences and habits — sometimes even sensitive context like health or family. No one dictates line by line what gets kept. The agent decides, and the agent writes. That autonomy is what makes the memory feature convenient, and it is also where the problem this report examines begins.

This is roughly how the memory piles up. Below is a typical example of what an agent leaves in an out-of-session file. Even though the user never explicitly said "save this," personal details mentioned in passing during the conversation have been written down as observations.

session-context.md — memory the agent recorded autonomously (example)

- User leads a fintech team in Seoul. Mentioned working late often.
- Recently weighing a job change (avoids naming current employer).
- Spouse managing diabetes — often asks diet-related questions.
- Prefers: conclusion first, prose over tables. Focuses in the morning.Nowhere in this file is there an identifier saying "these observations belong to user X." When a "delete me" request later arrives, there is nothing inside the file to determine whether these four lines are that person's.

If this were a handful of experimental cases, it wouldn't be worth a report. But the pace of adoption turns it into a real-world problem. Gartner projects that the share of enterprise applications embedding task-specific AI agents will reach 40% by the end of 2026, up from under 5% in 2025 — roughly an eightfold jump in a single year. More agents means the volume of personal data piling up out of session with no name tag grows at the same rate. As the attack surface expands, no one still knows what is being written inside it, or under whose name.

## Where a Deletion Request Can't Reach

Writing about the privacy of agent memory, the legal and compliance outlet Astraea compressed the problem into a single sentence: "You cannot delete what you do not know the agent stored." Deletion is an operation that begins by identifying its target, and with untagged memory it fails at that very first step. The heart of the problem is not the absence of a delete button, but that no one knows what to press.

Pick the structure apart and it looks like this. A company that deploys an agent is, legally, the data controller. The store is theirs; the file-system access is theirs. In other words, they control the container. But they do not control what the agent wrote inside it, when, or about whom — because the author of the record is not a person but an agent making autonomous judgments. That mismatch — the controller owning the store yet not knowing its contents — is exactly the point at which deletion becomes physically impossible to execute.

Make it concrete. A user requests, "Delete everything you've stored about me." The deployer opens the memory store. Inside, memory files derived from conversations with thousands of users are jumbled together. Which of those sentences belong to this requester? The file only holds an observation like "this user works late often" — no identifier linking it to who the user is. The instant they try to pick out precisely what belongs to the requester, they run into the fact that the information they hold cannot draw that boundary.
