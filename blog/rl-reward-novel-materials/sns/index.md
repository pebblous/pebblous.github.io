# SNS 홍보 글: 생성 모델이 건너뛴 신소재를 겨눈 강화학습 보상

> 소스: blog/rl-reward-novel-materials/ko/index.html
> 생성일: 2026-07-10
> URL: https://blog.pebblous.ai/blog/rl-reward-novel-materials/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

모델도 데이터도 그대로 둔 채 채점 규칙만 바꿨더니, 신소재 탐색 성공률이 15.9%에서 61.3%로 올랐다.

임페리얼칼리지런던의 박현수·에런 월시 연구진은 결정 구조 생성 모델 Chemeleon2에 검증 가능한 보상을 붙이고 강화학습으로 다듬었다. 사람이 라벨링한 선호 데이터도, 따로 학습한 보상 모델도 쓰지 않았다. 안정한가, 새로운가, 서로 겹치지 않는가를 물리·화학 규칙으로 직접 채점했을 뿐이다.

생성 AI는 데이터가 두꺼운 곳, 곧 이미 있을 법한 조성만 잘 만든다. 신소재가 숨은 미탐색 영역은 데이터가 비어 확률이 낮게 매겨지고, 모델은 그곳을 계속 비켜간다. 보상은 그 빈자리를 대신해 무엇이 좋은 구조인지를 규칙으로 정의한다.

강화학습 이후 다양성 지표는 소폭 내렸다. 하나의 숫자를 극대화한 결과가 아니라 여러 목표의 균형을 맞춘 흔적이다. 그때까지 가장 앞서 있던 MatterGen(41.0%)도 이 방식이 넘어섰다.

성능을 끌어올린 것은 데이터의 양이 아니라 목표의 정의였다.

▶ 전문: https://blog.pebblous.ai/blog/rl-reward-novel-materials/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #강화학습 #생성형AI #신소재 #AIforScience #Chemeleon2 #MatterGen

---

## LinkedIn (EN)

The model stayed the same. The data stayed the same. Only the scoring rule changed, and the novel-materials success rate climbed from 15.9% to 61.3%.

Researchers Hyunsoo Park and Aron Walsh at Imperial College London bolted a verifiable reward onto Chemeleon2, a crystal-structure generator, and tuned it with reinforcement learning. No human-labeled preference data, no separately trained reward model. The reward scored three things directly from physical and chemical rules: is the structure stable, is it new, and is it distinct from the others in the batch.

Generative AI is good at the data-dense regions, the compositions that already look plausible. The unexplored space where new materials might hide is thin on data, so the model assigns it low probability and quietly steers around it. The reward stands in for that missing data by defining what a good structure is.

Diversity dipped slightly after RL. That is the mark of balancing several objectives rather than maximizing one number. The approach also passed MatterGen (41.0%), the prior state of the art.

What raised performance was not the volume of data but the definition of the goal.

▶ Read: https://blog.pebblous.ai/blog/rl-reward-novel-materials/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ReinforcementLearning #GenerativeAI #AIforScience #MaterialsDiscovery #Chemeleon2 #MatterGen

---

## Twitter/X (KO)

모델도 데이터도 그대로. 채점 규칙만 바꿨다.
신소재 탐색 성공률 15.9% → 61.3%.

데이터가 없는 곳을 탐색시키는 답은 데이터를 더 모으는 게 아니라 보상을 설계하는 것이었다.

https://blog.pebblous.ai/blog/rl-reward-novel-materials/ko/

#페블러스 #강화학습 #신소재 #Chemeleon2

---

## Twitter/X (EN)

Same model. Same data. Only the scoring rule changed.
Novel-materials success rate: 15.9% → 61.3%.

To explore where data is absent, the answer was not more data but a better-designed reward.

https://blog.pebblous.ai/blog/rl-reward-novel-materials/en/

#Pebblous #ReinforcementLearning #AIforScience #Chemeleon2

---

## Facebook (KO)

아무도 가 본 적 없는 곳을 찾아오라는 주문을 받아 보신 적 있으신지요.

지도에는 길이 그려져 있지 않고, 참고할 전례도 없습니다.

생성 AI가 신소재 앞에서 겪는 일이 꼭 이렇습니다. 이 모델들은 데이터가 두꺼운 곳, 그러니까 이미 누군가 다녀간 자리를 잘 그려 냅니다. 정작 새로운 소재가 숨어 있을 법한 자리는 아무도 가 보지 않아 데이터가 비어 있고, 그래서 모델은 그곳에 낮은 확률을 매긴 채 조용히 비켜갑니다.

임페리얼칼리지런던의 연구진은 이 빈자리를 데이터를 더 모아 채우려 하지 않았습니다. 대신 무엇이 좋은 구조인가를 규칙으로 적어 채점하기로 했습니다. 안정한가, 새로운가, 서로 겹치지 않는가. 이 채점표를 보상으로 삼아 모델을 강화학습으로 다듬자, 데이터가 없던 영역을 향해 모델이 걸음을 옮기기 시작했습니다.

같은 모델을 그대로 두고 채점 규칙만 얹었을 뿐인데 탐색 성공률이 네 배 가까이 올랐다는 대목에서, 저는 생각이 오래 머물렀습니다. 성능을 바꾼 것이 더 큰 모델도, 더 많은 데이터도 아닌 목표의 정의였다는 사실 때문이었습니다.

"좋은 데이터가 아예 없는 곳을 탐색하게 하려면, 데이터의 부재를 무엇으로 메우는가?"

이 물음은 소재과학 바깥에서도 되풀이됩니다. 데이터가 있을 때 우리는 그 품질과 계보를 따집니다. 데이터가 없을 때 우리에게 남는 일은, 무엇을 좋은 결과로 볼지를 검증 가능한 형태로 적어 두는 것인지도 모르겠습니다.

https://blog.pebblous.ai/blog/rl-reward-novel-materials/ko/

#페블러스 #데이터품질 #강화학습 #신소재 #Chemeleon2 #AIforScience

---

## Facebook (EN)

Have you ever been asked to bring something back from a place no one has ever been?

There is no path drawn on the map, and no precedent to lean on.

This is more or less what generative AI faces in front of a new material. These models are good at the crowded parts of the map, the places someone has already walked through. The spots where a genuinely new material might be hiding are empty of data, because no one has gone there yet, and so the model quietly gives them a low probability and steers away.

Researchers at Imperial College London did not try to fill that emptiness by gathering more data. Instead they wrote down what a good structure is as a rule, and scored it. Is it stable, is it new, is it distinct from the rest. They turned that scorecard into a reward, tuned the model with reinforcement learning, and the model began to move toward the regions that had no data at all.

The same model, with only the scoring rule added, raised its success rate nearly fourfold. I kept returning to that. What changed the outcome was not a bigger model or more data, but the definition of the goal.

"To explore where there is no good data, what do you fill the absence with?"

The question repeats well outside materials science. When data exists, we argue about its quality and its lineage. When data is absent, perhaps what remains for us is to write down, in a verifiable form, what we would count as a good result.

https://blog.pebblous.ai/blog/rl-reward-novel-materials/en/

#Pebblous #DataQuality #ReinforcementLearning #AIforScience #Chemeleon2 #MaterialsDiscovery
