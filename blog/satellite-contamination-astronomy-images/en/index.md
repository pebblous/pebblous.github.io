---
title: Satellite Contamination of Astronomy Images, Measured in 32 Million Observations
subtitle: An object above the IAU brightness limit lands on 15% of 10-second exposures of a 10-degree-square field
date: 2026-09-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Satellite Contamination of Astronomy Images, Measured in 32 Million Observations

_An object above the IAU brightness limit lands on 15% of 10-second exposures of a 10-degree-square field_

## Executive Summary

> [!callout]
> Photograph a patch of sky 10 degrees on a side for 10 seconds and the odds that an artificial object lands on that one frame are 15%. Satellites leaving white streaks across astronomical images is an old story, and this 15% is a count, taken from observations, of how often that happens. Researchers from the IAU Centre for the Protection of the Dark and Quiet Sky (IAU CPS) and the Czech Academy of Sciences sorted through 32 million brightness measurements recorded by a single robotic observatory over the course of 2025 and posted the result to arXiv in early September.

> The starting point is density. Artificial objects brighter than magnitude 7.0, the upper limit set by the International Astronomical Union, sit in the sky at a rate of 0.00076 objects per square degree. That 15% is what you get when you combine this density with a field size and an exposure duration. It is an average over all nighttime hours, so it runs higher near twilight, when most of the sky is still sunlit, and lower near midnight, when the Earth's shadow covers the sky.

> Sections 1 through 3 follow what the paper actually measured and what it held back from claiming, and the data-side response added in Section 4 is this article's reading, not a claim the paper makes.

### Key Figures

