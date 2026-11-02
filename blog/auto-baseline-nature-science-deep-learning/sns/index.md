# SNS 홍보 글: 네이처·사이언스에 실린 딥러닝, 단순한 방법이 거의 따라잡는다

> 소스: blog/auto-baseline-nature-science-deep-learning/
> 생성일: 2026-11-03
> URL: https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

사전학습 가중치도 GPU도 없이 30분 안에 끝나는 스크립트 한 개가, 네이처·사이언스에 실린 딥러닝 모델과 같거나 더 나은 점수를 냈다. 서른여섯 번 겨뤄 열두 번 그랬다.

카네기멜런대·워싱턴대와 선데이 사이언티픽 연구진이 10월 28일 arXiv에 올린 논문이다. 네이처·사이언스·셀 계열 학술지의 공개 논문에서 지도 예측 과제 36개를 뽑고, 과제마다 언어모델에게 비교용 기준선을 짜게 했다.

더 중요한 수치는 분포의 한가운데에 있다. 자동으로 지은 기준선은 아무것도 학습하지 않은 예측기와 딥러닝 모델 사이 격차의 중앙값 95.5%를 메웠다.

기계에 넘긴 일이 더 좋은 모델을 찾는 쪽이 아니라 더 정직한 비교를 세우는 쪽이라는 점이 이 연구의 설계다. 에이전트에게 준 지시에는 "단순한" 모델이라는 말이 없었고 신경망 학습도 허용했는데, 채점된 스크립트 157개 가운데 85개가 그래디언트 부스팅 트리로 돌아갔다. 단순함을 만든 쪽은 지시가 아니라 제약이다.

한계는 저자들이 먼저 적었다. 나머지 24개 과제에서는 딥러닝이 앞서 있고, 모델이 사전학습 과정에서 원 논문과 데이터셋을 이미 보았을 가능성은 남는다. 학술지마다 과제 수가 고르지 않아 어느 분야가 더 허술한지는 검정하지 않았다고도 밝혔다.

그러니 이 실험이 흔든 것은 딥러닝의 값어치가 아니라 그 값어치를 재는 데 쓰인 잣대다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 눈금 위에 올려 진단한다. 성적표에서 자주 비어 있는 칸은 점수가 아니라, 그 점수가 이긴 상대를 누가 얼마나 들여 만들었는지를 적는 자리다. 몇 주를 쓴 쪽과 반나절에 세운 쪽을 견주면 점수 차이에는 공들인 시간의 차이가 섞인다.

▶ 전문: https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #네이처 #사이언스 #arXiv #딥러닝 #기준선 #동료심사 #재현성

---

## LinkedIn (EN)

A script that ran on a CPU in under thirty minutes, with no pretrained weights, scored at least as well as the deep learning model published beside it in Nature or Science. Out of thirty-six contests it did so twelve times.

The paper landed on arXiv on October 28, from Carnegie Mellon, the University of Washington and Sunday Scientific. The researchers pulled 36 supervised prediction tasks out of open-access papers in the Nature, Science and Cell families and had a language model write one comparison baseline for each.

The number that matters more sits in the middle of the distribution. Across those tasks the automatic baselines recovered a median 95.5% of the gap between a trivial predictor and the published deep learning model.

The design point is that the machine was handed the comparison rather than the model. The prompt never asked for a simple baseline and training a neural network was allowed; of the 157 scored scripts, 85 reached for gradient-boosted trees anyway. Simplicity came out of the constraints, not the instruction.

The authors draw their own boundaries. Deep learning still leads on the other 24 tasks, the model may have seen the source papers and datasets during pretraining, and with three to 18 tasks per journal they state that they did not test whether any field fares worse than another.

What the experiment shook, then, is not the worth of deep learning but the yardstick that worth was measured with.

Pebblous puts a quality score on AI training data with DataClinic. The field most often left blank on a scorecard is not the score. It is the one recording who built the thing the score was measured against, and how long they had: weeks on the model, an afternoon on the baseline.

▶ Read: https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Nature #Science #arXiv #DeepLearning #Baselines #PeerReview #Reproducibility

---

## Twitter/X (KO)

네이처·사이언스·셀 계열 논문에서 뽑은 딥러닝 과제 36개에 언어모델이 비교용 기준선을 자동으로 지어 붙였다. 사전학습 가중치도 GPU도 쓰지 않은 스크립트인데, 12개 과제에서 원 논문의 딥러닝 성적을 따라잡거나 넘어섰다.

자동화한 것은 모델이 아니라 비교 대상이다.

https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/ko/

#페블러스 #데이터품질 #네이처 #딥러닝 #기준선

---

