---
title: Not one Nordic health dataset meets the EU metadata profile
subtitle: Measuring 2,811 health dataset descriptions from 11 national catalogues in five Nordic countries against the eight properties HealthDCAT-AP makes mandatory
date: 2026-09-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Not one Nordic health dataset meets the EU metadata profile

_Measuring 2,811 health dataset descriptions from 11 national catalogues in five Nordic countries against the eight properties HealthDCAT-AP makes mandatory_

## Executive Summary

> [!callout]
> The European Health Data Space needs member states to be able to find each other's health datasets, so it settled on a metadata profile for describing them. That profile, HealthDCAT-AP, makes eight properties mandatory on every dataset description in its current release. A researcher pulled the health dataset descriptions out of the 11 national catalogues that the European data portal harvests from five Nordic countries, and opened those eight columns one at a time. Not one of the 2,811 descriptions had all eight.

> The empty columns followed a rule. Title, description and publisher, the fields a person types into a publishing form, were almost universally filled. The fields whose values have to be looked up in a controlled vocabulary, a legal register or an institutional registry and then bound to it were at exactly zero. The line did not fall between generic properties and health properties. It fell between typing and looking something up.

> The author's own first draft called the generic catalogue layer sound, then deleted the sentence after placing the portal's quality scores beside it. The best Nordic score is 300 out of 405, so no catalogue reaches the top band, and half of those reporting a compliance figure report zero per cent. We re-ran the same measurement across all 209 European catalogues: zero per cent is not a Nordic anomaly, it is the European median. So this is not a national report card. The health extension sits at zero on top of a base that is itself only partly conformant, and a health profile rollout that assumes a solid base will fail on the base.

> Two questions come back to our side of the desk. When our own catalogue marks a field as passing, does that mean there is a value, or does it mean an address was dereferenced and returned 200? And do we store a quality verdict as a property hanging off the dataset, or as an observation that carries who made it, when, and against which requirement? The second question already has a standard answer.

<!-- stat-card -->
**0** — descriptions with all eight mandatory properties — Out of 2,811 health datasets. Census date 2026-08-25

<!-- stat-card -->
**3** — mandatory properties present on 0.00% — The three health-specific fields. Not one instance across 11 catalogues in five countries

<!-- stat-card -->
**75.4%** — European catalogues at 0% compliance — 138 of the 183 that report the figure. The median itself is 0.0% (2026-09-01)

<!-- stat-card -->
**0** — uses of the EU vocabulary by Finland's national portal — All 1,146 themed descriptions point at the portal's own local identifiers

## No description filled all eight

The measurement design is simple. The European data portal harvests member states' national catalogues on a schedule, holds them in one place, and leaves a public query endpoint open. The author pulled every dataset description whose theme field (`dcat:theme`) carries the health value from the EU authority vocabulary, then kept only those coming from the 11 national catalogues of five Nordic countries. As of 25 August 2026 that was 2,811 descriptions. Each one was then checked against the eight properties HealthDCAT-AP Release 7 makes mandatory.

Ordered by how often each property is present, the result is a cliff rather than a staircase. There is no middle ground between the top four columns and the bottom four.

Presence of each of the eight mandatory properties across 2,811 health dataset descriptions. Figure 1 of the paper, redrawn in the Pebblous palette; the three inherited properties at the bottom are figures from the paper's body placed on the same axis. † The 100% on theme is produced by the selection criterion itself and is not a finding. Source: Rovai, arXiv:2608.27720 (CC BY 4.0), census date 2026-08-25

Ignore the 100% at the top. We selected only descriptions carrying a health value in the theme field, so that field being full is true by construction. The paper marks the row with an asterisk and says the same thing. The other three are real measurements: a distribution address on nine of ten, access rights on eight of ten, an identifier on roughly two of three.

Below the dashed line is where this article lives. The three health-specific properties are at exactly zero across all 11 catalogues in five countries. A property that is not health-specific has fallen in with them too: applicable legislation, which records the legal instrument governing access to the dataset, appears on 21 of 2,811 descriptions, or 0.75%. The result of all this is that no description carried all eight.

The author calls this zero a stronger result than a low percentage. A low percentage would mean some publishers had solved the problem and others had not; zero removes that possibility. Nobody in the region has a worked example to copy. That moves the thing to be fixed away from data entry habits and toward harvest and publication pipelines.

Querying the same endpoint again on 1 September 2026, the European data portal holds 1,908,766 dataset nodes, of which 33,460 carry the EU health theme. The 2,811 descriptions in this article are 8.40% of the latter. Both figures are floors, so the ratio should not be read as a precise share.

**Why 2,811 is a floor**

Because selection runs on the health value of the EU theme vocabulary, any health dataset that carries no theme at all, or carries one from a local vocabulary, never enters the 2,811. The author does not call the number an estimate. He calls it a floor and notes that the direction of the bias is known. Section 3's Finnish case is that omission made visible and measured.

