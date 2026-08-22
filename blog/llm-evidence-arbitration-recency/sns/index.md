# SNS 홍보 글: LLM은 신뢰도 표시보다 최신 타임스탬프를 따랐다

> 소스: blog/llm-evidence-arbitration-recency/ko/index.html
> 생성일: 2026-08-23
> URL (KO): https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/ko/
> URL (EN): https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

믿지 말라고 적어 둔 증거와, 아무 표시도 없이 더 최근인 증거를 나란히 놓았습니다. 오픈웨이트 모델 일곱 개는 최근 쪽을 더 일관되게 따랐습니다.

옥스퍼드와 GSK 연구진이 8월 20일 arXiv에 공개한 벤치마크입니다. 하나의 위험 궤적에서 수치 시계열과 자연어 요약문을 함께 뽑았습니다. 정답과 맞는 쪽이 한 형식뿐이도록 둘을 일부러 어긋나게 붙였습니다. 요약문 끝에 손상된 데이터로 만든 보고라는 문구를 달아 두어도, 모델들은 그 표시보다 더 최근이라는 신호를 먼저 잡았습니다.

신뢰도는 사람이 공들여 적어 넣는 값입니다. 시각은 애쓰지 않아도 딸려 옵니다. 이 실험에서 밀린 쪽은 공들인 쪽이었습니다. 외부 예측 도구를 끼워 넣은 조건은 더 나빴습니다. 정답을 그대로 담은 맥락이 프롬프트 안에 있는데도, 정확도가 거의 0까지 내려간 경우가 나왔습니다.

연구진은 선을 분명히 그어 둡니다. 전부 합성 데이터이고 과제도 높음과 낮음을 고르는 이진 분류입니다. 배포 지침으로 읽지 말라는 문장을 논문에 따로 적었습니다.

그럼에도 실무에 닿는 지점은 뚜렷합니다. 신뢰도 메타데이터가 존중되는지는 값들이 서로 어긋나는 상태에서만 드러납니다. 깨끗한 데이터로 잰 정확도는 그 질문에 답해 주지 않습니다. 페블러스가 DataClinic으로 학습 데이터를 진단할 때 최근 함께 오는 질문도 이쪽입니다.

▶ 전문: https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI거버넌스 #데이터거버넌스 #LLM #RAG #Qwen3 #Gemma

---

## LinkedIn (EN)

Given one piece of evidence flagged as corrupted and another that was simply newer, seven open-weight models followed the newer one more consistently.

The benchmark went up on arXiv on August 20, from researchers at Oxford and GSK. They drew a numeric time series and a natural-language summary from the same latent risk trajectory, engineered the pair so that exactly one side matched the ground truth, and appended a note to the summary saying it had been generated from partially corrupted data. The models still tracked the recency signal ahead of the corruption flag.

Reliability is a value a human writes in by hand. A timestamp arrives whether or not anyone intends it. In this benchmark, the deliberate cue lost to the automatic one. The tool-forecast condition was worse still: with context that perfectly predicted the answer sitting in the prompt, accuracy dropped to near zero in some orderings.

The authors draw the boundary themselves. Everything is synthetic, the task collapses to a binary high-or-low choice, and the paper states plainly that this is not deployment guidance.

The practical edge is narrow but sharp. Whether reliability metadata is actually honored only becomes visible once sources disagree, and accuracy measured on clean data says nothing about it. That is the question Pebblous keeps meeting when it diagnoses training data with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIGovernance #LLM #RAG #Qwen3 #Gemma

---

## Twitter/X (KO)

믿지 말라는 표시가 붙은 증거와, 아무 표시 없이 더 최근인 증거. 오픈웨이트 모델 일곱 개는 후자를 더 일관되게 따랐습니다.

공들여 붙인 신뢰도 메타데이터가, 저절로 붙는 타임스탬프에 밀렸다는 뜻입니다.

https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/ko/

#페블러스 #데이터품질 #LLM #Qwen3

---

## Twitter/X (EN)

One source flagged as corrupted, the other merely newer. Seven open-weight LLMs followed the newer one more consistently.

The reliability metadata we write by hand lost to the timestamp that attaches itself.

https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/en/

