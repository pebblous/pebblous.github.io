---
title: What Do You Feed a Robot?
subtitle: Re-ranking the five layers of data behind robot learning by quality, diversity, reusability, and physical fidelity
date: 2026-08-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What Do You Feed a Robot?

_Re-ranking the five layers of data behind robot learning by quality, diversity, reusability, and physical fidelity_

## Executive Summary

> [!callout]
> Multimodal foundation models learn from the text and images already piled up on the internet. Robots can't. A robot needs data where observation, physical state, and action are paired inside a single closed loop, and that pairing doesn't exist on the web — it has to be collected directly from a specific robot. That makes robot data fundamentally scarce and expensive, and it means the real bottleneck is not the policy algorithm but _what you fed it_: the composition of the data. This report introduces a frame for thinking about that composition.

> The strongest evidence that the bottleneck is data composition comes from one experiment. On a fixed task, pushing demonstrations from 200 to 500 lifts the success rate by only about +8 points, but adding human-centric data at the same scale lifts it by up to +52 points. What you mix matters more than how much you collect — it sets the ceiling on capability. A survey compiled jointly by 11 institutions builds this insight into a five-layer hierarchy. From the highest-alignment real-robot data down to the most scalable general web data, with UMI, egocentric video, and simulation bridging the middle, each layer is then re-ranked by four yardsticks: quality, diversity, reusability, and physical fidelity.

> So the question a Pebblous reader should ask is not "which model should I use?" but "where does my robot data sit in this pyramid, and which layer do I need to reinforce?" This report reads the five layers and four yardsticks as a self-diagnosis frame.

<!-- stat-card -->
**+52 pts** — Mixing vs. +8 pts from scaling — Blending heterogeneous data beats brute-force volume

<!-- stat-card -->
**65 → 95%** — Human-to-robot mix ratio — Success rises monotonically as human-video share climbs

<!-- stat-card -->
**0 → 94%** — Success split by alignment — Same robot: zero-shot → fine-tune → contact-aware alignment

<!-- stat-card -->
**1M+** — OXE trajectories · 22 embodiments — Flagship scale of the general layer (Open X-Embodiment)

## Why Robots Can't Learn from the Web: The Scalability–Alignment Tension

The reason language and image models improved so explosively over the past few years was simple. You scraped the text and photos already piled up on the internet and scaled up. Data was effectively free, and the only question was how well you could digest it. Robots can't reuse that formula. What a robot is trying to learn is a closed loop: "in this scene, what do I see, what state is my body in, and so what force did I apply and how?" Observation, physical state, and action have to be bundled together as a paired unit, and that pairing isn't lying around anywhere on the web. A YouTube cooking video doesn't come labeled with the angle and force with which a hand gripped the pot.

This pairing requirement is what makes robot data fundamentally scarce and expensive. And it creates a tension unique to robot data. To collect a lot of data, you have to leave your specific robot behind — scraping web video, filming people doing things by hand, generating rollouts in a simulator. But the further out you go, the more that data diverges from your robot's arm length, joint count, gripper shape, and contact physics. Conversely, to raise alignment by having a person teleoperate your robot one trajectory at a time, you get accuracy but at a pace so slow and costly that scale is blocked. Pull on one end and the other comes with it. This is the axis that runs through the entire report: the tension between **scalability and robot alignment**.

> [!callout]
> That is why the picture this survey draws is not a flat "taxonomy" of five data types laid side by side, but a "pyramid" in which the scalability of the lower layers holds up the scarcity of the upper ones. The word _hierarchy_ matters. Real-robot data is accurate but always in short supply, and that shortfall is filled from below by the scalability of simulation, web, and human video. Since no single layer solves everything, the question is not "which data is best?" but "which layers do I stack, and in what proportion?"

One thing up front: this report is one of a set of three robot-data reports Pebblous has published recently. The earlier [robot dataset landscape](/report/robot-physical-ai-datasets-landscape/en/) covered the common format that six representative datasets like OXE and DROID follow, and the [closed-loop curation report](/report/robot-data-curation-closed-loop-gap/en/) covered how to select and mix data you've already collected and validate it on real hardware. This piece sits upstream of both, addressing a meta-frame: **which source types should you invest in in the first place?** The problem of assembling datasets, the problem of cooking data, and — before either — the problem of choosing what to use as ingredients. This report is the third. So terms like physical fidelity and reproducibility carry over the definitions the first two pieces established.

