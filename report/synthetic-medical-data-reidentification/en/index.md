---
title: Synthetic Medical Data Gave Up One Quarter of the Original Records
subtitle: An arXiv preprint ran membership inference, linkage and reconstruction attacks against SMOTE, Simulant and Avatar, three methods that build each synthetic profile out of real neighbouring records
date: 2026-08-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Synthetic Medical Data Gave Up One Quarter of the Original Records

_An arXiv preprint ran membership inference, linkage and reconstruction attacks against SMOTE, Simulant and Avatar, three methods that build each synthetic profile out of real neighbouring records_

## Executive Summary

> [!callout]
> Data built by picking a real patient profile, pulling in a few of its neighbours and blending them has been released into healthcare under the name of anonymised data. An arXiv preprint posted on 27 August 2026 tested three methods from that family, SMOTE, Simulant and Avatar, against four attacks: membership inference, linkage, reconstruction and attribute inference. All three leaked originals. The adversary held no model parameters and no query access to the generator, only the published synthetic file and knowledge of which algorithm produced it. And that is the position two multiple sclerosis trials are already in. The synthetic placebo arms of both sit on an open access repository, generation settings and all.

> The sharpest part is not the success rate but the place where the metrics and the attacks part company. On the Wisconsin breast cancer data with Avatar at neighbourhood size 2, the same setting used for a real clinical trial release, the post-hoc privacy metrics reported safety: almost no real profile matched to the avatar generated from itself. In that same setting the reconstruction attack recovered 122 of the 449 original records at 80% precision. A quarter of the file. The metrics measure distance; the attack estimates a distribution.

> Regulators sit on that same family of instruments. The paper opens by naming five data protection authorities that have looked at synthetic data as a way to share anonymised data, and Korea's Personal Information Protection Commission is one of them. Its 2024 guidelines are unusually explicit about the chain: pass the safety-verification metrics, be recognised as anonymised information, and the Personal Information Protection Act stops applying. The conclusion here is not that the rules are wrong. Those guidelines do not mandate the three metrics; they leave the door open to other verification methods. What can change is the working default, not the law, and that is where re-identification resistance earns its own line on the data quality scorecard next to accuracy and completeness.

<!-- stat-card -->
**122** — originals reconstructed at 80% precision — Out of 449 Wisconsin breast cancer records. Avatar at neighbourhood size 2, after the frequency filter

<!-- stat-card -->
**97.77%** — hidden rate in that same setting — Post-hoc metrics read this as safe. It is the exact condition under which reconstruction worked

<!-- stat-card -->
**58%** — linkage success under realistic assumptions — SMOTE on the HIV trial data. Adversary holds one real profile; random guessing is 1 in 2,000

<!-- stat-card -->
**0** — mentions of differential privacy in the Korean guidelines — No route to anonymity through a formal guarantee. The ruling stands on passing post-hoc metrics

## One Seed and a Few Neighbours

Synthetic data usually means a model that has learned the distribution of an original dataset and then draws fresh samples from it. The three methods in this report are not built that way. They pick one real record as a seed, find its k nearest neighbours, and combine seed and neighbours with noise to produce a single synthetic profile. The authors group the three under the name Seeded Local Combination, or SLC, and describe them as a hybrid: part generative modelling, part de-identification of an existing profile.

The attack surface itself is different here. The [membership inference work on medical AI](/blog/medical-ai-membership-inference-privacy/en/) we covered earlier was about querying a trained model to learn whether a given patient was in its training set. This paper looks at the data side. The target is not a set of weights but a file that has already left the building. Access to a model can be switched off; a distributed file cannot be recalled.

The algorithm itself is plain. In the original feature space or in a latent one, pick a point, pull in a few points around it, and take a weighted average. The diagram below is one turn of that loop.

One turn of seeded local combination, redrawn from Algorithm 1 of the paper. Source: Lautraite et al., arXiv:2608.27037 (CC BY 4.0)

The three differ only in where they look for neighbours and how they mix them. Those are also the points at which their attack success rates diverge later on.

| Method | Neighbour search | Combination | Origin and use |
| --- | --- | --- | --- |
| SMOTE | Nearest neighbours in the original data space | Random linear interpolation between the seed and one neighbour | Chawla et al. 2002. Designed for class imbalance, also used as a synthetic data generator |
| Avatar | A latent space built by component analysis, typically PCA | A noisy weighted barycentre in the latent space, projected back to the original space | Guillaudeux et al., npj Digital Medicine 2023. Basis of a commercial solution from Octopize used by hospitals, universities, companies and government bodies |
| Simulant | Similar to Avatar | Per-feature sampling of neighbour values in the original space, with multiplicative Gaussian noise on top | Beigi et al., AMIA 2023. A product of a clinical trial software company |