#Pebblous #DataQuality #LLM #Qwen3

---

## Facebook (KO)

"환자는 안정적입니다."

소견에는 그렇게 적혀 있는데, 같은 화면의 활력징후는 계속 나빠지고 있습니다.

어느 쪽도 조작된 값이 아닙니다. 한쪽이 조금 더 이른 시각을 보고 있거나, 한쪽은 관측이 아니라 예측일 뿐입니다.

이런 화면 앞에서 저희가 먼저 묻는 것은 대개 어느 값이 틀렸느냐입니다. 그런데 여러 소스를 하나의 컨텍스트로 합치는 일을 하다 보면 질문이 옮겨 갑니다.

"값이 다 살아 있는데 서로 다른 말을 할 때, 무엇이 이기는가?"

옥스퍼드와 GSK 연구진이 그 순간만 떼어 내 재어 보았습니다. 텍스트 요약과 수치 시계열이 정반대를 가리키도록 일부러 만들어 놓고, 오픈웨이트 모델 일곱 개에게 어느 쪽을 믿느냐고 물었습니다.

한쪽 요약문 끝에 손상된 데이터로 만든 보고라고 적어 두어도, 모델들은 그 문구보다 더 최근이라는 표시를 더 일관되게 따라갔습니다.

읽다가 오래 눈이 머문 대목은 이 비대칭입니다. 신뢰도는 사람이 손으로 적어 넣는 값입니다. 시각은 적으려 하지 않아도 딸려 옵니다.

'저절로 붙는 단서'가 공들여 붙인 단서를 이긴 셈입니다.

페블러스가 DataClinic으로 데이터 품질을 진단하면서 같은 자리를 자주 지나갑니다. 팀들은 어떤 값이 틀렸는지를 묻고, 저희도 오래 그 질문에 맞춰 도구를 만들어 왔습니다. 그런데 값들이 다 유효한 채로 갈릴 때 무엇이 이기는지는 아직 재는 법이 정해져 있지 않습니다.

연구진은 이 실험을 완성된 진단이 아니라 스트레스 테스트라고 부릅니다. 전부 합성 데이터이고 과제도 이진 분류라, 배포 지침으로 읽지 말라는 문장을 따로 적어 두었습니다.

그 단서를 붙여 놓고도 남는 게 있습니다. 붙여 둔 메타데이터가 그대로 읽히리라는 믿음을, 저희는 한 번도 어긋난 상태에서 확인해 본 적이 없다는 것입니다.

▸ https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/ko/

#페블러스 #데이터품질 #AI거버넌스 #증거판정 #Qwen3 #DataClinic #AIReadyData

---

## Facebook (EN)

"The patient is stable."

That is what the note says, while the vitals on the same screen keep drifting the other way.

Neither record has been tampered with. One is reading a slightly earlier window, or one of them is a forecast rather than an observation.

Standing in front of a screen like that, the question we reach for first is usually which number is wrong. But once you start merging several sources into a single context, the question moves.

"When every value is valid and they still disagree, which one wins?"

Researchers at Oxford and GSK isolated that moment and measured it. They built text summaries and numeric time series that pointed in opposite directions on purpose, then asked seven open-weight models which side they believed.

Even with a note at the end of one summary saying it had been generated from partially corrupted data, the models tracked the newer timestamp more consistently than the warning.

What held me there was the asymmetry. Reliability is something a person writes in by hand. A timestamp arrives on its own.

"The cue that attaches itself" beat the cue someone took the trouble to attach.

Pebblous walks past this same spot often, diagnosing data quality with DataClinic. Teams ask which value is wrong, and we have spent a long time building tools shaped to that question. How a system chooses when every value is intact and they simply disagree is not something we have learned to measure yet.

The authors call their work a stress test rather than a finished diagnosis. Everything is synthetic, the task is binary, and they say in plain terms that it should not be read as deployment guidance.

Even with those caveats, something stays. We have believed that the metadata we attach gets read as written, and we have never once checked that belief in a state where the sources disagree.

▸ https://blog.pebblous.ai/blog/llm-evidence-arbitration-recency/en/

#Pebblous #DataQuality #AIGovernance #EvidenceArbitration #Qwen3 #DataClinic #AIReadyData
