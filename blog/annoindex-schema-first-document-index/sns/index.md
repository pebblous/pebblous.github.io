# SNS 홍보 글: 질문을 받기 전에 문서에서 값을 뽑아 두는 주석 인덱스

> 소스: blog/annoindex-schema-first-document-index/ko/index.html
> 생성일: 2026-08-16
> URL (KO): https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/ko/
> URL (EN): https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/en/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

같은 문서 더미에 묻는 비용을 11분의 1로 줄인 것은 더 나은 검색 알고리즘이 아니라 일하는 순서였다.

홍콩과기대 광저우캠퍼스 연구진이 이달 arXiv에 공개한 AnnoIndex는 그 순서를 뒤집는다. 질문을 받고 문서를 뒤지는 대신, 질문이 오기 전에 코퍼스 전체를 훑어 어떤 필드를 뽑을지 정하고 값을 미리 채워 표로 만들어 둔다.

법률 조문과 위키백과, 웹 페이지에서 평균 F1은 0.87이었다. 같은 조건에서 가장 강한 비교 대상이 0.80, 문서를 통째로 GPT-4o에 넣는 방식이 0.73이었다.

작동 원리는 단순하다. 벡터 검색은 주제가 가까운지를 잴 뿐, 조건을 만족하는지는 재지 못한다. 값이 미리 열로 서 있으면 "1985년 이전 출생"은 모델 호출 없이 숫자 비교 한 번으로 끝난다.

다만 자동으로 만든 스키마가 쓸 만한지 판정하는 절차는 무작위 문서 다섯 건과 두 개의 대리 지표뿐이다. 값이 채워졌는지와 문서가 고르게 갈라지는지만 보고, 그 값이 맞는지는 보지 않는다. 저자들도 사람의 피드백을 받는 통로는 인터페이스만 만들어 뒀다고 적었다.

질문이 오기 전에 데이터를 정리해 두는 쪽이 싸다는 계산은 분명하다. 페블러스가 DataClinic으로 데이터 준비도를 진단해 온 이유도 그 계산의 뒷면에 있다. 인덱스는 한 번 잘못 서면 그 위의 모든 질의가 같은 방향으로 틀린다.

▶ 전문: https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AnnoIndex #SchemaLoop #RAG #비정형데이터 #arXiv

---

## LinkedIn (EN)

The eleven-fold cut in query cost came not from a better retriever but from changing when the work happens.

AnnoIndex, released on arXiv this month by researchers at HKUST Guangzhou, inverts the usual order. Instead of searching documents after a question arrives, it sweeps the corpus beforehand, decides which fields to extract, and fills them into a table.

Across legal statutes, Wikipedia articles, and web pages it reports an average F1 of 0.87. The strongest prior system scored 0.80 under the same conditions, and feeding whole documents to GPT-4o scored 0.73.

The mechanism is straightforward. Vector search measures topical proximity, not whether a condition holds. Once values sit in columns, "born before 1985" resolves as a numeric comparison with no model call at all.

The gap sits in verification. A generated schema is accepted after five randomly sampled documents clear two proxy thresholds: whether fields came back non-empty, and whether documents split evenly across them. Neither checks whether the extracted values are correct. The authors state plainly that of the three feedback loops they envision, only the internal one is implemented; the human channel exists as an interface.

Preparing data before the questions arrive is demonstrably cheaper. It is also the reason Pebblous built DataClinic to measure data readiness. An index that is wrong once stays wrong for every query built on top of it.

▶ Read: https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AnnoIndex #SchemaLoop #RAG #UnstructuredData #arXiv

---

## Twitter/X (KO)

문서에 질문할 때마다 LLM을 부르면 비용은 질문 수에 비례한다. AnnoIndex는 질문이 오기 전에 값을 뽑아 표로 세워 두고, 질의당 토큰을 11분의 1로 줄였다.

그런데 그 표가 맞는지 확인하는 절차는 무작위 문서 다섯 건이 전부다.

https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/ko/

#페블러스 #데이터품질 #AnnoIndex #AIReadyData

---

## Twitter/X (EN)

Call an LLM every time you query a document set and the bill scales with questions. AnnoIndex extracts values into a table before questions arrive, cutting tokens per query elevenfold.

What checks that the table is right? Five randomly sampled documents.

https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/en/

#Pebblous #DataQuality #AnnoIndex #AIReadyData

---

