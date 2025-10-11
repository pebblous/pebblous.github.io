// =================================================================
// 페이지 설정 컨트롤 패널 (이 파일만 수정하여 사용하세요)
// =================================================================
const siteConfig = {
    // ... (기존 1, 2, 3번 설정은 동일) ...
    siteURL: "https://pebblous.github.io", 
    logoImage: "https://www.pebblous.ai/_next/static/media/Group.cdc35593.svg", 
    pagePath: "/ko/investor-analysis/", 
    pageTitle: "페블러스(Pebblous) 최적 글로벌 투자사 분석", 
    seoDescription: "페블러스(Pebblous)의 Series A 라운드에 가장 적합한 글로벌 투자사 Top 10을 분석합니다...",
    seoKeywords: ["Pebblous", "페블러스", "투자사..."], 
    socialImage: "https://pebblous.github.io/event/2025/InvestKoreaSummit/image/PBLS-IKS-2025-01.001.png",

    // 4. 페이지 스타일 및 메타 정보 (필요시 수정)
    // -----------------------------------------------------------------
    defaultTheme: "dark", // 'dark', 'light', 'beige' 중 기본으로 보여줄 테마 설정
    
    themes: {
        dark: {
            background: "#111827",      // 전체 페이지 배경
            cardBackground: "#1F2937", // 카드 배경
            footerBackground: "#000000", // 푸터 배경
            textColor: "#9CA3AF",       // 기본 텍스트
            headingColor: "#FFFFFF",     // 제목 텍스트
            accentColor: "#F86825",      // 포인트 컬러
            borderColor: "#374151"       // 테두리 색
        },
        light: {
            background: "#F9FAFB",
            cardBackground: "#FFFFFF",
            footerBackground: "#E5E7EB",
            textColor: "#4B5563",
            headingColor: "#111827",
            accentColor: "#F86825",
            borderColor: "#E5E7EB"
        },
        beige: {
            background: "#FFFBF1",
            cardBackground: "#FFFFFF",
            footerBackground: "#FFF3D9",
            textColor: "#574523",
            headingColor: "#3A2E1C",
            accentColor: "#F86825",
            borderColor: "#F3E9D3"
        }
    },

    publishDate: "2025년 10월 11일", 
    publisher: "페블러스 경영지원실" 
};


