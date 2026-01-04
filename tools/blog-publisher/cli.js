#!/usr/bin/env node
/**
 * Pebblous Blog Publisher CLI
 * 마크다운 → HTML 블로그 자동 발행 도구
 */

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// 모듈 import
const { parseMarkdown } = require('./lib/parser');
const { generateHTML } = require('./lib/generator');
const { publishArticle } = require('./lib/publisher');
const { generateWithClaude, getClaudeStatus } = require('./lib/claude-bridge');

// 프로젝트 루트 경로
const PROJECT_ROOT = path.resolve(__dirname, '../..');

program
    .name('blog-publisher')
    .description('페블러스 블로그 자동 발행 도구')
    .version('1.0.0');

// publish 명령어
program
    .command('publish <source>')
    .description('마크다운 파일을 HTML로 변환하고 발행')
    .option('-c, --category <category>', '카테고리 (Tech, Business, Story, Art)', 'Tech')
    .option('-t, --template <template>', '템플릿 (standard, password, interactive)', 'standard')
    .option('-p, --password <password>', '비밀번호 보호 (password 템플릿용)')
    .option('--tags <tags>', '태그 (쉼표 구분)', '')
    .option('--theme <theme>', '기본 테마 (dark, light, beige)', 'light')
    .option('-o, --output <path>', '출력 경로 (상대 경로)')
    .option('--no-git', 'git commit/push 건너뛰기')
    .option('--dry-run', '실제 파일 생성 없이 미리보기만')
    .action(async (source, options) => {
        try {
            console.log('\n🚀 Pebblous Blog Publisher\n');
            console.log(`📄 소스: ${source}`);
            console.log(`📁 카테고리: ${options.category}`);
            console.log(`🎨 템플릿: ${options.template}`);
            console.log(`🎯 테마: ${options.theme}`);

            if (options.tags) {
                console.log(`🏷️  태그: ${options.tags}`);
            }
            if (options.password) {
                console.log(`🔐 비밀번호 보호: 활성화`);
            }

            // 1. 마크다운 파일 읽기
            const sourcePath = path.resolve(PROJECT_ROOT, source);
            if (!fs.existsSync(sourcePath)) {
                console.error(`\n❌ 파일을 찾을 수 없습니다: ${sourcePath}`);
                process.exit(1);
            }

            const markdown = fs.readFileSync(sourcePath, 'utf-8');
            console.log(`\n✅ 마크다운 파일 읽기 완료 (${markdown.length} 자)`);

            // 2. 마크다운 파싱
            const parsed = parseMarkdown(markdown);
            console.log(`✅ 파싱 완료: "${parsed.title}"`);
            console.log(`   - 섹션: ${parsed.sections.length}개`);

            // 3. HTML 생성
            const config = {
                category: options.category,
                template: options.template,
                password: options.password,
                tags: options.tags ? options.tags.split(',').map(t => t.trim()) : [],
                theme: options.theme,
                sourcePath: source
            };

            if (options.dryRun) {
                console.log('\n🔍 Dry Run 모드 - 실제 파일 생성 건너뜀');
                console.log('\n--- 생성될 HTML 미리보기 ---');
                const html = await generateHTML(parsed, config);
                console.log(html.substring(0, 500) + '...\n');
                return;
            }

            const html = await generateHTML(parsed, config);
            console.log(`✅ HTML 생성 완료 (${html.length} 자)`);

            // 4. 파일 저장 및 발행
            const outputPath = options.output || inferOutputPath(source, options.category);
            const result = await publishArticle({
                html,
                outputPath,
                parsed,
                config,
                skipGit: !options.git
            });

            console.log(`\n✅ 발행 완료!`);
            console.log(`📍 파일: ${result.filePath}`);
            console.log(`🔗 URL: https://blog.pebblous.ai/${result.relativePath}`);

            if (result.committed) {
                console.log(`📤 Git: 커밋 및 푸시 완료`);
            }

        } catch (error) {
            console.error(`\n❌ 오류 발생: ${error.message}`);
            if (process.env.DEBUG) {
                console.error(error.stack);
            }
            process.exit(1);
        }
    });

// preview 명령어
program
    .command('preview <source>')
    .description('마크다운 파일을 HTML로 변환하여 미리보기')
    .option('-t, --template <template>', '템플릿', 'standard')
    .action(async (source, options) => {
        console.log('\n🔍 미리보기 모드\n');

        const sourcePath = path.resolve(PROJECT_ROOT, source);
        if (!fs.existsSync(sourcePath)) {
            console.error(`❌ 파일을 찾을 수 없습니다: ${sourcePath}`);
            process.exit(1);
        }

        const markdown = fs.readFileSync(sourcePath, 'utf-8');
        const parsed = parseMarkdown(markdown);

        console.log(`제목: ${parsed.title}`);
        console.log(`섹션 수: ${parsed.sections.length}`);
        console.log('\n--- 섹션 목록 ---');
        parsed.sections.forEach((section, i) => {
            console.log(`${i + 1}. ${section.title}`);
        });
    });

// serve 명령어 (웹 UI)
program
    .command('serve')
    .description('웹 UI 서버 시작')
    .option('-p, --port <port>', '포트 번호', '3000')
    .action((options) => {
        console.log(`\n🌐 웹 UI 서버 시작 (포트: ${options.port})`);
        console.log('⚠️  아직 구현되지 않았습니다.\n');
        // TODO: Express 서버 + 웹 UI
    });

