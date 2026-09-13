# SNS 홍보 글: 비전언어모델은 증거가 바뀌어도 같은 선택을 되풀이했다

> 소스: blog/vlm-experiment-selection-benchmark/
> 생성일: 2026-09-14
> URL: https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

물리 상황은 그대로 두고 관측값 하나만 바꿔 끼운 문제 쌍 288개. 정답 행동이 쌍 안에서 반드시 갈리도록 짰는데, 여섯 개 오픈 비전언어모델은 쌍의 95.1~100%에서 같은 행동으로 돌아왔다.

9월 10일 arXiv에 올라온 벤치마크다. 미끄러지는 물체와 튀어오르는 물체와 용수철에 매달린 물체를 써서, 지금 답할지 아니면 무엇을 더 잴지를 정하는 능력만 따로 떼어 쟀다. 쌍의 두 결정을 다 맞힌 최고 비율은 5.9%였다.

습관이 그대로 찍힌 자리가 있다. Pixtral 12B는 이미 답할 수 있는 문항 무리에서 281번 멈추고 7번은 이미 잰 속성을 다시 샀는데, 아직 갈리는 문항 무리에서도 같은 숫자가 나왔다. 두 무리는 정답 행동이 정반대다.

추론 프롬프트가 처방은 아니었다. 행동이 바뀌는 일은 분명히 늘었지만 최소 비용 선택 정확도는 세 모델이 오르고 세 모델이 떨어졌다. 저자들도 계획해 둔 통제 기준 셋을 하나도 채우지 못했다고 적고, 이 분석을 탐색적이라고 스스로 규정한다.

평균 정답률만 채점하면 이 습관은 점수 안으로 섞여 들어간다. 페블러스가 데이터 파이프라인을 들여다볼 때 되묻는 것도 같은 자리다. 이 파이프라인의 AI는 데이터를 읽기만 하는가, 어떤 데이터를 더 모을지도 정하는가.

▶ 전문: https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #VLM #비전AI #AI평가 #물리추론 #Pixtral #Qwen

---

## LinkedIn (EN)

Change one observation in a physics problem and the right move changes with it. Six open vision language models did not follow. On 95.1% to 100% of the paired images, they came back with the same action.

The benchmark went up on arXiv on September 10. Using a sliding block, a bouncing object and a mass on a spring, it isolates one ability: deciding whether to answer now or measure something else first. The best rate for getting both decisions in a pair right was 5.9%.

One record shows the habit bare. Pixtral 12B stopped 281 times and re-bought an already measured property 7 times among the questions that could already be answered, then returned the identical counts among the questions that could not. The correct action in those two groups is opposite.

Reasoning prompts are not the cure. Actions did vary more, but minimum cost choice accuracy rose for three models and fell for three. The authors met none of the three control thresholds they had planned, label their own analysis exploratory, and decline to name a single internal cause.

Score the final answer alone and a habit like that folds into the average. The question we keep running into at Pebblous is the same one. Does the AI in this pipeline only read data, or does it also decide what data to gather next?

▶ Read: https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #VLM #AIEvaluation #PhysicalReasoning #Pixtral #Qwen #arXiv

---

## Twitter/X (KO)

물리 상황은 그대로 두고 관측값 하나만 바꾼 문제 쌍 288개. 정답 행동은 쌍 안에서 반드시 갈리는데, 여섯 개 비전언어모델은 95.1~100%에서 같은 행동으로 돌아왔다.

언제 멈추고 무엇을 잴지를 갈라서 재면, 평균 정답률이 덮어 온 습관이 드러난다.

▸ https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/ko/

#페블러스 #데이터품질 #VLM #물리추론

---

## Twitter/X (EN)

288 physics problems, paired so that changing one observation changes the correct move. Six vision language models returned the same action on 95.1% to 100% of the pairs.

Score the final answer alone and a habit like that folds into the average.

▸ https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/en/

#Pebblous #DataQuality #VLM #PhysicalReasoning

---

## Facebook (KO)

실험실에서든 회의실에서든, 하루에 몇 번씩 지나가는 갈림길이 있습니다.

"이 정도면 답해도 되나, 하나 더 재 봐야 하나."

이 판단은 보통 점수로 남지 않습니다. 결론이 맞았는지만 기록되고, 거기까지 오면서 무엇을 더 재기로 했는지는 사라집니다.

9월 10일 arXiv에 올라온 벤치마크는 그 사라지는 자리를 따로 떼어 쟀습니다. 미끄러지는 물체, 튀어오르는 물체, 용수철에 매달린 물체. 물리 상황은 그대로 둔 채 관측값이나 질문 하나만 바꾼 문제 쌍을 288개 만들어, 한쪽은 이미 답할 수 있고 다른 쪽은 하나를 더 재야 하도록 짜 두었습니다.

