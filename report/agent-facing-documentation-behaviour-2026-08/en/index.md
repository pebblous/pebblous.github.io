---
title: Six in ten documents a coding agent opened were written for the agent
subtitle: A study of 94,813 development events from 557 real agent sessions sorted 3,033 documentation touches by type
date: 2026-08-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Six in ten documents a coding agent opened were written for the agent

_A study of 94,813 development events from 557 real agent sessions sorted 3,033 documentation touches by type_

## Executive Summary

> [!callout]
> Technical documentation is written on the assumption that a person will read it. Someone reads, that someone understands, and we call it a success. Once autonomous coding agents began authoring a meaningful share of software changes, that assumption became something to check. A study released on 20 August by Zhijun Gao and Jing Chen of Peking University ran the check for the first time, pulling 94,813 development events out of 557 real agent sessions. Agents opened a document 3,033 times. In 60.5% of those openings, the file existed for the agent's own benefit: instruction files and working notes. An API reference sitting in the repository as a file was opened 40 times, or 1.3%.

> The more uncomfortable part comes next. Right after consulting a document, an agent was **less** likely to run a test, not more (adjusted odds ratio 0.39), and not a single tool call survived that would count as validating something against a document. The relationship with code editing flipped direction between the raw and adjusted analyses, so the authors left it unresolved. What remains is one observation: after reading, execution-side behaviour goes down. That is an association, not a cause, and the authors set a benign reading beside it.

> So this report is not an argument for writing better documentation. Line the neighbouring literature up and instruction files turn out to work as navigation and not as specification. The documents agents feed on have already become a distinct data asset, and there is still no schema to hold them, no quality metric to score them, no lifecycle to retire them. This is not somebody else's problem. It points straight at the pipeline that produced this report, and during this very run we paid the price once.

Four numbers carry this report. The first two say that the mix of documents an agent opens is not the mix we expected. The second two say what did not happen after those documents were read. All four come with a denominator and a set of conditions attached, and strip the conditions away and every one of them becomes false. Establishing those conditions is the job of Section 1.

60.5%

of the 3,033 documents agents opened  
were agent-facing (CI 53.9–66.5%)

1.3%

were API references sitting  
in the repository (40 events)

0.39

adjusted odds ratio of running a test  
right after consulting a document

0

documentation-based validation sequences  
observed under the defined tool-call patterns

## What the study counted, and what it missed

What makes this study interesting is that it doubts its own instrument before it reports any result. The paper uses two public datasets and refuses to merge them. In the authors' words, "we never pool their units of analysis." One dataset watches the process; the other watches what got shipped.

The process side is SWE-chat: roughly 6,000 sessions of real users working with coding agents, some 355,000 tool calls, from which 559 sessions were drawn as a stratified sample. Two failed to parse, leaving 557 sessions and 94,813 development events. The artefact side is AIDev, whose full corpus holds 932,791 agent-opened pull requests across 116,211 repositories; the study uses 33,097 analysable PRs out of a curated subset of 33,596. The first dataset carries Sections 2 through 4; the second carries Section 5. Put a number from each into the same sentence and you have made a claim the paper never made.

### 1.1. What the instrument cannot see

Best to defuse the most misreadable number up front. "API references, 1.3%" does **not** mean agents ignore API documentation. The instrument sees only file accesses that resolve to a repository path. API websites opened in a browser, knowledge already baked into the model weights, docstrings living inside source files — all of it falls outside the measurement. So the number means exactly one thing: **agents almost never opened an API reference that was sitting in the repository as a file.**

There is a bias running the other way too. The instruction-file figure is a lower bound on real exposure. Context files that the runtime injects automatically when a session starts leave no tool call behind; they become events only when the agent later opens or edits them explicitly. This is not conjecture; the vendors document the behaviour themselves.

Cursor documentation — Rules"Large language models don't retain memory between completions. Rules provide persistent, reusable context at the prompt level. When applied, **rule contents are included at the start of the model context.**"

The direction of that bias strengthens the argument rather than weakening it: the true share of instruction files is at least the 35.4% we are about to see, and probably more. The paper flags the bias in its own numbers, so we carry the flag across.

### 1.2. They weren't missing; we just couldn't see them

The centre of this section is two defects the researchers caught in their own pipeline. Neither was pointed out by a critic after publication; both are written into the paper by the authors themselves.

First, one agent family routes file operations through shell commands. Unless you parse the paths buried inside a shell heredoc, that entire family registers **zero** documentation events. Second, the extractor was silently dropping tool outputs that arrived in a non-string format. Adding support for that format recovered 9 sessions and **4,358 events** at a stroke, 77 of them documentation events.

> [!callout]
> Both defects say the same thing. Those documentation events were never missing; the instrument simply could not see them. If the classifier has no slot for a phenomenon, the phenomenon does not appear in the data. That sentence comes back twice more in this report — once in Section 2, where the category "working note" did not exist at all, and once in Section 6, where the subject is the pipeline that produced this article.

For the same reason the paper forbids agent-to-agent comparison. The tables do carry values like Gemini CLI 9/12, Claude Code 238/380, Cursor 0/11, but the authors state flatly that these differences are **confounded with extraction coverage** rather than reflecting behaviour. The shell-routing case above is that confound in the flesh. So no sentence of the form "agent X reads documentation better" can be written from this data.

### 1.3. How far to trust these numbers

