# SNS 홍보 글: 중국 모델에 보낸 요청이 사용자 몰래 클로드로 재전송됐다

> 소스: report/api-conversation-log-provenance-2026-09/ko/index.html
> 생성일: 2026-09-14
> URL: https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/ko/
> voice: sns-cover (LinkedIn/Twitter/Medium) · reflective (Facebook)

---

## LinkedIn (KO)

앤트로픽이 9월 10일 공개한 보고서에서 새로운 것은 증류의 규모가 아니었다. 몇몇 중국 AI 랩이 자기 사용자가 보낸 요청을 그 사용자 몰래 클로드로 돌려 왔다는 기록이었다.

지목된 랩은 일곱 곳이다. 널리 인용된 "2억 건"은 앤트로픽이 낸 총계가 아니다. 매체가 랩별 수치를 더해 만든 값이고, 원문에는 합산된 수가 나오지 않는다.

보고서가 가른 경로는 셋이다. 훔친 카드로 만든 가짜 계정, 제3자 리셀러에게서 사 온 대화 기록, 그리고 벤더가 자기 사용자의 트래픽을 국경 밖 모델로 돌린 재전송이다.

세 번째 경로에서 노출된 것은 랩의 자산이 아니라 그 랩을 믿고 쓴 사람들의 입력이었다. 앤트로픽은 킴이를 쓰고 있다고 믿은 사용자가 받은 답이 클로드의 답이었고 그 사실을 알 방법이 없었다고 적었다. 딥시크는 들어오는 요청의 문자열을 검사해 코딩 하네스를 쓰는 사용자를 태그로 골라냈다. 무작위가 아니었다는 뜻이다.

약관을 펴 보면 이상한 일이 보인다. 출력물이 고객의 것이라는 조항도, 경쟁 모델 학습과 프롬프트로 학습 데이터를 캐내는 일을 금지하는 조항도 이미 적혀 있다. 그런데 그 조항의 주어는 모두 "고객"이고, 이번 행위자는 계약이 없는 허위 계정이었다. 벤더가 자기 고객의 요청을 사용자 몰래 다른 모델로 돌리는 경우를 부를 이름은 어느 문서에도 없다.

유보도 같이 적어 둔다. 지목된 일곱 곳 가운데 공개 반박을 내놓은 곳은 아직 확인되지 않았고, 앤트로픽은 이 사건의 피해자인 동시에 그 랩들의 경쟁사다. 이 수치들은 한쪽이 남긴 기록이다.

그래도 조직이 오늘 할 수 있는 일은 남는다. 우리 요청이 몇 개의 중계 구간을 지나는지 묻는 것이다. 우리가 고른 모델이 그 요청을 실제로 처리했다는 것을 사후에 확인할 수단이 있는지도 묻는다. 이 사건을 요청을 보낸 쪽에서 재구성하려면 지금 세상에 없는 로그가 필요하다.

▶ 전문: https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI거버넌스 #데이터거버넌스 #AI증류 #Anthropic #Claude #DeepSeek #Kimi

---

## LinkedIn (EN)

The news in Anthropic's September 10 report was not how much of Claude got copied. It was that several Chinese AI labs had been routing their own users' requests to Claude without telling those users.

Anthropic named seven China-based labs. The widely quoted figure of 200 million exchanges is a press sum of the per-lab numbers, not a total Anthropic published; no aggregate appears in the report. What the disclosure did establish was the shape of the pipe. Conversations reached those labs three ways: fake accounts built on stolen cards, transcripts bought from third-party resellers, and requests a vendor quietly forwarded across a border.

The third route exposed customers rather than companies. Anthropic wrote that users who believed they were talking to a Kimi model received answers written by Claude, and that they had no way of knowing. DeepSeek inspected incoming request strings to tag users running coding harnesses, then forwarded a selected share of them. The targeting was deliberate.

The contracts make the gap plain. Anthropic and Google Cloud both state that outputs belong to the customer, both bar training a competing model, and Google even bars using prompts to fish out training data. Every one of those clauses takes "Customer" as its subject, and the parties here were fake accounts with no contract at all. No document has a line for a vendor rerouting its own users to somebody else's model.

Two caveats travel with all of this. None of the seven labs has issued a public rebuttal so far, and Anthropic is both the injured party and a competitor to every lab it named. These are one side's records.

What a buyer can do today is ask. How many relay hops does our request pass through, and can we verify after the fact that the model we selected is the one that answered? Reconstructing this incident from the sending end would take a log that does not yet exist.

▶ Read: https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIGovernance #DataGovernance #AIDistillation #Anthropic #Claude #DeepSeek #DataProvenance

---

## Twitter/X (KO)

앤트로픽이 지목한 중국 AI 랩은 일곱 곳이다. 널리 인용된 "2억 건"은 앤트로픽이 낸 총계가 아니라 매체가 랩별 수치를 더한 값이다.

새로운 건 규모가 아니라 경로다. 몇몇 랩은 자기 사용자의 요청을 그 사용자 몰래 클로드로 돌렸고, 사용자에게는 그걸 알 방법이 없었다.

https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/ko/

