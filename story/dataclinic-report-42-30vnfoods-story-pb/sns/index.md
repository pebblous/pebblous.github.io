# SNS 홍보 글: 같은 사진에 이름표가 둘

> 소스: story/dataclinic-report-42-30vnfoods-story-pb/ko/index.html
> 생성일: 2026-06-08
> URL (KO): https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/ko/
> URL (EN): https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

베트남 음식 17,581장을 진단했더니, 같은 사진에 이름표가 두 개 붙어 있었다.

반지오와 반베오는 서로 다른 음식이고 다른 클래스다. 그런데 DataClinic이 임베딩 공간에서 들여다보자 두 클래스가 가리키는 이미지 한 쌍이 픽셀 수준에서 동일했다. 1,280차원 분석에서도, 61차원으로 줄인 뒤에도 여전히 서로의 최근접 이웃이었다.

노이즈 라벨은 차원 최적화로 해소되지 않는다. 모델은 같은 사진을 두 개의 정답으로 배운다.

두 번째, 세 번째 균열도 작지 않았다. 아기가 든 반쯩, 개가 배경인 반미처럼 음식이 주인공이 아닌 사진들. 반짱느엉 고밀도 상위 5개가 전부 같은 포장마차의 동일 앵글인 단일 출처 과의존.

이 규모의 데이터셋도 균열이 생기는 방식은 달라지지 않는다.

↗ 링크는 댓글에: https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #노이즈라벨 #이미지분류 #30VNFoods #베트남음식

---

## LinkedIn (EN)

The same photograph appeared in two separate classes of a 17,581-image Vietnamese food dataset.

Banh gio and Banh beo are labelled differently. But in the embedding space, one image pair was identical at the pixel level and remained each other's nearest neighbour even after compression to 61 features. Noise labels don't dissolve under dimensionality reduction. The model trains on two correct answers for the same picture.

Two more cracks emerged. Low-density outliers where the food isn't the subject — a baby holding banh chung, a dog wandering through a banh mi shot. And the five highest-density banh trang nuong samples all sourced from the same late-night stall, the same frame.

A 17,000-image dataset is not immune. The cracks form in the same places.

↗ Link in comments: https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #NoisyLabels #ImageClassification #30VNFoods #VietnameseFood #AITrainingData

---

## Twitter/X (KO)

베트남 음식 17,581장 중 반지오와 반베오가 같은 사진에 다른 라벨을 달고 있었다. 작은 데이터셋도 L2·L3 렌즈 앞에서는 균열이 보인다.

https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/ko/

#페블러스 #데이터품질 #30VNFoods #DataClinic #노이즈라벨

---

## Twitter/X (EN)

17,581 Vietnamese food images. Banh gio and Banh beo: different labels, same photo. Small datasets crack the same ways as large ones.

https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/en/

#Pebblous #DataQuality #30VNFoods #DataClinic

---

## Facebook (KO)

반지오와 반베오를 나란히 두고 진단 결과를 읽다가 잠시 멈추었습니다.

같은 쌀로 빚은 베트남 요리이지만, 분명히 다른 음식입니다.

DataClinic이 임베딩 공간에서 찾아낸 것은 두 클래스의 핵심 쌍이 픽셀 수준에서 동일한 사진이라는 사실이었습니다. 61차원으로 압축한 뒤에도 두 이미지는 서로의 가장 가까운 이웃이었습니다.

"모델은 지금 같은 사진을 두 가지 정답으로 배우고 있는 것일까요?"

17,581장이면 충분하다고 생각했습니다. 그러나 진단은 세 방향에서 균열을 보여 주었습니다.

두 이름표가 붙은 한 장. 음식이 주인공이 아닌 저밀도 사진들. 반짱느엉 고밀도 상위 5개가 전부 같은 포장마차 동일 앵글인 과의존.

데이터셋 크기와 균열의 깊이는 비례하지 않는다는 것을 이 보고서가 보여 주었습니다.

DataClinic이 이 균열을 찾는 방식이 페블러스가 이어 가는 질문과 닿아 있습니다. 지금 AI가 배우는 것이 우리가 가르치려 한 것인지를 확인하는 일입니다.

▸ https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/ko/

#페블러스 #데이터클리닉 #데이터품질 #30VNFoods #AI학습데이터 #DataClinic #PebbloScope

---

## Facebook (EN)

I was reading through the DataClinic diagnosis when I stopped at Banh gio and Banh beo.

Two different Vietnamese dishes. Two separate classes. Same photograph.

The diagnosis showed that in the embedding space, the images at the centre of this boundary were pixel-identical — and after compressing to 61 dimensions, they were still each other's nearest neighbour. The space changed. The problem did not.

"If a model is trained on this, what is it actually learning?"

17,581 images felt like enough. But the diagnosis showed cracks arriving from three directions.

One photo carrying two labels. Low-density outliers where the food isn't the subject — a baby holding banh chung, a dog in the background of a banh mi shot. And the top five banh trang nuong samples all sourced from the same late-night stall, the same angle.

Dataset size doesn't determine where the cracks form. They appear in predictable ways regardless.

DataClinic's method for finding these cracks is the same question Pebblous keeps returning to: whether what AI is learning corresponds to what we intended to teach.

▸ https://blog.pebblous.ai/story/dataclinic-report-42-30vnfoods-story-pb/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #30VNFoods #AITrainingData #NoiseLabel
