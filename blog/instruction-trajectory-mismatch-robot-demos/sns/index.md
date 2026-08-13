# SNS 홍보 글: 행동은 맞고 지시문만 틀린 로봇 시연 데이터

> 소스: blog/instruction-trajectory-mismatch-robot-demos/ko/index.html
> 생성일: 2026-08-14
> URL: https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

잘못 라벨링된 로봇 시연을 데이터셋에서 지웠더니, 물건을 내려놓는 단계의 성공률이 아무 처리도 하지 않았을 때보다 낮아졌습니다.

도쿄대 마쓰오·이와사와 연구실과 AI Robot Association이 함께 쓴 IEEE RA-L 게재 논문의 실험 결과입니다. 저자들은 궤적은 정상으로 실행됐는데 거기 붙은 자연어 지시만 틀린 결함에 지시-궤적 불일치라는 이름을 붙였습니다. 로봇이 물건을 놓친 실패 시연과 달리, 이런 에피소드는 데이터셋 안에서 정상 시연과 구별되지 않습니다.

제안된 MMPF는 파라미터를 하나도 학습하지 않습니다. 머리 카메라, 손목 카메라, 관절이 남긴 기록을 각각 독립된 판단자로 놓고 확신이 큰 쪽에 더 큰 표를 줍니다. 감사 대상이 라벨인데 그 라벨로 학습한 분류기를 감사자로 쓰면 오염을 함께 배우기 때문입니다. 표준 도구인 Confident Learning이 경계 사례형 오염에서 F1 64.8%로 떨어진 세팅에서 MMPF는 99.6%를 기록했습니다.

흥미로운 대목은 검출 다음의 결정입니다. 실기 로봇 실험에서 의심 시연을 걸러 냈을 때 정책 성공률은 78.8%, 라벨만 고쳤을 때는 90.0%였습니다.

단계별로 쪼개면 이야기가 갈립니다. 물건을 내려놓는 구간에서 걸러 내기는 40%까지 내려앉았고, 이는 아무 처리도 하지 않은 50%보다 낮은 값입니다. 오염된 시연을 지우면서 그 안의 정상 궤적까지 함께 지운 결과입니다.

두 전략을 가르는 수치 문턱값은 아직 제시되지 않았습니다. 저자들의 권고는 데이터셋 규모와 궤적 신뢰도에 대한 정성적 판단에 머물러 있습니다.

로봇 데이터 큐레이션에서 남는 일은 오류를 찾는 것보다, 찾은 뒤에 버릴 것과 고칠 것을 가르는 결정입니다.

▶ 전문: https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #로봇데이터큐레이션 #VLA #MMPF #LIBERO

---

## LinkedIn (EN)

Deleting mislabeled robot demonstrations from a dataset left the policy worse at setting objects down than doing nothing at all.

The finding comes from an IEEE RA-L paper by the Matsuo-Iwasawa Lab at the University of Tokyo and the AI Robot Association. The authors name the defect instruction-trajectory mismatch: the trajectory runs clean while the natural-language instruction attached to it describes a different action. Unlike a failed rollout, such an episode is indistinguishable from a sound demonstration inside the dataset.

Their method, MMPF, trains no parameters. It treats the head camera, the wrist camera, and the joint record as independent judges and gives the confident ones more say. Training a classifier on the labels under audit means learning the corruption along with them: Confident Learning, the standard tool for label error detection, fell to 64.8% F1 on a borderline-corruption setting where MMPF scored 99.6%.

The decision after detection is where it gets interesting. On real-robot data, filtering the suspect demonstrations produced 78.8% policy success while fixing only their labels produced 90.0%.

Broken down by stage, the story splits. Filtering sank to 40% at the point where the robot sets an object down, below the 50% of leaving the data untouched. Deleting the corrupted demonstrations deleted the sound trajectories inside them.

No numerical threshold separates the two strategies. What the authors offer is a qualitative call about dataset size and how far the trajectory can be trusted.

In robot data curation, the work that remains is less about finding the errors than about deciding which of them to discard and which to repair.

▶ Read: https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #RobotDataCuration #VLA #MMPF #LIBERO

---

## Twitter/X (KO)

궤적은 정상인데 지시문만 틀린 로봇 시연은 데이터셋 안에서 정상으로 보입니다. 도쿄대와 AIRoA의 MMPF는 파라미터를 학습하지 않고 이런 에피소드를 찾아냅니다.

찾은 다음이 문제입니다. 걸러 냈을 때 78.8%, 라벨만 고쳤을 때 90.0%였고, 두 전략을 가르는 기준은 아직 없습니다.

https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/ko/
#페블러스 #데이터품질 #MMPF #PhysicalAI

