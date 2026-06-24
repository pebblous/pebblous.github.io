# SNS 홍보 글: 공개된 논문 코드, AI 에이전트가 돌리니 절반은 실패했다

> 소스: blog/paper-code-reproducibility/ko/index.html
> 생성일: 2026-06-24
> URL: https://blog.pebblous.ai/blog/paper-code-reproducibility/ko/
> voice: sns-cover (LinkedIn/Twitter) + reflective (Facebook)

---

## LinkedIn (KO)

논문 맨 아래 "코드는 깃허브에 있습니다"라는 한 줄은, 그 코드가 돌아간다는 보장이 아니었다.

2024년부터 2026년 사이에 나온 네 개의 벤치마크가 AI 에이전트에게 빈 컴퓨터에서 논문 코드를 처음부터 재현하게 시켰다. 가장 성적이 좋은 영역에서도 최고 에이전트의 재현 성공률은 54.1%였고, 처음부터 논문을 복제하는 과제에서는 24.4%까지 떨어졌다. 같은 과제를 48시간 붙잡은 ML 박사조차 41.4%에 그쳤으니, 절반을 넘기는 일 자체가 원래 어렵다.

막힌 곳은 코드 실력이 아니었다. 실행환경이 어디서 도는지 안 적혀 있고, 선언된 의존성과 실제 필요한 의존성이 13.5배 벌어지고, 데이터 전처리의 빈칸을 에이전트가 추측으로 메우는 지점에서 무너졌다.

그래서 '공개'와 '돌릴 수 있게'는 같은 말이 아니다. 코드가 올라와 있다는 사실과 누구나 받아 돌릴 수 있다는 사실 사이에는, 이번 벤치마크가 측정한 만큼의 거리가 있다. 데이터에서 'AI-Ready'라 부르던 문제가 코드 쪽에서 똑같이 반복된 것이다.

▶ 전문: https://blog.pebblous.ai/blog/paper-code-reproducibility/ko/

#페블러스 #AIReadyData #재현성 #AI에이전트 #데이터품질 #논문코드 #DataClinic #MLOps

---

## LinkedIn (EN)

A paper says "code is available on GitHub." That line is not a promise that the code runs.

Between 2024 and 2026, four benchmarks handed AI agents released paper code and asked them to reproduce the results from scratch, on a blank machine. In the most favorable domain, the best agent reproduced 54.1% of the findings; on full from-scratch replication, that dropped to 24.4%. ML PhDs given 48 hours on the same task reached only 41.4%, so clearing half was never easy to begin with.

The wall was not coding skill. Agents broke where the runtime was never written down, where declared dependencies diverged from the ones actually needed by 13.5×, and where missing data-preprocessing steps had to be guessed.

"Released" and "runnable" are not the same word. The distance between code existing on GitHub and code anyone can actually run is exactly what these benchmarks measured — the same "AI-Ready" gap we have long described for data, now showing up in code.

▶ Read: https://blog.pebblous.ai/blog/paper-code-reproducibility/en/

#Pebblous #AIReadyData #Reproducibility #AIagents #DataQuality #MLOps #DataClinic

---

## Twitter/X (KO)

AI 에이전트에게 논문 코드를 빈 컴퓨터에서 처음부터 돌리게 했더니, 최고 모델도 54.1%에서 멈췄다.

코드를 못 짜서가 아니다. 실행환경·의존성·데이터가 안 맞아서다. '공개'와 '돌릴 수 있게'는 다른 말이었다.

https://blog.pebblous.ai/blog/paper-code-reproducibility/ko/
#페블러스 #재현성 #AI에이전트 #AIReadyData

---

## Twitter/X (EN)

AI agents were told to reproduce paper code from scratch on a blank machine. The best model stopped at 54.1%.

Not a coding problem. The runtime, the dependencies, and the data didn't line up. "Released" isn't "runnable."

https://blog.pebblous.ai/blog/paper-code-reproducibility/en/
#Pebblous #Reproducibility #AIReadyData #AIagents

---

## Facebook (KO)

논문 한 편을 읽다가 맨 아래에서 "코드는 깃허브에 있습니다"라는 한 줄을 보면, 저는 일단 안심합니다.

이건 다시 돌려볼 수 있겠구나, 하고요.

그런데 그 코드를 빈 컴퓨터에 받아 정말 처음부터 돌려보면, 그 안심은 자주 배신당합니다.

지난 2년 사이 여러 연구팀이 AI 에이전트에게 바로 이 일을 시켰습니다. 논문과 코드를 주고, 아무것도 깔리지 않은 환경에서 결과를 재현해 보라고요. 가장 똑똑한 모델조차 절반 언저리에서 멈췄고, 같은 과제를 이틀 동안 붙잡은 사람 연구자도 사정이 크게 다르지 않았습니다.

흥미로운 건 막힌 자리였습니다. 코드를 못 짜서가 아니라, 코드가 어디서 도는지가 안 적혀 있고, 적어 둔 의존성과 실제로 필요한 의존성이 어긋나 있고, 데이터를 어떻게 다듬었는지가 비어 있어서였습니다. 저는 이걸 "공개됐지만 돌릴 수 없는 코드"라고 부르고 싶어졌습니다.

그러고 보면 '있다'와 '쓸 수 있다'는 늘 다른 말이었습니다. 데이터에서 오래 해 온 이야기가, 이번엔 코드에서 똑같이 들려왔을 뿐입니다.

깃허브에 올라와 있다는 것과, 누군가 받아서 바로 돌릴 수 있다는 것. 그 사이의 거리를 우리는 얼마나 자주 0이라고 착각하며 지나칠까요.

#페블러스 #AIReadyData #재현성 #DataClinic

---

## Facebook (EN)

At the bottom of a paper, there's usually a line: "Code available on GitHub."

I tend to relax when I see it. Good, I think. This one I can re-run.

But download that code onto a blank machine and try to run it from scratch, and the relief rarely survives.

Over the past two years, several teams handed exactly this task to AI agents. Here is the paper, here is the code, now reproduce the results on a machine with nothing installed. Even the strongest models stalled somewhere around half, and human researchers given two full days didn't fare much better.

What caught me was where things broke. Not the writing of code, but the parts around it: the runtime nobody wrote down, the declared dependencies that didn't match the real ones, the data-cleaning steps left blank. I've started thinking of this as code that is published but not runnable.

"Available" and "usable" were never the same word. It's the thing we've long said about data, returning now in the shape of code.

How often do we look at a GitHub link and quietly assume that distance is zero?

#Pebblous #AIReadyData #Reproducibility #DataClinic
