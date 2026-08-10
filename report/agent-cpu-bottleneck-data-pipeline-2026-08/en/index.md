---
title: Agents Wait Longer for Data Than for the Model
subtitle: Intel
date: 2026-08-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Agents Wait Longer for Data Than for the Model

_Intel_

## Executive Summary

> [!callout]
> The AI infrastructure story of summer 2026 is fixed on GPUs and power. Just outside that frame, another axis has quietly moved. On Intel's April earnings call, CEO Lip-Bu Tan said the ratio of CPUs to GPUs used to be one to eight, is now one to four, and could move toward parity or beyond. In July the CFO added that it is almost at parity and could skew further toward CPUs on a unit basis. In the same window, Amazon CEO Andy Jassy wrote in his shareholder letter that two large customers had asked to buy all of AWS's 2026 Graviton capacity, and that Amazon had turned them down. Graviton is a CPU.

> Why CPUs, specifically? Researchers from Georgia Tech and Intel profiled five agent workloads and found that in the tool-dominated ones, up to 88 percent of runtime drained into CPU-side tool processing. Open that segment and you find retrieval, summarization, file I/O and preprocessing. Separate work shows that on long-sequence inference, tokenization alone can consume up to half of total latency, and that giving a serving stack enough CPU improves time to first token several times over without adding a single GPU. What the agent waits on, in other words, is not the model. It is data.

> Summarizing that as "we are short on CPUs" gets it wrong, though. In the same measurements, average CPU utilization during agent execution sits around 10 percent. The cores are not scarce; the data path is narrow. Cloud price lists do not back the shortage story either. The visible pressure is still on GPUs, while general-purpose instance pricing has held steady or fallen. So the conclusion here is not "buy more CPUs." It is a question: has anyone in your organization ever counted, in seconds and in dollars, the data-preparation share of your agent budget?

Four numbers carry this report. The first three point toward a bottleneck that has moved outside the accelerator. The fourth says that movement must not be read as a CPU shortage. Where those four appear to contradict each other is exactly what this piece is about.

1:8 → ~1:1

CPUs per GPU, as stated by Intel  
(Apr 2026 → Jul 2026)

up to 88%

of runtime spent on CPU-side tool  
processing in tool-dominated workloads

1.36–5.40×

time-to-first-token improvement from  
adequate CPU alone, with no added GPU

7.6–13.2%

and yet: average CPU utilization  
during agent execution

Series noteThis is the third piece in a series on AI compute resources. The first, ["The Bill for Spare Servers,"](/report/meta-compute-semiconductor-shock/en/) located the bottleneck in overestimated demand; the second, ["AI Hit a Wall This Summer,"](/report/ai-datacenter-power-wall-2026/en/) located it in electricity. This one is not about the size of the bottleneck but about its **location**.

## Some Documents Are Firmer Than Hearsay

