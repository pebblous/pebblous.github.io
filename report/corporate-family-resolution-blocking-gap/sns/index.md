# SNS 홍보 글: 이름이 겹치지 않는 계열사는 후보 집합에 오르지도 못했다

> 소스: report/corporate-family-resolution-blocking-gap/ko/index.html
> 생성일: 2026-09-08
> URL: https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

이름에 공통 낱말이 하나도 없는 모회사와 자회사는 매칭 알고리즘 앞에 도착조차 하지 않는다.

미국 연방 조달 집행 기록 663만 행으로 만든 공개 벤치마크가 그 자리를 특정했다. 자식과 모회사가 변별 토큰을 얼마나 공유하는지로 양성 쌍 13,716건을 세 계층으로 갈랐더니, 두 이름 사이에 공통 낱말이 하나도 없는 쌍이 그중 23.5%였다.

실패는 매처가 아니라 그 앞에서 일어난다. 어떤 쌍을 매처에게 보여 줄지 고르는 블로킹 단계에서, 일곱 가지 기법 가운데 그 계층의 3%를 넘긴 것이 하나도 없었고 전부 합쳐도 6.8%에서 멈췄다. 나머지는 후보 집합에 들어오지 못한 채 파이프라인을 지나간다. 오답으로도 집계되지 않으니 매칭 정확도를 아무리 올려도 되살아나지 않는다.

그 연결이 실재한다는 확인은 조달 등록과 출처를 전혀 공유하지 않는 문서에서 나온다. 상장회사가 연차보고서에 붙이는 자회사 명세서와 맞춰 보니, 그 계층 794건 가운데 510건이 모회사 자신의 공시에 자회사로 적혀 있었다.

읽는 폭은 좁게 잡는 편이 맞다. 단독 저자가 심사 없이 올린 프리프린트이고, 미국 한 나라 한 회계연도의 자기신고 등록 정보를 쓴다. 64.2%는 파서가 회수한 텍스트 양만큼 깎여 있는 하한값이다. 93.2%의 분모도 전체 연결이 아니라 이름이 겹치지 않는 연결이며, 전체 연결 기준 누락은 23.8%다.

그래도 실무에 남는 질문은 한 줄이다. 우리 데이터 통합 지표는 못 맞힌 것을 세는가, 아예 보여 주지 않은 것까지 세는가.

▶ 전문: https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #엔터티해소 #데이터통합 #마스터데이터 #블로킹 #AIReadyData #SEC #GLEIF

---

## LinkedIn (EN)

A parent and a subsidiary that share no word in their names never arrive in front of the matching algorithm.

A public benchmark built from 6.63 million rows of US federal procurement locates where that loss happens. Its 13,716 positive pairs are split into three strata by how many distinguishing tokens a child shares with its parent, and 23.5% of them share none at all.

The failure sits before the matcher. In the blocking stage that decides which pairs a matcher ever sees, not one of seven schemes reached 3% on that stratum, and all seven combined stopped at 6.8%. The rest pass through the pipeline without entering the candidate set. They are never counted as wrong answers, so no amount of matching accuracy brings them back.

That those links are real is established from a document that shares no source with the procurement registry. Checked against the subsidiary schedules public companies attach to their annual reports, 510 of 794 pairs in that stratum were listed as subsidiaries in the parent's own filing.

The reading should stay narrow. This is a single-author preprint with no peer review, drawn from self-reported registrations in one jurisdiction and one fiscal year. The 64.2% is a lower bound, discounted by how much text the parser recovered. And the 93.2% is a share of the non-overlapping links, not of all links; measured across the whole benchmark, the miss rate is 23.8%.

The operational question narrows to one line. Does your data integration metric count what the pipeline got wrong, or also what it never brought to the table?

▶ Read: https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #EntityResolution #DataIntegration #MasterData #Blocking #AIReadyData #SEC #GLEIF

---

## Twitter/X (KO)

이름에 공통 낱말이 하나도 없는 모회사와 자회사는 매칭 알고리즘 앞에 도착하지도 않는다.

미국 연방 조달 명부로 만든 공개 벤치마크에서, 블로킹 기법 일곱 가지를 전부 합쳐도 그 계층 연결의 6.8%만 후보 집합에 들어왔다.

못 맞힌 것과 아예 보여 주지 않은 것은 따로 세야 한다 ↓
https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/ko/

