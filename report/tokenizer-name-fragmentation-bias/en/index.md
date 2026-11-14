---
title: AI Reads Some Names Whole and Others in Pieces
subtitle: University of Alberta researchers ran about 500,000 names through 12 tokenizers, and the names that enter whole cluster by race and gender association
date: 2026-09-30
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Reads Some Names Whole and Others in Pieces

_University of Alberta researchers ran about 500,000 names through 12 tokenizers, and the names that enter whole cluster by race and gender association_

## Executive Summary

> [!callout]
> The most common way to check whether an AI treats people fairly is to swap the name and nothing else. Same dossier, one name replaced, and you watch whether the model's answer moves. A paper released by University of Alberta researchers on 28 September 2026 argues that the premise of that method breaks before the model ever sees the text. Some names enter as a single whole chunk. Others are assembled from two or three fragments. This article traces where that divide opens and how far it travels, using the paper's numbers and our own measurements.

> The divide is not scattered evenly. Sorted by race and gender association, the share of names that enter whole runs about 5.4 times higher in the top group than in the bottom one. With name frequency and name length in the regression alongside it, the group terms still survive. Yet measure the same signal at the output logits instead of a middle layer, and the sign flips on three of four tasks. So what this research actually pins down is not that fragmented names get penalized. It is that a bias audit which never says where it measured cannot say what it measured.

> Every name in the study came from a Florida voter file. Not one Korean name is in there. When we ran Korean names through the same yardstick, they had no place to stand on either side of the paper's contrast. Sections 1 through 4 follow what the paper measured and what it declined to claim. The Korean measurements in section 5 are ours and appear nowhere in the paper, and section 6, where the argument moves to audit design, is this article's reading of a principle the paper states in its appendix.

12.1% ↔ 64.8%

Share of names that enter whole, lowest group vs highest

Across the 7,469-name controlled sample. The two ends sit about 5.4 times apart

3 of 4

Tasks whose gap flips or vanishes at the output layer

Fellowship attenuates to zero; hiring and clinical triage run the other way

0.81%

Names that enter whole in every one of the 12

4,052 of 497,583. Names atomic in at least one tokenizer come to 4.6%

63.8% → 6.4%

Korean given names entering whole, Hangul vs romanized

Our measurement. A Korean-specialized model's advantage does not survive romanization

## The Illusion of Holding the Name Constant

Put two names side by side. Emily and Emilee. To a human eye they differ by one letter, and both are common English-language given names for women. At a model's front door, though, they arrive in different shapes. Prefix a single space and encode with the Qwen3 tokenizer: Emily goes in as one ID, Emilee as two IDs assembled together.

| Name | Tokens | Pieces that actually go in |
| --- | --- | --- |
| Emily | 1 | ␣Emily |
| Emilee | 2 | ␣Emilee |
| Jamal | 1 | ␣Jamal |
| Latoya | 2 | ␣Latoya |
| DaShawn | 3 | ␣DaShawn |

Table 1. Encoded directly with the Qwen3-4B tokenizer. **This table is not from the paper; we downloaded the vocabulary file and measured it.** The criterion matches the paper's section 3 — a surface form with a leading space that goes in as one token, and decodes back to exactly the original characters, counts as atomic. ␣ marks the leading space.

Name-swap experiments have a long lineage. In 2004 Marianne Bertrand and Sendhil Mullainathan mailed 4,870 fictitious résumés to job ads in Boston and Chicago. Experience and education were matched across pairs; only the name at the top changed. Résumés carrying White-associated names drew callbacks 9.65% of the time, and those carrying African American-associated names 6.45%. A gap of 3.20 percentage points, roughly 50%. One callback took about ten résumés on the first side and about fifteen on the other.

That design rests on exactly one thing: the premise that nothing but the name changed. On paper, mailed to human readers, the premise holds. To a hiring manager, Emily and Lakisha are equally a single word, and neither costs more to read. So when the outcomes diverged, the divergence could be laid at the name's door.

