# OG 이미지 생성 가이드

블로그 포스트의 Open Graph 이미지를 자동 생성하는 방법.

---

## 도구 위치

```
tools/generate-og-image.js
```

의존성: `puppeteer` (package.json에 포함)

---

## 사용법

### 1. HTML 파일에서 자동 추출 (권장)

```bash
# 이미지가 없을 때만 생성
node tools/generate-og-image.js --from-html project/XXX/post.html

# 강제 재생성
node tools/generate-og-image.js --from-html project/XXX/post.html --force
```

**자동 추출 항목:**

| 항목 | 소스 | 비고 |
|------|------|------|
| 제목 | `og:title` 또는 `<title>` | 사이트명 접미사 자동 제거 |
| 부제목 | `og:description` | 80자 초과 시 자동 truncate |
| 카테고리 | `articles.json` | 경로 패턴으로 fallback |
| 출력 경로 | `{html폴더}/image/{html이름}.png` | 자동 결정 |

### 2. 수동 지정

```bash
# 기본 (tech 테마)
node tools/generate-og-image.js "제목" output.png

# 부제목 포함
node tools/generate-og-image.js "제목" "부제목" output.png

# 카테고리 지정
node tools/generate-og-image.js --category business "제목" output.png
```

---

## 카테고리별 테마

| 카테고리 | 배지 | 강조색 | 배경 |
|----------|------|--------|------|
| `tech` | Tech | 파랑 (#3B82F6) | 네이비 그라데이션 |
| `business` | Business | 주황 (#F86825) | 브라운 그라데이션 |
| `story` | Story | 청록 (#14B8A6) | 그린 그라데이션 |

---

## 출력 사양

- **크기**: 1200 x 630px (SNS 최적화)
- **포맷**: PNG
- **로고**: `image/Pebblous_BM_Orange_RGB.png`
- **폰트**: Pretendard (CDN)

---

## 워크플로우

### 새 포스트 작성 시

1. HTML 파일 작성 (og:title, og:description 메타 태그 포함)
2. `articles.json`에 포스트 등록
3. OG 이미지 생성:
   ```bash
   node tools/generate-og-image.js --from-html project/XXX/post.html
   ```
4. HTML에 og:image 경로 확인/수정

### 기존 포스트 이미지 일괄 생성

```bash
# 이미지 없는 포스트만 생성 (--force 없이)
for html in project/*//*.html; do
  node tools/generate-og-image.js --from-html "$html"
done
```

---

## 이미지가 생성되지 않는 경우

1. **제목 추출 실패**: HTML에 `og:title` 또는 `<title>` 태그 확인
2. **카테고리 미감지**: `articles.json`에 포스트 등록 여부 확인
3. **이미 존재**: `--force` 옵션 사용

---

## 커스터마이징

### 제목 정리 규칙 수정

`tools/generate-og-image.js`의 `extractFromHTML()` 함수:

```javascript
// 사이트명 접미사 제거 패턴
title = title.replace(/\s*[|\-–—]\s*(Pebblous|Data Greenhouse|페블러스).*$/i, '').trim();
```

### 새 카테고리 추가

`THEMES` 객체에 추가:

```javascript
const THEMES = {
    // ...기존 테마
    newcategory: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #색상코드 100%)',
        accent: '#강조색',
        badge: 'Badge Text'
    }
};
```

---

## 버전 기록

- **2026-01-05**: `--from-html` 자동 추출 기능 추가
- **2026-01-05**: 최초 작성 (수동 모드)
