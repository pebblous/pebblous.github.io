# SNS 홍보 글: MLE-bench 시험: AI는 자기 아이디어가 통할지 알까?

> 소스: blog/mle-bench-llm-experiment-prediction/ko/index.html
> 생성일: 2026-10-22
> URL: https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

학습을 돌리기 전에 결과를 숫자로 적어 내게 했더니, 가장 잘 맞힌 모델이 절반에서 멈췄습니다.

이달 15일 arXiv에 올라온 논문입니다. 캐글 경진대회에서 추린 과제 모음 MLE-bench에서, AI가 직접 제안한 개선 아이디어 288건을 하나씩 실제로 학습시켜 점수가 얼마나 바뀌는지 기록했습니다. 그다음 프런티어 모델 다섯에게 그 결과를 보여 주지 않은 채 변화를 미리 예측하게 했습니다. 결정계수 0.49로 가장 높았던 것은 Claude Opus 5.5였고, 아이디어마다 결과가 갈린 폭의 절반까지 예측이 따라갔습니다.

눈에 띄는 쪽은 적중률이 아니라 틀리는 방향이었습니다. 다섯 모델이 모두 같은 쪽으로 틀렸습니다. 점수를 크게 바꿔 놓은 아이디어일수록 그 크기를 작게 봤습니다. 실제로 표준편차의 두 배만큼 점수를 끌어올린 아이디어를 두고 가장 나은 모델이 적어 낸 예측은 1.2배 언저리였습니다. 한쪽으로 치우친 예측은 여러 번 물어 평균을 내도 줄지 않습니다.

저자들이 이 결과가 가장 크게 걸린다고 본 자리는 재귀적 자기개선입니다. AI가 자기를 더 낫게 만드는 실험을 스스로 고르고 돌리는 상황인데, 거기서는 실험 하나가 모델 하나를 새로 학습시키는 일이 됩니다. 다만 한계도 저자들이 먼저 적어 뒀습니다. 아이디어마다 학습을 한 번씩만 돌렸기 때문에 기록된 변화 중 일부는 학습 자체의 흔들림일 수 있고, 과제는 여덟 개뿐이며 전부 규모가 작은 문제입니다.

비싼 작업을 시작하기 전에 무엇부터 할지 고르는 일은 데이터 쪽에서도 매일 벌어집니다. 어떤 구간을 더 모을지, 어디에 라벨 비용을 쓸지 정하는 판단이 그것입니다. 이 논문이 적중률을 계산할 수 있었던 것은 예측을 미리 적어 두고 나중에 실측과 맞춰 봤기 때문입니다. 현장에서는 그 숫자가 회의에서 말로 오가고 작업이 끝나면 결과만 남습니다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 판단의 적중률을 재려면, 판단이 내려진 자리에 그때의 예측이 함께 적혀 있어야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #MLEbench #LLM #실험설계 #재귀적자기개선 #ClaudeOpus #arXiv

---

## LinkedIn (EN)

Asked to write down what an experiment would produce before it ran, the best-scoring frontier model accounted for half the spread in the results.

The paper went up on arXiv on October 15. On tasks from MLE-bench, a problem set drawn from Kaggle competitions, the authors took 288 improvement ideas that AI had proposed, trained each one for real, and recorded how far it moved the score. Five frontier models were then asked to put a number on that change without seeing any of it. Claude Opus 5.5 came out highest with a coefficient of determination of 0.49, which is to say half of the spread between ideas was called in advance and the other half only showed up once the training ran.

The striking part is not the hit rate but the direction of the misses. All five models missed the same way. The more an idea moved the score, the smaller they judged the movement to be. For an idea that lifted the score by two standard deviations, the best model's written prediction landed near 1.2. A lean in one direction does not wash out by asking again and averaging.

The authors say the result bears hardest on recursive self-improvement, where an AI picks and runs the experiments that make itself better, and where one experiment can mean training a new model. They set out the limits themselves as well. Each idea was trained only once, so part of the recorded change may be the noise of training. There are eight tasks and all of them are small.

Choosing what to take on first, before the expensive work starts, happens on the data side every day: which slice to collect more of, which batch to spend the labeling budget on. This paper could compute a hit rate because the predictions were written down in advance and matched against measurements afterward. In practice that estimate gets talked through in a meeting, and once the work is done only the result remains. Pebblous tests the quality of AI training data with DataClinic. Scoring a judgment call means the prediction has to be sitting next to the decision that was made on it.

▶ Read: https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #MLEbench #LLM #ExperimentDesign #RecursiveSelfImprovement #ClaudeOpus #arXiv

---

## Twitter/X (KO)

AI가 직접 낸 개선 아이디어 288건을 캐글 과제에서 실제로 학습시켜 놓고, 프런티어 모델 다섯에게 학습 전에 결과를 맞혀 보게 한 논문이 이달 arXiv에 올라왔습니다. 가장 잘 맞힌 모델이 설명한 것은 결과가 갈린 폭의 절반이었습니다.

틀리는 방향은 다섯이 같았습니다. 크게 바꿀 아이디어일수록 작게 봤습니다.

https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/ko/

#페블러스 #데이터품질 #MLEbench #실험설계

---

## Twitter/X (EN)

A paper on arXiv this month trained 288 AI-proposed ideas on Kaggle tasks for real, then asked five frontier models to call the results beforehand. The best one explained half the spread between ideas.

All five missed the same way. The more an idea moved the score, the smaller they called it.

https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/en/

#Pebblous #DataQuality #MLEbench #ExperimentDesign

---

## Facebook (KO)

해 볼 수 있는 것은 열 가지인데 이번 주에 돌릴 수 있는 것은 셋일 때, 그 셋을 무엇으로 고르십니까.

