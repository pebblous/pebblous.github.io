# OWL 온톨로지 웹 시각화 도구 비교

## 개요
ISO/IEC 5259-2 온톨로지를 인터랙티브 웹 블로그에서 시각화하기 위한 JavaScript 기반 오픈소스 도구 조사 결과입니다.

---

## 1. WebVOWL ⭐ 추천

### 특징
- **전문 온톨로지 시각화 도구**: OWL 전용 시각화 표준(VOWL) 구현
- **Force-directed graph**: D3.js 기반 동적 그래프 레이아웃
- **완전한 클라이언트 사이드**: 서버 없이 브라우저에서 실행
- **자동 변환**: OWL2VOWL Java 컨버터 제공 (OWL → JSON)

### 기술 스택
- **Frontend**: JavaScript, D3.js, CSS, SVG
- **Converter**: Java (OWL2VOWL)
- **Input format**: JSON (OWL에서 변환된)
- **License**: Open Source (MIT)

### 장점
✅ OWL 온톨로지에 특화된 전문 도구
✅ 클래스, 속성, 관계를 시각적으로 명확하게 표현
✅ 인터랙티브 탐색 (확대/축소, 필터링, 검색)
✅ 활발한 개발 (ESWC 2025 "Making WebVOWL Great Again")
✅ 블로그 통합 용이 (순수 클라이언트 사이드)

### 단점
❌ OWL → JSON 변환 단계 필요 (Java 의존성)
❌ 커스터마이징 난이도가 다소 높음

### 블로그 통합 방법
```html
<!-- WebVOWL 라이브러리 로드 -->
<script src="https://cdn.jsdelivr.net/npm/webvowl@1.1.7/deploy/js/webvowl.app.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/webvowl@1.1.7/deploy/css/webvowl.app.css">

<!-- 시각화 컨테이너 -->
<div id="ontology-graph" style="width: 100%; height: 600px;"></div>

<script>
  // OWL을 JSON으로 변환한 파일 로드
  fetch('/project/CURK/ontology/example/iso5259-2-ontology.json')
    .then(response => response.json())
    .then(data => {
      // WebVOWL 초기화
      const webvowl = require('webvowl');
      webvowl.app().initialize(data);
    });
</script>
```

### 참고 링크
- GitHub: https://github.com/VisualDataWeb/WebVOWL
- Demo: http://vowl.visualdataweb.org/webvowl.html
- Paper: https://www.semantic-web-journal.net/system/files/swj1114.pdf

---

## 2. Cytoscape.js + RDF Parser

### 특징
- **범용 그래프 시각화 라이브러리**: 생물정보학에서 시작, 네트워크 시각화 표준
- **유연한 레이아웃**: 다양한 레이아웃 알고리즘 (force, circle, grid, hierarchical 등)
- **커스터마이징 강점**: 스타일, 레이아웃, 인터랙션 완전 제어

### 기술 스택
- **Frontend**: JavaScript (Cytoscape.js)
- **RDF Parser**: 별도 구현 필요 (rdflib.js, N3.js 등 활용)
- **Input format**: Cytoscape.js JSON (RDF에서 변환 필요)
- **License**: Open Source (MIT)

### 장점
✅ 매우 강력한 시각화 기능과 유연성
✅ 모바일 터치 지원, 반응형 디자인
✅ 풍부한 플러그인 생태계 (레이아웃, 분석, export 등)
✅ 활발한 커뮤니티 (지속적인 업데이트)
✅ Pebblous 블로그 디자인과 통합 용이 (Tailwind CSS 호환)

### 단점
❌ OWL/RDF 전용이 아님 (변환 로직 직접 구현)
❌ 온톨로지 특화 기능 부족 (클래스 계층 등)
❌ 초기 설정이 WebVOWL보다 복잡

### 블로그 통합 방법
```html
<!-- Cytoscape.js 로드 -->
<script src="https://unpkg.com/cytoscape@3.28.1/dist/cytoscape.min.js"></script>

<!-- 시각화 컨테이너 -->
<div id="cy" style="width: 100%; height: 600px; background: #020617;"></div>

<script>
  // RDF 데이터를 Cytoscape.js 포맷으로 변환
  const elements = {
    nodes: [
      { data: { id: 'DataQualityModel', label: '데이터 품질 모델' } },
      { data: { id: 'Accuracy', label: '정확성' } }
    ],
    edges: [
      { data: { source: 'DataQualityModel', target: 'Accuracy', label: 'hasCharacteristic' } }
    ]
  };

  // Cytoscape 초기화
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#F86825', // Pebblous orange
          'label': 'data(label)',
          'color': '#cbd5e1',
          'text-valign': 'center'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': '#64748b',
          'target-arrow-color': '#64748b',
          'target-arrow-shape': 'triangle',
          'label': 'data(label)',
          'font-size': '10px',
          'color': '#94a3b8'
        }
      }
    ],
    layout: {
      name: 'cose',  // force-directed layout
      animate: true
    }
  });
</script>
```

