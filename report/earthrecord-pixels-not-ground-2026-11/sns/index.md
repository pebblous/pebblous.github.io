# SNS 홍보 글: 위성 분석 시험 EarthRecord, AI는 땅보다 센서를 따라간다

> 소스: report/earthrecord-pixels-not-ground-2026-11/
> 생성일: 2026-11-14
> URL: https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

전체 성적 68.1점짜리 모델이 77.0점짜리 모델을 이긴 문항이 있다.

11월 6일 공개된 위성 분석 시험 EarthRecord의 한 장면이다. 스케일 인자도 품질 레이어도 적용하지 않은 40년치 위성 원본을 그대로 건네고, 구름 걷어 내기부터 서로 다른 위성의 값 맞추기까지 전부 에이전트에게 맡긴 뒤 토지가 어떻게 변했는지를 물었다. 파이프라인 자체는 끝까지 돌아갔다. 상위 네 모델은 채점 대상 226문항의 여덟 할 넘게를 세 패스 모두 맞혔고, 가장 흔한 답을 기계적으로 찍는 베이스라인은 23.9%에 그쳤다.

무너진 자리는 그다음이다. 땅은 그대로 두고 위성 한 대의 측정값만 2018년부터 손보자, 원본을 맞혔던 200개 사례 가운데 107건이 틀린 답으로 돌아섰다. 답이 바뀐 run의 아홉 할은 조작한 방향 그대로 움직였다. 값을 전혀 건드리지 않은 대조 쌍에서 선도 여섯 모델은 한 건도 흔들리지 않았으니, 답이 원래 그만큼 출렁이는 것도 아니었다.

알아챌 길이 막혀 있지도 않았다. 모든 조작은 같은 시기의 다른 위성과 대보기만 하면 드러나도록 걸려 있었다. 그런데 틀린 run 228건 가운데 117건은 센서라는 낱말을 꺼내지도 않았다.

첫 문장의 그 문항이 차이를 보여 준다. 이집트 뉴카이로의 녹지를 묻는 질문에서, 진 쪽은 MODIS Terra 하나만 열어 보고 1분 반 만에 답을 냈다. 이긴 쪽은 Aqua와 VIIRS와 랜드샛까지 대본 뒤 어긋나는 구간을 잘라 내고 센서별로 기울기를 따로 구했다. 이긴 이유는 능력이 아니라 절차였다.

페블러스가 DataClinic으로 AI 학습 데이터를 받으면 먼저 하는 일도 품질을 정량 진단하는 것이다. 성적서에는 어떤 값이 나왔는지가 적힌다. 그 값이 무엇과 대본 뒤에 나온 것인지를 적는 칸은 아직 흔치 않다.

▶ 전문: https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #EarthRecord #위성영상분석 #멀티모달에이전트 #벤치마크설계 #반사실검증 #원격탐사 #MODIS

---

## LinkedIn (EN)

On one question, a model that scores 68.1 overall beat a model that scores 77.0.

The question comes from EarthRecord, a satellite-analysis test released on November 6. It hands an agent four decades of imagery from 56 sites with none of the cleanup done: no scale factors, no offsets, no quality flags, and a README where the conversion table would normally be. Screening cloud, drawing the boundary of a change, putting four different satellites onto one scale — the agent does all of it, and only then gets asked how the land changed.

The pipelines held. The top four models were right in all three passes on more than eight of every ten scored questions, against 23.9% for a baseline that simply guesses the most common answer. Among the 72 failures of the six leading models, seven came from mishandling the data or never finishing. The rest were judgments made after the data was in hand.

Then the authors left the ground alone and moved one satellite instead, shifting its readings from 2018 onward. Of the 200 cases the models had been getting right, 107 came back wrong, and nine in ten of the answers that moved went the way the tampering went. On the control pairs, where nothing was altered, the six leading models did not budge once — so this is not the ordinary wobble of a model asked twice.

Nothing hid the alteration either. Every pair was built to show up against another satellite from the same period. Yet of the 228 wrong runs, 117 never used the word sensor at all.

Back to that first question, on green cover in New Cairo. The loser opened MODIS Terra, nothing else, and answered in ninety seconds. The winner cross-read Aqua, VIIRS and Landsat, cut out the stretch where they disagreed, and fitted a slope per sensor. What separated them was procedure, not capability.

Pebblous runs the same first step at DataClinic: AI training data arrives, and the quality gets put into numbers before anything else happens. A report says what the value came out as. A field for what the value was read against is still rare.

