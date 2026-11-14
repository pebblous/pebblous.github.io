# SNS 홍보 글: 전파망원경 VLA의 은하 목록, 가짜는 어디서 섞여 들어올까?

> 소스: blog/vla-spurious-sources-uv-sampling/ko/index.html
> 생성일: 2026-10-04
> URL: https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

전파망원경이 만든 은하 목록에서 가짜를 걷어내려고 영상 복원 알고리즘을 다섯 가지로 갈아 봤는데, 가짜 비율이 움직이지 않았다.

10월 1일 arXiv에 올라온 논문의 결과다. 멕시코 국립자치대 전파천문학연구소와 미국 국립전파천문대 연구진이 VLA(칼 잰스키 초대형 전파간섭계)로 380시간 들여다본 GOODS-N 영역을 다시 셌다. 3기가헤르츠보다 높은 주파수에서 관측된 외부은하 전파 서베이 가운데 가장 깊고 선명한 영상이다.

픽셀 잡음은 0을 중심으로 한 정규분포에 거의 그대로 맞았다. 그런데 영상을 음수로 뒤집어 센 가짜 천체는 그 정규분포가 허락하는 수의 아홉 배였다. 영상 가장자리를 의심해 한가운데만 추려 봐도 일곱 배가 남았다.

남은 설명은 관측 쪽에 있었다. 안테나를 멀리 벌려 해상도를 얻을수록 관측이 훑지 못하고 남기는 자리가 넓어지고, 그 빈틈이 빔에 곁가지를 남겨 이웃한 픽셀의 잡음을 서로 묶어 놓는다. 잡음 조각이 저마다 독립이라고 보고 세운 계산식이 가짜를 적게 보는 이유다. 저자들의 제언이 영상 처리가 아니라 ngVLA와 SKA의 설계를 향하는 것도 그래서다.

겉으로 본 잡음 분포는 멀쩡했다. 결함은 값 하나하나가 아니라 값들 사이의 관계에서 드러났다. 페블러스가 데이터 품질을 볼 때 되묻는 물음도 같은 자리에 있다. 지금 고치는 이 오류는 처리 단계에서 생긴 것인가, 수집 단계에서 이미 정해진 것인가.

▶ 전문: https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #VLA #전파천문학 #arXiv #상관잡음 #데이터수집설계 #AIReadyData

---

## LinkedIn (EN)

A team trying to clear fake galaxies out of a radio survey catalog reimaged the same data five different ways. The rate of fakes did not move.

The finding comes from a paper posted to arXiv on October 1 by researchers at the Institute of Radio Astronomy of UNAM in Mexico and the US National Radio Astronomy Observatory. They recounted the GOODS-N field as the VLA saw it at 10 gigahertz across 380 hours, the deepest and sharpest extragalactic radio survey image above 3 gigahertz.

Pixel noise fit a zero-centered Gaussian almost exactly. Yet the fakes, counted by flipping the image to negative and rerunning the same detector, came to nine times what that Gaussian allows. Keeping only the image center, where the antennas receive best, left seven times over.

What survived was the observation itself. Spreading the antennas apart to buy resolution leaves more of the sky the array never samples, and those gaps give the beam strong sidelobes that tie the noise of neighboring pixels together. A formula built on independent noise patches undercounts fakes for exactly that reason. The authors' recommendation points at how the ngVLA and the SKA get designed, not at better imaging.

From the outside the noise looked healthy. The defect showed up in the relationships among the values, not in the distribution of any one of them. Pebblous keeps returning to the same question in its work on data quality: was the error being fixed made at the processing stage, or settled already at the collection stage?

▶ Read: https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #VLA #RadioAstronomy #arXiv #CorrelatedNoise #DataCollectionDesign #AIReadyData

---

## Twitter/X (KO)

전파망원경이 만든 은하 목록 속 가짜 천체가 이론 예측의 아홉 배였다. 영상 복원 알고리즘을 다섯 가지로 갈아 봐도 비율은 그대로였다.

원인은 처리 단계가 아니라 관측 설계에 있었다. 안테나를 벌려 해상도를 얻는 동안 생긴 빈틈이 잡음을 서로 묶어 놓는다.

▶ https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/ko/

#페블러스 #VLA #전파천문학 #데이터수집설계

---

## Twitter/X (EN)

Fake objects in a radio telescope's galaxy catalog ran nine times past the Gaussian prediction. Reimaging the same data five different ways left the rate where it was.

The cause sits in the observation, not the processing. Pushing antennas apart for resolution leaves gaps that tie the noise together.

▶ https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/en/

#Pebblous #VLA #RadioAstronomy #DataCollectionDesign

---

## Facebook (KO)

하늘에는 주변보다 어두운 전파원이 없습니다.

그래서 전파천문학은 영상의 밝기를 통째로 음수로 뒤집은 다음, 거기서 발견되는 밝은 점을 셉니다. 있어서는 안 될 것의 개수를 세는 일입니다.

