# SNS 홍보 글: 블레이자 3C 345의 제트를 연속 영상으로 복원한 신경장 알고리즘

> 소스: blog/kine-neural-field-vlbi-jet-video/
> 생성일: 2026-08-30
> URL: https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

27년 동안 116번 끊어 찍은 전파 관측이 한 편의 연속 영상이 됐습니다.

8월 26일 네이처에 실린 알고리즘 kine은 관측 한 번에 정지 화면 한 장을 만들던 방식을 버렸습니다. VLBA가 블레이자 3C 345를 찍은 관측을 신경망 하나에 함께 넣어, 시간에 대해 연속인 함수로 풀었습니다. 스페인 IAA-CSIC과 칼텍, 토론토대 연구진의 작업입니다. 저자 중 캐서린 보우먼은 사건지평선망원경의 블랙홀 영상 복원 알고리즘으로 알려진 계산영상 연구자입니다.

영상이 시간에 대해 연속이면 광학흐름을 걸 수 있습니다. 밝은 덩어리 몇 개의 이동 속도만 재던 자리에서, 제트 플라스마의 순간 속도를 화면 지점마다 뽑았습니다. 코어에 가까운 구간의 겉보기 흐름 속도 최댓값은 12c로 나왔습니다.

다만 27년 동안 관측 간격은 들쭉날쭉했고, 광학흐름은 고른 간격의 프레임을 요구합니다. Methods는 가장 가까운 관측에서 5.7개월 떨어진 보간 프레임까지 속도장 분석에 넣었다고 적어 두었습니다. 그 자리를 메운 것은 데이터가 아니라 모델이 학습한 시공간 상관입니다.

실측과 보간을 구분하는 표시는 영상이 아니라 그 옆 타임라인에 있는데, 영상이 논문 밖으로 나갈 때 따라가는 쪽은 타임라인이 아닙니다.

▶ 전문: https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #신경장 #전파천문학 #결측보간 #kine #3C345 #VLBA

---

## LinkedIn (EN)

Twenty-seven years of radio observations, taken 116 separate times, now run as a single continuous video.

Published in Nature on August 26, an algorithm called kine drops the convention of one still image per observation. It feeds every VLBA epoch of the blazar 3C 345 into one neural network and solves for a function that is continuous in time. The work comes from IAA-CSIC in Spain, Caltech and the University of Toronto, and one of the authors, Katherine Bouman, is the computational imaging researcher behind the Event Horizon Telescope's black hole image.

A video continuous in time can carry optical flow. Where the older method could only track how fast a few bright blobs moved, the team measured the instantaneous speed of the jet plasma at every point on the screen, peaking at an apparent 12c near the core.

The observations across those 27 years were irregular, though, and optical flow needs frames at regular intervals. The Methods section states that interpolated frames as far as 5.7 months from the nearest observation went into the velocity analysis. What filled those gaps was not data. It was the spatio-temporal correlation the network had learned.

What separates measurement from interpolation sits on the timeline beside the video rather than in it, and the timeline is not what travels when the video leaves the paper.

▶ Read: https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #NeuralFields #RadioAstronomy #DataInterpolation #kine #3C345 #VLBI

---

## Twitter/X (KO)

27년 동안 116번 끊어 찍은 전파 관측을 신경망 하나로 풀었습니다. 블레이자 제트의 순간 속도를 화면 지점마다 잰 논문이 네이처에 실렸습니다.

관측이 비는 시점은 모델이 채웠습니다. 채운 프레임과 잰 프레임을 구분하는 표시는 영상이 아니라 그 옆 타임라인에 있습니다.

https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/ko/

#페블러스 #데이터품질 #신경장 #kine

---

## Twitter/X (EN)

A Nature paper solved 116 radio observations spanning 27 years as one neural network, then measured the jet plasma's speed at every point on the screen.

The moments with no observation were filled by the model. What tells a filled frame from a measured one sits on the timeline beside the video, not in it.

https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/en/

#Pebblous #DataQuality #NeuralFields #kine

---

## Facebook (KO)

결측이 있는 구간을 모델로 채워 본 적이 있는 분이라면, 그 화면을 처음 띄웠을 때를 기억하실 겁니다.

어제까지 들쭉날쭉하던 선이 갑자기 매끄러워집니다.

보기 좋아진 만큼, 어디까지가 잰 값이고 어디부터가 채운 값인지는 화면에서 사라집니다.

8월 26일 네이처에 실린 전파천문 논문을 읽으면서 그 화면이 떠올랐습니다.

블레이자 3C 345에서 뻗어 나온 플라스마 제트가 끊김 없이 흘러가는 영상입니다. 재료는 1995년부터 2022년까지 27년 동안 VLBA가 찍은 관측 116회. 평균 석 달에 한 번꼴이지만 촘촘한 시기와 오래 비는 시기가 섞여 있습니다.

