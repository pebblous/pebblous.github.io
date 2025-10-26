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

## 🚀 향후 확장 가능한 컴포넌트

같은 방식으로 다음 컴포넌트들도 모듈화할 수 있습니다:

- **Header** (`/components/header.html`)
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
