# SNS 홍보 글: 미국 AI의 답을 받아 적는 증류, 숨기지 않아도 출처는 남지 않는다

> 소스: report/china-ai-distillation-us-model-outputs-2026-11/
> 생성일: 2026-11-18
> URL: https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

로이터가 11월 17일 중국 문서 300건 이상을 훑어, 미국 선도 모델에 물어 받은 답으로 자국 소형 모델을 가르치는 일이 공정이 됐다고 전했다. 그 300건은 숨겨 둔 문서가 아니다. 논문으로 냈고, 특허로 출원했고, 채용 공고로 사람을 뽑은 기록이다.

보도가 대표 사례로 든 것은 상하이교통대가 o1 응답 5,000건을 골라 Qwen2.5-72B-Instruct를 추가 학습시킨 논문이다. 그 논문을 열면 수치가 놓인 자리가 보도와 다르다. 5,000건은 주 실험이 아니라, 수학으로 증류한 모델이 수학 밖으로 번지는지 보려고 뒤에 붙인 실험의 수치다.

주 실험에서 o1-preview를 넘어섰다는 대목도 표의 실제 값을 보면 AIME 30문제에서 13대 12다. 한 문제 차다. 같은 표에서 o1-mini는 21문제를 맞혔다.

더 눈에 띄는 쪽은 마지막 절이다. 제목이 "단순 증류의 쓰라린 교훈"이고, 소제목 여섯 개로 천장 효과를 적는다. 증류로 배운 모델은 교사의 능력에 묶이는데, 점수는 교사에 가까워지는 동안 계속 오르기 때문에 천장에 닿았다는 신호가 점수에 먼저 나타나지 않는다. 중국 연구자의 양심 고백도 아니다. 저자 열 명에는 뉴욕대 소속도 있다.

값도 치렀다. 미세조정 전후를 견준 아홉 지표 가운데 넷이 내려갔고, 가장 크게 빠진 것이 중국어 사실성이다. 중국어를 잘하는 모델을 얻으려고 증류했는데 그 항목이 가장 많이 빠졌다.

남는 물음은 누가 몰래 가져갔느냐가 아니다. 무엇을 하는지는 공개 문서에 넘치도록 적혀 있는데, 어느 모델의 출력이 어느 자료에 섞여 어느 모델이 됐는지는 모델 카드 쪽에 남지 않는다. 그 논문이 만든 채점표로 o1 복제 시도 일곱 건을 매기자 다섯 건이 데이터 출처 항목에서 0점이었다. 채점한 쪽이 그중 두 건의 저자들이라는 한계는 붙는다.

페블러스가 DataClinic으로 내놓는 것은 AI 학습 데이터의 품질을 적은 숫자다. 그 숫자가 내려갔을 때 무엇을 빼야 다시 올라오는지는 숫자만 봐서는 나오지 않는다. 무엇을 섞었는지 적힌 목록이 있어야 나온다.

▶ 전문: https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #증류 #데이터계보 #학습데이터출처 #로이터 #OpenAI #Qwen

---

## LinkedIn (EN)

Reuters reported on November 17 that a practice once confined to Chinese university labs now runs as a production line: ask a leading US model for answers, then train a smaller domestic model on them. The finding rests on more than 300 Chinese papers, patents, corporate disclosures, job ads and government documents. None of them was a hidden file. They were published, filed, or posted to hire.

The report's leading example is a paper from Shanghai Jiao Tong University that picked some 5,000 o1 responses and continued training Qwen2.5-72B-Instruct on them. Open the paper and those responses turn out to belong to a late section asking whether a model distilled on mathematics carries beyond it, not to the main run.

The claim of surpassing o1-preview reads differently against its own table.

Over the 30 problems of AIME the score is 13 to 12. o1-mini solved 21 of them.

The paper's closing section is titled The Bitter Lesson of Simple Distillation. Under six subheads it describes a ceiling. A model trained on a teacher's answers is bounded by that teacher, and benchmark scores keep climbing right up to the bound, which makes the score the last place a ceiling shows. Nor is this a confession by Chinese researchers: the ten authors include affiliations at New York University.

The arithmetic carried a cost too. Of nine metrics compared before and after fine-tuning, four fell, and the steepest drop landed on Chinese factuality, the capability that bilingual set was built to strengthen.

So the question left over is not who took something in secret. What these teams do fills the public record. Which model an answer came from, and which dataset it was folded into, is the part no model card keeps. Scored on the transparency card that same paper built, five of seven o1 replication attempts scored zero on data source. The grading was done by authors of two of the seven.

What Pebblous produces with DataClinic is a quality number for AI training data. When that number falls, it will not say by itself what to remove to bring it back up. Only a list of what went in will.

