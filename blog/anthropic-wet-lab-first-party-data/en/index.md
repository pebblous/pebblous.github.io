---
title: Does an AI Company Need a Biology Lab of Its Own?
subtitle: Anthropic
date: 2026-09-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does an AI Company Need a Biology Lab of Its Own?

_Anthropic_

## Executive Summary

> [!callout]
> Anthropic is running a laboratory in the San Francisco Bay Area where physical biology experiments actually happen. Reuters reported it exclusively on September 18. Eric Kauderer-Abrams, the company's head of life sciences, confirmed it in an interview, and outlets including TechCrunch picked the story up the same day. This article looks at how a company that sells software ended up with a room that holds flasks and robotic arms.

> Very little about that room has been made public. Anthropic did not say how large it is, how many people work in it, what biosafety level it holds, or when it opened. Kauderer-Abrams was clear about two things. He believes the final test in biology still lies, and will for a while, in real lab work; and using AI to automate the execution of that lab work is at a very early stage. One half of his answer is conviction and the other half is restraint.

> Sections 1 through 4 follow what the Reuters report and Anthropic's own published documents say. Section 5 asks whether a company has to own the equipment that makes its data when that data does not exist anywhere in the world. That question belongs to this article, and Anthropic has never described its own choice that way.

### Key Figures

Sources: [Reuters, September 18](https://finance.yahoo.com/healthcare/articles/exclusive-anthropic-quietly-sets-biology-100133604.html) and Anthropic's [Model Hardware Standard research preview](https://www.anthropic.com/news/model-hardware-standard-research-preview).

<!-- stat-card -->
**Not disclosed** — Lab size, headcount, biosafety level — Reuters asked and the company did not answer. It also did not say when the lab opened

<!-- stat-card -->
**~$400 million** — Price of April's biotech acquisition — The reported all-stock figure for Coefficient Bio. Anthropic has not confirmed the price

<!-- stat-card -->
**Weeks → 8 hours** — Carnegie Mellon, from bare instruments to a finished curve — Includes the time spent writing the drivers that let the instruments take instructions

<!-- stat-card -->
**58% → 99.3%** — QuEra's laser relock success rate — 695 recoveries in 700 trials. The finished control script runs with no language model in the loop

## What Reuters Confirmed on September 18

Jeffrey Dastin and Michael Erman wrote the story. Two people familiar with the matter told them the lab existed, the company was then asked to confirm it, and an interview with the head of life sciences followed. Anthropic did not break this news itself, and it has never introduced the lab in a press release or a blog post.

Kauderer-Abrams answered briefly and plainly. "We believe that to do biology, the final test is still and will be for a while in real lab work," he told Reuters. The company is absolutely doing that today, he added, and he would describe its approach as typical of what you would see in most biotech companies: some of the work in Anthropic's own facilities, some of it with external partners.

His explanation for why the company does this in-house sits above the lab itself. "The mission of the company is to develop powerful AI in such a way that benefits the world," he said. "By far, we see the biggest opportunity for that in the life sciences, and that is motivating everything that we're doing." There are some things, he told Reuters, that Anthropic can do much faster in its own hands, with the goal of operating at the largest possible scale.

On the question of machines running the experiments, the language turned careful. "We're in the very early innings of using AI to automate the execution of lab work," he said, "an area that has the potential to bring about meaningful acceleration in so many different processes." Both halves live inside one answer: the opportunity is large and the progress is early.

The robot story has a different provenance. The line about Anthropic wanting to push how Claude can direct robotic units with limited human intervention came from two people who spoke on condition of anonymity, not from the company. A spokesperson said that human oversight and involvement are essential for safety. Wherever robotic automation comes up below, that gap in sourcing is worth carrying along.

## A Five-Month Run-Up in Plain Sight

The lab did not appear overnight. In April, Anthropic bought Coefficient Bio, a stealth biotech startup eight months old with fewer than ten employees, founded by two alumni of Genentech's computational drug design group. Media reports put the price at about $400 million in stock; Anthropic confirmed the acquisition but had no comment on the deal price. The whole team moved into the company's healthcare and life sciences organization.

In the months that followed, moves in the same direction stacked up. Anthropic released Claude Science, software built for researchers; it added Novartis CEO Vas Narasimhan to its board; and in August it previewed a specification that lets AI operate lab instruments directly. Life sciences already represents one of the company's biggest investment areas by headcount and resources, Kauderer-Abrams told Reuters. In the third week of September, news arrived three days running.

While the company said nothing about the lab, its job listings were talking. In a LinkedIn post that Reuters found, Anthropic looked for a leader who could ramp up procurement and other operations; another listing sought an expert on "protein and nucleic acid characterization"; a third read, "Our goal is to speed up progress in the life sciences by an order of magnitude." A procurement lead and a protein characterization expert are not the people a software business hires.
