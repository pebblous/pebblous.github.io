---
title: OpenAI Signals Puts Hands-On Work in a Single 
subtitle: OpenAI sorts ChatGPT work messages into 332 US Department of Labor work activities, then publishes names for only 164
date: 2026-11-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI Signals Puts Hands-On Work in a Single 

_OpenAI sorts ChatGPT work messages into 332 US Department of Labor work activities, then publishes names for only 164_

## Executive Summary

> [!callout]
> OpenAI has opened the aggregate statistics behind ChatGPT work conversations. Signals v3.0, released on 26 October 2026, ships 24 spreadsheets under CC BY 4.0. It sorts work-related messages from nearly 100 countries into the Intermediate Work Activities (IWAs) of O*NET, the US Department of Labor occupational database, and covers seven quarters from Q1 2025 to Q3 2026. Pebblous downloaded the bundle and re-aggregated it in Python. That recount was only possible because OpenAI published the raw files, and it is worth saying so first.

> The announcement and the coverage both say the data covers 165 work activities. The classifier prompt shipped inside the same bundle tells the model it must pick one of 332. So 332 is the classification resolution and the publication resolution is 164 named activities plus a single box labeled "Other IWA". The other 168 lost their names. Sort those 168 into the O*NET parent categories and the pattern is not random: controlling machines and processes kept no names at all, and neither did guiding, directing and motivating subordinates, while analyzing data or information and working with computers lost none. Desk work kept its names. Hands-on work and supervisory work did not. The erased side accounts for roughly 2% of classified ChatGPT work messages, and for about 43% of the employment-weighted task mix of US occupations.

> Everything to this point is what the public files and the data dictionary say. This report's own reading sits in three places: the last paragraph of section 5, which looks for the cause of the shrinking country list on the work-share side; section 6, which treats the classifier agreement scores as a confidence limit on the whole dataset; and the closing section, which turns all of it into a checklist for any organization that builds metrics out of usage logs. OpenAI has not said why the country list shrank. Section 3 also records that someone else did the "165 out of 332" arithmetic first.

<!-- stat-card -->
**332 → 164** — Activities sorted, activities still named — The remaining 168 sit in one "Other IWA" box. Confirmed by reading the classifier prompt against the published tables (section 3)

<!-- stat-card -->
**2.4% vs 43%** — The same 168, measured two ways — 2.4% of classified ChatGPT work messages in the US in Q3 2026; about 43% of the employment-weighted US task mix (section 4)

<!-- stat-card -->
**42.1–42.95%** — That 43%, recomputed from outside — Rebuilt from O*NET 30.3 and US Bureau of Labor Statistics employment data; six assumption sets all landed inside one percentage point (section 4)

<!-- stat-card -->
**45th of 76** — Where Korea stands on visual design requests — The "doubled in a year" headline describes a worldwide move. Korea has sat below the average every quarter since Q2 2025 (section 7)

## What OpenAI Opened, and What It Opened First

Signals is a dataset, not a product. OpenAI's economic research team publishes it on a running basis as a bundle of ChatGPT usage statistics, and "3.0" is a version number rather than a launch name. The word never appears in the body of the announcement. It lives on the cover of the data dictionary and in the recommended citation.

What you can download from this release is 24 CSV files and one 41-page data dictionary. The license is CC BY 4.0, so anyone who credits the source can reanalyze it and redistribute it. Every figure in this report that carries no other attribution comes from aggregating those CSVs ourselves. The work activity tables cover seven quarters, Q1 2025 through Q3 2026, while the underlying message sample runs from July 2024 to September 2026. Those two windows are not the same.

The data dictionary also states the conditions on the sample. One million consumer messages are drawn and classified each month. Only individual accounts with a self-reported age of 18 or over are included. Users who deleted their accounts and users who opted out of training are excluded. Differential privacy noise is added to the aggregates, which are then renormalized. And two things are missing from the start. **The coding agent Codex and enterprise accounts are both out of scope.** Those two lines come back decisively in section 7, when we read Korea's programming numbers.

The country count changes depending on who is speaking. The announcement says "nearly 100 countries". In the raw files, 94 countries appear at least once, and 74 appear in all seven quarters. Slice a single quarter to build a ranking and the denominator shifts again: 76 countries are present in Q3 2026. Every time this report gives a rank, it writes the country count into the sentence.

The real change in this release is not its size. Open the changelog in section 8 of the data dictionary and you find that the table splitting work activities by country **appears for the first time in v3.0**. Until then the O*NET work activity data consisted of two monthly US tables, and this release swapped those two for a single country-by-quarter table. Being able to compare Korea's work activity mix against other countries at all is therefore a product of v3.0. And in that first release, 168 activities came out without names.

| Version | Period added | Monthly sample | Publication threshold | O*NET work activity tables |
| --- | --- | --- | --- | --- |
| v1.1 | Jan–Mar 2026 | 100k → 300k | Not in the changelog | Two monthly US tables |
| v2.0 | Apr–Jun 2026 | 300k | Cells above 100 messages only | Two monthly US tables |
| v3.0 | Jul–Sep 2026 | 300k → 1M | Cell minimum of 100, plus 1,000 effective messages per quarter | Replaced by a country-by-quarter table |

************

Section 8 ("Changelog") and footnote 4 of the Signals data dictionary v3.0, laid out as a table. The changelog starts at v1.1, so the v1.0 row is left out. Monthly sample sizes are applied retroactively to earlier periods. The 1,000-messages-per-quarter floor applies only to the country-by-quarter work activity table (see section 5).

