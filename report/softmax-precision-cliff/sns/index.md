# SNS 홍보 글: 소프트맥스, 교과서와 파이토치가 같은 자리에서 틀린다

> 소스: report/softmax-precision-cliff/ko/index.html
> 생성일: 2026-10-29
> URL: https://blog.pebblous.ai/report/softmax-precision-cliff/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

구글 딥마인드 연구진 세 명이 소프트맥스와 교차 엔트로피의 표준 구현을 고치는 아홉 쪽짜리 글을 10월 22일 arXiv에 올렸다. 고장 나는 자리가 특별한 조건이 아니라 평범한 순간이다. 모델이 정답을 아주 확신하는 때다.

그 순간 손실이 정확히 0.0으로 찍히고, 같은 자리에서 정답 쪽 기울기도 0.0이 된다. 나머지 범주의 기울기는 작은 양수로 멀쩡히 남는다. 더해서 0이 되어야 할 기울기 합이 깨지고, 한쪽으로만 쏠린 그 작은 신호를 Adam이 정상 크기의 갱신으로 되돌려 놓는다. 경고는 뜨지 않는다. NaN도 발산도 없다.

선이 어디 그어지는지는 숫자 형식이 정한다. bf16에서는 정답 확률 99.6%이고, 학습 후반의 분류 모델이 흔히 닿는 확신이다. fp32에서는 로짓 마진 16.6인데, Adam의 기본 ε이 학습을 데려가는 마진은 18.4다. 서로 다른 이유로 서로 다른 시기에 정해진 기본값 둘이 같은 눈금 위에서 1.8만큼 어긋나 있다.

둘 중 새로 찾은 것은 하나뿐이다. 첫째 결함에 소프트맥스 붕괴라는 이름을 붙인 것은 프리에토 외이고, 2025년 1월이다. 그 결함이 만드는 손실 스파이크는 그보다 먼저인 2022년에 새총 현상이라는 이름을 받았다. 당시 저자들은 원인을 찾지 못했다고 초록에 그대로 적었다. 이번 논문이 보탠 것은 교사를 이미 따라잡은 학생을 교사에게서 밀어내는 둘째 결함과, 두 결함을 함께 고치는 구현이다.

범위는 정확히 적을 필요가 있다. 논문은 피해를 모듈러 산술 장난감 과제에서만 입증했고, 결론에 대규모 학습에서는 흔치 않다고 스스로 적었다. 지금 대부분의 학습이 멀쩡한 이유도 이 층이 검증돼서가 아니다. 파이토치의 자동 형변환이 손실 계산만 fp32로 올려 주기 때문이고, 공식 문서는 그렇게 정한 이유를 적지 않는다. 속도를 얻으려 그 기본값 밖으로 나가는 경로는 셋이다. 저정밀 손실, 융합 커널, 컴파일 실행. 셋 다 수정 PR이 스스로 적은 제외 목록에 올라 있다.

네 해 동안 여섯 번, 사람과 기계가 번갈아 이 결함에 들어갔다. 여섯 번 다 성능 지표에서 출발하지 않았다. 깨지면 안 되는 성질 하나씩을 들고 갔다. 기울기의 합이 0인가. 유한한 입력에 유한한 출력이 나오는가.

▶ 전문: https://blog.pebblous.ai/report/softmax-precision-cliff/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #소프트맥스 #교차엔트로피 #부동소수점 #구글딥마인드 #PyTorch #JAX

---

## LinkedIn (EN)

Three Google DeepMind researchers posted a nine-page fix for softmax and cross-entropy to arXiv on October 22. The place these functions break is not an exotic corner. It is an ordinary moment: when a model becomes very sure of the right answer.

At that point the loss rounds to exactly 0.0, and the gradient on the correct class rounds to 0.0 with it. Every other class keeps a small positive gradient. Gradients that should sum to zero no longer do, and Adam takes the leftover one-sided signal and scales it back up to a normal step. No warning is raised. Nothing turns into NaN and nothing diverges.

Where the line falls is decided by the number format. In bf16 it sits at 99.6% confidence on the correct class, which classifiers reach routinely late in training. In fp32 it sits at a logit margin of 16.6, while Adam's default epsilon carries training to a margin of 18.4. Two defaults, fixed at different times for unrelated reasons, miss each other by 1.8 on the same scale.

Only one of the two bugs is new here. The first was named Softmax Collapse by Prieto et al. in 2025, and the loss spikes it produces were named the slingshot mechanism back in 2022 by authors who wrote in their own abstract that they could not explain them. What this paper adds is the second failure, which pushes a distilled student away from a teacher it has already matched, plus one fix that covers both.

The scope is worth stating plainly. The paper demonstrated harm only on toy modular-arithmetic tasks and wrote in its conclusion that these conditions are uncommon in standard large-scale training. And the reason most runs are fine today is not that this layer was audited. It is that PyTorch's autocast promotes the loss computation to fp32; the documentation lists which operations get promoted without saying why. Three routes leave that default in exchange for speed: low-precision loss, fused kernels and compiled execution. All three sit on the exclusion list the fix's own pull request wrote for itself.

Over four years, people and machines took turns going into this bug six times. Not one of those passes started from a performance metric. Each carried a property that must not break. Do the gradients sum to zero. Does a finite input give a finite output.

