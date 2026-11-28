# SNS 홍보 글: 중국 AI GLM-5.4·루미맥스 성적표, 근거는 자체 측정

> 소스: blog/glm-5-4-loop-transformer-lumimax
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/glm-5-4-loop-transformer-lumimax/ko/
> URL (EN): https://blog.pebblous.ai/blog/glm-5-4-loop-transformer-lumimax/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

즈푸의 GLM-5.4와 해마클라우드의 루미맥스는 에이전트의 추론과 기억을 겨냥했지만, 두 성적표 모두 회사가 정한 조건에서 나온 값이다.

즈푸는 11월 23일 GLM-5 기반 모델의 층 28개를 같은 가중치로 두 번 통과시키는 루프 트랜스포머 GLM-5.4를 공개했다. 성능 표는 750B 본 모델이 아니라 같은 구조의 30B 모델로 루프를 넣고 뺀 대조 실험 하나뿐이다. AIME25가 19.17에서 30.42로 올랐고, 루프 쪽은 학습 연산을 약 10% 더 썼다. 본 모델이 2T~3T급과 비슷하다는 주장에는 수치가 없고, 가중치와 API도 닫혀 있다.

루미맥스는 기업 문서를 출처 달린 지식망으로 엮는 지식베이스다. FRAMES 문항별 공개 파일을 세어 보면 92.84%는 '공식 기준' 채점으로 824문항 중 765문항을 맞힌 값이고, 글자 그대로 일치한 답은 466개다. 지식베이스 ID도 문항마다 달라 문항별로 따로 만든 지식베이스에서 답한 것으로 보인다.

에이전트는 단계마다 오류가 곱해진다. 단계 정확도 95%로 20단계를 모두 통과할 확률은 약 36%다. 지식망을 들일 조직은 업체 점수보다 이것부터 정해야 한다. 자기 업무에서 무엇을 정답으로 칠 것인가.

▶ 전문: https://blog.pebblous.ai/blog/glm-5-4-loop-transformer-lumimax/ko/
#즈푸 #루미맥스 #루프트랜스포머 #AI평가 #페블러스

---

## LinkedIn · Facebook (EN)

Two Chinese releases target an AI agent's reasoning and its memory, and both scorecards were measured on the companies' own terms.

Zhipu announced GLM-5.4 on November 23. It is a loop transformer that sends tokens through 28 layers of a GLM-5-based model twice with the same weights, adding depth without adding parameters. The only benchmark table Z.ai published comes from a 30B model of the same design, with and without the loop. AIME25 rose from 19.17 to 30.42, and the looped version used about 10% more training compute. The claim that the 750B flagship rivals 2T-3T parameter models carries no numbers, and the weights and API remain closed.

Haima Cloud's LumiMax compiles company documents into a sourced knowledge network that agents can query. Its per-question FRAMES file shows the 92.84% headline is 765 of 824 answers under what the company calls official grading. Only 466 match the reference answer exactly. Each question has its own knowledge-base ID, suggesting a separate knowledge base per question.

Agents compound their errors. At 95% accuracy per step, the chance of getting through 20 steps is about 36%. Before reading any vendor's score, an organization adopting a knowledge network has a question to settle: in its own work, what counts as a correct answer?

▶ Read: https://blog.pebblous.ai/blog/glm-5-4-loop-transformer-lumimax/en/
#Zhipu #LumiMax #LoopTransformer #AIEvaluation #Pebblous
