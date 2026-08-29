# SNS 홍보 글: 라벨러의 정치 성향에 따라 갈린 AI 동반자 해로움 라벨

> 소스: blog/ai-companion-harm-label-annotator-disagreement/ko/index.html
> 생성일: 2026-08-30
> URL (KO): https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/ko/
> URL (EN): https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

AI 동반자와 나눈 대화에서 무엇이 해로운 말인지 세 사람에게 따로 물었더니, 판정이 일치한 경우는 40.41%였습니다.

싱가포르 난양공대와 싱가포르국립대 연구진이 레플리카 실사용 대화 2,111건을 모아 AI 발화마다 13개 해로움 범주와 해로움 없음 중 하나를 붙인 CompanionHarm 벤치마크입니다. 셋이 전부 다른 라벨을 준 1,297건은 다수결이 서지 않아 데이터셋에서 빠졌습니다.

불일치에는 결이 있었습니다. 대화 뒤쪽에 놓인 긴 발화일수록 판정이 흩어졌고, 노골적인 해로움 표현이 들어 있으면 오히려 합의가 쉬웠습니다. 무시나 통제처럼 앞의 대화가 쌓여야 성립하는 해로움이 정확히 그 흔들리는 자리에 있습니다.

인구통계 다섯 가지 중에서는 정당만 남았습니다. 공화당 소속으로 답한 라벨러가 무소속 라벨러보다 혼자 다른 라벨을 줄 오즈가 1.47배 높았고, 나이와 성별과 인종과 학력은 관련이 없었습니다. 논문은 이것이 라벨에서 관찰된 패턴이지 인과가 아니며, 이 자료로 레플리카에서 해로움이 얼마나 흔한지 추정할 수는 없다고 못 박아 둡니다.

연구진은 다수결로 정리한 라벨과 라벨러 세 명의 판정을 그대로 담은 데이터를 둘 다 공개했습니다. 안전 필터에 먹일 정답을 어느 벌에서 가져오느냐가 무엇이 남고 무엇이 사라지는지를 정합니다.

▶ 전문: https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #CompanionHarm #Replika #AI동반자 #AI안전 #데이터라벨링 #LLM벤치마크

---

## LinkedIn (EN)

Three annotators were asked, separately, whether anything in an AI companion conversation was harmful. They agreed 40.41% of the time.

The dataset is CompanionHarm, built by researchers at NTU and NUS from 2,111 real Replika conversations, with every AI utterance assigned one of thirteen harm categories or none at all. The 1,297 utterances that drew three different labels had no majority and were dropped from the benchmark.

The disagreement had a shape. Utterances placed late in a conversation, and long ones, pulled the three judgments apart; an unmistakably explicit harm word pulled them back together. Which means the shaky ground is exactly where companion-specific harms like neglect and control live, since those only take form once the earlier turns have accumulated.

Of five demographic variables, political party was the only one left standing. Annotators who identified as Republican had 1.47 times the odds of standing alone on a label compared with independents, while age, gender, race and education showed nothing. The paper is explicit that this describes a pattern in the annotations rather than a cause, and that the data cannot be used to estimate how common harm is on Replika.

The team released both the majority-vote labels and the raw judgments of all three annotators. Which of those two files you pull decides what your safety filter learns and what it never sees.

▶ Read: https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #CompanionHarm #Replika #AICompanion #AISafety #DataAnnotation #LLMBenchmark

---

## Twitter/X (KO)

AI 동반자 대화에서 무엇이 해로운 말인지 세 사람에게 따로 물었습니다. 셋의 판정이 같았던 경우는 40.41%였습니다.

나이도 성별도 인종도 학력도 불일치와 무관했고, 라벨러의 정당만 남았습니다. 안전 필터가 배울 정답의 안쪽 사정입니다.

https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/ko/

#페블러스 #CompanionHarm #Replika #AI안전

---

## Twitter/X (EN)

Three annotators judged the same AI companion conversations for harm. They agreed 40.41% of the time.

Age, gender, race and education tracked with nothing. Political party was the one that remained. This is the inside of the ground truth a safety filter learns from.

https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/en/

#Pebblous #CompanionHarm #Replika #AISafety

---

## Facebook (KO)

