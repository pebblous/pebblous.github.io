# SNS 홍보 글: 따로 찍은 사진 속 저 별, 같은 별인지 어떻게 알까?

> 소스: blog/spitzer-data-fusion-record-linkage/ko/index.html
> 생성일: 2026-09-18
> URL: https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

9월 16일 arXiv에 올라온 데이터 논문 한 편이 실제로 푼 문제는 천문학이 아니라 레코드 링키지다.

스피처 우주망원경이 훑은 여덟 영역의 하늘에는 수십 개 서베이가 겹쳐 찍혀 있다. 소스를 뽑아내는 방식도 좌표를 푸는 방식도 서베이마다 제각각이다. 마티아 바카리는 그 기록들을 천체 440만 개로 묶어, 자외선부터 원적외선까지의 관측이 천체마다 한 줄에 실린 데이터베이스로 공개했다.

눈여겨볼 숫자는 천체 수가 아니라 반경이다. 두 관측을 같은 천체로 볼지 가르는 거리를 파장마다 달리 잡아, 장비가 또렷하게 보는 대역에서는 1초각, 가장 흐릿하게 보는 원적외선에서는 12초각까지 벌렸다. 파장이 길어질수록 망원경이 그리는 점이 뭉툭해지기 때문이다.

순서도 정해져 있다. 정렬이 먼저고 반경이 나중이다. 반경을 대기 전에 모든 입력 카탈로그를 2MASS 좌표계에 등록해 프레임 사이의 체계 오차부터 걷어 냈다. 이 보정이 없으면 두 관측이 1초각 안에 있는지 따지는 판정이 천체 사이의 거리가 아니라 좌표 원점의 어긋남을 재게 된다고 논문은 못 박는다.

옮겨 올 때 걸리는 지점도 분명하다. 천체 매칭이 기대는 척도는 좌표 거리 하나뿐이지만, 사람이나 회사를 묶는 일에는 이름 표기나 개명처럼 거리로 환산되지 않는 축이 얹힌다.

그래도 남는 것이 있다. 저자는 반경 숫자와 좌표 보정을 README에 적어 데이터와 함께 내보냈고, 그래서 남이 그 판정에 동의하지 않을 자유가 생긴다. 같은 고객, 같은 부품, 같은 환자를 묶는 우리 쪽 기준은 대개 그만큼 적혀 있지 않다.

▶ 전문: https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Spitzer #2MASS #레코드링키지 #엔티티리졸루션 #데이터계보 #마스터데이터

---

## LinkedIn (EN)

A data paper posted to arXiv on September 16 solves a problem that is not really astronomy. It is record linkage.

Eight fields of sky that the Spitzer Space Telescope swept have been photographed over and over by dozens of separate surveys, each extracting its sources and solving its astrometry its own way. Mattia Vaccari merged those records into 4.4 million objects and released them as a database where one row carries a single object from the ultraviolet through to the far infrared.

The number to watch is not the object count. It is the radius. The distance that decides whether two detections are the same object varies by wavelength, from 1 arcsecond in the bands where the instrument sees sharply out to 12 arcseconds in the far infrared, because a longer wavelength leaves a blunter point on the detector.

The order matters as much as the values. Alignment comes first, the radius second: every input catalog was registered to the 2MASS frame before any matching began. Without that correction, the paper states, asking whether two detections fall within 1 arcsecond measures the offset between coordinate frames rather than the distance between objects.

The limits of the analogy are just as clear. Matching sources on the sky runs on a single scale, the distance between two coordinates. Linking people or companies adds axes that do not convert into distance at all, from spelling variants to name changes.

What does carry over is the paperwork. The radii and the astrometric corrections travel in a README alongside the data, which is what gives anyone else the standing to disagree with a call. The rules that decide which records are the same customer, the same part, the same patient rarely travel that well.

▶ Read: https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Spitzer #2MASS #RecordLinkage #EntityResolution #DataProvenance #MasterData

---

## Twitter/X (KO)

스피처 우주망원경 여덟 영역에서 고른 천체 440만 개를 하나에 한 줄씩 묶은 데이터베이스가 공개됐다. 두 관측을 같은 천체로 볼지 가르는 반경을 파장마다 달리 잡고, 그 반경을 대기 전에 좌표계부터 맞췄다.

천문학 논문이지만 실제로 푼 문제는 레코드 링키지다. 어디까지를 한 대상의 기록으로 볼지 정하는 일.

▶ https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/ko/

#페블러스 #데이터품질 #Spitzer #레코드링키지

---

## Twitter/X (EN)

A new public database merges 4.4 million sources across eight Spitzer fields into one row each. The radius that decides whether two detections are the same object changes with wavelength, and every catalog is aligned to a common frame before any of it.

The paper is astronomy. The problem it solves is record linkage.

