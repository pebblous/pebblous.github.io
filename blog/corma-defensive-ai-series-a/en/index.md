---
title: Can Corma
subtitle: Corma raised $125M at a $1B valuation, three months after its seed
date: 2026-11-17
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Corma

_Corma raised $125M at a $1B valuation, three months after its seed_

## Executive Summary

> [!callout]
> A company that intends to build AI models used only for stopping break-ins has been valued at a billion dollars. Corma, which keeps offices in Tel Aviv and San Francisco, announced it had closed a Series A led by NEA. It first made itself known in August, which puts three months between the two.

> Corma's case is that attack and defense do not fight on equal terms. An intruder can knock many times and needs one door to open; the side guarding the building has to hold every door, every time. In an engagement study Corma published, one general-purpose model planted a backdoor 85% of the time when it played the attacker, and caught 19% of those attacks when it played the defender. Those figures come from the company itself, and no record of anyone outside rerunning the same setup has surfaced.

> Sections 1 through 4 are what the coverage and the company's own announcements say. Section 5 is our reading.

### Key figures

Four numbers carry this story: what Corma raised, how long it took to get here from the seed, and the two rates it puts forward as evidence.

Source: [Corma's press release](https://www.financialcontent.com/article/bizwire-2026-11-16-corma-raises-125m-series-a-at-1b-valuation-to-scale-its-frontier-foundation-model-for-cyber-defense-as-fortune-500-adoption-of-its-models-surges) and the coverage citing it. The 85% and the 19% come from a study the company published, confirmed here through secondary coverage.

<!-- stat-card -->
**$125M** — Raised in this Series A — NEA led the round and the valuation came in at $1 billion. Total raised now stands at $185 million

<!-- stat-card -->
**Three months** — From seed to Series A — A $60 million seed led by Sequoia in August was Corma's first public step

<!-- stat-card -->
**85%** — Backdoor success rate when it played the attacker — Corma's own study. No record of a third party rerunning the same design has been found

<!-- stat-card -->
**19%** — Attack detection rate when it played the defender — Same study. Even where copies of one model faced each other, the defense missed 78%

## What investors saw in October

Corma said on November 16 that it had closed a $125 million Series A. NEA led it, with Sequoia, Khosla and Coatue joining. The valuation came in at $1 billion. Corma first surfaced in August with a $60 million seed led by Sequoia, which puts the two rounds together at $185 million raised.

Founder and chief executive Alon Pluda served in Unit 8200 of the Israeli military, and before Corma he co-founded the security company Miggo Security. Corma keeps offices in two places, Tel Aviv and San Francisco.

The speed stands out because of what happened in October. Security people came to call that month Black October: a remote code execution flaw turned up in the PHP interpreter that web servers around the world rely on, and zero-days followed in GitLab and Node.js. CNBC and other outlets reported that the same month brought the Cairn campaign, in which an AI agent worked through more than a hundred corporate sites with almost no human hand on it. From where an investor sits, the round closed right after a month's worth of evidence that attacks had already sped up.

What the press release calls the product is a frontier foundation model for cyber defense. That is a declaration of building the underlying model itself, rather than stopping at security features laid over someone else's.

The release says adoption among Fortune 500 companies is climbing quickly, and that Corma scaled its server capacity 24 times over this year to keep up. It does not say which companies are using the models, or what the revenue is.

## An attacker needs one opening, a defender has to close them all

The explanation Pluda repeated through the fundraise is that the two sides do not get the same results out of the same tools. General-purpose models are good at writing code and finding bugs, and those two things are exactly what someone breaking in needs most. The work of holding a network together has a different shape.

The scoring differs before anything else does. An intruder knocks many times, and one opening counts as success. The other side has to stop every one of those attempts just to break even, and a single miss is a loss. Handing both the same tool does not hand both the same gain.

The second reason Corma points to is that the two sides read different material. The code and documents involved in an intrusion are the kind of text a model saw in overwhelming quantity during training. What the defense works on all day is audit logs, security events and network flow records. Those are neither prose nor code: machine writing left for other machines, laid out in rows. Records like that make up a small share of training material, the company says, and so a model reads them less reliably.

Follow that explanation and the problem moves from what the model can do to the material the model has read. The skill that shows up in front of code fails to show up in front of a log, and the reason being offered for that is a difference in how much of each the model saw.

The conclusion runs toward a model trained separately on the records that pile up inside a company. It is also an explanation that comes from the seller of such a model. No outside evaluation putting a general-purpose model and a defense-tuned one through the same conditions has been published.

## 85% for planting an attack, 19% for finding one

To hold the claim up, Corma put out results from a study of its own. It built a fictional corporate network spanning several industries and seated four models in each role by turns, as attacker and as defender, across 241 engagements. The four were Claude Opus 4.8, GPT-5.5, Grok 4.3 and DeepSeek V4.

A model playing the attacker planted a backdoor 85% of the time. The same model playing the defender noticed an incoming attack 19% of the time. The two figures are not two ends of one scale; they are separate metrics. The first counts attacks that worked, the second counts attacks that were caught.

## The money still flows toward automating attacks

Corma is not the first company to pull in money for putting AI to work on security. Line up this year's large rounds, though, and where that money went becomes visible. The middle column of the table below is that direction. Two of the three build tools that automate attacks, and one of them, Horizon3.ai, took in more this year than Corma has raised in total.

| Company | Direction | Funding disclosed this year |
| --- | --- | --- |
| Corma | Defense only | $125 million Series A (November), $185 million total |
| Horizon3.ai | Offense automation (penetration testing) | $250 million (August), valued above $2 billion |
| XBOW | Offense automation (vulnerability discovery) | $120 million, plus a further $35 million |

▲ Compiled from company announcements and press coverage. Dates appear in parentheses only where they were disclosed

Horizon3.ai raised $250 million in August, passed a $2 billion valuation, and says it has more than 6,500 customers. Its NodeZero runs penetration tests in place of a person and shows where a network gives way. XBOW sits in the same family, finding vulnerabilities automatically. Companies that draw the line Corma draws, defense and nothing else, are still rare.

## Why Pebblous is watching this round

Turn Corma's explanation around and one question is left over. If general-purpose models are weak on defense because they have seen little of audit logs and security events, then what makes a defense-tuned model work is the record a given organization has piled up. Wherever the model is bought, the material it will read sits with us.

Those records were never piled up to become training material. Logs are kept to retrace an incident afterward, and to be ready for an audit. Retention is set by what storage costs, the field names for one event differ from device to device, and timestamps follow whatever zone a device was set to. Stretches where a collector was down sit quietly empty, and the date a schema changed often goes unwritten.

Put a model on top of material like that and what it learns is not the shape of an attack but the habits behind the record. Where one device logs more densely, events near that device show up better, and a stretch where collection stopped reads as a stretch where nothing happened. This is why lifting a detection rate runs into data repair before it runs into a model swap.

So the question this story leaves with people who work on data is not which model to pick. It is what quality our own logs are accumulating at, whether we can say when a field changed meaning, and whether the empty stretches are marked as empty. By the time an organization decides to bring in a defense-tuned model, the material that model will read has already been piling up for years.

Verification sits in the same place. The 85% and the 19% came out of a study Corma ran on itself, and there is no way right now to rebuild those conditions from outside and check. The difficulty of measuring what a security product does comes back to this as well. Whether an attack actually came in, and whether it was caught in time, is written down in a different shape at every organization. Who grades defensive AI, and on what material, has not been settled.

## References

### Company statements

- 1.Corma. (2026). "[Corma Raises $125M Series A at $1B Valuation...](https://www.financialcontent.com/article/bizwire-2026-11-16-corma-raises-125m-series-a-at-1b-valuation-to-scale-its-frontier-foundation-model-for-cyber-defense-as-fortune-500-adoption-of-its-models-surges)." Business Wire (via FinancialContent), Nov. 16, 2026.
- 2.Corma. "[corma.ai](https://www.corma.ai/)." Official site.
- 3.Corma. "[Defensive Gap Research (DefenseBench)](https://www.corma.ai/defensive-gap-research)." Self-published study — the original page would not load while this article was being written; confirmed only through secondary coverage.

### News coverage

- 4.Loten, A. (2026). "[Corma, a Startup Building AI Models for Cyber Defense, Raises $125M Series A](https://www.techmeme.com/261116/p28)." The Wall Street Journal (via Techmeme), Nov. 16, 2026.
- 5.The Register. (2026). "[Stopping a cyberattack while walking your dog](https://www.theregister.com/security/2026/08/16/stopping-a-cyberattack-while-walking-your-dog-defensive-ai-security-ceo-says-its-not-ruff-to-do/5288126)." Aug. 16, 2026.
- 6.CNBC. (2026). "[AI's 'Black October': PHP vulnerabilities trigger fresh wave of alarms](https://www.cnbc.com/2026/10/23/php-vulnerabilities-ai-cybersecurity.html)." Oct. 23, 2026.
- 7.CyberProof. (2026). "[Black October 2026: Critical Vulnerabilities, Trusted Technology Under Attack](https://www.cyberproof.com/blog/black-october-2026-critical-vulnerabilities-trusted-technology-under-attack/)." CyberProof Blog.
- 8.Dey, V. (2026). "[Horizon3 Raises $250 Million As Cybersecurity's Next War Goes AI Vs. AI](https://www.forbes.com/sites/victordey/2026/08/03/horizon3-raises-250-million-as-cybersecuritys-next-war-goes-ai-vs-ai/)." Forbes, Aug. 3, 2026.
- 9.Globes. (2026). "[Defensive AI agents co Corma raises $125m at $1b valuation](https://en.globes.co.il/en/article-defensive-ai-agents-co-corma-raises-125-million-at-1b-valuation-1001563580)." Nov. 16, 2026.
