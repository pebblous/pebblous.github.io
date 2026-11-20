# SNS 홍보 글: ERNIE 5.5, 외운 문제를 빼면 선두에서 꼴찌

> 소스: report/ernie-5-5-benchleaking-base-model-2026-11/
> 생성일: 2026-11-21
> URL: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

코딩 문제 하나를 풀게 한 뒤 생성을 멈추지 않자, 모델이 입력에 없던 다음 시험 문항을 기준 구현까지 붙여 써 냈다.

11월 16일 공개된 24쪽 프리프린트가 공개 가중치 기반모델 네 개에 벤치마크 20종을 물린 결과다. 동료 심사는 거치지 않았다.

바이두의 ERNIE-5.5-Flash-Base는 HumanEval 문항의 96.3%를 그렇게 재현했고, 딥시크의 기반모델은 같은 시험에서 9.1%에 그쳤다. 반대로 어떤 시험에서는 네 모델 모두 한 건도 내놓지 않았다. 오염은 벤치마크 이름에 붙는 꼬리표가 아니라, 모델 하나와 시험 하나가 만나는 칸마다 따로 매겨지는 값이라는 뜻이다.

샌 문항을 전부 오답으로 돌리고 문항 수는 그대로 둔 채 다시 계산한 값을 논문은 안티핵 점수라 부른다. 그 자로 재면 ERNIE 5.5의 평균은 85.17에서 68.55로 내려간다. 넷 중 선두였던 모델이 맨 끝이 된다. 나머지 셋이 잃은 폭은 1.3점, 1.5점, 5.0점이다.

다만 이것을 "바이두가 자랑한 코딩 점수는 외운 것"으로 옮기면 틀린다. 바이두가 모델 카드에 적은 값은 HumanEval+ 1-shot 82.3이고, 그 변종의 누출률은 6.1%다. 어느 판본으로 재서 보고할지는 벤더가 고르며, 그 선택권은 점수표를 읽는 쪽에 보이지 않는다.

논문이 요구하는 것은 둘이다. 탈오염 절차를 적은 보고서, 그리고 오염을 보정한 점수. 공개 모델 카드 아홉 장을 직접 열어 보니 뒤의 것을 내놓는 곳은 한 곳도 없었다.

페블러스는 AI 학습 데이터의 품질을 DataClinic으로 정량 진단한다. 모델을 고르는 일이 데이터의 이력을 확인하는 일과 같은 자리로 옮겨 오는 중이다.

▶ 전문: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #ERNIE55 #바이두 #HumanEval #벤치마크오염 #기반모델 #AIReadyData

---

## LinkedIn (EN)

Give a base model one coding problem, let it answer, and then decline to stop it. What came out next was the following question on the exam, one nobody had asked for, with its reference implementation attached.

That is the setup behind a 24-page preprint released on November 16, which ran 20 benchmarks across four open-weight base models. It has not been peer reviewed.

Baidu's ERNIE-5.5-Flash-Base reproduced 96.3% of the HumanEval items this way. DeepSeek's base model, on the same test, managed 9.1%. On several other benchmarks not one of the four produced anything at all. Contamination, in other words, is not a label that attaches to a benchmark's name. It is a value assigned cell by cell, where one model meets one test.

Recompute each score with every leaked item marked wrong and the item count left alone, which the paper calls an Anti-Hack score, and ERNIE 5.5's average falls from 85.17 to 68.55. The model that led the four finishes last.

The other three give up 1.3, 1.5 and 5.0 points.

The reading to avoid is that Baidu's advertised coding number was memorized. What its model card carries is HumanEval+ 1-shot at 82.3, and the leak rate on that variant is 6.1%. Which edition of a test a vendor measures and reports is the vendor's choice, and that choice is invisible from the score sheet.

The paper asks for two things to become routine: a report on how decontamination was carried out, and a score adjusted for what leaked. Nine open model cards, opened and checked one by one, produced the second one zero times.

Pebblous diagnoses the quality of AI training data with DataClinic. Choosing a model is moving into the same place as checking where data came from.

▶ Read: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ERNIE55 #Baidu #HumanEval #BenchmarkContamination #BaseModels #AIReadyData

---

## Twitter/X (KO)

묻지 않은 문제를 모델이 적었다. 공개 기반모델 넷에 벤치마크를 물린 프리프린트에서 ERNIE 5.5는 HumanEval 문항의 96.3%를, 딥시크 기반모델은 9.1%를 재현했다.

샌 문항을 오답으로 치면 평균이 85.17에서 68.55로, 선두에서 꼴찌로 내려간다.

오염은 시험이 아니라 칸마다 매겨진다.

▶ https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/ko/

