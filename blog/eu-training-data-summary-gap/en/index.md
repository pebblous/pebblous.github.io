---
title: Big Tech Left Half of the EU
subtitle: A side-by-side of the Article 53 template shows who filled the boxes and who answered in vague prose
date: 2026-08-07
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Big Tech Left Half of the EU

_A side-by-side of the Article 53 template shows who filled the boxes and who answered in vague prose_

## Executive Summary

> [!callout]
> One of the duties the EU AI Act places on general-purpose AI (GPAI) providers is to "draw up and make publicly available a sufficiently detailed summary of the content used to train the model" (Article 53(1)(d)). That duty has been law since August 2, 2025. What arrived on August 2, 2026 was not the duty but the means to enforce it: from that day the AI Office can demand documents, order corrections, and impose fines. This piece compares the summaries that were actually published in the moment just before that enforcement power switched on.

> Put side by side, they reveal a gap. Google, Meta, and Microsoft filled in the boxes of the standard template the AI Office built, and OpenAI filed a training-data summary too. Anthropic, Mistral, and xAI, by contrast, replaced the boxes with narrative phrasing along the lines of "a proprietary mix of publicly available information and licensed data." Yet even the filled-in summaries do not permit real comparison. Almost every provider checks "publicly available datasets" and reports "more than 10 trillion tokens," and from that point the answers stop distinguishing anyone.

> So the question this piece raises is not about fines. When Trinity College Dublin and the Mozilla Foundation scored those summaries, Code-of-Practice signatories edged out non-signatories only marginally, and even that edge sat in deployer-facing documentation rather than the training-data disclosure the law actually targets. If a signature badge is no proxy for due diligence, then for a model trying to enter the European market the real risk is not the fine but whether it has actual data-lineage records to put in the template's boxes.

Four numbers compress the shape of this story before the rest of it begins: the size of the penalty that genuinely goes live on August 2, how often a summary must be refreshed, the share of providers who replaced the boxes with prose, and the count of actual fines confirmed since enforcement switched on.

<!-- stat-card -->
**3% of revenue** — GPAI penalty cap live Aug 2 — Greater of €15M or 3% of turnover · Article 101

<!-- stat-card -->
**6 months** — Summary refresh cycle — Sooner on material change · not a one-off filing

<!-- stat-card -->
**3 / 7** — Providers who hedged in prose — Anthropic · Mistral · xAI · the rest filled the template

<!-- stat-card -->
**0** — Confirmed fines or probes — As of 2026-08-07 · the mechanism just came online

## Not a New Duty, but New Teeth

The line going around about August 2 — "now you have to disclose your training data" — has the sequence backwards. The duty for a GPAI provider to summarize and publish the content used in training has been a legal obligation since August 2, 2025, the day Chapter V of the EU AI Act took effect. It was mandatory from the start, not a recommendation. The year that followed was simply an adjustment window in which the AI Office held no supervisory or enforcement powers.

What changed on August 2, 2026 is exactly those powers. From that day the AI Office can request documents from providers, evaluate models, order corrective action, restrict or recall products from the market, and levy fines. The ceiling is the greater of €15M or 3% of worldwide turnover (Article 101). So "the grace period is over" means the grace on enforcement ended, not the grace on the obligation. The rules were already there a year ago; now they have teeth.

