# 회사형 문안 예시 (형님 판정 2026-11-21·25)

목소리·길이·끝맺음의 기준이다. 끝맺음이 세 편 모두 다르다 — 확인할 일 / 단서 / 전문의 해석. 글에 맞는 것을 고른다.

---

## 엔비디아·허깅페이스 — `blog/nvidia-hugging-face-after-huang-exit`

### LinkedIn · Facebook (KO)

엔비디아가 허깅페이스를 129억 달러에 사는 계약은 젠슨 황 사임 뒤에도 유지된다.

임시 대표 콜레트 크레스는 11월 17일 실적 발표에서 인수 계속을 확인했다. 엔비디아는 9월 미국 증권거래위원회 공시에 다른 칩 공급사를 계속 지원한다고 적었다. 그러나 무엇을 어느 수준까지 지원할지는 공시 어디에도 없다. 로이터에 따르면 미국 법무부는 10월부터 이 거래를 반독점 조사하고 있다.

허깅페이스는 개발자 1,800만 명이 모델과 데이터셋을 올리고 내려받는 플랫폼이다. 2018년 마이크로소프트의 깃허브 인수가 전례로 거론되지만, 엔비디아에게는 어떤 모델이 어떤 칩에서 잘 도는지가 곧 본업이다.

데이터를 다루는 팀이 지금 확인할 것은 하나다. 쓰는 모델과 데이터셋이 자체 저장소에 사본으로 있는가.

▶ 전문: https://blog.pebblous.ai/blog/nvidia-hugging-face-after-huang-exit/ko/
#엔비디아 #허깅페이스 #오픈소스AI #반독점 #페블러스

### LinkedIn · Facebook (EN)

Nvidia's $12.9 billion acquisition of Hugging Face will go ahead despite Jensen Huang's resignation.

Interim CEO Colette Kress confirmed the deal on the November 17 earnings call. Nvidia's September SEC filing commits it to continue supporting other silicon vendors, but sets no level or scope for that support. Reuters reported in October that the US Department of Justice had opened an antitrust inquiry into the deal.

Hugging Face hosts models and datasets for 18 million developers. Microsoft's 2018 acquisition of GitHub is the usual precedent, with one difference: for Nvidia, which model runs well on which chip is the core business.

The practical question for data teams is whether the models and datasets they rely on exist as copies in their own storage.

▶ Read: https://blog.pebblous.ai/blog/nvidia-hugging-face-after-huang-exit/en/
#Nvidia #HuggingFace #OpenSourceAI #Antitrust #Pebblous

---

## ERNIE 5.5 — `report/ernie-5-5-benchleaking-base-model-2026-11`

### LinkedIn · Facebook (KO)

바이두 ERNIE 5.5의 기반모델이 코딩 시험 HumanEval 문항의 96.3%를 학습 데이터에서 기억해 냈다.

11월 16일 arXiv에 공개된 프리프린트(동료 심사 전)는 공개 기반모델 넷에게 벤치마크를 풀게 한 뒤 생성을 이어 가게 했다. 입력에 없던 다음 문항이 정답과 함께 나왔다. 같은 시험에서 딥시크 기반모델의 재현율은 9.1%였다. 오염은 시험마다가 아니라 모델과 시험의 조합마다 다르다는 뜻이다.

논문은 샌 문항을 오답으로 치고 다시 매긴 점수를 제안한다. 이 기준으로 매기면 ERNIE 5.5는 네 모델 가운데 1위에서 꼴찌로 내려간다.

다만 바이두가 모델 카드에 적은 점수는 다른 판본의 시험이다. 전문은 공개 모델 카드 아홉 장을 확인한 결과도 담았다.

▶ 전문: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/ko/
#ERNIE #벤치마크오염 #HumanEval #AI평가 #페블러스

### LinkedIn · Facebook (EN)

Baidu's ERNIE 5.5 base model reproduced 96.3% of the HumanEval coding benchmark, according to a new preprint.

The paper, posted to arXiv and not yet peer reviewed, ran 20 benchmarks across four open base models and let each keep generating after its answer. Unseen exam questions followed, complete with reference solutions. DeepSeek's base model reproduced 9.1% of the same test, so contamination varies by model as well as by benchmark.

Re-scored with leaked items counted as wrong, ERNIE 5.5 falls from first place to last among the four.

Baidu's own model card reports a different edition of the test, so the finding is not that its advertised score was memorized. The full report also checks nine public model cards for contamination disclosures.

▶ Read: https://blog.pebblous.ai/report/ernie-5-5-benchleaking-base-model-2026-11/en/
#ERNIE #BenchmarkContamination #HumanEval #AIEvaluation #Pebblous

---

## KISA 스팸 데이터 — `blog/kisa-spam-data-opening-ai-blocking`

### LinkedIn · Facebook (KO)

KISA가 개방한 스팸 신고 데이터로 삼성전자 차단 서비스가 막은 악성 문자가 약 5억 건에 이른다.

한국인터넷진흥원(KISA)과 방송미디어통신위원회는 11월 20일 '2026 스팸 데이터 개방 성과 공유회'에서 이 수치를 공개했다. KISA는 국민이 신고한 스팸을 AI로 분류해 공공기관과 기업에 제공한다. 삼성전자가 받는 분량은 월평균 약 50만 건이다. LG유플러스의 AI 통화 서비스 익시오는 협력 3개월 동안 스팸 전화 약 1,200만 건을 사전 차단했다.

두 수치는 기간도 대상도 달라 합산해 읽을 값이 아니다. 문자는 20개월 누적이고 전화는 3개월 치다.

전문은 이 사례를 AI 학습 데이터의 공급 주기 문제로 짚었다. 스팸 발신번호는 며칠이면 바뀌기 때문이다.

▶ 전문: https://blog.pebblous.ai/blog/kisa-spam-data-opening-ai-blocking/ko/
#KISA #스팸차단 #공공데이터 #AI학습데이터 #페블러스

### LinkedIn · Facebook (EN)

Spam reports opened up by Korea's internet security agency have helped Samsung block about 500 million malicious text messages.

KISA and the Korea Media and Communications Commission released the figure in Seoul on November 20. KISA classifies spam reported by the public with AI and supplies it to public bodies and companies; Samsung receives about 500,000 items a month. LG Uplus's AI call service ixi-O blocked about 12 million spam calls in its first three months of cooperation.

The two figures cover different periods and channels, texts over 20 months and calls over three, and should not be added together.

The full analysis looks at the case as a question of supply frequency for AI training data, because spam sender numbers change within days.

▶ Read: https://blog.pebblous.ai/blog/kisa-spam-data-opening-ai-blocking/en/
#KISA #SpamBlocking #OpenData #AITrainingData #Pebblous
