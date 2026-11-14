---
title: Microsoft Digital Defense Report, One Day to Attack and One Month to Patch
subtitle: Median time from discovery to weaponization is under 24 hours; enterprise remediation of exposed critical CVEs runs 30–60 days. Microsoft
date: 2026-10-04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Microsoft Digital Defense Report, One Day to Attack and One Month to Patch

_Median time from discovery to weaponization is under 24 hours; enterprise remediation of exposed critical CVEs runs 30–60 days. Microsoft_

## Executive Summary

> [!callout]
> This article takes one thread out of the Microsoft Digital Defense Report published on 1 October 2026 — the parts about time — and traces it back to primary sources. The report sets two clocks side by side. One runs from the moment a vulnerability is discovered in the wild to the moment it becomes a weapon. The other runs from exposure to the moment an enterprise finishes fixing a critical vulnerability facing the internet. The first has dropped below a day. The second stretches across one to two months. Where that second figure is recorded, Microsoft's own guidance sits beside it. It is 72 hours.

> The most widely quoted sentence in the report describes frontier models chaining 32 steps without human direction and taking over an emulated enterprise network. That evaluation was not run by Microsoft. It was run by the UK AI Security Institute, and the original write-up — which Microsoft lists in its own reference section — records the same result as two runs out of ten and three runs out of ten. The original adds a caveat: these results cannot say whether the same models would succeed against a well-defended target. Neither the number of attempts nor the caveat made it into the report.

> Everything above is fact. Here is the interpretation. The firmest sentence in this report is not in the passage about attackers; it closes the section on patching. Microsoft writes that the question has moved from whether a patch exists to whether an organization can identify its exposed assets, and in the section on its own red team it writes that an inventory is not enough, that a graph of reachability is required, and that most environments cannot answer that question. What separates one organization from another, then, is not model capability but the state of the records a company keeps about its own systems. The report does not say attackers have won. Its phrasing is that the balance will eventually be restored while the near term favors the attacker, and it also notes that most observed campaigns are still human-directed.

<!-- stat-card -->
**Under 24 hours** — Discovery to weaponization — Median measured from discovery in the wild, not from public disclosure

<!-- stat-card -->
**30–60 days** — Enterprise fix for exposed critical CVEs — The same report recommends 72 hours; the US federal deadline is 7–14 days

<!-- stat-card -->
**2–3 runs in 10** — Completion rate on the 32-step chain — The denominator the original evaluation records. Mythos Preview 3, GPT-5.5 2

<!-- stat-card -->
**1 victim** — Documented target of autonomous ransomware — Sysdig's published analysis of JADEPUFFER records a single victim organization

## 165 Trillion Signals Is Not a Count of Attacks

The Digital Defense Report is Microsoft's annual publication. This year's edition appeared on 1 October 2026 and, unless noted otherwise, covers July 2025 through June 2026. Year-over-year comparisons use July 2024 through June 2025. That window is the first thing to check when reading the report, because the same events can trend up or down depending on which twelve months you cut.

Second comes the passage where the report states the scale of its own observation. Near the front sits a sentence about processing more than 165 trillion security signals per day, and bundled with it are 4.7 million malicious files blocked daily, 5.2 billion emails scanned daily, 31 million identity risk detections daily, 35,000 security engineers, and 15,000 partners. Those figures describe what Microsoft handles and analyzes in a day, not how often the world was attacked in a day. Read 165 trillion as a count of attacks and the whole report turns into a different document.

Third is the shape of that observation network. Nearly every number in the report comes from Microsoft products and the customer estate running them. Whatever happens outside that estate does not show up in this window, and Microsoft sells security products. The point of noting this is not to score a hit but to sort the sentences: which ones are observation, which are citation, and which are forecast. Two passages that this article leans on turn out to have sources outside the report, which made it possible to check them separately.

### 1.1. Two Counting Methods, Two Different Answers

The report demonstrates once, inside its own pages, how much the answer depends on what you claim to be counting. Asked which ransomware family was most active in 2026, it publishes two different rankings two pages apart. Count public leak-site postings and one family leads; count Microsoft's own detection telemetry and a different one does.

| Counting method | First | Second |
| --- | --- | --- |
| Public leak-site postings | Qilin 16.4% (+386% year over year) | Akira 8.3% |
| Defender detection telemetry | Akira 22% (+150% year over year) | Qilin 14% (+111%) |

********

Both tallies sit on neighboring pages of the same report. Microsoft itself notes that leak-site data can give a distorted picture, since ransomware operators choose which victims to post and can inflate what they post.

Publishing both figures is conscientious handling. The scene also previews the rest of this article. When the boundary of what is being counted goes blurry, the question "what is the biggest threat" has no stable answer. As we will see, the bottleneck the report identifies on the defensive side is the same kind of problem. When the boundary of what exists inside your own organization goes blurry, the question "what do we fix first" has no stable answer either.

