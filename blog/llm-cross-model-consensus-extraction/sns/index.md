# SNS 홍보 글: 같은 논문을 다섯 번 읽힌 AI의 답이 흔들렸다

> 소스: blog/llm-cross-model-consensus-extraction/ko/index.html
> 생성일: 2026-08-22
> URL (KO): https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/ko/
> URL (EN): https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

같은 모델에 같은 논문을 다섯 번 읽혔더니 다섯 번 모두 정답이었던 항목은 76.4%에 그쳤습니다.

임페리얼칼리지 런던과 케임브리지 연구진이 프런티어 모델 일곱 종에 논문 열여덟 편을 읽혀 얻은 수치입니다. 한 번의 실행에서 95.2%를 낸 모델이 나머지 네 번에서는 80%를 밑돌았습니다. 그 한 번만 봤다면 가장 좋은 모델을 고른 줄 알았을 것입니다.

해법은 더 좋은 모델이 아니라 다른 모델이었습니다. 같은 모델을 다섯 번 반복하는 쪽은 사람 심사자 합의와의 일치율이 89.2%에서 멈췄습니다. 서로 다른 모델 다섯 개의 답을 모으자 93.3%까지 올라갔습니다.

넘길 수 없는 일도 드러났습니다. 문헌을 스스로 찾게 하자 가장 잘한 에이전트도 전문가가 추려 둔 참고문헌의 절반가량밖에 되찾지 못했습니다.

데이터셋의 신뢰는 자동화의 총량이 아니라, 어느 판정이 몇 대 몇으로 갈렸는지가 기록에 남는가에서 나옵니다.

▶ 전문: https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #LLM #재현성 #교차검증 #데이터추출 #ImperialCollege #arXiv

---

## LinkedIn (EN)

Seven frontier language models read the same eighteen papers five times each. Only 76.4% of the extracted items were correct on every run.

The measurement comes from researchers at Imperial College London and Cambridge. One model scored 95.2% on a single run and stayed below 80% on the other four. A team that had run it once would have walked away believing it had picked the strongest model.

The fix was not a better model but a different one. Repeating the same model five times plateaued at 89.2% agreement with human reviewers, while pooling the answers of five different models reached 93.3%.

Some steps did not transfer at all. When agents had to find the literature themselves, the best of them recovered only about half of the references a domain expert had assembled.

Trust in a dataset comes less from how much of it was automated than from whether the split decisions were written down.

▶ Read: https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #LLM #Reproducibility #CrossModelConsensus #DataExtraction #ImperialCollege #arXiv

---

## Twitter/X (KO)

프런티어 모델 일곱 종에 같은 논문을 다섯 번씩 읽혔더니 다섯 번 모두 정답인 항목은 76.4%였습니다.

같은 모델을 더 돌리는 대신 다른 모델의 답을 모으자 사람 심사자 합의와의 일치율이 93.3%로 올라갔습니다. 재현성은 좋은 모델을 고르는 문제가 아니라 모델을 섞는 문제였습니다.

https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/ko/

#페블러스 #데이터품질 #LLM #재현성

---

## Twitter/X (EN)

Seven frontier LLMs read the same papers five times each. Only 76.4% of items came out right on every run.

Running one model more didn't help. Pooling five different models pushed agreement with human reviewers to 93.3%.

https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/en/

#Pebblous #DataQuality #LLM #Reproducibility

---

## Facebook (KO)

"어제 돌렸을 때랑 값이 다른데요."

데이터셋을 만들어 본 분이라면 한 번쯤 듣거나 해 봤을 말입니다.

같은 파일, 같은 프롬프트, 같은 모델인데 어제와 오늘의 숫자가 다릅니다. 대개는 한 번 더 돌려 보고, 둘 중 맞아 보이는 쪽을 적어 넣고 넘어갑니다.

임페리얼칼리지 런던과 케임브리지 연구진이 이 순간을 숫자로 세어 봤습니다.

프런티어 모델 일곱 종에 논문 열여덟 편을 다섯 번씩 읽혔더니, 다섯 번 모두 같은 정답을 낸 항목은 넷 중 셋 남짓이었습니다. 나머지 다섯 중 하나는 실행할 때마다 정답과 오답 사이를 오갔습니다.

한 번만 돌려서는 지금 손에 쥔 것이 어느 쪽인지 알 수 없습니다.

오래 남은 건 연구진이 찾은 해법 쪽이었습니다. 같은 모델을 더 돌리는 쪽은 어느 지점에서 멈췄고, 서로 다른 모델의 답을 모으는 쪽이 사람 심사자의 합의에 더 가까이 갔습니다. 다섯 번의 판정이 5대 0으로 모였을 때와 3대 2로 갈렸을 때, 그 답이 맞을 확률도 크게 달랐습니다.

"이 데이터셋의 이 값은 몇 대 몇으로 정해졌나?"

페블러스가 데이터 품질을 진단하는 자리에서 돌아오는 답은 대개 최종 정확도 하나입니다. 어떤 항목에서 판정이 갈렸는지, 갈린 것을 누가 어떻게 정했는지는 남아 있지 않은 경우가 많습니다.

갈린 표가 기록으로 남는다면, 완성된 데이터셋을 나중에 다시 열어 위태로운 구간부터 읽을 수 있습니다. 얼마나 많이 자동화했는가보다, 어디서 갈렸는지를 세어 두었는가가 더 오래 남는 것 같습니다.

▶ https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/ko/

#페블러스 #DataClinic #데이터품질 #재현성 #교차검증 #LLM #ImperialCollege

---

## Facebook (EN)

"It's giving me a different number than yesterday."

Anyone who has assembled a dataset by hand has said some version of this, or heard it from someone on the team.

Same file. Same prompt. Same model. A different answer on Tuesday than on Monday. Usually you run it once more, keep whichever looks right, and move on.

Researchers at Imperial College London and Cambridge decided to count that moment.

They gave seven frontier models eighteen papers and had each model read every paper five times. Only about three items in four came out correct on all five runs. Roughly one in five flipped between right and wrong from one run to the next.

A single run cannot tell you which fifth you are holding.

What stayed with me was the fix. Running the same model again and again stopped helping past a certain point, while pooling the answers of different models kept moving closer to what two human reviewers agreed on. And when the five runs split three to two instead of agreeing five to nothing, the answer was far more likely to be wrong.

"How was this value decided, and by what margin?"

When we look at data quality at Pebblous, the answer that comes back is usually a single accuracy figure. Which items were contested, and how the disagreement was settled, is rarely written down anywhere.

If the split is recorded, you can reopen a finished dataset later and start reading where it was shakiest. How much of the work was automated may matter less, in the end, than whether anyone counted where it disagreed.

▶ https://blog.pebblous.ai/blog/llm-cross-model-consensus-extraction/en/

#Pebblous #DataClinic #DataQuality #Reproducibility #CrossModelConsensus #LLM #ImperialCollege
