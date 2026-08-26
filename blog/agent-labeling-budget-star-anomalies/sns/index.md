# SNS 홍보 글: 변광성 37만 개에서 이상 천체 18개를 찾은 AI 라벨링 파이프라인

> 소스: blog/agent-labeling-budget-star-anomalies/ko/index.html
> 생성일: 2026-08-27
> URL: https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

변광성 37만 개에서 이상 천체를 골라낸 작업에서, 광도곡선을 한 장씩 채점한 것은 사람이 아니라 멀티모달 에이전트였습니다.

체코 카렐대와 오하이오주립대 연구진이 ASAS-SN 관측망의 주기 변광성 카탈로그에 붙인 파이프라인입니다. 에이전트가 실제로 라벨을 붙인 대상은 전체의 1%인 5,100개였고, 작업 전체가 세 시간과 40달러로 끝났습니다.

결과는 이상 천체 24개이고, 그중 18개는 지금까지 특이한 별로 보고된 적이 없습니다. 다만 발견 목록보다 실무에 가까운 것은 그 옆에 붙은 예산 계산입니다.

같은 예산을 초기 이상치 점수 순위대로만 썼다면 최종 카탈로그의 약 30%에서 바닥났고, 가장 낮게 랭크된 이상 천체까지 순서대로 내려가려면 예산이 70배 필요했습니다. 바뀐 것은 모델이 아니라 라벨을 붙이는 순서입니다.

한계도 같은 실험 안에 있습니다. 단일 에이전트가 표시한 276개를 독립된 다섯이 다시 보자 36%가 무관으로 내려갔지만, 이 합의검수는 처음부터 표시되지 않은 별을 되살리지 못합니다. 카탈로그 전체에서 끝내 놓친 것이 몇 개인지는 논문도 모른다고 적혀 있습니다.

라벨링 예산은 정확도의 가격이기도 하지만 탐색이 어디까지 닿을지를 정하는 설계 변수이기도 합니다. 페블러스가 DataClinic으로 학습 데이터를 진단할 때도 점수 이전에 무엇이 검수 대상으로 올라왔는지를 함께 봅니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #액티브러닝 #데이터라벨링 #이상탐지 #ASASSN #Gemini3

---

## LinkedIn (EN)

Multimodal agents, not human eyes, graded the light curves that turned up the anomalies in a catalog of 370,000 variable stars.

The pipeline comes from Milan Pešta at Charles University and Yuan-Sen Ting at Ohio State, applied to the periodic variables in the ASAS-SN Sky Patrol catalog. Agents labeled 5,100 sources, about 1 percent of the sample, and the whole run finished in roughly three hours for about $40.

It produced 24 anomalies, 18 of which had never been reported as unusual in the literature. The more useful number, though, sits beside that catalog.

Spending the same budget straight down the initial outlier ranking would have exhausted it at about 30 percent of the final result, and reaching the lowest-ranked anomaly in that order would have taken roughly 70 times the budget. What changed was not the model but the order in which the labels were spent.

The same run marks its own limits. Five independent agents re-scored the 276 sources a single agent had flagged and demoted 36 percent of them, but consensus cannot recover a star that was never flagged in the first place, and the authors say they do not know how many the pipeline missed.

A labeling budget buys accuracy, and it also fixes how far a search can reach. That is the order Pebblous works in when DataClinic profiles a training set: what entered review, before what the score says.

▶ Read: https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgents #ActiveLearning #DataLabeling #AnomalyDetection #ASASSN #Gemini3

---

## Twitter/X (KO)

변광성 카탈로그의 1%만 에이전트가 라벨링해 이상 천체를 찾아냈습니다. 같은 예산을 초기 이상치 순위대로만 썼다면 그 카탈로그의 30%에서 끝났을 계산입니다.

바뀐 것은 모델이 아니라 라벨을 붙이는 순서입니다.

https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/ko/

#페블러스 #데이터품질 #액티브러닝 #ASASSN

---

## Twitter/X (EN)

Agents labeled 1 percent of a variable star catalog and pulled the anomalies out of it. Spending the same budget straight down the initial outlier ranking would have stopped at 30 percent of that result.

The model did not change. The order of labeling did.

https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/en/

