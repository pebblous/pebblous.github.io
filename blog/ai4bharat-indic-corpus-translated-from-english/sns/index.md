# SNS 홍보 글: AI4Bharat 인도말 AI 학습 데이터는 영어를 옮겨 만든다

> 소스: blog/ai4bharat-indic-corpus-translated-from-english/
> 생성일: 2026-10-18
> URL: https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

인도 사람 12억 명이 제1언어로 쓰는 22개 언어의 AI 학습 데이터 2.8조 토큰이 10월 16일 공개됐습니다. 인도에서 모아 온 글이 아니라, 영어 웹 문서를 기계로 옮긴 글입니다.

엔비디아와 IIT 마드라스의 인도어 연구소 AI4Bharat가 함께 냈고, 번역 모델 하나는 인도 스타트업 보단 AI가 댔습니다. 원천은 엔비디아가 정제해 둔 영어 웹 코퍼스 Nemotron-CC-v2의 15개 하위집합입니다. 데이터셋 이름은 Nemotron-pretraining-Indic-v1이고, 지금 내려받을 수 있는 것은 방법을 적은 발표문과 프롬프트가 담긴 깃허브 플러그인뿐입니다.

공정의 중심에는 점수가 하나 있습니다. 번역이 끝난 문서를 MQM 방식을 본뜬 100점 루브릭으로 채점하고, 75점에 못 미친 글은 버리지 않습니다. 어디가 왜 깎였는지를 피드백으로 돌려주어 고쳐 쓰게 한 뒤 같은 기준으로 다시 채점합니다.

그렇게 되살아난 분량이 4,384억 토큰입니다. 전체 2.8조에 이미 들어 있는 몫이라 수선 덕분에 코퍼스가 커졌다고 읽으면 안 됩니다. 수선이 없었다면 2.8조에 닿지 못했으리라고 읽는 쪽이 맞습니다.

그림자는 저자들이 직접 적어 두었습니다. 번역 자원이 쌓인 12개 언어는 Gemma-4-31B-it가 옮기고 같은 모델이 채점합니다. 자기가 옮긴 글을 자기가 매기는 구조입니다. 나머지 10개 언어는 고쳐 쓰는 단계 없이 미달분을 떨구고, 원어민 검증이 더 필요하다고 적혀 있습니다.

성적은 올랐습니다. 이 코퍼스를 섞어 이어학습한 모델의 인도어 벤치마크 점수가 다섯 종 모두에서 4.98에서 9.82퍼센트포인트 사이로 올랐습니다. 이전 세대 모델과 견준 별도의 자리에서는 여섯 과제 중 지시 따르기 하나가 2.04점 내려갔고, 발표문은 이유를 적지 않았습니다.

다만 그 다섯 중 넷은 지식과 추론을 묻는 객관식입니다. 영어 원문의 지식이 인도말 문장으로 옮겨져 모델에 들어갔으니, 그 지식을 인도말로 묻는 시험에서 점수가 오르는 것은 공정이 설계대로 작동했다는 뜻입니다. 그 말이 인도 사람의 생활과 지역의 맥락을 담는지는 이 점수로 답하지 못하고, 데이터를 만든 저자들도 번역이 현지어로 쓰인 글을 대신하지 못한다고 적었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 재다 보면 가장 큰 덩어리가 합격과 불합격 사이에 놓여 있는 경우가 많습니다. 버리면 양이 모자라고, 그냥 쓰면 뒤가 불안한 자리입니다.

이번 공정이 남긴 것은 75점이라는 숫자가 아니라 무엇을 버렸고 무엇을 고쳤는지를 셀 수 있게 만든 설계입니다. 번역 데이터를 넣고 번역으로 만든 문항에서 점수가 올랐다면, 그 상승은 그 언어가 늘었다는 증거가 아니라 공정이 작동했다는 증거입니다.

▶ 전문: https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI4Bharat #NVIDIA #합성데이터 #학습데이터 #기계번역 #소버린AI

---

## LinkedIn (EN)

