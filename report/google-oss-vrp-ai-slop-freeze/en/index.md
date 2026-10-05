---
title: Google OSS VRP Closed One Window and Left the One Beside It Open
subtitle: Google stopped taking open source product vulnerability reports on 1 October, yet supply chain reports, which require you to demonstrate the break, are still accepted
date: 2026-10-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google OSS VRP Closed One Window and Left the One Beside It Open

_Google stopped taking open source product vulnerability reports on 1 October, yet supply chain reports, which require you to demonstrate the break, are still accepted_

## Executive Summary

> [!callout]
> This report retraces what Google did on 1 October 2026, when it stopped accepting product vulnerability reports in its Open Source Software Vulnerability Reward Program, using Google's own announcement and the live text of its rules. One category closed. Supply chain compromise reports are still accepted, and anything submitted before 1 October is unaffected. Google never promised to reopen the category. The rules text says only that an update will come in Q1 2027. The reason is not written on the rules page at all; it appears in a single post on X, and the word used there is automated. In the same program's March announcement, Google had named AI-generated reports and hallucinations directly.

> Google did not close the window in one move. In March it began requiring either fuzzing reproduction steps or an already merged patch for memory corruption reports in its top-tier repositories. In April it removed rewards and credit for the bottom two tiers and said those reports would not be triaged. In October it stopped accepting the category. In between, on 30 April, the same company rebuilt its Chrome and Android reward programs around concrete proof that a bug exists, and promised to ship a researcher-only Chrome build so that researchers could produce that proof. One window is shut. The other stayed open on stricter terms. Google has never published how many reports it received in 2026 or what share were invalid. The only figures it has released cover 2025.

> Everything above is what Google's own documents say. Here is the interpretation. What separated the closed window from the open one was not who wrote the report, but whether the report arrived with evidence a machine could run. A product vulnerability is a claim that can be written in prose. A supply chain report either demonstrates the break or it does not. A patch either merges or it does not. Three parties reached the same requirement without citing one another: Google, the maintainer of curl, and a company that builds autonomous attack agents. One caveat survives all of it. A patch that passes every test is not the same as a patch that is safe.

<!-- stat-card -->
**$31,337** — Top reward still live for supply chain reports — In the same table, all four tiers of the product vulnerability row are blank

<!-- stat-card -->
**~2,950×** — Cost to handle a report over cost to make one — $0.000295 to generate, $0.87 to run an automated repair agent. Measured over 51 adversarial reports

<!-- stat-card -->
**0** — Malicious reports caught by static analysis — CodeQL Python ruleset, against 51 adversarial reports

<!-- stat-card -->
**15–16%** — curl's valid-report rate after rewards ended — Up from under 5% in 2025. In the same year, volume ran 4–5× the 2024 level

## Only One Category Closed

Google's Open Source Software Vulnerability Reward Program launched in August 2022. It is the window through which you send Google a flaw you found in a repository it maintains, and get paid for it. Its scope was split into three broad categories: supply chain compromises, product vulnerabilities, and other security issues. What closed on 1 October 2026 is the middle one.

The first paragraph of the product vulnerability section of the rules page says so. Below is the full passage as retrieved on 6 October 2026. The bold is Google's, not ours.

**As of October 1, 2026, we are no longer accepting product vulnerabilities submitted to the OSS VRP. For some Google Cloud repos impacting Google Cloud products we may still accept reports covering product vulnerabilities through the Cloud VRP. We will continue to reformat and work on this aspect of the OSS VRP and commit to giving an update in Q1 2027. In the meantime, we encourage you to find impact across our other VRP programs and submit there instead, or pursue the Patch Rewards Program. This change does not affect product vulnerabilities submitted before October 1, 2026.**Source: Google Bug Hunters, OSS VRP Rules (retrieved 2026-10-06)

Three things in that paragraph are worth holding onto. First, one category closed. Supply chain compromise reports are still accepted. Second, what Q1 2027 promises is an update, not a reopening. The paragraph does not say the category will return, and it does not say under what conditions it would. Third, Google points elsewhere twice: to its other VRP programs, and to the Patch Rewards Program. The character of those two destinations is the axis of this report.

### 1.1. The one blank row in the reward table

The reward table is still on the rules page. Repositories are graded across four tiers, OT0 through OT3, and the closer a project sits to flagship, the larger the payout. In that table, all four cells of the product vulnerability row are empty. The other two rows are alive.

| Category | OT0 (Flagship) | OT1 (Important) | OT2 (Standard) | OT3 (Low-Priority) |
| --- | --- | --- | --- | --- |
| Supply chain compromise | $3,133.7–$31,337 | $1,337–$13,337 | $500–$3,133.7 | — |
| Product vulnerability | — | — | — | — |
| Other security issues | $1,000 | $500 | — | — |

****

Transcribed from the live reward table retrieved on 6 October 2026. Writing that the reward table went blank would be wrong. One row did.

When the program launched, rewards ran from $100 to $31,337. The $500 floor that supply chain reports carry today is not the result of raising the floor. The table was rebuilt in the four years since, when the repository tier system arrived.

### 1.2. The reason, written down in a single post on X

No sentence on the rules page gives a reason. In the full text retrieved on 6 October, the words pause, automated, surge, and AI do not appear once. The reason lives in a single post published by Google's official VRP account on X on 1 October.

