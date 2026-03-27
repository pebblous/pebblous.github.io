# SNS 홍보 글: 폐차장에서 꺼낸 테슬라 두뇌 — Physical AI 하드웨어를 내 손으로 해부하다

> 소스: project/TeslaFSD/tesla-fsd-desk/ko/index.html
> 생성일: 2026-03-27
> KO URL: https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/ko/
> EN URL: https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/en/

---

## 한국어 LinkedIn

💡 $255짜리 폐차 부품으로 테슬라의 두뇌를 책상 위에서 살렸습니다.

보안 연구자 David Hu는 Tesla 버그 바운티 프로그램에 참여하고 싶었습니다.
그런데 차가 없었습니다.

그래서 eBay와 폐차장을 뒤졌습니다.
MCU와 AP Computer를 $255에 구입했죠.

MAX16932 전압 레귤레이터 칩 하나가 망가져 있었습니다.
$3짜리 칩을 교체했습니다.
완전 부팅이 시작됐습니다.

그리고 그가 발견한 것들:

🔸 SSH(22번 포트) — 내부 Linux 쉘이 그대로 열려 있었습니다
🔸 ODIN API(8080번 포트) — Tesla 내부 진단 인터페이스, 인증 없이 접근 가능
🔸 이전 소유자의 WiFi 비밀번호, 계정 토큰, 주행 기록 — 모두 보드에 남아 있었습니다

차량에서 분리된 하드웨어는 차량 보안 정책 밖에 있었습니다.

이것이 Physical AI 하드웨어 보안의 현주소입니다.

자동차, 로봇, 드론 — 피지컬 AI 기기의 하드웨어는
소프트웨어 보안과 독립적으로 접근 가능합니다.

부품 하나를 폐차장에서 꺼내는 순간,
그 안에 축적된 데이터는 누구의 손에든 들어갈 수 있습니다.

마치 수확한 작물을 제대로 포장하지 않고 방치하면
다음 경작자가 토양 오염을 고스란히 물려받는 것처럼 말이죠.

피지컬 AI 시대,
하드웨어 수명 주기 전체를 아우르는 데이터 관리가 필요합니다.

▸ 전체 분석: https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/ko/

#TeslaFSD #PhysicalAI #피지컬AI #하드웨어보안 #페블러스 #합성데이터 #페블로스코프 #데이터클리닉 #데이터품질 #데이터스토리

---

## 한국어 Twitter/X

💡 $255 폐차 부품으로 Tesla FSD 컴퓨터를 책상에서 구동했습니다.

결과:
🔸 SSH 포트 22 — 열려 있음
🔸 ODIN API 포트 8080 — 인증 없음
🔸 이전 소유자 WiFi 비밀번호, 계정 토큰 — 그대로

차량에서 분리된 순간, 차량 보안은 사라집니다.
Physical AI 하드웨어 수명 주기 보안의 민낯입니다.

https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/ko/

#TeslaFSD #PhysicalAI #페블러스 #하드웨어보안

---

## 한국어 Facebook

테슬라 자율주행 컴퓨터를 $255에 책상에서 구동했다면 믿으시겠습니까?

보안 연구자 David Hu는 eBay와 폐차장에서 Tesla Model 3의 MCU와 AP Computer를 구했습니다.
전압 레귤레이터 칩($3) 하나를 교체하자 완전히 부팅됐습니다.

이더넷 케이블 하나 연결했더니 SSH가 열려 있었습니다.
내부 진단 API(ODIN)는 인증도 없이 접근됐습니다.
이전 소유자가 저장했던 WiFi 비밀번호와 계정 정보가 고스란히 남아 있었습니다.

차량에서 분리된 하드웨어는 더 이상 차량 보안 정책의 보호를 받지 않습니다.
$255짜리 투자로 이 모든 것에 접근할 수 있었습니다.

해커뉴스에서 699점을 받은 이 연구가 드러내는 것은 단순히 "테슬라의 취약점"이 아닙니다.
자동차, 로봇, 드론 — 피지컬 AI 기기의 하드웨어가 소프트웨어 보안과 독립적으로 접근 가능하다는 사실입니다.

중고 거래 시장에 피지컬 AI 하드웨어가 넘쳐나는 지금,
하드웨어 수명 주기 전체에 걸친 데이터 관리와 보안이 얼마나 중요한지를 다시 묻게 됩니다.

▸ https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/ko/

#페블러스 #합성데이터 #TeslaFSD #PhysicalAI #피지컬AI

---

## English LinkedIn

💡 A researcher booted Tesla's FSD computer on his desk for $255 in salvage parts.

Security researcher David Hu wanted to join Tesla's bug bounty program.
He didn't own a Tesla.

So he went to eBay and the junkyard.
MCU and AP Computer: $255.

One damaged voltage regulator chip — MAX16932 — was blocking the boot.
He replaced it for $3.
Full boot.

What he found next:

🔸 SSH (port 22) — Tesla's internal Linux shell, wide open
🔸 ODIN API (port 8080) — Tesla's internal diagnostics interface, no authentication
🔸 Prior owner's WiFi passwords, account tokens, trip history — all still on the board

The moment hardware leaves the vehicle, vehicle-level security policies no longer apply.

This is the state of Physical AI hardware security today.

Cars, robots, drones — the hardware layer of Physical AI systems can be accessed independently of any software protection.

Pull a component from a salvage yard,
and every piece of data accumulated inside it comes with it.

Like harvesting crops but never sanitizing the soil between seasons —
the next grower inherits whatever contamination was left behind.

Physical AI demands data management across the full hardware lifecycle.
Not just the software.

▸ Full analysis: https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/en/

#TeslaFSD #PhysicalAI #HardwareSecurity #AutomotiveCybersecurity #Pebblous #SyntheticData #DataQuality #DataClinic #DataJournalism

---

## English Twitter/X

💡 A researcher ran Tesla's FSD computer on his desk for $255 in junkyard parts.

What he found:
🔸 SSH port 22 — open
🔸 ODIN API port 8080 — no auth
🔸 Prior owner WiFi passwords & account tokens — still there

Once hardware leaves the vehicle, vehicle security is gone.
The real lesson: Physical AI hardware lifecycle security.

https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/en/

#TeslaFSD #PhysicalAI #Pebblous #HardwareSecurity

---

## English Facebook

What if someone could access your Tesla's data for $255 — without ever owning your car?

Security researcher David Hu bought Tesla Model 3's MCU and AP Computer from eBay and a salvage yard. A single $3 voltage regulator chip replacement later, the system booted completely.

He plugged in an Ethernet cable. SSH was open. Tesla's internal diagnostic API (ODIN) was accessible with no authentication. The previous owner's WiFi passwords and account tokens were still sitting on the board.

Hardware removed from a vehicle is no longer protected by vehicle-level security policies. $255 was enough to reach all of it.

This research — which earned 699 upvotes on Hacker News — isn't just about Tesla vulnerabilities. It reveals something deeper: the hardware layer of Physical AI devices (cars, robots, drones) is accessible independently of any software security measure.

As the secondhand market for Physical AI hardware grows, data management and security across the full hardware lifecycle matter more than ever.

What happens to the data inside a device when it changes hands? That question doesn't have a good answer yet.

▸ https://blog.pebblous.ai/project/TeslaFSD/tesla-fsd-desk/en/

#Pebblous #SyntheticData #TeslaFSD #PhysicalAI #HardwareSecurity
