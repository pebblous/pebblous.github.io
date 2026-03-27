# SNS 홍보 글: WiFi DensePose — 카메라 없이 벽 너머 사람을 본다

> 소스: project/WiFiDensePose/wifi-densepose-ruview/ko/index.html
> 생성일: 2026-03-27
> KO URL: https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/ko/
> EN URL: https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/en/

---

## 한국어 LinkedIn

🌱 카메라 없이 벽 너머 사람을 봅니다.

피지컬 AI 시대, 역설 하나가 있습니다.

인체의 움직임을 감지하려면 카메라가 필요한데,
카메라를 설치할 수 없는 곳이 훨씬 더 많다는 것이죠.

CMU 연구팀이 2023년 답을 내놨습니다.
WiFi 신호가 사람 몸에 부딪혀 변하는 패턴(CSI)을 분석하면,
카메라 없이도 17개 관절 위치를 실시간 추정할 수 있다는 것입니다.

이 논문을 Rust로 재구현한 오픈소스 RuView는
Python 대비 810배 빠른 처리 속도를 증명했습니다.

🔸 $0 하드웨어 — 기존 WiFi 공유기로 즉시 시작
🔸 벽 투과, 완전 암흑, 프라이버시 보호
🔸 호흡수·심박수까지 비접촉 감지

그런데 새로운 문제가 생겼습니다.
WiFi CSI 학습 데이터를 어떻게 확보할 것인가?

환경이 바뀔 때마다 CSI 패턴도 바뀝니다.
가구 하나 움직여도 모델을 재학습해야 합니다.

마치 새 밭에 작물을 심을 때마다
토양 분석부터 다시 해야 하는 것과 같습니다.

페블러스의 PebbloSim은 가상 공간에서
무한한 CSI 변이를 경작할 수 있는 스마트 온실입니다.

▸ 전문 분석: https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/ko/

#WiFiDensePose #RuView #PhysicalAI #CSI #페블러스 #합성데이터 #페블로스코프 #데이터클리닉 #데이터품질 #데이터스토리

---

## 한국어 Twitter/X

🌱 카메라 없이 벽 너머 사람을 봅니다.

WiFi 신호의 변화(CSI)를 AI로 분석하면
17개 관절 위치 + 호흡수 + 심박수를 실시간 감지합니다.

CMU 논문 → Rust 오픈소스 RuView
🔸 810× 빠른 처리
🔸 $0 하드웨어
🔸 완전 암흑·벽 투과 OK

문제는 학습 데이터.
환경마다 CSI가 달라 매번 재학습 필요.
PebbloSim이 이 데이터를 경작합니다.

https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/ko/

#WiFiDensePose #PhysicalAI #페블러스 #합성데이터

---

## 한국어 Facebook

카메라 없이 벽 너머 사람을 본다면 믿으시겠습니까?

WiFi 공유기에서 나오는 신호가 사람 몸에 부딪히면 패턴이 변합니다.
CMU 연구팀은 이 변화를 AI로 분석해서
카메라 한 대 없이도 사람의 자세를 17개 관절 단위로 추정하는 데 성공했습니다.

완전한 어둠에서도, 벽 너머에서도, 옷 위에서도 동일한 성능이 나왔습니다.

이 논문을 Rust로 재구현한 오픈소스 RuView는
기존 Python 대비 810배 빠른 속도를 달성했고,
$0 — 이미 집에 있는 WiFi로 시작할 수 있습니다.

호흡수와 심박수까지 비접촉으로 감지합니다.
병원, 공장, 재난 현장, 피트니스 — 카메라가 갈 수 없는 곳에서 빛을 발합니다.

그런데 한 가지 문제가 남았습니다.
가구 하나만 움직여도 WiFi 신호 패턴이 바뀌어서 모델을 다시 학습시켜야 한다는 거죠.

이 '데이터 기근'을 해결하는 것이 페블러스의 PebbloSim입니다.
가상 공간에서 무한한 환경 변이를 시뮬레이션해 학습 데이터를 경작하는 스마트 온실이죠.

여러분의 집 WiFi가 사람을 '보는' 날이 오면,
가장 중요한 건 카메라가 아니라 데이터일 것입니다.

▸ https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/ko/

#페블러스 #합성데이터 #WiFiDensePose #PhysicalAI

---

## English LinkedIn

🌱 No cameras. Just WiFi. We can see people through walls.

Here's the paradox of Physical AI sensing:

To track human movement, you need cameras.
But most places where tracking matters most — hospitals at night, disaster sites, private homes — are exactly where cameras can't go.

In 2023, CMU researchers found the answer.
WiFi signals bounce off human bodies and change. Analyze that change (CSI), and you can estimate 17 body joint positions in real time. No camera needed.

RuView, an open-source Rust reimplementation, proved it at scale:
🔸 810× faster than Python
🔸 $0 hardware — works with your existing WiFi router
🔸 Through walls, in total darkness, privacy-preserving
🔸 Even detects breathing rate and heart rate — contactlessly

But a new challenge emerges.
WiFi CSI patterns change with every environment.
Move one piece of furniture, and you need to retrain.

It's like planting crops in new soil every time —
you have to analyze the ground before anything grows.

Pebblous's PebbloSim is the smart greenhouse
that cultivates infinite CSI variations in virtual space.

▸ Full analysis: https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/en/

#WiFiDensePose #RuView #PhysicalAI #CSI #Pebblous #SyntheticData #DataQuality #DataClinic #PebbloSim #DataJournalism

---

## English Twitter/X

🌱 No cameras. Just WiFi. See people through walls.

CMU proved WiFi signal changes (CSI) can estimate 17 body joints in real time.

Open-source RuView (Rust):
🔸 810× faster
🔸 $0 hardware
🔸 Works through walls, in darkness
🔸 Detects breathing & heart rate

The catch? CSI changes with every room layout.
PebbloSim cultivates training data for every variation.

https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/en/

#WiFiDensePose #PhysicalAI #SyntheticData #Pebblous

---

## English Facebook

What if your WiFi router could "see" people — without a single camera?

When WiFi signals pass through a room, they bounce off human bodies. The way those signals change contains enough information to reconstruct a person's pose — 17 body joints, in real time.

CMU researchers proved this in 2023. In complete darkness. Through walls. Without any visual information whatsoever.

An open-source project called RuView reimplemented this in Rust — achieving 810× the speed of the original Python version. And it works with standard WiFi routers. Cost: $0.

It can even detect breathing rate and heart rate without touching the person.

Hospitals, factories, disaster response, fitness — anywhere cameras can't go, WiFi sensing fills the gap.

But here's the unsolved puzzle: every time the environment changes — even moving a chair — the AI needs new training data. That's where Pebblous comes in.

Our PebbloSim generates infinite environmental variations in virtual space, cultivating the training data that makes WiFi sensing work everywhere.

When your home WiFi starts "seeing" people, the most important thing won't be the camera. It'll be the data.

▸ https://blog.pebblous.ai/project/WiFiDensePose/wifi-densepose-ruview/en/

#Pebblous #SyntheticData #WiFiDensePose #PhysicalAI
