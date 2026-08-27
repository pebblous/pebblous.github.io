---
title: Korea Pulled 100 Public Datasets Forward a Year. The License Change Was a Different List.
subtitle: The 27 August Data Ministers
date: 2026-08-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korea Pulled 100 Public Datasets Forward a Year. The License Change Was a Different List.

_The 27 August Data Ministers_

## Executive Summary

> [!callout]
> On 27 August the Korean government moved the completion date for opening 100 high-value public datasets from 2028 to 2027. The second item on the same agenda was attaching a mark to 37 public works that permits their use in AI training. The two decisions came from different ministries and cover different lists, and they changed different things. One changed when. The other changed on what terms.

> Open the annexes to the press release and the limits of the counting unit show up. Roughly one in four of the rows in the opening schedule carries a caveat: "data whose copyright has expired will be opened first," "similar data will be opened," "pilot release in 2027, expanded later." The header of the 37-item conversion table says some of it will need de-identification first. The main text says there is no problem; the annex says parts need work. Openings are counted by the row, but what actually comes out of a given row is decided in the notes column.

> What a team assembling a training corpus needs is not the length of the list but the terms attached to each item on it. And managing terms through per-item labels has a known weakness. An audit of widely used dataset hosting sites found license fields frequently empty, and, where filled in, frequently wrong in the permissive direction. Attaching a label and getting it right are two different jobs.

<!-- stat-card -->
**12 / 46** — Scheduled items carrying a caveat — Counted row by row across the 46 rows of the annex "Key Data Scheduled for Release"

<!-- stat-card -->
**2028 → 2027** — Completion date for the 100 — The 35 items slated for 2028 moved into 2027

<!-- stat-card -->
**27** — Items left in the middle tier — The 64 available to the selected teams minus the 37 eligible for conversion

## Two lists came out of one meeting

The second Data Ministers' Meeting convened at 2 p.m. on 27 August 2026 at the Government Complex in Seoul, chaired by Prime Minister Han Seong-sook. Ministers and vice-ministers from the ministries concerned attended, among them Science and ICT, the Interior and Safety, and Culture, Sports and Tourism, along with the head of the data division of the National AI Strategy Committee. The body itself is new: it was established in May 2026 as the whole-of-government coordinating organ for data.

![Exterior of the Government Complex Seoul, where the meeting was held](./image/img-01-government-complex-seoul.jpg)
*▲ The Government Complex in Seoul, where the second Data Ministers' Meeting was held | Source: [Wikimedia Commons (Seoul Institute, CC BY 4.0)](https://commons.wikimedia.org/wiki/File:Government_Complex_Seoul_Main_Building.jpg)*

Coverage of the meeting mostly reduced it to a single sentence: the release of 100 high-value public datasets had been moved a year earlier. That summary is accurate, but there were two items on the table that day, and they differed in both the lead ministry and the material covered. Because they were announced on the same day from the same podium, the two are easy to read as one. Anyone who actually intends to download the data and use it has to keep the two apart to make a decision.

|  | Agenda item 1 | Agenda item 2 |
| --- | --- | --- |
| Title | Plan for the early release of AI and high-value public data (Top 100) | Plan to support sovereign AI models with public data and public works |
| Lead | Ministry of the Interior and Safety, Public Data Policy Division | Ministry of Science and ICT, AI Data Policy Division; Ministry of Culture, Sports and Tourism, Copyright Industry Division |
| Material | 100 public datasets | A review population of 102 public data items and public works |
| What changed | Opening date (2028 → 2027) | Terms of use (KOGL AI type on 37 items) |
| Who receives it | General users of the national open data portal | The selected teams in the sovereign AI foundation model program; for the 37 items, every AI company |

Source: Office for Government Policy Coordination, press release on the second Data Ministers' Meeting (27 August 2026), main text and the listed contact divisions. Document titles are our translations of the Korean.

### 1.1. What item 1 changed is the calendar

