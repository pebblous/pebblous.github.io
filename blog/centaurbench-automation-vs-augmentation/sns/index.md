# SNS 홍보 글: AI 코치를 붙인 쪽이 더 못한 과제가 일곱 중 셋이었다

> 소스: blog/centaurbench-automation-vs-augmentation/ko/index.html
> 생성일: 2026-08-23
> URL (KO): https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/ko/
> URL (EN): https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

일곱 과제 가운데 세 과제에서는, 어떤 모델의 조언도 받지 않은 쪽이 1위였습니다.

8월 19일 arXiv에 올라온 CentaurBench는 UC 버클리 하스 경영대학원 연구진이 모델 열 개를 같은 과제에 두 번 세운 벤치마크입니다.

한 번은 직접 산출물을 만들게 했고, 한 번은 200~250 단어짜리 과정 안내문만 쓰게 한 뒤 실제 작업은 GPT-3.5-Turbo에게 맡겼습니다. 작업자를 한 모델로 고정해 두었으니 조건마다 달라지는 것은 안내문의 품질뿐입니다.

두 순위표는 서로 잘 맞지 않았습니다. 일곱 과제 중 다섯에서 1위 모델이 달랐고, 보조 모델 아홉 개 기준 두 순위의 스피어만 상관은 0.48, 양측 p는 0.187이었습니다.

모델 하나를 따라가면 폭이 더 뚜렷합니다. Claude-Opus-4.8은 시장 동향 분석을 직접 쓰면 평균 2.05위인데, 같은 과제에서 워커를 코칭하게 하자 8.15위로 내려앉았습니다. 운영연구와 세무 준비, 여행 계획에서는 무보조 작업자가 보조 조건을 전부 눌렀고, 일곱 과제 평균으로도 무보조보다 나은 보조 모델은 GPT-5-Mini 하나뿐이었습니다.

연구진은 이것을 보조가 무용하다는 뜻으로 읽지 말라고 적어 두었습니다. 보조의 형태를 과정 안내 한 장으로 좁혔고 워커도 하나로 고정했으니 증강이 낼 수 있는 최대치가 아니라 보수적인 하한선이며, 최종 판정도 사람이 아니라 심사위원 모델이 내렸습니다. 이들의 표현은 보조의 값이 과제에 따라 달라지고 음수가 될 수도 있다는 쪽입니다.

도입 결정이 실제로 걸려 있는 자리도 평균이 아니라 과제별 순위 쪽입니다. 프레임워크가 모듈식이라 워커 자리에 자기 팀의 주니어나 사내 모델을 넣으면 같은 절차로 우리 업무에 맞는 코치를 고를 수 있습니다. 페블러스가 데이터 품질을 진단할 때의 순서와도 겹칩니다. 무엇이 제일 좋은가를 묻기 전에, 이 자리에서 무엇이 실제로 도움이 되는지를 먼저 잽니다.

▶ 전문: https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #CentaurBench #LLM벤치마크 #AI도입 #인간AI협업 #UCBerkeley #AIReadyData

---

## LinkedIn (EN)

On three of seven professional tasks, the condition that ranked first received no guidance from any model at all.

CentaurBench, posted to arXiv on 19 August by researchers at UC Berkeley's Haas School of Business, put ten models through the same seven tasks twice.

In one pass each model produced the deliverable itself. In the other it wrote nothing but a 200 to 250 word process note, and a fixed worker, GPT-3.5-Turbo, did the actual work. Holding the worker constant means the only thing that varies across conditions is the quality of the guidance.

The two leaderboards did not line up. The top model differed on five of the seven tasks, and across the nine shared assistant models the Spearman correlation between the two rankings was 0.48, with a two-sided p of 0.187.

Individual models show the split more sharply. Claude-Opus-4.8 averages rank 2.05 writing market trend analyses itself and falls to 8.15 when it coaches the worker on the same task. On operations research, tax preparation and travel planning, the unaided worker outranked every assisted condition, and averaged over all seven tasks only GPT-5-Mini beat working alone.

The authors are careful about what this shows. Assistance was restricted to a single sheet of process guidance, the worker was held fixed, and the final calls came from a judge panel of models rather than human experts, so the numbers read as a conservative floor for augmentation rather than its ceiling. Their own reading is that the value of assistance is task-contingent and can turn negative.

Adoption decisions sit at the task level, not at the average. The framework is modular, so putting your own junior analyst or in-house model in the worker seat measures which coach fits your work. The ordering is familiar from data quality work at Pebblous: before asking which model is best, measure what actually helps in the seat you are filling.

▶ Read: https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #CentaurBench #LLMBenchmark #AIAdoption #HumanAICollaboration #UCBerkeley #AIReadyData

---

## Twitter/X (KO)

일곱 과제 가운데 셋에서는, 아무 조언도 받지 않은 작업자 모델이 보조를 받은 모든 조건을 앞섰습니다.

버클리 연구진이 같은 모델을 직접 수행과 코칭 두 자리에 세워 재어 봤습니다. 잘하는 모델과 남을 잘하게 하는 모델은 서로 다른 축이었습니다.

https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/ko/

#페블러스 #데이터품질 #CentaurBench #AI도입

---

## Twitter/X (EN)

On three of seven work tasks, a worker model that received no guidance beat every condition that got some.

Berkeley researchers ranked the same models twice, once as the solver and once as the coach. Doing the work well and making someone else do it well turn out to be separate axes.

https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/en/

#Pebblous #DataQuality #CentaurBench #AIAdoption

---

## Facebook (KO)

팀에 제일 좋다는 모델을 붙여 놓고, 결과물이 전보다 나빠진 걸 본 적이 있습니다.

