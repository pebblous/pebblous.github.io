---
title: SPHEREx Names the Eight Detector Artifacts It Found in Orbit
subtitle: A NASA team writes a masking recipe for each artifact and marks where the masking fails, for the next mission flying HAWAII-2RG detectors
date: 2026-08-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# SPHEREx Names the Eight Detector Artifacts It Found in Orbit

_A NASA team writes a masking recipe for each artifact and marks where the masking fails, for the next mission flying HAWAII-2RG detectors_

## Executive Summary

> [!callout]
> The team behind SPHEREx, NASA's all-sky spectral survey satellite, gathered the low-level electrical artifacts it found in the first year of flight data into a single catalog and posted it to arXiv on August 10, 2026. The word they put in the title is bestiary, a medieval book of beasts. What the team delivered is not a set of cleaned-up images but eight named artifacts and a written recipe for masking each one.

> Three of the eight were artifacts that ground testing had anticipated to some degree. The other four showed themselves only after launch, and one of them turned out to be light traveling sideways through the detector material like an optical fiber, reaching more than 270 pixels away from Saturn. The lab had never set up that condition to test it.

> The paper gives equal weight to the places where masking does not work. In front of a planet that no star catalog lists, the source mask can fail to cover the full reach of an artifact, and the persistence question is handed to a follow-up paper with no conclusion attached. Follow those eight entries, their recipes, and the remaining gaps from a data quality seat, and one question stays behind: does your own pipeline have a bestiary like this, or only values you have quietly deleted?

### Key Figures

SPHEREx splits its detectors into two groups by wavelength. The three short-wavelength ones are called SWIR, the three long-wavelength ones MWIR. Of the four numbers below, the first two show how differently those two groups respond to the same artifact, and the last two show how much of the data a single artifact takes away. The unit e⁻/s counts the electrons a pixel collects per second.

Source: [arXiv:2608.09862](https://arxiv.org/abs/2608.09862)

<!-- stat-card -->
**800 vs 4,000** — Pixels erased by snowball halos — An average per detector, with MWIR running five times heavier than SWIR

<!-- stat-card -->
**1.8334** — Type 3 crosstalk coupling in Band 6 — Above 1.0, so the transferred signal grows instead of weakening

<!-- stat-card -->
**270 pixels** — Extended blooming spreading around Saturn — A behavior ground testing never once produced

<!-- stat-card -->
**About 2%** — Images marked for re-observation — The share after a shower of cosmic rays driven by solar activity

## SPHEREx Flags Its Artifacts Instead of Erasing Them

SPHEREx is NASA's satellite for sweeping the entire sky in spectra. It launched on March 11, 2025, and by the time the paper was written it had finished the first year of its observing plan, securing two all-sky spectral maps. The instrument carries six HAWAII-2RG detectors that slice the range from 0.75 to 5.0 micrometers into 102 spectral channels.

Why recording artifacts matters on an instrument like this is written into the paper's own framing. Artifacts left in image space are especially awkward for science that has to measure diffuse light at high precision. The problem is not misreading one bright star. It is measuring a signal spread thinly across the whole sky, which means masking the star is not the end of the job, because the mark that star left inside the detector has to be accounted for too.

Recording is meant literally here. The data SPHEREx sends down carries a flag layer alongside the brightness values. Three basic flags are applied on board, TRANSIENT, OVERFLOW and SUR_ERROR, and ground processing adds observation-dependent marks on top, such as known sources or persistence left by a previous exposure. Combining the three yields six named cases such as late transient or early overflow, and the paper prints the table of those combinations as bit sums in the body. Which pixels to drop from an analysis is settled by reading that table next to the brightness image.

The team documents eight artifacts in all. Counted by group, the ones that first appeared in orbit outnumber the ones the lab called in advance.