▶ Read: https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Distillation #DataProvenance #TrainingData #Reuters #OpenAI #Qwen

---

## Twitter/X (KO)

로이터가 중국에서 나온 문서 300건 이상을 훑었다. 미국 모델의 답을 받아 적어 자국 모델을 가르치는 일이 실험을 떠나 공정이 됐다.

무엇을 하는지는 논문과 특허에 적혀 있다. 그 답이 어느 모델에서 나왔는지는 모델 카드에 없다.

▶ https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/ko/

#페블러스 #데이터품질 #증류 #로이터

---

## Twitter/X (EN)

Reuters reviewed more than 300 Chinese papers, patents and job ads. Asking a US model for answers and training a domestic model on them has moved out of the lab and onto a production line.

What these teams do is on the public record. Which model the answers came out of is not on the model card.

▶ https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/en/

#Pebblous #DataQuality #Distillation #Reuters

---

## Facebook (KO)

모델에 물어서 받은 답을 파일로 저장해 본 적이 있다면 아실 겁니다.

파일 이름에는 날짜가 들어갑니다. 안에는 질문과 답이 들어갑니다.

그런데 어느 모델에게 물었는지는 보통 어디에도 들어가지 않습니다.

로이터가 11월 17일에 전한 소식에서 떠오른 것도 그 빈칸이었습니다. 중국 연구진과 기업이 미국 선도 모델의 답을 받아 자국 소형 모델의 학습 자료로 쓰는 일이 공정이 됐다는 보도였는데, 근거로 센 문서 300건 이상이 전부 공개된 것들이었습니다. 논문이고, 특허고, 채용 공고입니다.

숨긴 쪽이 아니라 적어 둔 쪽을 센 셈입니다.

다만 그 기록들이 적고 있는 것은 한 종류뿐입니다. 우리가 증류를 하고 있다, 이런 방법으로 한다는 내용이지요. 거기에 없는 것은 어느 모델의 답이 어느 자료에 섞여 어느 모델이 되었는가입니다. 앞엣것은 사람이 하는 일의 기록이고, 뒤엣것은 자료가 지나온 길의 기록입니다. 로이터가 300건을 셀 수 있었던 까닭과 모델 카드가 비어 있는 까닭이 같은 데서 나옵니다.

한 사람이 손으로 질문을 던지던 때에는 뒤엣것이 없어도 그만이었습니다. 수집을 자동화하는 소프트웨어가 돌고 그 일만 맡는 사람이 붙으면 달라집니다. 적어야 할 것이 네 줄로 늘어납니다. 어느 모델에서, 어떤 질의로, 몇 건을, 어떻게 걸러 넣었는가.

"지난달 우리 쪽에서 만든 학습 자료가 어느 모델의 답에서 나왔는지, 지금 말할 수 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 그런데 방금의 네 줄은 자료 안을 아무리 들여다봐도 나오지 않습니다. 묻는 쪽과 답하는 쪽 사이에 잠깐 있다가, 그때 적지 않으면 그대로 사라지는 종류의 기록입니다.

https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/ko/

#페블러스 #데이터품질 #데이터클리닉 #증류 #데이터계보 #로이터

---

## Facebook (EN)

If you have ever saved a model's answers to a file, you know the shape of it.

The filename carries a date. Inside sit the prompts and the replies.

Which model you asked is usually nowhere in there.

That blank is where my reading of the Reuters piece on November 17 kept landing. Researchers and companies in China take answers from a leading US model and use them as training material for a smaller domestic one, and that work has become a process rather than an experiment. The evidence was more than 300 Chinese documents, and every one of them was already public. Papers. Patents. Job ads.

What got counted was not the hidden side. It was the side that had written things down.

Still, those records only hold one kind of fact. We are doing distillation, and here is how we do it. What they leave out is which model's answer went into which dataset and came back out as which model. The first is a record of what people did. The second is a record of where the material traveled. The reason Reuters could count 300 of the first kind, and the reason a model card sits blank, come from the same place.

When one person was typing questions by hand, the second record could be skipped without much cost. Once software runs the collection and someone is assigned to nothing else, it cannot. Four lines have to be written now: which model, under what queries, how many items, filtered by what rule.

"For the training material your team put together last month, can you say today which model's answers it came from?"

Pebblous tells you whether a training set is fit to be learned from, and what DataClinic returns is that judgment written as a number. The four lines above, though, are not sitting in the data waiting to be found. They exist for a moment between the asking and the answering, and if nobody writes them down at that moment, nothing later recovers them.

https://blog.pebblous.ai/report/china-ai-distillation-us-model-outputs-2026-11/en/

#Pebblous #DataQuality #DataClinic #Distillation #DataProvenance #Reuters
