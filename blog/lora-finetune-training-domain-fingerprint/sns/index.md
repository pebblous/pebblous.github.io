# SNS 홍보 글: LoRA로 고친 AI, 답변만 봐도 배운 분야가 드러난다

> 소스: blog/lora-finetune-training-domain-fingerprint/ko/index.html
> 생성일: 2026-11-09
> URL: https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

어댑터 파일을 열어 가중치를 뜯어본 쪽이, 모델이 쓴 답변만 받아 본 쪽보다 학습 분야를 못 맞혔다.

시베시 라네가 11월 5일 arXiv에 올린 단독 저자 논문이다. 분야가 뚜렷이 갈리는 공개 데이터셋 열여덟 개로 어댑터 서른여섯 개를 찍어 낸 뒤, 모델에 허용된 권한이 서로 다른 세 가지 방법으로 다섯 분야 중 어디서 배운 것인지를 맞히게 했다. 원본 학습 데이터는 한 줄도 쓰지 않는다.

생성한 글만 본 쪽이 64%를 맞혔고, 가중치를 연 쪽은 42%에 그쳤다. 다섯 중 하나를 고르는 문제라 아무렇게나 찍어도 20%는 맞는 자리다. 가중치 쪽은 신뢰구간 하단이 그 무작위선 아래까지 내려가 우연과 구분되지 않았다.

저자가 실험 전에 등록해 둔 가설은 정반대였다. 권한이 많을수록 많이 알아낸다는 것이었다. 설명은 손으로 고른 가중치 특징 48개에 있다. 노름이든 특잇값이든 모듈이 얼마나 움직였는지만 챙기고 어느 방향으로 움직였는지는 버린다. 랭크를 바꿔 어댑터를 더 만들어 물어보니 그 분류기는 분야가 아니라 랭크를 읽고 있었다.

출력 쪽은 더 거친 시험을 견뎠다. 토큰 확률에서 뽑은 값을 모두 떼어 내고 눈에 보이는 글자만 남겨도 수치가 그대로였다. 확률값을 내주지 않는 평범한 API로 중립 질문 200개를 던져 답을 받아 두는 것만으로 재현된다는 뜻이다.

다만 베이스 모델은 0.8B 한 종이고, 어댑터 서른여섯 개는 신뢰구간을 넓힌다. 저자도 세 방법의 순서는 시사적인 것으로만 읽어 달라고 적었고, 신호를 지우는 방법은 제안하지 않았다.

페블러스는 데이터를 모델이 바로 쓸 수 있게 손보면서 그 데이터의 출처를 같은 문서에 적어 둔다. 나중에 산출물만 보고 재료를 지목당할 때, 반박할 자료는 그 문서에만 있다.

어댑터 배포의 데이터 비밀성은 지금까지 맞서 볼 숫자 없이 믿음으로 관리돼 왔다. 20% 대 64%가 그 자리에 처음 놓였다.

▶ 전문: https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LoRA #파인튜닝 #학습데이터 #데이터프로비넌스 #Qwen3

---

## LinkedIn (EN)

Opening the adapter file and inspecting its weights identified a model's training domain less often than simply reading what the model wrote.

Shivesh Rane published the finding on November 5 as a single-author arXiv preprint. Eighteen public datasets spanning five subject areas produced 36 LoRA adapters on one frozen base model, and a classifier was asked to name each adapter's training domain from three vantage points that differ in how much access they grant. None of the three sees the original training data.

Reading generated text alone scored 64 percent. Reading the weights scored 42, its confidence interval reaching below the 20 percent chance line and never pulling clear of it.

The author had pre-registered the opposite ordering, expecting more access to yield more. His explanation points at the 48 hand-built weight features. A norm or a singular value records how far a module moved and throws away which direction it moved in. A follow-up run supports the reading. Adapters trained at ranks 8 and 64 went to the same classifier, which labeled every one of the larger-rank adapters medical, reading rank where it was supposed to read subject.

The output side survived a harder test. Stripping every feature derived from token probabilities, leaving only the visible text, left the score where it was. An ordinary API and two hundred neutral prompts are enough to reproduce the finding.

The limits are real. One 0.8B base model, 36 adapters, intervals wide enough that the author asks for the ordering to be read as suggestive. He proposes no way to erase the signal.

Pebblous records where a dataset came from while putting it into a state a model can use, and keeps that record next to the data. On the day an output gets read backwards, the record is the only place an answer lives.

How much an adapter withholds about its data has been a matter of assumption, with nothing to test the assumption against. Twenty percent against 64 is the first number on the table.

▶ Read: https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LoRA #FineTuning #TrainingData #DataProvenance #Qwen3

---

## Twitter/X (KO)