************

The first two rows collapse into one the moment the neighbourhood size is set to 2. With a single neighbour, Avatar's barycentre is just a point between two real points, which is structurally what SMOTE's linear interpolation produces. The paper flags this for a reason that arrives later: neighbourhood size 2 is a setting used for a real medical data release.

### 1.1. Data That Is Already Out There

Patient data built this way is already on the internet. A 2025 study in the Journal of Medical Internet Research reproduced two phase 3 multiple sclerosis trials as synthetic datasets. CLARITY had 865 patients and ADVANCE 1,516. The team generated 2,160 synthetic datasets across a grid of parameter configurations and then selected one per trial. The placebo arms of the two selected datasets are published on Figshare as open access. The selected configurations used neighbourhood size 5 for CLARITY and 2 for ADVANCE.

The sentence where that study set down its grounds for release sits in the discussion: “the explicit privacy assessment allowed us to legally qualify the synthetic datasets as nonpersonal data and share them as open datasets.” Sponsor approvals were obtained too, “although these approvals were not strictly necessary from a regulatory point of view.” It passed the metrics, so it is not personal data; it is not personal data, so it goes out. That chain of sentences is what this report examines.

## What Four Attacks Actually Pulled Out

Before the numbers, look at what the adversary is holding. The threat model assumes no access to model parameters and no ability to query the generator. What the adversary has is the published synthetic file plus knowledge of which algorithm was run with which hyperparameters, which means they can run the same algorithm on data of their own. These are the least favourable conditions for an attacker, and that is what gives the results their force.

Three datasets were used. The Wisconsin breast cancer data, 449 records described by nine ordinal categories separating benign from malignant tumours. The ACTG 175 trial data, 2,139 records on whether HIV patients progress to AIDS. And California Housing, 20,640 records, included as a non-medical control. Rolling the three together and calling the result medical data would be inaccurate; the housing set is there for comparison.

Threat model diagram. Pebblous original illustration (reconstructed from §3). Source: Lautraite et al., arXiv:2608.27037 (CC BY 4.0)

### 2.1. Membership Inference

Membership inference asks whether a specific person was in the dataset. It is scored as the true positive rate at a 10% false positive rate. The reason to look at the low false positive regime rather than overall accuracy is that an adversary becomes dangerous at the moment they can name a few individuals with confidence. On that scale, random guessing scores 10%.

The attack is not new machinery so much as existing machinery combined. The researchers ran several distance-based membership inference attacks already in use against synthetic data, collected each of their scores, added the target profile's own feature values, and trained a gradient boosting model on the result. The raw feature values earn their place: the fact that a profile has a close neighbour means something different in a dense region than at the edge of the distribution. Training material came from 50 shadow models. The resulting ensemble beat every individual attack on all three datasets, while the individual attacks traded places depending on dataset and generation method, none dominating the rest. Fending off one attack, in other words, proves very little.

At neighbourhood size 10, SMOTE and Avatar landed at roughly five to seven times random guessing. The paper calls that level “critically high, and has been rarely observed in the MIA literature.” Simulant, the least vulnerable of the three, still sat around 20% on the breast cancer and AIDS data, which the authors describe as “a serious privacy leakage” in its own right. None of the three came through clean.

### 2.2. Linkage

A linkage attack pairs a synthetic profile back with the seed that produced it. The intuitive move would be to pick the nearest original, but this attack does not use distance at all. It regenerates synthetic profiles from the same seed 200 times to estimate the distribution that seed produces, then asks which seed's distribution the target synthetic profile most likely came from. In the paper's worked illustration the original closest in distance to the target is one candidate, while the density calculation points to a different one. A single figure showing why picking by distance is not the best you can do.

Background knowledge is the decisive variable here. The table in the body of the paper assumes the adversary already holds the entire original dataset, and the authors say themselves that this setting “hardly corresponds to a real-life context.” It is there for benchmarking. But they add something about that unrealistic setting: “the attack closely aligns with the definition of anonymized data set by the GDPR making it an useful tool for practitioners to assess the privacy of synthetic data.” That points at exactly the anonymity question taken up later in this report. The realistic numbers sit separately in an appendix, where the adversary holds the published synthetic data and exactly one real profile. Those results are below.

| Dataset | Avatar | Simulant | SMOTE | Random guessing |
| --- | --- | --- | --- | --- |
| Wisconsin breast cancer | 2.60% | 2.80% | 48.40% | 0.22% |
| ACTG 175 (HIV trial) | 17.00% | 1.20% | 58.00% | 0.05% |
| California Housing | 24.40% | 0.20% | 26.20% | 0.005% |

