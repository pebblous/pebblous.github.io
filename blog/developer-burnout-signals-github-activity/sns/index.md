# SNS 홍보 글: 개발자가 남긴 기록으로 번아웃을 미리 알 수 있을까?

> 소스: blog/developer-burnout-signals-github-activity/ko/index.html
> 생성일: 2026-09-20
> URL: https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

깃허브에 이미 공개돼 있는 활동 기록만으로 개발자의 번아웃 위험을 월별 점수로 매긴 연구가 9월 16일 arXiv에 올라왔습니다. 설문지를 돌리지도, 당사자에게 묻지도 않습니다.

캐나다 퀸즈대 연구진이 만든 BurnRiSc입니다. 올덴부르크 번아웃 설문이 묻는 두 축, 그러니까 소진과 이탈을 저장소에서 계산할 수 있는 열네 개 신호로 옮겼습니다. 근무시간 밖 활동 비율, 풀 리퀘스트가 머지되기까지 걸린 날수, 월 커밋 수, 리뷰 참여, 이슈에 쓴 글의 어휘 같은 것들입니다. 채점은 절대 기준이 아니라 그 사람 자신의 과거 이력과 견줘 이뤄집니다. 월 커밋 30건이 누구에게는 평소이고 누구에게는 이례적이기 때문입니다.

번아웃을 공개적으로 밝힌 개발자 10명 가운데 6명에게서, 그 고백보다 6~15개월 앞서 점수가 임계값을 넘어 석 달 넘게 머무는 구간이 잡혔습니다. 한 달 치솟은 것은 신호로 세지 않습니다.

한계는 논문이 먼저 적어 두었습니다. 점수를 매긴 대상은 저장소 열 곳의 기여자 68명이고, 가중치 열네 개를 학습시킨 확정 사례는 열 건입니다. 비교군 46명 중 11명도 임계값을 넘었는데, 그들이 헛울린 경우인지 밝히지 않고 지나간 사례인지는 지금 자료로 가를 수 없습니다. 저자들은 이 단계를 타당성 입증이 아니라 실현 가능성 시연이라고 못 박았습니다.

눈여겨볼 곳은 신호 목록입니다. 열네 개 가운데 대부분이 오픈소스 특유의 자료가 아닙니다. 언제 일했는지, 리뷰에 얼마나 들어왔는지, 열어 둔 작업을 끝냈는지, 글이 짧아지고 밋밋해졌는지. 사내 깃 저장소와 이슈 트래커와 메신저에 이미 쌓여 있는 것들입니다. 오픈소스와 다른 점은 하나입니다. 회사 로그는 애초에 공개된 적이 없고, 직원이 그것을 공개했다고 여긴 적도 없습니다.

논문은 이 틀이 다른 사람이 시작하는 평가를 촉발해서는 안 된다고 적었습니다. 같은 점수가 당사자에게 가면 쉬라는 권유가 되고 관리자에게 가면 평가 자료가 되는데, 점수를 만드는 절차는 양쪽이 똑같습니다. 커밋 타임스탬프는 코드가 언제 저장소에 들어왔는지를 기록하려고 찍힌 값입니다. 페블러스는 AI 학습 데이터를 진단하면서 값과 함께 그 값이 무엇을 위해 어떤 조건에서 만들어졌는지를 같이 기록합니다. 수집 목적을 넘어 쓰려면 별도의 근거가 있어야 하고, 대상이 된 사람이 그 사실을 알아야 하기 때문입니다.

▶ 전문: https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #개발자번아웃 #오픈소스 #BurnRiSc #퀸즈대 #깃허브

---

## LinkedIn (EN)

Researchers at Queen's University in Canada have turned activity already public on GitHub into a monthly burnout risk score, in a paper posted to arXiv on September 16. No questionnaire goes out, and nobody gets asked.

