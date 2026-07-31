# SNS 홍보 글: 로봇에게 무엇을 먹일 것인가 — 로봇 학습을 떠받치는 데이터 피라미드

> 소스: report/robot-learning-data-pyramid/ko/index.html
> 생성일: 2026-08-01
> URL: https://blog.pebblous.ai/report/robot-learning-data-pyramid/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

로봇 데모를 200건에서 500건으로 늘려도 성공률은 8%p 남짓 오른다. 같은 규모에 사람 영상을 섞자 52%p가 뛰었다.

11개 기관이 함께 정리한 서베이는 로봇 학습 데이터를 다섯 층으로 세운다. 정합성이 가장 높은 실로봇부터 확장성이 가장 큰 범용 웹까지, 그 사이를 핸드헬드 그리퍼(UMI)와 인간 영상, 시뮬레이션이 잇는다. 로봇은 관측과 상태와 행동이 한 묶음으로 짝지어진 데이터를 요구하는데, 이 짝지음은 웹 어디에도 없어 특정 로봇에서 직접 모아야 하기 때문이다.

그래서 진짜 병목은 정책 알고리즘이 아니라 "무엇을 먹였는가", 곧 데이터의 구성비다. 알고리즘을 그대로 두고 층의 혼합만 바꿔도 성공률이 52%p 움직인다.

다만 빨리 많이 모은 데이터가 곧 알짜는 아니다. 수집 속도와 학습 효율은 다른 축이고, 소스가 아무리 좋아도 정렬 기법 없이는 다른 로봇 데이터의 제로샷 성공률이 0%에 머문다. 같은 로봇의 사과 집기 태스크는 정렬을 더하자 0%에서 94%로 갈렸다.

이제 로봇 경쟁의 승부처는 더 좋은 모델이 아니라 어느 층을 어떤 비율로, 어떤 정렬로 쌓을 것인가다. 데이터 품질을 진단해 온 페블러스가 DataClinic으로 다루는 문제가 정확히 이 지점이다.

▶ 전문: https://blog.pebblous.ai/report/robot-learning-data-pyramid/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #로봇학습 #AIReadyData #PebbloSim #VLA #GR00T #UMI

---

## LinkedIn (EN)

Adding more robot demonstrations barely moves the needle. Going from 200 to 500 raised task success by about 8 points; mixing in human video at the same scale raised it by 52.

A survey from 11 institutions arranges robot learning data into five layers. Real-robot teleoperation sits at the top, where fidelity to your machine is highest, and general web and vision-language data sit at the bottom, where scale is effectively infinite but physical grounding is near zero. Handheld grippers, egocentric human video, and simulation bridge the middle. Robots need observation, state, and action paired in one loop, and that pairing exists nowhere on the web.

The bottleneck, then, is not the policy algorithm. It is the data recipe: which layers you mix, and in what proportion. Hold the algorithm fixed, change the mix, and success swings by 52 points.

Speed is not the same as value. Collecting faster does not mean each sample teaches more, and without alignment, cross-robot data can start at 0% zero-shot before reaching 94% once contact-aware alignment is added.

The next contest in robotics is not a better model. It is which layers to stack, in what ratio, with what alignment. Diagnosing that data composition is the problem Pebblous works on through DataClinic.

▶ Read: https://blog.pebblous.ai/report/robot-learning-data-pyramid/en/

#Pebblous #DataClinic #DataQuality #PhysicalAI #RobotLearning #AIReadyData #VLA #SimToReal #OpenXEmbodiment #GR00T

---

## Twitter/X (KO)

로봇 데모를 아무리 늘려도 성공률은 8%p 남짓. 그런데 같은 규모에 사람 영상을 한 스푼 섞자 52%p가 뛰었다.

로봇 지능의 병목은 정책 알고리즘이 아니라 "무엇을 먹였는가", 곧 데이터의 구성비였다.

▶ https://blog.pebblous.ai/report/robot-learning-data-pyramid/ko/

#페블러스 #데이터클리닉 #PhysicalAI #로봇학습

---

## Twitter/X (EN)

More robot demos barely help. Success rose about 8 points. Mix in human video at the same scale and it jumps 52.