This pause is due to a significant rise in automated submissions, the vast majority of which are not valid. We will continue to reformat and work on this aspect of the OSS VRP and commit to giving an update in Q1 2027.
                        Source: @GoogleVRP, 2026-10-01 16:00 UTC

Sweeping the public feed of the Google Bug Hunters blog from August 2023 through 24 September 2026 turns up no post announcing the pause at all. One of the largest bounty programs in the world closed a reporting channel, and the only place it explained itself in its own media was one social post. Of the four outlets that covered it the same day, three attributed the reason to the X post alone. The fourth wrote that the notice had also gone up in the program guidance, but the sentence that story quoted directly from the guidance was not the reason sentence. We found no basis for writing that the reason sentence was deleted from the rules page: every archive service was blocked, so earlier revisions could not be compared.

> [!callout]
> The word in the 1 October notice is automated. In the same program's blog post of 19 March, though, Google named AI-generated reports and hallucinations outright. The vocabulary changes with the date, and that difference matters again in section 3.

## Google Did Not Close It All at Once

Read the 1 October notice on its own and the decision looks abrupt. Lay out the preceding six months of announcements by date and a different picture appears. Google adjusted the entrance to its reward programs four times in the same year. Three of those changes were to the open source program and one was to Chrome and Android. All four are on the record in official Google Bug Hunters announcements.

All four events come from official Google Bug Hunters announcements. The April removal of incentives appears in an update block inserted into the 19 March post after publication, and that block carries no date.

### 2.1. What March asked for was evidence

The first adjustment came on 19 March. For memory corruption reports in the top two repository tiers, Google began requiring one of two things: exact reproduction steps that can be run on its fuzzing infrastructure, or a patch already merged into the target repository. The reasoning is written into the same rules page. Integrating important projects with the fuzzing infrastructure wherever it is relevant, Google says, is a more robust and scalable defense than triaging individual memory corruption reports one by one.

The same rule left one opening. Non-memory-corruption vulnerabilities in those same tiers do not require a merged patch for submission, as the rules text states plainly. A face of the program where you could still submit without evidence was left in place. That sentence is a fact of the rules. The claim that this opening is what led, six months and change later, to the category closing is our inference, not Google's explanation.

### 2.2. April's removal of both the reward and the triage

The second adjustment arrived quietly, inside the March post. Google appended an April update block saying that product vulnerabilities and other security issues in the bottom two repository tiers would no longer receive either monetary rewards or credit. Then it added one more sentence: the Google security team will not triage these reports. Cutting the reward was not the whole of it. Google announced that it would stop reading them. The same block also lowered the maximum supply chain reward for the lower tier to $3,133.70.

That update carries no date. The original says only April, and the post's date in the feed still reads 19 March, because Google edited the existing post in place. So this report does not name a day in April either.

### 2.3. Five months earlier, the same company kept another window open by asking for proof

The third adjustment is the axis of this report. On 30 April 2026, Google published a post announcing that it was evolving the Chrome and Android reward programs for the AI era. The move was not to close anything. It was to change the requirement.

While AI has made it effortless to produce lengthy, detailed write-ups … we are shifting our program's focus to prioritize concrete proof that a bug exists. We now consider the most effective reports to be concise, containing only a reproducer and the necessary artifacts to help us validate and route the issue.
                        Source: Evolving the Android & Chrome VRPs for the AI Era (2026-04-30)

Google did not only make a demand. In the same post it said it would ship a separate researcher-only Chrome build so that researchers could demonstrate arbitrary read and write in a privileged process, or a controlled browser memory leak, as evidence. Ask for proof, and hand over the tool that produces it.

The Android side changed in parallel. For Linux kernel vulnerabilities, Google said it would narrow scope to components it maintains unless there is concrete demonstration of exploitability, and that for most vulnerabilities it would strongly encourage reports that include a proposed patch. It added that it would prioritize the categories automated AI tooling still finds hard. Rewards went up rather than down: the Android top payout moved from $1 million to $1.5 million. Something was also abolished. The special bonuses attached to remote code execution and renderer arbitrary read and write are gone, and the stated reason is that AI has made demonstrating those techniques close to routine.

> [!callout]
> In one year, the same company closed one window and reopened another on terms that demand evidence. If the dividing line had been whether AI wrote the report, both programs should have moved the same way. The line that actually split them is whether evidence can be made to travel with the report. Of the secondary coverage of the 1 October event, none read the 30 April announcement alongside it.

## The Higher Cost of a Correct Report

Say the words AI-generated security reports and most people picture fakes: a vulnerability that does not exist, written up convincingly. In its March blog post, Google named two categories as the source of the cost, and the fake is only one of them.

AI-generated reports that contain incorrect information or "hallucinations" about how a vulnerability might be triggered.
                        Source: Streamlining Google's OSS VRP: Key Rule Updates (2026-03-19)

The second category is not a false report. The coding error it points at really is there, and the line of code it names is not wrong either.

A flood of reports that, while technically valid in pointing to a coding error like a buffer overflow, have negligible security impact given the project's security model or are not in reachable codepaths.
                        Source: Streamlining Google's OSS VRP: Key Rule Updates (2026-03-19)

