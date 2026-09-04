# SNS 홍보 글: 로봇 실패 검출 전용 모델이 범용 VLM보다 못했다

> 소스: report/robot-vlm-success-judge-ambiguity-bias/ko/index.html
> 생성일: 2026-09-05
> URL: https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

로봇의 실패를 가려내라고 미세조정한 전용 검출기 다섯 개가, 손대지 않은 자기 베이스 모델보다 모두 낮게 나왔다.

서로 다른 연구팀이 따로 수집한 14개 출처 2,197건을 한 형식으로 묶은 벤치마크가 나왔다. 판정 모델 13종을 같은 프롬프트와 같은 입력 조건에서 채점했다.

최고 점수는 균형정확도 0.77이었다. 우연히 찍으면 0.50이 나오는 척도다. 논문은 이 값을 네 번에 한 번 틀리는 수준이라고 적는다.

판정자에게 라벨 1,000개를 자동으로 맡기면 200개 넘게 뒤집힌 채 다음 단계로 넘어간다는 뜻이다.

성적을 가른 축은 로봇 기종도 과제의 난도도 아니었다. 무엇을 봐야 판정이 되는가였다. 물체가 움직였는지로 결판나는 기록은 잘 맞혔고, 부품이 실제로 맞물렸는지를 봐야 하는 접촉 조립에서는 13종 평균이 0.52였다. 이 슬라이스에서 0.60을 넘은 모델은 하나도 없었다.

실무에 가장 곧장 걸리는 대목은 순위표가 아니라 부록이다. 어떤 전용 검출기가 자기 논문에 적어 낸 80.6%를 되짚는 나눗셈이 거기 있다. 그 검증셋은 79.7%가 실패였다. 영상을 보지 않고 전부 실패라고만 답해도 같은 점수가 나오는 판이었다는 뜻이다. 클래스를 맞춘 표본에 같은 모델을 다시 올리자 균형정확도는 0.533이었다.

경계도 함께 읽어야 한다. 미세조정 역전은 다섯 쌍 가운데 둘이 차이 0.003 이내라 사실상 동점이다. 가장 인용하기 좋은 "애매하면 성공 쪽으로 기운다"는 성향은 저자들이 오답을 손으로 읽어 본 관찰이고, 논문 스스로 통계적 주장이 아니라고 적어 두었다. 9월 3일 올라온 v1 프리프린트이며 코드와 데이터셋은 아직 내려받을 수 없다.

그래서 지금 가져올 수 있는 것은 데이터가 아니라 산술이다. 자동 라벨러의 성능 수치를 받으면 그 수치를 만든 검증셋에서 다수 클래스의 비율부터 센다. 보고된 점수가 그 비율 바로 위에 있다면, 그 점수는 도구의 실력보다 채점판의 구성을 더 많이 담고 있다.

▶ 전문: https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #VLM #로봇학습 #FailBench #실패검출

---

## LinkedIn (EN)

Five models fine-tuned specifically to catch robot failures all scored below the untouched base models they were built from.

The comparison comes from a benchmark that pulled 2,197 attempts out of 14 independently collected sources, normalized them into one format, and scored 13 judge models under the same prompt and the same input conditions.

The best of them reached 0.77 balanced accuracy. Chance sits at 0.50 on that scale, and the paper reads the number as wrong roughly one time in four.

Hand a judge 1,000 labels and more than 200 move downstream inverted.

What separated the easy slices from the hard ones was neither the robot nor the difficulty of the task. It was what a verdict requires you to see. Where failure shows up as an object in the wrong place, the judges did well. On contact-rich assembly, where the question is whether two parts actually seated, the 13-model average was 0.52 and not one model cleared 0.60.

The most useful page is in the appendix rather than the leaderboard. One specialist detector reported 80.6% on its own validation set. Failures made up 79.7% of that set, so a rule that answers "failure" without watching anything scores the same. Rerun the same model on a class-balanced sample and balanced accuracy lands at 0.533.

The limits travel with the finding. Two of the five fine-tuning reversals fall within 0.003 and should be read as ties. The most quotable result, that judges resolve ambiguity toward success, comes from the authors reading wrong answers by hand, and they state that nothing in that section is a statistically supported claim. This is a v1 preprint posted on September 3, with the code and dataset promised rather than downloadable.

What is portable today is the arithmetic, not the data. When a vendor hands you an accuracy figure, count the majority class in the validation set that produced it. If the reported score sits just above that share, the number describes the board more than the tool.

▶ Read: https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #VLM #RobotLearning #FailBench #FailureDetection

---

## Twitter/X (KO)

로봇의 실패를 가려내라고 미세조정한 전용 검출기 다섯 개가, 손대지 않은 자기 베이스 모델보다 모두 낮게 나왔다.

서로 다른 팀이 따로 모은 14개 출처를 한 잣대에 올린 결과다. 자동 라벨러의 점수는 그 라벨러가 채점받은 판을 빼고는 읽을 수 없다.

https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/ko/

#페블러스 #FailBench #VLM #로봇학습

---

## Twitter/X (EN)

Five detectors fine-tuned to catch robot failures all scored below the untouched base models they came from.

The test put 14 independently collected sources on one scale. An auto-labeler's score cannot be read apart from the board it was scored on.

https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/en/

#Pebblous #FailBench #VLM #RobotLearning

---

## Facebook (KO)

"사과가 그릇 안에 분명히 보인다."

로봇의 시도를 채점하던 판정 모델이 자기 추론 기록에 적어 둔 문장입니다.

그 영상에서 사과는 63초 무렵 그리퍼를 떠났고, 이후 모든 프레임에서 그릇은 비어 있었습니다.

