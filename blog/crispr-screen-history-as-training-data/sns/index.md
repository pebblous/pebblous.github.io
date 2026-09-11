# SNS 홍보 글: CRISPR 실험 AI가 라이브러리 5%로 적중 27.7%를 찾았다

> 소스: blog/crispr-screen-history-as-training-data/ko/index.html
> 생성일: 2026-09-12
> URL: https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

제넨텍 연구진이 CRISPR 유전자 라이브러리의 약 5%만 시험해 그 안에 있던 적중의 27.7%를 건졌습니다.

학습 재료는 유전자 서열이 아니었습니다. 이미 끝난 스크린 1,389건의 기록, 그러니까 무엇을 시험했고 무엇이 적중이었는지의 이력입니다. 모델은 그 이력에서 다음 라운드에 무엇을 찔러 볼지 고르는 정책을 배웁니다.

과거 스크린을 쓰지 않고 진행 중인 실험 안에서만 방향을 잡는 기존 방법들은 같은 예산에서 잘해야 14.5%였습니다. 더 눈에 띄는 자리는 초기값 실험입니다. 유전자 설명 텍스트로 만든 교과서 임베딩에서 출발한 모델은 아무 정보도 없이 출발한 모델보다 낮았습니다. 가장 높았던 쪽은 과거 스크린의 히트 행렬에서 출발한 모델입니다.

뒷면도 함께 봐야 합니다. 그 예산 안에서 나머지 적중은 찾지 못했다는 뜻이고, 이 선택이 성과인지 절감인지는 스크린 한 번의 단가가 정합니다. 논문은 그 계산을 하지 않습니다.

대부분의 조직에서 이런 기록은 남지 않습니다. 결과는 보고서 한 줄로 요약되고, 무엇을 어떤 순서로 시험했는지는 요약되는 순간 사라집니다. 이 논문이 학습 데이터로 쓴 것이 정확히 그 사라지는 부분입니다.

▶ 전문: https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #CRISPR #제넨텍 #실험설계AI #AIReadyData #강화학습

---

## LinkedIn (EN)

Genentech researchers assayed about 5% of a CRISPR library and recovered 27.7% of the hits it held.

The training material was not gene sequences. It was the record of 1,389 completed screens: which genes were tried, and which came back as hits. From that history the model learns a policy for choosing what to perturb in the next round.

Established methods that steer only within the screen in progress, leaving past screens alone, recovered 14.5% at best on the same budget. The sharper finding sits in the initialization. A model started from textbook embeddings built out of gene description text scored below one started from no information at all, and the one started from the hit matrix of past screens scored highest.

The reverse side belongs in the same reading. On that budget the remaining hits went unfound, and whether the trade reads as a result or as a cost saving depends on the price of a single screen. The paper does not run that calculation.

In most organizations the record this policy learned from never survives. An outcome becomes a line in a report, and the order in which things were tried disappears with the summary. That vanishing part is exactly what the paper used as training data.

▶ Read: https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #CRISPR #Genentech #ExperimentalDesign #AIReadyData #ReinforcementLearning

---

## Twitter/X (KO)

제넨텍 연구진이 이미 끝난 CRISPR 스크린의 기록으로 다음 실험을 고르는 정책을 학습시켰습니다. 라이브러리의 5%를 시험해 적중의 27.7%를 건졌습니다.

학습 데이터는 유전자 서열이 아니라 지난 실험들의 순서였습니다.

https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/ko/

#페블러스 #CRISPR #제넨텍 #실험설계AI

---

## Twitter/X (EN)

Genentech trained a policy on the records of CRISPR screens already completed. It assayed 5% of the library and found 27.7% of the hits.

The training data wasn't gene sequences. It was the order in which past experiments were run.

https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/en/

#Pebblous #CRISPR #Genentech #AIReadyData

---

## Facebook (KO)

데이터 품질을 진단하러 들어간 자리에서, 모델을 여러 번 다시 학습시킨 팀에 무엇을 바꿔 봤는지 물은 적이 있습니다.

최종 설정은 문서에 남아 있었습니다. 그 앞의 시도들은 아무 데도 없었습니다. 누가 지우기로 한 적이 없는데도 그랬습니다.

제넨텍 연구진이 이번 주에 공개한 CRISPR 논문을 읽으면서 그 장면이 다시 떠올랐습니다. 이 연구가 학습 데이터로 삼은 것은 유전자 서열이 아니라 이미 끝난 스크린 1,389건의 기록이었습니다. 누가 무엇을 골라 시험했고 그중 무엇이 적중이었는지, 그 순서 자체입니다.

저는 이런 자료를 '결정의 기록'이라고 부르고 싶습니다. 생물학 지식의 목록이 아니라, 누군가 예산 안에서 무엇을 먼저 찔러 보기로 했는지가 남은 자료입니다. 그 기록으로 다음 후보를 고르는 정책을 학습시켰더니, 라이브러리의 5% 남짓을 시험하고도 그 안에 있던 적중의 27.7%를 회수했습니다.

오래 남은 대목은 다른 곳에 있었습니다. 유전자에 대한 교과서적 설명을 임베딩으로 만들어 출발점으로 삼은 모델이, 아무 정보 없이 출발한 모델보다 낮은 성적을 냈습니다. 밖에서 구해 온 지식보다 그 분야가 실제로 겪은 결과의 기록이 더 나은 출발점이었던 셈입니다.

물론 27.7%는 나머지를 놓쳤다는 말이기도 합니다. 그 선택이 성과인지 단순한 절감인지는 실험 한 번의 단가가 정하고, 논문은 그 값을 계산하지 않습니다.

"우리가 지난 분기에 시도한 것들의 목록과 결과는, 다음 분기에 무엇을 먼저 해 볼지 정하는 데 입력으로 들어가는가."

논문을 덮고 나서 남은 것은 CRISPR가 아니라 이 질문이었습니다.

https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #CRISPR #제넨텍

---

## Facebook (EN)

On a data quality engagement, I once asked a team that had retrained a model many times what they had changed along the way.

The final configuration was in the document. Everything tried before it was nowhere. No one had decided to delete any of it.

That scene came back to me while reading the CRISPR paper Genentech researchers released this week. The study's training data was not gene sequences. It was the record of 1,389 completed screens: which genes someone chose to test, and which ones came back as hits. The order itself.

I want to call material like that a record of decisions. Not a catalogue of biology, but what remains of someone choosing, inside a budget, what to probe first. A policy trained on that record assayed a little over 5% of the library and recovered 27.7% of the hits inside it.

The part that stayed with me sits elsewhere. A model initialized from textbook descriptions of genes, turned into embeddings, scored below a model that started from nothing at all. The record of what the field had actually observed made a better starting point than the knowledge borrowed from outside it.

The 27.7% also says the rest went unfound. Whether that trade is a result or just a saving depends on the price of one screen, and the paper leaves that number uncalculated.

"Does the list of what we tried last quarter, and how it turned out, feed into what we try first next quarter?"

What stayed after I closed the paper was not CRISPR. It was that question.

https://blog.pebblous.ai/blog/crispr-screen-history-as-training-data/en/

#Pebblous #DataClinic #DataQuality #CRISPR #Genentech