The anchor source is the survey "Data Pyramid for Embodied Manipulation" (arXiv 2607.24744), compiled jointly by 11 institutions in July 2026. That survey laid out a skeleton that arranges the data used in robot manipulation learning into five layers and re-ranks them along four criteria, and this report re-reads that skeleton from a Pebblous reader's self-diagnosis angle.

## The Five Layers: From Real Robots to the General Web

Let's read the pyramid top to bottom. The higher you go, the tighter the alignment with your robot; the lower you go, the more data you can collect. At the very top is **real-robot data** — trajectories obtained by having a person teleoperate the robot directly or guide it hand-in-hand (kinesthetic teaching), so that your robot's observation, state, action, and contact are perfectly paired. Open X-Embodiment (OXE), for example, unified 1M+ trajectories collected from 22-plus embodiments into a single format, while DROID captured 86 tasks in the wild across 76,000 trajectories and roughly 350 hours. AgiBot World gathered 1M trajectories from 100 humanoids. It doesn't look small, but compared with the trillions of tokens a language model swallows, it is still several orders of magnitude short. This is the accurate-but-always-scarce layer.

Below it comes **UMI-style data**. UMI (Universal Manipulation Interface) is a handheld gripper a person carries around without any robot. Because it records only the motion of the gripper tip (the end effector), it collects manipulation motion at low cost and high speed without being tied to a specific robot body. On a cup-tidying task, UMI collects data more than 3× faster than teleoperation, and it can even record demonstrations of dynamic throwing motions that a person could never perform remotely. It is the first bridge between real-robot accuracy and scalability.

Third is **ego- and exo-centric human video**. A camera mounted on a person's head captures everyday manipulation in first person (ego), or from the outside in third person (exo). Ego4D holds 3,670 hours and Ego-Exo4D 1,286 hours of large-scale human-activity video. There are no robot action labels, but human dexterity and situational diversity are overwhelming. In the HumanEgo experiment, human ego video showed roughly 3.75× the sample efficiency of robot teleoperation. This is the layer that borrows human hands as a textbook for the robot.

Fourth, **simulation** is scalability incarnate. Inside a physics engine you vary scenes, objects, lighting, and friction at will and stamp out data endlessly. NVIDIA's GR00T pipeline reported augmenting a small set of human demonstrations to produce, in 11 hours, a volume that would take 6,500 hours in the physical world — a 591× compression. The catch is the performance gap between sim and reality, the sim-to-real gap. Depending on task difficulty this gap ranges from -11 points to -87 points, and we look at what that number really means in the next section.

At the very bottom is **general web / vision-language (VLA) data**. All of the internet's text, images, and video belong here. It contains no robot action at all, but in return it supplies meaning and common sense endlessly — "a cup is a thing that holds drinks," "you stop at a red light." When RT-2 co-trained web data alongside robot data, generalization to unseen objects rose from 32% to 62%. This is the layer with the highest scalability and near-zero physical alignment.

Stack these five layers into a single picture and you see why the "pyramid" metaphor is precise. Higher up, alignment is high, so the layers are narrow and precious; lower down, scalability is large, so they are wide and common.

The five-layer robot-learning data pyramid. Toward the top (real robot), alignment with your robot is high, so layers are narrow and precious; toward the bottom (general web), scalability is large, so they are wide and common. Each layer's representative dataset scale is cross-checked against the primary sources in the References. Skeleton source: arXiv 2607.24744.

## Re-Ranking with Four Yardsticks

The layer order alone can't tell you "what to mix and how much." Being higher in the pyramid doesn't make real-robot data always better. So the survey re-measures the five layers with four different yardsticks. **Quality** asks how clean and successful the demonstrations are; **diversity**, how widely objects, scenes, and tasks are spread; **reusability**, how well the data transfers to other robots and other tasks; and **physical fidelity**, how honestly the data reflects real physics (contact, force, inertia). The definitions of physical fidelity and reproducibility carry over exactly from the two previously published reports.

Measure with four yardsticks and the ranking flips from one to the next. Real-robot data is best on quality and physical fidelity but worst on reusability and scalability. General web data is overwhelming on diversity but has essentially no physical fidelity. Simulation, being infinitely generable and controllable, scores high on diversity and reusability, but the sim-to-real gap erodes its physical fidelity. The table below stands the five layers side by side against the four criteria. The key point: no layer comes first on every yardstick.