One outside caution about reading the numbers is worth carrying along. An analysis published days after release argued that figures such as 88% or 1.3 billion, whose survey methods were never disclosed, should be treated as directional indicators rather than precise measurements. This article uses them for direction only.

## A Model Finished 32 Steps, Two or Three Times in Ten

The fast clock is gathered on page 14. The sentence saying the median time from discovery in the wild to weaponization has fallen below 24 hours, Microsoft's own estimate that CVEs tracked during 2026 will reach 72,000, and the story of the 32-step attack chain all sit on that page. The three are different kinds of statement. The first is an observation, the second a forecast, the third a citation.

### 2.1. 24 Hours Is Not Measured from the Disclosure Date

That median comes with a starting point attached. What Microsoft wrote is "discovered in the wild," not "published as a CVE." Miss that distinction and the figure collides immediately with other reports. Verizon's 2026 breach investigations report was covered as finding a five-day median from disclosure to first observed exploitation, and the two are not in conflict; they are different rulers. On page 14 Microsoft notes that pre-disclosure windows, in which exploitation begins more than 30 days before publication, have become routine, and cites a remote code execution flaw in a Cisco security product rated 10.0 that was used in ransomware roughly 30 days before it was disclosed.

CVE volume forecasts have to be sorted by source as well. The 72,000 figure is Microsoft's own estimate; for the same year, the Forum of Incident Response and Security Teams put the number at 59,427 and one industry analyst at 70,135. Three separate forecasts, three different methods. Since 48,185 CVEs were actually published in 2025, arithmetic along the lines of "2026 will be double" matches none of them.

### 2.2. Where the Most-Quoted Sentence Actually Comes From

Page 14 carries the passage the press repeated most often, and it reads as follows.

"Mythos and GPT-5.5 were the first models to demonstrate the potential to fully autonomously orchestrate complex attacks, achieving full domain compromise in a multi-stage, 32-step attack chain against an emulated enterprise environment. … The test took place in a mock company computer system with no defenders."
                        Source: MDDR 2026, p.14. The full passage adds that both models planned and executed a difficult intrusion without any human assistance, ending with complete control of the network's primary servers and every user account.

Microsoft neither designed nor ran that evaluation. The UK AI Security Institute did, and Microsoft is the party citing the result in its own report. That citation is not hidden: both the institute's evaluation write-up and its paper appear in the report's reference list. So the originals could be opened, and opening them turned up a number that the report's body text does not carry.

The AI Security Institute's evaluation post, dated 30 April 2026, puts it this way. GPT-5.5 completed the full 32-step range in **two attempts out of ten**, making it the second model to do so. Mythos Preview, the first model to clear that range, managed it **three times out of ten**. The same post estimates that a human expert would need roughly 20 hours to finish the same chain, notes that the range contains none of the active defenders, defensive tooling or alerting penalties a real environment normally has, and then adds that these results cannot say whether GPT-5.5 would succeed against a well-defended target.

| Item | Microsoft report, p.14 | AI Security Institute original |
| --- | --- | --- |
| Result | Full domain compromise | Full domain compromise |
| Conditions | Emulated enterprise network, no defenders | No active defenders, detection or alerting penalties |
| Attempts | Not stated | 10 |
| Completions | Not stated | Mythos Preview 3 · GPT-5.5 2 |
| Human expert time | Not stated | About 20 hours |
| Generalization caveat | Not stated | Cannot speak to well-defended targets |

The two documents do not contradict each other. Microsoft recorded the result; the original evaluation recorded the denominator alongside it. For human expert time, the same team's paper says 14 hours while the evaluation post says about 20 hours. The later figure is an estimate for the chain as a whole.

Restoring the denominator does not weaken the claim; it sharpens it. Two or three times in ten means the capability is not yet reliable even on a practice range with nobody defending it, and it also means successes are now appearing where there had been none. The trend the report is pointing at survives intact. What is nowhere in the original evaluation is the sentence "AI takes over enterprise networks without humans, every time."

### 2.3. A Second Range from the Same Team Barely Moved

The paper Microsoft lists in its references is a multi-step attack evaluation the same team published in March 2026. It covers two ranges: a 32-step enterprise network attack called "The Last Ones" and a seven-step industrial control system attack called "Cooling Tower." Both were built by the security firms SpecterOps and Hack The Box, with evaluation design and interpretation resting with the authors. Neither range has active defenders or detection tooling, a limitation the paper states outright.

Seven model generations were measured, from GPT-4o in August 2024 to Opus 4.6 in February 2026. At a 10M-token budget, mean steps completed on the enterprise range rose from 1.7 to 9.8; at 100M tokens, the figure rose from 11.0 for Opus 4.5 to 15.6 for Opus 4.6. The best single run reached 22 of 32 steps, well past the previous generation's best of 13, and the paper converts that into roughly 6 hours of the 14 hours it estimates for a human expert. So no model in this paper finished the range, and completion arrived in the next generation at two or three times in ten. Put the two panels side by side and what appears is not a capability that materialized overnight but a curve climbing across several generations.
