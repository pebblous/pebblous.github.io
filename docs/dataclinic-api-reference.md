# DataClinic API Reference

> **목적**: dc-story-produce 파이프라인 및 외부 에이전트가 DataClinic API를 독립적으로 사용할 수 있도록 정리한 레퍼런스.
> **최종 업데이트**: 2026-04-28
> **예시 데이터**: `.claude/skills/dc-collect/examples/collected-194.json` (Report #194)

---

## 1. API 기본 정보

| 항목 | 값 |
|------|-----|
| Base URL | `https://api.dataclinic.ai` |
| CDN URL | `https://cdn.dataclinic.ai` |
| 인증 | API Key (환경변수 `DATACLINIC_API_KEY`) |
| 응답 형식 | JSON |

---

## 2. REST API 엔드포인트

### 2.1 리포트 기본 정보

```
GET /report/detail/level1-contents?id={reportId}
```

**반환**: 데이터셋 이름, 클래스 수(`totalClassCount`), 이미지 수, L1 진단 결과, 클래스별 평균 이미지 경로(`classwiseMeanImagePaths`)

**단일 클래스 판별**: `totalClassCount == 0` 또는 `classwiseMeanImagePaths == null` → 단일 클래스 워크플로우

### 2.2 클래스별 차트 이미지

```
GET /report/classwise/chart/image?diagnosis_report_id={reportId}&diagnosis_report_chart_id={chartId}
```

**chartId 매핑**:

| chartId | 차트 유형 |
|---------|----------|
| 3 | Pixel Histogram (L1) |
| 6 | Class Representative Images |
| 13 | Density Histogram (L2) |
| 15 | Box Chart (L2) |
| 23 | Density Histogram (L3) |
| 24 | Box Chart (L3) |

### 2.3 레벨별 진단 결과

```
GET /report/detail/level2-contents?id={reportId}
GET /report/detail/level3-contents?id={reportId}
```

**반환**: 레벨별 점수, 등급, 진단 텍스트, 분포 설명

---

## 3. CDN 이미지 URL 패턴

### 3.1 정적 이미지 (항상 존재)

```
# 콜라주
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-1/english/collage.png

# 전체 평균 이미지
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-1/english/overall_average_image.png

# L2 PCA 차트
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-2/english/overall_pca_chart.png

# L2 밀도 히트맵
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-2/english/overall_density_chart.png

# L3 PCA 차트
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-3.2/english/overall_pca_chart.png

# L3 밀도 히트맵
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-3.2/english/overall_density_chart.png
```

### 3.2 클래스별 이미지 (다중 클래스만)

```
# 클래스별 평균 이미지
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-1/english/meanimage/{className}.png

# 클래스별 L2 밀도 차트
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-2/english/classwise/{className}_density.png

# 클래스별 L3 밀도 차트
cdn.dataclinic.ai/diagnosis_results/result_v.1.4.0/{datasetId}/level-3.2/english/classwise/{className}_density.png
```

### 3.3 대표 이미지 (원본 데이터)

```
# 클래스별 대표 이미지
cdn.dataclinic.ai/datasets/{datasetId}/train/{className}/{imageFileName}
```

**주의**: `className`에 한글·공백·특수문자가 포함될 수 있음 (URL 인코딩 필요)

---

## 4. JS 렌더링 차트 (Playwright 필요)

다음 차트는 CDN에 정적 이미지가 없고, 브라우저에서 JS로 렌더링됨:

| 차트 | 렌더링 방법 |
|------|------------|
| Pixel Histogram (L1) | `dataclinic.ai/ko/report/{reportId}` 접속 → chartId=3 캡처 |
| Density Histogram (L2/L3) | `dataclinic.ai/ko/report/{reportId}` 접속 → chartId=13,23 캡처 |
| Box Chart (L2/L3) | `dataclinic.ai/ko/report/{reportId}` 접속 → chartId=15,24 캡처 |

**대안**: Playwright 없으면 CDN 정적 이미지(PCA/density heatmap)만 사용

---

## 5. Pebbloscope 스냅샷

```
# 스냅샷 이미지
https://pebbloscope-prod-public-bucket.s3.ap-northeast-2.amazonaws.com/snapshots/{snapshotId}/thumbnail.png

# 인터랙티브 뷰어
https://pebbloscope.ai/snapshots/{snapshotId}
```

**snapshotId 확인**: DataClinic 리포트 페이지에서 수동 확인 또는 JH에게 요청

---

## 6. collected.json 구조

예시 파일: `.claude/skills/dc-collect/examples/collected-194.json`

```json
{
  "reportId": 194,
  "datasetId": 589,
  "datasetName": "한국 전통 수묵 채색화 제작 데이터",
  "datasetNameEn": "Korean Traditional Ink-Color Painting Production Data",
  "totalScore": 57,
  "totalGrade": "나쁨",
  "totalClassCount": 74,
  "totalImageCount": 3995,
  "cdnBase": "https://cdn.dataclinic.ai",
  "reportUrl": "https://dataclinic.ai/ko/report/194",
  "resultVersion": "result_v.1.4.0",
  "lensVersion": "1.6",
  
  "grades": {
    "L1_integrity": "Bad", "L1_missingValue": "Good",
    "L1_classBalance": "Medium", "L1_statistics": "Bad",
    "L2_dataLens": "No issues", "L2_geometry": "Good", "L2_distribution": "Medium",
    "L3_dataLens": "No issues", "L3_geometry": "Medium", "L3_distribution": "Bad"
  },
  
  "level1": {
    "imageSize": {...}, "imageChannel": {...}, "labelIntegrity": {...},
    "missingValueCheck": {...}, "classAverage": 48.31, "classStdDev": 17.15,
    "classwiseImageCounts": {...}, "collageUrl": "https://cdn.dataclinic.ai/...",
    "overallMeanImageUrl": "https://cdn.dataclinic.ai/...",
    "classwiseMeanImages": { "className": "url", ... }
  },
  
  "level2": {
    "neuralNetwork": "Wolfram", "observedDimensions": 1280,
    "pcaImageUrl": "https://cdn.dataclinic.ai/.../level-2/english/overall_pca_chart.png",
    "overallDensityChartUrl": "https://cdn.dataclinic.ai/.../level-2/english/overall_density_chart.png",
    "classwiseDensityUrls": { "className": "url", ... },
    "outliers": { "highDensity": [...], "lowDensity": [...] },
    "similarity": { "nearest": [...], "farthest": [...] }
  },
  
  "level3": {
    "observedDimensions": 48, "modelDescription": "...",
    "pcaImageUrl": "https://cdn.dataclinic.ai/.../level-3.2/english/overall_pca_chart.png",
    "overallDensityChartUrl": "https://cdn.dataclinic.ai/.../level-3.2/english/overall_density_chart.png",
    "classwiseDensityUrls": { "className": "url", ... },
    "outliers": { "highDensity": [...], "lowDensity": [...] },
    "similarity": { "nearest": [...], "farthest": [...] }
  },
  
  "classList": [
    {
      "className": "자연물_큰 육식 동물_호랑이",
      "imageCount": 50,
      "representativeImagePath": "datasets/589/train/자연물_.../image.jpg",
      "representativeImageUrl": "https://cdn.dataclinic.ai/datasets/589/train/...",
      "meanImagePath": "diagnosis_results/.../meanimage/자연물_큰 육식 동물_호랑이.png",
      "meanImageUrl": "https://cdn.dataclinic.ai/.../meanimage/...",
      "category": "자연물"
    }
  ],
  
  "pebbloscope": {
    "available": false,
    "snapshotIds": [],
    "note": "Not available for this report"
  },
  
  "collectedAt": "2026-04-17T00:00:00Z",
  "existingStoryPath": "story/dataclinic-report-194-korean-ink-painting-story-pb/ko/index.html"
}
```

> 전체 데이터(110KB)는 `.claude/skills/dc-collect/examples/collected-194.json`에서 확인

---

## 7. 사용 컨텍스트

| 스킬 | API 사용 |
|------|----------|
| `dc-collect` | 전체 API 호출하여 collected.json 생성 |
| `dc-analyze` | collected.json의 이미지를 다운로드하여 시각 분석 |
| `dc-write-ko` | collected.json + analysis.json → HTML 작성 |
| `dc-story-produce` | 위 스킬들을 순차 오케스트레이션 |

---

## 8. 주의사항

- `datasetId`와 `reportId`는 다름 — reportId로 API 호출, datasetId는 CDN 경로에 사용
- L3 경로는 `level-3.2` (버전 표기 주의)
- 한글 클래스명은 URL 인코딩 필요
- CDN 이미지가 없는 경우 `onerror="this.style.display='none'"` 처리
- JS 차트는 Playwright 없이 접근 불가 — CDN 정적 이미지로 대체 가능
