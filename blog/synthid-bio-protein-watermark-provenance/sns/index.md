# SNS 홍보 글: SynthID Bio, AI가 만든 단백질의 표식은 지워질까?

> 소스: blog/synthid-bio-protein-watermark-provenance/ko/index.html
> 생성일: 2026-10-06
> URL: https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

구글 딥마인드가 AI로 설계한 단백질에 눈에 보이지 않는 표식을 심는 SynthID Bio를 9월 30일 공개했다. 같은 날 네이처에 논문 「Function-preserving watermarking of AI-generated proteins」가 실렸다.

표식을 심는 자리는 둘이다. 하나는 아미노산 서열이고, 다른 하나는 모델이 예측한 3차원 구조의 원자 좌표다. 서열 쪽은 설계 모델 ProteinMPNN이 자리마다 아미노산을 고를 때 비밀 열쇠로 그 선택을 아주 조금 기울이는 방식이고, 구조 쪽은 AlphaFold 3의 확산 신경망 일부를 미세조정해 서명을 모델 가중치 안에 넣었다.

쟁점은 성능 손실이었다. 연구진은 VEGF-A와 사스코로나바이러스2 스파이크 수용체 결합 부위, PD-L1 세 표적에 붙는 결합체를 설계해 실제로 합성했고, 표식을 넣은 쪽과 넣지 않은 쪽이 적중률과 결합력, 서열 다양성에서 같은 수준으로 나왔다. 시험관 검증은 단백질 실험 업체 Adaptyv Bio가 맡았다. 한 실험 조건에서는 제대로 붙는 결합체가 더 적게 나왔다는 보도도 있어, 모든 조건에서 손실이 없었다고 읽을 일은 아니다.

주목할 대목은 숫자보다 표식이 간 거리다. 그 서열로 유전자를 주문해 세포에서 만들어 낸 실물 단백질에서도 표식이 읽혔다. 딥마인드가 세계 최초라 부르는 지점이 거기다.

같은 논문이 약점도 적어 두었다. 완성된 설계를 다른 도구에 넣어 서열을 다시 뽑으면 예측되는 기능은 그대로 둔 채 서열에 심긴 표식만 사라진다. 저자들이 직접 해 보인 결과다. 그래서 이 기술이 서는 자리는 예방이 아니라 확인이다. 표식이 있으면 출처가 확인되지만, 없다고 해서 사람이 만들었다는 뜻은 아니다.

딥마인드가 쓸 곳으로 꼽은 둘은 유전자 합성 업체의 주문 심사와 단백질 데이터베이스다. 현행 심사는 주문받은 서열이 알려진 위험 서열과 얼마나 닮았는지를 보는데, 모델이 처음 지어낸 서열은 닮을 데가 없어 그 그물을 빠져나간다.

질문은 단백질 바깥에서도 같다. 우리 데이터셋에 들어온 항목이 사람이 관측한 것인지 모델이 지어낸 것인지, 지금 구분할 수 있는가.

▶ 전문: https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #SynthIDBio #구글딥마인드 #단백질워터마크 #AlphaFold3 #생물보안 #데이터계보

---

## LinkedIn (EN)

Google DeepMind released SynthID Bio on September 30, a method for hiding a mark inside proteins designed by AI. A Nature paper, "Function-preserving watermarking of AI-generated proteins," appeared the same day.

The mark goes into one of two places. One is the amino acid sequence, where the design model ProteinMPNN has its choice of amino acid at each position tilted very slightly by a secret key. The other is the atomic coordinates of the predicted structure, reached by fine-tuning part of AlphaFold 3's diffusion network so the signature lives in the model weights.

The open question was cost. The team designed binders against three targets, VEGF-A, the receptor binding domain of the SARS-CoV-2 spike protein, and PD-L1, then had them synthesized. Watermarked and unwatermarked designs came out level on hit rate, binding affinity and sequence diversity, with the protein lab Adaptyv Bio handling the in vitro verification. One test condition reportedly yielded fewer working binders, so this is not zero loss under every condition.

What matters more than the numbers is how far the mark traveled. Genes were ordered from the marked sequences, proteins were grown in cells, and the mark was still readable in the physical product. DeepMind calls that a world first.

The same paper records the weakness. Feed a finished design into another tool, regenerate the sequence, and the mark disappears while the predicted function stays intact. The authors demonstrated it themselves. So the technology sits at confirmation rather than prevention. A mark confirms provenance, but the absence of one does not mean a human made it.

DeepMind names two places to use it: order screening at gene synthesis companies, and protein databases. Screening today asks how closely an ordered sequence resembles a known dangerous one, and a sequence a model invented resembles nothing, so it slips through that net.

The question travels past proteins. Can you tell, right now, whether an entry in your dataset was observed by a person or invented by a model?

▶ Read: https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SynthIDBio #GoogleDeepMind #ProteinWatermark #AlphaFold3 #Biosecurity #DataLineage

---

## Twitter/X (KO)

구글 딥마인드가 9월 30일 공개한 SynthID Bio는 AI가 설계한 단백질 서열에 눈에 보이지 않는 표식을 심는다. 그 서열로 유전자를 주문해 세포에서 만든 실물 단백질에서도 표식이 읽혔다.

