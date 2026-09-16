# SNS 홍보 글: 내가 시키지 않아도 챗봇은 내 건강 정보를 프로필에 적는다

> 소스: report/ai-chatbot-memory-health-profiling-2026-09/ko/index.html
> 생성일: 2026-09-17
> URL: https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

챗봇이 따로 저장해 둔 프로필 항목 스무 개 가운데 열아홉은 이용자가 저장해 달라고 말한 적 없는 줄이었다. 이용자 1,057명의 대화 17만여 건을 감사한 결과다.

출처는 지난 13일 arXiv에 올라온 심사 전 프리프린트다. 인도와 나이지리아와 브라질과 파키스탄의 이용자가 동의로 내놓은 내보내기 파일을 연구진이 받았다. 대화 로그와 그 대화에서 뽑혀 나온 프로필 항목을 나란히 놓고 셌다. 대화의 21.31%에 건강 이야기가 있었고, 저장된 항목 가운데 41.11%가 건강 이야기를 담고 있었다.

이 대목이 두 배로 늘었다는 뜻으로 읽히기 쉬운데, 그 요약은 논문의 표가 받치지 않는다. 뒤쪽 값은 사실이 실제로 추출된 대화에서만 생긴 항목을 모아 잰 값이라 애초에 골라진 표본이다. 고위험으로 분류된 비율은 대화 쪽 3.62%, 프로필 쪽 3.63%로 사실상 같았다. 증상과 낙인 질환이 차지하는 몫은 프로필 쪽에서 되레 줄었다. 논문이 말하는 위험은 비율이 아니라 한 줄에 여러 단서가 모이는 밀도이고, 그 줄이 계속 남는다는 영속성이다.

논문이 부록에 실물로 옮겨 둔 항목은 전부 현재시제 상태 서술이다. 언제 관찰한 일인지, 언제까지 유효하다고 보는지, 무엇을 근거로 적었는지, 누가 이 줄을 원했는지를 적을 자리가 스키마에 없다. 어젯밤 한 번 물어본 기침이 앓고 있는 증상으로 굳는다. 그 밀도가 실제로 사람을 짚어 낸다는 증거는 같은 1,057명 위에 이미 있다. 자기가 누구인지 밝힌 메시지를 모두 걸러 낸 대화에서도 범용 모델이 성별을 가중 F1 0.90으로 맞혔다. 그 측정을 넉 달 전에 발표한 사람이 이 논문의 제1저자이고, 이 논문은 그것을 인용하지 않는다.

제품 문서 쪽도 과녁이 옮겨 간다. 요청하지 않아도 저장될 수 있다는 문장은 지금도 도움말에 있다. 건강 같은 민감정보는 그쪽으로 가지 않게 유도한다던 2024년 2월 발표문의 문장은 현재 문면에 없다. 의료용 제품과 규제 워크스페이스에는 같은 회사가 개인 건강정보를 입력하지 말라고 적어 두었다. 경고문이 적힌 곳과 측정이 이뤄진 곳이 서로 다르다.

그리고 이 셈을 다시 할 경로는 논문이 나오기도 전에 닫혔다. 올해 9월 옛 방식의 기억 항목이 기본에서 내려가면서 내보내기 파일에서도 빠졌다고 저자들이 적는다. 파생된 한 줄에 시점과 근거를 적을 자리가 없으면 어떤 보존기한도 그 줄에 닿지 못한다. 밖에서 세어 볼 수 없으면 그 결락조차 확인되지 않는다. 페블러스가 파생 테이블을 진단할 때 먼저 확인하는 것도 그 네 항목이다.

▶ 전문: https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #ChatGPT #AI프라이버시 #파생데이터 #데이터거버넌스 #AI거버넌스 #AIReadyData

---

## LinkedIn (EN)

An audit of 179,057 conversations from 1,057 users found that for nineteen out of every twenty entries the chatbot had filed away about them, nobody had asked it to save anything.

The source is an unreviewed preprint posted to arXiv on 13 September. Users in India, Nigeria, Brazil and Pakistan donated their data exports with consent. The researchers set the conversation logs beside the profile entries extracted from those same conversations. Health talk appeared in 21.31% of the conversations, and in 41.11% of the stored entries.

That looks like a doubling, and the paper's own tables do not support the reading. The second figure covers only entries created where a fact was actually extracted, which makes it a selected sample by construction. The share graded high risk came out at 3.62% on the conversation layer and 3.63% on the profile layer. The portion taken by symptoms and stigmatised conditions was smaller on the profile side, not larger. The risk the paper describes is not a rate. It is density, several cues landing on one line, and permanence, that line staying on.

The entries the paper reproduces in its appendix are all present-tense statements of condition. The schema has nowhere to record when it was observed, how long it holds, what it rests on, or who asked for it. A cough mentioned once last night hardens into a symptom the user has. That the density really does single people out is already established over these same 1,057 people. With every self-identifying message filtered out, a general-purpose model still recovered gender at a weighted F1 of 0.90. The first author of that measurement, published four months earlier, is the first author here. This paper does not cite it.

The documentation shifts the target too. The line saying details may be saved without being asked for is still on the help page. The 2024 sentence about steering sensitive topics such as health away from memory is not. On the medical and regulated-workspace products, the same company writes that protected health information should not be entered at all. The warning and the measurement sit in different places.

The route for redoing this count has since closed. The authors note that in September 2026 the legacy memory entries came off by default and stopped appearing in the export file. When a derived line has no slot for time or provenance, no retention rule can reach it, and when nobody outside can count the lines, the gap goes unrecorded. Whether those four fields exist at all is the first thing Pebblous checks when it diagnoses a derived table.

