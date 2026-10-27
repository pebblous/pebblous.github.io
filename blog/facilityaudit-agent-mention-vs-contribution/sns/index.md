# SNS 홍보 글: FacilityAudit-Agent, 망원경 이름만 적은 논문을 가려낸다

> 소스: blog/facilityaudit-agent-mention-vs-contribution/ko/index.html
> 생성일: 2026-10-28
> URL: https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

서론에 망원경 이름이 한 번 적힌 논문과, 결론을 떠받치는 관측 자료를 전부 그 망원경에서 받아 온 논문이 성과 장부에는 같은 1건으로 들어간다.

중국과학원 국가천문대 연구진이 10월 23일 arXiv에 공개한 FacilityAudit-Agent는 그 한 줄에 다섯 칸을 넣는다. 이름만 언급, 장비 논의, 보조 기여, 주요 기여, 단독 기여. 여기에 시설을 아예 쓰지 않은 경우까지 더하면 눈금은 모두 여섯 칸이다. 묻는 것은 이름이 몇 번 나왔는지가 아니라, 그 데이터를 빼면 논문의 결론이 서 있을 수 있는지다.

읽는 방식도 전문을 통째로 모델에 밀어 넣는 쪽이 아니다. PDF를 절 단위로 쪼개 아웃라인을 세우고, 필요한 대목만 꺼내 읽은 뒤 모은 증거를 명시적인 결정 트리에 넣는다. 사람이 등급을 매긴 논문-시설 쌍 3만9358건을 시험지로 놓고 재니 정확도 89.1%가 나왔고, 전문을 통째로 넣는 방식과 검색증강 방식, 앞서 나온 전용 시스템을 모두 앞섰다.

성적표의 아래쪽도 같이 읽어야 한다. 매크로 F1은 79.8%이고, 장비 이야기만 하는 논문과 한 시설에만 기댄 논문을 가르는 두 칸에서는 60%대로 내려간다. 논문 한 편을 판정하는 비용도 모델에 따라 평균 수십만 토큰이다. 저자들이 이 시스템에 준 자리는 서지 전문가의 대체가 아니라 그 앞에 놓이는 선별 단계이고, 신뢰도가 낮게 매겨진 판정은 지금도 사람에게 올라간다.

이미 국가천문과학데이터센터에 배포돼 LAMOST와 FAST, 아인슈타인 프로브의 문헌 집계에 쓰이고 있다. 새 모델을 만든 것보다 세는 법을 다시 정의한 쪽이 크다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다.

▶ 전문: https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #FacilityAuditAgent #LAMOST #FAST #중국과학원 #천문학 #AI에이전트 #데이터계보 #AIReadyData

---

## LinkedIn (EN)

A paper that names a telescope once in its introduction and a paper whose conclusion rests entirely on that telescope's data enter the facility's performance ledger as the same single line.

Researchers at the National Astronomical Observatories of the Chinese Academy of Sciences posted a system to arXiv on October 23 that puts five slots in between. FacilityAudit-Agent grades each paper-facility pair from non-use through mention-only, instrument discussion, auxiliary support and major support to exclusive support. What it asks is not how often the name appears, but whether the conclusion would still stand with that data taken away.

Nor does it feed whole papers to a model. It splits the PDF into sections, builds an outline, pulls only the passages it needs, and runs the collected evidence through an explicit decision tree. Measured against 39,358 paper-facility pairs that people had graded by hand, 89.1% of its verdicts matched theirs, ahead of whole-paper prompting, retrieval-augmented generation and an earlier purpose-built system.

The lower half of the scorecard deserves the same reading. Macro F1 is 79.8%, and it drops into the low sixties on the two levels that mark either end of the hard cases: a paper that only discusses the instrument, and a paper leaning on this facility alone. Judging one paper costs hundreds of thousands of tokens on average, depending on the model. The seat the authors give the system is not the bibliographer's but the one in front of it, and verdicts that come back with low confidence still go up to a person.

It is already deployed at China's National Astronomical Data Center, where it handles the literature tallies for LAMOST, FAST and the Einstein Probe. The larger part of the work is less a new model than a redefinition of what gets counted. Pebblous characterizes the quality of AI training data with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #FacilityAuditAgent #LAMOST #FAST #ChineseAcademyOfSciences #Astronomy #AIAgent #DataProvenance #AIReadyData

---

## Twitter/X (KO)

서론에 망원경 이름이 한 번 적힌 논문과, 결론 전부를 그 망원경 데이터에 기댄 논문이 성과 장부에는 같은 1건으로 들어간다.

중국과학원 국가천문대가 공개한 FacilityAudit-Agent는 그 사이에 다섯 칸을 넣었다. 사람이 매긴 등급과 89.1%가 일치했다.