#페블러스 #데이터저널리즘 #엔터티해소 #데이터통합

---

## Twitter/X (EN)

A parent and a subsidiary sharing no word in their names never reach the matching algorithm.

In a public benchmark built from US federal procurement, all seven blocking schemes combined put just 6.8% of those links into the candidate set.

What a pipeline got wrong and what it never showed are two different counts ↓
https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/en/

#Pebblous #DataJournalism #EntityResolution #DataIntegration

---

## Facebook (KO)

"이 기업집단에 우리가 쓴 돈은 얼마입니다."

지출 보고서의 그 한 줄을 만들려면, 공급업체 명부의 두 줄이 같은 주인 아래 있는지부터 가려야 합니다.

Heico Corporation과 Blue Aerospace LLC.

실제로 모회사와 자회사인데, 두 이름을 아무리 오래 들여다봐도 그 사실이 나오지 않습니다. 관계는 두 레코드 밖에, 회사가 증권 당국에 낸 공시 안에 적혀 있습니다.

미국 연방 조달 집행 기록 663만 행으로 벤치마크를 만든 연구가 바로 이런 쌍만 따로 떼어 재 봤습니다.

어떤 쌍을 판정에 올릴지 고르는 앞 단계에서, 일곱 가지 기법을 전부 합쳐도 그 연결의 6.8%만 후보에 올랐습니다.

저는 나머지를 '도착하지 않은 연결'이라고 부르고 싶습니다.

틀린 답이 아니라, 답할 기회조차 없던 쌍입니다. 오답 목록에도 오르지 않으니 성적표에는 흔적이 남지 않습니다.

"우리 지표는 못 맞힌 것을 세고 있습니까, 아예 보여 주지 않은 것까지 세고 있습니까?"

그 연결이 그냥 등록 오류 아니냐는 반문에는, 회사 자신의 공시가 답합니다. 794건을 열어 보니 510건이 모회사의 공시에 자회사로 적혀 있었습니다.

데이터에 없는 것이 아니라, 파이프라인이 그 증거를 찾으러 가지 않는 것입니다.

페블러스가 DataClinic으로 해 온 일은 데이터셋을 열어 무엇이 잘못됐는지 세는 것입니다. 이 연구는 그 세는 행위 자체에 빠진 칸이 있다고 말합니다. 그래서 남의 이야기로 읽히지 않았습니다.

단독 저자가 심사 없이 올린 프리프린트이고, 미국 한 나라 한 해의 자기신고 기록입니다. 이 결과를 그대로 다른 명부에 옮길 수는 없습니다.

다만 성적이 좋다는 말이 무엇의 성적인지는, 명부를 가진 쪽이라면 한 번쯤 되물어 볼 만한 자리인 것 같습니다.

https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #엔터티해소 #데이터통합 #마스터데이터

---

## Facebook (EN)

"Here is what we spent with this corporate group."

To put that one line in a spend report, someone first has to decide whether two rows in a supplier registry sit under the same owner.

Heico Corporation and Blue Aerospace LLC.

They are in fact parent and subsidiary, and you can stare at both names for as long as you like without finding it. The relationship lives outside the two records, in what the company filed with its securities regulator.

A study that built a benchmark from 6.63 million rows of US federal procurement pulled exactly these pairs out and measured them on their own.

At the stage that decides which pairs ever go up for judgment, all seven schemes combined brought only 6.8% of those links into the candidate set.

I have started thinking of the rest as links that never arrived.

They are not wrong answers. They are pairs that were never given the chance to be answered, and because they never enter the wrong column, the scorecard keeps no trace of them.

"Does our metric count what we got wrong, or also what we never brought to the table?"

To the objection that these might simply be registration noise, the companies answer in their own filings. Of 794 pairs examined, 510 were listed as subsidiaries by the parent itself.

The connection is not absent from the data. The pipeline is not going to look for the evidence.

What we do at Pebblous with DataClinic is open a dataset and count what is wrong with it. This study says the counting itself has a missing column, which is why it did not read as someone else's problem.

It is a single-author preprint with no peer review, drawn from one country and one year of self-reported records, and it does not transfer wholesale to another registry.

Still, when a score looks good, asking what it is a score of seems like a question worth sitting with.

https://blog.pebblous.ai/report/corporate-family-resolution-blocking-gap/en/

#Pebblous #DataClinic #DataQuality #EntityResolution #DataIntegration #MasterData
