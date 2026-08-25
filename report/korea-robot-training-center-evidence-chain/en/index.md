---
title: Korean Data-Quality Test Reports Count Only as Evidence in Europe
subtitle: The robot training centers Korea plans to build will leave verification records beside the data. Whether those records carry weight in Europe is decided by accreditation and designation, by citation in the Official Journal, and by which conformity assessment route applies.
date: 2026-08-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korean Data-Quality Test Reports Count Only as Evidence in Europe

_The robot training centers Korea plans to build will leave verification records beside the data. Whether those records carry weight in Europe is decided by accreditation and designation, by citation in the Official Journal, and by which conformity assessment route applies._

## Executive Summary

> [!callout]
> Data is not the only thing that will come out of the robot training centers Korea has announced. The Ministry of Science and ICT wrote the goal down as a system capable of managing quality through validation of the data and the drafting of interoperability standards. That means verification records will accumulate next to the datasets, and the line items in those records overlap almost exactly with what Article 10 of the EU AI Act asks of providers of high-risk systems. The worth of these facilities therefore rests on how the records are designed, not on how many terabytes they collect.

> The open question is what those records become in Europe once a Korean accredited test report is attached to them. A test report meets three checkpoints on its way across the border. First, accreditation and designation are separate instruments: accreditation confirms that a laboratory is competent, while designation is how a member state appoints a notified body on its own territory, and Korea has no mutual recognition agreement on conformity assessment with the EU. Second, what creates a presumption of conformity in Europe is either a harmonised standard cited in the Official Journal or a common specification adopted by the Commission, and today there is no cited harmonised standard, nor any confirmed adopted common specification. Even the first European standard published this year covers quality management systems rather than data quality. Third, the conformity assessment route itself either calls for no third-party report at all or accepts only one issued by a European body.

> The conclusion is not that this cannot be done. The question is what standing the paper has. A Korean test report is not a passport; it is evidence filed inside the technical documentation. And the evidence Article 10 asks for consists of representativeness checks, error rates, bias examinations and gap logs, all of which pile up while the data is being collected. None of it can be reconstructed after a deadline arrives. The years left are not a grace period. They are an accrual period.

Four numbers carry this report. The first two show how far Europe's machinery has actually come; the last two show what has to be accumulated in the meantime.

0

AI Act harmonised standards  
cited in the Official Journal

2027-01-20

the date robots meet first  
Machinery Regulation applies

30–50%

drop in manipulation success  
across 14 perturbation axes

10 years

retention duty for technical docs  
and the declaration of conformity

