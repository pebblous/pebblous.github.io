---
title: FTC Frames Undisclosed AI Output Steering as Consumer Deception
subtitle: A draft policy statement follows an executive order all the way to the Colorado AI Act, with the comment period closing July 31
date: 2026-07-09
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# FTC Frames Undisclosed AI Output Steering as Consumer Deception

_A draft policy statement follows an executive order all the way to the Colorado AI Act, with the comment period closing July 31_

## Executive Summary

> [!callout]
> On July 1, 2026, the U.S. Federal Trade Commission released a draft policy statement titled "Suppression of Accuracy in Artificial Intelligence Systems." Its central claim is a single one. If an AI company quietly steers a system's outputs toward a particular goal without telling consumers, that alone may amount to consumer deception prohibited under Section 5 of the FTC Act. Until now, AI "accuracy" was a matter of benchmark scores, not legal liability. That line has now crossed into consumer protection law, for the first time at the federal level.

> One caveat matters: this is neither a finalized rule nor an enforcement action. It is a non-binding draft the Commission released on a 2–0 vote, and the comment period closes on July 31. The statement draws a clear line between hallucinations arising from technical limits and deliberately engineered output steering, and it targets only the latter. It does not ban bias or steering outright, either. It leaves open an escape route: liability can be avoided by disclosing to consumers clearly and persistently.

> But the demand to "disclose" immediately raises a harder question. To prove what was adjusted and why, a company needs a preserved record of the lineage of its training and fine-tuning data along with its steering decisions. Auditing outputs alone cannot even distinguish deliberate steering from hallucination. The moment regulation asks for accuracy, the problem returns to data governance.

<!-- stat-card -->
**78.5%** — Made a real decision using AI information — Clear Spark Digital, 2026-04 (2,127 U.S. adults)

<!-- stat-card -->
**17.4%** — Say they always verify — The rest do not verify every time

<!-- stat-card -->
**13%** — Fully trust AI — Klaviyo consumer trust survey, 2026

<!-- stat-card -->
**7/31** — Comment period closes — Non-binding draft, released on a 2–0 vote

## What Was Announced

On July 1, 2026, the FTC announced a draft policy statement titled "Suppression of Accuracy in Artificial Intelligence Systems." It was published in the Federal Register on July 7 (document number 2026-13628), with a comment deadline of July 31. The Commission released the draft on a 2–0 vote, and FTC Chairman Andrew Ferguson is reported to have framed it as a response to "subverting AI systems for ideological ends."

The statement did not emerge from a vacuum. Its legal root is Executive Order 14365 ("Ensuring a National Policy Framework for Artificial Intelligence"), signed on December 11, 2025. That order directed the FTC Chairman to clarify "how state laws requiring AI models to alter accurate outputs conflict with federal law," and this policy statement is the direct follow-up.

