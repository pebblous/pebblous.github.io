# SNS 홍보 글: Science Prediction Universe, AI 합의는 정답일까?

> 소스: blog/science-prediction-universe-agent-agreement/
> 생성일: 2026-11-15
> URL: https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

아직 아무도 돌려 보지 않은 실험의 결과를 예측하게 했더니, 열세 가지 AI 에이전트 구성 가운데 가장 높은 점수가 0.478이었다.

11월 11일 공개된 Science Prediction Universe는 화학과 재료과학, 생물학, 의학에서 모은 실험 과제 100개를 공개로 내고, 파트너 실험실에서 받아 아직 어디에도 발표하지 않은 습식실험 16개를 따로 숨겨 둔다. 에이전트는 자료 검색이든 분자 계산이든 수단을 가리지 않고 후보 조건을 좋은 값이 나올 순서대로 줄 세운다. 채점은 그 순서가 실험실이 측정한 순서와 얼마나 같은지로 매긴다.

성적표보다 눈에 띄는 숫자는 부록에 있다. 채점된 궤적 1,155개에서 구성들이 서로 매긴 순위끼리의 상관은 0.52인데, 같은 순위와 실제 측정값의 상관은 0.33이다. 논문은 모델들이 함께 품고 있는 단조 가정을 원인으로 지목한다. 조건의 숫자를 키우면 결과도 그 방향으로 따라간다는 기대다. 조건을 따라 한 방향으로 깔끔하게 늘어선 답이 네 건 중 한 건인데, 실험실의 측정이 그런 모양인 경우는 열에 하나였다.

1위 수치에는 단서가 붙는다. 그 구성은 안전 거부로 공개 과제 100개 중 44개만 채점됐고, 저자들은 건너뛴 과제가 평균을 밀어 올렸을 가능성을 한계로 적어 두었다. 100개를 모두 푼 구성 중 최고는 0.431이다. 도구 호출 227,103건을 훑어도 실행 시간이나 계산량과 점수 사이에서는 상관이 잡히지 않았다.

같은 능력을 먼저 쟀던 SciPredict에서는 인간 전문가가 실험 없이도 예측할 수 있다고 판단한 문제에서 정확도가 80%까지 올라갔는데, 모델은 확신하든 아니든 20% 언저리에 머물렀다. AI 학습 데이터의 품질은 페블러스의 DataClinic에서 정량으로 매겨진다. 모델이 자신 있다고 답한 사례만 따로 모아 적중률을 세어 두지 않으면, 그 확신은 판단 재료가 되지 못한다.

▶ 전문: https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #SciencePredictionUniverse #SciPredict #AI에이전트 #AI평가 #실험결과예측 #arXiv

---

## LinkedIn (EN)

Thirteen agent configurations were asked to predict the outcome of experiments nobody had run yet. The best of them scored 0.478.

Science Prediction Universe, released on November 11, hands an agent an experimental setup and a handful of candidate conditions and asks it to rank them by the value a real measurement would give. A literature search, a molecular calculation, anything is allowed. Scoring compares the submitted order against the order the laboratory recorded. Alongside 100 public tasks sit 16 wet-lab experiments from partner laboratories that have never been published.

The figure worth pausing on sits behind the leaderboard. Across 1,155 scored trajectories, the rankings the thirteen configurations produced correlate with one another at 0.52, and with the measured values at 0.33. The paper names shared monotone priors as the cause, meaning the expectation that a measured value keeps moving one way as a condition grows. A quarter of the submitted groups run that straight. Among the measured orders, 11% do.

The leading figure carries a caveat the authors wrote themselves. Safety refusals left that configuration with 44 of the 100 public tasks scored, and skipped tasks may have lifted its mean. The best configuration to work every task reached 0.431. Sweeping 227,103 tool calls turned up no correlation between score and run time, tool calls, web fetches or GPU use.

SciPredict, which tested this ability back in April, found human experts reaching 80% accuracy on the problems they judged predictable without an experiment, while the models sat near 20% regardless of what they claimed to know. At Pebblous, AI training data gets numbered before it is used, and DataClinic does that work. Unless the hit rate on the cases a model called itself sure about is counted on its own, that confidence is evidence of nothing.

▶ Read: https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #SciencePredictionUniverse #SciPredict #AIAgents #AIEvaluation #arXiv

---

## Twitter/X (KO)

열세 가지 AI 에이전트 구성에게 아직 측정되지 않은 실험의 결과를 예측시킨 벤치마크가 공개됐다.