Enterprise data does exist separately. On 12 August 2026 OpenAI released Enterprise Signals, built on more than 10 million messages from business customers. That release does not use O*NET. It uses categories of its own: writing, coding, systems and agent operations, hiring, sales, policy, communications, design. How many categories there are in total, whether an "other" bucket exists, and what the license is are not stated on the page, and no CSV download has been confirmed. Because the taxonomies differ, the hands-on and supervisory work missing from the consumer tables does not reappear in the enterprise tables, and the two cannot be stitched together. The hole left by excluding Codex and enterprise accounts stays where it is.

## We Ran the Raw Files Again

Before criticizing someone else's number, the first job is to reproduce it. The figure OpenAI put at the front of this release was that across the 74 countries observed in every quarter, the ten most common activities fell from 56.0% of classified work messages to 51.1%. We pulled the same CSVs, took the same 74 countries and ran the same calculation: 56.04% in Q1 2025 and 51.05% in Q3 2026. The match holds to two decimal places. The headline figure of the announcement reproduces from the public files, and every criticism this report makes later stands on that reproduction.

OpenAI read the decline as good news. Usage has broadened, so the concentration in a handful of activities has eased. The same table carries the other face of that movement. The share that fit no name and went into "Other IWA" kept growing over the same period. Averaged across the 74 countries it went from 1.39% in Q1 2025 to 2.05% in Q3 2026, a factor of 1.5. Korea and the US move the same way, and the US rose most, from 1.35% to 2.40%.

| Quarter | 74-country average | Korea | United States |
| --- | --- | --- | --- |
| Q1 2025 | 1.39% | 1.12% | 1.35% |
| Q2 2025 | 1.43% | 1.43% | 1.50% |
| Q3 2025 | 1.52% | 1.56% | 1.53% |
| Q4 2025 | 1.53% | 1.81% | 1.53% |
| Q1 2026 | 1.67% | 2.10% | 1.89% |
| Q2 2026 | 1.81% | 1.99% | 2.00% |
| Q3 2026 | 2.05% | 2.31% | 2.40% |

The share of classified work messages that fall into "Other IWA". Aggregated by Pebblous from the country-by-quarter work activity CSV in Signals v3.0. The average is an unweighted mean over the 74 countries present in all seven quarters.

OpenAI added a second reading on top of the falling concentration: countries are diverging in what they use ChatGPT for. That claim already has a published rebuttal. In a 30 October article, the marketing trade outlet PPC Land reported that while the top-ten share fell, the measure of between-country dispersion moved only from 22.2% to 23.0% across the seven quarters, and that Q3 2025 and Q3 2026 sit at nearly the same level. Those two numbers are PPC Land's own calculation, not ours.

So two statements hold in the same dataset at once. Concentration in the leading activities went down, and the share that fit none of the names went up. Both happen together whenever a taxonomy stops keeping pace with what people actually do. Which narrows the question to one thing. What is in that "Other" box?

## 165 Is Not How Many Categories There Are

The arithmetic that 165 is fewer than half of O*NET's 332 work activities was not ours to publish first. Luis Rijo at PPC Land wrote it in two articles, on 26 October and 30 October. The 30 October piece said the 165 categories are Intermediate Work Activities taken from O*NET and that PPC Land's own calculation put them at slightly under half of O*NET's 332, and the 26 October piece pointed out that the largest single block on the economy-side chart was Other IWA at 43.1%. What this report adds starts after that.

PPC Land estimated by dividing the published category count into the O*NET total. We went looking for the instruction instead of the estimate. Section 9 of the Signals data dictionary prints the full prompt OpenAI fed to the model, and it contains this sentence.

"You **must** output one of the 332 IWAs and Descriptions. Do not make up new IWAs or descriptions. The only exception is if the messages are unclear or ambiguous, in which case you can output -1 for the IWA ID and "Unclear" for the description."
                        OpenAI Signals README / Data Dictionary v3.0, section 9

We lifted all 332 names printed in that prompt and matched them against `GWAs to IWAs.txt` in the official O*NET 30.3 release. All 332 matched. Not one conflict. OpenAI used the complete set of O*NET Intermediate Work Activities as its classification candidates. Count the unique values in the activity name column of the published CSV, though, and you get 165, one of which is not an activity name at all but a container called "Other IWA". That leaves 164 activities with names.

The data dictionary does not conceal the compression. Describing the activity name column it writes "rare-code grouping", and adds that "Rare IWAs are grouped under an "Other IWA" bucket for privacy and robustness." What it does not write is how many went in, which ones went in, or what the criterion was. Counting strings across the full document makes the situation plainer.

| String searched in the data dictionary | Occurrences | Where |
| --- | --- | --- |
| 332 | 2 | The classifier prompt, and the header of the full list that follows it |
| 165 | 0 | Nowhere |
| 164 | 0 | Nowhere |
| consistent representation | 0 | Nowhere. It is in the announcement only |

````````

String search across the full 41 pages of the Signals data dictionary v3.0. The counts came out the same in the copy preserved during planning and in a second copy downloaded on 1 November 2026.

**"165 work activities" is the language of the announcement and the press coverage, not of the data documentation.** The documentation's phrase is "rare-code grouping", and the justification, that the omitted categories did not meet a threshold for consistent representation, appears only in the announcement. Two documents from the same release state two different resolutions, and so far nobody has written down the difference.

One more thing needs to be clear: 332 is not all of O*NET either. O*NET stacks work activities in three layers. There are 2,087 Detailed Work Activities at the finest grain, bundled into 332 Intermediate Work Activities, bundled again into 41 Generalized Work Activities. Below all of that sit 18,796 occupation-specific task statements. OpenAI chose the middle layer, and released half of that layer without names. Sorted into 332 and named for 164, which leaves **168 activities stripped of their names.**

Pebblous original diagram (O*NET work-activity hierarchy, reconstructed). Drawn by matching the full 332-name list printed in the classifier prompt against the 165 unique activity-name values in the published CSV (164 names plus one "Other IWA" box). This figure appears nowhere in the data dictionary — both counts were tabulated from the raw files.

