---
title: A Better Model Will Not Fix AI-Written Korean
subtitle: Taking apart a 4,556-star open-source prose repair layer, then running it on our own published work
date: 2026-08-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Better Model Will Not Fix AI-Written Korean

_Taking apart a 4,556-star open-source prose repair layer, then running it on our own published work_

## Executive Summary

> [!callout]
> When AI-written Korean reads wrong, taste is not the reason. Korean accounts for **0.84%** of the web corpus that feeds pretraining; English accounts for 40.6%. A model trained on a mix that lopsided still passes through English-leaning internal representations when it answers in Korean, and English punctuation habits ride along into the Korean sentence. Swap the model and the residue stays, because the data mix has not changed. That is why a repair layer bolted on after the model, working only on its output, is a coherent answer rather than a hack.

> This report takes apart one open-source implementation of that layer at the design level, then runs it on our own published articles and on a canonical manuscript written by a human. The safety machinery works. A deliberately aggressive rewrite was halted at a **60.1%** character-change rate, and the same verdict caught an altered direct quotation and twelve numbers that had gone missing. You can watch a design decision pay off: the verdict is not left to a human eye or to the model's own opinion of its work.

> The more important result came from the same experiment. A manuscript written by a person in 2020 drew the tool's highest risk grade, and deleting five commas flipped it. Apply a statistic that holds at the population level to one person's writing and that person's voice starts reading as a machine artifact. Any organization about to build and operate style rules should look at that failure first.

<!-- stat-card -->
**0.84%** — Korean share of the web corpus — English 40.6% — a 48× gap

<!-- stat-card -->
**4.8×** — Excess commas after connectives — LLM 19.83% vs human 4.10%

<!-- stat-card -->
**5 commas** — Flip a human text's risk grade — A 0.5% edit takes high (6) to low (2)

<!-- stat-card -->
**60.1%** — Hard stop on over-editing — Caught an altered quote and 12 lost numbers

## Korean Is 0.84 Percent of the Web

Read enough Korean written by a generative model and something snags, even when every fact is right. Looking for the cause in the individual model gets you nowhere. The cause is in what the model was raised on.

### 1.1. Korean does not even reach one percent

Common Crawl scrapes the open web wholesale and publishes the language breakdown. It has also been the single largest source in the pretraining data of most large language models. In the most recent crawl, CC-MAIN-2026-30, English is 40.58% and Korean is **0.843%** — a factor of 48. The more telling gap is not the one against English but the one against Korean's neighbors. Japanese sits at 5.32%, **6.3 times** Korean's share. Whatever is holding Korean down, "it isn't English" does not explain it.

Figure 1. Language shares in the web corpus. Korean is one forty-eighth of English and one sixth of Japanese.

One line has to be held when citing this number. Common Crawl is a raw web crawl, not the training mix of any particular commercial model, and those mixes are not published. The direction, though, can be stated conservatively. Studies of open pretraining datasets report mixes that tilt further toward English than the web distribution does, not less. Read **0.84% as an upper bound rather than a lower one**.

### 1.2. The middle layers lean English

