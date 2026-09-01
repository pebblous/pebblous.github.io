# SNS 홍보 글: 원자료를 그대로 읽자 감마선 망원경 문턱이 3분의 1이 됐다

> 소스: blog/gamma-ray-telescope-raw-waveform-transformer/ko/index.html
> 생성일: 2026-09-02
> URL: https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

거울은 그대로 뒀다. 그 앞의 데이터 처리 규칙만 걷어냈더니 시뮬레이션 속 감마선 망원경의 검출 문턱이 3분의 1로 내려갔다.

막스플랑크 물리학연구소와 뮌헨공대 연구진은 지름 5미터짜리 작은 망원경을 시뮬레이션했다. 사건 하나를 짧은 동영상으로 취급해 비디오 비전 트랜스포머에 통째로 넣었다. 캘리브레이션도 클리닝도 파라미터화도 거치지 않았다. 비교 상대는 CTAO LST-1이 실제로 쓰는 분석 체인이다. 이 망원경에 맞게 다시 최적화해 같은 사건에 적용했더니, 에너지 검출 문턱은 0.22에서 0.07 TeV로 내려갔다.

차이는 버려지던 정보에서 나온다. 사건 하나가 카메라에 남기는 값은 46만 개다. 표준 파이프라인이 재구성 단계로 넘기는 것은 열 개 남짓이다. 1985년 힐라스 파라미터화 이래 손대지 않은 규칙이고, 밝고 또렷한 사건에서는 합리적이다. 문제는 광자 수십 개가 픽셀 몇 개에 흩어지는 저에너지 영역이다. 거기서는 클리닝이 신호를 배경과 함께 지운다.

과장하지 않으려면 조건을 같이 읽어야 한다. 이 결과는 실제 관측이 아니라 이상적으로 설계한 가상 망원경의 시뮬레이션에서 나왔다. 저자들 스스로 절대 수치는 상한이라고 적었다. 두 분석이 함께 값을 내는 구간의 에너지 분해능은 표준 분석이 여전히 앞선다. 논문이 지키는 것은 절대값이 아니라 두 분석의 비율이다.

같은 날 arXiv에 올라온 전파 천문학 논문도 비슷한 선택을 했다. 더 큰 모델 대신 자기 도메인 관측 자료로 표현을 직접 배우는 쪽이다. 모델을 바꾸기 전에 물어야 할 것은 저장 단계에서 무엇이 이미 지워지고 있는가다. 페블러스가 AI-Ready 데이터를 다룰 때도 라벨을 붙이기 전에 같은 질문을 먼저 놓는다.

▶ 전문: https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #감마선천문학 #비전트랜스포머 #CTAO #막스플랑크

---

## LinkedIn (EN)

A gamma-ray telescope got substantially more sensitive without a bigger mirror. The researchers deleted the preprocessing instead.

Physicists at the Max Planck Institute for Physics and TU Munich simulated a small telescope with a 5-metre dish and handed each event to a video vision transformer as a raw movie, skipping calibration, cleaning and parameterization entirely. Measured against the analysis chain CTAO's LST-1 runs today, re-tuned for the same instrument and applied to the same simulated events, the detection threshold fell from 0.22 TeV to 0.07 TeV.

The gain comes from what the old chain discards. A single event leaves around 460,000 values in the camera, and the Hillas parameterization passes roughly ten of them to reconstruction. That is a fair trade for bright, well-contained images. It stops being one when a few dozen photons scatter across a handful of pixels, because the cleaning step erases the signal along with the sky.

The caveats are load-bearing here. This is a Monte Carlo simulation of an idealized virtual telescope rather than an observing campaign, and the authors state plainly that the absolute numbers are upper bounds. Where both analyses produce a value, energy resolution still favours the standard chain. What survives the idealization is the ratio between the two, not the number itself.

A radio-astronomy paper posted the same day made a parallel choice, training a very small model on its own unlabelled observations instead of reaching for a larger one. Both teams bought a representation fitted to their own data rather than a bigger instrument. Before swapping the model, the question worth asking is what the storage rules are already throwing away. That is where Pebblous starts when it looks at AI-Ready data.

▶ Read: https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #GammaRayAstronomy #VisionTransformer #CTAO #MaxPlanck

---

## Twitter/X (KO)

거울은 그대로 두고, 캘리브레이션과 클리닝을 거치지 않은 원자료를 비디오 트랜스포머에 통째로 넣었다. 시뮬레이션 속 감마선 망원경의 검출 문턱이 0.22에서 0.07 TeV로 내려갔다.

성능의 벽이 거울이 아니라 그 앞의 데이터 처리에 있었다는 뜻이다. 실제 관측이 아닌 이상화된 시뮬레이션 결과다.