The release schedule for the 100 datasets originally ran across four years. Ten were opened in 2025 and 25 are in progress for 2026, with the remaining 65 split between 30 in 2027 and 35 in 2028. The decision on 27 August pulls the 35 from 2028 into 2027, so that all 65 land in a single year. Arithmetically it merges two years' worth into one. Neither the composition of the list nor the terms attached to any item on it changes as a result.

The press release also states why the schedule was accelerated: the ten datasets opened last year produced concrete results. Two cases are given as evidence. One is a demand-responsive transit service, Shucle, which used synthetic transit-card usage data released by the Korea Transportation Safety Authority to improve public transport routing and to analyse the operating performance of demand-responsive transit. The other is a legal tech company, LBOX, which used statutory interpretation cases from central government agencies and rulings from special administrative appeals, both released by the Ministry of Government Legislation, to train legal AI and to ground its answers.

The second case sits squarely on this article's subject. Using public data for AI training is already being cited as a payoff from opening it. Yet the press release records nothing about what terms were attached to that material. Success is logged as a count of datasets opened and services built on top of them; the conditions that made the data usable for training are not logged at all.

The other figures the government offered as evidence sit on the same axis. Between 2015 and 2026 it opened 267 high-quality public datasets, from which 3,625 private-sector services emerged. The 267 include the 25 items pushed through this year under the Top 100 program. Zigbang, Goodoc and Kweather are named as flagship cases. Every one of these measures how much was opened, and how fast.

### 1.2. What item 2 changed is the terms of use

The second item starts somewhere else. Since August 2025, under the sovereign AI foundation model program, the government has supplied its selected teams with 50 items of public data and public works held by 33 ministries and agencies, amounting to roughly 23.93 million records: historical material from the National Institute of Korean History, reports and publications from the Ministry of National Defense and the Korean National Police Agency, decisions from the Tax Tribunal. This meeting added the results of a review of a further 102 items. The review asked two questions. Can this be supplied to the selected teams, and can it be supplied to AI companies generally?

The second question is the licensing question. The press release phrases it as "whether conversion to the AI type of the Korea Open Government License (KOGL) is possible." That is where the number 37 comes from. For those 37 items the government said it would convert them to the KOGL AI type or similar, so that any AI company can use them.

> [!callout]
> 100 and 37 are not numbers you can add or subtract. The first is a list of public datasets administered by the Ministry of the Interior and Safety. The second is a subset of the 102 public data items and public works reviewed by the Ministry of Science and ICT and the Ministry of Culture, Sports and Tourism. Neither list refers to the other. Any statement to the effect that "only 37 of the 100 are usable" has no basis in the source document.

This split connects to the problem covered here on 17 August. A Board of Audit and Inspection audit found that local governments had been building data much like the AI training data the central government had already built, and the cause was the absence of any catalog in which existing data could be checked ([The Government Built the Training Data. Then Other Agencies Built It Again.](/report/korea-public-ai-data-duplication-audit-2026-08/en/)). That was a measurement problem at the construction stage. This is a measurement problem at the release and use stage.

## Twelve rows in the opening schedule carry a caveat

Pages 5 and 6 of the press release carry an annex titled "Key Data Scheduled for Release." It has 46 rows, numbered 1 through 46 with no gaps. The last column of the table is for notes. Most rows leave it blank; 12 of them have something written in it. That is a little more than one row in four.

Those 12 rows are where this article starts. We read four news reports on the 27 August meeting all the way through, and not one of them quoted the notes column. What the reports carried were two numbers: 100 and 2027. Yet this column is the part anyone receiving the data actually has to read. A decision to open something and a decision about what gets opened are two different sentences, and the second one lives in the notes.

