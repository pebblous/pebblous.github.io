---
title: Korea
subtitle: MSIT will add a public agent that reads welfare eligibility first
date: 2026-07-22
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korea

_MSIT will add a public agent that reads welfare eligibility first_

## Executive Summary

> [!callout]
> South Korea is the first G20 nation to offer free AI as a public service to all 52 million of its citizens. The program, unveiled by the Ministry of Science and ICT (MSIT), is called "AI for Everyone." A free chatbot with no usage caps launches by the end of 2026, and it will later expand into a public agent that finds and even applies for a person's welfare and administrative benefits on their behalf. But this free service comes with one condition: providers must run at least 80% domestic AI models.

> Writing that domestic-model share into policy looks like an operating rule for data sovereignty. Yet Korean training data remains scarce. As Pebblous has noted before, Korean makes up just 0.823% of Common Crawl, the most widely used web corpus. You can mandate a model's nationality, but the Korean data that model has to be fed cannot be conjured by decree.

> The heavier question sits one step further on. The public agent is designed to read a person's welfare "eligibility" first — combining signals about income, medical spending, employment, and housing — and to notify them proactively. Behind the word "free," the old question of who makes the data and who guards it scales up to the size of a nation. This piece follows both branches of that question across the policy's own numbers.

### Key Numbers

Sources: MSIT "AI for Everyone" call for proposals (2026-07-13), Seoul Economic Daily, The Electronic Times, and others. The Korean-corpus figure is from an Upstage report.

Four numbers compress the skeleton of this policy: the size of the population that gets free AI, the domestic-model share required of providers, the compute infrastructure the government is handing over, and the data scarcity that even those conditions cannot resolve.

<!-- stat-card -->
**52M** — Citizens eligible for free AI — First nationwide public AI among G20 nations

<!-- stat-card -->
**80%** — Mandated domestic-model share — 50% own foundation model + 30% other Korean models

<!-- stat-card -->
**512** — Government-supplied NVIDIA B200 GPUs — Given to selected providers for a fast launch

<!-- stat-card -->
**0.823%** — Korean's share of Common Crawl — You can set the model share; data stays scarce

## A Country Giving Free AI to 52 Million

On July 13, 2026, Korea's Ministry of Science and ICT issued a call for proposals for a program called "AI for Everyone." The goal is to let all of the country's roughly 52 million citizens use AI without usage limits or cost. No G20 nation has previously offered AI to its entire population as a public service. The call runs until August 11, with providers selected in August, agreements and a beta service in September, and a full launch in December.

![Government Complex Sejong — home to the Ministry of Science and ICT, which issued the 'AI for Everyone' call for proposals](./image/img-01-sejong-government-complex.jpg)
*▲ Government Complex Sejong, home to the Ministry of Science and ICT, which issued the "AI for Everyone" call | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Government_Complex_Sejong_(N).jpg)*

The service is designed in two stages. Stage one is a general-purpose chatbot that anyone can use for free. Stage two is a public AI agent that finds and guides people to public services and even files applications on their behalf. The government also outlined a plan to gradually upgrade this agent into a "one AI agent per citizen" that helps with asset management, learning coaching, and housing planning.

A widening gap sits behind the policy. Korea has about 23 million generative-AI users, yet roughly a third of the population has never used AI at all. In the MSIT–NIA survey on the digital divide, the AI-service adoption rate among digitally vulnerable groups such as low-income and elderly citizens was 31.9% — about half the 59.4% rate for the general public. On top of that, most users rely on the free tiers of foreign AI: ChatGPT (about 23.45 million users), Gemini (about 8.45 million), and Claude (about 2.41 million). "Free AI" aims at both gaps at once — the gap between those who use AI and those who cannot, and the absence of domestic infrastructure.

## The Condition: Mostly Homegrown Models

The condition attached to "free" is explicit. Providers must run their own domestic foundation model for at least 50% of the service, plus other Korean companies' domestic models for at least another 30%. Together that puts the domestic-model share at a minimum of 80%. Foreign models are allowed only for limited functions, and that portion is excluded from government cost support. In other words, if a provider wants to use foreign models, it pays out of its own pocket.

