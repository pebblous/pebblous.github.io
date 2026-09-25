---
title: Education Apps Say What They Collect and Go Quiet on the AI
subtitle: NYU researchers scored the privacy policies of 48 education platforms, and one in three ran AI features on screen with no meaningful account of that AI on their main policy pages
date: 2026-09-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Education Apps Say What They Collect and Go Quiet on the AI

_NYU researchers scored the privacy policies of 48 education platforms, and one in three ran AI features on screen with no meaningful account of that AI on their main policy pages_

## Executive Summary

> [!callout]
> Posted to arXiv on September 23, a study from New York University asks why privacy keeps sliding to the back of the queue in the software that schools and universities run. The researchers interviewed 12 EdTech practitioners and scored the privacy policies of 48 platforms in active use, dividing each policy into five dimensions. The phrase the authors took for their title summarizes the sequence: we'll fix it later. This article follows that deferral into the public documents and asks which dimension it stops at.

> The emptiest dimension was AI. Sixteen platforms out of 48, or 33%, run AI features a user can see on screen while offering no meaningful account of what that AI does. The other end of the rubric looks different. Seventy-nine percent spelled out the specific types of data they collect. The researchers also drew the boundary of the audit themselves. It covers only documents reachable in one or two clicks from a homepage, so a zero marks the absence of an accessible disclosure and not proof that nothing exists inside the company.

> Sections 1 through 3 follow what the paper puts on the page. Section 4, which sets the findings beside the rules Korea now applies when a school picks learning-support software, is this article's own work and is not in the paper.

### Key Figures

Source: [arXiv 2609.28137](https://arxiv.org/abs/2609.28137) (September 23, 2026), Tables 3 and 4.

<!-- stat-card -->
**33%** — Platforms with no AI disclosure — 16 of 48. AI features were visible on screen and the primary policy documents explained none of them

<!-- stat-card -->
**73%** — Middle score on accountability and breach — A general email address, vague breach language, and a claim of 'industry-standard' security with no detail

<!-- stat-card -->
**79% and 23%** — Specific about collection, specific about AI — Measured against the same two-point bar, 79% cleared it for collected data and 23% cleared it for AI use

<!-- stat-card -->
**6.29** — Average total across the 48 platforms — Out of 10, standard deviation 1.88. Each of the five dimensions takes 0 to 2 points and the five are summed

## Deferring Looks Like the Right Call Every Time

That EdTech puts privacy off is not by itself a new finding. Earlier work has already recorded vague policies, excessive collection, uneven procurement, and organizational underinvestment. Separate strands have shown software teams treating privacy as a late-stage concern, developers of child-directed apps treating compliance as a threshold to clear rather than a foundation, and security underinvestment behaving as a rational choice when the incentives point the wrong way. What this paper adds is the part that is harder to see. It asks how those decisions actually get made inside an organization, then holds the answers up against the public documents.

The researchers contacted roughly 100 people, drew interest from 15, and completed 30- to 45-minute video interviews with 12. Three more could not take part because of non-disclosure agreements and internal compliance restrictions. Participants came from startups and nonprofits in the United States and India, a university research lab, and public K-12 districts. The authors make no claim that these 12 represent the industry. They write that they do not claim analytical saturation, and that their confidence rests only on the same accounts converging across people in different roles and contexts.

The first account that converged was deferral. Nobody said privacy did not matter. What repeated instead was a sequence: once the pilot is running, once the core functionality is in place. A participant who had co-founded a startup describes security as a second base layer, something the team would start putting in place once the pilots were going. Nonprofits and schools faced a different kind of pressure and landed in the same spot. Privacy work had to compete with visible program costs, so it needed a business case. A product manager at an adult learning organization said the team's first question was whether the investment would translate into student outcomes, growth, or future funding.

The second was delegation. A software engineer at a startup said the team relied heavily on Amazon's cloud for data storage, and a developer at another put every piece of data, user records and the company's own codebase alike, into Azure. Basic controls such as encryption and two-factor authentication were common. Threat modeling, provenance tracking, and systematic privacy review were described instead as work that turns urgent only after compliance pressure or an incident. Responsibility moved downward as well. One participant described smaller vendors bypassing district procurement and going straight to the school to ask for the data, a layer schools often have neither the equipment nor the understanding to manage.

The third was feedback. Usability ratings and comments on learning outcomes arrive steadily, and comments about privacy almost never do. A participant at an education nonprofit in India described a sandbox phase in which a small group evaluates the platform before full rollout, and said direct feedback on security and privacy features is uncommon, with most of it arriving as usability ratings. A participant at a university research lab traced the silence of users to a belief that one's own data could not be that valuable. Privacy harms are probabilistic, arrive late, and resist attribution, so an absence of complaints reads inside an organization as evidence that nothing is urgent.

Put the three together and every one of these decisions can look locally rational at the moment it is made. Cloud defaults cost less than building privacy engineering in house, pointing at a policy document is easier than operationalizing it, and waiting for complaints is cheaper than auditing data flows in advance. A principal data scientist at a large nonprofit left the paper a sentence that sums up this structure of time.

"Someone, oftentimes me, has to step in and say: it's much better for us to take our vitamins now than to have to take a serious dose of painkillers later."

The paper prices the painkillers in its opening pages. Unacademy in India exposed more than 20 million user profiles in 2020, Illuminate Education exposed sensitive records affecting more than 800,000 New York City students, and the 2024 PowerSchool incident reached tens of millions of records. For the second of those the paper cites a November 2025 announcement from the New York Attorney General's office. Three states, New York, California, and Connecticut, secured a $5.1 million settlement three years after the 2022 breach. What the investigation pointed to was not a sophisticated attack but the absence of basic measures, among them a failure to monitor for suspicious activity. The cost of a privacy failure, the paper explains, arrives late, spreads thin, and is carried by students more often than by the organization.

The authors add one more caution against reading this picture as good intentions alone. The deferral that surfaced in the interviews came in two kinds. In schools, nonprofits, and smaller organizations, staffing, budget, and expertise were frequently just absent. In some commercial settings, though, extensive behavioral tracking and personalization were tied directly to the value of the product, which makes collecting less data the same act as making the product worse. The university lab participant who explained the silence also spoke about cost, saying that maintaining privacy comes at a cost and that a new organization might have to forgo some of its profit if it does not collect the data or personalize the tool. Deferring for want of capacity and not deferring because collection pays do not yield to the same remedy.

AI enters this picture as an amplifier rather than a new item on the list. Where ownership of privacy is unclear, feedback is thin, and incentives point elsewhere, the arrival of AI makes what happens downstream even harder to inspect. The example the authors give is concrete. A parent may understand that a platform stores grades without knowing that a teacher's spreadsheet upload can send student data to a third-party model, or that an automated recommendation can reshape a learning path. That opacity weakens a feedback loop that was already limited, because a user cannot tell what processing took place, which actor made the decision, or where to raise a concern.