| Layer | Quality | Diversity | Reusability | Physical fidelity | In a line |
| --- | --- | --- | --- | --- | --- |
| ① Real robot | High | Low | Low | High | Accurate but always scarce |
| ② UMI-style | Mid | Mid | Mid | Mid | Low-cost, high-speed first bridge |
| ③ Ego/exo video | Mid | High | Mid | Low | Human dexterity, but no action labels |
| ④ Simulation | Mid | High | High | Mid | Infinite generation, sim-to-real gap |
| ⑤ General web / VLA | Mid | High | High | Low | Infinite meaning/sense, no physics |

The five layers re-ranked against the four criteria (quality, diversity, reusability, physical fidelity). High/Mid/Low summarize the survey's relative assessment — read them as relative positions between layers, not as absolute cell values. Sources: arXiv 2607.24744 and each dataset's primary paper (see References).

### 3.1. Why the Bridge Layers Are Needed

Read the table vertically and an interesting fact surfaces. Real robot (highest alignment) and general web (highest scalability) are opposite extremes, and the middle is filled by UMI, ego video, and simulation. Those middle layers are the "bridges." UMI supplies manipulation motion without a robot, ego video supplies dexterity without a robot, and simulation supplies physical rollouts without a robot. All three make data that is "not as accurate as real robots, but far cheaper and faster, and far closer to physics than the web," filling the empty space between the extremes. The reason the pyramid doesn't collapse lies in these bridges.

### 3.2. "Fast and Plentiful" Is Not "Useful"

There is, however, a common trap in valuing the bridges: mistaking collection speed for data efficiency as if they were the same axis. UMI collects data more than 3× faster than teleoperation. But that means **collection throughput** is fast — not that each collected sample is more efficient for training. In fact, one study (EgoGuide) points out that UMI may require up to 5× more episodes than teleoperation to reach the same success rate. Data gathered fast and in bulk is not guaranteed to be that valuable per unit. Throughput and training efficiency must be kept separate, and that very distinction is the reason to diagnose and curate data.

## The Capabilities Data Builds — and the Cells Still Empty

In the end there is one reason to split the layers and measure them with yardsticks: each layer instills a different **capability** in the robot. Robot manipulation intelligence splits roughly into five strands — perception that recognizes a scene, reasoning that reads a situation, planning that sequences the steps, action generation that produces the actual forces and trajectories, and world prediction that foresees "if I do this, the object will move like that." And these capabilities are inherited from different layers. If some capability is weak, that is a signal that the layer supplying it is empty in your data.

The rough correspondence is this. General web carries meaning and common sense, building perception and reasoning; real-robot data supplies precise action generation; and simulation handles world prediction through physical rollouts. Ego/exo human video and UMI add dexterity and motion diversity in between. The diagram below shows which layer flows into which capability.

Data layer → robot capability mapping. The thick orange line marks the primary supplier of that capability. This is a conceptual diagram: it shows dominant contribution, not exclusive correspondence. Skeleton source: arXiv 2607.24744.

### 4.1. The Arithmetic of Mixing: Blend, Don't Just Collect More

If capability is inherited from layers, the path to raising performance is not "collect more" but "mix in the layer for the capability you lack." The numbers nail this down. On a fixed task, pushing demonstrations from 200 to 500 lifts the success rate by only about +8 points. But co-training human-centric data in at the same scale lifts it by +52 points. Adding a spoonful of a different kind of data is more than six times as effective as inflating your data by two and a half times. The HumanEgo experiment shows this as a curve: raising the human-video share of the training data to 0%, 25%, 50%, 75%, 100% pushed real-world success up monotonically — 65 → 72.5 → 77.5 → 90 → 95%. A policy pre-trained on OXE's mixed multi-robot data (RT-1-X) was on average about 50% better than one trained in isolation.

> [!callout]
> These numbers are the proof of this report's central claim. What sets the ceiling on robot intelligence is not "which algorithm you used" but "which layers you mixed and in what proportion." If leaving the algorithm untouched and changing only the data composition moves the result by +52 points, the real lever is not the model but the data recipe.

