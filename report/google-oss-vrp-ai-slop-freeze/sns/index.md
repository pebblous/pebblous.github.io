# SNS 홍보 글: 구글 버그바운티, 닫은 창구 옆에 열어 둔 창구가 있다

> 소스: report/google-oss-vrp-ai-slop-freeze/ko/index.html
> 생성일: 2026-10-06
> URL: https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

구글이 10월 1일 오픈소스 버그바운티 접수를 닫았다는 소식이 돌았다. 규칙 페이지의 보상표를 열면 비워진 것은 한 줄이다. 제품 취약점 줄만 비었고, 공급망 침해 줄에는 최고 31,337달러가 그대로 걸려 있다.

사유를 적은 구글 매체는 X 포스트 한 건이 전부다. 자동 제출이 크게 늘었고 그 대다수가 유효하지 않다는 문장인데, 규칙 페이지에는 같은 말이 없다. 2027년 1분기에 약속한 것도 재개가 아니라 업데이트다.

두 줄을 가른 기준은 제보자가 아니다. 공급망 제보에는 외부 기여자가 PR 승인을 먼저 받아야 한다는 요건을 우회해 실제로 악용 가능함을 시연하라는 조건이 붙는다. 시연이 되거나 안 되거나다. 제품 취약점은 산문으로 쓸 수 있는 주장이고, 기각하려면 사람이 그 프로젝트의 위협 모델을 읽고 도달 가능성을 판정해야 한다.

다섯 달 전 같은 회사가 반대 방향으로도 움직였다. 4월 30일 구글은 크롬·안드로이드 포상 프로그램을 버그가 존재한다는 구체적 증거 중심으로 바꾸면서, 연구자가 그 증거를 만들 수 있도록 전용 크롬 빌드를 배포하겠다고 적었다. 안드로이드 최고 보상은 150만 달러로 올랐다. 닫고 연 기준이 AI였다면 두 프로그램이 같은 방향으로 갔어야 한다.

비용 쪽은 실측돼 있다. 소프트웨어공학 학회 MSR 2026에 실린 연구가 적대적 버그 리포트를 한 건 만드는 데 0.000295달러, 자동 수리 에이전트가 그것을 처리하는 데 0.87달러를 쟀다. 약 2,950배다.

같은 51건에서 정적 분석기 CodeQL이 걸러낸 것은 한 건도 없었다. 자동 검사를 전부 통과하고 사람만 거를 수 있는 입력이 들어오기 시작하면, 처리량은 기계 용량이 아니라 사람 수에 묶인다.

입구를 조인 쪽의 성적표도 한 방향으로만 읽히지는 않는다. curl은 포상을 없애 유효율을 5% 미만에서 15~16%로 되돌렸다. 그런데 같은 해 제보량이 2024년의 4~5배가 됐다. 거르는 데 성공하자 사람이 끝까지 따라가야 할 진짜 건수가 늘었다.

구글이 2026년에 몇 건을 받았고 그중 몇 %가 무효였는지는 공개한 적이 없다. 공개된 것은 설계 하나다. 입구에서 물을 것은 누가 보냈는가가 아니라, 이 항목이 자기를 검사할 증거를 데리고 왔는가다.

▶ 전문: https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #Google #OSSVRP #curl #오픈소스보안 #버그바운티 #데이터계약

---

## LinkedIn (EN)

Google stopped accepting product vulnerability reports in its open source bug bounty on 1 October. Open the live rules page and exactly one row of the reward table has been emptied. The product vulnerability row is blank across all four repository tiers. The supply chain row still carries a top reward of $31,337.

The only Google channel that gives a reason is a single post on X: a significant rise in automated submissions, the vast majority of which are not valid. The rules page says nothing of the kind. And what Google committed to for Q1 2027 is an update, not a reopening.

What separates the two rows is not who files. A supply chain submission has to demonstrate an actual compromise by bypassing the requirement that outside contributors get a pull request approved first. It demonstrates or it does not. A product vulnerability is a claim that can be written in prose, and rejecting one means a human reads the project's threat model and rules on whether the code path is reachable.

