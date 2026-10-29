---
title: GPU Cluster Fully Booked, Compute Cores Mostly Idle
subtitle: Princeton sampled its shared cluster every 100 ms for ten days, and half the jobs averaged under 5% use of their GPU compute cores.
date: 2026-10-30
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# GPU Cluster Fully Booked, Compute Cores Mostly Idle

_Princeton sampled its shared cluster every 100 ms for ten days, and half the jobs averaged under 5% use of their GPU compute cores._

## Executive Summary

> [!callout]
> A measurement of what happens inside a university GPU cluster, taken every 100 ms, is now public. Computer scientists at Princeton attached a lightweight monitoring tool of their own making to a shared cluster of 89 nodes and 319 GPUs and recorded several months of resource usage. They analyzed a ten-day window holding 7,399 jobs and posted the results to arXiv on October 26.

> More than 70% of single-GPU jobs never touched 20% of the GPU memory they were holding. The compute cores had even more slack: half the jobs never pushed them past an average of 5%. Yet on the same cluster, a single-GPU job waited in the queue for a median of nearly 22 hours. A day of waiting for a seat, and the seat stayed mostly empty.

> Sections 1 through 5 follow what this paper reports, alongside a GPU rental-price story published the same month. Section 6, which holds that you should ask at what interval a utilization number was taken before you read it, is this article's own interpretation.

### Key Figures

All four come from the Princeton team's own count across 7,399 jobs over ten days. The first three say how much capacity goes unused; the last says how long the line for that capacity is.

Source: [arXiv 2610.36329](https://arxiv.org/abs/2610.36329) (2026-10-26)

<!-- stat-card -->
**70%+** — Jobs using under 20% of GPU memory — Single-GPU jobs. Only 5% of jobs ever reached 75% of memory capacity

<!-- stat-card -->
**Under 5%** — Average compute-core use for half the jobs — Counts how many of the 108 compute cores on an A100 actually ran

<!-- stat-card -->
**29%** — Cluster-wide average GPU compute utilization — GPU memory stayed at 16%, CPU at 21%, host RAM at 17%

<!-- stat-card -->
**22 hours** — Median queue wait for a single-GPU job — Jobs asking for several GPUs waited a median of two days

## Two Numbers From the Same Month

On October 12 the Korea Economic Daily, citing the Wall Street Journal, reported how much harder GPUs have become to obtain. By the data firm SemiAnalysis's tally, the hourly cost of renting Nvidia H100-based compute under a one-year contract had risen 60% over the previous year. One qualification is worth keeping. That 60% applies to one-year contracts, and on-demand pricing, bought by the hour, moved in a different direction over the same stretch. What does not change is that whoever is locking in long-term capacity is paying more for it.

Two weeks later, on October 26, Andrew Sheinberg, Samyak Gupta, and Kai Li of Princeton's computer science department posted a paper to arXiv. Its title is "Plenty of Room in the Middle." It reports ten days of watching their own university's shared GPU cluster at 100 ms intervals.

The middle in that title is not the middle of the cluster but the middle of the computing stack. Work on making computation faster usually happens at the two ends: building faster hardware at the bottom, writing better-optimized applications at the top. The authors cite Feynman's 1960 lecture on the room at the bottom alongside a 2020 paper on the room at the top, then write that there is also plenty of room in the middle. That middle is the systems layer that assigns GPUs to jobs, sets their order, and multiplexes several jobs onto the same hardware. Much of the capacity today's clusters leave idle, they argue, can be recovered in that layer.

The two numbers do not contradict each other, and nothing here says the shortage is overblown. The paper's opening paragraph takes the shortage as given: high cost and growing demand make for long queueing delays on GPU clusters. That delay was measured on this cluster too. A job requesting a single GPU waited a median of nearly 22 hours, and jobs requesting several waited two days.