The second category is where the cost actually lives. A fake can be rebutted in a line and closed. If it does not reproduce, that is the end of it. A report where the buffer overflow really is sitting there, and the code pointer is exact, and nothing outside the program can reach that path, behaves differently. To reject it, a human has to know the project's threat model and walk the call graph to decide reachability. The correct report costs more than the wrong one.

Google's own conclusion sits in the same post. It wants to reward the wheat and not the chaff, and it is moving its focus away from triaging ambiguous reports and toward rewarding actionable, high-impact fixes.

### 3.1. A measured gap between making a report and handling one

That verification costs more than production is an old intuition, but in 2026 someone put a dollar figure on the gap. A study of adversarial bug reports presented at MSR 2026 treated automated program repair agents as the target and measured what the attacker spends and what the defender spends on the same scale.

| What it costs | Per report | Conditions |
| --- | --- | --- |
| Making an adversarial report | $0.000295 | DevStral-24B at May 2025 list prices. All 51 came to $0.0133 |
| Screening it with a pre-filter | $0.00268 | One pass of the best-performing filter, which detected 47.05% |
| Processing that report | $0.87 | One run of the repair agent. Five Python repositories, 51 adversarial reports |

************

Source: arXiv 2509.05372 v2, section 6.6. The paper calls the gap an order-of-magnitude asymmetry. The $0.87 is the cost of running an automated repair agent, not the cost of a human adjudicating one report.

About $0.000295 to make, $0.87 to handle. Roughly 2,950 times. The part that stings comes next. After spending all of it, 46 of the 51 reports, or 90.2%, still produced the patch the attacker intended. Two people, a security researcher and a penetration tester, verified that by hand and independently.

The defense's scorecard is sharper still. The best pre-filter caught 24 of 51, or 47.05%. A post-hoc code review tool reached 58.82% across all confidence levels, with the caveat that a human has to read those review comments before anything is decided. Stacking the strongest combination caps the block rate at 72.5%, and the authors note that the combination raises false positives enough to be impractical in production. One number is starker than the rest. CodeQL, the static analyzer, caught none of the 51.

> [!callout]
> This is an input that passes every automated check and can only be filtered by a person. Once that kind of input starts arriving, throughput is bound by headcount rather than machine capacity.

### 3.2. An academic counterpart to "not in reachable codepaths"

The phrase Google used in March, not in reachable codepaths, has a matching seat in the literature. A study that examined the output of SBOM-based vulnerability scanners across 2,414 open source repositories reported a 92.0% false positive rate, and named as the main cause the flagging of vulnerabilities sitting in code that cannot be reached. The share that function call analysis could have cleared away was 61.9%.

The denominator has to be kept straight here. The 92.0% is drawn from a population of **scanner alerts**. It is not a population of reports written by humans. Translating it into "92% of reports are useless" makes it false. We could not find a study that measured the share of correct but unreachable findings within a population of bug bounty submissions. That gap is itself telling. Everyone names this category as the source of the cost, and nobody holds a public number for how large it is.

The category also has a name in the taxonomy reviewers actually use. A study that classified the rejection reasons behind 9,942 public bug bounty reports set up separate entries for risk assessment, path disclosure, and intended behaviour, defining them respectively as findings judged valid but low impact, file path disclosure with no security impact, and accepted design trade-offs. Rates should not be extracted from that paper, though: it gives no per-category counts, and the sample consists of disclosed reports, which skews toward the valid end.

Incidental to its purpose, the same study also observed that reporters with high reputation tend to receive favourable judgments in borderline cases. Human adjudication responds to signals outside the content of the report. We have run into the same problem [while designing the verification stage of a content pipeline](/blog/agentic-content-pipeline-verification/en/).

## In 2026, One Intake After Another Changed Its Rules

Google was not alone in reworking how reports get in. Between January and October 2026, the windows that receive open source security reports changed their rules one after another. The table below collects only the events confirmed in first-party announcements, in date order, and classifies each by the kind of mechanism it is.

| Date | Who | What changed | Mechanism |
| --- | --- | --- | --- |
| 26 Jan announced / 31 Jan effective | curl | Bounty abolished entirely | Incentive removed |
| 1 Feb → 1 Mar | curl | Left the platform, then returned, still with no rewards | Partial reversal |
| 19 Mar | Google | Reproduction steps or a merged patch required for top-tier memory corruption | Proof required |
| 27 Mar | Internet Bug Bounty | New intake halted, validation tooling given away at the same time | Intake closed + tooling |
| 2 Apr | Node.js | Rewards suspended, intake and triage kept | Incentive removed |
| April (no day given) | Google | Rewards and credit dropped for the bottom two tiers, triage stopped | Incentive removed |
| 21 Apr | HackerOne | Validation itself launched as a product | Validation productized |
| 30 Apr | Google | Chrome and Android rebuilt around concrete proof | Proof required |
| 22 Jul announced / 27 Jul effective | GitHub | New researchers capped at four initial submissions | Proof required |
| 17 Sep – 6 Oct | OpenJS (40+ projects) | CVE triage halted across the board | Intake closed |
| 18 / 19 Sep | Intel | Paid bounty of up to $100,000 converted to unpaid disclosure | Incentive removed |
| 25 Sep | OpenJS | New program launched to refund ecosystem vulnerability work | Opposite direction |
| 1 Oct | Google | OSS VRP product vulnerability intake ended | Intake closed |

************

Every date was confirmed in a first-party announcement or official blog. For Intel, coverage split between 18 and 19 September, so both are recorded.

