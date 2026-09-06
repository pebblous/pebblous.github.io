# SNS 홍보 글: 출력 형식을 바꾸자 데이터 품질 점수가 흔들렸다

> 소스: blog/output-format-confounds-data-quality/ko/index.html
> 생성일: 2026-09-07
> URL: https://blog.pebblous.ai/blog/output-format-confounds-data-quality/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

지시문도 정답도 그대로 둔 채 답을 적어 내는 형식만 갈아 끼웠더니, 학습을 전혀 하지 않은 모델의 정확도가 한 과제에서 70점 움직였다.

9월 2일 arXiv에 올라온 논문의 출발점이다. 저자들은 분류와 객관식 과제 12개에 의미가 같은 출력 형식 네 가지를 교차해 학습과 평가를 돌렸다. 학습 쪽 사정도 같았다. RTE를 원문에서 잘라 낸 스팬으로 배우면 같은 형식에서 정확도가 40점 넘게 오르지만, 나머지 세 형식으로는 그 능력이 거의 나가지 못한다.

평가 쪽에서는 형식 대신 예산이 같은 일을 했다. GSM8K에서 프롬프트와 디코딩 파라미터와 정답 추출 규칙을 전부 고정하고 생성 토큰 예산만 192에서 768로 늘리자, 움직인 것은 미세조정한 시스템이 아니라 아무 학습도 하지 않은 기본 모델 하나뿐이었다. 이유는 실력이 아니라 절단이었다. 짧은 예산에서 기본 모델은 긴 풀이를 쓰다가 토큰 천장에 걸려 잘리고, 채점기는 그 잘린 답을 오답으로 처리한다.

그래서 결론의 부호가 바뀐다. 짧은 예산만 보면 미세조정이 GSM8K를 9B 모델에서 13점 올린 것으로 읽히고, 예산을 고쳐 기본 모델이 끝까지 풀게 두면 같은 학습이 10점 깎아낸 것으로 읽힌다.

다만 논문은 해법까지 가지 않았다. 형식 축을 학습 중에 지워 갇힌 능력을 푸는 개입도, 어느 조합이 갇힐지 미리 내다보는 시도도 저자들이 결과를 보기 전에 정해 둔 합격선을 넘지 못했다. 실험 범위도 분류와 객관식 과제, 저랭크 어댑터, 10B 미만 모델 세 계열로 좁다.

저자들의 결론은 품질을 데이터 한 조각에 붙이지 말고 데이터와 형식의 짝에 붙이라는 것이다. 페블러스가 데이터 품질을 진단하며 자주 만나는 물음도 이 점수가 무엇에 붙어 있느냐다. 결측이나 이상치처럼 데이터 안에서 닫히는 항목이 있는가 하면, 어떤 조건에서 쟀는지를 함께 적어야만 뜻이 서는 항목이 있다.

▶ 전문: https://blog.pebblous.ai/blog/output-format-confounds-data-quality/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #파인튜닝 #학습데이터 #LLM #GSM8K #Qwen #Mistral

---

## LinkedIn (EN)

Hold the instruction and the gold answer fixed, swap only the format the answer is written in, and an untrained model's accuracy moves by up to 70 points on a single task.

That is the opening result of a paper posted to arXiv on 2 September. The authors crossed 12 classification and multiple-choice tasks with four output formats that carry identical meaning, and trained and evaluated across the grid. Training behaves the same way. Learn RTE as a raw span pulled from the passage and same-format accuracy rises by more than 40 points, while almost none of that capability shows up under the other three formats.

On the evaluation side, the generation budget did the same work the format did. For GSM8K the authors froze the prompt, the decoding parameters and the answer-extraction rule, and raised only the token budget, from 192 to 768. The only thing that moved was the untrained base model. Not skill, but truncation: under the short budget the base model writes a long solution, hits the token ceiling, and the grader marks the severed answer wrong.

So the sign of the conclusion changes. Read at the short budget, fine-tuning looks like a 13-point gain on GSM8K for the 9B model. Fix the budget so the base model can finish, and the same training reads as a 10-point loss.

The paper does not go on to a remedy. Projecting the format subspace out during training to unlock the trapped capability, and predicting in advance which pairings would be trapped, both failed thresholds the authors registered before seeing results. The scope is narrow too: classification and multiple choice, low-rank adapters, three model families under 10B.

Their conclusion is to attach quality not to a unit of data but to the pairing of that unit with a format. The question Pebblous keeps meeting when it diagnoses data quality is the same one: what is this score attached to? Some items close inside the data, like missingness or outliers. Others only mean something if you also record the conditions under which they were measured.

▶ Read: https://blog.pebblous.ai/blog/output-format-confounds-data-quality/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #FineTuning #TrainingData #LLM #GSM8K #Qwen #Mistral

---

## Twitter/X (KO)

