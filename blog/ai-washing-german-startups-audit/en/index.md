---
title: AI-Washing: Eight in Ten Startups That Advertise a Number Skip the Method
subtitle: The University of Hamburg scored the AI marketing of 100 German startups on seven criteria. Of the 62 that advertised a performance number, 49 said nothing about how it was measured.
date: 2026-10-10
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI-Washing: Eight in Ten Startups That Advertise a Number Skip the Method

_The University of Hamburg scored the AI marketing of 100 German startups on seven criteria. Of the 62 that advertised a performance number, 49 said nothing about how it was measured._

## Executive Summary

> [!callout]
> This article reads an audit of AI marketing that researchers at the University of Hamburg released on October 8, 2026. They scored the public marketing copy of 100 German startups against seven criteria, and asked 63 experts and practitioners how that copy reads to the people who receive it.

> The sharpest result is in the numbers. Sixty-two of the startups put performance forward as a figure, and 49 of those said nothing about which data and which conditions produced it. Not one reached the top tier by disclosing both the source and the method. Respondents who had run into exaggeration before trusted the next "AI-powered" label less, and that gap had nothing to do with how much they knew about AI.

> The figures and quotations in sections 1 through 3 come from the paper. The Korean case in section 4 comes from the monitoring results the Korea Fair Trade Commission and the Korea Consumer Agency published on November 7, 2025. Section 5 is this article's own reading of those facts, taken from the position of a buyer who receives performance material from a vendor.

### Key Figures

Four numbers. The first two show how much evidence sat behind the performance claims. The last two point to limitation disclosure and to ethical concern.

