---
title: An AI Beat Doctors by Reading Text Alone. Will It Hold at the Bedside?
subtitle: Science reported o1-preview
date: 2026-06-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI Beat Doctors by Reading Text Alone. Will It Hold at the Bedside?

_Science reported o1-preview_

## Executive Summary

> [!callout]
> In April 2026, **Science** published a paper from researchers at Harvard Medical School and Beth Israel Deaconess Medical Center. It reported that OpenAI's o1-preview met or exceeded the baseline of hundreds of physicians on clinical reasoning tasks. On complex clinical vignettes the model's median accuracy was 89%, while physicians with access to search engines and medical databases scored 34%. The headline is striking, but reading the result correctly requires one missing condition.

> Every input the model received was **text**. The vignettes, like the electronic health records, were already the product of someone transcribing a patient into words. A real clinician reads images, listens to auscultation, and observes a patient's expression and pallor. Most of those signals are summarized or lost before they ever become text. That is why the gap between model and specialist shrank sharply in the same study's real emergency-department comparison.

> This piece re-reads the "AI beat the doctors" news through the lens of data. The difference between benchmark and clinic is not a difference in accuracy but in how the data is represented — in which modality and at what level of abstraction. That is less a limit of the model than a problem of data representation.

### Key Figures

Source: Brodeur et al., [Science (2026)](https://www.science.org/doi/10.1126/science.adz4433)

<!-- stat-card -->
**89% vs 34%** — Clinical vignette accuracy — o1-preview median vs physicians

<!-- stat-card -->
**78/80** — NEJM Healer reasoning score — Attendings 28/80, residents 16/80

<!-- stat-card -->
**On par** — Real ED second opinion — Tied with specialists given full info

<!-- stat-card -->
**Text-only** — Model input modality — No imaging, auscultation, or exam

## It Beat the Doctors — What Happened

The researchers tested a single model along six tracks: five benchmarks plus one real emergency-department study. The benchmarks were "gold-standard medical problems" — diagnostic puzzles from NEJM clinicopathological conferences, complex clinical vignettes, NEJM Healer cases. The baseline was hundreds of physicians, from residents to attendings.

The results consistently tilted toward the model. On five complex vignettes, o1-preview's median accuracy was 89%, against 34% for physicians who could freely use search engines and medical databases (P<0.001). On reasoning-quality scores across 80 NEJM Healer cases, the model recorded 78/80, attendings 28/80, and residents 16/80. Every comparison was statistically significant.

Its strengths were not uniform, though. The model pulled clearly ahead on generating differential diagnoses and judging the quality of diagnostic and management reasoning, but on probabilistic reasoning and triage-stage differentiation it was no better than the previous generation. Strong on complex critical thinking, still stalled when it came to handling probability.

> [!callout]
> The most interesting part is the real emergency-department study. At a large tertiary hospital in Boston, human experts' second opinions and the AI's second opinions were compared blind on randomly selected patients. Here the model was on par with or slightly ahead of attending physicians — and its edge was sharpest at the point with the **least information, the early triage stage**. Once enough information had accumulated, as at the time of admission, the gap disappeared.

![A physician and medical staff reviewing a patient case together at a table in a clinical consultation](./image/img-01-clinical-consultation.jpg)
*▲ Clinical consultation — the type of reasoning the study was designed to evaluate | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CP25_Leukemia_Patient_Consultation_(9123625).jpg) (Public Domain)*

## The Model Saw Text, Not a Patient

To read the headline accurately, start with what the model actually received as input. What o1-preview saw was not a patient but text. A clinical vignette is the product of someone already turning a patient's complaints, findings, and test results into sentences, and an electronic health record is text too. Co-senior author Adam Rodman put it plainly: the model "literally just processes the data as it exists in the health record."

So 89% is not a score against "clinical reality" but against **clinical reality already converted into text**. The hardest step of turning a patient into words — deciding what to observe and what to write down — was already finished before the model was ever graded.