This analysis was written by cross-reading primary documents: government announcements and Korean press coverage on one side, the EU Official Journal and standards-body notices on the other. The background and budget structure around the training centers were covered in two earlier pieces, [on why behaviour data became the bottleneck](/report/korea-physical-ai-behavior-data/en/) and [on how small a share of Korea's Physical AI budget goes to data](/report/korea-880-trillion-physical-ai-data-gap/en/), so they are not repeated here. What this report adds is the one thing those pieces left untouched: the legal standing a test report has inside a regulatory procedure.

**Editor's note.** This was written by a company whose business is documenting data quality, so the interest is worth stating up front. Pebblous sits in the measurement and record-keeping layer; it is neither an accreditation body nor a certification body. KOLAS accreditation is in progress, and the timeline and scope will be disclosed separately once fixed. This report does not claim that a Korean test report is enough to meet European regulation. It works out, clause by clause, what else would have to be true for that claim to hold.

## Public records confirm little about the robot training centers

Start by separating what is confirmed from what is not. Korean coverage of this subject describes the scale and layout of the facilities in fairly concrete terms, yet a good part of that detail cannot be traced back to a primary source. The distinction matters more than usual in a story about regulation, where the document is the argument. One unverified figure inside a proposal destabilises the sentence around it.

Here is what can be confirmed. On 1 July 2026 the Ministry of Science and ICT published its Strategy for Securing Core Competitiveness in Physical AI. The text carried by the government policy briefing service says general-purpose data such as robot behaviour data generated by public projects will be pooled in one place alongside sector-specific data, and that behaviour data will also be collected from working environments in manufacturing, mobility and agriculture. The strategy rests on four pillars — securing data, developing core technology, spreading services, and building an ecosystem — and the government calls the next three years the window that decides the outcome.

The facility structure described in the press looks like a hub and spokes. A central hub in Seoul and nearby would produce and process the basic behaviour data and synthetic data that robots need to operate, while regional AI-transformation hubs would gather data from manufacturing, agriculture, logistics and service sites. A ministry official's explanation goes as far as saying the plan will make maximum use of the Physical AI projects and regional hubs already running in North Jeolla, South Gyeongsang and elsewhere. The working name is Data Training Center, and the budget is still at the stage of being sought.

> [!callout]
> **What is not confirmed is worth writing down too.** We traced the claim that training centers will be built across five regions of the country as far as it would go and never found a primary source. The 1 July text contains neither the word "region" in that sense nor the phrase "training center." No related report substantiates the number five. So this report lowers the resolution and goes no further than a central hub and regional hubs. In a piece that deals with regulatory documents, leaving a thing unknown is better than dressing an absent source as a present one.

The money needs the same care. The AI-transformation R&D programme built on Physical AI in South Gyeongsang and North Jeolla has about $975M (KRW 1.4131 trillion) allocated from 2026 to 2030, with precision control in Gyeongsang and the AI platform in Jeolla. The robot training centers, however, are being pursued **separately** from that programme, and no specific amount for a Data Training Center line appears even in the 2027 budget proposal. Put the two numbers side by side and readers will conclude that a $975 million training center is under construction. The verifiable sentence today stops at "the budget is being sought."

One comparison makes the structure easier to see. The attempt to move tacit shop-floor knowledge into data has already been run once, in [the manufacturing data library programme](/report/korea-manufacturing-data-library-tacit-knowledge/en/), and there too the bottleneck was never the volume collected. It was what got written down, and in what form. The robot training centers face that same question.

## The records beside the data are the real output

This report starts from a single clause in the government announcement. One more sentence follows the promise to collect data, and what it points at is the records attached to the data.

Ministry of Science and ICT, 2026-07-01A system capable of managing quality, through validation of the data and the drafting of interoperability standards

Translated from the Korean original by Pebblous.

Validation means someone judged whether the collected data is fit for use and wrote that judgment down. Drafting interoperability standards means the judgment reads the same way at another organisation. Join the two clauses and the facility's output list appears: for each dataset, a record of how representativeness was checked, a label error rate, the findings of a bias examination, a gap log naming the conditions missing from the data, and the closed-loop success and safety rates measured by actually running the learned policy.

If that list looks familiar, it should. The data governance documentation that Article 10 and Annex IV of the EU AI Act require from providers of high-risk systems calls for almost the same items. The table below sets the two side by side. On the left is what the planned facility produces; on the right is what the European text demands.

| What the training center ends up recording | What the AI Act requires |
| --- | --- |
| Representativeness check — which environments, objects and tasks entered the data | Article 10(3) relevance, representativeness and completeness; the data governance description in Annex IV |
| A record of whether the deployment site's conditions are reflected in the data | Article 10(4) characteristics of the geographical, contextual, behavioural and functional setting |
| Label error rate and review history | Article 10(3) demonstrating best efforts toward the "free of errors" requirement |
| Findings of the bias examination | Article 10(2)(f) and (g) examination for bias and mitigation measures |
| Data gap log — what is missing | Article 10(2)(h) identification of data gaps or shortcomings and how they are addressed |
| Closed-loop success and safety rates | Annex IV rationale for the performance metrics chosen, plus validation and testing records |

The mapping follows Article 10 and Annex IV of Regulation (EU) 2024/1689. The substance of the evidence Article 10 asks for is examined in more detail in [an earlier piece on labelling audit trails](/report/eu-ai-act-article10-labeling-audit-evidence/en/).

The second row sits so close to this report's subject that it deserves reading on its own. Article 10(4) says datasets shall, to the extent required by the intended purpose, take into account the characteristics or elements particular to the specific geographical, contextual, **behavioural** or functional setting within which the high-risk system is to be used. The provision uses the word behavioural itself. The moment a robot trained on assembly motions gathered in a Korean plant is installed in a European one, this paragraph switches on, and the question stops being how much data there is and becomes whether the deployment site's conditions are present inside it. Bench heights, lighting, part-placement habits and the way workers and robots share space differ by country and by plant.

This is where the sovereignty argument for domestic data meets the provision. The two do not conflict, but they ask for different things. One says do not hand your data to someone else; the other says show that the data represents the place the product will be sold into. If a product bound for Europe was trained only on data collected at home, what Article 10(4) wants is not the fact that the data is domestic but a record of how far European deployment conditions are covered and where the holes are. That record is the same object as the gap log.

### 2.1. Regulatory vocabulary is pointing at a performance problem

If representativeness and coverage sound like vocabulary invented for compliance officers, the fastest correction is a study that actually ran the robots. THE COLOSSEUM benchmark, from researchers at the University of Washington and NVIDIA, takes 20 manipulation tasks and perturbs them along 14 axes — the colour, texture and size of objects, table-tops and backgrounds, plus lighting, distractors, physical properties and camera pose — while running five state-of-the-art manipulation models. The paper reports this.

THE COLOSSEUM (RSS 2024)Using THE COLOSSEUM, we compare 5 state-of-the-art manipulation models to reveal that their success rate degrades between 30-50% across these perturbation factors. When multiple perturbations are applied in unison, the success rate degrades ≥75%.

One caution about reading those numbers. The 30–50% figure is a range across all 14 perturbation axes, and the 75% figure applies when perturbations are combined. Neither comes from changing the camera pose alone. The paper notes only that viewpoint weighs especially heavily on image-based models; a viewpoint-only drop does not appear in the abstract. What matters here is less the size of the drop than where the collapse happens, which is at conditions the data never contained.

More useful than the average are the three factors the paper names outright. The perturbations that hurt performance most were **changes in the number of distractor objects, the colour of the target object, and lighting conditions**. The paper supplies the cause as well. In 2D models trained end-to-end on RGB images, a shift in colour or texture pushes the input distribution itself, so the output moves with it, and models without real-world pre-training fall apart when a few extra items appear in frame. Models pre-trained on cluttered real scenes, by contrast, were barely affected by distractors. For anyone planning collection, this is a priority list. A dataset that has not spread lighting, background colour and distractor count orthogonally will break at the same point no matter how large it grows.
