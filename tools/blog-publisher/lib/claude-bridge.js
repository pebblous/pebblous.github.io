/**
 * Claude Code CLI 브릿지
 * Claude Code의 월정액 구독을 활용하여 HTML 생성
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROMPTS_DIR = path.resolve(__dirname, '../prompts');

/**
 * Claude Code CLI가 설치되어 있는지 확인
 */
function checkClaudeCLI() {
    try {
        execSync('which claude', { stdio: 'pipe' });
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * 시스템 프롬프트 로드
 */
function loadSystemPrompt() {
    const promptPath = path.join(PROMPTS_DIR, 'blog-generator-system.md');
    if (!fs.existsSync(promptPath)) {
        throw new Error(`시스템 프롬프트 파일을 찾을 수 없습니다: ${promptPath}`);
    }
    return fs.readFileSync(promptPath, 'utf-8');
}

/**
 * Claude Code CLI를 사용하여 HTML 생성
 * @param {string} markdown - 소스 마크다운
 * @param {Object} config - 설정 옵션
 * @returns {Promise<string>} 생성된 HTML
 */
async function generateWithClaude(markdown, config) {
    if (!checkClaudeCLI()) {
        throw new Error(
            'Claude Code CLI가 설치되어 있지 않습니다.\n' +
            '설치: npm install -g @anthropic-ai/claude-code\n' +
            '또는: https://claude.ai/claude-code 참조'
        );
    }

    const systemPrompt = loadSystemPrompt();

    const userPrompt = `
## 입력 정보

### 소스 마크다운
\`\`\`markdown
${markdown}
\`\`\`

### 설정
- 출력 경로: ${config.outputPath || 'project/output.html'}
- 카테고리: ${config.category || 'tech'}
- 테마: ${config.theme || 'light'}
- 태그: ${(config.tags || []).join(', ')}
${config.seoStrategy ? `- SEO 전략: ${config.seoStrategy}` : ''}

### 요청
위의 시스템 프롬프트에 정의된 모든 규칙을 준수하여 완성된 HTML 파일을 생성해주세요.
HTML 코드만 출력하고, 설명은 포함하지 마세요.
`;

    // Claude Code CLI 실행
    return new Promise((resolve, reject) => {
        const fullPrompt = `${systemPrompt}\n\n---\n\n${userPrompt}`;

        // 임시 파일에 프롬프트 저장 (긴 프롬프트 처리)
        const tempPromptFile = path.join(PROMPTS_DIR, '.temp-prompt.md');
        fs.writeFileSync(tempPromptFile, fullPrompt, 'utf-8');

        console.log('🤖 Claude Code CLI 호출 중...');

        // claude CLI 실행 (--print 옵션으로 결과만 출력)
        const child = spawn('claude', [
            '--print',
            '-p', `@${tempPromptFile}`
        ], {
            stdio: ['pipe', 'pipe', 'pipe'],
            shell: true
        });

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        child.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        child.on('close', (code) => {
            // 임시 파일 삭제
            if (fs.existsSync(tempPromptFile)) {
                fs.unlinkSync(tempPromptFile);
            }

            if (code !== 0) {
                reject(new Error(`Claude CLI 오류 (exit code ${code}): ${stderr}`));
                return;
            }

            // HTML 추출 (```html ... ``` 블록에서)
            const htmlMatch = stdout.match(/```html\n([\s\S]*?)\n```/);
            if (htmlMatch) {
                resolve(htmlMatch[1]);
            } else if (stdout.includes('<!DOCTYPE html>')) {
                // 코드 블록 없이 직접 HTML 출력된 경우
                resolve(stdout.trim());
            } else {
                reject(new Error('Claude 응답에서 HTML을 찾을 수 없습니다.'));
            }
        });

        child.on('error', (err) => {
            if (fs.existsSync(tempPromptFile)) {
                fs.unlinkSync(tempPromptFile);
            }
            reject(err);
        });
    });
}

/**
 * 대화형 모드로 Claude와 HTML 개선
 * @param {string} html - 기존 HTML
 * @param {string} feedback - 사용자 피드백
 * @returns {Promise<string>} 개선된 HTML
 */
async function refineWithClaude(html, feedback) {
    if (!checkClaudeCLI()) {
        throw new Error('Claude Code CLI가 설치되어 있지 않습니다.');
    }

    const prompt = `
## 현재 HTML
\`\`\`html
${html}
\`\`\`

## 수정 요청
${feedback}

## 지침
- 위의 피드백을 반영하여 HTML을 수정해주세요
- 기존 스타일과 구조를 최대한 유지하세요
- 수정된 전체 HTML만 출력하세요
`;

    return new Promise((resolve, reject) => {
        const tempPromptFile = path.join(PROMPTS_DIR, '.temp-refine.md');
        fs.writeFileSync(tempPromptFile, prompt, 'utf-8');

        console.log('🤖 Claude Code로 HTML 개선 중...');

        const child = spawn('claude', [
            '--print',
            '-p', `@${tempPromptFile}`
        ], {
            stdio: ['pipe', 'pipe', 'pipe'],
            shell: true
        });

        let stdout = '';

        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        child.on('close', (code) => {
            if (fs.existsSync(tempPromptFile)) {
                fs.unlinkSync(tempPromptFile);
            }

            if (code !== 0) {
                reject(new Error(`Claude CLI 오류 (exit code ${code})`));
                return;
            }

            const htmlMatch = stdout.match(/```html\n([\s\S]*?)\n```/);
            if (htmlMatch) {
                resolve(htmlMatch[1]);
            } else if (stdout.includes('<!DOCTYPE html>')) {
                resolve(stdout.trim());
            } else {
                reject(new Error('Claude 응답에서 HTML을 찾을 수 없습니다.'));
            }
        });

        child.on('error', (err) => {
            if (fs.existsSync(tempPromptFile)) {
                fs.unlinkSync(tempPromptFile);
            }
            reject(err);
        });
    });
}

/**
 * Claude CLI 상태 확인
 */
function getClaudeStatus() {
    const isInstalled = checkClaudeCLI();
    const hasSystemPrompt = fs.existsSync(path.join(PROMPTS_DIR, 'blog-generator-system.md'));

    return {
        installed: isInstalled,
        hasSystemPrompt,
        ready: isInstalled && hasSystemPrompt
    };
}

module.exports = {
    checkClaudeCLI,
    loadSystemPrompt,
    generateWithClaude,
    refineWithClaude,
    getClaudeStatus
};