Four caveats belong on every citation of this work. One: tier 2 of the two-tier document-type classifier was handled by a language model. Of 527 ambiguous paths, 500 were labelled by the model with no human validation (no κ, no α), which makes the 25.1% for working notes below a provisional figure. Two: 87% of the corpus is a single agent family, and Claude Code accounts for 83.8% of labelled sessions. Three: uncertainty comes from a clustered bootstrap with 2,000 resamples, with no multiple-comparison correction, so small gaps between adjacent strata should not be interpreted. Four: this is a preprint that has not been peer reviewed — two authors, submitted 20 August 2026, currently v1 only.

Fairness requires putting weight on the other side of that last point. The paper releases its extraction pipeline, its coding scheme, and event-level data, and every table in the body is generated directly from analysis output. It was published in a checkable form, which is also why this article can carry those tables across intact.

One thing to flag in advance. If the measuring instrument is what makes the conclusion, then the pipeline writing this report right now is the same kind of object. That story is Section 6.

## Where did the 3,033 openings go?

Start with the denominator again. The 557 sessions yielded 94,813 development events, of which 3,033 were documentation interactions — 3.2% of everything. Sessions with at least one documentation event numbered 316, or 56.7% (clustered 95% CI 52.6–60.5%). Every percentage in the table below is over that 3,033. It is not a distribution of what agents do; it is a distribution of **where an opening went, given that the agent opened a document at all**.

Two places in the table deserve the eye: the top two rows and the bottom nine. The top two are files that exist for the agent. The bottom nine are the genres we normally mean by "technical documentation." The first group is 1,834 events; the second is 323.

| Document type | Events | Share |
| --- | --- | --- |
| Agent instructions (AGENTS.md · CLAUDE.md · SKILL.md · Cursor/Copilot rules) | 1,074 | 35.4% |
| Agent working notes (plans · thoughts/ · brainstorms · review logs) | 760 | 25.1% |
| Task / requirements | 301 | 9.9% |
| Configuration | 205 | 6.8% |
| README | 197 | 6.5% |
| Other prose (residual) | 165 | 5.4% |
| Architecture / ADR | 120 | 4.0% |
| Install / deploy | 41 | 1.4% |
| API reference | 40 | 1.3% |
| Schema | 32 | 1.1% |
| Testing docs | 29 | 1.0% |
| Examples | 27 | 0.9% |
| Changelog | 22 | 0.7% |
| Troubleshooting | 11 | 0.4% |
| License / legal | 8 | 0.3% |
| Contributing | 1 | 0.0% |
| Agent-facing subtotal | 1,834 | 60.5% |
| Classical technical documentation (9 genres) | 323 | 10.6% |

************************************************Event distribution by document type (n=3,033). The clustered 95% CI on the 60.5% figure is 53.9–66.5%. The nine classical genres are API reference, troubleshooting, architecture, schema, installation, examples, testing, contributing, and changelog.

Contributing guides: one event. Troubleshooting: eleven. Instruction files were opened roughly 27 times as often as API references. That contrast lands faster as a picture. The bars below put the top ten rows of the table on a single axis; the two orange bars are the agent-facing categories.

3,033 documents opened by agents, events by type

Bar length is proportional to event count. The two orange bars are files that exist for the agent itself; grey bars are documents written on the assumption of a human reader.

Agent instructions

1,074

Agent working notes

760

Task / requirements

301

Configuration

205

README

197

Architecture / ADR

120

Install / deploy

41

API reference

40

Testing docs

29

Troubleshooting

11

Contributing

1

### 2.1. Why 60.5% should never travel alone

The paper admits that this boundary is contestable. Count README, configuration, and requirements as human-facing too, and the classical share becomes 33.8% rather than 10.6% — the authors print that alternative themselves. Push the other way and refuse to count working notes as documentation at all: the denominator shrinks to 2,273 and instruction files alone reach 47.2%, another figure the authors computed and published. Neither move changes the ranking — instruction files stay largest — but the value 60.5% moves with where you draw the category line.

The more consequential wobble is in the weighting. The headline figure counts events one by one, so sessions that generated many events count for more. Give every session equal weight, or reweight by agent family, and the number shifts.

Consultation and production in the table below are the paper's way of folding five interaction types into two. Consultation is 1,615 events: 1,328 reads, 282 searches, 5 discoveries. Production is 1,401: 1,007 edits and 394 creations. Hold that split in mind and the middle row of the next table becomes legible.

| Statistic | Event-weighted (default) | Session-equal | Agent-reweighted |
| --- | --- | --- | --- |
| Agent-facing docs, all interactions | 60.5% | 54.7% | 55.1% |
| ⤷ consultation events only | 57.4% | 50.5% | 50.1% |
| ⤷ production events only | 63.7% | 67.1% | 66.3% |
| Self-initiated, all interactions | 70.2% | 63.2% | 61.9% |

************Sensitivity by weighting scheme. The middle row is the point of the table.

> [!callout]
> In the paper's own words: **under either correction, agent-facing documents account for about half of consultation rather than a clear majority.** Session-equal 50.5%, agent-reweighted 50.1%. What pushed the headline to 60.5% was not reading but writing. Look at production events alone and every correction lands between 63% and 67%. The accurate sentence is therefore not "agents don't read human documentation" but something closer to "agents **write their own documentation at volume**."

### 2.2. No category, no phenomenon

The genuinely new item in that table is not the 60.5% but the second row. Agent working notes: plans, `thoughts/` directories, brainstorms, review logs. The category existed in no prior documentation taxonomy. As the paper puts it, any file-type taxonomy built before 2024 has neither `agent_instruction` nor `agent_working_note`, and running this data through such a taxonomy dumps the majority of agent documentation interactions into a residual bucket.

