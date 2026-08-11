---
title: A Manufacturing Data Library That Hasn
subtitle: Reading Korea
date: 2026-08-12
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Manufacturing Data Library That Hasn

_Reading Korea_

## Executive Summary

> [!callout]
> Starting in 2026, Korea's Ministry of Trade and Industry will pull the senses and experience of master welders and assemblers out of the shop floor and into files, and from 2027 it will build a manufacturing data library to hold them. The security design is already tight. Data can be used only inside a clean room cut off from outside networks, taking anything out is prohibited, and even viewing requires a separate review. The vault has been designed. What is empty is the rule for what goes into it.

> An intake rule settles two things: what gets written down as the correct answer, and under what conditions the data was captured. Attach sensors and you get current waveforms, molten-pool video, arc sound and torch angles, but decide none of it into a definition of a good weld and what remains is not a craftsman's touch but a log. In the research literature the ground truth for the same molten-pool video splits four ways, and because the unit on the report card changes with it, the results cannot be compared. Nor do the pilot figures the ministry has published say which plant or which conditions produced them.

> An intake rule is not the opposite of openness but the condition for it. Korean courts have upheld confidential-management status even after material was provided to a third party, where circumstances supported a duty of confidentiality; depositing data in a clean room does not by itself forfeit trade-secret status. Companies hesitate less over their legal position than over not knowing how much of what leaves the building. Standardize the label definitions and the condition metadata instead of demanding whole raw logs, and a company can keep its parameter recipes in house while contributing only the signal a model can learn from. Korea left those same two blanks in 2020, in what it called the world's first manufacturing data sharing norms. So the question this report follows is not whether the bill passes but whether those two items make it into the implementing rules.

<!-- stat-card -->
**30** — shop floors where tacit skill is being turned into data — Industry ministry briefing, second half of 2026

<!-- stat-card -->
**20.5%** — of manufacturing workers are 55 or older — Roughly triple the 7.1% of 2010, in 14 years

<!-- stat-card -->
**0.1%** — of small and mid-sized manufacturers have adopted manufacturing AI — Smart manufacturing innovation survey

<!-- stat-card -->
**49** — standard datasets KAMP gathered in six years — Starting from 12 in December 2020

## The Government Designed the Vault First

M.AX, the flagship agenda Korea's industry ministry set out for the second half of 2026, stands for the AI transformation of manufacturing ([Etoday, 2026-08-10](https://www.etoday.co.kr/news/view/2612668)). The first item on the list is moving what has lived in a worker's body into files. From 2026 the ministry will extract the senses and experience of master welders and assemblers as digital data; from 2027 it will build a manufacturing data library to store and use that data safely. Two more milestones follow the library. Between 2027 and 2031 it wants full-stack AI factories in which AI robots judge and run processes on their own, and by 2030 it will designate seven regional industrial complexes as M.AX clusters, expanding private 5G networks and edge AI data centers.

| When | Plan |
| --- | --- |
| From 2026 | Extract the senses and experience of master welders, assemblers and others as digital data |
| From 2027 | Build a manufacturing data library to store and use the extracted data |
| 2027–2031 | Full-stack AI factories in which AI robots judge and operate processes on their own |
| By 2030 | Seven regional industrial complexes designated as M.AX clusters, with private 5G networks and edge AI data centers |

Source: Korea's industry ministry, key policy directions for the second half of 2026 (as reported by Etoday, 2026-08-10). The seven clusters are not new construction but selective upgrades among ten complexes already designated in 2025, and the first pilot site is the Banwol-Sihwa complex.

The first thing that stands out in the plan is how finished the security design is. Data in the library may only be used inside a clean room isolated from external networks, taking data out is prohibited, and even viewing runs through a separate review procedure ([Ajunews, 2026-06-05](https://www.ajunews.com/view/20260605093203224)). Data is also piling up before the building exists. Because the library will take time to stand up, since May 2026 a manufacturing-AI solution development center run by the Korea Electronics Technology Institute has served as an interim site, storing data from the AI factory program, with a prototype manufacturing-AI foundation model targeted by year end.

The tacit-knowledge program is not just paper, either. In its August 4 briefing the ministry said it would turn the tacit manufacturing knowledge of skilled workers at 30 shop floors into data and develop AI models infused with the experience of master craftspeople. What the policy documents call a manufacturing master is the person this report calls a craftsman. Which industries and which processes those 30 sites cover, and whether they share one label schema, does not appear in any public material. The pattern echoes [our earlier report on robot behavior data](/report/korea-physical-ai-behavior-data/en/), where data also flowed into a government-built facility ahead of the rules. The difference this time is ownership: the legal owner of this data is a private company, not the state.

### The hurry comes from how fast the people are leaving

According to the Korea Employment Information Service, 20.5% of manufacturing workers are now 55 or older, roughly triple the 7.1% of 2010, over 14 years. Workers in their fifties are the largest band at 24.7%, and those 60 and over account for 13.2%. Shipbuilding employment stands at 93,038, less than half the 2014 peak of 203,400, and the Korea Offshore & Shipbuilding Association projects an annual shortfall of more than 12,000 workers, reaching about 130,000 by 2027.

Read those numbers as a generic labor shortage, though, and the point blurs. E-7-3 visas issued for shipyard trades including welding rose from 264 in 2021 to 13,297 in 2025, and foreign nationals now make up about a quarter of the shipbuilding workforce. By the ministry's own count, 86% of production workers newly hired in shipbuilding during the first three quarters of last year were foreign. The headcount gap is largely being filled. What is not being filled is the layer of judgment that walks out the door with a worker of thirty years' standing, and that judgment is what the data program aims at.

### What the bill governs, and what it does not

The enabling statute already exists. The current Act on Promoting Industrial Digital Transformation and the Use of Artificial Intelligence is itself a renaming of the 2022 Industrial Digital Transformation Promotion Act, so a law covering industrial data and AI use together is not new ground. On top of that, lawmaker Chang Chul-min, a ranking member of the National Assembly's industry committee, introduced a full-scale amendment on July 27, 2026 that would rename the statute the Industrial AI Transformation Promotion Act. That is the bill the government and the press call the M.AX law.

The text of the amendment is so far visible only through secondary reporting. According to those reports, Article 2 adds a definition of an industrial data library, and Article 35 requires industrial data collected and held in the library to be sorted into tiers by its impact on national security and the national economy, with security measures established and enforced per tier. Articles 26 through 28 cover performance certification for industrial AI products, revocation of that certification, and procedures for correcting manufacturing defects. Reports also describe provisions for forming and running a manufacturing AX alliance, for using tacit-knowledge data from the shop floor, for collecting and preserving unstructured data such as the working behavior and know-how of skilled technicians, and for exemptions from preliminary feasibility study requirements.

The schedule pressure is unmistakable. On July 8, 2026 a party-government consultation set the M.AX bill on course for passage during the regular session, and the budget ministry has reportedly been weighing a national manufacturing data library line item in the 2027 budget. If the bill slips, the argument goes, the library construction and AI factory conversion due to ramp up next year slip with it.

> [!callout]
> Within the provisions that have been reported, two of them touch data directly: security after it arrives (Article 35) and product performance after it leaves (Articles 26 to 28). Between those two, a provision covering what arrives and in what format cannot be found. We could not obtain the bill's original text, so we cannot assert that no such provision exists. But line up what is verifiable and the location of the gap becomes clear. That gap is what this report is about.
