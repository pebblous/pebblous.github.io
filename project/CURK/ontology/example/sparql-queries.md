# SPARQL 쿼리 예제 - ISO/IEC 5259-2 온톨로지

## 개요
ISO/IEC 5259-2 데이터 품질 온톨로지에서 사용할 수 있는 실전 SPARQL 쿼리 예제 모음입니다.

**온톨로지 네임스페이스**:
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
```

---

## 쿼리 1: 모든 데이터 품질 특성 조회 (한글)

### 목적
온톨로지에 정의된 모든 데이터 품질 특성과 그 한글 레이블을 조회합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?characteristic ?labelKo ?labelEn
WHERE {
  ?characteristic rdf:type owl:Class .
  ?characteristic rdfs:subClassOf iso5259:DataQualityCharacteristic .
  ?characteristic rdfs:label ?labelKo .
  ?characteristic rdfs:label ?labelEn .

  FILTER (lang(?labelKo) = "ko")
  FILTER (lang(?labelEn) = "en")
}
ORDER BY ?labelKo
```

### 예상 결과
| characteristic | labelKo | labelEn |
|----------------|---------|---------|
| iso5259:Accuracy | 정확성 | Accuracy |
| iso5259:Completeness | 완전성 | Completeness |
| iso5259:Consistency | 일관성 | Consistency |
| iso5259:Credibility | 신뢰성 | Credibility |
| ... | ... | ... |

### 활용 사례
- 온톨로지의 전체 품질 특성 카탈로그 생성
- 다국어 용어집 구축
- 데이터 품질 체크리스트 자동 생성

---

## 쿼리 2: 카테고리별 품질 특성 분류

### 목적
데이터 품질 특성을 고유(Inherent), 시스템 의존(System-Dependent), 하이브리드(Hybrid), 추가(Additional) 카테고리별로 분류합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?category ?categoryLabel ?characteristic ?charLabel
WHERE {
  # 카테고리 찾기
  ?category rdfs:subClassOf iso5259:DataQualityCharacteristic .
  ?category rdfs:label ?categoryLabel .

  # 각 카테고리에 속한 특성 찾기
  ?characteristic rdfs:subClassOf ?category .
  ?characteristic rdfs:label ?charLabel .

  FILTER (lang(?categoryLabel) = "ko")
  FILTER (lang(?charLabel) = "ko")

  # 직접 하위 클래스만 (손주 클래스 제외)
  FILTER (?category != iso5259:DataQualityCharacteristic)
}
ORDER BY ?categoryLabel ?charLabel
```

### 예상 결과
| category | categoryLabel | characteristic | charLabel |
|----------|---------------|----------------|-----------|
| iso5259:InherentCharacteristic | 고유 특성 | iso5259:Accuracy | 정확성 |
| iso5259:InherentCharacteristic | 고유 특성 | iso5259:Completeness | 완전성 |
| iso5259:InherentCharacteristic | 고유 특성 | iso5259:Consistency | 일관성 |
| iso5259:SystemDependentCharacteristic | 시스템 의존 특성 | iso5259:Accessibility | 접근성 |
| ... | ... | ... | ... |

### 활용 사례
- 품질 특성 계층 구조 시각화
- 데이터 품질 평가 프레임워크 자동 구성
- 카테고리별 품질 지표 대시보드

---

## 쿼리 3: 특정 특성의 측정 항목 조회

### 목적
특정 데이터 품질 특성(예: 정확성)을 측정하는 모든 측정 항목(Measure)을 조회합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?measure ?measureID ?measureName ?formula
WHERE {
  # 정확성 특성
  iso5259:Accuracy iso5259:measuredBy ?measure .

  # 측정 항목 상세 정보
  ?measure iso5259:measureID ?measureID .
  ?measure iso5259:measureName ?measureName .
  ?measure iso5259:measurementFormula ?formula .
}
ORDER BY ?measureID
```

### 예상 결과 (예시)
| measure | measureID | measureName | formula |
|---------|-----------|-------------|---------|
| iso5259:Measure_DQM01 | DQM-01 | Syntactic accuracy | Number of syntactically correct data / Total number of data |
| iso5259:Measure_DQM02 | DQM-02 | Semantic accuracy | Number of semantically correct data / Total number of data |

### 활용 사례
- 특정 품질 특성의 측정 방법 문서화
- 데이터 품질 검증 스크립트 자동 생성
- 품질 메트릭 계산기 구현