The researchers did not hide this. The paper explicitly states the limitation of its text-only design. Performing a physical exam or directly reading an X-ray, CT, or MRI was outside the scope of the evaluation. Rodman warned against "misreading lab results as evidence of the safety and efficacy of treating real patients," and co-first author Peter Brodeur added that "even when the model gets the top diagnosis right, it can recommend unnecessary tests that put patients at risk," insisting that humans must remain the ultimate baseline for performance and safety.

![A clinician holding a stethoscope — the kind of raw sensory signal that never reaches the text the model processes](./image/img-02-stethoscope-doctor.jpg)
*▲ A stethoscope is a prime example of a raw signal that never enters the text-only input the model receives | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Young_female_doctor_showing_stethoscope_closeup.jpg)*

> [!callout]
> The accompanying Science commentary (Hopkins & Cornelisse) pushed back directly on the 89%-vs-34% framing. In the one-to-one comparison on real emergency-department data, o1-preview's lead over two specialists was a narrow margin when information was scarce, and it was on par once information was sufficient. The gap is not as large as the one that circulates in public.

## What a Real Clinician Reads That Isn't in the Text

A real clinician does not read text alone. A large share of diagnosis comes from raw signals before they become words. By the time these signals enter the electronic health record, they have already been summarized, interpreted, or dropped entirely. The vignettes the model is graded on retain almost none of the following four.

Images

X-ray, CT, MRI, skin lesions, fundus findings — read directly by eye. These are the originals, before they are compressed into a single line like "opacity in the lower lung."

Sounds

Heart and lung sounds on auscultation, crackles, the tremor in a patient's voice. In text, this collapses to roughly "crackles auscultated."

Nonverbal signals

Expression and posture, pain response, pallor, cold sweat. Much of triage intuition comes from here, yet almost none of it survives in the record.

Palpation and percussion

Physical-exam information gathered through the fingertips. The location and intensity of tenderness, the borders of an organ — none of it reduces to a number or a sentence.

In the previous section, the model's edge was largest at "the early triage stage with the least information." Least information also means there was no time to refine it into text. In exactly the gap that a human clinician fills with multimodal signals, the text-only model came out relatively ahead. The playing field was tilted toward text from the start.

## Not an "AI Limit" but a "Data Representation" Problem

Press one step further and a familiar question appears. Between the 89% on benchmarks and the slim edge in the field, what disappeared? The common answer is "AI still isn't good enough." But for data practitioners the more precise diagnosis lies elsewhere. This is a **problem of data representation** before it is a problem of model capability.

Winning on a benchmark is winning in an environment where the input is already in a form favorable to the model — refined into text. In the field, the step of turning multimodal raw signals into a clinically meaningful representation is itself part of diagnosis. Yet the benchmark outsources exactly that conversion step to a human transcriber. The model starts from clean, already-converted text, while the physician performs the conversion and judges at the same time.

![A chest X-ray — visual imaging data that in the EHR becomes a single text line such as 'opacity in lower lung field'](./image/img-03-chest-xray.png)
*▲ A chest X-ray — in the electronic health record, this becomes a single sentence. That conversion is the step the benchmark "outsources" | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chest_Xray_PA_3-8-2010.png) (Public Domain)*

Several supporting findings back this diagnosis. Adding images to a multimodal LLM raises accuracy (from 70.8% to 84.5% in one study), but the model does not benefit from visual information as much as humans do; it tends to overweight text relative to visual cues. **Nature Medicine** flagged the "licensing exam fallacy" — that a high board-exam score is not the same as real-world diagnostic ability. On real patient data, LLMs had significantly lower diagnostic accuracy than physicians, failed to order needed tests, and were sensitive to the order of tests.

The same shape recurs in other research. An analysis evaluating 21 LLMs found the models cleared 90% on final diagnoses given complete information, but were consistently weak at the early reasoning stage where information was sparse. It maps exactly onto the emergency-department result above: strong once the information is fully organized into text, weak before that organizing is done. The line dividing strength from weakness is drawn not by how smart the model is but by how well-refined the representation of the input is.

