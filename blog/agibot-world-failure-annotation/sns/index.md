# SNS 홍보 글: AgiBotWorld는 로봇의 헛손질에 라벨을 붙인다

> 소스: blog/agibot-world-failure-annotation/ko/index.html
> 생성일: 2026-06-22
> URL: https://blog.pebblous.ai/blog/agibot-world-failure-annotation/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

구글 딥마인드의 SayCan은 로봇 시연 27만 6천 개를 모으고 1만 2천 개만 남겼습니다. 95%를 '실패했다'는 이유로 버린 것입니다.

중국 로봇 스타트업 AGIBOT이 4월 공개한 AgiBotWorld 2026은 반대로 갔습니다. 100만 개가 넘는 조작 트라젝토리에서 로봇이 물건을 놓치고 다시 잡는 순간까지 남겼고, 그 궤적에 error_cause와 restorable이라는 두 필드를 붙였습니다. 실패가 일어난 이유와 회복 가능 여부를 라벨로 기록한 것입니다.

효과는 수치로 확인됩니다. 정책 모델 GO-1 기준으로 Open X-Embodiment보다 30%, 복잡한 태스크에서는 RDT보다 32% 높은 성능을 보였습니다.

물론 모든 실패가 가치 있는 것은 아닙니다. 노이즈와 신호를 가르는 주석 비용이 새로 듭니다. 그러나 로봇이 현실에서 가장 자주 마주칠 상황은 완벽한 성공이 아니라, 실수하고 회복하는 순간입니다.

클린 데이터의 정의가 '성공만 골라낸 데이터'에서 '실패와 회복까지 라벨링한 데이터'로 옮겨가고 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/agibot-world-failure-annotation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #로봇파운데이션모델 #학습데이터 #AgiBotWorld #SayCan #embodiedAI

---

## LinkedIn (EN)

Google DeepMind's SayCan collected 276,000 robot demonstrations and kept 12,000. The other 95% were thrown out for one reason: they failed.

AgiBotWorld 2026, released in April by the Chinese robotics startup AGIBOT, did the opposite. Across more than a million manipulation trajectories, it kept the moments where the robot drops an object and grabs it again, tagging each trajectory with two fields, error_cause and restorable, that record why the failure happened and whether the robot could recover.

The payoff shows up in the numbers. Trained on this data, the GO-1 policy model outperformed Open X-Embodiment by 30% and beat RDT by 32% on complex tasks.

Not every failure is worth keeping, and separating signal from noise adds annotation cost. But the situations a robot meets most often in the real world are not clean successes. They are mistakes and recoveries.

The definition of clean data is shifting, from demonstrations curated for success to trajectories labeled through failure and recovery.

▶ Read: https://blog.pebblous.ai/blog/agibot-world-failure-annotation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #RobotFoundationModel #TrainingData #AgiBotWorld #SayCan #EmbodiedAI

---

## Twitter/X (KO)

구글 딥마인드 SayCan은 로봇 시연 27만 개 중 95%를 버렸습니다. AGIBOT의 AgiBotWorld 2026은 실패한 궤적까지 남기고 error_cause·restorable 필드로 라벨링했습니다.

클린 데이터의 정의가 '성공만'에서 '실패와 회복까지'로 바뀌고 있습니다.

https://blog.pebblous.ai/blog/agibot-world-failure-annotation/ko/
#페블러스 #데이터품질 #AgiBotWorld #PhysicalAI

---

## Twitter/X (EN)

Google DeepMind's SayCan discarded 95% of its 276,000 robot demos. AGIBOT's AgiBotWorld 2026 kept the failed trajectories and labeled them with error_cause and restorable fields.

Clean data is being redefined: not just successes, but failures and recoveries.

https://blog.pebblous.ai/blog/agibot-world-failure-annotation/en/
#Pebblous #DataQuality #AgiBotWorld #PhysicalAI

---

## Facebook (KO)

로봇이 물건을 집다가 놓치는 영상을 한 번쯤 보셨을 겁니다.

대부분의 로봇 학습 데이터셋은 바로 그 장면을 지웁니다.

성공한 시연만 남기고, 미끄러지거나 다시 잡은 궤적은 '노이즈'로 분류해 버리죠. 구글 딥마인드의 SayCan은 27만 개를 모아 1만 2천 개만 남겼습니다. 거의 전부를 버린 셈입니다.

그런데 며칠 전, 정반대의 선택을 한 데이터셋이 공개됐습니다.

중국 로봇 스타트업 AGIBOT의 AgiBotWorld 2026은 로봇이 헛손질하는 순간을 버리지 않았습니다. 그 궤적에 '왜 실패했는가'와 '회복할 수 있었는가'를 라벨로 달았습니다. 실패를 지워야 할 흠이 아니라 읽어야 할 기록으로 본 것입니다.

이 선택은 사소해 보이지만, 곱씹을수록 질문 하나가 따라옵니다. 우리가 데이터를 '깨끗하게' 만든다고 할 때, 사실은 가장 가르치기 어려운 능력을 함께 지워 온 것은 아닐까. 실수하고 다시 일어서는 법 말입니다.

"무엇을 버릴지가 아니라, 무엇에 값을 매길지."

데이터 품질의 질문이 조금씩 그쪽으로 옮겨가고 있습니다. 페블러스가 데이터 큐레이션을 그렇게 정의해 온 이유도 여기에 가깝습니다.

로봇에게 일반화를 가르치는 건 완벽한 시연이 아니라, 어쩌면 넘어졌다 일어선 기록일지 모릅니다.

전문: https://blog.pebblous.ai/blog/agibot-world-failure-annotation/ko/

#페블러스 #데이터클리닉 #데이터품질 #AgiBotWorld #PhysicalAI #로봇데이터

---

## Facebook (EN)

You have probably seen a clip of a robot reaching for an object and dropping it.

Most robot-learning datasets erase exactly that moment.

They keep the clean successes and file the slips and re-grips under "noise." Google DeepMind's SayCan gathered 276,000 demonstrations and kept 12,000. Nearly everything else was thrown away.

A few weeks ago, a dataset made the opposite choice.

AgiBotWorld 2026, from the Chinese robotics startup AGIBOT, refused to delete the fumbles. It labeled each one with why the failure happened and whether the robot could recover, treating failure not as a blemish to remove but as a record to read.

That choice kept me thinking. When we say we are making data "clean," have we quietly been deleting the hardest thing to teach: how to make a mistake and find your way back?

"Not what to discard, but what to value." The question of data quality seems to be drifting toward that. It is close to how Pebblous has defined curation all along.

Teaching a robot to generalize may depend less on the perfect demonstration than on the record of falling and getting back up.

Read: https://blog.pebblous.ai/blog/agibot-world-failure-annotation/en/

#Pebblous #DataClinic #DataQuality #AgiBotWorld #PhysicalAI #RobotData
