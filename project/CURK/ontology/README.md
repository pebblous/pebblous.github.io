# 온톨로지 기반 PDF 탐색기 (Ontology-based PDF Navigator)

ISO/IEC 5259-2 데이터 품질 표준 문서를 **다층 온톨로지**를 활용하여 인터랙티브하게 탐색할 수 있는 웹 애플리케이션입니다.

## 🎯 핵심 개념: 다층 온톨로지 (Multi-Layer Ontology)

하나의 표준 문서에는 **여러 온톨로지가 공존**합니다:

### 1. 품질 특성 온톨로지 (Domain Ontology)
- **목적**: 데이터 품질 평가 항목의 계층 구조
- **파일**: `example/iso5259-2-ontology.owl`
- **내용**: Accuracy, Completeness, Consistency 등 품질 특성 클래스
- **생성 방법**: 수동 + LLM 보조

### 2. 문서 구조 온톨로지 (Document Structure Ontology)
- **목적**: 표준 문서의 전체 구조 파악
- **파일**: `example/llm-extracted/document-structure.json`
- **내용**: 섹션, 조항, 부속서의 계층 구조
- **생성 방법**: LLM 자동 추출

### 3. 개념 관계 온톨로지 (Concept Ontology)
- **목적**: 문서 내 핵심 개념과 관계
- **파일**: `example/llm-extracted/extraction-summary.json`
- **내용**: 정의(Definition), 요구사항(Requirement), 예시(Example)
- **생성 방법**: LLM 자동 추출

## 🏗️ 시스템 아키텍처

```
ISO/IEC 5259-2 PDF
      ↓
┌─────────────────┬─────────────────┬─────────────────┐
│  품질 특성       │  문서 구조      │  개념 관계       │
│  온톨로지        │  온톨로지       │  온톨로지        │
├─────────────────┼─────────────────┼─────────────────┤
│ • Accuracy      │ • Section 1     │ • accuracy (def)│
│ • Completeness  │ • Section 3     │ • requirement X │
│ • Consistency   │ • Annex A       │ • example Y     │
└─────────────────┴─────────────────┴─────────────────┘
      ↓                 ↓                 ↓
   [PDF Navigator UI - 레이어 선택기]
      ↓
   그래프 뷰 / 트리 뷰 / 문서 위치
```

## 📦 파일 구조

```
project/CURK/ontology/
├── README.md                              # 이 파일
├── pdf-navigator.html                     # 메인 웹 애플리케이션
├── pdf-indexer.py                         # 기존: 품질 온톨로지 인덱싱
├── pdf-ontology-extractor-llm.py          # 신규: LLM 기반 온톨로지 추출
│
├── example/
│   ├── ISO_IEC5259-2_2024_EN.pdf          # 원본 PDF 문서
│   ├── iso5259-2-ontology.owl             # 품질 특성 온톨로지 (OWL)
│   ├── ontology-index.json                # 품질 온톨로지 인덱스
│   ├── iso-standard-meta-ontology.ttl     # ISO 표준 메타 온톨로지 (Turtle)
│   │
│   └── llm-extracted/                     # LLM 추출 결과
│       ├── document-structure.json        # 문서 구조 온톨로지
│       ├── extraction-summary.json        # 개념 관계 온톨로지
│       ├── iso5259-2-full-ontology.ttl    # 통합 온톨로지 (Turtle)
│       └── iso5259-2-full-ontology.owl    # 통합 온톨로지 (OWL/XML)
```

## 🚀 시작하기

### 원스텝: 모든 온톨로지 한 번에 빌드 (권장!)

```bash
cd project/CURK/ontology

# Python 가상환경 생성 (이미 있으면 스킵)
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install PyPDF2 rdflib

# 3개 온톨로지 모두 빌드 + PDF 인덱싱
python3 build-all-ontologies.py
```

**출력** (OWL + JSON):
- `example/iso5259-2-document-structure.owl` - 문서 구조 온톨로지 (OWL)
- `example/document-structure-index.json` - 문서 구조 인덱스 (JSON)
- `example/ontology-index.json` - 품질 특성 인덱스 (JSON, 업데이트됨)

### 대안: LLM 기반 전체 온톨로지 추출 (고급)

```bash
# 추가 의존성 설치
pip install anthropic

# 환경변수 설정 (Claude API 키)
export ANTHROPIC_API_KEY='your-api-key-here'

# 문서 구조 + 개념 관계 온톨로지 추출
python3 pdf-ontology-extractor-llm.py
```

**출력**:
- `example/llm-extracted/document-structure.json`
- `example/llm-extracted/extraction-summary.json`
- `example/llm-extracted/iso5259-2-full-ontology.ttl`
- `example/llm-extracted/iso5259-2-full-ontology.owl`

**참고**: Claude API 키가 없으면 mock 데이터로 실행됩니다.

