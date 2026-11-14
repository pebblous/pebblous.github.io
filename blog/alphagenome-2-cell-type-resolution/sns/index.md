# SNS 홍보 글: AlphaGenome 2, 같은 DNA를 세포마다 다르게 읽는다

> 소스: blog/alphagenome-2-cell-type-resolution/
> 생성일: 2026-11-13
> URL: https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

유전체 AI의 적중률을 두 배 가까이 끌어올린 것은 더 큰 모델이 아니라 정답지를 더 잘게 나눈 일이었다.

구글 딥마인드가 11월 11일 공개한 AlphaGenome 2는 DNA 서열과 함께 '어느 세포 종류, 어떤 상태인가'를 조건으로 받는다. 한 번 호출하면 그 세포 하나에 대한 효과가 나온다. 조건을 받으려면 그 단위로 쌓인 자료가 먼저 있어야 해서, 사람과 생쥐 68개 조직에서 뽑은 세포 프로파일 1억 700만 개가 벌크 데이터와 함께 학습에 들어갔다.

면역세포 28종을 담은 단일세포 지도 TenK10K에서 질병 원인 변이 적중은 30%였다. 단일세포 데이터로 미세조정한 기존 AlphaGenome과 이 분야의 다른 특화 도구들은 같은 과제에서 16%였다. 변이가 유전자 활동을 늘리는지 줄이는지 방향을 맞힌 비율은 43%와 23%로 갈렸다.

30%를 절대 성적으로 읽으면 곤란하다. 뒤집으면 열 중 일곱은 이 모델도 놓쳤고, 이 수치는 딥마인드가 자기 발표문에 적은 자체 평가다. 두 모델 모두 연구용이라는 단서가 붙고 임상이나 진단 목적으로는 승인받지 않았다.

오래 남는 대목은 비교 대상 쪽도 단일세포 데이터로 미세조정을 거친 모델이었다는 점이다. 잘게 쪼갠 자료를 뒤에 얹는 일과, 처음부터 그 단위로 묻고 답하도록 구조를 짜는 일은 같은 일이 아니었다.

페블러스가 DataClinic으로 하는 일도 AI 학습 데이터의 품질을 정량 진단하는 쪽이다. 진단이 끝난 뒤 라벨을 더 잘게 다시 붙이는 선택과, 애초에 그 단위로 모이도록 수집을 바꾸는 선택은 드는 값도 남는 것도 다르다.

▶ 전문: https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AlphaGenome2 #구글딥마인드 #단일세포 #유전체AI #TenK10K

---

## LinkedIn (EN)

The jump did not come from a bigger model. It came from a finer answer key.

Google DeepMind released AlphaGenome 2 on November 11. Beside the DNA sequence, the model now takes a second input naming which tissue, cell type or cell state the question is about, and one call returns the effect for that single condition. The training set had to match the question: 68 tissues across human and mouse yielded more than 107 million single-cell profiles, pooled with bulk measurements.

On TenK10K, a single-cell map of 28 primary human immune cell types, the model picked out 30% of the disease-causing variants. What it was measured against included the first AlphaGenome, itself retuned on single-cell data, plus the specialized tools already in use. Those stopped at 16%.

On whether a variant pushes gene activity up or down, the split was 43% against 23%.

Those are not grades to read on their own. Seven in ten variants still went unfound, these numbers are DeepMind's own evaluation rather than an outside benchmark, and neither version is cleared for clinical or diagnostic work.

The detail worth keeping is that the rival systems had also been retuned on single-cell data. Bolting a finer grain on afterwards, and building the thing to ask at that grain from the start, are not the same move, and that gap is what these two numbers are measuring.

Pebblous runs DataClinic over AI training data and reports what it finds as numbers. Relabeling at a finer grain once a diagnosis is in, and changing collection so the finer grain is there from the beginning, cost different amounts and end in different places.

▶ Read: https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AlphaGenome2 #GoogleDeepMind #SingleCell #GenomicsAI #TenK10K

---

## Twitter/X (KO)

구글 딥마인드가 공개한 AlphaGenome 2는 DNA 서열에 '어느 세포인가'를 조건으로 함께 받는다.

면역세포 28종 지도에서 질병 원인 변이 적중이 16%에서 30%로 올랐다.

