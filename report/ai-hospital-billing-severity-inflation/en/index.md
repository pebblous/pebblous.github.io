---
title: The analysis blaming AI for higher hospital bills never measured AI
subtitle: Hospitals adding severe diagnoses fastest used fewer ICU days and fewer transfusions — a Blue Cross Blue Shield Association white paper on inpatient claims from 2023 to 2025
date: 2026-09-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The analysis blaming AI for higher hospital bills never measured AI

_Hospitals adding severe diagnoses fastest used fewer ICU days and fewer transfusions — a Blue Cross Blue Shield Association white paper on inpatient claims from 2023 to 2025_

## Executive Summary

> [!callout]
> This article asks whether data can settle a disagreement when both sides are reading the same medical record. On 24 September 2026 the largest federation of health insurers in the United States published a three-page white paper. Across inpatient claims from the start of 2023 to the end of 2025, the share of stays billed as complex rose from roughly 37% to about 40%, and that shift cost the federation an estimated $942 million over two years. The scene it offers as evidence is well chosen. Looking at 2025 bowel surgery claims, the quarter of hospitals adding complex codes fastest used the ICU less often and transfused less often than everyone else. Same operation, but the record got sicker.

> AI itself, though, is missing from the analysis. What the white paper observed was claims data, and which hospital installed which tool is not in claims data. The paper's own verbs stay conditional. The rise coincides with adoption, technologies appear to be contributing, systematic use may be linked to the dollars. It was the headlines that hardened the conditional into cause. The irony is that studies comparing the same organization before and after a tool went in do exist. One reports documented diagnoses per encounter rising from 3.0 to 4.1 after an ambient documentation tool arrived. In this dispute the document with the biggest number and the document with the firmest identification are two different documents, and the press quoted the first.

> A verdict on a case shaped like this one has already been reached once. In Medicare Advantage, coding intensity was finally quantified after twenty years of argument, and the resulting overpayment is now split into a coding-practice share and a favorable-selection share. What narrowed that gap was neither a lawsuit nor an audit. It was a rewrite of the payment rule itself. This article is not a digest of the insurer's paper and not a brief for the hospitals. The six sections below work through what it takes to separate signal from artifact inside a single record.

<!-- stat-card -->
**55,158** — Excess complex cases above the 2023 baseline — At $11,800 per case, $653 million in all

<!-- stat-card -->
**6.5%** — Share of the headline figure covered by the one closely studied family — $60.8 million in bowel procedures divided by $942 million

<!-- stat-card -->
**$4–5 a year** — The increment divided across the membership — Computed on a membership of 100 to 115 million. The total is large; what each member carries is not

<!-- stat-card -->
**0** — AI-use variables the white paper observed — No sample size, no confidence interval, no estimating equation in the three pages

## How three points become $942 million

On 24 September 2026 the Blue Cross Blue Shield Association, the largest federation of health insurers in the United States, released a white paper. It runs three pages, carries four authors and was not peer reviewed. The association is a federation of locally independent insurers, and even its own materials put the number of member companies at anywhere from 31 to 34. Total membership is given as 100 million in some places and 115 million in others. This article therefore avoids a precise figure and says only about 100 million people, one in three Americans. The paper calls that whole membership the Blue System.

Before the paper itself, the pricing of an American hospital stay needs a word. The amount a hospital collects for admitting a patient is not the sum of itemized services. It depends on which diagnosis-based group the stay falls into. For the same operation, the group is decided by which diagnoses were recorded alongside it. No complication or comorbidity puts the stay in the lowest tier, one such condition moves it up a tier, and a condition classified as major moves it up again. In this system a diagnosis code is the name of an illness and a price tag at once.

What the paper measured is how often that price tag gets attached. It pooled Blue System inpatient claims from the first quarter of 2023 through the fourth quarter of 2025 and computed, quarter by quarter, the share of stays placed in a higher tier by a complication or comorbidity. That share, the paper says, rose from roughly 37% to about 40%. The paper hedges both ends with "roughly," so neither number should be carried over as exact.

It helps to see how those three points actually moved. The first page carries a quarterly line chart, and reading the twelve labeled values gives a different picture from a straight line drawn between the endpoints. The share fell to 36.9% in the second and third quarters of 2023, returned to the 37% range in the first half of 2024, peaked at 40.1% in the first quarter of 2025 and then came back down into the 38s. It did not climb like a staircase. It oscillated across a band of a little over three points while trending up.

Join the 37.5% start to the 39.8% end and the line looks like a gentle rise, but the middle swings between 36.9% and 40.1%. That is why the paper writes roughly 37% to about 40%.

The paper converts that rise into money. Against a 2023 baseline, 55,158 stays were classified into a higher tier than the baseline rate implies, and at an average of $11,800 each they generated $653 million in extra reimbursement. That sum, the paper says, accounts for 70% of the whole increase in inpatient coding intensity over the period, and for the Blue System as a whole the two-year increment comes to roughly $942 million.

The large figures are internally consistent. Divide $653 million by $942 million and the result is 69.3%, less than a point away from the 70% written in the text. Where the conclusion says "over $650 million," it is pointing at the $653 million, not at the $942 million. The two sit on the same page, which makes them easy to conflate.

The part that does not add up sits outside those figures. Turning three percentage points into 55,158 cases requires a denominator of total admissions, and the paper never discloses it. How many hospitals entered the sample, and how many claims in total, appears nowhere in the three pages. Back out 55,158 at 3% and you get about 1,838,600 claims, but whether that refers to the whole study period or to one point in it cannot be determined from the paper. Annualize it and divide by membership and the implied admission rate comes out below the commercially insured rates usually reported. So the reconstruction can be called neither right nor wrong, and it stays here as **consistency not verifiable**. This is not nitpicking. It sits at the center of the argument: the paper offers a figure near a billion dollars without offering the equation that produced it.

### 1.1. How one lab value moves a claim up a tier

The size of the difference a single diagnosis makes is visible in the payment schedule. Below are the three tiers of major bowel procedures, converted using federal Medicare weights for fiscal 2026. Commercial insurers negotiate their own rates hospital by hospital and those contracts are not public, so these are not amounts the Blue System actually paid. Read the figure only as an illustration of the structure and the order of magnitude by which one or two codes push a case upward.

From the lowest tier to the highest the gap is about $19,679. Same operation, and one or two diagnosis codes nearly triple the payment.

