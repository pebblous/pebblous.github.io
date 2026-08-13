# SNS 홍보 글: 평가 문서의 모델이 지금 서빙된다고 증명한 사업자는 없었다

> 소스: report/silent-model-updates-disclosure-gap/ko/index.html
> 생성일: 2026-08-14
> URL: https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/ko/
> voice: LinkedIn·Twitter=sns-cover / Facebook=reflective

---

## LinkedIn (KO)

시스템 카드가 평가한 그 모델이 지금 내 API 호출에 응답하는 모델과 같은지, 조사 대상 아홉 곳 어디에서도 확인할 방법이 없었다.

AIES-26에 채택된 논문 Silent Updates가 1차 API 제공자 아홉 곳과 추론 호스트 일곱 곳의 배포 후 공개 관행을 29개 문항으로 채점했다. 문서가 없어서 생긴 결과가 아니다. 대부분이 전용 체인지로그를 운영하고 정량 안전성 지표도 공개한다. 빠진 것은 그 문서와 지금 서빙되는 산출물을 잇는 고리다.

파인튜닝, 분류기 교체, 시스템 프롬프트 수정, 검색 소스 변경, 라우팅 변경. 다섯 경로 모두 모델 식별자를 건드리지 않고 행동을 바꾼다. 논문이 든 가장 선명한 사례는 DeepSeek의 deepseek-chat이다. 이름은 19개월 동안 그대로였고, 그 아래 서빙된 산출물은 열 번 바뀌었다.

표본은 16곳이고 저자들도 결과를 예비적이라고 표기했다. 기술이 없어서 생긴 공백도 아니다. Replicate는 배포마다 콘텐츠 해시를 붙이고 과거 버전을 API로 계속 조회하게 해 두었다.

논문이 이 상태에 붙인 이름은 검증 없는 투명성이다. 규제가 요구하는 문서는 계속 늘어나는데, 그 문서가 지금 응답하는 산출물을 가리킨다는 확인은 사업자가 열어 주기 전까지 외부에 없다. 계측을 자기 쪽에 둔 조직만 이 질문에 짐작이 아니라 기록으로 답할 수 있다.

▶ 전문: https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI거버넌스 #데이터거버넌스 #SilentUpdates #AIES26 #DeepSeek #EUAI법

---

## LinkedIn (EN)

Nine major model providers publish safety evaluations. Not one of them gives an outsider a way to confirm that the evaluated model is the one answering their API calls.

Silent Updates, a paper accepted to AIES-26, scored post-deployment disclosure at nine first-party API providers and seven third-party inference hosts across 29 questions. Missing documentation is not the finding. Most of the providers run a dedicated changelog and publish quantitative safety metrics. What none of them publishes is the link between the document and the artifact being served.

Fine-tuning, classifier swaps, system prompt revisions, retrieval changes, routing changes. Each one alters behavior without touching the model identifier. The paper's sharpest case is DeepSeek's deepseek-chat: the name held for 19 months while the artifact behind it moved through ten documented releases.

The sample is 16 providers and the authors label their results preliminary. This is also not a capability gap. Replicate identifies every deployment by content hash and keeps past versions callable through the API.

The authors call the state of things transparency without verifiability. Regulation keeps adding to the pile of documents, and nothing in it requires that the pile be matched to what is actually being served. Until providers open that link, only organizations that keep the measurement on their own side can answer with a record rather than a guess.

▶ Read: https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIGovernance #DataGovernance #SilentUpdates #AIES26 #DeepSeek #EUAIAct

---

## Twitter/X (KO)

deepseek-chat이라는 이름은 19개월 동안 고정이었고, 그 아래 서빙된 산출물은 열 번 바뀌었다.

시스템 카드가 평가한 모델과 지금 응답하는 모델이 같다는 것을 외부에서 확인하게 해 둔 사업자는 없었다. 논문의 표현으로는 검증 없는 투명성이다.

https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/ko/

#페블러스 #데이터품질 #AI거버넌스 #SilentUpdates #DeepSeek

---

## Twitter/X (EN)

The name deepseek-chat stayed fixed for 19 months. The artifact served under it moved through ten releases.

No provider in the sample lets an outsider confirm that the model in the safety document is the model answering now. The paper's term for this: transparency without verifiability.

https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/en/

#Pebblous #DataQuality #AIGovernance #SilentUpdates #DeepSeek

---

## Facebook (KO)

"어제는 답하던 질문을 오늘은 거절하는데요."

