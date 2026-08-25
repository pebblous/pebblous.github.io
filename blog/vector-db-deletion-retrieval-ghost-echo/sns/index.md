# SNS 홍보 글: 벡터 DB에서 지운 문서가 검색 결과를 계속 흔들었다

> 소스: blog/vector-db-deletion-retrieval-ghost-echo/ko/index.html
> 생성일: 2026-08-25
> URL (KO): https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/ko/
> URL (EN): https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

지운 문서가 검색 결과에 돌아오지 않는 것과, 시스템이 그 문서를 잊은 것은 같은 말이 아니었습니다.

미국 트리니티 칼리지 연구진은 ChromaDB에서 대상 문서를 지운 뒤 같은 질의를 다시 던졌습니다. 삭제된 식별자는 270회 시행 전부에서 한 번도 결과로 돌아오지 않았습니다. 그런데 돌아온 상위 문서들이 이루는 의미 무게중심은 중앙값 0.1522만큼 옮겨가 있었습니다.

같은 클러스터의 이웃을 대신 지운 대조군과 견주면 3.7배입니다. 54개 비교쌍 가운데 53쌍에서 같은 순서가 나왔습니다. 원인은 색인 구조에 있습니다. HNSW 같은 근접 그래프는 문서를 넣는 순간 이웃 연결을 그어 두고, 그 연결은 노드가 지워진 뒤에도 탐색 경로에 남습니다.

인덱스를 통째로 재구축해도 값은 그대로였고, 지우기 전에 벡터를 덮어쓰는 방식은 흔적을 오히려 키웠습니다. 벤더들은 이것이 구현 결함이 아니라 논리적 삭제가 올바르게 작동한 결과라고 답했습니다. 다만 정량 측정이 끝난 백엔드는 ChromaDB 하나이고, 코퍼스는 실제 개인정보가 아니라 연구진이 만든 합성 데이터입니다. 지운 문서의 본문이 복원되는 것도 아닙니다.

삭제 이행 증빙이 식별자 배제까지만 다룬다면, 그 증빙이 무엇을 보장하고 무엇은 보장하지 않는지가 문서에 적혀 있어야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #RAG #데이터거버넌스 #ChromaDB #HNSW #GDPR

---

## LinkedIn (EN)

A deleted record never came back in the results. The system had not forgotten it.

Researchers at Trinity College in Hartford deleted target documents from ChromaDB and re-issued the same queries. The deleted identifier stayed out of the results in all 270 trials. The semantic centroid of the returned evidence had still moved by a median of 0.1522.

That is 3.7 times the drift measured when a same-cluster neighbor was deleted instead, and the same ordering held in 53 of 54 matched pairs. The cause sits in the index. Proximity graphs such as HNSW draw a document's neighbor links at insertion, and those links survive in the traversal paths long after the node is gone.

Rebuilding the index from scratch left the number unchanged. Overwriting the vector before deleting made the trace larger. Vendors told the authors this is not an implementation defect but what correct logical deletion looks like at the semantic layer. The limits are worth stating: ChromaDB is the only backend fully quantified, the corpus is synthetic rather than real patient data, and no document text is reconstructed.

If deletion evidence stops at identifier exclusion, the documentation should say what that covers and what it leaves open.

▶ Read: https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #RAG #DataGovernance #ChromaDB #HNSW #GDPR

---

## Twitter/X (KO)

ChromaDB에서 문서를 지웠습니다. 삭제 API는 정확히 작동했고, 그 문서는 검색 결과에 다시 나오지 않았습니다.

그런데 돌아온 검색 결과의 의미 무게중심은 0.1522만큼 옮겨가 있었습니다. 질의 다섯 번만으로 무언가 지워졌다는 사실을 절반 이상의 확률로 맞혔습니다.

https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/ko/

#페블러스 #데이터품질 #ChromaDB #GDPR

---

## Twitter/X (EN)

A document was deleted from ChromaDB. The API worked, and the record never surfaced again.

The semantic centroid of the retrieved evidence had still shifted by 0.1522. Five queries were enough to tell, better than half the time, that something had been removed.

https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/en/

#Pebblous #DataQuality #ChromaDB #GDPR

---

## Facebook (KO)

"삭제 완료."

병원 기록을 지워 달라고 요청한 사람이 받는 안내는 대개 이 네 글자에서 끝납니다.

그리고 정말로 그 기록은 이후 어떤 질의에도 나오지 않습니다.

미국 트리니티 칼리지 연구진이 붙잡은 질문은 그다음이었습니다. 결과에서 빠졌다는 것과 시스템이 잊었다는 것이 같은 말인가.

ChromaDB에서 문서를 지우고 같은 질의를 다시 던져 보니, 돌아온 다섯 문서가 가리키는 의미의 좌표가 옆으로 밀려 있었습니다. 지운 문서와 무관한 이웃을 대신 지웠을 때보다 훨씬 크게 밀렸고, 54번 견주어 53번 그랬습니다.

문서 자체는 나오지 않습니다. 본문이 복원되지도 않습니다. 다만 거기 무언가 있었다는 사실이 남은 문서들의 배치에 남습니다.

저자들은 이 어긋남에 '검증 격차'라는 이름을 붙였습니다. 감사는 통과하는데 검색 위상에는 흔적이 남아 있는 상태입니다.

인덱스를 통째로 다시 만들어도 그 자국은 지워지지 않았습니다. 문서를 넣던 순간에 그어진 연결이 이미 다른 노드들의 자리를 정해 놓았기 때문입니다.

"지운다는 말은 어느 층위까지의 약속인가?"

저장된 식별자까지일까요. 아니면 그 기록이 검색에 남긴 영향까지일까요.

페블러스가 데이터 품질을 진단하면서 자주 마주치는 장면도 여기와 겹칩니다. 완료를 알리는 응답 코드는 제때 도착하는데, 그 코드가 어디까지를 보장하는지는 잘 따라오지 않습니다.

데이터를 어디에 어떻게 넣을지 정하는 순간에, 지울 때의 이야기는 이미 시작되고 있었는지도 모르겠습니다.

▸ https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/ko/

#페블러스 #데이터클리닉 #데이터품질 #ChromaDB #GDPR #벡터DB

---

## Facebook (EN)

"Deletion complete."

That is usually where the notice ends for someone who has asked a hospital system to remove their record.

And the record really does stop appearing. No query returns it again.

The question researchers at Trinity College kept pulling on came after that. Is being absent from the results the same thing as being forgotten?

They deleted a document from ChromaDB and ran the same queries again. The five documents that came back pointed at a slightly different place in meaning than before. Much further than when an unrelated neighbor was deleted instead, and it went that way in 53 of 54 comparisons.

The document itself never returns. No text is reconstructed. What stays is the bare fact that something used to sit there, held in the arrangement of the documents around it.

The authors call this mismatch a "verification gap." The audit passes, and the trace remains in the retrieval topology.

Rebuilding the index from scratch did not erase the mark. The links drawn at the moment of insertion had already settled where the other nodes would sit.

"How far down does deletion promise to go?"

As far as the stored identifier? Or as far as the influence that record left on retrieval?

This overlaps with a scene we meet often in data quality work at Pebblous. The response code confirming completion arrives on time. What layer that code actually covers rarely arrives with it.

Perhaps the story of deletion begins much earlier than we think, back when someone decides where and how the data goes in.

▸ https://blog.pebblous.ai/blog/vector-db-deletion-retrieval-ghost-echo/en/

#Pebblous #DataClinic #DataQuality #ChromaDB #GDPR #VectorDB
