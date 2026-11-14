# SNS 홍보 글: 컴퓨터 쓰는 AI 시험 OSWorld-Tutorial, 설명서가 예측을 이긴다

> 소스: blog/osworld-tutorial-world-model-benefit/
> 생성일: 2026-11-05
> URL: https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

컴퓨터를 직접 조작하는 AI에게 다음 화면을 공짜로 보여 줬더니 성공률이 0.1%p 내려갔다.

오리건주립대 연구진이 11월 2일 arXiv에 올린 측정이다. 연구진은 기존 과제 묶음에 작업 설명서를 붙여 OSWorld-Tutorial 360개를 새로 만들고, 설명서와 판정자와 미래 예측을 하나씩 떼어 냈다. 설명서도 판정자도 없는 기본 성공률이 42.5%, 둘을 붙이면 51.7%다. 그 위에 진짜 다음 화면을 덤으로 얹은 결과가 51.6%였다.

얹은 화면은 에이전트가 상상한 것이 아니다. 그 행동을 실제로 실행해 보고 가상머신을 되감아 받아 온 스크린샷이다. 어떤 세계 모델도 이보다 정확할 수 없고, 예측하는 연산도 한 푼 들지 않는다. 그 조건에서조차 숫자가 안 움직였으니 병목은 예측의 정확도가 아니다.

세계 모델이 쓸모없다는 이야기는 아니다. 설명서만 치우고 같은 화면을 주면 43.8%가 48.0%로 오른다. 예측은 설명서 위에 쌓이는 보너스가 아니라 설명서가 없는 자리의 대체재였고, 대체재로서도 지금 수준은 설명서 한 장에 못 미친다. 실제로 만들 수 있는 방법을 같은 자리에 넣으면 R-WoM이 1.1%p를 보태고 WebDreamer는 3.7%p를 깎는다.

미래를 정확히 보여 준 뒤에도 실패한 궤적 2,116건을 분류했더니 1위는 예측이 틀린 것이 아니었다. 지금 화면이 과제 지시를 충족했는지 알아보지 못하는 것이었다. 다 됐는지를 못 가리면 보여 준 미래가 그대로 버려진다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 조목조목 진단한다. 이 논문이 쓴 수법은 진단하는 쪽에서도 쓸 만하다. 고치려는 부품에 가장 좋은 판본을 먼저 공짜로 꽂아 보고, 숫자가 그대로면 돈을 쓸 곳은 거기가 아니다.

▶ 전문: https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #OSWorld #OSWorldTutorial #월드모델 #AI에이전트 #ComputerUse #오리건주립대 #AIReadyData

---

## LinkedIn (EN)

Hand a computer-use agent the next screen for free and the success rate drops by a tenth of a point.

A team at Oregon State University published the result on arXiv on November 2. They attached task tutorials to an existing suite to build OSWorld-Tutorial, 360 Linux desktop tasks, then pulled the pieces apart one at a time. With neither tutorial nor judge the agent finished 42.5% of tasks; with both it finished 51.7%. Laying true future screens on top returned 51.6%.

Those screens were not imagined. The team executed each candidate action, captured the resulting screenshot and rewound the virtual machine. No world model can be more accurate than that, and the forecast costs nothing to compute. The number still did not move, which rules out forecast accuracy as the bottleneck.

The finding is not that world models are useless. Take the tutorial away and the same screens carry 43.8% up to 48.0%. Foresight stands in for the document instead of stacking on top of it, and as a stand-in it currently falls short of one written page. Swap in methods that can actually be built and R-WoM adds 1.1 points while WebDreamer takes 3.7 away.

The team then collected 2,116 trajectories that failed even after being shown the true future. The most common reason was not a wrong forecast. It was failing to recognize that the current screen already satisfied the instruction. An agent that cannot tell whether a job is finished throws away whatever future it was shown.

Pebblous reads off the quality of AI training data with DataClinic. One move this paper makes travels well into that work. Give the part you want to fix its best possible input for free, and if the number holds still, the budget has the wrong target.

▶ Read: https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #OSWorld #OSWorldTutorial #WorldModel #AIAgent #ComputerUse #OregonState #AIReadyData

---

## Twitter/X (KO)

컴퓨터를 조작하는 AI에게 진짜 다음 화면을 공짜로 건넸더니 성공률이 51.7%에서 51.6%로 움직이지 않았다. 설명서가 곁에 있을 때 이야기다.