NVIDIA and AI4Bharat released 2.8 trillion tokens of pretraining data on October 16, covering the 22 languages named in India's constitution, the first languages of roughly 1.2 billion people. None of it was gathered in India.

The text is 15 subsets of Nemotron-CC-v2, NVIDIA's cleaned English web corpus, carried into Indian languages by machine, document by document. AI4Bharat is the Indic language lab at IIT Madras, and the Indian startup Bodhan AI supplied one of the two translation models. The dataset, Nemotron-pretraining-Indic-v1, is listed as coming soon. What is public today is the method and a GitHub plugin holding the prompts.

A single number runs the pipeline. Every translated document is scored against a 100-point rubric modeled on MQM, and anything under 75 is not discarded. It goes back with feedback on what cost it points, gets rewritten, and is scored again.

That loop returned 438.4 billion tokens. The figure sits inside the 2.8 trillion rather than on top of it, so the right reading is that without the repair step the corpus would never have reached its stated size.

The authors wrote down the soft spots themselves. For the 12 languages with more translation resource, Gemma-4-31B-it does the translating and the same model does the grading. The other 10 get no rewrite pass at all, and the announcement says they need more native-speaker review.

Scores went up. A model trained further on a blend including this corpus gained between 4.98 and 9.82 percentage points across five Indic benchmarks. In a separate comparison against the previous generation, instruction following fell 2.04 points, and no reason is offered.

Four of those five benchmarks are multiple-choice knowledge and reasoning. Knowledge that entered the model in translated sentences, asked about in the language it was translated into, is going to come back correct. Whether that language carries how people in India actually live is a different question, and the authors say plainly that translation does not stand in for text written natively.

Pebblous audits the quality of AI training data with DataClinic. The largest block is often the one between pass and fail: too much volume to throw away, too uncertain to ship as is.

What this pipeline leaves behind is not the number 75. It is a design in which what was dropped and what was repaired can both still be counted.

▶ Read: https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AI4Bharat #NVIDIA #SyntheticData #MachineTranslation #SovereignAI

---

## Twitter/X (KO)

인도 공용어 전체를 덮는 AI 학습 데이터 2.8조 토큰이 공개됐습니다. 인도에서 모아 온 글이 아니라, 영어 웹 문서를 번역 모델이 문서째 옮겨 적은 글입니다.

품질 합격선은 75점입니다. 못 미친 글은 버리는 대신 고쳐 쓴 뒤 다시 채점받았습니다.

https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/ko/

#페블러스 #데이터품질 #AI4Bharat #합성데이터

---

## Twitter/X (EN)

NVIDIA and AI4Bharat released 2.8 trillion tokens of pretraining data for every language named in India's constitution. None of it was gathered in India. It is English web text carried over by a translation model, document by document.

The passing score is 75. Anything below it was rewritten rather than dropped.

https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/en/

#Pebblous #DataQuality #AI4Bharat #SyntheticData

---

## Facebook (KO)

인도에서 힌디어를 쓰는 사람은 그 말을 휴대폰 자판에 라틴 문자로 칩니다.

글자는 알파벳인데, 말은 힌디어입니다.

10월 16일 공개된 인도어 AI 학습 데이터에는 그렇게 적힌 글이 한 겹 따로 들어 있습니다. 인도 헌법이 정한 22개 언어를 모두 덮고, 규모는 2.8조 토큰입니다.

그런데 그 글들은 인도에서 모아 온 것이 아닙니다.

영어 웹 문서를 번역 모델이 문서째 옮겨 적은 것입니다.

저는 이것을 '옮겨 온 모국어'라고 불러 보고 싶습니다. 한 언어의 AI가 설 토대를, 그 언어로 쓰인 글이 아니라 다른 언어에서 건너온 글로 놓는 일입니다.

공정 한가운데에는 점수가 하나 놓여 있습니다.

번역이 끝난 글을 채점표로 매기고, 합격선에 못 미치면 버리는 대신 어디가 왜 깎였는지를 돌려주어 고쳐 쓰게 합니다. 그렇게 되살린 분량을 저자들은 따로 세어 적어 두었습니다.

