# SNS 홍보 글: Termination Lag, 코딩 AI는 답을 찾고도 멈추지 않는다

> 소스: blog/termination-lag-coding-agents-stop-late/
> 생성일: 2026-11-15
> URL: https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/
> voice: LinkedIn·Twitter/X = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

코딩 에이전트가 한 번이라도 정답을 낸 실행 가운데 38~82%는, 소스 코드를 처음 고친 그 패치가 이미 정답이었다.

펜실베이니아 주립대 연구진 셋이 11월 11일 이 측정을 공개했다. 에이전트와 모델 사이에 기록용 프록시를 세워 실행 도중 만들어진 저장소 패치를 전부 받아 두었다가, 실행이 끝난 뒤 벤치마크 공식 절차로 하나씩 따로 채점했다. 채점 결과는 에이전트에게 돌아가지 않는다. 실행 중의 판단을 하나도 건드리지 않은 채 정답이 몇 번째 단계에서 처음 나왔는지만 나중에 알아내는 설계다. 그렇게 드러난 두 단계 사이의 거리가 논문이 말하는 종료 지연, Termination Lag이다.

핵심이 되는 네 설정에서, 정답 이후에 쓰인 단계가 실행 전체의 35~60%를 차지했다.

그 단계의 7할 이상은 이미 통과한 테스트를 다시 돌리고 저장소를 또 뒤지는 데 들어갔다. 소스 코드를 다시 고치는 단계는 대부분의 설정에서 2~6%였다. 정답에 닿았던 실행의 1~8%는 거기서 더 돌다가 맞는 수정을 스스로 깨뜨린 채 끝났다.

논문이 센 단위는 단계 수이지 토큰이나 금액이 아니다. 모델마다 허락된 단계 상한도 100에서 250까지 달라서 단계 수를 모델끼리 바로 견주기는 어렵다. 과제마다 한 번씩만 돌린 측정이다.

수치가 분명히 가리키는 것은 이 거리를 어디서 재야 하는가다. 어느 단계에서 답이 됐는지는 실행 로그에 적히지 않는다. 중간 상태를 뒤에서 따로 채점해야 비로소 나오는 숫자다.

페블러스는 DataClinic으로 AI 학습 데이터의 결함을 종류마다 따로 센다. 한 칸에 더해 둔 실패는 어느 쪽을 손봐야 하는지 가리키지 못한다.

▶ 전문: https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #코딩에이전트 #TerminationLag #SWEbench #OpenHands #Qwen3Coder

---

## LinkedIn (EN)

In runs where a coding agent reached a correct patch at all, the very first edit it made to the source code was already the correct one between 38% and 82% of the time.

Three researchers at Penn State released the measurement on November 11. They placed a logging proxy between the agent and the model endpoint, captured every repository patch the agent produced along the way, and scored each one afterward under the benchmark's official procedure. No scores were fed back to the agent, so the step where a correct answer first existed could be recovered without disturbing a single decision inside the run. The distance between that step and the last one is what the paper calls termination lag.

In the four core settings, a median of 35% to 60% of all steps fell after that point.

More than 70% of those steps went into rerunning tests that had already passed and searching the repository again, while edits to the source code accounted for 2% to 6% in most settings. Of the runs that reached a correct patch, 1% to 8% carried on from there, broke the fix they already had, and submitted an incorrect one.

What the study counts is agent steps. Not tokens, and not what they cost. Step budgets also differed by model, 100 for some and 250 for others, so step counts do not compare directly across models. Each task was run once.

What the figures do settle is where this distance has to be measured. A run log does not record which step turned into the answer. The number only appears once the intermediate states are scored after the fact, the way this study did it.

Pebblous sorts defects in AI training data by kind with DataClinic. Failures added together into one column cannot say which half needs the work.

▶ Read: https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #CodingAgents #TerminationLag #SWEbench #OpenHands

---

## Twitter/X (KO)

코딩 에이전트가 한 번이라도 정답을 낸 실행의 38~82%는, 소스 코드를 처음 고친 그 패치가 이미 정답이었다.

실행은 거기서 끝나지 않는다. 네 설정에서 정답 이후에 쓰인 단계가 실행 전체의 35~60%였다.

멈출 시점을 아는 일은 답을 찾는 일과 따로 있는 능력이다.

https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/ko/