The government paired the condition with infrastructure. It will hand 512 NVIDIA B200 GPUs it holds to the selected providers so they can stand the service up quickly, and it has pledged to fund the operating costs of the nationwide service from 2027 through December 31, 2030. Domestic foundation-model builders such as LG AI Research (EXAONE), Upstage (Solar), SK Telecom (A.X), and Motif Technologies are named as candidate model suppliers, and two or three private companies with experience running large public-facing services will be chosen as providers. Kakao is seen as a leading candidate.

![NVIDIA's Blackwell GPU architecture unveiling — the B200 the government is supplying belongs to the same Blackwell generation of data-center GPUs](./image/img-02-nvidia-blackwell-gpu.jpg)
*▲ NVIDIA unveiling its Blackwell GPU architecture. The B200 the government is handing to providers belongs to the same Blackwell generation of data-center GPUs | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jensen_Huang_-_RTX_Blackwell_-_Nvidia_Keynote_-_CES_2025_Las_Vegas_(3).jpg)*

Read this condition as mere industrial policy and you miss half of it. Writing the domestic-model share into law means the state decides which country's models process the questions and conversations 52 million people ask every day. Handing AI to a whole population also creates a data-collection surface the size of that population. The decision to fill that surface with domestic models is written in the language of industrial policy, but in practice it reads more like an operating rule for data sovereignty.

> [!callout]
> "Which models fill the surface" is the same question as "who processes citizens' data." The 80% domestic condition is an attempt to keep that processing within the country. The problem is that setting a model's nationality does not, by itself, complete data sovereignty.

## What the Quota Cannot Fill

