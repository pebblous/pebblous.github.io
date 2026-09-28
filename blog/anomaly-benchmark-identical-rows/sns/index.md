# SNS 홍보 글: 이상 징후 찾는 AI의 시험지, 같은 줄에 정답이 둘

> 소스: blog/anomaly-benchmark-identical-rows/ko/index.html
> 생성일: 2026-09-28
> URL: https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

이상 탐지 연구가 성적을 견줄 때 쓰는 공개 데이터셋 690개를 한 줄씩 맞대어 보니, 147개에서 값이 한 칸도 다르지 않은 두 줄에 정상과 이상이 각각 붙어 있었다.

8월 말 프리프린트로 공개된 논문 한 편이 이상 탐지 벤치마크 모음 OddBench를 행 단위로 전수 대조한 결과다. 유사도가 아니라 완전 일치만 셌다. 절반이 넘는 355개에서 학습용 데이터와 시험용 데이터에 똑같은 행이 함께 들어 있었고, 137개에서는 시험이 이상이라고 채점하는 행이 학습 때 정상이라고 가르친 행과 한 글자도 다르지 않았다. 마지막 경우는 채점 자체가 성립하지 않는다. 배운 대로 답하면 오답 처리되고, 정답 처리되려면 배운 것과 어긋나게 답해야 한다.

그런데 저자는 이것을 곧바로 오류라 부르지 않는다. 어떤 거래 기록이 표 안에 500번 들어 있다고 하자. 조인을 잘못 걸어 한 건이 복사된 것일 수도, 같은 요청을 되풀이한 공격의 흔적일 수도 있다. 식별자를 지운 탓에 서로 다른 500건이 똑같아 보이게 된 것일 수도, 그냥 500번 일어난 정상 거래일 수도 있다. 네 경우가 요구하는 처리는 정반대인데, 표에 적힌 것은 값과 그것이 몇 번 나왔는지뿐이다. 논문은 관측 횟수가 노출과 빈도와 복제의 곱이라는 점을 들어, 뒤의 둘을 표만 보고 갈라낼 수 없음을 증명한다.

뜻을 정하지 않은 채로도 채점은 진행된다. 고전적 탐지기 네 종류를 이 데이터셋 전부에 걸어, 한 행을 한 표로 세는 방식과 고유한 값마다 한 표만 주는 방식을 나란히 재 봤다. 모델도 데이터도 그대로인데 AUROC이 0.05 넘게 움직인 경우가 탐지기마다 50개에서 61개 사이였다.

평균만 보면 아무 일도 없다. 두 방식의 평균 차이는 0.0054에서 0.0112 사이에 머물고, 순위 상관도 0.929로 대체로 같은 방향을 가리킨다.

그 평균 아래에서 64개 데이터셋의 줄 세우기가 달라졌고, 그중 30개에서는 1등 탐지기가 바뀌었다.

겹침이 점수를 부풀렸다는 이야기는 아니다. 아이솔레이션 포레스트를 걸었을 때 충돌이 잦은 데이터셋일수록 발표된 AUROC은 오히려 낮았고, 저자는 이것을 연관일 뿐 인과가 아니라고 못 박는다. 감사가 잡아낸 것도 값이 완전히 같은 경우뿐이라, 오타 한 글자나 반올림 자리가 다른 근사 중복은 이 방법으로 보이지 않는다.

그래서 논문의 결론은 중복을 지우라는 지시가 아니다. 먼저 정할 것은 이 표에서 무엇을 한 번으로 셀 것인가이고, 지울지 살릴지는 그다음 선택이다.

▶ 전문: https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #OddBench #이상탐지 #데이터중복 #AUROC #머신러닝평가 #AIReadyData

---

## LinkedIn (EN)

An exact-row audit of the 690 public datasets that anomaly detection research uses to compare methods found 147 in which two rows that do not differ in a single cell carry opposite labels, one normal and one anomalous.

The audit, released as a preprint in late August, went through OddBench row by row and counted only exact matches, not similarity. In more than half of the collection, 355 datasets, the same row appears in both the training and the test set. In 137 the row that the test set scores as anomalous is character-for-character the row the training set taught as normal. That last case breaks the grading. Answer as the model was taught and it is marked wrong; be marked right and the model has answered against what it learned.

