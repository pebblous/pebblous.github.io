# SNS 홍보 글: 철강 미세조직 라벨링 시간이 170시간에서 37시간으로 줄었다

> 소스: blog/steel-microstructure-labeling-170h-to-37h/ko/index.html
> 생성일: 2026-06-25
> URL: https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

철강 사진 82장에 픽셀 라벨을 다는 데 전문가 3명이 170시간을 썼습니다. 같은 작업이 37시간으로 줄었습니다.

비결은 모델을 더 키운 게 아닙니다. 라벨이 하나도 없는 상태에서 학습한 비지도 CNN이 먼저 초벌 마스크를 깔아 두자, 전문가는 빈 화면이 아니라 이미 칠해진 그림 위에서 틀린 곳만 고쳤습니다.

정작 초벌의 정확도는 낮았습니다. 예측과 정답이 겹치는 비율이 절반에도 못 미쳤죠. 그런데도 시간은 78% 줄었습니다. 사람은 처음부터 그리는 일보다 고치는 일에 압도적으로 빠르기 때문입니다.

그래도 22%는 끝내 사람 몫으로 남았습니다. 면적은 작지만 성질을 좌우하는 소수 상, 누구도 단언하기 어려운 모호한 경계처럼 정밀도가 아니라 판단이 필요한 자리였습니다.

AI의 진짜 병목은 모델이 아니라 라벨입니다. 페블러스가 데이터 품질 자율화로 풀려는 문제가 정확히 이것입니다. 반복적인 초벌은 자동화하고, 판단이 필요한 마무리는 사람에게 남깁니다.

▶ 전문: https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #휴먼인더루프 #데이터라벨링 #시맨틱세그멘테이션 #어노테이션

---

## LinkedIn (EN)

Three experts spent 170 hours painting pixel labels onto 82 photographs of steel. A new method cut that to 37.

The trick wasn't a bigger model. An unsupervised CNN, trained with no labels at all, laid down a rough first-pass mask, and the experts only corrected what was wrong instead of drawing from a blank canvas.

The pre-labels were poor, overlapping the ground truth less than half the time. The work still fell by 78%, because people are far faster at fixing a shape than drawing one from scratch.

Yet 22% stayed human. The rare-but-critical phases, the ambiguous boundaries that three experts had to agree on. That remainder wasn't a precision gap. It was judgment.

The real bottleneck in AI-ready data isn't the model, it's the label. This is the problem Pebblous works on with automated data quality: automate the repetitive first pass, keep people where judgment is required.

▶ Read: https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #HumanInTheLoop #DataLabeling #SemanticSegmentation #Annotation

---

## Twitter/X (KO)

철강 사진 82장에 픽셀 라벨을 다는 데 170시간. 같은 작업이 37시간으로 줄었습니다.

비지도 CNN이 초벌을 깔고 전문가는 고치기만 했습니다. AI의 병목은 모델이 아니라 라벨이라는 증거입니다.

https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/ko/

#페블러스 #데이터품질 #데이터라벨링 #휴먼인더루프 #AIReadyData

---

## Twitter/X (EN)

170 hours to pixel-label 82 steel photos. A new pipeline did it in 37.

An unsupervised CNN drafts, experts only correct. Proof that the bottleneck in AI data is the label, not the model.

https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/en/

#Pebblous #DataQuality #DataLabeling #HumanInTheLoop #AIReadyData

---

## Facebook (KO)

사진 한 장을 두고 전문가 세 사람이 픽셀을 하나하나 칠합니다.

철강 내부의 미세조직. 어떤 영역이 어떤 상(phase)인지, 사람 눈으로 경계를 가려 색을 입히는 일입니다. 사진 82장에 그렇게 정답을 다는 데 170시간이 걸렸습니다.

스페인 연구진은 이 시간을 줄여 보기로 했습니다. 라벨이 하나도 없는 상태에서 학습한 기계가 먼저 초벌을 깔고, 전문가는 빈 화면이 아니라 이미 칠해진 그림 위에서 시작했습니다. 그러자 170시간이 37시간이 됐습니다.

이상한 건 기계가 깐 초벌의 정확도가 그리 높지 않았다는 점입니다. 절반도 맞히지 못했죠. 그런데도 시간은 가장 많이 줄었습니다. 사람은 백지에서 그리는 일보다 이미 있는 것을 고치는 일에 훨씬 빠르니까요.

그래서 더 오래 들여다보게 되는 건 줄어든 78%가 아니라 끝내 남은 22%입니다. 면적은 작아도 성질을 좌우하는 상, 누구도 단언하기 어려운 모호한 경계. 기계가 못 한 게 아니라, "여기엔 판단이 필요하다"가 남은 자리였습니다.

자동화가 사람을 밀어낸다고들 합니다. 그런데 이 82장의 사진이 보여 준 건 조금 다릅니다. 기계가 일을 떠안을수록, 사람에게 남는 일은 사라지는 게 아니라 더 판단에 가까운 쪽으로 모입니다. 페블러스가 데이터 품질의 자동화를 말할 때 사람을 치우지 않고 가장 값진 자리로 옮긴다고 하는 것도, 결국 같은 이야기일지 모릅니다.

전문은 여기에 있습니다: https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/ko/

#페블러스 #데이터클리닉 #데이터품질 #휴먼인더루프 #데이터라벨링 #AIReadyData

---

## Facebook (EN)

Three people sit in front of a single photograph, coloring it pixel by pixel.

What they are marking is the microstructure inside steel: which region is which phase, a boundary the eye has to find before the hand can fill it. Labeling 82 such photos took 170 hours.

A Spanish team set out to shorten that. A machine, trained with no labels at all, laid down a rough first pass, and the experts began not from a blank screen but from a picture already colored in. 170 hours became 37.

The strange part is that the machine's first pass wasn't very accurate. It got less than half of it right. And yet the time fell the most. People are simply far quicker at correcting something that already exists than at drawing it from nothing.

So what stays with me isn't the 78% that vanished but the 22% that wouldn't. The phases too small to notice yet decisive for the material, the boundaries no one can call with certainty. The machine didn't fail there. That was where judgment was needed.

We tend to say automation pushes people out. These 82 photographs suggest something quieter. The more the machine takes on, the work left to people doesn't disappear; it gathers toward judgment. When Pebblous talks about automating data quality, it means the same thing: not removing the person, but moving them to where their judgment is worth the most.

Read the full piece: https://blog.pebblous.ai/blog/steel-microstructure-labeling-170h-to-37h/en/

#Pebblous #DataClinic #DataQuality #HumanInTheLoop #DataLabeling #AIReadyData