| # | Dataset | Ministry | Notes column (translated) |
| --- | --- | --- | --- |
| 2 | 3D data for standard construction models | MSIT | Change of holding agency under review |
| 5 | Driving data specific to autonomous-vehicle road environments | Land & Transport | Pilot release in 2027, expansion to follow |
| 6 | Import/export commodity codes and tariff data | Customs Service | Similar data will be opened |
| 9 | Nationwide power plant operating data | Climate & Energy | Standardise the opened data, then expand the release |
| 12 | Nationwide port operations and real-time vessel movement data | Oceans & Fisheries | Standardise the opened data, then expand the release |
| 15 | Korean body dimension and shape data | Trade & Industry | Measures to prevent unauthorised use from abroad under review |
| 20 | Consolidated book information, National Library of Korea | MCST | Data whose copyright has expired will be opened first |
| 23 | Consolidated Korean performing arts data | MCST | Data whose copyright has expired will be opened first |
| 25 | Korean film multimodal data | MCST | Data whose copyright has expired will be opened first |
| 26 | Data for verifying the authenticity of foreign passports | Justice | Similar data will be opened |
| 42 | Urban flood observation and prediction data | MOIS | Change of holding agency under review; standardise the opened data, then expand the release |
| 45 | Consolidated Korean Industrial Standards (KS) certification data | Trade & Industry | Domestic standards data will be opened |

Source: counted row by row from pages 5–6 of the annex "Key Data Scheduled for Release," Office for Government Policy Coordination press release (27 August 2026). Ministries are listed as the responsible ministry; delegated implementing agencies are omitted. Dataset names and notes are our translations of the Korean.

### 2.1. The caveats come in three kinds

The 12 rows contain 13 separate phrases, because row 42, the urban flood data, carries two of them at once. Grouped by what they do, the phrases sort into three kinds.

| Kind | Phrase in the notes column | Count | Rows |
| --- | --- | --- | --- |
| Copyright constraint | Data whose copyright has expired will be opened first | 3 | 20, 23, 25 |
| Constraint on who may use it | Measures to prevent unauthorised use from abroad under review | 1 | 15 |
| Substitution or deferral of scope | Standardise the opened data, then expand the release | 3 | 9, 12, 42 |
| Change of holding agency under review | 2 | 2, 42 |  |
| Similar data will be opened | 2 | 6, 26 |  |
| Pilot release in 2027, expansion to follow | 1 | 5 |  |
| Domestic standards data will be opened | 1 | 45 |  |

All three copyright-constraint rows belong to the Ministry of Culture, Sports and Tourism: the National Library book records, the consolidated performing arts data, the Korean film multimodal data. The ministry entered six rows in this table, and half of them carry a note. It is the only ministry with as many as three caveats. By share alone others rank higher — Trade and Industry has notes on both of its rows, and the Customs Service, Justice and the Interior each put a note on their single row — but those ministries entered only one or two rows to begin with. What shows through here is that cultural assets are copyrighted works, so the decision to open them and the decision to permit their use do not conclude in one step.

The constraint on who may use it appears once, at row 15, and it is an unusual kind. The note on the Korean body dimension and shape data says the ministry will review measures to prevent unauthorised use from abroad. It reads as a plan to open the data while keeping track of who is using it. Since the national open data portal is a counter that hands over files without asking about nationality, what form that review would take is not yet in any document.

Substitution or deferral of scope is the largest group, with eight. Standardise it first and widen later; open similar data instead; review whether to move it to a different holding agency; run a pilot release and expand afterwards. What these phrases share is that the thing which will eventually come out of that row may not be the thing its label currently names. "Similar data will be opened" is the sharpest case. For anyone who downloads it expecting tariff data, how far "similar" reaches is not written in the table.

> [!callout]
> These 46 rows are not the full 100. They are an extract published under the title "Key Data Scheduled for Release." We could find no document explaining why there are 46 rows or on what basis they were selected. The tally above therefore applies only to the 46 entries in the annex; the share of the full 100 that carries notes cannot be established from published material. Reading it as "only 46 will be opened" is equally wrong.

## What the AI type permits, and what it requires

KOGL is the permission mark attached to public works in Korea, the counterpart to Creative Commons for material produced by the state. In January 2026 two new types were added to it at once: Type 0 and the AI type. The Ministry of Science and ICT and the Ministry of Culture, Sports and Tourism jointly announced a plan to expand the use of public works in AI training at the fourth Science and Technology Ministers' Meeting, and the ministry of culture handled the revision and public notice of the marking standard. The exact date the notice took effect does not appear in published material, so this article dates it only to January 2026.

