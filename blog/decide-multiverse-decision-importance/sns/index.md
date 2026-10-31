# SNS 홍보 글: DECIDE는 같은 데이터에서 결론을 가른 선택을 찾아낸다

> 소스: blog/decide-multiverse-decision-importance/
> 생성일: 2026-10-31
> URL: https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

여성스러운 이름의 허리케인이 더 많은 사망자를 낸다고 주장한 연구를 분석 조합 1,728가지로 다시 돌렸더니, 결론을 가장 크게 흔든 것은 이름이 아니라 어떤 회귀 모델을 쓰느냐였다.

10월 28일 arXiv에 올라온 논문이 그 계산법에 DECIDE라는 이름을 붙였다. UC 버클리와 뮌헨대(LMU), 만하임대 연구진이 함께 썼고 코드도 공개했다. 한 분석에서 갈릴 수 있는 지점을 모두 적고 그 조합을 전부 돌린 다음, 어느 지점이 결과를 갈랐는지를 결정마다 점수로 매긴다. 허리케인 멀티버스의 일곱 결정 가운데 1위는 모델 종류였고, 정작 그 연구의 가설이 걸려 있던 '이름의 여성스러움'은 맨 아래였다.

지금까지 이 물음에 답하던 방식은 결정을 입력, 결과를 출력으로 삼는 보조 모델을 하나 더 세워 그 계수를 영향력으로 읽는 것이었다. 저자들이 그 보조 모델의 적합도를 직접 재 보니 허리케인 멀티버스에서는 조정 R²가 0.490에 그쳤고 잔차에도 패턴이 남아 있었다. DECIDE는 보조 모델을 세우지 않고 이미 돌려 둔 결과값에서 바로 계산한다.

다만 점수는 분석가가 적어 넣은 선택지 목록에 조건부다. 결정 하나를 고정해 멀티버스를 줄여 보는 절제 실험에서 DECIDE가 순위를 가장 잘 지키긴 했지만, 흔들리지 않았다는 뜻은 아니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 수치로 진단한다. 항목을 하나씩 떼어 보는 점검에는 허리케인 표의 '피해액 변환' 같은 결정이 걸리지 않는다. 전체 중요도는 일곱 중 3위인데 혼자 움직일 때의 값은 0.001이어서, 그 영향이 다른 결정과 겹치는 자리에서만 나오기 때문이다.

▶ 전문: https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #DECIDE #멀티버스분석 #재현성위기 #분석가자유도 #데이터거버넌스 #arXiv

---

## LinkedIn (EN)

A study claiming that hurricanes with feminine names kill more people was rerun across 1,728 analysis combinations. What moved the conclusion most was not the name. It was the choice of regression model.

The calculation has a name, DECIDE, and the paper describing it appeared on arXiv on October 28. Its authors, at UC Berkeley, LMU Munich and the University of Mannheim, have released their code. The method writes down every point where an analysis could fork, runs the whole set of combinations, and then scores each decision by how much of the spread it accounts for. Of the seven decisions in the hurricane multiverse, the model family ranked first; the femininity of the name, the variable the original study was built around, ranked last.

Until now the standard answer came from fitting a second model on top, with decisions as inputs and outcomes as the response, and reading its coefficients as influence. The authors checked how well that second model actually fit. On the hurricane multiverse the adjusted R² was 0.490, with visible structure left in the residuals. DECIDE skips the extra model and computes directly from results already in hand.

The scores remain conditional on the list of options an analyst thought to write down. An ablation that pins one decision and shrinks the multiverse left DECIDE's rankings steadier than any competing estimator, and steadier here means less movement, not none.

Pebblous puts a value on the quality of AI training data with DataClinic. Reviewing one item at a time will not catch a decision like the hurricane table's damage transformation: third of seven by total importance, 0.001 on its own, because its effect only appears where it overlaps with something else.

▶ Read: https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DECIDE #MultiverseAnalysis #Reproducibility #ResearcherDegreesOfFreedom #DataGovernance #arXiv

---

## Twitter/X (KO)

"여성스러운 이름의 허리케인이 더 많은 사망자를 낸다"는 연구를 분석 조합 1,728가지로 다시 돌렸다. 결론을 가장 크게 흔든 것은 이름이 아니라 회귀 모델 선택이었다.

저자들이 DECIDE라 이름 붙인 이 계산법은 보조 모델을 세우지 않고 어느 분석 결정이 결론을 갈랐는지 짚는다. 10월 28일 공개.

https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/ko/

#페블러스 #데이터품질 #DECIDE #멀티버스분석

---

## Twitter/X (EN)

A study on whether feminine-named hurricanes are deadlier was rerun across 1,728 analysis combinations. The choice that moved the conclusion most was the regression model, not the name.

DECIDE, out on arXiv since October 28, scores which analysis decision drove the spread without fitting a surrogate model.

https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/en/

#Pebblous #DataQuality #DECIDE #MultiverseAnalysis

