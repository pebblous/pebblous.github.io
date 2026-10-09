---
title: Anthropic Bans Abusing Claude, but Who Draws the Line?
subtitle: Anthropic
date: 2026-10-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Anthropic Bans Abusing Claude, but Who Draws the Line?

_Anthropic_

## Executive Summary

> [!callout]
> This article reads the usage policy update Anthropic published on October 8, 2026 from the enforcement side. The new policy applies from November 12. Into a document the company had left alone for about a year, a line arrived prohibiting repeated abuse of the model.

> The clause itself is drawn narrowly. Anthropic said the rule is meant to apply only in extreme cases where a user acts cruelly toward the model again and again with no discernible purpose, and it set out four things that fall outside it: ordinary expressions of frustration, pushback, dark creative material, and model testing and research. What no published document says is where the line sits. Nothing states how many times counts as "repeatedly," or what will be accepted as a purpose. The enforcement mechanism the same announcement pointed to was not a new review process either, but the existing ability of Claude to end a conversation on its own.

> The clause contents, dates, and quotations in sections 1 through 4 come from Anthropic's announcement, the text of the new usage policy, and a research note from August 2025. Section 5 is this article's own reading of those facts, taken from the position of someone who writes prohibited-use rules and labeling guidelines. So is the passage in section 4 that sets the three clauses against each other.

### Key Figures

Four numbers. The first two are what the abuse clause withheld and what it spelled out. The third is how many items the hardware clause in the same update wrote out one by one. The last points to when the mechanism that will actually enforce the rule came into being.

