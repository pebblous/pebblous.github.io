# SNS 홍보 글: 전이학습, 평균은 올라도 손해 보는 우물이 생긴다

> 소스: blog/selective-transfer-learning-groundwater/ko/index.html
> 생성일: 2026-11-01
> URL: https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

미리 학습시킨 모델을 그대로 가져다 쓰면 성적이 오른다는 말은 평균에서만 참이었다. 암스테르담대 연구진이 네덜란드 지하수 관측정 457곳을 우물 하나씩 쪼개 다시 세어 보니, 그 방식은 전체의 18.38~51.86%에서 사전학습을 아예 쓰지 않은 모델보다 나쁜 예측을 냈다. 그동안 전체 평균 오차는 거의 움직이지 않았다. 10월 27일 arXiv에 공개된 논문이다.

맞세운 것은 같은 신경망 구조를 공유하는 네 방식이다. 사전학습 없음, 늘 전이, 모든 우물에 하나의 비율을 쓰는 고정 혼합, 그리고 우물과 시점마다 비율을 다시 정하는 선택적 전이. 평균만 적힌 표에서 넷은 구별되지 않는다. 가장 앞선 방식과 가장 뒤처진 방식의 오차 차이가 각 값에 붙은 흔들림 폭 안에 들어간다.

갈림은 우물 단위로 쪼갠 뒤에야 나타났다. 이득 본 우물과 손해 본 우물이 서로를 상쇄하는 동안 전체 오차는 제자리를 지킨다. 들이기 전에 흔히 거는 안전장치인 유사도 점수도 이 갈림을 미리 알려 주지 못했다. 소스와 타깃이 얼마나 닮았는지와 전이가 실제로 거둔 성과 사이의 상관은 크기가 작을 뿐 아니라 부호가 뒤집혔다.

연구진이 제안한 선택적 방식은 손해 본 우물의 거의 전부에서 피해를 줄였지만, 사전학습 없는 모델보다 나아진 데까지 간 우물은 넷 중 하나에서 둘 사이였다. 저자들은 그 회복이 맥락을 알아본 증거가 아니라 두 예측을 섞는 연산이 극단을 깎은 결과일 수 있다고 초록에 직접 적었다. 다섯 번의 실험 가운데 네 번은 더 단순한 고정 혼합이 더 많은 우물을 지켰다.

우물을 걷어 내면 구조는 낯설지 않다. 설비 이상 감지든 영상 판독이든, 데이터가 모자란 현장에 외부에서 배운 모델을 들이고 성과는 평균으로 보고받는다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 수치화해 진단한다. 닮은 데이터로 배웠으니 괜찮을 것이라는 문장은 아직 검증 결과가 아니라 기대인데, 그 기대를 현장 단위로 되물을 칸이 보고서에 없다.

▶ 전문: https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #전이학습 #네거티브전이 #도메인적응 #지하수위예측 #arXiv #AIReadyData

---

## LinkedIn (EN)

Reusing a model trained on someone else's data raises the score, but only the average one. Counted well by well across 457 Dutch groundwater monitoring sites, that same practice produced worse forecasts than a model with no pretraining at all at 18.38 to 51.86 percent of them. The overall error barely moved while it happened. The study went up on arXiv on October 27 from a team at the University of Amsterdam.

Four approaches were compared, all sharing one network architecture. No pretraining. Pretraining everywhere. A fixed blend that gives every well the same mixing weight. And a selective version that sets the weight per well and per time step. On a table of averages the four are indistinguishable: the gap between best and worst sits inside the spread attached to each value.

The split only appears once the results are broken out by site. Wells that gained and wells that lost cancel each other, and the overall error holds its place. The safeguard most teams reach for first, a similarity score between source and target, gave no warning either. Its correlation with actual transfer performance was not just small; it ran from negative to positive.

The selective method the authors propose reduced the damage at nearly every harmed well. Yet only between a quarter and two fifths of them ended up better than the no-pretraining baseline. The abstract says as much: the recovery may be convex blending shaving off extremes, not the gate reading context. In four runs out of five, the simpler fixed blend protected more wells.

Take the wells out and the shape is ordinary. Equipment anomaly detection, image reading, demand forecasts per branch: a model learned elsewhere arrives at a site short on data, and the result comes back as an average. Pebblous puts the quality of AI training data onto a measured scale with DataClinic. The sentence that says the source data looked similar enough is an expectation rather than a finding, and most reports leave no column in which to test it site by site.

▶ Read: https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #TransferLearning #NegativeTransfer #DomainAdaptation #GroundwaterForecasting #arXiv #AIReadyData

---

## Twitter/X (KO)

네덜란드 지하수 관측정 457곳을 우물 단위로 다시 센 arXiv 논문. 다른 데이터로 미리 학습시킨 모델은 전체 평균을 거의 그대로 둔 채, 18.38~51.86%의 우물에서 사전학습 없는 모델보다 나쁜 예측을 냈다.

