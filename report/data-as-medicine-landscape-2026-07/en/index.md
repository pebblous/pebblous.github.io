---
title: What It Means to Diagnose Data
subtitle: Mapping the 
date: 2026-07-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What It Means to Diagnose Data

_Mapping the _

## Executive Summary

> [!callout]
> As the race between models matured, the bottleneck shifted to data. And somewhere along the way, both industry and academia started talking about data the way clinicians talk about patients. Observability tools speak of data "health." Papers claim to "diagnose" datasets. Pipelines "quarantine" and "triage" bad records. This report starts by mapping, honestly, how far that scattered medical vocabulary has actually traveled.

> Walk the landscape and one thing stands out. Most of the medical language stops at the label and the check-up. Observability tools diagnose and alert, but they do not treat the data and hand it back healed. Data-Centric AI built a philosophy of iterating on data, but it never put on the clinical coat. Academic diagnostic methods find problems, yet none close the clinical loop that runs from diagnosis to treatment and back to re-diagnosis. The seat that moves from diagnosis into treatment and back again — and does it autonomously rather than by hand — is empty.

> Pebblous DataClinic images data quality as measurable signals of density, distance, and distribution (diagnosis), trims where records overlap and fills the gaps with synthesis (prescription), then images it again (re-diagnosis). Running that clinical cycle autonomously with Agentic AI is the direction of Data Greenhouse. Pebblous did not invent data medicine. What it actually does is join the scattered pieces into a single closed loop, run it autonomously, and measure the whole thing against a standard, ISO/IEC 5259. That is the position it stands in.

<!-- stat-card -->
**7 of 9** — data observability vendors stop at diagnosis and monitoring — Only 2 claim to "treat" (full survey of observability vendors)

<!-- stat-card -->
**2005** — the canonical precedent that structured data cleaning as a diagnose-then-treat clinical procedure — Van den Broeck et al., PLoS Medicine

<!-- stat-card -->
**No precedent** — for closing diagnose→prescribe→re-diagnose autonomously as one integrated case — Each piece is mature; only the integration is missing

## Why Diagnose Data, and Why Now

For the past few years, attention in AI has fixed on the model. Bigger models, longer context, more elaborate architectures were the axis of competition. But as that race matured, the variable that decides performance quietly moved. Given the same model, what usually changes the outcome now is the data. The bottleneck has passed from model to data.

Andrew Ng is the one who put a name on that shift. He defined Data-Centric AI as the discipline of systematically engineering the data used to build an AI system. Instead of tweaking the model, hold the model fixed and iterate on the data. There is already a clinical logic inside that idea: check the state, intervene, check the state again. Diagnose, prescribe, re-diagnose.

So when people talk about "fixing" data, they reach naturally for medical vocabulary. They say the data is sick; they say they diagnose it. The question is how seriously, and how far, that metaphor actually runs. This report asks two things. How is the view of data-as-medicine scattered across industry and academia right now? And on that map, where exactly does Pebblous stand?

> [!callout]
> This piece moves in two steps. First it draws the **prior landscape of seeing data as medicine** fairly, along five threads (the vocabulary's lineage, data observability, Data-Centric AI, academic diagnostic methods, the materials of treatment). Then, on that map, it fixes **where Pebblous DataClinic and Data Greenhouse actually sit**. The rule held from start to finish: distinctiveness comes from grounding, not from marketing hyperbole.

## An Old Metaphor — The Lineage of the Vocabulary

Data quality has borrowed from the language of hygiene and medicine since its origins. Talk of "cleaning" and "scrubbing" the "dirty data" was already idiom back in the data-warehouse days of the 1990s. In CRM and security databases, the field went a step further and began treating data like a living organism, with terms like "data hygiene," "data health," and "data decay."

Most of this vocabulary, though, is idiom rather than method. Even DAMA-DMBOK, the field's standard reference, defines data cleansing operationally in terms of accuracy, completeness, and consistency, not medicine. The metaphor sits on the labels; it was never built into the methodology. The table below sorts the medical and hygiene vocabulary that has seeped into data by character.

| Term | Source of the metaphor | Character |
| --- | --- | --- |
| data cleaning / scrubbing | cleaning · housekeeping | Old idiom |
| data hygiene / health | hygiene · health · organism | Deliberate metaphor |
| data decay / viruses | biology · disease | Extension of the metaphor |
| data quarantine | quarantine · epidemic isolation | Named practice pattern |
| data triage | emergency-medicine sorting | Named practice pattern |

************

Of these, "quarantine" and "triage" have settled past metaphor into real engineering patterns. Routing anomalous records into a separate table is standard pipeline design by now, and the "sort it, fix it, let it flow again" procedure is widely used in streaming-data recovery. In short, the vocabulary of medicine and epidemiology has already been grafted onto data practice. But it lives as scattered idioms or isolated patterns; nothing yet ties them into a single, integrated clinical methodology.

> [!callout]
> **One distinction, up front.** What this piece is about is a _methodology that treats data the way medicine treats a patient_. That is a completely different subject from _the quality of medical data_. The latter is about managing electronic medical records, clinical-trial data, and patient information, where medicine is merely the application domain. This piece looks the other way: a view that transplants the procedures and instrumentation of medicine into **the discipline of handling data in general**. Conflating the two in search and citations makes the precedent look larger than it is, so this piece keeps them apart from the start.

## The Industry at the Clinic — Data Observability

The side that industrialized the medical metaphor most is the data observability business. Monte Carlo, which opened the field, coined "data downtime" by analogy to a server going down, organized data state into the "5 pillars of data health," and put "detect, resolve, prevent" on the marquee. Other vendors then adopted "data health" as product language.

Yet of the nine vendors surveyed, seven stop at diagnosis and monitoring. What they call "resolve" or "remediation" is almost always fixing an incident, a pipeline, or a job, not treating the data values themselves. Trace the real lineage of the metaphor and it lands closer to software observability (DevOps) than to medicine. "Downtime" and "uptime" are the language of servers; only "health" among them was borrowed in a quasi-medical sense. The table below sets each vendor's metaphor against its actual scope.

| Vendor | Medical metaphor | Actual scope |
| --- | --- | --- |
| Monte Carlo | "data downtime", "5 pillars of data health" | Diagnose · monitor (resolve = incident) |
| Bigeye | "health of your data" | Diagnose · anomaly detection · lineage |
| Anomalo | "First Responder Agent" | Diagnose · first response (action = handed to a human) |
| Soda | "data … fix themselves" | Diagnose + claims treatment (exception 1; parts announced, not shipped) |
| Databand | "monitors data health", "remediation" | Diagnose + auto-action (exception 2; target = pipeline) |
| Great Expectations | Almost none ("expectations") | Validation · testing |

************

Source: a full review of the official documentation of nine observability vendors (Monte Carlo, Great Expectations, Bigeye, Anomalo, Soda, Databand, Datafold, Metaplane, Acceldata). The table shows a representative six.

There are two exceptions. Soda puts treatment out front — "your data has a problem, now it fixes itself" — and Databand attaches automated action. But some of Soda's language is still at the announcement stage, and what Databand acts on is jobs and pipelines, not data values. The two moves are signals that the gap is narrowing, yet both have only reached the entrance. Screening and emergency sorting are industrialized; the operating room and rehab, treating the data back to health and re-diagnosing it, remain empty.