The author does not call any of this an error. Suppose one transaction record sits in a table 500 times. A bad join may have copied it, an attacker may have sent the same request over and over, dropping the entity id and timestamp may have collapsed 500 distinct events into one shape, or the business may simply have done it 500 times. The four cases demand opposite handling, and all the table records is the value and how often it appears. The paper writes the expected count as exposure times frequency times replication and proves the last two cannot be separated from the table alone.

Scoring proceeds without settling the question. Four classical detectors were run across the whole collection under two weightings, one vote per row against one vote per distinct value. With the model and the data untouched, AUROC moved by more than 0.05 on somewhere between 50 and 61 datasets per detector.

Averages show nothing. The mean gap between the two weightings runs from 0.0054 to 0.0112, and the rank correlation is 0.929.

Underneath that average, 64 datasets reorder their detectors and 30 of them change which detector comes first.

None of this says the overlap inflates scores. Datasets with more label conflicts reported lower AUROC under isolation forest, and the author records that as association, not causation. The audit also sees exact duplicates only, so a single typo or a different rounding digit stays invisible to it.

The paper therefore does not tell anyone to delete duplicates. What comes first is deciding what counts as one observation in a given table. Keep or drop is the choice after that.

▶ Read: https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #OddBench #AnomalyDetection #DuplicateRows #AUROC #MLEvaluation #AIReadyData

---

## Twitter/X (KO)

이상 탐지 연구가 쓰는 공개 데이터셋 690개를 한 줄씩 맞대어 보니, 147개에서 값이 한 칸도 다르지 않은 두 줄에 정상과 이상이 각각 붙어 있었다.

어떤 모델도 그 둘을 구별할 수 없다. 입력이 같으면 출력도 같고, 둘 중 하나는 반드시 틀린다.

▶ https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/ko/

#페블러스 #데이터품질 #OddBench #이상탐지

---

## Twitter/X (EN)

An exact-row audit of the 690 public datasets anomaly detection research runs on found 147 where two rows identical in every cell carry opposite labels.

No model can tell them apart. Same input, same output, and one of the two is always wrong.

▶ https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/en/

#Pebblous #DataQuality #OddBench #AnomalyDetection

---

## Facebook (KO)

중복 제거. 데이터를 손볼 때 제가 가장 먼저 눌러 온 버튼입니다.

같은 줄이 여러 번 들어 있으면 하나만 남기고 지웠습니다. 표가 깨끗해지니까요.

8월 말 공개된 논문 한 편이 그 버튼 앞에 물음표를 세웠습니다.

이상 탐지 연구자들이 새 방법의 성적을 견줄 때 쓰는 공개 데이터셋 690개를, 저자는 한 줄씩 전부 맞대어 봤습니다. 유사도가 아니라 값이 한 칸도 다르지 않은 완전 일치만 셌습니다.

355개에서 학습용 데이터와 시험용 데이터에 똑같은 행이 함께 들어 있었습니다.

147개에서는 한 칸도 다르지 않은 두 행에 정상과 이상이 각각 붙어 있었습니다.

여기까지는 벤치마크를 만든 쪽의 부주의처럼 읽힙니다. 저자는 그 길로 가지 않습니다.

어떤 거래 기록 하나가 표 안에 500번 들어 있다고 해 봅니다.

조인을 잘못 걸어 한 건이 500번 복사됐을 수 있습니다. 같은 요청을 되풀이해 보낸 공격의 흔적일 수도 있습니다. 개체 번호와 시각을 지운 탓에 서로 다른 500건이 똑같아 보이게 된 것일 수도 있습니다. 그리고 그냥 500번 일어난 정상 거래일 수도 있습니다.

네 경우가 요구하는 처리는 정반대입니다. 공격이라면 반복 그 자체가 가장 강한 신호이고, 조인 사고라면 지워야 할 잡음이며, 식별자를 지운 탓이라면 500건은 줄이는 순간 정보가 사라집니다.

그런데 표에 적힌 것은 값과 그것이 몇 번 나왔는지뿐입니다.

논문은 이 곤란을 증명으로 못 박습니다. 어떤 값이 평균 몇 번 관측되는지는 얼마나 오래 지켜봤는가와, 업무상 원래 얼마나 자주 일어나는가와, 데이터를 만드는 과정이 몇 배로 부풀렸는가의 곱입니다. 뒤의 둘 가운데 한쪽에 어떤 수를 곱하고 다른 쪽을 그만큼 나누면 곱은 그대로입니다. 저자는 이것을 빈도 원인의 비식별성이라 부릅니다.

