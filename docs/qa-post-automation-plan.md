# QA 포스팅 자동 생성 워크플로우

**작성일**: 2025-12-01
**상태**: ⏸️ 미구현 (계획만 존재, 추후 구현 예정)
**목적**: AADS QA 데이터셋 포스팅 제작 시간을 2~3시간 → 30분~1시간으로 단축
**전략**: Option C (하이브리드) - Agent + Python 스크립트 조합

---

## 🎯 현재 문제점

### 기존 워크플로우 (순차적 수동 작업)
1. 유사 포스팅 복사
2. 메타데이터 수동 교체 (title, description, keywords...)
3. Hero 섹션 수동 교체
4. 통계 수동 교체 (14개→8개, 28개→32개...)
5. **데이터셋 카드 8~14개 하나씩 수동 작성** ⏱️
6. **QA 샘플 32개 하나씩 수동 작성** ⏱️
7. FAQ 7개 수동 작성
8. articles.json 수동 업데이트

**문제점**:
- ⏱️ **시간 소모**: 데이터셋 카드 + QA 샘플만 40~46개 블록 작성 필요
- 🐛 **오류 가능성**: 수동 복붙 시 누락/오타 (예: "제조→사회안전" 변경 놓침)
- 🔄 **반복 작업**: 동일한 패턴을 계속 반복

**작업 시간**: 2~3시간

---

## ✅ 해결 방안: Option C (하이브리드)

### 전체 워크플로우

```
[Phase 1] 소스 MD → 구조화된 JSON 추출
   Tool: Agent (general-purpose)
   Input: project/AADS/source/*.md
   Output: /tmp/qa-metadata.json
   Time: 10분

[Phase 2] JSON → HTML 생성 (템플릿 렌더링)
   Tool: Python + Jinja2
   Input: qa-metadata.json + templates/qa-post-template.html
   Output: project/AADS/*.html
   Time: 5분 (스크립트 실행)

[Phase 3] FAQ 도메인 특화 생성
   Tool: Agent (Sonnet for quality)
   Input: domain, keywords from JSON
   Output: 7개 FAQ (HTML snippet)
   Time: 5분

[Phase 4] articles.json 자동 업데이트
   Tool: Python script
   Input: qa-metadata.json
   Output: articles.json 업데이트 + Featured 정책 검증
   Time: 1분
```

**총 작업 시간**: 30분~1시간 (첫 작업), 이후 10~20분

---

## 📋 상세 실행 계획

### Phase 1: Agent로 메타데이터 추출

**Input 예시**: `project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 규제와 거버넌스 분야.md`

**Output JSON 구조**:
```json
{
  "metadata": {
    "domain": "규제와 거버넌스",
    "domain_en": "regulation-governance",
    "dataset_count": 8,
    "qa_count": 32,
    "qa_per_dataset": 4,
    "date": "2025-12-01",
    "author": "페블러스 데이터 커뮤니케이션 팀"
  },
  "datasets": [
    {
      "id": 1,
      "name": "AI 기본법",
      "name_en": "AI Basic Law",
      "description": "AI 기본법 하위 법령 및 투명성·안전성 확보 의무 관련 규제",
      "qas": {
        "A": {
          "type": "도메인 정의/목적",
          "question": "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법(AI 기본법)의 하위 법령을 마련하는 주된 목적은 무엇입니까?",
          "answer": "하위 법령은 법률에서 정한 투명성, 안전성 확보 의무 및 고영향 AI 사업자 책무 등을 구체화하고 명확화하여, 기업의 규제 우려와 불확실성을 완화하는 데 주력합니다."
        },
        "B": { ... },
        "C": { ... },
        "D": { ... }
      }
    },
    // ... 총 8개 datasets
  ],
  "keywords": [
    "AI 기본법", "AI Basic Law", "규제와 거버넌스", "Regulation and Governance",
    "데이터 거버넌스", "Data Governance", "GDPR", "EU AI Act",
    // ... 총 50개 권장
  ],
  "summary": {
    "type_distribution": {
      "A": 8,  // 25%
      "B": 8,  // 25%
      "C": 8,  // 25%
      "D": 8   // 25%
    }
  }
}
```

