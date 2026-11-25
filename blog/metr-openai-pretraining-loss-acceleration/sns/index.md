# SNS 홍보 글: 오픈AI 학습 손실 곡선, 바깥에서는 다시 측정할 수 없다

> 소스: blog/metr-openai-pretraining-loss-acceleration
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/metr-openai-pretraining-loss-acceleration/ko/
> URL (EN): https://blog.pebblous.ai/blog/metr-openai-pretraining-loss-acceleration/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

오픈AI가 모델 열세 개의 사전학습 손실 값을 처음 공개했고, METR은 그 곡선이 올해 2월부터 7.1배 가팔라졌다고 적었다.

수석과학자 야쿠프 파호츠키가 11월 22일 회사 블로그에 올린 글이다. 이틀 뒤 평가 기관 METR이 같은 차트의 궤적을 구간별로 다시 적합해, 손실이 줄어드는 속도가 연 0.022에서 연 0.156으로 바뀌었다고 적었다. 걸리는 대목은 그 값을 잰 문제지다. 주 평가셋이 회사 내부 코드베이스에서 나왔다고 파호츠키 본인이 같은 글에 적어 두었다. 바깥의 연구자는 그 코드를 볼 수 없으니 같은 값을 다시 계산할 수도, 다른 회사 모델을 같은 잣대로 잴 수도 없다.

METR은 평가셋의 일부가 학습 데이터에 섞였거나 모델이 사내 분포에 과적합됐다면 실제 진전이 과장됐을 수 있다고 적고, 이를 가려낼 외부 데이터가 아직 없다고 덧붙인다. 같은 기간 에포크 AI의 공개 지표 ECI에서는 이만한 꺾임이 보고되지 않았다.

전문은 이 일을 측정 대상이 측정 도구를 쥐고 있는 구조로 짚었다. 사내 평가셋으로 성능을 보고하는 팀이 확인할 것은 하나다. 평가셋과 학습 말뭉치가 겹치지 않는다는 것을 선언이 아니라 검사 기록으로 보일 수 있는가.

▶ 전문: https://blog.pebblous.ai/blog/metr-openai-pretraining-loss-acceleration/ko/
#오픈AI #METR #AI평가 #평가셋오염 #페블러스

---

## LinkedIn · Facebook (EN)

OpenAI has published the pretraining loss of thirteen of its models for the first time, and METR finds the curve steepened by a factor of 7.1 starting in February.

Chief scientist Jakub Pachocki posted the figures on the company blog on November 22. Two days later the evaluation organization METR refit the trajectory and reported that loss had been falling 0.022 a year through early 2026 and 0.156 a year since February. The question is the exam paper. Pachocki states in the same post that the main held-out datasets are sourced from OpenAI's internal codebase. Outside researchers cannot see that code, so the value cannot be recomputed and no rival model measured against it.

METR writes that real progress may be overstated if part of the evaluation set leaked into the training data or the models overfit the internal distribution, and that no outside data exists yet to tell the two apart. Epoch AI's public capability index shows no comparable kink in that period. METR reports no consensus view internally.

The full piece reads the case as one where the thing being measured also builds the instrument. For any team scoring itself on an evaluation set of its own making, the question is whether the gap between that set and the training corpus exists as a test record rather than a claim.

▶ Read: https://blog.pebblous.ai/blog/metr-openai-pretraining-loss-acceleration/en/
#OpenAI #METR #AIEvaluation #BenchmarkContamination #Pebblous
