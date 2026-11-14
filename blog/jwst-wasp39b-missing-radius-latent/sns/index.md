# SNS 홍보 글: 제임스웹 외계행성 AI, 빠진 칸은 행성 반지름 하나

> 소스: blog/jwst-wasp39b-missing-radius-latent/ko/index.html
> 생성일: 2026-10-07
> URL: https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

제임스웹이 찍은 WASP-39b 스펙트럼 앞에서 외계행성 대기 추정 AI가 무너졌다. 관측과 모형의 어긋남을 재는 적합도 χ²/N이 301이었다. 1 근처면 잘 맞는다는 뜻인 값이다.

저자들이 먼저 의심한 것은 물리 모형이었다. 등온 가정을 깨는 온도 기울기를 넣고, 이산화황 불투명도를 넣고, 더 정밀한 불투명도 표로 바꿔 봤다. 적합도는 38 근처에서 꼼짝하지 않았다. 이 시험은 신경망이 아니라 중첩 표본추출로 돌렸기 때문에, 학습된 부분이 범인일 가능성은 처음부터 셈에서 빠져 있었다.

범인은 추정기의 변수 목록이었다. 학습 데이터를 만든 시뮬레이터는 행성 반지름을 입력으로 쓰고 있었다. 그 값을 거꾸로 알아맞혀야 하는 쪽의 목록에만 칸이 비어 있었다. 반지름이 없으면 행성 덩어리가 별을 가리는 기준선이 고정된 채로 남는다. 실제 관측의 기준선이 그 고정값에서 약 3% 벗어나 있어도, 모형에는 그 차이를 받아 줄 자리가 없다. 남는 길은 하나뿐이다. 움직일 수 있는 칸, 곧 대기 조성과 온도가 그 몫을 떠안는 것이다. 반지름을 변수로 돌려놓고 보정을 거치자 301은 0.06이 됐다.

논문은 자기 성과에 직접 선을 긋는다. 함께 오른 포함 비율의 기준값이 저자들이 보정에 쓴 바로 그 값이라 실제 스펙트럼에 대한 독립적 증거가 아니라고 본문에 적어 두었다. 잡음 공분산을 조건으로 넣는 기법은 합성 벤치마크에서만 통했고 실제 타겟으로는 넘어오지 않았다.

이 결함이 늦게 발견되는 이유는 합성 평가가 그것을 보지 못하기 때문이다. 시뮬레이터가 만든 홀드아웃에서는 생성 쪽과 소비 쪽이 같은 설정을 공유하니 기준선이 어긋날 일이 없다. 목록의 구멍은 바깥 데이터가 들어오는 순간에만, 그것도 "모르겠다"가 아니라 좁고 확신에 찬 틀린 답으로 드러난다.

▶ 전문: https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #제임스웹 #JWST #WASP39b #외계행성 #시뮬레이션기반추론 #데이터스키마 #AIReadyData

---

## LinkedIn (EN)

An AI that reads exoplanet atmospheres collapsed on the WASP-39b spectrum JWST actually took. Its goodness of fit, χ²/N, came out at 301, where a value near 1 means the model explains the observation well.

The authors suspected the physics first. They broke the isothermal assumption with a temperature gradient, added sulfur dioxide opacity, swapped in a higher-precision opacity table. The fit would not move off 38. Because those tests were re-fit with nested sampling instead of the network, the trained component was out of the running from the start.

The culprit was the estimator's list of variables. The simulator that produced the training data was using planet radius as an input, while the side that had to infer those values back out had no slot for it. With radius pinned, the baseline that the bulk of the planet blocks stays fixed, and when the real observation's baseline sits about 3% away, the model has nowhere to put the difference. Only one route remains: the slots that can still move, atmospheric composition and temperature, absorb it. Put radius back in the variables, run the calibration, and 301 became 0.06.

The paper draws its own limits. It states in the text that the coverage figure which rose alongside is measured against the very reference used for calibration, so it is not independent evidence about the real spectrum. Conditioning on the noise covariance helped on a synthetic benchmark and did not transfer to the real target.

This kind of defect surfaces late because synthetic evaluation cannot see it. On held-out data from the simulator, production and consumption share one configuration, so the baseline never drifts. The hole in the list shows up only when outside data arrives, and it arrives not as "I don't know" but as a narrow, confident, wrong answer.

▶ Read: https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #JWST #JamesWebb #WASP39b #Exoplanets #SimulationBasedInference #DataSchema #AIReadyData

---

## Twitter/X (KO)

제임스웹이 찍은 WASP-39b 앞에서 외계행성 대기 추정 AI의 적합도가 301까지 벌어졌다. 온도 기울기도, 분자 하나도, 더 정밀한 표도 그 숫자를 움직이지 못했다.

범인은 추정 변수 목록에서 빠진 행성 반지름 한 칸이었다. 되돌려 넣고 보정하자 0.06이 됐다.

▶ https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/ko/