kine이라는 알고리즘은 관측마다 화면을 한 장씩 만드는 대신, 116회를 신경망 하나에 함께 넣어 시간에 대해 연속인 함수로 풀었습니다. 아무 시점이나 넣으면 화면이 나옵니다. 관측이 없는 시점을 넣어도 나옵니다.

덕분에 지금까지 못 하던 측정을 했습니다. 밝은 덩어리 몇 개의 이동 속도만 재던 자리에서, 화면의 모든 지점에서 플라스마의 순간 속도를 뽑았습니다.

논문은 그 대가도 적어 두었습니다. Methods에 가장 가까운 관측에서 5.7개월 떨어진 보간 프레임까지 속도 분석에 넣었다고 밝힙니다. 그 자리를 메운 것은 데이터가 아니라 모델이 학습한 시공간 상관입니다.

구분 장치가 없는 것은 아닙니다. Figure 1 캡션에 프레임에 해당하는 날짜를 타임라인 위에 빨간색으로 찍어 두었다는 한 줄이 있습니다.

다만 그 표시는 영상 안이 아니라 영상 옆에 있습니다.

"이 화면은 잰 것입니까, 채운 것입니까?"

논문을 처음부터 읽는 천문학자라면 물을 필요가 없는 질문입니다. Methods를 읽었을 것이고 타임라인도 봤을 것입니다. 어긋남은 영상이 논문 밖으로 나갈 때 생깁니다. 보도자료와 발표 슬라이드를 타고 도는 것은 매끄럽게 흐르는 제트이지, 그 옆 타임라인이 아닙니다.

'채워진 매끄러움'은 천문학만의 사정이 아닙니다. 결측을 앞뒤 값으로 채운 시계열, 응답이 없는 구간을 모델이 메운 대시보드, 표본이 부족한 지역까지 색이 칠해진 지도. 화면에서 채운 값과 잰 값은 같은 굵기의 선으로 나옵니다. 페블러스가 데이터 품질을 진단하면서 되풀이해 만나는 자리이기도 합니다.

기술적으로 어려운 일은 아닐 겁니다. 관측일 목록은 이미 손에 있고, 프레임 모서리에 점 하나를 찍는 정도면 됩니다. 하지 않는 이유는 능력이 아니라 우선순위일 텐데, 그 우선순위를 누가 정하는 자리에 있는지는 아직 답을 못 찾았습니다.

▸ https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/ko/

#페블러스 #데이터클리닉 #데이터품질 #신경장 #결측보간 #kine #3C345

---

## Facebook (EN)

If you have ever filled a gap in a series with a model, you probably remember the moment the chart first came up.

A line that had been jagged the day before is suddenly smooth.

And in becoming easier to look at, it stops showing you where the measurements end and the filling begins.

A radio astronomy paper published in Nature on August 26 brought that chart back to mind.

It is a video of the plasma jet streaming out of the blazar 3C 345, flowing without a break. The raw material is 116 observations made by the VLBA across 27 years, from 1995 to 2022. That averages out to one every three months, though in practice dense stretches sit next to long empty ones.

An algorithm called kine stopped making one image per observation. It fed all 116 into a single neural network and solved for a function continuous in time. Put in any moment and you get a frame. Put in a moment with no observation and you still get a frame.

That is what made a new measurement possible. Where the older method could only track how fast a few bright blobs moved, the team read the instantaneous speed of the plasma at every point on the screen.

The paper records the cost as well. The Methods section states that interpolated frames as far as 5.7 months from the nearest observation went into the velocity analysis. What filled those gaps was not data. It was the spatio-temporal correlation the network had learned.

There is a device for telling the two apart. One line in the caption of Figure 1 notes that the dates of the selected frames are marked in red on the timelines.

The marking sits beside the video rather than inside it.

"Is this frame measured, or filled?"

An astronomer reading the paper from the beginning has no need to ask. They will have read the Methods and looked at the timeline. The mismatch appears once the video leaves the paper. What travels through the press release and the conference slide is the smoothly flowing jet, not the timeline printed next to it.

"Filled smoothness" is not an astronomy problem. A time series whose gaps were carried over from neighboring values, a dashboard where a model covered the silent stretch, a map colored in over regions with too few samples. On screen, a filled value and a measured one are drawn with a line of the same weight. It is a place we keep arriving at in data quality work at Pebblous.

The marking itself would not be hard. The list of observing dates is already in hand, and a dot in the corner of the frame would do. The reason it is missing is priority rather than capability, and where that priority gets decided is what I am still turning over.

▸ https://blog.pebblous.ai/blog/kine-neural-field-vlbi-jet-video/en/

#Pebblous #DataClinic #DataQuality #NeuralFields #DataInterpolation #kine #3C345
