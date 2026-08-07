---
title: The AI Safety Dossier Is Really a Data Lineage Record
subtitle: Reading Korea
date: 2026-07-23
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Safety Dossier Is Really a Data Lineage Record

_Reading Korea_

## Executive Summary

> [!callout]
> On July 21, 2026, Korea's AI Basic Act came into full force alongside its enforcement decree and a draft notice spelling out operator duties. That same June, the EU moved in the opposite direction, pushing the obligations for high-risk AI (Annex III) from August 2026 to December 2027. Judged by when the rules actually bind, Korea is the first jurisdiction to switch on mandatory duties for the AI that judges people — in credit, healthcare, and hiring. This report dissects what those rules ask of data teams in practice, through the ten high-impact domains and a side-by-side comparison of Korea, the EU, and the United States.

> What matters most is the nature of what the law demands. An operator must record its safety and reliability measures in a "safety-and-trust dossier," retain it for five years, and — this is the crux — that dossier must explicitly secure the explainability of both the AI and its training data. This is not a one-page signed policy statement. It is a running record of what data a given decision was trained on and how that data's provenance and quality can be evidenced. Study after study has confirmed that bias in high-impact domains originates not in model architecture but in the composition of training data, and the regulation takes aim at exactly that point.

> So the substance of compliance is not a document but three layers of data — lineage, quality, and auditability — and ISO/IEC 5259 supplies the language to measure them. International benchmarks reveal a wide gap between claiming "we have governance" and having "fully implemented" it. The real use of the grace period (at least one year) is not to backfill paperwork later, but to embed lineage, quality, and auditability into the pipeline so that, a year from now, those logs themselves become the safety-and-trust dossier.

<!-- stat-card -->
**Jul 21, 2026** — Korea's AI Basic Act in full force — First jurisdiction to actually switch on high-impact AI rules

<!-- stat-card -->
**16 months** — EU high-risk AI duties delayed — Aug 2026 → Dec 2027 — the timing has flipped

<!-- stat-card -->
**5 years** — Safety dossier retention duty — Includes securing training-data explainability

<!-- stat-card -->
**87% vs 25%** — Governance "in place" vs "fully implemented" — The gap between claim and execution (IBM, 2026)

## Two Continents Diverge on Timing

When comparing regulations, people usually look at the nominal effective date. But for rules that place real duties on operators — as high-impact AI does — "when the obligations actually bind" matters far more than "when the law passed." Lining up Korea, the EU, and the U.S. by that real activation date, as of 2026 only two jurisdictions are actually enforcing high-impact AI rules: Korea and New York City.

The timeline below overlays each jurisdiction's nominal schedule and its real activation point on a single axis. While Korea flips the switch in July 2026, the EU has pushed its most contested high-risk duties to the right, and Colorado repealed its original bill outright before it ever took effect.

![South Korea's National Assembly building — where the amended AI Basic Act and its enforcement decree were passed](./image/img-01-korea-national-assembly.jpg)
*▲ The National Assembly building. The amended act and enforcement decree that activated real obligations for high-impact AI operators on July 21, 2026 were passed here. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:National_Assembly_Building_of_the_Republic_of_Korea.png)*

*▲ Chart 1. Timeline of high-impact / high-risk AI rules taking effect in Korea, the EU, and the U.S. (2023–2028). Orange = real activation point, gray = preliminary stage, red = repeal. All regulatory facts are as of 2026-07-21. | Source: cross-checked across three law firms; see Table 1.*

Korea's Framework Act on the Development of Artificial Intelligence and the Establishment of a Foundation of Trust took effect in its base form on January 22, 2026, but the high-impact rules only became live obligations when the amended act and enforcement decree that fleshed out operator duties cleared the Cabinet on July 14 and came into force on July 21. The EU, by contrast, delayed the use-case-based high-risk obligations (Annex III) by 16 months, from August 2, 2026, to December 2, 2027, through the "Digital Omnibus" amendment approved by the European Parliament on June 16. Split each jurisdiction's schedule into the nominal date and the date the rules actually bind, and the gap between the two is stark.

