# SNS 홍보 글: AI가 쓴 한국어의 어색함은 모델을 바꿔도 사라지지 않는다

> 소스: report/korean-ai-humanizer-teardown-2026-08/ko/index.html, /en/index.html
> 생성일: 2026-08-20
> URL (KO): https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/ko/
> URL (EN): https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/en/
> voice: LinkedIn/Twitter = sns-cover, Facebook = reflective

---

## LinkedIn (KO)

ChatGPT가 세상에 나오기 두 해 전인 2020년에 사람이 쓴 원고가, 한국어 AI 문체 판정에서 최고 위험 등급을 받았습니다. 쉼표 다섯 개를 지우자 최저 등급으로 뒤집혔습니다.

깃허브 스타 4,556개를 받은 오픈소스 한국어 윤문 스킬을 설계 수준에서 뜯어보고, 페블러스 발행글과 사람이 쓴 정본 원고에 직접 돌린 기록입니다. 안전장치 쪽은 기대대로 작동했습니다. 일부러 세게 고쳐 넣은 원고는 문자 변경률 60.1%에서 강제 중단됐고, 같은 판정이 의역된 직접 인용과 사라진 숫자 열두 개까지 함께 잡아냈습니다.

어긋난 곳은 판정의 근거가 되는 통계였습니다. 연결어미 뒤 쉼표는 ACL 2025 논문이 확인한 진짜 신호이지만(사람 에세이 4.10%, 모델 에세이 19.83%), 그 통계로 한 사람의 원고를 재는 순간 글쓴이가 한 박자 쉬어 가던 자리가 기계의 버릇으로 읽혔습니다.

우리 쪽 숫자도 같은 보고서에 적었습니다. 페블러스의 문체 검사 스크립트는 발행글 426편 첫 전수 실행에서 오탐률 45%를 냈고, 원인의 상당수가 인용문이었습니다. 라벨링 가이드든 품질 기준이든, 검산되지 않은 규칙은 품질 도구가 아니라 새로운 오염원입니다.

▶ 전문: https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #한국어AI #번역투 #LLM #imnotai #KatFishNet #ACL2025 #CommonCrawl

---

## LinkedIn (EN)

A manuscript written by a person in 2020, two years before ChatGPT existed, drew the highest risk grade a Korean AI-style checker can assign. Deleting five commas flipped it to the lowest.

We took apart im-not-ai, an open-source Korean prose repair skill with 4,556 GitHub stars, at the design level, then ran its verification gates on our own published articles and on human-authored prose. The safety machinery holds. A deliberately aggressive rewrite was halted at a 60.1% character-change rate, and the same verdict caught a paraphrased direct quotation and twelve numbers that had silently disappeared.

What fails sits upstream of the tool, in the statistic the verdict rests on. A comma after a connective ending is a real signal, confirmed at ACL 2025 (4.10% in human essays against 19.83% in LLM essays), but point that distribution at one writer and the beat where that writer pauses starts reading as machine residue.

Our own number belongs in the same report. The first full run of the Pebblous style checker across 426 published articles returned a 45% false positive rate, largely on quoted passages the script was scoring as our own prose. Whether the rule governs prose style, labeling, or dataset quality, an unaudited standard is not a quality tool but a new source of contamination.

▶ Read: https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #KoreanNLP #Translationese #LLM #imnotai #KatFishNet #ACL2025

---

## Twitter/X (KO)

2020년에 사람이 쓴 원고가 한국어 AI 문체 판정에서 최고 위험 등급을 받았습니다. 쉼표 다섯 개를 지우자 최저로 내려갔습니다.

집단 통계를 개인의 글에 그대로 들이대면 이런 일이 생깁니다. 오픈소스 한국어 윤문 스킬을 뜯어보고 직접 돌려 본 기록입니다.

https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/ko/

#페블러스 #한국어AI #imnotai #번역투

---

## Twitter/X (EN)

A manuscript written by a human in 2020 drew the top risk grade from a Korean AI-style checker. Deleting five commas dropped it to the lowest.

That is what happens when a population statistic is used as a verdict on one person's writing. We took apart an open-source Korean prose repair skill and ran it ourselves.

https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/en/

#Pebblous #KoreanNLP #imnotai #Translationese

---

## Facebook (KO)

쉼표 다섯 개를 지웠습니다.

「불을 꺼뜨리기도 하고, 불에 데기도 한다」 같은 자리에 붙어 있던 것들입니다.

