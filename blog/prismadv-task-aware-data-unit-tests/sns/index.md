# SNS 홍보 글: 다운스트림 코드를 읽어 데이터 검증 규칙을 만드는 PrismaDV

> 소스: blog/prismadv-task-aware-data-unit-tests/ko/index.html
> 생성일: 2026-08-12
> URL: https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

안전했던 데이터 배치 827건 가운데 693건을 데이터 품질 테스트가 막아 세웠다.

CIKM 2026 데모 논문의 PrismaDV가 기존 도구와 같은 조건에서 재 본 수치다. 같은 판정에서 이 시스템이 막은 정상 배치는 112건이었다. 만든 사람 중 한 명은 데이터 분포에서 제약을 뽑는 방식을 대표하는 Deequ 논문의 제1저자 제바스티안 셸터다.

차이는 정확도가 아니라 입력에 있다. 데이터셋만 프로파일링해 결측률과 값 범위를 추천하는 대신, 그 데이터를 받아 쓰는 과업 코드에서 어느 칼럼이 읽히고 어디서 나눗셈과 분기에 쓰이는지를 따라가 제약을 합성한다. 상태가 완료인 레코드는 이메일이 있어야 한다는 조건은 데이터 분포가 아니라 분기문 한 줄에 적혀 있다.

대가도 분명하다. 오탐을 줄인 구성은 해로운 배치 673건 중 305건을 그냥 통과시켰고, 시제품은 아직 파일 하나와 테이블 하나를 쓰는 과업 범위에 머물러 있다.

그래도 좌표 하나가 움직인다. 이 배치가 이 과업을 깨뜨리는지 묻기 시작하면 품질 점수는 데이터셋의 속성이 아니라 데이터와 과업의 쌍에 붙고, AI-Ready 여부를 판정하는 자리도 데이터 팀의 규칙 목록에서 사용처의 코드로 옮겨 간다.

▶ 전문: https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PrismaDV #Deequ #AIReadyData #데이터검증

---

## LinkedIn (EN)

A data quality test blocked 693 of the 827 batches that were perfectly safe.

That figure comes from PrismaDV, a CIKM 2026 demo paper, measuring incumbent tooling under its own benchmark. On the same 1,500 verdicts, PrismaDV blocked 112 safe batches. One of its authors is Sebastian Schelter, first author of the Deequ paper that made distribution-derived constraints the default.

The difference is not accuracy but what goes in. Rather than profiling a dataset and recommending null rates and value ranges, the system reads the downstream task code, finds which columns are actually consumed, and follows them into the divisions and branches that impose real requirements. The rule that a completed record must carry a valid email is written in one branch of the code, nowhere in the data distribution.

The cost is just as clear. The configuration that cut false alarms waved through 305 of 673 harmful batches, and the prototype still covers only tasks that read a single file and a single table.

Still, one coordinate moves. Once you ask whether this batch breaks this task, a quality score stops being a property of the dataset and becomes a property of the dataset-task pair, which shifts the verdict on AI-readiness from the data team's rule list to the code that consumes the data.

▶ Read: https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PrismaDV #Deequ #AIReadyData #DataValidation

---

## Twitter/X (KO)

안전했던 배치 827건 중 693건을 데이터 품질 테스트가 막아 세웠다.

PrismaDV는 데이터만 훑는 대신 그 데이터를 쓰는 과업 코드를 함께 읽어 제약을 만든다. 결측률로는 안 보이던 조건이 분기문 한 줄에 적혀 있었다.

▶ https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/ko/

#페블러스 #PrismaDV #Deequ #데이터품질

---

## Twitter/X (EN)

A data quality test blocked 693 of 827 batches that were perfectly safe.

PrismaDV reads the task code that consumes the data, not just the data. The condition no null rate could see was written in a single branch.

▶ https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/en/

#Pebblous #PrismaDV #Deequ #DataQuality

---

## Facebook (KO)

"테스트는 통과했는데, 배치 작업이 죽었습니다."

