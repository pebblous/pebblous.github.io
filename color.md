# Pebblous Color Palette

## 브랜드 컬러

### Primary
- **Orange**: `#F86825` - 페블러스 메인 브랜드 컬러
- **Deep Blue**: `#020617` (slate-950) - 배경색

### Secondary
- **Teal**: `#14b8a6` - 보색, 강조
- **Slate**: `#475569` (slate-600) - 중립, 보조

---

## 색상 사용 철학

**미니멀리즘**: 최소한의 색상으로 최대 효과
- 주요 컬러: Orange (브랜드)
- 보조 컬러: Teal (대비)
- 중립 컬러: Slate (텍스트/경계)

**색상 제한**: 3-4가지 색상만 사용
- Too many colors = 산만함
- Minimal colors = 전문성, 집중

---

## 프로젝트별 색상 팔레트

### ISO 5259 Ontology Extraction (2025-11-01)

**Minimal Palette** (최소 3색):
```javascript
const colors = {
    primary: '#F86825',    // Orange - 브랜드, 주요 노드
    secondary: '#14b8a6',  // Teal - 보조, 대비 노드
    neutral: '#475569',    // Slate - 엣지, 보조 요소
    accent: '#06b6d4'      // Cyan - 특수 강조 (옵션)
};
```

**적용**:
- Orange: 고유 특성 (Inherent), 메인 액션
- Teal: 루트/카테고리, 보조 요소
- Slate: 엣지, 경계선
- Background: Deep Blue (#020617)

---

## 색상 조화 원리

### 보색 대비 (Complementary)
- Orange (#F86825) ↔ Teal (#14b8a6)
- 강한 시각적 대비, 주목도 높음

### 명도 대비
- 밝은 색상 (Orange, Teal) vs 어두운 배경 (Deep Blue)
- 가독성 최적화

### 채도 조절
- 고채도: 브랜드 컬러 (Orange)
- 중채도: 보조 컬러 (Teal)
- 저채도: 중립 컬러 (Slate)

---

## 사용 가이드라인

1. **메인 컬러는 Orange만**: 브랜드 일관성
2. **대비 컬러는 Teal**: 보색 관계, 1개만
3. **중립은 Slate 계열**: 텍스트, 경계
4. **추가 색상 최소화**: 필요시 1-2개만

**잘못된 예시**:
- ❌ 7-8가지 색상 사용
- ❌ 비슷한 색상 여러 개 (Green, Lime, Emerald)
- ❌ 랜덤한 색상 조합

**올바른 예시**:
- ✅ Orange + Teal + Slate (3색)
- ✅ Orange + Teal + Slate + Cyan (4색, 최대)
- ✅ 일관된 색상 체계

---

## 테이블 Hover 효과 (2025-11-08 추가)

### 원칙
테이블 행에 미묘한 hover 효과를 추가하여 인터랙티브 경험 향상

### 구현
```css
main table tbody tr:hover {
    background-color: rgba(248, 104, 37, 0.05);  /* Orange 5% 투명도 */
}
```

### 특징
- **미묘함**: 5% 투명도로 과하지 않게
- **브랜드 일관성**: Orange 컬러 활용
- **성능**: `transition: background-color 0.2s ease;`로 부드러운 전환
- **접근성**: 시각적 피드백 제공

### 적용 예시
- ISO 5259 기사의 24개 품질 특성 테이블
- ISO 25024 기사의 측정 항목 테이블
- 모든 데이터 테이블

---

## 업데이트 로그

- **2025-11-08**: 테이블 hover 효과 가이드 추가
- **2025-11-01**: 초기 생성, ISO 5259 프로젝트 색상 정의
