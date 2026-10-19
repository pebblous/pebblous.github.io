# SNS 홍보 글: 수학만 가르친 RLVR, 상식 시험 향상은 답 쓰는 자리 덕분

> 소스: blog/rlvr-format-gain-answer-extractor/ko/index.html
> 생성일: 2026-10-19
> URL: https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

수학과 코드로만 강화학습을 시킨 모델이 전혀 다른 영역의 객관식 시험에서도 점수가 오릅니다. 모나시대학교의 쭝예 뤼가 10월 2일 arXiv에 올린 논문은 공개된 SimpleRL 베이스·강화학습 네 쌍의 답안을 가중치는 그대로 둔 채 다른 채점 프로그램으로 다시 읽었고, 비교당 평균 22.5점이던 향상이 4.0점으로 줄었습니다.

갈린 것은 답이 적힌 자리였습니다. 베이스 모델은 "The correct answer is B) 5 m/s"처럼 문장 안에 답을 적고, 강화학습을 거친 모델은 \boxed{B} 안에 적습니다. 공개 평가 코드의 추출기 상당수는 상자 안만 읽기 때문에, 본문에 적힌 맞은 답은 읽히지 못한 채 오답으로 넘어갑니다. 영역 밖 객관식에서 답을 상자에 적은 비율은 베이스 모델이 26.6%, 강화학습 모델이 58.3%였습니다.

저자가 그은 선도 분명합니다. 어느 팀이 발표한 수치를 분해한 것이 아니라 공개 체크포인트를 직접 돌려 만든 출력을 가른 것이고, 비중이 안정적으로 나오는 자리는 영역 밖 객관식뿐입니다. DAPO로 학습한 32B 쌍에서는 같은 몫이 2.1%에 그쳤습니다.

확인 비용은 거의 들지 않습니다. 강화학습도 추론도 다시 돌릴 필요 없이, 저장해 둔 출력을 두 번째 추출기로 다시 읽히면 됩니다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터를 재든 모델을 재든 숫자는 규칙이 읽어 내는 것이고, 규칙을 바꾸면 숫자가 바뀝니다. 그래서 점수 옆에는 그 점수를 읽은 규칙의 이름이 같이 적혀 있어야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #RLVR #강화학습 #LLM평가 #벤치마크 #SimpleRL #MMLU #모나시대학교

---

## LinkedIn (EN)

A paper posted to arXiv on October 2 re-scored the answers of four released SimpleRL base and RL pairs without touching their weights, and the average out-of-domain multiple-choice gain credited to reinforcement learning fell from 22.5 points to 4.0.

What separated those two numbers was where the answer sat. A base model ends its reply with "The correct answer is B) 5 m/s." Its reinforcement-learned successor ends with \boxed{B}. Many extractors in public evaluation code read only what is inside the box, so a correct answer stated in the text goes unread and the item is counted wrong. On out-of-domain multiple choice, 26.6% of the base models' answers were written in the box against 58.3% for the RL models.

Zongye Lyu of Monash University, who wrote the paper alone, is explicit about what it does not claim. No team's published figure is being decomposed, since the gains split here come from outputs the author generated from public checkpoints. The share only holds steady on out-of-domain multiple choice, and on a 32B pair trained with DAPO it drops to 2.1%.

Checking costs almost nothing. Neither the training nor the inference has to run again, because the stored outputs can be read a second time by a different extractor. Pebblous profiles the quality of AI training data with DataClinic. A number, whether it grades a dataset or a model, is something a rule reads out of what is there, and a different rule reads out a different number. The name of that rule belongs next to the score.

▶ Read: https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #RLVR #ReinforcementLearning #LLMEvaluation #Benchmarks #SimpleRL #MMLU #MonashUniversity

---

## Twitter/X (KO)

수학으로 강화학습을 시킨 모델이 상식 객관식에서도 점수가 올랐습니다. 공개 모델들의 답안을 본문에 적힌 답까지 읽는 프로그램으로 다시 채점하자, 22.5점이던 향상이 4.0점으로 줄었습니다.

베이스 모델은 답을 문장 안에 적고, 강화학습 모델은 답 상자 안에 적습니다. 채점하는 프로그램은 상자만 봤습니다.

https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/ko/

#페블러스 #데이터품질 #RLVR #강화학습

---

## Twitter/X (EN)

Reinforcement learning on mathematics also raised scores on general multiple-choice tests. Re-score those same answers with a program that reads an answer stated in the text and the gain falls from 22.5 points to 4.0.

Base models state the answer in a sentence. RL models put it in the box. The marking program was only looking in the box.