### 4.1. One apparent trend, four different stated reasons

Bundling everyone who ended a bounty under "because of AI" is convenient. Open the first-party announcements one at a time and the reasons split four ways. Blurring them blurs the shape of the event.

- **curl** described its own move as an attempt to remove the incentive for submitting made-up lies. The same announcement named three currents together: mind-numbing AI garbage, humans of lower quality than ever, and an attitude of poking at holes rather than helping.
- **The Internet Bug Bounty** wrote that AI-assisted research is broadening vulnerability discovery across the ecosystem and that the balance between finding and fixing in open source has materially shifted.
- **Node.js** gave money as the reason. The announcement's own title says the pause is due to loss of funding, and the word AI never appears in it. The funder, though, was the Internet Bug Bounty. A surge of AI reports halted that program's intake, which removed the shared funding, which removed the bounty of a project with no budget of its own. AI reached Node.js through two intermediaries.
- **Intel** gave no reason at all. The initial coverage noted the absence of any official statement on why the change was made, and Intel's replacement describes itself as a responsible disclosure program with no rewards. Declining to say why is also part of what 2026 looked like.

The Internet Bug Bounty announcement has one more piece of design in it. While halting new submissions, it also said that qualifying open source projects would receive platform access, including AI-assisted triage features, free of charge at the same level as an enterprise licence. The money stopped and the validation tooling arrived. That cell belongs under neither incentive removed nor intake closed.

### 4.2. curl, the only project with before-and-after numbers in public

Neither Google nor GitHub released figures on what their proof requirements did. Nothing in the announcements. The one place that installed a gate and then published the result is curl, where maintainer Daniel Stenberg wrote it up across five posts on his own blog.

| Phase | Report volume | Valid rate |
| --- | --- | --- |
| Through 2024 (pre-AI) | Baseline | Over 15% |
| 2025 | More than 2× 2024 | Under 5% |
| Feb 2026 (right after rewards ended) | Inflow dried up sharply | — |
| Mar–Apr 2026 (back on platform, no rewards) | About 2× 2025 | 15–16% |
| May 2026 | 4–5× 2024, more than one a day | Held |

Compiled from Stenberg's posts of 26 January, 25 February, 22 April, 26 May and 29 June 2026. On the 2025 valid rate he wrote that not even one report in twenty was real.

In the phase after curl returned to the platform without rewards, Stenberg judged that slop reports were no longer the problem. That is also the post where he put the valid rate in a range.

The slop situation is not a problem anymore. The rate of confirmed vulnerabilities is back to and even surpassing the 2024 pre-AI level, meaning somewhere in the 15-16% range.
                        Source: Daniel Stenberg, High quality chaos (2026-04-22)

Up to here it reads as a success story. The post a month later shows the other face. Incoming security reports were running 4–5 times the 2024 rate and twice the 2025 rate, averaging more than one a day. Before the first half of the year was out, curl had logged 30 CVEs, the most in the project's history. Removing the incentive removed the garbage, and the rising valid rate meant more real cases a human had to follow to the end. The filter worked and the workload grew.

The cause of the recovery cannot be pinned down. Stenberg himself did not fix one, and two explanations compete: that removing the incentive worked, and that the models simply got better. The data that would separate them has not been published.

### 4.3. The same shape in the platform-wide numbers

If one person's ledger is too thin to generalize from, the platform-wide statistics sit right beside it. A HackerOne report published on 6 May 2026 says that across the platform, mean time to remediate fell about 80% over the preceding twelve months. What the same report says next to that is that the total number of vulnerabilities resolved per month fell about 46%. The accumulated backlog of validated but unresolved findings grew more than 21-fold, unresolved criticals grew 25-fold, and the critical resolution rate fell from over 83% to under 40%. The report's own summary line is that organizations became able to fix faster without fixing more.

The two figures have to be labelled with their axes. The 80% is time per item, the speed axis. The 46% is how many items were closed in a month, the throughput axis. Set side by side they read like a contradiction, faster yet slower, when what actually happened is that the two axes came apart. The curl record and this statistic are independent of each other as well. One is a single maintainer's ledger and the other is a platform-wide aggregate. Pointing the same direction is all the two share.

A different piece from the same company three weeks earlier uses yet another frame. The 15 April 2026 post says March set a record of 46,947 reports, up 76% year over year, and that defenders fixed 19% more vulnerabilities than a year before. One company, describing one problem through a different frame in each publication. Which is another way of saying it does not compress into a single number.

### 4.4. Triage back on for 40-plus projects, on the day this is written

The second-to-last row of the table is not a past event. The OpenJS Foundation halted CVE triage across more than 40 projects from 17 September, Node.js, Electron, ESLint, Fastify and webpack among them, and the freeze lifts on 6 October 2026. That is the day this is being written. In the very week Google closed its product vulnerability intake, the major projects of the JavaScript ecosystem were three weeks into a full stop on vulnerability assessment itself.

The figures OpenJS put in its quarterly report explain the background. In March 2026 alone, 65 reports. In February, a 4.6-fold surge against a baseline the report does not identify. Rejection rates of 70–90% for Express and Lodash. And CVE issuance going from 3 in the second half of 2025 to 49 in the first half of 2026. The attributions should not be mixed, though. The Node.js bounty pause was about funding, while the CVE triage freeze was about volunteer exhaustion under a surge of AI-generated reports. Two different events at two different moments in one ecosystem. [Reading maintainer exhaustion out of activity records](/blog/developer-burnout-signals-github-activity/en/) is something we have covered separately.

