# SNS 홍보 글: AI가 합쳐 준 보고서, 출처는 어디에도 남지 않는다

> 소스: blog/military-ai-hallucination-provenance/ko/index.html
> 생성일: 2026-09-21
> URL: https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

군용기가 이미 떠 있는 상태에서 미군 작전 하나가 되돌려졌습니다. 출동의 근거가 된 정보보고서를 AI 챗봇이 만들었고, 그 결론이 틀렸다는 사실이 실행 직전에 드러났기 때문입니다.

CNN이 9월 18일 단독으로 전한 내용입니다. 2026년 봄, 미 특수전사령부 분석관 한 사람이 공개출처 정보와 정부 데이터베이스의 기밀 신호정보를 한 챗봇에 함께 넣고 종합을 맡겼습니다. 챗봇은 중동 해상의 중국 선박 한 척이 이란으로 가는 핵무기 프로그램 부품을 싣고 있다고 답했습니다. 분석관은 같은 챗봇을 한 번 더 불러 그 답을 지휘부가 늘 받아 보는 정식 정보보고서 서식으로 만들었고, 문서는 손질 없이 지휘 채널로 올라갔습니다. 폭격이 아니라 배에 올라 화물을 확인하고 나포하려던 작전입니다.

이 사건에서 겹쳐 있는 지점은 둘입니다. 등급이 다른 두 자료를 같은 입력창에 넣는 순간, 결과 문장에는 어느 쪽에서 무엇을 가져왔는지가 남지 않습니다. 정보기관이 자료마다 출처 등급을 붙이고 보고서 문장마다 근거를 달아 온 관행이 도구를 바꾸면서 따라오지 않았습니다. 여기에 두 번째 호출이 그 문장에 서식을 입혔습니다. 서식은 원래 수집과 검토를 거쳤다는 신호였는데, 몇 초 만에 복제되면서 신호와 실체의 연결이 끊어졌습니다.

모델이 모르겠다고 답하지 않은 이유는 최근 연구가 따로 설명합니다. 오픈AI 연구진과 조지아공대 벰팔라가 2025년 9월에 낸 「Why Language Models Hallucinate」는 채점표가 맞음과 틀림 둘로만 나뉘면 모를 때 그럴듯하게 답하는 쪽의 기대 점수가 더 높다고 정리했습니다. 확신하는 습관은 그 채점표에서 나옵니다.

도입 속도는 그 반대편입니다. 국방부 공용 플랫폼 GenAI.mil의 이용자는 2025년 12월 8만 명 남짓에서 2026년 5월 150만 명이 됐고, 6개 군 가운데 5개 군이 기존 체계 대신 이 플랫폼을 기본 도구로 삼았습니다. 이번 사건 같은 작업을 지금 백만 명 단위가 매일 합니다.

한계도 함께 읽어야 합니다. 사건 경과는 익명 취재원 네 사람에게 기댄 CNN 단독 보도 하나에서 나왔고, 어떤 도구가 쓰였는지도 그 배에 실제로 무엇이 실려 있었는지도 공개되지 않았습니다. 비슷한 오류가 정보 공동체 전반에 있다는 관계자 진술 역시 구체적 사례 없이 일반적 서술에 머뭅니다.

그럼에도 확인된 사실 하나는 분명합니다. AI가 종합한 문서가 검증 단계를 통과하지 않고 실행 직전까지 갔고, 그 문서 안에서 출처를 되짚을 방법은 없었습니다. 페블러스가 AI-Ready Data를 이야기할 때 데이터 계보를 앞에 두는 까닭입니다. 모델이 좋아질수록 결과물은 매끄러워지고, 매끄러운 결과물일수록 되짚을 자리가 적습니다.

▶ 전문: https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터계보 #AI할루시네이션 #AI거버넌스 #군사AI #GenAImil #CNN

---

## LinkedIn (EN)

