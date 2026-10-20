# SNS 홍보 글: SELECTBENCH — AI 신약 후보는 다른 단백질에도 붙는다

> 소스: blog/selectbench-generative-drug-design-selectivity/ko/index.html
> 생성일: 2026-10-21
> URL: https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

토론토대와 몬트리올대 연구진이 10월 16일 공개한 SELECTBENCH는 신약 후보 분자를 그려 내는 생성 모델 아홉 종에게 지금까지의 평가가 묻지 않던 것을 물었습니다. 표적 단백질에 얼마나 잘 붙느냐가 아니라, 다른 단백질은 피하느냐입니다.

과제는 셋입니다. 약을 만드는 사람들이 가르기 어렵다고 오래 씨름해 온 문헌 속 단백질 짝, 제약 현장의 안전성 스크리닝을 본뜬 부작용 관련 단백질 구조 85종 패널, 그리고 공개 도킹 자료에서 자동으로 만들어 낸 9,900쌍입니다.

성적은 담담했습니다. 표적 밖을 피하는 것까지 학습 목표에 넣은 모델 둘도 기준 모델과 대체로 대등했고, 일관된 개선이 없었습니다. 학습을 다시 시키지 않고 분자를 뽑아내는 순간에만 방향을 틀어 주는 기법도 완만한 개선에 그쳤습니다.

기준을 조이면 더 또렷해집니다. 표적을 표준편차 한 칸만큼 앞선 분자가 절반을 넘는 일은 드물었고, 패널에 올린 단백질을 하나도 빠짐없이 따돌리라는 조건으로 바꿔 걸면 모든 방법의 성공률이 영에 가깝게 내려앉습니다.

논문이 든 까닭은 모델이 아니라 그 앞의 고리입니다. 어떤 분자가 어떤 단백질에 붙었다는 기록은 실험이 성공했을 때 논문이 되고 데이터베이스에 쌓이지만, 붙지 않았다는 사실은 대개 아무 데도 적히지 않습니다. 표적 밖 상호작용을 적은 데이터가 모자라니 채점표를 만들 수 없었고, 채점표가 없으니 학습 목표로 세울 수가 없었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 다만 데이터를 양으로 세는 동안에는, 그 데이터가 애초에 무엇을 묻자고 모였는지가 어느 칸에도 적히지 않습니다. SELECTBENCH가 한 일 가운데 값진 쪽은 점수를 매긴 것이 아니라, 비어 있던 자리에 채점표를 세운 것입니다.

▶ 전문: https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #SELECTBENCH #AI신약개발 #구조기반약물설계 #생성모델 #표적밖결합 #Boltz2

---

## LinkedIn (EN)

SELECTBENCH, published on October 16 by researchers at the University of Toronto and the Université de Montréal, puts nine generative drug-design models in front of a question the existing scorecards never asked. Not how tightly a molecule binds the protein it was aimed at, but whether it leaves the other proteins alone.

The benchmark splits that into three tasks: protein pairs from the literature that drug designers have long found hard to pry apart, a panel of 85 structures tied to adverse drug reactions that stands in for industrial safety screening, and 9,900 pairs generated automatically from public docking data.

The findings are sober. The two models that put avoiding off-targets into their training objective came out largely on par with standard baselines, with no consistent improvement. Steering a trained model at generation time, without retraining it, produced only modest gains.

Tighten the bar and the picture sharpens. Molecules beating the off-target by a full standard deviation rarely formed a majority, and once a molecule has to clear every protein on the panel at once, success rates fall to near zero for every method.

The paper locates the cause upstream of the models. A record that some molecule bound some protein becomes a paper and enters a database when the experiment works; the fact that it did not bind is usually written down nowhere. With too little data on off-target interactions there was no scorecard, and with no scorecard there was nothing to set as a training objective.

Pebblous inspects the quality of AI training data with DataClinic. Counting data by volume never surfaces the question it was gathered to answer in the first place. The valuable thing SELECTBENCH did is less the scoring than the scorecard, set down in a place that had been empty.

▶ Read: https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #SELECTBENCH #AIDrugDiscovery #StructureBasedDrugDesign #GenerativeModels #OffTargetBinding #Boltz2

---

## Twitter/X (KO)

신약 후보 분자를 그려 내는 AI 아홉 종을 부작용 관련 단백질 85종 앞에 세웠습니다. 표적 말고 다른 단백질은 피하는지를 따로 떼어 채점한 벤치마크입니다. 선택성을 겨냥해 학습한 모델도 보통 모델과 엇비슷했습니다.

채점표가 없던 능력은 모델에 생기지 않습니다.

https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/ko/

#페블러스 #데이터품질 #SELECTBENCH #AI신약개발

---

## Twitter/X (EN)

Nine AI models that sketch new drug candidates were set against 85 proteins linked to adverse reactions, in a benchmark that scores one thing on its own: whether they avoid binding anything but the target. The models trained for selectivity scored about the same as the rest.

A model does not pick up an ability nobody was scoring.

https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/en/

#Pebblous #DataQuality #SELECTBENCH #AIDrugDiscovery

---

## Facebook (KO)

약 설명서의 부작용 칸을 끝까지 읽어 본 적이 있습니까.

거기 적힌 것들은 대개 약이 잘못 만들어져서 생긴 일이 아닙니다. 겨눈 단백질에 잘 붙은 그 분자가, 겨누지 않은 단백질에도 붙어서 생긴 일입니다.