(Left) On the same task, scaling demos from 200 to 500 yields +8 points; mixing in human-centric data at the same scale yields +52 points. (Right) HumanEgo: raising the human-video share of training data from 0% to 100% pushes real-world success up monotonically from 65% to 95%. Original Pebblous diagram (reinterpretation). Source: arXiv 2607.24744; HumanEgo arXiv:2605.24934.

### 4.2. What Splits the Gap Is Alignment, Not the Source

If mixing is the answer, the remaining question is "how do you mix?" Here a common misconception creeps in — that simulation or other robots' data is unusable because it differs from your robot anyway. It's true the sim-to-real gap is no joke when you move sim to reality: -11 points on a light task, up to -87 points on a demanding one like RoboDojo's 18 real-world tasks. This is a spectrum too wide to summarize as a single "simulation costs you N points."

Yet the deciding variable was not the gap between sources but whether an alignment technique was applied. The zero-shot success rate of training on another embodiment's data and applying it straight to your robot swings across the whole range, from 0% to 94%. The apple-picking task on the same humanoid (G1) is the case in point. Zero-shot it was 0%; with standard fine-tuning it rose to 48%; add contact-aware alignment and it reached 94%. The data source and the robot stayed the same, yet alignment alone split the result from 0 to 94. Reports that topping sim pre-training with a small amount of real-data fine-tuning recovers 60–80% of the remaining gap tell the same story. Choose and mix the layers well — but the alignment recipe that bridges them is what decides success or failure.

### 4.3. The Cells Still Empty, and the Industry's Diverging Bets

The pyramid hasn't filled every cell. The survey flags six open problems: the shortage of tactile/force data, the scarcity of failure-recovery demonstrations, the lack of scalable collection pipelines, cross-embodiment alignment between different robots, the problem of transferring human dexterity to robot hands, and — running through all of them — data recipe design. None is solved by algorithms alone; all share the common trait of being questions of "what data do you assemble, and how do you mix it?"

So the industry has already split its bets across different layers, and that choice defines the business model. Tesla, Figure, Physical Intelligence, and AgiBot invest in high-volume real-robot teleoperation — though Tesla, in mid-2025, shifted from teleoperation to helmet-style first-person rigs, moving its weight toward the ego layer. NVIDIA bets on large-scale simulation generation with Isaac and GR00T, combining synthetic and real data, and GR00T N1 goes so far as to arrange its training data in a pyramid shape (less volume but higher embodiment specificity toward the top). Hugging Face's LeRobot stands on the open-ecosystem side, growing public robot datasets from 1,145 to more than 58,000 in about two years — nearly 50×. "Which layer to invest in" is already the industry's battleground.

> [!callout]
> The empty cells and the industry's diverging bets point to the same place. Competition has now moved from "a better policy algorithm" to a question of data composition: "which layers do I stack, in what proportion, with what alignment?" And no one can answer this question for you — the answer changes with your robot, your task, and the terrain of the data you already hold.

## The Pebblous View: Where Does My Robot Data Sit in the Pyramid?

The "scalability ↔ alignment" axis this survey sets up, and the vocabulary of the four criteria, overlap almost exactly with the language of AI-Ready Data that Pebblous has long spoken. We touch on that overlap briefly from four angles.

### Where Business and Technology Intersect

The survey's starting point is a data reality: "robots require data where observation, state, and action are paired, and so scalability and alignment are in tension." That sits at the dead center of Pebblous's Physical AI business, because which data source you invest in and in what proportion you mix them set the practical ceiling on a robot's capability. Among the five layers, the simulation layer touches PebbloSim, mix ratio and quality diagnosis touch DataClinic, and judging alignment and completeness between sources touches precisely the vocabulary of AI-Ready Data.

### A Data-Quality Lens

The insight that data-source composition grows a robot's perception, reasoning, planning, action generation, and world prediction each differently is the robot-side proof of the proposition that "data quality and composition determine a model's internal capabilities." The four axes — quality, diversity, reusability, physical fidelity — map one-to-one onto the AI-Ready Data quality vocabulary, and physical fidelity in particular ties directly to the sim-to-real gap (-11 to -87 points) of synthetic and simulated data. The §3.2 distinction that "collected fast and in bulk" does not guarantee "usable data" is exactly the reason diagnosis and curation are needed.

### What It Means for Customers and Partners

