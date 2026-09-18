---
title: Can an Underwater Data Center Be Found From the Outside?
subtitle: Maintenance rather than power or cooling blocks a 100,000-H100 training run underwater, and satellite radar with ship tracking detects it best at construction and repair.
date: 2026-09-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can an Underwater Data Center Be Found From the Outside?

_Maintenance rather than power or cooling blocks a 100,000-H100 training run underwater, and satellite radar with ship tracking detects it best at construction and repair._

## Executive Summary

> [!callout]
> This article looks at a study that calculated whether a state could sidestep AI regulation by building a data center in the sea, and whether anyone outside could tell that it had. The paper went up on arXiv on September 16 and was written by James Teague, Ashmita Rajmohan and Yannick Muehlhaeuser. Almost every proposal for an international agreement limiting frontier AI development depends on verification, and the hardest task inside that verification is finding compute facilities nobody declared.

> The answer splits. Running a training run equivalent to 100,000 H100s underwater does not break on electricity or on cooling. It breaks on the cabling that ties the switches together, and on the maintenance that has to continue by hand while the run is going. Over the 54 days Meta spent training Llama 3 405B, a cluster of 16,384 GPUs hit 419 unexpected interruptions, roughly one every three hours. A sealed pod offers nowhere to put that hand. The detection findings lean one way as well. An operating pod gives up little to heat or to sound, while satellite radar and vessel position tracking work rather well across the months when one is built and serviced.

> Sections 1 through 4 follow the calculations in the paper and the sources the paper cites. Section 5 carries the study across to the question of what verifies a declared value, and that reading belongs to this article.

### Key figures

Source: [Teague, Rajmohan & Muehlhaeuser, arXiv:2609.18824 (September 16, 2026)](https://arxiv.org/abs/2609.18824)

<!-- stat-card -->
**150–200 MW** — Power for a 100,000-H100 training run — The GPUs alone account for about 70 MW. Server overhead and the switch fabric carry the total toward 150 MW, and the denser hardware of the next three to five years puts 200 MW at the high end

<!-- stat-card -->
**3%** — Share of Natick's power spent on cooling — Land facilities have historically put 25 to 40 percent of their electricity into HVAC. Microsoft's Natick, sitting at 11 m, held the figure to 3 percent. Cooling is an advantage here, not a wall

<!-- stat-card -->
**419** — Unexpected interruptions in the Llama 3 run — A public record covering 54 days on 16,384 H100 GPUs. Most of these fixes mean touching the hardware by hand, which a sealed pod does not allow

<!-- stat-card -->
**0.17 m/s** — Slowest current that still hides the heat — Dumping 200 MW into the water and keeping the surface anomaly inside natural variability takes at least this much flow. Open coastal water usually moves faster than that

## The Problem That Outlives the Signature

The paper's first sentence is about machinery, not about clauses. Most proposals for international agreements that place restrictions on frontier AI development require robust verification mechanisms to monitor compliance. A world with no agreement at all is not so different, the authors add, citing prior work that deterrence regimes depend on the ability to locate a rival's compute. A promise nobody can check returns nothing for having been made.

That narrows the task to one item. Finding the facilities a state might run quietly to evade a restriction, which the paper calls undeclared or "dark compute". Compute eats electricity, throws off heat and occupies space, so in principle it leaves traces. The open question is where those traces surface and how strong they are when they do.

The sea has been named as a candidate for a while. Water is free coolant, and a site 30 m down inside a territorial sea offers a satellite nothing but surface. The gap the authors point to sits right there. Underwater data centers have been suggested as an evasion vector, yet whether they are actually feasible at frontier scale, and whether they can be detected if they are, has not been seriously assessed. This paper sets out to make that assessment.

One yardstick stays fixed throughout. Can a single training run on the scale of 100,000 H100s be finished underwater? With the number pinned, the argument drops from taste to engineering. How many watts the thing needs, how far a cable reaches, how often a human hand is required. The work was carried out as part of the Orion AI Governance Initiative run by Arcadia Impact.

> [!callout]
> The question this study puts is not whether a facility can be built in the sea. It is about what a built facility leaves behind for someone outside to count. A treaty's reach rests on the accuracy of that count rather than on the wording of its clauses.

## The Pods Already Running on the Seabed

Microsoft's Project Natick is the best known case. Phase 1 lowered a single rack of roughly two dozen servers to 11 m off the California coast from August to December 2015. Phase 2 was a different size. A module holding 864 servers sat on the seabed off Orkney at 36 m from June 2018 to July 2020, drawing 240 kW.

Two years in, the water came out ahead. Fewer than one percent of the servers failed, about one eighth the rate of equivalent facilities on land. Credit belonged to two things, and cold water was not one of them. The capsule was filled with dry nitrogen, which strips out the oxygen and humidity that drive corrosion, and none of the accidental bumps, cable pulls and maintenance errors of a staffed building ever happened. The same seal also works in reverse. A fault that a land site would repair within hours, restoring training continuity within minutes, stays dark underwater until the pod is lifted. Across deployments spanning two years or more these faults compound, and long-term performance slides behind an equivalently provisioned cluster on shore. Natick was formally discontinued in 2024 all the same. The reason widely suggested was the difficulty of servicing, upgrading and replacing sealed hardware. The project lead had dismissed that concern at an earlier point. The bottleneck of the next section is already showing here.

The commercial facilities actually running today are Chinese. Highlander, through its subsidiary HiCloud, followed initial tests in 2021 and a first commercial module in 2023 by placing a second commercial module off Hainan in February 2025, adding roughly 400 servers. The Hainan cluster now holds two pods with about 400 servers each, some 800 in total, at a depth near 35 m. Growing incrementally to 100 modules is the long-term target for that site. The Shanghai facility sits a step up in scale. Phase 1 construction finished in October 2025 and operation began in May 2026, making it the first underwater facility linked directly to an offshore wind farm, which supplies more than 95 percent of its power with the grid as backup. Phase 1 runs at 2.3 MW against a 24 MW capacity in the full build-out, and the structure holding its 192 racks weighs 1,950 tonnes. One caveat travels with all of that: the Shanghai facility is not completely submerged, which is why the paper drops it from the rest of its analysis.

The startup figures call for a different posture. Subsea Cloud's announced demonstration pod near Port Angeles, Washington, named Jules Verne, is a 20-foot container using dielectric immersion cooling, reported to hold 16 racks and around 800 servers at 9 m while drawing about 1 MW. The company claims retrieval within 4 to 16 hours for its lighter, pressure-equalised pods. The paper qualifies that claim four times over: an unverified vendor figure, reported at the company's 2022 announcement, covering transit to the site as well as the recovery itself, and never demonstrated at scale. Ahead of all of that, the authors write that they could not find independent verification of any operating facility from Subsea Cloud. NetworkOcean, a Y Combinator-backed startup, has announced a 0.5 to 1 MW test capsule and sketched barges scaling past 200 MW, with 2,048 NVIDIA H100s claimed as reserved for the planned barge. Its first step is to submerge the capsule a few metres below the surface of San Francisco Bay for an hour, and two California agencies flagged a lack of required permits, which brought it to a halt.

Designs divide between capsules sealed at one atmosphere, as at Natick, and pods equalised to the surrounding pressure, and yet every facility placed so far shares one condition. All of them sit between 9 and 36 m, inside a seasonally mixed surface layer. This is not the stable, near-freezing water below 100 m that deep seawater cooling relies on. Going deeper buys a colder and steadier heat sink while raising structural and installation demands. That trade runs head-on into the detection argument further down.