VLA가 380시간 들여다본 하늘 한 구역에서 그 개수를 다시 세어 본 논문이 10월 1일 arXiv에 올라왔습니다.

픽셀의 밝기 분포는 교과서에 나오는 정규분포에 거의 그대로 맞았습니다. 겉보기로는 흠잡을 데가 없는 잡음이었습니다.

그런데 뒤집어 센 가짜 천체는 그 분포가 허락하는 수의 아홉 배였습니다.

연구진은 범인 후보를 하나씩 지워 갔습니다. 영상 가장자리를 의심해 한가운데만 추려 다시 세었더니 일곱 배가 남았습니다. 영상을 만드는 복원 알고리즘을 다섯 가지로 갈아 가며 돌려 보았더니, 다섯 모두 같은 구간에 모여 서로 구분되지 않았습니다.

저에게 오래 남은 것은 이 다섯 가지 비교입니다.

영상을 더 잘 만들면 해결되는 문제였다면, 다섯이 같은 답을 낼 이유가 없습니다.

남은 설명은 영상을 만들기 전, 관측 그 자체에 있었습니다. 안테나 두 대를 짝지은 측정 하나하나가 uv 평면이라는 지도 위에 점을 찍는데, 안테나를 멀리 벌릴수록 그 지도에 남는 구멍이 커집니다. 구멍이 큰 지도로 복원한 영상에서는 이웃한 픽셀의 잡음이 함께 움직이도록 묶입니다. 안테나 배치가 정해지는 순간 잡음이 어떤 모양으로 뭉칠지도 함께 정해진 셈입니다.

'수집 단계에서 이미 정해진 오류'라고 부를 만한 것이 있습니다.

학습용 데이터셋에서 설명되지 않는 오류가 나올 때 손이 먼저 가는 곳은 대체로 뒷단입니다. 라벨 정제 규칙을 손보고, 이상값을 거르는 모델을 하나 더 얹습니다. 이 논문이 영상화 방법을 갈아 가며 해 본 비교가 정확히 그 손질에 해당하고, 결과는 전부 같았습니다.

"지금 고치고 있는 이 오류는 처리 단계에서 생긴 것입니까, 수집 단계에서 이미 정해진 것입니까?"

페블러스가 데이터 품질을 볼 때 되묻는 물음도 여기에 있습니다. 결측률도 중복률도 기준을 넘지 않는데 모델이 특정 구간에서만 틀린다면, 각 항목이 아니라 항목들이 어떻게 함께 움직이는지를 봐야 할 때가 있습니다.

해상도를 낮추면 가짜는 줄어듭니다. 대신 작은 구조를 갈라 보는 능력을 잃습니다.

더 정밀하게 재려는 모든 시도가 같은 대가를 치르는 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/ko/

#페블러스 #VLA #전파천문학 #데이터품질 #데이터수집설계 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Nothing in the sky is a radio source darker than its surroundings.

So radio astronomers multiply an image by minus one and count the bright points that show up in the flipped version. It is a way of counting what should not be there.

A paper posted to arXiv on October 1 ran that count again over a patch of sky the VLA had stared at for 380 hours.

The pixel brightness distribution matched a textbook Gaussian almost exactly. By any ordinary check, the noise was clean.

And yet the fakes counted in the flipped image came to nine times what that Gaussian allows.

The team went after the suspects one at a time. Suspecting the edges, they kept only the center of the image and counted again: seven times over remained. They reimaged the same data with five different reconstruction recipes, and all five landed in one narrow band, indistinguishable within the errors.

It is the five-way comparison that has stayed with me.

Had better imaging been able to fix this, five recipes would have no reason to agree.

What was left sat upstream of the image, in the observation itself. Every pair of antennas plots a single dot on a map called the uv plane, and the farther apart the antennas are pushed, the larger the holes left in that map. An image reconstructed from a holey map has the noise of neighboring pixels tied together. The moment the antenna layout was fixed, the shape the noise would clump into was fixed along with it.

There is a category worth naming here: "errors already settled at collection."

When a training dataset throws up errors nobody can account for, hands reach for the back end first. Label-cleaning rules get adjusted. Another model goes on top to screen outliers. The imaging comparison in this paper is exactly that reach, and every recipe returned the same answer.

"Was the error you are fixing now made at the processing stage, or settled already at the collection stage?"

That is the question we keep returning to at Pebblous when we look at data quality. When the missing-value rate and the duplicate rate both sit under their thresholds and a model still fails in one particular range, the thing to look at may not be each field but how the fields move together.

Blur the image and the fakes grow fewer. The ability to separate small structures goes with them.

Every attempt to measure more precisely seems to pay that same price.

▶ Full piece: https://blog.pebblous.ai/blog/vla-spurious-sources-uv-sampling/en/

#Pebblous #VLA #RadioAstronomy #DataQuality #DataCollectionDesign #DataClinic #AIReadyData