// claude 명령어 (AI 기반 HTML 생성)
program
    .command('claude <source>')
    .description('Claude를 사용하여 고품질 HTML 생성 (월정액 구독 활용)')
    .option('-c, --category <category>', '카테고리 (tech, art, story)', 'tech')
    .option('--tags <tags>', '태그 (쉼표 구분)', '')
    .option('--theme <theme>', '기본 테마 (dark, light, beige)', 'light')
    .option('-o, --output <path>', '출력 경로 (상대 경로)')
    .option('--seo <strategy>', 'SEO 전략 설명')
    .option('--dry-run', '실제 파일 생성 없이 미리보기만')
    .option('--no-git', 'git commit/push 건너뛰기')
    .action(async (source, options) => {
        try {
            console.log('\n🤖 Pebblous Blog Publisher (Claude Mode)\n');

            // Claude CLI 상태 확인
            const status = getClaudeStatus();
            if (!status.installed) {
                console.error('❌ Claude Code CLI가 설치되어 있지 않습니다.');
                console.log('\n설치 방법:');
                console.log('  npm install -g @anthropic-ai/claude-code');
                console.log('  또는 https://claude.ai/claude-code 참조\n');
                process.exit(1);
            }
            if (!status.hasSystemPrompt) {
                console.error('❌ 시스템 프롬프트 파일이 없습니다.');
                console.log('  prompts/blog-generator-system.md 파일을 확인하세요.\n');
                process.exit(1);
            }

            console.log(`📄 소스: ${source}`);
            console.log(`📁 카테고리: ${options.category}`);
            console.log(`🎯 테마: ${options.theme}`);
            if (options.tags) {
                console.log(`🏷️  태그: ${options.tags}`);
            }
            if (options.seo) {
                console.log(`🔍 SEO 전략: ${options.seo}`);
            }

            // 1. 마크다운 파일 읽기
            const sourcePath = path.resolve(PROJECT_ROOT, source);
            if (!fs.existsSync(sourcePath)) {
                console.error(`\n❌ 파일을 찾을 수 없습니다: ${sourcePath}`);
                process.exit(1);
            }

            const markdown = fs.readFileSync(sourcePath, 'utf-8');
            console.log(`\n✅ 마크다운 파일 읽기 완료 (${markdown.length} 자)`);

            // 2. Claude를 사용하여 HTML 생성
            const config = {
                category: options.category,
                tags: options.tags ? options.tags.split(',').map(t => t.trim()) : [],
                theme: options.theme,
                outputPath: options.output || inferOutputPath(source, options.category),
                seoStrategy: options.seo
            };

            console.log('\n🤖 Claude에게 HTML 생성 요청 중...');
            console.log('   (시스템 프롬프트의 모든 정책이 적용됩니다)');

            const html = await generateWithClaude(markdown, config);
            console.log(`\n✅ HTML 생성 완료 (${html.length} 자)`);

            if (options.dryRun) {
                console.log('\n🔍 Dry Run 모드 - 실제 파일 생성 건너뜀');
                console.log('\n--- 생성된 HTML 미리보기 (처음 1000자) ---');
                console.log(html.substring(0, 1000) + '...\n');
                return;
            }

            // 3. 파일 저장 및 발행
            const parsed = parseMarkdown(markdown);
            const outputPath = config.outputPath;

            const result = await publishArticle({
                html,
                outputPath,
                parsed,
                config: {
                    ...config,
                    sourcePath: source
                },
                skipGit: !options.git
            });

            console.log(`\n✅ 발행 완료!`);
            console.log(`📍 파일: ${result.filePath}`);
            console.log(`🔗 URL: https://blog.pebblous.ai/${result.relativePath}`);

            if (result.committed) {
                console.log(`📤 Git: 커밋 및 푸시 완료`);
            }

        } catch (error) {
            console.error(`\n❌ 오류 발생: ${error.message}`);
            if (process.env.DEBUG) {
                console.error(error.stack);
            }
            process.exit(1);
        }
    });

// status 명령어 (Claude 상태 확인)
program
    .command('status')
    .description('Claude Code CLI 설치 상태 확인')
    .action(() => {
        console.log('\n📊 Blog Publisher 상태\n');

        const status = getClaudeStatus();

        console.log('Claude Code CLI:');
        console.log(`  설치됨: ${status.installed ? '✅' : '❌'}`);
        console.log(`  시스템 프롬프트: ${status.hasSystemPrompt ? '✅' : '❌'}`);
        console.log(`  준비 완료: ${status.ready ? '✅' : '❌'}`);

        if (!status.installed) {
            console.log('\n💡 Claude Code CLI 설치:');
            console.log('   npm install -g @anthropic-ai/claude-code');
        }

        if (!status.hasSystemPrompt) {
            console.log('\n💡 시스템 프롬프트 위치:');
            console.log('   tools/blog-publisher/prompts/blog-generator-system.md');
        }

        console.log('\n사용 가능한 명령어:');
        console.log('  publish <source>  - 템플릿 기반 HTML 생성 (빠름)');
        console.log('  claude <source>   - Claude AI 기반 HTML 생성 (고품질)');
        console.log('  preview <source>  - 마크다운 미리보기');
        console.log('  status            - 상태 확인\n');
    });

// 출력 경로 추론
function inferOutputPath(sourcePath, category) {
    const basename = path.basename(sourcePath, path.extname(sourcePath));
    const slug = basename
        .toLowerCase()
        .replace(/[^a-z0-9가-힣]+/g, '-')
        .replace(/^-|-$/g, '');

    const categoryPath = {
        'Tech': 'project',
        'Business': 'project/DataClinic',
        'Story': 'story',
        'Art': 'art'
    };

    return `${categoryPath[category] || 'project'}/${slug}.html`;
}

program.parse();
