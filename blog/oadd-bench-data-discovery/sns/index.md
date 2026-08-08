# SNS 홍보 글: AI 에이전트가 연구 질문에 맞는 데이터 열을 절반도 못 찾는다

> 소스: blog/oadd-bench-data-discovery/ko/index.html
> 생성일: 2026-08-09
> URL: https://blog.pebblous.ai/blog/oadd-bench-data-discovery/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

가장 좋은 LLM 에이전트가 연구 질문에 필요한 데이터 열의 46.5%만 찾아냈습니다.

8월 6일 arXiv에 공개된 OADD-Bench는 미국 고령자 패널조사 HRS를 쓴 실증 논문 111편을 거꾸로 읽어 만든 벤치마크입니다. 논문에서 연구 질문 160개를 뽑되 실제로 쓰인 필드 이름은 지웠고, 각 질문에 필요한 정답 열 목록만 남겼습니다.

어려운 이유는 어휘가 아닙니다. HRS에는 '사회적 고립'이라는 열이 없고, 실제 논문들은 가구원 수와 자녀와 떨어진 거리, 종교 활동 참여 같은 항목을 함께 묶어 그 개념을 쟀습니다. 따로 놓으면 고립과 무관해 보이는 항목들입니다.

평가 조건은 너그러웠습니다. 정답 개수의 다섯 배까지 후보를 내도 된다고 허용했는데도 필요한 열을 빠짐없이 찾아낸 질문은 160개 중 50개였습니다. 모델을 키우면 성적은 올라갔지만 가장 큰 모델도 절반 아래에 머물렀습니다.

에이전트는 코드북과 컬럼 설명을 직접 훑고도 절반을 놓쳤습니다. 설명이 충실해도 이 데이터로 무엇을 잴 수 있는지가 적혀 있지 않으면 데이터는 에이전트에게 보이지 않습니다. 페블러스가 AI-Ready Data를 이야기할 때 품질만큼 맥락을 함께 놓아 온 것도 같은 자리입니다.

▶ 전문: https://blog.pebblous.ai/blog/oadd-bench-data-discovery/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #데이터카탈로그 #OADDBench #데이터발견 #AI에이전트 #LLM

---

## LinkedIn (EN)

The best LLM agent in a new benchmark recovered 46.5% of the data columns a research question actually needs.

OADD-Bench, posted to arXiv on August 6 by Houming Chen and H. V. Jagadish, was built by reverse-engineering 111 published studies that used the US Health and Retirement Study. The team extracted 160 research questions from those papers, hid the field names the authors had used, and kept only the columns each question required.

The difficulty is not vocabulary. HRS has no column called social isolation. The papers measured it by combining household size, distance from adult children, religious attendance and volunteering, four items that look unrelated to isolation until they are bundled.

The scoring was generous. Each method was allowed to return five times as many candidates as there were correct columns, and even then only 50 of the 160 questions came back complete. Larger models scored higher without ever climbing above half.

The agents read the codebook and the column descriptions directly. What was missing was not a record of what each column contains, but any record of which concepts those columns can measure. It is the same reason Pebblous puts context next to quality whenever it defines AI-Ready Data.

▶ Read: https://blog.pebblous.ai/blog/oadd-bench-data-discovery/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #DataCatalog #OADDBench #DataDiscovery #AIAgent #LLM

---

## Twitter/X (KO)

HRS 데이터에는 '사회적 고립'이라는 열이 없습니다. 연구자들은 가구원 수와 종교 활동 참여 같은 항목을 묶어 그 개념을 쟀습니다.

새 벤치마크 OADD-Bench에서 가장 좋은 LLM 에이전트는 이런 정답 열의 46.5%만 찾아냈습니다. 컬럼 설명이 충실해도, 이 데이터로 무엇을 잴 수 있는지가 적혀 있지 않으면 에이전트는 찾지 못합니다.

https://blog.pebblous.ai/blog/oadd-bench-data-discovery/ko/

#페블러스 #OADDBench #데이터발견 #AIReadyData

---

## Twitter/X (EN)

The HRS dataset has no column called social isolation. Researchers measured it by bundling household size, religious attendance and a few other fields that look unrelated on their own.

