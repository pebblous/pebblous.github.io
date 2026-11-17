---
title: How Will Korea
subtitle: Korea
date: 2026-11-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How Will Korea

_Korea_

## Executive Summary

> [!callout]
> Korea's government has made the AI that carries out work on a person's behalf a national project. On July 23, 2026, at the 11th Science and Technology Ministers' Meeting, the Ministry of Science and ICT announced an Agentic AI Initiative drawn up jointly with the other ministries involved. The plan is to build up, at a national level, AI that takes a goal, makes its own plan, calls outside tools and finishes the job, and it stands on three strategies: leading on safety and trust, opening a base for execution, and pushing adoption from the demand side.

> Of the three, safety and trust is the one that meets a company's daily work first. The government said it would prepare an Agentic AI Safety and Trust Guideline within the year, covering protection of personal data, management of permissions and prevention of goal drift, and would put together the datasets and benchmark tools that measure an agent's performance and safety alongside it. Four months after the announcement, not all of that promise has arrived. A zero trust guide, which works out the security strand first, came on November 6, and the guideline itself is still unpublished. The end of the year, the deadline it was given, has not passed.

> Sections 1 through 3 hold to what the government announced and what public coverage recorded. Sections 4 and 5 sort the same material from the side that works on data quality. That sorting belongs to this article, and the government has confirmed none of it as a requirement.

### Key figures

The numbers attached to this policy divide into two kinds. One set covers money and volume the government has already committed. The other covers a document that has yet to appear. The second set is what this article is after.