2020년에 사람이 쓴 기고문이었습니다. ChatGPT가 세상에 나오기 두 해 전이니, AI가 섞여 들어갈 방법 자체가 없는 글입니다.

지우기 전 이 원고의 판정은 최고 위험 등급이었고, 지운 뒤에는 최저였습니다. 글자로는 0.5%를 고쳤습니다.

그 다섯 자리를 하나씩 세어 봤습니다.

모두 연결어미 뒤에서 한 박자 쉬어 가는 자리였습니다. 글쓴이의 호흡이라고 부를 만한 것이지요.

도구는 그 호흡을 모델의 버릇으로 읽었습니다.

규칙이 틀렸던 것은 아닙니다. 연결어미 뒤 쉼표는 동료평가를 거친 논문이 확인한 신호이고, 도구도 자기 코퍼스에서 같은 방향을 다시 확인했습니다. 틀린 것은 규칙이 아니라, 그 규칙을 한 사람 앞에 그대로 세운 추론이었습니다.

"여럿에게서 참인 값이, 한 사람에게도 참인가?"

이 질문 앞에서 저희도 떳떳하지는 않았습니다. 페블러스의 문체 검사 스크립트도 발행글 전수에 처음 돌렸을 때 절반에 가까운 오탐을 냈습니다. 남의 말을 옮긴 인용문을 우리 문체로 세고 있었기 때문입니다.

깃허브 스타 4,556개를 받은 오픈소스 윤문 스킬을 뜯어보면서, 결국 오래 붙잡고 있었던 것은 71개의 패턴 목록이 아니라 이 한 가지였습니다.

무엇을 결함으로 볼지 정하는 일은 데이터를 다루는 사람이라면 매일 하는 일입니다. 라벨링 가이드도, 품질 기준도, 평가 지표도 결국 같은 종류의 규칙입니다. 페블러스가 데이터 품질을 진단해 오면서 배운 것이 있다면, 검산되지 않은 기준은 그 기준이 닿는 모든 문서에 조용히 번진다는 사실입니다.

그래서 이번에는 자화자찬 대신 대조를 택했습니다. 우리 글에 남의 잣대를 대보고, 그 잣대가 사람 글 앞에서 어긋나는 지점까지 적고, 우리 오탐률도 같이 적었습니다.

잘 쓰는 자리보다 재는 자리에 서고 싶었기 때문입니다. 그리고 재는 자리에 서려면, 자기 잣대부터 재봐야 하는 것 같습니다.

▸ https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/ko/

#페블러스 #한국어AI #imnotai #DataClinic #데이터품질 #AIReadyData

---

## Facebook (EN)

I deleted five commas.

They sat in places like "we would let the fire die, and we would burn ourselves on it."

The manuscript was written by a person in 2020, two years before ChatGPT existed. There was no way for a machine to have touched it.

Before the deletion, a Korean AI-style checker put the text at its highest risk grade. After, at its lowest. I had changed 0.5% of the characters.

I went back and counted those five places.

Every one of them fell after a connective ending, at the beat where the writer takes a breath. That breathing is about as personal as prose gets.

The tool read it as a machine's habit.

The rule itself was not wrong. Commas after connective endings are a real signal, confirmed in peer-reviewed work and reproduced by the tool on its own corpus. What was wrong was the inference that carried a population statistic over to one person.

"If something is true of many, is it true of one?"

We do not get to ask that from a safe distance. The first time we ran our own style checker across everything we had published, nearly half its flags were false, because it was scoring quoted passages as our own prose.

Taking apart an open-source repair layer with 4,556 GitHub stars, the thing that stayed with me was not the list of 71 patterns. It was this.

Deciding what counts as a defect is ordinary work for anyone who handles data. Labeling guides, quality thresholds, evaluation metrics: all of them are the same kind of rule. If diagnosing data quality has taught Pebblous anything, it is that an unaudited standard spreads quietly into every document it touches.

So we chose comparison over self-congratulation. We held someone else's ruler against our own writing, wrote down where that ruler misreads a human, and wrote down our own false positive rate beside it.

We would rather stand where the measuring happens than where the good writing happens. And standing there seems to require measuring your own ruler first.

▸ https://blog.pebblous.ai/report/korean-ai-humanizer-teardown-2026-08/en/

#Pebblous #KoreanNLP #imnotai #DataClinic #DataQuality #AIReadyData
