# SNS 홍보 글: 성공률을 되찾은 로봇 정책에서 지운 시연의 흔적은 그대로였다

> 소스: report/robot-demo-unlearning-audit/ko/index.html
> 생성일: 2026-08-25
> URL: https://blog.pebblous.ai/report/robot-demo-unlearning-audit/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

시연을 지웠다고 선언한 로봇 정책이 실기 스무 번 중 열여덟 번을 성공했다. 재학습본이 스무 번 전부를 성공한 것과 거의 같은 성적이다. 같은 체크포인트에 멤버십 감사를 돌리자, 아무것도 지우지 않은 원본 정책과 똑같이 걸렸다.

미시간대와 칭화대 선전 국제대학원 연구진이 8월에 arXiv에 올린 프리프린트다. 설계의 핵심은 잣대를 바꾼 데 있다. "지웠다"의 판정을 행동 축과 증거 축으로 쪼갠 다음, 두 축의 기준선을 절대값 0이 아니라 독립 재학습본 여러 벌로 세웠다. 재학습본끼리도 서로 완전히 같지는 않으니, 그 거리만큼 가까우면 재학습과 구별할 근거가 없다는 발상이다.

그 자로 재면 두 축이 같은 체크포인트에서 반대로 움직인다. 행동을 고친 편집은 흔적을 그대로 남기고, 흔적을 흐린 편집은 행동이 재학습본에서 오히려 더 멀어진다. 두 축을 하나의 가설로 합친 검정은 감사한 체크포인트를 전부 기각했다. 편집본 일곱 개에 대조군 둘을 더한 아홉 개다.

기존 언러닝 방법을 같은 자로 재본 결과는 더 곤란하다. 열넷 중 열셋이 폐루프 성공률을 68%에서 101%까지 무너뜨렸다. 증거 점수에서 1위를 한 방법이 하필 성공률이 101% 무너진 쪽이었다. 마지막 층을 초기화하고 남은 데이터로 다시 학습하는 방법인데, 분류기에서 갈아 끼워도 되는 머리가 정책에서는 행동을 내보내는 액션 헤드다. 논문의 표현으로 증거 축은 뇌사를 보지 못한다.

단서는 분명하다. 동료심사 전 프리프린트이고, 철회 시나리오는 저자들이 구성한 것이다. 지운 시연이 동시에 잘못된 동작을 가르치고 있어서, 이 실험에서는 지우면 성능이 올라간다. 현실의 철회는 대개 멀쩡한 데이터를 빼는 일이다. 저자들 스스로 이 감사가 삭제를 인증하지는 못하고 반증만 한다고 못 박았다.

그래서 남는 것은 도구가 아니라 조건이다. 이 감사를 실행하려면 학습에 무엇이 들어갔는지 알려져 있어야 하고, 학습 절차를 다시 돌리는 일이 감당 가능해야 한다. 두 조건을 갖추지 못한 조직은 "지웠다"를 반증할 수도 뒷받침할 수도 없다. 데이터가 모델을 어떻게 만들었는지 진단해 온 입장에서 오래 남은 것은 방향이었다. 삭제 요청이 도착하는 순간 같은 계보 추적이 반대로 뒤집힌다.

▶ 전문: https://blog.pebblous.ai/report/robot-demo-unlearning-audit/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #머신언러닝 #삭제권 #PhysicalAI #로봇학습데이터 #데이터거버넌스 #AIReadyData

---

## LinkedIn (EN)

A robot policy that had been declared unlearned recovered eighteen of twenty real-robot trials, against a retrain ceiling of twenty. Run a membership audit on that same checkpoint and it was caught exactly as easily as the original policy, which had deleted nothing at all.

The finding comes from a preprint posted to arXiv in August by researchers at Michigan and Tsinghua Shenzhen International Graduate School. The design turns on the ruler. It splits the claim of deletion into a behavior axis and an evidence axis, then builds the baseline for both out of independently retrained policies rather than out of zero. Retrains do not agree perfectly with one another, so anything landing inside that spread has no measurable distance from a retrain.

Measured that way the two axes come apart on the same checkpoint. Edits that repaired behavior left the evidence untouched. Edits that blurred the evidence pushed behavior further from the retrain than where they started. A conformal test folding both axes into a single hypothesis rejected every checkpoint audited, seven edits and two controls.

