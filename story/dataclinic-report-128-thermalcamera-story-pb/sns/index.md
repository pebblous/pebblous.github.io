# SNS 홍보 글: AI가 '누출'을 정상으로 보는 순간 — 산업 안전 열화상 122만 장 DataClinic 진단기

> 소스: story/dataclinic-report-128-thermalcamera-story-pb/ko/index.html
> 생성일: 2026-06-09
> URL KO: https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/ko/
> URL EN: https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/en/
> voice: LinkedIn/Twitter → sns-cover | Facebook → reflective

---

## LinkedIn (KO)

이송배관 누출이 정상 분포의 가장자리에 있습니다.

산업단지 화재·누출 감지용 열화상 122만 장을 DataClinic으로 진단했습니다. 차원 최적화(1,280→120차원)로 정상과 이상의 분리 지표가 3배 가까이 확대됐습니다. 그런데 이송배관-이상-누출의 분포는 이상 군집이 아니라 정상 군집의 가장자리에 걸쳐 있습니다.

같은 배관도 1m에서 찍은 열화상과 30m에서 찍은 열화상은 패턴이 다릅니다. 촬영 거리와 각도가 표준화되지 않으면, 알고리즘은 "이상"과 "정상의 다른 앵글"을 구분할 방법이 없습니다.

라벨에서도 같은 구조의 문제가 확인됩니다. 사람-이상-식별 클래스의 고밀도 상위권을 자동차 촬영 파일이 점령하고 있습니다. bbox 라벨이 잘못 배정된 흔적입니다.

차원 최적화가 해결하는 것과, 촬영 표준화가 선행되어야 하는 것을 가른 진단이었습니다.

↗ 링크는 댓글에
#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #AIHub #열화상AI #산업안전

---

## LinkedIn (EN)

Pipeline leak images end up in the normal cluster.

DataClinic diagnosed 1.22 million industrial thermal images across 20 classes — collected by AI Hub to detect fires, chemical leaks, and dangerous heat events. Dimension optimization, compressing from 1,280 to 120 dimensions, tripled the normal-anomaly separation index. Yet pipeline leak images settled at the edge of the normal distribution, not inside the anomaly cluster.

The reason: the same pipe photographed from one meter looks different from thirty meters away. Without standardized capture distance and angle, an algorithm cannot reliably distinguish a genuine leak from a normal pipe viewed at an unusual angle.

A secondary issue surfaced in the labeling. The top-density images inside the "human-anomaly-identification" class are files from a car-anomaly shoot — evidence of bounding-box labels assigned to the wrong class.

Pebblous uses DataClinic to map where algorithms can gain traction and where camera-level standardization must come first.

↗ Link in comments
#Pebblous #DataClinic #DataQuality #DataJournalism #ThermalImaging #IndustrialSafety #AIHub #ComputerVision

---

## Twitter/X (KO)

122만 장 산업 열화상을 DataClinic으로 진단했습니다. 차원 최적화로 정상/이상 분리 지표가 3배 확대됐지만, 이송배관 누출은 정상 분포의 가장자리에 머뭅니다.

알고리즘이 풀 수 있는 것과 촬영 표준화가 선행되어야 하는 것을 가른 진단입니다.

https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/ko/
#데이터클리닉 #DataClinic #열화상AI #산업안전 #AIHub

---

## Twitter/X (EN)

DataClinic diagnosed 1.22M industrial thermal images. Dimension optimization tripled the separation index, yet pipeline leak images remain at the edge of the normal cluster.

Some problems need better algorithms. Others need better cameras first.

https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/en/
#DataClinic #DataQuality #ThermalImaging #AIHub

---

## Facebook (KO)

이송배관 누출 이미지가 정상 클러스터의 가장자리에 있다는 사실을, 저는 처음에 그냥 넘기지 못했습니다.

산업단지 화재·누출 감지를 목적으로 구축된 122만 장의 열화상 데이터셋을 DataClinic이 분석했습니다.

차원 최적화는 기대대로 작동했습니다.
1,280차원에서 120차원으로 줄이자, 정상과 이상의 밀도 분리 지표가 3배 가까이 확대됐습니다.

그런데 이송배관-이상-누출의 분포는 이상 군집 쪽이 아니라 정상 군집의 가장자리 쪽에 놓였습니다.

"이 누출 이미지가 정상으로 분류될 수 있을까?"

그럴 수 있습니다.
같은 배관도 1m에서 찍은 패턴과 30m에서 찍은 패턴이 다릅니다. 촬영 거리와 각도가 표준화되지 않으면, 알고리즘은 '이상'과 '정상의 다른 앵글'을 구분할 방법이 없습니다.

페블러스가 DataClinic으로 이 질문을 이어가는 이유가 여기에 있습니다.
어디까지가 알고리즘의 문제이고, 어디부터가 데이터 수집 방식의 문제인지를 먼저 가르는 것.

https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/ko/

#페블러스 #DataClinic #데이터클리닉 #열화상AI #산업안전 #AIHub #데이터품질

---

## Facebook (EN)

There is a thermal image of a pipeline leak that sits at the edge of the normal distribution.

Not in the anomaly cluster.
At the edge of the normal one.

DataClinic analyzed 1.22 million industrial thermal images from AI Hub — collected specifically to detect fires, leaks, and dangerous heat events. When the feature space was compressed from 1,280 to 120 dimensions, the separation between normal and anomaly classes nearly tripled. That part worked.

But the pipeline leak images landed near normal.

The reason is not algorithmic failure.
It is a measurement problem.

The same pipe photographed from one meter looks different from thirty meters away. Without standardized capture distance and angle, an algorithm cannot distinguish a genuine leak from a normal pipe viewed at an unusual angle.

"Can this leak be classified as normal?"

It can. And that question carries a particular weight in industrial safety.

This is the kind of diagnostic work DataClinic is built for — drawing the line between what better algorithms can solve and what better data collection must resolve first.

https://blog.pebblous.ai/story/dataclinic-report-128-thermalcamera-story-pb/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ThermalImaging #IndustrialSafety #AIHub
