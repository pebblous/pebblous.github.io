# SNS 홍보 글: HubEgo-100K, 로봇 학습용 일터 영상 1만 시간 공개

> 소스: blog/hubego-100k-egocentric-work-video
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/hubego-100k-egocentric-work-video/ko/
> URL (EN): https://blog.pebblous.ai/blog/hubego-100k-egocentric-work-video/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

로봇에게 손일을 가르치려고 모은 1인칭 영상 1만 시간이 허깅페이스에 공개됐다. 그 영상으로 학습한 로봇은 아직 없다.

샌프란시스코의 Hub Labs가 낸 HubEgo-100K 1차분은 기여자 12,227명이 머리에 단 휴대폰으로 대본 없이 자기 일을 찍은 10,124시간이고, 82.6%가 집이 아닌 일터에서 나왔다. 100Hz 관성 센서 기록이 붙고 라이선스는 CC BY 4.0이다. 관절 각도나 그리퍼 명령 같은 로봇 행동값이 없어서, 이 영상만으로는 정책을 학습시킬 수 없다.

함께 나온 논문이 앞세운 것은 규모가 아니다. 정책 성능과 이어진다고 보고된 데이터 속성 6가지를 골라 자기 데이터에서 쟀다. 손이 하나라도 보이는 프레임은 94.7%, 기여자 한 명이 차지하는 시간은 많아야 0.22%다. 여섯 중 둘은 로봇 정책과의 관계가 검증되지 않았다고 저자들이 적었고, 손이 안 보이는 녹화는 측정 전에 걸러졌다.

11월 23일 2차 공개로 누적 2만 시간을 넘겼고 목표는 10만 시간이다. 피지컬 AI 데이터를 모으는 팀이라면 시간 수 옆에 무엇을 적어 두고 있는가. 손이 보이는 비율과 그 판정을 누가 했는지, 작업자 한 명의 몫이 얼마인지가 그 칸이다.

▶ 전문: https://blog.pebblous.ai/blog/hubego-100k-egocentric-work-video/ko/
#HubEgo100K #피지컬AI #로봇데이터 #데이터품질 #페블러스

---

## LinkedIn · Facebook (EN)

Ten thousand hours of first-person video, filmed mostly on job sites to teach robots manual work, went up on Hugging Face as a first release. No robot has been trained on it yet.

That release of HubEgo-100K, from San Francisco's Hub Labs, holds 10,124 hours shot by 12,227 contributors who wore a phone on their heads and filmed their own jobs unscripted. Most of it, 82.6%, comes from workplaces rather than homes. It ships with 100Hz inertial data under CC BY 4.0. What it lacks is actions: no joint angles or gripper commands, so the video cannot train a robot policy on its own.

The paper leads with something other than size. The authors picked six data properties that earlier studies linked to policy performance and measured each on their own. At least one hand is visible in 94.7% of frames, and no contributor supplies more than 0.22% of the hours. They concede two of the six have no verified link to robot policies, and recordings with hands mostly out of view were filtered out before measurement.

A second release on November 23 pushed the total past 20,000 hours, toward a stated 100,000. For teams collecting physical AI data, hours are the easy column. What sits beside it: how often hands are in frame, whether a model or a person judged that, and how much any single worker supplied?

▶ Read: https://blog.pebblous.ai/blog/hubego-100k-egocentric-work-video/en/
#HubEgo100K #PhysicalAI #RobotData #DataQuality #Pebblous
