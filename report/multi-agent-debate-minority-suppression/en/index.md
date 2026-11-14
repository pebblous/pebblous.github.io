---
title: Adding Agents to a Multi-Agent AI Debate Buries the Correct Minority
subtitle: Virginia Tech researchers opened 3,211 failed AI debates and found that going from three agents to seven buried correct minority answers more often
date: 2026-10-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Adding Agents to a Multi-Agent AI Debate Buries the Correct Minority

_Virginia Tech researchers opened 3,211 failed AI debates and found that going from three agents to seven buried correct minority answers more often_

## Executive Summary

> [!callout]
> Put several AI models in a room and let them argue, and they will catch each other's mistakes. That expectation is the founding premise of multi-agent systems. A paper posted to arXiv in October 2026 by researchers at Virginia Tech looks at debate from the side where the premise broke. Across runs on eight public datasets, they took the 3,211 conversations that ended on a wrong answer and had gone at least two rounds, pulled them apart one round at a time, and labeled what went wrong.

> The broken part is not where you would look for it. Reasoning errors show up at the same rate in debates that succeed and debates that fail. Relabel the winning debates with the outcome hidden and nine in ten of them turn out to be carrying errors too. What separates the two groups is not whether an error appeared but whether anything pulled it back. And the force that blocks the pull-back grows stronger as the group grows. Going from three agents to seven, the share of debates where a correct minority turned the outcome around drops to roughly a third of what it was, and the share where that minority is overridden moves the other way. A controlled comparison that held the questions fixed and varied only the headcount points the same direction.

> That much is what the paper measured. What follows is this report's **interpretation**. This defect does not surface in a final accuracy number, and it does not surface in the confidence scores the agents write for themselves either, because confidence climbs higher in the debates that end up wrong. The one signal left is how the answers moved, and the paper's early-warning model reads exactly that: it issues a warning one round ahead without touching a single word of message text, working only from the distribution of answers, who switched, and the reported confidence. None of this says stop using multi-agent systems. It says the question of what to watch is still unanswered.

<!-- stat-card -->
**7.87% → 2.50%** — Debates where a correct minority changed the outcome — Measured as the debating group grew from three agents to seven. Over the same span, the share where that minority was overridden rose from 11.37% to 17.70%

<!-- stat-card -->
**91.2%** — Debates that ended correct and still held an error — From relabeling 500 correct conversations with the outcome hidden. The average was 2.4 errors each

<!-- stat-card -->
**0.35 vs 0.35** — Reasoning-error incidence, success against failure — The two groups are identical. This is what breaks the explanation that multi-agent systems fail because they were wrong from the start

<!-- stat-card -->
**81.6%** — Chance a wrong frame survives to the final round — Errors the group itself manufactures almost never come back, however many more rounds are spent. Hardest of all to recover from

## Does debate fix what goes wrong?

What this paper built is not a casebook of failures. It is a side-by-side table in which successful debates and failed debates were measured with the same ruler. That is why the claim "they did not fail because they were wrong from the start" stops being a figure of speech here and becomes two rows you can read off.

The examples the introduction reaches for show where the question comes from. Several models critiquing each other's reasoning and revising it, models of differing temperament paired up to narrow a disagreement, a bench of agents casting votes: all of these are already in use. The authors note that supervisor agents orchestrating specialist agents have shipped as a product, and they cite Amazon Bedrock. What they are aiming at is that in structures like these, the failure is manufactured between the agents. A correct minority answer gets discarded. A weak claim gains ground by repetition. A useful correction disappears before it hardens into a conclusion. Final accuracy reports that the system was wrong and says nothing about what happened in the middle.

The paper went up on arXiv on 23 October 2026 and carries five authors from Virginia Tech. They ran 7,300 debates across eight public datasets, of which 3,543 ended on a wrong answer. The analysis set is the **3,211** of those that ran at least two rounds. That is not every wrong run but 90.6% of them, and the conversations that agreed on the first pass, where there was no debate to speak of, are not in it. The tasks span financial question answering, multi-hop question answering, medical question answering, ethics judgment, multiple-choice reasoning, and code generation. The two largest datasets by trace count are MuSiQue, a multi-hop set, at 23.5%, and LiveCodeBench, a code-generation set, at 19.1%; MedQA, the medical set, is a small share at 8.8%.

