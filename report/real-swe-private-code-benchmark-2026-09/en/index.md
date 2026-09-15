---
title: Would that score hold up on your own codebase?
subtitle: Real-SWE built its tasks from private production code licensed from real companies, and across eight models and 640 rollouts the top score was 38.8%
date: 2026-09-15
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Would that score hold up on your own codebase?

_Real-SWE built its tasks from private production code licensed from real companies, and across eight models and 640 rollouts the top score was 38.8%_

## Executive Summary

> [!callout]
> This report looks at what coding agents score on code that sits inside a company, rather than on somebody else's open source. A young evaluation startup licensed production codebases from real firms, cut tasks out of them, and ran eight models, each on the tooling its own maker ships. The strongest combination did not clear four attempts in ten, and the average resolution rate across all eight was 26.9%.

> The failures have a shape. Breaking behavior that already worked, or delivering the change to a file the running application never calls, accounted for about one failure in twenty. The rest were runs that left out behavior the instruction required, wired a sound idea into the surrounding system incorrectly, or built on a guess about the system that nobody checked in the workspace. The result table is still not a model ranking. Ten tasks carry all eight rows, the confidence intervals of the top four overlap each other, and every row used a different execution harness, so model skill and tool skill never come apart.

> The company that wrote this exam also runs a second page that puts a price on other companies' code. The working capital of a benchmark company is not its algorithm. That leaves anyone weighing an agent with a single question: where did that score come from?

<!-- stat-card -->
**26.9%** — Average resolution rate over 640 rollouts — The best of the eight combinations stopped at 38.8%

<!-- stat-card -->
**94.9%** — Share of failures that came from misreading the system — Out of 468 failed runs. Regressions and wrong files came to 5.1% together

<!-- stat-card -->
**10** — Tasks carrying all eight rows of the leaderboard — One of them survived all 64 attempts by the eight models

<!-- stat-card -->
**$2.50 ↔ $6.96** — Estimated cost of a single rollout — First place costs 2.8x more than third, and the pricier row was not always better

## Facing a Company's Code for the First Time

In September 2026, an evaluation startup called Specific Labs published a benchmark named Real-SWE. The way its tasks were built departs from the usual coding benchmark. Nobody scraped issues off public GitHub repositories. Instead, **each task came with a private production codebase licensed from a different company**. The page puts it this way: "Each task comes from a private production codebase that we licensed from a real-world company. These are problems their engineers work on, with all the context and complexity that comes with an existing product."

How many companies handed over code is not disclosed. The page describes only the kind of product: "a Luma/Partiful competitor with 200K+ users and a top 100 App Store ranking," "a consumer fintech platform processing 100K+ bank statements," and "enterprise AI sales platforms supporting complex business workflows." The task environment does not stop at a repository either. Each task exposes only the services its own workflow needs, and that list includes an AWS emulator, Docker, Kubernetes, GitHub, three different databases, Slack, Intercom and Google Drive. It looks close to what an in-house engineer opens on a Monday morning.

The selection rule is on the page as well. Codebases went through "a rigorous screening process, focusing on real companies with substantial usage, strong engineering teams, and demanding production workloads." The sentence that follows sums up the whole design: "**We prioritize code written to meet an actual user or business need over code written solely to create a benchmark task.**" Tasks had to qualify on the same terms. Every one of them had a direct relationship to spend and had been assigned to an engineer earning a salary. The builders draw their own conclusion in the same section: "Does AI code match the bar of a real-world enterprise? Our results show us that we're far from that reality."

### 1.1. The Table That 640 Rollouts Produced

The scale is ten tasks, eight models, eight attempts per task, which multiplies out to 640 rollouts. A rollout is one attempt at solving a single task end to end. The score is the resolution rate, which the page defines as "equivalent to pass@1, averaged over eight independent runs per task." No human grades anything. All tasks are in Harbor format and verifiers are injected at grading time, and those verifiers are **"inspired by existing test suites in the codebase or use those tests verbatim."** The tests a company already wrote to protect its own code become the invigilator.

One more design choice deserves attention. Every model ran inside **the coding tool built by the company that made it**. That execution layer, the harness, wraps the model and supplies file reads, command execution, context management and verification. The page gives the reason: "We use native harnesses to reflect how enterprise engineers work in practice, evaluating **model-and-harness combinations** rather than models in isolation." That single sentence becomes the premise of section 3.

