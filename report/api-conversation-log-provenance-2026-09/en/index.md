---
title: Chinese Labs Rerouted Their Own Users
subtitle: Anthropic caught seven China-based labs distilling Claude, and the disclosure showed where user data actually traveled
date: 2026-09-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Chinese Labs Rerouted Their Own Users

_Anthropic caught seven China-based labs distilling Claude, and the disclosure showed where user data actually traveled_

## Executive Summary

> [!callout]
> Within a day of Anthropic's September 10, 2026 threat intelligence report, one summary had hardened in both the English and the Chinese press: Chinese AI labs harvested 200 million conversations with Claude. Open the report and two things do not match. The number of labs named is seven, not five, and Anthropic never published a total. That total is the press adding up the per-lab figures. And the genuinely new thing in the report is not the scale at all. It is that the conversations reached the harvesters by more than one road.

> There were three. One was direct harvesting through accounts opened with stolen cards and forged identities. Another was purchase, buying other people's transcripts from third-party resellers. The third is what makes this disclosure different. Several labs took requests their own users had sent them, quietly forwarded those requests to Claude, and kept the exchanges for training. People who believed they were talking to Kimi were reading Claude's answers. The sessions that crossed carried a pharmaceutical company's capital expenditure estimates and a developer's live access tokens, and many of them arrived by way of third-party model routers of the kind widely used in the United States and Europe. What was exposed did not belong to the Chinese labs. It belonged to the people using them.

> Which makes the contracts worth opening. Anthropic and Google both write that outputs belong to the customer. Both prohibit training a competing model on the service. Google goes further and prohibits using prompts to discover training data. Yet neither document has a column for the thing that actually happened here, a vendor routing its own customers' requests to a model across a border without telling them. The problem is less that no mechanism stops it than that the act has no name yet. This report turns that empty column into questions a procurement team can put to a vendor.

<!-- stat-card -->
**Seven** — China-based labs named by Anthropic — The widely quoted five is closer to the count of campaigns with a published size. Two labs have no figure at all

<!-- stat-card -->
**151 million** — Exchanges attributed to Alibaba, May to July 2026 — The largest volume tied to any single lab. At peak it ran near three million a day

<!-- stat-card -->
**12,000** — Requests in the search for a working bypass — One lab varied the technique request by request to find which one would surface Claude's reasoning

<!-- stat-card -->
**58 → 40** — Foundation Model Transparency Index — Stanford's 2026 reading. Across the industry, disclosure of what a model was trained on is shrinking

## What Was Disclosed on September 10, and Where "200 Million" Came From

Anthropic published its threat intelligence report on September 10, 2026. Inside it sits a section titled "Illicit distillation and scaled abuse," and that section is what this report reads. Its central finding fits in one sentence: "Since we published our first disclosure in February, we have identified and disrupted additional distillation attacks against Claude from **seven labs based in China**."

