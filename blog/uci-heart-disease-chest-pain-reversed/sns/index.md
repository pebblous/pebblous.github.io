# SNS 홍보 글: UCI 심장병 데이터, 가슴 통증 번호가 설명서와 거꾸로다

> 소스: blog/uci-heart-disease-chest-pain-reversed
> 생성일: 2026-11-27
> URL (KO): https://blog.pebblous.ai/blog/uci-heart-disease-chest-pain-reversed/ko/
> URL (EN): https://blog.pebblous.ai/blog/uci-heart-disease-chest-pain-reversed/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

기계학습 교재가 40년 가까이 써 온 UCI 심장병 데이터에서 가슴 통증 번호가 설명서와 거꾸로 매겨져 있다.

11월 24일 arXiv에 올라온 프리프린트(동료 심사 전)는 설명서가 '전형적 협심증'이라 적은 1번과 '무증상'이라 적은 4번이 서로 맞바뀌어 있다고 말한다. 근거는 같은 파일 안의 증상 기록이다. 부다페스트·스위스·롱비치에서 '무증상'으로 적힌 환자의 93~96%가 전형적 협심증의 특징 셋을 모두 갖고 있었다. 통증 세부 항목이 없는 클리블랜드는 1986년 원 임상 연구의 회귀계수를 맞춰 확인했다.

번호 자체는 제자리에 있어 결측·이상값·중복을 세는 품질 검사는 전부 통과한다. 틀린 것은 그 번호가 무엇을 뜻하는지 적어 둔 문서 쪽이다. 모델 점수는 거의 그대로인데 해석만 뒤집힌다. 위험 방향을 분명히 밝힌 SHAP 해석 논문 32편 가운데 25편(78%)이 교정된 해석과 어긋났고, 전문을 읽은 124편 중 이 역전을 알아챈 글은 한 편도 없었다. 범주 이름을 단어로 박아 넣은 캐글 사본 둘은 합쳐 약 40만 회 내려받혔다.

데이터를 다루는 팀이 확인할 것은 값이 아니라 문서다. 쓰는 데이터셋의 코드북을 마지막으로 검증한 사람이 누구인가.

▶ 전문: https://blog.pebblous.ai/blog/uci-heart-disease-chest-pain-reversed/ko/
#UCI심장병데이터 #데이터품질 #설명가능AI #코드북 #페블러스

---

## LinkedIn · Facebook (EN)

The chest pain codes in the UCI Heart Disease data, a fixture of machine learning teaching for decades, run the opposite way from the dataset's own documentation.

A preprint posted to arXiv on November 24, ahead of peer review, finds that code 1, documented as typical angina, and code 4, asymptomatic, have traded places. The evidence sits in the same files. Among patients marked asymptomatic at Budapest, Switzerland and Long Beach, 93–96% showed all three marks of typical angina. Cleveland, whose file carries no symptom detail, was checked against the regression coefficients of the 1986 clinical study behind the data.

The values sit exactly where they should, so the usual checks for missing, out-of-range and duplicate entries pass. What is wrong is the document that says what those values mean. Model scores barely move while the interpretations flip: of the papers that named a risk direction for a chest pain category, 25 of 32, or 78%, contradict the corrected reading, and none of the 124 papers read had noticed the reversal. Two Kaggle copies that spell the category names out in words have been downloaded about 400,000 times.

For teams working with borrowed datasets, the thing to check is not the values but the codebook. Who verified it last, and against what?

▶ Read: https://blog.pebblous.ai/blog/uci-heart-disease-chest-pain-reversed/en/
#UCIHeartDisease #DataQuality #ExplainableAI #DataDocumentation #Pebblous