## The Same Year, AI Also Found Real Bugs

Summarizing everything so far as "AI ruined security reporting" means seeing half of 2026. The same year accumulated a record pointing the other way. The testimony that carries the most weight came not from the side selling tools but from the side taking the damage.

Almost every security report now uses AI to various degrees. You can tell by the way they are worded … The difference now compared to before however, is that they are mostly very high quality.
                        Source: Daniel Stenberg, High quality chaos (2026-04-22)

The person who shut down a bounty over AI garbage wrote that three months later. Had a security vendor said the same thing it would have read as marketing. Coming from the party that absorbed the cost, it weighs differently.

### 5.1. A single year's rise in benchmark scores

The academic benchmarks point the same way. CyberGym, which asks agents to reproduce real open source vulnerabilities, released its third version in March 2026 and reported that agents had newly surfaced 34 zero-days and 18 historical incomplete patches. The best reproduction success rate was 17.9%. A year earlier, version 1 recorded 15 zero-days and 11.9%. That change is the most important fact in this section. On the same task, the score went up in a year.

Original Pebblous diagram. Source: CyberGym arXiv:2506.02548 (v1, 2025; v3, March 2026). Both the zero-day count and the reproduction rate rose on the same task.

A follow-up benchmark from the same group evaluated the whole line from finding the flaw to patching it, across 139 open source projects and 920 vulnerabilities. The conclusion is interesting. Producing the patch has a high success rate, and the bottleneck sits on the detection and proof-of-concept side. Fixing it is easier than establishing that it is real, which is exactly what this report is about.

### 5.2. What 1,060 autonomous submissions actually contained

XBOW, an autonomous penetration testing company, reached first place on the US leaderboard in June 2025, the first non-human submitter to do so. Its own blog published a cumulative count of 1,060 submissions, and the breakdown reads as follows. Triaged 303, resolved 130, still under review 125, new 33. Then duplicate 208, informative 209, and not applicable 36.

Those last three add up to 453, about 42.7% of the total. That ratio is our calculation from the published breakdown, and XBOW has never summarized it that way. It means that even for the autonomous agent that topped the leaderboard, four submissions in ten led nowhere. The company's no-false-positives line also needs a caveat attached. The founder himself said that false positives remain in categories like business logic flaws, where automated validation is hard.

Original Pebblous diagram. Source: XBOW, We Ran 1,060 Autonomous Attacks (2026-03-02). The 453 / 42.7% figure is this report's own calculation from the published breakdown, not a number XBOW summarized itself.

Google has its own case on this side. Big Sleep, built jointly by Project Zero and DeepMind, caught a SQLite flaw before release in October 2024, recorded a case in July 2025 where exploitation was blocked at the last moment, and found 20 previously unknown flaws in open source that August. And in that very 30 April post, Google names Big Sleep, CodeMender and its fuzzing infrastructure together as the automation layer of its own defense in depth. At one window it stopped accepting reports written with AI, while at another it was scaling up how much AI finds. We have kept [a record of auditing legacy code with AI](/blog/squidbleed-ai-legacy-code-audit/en/) ourselves.

> [!callout]
> The counter-evidence does not break the conclusion, it changes it. Make AI the subject of the sentence and the sentence turns false. AI is finding real vulnerabilities, and finding them better than a year ago. The question to ask is not who wrote it but what came with it.

## Three Parties Who Never Cited Each Other Asked for the Same Thing

The most striking thing in the 2026 record is that three parties who never cited one another arrived at the same requirement. The company running one of the largest bounty programs in the world, a maintainer defending a project largely alone, and a company selling autonomous attack agents. Three positions as far apart as they get, asking for the same two things.

| Who | When | What they asked for |
| --- | --- | --- |
| Google OSS VRP | March 2026 | Fuzzing reproduction steps or an already merged patch |
| Google Chrome and Android | 30 April 2026 | Only a reproducer and the necessary artifacts, plus concrete proof of exploitability |
| curl (Stenberg) | 29 June 2026 | Include a reproducer in the report, and supply a patch |
| XBOW | January and March 2026 | Separation of discovery from validation, with deterministic logic deciding what is real |

****

All four rows are requirements written in the parties' own public documents. The first two are different programs at the same company; Google, curl and XBOW never cite one another.

When Stenberg wrote his requirements, he took the question of how the finding was made out of the judgment entirely. A security team asks one thing.

… whether you fell over it by accident, you found it by reading every single line of source code or if an AI pointed it out to you, it has little relevance to the security team. The team primarily cares about if the problem is real.
                        Source: Daniel Stenberg, Do excellent vulnerability reports (2026-06-29)

XBOW reached the same demand from the opposite direction. Not from a maintainer's desk but from what a language model cannot do.

plausibility is not proof. … Because LLMs can't observe reality directly, validation can't live inside the model. … XBOW separates discovery from validation entirely. … Creative AI discovers. Deterministic logic decides what's real.
                        Source: XBOW company blog, Why LLMs Hallucinate Vulnerabilities (2026-01-15) and We Ran 1,060 Autonomous Attacks (2026-03-02)