### 3단계: 웹 애플리케이션 실행

```bash
# 로컬 서버 실행 (루트 디렉토리에서)
cd ../../../  # pebblous.github.io 루트로 이동
python3 -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000/project/CURK/ontology/pdf-navigator.html
```

## 🎨 사용 방법

### 온톨로지 레이어 전환

왼쪽 패널 상단의 **온톨로지 레이어 선택기**에서 원하는 레이어를 클릭:

1. **📊 품질 특성** (기본)
   - 데이터 품질 평가 항목 탐색
   - Accuracy → SyntacticAccuracy → ... 계층 구조

2. **📖 문서 구조**
   - 표준 문서 전체 구조 파악
   - Scope → Terms → Requirements → Annexes

3. **💡 개념 관계**
   - 핵심 개념과 정의 탐색
   - 정의, 요구사항, 예시 간 관계

### 탐색 방법

#### 그래프 뷰
- 노드 클릭: 해당 클래스의 PDF 위치 표시
- 드래그: 그래프 이동
- 마우스 휠: 확대/축소
- 전체 보기: 모든 노드가 보이도록 조정

#### 트리 뷰
- 계층 구조로 클래스 탐색
- 클릭하여 확장/축소
- 클래스명 클릭: PDF 위치로 이동

#### 문서 위치
- 선택한 클래스가 언급된 모든 페이지 목록
- 클릭하여 해당 페이지로 바로 이동
- 컨텍스트 미리보기 제공

### 양방향 연동

- **온톨로지 → PDF**: 클래스 클릭 → PDF 페이지 자동 이동
- **PDF → 온톨로지**: PDF에서 텍스트 선택 → 매칭되는 클래스 하이라이트

## 🧠 LLM 활용 전략

### 문서 구조 추출 프롬프트

```
Analyze this ISO/IEC 5259-2 standard document and extract the complete document structure.

[First 10 pages of PDF]

Please provide a JSON response with this structure:
{
  "documentTitle": "...",
  "sections": [
    {"id": "1", "title": "Scope", "page": 1, "subsections": [...]},
    {"id": "Annex A", "title": "...", "page": 25, "type": "normative"}
  ],
  "keyTerms": [
    {"term": "accuracy", "section": "3.1", "page": 5}
  ]
}
```

### 개념 추출 프롬프트

```
Analyze section X of ISO/IEC 5259-2 and extract key concepts.

[Section text]

Provide JSON response:
{
  "concepts": [
    {
      "term": "concept name",
      "type": "definition|requirement|example|note",
      "description": "brief description",
      "relatedTerms": ["term1", "term2"]
    }
  ]
}
```

## 📊 ISO 표준 메타 온톨로지

`example/iso-standard-meta-ontology.ttl`은 **ISO 표준 문서의 일반적 구조**를 표현하는 재사용 가능한 온톨로지입니다.

### 주요 클래스

#### 문서 구조
- `iso:StandardDocument`: ISO/IEC 표준 문서
- `iso:Section`: 섹션 (1, 2, 3, ...)
- `iso:Clause`: 조항
- `iso:Annex`: 부속서 (Annex A, B, C, ...)
- `iso:NormativeAnnex`: 규정 부속서
- `iso:InformativeAnnex`: 참고 부속서

#### 개념 유형
- `iso:Definition`: 용어 정의 (3장)
- `iso:Requirement`: 요구사항 ('shall')
- `iso:Recommendation`: 권고사항 ('should')
- `iso:Permission`: 허용사항 ('may')
- `iso:Example`: 예시
- `iso:Note`: 비고

#### 관계 속성
- `iso:hasSection`: 문서가 포함하는 섹션
- `iso:hasSubsection`: 하위섹션
- `iso:defines`: 섹션에서 정의하는 개념
- `iso:references`: 다른 섹션/개념 참조
- `iso:illustratedBy`: 예시/그림/표로 설명

### 다른 ISO 표준에 재사용

이 메타 온톨로지는 **모든 ISO/IEC 표준**에 적용 가능합니다:

```python
# 예: ISO/IEC 25010 소프트웨어 품질 표준
from rdflib import Graph, Namespace

ISO = Namespace("http://pebblous.ai/ontology/iso-standard#")
g = Graph()
g.parse("iso-standard-meta-ontology.ttl", format="turtle")

# ISO 25010 문서 인스턴스 생성
doc = URIRef("http://example.org/iso25010")
g.add((doc, RDF.type, ISO.StandardDocument))
g.add((doc, ISO.standardNumber, Literal("ISO/IEC 25010:2023")))
```

## 🔧 기술 스택

### Frontend
- **PDF.js** (3.11.174): PDF 렌더링
- **Cytoscape.js** (3.28.0): 그래프 시각화
- **Tailwind CSS**: 스타일링
- **Vanilla JavaScript**: 프레임워크 없이 경량 구현