같은 논문이 지우는 방법도 적어 두었다. 설계를 다른 도구로 다시 뽑으면 기능은 남고 표식만 사라진다. 막는 장치가 아니라 확인하는 장치다.

▶ https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/ko/

#페블러스 #SynthIDBio #단백질워터마크 #데이터계보

---

## Twitter/X (EN)

SynthID Bio, out from Google DeepMind on September 30, hides a mark in the sequences of AI-designed proteins. Order genes from a marked sequence, grow the protein in cells, and the mark still reads off the physical product.

The same paper shows how to remove it. Regenerate the design in another tool and the function stays while the mark goes. Confirmation, not prevention.

▶ https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/en/

#Pebblous #SynthIDBio #ProteinWatermark #DataLineage

---

## Facebook (KO)

공개 데이터베이스에서 단백질 서열 하나를 내려받습니다.

알파벳 수백 자가 이어진 한 줄입니다. 그 줄만 보고는 누가 실험실에서 읽어 낸 것인지, 어떤 모델이 지어낸 것인지 알 길이 없습니다.

구글 딥마인드가 9월 30일 공개한 SynthID Bio는 바로 그 안에 눈에 보이지 않는 표식을 심습니다. 설계 모델이 자리마다 아미노산을 고를 때, 비밀 열쇠로 그 선택을 아주 조금 기울여 두는 방식입니다. 나온 서열만 놓고 보면 자연에서 온 단백질과 구분되지 않습니다.

읽으면서 자꾸 되짚게 된 것은 검출 정확도가 아니라 표식이 간 거리였습니다.

연구진은 그 서열로 유전자를 주문해 세포에서 단백질을 실제로 만들었습니다. 만들어진 실물에서 아미노산을 읽었더니 표식이 그대로 남아 있었습니다.

출처 표시가 파일을 떠나 물질에 올라탄 자리입니다.

다만 같은 논문이 지우는 방법까지 적어 두었습니다. 완성된 설계를 다른 도구에 넣어 서열을 다시 뽑으면, 예측되는 기능은 그대로인 채 표식만 사라집니다. 저자들이 직접 해 보였습니다.

이번에 생긴 것은 지워지지 않는 증거가 아니라 '지울 수 있는 출처'입니다.

그러니 이 표식은 나쁜 설계를 막는 벽이 아닙니다. 선의로 만든 설계가 자기 출처를 증명할 수 있게 해 주는 꼬리표에 가깝습니다. 표식이 있으면 출처가 확인되지만, 없다고 해서 사람이 만들었다는 보장은 없습니다.

"데이터셋에서 한 줄을 집어 이건 사람이 관측한 값이라고 말할 때, 그 근거는 어디에 적혀 있습니까?"

페블러스가 데이터셋을 진단하면서 항목마다 출처와 이력을 함께 보는 것도 같은 물음 때문입니다. PDB나 UniProt 같은 공개 저장소도 사람이 관측해 보고한 기록 위에 쌓여 왔습니다. 거기에 모델이 만든 항목이 아무 표시 없이 섞여 들어가면, 다음 세대 모델은 그 더미를 학습 데이터로 삼습니다.

실험실에서는 표식이 물질까지 따라갔는데, 정작 제가 다루는 데이터에서는 꼬리표가 어디까지 따라오는지 세어 본 적이 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/ko/

#페블러스 #SynthIDBio #구글딥마인드 #단백질워터마크 #데이터품질 #데이터클리닉

---

## Facebook (EN)

Download a protein sequence from a public database.

It arrives as one line, a few hundred letters long. Nothing in that line tells you whether somebody read it off an instrument or a model invented it.

SynthID Bio, which Google DeepMind released on September 30, hides a mark inside that line. As the design model picks which amino acid goes at each position, a secret key tilts the choice very slightly. On its own, the resulting sequence is indistinguishable from one nature produced.

Reading the paper, I kept going back not to the detection accuracy but to how far the mark traveled.

The team ordered genes from those sequences and grew the proteins in cells. Reading the amino acids off the physical product found the mark intact.

That is a provenance mark leaving a file and riding onto matter.

The same paper also records how to erase it. Feed a finished design into another tool, regenerate the sequence, and the mark goes while the predicted function stays. The authors showed it themselves.

What this produces is not indelible proof. It is erasable provenance.

So the mark is not a wall against malice. It is closer to a tag that lets a design made in good faith prove where it came from. A mark confirms provenance, but the absence of one is no guarantee that a human made it.

"When you point at one row in a dataset and say a person observed this value, where is that written down?"

The same question runs under the way Pebblous diagnoses a dataset, reading provenance and history alongside every entry. Open repositories like PDB and UniProt were built on records that people observed and reported. Let model-made entries mix into that pile unmarked, and the next generation of models trains on the pile.

In the lab the mark followed all the way onto matter, and in the data I handle I have never once counted how far the tag follows.

▶ Full piece: https://blog.pebblous.ai/blog/synthid-bio-protein-watermark-provenance/en/

#Pebblous #SynthIDBio #GoogleDeepMind #ProteinWatermark #DataQuality #DataClinic
