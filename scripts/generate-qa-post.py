#!/usr/bin/env python3
"""
AADS QA Dataset Post Generator (Jinja2 Template Edition)
==========================================================

JSON 메타데이터에서 HTML 블로그 포스트를 Jinja2 템플릿으로 자동 생성합니다.

Usage:
    python3 scripts/generate-qa-post.py /tmp/qa-metadata-{domain}.json

Output:
    project/AADS/{domain}-qa-dataset.html

Requirements:
    pip3 install jinja2
"""

import json
import sys
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape

def load_json(json_path):
    """JSON 파일 로드"""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_content_sections(metadata):
    """각 섹션별 HTML 컨텐츠 생성 (intro, overview, pebblous)"""

    domain = metadata['metadata']['domain']
    domain_en = metadata['metadata']['domain_en']
    dataset_count = metadata['metadata']['dataset_count']
    qa_count = metadata['metadata']['qa_count']

    # Intro Section HTML
    intro_html = f"""
    <p class="themeable-text mb-4">
        본 포스팅에서는 <strong class="teal-text">{domain}</strong> 분야의 LLM 파인튜닝을 위한 고품질 QA 데이터셋 구축 과정을 소개합니다.
    </p>
    <p class="themeable-text mb-4">
        총 <strong class="orange-text">{dataset_count}개</strong>의 데이터셋에서 <strong class="orange-text">{qa_count}개</strong>의 QA 쌍을 구축하였으며,
        각 데이터셋마다 4가지 유형(A, B, C, D)의 질문-답변 샘플을 제공합니다.
    </p>
    <p class="themeable-text">
        AADS (Agentic AI Data Scientist) 프로젝트의 일환으로, 데이터 품질 관점에서 체계적인 QA 데이터 구축 방법론을 제시합니다.
    </p>
    """

    # Overview Section HTML
    overview_html = """
    <h3 class="text-xl font-bold themeable-heading mb-4">QA 유형 설명</h3>
    <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="themeable-card rounded-lg p-4">
            <div class="font-bold teal-text mb-2">유형 A: 도메인 정의/목적</div>
            <p class="text-sm themeable-text-secondary">데이터셋의 목적, 배경, 적용 범위 등 도메인 정의 관련 질문</p>
        </div>
        <div class="themeable-card rounded-lg p-4">
            <div class="font-bold orange-text mb-2">유형 B: 데이터 구조/구성</div>
            <p class="text-sm themeable-text-secondary">데이터 스키마, 필드 구성, 데이터 관계 등 구조 관련 질문</p>
        </div>
        <div class="themeable-card rounded-lg p-4">
            <div class="font-bold teal-text mb-2">유형 C: AI 모델/임무</div>
            <p class="text-sm themeable-text-secondary">AI 모델 적용, 머신러닝 태스크, 알고리즘 선택 등 AI 관련 질문</p>
        </div>
        <div class="themeable-card rounded-lg p-4">
            <div class="font-bold orange-text mb-2">유형 D: 품질/공정 관리</div>
            <p class="text-sm themeable-text-secondary">데이터 품질 검증, 프로세스 관리, 표준 준수 등 품질 관련 질문</p>
        </div>
    </div>
    """

    # Pebblous Perspective HTML
    pebblous_html = f"""
    <h3 class="text-xl font-bold themeable-heading mb-4">1. {domain} 도메인 지식의 중요성</h3>
    <p class="themeable-text mb-6">
        {domain} 분야는 전문적인 도메인 지식이 필수적입니다.
        본 QA 데이터셋은 해당 분야의 핵심 개념과 실무 지식을 LLM에게 효과적으로 학습시킬 수 있도록 설계되었습니다.
    </p>

    <h3 class="text-xl font-bold themeable-heading mb-4">2. LLM 파인튜닝 활용 전략</h3>
    <p class="themeable-text mb-4">
        구축된 {qa_count}개의 QA 쌍은 다음과 같은 방식으로 LLM 파인튜닝에 활용될 수 있습니다:
    </p>
    <ul class="list-disc list-inside space-y-2 themeable-text-secondary mb-6">
        <li><strong>도메인 특화 모델 개발</strong>: {domain} 전문 챗봇 및 어시스턴트 구축</li>
        <li><strong>검색 증강 생성(RAG)</strong>: 벡터 데이터베이스와 결합한 질의응답 시스템</li>
        <li><strong>다단계 추론</strong>: 복잡한 도메인 문제 해결을 위한 CoT(Chain-of-Thought) 학습</li>
        <li><strong>품질 평가 기준</strong>: LLM 응답 품질 평가를 위한 골드 스탠다드</li>
    </ul>
    """

    return {
        'intro_html': intro_html,
        'overview_html': overview_html,
        'pebblous_html': pebblous_html
    }

