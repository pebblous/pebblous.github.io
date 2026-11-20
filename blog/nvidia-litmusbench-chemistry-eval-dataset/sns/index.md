# SNS 홍보 글: 엔비디아 화학 시험지 LitmusBench, 채점한 곳이 아직 없다

> 소스: blog/nvidia-litmusbench-chemistry-eval-dataset/
> 생성일: 2026-11-20
> URL: https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

엔비디아가 화학 문항 5만 개를 열어 두었는데, 그 문항으로 점수를 낸 곳은 아직 한 곳도 없다. 11월 16일 시카고 SC26에서 공개한 과학용 꾸러미 Nemotron for Science에 평가 데이터셋 LitmusBench v0.2가 모델과 함께 들어 있다.

문항의 재료는 교과서가 아니라 실험 기록이다. 분자가 물에 얼마나 녹는지, 몸 안에서 어떻게 흡수되고 분해되는지 같은 물성 데이터와 신약 탐색 과정에서 쌓인 기록이 문항으로 바뀌었다. 모델 성적을 매기는 쓰임과 모델을 과학 과제에 맞추는 쓰임을 함께 노렸고, 데이터셋을 직접 들여다본 보도에 따르면 레코드마다 라이선스가 따로 적혀 있다.

가장 많이 인용되는 숫자는 61%다. 협력사 라일라 사이언시스가 자기 실험실에서 모은 피드백으로 모델을 후속 학습한 뒤, 양자점 합성 프로토콜 정확도를 그만큼 끌어올렸다. 같은 과제를 GPT-6 Astra에 걸었을 때는 54%였다.

다만 그 61%를 잰 시험대는 함께 공개된 5만 문항이 아니다. 라일라 사이언시스가 고른 자체 과제였고, 과제를 고른 쪽과 모델을 후속 학습한 쪽과 수치를 측정한 쪽이 모두 같다. 함께 발표된 테르나와 테레이 테라퓨틱스의 성적도 조건이 다르지 않다. 분석 매체 오르카라우터는 SC26 발표의 과학 수치가 전부 그 결과에 이해관계가 있는 쪽에서 나왔다고 짚었다.

그러니 이번에 열린 것은 성적이 아니라 성적을 다시 매길 잣대다. 누가 화학 점수를 들고 나오든 다른 팀이 같은 문항으로 되짚어 볼 길이 생겼다는 뜻이고, 그 되짚기는 아직 한 건도 일어나지 않았다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 이번 공개가 기록을 쌓는 쪽에 남기는 물음은 분량이 아니라 형태다. 쌓인 측정값 가운데 무엇을 물어서 나온 값인지까지 남아 있는 것은 얼마나 되는가.

▶ 전문: https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #LitmusBench #엔비디아 #Nemotron #AIReadyData #평가데이터셋 #화학AI

---

## LinkedIn (EN)

Nvidia has opened 50,000 chemistry questions, and nobody has yet posted a score on them. The evaluation set, LitmusBench v0.2, shipped alongside the model in Nemotron for Science, the bundle unveiled on November 16 at SC26 in Chicago.

The questions were not lifted from textbooks. They were built from laboratory material: how well a molecule dissolves, how the body absorbs and breaks it down, and records left behind by real drug discovery work. Nvidia aimed the set at two uses at once, scoring models and tuning them toward scientific tasks. Reporting that went through the records found a separate license written onto each one.

The figure quoted most often is 61%. A partner, Lila Sciences, took feedback gathered in its own laboratory, post-trained the model on it, and pushed accuracy on quantum dot synthesis protocols to that mark. GPT-6 Astra, set the same task, came in at 54%.

The test bed behind that 61% was not the 50,000 questions. It was a task Lila Sciences chose, and the party that chose the task, post-trained the model and measured the outcome is one party. The results announced from Therna and Terray Therapeutics carry the same condition. OrcaRouter, which analyzed the release, noted that every science figure in it came from someone with a stake in the result.

What opened this week, then, is not a result but the instrument for producing one. Whoever brings a chemistry score forward from here can have it run again by another team on the same questions. That rerun has not happened once.

Pebblous weighs the quality of AI training data with DataClinic. The question this release leaves for anyone accumulating records is about shape rather than volume. Of the measurements already stored, how many still carry the question that produced them?

▶ Read: https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #LitmusBench #NVIDIA #Nemotron #AIReadyData #EvaluationDataset #ChemistryAI

---

## Twitter/X (KO)

엔비디아가 SC26에서 화학 문항 약 5만 개를 공개했다. 재료는 교과서가 아니라 분자 물성 데이터와 신약 탐색 기록이다.

함께 발표된 양자점 합성 정확도 61%는 그 문항으로 잰 값이 아니다. 협력사가 고른 과제에서 그 협력사가 직접 측정했다.

시험지는 열렸고, 채점은 아직 시작되지 않았다.