## Desk Work Kept Its Names, Hands-On Work Did Not

Reading 168 activity names one at a time is too much to ask of a reader, and of an article. So we used the parent categories O*NET already provides. Each of the 332 Intermediate Work Activities belongs to one of 41 Generalized Work Activities. Spread the 164 published activities and the 168 folded ones across those 41 parents, and the kind of work that lost its name comes straight out. The result fits in a sentence. **Desk work kept its names, hands-on work did not, and the work of running people disappeared in full.**

The numbers on the right read "folded / total activities in that category". Bar length is proportional to the category total. ⚠️ Only **12 of the 41** O*NET Generalized Work Activities are drawn here. The upper nine are the categories with the highest folded share and the lower three lost nothing. Six categories lost nothing, as the text below lists, and the chart carries the largest three. Of the 29 categories left out of the chart, five sit in between, and those five are named below as well. Anyone can rebuild the full 41-row table from the public CSVs and the official O*NET 30.3 files (references 3 and 7). Pebblous matched the two directly.

Five categories came out with no names left at all: controlling machines and processes, 12 activities; guiding, directing and motivating subordinates, 12; repairing and maintaining mechanical equipment, 6; repairing and maintaining electronic equipment, 3; operating vehicles and mechanized devices, 1. Four more nearly emptied out. Handling and moving objects lost 44 of 47, inspecting equipment, structures or materials lost 11 of 12, performing general physical activities lost 13 of 17, and monitoring processes, materials or surroundings lost 9 of 11.

The other side is just as sharp. Analyzing data or information with 12 activities, working with computers with 6, interpreting the meaning of information for others with 5, scheduling work and activities with 3, resolving conflicts and negotiating with others with 3, and performing for or working directly with the public with 3 all came through with every name intact. The second category on the erased list is the one that snags. Field work vanishing can be read as a statement about how rarely it shows up in ChatGPT, but twelve activities about guiding, instructing and motivating the people who report to you leaving nothing behind needs more of an explanation than that. Managers work at desks, and managers use ChatGPT.

The categories wedged between the top nine and the bottom three sharpen the question. Assisting and caring for others lost 7 of 12. Monitoring and controlling resources lost 6 of 7. Coordinating the work and activities of others lost 5 of 7. All three are above half. So the twelve supervisory activities disappearing together was not a single-category event. Work that consists of holding people, holding resources and aligning what other people are doing kept losing its names across one category after another. As a benchmark on the other side, thinking creatively lost 7 of 22 and making decisions and solving problems lost 4 of 11, both around a third.

### 4.1. The Same 168 Activities, Measured Against Two Denominators

Two numbers get mixed up at this point. One is the 43% in OpenAI's announcement, which reads: "about 43% of the employment-weighted task mix for mapped U.S. occupations falls into Other IWAs, outside the individually reported categories." Three qualifiers are doing work in that sentence. The occupations have to be mapped, the thing being measured is the task mix rather than a count of occupations, and the weighting is by employment. Shorten it to "43% of US jobs" or "43% of US workers" and it becomes a different claim.

The other number comes from the ChatGPT side. Take classified work messages as the denominator and "Other IWA" is 2.40% in the US, 2.31% in Korea and 2.05% across the 74-country average in Q3 2026. The two numbers point at the same 168 activities with different denominators underneath. Work that is 2-odd percent of ChatGPT work conversations is 40-odd percent of the employment-weighted task mix of US occupations. That gap is itself the reason OpenAI put the comparison in the release. What ChatGPT gets used for and what the US economy actually does are different things.

We set out to check the 43%, and one thing has to be said before the result. **The 24 published CSVs cannot reproduce it.** No file in the bundle carries the task mix of US occupations or the employment weights. A release that hands researchers raw files to verify against left its single strongest figure in prose. Stopping at that sentence would imply the figure cannot be trusted, so we calculated it from outside instead.

The ingredients were the O*NET 30.3 source files and US Bureau of Labor Statistics employment data. We lifted occupation-level tasks to Detailed Work Activities and then to Intermediate Work Activities, normalized within each occupation, and weighted by national employment for May 2025. Six runs, varying the task weighting three ways and the split of duplicate mappings two ways, landed between **42.10% and 42.95%**. The calculation covered 894 occupations, representing 89.4% of US detailed-occupation employment. It cannot be the same weighting formula OpenAI used: they worked from actual classified conversations and this works from O*NET ratings collected by surveying job incumbents. When different ingredients and different methods meet inside a single percentage point, 43% looks less like an arbitrary figure and more like a property of the O*NET structure itself. The 43% **verifies, but not from inside the published bundle.**

### 4.2. How Many People Do That Work in One Country

A figure in the forties is hard to feel, so here is a scale check from one country. ⚠️ **This is not a conversion.** O*NET work activities do not map one to one onto the Korean Standard Classification of Occupations, and task-time weighting and headcount share are measured with different yardsticks. What follows only shows how large the Korean major occupational groups are that come closest in skill character to the categories where the erased 168 are concentrated.

In the occupation table of Korea's national statistics office for September 2026, read against the 8th revision of the national occupational classification, managers number 406,000, skilled agricultural, forestry and fishery workers 1,361,000, craft and related trades workers 2,219,000, plant and machine operators and assemblers 2,819,000, and workers in elementary occupations 4,053,000. The five together come to 10,858,000 out of 29,266,000 people in employment, or **37.10%**. Drop managers and count only the four hands-on groups and it is 35.72%. Nobody should write 43% and 37.1% as if they were the same number. But if work of that kind accounts for 40-odd percent of US task time while carrying no names, then in Korea the people who do it are more than one in three of everyone in work.

## The Loop and the Thresholds

Why those 168 and not some other set? The announcement answers in a single sentence: "These omitted categories did not meet our threshold for consistent representation in the original U.S. ChatGPT sample." That is the whole stated criterion.