| Jurisdiction · Event | Nominal / original date | Real / revised date | Notes |
| --- | --- | --- | --- |
| Korea · AI Basic Act base law in force | — | 2026-01-22 | Definitions and promotion framework take effect |
| Korea · Amended act, decree, duty notice ("full force") | — | 2026-07-21 (Cabinet 07-14) | High-impact / generative operator duties go live |
| Korea · Grace period for fines | — | At least 1 year (from 2026-07-21) | Corrective guidance first; fines deferred |
| Korea · Labeling of deepfakes / generated content | — | Immediate (no grace period) | Exception to the grace period |
| EU · Prohibited practices (Art. 5) | — | 2025-02-02 | Already enforced; EC's first probe in early 2026 |
| EU · Governance, GPAI, penalties (Art. 99) | — | 2025-08-02 | Fine framework in force |
| EU · High-risk (Annex III) duties | 2026-08-02 | 2027-12-02 (16-month delay) | "Digital Omnibus" approved 2026-06-16; not applied retroactively |
| U.S. Colorado · SB24-205 | 2026-02-01 → 2026-06-30 | repealed (2026-05-14) | Replaced by SB26-189; new law effective 2027-01-01 |
| U.S. NYC · Local Law 144 (hiring-AI audit) | 2023-01-01 | Enforced 2023-07-05 | In its third year; 2025-12 comptroller effectiveness audit |

The weight of the delay lies in more than its timing. Because the EU amendment does not apply retroactively, concern has been raised that high-risk systems placed on the market before December 2027 may permanently escape the new obligations. It isn't just that the rules switch on a year late — it's that a large share of systems deployed in the interim stay outside the regulatory net.

The U.S. tells yet another story. Colorado's original bill (SB24-205) was repealed in May 2026, just ahead of taking effect, and a redefined successor (SB26-189) was pushed to January 1, 2027. The only place actively enforcing use-stage regulation into its third year is New York City, with its bias audit for hiring AI (Local Law 144). "World's first" is always a claim to treat with care, but at least in switching on binding rules for AI that judges people's credit, health, and jobs, Korea's lead is no exaggeration.

## Reading the Ten High-Impact Domains as Data

Article 2(4) of the Act enumerates ten domains and classifies as high-impact any AI that, within them, may materially affect people's life, physical safety, or fundamental rights. The listed domains are energy, drinking water, healthcare and medical devices, nuclear power, biometrics, hiring, assessment of individual rights such as loan screening, transportation, public services, and student evaluation. Reread that list through a data team's eyes and one axis stands out: four of these domains ultimately come down to "judging people from data," and that is precisely where bias turns into an infringement of fundamental rights.

*▲ Chart 2. The two natures of the ten high-impact domains. In credit, hiring, healthcare, and biometrics (★), the composition of the data becomes the channel of discrimination.*

Break the ten domains down by representative use case, core data risk, the evidence a safety dossier requires, and where Korea and the EU diverge, and one thing stands out: Korea's designated scope is narrower than the EU's. In finance, Korea covers only "loan screening" while the EU covers creditworthiness assessment broadly; in employment, Korea covers only "hiring" while the EU extends to worker management such as performance and termination.

| Domain | Representative use case | Core data risk | Required evidence | Korea vs EU |
| --- | --- | --- | --- | --- |
| ★ Loan screening & rights assessment | Credit scoring, underwriting | Underrepresented groups; proxy-variable discrimination | Training-data provenance, representativeness, fairness-check logs | Korea = loan screening only / EU = creditworthiness broadly |
| ★ Hiring | Résumé screening, interview scoring | Training on historically biased résumés → reproduced discrimination | Data lineage, bias audit, labeling rationale | Korea = hiring only / EU = through worker management |
| ★ Healthcare & medical devices | Diagnostic support, triage | Proxy-label bias (spending → health need) | Dataset composition, label definitions, reproducible validation | Recognized as duplicative if Digital Medical Products Act is met |
| ★ Biometrics | Face / fingerprint authentication | Error-rate gaps across demographic groups | Training-set representativeness, per-group performance docs | — |
| Energy | Demand forecasting, grid operation | Skew in sensor / historical data | Data provenance, quality standards | — |
| Drinking water | Water-quality prediction, drainage management | Missing measurements, representativeness | Data lineage, quality | — |
| Nuclear power | Safety monitoring, anomaly detection | Rare anomaly data, label reliability | Data validation, reproducible audit | — |
| Transportation | Signaling, driving assistance | Regional / condition skew | Collection conditions, provenance docs | — |
| Public services | Welfare decisions, resource allocation | Bias / missingness in administrative data | Data provenance, fairness | — |
| Student evaluation | Grade / competency assessment | Sampling bias, label subjectivity | Assessment-data lineage, rationale | — |

