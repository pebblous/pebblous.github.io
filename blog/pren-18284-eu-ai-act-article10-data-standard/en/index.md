---
title: EU AI Act Training Data Standard prEN 18284 Is Still a Draft
subtitle: High-risk AI data rules apply from December 2027, no EU standard yet
date: 2026-11-29
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# EU AI Act Training Data Standard prEN 18284 Is Still a Draft

_High-risk AI data rules apply from December 2027, no EU standard yet_

## Executive Summary

> [!callout]
> prEN 18284, the European standard meant to spell out the training data requirements of EU AI Act Article 10, is still a draft. According to a November 27, 2026 entry on the standards tracker Standards Drift, the document sits with Working Group 3 (WG3) of CEN-CENELEC Joint Technical Committee 21, has not been cited in the Official Journal of the EU, and therefore offers "no presumption of conformity yet." Obligations for Annex III high-risk AI systems apply from December 2, 2027 under the Digital Omnibus, Regulation (EU) 2026/1744.

> EN 18286, the quality management system standard from the same committee, was published in the Official Journal on October 14, 2026. It is the first harmonised standard cited under the AI Act, and providers that follow it are presumed to meet the Article 17 quality management requirement. Article 10, which asks whether training, validation and testing data are "sufficiently representative, and to the best extent possible, free of errors and complete," has no such standard. Providers must decide for themselves how they measured data quality and back that choice with evidence.

> The application dates and the EN 18286 citation are settled by law and the Official Journal. The stage and timeline of prEN 18284 come from a private tracker and could not be checked against the official CEN portal. Until the standard arrives, the measurement framework available in practice is the already published ISO/IEC 5259 series. It has not been cited in the Official Journal as a harmonised standard for Article 10, though, so it carries no legal presumption.

### Key Figures

The four values below rest on different grounds. The 368 days and the single cited standard come from legislation and the Official Journal, and the 8 items are counted from the text of Article 10. The 26 months is counted from a September 5, 2024 start date recorded by Standards Drift, so it depends on a private record.

