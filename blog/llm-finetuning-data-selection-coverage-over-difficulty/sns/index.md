# SNS 홍보 글: AI 학습 데이터 선별, 어려운 문제만 고르면 무작위보다 못하다

> 소스: blog/llm-finetuning-data-selection-coverage-over-difficulty/ko/index.html
> 생성일: 2026-11-09
> URL: https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

학습 데이터를 줄일 때 어려운 예제부터 고르는 방법 다섯 가지가, 아무것도 재지 않고 뽑은 무작위를 하나도 이기지 못했다.

시카고대와 텍사스오스틴대, 앨런AI연구소 연구진이 11월 5일 arXiv에 공개한 실험이다. 퍼플렉시티부터 PVI까지 널리 쓰이는 난이도 점수 다섯을 같은 조건의 미세조정에 올리고, 뽑는 비율을 1%에서 75%까지 바꿔 가며 돌렸다. 무작위 기준선은 어느 비율에서도 경쟁력 있었고 가장 좋은 경우도 잦았다.

연구진이 내놓은 설명은 덮는 범위다. 난이도 상위만 잘라 모으면 입력 공간의 좁은 구역에 묶음이 몰리는 반면, 아무 기준 없이 뽑은 묶음은 원래 분포의 모양을 닮는다. 골라낸 묶음이 전체에서 얼마나 벗어났는지를 재어 성적과 맞대자, 모델과 과제를 짝지은 여섯 조합 전부에서 덜 벗어난 쪽이 높은 점수를 냈다.

덮는 범위를 직접 겨냥한 방법도 만능은 아니었다. 임베딩을 군집화해 칸마다 하나씩 뽑는 단순한 선별은 여러 도메인이 섞인 Tülu 3에서 데이터 5%만으로 전부 학습한 MMLU 점수를 넘겼지만, 같은 비율의 HumanEval에서는 무작위에 뒤졌고 전부 학습한 성적에는 끝내 닿지 못했다. 논문도 덮는 범위와 성적의 관계를 상관까지만 말하고 인과는 다음 연구로 남겼다.

페블러스는 DataClinic으로 AI 학습 데이터의 쓸모를 정량 진단한다. 선별 기준에는 유효 범위가 있다. 같은 주제를 다룬 올해 ICML 연구는 최적 난이도가 쓸 수 있는 데이터 예산을 따라 움직인다고 보고했는데, 그렇다면 예산을 줄이거나 늘린 날 파이프라인에 박혀 있는 기준은 더 이상 그 예산에서 고른 기준이 아니다.

기준 하나를 세우는 비용보다 그 기준이 보탠 몫을 재는 비용이 싸다. 그런데 파이프라인에 남는 것은 보통 앞쪽뿐이다.

▶ 전문: https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터선별 #파인튜닝 #학습데이터 #LLM #Tulu3 #OLMo2

---

## LinkedIn (EN)

Five methods for picking the hardest training examples all lost to picking at random.

The result comes from a paper posted to arXiv on November 5 by researchers at the University of Chicago, UT Austin and the Allen Institute for AI. Five widely used difficulty scores, from perplexity to PVI, went through identical fine-tuning runs while the selection ratio moved from 1 percent to 75. The random baseline stayed competitive at every ratio and was frequently the best method on the board.

Their explanation is coverage. Take the top of a difficulty ranking and the chosen examples crowd into a narrow region of the input space; draw at random and the subset ends up resembling the data it was drawn from. Measuring how far each subset had drifted from the full distribution and lining that up against accuracy, the less drifted subset scored higher in all six model and task pairings.

Aiming at coverage directly does not settle the matter either. Clustering the embeddings and drawing one example per cluster beat full fine-tuning on MMLU with 5 percent of Tülu 3, yet on HumanEval at that same ratio it fell behind random and never reached the full-data score. The paper reports the coverage and accuracy relationship as a correlation, leaving causation to later work.

Pebblous uses DataClinic to grade how usable AI training data is. A selection rule has a range over which it holds. An ICML paper this year reports that the best difficulty level shifts as the data budget changes, which means that on the day the budget changes, the rule sitting in the pipeline is no longer the rule that budget would have chosen.

Building a selection rule costs more than finding out what the rule added. Pipelines tend to keep only the building.

▶ Read: https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataSelection #FineTuning #TrainingData #LLM #Tulu3 #OLMo2

---

## Twitter/X (KO)

어려운 예제부터 고르는 데이터 선별법 다섯 가지가 LLM 미세조정에서 무작위 추출을 하나도 이기지 못했다. 11월 5일 arXiv 논문이다.

