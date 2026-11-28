---
title: HubEgo-100K Releases 10,000 Hours of On-the-Job Video for Robot Learning
subtitle: 12,227 workers filmed their jobs, but no robot has learned from it yet
date: 2026-11-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# HubEgo-100K Releases 10,000 Hours of On-the-Job Video for Robot Learning

_12,227 workers filmed their jobs, but no robot has learned from it yet_

## Executive Summary

> [!callout]
> Hub Labs, a San Francisco company, has published the first release of [HubEgo-100K](https://huggingface.co/datasets/HubLabs/HubEgo-100K), a first-person video dataset for robot learning, on Hugging Face. It holds 10,124 hours of unscripted 1080p video shot by 12,227 contributors wearing a phone on their heads while doing their own jobs. 82.6% of it was filmed at work rather than at home. The license is CC BY 4.0, which allows commercial use.

> The accompanying [arXiv paper](https://arxiv.org/abs/2611.21938) picks six data properties that earlier studies linked to robot policy performance and measures each one on its own dataset. At least one hand is visible in 94.7% of frames, and no single contributor accounts for more than 0.22% of the hours. What the paper does not contain is any experiment that actually trains a robot policy on the data. The authors say they will add one in a later version.

> According to the Hugging Face card, a second release on November 23 brought the total to 20,113 hours, and the goal is 100,000. For companies collecting Physical AI data, the useful benchmark is not only the hour count but which properties were measured and documented alongside it.

### Key Figures

Source: [HubEgo-100K: In-the-Wild Egocentric Video of Skilled Work for Robot Learning](https://arxiv.org/abs/2611.21938) (arXiv:2611.21938, 2026-11-16) · [Hugging Face dataset card](https://huggingface.co/datasets/HubLabs/HubEgo-100K)

The first card shows the size of Release 1, the second and third show data properties the paper measured itself, and the fourth shows what the paper does not have yet.

<!-- stat-card -->
**10,124h** — Release 1 video — 82.6% shot at work. 20,113 hours in total after Release 2

<!-- stat-card -->
**94.7%** — Frames with a hand visible — At least one hand. Both hands: 76.3%. Model-estimated

<!-- stat-card -->
**0.22%** — Largest share from one contributor — None of the 12,227 contributors exceeds 0.22% of total hours

<!-- stat-card -->
**0** — Robot policy training runs — The paper says baseline experiments will come in a later version

## Hub Labs' First HubEgo-100K Release

Six Hub Labs researchers posted the HubEgo-100K paper to arXiv on November 16. The paper covers version 1.0, which the Hugging Face card calls Release 1. Release 1 contains 10,124 hours of video, 72,754 episodes and about 1.09 billion frames, recorded by 12,227 contributors across 15,548 work environments.

Recording locations fall into 11 types: ten are workplaces and one is the home. By the paper's count, 82.6% of Release 1 was filmed at work and 17.4% at home. Tasks are sorted into 30 categories and 56 task types. Contributors received no script. They filmed themselves doing their usual work with a phone mounted on their heads.

Where the footage was shot is what sets it apart from earlier first-person video datasets. Research egocentric video usually shows everyday chores at home or staged tasks in a lab. HubEgo-100K mostly shows real job sites for hands-on trades, which is what "Skilled Work" in the paper's title refers to.

The "100K" in the name is a target. The abstract says the dataset will grow in stages to 100,000 hours, and the Hugging Face card says Release 2, on November 23, added 9,990 hours and 9,032 contributors. Across both releases the dataset now holds 20,113 hours of video, 124,991 episodes, 21,259 contributors and 28,104 work environments, 83.9TB in all. Hub Labs has not said when it expects to reach 100,000 hours.

## HubEgo-100K Spec Table

The sensor rig is a single phone worn on the contributor's head. Its ultra-wide camera records 1920×1080 video in H.264. The Hugging Face card gives the frame rate as 30fps; some recordings made at 60fps were re-encoded to 30fps. The phone's accelerometer and gyroscope were logged at 100Hz and interpolated to each video frame. The table below lists the specs we confirmed in the paper and the card.

| Item | Details |
| --- | --- |
| Sensors | One head-mounted phone: ultra-wide camera, accelerometer, gyroscope. The raw sensor logs also include magnetometer/heading (99.1% of episodes) and barometer (93.6%) |
| Sampling rates | Video 1920×1080 H.264, 30fps (per the card) · accelerometer and gyroscope 100Hz |
| Time sync | Inertial readings are interpolated to video frame timestamps. Cleaning step 7 measures frame intervals, duplicate frames and clock drift and stores them with the data |
| Labels | Added automatically by vision-language models. Each episode gets an action family (1 of 35), a skill cluster (1 of 18), difficulty (easy, medium, hard), location type, a short caption (7.4 words on average) and step-by-step instructions (35.2 words on average). Instruction steps carry no timestamps. There are no robot actions (joint or gripper commands) |
| Tasks | 30 task categories · 56 task types · 35 action families · 18 skill clusters · 11 location types (10 workplace, 1 home) |
| Scale (Release 1) | 10,124 hours of video · 72,754 episodes · 12,227 contributors · 15,548 work environments · 82.6% workplace |
| Scale (Releases 1+2) | 20,113 hours of video · 124,991 episodes · 21,259 contributors · 28,104 work environments · 83.9TB (per the card, updated November 23) |
| Formats | LeRobot v3 (video, tabular data, metadata) + MCAP (full raw sensor logs) + parquet tables for the catalog, annotations and episode browsing |
| License | CC BY 4.0. Commercial use allowed with attribution ("HubEgo-100K, Hub Labs (Hub Data, Inc.)"). Downloading requires a short request form |
| Documentation | A datasheet in the format of Gebru et al. (2021), in Appendix A of the paper |
| Policies or models trained on it | None. Neither the paper nor the card reports results for any policy or model trained on this data |

▲ HubEgo-100K specifications. | Source: [arXiv:2611.21938](https://arxiv.org/abs/2611.21938) · [Hugging Face card](https://huggingface.co/datasets/HubLabs/HubEgo-100K)

LeRobot is Hugging Face's robot learning library, and data in its format can be read with the same tools as robot datasets. MCAP is a sensor log file format used in robotics. HubEgo-100K ships both: a LeRobot version cleaned up for training, and an MCAP version that keeps every sensor value the phone recorded.

## Nine Cleaning Steps and Privacy

The paper describes nine steps from recording to release. Contributors' raw footage is not published as is. For each step, the paper states what gets dropped and what stays.

1. **Capture**: record 1080p H.264 video together with the phone's sensor logs.
2. **Mount check**: filter out footage not shot from the head.
3. **Temporal segmentation**: a vision-language model keeps only the stretches where someone is doing the task with their hands.
4. **Hand-visibility gating**: two models mark whether hands are visible at one frame per second, and recordings where hands are mostly off-screen are removed.
5. **Privacy detection and cutting**: described in the paragraph below.
6. **Episode assembly**: the remaining segments are grouped into episodes, split if longer than 30 minutes. 60fps recordings are re-encoded to 30fps.
7. **Integrity and sync checks**: frame intervals, duplicate frames and clock drift are measured and stored.
8. **Task rebalancing**: the distribution across the 56 task types is adjusted.
9. **Annotation and packaging**: labels are added and the data is packaged as LeRobot v3 and MCAP.

For privacy, the team chose cutting over blurring. Any stretch showing children, other people's faces, or sensitive text such as documents, screens, cards or license plates was cut out entirely, along with five seconds on either side. Recordings where a face fills most of the frame, episodes in which a minor was detected, and tasks that involve caring for another person's body were dropped altogether. Audio, location data, device identifiers and contributor identities were removed, and contributor and recording IDs were replaced with pseudonymous strings. Phone make and model remain as capture metadata. The paper says contributors consented to their recordings being used to train and evaluate AI and robotic systems.

The authors flag a limitation of step 8 themselves. Because task proportions were evened out, the task mix in the dataset does not match how often those tasks happen on real job sites. They recommend evaluating separately under the conditions of the environment where a model will be deployed.

In our reading, these nine steps pair up with the measurements in the next section. Step 4 removed recordings where hands were hard to see, so the share of frames with a visible hand comes out high. Step 8 evened out the task mix, so hours are spread evenly across the 56 task types. Much of what the quality numbers show was settled when the filtering criteria were chosen, not discovered by measuring afterwards. When reading a measured value, it helps to look at the cleaning step that produced it.

*▲ Pebblous original diagram — how two of the nine cleaning steps shape the measurements in Section 4*

## Six Data Properties, Measured on HubEgo-100K

The paper selects six data properties that robot learning research has linked to policy performance: environment and object diversity, first-person human video, hand visibility and curation, task coverage and the long tail, contributor diversity, and inertial sensing. Next to each one it lists the value measured on HubEgo-100K. The strength of the evidence differs from property to property. For two of the six, the authors say the link to robot policies has not yet been tested.

| Property | Evidence the paper cites | HubEgo-100K v1.0 measurement |
| --- | --- | --- |
| Environment and object diversity | Lin et al. (2025): generalization follows a power law in the number of environments and objects. That study used handheld-gripper demonstrations | 15,548 work environments, 11 location types, median of 268 environments per task type. Objects were not counted |
| First-person human video | R3M, EgoMimic, GR00T N1 and others: pretraining or co-training on human video improves manipulation | 10,124 hours, about 1.09 billion frames. 72.8% of hours are in episodes longer than 10 minutes |
| Hand visibility and curation | Long et al. (2026): raw Ego4D scores below a robot-data-only baseline, while hand-filtered clips beat it. The gap is roughly 1–2 percentage points | At least one hand visible in 94.7% of frames, both hands in 76.3%, on-task 96.9% (all model-estimated) |
| Task coverage and long tail | RT-1: dropping 25% of tasks costs about as much as cutting 49% of the data. In contrast, Long et al. (2026) found no consistent gain from more diversity at a fixed budget | 56 task types, 30 categories, 35 action families. The last 10% of hours adds about 84 new nouns |
| Contributor diversity | robomimic: 300 demos from six operators of mixed skill gave a lower success rate than 200 demos from one expert. The authors note there is no controlled study yet that varies the number of demonstrators in egocentric pretraining | 12,227 contributors, largest single share 0.22%, 2,824 contributors with at least one hour |
| Inertial sensing | IMU2CLIP and others: helps activity recognition. The authors say its effect on robot policies has not been studied | Accelerometer and gyroscope in 100% of episodes, magnetometer/heading 99.1%, barometer 93.6% |

▲ The six data properties the paper selects, with v1.0 measurements. | Source: [arXiv:2611.21938](https://arxiv.org/abs/2611.21938)

The first four properties rest on outside experiments. Many of those experiments, though, used demonstrations collected with robots or handheld grippers rather than first-person human video, and the authors say they used these studies only to choose which properties to measure. The hand-visibility effect is small, around 1–2 percentage points, and on task coverage the paper also cites a contrary result: more diversity at the same budget brought no consistent gain.

The last two properties rest on weaker ground. On contributor diversity, the authors call the evidence "less direct", and the robomimic result they cite is actually a case where demonstrations from several people lowered performance. On inertial sensing, its effect on robot policies is, in the authors' words, "not yet studied". HubEgo-100K does log accelerometer and gyroscope data for every episode, but nobody has yet measured whether those logs are useful for robot learning.

The table also notes that most of these values are model estimates. Hand visibility was scored by two vision-language models looking at one frame per second, and the labels were also added by models. We could not find, in the body of the paper, a rate at which humans re-checked a sample.

## No Robot Has Been Trained on HubEgo-100K Yet

Section 6 of the paper says, "The data is action-free." The video carries no action values a robot could imitate, such as joint angles or gripper commands. The action-family labels classify what the person in the video is doing, and the inertial readings record how the phone, and so the head, moved. Neither is a robot action. HubEgo-100K alone therefore cannot train a robot policy.

The authors suggest three ways to use it: co-training, where it is mixed with a small amount of robot data; pretraining, where a model learns from human video first and is then fine-tuned on robot data; and training only a visual encoder on the video. [Z-sight](/blog/z-sight-latent-world-model/en/), covered earlier in this series, is an example of the second approach: it pretrained its model backbone on about 1,977 hours of first-person human video.

The paper itself reports no such training on HubEgo-100K. The authors say they will train baseline models on contributor-disjoint splits: a visual encoder pretrained on this data, and a policy co-trained with robot data. They write, "Later versions of this paper will add these experiments." For now, the six properties in section 4 are measurements of the data. Whether those values carry over into robot performance is for the next version's experiments to show.

> [!callout]
> What HubEgo-100K v1.0 establishes, then, is the state of the data. How often hands are visible, how widely contributors are spread and how complete the sensor logs are have all been measured. How well a robot trained on that data moves has not.

## Release 2's 20,000 Hours and Physical AI Data Collection

On November 23, a week after the paper appeared, HubEgo-100K's second release added 9,990 hours. The paper's measurements cover Release 1 only, so no figures have been published yet on whether hand visibility or contributor spread hold at the same level in Release 2. The Hugging Face card puts the cumulative workplace share at 84% and the commercial-facility share at 45%.

So is adding hours enough? The evidence the paper itself cites says no. In Lin et al. (2025), the number of distinct environments and objects mattered more for generalization than the number of demonstrations per environment, and in Long et al. (2026), more diversity within the same budget produced no consistent gain. Release 2 did not add hours alone, either. Work environments grew from 15,548 to 28,104 and contributors from 12,227 to 21,259. The hour count keeps rising, but that number on its own does not prove quality.

Pebblous is interested in how this paper is put together. Rather than leading with scale, a dataset paper picked the properties earlier research tied to performance, measured each one on its own data and published the results as a table. Measuring and recording the state of data item by item before it is used for training is the same work as the data quality diagnosis Pebblous does in its [Data Greenhouse](/blog/ai-tool-vs-data-greenhouse/en/). The difference lies in the checklist. Instead of general items such as accuracy or completeness, the paper sets items specific to robot learning, such as whether hands are visible and whether contributors are evenly spread.

What companies collecting Physical AI data can take from this paper is two tables: the spec table in section 2 and the property table in section 4. If, alongside the hours collected, they measure and record the following three things, they can trace back what made the difference once training results come in.

- The share of frames where hands or a gripper are visible, and whether that share was scored by a model or checked by people
- The largest share of total hours from any one operator, and the number of work environments
- Logging rate per sensor, and time-sync error against the video

[ScaleVLA](/blog/scalevla-backbone-scaling/en/), earlier in this series, looked at growing the model so it needs fewer demonstrations, and the previous article, [Z-sight](/blog/z-sight-latent-world-model/en/), covered a model pretrained on first-person human video. HubEgo-100K is news from the other side: the raw material such models draw on.

The table below sorts the content of this article by the weight of its source.

| Type | Content |
| --- | --- |
| Confirmed | Figures for scale, sensors, formats and license; the nine cleaning steps; the privacy handling; the measured values and cited evidence for the six properties; the absence of policy training experiments; the Release 2 figures. Checked against the arXiv paper and the Hugging Face card |
| Authors' claims | The judgment that the six properties are a yardstick for this data's training value belongs to the authors. For contributor diversity and inertial sensing, the authors themselves say the link to robot policies is untested. Most measured values, including hand visibility, are model estimates. The paper is a v1 that has not been peer-reviewed |
| Pebblous interpretation | Treating the per-property measurement table as the same work as data quality diagnosis, the reading that much of the measured values are set by the filtering criteria, and recommending three measurement items to companies collecting data are Pebblous' interpretation. The paper does not take data quality diagnosis as its subject |

<!-- stat-card -->
**Editor's Note** — Figures were checked against v1 of the paper on arXiv and the Hugging Face dataset card. We did not review the detailed items of the datasheet in Appendix A. The 30fps frame rate and the 84% cumulative workplace share appear only on the card. Downloading the dataset requires a request form, so we did not open the files to reproduce the measurements. The paper lists the authors' affiliation as Hub Labs (San Francisco), while the attribution line names Hub Data, Inc.

This article is the dataset entry (PA-1) in the [Physical AI series](/series/physical-ai/en/). The other articles in the series are collected on the series hub, and the previous one is [Z-sight Lets a Robot Imagine the Next Scene Without Drawing It](/blog/z-sight-latent-world-model/en/).
