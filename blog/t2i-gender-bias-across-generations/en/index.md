---
title: Do AI Image Generators Get Fairer With Each New Version?
subtitle: Northeastern researchers classified 8,000 Stable Diffusion images across four generations: 76.4% male, women 20 to 46 points below their real share of each job
date: 2026-09-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Do AI Image Generators Get Fairer With Each New Version?

_Northeastern researchers classified 8,000 Stable Diffusion images across four generations: 76.4% male, women 20 to 46 points below their real share of each job_

## Executive Summary

> [!callout]
> This article looks at a study that measured which gender an image generation model gives to an occupation, and whether that skew shrinks as model generations turn over. The paper is by Shesh Narayan Gupta and Nik Bear Brown of the College of Engineering at Northeastern University, and it went up on arXiv on September 16, 2026. The authors fed 20 occupations and five sentences that name no gender into four Stable Diffusion versions, pulled out 8,000 images, classified the faces automatically, and set the result beside the proportion of women who actually hold each job, as counted by the U.S. Bureau of Labor Statistics.

> Of the 8,000 images, 76.4% were classified as male. Among the 4,000 images for jobs where women really do hold the majority of posts, such as nurse and preschool teacher, men were still 57.6%. The trajectory is the more striking part. Instead of easing off as the versions advanced, the skew grew from SD 1.5 through SDXL and then came partway back in SD 3 Medium.

> Sections 1 through 5 follow the values the paper measured and the caveats its authors attached themselves. Section 6 carries the question of what a skew has to be measured against over to data practice, and that reading belongs to this article.

### Key figures

Source: [Gupta & Brown, arXiv:2609.18007 (September 16, 2026)](https://arxiv.org/abs/2609.18007)

<!-- stat-card -->
**76.4%** — Of images classified as male — Across all 8,000 images. The 95% confidence interval runs from 75.1% to 78.7%, more than 26 points off the 50% balance line

<!-- stat-card -->
**57.6%** — Male even in female-majority jobs — Counted over the 4,000 images for the ten occupations, nurse and teacher and hair stylist among them, where most real workers are women

<!-- stat-card -->
**82–99%** — Male when asked for a scientist — Labor statistics put 48% of scientists as women. The closer a job sits to even in reality, the further the output ran from it

<!-- stat-card -->
**81.0%** — Male share in SDXL — The highest of the four versions, above the earlier SD 1.5 at 77.0% and above SD 3 Medium at 70.1%, which came later

## What We Don't Check When a New Version Ships

When a new version of one of these image generators lands, what we look at first is fairly settled. Whether the fingers come out at the right count, whether lettering holds together, whether resolution went up, how literally the model takes a prompt. Release notes are written in roughly that order. Who shows up when you ask for a nurse tends not to make the list at all.

Meanwhile we mostly assume the rest took care of itself. The model grew, the training got more careful, so surely skews of that kind eased along with everything else. This paper's title meets the assumption head on. Newer is not fairer.

The blank space here is not there for want of prior work. Bianchi and colleagues showed at FAccT in 2023 that occupational prompts reflect old stereotypes rather than the workforce as it stands now, and the same year Luccioni and colleagues audited male and white dominance systematically across 150 occupations in Stable Bias. Most such studies are a snapshot of a single moment. They cannot answer a question that runs along the time axis, which is whether any of it improves when the version changes.

So the method this paper chose is a plain one. Put four generations inside one experiment, pin the conditions identically, and then measure four times with the same yardstick.

## Twenty Jobs, Five Phrasings, 8,000 Pictures

The design is 4 models × 20 occupations × 5 sentences × 20 images. Multiplied out it gives 8,000 pictures, and 100 of them pile up in every cell where one occupation meets one model. The four versions are SD 1.5, SD 2.1 Base, SDXL Base 1.0 and SD 3 Medium. All four ran in float16 on a single consumer graphics card, an RTX 4060 with 8GB, at 30 inference steps, guidance scale 7.5 and 512×512 resolution, with 20 fixed seeds applied identically to every model and every occupation. The point of tying all that down is to keep differences between versions from mixing with differences in setup.

The 20 occupations split into ten that have historically been male and ten historically female. The first group holds engineer, chief executive, surgeon, pilot, construction worker, scientist, judge, firefighter, mechanic and programmer. The second holds nurse, teacher, receptionist, cleaner, babysitter, librarian, social worker, florist, hair stylist and preschool teacher. None of the five prompts specifies a gender. But neutral wording is no safeguard. Mandal and colleagues reported in 2023 that a neutral prompt can return results more stereotyped than an explicitly gendered one, and this paper cites that finding.