**Agent Prompt**:
```
소스 마크다운 파일을 읽고 다음 정보를 JSON으로 추출하세요:

1. 메타데이터: 도메인명(한글/영문), 데이터셋 개수, QA 개수, 작성일
2. 데이터셋 리스트: 각 데이터셋의 이름, 설명, 4개 QA (A, B, C, D 유형)
3. 키워드: 50개 내외 (한글/영문 혼합)
4. 통계: QA 유형별 분포

출력 형식: JSON (위 구조 참고)
```

---

### Phase 2: Python 템플릿 스크립트

**파일 구조**:
```
scripts/
  ├── generate-qa-post.py          # 메인 스크립트
  ├── update-articles-json.py      # articles.json 업데이트
  └── templates/
      └── qa-post-template.html    # Jinja2 템플릿
```

**generate-qa-post.py**:
```python
#!/usr/bin/env python3
"""
AADS QA 포스팅 자동 생성 스크립트

사용법:
  python scripts/generate-qa-post.py /tmp/qa-metadata.json

출력:
  project/AADS/{domain_en}-qa-dataset.html
"""

import json
import sys
from jinja2 import Template
from datetime import datetime

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def render_template(data):
    with open('scripts/templates/qa-post-template.html', 'r', encoding='utf-8') as f:
        template = Template(f.read())
    return template.render(**data)

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate-qa-post.py <metadata.json>")
        sys.exit(1)

    metadata_file = sys.argv[1]
    data = load_json(metadata_file)

    html_content = render_template(data)

    output_file = f"project/AADS/{data['metadata']['domain_en']}-qa-dataset.html"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"✅ Generated: {output_file}")

if __name__ == '__main__':
    main()
```

**templates/qa-post-template.html** (Jinja2):
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>{{ metadata.domain }} 분야 LLM 파인튜닝용 QA 데이터셋 | 페블러스</title>
    <meta name="description" content="{{ metadata.dataset_count }}개 {{ metadata.domain }} 데이터셋에서 구축한 {{ metadata.qa_count }}개 QA 샘플">
    <meta name="keywords" content="{{ keywords|join(', ') }}">
    <!-- ... 나머지 메타태그 ... -->
</head>
<body>
    <!-- Hero Section -->
    <h1>{{ metadata.domain }} 분야 LLM 파인튜닝용 QA 데이터셋 구축</h1>

    <!-- Statistics -->
    <div class="stats">
        <div class="stat-card">
            <h4>{{ metadata.dataset_count }}</h4>
            <p>{{ metadata.domain }} 데이터셋</p>
        </div>
        <div class="stat-card">
            <h4>{{ metadata.qa_count }}</h4>
            <p>QA 쌍 (데이터셋당 {{ metadata.qa_per_dataset }}쌍)</p>
        </div>
    </div>

    <!-- Dataset Cards Loop -->
    {% for dataset in datasets %}
    <div class="interactive-card">
        <h3><span class="teal-text">{{ "%02d"|format(loop.index) }}.</span> {{ dataset.name }}</h3>

        <div class="space-y-4">
            {% for type in ['A', 'B', 'C', 'D'] %}
            <div class="border-l-4 border-{{ type|qa_color }}-500 pl-4">
                <p class="font-semibold">{{ type }}. {{ dataset.qas[type].type }}</p>
                <p class="font-semibold">Q: {{ dataset.qas[type].question }}</p>
                <p class="text-sm">A: {{ dataset.qas[type].answer }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}

    <!-- FAQ Section (Phase 3에서 Agent가 생성) -->
    {{ faq_html|safe }}

