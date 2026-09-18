# SNS 홍보 글: 논문 그림 속 실험 기록, AI가 표로 꺼내면 무엇이 빠질까?

> 소스: blog/paper-figures-to-xrd-database/ko/index.html
> 생성일: 2026-09-19
> URL: https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

소재과학 논문 273편의 그림을 훑어 실험 기록을 표로 꺼낸 AI 에이전트가, 최종 기록을 사람이 다시 채점했을 때 근거 없는 값을 한 건도 남기지 않았습니다. 대신 있어야 할 값의 열에 하나를 비워 뒀습니다.

로체스터대 아프난 모스타파·니아즈 압돌라힘, 미국 표준기술연구소 윌리엄 랫클리프, 캘리포니아대 샌타바버라 사이먼 빌린지가 9월 16일 arXiv에 올린 ERAF4XRD입니다. 공개 접근 논문을 걸러 내고, 그 안의 그림 가운데 진짜 X선 회절 그림을 찾아내고, 본문과 표에 흩어진 실험 조건을 22개 항목으로 그 그림에 붙입니다.

정밀도 98.5%가 나온 자리는 프롬프트가 아니라 설계입니다. 연결이 끝나면 값을 만든 에이전트가 남긴 흔적을 전부 지우고, 별도의 검증 에이전트가 원문에서 근거를 새로 찾게 했습니다. 원문에 아예 없던 값 44개가 그 단계에서 걸러졌습니다.

그림자는 재현율 90.7%입니다. 놓친 35건은 고르게 흩어지지 않고 격자상수와 방사선원, 파장, Wyckoff 위치에 몰렸습니다. 그 측정을 다시 해 보려 할 때 가장 먼저 필요한 값들입니다.

비율로 다시 세면 순서가 또 달라집니다. 격자상수는 채점 대상 48개 가운데 10개가 비었고, 논문에 드물게 등장하는 항목일수록 더 자주 비어 있었습니다. 봉우리 위치는 잘 살아남는데 그 봉우리를 만든 조건이 빠지면, 만들어진 데이터베이스는 검색에는 쓸 만해도 재현에는 부족합니다.

그래서 이 연구에서 가장 오래 쓰일 산출물은 98.5%라는 수치가 아니라, 어느 항목이 얼마나 자주 비는지를 세어 공개한 그림입니다. 페블러스가 DataClinic에서 데이터셋을 항목별로 갈라 진단하는 것도 같은 이유입니다. 전체 점수 하나로는 어느 칸을 믿어도 되는지 알 수 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #ERAF4XRD #X선회절 #멀티모달에이전트 #문헌마이닝 #과학데이터재사용 #NIST

---

## LinkedIn (EN)

An agentic system read the figures in 273 materials-science papers to rebuild experimental records as a table, and when people rescored the final records by hand, not one value turned up without evidence behind it. One field in ten that should have been there was blank instead.

The framework is ERAF4XRD, posted to arXiv on 16 September by Afnan Mostafa and Niaz Abdolrahim of the University of Rochester, William Ratcliff of NIST and Simon Billinge of UC Santa Barbara. It screens open-access papers, picks the genuine X-ray diffraction plots out of their figures, and attaches the experimental conditions scattered across body text and tables to each plot as 22 metadata fields.

Precision of 98.5% rests on the design rather than on prompt wording. Once the linking is done, every trace the extraction agent left behind gets deleted, and a separate validation agent has to find its own evidence in the source. That step removed 44 values that appeared nowhere in the source document.

The shadow is recall of 90.7%. The 35 misses did not fall evenly. They gathered in lattice parameters, radiation type, wavelength and Wyckoff positions, which are the first things anyone reaches for when repeating a measurement.

Ranked by rate rather than by volume, the order shifts again: lattice parameters went blank in 10 of 48 scored values, and the fields that appear rarely in papers are the ones that go empty most often. Peak positions survive well, so a database that loses the conditions behind those peaks still serves search while falling short of reproduction.

The most durable output of this work, then, is not the precision figure. It is the chart that counts and publishes how often each field goes empty. Pebblous reads datasets field by field with DataClinic for the same reason: a single overall score never tells you which column you can rely on.

▶ Read: https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ERAF4XRD #XRD #MultimodalAgents #LiteratureMining #MaterialsScience #NIST

---

## Twitter/X (KO)

소재과학 논문 273편의 그림에서 AI 에이전트가 X선 회절 실험 기록을 표로 꺼냈습니다. 사람이 다시 채점했을 때 적어 낸 값은 98.5%가 원문과 맞았고, 근거 없는 값은 한 건도 없었습니다. 대신 있어야 할 값의 열에 하나가 비었고, 빈칸은 실험을 다시 해 보는 데 필요한 조건 쪽에 몰렸습니다.

