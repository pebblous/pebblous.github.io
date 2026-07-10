---
title: The Open-Source Project That Purged AI-Generated Code From Its Dependency Tree
subtitle: A 100-hour dependency audit cost git-annex future language upgrades
date: 2026-07-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Open-Source Project That Purged AI-Generated Code From Its Dependency Tree

_A 100-hour dependency audit cost git-annex future language upgrades_

## Executive Summary

> [!callout]
> Over the past month, git-annex developer Joey Hess spent roughly 100 hours combing through his project's entire dependency tree. The goal was a single one: to be able to say that nowhere in his software, or the libraries it leans on, is there any LLM-generated code. This article looks at what that audit found, what it cost, and why it is not someone else's problem for anyone who works with data.

> The trigger was not quality but copyright. What he ran into during the review was a rambling 1,489-line commit message, a large change silently reverted in a later release with no explanation, and copy-paste that lifted another project's code verbatim, leaving a copyright-infringement risk behind. The problem was not "AI code is bad" but "you cannot tell after the fact what actually came in."

> And this principle came with a price tag. To keep this purity, git-annex had to cut itself off from most Haskell language improvements after GHC 9.15. Even the author himself admitted that being permanently severed from the language's future might be worse than leaning on LLM code.

<!-- stat-card -->
**~100 hrs** — Dependency tree audit — One person, over the past month

<!-- stat-card -->
**1,489 lines** — Problem commit message — Over 10,000 lines of code changed

<!-- stat-card -->
**6** — Tainted sub-dependencies — GHC·ram·persistent·yesod·Cabal·git

<!-- stat-card -->
**GHC 9.15+** — Language improvements forgone — git-annex supports only up to 9.6.6

## 100 Hours of Code Archaeology

git-annex is a mature open-source project, nearly 20 years old, that manages large files with git. What developer Joey Hess did over the past month was not build a new feature. It was to trace back through every piece of code his project relies on, by hand, hunting for where LLM-written code had slipped in. He wrote that this took him close to 100 hours.

