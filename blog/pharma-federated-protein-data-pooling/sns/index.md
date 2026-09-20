# SNS 홍보 글: 약 만드는 회사들, 데이터는 안 내주고 AI만 같이 가르친다

> 소스: blog/pharma-federated-protein-data-pooling/ko/index.html
> 생성일: 2026-09-21
> URL: https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

서로 경쟁하는 제약사 다섯 곳이 한 번도 공개한 적 없는 단백질 구조 2만여 건으로 같은 AI 모델 하나를 함께 학습시켰습니다. 구조 파일은 한 건도 회사 밖으로 나가지 않았습니다.

네이처가 9월에 전한 소식입니다. 모임의 이름은 AI 구조생물학 네트워크(AISB)이고, 가르친 대상은 컬럼비아대 모하메드 알쿠라이시 연구실이 알파폴드3를 오픈소스로 다시 구현한 오픈폴드3입니다. 데이터를 낸 곳은 애브비, 존슨앤드존슨, 아스텍스, 브리스톨 마이어스 스퀴브, 다케다이고, 연합학습 플랫폼은 독일 회사 아페리스가 맡았습니다.

방식은 연합학습입니다. 데이터를 한곳에 모으는 대신 모델을 데이터가 있는 곳으로 보냅니다. 각 회사가 자기 서버 안에서 모델을 몇 걸음 학습시키고 바뀐 파라미터만 중앙으로 올리면, 중앙은 그것을 평균 내 하나의 모델로 만들어 다시 내려보냅니다. 아페리스는 중앙이 받은 것이 구조가 아니라 파라미터였고 그것을 거꾸로 풀어 원본을 되살릴 수 없도록 설계했다고 적었습니다.

성적은 시험용 구조 1,056건에서 쟀습니다. 단백질과 약물이 맞닿는 자리를 높은 품질로 그린 비율이 52.1%였고, 공개 데이터로만 학습한 같은 계열 모델은 35.6%에 그쳤습니다. 더 눈에 띄는 것은 그다음 비교입니다. 다섯 회사 가운데 어느 한 곳의 데이터만으로 학습시킨 모델도 합친 모델을 넘지 못했습니다.

읽을 때 함께 놓아야 할 조건이 있습니다. 아직 동료심사를 거치지 않았고, 유일한 출처는 연합학습을 주관한 아페리스가 자사 블로그에 올린 기술 리포트입니다. 성능을 잰 구조도 데이터를 낸 바로 그 다섯 회사에서 떼어 낸 것이며, 회사별 단독 모델의 수치와 완성된 모델의 가중치는 공개되지 않았습니다.

그래서 이 사례에서 새로운 것은 알고리즘이 아니라 합의입니다. 그리고 리포트는 합의 다음에 남아 있던 일까지 기록했습니다. 각사가 수십 년 동안 자기 형식으로 쌓아 온 구조를 같은 규칙으로 옮기고, 모든 구조가 그 규칙을 지켰는지 검사하고, 전체를 학습 파이프라인에 한 번 통째로 흘려보내 보고, 문제가 생긴 구조는 익명 식별자만 소유사에 돌려주는 일입니다. 아페리스는 이 작업이 결코 자동으로 되지 않았다고 썼습니다. 페블러스가 AI-Ready Data를 이야기할 때 드는 조건도 같은 자리에 있습니다. 데이터를 합치자는 결정과 데이터가 합쳐질 수 있는 상태는 서로 다른 물건입니다.

▶ 전문: https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #연합학습 #데이터풀링 #오픈폴드3 #AISB #아페리스 #애브비

---

## LinkedIn (EN)

Five drug companies that compete with one another trained a single AI model on more than 20,000 protein structures none of them had ever released. No structure file left any of their servers.

Nature reported the result in September. The group is the AI Structural Biology Network, and the model is OpenFold3, the open-source rebuild of AlphaFold 3 from Mohammed AlQuraishi's lab at Columbia University. AbbVie, Johnson & Johnson, Astex, Bristol Myers Squibb and Takeda contributed the data, and Apheris, a German federated-learning company, ran the platform.

