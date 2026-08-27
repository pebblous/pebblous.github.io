# SNS 홍보 글: 나이 든 목소리에 통화를 더 오래 끈 보이스피싱 조직

> 소스: blog/scam-call-honeypot-age-experiment/
> 생성일: 2026-08-27
> URL: https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사기 전화를 받는 쪽의 겉보기 나이를 열 살 올리면 사기범이 통화에 매달리는 시간은 약 15% 늘어나는데, 요구하는 항목은 한 가지도 달라지지 않습니다.

며칠 전 arXiv에 올라온 프리프린트 한 편이 이 비교를 관측이 아니라 실험으로 만들었습니다. scam.ai라는 팀이 실제 사람이 한 번도 쓴 적 없는 전화번호를 미국 리드 판매 시장에 흘려 두고, 걸려 오는 전화를 AI 음성 에이전트가 받아 54일 동안 1만 211통을 녹음하고 전사했습니다.

마지막 3주에는 미끼 신원 열 개를 만들어 각각 별도의 전화선에 붙이고, 견적 신청 폼을 제출할 때마다 균등 무작위로 배정했습니다. 사기 조직이 누구를 만나게 될지가 통화가 존재하기도 전에 정해진 셈입니다.

그렇게 얻은 1,823통에서 통화 턴은 신원의 나이를 따라 곧게 올라갔습니다. 26세 신원이 통화당 평균 33턴을 받아 냈다면, 가장 나이 든 신원은 71턴이었습니다.

그런데 민감정보 요구까지 간 통화의 비율은 26.3%로 신원의 나이와 아무 관계가 없었습니다. 사회보장번호와 생년월일을 포함해 아홉 개 요청 유형 가운데 나이와 함께 움직인 것은 하나도 없었습니다.

방어 쪽에 쓸 만한 결과도 하나 붙어 있습니다. 사기범의 첫 마디만 보고 이 통화가 민감정보 요구까지 갈지 맞히는 과제에서 TF-IDF 단어 가방 분류기가 ROC-AUC 0.72를 냈고, 여덟째 줄까지 들으면 0.87입니다. 같은 데이터로 미세조정한 소형 언어모델은 0.82에 그쳤습니다.

저자들이 먼저 그어 둔 선도 있습니다. 처치군이 열 개뿐이라 미묘한 효과에는 검정력이 부족하고, 표본은 영어권 미국 리드 시장에 치우쳐 있으며, 아직 동료심사를 거치지 않은 프리프린트입니다. 젊은 신원이 면제받은 것도 아닙니다. 같은 것을 같은 비율로 요구받았고 통화가 더 짧았을 뿐입니다.

이 논문에서 방어용 데이터는 관측의 부산물이 아니라 설계의 산물입니다. 신원을 무작위로 배정하겠다는 결정 하나가 쌓이기만 하던 통화 로그를 인과를 물을 수 있는 데이터로 바꿔 놓았습니다. 페블러스가 데이터 품질을 진단할 때 값의 정확성만큼 자주 되묻는 것도 그 데이터가 어떤 절차로 만들어졌는가입니다.

▶ 전문: https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #보이스피싱 #AI허니팟 #사기탐지 #음성에이전트 #AI안전 #arXiv

---

## LinkedIn (EN)

Make the person picking up the phone sound ten years older and a scam caller will stay on the line roughly 15 percent longer, while asking for exactly the same things.

A preprint posted to arXiv a few days ago turns that comparison from an observation into an experiment. A team at scam.ai seeded phone numbers that no real person had ever used into the US lead-generation market, had an AI voice agent answer whatever came back, and recorded and transcribed 10,211 calls over 54 days.

For the final three weeks, the team built ten decoy identities, gave each its own line, and drew one at random every time a quote request was submitted. Which persona a fraud operation would reach was settled weeks before any call existed.

Across the 1,823 calls in that window, the number of scam-operator turns climbed steadily with the age of the persona. The 26-year-old identity drew an average of 33 turns per call. The oldest drew 71.

