# SNS 홍보 글: AI가 문제도 내고 채점도 하는 시험, 백에 둘뿐

> 소스: report/llm-eval-scoring-generation-gap-2026-09/
> 생성일: 2026-09-26
> URL(KO): https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/ko/
> URL(EN): https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

AI가 문제를 내고 AI가 그 답을 채점하며 그 밖에 아무도 검사하지 않는 시험은, 평가 논문 백 편 가운데 두 편이었다.

독립 연구자 차오 왕이 arXiv에 올라온 평가 자료 논문 14,767편을 전수 분류한 결과다. 채점석에서는 교대가 뚜렷하다. 모델이 답을 읽고 점수를 매긴 논문의 비중은 25.8%에서 40.3%로 올랐다. 사람이 미리 써 둔 정답과 맞춰 보는 방식은 여전히 가장 흔하지만, 같은 기간에 13%p를 내줬다.

출제석에서는 같은 일이 일어나지 않았다. 모델이 문항을 만드는 비율은 2024년에 이미 절반에 닿은 뒤 그 자리에서 움직이지 않는다. 저자가 돌려 둔 오차 시나리오를 걸면 채점 쪽은 부호를 지키고 자료 쪽은 부호가 뒤집힌다. 채점은 오르는 것이 확실하고, 출제는 오르는지조차 말할 수 없다는 뜻이다.

문항도 채점도 모델뿐이고 그 밖에 사람도 정답지도 실행 검사도 없는 설계는 많아야 2.4%다. 그러나 나머지가 독립적인 증거라는 뜻은 아니다. 피어리뷰를 거친 선호 누출 연구에서는 똑같은 답 한 쌍을 두고 심판만 바꿨더니 승률이 55.1%와 36.8%로 갈렸다.

EU 인공지능법 제55조는 평가를 수행하고 적대적 시험을 문서로 남기라고 요구한다. 그런데 그 점수를 누가 또는 무엇이 산출했는지를 밝히라는 요구는 조문에 없다. 지금 그 칸을 채워 달라고 요구할 수 있는 쪽은 조달하는 쪽과 도입하는 쪽뿐이다.

▶ 전문: https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI평가 #AI벤치마크 #LLM심판 #평가데이터셋 #AI거버넌스 #arXiv

---

## LinkedIn (EN)

Exams in which a model writes the questions and a model grades the answers, with nothing else checking either, come to two papers in a hundred.

The figure comes from a September preprint by Chao Wang, an independent researcher who coded the design of 14,767 arXiv evaluation papers. In the grading seat the handover is unmistakable. The share of papers where a model reads the answer and assigns the score rose from 25.8% to 40.3%. Matching against human-written reference answers remains the most common approach, but it gave up 13 points over the same stretch.

The authoring seat did not follow. Model-generated material had already reached half of all papers by 2024 and has barely moved since. Run the author's own label-error scenarios and the scoring trend keeps its sign while the material trend does not. One role is clearly rising. The other cannot even be called rising.

None of that makes the remaining designs independent evidence. In a preference-leakage study accepted at ICLR 2026, the same pair of answers flipped winners when only the judge changed, with win rates of 55.1% and 36.8%. Nominally separate model roles need not deliver independent judgments.

Article 55 of the EU AI Act requires providers of systemic-risk models to run evaluations and to document adversarial testing. It does not ask who, or what, produced the score. For now the only parties in a position to ask are the ones procuring and deploying.

▶ Read: https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIEvaluation #AIBenchmarks #LLMJudge #EvaluationDatasets #AIGovernance #arXiv

---

## Twitter/X (KO)

arXiv 평가 논문 14,767편의 설계를 전수 분류했다. 문제도 AI가 내고 채점도 AI가 하며 그 밖에 아무 검사도 없는 시험은 백에 둘이었다.

채점석에서는 교대가 일어났고 출제석은 절반에서 멈췄다. 두 역할은 하나의 눈금으로 묶이지 않는다.

▶ https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/ko/

#페블러스 #데이터품질 #LLM심판 #AI벤치마크

---

## Twitter/X (EN)

Across 14,767 arXiv evaluation papers, exams where a model writes the items and a model grades them, with nothing else checking, come to two in a hundred.

Grading changed hands. Authoring stopped at half. The two roles are not one dial.

▶ https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/en/

#Pebblous #DataQuality #LLMJudge #AIBenchmarks

---

## Facebook (KO)

"이 모델 점수가 제일 높습니다."

회의에서 이 말이 나오면, 다음 질문은 대개 몇 점인지로 갑니다. 그 점수를 누가 매겼는지를 묻는 자리는 좀처럼 오지 않습니다.

