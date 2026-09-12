# SNS 홍보 글: 블루스카이 모더레이션이 유해 게시물 열에 둘만 잡았다

> 소스: report/bluesky-moderation-audit-2026-09/
> 생성일: 2026-09-12
> URL(KO): https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/ko/
> URL(EN): https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

연구진 여덟 명이 블루스카이가 2025년 한 해 동안 붙인 라벨 1,060만 건을 플랫폼 바깥에서 감사했다. 운영 회사 밖에서 모더레이션 성능을 잰 첫 사례다.

붙은 라벨만 검사하면 시스템은 잘하고 있다. 라벨된 게시물 1,000건을 사람이 다시 읽자 시스템 판단의 83.7%에 동의했다.

방향을 뒤집으면 그림이 바뀐다. 게시물 흐름에서 무작위로 뽑은 1,000건에서 사람은 유해 게시물 27건을 찾아냈고, 그중 라벨이 붙어 있던 것은 6건이었다.

이유는 파이프라인 안쪽에 있다. 라벨을 붙이는 규칙 엔진은 상용 분류기가 이미지 한 장에 돌려주는 128개 신호 가운데 16개만 읽는다. 나머지는 점수가 1.000이 나와도 그 점수를 읽는 코드가 아예 없다.

두 값 모두 조건을 달아 읽어야 한다. 83.7%는 아홉 개 유해 범주에서 고르게 뽑은 층화 표본의 값이지 블루스카이 라벨 전체의 정확도가 아니고, 재현율 쪽은 분모가 27건이라 정밀한 추정치가 아니라 방향을 가리키는 값이다. 그래도 방향은 분명하다. 라벨을 많이 붙이는 일과 빠짐없이 붙이는 일은 다른 일이고, 지금 어느 라벨 품질 리포트에도 뒤쪽을 재는 칸이 없다.

▶ 전문: https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Bluesky #ATProtocol #콘텐츠모더레이션 #라벨품질 #AI거버넌스 #AIReadyData

---

## LinkedIn (EN)

Eight researchers audited the 10.6 million moderation labels Bluesky applied during 2025, working entirely from outside the company. The protocol the platform runs on publishes both the incoming post stream and the labeling record, which is what made an outside measurement possible for the first time.

Judged on the labels it applied, the system holds up. Annotators re-read 1,000 labeled posts and agreed with 83.7% of its calls.

Judged the other way, it does not. In 1,000 posts drawn at random from the firehose, annotators found 27 harmful ones. The system had labeled 6.

The reason sits inside the pipeline. The rule engine that turns classifier output into labels reads 16 of the 128 signals the commercial classifier returns for a single image. The rest have no rule attached, so a score of 1.000 sets nothing in motion.

Both figures need their conditions stated. The 83.7% comes from a sample balanced across nine harm categories, not from the real label population, and the recall figure rests on a denominator of 27, so it points in a direction rather than fixing a value. The direction is the finding. Applying a lot of labels and applying all of the warranted ones are different jobs, and no label-quality report currently carries a column for the second.

▶ Read: https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Bluesky #ATProtocol #ContentModeration #LabelQuality #AIGovernance #AIReadyData

---

## Twitter/X (KO)

블루스카이 게시물 1,000건을 무작위로 뽑아 사람이 처음부터 끝까지 읽었더니 27건이 유해로 판정됐다. 그중 시스템이 라벨을 붙여 둔 것은 6건이었다.

붙인 라벨은 대체로 맞았다. 안 붙인 쪽을 세는 칸이 어디에도 없었을 뿐이다.

▶ https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/ko/

#페블러스 #Bluesky #콘텐츠모더레이션 #라벨품질

---

## Twitter/X (EN)

Annotators read 1,000 random Bluesky posts end to end and flagged 27 of them as harmful. The system had labeled 6.

The labels it applied were mostly right. Nothing anywhere was counting the ones it never applied.