The paper is inconsistent with itself about how many datasets there are. The abstract counts six task types, while the introduction and the comparison table say ten domains. The figure that sums to 3,211 when you add up the per-dataset trace counts is eight. This article goes with the eight that the arithmetic supports.

A single conversation carries more than one label, since the taxonomy is multi-label. That is why the six parent categories add up to well over 100%. Of the 3,211 failed conversations, 94.9% carry a recovery/correction tag and 83.4% a consensus/decision tag. These are not shares of blame. Reading 94.9% as "the cause in that share of the failures" is the mistake to avoid. What it says is that nine in ten failed conversations had that tag on them somewhere, alongside others. The paper spells this out in its own appendix, noting that the percentages do not sum to 100%.

That leaves four categories. Coordination/orchestration sits at 53.0%, tool/evidence-use at 44.5%, and reasoning/task-understanding at 43.3%. The smallest of the six is the category the paper calls communication/deliberation, at 14.2%. One piece of vocabulary has to be pulled apart right here. The phrase in the paper's title, communication failure, is the umbrella name for everything that goes wrong once agents start exchanging messages, and the 14.2% is one bounded category sitting inside that umbrella. Anyone who reads the two senses as one word ends up with the nonsense sentence "communication is the problem, and communication ranks last of six." Drop one level further, into the fine-grained types, and the two most frequently applied are a wrong frame that survives correction and premature consensus. The two names this article keeps circling back to are already first and second on that list.

This is also where the comparison that the rest of the article rests on appears. The researchers applied the same taxonomy to successful debates and then set the per-category incidence of the successful side next to the failed side. The figure below is those seven rows. The top two are colored differently because they are the rows where the two values match.

All seven rows of the comparison table in the body of the paper. Nothing was dropped, and the only thing changed is the ordering, so that the two rows with matching values come first. Those two are in orange and the other five in gray. Incidence here means how many of that error label a conversation picked up on average, weighted to match the dataset composition on both sides.

Reasoning errors sit at 0.35 on both sides. Mishandled tools and evidence come in at 0.39 against 0.38, which is the same number for practical purposes. Every row that opens up is below those two. Consensus and decision failures run 1.8 times higher on the failed side, recovery and correction failures 2.6 times, coordination failures 3.6 times, premature consensus 3.5 times, and a wrong frame that survives correction 7.5 times. How often a bad idea occurs to the group is identical. What separates the groups is what happens when someone tries to walk it back.

The same conclusion arrives once more from a different direction. The researchers pulled 500 debates that had ended on a correct answer and labeled them against the same criteria **with the outcome hidden**. Read without any knowledge that they had succeeded, **91.2%** of those conversations contained at least one error, averaging 2.4 each. Successful debates also reach the right answer while carrying errors.

That control group has a boundary around it. The 500 were drawn 83 to 84 at a time from six datasets, with code generation left out, and the 2,277 failed conversations they were set against came from the same six so that the composition would match. So "91.2% of successful debates" is a number from a place where code generation has been removed. Most of the values further down come from the full 3,211, and wherever the denominator shifts, this article says so on the spot.

Every number in this article stands on those labels. A model applied them. Summarizing each transcript into a compact card, drawing candidate tags, fitting them into the taxonomy, and labeling the 500 control conversations were all done by a model. The human share was validation. Three people each read 200 failed conversations, but before they were shown the taxonomy, and wrote in their own words what had gone wrong. Of the observations produced that way, **93.4%** landed on a fine-grained label and **98.1%** on a parent category. The taxonomy very nearly covers the failures a person notices with no framework in hand.

Shown the taxonomy and asked to label with it, the three annotators overlapped at a Jaccard coefficient of 0.82 on parent categories and 0.73 on fine-grained types. Scored against human judgment, the automatic labeling returned micro-F1 values of 0.91 and 0.84. The two sets of numbers are produced by different procedures and cannot be set against each other; each says its own thing. The first says that people agree less with one another the further down the taxonomy they go. The second says that the automatic labels tracked human judgment closely. The paper puts the opposite experiment in the same place: hand a model the full transcript and ask it to classify, and reliability drops. That is the reason the pipeline was broken into building a card, drawing tags, and mapping them.

