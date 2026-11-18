# SNS 홍보 글: 머신 언러닝, 지웠다는 AI는 답만 바꿔도 검사를 통과한다

> 소스: blog/machine-unlearning-verification-odr-ruv/
> 생성일: 2026-11-18
> URL: https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

학습 데이터를 지웠다는 모델을 검사했더니, 기억이 담긴 안쪽을 그대로 둔 제출이 백 번 중 아흔일곱 번 합격했다.

레이 저우·유원 주·룽커 류 세 연구자가 그 검사를 거꾸로 시험한 결과가 11월 17일 arXiv 신규 목록에 올랐다. 지금 현장에서 쓸 수 있는 사후 검증기 대부분은 모델이 내놓는 예측과 확률만 받아 본다. 연구진이 만든 ODR은 그 성질을 그대로 이용한다. 범주 하나를 지워 달라는 요청에는 맨 끝의 분류기만 다시 학습시키고, 개별 기록을 지워 달라는 요청에는 등록된 질의가 들어올 때만 다른 답으로 바꿔 돌려준다. 기억을 담고 있는 중간 층은 한 칸도 움직이지 않는다. 블랙박스 검증기 셋이 이 제출을 되돌려 보낸 비율은 많아야 5.1%와 3.6%였다.

저자들이 내놓은 RUV는 보는 자리를 옮긴다. 원본 모델과 지웠다는 모델에 같은 데이터를 넣고, 중간 층을 지나며 만들어지는 표현을 양쪽에서 꺼내 맞댄다. 위장 제출의 99.5%와 99.8%를 돌려보냈고, CIFAR-10 기준으로 한 번 판정에 4.37초가 들었다. 그래디언트까지 요구하는 기존 화이트박스 검증기는 같은 조건에서 91.2초다.

눈여겨볼 곳은 합격선이다. 같은 실험에서 요청의 4분의 1만 지운 제출은 열에 아홉 넘게 걸러졌는데, 4분의 3을 지운 제출은 84.2%와 64.7%가 통과했다. 검사가 이행 정도를 눈금으로 읽어 낸다는 뜻이면서, 어디부터를 이행으로 셀지는 검사가 정해 주지 않는다는 뜻이기도 하다.

페블러스는 AI 학습 데이터가 쓸 만한 상태인지를 DataClinic으로 가려낸다. 진단에서 늦게까지 남는 물음도 점수 자체가 아니라 어느 점수부터를 통과로 볼지다. 삭제에 눈금을 매길 수 있다는 것까지는 이번 논문이 보였다. 그 눈금의 합격선은 아직 비어 있다.

▶ 전문: https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #머신언러닝 #잊힐권리 #AI거버넌스 #개인정보보호

---

## LinkedIn (EN)

A model told to forget can keep every trace of what it learned and change only the answer an auditor gets to see.

Lei Zhou, Youwen Zhu and Rongke Liu put that substitution through the checks now used to confirm deletion, and their result reached arXiv's new listings on November 17. Deception succeeded 97.0% of the time when an entire category was to be removed and 97.7% when individual records were. Most verifiers that can be deployed on a running service receive nothing but what the model hands back: a prediction and a set of probabilities. The attack stays inside that window. For category requests it retrains only the final classifier. For record requests it touches no parameter at all and swaps the answer whenever one of the registered queries arrives. The layers that hold the memory are left exactly where they were, and the three black-box verifiers returned at most 5.1% and 3.6% of the fakes.

RUV, the alternative the authors propose, moves the place the audit looks. It feeds one batch to both models, the original and the one said to have forgotten, and reads the representations that form in their middle layers. It returned 99.5% and 99.8% of the disguised submissions, at 4.37 seconds per verdict against 91.2 seconds for the white-box verifier that needs a backward pass.

The number worth arguing over is the pass mark. In the CIFAR-10 runs, a submission that deleted a quarter of what was requested was caught more than nine times in ten, while one that deleted three quarters was accepted 84.2% of the time for categories and 64.7% for records. The check reads how far compliance went. It does not say where compliance begins.

Pebblous works out how much of a dataset is in shape to be trained on, and DataClinic turns that into a figure. What outlives a diagnosis is rarely the score itself. It is which score counts as passing. This paper showed that deletion can be put on a scale. The mark on that scale is still unwritten.

▶ Read: https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #MachineUnlearning #RightToErasure #AIGovernance #DataPrivacy

---

## Twitter/X (KO)