The realistic setting, where the adversary holds a single real profile. Neighbourhood size 10, averaged over 100 randomly selected targets with the experiment repeated five times. Source: Lautraite et al., arXiv:2608.27037, appendix (CC BY 4.0)

Even without assuming an adversary who already holds the whole original file, SMOTE gave back roughly half, and Avatar gave back 17% to 24% on the AIDS and housing data. The distance from random guessing shows the scale more clearly: SMOTE's 58% on the AIDS data is more than a thousand times the baseline. When the larger benchmark-setting numbers get quoted, the assumption that the adversary knows the full original dataset has to travel in the same sentence. Without it, the number reads as though half the population had been re-identified.

### 2.3. Reconstruction

Reconstruction goes one step further: recover the values of an original record outright, from the synthetic data alone. This attack was designed against Avatar at neighbourhood size 2, and the results split sharply by dataset. On the Wisconsin breast cancer data, 141 records were recovered correctly but at only 9% precision; applying a frequency filter that keeps only the candidates appearing often left 122 records at 80% precision. That is 122 out of 449, a quarter of the file. The AIDS data, by contrast, yielded 10 records at 4.5% precision after filtering and the housing data 17 at 6%, which amounts to failure.

The verdict of “recovered” carries a tolerance. The authors set a per-column mean absolute error budget, different for each dataset, and adopted it only after confirming that essentially no two real profiles sit closer together than that budget. So the 122 recovered records are not digit-for-digit copies of the originals; they are values close enough to a given patient that no other real patient could be confused with them. For re-identification the question is not whether it is a copy but whether it singles someone out, which makes this the stricter reading, not the looser one.

Writing that all three methods leaked reconstructed originals would therefore overstate the result. Reconstruction worked on the breast cancer data, and the fact that the set is small and categorical was decisive. That profile also describes a great deal of real medical data, clinical registries and screening records among it. And Avatar was not the only method breached on that dataset. Running the same attack against SMOTE at neighbourhood size 10, reported in an appendix, recovered 115 records at 72% precision after filtering. The gap against the previous reconstruction attack aimed at this family is wide too: the earlier attack managed 19 records at 95% precision against Avatar at neighbourhood size 2, recovered nothing at all on the AIDS and housing data, and reached 66 records in the SMOTE setting. Attacks improve; data already released stays where it is.

### 2.4. Attribute Inference

The fourth attack uses the fields you already know to guess the ones you do not. The test is comparative rather than absolute: count the share of columns predicted better with the synthetic data in hand than with publicly available auxiliary data alone, and treat a share above half as leakage. SMOTE tripped that condition on every column of the breast cancer and AIDS data and on 88.89% of the housing columns. Avatar ranged from 77.78% to 100%. Simulant leaked on 70% of the breast cancer columns but fell below the line on the other two, at 28% for AIDS and 0% for housing.

Laid over each other, the four attacks show that each method is weak in a different place. SMOTE leaked most through membership inference and linkage. Avatar was breached by reconstruction in the setting tightened to two neighbours. Simulant was less vulnerable overall but still carried 20% membership inference. There was no safe corner. The researchers notified the companies whose products are the subject of the research, waited a standard 90 days before publishing, and decided not to open source the reconstruction attack code. Their stated reason is not hypothetical: “synthetic profiles from health data from real person have already been published in open data,” and it is impossible to ensure that every potentially vulnerable copy of that data has been deleted. They did not take the option of staying silent either. Not publishing, they judged, would leave people with “a false sense of privacy while malicious actors could still find and exploit the same vulnerabilities.”

## The Metrics Said Safe

What the industry measures before a release is not attack success but distance. The metric set used around Avatar includes distance to the closest record, the ratio between the closest and second-closest distances, local cloaking, the hidden rate, and column and row direct match protection. The hidden rate reads like this: take a real profile, find the synthetic profile closest to it, and ask how often that closest one is not the synthetic profile generated from it. A high value means the original is hiding behind someone else's shadow.

On the Wisconsin breast cancer data with Avatar at neighbourhood size 2, that value was 97.77%. Under the same conditions SMOTE scored 38.98% and Simulant 67.71%, so Avatar looked overwhelmingly the safest of the three. And that is precisely the setting in which the reconstruction attack pulled out a quarter of the originals.

Source: Lautraite et al., arXiv:2608.27037, Tables 2 and 4 (CC BY 4.0). The upper bar is the metric value; the lower bar is the share of the 449 originals reconstructed.

The two bars diverge because they measure different things. A distance metric looks at the gap between one synthetic point and one original point. The reconstruction attack does not look at a single point. It looks at where the synthetic points born from the same seed scatter and how, and works the seed's coordinates back out of the shape of that cloud. Every individual distance can be comfortably large while the cloud as a whole still points at the original. The metrics measure distance; the attack estimates a distribution.

