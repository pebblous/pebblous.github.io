# SNS 홍보 글: 가짜 영상 판별기 Verus-Insight는 왜 근거까지 채점할까?

> 소스: blog/verus-insight-explainable-artifact-detection/ko/index.html
> 생성일: 2026-10-24
> URL: https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

진짜·가짜 판정을 91.12로 맞힌 영상 판별기가, 사람이 표시해 둔 결함을 되짚는 점수에서는 8.47입니다.

10월 22일 arXiv에 올라온 논문 Verus-Insight의 비교표에 적힌 숫자입니다. 베이징대와 콰이쇼우의 영상 생성 모델 클링 팀을 비롯한 연구진이 판별기 성적표를 두 칸으로 나눴습니다. 진짜인지 가짜인지 맞혔는가, 그리고 사람이 이상하다고 표시해 둔 자리를 모델도 짚었는가.

뒤 칸의 정답지는 사람이 만듭니다. 주석자가 영상 192개에 결함 326개를 18개 범주로 달아 두었고, 모델이 내놓은 지적을 글자가 아니라 뜻으로 맞춰 봅니다. 연구진은 이 점수를 재는 데서 멈추지 않았습니다. 강화학습 보상에 근거의 정확도를 함께 곱해, 맞히기만 하고 근거를 비워 두는 지름길이 학습 단계에서 이득이 되지 않게 한 설계입니다.

자사 모델이 받은 35.42는 비교군에서 가장 높지만 절대 수준으로는 낮습니다. 사람 표시와 빠짐없이 겹치면 100이 나오는 잣대이니 셋 중 하나를 겨우 넘긴 자리입니다. 두 칸이 서로 다른 평가 집합에서 나온 값이라는 조건도 논문이 함께 밝힙니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 합격률 한 줄로 끝나는 검증 보고서를 받을 때 확인하게 되는 자리도 같습니다. 그 판정이 어느 레코드의 어떤 값을 보고 내려졌는지가 숫자 옆에 적혀 있는가. 근거 칸이 비어 있으면 합격과 요행이 같은 줄로 기록됩니다.

▶ 전문: https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #VerusInsight #VerusBench #콰이쇼우 #딥페이크탐지 #설명가능AI #AI벤치마크

---

## LinkedIn (EN)

A video detector that scored 91.12 on telling real from fake scored 8.47 on finding the flaws people had marked.

The numbers sit in a comparison table in Verus-Insight, posted to arXiv on October 22 by researchers from Peking University and the Kling video generation team at Kuaishou. They split the detector scorecard into two columns. Did the model call real or fake correctly, and did it point at the places a person had flagged as wrong.

The second column is graded against human work. Annotators marked 326 flaws across 192 videos in 18 categories, and a model's findings are matched to those by meaning rather than wording. The researchers did not stop at measuring it. The score is folded into the reinforcement learning reward, so a model that calls the verdict right while leaving its reasons empty gains nothing from the shortcut.

Their own model's 35.42 leads the comparison and is still low in absolute terms. Full overlap with the human marks reads 100. The paper also notes that the two columns come from different evaluation sets.

Pebblous reviews the quality of AI training data with DataClinic. The question that surfaces when a verification report arrives as a single pass rate is the same one. Does the number say which record and which value it was reading when it decided. With the evidence column empty, a pass and a lucky guess are written down the same way.

▶ Read: https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #VerusInsight #VerusBench #Kuaishou #DeepfakeDetection #ExplainableAI #AIBenchmark

---

## Twitter/X (KO)

영상 판별기 VideoVeritas는 진짜·가짜 판정을 91.12로 맞혔고, 사람이 표시해 둔 결함을 짚는 점수는 8.47입니다.

베이징대·콰이쇼우 연구진이 성적표에 근거 칸을 하나 더 세우자 순위가 흔들렸습니다.

https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/ko/

#페블러스 #데이터품질 #VerusInsight #딥페이크탐지

---

## Twitter/X (EN)

A video detector scored 91.12 on telling real from fake, and 8.47 on finding the flaws people had marked.

Verus-Insight adds a second column to the detector scorecard, and the ranking moves.

https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/en/

#Pebblous #DataQuality #VerusInsight #DeepfakeDetection

---

## Facebook (KO)