![The six KOGL permission marks — Type 0, the AI type, and Types 1 through 4](./image/img-02-kogl-marks.png)
*▲ The six KOGL permission marks. From left: Type 0, the AI type, and Types 1 through 4 | Source: [Korea Copyright Commission, KOGL](https://www.kogl.or.kr/info/license.do)*

The AI type's summary is short. No attribution required; commercial and non-commercial use permitted; adaptation and other derivative works permitted. Read that far and it looks close to unrestricted. The conditions come in the next paragraph. The KOGL text says the work may be used freely only where it is used as AI training data, and then attaches three requirements.

1. Technical measures are required so that outputs identical or substantially similar to the public work are not generated.
2. Where an output directly quotes the public work, technical measures are required to indicate the source.
3. Commercial use of an AI model trained on the public work is permitted, but resale of AI training data produced from the public work is prohibited.

<!-- stat-card -->
**Individual conditions of the KOGL AI type (Korea Copyright Commission KOGL guidance, translated from the Korean)**

The first two of the three fall on whoever operates the model, not on whoever receives the data. They look at what the output resembles rather than at how the source was handled during training. In practice, the requirement to prevent similar outputs is output filtering and memorisation suppression work, and the requirement to indicate the source on direct quotation means building citation into the generated result. Neither is finished at the moment the dataset is downloaded. Only the third condition concerns data distribution, and it blocks repackaging the material as training data and selling it on.

One more rule sits outside that list of conditions. The KOGL guidance states that where a user's purpose is something other than using an AI-type public work as AI training data, the user must comply with the terms of the existing type displayed alongside it. A single mark thus splits into two rule sets depending on the use. Put the same file into training and the three conditions above apply; quote it in a report or display it on a service screen and the conditions of whichever of Types 1 through 4 is displayed alongside apply instead. For the recipient, that means reading both marks attached to one item.

The scope of the phrase "AI training data" here follows the definition in Article 2(12) of the Framework Act on Artificial Intelligence Development and Establishment of a Foundation of Trust: data used in the development or use of artificial intelligence. A mark refers to a statutory definition, and that definition in turn sets how far the terms of use reach.

### 3.1. The AI type is not the most open mark

News that a work has been given the AI type suggests it has been opened as widely as possible for AI. Read the KOGL guidance as written, though, and a different picture emerges. The guidance says the AI type is chosen alongside the existing Types 1 through 4, and that a public institution selecting the AI type displays it together with the existing type. Then it adds one sentence: KOGL Type 0 and the AI type cannot be displayed together.

That one sentence fixes a hierarchy. Type 0 is the free-use mark, without even an attribution requirement, which means a user putting the work into AI training has nothing to observe. The AI type comes with three conditions. A rule that the two cannot be displayed together tells you they are not two options on the same tier but markers of different states. Judged on the single use of AI training, the one carrying no obligations is Type 0.

This picture comes from laying the rules over one another; it is our reading, not something the press release states. The practical implication is clear enough all the same. The AI type is not the top of the openness ladder. It is a device that cuts one passage, marked AI training, through works on which constraints remain. The fact that an item carries the AI type arrives together with the fact that it is not Type 0.

## Look inside the list of 37

The second annex, on page 7 of the press release, is titled "Data to Be Converted to the New KOGL Types (AI Type and Others), 37 Items." It has 37 rows in four categories. Publications and policy materials account for 19, more than half; images and video for 8; examination questions and Q&A for 6; deliberation and decision documents for 4. Among the entries are Korea Fair Trade Commission decisions, Anti-Corruption and Civil Rights Commission deliberation materials, Korea Communications Agency examination papers, and recordings and archive material from the National Gugak Center.

![The National Gugak Center, which holds three rows in the 37-item table](./image/img-03-gugak-center.jpg)
*▲ The National Gugak Center, which holds the most rows — three — of any institution in the 37-item table | Source: [Wikimedia Commons (Michael Comella, CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:National_Gugak_Center_in_Seocho-gu,_Seoul,_South_Korea.jpg)*

| Category (as printed) | Count | Rows |
| --- | --- | --- |
| Publications and policy materials | 19 | 1–19 |
| Deliberation and decision documents | 4 | 20–23 |
| Examination questions and Q&A | 6 | 24–29 |
| Images and video | 8 | 30–37 |
| Total | 37 |  |

Source: Office for Government Policy Coordination press release (27 August 2026), annex on page 7. Category names are our translations of the Korean.

### 4.1. "No problem" does not mean you can use it as is

Page 3 of the main text describes these 37 items as free of copyright, personal-data and similar problems. The header of the annex table says something else.

> [!callout]
> ※ As submitted by the ministries; subject to change during detailed consultation (some data will require de-identification for personal information, copyrighted material and the like). [translated from the Korean]

The main text and the annex speak at different strengths. Neither is false. "Sorted out far enough to be classified as convertible" and "safe to drop into a pipeline as downloaded" are different statements. The annex also records that the list reflects what ministries submitted and may change during detailed consultation. The number 37 is itself not yet a settled value.

### 4.2. The counting unit is not the dataset

Counted by institution, the 37 rows come from 31 distinct bodies. The National Gugak Center takes three rows; the Korea Fair Trade Commission, the Anti-Corruption and Civil Rights Commission, the Korea Communications Agency and the National Folk Museum of Korea take two each. Of these, the National Folk Museum's two rows are a different case.

Rows 14 and 36 carry the same name, the Encyclopedia of Korean Folk Culture, and the same holding institution, the National Folk Museum. The only difference is the category column: row 14 is filed under publications and policy materials, row 36 under images and video. It reads as one asset split across two cells by media format. If so, 37 is not a count of datasets. It is a count of the items ministries submitted.

Another case looks similar but is not. The National Museum of Korea appears at row 21 of the Top 100 table as artefact data, and at row 34 of the 37-item table as artefact information from museums nationwide. The names differ and the two tables draw on different populations, so this is not the same asset counted twice.

There are more such pairs. The Korea Heritage Service appears at row 19 of the opening schedule as digital archive data for tangible and intangible national heritage, and at row 31 of the 37-item table as an intangible heritage digital archive. The Ministry of Personnel Management appears at row 46 as national examination questions and answers, and at row 29 of the 37-item table as civil service examination papers. The names overlap, but the populations of the two tables differ, so these are not additive either. What they do show is that adjacent assets held by one institution are handled in one table as a question of when to open and in the other as a question of on what terms to use. No sentence in the press release connects the two tables. Which terms of use will attach to an item opening in 2027 cannot be determined from the opening schedule alone.

Where the 17 August report dealt with the same data being built twice, what this table shows is the same asset being counted twice. One leaks budget and the other inflates statistics, but the cause sits in the same place: there is no agreed unit for what counts as one thing.

### 4.3. The 27 are neither open nor closed

Where the number 37 comes from is set out in a one-line footnote on page 3 of the press release: 64 items can be supplied to the selected teams, and of those, 37 are eligible for conversion to the KOGL AI type. It is the result of filtering the 102 reviewed items twice. Since 64 cleared the first gate, the remaining 38 were classified as not suppliable even to the selected teams. What those are, and what they caught on, is not in the press release.

The part that is easy to miss is the 27 in the lower right. These are items that can go to the selected teams but are not being converted to the AI type, and they are hard to call either open or closed. They are supplied to designated recipients only. Count in two columns, opened and not opened, and this layer lands in neither. It becomes visible only once you add a second axis: to whom, and on what terms. When these 27 might open to the public is not written in the press release.

One more caveat. The press release says the items will be converted to the KOGL AI type "or similar." Because of that qualifier, it cannot be assumed that all 37 will receive the AI type. Some may be headed for Type 0 instead, and that allocation is not in any currently published document.

The meeting also set follow-up tasks, and these too are split by agenda item. Under the second item, each ministry is to review the KOGL marking status of the public works it oversees, beyond these 37, and to give priority consideration to applying the AI type where possible; the Ministry of Culture, Sports and Tourism is to pursue an amendment to the Copyright Act to expand the release of public works. Implementation management for the first item runs separately: the data-holding agencies keep the schedule through expert advisory meetings and detailed implementation plans, and the Office for Government Policy Coordination convenes progress reviews. The two lists are divided all the way down to their follow-up procedures. Of these, the Copyright Act amendment amounts to a single line saying it will be pursued; the substance of the bill has not been published. It is a separate track from the broader Copyright Act debate over AI training now under way, and the safer course is not to read the two together.

## Attaching a label is one job. Getting it right is another.

Return to the three culture-ministry rows from section 2. The note on the National Library book records, the performing arts data and the Korean film multimodal data was that data whose copyright has expired will be opened first. Laid over the KOGL system, that phrase has two faces.

![The National Library of Korea, whose book data carries the copyright-expired-first note](./image/img-04-national-library.jpg)
*▲ The National Library of Korea, whose book data carries the "copyright-expired data opened first" note | Source: [Wikimedia Commons (Piotrus, CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:National_library_of_korea_main_building_front.jpeg)*

The first face is sensible. The KOGL guidance states that with the creation of Type 0 the old mark for expired public works is abolished, and that public institutions must convert works carrying that old mark to Type 0. Material whose copyright has expired moves, as a matter of the system's design, to the tier with no obligations at all. Opening the expired portion first means opening the cleanest licences first, and as a sequencing decision there is nothing wrong with it.

The second face is about the sample. Copyright having expired usually means the work is old. Keep only the expired portion of film, performing arts and books, and the period distribution of what remains tilts toward the past. Think about what the expired portion of a Korean film multimodal dataset would consist of and the shape becomes easy to picture. A licence is not a quality measure, yet a subset filtered by licence has a different distribution from the original. Nobody touched the data during filtering, and what enters the corpus is already a different sample.

### 5.1. Labels go wrong in a predictable direction

Managing terms with a per-item label rests on the premise that the label is accurate. One study measured that premise directly. The Data Provenance Initiative, published by Longpre and colleagues in 2023, re-annotated the licences and provenance of 1,858 text datasets together with legal experts. Its subject is mainly public fine-tuning collections, not web-crawled pretraining corpora, so the figures below should not be carried over to the web at large.

| As it appears on the hosting site | GitHub | Hugging Face | Papers with Code |
| --- | --- | --- | --- |
| License "Unspecified" | 72% | 72% | 83% |
| Matches the authors' re-annotated license | 43% | 35% | 54% |
| Suggests a license that is too permissive | 29% | 27% | 16% |

Source: Longpre et al., The Data Provenance Initiative (arXiv:2310.16787), Table 2. The population is 1,858 text datasets, mainly public fine-tuning collections.

The 72% is not a conclusion the authors reached by auditing; it is what the hosting site displays. Once the authors re-annotate the same datasets themselves, the unspecified share falls to 30%. Saying that 72% of datasets have no licence misstates the paper.

The line that matters is the last one. When a label is wrong, there is a bias in which way it is wrong. The authors report that "66% of analyzed Hugging Face licenses were in a different use category," and that these were "often labeled as more permissive than the author's intended license." For anyone sourcing data, that is the dangerous direction. Data mislabelled as more closed than it is merely goes unused; data mislabelled as more open than it is becomes a problem after it is already inside the pipeline.

The same group's 2024 follow-up looked at the time axis. Auditing the robots.txt files and terms of service of 14,000 web domains at two points, in 2023 and 2024, they found that within a single year "~5%+ of all tokens in C4, or 28%+ of the most actively maintained, critical sources in C4," had become fully restricted from use. Measured by terms of service, "a full 45% of C4 is now restricted." Their diagnosis was the mismatch between two documents. The machine-read robots.txt and the human-read terms of service frequently say different things, which they treat as a symptom of web protocols that were never built for this.

> [!callout]
> When two documents at different levels speak at different strengths, whoever is sourcing the data has to read both. The 27 August press release has the same structure. The main text said there were no copyright or personal-data problems; the header of the annex table said some of it needs de-identification. The gap visible in one Korean document is the gap this research measured at web scale.

Whether training on permissively licensed data alone costs performance is outside this article's scope, but we have covered it before ([Clean Data Paid No Performance Tax](/report/common-corpus-performance-tax-myth/en/)).

### 5.2. Where do other jurisdictions write the licence down?

Where Korea's approach sits internationally is not a question that counting datasets can answer. The dividing line is where the licence is specified.

|  | Regulatory approach | How the licence is handled |
| --- | --- | --- |
| EU | Designates six categories of high-value datasets and requires provision via API in machine-readable formats. Implementing Regulation (EU) 2023/138, applicable from June 2024 | Article 4(3) caps the licence: CC0 or CC BY 4.0, "or any equivalent or less restrictive open licence" |
| United States | The OPEN Government Data Act makes machine-readable publication the default. Enacted 2018, effective 2019 | Federal works are public domain by default under 17 U.S.C. §105 |
| Japan | Article 30-4 of the Copyright Act, a general exception that does not specify a population. Amended 2018, in force January 2019 | Use not aimed at enjoying the work requires no permission; data analysis is enumerated explicitly |
| Korea | Creates a new mark, the KOGL AI type, and attaches it item by item. January 2026 | Displayed alongside the existing type, with three conditions attached |

The contrast is clear. The EU tied what gets opened and under which licence into a single regulation. Korea split those two into separate agenda items belonging to separate ministries, and 27 August was the day both items came to the same table. Japan and the United States went further and require no per-item marking at all. With a general exception, or a public-domain default, the need to verify whether each item's label is correct largely disappears.

The EU regulation has one more provision. Article 3(2) requires public sector bodies serving high-value datasets through an API to publish the terms of use of that API and the quality-of-service criteria for it, states that "the terms of use shall be available in a human-readable and machine-readable format," and requires those terms to be compatible with the re-use arrangements laid down in Article 4. Writing the terms down somewhere and attaching them in a form a machine can read are regulated as two separate obligations. In the 27 August document, the information corresponding to terms of use was twelve lines of Korean prose in the notes column of a table inside a PDF annex.

For scale: the United States data.gov catalog lists 554,493 datasets (checked 28 August 2026). The figure changes daily, so the point is less the number than what it implies: at that scale, verifying by hand whether each item's licence label is correct is not a workable method.

The same asymmetry runs through the 27 August press release itself. On the opening side there are cumulative figures, 267 and 3,625. On the terms-of-use side there is a sentence saying each ministry will now begin reviewing the KOGL marking status of the works it oversees. Nowhere in the document is there a number for how many works currently carry which mark. The plan to check comes first; the baseline count does not exist yet.

Per-item marking has the advantage of fine-grained control, and the cost that everything rides on the marks being accurate. What the measurements in 5.1 show is exactly that method's structural weak point. Metrics for counting how much has been opened are well developed. A metric for how accurately the terms of use have been attached does not exist yet.

## Why This Matters to Pebblous

A distinction Pebblous has drawn repeatedly appears intact in this government document. That data exists and that data can be used for training are not the same claim. The list of 100 manages availability; the list of 37 manages permission. The two belong to different ministries and do not refer to each other. What this case demonstrates, at the level of an official document, is that "AI-Ready" covers not only whether the data is prepared but whether the basis for using this data for this purpose is attached to it in writing.

From a quality diagnostics standpoint, terms of use sit in an awkward position. Quality work normally looks at missingness, outliers, distribution and label consistency. Terms of use are not an axis of that kind; they are a gate that sorts material into pass and fail. And this gate quietly changes the distribution of the corpus. Pass only the expired-copyright portion, and what passes is not the original but a subset skewed by period. That is what section 5 showed, and when the distribution of training data tilts, the model's internal representations tilt with it. That a licence filter produces sample bias is the reason terms of use belong in the quality pipeline as a measured item.

For an organisation using public data in training, three things are worth checking at the point of acquisition.

<!-- stat-card -->
**First** — Which KOGL type is on this item. The AI type is displayed together with an existing type, so read both marks. For any use other than AI training, the conditions of the existing type apply.

<!-- stat-card -->
**Second** — Whether the release notice carries a note or caveat. Phrases like expired-copyright first, similar data will be opened, or pilot release redefine the scope of what you will actually receive.

<!-- stat-card -->
**Third** — Whether what arrived is the original, a substitute or a subset. Items with the same name can be listed under two categories, so do not judge by the item name alone.

Metrics for the rate of opening are mature. How much was opened and how quickly gets measured in several ways, as in the tally of 267 datasets opened and 3,625 services built. What has no name yet is the layer above it. What to call the share of opened data that actually carries a documented basis for training use, and how to count it, has not been settled. Pebblous stands not on the side that opens data but on the side that judges whether opened data is in usable condition. Setting the standard for that judgement becomes more necessary the more mature the opening metrics get.

## References

### Policy and primary documents

- 1.Office for Government Policy Coordination (2026). [Press release: Data Ministers' Meeting chaired by Prime Minister Han Seong-sook](https://www.opm.go.kr/opm/news/press-release.do?mode=view&articleNo=163237). 27 August 2026, 7 pp., two annex tables. (Primary source for this article: the release schedule, the 102→64→37 footnote and both annex tables.)
- 2.Korea Copyright Commission / KOGL. [Guide to KOGL types](https://www.kogl.or.kr/info/license.do). (Content of the Type 0 and AI type marks, the three individual conditions of the AI type, the rule against joint display, and the conversion notice for expired public works.)
- 3.Ministry of Science and ICT / Ministry of Culture, Sports and Tourism (2026). [Press briefing: new KOGL type freely usable for AI training](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156745679). 28 January 2026, fourth Science and Technology Ministers' Meeting.
- 4.Framework Act on Artificial Intelligence Development and Establishment of a Foundation of Trust, Article 2(12). (Statutory definition of AI training data.)
- 5.Commission Implementing Regulation (EU) 2023/138, Articles 3(2) and 4(3). [CELEX:32023R0138](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0138). (Licence ceiling of CC0 or CC BY 4.0 for high-value datasets; terms of use to be available in human- and machine-readable form.)
- 6.OPEN Government Data Act (Title II, Foundations for Evidence-Based Policymaking Act, 2018) / 17 U.S.C. §105. (Public-domain default for federal works.)
- 7.Japan, Copyright Act Article 30-4 (amended 2018, in force 1 January 2019). (General exception for use not aimed at enjoying the work, with data analysis enumerated explicitly.)
- 8.data.gov. [Dataset catalog](https://catalog.data.gov/dataset). 554,493 datasets listed (checked 28 August 2026; changes daily).

### Academic

- 9.Longpre, S., Mahari, R., Chen, A., Obeng-Marnu, N., Sileo, D., Brannon, W., Muennighoff, N., et al. (2023). [The Data Provenance Initiative: A Large Scale Audit of Dataset Licensing & Attribution in AI](https://arxiv.org/abs/2310.16787). arXiv:2310.16787. (Audit of 1,858 text datasets; licence omission of 72%+ on hosting sites; licences suggested that are too permissive 29% of the time on GitHub and 27% on Hugging Face.)
- 10.Longpre, S., Mahari, R., Lee, A., Lund, C., et al. (2024). [Consent in Crisis: The Rapid Decline of the AI Data Commons](https://arxiv.org/abs/2407.14933). arXiv:2407.14933. (Longitudinal audit of 14,000 web domains; in one year 5%+ of C4 tokens and 28%+ of its most critical sources became fully restricted, and 45% of C4 is restricted by terms of service.)

### Earlier Pebblous reports

- 11.Pebblous (2026). [The Government Built the Training Data. Then Other Agencies Built It Again.](/report/korea-public-ai-data-duplication-audit-2026-08/en/) 17 August 2026.
- 12.Pebblous (2026). [Clean Data Paid No Performance Tax](/report/common-corpus-performance-tax-myth/en/). 7 August 2026.
- 13.Pebblous (2026). [From Stored Research Data to AI Training Data](/report/research-data-ai-ready-pipeline-2026/en/). 23 July 2026.
