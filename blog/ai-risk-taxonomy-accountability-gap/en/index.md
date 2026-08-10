---
title: AI Risk Taxonomies That Name No One
subtitle: An AIES 2026 paper interviewed 25 practitioners and found two design flaws behind the gap
date: 2026-08-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Risk Taxonomies That Name No One

_An AIES 2026 paper interviewed 25 practitioners and found two design flaws behind the gap_

## Executive Summary

> [!callout]
> The catalogue of harms AI can produce has more than doubled over the past two years. Yet anyone who has carried that list into a meeting gets stuck at the same place every time. You can work out which of the risks are yours; what nobody has written down is who has to stop each one, and at which stage.

> A paper posted to arXiv in August 2026 and due for presentation at AIES 2026 gives two reasons. They come out of interviews with 25 practitioners working in industry, academia, nonprofits, and government. The judgment calls made while building a taxonomy stay invisible to the people who use it, so the list reads as a complete inventory. And entries are not tied to any specific decision or responsible party, which makes accountability hard to trace. The authors' conclusion is that no governance framework yet exists to carry that link.

> Neither flaw is unfamiliar in data work. A schema with no record of where its definitions came from, and a catalog whose lineage has been cut, run into exactly the same thing in front of an auditor.

### Key Figures

The first three numbers are gains from the past two years, made on the side of widening the list and sharpening measurement. The last one is the box that is still empty where those gains would have to meet an organizational decision.

Sources: [MIT AI Risk Repository](https://airisk.mit.edu/), [Eticas AI Risk Taxonomy v3.0.0](https://arxiv.org/abs/2607.02201), [Berman et al., arXiv:2608.06831](https://arxiv.org/abs/2608.06831)

<!-- stat-card -->
**777 → 1,700+** — AI risks listed in the repository — MIT AI Risk Repository, between August 2024 and December 2025

<!-- stat-card -->
**43 → 74** — Frameworks that list draws on — That many new taxonomies were built over the same period

<!-- stat-card -->
**84%** — Privacy leakage measured under adversarial conditions — Eticas ran the test on GPT-4-0314 and assigned grade E

<!-- stat-card -->
**None** — Layer linking entries to owners and decision points — The conclusion 25 practitioner interviews arrived at

## The List Thickens, the Owner Column Stays Empty

Gathering AI risks into one place has gone well in recent years. The MIT AI Risk Repository started in August 2024 as a database that read 43 frameworks and coded 777 risks, and its fourth revision, published on December 4, 2025, raised that to 74 source frameworks and more than 1,700 entries. It carries a causal taxonomy explaining how and why a risk arises alongside a domain taxonomy of 7 domains and 23 subdomains, and every entry comes with its source paper, the quoted sentence, and a page number. As a list, there is little to fault.

What is empty is the right-hand side of each row. Once you decide that a given risk applies to your organization, nothing in the list tells you who owns it, at which stage of development it should be caught, or what the person who waved that stage through relied on. The list tells you what is dangerous, and stops there.

A study that dug empirically into the place where the list stops went up on arXiv on August 7, 2026. Written by Glen Berman and co-authors and due for presentation at AIES 2026, it interviewed 25 practitioners who build or use sociotechnical outcome taxonomies, spanning industry, academia, nonprofit organizations, and government. The authors' central finding is that these taxonomies are only minimally embedded in actual governance practice, and they point to two design factors as the cause.

## The Choices Behind the List Vanish

Building a taxonomy is closer to editorial work than it looks. Every entry requires a call: whether a given harm stands on its own, whether two similar harms fold into one, what level of abstraction to cut at, whether to include a risk whose evidence is still thin. Those calls accumulate into the shape of the list.

The first flaw the paper identifies is that those calls stay opaque to the end user. Someone who receives only the finished product mistakes a bundle of categories for a complete risk inventory. Entries on the list become things to check, and whatever is not on it quietly drops out of the conversation. The builders offered an interpretive aid framed from a particular perspective, and the recipients read an exhaustive checklist. That mismatch is where the trouble starts.

Data practice has a name for the same mismatch: schema documentation. If nobody records who defined a column, when, and on what grounds, the person who inherits that table months later guesses the meaning from the column name. Whether a validity window is measured from collection time or from posting time, whether a missing value was backfilled with zero or is a real zero, gets absorbed into the definition line and disappears from view. The schema stops being an aid to interpretation and starts being an indisputable definition, and when the definition turns out to be wrong there is no point to return to.

The fix is not hard. Write the reasoning and the scope next to the entry. One paragraph stating what the list was built to cover, what was deliberately left out, and where it should not be applied is enough to change how a reader approaches it. None of that is hard to write. What is hard is accepting that the list was not the end of the job.

## Entries Never Reach a Decision

The second flaw is more direct. In the paper's own terms, taxonomies largely enumerate harms without connecting them to specific decisions or responsible parties. When a risk on the list becomes real, the list gives you no way to work backward to the person who should have caught it.

The diagram below shows what that break looks like in practice. The boxes on the left hold well-organized risk entries, filled in with an entry name, a definition, a source, and a severity rating. The boxes on the right hold procedures that genuinely leave a date and an approver behind, like signing off on data collection or on a model deployment, and only the owner field is blank. The dotted line in the middle is the state of the two sides not referring to each other. For that line to become solid, each risk entry would need to say at which stage it gets reviewed and which role clears that stage. Today's taxonomies do not have that column at all.
