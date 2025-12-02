#!/bin/bash
#
# AADS QA Dataset Post Auto-Generator
# ====================================
#
# 사용법:
#   ./scripts/auto-generate-qa-post.sh regulation-governance
#
# 전제 조건:
#   - /tmp/qa-metadata-{domain}.json 파일 존재
#   - Python 3.x 설치
#
# 작동 순서:
#   Phase 2: HTML 생성 (generate-qa-post.py)
#   Phase 3: FAQ 생성 (현재는 수동, 향후 자동화)
#   Phase 4: articles.json 업데이트 (update-articles-json.py)
#

set -e  # 오류 발생 시 중단

# 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 도메인 인자 확인
if [ $# -eq 0 ]; then
    echo -e "${RED}❌ 사용법: ./scripts/auto-generate-qa-post.sh {domain_en}${NC}"
    echo ""
    echo "예시:"
    echo "  ./scripts/auto-generate-qa-post.sh regulation-governance"
    echo "  ./scripts/auto-generate-qa-post.sh manufacturing"
    echo "  ./scripts/auto-generate-qa-post.sh safety"
    exit 1
fi

DOMAIN_EN=$1
JSON_PATH="/tmp/qa-metadata-${DOMAIN_EN}.json"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   AADS QA Dataset Post Auto-Generator${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# JSON 파일 존재 확인
if [ ! -f "$JSON_PATH" ]; then
    echo -e "${RED}❌ JSON 파일을 찾을 수 없습니다: ${JSON_PATH}${NC}"
    echo ""
    echo "Phase 1을 먼저 실행하여 JSON 메타데이터를 생성하세요."
    exit 1
fi

echo -e "${GREEN}✅ JSON 파일 발견: ${JSON_PATH}${NC}"
echo ""

# Phase 2: HTML 생성
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}   Phase 2: HTML 생성 중...${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

python3 "$SCRIPT_DIR/generate-qa-post.py" "$JSON_PATH"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ HTML 생성 실패${NC}"
    exit 1
fi

echo ""

# Phase 3: FAQ 생성 (현재는 수동)
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}   Phase 3: FAQ 생성 (현재는 수동)${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}ℹ️  FAQ는 수동으로 HTML 파일에 추가해주세요.${NC}"
echo -e "${BLUE}   향후 버전에서 자동 생성 기능이 추가될 예정입니다.${NC}"
echo ""

# Phase 4: articles.json 업데이트
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}   Phase 4: articles.json 업데이트 중...${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

python3 "$SCRIPT_DIR/update-articles-json.py" "$JSON_PATH"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ articles.json 업데이트 실패${NC}"
    exit 1
fi

echo ""

# 완료 메시지
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   🎉 자동 생성 완료!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}다음 단계:${NC}"
echo -e "  1. 브라우저에서 HTML 확인"
echo -e "     ${YELLOW}http://localhost:8000/project/AADS/${DOMAIN_EN}-qa-dataset.html${NC}"
echo ""
echo -e "  2. FAQ 섹션 수동 추가 (현재)"
echo ""
echo -e "  3. Git commit & push"
echo -e "     ${YELLOW}git add project/AADS/${DOMAIN_EN}-qa-dataset.html articles.json${NC}"
echo -e "     ${YELLOW}git commit -m \"Add ${DOMAIN_EN} QA dataset post\"${NC}"
echo -e "     ${YELLOW}git push origin main${NC}"
echo ""
