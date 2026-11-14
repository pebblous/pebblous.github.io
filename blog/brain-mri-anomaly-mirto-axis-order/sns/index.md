# SNS 홍보 글: 뇌 MRI 이상 탐지 AI, 축 순서 하나가 점수를 가른다

> 소스: blog/brain-mri-anomaly-mirto-axis-order/ko/index.html
> 생성일: 2026-10-05
> URL: https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

모델도 가중치도 시험 데이터도 그대로인데, 저장된 이상 지도를 읽는 축 순서 하나가 어긋나자 점수가 0.873에서 0.583으로 내려갔다.

10월 1일 arXiv에 올라온 논문의 사례다. 저자들은 뇌 MRI 비지도 이상 탐지 모델을 채점하는 절차 자체를 MIRTO라는 평가 방법으로 다시 짰다. 건강한 뇌 영상만 보고 학습한 모델 넷을 BraTS 2020 환자 312명으로 시험했는데, 방법마다 축 순서와 잘라 낸 시야와 해상도가 제각각이라 채점 전에 그 선택들을 되돌려야 한다. 되돌리기가 조용히 틀린 것이다.

이 사례가 읽을 만한 이유는 사고가 나타나지 않은 자리에 있다. 같은 사고에서, 흔히 보고되는 장 단위 요약 점수는 0.112밖에 움직이지 않았다. 단면 하나를 그 안의 가장 높은 값 하나로 대표하기 때문에, 칸마다의 좌표가 전부 어긋나도 어느 단면이 수상한지는 상당 부분 남는다. 세밀한 점수는 무너지는데 요약된 점수는 멀쩡해 보인다.

사고를 잡아낸 것은 정답 라벨을 쓰지 않는 진단이었다. 환자를 한 사람씩 떼어 점수를 매기자 24%가 동전 던지기보다 못한 쪽에 있었다. 같은 종류의 사고는 저자들이 이 벤치마크를 조립하는 동안 한 번 더 일어났다.

평가 절차는 모델을 재는 중립적인 잣대가 아니라 그 자체로 데이터를 가공하는 공정이다. 페블러스가 데이터 품질을 볼 때 되묻는 물음도 같은 자리에 있다. 지금 보고받은 이 숫자는 모델의 실력을 재고 있는가, 그 실력을 재려고 깔아 둔 약속들을 재고 있는가.

▶ 전문: https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #뇌MRI #이상탐지 #MIRTO #arXiv #AI평가 #AIReadyData

---

## LinkedIn (EN)

A score fell from 0.873 to 0.583. The model, the weights and the test data were all untouched. What changed was the axis order in which the scoring code read the anomaly map the model had saved.

The case comes from a paper posted to arXiv on October 1, proposing an evaluation protocol the authors call MIRTO for unsupervised anomaly segmentation in brain MRI. Four models trained on healthy brain scans alone were tested on 312 BraTS 2020 subjects. Each method stores its anomaly map in its own axis order, its own crop and its own resolution, so every comparison has to undo those choices before scoring. The undoing went wrong quietly.

What makes the case worth reading is where the accident failed to show. The slice-level score, the one usually reported, moved by 0.112. A slice is represented by the single highest anomaly value inside it, so even when every voxel coordinate is displaced, much of which slice looks suspicious survives. The fine-grained score collapses while the summary score still looks healthy.

What caught it used no ground truth at all. Scoring subjects one at a time put 24 percent of them below 0.5, worse than a coin flip. The same class of accident then struck a second time, to the authors themselves, while they were assembling the benchmark.

An evaluation procedure is not a neutral ruler held up against a model. It is itself a pipeline that processes data, and pipelines acquire defects. The question Pebblous keeps returning to in its data quality work sits in the same place: is the number you were just handed measuring the model, or the conventions laid down to measure it?

▶ Read: https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #BrainMRI #AnomalyDetection #MIRTO #arXiv #AIEvaluation #AIReadyData

---

## Twitter/X (KO)

뇌 MRI 이상 탐지 모델의 점수가 0.873에서 0.583으로 내려갔다. 모델도 데이터도 그대로다. 저장된 이상 지도를 읽는 축 순서 하나가 어긋났을 뿐이다.

요약 점수는 거의 움직이지 않아 아무도 눈치채지 못했다. 사고를 잡은 것은 환자를 한 사람씩 떼어 다시 센 진단이었다.

▶ https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/ko/

#페블러스 #뇌MRI #AI평가 #데이터품질

---

## Twitter/X (EN)

A brain MRI anomaly detection model scored 0.873 one way and 0.583 the other. Same model, same data. The only difference was the axis order the scoring code used to read its map.

The summary score barely moved, so nobody noticed. What caught it was scoring subjects one at a time.

▶ https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/en/

#Pebblous #BrainMRI #AIEvaluation #DataQuality

---

## Facebook (KO)

성능 숫자 하나를 받아 드는 자리를 떠올려 봅니다.

0.87. 보고서에 적힌 그 한 줄을 보고 회의는 다음 안건으로 넘어갑니다.