낯선 사람 세 명에게 같은 대화 한 토막을 보여 주고, 여기 해로운 말이 있는지 물었다고 해 봅니다.

셋의 답이 같았던 경우는 열에 넷이었습니다.

싱가포르 연구진이 실제로 해 본 일입니다. 레플리카 이용자들이 레딧에 스크린샷으로 올려 둔 대화 2,111건을 모아, AI가 한 말마다 무시인지 통제인지 조작인지, 아니면 아무 문제 없는 말인지를 세 사람이 따로 골랐습니다.

어디서 갈렸는지에는 결이 있었습니다.

대화 뒤쪽에 놓인 말일수록, 긴 말일수록 판정이 흩어졌습니다. 반대로 누가 봐도 험한 단어가 들어 있으면 셋의 답이 쉽게 모였습니다.

그러니까 판정이 흩어진 대목은 라벨러가 대충 본 곳이 아니라, 앞의 대화를 쌓아야 뜻이 정해지는 자리였습니다.

연구진이 인구통계 다섯 가지를 넣고 따져 보니 나이도 성별도 인종도 학력도 조용했고, 정당 하나만 남았습니다. 다만 논문은 이것이 라벨에서 관찰된 패턴이지 원인은 아니라고 분명히 적어 둡니다.

제가 오래 붙잡고 있는 건 그다음입니다.

세 사람의 판정을 다수결로 눌러 하나로 만들면 정답표는 깨끗해집니다. 두 사람만 동의한 3,657건이 만장일치 항목과 똑같은 얼굴로 앉고, 셋이 다 갈린 1,297건은 아예 사라집니다. 하필 그 1,297건이 사람에게 가장 어려웠던 발화들입니다.

"그러면 나중에 무엇으로 '모델이 틀린 자리'와 '사람도 갈리는 자리'를 구분합니까?"

세 벌의 판정을 그대로 보관하는 값은 저장 공간뿐입니다. 어려운 쪽은 세 벌을 하나로 누르는 시점을 수집 직후가 아니라 쓰는 순간까지 미루도록 파이프라인을 짜는 일입니다. 데이터 품질을 다 끝난 뒤의 검사가 아니라 흐름 안의 눈금으로 두려는 저희 일도 결국 같은 질문 앞에 서 있습니다.

정답이라 부르며 모델에게 먹이는 그 파일 안에, 사람들이 갈렸던 흔적은 어디에 남아 있습니까.

https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/ko/

#페블러스 #데이터클리닉 #데이터품질 #CompanionHarm #Replika #AI안전

---

## Facebook (EN)

Imagine handing three strangers the same snippet of a conversation and asking whether anything in it is harmful.

All three landed on the same answer four times out of ten.

A team in Singapore ran exactly that. They gathered 2,111 Replika conversations that users had screenshotted and posted to Reddit, and for every line the AI spoke, three annotators independently chose one label: neglect, control, manipulation, one of thirteen harms, or nothing wrong at all.

The splits had a shape.

The later a line sat in a conversation, and the longer it ran, the further the three drifted apart. Put an unmistakably ugly word in it and they converged again.

Which means the hard cases were never the careless ones. They were the lines whose meaning only settles once you have carried the whole conversation with you.

When the researchers tested five demographics against that drift, age, gender, race and education stayed quiet, and political party was the one that remained. The paper is careful to call this a pattern in the annotations rather than a cause.

What I keep turning over is what comes after.

Collapse three judgments into one by majority vote and the answer key looks clean. The 3,657 items where only two agreed now wear the same face as the unanimous ones, and the 1,297 where all three diverged disappear altogether. Those 1,297 were the utterances people found hardest.

"So what will later tell a place where the model was wrong from a place where people themselves disagree?"

Keeping all three judgments costs nothing but disk. The hard part is designing a pipeline that defers the moment of collapsing them, from collection time to the moment someone actually uses the labels. Our own work on data quality keeps arriving at the same spot: a measurement inside the flow rather than a report written once everything is over.

Somewhere inside the file we call ground truth, where did the disagreement go?

https://blog.pebblous.ai/blog/ai-companion-harm-label-annotator-disagreement/en/

#Pebblous #DataClinic #DataQuality #CompanionHarm #Replika #AISafety