그때는 제가 프롬프트를 잘못 썼겠거니 했습니다.

지난주 arXiv에 올라온 벤치마크가 그 장면에 처음으로 숫자를 붙여 두었습니다.

버클리 하스 연구진은 모델 열 개를 같은 과제에 두 번 세웠습니다. 한 번은 직접 답을 쓰게 했고, 한 번은 안내문만 쓰게 한 뒤 실제 작업은 훨씬 약한 모델에게 맡겼습니다.

작업자를 하나로 고정해 두었으니, 조건마다 달라지는 것은 안내문의 품질뿐입니다.

일곱 과제 가운데 다섯에서 두 순위표의 1위가 서로 달랐습니다.

시장 동향 분석을 직접 쓰면 가장 잘하던 모델이, 코치 자리로 옮기자 평균 2.05위에서 8.15위로 내려앉았습니다.

제가 다시 읽은 건 그다음 줄이었습니다.

세 과제에서는 아무 안내도 받지 않은 작업자가 1위였습니다. 어떤 모델의 조언을 받아도 혼자 하느니만 못했다는 뜻입니다.

나쁜 안내문이 이상하게 생긴 것도 아니었습니다. 논문이 뽑아 놓은 최하위 안내문들은 문장만 떼어 놓고 보면 나무랄 데가 없습니다. 정보의 순서와 위계를 정하라거나, 균형 잡힌 절충을 고려하라거나. 어느 회의록에나 들어갈 법한 말입니다.

문제는 그 말들이 하는 일이었습니다. 작업자가 이미 읽은 프롬프트를 되풀이하거나, 결정을 도로 작업자에게 떠넘기거나, 심한 경우 과제가 요구한 산출물을 하지 말라고 지시했습니다.

"이 모델이 잘하는가"와 "이 모델이 남을 잘하게 하는가"는 같은 질문인가?

저는 이것을 '두 번째 순위표'라고 불러 두고 싶습니다. 어느 회사도 발표하지 않는 순위표입니다. 도입 검토는 대개 첫 번째 순위표를 보고 끝나는데, 팀이 실제로 겪는 일은 두 번째 쪽에서 벌어집니다.

페블러스가 데이터 품질을 진단하며 자주 마주치는 장면과도 겹칩니다. 결과가 어긋나면 팀이 먼저 손대는 곳은 대개 모델의 등급표이고, 정작 물어야 할 것은 그 모델이 우리 자리에서 무엇을 하고 있는가입니다.

연구진도 이 숫자를 조심스럽게 읽습니다. 보조의 형태를 과정 안내 한 장으로 좁혀 두었고, 최종 판정도 사람이 아니라 심사위원 모델이 내렸습니다. 보조가 무용하다는 결론이 아니라 그 값이 과제에 따라 음수가 될 수 있다는 것이 이들의 표현입니다.

다만 절차가 모듈식이어서, 작업자 자리에 우리 팀의 주니어나 사내 모델을 넣으면 같은 방식으로 재어 볼 수 있다고 합니다.

가장 좋은 모델을 고르는 일보다, 우리 자리에서 무엇이 도움이 되는지를 재어 보는 일이 확실히 더 번거롭습니다.

그런데 팀이 매일 마주하는 쪽은 두 번째입니다.

https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/ko/

#페블러스 #CentaurBench #AI도입 #인간AI협업 #데이터품질 #DataClinic

---

## Facebook (EN)

I have put the strongest available model next to a team and watched the work come out worse than before.

At the time I assumed I had written the prompt badly.

A benchmark posted to arXiv last week put numbers on that scene.

Researchers at Berkeley Haas ran ten models through the same seven tasks twice. In one pass the model wrote the deliverable. In the other it wrote only a short note of guidance, and a much weaker model did the actual work.

The worker was held fixed, so the only thing changing across conditions was the quality of the note.

On five of the seven tasks, the two leaderboards had different models at the top.

The best model at writing market trend analyses itself dropped from an average rank of 2.05 to 8.15 once it moved into the coach's seat.

The line I went back and reread came next.

On three tasks, the worker that received no guidance at all ranked first. Whatever advice it was handed, it did better alone.

The bad guidance did not look strange either. Taken sentence by sentence, the lowest-ranked notes read perfectly well. Establish the order and hierarchy of the information. Consider balanced trade-offs. Sentences that would pass unnoticed in any meeting.

What they did was the problem. They repeated a prompt the worker had already read, handed decisions back to the worker, or, in the worst case, instructed the worker not to produce what the task explicitly asked for.

"Is a model that does the work well the same thing as a model that makes someone else do it well?"

I have started calling it the second leaderboard. No lab publishes it. Adoption reviews usually end at the first one, while the thing a team actually lives with happens on the second.

It overlaps with what we keep running into in data quality work at Pebblous. When the output disappoints, the first place people reach for is the ranking of models, when the question worth asking is what that model is doing in the seat we put it in.

The authors read their own numbers carefully. Assistance was narrowed to one sheet of process guidance, and the final calls came from a panel of judge models rather than people. Their conclusion is not that guidance is futile but that its value depends on the task and can be negative.

The procedure is modular, though. Put your own junior analyst or in-house model in the worker seat and the same measurement runs.

Measuring what helps in your own seat is plainly more trouble than picking whichever model tops the chart.

But the second leaderboard is the one a team meets every day.

https://blog.pebblous.ai/blog/centaurbench-automation-vs-augmentation/en/

#Pebblous #CentaurBench #AIAdoption #HumanAICollaboration #DataQuality #DataClinic
