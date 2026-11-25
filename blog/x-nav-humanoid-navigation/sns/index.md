# SNS 홍보 글: 휴머노이드 X-Nav, 사무실에서 길 건너 가게까지 걸어간다

> 소스: blog/x-nav-humanoid-navigation
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/x-nav-humanoid-navigation/ko/
> URL (EN): https://blog.pebblous.ai/blog/x-nav-humanoid-navigation/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

이족 휴머노이드 한 대가 말로 받은 지시만으로 사무실 로비에서 길 건너 가게 앞까지 96.6미터를 걸었다.

AgiBot X-Lab이 주도한 연구진이 11월 12일 arXiv에 올린 X-Nav 기술 보고서(동료 심사 전)에 담긴 장면이다. 걸은 로봇은 灵犀X2(Lingxi X2)이고, 미리 그려 둔 지도도 정해 둔 경로도 쓰지 않았다. 정작 수치가 붙은 쪽은 이 주행이 아니다. 연구진은 로봇을 배치할 그 로비를 스캐너로 떠서 3차원으로 되살린 뒤, 정책이 길을 벗어났을 때 돌아오는 구간과 멈출 자리를 다듬는 구간 15,602개를 더 학습시켰다. 복제본 안에서 돌린 100회 폐루프 시험의 성공률이 40%에서 80%로 올랐다.

길 찾기 학습에 들어간 범용 샘플은 6,310,664개다. 그만큼을 먹인 모델이 정작 배치할 건물 하나에서 막혔고, 그 자리를 메운 것은 더 큰 범용 데이터가 아니라 그 건물을 복제해 모은 15,602개였다. 모델이 이미 잘하는 구간을 더 채우는 데이터와, 무너지는 자리에서만 골라 모은 데이터는 같은 수여도 값이 다르다.

다만 같은 학습에서 1미터 안에 정확히 서는 비율은 거꾸로 내려갔고, 저자들도 이 점을 한계로 적었다.

▶ 전문: https://blog.pebblous.ai/blog/x-nav-humanoid-navigation/ko/
#XNav #휴머노이드 #디지털트윈 #합성데이터 #페블러스

---

## LinkedIn · Facebook (EN)

A biped humanoid walked out of an office lobby, across a street and up to a store in the next building, 96.6 metres away, on spoken instructions alone.

The walk is described in X-Nav, a technical report posted to arXiv on November 12 by a team led by AgiBot X-Lab and not yet peer reviewed. The robot, a Lingxi X2, worked without a prior map and without a fixed route. The measured results, though, come from somewhere else. The team scanned the lobby where the robot was to be deployed, rebuilt it in three dimensions, and trained on 15,602 extra segments covering how the policy should recover after drifting off the path and how it should settle onto a stopping spot. Success across 100 closed-loop runs inside that copy then doubled, to 80%.

Millions of general navigation samples had already carried the model to the front of the public benchmarks. They still left it stuck in the one building where it had to work, and what closed the gap was a small set of segments harvested from a copy of that building. The collection targeted a kind of data, the recoveries, more than a volume of it.

Targeting has a cost: under the same training the share of runs that stopped within one metre of the goal went down, a limitation the authors record themselves.

▶ Read: https://blog.pebblous.ai/blog/x-nav-humanoid-navigation/en/
#XNav #HumanoidRobots #DigitalTwin #SyntheticData #Pebblous