그 자리에 0.58이 적혀 있었어도 회의는 똑같이 넘어갔을 것입니다. 조금 아쉬운 모델이구나, 하고.

10월 1일 arXiv에 올라온 논문에 그 두 숫자가 나란히 나옵니다. 0.873과 0.583. 같은 모델, 같은 가중치, 같은 환자들입니다.

달랐던 것은 모델이 그린 이상 지도를 채점표가 어떤 축 순서로 읽었는가, 그 하나뿐이었습니다.

축 순서는 이런 것입니다. 3차원 뇌 영상은 숫자 덩어리로 저장되고, 어느 방향을 첫 번째 축으로 적어 두었는지는 파일 바깥의 약속으로만 전해집니다. 그 약속이 어긋나면 왼쪽 앞의 신호가 오른쪽 위로 가서 앉습니다.

모델은 종양을 제자리에 짚었습니다. 채점표가 다른 자리를 보고 있었을 뿐입니다.

정작 서늘했던 것은 떨어진 숫자가 아니었습니다.

같은 사고에서, 단면 단위로 요약한 점수는 거의 움직이지 않았습니다.

단면 하나를 그 안의 가장 높은 값 하나로 대표하기 때문입니다. 칸마다의 좌표가 전부 어긋나도, 어느 단면이 수상한지는 상당 부분 남습니다. 그래서 세밀한 점수는 무너지는데 요약된 점수는 멀쩡해 보입니다.

사고를 가려 준 것은 거짓말이 아니라 집계였습니다.

이런 것을 '조용한 결함'이라 불러도 좋겠습니다. 경고를 띄우지 않고 숫자만 조금 낮아지는 종류의 결함 말입니다.

결국 그 사고를 잡아낸 것은 더 똑똑한 지표가 아니었습니다. 평균을 흩어서 환자를 한 사람씩 다시 세어 본 일이었습니다. 그렇게 세어 보니 네 명 중 한 명이 뒤집혀 있었습니다.

그리고 같은 종류의 사고는, 이 벤치마크를 만들던 저자들 자신에게 한 번 더 일어났습니다. 주의를 기울이지 않아서가 아니라, 방법마다 자기 약속으로 지도를 저장하는 한 되돌려야 할 변환이 매번 새로 생기기 때문입니다.

"지금 보고받은 이 숫자는 모델의 실력을 재고 있습니까, 그 실력을 재려고 깔아 둔 약속들을 재고 있습니까?"

페블러스가 데이터 품질을 볼 때 되묻는 물음도 여기에 있습니다. 결측률도 중복률도 기준을 넘지 않는데 모델이 특정 구간에서만 틀린다면, 뭉쳐 둔 숫자를 흩어서 단위별로 다시 세어 봐야 할 때가 있습니다.

평가 절차는 모델을 재는 중립적인 잣대가 아니라, 그 자체로 데이터를 가공하는 공정입니다.

공정에는 품질 결함이 생깁니다. 다만 이 공정의 결함은 소리를 내지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/ko/

#페블러스 #뇌MRI #이상탐지 #MIRTO #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Picture the moment a performance number is handed to you.

0.87. One line in a report, and the meeting moves on to the next item.

Had 0.58 been printed in that same line, the meeting would have moved on just the same. A slightly disappointing model, we would have said.

A paper posted to arXiv on October 1 sets those two numbers side by side. 0.873 and 0.583. Same model, same weights, same subjects.

The one thing that differed was the axis order in which the scoring code read the anomaly map the model had drawn.

Axis order comes down to this. A 3D brain scan is stored as a block of numbers, and which direction was written down first is carried only by a convention living outside the file. Break that convention and a signal from the front left goes and sits at the top right.

The model had put the tumor in the right place. It was the score sheet that was looking somewhere else.

What chilled me was not the number that fell.

In that same accident, the score summarized slice by slice barely moved.

A slice is represented by the single highest anomaly value inside it. Even when every voxel coordinate is displaced, much of which slice looks suspicious survives. So the fine-grained score collapses while the summary score still looks healthy.

What covered the accident was not a lie. It was aggregation.

There is a name worth giving this: a "quiet defect." The kind that raises no alarm and only lets the number drift a little lower.

In the end, what caught it was not a smarter metric. It was breaking the average apart and scoring subjects one at a time. Counted that way, one in four had been read backwards.

And the same class of accident struck once more, this time against the authors building the benchmark. Not for want of care. As long as each method saves its map under its own convention, every comparison creates a fresh transform to undo.

"Is the number you were just handed measuring the model, or the conventions laid down to measure it?"

That is where the question Pebblous keeps returning to in its data quality work also sits. When the missing-value rate and the duplicate rate both stay under their thresholds and a model still fails in one particular range, there are times to break the aggregate apart and count again, unit by unit.

An evaluation procedure is not a neutral ruler held up against a model. It is itself a pipeline that processes data.

Pipelines acquire defects. This one just happens to acquire them without making a sound.

▶ Full piece: https://blog.pebblous.ai/blog/brain-mri-anomaly-mirto-axis-order/en/

#Pebblous #BrainMRI #AnomalyDetection #MIRTO #DataQuality #DataClinic #AIReadyData
