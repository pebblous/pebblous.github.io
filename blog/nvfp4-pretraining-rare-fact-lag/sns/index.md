# SNS 홍보 글: NVFP4로 싸게 배운 AI, 드문 사실은 더 늦게 외운다

> 소스: blog/nvfp4-pretraining-rare-fact-lag/
> 생성일: 2026-11-16
> URL: https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 트랜스포머를 두 번 학습시키면서 바꾼 것은 숫자 형식 하나뿐이었다. 검증 손실은 합성 전기문 조건에서 0.1~0.9% 차이로 사실상 겹쳤다.

그런데 전기문에 적힌 인물 정보를 같은 수준으로 꺼내 맞히게 하려면, 4비트 형식 NVFP4 쪽에 그 인물을 1.32배 더 보여 줘야 했다. 웹 텍스트를 섞은 조건에서는 1.52배다. 소속 기관 없이 연구하는 두 사람이 11월 9일 arXiv에 올린 실험이다.

곡선이 그 차이를 못 본 이유는 가중치에 있다. 검증 집합은 노출 빈도에 비례해 인물을 뽑으므로, 256번 등장한 사실이 검증 손실의 절반을 가져간다. 자주 등장한 쪽에서 두 형식의 차이는 최대 0.07 nats로 사실상 0이고, 한 번에서 네 번 사이에 등장한 사실에서만 0.67~0.85 nats로 벌어진다. 무게를 쥔 구간에는 차이가 없었다.

익숙한 처방은 절반만 들었다. 줄어든 보폭만큼 학습률을 올리자 걸음은 돌아왔지만, 노이즈가 업데이트 방향에 섞여 신호 대 잡음비를 낮추는 몫은 학습이 끝날 때까지 남았다. 전체의 약 3분의 2다. 엔비디아가 공개한 교정 레시피를 같은 모델 크기에 맞춰 적용했더니 검증 손실 격차는 60%가 메워졌는데, 노출 비용 격차는 42%만 회복됐다.

범위는 저자들이 먼저 좁혀 둔다. 모델은 최대 9,660만 파라미터, 학습량은 최대 10억 토큰이고, 4비트 행렬곱은 하드웨어가 아니라 소프트웨어 에뮬레이션으로 돌렸다. 외운 대상도 가상의 전기문이다.

그래도 한 줄은 남는다. 정밀도를 바꾸는 결정이 같은 사실을 몇 번 보여 줘야 하는지를 바꿔 놓았고, 그 횟수는 모델 설정이 아니라 데이터 쪽 예산에 속한다. AI 학습 데이터의 품질은 페블러스가 DataClinic으로 숫자를 매겨 두는 항목이다. 형식을 싸게 바꾸기로 한 날 데이터 예산도 같이 다시 잡혔는지는, 어느 곡선에도 적히지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #NVFP4 #저정밀학습 #양자화 #롱테일지식 #NVIDIA #arXiv

---

## LinkedIn (EN)

A transformer pretrained end to end in 4-bit arithmetic landed within 0.1% to 0.9% of a BF16 run on loss, on synthetic biographies, and then needed 1.32 times as many appearances of a fact to recall it as well.

Chang Lu and Mengjiao Zhang, with no institution behind them, put it on arXiv on 9 November. Only the format changed. The same transformer was trained twice, once in NVIDIA's NVFP4 and once in BF16, on fictional biographies whose exposure counts were planted by hand in nine bins. Mixing them into web text widened it further.

Equalising the runs on loss rather than tokens still left 1.25 and 1.22. Reading both models back through BF16 at evaluation time left 1.26 and 1.30. The penalty had formed during training, not at the moment an answer is read.

The loss curve stays quiet for an arithmetic reason. A validation set drawn in proportion to exposure frequency hands its weight to the people who appeared often, and the most frequent bin alone accounts for half of it. Among the frequent facts the two formats differ by at most 0.07 nats. Among facts seen one to four times, by 0.67 to 0.85. The weight sits where there is no difference.

Raising the learning rate, the standard remedy, buys back the shortened step and nothing else. Noise in the direction of the update holds to the end and makes up roughly two-thirds of the cost. NVIDIA's mitigation recipe, adapted to these model sizes, closed 60% of the loss gap and 42% of the exposure-cost gap.

The authors set their own limits: 96.6M parameters at most, a billion tokens at most, matrix multiplication in software emulation, and fictional biographies rather than real long-tail facts.

What survives those caveats is a pricing question. A decision about number format changed how many times a fact has to appear, and that count is set while the data is prepared, not while the model is configured. Quality in AI training data is something Pebblous puts into a number, and DataClinic is the tool that produces the number. A format picked for cheapness quietly repriced the data budget, and no loss curve records it.

▶ Read: https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #NVFP4 #LowPrecisionTraining #Quantization #LongTailKnowledge #NVIDIA #arXiv

---

