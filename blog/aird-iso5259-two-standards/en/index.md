---
title: "AIRD and ISO 5259: Preparing Data for Reliable AI Agents"
subtitle: "Connecting data quality, provenance and usage conditions with the continuing improvement of the agents that use them."
date: "2026-11-19"
category: "tech"
source: "index.html"
note: "Complete editorial manuscript with tables, diagram descriptions and FAQs"
---

# AIRD and ISO 5259: Preparing Data for Reliable AI Agents

Connecting data quality, provenance and usage conditions with the continuing improvement of the agents that use them.

## Executive Summary

As AI agents search enterprise documents and query data, data quality work reaches further into daily operations. Organizations need agents to understand where information comes from, when it applies and how it may be used. AIRD (AI-Ready Data) is one initiative translating these needs into documented data descriptions, quality measures and purpose-specific readiness requirements.

The public recall case illustrates data prepared for agent search and aggregation. Its source passed a quality assessment, while the derived RAG pack remains unassessed for its intended purpose because the purpose profile is not registered. Exact matches in the published recall comparison rose from 23/42 to 42/42, within a test whose answer key is linked to the rules used to build the pack.

Pebblous sees this development as an opportunity for two cooperating products. Data Greenhouse diagnoses and improves data against multiple requirements. Agent Greenhouse is the next R&D step: improving capabilities that fall short in operational records and tests, then testing and approving new agent versions. Better-prepared data supports agents, and improved agents help cultivate the next data version.

### Key Numbers

The first two numbers are scores from the published comparison, and the last two describe the measurement scope and the size of the data. The scores split by task; the measured items split by data type.

