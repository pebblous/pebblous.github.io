# SNS 홍보 글: 학습 데이터에서 한 사람 몫만 지우는 토큰 단위 출처 추적

> 소스: blog/token-level-provenance-unlearning/
> 생성일: 2026-07-28
> URL: https://blog.pebblous.ai/blog/token-level-provenance-unlearning/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

누군가 "내가 쓴 것을 학습 데이터에서 빼 달라"고 요구하면, 지금 대부분의 데이터 도구는 두 가지로만 답한다. 그 사람이 손댄 파일을 통째로 지우거나, 아무것도 안 지우거나.

5월 공개된 OriginBlame 논문은 이 선택의 값을 실제 데이터로 쟀다. 21만여 건의 중국어 위키백과에서 지분 1% 기여자 한 명의 삭제 요청을 데이터셋 단위로 처리하면, 정말 지워야 할 양의 101배가 함께 사라진다. 나머지는 삭제와 아무 상관 없는 다른 수백 명의 기록이다.

저자 신원을 토큰 단위까지 따라 내려가면 이 배율이 1.3배로 줄고, 같은 크기 무작위 데이터 대비 언러닝 품질도 42% 좋아졌다. 다만 출처는 데이터를 만드는 순간에만 남길 수 있고, 모델이 학습을 마친 뒤에는 소급해 붙일 수 없다.

넣을 때의 품질에 이어, 뺄 때의 정밀도가 AI-레디 데이터의 다음 조건으로 올라서고 있다.

▶ 전문: https://blog.pebblous.ai/blog/token-level-provenance-unlearning/ko/

#페블러스 #데이터품질 #데이터거버넌스 #AIReadyData #머신언러닝 #데이터프로버넌스 #잊힐권리 #GDPR #OriginBlame

---

## LinkedIn (EN)

When someone invokes the right to be forgotten and asks that their contribution be pulled from a model's training data, most data tooling today can do only two things: delete every file that person ever touched, or leave everything in place.

The OriginBlame paper, released in May, put a price on that choice. Across roughly 219,000 Chinese Wikipedia articles, honoring a takedown from a contributor holding a 1% share erased 101 times more than the request actually required. The rest belonged to hundreds of other authors who never asked for anything.

Tracing author identity down to the token level cut that ratio to 1.3×, and lifted unlearning quality 42% over a random forget set of the same size. Provenance, though, cannot be added after the fact: what isn't recorded when the data is written cannot be recovered once a model has trained on it.

Alongside quality at ingestion, precision at removal is becoming the next condition for AI-ready data.

▶ Read: https://blog.pebblous.ai/blog/token-level-provenance-unlearning/en/

#Pebblous #DataQuality #DataGovernance #AIReadyData #MachineUnlearning #DataProvenance #RightToBeForgotten #GDPR #OriginBlame

---

## Twitter/X (KO)

지분 1% 기여자 한 명의 "내 데이터 빼 달라" 요청을 데이터셋 단위로 처리하면, 정말 지워야 할 양의 101배가 함께 삭제된다. 나머지는 삭제를 요청한 적 없는 다른 수백 명의 기록이다.

잊힐 권리를 학습 데이터에 집행하려면 파일이 아니라 토큰 단위로 저자를 따라가야 한다.

▶ https://blog.pebblous.ai/blog/token-level-provenance-unlearning/ko/

#페블러스 #잊힐권리 #GDPR #머신언러닝

---

## Twitter/X (EN)

Honoring a 1%-share author's "remove my data" request at the dataset level erases 101× more than it should. The rest belongs to hundreds of contributors who never asked.

Enforcing the right to be forgotten means tracing authorship by token, not by file.

▶ https://blog.pebblous.ai/blog/token-level-provenance-unlearning/en/

#Pebblous #RightToBeForgotten #GDPR #MachineUnlearning

---

## Facebook (KO)

"내가 쓴 것을, 학습 데이터에서 빼 주세요."

이 한 문장이 데이터팀 책상에 도착하는 순간을 자꾸 떠올리게 됩니다.

GDPR의 잊힐 권리일 수도 있고, 저작권 철회일 수도 있습니다. 요청은 언제나 사람의 이름으로 옵니다. "이 파일을 지워라"가 아니라 "저 사람을 지워라"로요.

그런데 지금의 데이터 도구는 파일과 데이터셋만 압니다. 그래서 답할 수 있는 건 둘뿐입니다. 그 사람이 손댄 문서를 통째로 버리거나, 그대로 두거나.

위키백과 문서 한 편은 수백 명이 함께 고쳐 온 기록입니다. 거기서 지분 1%인 사람 하나를 지우겠다고 문서를 통째로 버리면, 정말 지워야 할 99줄을 위해 그 101배가 함께 사라집니다. 나머지는 삭제를 요청한 적 없는 다른 이들의 문장입니다.

한 사람의 권리를 지키려는 삭제가, 아무것도 요청하지 않은 나머지 모두의 기록을 함께 태웁니다.

"정밀하게 도려낼 칼이 없을 때, 우리는 권리와 보존 중 무엇을 포기하고 있는 걸까요?"

한 연구는 저자의 흔적을 토큰 단위까지 따라 내려가면 그 배율이 1.3배로 줄어든다고 말합니다. 다만 조건이 하나 붙습니다. 그 출처는 데이터를 만드는 순간에만 남길 수 있고, 모델이 학습을 마친 뒤에는 소급해서 붙일 수 없다는 것.

데이터의 품질과 계보를 처음부터 진단 가능한 형태로 다뤄 온 입장에서, 이것은 잊힐 권리가 법정에 서기 전에 데이터를 설계하는 첫 순간에 먼저 준비해야 할 조건처럼 보입니다.

넣을 때의 품질을 오래 이야기해 왔습니다. 이제는 뺄 때의 정밀도를, 같은 자리에서 함께 생각할 때가 된 것 같습니다.

https://blog.pebblous.ai/blog/token-level-provenance-unlearning/ko/

#페블러스 #데이터품질 #잊힐권리 #머신언러닝 #GDPR #데이터거버넌스

---

## Facebook (EN)

"Please remove what I wrote from your training data."

I keep imagining the moment that one sentence lands on a data team's desk.

It might be GDPR's right to be forgotten. It might be a copyright takedown. The request always arrives in a person's name. Not "delete this file," but "forget this person."

Yet today's tooling only understands files and datasets. So it can answer in just two ways: throw out every document that person ever touched, or leave it all in place.

A single Wikipedia article is something hundreds of people have edited together. Erase one contributor who holds a 1% share by discarding the whole document, and to remove the 99 lines that actually had to go, 101 times as much disappears with them. The rest is the writing of others who never asked for anything.

A deletion meant to protect one person's right burns the records of everyone who never requested it.

"When there is no blade fine enough to cut cleanly, which are we quietly giving up: the right, or the record?"

One study finds that tracing an author's trace down to the token level shrinks that ratio to 1.3×. But a condition comes attached. Provenance can only be left at the moment the data is written, and cannot be restored once a model has finished training.

For a team that has long treated data quality and lineage as something to be diagnosed from the start, this looks like a condition to prepare when the data is first designed, well before the right to be forgotten ever reaches a courtroom.

We have talked for a long time about quality at the point of ingestion. Perhaps it is time to think about precision at the point of removal, in the same breath.

https://blog.pebblous.ai/blog/token-level-provenance-unlearning/en/

#Pebblous #DataQuality #RightToBeForgotten #MachineUnlearning #GDPR #DataGovernance