지시문도 정답도 그대로 둔 채 답을 적어 내는 형식만 갈아 끼웠더니, 학습하지 않은 모델의 정확도가 한 과제에서 70점 움직였다.

품질은 데이터 한 조각이 아니라 데이터와 형식의 짝에 붙어 있다는 것이 저자들의 결론이다.

▶ https://blog.pebblous.ai/blog/output-format-confounds-data-quality/ko/

#페블러스 #데이터품질 #GSM8K #파인튜닝

---

## Twitter/X (EN)

Hold the instruction and the gold answer fixed, swap only the format the answer is written in, and an untrained model's accuracy moves by up to 70 points on one task.

Quality, the authors conclude, does not attach to a unit of data. It attaches to that unit paired with a format.

▶ https://blog.pebblous.ai/blog/output-format-confounds-data-quality/en/

#Pebblous #DataQuality #GSM8K #FineTuning

---

## Facebook (KO)

"미세조정 뒤 GSM8K가 13점 올랐습니다."

회의 슬라이드에 이런 줄을 올려 본 적이 있으실 겁니다. 숫자 하나가 표에 오르고 나면, 그다음부터는 그 숫자를 두고 이야기가 흘러갑니다.

이달 초 arXiv에 올라온 논문에 같은 실험이 있습니다. 저자들은 프롬프트도, 디코딩 파라미터도, 정답을 뽑아내는 규칙도 그대로 두었습니다. 모델이 답을 쓸 수 있는 토큰 예산만 192에서 768로 늘렸습니다.

그러자 움직인 쪽은 미세조정한 모델이 아니라 아무 학습도 하지 않은 모델이었습니다.

짧은 예산에서 기본 모델은 긴 풀이를 쓰다가 천장에 걸려 잘리고 있었고, 채점기는 그 잘린 답을 오답으로 세고 있었습니다. 같은 학습이 짧은 예산에서는 13점의 이득으로, 고친 예산에서는 10점의 손실로 읽힙니다.

오래 남은 건 그 역전보다 그 앞 절이었습니다. 지시문도 정답도 그대로 둔 채 답의 형식만 갈아 끼웠을 뿐인데, 학습하지 않은 모델의 정확도가 한 과제에서 70점 움직였다는 대목입니다.

"우리가 데이터셋에 매긴 품질 점수는 데이터의 성질이었습니까, 채점대의 성질이었습니까?"

페블러스가 데이터 품질을 진단하며 자주 지나는 자리도 그 옆입니다. 결측이나 이상치처럼 데이터 안에서 닫히는 항목이 있는가 하면, 어떤 잣대로 어떤 조건에서 쟀는지를 함께 적어야만 뜻이 서는 항목이 있습니다.

논문은 그 빈칸을 메우는 방법까지 가지지 않았습니다. 형식 축을 학습 중에 지우는 개입도, 어느 조합이 갇힐지 미리 내다보는 시도도 저자들이 결과를 보기 전에 정해 둔 합격선을 넘지 못했습니다.

다만 점수 옆에 무엇을 함께 남겨 둘지는, 그 방법이 나오기 전에도 정할 수 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/output-format-confounds-data-quality/ko/

#페블러스 #데이터클리닉 #데이터품질 #GSM8K #파인튜닝 #AIReadyData

---

## Facebook (EN)

"Fine-tuning moved GSM8K up 13 points."

Most of us have put a line like that on a slide. Once a number is on the table, the conversation runs on that number.

A paper posted to arXiv earlier this month contains the same experiment. The authors left the prompt alone, left the decoding parameters alone, left the rule for extracting the answer alone. They changed one thing: the token budget the model has to write its answer in, from 192 to 768.

What moved was not the fine-tuned model. It was the one that had never been trained at all.

Under the short budget the base model was writing out a long solution, hitting the ceiling mid-sentence, and the grader was counting the severed answer as wrong. The same training reads as a 13-point gain at the short budget and a 10-point loss once the budget is fixed.

What stayed with me was not the reversal but the section before it. Holding the instruction and the gold answer fixed and swapping only the format the answer is written in moved an untrained model's accuracy by 70 points on one task.

"Was the quality score we gave that dataset a property of the data, or a property of the bench we scored it on?"

Pebblous passes near this spot often, diagnosing data quality. Some items close inside the data, like missingness or outliers. Others only stand up if you also record what yardstick was used and under what conditions.

The paper does not go on to fill that blank. Projecting the format axis out during training, and predicting in advance which pairings would be trapped, both failed thresholds the authors had fixed before they saw any results.

Deciding what to keep beside the score, though, does not have to wait for the method.

▶ Full piece: https://blog.pebblous.ai/blog/output-format-confounds-data-quality/en/

#Pebblous #DataClinic #DataQuality #GSM8K #FineTuning #AIReadyData