Which codes actually grew, then. The paper names the ten diagnoses that rose most in bowel surgery claims between 2023 and 2025. What it draws attention to in that list is not any individual code but what they share. Many can be derived from a single laboratory value, which makes them a poor fit for a human reading a chart and an excellent fit for a machine sweeping numbers.

| Diagnosis | 2023 | 2025 | Case growth |
| --- | --- | --- | --- |
| Unspecified acidosis | 3.3% | 4.4% | +395 |
| Other intestinal obstruction | 1.3% | 2.1% | +269 |
| Intra-abdominal abscess | 5.4% | 6.2% | +257 |
| Acute posthemorrhagic anemia | 9.6% | 10.4% | +243 |
| Moderate protein-calorie malnutrition | 2.5% | 3.0% | +191 |
| Other postprocedural complications | 5.7% | 6.2% | +173 |
| Severe protein-calorie malnutrition | 3.9% | 4.4% | +156 |
| Other partial intestinal obstruction | 0.6% | 1.0% | +155 |
| Hypo-osmolality and hyponatremia | 6.5% | 7.0% | +155 |
| Diverticulosis of large intestine | 1.4% | 1.8% | +150 |

Share of bowel surgery claims carrying each diagnosis, and the growth in case counts. Acute posthemorrhagic anemia is the most prevalent in absolute terms, but the fastest riser in relative terms is other partial intestinal obstruction at 70%. Naming anemia alone as the example erases the other nine rows.

### 1.2. Put a denominator under the $942 million

On its own, $942 million is a number whose size cannot be judged, because it has no denominator. The paper uses it bare and so does the coverage. So here are three denominators. All of them are approximations drawn from public statistics, each carrying two layers of assumption, and none of them is a figure the association published.

- Divided across members, it is $4 to $5 a year. Halve the two-year figure, divide by membership, and a base of 100 million gives $4.70 while 115 million gives $4.10.
- Set against two years of Blue System commercial inpatient spending, it is estimated to be under 1%. That comes from taking national inpatient costs, carving out the private-insurance portion and assigning a third of it to Blue plans, which is a rough approximation.
- Set against total US hospital care spending, it is on the order of 0.03%. That denominator includes outpatient care, though, so the true share has to be larger than this.

All three point the same way. As a total it is $942 million, and spread across members it is about the price of a coffee a year. Set beside the same year's rise in employer-sponsored premiums of 9%, and a much steeper rise in the individual market, this component is small. The main drivers named for those increases are policy variables such as expiring subsidies, not coding.

The association has attached a denominator itself, once. Its March issue brief found that across a subset of plans covering about 62 million members, inpatient cost per member rose 9% from 2023 to 2024, and it estimated that roughly 20% of that increase was attributable to rising coding intensity. Twenty percent of 9% is 1.8 percentage points. The publisher, in other words, treats this component not as the chief cause of inpatient cost growth but as one share out of five. How that 20% was derived is not stated in the brief either. The question this article puts to the September paper applies just as well to the March one.

> [!callout]
> So this article does not argue about the size of the sum. Nor does a small per-member figure make the problem go away. What makes the case important is not the total but the method of adjudication. Two parties look at the same medical record, one says the documentation got more accurate and the other says the bill got inflated, and each is currently reaching that verdict with a ruler of its own making. The sections that follow examine those rulers one at a time.

## A diagnosis that arrives without treatment

That diagnoses increased settles nothing by itself. The patients may genuinely have been sicker, or hospitals may simply have begun recording conditions they used to miss. The white paper builds a device to get around that dead end. If a diagnosis is real, it argues, some treatment should follow it, so the record can be checked against the acts.

The design is a clever one, because it belongs to the same family as what data quality work calls a consistency rule. If the value in one field is true, another field must carry a trace of it, and where the trace is missing the value comes under suspicion. The paper plants that rule in a clinical setting. Severe anemia should be followed by a transfusion record, and a complication at intensive-care level should be followed by ICU use. The old limitation that claims data cannot tell you a patient's condition gets sidestepped by playing two layers of the claims data against each other.

The place the paper applies that rule is one year of bowel surgery claims, 2025. It groups the quarter of hospitals with the fastest coding growth against everyone else and lays seven metrics side by side across two tables. The table below merges them.

| Metric | Top 25% by coding growth | Other hospitals |
| --- | --- | --- |
| Complex classification rate | 75.6% | 65.0% |
| ICU utilization | 11.5% | 13.2% |
| Transfusion rate | 3.6% | 3.9% |
| Reoperation rate | 1.7% | 1.5% |
| Median length of stay | 4.0 days | 4.0 days |
| Anemia diagnosis rate | 13.7% | 9.9% |
| Transfusion rate among anemia claims | 16.9% | 19.3% |

One year, 2025, major bowel procedure claims. This is a comparison between hospitals in the same year, not a change over time. The paper's prose rounds the complex share to 76%, while the table on the same page reads 75.6%.

The heaviest rows are the last two. Hospitals coding faster found anemia far more often, 13.7% against 9.9%, a rate 38% higher. Yet among patients given that diagnosis, the share who actually received a transfusion is lower at those same hospitals, 16.9% against 19.3%. The side finding more anemia treated less of it, and that is what the paper is aiming at. It opens the reading that the newly captured anemias were clinically milder, or never needed treating at all.

The same table does hold one row pointing the other way. Reoperation runs at 1.7% in the top quartile against 1.5% elsewhere, which cuts against the hypothesis that less treatment was delivered. The paper itself wrote with that in view. Its own wording is that these hospitals have "similar or lower intensity of services," and drop the "similar or" and the paper's table refutes the paper's sentence. This article keeps the qualifier not for the sake of balance but because this case demands of both sides that the values in the table be left alone.

### 2.1. How much ground that test actually covers

Three limits belong beside the comparison. First, it is not a time series. The period in the table header is the single year 2025, and the comparison runs between two groups of hospitals within it. A sentence like "transfusions did not rise over time" is therefore wrong. The accurate statement is that hospitals which diagnosed more treated less. Second, the population is narrow. The table comes from one family of procedures, major bowel surgery. Third, that family occupies a smaller place in the overall picture than one might assume.

The evidence comparing diagnoses against treatments was produced inside less than a tenth of the total dollars. For the remaining 90% and more, no equivalent comparison is offered.

That gap matters because the width of the claim and the width of the evidence are not the same. The $942 million is an estimate about inpatient care in general, while the evidence that diagnoses and treatments diverge came from one family. Carry a conclusion confirmed in a subset over to the whole and it stops being an observation and becomes an assumption. The criterion by which this family was selected is also missing from the three pages.