#페블러스 #제임스웹 #WASP39b #데이터스키마 #데이터품질

---

## Twitter/X (EN)

An exoplanet atmosphere AI hit a χ²/N of 301 on the WASP-39b spectrum JWST took. A temperature gradient, an extra molecule, a finer opacity table: none of it moved that number.

The culprit was one slot missing from the list of inferred variables, planet radius. Put it back, calibrate, and the fit came out at 0.06.

▶ https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/en/

#Pebblous #JWST #WASP39b #DataSchema #DataQuality

---

## Facebook (KO)

시험 데이터에서는 잘 맞던 모델이 실제 데이터 앞에서 무너지는 장면을, 한 번쯤 보셨을 겁니다.

그럴 때 손이 먼저 가는 쪽은 대개 모형입니다. 무엇을 빠뜨렸나, 가정이 거칠었나.

제임스웹이 찍은 외계행성 스펙트럼을 다룬 어느 논문의 저자들도 거기서 시작했습니다.

온도 기울기를 넣어 보고, 분자를 하나 더 넣어 보고, 더 정밀한 표로 바꿔 보았습니다. 적합도는 38 언저리에서 움직이지 않았습니다.

빠져 있던 것은 물리가 아니라 칸 하나였습니다.

학습 데이터를 만든 시뮬레이터는 행성의 반지름을 알고 있었습니다. 그 값을 거꾸로 알아맞혀야 하는 쪽의 목록에만 그 칸이 비어 있었습니다.

반지름이 변수로 없으면 행성 덩어리가 별을 가리는 기준선이 고정된 채로 남습니다. 실제 관측의 기준선이 거기서 조금 벗어나 있어도, 모형에는 그 차이를 받아 줄 자리가 없습니다. 그 몫은 대기의 성분과 온도가 대신 뒤집어씁니다.

저는 이 자리를 '한쪽만 아는 칸'이라고 적어 두었습니다.

무거운 대목은 이 결함이 조용히 지나간다는 점입니다. 시뮬레이터가 만든 시험 데이터에서는 만드는 쪽과 받아 쓰는 쪽이 같은 설정을 쓰니 어긋날 일이 없습니다. 구멍은 바깥 데이터가 들어오는 순간에만 드러나고, 그때도 "모르겠습니다"라는 얼굴로 오지 않습니다. 좁고 확신에 찬 틀린 답으로 옵니다.

페블러스가 AI-Ready Data를 이야기할 때 되풀이하는 전제가 하나 있습니다. 데이터의 생성 맥락이 기록되어야 한다는 것입니다. 이 논문은 그 전제를 한 걸음 더 밀어 둡니다. 기록이 있어도, 받는 쪽이 그 칸을 읽지 않으면 없는 것과 같습니다.

"데이터를 만드는 쪽과 받아 쓰는 쪽의 필드 목록을, 마지막으로 맞춰 본 것이 언제인가?"

반지름 한 칸이 비어 있는 동안 적합도는 301이었고, 그 칸을 되돌려 놓자 0.06이 되었습니다. 우리 파이프라인에도 아직 이름이 붙지 않은 칸이 하나쯤 비어 있을지 모르겠습니다.

▶ 전문: https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/ko/

#페블러스 #제임스웹 #WASP39b #데이터스키마 #데이터클리닉 #데이터품질 #AIReadyData

---

## Facebook (EN)

You have probably watched a model that scored well on its test set fall apart on real data.

When that happens, the hand reaches for the model first. What did we leave out? Was an assumption too coarse?

The authors of a paper on exoplanet spectra from JWST started in the same place.

They tried a temperature gradient. They tried one more molecule. They tried a finer opacity table. The fit stayed near 38.

What was missing was not physics. It was a slot.

The simulator that built the training data knew the planet's radius. The list on the side that had to infer those values back out was the only place where that slot sat empty.

With radius absent from the variables, the baseline that the bulk of the planet blocks stays pinned. When the real observation's baseline sits a little away from it, the model has nowhere to put the difference. Composition and temperature carry it instead.

I have started calling this a slot only one side knows about.

The heavy part is how quietly it passes. On test data from the simulator, the producing side and the consuming side run the same configuration, so nothing drifts. The hole shows up only when outside data arrives, and even then it does not arrive wearing the face of "I don't know." It arrives as a narrow, confident, wrong answer.

There is a premise we repeat at Pebblous when we talk about AI-Ready data: the context in which data was produced has to be recorded. This paper pushes that premise one step further. Even when the record exists, a slot the receiving side never reads is the same as a slot that was never there.

"When did you last line up the field list on the side that makes your data against the one on the side that consumes it?"

While that one slot stood empty the fit was 301, and once it was put back the fit came out at 0.06. There may be a slot in our own pipelines that nobody has named yet.

▶ Full piece: https://blog.pebblous.ai/blog/jwst-wasp39b-missing-radius-latent/en/

#Pebblous #JWST #WASP39b #DataSchema #DataClinic #DataQuality #AIReadyData