설명서를 치우자 같은 화면이 4.2%p를 보탰다. 예지력은 문서 위에 쌓이는 게 아니라 문서가 없는 칸을 메운다.

https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/ko/

#페블러스 #데이터품질 #OSWorldTutorial #AI에이전트

---

## Twitter/X (EN)

A computer-use agent was handed the true next screen for free. With a tutorial beside it, the success rate went from 51.7% to 51.6% and stayed put.

Take the tutorial away and the same screens are worth 4.2 points. Foresight does not stack on the document; it fills the slot where no document is.

https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/en/

#Pebblous #DataQuality #OSWorldTutorial #AIAgent

---

## Facebook (KO)

일을 다 한 건지 아닌지 몰라서 화면을 한참 들여다본 적이 있습니다.

파일은 저장했고 표는 고쳤는데, 이게 부탁받은 일의 끝인지가 확실하지 않던 순간입니다.

사람은 그럴 때 옆자리에 묻습니다.

컴퓨터를 직접 조작하는 AI 에이전트에게는 물을 옆자리가 없습니다.

오리건주립대 연구진이 그 지점을 재 봤습니다. 에이전트가 다음 화면을 미리 그려 보는 '세계 모델'이 정말 보탬이 되는지 보려고, 아예 진짜 다음 화면을 공짜로 건넸습니다. 어떤 예측도 이보다 정확할 수 없는 조건입니다.

곁에 작업 설명서가 있으면, 그 완벽한 화면이 성공률을 한 톨도 올리지 못했습니다.

설명서를 치우자 같은 화면이 4%p 넘게 보탰습니다.

'빈 칸을 메우는 재주'.

문서 위에 쌓이는 보너스가 아니라, 문서가 없는 자리에 들어가는 대체재였습니다.

더 오래 남은 쪽은 실패 이유였습니다. 미래를 정확히 보여 준 뒤에도 실패한 궤적 2,116건에서 가장 많이 나온 이유는, 일이 이미 끝났다는 것을 알아보지 못한 것이었습니다.

"우리가 에이전트에게 넘긴 일은, 무엇이 화면에 떠 있으면 끝난 겁니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 논문에서 한 가지가 더 걸렸습니다. 과학 소프트웨어 과제 169개는 쓸 만한 온라인 설명서가 거의 없어서, 169개 전부에 모델이 지어낸 설명서를 붙였다고 합니다.

쓰는 사람이 적으면 설명서도 적게 쌓입니다. 사내 시스템은 쓰는 사람이 한 회사뿐입니다.

설명서 한 장이 완벽한 예지력보다 멀리 갔습니다. 우리 쪽 설명서는 지금 누가 쓰고 있는지, 그게 먼저 셀 자리 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/ko/

#페블러스 #데이터클리닉 #데이터품질 #OSWorldTutorial #월드모델 #AI에이전트

---

## Facebook (EN)

There was a stretch where I sat looking at a screen, unsure whether the job was actually done.

The file was saved and the table was fixed, and still I could not tell whether that was the end of what had been asked.

A person turns to the next desk at that point.

An agent working the computer directly has no next desk to turn to.

Oregon State University researchers went and measured that spot. To find out whether a world model, the trick of having an agent picture the next screen before acting, really helps, they skipped the picturing and handed over the true next screen for free. No forecast can be more accurate than that.

With a task tutorial beside it, that perfect screen moved the success rate by nothing at all.

Take the tutorial away and the same screens were worth more than four points.

"A knack for filling the empty slot."

Not a bonus stacked on the document, but a stand-in for the places where no document exists.

The failure side stayed longer. Among 2,116 trajectories that failed even after being shown the true future, the most common reason was not recognizing that the job was already finished.

"What has to be on the screen before the job we handed over counts as finished?"

Pebblous reads off the quality of AI training data with DataClinic. Another line from the paper belongs here. For the 169 science-software tasks, usable online tutorials barely existed, so all 169 carry a tutorial a model wrote instead.

Fewer users, fewer pages. An internal system has exactly one company's worth of users.

One written page went further than perfect foresight. Who is currently writing ours looks like the thing to count first.

▶ Read: https://blog.pebblous.ai/blog/osworld-tutorial-world-model-benefit/en/

#Pebblous #DataClinic #DataQuality #OSWorldTutorial #WorldModel #AIAgent