The framework is called BurnRiSc. It maps the two dimensions the Oldenburg Burnout Inventory asks about, exhaustion and disengagement, onto fourteen signals a repository can compute: share of activity outside working hours, days from pull request to merge, monthly commit count, review participation, the vocabulary of issue threads. Nothing is scored against an absolute bar. Every signal is measured against the contributor's own history, because thirty commits a month is routine for one person and unusual for another.

Among ten developers who publicly disclosed burnout, six had a stretch, 6 to 15 months ahead of that disclosure, where the score rose above the threshold and stayed there for three straight months. A single spiking month does not count as a signal.

The limits come from the paper itself. The score was run on 68 contributors across ten repositories, and its fourteen weights were fitted on ten confirmed cases. Eleven of the 46 controls crossed the threshold too, and the available data cannot separate false alarms from people who went through it without saying so. The authors call this stage a demonstration of feasibility rather than validation.

The signal list is the part worth a second reading. Most of the fourteen are not specific to open source. When someone worked, how much they turned up in review, whether they finished what they opened, whether their writing got shorter and flatter. These already pile up in internal git repositories, issue trackers, and messaging tools. One thing does differ. Company logs were never public to begin with, and no employee ever considered them published.

The paper states that the framework should not trigger an evaluation initiated by someone else. The same score is a suggestion to rest when it reaches the person and evaluation material when it reaches a manager, while the procedure that produces it is identical either way. A commit timestamp is a value stamped to record when code entered a repository. Pebblous records what a value was made for and under what conditions alongside the value itself, because using data past its collection purpose takes separate grounds, and the person on the receiving end has to know about it.

▶ Read: https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #DeveloperBurnout #OpenSource #BurnRiSc #GitHub

---

## Twitter/X (KO)

깃허브에 이미 공개된 활동 기록만으로 개발자의 번아웃 위험을 월별 점수로 매기는 틀이 arXiv에 올라왔습니다. 설문도, 질문도 없습니다.

번아웃을 공개적으로 밝힌 개발자 10명 가운데 6명에게서, 고백보다 6~15개월 앞서 점수가 임계값을 넘는 구간이 잡혔습니다. 저자들은 이것을 진단 도구가 아니라 실현 가능성 시연이라고 적었고, 남이 시작하는 평가에 써서는 안 된다는 조건도 함께 달아 두었습니다.

https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/ko/

#페블러스 #데이터품질 #BurnRiSc #개발자번아웃

---

## Twitter/X (EN)

A framework posted to arXiv scores a developer's monthly burnout risk from activity already public on GitHub. No survey, nobody asked.

Among ten developers who publicly disclosed burnout, six crossed the alert line 6 to 15 months before saying anything. The authors call it a feasibility demonstration rather than a diagnostic, and write that it should never trigger an evaluation someone else starts.

https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/en/

#Pebblous #DataQuality #BurnRiSc #DeveloperBurnout

---

## Facebook (KO)

새벽 세 시에 커밋이 올라오면, 같은 저장소를 쓰는 사람들은 대개 아무 말도 하지 않습니다.

고맙게 여기기도 하고, 요즘 왜 저러나 싶기도 합니다.

그런데 그 둘 말고 다른 읽기도 가능합니다. 저 사람이 지금 무너져 가는 중일 수도 있다는 읽기입니다.

캐나다 퀸즈대의 세 연구자가 9월 16일 arXiv에 그 읽기를 절차로 적어 올렸습니다. 이름은 BurnRiSc입니다. 깃허브에 이미 공개돼 있는 기록을 열네 갈래로 나눠 뽑고, 그것을 월별 번아웃 위험 점수 하나로 합칩니다. 언제 일했는지, 리뷰에 얼마나 들어왔는지, 열어 놓은 일을 끝냈는지, 글이 짧아지고 밋밋해졌는지. 설문지를 돌리지도 않고 당사자에게 묻지도 않습니다.

번아웃을 공개적으로 밝힌 개발자 10명 가운데 6명에게서, 그 고백보다 6~15개월 앞서 점수가 임계값을 넘어 석 달 넘게 머무는 구간이 잡혔습니다.