Where this paper parts company with earlier work is something the authors set down themselves. They line up twelve prior resources that classify agent failures and compare them on four axes: whether inter-agent communication failure is the primary object of analysis, whether the taxonomy was constructed automatically, whether one trace can carry several errors, and whether the work follows how the answer moved from round to round. On that last axis no prior work in the table is checked, and the authors put a mark only in their own cell. Earlier efforts, as the authors read them, mostly attributed after the fact which agent at which step had gone wrong. That is also why this article holds on to round numbers all the way through. The one caveat is that the comparison table is the authors' own drawing, and opening the twelve to check is not something this article did.

## Errors multiply at the first sight of a peer's answer

If errors surface at the same rate on both sides, then when do they multiply in the debates that fail? Because the researchers stamped a round number onto every label, the question has an answer. Count the newly appearing error events round by round and there is one peak, and it sits at **round two**, the round in which each agent first sees what its peers answered.

Carried over from the round-level event figure in the paper's appendix. The vertical axis counts events rather than a per-conversation rate, and the later bars are built only from the conversations that got that far. The peak at round two and the slope after round three therefore have to be read by different rules. The paragraph below sets out the difference.

Comparing rounds one and two is clean. The corpus of 3,211 is by definition made up of conversations that all ran at least two rounds, so the two bars are counted over the **same 3,211**. A 27.9% rise in error events at round two is not an illusion produced by a denominator that changed underneath.

The slope after round three does not work that way. Conversations that reached agreement and stopped drop out of the denominator for the rounds that follow. The paper pins this down in the same place.

"The decline in later rounds does not necessarily mean that deliberation has repaired the trajectory."
                        Pitre et al., arXiv:2610.32060v1

What increases also changes from round to round. Round one carries more reasoning errors and errors of framing. Round two is where consensus-related errors pile up. The further out you go, the thicker the recovery failures get. What moves is the kind of error more than the quantity. The center of gravity shifts from mistakes made while thinking alone to mistakes made after reading someone else's answer.

The data also shows an ordering. The researchers counted which error tends to follow which inside the same conversation and recorded how many times above the overall average that pairing runs. In conversations that opened with premature consensus, a tool's output is ignored later 11.6% of the time, which is 2.79 times the average rate. A correction being talked past follows 16.5% of the time (1.62 times), and the group moving on with the matter unresolved 25.5% of the time (1.35 times). The reverse direction exists as well: in conversations where a tool result was ignored, premature consensus followed in 70.7% of cases (1.37 times).

These are sequences, not causes, and the paper says so itself: "the observed relationships do not establish causality." Nothing in that table licenses reading premature consensus as the maker of the errors behind it. What it licenses is the observation that the two often run together in one conversation.

Anyone tempted to go from there to "so have them talk less" will find the data pointing the other way. The small frictions that come from talking, an objection raised only weakly being one of them, were labeled **more often on the successful side** (34.6% against 18.4%). What stands out on the failed side is a moderator or a hierarchy that did not do its job (12.0% against 42.5%) and a consensus that kept forming and falling apart (14.4% against 28.7%). The researchers attach a condition to this contrast, noting that the outcome-blind annotation reported more of the small things, so only the wide gaps should be read. Even under that rule the direction is plain. The trouble is not that the agents talk. It is in the procedure that turns what they said into a conclusion.

## The correct minority: buried, not rescued

What happens if you add agents? Headcount is the first dial anyone reaches for in a debate setup, and the expectation behind it is clear enough: more eyes, better odds of catching a wrong answer. The researchers gathered only the conversations in which the majority was wrong in round one and counted, separately for each group size, what the majority did next. Taking the result first: what headcount changes is not the recovery rate but **the fate of the correct minority**.

Three of the six columns in the paper's appendix table are drawn here. The three left out are failed recovery (41.51 to 39.27 to 40.13), corruption, where a correct answer is flipped to a wrong one (3.37 to 3.78 to 4.00), and preservation, where the wrong majority simply holds (35.62 to 34.76 to 33.81). None of the three moves appreciably with group size, which is why they are not in the figure. Nothing in the dropped columns runs against the claim this section makes.

Going from three agents to seven, the recovery rate rises from 19.50% to 22.06%, a gain of 2.6 points, and failed recovery stays flat around the 40% mark. The rows that move are the two below. The share where a correct minority changed the outcome falls **from 7.87% to 2.50%**, a factor of 3.1, while the share where a correct minority was overridden climbs **from 11.37% to 17.70%**. Headcount does not make a debate more corrective. It only strengthens the pull that absorbs a correct minority.

