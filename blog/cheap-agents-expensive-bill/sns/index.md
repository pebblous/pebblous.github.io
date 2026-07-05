# SNS 홍보 글: 값싼 에이전트의 비싼 청구서

> 소스: blog/cheap-agents-expensive-bill/
> 생성일: 2026-07-05
> URL: https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

앤트로픽이 소네트 5로 토큰 단가를 내렸다. 그런데 지난 1년간 블렌디드 단가가 67% 떨어지는 사이, 엔터프라이즈 AI 청구서는 오히려 320% 늘었다.

값이 내려가는데 지출은 커지는 이 역설의 뿌리에는 에이전트 루프가 있다. 에이전트는 매 턴 지금까지의 대화 전체를 다시 실어 보내기 때문에, 10턴 세션은 단일 호출의 약 50배 비용이 든다. 게다가 모델 인보이스는 전체 비용의 20~40%뿐이고, 나머지는 오케스트레이션과 재시도가 먹는다.

루프를 길게 만드는 근본 원인은 대개 부실한 데이터다. 실패한 에이전트 작업의 85%가 데이터 품질 문제에서 비롯된다. 값싼 모델은 출발선을 낮출 뿐, 데이터가 부실하면 에이전트는 헛돌고 결승선까지의 비용은 오히려 불어난다.

그래서 경쟁의 축이 토큰 단가에서 완수한 작업당 비용으로 옮겨갔다. 예산을 지키는 지렛대는 더 싼 모델의 아래, 데이터 준비도에 있다.

▶ 전문: https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #AI에이전트 #에이전트경제 #완수한작업당비용 #Anthropic #ClaudeSonnet5

---

## LinkedIn (EN)

Anthropic launched Claude Sonnet 5 on June 30 as a cheaper way to run agents, 40–60% below its flagship. Yet over the past year the blended token price dropped 67% while enterprise AI bills climbed 320%.

The paradox lives in the agent loop. An agent resends the entire conversation every turn, so a 10-turn session costs roughly 50 times a single call, not 10. And the model invoice is only 20–40% of the total; orchestration and retries eat the rest.

What stretches the loop is weak data. 85% of failed agent tasks trace back to data quality. A cheap model only lowers the starting line; when the data is weak, the agent spins its wheels and the cost to the finish line grows.

The competitive axis has moved from token price to cost per completed task. The lever that protects the budget sits below model choice, in data readiness.

▶ Read: https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #AIAgent #AgentEconomics #Anthropic #ClaudeSonnet5

---

## Twitter/X (KO)

토큰 단가는 1년 새 67% 내렸는데, 엔터프라이즈 AI 청구서는 320% 늘었다.

값이 싸도 데이터가 부실하면 에이전트는 헛돌고, 루프가 길어질수록 청구서는 커진다. 새 경쟁 축은 토큰 단가가 아니라 완수한 작업당 비용이다.

▶ https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/ko/

#페블러스 #데이터품질 #ClaudeSonnet5 #에이전트경제

---

## Twitter/X (EN)

Token prices fell 67% in a year. Enterprise AI bills rose 320%.

Cheap models only lower the starting line. When the data is weak, agents spin their wheels and the loop cost balloons. The new axis isn't token price; it's cost per completed task.

▶ https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/en/

#Pebblous #DataQuality #ClaudeSonnet5 #AgentEconomics

---

## Facebook (KO)

값이 내려갔다는 소식은 분명 반가운데, 청구서를 열어 본 팀의 표정은 왜 정반대였을까요.

앤트로픽이 6월 30일 클로드 소네트 5를 내놓으며 "이제 에이전트를 더 싸게 돌릴 수 있다"고 했습니다. 토큰 단가는 실제로 지난 1년 새 67% 내렸습니다.

그런데 같은 기간, 엔터프라이즈의 AI 청구서는 오히려 세 배가 넘게 불었습니다.

값은 내려가는데 지출은 커지는 이 어긋남의 자리에는, 에이전트 루프가 있었습니다.

에이전트는 한 번 부르고 끝나는 도구가 아닙니다.

매 턴, 지금까지의 대화 전체를 다시 짊어지고 다음 걸음을 뗍니다.

그래서 열 번의 왕복은 한 번의 열 배가 아니라, 수십 배의 비용이 됩니다.

그 루프를 길게 늘리는 것은 대개 모델이 아니라, 에이전트가 딛고 선 데이터였습니다. 데이터가 부실하면 에이전트는 판단을 잘못 짚고, 되돌아가고, 다시 시도합니다. 실패한 에이전트 작업의 대부분이 결국 데이터 품질 문제로 되돌아간다는 조사도 있습니다.

그래서 요즘 현장에서 던지기 시작한 질문은 이런 것입니다.

"우리가 봐야 할 건 토큰 값이 아니라, 하나의 일을 끝까지 마치는 데 든 비용 아닐까?"

저는 이 질문이 오래 남습니다. 값싼 모델은 출발선을 조금 앞당길 뿐, 결승선까지의 거리는 데이터가 정하기 때문입니다. 페블러스가 DataClinic으로 학습 데이터의 품질을 먼저 진단해 온 이유도 여기에 닿아 있습니다.

늘 보던 청구서를 조금 다른 각도에서 바라볼 수 있다면 좋겠습니다.

▶ https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/ko/

#페블러스 #데이터품질 #DataClinic #AIReadyData #ClaudeSonnet5 #Anthropic #에이전트경제

---

## Facebook (EN)

The news was good, prices were down. So why did the team go quiet when they opened the bill?

On June 30, Anthropic introduced Claude Sonnet 5 as a cheaper way to run agents. The token price really did fall, by 67% over the past year.

And yet, over the same stretch, enterprise AI bills didn't shrink. They more than tripled.

The gap between a falling price and a rising bill turned out to have a shape: the agent loop.

An agent isn't a tool you call once.

Every turn, it carries the whole conversation forward again before taking the next step.

So ten round-trips don't cost ten times one. They cost dozens of times more.

And what stretches that loop is rarely the model. It is the data the agent stands on. When the data is weak, the agent misreads, backtracks, and tries again. Most failed agent tasks, it turns out, lead back to data quality.

Which is why a quieter question is starting to circulate:

"Isn't the number that matters not the price per token, but the cost of finishing one task, start to end?"

That question stays with me. A cheap model only moves the starting line forward a little; the distance to the finish is set by the data. It is the same reason Pebblous has spent its time diagnosing training-data quality with DataClinic, tending to the ground before the model that stands on it.

Maybe the bill is worth reading from a slightly different angle.

▶ https://blog.pebblous.ai/blog/cheap-agents-expensive-bill/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #ClaudeSonnet5 #Anthropic #AgentEconomics