Footnote: the definition of "AI operator" is very broad, covering not only developers but also businesses that adopt AI to deliver a service (e.g., a bank using a loan-screening model). A single operator can overlap developer, user, and high-impact roles. High-impact status is determined first by the operator's own assessment and, where uncertain, through consultation with the Ministry of Science and ICT's "AI Basic Act Help Desk." Systems where a human can ultimately intervene and retain control may be excluded.

### 2.1. Bias Comes from the Data, Not the Model

The reason the regulation aims its questions at data is a fact that academic research has confirmed again and again. The most widely cited case is in medical AI. A commercial U.S. algorithm learned to predict patients' health needs using "healthcare spending" as a proxy. But because Black patients have historically spent less on care at the same level of illness, the algorithm systematically under-classified them. When the proxy was redesigned to reflect health itself, the share of Black patients flagged for additional care jumped from 17.7% to 46.5% (Obermeyer et al., Science, 2019). The source of the bias was the label definition in the training data, not the model architecture.

Biometrics shows the same grain. A study that measured the error rates of commercial facial-analysis systems broken out by gender and skin tone found that accuracy — near-perfect for lighter-skinned men — collapsed for darker-skinned women (Buolamwini & Gebru, Gender Shades, 2018). A data problem — the underrepresentation of certain demographic groups in the training set — surfaced directly as a performance gap. In credit scoring, too, a "fairness paradox" is reported: even after removing sensitive attributes, discrimination reappears through proxies such as ZIP code and purchase history.

![Facial recognition authentication kiosk at an airport gate — biometric AI identifying people in everyday use](./image/img-02-facial-recognition.jpg)
*▲ A facial-recognition kiosk at an airport boarding gate. Biometrics is one of the ten high-impact domains under Korea's AI Basic Act, where demographic error-rate gaps are the core risk. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Facial_recognition_technology_at_gate_(44275734970).jpg)*

> [!callout]
> So the moment a system is judged to be high-impact AI, the regulation's focus shifts from the model's performance to the data the decision stands on. Biased résumés, underrepresented credit data, and poorly defined medical labels are, in themselves, channels for rights violations. That is exactly why the safety dossier demands "explainability of the training data."

## The Shape of the Duties — Impact Assessment and the Safety Dossier

The duties imposed on high-impact AI operators fall into two broad tracks: impact assessment, and securing safety and reliability. The two are different in nature, and missing that difference throws off the priorities of preparation. Impact assessment is closer to a best-efforts duty than a hard mandate. In exchange, it is designed so that public bodies must give preference to products and services that have completed an impact assessment when procuring — which effectively makes it a qualification for entering the public market.

The real center of gravity is on the safety-and-reliability side. Under Article 8 of the draft duty notice, an operator must document the measures it has taken in a "safety-and-trust dossier," retain it for five years, and review and update it periodically — and that dossier explicitly includes securing the explainability of the AI and its training data. By legal nature, trigger, output, retention, and penalty alike, the real weight sits with the safety-and-trust dossier.

| Aspect | Impact assessment | Safety & reliability (safety dossier) |
| --- | --- | --- |
| Legal nature | Best-efforts duty | Operator obligation (draft notice Art. 8) |
| Mandatory / best-efforts | Best-efforts (but effectively a market qualification via procurement preference) | Effectively mandatory |
| Trigger | Providing / using high-impact AI | Providing / using high-impact AI |
| Core output | Impact-assessment results | Safety dossier (incl. AI + training-data explainability) |
| Retention | (Used in procurement) | 5-year retention · periodic review · updates |
| Penalty for breach | Procurement disadvantage rather than a direct fine | Corrective order → fine up to KRW 30M if unremedied |
| Overlap recognition | Recognized where equivalent measures are met under the Digital Medical Products Act, Credit Information Act, Financial Consumer Protection Act, etc. (provided risk management, explainability, and data governance are already in place) |  |

### 3.1. The Dossier Asks for Evidence, Not a Signature

