# SNS 홍보 글: AI는 실수를 찾아내고도 제대로 고치지 못한다

> 소스: blog/pararecover-agent-error-benchmark/ko/index.html
> 생성일: 2026-09-15
> URL: https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

여섯 라운드면 됐을 과제를 열여덟 라운드에 끝낸 에이전트가, 평가표에는 그냥 '성공'으로 찍혔다.

중국 대련이공대 연구진이 지난 11일 arXiv에 공개한 벤치마크 ParaRecover가 정확히 그 틈을 겨냥한다. 에이전트가 도구를 병렬로 부르다 내는 오류를 열네 갈래로 나누고, 그런 사례 1만 626건을 모았다. 과제를 끝냈는지가 아니라 오류를 짚어 내고 계획을 고쳐 쓰는 과정에 점수를 매긴다. EMNLP 2026 본회의에 채택됐다.

모델 열여섯 종을 같은 기준으로 돌렸다. 평균이 가장 높았던 것은 Claude Opus 4.6이다. 과제 완수율 94.78%를 기록하면서, 계획을 고쳐 쓰는 정밀도에서는 55.18점을 받았다. 오류가 어디서 났는지 짚어 내는 점수는 78.94점이다. 찾아내기는 하는데 고치지를 못한다. 순위표에 오른 열일곱 줄 전부가 같은 모양이었다.

가장 못 잡는 오류는 불필요한 중복 호출이었다. 필요 없는 호출인데도 실행은 정상으로 끝나고 값도 멀쩡히 돌아오니, 오류 로그에 아무것도 남지 않는다. 논문은 이를 그럴듯하지만 소용없는 암묵적 오류라 부른다. 다만 이 벤치마크는 실제 API가 아니라 통제된 시뮬레이션 위에서 돌았고, 채점의 상당 부분은 다른 언어 모델이 맡았다.

정작 눈길이 가는 대목은 순위표가 아니라 마지막 실험이다. 유형 라벨을 붙인 데이터로 8B 모델 하나를 다시 학습시키자 실행 불가능한 계획을 내놓는 비율이 10.25%에서 5.90%로 내려갔다. 차이를 만든 것은 더 큰 모델도 더 긴 프롬프트도 아니고, 실패마다 어떤 종류인지 적어 둔 줄들이었다.

▶ 전문: https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #LLM벤치마크 #도구호출 #ParaRecover #EMNLP2026 #ClaudeOpus

---

## LinkedIn (EN)

An agent took eighteen rounds to finish a task that needed six. The scoreboard logged it as a success.

ParaRecover, a benchmark posted to arXiv on 11 September by a team at Dalian University of Technology, was built for exactly that blind spot. It sorts the errors agents make during parallel tool calls into fourteen types and gathers 10,626 labeled cases. The scoring then covers what happens between the failure and the fix, not whether the task ended. EMNLP 2026 accepted it to the main conference.

Sixteen models ran the same prompts. Claude Opus 4.6, the highest average of the group, completed 94.78% of its tasks and scored 55.18 on the precision of its rewritten plans. On locating the error it scored 78.94. It finds the mistake and then cannot repair it, and all seventeen rows in the table share that shape.

The hardest error to catch was the redundant call. The call succeeds, the value comes back intact, and nothing reaches the error log. The paper calls these "plausible yet ineffective" implicit errors. Two caveats belong with the numbers: the benchmark runs in a simulated tool environment rather than against live APIs, and a language model does most of the marking.

The result worth reading is not the leaderboard but the last experiment. Retraining a single 8B model on the labeled failures cut unexecutable plans from 10.25% to 5.90%. What produced the gain was not a bigger model or a longer prompt. It was the lines that said what kind of failure each one was.

▶ Read: https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #LLMBenchmark #ToolCalling #ParaRecover #EMNLP2026 #ClaudeOpus

---

## Twitter/X (KO)

여섯 라운드면 됐을 과제를 열여덟 라운드에 끝낸 에이전트가, 평가표에는 '성공'으로 찍힌다.

벤치마크 ParaRecover는 완수 여부 대신 과정을 잰다. 1위 모델도 오류가 어디서 났는지는 짚어 내면서, 계획을 고쳐 쓰는 점수는 55.18점에 그쳤다.

▶ https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/ko/

#페블러스 #AI에이전트 #ParaRecover #데이터품질

---

## Twitter/X (EN)

An agent that needed six rounds took eighteen, and the scoreboard still logged it as a success.