Read the sentence backwards and a loop comes into view. **These activities were erased from the table because they are rare in ChatGPT.** Which means the table cannot, by construction, show work that ChatGPT has not reached yet. OpenAI offered this data as a way to see the difference between ChatGPT use and the work the US economy actually performs, and the side where that difference would be largest was cut away first. The 164 named activities are work ChatGPT has already touched. About the work it has not touched, all this table can report is the size of one box.

The lever that trims publication resolution is not just that criterion either. Two more thresholds are written as numbers in the data dictionary, and they erase different things.

- **The global cell threshold.** Introduced in v2.0. Only cells whose weighted, noise-injected message count exceeds 100 are published. Smaller cells are blanked out entirely.
- **The work activity table threshold.** Footnote 4 of the data dictionary imposes a separate minimum of 1,000 effective messages per quarter on the country-level work activity shares. The stated reason is the number of categories involved: "due to the high cardinality considered in this aggregation."

What the second threshold erases is not activities but countries. Count the countries present in each quarter of the raw data and the series runs 90, 84, 79, 80, 77, 81, 76. Fourteen countries fewer in the last quarter than in the first. The same design that strips half the activities of their names is running one layer further up.

Pebblous original diagram. Countries present in the quarterly work-activity table. The 1,000-effective-message-per-quarter floor erases small countries first. Tabulated directly from the Signals v3.0 country-by-quarter work-activity CSV.

From here on this is our own inference. The global sample is one million messages a month in every quarter, applied retroactively to earlier periods, and the country list still shrank. If the numerator held steady and the result fell, what is left to explain it is the denominator. When work-related messages make up a smaller share of all messages, a small country drops below the 1,000-per-quarter floor on an unchanged sample. The mechanism is not people using ChatGPT less. It is the share of conversations that count as work falling until a country disappears from the table. The methodology paper records non-work messages rising from 53% in June 2024 to 73% in June 2025, and PPC Land reported on 30 October that work requests had fallen to 32.2%. The directions line up. **OpenAI has not said why the country list shrank.**

Counted up, there are four places in this table where something goes missing. First, the 168 activities that lost their names to the "Other" box. Second, Codex and enterprise accounts, which were never in scope. Third, messages the classifier judged to match no activity at all and returned −1 for. The prompt documents that route, the data dictionary records its size nowhere, and the denominator of every published table is the work messages that did get classified. Fourth, countries that fell below the quarterly floor. Three of the four have unknown size. This report counted one of them.

Reading this design as one company's mistake would be aiming at the wrong target. Grouping rare categories and blanking small cells is a problem official statistics have handled for decades. The debate over applying differential privacy to the 2020 US Census is the canonical case. Noise bites relatively harder on small counts, and suppression thresholds erase small groups selectively. A body of evidence has accumulated that estimates for minority populations, rural areas and small geographies come out the most distorted, and that suppression works less like a neutral filter than like a bias device that keeps only what clears the bar. What is new here is the identity of the side that vanished. Not a minority population, but **hands-on work and the work of supervising people.**

Finally, what the size of the "Other" box means is not clean either. Across the 76 countries present in Q3 2026 the largest shares are Chile at 3.02%, Bolivia at 3.00%, Ethiopia at 2.96%, Sweden at 2.72% and Japan at 2.67%, and the smallest are Morocco at 1.20%, Pakistan at 1.22%, Nigeria at 1.34%, Uzbekistan at 1.39% and Portugal at 1.46%. High-income and lower-middle-income countries sit mixed together at both ends. Sweden and Japan are at the top and Portugal is at the bottom, so income level does not explain the ordering. The rank correlation with per-capita usage rank is −0.18, which is effectively nothing. When no explanatory variable will stick, the size of this box is closer to a measure of how far a given country's user mix happens to tilt toward work that the taxonomy has no name for. That makes it unstable as an indicator, and the instability is itself a statement about the limits of the publication design.

## OpenAI Does Not Trust the 332-Category Layer Either

How solid the published values are is not something the Signals data dictionary settles. It tells readers to look for the pipeline details in Chatterji et al., "How People Use ChatGPT" (NBER Working Paper 34255, September 2025), and says of the prompt in section 9 that it is the same prompt originally used in that paper. Appendix B of the paper carries a validation table that puts five classifiers against human annotation. The material used for validation is not OpenAI's own conversations but the public WildChat corpus.

Copy the table across and agreement splits sharply by layer. Deciding whether a message is work-related, a binary call, has the model matching the human plurality at Cohen's κ of 0.83. At the Intermediate Work Activity layer, where the choice is one of 332, two human annotators agree with each other at Fleiss κ of 0.34. Every share this report has quoted so far comes from that layer.

| Classifier | n labels | Human only (Fleiss κ) | With model (Fleiss κ) | Model vs human plurality (Cohen κ) |
| --- | --- | --- | --- | --- |
| Work related (binary) | 149 | 0.66 | 0.68 | 0.83 |
| Asking / doing / expressing (3-class) | 149 | 0.60 | 0.63 | 0.74 |
| Conversation topic (coarse) | 149 | 0.46 | 0.48 | 0.56 |
| Intermediate Work Activity (332-class) | 100 | 0.34 | 0.47 | — |
| Generalized Work Activity (41-class) | 100 | 0.33 | 0.47 | — |
| Interaction quality (3-class) | 149 | 0.13 | 0.10 | 0.14 |

****

Transcribed from Table 5, "Validation topline results", in Appendix B of Chatterji et al. (2025). The table footnote explains that "—" marks classifiers where only two human annotators participated and a plurality measure was not possible. Cohen's κ between human annotators for the two work activity rows is 0.37 and 0.36 respectively. ⚠️ The prose in the same appendix gives the human-only Cohen's κ as 0.27, which disagrees with the table. This report uses the table values.