### 2.2. Not every code moved to one side

The paper also splits those ten growing bowel surgery diagnoses across the two hospital groups. This figure is both the strongest physical evidence for the insurer's case and its most candid moment. Acute posthemorrhagic anemia rose 5.64 percentage points at top-quartile hospitals while falling 0.12 points everywhere else, which makes it effectively a one-sided event. At the bottom of the list, though, diverticulosis differs between the groups by only 0.04 points, and other partial intestinal obstruction just above it by 0.14.

Of the ten, about half show a clear gap between the hospital groups. Generalize to "every code piled up at the top-quartile hospitals" and the lower half of this figure disappears.

### 2.3. The association's earlier analysis does have a time series

Where the September paper has no time series, an analysis the same association published six months earlier partly fills the gap. The issue brief of March 2026 looked at inpatient claims from the second quarter of 2022 through the first quarter of 2025 across a subset of member companies covering about 62 million people, and narrowed its focus to maternity admissions and one code, acute posthemorrhagic anemia.

The picture there is sharper than the September one. Among hospitals whose postpartum anemia coding grew by more than 30%, the share of maternity admissions carrying that diagnosis went from 4.0% to 12.3%, a tripling. The transfusion rate in the same group moved from 0.8% to 1.2% over the same period, a rise of 0.4 points. At hospitals whose growth was 30% or less, the diagnosis share barely moved, 7.9% to 8.2%. This is change over time inside one group rather than a comparison between groups, which leaves less room for interpretation than the September cross-section.

One boundary belongs on this comparison too. What separated the two groups was the growth rate of that very diagnosis. So the tripling of the diagnosis share in the high-growth group is partly a consequence of how the group was defined. It is the treatment, then, that makes the figure informative, and not the diagnosis. What survives is the contrast between a diagnosis tripling and a transfusion rate moving 0.4 points. The March brief also states which hospitals entered the sample, namely those with more than 250 maternity admissions, where the September paper gives no such criterion at all.

This analysis also contains one reference point from outside the claims. A member company audited maternity cases at the hospital system with the most pronounced coding growth in its region, and found that fewer than 20% of the stays coded for postpartum anemia met the clinical criteria. Because someone opened the charts, that single sentence carries more weight than any comparison built inside claims data. The brief records that the reviewer working on the audit was an obstetrician employed by that plan, and it does not record the sample size or the adjudication procedure. As one health system's self-audit it cannot stand alone as a verdict on the whole. Across the maternity admission family, the March analysis put the incremental cost over its study period at $22 million.

## AI is not a variable in that analysis

That is what the white paper actually showed. Higher-tier classifications rose in the claims, the rise was concentrated in some hospitals, and treatment metrics at those hospitals ran mostly lower. None of that is why the story became news. The headlines said AI is driving up the cost of care. Trace where that sentence came from, and in the places the paper itself writes, it is not that sentence yet.

AI appears in three places in the paper, and all three are conditional. The executive summary writes that "the rise **coincides with** hospitals adopting new AI-assisted billing software that scans records and lab data for anything that can be coded." The section on diagnosis drivers writes that those technologies "**appear to be contributing** to this coding growth." The conclusion writes that systematic use of AI-enabled revenue cycle tools "**may be linked to** over $650 million in excess hospital reimbursement." Not once does a declarative verb appear.

The reason for the hedging is plain. The paper did not observe whether AI was in use. It observed claims data, and which hospital adopted which tool is not in that data. So the paper contains no comparison between hospitals using AI and hospitals not using it. The top quartile in the comparison table is not a group defined by adoption but a group defined by coding growth. The groups were split on a variable downstream of the outcome rather than on the cause under suspicion, and a design like that cannot identify a cause. The conditional verbs are not modesty. They are an accurate record of what the data can support.

That limit blurs a little on the way into the press release. In the announcement the association issued the same day, Luke Chalker, its senior vice president of product and data science, put it this way.

"If patients are truly sicker, we'd expect to see more treatment. For example, we're seeing significantly more anemia diagnoses at these hospitals without a corresponding increase in transfusions. The disconnect between diagnoses and treatment suggests that AI is identifying more billable conditions, not sicker patients."

The first two sentences are exactly what the paper showed. In the last one the subject changes. What the data showed is a gap between diagnosis and treatment, and it is interpretation rather than data that puts the name AI on that gap. "Suggests" is still a careful verb, but the moment AI occupies the subject position the sentence takes the shape of a cause.

The same person speaks in a different register to a technology outlet days later. Asked about hospitals and insurers each expanding automation, he declined to call it a battle and said instead, "It's not a war. It's a completely one-sided blood bath," with insurers on the losing side. That the measured release and that sentence come from one person shows how the same material gets spoken differently depending on where it is being said. The article, it should be added, carries no response from the hospital side.

### 3.1. The release six months earlier went further

What happens when a conditional meets a large number is preserved in the March release. The March issue brief discussed above captured $22 million in the maternity family, and the announcement of that brief carries a much larger figure: the cost impact reaches approximately $2.3 billion, of which researchers estimate roughly $663 million in inpatient spending and at least $1.67 billion in outpatient spending may be tied to more aggressive, AI-enabled coding practices nationwide.

The conditional survives here too. The trouble lies elsewhere. Those figures come from projecting rates observed in a 62-million-member sample onto the entire country, and that projection is written out neither in the brief nor in the release. A $22 million figure tallied directly in the sample and a $2.3 billion figure scaled to the nation sit side by side in the same family of documents. The September case differs on this point. The paper and the release do not contradict each other, and the September release adds no number that is absent from the paper.

One easily confused pair is worth flagging. The inpatient estimate in the March analysis and the secondary-diagnosis share in the September paper look like nearly the same number, but they are different values. The first is a national projection and the second is a sum tallied within a sample, and the study periods and the care they cover differ as well. Read as one number they look like a fact confirmed twice, when in fact they are two calculations built by different methods.

### 3.2. Three adoption figures count three different things

The other pillar holding up the AI-as-cause account is adoption. Three numbers circulate in the coverage, and they differ in both the unit counted and the thing counted. Listed in one sentence they read as a single fact confirmed three times, which they are not.

