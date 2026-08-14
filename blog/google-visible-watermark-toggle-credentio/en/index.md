---
title: Google Moved Its AI Watermark Out of Sight and Into the File
subtitle: Gemini
date: 2026-08-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google Moved Its AI Watermark Out of Sight and Into the File

_Gemini_

## Executive Summary

> [!callout]
> On August 14, 2026, Google let users switch off the sparkle icon that had been stamped on images, videos and music made with Gemini. Open the settings, switch the media watermark option off, and nothing generated after that carries a visible AI mark. The setting rolls out over several days, and in Korea only paying subscribers get to see it.

> What went away is not the marking but the way of reading it. SynthID, written into the pixels themselves, and the C2PA Content Credentials carried in file metadata both go in regardless of the toggle. Neither layer is visible to a person, and each needs a decoder or a parser. Google publishing Credentio, an open-source library for verifying C2PA, on the same day is the other face of the change.

> You can still check. Checking now takes a tool, and not everyone has one. The shape of that will be familiar to anyone who has worked on data lineage. A history written into metadata exists only where a pipeline reads it.

### Key Numbers

The invisible layers are already spread wide. The side that has to read them is only now being built out.

Sources: [Google Blog](https://blog.google/innovation-and-ai/products/identifying-ai-generated-media-online/), [Google Developers Blog](https://developers.googleblog.com/introducing-credentio-open-source-c-library-for-c2pa-content-credentials-from-google/), [Digital Trends](https://www.digitaltrends.com/computing/googles-gemini-app-adds-a-toggle-to-disable-ai-watermarks-with-some-exceptions/)

<!-- stat-card -->
**100B+** — Images and videos carrying SynthID — Cumulative since 2023, alongside 60,000 years of audio, as Google reported in May

<!-- stat-card -->
**50M** — AI checks run in the Gemini app — Using the feature starts with uploading a file and asking about it

<!-- stat-card -->
**0** — Signing features in Credentio — It only verifies today. Creating credentials and embedding them sits on the roadmap

<!-- stat-card -->
**3** — Countries where only paying users get the toggle — Korea, India and Vietnam. Free users keep the visible mark

## What Google Turned Off

The announcement came on Friday, August 14. According to a post on X by Josh Woodward, the vice president who runs Gemini, the toggle covers the image model Nano Banana, the video model Omni and the music model Lyria. It appears first in the Gemini app and in Flow, the video editing tool, with Search to follow. The rollout runs over several days, and users find the control under the media watermark option in settings. Whatever they choose applies to the images, videos and music they generate afterward.

Google framed the decision as a balance. Woodward wrote that the company was balancing creative control against safety, and added that while the visible watermark is now optional, the invisible SynthID signal and C2PA metadata remain in place for transparency, so anyone can still confirm through Gemini or Search whether something was made with AI. The premise of the whole change sits in that sentence. Verification did not become impossible. It became a different act.

The size of that discretion becomes clear once you look at what the law actually asks for. Article 50 of the EU AI Act has required, since August 2, that providers of generative AI mark their output in a machine-readable form. It does not ask anyone to stamp an icon a person can see. The sparkle in the corner went beyond that requirement as a product choice Google made on its own, which is why removing it was also Google's to decide. The exceptions are the countries that mandate a visible mark separately.

The request came from users first. Gizmodo, citing Android Authority, reported that when Woodward asked a few months ago what people found most annoying about Gemini, removing the visible watermark from Nano Banana landed in the top ten answers. For people using the image tools, the most irritating part of the product was the visible trace that AI had been involved.

That is exactly where the criticism lands. Engadget pointed out that the visible watermark existed in the first place to give people a fast way to recognize AI content, and that this decision weakens the purpose Google set for itself. The two remaining layers still support verification, but only after someone thinks to ask a chatbot or upload a file to a checking tool. Between seeing a mark and looking one up sits that much friction.

![Chat interface in the Gemini app showing an uploaded photo and the prompt 'Is this generated with AI?'](./image/img-01-verify-prompt.webp)
*▲ With the visible mark gone, verification means uploading the file and asking | Source: [Google Blog](https://blog.google/innovation-and-ai/products/identifying-ai-generated-media-online/)*

## The Pixel Signal Survives, the Metadata Gets Stripped

The two layers that remain work differently. SynthID, the watermarking technology Google introduced three years ago, embeds a signal no person can perceive directly into the pixels of images and video and into the waveform of audio. In May, Google said the technology had been applied to more than 100 billion images and videos and to 60,000 years of audio. C2PA Content Credentials take another route. They record what made a file, when, and how it was edited afterward, sign that record, and attach it to the file's metadata. The first is a signal cut into the content. The second is a résumé traveling with the file.

Their durability differs too. Gizmodo noted that erasing a visible watermark takes no more than cropping or covering it, that C2PA metadata is easy to strip, and that most social platforms remove some or all metadata during upload anyway. Anyone spreading misinformation would not have to lift a finger. SynthID is tougher. Because it is encoded in the pixels, it is designed to survive cropping, downscaling and quality loss, and in Ars Technica's testing, repeated degradation did make detection harder, though by then the image itself had been mangled beyond use. The technology was never built to withstand adversarial attack, however, and the same reporting noted that commercial services and public tools advertising removal already exist.

Lining the three layers up side by side makes the move visible. What disappeared is the weakest layer and the one the largest number of people could actually read.
