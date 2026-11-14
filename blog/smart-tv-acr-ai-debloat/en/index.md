---
title: Can Claude Delete the Smart TV ACR That Knows What You Watch?
subtitle: Users handed Claude a TV model number and switched off 25 preloaded apps, but the feature that identifies what is playing stays in place
date: 2026-10-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Claude Delete the Smart TV ACR That Knows What You Watch?

_Users handed Claude a TV model number and switched off 25 preloaded apps, but the feature that identifies what is playing stays in place_

## Executive Summary

> [!callout]
> This article looks at two things together: the way a living-room TV collects a record of what you watch, and the fact that people have started handing the job of stopping that collection to AI agents. On October 19, TechCrunch gathered cases of users giving Claude nothing but a TV model number and then switching off preloaded apps and swapping the launcher. On one side is a technology that sends viewing data to the advertising industry. On the other is a technology that does the work of peeling it off for you.

> The collecting technology is called ACR, short for automatic content recognition. It lifts a fingerprint from a frame of the picture or a slice of the sound and matches it against a reference list on a server to work out what is playing right now. Because it runs in the TV itself rather than in an app, a broadcast or a games console screen can equally be its subject. What users deleted with AI, though, were preloaded apps and launchers. The switch that stops ACR collection sits separately, among the consent items in the settings.

> Sections 1 through 4 follow the facts as written in TechCrunch's reporting, the litigation record and the manufacturers' statements. Section 5, which asks whose capacity it becomes to withdraw consent, is this article's own reading.

### Key Numbers

The first two are what users changed by handing the job to AI. The last two are numbers being fought over in US courts right now.

Sources: [TechCrunch](https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/) (October 19, 2026), Texas Attorney General announcements (February 26 and May 11, 2026), class action complaint in the Northern District of California (October 6, 2026), ACR measurement study at the ACM Internet Measurement Conference (November 2024).

<!-- stat-card -->
**25** — Preloaded packages one user switched off — On a Xiaomi TV, over a single afternoon, after handing over the model number

<!-- stat-card -->
**192 → 83MB** — Size after replacing the stock launcher — Ad slots gone, swapped for a screen that rotates wallpapers

<!-- stat-card -->
**Twice a second** — Screen capture rate the California complaint alleges — The same value as the 500-millisecond capture interval printed in Samsung's advertiser guide, and the company says it does not record the screen

<!-- stat-card -->
**5** — TV makers Texas sued over ACR disclosure — Samsung and LG settled out; Sony, TCL and Hisense remain

## The Technology That Lifts a Fingerprint from Picture and Sound

Smart TV ACR is short for automatic content recognition. What it does fits in one sentence. The TV works out for itself what is showing on it. The principle is the same as Shazam, which names a song you play to it. Features of the sound or the picture are compressed into a short value to make a fingerprint, and that fingerprint is matched against a reference list held on a server to find the title.

There are two approaches. One lifts the fingerprint from the content itself. In the other, whoever transmits the content plants a marker invisible to the eye every few seconds and the TV reads it. The first approach does not care about format or codec, so video that arrived by any route can be measured with the same ruler.

The difference that matters is which layer the feature runs in. It is not a permission that each app is granted but a function of the TV itself, so whatever you put on the screen can become its subject. Live broadcast, certainly, but also the picture from a games console or a set-top box connected over HDMI falls inside the identification range. This is not a structure you can get out of by deleting one app.

That this is not guesswork has been confirmed by measurement. Researchers at University College London, UC Davis and Universidad Carlos III de Madrid put new Samsung and LG sets on a controlled network, recorded every packet leaving them, and presented the results at the ACM Internet Measurement Conference in November 2024. ACR traffic continued even when the TV was used only as an external HDMI monitor. The TV was reading the screen of a laptop or a games console plugged into it and sending that out. The upload cadence was recorded as well. LG reached its own ACR servers every 15 seconds, Samsung every minute. The rate at which the screen is grabbed is much shorter than that. An LG document the paper cites puts it at 10 milliseconds, and Samsung's advertiser guide at a frame every 500 milliseconds. What it takes is buffered and sent in batches.
