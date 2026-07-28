# SNS 홍보 글: 전처리 이력을 자동으로 남기는 과학 데이터 파이프라인 REDI

> 소스: blog/redi-data-provenance-pipeline/ko/index.html
> 생성일: 2026-07-29
> URL: https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/ko/
> voice: sns-cover (LinkedIn/Twitter) + reflective (Facebook)

---

## LinkedIn (KO)

과학 AI 논문은 모델 구조와 성능 숫자로 채워지지만, 정작 시간을 가장 많이 잡아먹는 전처리는 연구자 한 명의 노트북 안에서 끝나고 사라진다.

미국 오크리지 국립연구소가 내놓은 REDI는 이 전처리를 수집부터 출력까지 다섯 단계로 표준화하고, 각 단계에서 데이터가 어떻게 바뀌었는지를 자동으로 기록한다. 사람이 로그를 심는 게 아니라, 단계를 만들면 이력이 저절로 따라붙는다. 그 기록은 사람이 읽을 수 있는 한 장의 감사 추적 카드로 정리된다.

이력을 남기다 보니 뜻밖의 지도도 나왔다. 파이프라인 비용을 지배한 건 알고리즘이 아니라 파일 입출력이었고, 저장 포맷만 NPZ에서 Zarr로 바꿔도 병렬 처리량이 약 세 배 올랐다.

결정적 차이는 그다음이다. REDI는 이 다섯 단계를 사람이 매번 새로 짜는 코드가 아니라, 에이전트가 호출하는 다섯 개 운영 모드로 노출한다. 물론 무엇을 어떤 순서로 변환할지 아는 도메인 지식은 여전히 사람의 몫으로 남는다.

전처리가 일회성 수작업에서 계보가 남는 공용 인프라로 옮겨 가는 지점이다.

▶ 전문: https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #REDI #Flowcept #데이터파이프라인 #출처추적 #재현성 #과학데이터

---

## LinkedIn (EN)

The scientific-AI papers get filled with model architecture and benchmark scores, while the preprocessing that actually eats the most time lives and dies inside a single researcher's laptop.

REDI, from Oak Ridge National Laboratory, standardizes that preprocessing into five stages from ingest to output, and automatically records how the data changed at each one. Nobody plants the logging by hand; build a stage and the provenance follows. Those records are then compiled into a single human-readable audit-trail card.

Keeping that history turned up an unexpected map. What dominated pipeline cost was not the algorithms but file I/O, and simply switching the storage format from NPZ to Zarr raised parallel throughput roughly threefold.

The decisive difference comes next. REDI exposes those five stages not as code you rewrite every time, but as five operating modes an agent can call directly. The domain knowledge of what to transform, and in what order, still belongs to people.

This is where data preparation moves from one-off manual work to shared infrastructure that leaves a lineage.

▶ Read: https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #REDI #Flowcept #DataPipeline #DataProvenance #Reproducibility #ScientificAI

---

## Twitter/X (KO)

과학 데이터 전처리는 늘 연구자 노트북 안에서 사라졌다. 오크리지 국립연구소의 REDI는 다섯 단계 전처리마다 데이터가 어떻게 바뀌었는지를 자동으로 기록하고, 에이전트가 그 단계를 직접 호출한다.

일회성 수작업에서 계보가 남는 공용 인프라로.

https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/ko/

#페블러스 #데이터클리닉 #REDI #데이터파이프라인

---

## Twitter/X (EN)

Scientific data preprocessing always vanished inside a researcher's laptop. Oak Ridge's REDI auto-records how data changes at every one of five stages, and lets agents call those stages directly.

From one-off manual work to infrastructure that leaves a lineage.

https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/en/

#Pebblous #DataClinic #REDI #DataProvenance

---

## Facebook (KO)

반년 전 자기가 만든 데이터셋을 다시 열어 본 적이 있으신가요.

정규화를 어디서 어떤 계수로 걸었는지, 격자를 어떤 순서로 맞췄는지 기억이 나지 않습니다. 스크립트는 논문에 실리지 않았고, 결과 숫자만 남아 있습니다.

과학 AI에서 데이터를 학습에 올릴 수 있게 다듬는 전처리는 거의 언제나 이렇게 한 사람의 노트북 안에서 벌어지고, 그 안에서 사라집니다.

미국 오크리지 국립연구소가 내놓은 REDI를 보면서 눈에 걸린 건 성능 숫자가 아니었습니다. 이 파이프라인은 데이터가 단계마다 어떻게 바뀌었는지를 스스로 기록해, 사람이 읽을 수 있는 한 장의 이력 카드로 남깁니다.

"지나온 길이 남는 데이터." 결과만 남던 자리에 과정이 남는다는 건 생각보다 큰 차이였습니다. 반년 뒤 누가 같은 데이터를 다시 열어도, 그 데이터가 어디를 거쳐 왔는지 되짚을 수 있으니까요.

물론 무엇을 어떤 순서로 변환할지 아는 도메인 지식은 여전히 사람의 몫입니다. 자동화가 잘하는 건, 그 지식이 남긴 과정을 빠뜨리지 않고 적어 두는 일이고요.

페블러스가 DataClinic으로 데이터를 진단하며 지향해 온 방향도 여기서 멀지 않습니다. 정제의 결과만이 아니라, 그 정제가 어디서 어떻게 이뤄졌는지를 감사할 수 있게 남기는 것.

깨끗한 데이터와 지나온 길이 남는 데이터는, 어쩌면 다른 이야기인지도 모르겠습니다.

https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/ko/

#페블러스 #데이터클리닉 #데이터품질 #REDI #데이터파이프라인 #AIReadyData

---

## Facebook (EN)

Have you ever reopened a dataset you built six months ago?

You can't quite remember where the normalization was applied, or with what coefficient, or in what order the grids were aligned. The script never made it into the paper. Only the final numbers remain.

In scientific AI, the preprocessing that turns raw data into something a model can learn from almost always happens like this, inside one person's laptop, and disappears there.

What caught my eye in REDI, from Oak Ridge National Laboratory, wasn't the performance figures. This pipeline records, on its own, how the data changed at each stage, and leaves behind a single audit card a person can actually read.

"Data that keeps the path it traveled." Having the process remain where only results used to remain turned out to matter more than it sounds. Six months later, anyone reopening the same data can trace where it has been.

The domain knowledge of what to transform, and in what order, still belongs to people, of course. What automation does well is write down that process without missing a step.

The direction Pebblous has pursued with DataClinic isn't far from here: leaving behind not only the result of cleaning, but an auditable record of where and how that cleaning happened.

Clean data and data that keeps its path may, in the end, be two different stories.

https://blog.pebblous.ai/blog/redi-data-provenance-pipeline/en/

#Pebblous #DataClinic #DataQuality #REDI #DataPipeline #AIReadyData
