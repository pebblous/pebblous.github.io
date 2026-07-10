# SNS 홍보 글: 도구는 밝히고, 출처는 감춘다 — 마이크로소프트 MAI-Thinking-1과 AI 학습데이터 공개의 비대칭

> 소스: report/microsoft-mai-provenance-gap/
> 생성일: 2026-07-11
> URL(KO): https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/ko/
> URL(EN): https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

마이크로소프트가 새 추론 모델 MAI-Thinking-1의 데이터를 어떻게 씻고 걸렀는지 이례적으로 상세히 밝혔다. 웹 본문을 뽑은 Trafilatura, 100억 건이 넘는 웹 PDF를 처리한 Azure Document Intelligence OCR, 수식을 검증한 SymPy까지 이름을 댄 도구만 여덟 가지가 넘는다.

그런데 정작 어느 출판사와 저널이 그 코퍼스에 들어갔는지, 어떤 조건으로 계약했는지는 한 줄도 밝히지 않았다. 이유는 '사생활·법률·안전·경쟁'이었다. 정제 도구는 공개하고, 원료 출처는 감춘 것이다.

문제는 이 둘의 검증 가능성이 정반대라는 데 있다. 도구는 누구나 재현해 확인할 수 있지만, 어느 출판사와 얼마에 계약했는지는 벤더가 말하지 않으면 외부에서 알 길이 없다. 벤더가 가장 자신 있게 공개하는 층이, 하필 외부가 스스로 확인할 수 있는 유일한 층이다.

그래서 이건 취향이 아니라 조달의 문제다. AI 데이터를 사는 법무팀과 조달팀은 검증할 수 없는 출처를 사고, 저작권과 규제 리스크를 조용히 떠안는다. 조직의 77%가 자사 학습데이터 출처조차 추적하지 못한다는 조사도 있다.

밝힐 수 없어서가 아니다. Allen Institute의 OLMo는 조 단위 토큰 코퍼스의 데이터시트를 통째로 공개했고, 제3자 감사만으로 '라이선스 미상' 데이터셋 비율이 72%에서 30%로 줄었다. 밝히지 않기로 한 것이다.

AI 데이터를 살 때 진짜 물어야 할 질문은 "이게 깨끗한가"가 아니라 "어느 층까지 우리가 검증할 수 있는가"다.

▶ 전문: https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #학습데이터 #Microsoft #AI거버넌스 #EUAIAct

---

## LinkedIn (EN)

Microsoft did something unusual with its new reasoning model, MAI-Thinking-1: it named the tools it used to clean and filter its data. Trafilatura for web extraction, Azure Document Intelligence to OCR more than ten billion web PDFs, SymPy to verify equations. More than eight tools, listed by name.

What it would not name was where any of that data came from. Not one publisher, not one journal, not one vendor, and not one contract term. The reason given was four words: privacy, legal, safety, and competitive.

The catch is that these two disclosures sit on opposite sides of verifiability. Anyone can re-run a named tool and check it. No outsider can confirm which publisher a vendor licensed, or for how much, unless the vendor chooses to say. The layer Microsoft disclosed most confidently is the one the world could already verify. The layer buyers most need is the one only the vendor's word can reach.

That makes this a procurement problem, not a stylistic one. Legal and procurement teams end up buying provenance they cannot verify, quietly absorbing the copyright and regulatory risk. In one survey, 77% of organizations could not trace their own training data's provenance.

And it is a choice, not a limit. The Allen Institute's OLMo published the datasheets for a trillion-token corpus in full, and third-party audit alone cut the share of license-unknown datasets from 72% to 30%. The sources can be named. Microsoft decided not to.

▶ Read: https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #TrainingData #Microsoft #AIGovernance #EUAIAct

---

## Twitter/X (KO)

마이크로소프트 MAI-Thinking-1은 데이터 처리 도구를 여덟 가지 넘게 공개했다. 그런데 어느 출판사가 코퍼스에 들어갔는지는 '사생활·법률·경쟁'을 이유로 감췄다.

도구는 재현할 수 있고, 출처는 벤더의 말뿐이다. 검증할 수 없는 provenance를 산다는 건, 그 리스크를 사는 쪽이 떠안는다는 뜻이다.

▶ https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/ko/

