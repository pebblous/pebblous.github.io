# SNS 홍보 글: LLM 실패 분류, 모델 탓일까 채점 순서 탓일까?

> 소스: blog/llm-failure-taxonomy-order-dependence/ko/index.html
> 생성일: 2026-11-12
> URL (KO): https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/ko/
> URL (EN): https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

모델이 틀렸다는 데는 채점자 둘이 거의 완전히 합의했다. 왜 틀렸는지를 고르라고 하자 그 합의가 사라졌다.

페이팔의 마두 수단 라오 비세티가 12개 모델과 11개 언어에서 모은 채점 기록 2,316건을 다시 분석한 논문으로, IEEE CogMI 2026 게재가 확정됐다.

정답 여부를 놓고 심판 모델과 원어민이 보인 일치도는 코헨의 카파로 0.932였다. 같은 전사에서 '구성 붕괴' 유형을 붙일지만 물으면 0.093으로 내려앉는다. 우연 수준과 거의 완전 일치의 거리다.

분류기 쪽은 더 흔들린다. 실패의 절반이 두 유형 이상의 근거를 함께 지니고 있어서, 최종 라벨을 정하는 것은 사례가 아니라 검사를 어느 순서로 돌렸는지다. 세 검사의 순서를 여섯 가지로 모두 돌리자 구성 붕괴의 비율이 26.4%에서 76.4%까지 벌어졌고, 두 검사의 자리만 맞바꿔도 12개 모델 가운데 11개에서 가장 흔한 실패 유형이 다른 것으로 바뀌었다.

그렇다고 이유를 가려내는 일 자체가 안 되는 것은 아니다. 원어민 두 사람 사이의 일치도는 0.659로 멀쩡했고, 심판 모델을 그대로 둔 채 사람 채점자가 쓰던 판정 지침만 넣었더니 0.147이던 값이 0.636으로 올라갔다. 어긋나 있던 쪽은 모델의 능력이 아니라 모델이 받은 지시문이었다. 남은 격차의 상당 부분도 벵골어와 중국어 번역에서 수식어 한 구절이 빠져 아무도 맞을 수 없게 된 문항에서 나왔다.

검사 순서를 밝히지 않은 실패 유형 비율표로는 모델 둘을 견주기 어렵다. 순서를 한 번 뒤집으면 두 모델의 숫자가 같이 움직이고, 그 폭이 모델 사이의 차이보다 클 수 있기 때문이다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 판정 기준과 함께 진단한다. 라벨이 하나로 좁혀지는 자리에 어떤 규칙이 서 있었는지는 보고서에 거의 적히지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #LLM실패분류 #평가데이터 #LLM심판 #mGSMSymbolic #ClaudeSonnet5 #arXiv

---

## LinkedIn (EN)

Two graders agreed almost perfectly that a model had failed. Asked to say why it failed, they stopped agreeing.

Madhu Sudhan Rao Beesetty of PayPal re-examined 2,316 graded records drawn from twelve models across eleven languages, in work accepted at IEEE CogMI 2026. On whether the answer was right, the judge model and the native speakers reached Cohen's kappa 0.932. Ask only whether the same transcript deserves the label Compositional Collapse and the figure drops to 0.093, which is the distance between chance and near-total agreement.

The classifier is shakier still. Half of all failures carry evidence for more than one category, so the label is decided less by the case than by the order the tests ran in. Across all six orderings of three tests, Compositional Collapse's share of failures runs from 26.4% to 76.4%, and for eleven of the twelve models it took only one swap of two tests to install a different failure type at the top.

None of which means the reason cannot be sorted out. Two native speakers agreed with each other at 0.659, and leaving the judge model untouched while pasting in the grading sheet the human raters had been using lifted 0.147 to 0.636. What had been pointing the wrong way was the prompt, not the model's capability. Much of the remaining gap traced to one word problem whose Bengali and Chinese translations dropped a modifying clause, leaving an item nobody could answer correctly.

A table of failure-type shares that does not state its test order is a weak basis for comparing two models. Reverse the order once and both figures travel together, sometimes farther than the gap that separated them. Pebblous grades AI training data on named criteria with DataClinic. The rule standing at the point where a label narrows to one is the part that rarely makes it into the report.

▶ Read: https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #LLMFailureTaxonomy #EvaluationData #LLMasaJudge #mGSMSymbolic #ClaudeSonnet5 #arXiv

---

## Twitter/X (KO)

모델이 틀렸는지에 대한 채점자 간 일치도는 카파 0.932였다. 왜 틀렸는지를 고르자 0.093으로 떨어졌다.

