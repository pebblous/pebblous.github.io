# SNS 홍보 글: 천체 사진 분류 AI, 은하를 지워도 넷 중 셋은 맞힌다

> 소스: blog/astro-image-classifier-shortcuts/
> 생성일: 2026-11-06
> URL: https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사진 한가운데에서 천체를 지우고 다시 물었더니, 네 종류를 가르는 분류기가 여전히 넷 중 셋을 맞혔다.

에랄도 페레이라 마리뉴가 11월 4일 arXiv에 올린 재평가다. 은하·구상성단·성운·산개성단을 가르는 분류기를 천체 370개로 다시 쟀다. 조건을 하나씩 빼 가며 성적이 어디서 무너지는지를 봤다. 사진 중앙을 지운 뒤에도 균형 정확도는 0.731에서 0.800이었다. 무작위로 찍으면 0.25가 나오는 과제다.

더 단순한 대조군이 이유를 가리킨다. 사진을 한 장도 주지 않고 숫자 다섯 개만 넣은 로지스틱 회귀가 0.72를 냈다. 화각과 픽셀 크기, 카탈로그에 적힌 천체 크기 같은 것들이다. 사진을 전부 본 모델의 0.87에서 그리 멀지 않은 자리다.

원인은 관측 관행 쪽에 있다. 넓게 퍼진 천체는 넓게 찍어야 화면에 다 들어오고, 작고 조밀한 천체는 좁게 찍어도 충분하다. 그렇게 쌓인 사진을 종류별로 줄 세우면 화각부터 갈린다. 논문은 천체 종류가 로그 화각 분산의 0.5827을 설명한다고 적는다.

저자는 결론을 넓히지 않는다. ResNet-50과 ViT-B/16의 차이 0.007은 어느 쪽이 낫다는 뜻이 아니라 이 시험으로는 가릴 수 없다는 뜻이다. 시험 천체는 시야가 겹치는 것들을 묶으면 독립 단위 61개로 줄고, 그만큼 구간이 넓어진다.

메타데이터 대조군에도 단서를 달아 둔다. 입력에는 촬영 설정만이 아니라 천체 자신의 성질도 섞여 있어서, 이 점수만으로 누출의 인과가 증명되지는 않는다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 하나씩 짚어 진단한다. 진단을 나가 보면 학습과 시험을 나눈 비율은 거의 언제나 문서에 적혀 있다. 무엇을 한 덩어리로 보고 나눴는지가 적힌 문서는 훨씬 드물다. 비율은 합의가 쉽고 단위는 도메인을 알아야 정할 수 있어서, 어려운 쪽이 먼저 생략된다. 본문을 지우고 메타데이터만 남겨 돌려 보는 대조군은 로지스틱 회귀 한 줄이면 끝난다. 그 한 번이 우리 점수의 바닥을 알려 준다.

▶ 전문: https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #천체사진분류 #지름길학습 #데이터누출 #DigitisedSkySurvey #arXiv #AIReadyData

---

## LinkedIn (EN)

Black out the object in the middle of the frame, ask the question again, and a four-class astronomical image classifier still gets three in four right.

The re-evaluation was posted to arXiv on November 4 by Eraldo Pereira Marinho. He takes a classifier that separates galaxies, globular clusters, nebulae and open clusters, measures it again on 370 physical objects, and strips the conditions away one at a time to see where the score breaks. With the center of each image erased, balanced accuracy held between 0.731 and 0.800. Random guessing on the task returns 0.25.

A simpler control points at the reason. Withhold the photograph entirely, feed a logistic regression five numbers covering field of view, pixel scale and the catalogue's own size entry, and the score comes back at 0.72. The model that saw every pixel reached 0.87.

The cause sits in observing habit rather than in the sky. An extended object has to be framed widely to fit, while a small dense one does not. Line the resulting archive up by class and the fields of view separate first. Class alone, the paper reports, explains 0.5827 of the variance in log field of view.

Marinho declines to widen any of this. The 0.007 between ResNet-50 and ViT-B/16 does not make either the better model; it means this test cannot tell them apart. Group the overlapping fields and the test objects collapse into 61 independent units, which is why the intervals are so wide.

The metadata control carries a caveat of its own. Its inputs mix acquisition settings together with properties of the objects themselves, so the score alone does not establish leakage as the cause.

Pebblous works through the quality of AI training data point by point with DataClinic. The ratio used to split training from test is written down almost every time. A document naming what was treated as one indivisible item is far rarer, because a ratio is easy to agree on and a unit takes domain knowledge to settle. Stripping the content and leaving only the metadata is one line of logistic regression, and it tells you where the floor of your own score sits.

▶ Read: https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ShortcutLearning #DataLeakage #BenchmarkReliability #DigitizedSkySurvey #arXiv #AIReadyData