| Figure | What was counted | Sample and date |
| --- | --- | --- |
| More than 60% | Share of hospital systems using AI that scans lab results and electronic records to identify secondary diagnoses | Association's own survey, sample size and method undisclosed. 2026 |
| 46% | Share of hospitals and health systems using AI in billing, coding and claims work | Joint survey by a financial management association and a vendor. 2023 |
| 71% and 61% | The first is hospitals using predictive AI of any kind, the second is those using it in billing processes | Census survey by the federal health IT office. 2,253 hospitals, 51% response rate. 2024 |

****************

The most quoted figure, more than 60%, counts hospital systems rather than hospitals, meaning corporate entities that bundle several facilities. And that figure is absent from the three pages of the white paper, appearing only in the release issued the same day.

The third is the most transparent of the three about its method. The federal survey reports its sample size and response rate, and separates predictive AI in general from billing use. In that source, the share using AI in billing processes rose from 36% to 61% in a single year. That adoption is spreading fast is a point on which several sources agree. None of them, though, joins the timing and the identity of adopters to the claims data. The gap in the white paper is not filled there.

### 3.3. Someone did observe adoption itself

Here is something this research turned up along the way. The firmer evidence for the proposition that AI adoption moves coding sits not in an insurer white paper but in the medical literature. A policy brief published in npj Digital Medicine in December 2025 is that evidence, and its title calls the phenomenon a coding arms race.

The brief assembles cases observed before and after adoption. At one health system that installed a tool which listens to the clinical encounter and drafts the note, a physician workload measure rose 11% and documented risk-adjusted diagnoses per encounter rose 14%. At an oncology practice, documented diagnoses per encounter went from 3.0 to 4.1. At another system, the share of claims billed at higher visit levels rose.