세는 법이 바뀌면 예산이 가는 곳도 바뀐다.

https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/ko/

#페블러스 #데이터품질 #FacilityAuditAgent #LAMOST #천문학

---

## Twitter/X (EN)

A paper that names a telescope once and a paper that owes its entire conclusion to it enter the ledger as the same single line.

FacilityAudit-Agent, out of the Chinese Academy of Sciences, puts five slots in between. Its verdicts matched human graders 89.1% of the time.

Change how you count and you change where the money goes.

https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/en/

#Pebblous #DataQuality #FacilityAuditAgent #LAMOST #Astronomy

---

## Facebook (KO)

해마다 기관은 성과 보고서의 한 칸을 채웁니다.

'우리 장비를 쓴 논문 몇 편'.

그 숫자를 만드는 방법은 대개 단출합니다. 논문에서 장비 이름을 검색해 걸리면 한 줄 더합니다.

중국과학원 국가천문대 연구진이 10월 23일 arXiv에 공개한 시스템은 그 한 줄을 의심합니다.

서론에 이런 탐사도 있다며 이름이 한 번 적힌 논문, 그리고 결론을 떠받치는 관측 자료를 전부 그 망원경에서 받아 온 논문. 장부에서 둘은 같은 한 줄이었습니다.

FacilityAudit-Agent는 그 한 줄을 여섯 칸으로 펼칩니다. 쓰지 않음, 이름만 언급, 장비 논의, 보조 기여, 주요 기여, 단독 기여. 기준은 이름이 몇 번 나왔느냐가 아닙니다. 그 데이터를 빼면 결론이 서 있을 수 있느냐입니다.

사람이 직접 등급을 매긴 논문 수천 편을 시험지로 놓고 재니, 열에 아홉 가까이 사람과 같은 칸을 골랐습니다.

다만 사람도 전문을 읽어야 비로소 가려지는 양 끝에서는 성적이 눈에 띄게 내려갑니다. 신뢰도가 낮게 매겨진 판정은 지금도 사람에게 올라갑니다. 저자들이 이 시스템에 준 자리는 서지 전문가의 대체가 아니라 그 앞에 놓이는 선별이었습니다.

정작 눈이 오래 멈춘 곳은 89.1%가 아니었습니다.

여섯 칸짜리 눈금을 세워 놓고도 애매한 사례를 되돌려 보낼 곳이 없으면, 그 눈금은 결국 한 칸짜리 장부처럼 쓰입니다.

페블러스에서 AI 학습 데이터를 다룰 때도 눈금은 그리기 쉬운 쪽에 속했습니다. 어려운 쪽은 점수가 애매하게 나온 데이터를 누가, 언제 다시 여느냐였습니다.

"우리 판정에서 '모르겠다'는 지금 어디로 갑니까?"

칸을 늘리는 일보다 어려운 것은, 늘어난 칸을 끝까지 다르게 대하는 일인 것 같습니다.

▸ https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/ko/

#페블러스 #데이터클리닉 #데이터품질 #FacilityAuditAgent #천문학 #데이터계보

---

## Facebook (EN)

Once a year an institution fills in one cell of a performance report.

'Papers that used our instrument: how many?'

The way that number gets produced is usually plain. Search the literature for the instrument's name, and every hit adds a row.

A system that researchers at the National Astronomical Observatories of the Chinese Academy of Sciences posted to arXiv on October 23 doubts that row.

A paper that names a survey once in its introduction, and a paper whose every observation behind its conclusion came off that telescope. In the ledger the two were the same row.

FacilityAudit-Agent opens that row into six. Non-use, mention only, instrument discussion, auxiliary support, major support, exclusive support. The test is not how many times the name appears. It is whether the conclusion would still stand with the data taken away.

Set against several thousand papers that people had graded by hand, it picked the same slot as the humans close to nine times out of ten.

At the two ends a person has to read the whole paper to tell apart, though, the score drops visibly. Verdicts that come back with low confidence still go up to a person. The seat the authors give this system is not the bibliographer's but the chair in front of it.

The part my eye returned to was not the accuracy.

Build a six-slot scale and leave nowhere to send the cases you are unsure about, and the scale ends up used like a one-slot ledger.

At Pebblous, too, drawing the scale has rarely been the hard part of working with training data. The hard part has been settling who reopens the records whose scores came back ambiguous, and when.

"Where does 'not sure' go in our own verdicts?"

Adding slots may be easier than keeping the slots apart.

▸ https://blog.pebblous.ai/blog/facilityaudit-agent-mention-vs-contribution/en/

#Pebblous #DataClinic #DataQuality #FacilityAuditAgent #Astronomy #DataLineage
