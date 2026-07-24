---
title: They Dropped the Mandate, and Broke Ground
subtitle: After Korea
date: 2026-07-25
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# They Dropped the Mandate, and Broke Ground

_After Korea_

## Executive Summary

> [!callout]
> Korea's national AI compute center, to be built at Solasido in Haenam, Jeollanam-do, broke ground in the third quarter of 2026. This is the same project that failed twice in a row — in May and June of 2025 — when not a single company came forward to bid. What changed? In the third tender (2025-10-21), the government loosened three clauses that had been binding the private sector all at once. It cut the government stake from 51% to under 30%, deleted the buyback clause that would have forced the private partner to repurchase public equity, and **zeroed out entirely** the requirement to fill up to half the center's chip mix with domestic NPUs by 2030. This piece looks specifically at what that decision — letting go of the mandate — bought and gave up.

> The core is a design shift **from coercion (mandate) to incentive (voluntary adoption)**. Once domestic-chip cultivation moved from a command to an R&D zone and voluntary NPUaaS adoption, the Samsung SDS consortium came in as a sole bidder on a project that had stalled twice, and construction followed. What the government bought was groundbreaking and the project's viability; what it gave up was the coercive force that had been pushing hardware autonomy. That said, deleting the NPU mandate alone did not revive the project. It was the dismantling of a bundle of rules, with the equity and buyback relaxations working in concert.

> One new rule appears in its place. From now on, domestic chips enter the data center not by command but **only through market verification**. And in an ecosystem where heterogeneous NPUs multiply voluntarily, the question "is this domestic chip actually good enough" ultimately reduces to a matter of **benchmark standards and the quality of verification data**. This is the compute-sovereignty installment of our [Sovereign AI](/project/SovereignAI/en/) series — a look at the place where, while the budget pours into the vessel, the data infrastructure that judges whether the vessel is worth it still sits blank.

up to 50% → 0%

Domestic-NPU quota  
(2030 target fully deleted)

51% → under 30%

Government (public) stake  
(exactly 29% of SPC funding)

~9 months

Mandate deletion → groundbreaking  
(~14 months from the first failed tender)

~15,000

GPUs to be built at the center  
(by 2028)

## The AI Highway That Failed Twice