Running the same ruler over the prior literature is harder reading. Thirteen of fourteen published unlearning methods broke closed-loop success by 68% to 101%. The method that ranked first on the evidence score was the one whose policy fell by that full 101%. It reinitialises the final layers and retrains on what remains, which is a replaceable head in a classifier and the action head in a policy. In the authors' phrase, the evidence axis cannot see lobotomy.

The caveats are stated plainly. This is a preprint, not peer reviewed, and the revocation scenario is constructed. The deleted demonstrations also taught a bad mode, so removing them raised performance here, whereas a real withdrawal usually removes perfectly good data. The authors are explicit that their audit refutes deletion and never certifies it.

What is left, then, is not a tool but a precondition. Running this audit requires knowing what went into training and being able to afford running the procedure again. An organisation missing either cannot refute a deletion claim and cannot support one either. For a company whose work is diagnosing how data shaped a model, the durable part of this paper is that a deletion request inverts that same lineage question and asks it backwards.

▶ Read: https://blog.pebblous.ai/report/robot-demo-unlearning-audit/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #MachineUnlearning #RightToErasure #PhysicalAI #RobotLearning #DataGovernance #AIReadyData

---

## Twitter/X (KO)

실기 스무 번 중 열여덟 번을 성공해 재학습본 가까이 돌아온 로봇 정책이, 멤버십 감사에서는 아무것도 지우지 않은 원본과 똑같이 걸렸다.

행동이 돌아온 것과 흔적이 지워진 것은 다른 사건이다. 두 축을 합친 검정은 감사한 체크포인트를 전부 기각했다.

▶ https://blog.pebblous.ai/report/robot-demo-unlearning-audit/ko/

#페블러스 #데이터품질 #머신언러닝 #PhysicalAI #삭제권

---

## Twitter/X (EN)

An edit recovered eighteen of twenty real-robot trials and came within reach of the retrain ceiling. The membership audit caught it exactly as easily as the policy that deleted nothing.

Recovering the behavior and removing the trace are two different events. A test folding both into one hypothesis rejected every checkpoint.

▶ https://blog.pebblous.ai/report/robot-demo-unlearning-audit/en/

#Pebblous #DataQuality #MachineUnlearning #PhysicalAI #RightToErasure

---

## Facebook (KO)

로봇 팔을 손으로 끌어 컵을 옮기는 동작을 백 번 넘게 반복해 준 사람이 있다고 해 봅니다.

몇 달 뒤 그 사람이 연락해 옵니다. 내 시연은 빼 주세요.

회사는 지웠습니다, 라고 답합니다.

"그 답이 참이라는 것을 무엇으로 보여 드릴 수 있는지요?"

데이터셋에서 파일을 지우는 일은 어렵지 않습니다. 어려운 것은 그 파일이 이미 학습을 마친 가중치 안에 남긴 자국입니다.

8월에 공개된 한 프리프린트가 그 자국을 재는 방법을 다시 짰습니다. 판정을 두 축으로 쪼갠 것이 먼저입니다. 편집된 정책이 그 시연 없이 재학습한 정책처럼 움직이는가. 그리고 감사자가 여전히 그 시연으로 배웠음을 탐지해 내는가.

두 번째가 더 중요합니다. 기준선을 0으로 두지 않았다는 점입니다. 독립 재학습본을 여러 벌 만들어 놓고, 재학습본끼리 떨어져 있는 거리만큼 가까우면 그때 비로소 구별할 근거가 없다고 봅니다.

그렇게 재 보니 두 축이 같은 체크포인트에서 갈라졌습니다. 실기 스무 번 중 열여덟 번을 성공해 재학습본 가까이 돌아온 편집본이, 멤버십 감사에서는 아무것도 지우지 않은 원본과 구별되지 않았습니다.

'대조군 없는 삭제'. 이 말을 적고 나니 문제의 자리가 달리 보였습니다.

지웠다는 말을 뒷받침하는 것은 삭제 로그가 아니라 비교 대상입니다. 그런데 비교 대상은 요청이 도착한 다음에는 만들어지지 않습니다.