약은 열쇠에 가깝습니다. 병을 일으키는 단백질의 주머니를 구멍 삼아 깎아 낸 열쇠입니다.

그런데 사람 몸 안에는 단백질이 수만 종 있고, 그중에는 구멍 모양이 닮은 것들이 섞여 있습니다. 깎아 낸 열쇠가 그 문까지 열어 버리면, 약은 하라는 일 말고 하지 말라는 일까지 합니다.

요즘 이 열쇠를 깎는 일은 생성 AI가 맡습니다. 주머니의 삼차원 모양을 넣으면 거기 맞을 법한 분자를 원자 단위로 그려 냅니다.

그런데 지금까지의 채점은 "이 열쇠가 그 문을 여는가" 하나만 봤습니다.

토론토대와 몬트리올대 연구진이 10월 16일 공개한 SELECTBENCH는 그 AI 아홉 종에게 두 번째 질문을 따로 떼어 던져 봤습니다.

"이 열쇠는 다른 문도 엽니까?"

모델들은 그 질문 앞에서 크게 나아지지 않았습니다. 표적 밖을 피하는 것까지 학습 목표에 넣은 모델 둘도 보통 모델과 대체로 대등했고, 분자를 뽑아내는 순간에 방향을 틀어 주는 기법을 걸어도 개선은 완만했습니다. 부작용과 연관된 단백질을 한 패널에 늘어놓고 그중 하나도 빠짐없이 따돌리라고 요구하자, 모든 방법의 성공률이 영에 가깝게 내려앉았습니다.

읽고 나서 남은 것은 성적표가 아니라 그 앞의 사정이었습니다.

어떤 분자가 어떤 단백질에 붙었다는 기록은 실험이 성공했을 때 논문이 되고 데이터베이스에 쌓입니다. 붙지 않았다는 사실은 대개 아무 데도 적히지 않습니다.

그러니 표적 밖을 적은 데이터가 모자랐고, 데이터가 모자라니 채점표를 만들 수 없었고, 채점표가 없으니 학습 목표로 세울 수가 없었습니다. 저는 이런 자리를 '묻지 않아서 비어 있는 칸'이라고 부릅니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 다만 데이터를 양으로 세는 동안에는, 그 데이터가 애초에 무엇을 묻자고 모였는지가 어느 칸에도 적히지 않습니다. 결합 기록은 결합을 맞히라고 모인 자료이지 안전을 가리라고 모인 자료가 아닙니다. 같은 분자와 같은 단백질을 담고 있어도 그렇습니다.

SELECTBENCH가 한 일 가운데 가장 값진 쪽은 점수를 매긴 것이 아니라, 비어 있던 칸에 채점표를 세운 것이라고 생각합니다. 과제와 지표가 자리를 잡으면, 그때부터 그곳을 채울 데이터를 모을 이유가 생깁니다.

묻지 않은 것은 데이터에도 남지 않습니다. 지금 쌓고 있는 데이터가 아직 받아 본 적 없는 질문은 무엇일까요.

▶ 전문: https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/ko/

#페블러스 #데이터품질 #SELECTBENCH #AI신약개발 #구조기반약물설계 #AIReadyData

---

## Facebook (EN)

Have you ever read the side-effect section of a drug label all the way down?

Most of what is listed there is not a sign that the drug was made badly. It is what happens when the molecule that binds the protein it was aimed at also binds a protein it was not.

A drug is close to a key. It is cut by studying the pocket of a disease-driving protein as a keyhole.

But a human body holds tens of thousands of proteins, and some of them have pockets shaped much like that one. When the key opens those doors too, the drug does what it was asked to do and then some.

These days a generative model does the cutting. Feed it the three-dimensional shape of a pocket and it draws, atom by atom, a molecule that might sit in there.

Until now the scoring has asked one thing: "Does this key open that door?"

SELECTBENCH, released on October 16 by researchers at the University of Toronto and the Université de Montréal, pulled the second question out on its own and put it to nine of those models.

"Does this key open other doors?"

The models did not come out much better for being asked. The two that put avoiding off-targets into their training objective landed about level with ordinary ones, and steering a model at the moment a molecule emerges brought only modest gains. Lay out a panel of proteins tied to adverse reactions and require that not one of them be hit, and success rates fall to near zero for every method.

The scoreboard was not the part I went back to. The condition behind it was.

A record that some molecule bound some protein becomes a paper and enters a database when the experiment works. The fact that it did not bind is usually written down nowhere.

So data on off-target interactions ran short, and short data meant no scorecard, and no scorecard meant nothing to set as a training objective. I have come to call a place like that a column left blank because nobody asked.

Pebblous inspects the quality of AI training data with DataClinic. Counting data by volume never surfaces the question it was gathered to answer in the first place. Binding records were collected to predict binding, not to sort out safety, and that holds even when they contain the same molecules and the same proteins.

The most valuable thing SELECTBENCH did, I think, is not the scoring but the scorecard it set down in a column that had been blank. Once a task and a metric take their place, there is suddenly a reason to collect what fills them.

What was never asked leaves no trace in the data either. What question has the data we are piling up still never been put to?

▶ Read: https://blog.pebblous.ai/blog/selectbench-generative-drug-design-selectivity/en/

#Pebblous #DataQuality #SELECTBENCH #AIDrugDiscovery #StructureBasedDrugDesign #AIReadyData
