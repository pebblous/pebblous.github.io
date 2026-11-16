---
title: The Calendar Still Says 2 p.m., but the AI Wrote “Updated to 4 p.m.”
date: 2026-11-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Calendar Still Says 2 p.m., but the AI Wrote “Updated to 4 p.m.”

A meeting had to go on the calendar at 4 p.m., and the first AI agent saved it at 2 p.m. The job stops there, and another agent picks it up. What should the handoff note say?

“Saved at 2 p.m. by mistake. It has to move to 4 p.m.” An agent reading that note will open the calendar. But suppose the note is tidied up into “Updated to 4 p.m.” Both of them carry the correct time. The agent that receives the second one, though, may decide there is no reason to open the calendar. The attendees' screens still show 2 p.m.

The calendar is an example used to make the point. [A study from Salesforce AI Research](https://arxiv.org/abs/2611.14654) measured this difference in two experiments.

## Telling the Right Value and Writing That It Is Done

In the first experiment the researchers froze the job right after an agent saved a wrong value. They left the saved value untouched and changed only the record handed to the next agent.

When the note said **where the error was and which value it should be**, instead of carrying no information at all, the share of remaining items the next agent got right rose from about 51% to 66%. When the same correct answer was written in **as something already saved**, the figure was 44%, below the roughly 50% of a record nobody touched. The gain also came mostly from the items the note pointed at directly. Whether marking something as an error without giving the correct answer helps was not clear in a further experiment.

Once that difference is in view, logs read differently. The next agent takes from the record not only the correct answer but also **what is still left to do**. If a summary marks that work as finished, it can hand over the right answer and still keep the place that needs fixing out of sight.

## A False Failure Report Causes Trouble Too

The second experiment ran on a database. When the write had not actually gone through, a tool response that said success left whole-task success at about 28%, below the 45% of a response that said failure. In the other direction, telling the next agent that an already saved write had failed sometimes led it to insert the same row again. The figures from the first experiment are the share of remaining items answered correctly, and the second set is whole-task success.

The same thing happens when a record is shortened. If a tool answered “request received” and the summary carries it over as “handled,” the difference between taking a request in and actually applying it disappears. In the other direction, sending the same request again the moment a timeout appears can repeat work the server has already applied.

## What to Check When a Dataset Version Changes Hands

The data work Pebblous handles carries the same problem. Say a **new version B** has been built with the duplicates removed from inspection video. Even if the job record says done, if the next training job still reads **the earlier version A**, the duplicate clips go into training as they are. What to look at here is not the word ‘done’ but **which version the next job reads**.

Carried into a test inside Agent Greenhouse, the case turns into concrete questions. When the record says done and the actual version differs, does the agent notice? After a failure response, does it avoid writing a version that has already been applied? When the actual state cannot be read, does it leave word that a check is needed? All three can be settled by looking at the store rather than at a sentence in the log.

A handoff record can be short. It does have to let a reader see **what was attempted and where, what was actually verified, and what is left**. “Updated to 4 p.m.” is the right thing to write once someone has seen the calendar point at 4 p.m.

**Further reading:** [the paper itself](https://arxiv.org/html/2611.14654v1) · [Pebblous's earlier explainer on it](https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/en/)