### Backend (Python)
- **PyPDF2**: PDF 텍스트 추출
- **rdflib**: OWL/RDF 온톨로지 파싱
- **anthropic**: Claude API 클라이언트 (LLM 기반 추출)

### 온톨로지
- **OWL (Web Ontology Language)**: 품질 특성 온톨로지
- **RDF/Turtle**: ISO 메타 온톨로지
- **JSON**: 경량 데이터 교환 (웹 애플리케이션용)

## 🎓 활용 사례

### 1. 표준 문서 학습
ISO/IEC 5259-2를 처음 공부할 때:
- **문서 구조 레이어**: 전체 목차와 흐름 파악
- **품질 특성 레이어**: 평가 항목 계층 구조 이해
- **개념 관계 레이어**: 핵심 용어와 정의 학습

### 2. 품질 평가 프레임워크 구축
데이터 품질 평가 시스템 개발 시:
- **품질 특성 레이어**: 평가 항목 선택
- PDF 위치 확인: 각 항목의 정확한 정의 참조
- 요구사항 추적: 표준 준수 여부 검증

### 3. 규제 준수 (Compliance) 검증
감사 또는 인증 준비:
- **개념 관계 레이어**: 요구사항(Requirement) 필터링
- 각 요구사항의 PDF 위치 추적
- 준수 여부 체크리스트 생성

### 4. 연구 논문 작성
데이터 품질 관련 논문:
- **품질 특성 레이어**: 관련 개념 탐색
- 정확한 인용: 섹션 번호와 페이지 자동 확인
- 개념 간 관계 시각화: 그래프 이미지 활용

### 5. 교육 및 트레이닝
데이터 품질 교육 자료 제작:
- 인터랙티브 학습 도구로 활용
- 학습자가 직접 온톨로지 탐색
- 레이어 전환으로 다양한 관점 제시

## 🔮 향후 확장 가능성

### 1. 다국어 지원
- 한국어/영어 레이블 병행 표시
- 언어별 온톨로지 자동 생성
- `rdfs:label@ko`, `rdfs:label@en` 활용

### 2. 다른 ISO 표준 추가
- ISO/IEC 25010 (소프트웨어 품질)
- ISO 9001 (품질 경영 시스템)
- ISO 27001 (정보보안)

### 3. SPARQL 쿼리 인터페이스
```sparql
# 예: Accuracy의 모든 하위 클래스 찾기
SELECT ?subclass ?label
WHERE {
  ?subclass rdfs:subClassOf* dq:Accuracy .
  ?subclass rdfs:label ?label .
}
```

### 4. 표준 간 매핑
- ISO 5259-2 ↔ ISO 25024 개념 매핑
- `owl:equivalentClass`, `skos:related` 사용
- 크로스 레퍼런스 자동 생성

### 5. AI 챗봇 통합
```
User: "Accuracy와 Precision의 차이가 뭐야?"
Bot: "ISO 5259-2의 3.1절(페이지 5)에 따르면..."
     [PDF 자동 이동 + 온톨로지 하이라이트]
```

### 6. 협업 주석 (Collaborative Annotation)
- 사용자가 노트 추가
- 개념 간 커스텀 링크 생성
- 팀 공유 및 버전 관리

## 📝 기여하기

### 온톨로지 개선
1. `example/iso5259-2-ontology.owl` 수정
2. `python3 pdf-indexer.py` 재실행
3. Pull Request 제출

### LLM 프롬프트 개선
1. `pdf-ontology-extractor-llm.py`의 프롬프트 수정
2. 다양한 표준 문서로 테스트
3. 추출 정확도 향상 기여

### UI/UX 개선
1. `pdf-navigator.html` 수정
2. 새로운 시각화 방법 제안
3. 모바일 반응형 개선

## 📚 참고 자료

### 표준 문서
- [ISO/IEC 5259-2:2024](https://www.iso.org/standard/81088.html) - Data quality — Part 2: Data quality assessment

### 온톨로지
- [OWL Web Ontology Language](https://www.w3.org/OWL/)
- [RDF 1.1 Turtle](https://www.w3.org/TR/turtle/)
- [SKOS Simple Knowledge Organization System](https://www.w3.org/2004/02/skos/)

### 도구
- [Protégé](https://protege.stanford.edu/) - 온톨로지 편집기
- [Apache Jena](https://jena.apache.org/) - RDF/SPARQL 프레임워크
- [RDFLib](https://rdflib.readthedocs.io/) - Python RDF 라이브러리

## 💡 라이선스

이 프로젝트는 Pebblous의 CURK (Corporate Universal Research Knowledge) 프로젝트의 일환으로 개발되었습니다.

---

**개발**: Pebblous 데이터 커뮤니케이션 팀
**문의**: contact@pebblous.ai
**웹사이트**: https://www.pebblous.ai