This measurement is an [unreviewed preprint on arXiv](https://arxiv.org/abs/2608.27720), written by a single author. That author runs a company selling ontology engineering and data governance consulting, and states in his competing-interests note that he also sells to public sector buyers in the domain this paper measures. The measurement code, the vocabulary and the shapes are published under an open licence; derived catalogue mapping artefacts are held under a separate commercial licence. So we handled the paper's figures along two tracks. The numbers from its own census, meaning the 2,811 descriptions and the presence rates for the eight properties, we carry over as the paper reports them. The numbers we can ask the same endpoints for ourselves, such as the portal's quality scores, the behaviour of the vocabulary server and the portal's overall size, we re-queried on 1 September 2026 and compared. Which track a figure came from is marked in the body and in the table captions, and where they disagree we say so on the spot.

## Typed columns survive, bound columns are empty

Since the three properties at zero happen to be the health-specific ones, it is tempting to read this as a sound generic catalogue with the health extension simply not bolted on yet. The author says that is how he read it at first. Then he threw that reading out.

The reason lies in what the filled columns actually are. Title and description are at 100%, publisher at 99.08%. None of these three appears on the list of eight, because the DCAT-AP layer beneath already requires them and the health extension did not restate them; that is not the same as their being unnecessary. And the three have something in common: they are what a person types into a publishing form. The columns on the other side have something in common too. Applicable legislation requires a legal identifier to be looked up. Health data access body has to point at an entry in an institutional registry. Health category has to select a value from a published controlled vocabulary. What separated full columns from empty ones was not generic versus health. It was typing versus looking something up and binding to it.

Where full columns end and empty ones begin. An original Pebblous diagram built from the paper's §2 narrative — three fields a person types directly into the publishing form on the left, four fields that must be looked up in a controlled vocabulary, legal register or institutional registry on the right. Source: Rovai, arXiv:2608.27720

The author corrects his own draft here. Seeing title, description and publisher near 100%, he had written that the generic catalogue layer was sound. Those three properties never represented DCAT-AP conformance in the first place, and the portal's own validation of that layer said the opposite. He left the mistake in the paper as a single line: a measurement of a subset licenses a statement about that subset and nothing wider.

To see the portal's own verdict, the catalogues have to be laid out one by one. The European data portal scores every catalogue it harvests out of 405 points for metadata quality and sorts them into four bands. The two right-hand columns below are the portal's verdict; the far right is this measurement.

| Catalogue | Country | Health datasets | Quality score / 405 | Rating | DCAT-AP compliance | All eight present |
| --- | --- | --- | --- | --- | --- | --- |
| oppnadata | Sweden | 2,418 | 177 | Sufficient | 27% | 0 |
| datavejviser | Denmark | 219 | 287 | Good | 0% | 0 |
| data-norge-no | Norway | 75 | 300 | Good | 62% | 0 |
| nsip-no | Norway | 70 | 248 | Good | 69% | 0 |
| geodata-se | Sweden | 19 | 111 | Bad | 0% | 0 |
| paikkatietohakemisto | Finland | 4 | 144 | Sufficient | not reported | 0 |
| nsip-se | Sweden | 4 | 191 | Sufficient | 5% | 0 |
| geoportal-is | Iceland | 2 | 135 | Sufficient | 0% | 0 |
| open-data-finland | Finland | 0 | 218 | Sufficient | 8% | 0 |
| geonorge | Norway | 0 | 164 | Sufficient | 0% | 0 |
| nsip-dk | Denmark | 0 | 252 | Good | 0% | 0 |

Health dataset counts from the paper's census (2026-08-25); quality scores and compliance rates from the European data portal's quality-indicator snapshot (the paper's, 2026-08-27). Pebblous re-queried the same endpoint on 1 September 2026 and found all 11 unchanged. Sources: Rovai, arXiv:2608.27720 Table 1 · data.europa.eu MQA API

The top band, Excellent, starts at 351. The best Nordic score is the 300 of Norway's national portal, so no catalogue in the region reaches it. Of the 10 that report a compliance figure, 5 report it as 0%. This is why the author deleted the sentence from his draft. The health extension has indeed not been bolted on, but it is not a case of a missing extension over a solid base.

Of the 2,811 health datasets, 2,418 come from one Swedish national portal, which is 86% of the total. The next largest, Denmark's datavejviser, has 219, more than a tenfold gap. That one catalogue scores 177 out of 405 and is 27% DCAT-AP compliant. We call this a regional total, but one catalogue's condition very nearly determines it. That is also why the author singled those 2,418 out for independent verification: when the largest contributor moves, the movement disappears inside the regional total.

Denmark's datavejviser is second in the region at 287 points with a Good rating, and its compliance rate is 0%. The quality score rewards how many optional fields were used, whether the addresses listed actually resolve, and whether the licence is clear. It does not measure profile conformance. A good rating and validated conformance are close to independent. Put in our own terms: a green quality dashboard is not evidence of conformance to a specification.

### 2.1. Zero per cent was not a Nordic exception

Read this far and the impression left is that the Nordics are unusually weak. So we pulled every European catalogue from the same endpoint and recomputed on the same rules. As of 1 September 2026 there were 209 of them.

| Indicator | All of Europe | The 11 Nordic catalogues |
| --- | --- | --- |
| Catalogues | 209 | 11 |
| Quality score, mean / median | 225.1 / 238.0 | 202.5 / 191.0 |
| In the top band (351+) | 7 (3.3%) | 0 |
| Catalogues reporting a compliance rate | 183 | 10 |
| Of those, at 0% compliance | 138 (75.4%) | 5 (50.0%) |
| Compliance rate, mean / median | 13.4% / 0.0% | — |

Pebblous parsed the full European data portal quality-indicator API (all 209 catalogues) on 1 September 2026 and recomputed these figures. On both sides the denominator for compliance percentages is only those catalogues that report the field (183 in Europe, 10 in the Nordics). The 209 mix national, regional and EU-institution catalogues, so this cannot be read as a country-versus-country comparison.

Zero per cent compliance is the median for European catalogues. More than half report that figure, and measured against the same denominator the Nordic catalogues come out better than the European average rather than worse. So this article is not any country's report card. The author sets up the same defence three separate times. Finland in particular runs a national health record infrastructure with mandatory deposit for both public and private providers, and a functioning secondary-use permit process. This measurement covers exactly one axis: the catalogue through which another member state can discover, by machine, that a dataset exists.

> [!callout]
> So the corrected diagnosis reads like this. Three properties at exactly zero across 11 catalogues in five countries is not carelessness on the part of publishers. It is what an unimplemented specification looks like. The remedy changes accordingly: not a data entry campaign or an institutional reform, but a fix to harvest mappings and publication pipelines. And that work starts on a base that is itself only partly conformant. A health profile rollout that assumes a solid base will break on the base before it breaks on the health properties.

## Finland is visible only at home

Look again at one row of the previous table. Finland's national open data portal, open-data-finland, contributes 2,259 dataset descriptions to the European portal and shows 0 in the health column. Its quality score of 218 is middling and its rating is Sufficient. It is not that the data was never published, nor that themes were never assigned.

Of the descriptions that portal sends to the European portal, 1,146 carry a theme. Every one of those 1,146 points at a local group identifier under the portal's own domain instead of the EU authority vocabulary. Its binding rate to the EU theme vocabulary is 0.0%. The values exist. They are simply not members of the vocabulary a European health filter queries.

Laying the Nordic catalogues out on that same axis shows where the Finnish portal stands.

EU theme vocabulary binding rate by catalogue. Figure 2 of the paper, redrawn in the Pebblous palette. The denominator is not the health subset but every description in the catalogue that fills the theme field. Source: Rovai, arXiv:2608.27720 (CC BY 4.0)

Six of the ten are above 90% and two are at 100%. Only the Finnish portal sits on the floor. There is almost no middle in the distribution: catalogues that use the vocabulary use it for nearly everything, and catalogues that do not use it at all. Vocabulary binding is decided by how the harvest mapping is configured, not by how diligent a publisher is.

### 3.1. What "zero" precisely covers

One sentence needs cutting to size here. The paper's abstract says a European health filter returns no Finnish dataset at all; the body narrows the scope and says zero from this catalogue. And the table in the previous section shows another Finnish catalogue, paikkatietohakemisto, carrying 4 health-themed datasets. The precise statement is this: zero as measured through Finland's national open data portal, and 4 for Finland as a whole, via a different catalogue.

Narrowing the scope leaves the contrast intact. Type "health" into that portal's own search box and 57 results come back. Health data that is indexed and searchable domestically is invisible on precisely the route the Regulation depends on. The author calls this a one-property fix in a harvest mapping and the largest gain per unit of work that the study found. That reading holds. No new data has to be created and no one has to be retrained; it is a mapping line that moves local group identifiers onto EU vocabulary values.

### 3.2. Korea has no place to split the question

Put the same question to Korea's public data portal and no answer comes back. As of 1 September 2026, data.go.kr holds 371,201 datasets, 5,925 of them under the health and medical classification, or 1.60% of the total. But that classification is a single-select field: the person registering a dataset picks one of 17 top-level categories. There is no structure in which to ask whether a value is bound to a controlled vocabulary, and because only one can be chosen, a dataset spanning several subjects cannot be expressed at all.

The absent fields matter more. The three properties that came back at zero in Europe, health data access body, health category and the structured data flag, have no counterpart in the Korean portal. Neither does applicable legislation. So in Korea the question this article asks cannot even be put. Splitting "is it filled" from "is it bound" requires that there first be a column to bind.

## HTTP 200 does not mean there is a value

Up to here the story has been about empty columns, or about values sitting outside the vocabulary. Now for values that look like they are inside the vocabulary and in fact point at nothing. The scope changes too: the figures below cover the whole European data portal, not the Nordics.

The EU theme vocabulary is an address space. A dataset description names one address in that space as its theme. Counting the addresses actually in use across the whole portal, the author found 36, of which the authority defines 14. The other 22 are addresses that do not exist in that vocabulary. The datasets carrying one of those 22 number 1,238.

The top two entries say what kind of problem this is. The largest, 806 datasets, ends its address in the literal string `undefined`: what a program emits when it fails to find a value, lodged in an address and shipped to production. The next 237 carry `ENV`, where the authority's environment theme is `ENVI`. One character short.

The trouble is that these typos pass validation. A metadata validator normally checks vocabulary membership by dereferencing the address, and treats a healthy response as proof the concept exists. But the EU authority host answers HTTP 200 for addresses it never defined. What comes back with it is a syntactically perfect RDF document containing no concept at all.

On 1 September 2026, five days after the paper's snapshot, Pebblous made the requests against that address space directly. The defined health theme returned a 16,063-byte document holding 81 multilingual labels, matching the paper's figure digit for digit. We then requested the two typos the paper names, along with one string we invented on the spot.

| Theme value requested | Status | Response size | Concepts inside |
| --- | --- | --- | --- |
| HEAL (the health theme the authority defines) | 200 | 16,063 bytes | 81 labels |
| ENV (the London Datastore typo) | 200 | 170 bytes | 0 |
| undefined (the serialisation-bug string) | 200 | 170 bytes | 0 |
| ZZZQQ (a string Pebblous made up) | 200 | 170 bytes | 0 |

````````

Pebblous dereferenced the EU authority's data-theme namespace directly on 1 September 2026. Requests asked for RDF/XML and were measured as single requests that do not follow redirects. Source: publications.europa.eu authority tables

The body of a 170-byte response is this in its entirety: two namespace declarations and an empty root element.

<?xml version="1.0" encoding="utf-8" ?>
<rdf:RDF
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" >
</rdf:RDF>

What this result shows is not only that the defect is still unfixed. The problem is not a handful of wrongly registered legacy values sitting around; it is that the namespace still accepts any string at all. To a validator that reads only the status code, `ZZZQQ` is a valid theme.

The verdict turns on one thing: which part of the response you read.

The two paths for validating a theme value, drawn from the account in §4.4 of the paper and from Pebblous's reproduction of it on 1 September 2026.

The author writes that he came within a step of the same trap. He had planned to use the status code as evidence of vocabulary membership, and had he done so he would have reported zero datasets carrying non-existent addresses. Membership is now decided by parsing the response body and counting concepts, with a regression test pinning that behaviour.

There is no reservoir of undiscovered health data hiding behind these undefined addresses. The author tested for it: across the entire European portal, three datasets carry a health term outside the authority. The address pollution problem is large; its health slice is negligible, and the paper reports it as negligible.

> [!callout]
> Europe's official quality indicators cannot see this axis either. Among the portal's findability indicators, the theme-related one checks only that the theme field contains some value. Measured that way, the 209 European catalogues average 86.2% with a median of 100%. Almost everyone passes near full marks. Fill rate and binding rate are different axes, and no official indicator anywhere in Europe aggregates and publishes the second one per catalogue.

## Recording verdicts as dated observations

The zeros so far are measurement results. What shape those results were stored in is the part not yet covered. For anyone issuing quality certificates, that storage model is the first thing to lift from this paper. The author did not store conformance as a property hanging off the dataset. He recorded it as a claim somebody made, on a date, against a stated requirement. Do it that way and absence is recorded rather than inferred. A missing triple and a recorded absence are different things, and only the second can be asked about later.

This distinction earns its keep because failure is not one thing. Store it as a single boolean and all three rows below collapse into false.

| Kind of failure | How it looks in the catalogue | Remedy |
| --- | --- | --- |
| Absent | The field is empty | Add the field to the publication pipeline |
| Present but ungrounded | There is a theme value, but it belongs to no vocabulary | Rebind it to the right vocabulary in the harvest mapping |
| Present but not supplied by the publisher | The portal computed the value itself | Exclude that graph from the measurement |

The three failures the observation model in §5 of the paper distinguishes. The justification for distinguishing them is that the remedies differ. Source: Rovai, arXiv:2608.27720

There is more than one kind of observation, too. Alongside the conformance observation sits a separate vocabulary binding observation, and that is what makes it possible to express a record that carries every mandatory property and still cannot be found. Finland in Section 3 is exactly that state. A language coverage observation separates a catalogue that is complete domestically but monolingual from one that is incomplete. Without that separation, Findata in Section 6 would be recorded as thin metadata, which it is not.

The fourth type, the provenance observation, came out of an accident rather than a design. One property's presence rate measured 98.40%, and on a second look it was 0.96%. The triples were certainly there, but they sat in a separate graph where the portal stores the output of its own metadata quality assessment. Values the portal had computed were mistaken for values a publisher had supplied. That is a platform computing quality indicators and then eating its own output as input, and any service that diagnoses data quality and hands indicators back is structurally exposed to it. Every measurement since excludes those graphs, and a new observation type now records where a value came from.

The verification discipline is the other half of the model. All eighteen headline figures are computed by two independent routes, and the run aborts if any of them disagree. In this run all eighteen agreed. That the apparatus is not decoration is visible in Section 4's numbers. Cross-checking undefined theme addresses, one route swept in Findata's ungrounded concept tags and reported 4,186 while the other reported 1,238, and the run stopped. The 1,238 in the earlier section is the figure that survived that stop.

The rule checks come in three layers. The first, which audits the discipline's own record-keeping, reports 0 violations; the third, which only bites when several catalogues sit in one graph, reports 11. The findings are concentrated in the second layer, at 21,431 violations. Within that, 12,975 are absences of a mandatory property and 8,433 are absences of a health-specific one, and these two are not meant to be added together. A health-specific absence is also a mandatory absence, so by design it is counted twice. What each number does instead is reconcile against something else. 12,975 is exactly the count of conformance observations recorded with a false verdict, and 8,433 is exactly three health-specific properties across 2,811 descriptions. The zeros in the earlier sections are zeros that survived those checks.

The list of mandatory properties was not transcribed by hand; it is generated by parsing the official shapes file the Commission publishes. If the committed list ever diverges from the generated one, the build breaks. That makes a new release of the specification a data change rather than a code change.

### 5.1. This discipline has a 2016 standard behind it

By this point the observation model reads like the paper's invention, so we went looking for academic precedent. The short version: the idea was standardised as a vocabulary a decade ago. It is the W3C's Data Quality Vocabulary, published on 15 December 2016. It is a Working Group Note rather than a full Recommendation, but its contents are laid out ready to use, and the correspondence is too exact to be coincidence.

| The discipline the paper sets out | Its counterpart in the W3C Data Quality Vocabulary |
| --- | --- |
| Treat one measurement as one observation | dqv:QualityMeasurement is defined as an instance of the Data Cube's qb:Observation |
| Attach who made the verdict | prov:wasAttributedTo |
| Attach when the verdict was made | prov:generatedAtTime |
| Register the requirement itself as data | dqv:Metric |
| Issue a certificate | dqv:QualityCertificate |

````````````

Pebblous read the W3C Data Quality Vocabulary (Working Group Note, 2016-12-15) directly on 1 September 2026 and mapped the correspondences. The wording on how an observation is defined is carried over from the source.

The vocabulary's name appears nowhere in the paper. The Data Quality Vocabulary, the provenance vocabulary and the Data Cube are mentioned zero times. The related work section covers the lineage of portal quality measurement conscientiously, but not the lineage of vocabularies for expressing quality verdicts. We state only that fact. We have no grounds for concluding the author did not know about it, and the restraint the paper itself shows toward other authors is the right posture for us in the same place.

The conference proceedings that carry the specification design paper the author cites also carry, alongside it, a study that prototypes a catalogue on draft HealthDCAT-AP and attaches a quality assessment pipeline to it, and this paper does not cite that one. It does not unsettle the paper's position. The earlier study works on a prototype it built; this paper counts catalogues already in operation. The targets differ, so the claim that no precedent exists for a conformance census of live catalogues holds. What would be wrong is reading it as nobody having attempted quality assessment on this profile.

None of this diminishes the paper. The discipline worked: five of the author's own errors were caught before publication, which is the evidence. Narrowed precisely, though, the contribution is not the invention of a new model. It is a demonstration that an existing standard vocabulary, applied to profile conformance measurement in earnest, catches errors. On our side that narrowing is good news. An organisation that wants to record quality verdicts as observations does not need to copy a preprint's bespoke model. The standard vocabulary already does the job.

### 5.2. Korea's scheme has no such column either

Korea already has a national scheme that grades public data quality. The Ministry of the Interior and Safety's public data quality management assessment has run since 2016 and, as of 2024, grades 679 government and public institutions on 11 indicators across three areas. It is a denser scheme than that of any single European member state.

Yet the data value management area of that scheme leans on checking for errors and missing values, and has no indicator measuring whether a value is a member of a published controlled vocabulary. That is the same hole as the one in Europe's official quality indicators in Section 4. Both schemes measure fill rate; neither measures binding rate. So a good quality score is no evidence that an institution's theme values are bound to anything. That is Section 2's Danish case, restated for Korea.

> [!callout]
> The data structure you store a quality verdict in looks like a matter of taste, and it actually determines the range of questions you can ask later. An organisation that stored a single boolean cannot reconstruct why last month was a pass and this month is a fail. One that recorded an observation carrying a date, a claimant and a requirement can answer that, and the same record catches the accident of mistaking a value you computed yourself for one you were given.

## The layer both blueprints leave out

Two blueprints for Nordic health AI infrastructure appeared in the summer of 2026. One is a 22-author paper published online in Nature Medicine on 14 August. It proposes a regional platform over linked registries and biobanks, a Nordic common data model built on OMOP, and phased federated learning across national trusted research environments. It asks that alignment with the European Health Data Space be treated as a design constraint from the start rather than an afterthought, and schema auditing, ontology mapping and FAIR metadata all appear on its list of commitments. The other is a report from Sitra, the Finnish innovation fund, proposing a Finnish health data space built on a single infrastructure with a single approval body. The first cites the second. The two documents are also linked by a person: the Sitra report's first author appears last on the Nature Medicine author list. This is not two teams unaware of each other happening to omit the same layer.

The paper under discussion reports that no DCAT-family specification is mentioned in either blueprint. All the standardisation discussion in both documents concerns the inside of the dataset: clinical observation models, disease classifications, imaging, genomics, pathology. The layer outside the dataset, the one through which another member state discovers by machine that the dataset exists, never appears.

**Attribution for this passage, precisely**

We tried to open the Nature Medicine paper ourselves and got only the abstract page, the body being behind a paywall. On that page, other terms the paper's summary certainly covers also failed to appear, so we cannot claim to have read the body. The statement that neither blueprint mentions a DCAT-family specification is attributed to this paper's reporting, not to our own verification. The bibliographic record we confirmed separately.

The author states this as an observation about two texts and not as a claim about what their authors know or have considered. He adds that a paper on content models is under no obligation to cover a discovery profile, and that the scoping decision is legitimate. The reason it is still worth recording is singular: the layer both documents leave out is the layer where this measurement returns zero. A federated platform whose datasets cannot be found from another member state has solved the harder problem and left the easier one open.

### 6.1. Findata has no column to say what it is

Findata, Finland's secondary-use permit authority, holds some of the richest metadata in the region. Its 2,835 dataset descriptions carry 89,368 instance variable descriptions, and only 2.01% of those variables lack a description. This is not a thin catalogue. But 7.51% of the descriptions carry an English label, and 84.74% of the variables have none at all. It is a catalogue that is complete domestically and monolingual, and for a Regulation whose purpose is cross-border discovery that is a different kind of failure from incompleteness and needs a different remedy. This is why the language coverage observation in Section 5 exists.

The second barrier to reachability has the same shape as this article's thesis. All 2,948 concept tags in the catalogue report a null scheme, without exception. Counted as unique concepts that is 508, of which 477 even carry an English label, and none is bound to any published vocabulary, so there is no way to map them onto another one. The values are there and a human can read what they mean; there is no thread for a machine to follow. The same failure as Finland's national portal using local identifiers in Section 3 turns up a second time, inside the region's richest catalogue.

Findata publishes no DCAT at all, so it is invisible to the census above by construction. The author treats this as a separate finding rather than a coverage gap and harvested the catalogue directly. The harvest ran with a ceiling of 5,000 records and returned 2,835, so it is the whole catalogue rather than a truncated sample. Norway's health registry catalogue is invisible for a related reason. It offered no machine-readable endpoint on any route the author tried, so Norway enters this measurement only through its national open data portal. Both are bodies the Regulation names as access authorities.

Mapping the Findata harvest onto the eight mandatory properties gives the table below. It is not a compliance rate: it asks whether a value could be sourced from a field that exists today.

| Mandatory property | Findata's source field | Count / 2,835 | Share | Verdict |
| --- | --- | --- | --- | --- |
| Identifier | id | 2,835 | 100.00% | sourceable |
| Structured data flag | instanceVariables | 2,723 | 96.05% | sourceable |
| Access rights | usageCondition | 2,558 | 90.23% | sourceable |
| Health category | datasetTypes | 2,542 | 89.66% | sourceable |
| Theme | conceptsFromScheme | 2,059 | 72.63% | sourceable |
| Distribution | links | 235 | 8.29% | thin |
| Applicable legislation | no corresponding field | 0 | — | absent |
| Health data access body | no corresponding field | 0 | — | absent |

Schema capability of the Findata catalogue. Not a compliance rate: a judgement of whether a mandatory property's value could be sourced from the schema as it stands. Source: Rovai, arXiv:2608.27720 Table 3

The two rows judged to have no column at all are a different case. There is no applicable legislation column because the catalogue records conditions of use without recording which legal instrument those conditions come from. Finland's secondary use act does appear in free text on some records, but not as a legal identifier, so no machine can interpret it. And there is no health data access body column. The access body for this catalogue is Findata itself. The very institution the Regulation names has no field in its schema in which to state what it is.

### 6.2. The profile was validated on catalogues built for the profile

Part of the reason the installed base returns zero can be found in the specification's own documents. HealthDCAT-AP was developed in the Commission's HealthData@EU pilot, then picked up and refined by the TEHDAS2 joint action with 29 countries participating, and it went through a pan-European public consultation. The question is how it was validated. The paper describing the profile's design records the validation sandbox as national catalogues set up to implement and test the specification.

So the profile was validated on catalogues stood up in order to implement it, and never on the existing catalogues the European data portal actually harvests. That the installed base measures zero is then not surprising. It is neither a defect in the specification nor carelessness by publishers: the validation population was a different population from the start. Passing in a pilot guarantees nothing about passing in production. Pilot catalogues were built for the profile; operational catalogues already exist for other reasons.

### 6.3. Official documentation still points at a deprecated release

This article measures against Release 7. To check that the baseline still held at publication time, we queried the Commission's official repository on 1 September 2026. It carries Releases 5, 6 and 7 and no 8, and the commit deprecating Release 6 is dated 24 April 2026. Release 7 is indeed current.

The same query turned up something else. The GitHub page where the specification originally lived was retired in September 2025, the address is still live, and that page still presents Release 5 as the current and authoritative version. Even the readme of the official repository it moved to uses Release 5 in its worked example. The paper's point about third-party implementations pointing at a dead location was accurate, and the upstream of that drift is the official documentation itself. A compliance rate computed against Release 5 today is a measurement of the wrong target. The mandatory property list changed across two releases, so passes and failures can flip.

The Commission runs an official HealthDCAT-AP validator, but it is a publisher's tool that checks one record before submission. This paper's shapes do the opposite job: they read a graph of dated observations covering many catalogues at once and produce a report addressed to whoever can change the harvest mapping. The author states explicitly that his work should not be used in place of the official validator.

## Why this matters to Pebblous

Pebblous diagnoses data and issues quality certificates. That is why this paper does not read as a story about someone else's catalogues. The places where it returns zero are the same places our product passes through every day. Four of them turn into questions on our side.

### 7.1. What data structure do we issue a certificate in

Store a diagnostic result as a boolean property on the dataset and three cases collapse into one field: no value, a value not bound to any vocabulary, and a value our own platform computed. All three have different remedies. Not knowing which one it is means not being able to tell a customer what to fix.

Section 5 already gave the answer. Treat one measurement as one observation, attach who made the verdict and when, and issue the certificate itself as its own class. All three pieces sit in a vocabulary the W3C standardised in 2016. That means no copying a preprint's bespoke model, and it also means other tools can read our certificates.

The 98.40% that turned out to be 0.96%, from the same section, is a more direct warning. A platform that computes quality indicators and then eats its own output as input is a loop that any diagnostic service is structurally exposed to. Without recording where a value came from as an observation, there is no way to find later where the loop started.

### 7.2. What does a pass in our pipeline mean

The defect in Section 4 is not a quirk of one European vocabulary server. Any validation that dereferences an address and reads only the status code produces the same shape of false pass at any layer. Label vocabularies in training data behave this way, so do addresses pointing at ontology classes, and so do the links that stitch data lineage together. That a response is 200 and that the response contains a concept are two different facts.

This is a question we can answer today, by counting how many validation rules in our pipeline look only at the status code. Neither Europe's official quality indicators nor Korea's quality management assessment measure binding rate, only fill rate, so a green light on an external indicator is not an answer to it.

### 7.3. Measure the base before bolting on the extension

What this measurement offers an organisation preparing a domain extension is a correction about sequencing. Four points move straight into practice.

- Measure conformance to the base profile before bolting on a domain extension. A zero in the base needs to surface before a zero in the extension.
- Do not read a good quality rating as evidence of conformance. The Danish catalogue rated Good at 287 points was 0% compliant.
- Check that the release you are measuring against is current. Official documentation presenting a deprecated release as authoritative is live right now.
- Do not read a pilot pass as a production pass. The validation sandbox was catalogues stood up for the specification.

### 7.4. The discovery layer is still empty

The two blueprints in Section 6 design the inside of the dataset in fine detail and do not address the layer through which a dataset is found. That gap is not a Nordic one. Define AI-Ready Data as data a model can train on and this layer stays somebody else's problem. Widen the definition to data that is discoverable, bound to a controlled vocabulary and carrying a history of verdicts, and metadata governance, data lineage and quality diagnostics become the tools holding that definition up.

The Commission estimated that the European Health Data Space would produce savings of roughly €11 billion over ten years, a figure calculated when the Regulation was proposed in 2022. That a scheme carrying that much depends on a discovery route where zero descriptions carry all eight mandatory properties is worth setting side by side. We do not join the two sentences causally. Nobody has yet calculated how much of that benefit a discovery failure removes.

### 7.5. Where this article sits in the series

The Pebblous blog has taken up this same problem three times before. We covered [how a controlled vocabulary structurally differs from free-text entry](/report/openmetadata-ai-ready-data-2026-04/en/), [how to instrument metadata quality in a research data pipeline](/report/research-data-ai-ready-pipeline-2026/en/), and [what disappears when a catalogue has no column for recording relationships](/blog/maori-research-data-findability/en/). All three were arguments about what ought to be done. This one is a measurement that came back zero.

This article mentions Pebblous products because the measurement raised questions we have to answer, not because the paper's findings prove our products are needed. The paper is an unreviewed preprint with a declared competing interest on the author's part, and we cite it only within the range we re-computed and checked against the same endpoints. Please read the assessment of the research and our own positioning as separate things.

## References

Figures in the body come from two tracks: measurements reported by item 1 below, and values Pebblous recomputed by querying items 5 and 8 through 11 directly on 1 September 2026. Which track a figure came from is marked in the body and in the table captions.

### Papers and standards

- 1.Fabio Rovai. "Measuring the Installed Base: Nordic Health Dataset Catalogues Against HealthDCAT-AP Release 7." arXiv:2608.27720v1 [cs.DL], 2026-08-27. CC BY 4.0. [arXiv: 2608.27720](https://arxiv.org/abs/2608.27720) — an unreviewed preprint by a single author. The author heads a company selling ontology engineering and data governance consulting and states in his competing-interests note that he also sells to public sector buyers in the domain the paper measures. The measurement code, vocabulary and shapes are published under an open licence.
- 2.Pascal Derycke, Beatriz J. Barros, Nienke M. Schutte, Charles-Andrew Vande Catsyne, Martina Bargeman Fonseca (Sciensano). "Designing DCAT-AP Extensions for Common European Data Spaces: The EHDS HealthDCAT-AP Case Study." CEUR-WS Vol-4064 (SEMANTiCS 2025), NXDG25-paper5. [ceur-ws.org](https://ceur-ws.org/Vol-4064/NXDG25-paper5.pdf)
- 3.Rob Brennan, Junli Liang, Akila Wickramasekara (ADAPT Centre, University College Dublin). "Prototyping an Health DCAT-AP data catalogue to support population health indicator identification and quality assessment." CEUR-WS Vol-4064 (SEMANTiCS 2025), NXDG25-paper3. [ceur-ws.org](https://ceur-ws.org/Vol-4064/NXDG25-paper3.pdf)
- 4.Ole A. Andreassen and 21 others (22 authors in total; the last-listed author, O. Kallioniemi, shares a name with the first author of the Sitra report at item 6). "An AI-health infrastructure for the Nordic region: technical foundations, data assets, and a roadmap for deployment." Nature Medicine, published online 2026-08-14. [DOI: 10.1038/s41591-026-04575-4](https://doi.org/10.1038/s41591-026-04575-4) — the bibliographic record was confirmed via Crossref; the body is paywalled and we could not open it. The statement about the absence of DCAT-family specifications is attributed to item 1's reporting.
- 5.Riccardo Albertoni, Antoine Isaac (eds.). "Data on the Web Best Practices: Data Quality Vocabulary." W3C Working Group Note, 2016-12-15. [w3.org/TR/vocab-dqv](https://www.w3.org/TR/vocab-dqv/)
- 6.O. Kallioniemi, K. Porkka. "Terveystiedon tulevaisuus tekoälyn aikakaudella" (The future of health information in the age of AI). Sitra selvityksiä 255, Sitra, Helsinki, 2026 — we did not access the Finnish original. Its contents are attributed to item 1's citation of it.

### Policy, specifications and statistics

- 7.Regulation (EU) 2025/327 (European Health Data Space). Adopted 2025-02-11, published in the Official Journal 2025-03-05, in force 2025-03-26. [European Commission EHDS page](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en) — the estimate of roughly €11 billion in savings over ten years was confirmed on the same page (calculated at the time of the 2022 proposal).
- 8.European Commission / HealthData@EU. "HealthDCAT-AP Release 7." [code.europa.eu/healthdataeu/healthdcat-ap](https://code.europa.eu/healthdataeu/healthdcat-ap) — confirmed current on 1 September 2026. The commit deprecating Release 6 is dated 2026-04-24; the most recent commit is 2026-05-08.
- 9.data.europa.eu. "Metadata Quality Assurance (MQA)" methodology and catalogue cache API. [data.europa.eu/mqa/methodology](https://data.europa.eu/mqa/methodology) — Pebblous parsed all 209 European catalogues directly on 1 September 2026 and recomputed the figures.
- 10.EU Vocabularies. "Data theme authority table." [publications.europa.eu](https://publications.europa.eu/resource/authority/data-theme/) — Pebblous reproduced the HTTP 200 plus empty document response for undefined strings directly on 1 September 2026.
- 11.data.europa.eu public SPARQL endpoint. [data.europa.eu/sparql](https://data.europa.eu/sparql) — dataset totals and health-theme totals re-queried on 1 September 2026.
- 12.Korea Public Data Portal. Dataset counts by classification. [data.go.kr](https://www.data.go.kr/) — retrieved 1 September 2026.
- 13.Ministry of the Interior and Safety (Korea). Public data quality management assessment — in operation since 2016; as of 2024 it covers 679 government and public institutions on 11 indicators across three areas.

### Prior work reached through item 1's bibliography

The four entries below are not cited directly in the body and we did not consult the originals. The bibliographic details are carried over exactly as they appear in item 1's reference list.

- 14.S. Neumaier, J. Umbrich, A. Polleres. "Automated quality assessment of metadata across open data portals." Journal of Data and Information Quality 8(1), 2016, pp. 1–29.
- 15.J. Umbrich, S. Neumaier, A. Polleres. "Quality assessment and evolution of open data portals." 2015 3rd International Conference on Future Internet of Things and Cloud, 2015, pp. 404–411.
- 16.B. Wentzel, F. Kirstein, T. Jastrow, R. Sturm, M. Peters, S. Schimmler. "An extensive methodology and framework for quality assessment of DCAT-AP datasets." Electronic Government (EGOV 2023), Lecture Notes in Computer Science, 2023, pp. 262–278.
- 17.A. Devaraju, R. Huber. "An automated solution for measuring the progress toward FAIR research data." Patterns 2(11), 2021, 100370 — the tool this study produced is called F-UJI.
