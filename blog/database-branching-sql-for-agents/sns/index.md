# SNS 홍보 글: 테이블을 브랜치하고 행 단위로 병합하는 SQL 확장

> 소스: blog/database-branching-sql-for-agents/ko/index.html
> 생성일: 2026-09-06
> URL: https://blog.pebblous.ai/blog/database-branching-sql-for-agents/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

100GB짜리 테이블을 브랜치하는 데 0.20초가 걸렸고, 남은 것은 314KB짜리 메타데이터였다.

MatrixOrigin과 퍼듀대학교 연구진이 9월 2일 arXiv에 올린 Git4Data 논문의 값이다. 관계형 데이터베이스에 브랜치와 병합을 SQL 문장으로 넣자는 제안이고, 구현은 MatrixOne 위에 얇은 해석 층으로 얹혔다. 데이터를 한 줄도 복사하지 않고 스냅숏이 가리키는 오브젝트 목록만 베끼기 때문에 같은 일을 INSERT ... SELECT로 하면 114.6초와 저장 공간 34GB가 든다.

병합은 사용자가 베이스를 지목하지 않아도 공통 조상을 스스로 찾아 3-way로 되돌린다. Git이 순서 있는 텍스트 줄을 어림짐작으로 맞추는 자리에서, 관계형 엔진은 기본키가 행에 신원을 주므로 레코드 단위 재통합을 따로 만들지 않고도 얻는다는 것이 저자들의 설명이다.

수치는 조건을 하나 달고 읽어야 한다. 저자 일곱 명 가운데 여섯이 MatrixOne을 만들어 파는 회사 소속이고, 비교 대상과 실험 환경도 저자들이 골랐다. 그리고 브랜치가 싸지자 병목이 자리를 옮겼다. 수천 개의 투기적 브랜치가 같은 컴퓨트와 입출력을 나눠 쓰는 문제, 그러니까 저장 효율이 아니라 자원 배분이 저자들이 적어 둔 다음 숙제다.

에이전트에게 데이터 쓰기 권한을 여는 순간 필요해지는 것은 더 나은 모델이 아니라 격리된 작업 공간과 되돌릴 수 있는 상태, 그리고 남는 기록이다. 이 논문은 그 셋을 정책 문서가 아니라 스토리지 계층에서 찾는다. 페블러스가 데이터 품질을 진단할 때 되짚기 어려운 쪽도 대개 값 자체가 아니라 그 값이 무엇을 거쳐 왔는지다.

▶ 전문: https://blog.pebblous.ai/blog/database-branching-sql-for-agents/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Git4Data #MatrixOne #DoltDB #AI에이전트 #데이터거버넌스 #AIReadyData

---

## LinkedIn (EN)

Branching a 100 GB table took 0.20 seconds and left 314 KB of metadata behind.

The figure comes from Git4Data, a paper posted to arXiv on 2 September by researchers at MatrixOrigin and Purdue University. It proposes putting branch and merge into a relational database as SQL statements, treating the database as a repository and a table as a versioned object. Nothing is copied except the list of objects the snapshot points at. Building the same table with INSERT ... SELECT takes 114.6 seconds and 34 GB of additional storage.

Merge finds the common ancestor by itself and reconciles three ways, with no need for the user to name a base. Where Git matches ordered lines of text by heuristic, the authors argue, a relational engine gets clean record-level reunification for free, because the primary key already gives each row an identity.

The numbers carry a condition. Six of the seven authors work for the company that builds and sells MatrixOne, and the comparison targets and the test environment were the authors' own choices. And once branching became this cheap, the bottleneck moved. Thousands of speculative branches now compete for the same compute and I/O, which the authors name as the open problem: no longer storage efficiency, but resource governance.

The moment agents get write access to data, what is needed is not a better model but an isolated workspace, a state you can roll back, and a record that stays. This paper looks for all three in the storage layer rather than in a policy document. When Pebblous diagnoses data quality, the part that resists tracing is rarely the value itself. It is what the value passed through.

▶ Read: https://blog.pebblous.ai/blog/database-branching-sql-for-agents/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Git4Data #MatrixOne #DoltDB #AIAgent #DataGovernance #AIReadyData

---

## Twitter/X (KO)

100GB짜리 테이블을 브랜치하는 데 0.20초가 걸렸다. 데이터를 복사하지 않고 스냅숏이 가리키는 오브젝트 목록만 베끼기 때문이다.

에이전트에게 데이터 쓰기 권한을 여는 순간 필요해지는 것은 더 나은 모델이 아니라 되돌릴 수 있는 상태와 남는 기록이다.

