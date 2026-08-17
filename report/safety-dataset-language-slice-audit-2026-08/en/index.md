---
title: The AI Safety Dataset Missing Every Hausa Self-Harm Entry
subtitle: Researchers from Black in AI Safety & Ethics opened all 25 language slices across 21 resources, one at a time
date: 2026-08-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Safety Dataset Missing Every Hausa Self-Harm Entry

_Researchers from Black in AI Safety & Ethics opened all 25 language slices across 21 resources, one at a time_

## Executive Summary

> [!callout]
> Multilingual AI safety benchmarks report coverage at the level of the collection. "Evaluated in N languages" is usually a true sentence. The trouble is that the way it is true and the way a reader takes it are two different things. Three authors, working independently under Black in AI Safety & Ethics (BASE), built an audit instrument that puts one language and one dataset in a single row, then opened all 25 language slices one at a time. Languages that sat side by side in a collection's summary turned out, once the slice was open, to be resources that differed in size, in provenance, in how much verification they had received, and in whether anyone could get them at all.

> The firmest evidence came from inside a single pipeline. In a 2026 resource that ran Hausa and Swahili through the same English seed, the same model, the same machine-translation step, the same native-speaker verification protocol and the same acceptance threshold, only the Hausa policy documents fell below the bar the authors themselves had set. The verification effort was nominally identical: one verifier per language, reviewing a sample of twenty pairs. Equal treatment produced unequal reliability. Open the harm categories language by language and some cells stop being a matter of degree. Neither Hausa nor Swahili has native-authored data for self-harm or sexual content, and for Hausa self-harm there is no translation, no transcreation and no synthetic data either.

> The most portable sentence the authors leave behind is about overlap. Narrow coverage, thin verification, restricted access and marginal quality are each survivable on their own. The risk lives in the four of them landing on the same slice, and no field on a data card is designed to surface that. Korean is not where the two African languages are, but it sits on the same axis. It appears in five of eight major multilingual safety resources; of those five, exactly one was newly authored in the language, and exactly one prints a slice-level agreement figure. A column name is not a value, and in safety data that holds in precisely the same way.

<!-- stat-card -->
**2 / 6** — Harm categories with native Hausa data — French 4, Swahili 4 (self-harm: French only, of the three)

<!-- stat-card -->
**66.37 / 93.30** — Policy-corpus translation quality that split inside one pipeline — Hausa / Swahili; the original authors' acceptance bar was 70

<!-- stat-card -->
**6 / 25** — Slices reporting inter-annotator agreement at slice level — The lowest figure came from the most conscientiously documented resource

<!-- stat-card -->
**300 / 986** — Hausa items actually released against the count the paper describes — TukaBench: a component described in the paper was never uploaded

## What "Evaluated in N Languages" Actually Counts

Model cards and technical reports state language coverage in a single line. The audit's introduction reproduces that structure exactly: "A model card or technical report states that the system was 'evaluated in N languages, including low-resource language X,' and a reader naturally takes that evaluation to carry something like the rigour of the model's English safety evaluation." The authors argue that the inference often has nothing under it. They are also careful to explain why the statement is not a lie. The sentence is true. It is just true at a different unit than the one the reader is reading at.

Provider documentation supplies a real example without much searching. OpenAI's GPT-4o system card, published in 2024, reports that red-team participants "spoke a total of 45 languages and represented geographic backgrounds in 29 countries." There is a 45, and there is no per-language breakdown. A later section of the same document, on underrepresented languages, describes evaluations built with external researchers for Amharic, Hausa, Northern Sotho, Swahili and Yoruba. Those evaluations are three: a translated ARC-Easy for elementary science questions, a translated TruthfulQA for misleading questions, and Uhura-Eval, a newly built reading-comprehension test. They measure capability and truthfulness, two of the three are translations, and none of them measures a harm category such as hate speech or self-harm. The same section notes that considerable work remains to raise the quality and coverage of these evaluations. This comparison is possible only because OpenAI is among the few that put African-language evaluation results into a document at all. Documentation that says nothing offers nothing to check against.