### 6.1. What travels with the input changes the difficulty

Does demanding evidence actually make adjudication easier? Three results from the literature point in a direction. The three values come from different codebases, task definitions, models and dates, so they cannot be compared directly. Read them as a direction, not a comparison.

- When the input is a **kernel security patch**, proof-of-concept reproduction succeeded in 56 of 100 cases, at $2.49 and 11.9 minutes per success.
- Adding only a **vulnerability type classification and a code location** to the input tripled the exploitability confirmation rate against the no-information case. With a single agent alone, it was 1.75×.
- When the input is nothing but a **prose description of the vulnerability**, the best reproduction rate was 17.9%.

Prose alone is hard, a code location makes it easier, and a patch gets more than half of them reproduced. What Google asked for in March is precisely the reverse end of that ordering. It blocked the cheapest input, a claim in prose, and required the easiest input to adjudicate, a patch and reproduction steps.

### 6.2. The specs have existed since 2024

Asking that evidence travel with a claim is already a specification on the software supply chain side. SLSA provenance, built on the in-toto attestation format, signs and binds the builder identity, the build command, parameters, environment variables and dependency digests, and in-toto adds step-by-step policy verification. Instead of asking to be trusted, you send signed evidence and the receiving side runs it against policy. The design principle is the same as the demonstration Google requires of supply chain reports.

Existing is not the same as being easy to adopt. A study analyzing 1,523 SLSA-related issues across 233 GitHub repositories reports that the four challenges it derives come down to implementation complexity and unclear communication. On the data side there is still no single spec, and the field splits two ways: enforcing quality through contracts, and attaching provenance through cryptographic proof. On the standards side, version 3.1.0 of the Open Data Contract Standard was approved on 8 December 2025 and moved under the Linux Foundation.

### 6.3. A caveat: passing the tests is not evidence of safety

Designs built on demanding evidence have a floor too. An October 2025 paper co-authored by a Google researcher defines the category of patches that are functionally correct yet vulnerable, and reports that on standard benchmarks all twelve agent-and-model combinations produced such patches. In one combination the attack success rate for a specific flaw type reached 40.7%, a single query in a black-box setting was enough, and the paper notes the same thing happens when a developer with no malicious intent copies in external code. Another study reported attack success rates against functionally correct patches rising as high as 0.91. In the adversarial report study from section 3.1, 35 of the 51 malicious patches introduced no new failure in the test suite at all.

This needs a qualification. What these papers examine are patches generated by code agents. What Google asked for is a patch that has already been merged, which carries one additional layer of human review. Erasing that difference and writing that Google's required patches cannot be trusted either would overstate the case. Something still remains, though. Evidence a machine can run is cheaper to adjudicate than a claim a human must read, and that adjudication does not guarantee safety. Evidence is a device for lowering the cost of judgment, not a device for supplying the right answer.

We have seen the same structure elsewhere. [AI-generated text mixed into academic peer review](/report/iclr-2026-ai-peer-review-crisis/en/) is one instance, and [an observatory alert stream beyond human review capacity](/report/rubin-observatory-alert-classification/en/) is another. Our [analysis of the Microsoft report](/report/microsoft-digital-defense-report-2026-ai-attackers/en/) on the gap between discovery and remediation speed sits on the same axis.

## Why This Matters to Pebblous

Sections 1 through 6 are what we confirmed in first-party announcements, rules text and paper bodies. This section is the part those documents do not cover, and it is about why Pebblous spent so long looking at this event.

### 7.1. This is an intake-design story before it is a security story

Pebblous works on asking what state data is in before it enters training. DataClinic diagnoses incoming datasets, and AI-Ready Data covers the cleanup that happens before training. The mechanisms Google changed this year are the same problem in kind. When inflow grows for free, what should the entrance require? Google's answer was not to sort by who sent it. It was to send evidence a machine can run. Fuzzing reproduction steps, a merged patch, a demonstration that bypasses the PR approval requirement, the reproducer on the Chrome side: all of them are artifacts you execute rather than things a person has to read and judge.

And Google did not stop at the demand. It committed to distributing the tooling that makes the evidence. That design transfers directly to data collection. Rather than telling submitters to attach evidence, give them the format to attach and the tool that runs it.

### 7.2. Inputs that pass the schema and mean nothing

Data quality discussions usually cover missing values, duplicates and ranges. The defect this event exposes is a different kind. What Google named as the real source of the cost was not false reports but reports that are technically correct and point at code paths nothing can reach. In data terms, a record that passes the whole schema, with correct types and normal value ranges, and no meaning in it.

The literature confirms the same spot twice. A static analyzer caught none of 51 adversarial reports, and the main cause of scanner false positives was unreachable code. This is where, in designing quality metrics, "does rejecting this item require a human?" becomes as important as a missing-value rate. The same question is why we kept [a record of gating an agent-written knowledge graph at the entrance](/blog/agent-written-knowledge-graph-gate/en/).

Original Pebblous diagram. Illustrates section 7.2's point: type and range checks pass automatically, but judging reachability still needs a person.

### 7.3. Verification capacity, a separate problem even when the gate works

More incoming data sounds like good news. The 2026 record attaches a condition to that. curl removed rewards, removed the garbage, and brought its valid rate back to 15–16%, and in the same year volume reached 4–5 times the 2024 level and the project logged 30 CVEs before the half-year was out. HackerOne cut per-item handling time by 80% across the platform and still recorded 46% fewer monthly resolutions.

