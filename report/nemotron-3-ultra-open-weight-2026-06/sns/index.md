# SNS 홍보 글: 미국 최강 오픈웨이트, 그런데 왜 중국에 밀릴까 (NVIDIA Nemotron 3 Ultra 550B)

> 소스: report/nemotron-3-ultra-open-weight-2026-06/ko/index.html
> 생성일: 2026-06-12
> URL(KO): https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/ko/
> URL(EN): https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

미국이 내놓은 가장 강한 오픈웨이트 추론 모델이 나왔는데, 같은 리더보드의 더 윗줄에는 중국 모델 이름이 적혀 있습니다.

NVIDIA가 6월 4일 공개한 Nemotron 3 Ultra 이야기입니다. 가중치부터 학습 데이터, 레시피까지 통째로 Hugging Face에 올렸고, 상업 사용을 폭넓게 허용하는 OpenMDW-1.1 라이선스를 달았습니다. 독립 지수인 Artificial Analysis 지능 지수에서 약 48점, 직전 미국 오픈 선두를 큰 폭으로 제친 분명한 1위입니다. 그런데 글로벌 오픈웨이트 1위는 여전히 중국 Kimi K2.6(약 54)이고, Nemotron은 그 아래에 섭니다.

흥미로운 건 그 6점 차의 속입니다. Nemotron은 환각을 덜 하고 긴 문서를 더 잘 읽으며, 중국 모델은 도구를 다루고 코드를 짜는 데 더 능합니다. 둘 다 같은 희소 MoE 구조인데 강점이 정반대로 갈립니다. 아키텍처가 같다면 남는 변수는 하나, 그 거대한 용량을 무엇으로 채웠느냐입니다.

가중치 접근성은 빠르게 평준화되고 있습니다. 오픈 모델이 클로즈드를 따라잡는 시간 격차가 2년 새 22개월에서 약 4개월로 좁혀졌습니다. 모델 자체가 차별점이 되기 어려워질수록, 차이는 그 모델에 무엇을 먹이느냐에서 벌어집니다.

모델은 공개됐고, 경쟁은 데이터에서 결정납니다.

↗ 전문 링크는 댓글에

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #오픈웨이트 #LLM #소버린AI #NVIDIA #Nemotron #KimiK2 #MoE

---

## LinkedIn (EN)

America just shipped its strongest open-weight reasoning model — and on the same leaderboard, the rows above it belong to China.

That model is NVIDIA's Nemotron 3 Ultra, released June 4. The weights, training data, and recipe went up on Hugging Face in full, under the Linux Foundation's OpenMDW-1.1 license that allows broad commercial use royalty-free. On the independent Artificial Analysis Intelligence Index it scores around 48, comfortably ahead of the previous US open-weight leader. Yet the global open-weight crown still sits with China's Kimi K2.6 at roughly 54, with Nemotron a step below.

What's interesting is what hides inside that six-point gap. Nemotron hallucinates less and reads long documents more reliably; the Chinese models are stronger at using tools and writing code. Both are sparse MoE architectures, yet their strengths split in opposite directions. When the architecture is the same, only one variable is left: what filled all that capacity.

Access to frontier weights is leveling off fast. The lag for open models to catch closed ones has narrowed from 22 months to about four in two years. As the model itself becomes harder to differentiate on, the difference moves to what you feed it.

The model is open. The contest is decided by data.

↗ Full analysis in the comments

#Pebblous #DataQuality #DataClinic #AIReadyData #OpenWeights #LLM #SovereignAI #NVIDIA #Nemotron #KimiK2 #MoE

---

## Twitter/X (KO)

NVIDIA Nemotron 3 Ultra(550B·활성 55B)는 미국 오픈웨이트 1위에 올랐지만, 글로벌 1위 중국 Kimi K2.6에는 6점 뒤집니다.

흥미로운 건 둘 다 같은 MoE 구조라는 점. 강점이 갈리는 건 아키텍처가 아니라 데이터입니다.

모델은 공개됐고, 경쟁은 데이터에서 결정납니다.
https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/ko/

#페블러스 #데이터품질 #Nemotron #오픈웨이트

---

## Twitter/X (EN)

NVIDIA Nemotron 3 Ultra (550B, 55B active) is the top US open-weight model, yet it trails China's Kimi K2.6 by six points on the leaderboard.

The twist: both are sparse MoE. Their strengths split on data, not architecture.

The model is open. The contest is decided by data.
https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/en/

#Pebblous #DataQuality #Nemotron #OpenWeights

---

## Facebook (KO)

"미국이 내놓은 가장 강한 오픈 모델."

이 문장 바로 아래, 같은 리더보드의 더 윗줄에 중국 모델 이름이 적혀 있는 걸 보고 잠깐 멈췄습니다.

NVIDIA가 6월 4일 공개한 Nemotron 3 Ultra는 가중치도, 학습 데이터도, 레시피까지도 통째로 열어 둔 모델입니다.

독립 지수에서 미국 오픈웨이트 1위에 올랐는데, 글로벌 1위는 여전히 중국 모델이었습니다. 그 사이는 단 6점이었고요.

처음엔 그냥 "아직 미국이 조금 뒤지는구나" 정도로 읽었습니다. 그런데 그 6점의 속을 들여다보니 그림이 달라졌습니다.

Nemotron은 거짓말을 덜 하고 긴 문서를 더 잘 읽습니다. 중국 모델은 도구를 다루고 코드를 짜는 데 더 능합니다. 둘 다 같은 희소 구조의 모델인데, 강점이 정반대로 갈립니다.

아키텍처가 같다면, 강점을 가른 건 무엇이었을까요?

남는 변수는 하나뿐이었습니다. 그 거대한 용량을 무엇으로 채웠는가. 곧 어떤 데이터로 학습시켰는가입니다.

모델은 누구나 같은 걸 내려받습니다. 하지만 그 위에 올리는 데이터는 회사마다 다릅니다. 페블러스가 데이터의 품질을 정량으로 진단하는 일에 오래 매달려 온 이유도 여기에 있습니다.

가중치가 모두에게 열린 시대에, 진짜 차이는 보이지 않는 데이터에서 갈리는 것 같습니다.

https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/ko/

#페블러스 #데이터품질 #DataClinic #AIReadyData #Nemotron #오픈웨이트 #소버린AI

---

## Facebook (EN)

"The strongest open model America has shipped."

I paused on that line — because right above it, on the same leaderboard, sat the name of a Chinese model.

NVIDIA released Nemotron 3 Ultra on June 4, with the weights, the training data, and even the recipe left fully open.

On the one independent index available, it became the top US open-weight model. But the global lead still belonged to China, by just six points.

At first I read that as "America is still a little behind." Then I looked inside those six points, and the picture changed.

Nemotron tells fewer lies and reads long documents more reliably. The Chinese models handle tools and write code better. Both are the same sparse kind of model, yet their strengths point in opposite directions.

If the architecture is the same, what divided the strengths?

Only one variable was left: what filled all that capacity — which is to say, what data it learned from.

Everyone downloads the same model. But the data they layer on top of it differs from company to company. That is why Pebblous has spent so long measuring data quality, quietly, before anything is trained.

In an age where the weights are open to everyone, the real difference seems to settle into the data we can't see.

https://blog.pebblous.ai/report/nemotron-3-ultra-open-weight-2026-06/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #Nemotron #OpenWeights #SovereignAI