▶ https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/ko/

#페블러스 #감마선천문학 #비전트랜스포머 #AIReadyData

---

## Twitter/X (EN)

No calibration, no cleaning. A video transformer read the raw event cube from a simulated gamma-ray telescope, and the detection threshold fell from 0.22 to 0.07 TeV.

The limit sat in the preprocessing, not in the mirror. Simulation, not an observing campaign.

▶ https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/en/

#Pebblous #GammaRayAstronomy #VisionTransformer #AIReadyData

---

## Facebook (KO)

우리 쪽 데이터가 원본을 어디까지 남기기로 되어 있는지, 그 규칙을 언제 누가 정했는지 아시는 분이 계실까요.

저는 바로 답하지 못했습니다.

지상에서 감마선을 잡는 망원경은 하늘을 직접 보지 않습니다. 감마선이 대기와 부딪혀 만드는 나노초짜리 섬광을 큰 거울로 모아 카메라로 찍습니다. 이 분야가 40년 동안 성능을 올려 온 방법은 하나였습니다.

거울을 더 크게 만드는 것.

막스플랑크 물리학연구소와 뮌헨공대 연구진은 이번에 거울을 그대로 두고, 그 앞에 놓인 데이터 처리 규칙을 걷어냈습니다.

사건 하나가 카메라에 남기는 값은 46만 개입니다. 표준 파이프라인이 다음 단계로 넘기는 것은 열 개 남짓입니다. 1985년에 정해졌고, 그 뒤로 손대지 않은 규칙입니다.

틀린 규칙이어서가 아닙니다. 밝고 또렷한 사건이 기준이던 시절에는 맞는 규칙이었습니다. 다만 광자 수십 개가 픽셀 몇 개에 흩어지는 희미한 사건에서는, 그 요약이 남기는 것이 거의 없습니다.

저는 이런 자리를 '오래된 요약'이라고 불러 보고 싶습니다. 규칙이 세워질 때의 전제는 이미 깨졌는데, 규칙만 그대로 돌아가고 있는 자리 말입니다.

"우리가 저장하기로 정한 형태가, 지금 쓰려는 모델에게도 충분한가?"

페블러스에서 데이터 품질을 들여다볼 때 오래 걸리는 쪽도 늘 여기였습니다. 라벨을 붙이고 결측을 메우는 일은 목록이 분명합니다. 무엇을 이미 버리고 있는지는 목록에 없습니다. 버린 것은 로그에 남지 않으니까요.

이번 실험은 아직 시뮬레이션이고, 저자들도 절대 수치는 상한이라고 적어 두었습니다. 그래도 한 문장은 남습니다. 40년 동안 벽이라고 믿었던 것이 거울이 아니라, 거울 뒤에서 요약을 만들던 규칙이었을지도 모른다는 것.

▶ 전문: https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/ko/

#페블러스 #감마선천문학 #비전트랜스포머 #CTAO #데이터품질 #데이터클리닉

---

## Facebook (EN)

Do you know how much of the raw version your systems still keep? Or who decided that, and in what year?

I could not answer either question about my own.

A gamma-ray telescope on the ground never looks at the sky directly. The gamma ray hits the atmosphere, throws off a flash of Cherenkov light that lasts a few nanoseconds, and a large mirror gathers that flash onto a camera. For forty years this field improved in exactly one way.

By building bigger mirrors.

Researchers at the Max Planck Institute for Physics and TU Munich left the mirror where it was and went after the data-processing rule sitting in front of it.

One event leaves about 460,000 values in the camera. The standard pipeline hands roughly ten of them to the next stage. That rule was written in 1985 and has not been touched since.

Not because it was wrong. When bright, well-formed events were the reference case, it was a sound rule. But when a few dozen photons scatter across a handful of pixels, the summary keeps almost nothing.

I have started thinking of places like this as "the old summary." The premise the rule was built on has quietly expired, and the rule keeps running anyway.

"Is the shape we decided to store still enough for the model we now want to use?"

The slow part of the work at Pebblous has always been here too. Labelling and filling gaps come with a list. What has already been thrown away does not appear on any list. Nothing you discarded shows up in the log.

The experiment is still a simulation, and the authors are explicit that the absolute numbers are upper bounds. One sentence stays with me anyway. For forty years the wall may not have been the mirror, but the rule standing behind it, deciding what was worth keeping.

▶ Full piece: https://blog.pebblous.ai/blog/gamma-ray-telescope-raw-waveform-transformer/en/

#Pebblous #GammaRayAstronomy #VisionTransformer #CTAO #DataQuality #DataClinic
