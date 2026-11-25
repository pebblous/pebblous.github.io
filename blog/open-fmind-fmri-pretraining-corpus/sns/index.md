# SNS 홍보 글: 뇌 영상 데이터 Open-fMIND, 영국 바이오뱅크를 따라잡을까?

> 소스: blog/open-fmind-fmri-pretraining-corpus
> 생성일: 2026-11-25
> URL (KO): https://blog.pebblous.ai/blog/open-fmind-fmri-pretraining-corpus/ko/
> URL (EN): https://blog.pebblous.ai/blog/open-fmind-fmri-pretraining-corpus/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

뇌 영상 공개 저장소 OpenNeuro에 흩어져 있던 연구 322건을 한 규격으로 다시 처리한 Open-fMIND가 공개됐다.

11월 16일 arXiv에 올라온 프리프린트(동료 심사 전)에 따르면 새로 촬영한 영상은 한 장도 없다. 저자들이 한 일은 전처리 도구를 fMRIPrep 25.2.3 한 버전으로 고정해 전부 다시 돌리고, 52개 아틀라스로 나눈 결과에 원 데이터셋 번호와 컨테이너 다이제스트까지 파일마다 붙여 4.35TB로 내놓은 것이다. 이 묶음으로 사전학습한 뇌 모델과 영국 바이오뱅크로 사전학습한 같은 구조의 모델을 여섯 과제에 걸었더니 두 칸에서 앞서고 한 칸에서 같고 세 칸에서 뒤졌다.

영국 바이오뱅크는 연구 계획을 내고 승인을 받아야 쓸 수 있는 대형 코호트다. 승인 없이 내려받을 수 있는 자료만으로 비슷한 출발점이 나왔다는 뜻이지만, 동등하다고 읽을 결과는 아니다. 세 인코더 모두 사전학습을 한 번씩만 돌렸다고 논문이 적어 두었다.

다만 BIDS라는 공통 규격으로 이미 정리돼 있던 자료에서도 참가자 2,637명이 전처리를 끝내지 못했으니, 가진 데이터를 다시 돌리는 쪽이 싸다는 계산에는 규격을 맞추는 비용이 함께 들어가야 한다.

▶ 전문: https://blog.pebblous.ai/blog/open-fmind-fmri-pretraining-corpus/ko/
#OpenfMIND #뇌영상데이터 #공개데이터 #AIReadyData #페블러스

---

## LinkedIn · Facebook (EN)

Open-fMIND, a 4.35TB corpus of brain imaging data released this month, was assembled without acquiring a single new scan.

A preprint posted to arXiv on November 16 and not yet peer reviewed describes the method: human fMRI studies were pulled from the public repository OpenNeuro, 322 of them survived curation, and all were reprocessed through one pinned version of fMRIPrep. Every run was parcellated with 52 atlases, and each file carries the accession number and version of its source dataset along with the digest of the container that processed it. The released corpus covers 11,379 participants.

The authors then pretrained one encoder on this corpus and another of the same architecture on the UK Biobank, a cohort that takes an application and approval to reach. Across six downstream tasks the open corpus came out ahead on two, level on one and behind on three. Close to the gated resource, then, though not equal to it, and the paper notes that each encoder was pretrained exactly once.

Even with studies already standardized on BIDS, 2,637 of the participants downloaded never finished preprocessing, which is the figure any team pricing a reprocessing job against fresh data should budget for first.

▶ Read: https://blog.pebblous.ai/blog/open-fmind-fmri-pretraining-corpus/en/
#OpenfMIND #fMRI #OpenData #AIReadyData #Pebblous