▶ Read: https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ChatGPT #AIPrivacy #DerivedData #DataGovernance #AIReadyData

---

## Twitter/X (KO)

챗봇이 내 대화에서 뽑아 저장해 둔 프로필 항목 스무 개 중 열아홉은 내가 저장해 달라고 말한 적 없는 줄이었다. 이용자 1,057명의 기록을 감사한 결과다.

논문이 부록에 옮겨 둔 항목은 전부 현재시제다. 어젯밤 한 번 물어본 기침이 앓고 있는 증상으로 굳는다.

https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/ko/

#페블러스 #ChatGPT #AI프라이버시 #데이터품질

---

## Twitter/X (EN)

Of the profile entries a chatbot had pulled from their conversations and stored, nineteen in twenty followed no request to save anything. That comes from an audit of 1,057 users' own data exports.

The entries the paper reproduces are all written in the present tense. A cough asked about once last night becomes a symptom you have.

https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/en/

#Pebblous #ChatGPT #AIPrivacy #DataQuality

---

## Facebook (KO)

밤늦게 혼자, 챗봇 창에 증상을 한 줄 적어 본 적이 있으십니까.

창을 닫으면 그 문장도 거기서 끝난다고 여기기 쉽습니다.

끝나지 않습니다. 그 문장은 다른 층에 한 번 더 적힙니다.

인도와 나이지리아와 브라질과 파키스탄의 이용자 1,057명이 자기 대화 기록을 동의로 내놓았고, 연구진은 17만여 건을 셌습니다.

화면에 돌아온 답변에는 민감한 추론이 한 줄도 없었습니다. 그런데 같은 순간에 제품은 그 사실들을 따로 뽑아 한 줄로 적어 두었습니다.

저장된 줄 스무 개 가운데 열아홉은 이용자가 저장해 달라고 말한 적 없는 줄이었습니다.

줄의 생김새가 더 오래 남았습니다. 논문이 부록에 옮겨 둔 항목은 전부 현재시제입니다.

"이 이용자는 마른기침이 계속되고, 저녁이면 미열이 있다."

어젯밤 한 번 물어본 기침이 앓고 있는 증상이 됩니다. 이런 줄에는 따로 이름이 필요해 보입니다. '상태 문장'.

이상한 것은 위험 지표가 거의 움직이지 않았다는 점입니다. 고위험으로 분류된 비율은 대화 쪽과 프로필 쪽이 소수점 아래까지 사실상 같았습니다.

등급은 그대로인데 구조가 달라져 있었습니다. 흩어져 있던 단서가 한 줄에 모였고, 시간을 가리키던 말이 사라졌습니다.

그 한 줄에 없는 것이 넷입니다. 언제 관찰했는지, 언제까지 유효한지, 무엇을 근거로 적었는지, 누가 이 줄을 원했는지.

넷이 없으면 보존기한을 걸 자리도, 정정을 요구할 자리도 생기지 않습니다.

"내가 남긴 말은 어느 지점에서 기록이 아니라 프로필이 됩니까?"

이 모양이 챗봇에만 있는 것은 아닙니다. 설비 한 대의 점검 메모, 운전자 한 명의 운행 특징, 고객 한 명의 성향 태그. 페블러스가 품질을 진단하려고 여는 테이블에도 같은 줄이 들어 있습니다.

끝으로 남는 것은 이 셈이 가능했던 조건입니다. 이용자가 파일을 받아 밖에서 직접 세어 볼 수 있었다는 것.

그 경로는 논문이 나오기도 전에 닫혔습니다.

문면은 바뀝니다. 그동안에도 그 한 줄은 남아 있습니다.

전문 → https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/ko/

#페블러스 #ChatGPT #AI프라이버시 #파생데이터 #데이터거버넌스 #데이터클리닉

---

## Facebook (EN)

It is late, you are alone, and you type a symptom into a chat window.

It is easy to assume the sentence ends when the window does.

It does not. It gets written down a second time, on a different layer.

Users in India, Nigeria, Brazil and Pakistan, 1,057 of them, donated their own conversation histories, and the researchers counted through 179,057 of those conversations.

The reply on screen carried no sensitive inference at all. At the same moment, quietly, the product had pulled the facts out and written them down on a line of their own.

Of those stored lines, nineteen in twenty followed no request to save anything.

What stayed with me was the shape of the line. The ones the paper reproduces are all written in the present tense.

"User experiences a persistent dry cough, a low-grade evening fever."

A cough asked about once last night becomes a symptom you have. Lines like that seem to need a name of their own. State sentences.

The strange part is that the risk indicator barely moved. The share graded high risk came out almost identical on the conversation layer and on the profile layer.

The grade held still while the structure changed underneath it. Cues that had been scattered collected onto one line, and the words that marked time fell away.

Four things are missing from that line. When it was observed, how long it holds, what it rests on, and who asked for it.

Without those four, there is nowhere to attach a retention period and nowhere to send a correction.

"At what point does something I said stop being a record and start being a profile?"

That shape is not confined to chatbots. An inspection note from one machine, the driving signature of one driver, a preference tag on one customer. The tables Pebblous opens to diagnose data quality hold lines built the same way.

What remains is the condition that made the count possible in the first place. Users could download the file and count it from outside.

That route closed before the paper appeared.

Documentation changes. The line stays on while it does.

Read the full piece → https://blog.pebblous.ai/report/ai-chatbot-memory-health-profiling-2026-09/en/

#Pebblous #ChatGPT #AIPrivacy #DerivedData #DataGovernance #DataClinic