Five months earlier the same company moved the other way. On 30 April, Google rebuilt its Chrome and Android programs around concrete proof that a bug exists, and promised a researcher-only Chrome build so that proof could be produced. The top Android reward rose to $1.5 million. Had the dividing line been AI authorship, both programs would have moved together.

The cost gap has been measured. A study presented at MSR 2026 priced an adversarial bug report at $0.000295 to generate and $0.87 for an automated repair agent to process. Roughly 2,950 times.

Across the same 51 reports, the CodeQL static analyzer flagged none. Once inputs arrive that clear every automated check and only a person can reject, throughput stops tracking machine capacity and starts tracking headcount.

The record on tightening intake does not read one way either. curl ended its bounty and watched its valid-report rate climb from under 5% to 15-16%. In the same year, its incoming volume ran 4-5 times the 2024 level. Filtering worked, and the number of real reports a human has to see through went up.

Google has never published how many reports it received in 2026, or what share were invalid. What it published is a design decision. The question at intake is not who sent this, but whether the item arrived carrying evidence of its own.

▶ Read: https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Google #OSSVRP #curl #OpenSourceSecurity #BugBounty #DataContracts

---

## Twitter/X (KO)

구글이 오픈소스 버그바운티를 닫았다는 소식에서 실제로 비워진 것은 보상표의 한 줄이다. 제품 취약점 줄만 비었고, 실제 악용을 시연하라고 요구하는 공급망 제보 줄은 최고 31,337달러가 그대로다.

가른 기준은 제보를 누가 썼느냐가 아니라, 기계가 돌려 볼 증거가 따라오느냐였다.

▶ https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/ko/

#페블러스 #Google #OSSVRP #버그바운티

---

## Twitter/X (EN)

Google did not close its open source bug bounty. It emptied one row of the reward table. Product vulnerabilities are gone. The supply chain row, which makes you demonstrate the break, still pays up to $31,337.

The line was never about who wrote the report. It was about whether evidence a machine can run came with it.

▶ https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/en/

#Pebblous #Google #OSSVRP #BugBounty

---

## Facebook (KO)

버퍼 오버플로가 거기 있다는 제보를 한 건 받았다고 해 봅시다.

가리킨 코드 줄이 정확합니다. 오류도 실제로 있습니다.

다만 그 경로에는 바깥에서 도달할 방법이 없습니다.

이것을 아니라고 말하려면 누군가 그 프로젝트의 위협 모델을 알아야 하고, 호출 그래프를 따라가 도달 가능성을 직접 판정해야 합니다.

구글이 올해 3월에 비용의 원인으로 적은 범주는 둘이었습니다. 환각이 섞인 가짜가 그중 하나이고, 다른 하나가 지금 이 제보입니다. 기술적으로는 맞는데 닿는 데가 없는 쪽입니다.

지어낸 쪽은 오히려 쌉니다. 재현이 안 되면 그것으로 끝이니까요.

10월 1일, 구글은 오픈소스 포상 프로그램에서 제품 취약점 접수를 닫았습니다.

규칙 페이지의 보상표를 열면 비워진 것은 한 줄입니다. 공급망 침해 줄에는 최고 31,337달러가 그대로 걸려 있습니다.

닫힌 줄이 아니라 남은 줄이 이 결정을 설명합니다. 공급망 제보에는 외부 기여자가 PR 승인을 먼저 받아야 한다는 요건을 우회해 실제로 악용 가능함을 시연하라는 조건이 붙어 있습니다.

시연이 되거나, 안 되거나입니다. 사람이 읽고 판정할 자리가 없습니다.

다섯 달 전 같은 회사는 다른 창구에서 반대로 움직였습니다. 크롬과 안드로이드 쪽은 버그가 존재한다는 구체적 증거 중심으로 바꾸면서, 연구자가 그 증거를 만들 수 있도록 전용 빌드를 배포하겠다고 적었습니다. 요구만 한 것이 아니라 도구를 같이 준 것입니다.

그러니 올해 구글이 가른 것은 '사람이 썼는가'가 아니었습니다.

'기계가 돌려 볼 수 있는 증거가 따라오는가'였습니다.