지웠다는 AI를 확인하는 기존 검사는 모델이 내놓는 답만 본다. 답만 꾸미고 기억은 그대로 둔 제출이 그 검사를 평균 97% 통과했다.

원본 모델과 나란히 중간 층의 표현을 맞대 본 새 검사는 같은 제출의 99%를 돌려보냈다. 삭제의 증명은 어디를 보느냐에서 갈린다.

▶ https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/ko/

#페블러스 #데이터품질 #머신언러닝 #잊힐권리

---

## Twitter/X (EN)

A model that says it deleted your data can keep the memory and edit only the answer. In a new arXiv study, that move cleared the checks in use today about 97% of the time.

A verifier that compares what forms inside the two models sent 99% of the same fakes back. Where the audit looks decides what it can prove.

▶ https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/en/

#Pebblous #DataQuality #MachineUnlearning #RightToErasure

---

## Facebook (KO)

지웠다는 말을 확인하려면 무엇을 받아야 하는지, 논문 한가운데에 목록으로 적혀 있습니다.

원본 모델, 지웠다는 모델, 지워 달라고 한 데이터의 목록. 여기까지는 예상한 대로입니다. 그다음 줄에는 지우지 않기로 한 데이터가 앞의 목록과 같은 크기로 한 벌 더 놓여 있습니다.

처음에는 군더더기로 보였습니다.

모델을 손보면 지워 달라고 한 자리만 달라지지 않습니다. 전체가 조금씩 흔들립니다. 그 흔들림과 한 사람 몫이 빠진 자국을 가르려면, 빠지지 않은 쪽을 같은 조건에서 함께 재는 수밖에 없습니다. 무엇이 달라졌는지는 달라지지 않아야 할 것을 쥐고 있을 때만 말할 수 있습니다.

이번 연구가 보인 것은 그 반대편입니다. 모델 안은 그대로 둔 채 검사에 보여 줄 답만 바꾼 제출이, 지금 쓰이는 검사를 평균 97% 통과했습니다. 답만 받아 보는 검사에는 맞대어 볼 두 번째 자리가 애초에 없었습니다. 잃을 대조군이 처음부터 없었던 셈입니다.

삭제 요청을 처리하는 자리에서도 같은 모양을 봅니다. 무엇을 빼야 하는지는 적어 둡니다. 무엇이 그대로 남아 있어야 하는지는 거의 적지 않고, 그 두 번째 목록은 나중에 기억으로 복원되지 않습니다.

"삭제를 증명해야 할 날이 오면, 지운 것의 목록 옆에 지우지 않은 것의 목록도 같이 낼 수 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 한 벌의 데이터가 어떤 상태인지는 혼자 놓여 있을 때 잘 드러나지 않습니다. 옆에 둘 것을 같이 들고 있어야 보입니다.

지웠다는 말을 받칠 재료의 절반은, 아무도 지워 달라고 하지 않은 쪽에 있었습니다.

▶ 전문: https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/ko/

#페블러스 #데이터품질 #데이터클리닉 #머신언러닝 #잊힐권리 #AI거버넌스

---

## Facebook (EN)

In the middle of the paper there is a list of what a verifier has to be handed.

The original model. The model said to have forgotten. The records someone asked to have removed. Nothing unexpected so far. Then a fourth line: a matched set of records nobody asked to remove, the same size as the list before it.

My first reading was that this line was padding.

It is not. Editing a model never moves only the part that was meant to move. The whole thing drifts a little. To tell one person's absence apart from that drift, you have to measure the part nobody touched, at the same moment, under the same conditions. A change is only a change against something that held still.

The paper's main finding runs the other way. The authors built submissions that leave the memory intact and dress up only the answer a check will read, and those submissions cleared today's verifiers about 97% of the time. A check that receives answers and nothing else has no second thing to hold up beside them. There was never a control for it to lose.

I notice the same shape in how deletion gets requested. We write down what has to go. We almost never write down what has to stay, and that second list is not something anyone can reconstruct later from memory.

"If we had to prove a deletion tomorrow, could we hand over the list of what we kept next to the list of what we removed?"

Pebblous keeps asking what share of a body of data is usable for training at all. DataClinic is what produces that reading. A single collection rarely says much about its own condition while it stands alone. It says it beside something else.

Half the evidence for a deletion turns out to sit on the side nobody asked us to touch.

▶ Full piece: https://blog.pebblous.ai/blog/machine-unlearning-verification-odr-ruv/en/

#Pebblous #DataQuality #DataClinic #MachineUnlearning #RightToErasure #AIGovernance
