---
title: On Prolific, AI-Assisted Answers Get Approved Even When Banned
subtitle: Matching 712,930 submissions against donated ChatGPT histories put AI use at 1%, and in studies that prohibited AI all 60 decided submissions were approved and paid
date: 2026-10-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# On Prolific, AI-Assisted Answers Get Approved Even When Banned

_Matching 712,930 submissions against donated ChatGPT histories put AI use at 1%, and in studies that prohibited AI all 60 decided submissions were approved and paid_

## Executive Summary

> [!callout]
> This article reads a paper posted to arXiv on October 7, 2026. Researchers at the University of Pennsylvania and the Hasso Plattner Institute took 712,930 submission records from Prolific, a platform that recruits participants for online research, and laid them over ChatGPT conversation histories that participants had donated, on a shared clock. The observation did not rest on asking people, and no detector was run across the text. The comparison ran between the trace of a chatbot actually being opened and the minutes a task was underway.

> Once the two records were aligned, AI assistance turned up in 1.00% of submissions, and across the window from December 2022 to February 2026 there was no detectable rise. But the authors put their weight somewhere else. In studies whose instructions explicitly prohibited AI use, every one of the 60 submissions with a recorded payment decision was approved and paid.

> Sections 1 through 4 are facts written in the paper and in Prolific's own help documentation. Section 5 is this article's reading of those facts from the side that buys data made by people.

### Key Figures

Four numbers come out of the paper. The first two say how rare the assistance was and how tightly it clustered among a few people. The last two say how those submissions fared at the gate where payment is decided.