### Desktop 플러그인 (참고용)
- **RDFScape**: Cytoscape Desktop용 OWL/RDF 플러그인
- **OWLPlugin**: SPARQL 쿼리 기능 포함
- 웹 버전에서는 이 기능들을 직접 구현해야 함

### 참고 링크
- Website: https://js.cytoscape.org/
- GitHub: https://github.com/cytoscape/cytoscape.js
- Example: http://www.snik.eu/graph/?sparql=https://dbpedia.org/sparql

---

## 3. VisGraph³

### 특징
- **RDF 전용 도구**: RDF 그래프 읽기, 생성, 수정
- **웹 기반 인터페이스**: 브라우저에서 바로 사용
- **CRUD 기능**: 온톨로지 편집 기능 포함

### 기술 스택
- **Frontend**: JavaScript
- **Input format**: RDF 직접 지원
- **Output**: RDF/XML, Turtle 등
- **License**: Open Source

### 장점
✅ RDF를 직접 읽고 쓸 수 있음 (변환 불필요)
✅ 온톨로지 편집 기능
✅ 사용자 친화적 UI

### 단점
❌ 시각화 성능이 WebVOWL/Cytoscape보다 낮음
❌ 커스터마이징 제한적
❌ 커뮤니티 규모 작음

### 블로그 통합 방법
```html
<!-- VisGraph³ 임베드 -->
<iframe
  src="https://visgraph3.github.io/?url=/project/CURK/ontology/example/iso5259-2-ontology.owl"
  width="100%"
  height="600px"
  style="border: 1px solid #334155; border-radius: 0.5rem;">
</iframe>
```

### 참고 링크
- Website: https://visgraph3.github.io/

---

## 4. RDF JavaScript Libraries (보조 도구)

### rdflib.js
- **용도**: RDF 파싱 및 SPARQL 쿼리
- **장점**: 강력한 RDF 처리 기능
- **블로그 활용**: Cytoscape.js와 조합하여 OWL 파싱

```javascript
// rdflib.js 예제
import { graph, parse } from 'rdflib';

const store = graph();
const baseURI = 'http://pebblous.ai/ontology/iso5259-2#';

fetch('/project/CURK/ontology/example/iso5259-2-ontology.owl')
  .then(response => response.text())
  .then(rdfXml => {
    parse(rdfXml, store, baseURI, 'application/rdf+xml');

    // SPARQL 쿼리
    const query = `
      SELECT ?class ?label
      WHERE {
        ?class rdf:type owl:Class .
        ?class rdfs:label ?label .
      }
    `;

    // 결과를 Cytoscape.js 포맷으로 변환
  });
```

### N3.js
- **용도**: Turtle, N-Triples, N-Quads 파싱
- **장점**: 가볍고 빠름
- **블로그 활용**: RDF 데이터 변환

### Quadstore
- **용도**: 브라우저 내 SPARQL 쿼리 엔진
- **장점**: 복잡한 쿼리 실행 가능
- **블로그 활용**: 인터랙티브 쿼리 데모

---

## 5. 도구 비교표

| 도구 | OWL 지원 | 커스터마이징 | 성능 | 커뮤니티 | 블로그 통합 | 추천도 |
|------|----------|--------------|------|----------|-------------|--------|
| **WebVOWL** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Cytoscape.js** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **VisGraph³** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **rdflib.js** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | N/A | ⭐⭐⭐ |

---

## 6. 최종 추천 전략 🎯

### 옵션 A: WebVOWL (단독) - 빠른 구현
**추천 이유**: OWL 전용, 전문적인 시각화, 최소 개발 시간

**구현 단계**:
1. OWL → JSON 변환 (OWL2VOWL 사용)
2. WebVOWL 라이브러리 CDN 로드
3. JSON 파일 연동
4. Pebblous 스타일 (주황색) 커스터마이징

**예상 작업 시간**: 2-3시간

---

### 옵션 B: Cytoscape.js + rdflib.js (조합) - 최고 유연성 ⭐ 강력 추천
**추천 이유**: 완전한 디자인 제어, Pebblous 브랜드 통합, 확장 가능성

