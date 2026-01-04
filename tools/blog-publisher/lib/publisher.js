/**
 * 퍼블리셔
 * HTML 파일 저장, articles.json 등록, git commit/push
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_ROOT = path.resolve(__dirname, '../../..');

/**
 * 기사 발행
 * @param {Object} options - 발행 옵션
 * @returns {Object} 발행 결과
 */
async function publishArticle(options) {
    const { html, outputPath, parsed, config, skipGit = false } = options;

    // 1. HTML 파일 저장
    const fullPath = path.resolve(PROJECT_ROOT, outputPath);
    const dir = path.dirname(fullPath);

    // 디렉토리 생성
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 디렉토리 생성: ${dir}`);
    }

    // 파일 저장
    fs.writeFileSync(fullPath, html, 'utf-8');
    console.log(`📄 파일 저장: ${fullPath}`);

    // 2. articles.json 업데이트
    const articlesPath = path.resolve(PROJECT_ROOT, 'articles.json');
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

    // 새 기사 엔트리 생성
    const newArticle = createArticleEntry(outputPath, parsed, config);

    // 중복 체크 (같은 경로가 있으면 업데이트)
    const existingIndex = articles.findIndex(a => a.path === newArticle.path);
    if (existingIndex >= 0) {
        articles[existingIndex] = newArticle;
        console.log(`📝 기존 기사 업데이트: ${newArticle.path}`);
    } else {
        // 새 기사는 맨 앞에 추가
        articles.unshift(newArticle);
        console.log(`➕ 새 기사 추가: ${newArticle.path}`);
    }

    // articles.json 저장
    fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
    console.log(`📋 articles.json 업데이트 완료`);

    // 3. Git commit & push
    let committed = false;
    if (!skipGit) {
        committed = await gitCommitAndPush(outputPath, parsed.title);
    }

    return {
        filePath: fullPath,
        relativePath: outputPath,
        articleEntry: newArticle,
        committed
    };
}

/**
 * articles.json 엔트리 생성
 */
function createArticleEntry(outputPath, parsed, config) {
    const today = new Date().toISOString().split('T')[0];
    const tags = Array.isArray(config.tags) ? config.tags : [];

    // 카테고리에 따른 분류
    const categoryMap = {
        'Tech': 'tech',
        'Business': 'business',
        'Story': 'story',
        'Art': 'art'
    };

    return {
        path: outputPath,
        title: parsed.title,
        subtitle: parsed.meta.subtitle || '',
        description: parsed.meta.description || '',
        category: categoryMap[config.category] || 'tech',
        tags: tags,
        date: today,
        image: parsed.meta.image || '',
        cardImage: parsed.meta.image || '',
        featured: false
    };
}

/**
 * Git commit & push
 */
async function gitCommitAndPush(outputPath, title) {
    try {
        const cwd = PROJECT_ROOT;

        // git add
        execSync(`git add "${outputPath}" articles.json`, { cwd, stdio: 'pipe' });
        console.log(`📤 Git: 파일 스테이징 완료`);

        // git commit
        const commitMessage = `Add blog: ${title}

🤖 Generated with Pebblous Blog Publisher

Co-Authored-By: Claude <noreply@anthropic.com>`;

        execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { cwd, stdio: 'pipe' });
        console.log(`📤 Git: 커밋 완료`);

        // git push
        try {
            execSync('git push', { cwd, stdio: 'pipe' });
            console.log(`📤 Git: 푸시 완료`);
            return true;
        } catch (pushError) {
            console.log(`⚠️  Git push 실패 - 수동으로 푸시 필요`);
            return false;
        }

    } catch (error) {
        console.error(`⚠️  Git 작업 실패: ${error.message}`);
        return false;
    }
}

/**
 * 기존 기사 목록 조회
 */
function getExistingArticles() {
    const articlesPath = path.resolve(PROJECT_ROOT, 'articles.json');
    if (!fs.existsSync(articlesPath)) {
        return [];
    }
    return JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
}

/**
 * 기사 삭제
 */
function removeArticle(articlePath) {
    const articlesPath = path.resolve(PROJECT_ROOT, 'articles.json');
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

    const filtered = articles.filter(a => a.path !== articlePath);

    if (filtered.length < articles.length) {
        fs.writeFileSync(articlesPath, JSON.stringify(filtered, null, 2), 'utf-8');
        console.log(`🗑️  기사 제거: ${articlePath}`);
        return true;
    }

    return false;
}

module.exports = {
    publishArticle,
    createArticleEntry,
    gitCommitAndPush,
    getExistingArticles,
    removeArticle
};
