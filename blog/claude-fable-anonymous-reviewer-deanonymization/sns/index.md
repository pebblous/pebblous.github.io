# SNS 홍보 글: 클로드 페이블 5.2는 이름 없는 심사평에서 심사자를 알아본다

> 소스: blog/claude-fable-anonymous-reviewer-deanonymization
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/claude-fable-anonymous-reviewer-deanonymization/ko/
> URL (EN): https://blog.pebblous.ai/blog/claude-fable-anonymous-reviewer-deanonymization/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

클로드 페이블 5.2가 공개된 적 없는 ICML 2020 심사평 가운데 55.4%에서 심사자 이름을 맞혔다.

메릴랜드대와 구글 딥마인드를 비롯한 다섯 기관 연구진 열두 명이 11월 19일 arXiv에 올린 프리프린트(동료 심사 전)다. 모델에 준 것은 글 한 편과 짧은 프롬프트뿐이다. 웹 검색도, 후보 명단도, 대조할 다른 글도 붙이지 않았다. ICML 2020 프로그램 공동의장을 맡았던 연구자가 IRB 승인을 받아 혼자 비공개 심사평을 다뤘고, 논문에는 집계 결과만 실렸다. 같은 방법으로 레딧 댓글 하나를 주었을 때 계정이 드러난 비율은 69%였다. 다만 이 값은 한 서브레딧에 최근 1년 동안 글을 가장 많이 남긴 구간의 수치이고, 실험 전체 평균은 그 절반에 못 미친다.

적중률을 가른 변수는 그 사람의 글이 사전학습 데이터에 얼마나 들어갔는지였다. 논문은 글쓴이가 지금 무엇을 하든 모델이 이미 학습한 것을 가중치에서 걷어 낼 수 없다고 적는다. 온라인에서 글을 내리는 일과 그 글로 학습한 모델에서 흔적을 지우는 일은 서로 다른 작업이다.

전문은 이 결과를 사내 문서로 모델을 돌리는 조직의 학습 데이터 출처 기록 문제로 옮겨 짚었다.

▶ 전문: https://blog.pebblous.ai/blog/claude-fable-anonymous-reviewer-deanonymization/ko/
#클로드페이블 #탈익명화 #사전학습데이터 #익명성 #페블러스

---

## LinkedIn · Facebook (EN)

Claude Fable 5.2 named the reviewer behind 55.4% of ICML 2020 peer reviews that have never been published.

A preprint posted to arXiv on November 19 by twelve researchers at five institutions, among them the University of Maryland and Google DeepMind, handed frontier models one piece of writing and a short prompt. No web search, no roster of candidate names, no sample of the author's other work. A program co-chair of ICML 2020 held sole access to the unpublished reviews under IRB approval, and the paper reports aggregate results only. Given a single Reddit comment, the models named the account behind it 69% of the time among the heaviest posters in a subreddit; the average across that same experiment was 31%.

What separated those bands was how much of a person's writing had gone into pretraining. The paper states that nothing a writer does now can remove what a model has already learned about them from its weights. Taking a text offline and erasing its traces from a model trained on it are two different operations, and only the first can be done on request.

The full article carries the finding over to organizations that train on their own internal documents, where provenance records decide what can still be removed.

▶ Read: https://blog.pebblous.ai/blog/claude-fable-anonymous-reviewer-deanonymization/en/
#ClaudeFable #Deanonymization #PretrainingData #AIPrivacy #Pebblous
