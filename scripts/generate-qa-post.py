#!/usr/bin/env python3
"""
AADS QA Dataset Post Generator
================================

JSON 메타데이터에서 HTML 블로그 포스트를 자동 생성합니다.

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
from datetime import datetime
# from jinja2 import Template  # 향후 템플릿화 시 사용

def load_json(json_path):
    """JSON 파일 로드"""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_html(metadata, template_path=None):
    """Jinja2 템플릿으로 HTML 생성"""

    # 현재는 regulation-governance HTML을 기반으로 직접 생성
    # 향후 Jinja2 템플릿으로 전환 예정

    domain = metadata['metadata']['domain']
    domain_en = metadata['metadata']['domain_en']
    dataset_count = metadata['metadata']['dataset_count']
    qa_count = metadata['metadata']['qa_count']
    date = metadata['metadata']['date']
    author = metadata['metadata']['author']
    datasets = metadata['datasets']
    keywords = metadata['keywords']

    # HTML 헤더 생성
    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="{author}">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':
    new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    }})(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">
    <link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">

    <!-- SEO Meta Tags -->
    <title id="page-title">{domain} 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점 | 페블러스</title>
    <meta id="meta-description" name="description" content="{dataset_count}개 {domain} 데이터셋에서 구축한 {qa_count}개 QA 샘플">
    <meta id="meta-keywords" name="keywords" content="{', '.join(keywords)}">
    <meta name="robots" content="index, follow">

    <!-- Canonical URL -->
    <link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/project/AADS/{domain_en}-qa-dataset.html">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/css/common-styles.css">
    <link rel="stylesheet" href="/css/styles.css">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Fonts -->
    <link rel="stylesheet" as="style" crossorigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

    <style>
        /* Card hover effect */
        .card-hover {{
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }}
        .card-hover:hover {{
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }}

        /* Interactive card with left border */
        .interactive-card {{
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }}
        .interactive-card:hover {{
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            border-left-color: #14b8a6;
        }}

        .stat-card {{
            position: relative;
            padding-left: 1.5rem;
        }}
        .stat-card::before {{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, #14b8a6, #F86825);
            border-radius: 2px;
        }}

        .teal-text {{
            color: #14b8a6;
        }}
        .orange-text {{
            color: #F86825;
        }}

        /* Share Buttons */
        .share-container {{
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }}
        .share-label {{
            font-size: 0.875rem;
            color: #94a3b8;
            font-weight: 500;
        }}
        .share-btn {{
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0;
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            transition: color 0.2s;
            font-size: 0.875rem;
        }}
        .share-btn svg {{
            width: 1.25rem;
            height: 1.25rem;
            transition: transform 0.2s;
        }}
        .share-btn:hover {{
            color: #F86825;
        }}
        .share-btn:hover svg {{
            transform: scale(1.1);
        }}
    </style>
</head>

<body class="min-h-screen transition-colors duration-300">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57L9F58B"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
        <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

            <!-- TOC Sidebar -->
            <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
                <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
                <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border pl-4">
                    <li><a href="#intro" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">서론 및 구축 목표</a></li>
                    <li><a href="#overview" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">QA 데이터셋 개요</a></li>
                    <li><a href="#datasets" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">{dataset_count}개 {domain} 도메인 데이터셋</a></li>
                    <li><a href="#statistics" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">QA 유형 통계</a></li>
                    <li><a href="#prompt-template" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">프롬프트 템플릿</a></li>
                    <li><a href="#pebblous-perspective" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">페블러스 관점</a></li>
                    <li><a href="#faq" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">FAQ</a></li>
                    <li><a href="#datasets-sources" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">관련 데이터셋 출처</a></li>
                    <li><a href="#related-posts" class="toc-link themeable-text-secondary hover:text-teal-500 transition-colors">관련 포스팅</a></li>
                </ul>
            </nav>

            <!-- Main Article -->
            <main class="max-w-[800px] px-4 sm:px-6">

                <!-- Hero Section -->
                <header class="text-center mb-16">
                    <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-6 leading-tight" style="line-height: 1.4;">
                    </h1>

                    <!-- 발행 정보 -->
                    <div class="flex flex-wrap justify-center items-center gap-2 text-sm text-slate-400 mb-8">
                        <span id="publish-date"></span>
                        <span class="text-slate-600">|</span>
                        <span id="publisher"></span>
                        <span class="text-slate-600">|</span>
                        <span id="reading-time">읽는 시간: 약 15분</span>
                    </div>

                    <!-- 공유하기 -->
                    <div class="share-container mb-8">
                        <span class="share-label">공유하기:</span>
                        <button id="copy-url-btn" class="share-btn" title="URL 복사">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>URL</span>
                        </button>
                        <button id="share-twitter-btn" class="share-btn" title="Twitter에 공유">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </button>
                        <button id="share-facebook-btn" class="share-btn" title="Facebook에 공유">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                        </button>
                        <button id="share-linkedin-btn" class="share-btn" title="LinkedIn에 공유">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </button>
                    </div>
                </header>

                <!-- Note: 실제 섹션 내용은 regulation-governance-qa-dataset.html을 참조하여 추가 -->
                <!-- 이 스크립트는 핵심 구조만 생성하고, 상세 내용은 향후 템플릿화 예정 -->

                <!-- Related Posts Section -->
                <section id="related-posts" class="mt-12">
                    <h3 class="text-2xl font-bold themeable-heading mb-6">관련 포스팅</h3>
                    <div id="related-posts-container" class="grid grid-cols-1 gap-6">
                        <!-- Populated by PebblousPage.init() -->
                    </div>
                </section>

            </main>
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="/scripts/common-utils.js"></script>

    <!-- Page Initialization Script -->
    <script>
        document.addEventListener('DOMContentLoaded', async function() {{
            const config = {{
                mainTitle: "{domain} 분야 LLM 파인튜닝용 QA 데이터셋 구축",
                subtitle: "데이터 품질 관점",
                pageTitle: "{domain} 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점 | 페블러스",
                publishDate: "{date.replace('-', '년 ').replace('-', '월 ')}일",
                publisher: "{author}",
                defaultTheme: "light",
                category: "tech",
                articlePath: "project/AADS/{domain_en}-qa-dataset.html",
                tags: {json.dumps(keywords, ensure_ascii=False)},
                faqs: []  // FAQ는 별도로 생성 필요
            }};

            await PebblousPage.init(config);
        }});
    </script>
</body>
</html>
"""

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
    metadata = load_json(json_path)

    # HTML 생성
    html = generate_html(metadata)

    # 출력 경로 설정
    domain_en = metadata['metadata']['domain_en']
    repo_root = Path(__file__).parent.parent
    output_path = repo_root / f"project/AADS/{domain_en}-qa-dataset.html"

    # HTML 저장
    save_html(html, output_path)

    print(f"\n🎉 자동 생성 완료!")
    print(f"   Domain: {metadata['metadata']['domain']}")
    print(f"   Datasets: {metadata['metadata']['dataset_count']}")
    print(f"   QA Pairs: {metadata['metadata']['qa_count']}")
    print(f"   Output: {output_path}")

if __name__ == "__main__":
    main()