That table on its own could be an illusion. If the seven-agent runs happened to cluster on the harder questions, the same picture would appear. This is why the controlled comparison the paper ran separately has to be read alongside it. The researchers paired configurations **that differed in one factor and faced the same questions**, fit a fixed effect for each question, clustered standard errors at the question level, and applied a multiple-comparison correction across 252 tests. The direction holds there too. Moving from three agents to seven does not significantly reduce failure, and while reasoning errors go down, **failures following an abstention and the suppression of correct minority signals go up**. Larger groups add heads to think with and leave the handling of uncertainty and disagreement untouched, as the paper summarizes it.

The same controlled comparison draws the boundary on the other side as well. **Premature consensus, persistent wrong framing, and ignored corrections do not vary statistically with team size.** Making roles explicit, imposing a hierarchy, or swapping the underlying model made no difference to them either. So the sentence "add agents and the debate gets hastier" is not a finding of this paper. On the headcount axis the data support one claim, that a correct minority gets buried, and that is the one spot this article's title stands on.

Each piece of evidence has its own weak point. The table behind the figure above is descriptive statistics counted separately at each group size rather than a comparison on a matched set of questions. The controlled comparison matched the questions and paid for it elsewhere. Failed conversations with no taxonomy card attached were dropped outright, and what remained was reweighted by per-configuration coverage, which in the thinner configurations falls as low as **51%**. In some configurations, that is close to half the failed conversations set aside and the estimate built from the remainder under weights, and the paper carries no analysis of how much the result moves when that weighting is varied. Which is to say this section's claim leans on two pieces of evidence of different character pointing the same way. Neither one alone holds the conclusion up.

Widen the view to individual tasks and the gap opens further. The table below splits the conversations where the majority was wrong in round one by dataset.

| Dataset (task) | Majority recovers | Failed recovery | Minority rescue | Minority buried |
| --- | --- | --- | --- | --- |
| FinQA (financial QA) | 12.83% | 50.33% | 6.17% | 16.33% |
| HotpotQA (multi-hop QA) | 24.92% | 33.83% | 9.92% | 12.33% |
| MMLU (multiple-choice reasoning) | 13.21% | 32.54% | 7.00% | 9.17% |
| MedQA (medical QA) | 56.19% | 36.61% | 0.38% | 1.77% |
| MuSiQue (multi-hop QA) | 16.25% | 62.67% | 6.42% | 15.17% |
| Ethics (ethics judgment) | 3.25% | 26.25% | 1.88% | 28.75% |
| Overall | 20.73% | 40.60% | 5.78% | 13.50% |

********************

All seven rows of the paper's table. The two code-generation datasets are not in this table at all. Two columns that appear in the original, corruption, where a correct answer is flipped, and preservation, where the wrong majority simply holds, have been left out. Add those two to the recovery and failed-recovery columns shown here and each row comes to 100%; minority rescue and minority burial are counted on a separate axis and are not part of that sum.

Taken as a whole, a correct minority is buried 2.3 times as often as it carries the day. By task, the two ends are extreme. In ethics judgment, rescue runs at 1.88% and burial at 28.75%, a gap of **15.3 times**. A minority that happens to be right wins once for every fifteen times it is buried. The far end is medical question answering, where burial is lowest at 1.77% and the majority corrected itself without outside help 56.19% of the time. The axis that separates them has less to do with how hard the task is than with **whether it can be settled by evidence**. Where a source document can be put on the table, a minority can hold its ground by holding up the document. Where right and wrong have to be settled by judgment, it has no such instrument.

Why does the minority get buried? The paper gives the mechanism two names. One is **anchoring on the first answer**, where whatever was said first becomes the reference point and the rest of the debate circles it. The other is **conformity without verification**, where the bare fact that several agents hold the same answer starts working as evidence and the group converges with the checking skipped. Neither comes from spite or from reading the room. Both come from the structure. Sycophancy, in fact, was assigned to exactly **one** conversation out of all 3,211, and a dogmatic refusal to revise to five. The story in which the models flatter one another into a wrong answer is not what this data shows.

