---
title: UCI Heart Disease Data Labels Chest Pain Backwards
subtitle: At three of four sites, 93-96% of patients marked asymptomatic show all three signs of typical angina — arXiv analysis
date: 2026-11-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# UCI Heart Disease Data Labels Chest Pain Backwards

_At three of four sites, 93-96% of patients marked asymptomatic show all three signs of typical angina — arXiv analysis_

## Executive Summary

> [!callout]
> An analysis posted to arXiv says the chest pain codes in the UCI Heart Disease data, a fixture of machine learning textbooks and papers for decades, are numbered the wrong way round against their own documentation. The documentation calls code 1 typical angina and code 4 asymptomatic, and the patient records point the other way. The correct name for a stored code k, the analysis concludes, is the name the documentation prints at position 5−k.

> The evidence is the patients' own symptom records. The raw files from Budapest, Switzerland and Long Beach carry the detail of the pain alongside the code, and among the patients marked 'asymptomatic (4)', who should have had no pain at all under the documented reading, 93 to 96 percent had all three marks of typical angina. Those three are pain behind the breastbone, pain that worsens with exertion, and pain that eases with rest. Cleveland, whose file holds no symptom detail, was checked a different way, by matching the table and the regression coefficients of the original 1986 clinical study.

> Sections 1 through 5 follow what the paper states and what primary sources confirm. Section 6, which treats a data dictionary as something to be quality-checked, is this article's own reading.

### Key Numbers

The first two show the grounds for calling the codes reversed and what follows from it. The last two show how far the error spread.