What matters is that the authors wrote down the reason for the low agreement themselves. This is a disclosed limitation rather than a buried one.

"From review, we observe this moderate human-pair agreement due to the large number of potential classes (IWA has 332 activities) as well as inherent ambiguity in the messages. For instance, if a user in the WildChat dataset was trying to generate a fictional short story, one human label might be **Develop news, entertainment, or artistic content**, while another human label could be **Write material for artistic or commercial purposes**. These two IWAs also belong to different GWAs despite being conceptually similar."
                        Chatterji et al. (2025), Appendix B.1.4

The activity the authors reached for as an example happens to be one of the activities section 7 singles out as a Korean characteristic. On "Develop news, entertainment, or artistic content", Korea ranks 9th of 76 countries. The same ambiguity sits underneath our reading of that rank, which is why the rankings in section 7 are used to see which way a group of activities leans rather than to argue about a single place.

One more point from the paper. It classified at 332 categories and then **reported at the 41 Generalized Work Activities.** It has never published figures at the Intermediate Work Activity unit. v3.0 is the first time that unit has appeared in a public dataset. The paper also folded any Generalized Work Activity category with fewer than 100 users into a "Suppressed" group and left it out of its figures. Folding away what is rare did not arrive with v3.0. It is a design commitment this line of research has carried from the start, and the corollary travels with it: push down a layer to raise resolution and the number of cells that have to be folded goes up.

## One Country, Past Where the Coverage Stopped

Everything so far has been about the table as a whole. One country makes the argument concrete, and Korea is the one where we can read the local coverage and the raw files side by side. Treat the rest of this section as a worked example of choosing denominators, with Korea as the case.

Start with the coverage. AI Times reported six Korean figures on 31 October, and we checked each one against the raw data. Editing written materials, 17.3% to 17.3%. Creating visual designs, 3.3% to 7.2%. Interpreting language, cultural or religious information, 7.3% to 5.2%. Resolving computer problems, 4.3% to 2.9%. Developing marketing materials, 4.2% to 3.8%. Advising others on educational or vocational matters, 3.2% to 3.3%. All six match the raw data, down to the rounding digit. The quarterly series the article gave for visual design work, 3.6% then 5.8% then 7.2%, matches as well. The reporting was not wrong.

The caveats came from that article first, too. AI Times closed by noting that the study covers only work messages on individual accounts, that enterprise accounts and Codex usage are left out, and that no sample size for Korean users was published. That is precisely the caveat section 7.3 leans on when it reads the programming numbers.

| Outlet | Date | Main frame | Calls 165 the number of categories | Mentions 43% | Compares with the world average |
| --- | --- | --- | --- | --- | --- |
| AI Times | 31 Oct | Document editing holds first place, visual design doubles | Yes | No | No |
| News1 | 31 Oct | After writing comes pictures | Yes | No | No |
| CBC News | late Oct | Visual design climbs to second | Yes | No | No |
| Supple (AI Prism) | late Oct | Past writing and into design | Yes | No | No |
| TechSuda | 27 Oct | From working with computers to thinking creatively | Yes | No | Partly |

****

Korean-language coverage between 26 October and 1 November 2026, within what Pebblous was able to find. Not an exhaustive census. TechSuda had already published the international comparison showing Korea's share for interpreting information at more than twice the US figure. ⚠️ The Korean numbers in that article (decision-making 18.9%, creative thinking 17.2%, working with computers 6.9%) sit at the 41-category Generalized Work Activity layer, while every figure in this report sits at the 165-category Intermediate Work Activity layer. The two layers cannot be read against each other.

### 7.1. "Doubled in a Year" Is Something the Whole World Did

Where the coverage stopped was at the comparison. Korea's share of requests for visual design did double over the year, and over the same year so did everyone else's. Averaged across the 74 countries present in all seven quarters it went from 3.09% to 7.94%, a factor of 2.6. Korea went from 2.54% to 7.16%, a factor of 2.8, but it started lower and it stayed **below the average in every quarter** from Q2 2025 to the last one.

| Quarter | 74-country average | Korea | United States |
| --- | --- | --- | --- |
| Q1 2025 | 3.09% | 2.54% | 2.38% |
| Q2 2025 | 4.69% | 3.67% | 4.05% |
| Q3 2025 | 4.64% | 3.31% | 4.42% |
| Q4 2025 | 4.24% | 3.33% | 4.07% |
| Q1 2026 | 5.07% | 3.63% | 4.89% |
| Q2 2026 | 6.89% | 5.84% | 6.93% |
| Q3 2026 | 7.94% | 7.16% | 7.63% |

The share of classified work messages going to "Create visual designs or displays". The average is an unweighted mean over the 74 countries present in all seven quarters. When a rank is taken from the Q3 2026 cross-section the denominator is instead the 76 countries present in that quarter, and their average is 7.93%. The two averages have different denominators.

In the Q3 2026 cross-section Korea sits **45th** among the 76 countries present. Thailand leads at 13.0%, and the rest of the top ten is Argentina at 12.1%, Mexico at 11.3%, Brazil at 11.2%, the Dominican Republic at 11.1%, Iraq at 11.0%, Peru at 11.0%, Azerbaijan at 10.9%, Egypt at 10.6% and Indonesia at 10.6%. Five are Latin American, three come from the Middle East, North Africa and the Caucasus, and two are Southeast Asian. Western Europe, North America and East Asia are all absent from the top ten. "Image requests are up in Korea" is not a Korean story but a global one, and Korea followed the move from below the average.

### 7.2. So What Actually Sets Korea Apart

Rebuild the same data as a ranking between countries and Korea's outline comes out differently. Where Korea sits conspicuously above the world average is in listening to other people's situations and advising them, in moving language and culture across, and in explaining rules, law and technology. Where it sits low is teaching and selling.