The conclusion of this section is one the paper writes out as a recommendation. Verification should differ by task, it argues, and ethics-style tasks need stronger protection of correct minority answers. It is one of the rarer cases where the numbers and the recommendation point at the same spot.

## Repairable mistakes and the stubborn, collective kind

Errors appear in successful debates too, as section one established. Which means the dividing line is which errors get repaired and which ones stay to the end. The researchers took errors that appeared before the final round and counted, label by label, **the probability that the error was still there in the final round**. There is a rule inside the ranking.

All ten items the paper ranked. The axis starts at 0%, which is why every bar looks about the same length, and that similarity is the content of the figure. Whichever of these errors occurs, more than two in three survive to the end. The top three are in orange because they sit together in the 81% band.

Read the top three again and they have something in common. A wrong frame that keeps getting used after someone corrects it. An agent stepping back with an unknown and nobody filling the gap it left. A dissent that was raised and still could not be walked back. None of the three is an error a single model can commit on its own. They are **errors that exist because several agents are in the room**. The local mistakes run the other way: misreading the question, taking a term to mean different things, assuming something without grounds. Those, the paper writes, get repaired well through debate. Debate is useful against the mistakes of an individual and loses its grip on the errors a group manufactures.

A failed recovery does not travel alone either. In **78.6%** of the conversations where recovery failed, a consensus or decision failure appears alongside it. This is not a mess to be swept up afterward. It is tangled into the procedure by which the group reaches a conclusion.

### 4.1. Do more rounds repair it?

The question follows naturally. At face value the paper's numbers make the answer look pessimistic. Debates that agreed in round one and stopped there are **82.1%** correct. Debates that ran several rounds are **46.4%**. Close to a factor of two.

Reading that as "debate longer and you end up wrong" is a mistake the paper blocks directly on the same page. Problems that settle in a single pass are mostly the **easy or unambiguous** ones, and the hard ones are what run long. On top of that, multi-round debates produce 61.0% of all correct answers. The phrase the paper settled on is that multi-round debate has high variance, and nowhere does it say the extra rounds are useless. The fact that 89.2% of wrong conversations did not end in one round and carried on into the next belongs to the same picture. A long round count is closer to a signal than to a result.

Numbers from the paper's Appendix K, "Round Analysis." Only 24.3% of debates settle in round one; the remaining 75.7% ran longer (36.7% of all debates went to round five or beyond). The 82.1%, 46.4%, 61.0%, and 89.2% already cited in the text all come from this same analysis.

## Confidence is not a signal

Everything so far has been labeling applied after the fact. What practice needs is a signal you can use while the thing is still running. The easiest candidate on hand is the confidence score the agents write for themselves. Plenty of debate setups collect a confidence alongside the answer and stop once it is high enough. The data in this paper rules that use out.

| Confidence measure | Debates ending correct | Debates ending wrong | p-value |
| --- | --- | --- | --- |
| Rise from the first round to the last | +5.54 | +10.49 | 5.30×10⁻⁵³ |
| Rise immediately after changing an answer | +10.56 | +7.42 | 1.79×10⁻¹⁶ |
| Confidence level in the final round | 93.10 | 89.34 | 3.94×10⁻⁴⁰ |

The whole of the confidence comparison table in the paper's appendix. The scores are what each agent wrote for itself on a scale from 0 to 100. The p-value measures how likely a difference that size would be to turn up by chance, so the smaller it is, the harder the difference is to put down to chance. All three are very small.

The first row is the one that matters. Confidence rises on both sides as the debate proceeds, and **the wrong side rises almost twice as far.** Debates that got the answer right gain an average of 5.54 points; debates that got it wrong gain 10.49. By the time they finish, the gap in confidence between the two groups is **3.76 points**. Wrong debates are landing at 89 and change, and a threshold set at 90 or at 85 will not tell the two apart.

Flattening this into the general observation that models are poorly calibrated loses the point. What is being measured here is not the calibration of any one model but **how much the process of debating inflates confidence**. Confidence climbs while the agents read each other and a consensus settles, and that increment does not sort correct from wrong. On the wrong side it is larger. The thickness of the agreement is getting translated into confidence, and the thickness of the evidence is not.

