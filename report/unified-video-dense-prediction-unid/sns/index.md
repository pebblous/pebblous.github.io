# SNS 홍보 글: 장면을 통째로 읽는 모델, 진짜 벽은 흩어진 라벨이었다

> 소스: report/unified-video-dense-prediction-unid/ko/index.html
> 생성일: 2026-07-31
> URL: https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

한 장면을 통째로 읽는 모델을 막은 건 더 큰 백본이 아니라 흩어진 라벨이었다.

깊이·표면 법선·시맨틱 분할·알베도 같은 여덟 dense 라벨은 한 데이터셋에 함께 존재하지 않는다. 깊이는 실내 센서에 갇히고, 분할은 이미지 한 장에 손으로 붙이는 비싼 라벨이며, intrinsic은 합성 렌더링에서만 정답이 나온다. UniD(Adobe·Cornell, ECCV 2026)는 이 파편을 새로 수집하는 대신 표현 학습으로 이었다.

판별형 특징 대신 web-scale 생성형(diffusion) 사전지식을 써서 외형에 불변인 기하를 배우게 한 게 핵심이다. 그래서 따로 예측하면 어긋나던 깊이와 법선이 하나의 백본에서 약 2.8배 더 정합했고, 합성으로만 배운 알베도가 실사 벤치마크에서 오차를 28% 줄였다.

다만 통합이 만능은 아니다. 기하는 이득이지만 시맨틱 분할 같은 고차 의미 과제는 통합 직후 떨어졌다가 보정해도 전문가에 못 미치고, 코드도 아직 공개 전이다. 통합의 진짜 병목이 아키텍처가 아니라 데이터의 완전성·정합성이라는 사실만 더 또렷해진다.

▶ 전문: https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #컴퓨터비전 #표현학습 #UniD #Adobe #PhysicalAI

---

## LinkedIn (EN)

The wall that stopped a model from reading an entire scene wasn't a bigger backbone. It was scattered labels.

Eight dense labels, from depth and surface normals to semantic segmentation and albedo, almost never live in the same dataset. Depth is cheap but trapped indoors, segmentation is hand-painted at roughly 90 minutes an image, and intrinsics only have ground truth inside synthetic renders. UniD (Adobe Research and Cornell, ECCV 2026) bridges that fragmentation through representation learning rather than new data collection.

Instead of discriminative features, it leans on a web-scale generative (diffusion) prior that encodes appearance-invariant geometry. Depth and normals, misaligned when predicted separately, became about 2.8x more consistent from a single backbone, and albedo learned only from synthetic data cut real-world error by 28%.

Unification is not a cure-all, though. Geometry gains, but high-level semantic tasks like segmentation drop right after merging and stay below specialist models even after tuning, and the code is not yet public. The real bottleneck for unified perception isn't architecture. It's the completeness and consistency of the data.

▶ Read: https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ComputerVision #UniD #Adobe #PhysicalAI

---

## Twitter/X (KO)

한 장면을 통째로 읽는 모델의 진짜 벽은 더 큰 모델이 아니라 흩어진 라벨이었다.

깊이·법선·분할·알베도 여덟 라벨은 한 데이터셋에 함께 없다. UniD는 이걸 새 수집 대신 생성형 사전지식으로 이어, 따로 예측하면 어긋나던 깊이와 법선을 약 2.8배 더 정합하게 만들었다.

통합의 병목은 아키텍처가 아니라 데이터다.

https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/ko/

#페블러스 #데이터품질 #UniD #컴퓨터비전

---

## Twitter/X (EN)

The real wall for a model that reads a whole scene wasn't a bigger network. It was scattered labels.

Eight dense labels never share one dataset. UniD bridges them with a generative prior instead of new data, making separately-predicted depth and normals about 2.8x more consistent.

The bottleneck is data, not architecture.

https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/en/

#Pebblous #DataQuality #UniD #ComputerVision

---

## Facebook (KO)

하나의 영상에서 깊이와 표면의 방향, 재질, 사람의 윤곽까지 한꺼번에 뽑혀 나오는 시연을 며칠 전 피드에서 봤습니다.

장면 하나를 여덟 가지 방식으로 동시에 읽어 내는 그림이었습니다.

그런데 눈길이 오래 간 건 모델의 화려함이 아니라, 그 여덟 라벨이 원래 한자리에 있던 적이 없다는 사실이었습니다.

깊이는 실내 센서 안에 갇혀 있고, 분할은 사람이 한 장에 한 시간 넘게 손으로 칠해야 얻고, 물체 고유의 색은 현실에서 정답을 잴 방법이 거의 없어 합성 세계에서만 배웁니다.

서로 다른 곳에서 자란 조각들입니다.

UniD(Adobe·Cornell)가 택한 길은 조금 뜻밖이었습니다. 없는 데이터를 새로 모으거나 한 모델로 다른 라벨을 가짜로 채우는 대신, 이미 흩어져 있는 라벨을 각각 잘 표현해 두고 하나의 백본이 그 표현을 다시 짜맞추게 했습니다.

따로 그리면 어긋나던 깊이와 표면이 한 백본에서 나오자 서로 맞아 들어갔고, 합성 세계에서만 배운 색이 실제 사진에서도 통했습니다.

물론 모든 게 좋아진 건 아닙니다. 기하는 통합이 도왔지만, 의미를 읽는 과제는 오히려 뒷걸음쳤습니다.

그래서 오히려 이런 질문이 남습니다. "부족한 데이터를 지어내는 것과, 있는 데이터를 잘 정돈하는 것 사이에서 우리는 어디까지 후자로 갈 수 있을까?"

페블러스가 AI-Ready Data와 DataClinic으로 오래 씨름해 온 자리도 결국 여기였습니다. 모델을 더 키우기 전에, 데이터가 얼마나 온전하고 서로 맞는지를 먼저 묻는 일 말입니다.

흩어진 조각을 억지로 붙이지 않고도 이을 수 있다면, 그 이음매의 품질을 무엇으로 가늠할지가 다음 숙제로 남습니다.

https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/ko/

#페블러스 #데이터클리닉 #AIReadyData #데이터품질 #UniD #PhysicalAI

---

## Facebook (EN)

A single clip, and from it a model pulls depth, the direction of every surface, material, the outline of a person, all at once.

A demo like that drifted through my feed a few days ago.

One scene, read eight different ways in the same breath.

What stayed with me, though, wasn't how the model looked. It was the quiet fact that those eight labels had never actually sat together.

Depth is cheap but locked indoors. Segmentation is painted by hand, an hour or more per image. The true color of an object can barely be measured in the real world, so a model learns it only inside synthetic renders.

Eight pieces, each raised in a different place.

What UniD (Adobe and Cornell) chose was almost counterintuitive. Rather than collecting the missing data, or faking one label from another, it let each scattered label be represented well on its own, then asked a single backbone to reassemble those representations.

Depth and surface, misaligned when drawn apart, fell into agreement once they came from one backbone. Color learned only in synthetic worlds held up in real photographs.

Not everything improved. Geometry benefited from unification, while reading meaning actually took a step back.

So the question that lingers is a quieter one: "Between inventing the data we lack and ordering the data we already have, how far can the second path take us?"

That second path is where Pebblous has spent its time, through AI-Ready Data and DataClinic, asking how whole and how consistent the data is before reaching for a bigger model.

If scattered pieces can be joined without forcing them together, then what we measure the seam by becomes the next thing worth solving.

https://blog.pebblous.ai/report/unified-video-dense-prediction-unid/en/

#Pebblous #DataClinic #AIReadyData #DataQuality #UniD #PhysicalAI
