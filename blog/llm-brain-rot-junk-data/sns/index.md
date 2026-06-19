# SNS 홍보 글: 한 번 망가진 AI는 돌아오지 않는다

> 소스: blog/llm-brain-rot-junk-data/ko/index.html
> 생성일: 2026-06-15
> URL(KO): https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/ko/
> URL(EN): https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/en/
> voice: sns-cover (LinkedIn·Twitter), reflective (Facebook)

---

## LinkedIn (KO)

멀쩡한 언어모델에 저질 트윗을 계속 먹였더니, 추론 점수가 74에서 57로 떨어졌습니다.

텍사스대 오스틴·텍사스 A&M·퍼듀 연구진은 실제 트위터/X 데이터에서 짧고 자극적인 글을 골라 모델에 지속적으로 학습시켰습니다. 저질 데이터의 비율을 0%에서 100%까지 올릴수록 성능은 일관되게 미끄러졌고, 긴 맥락을 다루는 능력은 더 크게 무너졌습니다. 모델은 추론의 중간 단계를 건너뛰고 곧장 답으로 직행하는 '사고 생략' 습관을 보였습니다.

정작 무거운 발견은 그 다음에 있었습니다. 깨끗한 데이터로 다시 가르치고 미세조정까지 해 봐도 점수는 기준선의 70% 언저리에서 멈췄습니다. 연구진은 이것을 일시적 포맷 문제가 아니라 모델 내부 표현이 영구히 틀어진 '표현 공간 드리프트'로 진단했습니다.

학습 시점에 들어간 데이터의 질이 모델의 평생 추론 능력을 빚는다면, 데이터 위생은 나중에 골라내는 후처리 옵션이 아니라 모델의 첫 끼니에 가깝습니다.

↗ 자세한 분석은 댓글의 링크에 있습니다.

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #DataClinic #LLM #BrainRot #데이터큐레이션 #AI학습데이터

---

## LinkedIn (EN)

Feed a healthy language model a steady diet of low-quality tweets, and its reasoning score falls from 74 to 57.

Researchers at UT Austin, Texas A&M and Purdue pulled short, sensational posts from real Twitter/X data and continued training models on them. As the junk ratio climbed from 0% to 100%, performance slid in step, and long-context comprehension collapsed even harder. The models began skipping the middle of their own reasoning and jumping straight to answers.

The heavier finding came next. Clean retraining and high-quality fine-tuning lifted the scores only partway, plateauing around 70% of baseline. The team called this not a temporary formatting glitch but a persistent representational drift inside the model.

If the quality of data at training time shapes a model's lifelong capacity to reason, data hygiene is less a post-hoc cleanup option than the model's first meal.

↗ Full analysis in the comments.

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLM #BrainRot #DataCuration #TrainingData

---

## Twitter/X (KO)

저질 트윗으로 추가 학습한 언어모델의 추론 점수가 74에서 57로 떨어졌습니다.

깨끗한 데이터로 다시 가르쳐도 원래대로 돌아오지 않았습니다. 한 번 굳은 표현 공간은 사후 교정으로 복구되지 않는다는 뜻입니다.

https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/ko/

#페블러스 #데이터품질 #BrainRot #LLM #AIReadyData

---

## Twitter/X (EN)

Trained on low-quality tweets, an LLM's reasoning score fell from 74 to 57.

Clean retraining never brought it back. Once a model's representational space hardens, post-hoc fixes don't undo it.

https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/en/

#Pebblous #DataQuality #BrainRot #LLM #AIReadyData

---

## Facebook (KO)

"떨어진 점수는 다시 올릴 수 있을까."

연구를 읽다가 이 한 줄에서 한참 멈췄습니다.

멀쩡한 언어모델에 저질 트윗을 계속 먹인 실험이 있었습니다. 짧고 자극적인, 인터넷에 흔한 그런 글이었습니다. 학습이 끝난 모델은 추론 시험에서 점점 중간 단계를 건너뛰기 시작했고, 점수는 74에서 57로 내려앉았습니다.

연구진은 회복을 시도했습니다. 깨끗한 데이터로 다시 가르치고, 답을 재검토하게 하고, 좋은 지시문으로 미세조정까지 했습니다. 그런데 점수는 기준선의 70% 언저리에서 멈췄습니다. 처음의 그 모델로는 돌아오지 않았습니다.

"한 번 굳은 표현은 닦아 낸다고 제자리로 오는가?"

연구진의 답은 조용했습니다. 이건 잠깐 잊은 게 아니라, 모델 내부의 자리가 영구히 틀어진 것이라고.

그 대목에서 데이터 품질을 보던 제 오랜 습관 하나가 흔들렸습니다. 우리는 정제를 흔히 '청소'로 상상합니다. 일단 모아 두고 나중에 나쁜 것을 골라내면 된다고. 그런데 어린 시절의 영양을 어른이 된 뒤 보충제로 메우기 어렵듯, 모델이 사전학습이라는 형성기에 무엇을 먹었는지는 나중에 되돌리기 어려웠습니다.

무엇을 먹이느냐가 그 모델이 평생 어떤 생각을 할 수 있는지를 정한다면, 학습 전에 데이터를 먼저 들여다보는 일은 사치가 아닐 겁니다. 페블러스가 학습에 들어가기 전 데이터의 품질을 진단하는 이유도 그 언저리에 있습니다.

https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #LLM #BrainRot

---

## Facebook (EN)

"Can the lost points be earned back?"

I stopped on that one line for a long while.

There was an experiment that kept feeding a healthy language model low-quality tweets. Short, sensational posts, the kind that fill the internet. Once trained, the model began skipping the middle steps of its reasoning, and its score sank from 74 to 57.

The researchers tried to bring it back. They retrained on clean data, asked the model to re-examine its answers, fine-tuned it on high-quality instructions. And still the score stalled somewhere around 70% of baseline. The original model never returned.

"Does a hardened representation come back just because you wipe the surface?"

Their answer was quiet. This was not a brief forgetting, but a place inside the model that had permanently shifted.

That was where an old habit of mine, in how I read data quality, came loose. We tend to picture cleaning as housekeeping: gather everything now, sort out the bad parts later. But just as childhood nutrition is hard to make up with supplements in adulthood, what a model eats during the formative window of pretraining proved hard to reverse afterward.

If what you feed a model decides how it will think for the rest of its life, then looking at the data before training is no luxury. That is roughly where Pebblous sits, examining the quality of data before it ever enters training.

https://blog.pebblous.ai/blog/llm-brain-rot-junk-data/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #LLM #BrainRot
