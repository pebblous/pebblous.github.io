# SNS 홍보 글: 규정이 바뀐 뒤 다시 본 라벨은 전체의 14.7%였다

> 소스: blog/rule-revision-provenance-relabeling/
> 생성일: 2026-08-27
> URL: https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사기 판정 기준이 상위 25%에서 상위 40%로 내려가면, 결제 로그의 과거 거래는 한 글자도 바뀌지 않은 채 붙어 있던 라벨만 근거를 잃습니다.

이달 arXiv에 올라온 논문 한 편은 이때 다시 봐야 할 자리를 데이터 계보에서 좁혔습니다. 개정된 조건이 어느 기록의 라벨 근거였는지를 되짚어 과거 데이터의 14.7%만 다시 평가했고, 정확도 92.3%를 얻었습니다. 전부 다시 라벨링하고 다시 학습시킨 기준선이 92.8%입니다.

평균 갱신 시간은 993초에서 179초로 내려갔습니다. 후보를 좁힌 몫과 모델을 처음부터 다시 학습시키지 않은 몫이 절감분을 대략 절반씩 나눠 가졌습니다.

같은 예산을 다르게 쓰면 어떻게 되는지도 함께 재 놨습니다. 과거 데이터의 14.7%를 무작위로 골라 다시 보면 실제로 라벨이 바뀐 기록의 71.1%를 건집니다.

모델이 불확실해하는 순서로 고르면 79.0%, 계보로 고르면 94.6%입니다. 다시 본 양은 셋 다 같습니다.

그림자도 저자가 직접 그었습니다. 개정의 영향 범위가 전체의 90%에 이르면 절감은 사라지고 완전 재계산과 비슷해집니다. 확보 가능한 계보가 40%까지 줄어든 지점에서는 회수율이 82.9%로 내려갑니다.

페블러스가 데이터 품질 현장에서 자주 만나는 공백도 여기에 가깝습니다. 값이 맞는지를 재는 지표는 대체로 갖춰져 있는데, 그 값을 해석한 정의가 언제 어떻게 바뀌었는지는 어디에도 적혀 있지 않습니다.

이 논문의 절감분은 전부 하나의 전제 위에 서 있습니다. 어떤 라벨이 어떤 조건을 근거로 매겨졌는지가 기록으로 남아 있어야 한다는 것입니다.

▶ 전문: https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터거버넌스 #데이터프로버넌스 #개념드리프트 #AIReadyData #RuleShiftBench #arXiv

---

## LinkedIn (EN)

Drop an in-house fraud threshold from the top 25 percent of amounts to the top 40 percent, and every past transaction in the log stays exactly as recorded while the labels attached to them quietly lose their basis.

A paper posted to arXiv this month narrows the part of that history worth reopening. Tracing the revised conditions back through data lineage to the records whose labels rested on them, it reevaluated 14.7 percent of the historical collection and reached 92.3 percent accuracy. Relabeling everything and retraining from scratch reached 92.8.

Average update latency fell from 993 seconds to 179. Roughly half of that came from narrowing the candidate set and half from repairing the deployed model instead of retraining it.

The paper also fixed the budget and varied only the selection rule. Reexamine a random 14.7 percent and you recover 71.1 percent of the records whose labels actually changed.

Order the same share by model uncertainty and you recover 79.0. Pick it by lineage and you recover 94.6.

The author draws the limits himself. Once a revision touches 90 percent of the collection, the saving disappears and an update costs about what full recomputation costs. Where only 40 percent of the lineage survives, recall on affected records falls to 82.9 percent.

The gap we keep meeting in data quality work at Pebblous looks much like this. Teams have metrics for whether a value is correct. Almost none have a record of when the definition used to interpret that value last moved.

Every saving in this paper rests on one precondition: that the reason a label was assigned, and the condition it rested on, was written down at the time.

▶ Read: https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataGovernance #DataProvenance #ConceptDrift #AIReadyData #RuleShiftBench #arXiv

---

## Twitter/X (KO)

규정이 개정되면 저장된 데이터는 그대로인데 라벨만 낡습니다. 개정된 조건을 데이터 계보로 되짚은 arXiv 논문은 과거 데이터의 14.7%만 다시 평가하고 전체 재라벨링과 0.5%p 차이의 정확도를 얻었습니다.

같은 예산이라도 어디를 다시 볼지 아는 쪽이 더 많이 계산하는 쪽을 앞섰습니다.

https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/ko/

#페블러스 #데이터품질 #데이터프로버넌스 #arXiv

---

## Twitter/X (EN)

When a rule is revised, the stored data holds still and only the labels go stale. A new arXiv paper traced the revised conditions back through lineage, reopened 14.7 percent of the history, and landed within 0.5 points of relabeling everything.