On the new OADD-Bench, the best LLM agent found 46.5% of those columns. Good column descriptions are not enough when what the data can measure is written nowhere.

https://blog.pebblous.ai/blog/oadd-bench-data-discovery/en/

#Pebblous #OADDBench #DataDiscovery #AIReadyData

---

## Facebook (KO)

카탈로그 검색창에 '사회적 고립'을 넣고 결과가 0건으로 뜨는 장면을 떠올려 봅니다.

데이터가 없어서가 아닙니다. 미국의 대표적인 고령자 패널조사에 그 이름의 열이 없을 뿐, 이 데이터로 노년기 고립을 다룬 논문은 이미 수백 편이 나와 있습니다.

연구자들은 가구원 수를 보고, 자녀와 떨어져 사는 거리를 보고, 종교 활동과 자원봉사 참여를 함께 봤습니다. 따로 놓으면 고립과 아무 상관 없어 보이는 네 항목이 함께 묶이는 순간 하나의 측정이 됩니다.

며칠 전 공개된 OADD-Bench는 그 묶는 일을 에이전트에게 맡겨 본 첫 잣대입니다. 논문 111편을 거꾸로 읽어 정답지를 만들고, 정답 개수의 다섯 배까지 후보를 내도 좋다고 허락했습니다. 가장 좋은 에이전트가 찾아온 것은 절반이 채 되지 않았습니다.

숫자보다 오래 남은 것은 실패의 모양이었습니다. 에이전트는 혈액검사 필드 열 개가 필요하다는 데까지는 도달하고 여섯 개만 담아 옵니다. 방향은 맞았는데 끝까지 채우지 못합니다. 조합이 불완전하면 척도 자체가 성립하지 않으니, 그 여섯 개는 절반의 성공이 아니라 그냥 실패입니다.

그래서 남는 질문은 단순합니다. "우리 데이터로 무엇을 잴 수 있는지가, 데이터 옆에 적혀 있는가?"

컬럼 설명과 태그는 이 열이 무엇인지에 답합니다. 무엇을 잴 수 있는지는 다른 층의 기록입니다. 지금까지 그 기록은 논문 안에, 그리고 그 데이터를 오래 다뤄 온 사람의 머릿속에 있었습니다. 페블러스가 AI-Ready Data를 이야기할 때 품질만큼 맥락을 함께 놓아 온 것도 그 자리에 가깝습니다.

이제 데이터를 읽으러 오는 쪽에 에이전트가 들어왔습니다. 사람의 기억에만 남아 있는 판단은, 에이전트에게는 없는 것과 같습니다.

https://blog.pebblous.ai/blog/oadd-bench-data-discovery/ko/

#페블러스 #데이터클리닉 #데이터품질 #OADDBench #AIReadyData #데이터발견

---

## Facebook (EN)

Picture someone typing "social isolation" into a data catalog and getting nothing back.

The data is there. The column is not. The long-running US panel study that gerontologists depend on has no field by that name, and hundreds of published papers have still measured isolation in older adults with it.

They read household size, then how far away the adult children live, then religious attendance, then volunteering. Four items that look unrelated to isolation on their own become one measure the moment they are bundled.

OADD-Bench, released a few days ago, is the first yardstick for handing that bundling work to an agent. The team turned 111 published studies into an answer key and let every method return five times as many candidate columns as there were correct ones. The best agent still came back with less than half.

What stayed with me was the shape of the failure. The agent works out that a blood panel of ten fields is needed and brings back six. The direction is right and the job is unfinished. An incomplete bundle is not a partial measure; it is no measure at all.

So the question that remains is a plain one. "Is what our data can measure written down anywhere near the data?"

Column descriptions and tags answer what a field contains. What a field can measure belongs to a different layer, and until now that layer has lived inside published papers and inside the heads of people who have worked with the data for years. It is close to why Pebblous keeps context beside quality whenever it talks about AI-Ready Data.

Now an agent has joined the readers. A judgment that exists only in someone's memory is, to an agent, a judgment that does not exist.

https://blog.pebblous.ai/blog/oadd-bench-data-discovery/en/

#Pebblous #DataClinic #DataQuality #OADDBench #AIReadyData #DataDiscovery