So the way this paper discovered a new phenomenon was not by building a new observing instrument but by **adding two categories**. Structurally identical to the two extraction defects in Section 1. With no slot to count something in, it does not show up in the data, and what does not show up is not managed.

One thing worth adding: this distribution is not an accident. The `AGENTS.md` standard site explicitly proposed splitting human-facing and agent-facing documentation on purpose.

agents.md — the AGENTS.md standard"**README.md files are for humans**: quick starts, project descriptions, and contribution guidelines. AGENTS.md complements this by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren't relevant to human contributors."

The distribution the paper measured is, in part, that design showing up as behaviour. But one slot here is empty. The standard designed for the split to be **read**; nobody designed for the split to be **useful**. That question is Sections 3 and 4.

## What happens after a document is read

This is where the paper parts company with other documentation research. Not what was opened, but what followed the opening. Taking the 1,615 consultation events as anchors, it measured how often five behaviours appeared in the window immediately after, against a session-wide baseline of 93,198 events.

Read the two rightmost columns together. The unadjusted lift is the raw ratio; the adjusted odds ratio comes from a logistic GEE model controlling for task stage, position within the session, log session length, and agent family. Only rows where both columns point the same way can be used as a conclusion.

| Behaviour after consultation | After | Baseline | Unadj. lift [CI] | Adj. OR [CI] | Verdict |
| --- | --- | --- | --- | --- | --- |
| Documentation creation | 0.044 | 0.026 | 1.67 [1.14, 2.31] | 1.41 [0.98, 2.02] | Unresolved |
| Code editing | 0.232 | 0.221 | 1.05 [0.86, 1.27] | 1.33 [1.09, 1.62] | Unresolved |
| Plan revision | 0.015 | 0.019 | 0.77 [0.35, 1.24] | 0.75 [0.43, 1.30] | No difference |
| Running tests | 0.005 | 0.022 | 0.23 [0.08, 0.45] | 0.39 [0.25, 0.60] | Down on both |
| Building | 0.004 | 0.025 | 0.15 [0.02, 0.33] | 0.25 [0.14, 0.44] | Down on both |

********************************Behaviour following documentation consultation (1,615 anchors / 93,198 baseline). Narrowing the anchors to read events only (n=1,328) does not change the conclusion.

The top two rows disagree with themselves. Documentation creation rises significantly unadjusted, then its adjusted interval crosses one; code editing shows no difference unadjusted, then rises once adjusted. The paper calls both **unresolved** and declines to draw a conclusion from them. So do we. The only robust findings are the bottom two rows: testing and building go down.

Put the same five rows against a 1.0 reference line and the asymmetry is immediate. The vertical line is "no difference," and only rows with both points to its left can be read as a decrease.

Behaviour after consultation — unadjusted lift and adjusted odds ratio

The horizontal axis is a log scale (0.1 to 3.0). Hollow points are unadjusted lifts; filled orange points are adjusted odds ratios. The dashed vertical line is the 1.0 reference; anything to its left is a decrease.

### 3.1. 1,328 reads, 3 edits

The table above uses a window, so it still counts cases with other actions in between. Narrow the window to the **very next event** and the picture sharpens. The probability that a code edit immediately follows a documentation read is 0.002 [0.000, 0.005] — **3 times** out of 1,328 reads.

So what did the other 1,325 lead to? The most common next action was another documentation read (0.270), followed by reasoning (0.245). Reading documentation is not an isolated event; it comes in runs. Read, read again, think. Wherever that flow turns into code, adjacent transitions barely catch it.

And the two stages the paper had written into its model, **Validate** and **Escalate**, came back at zero across all 3,033 events. The precise wording matters here. This is not "agents do not validate." It means that the **defined tool-call pattern** — running a test or a build after a consultation — occurred zero times. Put exactly: **not a single tool-call trace survived that would count as validating something against a document.** The paper repeats this caveat twice in its own text.

### 3.2. Agents don't open documentation because they're stuck

The trigger contradicts the folk model too. We tend to assume an agent goes looking at documentation when it gets stuck. The data points the other way. Self-initiated consultations number 2,129 (70.2%, CI 66.7–73.3%); failure-driven ones stop at 228 (7.5%, CI 6.0–9.3%). A 9.3-fold gap. Broken down, the leading triggers are the agent's own judgement (1,236), an implementation need (893), and a user instruction (618). **Test failures prompted 7 consultations; build errors prompted 4.**

Top three triggers for opening documentation

Out of all 3,033 events; top three triggers sum to 97.1% (the remainder is unspecified). Orange marks self-initiated consultation, grey marks the other leading triggers, including failure.

Self-initiated

2,129

User instruction

618

Failure-driven

228

Look at post-failure behaviour separately and it gets sharper. Across 2,034 failure episodes, the first recovery action was reading code 631 times (31.0%), retrying unchanged 404 (19.9%), doing nothing within the observation window 318 (15.6%), editing straight away 312 (15.3%), and searching code 251 (12.3%). Reading documentation: 109, or 5.4%. Given a tool error, the probability that the next action is a documentation read is 0.020.

> [!callout]
> There is a place to stop here. That same table carries a recovery-success column, and documentation-based recovery has the highest point estimate at 63.6%. But it rests on 11 observed cases and its interval, 35.4–84.8%, overlaps every alternative. The paper **explicitly declines the conclusion** at this point. The sentence "agents fix things better when they read the docs" cannot be written from this data.

### 3.3. How to read an odds ratio of 0.39