A U.S. military operation was called back with aircraft already in the air. The intelligence report behind it had been written by an AI chatbot, and the error surfaced only in the last minutes before execution.

CNN reported the episode exclusively on 18 September. In the spring of 2026, an analyst at U.S. Special Operations Command fed open-source material and classified signals intelligence from government databases into a single chatbot and asked it to synthesize them. The chatbot answered that a Chinese ship in the Middle East was carrying components for a nuclear weapons program bound for Iran. The analyst then called the same chatbot again to cast that answer in the format of a standard intelligence report, and the document went up the command channels untouched. The mission was not a strike; personnel were to board the ship, inspect the cargo and seize it.

Two things sit on top of each other here. The moment material of different classifications enters the same prompt, the sentence that comes out carries no record of which source gave what. The practice of grading sources and footnoting every line of a report did not travel with the change of tools. The second call then wrapped that sentence in a format. A format used to be the signal that collection and review had happened; once it can be copied in seconds, the signal comes loose from the thing it stood for.

Why the model did not say it was unsure has its own explanation. "Why Language Models Hallucinate," published in September 2025 by OpenAI researchers with Santosh Vempala of Georgia Tech, argues that when a scoring scheme has only right and wrong, guessing plausibly beats admitting ignorance on expected score. The habit of confidence comes from the scoreboard.

Adoption is moving the other way. GenAI.mil, the Defense Department's shared platform, went from roughly 80,000 users at launch in December 2025 to 1.5 million by May 2026, and five of the six service branches have made it their default over existing systems. Work of the kind described here now happens daily at that scale.

The limits belong next to all of it. The account rests on one CNN exclusive sourced to four anonymous officials. Neither the tool used nor the ship's actual cargo has been disclosed. Officials say errors of this type are appearing across the intelligence community, but they named no other case and no dates, so that statement stays general.

One fact survives the caveats. A document synthesized by AI reached the last minute before execution without clearing a verification step, and nothing inside it could be traced back to a source. That is why Pebblous puts data provenance first when it talks about AI-Ready Data. The better the model gets, the smoother the output, and the smoother the output, the less of it there is to check.

▶ Read: https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataProvenance #AIHallucination #AIGovernance #MilitaryAI #GenAImil #CNN

---

## Twitter/X (KO)

미 특수전사령부 분석관이 공개출처 정보와 기밀 신호정보를 한 챗봇에 함께 넣자, 챗봇은 중동 해상의 중국 선박이 이란행 핵무기 부품을 싣고 있다고 답했습니다. 같은 챗봇이 그 답에 정식 보고서 서식을 입혔고, 문서는 손질 없이 지휘 채널로 올라갔습니다.

병력이 승선을 기다리고 군용기가 뜬 뒤에야 오류가 드러나 작전이 멈췄습니다. 그 문서에 남은 출처 표식은 0건입니다.

https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/ko/

#페블러스 #데이터품질 #AI할루시네이션 #데이터계보

---

## Twitter/X (EN)

An analyst at U.S. Special Operations Command put open-source material and classified signals intelligence into one chatbot. It answered that a Chinese ship was carrying nuclear weapons components to Iran. The same chatbot then cast that answer as a formal intelligence report, and the document went up the chain untouched.

The error surfaced with a boarding party waiting and aircraft already airborne. Nothing in the document could be traced back to a source.

https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/en/

#Pebblous #DataQuality #AIHallucination #DataProvenance

---

## Facebook (KO)

군용기는 이미 떠 있었습니다.

바다 위 중국 선박 한 척에 오를 준비를 마친 병력도 있었습니다.

작전이 멈춘 것은 그 직전입니다. 관계자들이 출동의 근거가 된 정보보고서를 그제서야 다시 파고들었고, 그 문서가 AI의 도움으로 만들어졌다는 것과 화물이 잘못 식별됐다는 것을 함께 확인했습니다. CNN이 9월 18일 단독으로 전한 2026년 봄의 일입니다.