관측된 값이 아무리 많아도 두 몫은 갈라지지 않습니다.

뜻이 정해지지 않은 채로도 채점은 진행됩니다. 이 논문의 실험에서 모델도 데이터도 하나 바뀌지 않았는데, 690개 가운데 30개에서 1등 탐지기가 바뀌었습니다. 달라진 것은 채점할 때 무엇을 한 표로 세느냐뿐이었습니다.

"같은 값이 세 줄 있으면, 이 표에서 그것은 몇 건입니까?"

표가 다 만들어진 뒤에는 아무리 오래 들여다봐도 이 물음의 답이 나오지 않습니다. 답은 만들어지는 자리에 있었습니다. 어떤 조인을 걸었는지, 어느 칸을 개인정보 때문에 지웠는지, 집계 창을 어떻게 잡았는지가 기록으로 남아 있으면 중복의 뜻이 정해지고, 남아 있지 않으면 끝내 알 수 없습니다.

페블러스가 데이터를 진단할 때 값의 정합성보다 그 값이 거쳐 온 경로를 먼저 묻는 것도 같은 이유입니다. 출처 이력과 개체 식별자를 남기는 일은 서류 작업이 아니라, 나중에 쓸 수 있는 유일한 열쇠입니다.

그러니 제가 눌러 온 버튼은 판단이 아니라 선언이었습니다. 이 표의 한 줄은 한 건이다, 라고 먼저 정하고 나서야 지울지 살릴지를 고를 수 있는데, 저는 그 선언을 건너뛰고 지워 왔습니다.

세어 보는 일 자체는 하루면 됩니다. 저희가 쓰는 평가 데이터부터 열어 보려 합니다.

▶ 전문: https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/ko/

#페블러스 #이상탐지 #데이터중복 #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Deduplicate. For a long time that has been the first thing I do when a table reaches me.

If the same row shows up four times, keep one and drop three. The table gets cleaner.

A paper released in late August put a question mark in front of that habit.

The author took the 690 public datasets that anomaly detection researchers use to compare new methods, and went through every one of them row by row. Not similarity, not near matches. Only rows identical in every single cell.

In 355 of them, the same row sits in both the training set and the test set.

In 147, two rows that do not differ in a single cell are labeled normal and anomalous.

Up to here it reads like carelessness on the part of whoever assembled the benchmarks. The author does not go that way.

Say one transaction record sits in a table 500 times.

A bad join may have copied one event 500 times. It may be the trace of an attacker sending the same request over and over. Dropping the entity id and the timestamp may have made 500 distinct events look alike. Or the business may simply have done it 500 times.

The four cases demand opposite handling. If it is an attack, the repetition itself is the strongest signal. If it is a join accident, the repetition is noise to be cleared. If the identifiers were stripped, collapsing the 500 destroys information.

And all the table records is the value and how many times it appears.

The paper settles this with a proof. How often a value is observed on average is exposure times business frequency times how much the data-generating process replicated it. Multiply one of the last two by any number and divide the other by the same, and the product does not move. The author calls this the non-identifiability of frequency.

However many observations you have, the two shares will not come apart.

Scoring goes ahead without the question being settled. In this paper's experiment nothing about the model or the data changed, and on 30 of the 690 datasets a different detector came first. All that changed was what counts as one vote.

"If the same values sit on three rows, how many events is that, in this table?"

Once the table is finished, no amount of staring at it produces the answer. The answer was back where the table was made. Which join was run, which column was stripped for privacy, how the aggregation window was drawn. If that is on record, the meaning of a duplicate is settled. If it is not, it stays unknown.

At Pebblous we ask where a value travelled from before we ask whether it is internally consistent, for the same reason. Keeping provenance and entity identifiers is not paperwork. It is the only key that still opens anything later.

So the button I have been pressing was never a judgment. It was a declaration. One row in this table is one event, someone has to say that first, and only then can you choose to keep or to drop. I was skipping the declaration and deleting.

The counting itself is a day of work. I am going to open our own evaluation tables first.

▶ Full piece: https://blog.pebblous.ai/blog/anomaly-benchmark-identical-rows/en/

#Pebblous #AnomalyDetection #DuplicateRows #DataQuality #DataClinic #AIReadyData
