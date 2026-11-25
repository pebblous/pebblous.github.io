---
title: Can Open-fMIND Match the UK Biobank Using Only Public Brain Scans?
subtitle: Researchers reprocessed 322 public brain scan studies into one 4.35TB release, and a model trained on it ties or beats the UK Biobank in three of six tasks
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Open-fMIND Match the UK Biobank Using Only Public Brain Scans?

_Researchers reprocessed 322 public brain scan studies into one 4.35TB release, and a model trained on it ties or beats the UK Biobank in three of six tasks_

## Executive Summary

> [!callout]
> Building a large model on brain imaging has meant reaching for a cohort like the UK Biobank, which you get to only through an application and a review. A public release now pushes against that assumption. [Open-fMIND](https://arxiv.org/abs/2611.21215) gathers 322 functional magnetic resonance imaging (fMRI) studies that sat scattered across the public repository OpenNeuro, runs every one of them through a single version of the same preprocessing tool (fMRIPrep 25.2.3), and publishes the result as 4.35TB. Not one new scan was taken.

> The evidence the authors offer is a comparison experiment. They pretrained one brain model on this corpus and another of the same architecture on the UK Biobank, then put both through six downstream tasks. The public corpus came out ahead on two, level on one, and behind on three. Saying it comes close to a gated cohort holds; saying it is equal would overstate the result. All three encoders were pretrained exactly once, so the small gaps call for more caution still.

> Sections 1 through 5 set out what the paper, the dataset card and the code repository state, together with the limits the authors wrote down themselves. Section 6, which asks what this corpus adds for anyone preparing data for AI training, is this article's own reading.

### Key figures

Sources: Barbano et al., [the Open-fMIND paper](https://arxiv.org/abs/2611.21215) (arXiv:2611.21215) · [the dataset card](https://huggingface.co/datasets/cbarbano/open-fmind)

Four numbers cover what went into this corpus, what came out of it, how far it reached and where it stopped.

<!-- stat-card -->
**Zero** — New brain scans acquired — Every input was already public on OpenNeuro. What went in was compute and a specification

<!-- stat-card -->
**4.35TB** — Reprocessed and released — About 2.38 million timeseries across 52 atlases, plus one connectivity matrix each

<!-- stat-card -->
**3 of 6** — Tasks where it ties or beats the UK Biobank — Ahead on two, level on one. The other three trail by 1.1 to 2.9 points

<!-- stat-card -->
**2,637** — Participants lost before the finish — Of the 14,016 downloaded, the share fMRIPrep could not carry all the way through

## Not a single new scan went in

OpenNeuro is a public repository where brain imaging researchers deposit their raw data alongside their papers. More than a decade of deposits has pushed it past several thousand studies, but each one is small, often a few dozen participants, and the state in which it arrives varies. Some groups uploaded preprocessed derivatives, others the output straight off the scanner. Even the names for the same brain region differ from study to study. The data is there but cannot be used as it stands, and that is what "we don't have enough data" usually looks like from up close.

What Open-fMIND did was strip one layer off that state. The authors pulled human fMRI datasets from OpenNeuro and reprocessed the 322 that survived curation through a single version of fMRIPrep, 25.2.3. fMRIPrep is a widely used preprocessing tool in the field: it corrects head motion and places every brain in the same standard coordinate space. Here everything was resampled onto the 2mm grid of the MNI152 template in one pass, and the whole job ran inside a version-pinned container so that the execution environment matched too.

Then comes parcellation. Working voxel by voxel across a whole brain is unwieldy, so a predefined map groups the brain into dozens or hundreds of regions and one timeseries is extracted per region. That map is called an atlas. Open-fMIND used 52 atlases, from a 7-region one up to a 1,024-region one, and ran every run through all 52. Rather than leave the atlas choice to the user, it precomputed the entire menu.

How many families those 52 came from is where the two sources part. Table 2 of the paper counts 14 parcellation families (Schaefer 14, Yan 12, DiFuMo and BASC 5 each, Smith and Tian 3 each, Harvard-Oxford and Yeo 2 each, and six more families with one apiece), while the dataset card says 15. The paper is the source that lists a count per family, so that is the count used here. Either way, what matters to a user is that the 52 are not spread evenly across families, and that skew comes back in section 5.

That is what went in. The shape of what came out sits in the table below, in the order anyone should ask about a dataset: size, how it was collected, labels, license, known defects.

| Item | Open-fMIND, first release |
| --- | --- |
| Size | 322 studies, 11,379 participants, 45,731 functional runs, 6,044 hours of acquisition in total. The runs split into 8,756 resting state and 36,975 task-based. About 2.38 million timeseries across 52 atlases and the same number of connectivity matrices, 4.35TB in all |
| Collection | Nothing was newly scanned. A query against OpenNeuro's public API returned 1,066 human fMRI datasets, 387 of which were downloaded and reprocessed through a single version of fMRIPrep, 25.2.3. Denoising regresses out 26 confounds — 24 head motion terms plus white matter and cerebrospinal fluid signal — and keeps only the 0.01 to 0.1Hz band |
| Labeling | Nothing was newly labeled. The task names recorded by each original study under the BIDS specification are carried over as they stand, and for every (dataset, task) pair a single entry records whether it is resting state or task-based, in task_type_mapping.tsv. The task names themselves were not harmonized across studies |
| License | No single license covers the whole corpus. CC0 for 251 datasets, PDDL for 34, none stated for 30 (treated as CC0 under OpenNeuro's upload terms), CC-BY-SA for 3, CC-BY for 2, CC-BY-NC for 1, other for 1. Check individual datasets in LICENSES.tsv. The MIT license on the code repository covers the code only |
| Known defects | No run was excluded for motion. For 17 datasets no snapshot of the source version survives, so the latest version at download time was assumed. Sex is known for 69.4% of participants and age for 71.7%, with a median age of 24.0, skewing toward young adults. Differences arising from scanner and site remain, and fMRIPrep ran without FreeSurfer surface reconstruction |

````

Read the top two rows alone and this is a story about size, but what the corpus actually offers is the bottom three. Where the labels came from, how many license types are in play, what was deliberately not filtered out: all of it travels with the files as a record. Each run carries a sidecar JSON holding the name of the atlas used and the order of its region labels, the repetition time, the confound set, the bandpass window, the motion threshold, the number of volumes removed and the motion metrics. On top of that sits a processing chain with the software versions and the commands that ran, the accession number and version of the source OpenNeuro dataset, and the digest of the fMRIPrep container. This part outlives the performance numbers.

## Which losses does the paper explain?

In work that takes a public repository as raw material, the number that matters most is not the final size but the attrition. What dropped out, and why, defines the character of what remains. Open-fMIND's curation is written up step by step in the paper, and laid out in order it comes to four bars.
