# Pebblous JavaScript Modules

`/scripts/common-utils.js`에 포함된 재사용 가능한 JavaScript 모듈 가이드.

## 모듈 목록

| 모듈 | 용도 | 사용 파일 수 |
|------|------|-------------|
| `PebblousChart` | Chart.js 래퍼 | 16+ |
| `PebblousTabs` | 탭 컴포넌트 | 12+ |
| `PebblousTheme` | 테마 전환 | 전체 |
| `PebblousComponents` | Header/Footer 로드 | 전체 |
| `PebblousUI` | ScrollToTop, TOC 등 | 전체 |
| `PebblousPage` | 페이지 초기화 통합 | 전체 |
| `PebblousComments` | giscus 댓글 | 전체 |
| `PebblousRelatedPosts` | 관련글 추천 | 전체 |
| `PebblousBreadcrumbs` | 브레드크럼 | 전체 |
| `PebblousSchema` | SEO JSON-LD | 전체 |

---

## PebblousChart

Chart.js를 간편하게 사용할 수 있는 래퍼 모듈.

### 중요: DOM 로드 후 초기화 필수

차트는 반드시 **DOMContentLoaded 이벤트 이후**에 초기화해야 합니다.

```javascript
// 올바른 사용법
document.addEventListener('DOMContentLoaded', function() {
    PebblousChart.bar('myChart', { ... });
});

// 또는 함수로 래핑
function initCharts() {
    PebblousChart.bar('myChart', { ... });
}

document.addEventListener('DOMContentLoaded', function() {
    initCharts();
});
```

### 지원 차트 유형

- `bar()` - 막대 차트 (가로/세로)
- `stackedBar()` - 스택 막대 차트
- `doughnut()` - 도넛 차트
- `pie()` - 파이 차트
- `bubble()` - 버블 차트
- `line()` - 라인 차트

### 막대 차트 (Bar Chart)

```javascript
// 단순 모드 - 단일 데이터셋
PebblousChart.bar('commitChart', {
    labels: ['09-21', '09-28', '10-05', '10-12'],
    data: [7, 10, 22, 29],
    colors: 'auto'  // 값 크기에 따라 자동 색상
});

// 수동 색상 지정
PebblousChart.bar('myChart', {
    labels: ['A', 'B', 'C'],
    data: [10, 20, 30],
    colors: ['#F86825', '#14B8A6', '#A855F7']
});

// 가로 막대 차트
PebblousChart.bar('horizontalChart', {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    data: [45, 32, 28],
    horizontal: true,
    wrapLabels: true,  // 긴 라벨 줄바꿈
    wrapLength: 20     // 줄바꿈 기준 길이
});

// 다중 데이터셋 모드
PebblousChart.bar('multiChart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        { label: '2024', data: [10, 20, 30, 40], color: '#F86825' },
        { label: '2025', data: [15, 25, 35, 45], color: '#14B8A6' }
    ],
    stacked: true  // 스택 모드
});
```

#### `colors: 'auto'` 동작

