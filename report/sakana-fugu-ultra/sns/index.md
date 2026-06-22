# SNS 홍보 글: 모델을 지휘하는 모델이 온다

> 소스: report/sakana-fugu-ultra/ko/index.html
> 생성일: 2026-06-22
> URL: https://blog.pebblous.ai/report/sakana-fugu-ultra/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

Sakana AI가 내놓은 Fugu Ultra는 새 파운데이션 모델이 아니다. 다른 LLM을 호출하도록 학습된 모델이다.

하나의 엔드포인트 뒤에서 작업을 쪼개고, 어느 하위 모델에 맡길지 정하고, 결과를 검증해 합성한다. if-else 규칙이나 임베딩 유사도로 모델을 고르던 기존 라우팅과 다른 점은, 라우팅 정책 자체를 보상 신호로부터 학습한다는 데 있다.

Sakana는 10개 벤치마크 중 8개에서 선두 또는 동률이라고 발표했다. 가까이 보면 단독 선두는 일곱이고, 두 번의 패배는 모두 장문맥 과제에서 나왔다. 오케스트레이션이 조율 잡음을 덜기는커녕 더하는 영역이다.

더 깊은 약점은 점수가 아니라 투명성이다. 모든 기준선이 벤더 자가보고이고, 모델 풀의 개방형·폐쇄형 구성은 공개되지 않았다. 감사할 수 없는 순위표는 숫자가 아무리 좋아도 마케팅이다.

코디네이터가 잘 라우팅하려면 어느 모델이 무엇을 잘하는지 정확한 그림이 필요하고, 그 그림은 뒤에 깔린 평가 데이터만큼만 정확하다. 오케스트레이션 시대에도 승부처는 결국 데이터다.

▶ 전문: https://blog.pebblous.ai/report/sakana-fugu-ultra/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM오케스트레이션 #멀티에이전트 #모델라우팅 #SakanaAI #FuguUltra

---

## LinkedIn (EN)

Sakana AI's new Fugu Ultra isn't another foundation model. It's a model trained to call other models.

Behind a single endpoint, it breaks a task apart, decides which sub-model handles each piece, then verifies and synthesizes the results. Routing itself isn't new. Learning the routing policy from reward signals is.

Sakana says Fugu leads or ties on 8 of 10 benchmarks. Look closer: seven are sole leads, and both losses fall in long-context tasks, exactly where orchestration adds coordination noise rather than removing it.

The deeper weakness is auditability, not score. Every baseline is vendor self-reported, and the open-versus-closed makeup of the model pool was never disclosed. A leaderboard you can't reproduce is marketing.

A coordinator only routes well when it holds an accurate picture of what each model is good at, and that picture is only as good as the evaluation data beneath it. In the orchestration era, the contest is still about data.

▶ Read: https://blog.pebblous.ai/report/sakana-fugu-ultra/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLMOrchestration #MultiAgent #ModelRouting #SakanaAI #FuguUltra

---

## Twitter/X (KO)

Sakana AI의 Fugu Ultra는 새 모델이 아니라 다른 LLM을 호출하도록 학습된 코디네이터다.

'10개 중 8개 선두' 주장의 기준선은 전부 벤더 자가보고. 감사할 수 없는 순위표는 마케팅이다.

오케스트레이션 시대에도 승부처는 평가 데이터의 품질이다.

https://blog.pebblous.ai/report/sakana-fugu-ultra/ko/

#페블러스 #SakanaAI #FuguUltra #LLM오케스트레이션

---

## Twitter/X (EN)

Sakana AI's Fugu Ultra isn't a new model. It's a coordinator trained to call other LLMs.

Its "8 of 10 benchmark lead" rests entirely on vendor self-reported baselines. A leaderboard you can't reproduce is marketing.

Even in the orchestration era, the contest is the quality of your evaluation data.

https://blog.pebblous.ai/report/sakana-fugu-ultra/en/

#Pebblous #SakanaAI #FuguUltra #LLMOrchestration

---

## Facebook (KO)

"10개 벤치마크 중 8개에서 선두."

며칠 전 피드를 지나간 이 한 줄이 자꾸 눈에 밟혔습니다.

Sakana AI가 내놓은 Fugu Ultra 이야기였는데, 가까이 들여다보니 새 파운데이션 모델이 아니었습니다. 다른 LLM을 호출하도록 학습된 코디네이터였습니다. 작업을 잘게 쪼개 여러 모델에 맡기고, 결과를 검증해 하나로 합칩니다.

'8개 선두'라는 숫자도 들리는 것만큼 단단하지는 않았습니다. 단독 선두는 일곱이었고, 두 번의 패배는 모두 긴 문서를 다루는 과제에서 나왔습니다. 무엇보다 모든 기준 점수가, 그 모델을 만든 회사가 스스로 적어 낸 수치였습니다.

그래서 제게 남은 질문은 순위표가 아니었습니다.

"이 숫자를 누가 다시 검증할 수 있나? 어느 모델이 무엇을 잘하는지, 그 그림은 무엇으로 그려졌나?"

코디네이터가 잘 지휘하려면 자기 풀의 능력 프로파일이 정확해야 하고, 그 프로파일은 결국 뒤에 깔린 평가 데이터입니다. 모델을 잘 고르는 일이 데이터를 잘 다루는 일과 한자리에서 만난다는 사실이 오래 남았습니다. 페블러스가 데이터를 진단하고 정제해 온 자리와 같은 곳이었습니다.

전문은 여기서 읽을 수 있습니다: https://blog.pebblous.ai/report/sakana-fugu-ultra/ko/

#페블러스 #SakanaAI #FuguUltra #LLM오케스트레이션 #데이터품질 #DataClinic

---

## Facebook (EN)

"Leads on 8 of 10 benchmarks."

This line drifted past my feed a few days ago, and it stayed with me longer than it should have.

It was about Fugu Ultra, Sakana AI's new release. But when I looked closer, it wasn't a new foundation model at all. It was a coordinator trained to call other LLMs: to split a task, hand the pieces to different models, then verify and stitch the answers back together.

The "8 of 10" turned out to be thinner than it sounded. Seven were sole leads, both losses landed on long-document tasks, and every baseline score had been reported by the vendor that built the model.

So the question that lingered wasn't the leaderboard.

"Who can reproduce these numbers? And the picture of which model is good at what — what was it drawn from?"

A coordinator only conducts well when the map of its own pool is accurate, and that map is, in the end, evaluation data. Choosing models well turns out to sit in the same place as handling data well. That is the place where we have spent our years at Pebblous.

Read the full piece here: https://blog.pebblous.ai/report/sakana-fugu-ultra/en/

#Pebblous #SakanaAI #FuguUltra #LLMOrchestration #DataQuality #DataClinic