Knowing where to look beat computing more.

https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/en/

#Pebblous #DataQuality #DataProvenance #arXiv

---

## Facebook (KO)

기준이 바뀌었다는 공지 메일 한 통이 데이터 팀에 도착합니다.

바뀐 것은 문장 하나입니다. 사기 위험으로 보는 금액이 상위 25%에서 상위 40%로.

그런데 그 문장이 지난 몇 년치 라벨의 근거를 한꺼번에 흔듭니다. 저장된 거래는 금액도 시각도 상대 계좌도 기록된 그대로인데 정답만 달라집니다.

이 상황을 '규칙이 부른 개념 이동'이라고 이름 붙인 논문이 며칠 전 arXiv에 올라왔습니다. 모로코 모하메드 1대학의 Ismail Lamaakal이 쓴 글입니다.

저자가 붙잡은 질문은 이것이었습니다.

"무엇을 다시 매기고, 무엇을 그대로 남길 것인가?"

답은 데이터 안이 아니라 데이터 옆에 있었습니다. 어떤 조건이 이 라벨을 만들었는지가 계보로 남아 있으면, 개정분이 닿을 수 있는 자리와 닿을 수 없는 자리를 갈라낼 수 있습니다. 실험에서 다시 본 것은 과거 데이터의 14.7%였고, 정확도는 전부 다시 라벨링한 경우와 사실상 같았습니다.

가장 오래 남은 대목은 규칙이 되돌아오는 실험이었습니다. 완화했던 기준을 사고 한 번에 되돌리고, 한시 조치가 끝나면 이전 정의로 복귀하는 일이 실무에서는 흔하니까요. 예전 규칙을 쓰던 시절의 조건과 모델 상태를 그대로 보관해 둔 쪽은, 규칙이 돌아올 때마다 그 기록을 꺼내 썼습니다. 이력 없이 처음부터 다시 학습한 쪽은 998초를 쓰고도 복귀 시점 정확도가 비교한 네 방식 가운데 가장 낮았습니다. 가장 많이 계산한 쪽이 가장 못 회복한 셈입니다.

페블러스가 데이터 품질을 진단하며 자주 확인하는 것도 값의 정확성입니다. 그런데 자산의 수명을 정하는 쪽은 값만이 아닙니다. 그 값을 해석하는 정의가 언제 바뀌느냐가 함께 정합니다. 값이 맞는지를 묻는 칸은 대부분의 조직에 있는데, 그 값을 해석한 정의가 언제 어떻게 바뀌었는지를 적는 칸은 아직 잘 보이지 않습니다.

라벨 옆에 그 라벨의 근거를 한 줄 남기는 일. 지금은 아무 쓸모가 없어 보이고, 규정이 개정되는 날에만 값이 매겨지는 기록입니다.

▸ https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/ko/

#페블러스 #데이터품질 #데이터프로버넌스 #데이터거버넌스 #개념드리프트 #DataClinic

---

## Facebook (EN)

An email lands in the data team's inbox saying the criteria have been updated.

One sentence changed. The amount that counts as fraud risk moves from the top 25 percent to the top 40.

And that sentence unsettles the basis of several years of labels at once. The stored transactions are untouched, amount and timestamp and counterparty exactly as recorded, and only their correct answers have moved.

A paper posted to arXiv a few days ago gives this situation a name: rule-induced concept shift. It was written by Ismail Lamaakal of Mohammed Premier University in Morocco.

The question he holds onto is this one.

"What has to be reassigned, and what can stand?"

The answer sat beside the data rather than inside it. If the condition that produced a label was recorded as lineage, you can separate the places a revision can reach from the places it cannot. In his experiments, 14.7 percent of the history was reopened, and the accuracy came out level with relabeling all of it.

What stayed with me longest was the experiment on rules that come back. Loosened thresholds get reversed after a single incident, and temporary measures expire and return the old definition, which is ordinary enough in practice. The setup that had kept the conditions and the model state from the era of the old rule simply retrieved them each time the rule returned. The setup with no history retrained from scratch, spent 998 seconds doing it, and recovered the least. The one that computed the most recovered the worst.

Correctness of values is also what we check for when we diagnose data quality at Pebblous. But the lifespan of a data asset is not set by the values alone. It is set alongside them by when the definition that interprets those values changes. Most organizations have a field for whether a value is right. A field for when the definition behind it last moved is still hard to find.

Writing one line beside a label about why it was assigned. It looks useless today, and it is priced only on the day the rule is revised.

▸ https://blog.pebblous.ai/blog/rule-revision-provenance-relabeling/en/

#Pebblous #DataQuality #DataProvenance #DataGovernance #ConceptDrift #DataClinic