For any organization that uses collection volume as a performance metric, this is field evidence you can show as is. The design question is not how much you can take in, but whether each item arrives carrying the evidence that checks it. Data contracts, provenance attestation and automatically verifiable samples are the same demand under different names. Our piece on [how junk data erodes a model](/blog/llm-brain-rot-junk-data/en/) and the one on [a project that refused the contributions outright](/blog/git-annex-no-llm-code/en/) were different answers to that same question.

### 7.4. From detecting to requiring

Discussion of AI-generated content has mostly stayed on whether it can be detected. Detection, watermarking, provenance labels. The answer 2026 converged on went the other way. Google, the curl maintainer and XBOW asked for the same two things without citing each other, and Stenberg wrote explicitly that it makes no difference whether an AI pointed it out, only whether the problem is real. The academic surveys land in the same place, noting that passive detection and watermarking target provenance rather than correctness, proposing active neuro-symbolic validation instead, and arguing for moving evaluation from linguistic fluency to mathematical verifiability.

Identifying the author has to be redone every time the models change, while a design that demands evidence works the same regardless of who produced the input. Nor is the obstacle a missing spec. The supply chain attestation formats have been there since 2024, and on the data side a machine-readable contract spec became a standard at the end of 2025. What Pebblous can do is put that shift into Korean first, on the collection and review side, and propose the requirement that every input carry machine-checkable evidence at the level of a quality specification. This report is one step of that.

Every verbatim quotation in this report was checked directly against the Google Bug Hunters rules page and official blog posts, Stenberg's blog, XBOW's company blog, and the bodies of the papers cited. Google has published nothing on how many reports it received in 2026 or what share were invalid, so we did not fill that gap with numbers from other projects. Where a figure passed through secondary coverage, we said so inside the sentence and did not use it to carry an argument. Sections 1 through 6 are what we confirmed; section 7 is the part those documents do not cover, so please read them separately. Thank you for reading this far.

## References

Sources differ in grade, so they are grouped. The first group is first-party announcements and official blogs, and every verbatim quotation in this report was checked against it. The second is academic papers, with version numbers given. Two of those papers changed values between revisions, so the body uses only the figures from the latest version. The third group is specifications, and the fourth is material that passed through press coverage, attributed inside the sentence each time it is used.

### First-party announcements and official blogs (primary)