이유는 덮는 범위였다. 난이도 상위만 모으면 입력 공간의 좁은 구역에 몰리고, 아무 기준 없이 뽑은 묶음은 전체 분포의 모양을 닮는다.

https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/ko/

#페블러스 #데이터품질 #데이터선별 #파인튜닝

---

## Twitter/X (EN)

Five difficulty-based data selection methods failed to beat random sampling in LLM fine-tuning, according to a paper posted to arXiv on November 5.

The reason was coverage. Take only the hardest examples and they crowd into a narrow region of the input space. Draw at random and the subset still looks like the full distribution.

https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/en/

#Pebblous #DataQuality #DataSelection #FineTuning

---

## Facebook (KO)

학습 데이터를 10분의 1로 줄여야 한다면, 어느 쪽을 남기시겠습니까.

대개는 어려운 것부터 남깁니다. 쉬운 예제는 모델이 이미 아는 것이니 버려도 괜찮다고 배웠습니다.

11월 5일 arXiv에 올라온 논문이 그 습관을 그대로 시험대에 올렸습니다. 시카고대와 텍사스오스틴대, 앨런AI연구소 연구진이 널리 쓰이는 난이도 점수 다섯 가지를 모아 같은 조건으로 돌렸습니다. 상대는 아무것도 재지 않고 그냥 뽑은 무작위였습니다.

다섯 가지 모두 무작위를 넘지 못했습니다.

연구진이 내놓은 설명은 '덮는 범위'입니다.

어려운 것만 골라 담으면 그 묶음은 입력 공간의 좁은 구역에 몰립니다. 아무 기준 없이 뽑은 묶음은, 아무 기준이 없기 때문에 원래 데이터의 모양을 닮습니다.

골라낸 묶음이 전체 분포에서 얼마나 벗어났는지를 재어 성적과 맞대자, 모델과 과제를 짝지은 여섯 조합 전부에서 덜 벗어난 쪽이 더 좋은 점수를 냈습니다. 다만 논문은 여기까지를 상관이라고만 적고, 인과는 다음 연구로 남겨 두었습니다.

난이도 점수는 값도 비쌌습니다. 다섯 중 넷은 점수를 얻으려면 전체 데이터로 모델을 한 번 학습시켜야 하고, 그중 하나는 두 번 돌려야 합니다. 데이터를 줄여 아끼려던 계산을 고르는 단계에서 먼저 쓰는 셈입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 기준을 하나 정해 파이프라인에 박아 두면, 그것이 그날의 예산에서 고른 기준이라는 사실은 같이 적히지 않습니다. 올해 ICML에 실린 다른 연구는 최적 난이도가 쓸 수 있는 예산을 따라 움직인다고 보고했습니다.

"지금 쓰는 선별 기준은, 어느 예산에서 고른 것입니까?"

기준은 한 번 정하면 오래 갑니다. 기준을 고를 때의 사정은 그만큼 오래 가지 않습니다.

▶ https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터선별 #파인튜닝 #Tulu3

---

## Facebook (EN)

If you had to cut your training set to a tenth of its size, which part would you keep.

Most of us keep the hard examples. The easy ones, we were taught, are things the model already knows.

A paper posted to arXiv on November 5 put that habit on the bench. Researchers at the University of Chicago, UT Austin and the Allen Institute for AI gathered five widely used difficulty scores and ran them under identical conditions. The opponent was a subset drawn at random, measuring nothing.

None of the five beat it.

Their explanation is coverage.

Keep only the hard examples and the subset crowds into a narrow region of the input space. A subset drawn with no criterion at all ends up resembling the data it was drawn from, precisely because nothing steered it.

Measuring how far each subset had drifted from the full distribution and setting that against accuracy, the less drifted subset scored higher in all six model and task pairings. The paper stops at correlation and leaves causation to later work.

The difficulty scores were also expensive. Four of the five require training a model on the entire dataset before a score exists, and one of those four requires training twice. The compute you meant to save by cutting the data gets spent on deciding which rows to drop.

Pebblous uses DataClinic to grade how usable AI training data is. Once a rule is fixed and dropped into a pipeline, the budget it was chosen under does not get written down beside it. An ICML paper this year reports that the best difficulty level shifts as the available budget changes.

"The selection rule you run today: which budget was it chosen under?"

A rule, once set, lasts a long while. The circumstances it was set in do not last nearly as long.

▶ https://blog.pebblous.ai/blog/llm-finetuning-data-selection-coverage-over-difficulty/en/

#Pebblous #DataClinic #DataQuality #DataSelection #FineTuning #Tulu3