Sources: Mallama, Karpov, Cole, [The Impact of Artificial Space Objects on Optical Astronomy as Determined from 32 Million Photometric Observations](https://arxiv.org/abs/2609.02951), arXiv:2609.02951 (2026), Tables 3 and 4 and Section 9 · [IAU CPS](https://cps.iau.org/) tally, checked 6 September 2026

<!-- stat-card -->
**15%** — 10-degree field, 10-second exposure — Odds an object brighter than magnitude 7.0 lands on that one frame

<!-- stat-card -->
**59%** — Odds of seeing one by eye — A satellite falling inside the peripheral annulus under a dark sky

<!-- stat-card -->
**2:1 → 50:1** — Satellites per rocket body — Across the 2020 line, satellites tripled and rockets fell to a seventh

<!-- stat-card -->
**2.33M** — Satellites in constellations still in planning — Filed with the FCC and the ITU, twice the million the paper assumes

## Ten Seconds on a 10-Degree Field Comes to 15%

Astronomers measure brightness in magnitudes. Smaller numbers mean brighter objects, and one magnitude is a factor of about 2.5 in brightness. In a 2024 statement, the International Astronomical Union set an upper brightness limit for satellites at Johnson visual magnitude 7.0. That limit holds for altitudes up to 550 km, and above that height it relaxes with altitude. Apply the equation and it evaluates to magnitude 8.0 at 1,380 km, which is higher than most objects orbiting the Earth. The same statement recommended that spacecraft should not be visible to the unaided eye, and magnitude 6.0 is where the naked eye stops under skies with little light pollution. Six, seven and eight are the three reference points of this study.

Setting a limit does not make it hold. Two of this paper's authors published a study in MNRAS Letters in 2025 that measured the brightness of five constellations, Starlink, OneWeb, BlueBird and China's Qianfan and Guowang, and reported that nearly all of these spacecraft exceed the magnitude 7 limit and that most also exceed the magnitude 6 limit. So what the new paper counts is not whether objects break the limit. It is how often objects that already break it land on a single frame.

![Multiple bright satellite trails crossing a night sky above a sunflower field, Milky Way in the background](./image/img-01-starlink-trails.jpg)
*▲ Trails from several Starlink satellites crossing a single photograph | Source: [Egon Filter, Wikimedia Commons (CC BY 4.0)](https://en.wikipedia.org/wiki/File:StarlinkTrails_Filter_1080.jpg)*

The material is the public database of the Mini-MegaTORTORA (MMT9) robotic observatory in Russia at 43.65N and 41.43E. Operating since 2014, it sweeps the sky through nine channels and records brightness ten times a second. Its magnitudes agree to within 0.1 with the Johnson V band that the IAU used to set its limit, the authors note. The ruler that measures and the ruler that regulates share a scale. From 2025 the team extracted 32 million magnitudes for 11,241 objects in the NORAD catalog. Each sensor covers 99 square degrees, and total observing time for all nine channels during 2025 was 22.3 million seconds. Multiply those by the ten samples taken each second and the sky this dataset swept comes to 22.1 billion square degrees.

The brightness distribution peaks at magnitude 8.5. The decline on the fainter side is a selection effect from instrument sensitivity, and the decline on the brighter side is real, because large objects are genuinely fewer. The authors write that MMT9 records objects very reliably to magnitude 8, frequently to magnitude 9, and sometimes as faint as 10 and 11. Trails fainter than magnitude 8 generally do not spoil astronomical images, so the authors took that sensitivity to be enough for the question at hand.

Divide the observation counts by the sky total and you get density, which comes to 0.00038 objects per square degree for the 8.4 million observations brighter than magnitude 6.0. At magnitude 7.0 there are 16.8 million and 0.00076, and at magnitude 8.0 there are 24.3 million and 0.00110. These values are closer to a snapshot of the sky at one instant. The authors add that where the channels' fields overlap, one satellite can be recorded in both.

To turn density into probability you need how fast objects cross the sky. Thousands of objects sit at different altitudes, so the authors fixed two things to make the computation tractable. Altitudes in large constellations run from 350 to 475 km for Starlink up to 1,200 km for OneWeb, and since Starlink is the most numerous they take 500 km, toward the low end of the range. Astronomers prefer targets near the zenith, so they take the height above the horizon to be 90 degrees. Both choices put the object on the faster-crossing side. The resulting apparent speed is 0.88 degrees per second, and the team laid a grid of cells around the field and ran 1,000 trials per cell to see whether an object would enter during the exposure. The table below is what came out.

| Field side (deg) | 1 s | 2 s | 5 s | 10 s |
| --- | --- | --- | --- | --- |
| 1 | 0.2% | 0.2% | 0.5% | 0.9% |
| 2 | 0.5% | 0.6% | 1.1% | 2.0% |
| 5 | 2.3% | 2.8% | 4.0% | 6.0% |
| 10 | 8.4% | 9.3% | 11.4% | 15.1% |

Probability that an artificial object brighter than magnitude 7.0 enters the field during the exposure (paper, Table 4). The field is given as the length of one side, so 10 degrees means a frame of 100 square degrees. Widening the limit to magnitude 8.0 under the same conditions raises the maximum to 21.2%. The values are averages over all nighttime hours. Source: arXiv:2609.02951.

Reading the table down differs sharply from reading it across. Stretching the exposure tenfold, from 1 second to 10, lifts the probability from 8.4% to 15.1%, not quite a doubling. Widening the field from 1 degree on a side to 10 lifts it from 0.9% to 15.1%, more than sixteenfold. In the approximation the team supplies for values off the table, the field enters raised to the power 1.6 and the exposure to the power 0.4. Wide-field survey telescopes are more exposed to this problem than telescopes that stare for a long time.

Neither direction scales cleanly, and the authors give the reason. Holding the shutter open longer does little for objects far outside the field, because only a narrow range of directions will carry them across it, so the probability cannot climb as fast as the exposure. On the field side, what matters is area rather than the side. Ten times the side is a hundred times the area, yet the probability rises only sixteenfold, and the authors attribute that to the newly included outer objects traveling too slowly to reach the field before the exposure closes.

All observations came from one site, so the sample does not cover every orbital population equally. That is a limit the team records for itself in the paper. And because the public portion of the MMT9 database leaves out Russian objects, the authors sampled every twentieth entry in the NORAD catalog to work out the ratio by country of origin, then applied a correction factor.

## Why Post-2020 Launches Are Brighter

Artificial objects in the sky fall into three kinds. Rocket bodies carry RB in their catalog names, debris objects carry DEB, and everything else is a satellite. The team took the start of 2020 as the beginning of the large constellation era and counted objects launched before and after that line separately. The 1,460 samples drawn for the country correction are the basis of that count.

Within the sample, satellites increased by a factor of 3 while rockets and debris each decreased by about a factor of 7. Loading dozens of satellites onto a single rocket became the norm. Each launch still leaves one rocket body in orbit while the satellite count jumps, so the ratio flips on arithmetic alone.
