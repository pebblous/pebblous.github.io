# SNS 홍보 글: AI가 무엇으로 배웠는지, 내 컴퓨터로 확인할 수 있을까?

> 소스: blog/open-1b-auditable-training-run/ko/index.html
> 생성일: 2026-09-17
> URL: https://blog.pebblous.ai/blog/open-1b-auditable-training-run/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

가중치와 학습 데이터와 레시피를 다 공개한 모델도, 그 레시피대로 다시 돌리면 같은 모델이 나오지 않는다.

젠신이 9월 15일 arXiv에 그 틈을 비트 하나까지 메운 학습 런을 공개했다. 16억 파라미터 모델 Open-1B의 옵티마이저 스텝 8만 957번에 상태 해시가 하나씩 남아 있어서, 누구든 그중 한 스텝을 골라 자기 노트북에서 다시 계산한 뒤 공개된 해시와 맞춰 볼 수 있다.

틈이 생기는 까닭은 부동소수점 덧셈이 더하는 순서에 따라 마지막 자리에서 갈리기 때문이다. 그래서 이 런은 커널 안의 축약 순서와 데이터 스트림의 순서, 노드들이 그래디언트를 합치는 순서를 모두 못 박았다.

값은 속도로 치렀다. 여섯 노드에서 최적화된 파이토치보다 약 5배 느리고, 그래서 학습 토큰도 비교 대상인 OLMo 2 1B의 10분의 1에 그쳤다.

공개한 것과 검산이 끝난 것은 또 다른 얘기다. 9월 17일 감사 기록에는 접수된 스텝이 19개이고, 100스텝 단위로 끊은 구간 810개 중 확정된 곳은 아직 없다.

모델 공급자가 이 데이터로 배웠다고 말할 때 그 말을 직접 확인할 방법은 오늘 거의 없다. 페블러스가 데이터의 계보를 따라갈 때 마지막에 남는 물음이 그것이고, 이번 공개는 그 확인이 학습을 시작하기 전에 설계돼야 한다는 것까지 같이 보여 준다.

▶ 전문: https://blog.pebblous.ai/blog/open-1b-auditable-training-run/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #학습데이터 #AI거버넌스 #Gensyn #Open1B

---

## LinkedIn (EN)

An open source model ships its weights, its training data and its recipe. Follow that recipe and the weights you get back are not the weights that were published.

Gensyn posted a report to arXiv on September 15 that closes the gap for one training run, down to the bit. All 80,957 optimizer steps of Open-1B, a 1.6-billion-parameter model, carry a published state hash, so anyone can pick one, recompute it on a laptop, and compare the result with what was published.

The gap exists because floating-point addition depends on the order of the additions. This run therefore pins the reduction order inside the kernels, the order of the data stream, and the order in which nodes combine gradients.

The bill came due in speed. On six nodes the reproducible path runs about five times slower than optimized PyTorch, which is also why the model saw one tenth of the training tokens OLMo 2 1B saw.

Publishing a run and finishing the checks are separate things. On September 17 the audit record showed 19 accepted steps, and not one of the 810 hundred-step segments had reached confirmation.

When a provider says what its model learned from, there is still almost nowhere a third party can verify that claim. Pebblous keeps arriving at the same question at the end of every provenance trail, and this run shows the answer has to be designed in before step one rather than reconstructed afterward.

▶ Read: https://blog.pebblous.ai/blog/open-1b-auditable-training-run/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #TrainingData #Reproducibility #Gensyn #Open1B

---

## Twitter/X (KO)

오픈소스 모델도 공개된 레시피로 다시 돌리면 같은 가중치가 나오지 않는다. 젠신은 학습 스텝 8만 957번마다 해시를 남겨, 그중 하나를 노트북에서 다시 계산해 맞춰 볼 수 있게 했다.

9월 17일까지 검산이 접수된 스텝은 19개다. 감사할 수 있다는 말과 감사가 끝났다는 말은 다르다.

https://blog.pebblous.ai/blog/open-1b-auditable-training-run/ko/

#페블러스 #데이터품질 #학습데이터 #Gensyn #Open1B

---

## Twitter/X (EN)

Re-run an open source recipe and you do not get the published weights back. Gensyn hashed all 80,957 steps of Open-1B, so anyone can recompute one on a laptop and compare.

As of September 17, 19 steps carry an accepted check. Auditable is not the same as audited.

https://blog.pebblous.ai/blog/open-1b-auditable-training-run/en/

#Pebblous #DataQuality #TrainingData #Gensyn #Open1B