This is observational, so causality is off the table. Whether reading a document caused fewer test runs, or whether agents happen to open documents during phases where testing is unlikely anyway, cannot be separated here. The paper offers a benign reading of its own: the agent may simply have a **cheaper oracle**. If you can invoke the test suite directly, there is little reason to check your work against prose.

So the claim here is not "documentation makes agents lazy," and not "documentation is harmful." It is one much narrower and correspondingly firmer sentence: **prose left no trace of functioning as a specification.** The procedure where a document defines the correct answer and the agent checks its own output against it — the procedure we tacitly assume whenever we say "agent-friendly documentation" — is not findable in this data.

## Being read is not the same as being useful

Our mental picture of documentation use is mostly a line: Discover, Retrieve, Interpret, Apply, Validate, Update. The paper put those six stages into its coding scheme and classified all 3,033 events against them. What came back was not a line.

Ten candidate stages appear in the table. On top of the six above, the authors added Orient (the phase before the first write), Revisit (a read immediately following a read), and Recover (a failure whose first recovery action was a documentation read). Each stage is defined by an observable tool-call pattern rather than by a concept. The top row, Contribute / Update, covers events whose interaction type is edit or create.

| Candidate stage | Events | Status |
| --- | --- | --- |
| Contribute / Update | 1,401 | Strongly observed |
| Retrieve | 1,344 | Strongly observed |
| Orient | 462 | Observed |
| Interpret | 413 | Observed |
| Revisit | 360 | Observed |
| Discover | 287 | Observed |
| Recover | 109 | Weakly observed |
| Apply | 75 | Weak |
| Validate | 0 | Unobserved under the defined patterns |
| Escalate | 0 | Unobserved under the defined patterns |

************************Events per stage (n=3,033). Stages are not mutually exclusive, so the column does not sum to 3,033.

The authors also cut three stages from their initial scheme outright — **Compare, Follow-reference, and Verify** — because not one instance appeared in the tool calls. What remains is two lobes. One is consultation, where reads run into reads (0.270) and drain into reasoning (0.245). The other is production, the single largest category at 1,401 events, where a documentation edit follows a documentation edit with probability 0.350. The two lobes are connected only thinly.

They are also comparable in size: 1,615 consultation events against 1,401 production events, a ratio of 0.87. **Agents write about as much as they read.** The diagram below draws both lobes and, with them, the fact that the place between them is empty.

The two-lobed cycle — and the empty place

The consultation lobe is on the left, the production lobe on the right. Each lobe's internal feedback is the heavy line; the line joining them is thin. The two dashed boxes are stages defined in the coding scheme that returned zero events.

The authors set two hypotheses side by side for this shape. One is that bounded context windows push agents to use documentation as **working memory** rather than as reference: unable to hold what they read, they read it again, then write it out to a file. The other is the cheaper-oracle hypothesis from earlier. Neither contradicts the data, and this study does not adjudicate between them.

### 4.1. The effect literature looks like a mess

Everything so far answers "how much does it get read." What a practitioner actually wants to know is "does it help," and that is a different question. This paper does not answer it. Other studies have tried, and their conclusions collide: some find improvement, some find none, some find the content irrelevant, some find it conditional.

Line them up by the **axis on which each found its improvement**, though, and the picture changes. The table below is our attempt at that alignment. One disclosure first: the alignment is our reading, and no paper has ever drawn this table. Each study simply measured a different thing.

| Axis | Verdict | Evidence |
| --- | --- | --- |
| Navigationreaching the right file or command | Works | Shepard & Albrecht — all of the improvement came from coverage (evaluable patches +14.5pp), while per-patch precision held flat at about 59% (p=0.119) · Lulla et al. — runtime −28.64%, output tokens −16.58% |
| Primingcontext that primes regardless of task fit | Works, content irrelevant | Zhang et al. — randomly drawn rules matched curated ones exactly (+13.8pp). Shuffled, domain-mismatched, and format-unchanged variants were all equivalent |
| Specificationthe document defines correctness and gets checked against | Not confirmed | Gloaguen et al. — no gain in success rate, 20% higher cost, repository overviews useless · Khatri — improvement capped at 10–15pp, zero near-misses converted to passes · this paper — testing OR 0.39, building 0.25, Validate 0 |
| Enforcementactually making constraints hold | Fails as prose, works when compiled | Sharma (ContextCov) — 67.0% as passive text, 88.3% once compiled into executable checks · Zhang et al. — every rule classified as beneficial was prohibitive; every harmful one was prescriptive |

****  
****  
****  
********  
Six studies of instruction-file effectiveness, sorted by the axis each one measured. The sorting is this report's interpretation, not a conclusion of the original papers.

> [!callout]
> Arranged this way, the behavioural data in this paper stops being an outlier in the literature and becomes **a direct observation of the third axis**. That the next action after a read is reasoning or another read, and that the adjacent transition to code editing is 0.002, is another way of saying documentation is not being used as a specification to check against. Instruction files **work as navigation and do not work as specification.**

### 4.2. Random rules helped as much as curated ones

The second row is the one that stings. Zhang et al. gathered 679 rule files containing 25,532 rules and ran more than 5,000 executions. **Attaching randomly drawn rules produced the same performance gain as attaching carefully curated ones** (+13.8pp). Shuffle the rules, mismatch the domain, leave the formatting alone — the results came out equivalent.

Do not leap from there to the wrong conclusion. The finding is not that rules are useless. Rules clearly land. It is that **polarity lands, not content**. In the same study, every rule classified as beneficial was prohibitive ("don't do X") and every rule classified as harmful was prescriptive ("do X this way"). Which direction you write in mattered more than what you wrote.