판별기에 영상을 넣으면 "가짜"라는 두 글자가 돌아옵니다.

그다음에 하고 싶은 말은 대개 한마디입니다.

"어디가요?"

이틀 전 arXiv에 올라온 논문 한 편이 그 한마디를 채점표의 한 칸으로 만들었습니다.

베이징대와 콰이쇼우의 영상 생성 팀이 판별기 성적을 두 칸에 나눠 적었습니다. 맞혔는가. 그리고 어디를 보고 맞혔는가.

앞 칸에서 91.12를 받은 판별기가 뒤 칸에서는 8.47입니다.

그 두 숫자가 한 줄에 나란히 적힌 성적표를 저는 처음 봤습니다.

뒤 칸의 정답지는 사람이 만듭니다.

영상 192개를 보면서 "여기가 이상하다"고 적어 둔 자리가 326개입니다. 손가락이 한 프레임에서 늘어난다거나, 그림자가 물체와 어긋난 채 움직인다거나 하는 것들입니다.

판정은 찍어도 절반은 맞습니다. 결함의 자리는 찍어서 맞힐 방법이 없습니다.

그래서 앞 칸만 적는 성적표에서는, 거의 아무것도 보지 않고 답만 맞힌 모델이 1등으로 올라섭니다.

"이 판정은 어디를 보고 내려졌습니까?"

논문이 내놓은 모델도 그 질문 앞에서는 35.42에서 멈췄습니다. 사람 표시와 빠짐없이 겹쳐야 100이 되는 잣대입니다.

그러니 이 논문이 만든 것은 근거를 잘 짚는 모델이라기보다, 근거를 짚었는지 물어보는 칸에 더 가깝습니다. 그 칸을 세우는 데 든 비용은 모델 쪽이 아니라 주석 쪽이었습니다. 사람이 먼저 326개를 표시해 두지 않았다면 물어볼 자리 자체가 없는 셈입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 진단서에 점수만 적혀 있고 그 점수가 걸린 자리가 비어 있으면, 받는 쪽에서 이어서 할 수 있는 일이 사라집니다.

재는 자리와 고르는 자리가 떨어져 있으면 지표는 장식으로 남습니다. 연구진이 근거 점수를 보상에 집어넣은 이유도 거기에 있는 듯합니다.

다음에 "통과"라고 적힌 줄을 받게 되면, 그 옆이 비어 있는지부터 보게 될 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/ko/

#페블러스 #VerusInsight #VerusBench #콰이쇼우 #딥페이크탐지 #데이터품질 #AIReadyData

---

## Facebook (EN)

Put a video into a detector and two words come back. "It's fake."

The thing you want to say next is usually one word long.

"Where?"

A paper posted to arXiv two days ago turned that word into a column on a scorecard.

A team from Peking University and the video generation group at Kuaishou wrote detector results in two columns. Did it call this right. And what was it looking at when it did.

A detector that scored 91.12 in the first column scored 8.47 in the second.

I had never seen those two numbers printed side by side on the same row before.

The answer key for the second column is made by hand.

People watched 192 videos and wrote down 326 places where something was wrong. A hand that grows an extra finger for one frame. A shadow drifting away from the object casting it.

A verdict can be guessed and still be right half the time. The location of a flaw cannot be guessed at all.

Which means that on a scorecard with only the first column, a model that barely looked at anything and still called it right sits at the top.

"What was this verdict looking at?"

The paper's own model stops at 35.42 against that question. Full agreement with the human marks would read 100.

So what the work really produces is less a model that finds flaws well than a column that asks whether it found any. The cost of building that column fell on the annotation side, not the model side. Without 326 marks laid down by people first, there would have been nothing to ask.

Pebblous reviews the quality of AI training data with DataClinic. When a report carries a score but not the place the score came from, the person receiving it has nowhere left to go with it.

A measure that never reaches the decision stays decorative. That seems to be why the researchers folded the evidence score into the training reward rather than only reporting it.

The next time a line comes back marked "passed," I expect to look first at whether anything is written beside it.

▶ Read: https://blog.pebblous.ai/blog/verus-insight-explainable-artifact-detection/en/

#Pebblous #VerusInsight #VerusBench #Kuaishou #DeepfakeDetection #DataQuality #AIReadyData
