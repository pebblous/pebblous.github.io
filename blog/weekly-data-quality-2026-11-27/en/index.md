---
title: [Weekly Data Insight] Korea Mandates National R&D Data Registration, Data Quality Goes to Specialist Centers (2026 Week 48)
subtitle: Nov 27, 2026 issue: Korean R&D data registration starts June 2027
date: 2026-11-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# [Weekly Data Insight] Korea Mandates National R&D Data Registration, Data Quality Goes to Specialist Centers (2026 Week 48)

_Nov 27, 2026 issue: Korean R&D data registration starts June 2027_

## Executive Summary

> [!callout]
> Korea's Ministry of Science and ICT approved a policy framework that will require national research and development (R&D) projects starting after June 2027 to register their research data. The Personal Information Protection Commission (PIPC) published a draft amendment to the Enforcement Decree of the Personal Information Protection Act setting the conditions for using raw personal data to train AI. Chinese state media reported that ISO/IEC 5259-4, an international standard on AI training data quality whose development China led, serves as a technical reference for AI conformity assessment in more than 30 European countries.

> The PIPC's future forum discussed a data benefit sharing scheme for the first time, though no law yet provides for it. Open-fMIND, a reprocessing of 322 public brain imaging studies, was released, and NH NongHyup Bank became the first Korean financial company to earn the top grade of the national quality certification for unstructured data.

### Key Figures

Two dates and two counts from this week's news. The research data mandate and the AI exception both begin in 2027. "More than 30 countries" is the reported reach of ISO/IEC 5259-4 as a reference, and 322 is the number of public studies Open-fMIND reprocessed.