## Facebook (KO)

"작년 계약서 가운데 이 조항이 들어간 게 몇 건이었죠?"

문서 더미를 안고 있는 팀이라면 이런 질문을 한 번만 받지 않습니다. 다음 주에 연도만 바뀐 같은 질문이 돌아오고, 시스템은 같은 문서를 처음 보는 것처럼 다시 읽습니다.

여기서 드는 비용은 답을 찾는 비용이 아닙니다. 같은 값을 매번 다시 뽑는 비용입니다.

홍콩과기대 광저우캠퍼스 연구진이 이달 arXiv에 공개한 AnnoIndex는 그 순서를 뒤집습니다. 질문을 받고 문서를 뒤지는 대신, 질문이 오기 전에 코퍼스를 훑어 어떤 필드를 뽑을지 정하고 값을 채워 표로 만들어 둡니다. 그러면 "1985년 이전 출생"은 모델을 부르지 않고 숫자 비교 한 번으로 끝납니다. 세 종류의 문서 코퍼스에서 평균 F1은 0.87이었고, 질의당 토큰은 문서를 통째로 모델에 넣는 방식의 11분의 1이었습니다.

저는 이 설계를 '질문 이전의 결정'이라고 부르고 싶습니다.

무엇을 남길지, 어떤 이름으로 부를지, 어떤 형식으로 통일할지. 예전에는 질문이 들어올 때마다 즉석에서 내리던 판단을 인덱스를 세우는 시점으로 앞당겨 한 번에 못 박는 일입니다.

앞당긴 결정은 싼 대신 틀렸을 때도 오래갑니다.

논문에서 자동으로 만든 스키마가 쓸 만한지 판정하는 절차는 무작위로 고른 문서 다섯 건입니다. 값이 비어 있지 않게 채워졌는지, 문서가 고르게 갈라지는지. 두 가지를 봅니다. 그 값이 실제로 맞는지는 그 안에서 보지 않습니다.

"우리가 미리 정해 둔 그 필드는, 정말 맞는 값을 담고 있나?"

저자들도 이 자리를 비워 두었다고 적었습니다. 사람의 피드백을 받는 통로는 표준 인터페이스만 마련했고, 그 신호를 어떻게 쓸지는 다음 과제로 남겼습니다.

페블러스가 DataClinic으로 데이터 준비도를 진단해 온 자리도 여기입니다. 현장에서 자주 만나는 것은 값이 없는 상태가 아니라, 어떤 값을 남길지 정한 근거가 사라진 상태였습니다.

데이터를 미리 준비해 두는 쪽이 싸다는 계산은 이미 나와 있습니다. 남은 일은 준비된 것이 맞는지 확인하는 쪽에 있는 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #AnnoIndex #비정형데이터

---

## Facebook (EN)

"How many of last year's contracts included this clause?"

If your team sits on a pile of documents, you never get that question just once. Next week the same question returns with the year changed, and the system reads the same documents as though it had never seen them.

The expense there isn't finding the answer. It's extracting the same value again, and again.

AnnoIndex, published on arXiv this month by researchers at HKUST Guangzhou, reverses the order. Rather than searching documents after a question arrives, it sweeps the corpus first, decides which fields to pull, and fills them into a table. After that, "born before 1985" is a numeric comparison with no model in the loop. Across three kinds of document corpora the average F1 was 0.87, and tokens per query came to one-eleventh of feeding whole documents to a model.

I've come to think of this as "the decision made before the question."

What to keep. What to call it. Which format to normalize it into. Judgments that used to be improvised each time a query arrived are now fixed once, at the moment the index is built.

A decision made early is cheap. It also lasts a long time when it is wrong.

In the paper, a generated schema earns its place by way of five randomly sampled documents. Did the fields come back non-empty? Did the documents split evenly across them? Those two things are checked. Whether the values are actually correct is not checked there.

"The field we defined in advance — is it holding the right value?"

The authors say as much themselves. The channel for human feedback exists as a standard interface, and how to use that signal is left as future work.

This is the same ground Pebblous built DataClinic on. What we meet most often in the field isn't missing values. It's a set of values whose reasoning has gone missing.

That preparing data ahead of the questions is cheaper has already been worked out. What remains is checking whether what was prepared is right.

▶ Read: https://blog.pebblous.ai/blog/annoindex-schema-first-document-index/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #AnnoIndex #UnstructuredData
