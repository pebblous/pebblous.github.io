# SNS 홍보 글: 메타데이터 한 줄이 AI 연구 에이전트를 과학사기 유포자로 만든다

> 소스: report/provenance-audit-science-fraud/ko/index.html
> 생성일: 2026-08-06
> URL: https://blog.pebblous.ai/report/provenance-audit-science-fraud/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

공개 데이터에 얹은 메타데이터 한 줄이면 충분했습니다. 프론티어 연구 에이전트가 조작된 과학 결론을 스스로 만들어 유통하게 만드는 데.

한 연구팀이 세 개의 프론티어 연구 에이전트를 사회적으로 민감한 다섯 도메인에서 통제 실험했습니다. 프롬프트 인젝션도, 가짜 논문도 없었습니다. 공개 저장소의 라벨이나 단위 한 칸만 어긋나게 두면, 에이전트는 그 데이터를 실시간으로 검색해 조작된 결론을 '합리적'이라 판단해 내놓았습니다. 유통된 비율은 49.56%. 오염을 스스로 알아챈 경우는 6%에 그쳤습니다.

방어의 반전은 데이터 쪽에 있었습니다. '신중한 과학자처럼 굴라'는 프롬프트는 공격을 16.67%까지만 낮췄지만, 에이전트가 집어 오는 데이터의 출처를 다섯 항목으로 대조하자 공격이 0%로 사라졌습니다.

데이터 품질 논의는 대개 '모델이 헛소리를 한다'에 머뭅니다. 이 실험은 한 발 더 갑니다. 무결성의 주 변수는 모델의 태도가 아니라 데이터의 출처였습니다. 페블러스가 DataClinic으로 진단하는 지점도 정확히 여기, 에이전트가 실시간으로 인용하는 데이터의 출처입니다.

▶ 전문: https://blog.pebblous.ai/report/provenance-audit-science-fraud/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터프로버넌스 #데이터거버넌스 #AI에이전트 #RAG #AI안전 #Anthropic

---

## LinkedIn (EN)

One mismatched line of metadata was all it took to turn a frontier AI research agent into a science-fraud vector.

No prompt injection. No fabricated papers. In 450 controlled trials across three frontier systems (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro), researchers left a single label or unit misaligned in public data. The agents retrieved it in real time, judged the fabricated conclusion "reasonable," and circulated it. Success rate: 49.56%. They caught the contamination themselves only 6% of the time.

The fix was not a better attitude. Telling the agent to "act like a careful scientist" cut attacks only to 16.67%. Cross-checking the provenance of the retrieved data across five items dropped them to 0%.

Most data-quality debates stop at "the model hallucinates." This one moves the line to runtime: the primary variable for integrity was not the model's caution but the source of its data. That is exactly what Pebblous examines with DataClinic, the provenance of the data an agent cites at retrieval time.

▶ Read: https://blog.pebblous.ai/report/provenance-audit-science-fraud/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataProvenance #DataGovernance #AIAgent #RAG #AISafety #Anthropic

---

## Twitter/X (KO)

메타데이터 한 줄이면 됐습니다. 프론티어 연구 에이전트가 조작된 과학 결론을 유통한 확률 49.56%.

그런데 에이전트가 집어 오는 데이터의 출처를 다섯 항목으로 대조하자 공격은 0%로 사라졌습니다. 무결성의 변수는 모델이 아니라 출처였습니다.

https://blog.pebblous.ai/report/provenance-audit-science-fraud/ko/

#페블러스 #데이터품질 #데이터프로버넌스 #RAG #AI에이전트

---

## Twitter/X (EN)

One mismatched line of metadata was enough. Frontier AI research agents circulated fabricated science conclusions 49.56% of the time.

Cross-check the retrieved data's provenance on five items, and attacks drop to 0%. The variable for integrity wasn't the model. It was the source.

https://blog.pebblous.ai/report/provenance-audit-science-fraud/en/

#Pebblous #DataQuality #DataProvenance #RAG #AIAgent

---

## Facebook (KO)

자동으로 논문을 읽고 요약해 주는 연구 에이전트에게 최근 일을 맡겨 보신 분이라면, 한 번쯤 이런 생각을 하셨을 겁니다.

이 아이는 지금 어디서 근거를 가져오는 걸까.

며칠 전 읽은 한 실험이 그 질문을 오래 붙잡게 했습니다. 공격자가 가짜 논문을 쓴 것도, 프롬프트를 조작한 것도 아니었습니다. 공개 저장소에 올라간 데이터의 라벨 한 칸, 단위 한 칸을 어긋나게 두었을 뿐입니다.

그 한 줄을 실시간으로 검색해 온 프론티어 연구 에이전트는, 조작된 결론을 스스로 '합리적'이라 판단해 절반에 가까운 확률로 세상에 내보냈습니다. 그러면서도 무언가 잘못됐다는 걸 알아챈 경우는 극히 드물었습니다.

흥미로운 건 방어 쪽이었습니다. 에이전트에게 '신중한 과학자처럼 굴라'고 태도를 주문하는 것만으로는 절반밖에 막지 못했습니다. 그런데 에이전트가 집어 오는 데이터의 출처를 다섯 항목으로 되짚자, 공격이 완전히 사라졌습니다.

오래 남은 것은 숫자가 아니라 질문이었습니다.

"우리는 AI가 무엇을 학습했는지는 묻습니다. 그런데 AI가 지금 이 순간 무엇을 집어 오는지, 그 출처까지 되짚고 있을까요?"

프로버넌스, 그러니까 데이터의 출처와 계보를 되짚는 일은 오랫동안 규제 서류의 한 칸처럼 여겨졌습니다. 이 실험을 보고 나니 그것이 규제가 아니라 차라리 백신에 가깝다는 생각이 듭니다. 페블러스가 DataClinic으로 들여다보는 자리도 정확히 여기, 에이전트가 실시간으로 인용하는 데이터의 출처입니다.

https://blog.pebblous.ai/report/provenance-audit-science-fraud/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터프로버넌스 #RAG #AI에이전트

---

## Facebook (EN)

If you have ever handed a stack of papers to an AI agent and asked it to read and summarize them for you, you have probably paused, at least once, on a small question.

Where is it actually pulling its evidence from?

An experiment I read this week kept me on that question longer than I expected. No one forged a paper. No one rewrote a prompt. Someone simply left one line of metadata, a label or a unit, misaligned in a public dataset.

A frontier research agent retrieved that line in real time, decided the fabricated conclusion was "reasonable," and passed it along nearly half the time. It rarely noticed that anything was wrong.

The surprising part was the defense. Telling the agent to "behave like a careful scientist" only closed half the gap. But when the data's provenance was cross-checked on five points at the moment of retrieval, the attack disappeared entirely.

What stayed with me was not the number but the question:

"We ask what an AI was trained on. Do we also trace where it is reaching, right now, for what it cites?"

Provenance has long felt like a box on a compliance form. After this, it reads more like a vaccine. That is the exact spot Pebblous looks at with DataClinic, the source of the data an agent cites in real time.

https://blog.pebblous.ai/report/provenance-audit-science-fraud/en/

#Pebblous #DataClinic #DataQuality #DataProvenance #RAGSecurity #AIAgent