The result table has eight rows. Fable 5.1 on Claude Code leads at 38.8%, and GPT-5.6 Sol on Codex CLI sits last at 16.2%. The page also publishes an estimated cost per rollout, so both columns appear side by side below.

| Rank | Model | Harness | Resolution rate | Cost per rollout |
| --- | --- | --- | --- | --- |
| 1 | Fable 5.1 | Claude Code | 38.8% | $6.96 |
| 2 | GPT-6 Astra | Codex CLI | 33.8% | $4.67 |
| 3 | Gemini 3.8 Flash | Gemini CLI | 31.2% | $2.50 |
| 4 | GLM 5.3 | Claude Code | 28.8% | $5.12 |
| =5 | Grok 4.6 | Grok Build | 23.8% | $3.44 |
| =5 | Muse Spark 1.3 | Muse Code | 23.8% | $2.74 |
| 7 | Kimi K3 | Kimi Code | 18.8% | $3.90 |
| 8 | GPT-5.6 Sol | Codex CLI | 16.2% | $2.65 |

The eight values average out to 26.9%. The page never prints that number, but a short check confirms it. Every bar sits on a multiple of 1.25%, which means 80 rollouts per model, and the per-task passes add up to 172 out of 640. That ratio is 26.875%, the same as the arithmetic mean of the eight rows. On average, then, **three attempts in four failed**.

### 1.2. Weeks of Work, Handed Over in One Go

It is tempting to translate 38.8% into "coding agents are not ready for production work." Knowing what the tasks actually asked for, that translation does not survive. Janak Sunil, a co-founder, came into the Hacker News thread directly to explain the low numbers, and in the same thread identified the company as a Y Combinator Fall 2025 startup. "the reason for lower success rates is that we gave models **ambitious tasks that real engineers worked on for weeks**." The benchmark page does not carry that line. It exists only in a comment, and it is decisive for reading the score.

A description of difficulty is easy to nod at and hard to feel, so here is one of the actual instructions. Below is part of the tax task, which finished at a 3.1% resolution rate: two passes out of 64 attempts.

Billing reopens on Monday and every invoice this service issues is coming out untaxed. Each business on the platform settles its tax a different way: some maintain a rate themselves, some want each invoice priced against the buyer's destination by our tax authority provider, and some collect nothing at all, while a customer we hold an exemption for is charged nothing whichever way its business is configured. (…) an address the authority refuses must be reported without stopping the invoice. (…) once an invoice is settled the sale is filed back to the authority under that invoice's number so the returns reconcile. Invoices between European parties show both sides' VAT registrations. The authority and ledger are available at TAX_JAR_URL, PROD_TAX_JAR_URL and INFLUX_URL.

Six or seven conditions stack on top of each other, and dropping any one of them fails the verifier. The last line repays attention. The instruction hands over three environment variables that reach the external tax authority and the ledger. It withholds the rest: which file in the codebase these rules belong in, and where the existing invoice flow has to be touched. Specific Labs sets exactly that boundary as a design rule: "**Any behavior required by the verifier must be stated or reasonably discoverable.**" So the failed rollouts did not lose to information nobody could have had. They lost by not looking, or by failing to carry what they found all the way through. Failure on this exam happens outside the code itself.

## They Lose on Reading, Not on Writing

468 of the 640 rollouts failed. Specific Labs sorted those failures into five kinds by looking only at what the submission did, and applied the same taxonomy to all eight models. The scheme is not their invention: the page says the grouping follows DeepSWE. The definitions in the table below are the sentences printed on that page.

| Failure type | The builders' definition | Count | Of 468 |
| --- | --- | --- | --- |
| Missed requirement | Leaves out behavior the instruction requires | 190 | 40.6% |
| Integration error | Right idea, wired into the surrounding system incorrectly | 136 | 29.1% |
| Unverified assumption | Builds on a guess about the system instead of checking it in the workspace | 118 | 25.2% |
| Regression | Breaks existing behavior while making the change | 18 | 3.8% |
| Wrong file | Delivers the change somewhere the running application never calls, such as a one-off script | 6 | 1.3% |

The line that matters most in this table runs between the top three rows and the bottom two. Regressions and wrong files are mistakes of craft, of handling code badly, and together they come to **5.1%**. The other **94.9%** have a different character. A missed requirement means the instruction was never read to the end. An integration error means the neighboring system's expectations were never learned. An unverified assumption means something knowable by opening the codebase went unchecked. All three hang on **reading a system somebody else built**.