Requiring 80% domestic models specifies the vessel — the model — as domestic. But what fills that vessel, the Korean training data, is not produced by a condition. As Pebblous noted in an [earlier report](https://blog.pebblous.ai/report/upstage-national-fund-2026-05/en/), Korean accounts for just 0.823% of Common Crawl, the representative web training corpus. In a sea of data where English holds an overwhelming majority, Korean is closer to a minority language.

This bottleneck remains no matter how high the domestic-model share climbs. Even if a model is trained domestically, its performance ceiling stays low unless there is enough high-quality Korean data to feed that training. A model's nationality can be set by policy. Data cannot be produced by decree. Data becomes an asset usable for training only once it is created, cleaned, and cleared of rights disputes.

So the number "80% domestic models" should be a starting point, not the end, of the policy. The real task is who prepares the Korean data those domestic models will stand on — at what quality, and on what basis of rights. Without work that handles the quantity, quality, and provenance of data, the domestic-model mandate risks becoming a rule that changes only the nationality on the shell.

## An Agent That Reads Your Eligibility First

The policy's second stage — the public AI agent — opens a deeper question. This agent is designed to find and explain programs like youth housing support, employment initiatives, and welfare subsidies before an individual goes looking, and to file the applications too. On a national information network where interdepartmental data barriers have been lowered, the plan is for AI to analyze signals about a person's income changes, medical spending, employment status, and housing conditions, detect at-risk households early, and connect them to welfare proactively.

This design did not appear out of nowhere. The Ministry of the Interior and Safety's "AI Government Assistant" already took the step before it. Launched in 2021 with a character named Gooppi, the assistant surpassed 15 million subscribers in 2022 and opened a pilot service with Kakao in March 2026. Say "issue my resident registration certificate" in a KakaoTalk channel and it produces one of about a hundred kinds of electronic certificates, or books a public sports facility. The models used here are Kakao's own model, Kanana, and its guardrail model, Kanana Safeguard. If automating certificate issuance is the earlier step, proactive welfare — reading a person's eligibility first and notifying them — is the next one.

The convenience is real. If AI catches welfare that people missed because they didn't know it existed, it genuinely helps those left out by the information gap. But reading a person's eligibility first also means looking at that person's data first. Here the data-governance question emerges at the scale of a nation: who makes that data (who collects the income, medical, employment, and housing signals) and who guards it (the scope of interdepartmental sharing, the audit trail, the boundaries of consent).

The same question was raised at home. The Korean edition of Le Monde diplomatique asked whether "AI for Everyone" is really free, pointing out that when users' questions and data accumulate on central servers under the name of public infrastructure, the risk of personal-data leaks grows alongside the possibility of state monitoring of thought and disposition. It also flagged the cost problem — that, unlike the "universal technology welfare" branding, hundreds of billions of won in taxes go into initial model training and infrastructure. The word "free," it argued, must not obscure the flow of data and cost.

These worries are not Korea's alone. In countries that adopted proactive welfare AI earlier, the same risks recurred. In Denmark, an Amnesty International investigation (2024) found that a fraud-detection algorithm flagged people in non-traditional living arrangements or from non-EEA countries as priority targets for investigation, leading to mass surveillance. In the Netherlands' childcare-benefits scandal, an algorithm misclassified non-Dutch nationals as high-risk for fraud, and in the UK, reports found that a digital welfare system deepened inequality rather than easing it. UN human-rights bodies have warned that in such "digital welfare states," social security can degrade into an instrument of control.

![Envelopes from the Dutch tax authority's childcare-benefits (Toeslagen) department — the source of the scandal where an algorithm misclassified non-Dutch nationals as high-risk for fraud](./image/img-03-netherlands-toeslagen.jpg)
*▲ Envelopes from the Dutch tax authority's childcare-benefits (Toeslagen) department, the office at the center of the algorithmic misclassification scandal | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Belastingdienst_Toeslagen_enveloppen.jpg)*

> [!callout]
> The international lessons of proactive welfare all point in one direction. Frames like "sovereignty" or "efficiency" mean independence abroad, but at home they can serve as logic that justifies surveillance and discrimination. The greater the convenience of reading eligibility first, the larger the rules for how that data is governed must grow alongside it.

## The Question Behind "Free"

"Free AI for every citizen" is good news. The direction — narrowing the gap, growing domestic infrastructure, and connecting the excluded to welfare — deserves support. But the labels "free" and "universal technology welfare" easily obscure the two data problems sitting behind them. One is that the Korean data needed to fill domestic models is still scarce. The other is that an agent reading citizens' eligibility first is also looking at citizens' data first.

The question Pebblous keeps asking is simple: who makes the data, and who guards it? "AI for Everyone" moves that question from the scale of a company to the scale of a nation. Deciding the domestic-model share is a decision about who processes citizens' data, and designing a public agent is a decision about who guards it. Handling the quality, provenance, and rights of the data that feeds a model is, in the end, a task that outlasts designating the model's nationality. The problem posed by our [SovereignAI series](https://blog.pebblous.ai/project/SovereignAI/en/) — which framed sovereign AI around national self-reliance, governance, and data sovereignty — carries directly through here.

When the free chatbot arrives in December, and the public agent later begins reading individuals' eligibility, this policy's true report card will be decided not by convenience but by how it handles data. The question behind "free" stays the same: who makes that data, and who guards it?

## References

### Policy Announcements & Primary Reporting

- 1.The Korea Economic Daily. (2026). "[Korea Launches 'AI for All' Project, Deploying 512 GPUs for Free Public AI Service](https://en.sedaily.com/technology/2026/07/13/korea-launches-ai-for-all-project-deploying-512-gpus-for)."
- 2.The Electronic Times (etnews.com). (2026). "[MSIT issues call for proposals for the 'AI for Everyone' program](https://www.etnews.com/20260713000383)."
- 3.TheNextWeb. (2026). "[South Korea will give all 52 million citizens free AI access — with domestic models](https://thenextweb.com/news/south-korea-free-ai-chatbot-all-citizens-domestic-models)."
- 4.Kakao Corp. (2026). "[AI Government Assistant pilot service](https://www.kakaocorp.com/page/detail/11962)."

### Data Governance & International Comparison

- 5.Le Monde diplomatique (Korean edition). (2026). "[Is 'AI for Everyone' really free? — The fallacy and worries behind 'free for the people'](https://www.ilemonde.com/news/articleView.html?idxno=30146)."
- 6.Amnesty International. (2024). "[Denmark: AI-powered welfare system fuels mass surveillance and risks discriminating against marginalized groups](https://www.amnesty.org/en/latest/news/2024/11/denmark-ai-powered-welfare-system-fuels-mass-surveillance-and-risks-discriminating-against-marginalized-groups-report/)."
- 7.JURIST. (2025). "[UK use of AI in digital welfare system sparks human rights concerns](https://www.jurist.org/news/2025/07/uk-use-of-ai-in-digital-welfare-system-sparks-human-rights-concerns/)."

### Related Pebblous Reports

- 8.Pebblous Data Communication Team. (2026). "[Upstage National AI Fund report — Korean makes up 0.823% of Common Crawl](https://blog.pebblous.ai/report/upstage-national-fund-2026-05/en/)." Pebblous Blog.
