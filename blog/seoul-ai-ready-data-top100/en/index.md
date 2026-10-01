---
title: Seoul
subtitle: All six indicators that picked the 100 datasets carry point weights. What the plan never writes down is the standard for calling a dataset finished
date: 2026-10-01
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Seoul

_All six indicators that picked the 100 datasets carry point weights. What the plan never writes down is the standard for calling a dataset finished_

## Executive Summary

> [!callout]
> This article reads one public data plan the Seoul Metropolitan Government put out in September 2026. On September 4 the city's Big Data Deliberation Committee reviewed a proposal titled "Selection of the Top 100 AI High-Value Datasets," and two days later the contents went public. Seoul analyzed the metadata of 37,924 tables and 653,190 columns sitting inside 242 information systems, narrowed that to 204 candidates, and from those picked 100. The chosen data will have its quality and structure reworked over three years starting in 2027, then go out through the Seoul Open Data Plaza. No local government had previously committed to screening high-value data for AI use and cleaning it up on a schedule.

> The yardstick used for picking is a detailed one. News coverage of the announcement wrote only "six criteria including AI utility, policy utility, and citizen impact," yet the annex to the press release lays out all six indicators with their point weights. A table adding up to 100 points was scored by nine people, three from inside the city government and six from outside. The empty spot sits after that. Who decides that a given dataset has finished its cleanup, and against what, appears nowhere in the plan.

> Sections 1 through 5 report what Seoul's announcement and the coverage establish. Section 6 reads those same facts through the eyes of a corporate data lead, and that reading is ours.

### Key Numbers

