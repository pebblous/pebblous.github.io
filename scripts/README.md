# AADS QA Dataset Post Automation Scripts

**버전**: 1.0.0
**최종 업데이트**: 2025-12-01
**작성자**: Pebblous Data Communication Team

---

## 📋 개요

AADS QA 데이터셋 블로그 포스트를 자동으로 생성하는 Python 스크립트 모음입니다.

### **작업 시간 단축 효과**

| 방식 | 소요 시간 | 비고 |
|------|----------|------|
| **수동 작업** (Option A) | **170분** | HTML 직접 작성 |
| **Agent 기반** (Option C - Phase 1) | **65분** | 이번 작업 |
| **자동화** (Option C - Phase 2) | **20분** ⭐ | 향후 작업 |

---

## 🛠️ 스크립트 목록

### 1. **generate-qa-post.py**
JSON 메타데이터에서 HTML 블로그 포스트를 자동 생성합니다.

**입력**: `/tmp/qa-metadata-{domain}.json`
**출력**: `project/AADS/{domain}-qa-dataset.html`

```bash
python3 scripts/generate-qa-post.py /tmp/qa-metadata-regulation.json
```

### 2. **update-articles-json.py**
articles.json에 새 포스트 항목을 자동 추가합니다.

**입력**: `/tmp/qa-metadata-{domain}.json`
**출력**: `articles.json` (업데이트)

**기능**:
- Featured 정책 자동 확인 (카테고리별 최대 3개)
- 중복 ID 확인
- 자동 태그 생성 (keywords + 기본 태그)

```bash
python3 scripts/update-articles-json.py /tmp/qa-metadata-regulation.json
```

### 3. **auto-generate-qa-post.sh** ⭐
Phase 2-4를 한 번에 실행하는 통합 스크립트입니다.

```bash
./scripts/auto-generate-qa-post.sh regulation-governance
```

**실행 순서**:
1. Phase 2: HTML 생성 (`generate-qa-post.py`)
2. Phase 3: FAQ 생성 (현재는 수동, 향후 자동화)
3. Phase 4: articles.json 업데이트 (`update-articles-json.py`)

---

## 🚀 사용법

### **전체 워크플로우 (Option C - Hybrid)**

#### **Phase 1: JSON 메타데이터 추출** (Agent 기반, 10분)

```
소스 Markdown → JSON 메타데이터 추출
```

**Agent 프롬프트**:
```
소스 파일: project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ {도메인} 분야.md

다음 정보를 JSON으로 추출해주세요:
1. 도메인명 (한글/영문)
2. 데이터셋 개수 및 목록
3. 각 데이터셋별 QA 쌍 (A, B, C, D 유형)
4. 키워드 60개 (한글+영문)

출력: /tmp/qa-metadata-{domain}.json
```

**출력 예시**: `/tmp/qa-metadata-regulation.json`

---

#### **Phase 2-4: 자동화 실행** (10분)

```bash
./scripts/auto-generate-qa-post.sh regulation-governance
```

**결과**:
- ✅ `project/AADS/regulation-governance-qa-dataset.html` 생성
- ✅ `articles.json` 업데이트
- ⚠️ FAQ는 수동 추가 필요 (현재)

---

#### **수동 작업: FAQ 추가** (5분)

현재는 FAQ를 수동으로 HTML에 추가해야 합니다.

**위치**: `project/AADS/{domain}-qa-dataset.html`
**섹션**: `<!-- FAQ Section -->`

**참고**: 향후 Agent 기반 FAQ 자동 생성 기능 추가 예정

---

## 📂 파일 구조

```
scripts/
├── README.md                    # 이 파일
├── generate-qa-post.py          # HTML 생성 스크립트
├── update-articles-json.py      # articles.json 업데이트 스크립트
├── auto-generate-qa-post.sh     # 통합 자동화 스크립트 ⭐
└── templates/                   # (향후) Jinja2 템플릿 디렉토리
    └── qa-post-template.html    # (향후) HTML 템플릿
```

---

## ⚙️ JSON 메타데이터 구조

### **입력 파일**: `/tmp/qa-metadata-{domain}.json`

