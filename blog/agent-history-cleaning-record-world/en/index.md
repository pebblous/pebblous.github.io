---
title: Agent History Cleaning Helps Only When the Error Is Gone From the System
subtitle: Attach a note to a stalled agent
date: 2026-11-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Agent History Cleaning Helps Only When the Error Is Gone From the System

_Attach a note to a stalled agent_

## Executive Summary

> [!callout]
> When an AI agent stops in the middle of a job and the work passes to another model, tidying up what the first one left behind is supposed to make the handoff easier. Salesforce AI Research put that assumption through an experiment, and the direction of the result flipped depending on how the tidying was done. The paper went up on arXiv on November 10, 2026. The design is plain. Freeze the state right after the agent writes a wrong value into persistent storage, change only the record, leave the actual world untouched, and hand the rest of the job to a different model.

> The sharpest part is that both edits put the same value into the record. Leave the wrong value where it is and attach a note saying this action was wrong and here is the right value, and recovery climbs from 51% to 66%. Rewrite that same correct value as an action the agent has already carried out, and recovery falls to 44%. The presence of the answer inside the record predicts neither the size of the effect nor its sign. The gain is also narrow. Most of the 15-point rise came from the single cell the note named.

> Sections 1 through 4 carry figures and terms taken from the body and appendix of the paper posted on arXiv. Section 5, which reads the result against data workflows that run log compaction and conversation summaries, is this article's own interpretation.

### Key Figures

The first two numbers show how far the way a record is written can push recovery. The last two measure how much the same sentence's worth changes with the world.

