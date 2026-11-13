---
title: Does Perplexity Check Whether That Store Still Exists?
subtitle: Podqi found a risky address in 15% of Perplexity
date: 2026-11-14
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does Perplexity Check Whether That Store Still Exists?

_Podqi found a risky address in 15% of Perplexity_

## Executive Summary

> [!callout]
> Ask a chatbot where to buy a particular brand and the answer sometimes comes back with a fake store, or with an address that shut down a while ago. That is the finding of a study by Podqi, a brand-protection firm, carried out with Gauge, an AI search analytics firm. The two took 151 consumer brands, put the same shopping questions to logged-out versions of ChatGPT, Gemini and Perplexity, and collected 6,795 answers.

> Risky addresses turned up in 15% of Perplexity's answers, the highest of the three, with ChatGPT at 8% and Gemini at 4%. What sits inside that ranking is worth more attention than the ranking itself. Of the 4,437 domains that appeared across the answers, 718 were classified as risky. Of those, 351 were stores impersonating a brand or selling counterfeits, and a larger group of 367 sold nothing at all, being addresses that had already closed. They are the mark of time passing between the web a model knows and the web as it stands now.

> The figures and quotations in sections 1 through 4 come from Podqi's public research page and from the coverage that carried it. The Verge, which had the story first, could not be opened directly, so that part leans on other outlets, and the full report is a PDF behind a request form, so only what the public page states was confirmed. Reading the return of closed addresses as a data freshness problem, which is the second half of section 3 and all of section 5, is this piece's interpretation.

### Key figures

The first two numbers say how often a risky address slipped into an answer and how many such addresses there were. The third says how those addresses were treated inside the answers, and the fourth says how that frequency moved between the two September rounds.

