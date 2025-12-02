#!/usr/bin/env python3
"""
Articles.json Auto-Updater
===========================

JSON 메타데이터에서 articles.json에 새 항목을 자동 추가합니다.

Usage:
    python3 scripts/update-articles-json.py /tmp/qa-metadata-{domain}.json

Features:
    - Featured 정책 준수 (카테고리별 최대 3개)
    - 자동 태그 추출
    - 중복 확인

Requirements:
    - articles.json 파일 존재
"""

import json
import sys
from pathlib import Path
from datetime import datetime

def load_json(json_path):
    """JSON 파일 로드"""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(data, json_path):
    """JSON 파일 저장 (들여쓰기 2칸)"""
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ articles.json 업데이트 완료: {json_path}")

def check_featured_policy(articles, category="tech"):
    """Featured 정책 확인 (카테고리별 최대 3개)"""
    featured_count = sum(
        1 for article in articles
        if article.get('category') == category and article.get('featured') == True
    )
    return featured_count

def create_article_entry(metadata):
    """메타데이터에서 article 항목 생성"""
    domain = metadata['metadata']['domain']
    domain_en = metadata['metadata']['domain_en']
    dataset_count = metadata['metadata']['dataset_count']
    qa_count = metadata['metadata']['qa_count']
    date = metadata['metadata']['date']
    keywords = metadata['keywords']

    # 설명 생성
    # 첫 8개 데이터셋 이름 추출
    dataset_names = [ds['name'] for ds in metadata['datasets'][:8]]
    dataset_names_str = ', '.join(dataset_names)

    description = (
        f"페블러스 AADS가 {domain} 분야 {dataset_count}개 도메인"
        f"({dataset_names_str})에서 구축한 {qa_count}쌍의 LLM 파인튜닝용 QA 데이터셋. "
        f"{domain}를 위한 체계적 접근법을 소개합니다."
    )

    # 태그 생성 (keywords + 기본 태그)
    tags = [
        "LLM 파인튜닝",
        "LLM Fine-tuning",
        "QA 데이터셋",
        "Question-Answer Dataset",
    ] + keywords + [
        "AADS",
        "Agentic AI Data Scientist",
        "데이터 중심 AI",
        "Data-Centric AI",
        "페블러스",
        "Pebblous",
        "DataClinic",
        "데이터클리닉"
    ]

    # 중복 제거
    tags = list(dict.fromkeys(tags))

    entry = {
        "id": f"{domain_en}-qa-dataset",
        "title": f"{domain} 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점",
        "description": description,
        "category": "tech",
        "date": date,
        "path": f"project/AADS/{domain_en}-qa-dataset.html",
        "image": "https://blog.pebblous.ai/image/Pebblous_BM_Orange_RGB.png",
        "cardImage": "",
        "published": True,
        "featured": False,  # 기본값: False (Featured 정책 준수)
        "tags": tags
    }

    return entry

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/update-articles-json.py /tmp/qa-metadata-{domain}.json")
        sys.exit(1)

    json_path = Path(sys.argv[1])

    if not json_path.exists():
        print(f"❌ JSON 파일을 찾을 수 없습니다: {json_path}")
        sys.exit(1)

    # JSON 로드
    metadata = load_json(json_path)

    # articles.json 경로
    repo_root = Path(__file__).parent.parent
    articles_json_path = repo_root / "articles.json"

    if not articles_json_path.exists():
        print(f"❌ articles.json 파일을 찾을 수 없습니다: {articles_json_path}")
        sys.exit(1)

    # articles.json 로드
    articles_data = load_json(articles_json_path)

    # 새 항목 생성
    new_entry = create_article_entry(metadata)

    # 중복 확인
    existing_ids = [article['id'] for article in articles_data['articles']]
    if new_entry['id'] in existing_ids:
        print(f"⚠️  이미 존재하는 ID입니다: {new_entry['id']}")
        print(f"   기존 항목을 업데이트하시겠습니까? (y/n): ", end='')
        response = input().strip().lower()
        if response != 'y':
            print("❌ 업데이트 취소")
            sys.exit(0)

        # 기존 항목 제거
        articles_data['articles'] = [
            article for article in articles_data['articles']
            if article['id'] != new_entry['id']
        ]

    # Featured 정책 확인
    featured_count = check_featured_policy(articles_data['articles'], category="tech")
    print(f"\n📊 Featured 정책 상태:")
    print(f"   카테고리: tech")
    print(f"   현재 Featured 개수: {featured_count}/3")

    if featured_count >= 3:
        print(f"   ⚠️  Featured 한도 도달 (3개)")
        print(f"   새 항목은 featured: false로 추가됩니다.")
        new_entry['featured'] = False
    else:
        print(f"   ✅ Featured 추가 가능 ({3 - featured_count}개 남음)")

    # 최상단에 새 항목 추가
    articles_data['articles'].insert(0, new_entry)

    # articles.json 저장
    save_json(articles_data, articles_json_path)

    print(f"\n🎉 articles.json 업데이트 완료!")
    print(f"   ID: {new_entry['id']}")
    print(f"   Title: {new_entry['title']}")
    print(f"   Tags: {len(new_entry['tags'])}개")
    print(f"   Featured: {new_entry['featured']}")
    print(f"   전체 포스트 수: {len(articles_data['articles'])}개")

if __name__ == "__main__":
    main()
