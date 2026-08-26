---
title: The Deployment Layer That Edits Answers Before the Token Is Picked
subtitle: Watermarking already ships this intervention in production, and an arXiv paper formalizes what happens when its purpose is undisclosed
date: 2026-08-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Deployment Layer That Edits Answers Before the Token Is Picked

_Watermarking already ships this intervention in production, and an arXiv paper formalizes what happens when its purpose is undisclosed_

## Executive Summary

> [!callout]
> When we say we are auditing an AI, there are really only two places we look. What it was trained on, and what bias its weights hold. But the sentence a user reads on screen passes both of those and then takes one more step. It is the moment after the model has scored every candidate word and just before one word is actually drawn. A conceptual paper posted to arXiv on August 25, 2026 by a consultant in Brazil gives that place a name. The model is not the deployed system. Between the two sits a layer the author calls inference policy, and no audit standard in use today takes that layer as its object.

> That the layer works is already settled. Google's text watermarking leaves training alone and changes only the sampling procedure, nudging token probabilities on their way out, and it ships in Gemini. In the production measurements Google reported in Nature, that intervention cost 0.57 percent more latency per token, and across roughly 20 million live responses the gap in user satisfaction stayed inside the noise. The bigger the model gets, the smaller that relative cost becomes. What happens when a score table built for some other purpose is laid on the same layer has never been observed by anyone. What the paper does settle, in a single table, is that such an intervention spends no context, leaves no fingerprint in the prompt, and deposits nothing inspectable in the conversation log.

> Three large-scale experiments published in Science in December 2025 add weight to that. Researchers put 19 models in front of 76,977 participants and had them argue 707 political issues. The largest lever on how persuasive a conversational AI turned out to be was neither scaling the model nor personalizing to the user. Prompting changes alone, which touch no weights, raised persuasiveness by as much as 27 percent. What the model is matters less to the outcome than how the deployment wraps it. The same study fact-checked the 466,769 claims that came out of those runs, and the methods that raised persuasiveness systematically lowered factual accuracy. Yet a search through the major providers' documentation surfaces not one disclosure of whether sampling distributions are modified, or to what end. So a bias observed from outside cannot be assigned to the weights or to the deployment layer. The question an audit has to ask is not what the model learned but **under which inference policy this answer was sampled**.

Four numbers hold this report up. The first two say how cheap this layer's intervention is and how hard it lands. The second two say how wide the window is for checking it from outside.

+0.57%

Added latency per token from a  
sampling-layer intervention, measured in production

Up to +27%

Gain in persuasiveness from  
prompting alone, with no change to weights

Top 20

Candidate tokens an API will show  
(vocabularies run to six figures)

100 billion

Images and videos watermarked  
with SynthID to date

This report starts from that one paper and then does what the paper did not. The author ran no experiment and named no company. So the pages that follow hold his frame up against what has actually been measured, what has actually happened, and how far the law currently reaches. Where a blank turns up, it stays a blank.

## The Last Step Before an Answer Exists

Draw the way a language model produces a sentence and you usually get this. A prompt goes in, the model computes, the next word comes out. One thing is missing from that drawing. The model does not choose words. What the model does is score every word in the vocabulary, and drawing one word out of that score sheet is a separate step that comes after. Those scores are called logits, which is simply the name for the score the model assigns each candidate word.

Between scoring and drawing there is a gap. What the paper formalizes is the layer that sits down in that gap. The author calls it an inference policy. What it does is plain. It lays an externally built score table on top of the model's own scores, adds the two together, and draws the next word from the result. How hard it presses is adjustable. Press hard and a word that ranked third becomes first; press lightly and nothing at all happens in most sentences. Depending on what fills the external table, this layer can be a safety filter, a style regulator, or a provenance marker.

In the diagram below, the grey span is the range an AI audit actually inspects today. The orange span is the place this report is about.
