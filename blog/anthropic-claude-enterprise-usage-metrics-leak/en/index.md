---
title: Anthropic
subtitle: Anthropic
date: 2026-11-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Anthropic

_Anthropic_

## Executive Summary

> [!callout]
> Account data belonging to Korean companies that run Claude Enterprise left Anthropic's systems. Anthropic filed the report with Korea's Personal Information Protection Commission itself, and the commission has closed its preliminary review and opened a formal investigation. Anthropic says prompts, the model's answers, and payment details were never reached.

> The trouble lies in what that statement leaves uncovered. The notice Anthropic sent its customers lists, alongside names and email addresses and the account and organization IDs, the plan tier and the usage and spend metrics tied to each account. None of those fields records what anyone typed into Claude. All of them record how much of the service was used. The same notice files them as information that may have been accessed, and tells customers the company cannot confirm whether any particular person's information was viewed.

> The dates, figures, and notice wording running from section 1 through the first half of section 3 come from reporting by News1, Etoday, the Hankook Ilbo, and TokenPost, from the Seoul Economic Daily's English edition, and from the text of the customer notice as published by the researcher who posted it. The basis for applying Korean law comes from the commission's own guidance and from the Personal Information Protection Act. The point where Cathedral's account and Anthropic's diverge is drawn from English-language reporting that cites the draft report the Washington Post reviewed, and targeted phishing as the practical risk is that reporting's judgment as well. The reading in the second half of section 3, that the exposed fields can be laid over one another to recover the outline of an organization, and sections 4 and 5 are this article's interpretation.

### Key numbers

The first number marks how far this reached. The other two measure the gap between the day the intrusion was caught and the day the Korean process moved.