What the law asks for here is not a single signed policy statement. It is evidence — of what data a given decision was trained on, and of whether that data's provenance and quality can still be explained five years later. It also means that record must remain unbroken even as models are retrained and datasets are swapped out. Despite the name "document," its substance is the history of the data itself.

### 3.2. The Premise of Overlap Recognition, and the Contrast with the EU's FRIA

If equivalent measures are already in place under another law, the AI Basic Act duty is treated as fulfilled. At first glance this looks like a clause that lightens the load, but the premise of that recognition is the crux. It asks whether risk management, explainability, and data governance were already in place. In the end, whichever law you route through, the destination — data governance — is the same.

Footnote (EU comparison): the EU's Fundamental Rights Impact Assessment (FRIA, Art. 27) targets deployers and is a rights-centered assessment asking "are people treated fairly, and is there a path to contest?" — distinct from the data-centered Data Protection Impact Assessment (DPIA). Failure to conduct it falls under Art. 99 Tier 2 (€15M or 3% of turnover). Korea's impact assessment sits, in character, somewhere between FRIA and DPIA. This comparison is for reference only and does not map cleanly onto the Korean context.

## Translating Explainability into Data Practice

"Securing explainability," as the safety dossier requires, sounds like an abstract slogan — but rendered in a data team's language, it narrows to three concrete questions. Can you trace where the training data came from (lineage)? Can you verify that its quality meets a standard (quality)? Can you reproduce and audit that verification five years from now (auditability)? These three layers are the real substance of the question the regulation is asking.

Crucially, these three layers are already internationally standardized. The ISO/IEC 5259 series (five parts, 2024–2025) provides the language for measuring, managing, and governing data quality and its processes, and the data-documentation practices from academia and industry (Datasheets, Model Cards, Data Cards) form its backbone. How the three layers interlock, and which standard each one answers to, is set out in the concept diagram below.

![Close-up of data center server racks — the infrastructure where training data lineage, quality, and auditability actually accumulate](./image/img-03-data-center-servers.jpg)
*▲ Data center server racks. The "explainability" the safety dossier requires is ultimately evidenced by the logs and history that accumulate on infrastructure like this. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_servers_-_CyrusOne_(Carrollton,_Texas)_(31).jpg)*

*▲ Chart 3. The three data-governance layers mapped to ISO/IEC 5259. The flow that starts at lineage, passes through quality, and lands on auditability is the very skeleton of the safety dossier.*

The table below sets out which of the regulation's questions each of the three layers answers, and which ISO/IEC 5259 part and documentation practice it maps to. Data lineage answers "where did this data come from and what processing did it go through," with Datasheets for Datasets and Data Cards providing the format. Quality asks "can its quality be verified against a standard," and auditability asks "can it be reproduced and audited five years later," backed by Model Cards and algorithmic-impact-assessment methods.

| Data-governance layer | Question the regulation asks | ISO/IEC 5259 mapping | Academic / industry documentation practice |
| --- | --- | --- | --- |
| Lineage | Where did this data come from, and what processing did it go through? | 5259-1 (terms, examples) | Datasheets for Datasets, Data Cards, data-provenance tracking |
| Quality | Can its quality be verified against a standard? | 5259-2 (quality measurement) · 5259-3 (quality-management requirements) | Label-accuracy / representativeness metrics, bias diagnostics |
| Auditability | Can it be reproduced and audited five years later? | 5259-4 (process framework) | Model Cards, algorithmic impact assessment (AIA) methods |
| Governance oversight | Is it managed in an integrated way at the organizational level? | 5259-5 (quality governance, 2025) | Operating a data-quality-management system (DQMS) |

> [!callout]
> So the safety dossier is a "document" in name, but a data-lineage record in substance. This is where the gap opens between firms that scramble to assemble paperwork after the rules arrive and firms that built lineage, quality, and audit functions into the pipeline from the start. The former must reconstruct five years of evidence after the fact; the latter simply tidy up logs they have already accumulated and submit them. ISO/IEC 5259 already provides that "measurable language."

## What Happens If You Don't Comply — Penalties and Enforcement

Line up the penalty provisions and Korea's fine ceiling looks conspicuously low. Korea caps out at KRW 30M (≈ $23K, per case), while the EU reaches as high as €35M or 7% of global turnover. But gauge the regulatory burden from these numbers alone and you miss the real risk — because the structure of the penalty and the actual exposure differ qualitatively across jurisdictions.