This story began with a single scoop. On August 7, 2026, [The Information](https://www.theinformation.com/) reported that at an internal meeting in May, AWS leadership told engineers to conserve capacity by every available means. Teams were given deadlines to cut usage before year-end, and were asked to tear down idle EC2 instances they no longer needed so that the capacity could go to customers. Both AI-chip servers and CPU servers were reportedly in scope. One engineer said CPU server capacity that used to arrive within hours now takes days.

The more appealing a story is, the more honest it is to show its sourcing first. This report sits behind a paywall, and its core evidence is an account from anonymous engineers. Everything that followed, including the [Tom's Hardware](https://www.tomshardware.com/pc-components/cpus/amazon-cracks-down-on-cpu-waste-among-engineers-as-agentic-ai-crunch-intensifies-cpu-demand-makes-low-utilization-ec2-instances-a-hot-commodity) write-up, is a re-report of that same original, so no one should inflate the source count by saying "three outlets reported it." As of this report's writing on August 11, 2026, no independent confirmation from a Reuters- or Bloomberg-tier newsroom had appeared. The Information carried its own caveats: the shortfall was largely a spot-instance problem, and one consultant said there was no shortage in contracted capacity.

AWS pushed back. Nothing has changed in how it manages compute resources, the company said, and it continues to meet the "overwhelming majority" of demand from both internal teams and customers. A spokesperson described demand for its services, EC2 included, as "incredibly strong and continuing to grow," and added that reclaiming idle instances and rightsizing are long-standing practices, so reading such efficiency measures as evidence of a new capacity constraint is "incorrect."

What exactly was deniedWhat AWS denied is **the causal reading that its operating posture fundamentally changed**, not the existence of the efficiency measures. That idle instances were reclaimed and that they were reclaimed because of a capacity crunch are two separate claims, and the company contested the second. Blur that distinction and you end up misquoting both sides.

### 1.1. Why anonymous accounts are not the anchor here

Adjudicating whether that report is true is not what this piece is for, because it does not need to be. That AWS faces CPU capacity constraints stands without leaning on anonymous sourcing at all. CEO Andy Jassy wrote it down himself in his [2025 letter to shareholders](https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-2025-shareholder-letter), published April 9, 2026.

Andy Jassy, 2025 shareholder letter**Two large customers asked to buy "all" of AWS's 2026 Graviton capacity**, and Amazon declined out of fairness to other customers. AWS added 3.9 GW of new power capacity in 2025 alone, plans to double its total power capacity by the end of 2027, and spends capital 6 to 24 months before the meter starts running.

Graviton is a **CPU** that AWS designs itself. A statement that two customers wanted to buy a full year of CPU capacity outright, and that the cloud provider had to say no, is far firmer than one engineer's sense of how long queues have gotten. It is a written statement from a chief executive to shareholders. So the anchor changes here. The wait-time anecdotes quoted below stay qualitative and never make it into a table or a metric; the load-bearing weight is split between Jassy's sentence and Intel's earnings calls in the next section.

## The Ratio Intel Put on the Record

If the AWS side straddles hearsay and a shareholder letter, the Intel side is much simpler. Named executives said numbers out loud on earnings calls, and the transcripts exist. On the first-quarter call of April 23, 2026, CEO Lip-Bu Tan summarized the CPU-to-GPU ratio this way.

Lip-Bu Tan, Intel CEO, 2026-04-23"The ratio of CPU to GPUs used to be 1-to-8, and now it is 1-to-4, and I think it could move towards parity or even better."

Nail down the reading direction first. The notation runs **CPU count to GPU count**. A configuration where eight GPUs shared a single CPU became four GPUs per CPU, and then roughly one to one, which means this shift is a story about CPUs **increasing**. Flip the order and read it as "four to one became one to one" and it looks like CPUs shrank. The opposite is true.

On the same call, CFO David Zinsner broke the ratio out by workload. Training runs about seven or eight GPUs per CPU, inference three or four, and once you get to agentic and multi-agent work the direction "may invert somewhat." That is the most important sentence here, because a named CFO attributed the ratio shift to **agents**. The three months of remarks that followed point the same way. On the second-quarter call of July 23, Zinsner said the ratio was "almost in parity" and could "skew more to CPUs on a unit basis," declining to give a precise figure and citing customer spending inputs and visibility from long-term supply agreements as his basis.

Line the four statements up chronologically and the direction of travel becomes visible. The column to watch is the last one. The left-hand number is the CPU count and the right-hand number is the GPU count, so a larger left-hand share means more CPUs attached to the same number of accelerators. Moving from training to inference to agents, that share grew nearly eightfold.

| When | Statement | CPU : GPU (units) |
| --- | --- | --- |
| Past (training) | "used to be 1-to-8" / training runs 7–8 GPUs per CPU | 1 : 8 |
| 2026-04 (inference) | "now it is 1-to-4" / inference is 3–4 to 1 | 1 : 4 |
| 2026-05 (some agentic customers) | "four CPU to one GPU" — notation reversed | 4 : 1 |
| 2026-07 | "almost in parity … could skew more to CPUs on a unit basis" | ~1 : 1 |

****The CPU-to-GPU unit ratio as described by Intel executives. The third row is written in the opposite order from the rows around it, so the numbers cannot be compared directly.

How many CPUs per GPU

Each square is one unit. Orange is CPU, gray is GPU. CPU is held fixed at one; only the GPU count next to it shrinks, tracing the shift in the ratio.

Past (training)

1 : 8

2026-04 (inference)

1 : 4

2026-07 (agentic)

~1 : 1

Original Pebblous diagram — the number of GPUs (gray) attached to one CPU (orange), per Intel executive statements. The same one CPU handled fewer and fewer GPUs, from eight down to one, moving from training to inference to agentic work. Read the other way, that means each GPU now needs that many more CPUs alongside it.

That third row needs care. At the JPMorgan Global TMC Conference in May 2026, Tan said some customers now tell him it is four to one: four CPUs to one GPU. The "1-to-4" of the earlier rows and the "four to one" here are written in **opposite orders**, and this one is a secondhand account of specific customer cases. Set them side by side and read only the digits, and a reader will be confused every time. Tan attributed the remark to frontier model companies and startups telling him CPUs were more useful for reinforcement learning, orchestration across multiple agents, and workload optimization.

### 2.1. Intel's CEO named data as the reason

More important to this piece than the ratio itself is the **reason** Tan gave. Asked why CPUs matter more as you move to inference, he named three things.

Lip-Bu Tan, on why CPUs"On the inference side, in terms of **orchestration, control plane, and also managing all the different agents with data**, CPU is much more efficient."

The last of those three is where this report stands. The CEO of a company that sells CPUs named **handling data** as a driver of CPU demand. On the same call he redefined the CPU as "the orchestration layer and critical control plane for the entire AI stack." Section 4 returns to that sentence.

### 2.2. The people saying this are the people selling it

Better to fold vendor incentives into the arithmetic now rather than defer the judgment. The loudest voices on the CPU renaissance are precisely the companies that sell CPUs. Intel published its own white paper in March 2026 on "the rising CPU-to-GPU ratio in AI infrastructure," raised server CPU prices by 10 to 20 percent after March, and is reported to be planning another 8 to 10 percent in the second half. Some Xeon SKUs got more than a thousand dollars more expensive. AMD projects a $220 billion server CPU market by 2030 and uses that as its growth thesis. **A scarcity narrative justifies a price increase all by itself.**

What is interesting is that Intel also offered a different explanation. Intel VP Tasha Chuang told TrendForce that the price adjustments primarily reflected changes in manufacturing costs across the supply chain. That frames it as costs rising, not demand exploding. A demand story and a cost story coexist inside one company, which makes it premature to convert a price increase directly into evidence of a CPU shortage. What this piece takes from Intel's remarks is **the direction of the ratio** and **the fact that data was named as the reason**, not their conclusion.

## What the CPU Does While an Agent Takes One Lap

So far this is what companies say. Where the time actually goes is something you have to measure. Fortunately, people have. [arXiv:2511.00739](https://arxiv.org/abs/2511.00739), in which Ritik Raj and colleagues from Georgia Tech and Intel profiled five agent workloads from a CPU-centric perspective, is currently the paper that answers this question most directly. That two of the five authors are at Intel is worth keeping in mind throughout.

First, the citation conditions. The paper has been revised three times since its November 2025 first version, and the "up to 90.6% of end-to-end latency" line in the original abstract became **up to 88 percent** in the current v3 (April 16, 2026), where the percentage was dropped from the abstract entirely. Every figure below comes from the v3 body. And 88 percent is not an average across the five workloads; it is **an upper bound in tool-dominated workloads**. Strip that condition off in a citation and the sentence becomes false immediately.

The team ran the same workloads on two systems. Sys 1 paired a high-end CPU (Intel 6th-gen Xeon Granite Rapids) with a relatively modest GPU (RTX Pro 6000 Blackwell); Sys 2 paired a high-end CPU (NVIDIA Grace) with a high-end GPU (H200). Two things are worth reading in the table: which stage held the clock longest in each workload, and what share that stage took on each of the two systems. The workload-level results follow.

| Workload | Stage that dominated the time | Sys 1 | Sys 2 | Nature |
| --- | --- | --- | --- | --- |
| Haystack RAG | ENNS vector search | 81–83% | up to 89% | Data work |
| ChemCrow | RDKit conformer generation | 85% | 88% | Data work |
| SWE-Agent | Bash and Python execution | 25–38% | up to 65% | Data work |
| LangChain (web-augmented) | LexRank summarization | 48–55% | — | Data work |
| Toolformer | LLM inference | ~88% | — | Model compute (counterexample) |

****************Per-workload latency breakdown from Raj et al. (arXiv:2511.00739 v3). The bottom row is a counterexample to this article's thesis: in Toolformer, the 88 percent belongs to LLM inference, not to tools.

There is a temptation to delete that last row, and deleting it would make this article false. The same paper contains a case in which **the agent is not CPU-bound**. Toolformer's 88 percent is model compute, not tool processing. So the accurate sentence is not "agents are CPU-bound" but "**in tool-dominated workloads**, most of the runtime drains through the CPU side." Which category a given workload falls into is something you have to measure, and that is arguably the most practical implication of the table.

### 3.1. Upgrading the GPU made the bottleneck easier to see

Reading the Sys 1 and Sys 2 columns side by side produces the most interesting result in this piece. Swapping in the better GPU made the tool segment's share **grow, not shrink**. RAG went from 83 to 89 percent; SWE-Agent went from 38 to 65 percent. This is obvious and important at the same time. As the GPU's slice of total runtime shrank, the CPU segment that stayed exactly where it was stood out proportionally more.

That observation answers the natural objection, "won't this resolve itself once GPU supply loosens up?" As accelerators get cheaper and faster, the effect does not ease. It intensifies. One paper showed the direction with nothing more than a two-system comparison.

### 3.2. The same thing happens one layer down, in serving

If that paper works at the agent layer, the same phenomenon shows up a layer below, in inference serving infrastructure. [Chung et al. (arXiv:2603.22774)](https://arxiv.org/abs/2603.22774) catalogued three mechanisms by which the CPU induces slowdowns in multi-GPU LLM inference. The first is **tokenization**. Serving Llama 3.1 8B across four H200s with 16 CPU cores allocated, the single step of chopping text into tokens consumed up to half of total latency on long-sequence requests. The second is **collective communication sync**: when the CPU is oversubscribed, one rank arriving a millisecond late at an NCCL barrier puts all eight GPUs into a wait. The third is **shared-memory contention**, where they reported dequeue latency in the vLLM V1 broadcast queue degrading from 12 milliseconds to 228, a factor of nineteen.

The paper's practical conclusion is that this is an allocation problem. With sufficient CPU, time to first token improved 1.36 to 5.40 times **without adding a single GPU**. And real clusters are mostly allocated the other way. Across 4.65 million job scheduler records the authors analyzed, the median CPU cores per GPU on educational clusters was one to two, and on research clusters roughly 60 percent of jobs ran with fewer than eight cores per GPU.

### 3.3. What one lap looks like on a timeline

The third measurement comes from an operating-systems angle. [AgentCgroup (arXiv:2602.09345 v3)](https://arxiv.org/abs/2602.09345), from researchers at UC Santa Cruz, decomposed execution time while running 144 SWE-rebench tasks through the Claude Code harness. A single task took five to eleven minutes. Of that, LLM inference took 40 to 45 percent, tool execution 20 to 35 percent of active time, and initialization 31 to 48 percent. Grouping initialization and tool execution together, OS-level overhead accounted for 55 to 60 percent of the completion time a user actually experiences. Below, that loop is stretched out along a timeline.

The orange blocks are the data work running on the CPU. Calling tools, searching, reading files, parsing what comes back and packing it into the next prompt, and summarizing the result at the end all live there. The model itself runs in only two gray blocks: planning and replanning. Bar lengths represent the order and relative weight of the stages conceptually, not measured proportions from any one workload.