▶ https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/en/

#Pebblous #DataQuality #Spitzer #RecordLinkage

---

## Facebook (KO)

"이 둘, 같은 사람일까요?"

고객 목록을 정리해 본 분이라면 이 질문 앞에서 커서를 멈춰 보신 적이 있을 겁니다.

이름이 같고 생년월일도 같은데 주소가 한 글자 다릅니다. 합칠지 말지는 결국 누군가 정해야 합니다.

지난주 arXiv에 올라온 천문학 데이터 논문을 읽으면서, 같은 종류의 결정을 전혀 다른 자리에서 다시 만났습니다.

마티아 바카리는 스피처 우주망원경이 훑은 하늘에서 천체 440만 개를 골라, 자외선부터 원적외선까지의 관측을 천체마다 한 줄에 실어 공개했습니다. 같은 하늘을 수십 개 서베이가 제각기 다른 규약으로 찍어 둔 자료들입니다.

여기서 정해진 것은 천체의 목록이 아니라 '판정의 눈금'이었습니다.

두 관측을 같은 천체로 볼지 가르는 거리를 파장마다 달리 잡았습니다. 장비가 또렷하게 보는 대역에서는 1초각으로 깐깐하게, 흐릿하게 보는 대역에서는 12초각까지 너그럽게. 장비의 물리적 한계가 판정 기준 안으로 그대로 들어와 있는 셈입니다.

더 오래 남은 것은 순서였습니다. 반경을 대기 전에 모든 입력 카탈로그를 2MASS라는 공통 좌표계에 먼저 등록했습니다. 잣대가 카탈로그마다 어긋나 있으면, 반경을 아무리 정교하게 파장별로 나눠 놓아도 재고 있는 것은 천체 사이의 거리가 아니라 그 어긋남이 되기 때문입니다. 그 숫자들은 전부 README에 적혀 데이터와 함께 나갔습니다.

"우리 데이터에서 '같은 고객'의 기준은 누가, 무엇을 근거로 정하고 있나요?"

유사도 임계값이 왜 0.9인지, 그 값을 언제 누가 올렸는지가 파이프라인 코드 안에만 남아 있다면, 나중에 그 판정을 검토하려는 사람은 결과부터 거꾸로 추측해야 합니다. 페블러스가 데이터 품질을 진단하면서 가장 오래 붙들게 되는 자리도 대개 여기입니다.

별을 묶는 일과 사람을 묶는 일이 같지는 않습니다. 이름 표기나 개명처럼 거리로 환산되지 않는 축이 우리 쪽에는 더 얹혀 있습니다. 그래도 판정의 눈금을 데이터의 성질에 맞춰 나눠 잡는 일, 그리고 그 눈금을 결과물과 함께 내보내는 일은 하늘 바깥에서도 해 볼 만한 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/ko/

#페블러스 #Spitzer #레코드링키지 #엔티티리졸루션 #데이터품질 #데이터클리닉

---

## Facebook (EN)

"Are these two the same person?"

Anyone who has cleaned a customer list has held the cursor still over that question.

Same name, same date of birth, and an address that differs by one character. Somebody has to decide whether those rows become one row.

Reading an astronomy data paper posted to arXiv last week, I ran into the same decision wearing very different clothes.

Mattia Vaccari selected 4.4 million objects from the sky the Spitzer Space Telescope swept and published them so that each object carries its ultraviolet through far infrared measurements in a single row. The inputs are dozens of surveys that photographed the same sky, each under its own conventions.

What the paper fixes is not a list of objects. It is the gauge that decides.

The distance that determines whether two detections belong to one object shifts with wavelength: a strict 1 arcsecond in the bands where the instrument sees sharply, a generous 12 arcseconds where it sees blurred. The physical limits of the hardware are written directly into the criterion.

The part that stayed with me longer was the order. Before any radius was applied, every input catalog was registered to a common frame, 2MASS. If the yardstick itself is off by a different amount in each catalog, then however finely the radii are split by wavelength, what gets measured is the offset rather than the distance. All of those numbers travel in a README, alongside the data.

"In our own data, who decides what counts as the same customer, and on what grounds?"

If the reason the similarity threshold sits at 0.9, and the record of who moved it and when, lives only inside pipeline code, then whoever reviews that call later has to work backwards from the output. The slow part of diagnosing data quality at Pebblous tends to be exactly this.

Linking stars is not the same as linking people. Spelling variants and name changes are axes that never convert into distance. Still, setting the gauge to match what the data can actually support, and shipping that gauge with the result, seems worth doing on this side of the sky too.

▶ Full piece: https://blog.pebblous.ai/blog/spitzer-data-fusion-record-linkage/en/

#Pebblous #Spitzer #RecordLinkage #EntityResolution #DataQuality #DataClinic