▶ Read: https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #EarthRecord #RemoteSensing #MultimodalAgents #BenchmarkDesign #Counterfactual #Landsat #MODIS

---

## Twitter/X (KO)

땅은 그대로 두고 위성 한 대의 측정값만 바꾸자, 원본을 맞혔던 200개 사례의 절반이 틀린 답으로 돌아섰다.

조작은 전부 같은 시기의 다른 위성과 대보기만 하면 드러나도록 걸려 있었다. 그런데 틀린 run의 절반은 센서를 입에 올리지도 않았다.

https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/ko/

#페블러스 #EarthRecord #데이터품질 #원격탐사

---

## Twitter/X (EN)

The ground was left alone; one satellite's readings were shifted instead. Half of the 200 cases the models had been getting right came back wrong, and the wrong answers leaned the way the tampering did.

Each alteration was designed to surface against a different satellite covering the same period. Half of the wrong runs never mentioned a sensor.

https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/en/

#Pebblous #EarthRecord #DataQuality #RemoteSensing

---

## Facebook (KO)

"원인이 독립적으로 확인되지 않았다."

어느 보고서 가운데쯤에 적혀 있던 문장입니다.

같은 보고서의 결론란에는 "감소"가 적혀 있었습니다.

두 줄 다 한 에이전트가 자기 분석 과정에 남긴 것입니다. 11월 6일 공개된 EarthRecord라는 시험에서, 40년치 위성 원본을 통째로 넘겨받은 쪽이 쓴 기록입니다.

시험을 만든 쪽은 땅은 그대로 둔 채 위성 한 대의 값만 2018년부터 내려 두었습니다. 이집트 뉴카이로의 녹지가 늘었는지 줄었는지를 묻는 질문에서, 그 에이전트는 연평균을 또박또박 적어 내려갔습니다.

2017년 0.131, 그다음 줄이 −0.067. 자연에서는 일어날 수 없는 점프입니다.

보지 못한 것이 아니었습니다. 적어 두기까지 했습니다. 그리고 결론란에는 "감소"를 썼습니다.

같은 질문을 받은 다른 에이전트는 전체 성적이 아홉 점 낮은 쪽이었습니다. 그쪽은 Aqua와 VIIRS와 랜드샛을 같이 열어 보고, 값이 어긋나는 구간을 잘라 낸 다음 센서별로 따로 기울기를 구했습니다. 그래서 답이 바뀌지 않았습니다.

"지난번 평가에서 모델이 맞혔다고 적힌 칸 옆에, 무엇과 대보고 맞힌 것인지가 적혀 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 남는 것은 값 하나입니다. 그 값에 이르기까지 몇 갈래를 맞대 본 것인지는 적어 둘 자리가 따로 없습니다.

이 시험에서 답을 지킨 것은 더 센 모델이 아니었습니다. 대보기 한 번이었습니다.

대본 적이 있는지가 채점표에 한 줄 들어가 있었다면, 두 에이전트의 성적은 답을 견주기 한참 전에 갈렸을 것입니다.

▶ 전문: https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #EarthRecord #AIReadyData #원격탐사

---

## Facebook (EN)

"The cause of the break has not been independently verified."

That sentence sits in the middle of a report.

The conclusion line of the same report says: decrease.

Both lines belong to one agent's working record, kept while it worked through a question in EarthRecord, a test released on November 6 that hands over four decades of satellite imagery and asks what happened to the land.

The people who built the test left the ground exactly as it was and lowered one satellite's readings from 2018 onward. Asked whether green cover in New Cairo had grown or shrunk, the agent wrote out annual means, one line at a time.

0.131 for 2017. Then −0.067. Nothing in nature steps like that.

It was not a case of not seeing. The agent saw it well enough to write it down. Then it answered: decrease.

Another agent got the same question. It scores nine points lower overall. It opened Aqua and VIIRS and Landsat alongside, cut out the stretch where the readings disagreed, and fitted a slope for each sensor separately. Its answer did not move.

"Next to the cell in your last evaluation that says the model got it right — is there anything recorded about what the answer was read against?"

At Pebblous the quality of AI training data goes into a DataClinic report as a set of figures. What the report carries is the outcome. How many separate lines of evidence were laid against each other to reach it has no place on the page.

Reading across is what held that answer in place.

Had reading across been a line on the scoresheet, those two would have parted long before anyone compared their answers.

▶ Read: https://blog.pebblous.ai/report/earthrecord-pixels-not-ground-2026-11/en/

#Pebblous #DataClinic #DataQuality #EarthRecord #AIReadyData #RemoteSensing