로봇을 학습시키려면 시도마다 한 칸을 채워야 합니다. 이번 시도는 성공인가. 영상이나 궤적에 비하면 아무것도 아닌 칸인데, 이 값이 정책을 밀어 주는 보상이 되고, 학습 데이터를 남길지 버릴지 정하는 필터가 되고, 두 정책 중 어느 쪽이 나은지 매기는 점수가 됩니다. 롤아웃 수천 건을 사람이 다 열어 볼 수는 없으니, 요즘 시스템은 이 칸을 비전-언어 모델에게 넘깁니다.

넘긴 다음이 비어 있었습니다. 돌아온 답은 파이프라인 안에서 정답처럼 쓰이는데, 정작 그 판정자가 얼마나 맞히는지는 붙이기 전에 잘 재지 않습니다.

이번 주에 나온 벤치마크가 그 판정자들을 처음으로 한 잣대에 올렸습니다. 서로 다른 팀이 따로 모은 열네 곳의 기록을 한 형식으로 묶고, 열세 종을 같은 조건에서 채점했습니다. 최고가 0.77이었습니다. 아무 생각 없이 찍어도 0.50이 나오는 척도입니다.

부품이 실제로 맞물렸는지를 눈으로 봐야 하는 접촉 조립에서는, 열세 종 가운데 어느 것도 0.60을 넘지 못했습니다.

판정자는 눈 하나입니다. 화면에 남지 않은 것은 아무리 큰 모델을 붙여도 볼 수 없습니다. 저자들이 마지막에 시험한 것도 더 좋은 모델이 아니라 판정자에게 보내는 화면이었습니다. 결과가 드러날 자리만 잘라서 넣자 점수가 올랐습니다. 다만 같은 조치가 어떤 기록은 고치고 어떤 기록은 망쳤고, 저자들은 그 양방향을 표에 그대로 적어 두었습니다.

저는 이것을 '채점판이 빠진 점수' 문제라고 부르고 있습니다.

부록에 나눗셈 세 줄이 있습니다. 어떤 검출기가 자기 논문에 80.6%라고 적었는데, 그 검증셋은 79.7%가 실패였습니다. 영상을 보지 않고 전부 실패라고만 답해도 같은 점수가 나오는 판이었다는 뜻입니다. 클래스를 맞춘 표본에 같은 모델을 다시 올리자 절반을 겨우 넘겼습니다.

"우리가 받아 든 이 점수는 도구의 실력입니까, 채점판의 구성입니까?"

페블러스가 DataClinic으로 데이터셋을 열 때 라벨의 출처가 사람인지 시뮬레이터의 규칙인지 모델인지를 함께 묻는 이유도 여기에 있습니다. 데이터를 재는 일에는 도구가 생겼는데, 그 도구를 재는 일에는 아직 절차라 부를 만한 것이 없습니다.

한 가지는 조심해서 읽어야 합니다. 애매할 때 성공 쪽으로 기운다는 관찰은 저자들이 오답을 손으로 읽어 본 기록이고, 논문 스스로 통계적으로 뒷받침된 주장은 아니라고 적어 두었습니다. 그럼에도 사과가 그릇에 닿은 적 없는 영상 앞에서 모델이 분명히 보인다고 적은 장면은, 숫자보다 오래 남습니다.

전문 → https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/ko/

#페블러스 #FailBench #VLM #PhysicalAI #데이터클리닉 #AIReadyData

---

## Facebook (EN)

"The apple is clearly visible inside the bowl."

That line was written by a model grading a robot's attempt, in its own reasoning trace.

In the video, the apple left the gripper around the sixty-third second, and the bowl is empty in every frame after that.

Training a robot means filling in one box per attempt. Did this one succeed? Next to the video and the trajectory it is nothing, a single bit, and yet that bit becomes the reward that shapes a policy, the filter that decides which episodes survive into the training set, and the score that ranks one policy against another. Nobody can watch thousands of rollouts, so the box now gets handed to a vision-language model.

What is missing is everything after the handoff. The answer that comes back is treated as ground truth by the rest of the pipeline, while how often the judge is right rarely gets measured before it is wired in.

A benchmark released this week put those judges on one scale for the first time. Fourteen sources, each collected by a different team, normalized into a single format, and thirteen judges scored under identical conditions. The best reached 0.77 on a scale where guessing gets you 0.50.

On contact-rich assembly, where the verdict depends on whether two parts actually seated, none of the thirteen cleared 0.60.

A judge is an eye. What the frame did not hold, no amount of model size will recover. The authors' last experiment was not a better model but a better picture: crop to the region where the outcome would show, and the scores rise. The same crop also repaired some episodes and ruined others, and they printed both directions in the table rather than the net.

I have started calling this the problem of a score with its scoreboard missing.

Three lines of division sit in the appendix. One detector reported 80.6% in its own paper. Failures made up 79.7% of the validation set behind that number, so a rule that answers "failure" without watching anything earns the same. Rebalance the classes, rerun the same model, and it barely clears half.

"Is the number we were handed the skill of the tool, or the shape of the board it was graded on?"

That is why a data diagnosis at Pebblous asks where a label came from, whether a person, a simulator rule, or a model. We built instruments for measuring data. For measuring the instruments, there is not yet anything you would call a procedure.

One caution belongs with all of this. The observation that judges resolve ambiguity toward success comes from the authors reading wrong answers by hand, and they say plainly that it is not a statistically supported claim. Still, a model writing "clearly visible" over a bowl the apple never reached stays with you longer than the numbers do.

Read the full piece → https://blog.pebblous.ai/report/robot-vlm-success-judge-ambiguity-bias/en/

#Pebblous #FailBench #VLM #PhysicalAI #DataClinic #AIReadyData
