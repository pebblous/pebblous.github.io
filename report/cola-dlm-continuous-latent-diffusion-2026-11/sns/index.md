# SNS 홍보 글: 확산 언어모델 Cola DLM, 글자보다 뜻을 먼저 짠다

> 소스: report/cola-dlm-continuous-latent-diffusion-2026-11
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/report/cola-dlm-continuous-latent-diffusion-2026-11/ko/
> URL (EN): https://blog.pebblous.ai/report/cola-dlm-continuous-latent-diffusion-2026-11/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

바이트댄스 Seed 연구진이 내놓은 확산 언어모델 Cola DLM 은 트랜스포머를 치우지 않았다.

달라진 자리는 확산이 도는 바닥이다. Text VAE 가 문장을 연속 좌표에 올리면 확산 트랜스포머가 거기서 응답 전체의 뜻을 짜고, 디코더가 맨 끝에 글자를 찍는다. 저자 열한 명이 이 논문을 arXiv 에 올린 것은 5월 7일이다. 1저자는 일주일 뒤 자기 블로그에, 연속으로 다룬다는 것만으로 이산을 넘어선다는 이론적 근거는 아직 없다고 적었다.

여덟 과제 비교는 논문에 표가 아니라 그림으로 실려, 어디서 이기고 졌는지를 셀 방법이 없다. 인쇄된 절대 점수는 공개 저장소에 있고, GitHub README 와 HuggingFace 모델카드의 점수표가 두 줄에서 갈리고 README 는 자기 평균이 논문 최종 평균보다 높다고 적는다.

더 멀리 가는 것은 좌표계를 실험한 대목이다. 좌표 하나를 16개 수 대신 128개로 적자 세 과제 평균이 8.7 에서 11.8 로 움직였고, 최종 설정은 가장 낮은 쪽이다. 전문은 이 사례를 잠재 공간의 품질 문제로 짚었다.

남의 모델 성적표를 받아 읽는 쪽이 물을 것은 하나다. 그 점수가 표로 인쇄돼 있는가, 그림으로만 있는가.

▶ 전문: https://blog.pebblous.ai/report/cola-dlm-continuous-latent-diffusion-2026-11/ko/
#ColaDLM #확산언어모델 #잠재공간 #AI평가 #페블러스

---

## LinkedIn · Facebook (EN)

Cola DLM, the continuous latent diffusion language model out of ByteDance Seed, did not retire the transformer.

What changed is where the diffusion runs. A Text VAE maps a sentence into a continuous latent space, a diffusion transformer works out the meaning of the entire response inside it, and a decoder prints the words at the very end. Eleven researchers posted the work on 7 May. A week later the first author wrote on a personal blog that no theory on hand says continuity has to beat discreteness.

The paper's eight-benchmark comparison is drawn as a figure rather than printed as a table, leaving no way to count which of the eight it wins. Absolute scores do exist in the open repository, where the GitHub README and the HuggingFace model card part company on two rows, and the README notes that its average sits above the final average in the paper.

The experiments on the latent space itself travel further. Logging each coordinate with 128 numbers instead of 16 moved a three-benchmark average to 11.8 from 8.7, and the setting that shipped is the weakest of the three. The full report reads the case as a question about the quality of that space.

Anyone handed a model scorecard has one thing to check: whether the numbers were printed in a table at all, or only drawn in a figure.

▶ Read: https://blog.pebblous.ai/report/cola-dlm-continuous-latent-diffusion-2026-11/en/
#ColaDLM #DiffusionLLM #LatentSpace #AIEvaluation #Pebblous