저도 그랬습니다. 학습 데이터에는 어디서 왔는지, 누가 라벨을 붙였는지를 꼬박꼬박 물으면서, 시험지에도 만든 사람이 있다는 사실은 오래 지나쳤습니다.

9월에 arXiv에 올라온 프리프린트 한 편이 그 빈자리를 양식으로 만들었습니다. 독립 연구자 차오 왕이 4년 8개월 동안 올라온 평가 자료 논문 14,767편을 열고, 논문마다 일곱 칸을 채웠습니다. 문항을 누가 만들었나. 점수를 누가 매겼나.

세어 보니 채점석에서는 자리바꿈이 일어나 있었습니다. 사람이 미리 써 둔 정답과 맞춰 보던 방식이 물러나고, 모델이 답을 읽고 점수를 매기는 방식이 그 자리로 올라왔습니다.

그런데 출제석은 조용했습니다. 모델이 문항을 만드는 비율은 몇 해 전에 이미 절반에 닿았고, 그 뒤로는 거의 움직이지 않았습니다.

문항도 모델이 만들고 채점도 모델이 하고, 그 밖에 사람도 정답지도 실행 검사도 하나 없는 설계. 저는 이런 것을 '닫힌 시험'이라고 부르기로 했습니다. 세어 보니 백에 둘이었습니다.

통념이 그리던 그림보다 한참 작습니다. 그래서 안심해도 되는가 하면, 그건 또 다른 이야기인 것 같습니다.

이름이 다른 두 모델이 알고 보면 같은 계열일 때 무슨 일이 생기는지를 잰 실험이 있습니다. 똑같은 답 한 쌍을 놓고 심판만 바꿔 보여 줬더니, 승자가 뒤집혔습니다.

그리고 이 연구의 숫자를 논문마다 붙인 것도 모델 한 대였습니다. 저자는 그 사실을 감추지 않았습니다. 라벨이 맞는지는 끝내 측정하지 못했다고 자기 파일에 적어 함께 공개했습니다.

계산은 누구나 다시 돌려 볼 수 있지만, 라벨은 아무도 다시 확인할 수 없습니다. 판정의 근거를 그 순간에 같이 적어 두지 않으면, 나중에 확인하는 길은 처음부터 다시 읽는 것뿐입니다.

페블러스가 데이터셋에 등급 하나만 붙이는 대신 그 판정의 근거를 함께 남겨 두려는 까닭도 여기에 가깝습니다. 등급만 남으면, 이의가 제기됐을 때 다시 돌리는 것 말고 할 수 있는 일이 없으니까요.

"우리 회사가 인용하는 AI 성적표는, 누구의 잣대로 매겨졌습니까?"

▸ https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI평가 #LLM심판 #평가데이터셋

---

## Facebook (EN)

"This model scores highest."

When that sentence lands in a meeting, the next question is usually how high. The question of who assigned the score rarely gets its turn.

Mine didn't either. I ask training data where it came from and who labeled it, and for a long time I never asked the same of the exam it was being tested on.

A preprint posted to arXiv in September turned that blank into a form. Chao Wang, an independent researcher, opened 14,767 evaluation papers from four years and eight months and filled in seven fields for each one. Who wrote the items. Who assigned the score.

In the grading seat, the count found a handover. Matching answers against references a human had written beforehand gave ground, and a model reading the answer and scoring it moved in.

The authoring seat stayed quiet. The share of papers using model-generated material had reached half some years ago, and it has barely moved since.

Items written by a model, scores assigned by a model, and no human, no answer key, no execution check anywhere else in the design. I have started calling this a closed exam. Counted across the corpus, it comes to two in a hundred.

The number is far smaller than the picture that phrase usually conjures. Whether it is small enough to relax about is a different question.

There is a controlled experiment on what happens when two differently named models turn out to share a lineage. The same pair of answers was shown to a different judge, and the winner reversed.

And the numbers in this study were themselves assigned by a single model. The author does not hide it. He wrote into his own files that the accuracy of those labels was never measured, and published them that way.

The arithmetic can be rerun by anyone. The labels can be rechecked by no one. If the grounds for a judgment are not written down at the moment it is made, the only way back to it is to read everything again.

That is close to why Pebblous keeps the evidence behind a quality verdict rather than just the grade. When only the grade survives, a challenge leaves you nothing to do but run it again.

"The AI scorecard your company quotes. Whose ruler measured it?"

▸ https://blog.pebblous.ai/report/llm-eval-scoring-generation-gap-2026-09/en/

#Pebblous #DataClinic #DataQuality #AIEvaluation #LLMJudge #EvaluationDatasets