One row runs in the opposite direction. The confidence gained immediately after an agent changes its answer is larger on the correct side (+10.56 against +7.42). There may be signal in the event of a reversal itself, but the paper does not offer this row as a decision rule. As the next section shows, what the early-warning model reads is not the absolute level of confidence but **when and how confidence moved**.

The first of the paper's four design recommendations is a short sentence. Do not lean on self-reported confidence. Which leaves the question of what to look at instead.

## So what is there to measure?

There are three levers whose effect the paper actually confirmed. Two belong to design and one to measurement.

### 6.1. Putting evidence in their hands does the most work

Configurations where agents could look up external documents were paired against configurations given only the question, on the same questions. Across the two multi-hop datasets the failure rate came down **from 74.6% to 36.4%**. Written as a confidence interval that is a reduction of somewhere between 32.7 and 43.8 percentage points, and it is the largest effect among the design factors the paper verified. It overlaps in direction with section three, where medical question answering stood at the opposite end of the burial scale. What the paper did not separately measure is whether the drop in failure from retrieval and the lower rate of burial are the same mechanism.

There is one trap here. Look only at the failed conversations from the tool-enabled configurations and consensus-related errors appear to take up a larger share than before. That is because the vertical axis of that figure is composition within failures. Shrink the denominator and whatever remains takes a bigger slice. The overall incidence goes down.

### 6.2. The limited reach of structure over headcount

The second lever is the shape of the debate. Setting out accuracy by task, the authors write that the procedure and the structure of the task weigh more than group size on its own. Not every structural change registers, though. Installing a moderator and a hierarchy cuts down on consensus forming and collapsing but left the overall failure rate where it was, and handing out explicit roles produced no detectable effect at all. As section three showed, premature consensus and persistent wrong framing barely move across any of these axes. The ground that design repaired is narrower than you would expect.

The second of the paper's four design recommendations sits here. Replace the plain majority vote with active supervision, it says, and set the supervisor's job not at following the majority but at interrogating unsupported claims, tracking disagreement, and verifying competing answers. The closing sentence of that same item is that imposing a hierarchy on its own does not reliably raise accuracy. Creating the seat and specifying what the seat is for are two different pieces of work.

### 6.3. The one signal left is how the answers move

The third is where this paper goes furthest. The researchers built a model that warns about a failure one round before it lands. It separates premature consensus at an AUROC of 0.75, failed recovery after disagreement at 0.78, and failure to recover after an unknown answer at **0.96**, AUROC being a measure of how well the two classes can be told apart. Set against a baseline that never raises an alarm, the accuracy of the warning decision itself goes from 0.56 to 0.66, from 0.55 to 0.58, and from 0.69 to 0.89. That baseline, never firing, is correct on every conversation in which the error did not occur, so it collects more than half by sitting still. These numbers therefore say nothing about the accuracy of the debate. They measure how far the detector climbed above that floor, and in the middle row it climbed 0.03. The thing to look at is less the score than the **input**. The model runs on forty numbers, and they fall into four groups.

<!-- stat-card -->
**Shape of the answer distribution** — How many agents answered, how many distinct answers there are, the majority's share, the margin over the runner-up, the spread, the size of the minority, whether one agent is dissenting alone, whether it is a near-tie, whether it is unanimous

<!-- stat-card -->
**Change since the previous round** — How many agents switched and what share that is, how many moved into the majority, how many left it, how many went to a new answer, whether the majority was replaced, whether unanimity has just formed, and the change in the number of answers, the majority share and the spread

<!-- stat-card -->
**History** — How many times an agent left and came back, total number of changes, how many agents ever changed, the most changes by any single agent, how many still hold their first answer, how many times the majority turned over, how many distinct answers have appeared, how long unanimity has lasted, how many rounds were spent split

<!-- stat-card -->
**Confidence** — Whether confidence was reported, its mean, minimum and spread, how it changed, the gap between majority and minority, the mean confidence of the agents that switched, and the count of agents below 80

The forty features listed in the paper's appendix, regrouped into four. Every item inside each group is carried over. The point of this section is what the list does not contain. Who said what is not in it, and neither is which dataset the problem came from.

"The model uses no message text and no dataset identity."
                        Pitre et al., arXiv:2610.32060v1

What that one line means in practice is not small. Working out where a debate is heading does not require the full transcript. Keep two things, the **answer** each agent gave in each round and the **confidence it wrote for itself**, and all forty numbers can be computed from them. Storage cost becomes a different question, and so does the burden of looking at content that may be sensitive.