![Official Git logo — the version control system git-annex builds its large-file management on top of](./image/img-01-git-logo.svg)
*▲ git-annex layers large-file history management on top of Git | Source: [Official Git logo, Jason Long (CC BY 3.0)](https://commons.wikimedia.org/wiki/File:Git-logo.svg)*

- •**A 1,489-line commit message.** A single change of more than 10,000 lines landed in a 26,000-line codebase, and the commit message describing it ballooned to a barely readable 1,489 lines. What changed, and why, actually grew murkier inside the message.
- •**A large patch quietly reverted.** A big LLM-generated change had been restored to its original state in a later release with no explanation. Neither when it arrived nor when it disappeared was the reasoning left in the record.
- •**Copyright infringement avoided by luck.** There was also a copy-paste attempt that lifted another project's code almost verbatim and nearly became copyright infringement. It was caught not because a rule blocked it, but because someone noticed after the fact.

> [!callout]
<!-- stat-card -->
**The cases he actually encountered along the way had a different flavor from the "is AI good at writing code" debate. What he documented boils down to three things.** — The problem running through all three cases is not the quality of the code. It is that **you cannot trace, after the fact, what came in, when, and why**. Code with murky copyright slips in through the gaps in the record, and slips back out just as quietly. Joey Hess spent 100 hours not because he distrusted the code, but because its provenance could not be proven.

## A Build Flag, Not a Guarantee

The output of the audit was not a manifesto but a single build option. git-annex introduced a build flag called `NoLLMDependencies` (stack users get a separate configuration file). Building with this option pins the software to versions of its dependencies from before LLM-generated code entered them. There is now an actual thing that someone who wants an "AI-code-free git-annex" can hold in their hands.

What matters is what this flag **does not guarantee**. First, it is not the default build. Only someone who explicitly turns the option on gets that state. The heavier problem is security. If a vulnerability was fixed only in a newer version, this build, pinned to older dependencies, carries that vulnerability along with it, missing the security patch.

> [!callout]
> So this is not "complete safety" but **a selectable trade-off**. It is a mechanism that makes users choose for themselves which they can better tolerate: the risk of AI code entering, or the risk of delayed security patches. In git-annex's own words, LLM-generated code in free software is a "potential landmine," and its copyright status is an "unresolved problem."

## Dependencies as a New Attack Surface

Even if git-annex itself writes not a single line of LLM code, the problem rises up from below. What the audit revealed is that several sub-dependencies have already begun to include LLM-generated code. The packages the official documentation named, and when, are specific.

![Official Haskell programming language logo — GHC, ram, persistent, yesod, and Cabal, most of the contaminated sub-dependencies, belong to this ecosystem](./image/img-02-haskell-logo.svg)
*▲ Most of the confirmed contaminated sub-dependencies belong to the Haskell ecosystem | Source: [Official Haskell logo (Public Domain)](https://commons.wikimedia.org/wiki/File:Haskell-Logo.svg)*

- •**GHC** — from 9.15 (git-annex supports only up to 9.6.6)
- •**ram** — from 0.21.0. Instead of this library, git-annex chose to keep using **memory**, the unmaintained original it was forked from.
- •**persistent** — from 2.15.0.0, **yesod** — from 1.7.0.0, **Cabal**, and **git** — from 2.53 (git-annex supports only up to 2.22)

## The Price of Purity

<!-- stat-card -->
**What this list says is clear. One project's cleanliness hinges on decisions made by hundreds of sub-packages it cannot control. No matter how careful I am, if a library I rely on changes its policy, the contamination flows back in. This is the moment AI-generated code stops being a per-file problem and becomes **an attack surface across the whole supply chain**. git-annex's fallback to an aging library like memory was one of the few detours it could take in the face of that helplessness.**

The most honest part is that the author calculated the price of this principle himself and made it public. Since LLM code entered GHC from 9.15 and git-annex has decided to support only up to 9.6.6, git-annex can no longer use most of the Haskell language improvements that come after that. It has detached itself from the direction the compiler is moving in. The author called this situation "deeply unfortunate."

> [!callout]
> He goes one step further and admits the limits of his own principle: being permanently severed from the language's future might actually be worse than leaning on LLM code. That is why he stated he "cannot promise to keep this principle going forward." He declares his purity, and in the same breath acknowledges that this purity may one day become the greater loss.

The community reaction was split, too. Some saw it as an overreaction; others voiced support and interest. Among anti-AI-leaning developers, there was mention of informal efforts to track the "last uncontaminated version" for various projects. Not yet comprehensive, but a signal that this unease is not one person's idiosyncrasy.

## Code Provenance = Data Provenance

This is where this episode stops being someone else's problem for anyone who works with data. Reduce the question git-annex wrestled with to a single line and it reads: "Can you prove, after the fact, who or what produced this artifact?" Swap the word code for data and the sentence still holds.

The [Amazon Mechanical Turk shutdown](/blog/mechanical-turk-sunset-data-provenance/en/) that Pebblous covered recently had exactly the same structure. In crowd work believed to be labeled by humans, one study estimated that 33–46% of workers actually handled tasks with an LLM. The moment the provenance of "human labels" is lost, trust in that data collapses before quality is even up for debate.

> [!callout]
> Whether in code or in data, the same pattern repeats. **Once the provenance of the producer disappears, trust collapses before quality verification.** git-annex having to belatedly spend 100 hours retracing its steps, and Mechanical Turk making the true author of a label unknowable, were both the price of not recording provenance from the start.

## The Pebblous View

Joey Hess did not frame his 100 hours as a one-time audit. Dependencies keep updating, and fresh contamination can flow in again with the next release, so he nailed down that this review is a maintenance burden that must be repeated. This is the core of what the case shows in miniature from an AI-Ready Data perspective.

Keeping the lineage of data and models provable works the same way. It is not a feature you verify once and finish, but a cost you keep paying for as long as data flows. What git-annex handled with one person's hands and 100 hours — in an organization-scale data pipeline, who will handle it, with what automation, on what cadence?

> [!callout]
> So the question this article leaves is not "should we use AI code or not." It is **who will share the cost of maintaining provable provenance, and how**. Whether code or data, the price of restoring provenance later is always higher than the price of recording it from the start. git-annex's 1,489 lines and 100 hours simply showed the invoice in advance.

## References

### Primary Sources

- 1.Hess, J. (2026). "[no LLM code in dependencies](https://joeyh.name/blog/entry/no_LLM_code_in_dependencies/)." joeyh.name.
- 2.git-annex. (2026). "[no_llm_code](https://git-annex.branchable.com/no_llm_code/)." git-annex.branchable.com. (Official policy document — the NoLLMDependencies build flag and the list of affected dependencies.)

### Community & Coverage

- 3.Hacker News. (2026). "[No LLM code in dependencies — discussion](https://news.ycombinator.com/item?id=48762008)." news.ycombinator.com.
- 4.Lobsters. (2026). "[No LLM code in dependencies — discussion](https://lobste.rs/s/oe8pxn/no_llm_code_dependencies)." lobste.rs.
- 5.Daily AI Digest. (2026). "[Daily AI Digest — 2026-07-03 archive](https://dailyaidigest.net/archive/2026/07/03/)." dailyaidigest.net.
