# SNS 홍보 글: 보안 탐지 규칙의 예외, 3년 뒤에도 열에 아홉이 남았다

> 소스: blog/detection-rule-exclusion-ratchet/
> 생성일: 2026-09-02
> URL: https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

공개 탐지 규칙 저장소 SigmaHQ에서 지난 9년 동안 예외 조항은 1,642번 추가됐고 304번 걷혔습니다.

오탐이 시끄러우면 담당자가 이 경우는 알리지 말라는 조항을 답니다. 그 결정 하나하나는 대개 옳습니다. 지난달 말 arXiv에 올라온 연구가 그 저장소의 수정 8,234건을 다시 세어 보니, 카플란-마이어 추정으로 예외의 86.7%가 3년 뒤에도 그대로 살아 있었습니다. 생존곡선이 절반까지 내려간 적이 없어 중앙 수명이라는 값 자체가 없습니다.

저자들이 내놓은 설명은 짧습니다. 규칙 검토는 그 규칙이 알람을 울릴 때 시작되는데, 예외는 바로 그 알람을 없앱니다. 자기를 다시 보게 만들 신호를 스스로 지우는 셈입니다.

다만 이 설명은 데이터 모양에 맞춘 저자들의 제안이지 측정된 인과가 아닙니다. 논문은 그 예외가 실제로 틀렸는지까지는 계산할 수 없다고 스스로 선을 긋습니다. 어떤 배포 환경도 관측하지 않았기 때문입니다.

읽는 자리를 옮기면 데이터 품질 부채의 이야기이기도 합니다. 정제 규칙과 검증 규칙, 라벨링 가이드에 붙는 제외 조항도 넣는 절차는 갖춰져 있고 걷어내는 절차는 대개 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #SigmaHQ #탐지규칙 #데이터거버넌스 #오탐

---

## LinkedIn (EN)

Across nine years of SigmaHQ, the public detection rule repository, exclusions were added 1,642 times and withdrawn 304.

When a rule keeps crying wolf, whoever owns it writes a clause saying do not alert in this case. Each of those calls is usually sound. A study posted to arXiv late last month recounted the repository's 8,234 logic-changing revisions and found that 86.7% of exclusions were still in force three years later, by Kaplan-Meier estimate. The survival curve never falls to one half, so there is no median lifetime to report.

The authors' account is compact. Review of a rule begins when the rule fires, and an exclusion stops precisely that alert. It erases the signal that would have brought anyone back to look at it.

That account fits the shape of the data; it is not a mechanism the study measured. The paper is equally clear that it cannot say whether any given exclusion is wrong, because it observed no deployment environment at all.

Read it from the data side and it becomes a story about quality debt. The do-not-check-this-case clauses in cleaning rules, validation rules and labeling guides are added through review, and almost never taken out through anything.

▶ Read: https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SigmaHQ #DetectionEngineering #DataGovernance #FalsePositives

---

## Twitter/X (KO)

오탐이 시끄러워 넣은 탐지 규칙의 예외는 3년 뒤에도 86.7%가 그대로 살아 있습니다. SigmaHQ 9년치 기록을 다시 센 결과입니다.

예외를 넣는 절차는 어디에나 있습니다. 걷어내는 절차는 거의 없습니다.

https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/ko/

#페블러스 #데이터품질 #SigmaHQ #탐지규칙

---

## Twitter/X (EN)

Detection rule exclusions written to quiet a noisy alert: 86.7% are still in force three years later. Nine years of SigmaHQ history, recounted.

Every team has a process for adding one. Almost none has a process for taking one back.

https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/en/

#Pebblous #DataQuality #SigmaHQ #DetectionEngineering

---

## Facebook (KO)

"이 규칙을 당신의 환경에서 쓸 때는 Program Files 폴더를 이것을 사용한다고 당신이 알고 있는 정확한 애플리케이션으로 교체하십시오."

어느 보안 탐지 규칙 파일 안에 이 문장이 적혀 있습니다.

예외를 넣은 사람이, 이 규칙을 가져다 쓸 뒷사람에게 남긴 말입니다. 넓게 열어 두었다는 것도, 어떻게 좁혀야 하는지도 본인이 알고 있었습니다.

그 문장이 붙은 지 3년 반이 지났습니다. 아직 그 자리에 있습니다. 좁힌 사람이 없었을 뿐입니다.

공개 저장소 SigmaHQ의 9년치 수정 이력을 다시 센 연구가 지난달 말 arXiv에 올라왔습니다. 예외를 넣은 일이 1,642번, 걷어낸 일이 304번. 3년 뒤 존속률은 86.7%였습니다.

저자들이 붙인 설명이 오래 남았습니다. 규칙을 다시 보게 되는 계기는 그 규칙이 알람을 울릴 때뿐인데, 예외는 바로 그 알람을 지운다는 것입니다.

저는 이런 것들을 '조용한 예외'라고 불러 보고 있습니다. 잘못 판단해서 위험한 것이 아니라, 아무 소리도 내지 않기 때문에 다시 세어지지 않는 조항들입니다.

데이터 쪽에도 같은 얼굴을 한 조항들이 있습니다. 정제 규칙에 붙은 제외 항목, 검증을 건너뛰게 만든 화이트리스트 한 줄, 라벨링 가이드의 "이 경우는 예외로 둔다"는 문장.

페블러스에서 데이터 품질을 진단할 때 늘 먼저 묻는 것도 무엇이 걸러졌느냐입니다. 남아 있는 데이터의 분포는 대시보드에 보이지만, 규칙이 잘라 낸 구간은 어느 화면에도 나타나지 않습니다.

"우리 파이프라인의 제외 조항들은 지금 무엇을 가리고 있을까요?"

목록이 있는지, 언제 왜 들어왔는지가 적혀 있는지까지는 그래도 챙기는 편입니다. 다시 세어 보는 일이 남습니다.

▸ https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘

---

## Facebook (EN)

"When using this rule in your environment replace the 'Program Files' folder by the exact applications you know use this."

That sentence sits inside a security detection rule, in the file itself.

Whoever wrote the exclusion left it for the next person. They knew they had opened the door wide, and they knew how it should be narrowed.

Three and a half years later the sentence is still there. Nobody narrowed it.

A study recounting nine years of revisions in SigmaHQ, the public rule repository, went up on arXiv at the end of last month. Exclusions added 1,642 times, withdrawn 304. Still in force at three years: 86.7%.

What stayed with me was the authors' account of why. A rule gets looked at again when it fires, and an exclusion is the thing that stops it from firing.

I have started thinking of these as quiet exclusions. Not wrong, necessarily. Just silent, and therefore never recounted.

Data work has clauses with the same face. The exception in a cleaning rule. The one entry added to a whitelist so a check would stop failing. The line in a labeling guide that says this case does not count.

The first question we ask when we diagnose data quality at Pebblous is what got filtered out. The distribution of what remains shows up on a dashboard. The stretch a rule cut away appears on no screen at all.

"What are the exclusions in our pipeline covering right now?"

Keeping the list, and the reason, and the date is the part most teams manage. The recounting is the part still waiting.

▸ https://blog.pebblous.ai/blog/detection-rule-exclusion-ratchet/en/

#Pebblous #DataClinic #DataQuality #DataJournalism
