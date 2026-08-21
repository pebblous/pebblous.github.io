---
title: A Model Cleared 43,000 New York Water Lines and Found No Lead at All
subtitle: An independent audit read the inventory for all 153 New York localities and set what the predictive-model rows recorded against what the same utilities
date: 2026-08-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Model Cleared 43,000 New York Water Lines and Found No Lead at All

_An independent audit read the inventory for all 153 New York localities and set what the predictive-model rows recorded against what the same utilities_

## Executive Summary

> [!callout]
> US regulation lets a water utility settle a pipe's material with a statistical or predictive model rather than digging it up. New York is one of the few states that also publishes, address by address, which method produced each call — which puts those model outputs next to what the same utilities' crews actually found in the same neighborhoods. An independent researcher read the statewide file that way. Of every method that made a call, only the predictive model recorded neither lead nor unknown, on all 43,000-odd addresses. What is missing is not the pipe. It is the value written in the ledger.

> The strongest evidence is not a comparison with other cities but one held inside a single city. New York City writes lead hundreds of thousands of times and writes unknown hundreds of thousands of times, and never once in the stretch the model handled. Two further facts need no estimator at all. State guidance permits that value only where written records show construction after June 1986, yet thousands of these addresses sit under buildings that predate 1940 and the installation-date column is empty on every one of them. And in the 2025 snapshot the public-side determinations did not exist. The values sitting there now came across from the customer side — a different pipe with a different owner. A village of a few thousand people, 550 km from New York City and served by an unrelated utility, reproduces the same pattern on its own.

> None of this says the model was wrong. The paper reports no accuracy figure and names no vendor. A confidently mistaken model, a sensible workflow that sends the ambiguous cases to a crew and records only the cleared ones as model output, a pipeline that discards uncertainty before submission — all three fit this data, and **a reader of the ledger cannot tell them apart.** When how a value was produced and how uncertain it was are not written down beside it, the only way left to recover that later is to pull a year-old snapshot out of the Internet Archive and diff it.

<!-- stat-card -->
**43,215** — NYC addresses classified by model — One material value on every one of them; zero lead, zero unknown

<!-- stat-card -->
**0.0085%** — 95% upper bound on that bucket's lead rate — Records-based calls in the same city find lead on 19.80%

<!-- stat-card -->
**7,782** — of them under pre-1940 buildings — Guidance permits the value only with post-June-1986 records; the date column is 100% empty

<!-- stat-card -->
**1,150–1,450** — Expected lead public-side lines, six estimators — Not a confidence interval — the spread of disagreement between specifications

## The rule allows models, with conditions

The US Lead and Copper Rule Revisions (LCRR) required every community water system to publish a service line inventory by October 2024. Small amounts of lead matter here. In October 2021 the Centers for Disease Control and Prevention lowered its blood lead reference value for children to 3.5 µg/dL while restating that no safe blood lead level has been identified. Where a system does not know a line's material, the rule leaves open a path other than the shovel: a statistical method or a predictive model. A commercial market grew on top of that permission. Utilities buy models for a plain reason — digging up a single line costs an order of magnitude more.

The size of that gap appears in material the US Environmental Protection Agency circulates. A per-line cost table by identification method puts excavation at $1,120, sequential water sampling at $715, and visual field inspection at $29. Predictive modeling carries no per-line figure in that table, because no primary source publishes one. Replacement, which follows the call, costs far more: EPA works from about $4,700 per line (range $1,200–$12,300), while the American Water Works Association puts it between $8,247 and upward of $12,000. The distance between those two numbers is itself a long-running argument in the sector. Through the infrastructure law the federal government set aside $15 billion for lead service line replacement across fiscal years 2022–2026, of which New York State has received $369 million through the third allotment.

A model saves money not because the call itself is cheap but because it shrinks the number of lines anyone digs up. In cases its own marketing describes, one leading vendor estimates that the Detroit Water and Sewerage Department avoided $165 million by adopting predictive modeling, and reports that South Bend physically verified **125 of roughly 50,000 lines (0.25%)** and handled the rest with the model. Both figures are vendor-published and should not be taken at face value, but they show exactly where the savings come from. The intended use of a model is to shrink the population that gets verified. It is not to remove verification.

How regulation governs a call with that much money attached is the baseline for everything below. Version 3 of the New York State Department of Health's service line inventory guidance lists seven ways to identify material: utility or public records, field inspection by system staff or a professional plumber, excavation, sampling, statistical analysis or a predictive model, customer self-identification confirmed by staff, and other methods acceptable to EPA or NYSDOH. Only excavation and field inspection look at the pipe. The rest are desk methods, and the guidance attaches different conditions to each.

### 1.1. A model output is not presumptively acceptable

The item covering predictive models asks the question bluntly: "Is a predictive (probability) model or statistical analysis acceptable to become a known service line without physical verification?" The answer is conditional.

