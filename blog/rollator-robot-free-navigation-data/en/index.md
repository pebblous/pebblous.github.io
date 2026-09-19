---
title: Robots Learn Their Routes From Equipment That Can
subtitle: Northeastern University study — navigation models fine-tuned on 37.2 km of sidewalk routes recorded with a four-wheeled walker cut trajectory prediction error by up to 24.8%
date: 2026-09-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Robots Learn Their Routes From Equipment That Can

_Northeastern University study — navigation models fine-tuned on 37.2 km of sidewalk routes recorded with a four-wheeled walker cut trajectory prediction error by up to 24.8%_

## Executive Summary

> [!callout]
> This article looks at a study that collected robot navigation data without a robot. Sarvesh Prajapati, Ananya Trivedi, Lorena Maria Genua, Drake Moore and Taşkın Padır of the Institute for Experiential Robotics at Northeastern University, together with Bruce Maxwell of the same university's Khoury College of Computer Science, posted it to arXiv on September 17. They call it UNI, the Universal Navigation Interface, a way of gathering the data that teaches a wheeled robot to drive without ever running that robot.

> The instrument is nothing more than a four-wheeled rollator walker anyone can buy, with a smartphone clamped to it. It cannot climb stairs, it cannot mount a curb that was never cut down, and it cannot fit through a gap narrower than itself. So the routes an operator picks narrow, on their own, to the ones a wheel can follow. Six operators covered 37.2 km over 87 sessions in three U.S. cities, and three navigation models fine-tuned on that data cut their trajectory prediction error by 17.4 to 24.8%. The same adaptation did not pay off on every dataset. On one existing corpus performance went the other way, and the authors put that in the table as it stood.

> Sections 1 through 4 follow the design and the numbers the paper reports, along with the limits its authors drew themselves. Section 5 reads that result as a question about what belongs in a dataset's documentation, and that reading belongs to this article.

### Key Figures

Source: [Prajapati, S. et al. (2026), arXiv:2609.20114v1](https://arxiv.org/abs/2609.20114)

<!-- stat-card -->
**37.2 km** — Distance collected without a robot — Six operators recorded it over 87 sessions in Boston, New York City and Worcester. That comes to 10.8 hours of recordings

<!-- stat-card -->
**$250** — Cost of the collection rig — Smartphone excluded. Assembly takes about 30 minutes and uses no 3D-printed parts or custom-fabricated hardware

<!-- stat-card -->
**0** — Stairs and uncut curbs traversed — Suspect stretches were narrowed down from inertial and depth signals, then reviewed on video. No traversal was confirmed

<!-- stat-card -->
**17.4–24.8%** — Drop in trajectory prediction error — Measured on held-out UNI demonstrations after fine-tuning GNM, ViNT and NoMaD on this data

## Robot Data Takes a Robot to Collect

More and more wheeled robots run on public sidewalks. Last-mile delivery, inspection and powered mobility are the standard examples. Learning navigation in those settings takes varied demonstrations recorded on the ground where the robot will work, and gathering those demonstrations is expensive in itself, because a robot platform has to be transported, maintained and supervised. The paper notes that this requirement limits how many locations and conditions an academic group can cover, and adds that data collected by commercial fleets may stay proprietary.

![Autonomous sidewalk delivery robot on a US city sidewalk](./image/img-01-sidewalk-delivery-robot.jpg)
*▲ A sidewalk delivery robot. Collecting navigation data for wheeled robots like this means physically transporting the robot itself to every site | Photo: Phillip Pessar, [Wikimedia Commons (CC BY 2.0)](https://commons.wikimedia.org/wiki/File:Robot_Delivery_Downtown_Miami_FL_20_November_2022.jpg)*

So the attempts to collect without the robot kept coming. One route straps a rig to a person and walks. MuSoHu and EgoWalk were gathered that way. Another is CityWalker, which traces camera motion through online walking and driving video to produce training signal without manual labeling. Both lift most of the burden of operating a robot. But CityWalker handles the scale ambiguity of its trajectories by normalizing them rather than recovering their original metric scale. Wherever the job needs meters, that difference stays.

The trouble sits in the routes people walk. A pedestrian route picks up stairs, curbs that were never cut down, and narrow gaps. A wheeled robot gets through none of them. One sentence in the paper is where the whole study starts. Filtering those routes afterward cannot recover the wheeled-feasible alternatives that were never demonstrated.

Manipulation ran into the same problem first. UMI collected demonstrations without a robot using a hand-held proxy gripper, while keeping the physical constraints that matter to the task. The idea spread from there to aerial manipulation and to contact-rich, tactile work. The question the authors pose carries that line over to navigation. Can one simple physical proxy enable robot-free collection while tilting human demonstrations toward routes a wheel can follow?

## A $250 Rollator and an iPhone With LiDAR

The answer they built is plain. A commercial four-wheeled rollator walker, a standard phone mount, a smartphone. Assembly runs about 30 minutes, with no 3D-printed parts and no custom-fabricated hardware. Roughly $250 with the smartphone left out. The operator pushes the rig with all four wheels on the ground. Ramps and curb cuts get picked over stairs and uncut curbs, and a passage narrower than the frame is out of reach from the start.

![A four-wheeled rollator walker](./image/img-02-four-wheel-rollator.jpg)
*▲ A commercial four-wheeled rollator of the kind the paper uses. Clamp a smartphone to it, and that is the entire data-collection rig | Photo: DirkvdM, [Wikimedia Commons (CC BY 3.0)](https://commons.wikimedia.org/wiki/File:Rollator.jpg)*

This constraint has force because it is an object rather than an instruction. Instructions can go unfollowed, and checking whether they were followed is hard. Earlier work already said as much. EgoWalk, gathered with a rig worn on the body, acknowledged that human demonstrations may include robot-infeasible maneuvers despite explicit collection guidelines, and MuSoHu named gait-induced motion and viewpoint mismatch as its limits. Four wheels at the foot of a staircase leave nothing to argue about. The diagram below marks where two routes across the same ground part company, one walked on foot and one walked behind a rollator.