---

## Twitter/X (KO)

사진 한가운데에서 천체를 지우고 다시 물었더니, 네 종류를 가르는 분류기가 여전히 넷 중 셋을 맞혔다. 사진을 아예 주지 않고 촬영 기록과 카탈로그 속성만 넣은 대조군도 거의 같은 자리에 올라섰다.

넓게 퍼진 천체는 넓게 찍는다. 그 관행이 사진 속 천체보다 먼저 종류를 알려 준 것이다.

https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/ko/

#페블러스 #데이터품질 #지름길학습 #DigitisedSkySurvey

---

## Twitter/X (EN)

Black out the object in the middle of the frame and a four-class astronomical image classifier still gets three in four right. A control fed no photograph at all, only the acquisition record and catalogue properties, lands in almost the same place.

Extended objects get framed widely. That habit names the class before the object in the picture does.

https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/en/

#Pebblous #DataQuality #ShortcutLearning #DigitizedSkySurvey

---

## Facebook (KO)

사진 한가운데를 까맣게 칠해 놓고, 이게 무슨 천체를 찍은 사진인지 맞혀 보라고 하면 어떨까요.

주인공이 있던 자리가 사라졌으니 남는 것은 배경과 여백뿐입니다.

그런데도 네 종류 가운데 넷에 셋 가까이 맞았습니다.

에랄도 페레이라 마리뉴가 11월 4일 arXiv에 올린 재평가입니다. 은하와 구상성단과 성운과 산개성단을 가르는 분류기를 천체 370개로 다시 쟀습니다. 조건을 하나씩 빼 보며 성적이 어디서 무너지는지를 봤습니다.

사진을 아예 주지 않아 보기도 했습니다. 화각과 픽셀 크기, 카탈로그에 적힌 천체 크기를 포함한 숫자 다섯 개만 넣었습니다. 모델도 가장 단순한 통계 모델이었습니다. 네 종류를 무작위로 찍으면 0.25가 나오는 눈금에서, 사진을 전부 본 모델은 0.87이었고 이쪽은 0.72였습니다.

이유는 하늘이 아니라 촬영대에 있었습니다. 넓게 퍼진 천체는 넓게 찍어야 화면에 다 들어오고, 작고 조밀한 천체는 좁게 찍어도 충분합니다. 그렇게 쌓인 사진을 종류별로 줄 세우면 화각부터 갈립니다.

'무엇을 찍었는가'보다 '어떻게 찍었는가'가 먼저 대답해 버린 셈입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 진단을 나가 보면 학습과 시험을 나눈 비율은 거의 언제나 문서에 적혀 있습니다. 무엇을 한 덩어리로 보고 나눴는지가 적힌 문서는 훨씬 드뭅니다. 비율은 합의가 쉽고, 단위는 도메인을 알아야 정할 수 있기 때문인 것 같습니다.

"우리 성적표를 만든 것은 모델입니까, 데이터를 모은 방식입니까?"

본문을 지우고 메타데이터만 남겨 한 번 돌려 보면, 적어도 우리 점수의 바닥이 어디인지는 알 수 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/ko/

#페블러스 #데이터클리닉 #데이터품질 #지름길학습 #DigitisedSkySurvey #arXiv

---

## Facebook (EN)

Paint over the middle of a photograph, then ask what kind of object the picture was of.

The place where the subject stood is gone, so what remains is background and empty sky.

It still came back right close to three times in four.

The re-evaluation went up on arXiv on November 4, from Eraldo Pereira Marinho. He measures a classifier that separates galaxies, globular clusters, nebulae and open clusters across 370 objects, taking the conditions away one at a time to find where the score gives out.

One run withheld the photograph altogether. Five numbers went in instead, among them the field of view, the pixel scale and the size the catalogue records for the object, and the simplest statistical models were asked to sort the classes. On a scale where guessing returns 0.25, the model that saw every pixel reached 0.87 and this one reached 0.72.

The reason was not in the sky but at the telescope. An extended object has to be framed widely to fit in the frame; a small dense one does not. Line that archive up by class and the fields of view part company before anything else does.

"How it was photographed" had answered ahead of "what was photographed."

Pebblous ascertains the quality of AI training data with DataClinic. The ratio used to split training from test is written down almost every time. A document naming what was treated as one indivisible item is much harder to find. A ratio is easy to agree on, and a unit takes domain knowledge to settle.

"Was our report card made by the model, or by the way the data was gathered?"

Strip the content, leave the metadata, run it once. It tells you at least where the floor of your own score sits.

▶ Read: https://blog.pebblous.ai/blog/astro-image-classifier-shortcuts/en/

#Pebblous #DataClinic #DataQuality #ShortcutLearning #DigitizedSkySurvey #arXiv