| Work activity | Korea | 76-country average | Korea's rank |
| --- | --- | --- | --- |
| Counsel others about personal matters | 0.96% | 0.46% | 3rd |
| Analyze business or financial data | 0.74% | 0.33% | 3rd |
| Research technology designs or applications | 1.11% | 0.58% | 6th |
| Explain technical details of products or services | 1.14% | 0.70% | 7th |
| Develop news, entertainment, or artistic content | 2.09% | 1.47% | 9th |
| Explain regulations, policies, or procedures | 1.34% | 0.93% | 9th |
| Prepare reports of operational or procedural activities | 1.03% | 0.60% | 10th |
| Interpret language, cultural, or religious information for others | 5.23% | 4.02% | 17th |
| Advise others on legal or regulatory matters | 2.67% | 1.90% | 17th |
| Edit written materials or documents | 17.33% | 14.95% | 17th |
| Develop educational programs, plans, or procedures | 0.83% | 1.11% | 41st |
| Create visual designs or displays | 7.16% | 7.93% | 45th |
| Calculate financial data | 1.41% | 1.67% | 46th |
| Prepare informational or instructional materials | 2.28% | 3.24% | 49th |
| Program computer systems or production equipment | 2.70% | 3.12% | 54th |
| Gather information from physical or electronic sources | 1.56% | 1.89% | 58th |
| Develop marketing or promotional materials | 3.77% | 5.05% | 68th |
| Teach academic or vocational subjects | 0.74% | 1.75% | 71st |

Q3 2026, measured against the 76 countries present in that quarter. The ten activities where Korea stands furthest above the world average and the eight where it stands furthest below, with **all eighteen rows printed.** ⚠️ This is not a ranking of all 165 activities. Aggregated by Pebblous from the public Signals v3.0 CSVs.

The row that stands out most is interpreting language, cultural or religious information for others. Korea's 5.23% is 1.3 times the 76-country average and 3.1 times the US figure. Translating, interpreting and reading material across from another culture take up that much more of what Koreans bring to ChatGPT. Counseling on personal matters and analyzing business or financial data sitting side by side in third place makes a story of its own. At the other end, teaching at 71st and marketing materials at 68th are near the bottom of the world.

Two technology rows follow right behind. Researching technology designs or applications is 6th and explaining the technical details of products or services is 7th, both over 1.6 times the 76-country average. Yet programming computer systems, as the next subsection shows, is 54th and below average. Asking the model to write code runs below the world average while asking it to research technology and explain it lands in the top ten. That carries straight into the product-boundary argument in 7.3.

Finance splits in the same way. Analyzing business and financial data is 3rd while calculating financial data is 46th, below the average. Within one domain, the model gets used where numbers are read rather than where numbers are worked out. Education runs the other way, with three rows gathered at the bottom together: developing educational programs and plans at 41st, preparing informational or instructional materials at 49th, teaching academic or vocational subjects at 71st. No single row is an outlier. The whole group sits under the average.

As section 6 established, though, labels at this layer split even between two human annotators. What these eighteen rows are good for is seeing which way a group of activities leans, not for arguing about an individual place.

### 7.3. Programming Looks Smaller Because of Where the Product Ends

Korea's share for programming computer systems fell from 8.96% in Q1 2025 to 2.70% in Q3 2026, roughly a third of where it started. Resolving computer problems fell from 5.64% to 2.91%. Reading that as "Koreans are doing less coding with AI" would be a mistake. The same collapse shows up in the 74-country average, 7.84% to 3.12%, and in the US, 6.69% to 2.40%. And as section 1 set out in advance, **this dataset excludes Codex and enterprise accounts.** The more plausible reading is that coding work moved out to agents and editors beyond ChatGPT and disappeared from this table. A taxonomy is not the only thing that decides what is visible. The product boundary decides too.

Usage is the last piece. Korea's rank by messages per capita moved from 67th in Q1 2025 to 24th in Q3 2026, where a smaller number means heavier use. The climb was not a straight line. Korea jumped to 31st in Q2 2025, then slipped for three quarters running to 32nd, 36th and 38th, bottoming out at 38th in Q1 2026, before recovering to 29th and then 24th. The denominator behind this rank is **fixed to the 2023 population estimates** in the World Bank's World Development Indicators. Because the denominator does not move, everything in the rank change comes from the usage side.

## Why This Matters to Pebblous

### A Model Cannot Undo What the Schema Decided

What this report has traced is not a story about a model getting something wrong. The moment you sort into 332 and ship 164, every piece of research built on that data sees a world with 164 things in it. The defect Pebblous DataClinic keeps turning up in customer datasets has exactly this shape. A class that had no slot in the label scheme, or that was too rare to survive the cut, gets swept into "other", and it turns out to be the class the people doing the work care most about. Scaling the model up does not bring that class back into view. The thing that needs fixing is the schema.

Look again at the faces of the 168 and the problem comes closer to home. Handling and moving objects, 44 activities. Controlling machines and processes, 12. Inspecting equipment, structures or materials, 11. Operating vehicles and mechanized devices, 1. **Everything Physical AI aims at sits inside that box.** Judge how much AI has changed work from office usage statistics alone and the area where Pebblous actually builds data registers as not existing. Areas counted as not existing do not attract budgets, and they do not attract policy.

### Splitting and Folding Call Each Other In

Folding rare classes into "other" is standard practice on the labeling floor, and the stated reason is the same one OpenAI gives: too few samples, too unstable. The fold then makes it impossible for the model to learn that class at all, and on the next cycle the class is rarer still. OpenAI's line, that these categories did not appear consistently enough in the ChatGPT sample, is step one of that feedback loop. In data quality terms this is rare-class collapse, and it is the same structure Pebblous has warned about repeatedly in synthetic data and automated labeling.

