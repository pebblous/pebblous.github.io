---
title: Riemann Hypothesis Proofs by Claude and by Hand, Checked in Opposite Order
subtitle: Alpöge
date: 2026-11-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Riemann Hypothesis Proofs by Claude and by Hand, Checked in Opposite Order

_Alpöge_

Current as of November 28, 2026. Both proofs are still being checked, so the figures and judgments below may change.

## Executive Summary

> [!callout]
> On November 20, 2026, two documents claiming a proof of the Riemann Hypothesis appeared on the same day. Levent Alpöge, a mathematician at Anthropic, released Lean 4 proof code built with Claude. A few hours later, Stanford mathematician Ravi Vakil announced Alessandro Maria Masullo's 940-page manuscript, The Music of the Primes, in a math216 blog post headed "Hurried Announcement." The two documents also claim different things. Alpöge's code targets the Riemann Hypothesis and the Generalized Riemann Hypothesis for Dirichlet L-functions. Masullo's manuscript claims the broader Generalized Riemann Hypothesis for Hecke L-functions.

> They are being checked in opposite order. Alpöge's code went through machines before people could read it. The original release passed all six proof checkers listed in the verification log kept by Andrew Sutherland at MIT (our count), and the Lean development organizations announced on November 21 that the statement and the proof are correct. A human-readable account is being written only now. Masullo's manuscript was written for people from the start, but in its first week online, volunteers working with AI tools began translating it into Lean and piled up a list of defects. Chapter 13, which is supposed to deliver the final result, is empty, and Masullo has said the draft is "in no way in a state that is fit for submission."

> Neither check is finished. On Alpöge's side, Jenny Lorraine Nielsen argues that the code Lean accepted relies on objects with no real content, and in the note Alpöge writes that his mastery of higher-rank automorphic forms is limited. On Masullo's side, no expert has reviewed the defect list. The Clay Mathematics Institute still lists the Riemann Hypothesis as "Active." The distance between a result a machine has accepted and a result a person understands is the same question anyone who relies on AI output now has to answer.

<!-- stat-card -->
**6 of 6** — Checkers that accepted Alpöge's original code — Our count of the checks listed in Sutherland's log, completed Nov 27. In Rubinstein's wording, two of the six are modes of the same Lean kernel

<!-- stat-card -->
**~224×** — Smaller: from 17M lines to 76K lines — Luke Sernau's compressed version, released Nov 25. It passed the same six checkers

<!-- stat-card -->
**293** — Statements in Masullo's draft that are false as printed — Lean formalization repo, tally of Nov 27. Judged by AI agents, not reviewed by experts

<!-- stat-card -->
**85** — Declarations that depend on the objects Nielsen flagged — About 0.006% of roughly 1.47M. A count of dependencies, not a check of meaning

## Two Riemann Hypothesis Claims, Alpöge's and Masullo's, on November 20

On November 20, Alpöge released a four-page note and a bundle of Lean code: 175,187 files, about 17 million lines. At 10:18 a.m. the same day, Vakil published a post titled "Hurried Announcement: Alessandro Masullo GRH" on math216, a course blog, to announce Masullo's manuscript. The post links to two pages, John Baez's and Álvaro Lozano-Robledo's, and the manuscript itself is hosted on Google Sites. Vakil introduced it as written entirely by hand, without AI, and noted that Brian Conrad had been studying it closely for months. Masullo is a number theorist with a Stanford PhD supervised by Conrad. The Mathematics Genealogy Project lists the dissertation as "Arithmetic Deformations of Crystalline Cohomology." We could not confirm Masullo's current affiliation from a primary source.

Vakil's post says little about why Masullo released the manuscript that day. The draft was still being revised, but Masullo judged it better to make the current version public, and Vakil says it was posted in a hurry during a meeting. The original plan, Vakil wrote, was for Conrad and Masullo to spend a year polishing it. Nothing in the post points to Alpöge's announcement as the reason. The idea that a rival release on the same day forced Masullo's hand comes from commentary sites. Neither Masullo nor Vakil has said so.

### 1.1. What each document claims: RH versus GRH

