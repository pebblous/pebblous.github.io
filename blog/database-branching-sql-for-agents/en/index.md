---
title: SQL Extensions That Branch a Table and Merge It Row by Row
subtitle: The Git4Data layer on MatrixOne that lets 1,000 agents split the same data at once
date: 2026-09-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# SQL Extensions That Branch a Table and Merge It Row by Row

_The Git4Data layer on MatrixOne that lets 1,000 agents split the same data at once_

## Executive Summary

> [!callout]
> A paper posted to arXiv on 2 September by six researchers at MatrixOrigin and Jianguo Wang of Purdue University proposes putting branch and merge into a relational database as SQL statements. The design treats the database as a repository and a table as a versioned object, and it goes by the name Git4Data. What makes the proposal arrive now is a change in who edits the data. A human engineer holds one snapshot and works through it in order, while a fleet of agents rummages through candidate states of the same table in parallel.

> Branching a 100 GB table took 0.20 seconds and left 314 KB of metadata behind, because nothing is copied except the list of objects the snapshot points at. Once branching got that cheap, the bottleneck moved. Thousands of speculative branches now compete for the same compute and I/O, and the authors write that the open problem has shifted from storage efficiency to resource governance.

> The first four sections below follow the syntax and the measurements the paper defines. Section 5 opens with the work the authors left unfinished, and the state of the open-source repository that follows it is not in the paper. It was checked directly on 6 September 2026.

### Key figures

Source: Gou et al., [Git4Data: Database-Native Version Control for AI Agents](https://arxiv.org/abs/2609.02106), arXiv:2609.02106 (2026), Tables 1 and 4 and Section 4.2

<!-- stat-card -->
**0.20 s** — Cloning a 100 GB table — Building the same table with INSERT ... SELECT takes 114.6 seconds

<!-- stat-card -->
**314 KB** — All the clone leaves behind — Actually copying the table costs 34 GB of additional storage

<!-- stat-card -->
**400 s** — 1,000 agents branching at once — DoltDB did not finish the same load within two hours

<!-- stat-card -->
**18.5×** — Widest gap over DoltDB — On the data cleaning workload. The authors picked the comparison

## When one agent splits a table three ways

The situation the paper opens with is data repair. A raw table holds duplicate entities and malformed fields, and there is no way to know in advance which cleaning strategy is right. So the agent does not commit to one strategy. It splits the source three ways: one branch normalizes categorical values by rule, another groups similar names to remove duplicates, and the third reads context to fix the meaning.

Run all three and no branch wins outright. Each strategy repairs a different subset of the records. The last step is therefore not picking a winner but taking the usable rows out of each branch and folding them into a single state, and what was tried, what was accepted and what was rejected all have to survive as a record.