### 변형 쿼리: 여러 특성 동시 조회
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?charLabel ?measureID ?measureName
WHERE {
  ?characteristic rdfs:label ?charLabel .
  ?characteristic iso5259:measuredBy ?measure .
  ?measure iso5259:measureID ?measureID .
  ?measure iso5259:measureName ?measureName .

  FILTER (lang(?charLabel) = "ko")

  # 정확성, 완전성, 일관성만
  FILTER (?characteristic IN (iso5259:Accuracy, iso5259:Completeness, iso5259:Consistency))
}
ORDER BY ?charLabel ?measureID
```

---

## 쿼리 4: 품질 요구사항 검증

### 목적
데이터셋이 특정 품질 요구사항을 만족하는지 검증합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?requirement ?characteristic ?threshold ?actualValue ?status
WHERE {
  # 품질 요구사항
  ?requirement rdf:type iso5259:QualityRequirement .
  ?requirement iso5259:hasCharacteristic ?characteristic .
  ?requirement iso5259:threshold ?threshold .

  # 특성 레이블
  ?characteristic rdfs:label ?charLabel .

  # 실제 측정값 (가상 데이터)
  OPTIONAL {
    ?measurement iso5259:appliesTo ?requirement .
    ?measurement iso5259:measurementResult ?actualValue .
  }

  # 요구사항 충족 여부 계산
  BIND(
    IF(?actualValue >= ?threshold, "PASS", "FAIL")
    AS ?status
  )

  FILTER (lang(?charLabel) = "ko")
}
```

### 예상 결과 (예시)
| requirement | characteristic | threshold | actualValue | status |
|-------------|----------------|-----------|-------------|--------|
| req:ACC_001 | 정확성 | 0.95 | 0.97 | PASS |
| req:COM_001 | 완전성 | 0.90 | 0.85 | FAIL |

### 활용 사례
- 데이터 품질 자동 검증 시스템
- 품질 모니터링 대시보드
- SLA (Service Level Agreement) 추적

---

## 쿼리 5: 관련 품질 특성 탐색 (추론)

### 목적
특정 품질 특성과 관련된 다른 특성들을 탐색합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?relatedChar ?relatedLabel ?relationshipType
WHERE {
  {
    # 같은 카테고리에 속한 특성 (형제 관계)
    iso5259:Accuracy rdfs:subClassOf ?category .
    ?relatedChar rdfs:subClassOf ?category .
    ?relatedChar rdfs:label ?relatedLabel .

    BIND("같은 카테고리" AS ?relationshipType)

    FILTER (?relatedChar != iso5259:Accuracy)
    FILTER (lang(?relatedLabel) = "ko")
  }
  UNION
  {
    # relatesTo 속성으로 연결된 특성
    iso5259:Accuracy iso5259:relatesTo ?relatedChar .
    ?relatedChar rdfs:label ?relatedLabel .

    BIND("직접 관련" AS ?relationshipType)

    FILTER (lang(?relatedLabel) = "ko")
  }
}
ORDER BY ?relationshipType ?relatedLabel
```

### 예상 결과
| relatedChar | relatedLabel | relationshipType |
|-------------|--------------|------------------|
| iso5259:Consistency | 일관성 | 같은 카테고리 |
| iso5259:Completeness | 완전성 | 같은 카테고리 |
| iso5259:Precision | 정밀성 | 직접 관련 |

### 활용 사례
- 품질 특성 간 연관성 분석
- 데이터 품질 개선 우선순위 결정
- 품질 특성 네트워크 시각화

---

## 쿼리 6 (보너스): 온톨로지 통계 정보

### 목적
온톨로지의 전체 구조와 규모를 파악합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT
  (COUNT(DISTINCT ?class) AS ?totalClasses)
  (COUNT(DISTINCT ?objProp) AS ?totalObjectProperties)
  (COUNT(DISTINCT ?dataProp) AS ?totalDataProperties)
  (COUNT(DISTINCT ?characteristic) AS ?totalCharacteristics)
WHERE {
  # 모든 클래스
  ?class rdf:type owl:Class .

  # Object Properties
  OPTIONAL {
    ?objProp rdf:type owl:ObjectProperty .
  }

  # Data Properties
  OPTIONAL {
    ?dataProp rdf:type owl:DatatypeProperty .
  }

  # 품질 특성 (DataQualityCharacteristic의 하위 클래스)
  OPTIONAL {
    ?characteristic rdfs:subClassOf+ iso5259:DataQualityCharacteristic .
  }
}
```

### 예상 결과
| totalClasses | totalObjectProperties | totalDataProperties | totalCharacteristics |
|--------------|----------------------|---------------------|---------------------|
| 30+ | 7 | 7 | 24 |

### 활용 사례
- 온톨로지 문서 자동 생성
- 온톨로지 버전 간 비교
- 메타데이터 대시보드

---

## 쿼리 7 (고급): 측정 함수 추출 및 코드 생성

### 목적
측정 함수의 수식을 추출하여 Python/SQL 코드로 변환할 수 있도록 준비합니다.

### SPARQL 쿼리
```sparql
PREFIX iso5259: <http://pebblous.ai/ontology/iso5259-2#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?charLabel ?measureID ?formula ?description
WHERE {
  ?characteristic rdf:type owl:Class .
  ?characteristic rdfs:label ?charLabel .
  ?characteristic iso5259:measuredBy ?measure .

  ?measure iso5259:measureID ?measureID .
  ?measure iso5259:usesFunction ?function .

  ?function iso5259:measurementFormula ?formula .
  ?measure iso5259:measureDescription ?description .

  FILTER (lang(?charLabel) = "ko")
}
ORDER BY ?charLabel ?measureID
```

