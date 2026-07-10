---
title: The Federal AI Bill That Would Freeze California
subtitle: The line between 
date: 2026-06-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Federal AI Bill That Would Freeze California

_The line between _

## Executive Summary

> [!callout]
> On June 4, 2026, a bipartisan group in the U.S. House released a 269-page discussion draft of an AI bill. It is called the Great American AI Act, and its central device is a preemption clause that would bar states for three years from regulating how AI is built. The federal government sets the rules for how a model is made; the states set the rules for how that model is used. That is the line it draws. And sitting precisely on that line, named as a target, is one California law.

> That law is California's AB 2013. It requires generative-AI developers to publish a summary of their training data — its sources and types, copyright status, whether it includes personal information, whether synthetic data was used — making it, in effect, the first training-data transparency mandate in the United States. The federal bill classifies this as "regulation of the development stage" and names it explicitly on its three-year freeze list. On the surface it is a jurisdictional fight, but underneath sits a sharper question: does anyone outside a company have a right to know what data a model was built from?

> For people who work with data, the signal is clear. Regulation's center of gravity is shifting from how a model behaves to what a model is made of — its training data. And the way that data is examined is shifting too: from disclosure, which anyone can read, to audit, which only a certified third party can perform. This piece looks at what that shift means for data-governance practice.

### Key Figures

Sources: [Roll Call](https://rollcall.com/2026/06/04/bipartisan-ai-draft-proposes-three-year-preemption-of-state-laws/), [Tech Policy Press](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/)

Four numbers map the bill's skeleton. The federal government would freeze state regulation of AI "development" for three years, and it points first at the California law that asked developers to disclose eleven categories of training data. In exchange, it puts a federal audit duty on only the handful of frontier developers above $500 million in annual revenue, with fines of up to $1 million a day for breaches. What gets frozen, and what fills the gap, lives inside these four numbers.

<!-- stat-card -->
**3 years** — Preemption window — State regulation of AI "development" frozen through the end of 2029

<!-- stat-card -->
**11 items** — AB 2013 disclosures — Training-data summary: sources, copyright, personal info, synthetic data, and more

<!-- stat-card -->
**$500M** — Federal duty threshold — Applies only to frontier developers (10²⁶ compute) above this revenue

<!-- stat-card -->
**$1M** — Max daily fine — Levied on frontier developers that breach federal audit and reporting duties

## What the Federal Bill Freezes for Three Years

The Great American AI Act is a bipartisan discussion draft introduced jointly by Republican Jay Obernolte of California and Democrat Lori Trahan of Massachusetts. It is not a passed law but a document released to gather comment — yet it is ambitious enough to run 269 pages, bundling frontier-AI governance, workforce, cybersecurity, and research and international cooperation into a single package.

The most contested part of the draft is the preemption clause. It would bar states for three years — through the end of 2029 — from making laws that "specifically regulate the development of AI models." State laws that govern what happens after a model reaches the market — deployment, provision, use — stay in place. Generally applicable laws on employment, consumer protection, and anti-discrimination are untouched too. That makes it narrower than the sweeping 5-to-10-year preemption that had been floated earlier.

In return for preemption, the federal government layers on its own discipline. The targets are the small set of developers that exceed $500 million in annual revenue and build frontier models — those trained on 10²⁶ or more compute operations. They would have to hire an Independent Verification Organization (IVO) certified by CAISI, the institute under NIST, file a compliance audit every six months, and report serious safety incidents within 15 days and imminent risks within 24 hours. Breaches carry fines of up to $1 million a day. A two-person startup, an open-weight developer, or an independent researcher all sit below this threshold.

![The U.S. Capitol, west front — where the bipartisan Great American AI Act discussion draft was introduced](./image/img-01-us-capitol.jpg)
*▲ The U.S. Capitol, west front — where the bipartisan Great American AI Act draft was introduced | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:United_States_Capitol_-_west_front.jpg) (Public Domain, Architect of the Capitol)*

> [!callout]
> **The core**: this bill splits authority so that the federal government governs how models are made and states govern how they are used. The problem is that the boundary does not draw cleanly, and the first thing to land on that line is the California law telling developers to disclose their training data.

## AB 2013, the Law That Says Disclose Your Training Data

The federal bill does not leave its preemption targets abstract; it names specific state laws. At the top of that list is California's AB 2013. Mentioned alongside it are parts of SB 942's content-watermarking requirements and the frontier-AI safety laws of California, New York, and Illinois. Of these, AB 2013 carries the most weight from a data point of view.

![The California State Capitol in Sacramento — where AB 2013, the training-data disclosure law, was enacted](./image/img-02-california-state-capitol.jpg)
*▲ California State Capitol, Sacramento — where AB 2013 mandating AI training-data disclosure was enacted | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_California_State_Capitol_Building,_Sacramento_(32884057540).jpg) (CC BY 2.0, Tony Webster)*

AB 2013 requires companies that build generative AI to publish a summary of their training data. It is not a vague one-liner but a fairly specific list: the sources and owners of the data, how the data supports the model's purpose, the number of data points, their types and characteristics, copyright, patent, and trademark status, purchase or license information, whether personal or aggregated consumer information is included, any cleaning and processing, the collection period and first date of use, and whether synthetic data was generated and used. Only systems for security, aviation, and national security are exempt.

This duty was originally set to take effect on January 1, 2026. It was a rare training-data transparency law for the United States — one that let outsiders see what materials an AI was forged from. The federal draft classifies it as "a law that regulates the development stage" and places it on the three-year freeze list. The logic: a requirement to disclose training data is, in effect, a regulation that reaches into how a model is built.

