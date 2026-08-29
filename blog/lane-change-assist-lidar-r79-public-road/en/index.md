---
title: Lane Change Assist Fell Short of UN R79 Distance in 6 of 27 Highway Runs
subtitle: European Commission researchers measured a production car on the A31 motorway in France with a roof-mounted LiDAR, without asking the manufacturer for access
date: 2026-08-30
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Lane Change Assist Fell Short of UN R79 Distance in 6 of 27 Highway Runs

_European Commission researchers measured a production car on the A31 motorway in France with a roof-mounted LiDAR, without asking the manufacturer for access_

## Executive Summary

> [!callout]
> A preprint posted to arXiv on 27 August describes a campaign that researchers at the European Commission's Joint Research Centre (JRC) ran on the A31 motorway in France in March 2026. The subject was the lane change assist function of a passenger car already type-approved and on sale. The team booked no proving ground and asked no manufacturer for access. They drove three cars north from Dijon toward Nancy, measured the distance between vehicles with a LiDAR mounted on the roof, and initiated 27 lane changes that way.

> Of the 27, eighteen were completed and nine were suppressed by the system. Six of the eighteen crossed the lane marking while the approaching vehicle sat closer than the critical distance prescribed by UNECE Regulation No. 79. Those are manoeuvres the regulation says should have been suppressed. LiDAR carries its own error, though, and once a position standard deviation of 0.83 m and a velocity standard deviation of 1.40 km/h are carried into the verdict, three of the six survive at a 99% confidence interval.

> The paper does not call the result a set of dangerous events. None of the manoeuvres were perceived as dangerous by the testing personnel, and the conclusions carry the caveat that a single vehicle was tested. So one question comes ahead of whether the number is six or three. Whose hands produce the data that shows whether a regulation was followed?

### Key figures

Source: [Cellina et al. (2026), arXiv:2608.26669v1](https://arxiv.org/abs/2608.26669), main text with Figures 4 and 5

<!-- stat-card -->
**6** — Completed below the R79 critical distance — 33% of the 18 completed, out of 27 attempted

<!-- stat-card -->
**3** — Overshoots held at a 99% confidence interval — The other three reach only 2-sigma

<!-- stat-card -->
**0.83 m** — Position precision of the LiDAR system — Standard deviation; velocity comes to 1.40 km/h

<!-- stat-card -->
**2.3%** — Share of data where both cars held an RTK integer fix — Satellite positioning alone cannot carry a public-road campaign

## Twenty-Seven Lane Changes, Four Outcomes

The campaign followed a full factorial design. The vehicle under test ran at 100, 115 and 130 km/h, and the distance at which the lane change was triggered ranged from 20 to 60 m. The speed limit on this stretch is 130 km/h, which is where the upper bound came from. For each speed combination the team picked three distances, one near the critical distance set by the regulation and one near the minimum activation distance it specifies. The point was to see whether the system actually tells apart the situations where it may change lanes from the ones where it must not, so the boundary was crossed deliberately from both sides. Combinations corresponding to critical situations were repeated several times.

The 27 recorded manoeuvres fall into four groups by outcome. Twelve were completed normally with the distance requirement met, six were completed even though the distance fell short, two were suppressed by the system although the distance was sufficient, and seven were suppressed because the distance was short. That last group of seven is the intended behaviour, the system doing exactly what the regulation asks. For the two suppressed with room to spare, the paper offers driver attention monitoring or excessive precaution by the system as possible causes, and leaves them as conjecture.