> [!callout]
> The models lost on where the code had to sit, not on the code itself. For anyone weighing a purchase, that points one way: supplying context to the agent has more room to move the score than swapping in a larger model.

One commenter in the Hacker News thread has already pulled that lever in production. Working on a codebase "that evolved over 15 years," the user ttul described building a "code atlas" that "provides the LLM with a semantically queryable map of how things connect and relate." The raw material was not only code. An agent read the Helm charts and the underlying repositories to see how the parts of the system talk to each other, with the internal wiki, the issue tracker and Slack history attached through MCP servers "so it could dig around to its heart's content as would a human developer trying to figure out the same problem." The agent drafted the atlas, a human corrected it, and the finished map went back out as a tool. By that account it "dramatically" cut the time models spend reading code and pulled in nuances they would otherwise have missed. No measurement accompanies the report, so it stands as a single case. The direction it points, though, lands squarely on the 94.9%.

### 2.1. Each Model Fails Its Own Way

The per-model breakdown is more interesting than the overall split. The page prints each model's failure types as a share of that model's own failed runs, and the profiles differ sharply. Grok 4.6 put 41 of its 61 failures into missed requirements, 67.2% piled into one category. Gemini 3.8 Flash went the other way, with 27 of 55 failures classed as integration errors at 49.1% and missed requirements at 29.1%. Last-placed GPT-5.6 Sol leads all eight on unverified assumptions at 43.3%.

A user in the thread recognized that profile from daily use. "Sol failing mostly on 'unverified assumptions' and rarely hitting 'integration errors' seems about right to me," wrote didgeoridoo, who rated the model highly at architecting the right implementation "but only if you are extremely specific and provide tight guidelines and guardrails." The table agrees: Sol's integration-error share is 16.4%, the second lowest of the eight. Benchmark numbers and hands-on intuition rarely point the same way this cleanly.

For a buyer the lesson is concrete. Among models that are all "good at coding," which one holds up in your organization depends on whether what you lack is specifications or system documentation. A single average score cannot settle that.

### 2.2. More Time on the Problem Changed Nothing

The hope that another hour would crack these tasks also meets an answer in the data. Of the 98 rollouts that finished in under ten minutes, 70 failed, a failure rate of 71.4%. Of the 542 that ran ten minutes or longer, 398 failed, or 73.4%. The gap is almost nothing. The denominators have to travel with those rates, though. The short group is only 15% of the total, and some of the runs that ended early were easy tasks to begin with. The safe sentence is the narrow one: holding on longer did not bring the failure rate down.

### 2.3. Thin Instructions Are Not What Makes This Hard

Specific Labs measured the source of the difficulty itself. The median instruction runs 1,742 characters, shorter than FrontierCode at 2,056 and DeepSWE at 1,975, longer than Terminal-Bench 3 at 1,584. In the page's own words, the prompts end up "slightly underspecified, about par with DeepSWE and Terminal Bench, but specific enough to not omit instructions." Then comes the other measurement: **the reference solution edits a median of 11 files**, against 6 for the same two comparisons.

Instructions of ordinary length, twice the surface to touch. The difficulty comes from **how far a change has to reach**, not from how little the prompt says. That single line locks into the failure breakdown above. In a change that spans eleven places, dropping one requirement or breaking one contract with a neighboring system is close to the default outcome. One caveat rides along with the length comparison. A footnote states that the sample used for it was "Real-SWE's eight repository-backed sample tasks," a different count from the ten tasks behind the leaderboard and the analysis.

## This Table Is Not a Ranking

Everything above is what the benchmark measured. The short version: **this data cannot hold up an ordering of eight rows.** That is not a complaint about the builders, who never asked anyone to read it that way and in fact wrote the opposite on the page. The trouble starts when a table like this gets cited, because citation almost always compresses it to one line about which model came first.

### 3.1. The Intervals Are Drawn, the Numbers Are Not Printed

The caption under the result table states that "95% confidence intervals are shown," and a thin whisker does sit beside each bar. The **numbers behind those intervals appear nowhere on the page**. So this report pulled the coordinates of the whisker elements out of the page's raw HTML and converted them into the same scale as the bars. All eight point estimates land within 0.05 percentage points of their bar positions, which means the intervals below are the values the builders drew and left unlabeled.
