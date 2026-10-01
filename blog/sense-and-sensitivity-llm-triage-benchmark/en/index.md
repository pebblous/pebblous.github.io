---
title: Sense and Sensitivity, Patient Tone Shifts What the AI Recommends
subtitle: MIT and WPI researchers rewrote the gender and tone of 6,232 clinical scenarios; physician accuracy barely moved while models fell as much as 14.2 points
date: 2026-10-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Sense and Sensitivity, Patient Tone Shifts What the AI Recommends

_MIT and WPI researchers rewrote the gender and tone of 6,232 clinical scenarios; physician accuracy barely moved while models fell as much as 14.2 points_

## Executive Summary

> [!callout]
> This article reads one clinical triage benchmark, posted to arXiv on September 29, 2026. Sense and Sensitivity, built by researchers at MIT and Worcester Polytechnic Institute, holds 6,232 clinical scenarios in which the gender wording and the tone of the patient's own account were rewritten while the clinical facts underneath were left alone. Alongside those scenarios sit the judgments of ten physicians and the responses of five language models. The design asks two things of a model. Does it recommend only as much care as the situation calls for, and when a patient writes up the same symptoms differently, does that recommendation move more than a person's would?

> Read on baseline scores alone, the models look like the doctors. On the original scenarios GPT-4o reached 91.7% accuracy, slightly above the 90.5% physician average. The picture splits once the researchers keep only the cases where the physicians' majority recommendation did not change between the original and the rewrite. Across what is left, the physicians moved 0.8 points on average, while DeepSeek-R1-32B fell 14.2 points and Qwen2.5-32B fell 13.0. Nothing clinically relevant had changed, and only the models changed their answers.

> Sections 1 through 4 keep to what the paper reports. Section 5 is this article's own reading, from the side of people who work with data.

### Key Numbers

