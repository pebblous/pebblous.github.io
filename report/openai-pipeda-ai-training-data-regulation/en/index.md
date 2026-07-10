---
title: Consent Cannot Be Obtained After the Fact — Canada
subtitle: Canada
date: 2026-05-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Consent Cannot Be Obtained After the Fact — Canada

_Canada_

## Executive Summary

> [!callout]
> On May 6, 2026, Canada's four privacy regulators closed a three-year joint investigation into OpenAI's ChatGPT and released **PIPEDA Findings #2026-002**. Federal Privacy Commissioner Philippe Dufresne, Quebec CAI's Naomi Ayotte, BC OIPC's Michael Harvey, and Alberta OIPC's Diane McLeod stood on the same set of facts — and walked away with four different conclusions. It is the G7's first formal ruling on AI training data, and it lands at an inflection point in the global regulatory mood. The most decisive line in the entire document belongs to British Columbia and Alberta: _"scraped data for which OpenAI has not obtained, and cannot obtain, consent."_ A single sentence that says **consent cannot be obtained after the fact**.

> The findings confirm five violations — overcollection of personal information, lack of valid consent and transparency, factual inaccuracies (a legal redefinition of "hallucination"), access/correct/delete deficiencies, and a lack of accountability. The four offices then split four ways. The federal OPC accepted OpenAI's remediation plan and closed the file as _"well-founded and conditionally resolved."_ Quebec's CAI issued recommendations instead of penalties. BC and Alberta refused the resolution outright, marking the file _"well-founded but unresolved."_ Commissioner Michael Harvey went one step further: _"ChatGPT, by design, cannot be compliant with the province's privacy law as currently written."_ Identical facts, four different rulings — and a first concrete sign that **the strictest jurisdiction is on track to set the global floor**.

> The decision does not land in a vacuum. Italy's Garante fined OpenAI €15M (≈ ₩22.5B) in December 2024. The EU AI Act's high-risk regime goes live on August 2, 2026, with penalties up to €35M or 7% of global turnover. Korea's AI Framework Act took effect on January 22, 2026, and Korea's PIPA penalty cap was raised from 3% to 10% of revenue in 2025. Canada has stepped into the precise inflection point of this domino. Pebblous reads that step as the arrival of **AI-Ready Data → AI-Ready Compliance**. Five signals that DataClinic has long diagnosed — labels, distribution, freshness, missingness, outliers — are joined by a **sixth signal: lawfulness**. This report is the final coordinate in our AI Governance Quartet (Magnifica Humanitas · SkillOpt · MUSE-Autoskill · this piece), mapping the legal landing point of a current where morality asks, scholarship answers, and law enforces.

Quantifying the coordinates of a single ruling sharpens the grain of the global regulatory domino. Four commissioners stood on one record. Five violations were tied into one chain. Italy's first GDPR figure and a Korean firm's four-layer exposure stretch out behind them. The four cards below are the numeric markers of what this report will slowly unfold.

Sources: OPC News Release (May 6, 2026), Garante Provvedimento 755/2024, EU Regulation 2024/1689, Korea PIPA Amendment (2025).

<!-- stat-card -->
**4 Commissioners** — Federal + 3 provinces — OPC · CAI · BC · Alberta — 3-year joint probe

<!-- stat-card -->
**5 Violations** — From overcollection to accountability — G7's first direct ruling on AI training data

<!-- stat-card -->
**€15M** — Italy's Garante (2024) — OpenAI's first GDPR penalty

<!-- stat-card -->
**~US$140M** — Korean firm — four-layer exposure — PIPEDA + GDPR + AI Act + Korea, estimated

## May 6, 2026 — What Just Happened

Rarely can an event be condensed into a single sentence. **On May 6, 2026, Canada's four privacy commissioners formally confirmed that OpenAI's ChatGPT had violated PIPEDA.** The official designation is **PIPEDA Findings #2026-002**. Exactly three years had passed since the four-office joint investigation opened in May 2023. What made the announcement heavy is that it was more than one ruling. Four firsts landed in the same room at the same time — **the G7's first formal decision, the first joint four-office finding, the first declaration that "consent after the fact is not possible," and the first direct ruling on AI training data.** Any one of them would have been a historic coordinate on its own.

The reader's opening note summarized it precisely: "Canadian regulators confirmed that ChatGPT training violates PIPEDA. The first major national ruling on AI training data collection practices — global regulatory ripples expected." This report takes that line at face value and then unwinds, slowly, the four commissioners, the five violations, and the four ways the decision diverged.

![The Centre Block of the Canadian Parliament in Ottawa — the city where the federal Office of the Privacy Commissioner (OPC) is based](./image/img-01-centre-block-ottawa.jpg)
*▲ The Centre Block of the Canadian Parliament in Ottawa — home city of the federal Office of the Privacy Commissioner (OPC). PIPEDA Findings #2026-002 was released here. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Centre_Block,_Ottawa.jpg)*

### 1.1. Four Commissioners, One Decision Document

Canada's privacy landscape can feel unfamiliar from outside. The country runs **federal PIPEDA (the Personal Information Protection and Electronic Documents Act) and provincial statutes side by side**. BC's PIPA, Alberta's PIPA, and Quebec's Private Sector Act each govern private-sector personal information within their own province. On the same set of facts, the consent requirements diverge in subtle ways. When a global provider was suspected of breaching PIPEDA across the whole country at once, four offices working together was the natural outcome. The cards below introduce the four commissioners and the grain of the decisions they each owned.

<!-- stat-card -->
**Philippe Dufresne** — Privacy Commissioner of Canada (federal OPC) — "**Well-founded and conditionally resolved.**" Confirmed the violations, accepted OpenAI's remediation commitments, and closed the file conditionally.

<!-- stat-card -->
**Naomi Ayotte** — Commission d'accès à l'information (Quebec CAI) — "**We have decided to make recommendations instead.**" Issued recommendations rather than penalties — grounded in Quebec's Private Sector Act.