#페블러스 #데이터품질 #ERNIE55 #HumanEval #벤치마크오염

---

## Twitter/X (EN)

Nobody asked for the next exam question. ERNIE-5.5-Flash-Base wrote it anyway, reference implementation attached, for 96.3% of HumanEval.

DeepSeek's base model, same test, did it for 9.1%.

Count leaked items wrong and ERNIE's average falls 85.17 to 68.55. First of four to last.

Contamination is scored cell by cell, not benchmark by benchmark.

▶ https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/en/

#Pebblous #DataQuality #ERNIE55 #HumanEval #BenchmarkContamination

---

## Facebook (KO)

점수표에서 가장 높은 줄을 고르는 데는 몇 초면 충분합니다.

표에는 모델 이름이 있고, 시험 이름이 있고, 숫자가 있습니다. 그 숫자가 어디서 왔는지는 적혀 있지 않습니다.

11월 16일 공개된 한 연구가 그 빈자리를 건드렸습니다.

공개 가중치 기반모델 네 개에게 시험 20종을 풀게 한 다음, 답을 적고도 생성이 멈추지 않도록 두었습니다. 그러자 모델이 입력에 없던 다음 시험 문항을 선택지와 정답까지 붙여 써 냈습니다.

바이두의 ERNIE 5.5는 HumanEval 문항의 96.3%를 그렇게 꺼냈고, 딥시크의 기반모델은 9.1%였습니다. 같은 시험입니다.

샌 문항을 전부 오답으로 돌려 다시 매기면 ERNIE 5.5의 평균은 85.17에서 68.55가 됩니다. 넷 중 맨 앞이던 자리가 맨 뒤가 됩니다.

다만 숫자보다 그 앞의 장면이 더 많은 것을 말합니다. 모델이 자기 학습 데이터에 무엇이 들어 있었는지를, 묻지도 않았는데 글자로 적어 보인 것입니다.

품질 검사를 설계해 본 분이라면 익숙할 비대칭도 함께 있습니다. 나온 것은 증거가 되지만, 나오지 않은 것은 결백이 아닙니다. 논문도 부록에 그렇게 적어 두었습니다.

한 가지가 더 있습니다. 바이두가 모델 카드에 내건 코딩 점수는 96.3%가 샌 쪽이 아니라, 누출률 6.1%로 측정된 변종 쪽입니다. 거짓을 적은 것이 아닙니다. 다만 어느 판본으로 재서 보고할지를 고르는 쪽과 그 표를 읽는 쪽이 서로 다릅니다.

"우리가 쓰는 모델의 점수가 실력에서 나온 것인지 외운 것에서 나온 것인지, 지금 구분됩니까?"

페블러스는 AI 학습 데이터의 품질을 DataClinic으로 정량 진단합니다. 품질을 재는 자리가 데이터셋에서 모델 쪽으로 한 칸 넓어지는 중입니다.

공개된 모델 카드 아홉 장을 직접 열어 보았습니다. 오염을 보정한 점수를 함께 내놓는 곳은 아직 없었습니다.

▶ 전문: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/ko/

#페블러스 #ERNIE55 #HumanEval #데이터클리닉 #데이터품질 #AIReadyData #벤치마크오염

---

## Facebook (EN)

Picking the highest row on a score sheet takes a few seconds.

The sheet gives you a model name, a test name and a number. Where the number came from is not on it.

A study released on November 16 went after that missing column.

Four open-weight base models were given 20 benchmarks to work through. Then, instead of cutting each model off once it had answered, the researchers left the generation running.

What the models wrote next was the following question on the exam. Options included. Reference answer included. Nobody had asked for any of it.

Baidu's ERNIE 5.5 produced 96.3% of the HumanEval items that way. DeepSeek's base model produced 9.1% of them. Same test.

Mark every leaked item wrong, recompute, and ERNIE 5.5's average moves from 85.17 to 68.55. The model that had been first among the four ends up fourth.

The odd part is not the drop. It is what came before it: a model setting down, unprompted, a record of what had been inside its own training data.

Anyone who has designed a quality check will recognize the asymmetry that follows. What surfaces counts as evidence. What does not surface is not innocence. The paper says as much in its own appendix, which is a careful thing for a paper to say about its own method.

"For the score we chose this model on, can we still separate what it worked out from what it had already seen?"

Pebblous diagnoses the quality of AI training data with DataClinic. The place where quality gets measured is widening by one step, from the dataset toward the model trained on it.

Nine open model cards, read one after another. Not one of them publishes a score adjusted for contamination.

▶ Full piece: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/en/

#Pebblous #ERNIE55 #HumanEval #DataClinic #DataQuality #AIReadyData #BenchmarkContamination