A word first on what distillation means here. Anthropic defines it in the report as "an industrial-scale, covert campaign to extract a model's capabilities and replicate them in another model without authorization." You ask a strong model a great many questions, collect its answers, and train your own model on them. No weights leave a building. Behavior gets copied instead. The economics of that trade, and why it works now, we covered in an earlier report, [You Can't Buy Sovereignty by Distilling It](/report/ai-distillation-sovereign-data/en/). This piece stands on that one and asks a different question. Where did the copied conversations **come from**?

Anthropic published a set of per-lab figures. Five labs have a size attached, two do not. Every number in the table below is carried over as the original writes it, observation window included. Two figures for the same lab can measure windows of very different length, and stripping the window off is the fastest way to misread them.

| Lab (incident ID) | Observation window | Scale disclosed by Anthropic | Fraudulent accounts |
| --- | --- | --- | --- |
| Alibaba / Tongyi Lab (GTG 16005) | May to July 2026 | Over 151 millionNear 3 million a day at peak | Over 3,500 at peakA first pool of roughly 5,000 was banned, and the activity moved to a second pool |
| Moonshot AI / Kimi (GTG 16002) | May to July 2026 | Over 23 millionOne case inside it: about 300,000 over ten days | 5,380 |
| DeepSeek (GTG 16001) | 14 days in July 2026 | Over 12.1 million | Not stated |
| Zhipu / Z.ai (GTG 16006) | 17 days in June and July 2026 | Over 3.4 million770,609 through a reasoning refiner over ten days in June | 273 |
| Xiaomi / MiMo (GTG 16008) | 20 days in March and April 2026 | Over 400,000 | Over 1,500 |
| SenseTime (GTG 16012)MiniMax (GTG 16003) | Not stated | No figurePurchased from third-party resellers | Not applicable |

Source: Anthropic Threat Intelligence Report, September 2026, section "Illicit distillation and scaled abuse." Every figure in the original is a floor, written with "over." The incident IDs are Anthropic's internal threat group identifiers.

**Anthropic did not publish a total.** Neither 200 million nor 190 million appears anywhere in the report. Adding the five disclosed figures ourselves gives roughly 190.9 million, and that sum leaves out SenseTime and MiniMax entirely, so calling it a "seven-lab total" is simply wrong. The 200 million that traveled everywhere was assembled by [TechCrunch](https://techcrunch.com/2026/09/10/anthropic-details-distillation-campaigns-from-alibaba-moonshot-ai-and-deepseek/) out of the per-lab numbers, and the companion phrase "five campaigns" is closer to the count of campaigns that came with a published size.

The aggregate did not stay in English. Chinese-language coverage on September 11 and 12 carried "近 2 亿次" and "5 个独立行动" straight across, so the same invented total set in two language markets at once. Those pieces are mostly translations and recompositions of the TechCrunch story rather than independent confirmation. Several of them flagged the limit themselves, noting that "报告内容均来自 Anthropic 的单方面披露, 尚未获得独立证实."

Anthropic's is not the only document describing this activity. Two more surface if you follow the links embedded in the report itself. Google's Threat Intelligence Group published an AI threat tracker on February 13, 2026, describing model extraction attacks against Gemini that it and Google DeepMind detected and disrupted. Notably, it attributed the source not to a country or a named lab but to "researchers and private sector companies globally." The second is a White House Office of Science and Technology Policy memorandum, NSTM-4, dated April 23, 2026 and titled "Adversarial Distillation of American AI Models." It states that foreign entities are running "deliberate, industrial-scale campaigns to distill U.S. frontier AI systems" and leaning on "tens of thousands of proxy accounts" to stay ahead of detection. Anthropic adds that OpenAI has flagged the same activity since early 2025.

> [!callout]
> The same caution still attaches to all of it. Those two documents record the phenomenon; neither corroborates the account counts and exchange volumes now attached to these seven labs. As of September 14, 2026 none of the seven has issued a public rebuttal, and none did in February either. And Anthropic is both the injured party here and a **competitor** of every lab it names. Every figure and every case below comes from one side's records. This report reads those records without converting them into settled fact.

## Three Routes the Conversations Took

February's disclosure described a simple picture. Someone had spun up a great many fake accounts and pounded on Claude with them. The September report splits that picture into three. The routes differ in more than volume. **They have different victims, and they differ in whether the user knew anything was happening.** The newest part of this disclosure lives in that distinction.

### 2.1. First: harvested directly, through accounts that were never real

Sitting in the middle are the proxy services Anthropic calls "transfer stations." The report describes their working method plainly: "these proxy services create thousands of new accounts using false identities, fake or stolen credit cards, and stolen API keys." The activity attributed to Alibaba and to Zhipu falls in this category. This route has no injured end user at the far end of it. It has people whose payment cards and API keys were stolen, and what leaves the building is Claude's own output.

### 2.2. Second: their own users' requests, forwarded without them

The second route is the one this report describes concretely for the first time. Here is the sentence.

"In other cases, unauthorized labs rerouted requests from their users to Claude—without the knowledge or permission of those users—to harvest exchanges between users and Claude for training."

Anthropic names DeepSeek, Xiaomi and Moonshot for this pattern, writing that they "fed conversations between their own models and users into Claude." How it looked from the user's side is in a separate line: "These users thought they were using a Kimi model, but received responses from Claude instead." Nothing on the screen had changed. The model behind it had.

The three labs did not all behave the same way. Moonshot and DeepSeek passed requests to Claude in real time and served the returning answers straight back to their own users. Xiaomi is a different case, and the report is explicit about it: "Our investigation did not indicate that Xiaomi used Claude's responses to serve its users, but instead saved exchanges between Xiaomi customers and its models." Live proxying and store-then-replay look different from where the user sits. In the first, the answer on the screen right now came from someone else's model. In the second, a conversation that ended some time ago crosses a border later.

For DeepSeek the report also records **who got selected**. DeepSeek inspected the strings in inbound requests to tag users running coding harnesses such as Claude Code, the Claude Agent SDK and OpenCode, then routed some of those tagged users to Claude Opus. The selection was not random. Teams that had wired an agentic coding tool to a Chinese lab's endpoint went first. That adds a column to check before an organization answers "we don't use Chinese models." Which harness a development team pointed at which endpoint is rarely written down in a procurement file.

Anthropic attaches one inference to the Xiaomi case. It suggests that releasing MiMo-V2-Pro with a free trial period, and then extending that period, may have been a way to turn an inflow of international developer usage into distillation material. The evidence offered is timing, in that most of the attacks on Claude began as the trial window was closing. Anthropic itself writes "may have" and "suggests," so we carry it no further than that. If the inference holds, the free trial stops being a pricing decision and becomes a collection device.

This route exposed nothing the labs owned. It exposed the input of the people who trusted them. On notification Anthropic says only that it cannot tell: "We do not know if Moonshot notified their customers that their requests were being rerouted to Anthropic and exposed to a third party." On the user's position it is firmer: "The user had no way of knowing that their use of Kimi was being forwarded to Claude." Had it only been a matter of people failing to notice, a line of disclosure would have settled it. **No mechanism existed by which they could have noticed**, and that is the structure of this case. That sentence is why section 4 goes and opens the contracts.

### 2.3. Third: somebody else's transcripts, bought

The third route is a purchase. "Unauthorized labs also obtain transcripts of user exchanges with US frontier models by purchasing them from third-party resellers," the report says, and then identifies who the resellers are: "These resellers include the operators of proxy services, which often save exchanges between users and US models without the knowledge or consent of those users." SenseTime and MiniMax are classified here, which is why neither carries an exchange count. Neither extracted anything; both bought.

How that market actually runs is set out in a piece Anthropic links directly from the words "transfer stations," a May 5, 2026 report in ChinaTalk by a researcher at the Oxford China Policy Lab. Chinese developers reach Claude through API proxies they call zhongzhuanzhan (中转站) at roughly ten percent of list price, sometimes five. The customers are not only labs. University faculty and students, company developers and hobbyists all buy through the same channel.

The piece explains the discount with a phrase worth keeping, "one fish, three meals" (一鱼三吃). The first meal is the margin on cheaply sourced accounts. The second is quietly swapping the model the user selected for a cheaper one. **The third is the logs.** Every request crossing the proxy leaves prompts, responses, tool calls and retries on the operator's servers. When the traffic is a coding agent, what lands there includes long reasoning chains, real engineering judgment and human-verified answers. The author quotes Chinese developers to the effect that the markup business is customer acquisition and the log harvest is where the actual margin lives. A user is a paying customer and an unpaid data producer in the same transaction.

The author marks her own limit here. Whether proxy operators systematically harvest and sell those logs, and to whom, remains unverified. What floats downstream can still be opened and read. Hugging Face carries datasets advertised as reasoning output from Claude Opus 4.6 with no provenance attached. Checking on September 14, 2026, two of them created in February 2026 are still live, each downloaded several hundred times, each with Apache 2.0 in the license field. Conversations with no recorded origin, shipped under a license that grants redistribution. The same piece aims a criticism at Anthropic's report and the White House memorandum together: both read proxies as an instrument a handful of Chinese labs built to extract American models, when underneath sits a far larger market operating in the open on GitHub, Taobao and Telegram. We do not settle that argument. We do record the observation that reading the whole market off seven name tags leaves a layer out.

On one page the three routes separate cleanly. Who originated the request on the left-hand side, and whether that person knew where their conversation was going, changes from row to row.
