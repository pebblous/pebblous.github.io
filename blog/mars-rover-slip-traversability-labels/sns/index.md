# SNS 홍보 글: 화성 로봇은 미끄러진 기록으로 안전한 길을 배운다

> 소스: blog/mars-rover-slip-traversability-labels/ko/index.html
> 생성일: 2026-09-23
> URL: https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

화성 탐사차 퍼서비어런스가 45km를 달리며 미끄러진 기록이, 어느 땅을 밟으면 안 되는지 가르치는 정답표가 됐다.

제트추진연구소와 두 대학 연구팀이 9월 21일 공개한 논문이다. 바퀴가 돈 거리와 스테레오 사진으로 잰 실제 거리의 차이인 슬립은 주행 중 차 안에서 자동으로 계산돼 저장되는 값이라, 사람이 손댄 라벨은 한 건도 들어가지 않았다. 사진만 보고 위험 지형을 가려낸 판별 성능은 AUROC 0.874로, 기존에 가장 강했던 방식의 0.816보다 높았다.

차이를 만든 쪽은 사진이 아니었다. 차체 기울기와 서스펜션 각도와 진동을 사진 특징과 같은 공간에 정렬한 부분을 빼면 0.723으로 내려간다. 겉보기가 같은 모래여도 여섯 바퀴 달린 차가 그 위에서 어떻게 반응했는지는 다르고, 그 반응은 차만 기록한다.

한계는 논문에 그대로 적혀 있다. 성적을 매긴 기준 역시 모델이 배운 것과 같은 슬립 값에서 나왔다. 지구 시험차 시연에 붙은 수치는 없고, 화성에서 실제로 쓰이는 기능도 아직 아니다.

이 연구는 데이터를 새로 모으지도 만들지도 않았다. 로버가 자기 위치를 알려고 이미 계산하던 값이 그때의 사진과 이어 붙는 순간 정답표가 됐다.

▶ 전문: https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #퍼서비어런스 #화성탐사로봇 #제트추진연구소 #자기지도학습 #PhysicalAI #AIReadyData

---

## LinkedIn (EN)

A Mars rover has spent 500 sols grading its own training data, and nobody asked it to.

Perseverance computes, onboard and several times a second, the gap between how far its wheels turned and how far it actually moved. A Jet Propulsion Laboratory team, in a paper released on September 21, pulled that quantity out of the operations log and put it where a human annotator's labels would normally go.

Trained on 45 km of real mission driving with no manual annotation, the model picks hazardous terrain out of a photograph at an AUROC of 0.874, against 0.816 for the strongest method published before it. The photographs alone were not what carried it. Drop the objective that aligns chassis tilt, suspension angles and vibration with the visual features, and the score falls to 0.723.

The paper is candid about what is not settled. The grading key came from the same slip measurements the model learned from. The Earth demonstration reports no success rate, and none of this is running on Mars yet.

Nothing here was newly collected and nothing was synthesized. A number the rover already computed in order to know where it was became an answer key the moment it was joined to the image of the ground that produced it.

▶ Read: https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Perseverance #MarsRover #JPL #SelfSupervisedLearning #PhysicalAI #AIReadyData

---

## Twitter/X (KO)

화성 탐사차 퍼서비어런스가 45km를 달리며 남긴 미끄러짐 기록이, 사람이 붙인 라벨 대신 학습의 정답 자리에 들어갔다. 사진만 보고 위험 지형을 가려낸 성능은 AUROC 0.874.

정답표를 새로 만든 게 아니다. 위치 계산용으로 이미 쌓이던 값을 다시 읽었을 뿐이다.

▶ https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/ko/

#페블러스 #퍼서비어런스 #화성탐사로봇 #자기지도학습

---

## Twitter/X (EN)

Perseverance drove 45 km on Mars, and how badly its wheels slipped along the way went into the slot a human annotator would fill. Reading hazardous terrain from photographs alone, the model reaches an AUROC of 0.874.

No new labels were made. A value the rover already computed to locate itself was simply read again.

▶ https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/en/

#Pebblous #Perseverance #MarsRover #SelfSupervisedLearning

---

