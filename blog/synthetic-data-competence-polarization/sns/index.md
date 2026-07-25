# SNS 홍보 글: 합성 데이터로 반복 학습한 AI, 실력이 양극화된다

> 소스: blog/synthetic-data-competence-polarization/
> 생성일: 2026-07-26
> URL: https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

합성 데이터로 자기 자신을 반복 학습한 모델은 성능이 고르게 무너지지 않았다. 최근 arXiv 연구(2607.17043)가 스킬 단위로 뜯어 보니, 잘하던 계산은 더 잘하게 되고 약하던 대수·시간 추론은 더 약해지는 실력의 양극화가 나타났다.

원인은 데이터가 만들어지는 방식에 있다. 모델이 학습용 문제를 스스로 생성할 때 이미 자신 있는 영역에서 더 쉽게 더 많이 뽑아내고, 그 편향이 세대를 거듭하며 강한 스킬만 살찌운다. 그래서 방향 없이 물량만 늘린 합성 데이터는 5세대 뒤 GSM8K에서 손대지 않은 기본 모델과 거의 같은 자리에 머물렀다.

연구진의 처방 KITE는 반대로 간다. 약한 스킬을 먼저 진단해 그 지점에서 문제를 만들고, 답이 하나로 굳지도 산산이 흩어지지도 않는 애매한 경계 사례만 골라 학습시킨다. 후보 2,000개 중 500개만 남기는 이 선별로, 반복 학습 9세대까지 붕괴 없이 성능이 올랐다.

붕괴를 막은 힘은 더 깨끗한 데이터를 더 많이 붓는 데 있지 않았다. 무엇을 남길지 고르는 조준에 있었다. 페블러스가 합성 데이터를 만들 때 청결도만큼 이 데이터가 어느 빈자리를 겨누는가를 함께 묻는 이유도 여기에 있다. 데이터 준비의 질문이 얼마나 깨끗한가에서 어느 약점을 메우는가로 옮겨 가는 것이다.

▶ 전문: https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PebbloSim #AIReadyData #합성데이터 #모델붕괴 #데이터큐레이션 #KITE #GSM8K

---

## LinkedIn (EN)

Train a model on its own synthetic data, generation after generation, and it doesn't decay evenly. A new arXiv study (2607.17043) broke the failure down skill by skill and found something sharper: the strong skills got stronger and the weak ones got weaker. The authors call it a polarization of competence, not uniform degradation.

The cause sits in how the data is made. When a model writes its own training problems, it samples most heavily from the regions it is already confident in, and that bias compounds each generation. Undirected volume alone does not help: after five rounds of Self-Instruct, GSM8K accuracy landed essentially where the untouched base model started.

The fix, called KITE, runs the other way. It first diagnoses the weak skills, generates problems there, then keeps only the ambiguous cases near the model's knowledge boundary, discarding three of every four candidates. That selection held off collapse through nine generations, with Llama-3-8B climbing 2.8 points on GSM8K instead of sliding.

What stopped the collapse was not cleaner data in greater volume. It was aim. And so the question for data preparation moves from how clean the data is to which weakness it fills.

▶ Read: https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PebbloSim #AIReadyData #SyntheticData #ModelCollapse #DataCuration #KITE #GSM8K

---

## Twitter/X (KO)

합성 데이터로 반복 학습한 AI는 고르게 무너지지 않았다. 잘하던 스킬은 더 강해지고, 약하던 스킬은 더 약해지는 실력의 양극화.
붕괴를 막은 건 더 많은 데이터가 아니라 약점을 겨눈 큐레이션이었다.
https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/ko/
#페블러스 #합성데이터 #모델붕괴 #KITE

---

## Twitter/X (EN)

Retrain a model on its own synthetic data and it doesn't fail evenly. Strong skills get stronger, weak ones weaker: a polarization of competence.
What stopped the collapse wasn't more data. It was aiming data at the weak spots.
https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/en/
#Pebblous #SyntheticData #ModelCollapse #KITE

---

## Facebook (KO)

시험공부를 하면서 자꾸 이미 잘 푸는 문제만 다시 풀어 본 적이 있으신가요.

틀리는 단원은 왠지 손이 안 가고, 익숙한 유형만 반복하다 보면 잘하는 건 더 잘하게 되는데 약한 곳은 그 자리에 그대로 남습니다.

최근 한 연구를 읽다가, AI도 똑같은 함정에 빠진다는 걸 알게 됐습니다. 합성 데이터로 자기 자신을 반복 학습한 모델을 스킬 단위로 뜯어 보니, 성능이 고르게 무너지는 게 아니었습니다. 잘하던 계산은 더 잘하게 되고, 약하던 추론은 더 약해졌습니다. 연구진은 이걸 균일한 열화가 아니라 실력의 양극화라고 불렀습니다.

이유가 오래 남았습니다. 모델이 학습할 문제를 스스로 만들 때, 이미 자신 있는 영역에서 더 쉽게 더 많이 뽑아냅니다. 강한 쪽으로 기운 손이 세대를 거듭하며 격차를 벌립니다. 데이터가 더러워서가 아니라, 무엇을 만들지가 강한 쪽으로 쏠려서 벌어지는 일이었습니다.

그래서 연구진이 택한 처방은 더 많이 붓는 게 아니었습니다. 약한 곳을 먼저 찾아 거기서 문제를 만들고, 그중에서도 너무 쉽지도 너무 어렵지도 않은 애매한 경계의 문제만 골라 남겼습니다. 넷 중 셋을 버리는 이 선별이, 반복 학습을 아홉 세대까지 밀어붙여도 모델을 무너지지 않게 했습니다.

페블러스가 합성 데이터를 만들 때 청결도만큼 이 데이터가 어느 빈자리를 겨누는가를 함께 묻는 이유도 여기에 있습니다.

그렇다면 우리가 데이터에 던질 질문은 얼마나 깨끗한가에서 어느 약점을 메우는가로 옮겨 가는 걸까요.

전문 → https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/ko/

#페블러스 #합성데이터 #모델붕괴 #PebbloSim #AIReadyData #데이터품질 #KITE

---

## Facebook (EN)

Have you ever studied by redoing the problems you already know how to solve?

The units you keep getting wrong somehow never get your attention, and the familiar ones only get more familiar. What you're good at gets better; the weak spots stay exactly where they were.

I found the same trap sitting inside a recent study on AI. When a model was retrained on its own synthetic data, generation after generation, its skills did not fade evenly. The calculations it was already good at grew stronger, and the reasoning it was weak at grew weaker. The authors called this a polarization of competence rather than a uniform decline.

What stayed with me was the reason. When a model writes its own practice problems, it draws most from the areas it already feels sure about. A hand that leans toward strength keeps leaning, and the gap widens with each round. The data was not dirty; the choice of what to make was simply tilted.

So the fix was not to pour in more. The researchers found the weak spots first, generated problems there, and kept only the ambiguous ones sitting near the edge of what the model knew, throwing away three of every four. That quiet act of selection carried the model through nine generations without collapse.

It is also why, when we build synthetic data at Pebblous, we ask not only whether the data is clean but which gap it is aimed at.

Maybe the real question we bring to our data is shifting from how clean it is to which weakness it fills.

Read → https://blog.pebblous.ai/blog/synthetic-data-competence-polarization/en/

#Pebblous #SyntheticData #ModelCollapse #PebbloSim #AIReadyData #DataQuality #KITE
