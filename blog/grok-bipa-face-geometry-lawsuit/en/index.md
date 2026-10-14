---
title: Does Grok Measure Your Face When You Upload a Selfie?
subtitle: An Illinois resident uploaded a selfie for a headshot and now says Grok measured the distances between eyes, nose and mouth without written consent. The class action was filed in federal court.
date: 2026-10-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does Grok Measure Your Face When You Upload a Selfie?

_An Illinois resident uploaded a selfie for a headshot and now says Grok measured the distances between eyes, nose and mouth without written consent. The class action was filed in federal court._

## Executive Summary

> [!callout]
> This article reads a class action that Cesar Padilla, a resident of Illinois, filed on October 7, 2026 in the U.S. District Court for the Northern District of Illinois against the company that operates Grok. Padilla uploaded a selfie and asked for a headshot. The pleading takes aim not at that photograph but at the measurements calculated from it: the proportions and distances among eyes, nose, mouth and jawline, collected and stored without written consent.

> The Illinois Biometric Information Privacy Act, the law behind the claim, charges $1,000 for a negligent violation and $5,000 for one that is willful or reckless. Meta paid $650 million under it, which is a large part of why companies feel its weight. None of that means Padilla wins. A suit brought under the same law against X Corp was dismissed in 2024, because the plaintiff never pleaded specifically enough that the image hashes at issue were scans of face geometry capable of identifying a person.

> Everything to this point is what the reporting and the pleading carry. Sections 4 and 5 turn the question toward the intermediate outputs of an image editing pipeline and toward the data inventory, and that turn is neither a party's argument nor a court's finding. It is this article's own reading.

### Key Numbers

Four numbers. The first two are what the law charges for a single violation and the largest sum actually paid out under it. The second two are the number of suits Grok has drawn and the arithmetic the 2024 amendment changed.

Source: [MediaPost](https://www.mediapost.com/publications/article/418648/grok-sued-over-biometric-privacy.html), [Sigma Law Group](https://sigmalawgroup.com/blog/2026-09-09-meta-xai-bipa-ai-training-photos/), and the text of the Illinois Biometric Information Privacy Act (740 ILCS 14).

<!-- stat-card -->
**$5,000** — Per willful or reckless violation — Negligent violations run $1,000, or actual damages where those are larger

<!-- stat-card -->
**$650 million** — What Meta paid to settle under this law — Google Photos settled for $100 million in 2022

<!-- stat-card -->
**Three** — Face-data suits Grok has drawn in about a month — Cook County state court in early September, federal court on October 7 and October 12

<!-- stat-card -->
**Once per person** — How the 2024 amendment counts violations — Before it, every separate collection from the same person could be counted on its own

## Just a Headshot Request

Cesar Padilla, a Grok user living in Illinois, did nothing unusual. A selfie went up with a request for something usable as a headshot, and a few restyled images came back. That is the most ordinary use an image generation service sees. Padilla says there was no sign along the way that Grok was separately measuring the face.

On October 7, 2026 the class action went to the U.S. District Court for the Northern District of Illinois. The complaint describes Grok as having worked "by automatically locating and scanning plaintiff's face, and by extracting geometric data relating to the contours of plaintiff's face and the proportions of, and spatial relationships among, facial landmarks."

![The Dirksen Federal Building in Chicago, home to the U.S. District Court for the Northern District of Illinois](./image/img-01-dirksen-federal-courthouse.jpg)
*▲ The Dirksen Federal Building in Chicago, where Padilla's complaint was filed in the U.S. District Court for the Northern District of Illinois | Source: [Wikimedia Commons (Ken Lund, CC BY-SA 2.0)](https://commons.wikimedia.org/wiki/File:Dirksen_United_States_Courthouse,_Chicago_Loop,_Chicago,_Illinois_(11004376983).jpg)*

One more allegation sits next to that one. The numbers pulled out this way get tied to the user's account, and no public document says when they are deleted. Measuring a face and attaching the result to an account stand as two separate acts in the pleading, and the second runs straight into the retention and destruction clause.

The claim rests on two subsections of Section 15 of the Illinois Biometric Information Privacy Act. One requires a private entity to tell a person in writing, before collecting, that biometric data is being collected, for what purpose, and for how long it will be kept, and to obtain that person's written release. The other requires any private entity holding biometric data to maintain a publicly available written schedule for retention and destruction. Padilla asks for damages, an order stopping further collection, and destruction of what has already been gathered.

The class definition is in the pleading too. It covers every user in Illinois who uploaded a photograph of their own face to Grok and asked for that face to be analyzed, or asked for something to be generated from the photograph. The line runs along what the user requested, not along what the company stored.

The defendant's name is a little confusing. The parties named are SpaceXAI Corp. and SpaceXAI LLC. xAI, which built Grok, merged with X Corp and then moved under SpaceX, and the corporate name changed along the way while the product name Grok stayed put. So people call this a suit against Grok, while the party in court is SpaceXAI. No statement from the company had surfaced as of this writing.

## The Line Between a Photo and a Scan

Read the statute alone and the suit looks like it should fail. The Illinois Biometric Information Privacy Act, written in 2008, lists retina and iris scans, fingerprints, voiceprints, and a "scan of hand or face geometry" as the biometric identifiers it regulates. That same definition then expressly excludes photographs. The definition of biometric information works the same way, excluding information derived from anything the first definition left out. If photographs are out, surely whatever comes from a photograph is out as well.

Defendants have made exactly that argument more than once, and courts have declined it more than once. In Monroy v. Shutterfly the defendant said that excluding information derived from photographs showed the legislature meant to put all biometric data drawn from photographs outside the law. The court read the two definitions apart. Data drawn from a photograph may not be biometric information, and it can still be a biometric identifier, which is to say a scan of face geometry. In Vance v. Microsoft the court likewise set the photograph exclusion aside as beside the point, since the plaintiffs never objected to the company merely holding face photographs. Sosa v. Onfido came out the same way, allowing that data extracted from a face can amount to a scan of face geometry.

The line, then, does not fall on the image. Keeping a photograph sits outside the law, and running that photograph through a face alignment or matching algorithm sits inside it. Two companies can hold the same file, and what each one did with it decides who is liable.