Sources: [Standards Drift](https://standardsdrift.com/standards/pren-18284/), Commission Implementing Decision (EU) 2026/2274, Regulation (EU) 2024/1689 Article 10

<!-- stat-card -->
**368 days** — Until Annex III duties apply — From publication on November 29, 2026 to December 2, 2027

<!-- stat-card -->
**26 months** — prEN 18284 in drafting — Started September 5, 2024; public enquiry date not announced

<!-- stat-card -->
**1** — AI Act standard in the Official Journal — EN 18286 quality management, cited October 14, 2026

<!-- stat-card -->
**8 items** — Data practices in Article 10(2) — From design choices to data gaps, mandatory with or without a standard

## Digital Omnibus 2026/1744 Pushes Annex III High-Risk Duties to December 2, 2027

The EU has postponed the high-risk obligations of the AI Act (Regulation (EU) 2024/1689) once. The amending regulation known as the AI Omnibus, (EU) 2026/1744, was published in the Official Journal on July 24, 2026 and entered into force on July 27. More than ten compliance outlets, including Obligara, GlobalSuite Solutions and Praxikon, report the same timeline. The application date for Annex III high-risk systems, originally August 2, 2026, moved 16 months later to December 2, 2027.

AI built into products already governed by EU product legislation, such as medical devices and machinery (Annex I), moved a year, from August 2, 2027 to August 2, 2028. The prohibited practices (Article 5) and the obligations for general-purpose AI models already apply. For Annex III systems, the Article 10 data requirements covered here take effect on December 2, 2027. Counted from this article's publication date of November 29, 2026, that leaves 368 days. Standards Drift, counting from November 27, gives the same interval as 370 days.

The two rows in the table below were delayed by different amounts: the first by 16 months, the second by 12. This article concerns the first row. It covers systems used for a high-risk purpose in their own right, without relying on another product regulation.

| Scope | Original date | After the Omnibus |
| --- | --- | --- |
| Annex III high-risk systems (hiring, credit scoring, biometrics, etc.) | 2026-08-02 | 2027-12-02 |
| AI embedded in Annex I regulated products (medical devices, etc.) | 2027-08-02 | 2028-08-02 |

Late standards were behind the postponement. Throughout 2025, observers warned that the harmonised standards needed to turn high-risk requirements into practice would not be ready by the original date, and Pebblous covered that story in "[On August 2, the EU AI Act's switches aren't the ones you think](/report/eu-ai-act-august-2026-deadline-reality/en/)." Ten of the 16 extra months have now passed, and the standard meant to support Article 10 is still a draft.

## Annex III Providers and Deployers in Hiring, Credit Scoring and Biometrics Are Covered

Annex III of the AI Act lists high-risk uses in eight areas: biometrics, critical infrastructure, education and vocational training, employment and worker management, access to essential services such as credit scoring and pricing of life and health insurance, law enforcement, migration and border control, and the administration of justice and democratic processes. Companies outside the EU, including Korean ones, are covered when they place such systems on the EU market or when the system's output is used inside the EU.

The party directly bound by Article 10 is the provider, which builds the system and places it on the market. Article 16 requires providers to meet every requirement in Chapter III, Section 2, and Article 10 sits there. Deployers, which bring a system in and use it, are not exempt either. Article 26(4) requires deployers, to the extent they control the input data, to ensure that data is relevant and sufficiently representative for the intended purpose.

In one place the existence of a harmonised standard changes the procedure itself. Under Article 43(1), a provider of an Annex III point 1 biometric system may choose self-assessment based on internal control only if it has applied harmonised standards or common specifications. If no standard exists, or it was applied only in part, the system must be assessed by a notified body. With no standard covering the data requirements today, the self-assessment route for the Article 10 portion is closed to biometric providers.

## EU AI Act Article 10 Requires Representative, Complete, Error-Free Training, Validation and Test Data

Article 10(3) of the AI Act states that training, validation and testing data sets "shall be relevant, sufficiently representative, and to the best extent possible, free of errors and complete in view of the intended purpose." They must also have the appropriate statistical properties with regard to the persons or groups the system is meant to be used on. Paragraph 4 requires the data to reflect the geographical, behavioural and functional setting in which the system will be used. For systems that do not involve training, paragraph 6 applies these requirements only to the testing data sets.

Paragraph 2 lists eight governance practices to apply to data sets. In the order of the text, they are:

- (a) the relevant design choices about the data
- (b) data collection processes and origin, and for personal data, the original purpose of collection
- (c) preparation operations such as annotation, labelling, cleaning, updating, enrichment and aggregation
- (d) the assumptions about what the data is supposed to measure and represent
- (e) an assessment of the availability, quantity and suitability of the needed data sets
- (f) examination of biases that could affect health, safety, fundamental rights or lead to discrimination
- (g) measures to detect, prevent and mitigate the biases found under (f)
- (h) identification of data gaps or shortcomings that prevent compliance, and how they are addressed

The text says only what must be done. It does not state which metric measures "sufficiently representative" or what value counts as enough. Recital 67 explains that the qualifier "to the best extent possible" acknowledges the need to balance against competing constraints such as privacy protection. prEN 18284 was planned as the document that fills that blank.

The Article 10 requirements also connect to technical documentation. Article 11 and Annex IV point 2(d) require the technical documentation to include datasheets describing the training methods and data sets: the data's provenance, scope and main characteristics, how it was obtained and selected, labelling procedures and cleaning methods. Under Article 99(4), breaching Article 10 can bring an administrative fine of up to 15 million euros or 3% of worldwide annual turnover, whichever is higher.

## prEN 18284, Started September 2024, Has Been a Draft at JTC 21 WG3 for 26 Months

The official title of prEN 18284 is "Quality and governance of datasets in AI." The "pr" prefix marks a European standard that is not yet final. According to Standards Drift, its work item number is JT021037 and it is assigned to WG3 of CEN-CENELEC JTC 21. It entered the drafting stage on September 5, 2024. Its current stage reads "Draft standard: in drafting," it has no Official Journal citation, and its next milestone is "not announced."

The same record shows no movement for this reference since the site began its day-to-day list comparisons on September 28, 2026. Public enquiry is the step at which a draft is opened to the public and national standards bodies submit comments, and prEN 18284 has not reached it. Only after enquiry and a formal vote does it become an EN, and it takes legal effect only when the Commission cites its reference in the Official Journal.
