# SNS 홍보 글: 값싼 LLM 심판도 인용 검증에서 프런티어 모델과 맞먹었다

> 소스: blog/citation-verifier-judge-bias/ko/index.html
> 생성일: 2026-07-13
> URL: https://blog.pebblous.ai/blog/citation-verifier-judge-bias/ko/
> voice: sns-cover (LinkedIn·Twitter), reflective (Facebook)

---

## LinkedIn (KO)

딥리서치가 붙인 각주가 맞는지 검증하는 데, 가장 비싼 모델은 필요하지 않았다.

7월 공개된 벤치마크가 8개 LLM 심판을 골드 라벨 1,248건에 맞춰 채점했다. 출처가 주제와 관련 있는지 가리는 과제에서 저비용 GPT-5-mini가 F1 0.908로 프런티어 모델을 앞섰다. 각주 검증이라는 반복 작업에 최상위 모델을 붙이지 않아도 된다는 뜻이다.

그런데 F1 하나만 보고 심판을 고르면 함정이 있다. 심판 전부가 인간 골드 통과율(79.3%)보다 인용을 박하게 판정했는데, 가장 박한 심판과 가장 후한 심판 사이가 42.9%에서 72.0%까지 벌어졌다. 방향은 같아도 크기는 제각각이라, 같은 F1을 받은 두 심판이 하류에서 전혀 다른 결과를 만든다.

이 편향을 강화학습 보상으로 그대로 쓰면, 논문은 그 방향이 학습 루프에서 증폭된다고 못 박는다. 검증기를 믿기 전에 검증기가 어느 쪽으로 기울었는지부터 재야 하는 이유다.

AI가 데이터를 검증하는 시대에, 검증기 자체의 편향이 새로운 신뢰의 급소가 된다.

▶ 전문: https://blog.pebblous.ai/blog/citation-verifier-judge-bias/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM #강화학습 #AI거버넌스 #GPT5mini #RLVR

---

## LinkedIn (EN)

Verifying whether a deep-research agent's footnotes are correct did not require the most expensive model.

A July benchmark scored eight LLM judges against 1,248 gold-labeled items. On deciding whether a source was relevant to the topic, the low-cost GPT-5-mini led at F1 0.908, ahead of the frontier models. Footnote verification, it turns out, need not be handed to a top-tier model.

But picking a judge on F1 alone hides a trap. Every judge rated citations more strictly than the human gold pass rate of 79.3%, and that strictness spread from 42.9% to 72.0% across models. Same direction, very different magnitude, so two judges with identical F1 can produce opposite outcomes downstream.

Use that bias directly as a reinforcement-learning reward, the paper warns, and the skew amplifies inside the training loop. Which is why you calibrate the verifier before you trust it.

In an era where AI verifies data, the bias of the verifier itself becomes the new pressure point for trust.

▶ Read: https://blog.pebblous.ai/blog/citation-verifier-judge-bias/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLM #ReinforcementLearning #AIGovernance #GPT5mini #LLMasaJudge

---

## Twitter/X (KO)

딥리서치의 각주를 검증하는 데 가장 비싼 모델은 필요 없었다. 저비용 GPT-5-mini가 출처 관련성 F1 0.908로 프런티어 모델을 앞섰다.

문제는 그다음. 값싼 심판일수록 위양성·위음성 편향의 방향이 달라, 이걸 강화학습 보상으로 쓰면 그대로 증폭된다. 검증기부터 캘리브레이션해야 하는 이유.

https://blog.pebblous.ai/blog/citation-verifier-judge-bias/ko/

#페블러스 #데이터품질 #GPT5mini #강화학습보상

---

## Twitter/X (EN)

Verifying a deep-research agent's footnotes didn't need the priciest model. Low-cost GPT-5-mini topped the frontier at F1 0.908 on source relevance.

The catch: cheaper judges err in different directions, and used as an RL reward, that bias amplifies in the training loop. Calibrate the verifier first.

https://blog.pebblous.ai/blog/citation-verifier-judge-bias/en/

#Pebblous #DataQuality #GPT5mini #RLReward

---

## Facebook (KO)

딥리서치에게 긴 답을 시키면, 문장마다 각주가 딸려 나옵니다.

링크를 눌러 보면 페이지가 열리고, 제목만 봐도 그럴듯합니다. 그런데 그 각주가 정말 앞 문장을 뒷받침하는지, 저는 확인해 본 적이 드뭅니다. 대개는 그냥 믿고 넘어갑니다.

각주가 맞는지 다시 검증하려면 또 하나의 큰 모델을 채점자로 세워야 한다는 게 그동안의 통념이었습니다. 그런데 최근 벤치마크는 그 통념을 흔듭니다. 저비용 모델이 출처 관련성 판정에서 프런티어 모델을 앞선 겁니다. 검증은 생각보다 값싸게 자동화됩니다.

여기까지는 반가운 소식입니다.

문제는 그다음 문장에 있었습니다. 여덟 심판 모두 사람보다 인용을 박하게 판정했지만, 그 박한 정도는 저마다 크게 벌어졌습니다. 값싼 심판일수록 인용을 통과시키거나 탈락시키는 편향의 '방향'이 다르다는 것. 같은 점수를 받은 두 심판이 어느 쪽으로 틀리는지는, 그 안에 조용히 묻혀 있습니다.

그리고 이 편향을 학습의 보상으로 쓰는 순간, 기울어진 방향이 그대로 증폭됩니다. 검증기 하나가 소리 없이 파이프라인 전체를 한쪽으로 기울이는 셈입니다.

"누가 심판을 심판하는가." 오래된 물음이 데이터 품질의 언어로 돌아옵니다. 검증기를 믿기 전에, 그 검증기가 지금 어느 쪽으로 기울어 있는지 먼저 재 보는 것. 우리 파이프라인 안의 심판은, 지금 어느 쪽으로 기울어 있을까요.

https://blog.pebblous.ai/blog/citation-verifier-judge-bias/ko/

#페블러스 #데이터클리닉 #데이터품질 #LLM심판 #GPT5mini #AIReadyData

---

## Facebook (EN)

Ask a deep-research agent for a long answer, and every sentence comes back wearing a footnote.

Click a link and the page opens. The title looks on-topic. And yet I rarely check whether the source actually holds up the sentence in front of it. Mostly I just trust it and move on.

The assumption has been that catching a bad footnote requires standing up another large model as the grader. A recent benchmark unsettles that. A low-cost model edged out the frontier ones at judging whether a source was relevant. Verification, it turns out, is cheaper to automate than we thought.

That is the good news.

The unease came one sentence later. Every judge rated citations more harshly than a human would, but the degree varied from one to the next. Cheaper judges lean in different directions. Some wave through weak citations; others fail perfectly good ones. Which way a judge errs stays quietly buried inside a single score.

Turn that bias into a training reward, and the tilt doesn't wash out. It amplifies. One skewed verifier can lean an entire pipeline to one side, without a sound.

Who judges the judges? The old question returns in the language of data quality. Before we trust a verifier, we might first measure which way it already leans. Which way is the judge inside our own pipeline leaning, right now?

https://blog.pebblous.ai/blog/citation-verifier-judge-bias/en/

#Pebblous #DataClinic #DataQuality #LLMasaJudge #GPT5mini #AIReadyData
