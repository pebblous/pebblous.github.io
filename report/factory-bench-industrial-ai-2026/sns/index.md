# SNS 홍보 글: 공장 AI는 기계를 진짜 이해할까 — FactoryBench가 폭로한 LLM의 한계

> 소스: report/factory-bench-industrial-ai-2026/ko/index.html
> 생성일: 2026-05-21
> URL KO: https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/ko/
> URL EN: https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

최고 LLM이 공장 로봇의 센서 데이터를 50% 이하로만 이해한다.

arXiv:2605.07675 FactoryBench. 71,000개 Q&A, 15,000 에피소드, 27가지 결함, 100개 이상의 센서 채널. 산업 로봇 시계열 데이터를 Pearl의 4단계 인과 사다리로 평가하는 최초의 LLM 벤치마크가 나왔다. 결과는 냉혹했다. 구조적 추론(L1-L3)에서 선두를 달린 Claude Sonnet 4.6조차 L1 46.8%, L2 47.1%, L3 45.9% — 어느 수치도 50%를 넘지 못했다. L4 의사결정은 전체 최고점이 GPT-5.1의 17.7%였다.

이 결과가 말하는 것은 단순하지 않다. "더 좋은 모델을 쓰면 된다"가 아니다. GPT-5.1은 L1-L3에서 4위였지만 L4에서 1위였다. 프로토콜 검색 능력과 신호 이해 능력이 완전히 분리되어 있다는 뜻이다. 현장에서 오래 관찰해온 것 — AI가 정비 매뉴얼은 잘 찾아주는데 실제 센서 데이터에서 고장 원인을 진단하지는 못한다 — 이 이제 수치로 증명됐다.

반전은 VLM 실험에서 나온다. Florence-2(0.23B)는 400개의 도메인 샘플만으로 GPT-4o를 52.4% F1 차이로 앞질렀다. NVIDIA Cosmos VLM은 동일한 모델이 제로샷 14.37%에서 파인튜닝 후 96.8%로 올라갔다. 82.4pp 차이. 모달리티(시계열/이미지)에 상관없이 결론은 하나다 — 병목은 모델이 아니라 데이터다.

$34B에서 $155B(CAGR 35.3%)로 성장하는 제조 AI 시장에서, 95%의 기업이 AI에 투자하지만 생산 통합까지 가는 건 10%에 불과하다. 파일럿 퍼거토리의 원인을 이번 벤치마크가 기술적으로 정의했다. 페블러스는 DataClinic을 통해 이 데이터 병목의 정량 진단을 제공하고 있다. 모델을 사는 것보다 자사의 센서 데이터를 AI-Ready하게 만드는 것이 먼저다.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #DataCentricAI #제조AI #산업AI #FactoryBench #LLM #산업로봇 #PhysicalAI

---

## LinkedIn (EN)

The best LLMs understand factory robot sensor data at below 50%.

FactoryBench (arXiv:2605.07675) is the first benchmark to evaluate LLMs on industrial robot telemetry using Pearl's four-level Causation Ladder — from basic state recognition (L1) to autonomous decision-making (L4). The numbers are unambiguous: Claude Sonnet 4.6, the top performer in structured reasoning (L1-L3), scored L1 46.8%, L2 47.1%, L3 45.9%. Not one score cleared 50%. The best L4 decision-making score, GPT-5.1 at 17.7%, is barely above random chance for a four-choice task.

What makes this finding significant is the dissociation at the top. GPT-5.1 ranked 4th in L1-L3 but 1st in L4. Protocol retrieval and signal understanding are entirely separate competencies — and current LLMs excel at the former while struggling badly with the latter. The field's empirical observation that "AI can find maintenance manuals well but can't diagnose failures from actual sensor data" is now quantified.

The data-centric proof is even sharper when VLM results are added. Florence-2 (0.23B), fine-tuned on just 400 domain samples, outperformed GPT-4o by +52.4% F1. NVIDIA Cosmos VLM jumped from 14.37% zero-shot to 96.8% with domain data — an 82.4pp gap. Modality doesn't matter: the bottleneck is data, not architecture.

In a market growing from $34B to $155B by 2030, 95% of manufacturers are investing in AI while only 10% reach production integration. FactoryBench has put a technical number to why. Pebblous DataClinic provides the diagnostic layer for this exact bottleneck — quantifying AI-readiness before model selection even begins.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataCentricAI #ManufacturingAI #IndustrialAI #FactoryBench #LLM #PhysicalAI #IndustrialRobots

---

## Twitter/X (KO)