> [!callout]
> So the difference between "exam data" and "field data" is not a difference in accuracy. It is a difference in which modality and at what level of abstraction the data is represented. Even for the same patient, the patient transcribed into text and the patient that exists as image, sound, and touch are entirely different inputs to the model. The benchmark handles the former; the field handles the latter.

## Translating an "Exam Data" Win into "Field Data"

This story is not specific to medicine. The same structure recurs everywhere models are evaluated and deployed. When you meet a SOTA score, the first thing to ask is not "what's the number" but "what representation of data produced that number." Unless you confirm that the benchmark input shares the same modality and the same level of abstraction as the field input, you will misread a report card from the exam hall as a warranty for the field.

In practice the questions are concrete. Does the data we feed the model contain the field's raw signals without loss, or is it a refined version that passed through someone's summary? Which modality dropped out entirely during that refinement? If there is a modality gap between the evaluation set and the operating environment, that gap should be closed not by scaling the model up but by reworking the data representation.

![AI clinical pathway diagram showing age, risk factors, symptoms, and additional data flowing through AI into symptom assessment, care navigation, and EHR integration](./image/img-04-ai-clinical-pathway.png)
*▲ Connecting multimodal inputs (age, risk factors, symptoms, additional data) into an AI clinical pathway — a design example of what AI-Ready Data bridging looks like | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:How_Ada_Health_Works.png) — Ada Health (CC BY-SA 4.0)*

This is the essence of AI-Ready Data: moving the field's multimodal reality into a representation a model can use, with as little loss as possible. o1-preview's 89% was a score awarded at the spot where that conversion was already finished. Who performs the conversion, and how, is the stage of the next competition.

> [!callout]
> An AI that beat doctors by reading text alone is clearly a meaningful advance. At the same time, it is a win on exam data, not a win on field data. The bridge between the two is not a smarter model but data that faithfully represents the signals of the field.

## FAQ

## References

### R.1. Academic papers

- 1.Brodeur PG, Buckley TA, Kanjee Z, et al. (2026). "[Performance of a large language model on the reasoning tasks of a physician](https://www.science.org/doi/10.1126/science.adz4433)." _Science_ 392, 524. DOI: 10.1126/science.adz4433.
- 2.Hopkins MM, Cornelisse R. (2026). "[Companion commentary: the gap between benchmark advantage and field performance](https://www.science.org/doi/10.1126/science.adz4433)." _Science_ (companion commentary).
- 3."[Why a high board-exam score is not the same as real-world diagnostic ability (the licensing exam fallacy)](https://www.nature.com/articles/s41591-024-03097-1)." _Nature Medicine_ (2024).
- 4.Mass General Brigham. (2026). "[Evaluation of 21 LLMs: accurate final diagnoses given complete information, but weak at the early reasoning stage](https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/ai-chatbot-lacks-clinical-reasoning)." Coverage tied to _JAMA Network Open_ (2026).

### R.2. Press and institutional sources

- 5.STAT News. (2026.04.30). "[OpenAI LLM model outperforms doctors, study published in journal Science](https://www.statnews.com/2026/04/30/open-ai-llm-model-outperforms-doctors-study-published-journal-science/)."
- 6.EurekAlert! (2026). "[Harvard Medical School / Beth Israel Deaconess press release](https://www.eurekalert.org/news-releases/1126008)."
- 7.News-Medical / Inside Precision Medicine. (2026.05). "[AI model outperforms doctors in clinical reasoning tests](https://www.news-medical.net/news/20260504/AI-model-outperforms-doctors-in-clinical-reasoning-tests.aspx)."

Thank you for reading. Every time you meet a piece of AI performance news, the habit of also asking "what representation of data produced that score" will help you gauge the distance between the exam hall and the field more precisely. If you have thoughts or counterarguments on this topic, we would love to hear them.

**Pebblous Data Communication Team**  
June 12, 2026