Overstating it has to be avoided. On recall alone, a crude rule that fires **whenever the answers are split** scores higher, between 0.96 and 0.98. It raises an alarm on nearly every debate, so that result follows. The authors' model has recall between 0.69 and 0.74, and its worth is on the side of cutting false alarms. On precision, accuracy and AUROC it ranks first for all three failure types. The paper itself claims that much and no more. It loses once on F1, and the phrase "very high recall" in the introduction does not match the table in the body.

The scale is modest. The model was trained on 304 debates and evaluated by holding out one paired question at a time. The paper calls its own taxonomy a diagnostic tool rather than a guarantee. Rather than something to bolt on today, the right reading is as a **demonstration that it is possible**, that the movement of answers alone can say something a round in advance.

A layer deeper, the answer key this model was aiming at was itself produced by a model. Another model labeled the round in which each error began, and when premature consensus alone was annotated twice in two independent runs with near-identical definitions, the two disagreed on roughly two conversations in ten (κ = 0.62). That much wobble in the target is something to hold alongside the scorecard above.

What to do on receiving a warning is still outside the experiments. The paper writes that different warnings can trigger different actions: evidence checking for a premature-consensus warning, consolidating the dissent for a recovery-failure warning, asking again for a failure that follows an unknown. The fourth design recommendation runs the same way, matching the intervention to the kind of error. Re-framing the question where the frame is wrong, laying out the competing answers where consensus keeps oscillating. The proposal is that an intervention aimed at the predicted error is more useful than running one more identical round of debate on everything. It stops at a proposal. No experiment in this paper measures what happens to the outcome of a debate when you intervene that way.

So let us glance outside for a moment. The standard attribute vocabulary for recording what generative AI systems do has slots for the agent's name, version and description, a conversation identifier, a workflow name, request parameters, token usage, tool calls, the messages exchanged, and evaluation scores. It has no slot for rounds, for the answer given in each round, for dissent, for an answer change, for the confidence an agent reported, or for the consensus outcome (checked 27 October 2026). How many tokens were spent has a name. How the answer moved does not have one yet.

## Why Pebblous Is Watching

There is a reason Pebblous spent this long inside a failure-taxonomy paper from a university abroad. Not one of the numbers in the six sections above can be computed from the final output.

### 7.1. Readiness is not only a question about training data

The peak at round two, the share of correct minorities that got buried, the 81.6% that hangs on to the final round: every one of them is a quantity you can only measure if the per-round answers, the confidence values and the dissent survive in structured form. Hold on to the final answer alone and none of them can be calculated. The early-warning model demonstrated something a step more specific than that. The requirement is not the full transcript but **the shape of the answers and how that shape changed**. The "ready to use" in AI-Ready Data reaches past the condition we place on data headed into training. Whether a system leaves its own process behind in a form it can grade itself against is the same question, and this paper shows the required form to be smaller and cheaper than it looks.

### 7.2. Filter logs by correctness and the correct signal goes out with them

A conversation in which a correct minority was buried reads as a wrong answer if all you see is the outcome. The moment logs are filtered by correctness, that record disappears whole, and the correct signal sitting inside it disappears with it. The corpus in this paper was built by picking up exactly the side that gets thrown away: it starts from the 3,543 wrong runs out of 7,300. A failure record is not waste. It is a dataset. The Pebblous piece that [hid agent messages one at a time](/blog/agent-message-trajectory-value/en/) measured the same thing at message granularity. Its finding that something in the 40% range of outcome-flipping wrong messages were in fact on the correct side, and the minority burial in this paper, are one phenomenon counted in two different units.

### 7.3. Three design calls this one paper can settle

For anyone already running multi-agent systems, there are three calls you can lift straight out of this paper.

- Adding agents does not bring recovery with it. The recovery rate barely moves, from 19.50% to 22.06%, and the only line that climbs is the one where a correct minority gets buried. Budget spent here buys little.
- Getting agents to evidence is the largest confirmed effect, taking the failure rate from 74.6% to 36.4%. Whether it is retrieval or internal documents, putting something checkable in their hands does more than adding one more agent.
- Self-reported confidence cannot serve as the rule for when to stop, because it rises further on the wrong side. If your setup cuts a debate short at a confidence threshold, the first thing to re-examine is what that threshold is actually filtering.