</body>
</html>
```

**Custom Jinja2 Filter** (qa_color):
```python
def qa_color(type_code):
    colors = {
        'A': 'teal',   # 도메인 정의/목적
        'B': 'blue',   # 데이터 구조/구성
        'C': 'orange', # AI 모델/임무
        'D': 'purple'  # 품질/공정 관리
    }
    return colors.get(type_code, 'gray')

# Jinja2 환경에 필터 추가
env.filters['qa_color'] = qa_color
```

---

### Phase 3: Agent로 FAQ 생성

**Agent Prompt**:
```
다음 {{ metadata.domain }} 분야 QA 데이터셋에 대한 FAQ 7개를 생성하세요.

**필수 포함 요소**:
1. AADS가 {{ metadata.domain }} 분야 QA 데이터셋을 어떻게 구축하나요?
2. {{ metadata.domain }} 분야에서 데이터 품질 관리가 왜 특히 중요한가요?
3. DataClinic과의 연계 방안

**도메인 특화 키워드**: {{ keywords[:10]|join(', ') }}

**출력 형식**: HTML (itemscope/itemprop 포함)
```

**Output 예시**:
```html
<section id="faq">
    <h2>자주 묻는 질문 (FAQ)</h2>

    <div itemscope itemtype="https://schema.org/Question">
        <h3 itemprop="name">AADS가 규제와 거버넌스 분야 QA 데이터셋을 어떻게 구축하나요?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
                <p>AADS는 AI 기본법, GDPR, EU AI Act 등 8개 핵심 규제 문서를...</p>
            </div>
        </div>
    </div>

    <!-- ... 7개 FAQ -->
</section>
```

---

### Phase 4: articles.json 자동 업데이트

**update-articles-json.py**:
```python
#!/usr/bin/env python3
"""
articles.json에 새 QA 포스팅 추가 + Featured 정책 검증

사용법:
  python scripts/update-articles-json.py /tmp/qa-metadata.json
"""

import json

def add_article(metadata):
    with open('articles.json', 'r', encoding='utf-8') as f:
        articles = json.load(f)

    # Featured 개수 확인
    tech_featured = [a for a in articles['articles']
                     if a['category'] == 'tech' and a.get('featured')]

    featured = len(tech_featured) < 3

    new_article = {
        "id": f"{metadata['domain_en']}-qa-dataset",
        "title": f"{metadata['domain']} 분야 LLM 파인튜닝용 QA 데이터셋 구축",
        "description": f"{metadata['dataset_count']}개 {metadata['domain']} 데이터셋에서 구축한 {metadata['qa_count']}개 QA 샘플",
        "category": "tech",
        "date": metadata['date'],
        "path": f"project/AADS/{metadata['domain_en']}-qa-dataset.html",
        "featured": featured,
        "tags": metadata['keywords']
    }

    articles['articles'].insert(0, new_article)

    # Featured 정책 위반 시 경고
    if len(tech_featured) >= 3 and featured:
        print(f"⚠️  Warning: tech category already has {len(tech_featured)} featured posts!")
        print("    Consider setting featured=false or removing old featured posts.")

    with open('articles.json', 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)

    print(f"✅ Added to articles.json (featured={featured})")

if __name__ == '__main__':
    import sys
    metadata = json.load(open(sys.argv[1]))['metadata']
    add_article(metadata)