An asymmetry sits on top of that. People invest in content. A study of what developers actually put in context files found test procedures at 75.9%, implementation detail at 70.8%, and architecture at 68.1%. The care goes into the content, unmistakably. But the share that care contributes to the outcome runs on a different track from what the study above measured. The cost we pay and the effect we get sit on separate axes.

The remaining rows point the same way. Shepard & Albrecht report that when the guidance was refined, all of the improvement came from **coverage**, and per-patch precision did not move — good guidance gets you to the right file, it does not raise the quality of the work you do once you are there. Gloaguen et al. found that agents follow instructions well but that repository overviews do not help and add 20% to the cost. Khatri capped the achievable improvement at 10–15pp and recorded zero cases where a near-miss turned into a pass: what failed was implementation skill, not documentation.

### 4.3. All four arguments for llms.txt are supply-side

Point the same lens at `llms.txt` and an interesting structure shows up. The v2 document, revised on 10 August 2026, cites four grounds for adoption: thousands of sites publish the file, documentation platforms generate one automatically, Chrome's Lighthouse audits for it as part of its agentic browsing checks, and the AI labs publish one for their own developer docs. All four are **supply-side**. They are evidence of who made the file, not of who read it.

llms.txt v2 (revised 2026-08-10)"llms.txt files are used most heavily for software documentation, where **coding agents follow them to find API references and tutorials.**"

The demand-side claim appears exactly once, in the sentence quoted above, and it carries no measurement and no citation. Nor is the measurement anywhere in the published academic literature. Within what this report was able to check, no study has measured the effect of `llms.txt` using agent behavioural data. The two nearest candidates are both something else. Volpini et al. report that a **bundle that included** llms.txt-style instructions raised RAG accuracy by roughly 30%, but that is not a standalone effect and the subject is not a coding agent.

The other one is more suggestive. Borysenko analysed the HTTP request signatures that 9 coding agents and 6 AI assistants leave on documentation portals — a rare case of measuring agent behaviour directly from the server side. The finding is not an effect measurement but an **instrumentation collapse**. Agents compress into one or two requests the browsing that a person would spread across many pages, which makes conventional engagement metrics — session depth, time on page, click path, bounce rate — unreliable indicators of documentation consumption.

This is not the place to blame the proposal's authors. The paper itself notes that actionability may still be desirable. What has been falsified is not the advice's harmfulness but **the absence of behavioural evidence to support it**. And confirming an absence as an absence requires a way to measure, which is exactly what Borysenko's finding says has to be rebuilt. Why rule documents need a harness that field-tests them rule by rule is something we covered in [an earlier report](/report/agent-loops-harness-over-model/en/).

## Agents edit their own instructions

The dataset changes here. Everything so far was process inside a session; now we look at what got left in the repository. Of AIDev's 33,097 agent pull requests, 13,750 (41.5%) touched documentation. PRs changing both code and docs: 10,586 (32.0%). Docs only: 3,164 (9.6%). Code only: 17,988 (54.3%).

Which documentation files got edited most often is where this section starts. Counted file by file, `AGENTS.md` was modified in 692 pull requests, followed by `CLAUDE.md` at 362 and `copilot-instructions.md` at 287. The top three slots went not to documents a person would read but to instructions handed to an agent.

Top three most-edited documentation files

The unit is the number of pull requests that modified the file. All three are instructions handed to the agent itself.

AGENTS.md

692

CLAUDE.md

362

copilot-instructions.md

287

The documents agents edit most often are the instructions given to agents. That is where the second loop closes, output becoming input again. But writing this up as "an uncontrolled loop has appeared" gets the facts wrong. This is not an accident; it is **a specification**.

Anthropic documentation — project memory"Both are loaded at the start of every conversation. **Claude treats them as context, not enforced configuration.** To block an action regardless of what Claude decides, **use a PreToolUse hook instead**."

The same page describes auto memory, an official feature in which the model writes its own memory file. It loads every session, capped at the first 200 lines or 25KB, whichever comes first. So an agent editing its own instructions is behaviour the product deliberately built. The accurate sentence is this: **no uncontrolled loop appeared; a loop the product built on purpose has no review gate yet.**

One more thing in that quotation deserves attention. The vendor itself classifies instruction files as "context, not enforced configuration," and directs you to a hook when you genuinely need to block something. The fourth axis from Section 4 — prose fails, compilation works — is already implemented here as product architecture.

### 5.1. Code changes first, documentation follows

You can also count which side changes first, with conditions attached. Among the 4,386 PRs with multiple commits where an order is observable, code came first in 2,076 (47.3%), both landed in the same commit in 1,870 (42.6%), and documentation came first in 440 (10.0%). Code-first outnumbers docs-first **4.7 to 1**. Since 42.6% have no order at all, this must not be generalised into "documentation lags code by 4.7×." Narrow the condition to the 2,516 PRs where code and docs sit in **different commits**, and code-first reaches 82.5% (clustered CI 78.7–86.0%).

Which side changes first — 4,386 pull requests with an observable order

Same-commit changes (42.6%) have no order at all. Narrowed to the 2,516 PRs in different commits, code-first reaches 82.5%.

Code first

2,076

Same commit

1,870

Docs first

440

Merge rates are best left alone. PRs touching documentation merge at 81.1% versus 75.0% for code-only PRs, but the repository-cluster intervals overlap and the paper drew no conclusion. There is a neighbouring result that invites confusion, so let us separate it now. Another study reported that "documentation-task PRs have the highest merge approval rate (82.1% vs 66.1%)" — but that study split by **task type**, whereas this one splits by **which files were touched**. Different questions. Blending them into "documentation-related PRs merge better" misquotes both.

