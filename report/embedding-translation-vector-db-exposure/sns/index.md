# SNS 홍보 글: 벡터 DB에 남은 임베딩만으로 이메일 내용이 드러났다

> 소스: report/embedding-translation-vector-db-exposure/ko/index.html
> 생성일: 2026-09-04
> URL: https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

원문을 한 줄도 보지 않고, 짝지은 데이터도 인코더 접근도 없이, 남의 임베딩 더미를 자기가 아는 모델의 공간으로 옮긴 방법이 나왔다. 옮긴 벡터는 8,192개 후보 가운데 원래 벡터를 평균 1~3위로 찾아갔다.

아무것도 하지 않고 그냥 놓으면 4,000위대다.

코넬대 연구팀이 2025년 12월 NeurIPS에서 발표한 결과다. 공격자에게 주어진 것은 유출된 벡터 더미 하나와, 아무나 쓸 수 있는 공개 임베딩 모델 하나뿐이다.

거기에 이미 공개돼 있던 역전 도구를 그대로 붙이자 트윗의 주제가 나왔고, 엔론 이메일 50통을 상대로 한 시험에서는 최대 80%에서 이름과 날짜와 금액이 드러났다는 판정이 나왔다. 판정한 것은 사람이 아니라 GPT-4o다.

직관과 반대되는 대목은 모델을 갈아 끼우는 일이 방어가 아니라는 것이다. 같은 백본 계열끼리는 번역기조차 필요 없이 이미 호환됐고, 계열이 다른 쌍에서만 이 방법이 필요했으며, 거기서도 성공했다.

실증된 범위는 좁다. 대상은 텍스트 임베딩 모델 일곱 종이고 생성형 LLM은 한 종도 없다. 문서는 영어이며, 의료기록처럼 학습 분포에서 먼 자료에서는 정확도가 크게 무너졌다. 논문 21쪽 어디에도 방어책은 없다.

그런데 넉 달 뒤 후속 연구가 같은 정렬을 CPU에서 10분 안에 만들었다. 이메일이 10분 만에 복원된다는 뜻이 아니라, 공격의 첫 단계인 번역기 학습 비용이 그만큼 내려갔다는 뜻이다. 벡터 인덱스를 운영한다면 오늘 오후에 셀 수 있는 숫자가 하나 있다. 논문이 한 쌍에서 잰 임계는 5만 개였다.

▶ 전문: https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #RAG보안 #벡터DB #임베딩 #vec2vec #NeurIPS2025

---

## LinkedIn (EN)

Researchers moved a pile of embeddings produced by an unknown model into a space they did control, without a single line of the original text and without a single matched pair. The translated vectors located their originals at an average rank of 1 to 3 out of 8,192 candidates.

Leave the vectors where they are and you land around rank 4,000.

The work comes from a Cornell team and was presented at NeurIPS in December 2025. The attacker is granted two things: a dump of leaked vectors, and any public embedding model they can query.

Point an off-the-shelf inversion tool at the translated vectors and the topic of a tweet comes out. On fifty Enron emails, up to 80% were judged to have given up names, dates, and dollar figures. The judge was GPT-4o, not a human reader.

The counterintuitive part is that switching vendors is not a defense. Models sharing a backbone family were already compatible with no translator at all; the method was only needed across families, and there it worked.

The demonstrated ground is narrow. Seven text embedding models, none of them generative. English documents. On clinical records, far from the training distribution, accuracy collapsed. And across twenty-one pages the paper proposes no defense whatsoever.

Four months later a follow-up study produced the same alignment on a CPU in under ten minutes. That is not ten minutes to reconstructed email; it is the cost of the attack's first step, translator training, falling that far. If you run a vector index, there is a number you can count this afternoon. The threshold the paper measured on one model pair was 50,000 vectors.

▶ Read: https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #RAGSecurity #VectorDB #Embeddings #vec2vec #NeurIPS2025

---

## Twitter/X (KO)

원문도, 짝지은 데이터도, 인코더 접근도 없이 남의 임베딩 더미를 다른 모델의 공간으로 옮겼다. 옮긴 벡터는 8,192개 후보 가운데 원래 벡터를 평균 1~3위로 찾아갔다.

모델을 갈아 끼우는 것은 방어가 아니었다. 같은 계열끼리는 번역기 없이도 이미 호환됐다.

https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/ko/

#페블러스 #벡터DB #임베딩 #vec2vec

---

## Twitter/X (EN)

No source text, no paired data, no encoder access. Embeddings from an unknown model were moved into another model's space, and they found their originals at an average rank of 1 to 3 out of 8,192.

Switching model vendors is not a defense. Models in the same backbone family were already compatible without any translator.

https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/en/

