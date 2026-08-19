# SNS 홍보 글: 데이터 정제 에이전트 일곱 중 값을 제대로 고친 건 없었다

> 소스: report/reference-free-data-cleaning-agents-2026-08/ko/index.html
> 생성일: 2026-08-20
> URL: https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

데이터 정제 에이전트 일곱 개를 126회 돌렸다. 오류를 가장 잘 찾아낸 건 언어모델을 한 번도 부르지 않은 결정론적 프로파일링이었다. 금융과 임상과 환경 데이터에 통제된 오염을 심고 잰 탐지 F1이 0.561, 능력을 전부 켠 LLM 구성이 0.421이다.

그런데 순위표는 이 실험의 표면이다. 틀린 값을 올바른 값으로 되돌린 비율은 일곱 구성 가운데 여섯이 0.000이었고, 나머지 하나가 0.028이었다. 어디를 고칠지는 알았고 무엇으로 고칠지는 몰랐다.

반전은 안전 쪽에 있다. 탐지에서 앞선 규칙 구성은 멀쩡한 값을 건드린 비율에서도 앞섰다. 안전 위반이 한 건도 없던 가장 정교한 구성은 조심해서가 아니라 수정 결정을 아예 내지 않아서 그랬다. 논문은 이것을 성과가 아니라 보수적 비수정이라고 적는다. 단독 저자 preprint에 20B 오픈웨이트 모델 한 종을 쓴 실험이니 절대 수치를 그대로 옮길 수는 없다.

가져갈 것은 축의 구성이다. 되돌릴 수 있는 스크립트는 실행된 72건이 전부 성공했고 프로버넌스 로그도 구조적으로 남았다. 그런데 결정과 그 결정이 인용한 근거 문장의 어휘 겹침은 0.041에 그쳤다. 임상 감사가 요구하는 세 칸 가운데 원값 보존과 변경 주체는 찼고 변경 사유만 비었다.

페블러스가 DataClinic의 진단 엔진을 뉴로심볼릭 구조로 옮긴 판단도 같은 자리에서 나왔다. 결정론적 신호를 걷어낸 언어모델 단독 구성은 탐지에서 사실상 아무 말도 하지 못했고, 프로파일링 요약을 붙여 주자 23배로 올랐다. 지금 정제 자동화를 고를 때 물어야 할 것은 얼마나 잘 찾느냐가 아니라 무엇을 왜 고쳤는지가 남느냐다.

▶ 전문: https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터거버넌스 #AI에이전트 #프로버넌스 #OpenLineage #EUAIAct #AIReadyData

---

## LinkedIn (EN)

Seven data-cleaning agents were run 126 times. The best error finder never called a language model once. Deterministic profiling scored 0.561 on detection F1 across financial, clinical and environmental datasets seeded with controlled corruption, ahead of the 0.421 posted by the configuration with every capability switched on.

The leaderboard is the surface of this study. Six of the seven configurations replaced a wrong value with the correct one at a rate of 0.000, and the seventh reached 0.028. Knowing where to fix and knowing what to write there were separate problems.

The reversal sits on the safety side. The top detector also led on touching healthy values. The most sophisticated configuration logged zero safety violations only because it issued no repair decision at all, which the paper records as conservative non-repair rather than an achievement. This is a single-author preprint running one 20-billion-parameter open-weight model, so the absolute figures do not travel.

What travels is the shape of the gap. Every reversible script that ran succeeded, 72 of 72, and provenance logs came out structured. Yet the lexical overlap between a decision and the evidence sentence it cited averaged 0.041. Of the three boxes a clinical audit demands, original-value preservation and attribution of the change were filled, and only the reason was left blank.

Pebblous moved the diagnostic engine behind DataClinic to a neuro-symbolic design on the same reading. Strip the deterministic signal away and the LLM-only configuration had almost nothing to say on detection; hand it a profiling summary and its score rose 23-fold. The safeguard in cleaning automation today is not how much a system fixes, but whether a record survives of what it changed and why.

▶ Read: https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataGovernance #AIAgent #Provenance #OpenLineage #EUAIAct #AIReadyData

---

## Twitter/X (KO)

데이터 정제 에이전트 일곱 개를 126회 돌렸더니, 오류를 가장 잘 찾아낸 건 언어모델을 한 번도 부르지 않는 규칙 기반 프로파일링이었다.