Source: [Pranav, Hartmann & Lauscher (2026), arXiv:2610.11788](https://arxiv.org/abs/2610.11788).

<!-- stat-card -->
**49** — startups named no method — Out of the 62 that advertised a performance number. None disclosed both source and method

<!-- stat-card -->
**2%** — offered independently checked evidence — Two of the 100 reached the top evidence tier, which the codebook defines as independently validated benchmarks

<!-- stat-card -->
**76%** — disclosed no limits anywhere — No edge cases, no accuracy bounds, no data dependencies, no human-in-the-loop requirements

<!-- stat-card -->
**38%** — flagged for ethical concern — 19% serious and 19% moderate. Surveillance, automated decisions in regulated domains, behavioral tracking

## Marketing Copy Scored on Seven Criteria

AI-washing is a word borrowed from greenwashing. It attaches when the AI in the advertisement is larger than the AI in the product, and until now it has traveled as a collection of anecdotes rather than as a measured rate. The Trustworthy AI Lab at the University of Hamburg has filled that gap. The paper was accepted at AIES 2026, and the preprint went up on arXiv on October 8.

The introduction explains why anyone would count this now. In Germany, 45.1% of the 2025 startup cohort name AI as a core product component, and the paper cites alongside it a study finding that founders who present their product as AI-driven raise capital more easily than those who do not. Once money moves toward the label, the reason to write "AI" comes loose from whether AI is in the product.

The sample is 100 startups drawn from two public German startup directories. To stay in, a firm had to be pre-IPO, hold a German registered office, run a working website with substantive content, and make an AI claim in its public marketing. Seventy-seven sell to businesses, and half were founded in or after 2022. The sectors scatter across finance, e-commerce, healthcare, legal technology, logistics, and human resources.

Two of the authors did the scoring by hand, at roughly an hour per startup. They went past the homepage into the technology and how-it-works subpages, actually ran the product wherever a free trial or live demo existed, and cross-checked funding stage and team size against outside databases. On a separate ten-startup overlap set that both scored, agreement came to a macro-averaged Cohen's kappa of 0.82, and 0.86 on the composite score alone.

Where the seven criteria came from is worth a look. The researchers did not fix the criteria first and fit cases to them. They read roughly 30 startups with no scheme in hand, found five patterns that kept recurring, and then hardened those into criteria. The five: "AI" used as a branding label with no detectable AI behind it, a third-party API repackaged as a proprietary product, a quantitative performance claim with no methodology or source, headline marketing that promises more than the technical subpages support, and an ethically loaded application sitting behind positive AI framing.

| Criterion | What it looks at | Scale |
| --- | --- | --- |
| Claim specificity | How concretely the startup describes what its AI does | 1–5 |
| Capability authenticity | What technical substance sits behind the AI label | 1–5 |
| Evidence of functionality | What an outside observer can verify | 1–5 |
| Quantitative substantiation | Whether a performance number carries a source or a method | 0–3 |
| Marketing proportionality | Whether the space AI takes in the copy matches its role in the product | 1–5 |
| Ethical concern level | How much risk the application itself carries | 0–3 |
| Transparency about limits | Whether the startup says what its AI cannot do and when a human is needed | 1–4 |

▲ The seven criteria the researchers used. Names and definitions follow Table 1 of the paper.

The seven were then aggregated into a composite score from 1 to 5. A 1 means transparent, proportionate, evidenced and ethically sound; a 5 means misrepresentation across several criteria. The researchers state that they gave no individual firm a right of reply, because the material was already public and the claims concern population-level prevalence rather than the conduct of any single company.

The interviews split into 53 written and ten oral. Participants came from development, sales, marketing, and management roles, with domain specialists from journalism, regulation, and health care mixed in, and 68% rated their own AI familiarity at 4 or 5 out of 5. The researchers write plainly that this is not a probability sample of German consumers. The design aims at the opposite: the audience best equipped to check an AI claim against the underlying technology.

## Exaggeration Takes Three Forms

The scoring lays the ground. Of the 100, 59 described their AI only in buzzwords with no detail about what it did, and 35 had no actual AI at all or relied on a wrapper around someone else's large language model with no contribution of their own. Forty gave AI more marketing weight than its role in the product warranted. The thinner the substance, the louder the advertising, and the statistics caught the relationship: the correlation between capability authenticity and marketing proportionality came to 0.51, the strongest of any pair in the codebook.

Who founded the company mattered too. Startups with business-only founders were significantly more likely to overstate AI capability than those with a technical founder (Mann-Whitney U=287, p=0.003), and they also gave AI more marketing prominence than its actual role warranted (U=76, p=0.002). The comparison shows a difference between two groups; it does not point to a cause.

An AI researcher among the interview participants put the structure plainly.

"In the end I tend to come to the conclusion: okay, that's just a nice interface with an API key to ChatGPT, a nice function. It gets copied and done. It's just a quick cash grab for a year or so."

— P2, an AI researcher tracking the German startup scene. Translated from German in the paper

The researchers sort the exaggeration into three forms. They are not three different lies but three different parts missing from the same claim.

▲ Pebblous original diagram. The three places exaggeration shows up, and the count caught at each (out of the 100-startup sample).

### 2.1. Claims With Nothing to Inspect

Forty-three claimed AI capabilities with no publicly inspectable evidence behind them. Where evidence was offered at all, it was mostly client logos, anonymized case studies, or demos running in an environment the company controlled. None of those lets an outsider reproduce the conditions, because the seller decides what the artifact shows. Two of the 100 reached the top tier by putting forward an independently validated benchmark.

The less there is to inspect, the harder the sentence pushes. The homepage copy of one legal-research startup, quoted in the paper, runs like this.

"We develop AI without hallucinations: our AI invents nothing."

— Marketing copy from a German legal-research startup, Table 2 of the paper. Translated from German

What "nothing to inspect" means becomes visible at the point where a claim actually breaks. An automotive voice-AI startup wrote that it develops "Digital Employees that could think, talk, and act alongside their human counterparts." The scoring gave that firm 2 out of 5 on claim specificity and 2 out of 5 on marketing proportionality. Next to the copy the researchers set an account from an interview participant, who wrote of a voice system they had used: "I cannot dial any phone number that contains a 2, because the system does not understand the way I say 2," and asked why anyone needs an AI biased against German accents.

### 2.2. Performance Numbers With No Method

Sixty-two startups put performance forward as a number. Of those, 49 showed no substantiation at all for the figure, and not one was fully transparent about both source and method. The most common shape is a multiplier or an "up to X%" phrasing with no baseline. A manufacturing-optimization firm advertises a saving of up to 96% of production costs with no comparison baseline disclosed. An autonomous-retail firm claims "10× lower theft than the industry average," which names a baseline but never defines which industry, which measurement, or which time window.

Among the startups that made a quantitative claim, weaker substantiation also went with a higher composite score. A figure looks checkable, so a figure with its conditions stripped off can carry a reader further than a vague adjective does.

One call-center voice-AI startup the paper quotes has a satisfaction metric lodged in its copy: "We use LLMs, human-like voices and background call center music to deliver >90 % CSAT score." Which survey produced the value, over how many calls, measured against what, is not written down. The reader of that material is left with one choice, to believe it or not.

### 2.3. Assertions That Acknowledge No Limits

Seventy-six named no limits anywhere in their marketing. Where the system goes wrong, where accuracy falls apart, what data it needs to work, whether a person has to check something in the middle: all of it missing. Only 7% reached the top disclosure tier on this criterion.

Writing limits down is not purely a cost. Once the conditions are on the page, a failure outside them is out of scope rather than a product defect. More than three in four left the space blank anyway, and two went the other way and promised the AI never fails. A field-sales AI "thinks ahead, learns from corrections, and never drops the ball." A knowledge platform invites employees to ask "anything" and receive "a perfect, validated answer instantly."

## The Cost Lands in Two Places

The cost of an exaggerated advertisement is usually counted as the loss of the one person it fooled. This study measured the cost in two other places. One of them passes to everybody who sees the next advertisement. The other passes to people who never saw the advertisement at all.

### 3.1. People Who Have Seen It Trust the Next Claim Less

Of the written respondents, 53% reported running into AI-washing personally, as consumers or at work. The researchers asked both groups how far they trust an "AI-powered" label, on a five-point scale. Those who had encountered it averaged 1.71; those who had not averaged 2.48. The medians split at 1 and 3, and the difference between the two distributions was statistically significant.

▲ Pebblous original diagram. Trust in an "AI-powered" label among respondents who had and had not encountered AI-washing (5-point scale).

What matters is that the two groups did not differ significantly in AI familiarity. The suspicion did not come from knowing more about AI. It came from having watched an exaggeration once, which changed how the next piece of copy read. The researchers explain this through persuasion knowledge, the long-standing theory that a message means something different the moment its audience recognizes an attempt to persuade.

One respondent summed up a whole career in a few lines.

"Over the course of my career, AI capabilities have always been systematically overclaimed – the benefits often oversold, and the costs understated. … AI tools were decontextualized of the training data and attendant limitations, and performance was reported in ways that did not take into account generalization to end-user usecases."

— P18, who saw the pattern at two employers before graduate school

> [!callout]
> These numbers should not be read across to consumers in general. The respondents are AI-literate professionals and graduate students, not a probability sample of German consumers. The researchers make the point in their limitations and cite prior work finding that lower AI literacy predicts greater receptivity to AI claims. The figures come from the most demanding audience available.

### 3.2. A High-Risk Use Reads Like an Ordinary Product

Separately from marketing conduct, the researchers also scored the risk of the application itself. Nineteen of the 100 were classed as raising serious ethical concern and another 19 as raising moderate concern, which comes to 38. The three subcategories with the largest counts were surveillance, autonomous decisions in regulated domains, and behavioral tracking and manipulation. All of these applications, the researchers write, fall within categories the EU AI Act classifies as high-risk or prohibits outright.

One example on the autonomous-decision side is IVF embryo selection. The product claims to pick the highest-quality embryo from combined clinical and lab data, and the paper sets directly beside it a 2024 randomized trial in which the leading commercial system of that class did not outperform trained embryologists. Another is a platform that screens children for autism spectrum disorder from voice recordings and matches families with therapists. On the therapy item, 81% of written respondents placed AI in the lower two scores of five, the most skeptical response anywhere in the survey.

On surveillance, one participant talked about a company they had worked for, a startup analyzing visitor movement through shopping-mall CCTV. They said it had been sold to investors as being able to pick out a thief in the store, and that it could not actually do that. The person harmed by the exaggeration here is not the buyer of the product. It is everyone who walked past the camera.

In the third category, behavioral tracking and manipulation, the issue is disclosure. One behavioral-analytics product reads what a visitor does during a session and reshapes the page in real time to lift conversion, and the copy says nothing about telling the visitor that the page is changing. Beside that case the paper sets a 2019 study that catalogued dark patterns across 11,000 shopping sites. An investor among the participants described a booth at a German trade fair offering passers-by a "psychological assessment" built from fingerprint, iris and palm data collected on the spot. What happens to the biometric data afterwards was stated nowhere.

The three categories have one thing in common: they obscure the regulatory grade. Call the same function "aiding public safety" or "AI that helps you make the best choice," and a system that would be classified as high-risk reads like an ordinary piece of software. If the first two findings are about the money and trust of buyers and investors, this one is about a cost passed to the people the system is pointed at.

## Korean Regulators Found the Same Defects

A German sample reads easily as somebody else's problem, but there is a Korean enforcement record of the same shape. On November 7, 2025, the Korea Fair Trade Commission published, with the Korea Consumer Agency, the results of a first monitoring exercise covering home appliances and electronics sold on the major domestic open markets. It identified 20 suspected AI-washing cases, and after the sellers responded, the listings were corrected or removed voluntarily.

The breakdown of those 20 maps almost one to one onto the paper's criteria. Nineteen involved putting "AI" into a product name or inflating a function. Describing simple sensor control with no learning behind it as an AI feature falls in here: the temperature sensor in an air cooler, the humidity sensor in a dehumidifier. The commission had those expressions rewritten as something like "automatic temperature control," or deleted. The remaining case was a failure to state an operating condition. The AI mode applied only when the laundry load was small, and that condition was not on the listing.

That last case points at the same spot as the paper's transparency-about-limits criterion: the function is not a lie, but the range in which it works is missing. The box that 76 German startups left empty is the box a Korean regulator caught once on a shopping site.

A consumer survey run alongside the monitoring found that 57.9% of 3,000 respondents would buy a product with AI technology in it even at a higher price, and that those respondents were willing to pay an average premium of 20.9%. At the same time, 67.1% said they find it hard to tell whether AI technology has actually been applied to a product. Between those two numbers sits a situation in which people will pay more and cannot check what they are paying for. On that basis the commission said it will prepare a guideline on improper AI-related labeling and advertising during 2026.

## Why Pebblous Is Watching This Study

News like this is usually consumed as a story about an AI startup bubble. From the data side, a different problem comes into view. A performance figure is worth nothing on its own. It becomes a comparable value only once it carries the data it came from and the conditions it was measured under. Change the evaluation set and the same model produces a different number. An "accuracy of X%" with no method attached is therefore less a false claim than an unverifiable one, and an unverifiable claim stands in the same place as a line of advertising copy.

For the buyer reading vendor material, the task is not to doubt the number but to check whether the four things that belong beside a number are there. Four of the researchers' seven criteria turn into working questions like this.

▲ Pebblous original diagram. The four questions rework specificity, evidence, quantitative substantiation and limits disclosure from the paper's seven criteria into working form.

The four questions pay off less in the answers they bring back than in marking the places where no answer arrives. With no answer to the third, the figure cannot serve as comparison material. With no answer to the fourth, the scope of responsibility for any failure after deployment has not been set. Both are boxes to fill before a contract.

The proposals the researchers make at the end of the paper run the same way. There are three. Any company advertising AI capability should publish on its product page a short structured statement of what data the system collects and what it cannot reliably do. An independent body should certify marketing claims by inspecting technical documentation and performance benchmarks under confidentiality. And the seven criteria should be used as a first-pass screen to decide where to look first. On the first proposal, the researchers do not ask for a new format; they note that datasheets and model cards already specify the content categories such a statement can reuse.

The second proposal is not a call for an institution that does not exist either. The EU AI Act already delegates conformity assessment of high-risk systems to designated third parties, and the researchers propose extending that assessment from the system itself to the marketing claim made about it.

The work we have long done on data quality has the same shape. A performance figure arrives, and the question goes back: which dataset, which split, which preprocessing, which labeling standard produced it. If no answer comes back, that figure is not yet a comparable value. AI-washing grows in the space where nobody asks the question back, and this study is the first to put a figure on how large that space is across 100 German startups.

Thank you for reading this far. The figures and quotations from the paper were checked in [arXiv 2610.11788](https://arxiv.org/abs/2610.11788), and the Korean monitoring results in the [Korea Fair Trade Commission and Korea Consumer Agency announcement of November 7, 2025](https://eiec.kdi.re.kr/policy/materialView.do?num=273165). Take the last vendor performance material that reached your desk: we would be glad to hear how many of the four boxes it filled.

## References

### Academic

- 1.Pranav, A., Hartmann, L., & Lauscher, A. (2026). "[Auditing AI-Washing in German Startups: A Mixed-Methods Study of Marketing Claims and Perceptions](https://arxiv.org/abs/2610.11788)." arXiv:2610.11788. Accepted at AIES 2026.

### Official Documents

- 2.Korea Fair Trade Commission & Korea Consumer Agency. (2025-11-07). "[Correction of suspected AI-washing cases and preparation of a guideline on improper labeling and advertising](https://eiec.kdi.re.kr/policy/materialView.do?num=273165)." Press release. (Korean)

### News Coverage

- 3.Newsis. (2025-11-07). "["No AI applied" — KFTC orders correction of 20 AI-washing cases](https://www.newsis.com/view/NISX20251107_0003393782)." (Korean)
- 4.EBN. (2025-11-07). "[Twenty suspected AI-washing cases identified](https://www.ebn.co.kr/news/articleView.html?idxno=1685729)." (Korean)