## Twitter/X (KO)

NVFP4로 처음부터 학습한 모델은 검증 손실이 BF16 기준과 거의 겹쳤다.

그런데 같은 수준으로 꺼내 맞히게 하려면 같은 사실을 1.32배 더 보여 줘야 했다.

평균이 평평한 동안 비용은 드문 사실에서만 발생했다.

https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/ko/

#페블러스 #데이터품질 #NVFP4 #저정밀학습

---

## Twitter/X (EN)

Pretrain a transformer entirely in NVFP4 and its validation loss lands on top of a BF16 run.

Ask it for a fact it was trained on and it needs 1.32 times as many appearances to get there.

The average held steady. The cost was paid in the thin bins, where quality control is hardest.

https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/en/

#Pebblous #DataQuality #NVFP4 #LowPrecisionTraining

---

## Facebook (KO)

학습이 끝나고 손실 곡선 두 개를 겹쳐 놓는 자리가 있습니다.

둘이 거의 포개지면 그날은 좋은 날입니다. 숫자 형식을 4비트로 내려 연산비를 아꼈는데 성적은 그대로라는 뜻이니까요.

11월 9일 arXiv에 올라온 실험은 그렇게 겹친 곡선 아래를 열어 봤습니다.

소속 기관 없이 연구하는 두 사람이 같은 트랜스포머를 NVFP4와 BF16으로 각각 처음부터 학습시키고, 가상의 인물 전기문에 적힌 생일과 출생도시와 직업을 꺼내 맞히게 했습니다.

곡선은 겹쳤는데 꺼내 맞히는 쪽이 갈렸습니다. 같은 수준에 닿으려면 4비트 쪽에 그 인물을 1.32배 더 보여 줘야 했습니다.

곡선이 그 차이를 비껴간 이유는 셈법에 있었습니다.

검증 집합은 등장 빈도에 비례해 인물을 뽑습니다. 256번 등장한 사실이 검증 손실의 절반을 가져가고, 그 흔한 쪽에서 두 형식은 구별되지 않습니다. 차이는 한두 번만 등장한 구간에 전부 있는데, 그 구간은 평균에서 거의 무게를 갖지 못합니다.

곡선이 거짓을 적은 것은 아닙니다. 다만 그 곡선의 가중치는 자기가 계산된 데이터의 빈도 분포에서 왔습니다.

"한 번 나온 항목과 백 번 나온 항목이 따로 적히는 자리는, 우리 성적표의 어느 칸입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 구간을 쪼개 따로 세려면 항목마다 몇 번 등장했는지가 먼저 데이터에 붙어 있어야 합니다. 이번 실험이 구간별로 셀 수 있었던 것도 노출 횟수를 사람이 미리 정해 심어 두었기 때문입니다.

표식이 없는 자료에서는, 드문 것이 뒤처져도 뒤처졌다는 흔적이 남지 않습니다.

평평한 곡선은 그 자체로는 거의 말이 없습니다. 무엇을 세었는지 알고 나서야 말을 시작합니다.

▸ https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/ko/

#페블러스 #데이터클리닉 #데이터품질 #NVFP4 #저정밀학습 #NVIDIA

---

## Facebook (EN)

There is a moment at the end of a training run when two loss curves get laid one over the other.

If they sit almost on top of each other, that is a good day. The cheaper arithmetic cost nothing.

A 9 November arXiv preprint went underneath a pair of curves exactly like that.

Chang Lu and Mengjiao Zhang, working without an institution behind them, pretrained the same transformer twice, once in NVIDIA's 4-bit NVFP4 and once in BF16, and then asked both models for birth dates and birth cities and jobs out of fictional biographies.

The curves agreed. The answers did not. Reaching the same level of recall took 1.32 times as many appearances of a person on the 4-bit side.

The curve's silence has an arithmetic reason.

A validation set draws people in proportion to how often they appeared. Those who turned up 256 times account for half of the loss on their own, and among the frequent ones the two formats cannot be told apart. What separates them sits entirely among the people who turned up once or twice, and they barely register in an average.

No part of the curve is false. Its weighting simply came from the frequency distribution of the data it was computed on, and what it counts heavily was settled elsewhere.

"On the scorecard you actually read, which cell keeps a fact seen once apart from a fact seen a hundred times?"

Pebblous establishes whether AI training data is in a state a model can use, and DataClinic returns that answer as a figure. Splitting any result by frequency bin first requires knowing, item by item, how often each one turned up. Counting bin by bin worked here only because somebody had planted those counts in advance.

In data carrying no such marking, the rare things can fall behind and leave nothing to show that they did.

A flat curve says very little on its own. It begins to say something once you know what it counted.

https://blog.pebblous.ai/blog/nvfp4-pretraining-rare-fact-lag/en/

#Pebblous #DataClinic #DataQuality #NVFP4 #LowPrecisionTraining #NVIDIA