**구현 단계**:
1. rdflib.js로 OWL 파싱
2. SPARQL 쿼리로 클래스/속성 추출
3. Cytoscape.js 포맷으로 변환
4. Pebblous 디자인 시스템 적용 (slate-950 배경, orange-500 노드)
5. 인터랙티브 기능 추가 (클릭 시 상세 정보, 필터링 등)

**예상 작업 시간**: 4-6시간

**예제 코드 스니펫**:
```javascript
// 1. OWL 파싱
const store = graph();
parse(owlContent, store, baseURI, 'application/rdf+xml');

// 2. 클래스 추출
const classes = store.match(null, RDF('type'), OWL('Class'));

// 3. Cytoscape 노드 생성
const nodes = classes.map(quad => ({
  data: {
    id: quad.subject.value,
    label: getLabelFromStore(quad.subject, store),
    type: 'class'
  }
}));

// 4. Pebblous 스타일 적용
const cy = cytoscape({
  style: [
    {
      selector: 'node[type="class"]',
      style: {
        'background-color': '#F86825',  // Pebblous orange
        'shape': 'roundrectangle',
        'width': 'label',
        'height': 'label',
        'padding': '12px',
        'text-wrap': 'wrap',
        'text-max-width': '120px',
        'font-family': 'Pretendard, -apple-system',
        'font-size': '12px',
        'color': '#ffffff'
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'line-color': '#64748b',
        'target-arrow-color': '#F86825',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 1.5
      }
    }
  ]
});
```

---

### 옵션 C: 하이브리드 (WebVOWL + Custom UI)
**추천 이유**: WebVOWL의 전문성 + 커스텀 컨트롤

**구현 단계**:
1. WebVOWL로 기본 시각화
2. 별도 UI 패널 (필터, 검색, SPARQL 쿼리)
3. Tailwind CSS로 Pebblous 스타일 통합

**예상 작업 시간**: 3-4시간

---

## 7. 블로그 아티클 구조 제안

```html
<!-- 1. 온톨로지 소개 섹션 -->
<section>
  <h2>ISO/IEC 5259-2 데이터 품질 온톨로지</h2>
  <p>24개 품질 특성을 OWL로 모델링...</p>
</section>

<!-- 2. 인터랙티브 시각화 -->
<section class="bg-slate-900 rounded-lg p-6">
  <h3>온톨로지 구조 탐색</h3>
  <div id="ontology-graph" style="height: 600px;"></div>

  <!-- 컨트롤 패널 -->
  <div class="controls mt-4 flex gap-4">
    <button onclick="filterByCategory('inherent')"
            class="accent-bg px-4 py-2 rounded">
      고유 특성만 보기
    </button>
    <button onclick="resetView()"
            class="bg-slate-700 px-4 py-2 rounded">
      전체 보기
    </button>
  </div>
</section>

<!-- 3. SPARQL 쿼리 예제 -->
<section>
  <h3>온톨로지 쿼리 예제</h3>
  <pre><code class="language-sparql">
SELECT ?characteristic ?label
WHERE {
  ?characteristic rdfs:subClassOf iso5259:InherentCharacteristic .
  ?characteristic rdfs:label ?label .
  FILTER (lang(?label) = "ko")
}
  </code></pre>
  <button onclick="executeQuery()" class="accent-bg">쿼리 실행</button>
  <div id="query-results"></div>
</section>

<!-- 4. OWL 코드 다운로드 -->
<section>
  <a href="/project/CURK/ontology/example/iso5259-2-ontology.owl"
     download
     class="accent-bg px-6 py-3 rounded inline-block">
    OWL 파일 다운로드
  </a>
</section>
```

---

## 8. 다음 단계

1. **도구 선택 결정** (추천: 옵션 B - Cytoscape.js + rdflib.js)
2. **OWL → JSON/Cytoscape 변환 스크립트 작성**
3. **시각화 프로토타입 구현** (로컬 테스트)
4. **Pebblous 디자인 통합**
5. **인터랙티브 기능 추가** (필터, 검색, 상세 정보 패널)
6. **SPARQL 쿼리 인터페이스 구현** (다음 todo 항목과 연계)
7. **성능 최적화** (레이지 로딩, 점진적 렌더링)
8. **모바일 반응형 테스트**

---

## 참고 자료

- **W3C RDF.js**: https://rdf.js.org/
- **SPARQL.js**: https://github.com/RubenVerborgh/SPARQL.js
- **Cytoscape.js Demos**: https://js.cytoscape.org/#demos
- **WebVOWL Paper**: https://www.semantic-web-journal.net/system/files/swj1114.pdf

---

**문서 작성**: 2025-11-01
**프로젝트**: Pebblous Blog - ISO/IEC 5259-2 Ontology Article
**다음 작업**: SPARQL 쿼리 예제 작성
