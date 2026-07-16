# SNS 홍보 글: 유명 로봇 데이터셋 6종이 따르는 공통 형식은?

> 소스: report/robot-physical-ai-datasets-landscape/ko/index.html, report/robot-physical-ai-datasets-landscape/en/index.html
> 생성일: 2026-07-16
> URL: https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/ko/ (KO) · https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/en/ (EN)
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

로봇 학습용 공개 데이터셋 여섯 개를 한 표에 올려 보니, 마지막 열에서만 예외 없이 같은 값이 나왔다.

DROID·Open X-Embodiment·GR00T·RoboCasa·MimicGen·LIBERO. 수집 방식은 실로봇 텔레옵과 시뮬 합성으로 갈리고, 규모는 76,000 궤적부터 100만 궤적까지 벌어지고, 라이선스도 CC-BY 4.0부터 비상업 전용까지 다르다. 그런데 배포 형식만은 여섯 모두 HuggingFace의 LeRobot으로 수렴한다.

형식이 하나로 모인 자리에서 진짜 격차가 드러난다. 여섯 데이터셋 중 어느 것도 로봇이 물건을 쥘 때의 접촉력, 합성 궤적이 어떤 시드에서 태어났는지의 생성 내력, 물리 일관성을 검증할 근거를 데이터에 남기지 않는다. 결과 프레임은 남기고, 그 결과가 어떻게 만들어졌는지의 증명은 버리는 것이다.

스케일 경쟁의 고지는 NVIDIA와 대학 연합이 이미 점령했다. 다음 경쟁축은 "얼마나 많은가"가 아니라 "증명할 수 있는가"로 옮겨가고 있다.

▶ 전문: https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #DataClinic #합성데이터 #로봇데이터셋

---

## LinkedIn (EN)

Six public robot-learning datasets, one shared table. Only one column reads the same in every row.

DROID, Open X-Embodiment, GR00T, RoboCasa, MimicGen, LIBERO. Collection splits between real-robot teleoperation and simulated synthesis. Scale ranges from DROID's 76,000 trajectories to Open X-Embodiment's million-plus. Licenses swing from commercial-friendly CC-BY 4.0 to non-commercial-only. Yet at the distribution stage, all six are repackaged into HuggingFace's LeRobot format.

That convergence is where the real gap surfaces. Not one of the six treats contact force, generation lineage, or a physical-consistency hash as first-class data. The output frames survive; the proof of how they were made does not.

The scale race has already been won by NVIDIA and university consortia. The next axis isn't how much data exists. It's whether you can prove it.

▶ Read: https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #SyntheticData #RobotLearning

---

## Twitter/X (KO)

로봇 데이터셋 6종(DROID·OXE·GR00T·RoboCasa·MimicGen·LIBERO), 수집은 6갈래로 갈려도 배포는 LeRobot 형식 하나로 수렴한다.

그런데 6종 모두 접촉력·생성 내력·물리 증명은 안 남긴다. 결과만 남고 증명은 버려진다.

다음 경쟁은 스케일이 아니라 증명이다.

https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/ko/

#페블러스 #데이터클리닉 #로봇데이터셋 #PhysicalAI

---

## Twitter/X (EN)

6 robot datasets (DROID, OXE, GR00T, RoboCasa, MimicGen, LIBERO). Collection splits six ways. Distribution converges on one format: LeRobot.

None of them record contact force, generation lineage, or physical proof. Frames survive. Evidence doesn't.

Next race isn't scale. It's proof.

https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/en/

#Pebblous #DataClinic #PhysicalAI #RobotLearning

---

## Facebook (KO)

"이 궤적, 왜 이렇게 움직였을까?"

로봇에게 물건 집는 법을 가르치는 공개 데이터셋을 들여다보다가, 자꾸 이 질문 앞에서 멈추게 됐습니다.

DROID, Open X-Embodiment, GR00T, RoboCasa, MimicGen, LIBERO.

여섯 개 모두 방식이 다릅니다. 어떤 것은 사람이 로봇 팔을 직접 움직여 만들고, 어떤 것은 시뮬레이터가 몇백 개 시연을 물리엔진으로 수만 개까지 불립니다.

규모도, 라이선스도 제각각입니다.

그런데 신기하게도 배포되는 순간, 여섯 모두 같은 옷을 입습니다. HuggingFace의 LeRobot이라는 형식입니다.

형식이 하나로 모이고 나니, 오히려 안 보이던 것이 보였습니다. 로봇이 물건을 쥘 때 손끝에 걸린 힘, 합성 궤적이 태어난 순간의 조건, 그 궤적이 물리적으로 말이 되는지 확인할 근거.

이런 것들은 여섯 데이터셋 어디에도 남아 있지 않았습니다. 결과 영상은 넘치도록 쌓이는데, 그 결과가 어떻게 나왔는지 되짚을 길이 없었습니다.

"이만큼 만들었다"는 답은 이제 다 나온 것 같습니다. 다음 질문은 다른 것 같습니다. "이게 왜 맞는지, 증명할 수 있는가."

페블러스가 요즘 붙들고 있는 질문도 결국 이것입니다.

전문: https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/ko/

#페블러스 #PhysicalAI #DataClinic #로봇데이터셋 #DataGreenhouse #PebbloSim

---

## Facebook (EN)

"Why did this trajectory move the way it did?"

That question kept stopping me while I was reading through public robot-learning datasets.

DROID. Open X-Embodiment. GR00T. RoboCasa. MimicGen. LIBERO.

Each one is built differently. Some come from a person physically moving a robot arm. Others come from a simulator taking a few hundred demonstrations and multiplying them into tens of thousands.

The scale differs. The license differs.

And yet, at the moment of release, all six put on the same coat. A format called LeRobot, maintained by HuggingFace.

Once the format converged, something that had been invisible came into view. The force at the robot's fingertips when it grips something. The conditions a synthetic trajectory was born under. The evidence that a trajectory is physically plausible at all.

None of the six datasets keep any of it. The output footage piles up in abundance. The trail back to how it was made does not exist.

The question of "how much did we make" feels mostly answered by now. The next one feels different: can you prove it's right?

That's the question Pebblous has been sitting with, too.

Full piece: https://blog.pebblous.ai/report/robot-physical-ai-datasets-landscape/en/

#Pebblous #PhysicalAI #DataClinic #RobotLearning #DataGreenhouse #PebbloSim