The sentence the authors attach to their own metric table names the gap exactly: “Except for extremely low values for k, the hidden rate is mostly above 95% while linkage attacks based on distance only would mostly fail.” The metrics did not return wrong values. The attack they stand in for was weak. Post-hoc metrics are a ruler for resistance to distance-based attacks, and the attacks in this paper do not use distance. Which also means a safety verdict has a shelf life tied to the lifespan of an attack technique.

The character of the risk differs by method as well. SMOTE already looks bad on the post-hoc metrics: across twelve configurations its hidden rate never leaves the 35% to 50% band and its local cloaking is 0 in every one. One caveat belongs with that comparison. These metrics were built to be computed in Avatar's latent space, and for SMOTE, which has no latent space, the researchers state that they “slightly adapted the metrics for SMOTE by measuring them in the data space rather than in the latent space.” Even with the caveat the direction is clear. SMOTE's risk was visible from the start. Avatar's risk was the invisible kind. There were real grounds to be reassured by the metrics, and those grounds were wrong.

### 3.1. The Same Contrast in a Real Release

This contrast does not stay in the lab. The multiple sclerosis release described earlier published every metric value it measured, alongside the indicative targets recommended by the software editor, in a single table. Here it is. The recommendations are not a legal standard; they are reference lines offered by the maker of the tool.

| Criterion | Metric | Editor's recommendation | CLARITY release | ADVANCE release |
| --- | --- | --- | --- | --- |
| Singling out | Distance to the closest record | > 0.2 | 0.31 | 0.30 |
| Singling out | Distance to the closest ratio | > 0.3 | 0.81 | 0.60 |
| Linkability | Column direct match protection | > 50 | 84.8 | 90.9 |
| Linkability | Row direct match protection | > 90 | 100 | 100 |
| Inference | Median local cloaking | > 5 | 3 | 6 |
| Inference | Hidden rate, % | > 90 | 85.0 | 93.2 |
| Inference | Categorical hidden rate, % | > 90 | 98.4 | 98.0 |

Source: Demuth et al., J Med Internet Res 2025;27:e71297, Table 1 (CC BY 4.0). The two orange cells fell short of the software editor's recommendation.

The CLARITY release went out short of the recommended level on two of seven metrics. The two it missed happen to be the ones tied to membership inference. That study's own abstract does not hide it: “Protection against membership inference attacks was the hardest privacy metric to optimize.” The overall verdict was still adequate privacy, and that verdict became a legal classification as non-personal data, which became an open access release.

Who drew the pass mark is written down next to the table too. The study did not adopt the editor's recommendations as its bar. Its methods section states a bar of its own: “In this study, we considered a median LC of 2 and an HR above 80% to be satisfactory.” The editor's figures are above 5 and above 90 respectively. And since “all 2160 generations had an HR above 80%,” any of them would have passed on that bar. Given that the table labels the recommendations as indicative, this is no breach of a rule. What remains is that the operative pass mark for an anonymity decision was set by the party doing the releasing.

How that study defined the hidden rate lines up exactly with the axis of this report. The definition column reads “probability of erroneous distance-based matching,” and the body states that the hidden rate “measures the risk of membership inference attacks.” The scenario it assumes is spelled out: “an attacker with access to the synthetic dataset attempts to assess whether the patient was enrolled in the RCT and thus infer his or her diagnosis of MS.” The risk, in other words, had already been named precisely. What had been chosen to measure it was distance. The ensemble membership inference attack in the new paper does not rely on distance, and the failure probability of a distance-based attack cannot predict its success rate.

> [!callout]
> That team published every metric value and wrote down the limitations themselves. Their transparency is the only reason this contrast can be seen at all. The problem is not the judgement of one research group; it is the procedure that treats passing post-hoc metrics as grounds for a non-personal-data ruling.

Nor is this preprint the first to raise it. Since a 2022 USENIX Security paper took direct aim at anonymity claims for synthetic data, findings that similarity-based privacy metrics fail to track real risk have followed at IEEE S&P and ESORICS. Reports in 2025 added that datasets cleared by distance metrics alone remained vulnerable to membership inference, and that SMOTE structurally exposes minority-class records more than the rest. This paper is the latest entry in that line, and what is new is that it tests the whole seeded local combination family in one place.

## What an Anonymity Ruling Rests On

