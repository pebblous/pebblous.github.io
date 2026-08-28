# SNS 홍보 글: 학습 데이터 출처를 비워 둔 공장용 오픈웨이트 로봇 모델

> 소스: blog/isaac05-open-weight-data-provenance/ko/index.html
> 생성일: 2026-08-28
> URL (KO): https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/ko/
> URL (EN): https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

오픈웨이트라고 발표된 로봇 모델인데, 발표 사흘째에도 가중치 파일은 올라와 있지 않습니다.

메타 FAIR 출신 연구자 두 사람이 세운 Perceptron이 공장과 창고에서 쓸 로봇 파운데이션 모델 Isaac 0.5를 내놓았습니다. 값비싼 원격조종 데이터를 일반 영상 100만 시간으로 상당 부분 갈음했다는 것이 핵심 주장입니다. 기술보고서는 학습 혼합이 529개 소스 스트림에서 왔다는 사실과 성분별 비중을 소수점 한 자리까지 적어 두고도, 그 스트림이 각각 무엇인지는 한 곳도 지목하지 않습니다.

이 공백은 규제 앞에서 서류가 됩니다. EU 인공지능법은 고위험 AI에 학습 데이터의 출처와 수집 절차를 문서로 요구하고, 범용 시스템의 용도를 바꿔 고위험으로 만든 쪽을 공급자로 봅니다. 오픈웨이트 모델을 받아 자기 라인에 맞춰 미세조정하는 순간, 그 빈칸을 채우는 자리에 서는 것은 모델을 공개한 회사가 아니라 그 공장입니다.

지난 6월 다룬 Ai2의 MolmoAct 2는 가중치와 함께 720시간 로봇 데이터를 열었습니다. 그런데 Isaac 0.5의 비교표는 두 모델을 똑같이 Open source: Yes로 적어 둡니다.

페블러스가 DataClinic으로 학습 데이터를 진단해 온 자리에서 보면, 물어야 할 것은 파일이 열렸는지가 아니라 그 파일이 무엇으로 만들어졌는지입니다. 오픈웨이트라는 말에는 아직 눈금이 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Isaac05 #Perceptron #오픈웨이트 #PhysicalAI #EUAIAct #MolmoAct2 #로봇파운데이션모델

---

## LinkedIn (EN)

A robot model announced with open weights still has no weights file, three days on.

Perceptron, a startup founded by two former Meta FAIR scientists, released Isaac 0.5 for factories and warehouses this week. The claim at the center of it is procurement rather than benchmarks: train on a million hours of ordinary video and you need far less of the expensive teleoperation data robots normally learn from. The technical report says the training mixture was drawn from 529 source streams and gives each component's share to one decimal place, and it never identifies a single stream. The words data source, privacy, consent and copyright do not appear anywhere in its 52 pages.

The gap turns into paperwork at the European border. The EU AI Act requires high-risk systems to document where their training data came from, and it treats whoever repurposes a general-purpose system into a high-risk one as the provider. Fine-tune an open-weight model for your own line, and the party filling in that documentation is not the company that published the model. It is your factory.

Ai2's MolmoAct 2, which we covered in June, opened 720 hours of robot data alongside its weights. Isaac 0.5's own comparison table files both models under the same heading: Open source: Yes.

From where Pebblous sits, having spent years diagnosing training data through DataClinic, the question worth asking is not whether the file opened but what the file was made of. The label still has no scale on it.

▶ Read: https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Isaac05 #Perceptron #OpenWeights #PhysicalAI #EUAIAct #MolmoAct2 #RobotFoundationModel

---

## Twitter/X (KO)

Perceptron이 공개한 공장용 로봇 모델 Isaac 0.5는 학습 혼합이 529개 소스 스트림에서 왔다고 밝히면서, 그 스트림이 각각 무엇인지는 적지 않았습니다.

EU 인공지능법 아래에서 그 빈칸을 채우는 쪽은 모델을 공개한 회사가 아니라 모델을 라인에 얹은 공장입니다.

https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/ko/

#페블러스 #데이터품질 #Isaac05 #Perceptron #오픈웨이트

---

## Twitter/X (EN)

Perceptron's factory robot model Isaac 0.5 reports that its training mixture came from 529 source streams, and never says what any of them are.