<!-- stat-card -->
**Michael Harvey** — Information and Privacy Commissioner for British Columbia (BC OIPC) — "**Well-founded but unresolved.**" Remediation commitments were judged insufficient — and the stronger position was openly stated: ChatGPT is, by design, incompatible with BC's law.

<!-- stat-card -->
**Diane McLeod** — Information and Privacy Commissioner of Alberta (Alberta OIPC) — "**Well-founded but unresolved.**" Joint position with BC — "very troubling" that OpenAI did not appear to have turned its mind adequately to privacy compliance.

### 1.2. The Verbatim That Matters — Short and Decisive

Of all the lines in the decision, the one most often quoted comes from the joint BC and Alberta position. It is short.

"OpenAI's models rely on **scraped data for which OpenAI has not obtained, and cannot obtain, consent**. Consent for scraped data simply **cannot be obtained after the fact**."

— Joint position of the BC and Alberta OIPCs (PIPEDA Findings #2026-002)

One sentence severs two things at once. First — the fact that OpenAI has not merely **failed** to obtain consent but **cannot** obtain it. Second — the legal conclusion that opt-out, correction, or deletion **after the fact** cannot fill the absence of consent. Between those two clauses sits the whole standard practice of the AI industry.

At the same announcement, BC Commissioner Michael Harvey went one step further. His sentence became the headline that Canadian media — the Globe and Mail, CBC — copied straight into their leads.

"**ChatGPT, by design, cannot be compliant with the province's privacy law as currently written.**"

— Michael Harvey, Information and Privacy Commissioner for British Columbia

Read plainly — ChatGPT, in its very design, cannot meet BC's current privacy law. The diagnosis is not of an operational defect. It is of a **design defect**. The kind of problem remediation promises cannot fill.

Alberta's Diane McLeod left a sentence with equal weight: _"OpenAI did not appear to **turn its mind adequately** to privacy compliance ... which is **very troubling**."_ In legal English, _"to turn one's mind"_ asks whether a duty-bearer has genuinely considered an obligation. The reading is that a technology company met its duty only on the surface.

Federal Commissioner Dufresne, by contrast, leaned on the possibility of cure: _"I've concluded that the measures that have been and that will be implemented by OpenAI **will address the concerns identified**."_ Four readings of the same record, brought into one room. The point is not whose position is correct. The real message of this decision is the **multi-layered nature of a legal system in which the same data can lead to four different conclusions**.

> [!callout]
> **One moment, one announcement — four firsts.** The G7's first formal ruling. The first joint four-office finding. The first declaration that consent after the fact is impossible. The first direct ruling on AI training data. Any one of them alone would have set a regulatory coordinate. They arrived together. That is why this report sits where it does.

## Five Violations — Reading Them as One Chain

The findings confirm five violations. Read separately, each is a clean statutory breach. Read together, they form **a chain** — overcollection feeds the absence of consent, the absence of consent feeds inaccuracy, inaccuracy makes rights unenforceable, and the chain closes with an accountability gap. The decision treats them as a single chain because it set out to cut that chain in one stroke.

![OpenAI ChatGPT logo — the product investigated under PIPEDA Findings #2026-002](./image/img-02-chatgpt-logo.svg)
*▲ Official OpenAI ChatGPT logo — the product at the center of Canada's three-year joint investigation and the five-violation finding. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ChatGPT-Logo.svg)*

| # | Violation | PIPEDA Principle | Plain reading |
| --- | --- | --- | --- |
| 1 | Overcollection of personal information | 4.4 Limiting Collection | Web scraping went beyond the minimum needed for training — a breach of the data-minimization principle. |
| 2 | Lack of valid consent and transparency | 4.3 Consent · 4.8 Openness | Individuals had no way to know that their information would become training data — and no way to consent to it. |
| 3 | Factual inaccuracies | 4.6 Accuracy | Hallucination, redefined in law — generating inaccurate facts about an identifiable person is a breach of PIPEDA Principle 4.6. |
| 4 | Access · correction · deletion deficiencies | 4.9 Individual Access | Rights-exercise channels were formal at best, and often unworkable — the inaccessibility of personal information that has entered training weights. |
| 5 | Lack of accountability | 4.1 Accountability | No clear ownership of the duty to control and manage personal information absorbed into training weights. |

****Source: synthesized from PIPEDA Findings #2026-002, PIPEDA Schedule 1 (Principles 4.1·4.3·4.4·4.6·4.8·4.9), MLT Aikins (2026).

### 2.1. Why Hallucination Becomes a Privacy Violation

The third item is the most academically novel. Paragraph 80 is blunt: _"OpenAI did not comply with the accuracy requirements under the Acts."_ Paragraph 95 names the source of the inaccuracy: _"personal information contained in sources such as social media and discussion forums — which may often be inaccurate."_

Until now, hallucination has been treated as a *quality* problem of the model. When the answer is wrong, the user takes the loss, and the company tunes the model toward higher accuracy. PIPEDA #2026-002 shifts that frame. It is the first official ruling that **generating or repeating inaccurate facts about an identifiable person violates PIPEDA Principle 4.6 (Accuracy).** Read against the scholarship, this is a partial realization of Wachter & Mittelstadt's (2019) proposal of _"A Right to Reasonable Inferences."_ The academic intuition — that a model issuing flawed inferences about a person infringes that person's information rights — has now landed as a legal ruling.

There is a supporting line in the literature. Carlini et al. (2021), _"Extracting Training Data from Large Language Models,"_ showed that LLMs can **memorize** training data and surface fragments of it in their outputs. That is the academic basis for treating personal information inside model weights as something *alive*. The fifth violation — lack of accountability — points to the same place. If training weights are themselves a store of personal information, someone has to take responsibility for the store.

### 2.2. The Pressure of Scale — 13 Trillion Tokens

Looking briefly at scale helps weight the decision. **GPT-4 is estimated to have been trained on 13 trillion tokens with 1.8 trillion parameters** (per a leaked SemiAnalysis report; OpenAI does not disclose official numbers). To make 13 trillion tokens intuitive — the entire English Wikipedia is roughly 5 billion tokens. That is about 2,600 Wikipedias' worth of training data. Stanford CRFM's _Foundation Model Transparency Index_ (Bommasani et al., 2024) reported that major LLM providers, including OpenAI, scored lowest in the training-data dimension. From the outside, there is almost no way to verify what sits inside those 13 trillion tokens.

Reading the fifth violation — accountability — against that scale changes how the decision lands. **If even the provider cannot say where and how personal information about a given person lives inside 2,600 Wikipedias, who carries the duty to manage it?** The decision points to an accountability vacuum in exactly that gap.

> [!callout]
> **The five violations are not separate defects — they are one chain.** Overcollection → absence of consent → inaccuracy → unenforceable rights → accountability gap. Break one link, and the next collapses. The decision groups the five precisely because it set out to cut the chain at once.

## The Diverged Decision — Why BC and Alberta Refused

Same facts, four conclusions. That divergence is the deepest message of this decision.

### 3.1. Four Paths from One Record

Laid out in a table, the divergence becomes legible. Same facts, different legal systems, different political weight.

| Commissioner | Disposition | Governing law | Core reasoning |
| --- | --- | --- | --- |
| Federal OPCPhilippe Dufresne | Well-founded and conditionally resolved | PIPEDA | OpenAI's remediation plan (immediate / 3-month / 6-month) judged sufficient to address the concerns. |
| Quebec CAINaomi Ayotte | Recommendations issued | Private Sector Act (Loi 25) | Recommendations instead of penalty powers, with monitoring of remediation progress. |
| BC OIPCMichael Harvey | Well-founded but unresolved | BC PIPA | "Incompatible by design" — remediation alone is not enough. |
| Alberta OIPCDiane McLeod | Well-founded but unresolved | Alberta PIPA | "Did not turn its mind adequately" — joint position with BC. |

Source: PIPEDA Findings #2026-002 main text, OPC News Release (May 6, 2026), MLT Aikins (2026).

### 3.2. Why BC and Alberta Refused

Canadian law firm MLT Aikins put the legal root of the split precisely: _"provincial statutes are more specific and explicit than PIPEDA regarding consent."_ The provincial laws (BC PIPA, Alberta PIPA) are more specific and explicit than federal PIPEDA on consent. Both provinces in particular require **prospective (ex ante) consent** in express terms. The timing requirement — consent before processing — is written into the statute.

![British Columbia Parliament Buildings in Victoria — home city of the BC Office of the Information and Privacy Commissioner, where the 'cannot be obtained after the fact' line was issued](./image/img-03-bc-parliament-victoria.jpg)
*▲ The British Columbia Parliament Buildings in Victoria — home city of the BC Office of the Information and Privacy Commissioner. Michael Harvey's "ChatGPT, by design, cannot be compliant" was issued from here. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:British_Columbia_Parliament_-_Victoria.jpg)*

Read against that timing requirement, OpenAI's remediation plan is, in essence, an attempt at **ex post consent**. A picture of post-hoc opt-out channels, post-hoc correction and deletion procedures, and post-hoc transparency reports for data that has already been trained on. BC and Alberta concluded that the entire picture cannot coexist with their provincial frameworks. The word "after" itself is what disqualifies the consent.

"OpenAI's models rely on scraped data for which OpenAI has not obtained, and cannot obtain, consent. **Consent for scraped data simply cannot be obtained after the fact.**"

— Joint BC and Alberta OIPC position (verbatim, also quoted at §1.2)

### 3.3. What "Consent After the Fact Is Impossible" Unsettles

The standard pattern of the AI training industry has been simple. **Crawl → train → offer post-hoc opt-out.** Collect first, train the model, then open a channel for rights. It is fast, efficient, and had become the de facto standard across both research and product. The BC and Alberta ruling declares that the sequence itself is **a legally impossible model**.

Academically, this is a strong embrace of one position on the timing of consent. Daniel Solove's (2013) _"Privacy Self-Management and the Consent Dilemma"_ already critiqued the _notice-and-choice paradigm_ — the unrealistic assumption that individuals will pre-consent to every processing activity. The EDPB's Opinion 28/2024 left the issue on a _"case by case"_ basis in the LLM context. Canada's BC and Alberta took the same gap and chose **a principled stance**. Consent after the fact is not consent.

One consequence follows. On the global spectrum of consent strictness, Canada's BC and Alberta now stand at **the strictest end**. From China's PIPL prior consent, to GDPR's Article 6(1)(a), to federal PIPEDA, to the US sectoral approach — the BC/Alberta line sits one step harder than all of them. And the historical arc of global regulation has tended to follow **the path of the strictest jurisdiction quietly becoming the standard**. Just as GDPR became the global baseline, the BC/Alberta position is now a candidate for the next one.

> [!callout]
> **Seven words — "consent cannot be obtained after the fact" — shake the standard practice of the AI industry.** If the crawl → train → post-hoc opt-out picture closes legally, only two routes remain. Either secure consent *before* training, or rely only on data sources where consent is already lawfully in place. Both routes raise the market value of synthetic data, simulation-based training, and licensed datasets. A single line from BC and Alberta becomes a magnetic pull on that market's future.

## The Global Regulatory Domino — Italy, EU, Korea, Japan, US, China, UK

The Canadian decision is **not the first tile of the domino. It is the inflection point.** Italy started it, the EU sharpened it, Korea followed, and on top of that arc Canada now etches the standard most cleanly. The very first tile fell in spring 2023, when Italy's Garante temporarily blocked ChatGPT.

Regulation does not arrive all at once. One jurisdiction sends a signal, another rewrites it into its own framework, and a third turns it into a formal basis for penalty calculation. The lag between those steps is the grain of the global domino. This section reads that grain in three places — a three-year timeline, an eight-jurisdiction comparison at one moment, and the two formulas Italy and Korea have already drawn.

### 4.1. 2023–2026 — A Three-Year Arc

The timeline below is not a flat chronology. It is a causal chain in which each event pulls the next into the room. Italy's temporary block became the opening signal for GDPR enforcement. The EU AI Act formalized that signal at statute level. Five months after Korea's AI Framework Act took effect, Canada's decision arranged the whole sequence into the clearest order yet.

| Date | Event | Meaning |
| --- | --- | --- |
| 2023-03-31 | Italy's Garante temporarily blocks ChatGPT | First block in the Western G7 — the opening signal for GDPR enforcement. |
| 2023-06 | Japan's PPC issues administrative guidance to OpenAI | First official Asian guidance — asked OpenAI to refrain from training on sensitive data. |
| 2023-07 | US FTC opens a Section 5 probe of OpenAI | A consumer-protection lens — potential representation and disclosure violations. |
| 2023-12-27 | NYT v. OpenAI filed | Copyright — but tightly tied to the lawfulness of AI training data. |
| 2024-05-21 | EU AI Act adopted | The world's first comprehensive AI law — data governance under Article 10. |
| 2024-12-17 | EDPB Opinion 28/2024 | LLM personal-data processing — left "case by case." |
| 2024-12-20 | Italy's Garante fines OpenAI €15M | First GDPR penalty — surfaced a per-user metric (~€0.50/user) for future calculations. |
| 2026-01-22 | Korea's AI Framework Act takes effect | Mandatory impact assessments for high-impact AI — Korea's first comprehensive AI statute. |
| 2026-05-06 | Canada — PIPEDA Findings #2026-002 | The G7's first direct ruling on AI training data |
| 2026-08-02 | EU AI Act high-risk regime goes live | Up to €35M or 7% of global turnover — the penalty era opens in earnest. |

****Sources: synthesized from Garante Provvedimento 755/2024, EU OJ L1689, EDPB Opinion 28/2024, Korea National Law Information Center, OPC News Release (May 6, 2026), FTC investigation reporting, NYT v. OpenAI S.D.N.Y. 1:23-cv-11195.

### 4.2. Eight Jurisdictions at a Glance

A global provider running ChatGPT-like services now faces more jurisdictions in parallel than ever. The consent standard, penalty cap, and presence of direct AI regulation in each of them line up cleanly in a single table.

| Jurisdiction | Governing law | Consent standard | Penalty cap | Direct AI regulation |
| --- | --- | --- | --- | --- |
| Canada (BC · Alberta) | BC PIPA · Alberta PIPA | Prospective consent (strictest) | Limited administrative powers | Indirect (via privacy) |
| Canada (federal) | PIPEDA | Broad + implied consent admitted | CAN$100K per violation (Sec. 28) | Indirect |
| EU | GDPR | Choice among six Art. 6(1) bases | €20M or 4% of turnover | Indirect |
| EU (AI-specific) | AI Act | Art. 10 data governance | €35M or 7% of turnover | Direct (comprehensive) |
| Korea | PIPA | Prior consent + purpose limitation | 10% of revenue (2025 amendment) | Indirect |
| Korea (AI-specific) | AI Framework Act | High-impact AI impact assessment | ₩30M administrative fine (from 2027) | Direct (Korean model) |
| China | PIPL · Generative AI Interim Measures | Prior consent (strong) | ¥50M or 5% of revenue | Direct (pre-deployment review) |
| UK | UK GDPR · DPA 2018 | Aligned with GDPR | £17.5M or 4% of turnover | Indirect |
| United States | Sectoral (FTC Act Sec. 5 et al.) | No unified standard · state by state | Litigation-driven costs | Indirect (via investigations) |

****Sources: synthesized from each jurisdiction's primary statutes, official OPC · EDPB · Korea PIPC · China CAC materials, MLT Aikins (2026), and Cooley LLP (2026) analysis of Korea's AI Framework Act.

### 4.3. Inside Italy's €15M — The First GDPR Formula

The €15M that Italy's Garante imposed on OpenAI on December 20, 2024, matters less as a number than as the first published formula. The Garante applied a calculation based on the timing, scope, and user count of the violation, and surfaced an implied per-user figure of about €0.50. In the historical arc of EU data protection, it is the first substantive penalty calculation against a learning-style LLM — and a reference point for every GDPR decision that follows.

€15M is well below the GDPR cap (€20M or 4% of turnover). But the meaning is clear — **confirmation that GDPR can in fact apply to a learning-style LLM**. With the EU AI Act's high-risk regime activating on August 2, 2026, the AI Act's €35M / 7% ceiling stacks on top of GDPR's. The era of two statutes applying in parallel begins in earnest.

![The Berlaymont building in Brussels — headquarters of the European Commission and the policy origin of both GDPR and the AI Act](./image/img-04-berlaymont-brussels.jpg)
*▲ The Berlaymont building in Brussels — headquarters of the European Commission. The policy origin of GDPR (2018) and the AI Act (2024), now on the eve of full high-risk implementation on August 2, 2026. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Berlaymont,_Brussels.jpg)*

### 4.4. Korea's Position — Two Laws, Two Clocks

In May 2026, Korea is running two clocks at the same time. One is the **Personal Information Protection Act, strengthened in 2025** — the penalty cap moved from 3% to 10% of revenue. The other is **the AI Framework Act, effective January 22, 2026** — mandatory impact assessments for high-impact AI, operational risk-detection-and-shutoff requirements, and registration obligations for AI businesses inside Korea. The two laws run on separate clocks, but on the lawfulness of AI training data they bind together like two clauses of one sentence. PIPA defines the threshold of lawfulness for training data, and the AI Framework Act adds an audit-trail duty at the operational layer.

In August 2025, Korea's Personal Information Protection Commission (PIPC) published a **"Guide to Personal Information Handling in Generative AI,"** setting out a four-stage life cycle (collection · training · service · termination). The five violations in PIPEDA #2026-002 map onto that life cycle almost line for line — overcollection at the collection stage, absence of consent at the training stage, accuracy and rights at the service stage, and accountability at the termination stage. If Korea's PIPC guide laid out the operational ramp, the Canadian decision raised the chance that the ramp becomes globally aligned.

## AI Act vs GDPR vs PIPEDA vs Korea — The Four-Layer Era

The compliance landscape that a Korean company meets when going global is no longer a single-statute picture. The era has begun in which **four legal systems apply to the same training dataset at once**. PIPEDA (personal information), GDPR (EU residents' personal information), the EU AI Act (direct regulation of AI systems), and Korea's AI Framework Act (domestic AI providers) — four standards from four seats, all weighed against the same training dataset.

### 5.1. A Hypothetical Korean LLM Firm — Four-Layer Exposure

Following one scenario helps weigh the four-layer load. Imagine **a Korean LLM firm with global revenue of about US$1B (≈ ₩1.4 trillion)** launching a ChatGPT-like service across Canada, the EU, Korea, and the United States simultaneously. Against the same training dataset — an OpenWebText-style web crawl plus user conversations — the table below estimates what each of the four frameworks could in principle impose. Each figure is a conservative ceiling (statutory maximum), separate from the likelihood of actual enforcement.

<!-- stat-card -->
**~CAN$0.1M** — PIPEDA (federal) — CAN$100K per violation — market-access risk is the real lever

<!-- stat-card -->
**€40M** — GDPR (maximum) — €20M or 4% of turnover — on US$1B revenue

<!-- stat-card -->
**€70M** — EU AI Act (maximum) — €35M or 7% of turnover — high-risk systems

<!-- stat-card -->
**~₩140B** — Korea PIPA + AI Framework Act — 10% of revenue (2025 amendment) + AI Act fines

The four numbers do not add cleanly. The scenario in which all four jurisdictions impose their maximum at once on the same act is rarely realistic. But even if each enforces only a fraction of its ceiling independently, the cumulative exposure is not small. A conservative estimate puts the maximum aggregate around **US$140M (≈ ₩190B)** — roughly 14% of US$1B in global revenue as the cost of a single breach. The federal PIPEDA penalty by itself is small, but with four-layer exposure comes another risk — **market-access shutdown**. As BC and Alberta showed, a finding that remediation cannot resolve effectively limits operations in that market.

### 5.2. PIPEDA-to-Korea Mapping — The Same Chain, Different Wording

The five PIPEDA violations map cleanly onto Korean law. The table below shows how Korea's PIPA and AI Framework Act absorb each item — a useful entry point for designing four-layer compliance in practice.

| PIPEDA violation | Korea PIPA article | AI Framework Act tie-in |
| --- | --- | --- |
| ① Overcollection | Art. 15 (collection / use) · Art. 16 (minimal collection) | High-impact AI impact assessment — pre-review of collection scope. |
| ② Lack of consent / transparency | Art. 15 (consent) · Art. 20 (automated-decision notice) | Transparency obligation (AI system labeling and notice). |
| ③ Factual inaccuracy (hallucination) | Art. 3 (accuracy principle) | In-operation risk detection · shutoff · switchover. |
| ④ Rights infringement | Art. 35–39 (access · correction · deletion · portability) | Right to refuse automated decisions · right to explanation. |
| ⑤ Lack of accountability | Art. 28-2 (Personal Information Protection Officer) | Mandatory designated officer for high-impact AI. |

Sources: synthesized from PIPEDA Findings #2026-002, Korea's Personal Information Protection Act (2025 amendment), Korea's AI Framework Act (effective January 22, 2026), and the PIPC "Guide to Personal Information Handling in Generative AI" (August 2025).

### 5.3. Why Korean Firms Should Watch the BC/Alberta Bar

One intuition is decisive in the compliance design of Korean firms — **the safest design in a four-layer era is the one tuned to the strictest jurisdiction.** Even with four different standards, designing data sourcing and consent flows to meet BC and Alberta's bar will naturally satisfy the other three. The reverse is brittle. A design that meets only the most permissive seat fails immediately at the strictest one.

That intuition fits the general arc of global regulation. After GDPR took effect in 2018, most global providers normalized their design to GDPR — and that normalized design became, de facto, the standard elsewhere. **The "Brussels Effect"** — the strictest jurisdiction quietly setting the global floor — opens room for a Canadian-led round next, with BC and Alberta in front.

## The AI Governance Quartet — The Coordinates Drawn

This report is the final coordinate of Pebblous's **AI Governance Quartet**. The quartet has followed a single hypothesis — that AI governance begins in morality, passes through scholarship, and lands in law. Morality asks *why* human dignity must be protected, scholarship designs the *how* of self-evolving learning, and law *enforces* the current. Laying the four pieces side by side makes the hypothesis self-evident.

| Date | Piece | Dimension | Core claim |
| --- | --- | --- | --- |
| 2026-05-25 | Magnifica Humanitas | Morality · theology | Why human dignity must be defended. |
| 2026-05-27 | SkillOpt | Scholarship · optimizer | Self-evolving behavior can be learned. |
| 2026-05-28 | MUSE-Autoskill | Scholarship · lifecycle | Behavioral assets can be managed across a life cycle. |
| 2026-05-29 | PIPEDA (this piece) | Law · regulation | The landing in legal enforcement — consent cannot be obtained after the fact. |

[/report/pope-magnifica-humanitas/en/](/report/pope-magnifica-humanitas/en/)[/report/microsoft-skillopt-self-evolving-agents/en/](/report/microsoft-skillopt-self-evolving-agents/en/)[/report/muse-autoskill-self-evolving-skill-lifecycle/en/](/report/muse-autoskill-self-evolving-skill-lifecycle/en/)****Source: Pebblous AI Governance Quartet — this report is the fourth and final coordinate.

Condensed into one sentence: **Magnifica asks — what does the phrase "human dignity" mean in the age of AI?** Scholarship answers along two branches. SkillOpt says, "self-evolving behavior can be learned." MUSE says, "that behavior can survive as an asset." Then law fills the last cell. **PIPEDA #2026-002 enforces that the training material for that behavior — the data — must be lawful.** The four pieces close as one picture.

What this coordinate means is more than a series structure. It is **visible evidence that AI governance is not a one-dimensional craft**. Morality alone cannot enforce. Scholarship alone cannot assign responsibility. Law alone cannot define value. Only when the three act together does governance work. Drawing those three as one series has been Pebblous's seat in the conversation.

> [!callout]
> **Morality asks, scholarship answers, law enforces.** Five days separate the four pieces. In those five days, one view came into focus — AI governance is a three-dimensional craft, and any work that touches only one dimension is unfinished. This report is the final coordinate of the series because law is the last knot that binds the other two.

## AI-Ready Data → AI-Ready Compliance — A Pebblous Read

For several years, Pebblous has moved along one premise — **"make data diagnosable."** DataClinic has diagnosed five signals in training data (label integrity, distribution balance, freshness, missingness, outliers). AI-Ready Data has been the output category of that diagnosis. DataGreenhouse and PebbloSim have provided the operating environments for diagnosed data. The premise that PIPEDA Findings #2026-002 introduces is the natural next step — **the *legal quality* of data is now a subject of diagnosis, too.**

### 7.1. From AI-Ready Data to AI-Ready Compliance

The premise extends by one cell. A company that has diagnosed the **technical quality** of training data can naturally place a **legal quality** layer on top. This is not a new product to build — it is **an expansion of the meaning of existing assets**. DataClinic has already treated integrity, balance, and freshness as signals; adding "lawfulness" as a sixth signal is enough. DataGreenhouse has long reduced reliance on raw sources; that structure itself becomes the PIPEDA-style downstream infrastructure. PebbloSim's simulation-based training is a structural detour that learns without real-world personal data. Three axes already engage exactly where PIPEDA #2026-002's lawfulness requirements land.

### 7.2. DataClinic 5 Signals + 1 — A Six-Dimensional Diagnosis

Showing in one table how the sixth signal, "lawfulness," sits on top of the existing five makes the expansion visible. The lawfulness signal then branches into five sub-items of its own — mirroring, one to one, the five violations of PIPEDA #2026-002.

| Signal | Diagnostic dimension | Core checks |
| --- | --- | --- |
| ① Label integrity | Technical (existing) | Label accuracy and consistency. |
| ② Distribution balance | Technical (existing) | Class and domain balance. |
| ③ Freshness | Technical (existing) | Data timestamps and refresh cadence. |
| ④ Missingness | Technical (existing) | Patterns of missing values and their fillability. |
| ⑤ Outliers | Technical (existing) | Outliers and label errors. |
| ⑥ Lawfulness(new — derived from PIPEDA) | Legal (expansion) | Provenance · consent · deletion · multi-jurisdiction · correction (see next table). |

Source: Pebblous DataClinic 5 signals (existing) + the lawfulness signal derived from PIPEDA Findings #2026-002. The first six-dimensional mapping defined in this report.

The five sub-items of the lawfulness signal map one to one onto PIPEDA's five violations. The diagnostic workflow gains a thin lawfulness layer that emits both a technical and a legal verdict for the same dataset.

| ⑥ Lawfulness sub-item | Diagnostic question | Academic anchor |
| --- | --- | --- |
| Source provenance | Where did the data come from, and is that origin lawful? | Gebru et al. (2021), Datasheets for Datasets. |
| Consent validity | Is the consent valid in timing, scope, and renewability? | Solove (2013); BC/AB OIPC ex ante requirement. |
| RTBF readiness | Can the right to be forgotten be honored technically? | Bourtoule et al. (2021) SISA; Yao et al. (2024). |
| Cross-jurisdictional fit | Does it satisfy PIPEDA · GDPR · AI Act · Korea at once? | This report, §4 and §5. |
| Inaccuracy correction | Is there a loop to monitor and correct factual inaccuracies? | Wachter & Mittelstadt (2019); PIPEDA Principle 4.6. |

Source: Pebblous synthesis — one-to-one mapping from the five PIPEDA Findings #2026-002 violations to five lawfulness sub-items in AI-Ready Compliance.

### 7.3. Lawfulness as a Dimension of Model Quality

Lawfulness is not only a compliance burden. Academically, it is **a dimension of model quality**. The absence of lawfulness in training data degrades model quality through three direct pathways.

- •**Leakage of personal information held inside weights via memorization** — the training-data extraction attacks demonstrated by Carlini et al. (2021). Personal information lives inside the weights.
- •**Inferential privacy harms through hallucination** — Wachter & Mittelstadt's (2019) right to reasonable inferences. A model issuing flawed inferences about a person infringes that person's information rights.
- •**The exploding cost of machine unlearning** — research has progressed since Bourtoule's SISA (2021), but 2025's "Unlearned but Not Forgotten" (arXiv:2505.24379) showed that data-extraction attacks can recover supposedly forgotten data. Post-hoc deletion carries a fundamentally high technical cost.

All three pathways show that lawfulness is no longer a job for the legal team alone — **it is a job for data scientists and ML engineers**. A dataset's lawfulness grade is tied directly to a model's quality grade, and a lack of lawfulness becomes technical debt at the operations layer. AI-Ready Compliance, as a premise, rests on this tight coupling.

### 7.4. A 5-Step Playbook for Korean Firms

A practical five-step playbook for Korean firms in the four-layer era. Each step is tuned to **the strictest jurisdiction (BC/Alberta) bar** so that the other three follow naturally.

<!-- stat-card -->
**① Data sourcing audit** — Classify web scraping, licensed data, first-party data, and synthetic data into red / yellow / green lawfulness grades. Flag everything that cannot meet BC/Alberta's "consent after the fact is impossible" bar as red.

<!-- stat-card -->
**② Lawfulness grade per training set** — Grade each dataset under DataClinic's six signals (existing five + lawfulness). Keep alignment with the Foundation Model Transparency Index items.

<!-- stat-card -->
**③ Standardize opt-out and deletion channels** — Simultaneously satisfy PIPEDA Principle 4.9, GDPR Art. 17, and Korea's PIPA Arts. 35–39. Design machine-unlearning readiness up front.

<!-- stat-card -->
**④ A four-layer governance board** — A standing forum of DPO + AI Officer + Legal + Data Science. Quarterly compliance reports (echoing OpenAI's 3- and 6-month cycles).

<!-- stat-card -->
**⑤ Adopt synthetic data and simulation-based training** — Gartner — by 2030, synthetic data is projected to overtake real-world data. The synthetic data market is expected to grow from US$0.79B (2026) to US$6.9B (2034). Pebblous DataGreenhouse and PebbloSim are a Korean entry ramp into that current.

### 7.5. The Empty Seat in the Market — An AI Compliance Category

Gartner estimates that the **AI TRiSM (Trust, Risk, Security Management) market will grow from US$3.1B (2025) to US$13.8B (2030)**, a 35% CAGR. The AI Governance Platform market is expected to move from US$492M (2026) to over US$1B by 2030. Inside that growth, one seat sits visibly empty. **"Training-data lawfulness diagnosis"** — the category that grades a dataset against PIPEDA, GDPR, and the AI Act at once — does not really exist yet. Established players like OneTrust, TrustArc, BigID, Credo AI, and Holistic AI either focus on a single jurisdiction or operate at the AI-system governance layer. A tool that diagnoses lawfulness at the training-dataset layer, tuned to Korean language and Korean business context, is effectively absent.

Pebblous's place sits naturally on that empty seat. DataClinic = data *quality* diagnosis. AI-Ready Data = the technical axis of the premise. Add a *lawfulness signal*, and it extends to AI-Ready Compliance. DataGreenhouse + PebbloSim = lawful alternative-data infrastructure. The integration of those three axes is the entry ramp on the empty seat. Nothing newly invented — five years of assets aligning precisely with the PIPEDA decision. We note this not in the shape of an ad but in the shape of an observation. An AI-Ready Compliance era has arrived, and we have spent a long time near the work it requires.

> [!callout]
> **Lawfulness is not a compliance burden — it is a dimension of data quality.** A lack of lawfulness in training data feeds directly into weight leakage, hallucination, and the cost of machine unlearning — that is, into model quality. If AI-Ready Data was the diagnosis of five signals, AI-Ready Compliance is the six-dimensional diagnosis that adds one more. PIPEDA Findings #2026-002 is the first official coordinate of that sixth signal.

## The Time of Consent, and What Comes Next

Read the decisive line again — "consent cannot be obtained after the fact." Seven words. They do not cut one product at one company. They cut **the standard practice of an era**. The picture in which a company crawls, trains, then offers opt-out is now legally closed. From that close, one question follows — how is consent *before* training technically possible, or how is training feasible only with lawfully-consented data sources?

The most natural answer to both questions is **synthetic data and simulation-based training**. If the training material does not depend on real-world personal data, the after-the-fact-consent problem dissolves structurally. Gartner projects that synthetic data will overtake real-world data by 2030. The current is no longer purely an academic or industrial trend. It has entered the era of being **accelerated by legal enforcement**. PIPEDA #2026-002 is the first inflection point of that acceleration.

An honest admission is needed. Synthetic data is not a complete answer on its own. The lawfulness of the seed data used to generate it, defense against membership inference attacks, bias in the synthetic distribution — three new validation items follow. Machine unlearning may be recognized in the short term as a *good faith effort*, but it is academically incomplete. No single technique resolves PIPEDA's five violations at once. What is clear is that **combinations of techniques open a new path**. On top of synthetic data, simulation-based training, differential privacy (DP-SGD), machine unlearning, and data sourcing audits, the practical blueprint for AI-Ready Compliance can be drawn.

The questions the decision leaves behind start exactly where this report ends. **How will Korean firms align their data sourcing to the BC/Alberta bar within six months? At what cost, and through what techniques, will personal information latent in training weights be addressed? Who chairs the four-layer governance board, and on what agenda do its quarterly meetings run?** These are not questions a single report can close. They are the seats Pebblous will slowly fill in the writing that follows.

> [!callout]
> **Four commissioners, one decision, one era moved one cell.** Where morality asked and scholarship answered, law has now tied a binding knot. That knot lifts the lawfulness of AI training data to the seat of a global standard, and on top of it the next Pebblous premise — AI-Ready Compliance — draws itself. **The legal quality of data is also a subject of diagnosis.** That line is both the close of this report and the start of the work that follows.

## References

Primary sources (decision documents and statutes), the GDPR · AI Act · Korea's AI Framework Act, academic papers, law-firm analyses, market reports, and prior Pebblous series pieces — grouped by source. Verbatim quotations from the primary decision can be verified on the OPC's official page.

### Primary sources — government and international bodies

- 1.Office of the Privacy Commissioner of Canada. (2026). [**PIPEDA Findings #2026-002: Joint Investigation of OpenAI OpCo, LLC**](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-002/). May 6, 2026.
- 2.Office of the Privacy Commissioner of Canada. (2026, May 6). [_News Release: Joint investigation by Canadian privacy regulators_](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260506/).
- 3.Government of Canada. (2015). [_Personal Information Protection and Electronic Documents Act (PIPEDA)_](https://laws-lois.justice.gc.ca/eng/acts/p-8.6/FullText.html).
- 4.European Parliament & Council. (2024). [_Regulation (EU) 2024/1689 (AI Act)_](https://artificialintelligenceact.eu/).
- 5.European Parliament & Council. (2016). _Regulation (EU) 2016/679 (GDPR)_.
- 6.European Data Protection Board. (2024, December 17). [_Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models_](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf).
- 7.Garante per la protezione dei dati personali. (2024, December 20). [_Provvedimento n. 755/2024 (OpenAI €15M)_](https://www.euronews.com/next/2024/12/20/italys-privacy-watchdog-fines-openai-15-million-after-probe-into-chatgpt-data-collection).
- 8.Republic of Korea. (2026). **Framework Act on the Promotion of the Artificial Intelligence Industry and the Establishment of a Trustworthy Foundation (Korea's AI Framework Act)**. Effective January 22, 2026.
- 9.Personal Information Protection Commission (PIPC), Republic of Korea. (2025, August). Guide to Personal Information Handling in Generative AI (four-stage life cycle).
- 10.The New York Times Co. v. OpenAI & Microsoft. (2023). S.D.N.Y. Case 1:23-cv-11195.

### Academic papers

- 11.Bourtoule, L., Chandrasekaran, V., Choquette-Choo, C. A., Jia, H., Travers, A., Zhang, B., Lie, D., & Papernot, N. (2021). [_Machine Unlearning_](https://arxiv.org/abs/1912.03817). IEEE SP. arXiv:1912.03817.
- 12.Yao, J., Chien, E., Du, M., et al. (2024). [_Machine Unlearning of Pre-trained Large Language Models_](https://arxiv.org/abs/2402.15159). ACL 2024. arXiv:2402.15159.
- 13.Carlini, N., Tramèr, F., Wallace, E., et al. (2021). _Extracting Training Data from Large Language Models_. USENIX Security 2021.
- 14.Abadi, M., Chu, A., Goodfellow, I., et al. (2016). [_Deep Learning with Differential Privacy_](https://arxiv.org/abs/1607.00133). CCS '16. arXiv:1607.00133.
- 15.Biega, A. J., Potash, P., Daumé III, H., Diaz, F., & Finck, M. (2020). _Operationalizing the Legal Principle of Data Minimization for Personalization_. SIGIR 2020.
- 16.Wachter, S., & Mittelstadt, B. (2019). _A Right to Reasonable Inferences: Re-Thinking Data Protection Law in the Age of Big Data and AI_. Columbia Business Law Review, 2019(2), 443-493.
- 17.Bommasani, R., Klyman, K., Longpre, S., et al. (2024). [_The 2024 Foundation Model Transparency Index_](https://arxiv.org/abs/2407.12929). Stanford CRFM. arXiv:2407.12929.
- 18.Gebru, T., Morgenstern, J., Vecchione, B., et al. (2021). [_Datasheets for Datasets_](https://arxiv.org/abs/1803.09010). Communications of the ACM. arXiv:1803.09010.
- 19.Solove, D. J. (2013). _Privacy Self-Management and the Consent Dilemma_. Harvard Law Review, 126, 1880.
- 20.Anonymous. (2025). [_Unlearned but Not Forgotten_](https://arxiv.org/abs/2505.24379). arXiv:2505.24379.

### Legal analyses · press

- 21.MLT Aikins LLP. (2026). [_Practical Takeaways from Landmark Privacy Investigation into OpenAI's ChatGPT_](https://www.mltaikins.com/insights/canadian-privacy-regulators-release-chatgpt-findings/).
- 22.McMillan LLP. (2026). [_OpenAI Investigation Highlights the Need for Privacy Law Reform in Canada_](https://mcmillan.ca/insights/openai-investigation-highlights-the-need-for-privacy-law-reform-in-canada/).
- 23.The Globe and Mail. (2026, May 6). _OpenAI violated Canadian privacy laws in developing first ChatGPT model_.
- 24.CBC News. (2026, May 6). _OpenAI didn't respect Canadian privacy law when it trained ChatGPT_.
- 25.PPC Land. (2026). [_Canadian regulators find ChatGPT privacy rules broken from the start_](https://ppc.land/canadian-regulators-find-chatgpt-privacy-rules-broken-from-the-start/).

### Market and quantitative reports

- 26.Stanford HAI. (2025). [_AI Index Report 2025, Chapter 6 — Policy and Governance_](https://hai.stanford.edu/ai-index/2025-ai-index-report/policy-and-governance).
- 27.Gartner. (2026, February 17). [_Press Release: Global AI Regulations Fuel Billion-Dollar Market for AI Governance Platforms_](https://www.gartner.com/en/newsroom/press-releases/2026-02-17-gartner-global-ai-regulations-fuel-billion-dollar-market-for-ai-governance-platforms).
- 28.McKinsey & Company. (2025, November). _The State of AI 2025_.
- 29.CMS Law. (2025/2026). [_GDPR Enforcement Tracker Report_](https://cms.law/en/int/publication/gdpr-enforcement-tracker-report/).
- 30.Cooley LLP. (2026, January 27). [_South Korea AI Basic Act: Overview and Key Takeaways_](https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways).

### Pebblous AI Governance Quartet

- 31.Pebblous (2026-05-25). [**Magnifica Humanitas — Human Dignity in the Age of AI**](/report/pope-magnifica-humanitas/en/). Quartet I · morality and theology track.
- 32.Pebblous (2026-05-27). [**When Skill Documents Started Learning — A Deep Read of Microsoft SkillOpt**](/report/microsoft-skillopt-self-evolving-agents/en/). Quartet II · scholarship and optimizer track.
- 33.Pebblous (2026-05-28). [**Skills Accumulate Experience, Too — MUSE-Autoskill's Five-Stage Life Cycle**](/report/muse-autoskill-self-evolving-skill-lifecycle/en/). Quartet III · scholarship and lifecycle track.
- 34.Pebblous (2026-05). [_Upstage Sovereign AI Report_](/report/upstage-national-fund-2026-05/). (Adjacent: Korean AI policy.)
- 35.Pebblous (2026-04). _OpenMetadata × AI-Ready Data_. (Adjacent: DataClinic signals.)