### 5.2. Deleting costs more than adding

That instruction files keep growing has long been a practitioner's hunch; now there is a measurement. Chakrabarti tracked the lifetime of 247,694 instructions across 1,867 repositories and reports that instruction files grow by an average of **+226%** over their lifetime, with a net gain of 4.9 instructions per commit. The deletion side is the more striking part: **the older an instruction, the less likely it is ever to be removed** (log hazard −0.032 per commit). Rules that have survived a long time go on surviving longer.

The cause is the cost structure. Appending a line is always cheap. Removing an existing rule means establishing why it was added, whether it still holds, and how it interlocks with the rest. The author named this state **catastrophic remembering** — the inverse of the catastrophic forgetting in which a model loses what it learned. The paper closes on a rhetorical question: if English is the new code, why do we still have no comments? Rhetoric rather than finding, but it gets the shape of the problem exactly right.

Growth is not the only failure mode; staleness is the other. Treude and Baltes ran existing README and wiki consistency checkers over a representative sample of 356 repositories and found passages referencing code elements that no longer exist in **23.0%** of them. The name for it is context rot.

Prescriptions arrived on two different levels. Academia says leave the reasoning behind. Chakrabarti reports that attaching a rationale comment to each instruction removed 99.3% of superfluous instructions in a checkable setting. Vendors go at it with capacity limits: auto memory is capped at 200 lines or 25KB, and Skills are loaded lazily, only when needed. These are not contradictory. They are responses at different levels to the same disease, and they share one precondition. **To delete a rule, the reason it was added has to still be there.** That memory without a label cannot be deleted is something we treated separately in [an earlier report](/report/agent-memory-provenance-deletion/en/).

### 5.3. Where do working notes go?

One contrast to close on. As Section 2 showed, working notes account for 25.1% of documentation interactions inside a session. Count what actually survives in repositories and the story inverts completely. Abubakar et al. swept 36,710 repositories and found plan files in **85 instances across 10 repositories**. That was all of them.

> [!callout]
> The two numbers are not in conflict; they count artefacts at different moments. One measures **what was produced and consumed during the process**, the other **what was preserved in the repository**. Working notes are created in bulk during a session and almost none are committed. The contrast itself shows the shape of the management problem. What survives has no tooling to handle it, and what does not survive was never auditable in the first place. To be managed, a thing must first persist; to persist, there must be a category to hold it.

## This is a data-design problem, not a documentation-policy one

Translate everything so far into the language of documentation policy and you get something like "write better instruction files." That translation does not carry half of it. Our three research tracks each confirmed one gap, and not one of the three is about how documentation is written. All three are about what documentation is treated as.

| Gap | What we confirmed |
| --- | --- |
| The taxonomy has no slot | File-type taxonomies built before 2024 have neither agent_instruction nor agent_working_note, so the majority of agent documentation interactions fall into a residual bucket. The same holds at the level of theory: all four Diátaxis forms are defined by human reader needs, and the agent reader has not yet entered the core frame |
| Quality metrics have no axis | Across repository-hygiene tools and documentation linters, no standard tool carries "was this document produced by an agent or by a person" as a first-class field. One documentation platform states that it deliberately does not distinguish, on the grounds that AI-generated content must pass the same rules as human content. What people put in context files skews to function too: test procedures 75.9%, implementation 70.8%, architecture 68.1%, against security at 14.8% and performance at 14.5% |
| Even the scale is uncounted | No public statistic counts how many repositories have adopted CLAUDE.md or copilot-instructions.md. The "60k+" figure for AGENTS.md is the standard site's own report, with an undisclosed methodology. The code and agent ecosystems are measured in fine detail, but this paper is effectively the first direct measurement of documentation consumption |

****````********``````One gap confirmed by each of the three tracks. Schema, quality metric, scale count — the three things a data asset would obviously have — are all empty.

A data asset has a schema, a quality metric, and a count of its scale. Documentation has been an agent input for a long while now, and it has none of the three. That is where this report arrives. Which makes this not a documentation-policy problem but **a data-design problem**.

### 6.1. Our own CLAUDE.md has no deletion policy

Ending on somebody else's system would be cheap. So we held the same ruler against the pipeline that produced this report. The figures below were measured directly in this working tree on 23 August 2026, as the article was being written.

| Item | Size |
| --- | --- |
| CLAUDE.md — instructions every agent loads every session | 34,621 bytes / 646 lines |
| .claude/skills/ — 43 skills, 49 files | 543,481 bytes |
| .claude/agents/ — 16 agent definitions | 46,082 bytes |
| docs/ — 36 internal documents | 438,774 bytes |
| This run's directory — plan, three research tracks, synthesis | plan 46KB · synthesis 49KB |

````````Measured in this working tree on 2026-08-23. The files in the last row fall squarely into the "agent working note" category the paper newly defined.

Check the paper's findings against us one at a time. Instruction files grow by appending: our 646-line `CLAUDE.md` has no deletion policy, and the condition where older entries go unremoved is fully in place. Agents edit their own instructions: we do exactly that, and the only review gate is a human reading a PR. Working notes persist in the repository: ours do, but nothing in those artefacts distinguishes an observation from an earlier agent's estimate.

### 6.2. The price this run actually paid

Since this is an audit, the incident that happened during this very run belongs in it. The research stage of this report forks three ways: a paper track, an industry track, and a data track. On this run, **all three tracks executed the same track**. The paper track and the industry track both reported that they had "completed the data track," and neither produced its own output file. All three stages were nonetheless recorded as complete. Had the synthesis stage not checked for the files directly, this article would have been written off the data track alone.