The bottleneck in robot learning isn't the algorithm. It's the data recipe: what you feed it.

▶ https://blog.pebblous.ai/report/robot-learning-data-pyramid/en/

#Pebblous #DataClinic #PhysicalAI #RobotLearning

---

## Facebook (KO)

"로봇에게 무엇을 먹일 것인가."

이 문장을 며칠째 곱씹고 있습니다.

우리는 GPT가 인터넷을 통째로 삼키며 똑똑해지는 걸 봤습니다. 그래서 로봇도 데이터를 많이 모으기만 하면 되리라 여기기 쉽습니다.

그런데 로봇은 그렇게 배우지 못합니다.

로봇이 배우려는 건 "이 장면에서 무엇을 보고, 몸이 어떤 상태이며, 그래서 어떤 힘을 어떻게 주었는가"라는 한 묶음입니다.

관측과 상태와 행동이 짝지어진 이 기록은 유튜브 어디에도 굴러다니지 않습니다. 사람이 냄비를 어떤 각도로 얼마의 힘으로 쥐었는지, 영상은 말해 주지 않으니까요.

11개 기관이 함께 정리한 한 서베이는 이런 데이터를 다섯 층으로 세웁니다. 내 로봇과 꼭 맞는 실로봇 데이터가 맨 위에, 무엇이든 무한히 담은 웹 데이터가 맨 아래에 있고, 그 사이를 손에 쥔 그리퍼와 머리에 단 카메라, 시뮬레이터가 잇습니다.

흥미로운 건 여기서부터입니다. 데모를 200건에서 500건으로 늘려도 성공률은 조금밖에 오르지 않는데, 같은 규모에 사람의 영상을 한 스푼 섞자 성공률이 52%p씩 뛰었습니다.

더 많이 모으는 일보다, 무엇을 섞느냐가 로봇의 상한을 정한다는 이야기입니다.

그래서 저에게는 이 질문이 남습니다.

"내 로봇 데이터는 이 다섯 층 중 어디에 몰려 있고, 어느 층이 비어 있을까?"

약한 능력을 되짚으면 비어 있는 층이 보이고, 그 층을 겨냥해 무엇을 더 먹일지가 다음 걸음이 됩니다. 데이터의 품질과 구성을 오래 다뤄 온 페블러스가 DataClinic으로 함께 묻고 있는 질문이기도 합니다.

로봇에게 무엇을 먹일 것인가. 결국 데이터를 진단하는 일이었습니다.

https://blog.pebblous.ai/report/robot-learning-data-pyramid/ko/

#페블러스 #PhysicalAI #로봇학습 #DataClinic #PebbloSim #AIReadyData

---

## Facebook (EN)

"What do you feed a robot?"

I keep turning that question over.

We watched GPT grow clever by swallowing the whole internet, and it is tempting to assume a robot could do the same. Just gather more data.

But a robot doesn't learn that way.

What it needs to learn is a single bound moment: what it sees, what state its body is in, and what force it applies as a result.

That pairing of observation, state, and action lives nowhere on the web. A cooking video never records the angle or the grip force of the hand holding the pan.

A survey from eleven institutions stacks this kind of data into five layers. Real-robot recordings, perfectly matched to your machine, sit at the top. The endless, ungrounded web sits at the bottom. Between them are handheld grippers, head-mounted cameras, and simulation.

Here is the part that stayed with me. Adding more demonstrations, from 200 to 500, barely moved success. But mixing in a spoonful of human video, at the same scale, lifted it by 52 points.

What you mix, not how much you gather, sets the ceiling.

So the question that remains is a quieter one.

"Where does my robot data pile up across these five layers, and which layer is empty?"

Trace a weak skill back and you find the missing layer, and what to feed next comes into focus. That is the question Pebblous keeps asking through DataClinic, having spent a long time working closely with the quality and composition of data.

What do you feed a robot? In the end, it was a question about diagnosing data.

https://blog.pebblous.ai/report/robot-learning-data-pyramid/en/

#Pebblous #PhysicalAI #RobotLearning #DataClinic #PebbloSim #AIReadyData
