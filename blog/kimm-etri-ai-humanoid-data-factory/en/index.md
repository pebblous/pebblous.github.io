---
title: At Korea
subtitle: KIMM and ETRI opened the country
date: 2026-11-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# At Korea

_KIMM and ETRI opened the country_

## Executive Summary

> [!callout]
> A place whose only product is the record used to teach robots how to work has opened in Korea for the first time. The Korea Institute of Machinery and Materials (KIMM) and the Electronics and Telecommunications Research Institute (ETRI) built the AI Humanoid Data Factory across 1,000 square meters at KIMM's headquarters in Daejeon, and it opened on November 3. No facility in the country has been devoted to bipedal humanoids alone before this one.

> The way the data gets made is that a person drives the robot by remote control. The demonstration at the opening had robots handling a refrigerator door, laundry and the controls inside a car. The path each robot travels, the movement of its body and its sensor values all become training data. Twelve humanoids are running now, and twenty-five is the 2030 target. The date KIMM gave for letting Korean industry, academia and research institutes use what gets recorded, though, is the end of 2027.

> Sections 1 through 3 follow what the opening announcement, the reporting and the published primary sources say. Section 4, which separates collecting the data from making it usable by anyone else and moves the question toward format and terms of use, is this article's reading.

### Key Numbers

The robot count and the budget are the size KIMM announced. How small a dataset built by teleoperation is next to other fields is an estimate from outside, and the opening date is a schedule that has not happened yet.

Sources: [ZDNet Korea](https://zdnet.co.kr/view/?no=20261103113457) (2026-11-03), [KIMM opening release](https://www.eurekalert.org/news-releases/1150252) (2026-11-04), [The Robot Report](https://www.therobotreport.com/how-to-avoid-teleoperation-trap-robotics-development/) (2026-07-19)

<!-- stat-card -->
**12 robots** — Humanoids running now — Chinese and Korean machines mixed together, including KIMM's own KAIROS. The 2030 target is 25

<!-- stat-card -->
**₩105 billion** — Five-year budget of the research group — ₩21 billion a year from May 2025 to April 2030. The Data Factory is one branch inside it

<!-- stat-card -->
**Under 1/100,000** — Size of teleoperation data — Measured against the data used to train today's language and vision models. Nikita Rudin of Flexion Robotics put the figure there

<!-- stat-card -->
**End of 2027** — When outside access starts — Companies, universities and research institutes get in by stages. The terms for taking the data out have not been published

## The Data Plant That Opened in Daejeon

The body behind the facility is the Global TOP Strategic Research Group for Self-Growing AI Humanoids, which KIMM leads. Chan Hun Park directs it, and ETRI built the site with them. It is one of ten groups the Ministry of Science and ICT and the National Research Council of Science and Technology set up in May 2025 with ₩610 billion between them over five years, and this group's share is ₩21 billion a year, ₩105 billion across the five. The term runs from May 2025 to April 2030. ETRI and the Korea Institute of Industrial Technology take part alongside KIMM, and nine Korean universities including KAIST and GIST plus five research institutes abroad are attached. On the industry side the member list carries A-Robot, Lion Robotics and LG Electronics, and the Korea Robot Industry Association joins as a supporting organization.

What the place is for is exactly what the name says. It does not build robots and it does not train models; it manufactures the data that will teach a robot how to do a job. Securing everything from arm and leg movement to work that uses the whole body, all in one place, is how KIMM describes the use. Seog-Hyeon Ryu, president of KIMM, said at the opening that "securing large volumes of high-quality robot task data is essential to national technological competitiveness."

One piece of background belongs here. When the research group launched, its plan carried a second item paired with the data factory. The group said it would build an open AI platform that shares the data it gathers with outside researchers and takes in AI models built elsewhere, and that the pair of them would make a K-humanoid open ecosystem. What opened this week is the half that makes the data.

## Robots Start at the Refrigerator Door

A person is inside the collection method. An operator drives the robot by remote control to make it do a job, and the movement and task information thrown off along the way get recorded and used for AI training. A second method runs alongside it, in which the robot copies a person's own movements. Either way, the person never steps out. Producing one record takes one person working for its whole length.

The two methods do not leave the same record behind. Teleoperation has a person moving the robot's body directly, so the values that come out of the robot's joints are what gets stored. Motion imitation has the person do the job with their own body while the robot carries that movement over into its own joints, so the work of matching a human body to a robot body goes into the record too. What KAIROS showed at the opening was these two as well, precise object manipulation and full-body motion imitation.