대개는 감으로 고릅니다. 이게 될 것 같다는 느낌 하나로 일곱 개를 접습니다.

그리고 그 감이 얼마나 맞았는지는 아무도 재지 않습니다. 접은 일곱 개는 돌려 보지 않았으니 결과가 없고, 결과가 없으면 맞춰 볼 대상도 없습니다.

이달 15일 arXiv에 올라온 논문은 그 감을 재 보기로 했습니다.

캐글 경진대회에서 추린 과제 모음 MLE-bench의 과제 여덟 개에서, AI가 직접 제안한 개선 아이디어 288건을 하나씩 실제로 학습시켜 점수가 얼마나 바뀌는지 기록했습니다. 그다음 프런티어 모델 다섯에게 그 기록을 보여 주지 않고 변화를 미리 예측하게 했습니다.

말하자면 '감의 성적표'를 한 장 만든 것입니다.

가장 잘 맞힌 모델은 Claude Opus 5.5였고, 결정계수는 0.49였습니다. 아이디어마다 결과가 갈린 폭의 절반은 미리 짚었고, 나머지 절반은 학습을 끝내고 나서야 드러났습니다.

저에게 더 오래 남은 것은 그 절반이 아니라 틀리는 방향이었습니다.

다섯 모델이 모두 같은 쪽으로 틀렸습니다. 점수를 크게 바꿔 놓은 아이디어일수록 그 크기를 작게 봤습니다.

한 모델의 버릇이면 그 모델만 피하면 됩니다. 다섯이 같은 방향으로 기울면 피할 자리가 없습니다. 여러 번 물어 평균을 내는 방법도 듣지 않습니다. 몇 번을 물어도 답이 같은 쪽에서 돌아옵니다.

이 기울기가 그대로 쓰이면, 판을 가장 크게 바꿀 후보가 후보 목록에서 가장 많이 깎인 점수를 받게 됩니다.

이 구조가 데이터 쪽에도 그대로 놓여 있다는 생각이 들었습니다. 어떤 구간을 더 모을지, 어느 묶음에 라벨 비용을 쓸지, 무엇을 버릴지. 수집과 라벨링도 학습만큼 비싸고, 전부 모아 두고 고르는 방식은 똑같이 불가능합니다. 그래서 여기서도 결과를 보기 전에 가치를 어림하는 감이 먼저 움직입니다.

다만 이 논문이 성적표를 만들 수 있었던 까닭은 하나였습니다. 예측을 미리 적어 두었기 때문입니다.

"이 데이터를 더 모으면 모델이 얼마나 좋아집니까?"

회의에서 이 질문에 답이 나오면 작업이 승인됩니다. 그런데 그 답은 보통 말로 오가고 끝납니다. 작업이 끝난 자리에는 결과만 남습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터의 상태를 재는 일과 그 데이터를 모으자고 한 판단을 재는 일은 서로 다른 작업인데, 뒤쪽은 예측이 적혀 있지 않으면 아예 시작되지 않습니다.

AI에게 수집이나 보강의 순서를 맡기기 시작한 팀이라면, 그 판단의 적중률이 지금 어디에 기록되고 있는지 한 번 찾아보셔도 좋겠습니다.

찾으시는 동안 저도 같은 서랍을 열어 보고 있겠습니다.

▶ 전문: https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/ko/

#페블러스 #데이터품질 #데이터클리닉 #MLEbench #ClaudeOpus #실험설계 #AIReadyData

---

## Facebook (EN)

Ten things you could try this week, three you have the compute to run. What do you pick the three on?

Usually a hunch. A sense that this one is going to work, and seven get set aside on the strength of it.

And nobody ever scores the hunch. The seven you set aside were never run, so there is no result, and with no result there is nothing to check the hunch against.

A paper that went up on arXiv on October 15 decided to score it anyway.

On eight tasks from MLE-bench, a problem set drawn from Kaggle competitions, the authors took 288 improvement ideas that AI itself had proposed, trained each one for real, and recorded how far it moved the score. Then they handed five frontier models the same ideas, kept the results from them, and asked for a number.

A report card for intuition, in other words.

Claude Opus 5.5 scored highest, with a coefficient of determination of 0.49. Half of the spread between ideas was called in advance. The other half only showed up once the training had run.

What I kept coming back to was not the half. It was the direction of the misses.

All five models missed the same way. The more an idea moved the score, the smaller they judged the movement to be.

One model's habit you can simply avoid. Five models leaning together leaves nowhere to stand. Asking repeatedly and averaging does not help either, because the answer keeps coming back tilted the same way.

Used as it stands, that slope means the candidate that would shift things the most is the one whose score gets cut the most on the shortlist.

The same shape sits on the data side. Which slice to collect more of, which batch to spend the labeling budget on, what to discard. Collection and labeling cost what training costs, and gathering everything first and choosing afterward is just as impossible. So here too a sense of what something is worth moves first, before any result is in.

The paper could produce a report card for one reason only. The predictions were written down beforehand.

"How much better does the model get if we collect more of this?"

An answer to that question in a meeting is what gets the work approved. The answer is usually spoken and left there. Once the work is finished, only the result remains.

Pebblous tests the quality of AI training data with DataClinic. Measuring the state of the data and scoring the judgment that went into collecting it are two different jobs, and the second one never starts unless the prediction was written down.

If your team has begun handing collection or augmentation priorities to an AI, it may be worth looking for where the hit rate on those calls is being kept.

I will be going through the same drawer while you look.

▶ Read: https://blog.pebblous.ai/blog/mle-bench-llm-experiment-prediction/en/

#Pebblous #DataQuality #DataClinic #MLEbench #ClaudeOpus #ExperimentDesign #AIReadyData
