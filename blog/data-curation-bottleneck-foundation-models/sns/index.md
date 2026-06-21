# SNS 홍보 글: 38B 토큰이 350B 토큰을 이겼다

> 소스: blog/data-curation-bottleneck-foundation-models/ko/index.html
> 생성일: 2026-06-21
> URL: https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

같은 데이터를 9배 적게 쓰고도 성능은 똑같았습니다.

허깅페이스 FineWeb-Edu는 웹 텍스트를 모델 분류기로 점수화해 상위만 남겼습니다. 그렇게 추린 38B 토큰으로 학습한 모델이, 거르지 않은 350B 토큰 모델과 같은 자리에 섰습니다. 마이크로소프트 Phi는 1.3B 소형 모델로 훨씬 큰 모델의 코드 성능을 넘었고, Llama 3는 이전 세대 Llama 2를 분류기로 써서 자기 학습 데이터를 직접 걸렀습니다.

모델을 더 키우는 전략이 2024년 이후 조용해진 자리에서, 성능을 다시 가른 변수는 데이터의 품질이었습니다.

문제는 그 좋은 데이터가 빠르게 동난다는 데 있습니다. 새로 생기는 웹페이지의 74%가 이미 AI 생성물을 포함하고, 그 빈자리를 채우는 합성 데이터는 무분별하게 쓰면 model collapse로 모델을 망가뜨립니다. 성능의 레버가 데이터로 옮겨간 바로 그 순간, 데이터를 고르는 일 자체가 다음 병목이 됐습니다.

데이터 큐레이션은 모델이 완성된 뒤의 정리가 아니라, 무엇을 먹일지 정하는 사전 투입입니다.

▶ 전문: https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터큐레이션 #파운데이션모델 #합성데이터 #FineWeb #Llama3 #Phi

---

## LinkedIn (EN)

The same benchmark score, on nine times less data.

Hugging Face's FineWeb-Edu scored web text with a model-based classifier and kept only the top slice. A model trained on the resulting 38B tokens matched one trained on 350B unfiltered tokens. Microsoft's Phi pushed a 1.3B model past far larger ones on code, and Llama 3 used its predecessor, Llama 2, as the classifier that curated its own training data.

As scaling the model quietly stalled after 2024, the variable that decided performance shifted to data quality.

The catch is that good data is running out. More than 74% of new web pages already contain AI-generated text, and the synthetic data filling the gap can trigger model collapse when used indiscriminately. The moment the lever moved to data, choosing the data became the next bottleneck.

Curation isn't cleanup after the model is built. It's deciding what the model eats before training begins.

▶ Read: https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataCuration #FoundationModels #SyntheticData #FineWeb #Llama3 #Phi

---

## Twitter/X (KO)

큐레이션한 38B 토큰이, 거르지 않은 350B 토큰과 같은 성능을 냈습니다.

모델 크기 경쟁이 멈춘 자리에서 성능을 가르는 건 데이터의 품질입니다. 좋은 데이터를 고르는 일이 다음 병목이 됐습니다.

▶ https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/ko/

#페블러스 #데이터품질 #데이터큐레이션 #FineWeb

---

## Twitter/X (EN)

38B curated tokens matched 350B unfiltered ones.

With model scaling stalled, data quality is what decides performance now. And choosing that data has become the bottleneck.

▶ https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/en/

#Pebblous #DataQuality #DataCuration #FineWeb

---

## Facebook (KO)

"더 큰 모델"이라는 말이 요즘 들어 예전만큼 설레지 않습니다.

2024년을 지나면서, 모델을 키워도 곡선이 예전처럼 가파르게 내려가지 않는다는 이야기가 곳곳에서 들렸습니다. 화제의 중심은 어느새 사전학습에서 다른 곳으로 옮겨가 있었습니다.

그 즈음 허깅페이스가 공개한 숫자 하나가 오래 남았습니다. 잘 고른 38B 토큰으로 학습한 모델이, 아홉 배 많은 데이터를 그냥 부어 넣은 모델과 같은 자리에 섰다는 것이었습니다.

데이터를 더 넣은 쪽이 아니라, 잘 고른 쪽이 이겼습니다.

그런데 여기서 묘한 일이 벌어집니다. 성능의 열쇠가 데이터로 옮겨가는 바로 그 순간, 좋은 데이터는 빠르게 동나고 있었습니다. 사람이 쓴 고품질 텍스트는 유한하고, 새로 생기는 웹페이지의 상당수는 이미 기계가 쓴 글입니다. 그 빈자리를 합성 데이터로 채우려다 잘못 밟으면, 모델은 세대를 거듭하며 평균적인 출력만 되풀이하게 됩니다.

"그렇다면 무엇을 남기고 무엇을 버릴 것인가?" 결국 질문은 데이터를 고르는 일 자체로 돌아옵니다.

페블러스가 학습 이전 단계에서 데이터의 품질을 먼저 살피는 이유도 여기에 있습니다. 더 큰 모델을 좇기 전에 더 나은 데이터를 먼저 갖추는 일. 그 오래된 순서가 지금 다시 가장 앞자리로 돌아온 것 같습니다.

전문은 댓글이 아니라 여기에 두겠습니다.
https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/ko/

#페블러스 #데이터큐레이션 #데이터품질 #DataClinic #AIReadyData #FineWeb

---

## Facebook (EN)

"A bigger model" doesn't quite thrill me the way it used to.

Through 2024, the loss curves stopped falling the way they once did, and the excitement quietly drifted away from pretraining toward somewhere else.

Around then, one number from Hugging Face stayed with me. A model trained on 38B carefully chosen tokens stood level with one fed nine times as much raw data.

The side that picked well won, not the side that poured in more.

And here a strange thing happens. The very moment data becomes the lever, the good data starts running out. Human-written text is finite, and much of the new web is already machine-written. Try to fill that gap carelessly with synthetic data, and the model drifts, generation after generation, toward nothing but its own average.

"So what do we keep, and what do we throw away?" The question circles back to the act of choosing the data itself.

That's why Pebblous looks at data quality before training even begins. Getting the better data in place before chasing the bigger model. That old order seems to have quietly returned to the front of the line.

The full piece, here rather than in the comments:
https://blog.pebblous.ai/blog/data-curation-bottleneck-foundation-models/en/

#Pebblous #DataCuration #DataQuality #DataClinic #AIReadyData #FineWeb