값의 최대값 대비 비율에 따라 자동 색상 지정:
- 80%+ → Orange (#F86825)
- 50%+ → Teal (#14B8A6)
- 30%+ → Blue (#3B82F6)
- 그 외 → Slate (#64748B)

### 도넛/파이 차트 (Doughnut/Pie)

```javascript
PebblousChart.doughnut('domainChart', {
    labels: ['Tech', 'Art', 'Business', 'Story'],
    data: [24, 22, 8, 8],
    colors: ['#2563EB', '#10B981', '#F59E0B', '#7C3AED'],
    wrapLabels: true,
    legendPosition: 'bottom'  // 'top', 'bottom', 'left', 'right'
});

// 파이 차트 (도넛의 cutout: 0% 버전)
PebblousChart.pie('pieChart', {
    labels: ['A', 'B', 'C'],
    data: [30, 50, 20]
});
```

### 버블 차트 (Bubble)

```javascript
PebblousChart.bubble('keywordChart', {
    data: [
        { x: 1.2, y: 9, r: 25, label: 'LLM' },
        { x: 3.5, y: 8, r: 20, label: 'AI' },
        { x: 5.2, y: 10, r: 30, label: 'Data' }
    ],
    xTitle: 'X축 제목',
    yTitle: 'Y축 제목',
    xMin: 0, xMax: 10,
    yMin: 0, yMax: 12,
    colorFn: (point) => {
        // x 값에 따라 색상 결정
        if (point.x < 3) return 'rgba(37, 99, 235, 0.7)';
        if (point.x < 5) return 'rgba(16, 185, 129, 0.7)';
        return 'rgba(245, 158, 11, 0.7)';
    }
});
```

### 라인 차트 (Line)

```javascript
PebblousChart.line('trendChart', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    data: [10, 25, 15, 30],
    color: '#14B8A6',
    fill: true,      // 영역 채우기
    tension: 0.3,    // 곡선 부드러움 (0 = 직선)
    showPoints: true
});
```

### 브랜드 컬러 팔레트

```javascript
PebblousChart.colors = {
    orange: '#F86825',  // Primary
    teal: '#14B8A6',    // Secondary
    purple: '#A855F7',
    blue: '#3B82F6',
    emerald: '#10B981',
    amber: '#F59E0B',
    slate: '#64748B',
    violet: '#7C3AED'
};

// 기본 팔레트 배열 (datasets에서 자동 사용)
PebblousChart.palette = ['#F86825', '#14B8A6', '#A855F7', '#3B82F6', '#10B981', '#F59E0B', '#7C3AED', '#64748B'];
```

---

## PebblousTabs

탭 UI 컴포넌트.

### HTML 구조

```html
<div data-tabs>
    <div class="flex gap-2 mb-4">
        <button data-tab-button="tab1" class="active">Tab 1</button>
        <button data-tab-button="tab2">Tab 2</button>
    </div>
    <div data-tab-content="tab1">Content 1</div>
    <div data-tab-content="tab2" class="hidden">Content 2</div>
</div>
```

### 초기화

```javascript
document.addEventListener('DOMContentLoaded', function() {
    PebblousTabs.init();
});

// 또는 옵션과 함께
PebblousTabs.init({
    containerSelector: '[data-tabs]',
    buttonSelector: '[data-tab-button]',
    contentSelector: '[data-tab-content]',
    activeClass: 'active',
    hiddenClass: 'hidden',
    onChange: (tabId, button, content) => {
        console.log('Tab changed:', tabId);
    }
});
```

### 레거시 패턴 지원

기존 `.tab-button` / `.tab-content` 클래스도 자동 지원:

```html
<div data-tabs>
    <button class="tab-button" data-target="panel1">Tab 1</button>
    <button class="tab-button" data-target="panel2">Tab 2</button>
    <div id="panel1" class="tab-content">Content 1</div>
    <div id="panel2" class="tab-content hidden">Content 2</div>
</div>
```

### 프로그래매틱 탭 전환

```javascript
PebblousTabs.switchTo('tab2');
```

---

## 전체 페이지 초기화 예시

```html
<!-- Scripts -->
<script src="/scripts/common-utils.js"></script>

<script>
    // 차트 초기화 함수
    function initCharts() {
        PebblousChart.bar('myChart', {
            labels: ['A', 'B', 'C'],
            data: [10, 20, 30],
            colors: 'auto'
        });
    }

    // DOM 로드 후 초기화
    document.addEventListener('DOMContentLoaded', async function() {
        // 차트 초기화
        initCharts();

        // 탭 초기화
        PebblousTabs.init();

        // 페이지 설정
        const config = {
            mainTitle: "페이지 제목",
            subtitle: "부제목",
            category: "tech",
            tags: ["tag1", "tag2"]
        };

        // PebblousPage.init()이 Header, Footer, Theme, 댓글, 관련글 등 모두 초기화
        await PebblousPage.init(config);
    });
</script>
```

---

## 코드 절감 효과

| Before | After | 절감 |
|--------|-------|------|
| 65줄 (인라인 차트 코드) | 10줄 | 85% |
| splitLabel 함수 직접 구현 | 모듈 내장 | 삭제 |
| Chart.defaults 직접 설정 | 모듈 내장 | 삭제 |
| commonPlugins 객체 구현 | 모듈 내장 | 삭제 |

---

## 버전 기록

- **2025-01-04**: PebblousChart, PebblousTabs 모듈 추가
- **2025-12-xx**: 기존 모듈들 (Theme, Components, UI 등)