#Pebblous #DataQuality #ActiveLearning #ASASSN

---

## Facebook (KO)

검수 대기열은 위에서부터 내려가는 것이라고 오래 생각했습니다.

점수 높은 순으로 정렬해 두고, 예산이 닿는 데까지 보는 방식입니다.

이번 주에 읽은 천문학 논문 한 편이 그 습관을 흔들었습니다.

체코 카렐대와 오하이오주립대 연구진이 변광성 37만 개에서 이상한 별을 골라내는 일을 멀티모달 에이전트에게 맡겼습니다. 별 이름도 하늘의 좌표도 주지 않고, 광도곡선 그림 한 장씩만 보여 준 채로 말입니다. 에이전트가 실제로 들여다본 것은 전체의 1%였고, 그 안에서 이상 천체 24개가 나왔습니다. 그중 18개는 지금까지 아무도 특이하다고 적어 두지 않았던 별입니다.

정작 다시 읽은 대목은 발견 목록이 아니라 그 옆에 붙은 계산이었습니다. 같은 예산을 처음 매긴 이상치 점수 순위대로만 썼다면 최종 카탈로그의 30%에서 예산이 끝났으리라는 계산입니다. 가장 낮게 랭크된 별 하나는 35만 위 언저리에 놓여 있었습니다. 순서대로 내려가 그 별에 닿으려면 예산이 70배 있어야 했습니다.

모델도 임베딩도 그대로였습니다. 달라진 것은 '예산의 순서' 하나였습니다.

"우리 검수 대기열의 아래쪽에는 무엇이 놓여 있을까?"

논문이 열어 둔 자리가 하나 더 있습니다. 검수자가 사람이 아니라면 그 판정은 무엇으로 감사하느냐는 물음입니다. 저자들은 표시된 별마다 다섯 에이전트에게 다시 투표시키고 판정의 추론 과정을 통째로 남겨 뒀습니다. 그렇게 해도 처음부터 표시되지 않은 별은 되살릴 방법이 없다고 적었고, 37만 개 중 끝내 놓친 것이 몇 개인지는 자신들도 모른다고 덧붙였습니다.

페블러스가 데이터 품질을 진단하며 반복해 확인하는 것도 이 두 가지입니다. 어떤 데이터가 검수 대상으로 올라왔는가, 그리고 그 판정이 나중에 되짚어질 수 있는 형태로 남았는가.

기록이 남지 않은 판정은 감사할 수 없습니다. 대기열에 오르지 못한 데이터는 기록조차 남기지 않습니다.

https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/ko/

#페블러스 #데이터품질 #액티브러닝 #AI에이전트 #ASASSN #DataClinic

---

## Facebook (EN)

For a long time I treated a review queue as something you work from the top down.

Sort by score, then go as far as the budget allows.

A paper in astronomy this week unsettled that habit.

Researchers at Charles University and Ohio State handed the job of finding unusual stars in a catalog of 370,000 variables to multimodal agents. No star names, no coordinates, just one plotted light curve at a time. The agents looked at 1 percent of the catalog, and 24 anomalies came out of it. Eighteen of them had never been written down as unusual by anyone.

What I went back to was not the list of discoveries. It was the calculation printed next to it. Spend the same budget straight down the original outlier ranking, the authors show, and it runs out at about 30 percent of that final catalog. One of the anomalies sat near rank 350,000. Descending the list in order to reach that star would have taken about 70 times the budget.

The model did not change. The embeddings did not change. What changed was "the order of the budget."

"What is sitting at the bottom of our own review queue?"

The paper leaves a second question open. If the reviewer is an agent, what do you audit the verdict against? The authors had five agents vote again on every flagged object and preserved the full reasoning behind every vote. Even so, they write, consensus cannot bring back a star that was never flagged, and they do not know how many of the 370,000 the pipeline missed.

Those are the two things we keep returning to in data quality work at Pebblous. Which data made it into review, and whether the verdict was recorded in a form that can be traced later.

A verdict with no record cannot be audited. Data that never entered the queue leaves no record at all.

https://blog.pebblous.ai/blog/agent-labeling-budget-star-anomalies/en/

#Pebblous #DataQuality #ActiveLearning #AIAgents #ASASSN #DataClinic
