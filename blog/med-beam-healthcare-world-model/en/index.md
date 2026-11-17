---
title: Med-BEAM Predicts a Patient
subtitle: Knit Health raised $35M, and ran the 200-patient accuracy test itself
date: 2026-11-17
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Med-BEAM Predicts a Patient

_Knit Health raised $35M, and ran the 200-patient accuracy test itself_

## Executive Summary

> [!callout]
> A medical AI that says it can forecast what happens to a patient next is now public. It is Med-BEAM, which Knit Health of San Francisco released as it closed a Series A led by NEA. The company calls it a world model for healthcare. A self-driving car keeps a running picture of the road and the traffic around it; the claim here is that the path a patient takes through a hospital can be held in a model the same way.

> The evidence the company puts forward is a comparison on 200 patients admitted through the emergency department, each prediction covering the clinical actions of the next 24 hours. On average precision Med-BEAM came out ahead of the general-purpose models it was set against. Knit Health designed that comparison, ran it, and published it, and the four-times figure the press release leads with is measured against the lowest-scoring model in the lineup.

> Sections 1 through 4 report what the company and the coverage say. Section 5 is our reading.

### Key figures

This announcement comes down to four numbers: the money raised now, the size of the patient records the earlier model read, and the two ends of the comparison the company published.

Sources: [Knit Health's press release](https://www.financialcontent.com/article/bizwire-2026-11-16-beyond-large-language-models-knit-health-unveils-med-beam-a-world-model-for-healthcare-backed-by-35m-from-nea), the [UC Berkeley Haas newsroom](https://newsroom.haas.berkeley.edu/uc-berkeley-researchers-entrepreneurs-create-first-healthcare-ai-model-trained-to-understand-clinical-decisions/), and the coverage citing them.

<!-- stat-card -->
**$35 million** — Raised in this Series A — NEA led it, and the total raised now stands at $46.6 million

<!-- stat-card -->
**130 million** — Patients in the earlier model's training records — De-identified records from 30 major U.S. health systems. For Med-BEAM itself the company said only hundreds of millions

<!-- stat-card -->
**0.565 vs 0.228** — Average precision — Med-BEAM against the best general model — The figure on the right is Claude Opus 4.8, the highest of the models compared

<!-- stat-card -->
**200 patients** — The size of the comparison — None of them appeared in training. One task, and the company ran the experiment

## The money and the model arrived together

Knit Health announced a $35 million Series A on November 16. NEA led the round, and Town Hall Ventures and SignalFire came in new. Added to the $11.6 million seed from May, the company has now raised $46.6 million. It says the money will go toward putting Med-BEAM into more clinical settings and growing the science and engineering teams.

Jonathan Kolstad, the chief executive, framed the problem this way: "Healthcare still operates too often on what amounts to chance: which doctor you see, which day you arrive, which hospital you enter." Cutting that chance down, by the company's account, means being able to see ahead of time what is about to happen to a patient, and how the decision made now moves that path.

The company has a short history behind it. It began in October 2023 with a café conversation between a health economics professor at UC Berkeley's Haas School of Business and a doctoral student, and the entity and the product only reached the public this May. It is also the first startup to come out of Berkeley's Center for Healthcare Marketplace Innovation. The founding group includes a professor of biostatistics and epidemiology who built the causal inference design, and an operations lead with a background in behavioral economics.

Med-BEAM is not the first model this company has built either. An earlier one, the Large Clinical Behavior Model (LCBM), came first, and in a pilot run with Providence Health it worked out sooner whether a patient arriving at the emergency department would be admitted, at an accuracy the Haas newsroom described as on par with clinicians. Med-BEAM carries that line forward by widening what gets predicted.

## 'World model' moves from robotics to medicine

World model is a phrase that belongs to robotics and self-driving cars. It names the apparatus that lets a machine run the surrounding environment forward before it moves, so that it can judge what will be different one second after the wheel turns. A model that handles language picks the next word; this kind picks the next state of the world.

That is the frame Knit Health borrowed. By the company's explanation, language models are excellent at understanding and producing language but do not understand what happens when an actual patient is treated. What Med-BEAM learned is not language but paths: how a condition unfolds, what clinicians actually choose, and where a patient ends up after one intervention rather than another.

The company does not say the two kinds of model replace each other. Language models serve as the interface for patients, clinicians and AI agents, and its own world model is the part that understands the clinical environment that interface operates in. The uses it names are adjusting care pathways, patient navigation, clinical trial recruitment, specialist scheduling and predicting response to treatment, along with a claim that three visits to reach the right specialist can be cut to one. The position Knit Health is aiming for sits a layer below products that run those jobs directly. Its stated strategy is to become a shared clinical-intelligence foundation that many organizations draw on.

The cleaner the analogy, the easier it is to miss one question. A world model in self-driving knows the world through the driving records its sensors gathered. In medicine the same job falls to patient records. So asking what this model knows turns into asking where those records came from and how.

## Hundreds of millions of records, and no named source

What the press release writes down as Med-BEAM's training material runs to two lines: billions of clinical decisions, and hundreds of millions of longitudinal patient records. That is the whole of what has been disclosed, and which records from which hospitals is not in this announcement.

The material that does name a source is the UC Berkeley Haas newsroom article cited above. Introducing the earlier model, LCBM, that article says it read de-identified electronic health records from 30 major U.S. health systems through a partnership with the health data company Truveta. The size was 130 million people, about a third of the U.S. population. It adds that the records are mostly structured ones such as orders, referrals and diagnoses rather than free-text clinical notes.

The two numbers should not be read as one. The 130 million is a confirmed figure for the earlier model, while hundreds of millions is the company's own rough figure for this one. Whether the increase in this announcement comes from widening the same partnership or from other routes added to it cannot be settled from what is public.

The company has laid down two principles about data. It uses only material with clearly documented rights of use, and everything is de-identified before it reaches the company. It also writes that it complies with HIPAA, holds SOC 2 certification, and handles permissioned data only. Nowhere in this account does consent from an individual patient appear. The working basis is a data use agreement between hospitals and a data company, and under the current framework de-identified records are generally understood to be available for secondary use without individual consent. In that structure an individual patient has no way of knowing which model their record went to train. How much the company thinks the predictions built on those records can be trusted, it sets out separately.

### 3.1. What the company says its confidence marker does

In that account, what the company puts forward is calibration. It says it tuned the model against actual clinical outcomes so that its degree of confidence lines up with what actually happened, and that where the evidence is thin it marks the confidence down. The company site calls this an honest measure of certainty for every outcome. On the same page sits a sentence about modeling choices being transparent, documented and auditable.

Disclosure stops there. Which algorithm does the calibration, where the line for marking confidence down is drawn, and what data that calibration was validated against appear in neither the company's material nor the coverage. A declaration that the machinery exists does not tell anyone what it filters out. For a hospital to trust the marker enough to change the order in which patients are handled, it first needs an account of how often predictions marked low-confidence actually miss.

## The four-times claim and who measured it

The comparison Knit Health presented is a single task and nothing more. It took 200 patients admitted through the emergency department and had the models rank, in order, the clinical actions that would be carried out over the next 24 hours. The patients did not appear in the training material. The metric is average precision, which puts on a scale from 0 to 1 how high a model ranked the treatments that actually took place.