---

## Twitter/X (EN)

A robot demo whose trajectory runs clean but whose instruction is wrong looks normal inside the dataset. MMPF, from the University of Tokyo and AIRoA, finds those episodes without training a parameter.

The hard part comes next: filtering gave 78.8% policy success, relabeling gave 90.0%, and no criterion separates the two.

https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/en/
#Pebblous #DataQuality #MMPF #PhysicalAI

---

## Facebook (KO)

"컵을 집어라."

이 문장이 붙어 있는 시연 영상에서, 로봇은 컵을 내려놓고 있었습니다.

궤적은 처음부터 끝까지 매끄럽습니다. 물건을 떨어뜨리지도, 어디에 부딪히지도 않았습니다. 틀린 것은 영상 옆에 적힌 문장 하나뿐입니다.

이런 기록을 '멀쩡해 보이는 오염'이라고 부르게 됐습니다. 로봇이 헛손질한 시연은 영상만 돌려 봐도 눈에 띄지만, 문장만 잘못 붙은 시연은 사람이 데이터셋을 훑는 점검을 그대로 통과합니다. 그동안 정책은 집으라는 말과 놓는 동작을 같은 것으로 배웁니다.

도쿄대 마쓰오·이와사와 연구실과 AIRoA는 이 결함에 지시-궤적 불일치라는 이름을 붙이고, 파라미터를 하나도 학습하지 않는 감사 방법을 제안했습니다. 머리 카메라와 손목 카메라, 그리고 관절이 남긴 기록을 각각 독립된 판단자로 놓고, 확신이 큰 쪽의 말에 더 무게를 둡니다.

읽으면서 오래 붙잡힌 대목은 검출이 아니라 그다음이었습니다.

"찾아낸 시연을 지워야 할까, 문장만 고쳐야 할까?"

실기 로봇 실험에서 지운 쪽은 78.8%, 문장만 고친 쪽은 90.0%였습니다. 그런데 물건을 내려놓는 단계만 떼어 보면 지운 쪽의 성공률은 아무 처리도 하지 않았을 때보다 낮았습니다. 오염된 시연을 지우면서 그 안에 들어 있던 멀쩡한 궤적까지 함께 지운 것입니다.

버린다는 말에는 늘 무엇을 같이 버리는지가 따라붙는 것 같습니다.

페블러스가 AI-Ready Data를 말할 때 데이터에 남아 있어야 한다고 보는 것도 이런 이력입니다. 라벨이 한 번 고쳐졌다면 원본이 무엇이었고 어떤 근거로 바뀌었는지가 레코드에 남아야, 다음 데이터셋에서 같은 판단을 다시 내릴 수 있습니다.

검출 정확도는 앞으로도 오를 것입니다. 지울지 고칠지를 정하는 자리는 그래도 한동안 사람 쪽에 남아 있을 것 같습니다.

전문: https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/ko/

#페블러스 #데이터클리닉 #데이터품질 #MMPF #PhysicalAI #로봇데이터

---

## Facebook (EN)

"Pick up the cup."

In the demonstration that carried this sentence, the robot was setting the cup down.

The trajectory runs smoothly from start to finish. Nothing is dropped, nothing is knocked over. The only thing wrong is the line of text written beside the video.

I have started calling these records "corruption that looks fine." A fumbled demonstration announces itself the moment you play the video. A demonstration with the wrong sentence attached passes human inspection untouched, and while it does, the policy is learning that the word for picking up and the motion of setting down are the same thing.

The Matsuo-Iwasawa Lab at the University of Tokyo, with the AI Robot Association, gave this defect a name, instruction-trajectory mismatch, and proposed an audit that trains no parameters. The head camera, the wrist camera, and the record left by the joints each stand as an independent judge, and the confident ones are given more say.

What held me was not the detection. It was what comes after.

"Do we delete the demonstration, or only fix the sentence?"

On real robots, deleting gave 78.8% policy success and fixing the sentence gave 90.0%. Yet at the stage where the robot sets an object down, deleting scored below leaving the data untouched. Removing the corrupted demonstrations also removed the perfectly sound trajectories inside them.

Throwing something out always carries the question of what goes out with it.

This kind of history is what Pebblous means when it says data should be AI-Ready. If a label has been repaired once, the record needs to hold what the original was and on what grounds it changed, so the same call can be made again on the next dataset.

Detection accuracy will keep improving. The seat where someone decides whether to delete or repair looks like it stays with people for a while yet.

Read: https://blog.pebblous.ai/blog/instruction-trajectory-mismatch-robot-demos/en/

#Pebblous #DataClinic #DataQuality #MMPF #PhysicalAI #RobotData