최고 LLM도 공장 로봇 센서 데이터를 50% 이하로만 이해한다. L4 의사결정 최고점 17.7%(GPT-5.1). Florence-2(0.23B)는 400개 샘플만으로 GPT-4o를 앞질렀다.
병목은 모델이 아니라 데이터다.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/ko/

#FactoryBench #데이터품질 #제조AI #DataCentricAI #LLM

---

## Twitter/X (EN)

Top LLMs understand industrial robot telemetry at below 50%. L4 decision-making: best score is GPT-5.1 at 17.7%. Florence-2 (0.23B) beats GPT-4o with 400 domain samples.
The bottleneck is data, not model architecture.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/en/

#FactoryBench #DataQuality #ManufacturingAI #DataCentricAI #LLM

---

## Facebook (KO)

요즘 공장 현장의 AI 담당자들을 만나면 비슷한 이야기를 듣습니다. "모델은 좋아졌는데, 왜 우리 설비에서는 안 될까요."

arXiv:2605.07675 FactoryBench는 그 질문에 처음으로 정확한 숫자를 붙였습니다. 산업 로봇이 125Hz로 기록하는 시계열 센서 데이터 — 관절 상태, 토크, 힘, TCP 위치, 그리퍼 상태 — 를 Pearl의 4단계 인과 사다리로 평가했을 때, 현재 최고 LLM의 성적표가 나왔습니다. L1 상태 인식에서 L3 반사실 추론까지, 선두를 달린 Claude Sonnet 4.6조차 46~47%대였습니다. L4 의사결정은 GPT-5.1의 17.7%가 전체 최고였습니다.

오래 마음에 걸렸던 현장의 경험이 이번에 수치로 확인됐습니다. 프로토콜 검색 능력과 신호 이해 능력은 분리되어 있다는 것입니다. GPT-5.1은 L1-L3에서 4위였지만 L4에서 1위였습니다. AI가 정비 매뉴얼을 잘 찾는 것과 실제 센서 데이터에서 고장 원인을 진단하는 것은, 같은 능력이 아니었습니다.

더 오래 머문 숫자는 따로 있었습니다. Florence-2(0.23B)는 400개의 도메인 샘플만으로 GPT-4o를 52.4% F1 차이로 앞질렀습니다. NVIDIA Cosmos VLM은 14.37%에서 96.8%로, 82.4pp를 뛰어올랐습니다. 모달리티가 달라도, 기간이 달라도, 결론은 같았습니다. 한계의 원인은 모델 아키텍처가 아니라 도메인 데이터였습니다.

페블러스는 이 데이터 병목의 진단을 DataClinic으로 다루고 있습니다. 모델을 선택하기 전에, 우리 센서 데이터가 AI에게 읽힐 수 있는 상태인지를 먼저 확인해야 한다는 것을 이번 벤치마크가 다시 한번 보여줬습니다.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/ko/

#페블러스 #DataClinic #데이터품질 #FactoryBench #제조AI #DataCentricAI

---

## Facebook (EN)

There's a question that keeps coming up in industrial AI conversations: why do models that perform brilliantly on paper fall short the moment they face real factory floor data?

FactoryBench (arXiv:2605.07675) offers the first rigorous answer. Researchers evaluated six leading LLMs on industrial robot telemetry — 100+ sensor channels, 125Hz recordings, 27 systematically injected fault types — using Pearl's four-level Causation Ladder as the evaluation framework. The results were humbling. Claude Sonnet 4.6 led the structured reasoning categories (L1-L3), yet all its scores hovered between 46% and 47%. GPT-5.1's L4 decision-making score of 17.7% was the highest of any model. On a four-choice task, that is barely above guessing.

What stayed with me longest wasn't the raw numbers. It was the dissociation. GPT-5.1 ranked fourth in L1-L3 but first in L4. An LLM's ability to retrieve an industrial manual and its ability to understand sensor time-series data are, it turns out, entirely separate competencies. Something practitioners have known anecdotally for years is now a benchmark finding.

The data-centric experiments made the picture sharper still. Florence-2 — a 0.23-billion parameter open-source model — outperformed GPT-4o by +52.4% F1 after fine-tuning on just 400 domain samples. NVIDIA Cosmos VLM moved from 14.37% zero-shot to 96.8% with domain data. An 82.4-point gap, closed not by a bigger model, but by better data.

Pebblous builds DataClinic for precisely this gap — the diagnostic layer that tells you whether your sensor data is AI-ready before you spend on model deployment. The benchmark has put a number to something the field long suspected. That feels like a useful place to start.

https://blog.pebblous.ai/report/factory-bench-industrial-ai-2026/en/

#Pebblous #DataClinic #DataQuality #FactoryBench #ManufacturingAI #DataCentricAI

---
