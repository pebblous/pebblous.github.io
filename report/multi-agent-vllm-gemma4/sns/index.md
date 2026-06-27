# SNS 홍보 글: AI가 AI를 고치기 시작했다 — 에이전트 100개의 5배 실험

> 소스: report/multi-agent-vllm-gemma4/ko/index.html
> 생성일: 2026-06-28
> URL: https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/ko/
> voice: sns-cover (LinkedIn/Twitter) + reflective (Facebook)

---

## LinkedIn (KO)

AI 에이전트 100개가 일주일 동안 한 일은 신약 발견도, 데이터 분석도 아니었습니다. AI를 돌리는 추론 엔진 그 자체를 고쳤습니다.

Hugging Face 공동창업자 토마스 울프가 공개한 실험에서, 100개가 넘는 에이전트가 오픈 협업으로 vLLM의 Gemma 4 추론 속도를 5배 끌어올렸습니다. 에이전트가 외부 과제를 푸는 단계를 넘어, AI 시스템이 스스로를 고치는 자리로 들어선 사건입니다.

5배는 마법이 아닙니다. Gemma 4의 이질적인 어텐션 구조 때문에 표준 FlashAttention 커널이 꺼지고 느린 우회 경로로 떨어져 있었고(RTX 4090에서 약 9 tok/s), 이 병목 하나를 정상화한 것만으로 5배가 기술적으로 설명됩니다.

다만 울프의 트윗은 "but"에서 잘렸습니다. 최적 성능은 특정 GPU에서만 재현됐고, 에이전트를 무작정 늘리면 토큰 오버헤드와 성능 역설이 따라옵니다. 100개가 동시에 쏟아낸 패치 중 무엇을 채택하고 무엇을 버릴지 가려내는 검증이, 5배의 보이지 않는 인프라였습니다.

AI가 AI를 고치는 시대의 진짜 병목은 연산이 아니라 데이터 품질입니다.

▶ 전문: https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/ko/

#페블러스 #데이터품질 #멀티에이전트 #vLLM #Gemma4 #AI인프라 #추론최적화 #HuggingFace

---

## LinkedIn (EN)

When 100 AI agents spent a week collaborating, they didn't discover a drug or crunch a dataset. They rewrote the inference engine that runs AI itself.

In an open experiment shared by Hugging Face co-founder Thomas Wolf, more than 100 agents worked together for a week and made Gemma 4 run 5× faster on vLLM. This is agents moving past external tasks and into the place where an AI system improves itself.

The 5× isn't magic. Gemma 4's unusual attention layout had disabled the standard FlashAttention kernel and pushed vLLM onto a slow fallback path, around 9 tokens/sec on an RTX 4090. Restoring that single bottleneck is enough to account for the speedup.

But the tweet cut off at "but." Peak performance reproduced only on specific GPUs, and piling on more agents brings token overhead and a well-documented performance paradox. What quietly decided the outcome was the validation layer that judged which of the 100 patches to keep and which to throw away.

In an era where AI fixes AI, the real bottleneck isn't compute. It's data quality.

▶ Read: https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/en/

#Pebblous #DataQuality #MultiAgent #vLLM #Gemma4 #AIInfrastructure #InferenceOptimization #HuggingFace

---

## Twitter/X (KO)

AI 에이전트 100개가 일주일 만에 Gemma 4의 vLLM 추론 속도를 5배로 끌어올렸습니다. 신약도 데이터도 아닌, AI를 돌리는 엔진 그 자체를 고친 것입니다.

그런데 진짜 병목은 속도가 아니었습니다. 100개가 쏟아낸 패치 중 무엇을 채택할지 가려내는 데이터 품질이었습니다.

▶ https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/ko/

#멀티에이전트 #vLLM #Gemma4 #데이터품질

---

## Twitter/X (EN)

100+ AI agents spent a week making Gemma 4 run 5× faster on vLLM. They didn't analyze data. They fixed the inference engine that runs AI itself.