Source: [Typical Angina, Reversed: A Long-Standing Documentation Error in the UCI Heart Disease Data](https://arxiv.org/abs/2611.33248) (arXiv 2611.33248, submitted November 24, 2026).

<!-- stat-card -->
**93–96%** — Marked 'asymptomatic' yet carrying every symptom — Budapest 118/123, Switzerland 91/98, Long Beach 126/131

<!-- stat-card -->
**25 of 32** — Interpretation papers that named a direction and missed — 78%, 95% confidence interval 61–89%. None of the 124 read caught it

<!-- stat-card -->
**0.458 → 0.789** — AUC once the labels are corrected — Qwen2.5-7B given age, sex and chest pain only

<!-- stat-card -->
**~400,000** — Downloads of copies carrying the wrong category names — Two Kaggle copies combined, 290,000 plus 112,000

## All Four Codes Are Swapped

The UCI Heart Disease data is a public dataset posted in 1988 to the machine learning repository at the University of California, Irvine. It gathers patient records from four sites: the Cleveland Clinic, the Hungarian Institute of Cardiology in Budapest, Basel in Switzerland, and the Long Beach veterans hospital in the United States. Teaching material on heart disease prediction reaches for it almost by default, and the repository page alone has been viewed more than 1.26 million times. One of its thirteen variables is cp, which records the type of chest pain as a number from 1 to 4.

The analysis posted to arXiv on November 24 says those numbers mean the opposite of what the documentation says. It was written by Tejas Tovinkere Pattabhi of the University of the Cumberlands, working alone, and a note at the end states the work was carried out independently of his employer. The verification code and the hand-coded paper list are on GitHub. The rule is one line. The clinically correct name for a stored code k is the name the documentation prints at position 5−k. Codes 1 and 4 trade places, and so do 2 and 3.

| Stored code | Name in the documentation | Corrected name |
| --- | --- | --- |
| 1 | Typical angina | Asymptomatic |
| 2 | Atypical angina | Non-anginal pain |
| 3 | Non-anginal pain | Atypical angina |
| 4 | Asymptomatic | Typical angina |

▲ The correct name for a stored code k is the documentation's 5−k. Source: arXiv 2611.33248

Typical angina is the most characteristic pain that appears when the vessels feeding the heart narrow. It sits behind the breastbone, it worsens with exertion, and it eases with rest. All three marks make it typical, two make it atypical, and one or none makes it non-anginal pain. Asymptomatic means there is no chest pain at all. So swapping 1 and 4 means the group in the sharpest pain and the group in no pain change places.

Derived datasets inherited the same codes. Statlog (Heart), which keeps 270 of the Cleveland patients, is one of them. The numbering is the same, so the error came along with it. Copies renumbered from 0 to 3 cannot take the rule directly, and the first step there is to find out which transformation was applied.

## Where the Evidence Comes From

The evidence runs along two lines, and which line was available depended on the site. The 93 to 96 percent the abstract leads with comes from three of the four sites, not all of them.

### 2.1. At three sites, the symptom records give the answer directly

The raw files from Budapest, Switzerland and Long Beach carry more than the chest pain type code. They hold separate fields for the detail of the pain: whether it sits behind the breastbone, whether exertion makes it worse, whether rest eases it. Under the documented reading, code 4 marks a patient with no pain, so all three fields should be empty. They were the opposite.

| Site | 'Asymptomatic (4)' patients | Patients with all three marks | Share |
| --- | --- | --- | --- |
| Budapest | 123 | 118 | 96% |
| Switzerland | 98 | 91 | 93% |
| Long Beach | 131 | 126 | 96% |
| Cleveland | No chest pain detail in the raw file, so this method cannot be applied |  |  |

▲ The three marks are pain behind the breastbone, pain that worsens with exertion, and pain that eases with rest. Source: calculated from Table 2 of arXiv 2611.33248

### 2.2. Cleveland was matched against the original 1986 study

The Cleveland file, the most used of the four, holds no symptom detail. So the analysis took hold of something else, the original clinical study that Detrano and colleagues published in Circulation in 1986 on the same patient group. Matching the numbers in that paper against the data file settles which reading is right.

- •The patient counts by number of blocked vessels (55, 36, 35 and 13) match exactly between the file and the paper. That confirms it is the same patient group
- •Of the sixteen cells in the chest pain distribution table split by sex and by disease status, fifteen match the paper under the corrected reading. Read as the documentation says, not one cell matches
- •The regression coefficient of −1.10 for chest pain and the intercept of −2.29 that the paper reports reproduce only when 5−cp is substituted. Feed in the stored value as it is and the coefficient comes out at +1.10 and the intercept at −7.77

This article did not open the 1986 Circulation paper itself. The numbers above are carried over from what the arXiv analysis cites.

> [!callout]
> There is also a clue to when the reading hardened. In 1990 someone rewrote the Cleveland file's codes as words in a file called cleve.mod, and the documentation's labels are already baked into it. From the moment the value read 'typical angina' in letters rather than as a number, the reversed interpretation had moved inside the data and set.

## The Scores Hold, the Interpretation Flips

It may sound strange that an error like this survived in data used for nearly forty years. The reason is simple. The error barely touches how well a model predicts.

### 3.1. Conventional models never read the names

Logistic regression gave identical predictions whether chest pain went in as an ordinal variable or as one column per category. The AUC that keeps appearing in this article is the share of the time that, picking two patients at random, the model gives the higher score to the one who has the disease. A 1 means always right and a 0.5 is a coin flip. Cross-validated AUC came out at 0.903 and 0.911. Random forest and gradient boosting differed by no more than 0.002 in AUC. Individual predicted probabilities did move by as much as 0.07 or 0.15, but that came from the order of the category columns changing the random numbers used in the splits, not from the signal changing.

To a model, 1, 2, 3 and 4 are just four different slots. Only people read the names on those slots. That is why thousands of benchmark runs over this data never raised a flag in the numbers. What changed is the name tag attached to the coefficient. In the logistic regression with one column per category, the largest positive coefficient of +0.48 sits in the slot marked 'asymptomatic' and the negative coefficient of −0.25 sits in the slot marked 'typical angina'. That is where the conclusion comes from that patients with no pain are at higher risk.

### 3.2. Models that read text are taken in

Things differ once the names reach the model as words rather than as numbers. The analysis turned the records of 303 Cleveland patients into sentences, fed them to three small language models quantized to four bits, and asked in one shot whether the patient has heart disease. One arm got the documented labels, the other the corrected ones. There were two prompts, one giving all thirteen variables and one giving age, sex and chest pain only.

Scores came from weighing the probability of 'yes' against 'no' at the model's first output token. No fine-tuning was involved, only the question, and the whole thing runs on the single graphics card Kaggle hands out for free. The chart below shows the second of the two prompts, the one giving age, sex and chest pain only. All three models have a longer bar with the corrected labels than with the documented ones, and the shortest bar sits to the left of the coin-flip line.
