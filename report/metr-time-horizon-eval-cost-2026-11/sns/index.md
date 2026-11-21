# SNS 홍보 글: METR, 만들기 비싼 시험일수록 AI가 늦게 통과한다

> 소스: report/metr-time-horizon-eval-cost-2026-11/
> 생성일: 2026-11-22
> URL: https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

AI 능력을 재는 기관이 이번 분기에 값을 매긴 것은 모델이 아니라 자기 시험이었다.

METR이 11월 20일에 낸 4분기 능력 평가다. 모델 15개를 세 과제군으로 돌리면서, 과제 하나하나에 생애비용이라는 눈금을 새로 붙였다. 시험 한 벌을 컨테이너 환경으로 만들어 백 번 돌려 채점하기까지 드는 값이다.

그리고 그 값이 성적에 들어간다고 적었다. 길이가 같은 과제인데 만드는 값이 두 배면, 모델이 그 과제를 절반의 확률로 풀어내는 시점이 약 4.6개월 뒤로 밀린다. 길이를 통제하고도 남는 몫이다. 비싼 시험은 어려운 시험이 아니라 늦게 풀리는 시험이라는 뜻이 된다.

속도 자체는 달라지지 않았다. 합산 과제군의 시간 지평은 3.61개월마다 두 배가 되고, 직전 추세인 105일과 거의 같다. 바뀐 것은 눈금 쪽이다. 같은 보고서 안에서 TH2 가운데 자동으로 검증되는 쪽만 떼어 내면 주기가 1.65개월로 줄어든다. 지금 가장 빠른 숫자가 가장 싸게 만든 시험에서 나오는 셈이다.

METR은 그 자리에 걱정을 하나 적어 두었다. 컨테이너로 돌리기 쉬운 평가일수록 모델을 훈련시킬 때 쓰는 환경을 닮아 실제 능력을 부풀려 보일 수 있다는 것이다. 문항이 샜다는 보고가 아니다. 평가의 꼴이 훈련 환경의 꼴과 같아지고 있다는 보고다. 그 자리를 모델로 뚫어 보려고 출제를 맡겨 봤지만, 받은 과제 가운데 보고서에 넣을 것이 하나도 없었다고 적혀 있다.

사내 모델을 자기 로그로 평가하는 조직도 같은 자리에 선다. 평가에 쓰는 로그와 튜닝에 쓰는 로그가 한 파이프라인에서 나왔다면, 문항이 겹치지 않아도 분포가 겹친다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 어떤 데이터에서 그 성적이 나왔는지를 성적 옆에 같이 남기는 일이 그 앞에 있다.

▶ 전문: https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #METR #시간지평 #AI평가 #벤치마크 #강화학습 #AIReadyData

---

## LinkedIn (EN)

What METR attached a price tag to this quarter was not the models. It was its own exams.

The Q4 2026 capability update, published on 20 November, puts 15 models through three task suites. Next to the scores, every task now carries a second figure the team calls Lifecycle Cost: what it takes to build a containerized environment for that task and then run and score it a hundred times.

That figure turns up in the results. Hold task length constant, double the cost of building the task, and the point where models clear a 50% success rate arrives roughly 4.6 months later. Length is already accounted for. An expensive exam is not a harder exam. It is one that gets passed later.

The pace itself did not move. Across the combined suite, time horizons double about every 3.61 months, near the 105 days METR had reported previously. What moved is the ruler. Separate out the automatically verifiable slice of TH2 and the doubling time falls to 1.65 months, so the fastest figure in the report belongs to the exams that were cheapest to assemble.

METR explains why that bothers it. Containerized evals that are easy to run increasingly resemble the reinforcement learning environments models train in, and an eval shaped like a training environment can read capability too generously. Nobody is claiming test items leaked. The claim is about shape. The team also tried handing task authoring to the models, and nothing that came back was worth putting in the report.

Any team scoring its own models on its own logs is standing in the same spot. When the evaluation logs and the tuning logs come off one pipeline, the items can differ while the distribution does not.

Pebblous quantifies the quality of AI training data with DataClinic. Recording which data a score came from is the work that comes before the score.

▶ Read: https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #METR #TimeHorizon #AIEvaluation #Benchmarks #RLEnvironments #AIReadyData

---

## Twitter/X (KO)

METR이 이번 분기에 값을 매긴 것은 모델이 아니라 자기 시험이다.

길이가 같은 과제인데 만드는 값이 두 배면, 모델이 절반의 확률로 풀어내는 시점이 4.6개월 뒤로 밀린다.