데이터 쪽에도 같은 자리가 있습니다. 결측도 아니고 중복도 아니고 범위를 벗어난 것도 아닌데, 사람이 읽어야만 아니라고 말할 수 있는 레코드가 있습니다. 타입 검사를 통과하고 값도 정상인데 의미가 비어 있는 쪽입니다. 데이터클리닉이 데이터셋을 진단할 때 쓰는 점검 항목에 아직 자리가 없는 결함이기도 합니다.

그래서 입구를 설계할 때 질문 하나를 먼저 적어 두게 됐습니다.

"들어온 것 하나를 아니라고 말하는 데 얼마가 듭니까?"

이 답이 없으면 수집량은 성과가 아닙니다. curl은 포상을 없애 쓰레기 제보를 걷어냈고 유효율을 5% 미만에서 15~16%로 되돌렸는데, 같은 해 제보량이 2024년의 4~5배가 되면서 상반기에만 CVE 30건을 찍었습니다. 거르는 데 성공했더니 사람이 끝까지 따라가야 할 진짜가 늘어난 것입니다.

증거를 요구하는 설계에도 바닥은 있습니다. 테스트를 전부 통과하면서 취약한 패치가 실제로 만들어진다는 보고가 여러 건 나와 있습니다. 증거는 판정을 싸게 만드는 장치이지 정답을 주는 장치가 아닙니다.

다만 규격이 없어서 못 하는 단계는 지났습니다. 공급망 쪽 서명된 증명 규격은 2024년부터 있었고, 데이터 쪽 계약 규격은 작년 12월에 표준으로 승인됐습니다.

이제 정할 것은 입구에서 그것을 요구할지 말지입니다.

▶ 전문: https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/ko/

#페블러스 #Google #OSSVRP #curl #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Suppose a report lands saying there is a buffer overflow in your code.

The line it points at is correct. The error really is there.

Only nothing from outside can reach that code path.

Saying no to it means somebody has to know the project's threat model and walk the call graph to rule on reachability.

Google named two categories in March as the source of its costs. Hallucinated reports are one of them. The other is this one: technically right, and reaching nothing.

The invented ones are the cheap ones. If it does not reproduce, it is over.

On 1 October, Google stopped accepting product vulnerability reports in its open source reward program.

Open the live rules page and one row of the reward table has been emptied. The supply chain row still carries a top reward of $31,337.

It is the row that stayed, not the row that went, that explains the decision. A supply chain submission has to demonstrate an actual compromise, bypassing the requirement that an outside contributor get a pull request approved first.

It demonstrates, or it does not. There is no seat where a person reads and decides.

Five months earlier the same company moved the other way on a different window. Chrome and Android were rebuilt around concrete proof that a bug exists, and Google promised a researcher-only build so that the proof could be produced. It asked for evidence and handed over the means to make it.

So the line Google drew this year was not "was this written by a person."

It was "does evidence a machine can run come with it."

Carry that distinction into data work and it is recognizable. Not a missing value, not a duplicate, not an out-of-range entry, and still something only a person can reject. Types pass, the value sits in range, and the meaning is empty. DataClinic's diagnostic checks have no column for that yet.

So this is the line I now write down first when designing an intake.

"What does it cost to say no to one incoming item?"

Without that answer, volume is not an achievement. curl ended its bounty, cleared out the slop, and brought its valid-report rate back from under 5% to 15-16%. In the same year, volume ran 4-5 times the 2024 level and the project logged 30 CVEs before the half year was out. The filter worked, and the number of real reports a human has to follow through went up.

Designs built on evidence have a floor of their own. Several papers report patches that pass every test and are vulnerable anyway. Evidence makes a verdict cheaper. It does not make the verdict right.

What is no longer missing is the specification. Signed provenance for software supply chains has existed since 2024, and the machine-readable contract standard on the data side was approved last December.

So the question is no longer whether it can be required. It is whether anyone requires it at intake.

▶ Full piece: https://blog.pebblous.ai/report/google-oss-vrp-ai-slop-freeze/en/

#Pebblous #Google #OSSVRP #curl #DataQuality #DataClinic #AIReadyData
