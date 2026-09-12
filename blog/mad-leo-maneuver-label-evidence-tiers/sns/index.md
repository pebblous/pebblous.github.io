# SNS 홍보 글: 위성 기동 라벨 1,134건에 증거 등급이 하나씩 붙었다

> 소스: blog/mad-leo-maneuver-label-evidence-tiers/
> 생성일: 2026-09-13
> URL: https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

공개된 위성 기동 라벨은 대개 탐지 알고리즘이 스스로 내놓은 출력이다. 그래서 그 알고리즘을 채점할 독립된 기준이 남지 않는다. 9월 8일 arXiv에 올라온 MAD-LEO는 미션이 직접 보고한 기동 1,134건을 라벨로 삼고, 라벨 옆 칸에 그 사건을 뒷받침하는 독립 관측이 몇 겹인지를 A·B·C 등급으로 함께 적었다.

뒷받침이 얇다고 라벨을 지우지는 않았다. 세 관측이 모두 확보된 것은 754건이고, 나머지 380건은 무엇이 비었는지를 기계가 읽는 형식으로 표시한 채 그대로 공개됐다.

등급이 낮은 쪽이 실제로 나쁜 데이터인지는 저자들이 직접 쟀다. 궤도 기준 지표를 계산할 수 있는 자리에서 A등급과 B등급의 3시그마 커버리지는 91.8%와 91.7%로 거의 붙어 있었다. 반응이 큰 기동은 위성을 궤도에 올릴 때와 임무를 접을 때 몰리는데 하필 그 시기에 관측 인프라가 가장 성기다. 등급이 가르는 것은 자료의 좋고 나쁨이 아니라 관측이 촘촘했던 시기와 성겼던 시기라는 것이 논문의 결론이다.

한계도 데이터셋 안에 적혀 있다. 라벨이 붙은 기동은 대부분 초당 센티미터 수준의 궤도 유지라, 충돌 회피급 기동까지 같은 방법이 따라가는지는 이번 릴리스가 확인해 주지 않는다. 함께 담긴 스타링크 6,785기 구간에는 검증된 기동 기록이 공개돼 있지 않아 라벨 칸을 비워 두었다.

라벨의 정확도를 다시 재는 일과 라벨의 근거를 데이터 안에 남기는 일은 다른 작업이고, 재측정 비용이 큰 현장일수록 두 번째가 먼저 온다. 페블러스가 학습 데이터를 진단할 때 자주 마주치는 자리도 여기다. 라벨은 파일 안에 있는데, 그 라벨을 누가 어떤 근거로 확인했는지는 어디에도 남아 있지 않은 경우.

▶ 전문: https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터라벨링 #MADLEO #위성기동탐지 #저궤도위성 #Starlink

---

## LinkedIn (EN)

Most public labels for satellite maneuvers are a detection algorithm's own output, which leaves nothing independent to score that algorithm against. MAD-LEO, posted to arXiv on September 8, takes 1,134 maneuvers reported by the missions themselves as its labels and adds a column beside each one recording how many layers of independent observation stand behind the event, as tier A, B or C.

Thin support did not get a label deleted. All three sources are in hand for 754 events, and the remaining 380 shipped with the missing sources flagged in machine-readable form.

The authors went on to measure whether the lower tiers really do hold worse data. Wherever an orbit-based metric can be computed at all, three-sigma coverage came out at 91.8% for tier A against 91.7% for tier B. The largest maneuvers cluster in early commissioning and end-of-life disposal, exactly the phases when tracking infrastructure is thinnest. What the tiers separate, the paper concludes, is not good data from bad but the eras when observation was dense from the eras when it was sparse.

The limits are written into the dataset too. The labeled maneuvers are mostly centimeter-per-second station-keeping, so whether a method trained here carries over to avoidance-scale burns is not something this release establishes. The Starlink subset of 6,785 satellites that ships alongside has no published maneuver record to verify against, and its label column was left empty on purpose.

Re-measuring a label's accuracy and recording a label's evidence are two different jobs, and where re-measurement is expensive the second one comes first. We run into the same gap at Pebblous when we audit training data: the label is in the file, and nothing in the file says who confirmed it or on what.

▶ Read: https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataLabeling #MADLEO #SatelliteManeuverDetection #LEO #Starlink

---

## Twitter/X (KO)

위성 기동 라벨 1,134건에 증거 등급이 하나씩 붙었다. 같은 '기동 있음' 라벨이라도 뒷받침하는 독립 관측이 세 겹인지 한 겹이 빈 것인지를 데이터 안에 적어 둔 것이다.

등급은 라벨이 맞았는지를 다시 판정하지 않는다. 근거의 두께만 기록한다.

▸ https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/ko/

