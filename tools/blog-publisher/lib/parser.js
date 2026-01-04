/**
 * 마크다운 파서
 * 마크다운 파일을 구조화된 데이터로 변환
 */

const matter = require('gray-matter');

/**
 * 마크다운 파일 파싱
 * @param {string} markdown - 마크다운 텍스트
 * @returns {Object} 파싱된 결과
 */
function parseMarkdown(markdown) {
    // Front matter 파싱 (YAML 헤더)
    const { data: frontMatter, content } = matter(markdown);

    // 제목 추출 (첫 번째 # 또는 front matter의 title)
    let title = frontMatter.title;
    if (!title) {
        const titleMatch = content.match(/^#\s+(.+)$/m);
        title = titleMatch ? titleMatch[1].trim() : '제목 없음';
    }

    // 섹션 파싱 (## 기준)
    const sections = parseSections(content);

    // 메타 정보 추출
    const meta = {
        title,
        subtitle: frontMatter.subtitle || '',
        description: frontMatter.description || extractDescription(content),
        author: frontMatter.author || 'Pebblous',
        date: frontMatter.date || new Date().toISOString().split('T')[0],
        tags: frontMatter.tags || [],
        category: frontMatter.category || 'Tech',
        image: frontMatter.image || '',
        password: frontMatter.password || null
    };

    return {
        title,
        meta,
        frontMatter,
        sections,
        rawContent: content
    };
}

/**
 * ## 기준으로 섹션 분리
 */
function parseSections(content) {
    const sections = [];
    const lines = content.split('\n');

    let currentSection = null;
    let currentContent = [];

    for (const line of lines) {
        const h2Match = line.match(/^##\s+(.+)$/);

        if (h2Match) {
            // 이전 섹션 저장
            if (currentSection) {
                sections.push({
                    title: currentSection,
                    content: currentContent.join('\n').trim(),
                    subsections: parseSubsections(currentContent.join('\n'))
                });
            }

            currentSection = h2Match[1].trim();
            currentContent = [];
        } else if (currentSection) {
            currentContent.push(line);
        }
    }

    // 마지막 섹션 저장
    if (currentSection) {
        sections.push({
            title: currentSection,
            content: currentContent.join('\n').trim(),
            subsections: parseSubsections(currentContent.join('\n'))
        });
    }

    return sections;
}

/**
 * ### 기준으로 서브섹션 분리
 */
function parseSubsections(content) {
    const subsections = [];
    const regex = /###\s+(.+)/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        subsections.push(match[1].trim());
    }

    return subsections;
}

/**
 * 설명 추출 (첫 번째 문단)
 */
function extractDescription(content) {
    // # 제목 이후 첫 번째 일반 문단 찾기
    const lines = content.split('\n');
    let foundTitle = false;
    let description = [];

    for (const line of lines) {
        if (line.startsWith('#')) {
            foundTitle = true;
            continue;
        }

        if (foundTitle && line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('*')) {
            description.push(line.trim());
            if (description.join(' ').length > 150) break;
        } else if (description.length > 0 && !line.trim()) {
            break;
        }
    }

    return description.join(' ').substring(0, 200);
}

/**
 * 마크다운에서 리스트 아이템 추출
 */
function extractListItems(content) {
    const items = [];
    const regex = /^[-*]\s+(.+)$/gm;
    let match;

    while ((match = regex.exec(content)) !== null) {
        items.push(match[1].trim());
    }

    return items;
}

/**
 * 마크다운 테이블 파싱
 */
function parseTable(content) {
    const lines = content.split('\n').filter(l => l.includes('|'));
    if (lines.length < 2) return null;

    const headers = lines[0].split('|').filter(h => h.trim()).map(h => h.trim());
    const rows = lines.slice(2).map(row =>
        row.split('|').filter(c => c.trim()).map(c => c.trim())
    );

    return { headers, rows };
}

module.exports = {
    parseMarkdown,
    parseSections,
    parseSubsections,
    extractDescription,
    extractListItems,
    parseTable
};
