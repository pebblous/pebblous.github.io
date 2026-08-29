---
title: Korea Opened Its Sovereign AI Training Data. Two Official Records Count It Differently.
subtitle: Twenty-nine datasets built with public money by five elite teams, opened item by item and checked against the portal that now hosts them
date: 2026-08-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korea Opened Its Sovereign AI Training Data. Two Official Records Count It Differently.

_Twenty-nine datasets built with public money by five elite teams, opened item by item and checked against the portal that now hosts them_

## Executive Summary

> [!callout]
> On 27 August 2026 Korea's Ministry of Science and ICT and the National Information Society Agency (NIA) opened 29 training datasets to the public. The five elite teams of the government's Sovereign AI Foundation Model project had built them with public money, and any Korean national could now download them free of charge. Open the portal, though, and the listing holds 22 items. So we set the announcement record and the portal record side by side, field by field.

> The 29 and the 22 turn out to agree. The annex to the press release split each dataset by format and counted 29 rows; the portal registers datasets whole and counts 22. All five teams reconcile exactly. The trouble sits somewhere else. Where the two official records describe the same dataset, they give different counts, different sizes and different formats. A speech dataset drawn from public-service call centres carries "3,434 hours" in the portal's headline field, while the statistics further down that same page report 514 hours of audio. The 3,434 is not a duration. It is the number of transcript files.

> An open dataset does not arrive as a total. It arrives as items, and the conditions differ item by item. Almost all of the volume sits in two video datasets, while the traffic goes to the small text files at the other end of the list. Two safety datasets carry a different button. And nowhere across the 22 is there a statement of what you may use them for. Whoever takes delivery has to count it out by hand, every time.

<!-- stat-card -->
**82.8%** — Share of volume in two video datasets — Two NAVER Cloud items out of 11,075.6 GiB in total. The single largest is 70.9% on its own

<!-- stat-card -->
**29 rows → 22 sets** — Rows in the annex against entries on the portal — A difference in how each record slices by format. No dataset is missing

<!-- stat-card -->
**3,434 → 514** — Stated against actual hours in the call-centre speech data — The headline field wrote 3,434 transcript files as "3,434 hours"

<!-- stat-card -->
**0** — Datasets that state their terms of use — None of the 22 detail pages carries a licence or permissions field

## The data outlives the teams that lost

Korea's Sovereign AI Foundation Model project picked five domestic consortia, called [elite teams in the ministry's own English](https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&bbsSeqNo=42&nttSeqNo=1292), gave them public money to build large home-grown models, and thins the field at each stage evaluation. The data that the Ministry of Science and ICT and NIA opened on 27 August 2026 is what those five teams produced **in the course of the first stage evaluation**. By the day of the announcement, two of the five had already left the programme.

![Official press release page: Ministry of Science and ICT announces the opening of 29 Sovereign AI Foundation Model training datasets](./image/img-01-korea-kr-press-release.png)
*▲ The press release this article starts from | Source: [Korea Policy Briefing](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156775729)*

Seoul Economic Daily reported that NAVER Cloud and NC AI were cut at a later stage evaluation and that their data still fell under the mandatory opening requirement. The press release itself does not say this anywhere in its body. Confirming it is easy enough all the same. Both teams appear in the annex table of the release and in the portal listing, exactly as the surviving teams do. **Twelve** of the 22 registered datasets belong to those two teams, and they account for **83.6%** of the volume opened. The output of the side that lost the competition does not disappear; it stays at the counter.

It stays because the programme was designed that way. Here is how the release states the basis for the opening, in our translation from the Korean.

> [!callout]
> "Under the participation conditions in the public notice for the Sovereign AI Foundation Model programme, at least 50% of the data secured through the data construction and processing budget had to be opened. Against that requirement, NAVER Cloud, Upstage, SK Telecom and NC AI decided to open the whole of the data that had passed quality verification and related checks. LG AI Research decided to comply with the mandatory opening volume (50% or more) and to select the data for release statistically."

The line most often misread is the one about LG AI Research. Report it as "opened just over half, as the rules require" and it sounds as though a rule held the company back. But the word in the original is **mandatory opening volume**, and 50% is a floor, not a ceiling. Four teams handed over everything that cleared verification. LG AI Research met the floor by taking a sample at fixed intervals from each dataset, and the release says the Telecommunications Technology Association (TTA) checked that selection. What share was actually opened cannot be worked out. The annex has a column for volume opened and no column for the volume built.