#페블러스 #데이터품질 #MADLEO #데이터라벨링

---

## Twitter/X (EN)

1,134 satellite maneuver labels now ship with an evidence tier attached. Same "maneuver occurred" label, but the data records whether three independent observations back it or one of them is missing.

The tier never re-judges the label. It records only how thick the evidence is.

▸ https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/en/

#Pebblous #DataQuality #MADLEO #DataLabeling

---

## Facebook (KO)

"이 라벨, 누가 어떤 근거로 확인한 겁니까."

데이터 품질을 진단하러 가서 가장 자주 하게 되는 질문입니다.

대개 답이 돌아오지 않습니다. 라벨은 파일 안에 또렷하게 남아 있는데, 그 라벨이 무엇을 딛고 붙었는지는 어디에도 남아 있지 않습니다.

이달 초 arXiv에 공개된 위성 데이터셋 하나가 그 빈칸을 다르게 채웠습니다.

저궤도 위성 열한 기가 1992년부터 최근까지 직접 보고한 기동 1,134건. 연구진은 라벨 옆에 칸을 하나 더 만들고, 그 사건을 뒷받침하는 독립 관측이 몇 겹인지를 A·B·C로 적었습니다. 세 겹이 다 확보된 것은 754건. 나머지 380건은 한두 겹이 빈 채로 그대로 공개됐습니다.

'근거 칸'이라 부를 만한 자리입니다. 라벨이 맞았는지를 다시 묻는 칸이 아니라, 그 라벨을 받쳐 준 확인이 몇이었는지만 적는 칸.

제가 눈여겨본 것은 그 380건을 지우지 않았다는 점입니다.

근거가 얇은 행을 버리면 데이터는 깨끗해 보입니다. 그런데 그 행이 왜 얇았는지도 같이 사라집니다. 이 연구진은 대신 무엇이 비었는지를 기계가 읽는 형식으로 적어 두었습니다.

그러고는 등급이 낮은 쪽이 정말 나쁜 데이터인지를 직접 쟀습니다. 지표를 계산할 수 있는 자리에서 B등급은 A등급과 거의 같은 값을 냈습니다. 등급이 가른 것은 자료의 좋고 나쁨이 아니라 관측이 촘촘했던 시기와 성겼던 시기였습니다.

"우리 데이터에는 근거를 적는 칸이 있습니까?"

위성이 지나간 궤도는 다시 잴 수 없습니다. 그래서 이 분야는 라벨을 버리거나 근거의 두께를 남기거나, 둘 중 하나를 먼저 골라야 했습니다. 이미 출하된 제품의 검사 기록. 판독 의견이 갈린 영상. 다시 재는 값이 비싼 자리라면 어느 산업이든 같은 갈림길 앞에 서 있는 것 같습니다.

페블러스가 라벨의 정확도보다 라벨의 이력을 먼저 묻는 이유도 그쪽에 가깝습니다.

▸ https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/ko/

#페블러스 #데이터품질 #MADLEO #AIReadyData #데이터라벨링 #데이터클리닉

---

## Facebook (EN)

"Who checked this label, and on what evidence?"

It is the question I end up asking most often when we audit someone's training data.

Usually no answer comes back. The label sits in the file, perfectly legible, and nothing anywhere records what it rests on.

A satellite dataset posted to arXiv earlier this month filled that blank differently.

Eleven low-orbit satellites, 1,134 maneuvers they reported themselves, going back to 1992. The researchers added one more column beside the label and wrote down how many layers of independent observation stand behind each event. All three layers are in hand for 754 of them. The other 380 went out with a layer or two missing.

Call it the "evidence column." Not a column that re-litigates whether the label was right, only one that records how many checks stood behind it.

What stayed with me is that nobody deleted those 380.

Drop the thinly supported rows and the dataset looks clean. The reason those rows were thin disappears along with them. This team wrote down what was absent instead, in a form a machine can read.

Then they measured whether the thinner tiers really were worse. Wherever a metric could be computed at all, tier B behaved almost exactly like tier A. The tiers separate the eras when tracking was dense from the eras when it was sparse, the paper concludes, not good data from bad.

"Does our data have a column for the evidence?"

A satellite's past orbit cannot be measured a second time. That leaves two options and no third: throw the label away, or keep a record of how thick its evidence was. Inspection records for product that has already shipped. Scans two readers disagreed on. Anywhere re-measurement is expensive, the same fork is waiting.

That is close to why we ask about a label's history before we ask about its accuracy.

▸ https://blog.pebblous.ai/blog/mad-leo-maneuver-label-evidence-tiers/en/

#Pebblous #DataQuality #MADLEO #AIReadyData #DataLabeling #DataClinic