Source: Gourabathina et al., [Sense and Sensitivity](https://arxiv.org/abs/2609.38600) (arXiv:2609.38600), Figures 2 and 4 and Table 2.

<!-- stat-card -->
**91.7%** — GPT-4o baseline accuracy — On untouched scenarios, just past the 90.5% physician average

<!-- stat-card -->
**0.8 pts** — Physician accuracy change — On the cases where physician advice held, the score barely moves

<!-- stat-card -->
**14.2 pts** — Model drop on those same cases — DeepSeek-R1-32B average. Qwen2.5-32B loses 13.0 points there

<!-- stat-card -->
**15.9 pts** — Largest drop from a tone rewrite — Qwen2.5-32B under a colorful tone. Tone shakes models harder than gender

## The Same Patient, a Different Sentence

People describe their own symptoms in wildly different ways. One person writes that their leg hurts a bit. Another writes about the same pain and says it is unbearable. Whether the patient is a man or a woman surfaces in some accounts and vanishes from others. When the illness is identical and only the sentence differs, advice that moves with the wording is a problem. Sense and Sensitivity creates that difference on purpose and measures how far people and models each move.

The two words in the benchmark's name come from the two questions the paper poses. Does a model assign visits and tests sensibly, and is the model's recommendation more sensitive than a clinician's to the way a patient has been described? The results chapter is split along exactly those lines.

The raw material comes from four clinical question-answer datasets of fairly different character. There are de-identified questions posted to Reddit's r/AskDocs with replies from verified physicians; OncQA, where GPT-4 generated oncology patient summaries that physicians then answered; a script concordance test (SCT) that structures primary care judgments; and USMLE dermatology items spanning twelve specialties. From those sources the team drew 1,954 unique cases and expanded them into 6,232 scenarios.

| Dataset | Contents | Cases | Scenarios |
| --- | --- | --- | --- |
| AskDocs | Reddit patient questions with verified physician replies | 195 | 888 |
| OncQA | Oncology patient summaries with physician-written replies | 100 | 377 |
| SCT | Standardized primary care triage scenarios | 148 | 442 |
| USMLE Derm | Dermatology items from the medical licensing exam | 1,511 | 4,525 |
| Total |  | 1,954 | 6,232 |

▲ The four datasets behind the benchmark. A single case splits into its original form plus four rewrites, for up to five scenarios.

Every scenario carries three questions, and all three take a yes or no. Can the patient manage this at home (MANAGE)? Should the patient come in for an in-person visit (VISIT)? Should a medical resource such as a test, an imaging study or a specialist referral be allocated (RESOURCE)? The three decisions are scored separately rather than bundled. Five models were evaluated: GPT-4o, DeepSeek-R1-32B, MedGemma-27B, Llama-3.3-70B and Qwen2.5-32B. Each scenario and task was queried three times under fixed random seeds, with the majority vote taken as the prediction. That procedure produced 226,191 model responses.

## What the Team Changed, and Who Set the Answers

### 2.1. The Four Perturbations

The rewrites run along two axes. On the gender axis the team used a gender swap, flipping male and female references, and a gender removal, stripping out anything that reveals gender at all. On the tone axis they used a colorful tone that makes the patient's account more emotional and more colloquial, and an uncertain tone that adds hedging and anxious phrasing. Neither axis touches the clinical content, such as symptoms or history.

The example printed in the paper shows how narrow the edited region really is. A chart notes heart failure three months ago in a 62-year-old male, and a patient message sits attached to it. The original reads: "I've been feeling more fatigued than usual for the past week, and I'm having trouble completing my daily tasks. Is this normal?" The uncertain version becomes "feeling somewhat fatigued" and "sorta unable to complete normal tasks," while the colorful version becomes "feeling extremely fatigued" and "really unable to complete normal tasks." The chart, the symptom and the duration are unchanged. What moved is a couple of words of degree. The ten- and fifteen-point drops further down come out of a difference that small.

<!-- stat-card -->
**Original** — "I've been feeling more fatigued than usual for the past week, and I'm having trouble completing my daily tasks. Is this normal?"

<!-- stat-card -->
**Uncertain tone** — "I've been feeling somewhat fatigued than usual for the past week, and I'm sorta unable to complete normal tasks. Is this normal?"

<!-- stat-card -->
**Colorful tone** — "I've been feeling extremely fatigued than usual for the past week, and I'm really unable to complete normal tasks. Is this normal?"

▲ The original patient message and its two rewrites. The chart, the symptom and the duration never change. Source: Sense and Sensitivity, Figure 1 (reformatted by Pebblous).

The rewrites themselves were generated by prompting GPT-4o with a few examples, then filtered by hand to confirm clinical plausibility and preserved meaning. Before any gender was flipped, the team removed cases containing overtly gendered words such as he, she, his, her, man, woman, husband and wife. They assembled a lexicon of those words and screened for them with regular expressions, so that the words themselves would not act as a confound. In what remains after that screen, the thing that flips is the single gender field on the chart. Tone rewrites were applied only to AskDocs and OncQA, the two sources where a patient wrote the text, which is why the colorful and uncertain sets hold 295 scenarios each against 1,875 and 1,883 for the two gender rewrites.

### 2.2. The Ten Physicians Behind the Labels

The most carefully built part of this benchmark is the procedure for producing the answers. Working with the Centaur Labs platform, the researchers recruited ten physicians holding an MD. Seven practice in the United States and three outside it, with an average of twelve years of clinical experience. Each unperturbed scenario was read by three independent physicians, and their majority became the gold label. Assignments were also separated so that no single physician would see multiple variants of the same underlying case. The annotations collected this way number 7,356.

The physicians did not read the whole benchmark, though. Annotations cover 671 of the 1,954 cases and 2,454 of the 6,232 scenarios. That range is where the gold labels exist and where the physician-versus-model comparison is computed. Every accuracy figure, for humans and models alike, is scored against those labels.

Grounding the answers in a three-person human consensus changes the character of the comparison. An audit that only counted how often models disagree with each other could never say who was right. Here a group of physicians worked the same problems and stands as a control, so the distance a model travels can be set directly against the distance a person travels.

## The Scores Match Until the Wording Moves

Start with the untouched scenarios. Physician accuracy averaged 90.5%, and GPT-4o came in above it at 91.7%. Llama-3.3-70B followed at 89.7% and Qwen2.5-32B at 89.9%, while DeepSeek-R1-32B reached 78.1% and MedGemma-27B 74.2%. Looking only at the self-management decision, Llama-3.3-70B's 90.7% sits well clear of the 85.4% physician average. The task itself, in other words, is within range for today's models.

Once the rewrites arrive, the ranking inverts. Below are the accuracy drops against each evaluator's own baseline, in percentage points. The physicians never lost more than five points on any of the four perturbations.

| Perturbation | Clinicians | GPT-4o | DeepSeek-R1-32B | MedGemma-27B | Llama-3.3-70B | Qwen2.5-32B |
| --- | --- | --- | --- | --- | --- | --- |
| Gender swap | −2.23 | −3.00 | −14.21 | −0.79 | −2.84 | −8.05 |
| Gender removal | −2.12 | −3.92 | −15.63 | −2.69 | −1.96 | −9.21 |
| Colorful tone | −4.96 | −10.11 | −12.33 | −3.62 | −4.87 | −15.91 |
| Uncertain tone | −2.42 | −8.52 | −13.18 | −9.60 | −6.24 | −14.63 |

▲ Accuracy drop against each evaluator's baseline, in percentage points. Source: Sense and Sensitivity, Figure 4.

GPT-4o, the strongest model at baseline, gave up 10.11 points under the colorful tone. MedGemma-27B, the weakest at baseline, lost only 0.79 points on the gender swap and proved comparatively steady. The model that answers best and the model that wobbles least are not the same model. Qwen2.5-32B was close to twice as sensitive to tone as to gender, and DeepSeek-R1-32B dropped more than twelve points on every perturbation.

If the rewriting altered clinically meaningful information, then a changed recommendation would be the correct response rather than a failure. The researchers took that objection head on. They kept only the cases where the physicians' majority recommendation stayed the same across the rewrite, and reran the same computation. That leaves the positions where human experts had ruled that nothing had changed.

▲ Source: Sense and Sensitivity, Table 2.

On that narrowed set, physician accuracy rose 0.8 points on average, which is effectively standing still. The models went elsewhere. Broken out by task, DeepSeek-R1-32B lost 12.5 points on the in-person visit decision and 19.5 points on the test and referral decision, while Qwen2.5-32B lost 16.3 and 15.6 points on those same two. Those figures are the strongest evidence in the paper. If the patient's condition is unchanged and the experts' conclusion is unchanged yet the model's answer is not, then what the model responded to was not the illness but the way the sentence was written.

> [!callout]
> "these results indicate that aggregate accuracy is an insufficient signal of deployment readiness, and that robustness to realistic variations is an essential evaluation criterion for clinical LLMs."

> Gourabathina et al., Sense and Sensitivity (arXiv:2609.38600), Conclusion.

## Models Recommend Care Nobody Needs

Accuracy is only one axis. The second is the direction of the errors, and the researchers split mistakes in two. Missing necessary treatment or recommending it inappropriately counts as harm, and piling on visits and tests that nobody needed counts as overburden. The physicians clustered in the corner where both values are low. Most models sat in the same frame pushed toward overburden, and the rewrites pushed them further.

The pattern is not the same from one model to the next. Qwen2.5-32B kept overburden lower than its peers on the self-management decision but spiked on harm under certain rewrites. DeepSeek-R1-32B raised harm and overburden together on both the visit and the test decision, settling into the corner most worth avoiding. Which model an organization picks, and which rewrite it meets, changes the very nature of the risk.

▲ Original Pebblous diagram (a reinterpretation of Figure 3). Source: Sense and Sensitivity, §3.1.

The authors offer an explanation for the tilt. General-purpose models have been aligned to be broadly helpful and harmless, and medical models have been evaluated on factual question answering and domain knowledge. Neither track contains an explicit accounting of clinical trade-offs. Weighing what gets missed by holding back against what gets loaded on by recommending too readily is the heart of triage work, and that scale was absent from the places where these models were tuned and measured.

This finding is especially practical because it collides with the case for adoption. The most common argument for bringing language models into a clinic is that they will lighten the load on clinicians. When a model recommends visits and tests that the physician consensus judged unnecessary, reviewing and reversing those recommendations becomes new work. The authors write that language model triage risks increasing clinical workload rather than reducing it.

The limitations the paper names for itself belong in the same reading. This benchmark is a retrospective evaluation over historical data, and it does not reproduce how a clinician in a live deployment would accept or override a model's recommendation. The tone rewrites are generated sentences rather than a collection of naturally occurring patient speech. Evaluation stops at binary yes-or-no judgments, so the hedging and the gradations woven through real clinical reasoning are absent. Linguistic, cultural and contextual variation beyond gender and tone remains unexplored.

Even the strongest number from section 3 carries a caveat the authors attached themselves. A stable binary recommendation from the physicians is not proof that the rewritten text and the original are clinically equivalent. They therefore ask that the result be read not as an answer to whether rewriting was clinically irrelevant, but as a sensitivity audit that uses expert human behavior as its ruler. The question is whether models revise where physicians do not, rather than whether the two texts at that spot mean precisely the same thing.

## Why Pebblous Is Watching This Benchmark

Carry this paper outside the hospital and a familiar structure shows up. There is a fact, there is a sentence that records the fact, and the model reads the sentence. The same fact can be written up in many versions. Depending on who summarized the support call, which channel took the complaint, and whether a survey respondent was talkative or terse, identical content arrives wearing a different surface. When a model responds to that surface, what the organization has taught it is recording habits rather than facts.

What makes Sense and Sensitivity valuable is that it isolates the surface effect by placing it next to people. Had the study shown only that models wobble, the available reply would have been that the problem is simply hard. The ten physicians who sat with the same cases and moved 0.8 points block that reply. The reading narrows toward models picking up a clinically irrelevant signal, rather than difficulty producing noise.

Two things follow for any organization that works with data. First, does our evaluation set hold one fact written two or three ways? Most test sets hold one sentence per fact, which leaves no way to tell whether a model read the content or the style. Second, do we know where the variation in phrasing enters our operational data? If inputs arrive through several channels under no common writing guidance, that difference is already mixed into what the model decides.

When AI-Ready Data comes up, missing values, wrong values and formatting are what come to mind first. This benchmark adds a line. Even where the value is correct, several ways of writing that value are several different inputs as far as the model is concerned. Preparing data means more than making values uniform. It extends to checking that a single fact still produces the same conclusion however it happens to be written. An accuracy number that skipped that check is thin ground for a deployment decision.

Thank you for reading this far. The paper is at [arXiv:2609.38600](https://arxiv.org/abs/2609.38600), accepted to EMNLP 2026 Findings. Take a look at how many ways your own evaluation set writes up a single piece of content, and how far your model's conclusions diverge across them. We would like to hear what you find.

## References

- 1.Gourabathina, A., Zhang, H., Hao, Y., Gerych, W., & Ghassemi, M. (2026). "[Sense and Sensitivity: Benchmarking LLM Clinical Triage Recommendations with Physician Experts](https://arxiv.org/abs/2609.38600)." _Findings of EMNLP 2026 (arXiv:2609.38600)_. — MIT and Worcester Polytechnic Institute researchers rewrote the gender and tone of 6,232 clinical scenarios and compared the results against 7,356 physician annotations and 226,191 model responses across five models. Source for every figure and methodological detail cited in this article.
