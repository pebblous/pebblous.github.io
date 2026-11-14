# SNS 홍보 글: 마이크로소프트 디지털 디펜스 리포트, 공격은 하루 복구는 한 달

> 소스: report/microsoft-digital-defense-report-2026-ai-attackers/ko/index.html
> 생성일: 2026-10-04
> URL: https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

마이크로소프트 디지털 디펜스 리포트 2026에서 가장 많이 인용된 문장은 마이크로소프트가 관측한 것이 아니다. AI 모델이 사람 지시 없이 32단계를 이어 붙여 모의 기업망을 통째로 장악했다는 대목인데, 그 평가를 설계하고 수행한 곳은 영국 AI 보안연구소다.

보고서가 자기 참고문헌에 직접 올려 둔 그 평가 원문을 열면 보고서에 없는 숫자가 하나 나온다. 분모다. 열 번 시도 중 두 번, 그리고 세 번이다. 원문은 잘 방어된 표적에서도 성공할지는 이 결과로 말할 수 없다는 유보를 덧붙였는데, 보고서는 시행 횟수도 그 유보도 싣지 않았다.

분모를 되살려도 추세는 그대로 남는다. 성공이 한 번도 없던 자리에서 성공이 나오기 시작했다는 뜻이기 때문이다. 다만 "AI가 사람 없이 매번 기업망을 장악한다"는 문장은 원 평가 어디에도 없다.

그래서 이 보고서에서 가장 단단한 문장은 공격 쪽 묘사가 아니라 패치 절에 있다. 문제는 패치가 존재하느냐가 아니라 조직이 노출된 자산을 식별할 수 있느냐로 옮겨 갔다는 것이다. 마이크로소프트 자신의 권고 시한은 72시간이고, 인터넷에 노출된 중대 취약점에 대한 기업 복구의 실측 중앙값은 30~60일이다. 같은 회사가 같은 쪽에 나란히 적어 둔 두 값이다.

왜 느린지에 대한 보고서의 설명도 보안 예산이 아니다. 많은 시스템에 견고한 단위 시험과 통합 시험이 없어 코드 변경을 빠르게 배포하지 못한다는 것이다. 보안 조직의 문제라기보다 엔지니어링 공정의 문제다.

자사 레드팀 절에는 더 멀리 간 문장이 하나 있다. 목록으로는 부족하고 도달 관계를 그린 그래프가 필수인데, 대부분의 환경은 그 질문에 답하지 못한다는 것이다. 격차를 만드는 것은 모델의 성능이 아니라 조직이 자기 시스템에 대해 가진 기록의 상태다.

▶ 전문: https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #Microsoft #디지털디펜스리포트 #AI보안 #취약점관리 #AISI #JADEPUFFER

---

## LinkedIn (EN)

The most quoted line in Microsoft's 2026 Digital Defense Report is not Microsoft's own observation. It describes an AI model stringing together 32 steps with no human direction and taking full control of a simulated corporate domain. The evaluation behind it was designed and run by the UK AI Security Institute.

Microsoft lists that evaluation in its own bibliography, so the original is one click away. It carries a figure the report leaves out: the denominator. Two runs in ten for GPT-5.5, three in ten for the earlier Mythos preview. The original also states that these results say nothing about whether the model would succeed against a well-defended target. Neither the trial count nor the caveat made it into the report.

Restoring the denominator does not weaken the trend. Completions started appearing where there had never been any. What does not exist anywhere in the original evaluation is the sentence readers walked away with, that AI now takes over corporate networks by itself, every time.

The hardest finding in the report sits in the patching section instead. The question is no longer whether a patch exists, Microsoft writes, but whether an organization can identify its exposed assets and fix them before attackers operationalize them. Microsoft's own guidance is 72 hours. Its measured median for enterprise remediation of internet-exposed critical CVEs is 30 to 60 days. Same company, same page.

The reason for the delay is not the security budget either. Many systems lack robust unit and integration testing, the report says, and therefore cannot ship code changes quickly. That is an engineering maturity problem before it is a security one.

One more line, from the section on Microsoft's own red team: an inventory is not enough and a graph is essential, and most environments cannot answer the question. What creates the gap is not model capability. It is the state of the records an organization keeps about its own systems.

▶ Read: https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Microsoft #MDDR #AISecurity #VulnerabilityManagement #AISI #JADEPUFFER

---

## Twitter/X (KO)

권고는 72시간, 실측은 30~60일. 마이크로소프트가 자기 보고서 같은 쪽에 나란히 적어 둔 두 값이다.

늦는 까닭으로 보고서가 든 것은 보안 예산이 아니라 시험 체계의 부재다. 고친 코드를 빨리 내보내지 못한다는 것이다.

▶ https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/ko/

#페블러스 #Microsoft #취약점관리 #데이터품질

---

## Twitter/X (EN)

Microsoft's own guidance says 72 hours. Microsoft's own measurement says 30 to 60 days. Both sit on the same page of the same report.

The reason given for the delay is not the security budget. It is missing tests, so fixed code cannot ship fast.

▶ https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/en/

#Pebblous #Microsoft #VulnerabilityManagement #DataQuality

---

## Facebook (KO)

