---
title: AgentCIScope: AI Assistants Guard Card Numbers and Leak Your Preferences
subtitle: Researchers at Chicago, Microsoft and Illinois ran 12 AI assistants through 936 tasks: personal preferences leaked at 84.7%, credit-card data at 17.1%
date: 2026-10-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AgentCIScope: AI Assistants Guard Card Numbers and Leak Your Preferences

_Researchers at Chicago, Microsoft and Illinois ran 12 AI assistants through 936 tasks: personal preferences leaked at 84.7%, credit-card data at 17.1%_

## Executive Summary

> [!callout]
> This report takes one line of results from AgentCIScope, the agent privacy benchmark released on October 13, 2026, and reads it closely. Researchers from the University of Chicago, Microsoft Research and the University of Illinois Urbana-Champaign put 12 AI agents through 936 executable tasks, and the share of information that leaked split almost fivefold depending on what kind of information it was. Personal preferences leaked at 84.7% and booking details at 76.5%, while credit-card information came in at 17.1% and SSNs, the American counterpart to Korea's resident registration number, at 29.4%. Same models, same tasks, same runs. What differed was not the capability of the model but its default assumption about what deserves protecting.

> Where that dividing line comes from is suggested by another chart in the same study. Broken out by governing provision, the clauses violated least often are the ones that carry a **named list of sensitive data**, such as the special-category article of the GDPR or the American health-privacy statute HIPAA. The clauses violated most often are the unnamed ones, such as the general processing duties of that same regulation. A boundary drawn in law reappears intact in model behavior. The product side looks the same. According to press reports, the items Claude's memory feature says it will never store are government-issued IDs and criminal history, and the items it says it will not store by default are health, race, religion and politics. The items it says it will actively store are communication preferences and working style, which is to say, preferences. Products do not see preferences as something to guard. They see them as something to remember.

> **Everything above is recorded in the papers and the documents. What follows is this report's own reading.** The study never tested what causes the gap, and the only explanation its authors offer is a single sentence: agents are more careful with information that is conventionally recognizable as sensitive. The strongest competing explanation is format. Card numbers have a fixed length and a checksum, so detectors catch them. A table in another study published the same month breaks that explanation. Email addresses, the easiest thing in the world to catch with a regular expression, leaked most of all at 57 to 81%, while card numbers sat at 0 to 4%. A format-based account would put email next to card numbers, not at the far end. That leaves readers with one thing to check. Does the field list we wrote down as protected actually cover the things that leak, and at run time, who is handed that list?

<!-- stat-card -->
**84.7 ↔ 17.1** — Leakage rate, preferences ↔ card numbers (%) — Measured per attribute inside the same 936 tasks. Roughly a fivefold gap (§2)

<!-- stat-card -->
**32.5–94.4** — Tasks that leaked on a single run (%) — Lowest and highest of the 12 agents, not an average, and measured on tasks chosen to induce leakage (§1)

<!-- stat-card -->
**+3.8–19.3** — Added by repeating each task five times (pp) — One clean run proves nothing. Run the same task again and more of it leaks (§2)

<!-- stat-card -->
**93.8–99.3** — Task success rate of those same 12 (%) — Capability is bunched into one narrow band while leakage spreads almost threefold (§1)

## What the 936 tasks measured

AgentCIScope is a platform and an exam paper at once. It turns public privacy incidents and synthetic cases into **agent tasks that actually execute**, then records what information travels where while an agent moves between mail, documents and calendars to finish the job. The scale runs like this: 212 disclosure contracts, 936 executable tasks, and 2,771 attributes marked inside them as protected. The attribute taxonomy holds 39 types across 10 categories, and the environments number 11: Gmail, Google Docs, Slack, Salesforce, Atlassian, Calendar, WhatsApp, PayPal, Expedia, Booking and an enterprise system. Every task was run five times, leaving 56,160 execution traces.

Two things have to be laid down before any more numbers. Miss them and every figure that follows reads wrong.

### 1.1. The 936 tasks are only the ones that already made a surrogate agent leak

The first is how the tasks were chosen. The researchers did not simply use their candidate tasks. They stood up a surrogate agent, ran the candidates past it, and **kept only the cases that drew leakage out of that surrogate.** Their own sentence:

"To construct challenging privacy stress tests, we execute each candidate instance against a surrogate agent. We retain instances that elicit privacy leakage from the surrogate agent."
                        — arXiv:2610.19158 §3.3

So 32.5 to 94.4% is **a ceiling measured under difficulty raised as high as it would go**, a different quantity from an everyday incidence rate. The limitations section says as much: the benchmark gave up representativeness and went for difficulty. Nowhere does this report use the figure to mean "agents leak more than half the time." The argument here rests on the **relative gap between attributes**. That gap is a comparison made inside one and the same task set, so the screening affects it far less, and as §3 shows, a different dataset that went through no such screening produces the same ordering again.

### 1.2. The agent is never handed the list it is supposed to protect

The second point is the axis of this whole report. In this benchmark the agent is **never told at run time** what counts as protected.

"The CI contract and policies are not provided to the tested agent during execution."
                        — arXiv:2610.19158

Scoring happens afterwards. Once a task ends, a model acting as judge lays that task's contract beside the execution trace and compares them. The contract spells out the base instruction, the participants, the target environment, the protected attributes and the attributes that may be disclosed. The agent never saw that sheet of paper. **What the benchmark measured, then, is not the ability to follow a specification. It is what an agent protects by default when no specification arrives.**