▶ https://blog.pebblous.ai/blog/database-branching-sql-for-agents/ko/

#페블러스 #데이터품질 #Git4Data #MatrixOne #AI에이전트

---

## Twitter/X (EN)

Branching a 100 GB table took 0.20 seconds. Nothing is copied except the list of objects the snapshot points at.

The moment agents get write access to data, what is needed is not a better model but a state you can roll back and a record that stays.

▶ https://blog.pebblous.ai/blog/database-branching-sql-for-agents/en/

#Pebblous #DataQuality #Git4Data #MatrixOne #AIAgent

---

## Facebook (KO)

`customers_bak_0904`.

데이터를 고치기 전에 원본을 통째로 복사해 두고 이런 이름을 붙여 본 적이 있으실 겁니다. 정제 스크립트가 어긋나면 돌아갈 자리가 있어야 했으니까요.

사람 한 명이 스냅숏 하나를 붙들고 순서대로 고칠 때는 이 습관으로 충분했습니다.

그런데 고치는 쪽이 에이전트 여럿이 되면 사정이 달라집니다. 어느 정제 전략이 맞는지 미리 알 수 없으니, 에이전트는 하나에 걸지 않고 같은 테이블을 세 갈래로 가른 다음 각각을 끝까지 돌려 봅니다. 갈래마다 원본을 통째로 베끼는 방식이 감당이 될 리 없습니다.

이달 초 arXiv에 올라온 논문이 이 자리를 다룹니다. 데이터베이스를 저장소로 놓고 테이블을 버전 객체로 놓자는 제안입니다. 100GB 테이블을 가르는 데 0.20초가 걸렸고, 남은 것은 314KB였습니다. 한 줄도 복사하지 않고 스냅숏이 가리키는 목록만 베꼈기 때문입니다.

오래 남은 건 그 속도가 아니라 저자들이 마지막 절에 적어 둔 문장이었습니다. 브랜치가 이만큼 싸지고 나니 병목이 자리를 옮겼다는 것. 이제 어려운 쪽은 저장 공간이 아니라 수천 개의 갈래가 같은 컴퓨트를 어떻게 나눠 쓰느냐입니다.

페블러스가 데이터 품질을 진단하며 자주 지나는 자리도 그 옆입니다. 이 데이터가 어디서 와서 무엇을 거쳤는지 되짚을 수 있느냐는 질문인데, 사람이 고칠 때는 이력이 드문드문 남아도 어떻게든 복원됐습니다. 고치는 쪽이 에이전트 여럿이 되면 그 여유가 사라집니다.

"우리 데이터에서 무엇이 시도됐고 무엇이 받아들여졌는지, 지금 어느 계층이 기억하고 있습니까?"

브랜치와 병합을 데이터베이스 안으로 들이는 일은 결국 그 기록을 남기는 자리를 옮기는 일이기도 합니다.

▶ 전문: https://blog.pebblous.ai/blog/database-branching-sql-for-agents/ko/

#페블러스 #Git4Data #MatrixOne #AI에이전트 #데이터거버넌스 #데이터품질 #데이터클리닉

---

## Facebook (EN)

`customers_bak_0904`.

Anyone who has cleaned a production table has made one with a name like that, copying the whole thing before touching the original, because the cleaning script had to have somewhere to fall back to.

When one person holds one snapshot and works through it in order, the habit is enough.

It stops being enough when the editing is done by a fleet of agents. There is no way to know in advance which cleaning strategy is right, so the agent does not commit to one. It splits the same table three ways and runs all three to the end. Copying the whole original for each branch is not a plan that survives that.

A paper posted to arXiv earlier this month sits on exactly that spot. It proposes treating the database as a repository and a table as a versioned object. Splitting a 100 GB table took 0.20 seconds and left 314 KB behind, because nothing was copied except the list of objects the snapshot pointed at.

What stayed with me was not the speed but a line in the closing section. Once branching got that cheap, the bottleneck moved. The hard part is no longer storage. It is how thousands of branches share the same compute.

Pebblous passes near this spot often, diagnosing data quality. Can you trace where this data came from and what it passed through? When people did the editing, a history full of gaps could still be reconstructed somehow. When the editing is done by a fleet of agents, that slack disappears.

"What was tried on our data, what was accepted, and which layer is remembering it right now?"

Bringing branch and merge inside the database is, in the end, a way of moving where that record is kept.

▶ Full piece: https://blog.pebblous.ai/blog/database-branching-sql-for-agents/en/

#Pebblous #Git4Data #MatrixOne #AIAgent #DataGovernance #DataQuality #DataClinic