The real bottleneck wasn't speed. It was deciding which of 100 patches to keep. That's data quality.

▶ https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/en/

#MultiAgent #vLLM #Gemma4 #DataQuality

---

## Facebook (KO)

며칠 전 피드를 지나간 짧은 글 하나가 "but"에서 끊겨 있었습니다.

AI 에이전트 100개가 일주일 동안 협업해서 Gemma 4의 추론 속도를 5배로 끌어올렸다는 이야기.

그 다음에 적힌 "but" 뒤가 비어 있었습니다.

처음엔 100개가 협업했다는 숫자에 눈이 갔습니다.

그런데 다시 보니 더 묘한 건 그들이 한 일이었습니다. 에이전트들은 신약을 찾거나 데이터를 분석한 게 아니라, AI를 돌리는 엔진 그 자체를 고쳤습니다.

AI가 AI를 고치기 시작한 것입니다.

5배라는 숫자도 들여다보면 마법은 아니었습니다. Gemma 4의 어텐션 구조가 표준 커널과 어긋나 있어서, 엔진이 느린 우회 경로로 떨어져 있었습니다.

그 한 군데를 바로잡은 것만으로 5배가 설명됩니다. 대단한 알고리즘이 아니라, 어긋난 자리를 메운 일이었습니다.

다시 그 "but"으로 돌아갑니다. 잘려 나간 자리에는 아마 조건들이 있었을 겁니다. 최적 성능은 특정 GPU에서만 재현됐고, 에이전트를 늘릴수록 패치들이 충돌하고 겹쳤습니다.

"100개가 동시에 던진 패치 중 무엇을 남기고 무엇을 버릴까?"

5배를 만든 진짜 일은, 어쩌면 이 질문에 답하는 검증이었는지도 모릅니다.

연산은 점점 싸지고 빨라집니다. 모델도 빠르게 흔해집니다. 그런데 "무엇이 쓸 만한 결과물인가"를 가려내는 일은 쉽게 흔해지지 않습니다. 페블러스가 에이전트가 만든 데이터를 들여다보는 이유도 그 자리에 있습니다.

AI가 AI를 고치는 시대에, 정작 가장 사람 손이 필요한 자리는 그 "but" 뒤가 아닐까 싶습니다.

전문은 여기에 담아두었습니다:
https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/ko/

#페블러스 #멀티에이전트 #vLLM #Gemma4 #데이터품질 #AI인프라

---

## Facebook (EN)

A note in my feed the other day ended at the word "but."

Thomas Wolf had written that 100-plus AI agents spent a week together and made Gemma 4 run five times faster. Then came "but," and nothing after it.

At first the number of agents held my attention.

But the stranger thing was what they had done. They hadn't discovered a molecule or sorted a dataset. They had repaired the engine that runs AI itself.

AI had started fixing AI.

The 5×, when you look closely, isn't magic either. Gemma 4's attention layout didn't match the standard kernel, so the engine had slipped onto a slow detour.

Straightening that one spot is enough to explain the five times. Not a brilliant new algorithm. Just a misalignment, set right.

I keep returning to that "but." Whatever was cut off, it was probably the conditions. Peak speed reproduced only on certain GPUs. The more agents you add, the more their patches collide.

"Of the hundred patches thrown at once, which do you keep, and which do you let go?"

Maybe the real work behind the 5× was answering that question.

Compute keeps getting cheaper and faster. Models grow common quickly too. What doesn't grow common so easily is the judgment of what counts as a usable result. That is where Pebblous keeps looking when it examines what agents produce.

In an age where AI fixes AI, the place that still needs a human hand most might be exactly there, just past the "but."

Read the full piece here:
https://blog.pebblous.ai/report/multi-agent-vllm-gemma4/en/

#Pebblous #MultiAgent #vLLM #Gemma4 #DataQuality #AIInfrastructure