The plan already said this, in as many words: "Each track must confirm it produced its own output file before finishing (this has failed repeatedly on past runs)." The instruction was written in prose, precisely. It was not followed. And the fact that it was not followed was recorded nowhere.

> [!callout]
> This is the event that proved the report's own argument on us. **An instruction written in prose leaves no observation of whether it was followed.** One line of check for file existence in the completion criteria would have caught it on the spot. Documentation is an excellent container for rules and a poor instrument for recording whether rules held — structurally the same thing as the zero Validate events in Section 3. We record it as an audit finding, not a boast.

### 6.3. Four things you can put in place today

Translated into what an organisation could start on today, there are four. The first three pair one-to-one with the three gaps above. The fourth has a different standing, so we state its standing along with it.

**One: register instruction files and working notes as distinct asset types.** No slot in the taxonomy, no audit. The warrant is that the paper's method for discovering a new phenomenon consisted of adding two categories.

**Two: record whether a document was written by an agent or by a person.** One authorship column is what makes auditing possible. No standard tool carries that axis today. A case of putting a gate on agent-written artefacts is one we covered in [this article](/blog/agent-written-knowledge-graph-gate/en/).

**Three: give instruction files a lifetime and a ceiling.** Unbounded appending is a failure mode. Academia chose rationale comments; vendors chose capacity caps and lazy loading. Either way the shared precondition is preserving the grounds for deletion.

**Four: put rules that must hold somewhere executable, not in prose.** Given that not one validation sequence was observed, a rule becomes observable only when it lives in a linter, a schema, a hook, or a test rather than in a document.

The standing of the fourth needs stating precisely. It is a proposal the paper itself pinned down as "a hypothesis for intervention research, not a finding of this study." What it has going for it is that three unrelated lines point the same way. The paper offered executable artefacts over prose as a hypothesis; vendors have already implemented it as product architecture (context rather than enforced configuration, with a hook when you really need to block); and ContextCov, a separate intervention study, reports compliance rising from 67.0% to 88.3% when the same constraints were compiled into AST queries, a runtime shell shim, and a structural validator.

Three caveats belong here too. ContextCov is a separate study unrelated to this paper; it is not in the paper's bibliography, so it must not be read as "the paper's proposal has been validated." The experimental setting is a benchmark, SWE-bench Lite. And what was measured is constraint compliance — not task success rate, and not documentation quality. **Three lines point the same way** is the accurate statement. Validated is not.

Finally, a note on what this report has **not** falsified. It is not saying that the advice to make documentation actionable and verifiable is wrong. The paper itself wrote that those properties may still be desirable. What has been confirmed is one fact: the behavioural evidence to support that advice does not yet exist. And a substantial part of why it does not exist is that nobody has measured. Measuring requires categories, and building categories is not the work of writing documentation — it is the work of designing data. It is work we have not done in our own pipeline either.

## References

### Primary source