> [!callout]
> **Why it matters**: AB 2013 looks on its face like a law demanding a single disclosure form, but it is really the first implementation of a data-transparency principle — put the model's bill of materials out where others can see it. The fact that the federal government wants to freeze this one first tells you where the real front line of regulation sits today.

## 'Development vs. Deployment'? The Real Fight Is Over Data

The whole weight of the bill rests on one line separating "development" from "deployment." Development is the pre-release stage — training, fine-tuning, testing, and designing a model. Deployment is what comes after the model is out in the world — implementing, providing, and using it. The federal government takes the front half and leaves the back half to the states. It looks clean, but in practice the line is blurry.

![An AI chip and server-rack infrastructure — the technology at the center of the development-vs-deployment boundary dispute](./image/img-03-ai-machine-learning.jpg)
*▲ AI chip and data-center infrastructure — the technology at the heart of the 'develop vs. deploy' dispute | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Artificial_Intelligence_%26_AI_%26_Machine_Learning.jpg) (CC BY 2.0, Mike MacKenzie)*

Co-sponsor Trahan herself conceded that this boundary is "genuinely difficult to implement in legislative text." An analysis by the Future of Privacy Forum (FPF) points to the same spot: many state AI laws do not cleanly separate development from deployment, instead imposing duties that span both stages. Training-data disclosure sits right on this boundary. Gathering and cleaning data is development, but publishing a summary of it is closer to a disclosure act that happens after the model ships.

So the legal dispute over "development vs. deployment," translated into the language of people who work with data, becomes a different question entirely. Who has the right to look at training data? Do we bind this data as a development-stage secret, or pull it out as a disclosure item of the deployed product? Where the line is drawn decides whether the same training data is a trade secret or something a company is obligated to disclose.

> [!callout]
> **In one line**: "development vs. deployment" reads like a jurisdictional argument, but at heart it is about who controls the visibility of training data. Push the line toward development and training data recedes from outside view; pull it toward deployment and it becomes a disclosure item.

## From Disclosure to Audit: The Center of Gravity Moves

In place of the state disclosure duty it freezes, the federal government fills the gap with audit. The picture AB 2013 drew was simple: a developer publishes a training-data summary, and anyone can read it. The picture the federal bill proposes is different. A certified Independent Verification Organization goes inside the company, audits it every six months, and reports the results to CAISI. For the same data, one path is disclosure open to the public; the other is an audit open only to a vetted third party.

![The Jaguar supercomputer at Oak Ridge National Laboratory — illustrating the scale of compute required for frontier AI model training subject to federal audit duty](./image/img-04-supercomputer.jpg)
*▲ Jaguar supercomputer, Oak Ridge National Laboratory (224,000 cores) — the compute scale associated with the federal audit duty ($500M revenue + 10²⁶ operations threshold) | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jaguar_Supercomputer_(4100439871).jpg) (CC BY 2.0, Oak Ridge National Laboratory)*

The two models build trust in different ways. Disclosure puts information out in the open so anyone can verify it. Audit delegates verification to a qualified body and asks you to trust the result. In terms of depth, an audit can reach further into the data; in terms of reach, disclosure travels far wider. Under the federal bill, the public's line of sight into training data actually narrows. That is part of why groups like NetChoice view aggressive audits and data sharing as a trade-secret risk.

For teams that handle data governance, this shift lands as a practical task. In the short term, the burden of responding to California's AB 2013 may be deferred during the preemption window. But if a federal audit regime takes its place, the capacity to withstand an audit — to trace and evidence your data — matters more than the capacity to produce a public disclosure summary. The weight moves from showing the outside world what you trained on to being able to prove, internally, what you used.

And preemption has an end. When the sunset arrives in three years, the front line opens again. Whether training-data regulation returns then as a stronger disclosure duty, or whether the federal audit model hardens into a de facto standard, no one can say for certain right now. One thing is clear. What regulation fights over has moved from a model's outputs to a model's materials — and to who gets to examine those materials, and how.

> [!callout]
> **To close**: on the surface this bill is a power struggle between the federal government and the states, but underneath it is a question of visibility around training data. As the center of gravity moves from disclosure to audit, what the data side should prepare is a well-ordered, traceable record of training data. Whether regulation asks for disclosure or for audit, the question to answer is the same: what data was this model built from?

## References

### Industry & Press

- 1.Roll Call. (2026). "[Bipartisan AI draft proposes three-year preemption of state laws](https://rollcall.com/2026/06/04/bipartisan-ai-draft-proposes-three-year-preemption-of-state-laws/)." _Roll Call_. — Breaking coverage of the bill. It would preempt state regulation of AI "development" for three years and names California's AB 2013 as an explicit target.
- 2.Future of Privacy Forum. (2026). "[Frontier AI Goes Federal: How the Great American AI Act Compares to State Laws](https://fpf.org/blog/frontier-ai-goes-federal-how-the-great-american-ai-act-compares-to-state-laws/)." _FPF_. — A comparison of the federal bill with state laws, arguing that many state laws do not cleanly separate "development" from "deployment," leaving the preemption boundary ambiguous.
- 3.Tech Policy Press. (2026). "[Unpacking the Great American Artificial Intelligence Act of 2026](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/)." _Tech Policy Press_. — A detailed structural analysis of the 269-page bill, explaining IVO third-party audits, CAISI oversight, and the catastrophic-risk framework.

### Official Documents

- 4.California State Legislature. (2024). "[AB 2013: Generative artificial intelligence — training data transparency](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2013)." _California Legislative Information_. — The law requiring generative-AI developers to publish a training-data summary. It was set to take effect on January 1, 2026.