---

## Facebook (KO)

노트북 한 대가 반나절 동안 딱 한 걸음을 다시 밟습니다.

학습 8만 957걸음 가운데 하나입니다. 한 사람이 한 대로 전부 이어 밟으면 100년 단위의 시간이 나옵니다.

젠신이 9월 15일 공개한 Open-1B를 검산하는 방식이 그렇습니다. 걸음마다 해시를 하나씩 남겨 두었으니 자원자는 구간이 아니라 걸음 하나를 맡습니다. 맥에서 한 검산과 데이터센터 GPU에서 한 검산의 값이 똑같아야 한다는 것은 편의가 아니라 이 공개의 주장 자체라고 런북은 적어 두었습니다.

제가 오래 붙들고 있던 대목은 다른 곳입니다.

"모델을 만든 곳이 이 데이터로 배웠다고 말할 때, 그 말을 제가 직접 확인할 방법이 지금 있습니까?"

거의 없습니다. 가중치를 열어 준 모델도, 데이터셋 목록을 붙여 준 모델도, 그 목록이 실제로 그 가중치를 만들었다는 것까지는 보여 주지 못합니다. 저는 이 자리를 '검산되지 않은 공개'라고 불러 봅니다. 열려 있기는 한데 맞춰 볼 대상이 없는 상태입니다.

순서를 고정한다는 것은 기계마다 다른 편의를 버리고 하나의 질서를 고른다는 뜻입니다. 애플 GPU가 0 근처의 값을 버리고 프로세서가 살려 두면, 가장 인색한 쪽에 일부러 맞춥니다. 그 대가로 속도는 최적화된 파이토치의 5분의 1 수준까지 내려갑니다.

그러니 9월 17일 감사 기록에 접수된 걸음이 19개, 참여자가 열 명이라는 숫자를 적다고 탓할 일은 아닐 것입니다. 공개 사흘째의 기록이고, 구간 810개 중 다 채워진 곳은 아직 없습니다.

다만 이 일에는 순서가 있어 보입니다. 연산 순서를 고정하고 데이터 순서를 장비 대수에서 떼어 내는 일은 첫 걸음을 떼기 전에 박아 넣어야 합니다. 페블러스가 데이터의 계보를 따라갈 때 되풀이해 확인하는 것도 같은 순서입니다. 어떤 문서가 몇 번째 자리에 들어갔는지는 학습이 끝난 뒤 로그를 뒤져서는 대개 복원되지 않습니다.

젠신도 발표문에 그 한 줄을 적어 두었습니다. 오늘 공개한 검증 도구로 라마나 GPT를 감사할 수는 없다고요.

https://blog.pebblous.ai/blog/open-1b-auditable-training-run/ko/

#페블러스 #데이터클리닉 #AIReadyData #데이터거버넌스 #Gensyn #Open1B

---

## Facebook (EN)

A laptop spends half a day retracing exactly one step.

One step out of 80,957. Retrace all of them on a single machine and the arithmetic runs into centuries.

That is how you audit Open-1B, the model Gensyn published on September 15. Every step carries its own hash, so a volunteer signs up for one step rather than a stretch of them. A check run on a Mac and a check run on a datacenter GPU have to land on the same value, and the runbook says that is not a convenience but the claim itself.

The part I kept turning over sat somewhere else.

"When a company says its model learned from this data, is there a way for me to verify that myself?"

Almost nowhere. A model that opens its weights, even a model that ships a list of its datasets, still cannot show you that the list is what produced the weights. I have started calling that gap an unchecked release. It is open, and there is nothing to compare against.

Fixing the order of operations means giving up whatever each machine finds convenient and choosing a single order instead. Apple's GPU flushes values near zero and a processor keeps them, so the run deliberately follows the stingier of the two. The price is a path that runs at about a fifth of the speed of optimized PyTorch.

So the audit record on September 17, with 19 accepted steps and ten participants, is not something to hold against it. It is the third day, and none of the 810 segments is full yet.

But there does seem to be an order to this work. You have to pin the arithmetic and detach the data order from the machine count before the first step runs. Pebblous keeps checking for the same sequence when it follows the provenance of a dataset. Which document sat in which position is rarely recoverable from logs once training is over.

Gensyn wrote that line into its own launch post. The verification tooling released today cannot audit Llama or GPT.

https://blog.pebblous.ai/blog/open-1b-auditable-training-run/en/

#Pebblous #DataClinic #AIReadyData #DataGovernance #Gensyn #Open1B
