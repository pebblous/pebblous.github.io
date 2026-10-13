---
title: CrowdWorks Builds Robot Training Data With a Human at the Controls
subtitle: When a person wears VR equipment and steers the robot, the movement becomes training data. The 300 million datasets the company cited are not a count of robot data alone
date: 2026-10-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# CrowdWorks Builds Robot Training Data With a Human at the Controls

_When a person wears VR equipment and steers the robot, the movement becomes training data. The 300 million datasets the company cited are not a count of robot data alone_

## Executive Summary

> [!callout]
> This article reads the physical AI training data platform CrowdWorks unveiled at AI Festa 2026 at Coex in Seoul on October 7, 2026, alongside the question of whose hands actually make that data. What the company put in its booth was not a finished robot but a collection process. A person wears VR equipment and operates a robot by remote control, and the resulting movement is recorded and processed into training data.

> At the same event the company said it has secured 300 million cumulative mission datasets through 670,000 data workers so far. That sentence sits inside a paragraph introducing the robot data platform, but the figure itself does not count robot action data alone. The same metric starts at 300,000 workers in 2021 and climbs to this year's 670,000 as a company-wide running total, and nowhere in the announcement is it written down what was added together.

> The facts and figures in this article come from reporting by ZDNet Korea and Venture Square, from coverage of the LG Electronics data factory, and from an in-depth report on data labeler pay in Korea Data Economy News. The pay statistics in section 3 survey the labeling industry as a whole and are not figures CrowdWorks disclosed. The turn toward data quality in section 4 is nobody's claim but this article's reading.

### Key numbers

Four numbers, pulled out. The first two are the cumulative figures CrowdWorks put forward this time, and the third is the target set at the site where this data accumulates. The fourth is what this kind of data work pays, a figure surveyed across data labeling in Korea rather than one CrowdWorks disclosed.

Sources: [ZDNet Korea (2026-10-07)](https://zdnet.co.kr/view/?no=20261007173141), [Etoday](https://www.etoday.co.kr/news/view/2615451), [Korea Data Economy News](https://www.dataeconomy.co.kr/news/articleView.html?idxno=35503).

<!-- stat-card -->
**670,000** — Data workers — A company-wide cumulative membership count carried forward from 300,000 in 2021

<!-- stat-card -->
**300 million** — Cumulative mission datasets — Every field added together since the 2017 founding; the robot share is not written down

<!-- stat-card -->
**100,000 hours** — LG Electronics' robot data target for this year — About 12 years' worth if you convert it to round-the-clock days

<!-- stat-card -->
**9,860 won** — Average real hourly pay for data labelers — An industry-wide survey figure, below this year's minimum wage of 10,320 won

## The Hand on the Controls Belongs to a Person

CrowdWorks is an AI training data company that opened in 2017. It has built image and text data the way people build it, attaching labels and checking them by hand, and in August 2023 it became the first training data platform company in Korea to list on Kosdaq. This year it set up a physical AI data lab inside the company to research and field-test multimodal data that runs in real environments, and it has opened regional bases in South Gyeongsang Province and Ulsan to serve as physical AI hubs. What it brought out this time is a product that widens that work to the movements of a robot.

At AI Festa 2026, held at Coex in Seoul from October 6 to 8, the company took a booth in the physical AI and robotics special hall on the third floor, Hall C. What stood on display was the process by which data gets made, not a robot. A worker wears VR equipment and operates a robot remotely, the operation carries over into the robot's movement, and the company showed the whole path of collecting, processing and verifying the physical action records that come out of it.

The product on the booth is called the Physical AI Data Platform. By the company's own description, the range it covers does not stop at remote operation. Action data generated in simulation environments comes into the same process. The scene at the booth was one path among those.

What comes in is not used as it arrives. The company leads with how it cuts collected actions into four levels. One large job is held as a task, the situation it happens in as a scenario, the steps inside it as subtasks, and the smallest unit of movement as an action. The purpose it gives for the hierarchy is to turn operation records that pile up at random into a form a foundation model can learn from directly, and to raise processing efficiency.

Ahead of the exhibition, a CrowdWorks representative said that whether physical AI succeeds rests on how precisely high-quality physical action data can be secured. The diagram below follows one case inside that effort, the one where a person steers the robot directly.