![A clinician wearing a stethoscope enters notes at a clinic computer using a mouse and keyboard](./image/img-01-doctor-computer-workstation.jpg)
*▲ Entering notes at the point of care — the step these tools automate | Source: [Shixart1985 via Wikimedia Commons (CC BY 2.0)](https://commons.wikimedia.org/wiki/File:Doctor_working_at_a_desk_using_a_computer_mouse_and_keyboard_in_a_medical_office_setting.jpg)*

> [!callout]
> The difference lies in what was looked at. The white paper looked at a correlation and these cases looked at an intervention. Because they compare the same organization before and after the tool went in, at minimum the data contains which hospital used what. In this dispute the document with the biggest number and the document with the firmest identification are two different documents, and the one the press quoted is the former.

These cases are not randomized trials either. They are reports from adopting organizations, they have no control group, and the possibility that other changes coincided over the same period is not excluded. The same brief also records the other side of the ledger. Documentation gaps are common, and there is a real sense in which these tools capture what used to be missed. Its conclusion is not that one party is at fault but that a structure in which automation on each side provokes the other has already begun.

A note on the white paper's own specifications to close. It runs three pages, carries four authors and was not peer reviewed. The number of hospitals in the sample, the total claim count, confidence intervals, statistical tests and the counterfactual model behind the $942 million are all absent. There is no methods section. The publisher is a party on the paying side, and according to the coverage the paper landed while contract negotiations between hospitals and insurers were under way. None of this makes the paper void. But that a document of these specifications has produced a number now serving as the starting point for policy discussion is worth recording in itself.

## The second staging of an old argument

Arguing over whether the record got denser or the price got higher is not new. The United States has been through the same question at least twice. Once when electronic health records arrived in hospitals, and once when private insurers began taking Medicare members and the count of diagnoses became revenue. What those rounds left behind is the experience that claims data alone never carries the argument to the end, and a record of what finally changed the verdict.

Four documents spanning nearly two decades. The question raised by this white paper is the most recent entry in that line.

### 4.1. New tools do not always raise coding

From 2009 the United States spent federal money putting electronic health records into hospitals. The worry then was the same: move the paper chart to a screen, the record gets far denser, and billing follows it upward. A 2014 study in the health policy journal Health Affairs tested that worry with a difference-in-differences design, pairing hospitals that adopted electronic records against matched hospitals that had not. The result was null. Patient severity and payment per discharge came out essentially the same across the two groups.

That study goes first here for more than balance. The claim that a new tool raises billing is intuitive without being automatically true, which means it has to be checked case by case. That is the lesson the null result left, and checking is exactly what is now being asked of this white paper.

![Black-and-white photo of two staff members in a hospital medical records department using a dictation machine and paper files](./image/img-02-medical-records-department.jpg)
*▲ Before electronic health records, paper and dictation filled the medical records department | Source: [Mennonite Church USA Archives via Wikimedia Commons (No known copyright restrictions)](https://commons.wikimedia.org/wiki/File:Medical_Records_Dept_La_Junta_CO_(24595142239).jpg)*

### 4.2. A federal audit wrote the same sentence five years ago

In February 2021 the inspector general of the US Department of Health and Human Services examined Medicare inpatient claims and published the findings. The period covered runs from fiscal 2014 through fiscal 2019. Read what the report found and the structure the 2026 paper describes is already there.

- Stays billed at the highest severity tier rose by about 20% between fiscal 2014 and fiscal 2019.
- Those stays accounted for nearly half of Medicare inpatient spending.
- Close to a third of them involved unusually short lengths of stay.
- More than half of the top-tier stays were pushed into that tier by a single diagnosis.

The last item is the heavy one. The mechanism claim in the white paper, that one diagnosis lifts the tier, was written down in the same shape by a federal audit five years earlier. And that period predates the spread of AI billing tools. The same phenomenon occurs without the tools, which means isolating the tools' share of the current increase cannot be done with the comparison the paper ran. What the inspector general recommended was not causal attribution either. It was targeted review: pick out the patient groups vulnerable to upcoding and the hospitals that bill that way, and look at them.

### 4.3. The study that computed what is left after adjustment

A December 2024 study in the same journal goes a step deeper. Tracking 239 conditions across five states from 2011 to 2019, it starts from the finding that discharges billed at the highest intensity tier rose by 41%. It then adjusts for changes in demographics, comorbidities, length of stay and hospital characteristics to ask what the increase would have been in the absence of changes in coding behavior. That figure is 13%. The distance between 41% and 13%, roughly two thirds of the growth, is not explained by changes on the patient side. That is the basis on which the paper's title ties upcoding to up to two thirds of the growth. The researchers estimated the payments associated with the shift in 2019 at $14.6 billion, of which $5.8 billion came from private plans.

The spread, not the total, is the most persuasive part of the study. The upshift rate ranges from 3.6% to 24.5% across states. A sevenfold gap between states is hard to carry on the explanation that patients simply got sicker. The authors added their own caveat, though: the shift may be fraudulent or may accurately reflect true severity, and the weight of each requires further research. There is also a criticism that the share of hospitals on certified electronic records rose from 28% to 96% over the same period, which is a confounder. To add one note, the journal's abstract page again failed to open during this research, so 41%, 13% and $14.6 billion were confirmed against the original press release from the institution that conducted the study. Only the state-level spread came by way of a trade publication summary.

### 4.4. What narrowed the gap was not an accusation

The most mature precedent in this argument lies not in hospital billing but in Medicare Advantage. In that program, where private insurers take on Medicare members, the government pays an insurer more when a member carries more diagnoses. The direction is reversed from the present case and the structure is identical. The incentive to make the record denser is written into the payment rule.

The estimate the congressional advisory commission published in its March 2026 report runs as follows. Medicare spends about 14% more on Advantage members than it would have on the same people in traditional Medicare, which comes to $76 billion for 2026. Broken out by cause, the effect of healthier members enrolling accounts for about 11% and differences in coding practice for about 4%. The two were estimated separately, so they are not built to sum to 14%. And the 4% is what remains after the coding adjustment the government applies each year has already been taken into account.

The decisive part comes next. The same commission's estimate a year earlier was 20%. The reason it gives for the six-point drop is neither an audit nor a lawsuit. It is that the phase-in of a new risk adjustment model completed, so the model is having its intended effect of reducing how much coding differences influence payment. After twenty years of argument, what actually closed the gap was not deciding who was in the wrong. It was redesigning the payment rule.

### 4.5. The hospital argument has literature behind it

So far this has traced the lineage of the insurer's case. The hospital case deserves the same weight. The line that hospitals are merely recording diagnoses they used to miss is not rhetoric. It is a direction the literature supports.

Studies that compare claims data against charts directly report the same result consistently. Claims data captures fewer comorbidities than the chart does. In a comparison of 3,471 pneumonia admissions, agreement between the two sources scattered from a kappa of 0.01 to 0.78 depending on the condition, and the prevalence of nearly every comorbidity came out lower in the administrative data than in the chart. Some items, such as obesity, weight loss and depression, are omitted systematically. So the possibility that a tool making the record denser is genuinely capturing what was missing stays well open in the literature.

The American Hospital Association adds a figure of its own. The case mix index, the standard measure of how sick a hospital's patients are, rose about 5% between 2019 and 2024, which it offers as evidence that aging and rising acuity are real. Against that, the same association's cost report breaks hospital cost growth into components, and those read: 36% from patient volume, 19% from patient acuity, and 45% from input prices such as labor and supplies. By the association's own numbers, acuity explains about a fifth.

> [!callout]
> One thing must not be done here: lining up the paper's three percentage points against the association's 5% and subtracting. The first is a change in the complex classification share and the second a change in the case mix index itself, and the windows are three years and five. That two organizations are measuring the same object with different rulers is the heart of the case, and the difference between their numbers is not the answer. The real question is not the direction in which the record got denser but its tilt. Did the denser record pile up specifically in the code families that raise the payment tier, and what more is needed to tell?

## Now both sides are running AI

The case is usually drawn as hospitals against insurers. Lay the public record out in order, though, and a different picture appears. The two camps are not rebutting each other. Each is publishing separately with its own ruler, and in between both are expanding automation.

Nowhere in the three pages of the September paper is there a response to the July fact sheet. No official hospital association statement naming that white paper was found in this research.

The order matters. The hospital association's fact sheet on the coding intensity dispute is dated 31 July, and the white paper 24 September. The hospital rebuttal therefore came first, and the paper did not answer a rebuttal already on the table. Conversely, this research turned up no hospital document naming that paper either. Writing that the association rebutted the white paper puts the chronology backward. What happened was not an exchange but two independent releases.

The figure the fact sheet cites in its own support makes the shape clearer. The hospital association points to the congressional advisory commission's 2025 report estimating $40 billion in overpayments to Medicare Advantage plans, attributing the sum to upcoding. The side collecting more through coding, the argument runs, is the insurers rather than the hospitals. That figure differs from the 2026 estimate discussed earlier in both year and item, so the two should not be mixed in one paragraph. What matters is not its size but that the same accusation travels in both directions.

### 5.1. The payer's automation is already on the claim

Where insurers use automation is specific and public. Cigna announced a policy effective 1 October 2025 under which the two highest levels of outpatient evaluation and management claims are automatically reduced one level when the diagnosis codes do not support that complexity. Recovering the original amount requires the hospital or physician to attach the chart afterward and appeal. The verdict comes first and the burden of disproof moves to the party that billed. Physician groups opposed the policy strongly, and reporting that it was delayed sits alongside the company's own notice that it took effect as planned. This article goes no further than calling it a policy announced for implementation, and does not assert its current status.

A case that went further sits in court. A class action over UnitedHealth's coverage review tool was filed in November 2023, and although some claims were dismissed in February 2025, the breach of contract and good faith allegations survived. On 9 March 2026 a federal magistrate ordered broad document production relating to AI review. The company's position is that the tool at issue is a care support tool rather than a coverage determination tool. The 90% error rate that recurs in coverage of this suit is a plaintiff allegation, derived from converting the share overturned on appeal into an error rate, which is not the same as a statistical false-positive rate.

![A gavel resting on a courtroom desk, symbolizing the class action over an AI coverage-review tool](./image/img-03-courtroom-gavel.jpg)
*▲ An insurer's AI review tool is also being contested in court | Source: [Joe Gratz via Wikimedia Commons (CC0)](https://commons.wikimedia.org/wiki/File:Courtroom_One_Gavel_-_Flickr_-_Joe_Gratz.jpg)*

The hospital side's automation is worth sketching too. The tools now entering hospitals fall into five functional groups: those that listen to the clinical encounter and draft the note, those that sweep lab values and existing records for candidate secondary diagnoses, those that automatically query physicians for documentation, those that suggest or assign codes outright, and those that pre-audit claims before submission. What the white paper is aiming at is the second group, and what the adoption studies in the previous section examined is the first. Performance figures for individual products are mostly vendor-published and are not used here, and market size estimates vary by as much as eightfold between research firms, so they are not cited either.

> [!callout]
> Warnings about this configuration come from the vendor side as well. The founder of a company building clinical documentation tools summed up the current direction as "a horrible dystopic future nobody wants to live in," with "bots fighting bots, agents fighting agents," though he also said it might reduce tensions and cut costs. One thing rises reliably as both sides add automation: the administrative cost of billing, review and appeal. That cost comes back as premiums and as prices.

### 5.2. Korea is closer to a mirror image than to the same case

Ask whether this structure exists in Korea and the answer is half. The Korean diagnosis-related group system applies to only seven disease groups, so it does not blanket inpatient care the way the American one does. A different scope means a different size of coding incentive. And the automation that has expanded fastest in Korea over recent years is not coding on the hospital side but review on the reviewer's side. The Health Insurance Review and Assessment Service began in 2026 to factor AI reading results into claims review in some areas, and is widening the application to fraud detection and to predicting which institutions warrant intensive analysis.

So if the American case is an argument about hospitals using AI to find more diagnoses, the Korean one is a story about a reviewing agency using AI to tighten surveillance. That is a mirror image rather than the same case. What both share is that once one party holds automation, the other acquires it too. Concrete statistics on Korean claim adjustment rates or on domestic adoption of AI coding tools were not obtained in this research, so no quantitative comparison is drawn here.

## What else has to be measured

Reduce everything so far to one line and it comes to this. A rule built inside claims data cannot finish deciding whether a claim is right. The paper's consistency rule works around that by holding one layer of the claims data up against another, but both layers still come from the same record. Whether the diagnosis was inflated, or the treatment was withheld, or both, cannot be settled in there. That is why all four precedents anchored themselves outside the claims.

So what more is needed. Five things, and all five are missing from the present argument.

- **A chart-level reference.** Opening a sample of the original medical records rather than the bills. That is what one member company actually did in the March analysis, and it is why the figure of fewer than 20% meeting clinical criteria carries weight. One plan's self-audit cannot deliver a verdict on the whole, though. What is needed is a chart audit with a disclosed sampling design and blinded reviewers.
- **Treatment-companion signals defined in advance.** Deciding which treatments should accompany which diagnoses before looking at the data. Choose them after seeing the results and any comparison table can be assembled. Of the five treatment metrics the paper offers, three match the hypothesis, one runs against it and one is identical across the two groups, and because the paper never discloses when those five were chosen, that scorecard cannot be evaluated.
- **Pre-registration of the decision rule.** Publishing in advance who will judge, when and by what rule. Clinical trials adopted the device long ago, and it prevents the same problem here. A rule written after deployment is always contested.
- **An audit trail.** A record of which tool proposed which diagnosis code and who approved it. Without that, the tool's share and the human's share can never be separated. The dead end the white paper has run into comes precisely from this gap.
- **Separation of the adjudicating party.** Right now the side writing the rule and the side that gains from it are the same. In a structure where interested parties measure each other with rulers of their own making, no result gives the other side a reason to accept it.

### 6.1. Autocoding accuracy depends on which code

Research measuring the tools themselves accumulates outside this dispute. A paper released in September 2026 evaluated systems that assign diagnosis codes automatically, stratified by how rare the code is. The result is that failure splits into two modes. Neural classifiers opened a wide performance gap between frequently occurring codes and rare ones, while workflow systems following fixed procedures got essentially nothing right in code ranges that demand multi-step judgment, such as injury and external causes. Agents equipped with tools recovered part of the performance in that range.

Only one thing can be drawn from that paper. The accuracy of automated coding varies a great deal by which code is in question. The paper does not address whether the systems skew toward overcoding or undercoding, so it cannot serve as evidence for the claim that AI inflates bills. Still, accuracy varying by code says something on its own. If adding a tool changes the mix of diagnoses, the change will not fall evenly, and the fact that the ten codes the white paper listed cluster around one particular character is not inconsistent with that direction.

### 6.2. Block one channel and the pressure moves sideways

Does one rule settle it. A simulation study released in May 2026 attempted an answer. It synthesized payment mechanisms as programs and built in five channels through which a provider might respond strategically to those rules: coding manipulation, patient selection, delay, effort adjustment and severity triage. The core result is this. When auditing targeted and closed the coding channel, the behavior of selecting low-complexity patients more than doubled.

This is a simulation in a synthesized environment rather than an observation of real data. A lesson survives anyway. A rule aimed only at upcoding can reduce upcoding while creating costs elsewhere, and those costs surface in forms far harder to measure, such as patient selection. In the same study, programs synthesized with several objectives together eliminated upcoding while also halving denials. Rather than setting one rule, the design has to account for where the pressure will go instead.

### 6.3. Tools that generate diagnoses answer to no regulator

One thing stands out here. The tools at the center of this entire dispute are not medical devices. The 21st Century Cures Act of 2016 excluded four categories of software from device regulation, and one of them is administrative support software. Tools handling billing and coding sit precisely in that exemption.

Clinical decision support software is a slightly different matter. To be excluded it must satisfy four conditions: it must not process images or signals directly, it must display and analyze existing information, it must support rather than replace the decision, and the clinician must be able to review its basis independently. In January 2026 the US Food and Drug Administration revised that guidance and widened the scope of exclusion and enforcement discretion, but the revised guidance does not directly address tools that assist clinical documentation either.

Put the pieces together. A tool that generates candidate diagnoses is neither a medical device nor subject to separate review, and the obligation to validate its output rests only on contracts and coding guidelines. The sentence the hospital association's fact sheet emphasizes stands at that same point: "human validation remains essential to ensuring coding integrity, regulatory compliance and accurate representation of patient complexity." That is correct. But if no record anywhere establishes that the validation actually happened, the sentence is a declaration rather than a requirement.

So the conclusion of this article does not rest on who is at fault. What moved the twenty-year argument in Medicare Advantage was not the force of the verdict but the timing of the rule. The question that precedent leaves comes before the question of who adjudicates. It is when the rule was fixed. Whoever fixed the reference and the decision rule before the tools arrived has nothing to litigate afterward, and whoever wrote the rule after the tools arrived will go on trading white papers and fact sheets like these.

## Why This Matters to Pebblous

The problem this article has followed is not confined to medical billing. It has the same shape as a problem Pebblous meets repeatedly in data quality work. The three passages below are not about products. They are about how the structure the previous sections laid out reappears in other settings.

### 7.1. Separating signal from artifact in one record

Data diagnosis does work of this shape every day. Take one body of records and separate what is real from what is a mark left by the act of measuring. In this case the records are medical records and the mark is coding intensity. The rule the paper used, the device that judges by asking whether a diagnosis arrived without its expected treatment, is built the same way as the consistency rules used to catch missing values, duplicates and label errors. The point is not that there is nothing technically special about it, but that the same lens explains why the rule failed to end the argument.

Two things set it apart. One, an interested party designed the rule. Two, the rule was written after the data existed. When those two overlap in data quality work, the same thing happens. Let the party doing the cleaning write the rule that will score its own work, and let that rule be fixed after the results are in, and nobody can say whether the resulting number points at an improvement or at the shape of the rule. That is the bind the white paper is now in.

### 7.2. Put a price on a label and the label distribution moves

A diagnosis code is a label. And this label carries a price tag. As section 1 showed, one or two codes push the payment tier up nearly threefold. Attach a reward to the work of making labels and labels pile up on the side that pays more, which is the same structure as the bias that appears when training-data labeling is outsourced and annotator pay is tied to volume. The only difference is the scale and the visibility of this case.

What makes this case unusually legible is that the shift did not happen in just any code. In the figure in section 2, the two hospital groups diverge in direction on the top row alone, while the bottom two are nearly identical. And what the codes the paper highlighted have in common is that they can be derived from a single lab value, which makes them the spots best suited to machine detection rather than human reading. The shift is largest where the reward and the reach of automation overlap.

There is a further implication for anyone training models. A medical AI trained on codes that have shifted this way learns not that patients are sick but that this hospital writes it down this way. And as section 4 showed, claims data was already recording less than the chart to begin with. The label bends twice, once through omission and once through reward. That the two directions operate differently across different code families is the hardest part of using this material for training.

### 7.3. A reference not fixed before deployment cannot be built later

Manufacturing and logistics floors have the same spot. Put AI into inspection decisions or defect records and the pass rate is the first thing to wobble. Telling whether yield improved or the decision threshold loosened requires fixing two things before deployment: a reference sample judged by people, and the decision rule that separates improvement from drift. A rule written after deployment is always contested, because there is no way to answer why that particular metric was the one chosen.

The lesson the simulation in section 6 adds carries straight into practice. Tighten defect decisions alone and what gets picked for inspection changes; block coding alone and which patients get admitted changes. So when the reference is fixed, it has to record not only which metrics will move but which behaviors will relocate and where.

Taking the judgment away from the interested parties is the reason third-party data diagnosis exists. Ending this article on that conclusion would not be right, though. In this case, what actually changed a verdict was not the arrival of a third party but a rewrite of the rule itself. Leaving that fact as it stands seems better. We wrote this not to sell a conclusion but because we meet the same question on a different floor every day.

What could not be confirmed belongs here too. The estimating equation behind the white paper's $942 million, the number of hospitals in the sample and the total claim count were absent from both the three pages and the release, and no separately published methods appendix was found. The same holds for the calculation by which the March analysis moved from a 62-million-member sample to national figures. No hospital association statement naming the September paper was found in this research, and what was found was only the July fact sheet, which predates the paper by two months. The 2024 quantification cited in section 4 remains behind a journal and index paywall, so 41%, 13% and $14.6 billion were taken from the research institution's own press release, with only the state-level spread coming through a trade summary. Korean claim adjustment rates, domestic adoption of AI coding tools and the Blue System's annual commercial inpatient spending could not be found in public sources, which is why every denominator in section 1 remains an approximation. Thank you for reading this far.

## References

The figures in this article come from sources at different layers. Values from the white paper and the March issue brief were carried over after checking both PDFs directly, and the quotations from the releases were verified on the pages themselves. Citations of the federal audit report and the congressional advisory commission report were confirmed in each institution's own document. Entries marked below as routed indirectly are those whose originals could not be opened and which were cited through a summary or secondary coverage. Denominators and converted values are all approximations computed from public statistics, and the assumptions are stated alongside them in the body.

### Party documents (originals checked)

- 1.Blue Cross Blue Shield Association. **Hospital Coding Intensity Analysis: Major Bowel Procedures**. White paper, September 2026, 3 pages. Authors Chris Birkmeyer, David Wennberg, Keith Kamons, Luke Chalker. [White paper PDF](https://www.bcbs.com/media/pdf/BCBSA-AI-Coding-Intensity-Whitepaper.pdf) — source of the 55,158 cases, $653 million, $11,800 per case, $942 million, the move from 20.2% to 22.7% in bowel procedures, the clinical discordance table and the quarterly line values. Not peer reviewed, and it has no methods section.
- 2.Blue Cross Blue Shield Association. "BCBSA Analysis: How AI Coding Tools Affect Healthcare Costs." Release of 24 September 2026. [bcbs.com](https://www.bcbs.com/about-us/association-news/bcbsa-analysis-ai-coding-tools-affects-healthcare-costs) — source of the Luke Chalker quotation in section 3 and of the more-than-60% adoption figure for hospital systems. That adoption figure does not appear in the white paper itself.
- 3.Blue Cross Blue Shield Association. **Rising Coding Intensity and Its Impact on Health Care Affordability**. Issue brief, March 2026. [Brief PDF](https://www.bcbs.com/dA/70bb93b3a9/fileAsset/Rising-Coding-Intensity-and-Its-Impact-on-Health-Care-Affordability.pdf) — holds the maternity time series in section 2 (4.0% to 12.3%), the transfusion rate of 0.8% to 1.2%, the low-growth hospitals at 7.9% to 8.2%, the $22 million, the plan self-audit finding fewer than 20% meeting clinical criteria, and section 1's 9% rise in inpatient cost per member with roughly 20% attributed to coding intensity. The two hospital groups were split at 30% growth in postpartum anemia coding, and the sample covers hospitals with more than 250 maternity admissions. The top-10% high-growth hospitals the brief uses in a different exhibit are a different group from this one.
- 4.Blue Cross Blue Shield Association. "New BCBSA Research Suggests AI in Hospital Billing is Leading to Higher Health Care Costs." Release of 5 March 2026. [bcbs.com](https://www.bcbs.com/about-us/association-news/new-bcbsa-research-on-ai-hospital-billing-driving-higher-health-care-costs) — the $2.3 billion, $663 million inpatient and at least $1.67 billion outpatient cited in section 3 are sentences in the body of this page. None of those three values appears in the issue brief published the same day.
- 5.American Hospital Association. **Fact Sheet: Artificial Intelligence and Coding Intensity**. 31 July 2026. [aha.org](https://www.aha.org/fact-sheets/2026-07-31-fact-sheet-artificial-intelligence-and-coding-intensity) — the document that calls the insurer claims unsupported and answers with $40 billion in Medicare Advantage overpayments. The sentence quoted in section 6 about human validation being essential to coding integrity comes from here.
- 6.American Hospital Association. "Fact sheet details why use of AI alleviates burden for providers and does not improperly increase coding." 27 August 2026. [aha.org](https://www.aha.org/news/headline/2026-08-27-fact-sheet-details-why-use-ai-alleviates-burden-providers-and-does-not-improperly-increase-coding)
- 7.American Hospital Association. **Costs of Caring**, 2026 edition. [aha.org/costsofcaring](https://www.aha.org/costsofcaring) — source of the roughly 5% rise in the case mix index in section 4 and of the cost growth decomposition (volume 36%, acuity 19%, input prices 45%). An annual report rather than a document aimed at the September white paper.

### Policy, regulation and audit (originals confirmed)

- 8.Medicare Payment Advisory Commission. **March 2026 Report to the Congress: Medicare Payment Policy**. Press release and report, 12 March 2026. [medpac.gov](https://www.medpac.gov/document/march-2026-report-to-the-congress-medicare-payment-policy/) — source of section 4's 14%, $76 billion, favorable selection at about 11%, coding intensity at about 4%, and the judgment that the new risk adjustment model is having its intended effect. The $22 billion coding intensity figure circulating in secondary summaries does not appear in this document and is not used here.
- 9.HHS Office of Inspector General. **Trend Toward More Expensive Inpatient Hospital Stays in Medicare Emerged Before COVID-19 and Warrants Further Scrutiny**. OEI-02-18-00380, 19 February 2021. [oig.hhs.gov](https://oig.hhs.gov/oei/reports/OEI-02-18-00380.asp) — source of the four items in section 4 (top severity up about 20%, nearly half of inpatient spending, a third with short stays, over half decided by a single diagnosis) and of the targeted review recommendation.
- 10.Centers for Medicare & Medicaid Services. FY2026 IPPS Final Rule, Table 5 and the operating standardized amount. — basis for the relative weights 1.6829 / 2.3972 / 4.5965 and the $6,752.61 base rate behind the figure in section 1. This research confirmed them through an aggregator site and could not open the original archive file.
- 11.ASTP/ONC. **Data Brief No. 80**, September 2025, based on the AHA IT Supplement. [healthit.gov](https://www.healthit.gov/data/data-briefs) — source of the 71% and 61% in the section 3 table, the sample of 2,253 hospitals and the 51% response rate.
- 12.21st Century Cures Act (2016) §3060, and the US Food and Drug Administration guidance on clinical decision support software, revision of 6 January 2026. — basis for the regulatory gap described in section 6.
- 13.Health Insurance Review and Assessment Service (Korea), related coverage and public materials. — basis for the Korean passage in section 5. Quantitative indicators such as claim adjustment rates were not obtained, so the passage stays qualitative.

### Academic

- 14.Dai T, Kvedar JC, Polsky D. "Policy brief: ambient AI scribes and the coding arms race." **npj Digital Medicine**, 24 December 2025. PMC12738533 — source of the adoption observations in section 3 (workload measure 11%, risk-adjusted diagnoses 14%, diagnoses per encounter from 3.0 to 4.1) and of the balancing point that documentation gaps are common.
- 15.Crespin D, Dworsky M, Levin J, Ruder T, Whaley CM. "Upcoding Linked To Up To Two-Thirds Of Growth In Highest-Intensity Hospital Discharges In 5 States, 2011–19." **Health Affairs** 2024;43(12):1619–1627. doi:10.1377/hlthaff.2024.00596 — source of section 4's 41%, the 13% the increase would have been in the absence of changes in coding behavior, the $14.6 billion for 2019 ($5.8 billion private, $4.6 billion Medicare, $1.8 billion Medicaid) and the 3.6% to 24.5% spread across states. The journal's abstract page never opened, and the first three values were checked on the [research institution's own press release](https://www.rand.org/news/press/2024/12/03/index1.html). Only the state spread is **routed through a trade publication summary**.
- 16.Adler-Milstein J, Jha AK. "No Evidence Found That Hospitals Are Using New Electronic Health Records To Increase Medicare Reimbursements." **Health Affairs** 2014. doi:10.1377/hlthaff.2014.0023 — the null result in section 4.
- 17.Chong YE, Cao Y, Chen Y, Mao K, Jiang H. "Understanding the Limits of Agentic ICD Coding." [arXiv: 2609.13806](https://arxiv.org/abs/2609.13806), 12 September 2026 — the stratified autocoding performance result in section 6. Overcoding bias is outside this paper's scope, so it is not used as evidence for that claim.
- 18.Wang Z, Xu X, Zha H, Li W. "Healthcare Mechanisms from Policy-as-Code Search under Strategic Provider Response." [arXiv: 2605.30680](https://arxiv.org/abs/2605.30680), 29 May 2026 — the channel-shift result in section 6. A simulation rather than an observation of real data.
- 19.Literature on agreement between claims data and chart review. Comparison of comorbidities across 3,471 pneumonia admissions (PMC3112394) and the prevalence-adjusted kappa methodology of Quan et al. (**BMC Medical Research Methodology** 2009;9:5) — basis for the kappa range of 0.01 to 0.78 in section 4 and for the systematic under-capture in administrative data. **Routed through summaries.**
- 20.Soroush A et al. "Large language models are poor medical coders — benchmarking of medical code querying." **NEJM AI**, 2024 — background literature on autocoding accuracy, not used for any figure in the body.

### Industry and litigation (includes indirect citations)

- 21.Anthony Ha. "Insurers claim AI is already increasing healthcare costs." **TechCrunch**, 26 September 2026. [techcrunch.com](https://techcrunch.com/2026/09/26/insurers-claim-ai-is-already-increasing-healthcare-costs/) — source of the one-sided blood bath line in section 3 and the bots-fighting-bots line in section 5. The first is an executive at the insurer federation, the second the founder of a clinical documentation company. The article carries no response from the hospital side.
- 22.Cigna Healthcare. **New Reimbursement Policy for Professional E/M Services Claims effective October 1, 2025** (R49). Company provider newsroom — basis for the automatic downcoding policy described in section 5. Reporting of a delay and the company's own notice of implementation as planned conflict, so the current status is not asserted. **Indirect citation.**
- 23.**Estate of Lokken v. UnitedHealth Group**, US District Court for the District of Minnesota — filed November 2023, partially dismissed February 2025, document production ordered 9 March 2026. Basis for section 5, and an **indirect citation**. The 90% error rate is a plaintiff allegation.
