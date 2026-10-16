---
title: Kolab Records Experts
subtitle: The University of Minnesota recorded 115 hours of 50 professionals at work, and experts used 65.9% of the AI
date: 2026-10-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Kolab Records Experts

_The University of Minnesota recorded 115 hours of 50 professionals at work, and experts used 65.9% of the AI_

## Executive Summary

> [!callout]
> On October 15, natural language processing researchers at the University of Minnesota released a dataset called Kolab. It holds more than 115 hours of screen recordings of 50 professionals across 40 occupations, each handling their everyday work alongside an AI agent. Most agentic benchmarks count whether a model finished a task on its own. This article looks at data that counts what happens after it finishes, once the agent's answer has reached the professional's hands.

> Of the 692 labeled instances, 65.9% of the agent's answers were used without any change. The rest were revised or dropped. When models were asked to forecast that outcome in advance, their scores collapsed. The best model reached an F1 of 0.513 against a majority-class baseline of 0.265, and showing more of the surrounding workflow barely moved the number.

> Sections 1 through 3 follow what the paper and the project page report. Two passages inside that are this article's interpretation: the place in section 2 that reads the Reject label's definition as a floor on real refusal, and section 4, where this structure is read across to the problem of how organizations record their own use of AI.

### Key Numbers

Sources: the [Kolab paper (arXiv:2610.21109, October 15, 2026)](https://arxiv.org/abs/2610.21109) and the [project page](https://minnesotanlp.github.io/kolab/).

<!-- stat-card -->
**115 hours** — of recorded professional screens — 50 professionals across 40 occupations, 100 sessions, 508 steps. More than 90 software applications appear on screen

<!-- stat-card -->
**65.9%** — of AI answers used unchanged — Across 692 labeled instances. Another 19.1% were revised first and 15.0% were discarded

<!-- stat-card -->
**0.513** — best score at forecasting an answer's fate — GPT-6 Astra's F1, the highest of six models. A majority-class baseline scores 0.265

<!-- stat-card -->
**under 0.07** — score movement from more context — Showing more of the workflow leaves macro-F1 moving less than this in most settings

## The Recording Follows the Work Out of the Chat Window

What Kolab collects is not a transcript but a screen. Professionals interacted with an agentic AI, Claude, for two one-hour recording sessions while handling their own work, and they were free to use other AI agents when appropriate. Fifty participants at two sessions each produced 100 workflow sessions, and the researchers divided them into 508 steps. More than 90 software applications turn up in the footage. Not only the tools everyone shares, such as Google Docs and Office, but tools used only in one trade, such as Revit and DaVinci Resolve.

The 50 participants span 10 sectors and 40 occupations under the O*NET classification. Even the examples the paper lists run from video editors, graphic designers and audio engineers to aerospace engineers, GIS specialists, lawyers and bioinformaticians. This is not a sample scooped out of one industry.

Not just any work was recorded. The researchers set four conditions. The problem had to originate from the professional's actual work, require the application of professional knowledge, skills or judgment from the participant's field, require a sequence of interdependent steps to reach its final goal, and result in a concrete final deliverable. Tasks lifted from existing datasets and invented scenarios were turned away. The sessions that came through that filter run to 5.2 steps on average, and a step breaks into 8.7 nodes on average.

A node stands for a single action by the person or the agent, and carries a start time and an end time. String those nodes together and one piece of work becomes a graph. Running several things at once makes the graph branch, and repeating the same action makes it loop, so work that does not travel in a straight line keeps its shape in the record.

The five-step job of an architect that the paper walks through shows the structure well. The architect uploaded an existing structural drawing and asked for a full room layout, between 24:10 and 25:28 in the recording. Claude returned a dimensioned floor plan. What comes next is the part that matters. From 58:40 to 72:59 the architect kept the zoning they liked, fixed the lobby and storage circulation, and rebuilt the walls and partitions in Revit. The paper describes that moment as an action not directly observable by the agent.

To borrow the abstract's phrasing, the judgment on an agent's contribution lands once that contribution leaves the chat window. The model cannot see how its answer was cut and pasted inside a design tool, and when the next question arrives, it arrives without that knowledge. A screen recording is the only record that holds the invisible stretch whole.

This is also where the design parts ways with existing benchmarks. Widely used agent evaluations such as WebArena and OSWorld count whether a model finished a given task on its own. What the person did with the result never reaches the scoresheet. The paper puts it plainly: strong performance on such benchmarks does not imply effective real-world collaboration.

The paper gathers the difference into a single table. It lines Agents' Last Exam, Workflow-GYM, WeaveBench, TheAgentCompany, GDPVal and DeskCraft up beside Kolab and asks five things of each. Does it capture a real human workflow, does it contain human-AI collaboration, is the software diverse, how many domains does it cover, and what modalities does it carry. Kolab is the only one with a mark in both of the first two columns. DeskCraft also carries a mark in the collaboration column, but its real human workflow column is empty. Kolab's 40 domains come third behind Agents' Last Exam at 55 and GDPVal at 44, and Kolab is the only one holding video as a modality. What Kolab carries beyond the rest is, in the end, the part that opens after the answer goes out.