What the audit team did was move the unit of counting. A multilingual dataset is not one artefact of uniform quality. In the authors' words, it is "a collection of per-language subsets that may differ in how they were constructed, how many items they contain, who reviewed them, and whether agreement was ever measured." So they set the unit of audit at the language slice. One row of the instrument records one language inside one dataset. A dataset covering both Hausa and Swahili becomes two rows, and the two rows are assessed independently and may legitimately reach different conclusions.

Adopting that unit forces you to write down counting rules, because a row count is not a dataset count. The team states three. A dataset is counted once. A study that re-translates an existing prompt set and re-evaluates it counts as evidence about that dataset, not as a new one. A resource that merges existing corpora and re-labels them is counted once at the merged layer, with the lineage recorded so the originals are not counted twice. These rules change the numbers in practice. Applying the third alone: one Swahili resource presents 101,014 labelled items, but it is built from three corpora already inside the audit, so counting those items as new coverage would inflate the apparent Swahili corpus roughly fourfold.

| Figure | What it counts |
| --- | --- |
| 25 | Rows in the audit instrument, i.e. language slices. Hausa 7, Swahili 10, French 8. Not a dataset count |
| 21 | Distinctly named resources. Writing "21 datasets" gets it wrong |
| 20 | Datasets after the counting rules are applied (one of the 21 is a derivative replication). Of those, 19 are in scope and 1 is a boundary case |
| 26th slice | Ubisoft ToxBuster (game chat). Reviewed and excluded because the data was never released. It appears in no count |
| 101,014 | Labelled items reported by one Swahili resource. It merges three corpora already in the audit, so counting them as new coverage inflates the Swahili corpus roughly fourfold |