The national AI compute center is a large-scale AI computing infrastructure the government wants to secure at the national level. Sited at the Solasido Data Center Park in Haenam, Jeollanam-do, its goal is to build roughly 15,000 GPUs by 2028. Total project cost was reported rising from an initial ~KRW 2 trillion up to more than KRW 2.5 trillion as the scope grew ([Money Today, 2025.10.21](https://www.mt.co.kr/tech/2025/10/21/2025102114162092508)). The idea is for the state to lay the "highway" of the AI era. Yet this highway stalled twice before it could break ground. The first tender in May 2025 and the second in June both drew **not a single bidder.**

The cause was not one clause but a bundle of obligations that piled risk onto the private sector. Three things operated at once. First, the government (public) stake was set at 51%, so the private partner could not hold a majority. Second, a buyback clause meant that at a set point the private partner had to repurchase the public equity. Third, an installation quota required up to 50% of the center's chip mix to be filled with domestic NPUs by 2030 (cross-checked across BizHankook, YTN Science, and Hankyung). With the three clauses overlapping, the structure told the private sector: "build it, but carry all the risk with no control, no exit safety net, and no hardware choice."

The up-to-50% domestic-NPU quota was a double burden in particular. Requiring an operator to install, up to half the mix, domestic chips whose large-scale commercial track record is still thin meant taking on the center's performance and stability risk directly. The table below lays out how the first and second tenders' terms translated into risk.

| Clause | 1st / 2nd tender terms | Risk borne by the private sector |
| --- | --- | --- |
| Government (public) stake | 51% | No majority control: no management leadership despite large investment |
| Buyback clause | Present (private must repurchase public equity) | No exit safety net: additional capital burden locked in for the future |
| Domestic-NPU installation | Mandate: up to 50% of chip mix by 2030 | No hardware choice: performance and stability risk transferred |
| Bid outcome | 1st 0 bidders · 2nd 0 bidders | Two failed tenders in a row |

In short, the first two failures were not market indifference but a **failure of regulatory design**. Stacking the goals of domestic-chip cultivation, government control, and fiscal safety all at once onto the banner of AI-infrastructure autonomy produced terms whose math did not work for any private operator. That diagnosis shaped the direction of the next tender.

## Remove the Clauses, and the Project Broke Ground

In the third tender, which closed on 2025-10-21, the government relaxed the first two rounds' three clauses simultaneously. It lowered the government stake from 51% to under 30% (private stake above 70%), deleted the buyback clause, and removed the domestic-NPU installation mandate outright. It also changed the procedure so that "even a single consortium bidding does not count as a failed tender." Once the terms were loosened, the Samsung SDS consortium bid as a sole bidder, passed evaluation, and was confirmed as the operator ([News1, 2026.05.11](https://www.news1.kr/it-science/general-science/6163150)).

### 2.1. Loosening all three clauses at once

The table below places the first-two and third tender terms side by side. Deleting the NPU mandate is the most symbolic move, but the key is that the equity and buyback relaxations were released together. Had only one of the three been loosened, the other two would still have held the project back.

| Item | 1st / 2nd tender (failed) | 3rd tender (relaxed) |
| --- | --- | --- |
| Government (public) stake | 51% | Under 30% (29% of SPC funding) |
| Buyback clause | Present | Deleted |
| Domestic-NPU installation | Mandate: up to 50% | Mandate deleted → R&D zone + voluntary NPUaaS |
| Bidding | 0 bidders (two failed tenders) | Samsung SDS sole bidder → passed and confirmed |

********

The "under 30%" public stake later resolves into a more precise number. On 2026-04-30, the fund-management review committee of the National Growth Fund approved the SPC's (special-purpose company's) initial capitalization at KRW 400 billion in total, of which the public side bears KRW 116 billion and the private side KRW 284 billion. Divide 116 by 400 and you get **exactly 29%**. The government has stepped back from the majority-owner seat to a minority-stake investor.

### 2.2. From "mandate" to "R&D zone + NPUaaS"

Two voluntary incentives filled the space the domestic-chip mandate left. One is the **R&D zone** — a dedicated space inside the center for piloting and verifying domestic NPUs, offering "a place to prove them" instead of forced volume. The other is **NPUaaS (NPU as a Service)**, subscribing to domestic NPUs like a cloud service, as much as you need. Rather than forcing operators to fill half the mix, the policy rewrote its grammar so that operators who judge a chip good enough pull in as much as they want, voluntarily.

### 2.3. The timeline from failed tenders to groundbreaking

After the terms changed, the project moved quickly. The timeline below traces the flow from the two failed tenders to the Q3 groundbreaking. Measured from May 2025, when the failures began, it was a roughly 14-month "stall period" to groundbreaking; measured from the third tender's close (2025-10-21), when the mandate deletion was confirmed, it was execution in **about nine months**. The latter shows the "speed after the shift."

2025.05 · 06

1st and 2nd tenders: 0 bidders, two failures in a row

2025.10.21

3rd tender closes: equity, buyback, and NPU mandate all relaxed at once

2026.03

Samsung SDS consortium selected as preferred negotiation partner

2026.04.30

SPC initial capitalization approved (KRW 400bn total · public 29%)

2026.05.11

Implementation agreement signed: project structure confirmed

2026 Q3 (July)

Groundbreaking at Solasido, Haenam: opening targeted for 2028

The groundbreaking (Q3 2026) coincides precisely with this piece's publication. At the very moment a twice-failed project actually starts breaking ground, we are retracing the math of that shift ([ZDNet Korea, 2026.05.11](https://zdnet.co.kr/view/?no=20260511174341)).

## The Price of Autonomy, the Math of Incentives

The decision to turn a mandate into a voluntary incentive carries a clear ledger. What the government bought was groundbreaking and the project's viability. A twice-stalled project started rolling, and the national AI-infrastructure roadmap stopped slipping. What it gave up was the coercive force pushing hardware autonomy. Now the center's compute is anchored by GPUs, and domestic NPUs become an option — either piloted in the R&D zone or adopted voluntarily via NPUaaS. In the familiar metaphor, **the state builds the highway, but the engine that runs on it (the domestic NPU) becomes a choice, not an obligation.**

### 3.1. The conditions under which incentives can grow an ecosystem

The disappearance of coercion did not make demand for domestic chips disappear. If anything, the industry is setting voluntary targets of its own. In July 2026, FuriosaAI's CEO put the domestic-chip share inside an AI data center (AIDC) at **30–40%**. What matters is that this is not a mandated ratio but a target the industry set for itself ([ZDNet Korea, 2026.07.07](https://zdnet.co.kr/view/?no=20260707180227)). Where a coerced 50% used to sit, the market is now voluntarily aiming at 30–40%.

*▲ Comparing the repealed mandate (up to 50%) against the voluntary target (30-40%) the industry set for itself in 2026. | Original Pebblous diagram, source: ZDNet Korea (2026.07.07)*

The infrastructure that actually drives this voluntary adoption is NPUaaS. Samsung SDS launched a FuriosaAI-based NPUaaS on 2026-07-20, five days before this piece's publication, while KT Cloud and Gabia had already commercialized Rebellions-based offerings ahead of Samsung SDS. A service that lets you subscribe to domestic NPUs in units of 1, 2, 4, or 8 cards has genuinely opened. In that an adoption path now exists without any mandate, the voluntary-incentive model has at least broken the first ground.

### 3.2. International comparison — the only case of inserting a mandate and pulling it back

Place Korea's choice on the international map and its position is peculiar. The table below organizes major countries' sovereign-AI compute policies along the axis of "domestic-chip mandate or not." Most started without a mandate, on subsidies and incentives from the outset; only Korea walked the path of **inserting a mandate and then pulling it back**.

| Country/Region | Policy character | Investment scale | Domestic-chip mandate |
| --- | --- | --- | --- |
| Korea | National AI Compute Center + K-Cloud | Center ~KRW 2–2.5 trillion | Mandate → deleted in 3rd tender (shift to voluntary) |
| Japan | GENIAC (METI · NEDO) | ~JPY 453 billion in GPU-purchase support | None. Pure subsidy incentive, uses foreign GPUs |
| EU | InvestAI · AI gigafactories | InvestAI €200bn (gigafactories €20bn) | None. Foreign-GPU based; "sovereignty" centers on data jurisdiction and regulation |
| Saudi Arabia (HUMAIN) | National AI champion under PIF | ~USD 77bn (600k GPUs · 14GW) | None. Entirely foreign NVIDIA/AMD GPUs |
| USA (CHIPS Act) | Onshoring subsidy + guardrails | USD 52.7bn direct semiconductor support | Hybrid: subsidy incentive + ban on expansion in China |

********

Japan, the EU, and Saudi Arabia never built a domestic-chip mandate into their designs and use foreign GPUs; only the U.S. is a hybrid that adds the "stick" of guardrails on top of subsidies. Korea, unlike either camp, inserted a mandate and then pulled it back when the market did not respond. That shift can be read not as failure but as **learning**. It confirmed that coercion cannot stand up an ecosystem that is not yet mature, and turned toward incentives. But the incentive model's success hinges on one condition. For domestic chips to actually get adopted, they must first be proven "good enough."

## The Verification Problem the Mandate Left Behind

In the era when the mandate guaranteed adoption, the question "is it good enough" was pushed to the back. Half of the mix had to be filled anyway. Now that coercion is gone, that question comes straight to the front. In a voluntary market, domestic chips get adopted **only when they pass verification**. The companies and institutions deciding on adoption want, not a vendor's marketing deck, but reproducible evidence for "how does this chip stack up against NVIDIA on our workload." And building exactly that evidence is far harder than it sounds.

Domestic NPUs are not without technical achievements, of course. FuriosaAI's "Warboy" once recorded roughly 4x NVIDIA T4 on image-recognition performance. Rebellions also reported results at MLPerf in 2023 that were 3x ahead on vision models and 1.5x on language models. But such results are tied to specific models and specific rounds. What an institution weighing adoption actually wants to know is "on our workload, how does the current generation of chips compare to the latest NVIDIA GPU" — and standardized, up-to-date comparison evidence for that question is still thin. Whether the capability exists has, to some degree, been answered; now the question moves to what comes next.

The industry names this exact point. Its diagnosis is that the competitive bar for domestic NPUs is moving from "does it have the capability" to "can it actually be used."

Asia Economy · 2026.06.29Domestic NPUs have **earned recognition for their technology, but lack market validation**. The basis of competition is moving from "performance specs" to "actual adoption cases and verified reliability."

Look at what verification actually demands and the layers of the problem surface. To compare the same model's performance, accuracy, and latency fairly across different hardware, you need two things. One is a **standard benchmark** — measurement rules everyone agrees on. The other is **high-quality verification data** — a representative dataset to apply those rules to. Even quantization, commonly used to load models onto domestic NPUs, ultimately reveals how much accuracy is lost depending on which verification data you measure against. The question "is it good enough" thus reduces to a data-quality problem: "what do you measure, and with what data."

### 4.1. The gap in benchmark coverage

The problem is that this standard infrastructure does not adequately cover emerging accelerators. A leading industry standard, MLPerf Inference v6.0 (2026-04), drew 24 participating organizations, but public submissions are mostly concentrated on NVIDIA and AMD GPUs. Coverage of heterogeneous and emerging accelerators is thin, and whether domestic-NPU firms took part in the latest round cannot be confirmed from public materials. Recent academic work (arXiv:2606.17104) also notes that data-center public submissions are concentrated among a few GPU vendors, making it hard to compare new accelerators under standard conditions. The diagram below shows that skew in simplified form.

*▲ Public benchmark submissions concentrate among a few GPU vendors, leaving thin evidence to compare heterogeneous and domestic NPUs under standard conditions. | Reinterpreted diagram, based on arXiv:2606.17104 · MLCommons (2026-04)*

### 4.2. Capital piled in, verification lags

Here is the paradox. Money and chips are already surging. Rebellions raised KRW 640 billion in a pre-IPO round (including KRW 250 billion from the National Growth Fund) at a KRW 3.4 trillion valuation, and total capital raises across the domestic-NPU industry exceed KRW 600 billion. IDC forecasts the AI inference-chip market to grow at a 45% CAGR from 2025 to 2028. Yet the benchmark and verification-data infrastructure to judge, under standard conditions, whether "this chip is good enough" cannot keep that pace. Capital pours into the vessel (the chip), while the yardstick (the data) that measures whether the vessel is worth it lags behind. For the voluntary-incentive policy to succeed, this is precisely the gap that must be filled. In a market where coercion is gone, what decides adoption is trustworthy verification, and verification depends on data quality.

## Distillation, Fund, NPU — What the Third Case Confirms

Read this policy shift as a single event and you miss something. Place three recent currents around Sovereign AI side by side, and the same structure emerges not as repetition but as **accumulation**. While government and market pour budgets into the "vessels" of compute, models, and capital, the "data" that flows over — or verifies — those vessels has stayed a lower priority each time.

The table below organizes the three cases along the axes of "the vessel the government invested in / the bottleneck that remains / what needs to be verified." Each case's data angle differs slightly, running from source data to training corpus and now to verification data.

| Case | Vessel invested by government/market | Remaining bottleneck (data) |
| --- | --- | --- |
| Distillation dispute | Model capability (performance transferred via distillation) | Sovereignty and provenance of the source data |
| National Growth Fund (Upstage) | Model capital (KRW 560bn direct investment) | Volume and quality of the Korean-language corpus |
| NPU mandate deletion (this piece) | Compute infrastructure (center · GPUs) | Verification data · benchmark standards |

****************

The three are different policy and industry events, yet the last column always converges on data. In distillation it was the provenance of source data; in the fund it was the volume and quality of the training corpus; and this time it is verification data and benchmark standards left unresolved. What the third case confirms is not a new claim but the fact that a pattern already witnessed twice was no coincidence. Investment that enlarges the size of the vessel is visible and politically attractive, but the quality of the data the vessel holds and measures remains a blank line in the budget.

> [!callout]
> Letting go of the domestic-NPU mandate was, in itself, reasonable policy learning. It confirmed that coercion cannot stand up a still-young ecosystem, and turned toward incentives. But for that incentive to translate into actual adoption, **verification** now has to do the job coercion used to do. And the trustworthiness of verification ultimately comes from the quality of the data. Construction has begun, but the data infrastructure to judge whether the domestic engine that will run on top is worth it has not yet broken ground.

## Why Pebblous Cares

Pebblous follows this policy shift for the perspective, not the promotion. Deleting the domestic-NPU mandate meets our concern with data quality on four fronts.

*▲ Distillation, the National Growth Fund, and the NPU mandate repeal — three distinct policy and industry events that all meet at the same data-quality bottleneck. | Original Pebblous diagram*

### +.1. Business and technical connection

As NPUaaS multiplies heterogeneous NPUs voluntarily, demand grows to standardize the benchmarks and verification data that judge the same model's performance and accuracy across different hardware. The question "is the domestic chip good enough" ultimately reduces to "what do you measure, and with what data." That touches directly on data-quality diagnosis (DataClinic) and on defining AI-Ready Data. Verifying the accuracy loss when loading a model onto a domestic NPU via quantization is, in the end, a matter of verification-dataset quality.

### +.2. The data-quality lens

Hardware autonomy (chips) and data autonomy are separate axes. The decision to turn a hardware mandate into voluntary adoption is one facet of sovereign-AI budgets concentrating on physical compute. Pebblous's view is this: not only the training data that flows over the vessel, but the quality of the verification data that judges whether the vessel is worth it, is what governs performance and sovereignty. It is a new angle — verification data — that does not overlap with the training and source data covered earlier.

### +.3. Practical implications for customers and partners

For domestic-NPU vendors and the firms and institutions looking to adopt them, what governs adoption in a market without coercion is trustworthy verification. Benchmark and verification-data infrastructure that can compare a model's accuracy, latency, and throughput reproducibly across heterogeneous hardware becomes the real bottleneck for domestic-chip adoption. Adoption decision-makers should demand standardized, independent verification rather than vendor self-benchmarks, and vendors should prepare, in data, the evidence to pass that verification.

### +.4. Pebblous's positioning

This piece is a new spoke added to the "compute sovereignty" axis of the Sovereign AI hub. As the third data point in a cumulative argument connecting distillation, fund, and NPU, it positions Pebblous as a lens that reads Sovereign AI through data and verification. The point is not to sell a particular solution, but to keep pointing at the place data occupies — the one easy to miss when budgets rush to the vessel.

## References

### Primary sources (3rd tender · groundbreaking coverage)

- 1.Money Today, "National AI Compute Center 3rd tender — NPU mandate and buyback clause deleted," 2025-10-21. [mt.co.kr](https://www.mt.co.kr/tech/2025/10/21/2025102114162092508)
- 2.ZDNet Korea, "Samsung SDS consortium confirmed — Solasido groundbreaking roadmap," 2026-05-11. [zdnet.co.kr](https://zdnet.co.kr/view/?no=20260511174341)
- 3.News1, "National AI Compute Center implementation agreement and construction schedule," 2026-05-11. [news1.kr](https://www.news1.kr/it-science/general-science/6163150)

### Policy · statistics · industry

- 4.ZDNet Korea, "FuriosaAI domestic-chip adoption target 30–40% · AIDC 18GW," 2026-07-07. [zdnet.co.kr](https://zdnet.co.kr/view/?no=20260707180227)
- 5.Asia Economy, "Technology recognized but market validation lacking — the shifting basis of domestic-NPU competition," 2026-06-29. [asiae.co.kr](https://www.asiae.co.kr/article/2026062915173519601)
- 6.BizHankook, "National AI Compute Center domestic-NPU up-to-50% mandate." [bizhankook.com](https://www.bizhankook.com/bk/article/30133)
- 7.Hankyung, "Coverage on the domestic AI-semiconductor adoption mandate clause," 2025-08. [hankyung.com](https://www.hankyung.com/article/2025081141521)
- 8.MLCommons, "MLPerf Inference v6.0 Results (Datacenter)," 2026-04. [mlcommons.org](https://mlcommons.org/benchmarks/inference-datacenter/)

### Academic (arXiv)

- 9."Prefill/Decode-Aware Evaluation of LLM Inference on Emerging AI Accelerators," arXiv:2606.17104, 2026. [arxiv.org](https://arxiv.org/abs/2606.17104)

### Pebblous-adjacent (Sovereign AI series)

- 10.Pebblous, "You Can't Buy Sovereignty by Distillation". [report/ai-distillation-sovereign-data](/report/ai-distillation-sovereign-data/en/)
- 11.Pebblous, "You Can Borrow a Model, But Not the Data". [report/upstage-national-fund-2026-05](/report/upstage-national-fund-2026-05/en/)
- 12.Pebblous Sovereign AI hub. [project/SovereignAI](/project/SovereignAI/en/)

<!-- stat-card -->
**📚 Sovereign AI Series** — This piece is part of the series curated by the [Sovereign AI](/project/SovereignAI/en/) hub — a place to read how compute, models, and data intertwine in nation-scale AI autonomy. This installment adds a new spoke to that hub's "compute sovereignty" axis.