https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/en/

#Pebblous #DataQuality #RLVR #LLMEvaluation

---

## Facebook (KO)

안나가 100미터를 20초에 달렸습니다. 평균 속도는 얼마입니까.

보기는 네 개이고 답은 5 m/s입니다.

이 문항을 두 모델에게 풀렸습니다. 하나는 Qwen2.5-7B, 다른 하나는 같은 모델을 수학으로 강화학습시킨 후계 모델입니다.

둘 다 5 m/s라고 적었습니다.

그런데 채점에서는 한쪽만 정답이 됐습니다.

베이스 모델은 문장 끝에 "The correct answer is B) 5 m/s"라고 적었고, 강화학습을 거친 모델은 \boxed{B}라고 적었습니다. 채점하는 프로그램이 상자 안만 들여다보는 종류였습니다.

출력 어디에도 상자가 없으니 채점기는 읽기를 기권했고, 그 문항은 오답으로 넘어갔습니다. 맞은 답이 점수를 받지 못했습니다.

모나시대학교의 쭝예 뤼가 10월 2일 arXiv에 올린 논문은 이 한 문항의 차이가 벤치마크 전체에서 얼마가 되는지를 셌습니다.

공개된 네 쌍에서 강화학습이 올렸다고 보고된 향상은 비교당 평균 22.5점이었습니다. 같은 출력을 본문에 적힌 답까지 읽는 규칙으로 다시 채점하자 4.0점이 남았습니다. 논문은 사라진 몫을 포맷 향상이라 부릅니다.

모델이 답을 더 많이 맞힌 것이 아니라, 답을 적는 자리가 채점하는 쪽으로 옮겨 간 것입니다.

"지난 분기 평가 보고를 만든 모델 출력이, 아직 디스크에 그대로 있습니까?"

있다면 확인은 노트북 한 대로 끝납니다. 강화학습도 추론도 다시 돌릴 필요가 없습니다. 저장된 출력을 두 번째 추출기로 한 번 더 읽히면 됩니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터를 재든 모델을 재든 숫자는 규칙이 읽어 내는 것이고, 규칙을 바꾸면 숫자가 바뀝니다. 그래서 점수 옆에는 그 점수를 읽은 규칙의 이름이 같이 적혀 있어야 합니다.

평가 코드를 손보는 일은 대개 급하지 않은 일로 밀립니다. 파서를 한 줄 고치면 지난 분기 그래프가 달라질 수 있다는 것을 알기 때문이기도 합니다.

달라진다면, 그 그래프는 처음부터 모델이 아니라 파서를 그린 것입니다.

▶ 전문: https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/ko/

#페블러스 #데이터품질 #RLVR #SimpleRL #LLM평가 #벤치마크

---

## Facebook (EN)

Anna ran 100 metres in 20 seconds. What was her average speed?

There are four choices and the answer is 5 m/s.

Two models were given that question. One was Qwen2.5-7B. The other was the same model after reinforcement learning on mathematics.

Both wrote 5 m/s.

Only one of them was marked correct.

The base model ended its reply with "The correct answer is B) 5 m/s." The trained model ended with \boxed{B}. The program doing the marking was the kind that looks only inside the box.

There was no box anywhere in that output, so the marker abstained and the item went down as wrong. A correct answer earned nothing.

Zongye Lyu of Monash University posted a paper to arXiv on October 2 that counts what this one difference adds up to across whole benchmarks.

Across four released pairs, the gain reported for reinforcement learning averaged 22.5 points per comparison. Re-score the same outputs with a rule that also reads an answer stated in the text and 4.0 points are left. The paper calls the part that vanishes the format gain.

The model was not answering more questions correctly. The answer had moved to where the marker happens to look.

"Are the model outputs behind last quarter's evaluation report still sitting on disk?"

If they are, the check finishes on one laptop. Nothing has to be trained again and nothing has to be generated again. The stored outputs are read once more by a second extractor.

Pebblous profiles the quality of AI training data with DataClinic. A number, for a dataset or for a model, is something a rule reads out of what is there, and a different rule reads out a different number. The name of that rule belongs next to the score.

Tidying evaluation code is the sort of job that never becomes urgent. Part of the reason is knowing that one line changed in a parser could move last quarter's graph.

If it moves, that graph was drawing the parser rather than the model.

▶ Read: https://blog.pebblous.ai/blog/rlvr-format-gain-answer-extractor/en/

#Pebblous #DataQuality #RLVR #SimpleRL #LLMEvaluation #Benchmarks
