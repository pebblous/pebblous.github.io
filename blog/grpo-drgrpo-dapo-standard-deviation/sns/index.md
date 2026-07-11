# SNS 홍보 글: GRPO·Dr.GRPO·DAPO가 다르게 만진 것은 표준편차 하나였다

> 소스: blog/grpo-drgrpo-dapo-standard-deviation/
> 생성일: 2026-07-12
> URL: https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

GRPO, Dr.GRPO, DAPO. 서로 다른 팀이 내놓은 세 강화학습 기법을 두고, 실무자는 보통 셋 중 무엇을 쓸지를 고릅니다. 2026년 7월 논문 하나가 그 전제를 흔들었습니다. 세 방법은 결국 보상의 표준편차라는 한 숫자를 다르게 다룰 뿐입니다. GRPO는 그 값으로 나누고, Dr.GRPO는 나눗셈을 빼고, DAPO는 그 값이 0인 문제를 배치에서 버립니다.

핵심 정리는 한 문장으로 압축됩니다. 정답과 오답을 이진 보상으로 채점할 때, 한 문제의 학습 업데이트 크기는 그 문제에 대한 응답들의 표준편차와 정확히 같습니다. 그래서 정답률이 반반으로 갈리는 문제가 학습을 가장 세게 밀어 올리고, 전부 맞히거나 전부 틀리는 문제는 아무것도 가르치지 못합니다. Big-Math 21만 문제에 그룹 크기 8을 적용하면 약 44%가 이렇게 침묵한다는 예측이 실측과 거의 그대로 맞았습니다.

그림자도 분명합니다. 어려운 문제에서 학습 신호를 얻어 내려면 표집 비용이 가파르게 오릅니다. 그럼에도 방향은 하나로 모입니다. 세 알고리즘 중 무엇을 쓸지보다, 어떤 난이도의 문제를 훈련 세트에 넣을지가 먼저라는 것입니다. 페블러스가 좋은 데이터를 정보량 있는 데이터라 말할 때 가리키는 지점이 바로 여기입니다.

▶ 전문: https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #강화학습 #LLM #커리큘럼러닝 #GRPO #DAPO #DrGRPO #ByteDance

---

## LinkedIn (EN)

Three reinforcement-learning methods, three papers, three labs. GRPO, Dr.GRPO, and DAPO are usually treated as rival recipes you pick between. A July 2026 paper argues they are the same move: three ways of handling one number, the standard deviation of the rewards. GRPO divides by it, Dr.GRPO drops the division, DAPO throws out the problems where it is zero.

The core result fits in a sentence. Under binary right-or-wrong scoring, the size of a problem's learning update equals the standard deviation of the model's answers to it. Problems that split evenly between correct and wrong push learning the hardest; problems the model always gets right, or always gets wrong, teach nothing. On Big-Math's 210,000 problems with a group size of eight, roughly 44 percent of groups fall silent, and the prediction held to within two points of what was measured.

The practical takeaway inverts the usual order. Before choosing among the three algorithms, decide which difficulty of problem enters the training set at all. That is where Pebblous locates data quality: the informative middle, where the answers still disagree.

▶ Read: https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ReinforcementLearning #LLM #CurriculumLearning #GRPO #DAPO #DrGRPO

---

## Twitter/X (KO)

GRPO·Dr.GRPO·DAPO는 서로 다른 알고리즘이 아니었습니다. 보상의 표준편차라는 한 숫자를 나누고, 빼고, 버리는 세 방식일 뿐입니다.

한 문제의 학습량은 그 문제 응답들의 표준편차와 같습니다. 그래서 정답과 오답이 반반인 문제가 가장 많이 가르칩니다.

어떤 알고리즘을 쓰느냐보다, 어떤 문제를 훈련에 넣느냐가 먼저입니다.

https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/ko/

#페블러스 #데이터품질 #강화학습 #GRPO #DAPO

---

## Twitter/X (EN)

GRPO, Dr.GRPO, and DAPO aren't three different algorithms. They're three ways of handling one number, the standard deviation of the rewards: divide by it, drop it, or discard it.

A problem's learning signal equals that spread. Which is why problems split evenly between right and wrong teach the most.

Pick the data before you pick the algorithm.

https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/en/

#Pebblous #DataQuality #ReinforcementLearning #GRPO #DAPO

---

## Facebook (KO)

모델을 강화학습으로 훈련시켜 본 사람이라면, 한 번쯤 멈추게 되는 갈림길이 있습니다.

GRPO를 쓸까, Dr.GRPO로 갈아탈까, 요즘은 DAPO가 낫다던데.

세 이름은 각각 다른 논문, 다른 연구실, 다른 이야기를 달고 다녔습니다. 그래서 셋 중 무엇을 고를지가 자연스러운 질문이 됩니다.

그런데 올 7월에 나온 한 논문을 읽고 나면, 그 질문 자체가 조금 다르게 보입니다. 세 방법은 사실 같은 손잡이 하나를 다르게 돌린 것이었습니다. 그 손잡이의 이름은 보상의 표준편차입니다. 같은 문제를 여러 번 풀렸을 때 정답과 오답이 얼마나 갈리는가, 그 흩어짐의 크기입니다.

여기서 조용한 사실 하나가 따라 나옵니다. 한 문제가 모델을 가르치는 힘은, 그 문제에서 응답이 갈리는 정도와 정확히 같습니다. 전부 맞히는 문제도, 전부 틀리는 문제도 아무것도 가르치지 못합니다. 정반대의 이유로 똑같이 침묵합니다. 실제로 21만 문제짜리 데이터셋에서 그런 침묵이 절반 가까이를 차지했습니다.

그렇다면 물어야 할 것이 바뀝니다. "어떤 알고리즘이 더 좋은가"가 아니라, "어떤 문제를 모델 앞에 놓을 것인가."

모델이 확실히 아는 것과 전혀 모르는 것 사이, 답이 아직 갈리는 그 구간에 배움이 몰려 있습니다. 페블러스가 좋은 데이터를 이야기할 때 바라보는 자리도 거기입니다. 알고리즘을 고르기 전에, 무엇을 가르칠지를 먼저 고르는 일.

https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/ko/

#페블러스 #데이터품질 #데이터클리닉 #강화학습 #GRPO #DAPO

---

## Facebook (EN)

If you have ever trained a model with reinforcement learning, you know the small fork in the road.

Do I use GRPO, switch to Dr.GRPO, or try DAPO, which everyone seems to be recommending lately?

Each name arrived with its own paper, its own lab, its own story. Choosing between them feels like the natural question.

A paper from this July quietly rearranges that question. The three methods turn out to be the same move made three ways of turning one dial. The dial has a name: the standard deviation of the rewards, the spread between right and wrong answers when the same problem is solved many times over.

And a quiet fact follows. The force with which a problem teaches a model is exactly the spread of its answers. A problem the model always gets right teaches nothing; so does one it always gets wrong. They fall silent for opposite reasons. On one dataset of 210,000 problems, that silence covered nearly half.

So the question shifts. Not "which algorithm is better," but "which problems do we place in front of the model?"

The learning lives in the middle, where the answers still disagree. That middle is where Pebblous looks when it talks about data quality: choosing what to teach, before choosing how.

https://blog.pebblous.ai/blog/grpo-drgrpo-dapo-standard-deviation/en/

#Pebblous #DataQuality #DataClinic #ReinforcementLearning #GRPO #DAPO