Source: [AIRD evidence, test conditions and limitations](https://aird.idx.or.kr/about/evidence) (measured 2026-10-21) · [AIRD indicator list and type applicability table](https://aird.datahub.kr/reference-indicators/) · [description of the recall retrieval pack](https://aird.idx.or.kr/packs/recall).

23/42 → 42/42

Exact match on the recall questions

7 questions repeated, with an answer key tied to the rules that built the pack

28/28 → 28/28

Hydrogen and fuel questions do not move

14 questions. What preparation bought differed from task to task

3–13

Mandatory indicators per data type

3 for images, 13 for structured tables and time series. All 16 are not uniformly required

843 chunks

Size of the retrieval pack

The published source CSV has 844 rows. This is not a count of products or training demonstrations

## 1. This Dataset Was Checked for Search, Not for Training

The case starts from ordinary public data. The Korean Agency for Technology and Standards publishes a domestic recall report on the national open-data portal, filed under dataset number 15040695. Row by row it records products that broke a safety threshold, products whose labeling did not match, and descriptions tied to accidents. Open the published CSV and there are 844 rows, three fields used in the work itself, and one identifier that points at the row. The public pack is prepared for retrieval and aggregation.

What changed is the side that repackaged it. The derived pack splits the same content into 843 retrieval chunks and tags each chunk with the substance involved and how many times over the limit it ran. It also keeps the identifier of the source row each chunk came from. Seven evaluation questions ship with it, and the one asking for a manufacturer is built so that the answer is withheld for lack of evidence. This is not a textbook for a model to memorize. It is input for a program that has been handed a question and has to look things up and count them.

Between 844 source rows and 843 chunks there is a gap of one. Saying what caused it takes the row-by-row conversion rule, and the published description on its own does not settle it as "one empty row was dropped." When the number travels, it is worth carrying the note that 843 counts chunks, not products and not training demonstrations.

Diagram contents: How the source data becomes retrieval input · Korean recall CSV (KATS) · 844 rows · 3 working fields + 1 row ID · Cut into chunks + tag · Gap of 1 — different counting units · Retrieval chunks · 843 · Substance + exceedance tags + source row ID · ✗ Not training material · ✓ Input for search and aggregation · Source: recall source data (844 rows) and the published recall retrieval pack description (843 chunks)

▲ An original Pebblous diagram, drawn from the published figures

This one case unsettles a common assumption. "Preparing data for AI" usually reads as tidying up training material. What was prepared here is working data for search and aggregation, and its quality and purpose-specific readiness were assessed separately. Where an agent digs through in-house documents to build an answer, data that never entered training decides what the model says.

## 2. Connecting Quality Measures With Readiness for AI Use

AIRD names data that meets the conditions for being used by AI. The framework published here splits that readiness in two. One half is Quality-Ready: the data itself is measured against set dimensions and indicators and has to land at or above a given tier. The other is Purpose-Ready: whatever the data is meant for carries its own conditions, and those have to be met separately. The published guide counts six purposes, namely machine learning, deep learning, retrieval-augmented generation, fine-tuning, knowledge graphs and statistical analysis. The same document puts one more step in front of those two, asking whether the data can be found at all, and describes the result as three gates: Discoverable (G1), Quality-Ready (G2) and Purpose-Ready (G3).

Each gate is assessed once the required evidence and criteria are available. An empty later assessment should be read alongside the readiness state and the reason it was not assessed. An unregistered purpose profile, for example, does not mean that the source failed its earlier quality assessment.

Status is the part to read carefully. What the published guide points to as the governing text is TTAK draft v0.95 together with vocabulary table v0.10.5, and enactment is expected in December 2026. It is neither a finished international standard nor a certification carrying legal force. The packs distributed by the demonstration site carry their own version numbers for vocabulary, schema and operator thresholds, so folding the draft version and an individual implementation into one name blurs the record.

The other side of the pairing holds a different status. ISO/IEC 5259-2:2024 was published in November 2024, and its formal name is data quality for analytics and machine learning, part 2, data quality measures. It carries measures over from ISO/IEC 25012 and 25024 and widens them into a machine learning context, so properties that cause trouble before and after training, such as the diversity of a dataset or its auditability, sit in the measure list.

Shrinking the 5259 series to a single measurement document is not accurate either. Alongside terminology and measures, the series holds data quality management requirements, processes and governance documents. The split that says ISO inspects files while AIRD looks at use is convenient to explain, but it erases the ground the two frameworks share.

Readers who want the quality characteristics and measures of 5259-2 item by item will find them in our [cheat sheet](/project/ISO5259/5259-2-cheetsheet-01/en/), and how the series divides into documents and what schedule it has moved on is written up in the [standardization roadmap](/project/ISO5259/iso5259-standardization-roadmap/en/). This article does not repeat that material and looks only at where AIRD touches it.

## 3. What Each Framework Asks For

A practical way to tell the two frameworks apart is to write their questions side by side. What gets evaluated, what evidence is demanded, and who sets the pass mark all differ. The table below puts those questions in five rows and records, on each row, how Pebblous intends to answer them.

| Question | ISO/IEC 5259-2 | This AIRD framework | How Data Greenhouse responds |
|----|----|----|----|
| What is evaluated? | Quality characteristics and measures chosen to fit the purpose | Readiness requirements per data type, plus quality and per-purpose readiness | Connect thresholds and measurement tools to the intended use |
| What material is required? | The data plus the basis for each measure: answer keys, rules, thresholds | The data plus machine-readable description, versions, diagnostics and operating records | Check the submitted material and the missing evidence at intake |
| Can a calculation be reused? | The definition, unit and denominator of an item govern | The definition and applicability conditions of that indicator have to be checked against it | Reuse only calculations whose definitions match, and keep the provenance |
| How is a pass decided? | Evaluated against the intended use and the quality requirements | By operating guidance, threshold values and the purpose profile | Separate measurement from verdict, and record the threshold version and who signed off |
| Does it guarantee real AI results? | Quality measurement alone does not guarantee success on every task | A readiness verdict and the effect on actual work are confirmed separately | Compare the results and the cost of search, aggregation and training as well |

▲ A Pebblous comparison and design note. It is not an accredited equivalence table between the two specifications.

The easiest trap when reading the table is the names. Completeness, consistency, accuracy and a fair number of other words appear in both frameworks. Where the formula and the thing being measured differ under one name, though, the values are not the same number. The moment a completeness score computed on one side is copied into a report on the other, the number survives and the evidence disappears.

## 4. Applying Seven Quality Dimensions to Each Data Type

The published guide names seven quality dimensions, which are completeness, consistency, accuracy, timeliness, validity, uniqueness and machine readability, with 16 indicators under them. All 16 do not apply uniformly. Structured tables and time series carry 13 mandatory indicators, prompt-and-response pairs carry 8, documents carry 5, and images carry 3. The minimum measurable indicator set (MMI) contains four candidates; only those applicable to the data type are measured. What an image dataset is asked for cannot be the same as what robot multimodal time series are asked for, where physical time, coordinate frames and the meaning of an action have to be verified together.

Mandatory indicators by data type (out of 16 total)

Structured tables & time series 13 Prompt-response pairs 8 Documents 5 Images 3 ▲ An original Pebblous diagram · mandatory indicator counts by data type, out of 16 total \| Source: [AIRD indicator list and type applicability table](https://aird.datahub.kr/reference-indicators/)

The scoring is not one block either. Diagnostic maturity, which records how much has been measured, the quality tier, and the per-purpose readiness level each answer a different question. The quality tier uses the lowest dimension score with the operating guideline's tier ranges and required-dimension pass conditions. The scale runs from Tier0 to Tier4, five steps, and clearing the quality gate takes every mandatory indicator for that type measured and a tier of 1 or higher. A tier carries its meaning only when the pass mark travels with it. The per-purpose readiness level, by contrast, can be judged only once a profile for that purpose is registered, and the published vocabulary document states that the procedure is still to come.

This is where the everyday damage happens. Write an item that has not been measured yet, an item that does not apply to that type, and an item with no threshold value yet all down as zero, and sound data looks like it failed. The three differ in kind and have to be recorded one by one, and the example threshold values in the guide do not belong in an official tier calculation.

The misreading also runs the other way, in the claim that AIRD has no thresholds for deciding a pass at all. One published verdict document refutes it. The quality verdict for the recall source states that it applied operator threshold profile TP-KR-2026-1.0, and records the fingerprint of that profile and the time of the verdict alongside it. So rather than asking in a single sentence whether thresholds exist, check the dimensions of the standard, the thresholds of the operator, and the availability of a purpose profile one at a time.

## 5. Source Quality and Retrieval Readiness Need Separate Checks

The verdict record for the recall case splits into two lines. The source dataset cleared the quality gate on 11 October 2026, and the verdict document states that operator thresholds were applied and the result confirmed at Tier3 (Gold). The pass mark sits at Tier1, which puts it two steps up a five-step scale. The retrieval pack produced from the same data, by contrast, shows a purpose-fitness verdict of "not assessed," with a note that it will be judged in the next release. The purpose profile has not been registered yet.

Diagram contents: Where the verdicts diverge — source and derived pack · Discoverable · Quality-Ready · Purpose-Ready · Source recall data · Public CSV, 844 rows · Pass · Pass · Tier3 (Gold) · 2026-10-11 · No record · Derived retrieval pack · 843 chunks · Published · Does not inherit · the source tier · Not applicable · judged in the next release · Source: the quality verdict for the source data (2026-10-11) and the published description of the recall retrieval pack

▲ An original Pebblous diagram, drawn from the states recorded in the published verdict documents

That divergence settles one rule. The quality tier the source earned does not become the tier of a product processed out of it. Errors or omissions introduced while chunks were cut and tags attached were never part of the measurement of the source. The same reasoning is why quality, readiness for a given use, and results in actual work cannot share one line.

Numbers for that last one are published too. In the comparison measured on 21 October 2026, exact matches on the recall questions rose from 23/42 under the original condition to 42/42 under the pack condition, which is 54.8% to 100%. In the same test the hydrogen and fuel questions came out 28/28 under both conditions. What preparation buys differs from task to task, and lifting one score out on its own turns into overstatement.

The 100% carries a caveat the operator attached to it. Because the recall answer key was tallied with the rules that built the pack, the pack condition is structurally favored on exact match. The same page notes that the question count is small and no statistical test was run, and that among the 10 per-criterion tables broken out in the linking experiment, AIRD came out behind on 2. Publishing the limits alongside the result is worth crediting. The problem is the copy that takes the number and leaves the limits behind.

## 6. Connecting Industry Demand With Two Cooperating Greenhouses

Requirements that make quality, provenance and usage conditions readable by AI are a welcome industry development for Pebblous. More explicit requirements clarify the work customers need in diagnosis, improvement, evidence and re-evaluation after change. The opportunity extends across training datasets and the operational information that agents consult.

The role Pebblous gives Data Greenhouse is not to pick one standard but to take in several. Written out in two layers, taking them in looks like this.

### 6.16.1 The Governance Layer Holds Versions, Provenance and Approvals

Requirements, tolerances, data versions, provenance and usage conditions differ by customer and purpose. The governance layer connects them with approvals and assessment history. An integrated report can present ISO-based measurements and AIRD readiness assessments together while keeping each result traceable to its definition, version, evidence and approval responsibility. Calculations with matching definitions can be reused; each assessment remains tied to the criteria applied.

### 6.26.2 Neuro-Symbolic Diagnosis Separates Detection From Judgment

What a neural network does well is gather things that mean something similar and pick out skew in a distribution, gaps in it, and cases that look wrong. Whether such a candidate breaks a working threshold is judged on explicit rules and domain knowledge. Rule checks that can be settled by computation are run by reproducible tools. Not treating the judgment of a large language model or an embedding similarity as a conformance verdict on its own is the premise of this design. A verdict is a place where evidence is demanded, and a score whose evidence cannot be retraced does not become a verdict.

What to do when a new standard arrives also comes out as a list in this structure. Register the applicable items, the measurement tools, the evidence required and the conditions for a verdict, then diagnose existing data versions again. Being able to build and hand over a data version that satisfies both 5259 and AIRD is the direction the product is headed.

Where this stands today is worth saying plainly. The measurement and improvement technology Pebblous has built up is ISO 5259-based, and on the AIRD side the adapter and the evaluation implementation are at the stage of a verification plan. That does not mean automatic evaluation of every item is finished or that a certification has been obtained. Conformance in any individual case is something to state against the specification and profile applied, the data type, and the verification result.

The widening scope is the other thing this case points out. Beyond training material, the documents used in retrieval-augmented generation, the tables staff query at work, the input that goes into tools and the material used to evaluate agents all face the same question. What is this data ready to be used for, and where is the evidence for that judgment written down?

### 6.36.3 New Requirements Also Define the Capabilities Agents Need

An agent needs to judge whether the information it finds is sufficient for the task. It should check provenance and the relevant date, request additional evidence or abstain when the record is insufficient. Distinguishing source quality from the purpose readiness of a derived RAG pack is one example of this capability.

Agents working in Data Greenhouse can apply newly registered rules and tools. When operational records and tests reveal gaps in knowledge, skills or decision procedures, Agent Greenhouse is being developed to improve those capabilities, independently test the resulting agent version and return an approved version to work. This connects applying a requirement with improving the agent itself.

Better-prepared data supports agent decisions, and improved agents can manage the quality and evidence of the next data version more effectively. The business goal is to reduce repeated review, rework and approval effort as customers introduce new data and requirements. Building on the data quality technology available today, Pebblous plans to test the contribution of this cycle through controlled comparisons.

## 7. A Proposed Test That Runs Both on One Dataset

There is a limit to settling the relationship between two standards in prose. Hang both on the same data and where they overlap and where they leave gaps shows up as numbers. Below are the six steps such a comparison would take.

1.  Fix first the versions and hashes of the source and derived data, along with the terms of use and the intended purpose.
2.  Map the measures of 5259 against the AIRD indicators by definition, unit, denominator and required evidence.
3.  Measure the items that can be computed, and record separately what does not apply, what has not been measured, and what has no threshold.
4.  Issue a quality verdict as far as the operating guidance reaches, and hold the purpose verdict if no purpose profile exists.
5.  Compare the original, a version built from the published rules, the existing AIRD pack and an improved version under the same questions, model, tools and cost conditions. Review the answer key independently of the improvement rules.
6.  Do not look at accuracy alone. Count wrong answers, correct abstentions, traceability to the source, review time and the cost of updating.

The caveat in step five matters most. Build the answer key with the same hand that wrote the improvement rules and you reproduce exactly the structural advantage the published test disclosed about itself. The same goes for correct abstention in step six. Stopping instead of inventing an answer when the evidence runs short is a capability the evaluation questions in the recall pack already demand.

Those six steps are a proposal. What this article checked goes as far as a static review of the published files, their structure and the verdict documents. It is not the result of evaluating every item in either standard, of running an agent again, or of a performance improvement experiment.

## R. References

The comparison uses official standard descriptions, AIRD guidance and the data and assessment files published by the demonstration project. All references below are public.

### Standards

- 1.ISO/IEC. (2024-11). "[ISO/IEC 5259-2:2024 Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 2: Data quality measures](https://www.iso.org/standard/81860.html)." International standard.
- 2.ISO. "[Structure of the ISO/IEC 5259 series](https://www.iso.org/publication/PUB200525.html)." Source for the statement in section 2 that the series holds management, process and governance documents beyond measurement.
- 3.TTA. "[TTA standard proposal](https://committee.tta.or.kr/join/Propose_new_Print.jsp?pk=74697&printSel=desc)." The domestic standard proposal document related to AIRD.

### AIRD published guides

- 4.AIRD. "[AIRD concepts and readiness stages](https://aird.datahub.kr/concept-concepts/)." Source for the split between Quality-Ready and Purpose-Ready, the three gates, and the TTAK draft v0.95 baseline.
- 5.AIRD. "[AIRD terminology](https://aird.datahub.kr/reference-terms/)." Source for the definitions of diagnostic maturity, quality tier and per-purpose readiness level, and for the note that the verdict procedure is still to be published.
- 6.AIRD. "[Indicator list and type applicability table](https://aird.datahub.kr/reference-indicators/)." Source for the 7 dimensions and 16 indicators, and for the mandatory counts per type (3 for images, 13 for structured tables and time series, 8 for prompt-and-response pairs, 5 for documents).
- 7.AIRD. "[Measurement and verdict guide](https://aird.datahub.kr/prepare-measure/)." Source for the statement in section 4 that unmeasured, not-applicable and no-threshold items have to be recorded separately.
- 8.AIRD. "[Readiness stage verdicts](https://aird.datahub.kr/concept-judgment/)." Source for the conditions attached to each gate.
- 9.AIRD. "[Published tools and scope of support](https://aird.datahub.kr/reference-tools/)."

### Recall case evidence

- 10.AIRD demonstration. "[Evidence, test conditions and limitations](https://aird.idx.or.kr/about/evidence)." Source for 23/42 → 42/42, 28/28, the 2026-10-21 measurement date, the structural advantage and absence of a statistical test, and the 2 of 10 broken-out criteria where AIRD came out behind in the linking experiment.
- 11.AIRD demonstration. "[Quality verdict for the source (G2)](https://aird.idx.or.kr/packages/15040695/gates/G2-1.0.0.json)." Source for the 2026-10-11 pass, operator threshold profile TP-KR-2026-1.0, and the Tier3 (Gold) confirmation.
- 12.AIRD demonstration. "[The recall retrieval pack and its description](https://aird.idx.or.kr/packs/recall)." Source for the 843 chunks, the substance and exceedance tags, the source row identifiers, the 7 evaluation questions, and the "not assessed" purpose verdict.
- 13.AIRD demonstration. "[Recall source data](https://aird.idx.or.kr/data/15040695)." Used to confirm the source [CSV of 844 rows](https://aird.idx.or.kr/packages/15040695/data/dataset-15040695.csv) and its field structure.
- 14.Public Data Portal. "[Korean Agency for Technology and Standards domestic recall report](https://www.data.go.kr/data/15040695/fileData.do)." Dataset number 15040695.

### Pebblous blog

- 15.Pebblous. "[ISO 5259-2 data quality cheat sheet](/project/ISO5259/5259-2-cheetsheet-01/en/)." An article laying out the quality characteristics and measures of 5259-2.
- 16.Pebblous. "[ISO 5259 standardization roadmap](/project/ISO5259/iso5259-standardization-roadmap/en/)." An article on the structure of the series and its standardization schedule.

## FAQ

### What does AIRD refer to?

It is a concept naming data that meets the conditions for being used by AI, and its English name is AI-Ready Data. The framework published here splits readiness into Quality-Ready and Purpose-Ready, and puts a step in front of them asking whether the data can be found at all, which makes three gates. Quality-Ready measures the data itself against set dimensions and indicators. Purpose-Ready checks the conditions required for each intended use, such as machine learning or retrieval-augmented generation, separately.

### Is AIRD already an established standard or a certification?

No. What the published guide points to as the governing text is TTAK draft v0.95 together with vocabulary table v0.10.5, with enactment expected in December 2026. It is neither a finished international standard nor a certification carrying legal force, so a phrase like "we obtained AIRD certification" does not match the current state.

### How do ISO/IEC 5259-2 and AIRD differ?

5259-2 is an international standard published in November 2024 that defines data quality measures for analytics and machine learning. AIRD is a draft framework in progress in Korea that brings readiness requirements per data type and per-purpose readiness into the scope of a verdict. The two ask different questions, demand different evidence and decide a pass differently, so the result of one does not stand in for the other.

### If we follow ISO 5259, can we skip AIRD?

That is hard to maintain. Even where quality dimensions share a name, values cannot be reused when the formula and the thing measured differ, and per-purpose readiness is not settled by 5259 measurement alone. The summary that ISO only inspects files is not accurate either. Beyond measurement, the 5259 series holds management, process and governance documents.

### Isn't AI-ready data just another term for training data?

This case runs against that assumption. The pack built from the recall data of the Korean Agency for Technology and Standards is not a textbook for training a model but input cut into 843 chunks so that a program handed a question can search and count. Documents used in retrieval-augmented generation, tables queried at work, tool input and material for evaluating agents all face the same readiness question.

### How many quality dimensions and indicators are there, and do they apply to all data?

By the published guide there are seven dimensions, which are completeness, consistency, accuracy, timeliness, validity, uniqueness and machine readability, and 16 indicators. The mandatory items differ by data type, however: 13 for structured tables and time series, 8 for prompt-and-response pairs, 5 for documents and 3 for images. The minimum measurable indicator set (MMI) contains four candidates; only those applicable to the data type are measured.

### Is it true that AIRD has no thresholds for deciding a pass?

It is not. The quality verdict for the recall source states that it applied operator threshold profile TP-KR-2026-1.0, and records the fingerprint of that profile and the time of the verdict. Per-purpose readiness, though, can be judged only once a profile for that purpose is registered, and that procedure is not fully published yet. So the question of thresholds has to be checked separately at the level of the standard, the operator and the purpose profile.

### If the source cleared the quality gate, has the processed data cleared it too?

No. In the recall case the source cleared the quality gate on 11 October 2026 and was confirmed at Tier3 (Gold), but the retrieval pack produced from the same data shows a purpose-fitness verdict of "not assessed" with a note that it will be judged in the next release. Errors introduced while chunks were cut and tags attached were never part of the measurement of the source, so the tier is not inherited.

### Exact match reached 100% in the comparison. Does that mean performance improved that much?

Read that way it becomes an overstatement. Exact matches on the recall questions did rise from 23/42 to 42/42, but the operator disclosed that the answer key was tallied with the rules that built the pack, which favors the pack structurally. The question count is small, no statistical test was run, and in the same test the hydrogen and fuel questions came out 28/28 under both conditions.

### Does Pebblous provide automatic evaluation of every AIRD item?

Not yet. The measurement and improvement technology on hand is ISO 5259-based, and on the AIRD side the adapter and the evaluation implementation are at the stage of a verification plan. The direction the product is headed is to register several standards, apply them together to the same data, and find the missing evidence and the items to improve for a fresh diagnosis. Conformance in any individual case is stated against the specification and profile applied, the data type and the verification result.

### What can our organization prepare right now?

It can start by recording three things apart from one another: items not measured, items that do not apply to that data type, and items with no threshold value yet. Write all three down as zero and sound data looks like it failed. After that, keeping the version, the provenance and the approval history of the thresholds applied makes it possible to retrace which verdict rested on which evidence.

### How does demand for AI-ready data connect to Agent Greenhouse?

Documented quality, provenance and usage conditions also define capabilities that agents need to interpret and apply. Data Greenhouse prepares the data; Agent Greenhouse is being developed to improve capability gaps identified in operational records and tests, independently evaluate a new agent version and return an approved version to work. The collaboration is intended to improve the next data task as well as the agent.