The training was federated. Instead of collecting data in one place, the model travels to where the data sits. Each company trained it for a few steps inside its own environment and sent back only the changed parameters, which the center averaged into one model and returned. Apheris says the center received parameters rather than structures, and that the setup was designed so no structure could be recovered from them.

Scoring ran on 1,056 held-out structures. The combined model drew the contact between protein and drug at high quality for 52.1% of them, against 35.6% for the same model family trained on public data alone. The sharper comparison comes next: no model fine-tuned on any single company's data caught up with the combined one.

Several conditions belong next to those figures. The work has not been peer-reviewed, and the only source is a technical report Apheris posted on its own blog, co-authored with researchers from the five participants. The test structures were set aside by those same five companies, and neither the per-company scores nor the model weights have been released.

The novelty here is the agreement rather than the algorithm, and the report records what still had to be done once that agreement was in place. Structures each company had accumulated for decades under its own conventions had to be moved into one shared format, checked against that format, and run through the training pipeline once end to end as a rehearsal. When a file failed, only an anonymous identifier went back to its owner. Apheris writes that none of this happened automatically. Pebblous works on that same layer: deciding to combine data and holding data in a state where it can be combined are two different things.

▶ Read: https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #FederatedLearning #DataPooling #OpenFold3 #AISB #Apheris #AbbVie

---

## Twitter/X (KO)

경쟁 관계인 제약사 다섯 곳이 한 번도 공개하지 않은 단백질 구조 2만여 건으로 같은 AI를 함께 학습시켰습니다. 구조 파일은 회사 밖으로 나가지 않았고 오간 것은 모델 파라미터뿐입니다. 합친 모델은 공개 데이터로만 배운 모델도, 각 회사가 혼자 학습시킨 모델도 앞섰습니다.

성능을 가른 것은 모델 구조가 아니라 데이터였습니다. 아직 동료심사를 거치지 않은 결과라는 조건은 함께 읽어야 합니다.

https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/ko/

#페블러스 #데이터품질 #연합학습 #오픈폴드3

---

## Twitter/X (EN)

Five competing drug companies trained one AI model on more than 20,000 protein structures none of them had ever published. No structure file left a company; only model parameters moved. The combined model beat the public-data model and every model trained on a single company's data alone.

The data decided this, not the architecture. The result has not been peer-reviewed.

https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/en/

#Pebblous #DataQuality #FederatedLearning #OpenFold3

---

## Facebook (KO)

아무도 그 크기를 모르는 데이터가 있습니다.

제약사들이 사내 서버에 쌓아 둔, 단백질과 후보 약물이 맞물린 구조 파일입니다. 다 합치면 공개 데이터베이스보다 많을 것이라는 추정만 나와 있습니다.

연구자 한 사람이 후보 물질 하나를 붙잡고 같은 단백질에 수백 번 붙여 봅니다. 잘 붙은 것도, 엉뚱하게 붙은 것도 그대로 기록됩니다. 그 기록은 논문으로 나가지 않습니다. 어느 회사가 어느 표적의 어느 자리를 노리고 있는지가 거기서 다 읽히기 때문입니다.

그 데이터를 다섯 회사가 같은 모델 하나를 가르치는 데 썼다는 소식을 네이처가 9월에 전했습니다.

애브비, 존슨앤드존슨, 아스텍스, 브리스톨 마이어스 스퀴브, 다케다. 서로 경쟁하는 회사들입니다. 구조 파일은 각자 서버에 그대로 두고, 모델을 그 서버로 보내 조금씩 학습시킨 뒤 바뀐 파라미터만 가운데로 올렸습니다. 회사 밖으로 나간 원본 구조는 0건입니다.

시험용 구조 1,056건에서, 단백질과 약물이 맞닿는 자리를 높은 품질로 그린 비율이 52.1%였습니다. 공개 데이터로만 배운 같은 계열 모델은 35.6%였습니다. 다섯 회사 가운데 어느 한 곳의 데이터만으로 학습시킨 모델도 이 성적에 닿지 못했습니다.