Carry the same logic over to a language model and a gap opens. The model never sees letters. It cuts text into pieces listed in a vocabulary, turns those pieces into a sequence of IDs, and receives the IDs. The cutting machine is the tokenizer, and which pieces make the vocabulary is decided by whoever built the model, based on the training corpus. The table above is what that decision looks like in practice. Emily is already in the vocabulary; Emilee is not, so it gets assembled from Em and ilee.

Two prompts that differ only in the name are therefore, from the model's side, inputs of different length and different composition. One name already owns a slot in the vocabulary; the other borrows that slot in fragments. The question Mir Tafseer Nayeem and Davood Rafiei of the University of Alberta put forward starts here. Is there a pattern in who gets the slot and who does not, and does the difference survive into the model's interior?

## Which Names Get a Token of Their Own

The paper's first question is a plain one. Which names does a vocabulary already contain, and which get assembled from fragments? Answering it takes a list of names and a list of tokenizers, and then filling in every cell of the product. The work is laborious without being hard. What emerged as the scale grew was regularity.

### 2.1. The Population Is a Florida Voter File

The names come from a June 2022 extract of Florida voter registrations. Merged with state newborn-name records for support and normalized, the set holds 534,509 entries; dropping every multi-word form leaves 497,583. That is the number the hook and the summary call "about 500,000." Of those, 414,493 carry race and gender association metadata, and a controlled sample filtered on frequency and dominant-group share comes to 7,469. The fine-grained comparison later in the paper narrows again, to 200 pairs drawn from inside that sample.

The population shrinks at every analytical step. Half a million is the count at stage one, and the count behind the group comparisons is two orders of magnitude smaller. The nature of the population carries through as well — a voter file from one U.S. state. The paper says in appendix F that it restricted itself to single-token names in strict ASCII, and calls other scripts, languages and cultures a natural extension. Section 5 fills in one cell of that extension.

### 2.2. Twelve Rows, Eight Distinct Designs

There are twelve tokenizers, but not twelve designs. The GPT-4 family, OLMo-3 and Phi-4 share one access pattern; GPT-5 and the two sizes of gpt-oss share another. Counted by distinct design, there are eight. That is why identical values repeat across rows in the table below.

The two columns measure different things. The left counts names that become a single token in any casing or spacing. The right counts only the form a person's name actually occupies in text — a leading space and an initial capital. The most generous tokenizer, Aya-Expanse, takes in 20,020 names; the stingiest, DeepSeek-V3.2, takes 4,998, a spread of roughly four times. Even the generous end amounts to 4% of 497,583. Names that enter whole are a minority in every tokenizer. The group comparison asks who that narrow share goes to.

| Tokenizer | Atomic in any form | Leading space + capitalized |
| --- | --- | --- |
| Aya-Expanse-32B | 20,020 | 14,528 |
| Gemma-3-27B | 16,371 | 10,108 |
| GPT-5 / gpt-oss-120B / gpt-oss-20B | 13,575 | 6,769 |
| Ministral-14B | 11,357 | 6,439 |
| Llama-3.1-70B | 9,131 | 5,148 |
| Qwen3-32B | 8,716 | 5,059 |
| GPT-4 / OLMo-3-32B / Phi-4 | 8,685 | 5,051 |
| DeepSeek-V3.2 | 4,998 | 0 |

Table 2. How many of the 497,583 names each tokenizer takes as a single token (paper, appendix Table 11). Tokenizers with identical values are merged into one row.

The bottom row catches the eye. In DeepSeek-V3.2, not one name enters whole in the leading-space, initial-capital form. Counting lowercase and other casings, 4,998 names do appear, so this is not an inability to hold names — it is an inability to hold them in the exact form a name takes in running text. That is a design choice about casing, not a defect. For anyone running a bias audit on top of this model, though, the choice becomes a condition of the audit.

A bigger vocabulary does not fix it either. DeepSeek-V3.2 and Llama-3.1 both carry 128,000-entry vocabularies, yet they take 4,998 and 9,131 names whole — nearly a factor of two apart. What goes into a vocabulary is settled by the training corpus and the merge rules, not by its size. Stacked one on top of another, the twelve yield two totals: 23,095 names, or 4.6% of the total, are atomic in at least one tokenizer, and 4,052 names, or 0.81%, are atomic in all twelve.