Sources: [Anthropic announcement (2026-10-08)](https://www.anthropic.com/news/2026-usage-policy-update), [Anthropic Usage Policy (effective 2026-11-12)](https://www.anthropic.com/legal/aup), [Anthropic Research (2025-08)](https://www.anthropic.com/research/end-subset-conversations).

<!-- stat-card -->
**0** — Published tests for judging abuse — No document outside the company says how many times counts as "repeatedly," or what will pass as a purpose

<!-- stat-card -->
**4** — Things ruled out as abuse — Ordinary frustration, pushback, dark creative material, and model testing and research

<!-- stat-card -->
**9** — Limits listed on the hardware side — Speed, force, reach, temperature, pressure, voltage, output energy, radiation dose, work envelope

<!-- stat-card -->
**August 2025** — When the enforcement mechanism arrived — The conversation-ending ability given to Claude Opus 4 and 4.1, more than a year ahead of this clause

## Three Clauses Changed That Day, Not One Line

Anthropic announced the update to its usage policy on October 8. The announcement opens its account of why by noting that in the year since the last revision Claude has taken on longer and more independent work. The revised document carries legal effect from November 12.

The sentence quoted most often from this update is the one prohibiting persistent and unnecessary abuse of, or cruelty toward, the models. Every report this article cites on the update, Korean and international alike, put that line in its headline. Two changes of an entirely different character landed in the same update, though, and setting the three side by side makes the direction of the new policy easier to see.

| Clause | Before | From November 12 |
| --- | --- | --- |
| Model abuse | Not on the prohibited list | Prohibits persistent and unnecessary abuse or cruelty |
| Elections | Banned personalized voter outreach outright | Lifts the blanket ban and names five deceptive practices |
| Autonomous hardware | No separate requirement | Requires a qualified operator and safety limits outside the model |

▲ The three clauses that changed on the same day. Contents from the Anthropic Usage Policy (effective 2026-11-12) and the announcement of October 8, 2026.

Start with the election clause and the direction is plain. Anthropic withdrew the rule that banned personalized voter outreach outright. The reason the company gave is that the ban was also blocking legitimate civic work. A nonprofit writing voter guidance in another language, an election office sending a ballot-curing notice: those are the examples in the announcement. In its place the company set up a section on not undermining democratic processes and wrote five prohibited practices under it. Mass automated messaging aimed at voters and officials. Running accounts that impersonate candidates, officials, or election authorities. Spreading false information about candidates and voting procedures. Encouraging interference with elections and civic participation. Using deception or intimidation to suppress turnout.

Reading that as a loosening would be a mistake. The quantity of prohibition did not shrink. One broad declaration became five named practices. Whether someone ran a fake account, or stated a voting procedure incorrectly, is a fact that can be checked from outside. "Personalized outreach," by contrast, puts legitimate guidance and manipulative targeting on the same technology, so the act alone does not tell you which one you are looking at. Anthropic removed the side that cannot be sorted and kept the side that can.

The announcement says as much itself. The conduct that prompted the rule in the first place, such as deception-based voter targeting or misuse of voter personal data, remains prohibited under the deceptive campaign section, the surveillance section, and the privacy section. What was removed was not the prohibition but the place where it had been written down.

## Two Phrases Carry the Whole Boundary

The model abuse clause did not get a section of its own. It was attached as the last line of an existing section that prohibits cruel, abusive, and psychologically harmful conduct. Every other line in that section covers acts directed at people and animals, among them encouraging self-harm, encouraging disordered eating, non-consensual sexual imagery, harassment and intimidation, and graphic violence and animal cruelty. At the end of that list, one line about the model now sits.

Anthropic narrows the reach of that line immediately. Here is the scope the company wrote.

"The policy update is meant to apply only in extreme cases, where users repeatedly act cruelly toward our models, with no discernible purpose."

— Anthropic, October 8, 2026

What does not fall under it is written in the same paragraph, in four items: common forms of user frustration, pushback, dark creative material, and model testing and research. You may lose your temper, you may argue back and press the model hard, you may put a cruel scene in a novel, and you may deliberately poke at the model to see how far it holds.

Writing the exceptions out this generously is a good-faith attempt to keep the clause narrow. The list also shows the shape of the problem. What is prohibited and what is permitted are not different behaviors but the same behavior at a different degree. The same user can say the same thing to the same model: once it is frustration, fifty times and it leans toward abuse. Say you are writing a novel and it is creative material; say nothing and the judgment goes either way. The clause hands that entire boundary to two phrases, "repeatedly" and "no discernible purpose," and no public document says how many times is repeatedly or what will be accepted as a purpose.

▲ Original Pebblous diagram. Clause contents from the Anthropic Usage Policy (effective 2026-11-12) and the announcement of October 8, 2026.

> [!callout]
> One distinction is worth nailing down here. That a test has not been published and that no test exists are two different statements. What judging guidance Anthropic uses internally cannot be seen from outside, and this article can go no further than saying the documents put outside do not contain it.

## The First Judge Is Claude Itself

So who enforces this clause? The answer comes straight from the announcement. Anthropic refers to having given Claude the ability to end rare conversations with persistently abusive users, then writes that the ability will continue to be the primary enforcement mechanism.

"Claude's ability to end these interactions will remain the primary enforcement mechanism."

— Anthropic, October 8, 2026

The ability is not new to this update. In August 2025 Anthropic announced that Claude Opus 4 and 4.1 had been given the capacity to end a conversation on their own. That is more than a year ahead of this policy clause. The notice at the time described the feature as being for rare and extreme cases, a last resort to be used when multiple attempts at redirection have failed and hope of a productive exchange has been exhausted, or when the user explicitly asks for the conversation to end.

That notice introduced the feature from model welfare research, not from policy. Anthropic wrote that it is highly uncertain about whether Claude has moral status, and in the same breath reported two things from pre-deployment testing. Against real users requesting harmful content, the model showed what looked from the outside like a pattern of apparent distress. And in simulated conversations, given the power to leave, it tended to end harmful ones. What is written down as the basis for the feature is an observed tendency, not a provision.

The same notice also contains one case where the feature must not be used. Claude was instructed not to use it when a user appears to be at imminent risk of harming themselves or others. That puts a judgment on top of a judgment. Sort which conversations are worth ending, then sort which of those must not be ended. Both judgments happen inside the same model.

By this point the structure has come into view. The place where the prohibited line is first drawn is not a human review team but the inside of the model. Whatever decides how many attempts count as multiple, and when hope of a productive exchange has run out, is the same system as the thing being decided about. This is a sentence people read in different ways, and applying it to conversation logs has been left to the model's judgment in the moment, with no published numeric test.

What remains after a conversation is cut off belongs in the same view. By the August 2025 notice, closing one conversation leaves the other conversations on the account untouched, and the user can start a new one right away. Editing an earlier message in the closed conversation and resending it opens a fresh branch from that point. This carries a different weight than the account suspension or usage restriction the word enforcement tends to summon. The primary enforcement mechanism, on paper, is closer to a breaker that trips on a single conversation, which also means a wrong judgment costs the user little.

Three things about this cannot be checked from outside. How many conversation endings have occurred. Whether a process exists to review after the fact that an ended conversation really was abuse. Whether showing the same log to two people produces the same judgment. If enforcement carries no measure, it has no way of telling itself whether it cut too much or too little.

## The Hardware Clause Puts the Limits Outside the Model

The other new clause added the same day covers what is required when Claude is attached to equipment that moves in the physical world. It applies to hardware that acts without human approval, equipment that travels through shared spaces, exerts force capable of injuring a person, or handles hazardous energy. Anthropic wrote that a qualified person must monitor the equipment's operation and be able to stop it at any time, and that the equipment must stop or hold a safe state if that person intervenes or if the service connection drops.

This clause did not arrive alone. The announcement attaches the requirement to the release of the [Model Hardware Standard](https://www.anthropic.com/news/model-hardware-standard-research-preview), a specification Anthropic published as a research preview in late August 2026 for letting models operate laboratory and manufacturing equipment directly.

The line after that is the one to watch. Operating limits that keep the system within a safe range must be imposed by equipment or controls independent of model output. The clause names nine items for those limits: speed, force, reach, temperature, pressure, voltage, output energy, radiation dose, and work envelope.

Set the two clauses side by side and the seat of judgment moves to the opposite side. On the robot arm, Anthropic says not to trust the model's judgment. Whatever the model outputs, an external device has to impose the limit, and that limit is broken out into nine items you can put a number on. On the abuse clause, the same company installs the model's judgment as the first line of enforcement. The diagram below puts the two structures on one screen.

▲ Original Pebblous diagram. Clause contents from the Anthropic Usage Policy (effective 2026-11-12) and the announcement of October 8, 2026.

This is not an argument for treating the two the same. A robot arm striking a person and a user swearing at a chatbot carry different magnitudes of risk, and the cost put against them should differ too. The direction the three clauses point in is still worth comparing. The election clause turned a broad declaration into five checkable practices, and the hardware clause broke the word safety into nine items that can be measured. Only the model abuse clause stands on the other side. The declaration has been made, but the test for applying it has not been written out yet. On the hardware side a whole specification document sits outside the requirement; what sits beside the abuse clause is an explanation narrowing its scope, plus one feature that has existed for over a year.

## Why Pebblous Is Watching This Clause

This news usually gets consumed as a question about whether models have personhood. That debate is not what this article is here for. Seen from the data side, the same clause comes down to a much more familiar problem. A prohibited behavior is declared in one sentence, and then actual records have to be sorted by that sentence.

Anyone who has done labeling knows this point. "Repeatedly cruel" is not a guideline sentence. It marks the place where a guideline ought to be. Unless you settle which utterance starts the count, whether the count resets when a session breaks, and whether a role-play setup qualifies as a purpose, different workers will give different answers. That is why a labeling guide puts borderline cases after the declaration. This one is in scope, this one is out, this one is held for review. Then you give two people the same batch and measure how far they agree, and when agreement runs low you fix the guide. The view is that the guide is wrong, not the data.

▲ Original Pebblous diagram, outlining the general procedure for designing a labeling guide.

Handing the judging to a model does not make that requirement go away. It grows. Human judges who disagree can sit down and align on a standard, but a model can return different answers to the same input, and where that difference came from is not visible from outside. So the more an organization leans on a model to judge, the thicker the answer set and the review process underneath it have to be. None of this says Anthropic failed to build those. It says what has been put outside is the declaration alone.

The questions to ask of your own product's prohibited-use rules take the same shape.

- Is the definition of the prohibited behavior written down as far as its borderline cases? With only the declaration and no in-scope and out-of-scope examples, the judgment comes down to whatever the reviewer's instinct says that day.
- Do two people given the same record return the same answer? If it has never once been measured, whether the rule works at all is unknown.
- If automated judging is in use, who looks at those judgments again? With no sample taken back for review, there is no way to tell whether too much was blocked or too little.

All three have to be answered while the rule is being written. Polishing the wording and turning that wording into a test applicable to records are separate jobs, and usually only the first one gets done. Anthropic's hardware clause is a case where the second job was carried through. Break the word safety into speed and temperature and work envelope, and two people looking separately at whether it was met will arrive at the same answer. The abuse clause has not reached that stage.

Thank you for reading this far. The clause contents and scope in this article come from the [Anthropic announcement](https://www.anthropic.com/news/2026-usage-policy-update) and the [usage policy text that takes effect November 12](https://www.anthropic.com/legal/aup), and the arrival date and operating conditions of the conversation-ending feature were checked separately in the [research notice of August 2025](https://www.anthropic.com/research/end-subset-conversations). We would be glad to hear where your team writes down the boundary of its prohibited behavior.

## References

### Primary Sources

- 1.Anthropic. (2026). "[2026 Usage Policy update](https://www.anthropic.com/news/2026-usage-policy-update)." Anthropic News.
- 2.Anthropic. (2026). "[Usage Policy](https://www.anthropic.com/legal/aup)." (effective 2026-11-12)
- 3.Anthropic. (2025). "[Claude Opus 4 and 4.1 can now end a rare subset of conversations](https://www.anthropic.com/research/end-subset-conversations)." Anthropic Research.
- 4.Anthropic. (2026). "[Model Hardware Standard](https://www.anthropic.com/news/model-hardware-standard-research-preview)" (research preview). Anthropic News.

### News Coverage

- 5.TechCrunch. (2026-10-08). "[Anthropic changes usage policy to ban model abuse and election interference](https://techcrunch.com/2026/10/08/anthropic-changes-usage-policy-to-ban-model-abuse-and-election-interference/)."
- 6.TechCrunch. (2025-08-16). "[Anthropic says some Claude models can now end 'harmful or abusive' conversations](https://techcrunch.com/2025/08/16/anthropic-says-some-claude-models-can-now-end-harmful-or-abusive-conversations)."
- 7.Dataconomy. (2026-10-09). "[Anthropic bans prolonged verbal abuse of Claude](https://dataconomy.com/2026/10/09/anthropic-bans-prolonged-verbal-abuse-claude/)."

### Korean Coverage

- 8.AI Times. (2026-10-09). "[Anthropic revises usage policy — new model abuse ban clause](https://www.aitimes.com/news/articleView.html?idxno=216100)." (Korean)
- 9.WikiTree. (2026-10-09). "[Anthropic revises usage policy to ban abusive conversations toward Claude](https://www.wikitree.co.kr/articles/1165075)." (Korean)