The Riemann Hypothesis says that every nontrivial zero of the Riemann zeta function lies on the line where the real part equals 1/2. The Generalized Riemann Hypothesis (GRH) makes the same claim for broader families of functions, such as Dirichlet L-functions and Hecke L-functions. Only the Riemann Hypothesis itself carries prize money as one of the Clay Mathematics Institute's Millennium Problems. Sutherland's verification log lists five theorems that Alpöge's code claims to prove. It states that the scope stops at Dirichlet L-functions, and that Dedekind zeta functions, Hecke L-functions and general automorphic L-functions are out of scope. According to John Baez's commentary, Masullo's manuscript claims GRH for Hecke L-functions over any number field. Masullo is claiming more.

| Statement | Alpöge and Claude (Lean code) | Masullo (940-page manuscript) | Clay prize problem |
| --- | --- | --- | --- |
| Riemann Hypothesis (Riemann zeta function) | Claimed | Claimed (as a special case) | Yes |
| GRH for Dirichlet L-functions | Claimed | Claimed (as a special case) | No |
| GRH for Hecke L-functions over any number field | Out of scope (stated in Sutherland's log) | Claimed | No |

Sources: Sutherland's verification log (MIT, updated 2026-11-27); Baez, Azimuth (2026-11-22). GRH for Hecke L-functions contains the Riemann zeta function and Dirichlet L-functions as special cases.

Masullo's title is word for word the same as Marcus du Sautoy's 2003 popular book on prime numbers. The two works are unrelated. For what Alpöge's code actually compiled and what the Lean kernel checks, see our November 22 piece, [The Riemann Hypothesis in Lean: What the Checks Established](/blog/riemann-hypothesis-claude-lean-proof/en/).

### 1.2. November 20 to 28

In the eight days after release, new checks and objections arrived almost daily. The table lists events with a time stamp in a primary record, in date order. Times are marked UTC only where the source gives them in UTC.

| Date | Alpöge and Claude | Masullo |
| --- | --- | --- |
| Oct 6 – Nov 16 | Timeline in Alpöge's note: about six weeks from "Stepanov determinant" to "GRH" |  |
| Nov 20 | Four-page note and Lean code released | Vakil's post at 10:18 a.m. Disclaimer added in an update about eight hours later. mccorvie formalization repo created |
| Nov 21 | Joint certification by the Lean FRO and the Mathlib Initiative. Rubinstein checks the original with the Lean kernel and nanoda |  |
| Nov 22 | sounkou dependency-graph analysis. Rubinstein's zeta paper v2 | Baez's commentary. Masullo's statement |
| Nov 23 | 09:10 UTC: Sutherland's end-to-end comparison passes. Alpöge posts "250,000+ pages was a joke" on X |  |
| Nov 25 | Sernau's compressed version (76K lines, 794 modules) released |  |
| Nov 26 | 00:49 UTC Sernau's version passes the paranoid Comparator check (Sutherland). It passes all six checkers (Rubinstein) |  |
| Nov 27 | Sutherland marks all checks complete. Rubinstein's outline v1.5 | mccorvie repo: all seven target theorems reduce to Theorem 12.5.1.1 |
| Nov 28 | Clay Mathematics Institute's Riemann Hypothesis page reads "Active" |  |

Sources: Vakil (math216), Lean community blog, Rubinstein (Waterloo), Sutherland (MIT), Baez (Azimuth), the GitHub repositories named, The Next Web, Clay Mathematics Institute. The timeline in Alpöge's note was confirmed through press coverage.

Pebblous original diagram (summarizing the §1.2 table above). See that table and §2–3 for sources.

## The Checkers That Passed Alpöge's Original, and Nielsen's "Vacuous Witness" Objection

In a joint statement on November 21, the Lean FRO and the Mathlib Initiative, the groups that maintain Lean and its main math library, announced that "both the statement and the proof … are correct." The statement said the result had been confirmed with the official Lean kernel, with con-leche and con-ron, and with several independent third-party checkers. Over the following week, two outside mathematicians ran their own checks and published logs: Michael Rubinstein at the University of Waterloo and Andrew Sutherland at MIT.

### 2.1. Sutherland's log: results by checker for 175,187 modules

Sutherland's log was last updated at 17:27 UTC on November 27, with a note that all checks were finished. All six checkers listed in the log (our count) accepted Alpöge's original release as published, and none rejected it. The standard Lean kernel took 48 hours 3 minutes and used 82.6 GiB of memory. The stricter paranoid check took 72 hours 20 minutes. nanoda, an independent implementation, finished in 27 minutes 42 seconds. Sutherland said the checks were run with Claude Code. So Claude helped build the proof under inspection, and Claude also ran the inspection.

| Checker | Type | Run time | Result on the original (Sutherland) |
| --- | --- | --- | --- |
| Lean standard kernel | Official kernel | 48 h 3 min | Passed (82.6 GiB memory) |
| Lean paranoid | Strict check (a mode of the same kernel in Rubinstein's wording; Sutherland's log lists it as a separate check) | 72 h 20 min | Passed |
| nanoda | Independent implementation | 27 min 42 s | Passed |
| lean4lean | Independent implementation | Per module | 175,187 / 175,187 passed (five rerun with a higher time limit) |
| con-leche | Independent implementation | 3 min 15 s | Accepted 1,468,418 declarations |
| con-ron | Independent implementation | 7 min 6 s | Accepted all five theorems compared |

Source: Sutherland's verification log (math.mit.edu/~drew/grh/, updated 2026-11-27). The con-leche and con-ron builds pinned to Lean v4.36.0 exited without a verdict. The log does not count this as a rejection, and the default builds of both checkers accepted the original.

The table comes with three caveats. First, in Rubinstein's wording the standard kernel and paranoid are two modes of the same Lean kernel. Sutherland's log lists paranoid as a separate check, but calling these "six independent kernels" overstates it. Second, the con-leche and con-ron builds pinned to the latest Lean, v4.36.0, exited without giving a verdict. Third, five modules hit the time limit on lean4lean's first run. The Comparator run, which checks end to end that the statement matches Mathlib's standard definition of the Riemann Hypothesis, printed "Your solution is okay!" at 09:10 UTC on November 23, after 64 hours 8 minutes. A second Comparator run on the original started at 19:03 UTC on November 20 and finished at 21:49 UTC.

Sutherland's own view puts more weight on the result than on the caveats. In a Scientific American article by Howlett, he said: "This is indeed an historic moment." What the checks guarantee covers two things: the code is assembled according to Lean's rules, and its statement matches the standard definition.

Rubinstein's log covers less ground. On November 21 Rubinstein ran two checkers on the original: the Lean kernel and nanoda. nanoda checked 1,484,729 declarations with no type errors, and the five theorems rely only on Lean's three standard axioms. On Rubinstein's page, the phrase "six kernels" refers to Sernau's compressed version, released November 25. Read on its own, the page suggests the original passed only two checkers. Combined with Sutherland's log, both the original and the compressed version passed all six. The declaration counts differ (1,484,729 versus 1,468,418) because nanoda and con-leche count different units.

### 2.2. What the checkers actually confirm

The checkers vouch for three things: that the proof code is assembled according to Lean's rules, that the final statement matches the standard Riemann Hypothesis statement in Mathlib, and that no axioms beyond the three standard ones are used. Explaining to a person why the proof is true is not part of their job. Nor do they separately ask whether a definition in the code refers to the object a mathematician has in mind. That last gap is exactly where Nielsen's objection lands.

### 2.3. Nielsen's objection and the dependency count

Jenny Lorraine Nielsen posted a paper on PhilArchive arguing that Alpöge's proof is invalid, and has revised it several times since. Nielsen argues that one geometric predicate in the code is defined as the constant True, and that the object serving as the geometric witness is a model the code itself calls "degenerate." The core of the objection: a term built out of empty objects cannot be counted as a proof of the Riemann Hypothesis.

On November 22, GitHub user sounkou-bioinfo mapped the original's dependency graph and published counts. Of the four objects Nielsen singled out, 31 declarations depend on anyGeometry, and 85 depend on at least one of the four, counted without duplicates. That is roughly 0.006% of about 1.47 million exported declarations. Nine of the ten declarations defined as True sit in a branch that supplies auxiliary hypotheses, not in the final steps, and none of the 3,242 declarations used in the final steps depend on these objects. The repository is explicit that this is a count of dependencies, not a check of meaning. It also notes that the analysis relied on third-party reproduction reports instead of running a kernel directly, and that the model used for the analysis comes from the same family as the one that produced the proof.

Repositories from ArtificialZeng and onroids then traded rebuttals. The onroids repository points out that how many declarations reference a given declaration is a different question from whether that declaration is needed for the proof. As of November 28, we found no public response to Nielsen's objection from Alpöge or the Lean FRO.

### 2.4. Alpöge's note, the "250,000 pages" remark, and a readable version

Alpöge's four-page note is titled "Remark." It says the approach builds on Stepanov's method from the finite-field setting and credits the decisive idea to Claude. Alpöge wrote that his mastery of higher-rank automorphic forms is limited. A footnote mentions a prose version written with Claude that runs past 250,000 pages. That prose version has not been released.

According to The Next Web, Alpöge posted on X on November 23: "250,000+ pages was a joke guys!" The same post said the page count was not made up. Alpöge added that people seemed to be reading the remark as an admission that something was wrong with the proof, and wrote: "It literally checked out days ago?" Nothing in the post withdraws the proof.

Work on a human-readable version began only after release. On November 25, Luke Sernau put two things on GitHub: a compressed version of the original, about 76,000 lines in 794 modules, and a roughly 300,000-line version meant for reading. According to Sutherland's log for the compressed version, it passed the paranoid Comparator check at 00:49 UTC on November 26. Rubinstein revised a proof outline up to v1.5 (45 pages, 15 steps) on November 27, and steps 11 through 14 still have no written proof. Rubinstein's paper on the zeta function grew from v1 (164 pages) on November 21 to v2 (265 pages) the next day, and v2 reduces the key inequality to 13 numbered hypotheses.

## Masullo's 940-Page Manuscript on Vakil's Blog, and a Week of Errata

Vakil's original post on November 20 was hopeful: "I hope people quickly check it, formalize, fill any small gaps if they occur," and "I really hope it works." Vakil also said plainly that this is outside Vakil's own field and that the manuscript had not been read. About eight hours later the post was updated. The update said several people had reported problems in the manuscript with help from different AI models, and added a disclaimer: "I make no claim as to the correctness of the proof strategy." The update is stamped "Updated November 22, 2026," yet its text calls the first post "Yesterday," so the two dates do not agree. The only timing we can confirm is the "about eight hours later" given in the text itself.

### 3.1. Masullo's statement and an empty Chapter 13

In a statement on November 22, Masullo said the manuscript is "in no way in a state that is fit for submission" and acknowledged many known bugs in the final chapters. The phrase "major revision," describing the extensive rewrite under way, is Conrad's. According to Baez's commentary of November 22, Chapter 13, which should deliver GRH at the end, holds only placeholders where its theorems should be.

### 3.2. The mccorvie Lean formalization: 293 false statements

Translating the hand-written manuscript into Lean began on the day it was posted. By November 24, the riemann-masullo repository, opened by GitHub user mccorvie on November 20, had merged contributions from about 90 people and received some 2,660 pull requests. By the same date, about 13,200 theorems and 1,800 definitions had been formalized. In its November 27 tally, the repository recorded 293 statements in the manuscript as false as printed. All seven of the manuscript's target theorems hang on one unproved claim in Theorem 12.5.1.1, the theorem meant to rule out zeros lying off the strip. Of 28 steps that had no known fix when they were found, 17 have since been proved in Lean, and 11 remain.

The errata file, ERRATA.md, held about 790 entries as of November 27. The bars below show the rough size of the four categories the repository uses. Even within the same repository, the count of "false as printed" differs slightly between the errata breakdown (about 280) and the statement tally (293).

Source: ERRATA.md in the mccorvie/riemann-masullo repository (accessed 2026-11-27). "Unclear or inconsistent" also covers entries flagged as poorly justified. The repository states that its assessment of open steps reflects the judgment of the agents doing the comparison, not of experts.

No expert has yet checked the repository's verdicts entry by entry. While open steps remain, the Comparator check fails because it finds the marker for an unproved step (sorryAx), and the repository records this as expected. Nothing supports reading the 790 errata entries as 790 confirmed errors.

### 3.3. The ityonemo audit: five defects, and "None of this disproves GRH"

The music-of-primes repository from GitHub user ityonemo checked the manuscript not with Lean but with 2b4m, a custom tool written in Zig. Working from a November 20 checkout, the audit reported five logical defects, and said one of them, the Montel step in §1.4.3, breaks the deduction of GRH. The same document says the 513 completed proofs through Chapter 12 are untouched by any of the defects, and adds: "None of this disproves GRH." Masullo has said the manuscript does not use Weil's positivity criterion, but ityonemo points out an internal contradiction: §14.1.2 derives GRH using exactly that criterion. Several outside audits besides this one have flagged §1.4.3.

Naslund's review repository, rh-verification (GitHub user enaslund), points somewhere else. Theorem 11.3.2.1 yields the value log 2, but the later integrals whose limit should produce that value are all 0, so the limit cannot be log 2. The review says it was written with AI coding tools, and this finding has not been confirmed by an expert either.

Public GitHub numbers show attention splitting two ways. As of November 28, the repository for Sernau's compressed version had 1,081 stars. The mccorvie repository had 189 stars, 159 forks, 86 open issues and 377 open pull requests. Stars went to the compressed Alpöge proof. The checking workload, visible in issues, pull requests and forks, went to Masullo's manuscript.

## Alpöge Carries Over Stepanov, Masullo Builds on Connes

The two proofs aim at the same target from different mathematical starting points. Alpöge's side carries over to number fields a method once used to prove the Riemann Hypothesis for curves over finite fields. Masullo's side extends the trace-formula framework laid down by Alain Connes. What follows relies on Alpöge's note, press coverage of it, and Baez's commentary. It makes no judgment about which argument is right.

### 4.1. Alpöge and Claude: Stepanov's method and a chain of theta lifts

Stepanov's method is an elementary technique for proving the Riemann Hypothesis for curves over finite fields, which is one part of the Weil conjectures. You build an auxiliary function that vanishes to high order at many points, and you secure that multiplicity with derivatives. Alpöge's note describes moving this framework to number fields and replacing the derivative-based multiplicity with a chain of theta lifts between unitary groups. The note credits this decisive idea to Claude. Press coverage said the chain grows to roughly the square root of the length of the prime sum, but according to a summary on the paper-discussion site alphaXiv, that length is not a bound the note proves.

The timeline printed in the note was compiled by Claude. It starts with a "Stepanov determinant" entry on October 6 and reaches a "GRH" entry on November 16, about six weeks later. What the human decided and what Claude wrote during those weeks survives in the note only as entry names.

### 4.2. Masullo: Connes's adelic setting and a new trace formula

According to Baez, Masullo starts from Connes's adelic setting and sets up a new trace formula for L′/L, the logarithmic derivative of an L-function. The kernel of the formula splits into pieces, one per prime, and the contribution of sufficiently large primes vanishes through Poisson summation. The finitely many primes that remain are handled with a local version of Connes's trace formula. The manuscript says it keeps only the sound parts of an idea from Christopher Deninger.

On this route, AI played no part in building the proof. As Vakil described it, the manuscript was written by hand. AI came in after publication, on the checking side. ityonemo compared the manuscript against a custom tool, the mccorvie repository used agents, and Naslund (GitHub enaslund), who posted an independent review, also used AI coding tools.

In the table below, the first three rows condense the mathematical routes from 4.1 and 4.2 and the scope from 1.1. The last four rows come from the checking records in Sections 2 and 3. The row where the two proofs differ most is not the mathematics but the order of checking.

| Item | Alpöge and Claude | Masullo |
| --- | --- | --- |
| Starting point | Stepanov's method for curves over finite fields | Connes's adelic setting and trace formula |
| Key tool | Chain of theta lifts between unitary groups | New trace formula for L′/L, split by prime, with Poisson summation |
| Claimed scope | Riemann Hypothesis, GRH for Dirichlet L-functions | GRH for Hecke L-functions over any number field |
| Form | About 17 million lines of Lean 4 plus a four-page note | 940-page hand-written manuscript |
| Role of AI | Writing the proof (including the decisive idea) and running checks | Checking and formalization after release |
| Order of checking | Machine check first, human-readable version later | Human conception first, machine check later |
| Open as of Nov 28 | Response to Nielsen, a human-readable proof, outline steps 11–14 | Chapter 13, Theorem 12.5.1.1, expert judgment on the errata |

Sources: Alpöge's note (via press coverage), Sutherland's and Rubinstein's logs, Baez's commentary, the mccorvie and ityonemo repositories. The descriptions of each route are commentary-level summaries.

## The Clay Page Still Says "Active," and Both Proofs Still Need People

As of November 28, the Clay Mathematics Institute's Riemann Hypothesis page shows the status "Active" and does not mention either November claim. The Next Web, citing The Register, reported that the label had changed from "unsolved" to "active." Under the Millennium Prize rules, a solution must appear in a qualifying publication, then survive at least two years of scrutiny and win broad acceptance in the mathematical community. Neither document has been published in a journal.

That is as far as the facts go. On Alpöge's side, a formally verified artifact is public and outside mathematicians have rechecked it. On Masullo's side, formalization is under way and the author has acknowledged the manuscript is unfinished. No official body has ruled that whoever passes a machine check first holds "priority."

### 5.1. What is left on each side

Alpöge's side still has to explain in plain mathematical language why the proof is true, and to answer Nielsen's objection. Sernau's reading version and Rubinstein's outline are that work in progress, and steps 11 through 14 of the outline are still blank. Masullo's side has to fill Chapter 13, prove Theorem 12.5.1.1, and get experts to rule on the agent-generated errata. On both sides, what remains calls for human understanding and judgment.

Proving the same theorem by different strategies is common in mathematics. If Masullo's manuscript is repaired and passes verification, the same problem would have a human-written, idea-driven proof alongside a formal proof built with AI. As of November 28, that remains an if.

## Why Pebblous Is Watching

In this story the word "passed" referred to three different records: two checkers Rubinstein ran on the original, six listed in Sutherland's log for the original (our count), and six that Sernau's compressed version passed. Unless you spell out which artifact passed which checker over what scope, one word ends up covering different facts. Pebblous DataClinic does the same job when it turns a claim that "the data is ready" into a diagnostic report: it records the dataset version, the checks run and their scope together.

Nielsen's objection and the sounkou count measured different things. Nielsen pointed to the presence of empty objects inside the code. sounkou counted their contribution: only 85 declarations depend on them, and the final steps do not. Whether meaningless records are mixed into training data, and whether those records actually affect a model's output, are likewise two separate measurements. Just as the sounkou repository insisted its count is not a check of meaning, any diagnostic metric that counts dependencies carries the same limit.

When an AI-produced artifact passes automated checks, the receiving side should ask for three things: the list of checkers, the scope of the checks, and a summary a person can read. Alpöge's side has the first two, and the third is missing. Going the other way, a 940-page human document drew about 790 errata entries in a week from AI audits and crowd formalization, and that list in turn is waiting for expert review. The cost of verification does not disappear. It moves to the final human step, and the design of any workflow comes down to where that step sits.

Pebblous has been tracking the provenance and verification of AI math proofs. In August we covered [the provenance gap behind the Jacobian conjecture proof](/report/ai-math-proof-provenance-gap/en/), in September [a declaration by 25 Fields medalists on how AI proofs are announced](/blog/fields-medalists-declaration-proof-provenance/en/), and on November 22 [Alpöge's Lean proof](/blog/riemann-hypothesis-claude-lean-proof/en/). This time, a human-written proof and an AI-assisted proof appeared on the same day and were checked with the same tools, Lean and AI audits.

## References

Figures in the text were checked against verification logs, author documents and GitHub repositories accessed through November 28, 2026. Nielsen's paper on PhilArchive was blocked and could not be opened directly; its content was confirmed through search results and quotations in the sounkou repository. Wording and the timeline from Alpöge's note were confirmed through press coverage.

### Primary sources: verification logs and author documents

- 1.Vakil, R. (November 20, 2026, later updated). "Hurried Announcement: Alessandro Masullo GRH." [math216.wordpress.com](https://math216.wordpress.com/). Source of the two quoted sentences, the disclaimer and mention of AI models added about eight hours later, the reason for early release, and Conrad's review.
- 2.Masullo, A. M. (2026). The Music of the Primes (manuscript, 940 pages). Google Sites. [sites.google.com/view/tmotp/home](https://sites.google.com/view/tmotp/home). Vakil's post announced it through the pages of Baez and Lozano-Robledo.
- 3.Sutherland, A. V. (updated November 27, 2026). Alpöge/Claude GRH verification log. MIT. [math.mit.edu/~drew/grh/](https://math.mit.edu/~drew/grh/). Source of the checker table (six is our count), run times, Comparator results and use of Claude Code in 2.1, and the claimed scope in 1.1. The Comparator result for the compressed version comes from [math.mit.edu/~drew/shortgrh/](https://math.mit.edu/~drew/shortgrh/).
- 4.Rubinstein, M. (November 21–27, 2026). "Alpöge/Claude proof of the Generalized Riemann Hypothesis." University of Waterloo. [math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/](https://math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/). Source of the two-checker results on the original, the nanoda declaration count, the six-checker results on Sernau's version, outline v1.5 and the zeta paper versions.
- 5.Lean FRO and Mathlib Initiative (November 21, 2026). Joint statement. Lean community blog. [leanprover-community.github.io/blog/posts/riemann-hypothesis/](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/)
- 6.Alpöge, L. (November 20, 2026). "Remark" (four-page note) and Lean code bundle. Confirmed via the Lean community blog (ref. 5) and press coverage.
- 7.Sernau, L. (November 25, 2026). grh-lean. GitHub. [github.com/lsernau/grh-lean](https://github.com/lsernau/grh-lean)
- 8.Nielsen, J. L. (2026, revised several times). "The Invalidity of Alpöge's Proof of the Riemann Hypothesis…" PhilArchive NIEIOT-2. [philarchive.org/rec/NIEIOT-2](https://philarchive.org/rec/NIEIOT-2)
- 9.sounkou-bioinfo (November 22, 2026). rh-claude-alpoge-graphs. GitHub. [github.com/sounkou-bioinfo/rh-claude-alpoge-graphs](https://github.com/sounkou-bioinfo/rh-claude-alpoge-graphs). Source of the 31, 85 and 3,242 dependent declarations in 2.3 and the repository's own caveats.
- 10.onroids (November 27, 2026), ArtificialZeng (November 22, 2026). Riemann-hypothesis-Auditing. GitHub.
- 11.mccorvie (November 20, 2026 onward). riemann-masullo. GitHub. [github.com/mccorvie/riemann-masullo](https://github.com/mccorvie/riemann-masullo). Source of the formalization figures and errata breakdown in 3.2, and the caveat that verdicts are the agents'.
- 12.ityonemo (November 20, 2026). music-of-primes. GitHub. [github.com/ityonemo/music-of-primes](https://github.com/ityonemo/music-of-primes). Source of the five defects in 3.3 and the quotation "None of this disproves GRH."
- 13.enaslund. rh-verification. GitHub. Naslund's review of the manuscript.
- 14.Clay Mathematics Institute. Riemann Hypothesis (status "Active," accessed November 28, 2026). [claymath.org/millennium/riemann-hypothesis/](https://www.claymath.org/millennium/riemann-hypothesis/)
- 15.Mathematics Genealogy Project. Alessandro Masullo (id 272472). [mathgenealogy.org/id.php?id=272472](https://www.mathgenealogy.org/id.php?id=272472)

### Commentary and press

- 16.Baez, J. (November 22, 2026). "Masullo on the Riemann Hypothesis." Azimuth. [johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/). Source of the manuscript's claimed scope, the description of its route, and the state of Chapter 13.
- 17.Howlett (November 2026). Report on the verification of the Alpöge/Claude proof. Scientific American. Source of Sutherland's quote "This is indeed an historic moment."
- 18.Nature News (2026). "Mathematicians astounded by AI and human-written proofs of iconic Riemann hypothesis." doi:10.1038/d41586-026-03812-7. (not verified)
- 19.The Next Web (November 24, 2026). "Anthropic's Alpöge says the 250,000-page Riemann proof figure was a joke." [thenextweb.com](https://thenextweb.com/news/alpoge-250000-page-riemann-proof-figure-joke-lean-clay-active)
- 20.du Sautoy, M. (2003). The Music of the Primes. A popular mathematics book with the same title as Masullo's manuscript. The two works are unrelated.

### Earlier Pebblous coverage

- 21.[The Riemann Hypothesis in Lean: What the Checks Established](/blog/riemann-hypothesis-claude-lean-proof/en/) (November 22, 2026). On the size of Alpöge's code and the basics of the Lean kernel.
- 22.[The Proof Was Right. How It Got There Wasn't Recorded](/report/ai-math-proof-provenance-gap/en/). On the provenance gap in AI math proofs.
- 23.[25 Fields Medalists Signed a Declaration Against How AI Proofs Are Announced](/blog/fields-medalists-declaration-proof-provenance/en/)