평균이 좋아졌다는 말과 우리 현장이 좋아졌다는 말은 다른 문장이다.

▶ https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/ko/

#페블러스 #데이터품질 #전이학습 #네거티브전이

---

## Twitter/X (EN)

A new arXiv study counted transfer learning well by well across 457 Dutch groundwater sites. Reusing a pretrained model left the overall error almost untouched while making forecasts worse at 18.38 to 51.86 percent of the sites.

An average that improved and a site that improved are two different claims.

▶ https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/en/

#Pebblous #DataQuality #TransferLearning #NegativeTransfer

---

## Facebook (KO)

다른 팀에서 잘 돌아간다는 모델을 받아다 우리 데이터에 올려 본 적이 있습니다.

전체 성적표는 분명히 좋아졌습니다.

그런데 몇몇 현장에서만 예전보다 더 틀렸고, 왜 하필 거기였는지는 끝까지 설명하지 못했습니다.

그 일을 다시 꺼내 보게 된 것은 지난주 arXiv에 올라온 네덜란드 지하수 논문 때문입니다.

암스테르담대 연구진이 관측정 457곳을 한 곳씩 떼어 세어 봤습니다.

미리 학습시킨 모델을 모든 우물에 똑같이 적용했을 때, 전체 평균 오차는 거의 그대로였습니다.

그런데 그 평균 아래에서는 다섯 곳 중 한 곳, 많게는 절반을 조금 넘는 데까지가 사전학습을 쓰지 않았을 때보다 나쁜 예측을 받고 있었습니다.

'평균이 덮은 두 무리'.

정작 눈이 간 곳은 비율의 크기가 아니라, 어느 우물이 어느 무리에 들어갈지를 아무도 미리 알지 못했다는 대목입니다.

닮은 데이터를 골랐으니 안전하다는 흔한 안전장치도 여기서는 듣지 않았습니다. 소스와 타깃의 유사도와 전이 성과의 상관은 부호조차 한쪽으로 모이지 않았습니다.

"우리 현장은 평균을 올린 쪽입니까, 평균에 가려진 쪽입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 저희가 받는 질문은 대개 들여온 데이터가 쓸 만한가입니다. 이 논문을 읽고 나면 그 옆에 하나가 더 붙습니다. 어느 현장에는 들이지 않는 편이 나은가. 두 질문은 같은 점수표로 답해지지 않습니다.

논문이 제안한 선택적 방식은 손해 본 우물의 거의 전부에서 피해를 덜어 냈습니다. 다만 저자들은 그 회복이 맥락을 잘 읽어서가 아니라, 두 예측을 섞는 연산이 구조상 극단을 깎기 때문일 수 있다고 스스로 적어 두었습니다.

자기 방법의 공을 반쯤 돌려놓는 문장을 초록에 적는 논문은 흔하지 않습니다.

현장 단위로 쪼개 보는 일은 품이 듭니다.

쪼개 보지 않으면 평균은 끝까지 아무 잘못도 저지르지 않은 것처럼 보입니다.

▶ 전문: https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/ko/

#페블러스 #전이학습 #네거티브전이 #지하수위예측 #데이터클리닉

---

## Facebook (EN)

I have taken a model that was working well for another team and pointed it at our own data.

The overall numbers did improve.

A handful of sites got worse than before, and I never managed to say why those particular ones.

A groundwater paper out of Amsterdam, posted to arXiv last week, set me back down in front of it.

The researchers took 457 Dutch monitoring wells and counted them one at a time.

Applying one pretrained model everywhere left the overall error almost where it had been.

Underneath that average, anywhere from a fifth of the wells to a little over half were being forecast worse than if nothing had been pretrained at all.

Two crowds under one number.

The part I sat with is not the size of the share. It is that which crowd a given well would fall into was not knowable beforehand.

The usual reassurance, that the source data was chosen for its similarity, did not hold here either. The correlation between similarity and transfer performance would not even settle on a sign.

"Is our site the one lifting the average, or the one hidden by it?"

Pebblous puts the quality of AI training data onto a measured scale with DataClinic. The question we are usually handed is whether the incoming data is good enough. After this paper a second one lands beside it: which sites would be better off not receiving it at all. One scoreboard does not answer both.

The selective method in the paper did reduce the damage at nearly every harmed well. The authors then write that the recovery may be the arithmetic of blending two predictions, which shaves extremes by construction, rather than the gate understanding context.

It is not common for a paper to hand back half the credit for its own method in its own abstract.

Breaking results out site by site costs something.

Leave them whole and the average goes on looking as though it never did any harm.

▶ Full piece: https://blog.pebblous.ai/blog/selective-transfer-learning-groundwater/en/

#Pebblous #TransferLearning #NegativeTransfer #GroundwaterForecasting #DataClinic