```json
{
  "metadata": {
    "domain": "규제와 거버넌스",
    "domain_en": "regulation-governance",
    "dataset_count": 8,
    "qa_count": 32,
    "qa_per_dataset": 4,
    "date": "2025-12-01",
    "author": "페블러스 데이터 커뮤니케이션팀"
  },
  "datasets": [
    {
      "id": 1,
      "name": "AI 기본법",
      "name_en": "AI Basic Law",
      "description": "...",
      "qas": {
        "A": { "type": "도메인 정의/목적", "question": "...", "answer": "..." },
        "B": { "type": "데이터 구조/구성", "question": "...", "answer": "..." },
        "C": { "type": "AI 모델/임무", "question": "...", "answer": "..." },
        "D": { "type": "품질/공정 관리", "question": "...", "answer": "..." }
      }
    }
    // ... 더 많은 데이터셋
  ],
  "keywords": ["키워드1", "키워드2", ...],
  "summary": {
    "type_distribution": { "A": 8, "B": 8, "C": 8, "D": 8 }
  }
}
```

---

## 🔧 향후 개선 계획

### **Phase 2-A: 완전 템플릿화** (예상 소요: 2-3시간)
- [ ] Jinja2 템플릿으로 HTML 전체 구조 분리
- [ ] 데이터셋 카드 루프 자동화
- [ ] QA 샘플 섹션 루프 자동화

### **Phase 2-B: FAQ 자동 생성** (예상 소요: 1-2시간)
- [ ] Agent 기반 도메인 특화 FAQ 자동 생성
- [ ] FAQ Schema 자동 주입 (Google 중복 방지)

### **Phase 2-C: 통합 자동화** (예상 소요: 30분)
- [ ] Phase 1-4 전체 자동 실행 스크립트
- [ ] 1줄 명령어로 완성: `./scripts/auto-qa-post.sh {domain}`
- [ ] 예상 소요 시간: **10분**

---

## 📊 효율성 비교

| Phase | 작업 내용 | 수동 (분) | Agent (분) | 자동화 (분) |
|-------|----------|----------|-----------|-----------|
| 1 | JSON 추출 | 20 | 10 | 10 |
| 2 | HTML 생성 | 90 | 30 | **2** ⭐ |
| 3 | FAQ 생성 | 30 | 15 | **5** (향후 2분) |
| 4 | articles.json | 30 | 10 | **3** ⭐ |
| **합계** | | **170** | **65** | **20** ⭐ |

**효율 개선**:
- **Agent 대비**: 65분 → 20분 (**69% 단축**)
- **수동 대비**: 170분 → 20분 (**88% 단축**)

---

## 🎯 사용 예시

### **예시 1: 규제와 거버넌스 포스트 생성** (완료)

```bash
# Phase 1: JSON 추출 (Agent 프롬프트)
# 출력: /tmp/qa-metadata-regulation.json

# Phase 2-4: 자동화 실행
./scripts/auto-generate-qa-post.sh regulation-governance

# 결과 확인
open http://localhost:8000/project/AADS/regulation-governance-qa-dataset.html
```

### **예시 2: 의료 분야 포스트 생성** (향후)

```bash
# Phase 1: JSON 추출 (Agent)
# 출력: /tmp/qa-metadata-healthcare.json

# Phase 2-4: 자동화 실행
./scripts/auto-generate-qa-post.sh healthcare

# Git commit & push
git add project/AADS/healthcare-qa-dataset.html articles.json
git commit -m "Add healthcare QA dataset post"
git push origin main
```

---

## 🐛 트러블슈팅

### **Q1: "ModuleNotFoundError: No module named 'jinja2'"**

**A**: 현재 버전에서는 Jinja2를 사용하지 않습니다. import 구문이 주석 처리되어 있는지 확인하세요.

---

### **Q2: "중복 ID 오류"**

**A**: articles.json에 이미 동일한 ID가 존재합니다.
- `y` 입력: 기존 항목 제거 후 새 항목 추가
- `n` 입력: 취소

---

### **Q3: "Featured 한도 초과"**

**A**: 카테고리별 최대 3개의 featured 포스트가 허용됩니다. 기존 featured 포스트 중 하나를 `featured: false`로 변경하세요.

```bash
# Featured 개수 확인
cat articles.json | jq '[.articles[] | select(.category == "tech" and .featured == true)] | length'
```

---

## 📝 버전 히스토리

- **v1.0.0** (2025-12-01)
  - generate-qa-post.py 초기 버전
  - update-articles-json.py 초기 버전
  - auto-generate-qa-post.sh 통합 스크립트
  - Featured 정책 자동 확인
  - 중복 ID 확인 기능

---

## 👥 Contributors

- **페블러스 데이터 커뮤니케이션 팀**
- **Claude Code** (Automation Development)

---

**문의**: Pebblous Data Communication Team
**문서 위치**: `docs/qa-post-automation-plan.md`
