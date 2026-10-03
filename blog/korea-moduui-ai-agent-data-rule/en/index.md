---
title: Moduui AI Will Book and Pay for You Before Korea
subtitle: Korea
date: 2026-10-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Moduui AI Will Book and Pay for You Before Korea

_Korea_

## Executive Summary

> [!callout]
> This article reads the privacy problem Korea's government has only just begun to touch, with the October beta of Moduui AI — the nationwide AI service the Ministry of Science and ICT is preparing with SK Telecom, KT and Kakao — now close. The service is built to act rather than to talk. A user asks out loud, and the AI places a call, buys a train ticket, takes a hospital appointment and settles the payment. At that moment a name, a phone number and a card stop living inside one company.

> The ministry said on September 30 that four things now have to be made clear: who the merchant receiving the data is, which fields get handed over, how long they are kept, and what they are used for. All four remain open. The schedule published the same day runs to a closed beta in October and a public launch in December. The agentic AI guideline the Personal Information Protection Commission has promised is due "within the year." The service opens its doors before the standard appears.

> Sections 1 through 4 stay with what the ministry and the commission announced, what the operators said in interviews, and what the reporting on both recorded. Section 5 reads the same material again through the eyes of someone who works with data, and that reading belongs to this article.

### Key figures

Two kinds of numbers are attached to this project. Some of them measure what the government is putting in. The rest measure what nobody has settled.