ParaRecover scores the process, not the outcome. The top model locates its errors well and then scores 55.18 on rewriting the plan.

▶ https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/en/

#Pebblous #AIAgent #ParaRecover #DataQuality

---

## Facebook (KO)

인자 하나의 타입이 틀렸습니다. 그 호출은 빈 값을 내놨습니다.

에이전트는 그 호출을 고쳐 다시 부르는 대신, 원인을 앞선 과제로 돌렸습니다. 노드를 새로 만들고 작업 전체를 처음부터 돌렸습니다.

여섯 라운드면 됐을 일을 열여덟 라운드에 끝냈습니다.

그리고 이 실행은 평가표에 '성공'으로 적혔습니다.

중국 대련이공대 연구진이 만든 ParaRecover라는 벤치마크의 부록에 실린 장면입니다. 에이전트가 도구를 병렬로 부르다 내는 오류를 열네 갈래로 나누고, 그런 사례 1만 626건을 모았습니다. 채점하는 자리를 결과에서 과정으로 옮긴 것입니다. 점수가 가장 높았던 모델조차 오류가 어디서 났는지는 그럭저럭 짚어 내면서, 그 계획을 고쳐 쓰는 데서는 절반을 겨우 넘겼습니다.

제가 다시 읽게 된 건 순위표가 아니라 오류 목록의 한 줄이었습니다.

"불필요한 중복 호출."

이 실수는 예외도 오류 코드도 남기지 않습니다. 호출은 성공하고 값도 멀쩡히 돌아옵니다. 논문은 이것을 그럴듯하지만 소용없는 암묵적 오류라 부릅니다.

"성공으로 분류된 작업 중에 이런 경로로 돌아간 것이 얼마나 될까? 우리는 그걸 따로 세어 본 적이 있나?"

논문의 마지막 실험이 방향을 조금 보여 줍니다. 유형 라벨을 붙인 데이터로 8B 모델 하나를 다시 학습시켰더니, 실행 불가능한 계획을 내놓는 비율이 절반 가까이 줄었습니다. 더 큰 모델도 아니고 더 긴 프롬프트도 아니었습니다. 실패 하나하나에 어떤 종류인지 적어 둔 줄들이었습니다. 페블러스가 데이터를 들여다볼 때 묻는 것도 같은 자리에 있습니다. 이 데이터가 어디서 와서 무엇을 거쳐 지금 모양이 됐는가.

에이전트의 실패 기록도 결국 데이터입니다. "실패" 한 칸으로만 남으면 세어 볼 수는 있어도 고칠 수는 없습니다. 여러분의 로그에서 실패는 몇 칸으로 나뉘어 있는지 궁금합니다.

(수치는 실제 API가 아니라 통제된 시뮬레이션 환경에서 나온 값이고, 채점의 상당 부분을 다른 언어 모델이 맡았습니다.)

▶ 전문: https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #ParaRecover #AI에이전트

---

## Facebook (EN)

A wrong parameter type. The call came back empty.

Instead of fixing that one call and trying again, the agent decided the trouble had started in an earlier task. It added a new node and restarted the whole job.

A task that needed six rounds took eighteen.

The run was written down as a success.

That scene sits in the appendix of ParaRecover, a benchmark from a team at Dalian University of Technology. They sorted the errors agents make while calling tools in parallel into fourteen kinds and gathered 10,626 of them. The grading moved from the outcome to the road taken. Even the strongest model in the table locates its errors reasonably well and then barely clears half marks on rewriting the plan.

What I kept going back to was not the ranking but one line in the error list.

"Redundant call."

It throws no exception and leaves no error code. The call succeeds, the value comes back intact. The paper calls these "plausible yet ineffective" implicit errors.

"How many of the jobs we file under 'succeeded' got there this way? Has anyone counted them separately?"

The paper's last experiment points somewhere. Retraining one 8B model on the labeled failures cut the share of unexecutable plans nearly in half. Not a bigger model. Not a longer prompt. Just lines saying what kind of failure each one was. That is close to the question Pebblous keeps asking of any dataset: where did this data come from, and what did it pass through to become what it is now.

An agent's failure log is data too. If it survives as a single cell reading "failed", you can count it and you cannot fix it. I would be curious how many boxes your own logs use.

(The figures come from a simulated tool environment rather than live APIs, and a language model did most of the marking.)

▶ Full piece: https://blog.pebblous.ai/blog/pararecover-agent-error-benchmark/en/

#Pebblous #DataClinic #DataQuality #ParaRecover #AIAgent
