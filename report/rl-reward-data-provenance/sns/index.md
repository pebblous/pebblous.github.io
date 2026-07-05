# SNS 홍보 글: 검증 보상형 강화학습이 학습한 데이터는, 아무도 원자 단위로 추적하지 못한다

> 소스: report/rl-reward-data-provenance/ko/index.html
> 생성일: 2026-07-05
> URL: https://blog.pebblous.ai/report/rl-reward-data-provenance/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

한 연구팀이 검증 보상형 강화학습(RLVR)의 학습 데이터 145만 건을 원자 단위로 거슬러 올라갔다. 결과는 성취이자 폭로였다.

거의 전부가 스무 개 남짓한 원자 소스로 귀속됐고, 그중 70.4%가 단 5개 소스에서 갈라져 나왔다. 서로 다른 이름의 '새 데이터셋'이 실은 같은 뿌리의 변형이었다는 뜻이다. 다양성과 독립성이 착시였던 셈이다.

사전학습 코퍼스의 출처를 이제야 감사하기 시작한 사이, 모델의 능력을 끌어올리는 무게중심은 이미 RLVR로 옮겨갔다. 그런데 추적 인프라는 여전히 문서 코퍼스에 묶여 있다.

더 중요한 건 원자 단위로 파고들어도 닿지 못한 지점이다. 정답을 판정하는 검사기(verifier), 합성 과제 생성, 보상 함수 설계는 '데이터셋'이 아니라 계보 그래프 밖에 남는다. 벤치마크 오염 3만여 건도 그렇게 깊이 들여다봤기에 드러났다.

'무엇을 학습했나'라는 질문의 전선은 코퍼스에서 보상 신호로 옮겨갔고, 그 새 전선은 아직 거의 비어 있다.

▶ 전문: https://blog.pebblous.ai/report/rl-reward-data-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #강화학습 #데이터거버넌스 #학습데이터 #RLVR #ATLAS

---

## LinkedIn (EN)

A research team traced 1.45 million reinforcement-learning training instances back to their atomic sources. The result was both an achievement and an exposé.

Nearly all of it resolved to about twenty atomic sources, and 70.4% descended from just five. Datasets shipping under different names turned out to be variants of the same handful of roots. The diversity was an illusion.

While the industry is still auditing pretraining corpora, the center of gravity for model capability has already shifted to reinforcement learning with verifiable rewards. The tracing infrastructure has not moved with it.

What matters more is where atom-level attribution stops. The verifier, the synthetic task generator, and the reward function do not count as "datasets," so none of them appear in the lineage graph. The 36,000-plus contaminated instances only surfaced because someone looked this closely.

The question of what a model learned has moved from the corpus to the reward signal. That new frontier is still almost empty.

▶ Read: https://blog.pebblous.ai/report/rl-reward-data-provenance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ReinforcementLearning #DataGovernance #RLVR #ATLAS

---

## Twitter/X (KO)

검증 보상형 강화학습(RLVR)의 학습 데이터를 원자 단위로 거슬러 올라갔더니, 70.4%가 단 5개 소스에서 나왔다.

'새 데이터셋'의 다양성은 착시였다. 데이터 신뢰의 다음 전선은 문서 코퍼스가 아니라 보상 신호의 출처다.

▶ https://blog.pebblous.ai/report/rl-reward-data-provenance/ko/

#페블러스 #데이터품질 #RLVR #강화학습

---

## Twitter/X (EN)

A research team traced reinforcement-learning training data back to its roots. 70.4% came from just five sources.

The diversity of "new datasets" was an illusion. The next front for data trust isn't the corpus. It's the provenance of reward signals.

▶ https://blog.pebblous.ai/report/rl-reward-data-provenance/en/

#Pebblous #DataQuality #RLVR #ReinforcementLearning

---

## Facebook (KO)

'AI가 무엇을 학습했나.'

지난 몇 년, 이 질문은 늘 한 방향을 향해 있었습니다. 웹에서 긁어모은 문서, 저작권 있는 책, The Pile과 C4 같은 코퍼스. 소송과 감사가 그 뒤를 좇았고, 우리는 이제야 겨우 그 안을 들여다보기 시작했습니다.

그런데 그 사이, 모델의 능력을 끌어올리는 무게중심은 조용히 다른 곳으로 옮겨가 있었습니다.

검증 보상형 강화학습. 수학 정답이 맞는지, 코드가 테스트를 통과하는지를 자동으로 채점해 보상을 주는 방식입니다. 지금 프런티어 모델의 추론 능력은 대부분 여기서 만들어집니다.

최근 한 연구팀이 이 단계의 학습 데이터 145만 건을 원자 단위로 거슬러 올라갔습니다. 거의 전부의 출처를 밝혀냈는데, 밝히고 보니 드러난 것은 깊이가 아니라 얕음이었습니다. 전체의 70% 남짓이 손에 꼽을 소수의 소스에서 갈라져 나온 변형이었고, 평가에 써야 할 문제가 학습 데이터로 새어 든 흔적도 곳곳에 있었습니다.

"우리는 정말 무엇을 학습시키고 있는가?"

더 오래 남는 건, 그렇게 원자 단위로 거슬러 올라가도 끝내 닿지 못한 자리가 있었다는 사실입니다. 정답을 판정하는 검사기가 어디서 왔는지, 보상을 설계한 판단이 무엇이었는지는 '데이터셋'이 아니어서 계보 밖에 남습니다.

질문의 전선은 이미 문서에서 보상 신호로 옮겨갔습니다. 다만 그것을 추적할 언어와 도구가 아직 그 이동을 따라가지 못하고 있을 뿐입니다. 데이터의 출처와 계보를 자산으로 다뤄 온 페블러스가 이 공백을 오래 들여다보는 이유도 여기에 있습니다.

다음에 추적해야 할 대상은, 어쩌면 이미 정해져 있는지도 모르겠습니다.

전문: https://blog.pebblous.ai/report/rl-reward-data-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #RLVR #강화학습 #데이터거버넌스

---

## Facebook (EN)

"What did the model actually learn?"

For a few years, that question pointed in one direction. Scraped web text. Copyrighted books. Corpora with names like The Pile and C4. Lawsuits and audits followed, and only now are we beginning to see inside them.

Somewhere in that time, the thing that actually lifts a model's ability had quietly moved elsewhere.

It moved to reinforcement learning with verifiable rewards: teaching a model by checking, automatically, whether its answer is right or its code passes the tests. Most of the reasoning ability in today's frontier models is shaped here.

Recently a research team traced 1.45 million of these training instances back, atom by atom. They recovered almost all of the origins. And what the recovery revealed wasn't depth. It was shallowness. Roughly seventy percent traced back to a small handful of sources, and evaluation problems had quietly leaked into the training data.

"So what are we really training on?"

What stays with me is the part even that careful tracing couldn't reach. Where the answer-checker came from, what judgment shaped the reward: these aren't "datasets," so they fall outside the lineage entirely.

The frontier of the question has already moved from the document to the reward signal. Our language and tools for tracing it simply haven't caught up. That gap is why Pebblous, which has long treated data provenance and lineage as an asset, keeps looking closely here.

Maybe the next thing worth tracing is already decided.

Read: https://blog.pebblous.ai/report/rl-reward-data-provenance/en/

#Pebblous #DataClinic #DataQuality #RLVR #ReinforcementLearning #DataGovernance
