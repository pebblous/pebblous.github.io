# Pebblous Components

공통으로 사용되는 HTML 컴포넌트들을 모듈화하여 관리합니다.

## 📦 Footer Component

### 사용법

#### 1. Footer HTML 추가

`</body>` 태그 직전에 다음 2줄을 추가:

```html
<!-- Footer Component (loaded dynamically) -->
<div id="footer-placeholder"></div>
<script src="/components/footer-loader.js"></script>
</body>
</html>
```

#### 2. Footer 스타일 정의 (필수!)

**중요**: Footer HTML에는 색상이 없습니다. 각 페이지의 `<style>` 태그에서 색상을 정의해야 합니다.

**다크 테마** (index.html용):
```css
/* Footer Styles - Dark Theme */
.pebblous-footer {
    background-color: #0f172a;
    color: #94a3b8;
}
.footer-border {
    border-top: 1px solid #1e293b;
}
.footer-heading {
    color: #e2e8f0;
}
.footer-text {
    color: #94a3b8;
}
.footer-link {
    color: #94a3b8;
    transition: color 0.2s;
}
.footer-link:hover {
    color: #F86825;
}
.footer-divider {
    border-top: 1px solid #1e293b;
}
.footer-social-icon {
    color: #64748b;
    transition: color 0.2s;
}
.footer-social-icon:hover {
    color: #e2e8f0;
}
```

**라이트 테마** (블로그 페이지용):
```css
/* Footer Styles - Light Theme */
.pebblous-footer {
    background-color: #ffffff;
    color: #57534e;
}
.footer-border {
    border-top: 1px solid #e7e5e4;
}
.footer-heading {
    color: #1c1917;
}
.footer-text {
    color: #57534e;
}
.footer-link {
    color: #57534e;
    transition: color 0.2s;
}
.footer-link:hover {
    color: #F86825;
}
.footer-divider {
    border-top: 1px solid #e7e5e4;
}
.footer-social-icon {
    color: #9ca3af;
    transition: color 0.2s;
}
.footer-social-icon:hover {
    color: #1c1917;
}
```

### 파일 구조

```
/components/
├── README.md              # 이 파일
├── footer.html            # Footer HTML 컨텐츠
└── footer-loader.js       # Footer 로더 스크립트
```

### Footer 수정 방법

`/components/footer.html` 파일만 수정하면 모든 페이지에 자동으로 반영됩니다!

```bash
# footer.html 수정
vim /components/footer.html

# Git commit & push
git add components/footer.html
git commit -m "Update footer links"
git push
```

### 작동 원리

1. 각 페이지가 로드될 때 `footer-loader.js` 실행
2. JavaScript가 `/components/footer.html`을 fetch
3. 가져온 HTML을 `#footer-placeholder`에 삽입
4. Footer 표시 완료!

### 장점

✅ **중앙 관리**: 한 곳만 수정하면 모든 페이지에 반영
✅ **간편한 적용**: 2줄만 추가하면 끝
✅ **GitHub Pages**: 별도 빌드 없이 바로 작동
✅ **확장 가능**: Header, Navigation 등 다른 컴포넌트도 동일한 방식으로 추가 가능

### 적용된 페이지

- `/project/CURK/Mini-Project/CURK-2025-09-29/index.html`

### 다른 페이지에 적용하기

기존 페이지의 `<footer>...</footer>` 전체를 다음으로 교체:

```html
<!-- 기존 (삭제) -->
<footer class="bg-white text-stone-600 mt-16">
    ...
</footer>

<!-- 새로운 방식 (추가) -->
<div id="footer-placeholder"></div>
<script src="/components/footer-loader.js"></script>
```

## 📋 Header Component

### 사용법

#### 1. Header HTML 추가

`<body>` 태그 직후에 추가:

```html
<body class="antialiased">
    <!-- Header Component Placeholder -->
    <div id="header-placeholder"></div>

    <!-- 나머지 컨텐츠 -->
</body>
```

#### 2. Header 로딩 및 테마 설정

페이지 하단 스크립트에서 header를 로드하고 테마를 설정합니다.