The paper's opening paragraph notes that “several data protection authorities across the world have considered the use of synthetic data as a possible way to share anonymized data,” and cites five: Singapore's Personal Data Protection Commission, the UK Information Commissioner's Office, the Information and Privacy Commissioner of Ontario, Spain's Agencia Española de Protección de Datos, and Korea's Personal Information Protection Commission. The practice being challenged here is not a vendor habit. It is a regulatory reading, and it is on the record in five jurisdictions.

Korea is the worked example here, because its version of the chain is written down step by step. The citation in the paper points to the Guidelines on the Generation and Use of Synthetic Data, published by the Commission in December 2024. Those guidelines say that fully synthetic data may be judged either anonymised information or pseudonymised information depending on the safety level it is generated at, and that it can be used as anonymised information once a generation methodology suited to its type and a set of quantitative and qualitative verification procedures have established that safety. Safety verification is a required step for the anonymity finding. And the moment data is anonymised information, Article 58-2 of the Personal Information Protection Act excludes it from the Act. One classification opens the door out of the statute.

So what does the classification run on? The guidelines set out three safety-verification metrics. Singling-out risk counts how often a synthetic record exactly matches an original record and averages the result. Linkability risk computes, via correct attribution probability, how likely an adversary who knows the quasi-identifiers is to guess the sensitive attribute; it applies only when both the quasi-identifiers and the sensitive attribute are categorical. Inference risk is a ratio: the distance from a synthetic record to its nearest original, divided by the distance from that original to its own nearest original. The illustrative thresholds given are 0.198 for singling-out risk and 0.452 for inference risk, with the note that linkability risk is best set at 0.7 or below.

Line those three up with the tool metrics from the previous section and a shared skeleton appears. Both rest on the three criteria the Article 29 Working Party set out in its 2014 opinion on anonymisation techniques: singling out, linkability and inference. The criteria are the same in both. What differs is the instrument chosen to measure them.

| Working Party 29 criterion | What the tool measures | What the Korean guidelines measure | What this paper ran |
| --- | --- | --- | --- |
| Singling out | Distance to the closest record; ratio of closest to second-closest | Singling-out risk. Exact-match rate, threshold 0.198 | Reconstruction attack |
| Linkability | Column and row direct match protection | Linkability risk. Correct attribution probability at 0.7 or below | Linkage attack |
| Inference | Local cloaking; hidden rate | Inference risk. Distance ratio, threshold 0.452 | Attribute inference attack |

************

Three parties implement the same criteria with different instruments. The linkability and inference pairings are stated by the paper itself; pairing singling out with reconstruction is an editorial placement, on the grounds that both deal with the same kind of risk. Membership inference maps to none of the three criteria.

The two middle columns are proxies that count distances and matches; the right-hand column is a set of attacks actually executed. When the paper concludes that post-hoc distance-based metrics are “poor indicators of the true privacy risks,” the target is the tool column. It never ran experiments on the three Korean metrics. But the instruments belong to the same family. The exact matching counted by singling-out risk is what direct match protection counts on the tool side, and inference risk is one distance divided by another, the same kind of ruler as the closest to second-closest ratio. That is the family an anonymity ruling stands on.

### 4.1. Where the Guidelines Put Membership Inference

It would be untrue to say the guidelines ignore membership inference. They know about the attack and they write it down. What differs is where they put it. It is absent from the quantitative metrics that decide the anonymity finding, and present in the section on use and safe management, under residual risk management planning. Where synthetic data is released to the general public, the guidelines call for a plan against residual risks including re-identification, with membership inference given as a footnoted example. A contingency, not a gate.

The formal-guarantee side is empty outright. The Korean word for differential, in the sense of differential privacy, does not appear once in the whole document. The English word “Differential” shows up in one title cited in an appendix footnote, but that paper is about a variant of the correct attribution probability metric, not about differential privacy. There is no route in the Korean framework to an anonymity finding on the strength of a formal guarantee; passing the post-hoc metrics is the operative basis.

The guidelines do not mandate the three metrics. The Q&A appendix explicitly leaves three doors open: an organisation's own anonymity review can suffice for anonymised use; metrics other than the ones presented may be used; and internal use within an institution does not require review board assessment. The document characterises itself as not intended to make the procedure mandatory or to standardise it. So the claim of this report is not that regulation enforces outdated metrics. It is that the working default overlaps with the family of metrics this paper refuted, and that default can change without amending a single guideline.

It is also worth separating this from recent legislative movement. The fully revised Guidelines on Pseudonymised Data Processing of March 2026 and the [amended Personal Information Protection Act taking effect on 11 September 2026](/report/korea-pipa-amendment-2026-ai-data/en/) both left the anonymity criteria for synthetic data untouched. Article 58-2 is unchanged. What this report is about is not what moved but what stayed still.

## Raise k or Add Differential Privacy