The share of calls that reached a request for sensitive information did not move at all. It sat at 26.3 percent, and none of the nine individual request types, Social Security number and date of birth among them, tracked age.

There is a usable defensive result attached. Asked to predict from a caller's opening line alone whether a call would end in a request for sensitive information, a TF-IDF bag-of-words classifier reached 0.72 ROC-AUC, rising to 0.87 by the eighth line. A small language model fine-tuned on the same data reached 0.82.

The authors draw the limits themselves. Ten treatment arms leave little power for subtle effects, the sample skews toward English-language US lead markets, and the work has not been peer reviewed. Nor were younger identities spared. They were asked for the same things at the same rate, in calls that were merely shorter.

In this study, defensive data is not a byproduct of observation but a product of design. One decision, to assign identities at random, turned an accumulating pile of call logs into data you can ask causal questions of. When we diagnose data quality at Pebblous, the question we return to as often as whether a value is correct is how the data came to exist.

▶ Read: https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ScamCalls #AIHoneypot #FraudDetection #VoiceAgents #AISafety #arXiv

---

## Twitter/X (KO)

AI 음성 에이전트에게 사기 전화를 받게 하고 미끼 신원 열 개를 무작위 배정한 연구가 arXiv에 올라왔습니다. 나이 든 목소리일수록 사기범은 통화에 더 오래 매달렸지만, 민감정보를 요구하는 비율은 26.3%로 나이와 무관했습니다.

늘어난 것은 시간뿐이었습니다.

https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/ko/

#페블러스 #데이터품질 #AI허니팟 #arXiv

---

## Twitter/X (EN)

A new arXiv study had an AI voice agent answer scam calls, then assigned ten decoy identities at random. Older-sounding personas held scam operators on the line far longer, yet the share of calls reaching a request for sensitive information held flat at 26.3 percent.

Only the time changed.

https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/en/

#Pebblous #DataQuality #AIHoneypot #arXiv

---

## Facebook (KO)

"안타깝지만 저희가 고객님 신용 보고서를 조회할 방법은 사회보장번호밖에 없습니다. 그것뿐이에요."

전화를 건 사람은 자동차보험 견적을 신청한 소비자에게 연락했다고 믿고 있었습니다.

신청서에 적힌 이름도 생년월일도 실존하지 않는 사람의 것이었고, 번호를 말하기를 망설이던 목소리는 언어모델이었습니다.

며칠 전 arXiv에 올라온 프리프린트에 실린 통화 한 토막입니다. scam.ai라는 팀이 54일 동안 이런 전화 1만 211통을 받아 냈습니다.

전화 사기 연구는 대체로 두 자리 중 하나에 서 왔습니다. 신고 데이터베이스는 피해가 일어났다는 사실과 금액을 남기고, 수동형 허니팟은 어떤 번호가 몇 번 걸었는지를 남깁니다. 정작 그 안에서 무슨 말이 오갔는지는 거의 남지 않습니다. 전화를 받지 않으면 대사가 남지 않으니까요.

이 팀이 만든 것은 '응답하는 미끼'였습니다. 견적 신청 폼에 자기 번호를 직접 집어넣어 리드 판매 시장에 흘려 두고, 걸려 온 전화를 AI 에이전트가 받아 최대한 오래 붙잡아 둡니다. 상대의 말을 전부 받아 주고, 질문으로 시간을 끌고, 먼저 끊는 법이 없습니다.

여기까지가 관측입니다. 이 논문이 다른 허니팟 연구와 갈리는 자리는 그다음이었습니다.

연구진은 마지막 3주에 미끼 신원 열 개를 동시에 운영했습니다. 22세 Emma부터 62세 Declan까지. 이름과 목소리와 나이와 사는 도시가 다르고 나머지는 전부 같습니다. 신청 폼을 제출할 때마다 열 개 중 하나가 동전 던지기로 뽑혔습니다.

그러니까 이런 질문이 성립합니다.

"누가 받느냐에 따라 사기 전화의 내용이 달라지는가?"