그리고 지금 가장 빠른 숫자가 가장 싸게 만든 시험에서 나온다.

▶ https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/ko/

#페블러스 #데이터품질 #METR #AI평가

---

## Twitter/X (EN)

METR priced its own exams this quarter, not only the models it was grading.

Hold task length constant and double what an exam costs to build: models clear a 50% pass on it about 4.6 months later.

The quickest doubling time in the whole report belongs to the exams that were cheapest to assemble.

▶ https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/en/

#Pebblous #DataQuality #METR #AIEvaluation

---

## Facebook (KO)

사내 평가셋에 그 과제가 왜 들어가 있느냐고 물으면, 돌아오는 답은 대개 "그 데이터가 있어서"입니다.

재야 할 것이라서가 아니라, 만들기 쉬워서.

이번 달 METR이 낸 분기 보고서에서 그 답이 성적에 얼마나 들어가는지를 숫자로 봤습니다.

METR은 모델 15개를 재면서 과제 하나하나에도 값을 매겼습니다. 시험 한 벌을 컨테이너로 만들어 백 번 돌려 채점하기까지 드는 돈입니다.

길이가 같은 과제인데 만드는 값이 두 배면, 모델이 그 과제를 절반의 확률로 풀어내는 시점이 넉 달 반 뒤로 간다고 적혀 있습니다.

돈 단위로 적힌 차이가 달 단위로 돌아온 셈입니다.

뒤집어 보면 더 불편합니다. 만들기 싼 과제만 모아 둔 평가셋은 실제보다 넉 달쯤 앞선 성적을 돌려줍니다.

METR이 더 걱정한 자리는 그다음입니다. 컨테이너에 담아 자동으로 채점되는 평가의 꼴이, 모델을 훈련시킬 때 쓰는 환경의 꼴과 같아지고 있다는 것입니다.

문항이 샜다는 이야기가 아닙니다. 한 줄도 겹치지 않아도 과제군 전체가 이미 익숙한 분포 안쪽에 들어옵니다.

"우리 모델이 받은 성적은, 그 모델이 배운 적 없는 데이터에서 나온 것입니까?"

사내 모델을 자기 로그로 평가하는 조직에서는 이 물음이 METR보다 가깝게 옵니다. 평가에 쓰는 로그와 튜닝에 쓰는 로그가 같은 수집 경로에서 나왔다면, 겹침은 샘플을 세는 방식으로는 보이지 않습니다.

페블러스가 DataClinic으로 AI 학습 데이터의 품질을 정량 진단하는 까닭도 거기에 있습니다. 데이터가 어느 경로로 들어왔는지는 나중에 묻는다고 복원되지 않습니다.

성적은 다시 낼 수 있습니다. 그 성적이 어떤 과제에서 나왔는지는, 그때 적어 두지 않으면 다시 낼 수 없습니다.

▶ 전문: https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #METR #AI평가 #시간지평

---

## Facebook (EN)

Ask why a particular task is in your evaluation set and the answer is usually that the data happened to be there.

Not because it was the thing worth measuring. Because it was cheap to build.

METR's quarterly report, out this month, is where that answer finally turns into a number.

Fifteen models were measured, and alongside them the team priced its own tasks: what it takes to build a containerized environment for one task and then run and score it a hundred times.

Hold the length of a task constant, double that cost, and models reach a 50% success rate on it about four and a half months later.

A difference written in dollars came back out in months.

Run it the other way and it is less comfortable. An evaluation set assembled out of whatever was cheap to build hands back a score some four months ahead of the real one.

What METR worried about sits a step further in. The shape of an eval, containerized and automatically scored, is converging on the shape of the environments models are trained in.

Nobody is saying test items leaked. Not one item has to overlap for a whole suite to sit inside a distribution the model already knows.

"Can we say our model's score was measured on data it has never learned from?"

For a team scoring its own models on its own logs, that question lands closer than it does for METR. When the evaluation logs and the tuning logs come off the same collection path, counting samples will not show you the overlap.

Pebblous quantifies the quality of AI training data with DataClinic, and the part nobody can reconstruct afterwards is which path the data arrived by.

A score can be run again. What it was run on cannot be, unless somebody wrote that down at the time.

▶ Full piece: https://blog.pebblous.ai/report/metr-time-horizon-eval-cost-2026-11/en/

#Pebblous #DataClinic #DataQuality #METR #AIEvaluation #TimeHorizon
