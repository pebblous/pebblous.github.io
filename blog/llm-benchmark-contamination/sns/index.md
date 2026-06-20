# SNS 홍보 글: 그 시험지는 이미 학습 데이터에 있었다

> 소스: blog/llm-benchmark-contamination/ko/index.html
> 생성일: 2026-06-20
> URL: https://blog.pebblous.ai/blog/llm-benchmark-contamination/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

리더보드 1위가 인간 전문가를 넘어섰다는 모델이 푼 시험지의 상당 부분은, 채점 전에 이미 그 모델의 학습 데이터 안에 들어 있었다.

존스홉킨스 연구진은 MMLU 테스트 문항의 29.1%에서 오염 신호를 확인했다. 공개된 벤치마크는 누구나 내려받을 수 있고, 인터넷을 통째로 긁어 학습 데이터를 만드는 사전학습 과정에서 문제와 정답이 함께 빨려 들어가기 때문이다. 모델은 시험을 치르기 전에 시험지를 먼저 읽는 셈이다.

오염된 문항을 깨끗한 미러로 바꿔 다시 풀리면 점수가 내려간다. Mistral은 GSM8K 클린 테스트에서 정확도가 최대 13%포인트 떨어졌다. 그 차이만큼이 실력이 아니라 암기였다.

모델 아키텍처를 바꿔도 이 문제는 사라지지 않는다. 깨진 것은 모델이 아니라 평가 데이터를 학습과 분리해 보관하는 절차다. 그래서 '깨끗한 데이터'의 경계가 학습셋에서 평가셋으로 넓어진다.

리더보드 숫자를 인용하기 전에 물어야 할 한 줄은 이것이다. 이 점수가 나온 시험지를 모델이 본 적 있는가.

▶ 전문: https://blog.pebblous.ai/blog/llm-benchmark-contamination/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터무결성 #LLM #벤치마크오염 #MMLU #GSM8K #LiveBench #AI평가

---

## LinkedIn (EN)

The model that supposedly beat human experts had already seen much of its exam — the questions and answers sat inside its training data before it was ever scored.

Researchers at Johns Hopkins found contamination signals in 29.1% of MMLU test items. Public benchmarks are free to download, and pretraining pipelines that scrape the open web pull the questions and their answer keys in along with everything else. The model reads the test before it takes it.

Rewrite the contaminated items as clean mirrors and the scores fall. On a clean GSM8K mirror, Mistral lost up to 13 percentage points of accuracy. That gap was memory, not reasoning.

Changing the model architecture does not fix this. What broke is the procedure for building evaluation data and keeping it separate from training. So the boundary of "clean data" extends from the training set to the evaluation set.

Before citing a leaderboard number, ask one more line: has the model already seen the test this score came from?

▶ Read: https://blog.pebblous.ai/blog/llm-benchmark-contamination/en/

#Pebblous #DataClinic #DataQuality #DataIntegrity #LLM #BenchmarkContamination #MMLU #GSM8K #LiveBench

---

## Twitter/X (KO)

리더보드가 인간 전문가를 넘어섰다는데, 그 시험지는 이미 학습 데이터에 있었다.

MMLU 문항의 29%가 오염. 깨끗한 미러로 다시 풀리면 점수는 내려간다.

모델이 아니라 평가 데이터의 무결성 문제다.

https://blog.pebblous.ai/blog/llm-benchmark-contamination/ko/

#페블러스 #데이터품질 #벤치마크오염 #MMLU #LLM

---

## Twitter/X (EN)

A model "beats human experts." But the test was already in its training data.

29% of MMLU items show contamination. Score them on a clean mirror and the numbers drop.

This is an evaluation-data integrity problem, not a model problem.

https://blog.pebblous.ai/blog/llm-benchmark-contamination/en/

#Pebblous #DataQuality #BenchmarkContamination #MMLU #LLM

---

## Facebook (KO)

"리더보드 1위가 인간 전문가를 넘어섰다."

분기마다 비슷한 헤드라인이 피드를 지나갑니다.

그때마다 잠깐 멈추게 되는 건, 그 모델이 푼 시험지가 어디서 왔는지를 묻게 되기 때문입니다.

존스홉킨스 연구진이 들여다보니, MMLU 시험 문항의 29.1%가 이미 모델의 학습 데이터 안에 들어 있었습니다. 공개된 벤치마크는 누구나 내려받을 수 있고, 인터넷을 통째로 모아 학습하는 과정에서 문제와 정답이 함께 따라 들어갑니다. 모델은 시험을 치르기 전에 시험지를 먼저 읽은 셈입니다.

오염되지 않은 새 문제로 같은 모델을 다시 풀려 보면 점수는 내려갑니다. 어떤 모델은 13%포인트가 빠졌습니다. 그 차이만큼이, 실력이 아니라 기억이었던 것이죠.

여기서 한 가지 질문이 남습니다. "이 점수가 나온 시험지를, 모델은 정말 처음 보는 걸까?"

오래 데이터 품질을 들여다본 입장에서 이 사건은 익숙한 자리에 새 그림자를 드리웁니다. 우리는 '깨끗한 데이터'를 늘 학습셋의 문제로만 다뤄 왔습니다. 그런데 측정에 쓴 데이터가 오염되면, 앞단을 아무리 정성껏 다듬어도 결과 숫자는 흔들립니다. 페블러스가 DataClinic으로 학습 데이터의 품질을 진단해 온 이유도 여기에 닿아 있고, 이제 그 경계가 평가셋까지 넓어지고 있습니다.

깨끗한 데이터의 경계는, 우리가 생각한 것보다 한 칸 더 뒤에 있는지도 모릅니다.

전문은 여기에 담았습니다: https://blog.pebblous.ai/blog/llm-benchmark-contamination/ko/

#페블러스 #데이터클리닉 #데이터품질 #벤치마크오염 #MMLU #데이터무결성

---

## Facebook (EN)

"Number one on the leaderboard just passed the human experts."

A headline like that drifts through the feed every few months.

What makes me pause each time is a quieter question: where did that exam come from?

When researchers at Johns Hopkins looked closely, 29.1% of the MMLU questions were already sitting inside the model's training data. Public benchmarks are open to download, and when you train on the whole internet, the questions and their answers come along for the ride. The model had read the test before it ever sat for it.

Rewrite those questions as fresh ones, hand them back to the same model, and the score slips. For one model the drop was 13 points. That much of the number was memory, not ability.

Which leaves one question hanging. "Has the model really never seen the test this score came from?"

After years of looking at data quality, this lands on familiar ground with a new shadow. We have always treated "clean data" as a question about the training set. But if the data we measure with is contaminated, no amount of care upstream keeps the final number honest. It is the same reason Pebblous has been diagnosing training-data quality through DataClinic — and now that boundary is reaching the evaluation set too.

The edge of clean data may sit one step further back than we thought.

The full piece is here: https://blog.pebblous.ai/blog/llm-benchmark-contamination/en/

#Pebblous #DataClinic #DataQuality #BenchmarkContamination #MMLU #DataIntegrity
