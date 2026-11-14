# SNS 홍보 글: 은하 막대를 찾는 AI BRAHMa, 정답표만큼만 정확하다

> 소스: blog/brahma-galaxy-bar-ground-truth-floor/ko/index.html
> 생성일: 2026-10-08
> URL: https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

모델 점수를 올리기 전에 정답표부터 의심한 논문이 10월 5일 arXiv에 올라왔다. BRAHMa는 은하 사진에서 중심을 가로지르는 막대를 찾아 길이를 재는 공개 도구다. 회전 가능한 상자 하나에 막대의 위치와 길이와 기울기를 함께 담고, 사진 한 장을 수십 밀리초에 처리한다. 문제는 그 길이가 맞았는지 확인할 자리다. 은하 막대 길이에는 모두가 인정하는 정답표가 없다.

사람이 만든 목록은 둘이 있고, 두 목록에 함께 올라 있는 은하 586개에서 평균 0.99kpc 어긋난다. 한쪽은 자원자가 막대를 따라 선을 한 줄 긋는 방식이고, 다른 쪽은 은하마다 자원자 열다섯 명이 다각형을 그리는 방식이다. 측정하는 행위가 다르니 막대가 어디서 끝나는가에 대한 답도 갈린다. 저자들은 어느 한쪽을 정답으로 세우는 대신 이 어긋남을 측정의 바닥으로 선언했다.

그 바닥 위에 올려놓은 자기 모델의 오차가 1.14kpc다. 간격은 0.15kpc이고, 저자들은 이것을 자원자를 신경망으로 바꾸는 데 드는 겉보기 값이라고 적었다. 이 비교를 지배하는 것은 모델이 아니라 사람의 두 관례가 어긋난 폭이라는 말도 함께 적혀 있다.

저자들이 직접 밝힌 조건도 짧지 않다. 이진화 기준과 보정식을 평가에 쓴 바로 그 은하들에서 골랐고, 평가 대상 3,150개 가운데 최대 586개는 학습에 들어간 은하와 겹칠 수 있다. 학습에 쓰지 않은 자료로 시험해 본 은하는 두 개뿐이었고, 그 확인에 저자들이 붙인 평가도 솔직하다. 은하 두 개는 통계가 아니다.

정답표의 불일치를 재 두면 오차의 바닥이 곧 모델 점수의 천장이 된다. 사람끼리 0.99kpc 갈리는 자리에서 오차 0.1kpc를 주장하는 모델이 나왔다면, 더 정확해진 것이 아니라 한쪽 집단의 손버릇을 외웠을 가능성이 높다. 페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제도 같은 자리에 있다. 라벨이 어떤 지침으로 붙었고 사람끼리 얼마나 갈렸는지가 함께 기록돼야, 그 위에서 계산한 정확도가 비로소 의미를 가진다.

▶ 전문: https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #BRAHMa #GalaxyZoo3D #라벨노이즈 #어노테이션불일치 #시민과학 #AIReadyData

---

## LinkedIn (EN)

A paper posted to arXiv on October 5 measured its answer key before it measured its model. BRAHMa is a public tool that finds the straight bar running through the centre of a galaxy and reports how long it is. A single rotatable box carries the position, the length and the tilt at once, and an image takes tens of milliseconds. The harder question is what to check that length against. For bar length there is no answer key everyone accepts.

Two catalogues built by people exist, and on the 586 galaxies they share their lengths differ by 0.99 kpc on average. In one, a volunteer draws a single line along the bar. In the other, fifteen volunteers draw polygons around each galaxy. The act of measuring differs, so the answer to where a bar ends differs with it. Rather than crown one catalogue as the truth, the authors declared that gap the floor of the measurement.

Set against that floor, their own model sits 1.14 kpc out. The difference is 0.15 kpc, which they wrote down as the apparent price of replacing the volunteers with a network. They add that what dominates the comparison is the distance between two human conventions, not the model.

The conditions the authors state themselves are not short either. The binarisation threshold and the correction were chosen on the same galaxies used for the evaluation, and up to 586 of the 3,150 galaxies scored may overlap with the training set. Only two galaxies were tried on imaging the model had never trained on, and the authors are plain about what that is worth. Two galaxies are not statistics.

Measure the disagreement in the answer key and the floor of the error becomes the ceiling on the score. Where people differ by 0.99 kpc, a model claiming a 0.1 kpc error has probably not grown more accurate. It has memorised the habits of one group of hands. That is the premise Pebblous puts first in AI-Ready Data: accuracy computed on a label means something only when the guidelines behind the label, and the spread between the people who applied them, were recorded alongside it.

▶ Read: https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #BRAHMa #GalaxyZoo3D #LabelNoise #AnnotationDisagreement #CitizenScience #AIReadyData

---

## Twitter/X (KO)

은하 막대를 재는 AI가 사람 정답표에서 1.14kpc 어긋났다. 그런데 사람이 만든 정답표 두 개는 자기들끼리 0.99kpc 어긋나 있었다.

저자들은 어느 쪽도 정답으로 세우지 않았다. 사람끼리의 불일치를 측정의 바닥으로 삼고, 그 위에서 모델을 읽었다.

▶ https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/ko/

#페블러스 #BRAHMa #라벨노이즈 #데이터품질

---

## Twitter/X (EN)

A model that measures galaxy bars lands 1.14 kpc from the human answer key. The two human answer keys land 0.99 kpc from each other.

The authors crowned neither. They made the human disagreement the floor of the measurement and read the model against it.

▶ https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/en/