#페블러스 #데이터품질 #코딩에이전트 #TerminationLag #SWEbench

---

## Twitter/X (EN)

Among runs that reached a correct patch at all, the agent's first source edit was already the right one 38-82% of the time.

The run did not stop there. In the four core settings, between 35% and 60% of all steps came after the answer existed.

Knowing when to stop is a separate ability from finding the answer.

https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/en/

#Pebblous #DataQuality #CodingAgents #TerminationLag #SWEbench

---

## Facebook (KO)

에이전트에게 일을 맡겨 두고 다른 창으로 넘어갔다가, 한참 뒤에 돌아와 보면 아직 돌고 있습니다.

테스트는 벌써 통과해 있고, 화면에는 같은 파일을 또 한 번 열어 보는 줄이 올라갑니다.

펜실베이니아 주립대 연구진 셋이 11일 공개한 측정은 그 구간의 안쪽을 봅니다. 에이전트가 실행 도중 만들어 낸 저장소 패치를 전부 따로 받아 두었다가, 실행이 다 끝난 뒤에 벤치마크의 공식 채점을 하나씩 돌렸습니다.

답은 생각보다 훨씬 일찍 나와 있었습니다.

답이 나온 자리와 실행이 끝난 자리 사이의 거리가 논문의 제목이 됐습니다. '종료 지연'.

정답에 한 번이라도 닿은 실행의 38~82%에서, 에이전트가 소스 코드를 처음 고친 그 패치가 이미 정답이었습니다.

그 뒤로도 실행은 한참 이어집니다. 핵심이 되는 네 설정에서, 정답 이후에 쓰인 단계가 실행의 3분의 1에서 절반 넘게를 차지했습니다.

그 시간의 절반 안팎은 확인에 들어갔습니다. 이미 통과한 테스트를 다시 돌리고, 자기가 바꾼 자리를 다시 열어 보는 일입니다.

증거는 이미 다 손에 있었습니다. 도구의 출력도, 테스트의 결과도, 자기가 만든 차이도.

그것을 한 번 더 읽어도 결론은 서지 않았습니다.

"같은 것을 다시 확인하는 일은, 몇 번째부터 새 정보가 아닙니까?"

정답에 닿았던 실행의 1~8%는 그렇게 더 돌다가 맞는 수정을 스스로 깨뜨린 채 끝났습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 못 푼 것과 풀었다가 놓친 것이 같은 칸에 더해져 있으면, 어느 쪽을 손봐야 하는지 숫자가 말해 주지 않습니다.

멈추는 일도 하나의 판단입니다. 그 판단이 맞았는지는 이번에도 실행이 다 끝난 뒤에야 채점할 수 있었습니다.

▶ 전문: https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/ko/

#페블러스 #데이터클리닉 #데이터품질 #코딩에이전트 #종료지연 #SWEbench #AI에이전트

---

## Facebook (EN)

You hand a job to an agent, move to another window, and come back later to find it still running.

The tests have already passed. On screen, it is opening the same file one more time.

A measurement published on November 11 out of Penn State looks inside that stretch. Every repository patch an agent produced during a run was captured and set aside, and once the run was over each one was scored under the benchmark's official procedure.

The answer had arrived much earlier than the run suggested.

The distance between that point and the end of the run is the paper's title. Termination lag.

In 38% to 82% of the runs that reached a correct patch at all, the first edit the agent made to the source code was already the correct one.

The run carried on regardless. In the four core settings, somewhere between a third and more than half of all steps came after the answer was already in hand.

About half of that time went into verification. Running a test that had already passed. Opening the diff it had written and reading it once more.

The evidence was all there. The tool output, the test results, the diff.

Reading it again settled nothing.

"After how many passes does checking the same thing again stop producing new information?"

Of the runs that reached a correct patch, 1% to 8% went on from there and broke the fix they already had.

Telling one kind of defect in AI training data from another is the work DataClinic does at Pebblous. A run that never found the answer and a run that found it and lost it land in the same column, and a column cannot say which half to work on.

Stopping is a judgment too. Whether this one was right could only be scored once the run was over.

▶ https://blog.pebblous.ai/blog/termination-lag-coding-agents-stop-late/en/

#Pebblous #DataClinic #DataQuality #CodingAgents #TerminationLag #SWEbench #AIAgent