다만 이 틀이 가중치를 학습한 확정 사례는 열 건입니다. 저자들은 자기 결과를 타당성 입증이 아니라 실현 가능성 시연이라고 못 박았고, 이 점수가 다른 사람이 시작하는 평가를 촉발해서는 안 된다는 조건을 함께 적어 두었습니다.

조건을 굳이 적어 둔 이유는 오픈소스 바깥에 있습니다. 열네 개 신호를 다시 보면 대부분이 사내 깃 저장소와 이슈 트래커에 이미 쌓여 있는 것들입니다. 오픈소스와 다른 점은 하나입니다. 회사 로그는 애초에 공개된 적이 없고, 직원이 그것을 공개했다고 여긴 적도 없습니다.

2024년 xz 백도어 사건에는 그래서 뒤집힌 교훈이 붙어 있습니다. 지쳐 있던 유지보수자의 상태를 공개된 흔적에서 먼저 읽어 낸 쪽은 도우려던 사람이 아니라, 그 상태를 지렛대로 쓰려던 쪽이었습니다.

"우리 회사에서 누군가의 새벽 커밋은 지금 누구의 화면에 뜹니까?"

저희가 데이터 품질을 이야기할 때 값이 맞는지만큼 자주 따지는 것이 그 값이 무엇을 위해 찍혔는가입니다. 커밋 타임스탬프는 코드가 언제 저장소에 들어왔는지를 기록하려고 찍힌 값입니다. 그 값을 모아 사람의 상태를 짐작하는 일에는 다른 근거가 필요하고, 대상이 된 사람이 그 사실을 알아야 합니다.

평가에 쓰지 않겠다는 말과 평가에 쓸 수 없게 해 둔 규칙은 다릅니다.

점수를 정확하게 만드는 일과 그 점수를 어디까지 써도 되는지 정하는 일은 서로 다른 일입니다. 지금은 앞쪽만 빨리 움직이고 있습니다.

https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/ko/

#페블러스 #데이터클리닉 #데이터품질 #BurnRiSc #개발자번아웃 #데이터거버넌스

---

## Facebook (EN)

A commit lands at three in the morning, and the people sharing that repository usually say nothing about it.

Some of them are grateful. Some wonder what is going on with that person lately.

There is a third reading available, though. That the person is coming apart right now.

Three researchers at Queen's University in Canada wrote that reading down as a procedure and posted it to arXiv on September 16. They call it BurnRiSc. It splits activity already public on GitHub into fourteen separate signals and folds them into one monthly burnout risk score. When someone worked, how much they turned up in review, whether they finished what they opened, whether their writing got shorter and flatter. No questionnaire goes out, and nobody gets asked.

Among ten developers who publicly disclosed burnout, six had a stretch, 6 to 15 months ahead of that disclosure, where the score rose above the threshold and stayed there for three straight months.

The confirmed cases the weights were fitted on number ten. The authors call their own result a demonstration of feasibility rather than validation, and they set down a condition alongside it: this score must not trigger an evaluation that someone else initiates.

The reason for writing that condition sits outside open source. On a second reading, most of the fourteen signals already pile up in internal git repositories and issue trackers. One thing does differ. Company logs were never public to begin with, and no employee ever considered them published.

The xz backdoor of 2024 carries an inverted lesson about this. In that case, the side that first read an exhausted maintainer's state off public traces was not anyone trying to help, but the side looking to use that state as leverage.

"Whose screen does a colleague's 3 a.m. commit land on in this company?"

When we talk about data quality, the question of what a value was stamped for comes up as often as whether the value is correct. A commit timestamp records when code entered a repository. Gathering those timestamps to estimate how a person is doing takes different grounds, and the person on the receiving end has to know about it.

A statement that something will not be used for evaluation and a rule that makes it unusable for evaluation are different things.

Making a score accurate and deciding how far that score may be used are separate jobs, and only the first one is moving quickly.

https://blog.pebblous.ai/blog/developer-burnout-signals-github-activity/en/

#Pebblous #DataClinic #DataQuality #BurnRiSc #DeveloperBurnout #DataGovernance
