---
title: WorldStateMedia Maps State Media in AI Training Data, and the Ones Who Left Are Independent Outlets
subtitle: State media from 136 countries, pulled back out of LLM pretraining corpora. The controlled share rises from 39% to 93% because independent outlets leave
date: 2026-10-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# WorldStateMedia Maps State Media in AI Training Data, and the Ones Who Left Are Independent Outlets

_State media from 136 countries, pulled back out of LLM pretraining corpora. The controlled share rises from 39% to 93% because independent outlets leave_

## Executive Summary

> [!callout]
> This article reads the WorldStateMedia dataset, posted to arXiv in October 2026, down to its denominators and its observation windows. It is a corpus of state and public-service media articles from 136 countries, pulled back out of the LLM pretraining corpora they were already sitting in. One sentence from it will be quoted more than any other. Among the state media pages left in the English web crawl, the share held by editorially controlled outlets rose from 39% to 93%.

> That sentence is true, and it reads backwards unless you also look at the other line in the same figure. Measured against every page on the web, the state media share went down over the same period. The 93% is a mix within state media, not a share of the web. And the paper does not hold its explanation of the jump in reserve. It states in the body that the 2024 inflection came from publishers opting out of web crawlers, and that the publishers who left were mainly independent ones. Controlled outlet pages fell too, just far less. This is subtraction, not addition.

> Sections 1 through 6 carry what we verified in the paper's body, its appendices, its footnotes and the dataset release page. Section 7 is the reading Pebblous lays on top of that. Please keep the two apart. This article does not adjudicate which outlet tells the truth; the paper writes that it does not either. The question it leaves with readers is a different one. If more of what stays in a corpus comes from whoever kept their pages open to free scraping, whose writing is your own retrieval index pulling up right now?

<!-- stat-card -->
**39% → 93%** — Editorially controlled share of state media pages — English web crawl, first dump of 2013 to last dump of 2025. The denominator is state media pages

<!-- stat-card -->
**0.36% → 0.19%** — State media share of all web pages — The line in the same figure that moved the other way over the same period. The denominator is every crawled page

<!-- stat-card -->
**79M → 21M** — English articles left after deduplicating by URL — 73% of them were repeats of the same article, and 59% of the sampled duplicates were byte-identical

<!-- stat-card -->
**~9.15M** — Largest single block carrying the "controlled" label in English — USAGM, in the United States. Larger than Russia's 8.26 million in total, and the result of one label changing in 2025

## Count the 118 Million Again and You Get 58 Million

WorldStateMedia is not a fresh scrape of the web. It opens LLM pretraining corpora that were already public and picks back out the pages written by state and public-service media. English comes from FineWeb, every other language from FineWeb-2. The backbone is a roster of outlets. The authors assembled 640 state and public-service outlets, 1,910 assets they operate and 1,183 domains, labeled them, and swept every page in the Common Crawl dumps that landed on one of those domains. That sweep returns 118 million articles.

The 136 countries and 114 languages on the cover are not the whole set either; they are what survived a filter. The authors counted only countries with more than 10,000 pages and languages with more than 100,000. Lift that threshold and the corpus covers 171 countries. The roster itself named more — 173 countries. Because the threshold only drops small countries, total volume barely changes, but for anyone asking which countries fell off the table, 136 is not the answer.

The observation windows differ by track. English runs from a mid-2013 dump to a mid-2025 dump; the multilingual side stops in mid-2024. That one-year gap is worth holding on to when the per-language figures arrive later, because the largest movement on the English side happens in exactly that final year.

And the same dataset carries two article counts. The second one, recorded in an appendix, is 58 million. English falls from 79 million to 21 million, a drop of 73%; the multilingual side falls from 39 million to 37 million, barely 5%. Why the shrinkage differs that much between the two is what this section is about.

Pebblous original figure. The dump-basis counts are the measured row counts in the paper's body and on the dataset release page (79,591,422 rows for English, 38,755,459 for multilingual); the corpus-basis counts are the values the paper's appendix records. Only the English side, whose window spans twelve years, shrinks sharply.

What makes the difference is the unit at which duplicates were removed. Common Crawl re-scrapes the web every few months. If the same article stays at the same address for a year, it enters several dumps separately. FineWeb's deduplication runs inside a dump, so an article that repeats across dumps survives intact. The 118 million is counted in that state. Remove duplicates once more by URL across the whole period and you are left with 58 million. English shrinks the most because its window runs twelve years, which gave the same article that many more chances to be picked up again.

The possibility that those duplicates are in fact different articles is one the paper closes itself. A footnote reports that in a sample of 3,000 duplicate URLs, 59% were byte-identical and the remaining 41% differed only in headers, footers and layout. This is not a count inflated by a mix of different articles. It is a count inflated by the same article entering many times.

None of which makes 118 million the wrong number. A footnote in the paper argues that because this dataset is used as a lens onto LLM training corpora, 118 million is the accurate figure. If you are asking how many times a model saw this article, the count that keeps the repeats is right; if you are asking how many distinct articles exist, the deduplicated count is. Neither is an error — they answer different questions. So whoever is loading this dataset into a retrieval index and whoever is auditing a training corpus should be picking up different numbers.

