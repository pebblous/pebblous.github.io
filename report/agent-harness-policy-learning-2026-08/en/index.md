---
title: Learning the Teacher
subtitle: Meta AI and UIUC
date: 2026-08-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Learning the Teacher

_Meta AI and UIUC_

## Executive Summary

> [!callout]
> EvoHarness-RL, released on 5 August 2026 by a joint team from Meta AI and the University of Illinois Urbana-Champaign, trains an agent to decide when to read and write its own external workspace instead of having a human specify that in a prompt. Three kinds of external state face the policy directly: what the agent believes about the environment, how far it has gotten, and what it learned in earlier episodes. Four actions that reach those states sit in the same action list as opening a drawer or picking up an object. The whole design starts from one decision: a call to the harness costs the agent a step.

> The headline number came from layouts the model had trained on. The values worth weighing come from the layouts it had never seen, and there are three of them. Given the harness through a prompt alone, the model scored 77.6%. After supervised fine-tuning on a teacher's demonstrated harness use, it scored 69.4%. After reinforcement learning that charged for every call, it reached 86.6%. Faithfully copying the teacher turned out to be a liability in an unfamiliar room. That supervised imitation memorizes while reinforcement learning generalizes already had a name by early 2025, and this paper shows the same pattern holding for a new object: the policy that governs harness use.

> The training data came from running 500 games with a teacher model and keeping only the 87 episodes that succeeded. The habits packed into those 87 were stripped away one by one during reinforcement learning, and the first to go were the two the teacher had demonstrated most: committing progress and writing notes. Nobody wrote a rule about what to keep and what to drop. A cost signal was introduced and the model settled it. The caveats are real, though. The only environment is ALFWorld, and on its unseen split a plain supervised baseline from another lab already sits above 94%. The authors themselves state in an appendix that this should not be read as a universal law of harness use.

<!-- stat-card -->
**47.9% → 96.9%** — Success rate on the seen split — Qwen3-8B. Claude Opus 4.5 with plain ReAct scores 96.4% in the same table

<!-- stat-card -->
**77.6% → 69.4%** — The drop on unseen layouts after imitation — 8.2 points below the prompt-only harness. RL brings it to 86.6%

<!-- stat-card -->
**87** — Trajectories kept out of 500 games — Only successful episodes, yielding 1,153 dialogue pairs

<!-- stat-card -->
**~1 call** — Harness calls per episode after RL — Down from the frequent calls of the SFT checkpoint, while success kept climbing

## A policy takes the place humans used to write

A harness is the working apparatus an agent keeps outside the model. Files that survive a session ending, a progress log the next session reads first, a note recording what worked last time. We covered the concept itself in [the PebbloPedia entry on harnesses](/pebblopedia/harness/en/). Until now, when to read and when to write that apparatus has been decided by a human writing sentences.

What that looks like in practice is visible in the one industry document this paper cites. It is Anthropic's engineering post on harnesses for long-running agents (Justin Young, 26 November 2025). The harness it describes runs like this. An initializer agent, which runs only in the first session, creates an init.sh script, a claude-progress.txt log, and an initial git commit, then expands the user's request into a JSON file of feature requirements. In the claude.ai clone example that file holds over 200 features, all marked as failing to start. Each coding agent works on one feature at a time, commits when done, and leaves a structured update in the progress file. A fresh session rebuilds its own picture of the work from the git history and that file.

The human experimentation goes all the way down into the details. The same post explains the choice of JSON for the progress artifact by noting that the model is less likely to inappropriately change or overwrite JSON files compared to Markdown files. The instruction that it is unacceptable to remove or edit tests is written into the prompt verbatim. The diagnosis that compaction alone is not sufficient is in the same post. Even in a state-of-the-art harness driving a frontier model, what gets written and read, and when, is ultimately specified in sentences a person wrote.

And those sentences go stale when the model changes. The same company supplied the example four months later. Claude Sonnet 4.5 tended to wrap up work prematurely as it sensed its context limit approaching, a behavior the team called context anxiety, and they added context resets to the harness to counter it. When they ran the same harness on Claude Opus 4.5, the behavior was gone. Anthropic's own words for the resets at that point: they had become dead weight. Every component in a harness encodes an assumption about what the model cannot do on its own, and those assumptions can go stale as models improve. That is the company's own summary.

EvoHarness-RL has the policy learn those assumptions rather than having a human rewrite them. It sorts external state into three strands, puts them in front of the policy, and adds one action per strand to the same list the environment actions live in.