#Pebblous #VectorDB #Embeddings #vec2vec

---

## Facebook (KO)

사내 검색에 RAG를 붙이던 날, 벡터 인덱스를 어느 등급으로 관리할지 따로 정한 적이 있으신가요.

저는 그런 결정을 내린 기억이 없습니다.

원문 문서 저장소에는 접근 권한을 걸고 보존 기간을 정했습니다. 그런데 그 문서를 잘게 쪼개 숫자 배열로 바꿔 담은 쪽은 검색 성능을 위한 부속 인프라로 넘어갔습니다. 사람이 읽을 수 없는 숫자 나열이니 그래도 된다고 여겼습니다.

코넬대 연구팀이 그 전제를 실험대에 올렸습니다. 어떤 모델이 만들었는지 모르는 임베딩 더미만 쥔 상태에서, 원문도 대응표도 없이 그 벡터들을 자기가 아는 모델의 공간으로 옮겼습니다. 옮긴 벡터는 원래 자리를 거의 그대로 찾아갔고, 거기에 기성품 도구를 붙이자 이메일 50통을 상대로 한 시험에서 이름과 날짜와 금액이 드러났습니다. 문장이 온전히 되살아난 것은 아니지만, 그 안에 무엇이 적혀 있었는지는 나왔습니다.

오래 남은 것은 그 결과보다 저자들이 스스로 적어 둔 경계였습니다. 대상은 임베딩 모델 일곱 종뿐이고, 의료기록에서는 정확도가 무너졌고, 21쪽 전문 어디에도 방어책이 없습니다. 그런데 넉 달 뒤 후속 연구가 같은 정렬을 CPU에서 10분 안에 만들어 냈습니다. 이메일이 10분 만에 복원된다는 뜻은 아닙니다. 공격의 첫 단계 비용이 그만큼 내려갔다는 뜻입니다.

저는 이것을 '자산 대장 밖의 사본' 문제라고 부르고 있습니다.

원문은 대장에 있고, 등급이 있고, 지우면 지워집니다. 그 문서에서 나온 벡터는 대장 어디에도 없습니다.

"우리 벡터 인덱스를 손에 넣은 사람이 원문을 되읽는 데 드는 비용은 지금 얼마인가?"

임베딩이 개인정보인지부터 정하려 들면 대화는 정의에서 멈춥니다. 그런데 벡터가 몇 개인지 세는 일은 오늘 오후에 할 수 있고, 논문이 한 쌍에서 재 본 임계는 5만 개였습니다. 페블러스가 데이터 진단의 범위에 원문 저장소만이 아니라 벡터 인덱스를 넣으려는 이유도 거기에 있습니다.

거버넌스를 정의가 아니라 셈에서 시작할 수 있는 자리는 흔하지 않습니다.

전문 → https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/ko/

#페블러스 #벡터DB #임베딩 #vec2vec #데이터클리닉 #AIReadyData

---

## Facebook (EN)

The day you bolt RAG onto internal search, do you remember deciding what grade of protection the vector index would get?

I don't remember making that call either.

The document store got access rights and a retention window. The place where those same documents were chopped up and kept as arrays of numbers quietly became search infrastructure. Numbers a person cannot read, so the reasoning went, do not need guarding.

A team at Cornell put that reasoning on the bench. Holding nothing but embeddings from a model they knew nothing about, with no source text and no lookup table, they moved those vectors into the space of a model they did control. The moved vectors landed almost exactly where the originals sat, and when an off-the-shelf tool was pointed at them, a test on fifty corporate emails surfaced names, dates, and dollar amounts. The sentences never came back whole. What had been written in them did.

What stayed with me was less the result than the limits the authors wrote down themselves. Seven embedding models. Accuracy that fell apart on clinical records. Twenty-one pages with no defense proposed anywhere in them. And then, four months later, a follow-up study reproduced the same alignment on a CPU in under ten minutes. Not ten minutes to reconstructed email. Ten minutes for the first step of the attack.

I have started calling this the problem of copies that never made it onto the asset register.

The document is on the register. It has a grade, and when you delete it, it is deleted. The vectors derived from it are on no register at all.

"What does it cost, today, for someone holding our vector index to read the source back?"

Start by settling whether an embedding is personal data and the conversation stops at the definition. Counting how many vectors sit in your index is something you can do this afternoon, and the threshold the paper measured on one model pair was fifty thousand. That is why we want a data diagnosis at Pebblous to cover the vector index and not only the document store.

It is rare to find a governance question you can open with arithmetic instead of a definition.

Read the full piece → https://blog.pebblous.ai/report/embedding-translation-vector-db-exposure/en/

#Pebblous #VectorDB #Embeddings #vec2vec #DataClinic #AIReadyData