▶ https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/en/

#Pebblous #Bluesky #ContentModeration #LabelQuality

---

## Facebook (KO)

라벨링 대시보드를 열면 대개 초록색입니다.

정확도가 몇 퍼센트인지, 이번 주에 라벨이 몇 건 붙었는지. 숫자가 다 제자리에 있으면 일이 잘 돌아가고 있다고 느낍니다. 저도 그랬습니다.

그 느낌을 정면으로 건드리는 감사 결과를 읽었습니다. 연구자 여덟 명이 블루스카이가 한 해 동안 붙인 라벨을 플랫폼 바깥에서 다시 읽어 본 연구입니다. 붙어 있는 라벨만 검사했을 때는 사람과 시스템의 판단이 대체로 맞았습니다. 그런데 라벨 여부를 보지 않고 무작위로 뽑아 읽자, 사람이 유해하다고 본 것의 대부분이 아무 표시 없이 흐름을 그대로 통과해 있었습니다.

같은 시스템에서 두 값이 동시에 나왔다는 점이 오래 남았습니다.

하나는 "붙인 것은 맞았다"이고, 다른 하나는 "붙여야 할 것을 대부분 안 붙였다"입니다. 앞의 값만 보고 있으면 뒤의 값이 있다는 사실조차 보이지 않습니다.

저는 이 빈자리를 '커버리지 공백'이라 부르고 있습니다. 품질 리포트에 정확도 칸은 있는데 커버리지 칸이 없어서 생기는 자리입니다. 검사한 라벨에서 나온 점수는 검사 대상에 오른 것들의 점수일 뿐입니다. 애초에 라벨이 안 붙은 구간은 검사 목록에 이름조차 올리지 못합니다.

"우리 라벨이 정확한가?"와 "우리가 라벨을 빠짐없이 붙였는가?"는 다른 질문입니다.

이 감사가 값진 이유는 답을 줘서가 아니라, 두 번째 질문을 플랫폼 바깥에서 물을 수 있다는 것을 처음 보여 줬기 때문인 것 같습니다. 페블러스가 데이터 품질 성적서에서 정확성 옆에 커버리지 칸을 두려는 이유도 거기에 있습니다.

대시보드가 깨끗한 것과 파이프라인이 제 일을 하는 것은, 생각보다 자주 다른 이야기입니다.

전문은 여기에 담아 두었습니다.
https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #Bluesky #콘텐츠모더레이션 #라벨품질

---

## Facebook (EN)

A labeling dashboard is usually green.

Accuracy holding steady, the week's label count up, every figure sitting where you expect it. When the numbers stay still, it feels like the work is going well. It felt that way to me.

Then I read an audit that walked straight into that feeling. Eight researchers re-read a year of Bluesky's moderation labels from outside the company. Checked against the labels the system had applied, its judgments mostly held. But when the sample was drawn at random, without regard to whether a label was there, most of what human readers called harmful had passed through carrying no mark at all.

Both findings came out of one system. That is the part I keep returning to.

One says the labels it applied were right. The other says it never applied most of the labels it should have. Watch only the first and you will not see that the second exists.

I have started calling that empty space the coverage gap. A quality report has a column for accuracy and none for coverage, and the missing column is where this lives. A score computed over inspected labels is a score for the things that made it onto the inspection list. The stretches that were never labeled never reach the list at all.

"Are our labels accurate?" and "did we apply the labels we should have?" are not the same question.

What makes this audit worth reading is not the answer it gives but the fact that someone outside the company could put the second question at all. That is also why we at Pebblous keep working to set a coverage column beside the accuracy one.

A clean dashboard and a pipeline doing its job turn out, more often than not, to be different stories.

The full report is here.
https://blog.pebblous.ai/report/bluesky-moderation-audit-2026-09/en/

#Pebblous #DataClinic #DataQuality #Bluesky #ContentModeration #LabelQuality