### 1.1. FineWeb Keeps Duplicates on Purpose

Here is the sharpest fact in the whole paper for anyone who works on data quality. FineWeb leaves cross-dump duplicates in place deliberately, not by oversight. The basis for that choice is that models trained on corpus-level deduplicated data performed worse than models trained on data deduplicated only within dumps. The paper's authors grant that the judgment is reasonable. This is what "repetition is weight" looks like in the field. Without anyone counting which articles are the ones repeating, the judgment that keeping repeats makes for better preprocessing has become the standard.

That supporting claim comes from a public write-up by the FineWeb team, cited in a footnote of the paper, and this article is relaying it through that footnote. We were not able to open the original while writing.

It is worth adding that the whole argument about two counts only arises in the few datasets that attempted deduplication at all. In the paper's comparison table of existing news corpora, the deduplication column reads "no" for both GDELT and CC-News. A dataset with two numbers turns out to be one that actually tallied its duplicates.

The same table has a license column. This dataset is open under ODC-By; GDELT carries no restriction, CC-News carries the Common Crawl terms of use, Media Cloud is API-gated, and Event Registry is commercially licensed. The three contributions the paper claims for itself are broad country coverage, a focus on influence, and precisely this permissive license. In other words, it treats the terms on which someone else can redo the same count as part of the contribution.

## 93% Is the Space Independent Outlets Left Behind

39% to 93% is the number from this paper most likely to travel. The first thing to fall off while it travels is the denominator. The denominator of the 93% is not the web; it is state media pages. Gather the state and public-service media articles that made it into the English web crawl, and what is measured is the share of that pile held by outlets under editorial control.

A line whose denominator is the whole web does exist, and it moves the other way. The share of all web pages held by state media fell from 0.36% in 2013 to 0.19% in 2025. It peaked around 0.6% in early 2017 and has been falling since. The paper names two causes for that decline as well: web content in general grew, inflating the denominator, and news publishers opted out of the crawlers. That the publishers who opted out were mainly independent is confirmed a little further on. The same force, in other words, moved both lines, in opposite directions. Which is why "state media is taking up more and more of AI training data" cannot be read off this figure. Figure 1 in the paper has three lines, not two, and only one of them goes up.

Pebblous original figure. The paper's appendix carries the underlying data for Figure 1 as a per-dump table, and we redrew it from twenty points in that table. The horizontal axis is the real timing of each dump; the points cluster after 2024 not because dumps bunch up there but because that is where the change happened. In the final dump the two lines sum to 1.2% short of 100, and that remainder is outlets that received no classification label.

### 2.1. The Crossover Was 2016, the Jump 2024

The curve in the top panel does not climb evenly over twelve years. It breaks into three stretches. In the autumn 2016 dump the two lines swap in a single step. Independent outlets had held 66.7% through the previous dump; in that one they fall to 39.7% and controlled outlets rise to 59.8%. Then come seven years of slow climbing to 69.8% at the end of 2023. And in the first dump of 2024 the figure jumps to 80.9%, up 11.1 points at once. From there it reaches 93.1% within a year and a half.

The paper does not leave the cause of either inflection open. The body states it outright. The 2016 break came from controlled outlet pages more than doubling while independent pages stayed flat. The 2024 break is the reverse.

"The 2024 shift, meanwhile, is caused by publishers opting out of web crawlers, as Ind pages fall several-fold while Cnt pages change far less."

So the 93% is not a number produced by controlled outlets pushing in. It is a number produced by the seat beside them emptying. Subtraction, not addition.

The size of that subtraction can be worked out from the raw values in the appendix table. Multiply the total page count of each dump by the state media share and then by the within-state-media mix, and you get absolute page counts.

| Dump | Independent pages | Controlled pages |
| --- | --- | --- |
| 2023-50 (just before the jump) | ~170,000 | ~220,000 |
| 2024-10 (jump begins) | ~94,000 | ~447,000 |
| 2025-26 (final) | ~22,000 | ~367,000 |

These values are not figures the paper prints; this report derived them from the raw values in the appendix table. From the dump where the jump starts to the final dump, one page in four remains on the independent side, while controlled pages fall by only 18%. That is roughly the magnitude the body left as "several-fold." The fact that both sides shrank has to be read alongside it. Controlled outlets did not grow. Both fell, and one fell far faster.

### 2.2. The Timing Lines Up From Outside the Paper

That publishers are blocking the crawlers is something you can count outside the paper too. homepages.news, a public tracking project that collects news publishers' robots.txt twice a day, showed on 17 October 2026 that 547 of the 1,157 publishers it tracks were blocking CCBot. That is 47.3%. At the same moment GPTBot was blocked by 46.4% and Google-Extended by 41.7%, which makes CCBot the most widely blocked of the three. CCBot is Common Crawl's crawler — the very one FineWeb and FineWeb-2 draw from.