> [!callout]
> "A model's output **typically needs physical verification** due to an inherent inaccuracy of any model or statistical analysis. However, on a case-by-case basis, some of the model and statistical analysis results will be accepted without physical verification. You **must provide sufficient information to the State** to evaluate how much physical verification is adequate." Two of the examples the guidance lists are the heart of this audit: "**random physical verification process such as the proposed number of SLs that will be physically verified**" and "**confidence interval for the model**." The item then closes: "Note that a State's initial determination for a required physical verification rate **can be revised based on the accuracy of physical confirmation results**."

That closing sentence writes a feedback loop into the rule. The verification rate is meant to respond to what the shovels find. Whether it does is a question we can put back to the file in Section 2.

### 1.2. Eight values separate "not lead" from "might be lead"

A system picks one of eight values in the material column. In the template's own order: **Lead including lead-lined galvanized**, **Copper**, **Galvanized**, **Plastic**, **Known Other**, **Unknown but could be lead**, **Unknown but unlikely lead**, and **Unknown**. Three of the eight are explicit unknowns, and one of those three flags that the line could be lead.

The value that recurs most in this report is the fifth one, **Known Other**, and the word "other" is misleading if you read it casually. In the state template it does not sit with the three unknowns; it sits alongside named materials like copper and plastic, and it asserts a **line whose lead status is known to be negative** even though its material is not named. Aggregate the inventory and it maps to non-lead. The hedge **Unknown but could be lead** is the value at the other end: an unknown that is explicitly flagged as possibly lead.

The guidance also pins down when Known Other may be used. A system needs **written records** showing the entire distribution system was constructed after June 1986 or after that municipality's own lead ban, and the entire length of the customer-owned line must postdate the same date. A fallback is attached in the same item: "If you do not have such records, you need to verify service line material with one or more methods included in Item 14." Absent the records, in other words, go back to a method that looks at the pipe.

### 1.3. The same guidance gives sampling a number and the model a procedure

Read the guidance straight through and something appears on the page just before the predictive-model item. Water sampling — the other indirect method, sitting right beside the model — carries a **numeric verification standard**. "For systems that do not add a corrosion inhibitor, sequential sampling for SL material identification is acceptable only when it is part of a study approved by the NYSDOH. **Up to 20 percent physical verification** of SL materials tentatively identified with the sampling will be required. If the **accuracy of the physical verification result is less than 90%, the sampling should not be used** without physical confirmation."

Put the two items in one table and the asymmetry shows.

| Requirement | Water sampling (Item 16) | Predictive model (Item 17) |
| --- | --- | --- |
| Prior approval | Only as part of a study approved by NYSDOH | Case-by-case |
| Amount of physical verification | Up to 20%, stated as a number | "Provide sufficient information to evaluate how much is adequate" |
| Failure threshold | Below 90% verification accuracy, may not be used | No numeric threshold |
| What must be submitted | An approved study plan | A random verification process + a confidence interval |