답의 절반은 예상대로였습니다. 나이 든 신원일수록 사기범은 더 오래 매달렸습니다.

나머지 절반이 예상 밖이었습니다. 요구는 움직이지 않았습니다. 민감정보를 요구하는 데까지 간 비율도, 무엇을 요구하는지도 나이와 상관이 없었습니다. 참고로 코퍼스 전체에서 가장 자주 요구된 것은 카드번호가 아니라 집 주소와 생년월일이었습니다.

고령층 피해가 큰 이유를 이 논문은 그래서 다르게 읽습니다. 사기범이 노인에게 다른 요구를 하는 것이 아니라, 같은 요구를 훨씬 오래 한다는 것입니다.

페블러스가 데이터 품질을 진단하며 확인하는 것은 대개 값이 맞느냐입니다. 이 논문을 읽으며 다시 생각한 것은 그 앞의 질문이었습니다. 이 데이터는 어떤 절차로 만들어졌는가. 신원을 무작위로 배정하겠다는 결정 하나가, 쌓이기만 하던 통화 로그를 인과를 물을 수 있는 데이터로 바꿔 놓았습니다.

그리고 이 데이터 위에서 가장 잘 맞힌 것은 가장 작은 모델이었습니다. 통화 앞부분만 듣고 위험한 통화를 가려내는 과제에서, 몇 메가바이트에 들어가는 단어 가방 분류기가 미세조정한 언어모델을 앞섰습니다.

데이터를 어떻게 만들었느냐가 모델을 무엇으로 골랐느냐보다 앞에 있었습니다.

▸ https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/ko/

#페블러스 #보이스피싱 #AI허니팟 #사기탐지 #데이터품질 #DataClinic

---

## Facebook (EN)

"Unfortunately, the only way we can look up your credit report is by your social. That's the only way."

Whoever said it believed they had reached a consumer who had requested an auto insurance quote.

The name and the date of birth on that request belonged to nobody, and the voice hesitating on the other end, reluctant to read out the number, was a language model.

It is one exchange out of a preprint posted to arXiv a few days ago. A team at scam.ai answered 10,211 calls like it over 54 days.

Research on phone fraud has mostly stood in one of two places. Complaint databases preserve the fact that a loss occurred and how large it was. Passive telephony honeypots preserve which numbers dialed and how often. What was actually said inside those calls rarely survives, because a phone that is never answered leaves no dialogue.

What this team built was a decoy that answers. It submits its own numbers into online quote forms, lets them flow through the lead resale market, and has an AI agent pick up whatever comes back and hold it as long as possible. It believes everything it is told, buys time with questions, and never hangs up first.

That much is observation. Where this paper parts from other honeypot work comes next.

For the final three weeks, the researchers ran ten decoy identities at once. Emma at 22 through Declan at 62. Different names, voices, ages, and home cities, and everything else identical. Each time a form went out, one of the ten was drawn on a coin flip.

Which makes a question available.

"Does who picks up change what a scam call becomes?"

Half the answer went as expected. The older the identity, the longer the operators stayed.

The other half did not. The asks held still. Neither how often a call reached a request for sensitive information nor what was requested moved with age. For what it is worth, the most common ask across the whole corpus was not a card number but a home address and a date of birth.

So the paper reads the scale of elder fraud loss differently. Scammers are not asking older people for different things. They are asking for the same things, for much longer.

What we usually check when we diagnose data quality at Pebblous is whether a value is correct. Reading this paper sent me back to the question that sits in front of that one. How did this data come to exist? One decision, to assign the identities at random, turned an accumulating pile of call logs into data you can ask causal questions of.

And on that data, the model that predicted best was the smallest one. Asked to spot a dangerous call early in the conversation, a bag-of-words classifier that fits in a few megabytes came out ahead of the fine-tuned language model.

How the data was built sat in front of which model was chosen.

▸ https://blog.pebblous.ai/blog/scam-call-honeypot-age-experiment/en/

#Pebblous #ScamCalls #AIHoneypot #FraudDetection #DataQuality #DataClinic
