# polish-ko 변경 메모 — de novo 단백질 설계 리포트 (KO)

> EN 폴리시 단계(blog-polish-en) 참조용. 아래 4건만 변경됐다. 표·차트·이미지·캡션·링크·FAQ·참고문헌·메타태그는 **전부 보존**.

판단 배경: write-ko 단계에서 이미 ko-prose-humanizer를 통과한 강한 원고였다. 따라서 churn을 피하고
스킬 범위(제목·리드·섹션 헤딩·인트로 문단)에서 명백한 AI-tell만 외과적으로 제거했다.

## 변경 1 — Executive Summary 첫 문단 (가독성/온기)
- **전**: "이 글은 그 전환의 진짜 사건이 모델이 똑똑해진 데 있지 않다고 본다."
- **후**: "이 글은 그 전환의 진짜 주인공이 똑똑해진 모델이 아니라고 본다."
- 사유: "진짜 사건이 … 데 있지 않다고" 명사화·이중부정 구문이 둔탁. "진짜 주인공"으로 주체를 분명히 하고 호흡을 살림.
- EN 반영: 대응 문장에서 "the real event was not the model getting smarter" 같은 명사화 대신
  "the real protagonist of this shift is not a smarter model" 식으로 주체를 분명히.

## 변경 2 — §2 섹션 헤딩 (T3 상투 비유 제거) ⚠️ TOC도 함께 변경
- **전**: "성공률이라는 새 좌표"  (TOC: "2. 성공률이라는 새 좌표")
- **후**: "성공률, 운이 아니라 계획이 되다"  (TOC: "2. 성공률, 운이 아니라 계획이 되다")
- 사유: "좌표"는 ai-tone-detection T3가 명시한 상투 비유. 본문의 "운이 좋으면 하나 건진다는 탐색 →
  계획할 수 있는 양산 공정" 주제를 그대로 주장형 헤딩으로.
- EN 반영: 헤딩과 TOC 둘 다 수정. 제안 영문: "Hit Rate: From Luck to a Plan"
  (또는 "When Success Becomes Plannable"). EN 본문의 `#section-2` TOC 항목도 동일하게 교체할 것.

## 변경 3 — §4 인트로 메타 예고문 제거 (T4)
- **전**: "여기서 이 리포트의 핵심 주장으로 들어간다. 성공률을 끌어올린 결정적 레버는 더 큰 모델이 아니라 데이터였다."
- **후**: "이 리포트가 가장 힘주어 말하려는 대목이 여기다. 성공률을 끌어올린 결정적 레버는, 결국 더 큰 모델이 아니라 데이터였다."
- 사유: "핵심 주장으로 들어간다"는 T4 메타 내비게이션 예고문. 더 따뜻한 voice로 바꾸고 "결국"으로 §3과 연결.
- EN 반영: "Here we arrive at this report's central claim" 같은 기계적 메타 대신
  "This is the point this report presses hardest:" 류의 더 voice-있는 표현으로.

## 변경 4 — §5 명사형 프레임 해체 (T2)
- **전**: "흥미로운 점은, 모든 규모의 모델이 실측 데이터로 정렬될 때 적합도 예측과 생성이 함께 좋아지고, 큰 모델일수록 정렬에서 가장 큰 이득을 본다는 것이다."
- **후**: "모든 규모의 모델은 실측 데이터로 정렬될 때 적합도 예측과 생성이 함께 좋아진다. 그리고 큰 모델일수록 그 정렬에서 가장 큰 이득을 본다."
- 사유: "흥미로운 점은 … 것이다" 명사형 프레임(T2). 두 문장으로 끊어 동사 종결로 직진.
- EN 반영: "What is interesting is that …" 프레임을 버리고 두 개의 평서문으로.

## 보존 확인 (변경 없음)
- 제목/부제(mainTitle/subtitle), og/twitter/citation 메타, FAQ 8개, 참고문헌 13건, 4개 이미지+캡션,
  성공률 바·DMTA 다이어그램·stat-card·계보 표, §1/§3/§4/§5 헤딩, Editor's Note 전문 — 모두 그대로.

## 검증 결과 (커밋 전 self-check 통과)
- DOMContentLoaded 0 / share-buttons 0 / H1 하드코딩 0 / text-2xl-h2 0 / css/styles.css 0
- FAQ 8개, fade-in-card 누락 0
- 본문 산문 em-dash 밀도 1/659자 (T1 OK 구간 = 1/500자 이상)
- 본문 ~4,610자(프로즈 문단 기준)