정답 행동이 쌍 안에서 반드시 갈리게 만든 겁니다.

여섯 개 오픈 비전언어모델은 그 갈림을 거의 따라가지 못했습니다. 쌍의 95.1%에서 100%가 같은 행동으로 돌아왔습니다.

오래 붙잡혔던 건 이 비율보다 한 장면이었습니다. Pixtral 12B는 이미 답할 수 있는 문항 무리에서 281번 멈추고 7번은 이미 잰 속성을 다시 샀는데, 아직 갈리는 문항 무리에서도 여섯 칸이 전부 같은 숫자였습니다. 두 무리는 정답 행동이 정반대입니다.

증거가 바뀌어도 선택에는 닿지 않은 겁니다. 저는 이것을 '고정된 습관'이라 부르기로 했습니다. 어떤 답을 고르느냐의 습관이 아니라, 무엇을 볼지 정하는 자리에서 굳어 버린 습관입니다.

이 습관에 값을 매긴 실험이 하나 더 있습니다. 저장해 둔 응답을 그대로 두고 선택 규칙만 바꿔 다시 채점했더니, Qwen2.5-VL 3B가 자기 판단으로 고를 때는 평균 비용 0.99를 쓰고 18.8%를 맞혔고, 가장 싼 충분한 측정만 고르는 규칙에서는 비용 0.50에 31.7%가 나왔습니다. 덜 재고 더 맞히는 자리가 남아 있다는 뜻입니다. 다만 이것은 이미 저장된 답을 다시 채점한 것이지, 새 가격표를 보여 줬을 때 모델이 반응하는지를 시험한 것은 아닙니다.

저자들도 선을 그어 두었습니다. 계획해 둔 통제 기준 셋을 하나도 채우지 못했고, 이 결과가 체계적인 행동 실패를 보여 주기는 하되 하나의 내부 원인을 지목하지는 않는다고 적었습니다.

페블러스가 데이터 파이프라인을 들여다볼 때 자주 부딪히는 물음이 여기와 겹칩니다. 이 파이프라인의 AI는 데이터를 읽기만 하는가, 아니면 어떤 데이터를 더 모을지도 정하는가. 뒤쪽이라면 논문이 잰 자리가 그대로 우리 자리가 됩니다.

"우리 쪽에서 무엇을 더 모을지 정하는 일은, 지금 누가 하고 있습니까?"

수집 단계를 모델에 맡겨 보신 팀이 있다면, 그 자리에 어떤 안전장치를 두셨는지 들어 보고 싶습니다.

▸ https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #VLM #물리추론 #Pixtral #AIReadyData

---

## Facebook (EN)

There is a fork that comes up several times a day, in a lab or in a meeting room.

"Is this enough to answer, or should I measure one more thing?"

That judgment usually leaves no score behind. What gets recorded is whether the conclusion was right. What you decided to measure along the way disappears.

A benchmark posted to arXiv on September 10 pulled that vanishing step out and measured it alone. A sliding block, a bouncing object, a mass on a spring. The physics stays fixed while a single observation or a single question changes, across 288 pairs built so that one side can already be answered and the other needs one more measurement.

Inside every pair, the correct action has to differ.

Six open vision language models barely tracked that difference. Between 95.1% and 100% of the pairs came back with the same action.

What held me longer than the rate was a single record. Pixtral 12B stopped 281 times and re-bought an already measured property 7 times among the questions that could already be answered, and the questions that could not produced the identical six numbers. The correct action in those two groups is opposite.

The evidence changed and never reached the choice. I have started calling this a fixed habit. Not a habit about which answer to give, but one that hardened at the point where you decide what to look at.

One more experiment puts a price on it. The authors left the stored responses untouched and rescored them under different choice rules. Qwen2.5-VL 3B, choosing for itself, spent a mean cost of 0.99 for 18.8% correct; under a rule that takes only the cheapest sufficient measurement, the cost fell to 0.50 and accuracy rose to 31.7%. There is room to measure less and get more right. The comparison rescores answers already on disk, though, so it does not test how a model reacts when a new price list is set in front of it.

The authors drew their own lines too. They met none of the three control thresholds in their plan, and they write that these results show a systematic behavioral failure without naming one internal cause.

The question Pebblous keeps running into inside data pipelines sits right next to that one. Does the AI in this pipeline only read data, or does it also decide what data to gather next? If it is the second, the place this paper measured becomes our place too.

"Who, on your side, is deciding what to collect next?"

If your team has already handed a collection step to a model, I would like to hear what you put around it.

▸ https://blog.pebblous.ai/blog/vlm-experiment-selection-benchmark/en/

#Pebblous #DataClinic #DataQuality #VLM #PhysicalReasoning #Pixtral #AIReadyData