LoRA로 고친 모델이 쓴 답변만 모아 봐도 그 모델이 무슨 분야로 배웠는지 64%를 맞혔다. 다섯 중 하나를 고르는 문제이고 우연은 20%다.

어댑터 파일을 통째로 받아 가중치를 직접 분석한 쪽이 오히려 더 못 맞혔다. 11월 5일 arXiv 논문이다.

https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/ko/

#페블러스 #데이터품질 #LoRA #파인튜닝

---

## Twitter/X (EN)

A classifier named the training domain of a LoRA fine-tune 64 percent of the time from its generated text alone. Pick one of five subject areas and chance is 20.

Opening the adapter and reading its weights did worse. Shivesh Rane's arXiv preprint is dated November 5.

https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/en/

#Pebblous #DataQuality #LoRA #FineTuning

---

## Facebook (KO)

"모델 파일은 드리지만 학습 데이터는 드리지 않습니다."

어댑터를 주고받는 자리에서 자주 오가는 문장입니다. 저도 이 문장을 오랫동안 안전한 쪽에 놓고 들어 왔습니다.

그 안전을 숫자로 재어 본 연구가 11월 5일 arXiv에 올라왔습니다.

시베시 라네는 공개 데이터셋 열여덟 개를 의료, 코드, 수학, 비영어, 창작 다섯 분야로 나눠 LoRA 어댑터 서른여섯 개를 만들었습니다. 그리고 원본 데이터는 한 줄도 보지 않은 채, 그 모델들이 무엇으로 배웠는지 맞혀 보게 했습니다.

가장 잘 맞힌 쪽은 모델 안을 들여다볼 권한이 하나도 없는 쪽이었습니다.

답변만 받아 본 경우가 64%, 파일을 열어 가중치를 직접 읽은 경우가 42%였습니다. 다섯 중 하나를 고르는 문제이니 아무렇게나 찍어도 20%는 맞습니다.

저자가 실험 전에 적어 둔 가설은 정반대였습니다.

논문은 이것을 '지문'이라고 부릅니다. 지문은 무엇을 베껴 온 것이 아닙니다. 환자 한 사람의 기록이 복원되는 일과, 이 모델의 재료가 의료 데이터였다는 사실이 알려지는 일은 다릅니다. 그런데 계약서가 지키려던 것은 대개 뒤쪽이었습니다.

그렇다면 미리 적어 두어야 할 것도 같은 쪽입니다. 페블러스가 데이터를 쓸 수 있는 상태로 다듬는 일과 그 데이터가 어디서 왔는지를 적는 일을 한 공정으로 묶어 둔 이유가 거기 있습니다. 무엇으로 배웠느냐는 물음이 바깥에서 먼저 날아오는 날, 꺼내 보일 수 있는 것은 그 장부뿐입니다.

"우리가 그어 둔 비밀의 선은 가중치에 있습니까, 출력물에 있습니까?"

64%는 폭로라고 부를 수치가 아닙니다. 셋 중 하나는 틀립니다. 다만 "데이터를 안 줬으니 안 샌다"는 문장에도 이제 상대가 생겼습니다.

▶ https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/ko/

#페블러스 #데이터클리닉 #데이터품질 #LoRA #파인튜닝 #데이터프로비넌스

---

## Facebook (EN)

"You get the model file. You do not get the training data."

It is a sentence that comes up often when adapters change hands. I had filed it, for a long time, on the safe side.

On November 5, a preprint went up that put a number on that safety for the first time.

Shivesh Rane took eighteen public datasets across medicine, code, mathematics, multilingual text and creative writing, and built thirty-six LoRA adapters from them. Then, without looking at a single line of the original data, he asked a classifier to say what each model had been trained on.

The best answers came from the vantage point with no access to the model at all.

Reading only the model's replies got the subject right 64 percent of the time. Opening the file and reading the weights directly got 42. With five subject areas to choose from, guessing gets 20.

The hypothesis the author registered before running any of it said the opposite.

The paper calls what it found a fingerprint. A fingerprint is not a copy of anything. Pulling back a single patient's record is one thing. Learning that medical text was the raw material is another. The thing a contract was usually protecting is the second one.

Which means it is also the thing that needs a record written in advance. At Pebblous, getting a dataset into a usable state and writing down where it came from are one job, not two. When someone names your ingredients from your outputs alone, that ledger is what you have to answer with.

"The line we drew around what stays private: is it drawn on the weights, or on the outputs?"

Sixty-four percent does not amount to an exposure. One guess in three is wrong. But the sentence "we never handed over the data" now has something to argue with.

▶ https://blog.pebblous.ai/blog/lora-finetune-training-domain-fingerprint/en/

#Pebblous #DataClinic #DataQuality #LoRA #FineTuning #DataProvenance