********************Source: Onuoha, Sunu and Sikiru (2026), [arXiv:2608.13695](https://arxiv.org/abs/2608.13695), §4.6 and §5.1

The verification procedure was not a formality either. For every field that could conflict with the primary sources, the team checked three places in order: the paper's own methods section and per-language tables, the linked repository or data card, and, where the repository was live, the actual contents of the release. Where the three disagreed, claims about how something was built deferred to the paper's per-language tables, and claims about whether it can be used today deferred to the release. That procedure changed the record in four ways.

- **Language attribution corrected.** A dataset first recorded as covering Hausa, on the strength of a plausible secondary description, turned out not to cover that language in the repository's own language list. In the other direction, a language added in a later release had initially been recorded as absent. Neither was catchable from an abstract; both required reading the repository's version history.
- **Provenance corrected.** Two datasets whose secondary descriptions implied native authoring stated in their own methods sections that the content was written in English and machine-translated. One post-edited the output; the other reports no post-editing.
- **Release status corrected.** One dataset's actual release contained far fewer items in the target language than the paper describes, because a component named in the paper was never uploaded. Another was announced and never shipped.
- **Authorship corrected.** A widely cited "expert-written" claim in fact applies only to the English seed material, which the paper itself states was not its own contribution.

The authors record these four not as an erratum but as methodology: a sign that the audit procedure is doing work that reading abstracts cannot do. The same posture carries into how they published. The team released the whole instrument, all 31 fields applied identically across the 25 slices, together with the evidence note written for each judgement. In their words, it is "the same standard of disclosure we ask of dataset authors." Open the file and there is a grain of judgement in it that the final tables do not show: of 26 candidate rows, eight carry a hold flag and two an exclusion flag. That this comparison is possible at all is a consequence of publishing the audit tool.

The first observation from that count runs the unexpected way. Swahili, a mid-resource language, is represented by more slices than French, a high-resource one: 10 to 8. The authors immediately rule out the reading that Swahili is therefore better served. Its slice count is inflated by a chain of re-annotations over the same tweet collection and by studies re-evaluating the same prompt set, while the French slices are largely independent resources. Slice count is a poor proxy for coverage.

> [!callout]
> The sentence that carries this section sits in the paper's introduction. "A dataset reporting '14 languages, 20,000 items' may resolve, for a given low-resource language, into a few hundred machine-translated prompts checked by a single verifier, with inter-annotator agreement never measured, distributed under a licence or access restriction that a downstream developer is unlikely to notice before citing the dataset as evidence of coverage." A collection-level statement does not show you that resolution happening.

## The Same Pipeline Produced Different Reliability

The standard objection to any claim about per-language gaps is confounding. If one language's data looks worse, that may be nothing to do with the language: a different team built it, or a different method, or a different budget. The audit's firmest evidence comes from a place where that objection does not apply. UbuntuGuard, released in 2026, ran several African languages through one pipeline. Same English seed, same generation model, same machine-translation step, same native-speaker verification protocol, same acceptance threshold. The amount of verification effort was nominally identical too: one native verifier per language reviewing a sample of twenty pairs, applied the same way across eleven languages.

Inside that pipeline, Hausa and Swahili came apart. The place they came apart was translation quality on the policy corpus. Hausa policy documents scored 66.37, below the acceptance bar of 70 the authors had set for themselves; Swahili scored 93.30, comfortably above the same bar. Yet Hausa conversation transcripts scored 93.31 and cleared it. The shortfall, in other words, is not a general failure of Hausa translation.

| Slice | Policy corpus, translation quality | Conversation transcripts | Final slice size |
| --- | --- | --- | --- |
| Hausa (low-resource) | 66.37 (below the threshold of 70) | 93.31 | 1,656 train / 278 test |
| Swahili (mid-resource) | 93.30 | 96.99 | 1,899 train / 435 test |

****Source: GEMBA-SQM translation-quality scores from UbuntuGuard ([arXiv:2601.12696](https://arxiv.org/abs/2601.12696)) as reported in §6.2 of the audit, with slice sizes from its Table 3. The threshold of 70 was set by UbuntuGuard's own authors

Four numbers, and four things about the columns that have to travel with them. First, these are not scores assigned by an outside evaluator; they are translation-quality figures the dataset's own authors published about their own material. As the audit puts it, "we report the numbers that paper publishes about itself." Second, the threshold of 70 is also theirs, which means the verdict is not an external yardstick brought in after the fact. Third, what fell short was one document type, the policy corpus, while the structurally simpler conversation transcripts cleared the bar. Fourth, the slice that fell short was released anyway, and the collection-level summary presents ten African languages as similarly covered.

One misreading has to be closed off here. 66.37 is neither the only sub-threshold score nor the lowest. The same UbuntuGuard table ran eleven African languages through the same pipeline against the same threshold, and three languages score lower than Hausa on the policy corpus: Igbo at 42.62, Nyanja at 48.61 and Luganda at 62.08. The audit does not claim Hausa is worst either. The two languages were singled out because fixing the pipeline is what removes the non-linguistic confounders. This correction does not shrink the paper's claim; it enlarges it. While a collection-level summary spoke of even coverage across ten languages, the sub-threshold slices inside it were not one but several.

> [!callout]
> The sentence the authors draw from this case is the section's conclusion. "Equal treatment produced unequal reliability, and this is precisely the mechanism by which a single resource can be procedurally fair and substantively inequitable at the same time." The rule of one verifier per language was applied evenhandedly to every language. An evenhanded rule produced different outcomes by language, and that difference is invisible from inside the rule.

## Open It Language by Language and Two Cells Come Up Empty

The gap in the previous section was a difference in scores. This one is a difference between something and nothing. The audit works with six harm categories: hate speech, harassment, self-harm, extremism, sexual content and misinformation. The taxonomy is borrowed from trust-and-safety practice, and it was chosen because most of the corpus maps onto it. Lay the three languages across those six cells and you see at once which cells are filled with what, and which are empty.

| Harm category | Hausa (low-resource) | Swahili (mid-resource) | French (high-resource) |
| --- | --- | --- | --- |
| Hate speech | Native, multiple datasets | Native, multiple datasets | Native + translated |
| Harassment | Native | Native | Native + translated |
| Self-harm | No coverage of any form | Transcreation only (native 0) | Native (Aya) + translated |
| Extremism | None | Native (incitement portion) | Translated only |
| Sexual content | Translated only (native 0) | Transcreation only (native 0) | Native (Aya) + translated |
| Misinformation | Synthetic or translated only | Native (PolitiKweli) | Translated only (native 0) |

********************************Source: Table 6 of the audit. Transcreation adapts source material to the target culture as it is carried over, which distinguishes it from material a native speaker wrote in that language from the start