순위표보다 그 아래가 중요하다. 틀린 값을 올바른 값으로 되돌린 구성은 사실상 없었다. 찾는 일과 고치는 일은 다른 과제였다.

▶ https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/ko/

#페블러스 #데이터품질 #AI에이전트 #프로버넌스

---

## Twitter/X (EN)

Seven data-cleaning agents, 126 runs. The best error finder never called a language model once. Plain deterministic profiling led on detection.

Under the leaderboard: practically none of the seven replaced a wrong value with the right one. Finding and fixing were separate problems.

▶ https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/en/

#Pebblous #DataQuality #AIAgent #Provenance

---

## Facebook (KO)

센서가 보낸 방사선 수치가 평소의 열 배로 찍혀 있습니다.

장비가 고장 난 걸까요. 아니면 정말 무슨 일이 있었던 걸까요.

확인해 줄 깨끗한 원본은 어디에도 없습니다. 데이터를 고치는 일의 대부분이 사실 이 자리에서 벌어집니다.

레바논의 한 연구자가 그 자리를 그대로 실험 조건으로 삼았습니다. 금융과 임상과 환경 데이터에 오염을 심고, 정제 에이전트 일곱 구성을 126회 돌렸습니다.

오류를 가장 잘 찾아낸 것은 언어모델을 한 번도 부르지 않는 옛날식 규칙 프로파일링이었습니다.

다만 순위표는 이 실험의 표면이었습니다.

일곱 구성 가운데 틀린 값을 올바른 값으로 되돌린 구성이 사실상 없었다는 대목이 그 아래에 있었습니다. 어디가 이상한지는 짚어 냈는데, 그 자리에 무엇을 써넣어야 하는지는 끝내 몰랐습니다.

가장 잘 찾은 구성이 멀쩡한 값을 가장 많이 건드리기도 했습니다. 반대로 안전 위반이 한 건도 없던 구성은, 조심했기 때문이 아니라 아무것도 고치지 않았기 때문에 깨끗했습니다.

되돌릴 수 있는 스크립트는 실행된 것이 전부 성공했습니다. 누가 언제 무엇을 바꿨는지도 기록에 남았습니다.

비어 있던 칸은 하나였습니다. '왜'.

"이 값을 무슨 근거로 고쳤습니까?"

임상 감사가 요구하는 세 칸 가운데 이 칸만 채워지지 않았고, 데이터 계보를 기록하는 표준 어디에도 이 칸을 담을 자리가 없었습니다.

페블러스가 진단과 개선을 굳이 분리해 두는 이유도 여기에 가깝습니다. DataClinic에서 저희가 가장 자주 만나는 것도, 무엇이 잘못됐는지보다 무엇을 왜 바꿨는지가 남지 않은 데이터입니다.

고치는 능력보다 되돌리는 능력이 먼저 자란 것은, 어쩌면 순서가 맞는 일인지도 모르겠습니다.

전문 → https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/ko/

#페블러스 #데이터품질 #프로버넌스 #DataClinic #DataGreenhouse #AI에이전트

---

## Facebook (EN)

A radiation sensor reports a reading ten times its usual level.

Did the instrument fail. Or did something actually happen.

There is no clean original anywhere to tell you. Most of the work of fixing data happens in exactly this position.

A researcher in Lebanon took that position and made it the experimental condition. He seeded corruption into financial, clinical and environmental datasets and ran seven cleaning-agent configurations 126 times.

The best error finder was old-fashioned rule-based profiling that never calls a language model.

The leaderboard, though, was the surface of the study.

Underneath it sat this: practically none of the seven configurations replaced a wrong value with the right one. They worked out where something was off, and never worked out what belonged there instead.

The best finder also touched healthy values more than any other configuration. And the one with zero safety violations was clean not because it was careful, but because it repaired nothing at all.

Every reversible script that ran succeeded. Who changed what, and when, survived in the log.

One box stayed empty. Why.

"On what grounds was this value changed?"

Of the three boxes a clinical audit asks for, only that one went unfilled, and no lineage standard has a place to put it.

That is close to why we keep diagnosis and repair separate at Pebblous. What we meet most often in DataClinic is not data whose errors are hidden, but data where no record survives of what was changed and on what basis.

That the ability to undo matured before the ability to fix may, in the end, be the right order.

Read the full piece → https://blog.pebblous.ai/report/reference-free-data-cleaning-agents-2026-08/en/

#Pebblous #DataQuality #Provenance #DataClinic #DataGreenhouse #AIAgent