**CSS 변수 기반 테마 (권장)**:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themes = {
        dark: {
            logoImage: 'https://pebblous.github.io/image/Pebblous_BM_Orange_RGB.png',
            icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
        },
        light: {
            logoImage: 'https://pebblous.github.io/image/Pebblous_BM_Black_RGB.png',
            icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
        },
        beige: {
            logoImage: 'https://pebblous.github.io/image/Pebblous_BM_Orange_RGB.png',
            icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        }
    };

    function setupThemeSwitcher() {
        const themeSwitcher = document.getElementById('theme-switcher');
        if (!themeSwitcher) return;

        themeSwitcher.innerHTML = '';
        Object.keys(themes).forEach(themeName => {
            const btn = document.createElement('button');
            btn.dataset.theme = themeName;
            btn.className = 'p-1 rounded-full transition-colors duration-300';
            btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${themes[themeName].icon}"></path></svg>`;
            btn.onclick = () => applyTheme(themeName, btn);
            themeSwitcher.appendChild(btn);
        });

        const initialBtn = themeSwitcher.querySelector(`[data-theme="${savedTheme}"]`);
        if (initialBtn) applyTheme(savedTheme, initialBtn);
    }

    function applyTheme(themeName, activeBtn) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('selectedTheme', themeName);

        const pageLogo = document.getElementById('page-logo');
        if (pageLogo && themes[themeName]) {
            pageLogo.src = themes[themeName].logoImage;
        }

        // 아이콘 가시성 개선: 테마별 색상 조정
        const themeSwitcher = document.getElementById('theme-switcher');
        if (themeSwitcher) {
            themeSwitcher.querySelectorAll('button').forEach(btn => {
                btn.style.backgroundColor = 'transparent';

                // 테마별 아이콘 색상 설정
                if (themeName === 'dark') {
                    btn.style.color = '#cbd5e1'; // slate-300 (밝은 회색)
                } else if (themeName === 'light') {
                    btn.style.color = '#475569'; // slate-600 (어두운 회색)
                } else if (themeName === 'beige') {
                    btn.style.color = '#5a534a'; // 어두운 갈색
                }
            });

            if (activeBtn) {
                activeBtn.style.backgroundColor = 'var(--accent-color)';
                activeBtn.style.color = 'white';
            }
        }
    }

    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const pageLogo = document.getElementById('page-logo');
            if (pageLogo && themes[savedTheme]) {
                pageLogo.src = themes[savedTheme].logoImage;
            }

            setupThemeSwitcher();
        })
        .catch(err => console.error('Failed to load header:', err));
});
```

#### 3. CSS 테마 변수 정의

```css
:root {
    /* Dark Theme (default) */
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --accent-color: #F86825;
}

[data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #1e293b;
}

[data-theme="beige"] {
    --bg-primary: #f5f1e8;
    --bg-secondary: #ebe3d5;
    --text-primary: #2d2a26;
}
```

### 적용된 페이지

- `/project/App/text-audit-01.html` - LLM 데이터셋 검수기
- `/project/ISO5259/5259_text_qa.html` - ISO 표준 문서 (동적 스타일 방식)

### 주요 기능

✅ **테마 전환**: Dark / Light / Beige 3가지 테마
✅ **로고 자동 변경**: 테마에 맞는 로고 이미지
✅ **아이콘 가시성**: 모든 테마에서 아이콘이 명확하게 보임
✅ **localStorage**: 선택한 테마 저장 및 복원
✅ **홈 버튼**: 블로그 메인으로 이동

## 🚀 향후 확장 가능한 컴포넌트

같은 방식으로 다음 컴포넌트들도 모듈화할 수 있습니다:

- **Navigation** (`/components/nav.html`)
- **Breadcrumb** (`/components/breadcrumb.html`)
- **Share Buttons** (`/components/share-buttons.html`)

## 💡 문제 해결

### Footer가 표시되지 않아요

1. 브라우저 개발자 도구 (F12) → Console 확인
2. 에러 메시지 확인:
   - `Footer placeholder not found` → `<div id="footer-placeholder">` 추가 필요
   - `Failed to load footer: 404` → 경로 확인 (`/components/footer.html` 존재 여부)

### 로컬에서 테스트하려면?

```bash
# 로컬 서버 실행
cd /path/to/pebblous.github.io
python3 -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000/project/CURK/Mini-Project/CURK-2025-09-29/index.html
```

## 📝 참고

- Footer는 클라이언트 사이드에서 로드됩니다 (JavaScript)
- SEO에 영향 최소 (Footer는 SEO 중요도 낮음)
- 모든 브라우저 지원 (IE 제외)
