---
title: The Suno and Anthropic Lawsuits Put a Price on the Stripped Songwriter Credit
subtitle: The two complaints music publisher Reservoir filed on 21 October bill the act of stripping the credit on its own, at up to $25,000 a work
date: 2026-10-26
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Suno and Anthropic Lawsuits Put a Price on the Stripped Songwriter Credit

_The two complaints music publisher Reservoir filed on 21 October bill the act of stripping the credit on its own, at up to $25,000 a work_

## Executive Summary

> [!callout]
> This article reads the two complaints music publisher Reservoir filed against Suno and Anthropic in the Northern District of California on 21 October 2026. Together they claim $337.78 million. What is worth looking at is not the total but the fact that the bill arrives in three separate layers. Alongside copyright infringement and circumvention of technical protection, a unit price has been attached to one further act on its own: taking the title, the songwriter, the publisher and the other copyright management information off the work. Erasing the provenance of a piece of data now carries a price tag of its own, set apart from the infringement.

> The opening for these complaints was cut five weeks earlier. On 16 September the Ninth Circuit threw out a claim under the same section aimed at what Copilot **generated**, holding that the section reaches the act of taking the information off a copy that already carried it. In the same ruling it declined to decide whether removal during training counts, and left that question open. Reservoir took exactly that open door, in a court the ruling governs directly.

> The unit price, though, is a ceiling rather than a figure. The statute sets a band of $2,500 to $25,000 a work, and the complaints wrote in the top of the band. So this article does not read the amount as a victory. It reads it back as a data question. Where in a training pipeline does the credit fall off, and which is larger, the cost of carrying it or the price of having erased it? The **facts** here are the amounts claimed, the work counts, the filing date and the structure of the counts, all of them on the face of the complaints. The **reading** is that keeping provenance is moving out of the column marked good practice and into the column that carries a number. The second half belongs to this article.

<!-- stat-card -->
**$47.58M** — Claimed for the stripping of credit alone — $26.25M from Suno and $21.33M from Anthropic. A layer costed separately from the infringement claim

<!-- stat-card -->
**$2,500–25,000** — Statutory damages band per work — The complaints wrote in the top of the band. Pick the floor and it drops tenfold; an innocent violator can have it cut further or waived

<!-- stat-card -->
**98.6%** — Accuracy of recovering whether a track was trained on — The high end in a 2026 study that decided the question by querying the model alone, without looking inside it

<!-- stat-card -->
**72%** — Public datasets missing license information — From an audit of 1,858 datasets. A broken provenance chain is closer to the industry default than to an exception these two companies made

## On 21 October the Bill Came in Three Layers

On 21 October 2026 the music publisher Reservoir filed two complaints in the Northern District of California. The plaintiffs are Reservoir Media Management, its UK entity and Shapiro, Bernstein & Co.; the defendants are the music generation service Suno and Anthropic. The case numbers are 3:26-cv-12305 for Suno and 5:26-cv-12308 for Anthropic. Plaintiffs' counsel is Richard Busch, who ran the 'Blurred Lines' case for the Marvin Gaye estate.

