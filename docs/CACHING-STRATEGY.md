# Caching Strategy for Pebblous Blog

## 🎯 목표

GitHub Pages는 서버 설정 (`.htaccess`, `expires` 헤더)을 직접 제어할 수 없습니다.
이 문서는 **GitHub Pages의 제약 하에서 최적의 캐싱 전략**을 제시합니다.

---

## 📋 문제 상황

**SEO 도구 피드백**:
> "The server is not using 'expires' headers for the images."

**GitHub Pages 제약**:
- ❌ `.htaccess` 파일 사용 불가
- ❌ Apache/NGINX 서버 설정 불가
- ❌ HTTP 헤더 직접 제어 불가

---

## ✅ 해결 방법

### Option 1: CDN 사용 (Cloudflare) ⭐ **추천**

**장점**:
- ✅ 서버 측 캐싱 (진짜 Expires 헤더)
- ✅ 전역 CDN (속도 향상)
- ✅ 자동 이미지 최적화
- ✅ HTTPS 강제
- ✅ DDoS 방어
- ✅ **무료 플랜 가능**

**설정 방법**:
1. [Cloudflare](https://www.cloudflare.com/) 가입 (무료)
2. `blog.pebblous.ai` 도메인 추가
3. DNS 네임서버 변경
4. 캐싱 규칙 설정:
   ```
   Cache Rules:
   - *.png, *.jpg, *.jpeg, *.svg, *.gif, *.webp
     → Browser TTL: 1 year
     → Edge TTL: 1 year

   - *.css, *.js
     → Browser TTL: 1 month
     → Edge TTL: 1 month

   - *.html
     → Browser TTL: 1 hour
     → Edge TTL: 1 hour
   ```

**예상 효과**:
- 이미지 로딩 속도 30-50% 향상
- 대역폭 사용량 50-70% 감소
- SEO 점수 향상

---

### Option 2: Service Worker (클라이언트 캐싱) ✅ **현재 구현**

**장점**:
- ✅ 코드로 구현 (서버 설정 불필요)
- ✅ GitHub Pages와 호환
- ✅ PWA 기능 추가 가능
- ✅ 오프라인 지원

**단점**:
- ⚠️ 첫 방문에는 효과 없음
- ⚠️ SEO 도구가 인식 못할 수 있음
- ⚠️ 브라우저별 동작 차이

**구현 파일**:
- `/sw.js` - Service Worker 스크립트
- `/index.html` - Service Worker 등록 코드

**캐싱 전략**:
```javascript
// 이미지: Cache First (1년 캐싱)
images → Cache → Network

// HTML: Network First (최신 콘텐츠 우선)
html → Network → Cache (fallback)

// CSS/JS: Cache First (1개월 캐싱)
styles, scripts → Cache → Network
```

**검증 방법**:
```bash
# 1. 로컬 서버 실행
python3 -m http.server 8000

# 2. 브라우저에서 열기
open http://localhost:8000

# 3. DevTools → Application → Service Workers
# "✅ Service Worker registered" 확인

# 4. DevTools → Application → Cache Storage
# "pebblous-blog-v1" 확인

# 5. Network 탭에서 리로드
# "(from ServiceWorker)" 표시 확인
```

---

### Option 3: Meta 태그 힌트 (보조적)

**한계**:
- ⚠️ 권고사항일 뿐, 강제력 없음
- ⚠️ SEO 도구가 인식 안 할 수 있음

**구현**:
```html
<!-- 각 HTML 파일 <head>에 추가 -->
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

---

## 📊 전략 비교

| 방법 | 서버 측 캐싱 | SEO 인식 | 구현 난이도 | 비용 | 효과 |
|-----|------------|---------|-----------|------|------|
| **Cloudflare CDN** | ✅ | ✅ | 중간 | 무료 | ⭐⭐⭐⭐⭐ |
| **Service Worker** | ❌ | ⚠️ | 낮음 | 무료 | ⭐⭐⭐ |
| **Meta 태그** | ❌ | ❌ | 매우 낮음 | 무료 | ⭐ |

---

## 🚀 권장 로드맵

### Phase 1: 즉시 적용 가능 (현재)
- ✅ Service Worker 구현 완료
- ✅ 클라이언트 캐싱 활성화

### Phase 2: CDN 설정 (2-3일 소요)
1. Cloudflare 계정 생성
2. `blog.pebblous.ai` DNS 마이그레이션
3. 캐싱 규칙 설정
4. SSL/TLS 설정 확인

### Phase 3: 모니터링 (1주일)
- Google PageSpeed Insights 재측정
- Lighthouse 점수 확인
- 실제 사용자 로딩 속도 분석

---

## 📈 예상 개선 효과

### Before (현재)
- 이미지 로딩: 매번 서버 요청
- 대역폭: 100% 사용
- SEO 경고: "expires 헤더 없음"

### After (Service Worker)
- 이미지 로딩: 2회차부터 캐시 사용
- 대역폭: 30-50% 절감 (재방문자)
- SEO 경고: 여전히 존재 (서버 측 아님)

### After (Cloudflare)
- 이미지 로딩: 1회차부터 CDN 캐시
- 대역폭: 70-90% 절감 (전체)
- SEO 경고: **해결** ✅

---

## 🔍 참고 자료

### Service Worker
- [MDN: Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Google: Service Worker Caching](https://web.dev/service-worker-caching-and-http-caching/)

### Cloudflare
- [Cloudflare: Browser Cache TTL](https://developers.cloudflare.com/cache/how-to/edge-browser-cache-ttl/)
- [Cloudflare: Page Rules](https://developers.cloudflare.com/rules/page-rules/)

### GitHub Pages
- [GitHub Pages Limitations](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#usage-limits)

---

## 💡 FAQ

### Q1. Service Worker만으로 충분한가요?
**A**: 재방문자에게는 효과적이지만, SEO 도구는 서버 측 헤더를 확인하므로 경고가 남습니다.
**권장**: Cloudflare 같은 CDN 추가 사용.

### Q2. Cloudflare 설정이 어렵나요?
**A**: 무료 플랜으로 15분이면 설정 가능합니다. DNS 전파는 24-48시간 소요.

### Q3. Service Worker가 모든 브라우저에서 작동하나요?
**A**: Chrome, Firefox, Safari (iOS 11.3+)에서 지원. IE11은 미지원.

### Q4. 캐시 무효화는 어떻게 하나요?
**A**: Service Worker는 버전 업데이트로 관리 (`CACHE_NAME` 변경).
Cloudflare는 대시보드에서 "Purge Cache" 버튼 클릭.

---

**최종 업데이트**: 2025-11-10
**작성**: Pebblous Data Communication Team