Two responses suggest themselves once the results are in. Raise the neighbourhood size k so that more real profiles go into every blend, or bolt on a formal guarantee such as differential privacy. The paper turns over both cards. Start with k.

Raising k does reduce the risk. The problem is that it reduces utility along with it, by an amount that varies by method. Below are models trained on synthetic data and evaluated against a real holdout test set for each of the three datasets. The first two columns are accuracies, so higher is better; the last is an error, so lower is better.

| Training data | Breast cancer accuracy | AIDS accuracy | Housing error |
| --- | --- | --- | --- |
| Original | 97.78% | 90.19% | 0.1950 |
| Avatar, k = 2 | 93.33% | 85.75% | 0.2337 |
| Avatar, k = 20 | 77.78% | 76.40% | 0.2742 |
| Simulant, k = 2 | 95.56% | 87.15% | 0.3272 |
| Simulant, k = 20 | 96.67% | 80.84% | 0.6228 |
| SMOTE, k = 2 | 97.78% | 89.25% | 0.2339 |
| SMOTE, k = 20 | 98.89% | 88.79% | 0.2352 |

Source: Lautraite et al., arXiv:2608.27037, Table 1 (CC BY 4.0). Trained with XGBoost and evaluated on a real holdout test set. Orange marks where raising k broke utility.

Avatar drops from 93.33% to 77.78% on the breast cancer data, and Simulant's housing error nearly doubles, from 0.3272 to 0.6228. Only SMOTE holds. At k = 20 it stays at original-data levels and even ticks up slightly on breast cancer. So the one method that survives a tightened k in practice is SMOTE, and SMOTE is precisely the method the paper identifies as the most vulnerable to both membership inference and linkage. The method that withstands the fix is the one that leaks the most.

Tightening does not make the risk disappear either. Raising the neighbourhood size does bring Avatar's linkage success rate down. Even at the extreme setting of k = 100, though, 1.07% remained on breast cancer, 3.53% on AIDS and 4.06% on housing. The absolute figures look small, but against random guessing they are still tens to hundreds of times the baseline. SMOTE is in worse shape: the paper's own description is that it remains highly vulnerable to linkage even as k grows. And whether data blended from 100 neighbours is still worth analysing is a question the table above has already answered.

### 5.1. Why the Formal Guarantee Will Not Attach

The second card is differential privacy. Of the three methods, Simulant has claimed that its approach satisfies ε-differential privacy, and the paper refutes that claim on three fronts. First, the seed selection and neighbour search steps touch the real data directly while the noise enters only at the combination step; for differential privacy to hold, every step of the pipeline has to sit inside the privacy analysis. Second, the Gaussian mechanism in differential privacy is additive noise, whereas Simulant uses multiplicative noise, which conceals nothing when the value being protected can be zero. Third, noise has to be calibrated to the sensitivity of the released quantity, and Simulant uses a fixed amount.