누가 한 번 띄워 놓고 내리지 않은 서버가 회사마다 몇 대쯤은 있습니다.

지난 7월에 처음으로 문서화된 자동화 랜섬웨어 갈취 사건의 입구가 그런 자리였습니다.

인터넷에 그대로 열려 있던 오픈소스 도구 인스턴스였고, 이미 번호까지 붙어 있던 취약점이 고쳐지지 않은 채 남아 있었습니다.

보안기업 시스디그가 그 사건을 문서화하고 JADEPUFFER라 이름 붙였습니다. 피해 조직은 한 곳, 설정 항목 1,342개가 든 운영 데이터베이스였습니다.

석 달 뒤 마이크로소프트는 연차 보고서에서 그 활동과 요소를 공유하는 침입을 관측했으며 물량은 적다고 적으면서, 한 문장을 덧붙였습니다. 초기 침투는 일관되게 인터넷에 노출된 채 알려진 취약점이 남아 있는 서비스에서 시작됐다는 것입니다.

공격 쪽이 자율 에이전트를 썼는지 아닌지와 무관하게, 들어온 문은 장부에 없던 문이었습니다. 저는 이것을 '장부에 없는 문'이라고 불러 보고 있습니다.

같은 보고서에 그런 문이 얼마나 오래 열려 있는지도 적혀 있습니다. 인터넷에 노출된 중대 취약점을 기업이 고치는 데 걸리는 중앙값이 한 달에서 두 달 사이입니다. 마이크로소프트 자신이 같은 문서에서 권고한 시한은 72시간입니다.

늦는 까닭을 보고서는 게으름으로 설명하지 않습니다. 많은 시스템에 견고한 단위 시험과 통합 시험이 없어 코드 변경을 빠르게 배포하지 못한다고 적었습니다. 보안 도구가 모자라서가 아니라 고친 것을 내보내는 공정이 느려서라는 뜻입니다.

자사 레드팀 절에는 더 멀리 간 문장이 있습니다. 목록으로는 부족하고 도달 관계를 그린 그래프가 필수라는 것, 그리고 대부분의 환경은 그 질문에 답하지 못한다는 것입니다.

"오늘 인터넷에 노출돼 있는 우리 자산이 전부 몇 개이고, 각각 어느 버전입니까?"

이 답이 돌아오는 데 며칠이 걸린다면, 권고 시한은 식별 단계에서 이미 지나 있습니다.

페블러스가 이 보고서를 오래 들여다본 이유도 여기에 닿습니다. 데이터 품질 문제는 보통 모델 성능으로 나타난다고들 하는데, 보안에서는 그것이 노출 시간으로 나타납니다. 자산 기록이 얼마나 정확하고 최신인가가 공격자에게 남는 시간의 길이를 정합니다.

보고서는 공격자가 이겼다고 말하지 않습니다. 균형은 결국 다시 세워질 것이고, 관측된 캠페인 대부분은 여전히 사람이 지휘한다고 적었습니다.

다만 알려졌지만 고쳐지지 않은 취약점이 쌓이는 국면이 여러 해에 걸칠 수 있다고도 적었습니다. 그 두 문장은 함께 서 있습니다.

▶ 전문: https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/ko/

#페블러스 #Microsoft #디지털디펜스리포트 #데이터품질 #데이터클리닉 #AI보안 #자산가시성

---

## Facebook (EN)

Most companies have a server or two that somebody stood up once and never took down.

That is where the first documented case of automated ransomware extortion began, in early July.

An open-source tool left facing the open internet, carrying a vulnerability that already had a number on it and no fix applied.

Sysdig documented the case and named it JADEPUFFER. One victim organization: an operational database holding 1,342 configuration entries.

Three months later Microsoft's annual report said it had observed intrusions sharing elements with that activity, at low volume, and added one sentence. Initial access came consistently through internet-exposed services running known, unpatched vulnerabilities.

Whether or not an autonomous agent was driving, the door they came through was a door nobody had written down. I have started calling it a door off the ledger.

The same report says how long such doors tend to stay open. The median for an enterprise to remediate an internet-exposed critical vulnerability runs between one and two months. Microsoft's own guidance, in the same document, is 72 hours.

The report does not explain the delay as negligence. Many systems have no robust unit or integration testing, it says, so code changes cannot be deployed quickly. The slow part is not the security tooling. It is the pipeline that ships the fix.

In the section on its own red team there is a line that goes further. An inventory is not enough and a graph is essential, and most environments cannot answer the question.

"How many of our assets are exposed to the internet today, and what version is each one running?"

If that answer takes days to come back, the 72 hours are spent before anyone starts fixing anything.

This is the part of the report I keep returning to. Data quality problems are supposed to surface as model performance. In security they surface as exposure time. How accurate and how current the asset records are decides how much time an attacker is left with.

The report does not say the attackers have won. The balance will be restored, it says, and most observed campaigns are still directed by people.

It also says the backlog of known but unfixed vulnerabilities could keep building for years. Those two sentences stand together.

▶ Full piece: https://blog.pebblous.ai/report/microsoft-digital-defense-report-2026-ai-attackers/en/

#Pebblous #Microsoft #MDDR #DataQuality #DataClinic #AISecurity #AssetVisibility