### 2.3. The Gap Across Groups Runs Past Fivefold

The paper does not classify names by race or gender. It tabulates, from voter records, which demographic group a name surface is statistically associated with, and its ethics statement nails the distinction down: a name does not determine anyone's race, gender or ability. So the groups below should be read as name surfaces classified as NH Black-associated, name surfaces classified as NH White-associated, and so on. NH is the U.S. census term for non-Hispanic.

| Race/ethnicity association | Gender association | Names | Atomic in ≥1 | Atomic in all 12 |
| --- | --- | --- | --- | --- |
| NH White | Male | 1,433 | 64.8% | 14.9% |
| Asian/PI | Male | 286 | 57.3% | 10.8% |
| Hispanic | Male | 637 | 37.5% | 3.6% |
| Asian/PI | Female | 289 | 35.6% | 6.9% |
| NH White | Female | 2,100 | 35.1% | 5.0% |
| NH Black | Male | 648 | 25.2% | 2.9% |
| Hispanic | Female | 1,197 | 16.7% | 2.5% |
| NH Black | Female | 879 | 12.1% | 1.4% |

Table 3. The 7,469-name controlled sample counted by intersectional stratum (paper, appendix Table 12). Top and bottom sit about 5.4 times apart. These are **aggregate associations of name surfaces**, not demographic markers of individuals.

With the strata collapsed, the direction gets sharper. Male-associated names come in at 49.8%, female-associated at 25.7%. NH White-associated names reach 47.2%, NH Black-associated 17.6%. The ordering holds tokenizer by tokenizer: male-associated ahead everywhere, NH White-associated ahead of NH Black- and Hispanic-associated everywhere. Eight distinct designs, all leaning the same way.

### 2.4. Not Because They Are Common, Not Because They Are Short

Two properties look like enough of an explanation. Common names are likelier to land in a vocabulary, short names are likelier to fit in one piece, and both differ across groups, so the outcome differs too. The paper put both factors straight into a regression to find out.

| Predictor | Odds ratio | 95% CI |
| --- | --- | --- |
| Male-associated vs female-associated | 3.36 | 2.98 – 3.78 |
| Log name frequency (+1 SD) | 2.94 | 2.74 – 3.15 |
| Asian/PI-associated vs NH White-associated | 1.55 | 1.26 – 1.91 |
| Name length (+1 SD) | 0.51 | 0.48 – 0.55 |
| Hispanic-associated vs NH White-associated | 0.47 | 0.41 – 0.55 |
| NH Black-associated vs NH White-associated | 0.42 | 0.36 – 0.50 |

Table 4. Logistic regression predicting the odds of entering atomically (paper, Table 1). Frequency and length are in the model together.

Frequency and length behave exactly as expected. Common names raise the odds; long names lower them. But with both in the model, the group terms are still there. Male-associated versus female-associated sits at 3.36, and NH Black-associated versus NH White-associated at 0.42. This does not make frequency irrelevant. It says only that **frequency alone does not account for the pattern**. Something beyond frequency and length shapes which names a vocabulary holds whole, and the paper declines to say what that something is.

## How Far the Split Travels Inside the Model

A divide at the front door means nothing on its own. If an assembled name still earns its full share of representation inside the model, the entry difference is a passing detail. That is the paper's second question, and the authors answer it with a procedure they call NameTrace — not an existing benchmark but a framework introduced here.

### 3.1. Pairing Atomic Names With Split Ones

Names are first sorted into two pools. A name that enters as one token in all three of Qwen3-4B, Llama-3.1-8B and Ministral-3-3B is atomic; a name that is atomic in none of the three and enters in two or three tokens is mildly split. Anything at four tokens or more was excluded. The paper says the point was to compare against ordinary assembly, not against extreme failure cases.

Then comes the heart of the design. One name is drawn from each pool to form a pair, and pairs are built **only within the same race-and-gender stratum**. Frequency, character count, strength of demographic association, metadata reliability and orthographic cues are matched on top of that. In principle, one difference survives inside a pair: one name enters whole, the other enters assembled. Of the 200 pairs built this way, half went to tuning the design and the remaining 100 were held out, never opened until evaluation.