Source: [arXiv:2611.14654](https://arxiv.org/abs/2611.14654), Sections 4 and 5.

<!-- stat-card -->
**51% → 66%** — Recovery when the answer arrives only as a note — The wrong value stays in both the record and the world

<!-- stat-card -->
**44%** — Recovery when the same answer is written in as handled — Below the 50% baseline of a record nobody touched

<!-- stat-card -->
**45% → 28%** — Whole-task success when a success receipt meets a world with no write — The same receipt reaches 49% when the write is there

<!-- stat-card -->
**27 points** — How far the worth of one receipt swings with the world — The interval clears zero at the 97.5% level

## An Agent Leaves Two Things Behind, a Record and a World

When an agent stops mid-job, two things are left. One is a line-by-line account of what it meant to do, which tools it called, and what the system answered back. The other is the state those actions actually changed: rows that went into a database, values that were committed, files written to disk. The paper calls the first a record and the second a world, and those are the words used here.

Nothing guarantees that the two point at the same thing. A record is a document that describes a world, and editing a document does not change what the document describes. The paper's principle follows from that. Whether an edit to the record helps or hurts is settled not by what was added to it, but by whether the world still holds the error.

▲ Pebblous original diagram. It shows where record and world pull apart. | Source: [arXiv:2611.14654](https://arxiv.org/abs/2611.14654)

The experiment runs in five steps. Freeze the whole state right after the agent commits a wrong value to persistent storage, swap the record for a different version, restore the world exactly as it was frozen, hand it to a receiver model, and count how much of the remaining work that model sets right. Edits come in three kinds: revealing something the original record did not carry, concealing something it did, or asserting something that was never true.

That the receiving side is not the author of the record is also part of the design. The frozen states are trajectories other models produced in earlier work, so the model picking the job up is mostly reading someone else's record for the first time. That matches the practice of passing a long session between models. The authors are six researchers at Salesforce AI Research, and they released the code, the configuration, and even the sentences used in the edits as ancillary files. Both benchmarks are pinned to a commit and a package version.

## The Same Correct Value, Written Two Ways, Splits the Result

The first experiment ran on AgentCE-Bench, a tool-using environment built in earlier work, where an agent fills the empty cells of a grid one at a time. Hidden values can only be learned by calling a tool, and a value written into a cell lands in persistent state. The paper's example is a weekly plan: find a meal or a venue for one square and fill it in. Of 320 frozen states, 319 were used. Each one is the moment right after the agent wrote a wrong value at the two-thirds mark of the task. The one state where the agent corrected itself was dropped.

Four edits were applied to the same scene. The last two put an identical correct value into the record and differ only in what carries it.

- Change nothing. The wrong value stays in both the record and the world, and the correct one is never mentioned.
- Attach a neutral note with no content. A control matched for position and length.
- Leave the wrong value in place and write plainly that this action was wrong and the right value is this one.
- Rewrite the record so the agent itself appears to have handled that cell correctly already. What would have been a note beside the work becomes something the agent itself did.

The score is recovery: the share of the first three unfilled cells in the receiver's look-ahead that it fills correctly inside a 24-step budget. Both experiments use gpt-5.5 and claude-sonnet-5 as receivers, and the figures for the four conditions pool those two.

▲ Pebblous original diagram. The four recovery figures the paper reports, placed on one axis. | Source: [arXiv:2611.14654](https://arxiv.org/abs/2611.14654)

The honest note sits 15.20 points above the control, with a 95% confidence interval from 12.46 to 18.00. The record written as completed sits 6.43 points below the untouched one, with an interval from −8.88 to −3.97. The paper had registered the gap between those two effects as its primary estimand, and it came to 21.63 points, interval 18.21 to 25.08. That the empty note was indistinguishable from doing nothing belongs in the same reading. What moved the result was not that a note was present but what the note said.

The honest note and the completed-action record both carry the same correct value inside the agent's own tool call. If a receiving model worked by copying whatever value it sees, the version written as completed ought to do better, since the value it needs to write is already sitting there as a finished sentence. It finished more than 20 points behind instead. That the answer is in the record tells you neither how large the effect will be nor which way it will go.

> [!callout]
> The explanation the paper reaches for splits the record into two functions. A record hands over values, and it also signals that work remains. The honest note says the wrong value is still sitting over there, which lifts the remaining work into view. The record written as completed hands over the same value while saying this cell is finished. A model taking over does not reopen finished work. The paper calls this the map account: the record is read as a map of what is left, and a cell marked done is not visited again. The rival picture is the repair account, where the agent notices the wrong value and fixes it, something models do poorly unaided. The authors lean toward the map account without closing the question.

The size of the gain comes with a caveat. Of the 15.20 points, 11.57 arrived at the very cell the note named, and the remaining cells added 3.63. In the 47 states where the note named no cell at all, the direction was unresolved. An honest record reads less like a lift in the quality of the whole job and more like a pointer to one named error.

## The World Decides What a Success Receipt Is Worth

The second experiment turns the direction around. The stage is AppWorld, where an agent handles user requests in Python over a populated database that mimics real application APIs, and the grade is whether the whole task finished correctly. This time the record was held fixed and the world was varied both ways.

The freeze point is right after a step that writes to the database. Two things are varied separately there. One is the receipt that lands in the record: either the write step carries a success response, or it carries a fixed one-line error saying the operation did not take effect and no application data was changed. The other is the world: the write either reached the database or it did not. Only two of the four cells hold a receipt that matches the world, and in the other two, record and world say different things.

| Receipt in the record | No trace of the write in the world | Write present in the world |
| --- | --- | --- |
| It succeeded | 28.46% | 48.85% |
| It did not take effect | 45.38% | 38.46% |

▲ Whole-task success measured across the four combinations of receipt and world. | Source: [arXiv:2611.14654](https://arxiv.org/abs/2611.14654)

Hold the world fixed in one column and compare the two receipt rows, and the work a success receipt does comes out. With no trace of the write in the world, the success receipt cut success by 16.92 points, with an interval from −24.62 to −9.62. With the write present, the same receipt lifted it by 10.38 points, interval 3.46 to 17.69. The distance between those two effects is 27.31 points, interval 14.23 to 41.54, which clears zero even at the 97.5% level. The two cells where receipt and world agree differ by only 3.47 points. What separates the scores is not the sentence in the receipt but whether that sentence matches the world.

The scale is 65 task families, 638 complete four-condition blocks, and 2,552 continuations. Widening the receivers to eight, six pointed the same way at the 97.5% level and seven did at 95%, and the widest gap reached 43.65 points. One model's direction was unresolved.

Re-issuing that write step is a diagnostic the paper had registered in advance, and it tracked the world rather than the record. Taking only the runs that received a success receipt, 52.69% re-issued the step when the world held no trace of the write, and that fell to 10.38% when the trace was there. The gap is 42.31 points, interval 32.69 to 51.92. Whether the receipt sentence itself moved this rate split by model: it moved in one and was unresolved in another. The numbers fit a receiving model that reads the world and moves with what it finds better than they fit one that trusts the record and skips the check. Even so, with no trace present, close to half did not re-issue the step, and in that share the wrong state hardens into place.

The opposite cell is cut for a different reason. When the write did land and the receipt says it failed, the model does the same work once more. Among the 40 of 65 task families that insert a row into the database, one receiver given a false failure receipt wrote the same row again in 51.25% of its continuations, against 3.75% under a true success receipt. That is where a failure receipt pulls success down to 38.46% in a world that already holds the write.

> [!callout]
> Whether a receipt is true or false is not written inside the receipt. The same line saying it succeeded helps in one world and takes 27 points off in another. The quality of work done on a record cannot be judged from the record alone.

## Log Compaction and Conversation Summaries Touch Only the Record

The paper's related work puts three practices in its sights. The first is compaction: when context runs long, failed attempts are quietly removed to make room. The second is repair, which covers rollback and replay, where record and world are wound back together. The third is handoff, choosing what to show the next model on top of a frozen store.

Of the three, this paper's result bears on the first and the third. Repair winds record and world back together, so it never creates the situation where the two drift apart. Compaction and handoff work on the record alone. Deleting a failed attempt does not delete the row that attempt left in a database, and a step a conversation summary shortens to setup is done may in fact be only half applied. The conditions that produced this paper's 44% and 28% are that same shape rebuilt in a lab. The record is not the only thing that goes out of step when paused work is resumed later. Cases where the model and the index change while the job waits, so that the same words come to mean something else, are covered separately in [semantic isolation for long-running AI workflows](/blog/agent-semantic-isolation/en/).

The authors wrote down a fair number of limits themselves. The content of a note and the channel it arrived through were not pulled apart. Models trained to act after long reasoning tend to trust a note more when it looks like an instruction from the user, and that channel effect is mixed in with the content effect. AppWorld's receipts also vary in content and in truth at the same time, so the two effects were measured together. Of the eight receiver models, the ones carrying the main result are a minority, and two preregistered analyses were replaced by reimplementations after a sealed script would not run again. A nine-condition control meant to separate whether the completed-action record works by revealing the answer or by pointing at a cell did not make it to the end either. Of 4,320 planned units, 4,068 were collected, and specificity was unresolved at the 3-point margin set in advance.

The edits and the states were chosen by the researchers too. What happens when someone sets out to falsify a record on purpose is not something this experiment answers. The 6.43-point drop the completed-action record produced is a size that well-meaning summarizing and compaction can also produce. How far a party trying to deceive could push a record is left to be measured separately.

## Why Pebblous Is Watching This Result

In data quality work, cleaning is mostly understood as deleting. Fill the missing values, strip the duplicates, drop the failed logs. The premise that the cleaner version is the more usable one rarely comes up for testing. The condition this paper adds touches that premise. As long as the thing a record describes is still sitting out there unchanged, a cleaned record is not help but a document at odds with the facts.

The split between record and world is not a strange idea in data work. Source and derivative, logs and actual system state, catalog metadata and what is really in storage all share the same structure. Quality checks usually look at one side only: whether the logs are consistent, whether the schema matches, what percentage is missing. This paper puts a different question. It asks whether the record still lines up with the thing it claims to describe.

For anyone designing record cleaning while bringing AI agents into the work, three items belong on the checklist.

- Mark instead of deleting. Rather than stripping a failed step out, write down that it failed. The condition that lifted recovery gave the answer and left the wrong value where it was. The one that wrote the same answer in and covered the wrong value over as finished work fell below the baseline.
- Keep summaries from declaring completion. The sentences a conversation summary or a context compaction shortens to handled have the same shape as the completed-action record. Write confirmed completion and assumed completion in different words.
- Read the world once before handing over. A single step that checks whether a write the record calls a success actually survived in storage produces information no amount of careful record editing can create.

One question is left. That failure stripped out of the log, that step a summary shortened to a single line, is it still alive somewhere in the system? If it is, the cleaned record is a wrong map handed to the next person or the next model. This paper put numbers on how much further a model following that map goes wrong.

## References

- 1.Pakhomov, E., Koul, A., Liu, H., Pang, B., Joty, S., Nijkamp, E. (2026). "[Cleaning an Agent's History Hurts When the World Still Holds the Error](https://arxiv.org/abs/2611.14654)." arXiv:2611.14654 (Salesforce AI Research).