### 활용 사례
- 데이터 품질 검증 코드 자동 생성
- SQL 쿼리 템플릿 생성
- Python 함수 스켈레톤 생성

### 예제 출력 후처리 (Python)
```python
import rdflib

# SPARQL 쿼리 결과를 Python 함수로 변환
def generate_quality_function(measure_id, formula, description):
    function_name = f"calculate_{measure_id.lower().replace('-', '_')}"

    # 수식을 Python 코드로 변환
    python_formula = formula.replace('/', ' / ').replace('*', ' * ')

    return f"""
def {function_name}(data):
    \"\"\"
    {description}

    Formula: {formula}
    \"\"\"
    # TODO: Implement based on your data structure
    numerator = ...
    denominator = ...
    return numerator / denominator
"""

# 예시 출력:
# def calculate_dqm_01(data):
#     """
#     Syntactic accuracy measure
#
#     Formula: Number of syntactically correct data / Total number of data
#     """
#     numerator = len([d for d in data if is_syntactically_correct(d)])
#     denominator = len(data)
#     return numerator / denominator
```

---

## 웹 블로그 인터랙티브 구현 예시

### HTML + JavaScript (rdflib.js 사용)
```html
<section class="bg-slate-900 rounded-lg p-6 my-8">
  <h3 class="text-xl font-bold text-white mb-4">SPARQL 쿼리 실습</h3>

  <!-- 쿼리 선택 -->
  <div class="mb-4">
    <label class="text-slate-300 mb-2 block">쿼리 선택:</label>
    <select id="querySelector"
            class="bg-slate-800 text-white px-4 py-2 rounded w-full border border-slate-700">
      <option value="query1">쿼리 1: 모든 품질 특성 조회</option>
      <option value="query2">쿼리 2: 카테고리별 분류</option>
      <option value="query3">쿼리 3: 측정 항목 조회</option>
    </select>
  </div>

  <!-- 쿼리 편집기 -->
  <textarea id="sparqlEditor"
            class="w-full h-48 bg-slate-800 text-green-400 p-4 rounded font-mono text-sm border border-slate-700"
            placeholder="SPARQL 쿼리를 입력하세요..."></textarea>

  <!-- 실행 버튼 -->
  <button onclick="executeSPARQL()"
          class="accent-bg px-6 py-3 rounded mt-4 hover:opacity-90 transition">
    쿼리 실행
  </button>

  <!-- 결과 테이블 -->
  <div id="queryResults" class="mt-6"></div>
</section>

<script type="module">
  import { graph, parse, Namespace } from 'https://cdn.skypack.dev/rdflib';

  const store = graph();
  const ISO5259 = Namespace('http://pebblous.ai/ontology/iso5259-2#');
  const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');

  // OWL 파일 로드
  fetch('/project/CURK/ontology/example/iso5259-2-ontology.owl')
    .then(response => response.text())
    .then(rdfXml => {
      parse(rdfXml, store, 'http://pebblous.ai/ontology/iso5259-2', 'application/rdf+xml');
      console.log('온톨로지 로드 완료');
    });

  // SPARQL 쿼리 실행
  window.executeSPARQL = function() {
    const query = document.getElementById('sparqlEditor').value;

    // rdflib.js SPARQL 쿼리 실행
    // (실제 구현에서는 SPARQL.js 또는 Comunica 사용 권장)

    const results = executeQuery(store, query);
    displayResults(results);
  };

  function displayResults(results) {
    const container = document.getElementById('queryResults');

    // 테이블 생성
    let html = '<table class="w-full bg-slate-800/50 rounded overflow-hidden">';
    html += '<thead><tr class="bg-slate-700">';

    // 헤더
    results.columns.forEach(col => {
      html += `<th class="px-4 py-2 text-left text-slate-300">${col}</th>`;
    });
    html += '</tr></thead><tbody>';

    // 데이터
    results.rows.forEach((row, i) => {
      html += `<tr class="${i % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/50'}">`;
      row.forEach(cell => {
        html += `<td class="px-4 py-2 text-slate-300">${cell}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
  }
</script>
```

---

## 다음 단계

1. ✅ **SPARQL 쿼리 예제 작성 완료**
2. 🔄 **방법론 정리** (수동 vs LLM 기반 온톨로지 추출)
3. 📝 **마크다운 보고서 초안**
4. 🎨 **인터랙티브 HTML 아티클**
5. 🔍 **SEO 최적화**

---

**문서 작성**: 2025-11-01
**프로젝트**: Pebblous Blog - ISO/IEC 5259-2 Ontology Article
**다음 작업**: 온톨로지 추출 방법론 정리
