---
title: Three Showcase Cases for a Science AI Workbench, One Independent Check
subtitle: Seven weeks after launch, we sorted the cases and outside verdicts that have accumulated around Claude Science by grade of evidence
date: 2026-08-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Three Showcase Cases for a Science AI Workbench, One Independent Check

_Seven weeks after launch, we sorted the cases and outside verdicts that have accumulated around Claude Science by grade of evidence_

## Executive Summary

> [!callout]
> Seven weeks have passed since Anthropic shipped Claude Science, a workbench for scientific research. The launch post carried three named success stories, and all three said the work got faster. Exactly one of them carries a sentence saying the results were independently verified. In the other two, the person who used the tool is the person who checked it. The company said from the start that this is not a new model. It runs the same Claude that is already available, and what is new sits underneath it: an execution environment and a recording layer. This is not an occasion to allege a defect. Even inside a single launch post, evidence comes in grades.

> The outside world turned up a few things of its own in seven weeks. An independent teardown concluded that the real novelty of this product is not on screen but beneath it. A kernel holds the work state, a daemon holds permissions and history, and the lineage of every artifact is observed during execution rather than reconstructed afterward. The same teardown also recorded two limits: lineage coverage differs by language, and replaying an exported notebook is not recomputation but a playback of recorded responses in order. One independent hands-on review left a sharper scene. A saved review described a risk model built from four factors as though it were the effect of one, the lineage preserved that process faithfully, and the reviewer said nothing. The reviewer was not broken. Checked against the record, nothing was out of place. Catching the error required reading the source paper, and reading source papers is exactly the labor this tool promises to reduce.

> What, then, should be measured? Agentic science benchmarks already exist in numbers, and when the measuring is done, performance is still low. None of them, however, measures what this product actually staked. Its claim is not that it solves tasks better but that outputs carry their own evidence, and there is no scoreboard for whether the lineage is right or whether the reviewer catches consequential errors. The party that put its name on a public leaderboard was not the vendor but an open-source alternative that appeared six days after launch. Meanwhile, a recent study pooling more than 25,000 agent runs across eight domains reported that what separates performance and behavior is the base model rather than the harness, and that outcome-only evaluation cannot detect this class of failure. Traceable and sound are two different words. This report measures the distance between them.

### Key Numbers

These three numbers measure three different layers: the success the vendor reported, the capability an academic leaderboard measured, and the limit the vendor's own documentation lists. All three return later in the report.

1 of 3

named cases whose write-up  
states the results were independently verified

21.5 / 100

average for the strongest autonomous agent  
on an end-to-end autonomous research benchmark

0

Claude Science events recorded  
in the organization audit log (vendor docs)

## What's New Is Not the Model but the Layer Beneath It

When Anthropic released [Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench) in beta on June 30, 2026, it stated plainly that this is neither a new AI model nor a model tuned harder for biology. It runs the same Claude models already available today, with no special access and no gating. What the product is, and how it binds literature, databases, code, and high-performance computing into one place, was covered in [our piece written the day after launch](/report/claude-science-workbench/en/). This report starts there and moves straight to the next question. If the model is unchanged, what exactly was laid underneath it, and what does that layer guarantee?

The most concrete answer came not from the vendor but from outside it. On July 6, 2026, the technical analyst feitong.phd published a 24-minute teardown of version 0.1.15-dev and concluded that the novelty sits below the screen, not on it. The core sentence is short: the kernel holds the work state, and the daemon holds permissions and history. The chat window the user sees is a thin shell, and a separate layer remembers what may be done and what was done.

The install itself shows that structure. The signed app is 111MB, the staging daemon about 112MB, and the versioned runtime about 95MB, while the separately provisioned execution environment runs to roughly 3.7GB. Of the roughly 3.9GB total, some 95% is not application but room for computation to run. The claim that you are downloading a workbench rather than a chat app is physically visible in that ratio.

### 1.1. Code Is the Orchestration Language

Change the structure and you change how the agent works. The teardown's example is the literature review skill that ships with the product. Facing roughly 240 candidate papers, the model in this app does not make 240 tool calls. It writes one loop that runs inside the kernel and finishes in two code cells. Quality of the result aside, the shape of the transcript changes. The conversation record stays flat instead of ballooning, and the burden on whoever has to read back through what happened drops with it.

Permissions are held behind two layers. The outer layer is the SDK surface the kernel exposes, so calling a capability that does not exist raises an error. That is closer to ergonomic guidance and can be routed around. The real boundary is the inner layer, the daemon's allowlist. Reading the daemon source, the teardown confirmed that a hand-forged call pushed through is refused by the daemon. Even if the model is confused or coaxed, the permission ruling happens outside the model.

### 1.2. Lineage Is Observed Before It Is Reconstructed

The part most worth watching is how lineage gets made. The usual tool digs through logs after the work is done and pieces together what came from what. The analysis SDK in this app wraps the functions that read data and the functions that write results out. The moment a table is read, an array is loaded, or a figure is saved, the source and a version tag travel with it. This is observation during execution, not inference after the fact.

As a result, each artifact carries evidence of a different strength. Below are the four tiers the teardown laid out. Higher tiers are closer to what the machine saw directly, and lower ones closer to inference and open questions.
