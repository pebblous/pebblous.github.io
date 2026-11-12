# SNS 홍보 글: 신약 분자 시험 PMO, AI는 찾아낼까 꺼내 올까?

> 소스: blog/pmo-benchmark-task-name-reference-leakage/ko/index.html
> 생성일: 2026-11-10
> URL: https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

신약 후보 분자를 찾는 공개 시험에서, LLM을 한 번도 부르지 않는 절차가 LLM 에이전트 성적의 84%를 받았다.

버펄로대와 MBZUAI 연구진이 10월 30일 arXiv에 올린 논문이다. 분자 최적화 벤치마크 PMO는 채점기를 50번만 부를 수 있는 조건에서 좋은 분자에 얼마나 빨리 닿는지를 잰다. 표준 프롬프트는 과제 이름과 채점기 설명에 더해 참조 화합물까지 건넨다. 그 과제가 닮기를 바라는 본보기 분자다. 연구진이 세운 GPT-4o 미니 에이전트는 이 조건에서 합산 AUC 14.44를 받았고, 둘을 함께 가리자 4.85로 내려갔다.

두 축을 따로 가려 보면 어느 쪽이 점수를 떠받쳤는지가 드러난다. 과제 이름과 설명을 가짜 번호로 바꿔치기해도 성적은 평균 0.84점 내려가는 데 그친다. 참조 화합물을 치우면 평균 8.75점이 한꺼번에 빠진다. 찾아야 할 약 이름이 과제 이름에 그대로 박힌 경우가 적지 않은데도, 점수를 지탱한 쪽은 이름이 아니라 손에 쥐여 준 본보기였다.

첫 줄의 84%는 그 비대칭에서 나온다. 검색 전용 베이스라인은 받은 참조 화합물을 그대로 제출한 뒤, 지금까지 가장 점수가 높았던 분자에 원자 하나를 바꾼 변형을 정해진 순서대로 내보낸다. 모델도 추론도 계획도 없다. 이 절차가 12.16을 받았다.

LLM 무용론으로 읽을 대목은 아니다. 참조 화합물을 끌어다 쓰지 않는 개체군 기반 에이전트 MolLEO-v4는 같은 50회 예산에서 7.39를 받아 고전 강화학습 기법 REINVENT의 7.06을 넘었다. 단백질 도킹 쪽 시험대에서는 치환기 하나를 무작위로 붙이기만 하는 절차가 LLM 에이전트를 앞섰다. 겨냥할 쪽은 모델이 아니라 실력과 정보 접근을 구분하지 못하는 측정이다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 수치로 진단한다. 논문이 내놓은 처방에는 새 모델도 장비도 없다. 가린 조건의 점수를 표준 조건 옆에 나란히 싣는 것, 아무것도 배우지 않는 절차의 점수를 바닥선으로 함께 적는 것. 이 확인 전체에 든 API 비용은 0.63달러였다.

평가셋을 새로 만들지 않고도, 지금 보고 있는 숫자가 무엇을 증명하는지는 물어볼 수 있다.

▶ 전문: https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PMO #MBZUAI #분자최적화 #신약개발AI #데이터누수 #벤치마크설계 #AIReadyData

---

## LinkedIn (EN)

A procedure that never once calls a language model took 84 percent of what an LLM agent scored on a public test for finding drug candidate molecules.

Jiayu Qin and colleagues at the University at Buffalo and MBZUAI published the result on 30 October. PMO, the molecular optimization benchmark they worked on, allows fifty calls to a scoring oracle and measures how quickly a method reaches a good molecule. On top of the task name and a description of the oracle, the standard prompt also hands over a reference compound, the exemplar molecule the task wants the answer to resemble. Their own GPT-4o mini agent scored a summed AUC of 14.44 that way. Withhold both and the same agent scores 4.85.

Blinding the two separately shows which one was carrying the score. Swapping the task name and its description for a meaningless number costs 0.84 points on average. Taking away the reference compound costs 8.75. A fair number of PMO tasks print the drug or the protein target right there in the task identifier, and that turns out to matter far less than the exemplar placed directly in the agent's hands.

The 84 percent in the first line comes out of that asymmetry. The retrieval-only baseline submits the reference compound it was given, then single-atom variants of whatever has scored best so far, in a predetermined order. No model, no reasoning, no plan. It scored 12.16.

None of this reads as a case against LLMs. MolLEO-v4, a population-based agent that never pulls in the reference compound, scored 7.39 on the same fifty-call budget and finished ahead of REINVENT, the classic reinforcement learning method, at 7.06. On a separate protein-docking track, a routine that attaches one substituent at random came out ahead of the LLM agent outright. What needs fixing is the measurement rather than the model.

Pebblous quantifies the quality of AI training data with DataClinic. The two remedies the paper asks for need no new model and no new hardware: print the blinded score next to the standard one, and publish what a procedure that learns nothing scores, as a floor. The whole set of experiments cost $0.63 in API fees.

Nobody has to build a new benchmark to ask what the current score is actually evidence of.