Under the EU AI Act, the party who fills that blank is not the company that published the model. It is the factory that deploys it.

https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/en/

#Pebblous #DataQuality #Isaac05 #Perceptron #OpenWeights

---

## Facebook (KO)

52쪽짜리 PDF를 열어 놓고 검색창에 data source라고 쳐 봤습니다.

0건이었습니다.

privacy도, consent도, copyright도 같았습니다.

Perceptron이 지난주 공개한 공장용 로봇 모델 Isaac 0.5의 기술보고서입니다. 숫자에 인색한 문서는 아닙니다. 학습 혼합이 529개 소스 스트림에서 왔고, 성분마다 비중이 소수점 한 자리까지 적혀 있습니다. 비어 있는 자리는 그 529개가 각각 무엇이냐는 대목뿐입니다.

이 모델의 핵심 주장이 하필 조달이라 더 그렇습니다. 값비싼 원격조종 데이터를 일반 영상 100만 시간으로 갈음할 수 있다는 것. 그러면 질문 하나가 자연스럽게 남습니다.

"그 100만 시간은 어디서 왔습니까?"

두 달 전 같은 자리에서 Ai2의 MolmoAct 2를 다뤘습니다. 가중치와 함께 720시간 로봇 데이터를 통째로 열었던 모델입니다. 그런데 Isaac 0.5의 비교표에서 두 모델은 같은 칸에 같은 글자로 적혀 있습니다. Open source: Yes.

하나의 체크마크가 서로 다른 두께를 덮고 있는 셈입니다. 저는 이런 상태를 '눈금 없는 오픈'이라고 불러 보고 있습니다.

눈금이 없어도 대개는 넘어갑니다. 유럽 공장에 들어가기 전까지는요. 인공지능법은 고위험 AI에 데이터의 출처를 문서로 요구하는데, 그 문서를 쓰는 자리에 서는 것은 모델을 공개한 회사가 아니라 모델을 라인에 얹은 기업입니다. 채워 넣을 원자료는 공개돼 있지 않은데 말입니다.

페블러스가 AI 학습 데이터를 오래 들여다본 자리도 여기서 멀지 않습니다. 무엇으로 배웠는지 되짚을 수 없는 모델은, 무엇이 잘못됐는지도 되짚기 어렵습니다.

가중치를 여는 일은 이제 어렵지 않습니다. 파일 하나를 올리면 됩니다. 어려운 쪽은 그 파일이 무엇으로 만들어졌는지 한 줄로 적는 일인 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/ko/

#페블러스 #Isaac05 #Perceptron #오픈웨이트 #PhysicalAI #EUAIAct #DataClinic

---

## Facebook (EN)

I opened a 52-page PDF and typed data source into the search box.

Zero results.

Same for privacy. Same for consent. Same for copyright.

The document is the technical report for Isaac 0.5, the factory robot model Perceptron released last week. It is not a stingy document. It says the training mixture came from 529 source streams and gives the share of every component to one decimal place. The only slot left empty is the one that would say what those 529 streams are.

What makes the blank hard to look away from is that the model's central claim is procurement. A million hours of ordinary video, the report argues, can stand in for most of the expensive teleoperation data. Which leaves one question sitting there.

"Where did the million hours come from?"

Two months ago I wrote about Ai2's MolmoAct 2 in this same space, a model that shipped 720 hours of robot data along with its weights. In Isaac 0.5's own comparison table, the two of them sit in one column under the same words. Open source: Yes.

One check mark, covering two very different thicknesses. I have started calling this state "open without a scale."

Most of the time the missing scale costs nothing. Until the model reaches a European factory floor. The AI Act asks high-risk systems to document where their data came from, and the party who ends up writing that page is not the company that published the model but the company that put it on the line. The raw material for that page was never published.

Pebblous has spent years looking at what AI systems learn from, and this is not far from that ground. A model whose data you cannot trace is a model whose failures you cannot trace either.

Opening weights is no longer hard. It takes one file. The hard part, it seems, is writing the single line that says what the file was made of.

▶ Read: https://blog.pebblous.ai/blog/isaac05-open-weight-data-provenance/en/

#Pebblous #Isaac05 #Perceptron #OpenWeights #PhysicalAI #EUAIAct #DataClinic