버리지 않고 고쳐 쓰기로 한 결정은, 데이터를 만들어 본 사람이라면 짐작이 가는 선택입니다. 양이 모자라니까요.

"고쳐 써서 합격한 글과 처음부터 합격한 글은 같은 글입니까?"

둘을 섞어 두면 나중에 모델이 이상하게 굴 때 어느 쪽을 의심할지 가릴 수 없습니다. 저자들이 되살린 양을 따로 적어 둔 덕분에 그 구분은 아직 살아 있습니다. 선이 하나 그어져 있었기 때문에 가능한 일입니다.

그리고 선이 풀어 주지 못하는 질문이 남습니다.

"12억 명이 쓰는 말을 다루는 모델의 인도말이 영어에서 옮겨진 말이라면, 그 말에는 무엇이 함께 실려 옵니까?"

저자들도 그 자리를 비워 두지 않았습니다. 번역은 그 언어로 처음부터 쓰인 글을 대신하지 못하고, 그 지역의 지식과 문화를 담는다고 보장하지도 않는다고 발표문에 적었습니다. 데이터를 만든 쪽이 스스로 적은 문장입니다.

한국어도 사정이 다르지 않습니다. 공개된 한국어 학습 데이터는 영어에 견주면 턱없이 적고, 그 부족을 메우는 가장 빠른 길도 같습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 재다 보면 가장 큰 덩어리가 합격과 불합격 사이에 놓여 있는 경우가 많습니다. 버리면 양이 모자라고, 그냥 쓰면 뒤가 불안한 자리입니다.

이번 발표에서 가져올 것은 75점이라는 숫자가 아닌 것 같습니다.

점수가 올랐다는 말과 그 말이 늘었다는 말은 같은 축에 있지 않습니다. 그 둘을 갈라 놓고 보는 일이, 번역으로 데이터를 채우는 쪽에 남은 몫이라고 생각합니다.

▶ 전문: https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI4Bharat #NVIDIA #합성데이터

---

## Facebook (EN)

Someone in India writing Hindi on a phone types it in Latin letters.

The characters are the English alphabet. The language is Hindi.

The Indic training data released on October 16 contains a separate layer of exactly that kind of text. It covers all 22 languages named in India's constitution, and it runs to 2.8 trillion tokens.

None of it was gathered in India.

It is English web text, carried across by a translation model, document by document.

I have started thinking of it as a mother tongue brought over from somewhere else. The foundation an AI in one language stands on, laid with text that crossed in from another.

At the center of the pipeline sits a single score.

Each translated document is graded against a rubric, and anything below the bar is not thrown out. It comes back with a note on what cost it points, gets rewritten, and goes through again. The authors counted how much that loop recovered and wrote the figure down on its own.

Choosing to repair rather than discard is a choice anyone who has built a dataset will recognize. There is never enough volume.

"Is a document that passed after being rewritten the same thing as a document that passed the first time?"

Mix the two together and, when the model behaves oddly later, there is no way to tell which half to suspect. Because the recovered volume was written down separately, that distinction is still available. It is available because somebody drew a line.

And then there is the question the line does not settle.

"If a model is built for languages 1.2 billion people speak, and its Indic speech is speech carried over from English, what rides along with it?"

The authors did not leave that spot empty. Translation does not stand in for text written natively, they wrote, and it carries no guarantee of local knowledge or culture. That sentence comes from the people who built the data.

Korean is in much the same position. Open training data in Korean is far scarcer than in English, and the fastest route to filling the gap is the same one.

Pebblous audits the quality of AI training data with DataClinic. The largest block is often the one between pass and fail: too much volume to throw away, too uncertain to ship as is.

What is worth taking from this announcement is probably not the number 75.

A score going up and a language getting better are not on the same axis. Keeping those two apart is the work left to anyone filling out data by translation.

▶ Full piece: https://blog.pebblous.ai/blog/ai4bharat-indic-corpus-translated-from-english/en/

#Pebblous #DataClinic #DataQuality #AI4Bharat #NVIDIA #SyntheticData