#Pebblous #BRAHMa #LabelNoise #DataQuality

---

## Facebook (KO)

은하 사진 한 장을 펴 놓고 "이 막대가 어디서 끝납니까"라고 물으면, 사람마다 다른 자리를 짚습니다.

누가 덜 훈련받아서가 아닙니다. 막대가 흐려지며 사라지는 구간을 어디까지 막대로 볼지가 애초에 정해져 있지 않기 때문입니다.

사람이 적어 둔 막대 길이 목록은 둘이 있습니다.

한쪽은 자원자가 막대를 따라 선을 한 줄 긋습니다. 다른 쪽은 은하 하나에 자원자 열다섯 명이 다각형을 그리고, 픽셀마다 몇 명이 겹쳤는지를 그대로 남깁니다.

두 목록에 함께 올라 있는 은하 586개에서, 두 집단이 적은 길이는 평균 0.99킬로파섹 어긋나 있었습니다.

이번 달 공개된 BRAHMa 논문은 여기서 흔한 선택을 하지 않았습니다.

둘 중 하나를 정답으로 세우고 나머지를 버리는 대신, 그 어긋남 자체를 "측정의 바닥"이라고 불러 두었습니다.

그 바닥 위에 자기 모델을 올려 보니 오차가 1.14킬로파섹이었습니다. 간격은 0.15.

저자들은 이 간격을 자원자를 신경망으로 바꾸는 데 드는 겉보기 값이라고 적었습니다.

제가 자꾸 되돌아간 낱말은 바닥입니다.

보통의 데이터 작업은 반대로 갑니다. 여러 사람이 라벨을 붙이고 나면 다수결이나 중재로 하나를 고르고, 그 하나를 정답으로 확정한 다음 모델 점수를 세기 시작합니다.

확정하는 순간, 사람들이 서로 갈렸다는 사실은 데이터에서 사라집니다.

흉부 X선 100장을 방사선과 의사 여섯 명이 각자 두 차례 판독한 2022년 연구가 있습니다. 소견 항목별 일치도는 0.40에서 0.99까지 퍼졌습니다. 가장 낮은 항목은 무기폐였습니다.

같은 사진, 같은 항목, 훈련받은 전문가 여섯 명인데도 그렇습니다.

"우리 모델의 정확도 99%는, 그 정답표를 만든 사람들끼리의 일치도보다 높습니까?"

모델 점수는 소수점 셋째 자리까지 관리됩니다. 그 점수를 떠받치는 정답표가 얼마나 흔들리는지는 어디에도 적혀 있지 않은 경우가 많습니다.

페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제가 같은 자리에 있습니다. 데이터의 품질은 데이터만 들여다봐서 알 수 없고, 그것이 어떻게 만들어졌는지가 함께 기록돼야 합니다. 라벨도 다르지 않습니다.

누가 어떤 지침으로 붙였고 서로 얼마나 갈렸는지가 남아 있어야, 그 위에서 계산한 정확도가 비로소 읽힙니다.

우리 팀이 가진 정답표의 일치도는 얼마입니까. 그 숫자가 적힌 문서가 아직 손에 없다면, 먼저 올릴 것은 모델 점수가 아닐지도 모릅니다.

▶ 전문: https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/ko/

#페블러스 #BRAHMa #GalaxyZoo3D #데이터품질 #데이터클리닉 #AIReadyData #라벨노이즈

---

## Facebook (EN)

Put a photograph of a galaxy in front of several people and ask where the bar across its centre ends. They will point at different places.

Not because some of them are less trained. Because nobody has settled how far into the fading edge a bar is still a bar.

Two catalogues of human-measured bar lengths exist.

In one, a volunteer draws a single line along the bar. In the other, fifteen volunteers draw a polygon around each galaxy, and the count of how many polygons cover each pixel is kept as it is.

On the 586 galaxies both catalogues contain, the lengths the two groups wrote down differ by 0.99 kiloparsecs on average.

The BRAHMa paper, released this month, declined the usual move at that point.

Instead of crowning one catalogue and discarding the other, it called the disagreement itself "the floor of the measurement."

Placed on that floor, the authors' own model came out 1.14 kiloparsecs off. The difference is 0.15.

They wrote that difference down as the apparent price of replacing the volunteers with a network.

The word that held me was floor.

Most data work runs the other way. Several people label the same thing, a majority vote or an adjudicator picks one version, that version becomes the truth, and only then does anyone start counting model scores.

The moment it is fixed, the fact that people disagreed leaves the data.

There is a 2022 study in which six radiologists each read the same 100 chest X-rays twice. Agreement across the finding categories ranged from 0.40 to 0.99. The lowest was atelectasis.

Same images, same categories, six trained specialists.

"Is our model's 99 per cent accuracy higher than the agreement among the people who built the answer key?"

Model scores get managed to the third decimal place. How much the answer key underneath them wobbles is often written down nowhere at all.

There is a premise Pebblous puts first whenever AI-Ready Data comes up. The quality of data cannot be read off the data alone; how it came to exist has to be recorded with it. Labels are no different.

Who applied them, under which guidelines, and how far apart those people ended up. Keep that, and the accuracy computed on top becomes readable.

What is the agreement rate on your team's answer key? If no document in hand carries that number yet, the model score may not be the first thing to raise.

▶ Full piece: https://blog.pebblous.ai/blog/brahma-galaxy-bar-ground-truth-floor/en/

#Pebblous #BRAHMa #GalaxyZoo3D #DataQuality #DataClinic #AIReadyData #LabelNoise