팀 채널에 이런 메시지가 올라오면 대개 프롬프트를 먼저 의심합니다. 코드를 뒤지고, 파라미터를 확인하고, 마지막으로 모델 이름을 봅니다.

이름은 어제와 같습니다.

대화는 거기서 멈춥니다. 더 확인할 것이 없기 때문입니다.

이 멈춤이 한 팀의 사정이 아니라는 계측이 이번 주 arXiv에 올라왔습니다. AIES-26에 채택된 논문 Silent Updates는 API 제공자 아홉 곳과 추론 호스트 일곱 곳을 29개 문항으로 채점했습니다. 시스템 카드가 평가한 모델과 지금 서빙되는 산출물이 같다는 것을 외부에서 확인할 수 있게 해 둔 곳은 그중 없었습니다.

문서가 부족해서가 아닙니다. 체인지로그도 있고, 정량 안전성 지표도 공개되어 있습니다. 비어 있는 것은 그 문서와 지금 응답하는 산출물을 잇는 한 줄입니다. 저는 이 빈자리를 '이름의 계보'라고 불러 보고 싶습니다.

이름의 계보가 비어 있으면 어떤 일이 벌어지는지, 논문이 든 사례가 선명합니다. deepseek-chat이라는 식별자는 19개월 동안 그대로였고, 그 아래에서 서빙된 산출물은 열 번 바뀌었습니다. 논문이 몰래 알아낸 것도 아닙니다. DeepSeek 자신이 공개한 릴리스 노트를 시계열로 이어 붙인 결과입니다. 기록은 있었고, 그 기록이 우리가 호출하는 이름에 결속되지 않았을 뿐입니다.

그래서 자꾸 걸리는 물음은 이것입니다. "지금 응답한 그 모델이, 우리가 안전하다고 읽은 문서의 그 모델인가?"

페블러스가 데이터의 계보를 계측해 온 이유도 여기서 만납니다. 카탈로그에 적혀 있다는 사실은 감사에 대한 답이 되지 못합니다. 감사가 묻는 것은 목록의 그 항목이 지금 쓰이는 그 데이터라는 증명이고, 데이터 계층은 그 질문에 콘텐츠 해시와 버전 핀으로 답해 왔습니다. 모델 계층에는 아직 그 답이 없습니다. 기술이 없어서는 아닙니다. Replicate는 배포마다 콘텐츠 해시를 붙여 과거 버전을 계속 조회하게 해 두었습니다.

데이터 쪽에서 배운 것이 하나 있다면, 이 확인은 사후에 복원되지 않는다는 사실입니다. 서빙되는 그 순간에 남기지 않으면, 남지 않습니다.

▶ 전문: https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/ko/

#페블러스 #데이터클리닉 #AI거버넌스 #SilentUpdates #DeepSeek #EUAI법

---

## Facebook (EN)

"It answered this yesterday. Today it refuses."

When that line lands in a team channel, the prompt is usually the first suspect. Then the code, then the parameters, and last of all the model name.

The name is the same as yesterday.

And the conversation stops there, because there is nothing left to check.

A measurement of that same stopping point went up on arXiv this week. Silent Updates, accepted to AIES-26, scored nine API providers and seven inference hosts against 29 questions. Not one of them had left an outsider a way to confirm that the model in its system card is the artifact being served today.

The shortage is not documentation. The changelogs exist. So do the quantitative safety metrics. What is missing is the single line that ties those documents to the thing answering right now. I have come to think of that empty space as the provenance of a name.

The paper's clearest case shows what the empty space costs. The identifier deepseek-chat held steady for 19 months while the artifact behind it moved through ten releases. Nothing here was uncovered in secret. It was reconstructed from DeepSeek's own release notes, laid out in order. The record existed. It was simply never bound to the name we call.

So one question keeps catching. "The model that just answered — is it the model in the document we read and trusted?"

This is where Pebblous meets a habit it has long practiced: measuring where data came from. An entry in a catalogue is not an answer to an audit. What an audit asks is whether that entry is the data in use right now, and the data layer learned to answer with content hashes and version pins. The model layer has no such answer yet, and not for want of the technology. Replicate identifies each deployment by content hash and keeps every past version callable.

If the data layer taught us one thing, it is that this kind of confirmation cannot be restored after the fact. What is not recorded at the moment of serving is not there later.

▶ Read the full report: https://blog.pebblous.ai/report/silent-model-updates-disclosure-gap/en/

#Pebblous #DataClinic #AIGovernance #SilentUpdates #DeepSeek #EUAIAct