#페블러스 #데이터품질 #Microsoft #학습데이터

---

## Twitter/X (EN)

Microsoft's MAI-Thinking-1 named eight-plus data-processing tools. But which publishers entered the corpus? Withheld, citing "privacy, legal, and competitive" reasons.

Tools you can reproduce. Sources are just the vendor's word. Buying provenance you can't verify means buying its risk.

▶ https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/en/

#Pebblous #DataQuality #Microsoft #TrainingData

---

## Facebook (KO)

기술보고서의 데이터 챕터에서 잠깐 감탄한 대목이 있었습니다.

마이크로소프트가 새 추론 모델을 공개하면서, 데이터를 어떻게 씻고 걸렀는지 도구 이름까지 하나하나 적어 두었더군요. 웹 문서는 어떤 추출기로 뽑았고, 수백억 건의 PDF는 어떤 OCR을 거쳤고, 수식은 무엇으로 풀어 확인했는지.

여기까지 읽으면 유례없이 투명한 공개처럼 보입니다.

그런데 페이지를 넘기다 조용한 침묵을 만났습니다. 그렇게 정성껏 씻어 낸 재료가 애초에 어디서 왔는지에 대해서는, 같은 보고서가 한 줄도 말하지 않았습니다. 어느 출판사, 어느 저널, 어느 벤더였는지. 비공개의 이유는 네 단어였습니다. 사생활, 법률, 안전, 그리고 경쟁.

곱씹을수록 마음에 남은 건 이 대칭의 방향이었습니다.

벤더가 가장 자신 있게 공개한 층은 도구였는데, 도구는 원래 누구든 다시 돌려 확인할 수 있는 층입니다. 정작 사는 쪽이 가장 알고 싶은 층은 출처인데, 출처는 벤더가 말하지 않으면 바깥에서 확인할 길이 없습니다.

"공개된 것과 검증할 수 있는 것이 왜 이렇게 어긋나 있을까."

그리고 이 침묵이 불가피한 것도 아니었습니다. 누군가는 이미 조 단위 코퍼스의 출처와 라이선스를 통째로 공개했고, 제3자 감사만으로 출처 불명 데이터의 비율을 크게 줄인 사례도 있습니다. 밝힐 수 없어서가 아니라, 밝히지 않기로 한 것이겠지요.

페블러스가 데이터를 학습에 넣기 전 그 출처와 계보부터 살피는 이유도 여기에 있습니다. 품질은 결과물이 아니라, 그 데이터가 어디서 왔는가에서 이미 갈리니까요.

다음 계약서를 쓸 때, "이 데이터가 깨끗한가"가 아니라 "어느 층까지 우리가 확인할 수 있는가"를 먼저 물어도 좋겠습니다.

▶ https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/ko/

#페블러스 #데이터품질 #데이터거버넌스 #Microsoft #AIReadyData #학습데이터

---

## Facebook (EN)

There's a moment in the technical report where I actually paused, impressed.

Microsoft, unveiling its new reasoning model, had written down exactly how it cleaned and filtered its data, tool by tool. Which extractor pulled text from web pages. Which OCR engine handled billions of PDFs. What checked the math.

Read that far, and it looks like unusually open disclosure.

Then, a page later, a quiet silence. About where all that carefully washed material came from in the first place, the same report says nothing. Not a publisher, not a journal, not a vendor. The reason was four words: privacy, legal, safety, and competitive.

What stayed with me was the direction of the asymmetry.

The layer the vendor disclosed most confidently is the one anyone could already re-run and check. The layer a buyer most wants to see is the one that lives only in the vendor's word.

"Why are the things disclosed and the things verifiable so badly out of line?"

And the silence isn't inevitable. Others have released the sources and licenses of trillion-token corpora in full, and third-party audits alone have sharply cut the share of license-unknown data. It isn't that the sources can't be named. Someone decided not to name them.

This is why Pebblous looks at where data comes from, and at its lineage, before it ever enters training. Quality is settled upstream, at the source, not in the finished model.

Maybe the first question for the next contract isn't "is this data clean?" but "how far down can we actually verify?"

▶ https://blog.pebblous.ai/report/microsoft-mai-provenance-gap/en/

#Pebblous #DataQuality #DataGovernance #Microsoft #AIReadyData