서로가 매긴 순위끼리는 0.52로 닮았고, 실험실이 기록한 순서와는 0.33이었다.

합의가 커졌다고 정답에 가까워진 것은 아니다.

https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/ko/

#페블러스 #데이터품질 #SciencePredictionUniverse #AI에이전트

---

## Twitter/X (EN)

Thirteen AI agent configurations were asked which of several untried conditions a laboratory would end up measuring as the best.

Their rankings matched one another at 0.52 and the measured values at 0.33. The paper blames priors the models hold in common.

Models agreeing is not, by itself, a check on whether they are right.

https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/en/

#Pebblous #DataQuality #SciencePredictionUniverse #AIAgents

---

## Facebook (KO)

중요한 판단 앞에서 모델 두세 개에 같은 질문을 넣어 보는 분들이 많습니다.

돌아온 답이 서로 비슷하면, 거기서 한 번 마음을 놓게 됩니다.

지난주 공개된 벤치마크는 그 안심이 무엇에 기대고 있는지를 묻습니다. 화학과 재료과학, 생물학, 의학에서 모은 실험 과제를 열세 가지 에이전트 구성에게 주고, 아직 아무도 측정하지 않은 조건들을 좋은 결과가 나올 순서대로 줄 세우게 했습니다. 실험실이 나중에 기록한 순서가 정답으로 따로 있습니다.

구성들이 서로 매긴 순위끼리는 0.52만큼 닮았습니다. 같은 순위를 실험실의 측정값과 맞춰 보면 0.33이었습니다.

현실보다 서로를 더 닮은 것입니다.

논문이 지목한 이유는 모델들이 함께 품고 있는 기대였습니다. 조건의 숫자를 키우면 결과도 그 방향으로 따라 올라가리라는 기대입니다. 자연은 그렇게 단정하게 움직이지 않는데, 답들은 그렇게 움직인다고 가정한 채 나란히 섰습니다.

"답이 모였다는 것은 답이 맞다는 뜻입니까, 같은 교재를 봤다는 뜻입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 학습 자료와 조정 방식이 가까운 모델끼리의 일치는 증거가 한 장 늘어난 것이 아니라, 같은 증거를 한 번 더 들은 쪽에 가깝습니다.

이 벤치마크가 미발표 습식실험 열여섯 개를 끝까지 숨겨 둔 까닭도 거기 있을 것입니다. 모두가 답하고 난 뒤에도 아직 답하지 않은 숫자가 한쪽에 남아 있어야, 모인 답을 맞대 볼 자리가 생깁니다.

모델을 하나 더 불러 묻는 일은 쉽고, 그 모델이 어디서 배웠는지 확인하는 일은 번거롭습니다. 요즘은 번거로운 쪽이 먼저 오는 순서가 아닐까 싶습니다.

▶ 전문: https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/ko/

#페블러스 #데이터클리닉 #데이터품질 #SciencePredictionUniverse #AI에이전트 #실험결과예측

---

## Facebook (EN)

Many of us do this before a decision that matters. Put the same prompt to two or three models, and see whether the answers agree.

When they do, something relaxes.

A benchmark released last week asks what that relaxation rests on. Thirteen agent configurations were given experimental tasks drawn from chemistry, materials science, biology and medicine, and asked to rank conditions nobody had measured yet by the result each would produce. The order a laboratory later recorded is held separately as the answer.

The configurations resembled one another at 0.52. Set the same rankings against what the laboratory measured, and the figure is 0.33.

They look more like each other than like the laboratory.

The reason the paper gives is an expectation the models hold in common. Raise the number on a condition, and the result is expected to rise with it. The physical world does not move that tidily. The answers were ordered as though it did.

"When the answers converge, is that the answer being right, or the same textbook being read twice?"

The quality of AI training data is what Pebblous counts, and DataClinic is where the counting happens. Models that learned from overlapping material and were tuned in similar ways do not add a second piece of evidence when they agree. They repeat the first one.

Sixteen unpublished wet-lab experiments were kept out of the benchmark for what I take to be the same purpose. Something has to stay unanswered after everyone has answered, or nothing is left to hold the consensus against.

Calling in one more model is easy. Checking where that model learned what it knows is tedious. The tedious one may be the one that belongs first.

▶ Read: https://blog.pebblous.ai/blog/science-prediction-universe-agent-agreement/en/

#Pebblous #DataClinic #DataQuality #SciencePredictionUniverse #AIAgents #ExperimentalOutcomePrediction