Sources: [Podqi, AI search brand risk](https://podqi.com/research/ai-search-brand-risk), and [Startup Fortune](https://startupfortune.com/podqi-study-finds-chatgpt-gemini-and-perplexity-send-shoppers-to-fake-stores/).

<!-- stat-card -->
**15%** — Share of Perplexity answers holding a risky address — ChatGPT 8%, Gemini 4%. Across all three services, 9%

<!-- stat-card -->
**718** — Domains classified as risky — Out of 4,437 reviewed. They split into 351 fake stores and 367 closed addresses

<!-- stat-card -->
**6.3x** — Recommendations for every warning — The mix was 57% recommendations, 34% bare links, 9% warnings

<!-- stat-card -->
**12%→7%** — Risk exposure across the two rounds — It fell between the two September rounds. The report states this itself

## Even on the Same Questions, Perplexity Returns Risky Addresses Most Often

The design is plain. Podqi picked 151 consumer brands, among them Lululemon, Birkenstock, Stüssy and Le Creuset, then put five shopping questions to each of the three chatbots in identical form: where can I buy this, do they ship internationally, is there an official site for my region, and so on. Two rounds in September produced 6,795 answers. Every site that showed up in them was opened, and 4,437 domains were reviewed by hand.

Every account that asked was logged out. With no personalization attached to a signed-in account and no record of earlier conversations, the setup reproduces what a consumer sees the first time they open a chatbot. That means these numbers are close to a default, taken with no context attached. On an account carrying a history of conversations, the results could differ.

The most widely quoted part of the result is the gap between services. Answers carrying at least one risky address reached 15% at Perplexity, the highest of the three. That is close to one answer in seven. ChatGPT and Gemini sat lower, and Google AI Overviews was tallied in a different unit altogether.

| Service | Answers holding a risky address | Did it warn? |
| --- | --- | --- |
| Perplexity | 15% | Surfaced them most often of the three. No warning rate was reported for it separately |
| ChatGPT | 8% | Attached a warning in only 24% of the cases where it showed a risky address |
| Gemini | 4% | Showed the fewest risky addresses. With few shown, the count of warnings attached is small as well |
| Google AI Overviews | 7 instances (a count) | All seven carried a warning |

▲ Per-service figures from the Podqi study. Google AI Overviews was reported as a count rather than a rate, so it cannot be set on the same axis as the others.

Where that gap comes from, the study does not say. The conditions it states reach as far as the same prompts, the same brands and the same days across the three services. Each service returned 2,265 answers, so the ground for comparison is even. Why one of them runs more than three times higher on that even ground stays an open question.

The spread by question type is wide as well. Questions about international shipping and about an official site for the user's own region drew the highest exposure at 16%. The other four fell between 6% and 11%, so the worst question ran at more than double the mildest one. The report includes cases where a chatbot invented a region-only site that does not exist, and 36% of the risky addresses that appeared in regional answers carried a country-code domain or a region name. Of the five questions, the one that looks gentlest turned out to be the most dangerous.

On brand size, two numbers from different axes are in circulation. Press coverage reported that small brands saw about twice the risk exposure of large ones. The number Podqi put on its own public page points elsewhere, at warnings rather than exposure: of 125 risky answers about enterprise brands, 4 carried a warning and the other 121 said nothing. Beside that number the report wrote that "size is no shield." Meeting a risky address less often and being told about it when you do are two different things.

## The 718 Risky Domains Split Into Fake Stores and Closed Addresses

The 718 domains Podqi classified as risky are two groups of different character. Of them, 351 were storefronts that pose as a brand or sell counterfeit goods, and 367 held nothing a shopper could buy. Coverage and the report call the second group dead domains: once in use, now shut, or past the end of their registration so that anyone can take them up again.

The group that reaches the headlines is usually the first one. A fake storefront is run by someone chasing money at this very moment, and the harm is easy to picture. The bigger group, though, is the second. Click one of those addresses today and nothing is for sale, so there is no harm in the moment. To a shopper it looks like a broken link.

> [!callout]
> That does not make a closed address the safer kind. The difference between the two lies in timing rather than in scale. A fake store is a seat someone has already taken, and a closed address is an empty seat nobody has taken yet. A domain goes back on the market once its registration lapses, so an address a chatbot keeps recommending is an address worth buying.

The report lands on the same spot. One of the five takeaways it attached to the findings reads "Today's dead domains are tomorrow's fakes." Expired domains can be registered by anyone, the explanation goes, so an address AI keeps recommending can turn into a counterfeit store. The same item shows up in the advice aimed at brands, which is to track the domains they used and let lapse.

## A Model Answers From the Old Web, and Closed Addresses Go Back on Sale

How those 367 addresses ended up in answers takes little explaining. They were once perfectly alive. One was a brand's regional shop, another a campaign site, another an old official store, and they were written into the web pages and articles and links of that period, over and over. The model learned that record, and search indexes kept it. That the brand later took the site down was not something anyone went around announcing.

The diagram below is the four boxes one address passes through. The owner changes in the third box, and the answer in the fourth stays the same.

▲ Pebblous original diagram. What the four boxes contain follows Podqi's description of a dead domain.

This is where it parts from ordinary hallucination. Nothing was invented. A fact that was once true was served past its expiration date. The address string itself is accurate. What is wrong is the unspoken premise that the address still belongs to the brand. A verification step that asks only whether the address once existed, and never who holds it now, lets the answer through.

A warning that the polluted side of the web is already working this seam is on record too. The Podqi report cites, as background, an alert the security firm ESET issued in September: scam operations are mass-producing pages stuffed with keywords for AI to scrape. That alert is taken at second hand, through the report, with the original left unopened.

## Warnings and Recommendations Land in the Same Column

What the 15% counts is the first thing to pin down. Podqi recorded one instance whenever a risky address appeared in an answer at all. A case where the chatbot pushed the address, a case where it dropped a bare link with no explanation, and a case where it said this site is not official so take care all sit inside the same denominator. Count a warning as exposure and the service that answered carefully comes out worse.

The report did publish the breakdown, though. Among the appearances of risky addresses, recommendations made up 57%, bare mentions 34% and warnings 9%. That is where the figure of 6.3 recommendations per warning comes from. The unit of measurement is blurred, true enough, but most of the blurred mass sits on the recommendation side, so it is hard to argue that the 15% is inflated through and through.

Recommended 57%Linked only 34%Warned 9%

▲ Original Pebblous diagram. The composition of how risky addresses appeared in answers, from Podqi's figures.

The counting rule runs the other way as well. Under the breakdown chart the report notes that "Mixed answers count as not warned." An answer that links a risky address and adds only a general line about watching out for fake sites never made it into the warning column. One in five mishandled answers warned about counterfeits in exactly that general way. The 9% for warnings, and the 6.3 times that comes out of it, both stand on that strict definition. The reason the report chose it is written right beside it: a warning only helps when it is attached to the specific site a shopper is about to visit.

Why the recommendation column weighs more is also set down in the report. Shoppers used to judge ten blue links, it says, and now an AI answer picks the store for them, so the stakes on getting it right are higher. Change who does the choosing and the weight of one wrong choice changes with it. The note the report attaches to list-shaped questions, the ones asking for the best sites to buy a brand from, belongs in the same place: lists are risky by design, because every site on a list of top websites is presented as a place to buy. Two-thirds of the risky answers to that question put the risky address forward as a recommendation.

Three caveats remain. First, Podqi wrote the five questions itself. They are synthetic rather than drawn from real user logs, so their distribution may differ from what people actually ask. Second, the study counted how often a risky address appeared in an answer and stopped there. Who clicked the link, and whether anyone lost money, went untracked. Third, Podqi sells a service that finds brand-impersonating sites and has them taken down. Among the 151 brands in the study, Madhappy was named in coverage as a Podqi client.

An interest in the outcome does not make the numbers wrong. If anything, the report carried figures that cut against itself. One of them is the record that risk exposure fell from 12% to 7% between the two September rounds. A company that benefits when the threat looks large wrote the improving trend down alongside, which makes it hard to read the study as material pushed in one direction.

Each company gave a short answer. A Perplexity spokesperson said "We don't claim to be 100% accurate," adding that the company keeps working on accuracy. Jessica Levis Boord, a Google spokesperson, said Gemini can make mistakes too and that it shows source links so users can check for themselves. OpenAI replied in general terms that it keeps improving its safeguards.

## Why Pebblous Is Watching This Study

This study is usually read as a consumer advisory: AI sends shoppers to fake stores. Seen from the data side, something else is left over. The group of 367 is not a case of a model being wrong. It is a case of data growing old. It was right at the moment of training and indexing and wrong at the moment of answering. What changed in between was not the model but the world.

For an organization that maintains the material AI reads, this structure is not someone else's problem. The same thing happens to product documentation, support pages, partner lists and price tables. A page taken down, a product renamed, a plan discontinued: unless the material carries a signal saying so, it gets cited in its past state. The questions worth keeping narrow down to three.

- Is there a list of every address that carries your name out in the world, including the domains and subdomains you used once and then let go? Without knowing how many you abandoned and who holds them now, you also do not know what has moved in.
- Does the material say what date it is true as of? A document with no date is always the present to a model. Expiration and renewal dates have to live inside the material itself for an old fact to be told apart from a current one.
- When a number arrives, is its denominator written down? As with the 15% here, the same event looks like a different size depending on whether warnings and recommendations went into one column.

The advice aimed at shoppers points to the same place. Trevor West, a co-founder of Podqi, said to verify the source before entering personal or payment details. Go straight to the brand's official site, and be wary of an address with a misspelling or an unfamiliar extension. Checking an address a chatbot handed over is the same motion as checking freshness on the data side.

That is why Pebblous counts currency as a quality item when it makes data usable by AI. Wrong data is not the only quality problem. Data that was right once and has sat there unchanged is a quality problem as well. This study showed that difference in the most concrete form available, a shop address.

## References

### Primary Source

- 1.Podqi. (2026). "[AI Search Is Recommending Fake Retail Websites](https://podqi.com/research/ai-search-brand-risk)." Podqi Research.

### Press Coverage

- 2.Digital Today. (2026). "[AI Chatbots' Shopping Mall Recommendations: Risky Sites, Hundreds Identified](https://www.digitaltoday.co.kr/en/view/125301/ai-chatbots-shopping-mall-recommendations-risky-sites-hundreds-identified)." Digital Today (English Edition).
- 3.Startup Fortune. (2026). "[Podqi Study Finds ChatGPT, Gemini and Perplexity Send Shoppers to Fake Stores](https://startupfortune.com/podqi-study-finds-chatgpt-gemini-and-perplexity-send-shoppers-to-fake-stores/)." Startup Fortune.
- 4.TokenPost. (2026). "[Podqi Test Finds Risky Sites in 15% of Perplexity Answers](https://www.tokenpost.com/news/technology/55872)." TokenPost.
