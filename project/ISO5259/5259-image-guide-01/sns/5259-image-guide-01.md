# SNS 홍보 글: 이미지 데이터셋 품질은 두 레이어다 — ISO/IEC 5259 이미지 적용 이론

> 소스: project/ISO5259/5259-image-guide-01/ko/ (KO) / en/ (EN)
> 생성일: 2026-04-04
> KO URL: https://blog.pebblous.ai/project/ISO5259/5259-image-guide-01/ko/
> EN URL: https://blog.pebblous.ai/project/ISO5259/5259-image-guide-01/en/

---

## Facebook (한국어)

이미지 데이터셋을 열심히 정제했는데, 모델은 왜 여전히 틀릴까요?

대부분 "이미지가 깨끗한가"만 보고 끝냅니다.
그런데 이미지 데이터 품질에는 레이어가 두 개 있습니다.

▸ 픽셀 수준 — 해상도, 밝기, 중복 여부
▸ 작업 수준 — 라벨 정확도, 클래스 균형, 캡션 정합성

ISO/IEC 5259-2 기준으로 23개 QM 항목을 유형별로 정리하고, DataClinic이 어디까지 자동으로 잡아주는지 매트릭스로 만들었습니다.

비주석 이미지셋(A), 분류·검출셋(B), 이미지-텍스트 쌍(C) — 유형마다 봐야 할 항목이 다릅니다.

여러분 데이터셋은 어느 유형인가요?

https://blog.pebblous.ai/project/ISO5259/5259-image-guide-01/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘

---

## LinkedIn (English)

Your image dataset looks clean. Your model still underperforms.

The gap is usually not noise or missing files.

It's that image data quality has two distinct layers — and most teams only check one.

▸ Pixel-level quality: resolution, brightness distribution, near-duplicate ratio, compression artifacts
▸ Task-level quality: label accuracy, class balance, annotation consistency, caption alignment

Treating them as the same thing is how you end up with a dataset that passes basic checks and still breaks at deployment.

We mapped all 23 ISO/IEC 5259-2 quality measure categories to image datasets — across three dataset types:

▸ Type A — unannotated image collections
▸ Type B — classification, detection, segmentation datasets
▸ Type C — image-text pairs (for VLMs and multimodal models)

For each of the 50+ QM items, we indicate what DataClinic covers automatically, what requires external tools, and what needs manual review.

A framework that tells you not just what to measure — but what you can actually measure today.

https://blog.pebblous.ai/project/ISO5259/5259-image-guide-01/en/

#DataQuality #ComputerVision #ISO5259 #ImageDataset #MLOps #DataClinic #Pebblous #AIData #DataEngineering