보고서를 만든 사람은 미 특수전사령부 분석관 한 사람입니다. 분석관이 한 일은 요즘 사무실에서 흔히 보는 작업 그대로입니다. 공개출처 정보와 정부 데이터베이스에서 꺼낸 기밀 신호정보를 한 챗봇에 함께 넣고 정리를 맡겼습니다.

사건의 성격을 바꾼 것은 그다음 한 번의 요청입니다.

분석관은 같은 창을 다시 열었습니다. 이번에 맡긴 것은 판단이 아니라 서식입니다. 지휘부가 늘 받아 보는 정식 보고서 모양으로 만들어 달라고 했고, 나온 문서는 손질 없이 위로 올라갔습니다.

서식은 원래 무언가를 보증하던 표시였습니다. 정해진 양식을 갖췄다는 것은 규정대로 자료를 모으고, 출처 등급을 매기고, 상급자 검토를 거쳤다는 뜻으로 읽혔습니다. 그 양식이 몇 초 만에 복제되는 지금도 받는 쪽은 여전히 서식을 보고 절차를 읽습니다.

"이 문장은 어느 자료에서 나온 것입니까?"

그 보고서는 이 물음에 답할 수 없는 상태로 지휘 채널을 올라갔습니다. 공개 자료와 기밀 자료가 같은 입력창에서 한 문장으로 합쳐지는 동안, 어느 쪽에서 무엇을 가져왔는지가 문장에 남지 않았기 때문입니다.

페블러스가 데이터를 볼 때 값이 맞는지보다 먼저 확인하는 것이 그 자리입니다. 어떤 값이 어디서 나와 어떤 처리를 거쳐 지금 여기에 와 있는지. 그 기록이 붙어 있으면 결과가 이상할 때 어디를 열어 볼지 알 수 있고, 없으면 전체를 믿거나 전체를 버리는 두 선택지만 남습니다.

바쁜 조직은 대체로 믿는 쪽을 고릅니다.

그 보고서에는 분석관의 이름이 적혀 있었습니다. 체계가 신뢰 수준을 정하면서 본 것도 그 이름입니다.

https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI할루시네이션 #데이터계보 #군사AI

---

## Facebook (EN)

The aircraft were already in the air.

Armed personnel were standing by to board a Chinese ship in the Middle East.

The operation stopped just short of that. Officials went back into the intelligence report behind it and found two things at once: the document had been produced with the help of AI, and the cargo had been identified wrong. CNN reported it exclusively on 18 September. It happened in the spring of 2026.

The report came from a single analyst at U.S. Special Operations Command. The work itself looks like an ordinary afternoon in a great many offices. Open-source material and classified signals intelligence pulled from government databases went into one chatbot, with a request to pull them together.

What changed the nature of this episode was the request that came after.

The analyst opened the same window again. This time the request was not for judgment but for a format: the standard intelligence report that commanders receive every day. The document that came back went upward untouched.

A format used to certify something. Meeting the required form meant the material had been collected by the rules, graded for source reliability, and reviewed by someone senior. The form can now be reproduced in seconds, and the people receiving it still read procedure into it.

"Which source did this sentence come from?"

The report climbed the command channels unable to answer that. Open material and classified material had been merged into one sentence inside the same prompt, and nothing in the sentence recorded which side had supplied what.

Before asking whether a number is correct, Pebblous asks where it stands in that record: where a value came from, what was done to it, how it arrived here. With that record, an odd result tells you which door to open. Without it, there are two options left, trusting the whole thing or discarding the whole thing.

A busy organization usually trusts it.

The analyst's name was on that report. It was the name the system read when it decided how much to believe.

https://blog.pebblous.ai/blog/military-ai-hallucination-provenance/en/

#Pebblous #DataClinic #DataQuality #AIHallucination #DataProvenance #MilitaryAI