Robot and Physical AI teams keep hitting the same wall: real-robot teleoperation is expensive, simulation has a gap, and the web has no action. So which recipe do you mix? Among the six open problems, data recipe design, cross-embodiment alignment, and failure-recovery data are concrete pain points a diagnosis-and-curation service can address directly. The numbers — mixing +52 points vs. scaling +8 points, and 0% to 94% depending on whether alignment is applied — quantify the "value of diagnosing a recipe."

### How Pebblous Is Positioned

Where the two earlier reports covered "which datasets exist (the landscape)" and "how you validate that data (closed-loop curation)," this piece addresses the step upstream of both: "what do you use as ingredients (layer selection)." Read as a set, the three form one flow — layer selection → dataset standardization → closed-loop validation. If the bottleneck of robot intelligence is data composition, Pebblous stands in the place that diagnoses that composition and puts it on an evidentiary footing.

> [!callout]
> What this report wants to leave the reader with is a single question: "In which layer of this pyramid is my robot data concentrated, and which layer is empty?" Trace back a weak capability and the empty layer comes into view; aiming at that layer, what to feed next becomes your next action. The question of what to feed a robot is, in the end, the work of diagnosing a data recipe.

**Pebblous Data Communication Team**  
August 1, 2026

## References

### Source Survey · Academic Papers

- 1."[Data Pyramid for Embodied Manipulation](https://arxiv.org/abs/2607.24744)." Joint survey by 11 institutions, July 2026. arXiv:2607.24744. Source of this report's five-layer, four-criteria, six-open-problem skeleton. HF: [huggingface.co/papers/2607.24744](https://huggingface.co/papers/2607.24744).
- 2.Open X-Embodiment Collaboration. "[Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)." arXiv:2310.08864. 1M+ trajectories, 22+ embodiments (count varies by aggregation method; conservative figure shown). RT-1-X mixed pre-training +50%.
- 3.Khazatsky, A. et al. "[DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset](https://arxiv.org/abs/2403.12945)." RSS 2024. arXiv:2403.12945. 86 tasks · 76K trajectories · ~350 hours. Official: [droid-dataset.github.io](https://droid-dataset.github.io/).
- 4."[AgiBot World Colosseo](https://arxiv.org/abs/2503.06669)." IROS 2025. arXiv:2503.06669. ~1M trajectories · 2,976 hours · 100 humanoids.
- 5.Chi, C. et al. "[Universal Manipulation Interface (UMI)](https://arxiv.org/abs/2402.10329)." arXiv:2402.10329. Handheld gripper, 3×+ collection speed vs. teleoperation. Official: [umi-gripper.github.io](https://umi-gripper.github.io/).
- 6."[HumanEgo](https://arxiv.org/abs/2605.24934)." arXiv:2605.24934. Human-to-robot mix ratio rising monotonically 65→95%; human ego video 3.75× sample efficiency.
- 7.Grauman, K. et al. "[Ego4D](https://ego4d-data.org/)." CVPR 2022 (3,670 hours). And "[Ego-Exo4D](https://ego-exo4d-data.org/)" (1,286 hours · 5,035 takes). Large-scale human ego/exo-centric video.
- 8.Brohan, A. et al. "[RT-2: Vision-Language-Action Models](https://robotics-transformer2.github.io/)." Web co-training raised unseen-object generalization 32→62%.

### Industry Releases · Datasets

- 9.NVIDIA. "[GR00T N1: An Open Foundation Model for Generalist Humanoid Robots](https://arxiv.org/abs/2503.14734)." arXiv:2503.14734. 591× compression of synthetic demonstrations, +40% from combining synthetic and real, pyramid-shaped data arrangement.
- 10.Hugging Face. "[LeRobot](https://github.com/huggingface/lerobot)." Public robot datasets 1,145 → 58,000+ (about two years, open ecosystem).

### Pebblous Series (Adjacent)

- 11.Pebblous. "[What Common Format Do Six Well-Known Robot Datasets Follow?](/report/robot-physical-ai-datasets-landscape/en/)" 2026-07-16. Dataset landscape (series part 1).
- 12.Pebblous. "[We Mixed In Perfect Data and the Robot Got Worse](/report/robot-data-curation-closed-loop-gap/en/)" 2026-07-17. Closed-loop curation (series part 2).