Sources: press release from the Data Strategy Division, Digital City Bureau, Seoul Metropolitan Government (full text including Annexes 1–3 reprinted by [Korea Social Welfare Journal](https://www.ksw-news.com/news/articleView.html?idxno=3031753)), [Etoday](https://www.etoday.co.kr/news/view/2622216), [Money Today](https://www.mt.co.kr/policy/2026/09/06/2026090610441988298) (September 6, 2026), and [Segye Ilbo](http://seoul.thesegye.com/news/view/1065589875813665).

<!-- stat-card -->
**653K→100** — From columns to datasets — 242 systems and 37,924 tables were swept, then narrowed through 204 candidates

<!-- stat-card -->
**100 pts** — Total across the six criteria — The annex carries all six indicators and their weights. Coverage relayed three

<!-- stat-card -->
**24 vs 2** — Transport and logistics vs education — The most and the fewest across nine fields, showing where demand piled up

<!-- stat-card -->
**0** — Published tests for declaring cleanup done — Picking had a scoring table. Finishing has neither indicator nor weight

## Usability Takes the Spot Where Volume Used to Sit

For a long time the report card for open government data was a count. How many datasets went out, how much that grew year over year, and the number sat in the opening line of every announcement. Seoul's September plan rewrites that opening line. Jeong Young-jun, director-general of Seoul's Digital City Bureau, put it this way: "Where public data policy has so far focused on how much has been opened, in the AI era the core question is which data to provide at what quality so that it actually gets used."

![Seoul City Hall — the glass-curved new building beside the original historic structure](./image/img-01-seoul-city-hall.jpg)
*▲ Seoul City Hall, where the Big Data Deliberation Committee reviewed the Top 100 AI High-Value Dataset proposal | Source: [Etoday](https://www.etoday.co.kr/news/view/2622216)*

Changing the wording and changing the work are two different projects. What moved here is closer to the second. Public data released so far has needed preprocessing by whoever downloaded the file. Field names differed between agencies, blanks and bad values sat mixed into the columns, and the meaning of a code value had to be looked up in a separate document. Seoul says the party providing the data will now do that work instead of the party receiving it. That is also why the opening date slipped to 2027. Picking took less than a year; the repair work is budgeted three.

This is the first time a local government has said it would screen high-value public data for AI use and clean it up systematically. The case did not stay inside Seoul either. On September 30, at the first Council of AI and Data Administration Officers convened by the Ministry of the Interior and Safety, Seoul presented the plan as a local-government case. Three weeks after the announcement, one city's data cleanup schedule had become an agenda item at a government-wide meeting.

## How 653,190 Columns Narrowed to 100 Datasets

Screening started from metadata rather than from a catalogue. Seoul analyzed the metadata of 37,924 tables and 653,190 columns held across 242 information systems. Onto that it laid the data requests coming in from citizens and companies, plus the city's major policy tasks, and surfaced 204 candidates. A comprehensive evaluation against six criteria then fixed the final 100. Seoul's account is that the exercise did not simply pick whatever was requested most often or was easiest to release, but also asked whether a dataset had a structure an AI system could analyze.

The 204 candidates did not come from a single stream. Analyzing the temporal and spatial characteristics and structure of the data Seoul already holds turned up 50 of them. Combining major policies, citizen and corporate demand, and past usage records turned up the other 154. The first stream starts from what is on hand and the second from what is wanted. Running the two separately and then merging them is where this plan parts company with the usual method of building a list out of a demand survey alone.

▲ The screening path as Seoul described it. What decided the last box was a set of six indicators, weights included.

Looking at which areas the 100 came from shows where demand has piled up. Across nine fields, transport and logistics leads with 24 and education trails with 2. Of everything a city generates each day, the material about movement appears to be the thickest and the most frequently requested.

| Field | Datasets | Field | Datasets |
| --- | --- | --- | --- |
| Transport and logistics | 24 | Public order and safety | 9 |
| Regional development and urban management | 14 | Culture and tourism | 9 |
| Welfare and health | 12 | Industry and economy | 8 |
| General public administration | 11 | Education | 2 |
| Environment and energy | 11 | Total | 100 |

Source: Seoul Metropolitan Government announcement, September 6, 2026.

Release does not happen in one go. Thirty datasets open in 2027, another 30 in 2028, and 40 in 2029. Seoul has stated what sets the order: the release difficulty of each dataset, demand from citizens and companies, and potential for AI use. The city also says it will review and upgrade the list of 100 periodically after release, taking in actual usage records, further requests from citizens and companies, and newly surfacing urban problems.

## What Seoul Means by AI-Ready Data

Seoul offered the phrase "AI-Ready data" as a work list rather than a declaration. The announcement names five items: data standardization, cleanup of missing and erroneous values, cleanup of code systems, structuring of time-series and spatial information, and metadata enrichment. Anyone who has actually worked with this kind of data will recognize on sight what each of the five is trying to prevent.

| Cleanup item | What happens without it |
| --- | --- |
| Data standardization | The same field carries a different name and a different unit in each system, so the tables cannot be merged |
| Missing and erroneous values | Blank cells and wrongly entered values quietly bend the training result |
| Code systems | Learning what a code value stands for requires tracking down a separate document |
| Time-series and spatial structuring | Timestamps and coordinates run on different conventions, so joining by time or by place is hard |
| Metadata enrichment | The description of what a dataset contains is too thin, so users get stuck at the discovery step |

The left column lists the items from Seoul's announcement. The right column is this article's rendering of the problem each one targets.

Two use cases Seoul offered show what the five items buy. One joins traffic volume, public transit ridership, and taxi operation records to forecast travel demand and congestion. The other joins river water levels, drainage pump station information, and flood-prone area data to forecast inundation risk. Both are exercises in lining up several sources by time and by location. When timestamp formats differ or coordinate systems fail to match, no amount of care in choosing a model helps, because the work stops at the join.

Not everything can be opened as-is once repaired, either. Where privacy or security makes it hard to publish source data directly, Seoul says it will apply pseudonymization or anonymization, aggregation or gridding, or synthetic data, whichever suits the character of the dataset. The selected list already contains names that presume such treatment: "Seoul citizen pseudonymized consumption activity data," or "real-time population distribution by time of day at 50-meter grid resolution." That amounts to a sixth branch standing beside the five cleanup items, and because it opens data by altering the original, it drags along its own question of how far the alteration has to go to be safe and how much has to survive to be useful.

The delivery mechanism changes alongside. Seoul says it will first assess the quality and structure of source data, repair it, push it out through channels including the Seoul Open Data Plaza, and expand AI-friendly delivery such as APIs and metadata so developers can find and use what they need. Downloading a file and calling an API put the same data to different uses.

## The Six Criteria Carry Points, the Cleanup Does Not

The criteria that every article relaying the announcement named were three: AI utility, policy utility, and citizen impact. All three outlets wrote "six criteria including" and stopped. The other three were never hidden, though. Annex 1 of Seoul's press release sets out all six indicators together with their weights, and the three folded behind that one word are extensibility, combinability, and buildability. The six add up to 100 points, and the scoring involved nine people, three from inside the city government and six from outside.

▲ The upper rows are the evaluation indicators and weights from Annex 1 of Seoul's press release. The dashed row below does not appear in that annex.

Once the weights are visible, so is where the table put its mass. Forty of the 100 points ride on AI utility and policy utility, and the remaining four indicators split 15 apiece. What the annex does not say is how each indicator was defined. Take extensibility and combinability: neither comes with an account of what it measures. The names and the weights are public. The yardstick that turns them into a score is not.

Even so, this is the filled-in side. The genuinely empty spot comes next. The selection proposal went through the Big Data Deliberation Committee, and what to pick was settled by nine people holding a 100-point table. What follows the picking is another matter. Who issues the verdict that "this dataset is finished," and against what, the plan leaves unstated. A scoring table stands at the picking end; at the finishing end there is no table yet.

> [!callout]
> The five items to be repaired are named, but how far each has to be filled in to pass is not. How far below a threshold missing values must fall, how many undocumented code values may remain in a code system, which fields metadata must carry — those are the questions. When the hundredth dataset opens in 2029, whether it cleared the same bar as the 30 that opened in year one hangs on the same missing answer.

It would be unfair to say Seoul ignored the problem. A commitment to review and upgrade the list periodically sits in the announcement, and the sequence of assessing the quality and structure of source data before repairing it is spelled out. Still, there is distance between saying a diagnosis will happen and writing down what gets diagnosed and which reading counts as a pass. Whether that distance closes before the first year of a three-year schedule begins is the part of this plan worth watching.

## The Interior Ministry Brought Its Own 100 the Same Day

The venue where Seoul presented the plan was the first Council of AI and Data Administration Officers, held by the Ministry of the Interior and Safety on September 30 in the international conference room of the Government Complex Seoul annex. This is not an ad hoc roundtable but a statutory body grounded in Article 19 of the AI and Data Administration Act, chaired by the vice minister of the interior and safety and composed of director-general-level officers who oversee AI and data administration and the building, provision, and shared use of data at each agency. Four bodies put items forward that day: the Ministry of the Interior and Safety, the Ministry of SMEs and Startups, Seoul Metropolitan City, and Incheon Metropolitan City.

![Ministry of the Interior and Safety signage — the ministry that convened the Council of AI and Data Administration Officers](./image/img-02-mois-sign.jpg)
*▲ The Ministry of the Interior and Safety, which convened the Council where Seoul presented this plan as a local-government case | Source: [Digital Daily](https://www.ddaily.co.kr/page/view/2026092915252361694)*

One item the Ministry of the Interior and Safety brought to the same meeting shares a number with Seoul's. Alongside the direction for the intelligent work management platform "On-AI" and a plan for improving the UI and UX of public websites, the ministry presented "Early Release of the Top 100 Public Datasets." Seoul's 100 and the ministry's 100 resemble each other in name and in count without being the same list. That is not an inference. Seoul wrote it down: Annex 2 of the press release sets the two Top 100 programs side by side.

The comparison shows two plans aimed at different places. The ministry's is directed at the national AI industry ecosystem and corporate competitiveness, gathering field-specific specialist data such as statutes and case law, agriculture, and Korean culture, at scales running from nationwide down to individual facilities. Seoul's is directed at solving urban problems and running AI-based city administration, gathering spatiotemporal data such as de facto population and movement, commercial districts and card spending, and roads and parking, at resolutions descending to 50-meter and 250-meter grids. The timelines are offset too. The ministry runs from 2025 to 2027, Seoul from 2027 to 2029. The central government started first, and Seoul's case is not trailing behind it so much as running alongside on a different axis.

The overlap does not stop at the number. Several agencies are about to begin cleanup work under the banner of "AI-Ready data," and no common yardstick yet separates what that phrase means from what it does not. One agency may take metadata completeness as its standard, another the consistency of missing values and code values, another the presence of a license declaration. Three agencies could all announce that their cleanup is complete, and anyone trying to pool the three datasets would still have to repair them three more times.

An item Incheon Metropolitan City raised at the council points straight at that gap. Incheon proposed widening the chances for local governments to join AI and data project competitions, and building a framework for shared use and diffusion so that a service one government builds well can be picked up by others. Transplanting a service, though, requires the data underneath to be in a similar condition. The moment diffusion enters the conversation, the question of what "similar condition" means arrives with it. The tasks discussed that day now move to joint review by the relevant agencies, after which the Ministry of the Interior and Safety prepares legal and institutional support and each agency builds an implementation plan suited to its own work. The ministry also said it would distribute AI impact assessment guidelines by December and establish a Public AI and Data Association by 2027. The published materials do not say whether a passing grade for data cleanup lands inside those documents.

## Why Pebblous Is Watching This Plan

What a corporate data lead should take from this plan is not the contents of Seoul's list. It is that picking and declaring finished call on different capabilities. The first is a matter of setting priorities, which a scoring table and a panel of reviewers can settle. Seoul built that table and published it. The second is a matter of measurement and a passing line, which adding more people does not solve. The organization that swept 653,190 columns and stood up a 100-point table has not yet produced the second table.

In-house data cleanup projects stall at the same spot. The kickoff document usually lists what will be repaired: standardization, missing value handling, code tidying, schema work, a list not far from Seoul's five. What lands in the closing report is usually two words, "cleanup complete." When the definition of complete was never written as a number at kickoff, the verdict that the work finished means only that the schedule finished. That is why the next team receives the same data and starts preprocessing over.

So the things to check narrow to three. What our organization uses to rank data by priority, whether those criteria carry weights, and whether the verdict that cleanup is done comes from a measurement rather than from a person. If the last of the three is empty, no amount of sophistication in the first two makes the result verifiable. The question left over from reading Seoul's plan sits in exactly that spot, and so does the thing that will decide whether the 100 datasets get used three years from now.

If the public sector fills this in first, the private sector gains from it. Publishing the indicators an agency used to certify cleanup as complete would give industry its first public passing line to reference. The public sector is where such a yardstick can currently be tried across the widest range of data in Korea. It is not out of reach, either. On the question of what to pick, a precedent already exists in the form of indicators and weights printed in an annex.

Thank you for reading this far. The full text of Seoul's press release, annexes with evaluation indicators and weights included, is available in the [Korea Social Welfare Journal](https://www.ksw-news.com/news/articleView.html?idxno=3031753) reprint; the headline figures appear in [Etoday](https://www.etoday.co.kr/news/view/2622216) and [Money Today](https://www.mt.co.kr/policy/2026/09/06/2026090610441988298); the council proceedings are covered by [Digital Daily](https://www.ddaily.co.kr/page/view/2026092915252361694). It is worth checking what your own organization uses to declare a data cleanup finished, and whether that standard was written as a number at kickoff. We would like to hear what turned out to be missing.

## References

### Primary Source

- 1.Data Strategy Division, Digital City Bureau, Seoul Metropolitan Government. (2026). "Selection of the Top 100 AI High-Value Datasets" press release (including Annexes 1–3). Reprinted by [Korea Social Welfare Journal](https://www.ksw-news.com/news/articleView.html?idxno=3031753).

### News Coverage

- 2.Segye Ilbo. (2026, September 6). "From opening more to AI-ready use" [in Korean]. [seoul.thesegye.com](http://seoul.thesegye.com/news/view/1065589875813665).
- 3.Etoday. (2026, September 6). "Seoul selects AI high-value data Top 100, opening through 2029" [in Korean]. [etoday.co.kr](https://www.etoday.co.kr/news/view/2622216).
- 4.Jung, S. (2026, September 6). "Ready for AI to use directly — Seoul picks high-value data, a first among local governments" [in Korean]. [Money Today](https://www.mt.co.kr/policy/2026/09/06/2026090610441988298).
- 5.Park, J. (2026, September 29). "Director-generals in one room — Interior Ministry activates a government-wide AI and data administration framework" [in Korean]. [Digital Daily](https://www.ddaily.co.kr/page/view/2026092915252361694).