논문은 인수합병 뒤의 흔한 장면에서 시작합니다. 큰 여행사가 예약 앱 스타트업을 사들이고, 데브옵스 팀이 그 서비스를 회사 데이터 레이크에 붙입니다. 주말 장애에 지친 팀은 데이터 유닛 테스트를 걸어 둡니다.

그다음 사흘 밤이 이렇게 흘러갑니다.

첫째 밤, 테스트가 통과시킨 배치에서 메일 발송 작업이 멈췄습니다. 둘째 밤, 멀쩡한 배치를 테스트가 낯설다며 격리했습니다. 셋째 밤, 사람이 판단해 통과시킨 배치가 모델 학습을 멈췄습니다.

세 번의 원인은 전부 데이터 쪽에 없었습니다. 분기문 하나, 코드가 이미 처리하고 있던 예외 값 하나, 나눗셈 한 줄.

"이 데이터가 깨끗한가?"

이 질문은 그 데이터로 무엇을 하는지 정하지 않으면 닫히지 않는 질문인 것 같습니다. 같은 테이블이 일일 리포트에는 안전하고 모델 학습에는 치명적일 수 있으니까요.

그래서 이 논문은 검증 도구에 입력을 하나 더 줍니다. 데이터 표본과 함께 그 데이터를 받아 쓰는 과업 코드를 읽히고, 거기서 '과업을 아는 테스트'를 합성합니다.

숫자 하나만 옮겨 적겠습니다. 기존 도구는 안전했던 배치 827건 가운데 693건을 막아 세웠습니다. 여덟 번 중 여섯 번 헛경보를 울리는 테스트는 며칠 안에 꺼지고, 꺼진 규칙은 대개 다시 켜지지 않습니다.

데이터 품질 현장에서 자주 보는 상황도 규칙이 없는 상태가 아니라, 지쳐서 꺼 둔 규칙이 쌓인 상태였습니다. 페블러스가 DataClinic으로 데이터를 진단할 때 결국 되돌아오는 자리도 여기입니다. 무엇에 쓸 데이터인가.

AI-Ready는 데이터셋에 매기는 등급일까요, 아니면 데이터와 과업 사이의 관계일까요. 요즘 이 질문을 다시 만지고 있습니다.

(시제품은 파일 하나와 테이블 하나를 쓰는 과업 범위에 머물러 있습니다. 오늘 붙일 도구보다는, 판정 기준을 옮기는 제안으로 읽는 편이 맞겠습니다.)

▶ 전문: https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/ko/

#페블러스 #데이터클리닉 #데이터품질 #PrismaDV #Deequ

---

## Facebook (EN)

"The test passed. The job died anyway."

The paper opens on a scene that will feel familiar. A large travel company acquires a booking startup, and the devops team wires the startup's services into the corporate data lake. Tired of weekend outages, they bolt on a set of data unit tests.

Then three nights happen.

Night one: a batch the tests waved through killed the email job. Night two: the tests quarantined a batch that was entirely fine. Night three: a human overrode the tests, let the batch pass, and model training broke.

None of the three causes lived in the data. One branch. One legacy value the code already handled. One division.

"Is this data clean?"

I've come to think that question cannot close until you say what the data is for. The same table can be safe for a daily report and fatal for model training.

So the paper hands the validator a second input. Along with the data sample, it reads the downstream task code, and from the pair it synthesizes what you might call task-aware tests.

One number is enough to carry the point. The incumbent tool blocked 693 of the 827 batches that were actually safe. A test that cries wolf six times out of eight gets switched off within days, and switched-off rules rarely come back on.

What I keep seeing in data quality work is not an absence of rules. It's a pile of rules someone quietly disabled. That's the same place Pebblous keeps arriving at when DataClinic looks into a dataset: what is this data for.

Is AI-readiness a grade you stamp on a dataset, or a relationship between a dataset and a task? I've been turning that one over again this week.

(The prototype still handles tasks that read one file and one table. It reads better as a proposal about where quality gets judged than as something to bolt onto a pipeline today.)

▶ Full piece: https://blog.pebblous.ai/blog/prismadv-task-aware-data-unit-tests/en/

#Pebblous #DataClinic #DataQuality #PrismaDV #Deequ