- 1.Google Bug Hunters. **Google OSS VRP Rules**. Full text retrieved 6 October 2026. [bughunters.google.com](https://bughunters.google.com/about/rules/open-source/google-open-source-software-vulnerability-reward-program-rules) — source of the intake paragraph in section 1, the three rows of the reward table, the demonstration requirement for supply chain reports, and the OSS-Fuzz rationale sentence.
- 2.Google Bug Hunters. **Streamlining Google's OSS VRP: Key Rule Updates**. 19 March 2026, including the April update block — source of the proof requirement and incentive removal in sections 2.1 and 2.2, and of the hallucination and unreachable-code categories and the wheat-and-chaff sentence in section 3. The update block carries no date.
- 3.Google Bug Hunters. **Evolving the Android & Chrome VRPs for the AI Era**. 30 April 2026, Shailesh Saini and Tony Mendez — all of section 2.3. ⚠️ Much of the secondary coverage dates this to 1 May; Google's publication date is 30 April.
- 4.Google Bug Hunters. **Google VRPs in Review – 2025**. 11 March 2026 — the OSS VRP's 2025 figures: 192 reports handled, 62 rewarded, $327,672 paid.
- 5.@GoogleVRP. **Notice of the OSS VRP product vulnerability pause**. X, 1 October 2026, 16:00 UTC — the only Google-owned medium carrying the reason sentence.
- 6.Daniel Stenberg. **The end of the curl bug-bounty** (2026-01-26) · **curl security moves again** (2026-02-25) · **High quality chaos** (2026-04-22) · **The pressure** (2026-05-26) · **Do excellent vulnerability reports** (2026-06-29) — source of the before-and-after figures in section 4.2, the testimony opening section 5, and the requirements in section 6.
- 7.HackerOne. **Internet Bug Bounty intake pause notice** (2026-03-27) · **Finding Fast, Fixing Slow: The Rising Exposure Debt** (2026-05-06) · **Continuous Threat Exposure Management and the Remediation Crisis** (2026-04-15, Alex Rice) · **h1 Validation press release** (2026-04-21) — the three frames in section 4.3. ⚠️ The 29-fold backlog figure used in some secondary coverage is not in the original. The original values are 21-fold and 25-fold.
- 8.Node.js. **Security Bug Bounty Program Paused Due to Loss of Funding** (2026-04-02) · OpenJS Foundation. **Security Update: Q2 2026** (2026-07-08) — sections 4.1 and 4.4. The word AI never appears in the former.
- 9.GitHub. **The next chapter: restructuring GitHub's bug bounty program**. 22 July 2026, Catherine Cassell — the four-submission cap for new researchers, the stated aim of cutting noise to focus on signal, and low-effort AI-generated reports named as the motivation.
- 10.XBOW. **The Road to Top 1: How XBOW Did It** (2025-06-24) · **Why LLMs Hallucinate Vulnerabilities** (2026-01-15) · **We Ran 1,060 Autonomous Attacks** (2026-03-02) — the submission breakdown in section 5.2 and the design principle in section 6.
- 11.Google Project Zero. **Big Sleep posts** (2024-10, 2025-07, 2025-08) — section 5.2. No 2026 annual tally has been published.

### Academic papers (versions stated)

- 12.Przymus, Happe, Cito. **Adversarial Bug Reports as a Security Risk in Language Model-Based Automated Program Repair**. arXiv:2509.05372 **v2**, MSR 2026. [arxiv.org](https://arxiv.org/abs/2509.05372) — the three cost values in section 3.1 are in section 6.6 of the body, not the abstract. Attack success 46/51, filter 24/51, post-hoc review 30/51, CodeQL 0/51, and no new test failures 35/51 also come from here.
- 13.Zhou, Dacier, Konstantinou. **A Reality Check on SBOM-based Vulnerability Management**. arXiv:2511.20313 **v2** (2026-04-17) — the 2,414 repositories, 92.0% false positives and 61.9% cleared by call analysis in section 3.2. ⚠️ The v1 values are 97.5% and 63.3%, and much of the secondary summary still circulates v1.
- 14.Zheng et al. **From Reviewers' Lens: Understanding Bug Bounty Report Invalid Reasons with LLMs**. arXiv:2511.18608 — the rejection taxonomy and reputation effect in section 3.2. No per-category counts, so no rates were drawn from it.
- 15.Wang, Shi, He, Cai, Zhang, Song. **CyberGym**. arXiv:2506.02548 **v3** (2026-03-24) · **CyberGym-E2E**. arXiv:2606.04460 — section 5.1. The v1 values are 15 zero-days at 11.9%.
- 16.Pu et al. **Patch-to-PoC (K-Repro)**. arXiv:2602.07287 v2 · Sajadi et al. **AXE: Grey-Box Exploitability Confirmation for Localized Vulnerability Reports**. arXiv:2602.14345 v2 — the 56/100 and the threefold figure in section 6.1. The scales differ, so they are not compared directly.
- 17.Peng et al. (co-author Mihai Christodorescu, Google). **When "Correct" Is Not Safe**. arXiv:2510.17862 · Chen, He, Jana, Ray. **Red Teaming Program Repair Agents (SWExploit)**. arXiv:2509.25894 — section 6.3. The subject is patches generated by code agents.
- 18.Ding et al. **AI Slop and Hallucinations in Vulnerability Assessment: A Survey**. arXiv:2608.25667 (2026-08-26) — the detection-versus-validation framing in section 7.4. The survey carries no figures.
- 19.Tamanna et al. **Analyzing Challenges in Deployment of the SLSA Framework**. arXiv:2409.05014 — the 233 repositories and 1,523 issues in section 6.2. Ni et al. **Learning to Triage Vulnerability Reports from Program Analysis**. arXiv:2510.20739, ASE 2026 · Pesoli, Errico, Cavallaro. arXiv:2605.24632 — consulted as background only; the latter's validation-time and hourly-rate values are the authors' assumptions and were not used.

### Specifications and standards

- 20.in-toto attestation specification · SLSA provenance specification — sections 6.2 and 7.4.
- 21.Open Data Contract Standard v3.1.0. Linux Foundation AI & Data, Bitol project. Approved 8 December 2025 — the data-side contract spec in sections 6.2 and 7.4.

### Press coverage (attributed in the text)

- 22.TechCrunch (Anthony Ha, 2026-10-04) · Help Net Security (2026-10-05) · SecurityWeek (Eduard Kovacs, 2026-10-05) · BleepingComputer (Sergiu Gatlan, 2026-10-05) · ITPro (Ross Kelly, 2026-10-05) — used for the attribution comparison in section 1.2. ⚠️ The thousands of reports reported by Tom's Hardware (2026-10-04) has no identified source and was not used as a figure in the body.
- 23.Dark Reading (Rob Wright, 2025-08-13). **How an AI-Based 'Pen Tester' Became a Top Bug Hunter on HackerOne** — the source for the XBOW founder's Black Hat 2025 remarks. The utterance is primary, but as a document it is reported secondary material. Phoronix (Michael Larabel, 2026-09-18) — Intel. Axios (2026-03-10) — the OpenSSF remarks.

### Related Pebblous articles

- 24.[AI-written reviews shaking a conference](/report/iclr-2026-ai-peer-review-crisis/en/) (6.3) · [Verification design in an agentic content pipeline](/blog/agentic-content-pipeline-verification/en/) (3.2) · [Gating an agent-written knowledge graph at the entrance](/blog/agent-written-knowledge-graph-gate/en/) (7.2) · [Observatory alerts beyond human review capacity](/report/rubin-observatory-alert-classification/en/) (6.3) · [Auditing legacy code with AI](/blog/squidbleed-ai-legacy-code-audit/en/) (5.2) · [One day to attack, one month to recover](/report/microsoft-digital-defense-report-2026-ai-attackers/en/) (6.3) · [Maintainer burnout signals](/blog/developer-burnout-signals-github-activity/en/) (4.4) · [Junk data and model degradation](/blog/llm-brain-rot-junk-data/en/) (7.3) · [The project that refused AI code contributions](/blog/git-annex-no-llm-code/en/) (7.3)