#페블러스 #데이터품질 #Anthropic #AI증류

---

## Twitter/X (EN)

Anthropic named seven China-based labs, not five. The 200 million figure everyone quoted is a press sum of per-lab numbers; Anthropic never published a total.

The new part is the route. Some labs forwarded their own users' requests to Claude, and those users had no way to find out.

https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/en/

#Pebblous #DataQuality #Anthropic #AIDistillation

---

## Facebook (KO)

"지금 이 답은 누가 쓴 걸까."

평소에 떠올리지 않는 질문입니다. 화면 위쪽에 모델 이름이 적혀 있으니까요.

앤트로픽이 지난주에 낸 보고서를 읽는 동안 그 질문이 계속 따라왔습니다. 킴이를 쓰고 있다고 믿은 사용자가 받은 답이 사실은 클로드의 답이었다는 대목 때문이었습니다. 요청은 사용자 모르게 국경을 건넜고, 건너간 대화는 학습 재료가 됐습니다.

앤트로픽이 이 경로에 쓴 말은 rerouting, 곧 재전송이었습니다. 저는 여기에 이름을 하나 더 붙여 보고 싶었습니다. '조용한 재전송'. 계정을 도둑맞은 것도 아니고 서비스가 멈춘 것도 아닙니다. 겪은 사람이 겪었다는 사실조차 알지 못하는 종류의 사건입니다.

계약서를 펴 보면 더 이상합니다. 출력물이 누구 것인지는 이미 정해져 있습니다. 경쟁 모델을 학습시키지 말라는 조항도 있고, 프롬프트로 학습 데이터를 캐내지 말라는 조항까지 미리 적혀 있습니다. 그런데 이번에 실제로 벌어진 일, 곧 벤더가 자기 고객의 요청을 사용자 몰래 다른 모델로 돌린 일을 가리키는 칸은 어느 문서에도 없었습니다.

막을 장치가 없다기보다, 그 일을 부를 이름이 아직 없는 쪽에 가깝습니다.

그래서 이 사건을 요청을 보낸 쪽에서 되짚어 보려고 하면 곧 막힙니다. 로그에는 프롬프트와 응답이 남지만, 그 요청이 몇 개의 손을 거쳤는지는 적히지 않습니다. 앤트로픽이 조직 단위로 귀속할 수 있었던 것도 특별한 기법이 있어서가 아니라 자기 쪽 수신 기록을 봤기 때문입니다. 보내는 쪽에는 그런 기록이 없습니다.

데이터가 모자란 상황이 아니라, 있는 데이터가 경로를 기록하지 않는 상황입니다. 페블러스가 계속 들여다보는 공백이 정확히 이 모양입니다. 대시보드에서는 두 상황이 똑같이 생겼는데, 뒤쪽은 아무리 많이 모아도 채워지지 않습니다.

"우리가 고른 모델이 그 요청을 실제로 처리했다는 것을, 우리는 어떻게 확인합니까?"

조달 자리에서 이 문장을 꺼냈을 때 어떤 답이 돌아오는지가, 당분간은 유일한 계측기일지도 모르겠습니다.

▸ https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/ko/

#페블러스 #AI증류 #Anthropic #Kimi #데이터계보 #DataClinic #PebbloScope

---

## Facebook (EN)

"Who actually wrote the answer I'm reading?"

It isn't a question anyone asks. The model's name sits right at the top of the window.

I kept circling back to it while reading Anthropic's report last week, because of one line in it: users who believed they were talking to Kimi were getting answers written by Claude. Their requests had crossed a border without them, and the conversations that came back were harvested as training material.

Anthropic calls this rerouting. I want to give it a slightly longer name. "The silent reroute." Nothing was stolen from the people it happened to, nothing broke, no service went down, and so no one on that end had any way to learn it had happened at all.

The contracts make it stranger. Ownership of the output was settled long ago. There are clauses against training a competing model, and clauses against using prompts to fish out training data. But for the thing that actually occurred here, a vendor quietly forwarding its own customers to somebody else's model, there is no line in any of those documents.

It is less that no one built a lock, and more that no one has named the door.

Which is why the incident cannot be reconstructed from the sending side. A log keeps the prompt and the response; it does not keep the number of hands the request passed through. Anthropic could attribute this activity to specific organizations for one unglamorous reason, which is that it was reading its own inbound records. Whoever sent those requests has nothing comparable to read.

This is not a shortage of data. It is data that does not record its own route, and the two look identical on a dashboard. That gap is the one Pebblous keeps working on: the second kind never fills up, no matter how much you collect.

"How do we confirm that the model we chose is the one that answered?"

For now, what comes back when you ask that in a procurement meeting may be the only instrument we have.

▸ https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/en/

#Pebblous #AIDistillation #Anthropic #Claude #DataLineage #DataClinic #PebbloScope

---

## Medium (EN)

### Anthropic Named Seven Labs. The Number Everyone Quoted Was Not Its Own.

On September 10, 2026, Anthropic published a threat intelligence report with a section titled "Illicit distillation and scaled abuse." Within a day the coverage had settled into a single sentence: Chinese AI labs harvested roughly 200 million conversations with Claude. Chinese-language outlets picked up the same framing on September 11 and 12, rendering it as 近2亿次 across 5个独立行动.