Section 6 stacks another layer on top. Widen the label space to 332 and agreement between human annotators drops into the 0.3 range. Cutting the cells finer to raise resolution is not free. The finer the resolution, the less stable the labels, and the instability becomes the argument for folding again. Splitting and folding call each other in. Once privacy protection takes its seat as the legitimate ground for folding, the move gets harder to reverse. This is the point where privacy and the visibility of small categories collide, and both halves of that collision are data quality problems.

Someone else answered the same problem differently. Anthropic maps conversations straight onto the finest task layer in O*NET. That layer is the 18,796 occupation task statements noted in section 3, which by our own arithmetic makes it more than fifty times finer than the 332-activity layer OpenAI chose. On top of that it runs a separate bottom-up category scheme derived from the data itself, with more than 600 clusters as of the March 2025 report, for the express purpose of catching uses that a fixed government taxonomy misses. OpenAI folded rare categories away. Anthropic added a second scheme alongside the fixed one. Which approach is right is not settled here. Either way the choice belongs to the designer, and the choice decides which world shows up.

### Five Questions for Anyone Turning Usage Logs Into Metrics

Move the contents of this report into your own organization and it becomes a checklist. Any company that lays its service usage logs onto a taxonomy and reports the result as a management metric should be asking five questions. For customers in finance and the public sector the same five work as a checklist for managing models and metrics.

- **Is the resolution you classify at the same as the resolution you publish at?** Are you sorting into 332 and reporting 164? When the two numbers differ, the people reading the report have no way to know it.
- **Are you watching the "other" box as a trend rather than a level?** If it is growing, the taxonomy is falling behind what is happening. The slope says more than the size.
- **Do you know how much input fails classification altogether?** Inputs that matched no category can drop quietly out of the denominator.
- **Is a product boundary bending the metric?** Work that simply moved to a different tool can read as demand falling away.
- **Have you measured classifier agreement layer by layer?** The finest layer is the least trustworthy one, and it is the layer every report quotes. Measuring agreement at each layer, and writing down which layers cannot be trusted, is part of the metric.

### From Counting Other People's Gates to Counting the Publisher's Own Shortcut

The Pebblous blog has taken up the problem of classification gates deciding visibility four times before. [A Work Filter Cut Half the Conversations Out of AI Use Statistics](/report/ai-use-measurement-independent-corpus-2026-08/en/) re-ran someone else's occupational filter over an independent corpus and counted the pass rate, and [AI Risk Taxonomies That Name No One](/blog/ai-risk-taxonomy-accountability-gap/en/) looked at taxonomies that never point at a responsible party. [Advanced-Degree Occupations Delegate Less to AI Despite Tool Reach](/report/agentic-delegation-occupation-map-2026-08/en/) is the earlier piece that used O*NET, and [Anthropic Grades Robots Without Watching a Single One](/report/anthropic-robot-exposure-index/en/) and [The ROE Robot Exposure Index Runs Highest in the Lowest-Paid Jobs](/blog/robotics-occupational-exposure-roe-index/en/) each came at the problem of judging physical work from documents from a different angle. Whose work the erased 168 belong to meshes directly with those last two.

What this report adds is a change of target. The earlier four reproduced a gate someone else had built and counted the visibility it cost. This one used raw files the publisher opened to count that publisher's own compression. None of it would have been possible had OpenAI not released the data under CC BY 4.0, which is why this report does not say anything was hidden or concealed. **What was opened and what was shown are not the same**, and that is the whole of it. The order of discovery is on the record too. PPC Land wrote "165 is fewer than half of 332" first, and a Korean outlet got to the international comparison a step ahead of us. What Pebblous added is counting the erased activities by name and sorting them into their parent categories.

Every figure in sections 1 through 4 comes from opening and aggregating the sources directly: the 24 CSVs OpenAI published, the full 41 pages of the data dictionary, the official O*NET 30.3 files, US Bureau of Labor Statistics employment data for May 2025, and the September 2026 employment tables from Korea's national statistics office. The agreement figures in section 6 are transcribed from Table 5 in the appendix of Chatterji et al. (2025). The cause proposed for the shrinking country list in the middle of section 5, the way section 6 applies that confidence limit, and the checklist in this closing section are this report's own interpretation rather than anything stated in the sources, so please read them apart from the facts above. As of 1 November 2026, within what Pebblous could find, no economist or labour researcher had taken on the 43% figure directly. That is a failure to find rather than grounds for saying none exists. Pebblous has no commercial interest in OpenAI, in Anthropic, or in any of the outlets and institutions named in the body. Thank you for reading this far.

## References

### Primary sources, OpenAI