---

## Facebook (KO)

같은 자료를 두 팀에 넘기고 각각 보고서를 받아 본 일이 있습니다.

숫자가 달랐습니다.

회의가 길어지다가, 끝날 무렵 누군가 "분석 방법이 달랐나 봅니다"라고 말했습니다. 아무도 반박하지 않았고 거기서 끝났습니다.

그 뒤를 이을 문장이 우리에게 없었기 때문입니다.

지난 28일 공개된 한 논문이 꼭 그 자리에서 시작합니다. 한 분석에서 갈릴 수 있는 지점을 빠짐없이 적고, 그 조합을 전부 돌린 다음, 어느 지점이 결론을 갈랐는지를 결정마다 점수로 매깁니다. 이름은 DECIDE, 원문은 arXiv:2610.38797입니다.

시험대로 고른 것은 오래 다툼이 있었던 연구였습니다. 여성스러운 이름이 붙은 허리케인이 더 많은 사망자를 냈다는 2014년 논문입니다. 갈릴 수 있는 지점 일곱 개를 조합해 1,728가지로 다시 돌렸습니다.

1위는 어떤 회귀 모델을 쓰느냐였습니다.

이름이 얼마나 여성스러운가, 연구가 애초에 묻고 싶었던 바로 그 변수는 일곱 가운데 맨 아래였습니다.

'갈림목.'

일곱 결정이 같은 무게로 놓여 있지 않다는 것, 그중 몇 자리에서만 결론이 실제로 갈라진다는 것. 논문이 재는 것은 그 자리입니다.

제 눈이 더 오래 머문 쪽은 허리케인 표가 아니라 논문이 따로 설계한 실험이었습니다. 이진 결정 열두 개로 우주 4,096개를 만들고, 그중 하나를 방아쇠 역할을 맡은 여섯 개가 모두 켜져 있을 때만 작동하도록 심었습니다. 그 조건에서는 정확도가 0.30 떨어집니다. 실제로 그 일이 벌어지는 우주는 32개, 전체의 0.78%입니다.

평균으로 매기면 이 결정은 열둘 가운데 꼴찌입니다.

최악으로 매기면 단독 1위입니다.

논문은 둘 중 어느 쪽도 틀리지 않았다고 적었습니다. 서로 다른 물음에 답하고 있을 뿐이라고요.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 수많은 사례를 한 번 모아야 점수 하나가 나오는데, 평균으로 모으느냐 최악으로 모으느냐에 따라 그 점수가 답하는 물음이 달라집니다.

"이 점수는 보통 어떤가를 말합니까, 가장 나쁠 때 어떤가를 말합니까?"

논문이 스스로 적은 한계도 같은 결입니다. DECIDE의 점수는 분석가가 적어 넣은 선택지 목록 안에서만 유효합니다. 목록에 오르지 못한 선택은 꼴찌조차 되지 못합니다.

전문: https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/ko/

#페블러스 #데이터클리닉 #데이터품질 #DECIDE #멀티버스분석 #AIReadyData

---

## Facebook (EN)

I once handed the same dataset to two teams and asked each for a report.

The numbers came back different.

The meeting ran long, and near the end someone said the two teams must have used different methods. Nobody argued. That was where it stopped.

We had no sentence to put after that one.

A paper that appeared on arXiv on October 28 begins exactly there. Write down every point where an analysis could fork, run all the combinations, then score each decision by how much of the difference it created. The method is called DECIDE.

For a test case the authors picked a study people had argued over for years: the 2014 claim that hurricanes given feminine names killed more people. Seven forking points, recombined into 1,728 runs.

First place went to the choice of regression model.

How feminine the name was, the one variable the study had been built to ask about, came last of the seven.

"The fork that mattered."

Not all seven decisions carry the same weight, and the conclusion only truly splits at a few of them. Those are the places the paper is measuring.

What I reread was not the hurricane table but a second experiment the authors designed. Twelve binary decisions make 4,096 universes, and one of them was planted so that it fires only when the six decisions acting as triggers are all switched on. Under that condition accuracy drops by 0.30. The number of universes where it actually happens is 32, or 0.78% of the whole.

Averaged, that decision ranks last of twelve.

Taken at its worst, it ranks first alone.

Neither ranking is wrong, the paper says. The two are not asking the same thing.

Pebblous puts a value on the quality of AI training data with DataClinic. Producing one score means gathering a great many cases into a single figure, and whether that gathering is done by averaging or by worst case changes which question the score answers.

"Does this score describe the usual day, or the worst one?"

The limitation the authors state about their own method sits on the same line. A DECIDE score holds only within the list of options an analyst thought to write down. A choice that never made the list cannot even come last.

Read: https://blog.pebblous.ai/blog/decide-multiverse-decision-importance/en/

#Pebblous #DataClinic #DataQuality #DECIDE #MultiverseAnalysis #AIReadyData