![The Berlaymont building in Brussels, headquarters of the European Commission, the body the AI Office belongs to](./image/img-01-berlaymont.jpg)
*▲ The Berlaymont building in Brussels, headquarters of the European Commission — the AI Office is a body within it | Source: [Acediscovery, Wikimedia Commons (CC BY 4.0)](https://commons.wikimedia.org/wiki/File:Berlaymont_EU_Building-Brussels.jpg)*

That distinction shapes a practical judgment. The arrival of enforcement power itself was already covered in [our report last July](https://blog.pebblous.ai/report/eu-ai-act-august-2026-deadline-reality/en/). So this piece does not repeat "what switches on August 2." With the enforcement tools now in hand, it looks instead at what those tools will be aimed at — the state the already-published summaries are actually in.

## How "Publish a Summary" Became a Form

The article asks for a "sufficiently detailed summary." On its face the phrase reads like free-form writing. It is not. When the AI Office released its "Explanatory Notice and Template for the Public Summary of Training Content" on July 24, 2025, the summary became a standard form with a fixed set of boxes to fill. In practice, "publish a summary" turned into "fill in these boxes."

The template asks roughly for the following: the modality of the data (text, image, audio, and so on), the scale (size bands), languages, collection period, identifiers for the main public datasets used, the specifications and purpose of web crawlers, whether commercially licensed data was used, and how text-and-data-mining opt-outs were honored. Nor is it a write-once document. It must be refreshed every six months, or sooner if there is a material change such as further training.

![The AI Office's official Article 53(1)(d) training-data summary template — a checkbox form for modality and scale](./image/img-02-template-annex.jpg)
*▲ The actual Article 53(1)(d) template (Annex) the AI Office published on July 24, 2025 — a checkbox form for modality and scale | Source: [European Commission, C(2025) 8311 final](https://digital-strategy.ec.europa.eu/en/library/explanatory-notice-and-template-public-summary-training-content-general-purpose-ai-models)*

> [!callout]
> The template carries a compromise by design. To protect trade secrets, it permits "narrative description." That gives providers room to substitute sentences for quantitative figures. Most of the gap the next section describes flows from exactly this room.

## Those Who Filled It, Those Who Hedged

The researcher Kieran Maynard placed 11 summaries from 7 providers side by side. The result splits into two camps. Google (Gemini 3 Pro), Meta (Muse Spark), Microsoft (Phi-4), OpenAI (GPT-5.5), and the open-source side such as Swiss AI, SpeakLeash, and Hugging Face filled in the template's boxes. Anthropic (Fable 5), Mistral, and xAI, by contrast, replaced the boxes with narrative phrasing along the lines of "a proprietary mix of publicly available information and licensed data."

| Provider | Representative model | Summary form |
| --- | --- | --- |
| Google | Gemini 3 Pro | Template fields completed |
| Meta | Muse Spark | Template fields completed |
| Microsoft | Phi-4 | Template fields completed |
| OpenAI | GPT-5.5 | Template completed (copyright section: see §5) |
| Hugging Face · SpeakLeash · Swiss AI | Open-source models | Template fields completed |
| Anthropic · Mistral · xAI | Fable 5, others | Replaced with narrative prose |

Fairness requires one caveat. Many of the models from the three that answered in prose are existing models released before August 2, 2025, whose compliance deadline runs to 2027. They are not in breach; they are still inside the grace window. Even allowing for that, the difference in direction remains. At the same moment, some filled in the boxes and some wrote sentences.

Maynard's sharper point is about the side that filled in. Even the completed summaries are hard to compare against one another. Almost every provider checks "publicly available datasets." The category is loosely defined, absorbing everything from curated research corpora to indiscriminate web scraping, so the checkmark alone distinguishes nothing. The scale box is the same: most report "more than 10 trillion tokens," and past that point the number loses its power to differentiate.

The meaningful differences come from elsewhere: whether user data was used for training (OpenAI and Meta acknowledge it; open-source labs deny it), commercial licensing and crawling practices, and whether a model is text-only or multimodal. The trouble is that there is no registry collecting the summaries. They are scattered across each company's website in its own format, with no external verification. There are self-reported checkboxes but rarely any proportions or quantitative detail. Maynard likened the state of things to a "treasure hunt" — better than before, but stopping short of real comparability.

## Signing Said Nothing About Transparency

A story that could have ended as impressionistic critique was backed with numbers by academic work: a paper from Trinity College Dublin (ADAPT Centre) and the Mozilla Foundation, presented at the 2026 ACM FAccT conference. The authors adapted best practices in software-documentation quality control to build an evaluation framework for measuring the quality of Article 53(1)(d) summaries. It was designed to be usable both by a developer drafting a summary and by the Commission judging "good-faith compliance."

![First page of the Trinity College Dublin–Mozilla Foundation paper assessing Article 53(1)(d) training-data summary quality](./image/img-03-facct-paper.jpg)
*▲ Blankvoort, Pandit & Gahntz, "Quality Assessment of Public Summary of Training Content for GPAI models" (ACM FAccT 2026) | Source: [arXiv:2603.13270](https://arxiv.org/abs/2603.13270)*

This framework is not an abstract rubric; it actually separates pass from fail. Of five summaries reviewed in the early disclosure period, Microsoft's Phi-model summary did not clear the bar, while Hugging Face's SmolLM family passed. Recall from Section 3 that Phi was classified among those that "filled in the template," and the point sharpens: filling in the boxes and having those boxes clear a quality bar are two different things. The fact that a form was completed guarantees nothing on its own.

The core finding goes straight at procurement practice. Companies that signed the GPAI Code of Practice did, overall, score higher than those that did not. But the gap was marginal, and the advantage came almost entirely from a single area — deployer-facing documentation (downstream information). On the comparable MÖVE benchmark, signatories averaged 27.6 against non-signatories' 26.3, a small difference; broken down, the use-and-deployment area widened to 63.0% versus 46.8%, while on the upstream disclosure the regulation actually targets — training data, copyright-related data use, bias mitigation, compute consumption — signing made no difference at all.

> [!callout]
> So the paper concludes explicitly: a surface compliance indicator such as signing the Code of Practice should not be treated, in procurement decisions, as a proxy for documentation depth. A signature badge may signal "this vendor writes good deployment guides," but it is no guarantee of "this vendor can actually account for its training-data sources." Due diligence has to look at the documents themselves, not the badge.

## The Box OpenAI Left Blank

OpenAI is the case that shows the blank box is an industry pattern rather than one company's lapse. On July 31, two days before enforcement power took effect, OpenAI issued a statement on its EU AI Act compliance. It went into detail on its safety framework, a provenance-watermarking partnership, and cybersecurity cooperation with European institutions. Yet the copyright chapter — the training-data summary and a documented copyright-compliance policy — was missing from the statement entirely.

This does not mean OpenAI failed to file the training-data summary itself (see the table in Section 3). What stands out is that, in the very venue where it explained its compliance to the public, it quietly skipped the most sensitive box. TechPolicy.Press diagnosed this as "threading the line between good-faith compliance and minimal disclosure," naming OpenAI, Google, and xAI together — a shared posture the large labs adopted before the Commission held fining power.

That line-threading was signaled from the voluntary-signing stage onward. On the GPAI Code of Practice, xAI signed only the security chapter and explicitly excluded the transparency and copyright chapters, while Meta refused to sign at all. Right at the threshold of commitment, the two most sensitive boxes — transparency and copyright — were the first to slip out. The quiet omission of the copyright item in the pre-enforcement statement is merely an extension of the same move.

There is a retreat in the voluntary regime behind it. According to the civil-society group COMMUNIA, the draft GPAI Code of Practice required disclosure of copyright policies and rights-reservation measures, but the final version demoted these to a bilateral obligation between provider and rightsholder and lowered disclosure to a recommendation. Civil society criticized this as a rollback of transparency. This institutional room is part of why the copyright box, in particular, is so easily left blank.

## Heavier Than a Fine

Since August 2, there has been no confirmed report that the AI Office has actually imposed a fine or opened a formal investigation (as of August 7, 2026). So the tense of this piece is not "a fine has landed." It is that the mechanism has just come alive, and that the already-published documents reveal who is prepared and who is not. And it is here that the location of the real risk shifts.

A fine arrives after a violation. What arrives before it is due diligence. The moment the Trinity–Mozilla paper concluded that "signing is no proxy for due diligence," any company procuring or deploying AI in Europe has no choice but to move toward asking for actual data lineage rather than a signature badge. It means asking a vendor not whether it has "the legal craft to write a good training-data summary" but whether it has "the real records to put in the summary's boxes."

Those records are source logs, license agreements, crawler histories, and opt-out reconciliation records. They share one trait: once a model has finished training, you cannot make them retroactively. They are an accumulated asset that has to pile up as a by-product while the pipeline runs. The difference between a provider that hedged the template's boxes in prose and one that filled them quantitatively reduces, in the end, to whether that accumulation was done. A model without lineage loses at due diligence before any fine — because it has nothing to write in the boxes.

> [!callout]
> The work of accounting for data sources and rights — provenance — is moving out of the compliance binder and into fine-backed due diligence. The summary field is only the last output of that accumulation. The real contest is already decided at the moment data is collected and labeled, in what was kept as a record.

## References

### Academic

- 1.Blankvoort, D., Pandit, H., & Gahntz, M. (2026). "[Quality Assessment of Public Summary of Training Content for GPAI models required by AI Act Article 53(1)(d)](https://arxiv.org/pdf/2603.13270)." ACM FAccT 2026.

### Industry & Press

- 2.Maynard, K. (2026). "[What the EU AI Act's Training-Data Summaries Do and Don't Reveal](https://kieranmaynard.com/blog/eu-ai-act-training-transparency.html)." Kieran Maynard Blog.
- 3.TechPolicy.Press. (2026). "[How Big AI Developers Are Skirting a Mandate for Training Data Transparency](https://www.techpolicy.press/how-big-ai-developers-are-skirting-a-mandate-for-training-data-transparency/)."
- 4.COMMUNIA Association. (2025). "[Our thoughts on the final version of the GPAI Code of Practice](https://communia-association.org/2025/07/21/our-thoughts-on-the-final-version-of-the-gpai-code-of-practice/)."
- 5.WilmerHale. (2025). "[European Commission Releases Mandatory Template for Public Disclosure of AI Training Data](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/european-commission-releases-mandatory-template-for-public-disclosure-of-ai-training-data)."

### Official Documents

- 6.EU Artificial Intelligence Act. "[Article 53: Obligations for Providers of General-Purpose AI Models](https://artificialintelligenceact.eu/article/53/)."
- 7.EU Artificial Intelligence Act. "[Enforcement of Chapter V under the EU AI Act](https://artificialintelligenceact.eu/enforcement-of-chapter-v-under-the-eu-ai-act/)."
- 8.European Commission. "[Enforcement of the AI Act](https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act)." Shaping Europe's digital future.