This figure was collected independently of the paper and it proves no causal link. Neither the paper nor this article matched outlet by outlet which publisher changed its robots.txt and when. What can be said stops at the circumstantial: the timing lines up. What blocking gave publishers in return is something Pebblous examined separately in [Blocking the Crawlers Didn't Reduce the Citations](/report/ai-crawler-blocking-citation-gap/en/), where publishers who blocked lost visitors and kept their citations in AI answers. This article looks at what that choice left behind in the composition of the corpus.

The paper's limitations section points the same way. Page counts, it notes, reflect accessibility and crawl policy, and not only an outlet's output or reach. Which is to say that what this dataset counted is closer to whose writing was left open to be crawled than to who wrote the most. The same section adds that this is why a country like India, where state media is mostly radio and television, ends up under-represented or missing altogether.

The paper also leaves a counterweight on the denominator. In that limitations section the authors write that a more appropriate denominator would be news content alone, and that they did not compute it. Take the whole web as the denominator and the state media share will of course look small; take only news and it may look different. That is why this article does not read 0.19% as "nothing to worry about, then." Values measured on different axes cannot reassure you in either direction.

## One Label Holds Xinhua, the BBC and Yonhap Together

There is a reason every sentence so far has kept "controlled" and "independent" apart. In Korean, the single word for state media drops both into one sack, and English does much the same with "state media." The labels the paper uses come from an outside database, State Media Monitor, which examines each outlet company's funding, ownership and governance, and its editorial control, then assigns one of seven tiers running from heavily controlled to barely controlled at all.

The seven tiers, in order, are state controlled, captured public, captured private, independent of state funding and operation, independent of state funding, independent of state operation, and independent public. For analysis the paper folds the first three into "controlled" and the last four into "independent." The released dataset keeps all seven tiers, so they can be unfolded again. But every figure in the paper's body was computed in the folded state.

Pebblous original figure. The tier names and the folding rule are in the paper's body, the example outlets for each tier are in its outlet table, and the existence of the unlabeled bucket is stated in the captions of the country and language tables. Every row whose percentages do not sum to 100 owes the gap to that third bucket.

The outlet table the paper offers as illustration makes plain what the folding gathers into one place. China's Xinhua, Qatar's Al Jazeera, Russia's public broadcaster OTR, the Kenya News Agency and the United States' USAGM all sit in tier one, state controlled. France Médias Monde (RFI and France 24) is tier five, independent of state funding, and South Korea's Yonhap is tier seven, the most independent of the seven. In the country table, Australia, the United Kingdom, Canada and Ireland show 0% controlled, while Russia, China, Qatar, Singapore and Vietnam show 100%.

Which is why "state media is x% of AI training data" says nothing on its own. It is a number that puts the BBC and Xinhua in the same bucket. That is why this article separates controlled from independent every time, and why the chart in section 2 had to draw the two lines apart.

### 3.1. The Bucket the Typology Never Labeled

Beyond the two folded buckets there is a third. The captions of the country table and the language table carry the same sentence: some outlets received no classification label, so percentages may not sum to 100. The largest instance is Cambodia. In English, Cambodia ranks sixteenth with 1.09 million pages, at 9.6% controlled and 0.0% independent, which leaves 90.4 points unlabeled. Read that row as "90% of Cambodia's state media is independent" and you have it completely wrong. It means the outlets producing most of Cambodia's English pages have not yet been given a tier.

The UAE in English at 2.1 points, Türkiye in multilingual at 6.5, Spain in multilingual at 7, and Poland in English at 21.9 are smaller cases of the same thing. Plenty of countries — Australia, the UK, Canada, Russia, China — have their labels filled in without a gap. Having a classification scheme and having that scheme cover the data are two different claims, and when coverage is low, ratios are distorted quietly.

### 3.2. The Largest Controlled Block in the English Corpus

The top-ranked country in English is the United States, with 15.7 million pages, nearly double second-place Russia at 8.26 million. Yet the mix on the US row is 41.7% independent and 58.3% controlled. Neither 100% independent nor 100% controlled, and the paper attaches a footnote to it. The US Agency for Global Media (USAGM) was reclassified from independent to controlled in 2025; on the pre-2024 criteria, the footnote explains, the United States would have been 100% independent. USAGM runs Voice of America, Radio Free Europe/Radio Liberty, Radio Free Asia and the Office of Cuba Broadcasting.

That one line in the footnote means the 58.3% controlled on the US row is USAGM alone. Converted, that is about 9.15 million pages, roughly 11.5% of the entire English dataset (79,591,422 rows). The largest single block carrying the "editorially controlled" label inside an English LLM corpus is neither Russia nor China but the United States' USAGM, and it became so because one label changed in 2025. The paper does not print the 9.15 million; this report derived it from the country table and that footnote. This article does not adjudicate whether the reclassification was correct. It treats it only as an event in which a label changed.

The scope limit the paper puts on itself belongs here too. State media, its limitations section writes, is only one slice of any country's media landscape, and especially so in a country like the United States where the mainstream outlets are largely private. So what this table counted is not American journalism but the mark left on the English web crawl by outlets the US government funds. The sentence about the largest controlled block in English is true only inside that scope.

Which invites the obvious question: isn't the 93% also the product of that one label? The paper closes that question in two places. The sentence in the limitations section reads:

"Fixed labels mean that temporal trends reflect changes in page counts rather than re-classification, but they describe each outlet's status as of 2025."

With labels pinned across the whole period, a reclassification lifts the height of the entire curve without creating any slope. The paper then fences that height with a number: rerun the whole period on the 2022 typology and you get 33% to 82%. So what the USAGM reclassification changed was the endpoint from 82% to 93% and the starting point from 33% to 39%. Whichever edition of the typology you measure with, roughly the same fifty-point rise appears, and reclassification cannot produce it.

One hole on the label side is left open, though, and it sits in the same limitations section. The URL list the authors used reflects present-day domains, so outlets that changed address along the way may be under-represented in earlier dumps. Labels are pinned across the period and cannot create slope, but domains are not pinned, and this side was not fenced with a comparison value the way the 2022 typology fences the other. A footnote also records the intended fix. The State Media Monitor site publishes each outlet's classification for the previous three years, and the authors write that in follow-up work they will obtain the full time series from its operators and apply period-appropriate labels to older dumps. The 33%-to-82% figure is how far those three years let them go for now.

## On a Small Language's Web, One or Two Countries Supply It

Sections 2 and 3 were about the English web. Cross to the multilingual side and the order of magnitude changes. In English, state media sat at around 0.2% of all pages; in a handful of languages, state media supplies between 5% and 18% of that language's entire web. The paper puts it as outlets from one country, or a few, supplying 5 to 18 percent of the web in several such languages. What is being counted here is not control but concentration — the plain fact that only a few places publish at volume in that language.

Lay the top of the list out and you can see immediately that concentration and control are different axes. The middle column below is the state media share of that language's web; the right-hand column is the editorially controlled share within that state media. The two columns have different denominators.

| Language | State media share of the language's web | Controlled share within it |
| --- | --- | --- |
| Uyghur | 17.8% | 58.5% |
| Turkmen | 8.3% | 62.8% |
| Belarusian | 7.8% | 59.9% |
| Norwegian Nynorsk | 7.7% | 0.0% |
| Serbian (Latin) | 7.0% | 95.5% |
| Hausa | 7.0% | 2.7% |
| Khmer | 6.8% | 85.1% |
| Māori | 6.8% | 0.0% |
| Amharic | 6.5% | 43.7% |
| Scottish Gaelic | 6.4% | 0.0% |
| Pashto | 5.9% | 31.2% |
| Arabic | 5.3% | 83.3% |
| Kazakh | 5.3% | 68.0% |
| Serbian (Cyrillic) | 5.1% | 99.9% |

Uyghur at 17.8% and Norwegian Nynorsk at 7.7% sit on the same list, yet 58.5% of the state media on one side carries the controlled label and 0.0% on the other. Nynorsk, Māori and Scottish Gaelic all show zero controlled. In all three the largest steady publisher in that language is a public broadcaster: Norway's NRK, New Zealand's Whakaata Māori, and BBC Alba in Scotland. So move straight from "x% of a low-resource language's web is state media" to "it is full of propaganda" and the sentence is false in three languages on the spot.

There is also a value you only get by multiplying the two columns. The controlled share of the entire Uyghur web is not 17.8% but their product, around 10.4%. Because 17.8% and 58.5% have different denominators, they cannot simply be set side by side.

What did not make the list matters as well. Russian and Chinese have an enormous number of state media pages, but their webs are so large that the share dilutes to 1.0% and 0.2%. Arabic, at 5.3%, and Turkish, at 3.4%, go the other way: high-resource languages where the share is still visible and mostly carries the controlled label. Having many pages and having a large share turn out, once again, to be different axes. Part of why Uyghur tops the list is that its web is small, at 166,000 pages.

Counted by country, the same concentration takes a different shape. The top of the multilingual country list splits into two groups. Russia, Türkiye, Hungary, Vietnam, Serbia and Belarus are mostly on the controlled side; Germany, Poland, France, Sweden, Switzerland, Norway and Finland are mostly on the independent side. The paper singles out two as outliers relative to population. Serbia, with 6.6 million people, ranks tenth at 991,000 pages; Belarus, with 9 million, ranks twelfth at 852,000. When a small country fills that much of its own language's web, the composition of what a system querying in that language can pull up is effectively set by one place.

### 4.1. Read the Unlabeled Share Before the Controlled Share

The third bucket from 3.1 opens wider in smaller languages. Belarusian reads 1.6% independent and 59.9% controlled, leaving 38.5 points with no label. Kazakh has 32 points empty. In Latvian the labels on state media pages are essentially all missing, so both independent and controlled are recorded as 0.0%. Quote the controlled share alone off a row like that and the reader is left with a figure and no way of knowing which way the unclassified remainder would have gone.

The observation window belongs in the same note. As section 1 showed, the multilingual data stops in mid-2024. The jump described in section 2 happened in the year and a half after that. So the per-language figures in this table do not contain the stretch where English moved most. Recount today and the same values may not come back, and this data cannot say which way they would move.

### 4.2. The Korean Row's 42.6% Controlled Share Comes From Outside South Korea

Korean readers can find themselves in three places. The outlet table lists Yonhap as independent public, the most independent of the seven tiers. In the country table South Korea ranks 47th in both English and multilingual, with 0% controlled on both. Its English page count is 90,200, a little over eight times North Korea's 10,700, which ranks 90th.

The picture changes in the language table. The Korean web has 60.9 million pages in total, of which state media is only 0.1% — a very low share — but within that 0.1%, independent is 57.4% and controlled is 42.6%. Korean outlets are 0% controlled in both tables, so a 42.6% controlled share on the Korean-language row means that share comes from outlets publishing in Korean from outside South Korea. Which outlets fill the 42.6% is something the paper does not break out. It cannot be pinned on North Korea; Chinese or Russian Korean-language services remain candidates. The country table counts by an outlet's nationality and the language table by a page's language, so the two cannot be multiplied against each other directly.

## Change What the Model Retrieves and the Answer Moves

Everything so far has been about counting a corpus. On top of that the paper attaches retrieval. It takes a public benchmark of questions about territorial disputes, puts 720 queries covering 251 disputed regions to four models, and varies only the retrieval setting to see how the answers move. The models are GPT-4o, GPT-4o mini, Command-R 35B and Llama 3.1 8B. This set was not chosen by this study; it was inherited from prior work. The paper says so, citing comparability, and adds in its limitations that rerunning with more recent models and retrieval systems to see whether the result holds is left as future work. Which is why the values in the table below should not be read as a scorecard for the models you use today.

The retrieval setting splits along two axes. One is which pile the documents are drawn from. Query-level retrieval draws only from outlets tied to the country bound to the language the question was asked in; topic-level retrieval pools the outlets of every country claiming that dispute and draws from all of them. The other axis is what is drawn: Wikipedia, state media articles written in English for a foreign audience, or state media articles written in the local language for a domestic audience. A no-retrieval baseline is measured alongside.

That split between foreign-facing and domestic-facing by language is one the paper set up earlier, in section 4. Put a country's English rank and its multilingual rank side by side and the targeting shows. Russia is second in English and first in multilingual; China is tenth in English and twentieth in multilingual, so both watch both. Türkiye is eleventh in English but second in multilingual, Germany seventeenth and third, Hungary twenty-fifth and seventh — all leaning domestic. Qatar and the UAE are high on both sides for their populations. The paper attaches a caveat to the comparison: the gap between the two ranks may come not from targeting but from differences in crawl coverage and filtering between FineWeb and FineWeb-2. And there is one more footnote. For Anglophone countries, English articles are filed as domestic-facing rather than foreign-facing.

The paper itself records that this setting connects back to section 4. Query-level retrieval mimics a state where one country's outlets monopolize the sources available in a language, and several of the languages counted in section 4 are genuinely in that state. Section 4, then, is the observation that such a state exists on the web, and section 5 is the experiment measuring how a model answers from inside it. Two scenes of one story.

### 5.1. When Only One Country's Outlets Are Retrieved

The geopolitical bias metric expresses, as a percentage, how much closer an answer given in the language of the dispute's dominant country sits to that country's claim than answers given in other languages. Lower is better, and above 100 means answers in that language lean at least twice as far as the average of the rest. Unfold the formula in the appendix and there is one more layer. What the metric directly measures is not distance from a claim but agreement with a Wikipedia knowledge base. It takes the rate at which answers in the controlling country's language matched that knowledge base and divides it by the average rate for answers in the other claimants' languages, giving a relative difference. Because the knowledge base usually sides with the controlling country on disputed regions, the effect is to measure skew — but the fact that the denominator is Wikipedia has to be written down, because the ruler used for factuality in the next subsection is that same Wikipedia. The table below gives the values when foreign-facing English state media is put into retrieval.

| Model | No retrieval | Query-level | Topic-level |
| --- | --- | --- | --- |
| Llama 3.1 8B | 25.3 | 107.7 | 15.2 |
| Command-R 35B | 28.7 | 116.7 | 20.9 |
| GPT-4o mini | 23.6 | 64.3 | 11.8 |
| GPT-4o | 13.0 | 25.3 | 11.8 |

The values in this table were read off the labels above the bars in the paper's figure, so one decimal place is the limit of their precision. In the second column, the bias metric for Llama and Command-R leaps to nearly four times the baseline and crosses 100. But only two of the four models cross it. GPT-4o mini stops at 64.3 and GPT-4o at 25.3. The universal claim "putting state media into retrieval makes answers lean" therefore does not come out of this table. The accurate statement is that the lean is largest when foreign-facing English articles are retrieved at the query-language level, and that its size varies by a factor of four across models.

One trap sits inside the table. Llama's no-retrieval value and GPT-4o's query-level value are both 25.3. Same number, entirely different cells. One is the baseline bias of a small model retrieving nothing; the other is the result for a large model fed state media. Quote either and the condition has to travel with it.

### 5.2. Mixing Sources Lowers the Skew, and the Factuality With It

The third column looks like the answer. Switch to topic-level retrieval, pooling outlets from several claimant countries, and the bias metric drops below the baseline. This is not a quirk of one model. Across all twelve pairs of four models and three sources, topic-level retrieval has higher cross-lingual consistency and lower bias than query-level. There are no exceptions.

And factuality is at its lowest in that same setting. The paper puts it in one sentence.

"This robustness does not extend to factuality, however, as topic-level retrieval also has the lowest KB_CS."

Factuality is measured by how well the English response matches the Wikipedia knowledge base. Against the no-retrieval baseline, eight of sixteen cells go down, and all eight that go down are topic-level. The six query-level cells barely move, and the two that go up are GPT-4o at query level. The steepest fall is Llama's, from 69.6 to 57.8 when domestic-facing outlets are retrieved at the topic level.

Retrieve Wikipedia in the same settings and factuality almost always rises instead. Seven of eight cells went up and the remaining one is effectively flat.

The paper explains the contrast by design rather than by merit. Wikipedia, however many authors its articles have, sits under one set of editorial standards and a neutrality policy, so it should be treated as effectively a single source; state media is writing by multiple parties with conflicting interests, so it is many sources from the start. That is where the drop in factuality is located too: when differing opinions and evidence arrive together, the model's first answer is pushed away from the knowledge base. The conclusion the paper draws here is about the limits of evaluating retrieval settings on Wikipedia alone. A score measured on a single source does not reproduce itself where multiple sources are retrieved.

So what this experiment asks you to read is not "filter state media out." It is that mixing sources and protecting accuracy are two different interventions, and doing one does not bring the other along. Unless the two are measured separately, factuality can fall while the skew metric improves, and nothing registers on the dashboard at all.

### 5.3. What the Crimea Case Shows Is a Fiftyfold Asymmetry

The paper runs a separate case study comparing Russian and Ukrainian state media, split between English and each side's own language. The part people will lift most is the pair of sentences the two sides wrote about the same event. Russian controlled outlets write that Crimea "rejoined" Russia; Ukrainian controlled outlets write that Russia "annexed" Ukraine's Crimea. This article does not adjudicate which is true. The paper writes that its work is not an attempt to adjudicate the veracity of outlets either.

On the data side the numbers underneath weigh more. In this case study the English articles number 215,984 on the Russian side and 4,066 on the Ukrainian. More than fifty to one. Articles in each side's own language run 31,000 against 17,951, nearly the same order of magnitude — the asymmetry opens to fifty-fold only when you cross into English. The effect shows up in the topic counts as well. Of 1,476 English topics, more than 1,100 carry only the Russian framing, while of the 247 own-language topics, 236 carry both. On the English side, topics where each party produced ten or more facts number 92 before February 2022 and 55 after. The two stretches are of different lengths, so those cannot be read as a ratio — only as an indication of how narrow the overlap is to begin with.

What this means is that only one side of the story being retrievable in English rests first on there being fifty times more English material to collect on one side. That is the background to why foreign-facing English articles produced the largest lean in 5.1.

The paper, though, declines to push the cause onto one factor. The writing produced in English for foreign audiences may itself be sharper, or a retrieval-equipped system may be more willing to take up a perspective that arrives in English. Which of the two weighs more it did not measure, and the body states plainly that this is left as future work. Pin the skew on the data alone and the reading tilts. That the material is skewed and that the system amplifies the skew are two facts this experiment has not yet separated.

How few outlets produce that asymmetry is something the paper's appendix counts outlet by outlet. Of the 215,984 English articles on the Russian side, RT alone accounts for 105,579, nearly half; add TASS at 50,191 and Sputnik at 43,491 and three outlets fill 92%. The Ukrainian side is more concentrated still: 4,049 of its 4,066 English articles come from Ukrinform alone. That is 99.6%. Articles in each side's own language, by contrast, spread across many outlets on both sides. The skew in the English space is an asymmetry between countries, but ahead of that it is the publishing volume of a single outlet.

## What Your Own Index Should Be Counting

Reduce what this paper counted to one line and it comes out like this. What survives in a corpus is not what was published but what nobody fenced off. The subtraction in section 2 is the evidence for that sentence. The cheaper and less restricted a text is to scrape, the more of it ends up in both training and retrieval, and whoever can afford to build a fence leaves first. This is a different axis from the questions asked under copyright or privacy. The question here is whose writing remained.

What happens once it remains has already been measured on the training side by someone else. A 2026 study the paper points to as adjacent work identifies outlets coordinated by China inside multilingual training corpora and reports that continued pretraining on that content moves models toward more favorable positions on the Chinese government. What this article saw in section 5 is a retrieval-stage story; that study reports the same thing happening at the training stage. Overlay the two and it becomes clear why counting the source mix of a corpus is a quality problem. This fact, though, is relayed through the paper's related-work section as a secondary citation, and we were not able to open the original while writing.

The side where supply runs dry is one Pebblous covered in [When Wikipedia Runs Dry, So Does AI](/report/wikipedia-ai-commons-drain/en/), and the side where the character of what piles up on the web changes was counted on two other axes in [Did Anyone Actually Ask the Web's Questions?](/blog/web-question-provenance-decline/en/) and [AI-Written Pages Piled Up on .com at Ten Times the .edu Rate](/blog/ai-authored-web-domain-gap/en/). The axis this one moves to is who wrote it.

And the question does not stop at somebody else's dataset. What the paper did was attach publisher labels to domains and count the resulting mix, and that procedure transfers directly to your own retrieval index. Narrowed to what can be counted today without any external dataset, there are five items.

- **Is there a table that maps domains to publishers?** The paper mapped 640 outlets, 1,910 assets and 1,183 domains in two stages, drafting with a model and verifying with people. Why it had to be done that way is explained separately in an appendix. Even the database supplying the labels only links to each outlet's report in no consistent format, so a domain column could not be pulled out machine-readably. Addresses that failed to open were replaced by search. Writing down "who published this" for even the top few dozen domains is enough to make the mix countable.
- **Has the axis of deduplication been declared?** Unless it is written down whether only the latest copy at a URL is kept or every collection becomes its own document, two counts differing by a factor of two circulate from the same index, exactly as in section 1.
- **Is the source mix examined per language?** The concentration section 4 showed is only visible at the language level. An index that looks healthy in aggregate may have one or two sources supplying most of a particular language.
- **Has the same question been asked in another language?** The cross-lingual consistency metric from section 5 transfers to an in-house index as it stands. Ask the same question with only the language changed and measure whether different documents come back and the answer shifts.
- **How large is the share with no label?** This is the seat the Cambodia row in 3.1 showed. A classification scheme with low coverage distorts ratios quietly. The habit worth building is reading the unlabeled share before the controlled share.

None of the five requires new technology. They only require fixing an axis first. And what happens in the absence of an axis has been confirmed several times over on the quality-filter side. Pebblous covered [Data Poisoning Survives a Quality Filter That Throws Out Nine in Ten](/blog/data-poisoning-survives-quality-filter/en/) and [Manipulated Comments Slipped Past the Filters That Clean AI Training Data](/blog/pretraining-data-poisoning-curation/en/), both about small volumes of deliberately planted contamination; this article is about legal, open, large-scale collection. They are not the same problem. They reach the same place by different routes. Both start from the fact that quality filters do not look at provenance.

## Why Pebblous Is Watching

The place in this paper that Pebblous spent the longest looking at is neither the 93% nor the 17.8%. It is the duplication table in the appendix. Deduplicate 79 million English articles by URL and 21 million remain, and 59% of the duplicates are byte-identical. That table is in the appendix, not the body. And next to it sits a more important sentence.

### 7.1. What Was Never Counted Before the Decision to Keep the Repeats

The sentence is that FineWeb deliberately keeps cross-dump duplicates, because removing them makes training performance worse. A data quality question follows. The judgment that keeping duplicates helps performance was reached on performance metrics, and at the moment it was reached nobody had counted what was being repeated. Counted now, three in four English articles turn out to be re-entries of the same text. Which outlets that re-entry favored is something the paper does not break out either. If repetition is weight, then nobody wrote down what the weight was placed on.

What DataClinic does to a dataset sits exactly here. Measuring label quality, distributional skew and duplication is work that exposes the cells a performance metric cannot show. This paper did the same work on the axis of provenance, and almost nobody has counted on that axis until now. Here is a textbook case of why a dataset that has not declared its deduplication axis is dangerous, and of how the same count can circulate at twice the size at the same moment.

### 7.2. AI-Ready Data Is Not a Training-Stage Term

What is worth watching in this paper's structure is the way the metric moves house. Sections 1 through 4 are an audit of a training corpus, and in section 5 the same data relocates to a retrieval index. Almost nothing changed in the move. Attach publisher labels to domains, count the mix, then trace the path from that mix to the model's output — the procedure is identical on both sides.

It is easy to assume that "AI-Ready Data" applies only at the training stage. Using someone else's data, this paper shows that it applies to a RAG index just as directly. The questions organizations running an internal RAG have been asking have mostly been about document freshness, access rights and chunk size. One more joins the list. Has anyone counted the source mix?

### 7.3. The Warning to Pass On Is Not "Filter Them Out"

This is the point where the result in 5.2 is most easily distorted on the way into practice. Mixing sources across many outlets clearly reduced the skew. It reduced it in all twelve pairs. And factuality was at its lowest in that same setting. Unless increasing the number of sources and protecting accuracy are measured separately, one metric can improve while the other falls and the report will show nothing happening. This is a measurement problem rather than a policy problem, and measurement is what Pebblous does.

This subject is easy to write up in the frame of "AI has been contaminated by propaganda." What Pebblous wants to say first, having opened the same data, is the opposite. Nothing grew; something remained. That the largest controlled block in the English corpus is American, that three of the most concentrated languages show zero controlled, that 90% of the Cambodia row has no label at all — these are the first items a sensational summary cuts, and all three are available only to someone who actually opened the dataset. So this blog stands on the side that opens the data, and keeps following this subject.

A note on what this article did not do. It does not adjudicate the facts of Crimea, Xinjiang or any other disputed matter, does not assess the political systems of the countries involved, and does not name any commercial model as having trained on this data. The training composition of commercial models is not public, and the paper writes that its own work is not an attempt to adjudicate the veracity of outlets. Every time a figure was carried over, the denominator was written on the same line. There is no ratio in this article with its axis left off. Thank you for reading this far.

## References

Sources for the figures in the body, grouped by their character. Items 1 through 3 are the paper this article reads, its dataset, and the outside database the labels come from; most of the figures and the verbatim quotes come from there. Items 4 through 6 are the original corpora this dataset was extracted from, and 7 through 10 are the prior work the paper points to. Item 11 is the outside control used in 2.2. The last group is the earlier Pebblous articles this one continues.

### Primary — the paper and its dataset

- 1.Bryan Li, Samar Haider, Grace Kim, Fiona Luo, Jinqi Luo, Yuan Yuan, Duncan Watts, René Vidal, Chris Callison-Burch, "The World as Viewed by 136 Countries: An Open, Curated, Annotated, and Multilingual Dataset of 118 Million State Media Articles" (arXiv:2610.24990v1, 18 October 2026). [arxiv.org](https://arxiv.org/abs/2610.24990) — the primary oracle for this article. The 39% to 93%, the 0.36% to 0.19%, the 118 million and 58 million, the 3,000-URL duplicate sample and its 59%, the seven-tier typology and the folding rule, the country and language tables, the USAGM footnote and the 2022 back-projection footnote, the article and topic counts in the Russia–Ukraine case study, and the three metrics in the RAG experiment all come from here. As of 21 October 2026 there is no revision; v1 is the only version.
- 2.WorldStateMedia dataset collection (HuggingFace, manestay). [huggingface.co](https://huggingface.co/collections/manestay/worldstatemedia) — the measured row counts of 79,591,422 for English, 38,755,459 for multilingual and 640 roster entries were confirmed here. The summary badges on the collection overview screen are not row counts, so this article does not quote them. The outlet roster had already been uploaded in May 2026, five months ahead of the paper's release.
- 3.State Media Monitor, seven-tier typology. [statemediamonitor.com](https://statemediamonitor.com/typology) — where the labels in section 3 come from. We were unable to open the original criteria for each tier while writing; the tier names and the scope ("funding, ownership, governance and editorial control") are carried over from the paper's own description.

### Source corpora — where the data was extracted from

- 4.Guilherme Penedo et al., FineWeb (v1.4.0, HuggingFace). [huggingface.co](https://huggingface.co/datasets/HuggingFaceFW/fineweb) — the source of the English data. It holds Common Crawl dumps from mid-2013 to mid-2025.
- 5.Guilherme Penedo et al., FineWeb-2 (v2.1.1, 1,868 language–script pairs). — the source of the multilingual data. Its observation window ends in mid-2024, a year shorter than the English one. The window gap noted in 4.1 originates here.
- 6.FineWeb team, the public write-up giving the basis for dump-level deduplication. [huggingface.co](https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1) — the basis for 1.1. We could not open the original, so this is a secondary citation relayed through the summary quoted in a footnote of the paper.

### Academic — prior work the paper points to

- 7.Bryan Li et al., BorderLines (2024) — the benchmark the section 5 experiment uses. It consists of 720 queries covering 251 disputed regions, and this paper carried the models and retrieval settings over from its follow-up study.
- 8.Shangbin Feng et al., a study showing that political bias in pretraining corpora propagates to downstream tasks (2023) — adjacent work the paper points to. This article does not use it as numerical evidence.
- 9.Julia Kreutzer et al., an audit of scarcity and quality problems in low-resource language web data (2022) — background for section 4. This article does not use it as numerical evidence.
- 10.Hannah Waight, Eddie Yang, Yin Yuan, Solomon Messing, Margaret E. Roberts, Brandon M. Stewart, Joshua A. Tucker, "State media control influences large language models" (Nature, 2026) — used in section 6. It identifies outlets coordinated by China inside multilingual training corpora and shows that continued pretraining on that content shifts models toward more favorable positions on the Chinese government. It is the training-stage counterpart of the retrieval-stage result carried in section 5. The bibliographic entry was confirmed in the paper's reference list; we could not open the original, and the description in the body is a secondary citation relayed through the paper's related-work section.

### Outside control — collected independently of the paper

- 11.homepages.news (palewi.re), tracking news publishers' robots.txt. [homepages.news](https://homepages.news/) — the figures in 2.2. As of the 17 October 2026 reading, 547 of 1,157 publishers blocked CCBot (47.3%), 537 blocked GPTBot (46.4%) and 483 blocked Google-Extended (41.7%). Collected independently of the paper and used only as circumstantial evidence that the timing lines up, not as causation.

### Adjacent Pebblous articles

- 12.[Blocking the Crawlers Didn't Reduce the Citations](/report/ai-crawler-blocking-citation-gap/en/) — continued in 2.2. On what blocking gave publishers in return.
- 13.[When Wikipedia Runs Dry, So Does AI](/report/wikipedia-ai-commons-drain/en/) — continued in section 6. On the side where the supply of freely scrapable text runs dry.
- 14.[Did Anyone Actually Ask the Web's Questions?](/blog/web-question-provenance-decline/en/) — referenced in section 6. Measuring the same Common Crawl by a different yardstick and watching the mix invert.
- 15.[AI-Written Pages Piled Up on .com at Ten Times the .edu Rate](/blog/ai-authored-web-domain-gap/en/) — referenced in section 6. An earlier case of counting what piles up on the web by authorship.
- 16.[Data Poisoning Survives a Quality Filter That Throws Out Nine in Ten](/blog/data-poisoning-survives-quality-filter/en/) — referenced in section 6. On what a quality filter does not catch.
- 17.[Manipulated Comments Slipped Past the Filters That Clean AI Training Data](/blog/pretraining-data-poisoning-curation/en/) — referenced in section 6. About small volumes of deliberately planted contamination, so not the same problem as this article, which reaches the same place by another route.