Sources: [The Asia Business Daily](https://view.asiae.co.kr/article/2026112709423112596) (2026-11-27) · [PIPC press release](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=D010030000&nttId=12663) (2026-11-23) · [ChainCatcher](https://www.chaincatcher.com/en/article/2308194) (2026-11-26) · [Open-fMIND paper](https://arxiv.org/abs/2611.21215)

<!-- stat-card -->
**June 2027** — Research data registration begins — Applies to national R&D projects launched after this date; not retroactive to ongoing projects

<!-- stat-card -->
**Mar 9, 2027** — AI exception takes effect — Comments on the draft decree are accepted until January 4, 2027

<!-- stat-card -->
**30+ countries** — Using ISO/IEC 5259-4 as a reference — As a technical reference for AI conformity assessment in Europe, per Chinese reports

<!-- stat-card -->
**322** — Studies reprocessed by Open-fMIND — No new scans; only public brain imaging data, processed one way

## Korea's Science Ministry Makes R&D Data Registration Mandatory for New Projects From June 2027

Korea's Ministry of Science and ICT approved the "Basic Direction for National Research Data Policy" at the 15th Ministerial Meeting on Science and Technology, held in writing on November 25–26, [The Asia Business Daily](https://view.asiae.co.kr/article/2026112709423112596) reported on November 27. The framework follows up on Korea's national research data act, which takes effect in June 2027, and sets out how research data is managed from production through release and reuse.

Researchers will submit a data management plan when applying for or signing a project agreement, and must register the data needed to verify and reproduce their results before the final evaluation. The obligation covers two kinds of data: data that can verify the results stated in the final report, and data produced by large research facilities designated by the government. High-risk "challenge" projects recognized for their innovation, and their follow-up projects, must also register intermediate research data so that lessons from failure can be reused. The unit of registration is a dataset made up of the research data, metadata describing it, and supplementary data needed to interpret it.

Domain-specific specialist centers will be selected through an open call in the first half of 2027, judged on their capacity for data standardization and quality management. Registered data is open by default, with exceptions for legitimate reasons such as national security or trade secrets. Researchers and institutions that register and share data in good faith will earn extra points in evaluations based on how much their data is used. Completed and ongoing projects register only if the researcher chooses to.

Because a dataset complete with metadata and supplementary data is due before the final evaluation, labs that take on projects after June 2027 will need to document their data from the start of the project to meet the deadline. We could not find the URL of the ministry's own press release, so the content was cross-checked against a [Hellot](https://www.hellot.net/news/article.html?no=116693) article covering the same announcement.

## PIPC Publishes Draft Decree for Korea's PIPA AI Exception, Setting Conditions for Raw Personal Data

The Personal Information Protection Commission put a partial amendment to the Enforcement Decree of the Personal Information Protection Act out for [public comment](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=D010030000&nttId=12663) on November 23. It fills in the details of the AI exception, which was promulgated as Act No. 21910 on September 8, 2026 and takes effect on March 9, 2027. The exception allows lawfully collected personal data to be used for AI development beyond the purpose for which it was collected, subject to review and resolution by the PIPC.

The draft groups the safeguards into four sets: appoint a person responsible for the data used under the exception and adopt and carry out an internal management plan; prevent use beyond what the PIPC approved; restrict and control access rights; and destroy the data once it is no longer needed. In four cases, including the use of sensitive information or unique identifiers, a risk assessment must be completed before the review. If processing does not begin within six months of the resolution, all processing is restricted unless there is a special reason.

The decree is still a draft. Comments are accepted until January 4, 2027, after which review by the Ministry of Government Legislation and a Cabinet resolution remain. Companies that want to train models on raw personal data will need to have the responsible person, internal management plan, access controls and destruction procedure documented before they apply for review.

For details, see [Korea's PIPA AI Exception Lets You Train on Raw Data If You Can Prove It](https://blog.pebblous.ai/blog/korea-pipa-ai-exception-enforcement-decree/en/).

## China-Led AI Training Data Quality Standard ISO/IEC 5259-4 Becomes a Reference in 30+ European Countries

ISO/IEC 5259-4:2024, an international standard on AI training data quality whose development China led, has been adopted by relevant European bodies and serves as a technical reference for AI conformity assessment in more than 30 European countries, China's CCTV reported on November 26. [ChainCatcher](https://www.chaincatcher.com/en/article/2308194) and Taiwan's [MoneyDJ](https://tw.stock.yahoo.com/news/%E9%99%B8%E7%89%BD%E9%A0%AD%E6%8E%A8ai%E8%A8%93%E7%B7%B4%E6%95%B8%E6%93%9A%E8%B3%AA%E9%87%8F%E6%A8%99%E6%BA%96-%E6%AD%90%E6%B4%B2%E9%80%BE30%E5%9C%8B%E7%B4%8D%E6%8A%80%E8%A1%93%E5%8F%83%E8%80%83-072000510.html) carried the report the same day.

The standard was developed by China's National Data Standardization Technical Committee (全国数据标准化技术委员会) under the guidance of the National Data Administration (国家数据局). It sets quality management procedures and technical requirements across the whole data life cycle, including the collection, labeling and quality assessment of AI training data. The reports did not name the European bodies that adopted it or list the 30-plus countries.

According to MoneyDJ, an official of China's State Administration for Market Regulation (市场监管总局) said China is leading the development of 29 foundational international standards in data management, human-machine interaction, and safety and trust, along with 49 application standards in areas such as smart cities and smart manufacturing. Companies selling AI products in Europe now have more reason to organize their records of training data collection, labeling and inspection along the items of this standard.

## PIPC Future Forum Holds First Discussion of Data Benefit Sharing, With No Law Behind It Yet

The Personal Information Protection Commission said in a [press release](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=C020010000&nttId=12672) that the fifth plenary meeting of its "2026 Personal Information Future Forum" on November 26 discussed a proposed data benefit sharing scheme. Choi Sun-mi, a principal researcher at the Electronics and Telecommunications Research Institute (ETRI), presented a benefit sharing model linked to Korea's MyData system and proposed piloting it first in fields tied to social problems, such as care services and emergency transport. The press release described the scheme as returning part of the revenue or benefit generated from personal data to the people the data describes.

Forum members agreed that for the scheme to work in practice, a fair and transparent way to calculate the value of data and incentives for companies to join voluntarily must come first. Data benefit sharing is still an idea: there is no promulgated law, no draft decree out for comment and no bill before the National Assembly.

A system for putting a price on data already exists. The data valuation system under Article 14 of the Framework Act on Data Industry Promotion and Utilization (the Data Industry Act) has been in operation since April 20, 2022, and on March 2, 2023 the Ministry of Science and ICT designated the first four valuation bodies: the Korea Technology Finance Corporation, NICE D&B, the Korea Credit Guarantee Fund and the Korea Institute of Science and Technology Information (KISTI).

For details, see [Under Korea's Data Benefit Sharing, Who Puts a Price on Your Data?](https://blog.pebblous.ai/blog/korea-data-benefit-sharing-valuation/en/)

## Public Brain Imaging Corpus Open-fMIND Matches or Beats a UK Biobank Model on Three of Six Tasks

Barbano and colleagues released Open-fMIND on [arXiv](https://arxiv.org/abs/2611.21215) and [Hugging Face](https://huggingface.co/datasets/cbarbano/open-fmind), reprocessing 322 functional magnetic resonance imaging (fMRI) studies scattered across the public repository OpenNeuro with a single version of the preprocessing tool fMRIPrep, 25.2.3. It covers 11,379 participants and 4.35TB. No new scans were taken.

The team queried 1,066 human fMRI datasets on OpenNeuro, downloaded 387, and kept 322 after screening. A brain model pretrained on this corpus was compared on six tasks with a model of the same architecture pretrained on the UK Biobank. It came out ahead on two tasks, tied on one, and trailed by 1.1 to 2.9 percentage points on three. Each model was pretrained only once, so small differences are not conclusive.

Each run comes with sidecar files recording the atlas and denoising settings used, the ID and version of the source OpenNeuro dataset, and the fMRIPrep container details. Licenses vary by dataset: 251 are CC0 and the rest fall under PDDL, the CC-BY family and others, so anyone planning commercial use should check the per-dataset license list first.

For details, see [Can Open-fMIND Match the UK Biobank Using Only Public Brain Scans?](https://blog.pebblous.ai/blog/open-fmind-fmri-pretraining-corpus/en/)

## NH NongHyup Bank Earns Top Grade in Unstructured Data Quality Certification, a First for Korean Finance

NH NongHyup Bank received "Complex-type Class A," the top grade of Korea's government-accredited data quality certification, for unstructured data such as call recordings and text, [TTL News](http://www.ttlnews.com/news/articleView.html?idxno=3167079) reported on November 27. It is the first financial company in Korea to earn this grade for unstructured data. The audit was carried out by a data quality certification body designated by the Ministry of Science and ICT.

Data quality certification is a scheme under the Data Industry Act that examines the accuracy and consistency of data and the reliability of its management system. Last year NH NongHyup Bank also received the top grade for structured data quality and an upper grade (Level 4) for its data management system. The bank plans to prepare customer call recordings, chat logs and documents for direct use in AI training, and to apply them to wealth management AI, an AI contact center (AICC) and internal workflow automation agents. It also said it would expand data sharing through the Financial Data Exchange and data combination with other industries.

The report does not give the volume of certified data or results for each audit item. That unstructured data such as voice and text can be graded under the same national certification framework as structured data gives other financial companies a reference case for using call center data in AI training.

More articles from the data quality series are collected on the [Data Quality series](https://blog.pebblous.ai/series/data-quality/en/) hub.
