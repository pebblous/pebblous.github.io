# SNS 홍보 글: Sense and Sensitivity, 환자 말투가 AI 진료 권고를 바꾼다

> 소스: blog/sense-and-sensitivity-llm-triage-benchmark/ko/index.html
> 생성일: 2026-10-02
> URL: https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

환자가 "평소보다 더 피곤하다"를 "극도로 피곤하다"로 고쳐 적었다. 진료 기록도 증상도 기간도 그대로였다. 모델의 진료 권고는 그 낱말 두어 개에서 흔들렸다.

MIT와 우스터폴리테크닉 연구진이 지난 9월 29일 공개한 임상 분류 벤치마크 Sense and Sensitivity의 결과다. EMNLP 2026 Findings에 채택됐다.

연구진은 진료 상황 6,232건에서 환자의 임상 정보는 건드리지 않고 성별 표현과 말투만 바꿨다. 거기에 의사 열 명의 판단과 언어모델 다섯 종의 응답을 나란히 올렸다.

기준 성적만 보면 모델은 의사와 비슷하다. 손대지 않은 시나리오에서 GPT-4o의 정확도는 91.7%로 의사 평균 90.5%를 살짝 넘었다.

갈라지는 곳은 다른 데 있다. 연구진은 변형 전후로 의사들의 다수결 권고가 바뀌지 않은 사례만 추려 같은 계산을 다시 돌렸다. 사람 전문가가 "여기는 달라진 게 없다"고 판정한 자리다. 그 자리에서 의사 정확도는 평균 0.8점 움직이는 데 그쳤고, DeepSeek-R1-32B는 14.2점, Qwen2.5-32B는 13.0점 내려갔다.

틀리는 방향도 한쪽으로 기운다. 모델은 의사 합의가 필요 없다고 본 진료와 검사까지 더 자주 권했고, 말투를 바꾸면 그 경향이 커졌다. 업무를 덜겠다고 들인 모델이 검토하고 되돌릴 일을 새로 만드는 셈이다. 저자들은 이 평가가 과거 데이터로 돌린 회고적 평가이고 말투 변형도 생성해 만든 문장이라는 한계를 함께 적어 두었다.

잘 맞히는 모델과 덜 흔들리는 모델은 같지 않았다. 종합 정확도 한 숫자로는 그 차이가 보이지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #SenseAndSensitivity #MIT #EMNLP2026 #의료AI #LLM평가 #AI편향

---

## LinkedIn (EN)

A patient changed "more fatigued than usual" to "extremely fatigued." The chart, the symptom and the duration stayed exactly where they were. The model's triage recommendation moved anyway.

That is the finding in Sense and Sensitivity, a clinical triage benchmark posted on September 29 by researchers at MIT and Worcester Polytechnic Institute and accepted to Findings of EMNLP 2026.

The team took 6,232 clinical scenarios, left the clinical content untouched, and rewrote only the gender wording and the tone of the patient's own account. Ten physicians labelled the originals, and five language models answered.

On baseline scores the models look like the doctors. GPT-4o reached 91.7% accuracy on the untouched scenarios, just past the 90.5% physician average.

The split shows up elsewhere. The researchers kept only the cases where the physicians' majority recommendation held across the rewrite, the places human experts had judged unchanged. There, physician accuracy moved 0.8 points on average, while DeepSeek-R1-32B fell 14.2 points and Qwen2.5-32B fell 13.0.

The errors lean one way too. Models recommended visits and tests the physicians had judged unnecessary, and the lean grew under the tone rewrites. A system brought in to lighten clinical workload generates review work instead. The authors set out their own limits as well: the evaluation is retrospective, and the tone rewrites are generated text rather than speech collected from patients.

The model that scores highest is not the model that holds steadiest. A single aggregate accuracy figure hides the difference.

▶ Read: https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #SenseAndSensitivity #MIT #EMNLP2026 #HealthcareAI #LLMEvaluation #AIBias

---

## Twitter/X (KO)

같은 환자, 같은 증상. 바뀐 것은 "더 피곤하다"를 "극도로 피곤하다"로 고친 낱말 두어 개뿐이었다. MIT 연구진이 진료 상황 6,232건으로 재 보니 의사 권고가 그대로인 자리에서도 모델만 14.2점 떨어졌다.

모델이 읽은 것은 병이 아니라 문장이 적힌 방식이었다.

▶ https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/ko/

#페블러스 #데이터품질 #SenseAndSensitivity #의료AI

---

## Twitter/X (EN)

Same patient, same symptoms. All that changed was "more fatigued" becoming "extremely fatigued." Across 6,232 clinical scenarios, MIT researchers found models dropping 14.2 points even where the physicians' advice never moved.

What the model read was the wording, not the illness.

▶ https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/en/

#Pebblous #DataQuality #SenseAndSensitivity #HealthcareAI

---

## Facebook (KO)

"평소보다 좀 피곤합니다."

"평소보다 극도로 피곤합니다."