Verification fell to NIA and TTA. Once the first stage evaluation closed, the two bodies took delivery of everything each elite team had built with its construction and processing budget, ran quality verification alongside checks for personal information and harmful content, and stripped out data carrying licence restrictions. The 22 items at the counter are therefore not everything the teams made. They are what came through three filters.

The money behind the data was never a single pot. An August 2025 report on the final selection of the five elite teams sets out the government's data support in three separate strands. The "15 billion won data construction and processing budget for 2025" cited in the opening announcement appears to be the per-team strand; the other two sit on their own budget lines.

| Support strand | Size | Character |
| --- | --- | --- |
| Joint data purchasing | 10 billion won | Government buys and processes what the teams request in common |
| Broadcast video training data | 20 billion won | A dedicated line for high-quality broadcast footage |
| Per-team dataset construction | 2.8 billion won per team | Each team builds to its own model development strategy |

Source: Byline Network, "Five elite teams chosen for the Sovereign AI Foundation Model programme" (4 August 2025). The public notice puts the per-team strand in a range of 2.8 to 4.0 billion won a year and the confirmed figure came in at the floor. Who administers the 20 billion won broadcast video line is not identified in any published document. Nothing supports reading a causal line between this budget item and the concentration of video volume discussed later.

A quantitative clause requiring that a fixed share of publicly funded training data be released is unusual. Within what published material shows, Japan's GENIAC documents carry no obligation to release training data, and neither IndiaAI nor Singapore's SEA-LION has such a clause. Europe's OpenEuroLLM builds a requirement into its programme structure that candidate data be catalogued openly. We did not read every country's call documents in the original, so "Korea is the only one" is not a claim we can make. What stands out is the direction of travel. Europe and India assemble data centrally and **hand it to** the teams; Korea makes the teams **hand out** what they built. That the output of an eliminated team stays at the counter is a consequence of that design.

On the same 27 August, the government also decided to bring forward the opening of 100 high-value public datasets. [Our earlier report on that decision](/report/public-data-top100-ai-license-2026-08/en/) followed the flow running from government to the elite teams. This one follows the flow coming back from the elite teams to the public.

## Twenty-nine and twenty-two were the same list

The announcement said 29. Open the portal and count, and you get 22. Querying AI Hub's Sovereign AI Model Data menu on 29 August 2026 returned 22 registered datasets, serial numbers 71890 through 71913. That is the listing on day two of the opening. Where did the other seven go?

![AI Hub Sovereign AI Model Data listing page — elite-team filters and dataset cards](./image/img-02-aihub-list-portal.png)
*▲ Open the portal, and 22 datasets are what is actually registered | Source: [AI Hub Sovereign AI Model Data](https://aihub.or.kr/aihubdata/wblextrldata/list.do?currMenu=520&topMenu=100)*

The answer was in an attachment. Annex 1 to the ministry's press release, titled "Status of data construction and use by elite team, and the opening plan," is a table of five columns: **team · dataset name · format · volume opened · size**. Count the rows and you get exactly 29. Count the distinct dataset names written inside them and you get exactly 22. The government's unit is a row, a dataset sliced into video, text, speech or image; the portal's unit is the dataset itself.

The correspondence holds not only in the totals but team by team. Only the two right-hand columns matter here. The count of distinct datasets in the annex and the count registered on the portal agree for all five teams.

| Elite team | Rows in Annex 1 | Distinct dataset names | Registered on AI Hub |
| --- | --- | --- | --- |
| NAVER Cloud | 6 | 2 | 2 |
| Upstage | 5 | 5 | 5 |
| SK Telecom | 6 | 4 | 4 |
| NC AI | 10 | 10 | 10 |
| LG AI Research | 2 | 1 | 1 |
| Total | 29 | 22 | 22 |

The seven come from five datasets. NAVER Cloud's public video and broadcast video each break into three rows, one for video, one for text and one for speech, and SK Telecom's two LMM datasets and LG AI Research's Scene Understanding dataset each break into two. Those five occupy twelve rows between them; the remaining seventeen datasets take one row apiece. Twelve folding into five is where the seven go.