Sources: [Korea Policy Briefing (2026-07-23)](https://www.korea.kr/news/policyNewsView.do?newsId=148968687), [Aju Business Daily (2026-07-30)](https://www.ajunews.com/view/20260730145925525), [Digital Daily (2026-09-03)](https://www.ddaily.co.kr/page/view/2026090308573576655).

<!-- stat-card -->
**18 billion won** — Core agentic AI technology budget — Spent over 18 months across four lead organizations and 26 industry and academic partners

<!-- stat-card -->
**7,000+** — Agent verification dataset — The call for proposals asked for 5,000 or more, and the figure grew once the work began

<!-- stat-card -->
**Under 10%** — Human intervention the R&D aims at — Finishing real-world work with almost no human hand on it is the project's target

<!-- stat-card -->
**0** — Safety and trust guidelines published — Release is targeted before the end of 2026, and no publication is confirmed as of November 17

## Inside the July 23 Announcement

The announcement came out of the 11th Science and Technology Ministers' Meeting, held at the Government Complex in Jongno-gu, Seoul. Bae Kyung-hoon, Deputy Prime Minister and Minister of Science and ICT, chaired the meeting, and his ministry drew up the item jointly with the other ministries involved. The same agenda carried a physical AI port strategy, a privacy protection guide for public-sector AI transformation, and a GPU support plan for the government's major AI projects. Agentic AI was one of several items put to the meeting that day.

The boundary the government draws around the phrase agentic AI is a clear one. It means AI that sets its own plan from a goal the user gives it and then runs real work through outside systems and tools. It does not stop at returning an answer in a chat window; it calls a service beyond itself and finishes the job. The ministry's reading is that the weight of AI competition is moving from model performance toward execution capability and a secured ecosystem, and it named Korea's manufacturing, finance and public-sector industrial base, together with its digital infrastructure, as the country's strength. A policy briefing explainer published the same day put it that an AI model creates value only once it connects to outside systems and tools and carries out actual work. That same explainer summarized the goal of the initiative as a leap into the global top three in AI.

The initiative is built out of three strategies, in that order: establish safety and trust, open the base on which agents get built and distributed, and bring the demand side to actual use. What sits under each strategy follows.

| Strategy | What the announcement puts under it |
| --- | --- |
| Leading on agentic AI safety and trust | A safety and trust management system covering the whole cycle from development to operation, a safety and trust guideline prepared by the end of the year, datasets, scenarios and benchmark tools for evaluating performance and safety, and a study of agent identity verification and where responsibility sits |
| Building an open base for execution | Support for everyday agent services and tools, support for a trustworthy distribution marketplace, core technology for an AI OS that manages models, inference, agents and tools together, execution and operation technology built on token efficiency, and support in GPUs and training data |
| Pushing adoption from the demand side | An AI Agent Flagship Project tying together the whole AI value chain, consulting on adoption diagnosis, risk management and operating structures, commercialization support for startups, and demonstrations through the ICT regulatory sandbox leading to evidence-based institutional reform |

▲ The three strategies as written in the July 23, 2026 announcement. Sources: Korea Policy Briefing (2026-07-23), ITDaily (2026-07-22).

No new delivery body was created for this. The ministry gave the Agentic AI Alliance it launched in April the job of working the details out, and called the approach a moving target, one that keeps revising the plan as the technology moves. About 280 companies belonged to the alliance by the time of the July announcement. Bae said that "agentic AI goes beyond simple technical innovation and will become a new turning point that drives change in how we work and across the economy and society as a whole."

## Three Strands in the Safety and Trust Track

Three things of quite different character sit inside the first strategy. One is writing a normative document. One is building the tools that test performance and safety. The last is studying the machinery that decides who answers when something goes wrong. The announcement gives each of them a line, yet they have different owners and different schedules.

### 2.1. Lifecycle Management and the Safety and Trust Guideline

The government promised a safety and trust management system that applies across the whole cycle, from development through deployment to operation. The product of that is the Agentic AI Safety and Trust Guideline it flagged for release within the year. The risks it names are protection of personal and sensitive data, management of AI permissions, and prevention of goal drift. Goal drift is the situation where an agent's behavior wanders away from the goal a person handed it. All three sit on a different layer from whether the model's answer was correct. If the answer was right but the agent opened material outside its permissions to produce it, that run passes on performance and fails on safety.

### 2.2. The Base for Testing Performance, Safety and Reliability

The second is the testing side. It covers building the datasets, scenarios and benchmark tools that evaluate an agent's performance and safety, and supporting an environment in which performance, safety and compatibility can be verified. This is a different kind of job from putting one model in front of a question set and scoring its accuracy. An agent makes a plan, calls tools in sequence, and changes its judgment partway through. Measurement is the next question after someone settles what gets a score.

### 2.3. Identity Verification and Where Responsibility Sits

The third is written down as still under study. It goes as far as saying that methods of identity verification and the question of who bears responsibility will be examined through the alliance, so that an AI agent's accountability for its own actions becomes clear. When a non-human actor connects to an outside service and starts a transaction, how that actor is identified and who answers for it is a question of institutions before it is a question of technology. In place of a conclusion, the announcement names only who will do the studying.

> [!callout]
> Choi Dae-seon, head of the AI Safety Research Center at Soongsil University and chair of the alliance's safety and trust group, said at the launch that "in the agentic AI era the center of risk has moved from information to execution." An incident in which information leaks can be settled by asking what got out. An incident in which execution went wrong can be settled only by reconstructing what the agent did. That is why the evaluation base starts from datasets and benchmarks.

## What Has Moved Since July and What Has Not

Some of the work under this policy began before the July announcement. The alliance launched on April 1 at L Tower in Yangjae, Seoul. Around 250 companies and institutions gathered, divided into four groups: industry, technology, ecosystem, and safety and trust. The Telecommunications Technology Association and the AI Safety Institute support the running of the safety and trust group. Coverage of the launch ceremony put the number of companies that had declared an intention to join that group at 42, and a group roster released days later carried 16. Choi said he would gather the views of the participating companies to secure common standards and standardized cases. On the same roster the technology group stood at 105, industry at 93, and ecosystem at 44. Safety and trust comes first among the three strategies, and its group is the smallest of the four by company count.

Work that touches verification does not sit in that group alone. The technology group analyzes interoperability standards and protocols such as MCP and A2A, and the ecosystem group took on the operation and growth of agent marketplaces. The alliance said it would run the four groups through December and draw out institutional, technical and standards tasks. The stretch in which the groups narrow those tasks down and the target date for the guideline fall inside the same year.

The evaluation base runs the same way. In May the Ministry of Science and ICT and the National Information Society Agency issued a call for an AI Agent Safety and Reliability Verification System project. The government contribution is 1.8 billion won, the term runs from the date of agreement to December 31, and the work falls into three parts: a performance evaluation framework, performance benchmark tools, and MCP safety and trust verification. The design written into the call shows what it intends to measure. The framework was set up as a system that quantitatively measures an agent's autonomous planning, tool calls and multi-step execution, with task success rate, tool-call accuracy and execution efficiency among the evaluation items. The benchmark tools were to hold multi-step reasoning scenarios and a verification dataset of 5,000 cases or more, and to award scores through a hybrid of rule-based automatic scoring plus an assessment of logical validity. MCP is the specification an agent uses when it connects to outside tools, and standard conformance, interoperability, and authentication and authorization were set as items to verify. Whoever is selected has to maintain and operate the results for at least five years after the project ends.

In September the consortium that would carry it out was settled. Crowdworks, Suresofttech, KAIST and the Korea Association for Artificial Intelligence Industry took it on together. The verification dataset, set at 5,000 cases or more in the call, grew to 7,000 or more at the execution stage, and data that changes in real time, such as available booking slots or prices, went into the scenarios as well. The scoring made the design in the call plainer. A correct final answer is not the whole of it: the plan the agent made, the order in which it called tools, and the logical validity of the judgments it reached in between all get evaluated.

The technology development side moved a week after the announcement. On July 30 the ministry and the Institute of Information and Communications Technology Planning and Evaluation held a kickoff meeting for a project named Real-World Proactive Agentic AI Technology Development. It puts in 18 billion won over 18 months and passes a stage review at the end of 2027. Four organizations lead it, NC AI, Medical Park, Simsimi and VENG, with 26 industry, academic and research institutions alongside them. NC AI took on a work colleague that handles a company's ERP, mail and calendar by itself, and VENG took on an MCP-based multi-agent collaboration simulator. The mark the project set for itself is human intervention under 10 percent.

The normative documents move at a different speed. According to September coverage, the Personal Information Protection Commission planned a guide on personal data processing and the Ministry of Science and ICT planned the safety and trust guideline, each due by year's end, and as of that point neither document's final standard had been presented. That two bodies are preparing separate documents matters to companies. There is more than one text to consult.

The most recent signal arrived on November 6, when the ministry and the Korea Internet and Security Agency published an Agentic AI Zero Trust Guide. The document extends the four-stage security maturity model of the existing Zero Trust Guideline 2.0 into agentic AI environments, and it takes prompt injection and autonomous action beyond delegated permissions as the things to handle. Its application points are concrete. At every point where an agent acts on its own, meaning input handling, tool calls, task delegation and outside communication, a verification procedure and a security policy apply, and depending on the risk level the agent either takes a person's approval or proceeds automatically under a pre-approved policy. Practical criteria by maturity stage, so that a company can diagnose its own security level, came with it.

| Date | What happened | Status |
| --- | --- | --- |
| April 1 | Agentic AI Alliance launches with four groups | Running |
| May | NIA calls for an AI agent safety and reliability verification system (1.8 billion won) | To be built by year's end |
| July 23 | 11th Science and Technology Ministers' Meeting announces the Agentic AI Initiative | Reference point |
| July 30 | Real-World Proactive Agentic AI Technology Development begins (18 billion won) | In execution |
| September | Verification consortium confirmed, dataset widened to 7,000 cases or more | Under construction |
| September | Coverage of the commission's guide and the ministry's guideline, both planned within the year | In preparation |
| November 6 | Agentic AI Zero Trust Guide published (MSIT and KISA) | Published |
| November 17 | Text of the safety and trust guideline, output of the evaluation base | Not confirmed |

▲ Public material and coverage arranged by date. Sources: ETNews and Money Today (2026-04-01), ZDNet Korea (2026-05-11), Korea Policy Briefing (2026-07-23), Aju Business Daily (2026-07-30), Digital Daily (2026-09-03 and 2026-11-06), e-Focus (2026-09).

The table reduces to one line. The work that costs money moved first, and the work of writing standards is still under way. There is no ground for reading the absence of the guideline in November as delay or as failure. The deadline promised at the outset was the end of the year, and that deadline has not passed. Still, a company that wants an agent inside its operations before the year ends has to decide with one official document in hand, the zero trust guide.

## The Questions an Evaluation Base Would Put to Companies

From here on, the content is not in the government's announcement. Two directions are written into the public material: the zero trust guide applies verification to each autonomous action, and the verification project scores the plan and the order of tool calls. Carried into the language of a company's own floor, those directions turn into questions, and what follows is that translation, written down in advance by people who work with data. None of it has been confirmed as an official requirement, so it reads better as a preparation checklist.

▲ The points of autonomous action follow the application points in the MSIT and KISA zero trust guide (2026-11-06).

### 4.1. Finished, Halted, or Handed Over

An agent's work does not split into success and failure. Finishing the job is one state. Halting partway, because permissions fell short or the instruction was ambiguous or an outside API never answered, is another. Handing the judgment to a person is a third. If the three get recorded without separation, what survives later is a number, seven of ten succeeded, and the reason the other three failed has gone. A hold and a handover are often no accident at all but the design working as intended. Keeping that difference on the record is where evaluation starts.

### 4.2. The Gap Between Permissions Granted and Permissions Used

One of the things the zero trust guide names as a target is autonomous action beyond delegated permissions. That item does not end with narrowing permissions in advance. A check only holds if someone can confirm afterwards that the agent moved inside the range that was narrowed. Plenty of organizations keep an access permission table and keep no record of when or how those permissions were used. The settings are the intent; the log is the fact.

### 4.3. The Reason Behind Each Tool Call

The four application points the guide names are input handling, tool calls, task delegation and outside communication. Turned around toward the record side, the rule that every point gets verified becomes a requirement that each one keeps the grounds for what was done there. The verification project points the same way when it says it will score the plan, the order of tool calls, and the validity of the judgments in between. Before anything can be given a score, the thing to be scored has to still be there.

### 4.4. The Retest After a Model or Tool Changes

An agent's parts change often. Raising the model it runs on, swapping the MCP server it connects to, editing the prompt: all of that happens while the agent is already running. The performance and safety tests it passed before do not stay valid through such a change. Verification datasets get built to thousands of cases so the same conditions can be applied again, not so a single measurement can close the question. Inside an organization, the first thing to confirm is whether anyone has settled who runs that retest and when.

> [!callout]
> The four items share one thing, which is the record. Task status, permission use, the grounds for a call, the retest history: none of them can be reconstructed later unless they are kept at the moment they occur. When the evaluation base is finished and reaches companies, the demand will most likely fall on material showing what the model did and how, rather than on proof that a good model was chosen.

## Why Pebblous Is Watching This Shift

Most talk about agents crowds around what they can do. Which model sits behind them, how many tools are attached, how much human effort they save. The place this policy aims at is proof rather than capability. The verification project's line about scoring the plan and the call order in place of the final answer, and the zero trust guide's line about putting a verification procedure at each stage of autonomous action, point to the same spot. Both ask for the material that backs a claim that something works.

For an organization that has worked on data quality, the demand is familiar. Completeness, consistency and reliability all stand on the premise that the data is still there. The same holds for agent evaluation. A run that left no record cannot become the object of a judgment about whether it went well or badly. However refined a performance metric becomes, with no execution record to score, the metric ends up scoring a blank.

Pebblous takes part in none of the projects under this policy, and the checklist set out here has not been adopted as a government standard. It is a proposal that a company working with data put together from announcement documents open to anyone. The direction still looks plain enough. However the guideline is finally written, its first question to a company will be whether the company can produce what its agent did.

So the check that remains sits inside the organization rather than on the government's calendar. Of the work an agent in service handled last month, how many cases went to a person, and how many of those stopped for lack of permission? Can that be pulled out as a list? If it cannot, there is work to be done before the standard document arrives.

## References

### Government announcements and official material

- 1.Ministry of Science and ICT. (2026). "[[Press reference] Full-scale push to secure an execution-centered agentic AI ecosystem](https://m.korea.kr/briefing/pressReleaseView.do?newsId=156771817)." 2026-07-23.
- 2.Joint ministries. (2026). "[Press release set for the 11th Science and Technology Ministers' Meeting, including the Agentic AI Initiative](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156771818)." 2026-07-23.
- 3.Korea Policy Briefing. (2026). "[Government moves to secure an 'agentic AI' ecosystem, aiming for a leap into the global AI top three](https://www.korea.kr/news/policyNewsView.do?newsId=148968687)." 2026-07-23.

### Same-day coverage

- 4.ITDaily. (2026). "[Government announces the 'Agentic AI Initiative' with three strategies: safety, execution and demand](https://www.itdaily.kr/news/articleView.html?idxno=240553)." 2026-07-22.
- 5.ZDNet Korea. (2026). "[Government to build a 'working AI' ecosystem, with safety standards and industry demonstrations spelled out](https://zdnet.co.kr/view/?no=20260722153138)." 2026-07-22.
- 6.Asia Economy. (2026). "[Government announces an 'Agentic AI Initiative' to secure the AI ecosystem](https://view.asiae.co.kr/article/2026072215301181807)." 2026-07-22.

### Follow-up execution and the safety and trust system

- 7.Electronic Times (ETNews). (2026). "['Agentic AI Alliance' launches, strengthening industry, academic, research and government cooperation](https://www.etnews.com/20260401000160)." 2026-04-01.
- 8.ITDaily. (2026). "[A look at the 'Agentic AI Alliance' groups: demand discovery, technical standards, ecosystem building, safety assurance](http://www.itdaily.kr/news/articleView.html?idxno=238713)."
- 9.Money Today Broadcasting (MTN). (2026). "[Inside the 'Agentic AI Alliance' roster: telecom, platform and security companies all present](https://news.mtn.co.kr/news-detail/2026040321231045726)." 2026-04-05.
- 10.ZDNet Korea. (2026). "[A shortage of verification models constrains adoption, so the government builds a safety net for AI agents and MCP](https://zdnet.co.kr/view/?no=20260511154819)." 2026-05-11.
- 11.Digital Daily. (2026). "["What if the AI books or pays wrong?" Crowdworks to verify the 'execution process'](https://www.ddaily.co.kr/page/view/2026090308573576655)." 2026-09-03.
- 12.Aju Business Daily. (2026). "[MSIT and IITP begin core agentic AI technology development with 18 billion won](https://www.ajunews.com/view/20260730145925525)." 2026-07-30.
- 13.e-Focus. (2026). "[Agentic AI guidance splits in two: personal data and safety standards both due within the year](https://www.e-focus.co.kr/news/articleView.html?idxno=3002936)."
- 14.Digital Daily. (2026). "['Do not trust an AI agent, verify it': the government publishes a zero trust guide](https://www.ddaily.co.kr/page/view/2026110515510754594)." 2026-11-06.
- 15.Boannews. (2026). "[How to build a zero trust based AI agent work environment: MSIT publishes a guide](https://www.boannews.com/news/articleView.html?idxno=147070)." 2026-11-06.
