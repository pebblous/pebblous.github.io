# giscus 댓글 시스템 설치 가이드

## 목적 (Commercial Objectives)

giscus 댓글 시스템은 다음의 상업적 목적을 위해 설치되었습니다:

1. **사용자 UX 향상** - 독자들이 질문하고 토론할 수 있는 플랫폼 제공
2. **고객 질문 수집** - 잠재 고객의 니즈와 관심사 파악
3. **Contact Point 수집** - GitHub 프로필을 통한 잠재 고객 정보 수집
4. **LinkedIn 연계** - 댓글 작성자의 GitHub 프로필에서 LinkedIn 연결 확인 가능

## 설치 단계

### 1단계: GitHub Discussions 활성화

1. GitHub repository 페이지로 이동: https://github.com/pebblous/pebblous.github.io
2. **Settings** 탭 클릭
3. **Features** 섹션에서 **Discussions** 체크박스 활성화
4. **Discussions** 탭이 생성되었는지 확인

### 2단계: giscus 앱 설치

1. https://github.com/apps/giscus 방문
2. **Install** 버튼 클릭
3. `pebblous/pebblous.github.io` repository 선택
4. 권한 승인

### 3단계: giscus 설정 생성

1. https://giscus.app/ko 방문
2. Repository 입력: `pebblous/pebblous.github.io`
3. **Discussion 카테고리** 설정:
   - Category: "Blog Comments" (새로 생성 권장)
   - 이 카테고리는 댓글 전용으로 사용

4. 생성된 설정에서 다음 값 복사:
   - `data-repo-id`: (예: R_kgDONZ8Qcw)
   - `data-category-id`: (예: DIC_kwDONZ8Qc84ClVXq)

### 4단계: common-utils.js 업데이트

`scripts/common-utils.js` 파일의 `PebblousComments.init()` 함수에서 다음 값을 업데이트:

```javascript
script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // 3단계에서 복사한 값
script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // 3단계에서 복사한 값
```

## 구현 세부사항

### 자동 로딩
- `common-utils.js`의 `PebblousPage.init()`에서 자동으로 댓글 시스템 초기화
- 모든 article 페이지에 `id="comments-section"` 섹션만 추가하면 자동 작동

### 테마 설정
- 다크 테마 기본 설정 (Pebblous 브랜드 컬러와 매치)
- 한국어 UI 설정

### 상업적 추적
- `data-emit-metadata='1'` 활성화로 사용자 정보 수집 가능
- giscus 이벤트 리스닝으로 댓글 작성 추적
- 향후 Google Analytics 연동 가능

### LinkedIn 연계 방법

giscus는 GitHub 계정을 사용하므로:
1. 댓글 작성자의 GitHub 프로필 클릭
2. 프로필에 LinkedIn이 연결되어 있으면 확인 가능
3. 독자들에게 GitHub 프로필에 LinkedIn 추가 권장

## CSS 스타일링

`css/styles.css`에 다음 스타일 추가됨:

```css
/* Comments Section (giscus) */
#comments-section {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(71, 85, 105, 0.3);
}

.comments-info {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(248, 104, 37, 0.1);
    border-left: 3px solid #F86825;
    border-radius: 0.5rem;
}
```

## Article 페이지 템플릿

새 article 페이지에 다음 HTML 추가:

```html
<!-- Comments Section (giscus) -->
<section id="comments-section" class="mb-16 fade-in-card">
    <h2 class="text-2xl font-bold themeable-heading mb-6">💬 의견 나누기</h2>
    <div class="themeable-card rounded-xl p-8">
        <div class="comments-info">
            <strong>독자 여러분의 의견을 듣고 싶습니다!</strong>
            <p class="mt-2">
                [주제]에 대한 질문이나 의견이 있으신가요?
                GitHub 계정으로 로그인하여 댓글을 남겨주세요.
                여러분의 소중한 의견은 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.
            </p>
            <p class="mt-2 text-xs opacity-75">
                💼 <strong>비즈니스 문의:</strong> 페블러스 DataClinic에 대한 상담이 필요하시다면
                <a href="https://dataclinic.ai/ko/contact" class="text-orange-500 hover:underline" target="_blank">여기</a>를
                클릭하거나, GitHub 프로필에 LinkedIn을 연결하여 댓글로 문의해 주세요.
            </p>
        </div>
        <!-- giscus comments will be loaded here by common-utils.js -->
    </div>
</section>
```

## 비활성화 방법

특정 페이지에서 댓글을 비활성화하려면:

```javascript
const config = {
    mainTitle: "...",
    subtitle: "...",
    enableComments: false // 댓글 비활성화
};
await PebblousPage.init(config);
```

## 모니터링 및 관리

### 댓글 관리
1. GitHub Discussions 탭에서 댓글 확인
2. "Blog Comments" 카테고리에서 모든 댓글 모니터링
3. 필요시 답변 또는 삭제

### 고객 정보 수집
1. 댓글 작성자의 GitHub 프로필 확인
2. 프로필에서 LinkedIn, 이메일 등 contact 정보 확인
3. 질문 내용을 통해 고객 니즈 파악

### Analytics 연동 (향후)
```javascript
// common-utils.js의 giscus event listener에 추가
if (giscusData.discussion) {
    // Google Analytics 이벤트 전송
    gtag('event', 'comment_engagement', {
        'article_path': window.location.pathname,
        'user': giscusData.discussion.user
    });
}
```

## 트러블슈팅

### 댓글이 로드되지 않는 경우
1. GitHub Discussions가 활성화되어 있는지 확인
2. giscus 앱이 설치되어 있는지 확인
3. `data-repo-id`와 `data-category-id`가 올바른지 확인
4. 브라우저 콘솔에서 에러 메시지 확인

### 한국어가 표시되지 않는 경우
- `data-lang='ko'` 설정 확인
- 브라우저 캐시 삭제 후 재시도

## 참고 링크

- giscus 공식 사이트: https://giscus.app/ko
- giscus GitHub: https://github.com/giscus/giscus
- GitHub Discussions 문서: https://docs.github.com/en/discussions

---

**설치 완료일:** 2025년 11월 10일
**담당자:** Pebblous 기술팀
**목적:** 상업적 - 고객 engagement 및 contact point 수집