모델을 키워서 얻은 수치가 아니라 정답지를 세포 단위로 나눠서 얻은 수치다.

https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/ko/

#페블러스 #데이터품질 #AlphaGenome2 #단일세포

---

## Twitter/X (EN)

Google DeepMind's AlphaGenome 2 takes one more input than the version before it: which cell type or state the question is about.

On a single-cell map of human immune cells, it found 30% of disease-causing variants where the earlier tools found 16%.

The model did not grow. The answer key got finer.

https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/en/

#Pebblous #DataQuality #AlphaGenome2 #SingleCell

---

## Facebook (KO)

열이 '조직'이고 값이 '발현량'인 표가 있습니다.

한 조직에 한 줄. 깔끔합니다.

그 한 줄을 만들려고 수십 종의 세포가 낸 신호를 하나로 합쳤다는 사실은 표 어디에도 적혀 있지 않습니다.

구글 딥마인드가 지난 11일 내놓은 AlphaGenome 2의 성적을 보다가 그 표를 다시 생각했습니다.

새 모델이 더 받는 입력은 '어느 세포 종류, 어떤 상태인가' 하나입니다. 그 한 칸을 받으려고 사람과 생쥐 68개 조직에서 세포 프로파일 1억 700만 개를 모았습니다.

면역세포 28종 지도에서 질병 원인 변이를 찾아내는 비율은 16%에서 30%로 올라갔습니다. 파라미터를 늘려서 나온 숫자가 아닙니다.

'평균이 먼저 지운 구분'.

제가 오래 붙들게 된 말은 이것입니다. 희귀한 세포 5%에서 유전자 활동이 세 배로 뛰어도, 나머지가 가만히 있으면 평균은 조금 오르는 데 그칩니다. 그렇게 기록된 값을 정답으로 놓고 학습시키면, 모델은 평균을 더 잘 맞히는 쪽으로만 자랍니다. 세포마다 갈라지는 답은 애초에 채점표에 없었던 것입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 모델이 틀린 사례만 떼어 모아 놓고 그것들이 서로 닮았는지를 보는 일도 그 안에 들어갑니다.

"우리 모델이 자꾸 틀리는 사례를 한자리에 모아 보면, 그것들은 서로 닮아 있습니까?"

닮아 있다면 모자란 것은 모델의 크기가 아닐지도 모릅니다. 덧붙이자면 AlphaGenome 2는 연구용이고 임상이나 진단에 쓰도록 승인된 모델이 아닙니다. 발표에 실린 수치도 아직 딥마인드 자체 평가입니다.

▸ https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/ko/

#페블러스 #데이터품질 #AlphaGenome2 #구글딥마인드 #단일세포 #DataClinic

---

## Facebook (EN)

A table with one column for tissue and one for expression.

One row per tissue. Tidy.

Nowhere on it is it written that the row was made by folding dozens of cell types into a single figure.

I read the scores for AlphaGenome 2, which Google DeepMind put out on November 11, with that table in mind.

The extra input the new version takes is one slot: which cell type, in which state. To be able to accept that slot, the team pooled more than 107 million cell profiles from 68 human and mouse tissues.

On a map of 28 immune cell types, the share of disease-causing variants the model found went from 16% to 30%. None of that came from adding parameters.

"The distinction the average deleted first."

That is the phrase I have been carrying around since reading it. If gene activity triples in a rare population that makes up 5% of a sample and the rest holds still, the average barely moves. Train on values recorded that way and the model gets better at averages, which is the only thing it was ever graded on. Answers that split by cell type were never on the test.

Diagnosing AI training data is what Pebblous does with DataClinic. Part of that work is to set aside only the cases a model gets wrong, and then look at whether they look alike.

"When you gather the cases your model keeps getting wrong, do they look alike?"

If they do, the thing in short supply may not be model size. Worth adding: AlphaGenome 2 is offered for research, not approved for clinical or diagnostic use, and the numbers DeepMind published are still DeepMind grading its own work.

▸ https://blog.pebblous.ai/blog/alphagenome-2-cell-type-resolution/en/

#Pebblous #DataQuality #AlphaGenome2 #GoogleDeepMind #SingleCell #DataClinic