Skewed data produces skewed internal representations. [Do Llamas Work in English?](https://aclanthology.org/2024.acl-long.820/), presented by Wendler and colleagues at ACL 2024, used the logit lens to read the intermediate layers and found that even on non-English prompts, the semantically correct token decodes with higher probability in its English form than in the input language's form partway through the stack. Only in the final layers does the representation move into the input language's region.

The scope of that observation deserves precision. The subject is the Llama-2 family, and the tasks are three single-token completions whose answer is fully determined by the prompt: translation, repetition, and cloze. Free-form generation was not measured. The authors themselves avoid saying the model "translates through English" and instead describe an **English-leaning concept space**. The claim is not that a translation pipeline sits inside the model, but that the preferences of the dominant training language are soaked into the representation space.

### 1.3. English comma habits ride along

That is a story about representation space. A 2025 paper measured what it leaves on the surface of an actual Korean sentence. [KatFishNet](https://aclanthology.org/2025.acl-long.1030/) (ACL 2025 Main), from a Seoul National University group, built the first benchmark for detecting LLM-generated Korean and used three feature families: spacing patterns, part-of-speech n-gram diversity, and comma usage. The comma feature is where humans and models separate most sharply.

Appendix G.1 gives the numbers. In argumentative essays, a comma follows a connective ending **4.10%** of the time for human writers and **19.83%** of the time for LLMs — 4.8 times as often. Poetry runs 4.68% against 15.57%, paper abstracts 13.27% against 28.01%. The size of the gap moves by genre; the direction does not.

| Genre | Human writing | LLM output | Ratio |
| --- | --- | --- | --- |
| Argumentative essay | 4.10% | 19.83% | 4.8× |
| Poetry | 4.68% | 15.57% | 3.3× |
| Paper abstract | 13.27% | 28.01% | 2.1× |

********Table 1. Comma rate immediately after a connective ending (KatFishNet, ACL 2025, Appendix G.1)

What matters is that the paper also names the cause, and names English while doing it. Korean convention and English convention part ways precisely at the comma after a conjunctive adverb such as 그리고 (and) or 그러나 (but), and that is the junction where the authors place the blame.

"The Korean orthography guidelines state that it is natural **not** to use a comma after conjunctive adverbs such as 그리고, 그러나, 그런데, and 그러므로… **Unlike English, which often requires a comma in such cases**, Korean does not… The tendency of LLMs to insert unnecessary commas after these modifiers suggests **an influence of English punctuation norms** on their output… Prior research highlights how multilingual models exhibit preferences shaped by dominant training languages (Wendler et al. 2024). Given that LLMs are trained on multilingual data with English-dominated corpora, they may **internalize English punctuation conventions**, where commas frequently appear before conjunctions."

Verbatim excerpt, KatFishNet Appendix G.1

That completes a chain running from corpus composition all the way down to a single comma in a sentence. The weight of the chain comes from its authorship: this is the account given by peer-reviewed authors, not an inference of ours.

Figure 2. The chain from corpus composition down to a single comma. The evidence behind each box, in order: Common Crawl statistics, Wendler et al. (2024), KatFishNet Appendix G.1, and the measurements in that same appendix.

The appendix holds one more observation worth carrying over. Humans concentrate their commas on a few specific part-of-speech junctions; models spread them evenly across many. **"AI does not choose where to put commas"** describes the finding better than "AI uses too many commas."

### 1.4. English needs this too, at a different layer

So does English prose need the same treatment? Translation studies answered that already. [Post-editese: an Exacerbated Translationese](https://aclanthology.org/W19-6627/), Toral's best-paper work at MT Summit 2019, compared post-edited machine translation against translation done from scratch across three datasets, five translation directions, and rule-based, statistical, and neural systems alike. Post-edited text had lower lexical variety and lower lexical density, and its sentence lengths hugged the source more closely. Simpler, more normalized, more interference from the original.

That is what English speakers are pointing at when they say something reads like AI. Not translationese — flattening and lexical poverty. Different layer, different tool. Section 2 shows, with receipts, that porting a list of English patterns to Korean leaves half of it swinging at nothing.

Nor is this only a story about English and Korean. In the same crawl, Japanese is 5.32% and Chinese 4.43%. Both are small next to English, and both are five or six times larger than Korean. If the chain above holds, these languages carry the same kind of residue in different amounts. What shape it takes, though, is only knowable by measuring in that language. KatFishNet did that work for Korean; where no such measurement exists, even the question of what to fix stays open.

> [!callout]
> Toral's finding carries one more warning that runs through this whole report. **Text corrected by human hands still bore the fingerprint of the original.** If that is true, nothing guarantees that a layer in which a model corrects a model's output leaves no fingerprint of its own. Section 6 comes back to this.

## Removing the AI Tell Means Two Different Jobs

One is fooling a detector. The other is turning the text into something a reader can read. The names blur together, but the goals, the success metrics, and the business models all diverge.

| Axis | Camp 1: detector evasion | Camp 2: quality repair |
| --- | --- | --- |
| Representatives | Undetectable AI, StealthGPT, HIX Bypass, Humbot | blader/humanizer, im-not-ai, Korean derivative skills |
| Goal | Slip past GPTZero and Turnitin | Make the text readable |
| Success metric | Bypass rate (%) | Style metrics improved, meaning preserved |
| Business model | Mostly paid SaaS, closed source | MIT open source |
| Verifiability | Self-reported bypass rates, not reproducible | Code, rules, and baselines published |
| Who it answers to | The referee (the detector) | The reader |

Table 2. The two camps compared (public information as of 2026-08-20)

Pebblous works on the second one. Our objection to the first is not only ethical: its goal does not hold up. In May 2026 we published a report on the [mathematical limits of AI text detectors](../../ai-text-detector-limits/en/). Because individual students write from different distributions, false positives have a theoretical floor, and pinning the false-positive rate at 1% drops detection power to 6%. If the referee cannot be trusted, there is no reason to pay for a service that fools it.

### 2.1. Two lineages grew from different roots

From the outside the Korean side looks like a single tool, but dig through GitHub and it is not. By size, the English-origin one is far larger. [blader/humanizer](https://github.com/blader/humanizer) has **36,676 stars**, eight times the leading Korean tool, and shipped on 18 January 2026, three months earlier. Its evidence base is the Wikipedia community's "Signs of AI writing" page, and it carries roughly 33 patterns.

The other lineage started in Korean. [epoko77-ai/im-not-ai](https://github.com/epoko77-ai/im-not-ai), released on 24 April, is built on the typology of translationese developed in Korean translation studies, and as of our check on 20 August 2026 it had 4,556 stars and 489 forks. The next Korean-only tool by size has 7 stars. "Monopoly" is the wrong word; **a concentration of roughly 650 to 1** is the right one.

| Repository | Stars | Root | Character |
| --- | --- | --- | --- |
| blader/humanizer | 36,676 | English origin | 33 patterns from Wikipedia:Signs of AI writing |
| epoko77-ai/im-not-ai | 4,556 | Korean native | 10 categories, 71 patterns from translation-studies typology |
| dotoricode/korean-humanizer | 7 | Independent | 12 domain categories applied by priority |
| IsaacEryn/humanizer-ko | 3 | blader fork | Swaps 4 English-only patterns for Korean ones, extending to 35 |
| mary-jeon/mary-language | 0 | Independent | Own gate that hard-fails with exit code 2 when a footnote is lost |

Table 3. The Korean prose-repair landscape (queried directly through the GitHub API, 2026-08-20)

The best account of why the two lineages split comes from someone who tried to fork the English tool into Korean. IsaacEryn put it this way in the fork's README.

"Many of the original humanizer's 33 patterns are **English-only**. Title Case, hyphenated compounds, copula avoidance — none of these exist in Korean, while Korean AI output has tells of its own."

IsaacEryn/humanizer-ko README, published 2026-08-13 (translated from Korean by Pebblous)

A practitioner porting code rediscovered exactly what Section 1 described. The English tell lives in capitalization and hyphenated compounds; the Korean tell lives in commas, sentence endings, and translationese connectives. When the layer differs, translating the rule list buys you nothing.

A second fork hit the same wall. choconyam's version added a separate Korean-only checklist on the grounds that the original was built around English prose, and that its rules about dashes, quotations, and subjects make Korean read worse when applied as written. Two people who do not know each other, porting the same repository into Korean, stopped at the same spot. So there is no reason to read this landscape as a purely Korean event. Skills that strip the AI tell grew across the agent ecosystem through the first half of 2026, and the Korean tools are that current's Korean branch. The current gets imported; the rules do not.

### 2.2. Pebblous solves the same problem at publish time

Pebblous works the same problem from a different position. Our blog's publishing pipeline includes a review step called `ko-prose-humanizer`, and every piece of Korean prose we publish — this report included — passes through it. It scores eleven style signals and demands correction when a threshold is crossed, which makes it less a tool that rewrites text than **a gate that decides whether text ships**. In this report our own tool appears only as a comparison point, because the purpose here is to hold someone else's ruler against our writing.

## The Code Makes the Call

Hand style repair to a model and two things tend to collapse. The model becomes the judge of how much it changed, and facts get rewritten along with the prose. This tool's design pulls both decisions out of the model. In one line: **the verdict comes from code, not from the model.**

### 3.1. Every pattern carries a severity

The rules are organized as 71 numbered patterns across ten categories, A through J, with one currently on hold. Each pattern carries a severity. S1 is a decisive tell that counts on a single occurrence and is always removed; S2 triggers at three or more; S3 is touched only when it overlaps with another signal. Results are graded too: A and B pass, C goes back for a second pass, D goes to a human.

Input is scored quantitatively first, and that score picks the execution path — one model call if the text is light, two if it is ordinary, three or more if it is heavy. Route selection is precomputed rather than decided inside a prompt, which tells you most of what you need to know about the design.

### 3.2. Four axes catch over-editing

There are four hard rules: meaning is invariant (numbers, proper nouns, and direct quotations preserved 100%), edits are evidence-based (surgery only where a pattern was detected), genre is preserved, and over-editing is forbidden (character-change rate warns at 30%, hard-stops at 50%). Three of the four exist as inspection scripts rather than declarations. `verify_gates.py` takes the text before and after, judges it on four axes, and leaves an exit code.

| Axis | What it looks at | On failure |
| --- | --- | --- |
| P0 Character-change rate | What share of the original was altered | Warn at 30%, hard stop at 50% or above (exit code 2) |
| P1 Target achieved | Whether the targeted metric's z-score came back into range | Warns on undershoot or overcorrection (z < −1.5) |
| P2 Wipeout check | Whether five or more negation antitheses dropped to zero | FAIL — reads as a pattern bulldozed out of existence |
| P3 Golden | Injected numbers, altered direct quotes, abrupt register shifts | FAIL — a quotation that no longer matches the original is caught |
| P4 Sentence touch rate | What share of sentences were touched, and whether numbers vanished | Reporting only (does not block) |

********************Table 4. The four-axis gate (from the repository's `scripts/verify_gates.py`)

P2 is the interesting one. Removing every instance of a bad pattern sounds like a win; this gate reads it the other way. If not one of the original antitheses survives, that is not correction but style deletion. A tool built to fix writing has defined its own excess as a failure mode.

What must not be touched is enumerated too: numbers, units, and dates; proper nouns, product names, and model names; direct quotations inside double quotes; statutory text; and academic terms of art. And in several places the documentation repeats that the tool is not for evading detectors and guarantees nothing about the integrity of an academic submission or a piece of journalism. A watermark-removal feature was **deliberately left out**, with the reasoning recorded: there is no detector available, so the effect of removal cannot be measured, and unmeasurable removal is just blind word-shuffling.

Figure 3. The rewrite pipeline and the four-axis gate. Both route selection and the pass/fail verdict are decided by code on this flow, not inside a prompt.

### 3.3. What counts as evidence that it became a standard

Star counts prove a tool spread; they do not prove it became a standard. The verifiable evidence sits elsewhere. Four projects that do not know each other adopted the same taxonomy and said where it came from.

| Derivative project | What it took |
| --- | --- |
| Squirbie/im-not-ai-codex (★60) | Codex plugin port. Carries the rulebook, taxonomy, and playbooks over from v2.0.0 and states its version policy |
| ptec07/humanize-korean | Port for Hermes Agent. Includes the S1/S2 rulebook and the v2.0 update notes |
| nathankim0/humanize-korean | Independently reimplements the 30% warning and 50% rejection. Credits the source in its license notice |
| cloudvelvet/academic-humanize-korean | Adapts the meaning-preservation principle for academic manuscripts. Credits the origin project in LICENSE and NOTICE |

****Table 5. Derivative projects that adopted the taxonomy with attribution (READMEs read directly, 2026-08-20)

The third row is the striking one. What another team copied was not the pattern list but **the numbers 30 and 50**. People hold their own opinions about what counts as an AI tell, yet nobody argued with "measure how much you changed in code, and block it when it goes over." The design idea travels ahead of the pattern list.

> [!callout]
> **A note on citing the numbers.** Repository metrics were pulled straight from the GitHub API (checked 2026-08-20: 4,556 stars, 489 forks, 49 merged PRs, latest release v2.3.2). The maintainer's figure of "33 outside contributors," on the other hand, diverges sharply from the API count of 10, and the claimed "13,990th in the world" has no official ranking API behind it. Approximating with a `stars:>4555` search query lands at roughly 13,721st and the top 0.0435%, so the percentile nearly matches. Absolute rank and contributor count are best read as **the maintainer's own tally**.

## Two Teams Threw Out the Same Folklore

The usual way a style rule fails is not that the rule is wrong but that the rule has no evidence under it. "This phrasing reads like AI" typically starts as a hunch and hardens through repetition. This project checked its hunches against its own corpus and discarded the rules that did not survive.

### 4.1. Sixty AI texts against sixty human ones

The design is simple. Sixty pieces of Korean prose generated by three models from the same twenty prompts, with no style guidance, set against sixty pieces of Korean prose confirmed to have been published before 1 January 2022. The second set predates ChatGPT's release, so AI contamination is impossible in principle; it spans forty outlets, and publication dates were double-checked against the Wayback Machine. The test statistic is the log-likelihood ratio G².

Among the confirmed signals, the widest gap belongs to the negation antithesis. The "not A but B" construction appears 5.8 times per thousand characters in AI prose against 0.6 in human writing, a factor of **9.2**.

| Pattern | AI (per 1,000 chars) | Human (per 1,000 chars) | Ratio | G² |
| --- | --- | --- | --- | --- |
| Negation antithesis ("not A but B") | 5.8 | 0.6 | 9.2× | 41.7 |
| Comma overuse | 49.1 | 33.4 | 1.5× | 25.5 |
| Share of sentences containing commas | 394.8 | 285.5 | 1.4× | 13.3 |
| Skew toward the "-han-da" ending | 95.0 | 52.2 | 1.8× | 9.5 |

****Table 6. Signals confirmed against the project's own contrast corpus (repository `references/empirical-validation.md`, 2026-07)

There were findings in the other direction too — things AI prose **lacks**. Sentences longer than 100 characters appear 91.3 times per thousand sentences in human writing but only 8.1 times in AI output (G²=60.9), and direct quotation inside double quotes runs 8.7 against 0.0 (G²=96.4). Parentheses split 10.6 to 1.2. Of these the tool adopted only the missing long sentence as something to prescribe, leaving the rest as observations. The moment it invents a quotation that was never there, the meaning-invariance rule is broken. Separating what may be fixed from what may only be watched is a judgment call the project made explicitly.

### 4.2. Two rules the project threw out

The real value of checking shows up in the rules that failed, not the ones that passed. Two were rejected.

- **The rule that always broke up "-reul tonghae" ("through/via").** Choi Hee-kyung's 2016 comparison found 84.4 occurrences in non-translated Korean against 42.1 in translated text — native writers use it twice as often. With no basis for treating it as a marker of translationese, only the check against overuse remained.
- **The rule that converted the "-geosida" ending to plain declarative form.** Careful measurement gave 20.4 for AI against 43.0 for humans, again twice as often for people (G²=6.2). The first measurement had counted the two-syllable ending "-ida" and swept in other forms with it, and the author corrected that measurement error in the documentation.

The project also demoted its own citations. The marketing copy leans on the fact that Korean translation studies' eight canonical types of translationese come with academic references attached, but the internal documentation is far stricter about what those references are worth.

"Kim Jeong-woo (2007), which the taxonomy cited, is a typological and prescriptive paper, not a quantitative one. It reports no frequency or discriminative statistics for individual features. It is valid only as **typological grounding**; citing it as **empirical evidence is over-attribution**. […] There is effectively no study of Korean translationese that reports statistical significance."

Repository `references/empirical-validation.md` (translated from Korean by Pebblous)

Projects whose internal documents are stricter than their marketing are not common. The most accurate compliment you can pay this tool is about that posture, not about the number of patterns.

### 4.3. We landed in the same place

The same rejection happened on our side. Pebblous's style reference, `docs/ai-tone-detection.md`, treated the "-geosida" ending as an AI marker until the 1 August 2026 revision removed it. Recounting across every article we have published and against canonical human-written text showed people using it nearly twice as often. Different corpora, two teams unaware of each other, the same conclusion.

We went one step further in another place. Our `docs/ko-style-standard.md` declined to build the standard around the classic translationese correction table, because double passives occur 0.03 times per 10,000 characters in our writing and "e isseoseo" ("in respect of") zero times — a layer we had already cleared. Adopt somebody else's list wholesale and you end up fixing the problems on the list instead of the problems in your text.

> [!callout]
> Both records point at the same lesson. **A style rule without evidence becomes a source of contamination in its own right.** When a rule is wrong, the damage spreads quietly to every document it governs, and without arithmetic nobody notices. That applies directly to the work of writing labeling guidelines and quality criteria.

## We Ran It Ourselves

Reading a design is not the same as running it. We downloaded the eight verification scripts into a scratch directory and pointed them at three kinds of text. They run on the standard library alone, so there was nothing to install. The two scripts take different genre arguments, so we standardized on `essay`, the one key present in both baselines.

> [!callout]
> **The scope of this demo.** What we reproduced is the post-hoc gate that inspects a rewrite. The rewriting engine itself, which applies the 71 patterns, is prompt logic that depends on model calls, and we did not reproduce it here. These numbers cannot be used to judge the tool's overall performance. They are a record of whether the safety machinery actually fires, and of where its verdicts go wrong.

We picked three targets: one of our own articles, a fresh piece of AI prose generated with no guidance, and a manuscript we know a person wrote. The last one turns out to matter most.

| Text | Source | Character | Length |
| --- | --- | --- | --- |
| (a) Pebblous published article | Two body paragraphs from our report on multi-agent industrial data operations | Already flagged for dash overuse by our own review | 707 chars |
| (b) Freshly generated AI prose | The same topic, regenerated with no guidance | Control sample of typical LLM output | 477 chars |
| (c) Canonical human manuscript | A paragraph on artificial intelligence from a 2020 Daejeon Biennale essay | Pre-ChatGPT, first-person, human-authored | 510 chars |

Table 7. The three texts under test

### 5.1. Turning the blade on our own writing

In (a) we touched only the four places where a dash restates what the sentence already said. Numbers, proper nouns, and quotations were left alone. The character-change rate came to **3.8%**, nowhere near the warning line, and risk dropped from medium (4) to low (2). Our own review's dash count went from five to zero. Two tools reading the same signal and pushing in the same direction.

Here is what the edits look like. The original 「TradingAgents 패턴을 산업 데이터 운영 — 제조, 물류, 헬스케어, 에너지 — 으로 옮기면 어디가 무너지는가」 ("Port the TradingAgents pattern to industrial data operations — manufacturing, logistics, healthcare, energy — and where does it break?") traded its dashes for parentheses and became 「산업 데이터 운영(제조, 물류, 헬스케어, 에너지)으로 옮기면」. Where a dash had been used to tack a list onto a claim — 「이미 도메인 간 수렴했다 — 역할 분화 + 중앙 오케스트레이션 + 도구 호출 + 검증 레이어」 ("it has already converged across domains — role separation + central orchestration + tool calls + a verification layer") — the fix stood up a second sentence: 「이미 도메인 간 수렴했다. 역할 분화, 중앙 오케스트레이션, 도구 호출, 검증 레이어가 그렇다」. No word was swapped for a fancier one; the work the dash had been carrying was handed back to a sentence.

The number to watch is the sentence touch rate. Characters moved by 3.8%, yet five of eleven sentences changed structurally. A low change rate does not mean the original survived intact.

### 5.2. An honest edit crosses the warning line

In (b) we stripped out translationese connectives such as 「왜냐하면 ~ 때문이다」 ("the reason is that… because"), 「다시 말해」 ("in other words"), and 「~것을 의미한다」 ("this means that"), along with nominal restatements and the throat-clearing 「따라서」 ("therefore") and 「결론적으로」 ("in conclusion"). We were not trying to cut deep. The character-change rate came back at **30.7%**, over the warning line, with all eight sentences touched.

These are the sentences that went. The pair 「왜냐하면 산업 현장의 데이터는 금융 데이터와 달리 정답이 명확하지 않기 때문이다. 다시 말해, 시장가라는 즉각적인 검증 수단이 존재하지 않는다는 것이다」 ("The reason is that, unlike financial data, data on the factory floor has no clear right answer. In other words, no immediate means of verification such as a market price exists") became 「산업 현장의 데이터는 금융 데이터와 다르다. 시장가처럼 정답을 즉시 확인할 방법이 없다」 ("Data on the factory floor is not like financial data. There is no way to check the right answer instantly, the way a market price does"). Same meaning, shorter, and almost none of the original word units survive into the revision. That is how the character-change rate climbs.

The arithmetic makes a point that is easy to miss: clearing out textbook slop requires rebuilding the sentence frame. It also signals that a 30% threshold is not generous. Any organization adopting this should be ready to tune the value to its own genre.

### 5.3. Human writing draws the highest risk grade

In (c) we changed not a single word. We deleted five commas sitting after connective endings, in constructions like 「하지만,」 ("but,") and 「~하고,」 ("and,"). Character-change rate: 0.5%. The verdict flipped completely across that edit.

Looking at which commas they were tells you what kind of verdict this is. 「불에 구운 고기 맛이 기가 막히다는 것을 처음 알게 되었고, 너나 할 것 없이 불의 화려한 매력에 빠져서」 ("they discovered for the first time how extraordinary fire-roasted meat tasted, and every last one of them fell for the spectacle of flame"), 「불을 꺼뜨리기도 하고, 불에 데기도 한다」 ("sometimes they let the fire die, and sometimes they get burned"). Those beats after a connective ending are the writer's breathing. The tool read that breathing as a model's habit.

| Measure | Before the edit | After deleting 5 commas |
| --- | --- | --- |
| Risk grade | high (6/6) | low (2) |
| z-score, commas after connectives | +10.07 | −0.52 |
| P1 target-achieved verdict | — | "achieved" (the gate approves this edit) |
| Pebblous in-house review | Clean on every check | Clean on every check |

********Table 8. Verdict reversal on a human-authored manuscript from 2020

A manuscript written by a person two years before ChatGPT existed drew the highest risk grade. One metric caused it. Five of the six connective-ending boundaries in the excerpt carried a comma, and that 83.3% produced a z-score of +10.07 against the essay-genre baseline. This is the same axis as the 4.8× signal from Section 1. It is also a clean picture of how a statistic that is true of a population fails in front of one person's writing.

To rule out an accident of a short excerpt, we ran two complete documents through unedited. The direction held.

| Document | Length | Risk | Interference index | Negation antitheses |
| --- | --- | --- | --- | --- |
| Pebblous published report (AI-written) | 7,146 chars | medium (4) | 0.460 | 6 |
| 2020 essay (human-authored) | 14,315 chars | high (6) | 1.073 | 0 |

****Table 9. Cross-check across full-length documents

A human-written essay scored riskier than a report we generated with AI. A second cause compounded the first. Low lexical variety adds a point to the risk score, but a personal essay circling one subject and reusing the same words is not doing what a model repeating a phrase is doing. The formula cannot tell them apart.

For the record, our published report turned up six negation antitheses. The tool's wipeout check triggers at five. Holding someone else's ruler to our own writing turned up exactly what it should have.

### 5.4. Over-editing really does get stopped

Last, we tested the safety machinery. We deliberately rewrote text (a) from top to bottom and fed it to the gate. We tried to keep the facts, but sentence structure, word order, and phrasing all changed. Three axes fired at once.

[P0 char rate]    60.1% [full text] — ABORT — hard stop. Rewrite must not be adopted (warn 30% / stop 50%)
[P1 target]       N/A — structural diagnosis (no lexical S1 anchor)
[P2 wipeout]      C-8 antithesis 0 → 0 — skipped (fewer than 5 in the original)
[P3 golden]       FAIL — 1 finding:
    FAIL [quote_altered] direct quotation 「정답이 사후에 명확해지는…」 does not appear verbatim in the rewrite (quote-invariance rule)
[P4 touch rate]   100.0% (11/11 sentences) — reporting only
[P4 numbers lost] observed: ['1', '100', '1000', '12', '2', '2024', '3', '4', '5', '5.5', '60', '88']
gate: ABORT — hard stop. Rewrite must not be adopted
exit code: 2

Figure 4. Output of `verify_gates.py` (2026-08-20). The run is verbatim; the tool's Korean labels are rendered in English, and the flagged quotation is left in the original.

The hard stop fired at a 60.1% character-change rate, P3 caught a direct quotation that had been paraphrased, and twelve numbers showed up missing in the observation log. Most of them disappeared because a notation like "1/1000" was smoothed into ordinary language such as "only slightly." The notation did not change; information was lost.

Those three lines are the physical evidence for the design philosophy described in Section 3. A human reviewer would probably have missed both the slightly altered quotation and the twelve vanished numbers. The code did not.

### 5.5. The two gates go blind in different places

We put the same texts through our own publishing gate and lined up the verdicts. Where they disagree is more informative than where they overlap.

| Signal | im-not-ai | Pebblous publishing gate | Outcome |
| --- | --- | --- | --- |
| Dash used for appositive restatement | No dedicated axis | Direct target, threshold of 20 per 10,000 chars | Partial match |
| Comma after a connective ending | Core axis, can drive a high verdict on its own | Not checked at all | Mismatch — false positive on human writing |
| Translationese connectives, nominal restatement | Contributes indirectly to the risk score | Catches only some of it | Partial match |
| Altered direct quotation | Blocked in code | No check | im-not-ai stronger |
| Excessive editing | Character rate and touch rate both observed | Nothing | im-not-ai stronger |

****Table 10. The two gates' verdicts side by side

The summary runs like this. The tool under examination is strong at statistical risk scoring and at edit safety, and its statistical axes cannot absorb variation between individual authors, so it misjudges human writing. Our gate catches surface patterns well but has no risk classification at all, so a good deal of translationese prose sails straight through. These are not two competing tools but **two layers that go blind in different places**.

## What Holds for a Group Does Not Hold for a Person

The third experiment in Section 5 deserves a name. The rule was not wrong. The inference from the rule to the individual was wrong. Commas after connective endings are a real signal, confirmed by a peer-reviewed paper, and the tool reproduced the same direction in its own corpus. Yet the moment that statistic was used to judge one person's manuscript, the conclusion inverted.

The figure below puts the whole argument on one page. Human writing averages 4.10%, model output 19.83%. The two distributions clearly separate. The problem is the individual who sits outside them. The 2020 manuscript lands at 83.3% — far to the right of even the model average.

Figure 5. Group distributions and where an individual lands. The two averages are KatFishNet's measurements for the essay genre; the point on the right is the 2020 human-authored manuscript from Section 5.

### 6.1. Six places this tool misses

The observations that came up one at a time earlier add up to six.

**One: inferring from group statistics to an individual.** Exactly as above. The stronger a person's style, the less accurate the risk verdict.

**Two: what the baseline actually is.** This limit is unusual in that the tool wrote it down itself.

"The human corpus is edited professional prose. […] On a 15-piece subset of personal blogs, the gap narrowed sharply. **Read it as a contrast with 'published good writing,' not with 'humans in general.'**"

Repository `references/empirical-validation.md`, "Known limitations" (translated from Korean by Pebblous)

Our experiment caught the author's documented limit in the act of happening. An essay with a strong personal voice was outside this baseline's range from the start.

**Three: the gap between academic evidence and the rule list.** The features KatFishNet validated are spacing, part-of-speech distribution, and commas — the layer of orthography and morphology. The 71 patterns live at the layer of vocabulary, syntax, and rhetoric. A paper backing the comma axis does not carry the rest of the rules with it.

**Four: the repair layer's own fingerprint.** The question deferred at the end of Section 1. If post-edited text keeps the original's fingerprint, something is left behind when a model corrects a model. The sentence touch rate reaching 100% in our experiment shows the shape of that risk. It is hard to say you preserved the original voice in a text where not one sentence went untouched.

**Five: locating the watermarking concern precisely.** When Anthropic announced text watermarking on 11 August 2026, a concern surfaced that quality distortion would be larger in low-resource languages. Follow the mechanism and the concern does not follow automatically. SynthID-Text runs a tournament among candidates drawn from the model's own distribution and picks a winner, so the output distribution is preserved in expectation, and what degrades in low-entropy stretches is detectability, not quality. A language with less training data may even show higher entropy, because the model is less certain. What is true is that **nobody has measured what actually happens in Korean.** Taking a baseline before retroactive application is methodologically correct regardless of whether the hypothesis holds. The tool's author chose a baseline snapshot over watermark removal, and even noted in the documentation that the snapshot's pre-application labels are an estimate.

**Six: self-reported figures.** As noted in Section 3, the outside-contributor count and the global rank do not reproduce through public APIs. This has nothing to do with the tool's quality, but anyone citing the numbers should mark which source they came from.

> [!callout]
> **Our own tooling had the same disease.** The first time Pebblous ran its style checker across all 426 published articles, the false-positive rate came in at **45%**. Quotations accounted for much of it: we were measuring other people's words against our own style rules. Quotation masking went in on 2 August 2026. Writing that someone else's tool misjudges human writing while hiding our own false-positive rate would make this report indefensible.

### 6.2. Flip the limits and you get the roadmap

Most of the six above can be turned around. Here is what comes out when they are.

- **Author-adaptive baselines.** Feed the system a few of an author's earlier manuscripts to fix a personal baseline, then measure deviation from that baseline instead of a global z-score. This one change removes most of the false positives from Section 5.
- **Separate baselines by genre.** There are five genre keys today, but no key for reports, which is why we had to run ours as essays. Technical reports and personal essays do not share sentence habits.
- **A topic-matched corpus.** Pair human writing and model output on the same topic, in the same outlet, at the same length, and topic effects stop mixing with style effects.
- **A human evaluation loop.** Metrics improving and reading better are two different claims. Even a small blind preference study would surface the repair layer's own fingerprint.
- **Independent re-measurement around watermarking.** The procedure for taking a baseline snapshot is already public, so other organizations can measure the same way and compare. If this is a problem only Korean speakers have, the people producing Korean text are the ones who should measure it.
- **Upstream intervention.** A layer that fixes output treats symptoms. The cause lies in the language composition of the training data and the proportion of translated text inside it. Simply recording, as metadata, whether a Korean training text is a translation and what language it came from would make the next generation far easier to diagnose.

The six do not weigh the same. Adding a genre key or fitting per-author baselines is the kind of thing a single maintainer could ship in the next release. A human evaluation loop and a topic-matched corpus are beyond what one repository can carry, and upstream intervention belongs to people in an entirely different seat. Drawing that line in advance — what a repair layer can reasonably be asked to do — beats demanding everything from one tool and being disappointed.

## Why Pebblous Is Writing This

The subject of this report is the work Pebblous has been doing, held up to a mirror. We define AI-Ready Data as "data refined to the point where a model can use it directly for training and inference," and we have spent our time diagnosing the defects in datasets with DataClinic. This time we took the opposite end: the output that has already been made.

### 7.1. Data defects and prose sit at two ends of one chain

If Korean is 0.84% of the training data and much of that share is translated text, then English habits survive in the output. The 4.8× comma gap KatFishNet measured is our thesis — that data composition determines output quality — observed at the surface layer of prose style. Upstream diagnosis and downstream repair are the same causality worked from either side. Joining those ends in a single piece is the first purpose of this report.

### 7.2. Rules are data, and data gets checked

The most practical lesson comes in two layers. The first is evidence. The tool under examination rejected two of its own rules against its own corpus and demoted a citation it had been leaning on. Pebblous revised a reference document for the same reason. The second is the layer of application. Judging an individual by a group statistic produces false positives, and the 45% false-positive rate on our script's first full run is the proof.

Neither point is confined to prose style. Labeling guidelines, quality criteria, and evaluation metrics are all rules that decide what counts as a defect. When such a rule rests on folklore or is applied at the wrong layer, **the rule itself injects fresh contamination into the dataset.** A quality standard nobody has checked is not a quality tool; it is a contaminant.

### 7.3. Five things to check before adopting

Any organization producing AI content in Korean at volume runs into the same question soon enough: what should a style repair layer be required to guarantee? This report yields five procurement and governance items.

- Is the preservation of numbers, proper nouns, and direct quotations **verified in code** rather than by a human read-through?
- Is over-editing bounded by **explicit thresholds** such as 30% and 50%, and can those thresholds be tuned to your genre?
- Is the basis for each verdict public and reproducible? In particular, is **the nature of the baseline corpus** documented?
- Does it avoid false positives on your organization's own voice? **Run it on your canonical manuscripts first.** This is the item this report recommends most strongly.
- Is the goal quality improvement rather than detector evasion, and does the documentation say so?

### 7.4. We chose comparison over self-congratulation

Pebblous is not this tool's competitor. We work the same problem at a different layer. We already review style through a publishing gate and have published the criteria, and our style standard lists this external tool as the largest Korean-language reference of its kind. This article is the first public record of holding our criteria up against that reference.

The method was comparison rather than self-congratulation. We held someone else's ruler to our own writing, and wrote down the places where that ruler goes wrong on human text. We wrote down our own false-positive rate alongside it. In a conversation about prose quality, the position Pebblous wants is not the one that writes well but the one that measures.

### 7.5. Three questions still open

Three questions this report could not answer.

- What is the Korean-to-English training mix in Korean-built models? Published technical reports do not say. That number is what would let anyone test "a better model will not fix it" against domestic models as well.
- How much do author-adaptive baselines actually reduce false positives? Our archive of published articles is large enough to build per-author baselines, so this is a measurement we can run next.
- Do Korean style metrics shift once watermarking is applied retroactively? The baseline procedure is public, so the more organizations that re-measure independently the same way, the firmer the answer.

If the awkwardness comes from the data, the fix will come from the data in the end. A layer that repairs output is a stopgap until then, and what this round confirmed is that even a stopgap needs its arithmetic checked and its safety catch installed.

## Frequently Asked Questions

## References

### Academic

- 1.Wendler, C., Veselovsky, V., Monea, G., West, R. (2024). "Do Llamas Work in English? On the Latent Language of Multilingual Transformers." **ACL 2024**, 15366–15394. [arXiv:2402.10588](https://arxiv.org/abs/2402.10588)
- 2.Park, S., Kim, S., Kim, D.-K., Han, Y.-S. (2025). "KatFishNet: Detecting LLM-Generated Korean Text through Linguistic Feature Analysis." **ACL 2025 Main**. [ACL Anthology](https://aclanthology.org/2025.acl-long.1030/) · arXiv:2503.00032
- 3.Toral, A. (2019). "Post-editese: an Exacerbated Translationese." **MT Summit XVII**, 273–281 (Best Paper). [ACL W19-6627](https://aclanthology.org/W19-6627/)
- 4.Dathathri, S. et al. (2024). "Scalable watermarking for identifying large language model outputs." **Nature** 634. doi:10.1038/s41586-024-08025-4
- 5.Wu, Z. et al. (2024). "The Semantic Hub Hypothesis: Language Models Share Semantic Representations Across Languages and Modalities." arXiv:2411.04986
- 6.Kim, Jeong-woo (2007). A typology of translationese. **The Journal of Translation Studies** 8(1): 61–82. [in Korean]
- 7.Lee, Young-ok (2001). English-to-Korean translation of transitive constructions with inanimate subjects. **The Journal of Translation Studies** 2(1): 53–76. [in Korean]
- 8.Kim, Do-hoon (2009). A study of translationese arising in English-to-Korean translation. **Interpreting and Translation Studies** 11(2): 3–19. [in Korean]
- 9.Park, Ok-soo (2017). Typological features of Korean-to-English machine translation output. **Dong-A Humanities** 41: 155–183. [in Korean]

### Policy, statistics, repositories

- 10.Common Crawl. [Language Statistics](https://commoncrawl.github.io/cc-crawl-statistics/plots/languages.html), CC-MAIN-2026-30 (accessed 2026-08-20).
- 11.Anthropic (2026-08-11). "Claude text watermarking." Implemented with SynthID-Text; no detection API published.
- 12.EU AI Act, Article 50 transparency obligations (in force 2026-08-02).
- 13.[epoko77-ai/im-not-ai](https://github.com/epoko77-ai/im-not-ai) — MIT. README, `references/empirical-validation.md`, `references/scholarship.md`, `scripts/verify_gates.py`, `docs/watermark-baseline-runbook.md` (accessed 2026-08-20, v2.3.2).
- 14.[blader/humanizer](https://github.com/blader/humanizer) — MIT, based on Wikipedia:Signs of AI writing (accessed 2026-08-20).

### Related Pebblous documents

- 15.Pebblous (2026-05-25). [The Mathematical Limits of Detecting AI-Written Text](../../ai-text-detector-limits/en/).
- 16.Pebblous internal documents `docs/ai-tone-detection.md` (revised 2026-08-01), `docs/ko-style-standard.md`, `tools/check-ko-prose.py` v4.1 (2026-08-02).