![Phillip Burton Federal Building, home of the U.S. District Court for the Northern District of California where both complaints were filed](./image/img-01-ndcal-courthouse.jpg)
*▲ The Phillip Burton Federal Building in San Francisco, seat of the U.S. District Court for the Northern District of California, where Reservoir filed both complaints | Source: [Wikimedia Commons (CC BY-SA 4.0, Marincyclist)](https://commons.wikimedia.org/wiki/File:Phillip_Burton_Federal_Building_%26_United_States_Courthouse.jpg)*

The two complaints aim at different objects. The Suno complaint identifies **1,050 musical compositions** — the work that the music and the lyrics make together, not the sound recording. The Anthropic complaint identifies **853 sets of lyrics**, which is to say text. The defendants produce different things, so the rights at issue differ too, and adding the two figures into "1,903 songs" mixes the units. The schedules include Joni Mitchell's 'Both Sides Now' and 'Big Yellow Taxi', Johnny Cash's 'Ring of Fire', Madonna's 'Papa Don't Preach', Miles Davis's 'So What' and Glenn Miller's 'In the Mood'.

The money does not arrive as one lump. Each complaint builds three counts on three different provisions, and for each count it multiplies the per-work statutory maximum by the number of works and writes the product down separately. The table below is those three layers. We redid the multiplication and the addition ourselves, and the results match the complaint to the last digit.

| Count | Provision | Max per work | Suno (1,050 compositions) | Anthropic (853 lyrics) |
| --- | --- | --- | --- | --- |
| Direct copyright infringement | 17 U.S.C. §504(c) | $150,000 | $157,500,000 | $127,950,000 |
| Circumvention of technical protection | 17 U.S.C. §1201 | $2,500 | $2,625,000 | $2,132,500 |
| Removal or alteration of copyright management information | 17 U.S.C. §1202 | $25,000 | $26,250,000 | $21,325,000 |
| Total per defendant | — | $177,500 | $186,375,000 | $151,407,500 |

********************************

How the two Reservoir complaints are costed. The Suno complaint states the three amounts in its damages paragraphs (¶83, ¶88 and ¶94); the Anthropic complaint's PDF is behind a wall, so the figures there are the ones four independent outlets reported, matching each other down to the dollar. The two defendants together are being asked for $337,782,500.

The row this article is here for is not the middle one. It is the second from the bottom, in orange. Pull out the money attached to the single act of taking the copyright management information off, and it is $26.25 million from Suno and $21.33 million from Anthropic, roughly **$47.58 million** together. That figure is charged for erasing the label the work carried, independently of whether the work was used without permission.

Two amounts get mixed up here constantly. Summaries that went around right after the filing paired the "$25,000 a song" unit price with "about $28.9 million from Suno," and those two do not belong in the same equation. The $28.9 million is the whole DMCA figure, access-control circumvention and information removal added together; removal on its own is $26.25 million. Put an equals sign between them and the work count stops reconciling when a reader divides back out.

$28,875,000 ÷ $25,000 = **1,155 works** — which does not match the 1,050 compositions the complaint identifies  

                        $26,250,000 ÷ $25,000 = **1,050 works** — this is the information-removal claim on its own  

                        $2,625,000 (circumvention) + $26,250,000 (information removal) = $28,875,000 (DMCA total)

Dividing the two amounts back out shows which one the "$25,000 a song" unit price belongs to. From here on this article uses only the information-removal figure.

Building a claim by multiplying the statutory ceiling by a work count is not something these complaints invented. Nine months earlier, on 29 January 2026, music publishers including Concord Music Group and Universal Music sued the same Anthropic over more than 20,000 scores, lyrics and compositions, seeking more than $3 billion. Divide the two reported figures and you land around $150,000 a work, which is the ceiling the infringement provision sets. What is new in the Reservoir complaints is not the multiplication but running it separately against three provisions, which is what makes the information-removal layer visible as a number.

The scale bears pointing out as well. Reservoir holds more than 150,000 publishing copyrights and 36,000 master recordings. These two complaints identify 1,050 compositions and 853 sets of lyrics; set aside the unit mismatch and any overlap, add them anyway, and you are under 1.3% of the catalog. This is not a suit claiming the whole catalog was infringed. It is a suit that pulled out only what can be proved, and why that choice matters comes back in section 4.

One caveat covers everything below. This is the pleading stage, and no court has found a single fact. The filing date, the court, the case numbers, the amounts claimed and the work counts are on the face of the complaints and can be stated flatly, but whether there was infringement, and whether anyone knowingly took the information off, is something nobody has decided. Where this article carries over an allegation from the complaints, it says so.

## Section 1202 Asks Who Made It, Not Who Used It

Section 1202 of the US Copyright Act bars anyone from casually removing or altering the tag attached to a work. The copyright management information the statute describes covers the title, the name of the author, the copyright owner, the terms of use and the identifying number assigned to the work. Translated into music, that is the song title, the composer and lyricist names, the publisher, and the international standard numbers assigned separately to the recording and to the composition.

The question this provision asks is not the question the infringement provision asks. Infringement asks whether the work was used without permission. Section 1202 asks whether the record of who made it was erased. That is why the two claims sit side by side in one complaint and get costed separately. The table below puts the two questions next to each other.

| Item | Infringement claim | Information-removal claim |
| --- | --- | --- |
| The question it asks | Was the work copied or used without permission? | Was the label the work carried taken off? |
| Provision | 17 U.S.C. §106 · §504(c) | 17 U.S.C. §1202 · §1203(c)(3)(B) |
| Statutory damages per work | Up to $150,000 | $2,500 – $25,000 |
| State of mind | Willfulness raises the ceiling | Acting knowingly is the element itself |
| What the money counts | One work infringed | One violation of removing the information |

The two claims live in one complaint but ask about different facts and are costed separately. They are not fully independent, though. Section 1202 requires that the removal was done knowing it would induce or conceal infringement, so how the infringement side is decided bears on the fate of this claim.

The element is what matters. Section 1202 reaches removal or alteration done "knowingly" or "having reasonable grounds to know." It is not a provision that punishes metadata lost by accident, which means a plaintiff cannot stop at "the tag is gone" and has to plead circumstances supporting "they took it off knowing." That is why the Reservoir complaints spend so long on the details of the collection process, in a place that has nothing to do with the fair use fight.

The complaints plead three strands of such circumstances. Everything in this paragraph is an allegation no court has ruled on. First, the complaints assert that leaked internal Suno source code still contains workflows for scraping YouTube Music and the lyrics site Genius. Second, that commercial proxy services and CAPTCHA-defeating tools were used to get past gated sections. Third, that tracks were run through stem separation — splitting a recording into components such as vocals and backing — and that covers were trained alongside originals. None of the three is about what the model learned. All three are about how the material was taken and what got dropped on the way.

The defendants' side is recorded here as well. Anthropic issued a statement the day after the filing.

"We disagree with the allegations and intend to defend this case vigorously."
                        Source: Anthropic spokesperson, quoted in Billboard, around 22 October 2026

Suno did not respond to requests for comment from several outlets. On the plaintiffs' side, Reservoir chief executive Golnar Khosrowshahi framed the filings as support for technological progress coupled with a commitment to keep protecting the industry's core creative work. Both sides are quoted here for a simple reason. What this article is trying to read is not who wins, but which item got a price attached to it.

## Where in the Pipeline the Credit Falls Off

Put the conduct the complaints describe into data terms and it narrows to one question. At which point in a training pipeline does the credit fall off? Walking through music preprocessing stage by stage to answer that produces an uncomfortable picture. It is less that the pipeline loses the metadata than that it **never accepts it in the first place**.