def generate_faqs(domain, domain_en):
    """도메인별 기본 FAQ 생성"""
    return [
        {
            'question': f'이 QA 데이터셋은 어떤 용도로 사용할 수 있나요?',
            'answer': f'{domain} 분야 LLM 파인튜닝, RAG 시스템 구축, 도메인 특화 챗봇 개발 등에 활용 가능합니다.'
        },
        {
            'question': 'QA 데이터셋의 품질은 어떻게 보장되나요?',
            'answer': '각 QA 쌍은 도메인 전문가의 검토를 거쳤으며, 4가지 유형(A, B, C, D)별로 체계적으로 구성되었습니다.'
        },
        {
            'question': '데이터셋을 상업적으로 사용할 수 있나요?',
            'answer': '구체적인 라이선스는 각 데이터셋 출처의 원본 라이선스를 따릅니다. 상업적 사용 전 출처 확인이 필요합니다.'
        }
    ]

def prepare_template_context(metadata):
    """Jinja2 템플릿 컨텍스트 준비"""

    # 메타데이터 추출
    meta = metadata['metadata']
    datasets = metadata['datasets']
    keywords = metadata['keywords']
    summary = metadata.get('summary', {})

    # 각 데이터셋에 샘플 유형 추가 (A, B, C, D 순환)
    sample_types = ['A', 'B', 'C', 'D']
    for i, dataset in enumerate(datasets):
        dataset['sample_type'] = sample_types[i % 4]

    # 섹션 HTML 생성
    sections = generate_content_sections(metadata)

    # FAQs 생성
    faqs = generate_faqs(meta['domain'], meta['domain_en'])

    # Tags JSON 생성
    tags_json = json.dumps(keywords, ensure_ascii=False)

    # FAQs JSON 생성
    faqs_json = json.dumps([{
        'question': faq['question'],
        'answer': faq['answer']
    } for faq in faqs], ensure_ascii=False)

    return {
        'metadata': meta,
        'datasets': datasets,
        'keywords': keywords,
        'summary': summary,
        'intro_html': sections['intro_html'],
        'overview_html': sections['overview_html'],
        'pebblous_html': sections['pebblous_html'],
        'faqs': faqs,
        'tags_json': tags_json,
        'faqs_json': faqs_json
    }

def render_template(context, template_path):
    """Jinja2 템플릿 렌더링"""

    # 템플릿 디렉토리 설정
    template_dir = template_path.parent
    template_name = template_path.name

    # Jinja2 환경 설정
    env = Environment(
        loader=FileSystemLoader(str(template_dir)),
        autoescape=select_autoescape(['html', 'xml']),
        trim_blocks=True,
        lstrip_blocks=True
    )

    # 템플릿 로드 및 렌더링
    template = env.get_template(template_name)
    html = template.render(**context)

    return html

def save_html(html, output_path):
    """HTML 파일 저장"""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"✅ HTML 생성 완료: {output_path}")

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/generate-qa-post.py /tmp/qa-metadata-{domain}.json")
        sys.exit(1)

    json_path = Path(sys.argv[1])

    if not json_path.exists():
        print(f"❌ JSON 파일을 찾을 수 없습니다: {json_path}")
        sys.exit(1)

    # JSON 로드
    print(f"📖 JSON 로드 중: {json_path}")
    metadata = load_json(json_path)

    # 템플릿 경로 설정
    repo_root = Path(__file__).parent.parent
    template_path = repo_root / "scripts/templates/qa-post-template.html"

    if not template_path.exists():
        print(f"❌ 템플릿 파일을 찾을 수 없습니다: {template_path}")
        sys.exit(1)

    # 템플릿 컨텍스트 준비
    print("🔧 템플릿 컨텍스트 준비 중...")
    context = prepare_template_context(metadata)

    # 템플릿 렌더링
    print("🎨 Jinja2 템플릿 렌더링 중...")
    html = render_template(context, template_path)

    # 출력 경로 설정
    domain_en = metadata['metadata']['domain_en']
    output_path = repo_root / f"project/AADS/{domain_en}-qa-dataset.html"

    # HTML 저장
    save_html(html, output_path)

    print(f"\n🎉 자동 생성 완료!")
    print(f"   Domain: {metadata['metadata']['domain']}")
    print(f"   Datasets: {metadata['metadata']['dataset_count']}")
    print(f"   QA Pairs: {metadata['metadata']['qa_count']}")
    print(f"   Output: {output_path}")
    print(f"\n💡 다음 단계:")
    print(f"   1. HTML 파일 검토: open {output_path}")
    print(f"   2. articles.json 업데이트: python3 scripts/update-articles-json.py {json_path}")

if __name__ == "__main__":
    main()