![Official portrait of FTC Chairman Andrew Ferguson](./image/img-01-ftc-commissioner-ferguson.jpg)
*▲ FTC Chairman Andrew Ferguson | Source: [Wikimedia Commons (FTC, Public Domain)](https://commons.wikimedia.org/wiki/File:Andrew_N._Ferguson,_FTC_Commissioner.jpg)*

> [!callout]
> The characterization matters. This is neither a finalized rule nor an enforcement action. It is only a signal of direction on how the FTC intends to interpret and apply Section 5 going forward; it creates no new legal obligation on its own. A 30-day comment period, followed by the Commission settling on a final position, still lies ahead. Any flat statement that "the FTC has banned AI output steering" is inaccurate at this stage.

One point to add. The FTC's official press release, the full text of the statement in PDF, and the Federal Register all block automated access, so the details cited in this article were compiled by cross-checking analyses and summaries from legal and compliance outlets (Reed Smith, Consumer Financial Services Law Monitor, and others). Where we could not verify against the primary text directly, we mark it as "reported" or "understood."

## Why It Is "Deception"

The framework the FTC uses to find deception is old and simple. Deception exists when there is a representation, omission, or practice that misleads a reasonable consumer, and that misleading affects the consumer's material judgment or conduct. No new law is required. The Commission simply aimed Section 5, which it has applied to advertising and commerce for more than 40 years, at AI outputs.

The statement's logic runs like this. For years, AI companies have represented, explicitly or implicitly, that their systems produce the most accurate outputs possible within the constraints of technology and resources. Consumers therefore have a reasonable right to expect that AI aims for truthful and accurate answers. If a company betrays that expectation and trains or configures a model toward an undisclosed goal, then regardless of whether the motive is voluntary or compliance with a state law, that may constitute consumer deception in violation of Section 5.

### 2.1. Hallucination and Deliberate Steering Are Not the Same

Here the statement heads off an easy misreading. It states explicitly that hallucination arising from technical and resource limits is not a design decision and therefore is not, by itself, a Section 5 problem. The target is not a model's imperfection but deliberately engineered steering. "If AI gets something wrong, it is all illegal" is not the statement's intent. What it aims at is the act of intentionally twisting an output that could have been accurate, in service of a different goal.

### 2.2. The Escape Route Is Disclosure

The statement does not ban bias or steering outright. The structure is that a company may prioritize goals other than accuracy, but can avoid liability if it tells consumers clearly, prominently, and persistently. It makes a point of saying that a single line buried deep in the terms of service, or a one-time disclosure hidden somewhere, is not enough.

Criticism of the statement has already surfaced. Read literally, the wording could sweep even the work of training a chatbot not to produce answers that discriminate against a particular group — a step the industry has long treated as an ordinary safety guardrail — into "deliberate steering" and expose it to the same Section 5 test. Just where legitimate safety design ends and distortion for an undisclosed goal begins is a boundary the statement has yet to draw sharply. In effect, what the regulation targets and what practitioners have done in the name of safety sit inside the same sentence.

> [!callout]
> The moment accuracy is judged not by benchmarks but by whether it is deceptive, the question automatically shifts to "then how do you prove accuracy?" Yet the statement itself offers no answer. It only says "disclose," without specifying what to disclose or how to make it verifiable. We return to this gap in the final section.

## The Preemption Theory Aimed at Colorado

Had the statement spoken only of consumer deception, it would have ended as compliance news. What amplified the controversy lies elsewhere. The statement singled out the Colorado AI Act as an example of a state law that pressures companies to suppress output accuracy in order to avoid disparate-impact liability. And it concluded that such a state law is impliedly preempted to the extent it conflicts with the federal regulatory scheme Section 5 establishes.

The two-year arc around the Colorado AI Act is a drama in itself. Laid out chronologically, the throughline becomes visible.

![Colorado State Capitol building, Denver](./image/img-02-colorado-state-capitol.jpg)
*▲ Colorado State Capitol (Denver) — where the Colorado AI Act was enacted and amended | Source: [Wikimedia Commons (Hustvedt, CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:Denver_capitol.jpg)*

- **2024-05** — Colorado enacts SB 24-205.
- **2025-08** — SB 25B-004 pushes the effective date back to 2026-06-30.
- **2025-12** — Executive Order 14365 creates an "AI Litigation Task Force" within the DOJ and names the Colorado AI Act as a problem case.
- **2026-04** — xAI sues in federal district court claiming the Colorado AI Act violates free speech (First Amendment); the DOJ joins shortly after.
- **2026-04** — A federal magistrate stays enforcement of the Colorado AI Act (the state attorney general also consents to the stay).
- **2026-05** — Colorado's governor signs SB 26-189, repealing the earlier SB 24-205 and replacing it with an automated decision-making technology (ADMT) disclosure framework (effective 2027-01-01).
- **2026-07** — The FTC policy statement notes that even the revised Colorado law could be a target for preemption.

The last line is the crux. Even after Colorado repealed the offending law itself and switched to a new framework, the FTC took the view that the act of complying with the revised law could itself be read as "deliberate suppression of accuracy." For a company, this means it could be caught between complying with state law and complying with the federal standard, each pushing against the other.

> [!callout]
> That said, this preemption theory has never been tested in court. The FTC Act does not expressly preempt state law, and what the statement leans on is "implied conflict preemption." This is a demanding doctrine that holds only if a court accepts that it is genuinely impossible to comply with both the federal and state demands at once. Legal experts broadly note that state governments are likely to contest the claim. For now it is a direction, not a ruling.

## How Much Do Consumers Actually Verify — The Numbers Diverge

At the base of the FTC's logic lies the premise that consumers accept AI answers largely as given. In this connection, a figure is often cited: "more than 90% of consumers accept AI answers without verifying them." Yet within what this article could confirm, that 90% figure has no traceable basis, neither in the text of the FTC statement nor in the legal analyses covering it. If an article about accuracy cites an unverified number, it becomes an instance of the very problem at hand. So we look instead at surveys with clear sources.

- **Clear Spark Digital (2026-04, 2,127 U.S. adults)** — 78.5% made a real decision based on information AI gave them. Yet only 17.4% said they "always verify." Flipped around, most do not verify every time.
- **Yext (2026)** — Even after receiving an AI recommendation, 62% searched again on Google, 58% visited the business's own site directly, and 52% clicked the source AI cited. Closer to "trust but verify."
- **Klaviyo (2026)** — Only 13% said they "fully trust" AI.

The numbers do not point one way. Both a segment that rarely verifies and a segment that habitually re-searches exist at the same time. Yet this very tension supports the FTC's logic. If survey findings on consumer verification behavior themselves diverge this much, it means consumers find it hard to judge for themselves what an "accurate output" is. What the FTC leans on is not "consumers trust blindly 100%" but "consumers reasonably expect that AI aims for accuracy." The harder the judgment, the larger that expectation grows.

> [!callout]
> The practical lesson here is not to lean on any single statistic. The consumer expectation that AI aims for accuracy is proven not by a particular percentage in a particular survey, but by how a company has represented itself in the market. The center of gravity of regulation moves away from consumer trust figures and toward a company's representations and the evidence that backs them.

## It Comes Back to Data Governance

In sum, the FTC has translated accuracy into the language of consumer protection but left open how accuracy is to be proven. That gap is where this becomes meaningful for data practitioners. To show what was adjusted and why, you need a preserved record of the lineage of training and fine-tuning data and of the decisions that produced each adjustment. Auditing the finished model's outputs after the fact cannot even tell whether they reflect deliberate steering or plain hallucination. The FTC itself insisted the two must be distinguished — and the only evidence for that distinction lives inside the training pipeline.

This pattern is not unique to the United States. The current in which asking for accuracy asks for data governance recurs on three fronts. The EU, in Article 10 of the AI Act, requires documented data governance for the training, validation, and testing datasets of high-risk AI, and that provision faces full enforcement in August 2026. Korea has had its AI Basic Act in force since January 22, 2026.

![Berlaymont building, European Commission headquarters, Brussels](./image/img-03-eu-berlaymont-building.jpg)
*▲ The Berlaymont building (Brussels), European Commission headquarters — source of the AI Act's Article 10 data governance rules | Source: [Wikimedia Commons (acediscovery, CC BY 4.0)](https://commons.wikimedia.org/wiki/File:Berlaymont_EU_Building-Brussels.jpg)*

### 5.1. Ex-Ante Regulation and Ex-Post Enforcement Take Different Roads

The approaches contrast. Korea and the EU lean toward ex-ante regulation that classifies high-risk AI in advance and imposes obligations; the U.S. FTC has chosen ex-post enforcement, applying an existing anti-deception law after the fact. The starting points differ, but the demands companies face converge in a similar way. In the end, you have to document the provenance and adjustment history of your data and be able to produce it in verifiable form when needed. The outcome — "disclose accuracy" — is the same, and what holds up that outcome, in any jurisdiction, is data governance.

For data leaders and heads of ML engineering, the fact that this statement is not a finalized rule is less a reprieve than preparation time. You cannot retroactively manufacture data lineage after a regulation is finalized. Only an organization that keeps a record of what data it trained on, what tuning it applied and why, and who made each decision and when, can answer the demand to "prove your accuracy." That record only becomes usable if it is built up before the regulation arrives.

<!-- stat-card -->
****Editor's note.** Pebblous is building Data Greenhouse, which treats the creation, diagnosis, and governance of data as a single pipeline. If you are interested in the problem of preserving data lineage and adjustment history as operational evidence, you can also look through the [related project record](https://blog.pebblous.ai/project/SyntheticData/en/). This note is background context, separate from the analysis in the body.**

## Frequently Asked Questions

<!-- stat-card -->
**Did the FTC ban AI output steering?** — Not yet. What was released on July 1, 2026 is not a finalized rule or an enforcement action but a non-binding draft policy statement. The Commission released it on a 2–0 vote, and the comment period closes on July 31. It is only a signal of how the FTC intends to apply Section 5 of the FTC Act going forward; it creates no new legal obligation on its own.

<!-- stat-card -->
**If AI gives a wrong answer, is it all consumer deception?** — No. The statement clearly distinguishes hallucination arising from technical and resource limits from deliberately engineered output steering. It states explicitly that hallucination is not a design decision and therefore is not, by itself, a Section 5 problem. What it targets is the act of intentionally twisting an output that could have been accurate, for an undisclosed goal.

<!-- stat-card -->
**How can a company avoid liability?** — Disclosure. The statement does not ban bias or steering outright. The structure is that even if a company prioritizes goals other than accuracy, it can avoid liability by telling consumers clearly, prominently, and persistently. It makes a point of saying that a single line buried in the terms of service or a one-time disclosure is not enough.

<!-- stat-card -->
**Why single out the Colorado AI Act?** — The FTC viewed the Colorado AI Act as an example of a state law that pressures companies to suppress output accuracy in order to avoid disparate-impact liability. Its conclusion is that such a state law is impliedly preempted to the extent it conflicts with the federal regulatory scheme Section 5 establishes. Notably, even though Colorado had already repealed the offending law and replaced it with a new framework, the FTC held that even complying with the revised law could be a target for preemption.

<!-- stat-card -->
**Is this preemption theory settled?** — No. It has never been tested in court. The FTC Act does not expressly preempt state law, and what the statement leans on is "implied conflict preemption." Because that doctrine holds only if a court accepts that complying with both the federal and state demands at once is genuinely impossible, many note that state governments are likely to contest it.

<!-- stat-card -->
**Is the statistic that "90% of consumers believe AI without verifying" true?** — Within what this article could confirm, that 90% figure has no traceable basis, neither in the text of the FTC statement nor in the legal analyses. The actual surveys diverge. In Clear Spark Digital (2026-04), 78.5% made decisions using AI information but only 17.4% said they always verify; in Klaviyo (2026), only 13% said they fully trust AI. It is better not to cite an unverified number.

<!-- stat-card -->
**As a data practitioner, what should I prepare now?** — Keep a record of your data lineage and adjustment history. The demand to "prove your accuracy" ultimately comes down to what data you trained on and what tuning you applied and why. Auditing outputs alone cannot separate deliberate steering from hallucination. Since you cannot retroactively generate lineage after a regulation is finalized, the record has to be built up in advance. Article 10 of the EU AI Act and Korea's AI Basic Act point in the same direction.

## References

### Official Documents

- 1.Federal Trade Commission. (2026). "[FTC Seeks Public Comment on Policy Statement Addressing AI Accuracy](https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-seeks-public-comment-policy-statement-addressing-ai-accuracy)." FTC Press Releases, 2026-07-01.
- 2.Federal Trade Commission. (2026). "[Suppression of Accuracy in Artificial Intelligence Systems](https://www.ftc.gov/system/files/ftc_gov/pdf/ai-policy-statement_0.pdf)" (draft policy statement).
- 3.Federal Register. (2026). "[Policy Statement Concerning the Suppression of Accuracy in Artificial Intelligence Systems](https://www.federalregister.gov/documents/2026/07/07/2026-13628/policy-statement-concerning-the-suppression-of-accuracy-in-artificial-intelligence-systems)." Document 2026-13628, 2026-07-07.
- 4.Executive Office of the President. (2025). Executive Order 14365, "Ensuring a National Policy Framework for Artificial Intelligence," 2025-12-11.
- 5.Colorado General Assembly. Colorado AI Act (SB 24-205, enacted 2024-05; delayed by SB 25B-004; repealed and replaced by SB 26-189, 2026-05).

### Legal & Policy Analysis

- 6.Consumer Financial Services Law Monitor. (2026). "[FTC Proposes Policy Statement on AI Accuracy and Ideological Manipulation of AI Outputs](https://www.consumerfinancialserviceslawmonitor.com/2026/07/ftc-proposes-policy-statement-on-ai-accuracy-and-ideological-manipulation-of-ai-outputs/)."
- 7.Reed Smith. (2026). "[FTC Proposes Policy Prohibiting Deceptive Steering of AI Products and Services](https://www.reedsmith.com/our-insights/blogs/viewpoints/102n7u7/ftc-proposes-policy-prohibiting-deceptive-steering-of-ai-products-and-services/)."
- 8.Eliot, L. (2026). "[FTC Floats AI Policy Aiming To Ensure That AI Makers Disclose The Truth About Biases In Their LLMs](https://www.forbes.com/sites/lanceeliot/2026/07/06/ftc-floats-ai-policy-aiming-to-ensure-that-ai-makers-disclose-the-truth-about-biases-in-their-llms/)." Forbes, 2026-07-06.
- 9.ppc.land. (2026). "[FTC Move Could Force Colorado to Rewrite New AI Bias Law](https://ppc.land/ftc-move-could-force-colorado-to-rewrite-new-ai-bias-law/)."
- 10.Jenner & Block. (2026). "[DOJ Joins xAI in Lawsuit Challenging Colorado AI Act](https://www.jenner.com/en/news-insights/client-alerts/doj-joins-xai-in-lawsuit-challenging-colorado-ai-act)."
- 11.Carpe Datum Law. (2026). "[Colorado's AI Reset: Two Weeks, a White House Callout, and a Pivot Away from the EU Model](https://www.carpedatumlaw.com/2026/05/colorados-ai-reset-two-weeks-a-white-house-callout-and-a-pivot-away-from-the-eu-model/)." 2026-05.

### Consumer Surveys

- 12.Search Engine Land. (2026). "[AI Search Adoption Rises as Consumer Trust Declines: Study](https://searchengineland.com/ai-search-adoption-rises-consumer-trust-declines-study-480338)" (citing a Clear Spark Digital survey). 2026-04.
- 13.Yext. (2026). "[7 Data-Backed Stats on AI Search Trust and Consumer Decision-Making in 2026](https://www.yext.com/blog/7-data-backed-facts-on-ai-trust-and-consumer-decision-making-in-2026)."
- 14.Klaviyo. (2026). "[Consumer Trust in AI: What Brands Need to Know in 2026](https://www.klaviyo.com/solutions/ai/consumer-trust-in-ai)."

### Reference — Korea's AI Basic Act

- 15.MS Today. (2026). "[Korea's 'AI Basic Act,' Set to Take Effect January 2026, Becomes the World's First Comprehensive AI Legal Framework](https://www.mstoday.co.kr/news/articleView.html?idxno=99963)" (Korean). 2026-01.