The seeded local combination pipeline and where noise enters it. Pebblous original illustration (reconstructed from §5's argument). Source: Lautraite et al., arXiv:2608.27037 (CC BY 4.0)

Which leaves the question of doing it properly. A differentially private variant of SMOTE does exist, and the paper accepts that its differential privacy property is sound. But that variant uses grid cell centres as seeds instead of real observations. The moment no real profile acts as a seed or as a neighbour, it is no longer seeded local combination. Using real neighbours was the defining feature of the family, so attaching a formal guarantee properly turned out to mean leaving the family.

The authors' own forecast is not encouraging. Designing a genuinely differentially private seeded method would mean adding noise at every step to account for the worst case, where a single observation is repeatedly selected as a neighbour. Their expectation is that not much utility would survive the exercise.

## One More Line on the Scorecard

As the previous section established, the guidelines do not mandate the three metrics; the document itself says other verification methods may be used. So what is needed now is not a demand to rewrite the rules but a proposal for what fills the blank. The tool side is already looking halfway in the same direction. The technical documentation of the company that commercialised Avatar describes its own metrics as simulations of attack scenarios and recommends evaluating a worst-case scenario alongside a realistic one. What this paper measured is the gap between that simulation and a real attack. Recording that gap on a scorecard takes four things.

- **Run attack-based verification alongside the metrics.** This is not an argument for discarding distance metrics. They are cheap and fast, and a bad value is grounds for rejection on its own. The point is not to read a good value as evidence of safety. Run membership inference, linkage and reconstruction for real, record the success rates next to the metrics, and when the two disagree, follow the attacks.
- **Write the threat model next to the number.** The same linkage attack shifts by multiples depending on whether the adversary holds the entire original dataset or a single profile. A success rate without its background-knowledge assumption is an uninterpretable number. What belongs on the scorecard is not a value but a value paired with its assumption. The same goes for the pass mark. As the multiple sclerosis release shows, the bar may be the tool maker's recommendation or a figure the releasing party set for itself. If nobody records which, all that survives is the sentence that it passed.
- **Disclose the generation parameters according to the breadth of release.** The Korean guidelines note in their residual risk section that the generative model and its parameters could be useful information for a model inversion attack, yet the safety-verification metrics never require the value of k to be reported. Only whether the thresholds were cleared. Meanwhile this paper derives its success rates from the premise that the adversary knows the algorithm and the hyperparameters. The two positions conflict, and neither is a general answer. A graded approach is workable: internal institutional use leans towards disclosure for verifiability, general public release leans towards withholding.
- **Set the bar on the assumption of irreversibility.** The wider the release, the higher the verification bar has to be beforehand, because a distributed dataset cannot be recalled. That is exactly the reasoning behind the authors' decision not to open source the reconstruction attack. Synthetic data already released cannot be pulled back, so releasing the attack tool alongside it would add only risk.

One thing runs through all four. The sentence left on the scorecard cannot stop at the distance metrics were cleared. It has to say which attacks were run, under which background-knowledge assumptions, and how much they were held off. The first is a record of a procedure; the second is a record of a test. Only the second can be reproduced.

> [!callout]
> For datasets already released, the options are limited. Recall is effectively impossible. Something can still be left behind, though. Record the generation method and parameters at the time of release, the metric values measured, and the threat model assumed, and years later, when a new attack appears, it becomes possible to recompute whether that dataset is exposed. Without the record, there is nothing to re-evaluate.

## Why Pebblous Pays Attention

The question DataClinic has been diagnosing so far is whether a model can be trained on this data. The axis this paper opens is whether this data can be released at all. The two are not front and back of a pipeline but two faces of the same point, because the better synthetic data imitates the original, the closer to the original it stays. The utility table in the paper puts a number on that exchange rate, and the multiple sclerosis release shows which cell the exchange was actually made in: membership inference protection was given up and utility taken. If AI-Ready Data means not only trainable but shareable, then proof of shareability has to be one of the things diagnosed.

Seen from data quality, one axis is missing. Accuracy, completeness and consistency on a scorecard all measure what the data contains. Re-identification resistance measures what the data leaks. The second is not a by-product of the first, and this paper is the proof: SMOTE, which preserved accuracy best of all three, leaked the most through both membership inference and linkage. A scorecard that reads only the accuracy metrics is structurally unable to see that inverse relationship.

For customers and partners the practical consequences run in two directions. Anyone receiving synthetic data now has questions to put to the vendor. Which generation method and which neighbourhood size? Which metrics were used for safety verification, and did the values clear the tool maker's recommendation? Was attack-based verification performed? Which adversary was assumed? The fact that the multiple sclerosis study published every metric value in a table shows that these questions can actually be answered. For anyone releasing synthetic data, the weight of the defence has shifted. “We followed the procedure in the guidelines” and “we tested it against attacks” do not carry the same weight once something goes wrong.

In short, there is a place for a data quality company at the point where the sentence changes from “it is synthetic, so it is not personal data” to “it was tested, so it can be released.” Not as compliance consulting but as instrumentation. The work is moving the grounds for an anonymity finding from procedure followed to reproducible attack testing, and since the Korean guidelines already leave room for other verification methodologies, the proposal fills a blank rather than colliding with the rules. Where our piece on [membership inference against medical AI](/blog/medical-ai-membership-inference-privacy/en/) dealt with auditability on the model side, this one is the second instalment, on the data side.

## References

### Academic

- 1.Lautraite, H.; Allard, T.; Charest, A.-S.; Rajotte, J.-F.; Gambs, S. "[Neighborhood Watch: Privacy Risks in Seeded Local Combination Synthetic Data](https://arxiv.org/abs/2608.27037)." arXiv:2608.27037v1 [cs.CR], 27 Aug 2026, CC BY 4.0. Primary source for this report; every figure in sections 2, 3 and 5
- 2.Demuth, S. et al. "[Privacy-by-Design Approach to Generate Two Virtual Clinical Trials for Multiple Sclerosis and Release Them as Open Datasets](https://doi.org/10.2196/71297)." J Med Internet Res 2025;27:e71297 (PMC12488035, CC BY 4.0). Primary source for the release described in 1.1 and the metric table in 3.1; full text read via Europe PMC
- 3.Guillaudeux, M. et al. "Patient-centric synthetic data generation, no reason to risk re-identification in biomedical data analysis." npj Digital Medicine 2023;6:37. The original Avatar paper
- 4.Beigi, M.; Shafquat, A.; Mezey, J.; Aptekar, J. "Simulants: Synthetic clinical trial data via subject-level privacy-preserving synthesis." AMIA Annu Symp Proc 2022:231. The original Simulant paper. The wording of its ε-differential privacy claim was not obtained directly, so 5.1 quotes only the refutation
- 5.Chawla, N. V.; Bowyer, K. W.; Hall, L. O.; Kegelmeyer, W. P. "SMOTE: Synthetic Minority Over-sampling Technique." JAIR 2002;16:321–357.
- 6.Stadler, T.; Oprisanu, B.; Troncoso, C. "Synthetic Data — Anonymisation Groundhog Day." USENIX Security 2022, pp. 1451–1468. Starting point of the line of work traced in 3.1
- 7.Ganev, G.; De Cristofaro, E. "[The Inadequacy of Similarity-based Privacy Metrics](https://arxiv.org/abs/2312.05114)." IEEE S&P 2025, pp. 4007–4025. Verified at abstract level; cited only to trace the line of work
- 8.Yao, Z.; Krčo, N.; Ganev, G.; de Montjoye, Y.-A. "[The DCR Delusion: Measuring the Privacy Risk of Synthetic Data](https://arxiv.org/abs/2505.01524)." ESORICS 2025, pp. 469–487. Verified at abstract level
- 9.Ganev, G. et al. "[SMOTE and Mirrors: Exposing Privacy Leakage from Synthetic Minority Oversampling](https://arxiv.org/abs/2510.15083)." arXiv:2510.15083, 2025. Source of ReconSMOTE. Verified at abstract level, so no individual figures are quoted from it
- 10.Lebrun, T. et al. "Synthetic data: Generate avatar data on demand." WISE 2024, pp. 193–203. The baseline attack this paper set out to improve on
- 11.Carlini, N. et al. "Membership inference attacks from first principles." IEEE S&P 2022. Source of the practice of scoring attacks in the low false positive regime, used in 2.1

### Policy and Regulation

- 12.Personal Information Protection Commission (Korea). "Guidelines on the Generation and Use of Synthetic Data", December 2024, publication no. 11-1790377-100001-01. [pipc.go.kr](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=10201). Basis for all of section 4. Metric definitions in chapter 3 and appendix 2, thresholds in appendix 4, residual risk management planning in chapter 3 section 5, Q&A in appendix 8
- 13.Article 29 Data Protection Working Party. "Opinion 05/2014 on Anonymisation Techniques." European Commission, 2014. Source of the singling out, linkability and inference criteria that both the paper and the Korean guidelines build on
- 14.Personal Information Protection Act (Korea), Article 58-2 (exclusion from application). Inserted 4 Feb 2020; unchanged by the amendment effective 11 Sep 2026
- 15.Personal Information Protection Commission (Korea). "Guidelines on Pseudonymised Data Processing", fully revised March 2026, publication no. 11-1790365-000029-01. Cited to make clear that it is a separate document from the subject of this report
- 16.Octopize. "[Privacy metrics — Principles](https://docs.octopize.io/docs/principles/metrics/privacy/)." The tool side describing itself, quoted in section 6: its metrics are framed as simulations of attack scenarios, with worst-case and realistic scenarios recommended side by side
- 17.Personal Data Protection Commission Singapore. "Proposed Guide on Synthetic Data Generation." / Information Commissioner's Office (UK). "Privacy-enhancing technologies (PETs)," 2023. / Information and Privacy Commissioner of Ontario. "De-identification Guidelines for Structured Data," 2025. / Agencia Española de Protección de Datos. "Synthetic data and data protection," 2023. Four of the five authorities named in the paper's opening, Korea excepted. Verified as bibliographic entries only

### Related Pebblous Work

- 18.Pebblous. "[Medical AI Remembered One Patient Almost Perfectly](/blog/medical-ai-membership-inference-privacy/en/)." Membership inference against a trained model. This report looks at the same attack from the data side
- 19.Pebblous. "[The Liability for a Data Breach Just Moved to the Boardroom](/report/korea-pipa-amendment-2026-ai-data/en/)." Background on the amendment effective 11 Sep 2026, which left the anonymity criteria untouched
- 20.Pebblous. "[How to Put a Price Tag on Synthetic Data](/blog/synthetic-data-quality-contribution/en/)." Synthetic data along the utility axis. This report looks at the same data along the leakage axis
- 21.Pebblous. "[Measuring the Quality of the Synthetic Data That Grades AI Agents](/blog/synae-synthetic-benchmark-quality/en/)." · "[Training AI on Synthetic Data Polarizes Its Skills](/blog/synthetic-data-competence-polarization/en/)." Neighbouring pieces in the synthetic data quality series
