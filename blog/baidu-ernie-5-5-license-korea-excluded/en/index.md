---
title: Baidu
subtitle: Baidu posted the 280-billion-parameter weights on Hugging Face on November 5, and the license bars use in the European Union, the United Kingdom and South Korea
date: 2026-11-08
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Baidu

_Baidu posted the 280-billion-parameter weights on Hugging Face on November 5, and the license bars use in the European Union, the United Kingdom and South Korea_

## Executive Summary

> [!callout]
> Baidu's newest open-weight model is one that organizations in Korea are not licensed to run. ERNIE-5.5-Flash-Base went up on Hugging Face on November 5, 2026, where anyone can download it, and the license file posted beside it fixes the territory where the model may be used as the whole world other than the European Union, the United Kingdom and South Korea. Korea was outside that line from the start.

> A second condition follows. A company whose related products or services earn more than $50 million a year has to obtain Baidu's separate written authorization first, and a company below that figure, if the use is commercial, still has to send one notice of its use and display the words "Powered by ERNIE." The promotional line that lands first is the one about leading on 24 of 30 benchmarks. Whether a given company may use the model at all is settled by a document with clause numbers rather than by a table of scores.

> Sections 1 through 5 follow what the Hugging Face model card, the license text, and reporting at home and abroad record. Section 6 is this article's reading of what those clauses mean for the side that brings models in. Baidu's reason for leaving out the three places is written nowhere, and that absence is recorded here as well.

### Key Numbers

Sources: the [Hugging Face model card](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) and the [LICENSE file](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base/raw/main/LICENSE) in the same repository

Two of the four cards hold numbers the model card leads with. The other two hold numbers that appear only once the license file has been opened separately. The second pair sets the conditions.

<!-- stat-card -->
**280B** — Total parameters — A mixture-of-experts design that switches on 14 billion of them per token

<!-- stat-card -->
**3** — Places taken out of the Territory — The European Union, the United Kingdom and South Korea. The rest of the world is in

<!-- stat-card -->
**$50M** — Revenue ceiling for free commercial use — Above it, Baidu's written authorization has to come first

<!-- stat-card -->
**24 / 30** — Benchmarks reported as first place — Baidu's own evaluation, against same-class base models from three Chinese labs

## What Baidu Released Is Material, Not a Finished Model

Baidu put the weights for ERNIE-5.5-Flash-Base on Hugging Face on November 5, 2026. The model holds 280 billion parameters in total, and 14 billion of them switch on to process any one token. The arrangement is called a mixture of experts: each layer carries 512 experts, and a token activates ten of those plus one shared expert that every token uses. There are 43 layers, 42 of which work that way. Pre-training ran on 33.5 trillion tokens with a training context of up to 128K, and the model card says fine-tuning and inference can stretch that to a million tokens.

The Base at the end of the name marks a model that has not yet been tuned to follow instructions. It arrives less as something to talk to than as material for further training toward a particular purpose. That is also where open weights earn their keep for a company. The model runs inside the building, no data goes out to anyone else's server, and the weights can be retrained on data of one's own.

A scorecard came with the release. Baidu reports that its own evaluation put the model first on 24 of 30 benchmarks. The comparisons run against DeepSeek-V4-Flash-Base, Tencent's Hy3-preview-Base and Xiaomi's MiMo-V2.5-Base, all base models of the same class with total parameters between 280 and 310 billion. The figure that catches the eye in the model card's table is 78.4 on MMLU-Pro, where DeepSeek-V4-Flash-Base records 69.2 on the same row. The numbers are self-reported, and even so the table shows how closely the Chinese labs are running to one another.

## The One Sentence That Defines the Territory

Next to the model card there is one more file, named LICENSE. Its title reads ERNIE 5.5 Flash Base Model License Agreement v1.0, and rather than reach for a ready-made license such as Apache 2.0, Baidu wrote this one for this model. Section 1 defines twelve terms. The eleventh of them is Territory.

"Territory" means all geographical areas worldwide other than the European Union, the United Kingdom and South Korea.

Everywhere in the world except the European Union, the United Kingdom and South Korea. On its own that is a definition and nothing more, but Section 2 grants the license solely within that Territory. The rights to use the materials, modify them, continue training, build derivative models and distribute them to third parties all arise inside that line. The same sentence conditions the grant on the acceptable use policy in Exhibit A, and Section 1.12 makes that exhibit part of the agreement. Section 5.3 then closes the outside once more.

The Licensed Materials, Derivative Models and their Outputs must not be used, reproduced, modified, distributed or displayed outside the Territory.

Five activities are barred: use, reproduction, modification, distribution and display. The bar covers not only the model and its derivatives but the Outputs they produce. Downloading is itself reproduction, so the safer reading is that a copy pulled down in Korea departs from the clause at that moment.

The restriction does not stop at one generation either. Section 5.2 requires that any agreement governing the use or distribution of the materials or a derivative model incorporate the restrictions in Sections 5.1 and 5.3 and Exhibit A as enforceable terms. That weighs more than telling a recipient once and being done with it. It asks for the same territorial limit to be written into the next contract. Someone who builds a derivative model on these weights and releases it carries the three exclusions along, and a model forked again from that one carries them too. For whoever is on the receiving end, a model whose card never mentions ERNIE 5.5 may still have inherited the condition.

The clause divides by where the activity happens rather than by where the company is incorporated. How far it reaches when a Korean company keeps its servers in a region inside the Territory and runs the model only there does not resolve in a single line. The moment a developer in Korea connects to that server, loads the weights and puts an output on a screen, there is something to argue about over where the use and the display took place. The text leaves that question open.

## The Second Gate, Drawn at $50 Million in Revenue

Being inside the Territory does not exhaust the conditions. Section 4 divides again, this time by money. Non-commercial use is free, with neither a notice nor an authorization required (Section 4.1). Commercial use carries no license charge as long as the annual revenue of the related products or services stays at or below $50 million, though the operator has to send Baidu one notice naming itself, the model version, the products the model goes into, and valid contact information (Section 4.2). The product also has to display "Powered by ERNIE" somewhere. That notice is not an application for permission. Once it goes out, the clause states that qualifying commercial use may proceed without awaiting Licensor's reply, acknowledgment, or approval.

Above $50 million the procedure changes. Section 4.3 requires such a company to obtain separate written commercial authorization before it begins. The clause also covers a company that starts below the line and grows past it: the authorization has to be in hand before the threshold is crossed, and use that lacks it must be suspended. Authorized use keeps the "Powered by ERNIE" notice, and the license does add that use lawfully conducted under Section 4.2 incurs no retroactive charge merely because the threshold is exceeded later. One fact survives all of that. Doing well becomes a reason to renegotiate, and the counterparty is the company that built the model.

Sections 5 and 6 hold several more clauses that hurt to discover late. Section 5.5 forbids using the outputs to improve any other artificial intelligence model or machine-learning system apart from this model and its derivatives, which catches the common practice of generating synthetic data to teach a different model. Section 5.6 requires anyone operating a service that generates outputs to put reasonable technical and organizational safeguards in place and review them periodically. Section 6.6 provides that every license terminates automatically the moment a licensee files a suit against Baidu alleging infringement of intellectual property.

The two gates come in order. Section 2 confines the grant itself to the Territory, so the revenue condition in Section 4 only comes up for whoever is already inside. Outside the Territory it makes no difference whether annual revenue runs above or below $50 million, because the question never arrives. An organization in Korea that opens its review at the revenue threshold has the order backwards.
