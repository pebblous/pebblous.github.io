---
title: How Do You Know Two Photos Show the Same Star?
subtitle: The Spitzer Data Fusion merges 4.4 million sources in eight fields, with matching radii of 1 to 12 arcseconds and every catalog aligned to 2MASS first.
date: 2026-09-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How Do You Know Two Photos Show the Same Star?

_The Spitzer Data Fusion merges 4.4 million sources in eight fields, with matching radii of 1 to 12 arcseconds and every catalog aligned to 2MASS first._

## Executive Summary

> [!callout]
> Dozens of different telescopes have photographed the same patch of sky, over and over. Every survey left its records behind under its own source extraction, its own astrometric solution, its own photometric convention, its own flag definitions and its own file format. A short data paper posted to arXiv on September 16 gathers those records object by object into a public database. This article looks at the rules underneath that merge.

> The database holds 4.4 million sources across 65 square degrees, with measurements running from the far ultraviolet to the far infrared. The number worth watching is not the source count but the radius. The distance that decides whether two detections belong to one object changes band by band, set at 1 arcsecond in the shorter infrared bands and opened out to 12 arcseconds at the longest. A telescope draws a blunter point as the wavelength grows. One step had to be finished before any of those numbers came into play. Every input catalog is registered against the 2MASS frame first, which strips out the systematic offsets between frames. Without that correction, the paper states, the reliability of cross-identification at a fixed radius is limited by exactly those offsets.

> Sections 1 through 5 follow what this paper, its companion paper and the release documents actually say. Section 6 carries the same decisions across to enterprise data, and that reading belongs to this article. Where the body adds an inference, it says so at the spot.

### Key figures

Source: [Vaccari, arXiv:2609.18694 (September 16, 2026)](https://arxiv.org/abs/2609.18694)

<!-- stat-card -->
**4.4 million** — sources merged into one record each — Eight fields, 65 square degrees. Far-ultraviolet through far-infrared flux lands on a single row

<!-- stat-card -->
**1″ → 12″** — matching radius, widened by wavelength — 1 arcsec at IRAC 3.6 and 4.5 μm, 12 arcsec at MIPS 160 μm. A factor of twelve

<!-- stat-card -->
**1″** — one radius for every ancillary catalog — Ultraviolet, optical, near-infrared and far-infrared catalogs attach at the same radius, no matter the wavelength

<!-- stat-card -->
**2.8 million** — sources in the deeper cut — The same procedure applied to 18 square degrees of SERVS imaging, as a companion product

## A Sky Shot Over and Over Leaves Bookkeeping

Selection at mid-infrared wavelengths remains one of the most robust ways to assemble large samples of galaxies that are close to stellar-mass-selected, over wide areas and out to high redshift, because the correction applied for redshift is favorable there and varies slowly across much of the relevant range. That is the background to the extragalactic fields that the Spitzer Space Telescope swept with IRAC and MIPS during its cryogenic mission. Those fields, and the SWIRE fields above all, became reference laboratories for galaxy evolution, and ancillary data from the ultraviolet to the radio has piled up on the same sky ever since.

That richness comes at a cost, the paper writes. A single field is covered by dozens of independent surveys, and each survey carries its own source extraction, astrometric solution, photometric convention, flag definitions and file format. Building a coherent band-merged catalog for even one field takes substantial bookkeeping. That work gets duplicated across research groups, and it is rarely documented in enough detail to be reproducible.

> [!callout]
> So this database offers no new observation. It holds one pre-merged, astrometrically registered multi-wavelength catalog per field, each carrying a release number that can be cited. The same procedure ran on every field, and it was written down. Not one patch of sky here was newly photographed.

Eight fields, 65 square degrees in total. The six SWIRE fields (ELAIS-S1, XMM-LSS, CDFS, Lockman Hole, ELAIS-N1, ELAIS-N2), plus the Boötes field of the Spitzer Deep, Wide-Field Survey and the Spitzer Extragalactic First Look Survey (XFLS). The paper gives two grounds for that selection: the depth and breadth of the ancillary coverage, and the continuing prominence of these fields in Herschel, radio, Euclid and Rubin survey programs.

![Composite image of a SWIRE field combining Spitzer IRAC infrared (green, red) with Isaac Newton Telescope visible light (blue)](./image/img-01-swire-galaxies.jpg)
*▲ An actual multi-wavelength composite of a SWIRE field — green and red are Spitzer IRAC infrared, blue is visible light from the Isaac Newton Telescope. This is exactly what it looks like when the same sky is shot by different instruments | Source: [NASA/JPL-Caltech/C. Lonsdale (Caltech/IPAC) and the SWIRE Team](https://www.spitzer.caltech.edu/images/2375-sig05-019-A-SWIRE-Picture-is-Worth-Billions-of-Years)*

## How Close Is Close Enough to Be One Object?

Band merging starts at the short wavelengths and proceeds outwards, and the radius at each step matches the angular resolution of that band. The 3.6 and 4.5 μm catalogs are associated with a 1 arcsecond radius, and those positions become the positional reference. The 5.8 and 8.0 μm catalogs then attach to those positions within 1.5 arcseconds, and the MIPS 24, 70 and 160 μm catalogs within 3, 6 and 12 arcseconds respectively.