▶ Read: https://blog.pebblous.ai/report/softmax-precision-cliff/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Softmax #CrossEntropy #FloatingPoint #GoogleDeepMind #PyTorch #JAX

---

## Twitter/X (KO)

모델이 정답을 아주 확신하면 교차 엔트로피 손실이 정확히 0.0으로 찍히고, 정답 쪽 기울기도 같이 0.0이 된다. 나머지 범주는 양수로 남아 기울기 합이 깨진다. 경고도 NaN도 없다.

고장 난 순간에 계기판이 가장 좋은 값을 가리킨다.

https://blog.pebblous.ai/report/softmax-precision-cliff/ko/

#페블러스 #소프트맥스 #구글딥마인드 #PyTorch

---

## Twitter/X (EN)

Get a model sure enough of the right answer and cross-entropy loss rounds to exactly 0.0, taking the gradient on the correct class with it. The other classes stay positive, so the gradients stop summing to zero. No warning, no NaN.

The instrument reads its best possible value at the moment it breaks.

https://blog.pebblous.ai/report/softmax-precision-cliff/en/

#Pebblous #Softmax #GoogleDeepMind #PyTorch

---

## Facebook (KO)

"loss: 0.0000"

학습 로그에서 이 줄을 보면 마음이 놓입니다. 모델이 배울 것을 다 배웠다는 뜻이니까요.

구글 딥마인드 연구진 세 명이 10월 22일 arXiv에 올린 아홉 쪽짜리 글은, 그 줄이 정반대를 뜻할 수도 있다고 적습니다.

교차 엔트로피 손실은 1에 아주 작은 수를 더한 값의 로그입니다. 모델이 정답을 충분히 확신하면 그 작은 수가 1 옆에서 반올림에 먹히고, log(1)은 0입니다.

그래서 손실이 0.0으로 찍힙니다. 같은 자리에서 정답 쪽 기울기도 0.0이 됩니다.

나머지 범주의 기울기는 양수로 남습니다. 더해서 0이 되어야 할 것이 0이 되지 않습니다. 아무것도 경고하지 않습니다.

bf16에서 그 선은 정답 확률 99.6%입니다. 학습 후반의 분류 모델에게 드문 확신이 아닙니다.

제가 오래 머문 문장은 그다음이었습니다. 지금 대부분의 학습이 멀쩡한 이유는 누가 이 층을 검사했기 때문이 아닙니다. 파이토치의 자동 형변환이 손실 계산만 조용히 fp32로 올려 주고 있었기 때문입니다. 공식 문서는 어느 연산을 올리는지는 적어 두고, 왜 그렇게 정했는지는 적지 않습니다.

속도를 얻으려고 그 기본값 밖으로 나가는 경로들이 이번 주에 처음 이름으로 불렸습니다. 저정밀 손실, 융합 커널, 컴파일 실행.

"우리가 '검증했다'고 말할 때, 그 말은 어느 층까지 닿고 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 논문이 가리키는 자리는 그 아래층입니다. 데이터가 쓸 만한 상태인지를 묻기 전에, 그 데이터를 숫자로 받아 적는 연산이 쓸 만한 상태인지를 묻는 자리.

사람들이 이 현상을 처음 본 것은 네 해 전입니다. 손실이 갑자기 튀었다가 돌아오는 그래프에 2022년에 '새총'이라는 이름이 붙었습니다. 원인이 지목되기까지는 거기서 두 해 일곱 달이 더 걸렸습니다.

이름이 원인보다 먼저 붙는 일은 드물지 않습니다. 다만 그 네 해 동안 계기판은 줄곧 가장 좋은 값을 가리키고 있었습니다.

전문 → https://blog.pebblous.ai/report/softmax-precision-cliff/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #소프트맥스 #구글딥마인드

---

## Facebook (EN)

"loss: 0.0000"

Anyone who has trained a model knows the small relief that line gives you. It means the thing learned what you asked it to learn.

A nine-page note that three Google DeepMind researchers put on arXiv on October 22 says the line can mean the opposite.

Cross-entropy loss is the log of one plus a very small number. Let a model get sure enough of the right answer and that small number disappears next to the one, and the log of one is zero.

So the loss prints 0.0. And in the same place, the gradient on the correct class prints 0.0 too.

The other classes keep their positive gradients. What was supposed to add up to zero does not. Nothing warns you.

In bf16 that line sits at 99.6% confidence on the correct class. Classifiers reach that late in training without anything being wrong.

The sentence I stayed with longest was the one after. The reason most training runs are fine today is not that anyone checked this layer. It is that PyTorch's autocast quietly promotes the loss computation to fp32. The documentation lists which operations get promoted. It does not say why.

The routes that leave that default in exchange for speed were named in public this week. Low-precision loss. Fused kernels. Compiled execution.

"When we say a pipeline has been verified, how far down does the word reach?"

Pebblous interrogates the quality of AI training data with DataClinic. What this paper points at is one floor below that. Before asking whether the data is usable, ask whether the arithmetic that writes the data down as numbers is usable.

People first saw this four years ago. In 2022 a loss curve that spiked and came back got a name, the slingshot mechanism. A cause took two years and seven months more to arrive.

A name landing before an explanation is ordinary enough. What is less ordinary is that for those four years, the instrument was reading its best possible value.

Read the full piece → https://blog.pebblous.ai/report/softmax-precision-cliff/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #Softmax #GoogleDeepMind