## Twitter/X (EN)

A language model was asked to write one comparison baseline for each of 36 deep learning tasks taken from Nature, Science and Cell papers. With no pretrained weights and no GPU, those baselines matched or beat the published deep learning result on 12 of them.

What was automated is the comparison, not the model.

https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/en/

#Pebblous #DataQuality #Nature #DeepLearning #Baselines

---

## Facebook (KO)

"기존 방식 대비 14% 향상."

발표 자료에서 이 줄을 만나면 저는 14%를 봅니다. 기존 방식이 무엇이었는지는 좀처럼 묻지 않습니다.

지난달 말 arXiv에 올라온 논문 하나가 그 질문을 기계에게 대신 시켰습니다.

네이처와 사이언스, 셀 계열 학술지에 실린 딥러닝 연구에서 지도 예측 과제 서른여섯 개를 뽑고, 과제마다 언어모델에게 비교용 기준선을 짜게 한 실험입니다. 사전학습 가중치 없이, GPU 없이, 스크립트 한 개로 삼십 분 안에.

열두 과제에서 그 기준선이 원 논문의 딥러닝 성적을 따라잡거나 넘어섰습니다.

더 오래 눈이 간 쪽은 지시문입니다. 연구진은 "단순한" 모델을 만들라고 한 적이 없습니다. 합리적인 기준선을 만들라고 했고 신경망 학습도 막지 않았습니다. 그런데 채점된 스크립트의 절반 이상이 딥러닝 이전부터 표 데이터에 잘 통하던 방법으로 돌아갔습니다.

단순함을 만든 쪽은 지시가 아니라 제약이었습니다.

그러니 이 논문이 자동화한 것은 모델이 아니라 비교 대상입니다. 어떤 방법이 좋아 보이는 이유가 그 방법이 뛰어나서인지 견준 상대가 허술해서인지를 기계가 대신 가려 준 셈입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 성적표를 받으면 점수부터 보게 되는데, 그 점수가 누구를 이긴 값인지는 대개 한 줄도 적혀 있지 않습니다. 모델에는 몇 주를 쓰고 견줄 상대에는 반나절을 썼다면, 두 점수의 차이에는 공들인 시간의 차이가 섞여 있습니다.

"반나절짜리 상대."

"우리가 이긴 그 상대는, 누가 얼마나 공들여 만든 것입니까?"

물론 나머지 스물네 과제에서는 딥러닝이 앞섰고, 저자들은 모델이 원 논문과 데이터셋을 이미 읽었을 가능성을 스스로 한계로 적어 두었습니다.

그래서 흔들린 자리는 딥러닝 쪽이 아닙니다. 그 옆에 세워 둔 상대 쪽이고, 그 상대는 지금도 대부분의 성적표에서 이름 없이 지나갑니다.

▶ https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/ko/

#페블러스 #데이터클리닉 #데이터품질 #네이처 #사이언스 #기준선 #딥러닝

---

## Facebook (EN)

"14% better than the existing approach."

When that line goes by in a slide deck, I look at the 14%. I almost never ask what the existing approach was.

An arXiv preprint from the end of last month handed that question to a machine.

The researchers took thirty-six supervised prediction tasks out of deep learning studies published in Nature, Science and the Cell-family journals, and asked a language model to write one comparison baseline for each. No pretrained weights. No GPU. One script, finished inside thirty minutes.

On twelve of those tasks the baseline matched or beat the deep learning score in the original paper.

The part that held me longest was the prompt. Nobody asked the agent for a simple model. It was asked for a reasonable baseline, and training a neural network was permitted. More than half of the scored scripts went back to the methods that worked on table data before deep learning arrived.

The simplicity came from the constraints, not from the instruction.

So what this paper automated is the comparison, not the model. Whether a method looks good because the method is good or because its opponent was feeble is a question the machine worked through on everyone else's behalf.

Pebblous spends its days saying, with DataClinic, how good a given set of AI training data actually is. A scorecard arrives and the score is the first thing anyone reads. Who the score beat is usually not written anywhere on it. If the model got weeks and its opponent got an afternoon, the gap between the two numbers has a gap in effort folded into it.

"An afternoon's opponent."

"Who built the thing we beat, and how long did they have?"

Deep learning did stay ahead on the other twenty-four tasks, and the authors note, as a limit of their own work, that the model may already have read the source papers and the datasets.

So the ground that moved is not under deep learning. It is under the thing standing next to it, which still goes through most scorecards without a name.

▶ https://blog.pebblous.ai/blog/auto-baseline-nature-science-deep-learning/en/

#Pebblous #DataClinic #DataQuality #Nature #Science #Baselines #DeepLearning