| Jurisdiction · basis | Target | Ceiling | Enforcer | Retroactive |
| --- | --- | --- | --- | --- |
| Korea · AI Basic Act | Labeling duty; failure to obey corrective order; no domestic agent | Fine up to KRW 30M (per case) | Minister of Science and ICT | Labeling immediate; rest grace period (1yr+) |
| Korea (criminal) · leak by a member | Disclosure of confidential info | Up to 3 years' imprisonment or KRW 30M fine | Judiciary | — |
| EU · Art. 99 Tier 1 | Prohibited practices (Art. 5) | €35M or 7% of turnover | Member-state authorities + EC | Art. 5 in force |
| EU · Art. 99 Tier 2 | High-risk breaches (data governance, technical docs, transparency), GPAI | €15M or 3% of turnover | Same | From 2027-12-02 |
| EU · Art. 99 Tier 3 | Supplying inaccurate information | €7.5M or 1% of turnover | Same | — |
| U.S. NYC · LL144 | Failure to run / disclose a bias audit | $500–$1,500 per violation, no cap | DCWP | Continuing-violation type |
| U.S. Colorado · SB26-189 (new law) | (to be redefined) | TBD (separate implementing rules) | State attorney general | From 2027-01-01 |

Korea's KRW 30M looks small next to the EU, but the real risk lies outside the money. First, repeated failure to obey a corrective order can escalate to measures such as suspension of business. Second — and more important — the high-impact designation and a breach of duty themselves lead to exclusion from public procurement and damage to market trust. In a system that gives preference to operators who have completed an impact assessment, a firm without data governance is pushed out of the market before a fine ever lands.

New York City's structure is different again. At $500–$1,500 per violation the amounts are small, but there is no cap and it is a continuing-violation regime, so neglecting the audit lets the cumulative fine grow without limit. That is why it doesn't map onto Korea's per-case-capped model in a simple side-by-side. In the end, what separates the three jurisdictions' penalties is not the amount but "what you're punished for failing to evidence" — and that target converges, in all of them, on data governance. The clearest signal is the EU explicitly writing "data-governance breach" into Tier 2.

![New York City Hall building — the jurisdiction that has enforced Local Law 144's hiring-AI bias audits for three years](./image/img-04-nyc-city-hall.jpg)
*▲ New York City Hall. Under Local Law 144, hiring-AI bias audits have been enforced since 2023, using an uncapped, continuing-violation penalty structure. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:New_York_City_Hall_-_September_2025.jpg)*

## What to Do First During the Grace Period — A Quarterly Roadmap

Full force does not mean a fine arrives today. Operator duties broadly come with a grace period of at least a year. That said, the labeling duty for deepfakes and other generated content applies immediately, with no reprieve — so if you run a generative service, that part cannot wait. The real use of the grace period is not to buy time to backfill paperwork later, but to use the reprieve to embed data governance into the pipeline.

Why start now is something international benchmarks quantify. What multiple surveys show in common is a wide gap between the claim "we have governance" and the execution "we've fully implemented it." The same gap turns up across three different indicators.

*▲ Chart 4. The gap between claim and execution. The absolute figures vary with each survey's definitions, but the direction is consistent across multiple sources. | Source: IBM (2026), Aon/Economist Impact, TDWI.*

This gap dictates how the grace period should be used. Start recording the provenance of the data entering training now, and a year from now that record simply becomes the safety dossier. Put it off, and a year from now you'll be tracing back the provenance of data that has already flowed through. So, with a year on the clock, what do you tackle first? The quarter-by-quarter order of attack is laid out below.

| Quarter | What to start | Purpose |
| --- | --- | --- |
| Q1 | Self-assess high-impact status (10 domains × material impact), consult the Help Desk, inventory the relevant AI and datasets | Fix the scope |
| Q2 | Start lineage recording from the data entering training now (provenance, processing history); confirm immediate deepfake labeling | Secure lineage for new data (avoid after-the-fact reconstruction) |
| Q3 | Define and measure ISO/IEC 5259 quality metrics (label accuracy, representativeness), run bias diagnostics, write Datasheets and Model Cards | Quality & documentation |
| Q4 | Secure auditability (version control, log retention), consolidate a safety-dossier draft, organize the basis for overlap recognition | Build the 5-year retention system; ready to submit |