자기 증상을 적어 본 사람은 이 둘 사이에서 망설인 기억이 있을 겁니다. 엄살로 보일까 봐 낱말을 낮추기도 하고, 그냥 넘어갈까 봐 올려 적기도 합니다.

두 문장이 가리키는 몸은 같습니다.

MIT와 우스터폴리테크닉 연구진이 지난달 말 공개한 임상 분류 벤치마크는 이 망설임을 그대로 실험대에 올렸습니다.

진료 기록도, 증상도, 기간도 그대로 둡니다. 정도를 나타내는 낱말 두어 개만 바꿉니다. 성별 표현을 뒤집거나 아예 지운 판본도 따로 만들었습니다.

그렇게 모은 진료 상황이 6,232건입니다.

정답은 모델이 아니라 사람이 세웠습니다. 평균 경력 12년의 의사 열 명이 시나리오마다 세 명씩 독립해서 읽고, 그 다수결을 기준으로 삼았습니다.

그다음 계산이 이 논문의 핵심입니다.

연구진은 변형 전후로 의사들의 권고가 바뀌지 않은 사례만 따로 모았습니다. 사람 전문가가 "여기는 달라진 게 없다"고 판정한 자리입니다.

그 자리에서 의사의 정확도는 0.8점 움직였습니다. 모델 쪽은 14.2점 내려갔습니다.

"이 모델은 지금 병을 읽고 있습니까, 아니면 문장이 적힌 방식을 읽고 있습니까?"

저자들은 이것을 편향의 증명이라고 부르지 않습니다. 다시 쓴 두 문장이 완전히 같은 뜻인지까지는 확인할 수 없으니, 사람의 행동을 잣대로 삼은 민감도 감사로 읽어 달라고 적었습니다.

병원 밖으로 가져와도 구조는 같습니다. 상담 기록을 누가 요약했는지, 민원이 어느 창구로 들어왔는지, 응답자가 말이 많았는지에 따라 같은 사실이 다른 표면을 입습니다. 모델이 그 표면에 반응하면, 우리가 가르친 것은 사실이 아니라 '기록 습관'입니다.

페블러스는 데이터 품질을 진단하는 일을 합니다. 일하면서 이 모양을 자주 만납니다. 값은 다 맞는데 그 값을 적은 방식이 부서마다 다르고, 완성된 테이블에서는 그 차이가 보이지 않습니다.

AI-Ready Data를 말할 때 보통 빠진 값과 틀린 값을 먼저 떠올립니다. 이 벤치마크는 거기에 한 줄을 덧붙입니다.

값이 맞더라도, 그 값을 적은 방식이 여러 갈래면 모델에게는 서로 다른 입력입니다.

여러분의 평가 데이터셋에는 같은 사실을 다르게 적은 판본이 몇 벌이나 들어 있습니까?

▶ 전문: https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/ko/

#페블러스 #SenseAndSensitivity #MIT #의료AI #AIReadyData #데이터클리닉 #데이터품질

---

## Facebook (EN)

"I've been feeling somewhat fatigued."

"I've been feeling extremely fatigued."

Anyone who has typed their own symptoms into a form has hesitated between those two. You soften a word so you will not sound dramatic, then raise it again so nobody waves you off.

The body behind both sentences is the same one.

A clinical triage benchmark released at the end of September by researchers at MIT and Worcester Polytechnic Institute put that hesitation on the bench.

The chart stays. The symptom stays. The duration stays. Two or three words of degree are all that move. Separate versions flip the patient's gender, or strip it out entirely.

That comes to 6,232 clinical scenarios.

The answer key was built by people, not by a model. Ten physicians with twelve years of clinical experience on average read three to a scenario, independently, and their majority became the label.

The calculation that follows is the heart of the paper.

The researchers kept only the cases where the physicians' recommendation did not change across the rewrite. The places human experts had looked at and called unchanged.

There, physician accuracy moved 0.8 points. The models fell 14.2.

"Is this model reading the illness, or the way the sentence happens to be written?"

The authors decline to call that proof of bias. They cannot establish that the two versions of a sentence carry identical clinical meaning, so they ask for the result to be read as a sensitivity audit measured against how people behaved.

Carry it out of the hospital and the structure holds. Who summarized the support call, which channel took the complaint, whether the respondent was talkative or terse: the same fact arrives wearing a different surface. When a model answers to that surface, what we have taught it is not the fact but the recording habit.

Pebblous works on data quality, and this shape turns up often. Every value is correct, every team writes it differently, and the finished table shows none of it.

When AI-Ready Data comes up, missing values and wrong values are what people reach for first. This benchmark adds a line.

Even where the value is correct, several ways of writing it are several different inputs as far as the model is concerned.

How many ways does your own evaluation set write up a single fact?

▶ Full piece: https://blog.pebblous.ai/blog/sense-and-sensitivity-llm-triage-benchmark/en/

#Pebblous #SenseAndSensitivity #MIT #HealthcareAI #AIReadyData #DataClinic #DataQuality