```

---

## 🚀 실행 가이드

### 첫 번째 포스팅 (규제와 거버넌스) - 오늘

**Step 1: Agent로 메타데이터 추출**
```bash
# Agent에게 요청:
"project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 규제와 거버넌스 분야.md 파일을 읽고,
위 JSON 구조에 맞게 메타데이터를 추출하여 /tmp/qa-metadata.json에 저장해주세요."
```

**Step 2: Agent로 HTML 직접 생성** (임시, Python 스크립트 개발 전)
```bash
# Agent에게 요청:
"/tmp/qa-metadata.json을 읽고 safety-qa-dataset.html을 템플릿으로 사용하여
regulation-governance-qa-dataset.html을 생성해주세요."
```

**Step 3: Agent로 FAQ 생성**
```bash
# Agent에게 요청:
"규제와 거버넌스 도메인 특성을 반영한 FAQ 7개를 생성하여
regulation-governance-qa-dataset.html에 추가해주세요."
```

**Step 4: articles.json 수동 업데이트** (임시)

**예상 시간**: 1시간

---

### 두 번째 포스팅부터 - Python 스크립트 활용

**Step 1: Agent로 메타데이터 추출** (10분)
```bash
# Agent prompt
```

**Step 2: Python 스크립트 실행** (5분)
```bash
# 스크립트 개발 후
python scripts/generate-qa-post.py /tmp/qa-metadata.json
```

**Step 3: Agent로 FAQ 생성** (5분)
```bash
# Agent prompt
```

**Step 4: articles.json 자동 업데이트** (1분)
```bash
python scripts/update-articles-json.py /tmp/qa-metadata.json
```

**예상 시간**: 20분

---

## 📊 효율성 비교

| 항목 | 기존 방식 | 개선 방식 (첫 작업) | 개선 방식 (이후) |
|------|----------|-------------------|-----------------|
| 메타데이터 교체 | 20분 | 10분 (Agent) | 10분 (Agent) |
| 데이터셋 카드 작성 | 60분 | 20분 (Agent) | 2분 (Script) |
| QA 샘플 작성 | 60분 | 20분 (Agent) | 2분 (Script) |
| FAQ 작성 | 20분 | 10분 (Agent) | 5분 (Agent) |
| articles.json | 10분 | 5분 | 1분 (Script) |
| **총 시간** | **170분** | **65분** | **20분** |
| **절감율** | - | **62% 단축** | **88% 단축** |

---

## 📝 체크리스트

### Phase 1 완료 조건
- [ ] /tmp/qa-metadata.json 생성 완료
- [ ] JSON 구조 검증 (datasets 8개, qas 32개)
- [ ] keywords 50개 이상 포함

### Phase 2 완료 조건
- [ ] scripts/generate-qa-post.py 작성
- [ ] templates/qa-post-template.html 작성
- [ ] 테스트: regulation-governance.json → HTML 변환 성공

### Phase 3 완료 조건
- [ ] FAQ 7개 생성 (도메인 특화)
- [ ] Schema.org markup 포함
- [ ] AADS + DataClinic 강조

### Phase 4 완료 조건
- [ ] articles.json 업데이트
- [ ] Featured 정책 검증 (tech ≤ 3개)
- [ ] 브라우저 확인 완료

---

## 🔮 향후 확장 계획

### Phase 5: 완전 자동화 (선택 사항)
```bash
# 한 줄 명령어로 완성
./scripts/auto-generate-qa-post.sh source.md
```

**auto-generate-qa-post.sh**:
```bash
#!/bin/bash
SOURCE_MD=$1
DOMAIN_EN=$(basename "$SOURCE_MD" .md | sed 's/.*_\s*//' | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Step 1: Agent로 메타데이터 추출
claude-agent extract-metadata "$SOURCE_MD" > /tmp/qa-metadata.json

# Step 2: HTML 생성
python scripts/generate-qa-post.py /tmp/qa-metadata.json

# Step 3: FAQ 생성 (Agent)
claude-agent generate-faq /tmp/qa-metadata.json >> "project/AADS/$DOMAIN_EN-qa-dataset.html"

# Step 4: articles.json 업데이트
python scripts/update-articles-json.py /tmp/qa-metadata.json

echo "✅ 완료: project/AADS/$DOMAIN_EN-qa-dataset.html"
```

---

## 📚 참고 문서

- [blog-creation-workflow.md](blog-creation-workflow.md) - 기존 블로그 작성 워크플로우
- [Jinja2 Documentation](https://jinja.palletsprojects.com/)
- [JSON Schema Validation](https://json-schema.org/)

---

## 버전 히스토리

- **2025-12-01**: 초기 작성 (규제와 거버넌스 포스팅 자동화 계획)