- 1.OpenAI, [ChatGPT's expanding world of work](https://openai.com/index/chatgpt-expanding-world-of-work/), 26 October 2026. The 43%, the phrase "consistent representation", "nearly 100 countries" and the fall in concentration from 56.0% to 51.1% all come from this announcement. ⚠️ `openai.com` blocks automated requests with a 403. The full text was retrieved through a reader proxy (`r.jina.ai`).
- 2.OpenAI, the [official Korean translation](https://openai.com/ko-KR/index/chatgpt-expanding-world-of-work/) of the same announcement. It is the terminology source for the Korean edition of this report, and it carries all three qualifiers around the 43% intact: mapped occupations, task mix, employment weighting.
- 3.OpenAI, [OpenAI Signals v3.0](https://openai.com/signals/) dataset, 24 CSV files, CC BY 4.0, released 26 October 2026. Direct download at `https://cdn.openai.com/signals/data-download-csv.zip`, which serves without the 403. Re-downloaded on 1 November 2026 to confirm the 24 CSVs and the 165 unique activity names.
- 4.OpenAI, **Signals README / Data Dictionary, Version 3.0**, 41 pages. `https://cdn.openai.com/signals/data-dictionary.pdf`. Section 7 covers differential privacy, section 8 the changelog, footnote 4 the 1,000-messages-per-quarter threshold, and section 9 the full classifier prompt. The string counts in section 3 were taken from this document.
- 5.OpenAI, [Enterprise Signals](https://openai.com/signals/enterprise-data/), 12 August 2026. More than 10 million messages from business customers, categorized with OpenAI's own scheme rather than O*NET. The total number of categories, whether an "other" bucket exists, and the license are not stated on the page.

### Primary sources, academic and official statistics

- 6.A. Chatterji, T. Cunningham, D. Deming, Z. Hitzig, C. Ong, C. Shan, K. Wadman, [How People Use ChatGPT](https://www.nber.org/papers/w34255), NBER Working Paper 34255, September 2025, doi:10.3386/w34255. The document the data dictionary names as the authority on the pipeline. Section 6 draws Table 5 and the B.1.4 quotation from its appendix, along with the fact that classification ran at 332 categories and reporting at 41, and the suppression of categories with fewer than 100 users. The official NBER PDF sits behind a paywall, so a free full-text copy was used.
- 7.O*NET Resource Center, [O*NET 30.3 Database](https://www.onetcenter.org/database.html). `GWAs to IWAs.txt`, `GWAs to IWAs to DWAs.txt`, `Tasks to DWAs.txt`, `Task Ratings.txt`, `Occupation Data.txt`. These files fix the counts used throughout: 41 Generalized Work Activities, 332 Intermediate Work Activities, 2,087 Detailed Work Activities, 1,016 occupations, 18,796 task statements. They are also the material behind the 332-name match in section 3 and the 43% reconstruction in section 4.
- 8.U.S. Bureau of Labor Statistics, **OEWS May 2025 National** (`national_M2025_dl.xlsx`). Total employment across all occupations, 155,495,730. ⚠️ Direct downloads from bls.gov return 403 to automated requests, so a mirror on the Commonwealth of Virginia open data portal was used.
- 9.Korea's national statistics office, **Employment Trends, September 2026**, statistical table "4. Occupation (new)", released 16 October 2026. Based on the 8th revision of the Korean Standard Classification of Occupations. The source for the major-group employment counts and the 37.10% in section 4.2.
- 10.World Bank, **World Development Indicators**, 2023 population estimates (the per-capita denominator used by Signals), and the World Bank **FY2026/27 income classification** (used for the income comparison in section 5).
- 11.Anthropic, **Economic Index**, and Handa et al., "Which Economic Tasks are Performed with AI?" (the Clio methodology). Used for the structural comparison in the closing section. ⚠️ Anthropic's own "All Other" share could not be confirmed and is therefore not quoted.
- 12.General literature on the differential privacy debate around the 2020 US Census. Background for the final paragraphs of section 5. ⚠️ No individual paper is quoted and no figure is taken from one; the discussion stays at the level of three established general points: noise bites relatively harder on small counts, suppression thresholds erase small groups selectively, and publishing only what clears a threshold introduces bias.

### Press coverage

- 13.PPC Land (Luis Rijo), [Americans use ChatGPT at work most to make decisions — 1 in 5 requests](https://ppc.land/americans-use-chatgpt-at-work-most-to-make-decisions-1-in-5-requests/), 26 October 2026. Source of the observation that the largest single block on the economy-side chart is Other IWA at 43.1%. ⭐ Credited in section 3.
- 14.PPC Land (Luis Rijo), [ChatGPT work requests fall to 32.2% as writing loses its top spot](https://ppc.land/chatgpt-work-requests-fall-to-32-2-as-writing-loses-its-top-spot/), 30 October 2026. Source of "the 165 categories are, by PPC Land's calculation, slightly under half of O*NET's 332", of the between-country dispersion figures of 22.2% and 23.0% used in section 2, and of the 32.2% work-request share used in section 5. ⭐ Credited in section 3.
- 15.AI Times (Kim Hae-won), [Korean ChatGPT use: document editing holds first place as visual design doubles in a year](https://www.aitimes.com/news/articleView.html?idxno=216834), 31 October 2026. The six Korean figures checked against the raw data at the top of section 7.
- 16.TechSuda, [Korean ChatGPT work use shifts from 'working with computers' to 'creative thinking'](https://www.techsuda.com/openai-chatgpt-work-activities-korea-creative-thinking/), 27 October 2026. The article that published the international comparison first. ⚠️ Its figures sit at the 41-category Generalized Work Activity layer while this report works at the 165-category Intermediate Work Activity layer.
- 17.News1, ["After writing comes pictures": Korean ChatGPT requests for visual material double](https://www.news1.kr/it-science/internet-platform/6337400), 31 October 2026. With CBC News and Supple (AI Prism), both late October, these make up the remaining rows of the coverage table in section 7.

### Related Pebblous articles

[A Work Filter Cut Half the Conversations Out of AI Use Statistics](/report/ai-use-measurement-independent-corpus-2026-08/en/) (21 August 2026). ⚠️ The 47.9% in that article is an occupational filter pass rate, not an "other" category share. It does not belong on the same axis as the 2.4% and 43% here. Different data and a different metric, with conclusions that happen to overlap. · [AI Risk Taxonomies That Name No One](/blog/ai-risk-taxonomy-accountability-gap/en/) (11 August 2026) · [Advanced-Degree Occupations Delegate Less to AI Despite Tool Reach](/report/agentic-delegation-occupation-map-2026-08/en/) (25 August 2026) · [Anthropic Grades Robots Without Watching a Single One](/report/anthropic-robot-exposure-index/en/) (3 October 2026) · [The ROE Robot Exposure Index Runs Highest in the Lowest-Paid Jobs](/blog/robotics-occupational-exposure-roe-index/en/) (21 October 2026).