같은 공백이 문서 위에도 남아 있습니다. 올해 공개된 로봇 조작 데이터셋 HABIT은 참여자 철회권을 이례적으로 성실하게 명문화했습니다. 서면 동의서를 받고, 동의 범위를 넘어서까지 얼굴을 흐렸습니다. 철회 요청이 오면 저자가 관리하는 미러에서 지우고 향후 재배포에서 영구히 제외합니다.

그 약속을 세어 보면 전부 데이터셋과 파이프라인의 이야기입니다. 이미 그 시연으로 학습을 마친 정책 가중치에 대해서는 한 글자도 없습니다.

이것은 그 팀의 부주의가 아닙니다. 가장 잘 쓴 조항이 여기까지라는 뜻입니다. 데이터셋 경계 너머에서 무슨 일이 일어나는지 말할 언어를 업계가 아직 갖지 못했습니다.

로봇과 제조 현장의 행동 데이터를 학습에 쓸 수 있는 상태로 만드는 일을 해 왔습니다. 이 논문이 보여 준 것은 그 일의 뒷면입니다. 넣는 파이프라인이 있으면 빼는 파이프라인도 있어야 하는데, 빼는 쪽이 훨씬 어렵습니다. 넣은 것은 파일이고 뺄 것은 가중치 안에 흩어진 영향이기 때문입니다.

논문의 저자들은 이 감사가 삭제를 인증하지는 못한다고 적었습니다. 반증만 한다는 것입니다.

그래도 남는 질문은 오히려 구체적입니다. 데이터 제공자가 물러선 뒤에도 정책은 계속 굴러갑니다. 그때 우리가 내밀 수 있는 것은 로그 한 장인지, 아니면 다시 만들어 볼 수 있는 대조군인지.

전문은 여기 있습니다: https://blog.pebblous.ai/report/robot-demo-unlearning-audit/ko/

#페블러스 #머신언러닝 #삭제권 #PhysicalAI #데이터품질 #DataClinic

---

## Facebook (EN)

Imagine someone who guided a robot arm by hand, over and over, recording more than a hundred demonstrations of a cup being moved across a table.

Months later they write in. Please take my demonstrations out.

The company replies that the data is gone.

"What could we show them that would make that answer true?"

Deleting the files is the easy part. What is hard is the mark those files left inside weights that have already finished training.

A preprint posted in August rebuilt the way that mark is measured. The first move is to split the verdict in two. Does the edited policy behave like a policy retrained without those demonstrations? And can an auditor still detect that it learned from them?

The second move matters more. The baseline is not zero. The authors trained several independent retrains, and only when a policy sits as close to a retrain as retrains sit to each other do they accept that there is no measurable distance left.

Measured that way, the two axes came apart on the same checkpoint. The edit that recovered eighteen of twenty real-robot trials, and came within reach of the retrain ceiling, was picked out by the membership audit exactly as easily as the untouched original.

"Deletion without a control group." Once I had the phrase, the problem sat somewhere different.

What supports a claim of deletion is not a log entry. It is something to compare against. And the thing to compare against cannot be built after the request arrives.

The same gap shows up in the paperwork. HABIT, a robot manipulation dataset released this year, wrote its participant withdrawal rights out with unusual care. Written consent. Faces blurred beyond what consent required. On withdrawal, removal from every author-maintained mirror and permanent exclusion from future releases.

Count what is promised and all of it concerns the dataset and the pipeline. Not one word covers the policy weights that already finished training on those demonstrations.

This is not carelessness on that team's part. It is the best-written clause reaching its limit. The industry does not yet have language for what happens past the edge of the dataset.

Our work has been getting behavioral data from robots and factory floors into a state where it can be trained on. This paper is the underside of that work. If there is a pipeline for putting data in, there has to be one for taking it out, and the second is much harder. What went in was a file. What has to come out is an influence scattered through the weights.

The authors are clear that their audit cannot certify deletion. It can only refute it.

The question it leaves is more concrete than that caveat. The person who gave the data steps away, and the policy keeps running. What do we hand them at that point: a log entry, or a control group we can rebuild?

The full report: https://blog.pebblous.ai/report/robot-demo-unlearning-audit/en/

#Pebblous #MachineUnlearning #RightToErasure #PhysicalAI #DataQuality #DataClinic