## Facebook (KO)

바퀴는 도는데 차가 나가지 않는 순간이 있습니다.

눈길에서든 바닷가 모래밭에서든, 발에는 힘이 들어가는데 창밖 풍경이 그대로인 그 몇 초.

퍼서비어런스는 500화성일 동안 그 몇 초를 계속 숫자로 적어 왔습니다. 바퀴가 돈 만큼과 실제로 간 만큼의 차이. 차 안에서 초당 여덟 번씩 자동으로 계산되고, 주행이 끝나면 운용 기록으로 넘어가 잠들던 값입니다.

제트추진연구소 연구팀이 9월 21일 공개한 논문은 그 잠든 값을 깨워 정답 자리에 놓았습니다.

사람이 화성 지형에 위험도를 매겨 줄 방법은 없습니다. 그 땅을 밟아 본 사람이 없으니까요. 그런데 로버는 밟아 봤습니다. 밟고 지나가면서 자기가 얼마나 헛돌았는지를 매번 적어 두었습니다.

저는 이것을 '미끄러진 기록'이라고 부르고 싶습니다. 잘 안 풀린 쪽에 가까운 흔적인데, 다음 주행의 교과서가 된 기록입니다.

읽고 나서 오래 남은 건 화성이 아니라 지구의 공장이었습니다. 로봇이 물건을 놓치고 다시 잡은 횟수, 지게차가 같은 모퉁이에서 반복해 속도를 줄인 기록, 설비가 멈추기 직전 몇 초의 진동. 누가 만들어 달라고 한 적 없는데 매일 생기고, 대개 장애 조사에 한 번 쓰이고는 보존 기간이 지나면 지워집니다.

"우리 설비가 헛돈 순간은 지금 어디에 쌓이고 있습니까?"

페블러스가 AI-Ready Data를 말할 때 수집 계획보다 기록 구조를 먼저 묻는 까닭도 여기에 있습니다. 무엇을 언제 어떤 조건에서 측정했는지가 관측과 함께 남아 있으면, 그 데이터는 원래 목적이 끝난 뒤에 한 번 더 쓰입니다.

화성의 로버는 어제 미끄러진 기록으로 오늘의 길을 고릅니다. 우리 현장의 미끄러진 기록은 지금 어디로 가고 있는지 자주 생각하게 됩니다.

▶ 전문: https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/ko/

#페블러스 #퍼서비어런스 #화성탐사로봇 #PhysicalAI #데이터품질 #데이터클리닉

---

## Facebook (EN)

There is a particular stillness to a wheel that turns while the car goes nowhere.

Anyone who has been stuck in snow, or on the soft sand at the edge of a beach, knows it. The engine is working. The view out the window is not moving.

Perseverance has been writing that few seconds down for about 500 sols. The difference between how far its wheels turned and how far it actually traveled is computed aboard the rover eight times a second, and until now it passed into the operations log after each drive and slept there.

A paper from a Jet Propulsion Laboratory team, released on September 21, woke those numbers up and set them where a human annotator's labels would normally sit.

Nobody can grade Martian terrain for danger. No one has walked on it. The rover has driven on it, though, and each time it did, it noted how much of the drive it lost.

I have started calling this "the slip record": a trace of something going slightly wrong, promoted into the textbook for the next attempt.

What stayed with me afterwards was not Mars but a factory floor. The number of times a robot fumbled an item and picked it up again. The forklift that slows at the same corner every day. The few seconds of vibration before a machine halts. None of it was requested, all of it appears anyway, and most of it is read once during an incident review and then deleted when the retention window closes.

"Where are your machines' slip records piling up right now?"

That question sits underneath what we mean at Pebblous by AI-Ready Data, where we ask about the structure of the record before the collection plan. When what was measured, and when, and under what conditions, stays attached to the observation, the data gets a second life after its first purpose ends.

A rover on Mars picks today's route from the record of yesterday's slipping. I keep wondering where ours is going.

▶ Full piece: https://blog.pebblous.ai/blog/mars-rover-slip-traversability-labels/en/

#Pebblous #Perseverance #MarsRover #PhysicalAI #DataQuality #DataClinic