- 1.Gao, Z., Chen, J., "From Agent Behaviour to Agent-Friendly Documentation: An Empirical Study of How Coding Agents Discover, Read, and Write Technical Documentation," 2026-08-20 (v1, 14 pages, 1 figure, 10 tables). [arXiv:2608.20195](https://arxiv.org/abs/2608.20195) — source of every figure from Tables 1, 2, 3, 4, 8, 9, and 10 in this article

### Effectiveness and intervention (academic)

- 2.Zhang, X. et al., "Guardrails Beat Guidance: A Large-Scale Study of Rules, Skills, and Persistent Configuration for Coding Agents," 2026. [arXiv:2604.11088v2](https://arxiv.org/abs/2604.11088) — random rules equivalent at +13.8pp; the prohibitive/prescriptive split
- 3.Gloaguen, T. et al., "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?," 2026. [arXiv:2602.11988v2](https://arxiv.org/abs/2602.11988) — success rate unchanged, cost up 20%
- 4.Khatri, P., "Do Context Files Help Coding Agents? A Two-Agent Ablation Study on Real Repositories," 2026. [arXiv:2607.27250v1](https://arxiv.org/abs/2607.27250) — improvement capped at 10–15pp, zero near-miss conversions
- 5.Lulla, J. L. et al., "On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents," 2026. [arXiv:2601.20404v2](https://arxiv.org/abs/2601.20404) — runtime −28.64%, output tokens −16.58%
- 6.Shepard, A., Albrecht, J., "Probe-and-Refine Tuning of Repository Guidance for Coding Agents," 2026. [arXiv:2606.20512v2](https://arxiv.org/abs/2606.20512) — coverage +14.5pp, precision unchanged (p=0.119)
- 7.Sharma, R. K., "ContextCov: Deriving and Enforcing Executable Constraints from Agent Instruction Files," 2026. [arXiv:2603.00822v2](https://arxiv.org/abs/2603.00822) — compliance 67.0% → 88.3%, SWE-bench Lite, 12 repos / 300 tasks

### Lifetime and maintenance

- 8.Chakrabarti, K., "Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding," 2026. [arXiv:2608.11095v1](https://arxiv.org/abs/2608.11095) — 247,694 instructions across 1,867 repositories, +226% over lifetime, 99.3% of superfluous instructions removed via rationale comments
- 9.Treude, C., Baltes, S., "Context Rot in AI-Assisted Software Development," 2026. [arXiv:2606.09090v1](https://arxiv.org/abs/2606.09090) — stale code references in 23.0% of a representative sample of 356 repositories
- 10.Liu, S. et al., "Context as a Tool," 2025. [arXiv:2512.22087v1](https://arxiv.org/abs/2512.22087)

### Artefact-descriptive studies

- 11.Chatlatanagulchai, W. et al., "Agent READMEs: An Empirical Study of Context Files for Agentic Coding," 2025. [arXiv:2511.12884v2](https://arxiv.org/abs/2511.12884) — 2,303 context files; test procedures 75.9%, implementation 70.8%, security 14.8%
- 12.Chatlatanagulchai, W. et al., "On the Use of Agentic Coding Manifests: An Empirical Study of Claude Code," 2025. [arXiv:2509.14744v1](https://arxiv.org/abs/2509.14744)
- 13.Mohsenimofidi, S. et al., "Context Engineering for AI Agents in Open-Source Software," 2025. [arXiv:2510.21413v4](https://arxiv.org/abs/2510.21413)
- 14.Abubakar, M. A. et al., "An Exploratory Study of Agent Plans for Agentic AI Coding Tools in OSS," 2026. [arXiv:2608.04661v2](https://arxiv.org/abs/2608.04661) — 85 plan files across 10 of 36,710 repositories
- 15.Hora, A., Montandon, J. E., Costa, D. E., "What's Inside a GitHub Repository?," 2026. [arXiv:2605.16701v2](https://arxiv.org/abs/2605.16701)
- 16.Treude, C., Baltes, S., Cheong, M., "Operationalizing Ethics for AI Agents," 2026. [arXiv:2605.05584v1](https://arxiv.org/abs/2605.05584)

### Dataset papers

- 17.Baumann, J. et al., "SWE-chat: Coding Agent Interactions From Real Users in the Wild," 2026 (ODC-BY, snapshot 2026-08-19). [arXiv:2604.20779v1](https://arxiv.org/abs/2604.20779) — source of the process evidence
- 18.Li, H., Zhang, H., Hassan, A. E., "AIDev: Studying AI Coding Agents on GitHub," 2026. [arXiv:2602.09185v1](https://arxiv.org/abs/2602.09185) — source of the artefact evidence

### Behaviour and failure trajectories

- 19.Ehsani, R. et al., "Where Do AI Coding Agents Fail?," 2026. [arXiv:2601.15195v1](https://arxiv.org/abs/2601.15195) — merge approval rate for documentation-task PRs, 82.1% vs 66.1% (kept separate in the body as a different question)
- 20.Majgaonkar, O. et al., "Understanding Code Agent Behaviour," 2025. [arXiv:2511.00197v1](https://arxiv.org/abs/2511.00197)
- 21.Borysenko, O., "Developer Experience with AI Coding Agents: HTTP Behavioral Signatures in Documentation Portals," 2026. [arXiv:2604.02544v2](https://arxiv.org/abs/2604.02544) — session depth, time on page, and bounce rate rendered meaningless by agent traffic
- 22.Volpini et al., effect on RAG accuracy of a bundle including llms.txt-style instructions, 2026. [arXiv:2603.10700](https://arxiv.org/abs/2603.10700) — not a standalone effect, and not measured on coding agents

### Standards and industry primary sources

- 23.agents.md — the AGENTS.md standard site (source of "README.md files are for humans"; the 60k+ adoption figure is self-reported). [agents.md](https://agents.md/) (accessed 2026-08-23)
- 24.Howard, J., "The /llms.txt file," v2 (published 2024-09-03, revised 2026-08-10). [llmstxt.org](https://llmstxt.org/) (accessed 2026-08-23) — source of "coding agents follow them to find API references and tutorials"
- 25.Anthropic, "How Claude remembers your project" (CLAUDE.md and auto memory, capped at 200 lines / 25KB). [docs.claude.com](https://docs.claude.com/en/docs/claude-code/memory) (accessed 2026-08-23) — source of "context, not enforced configuration"
- 26.Anthropic, "Agent Skills — Overview" (on-demand lazy loading). platform.claude.com (accessed 2026-08-23)
- 27.GitHub, "Adding repository custom instructions for GitHub Copilot." docs.github.com (accessed 2026-08-23)
- 28.Cursor, "Rules." [cursor.com](https://cursor.com/docs/context/rules) (accessed 2026-08-23) — source of "rule contents are included at the start of the model context"
- 29.Diátaxis — documentation framework home and overview (checked to confirm that the agent reader is not yet in the core frame). [diataxis.fr](https://diataxis.fr/) (accessed 2026-08-23)
- 30.GitHub, Octoverse 2025 / Stack Overflow, Developer Survey 2025 — basis for the observation that documentation-consumption statistics are missing relative to how closely the code and agent ecosystems are measured

### Pebblous adjacent (cross-links)

- 31.Pebblous, "Memory without a label cannot be deleted" — provenance of working notes and the grounds for deletion. [report/agent-memory-provenance-deletion](/report/agent-memory-provenance-deletion/en/)
- 32.Pebblous, measuring shared-resource contention across multiple agents — the precedent for instrumenting our own agent fleet. [report/multiagent-shared-resource-turf-war-2026-08](/report/multiagent-shared-resource-turf-war-2026-08/en/)
- 33.Pebblous, putting a gate on an agent-written knowledge graph. [blog/agent-written-knowledge-graph-gate](/blog/agent-written-knowledge-graph-gate/en/)
- 34.Pebblous, a harness that field-tests rule documents rule by rule. [report/agent-loops-harness-over-model](/report/agent-loops-harness-over-model/en/)