> [!callout]
> What the AI Basic Act changed is the position of data governance. Where it used to be a nice-to-have management cost, it is now a precondition for bringing high-impact AI to market. If the substance of compliance is not a document but the lineage, quality, and auditability of data, then the starting point of preparation should be the data pipeline, not a document template. The only way to cross the gap between 87% who claim and 25% who execute is to spend the grace period building the pipeline, not writing the paperwork.

EDITOR'S NOTE

The lineage, quality, and auditability this report addresses overlap precisely with what Pebblous has worked on in AI-Ready Data and DataClinic. The "explainability of training data" the safety dossier requires is, in effect, data diagnostics, quality management, and lineage tracking rewritten in the language of regulation. That said, the conclusion of this piece is the regulatory logic itself, not any particular tool. Whatever pipeline you use, only the firms that began recording lineage during the grace period will hold the evidence a year from now.

Pebblous Data Communication Team  
July 23, 2026

## References

### Official documents & legislation

- 1.Korea Law Information Center. (2026). "[Framework Act on the Development of Artificial Intelligence and the Establishment of a Foundation of Trust](https://www.law.go.kr/lsInfoP.do?lsiSeq=268543)." Ministry of Government Legislation.

### Industry & press commentary

- 2.AI Citizen Lab. (2026). "[The AI Basic Act takes effect July 21, 2026 — how will it change my life and business?](https://aicitizenlab.com/entry/korea-ai-regulations-grace-period-2026)."
- 3.Shin & Kim LLC. (2026). "[Newsletter on the enforcement of the AI Basic Act](https://www.shinkim.com/kor/media/newsletter/3114)." Shin & Kim Newsletter 3114.
- 4.Lawtimes. (2026). "[Issues and challenges of enforcing the AI Basic Act](https://www.lawtimes.co.kr/news/articleView.html?idxno=215368)."
- 5.Lexology. (2026). "[Duties of high-impact AI operators — AI Basic Act guideline commentary series (4)](https://www.lexology.com/library/detail.aspx?g=45171c0a-9e28-4952-89eb-fd2619c7ecfa)."

### EU AI Act comparison

- 6.Gibson Dunn. (2026). "[EU AI Act Omnibus Agreement: Postponed High-Risk Deadlines and Other Key Changes](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)."
- 7.Morgan Lewis. (2026). "[EU Approves Delays and Other Amendments to Certain EU AI Act Obligations](https://www.morganlewis.com/pubs/2026/06/eu-approves-delays-and-other-amendments-to-certain-eu-ai-act-obligations-what-businesses-should-know)."
- 8.Tech Policy Press. (2026). "[EU's AI Act Delays Let High-Risk Systems Dodge Oversight](https://www.techpolicy.press/eus-ai-act-delays-let-highrisk-systems-dodge-oversight/)."

### U.S. state-law comparison

- 9.Colorado General Assembly. (2024–2026). "[SB24-205: Consumer Protections for Artificial Intelligence](https://leg.colorado.gov/bills/sb24-205)" (repealed 2026-05; replaced by SB26-189, eff. 2027-01-01).
- 10.New York City Department of Consumer and Worker Protection. (2023–2025). "[Automated Employment Decision Tools (Local Law 144)](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page)."

### Data-quality standards & scholarship

- 11.ISO/IEC. (2024–2025). "[ISO/IEC 5259 series (Parts 1–5): Data quality for analytics and machine learning](https://www.iso.org/standard/81088.html)."
- 12.Gebru, T., et al. (2021). "[Datasheets for Datasets](https://arxiv.org/abs/1803.09010)." Communications of the ACM, 64(12).
- 13.Mitchell, M., et al. (2019). "[Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)." FAT* '19.
- 14.Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). "[Dissecting racial bias in an algorithm used to manage the health of populations](https://doi.org/10.1126/science.aax2342)." Science, 366(6464), 447–453.
- 15.Buolamwini, J., & Gebru, T. (2018). "[Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification](https://proceedings.mlr.press/v81/buolamwini18a.html)." PMLR, 81.

All regulatory facts are as of 2026-07-21; the latest U.S. state-law developments (Colorado's replacement bill) are based on cross-checking across three law firms as of publication.