아직 동료심사를 거치지 않은 수치이고, 출처는 학습을 주관한 회사가 자사 블로그에 올린 기술 리포트입니다.

오래 남은 쪽은 성적표가 아니라 그 앞 페이지였습니다.

리포트에는 학습을 누르기 전에 끝냈어야 한 일이 적혀 있습니다. 각사가 수십 년 동안 자기 형식으로 쌓아 온 구조를 같은 규칙으로 옮기는 일. 모든 구조가 그 규칙을 지켰는지 검사하는 일. 전체를 학습 파이프라인에 한 번 통째로 흘려보내 보는 예행 연습. 그리고 문제가 생긴 구조는 미리 붙여 둔 익명 식별자만 소유사에 돌려주어, 어느 회사의 무엇이 잘못됐는지는 아무도 모르게 두는 일.

아페리스는 이 작업이 결코 자동으로 되지 않았다고 적었습니다.

합의는 회의실에서 납니다. '합쳐질 수 있는 상태'는 그 전 몇 해 동안 만들어집니다.

페블러스가 데이터를 볼 때 값이 맞는지보다 먼저 확인하는 것도 그 상태입니다. 같은 항목이 부서마다 같은 이름과 같은 단위로 적혀 있는지, 그 값이 언제 어떤 조건에서 나왔는지가 함께 남아 있는지.

"합의가 내일 이뤄진다면, 우리 데이터는 오늘 합쳐질 수 있는 상태입니까?"

다섯 회사가 학습을 마치는 데는 열 주가 걸리지 않았다고 합니다. 그 시계는 첫 연합학습을 돌린 날부터 재기 시작합니다. 궁금해지는 쪽은 오히려 그 앞의 시간입니다.

https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/ko/

#페블러스 #데이터클리닉 #데이터품질 #연합학습 #오픈폴드3 #AISB

---

## Facebook (EN)

Nobody knows how large the archive is.

Drug companies keep the structures of their proteins locked together with candidate molecules on their own servers. Put every company's holdings together and there may be more of them than in the public database, though that is only an estimate.

A chemist takes one candidate compound and binds it to the same protein a few hundred times. The good fits and the wrong ones are recorded alike. None of it goes into a paper. Read those files and you know which company is going after which site on which target.

In September, Nature reported that five of those companies had put exactly that data to work training one shared model.

AbbVie, Johnson & Johnson, Astex, Bristol Myers Squibb, Takeda. Competitors. The structure files stayed on each company's servers, the model travelled out to them, and only the changed parameters came back. Original structures that left a company: none.

On 1,056 held-out structures, the combined model drew the contact between protein and drug at high quality 52.1% of the time. The same model family trained on public data alone managed 35.6%. No model trained on any single company's data reached that mark either.

The figures have not been peer-reviewed. They come from a technical report posted by the company that ran the federation.

The page that stayed with me was the one before the scoreboard.

The report lists what had to be finished before any training could start. Structures each company had built up for decades under its own conventions, moved into one shared format. Every structure checked against that format. The whole set run through the training pipeline once as a rehearsal. And when a file failed, only an anonymous identifier went back to its owner, so nobody learned whose file it was.

Apheris writes that none of this happened automatically.

Agreement is reached in a meeting room. "A state in which data can be combined" is built over the years before it.

Pebblous asks about that state before asking whether the values are correct. Is the same field written under the same name and the same unit across teams? Does the condition a value came from still travel with it?

"If the agreement came tomorrow, would our data be ready to combine today?"

The five companies finished the training in under ten weeks. That clock starts on the day of the first federated run. The stretch worth asking about is the one before it.

https://blog.pebblous.ai/blog/pharma-federated-protein-data-pooling/en/

#Pebblous #DataClinic #DataQuality #FederatedLearning #OpenFold3 #AISB