Two things in that summary do not match the source.

Anthropic named **seven** China-based labs, not five. And Anthropic published no total at all. The report gives per-lab figures, each written as a floor, for the five labs whose scale it disclosed. The 200 million is a press sum. Adding the five disclosed numbers gives roughly 190.9 million, and that arithmetic still leaves out SenseTime and MiniMax, which have no counts attached to them.

That correction matters less for its own sake than for what it displaces. The story here was never the size of the number.

### Three routes, three different victims

The February 2026 disclosure described a simple picture: somebody spun up fake accounts and hammered the API. The September report splits that picture into three paths, and the paths differ in who gets hurt.

- **Fake accounts.** Proxy services Anthropic calls "transfer stations" create thousands of accounts using false identities, fake or stolen credit cards, and stolen API keys. Activity attributed to Alibaba and Zhipu falls here. There is no injured end user in this route, only stolen payment instruments.
- **Purchased transcripts.** Unauthorized labs also buy logs of user exchanges with US frontier models from third-party resellers, and those resellers include the proxy operators themselves, who routinely save conversations without the user's knowledge or consent. SenseTime and MiniMax were classified here, which is why neither has an exchange count.
- **Rerouting.** This is the new one. Some labs forwarded requests from their own users to Claude, without those users knowing or agreeing, and collected the resulting exchanges for training. Anthropic names DeepSeek, Xiaomi, and Moonshot.

The third route is the one that changes who the story is about. Anthropic's phrasing is unusually direct: users thought they were using a Kimi model but received responses from Claude instead, and the user had no way of knowing that their use of Kimi was being forwarded.

The labs did not all behave identically. Moonshot and DeepSeek passed requests through in real time and served Claude's answers back to their own users. Xiaomi did something different, saving exchanges between its customers and its own models and replaying them into Claude later. And DeepSeek's selection was not random: it inspected incoming request strings, tagged users running coding harnesses such as Claude Code, the Claude Agent SDK and opencode, and forwarded a subset of those to Claude Opus. Which harness your engineering team pointed at which endpoint is rarely written down in a procurement file.

### The clause that does not exist

Ask who owns your conversation logs and the contracts already answer. Anthropic's commercial terms say the customer retains rights to its inputs and owns its outputs. Google Cloud's service-specific terms say generated output is customer data and that Google will not train on customer data without permission. Both bar using the service to build a competing model. Google goes further and bars reverse-engineering or extracting components, explicitly including the use of prompts to discover training data.

So the contracts do contemplate extraction. Read the clauses vertically, though, and two facts surface. Every prohibition takes "Customer" as its subject, and the actors in this incident held no contract at all; they were fake accounts on stolen cards. And no document anywhere has a line for a vendor rerouting its own users' requests to a model in another jurisdiction. That is why Anthropic's response was detection and banning rather than contract enforcement.

The relay layer inherits the same silence. A representative public router's terms state that the router itself has opted out of training, then note in the next breath that some models may store or train on your inputs, without saying which. Retention periods live in feature documentation rather than in the contract. And nothing in those terms promises to tell you which provider actually served the request you sent.

How much that matters has been measured. In "Real Money, Fake Models," a March 2026 audit from CISPA Helmholtz Center, researchers tested grey-market relays that claim to resell official APIs. Calling the same model name, Gemini 2.5 Flash scored 83.82% on MedQA through the official API and averaged 36.95% through shadow endpoints. Of 24 endpoints checked by model fingerprinting, 45.83% failed verification outright. Detecting the mismatch took a benchmark campaign, which is not a tool anyone brings to a contract review.

### What a buyer can actually do

Not switch vendors. There is no basis for that yet. What there is basis for is asking, and noticing which questions come back without a document attached:

- How many relay hops does our request pass through, and can we get each operator's name in writing?
- Can we verify after the fact that the model we selected is the one that answered?
- Are retention periods in the contract or in feature documentation, and are we notified when that documentation changes?
- Which upstream providers may train on our inputs, and can we have that list?
- Are we notified when the relay path or an operator's ownership changes?
- If any of those answers turn out to be false, does the contract give us a way to find out?

The last one usually has no answer. The users in this incident were not lied to. They simply had no instrument.

Two caveats belong with all of the above. None of the seven named labs has issued a public rebuttal as of September 14, 2026, and Anthropic is simultaneously the injured party and a competitor to every lab it named. This is one side's record, and worth reading as such.

What remains after the caveats is a shape rather than a verdict. Anthropic could attribute this activity to organizations because it was reading its own inbound records. Nobody on the sending end has that. A log keeps the prompt and the response; it does not keep how many hands the request passed through, or whether any of them kept a copy. Provenance is not something a later audit recovers. It exists only if it was written down at the moment of acquisition. That is the gap Pebblous keeps working on.

**[Read the full analysis →](https://blog.pebblous.ai/report/api-conversation-log-provenance-2026-09/en/)**

#Pebblous #DataClinic #DataQuality #AIDistillation #Anthropic #Claude #DeepSeek #DataProvenance