▶ https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/ko/

#페블러스 #데이터품질 #LitmusBench #엔비디아 #평가데이터셋

---

## Twitter/X (EN)

Nvidia opened about 50,000 chemistry questions at SC26. The material is solubility and metabolism measurements and logs from drug-discovery programs, not textbooks.

The 61% quantum dot accuracy announced beside them was not measured on those questions. A partner measured it on a task the partner chose.

The paper is open. The marking has not started.

▶ https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/en/

#Pebblous #DataQuality #LitmusBench #NVIDIA #EvaluationDataset

---

## Facebook (KO)

실험을 한 번 돌리면 숫자 하나가 남습니다.

이 분자는 물에 얼마나 녹는가. 측정값은 표의 한 칸에 적히고, 그 표는 서버 어딘가에 올라갑니다.

몇 년이 지나면 칸이 수만 개가 됩니다. 쌓였다는 것은 분명한데, 그 더미로 무엇을 할 수 있는지는 분명하지 않습니다.

엔비디아가 11월 16일 시카고에서 공개한 것이 바로 그 변환이었습니다.

과학용 꾸러미 Nemotron for Science 안에 화학 데이터셋 LitmusBench v0.2가 들어 있습니다. 약 5만 문항. 재료는 분자 물성 데이터와 실제 신약 탐색 기록입니다.

측정값 한 칸이 물음과 답의 쌍으로 다시 적히는 순간, 그 한 칸은 모델을 가르칠 수도 있고 모델을 채점할 수도 있게 됩니다.

실험실의 축적이 채점 가능한 형태로 바뀐 것입니다.

다만 함께 발표된 숫자를 보면서는 한 번 멈추게 됩니다.

협력사 라일라 사이언시스가 양자점 합성 프로토콜 정확도를 61%까지 올렸고, 같은 과제에서 GPT-6 Astra는 54%였습니다. 그 비교를 설계한 쪽도, 모델을 후속 학습한 쪽도, 수치를 측정한 쪽도 라일라 사이언시스입니다. 시험대는 방금 공개된 5만 문항이 아니라 라일라 사이언시스가 고른 자체 과제였습니다.

시험지를 연 것과 시험지로 채점한 것은 다른 일입니다.

"우리 기록으로 낸 점수를 바깥에서 다시 내 보려면, 함께 내주어야 할 것은 무엇입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 재기 전에 먼저 확인되어야 하는 것이 몇 가지 있습니다.

측정값 옆에 무엇을 물어서 나온 값인지가 적혀 있는지.

그 문항의 출처와 사용 조건이 함께 적혀 있는지.

조직 바깥에서 같은 점수를 다시 낼 수 있는지.

엔비디아는 앞의 절반을 했습니다. 뒤의 절반은 누구든 할 수 있게 열어 두었을 뿐, 아직 아무도 하지 않았습니다.

▶ 전문: https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/ko/

#페블러스 #LitmusBench #엔비디아 #AIReadyData #데이터품질 #데이터클리닉 #평가데이터셋

---

## Facebook (EN)

Run an experiment once and a number is left behind.

How well does this molecule dissolve in water? The measurement goes into a cell in a spreadsheet, and the spreadsheet goes onto a server somewhere.

A few years on, the cells number in the tens of thousands. That something has accumulated is clear. What the pile is good for is less so.

What Nvidia opened in Chicago on November 16 was exactly that conversion.

Inside Nemotron for Science, the company's science bundle, sits a chemistry dataset called LitmusBench v0.2. Nearly 50,000 questions. The material is molecular property data and records from real drug discovery work.

The moment a measurement is rewritten as a pair, a question and its answer, that single cell can teach a model and it can also grade one.

An accumulation in a laboratory had been turned into something that can be marked.

The figure announced beside it, though, is worth pausing over.

Lila Sciences, a partner, raised accuracy on quantum dot synthesis protocols to 61%. GPT-6 Astra, given the same task, managed 54%. Who designed that comparison, who post-trained the model, who measured the outcome: one answer three times, Lila Sciences. And the test bed was not the 50,000 questions that had just been opened. It was a task the company chose for itself.

Opening an exam paper and marking one are separate acts.

"To have a score from our own records produced again on the outside, what would we have to hand over with them?"

Pebblous weighs the quality of AI training data with DataClinic. Before any of that can be assessed, a few things have to already be settled.

Whether the measurement carries, next to it, the question that produced it.

Whether the source and the terms of use for that question were written down too.

Whether the same score could be produced again from outside the organization.

Nvidia has done the first half. The second half it left open for anyone to do, and so far nobody has.

▶ Full piece: https://blog.pebblous.ai/blog/nvidia-litmusbench-chemistry-eval-dataset/en/

#Pebblous #LitmusBench #NVIDIA #AIReadyData #DataQuality #DataClinic #EvaluationDataset