Put together, the budget goes not into the number of agents but into **evidence access and process measurement**. That all three fall out of a single paper is itself worth noting.

### 7.4. The empty layer

What Pebblous has worked on in data quality is measuring whether a value is right. The place this paper points to is next door: measuring **when and how it went wrong**. Final accuracy says nothing about this defect, and the confidence a model writes for itself climbs higher when it is wrong. The one signal left is the movement of the answer, and the fact that this signal is captured by forty numbers with no message text attached means it can be measured cheaply, and without anyone reading what was said. Yet the industry's standard vocabulary has no name to hold those numbers in. That layer is empty. Standing beside this article are the piece on [agent panels agreeing more readily than people do](/blog/llm-agent-groups-overstate-consensus/en/), the [boundary line where multi-agent collaboration starts to pay off](/blog/multi-agent-single-agent-threshold/en/), and the [report on disagreement vanishing from rewritten citations](/report/llm-citation-rewrite-dissent-loss/en/).

The numbers in this article were checked directly against the body and appendix of the source paper (v1), and the ratios and multiples were recomputed. What could not be verified is recorded too. As of 27 October 2026 there is no repository releasing the corpus, the labels or the code, so the measurement is reproducible in principle and not reproducible by anyone else's hands today. Whether agent frameworks and observability products actually retain per-round answers could not be confirmed to the end of their official documentation, so the closing paragraph of section six rests on one standard attribute vocabulary alone. No judgment about what any particular product does or does not support appears in this article. Sections one through six are what the paper measured and section seven is what the paper did not say, so please read them apart. Thank you for reading this far.

## References

The sources are of different grades, so they are grouped. The first group is the primary document from which nearly every number in this article came. The second is the prior work that paper stands on. The third is a standards document, and the fourth is adjacent Pebblous writing on the same phenomenon.

### Primary source

- 1.Pitre, P., Hou, J., Fang, Y., Ramakrishnan, N., Wang, X. (2026). **Understanding Communication Failures in Multi-Agent LLM Systems.** arXiv:2610.32060v1, submitted 2026-10-23. Virginia Tech. Every number in sections one through six comes from the body and appendix of this paper. Read directly from the PDF. [arxiv.org](https://arxiv.org/abs/2610.32060)

### Prior work the paper stands on

- 2.Du, Y., Li, S., Torralba, A., Tenenbaum, J. B., Mordatch, I. (2024). **Improving Factuality and Reasoning in Language Models through Multiagent Debate.** ICML 2024. The source of the method itself, raising accuracy by having several models debate. Title and authors reconfirmed directly against [arXiv:2305.14325](https://arxiv.org/abs/2305.14325).
- 3.Deshpande, D., Gangal, V., Mehta, H., Krishnan, J., Kannappan, A., Qian, R. (2025). **TRAIL: Trace Reasoning and Agentic Issue Localization.** arXiv:2505.08638. Prior work on locating the problem point inside an agent execution trace. Title and authors reconfirmed directly against the original. [arxiv.org](https://arxiv.org/abs/2505.08638)

### Standards document

- 4.OpenTelemetry. **Gen AI attribute registry** (semantic conventions). Checked 2026-10-27. It carries the agent's name, version and description, a conversation identifier, a workflow name, request parameters, token usage, tool calls, input and output messages, evaluation scores and retrieval attributes, and carries no attribute corresponding to rounds, per-round answers, dissent, answer changes, self-reported confidence or consensus. The closing paragraph of section six comes from here. [opentelemetry.io](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/)

### Adjacent Pebblous writing

- 5.[Hiding multi-agent messages one at a time](/blog/agent-message-trajectory-value/en/), a measurement finding that something in the 40% range of outcome-flipping wrong messages were on the correct side. Support for section 7.2.
- 6.[A preregistered study on agent panels agreeing more readily than people](/blog/llm-agent-groups-overstate-consensus/en/), the same phenomenon seen through a different task and a different mechanism.
- 7.[The single-agent skill threshold that decides whether multi-agent collaboration pays off](/blog/multi-agent-single-agent-threshold/en/)
- 8.[What happened to disagreement when LLMs rewrote the citations](/report/llm-citation-rewrite-dissent-loss/en/)