Source: [Sehgal et al., "AI-Assisted Submissions in Online Research Are Rare and Highly Concentrated but Routinely Approved", arXiv:2610.09279 (2026-10-07)](https://arxiv.org/abs/2610.09279).

<!-- stat-card -->
**1.00%** — Submissions with confirmed AI assistance — 7,100 out of 712,930, with no detectable rise over more than three years

<!-- stat-card -->
**64.1%** — Share produced by the top 5% of workers — Excluding them drops the overall rate from 1.00% to 0.40%

<!-- stat-card -->
**99.6% vs 99.70%** — Approval rates, assisted and unassisted — Whether AI was used made no difference to approval

<!-- stat-card -->
**All 60** — Approved in studies that prohibited AI — Every submission with a recorded payment decision was approved and paid

## The 712,930 Submissions Laid Over ChatGPT Logs

Attempts to measure how much AI gets used on online research platforms came in two kinds before this one. Either participants were asked, or the submitted text was fed to a machine that judged whether a model had written it. A direct question goes to people who have no reason to answer truthfully, and a text detector works backwards from style. Neither kind ever learns whether a chatbot was opened.

This study got hold of the trace itself. From an earlier project in which people donated their ChatGPT histories, the authors picked 767 who used ChatGPT at least weekly and had completed more than ten Prolific tasks, then contacted them again. Of those, 425 downloaded their own Prolific submission records and uploaded them. The analysis ran on the 408 whose two records overlapped in time. That yielded 712,930 submissions across more than 127,000 studies, from December 2022 to February 2026. The study count is an approximation rather than an exact tally. Prolific's submission export carries no study identifier, so studies were counted by the combination of publisher name and study title, which folds distinct studies sharing both into one.

The rule for calling a submission assisted is a rule about time. A ChatGPT conversation had to fall between the start and the completion of a task, and the whole task window had to sit inside the span between that participant's first and last donated message. The second condition prevents tasks from periods with no history being counted as clean by default. Tasks running longer than two hours were dropped, since the chance of accidental overlap grows with length. Filtered that way, 12,564 tasks overlapped with a conversation, 1.76% of the total. A classifier then asked whether the conversation had anything to do with the task, which left 7,100. GPT-5.6 Luna did the classifying. One author hand-coded 100 cases to check it, and agreement on whether a submission was AI-assisted came to a kappa of 0.76.

▲ Original diagram by Pebblous. Source: Sehgal et al., arXiv:2610.09279 (2026-10-07).

The method has limits that are just as clear. The only histories collected were ChatGPT, and 76.5% of the donors said they used another AI service more than once a month. Opening a chatbot is also not the same as copying its answer into the response box. That does not make 1.00% a floor, either. The 408 people in the analysis were picked for using ChatGPT at least weekly, so the figure may sit above what Prolific as a whole would show. Missing services pull the estimate down and the selected sample pulls it up, and the paper, setting the two forces side by side, leaves the net direction of bias uncertain. One check does go in its favour. The 342 who never uploaded their submission records used ChatGPT about as much day to day as the 425 who did.

## AI Shows Up in One Submission out of a Hundred

Those 7,100 submissions are 1.00% of the total. The confidence interval runs from 0.72% to 1.32%, and over more than three years of observation no statistically detectable upward trend appeared. That window covers the whole stretch from ChatGPT's arrival to the present. Hence the line in the discussion: "Our findings do not support the view that AI assistance currently poses an existential threat to online research."

Counted by person the picture changes. Of the 408 observed, 68.4% had used ChatGPT on a submission at least once, close to two in three. Among 2,500 workers recruited on the same platform under no such condition, the figure came out far lower. That survey split its method in two. Of the 504 asked outright, 11.31% said they had done it; among the remaining 1,996, who were only asked how many items on a list applied to them so that no individual answer was exposed, the estimate came to 14.24%. The difference between the two was not statistically significant. The expectation that a guarantee of anonymity would shake loose hidden use did not hold.

Setting 68.4% against 11.31% to conclude that self-report shrinks the truth sixfold would be a mistake. The 408 were selected for using ChatGPT at least weekly, while the 2,500 were recruited with no such filter. They are not the same population.

▲ Original diagram by Pebblous. Source: Sehgal et al., arXiv:2610.09279.

Put side by side, the two numbers still show something: many people have tried it and few do it often. Among the 408, only 13.5% had AI confirmed on 2% or more of their own submissions. The rest used it once in a while. The manner is light as well. Of the assisted submissions, 40% involved a single exchange, and in the other 60% the span from the conversation's first message to its last took up 29% of total task time at the median. This looks less like handing a whole task to a chatbot than like calling one in at the question that stalls.

The paper also splits out what the AI was asked to answer. Of the assisted submissions, 55.1% contained responses such as attitudes, preferences or evaluations, which can only be asked of that particular person; 52.2% contained responses with a right and a wrong answer, such as factual recall, reading comprehension or reasoning; and 11.9% contained creative writing. One submission can hold several kinds, so the shares add to more than 100%. Light use or not, more than half the time the thing a study set out to measure was that person's own mind.

How much a 1% rate moves a result is a separate question. Two earlier simulations, both cited in the paper, point in different directions. One found a treatment effect falling from 0.40 to 0.36 standard deviations at 10% assistance; the other found estimates inflated by 2.3 percentage points at 4.4%. The observed 1% is less than a quarter of either assumed rate. The paper adds that the direction and size of the bias depend on the task and on what is being measured, and warns against reading a rate from particular tasks as a rate for online research as a whole.

## Five Percent of Workers, 64% of the AI Use

That 1% is not spread evenly across participants. Ranked by how much AI use they show, the top 5% of workers account for 64.1% of all assisted submissions, and the top 10% for 78.2%. As a Gini coefficient the concentration comes to 0.856, a value that would count as extreme if it described income. Submissions themselves are unevenly spread too, of course, since some people take on far more tasks than others. The Gini for that is 0.575, well short of 0.856. A share is left over that the volume of work alone does not explain.

▲ Original diagram by Pebblous. Gini coefficient 0.856 (95% CI 0.819 to 0.880). Source: Sehgal et al., arXiv:2610.09279.

Something is known about who those few are. A participant one standard deviation higher in daily ChatGPT use was 2.09 times as likely to have a given submission show AI assistance. Assistance appeared more often on better-paid tasks (P=.003) and on longer ones (P<.001). People who use chatbots heavily call one in when a task takes effort. The picture is not a surprising one.

> [!callout]
> Heavy concentration also means the cost of doing something about it is low. Screening out the twenty or so workers in the top 5% removes 64.1% of assisted submissions. The paper attaches a condition to that figure: it holds provided those workers can be identified in advance. The records revealed who they were only after the fact, and spotting them before a task goes out is a different problem. What the paper recommends, alongside inspecting submissions one by one, is a mechanism that gathers quality signals per person across many studies. Such a mechanism is not entirely absent from the platform. The question is what gets fed into it, and the next section shows that place.

## No Rejections Among the 60 Cases Decided Under an AI Ban

When a participant finishes a task on Prolific, the researcher looks at the submission and either approves or rejects it. Approval releases the payment and lifts the participant's approval record. If quality control works anywhere, it works here, so what happened to assisted submissions at this gate matters.

They were treated no differently. Assisted submissions were approved at 99.6% and unassisted ones at 99.70%, and the paper reports the two as statistically indistinguishable. Response format made no difference either: submissions containing bounded responses were approved at 99.7%, those containing open-ended responses at 99.5%. After adjusting for payment, duration, time period, and the participant's usual ChatGPT use and submission volume, no association turned up between rejection and AI assistance.

The point sharpens in studies that carried a prohibition. Among assisted submissions, 73 were classified as coming from studies whose instructions explicitly prohibited AI use, and the authors read those instructions themselves to confirm 61 of them. Of those, the 60 that had a payment decision on record were all approved and paid. None were rejected.

Reading that 60 as "sixty people caught in AI-prohibited studies" overstates it. It counts the submissions for which a prohibition could be confirmed in the instructions the authors could see and a payment decision was on record. The paper says that study-level policies were usually unknown and that the overall scale of prohibited use cannot be estimated. What the 60 settle is a direction rather than a rate. Among the cases that could be checked, nothing was stopped.

Why nothing was stopped is explained by what the detector looks at. Prolific offers an LLM detection feature that researchers switch on themselves, and it covers open-ended questions only. It hunts for behavioural signals such as pasting and switching tabs, and the help documentation states that it does not read the words themselves. Where it can be switched on is limited as well: for now the feature works in studies built in Qualtrics or Prolific's own task builder, with other tools listed as coming. Within that range it performs well, and Prolific's own testing put precision at 98.7% and recall at 78.9%, meaning four out of every five responses that ought to be caught are caught. But 52.6% of assisted submissions contained bounded responses, picked or filled in from a set answer, and those were never in range to begin with.

The weight the platform puts on rejection itself compounds this. A rejection stays on a participant's record as a penalty and enough of them get a person removed from the pool, so [the document setting out when to reject](https://researcher-help.prolific.com/en/articles/445218-who-should-i-reject) urges researchers to keep rejections to a minimum and lists exactly five valid grounds: a skipped required question, a failed attention check, obvious low effort such as a few words or gibberish where a given length was asked for, a completion fast enough to be a statistical outlier at three standard deviations below the mean, and a failed authenticity check. A suspicion that AI was used is not on the list, and of the design techniques the platform recommends, the document says they are guidance for cleaner data and not in themselves grounds for rejection. To withhold payment over AI, then, the authenticity check has to raise a flag, and that check looks at the open-ended question from the paragraph above.

▲ Original diagram by Pebblous. Source: Sehgal et al., arXiv:2610.09279; [Prolific researcher help documentation](https://researcher-help.prolific.com/en/articles/445207-how-do-i-prevent-ai-generated-responses-in-my-study).

> [!callout]
> No rule was missing here. The prohibition was written into the instructions, the detection tool sat on the platform, and a document defining valid grounds for rejection existed too. Even a mechanism that scores quality per person is [written into the platform's documentation](https://researcher-help.prolific.com/en/articles/621821-methodological-justification-pack-how-prolific-protects-data-quality). What moves that score is the researcher's approval, rejection or report. An approval rate of 99.6% means the input arrived as "approve" almost every time, and the person-level record then says nothing happened. That record is exactly what it would take to catch the concentration from the previous section in advance, and the place where it should be written is empty. This mismatch is what the closing clause of the paper's abstract rests on when it says the results leave "platforms poorly prepared should that threat materialize".

## Why Pebblous Is Watching This Study

The paper studied academic surveys, but the same structure sits in the places where data is bought and sold. Labelling work, preference comparisons, answer keys for evaluation, survey-based benchmarks: all of it trades with "made by humans" written on the label. Buyers rarely verify that label themselves. Mostly the vendor wrote it down, and that is taken to settle the matter.

The overlap goes beyond form. In more than half of the submissions where AI supplied an answer, what it answered was an attitude, a preference or an evaluation. That is precisely the kind of data people pay for when they say they are buying human judgement.

This study earns attention because it is a rare case of checking that label against real usage records. Its conclusion matters more for being about procedure: contamination turned out to be slight, while the means of confirming it was absent. A low rate and a working safeguard are two different claims. The rate sits at 1% because most people have decided not to do it, not because anyone screened out the ones who would.

So the questions a buyer of human-made data should put to a vendor come down to three. Each place where this paper found a gap turns straight into one.

- Does the checking cover every response format? A check that only reads open-ended text leaves everything that gets selected or rated entirely unexamined.
- Does the prohibition bite at the payment stage? A prohibition written into a contract and a prohibition that catches when money changes hands are different things.
- Does a record accumulate per worker? Problems that concentrate are hard to catch one piece of work at a time and surface only across many pieces from the same person. If the answer is yes, the next question is what changes that record. Where review passes everything, nothing gets written into it.

None of the three can be answered once the data has arrived. Without submission times and work histories there is nothing left to match against. This paper was possible because Prolific kept a record of submission times and participants could download their own conversation histories. Which records to keep is settled before collection starts.

Thank you for reading this far. The observational figures in this article were checked against the [paper on arXiv](https://arxiv.org/abs/2610.09279), and the scope and performance of the detection feature were confirmed separately in [Prolific's own help documentation](https://researcher-help.prolific.com/en/articles/445207-how-do-i-prevent-ai-generated-responses-in-my-study). We would be glad to hear what your team uses to verify the label when data arrives marked as made by people.

## References

- 1.Sehgal, N. K. R., Tonneau, M., Folk, D., Ungar, L., & Guntuku, S. C. (2026). "[AI-Assisted Submissions in Online Research Are Rare and Highly Concentrated but Routinely Approved](https://arxiv.org/abs/2610.09279)." _arXiv:2610.09279_. — The primary observational study behind every AI-use figure in this article. Full text at [arxiv.org/html/2610.09279v1](https://arxiv.org/html/2610.09279v1).
- 2.Prolific. (2026). "[How do I prevent AI-generated responses in my study?](https://researcher-help.prolific.com/en/articles/445207-how-do-i-prevent-ai-generated-responses-in-my-study)." _Prolific Researcher Help Center_. — The platform's own documentation, used to confirm that its AI-detection feature only runs on open-ended responses.