▶ Read: https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PMO #MBZUAI #MolecularOptimization #DrugDiscoveryAI #DataLeakage #BenchmarkDesign #AIReadyData

---

## Twitter/X (KO)

신약 후보 분자를 찾는 공개 시험에서, LLM을 한 번도 부르지 않는 절차가 LLM 에이전트 성적의 84%를 받았다. 받은 본보기 분자를 그대로 제출하고 거기서 원자 하나씩 바꿔 내보내기만 하는 절차다.

과제 이름을 가려도 점수는 거의 그대로였다. 무너진 것은 본보기 분자를 치웠을 때였다.

https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/ko/

#페블러스 #데이터품질 #PMO #분자최적화 #데이터누수

---

## Twitter/X (EN)

On PMO, the molecular optimization benchmark, a procedure that never calls a language model took 84 percent of what an LLM agent scored. It resubmits the reference molecule it was handed, then changes one atom at a time.

Hiding the task name barely moved the score. Hiding the reference molecule is what broke it.

https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/en/

#Pebblous #DataQuality #PMO #MolecularOptimization #DataLeakage

---

## Facebook (KO)

시험 문제의 이름이 celecoxib_rediscovery 였습니다.

찾아내야 할 약의 이름이 문제 번호 자리에 그대로 적혀 있었습니다.

분자 최적화 벤치마크 PMO의 스물세 과제 가운데 열네 개가 이런 식입니다. 표적 단백질의 약칭이 그대로 과제 이름인 경우도 있습니다.

그래서 저도 처음에는 이름 쪽을 의심했습니다. 사전학습 때 화학 문헌을 읽은 모델이라면 그 이름만 보고도 정답 근처를 떠올릴 수 있습니다.

버펄로대와 MBZUAI 연구진이 실제로 가려 보았더니, 짐작과 달랐습니다.

과제 이름과 설명을 가짜 번호로 바꿔치기해도 성적은 거의 움직이지 않았습니다. 평균 0.84점이 깎였을 뿐입니다.

무너진 것은 다른 것을 치웠을 때였습니다. 참조 화합물, 그러니까 그 과제가 닮기를 바라는 본보기 분자를 프롬프트에서 빼자 평균 8.75점이 한꺼번에 빠졌습니다.

힌트는 이름이 아니라 손에 쥐여 준 본보기였던 것입니다.

그 사실을 가장 분명하게 보여 준 쪽은 LLM을 한 번도 부르지 않는 절차입니다. 받은 본보기를 그대로 제출하고, 거기서 원자 하나를 바꾼 변형을 정해진 순서대로 내놓습니다. 그것만으로 전체 성적의 84%를 받았습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 평가셋을 받아 볼 때 자주 비어 있는 칸이 하나 있습니다. 그 점수가 어떤 조건에서 나왔는지입니다.

"지금 보고 있는 그 점수는, 가리고 나서도 그대로입니까?"

논문이 내놓은 처방은 '가리고 다시 재기' 두 가지입니다. 가린 조건의 점수를 표준 조건 옆에 나란히 싣는 것, 그리고 아무것도 배우지 않는 절차의 점수를 바닥선으로 함께 적는 것.

이 확인 전체에 든 API 비용은 0.63달러였습니다.

그 금액이 말해 주는 것은, 이 점검을 건너뛴 이유가 비용은 아니었다는 사실입니다.

▶ 전문: https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/ko/

#페블러스 #데이터클리닉 #데이터품질 #PMO #분자최적화 #데이터누수 #AIReadyData

---

## Facebook (EN)

The task was called celecoxib_rediscovery.

The name of the drug you were supposed to find was sitting in the slot where the task number goes.

Fourteen of the twenty-three tasks in PMO, a molecular optimization benchmark, are built that way. On some of them the task name is simply the abbreviation of the protein target.

So the name is where I assumed the leak was. A model that read the chemistry literature during pretraining would get close to the answer from that alone.

Researchers at the University at Buffalo and MBZUAI went and blinded it, and the guess did not hold.

Replacing the task name and its description with a meaningless number moved the score hardly at all. An average of 0.84 points.

What collapsed the score was something else. Remove the reference compound, the exemplar molecule each task wants the answer to resemble, and 8.75 points go at once.

The hint was never the name. It was the exemplar put into the agent's hands.

The clearest demonstration is a procedure that never calls a language model. It submits the exemplar it was given, then works through single-atom variants of it in a fixed order. That alone took 84 percent of the full score.

Pebblous vets the quality of AI training data with DataClinic. The column most often left blank on an evaluation set we receive is the one describing the conditions a score was produced under.

"The number in front of you right now, would it survive the blinding?"

What the paper prescribes amounts to 'blind it and measure again', in two places. Print the blinded score next to the standard one, and publish what a procedure that learns nothing scores, as a floor.

The whole check cost $0.63 in API fees.

Whatever kept those two columns out of the results tables, the price was not it.

▶ https://blog.pebblous.ai/blog/pmo-benchmark-task-name-reference-leakage/en/

#Pebblous #DataClinic #DataQuality #PMO #MolecularOptimization #DataLeakage #AIReadyData
