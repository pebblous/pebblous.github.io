# SNS 홍보 글: 파싱이 아니라 해상도다

> 소스: report/unstructured-to-semantic-layer-pipeline/ko/index.html
> 생성일: 2026-08-06
> URL: https://blog.pebblous.ai/report/unstructured-to-semantic-layer-pipeline/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

문서를 글자로 읽어내는 파싱은 필드 단위로 72.9%까지 맞게 뽑아낸다. 그런데 문서 하나의 스키마를 처음부터 끝까지 온전히 완성하는 비율은 4.6%에 그친다.

정형 데이터는 65%가 "AI에 준비됐다"고 답하는데 비정형 문서는 39%뿐이다. 여기까지는 익숙한 진단이다. 그런데 잘 연결됐다고 답한 소수(27%)가 만든 것은 더 좋은 파서가 아니었다.

병목은 파싱이 아니라 해상도에 있다. 같은 데이터셋에서 도구가 아니라 방법론만 바꿔도 엔터티 매칭 정밀도가 35%에서 95%로 벌어진다.

언제, 어느 버전에서 나온 사실인지에 대한 정보가 없으면 검색이 성공해도 모델은 없는 맥락을 스스로 채워 넣는다. 정작 이 층위의 품질을 재는 산업 표준 지표는 아직 없다.

파일럿을 프로덕션으로 넘기는 손익분기점은 파서를 하나 더 사는 데 있지 않다. 파이프라인의 어느 계층이 얼마나 깨졌는지 측정할 수 있느냐에 있다.

▶ 전문: https://blog.pebblous.ai/report/unstructured-to-semantic-layer-pipeline/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #비정형데이터 #AI에이전트 #엔터티해상도

---

## LinkedIn (EN)

Parsing a document into text now works: field-level extraction hits 72.9% accuracy. Completing a document's full schema end to end, however, succeeds just 4.6% of the time.

Structured data is called "AI-ready" by 65% of organizations; unstructured documents by only 39%. That much is a familiar diagnosis. What the well-connected minority (27%) built, though, was not a better parser.

The bottleneck is resolution, not parsing. On the same dataset, changing the method rather than the tool moves entity-matching precision from 35% to 95%.

Without knowing when a fact was true or which version it came from, retrieval can succeed and the model still fills the gap with context it was never given. There is still no shared industry metric for the quality of this layer.

The line between a stalled pilot and production is not one more parser. It is whether you can measure which layer of the pipeline broke, and how badly.

▶ Read: https://blog.pebblous.ai/report/unstructured-to-semantic-layer-pipeline/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #UnstructuredData #AIagents #EntityResolution

---

## Twitter/X (KO)

문서 파싱은 필드 단위로 72.9% 정확하다. 그런데 문서 하나를 온전히 완성하는 비율은 4.6%.

병목은 파싱이 아니라 엔터티 해상도와 출처다. 파일럿을 프로덕션으로 넘기는 손익분기점이 여기에 있다.

https://blog.pebblous.ai/report/unstructured-to-semantic-layer-pipeline/ko/

#페블러스 #AIReadyData #AI에이전트

---

## Twitter/X (EN)

Document parsing is 72.9% accurate field by field. Completing a whole document? 4.6%.

The bottleneck isn't parsing. It's entity resolution and provenance. That's the real line between a pilot and production.

https://blog.pebblous.ai/report/unstructured-to-semantic-layer-pipeline/en/

#Pebblous #AIReadyData #AIagents

---

## Facebook (KO)

파서를 하나 더 사면 될 줄 알았습니다.

PDF에서 글자는 잘 뽑히는데 정작 에이전트가 엉뚱한 답을 내놓으면, 대개 더 좋은 문서 AI를 찾아 나섭니다.

그런데 숫자를 들여다보면 방향이 조금 이상합니다. 필드 단위로는 72.9%가 맞게 뽑히는데, 문서 하나를 처음부터 끝까지 온전히 완성하는 비율은 4.6%였습니다. 파싱은 잘 되는 것처럼 보이지만, 정작 깨지는 곳은 그다음이었습니다.

같은 이름이 같은 사람인지, 이 사실이 지금도 유효한 버전인지, 어디서 온 것인지. 이 질문들에 답하지 못하면 검색이 성공해도 모델은 빈자리를 스스로 채워 넣습니다. 도구가 아니라 방법을 바꿨을 때 정밀도가 크게 달라진다는 결과를 보며, 문제는 파서가 아니었구나 싶었습니다.

준비된 소수는 파일럿보다 먼저 데이터를 정렬해 둔 사람들이었습니다. 결국 순서의 문제이기도 했습니다.

비정형 데이터가 기계가 읽는 시맨틱 레이어가 되기까지, 어디서 무엇이 깨지는지 조용히 따라가 봤습니다.

#페블러스 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

I used to think the fix was one more parser.

The text comes out of the PDF just fine, but the agent still answers the wrong thing, so you go looking for a better document AI.

Then you sit with the numbers and the direction feels off. Field by field, extraction is 72.9% accurate. Completing a single document from start to finish? 4.6%. Parsing looks solved. What breaks is everything after it.

Is this the same person as that one. Is this fact still the current version. Where did it come from. When those questions go unanswered, retrieval can succeed and the model quietly fills the empty seat on its own. Watching precision swing not when the tool changed but when the method did, I realized the parser was never the problem.

The ones who were ready had aligned their data before the pilot, not after. It was partly a question of order.

I followed the path, quietly, of how unstructured data becomes a layer a machine can actually read, and where it breaks along the way.

#Pebblous #DataClinic #AIReadyData