****************Source: New York State Department of Health, [Service Line Inventory Guidance (LCRR) v3](https://www.health.ny.gov/environmental/water/drinking/docs/service_line_inventory_guidance_lcrr.pdf), August 2025, Items 16 and 17. Quotations checked against the source PDF for this report

Reading this as "the rule went easy on models" gets it wrong. The guidance does make demands of the model side, and they are not light ones: a random verification process and a confidence interval. What is missing is any way to check **from inside the inventory** whether those demands were met. Sampling gets a sentence you can adjudicate — below 90% accuracy, you may not use it. The model gets a procedural instruction to submit sufficient information. That difference is the backdrop to everything observed below.

## One aggregation swept 153 localities

The audit starts from a single test. For each locality, how many distinct material values do its model-based classifications take? And what did that same locality's own physical verification find? The first question is a one-line aggregation; the answer to the second is already sitting in the same file. The paper ran both stages across all of New York in seconds.

The scope is the 153 localities that classified at least 100 addresses with a model. Locality is the finest reporting unit the state file publishes, so that is the unit the screen uses. Of those, **75 (49%) record exactly one distinct material value**, and those 75 cover 125,990 addresses — 57.0% of all model-classified lines screened.

This is where the paper's restraint begins. A single value is not by itself misconduct. For a system serving housing built after 1986, one value is what you would expect. That is why the screen has two stages: **zero variance flags, and only contradiction confirms.** Of the 75, 68 are consistent with their own physical verification or have too little of it to check at all, and the paper defends those 68 explicitly rather than leaving them under suspicion.

The second-stage threshold was fixed in advance: localities with at least 200 physically verified lines of which at least 1% are lead. **Seven** localities clear that bar and still show a single value across the model bucket. Five are boroughs of New York City, one is East Rochester 550 km away, and the last is Troy.

| Locality | Model-classified | The one value recorded | Physically verified | Verified lead rate | Expected lead | P(observe zero) |
| --- | --- | --- | --- | --- | --- | --- |
| Staten Island | 16,434 | Known Other | 20,500 | 2.31% | 380 | 10-167 |
| Brooklyn | 10,308 | Known Other | 52,024 | 7.54% | 777 | 10-351 |
| Queens | 8,513 | Known Other | 66,460 | 14.19% | 1,208 | 10-566 |
| Bronx | 4,867 | Known Other | 17,769 | 5.46% | 266 | 10-119 |
| Manhattan | 3,315 | Known Other | 11,751 | 3.40% | 113 | 10-50 |
| East Rochester | 472 | Known Other | 557 | 9.69% | 46 | 10-21 |
| Troy | 187 | Copper | 325 | 1.54% | 3 | 0.055 |

****Localities whose model output takes a single value and whose own crews contradict it. The last two columns are "how many lead lines the model bucket should have produced if that locality's own verified lead rate applied to it" and "the probability of nonetheless observing zero." Source: arXiv:2608.19922, Table 1

The last row is one the paper itself tells you to set aside. Troy's expected count is three and the probability of observing zero is 0.055, which is unremarkable. The paper explains why it stayed in the table anyway: the screen's threshold was fixed in advance, and dropping a case after looking at its p-value is precisely the practice this paper objects to. For the other six, the probability of observing zero runs from 10-21 to 10-566, so no argument here leans on Troy.

Five of the seven rows are New York City boroughs, which invites an obvious objection: one city counted five times. The unit the paper uses is the locality, the finest geography the file publishes, not the regulated entity. To the Department of Health the five boroughs are one water system (NY7003493). Collapse them and the count becomes 149 units, of which **71 (48%)** take a single value and **three** rather than seven are contradicted. The 125,990 addresses covered by the single-value bucket do not change. The paper reports both figures and notes that nothing downstream turns on which one you use.

### 2.1. East Rochester takes the obvious objection off the table

If only the five boroughs had been flagged, the finding could be read as a big-city peculiarity or one utility's exception. East Rochester closes that door. It is a village of a few thousand households, 550 km from New York City, served by an unrelated utility, with nothing in the data indicating a shared vendor relationship. Its model classified 472 addresses and recorded Known Other on every one of them. Crews in the same village opened 557 lines and found lead on 9.69% of them.

One more detail matters. Those 557 were **all excavations** — not field inspections, which see only the accessible portion of a line, but holes in the ground with the pipe in view. The contradiction does not rest on the weaker of the two physical methods.

### 2.2. More than 40,000 addresses cannot be checked at all

To reach stage two, a locality needs physical verification of its own. Most have very little. The median locality performs **0.14** physical verifications per model classification. **Twenty-three of the 153 have performed none at all**, and those 23 cover 40,468 model-classified addresses. No screen can check that stretch.

The clearest example is the locality of Greece. It classified 16,135 addresses by model, all with one value, against 74 verified lines available for comparison. So it never reaches the contradicted list. Not contradicted is not the same as confirmed.

The natural follow-up — do systems that lean harder on models verify less? — is one the paper tests. Expressed as shares of each system's total line count, the two are unrelated (Spearman −0.076, p=0.35). Expressed as model share against verifications per model classification, a relationship appears (−0.433, p=2×10-8). Both forms share a term between numerator and denominator and so carry a ratio artifact, and the paper **draws a conclusion from neither**. It says only that verification levels are low across the board.

### 2.3. The feedback loop is not closing

Section 1 ended on the guidance sentence that makes the verification rate responsive to what the shovels find. Two snapshots let us look for that adjustment. Between June 2025 and August 2026, model-classified addresses statewide moved from 298,641 to 298,704, and the count of those recorded as lead or as the hedge went from 28,971 to 28,974. Over fourteen months: 63 addresses and three classifications. Over the same period, 664,259 physical verifications were performed across the state.

> [!callout]
> Crews opened the ground 664,000 times in fourteen months, and the record for 300,000 model-classified lines is effectively frozen. The learning circuit the rule assumes is not turning inside this file.

## One ledger, one city, two distributions

New York State is estimated to hold about 494,000 lead service lines, sixth in the country by EPA's drinking water infrastructure survey. The case this audit examines in most detail is a single city, and narrowing to New York City addresses that carry usable coordinates leaves 813,911 of them. Split those addresses by the basis on which each was classified and you get the table below.

| Basis of classification | Addresses | Share | Lead | Unknown | Median year built |
| --- | --- | --- | --- | --- | --- |
| Records review | 532,906 | 65.5% | 19.80% | 9.26% | 1931 |
| Field inspection | 95,087 | 11.7% | 8.45% | 0.01% | 1931 |
| Excavation | 72,174 | 8.9% | 9.86% | 2.60% | 1930 |
| Not verified | 70,529 | 8.7% | 0.00% | 100.00% | 1930 |
| Predictive model | 43,215 | 5.3% | 0.00% | 0.00% | 1984 |

****************New York City public-side classifications, 813,911 addresses. "Unknown" is the sum of the three unknown values. Median year built comes from a MapPLUTO tax-lot join. Source: arXiv:2608.19922, Table 2

Two rows show a lead rate of zero, and running them together would collapse the whole point, so they have to be separated first. The **Not verified** row is zero because nothing was classified: all 70,529 of those addresses are recorded as unknown. Where no call was made, the absence of lead is trivial. The **Predictive model** row is a different object. It carries a call on **all 43,215 addresses** and still records neither lead nor unknown. Stated precisely: of the methods that made a call, only the predictive model never once used either value.
