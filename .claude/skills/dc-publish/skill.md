---
name: dc-publish
description: 블로그 스토리 범용 퍼블리시 스킬. KO+EN OG 이미지, articles.json 등록(스키마 검증), sitemap, changelog, Tailwind 빌드, git commit+push. dc-story-produce 파이프라인의 Stage 5. DataClinic 외 커스텀 스토리에도 동일하게 사용.
argument-hint: "[slug]"
---

# dc-publish

블로그 스토리 범용 퍼블리시 스킬. DataClinic 스토리뿐 아니라 커스텀 블로그 포스트에도 사용 가능.

`blog-publish`(레포)와의 역할 구분:
- `dc-publish`: DataClinic 스토리 특화 + 범용 fallback
- `blog-publish`: 범용 블로그 전체 파이프라인 (SEO 체크 포함)

## 파이프라인 순서 (엄수)

```
Step 0: KO + EN HTML 존재 확인
Step 1: OG 이미지 생성 (KO, EN --force)
Step 2: articles.json 검증 + 등록
Step 3: sitemap 업데이트
Step 4: changelog 기록
Step 5: Tailwind CSS 빌드
Step 6: git commit + push
```

## 사용 시점

- `dc-story` Stage 5 (DataClinic 스토리 발행)
- 커스텀 스토리 발행 시 `blog-publish` 대신 사용 가능

## 참고

- `tools/validate-articles.py` 실행으로 articles.json 검증 필수
- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
