# SNS 홍보 글: 맑은 강을 연기로 본 AI

> 소스: story/dataclinic-report-38-forest-fire-story-pb/ko/index.html
> 생성일: 2026-06-09
> URL KO: https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/ko/
> URL EN: https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/en/
> voice: LinkedIn/Twitter → sns-cover · Facebook → reflective

---

## LinkedIn (KO)

산불 감지 AI가 학습 데이터에서 "가장 연기다운 정상 이미지"로 본 것은 안개 낀 산이 아니었다.

붉은 소방차가 선명히 찍힌 맑은 강 항공샷이었다.

이 한 장이 왜 그 자리에 있는지를 이해하려면 데이터 전체를 봐야 한다. 산불 감지를 위해 모은 15,751장 중 82.8%가 연기 이미지였다. 불꽃은 6.8%에 불과했다. 이 불균형이 AI의 "연기 기준"을 조용히 흔들었다.

결과는 정반대의 두 실패로 나타난다. 맑은 하늘에서 헛경보를 울리고, 천천히 번지는 초원 들불은 감지하지 못한다. 같은 데이터로 학습했기 때문이다.

DataClinic은 이 15,751장을 클래스 분포부터 시각 특징 밀도, 임베딩 공간의 이상 분포까지 층위별로 진단했다. 그 균열이 어디서 시작되는지는 데이터 안에 이미 있었다.

↗ 링크는 댓글에

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #Pebbloscope #산불AI #컴퓨터비전 #ForestFire #AI학습데이터 #Kaggle

---

## LinkedIn (EN)

An aerial photo of a clear river, fire trucks visible in the frame and water glinting, ranked among the most "smoke-like" images in a wildfire detection dataset.

That is not a quirk. It is a symptom.

Of the 15,751 images collected to train a Forest Fire detection model, 82.8% were smoke. Flame images accounted for just 6.8%. That imbalance quietly reshaped the model's sense of what smoke looks like — until a cloudless riverside scene passed the threshold.

The trained model carries two opposite failure modes as a result: false alarms on clear skies, and missed detections on slow-spreading grass fires. Both failures trace back to the same data.

DataClinic analyzed all 15,751 images: class distribution, visual feature density, and anomalies in the L3 embedding space. The point where learning begins to drift is already visible in the data, before any model is trained.

↗ Link in comments

#Pebblous #DataClinic #DataQuality #DataJournalism #Pebbloscope #WildfireAI #ComputerVision #ForestFire #TrainingData #Kaggle

---

## Twitter/X (KO)

산불 감지 AI 학습 데이터의 82.8%가 연기다. AI가 "가장 연기다운 정상 풍경"으로 꼽은 건 소방차가 보이는 맑은 강 항공샷이었다. 오탐과 미탐을 동시에 만드는 데이터. DataClinic #38 진단기.

https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/ko/

#페블러스 #DataClinic #데이터품질 #ForestFire

---

## Twitter/X (EN)

82.8% of a wildfire detection dataset is smoke images. The photo ranked most "smoke-like" among normal scenes: a clear aerial river shot with fire trucks. Two opposite failures, one dataset. DataClinic Report #38.

https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/en/

#Pebblous #DataClinic #DataQuality #ForestFire

---

## Facebook (KO)

맑은 강물 위의 항공사진 한 장을 AI가 "연기"라고 봤습니다.

붉은 소방차가 선명하게 찍힌 장면이었습니다.
안개 한 점 없는 맑은 날이었습니다.

그런데 15,751장의 학습 데이터 안에서, 이 이미지가 "정상이지만 연기 특징이 가장 짙은 이미지" 상위권에 올라왔습니다.

처음엔 이상해 보였습니다.
그런데 데이터 전체를 보면, AI의 눈이 왜 그랬는지가 보입니다.

산불 감지를 위해 모은 15,751장 중 82.8%가 연기 이미지였습니다.
불꽃은 6.8%뿐이었습니다.

이 불균형이 학습의 기준을 흔들었습니다.
"연기다움"이라는 개념이 데이터 안에서 조금씩 달라졌고,
AI는 그 달라진 기준으로 세상을 봤습니다.

"이 AI는 맑은 하늘에서 헛경보를 울릴 것이다.
번지는 들불은 놓칠 것이다."

정반대의 두 실패가 같은 데이터에서 나온다는 것.
이번 DataClinic 진단이 가장 조용하게 던지는 질문입니다.

페블러스의 DataClinic은 이 데이터셋 15,751장을 클래스 분포부터 L3 임베딩 밀도 분포까지 층위별로 분석했습니다. 균열이 어디서 시작되는지, 데이터 안에 이미 있었습니다.

https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/ko/

#페블러스 #DataClinic #데이터품질 #데이터저널리즘 #Pebbloscope #산불AI #ForestFire

---

## Facebook (EN)

An AI looked at a photograph of a clear river — fire trucks visible, sunlight on the water — and found it deeply smoke-like.

No fog.
No haze.
A bright aerial shot on a clear day.

Yet within a dataset of 15,751 training images, this photograph surfaced near the top of what the model considered "most smoke-like among normal scenes."

It is not a misclassification so much as a reflection of what the data taught.

Of those 15,751 images, 82.8% were smoke.
Flame images accounted for just 6.8%.

That proportion, quietly and without any single image being wrong, reshaped the model's sense of what smoke looks like.

"This AI would raise false alarms on clear skies.
It would miss a slow-moving brush fire."

Two opposite failures.
One dataset.

DataClinic analyzed all 15,751 images: class distribution, visual feature density, and the geometry of the embedding space. The place where learning begins to drift is already in the data, before a model is ever trained.

Pebblous builds DataClinic to make this drift visible: the question of how data was collected matters as much as how the model was trained.

https://blog.pebblous.ai/story/dataclinic-report-38-forest-fire-story-pb/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Pebbloscope #WildfireAI #ForestFire