더 흔들린 쪽은 분류기다. 실패 유형을 검사하는 순서만 바꿔도 한 유형의 비율이 26.4%와 76.4% 사이를 오간다.

https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/ko/

#페블러스 #데이터품질 #LLM실패분류 #mGSMSymbolic

---

## Twitter/X (EN)

Graders agreed on whether a model got the answer wrong at kappa 0.932. Asked why it was wrong, they fell to 0.093.

Reordering the tests that assign a failure type swings one type's share between 26.4% and 76.4%, with nothing else changed.

The fix was not a bigger model. It was giving the judge the same instruction sheet the people had.

https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/en/

#Pebblous #DataQuality #LLMFailureTaxonomy #mGSMSymbolic

---

## Facebook (KO)

라벨링 양식을 채우다 보면 손이 가장 오래 멈추는 자리가 있습니다.

맞았는지 틀렸는지를 고르는 칸은 금방 지나갑니다. 그다음에 왜 틀렸는지를 네 개 가운데 하나로 고르라는 칸이 나옵니다.

페이팔의 비세티가 그 두 칸을 따로 재어 보았습니다. 열한 개 언어의 원어민들이 전사 179건을 직접 읽고, 심판 역할을 맡은 모델과 같은 판정을 내려 보게 한 것입니다.

앞 칸의 일치도는 0.932, 뒤 칸은 0.093이었습니다. 같은 사람들이 같은 자료를 읽었는데 그렇습니다.

이 격차의 이유는 더 뒤에 적혀 있었습니다.

실패 사례의 절반이 두 유형의 근거를 한꺼번에 들고 있었습니다. 조건을 스스로 적어 놓고 버린 흔적과, 중간 한 단계가 어긋나 뒤로 번진 흔적이 한 풀이 안에 같이 남아 있는 겁니다.

그러면 최종 라벨을 정하는 것은 사례가 아닙니다. 검사 줄의 맨 앞에 무엇을 세웠는지가 정합니다.

네 개 가운데 하나를 고르게 하는 양식은 그 넷이 서로 겹치지 않는다고 가정합니다.

저자가 순서를 여섯 가지로 모두 돌려 보니, 한 유형의 비율이 26.4%에서 76.4%까지 움직였습니다. 바뀐 것은 순서뿐입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 채워진 라벨은 그 라벨이 어떤 규칙을 거쳐 하나가 됐는지까지 말해 주지 않습니다. 두 항목에 똑같이 해당했던 사례도 표에서는 한 항목에만 앉아 있습니다.

"우리 라벨 규정집에는, 한 사례가 두 항목에 다 걸릴 때 무엇을 먼저 적을지가 쓰여 있습니까?"

양식을 만들 때 항목을 어떤 차례로 늘어놓을지는 거의 고민 없이 정해집니다. 집계가 끝난 표에서 그 차례는 모델의 성격처럼 읽힙니다.

https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/ko/

#페블러스 #데이터클리닉 #데이터품질 #LLM실패분류 #평가데이터 #arXiv

---

## Facebook (EN)

There is one box on a labeling form that always slows the hand down.

Right or wrong goes quickly. Then comes the box that asks, so why was it wrong, and offers four categories to choose from.

Beesetty of PayPal measured those two boxes separately. He had native speakers in all eleven languages work through 179 transcripts by hand, ruling on the same two questions a judge model had already ruled on.

On the first box the two sides agreed at 0.932. On the second, 0.093. Same people, same transcripts.

The reason for that gap sits further down the paper.

Half the failures carried evidence for two categories at once. One piece of work can hold both traces: a condition the model set out and then abandoned, and a middle step that slipped and pulled everything after it off course.

When that happens the case is not what decides the label. What decides it is whatever was placed at the front of the queue of tests.

A form that asks you to pick one of four is assuming the four do not overlap.

Running all six orderings, the author watched one category's share travel from 26.4% to 76.4%. Nothing moved except the order.

Pebblous runs DataClinic over the label columns of AI training data. A label that is filled in does not say which rule narrowed it to one. A case that qualified for two categories still sits in the table under a single heading.

"In our own labeling rules, is it written anywhere which category comes first when a case qualifies for two?"

The order the categories are listed in gets settled almost without discussion while the form is being drawn up. In the finished tally, that order reads as a trait of the model.

https://blog.pebblous.ai/blog/llm-failure-taxonomy-order-dependence/en/

#Pebblous #DataClinic #DataQuality #LLMFailureTaxonomy #EvaluationData #arXiv