Sources: [Financial News (2026-09-30)](https://www.fnnews.com/news/202609301342229452), [Newsis (2026-09-04)](https://www.newsis.com/view/NISX20260904_0003776405), [Dailian](https://www.dailian.co.kr/news/view/1691285).

<!-- stat-card -->
**512** — B200 GPUs funded this year — Kakao's consortium, ranked first, takes 256; the second and third each take 128

<!-- stat-card -->
**250B won** — In next year's budget request — GPU support does not stop this year. It carries into the government's 2027 request

<!-- stat-card -->
**Four** — Items still undecided — The receiving merchant, the fields handed over, the retention period, the purpose of use

<!-- stat-card -->
**Zero** — Published rules for beta records — No document yet says who stores, or who may open, the booking and payment logs made during the beta

## What Opens in October

Moduui AI is both a government project and the service it produces, and the name was given by the Ministry of Science and ICT. Three consortiums the government selected each build their own product, and all of them sit under one banner. At the kickoff meeting held at the Korea Press Center on September 4, Deputy Prime Minister Bae Kyung-hoon said the ministry would "absolutely not encourage competition between the consortiums" and would instead "build collaboration between them so that Moduui AI can go out with a single identity." Three companies are dividing up one service, not meeting each other in one market.

Each of them holds a different position. SK Telecom is using the phone line and text messages as its route, so a user can summon the AI over a call without installing anything new. KT chose to fold its own AI, Ieum, into services people already use, and its consortium includes Musinsa, Zigbang, Danawa, EBS and BC Card. Kakao opens KakaoTalk, the phone and the web together, with Seoul National University Hospital, Shinhan Bank, Lunit and Jobis&Villains taking part. On the model and infrastructure side of Kakao's consortium sit LG AI Research and LG Uplus.

What the government supplies is compute and budget. A July 23 announcement committed 512 Nvidia B200 GPUs to the project, allocated by evaluation rank: 256 to the top-ranked bidder and 128 each to the second and third. Kakao came first. Next year's budget request carries 250 billion won.

![Nvidia HGX B200 NVL8 server board with eight GPUs installed](./image/img-01-b200-gpu.jpg)
*▲ The Nvidia B200 GPU the government is funding for the Moduui AI project. Pictured: an HGX B200 NVL8 board holding eight GPUs | Source: [Wikimedia Commons (Pokiiri, CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Nvidia_DGX-B200-HGX.jpg)*

The user targets the three companies have named put a scale on this. At the kickoff meeting SK Telecom cited 5 million people by the end of this year and 10 million next year, KT said it would grow from 5 million this year to 20 million next year, and Kakao said it would hit 5 million by year-end before widening to 30 million. If those targets hold, tens of millions of people will be handing their bookings and payments to this service next year.

The schedule has two stops. A beta opens in October for a limited set of users, and December widens the agent features for the public launch. The beta does not open everything at once. All three consortiums are reported to start from basic functions such as chat and search, with execution-type agents widening in stages once the service has been verified. SK Telecom, though, says its "call on my behalf" and "answer on my behalf" features get a trial release in the October beta. Execution reaches inside the beta window.

## One Booking Moves Your Data Through Three Parties

The most concrete picture came from SK Telecom. Cho Hyun-deok, who runs the company's A-dot phone service, said in a September interview that "in October, 'call on my behalf' and 'answer on my behalf' will be released on a trial basis," and then described what it is for: "when an older person has to install the KTX or SRT app to book a train ticket, the AI calls on their behalf and books and pays for the trip instead." He did not stop there. The service, he added, "connects to things like Goodoc or KTX, with a payment agent attached on top, so that one task gets solved from end to end."

That single sentence holds at least three parties. The carrier that receives the user's words, the hospital booking service or rail operator that receives the reservation, and whoever processes the payment. On training data there is an explanation. Cho said that "some users of A-dot phone have consented to training. Even where they have consented, important information containing personal data is removed." Stripping data out of training and handing data over in a transaction are separate matters. A booking and a payment only go through once a name, a contact number and a payment method reach the other side.

▲ Sources: Financial News (2026-09-30); Dailian interview with SK Telecom (2026-09).

Outside Korea the problem has already been handled once or twice. OpenAI narrowed the scope in its Agentic Commerce Protocol so that only the information a purchase requires reaches the merchant, and only with the user's permission. Meta let people set the access scope app by app in its AI assistant Muse and required user approval ahead of sensitive actions such as a purchase.

Those guards were in place and something still slipped. A user who handed a second-hand sale to Muse found their home address passed along to the buyer. That user had chosen "always allow" in the access permissions but said they had expected a separate approval for each transaction before any personal information actually went outside. What leaving a permission switched on covers was counted one way by the person and another way by the system.

## The Law Assumes a Person at the Screen

Under the Personal Information Protection Act, passing your data to another company requires consent. The procedure was designed on the assumption that one person is sitting in front of a screen. It shows who will receive the data, writes down what will be sent, and has that person press the button for that one case. A human is inserted into every single transfer.

An agent empties that seat. A user says "book me a hospital appointment" once, and from there the AI judges how many places receive what. The person delegates at the start and does not come back for the individual transfers. The consent procedure has not disappeared. The place where consent used to fit has.

The ministry accepts that it cannot fill that seat alone. An official said that "the parts we cannot judge require consultation with the Personal Information Protection Commission and related ministries." One ministry cannot settle this by setting service standards; the body that owns personal data policy has to work it out alongside.

The same official described how far the work has come: "right now we are at the stage of hearing which items companies would like clarified." That is not a room where a draft sits on the table and the edits are being collected. It is a room where the list of things to decide is still being written down.

![Government Complex Seoul, which houses the Personal Information Protection Commission](./image/img-02-government-complex-seoul.jpg)
*▲ Government Complex Seoul, home to the Personal Information Protection Commission and other ministries | Source: [Wikimedia Commons (Seoul Institute, CC BY 4.0)](https://commons.wikimedia.org/wiki/File:Government_Complex_Seoul_Main_Building.jpg)*

> [!callout]
> The shape of the problem fits in a line. The law assumes someone gets asked every time, and the agent sells the promise that one instruction is enough. Bridging the two means writing the scope of the delegation down in advance, then being able to check afterwards what actually moved inside that scope. Terms of service and settings handle the first part well enough. The second part works only if a record exists.

## The Rules Arrive After the Service Does

The rulemaking side has not been idle either. On September 23 the Personal Information Protection Commission held the second meeting of its AI Privacy Public-Private Policy Council at Bank Hall in Seoul. Thirty-six people drawn from academia, industry, the legal profession and civil society sit across three subcommittees: data processing standards, risk management, and the rights of data subjects. The risks distilled from field interviews in July and August include prompt injection attacks and the excessive authority handed to agentic AI. Among the standards called for are a boundary between autonomy and approval, the status and responsibility of each participating party, and retention and deletion standards for personal data such as logs and memory. How long records are held and when they get erased already sits on the regulator's list by name.

Six days later the chair put a date on it. At the Global AI Privacy Forum on September 29, Chair Song Kyoung-hee said that "as AI evolves into agents, the heart of privacy is also shifting to how much information and authority we delegate," and promised to "publish within the year an agentic AI guideline that builds privacy in from the design stage." An example of how authority might be split came with it: "allowing a schedule management agent to reach the calendar while blocking it from medical records, or requiring a person's confirmation before a product payment."

The announced outline covers more than splitting permissions. Controlling the risk that arises when an agent exchanges data with outside tools, and managing the way data gets recorded, were raised alongside it. So were standards that let humans intervene and supervise across the whole process rather than only at the start, and traceability that lets a user grasp what the agent needed and why. Narrowing authority in advance and looking back at what moved afterwards stand side by side at this preview stage.

A government-wide decision followed on October 2. At the CAIO Council, chaired for the first time by Lee Hae-min, Senior Presidential Secretary for AI Future Planning, the government resolved to establish standards for how AI agents may process and use personal data, together with a verification system for security and safety. Attendance widened from 28 minister-level bodies to 42 central administrative agencies, and more public APIs and data will be opened so that Moduui AI can reach public services. What stood on September 30 as "consultation is needed" had moved three days later to "we will build it."

Lined up by date, the order is still visible. The service opens in October and goes public in December. The standard is promised within the year. Even at its earliest it lands in the same month as the public launch, and the whole beta period is a stretch with no standard in place.

| Date | Service side | Rules side |
| --- | --- | --- |
| July 23 | 512 B200 GPUs committed | — |
| September 4 | Kickoff meeting; collaboration policy across the three consortiums | — |
| September 23 | — | Second public-private council meeting; retention and deletion standards for logs and memory named as a task |
| September 29 | — | The commission promises an agentic AI guideline within the year |
| September 30 | October beta and December launch schedule published | The ministry lists the four items to be made clear |
| October 2 | — | CAIO Council resolves to build processing standards and a verification system |
| October | Closed beta — real bookings and payments tried out | No standard |
| December | Public launch | Guideline promised "within the year" |

▲ Published schedules and announcements in date order. Sources: Herald Business (2026-07-23), Newsis (2026-09-04), ZDNet Korea (2026-09-23), Boannews (2026-09-29), Financial News (2026-09-30 and 2026-10-02).

The word beta makes this gap look smaller than it is, and what moves through it is not test data. However limited the user group, real names buy real train tickets and real cards settle them. A decision to build the standards has been taken. Who stores the logs and conversation records created in that stretch, and who may open them, has no published answer right now.

## Why Pebblous Is Watching This Timeline

Most of the talk around this project has gathered around performance and nationality. Which model gets used, how large the domestic-model share should be, how many GPUs each bidder receives. In a service the whole country uses, trust is not decided by where a model ranks. It turns on whether you can find out later where your information went.

Any organization that has done data governance will recognize the shape. Narrowing permissions in advance and recording what actually happened under those permissions are different jobs, and the first usually gets built before the second. The example Chair Song offered belongs to the first. A design that opens the calendar, blocks medical records and puts a human in front of a payment is control before the fact. The second side, being able to pull up afterwards what went where and when, is still only announced. How long logs and memory are held, when they get erased, and whether a data subject can open those records themselves all wait on the guideline.

One line comes back whenever Pebblous talks about AI-Ready Data. A transfer that was never recorded cannot be undone. In a service where an agent moves on a user's behalf, that line applies as written. Where the fields handed over, the party that received them and the retention period leave no trace, there is no argument to have later about the scope of consent. A short beta does not mean small risk. It means a short window in which to decide whether records get kept at all.

So the question readers are left with is not aimed at the government alone. When the AI inside your own organization calls an outside service and passes customer information along, can you produce a list today of what was sent and where it went? If the standard lives in a document while the transfer records are scattered somewhere in the logs, the order on your side matches the one described above.

Thanks for reading this far. The Moduui AI schedule and the discussion around the agent data rule can be read in the original at [Financial News](https://www.fnnews.com/news/202609301342229452) and [ZDNet Korea](https://zdnet.co.kr/view/?no=20260930161942). If you get into the October beta, it is worth watching which consent screen appears at the booking and payment steps, and whether that screen names the party receiving your information. We would be glad to hear what you find.

## References

### Government announcements and policy

- 1.Herald Business. (2026). "[512 government-held GPUs committed to the 'Moduui AI Project'; SMR and defense-semiconductor ecosystem building also accelerates](https://biz.heraldcorp.com/article/10817351)." 2026-07-23.
- 2.Newsis. (2026). "[Coverage of the Moduui AI kickoff meeting](https://www.newsis.com/view/NISX20260904_0003776405)." 2026-09-04.
- 3.Financial News. (2026). "[In the age of AI booking and paying, the government builds an 'agent data rule'](https://www.fnnews.com/news/202609301342229452)." 2026-09-30.
- 4.Financial News. (2026). "[Government to set data-processing standards for AI agents before Moduui AI launches](https://www.fnnews.com/news/202610021605548792)." 2026-10-02.
- 5.Electronic Times (ETNews). (2026). "[Senior Secretary Lee Hae-min: "Ministries must drop the walls between them" — first CAIO Council meeting](https://www.etnews.com/20261002000206)." 2026-10-02.

### Operator and service coverage

- 6.ZDNet Korea. (2026). "[[AI Right Now] The national AI gets its October preview — Moduui AI's first beta](https://zdnet.co.kr/view/?no=20260930161942)." 2026-09-30.
- 7.Kookmin Ilbo. (2026). "[AI now books and pays on your behalf — Moduui AI's October debut](https://www.kmib.co.kr/article/view.asp?arcid=9000009112)."
- 8.Dailian. (2026). "["No need to install an app — the AI calls for you": SK Telecom's Moduui AI October beta [interview]](https://www.dailian.co.kr/news/view/1693733)." Published 2026-09-23 (interview conducted 09-22).
- 9.Dailian. (2026). "[Kakao ranks first for Moduui AI, assigned 256 B200 GPUs](https://www.dailian.co.kr/news/view/1691285)."
- 10.Newspim. (2026). "[SK Telecom, KT and Kakao target an October Moduui AI beta and 5 million monthly visitors](https://www.newspim.com/news/view/20260904000615)." 2026-09-04.

### Privacy regulation

- 11.ZDNet Korea. (2026). "[Privacy in the age of AI agents? The commission holds its second public-private meeting](https://zdnet.co.kr/view/?no=20260923151403)." 2026-09-23.
- 12.Boannews. (2026). "[PIPC chair: "An agentic AI guideline within the year," stressing permission management](https://www.boannews.com/news/articleView.html?idxno=146084)." 2026-09-29.
