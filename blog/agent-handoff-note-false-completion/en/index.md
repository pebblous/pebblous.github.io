---
title: Why AI Agent Handoff Notes Have to Be Written Well — A Salesforce Research Experiment
date: 2026-11-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Why AI Agent Handoff Notes Have to Be Written Well — A Salesforce Research Experiment

A meeting has to be set for 4 p.m., but the first AI agent saved it to the calendar as 2 p.m. The work stopped there, and another agent takes it over. What should the handoff note say?

“It was saved wrongly as 2 p.m. It has to be moved to 4 p.m.” An agent that reads this note will open the calendar. But what if the note is tidied down to “corrected to 4 p.m.”? Both of them give the right time. The agent that receives the second note, though, may decide there is no reason to open the calendar. The attendees still see 2 p.m. on their screens.

The calendar is an example brought in to make this easier to follow. [A study from Salesforce AI Research](https://arxiv.org/abs/2611.14654) checked the difference in two experiments.

## Giving the Right Value and Writing That It Is Done

In the first experiment the researchers stopped the work right after the agent saved a wrong value. They left the saved value alone and changed only the record that would be passed to the next agent.

Instead of a note carrying no information, writing down **where the error was and what value it should be corrected to** raised the share of remaining items the next agent got right from about 51% to 66%. When the same correct value was written in **as though it had already been saved**, the share was 44%, below the roughly 50% of a record nobody touched. The gain also came mostly from the items the note pointed at directly. Whether marking something as an error without giving the correct value has any effect was not clear in the additional experiment.

Once this difference is in view, the way a log gets read changes. The next agent works out from the record not only the right answer but **what is still left to do**. If the summary marks that work as finished, it can write the right answer in and still keep the agent from seeing the place that needs fixing.

## A Failure Reported Where There Was None Also Causes Trouble

The second experiment ran on a database. When the save had not actually gone through, a tool response that read success left whole-task success at about 28%. That is lower than the 45% of a response that read failure. In the other direction, telling the next agent that an already saved job had failed sometimes made it insert the same row again. The figure from the first experiment is the share of remaining items answered correctly, and the second is whole-task success.

The same thing happens when a record is shortened. If a summary turns a tool's “request received” into “handled”, the difference between taking a request in and actually applying it disappears. In the other direction, sending the same request again the moment a timeout appears can carry out a job twice that the server had already applied.

## What to Check When a Dataset Version Is Handed Over

The same problem turns up in the data work Pebblous handles. Say a **new version B** of the inspection video has been built with the duplicates removed. Even if the work record reads done, if the next training job still reads the **earlier version A**, the duplicate video goes into training as it is. What has to be looked at here is not the word ‘done’ but **which version the next job reads**.

Carrying this case over into a test for the Agent Greenhouse makes the questions concrete. When the completion record and the actual version differ, does the agent notice? When it gets a failure response, does it avoid writing again a version that has already been applied? When it cannot read the actual state, does it leave a note that confirmation is needed? These three can be settled by checking the store rather than by reading sentences in a log.

A handoff record is allowed to be short. What has to stay readable is **where what was tried, what was actually confirmed, and what work is left**. “Corrected to 4 p.m.” can be written once the calendar has been seen pointing at 4 p.m.

**Reference:** [The paper](https://arxiv.org/html/2611.14654v1) · [Pebblous's earlier reading of the paper](https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/en/)