믿을 만한 데이터는 무엇이 빠졌는지 아는 데이터입니다.

https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/ko/

#페블러스 #데이터품질 #ERAF4XRD #X선회절

---

## Twitter/X (EN)

Agents read the figures in 273 materials-science papers and rebuilt X-ray diffraction records as a table. Hand-rescored, 98.5% of the values they wrote down matched the source and none lacked evidence. But one field in ten came back blank, and the blanks cluster in the conditions you need to run the measurement again.

Data you can trust is data that knows what it is missing.

https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/en/

#Pebblous #DataQuality #ERAF4XRD #XRD

---

## Facebook (KO)

몇 해 전 논문에 실린 회절 그래프 한 장을 다시 쓰려면, 먼저 저자에게 메일을 씁니다.

그 그래프를 만든 숫자를 아직 갖고 계신지 묻는 메일입니다.

답이 오면 운이 좋은 편입니다.

소재과학 논문 273편의 그림을 AI 에이전트로 훑어 X선 회절 실험 기록을 표로 되살린 연구가 9월 16일 arXiv에 올라왔습니다. 로체스터대와 미국 표준기술연구소, 캘리포니아대 샌타바버라 연구진입니다. 되살아난 것은 곡선의 숫자 배열이 아니라, 그 그림이 어떤 조건에서 나온 것인지를 적은 기록입니다.

성적은 두 쪽으로 갈립니다. 최종 기록을 사람이 다시 채점했을 때 적어 낸 값은 98.5%가 원문과 맞았고, 근거 없는 값은 한 건도 없었습니다. 대신 있어야 할 값의 열에 하나가 비어 있었습니다.

정작 중요한 것은 그 빈칸이 어디에 생겼느냐입니다. 빈칸은 고르게 흩어지지 않고 격자상수와 파장처럼 그 실험을 다시 해 보려 할 때 가장 먼저 필요한 값에 몰려 있었습니다. 봉우리 위치는 잘 살아남았습니다. 그 봉우리를 만든 조건이 빠졌습니다.

"우리 표의 빈칸은 없다는 뜻입니까, 못 찾았다는 뜻입니까?"

연구진이 내놓은 것 가운데 가장 오래 쓰일 물건은 98.5%라는 수치가 아니라 '결손 지도'라고 생각합니다. 어느 항목이 얼마나 자주 비는지를 세어 그림으로 공개했으니, 그 데이터베이스를 쓰는 사람은 격자상수 열에 무엇을 기대해야 할지 압니다. 데이터를 진단하는 자리에서 페블러스가 항목마다 따로 재는 것도 그래서입니다. 전체 점수 하나로는 어느 칸을 믿어도 되는지 알 수 없습니다.

비어 있다는 것을 아는 빈칸과, 왜 비었는지 모르는 빈칸은 다시 쓸 수 있느냐에서 전혀 다른 물건입니다.

https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/ko/

#페블러스 #데이터클리닉 #데이터품질 #ERAF4XRD #X선회절 #과학데이터재사용

---

## Facebook (EN)

To reuse a diffraction plot from a paper published years ago, you usually begin by writing to the corresponding author.

You ask whether they still have the numbers behind the curve.

A reply is the lucky outcome.

On 16 September a team from the University of Rochester, NIST and UC Santa Barbara posted a study that sends agents through the figures of 273 materials-science papers and rebuilds the X-ray diffraction records those figures hold. The agents do not bring back the array of numbers inside the curve. They bring back the record of the conditions under which that curve was measured.

The scorecard splits in two. When people rescored the final records by hand, 98.5% of the values written down matched the source, and not one value appeared without evidence behind it. One field in ten that should have been there was simply blank.

The blanks are the part worth pausing on, because they did not scatter. They gathered in lattice parameters and wavelength, the first things you reach for when you want to run the measurement again. Peak positions survived. The conditions that produced those peaks did not.

"Does a blank in our table mean there is nothing, or that nobody found it?"

The most durable thing this team published is not the 98.5%. It is the map of its absences: a chart that counts how often each field goes empty, so that anyone using the database knows what to expect from the lattice-parameter column. That distinction is why Pebblous measures a dataset column by column. One overall score never tells you which column to rely on.

A blank you know about and a blank you cannot explain are entirely different objects once someone tries to use the data again.

https://blog.pebblous.ai/blog/paper-figures-to-xrd-database/en/

#Pebblous #DataClinic #DataQuality #ERAF4XRD #XRD #ScientificDataReuse