Sources: [News1 (2026-11-10)](https://www.news1.kr/it-science/security-hacking/6349641), [Etoday (2026-11-10)](https://www.etoday.co.kr/news/view/2646463).

<!-- stat-card -->
**112** — Korean corporate accounts in the report — The figure News1 and Etoday used. Other outlets wrote about 100, and the count is accounts, not people

<!-- stat-card -->
**23 days** — Intrusion to the Korean report — Intrusion on October 8, cut off on October 10, reported to the commission on October 31

<!-- stat-card -->
**10 days** — Report to formal investigation — Overseas operators are sometimes asked for materials before an investigation opens, which stretches the preliminary review, Korean outlets reported

## Korea's Investigation Began After Anthropic Shut the Access Off

It started inside Anthropic. On October 8, Cathedral, a US cybersecurity startup, exploited a flaw in third-party business software to get into Anthropic's internal systems. Anthropic caught the access two days later, on October 10, and shut it off. Cathedral was at the time taking part in Anthropic's external security research program, and Anthropic says it holds a written certification from the firm that the accessed data has been deleted and will not be used.

The incident reached the public on October 26, through the Washington Post. Anthropic reported the exposure of Korean enterprise account data to the Personal Information Protection Commission on October 31, and emailed enterprise customers in Korea and elsewhere on November 7. The next day Lydia Hallie, an Anthropic employee, set out the scope on her X account. Through November 9 the commission would say only that it had received the report and was reviewing it. On November 10 it announced a formal investigation.

| Date | What happened |
| --- | --- |
| October 8 | Cathedral reaches Anthropic's internal systems through a flaw in third-party software |
| October 10 | Anthropic catches the access and shuts it off |
| October 26 | The Washington Post reports the intrusion |
| October 31 | Anthropic reports the exposure of Korean corporate accounts to the commission |
| November 7 | Anthropic emails its enterprise customers |
| November 8 | Lydia Hallie, an Anthropic employee, sets out the scope on X |
| November 10 | The commission closes its preliminary review and opens a formal investigation |

▲ Dates as carried by News1, Etoday, and the Hankook Ilbo, and in the Seoul Economic Daily's English edition.

Ten days passed between the report and the formal investigation. A domestic operator might have faced a shorter wait. For overseas operators, Korean outlets reported, a request for materials sometimes comes before an investigation opens, which stretches the preliminary review. The commission said it would establish the circumstances and the scale of the exposure and examine compliance with the Personal Information Protection Act, naming the possibility of leakage through an outside security firm among the things it would look at.

The commission's authority over a US company is not written into the statute in so many words. The Personal Information Protection Act carries no explicit extraterritoriality clause. In a guide published in April 2024 on how the Act applies to overseas businesses, the commission took the position that it reaches companies offering goods or services to data subjects in Korea, and processing carried out abroad that affects data subjects in Korea. The breach report and the customer notification at issue here, together with the commission's power to demand materials, also sit among the duties Article 31-2 assigns to a domestic representative. Whether Anthropic falls under that designation requirement, and who its representative is if it does, we could not confirm.

## How Far the Conversations Claim Holds

Anthropic's account comes in two lists. One holds what it says was never reached. The other holds what it says could have been. The Lydia Hallie post quoted in the Korean coverage has the same shape: account information such as names, email addresses, and plan details was accessed without authorization, while prompts, outputs, and payment information were not.

| Stated as not reached | Listed in the notice as possibly accessed |
| --- | --- |
| Claude conversations (prompts and responses) | Names and email addresses, as business contact details |
| Passwords | Enterprise account ID |
| Payment card and bank account details | Organization ID |
| Source code and model weights | Plan tier |
| Consumer account data | Usage and spend metrics |

▲ Split in two from the notice Anthropic sent its customers and the fields carried in Korean coverage.

Read the left column on its own and there is room for relief. The sentences a company typed into Claude, the answers the model gave back, the card numbers: all of it stayed where it was. The right column then fills the space the left one leaves open, by a different route. If the left column is what was said, the right column is how much was used. Plan tier and usage and spend metrics carry no line of any conversation, and they do carry how often those conversations happened and what they cost.

Anthropic wrote both lists, and Cathedral puts the scope differently. Cathedral's draft report, which the Washington Post reviewed, describes paths to meeting transcripts, salary and job-offer terms, and internal Slack messages, and mentions business contact details for customers and partners. Anthropic answered that what Cathedral reached was a limited set of sales, HR, and IT systems, that Claude conversations and model weights were unaffected, and that Cathedral broke the rules of the security research program by not disclosing all of its activity. Cathedral replied that it had kept to responsible research practice and held the data it looked at to a minimum, and asked Anthropic to say which of its claims was wrong. The field list attached to the 112 Korean accounts sits outside that argument. That the party writing the scope and the party disputing it are two different parties still changes how the list should be read.

> [!callout]
> The notice's own filing deserves a second reading. The right column appears there as information that may have been accessed, not as information confirmed to have left. In plain terms, Anthropic does not know who opened what. The same document carries the line "We cannot confirm whether any particular person's information was viewed" and the line "We have no reason to believe you are at heightened risk." Jamieson O'Reilly, the security researcher who published the notice, took issue with the two sitting in one document. Not knowing and being fine are different things.

## Plan Tier and Spending Alone Sketch an Organization

Taken one at a time, the fields look unremarkable. Plan tier is a line in a contract. Usage and spend are numbers on a monthly invoice. What matters is that they went out bundled with the account ID, the organization ID, and the name and work email of the person who manages the account.

Plan tier says how deep an organization has gone into AI. Usage leaves a record of movement over time, and a jump in one month is a sign that something started inside the organization around then. Spend is the size of the budget riding on that change. The account ID and the organization ID settle which company and which unit the numbers belong to. The name and the work email attach that unit to a person.

The diagram below draws the combination. On the left are the four fields, ordinary contract and billing data when read apart. On the right is the picture they make once laid over one another.

▲ Pebblous original diagram. The fields on the left come from the notice as reported; the reading on the right is ours.

The bundle has an immediate use. Once a name and a work email arrive with a company, a plan, and a sense of scale, an email that opens with "your Claude Enterprise account" turns persuasive. The recipient really does manage that account, and the plan named in the message really is the one in force. That passwords stayed safe does nothing to shrink this. Picking a target takes the right name and the right context, which is a different requirement from a password. English-language coverage of the incident put the near-term risk on targeted phishing rather than content exposure, on the grounds that a billing email from someone who knows your tier and your spend is hard to tell from a real one.

How much can actually be read off, though, cannot be settled from what is public. Whether the usage and spend metrics Anthropic described were organization-wide totals, broken out by department or workspace, or carried a trend over time appears in neither the notice nor the coverage. The finer the unit, the sharper the picture an outsider can draw. We could not confirm the unit.

## The Content-Only Defense Has Been Challenged Before

"Nobody looked at the content" has served as grounds for reassurance before. That was close to the government's line in 2013, when the National Security Agency's collection of American call records came out. No one listened to the calls, the argument went; what was gathered was who called whom, when, and for how long.

The hardest pushback came from inside that world. Stewart Baker, a former general counsel at the NSA, said metadata on its own is enough to know a person's life. "Metadata absolutely tells you everything about somebody's life. If you have enough metadata, you don't really need content."

Michael Hayden, who ran both the NSA and the CIA, agreed with Baker in a 2014 debate at Johns Hopkins University and added a sentence of his own. "We kill people based on metadata." Targets were fixed from timing, frequency, and the pattern of the other party, with nothing taken from what was said on the call.

The two cases are nowhere near the same size. One is a state aiming at people; this one is billing data from 112 corporate accounts going out the door. The weight of the consequences does not sit side by side. What matches is the structure. Split the data into content and everything else, then say the content held, so this is fine. The rebuttal to that structure arrived more than ten years ago, and it came from the people who had actually used metadata.

## Why Pebblous Is Watching This Incident

This news usually gets read as a notice and passed over: if your company runs Claude, go check. For people who work with data, something else is left over. What a company leaves behind in an outside AI service does not end with the conversations. How many people, on which tier, since when, and how heavily piles up daily in that provider's ledger. That ledger is rarely on our own asset inventory, and rarely in our record of personal data processing.

The ledger does not sit in one place either. The door that opened here was not a product Anthropic built; it was outside software Anthropic used to run its business. Our account records live on the servers of the service we chose and on the servers of the services that service chose. Contracts and security checklists usually look one square ahead.

The questions companies ask when they consider bringing AI in are almost always about content. Will our documents be used for training? Are the conversations stored? Which servers do they sit on? Every one of them is necessary. What actually went out in this incident was somewhere other than where those questions were aimed.

So there are four things an organization can check.

- Whether you can write down, as a list, which metrics the outside AI services you use keep about your organization. Plan and seat count, call volume, monthly billing, and the unit each of them is stored and retained at.
- Whether your contract and data processing terms cover anything beyond conversation content. If the promise not to retain is attached only to prompts, the billing and usage records fall outside that promise.
- Whether someone is assigned to read past the sentence saying the content is safe when a breach notice arrives. In this notice, the fields that mattered were behind that sentence.
- Whether your phishing response starts from the assumption that staff names and work emails are already outside, bundled with plan and usage scale. That passwords are safe leaves that assumption untouched.

None of the four is easy to answer once an incident is underway. When we talk about AI-Ready Data, the span of data does not stop at the documents you feed a model. The record of when you fed them and how much is data as well, and most of that record currently sits in someone else's ledger. The commission's findings will settle the scale of this exposure and whether the Act was breached. A separate question outlives the investigation: who holds the records that are not content, at what unit, and for how long.

## References

### Korean Press Coverage

- 1.News1. (2026). "[112 Korean corporate Claude accounts exposed — PIPC opens investigation](https://www.news1.kr/it-science/security-hacking/6349641)." (Korean)
- 2.Etoday. (2026). "[PIPC opens investigation into Anthropic data exposure — 112 corporate accounts](https://www.etoday.co.kr/news/view/2646463)." (Korean)
- 3.Hankook Ilbo. (2026). "[Claude breached too — Anthropic reports exposure of about 100 Korean corporate accounts](https://www.hankookilbo.com/news/article/A2026110921140004704)." (Korean)
- 4.TokenPost. (2026). "[Report of possible exposure of about 100 enterprise accounts — PIPC reviewing](https://www.tokenpost.kr/news/ai/435351)." (Korean)
- 5.The Seoul Economic Daily. (2026). "[Data breach at Anthropic's Claude hits over 100 Korean corporate accounts](https://en.sedaily.com/world/2026/11/09/data-breach-at-anthropics-claude-hits-over-100-korean)."

### English-Language Reporting & Analysis

- 6.O'Reilly, J. (2026). "[Anthropic breach notice email](https://cellcog.ai/blog/anthropic-breach-notice-email/)." Cellcog.
- 7.Data Studios. (2026). "[Anthropic Claude account data exposure: 100+ Korean companies, Cathedral, PIPC](https://www.datastudios.org/post/anthropic-claude-account-data-exposure-100-korean-companies-cathedral-pipc)."
- 8.eSecurity Planet. (2026). "[AI Agents Breached Anthropic's Business Systems in 12 Hours, Report Says](https://www.esecurityplanet.com/artificial-intelligence/news-anthropic-ai-agents-third-party-business-systems-intrusion/)."
- 9.Gizmodo. (2026). "[Former DOGE Staffers' New Startup Claims It Hacked Anthropic](https://gizmodo.com/former-doge-staffers-new-startup-claims-it-hacked-anthropic-2000830560)."
- 10.The Decoder. (2026). "[AI agents hacked Anthropic, maker of arguably the most capable AI models for cyberdefense](https://the-decoder.com/ai-agents-hacked-anthropic-maker-of-arguably-the-most-capable-ai-models-for-cyberdefense/)."

### Official Documents & Statutes

- 11.Personal Information Protection Commission. (2024). [Guidelines on Applying the Personal Information Protection Act to Foreign Business Operators](https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=20691). (Korean)
- 12.Money Today. (2024). "[Foreign firms processing Korean personal data must follow Korean law — commission issues guide](https://www.mt.co.kr/tech/2024/04/04/2024040416512845377)." (Korean)
- 13.[Personal Information Protection Act, Article 31-2 (Designation of a Domestic Representative)](https://casenote.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8%EB%B2%95/%EC%A0%9C31%EC%A1%B0%EC%9D%982). (Korean statute)
- 14.Kim & Chang. (2025). "[Amended Personal Information Protection Act provisions on the domestic representative](https://www.kimchang.com/ko/insights/detail.kc?sch_section=4&idx=33813)." (Korean)

### Historical Precedent

- 15.Just Security. (2014). "[Michael Hayden: "We Kill People Based on Metadata"](https://www.justsecurity.org/10311/michael-hayden-kill-people-based-metadata/)." — original source of the Stewart Baker and Michael Hayden metadata remarks (2014 Johns Hopkins University debate).
