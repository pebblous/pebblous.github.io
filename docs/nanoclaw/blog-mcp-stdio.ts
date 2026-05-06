/**
 * Blog MCP Server for NanoClaw
 * Wraps the Pebblous blog repo with a high-intelligence pipeline execution engine.
 * Uses Claude Code CLI to natively execute the blog repo's skill/agent system.
 *
 * Blog repo: /workspace/extra/repos/pebblous.github.io
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { execSync, spawn, type ChildProcess } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// ── Constants ─────────────────────────────────────────────────────────────────
const BLOG_REPO = '/workspace/extra/repos/pebblous.github.io';
const RUNS_DIR = path.join(BLOG_REPO, '_workspace/.runs');
const ARTICLES_JSON = path.join(BLOG_REPO, 'articles.json');
const ONECLI_CA = '/tmp/onecli-gateway-ca.pem';

// Git environment: use OneCLI CA cert so git can reach GitHub through the proxy
const GIT_ENV: Record<string, string> = {
  ...process.env as Record<string, string>,
  GIT_SSL_CAINFO: fs.existsSync(ONECLI_CA) ? ONECLI_CA : '',
};

// Model routing
const MODEL_SONNET = 'sonnet';
const MODEL_OPUS = 'opus';

interface RunState {
  id: string;
  type: 'blog' | 'report' | 'dc-story' | 'pebblopedia';
  topic: string;
  status: 'running' | 'paused_at_gate' | 'completed' | 'failed';
  currentPhase: string;
  branch: string;
  createdAt: string;
  updatedAt: string;
  gateMessage?: string;
  phases: PhaseRecord[];
  error?: string;
}

interface PhaseRecord {
  name: string;
  model: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  startedAt?: string;
  completedAt?: string;
  output?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function log(msg: string): void {
  console.error(`[BLOG-MCP] ${msg}`);
}

function ensureRunsDir(): void {
  fs.mkdirSync(RUNS_DIR, { recursive: true });
}

function generateRunId(): string {
  return `run-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getRunDir(runId: string): string {
  return path.join(RUNS_DIR, runId);
}

function readRunState(runId: string): RunState | null {
  const stateFile = path.join(getRunDir(runId), 'state.json');
  try {
    return JSON.parse(fs.readFileSync(stateFile, 'utf-8')) as RunState;
  } catch {
    return null;
  }
}

function writeRunState(state: RunState): void {
  const runDir = getRunDir(state.id);
  fs.mkdirSync(runDir, { recursive: true });
  state.updatedAt = new Date().toISOString();
  fs.writeFileSync(path.join(runDir, 'state.json'), JSON.stringify(state, null, 2));
}

function getBranchName(type: string, topic: string): string {
  const slug = topic
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  return `nanoclaw/${type}/${slug}-${Date.now().toString(36)}`;
}

/**
 * Execute Claude Code CLI in the blog repo directory.
 * Returns the stdout output.
 */
function runClaudeCode(opts: {
  prompt: string;
  model?: string;
  runDir: string;
  timeoutMs?: number;
}): string {
  const { prompt, model = MODEL_OPUS, runDir, timeoutMs = 600_000 } = opts;

  // Write prompt to file to avoid shell escaping issues
  const promptFile = path.join(runDir, '.current-prompt.md');
  fs.writeFileSync(promptFile, prompt);

  const cmd = [
    'claude',
    '-p', promptFile,
    '--model', model,
    '--output-format', 'text',
    '--max-turns', '50',
    '--allowedTools', 'Read,Write,Edit,Bash,Glob,Grep,WebSearch,WebFetch,Agent',
  ].join(' ');

  log(`Executing Claude Code (model=${model}): ${prompt.slice(0, 100)}...`);

  try {
    const result = execSync(cmd, {
      cwd: BLOG_REPO,
      timeout: timeoutMs,
      maxBuffer: 10 * 1024 * 1024, // 10MB
      encoding: 'utf-8',
      env: { ...process.env, CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1' },
    });
    return result;
  } catch (err: unknown) {
    const error = err as { stdout?: string; stderr?: string; message?: string };
    log(`Claude Code error: ${error.stderr || error.message}`);
    throw new Error(`Claude Code failed: ${error.stderr || error.message}`);
  }
}

/**
 * Run Claude Code asynchronously (for long pipelines).
 * Writes output to a file and updates state.
 */
function runClaudeCodeAsync(opts: {
  prompt: string;
  model?: string;
  runId: string;
  phaseName: string;
}): void {
  const { prompt, model = MODEL_OPUS, runId, phaseName } = opts;
  const runDir = getRunDir(runId);
  const promptFile = path.join(runDir, `.prompt-${phaseName}.md`);
  const outputFile = path.join(runDir, `.output-${phaseName}.txt`);
  fs.writeFileSync(promptFile, prompt);

  const args = [
    '-p', promptFile,
    '--model', model,
    '--output-format', 'text',
    '--max-turns', '50',
    '--allowedTools', 'Read,Write,Edit,Bash,Glob,Grep,WebSearch,WebFetch,Agent',
  ];

  const child = spawn('claude', args, {
    cwd: BLOG_REPO,
    env: { ...process.env, CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1' },
    stdio: ['pipe', 'pipe', 'pipe'],
    detached: true,
  });

  let stdout = '';
  child.stdout?.on('data', (data: Buffer) => { stdout += data.toString(); });
  child.stderr?.on('data', (data: Buffer) => { log(`[${phaseName}] ${data.toString()}`); });

  child.on('close', (code: number | null) => {
    fs.writeFileSync(outputFile, stdout);
    const state = readRunState(runId);
    if (!state) return;

    const phase = state.phases.find(p => p.name === phaseName);
    if (phase) {
      phase.status = code === 0 ? 'completed' : 'failed';
      phase.completedAt = new Date().toISOString();
      phase.output = outputFile;
    }
    writeRunState(state);
  });

  child.unref();
}

// ── Pipeline Definitions ──────────────────────────────────────────────────────

interface PipelinePhase {
  name: string;
  model: string;
  skill: string;          // skill path to reference in prompt
  isGate?: boolean;       // pause for human approval after this phase
  gateMessage?: string;
  parallel?: string[];    // names of phases that run in parallel with this one
}

const PIPELINES: Record<string, PipelinePhase[]> = {
  blog: [
    { name: 'research', model: MODEL_SONNET, skill: 'blog-produce' },
    { name: 'write-ko', model: MODEL_OPUS, skill: 'blog-write', isGate: true, gateMessage: '한국어 초안 완성. 검토해주세요.' },
    { name: 'write-en', model: MODEL_OPUS, skill: 'blog-write' },
    { name: 'image-reinforce', model: MODEL_OPUS, skill: 'image-reinforce' },
    { name: 'polish-ko', model: MODEL_OPUS, skill: 'blog-polish-ko' },
    { name: 'polish-en', model: MODEL_OPUS, skill: 'blog-polish-en' },
    { name: 'seo', model: MODEL_SONNET, skill: 'seo-check' },
    { name: 'publish-prep', model: MODEL_SONNET, skill: 'blog-publish' },
  ],
  report: [
    { name: 'pre-risk', model: MODEL_SONNET, skill: 'report-produce', isGate: true, gateMessage: '사전 위험 평가 완료. 진행할까요?' },
    { name: 'planning', model: MODEL_OPUS, skill: 'report-produce' },
    { name: 'research-arxiv', model: MODEL_SONNET, skill: 'paper-research', parallel: ['research-industry', 'research-data'] },
    { name: 'research-industry', model: MODEL_SONNET, skill: 'report-produce' },
    { name: 'research-data', model: MODEL_SONNET, skill: 'report-produce' },
    { name: 'synthesis', model: MODEL_OPUS, skill: 'report-produce' },
    { name: 'write-ko', model: MODEL_OPUS, skill: 'report-produce', isGate: true, gateMessage: '한국어 초안 완성. 검토해주세요.' },
    { name: 'reinforce', model: MODEL_OPUS, skill: 'text-reinforce' },
    { name: 'write-en', model: MODEL_OPUS, skill: 'report-produce' },
    { name: 'image-reinforce', model: MODEL_OPUS, skill: 'image-reinforce' },
    { name: 'polish-ko', model: MODEL_OPUS, skill: 'blog-polish-ko' },
    { name: 'polish-en', model: MODEL_OPUS, skill: 'blog-polish-en' },
    { name: 'seo', model: MODEL_SONNET, skill: 'seo-check' },
    { name: 'publish-prep', model: MODEL_SONNET, skill: 'blog-publish' },
  ],
  'dc-story': [
    { name: 'collect', model: MODEL_SONNET, skill: 'dc-story-produce' },
    { name: 'analysis-l1', model: MODEL_SONNET, skill: 'dc-story-produce', parallel: ['analysis-l2', 'analysis-l3'] },
    { name: 'analysis-l2', model: MODEL_SONNET, skill: 'dc-story-produce' },
    { name: 'analysis-l3', model: MODEL_SONNET, skill: 'dc-story-produce' },
    { name: 'storyline', model: MODEL_OPUS, skill: 'dc-story-produce', isGate: true, gateMessage: '스토리라인 완성. 검토해주세요.' },
    { name: 'write-ko', model: MODEL_OPUS, skill: 'dc-story-produce', isGate: true, gateMessage: '한국어 초안 완성. 검토해주세요.' },
    { name: 'quality-check', model: MODEL_OPUS, skill: 'dc-story-produce' },
    { name: 'write-en', model: MODEL_OPUS, skill: 'dc-story-produce' },
    { name: 'image-reinforce', model: MODEL_OPUS, skill: 'image-reinforce' },
    { name: 'polish-ko', model: MODEL_OPUS, skill: 'blog-polish-ko' },
    { name: 'polish-en', model: MODEL_OPUS, skill: 'blog-polish-en' },
    { name: 'seo', model: MODEL_SONNET, skill: 'seo-check' },
    { name: 'publish-prep', model: MODEL_SONNET, skill: 'blog-publish' },
  ],
};

function buildPhasePrompt(state: RunState, phase: PipelinePhase): string {
  const runDir = getRunDir(state.id);
  const skillPath = `.claude/skills/${phase.skill}`;

  // Collect previous phase outputs for context
  const completedOutputs = state.phases
    .filter(p => p.status === 'completed' && p.output)
    .map(p => `[${p.name}]: see file ${p.output}`)
    .join('\n');

  const prompt = `You are executing phase "${phase.name}" of a ${state.type} pipeline.

Topic: ${state.topic}
Run directory: ${runDir}
Branch: ${state.branch}

## Instructions

1. Read the skill file at \`${skillPath}/skill.md\` (and \`${skillPath}/SKILL.md\` if it exists) for detailed execution instructions.
2. Read the blog repo's CLAUDE.md for HTML conventions and structure rules.
3. This is phase "${phase.name}" — focus ONLY on this phase's responsibilities as described in the skill.

## Previous Phase Outputs
${completedOutputs || '(first phase — no prior outputs)'}

## Workspace
All intermediate files go in: ${runDir}/
Follow the naming convention: {phase}_{artifact}.{ext}

## Key Rules
- Write all output files to the run directory
- Follow the blog repo's conventions exactly (PebblousPage.init, CSS order, SEO 4-layer, etc.)
- For HTML output: write to the correct path in the blog repo (on the feature branch)
- If this is a research phase: save comprehensive findings, don't summarize away detail
- If this is a writing phase: produce complete, publication-ready HTML

Begin.`;

  return prompt;
}

// ── Pipeline Execution Engine ─────────────────────────────────────────────────

async function startPipeline(type: string, topic: string, params?: Record<string, string>): Promise<RunState> {
  ensureRunsDir();

  const runId = generateRunId();
  const branch = getBranchName(type, topic);
  const pipelinePhases = PIPELINES[type];

  if (!pipelinePhases) {
    throw new Error(`Unknown pipeline type: ${type}. Available: ${Object.keys(PIPELINES).join(', ')}`);
  }

  // Create branch in blog repo
  try {
    execSync(`git checkout main && git pull origin main && git checkout -b ${branch}`, {
      cwd: BLOG_REPO,
      encoding: 'utf-8',
      env: GIT_ENV,
    });
  } catch (err) {
    log(`Branch creation warning: ${err}`);
  }

  const state: RunState = {
    id: runId,
    type: type as RunState['type'],
    topic,
    status: 'running',
    currentPhase: pipelinePhases[0].name,
    branch,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    phases: pipelinePhases.map(p => ({
      name: p.name,
      model: p.model,
      status: 'pending' as const,
    })),
  };

  // Save initial input
  const runDir = getRunDir(runId);
  fs.mkdirSync(runDir, { recursive: true });
  fs.writeFileSync(path.join(runDir, '00_input.md'), [
    `# Pipeline Input`,
    ``,
    `- Type: ${type}`,
    `- Topic: ${topic}`,
    `- Branch: ${branch}`,
    `- Started: ${state.createdAt}`,
    params ? `- Params: ${JSON.stringify(params)}` : '',
    '',
  ].join('\n'));

  writeRunState(state);

  // Start first phase
  await executeNextPhase(state);

  return readRunState(runId) || state;
}

async function executeNextPhase(state: RunState): Promise<void> {
  const pipelinePhases = PIPELINES[state.type];
  if (!pipelinePhases) return;

  // Find next pending phase
  const nextPhaseIdx = state.phases.findIndex(p => p.status === 'pending');
  if (nextPhaseIdx === -1) {
    state.status = 'completed';
    writeRunState(state);
    return;
  }

  const phaseDef = pipelinePhases[nextPhaseIdx];
  const phaseState = state.phases[nextPhaseIdx];

  // Check for parallel phases
  const parallelNames = phaseDef.parallel || [];
  const phasesToRun = [phaseDef, ...parallelNames.map(name =>
    pipelinePhases.find(p => p.name === name)!
  )].filter(Boolean);

  // Mark all as running
  for (const p of phasesToRun) {
    const ps = state.phases.find(s => s.name === p.name);
    if (ps) {
      ps.status = 'running';
      ps.startedAt = new Date().toISOString();
    }
  }
  state.currentPhase = phaseDef.name;
  writeRunState(state);

  // Execute (parallel phases run concurrently)
  try {
    if (phasesToRun.length > 1) {
      // Parallel execution
      const promises = phasesToRun.map(async (p) => {
        const prompt = buildPhasePrompt(state, p);
        const result = runClaudeCode({
          prompt,
          model: p.model,
          runDir: getRunDir(state.id),
          timeoutMs: 600_000,
        });
        return { name: p.name, result };
      });

      const results = await Promise.allSettled(promises);
      for (const r of results) {
        if (r.status === 'fulfilled') {
          const ps = state.phases.find(s => s.name === r.value.name);
          if (ps) {
            ps.status = 'completed';
            ps.completedAt = new Date().toISOString();
            const outFile = path.join(getRunDir(state.id), `${r.value.name}-output.txt`);
            fs.writeFileSync(outFile, r.value.result);
            ps.output = outFile;
          }
        } else {
          const failedName = phasesToRun.find(p =>
            !state.phases.find(s => s.name === p.name && s.status === 'completed')
          )?.name;
          if (failedName) {
            const ps = state.phases.find(s => s.name === failedName);
            if (ps) ps.status = 'failed';
          }
        }
      }
    } else {
      // Single phase
      const prompt = buildPhasePrompt(state, phaseDef);
      const result = runClaudeCode({
        prompt,
        model: phaseDef.model,
        runDir: getRunDir(state.id),
        timeoutMs: 600_000,
      });
      phaseState.status = 'completed';
      phaseState.completedAt = new Date().toISOString();
      const outFile = path.join(getRunDir(state.id), `${phaseDef.name}-output.txt`);
      fs.writeFileSync(outFile, result);
      phaseState.output = outFile;
    }

    writeRunState(state);

    // Check if this is a gate
    if (phaseDef.isGate) {
      state.status = 'paused_at_gate';
      state.gateMessage = phaseDef.gateMessage;
      writeRunState(state);
      return; // Stop — wait for approval
    }

    // Continue to next phase
    await executeNextPhase(state);
  } catch (err) {
    phaseState.status = 'failed';
    state.status = 'failed';
    state.error = err instanceof Error ? err.message : String(err);
    writeRunState(state);
  }
}

async function resumePipeline(runId: string, feedback?: string): Promise<RunState> {
  const state = readRunState(runId);
  if (!state) throw new Error(`Run not found: ${runId}`);
  if (state.status !== 'paused_at_gate') {
    throw new Error(`Run ${runId} is not paused at a gate (status: ${state.status})`);
  }

  // Save feedback
  if (feedback) {
    const feedbackFile = path.join(getRunDir(runId), `feedback-${state.currentPhase}.md`);
    fs.writeFileSync(feedbackFile, feedback);
  }

  // Resume
  state.status = 'running';
  state.gateMessage = undefined;
  writeRunState(state);

  // Make sure we're on the right branch
  try {
    execSync(`git checkout ${state.branch}`, { cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV });
  } catch (err) {
    log(`Branch checkout warning: ${err}`);
  }

  await executeNextPhase(state);
  return readRunState(runId) || state;
}

// ── Preview ───────────────────────────────────────────────────────────────────

let previewProcess: ChildProcess | null = null;
let previewUrl: string | null = null;

function startPreview(articlePath?: string): string {
  // Start local server if not running
  const port = 8088 + Math.floor(Math.random() * 100);

  try {
    // Kill existing preview
    if (previewProcess) {
      previewProcess.kill();
      previewProcess = null;
    }

    // Start python http server
    const server = spawn('python3', ['-m', 'http.server', String(port)], {
      cwd: BLOG_REPO,
      stdio: 'pipe',
      detached: true,
    });
    server.unref();

    // Start cloudflared tunnel
    const tunnel = spawn('cloudflared', ['tunnel', '--url', `http://localhost:${port}`], {
      stdio: ['pipe', 'pipe', 'pipe'],
      detached: true,
    });

    let tunnelUrl = '';
    tunnel.stderr?.on('data', (data: Buffer) => {
      const line = data.toString();
      const match = line.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
      if (match) tunnelUrl = match[0];
    });

    // Wait a moment for tunnel to establish
    const startTime = Date.now();
    while (!tunnelUrl && Date.now() - startTime < 10_000) {
      execSync('sleep 0.5');
    }

    previewProcess = tunnel;
    tunnel.unref();

    if (tunnelUrl) {
      previewUrl = articlePath ? `${tunnelUrl}/${articlePath}` : tunnelUrl;
      return previewUrl;
    }

    // Fallback: return local URL
    return `http://localhost:${port}${articlePath ? '/' + articlePath : ''}`;
  } catch (err) {
    return `Preview failed: ${err instanceof Error ? err.message : String(err)}`;
  }
}

// ── MCP Server ────────────────────────────────────────────────────────────────

const server = new McpServer({ name: 'blog', version: '1.0.0' });

// ── run_pipeline ──────────────────────────────────────────────────────────────
server.tool(
  'blog_run_pipeline',
  `Start a content pipeline on the Pebblous blog. This spawns Claude Code instances that execute the blog repo's full skill/agent system (research → write → publish).

Available pipeline types:
- "blog": Simple blog post (research → write KO → write EN → SEO → publish)
- "report": Deep research report (pre-risk → plan → 3-track research → synthesis → write → reinforce → EN → SEO → publish)
- "dc-story": DataClinic story (collect → 3-way analysis → storyline → write → quality → EN → SEO → publish)

The pipeline runs asynchronously. Use blog_get_status to check progress. Human approval gates will pause execution and report back.`,
  {
    type: z.enum(['blog', 'report', 'dc-story']).describe('Pipeline type'),
    topic: z.string().describe('Topic or title for the content'),
    reportId: z.string().optional().describe('DataClinic report ID (for dc-story pipeline)'),
    extraContext: z.string().optional().describe('Additional context or instructions for the pipeline'),
  },
  async (args) => {
    log(`run_pipeline: type=${args.type}, topic=${args.topic}`);
    try {
      const params: Record<string, string> = {};
      if (args.reportId) params.reportId = args.reportId;
      if (args.extraContext) params.extraContext = args.extraContext;
      const state = await startPipeline(args.type, args.topic, Object.keys(params).length ? params : undefined);
      const statusText = state.status === 'paused_at_gate'
        ? `⏸ 승인 대기: ${state.gateMessage}`
        : `▶ 실행 중 (phase: ${state.currentPhase})`;

      return {
        content: [{
          type: 'text' as const,
          text: [
            `파이프라인 시작됨`,
            ``,
            `• Run ID: ${state.id}`,
            `• Type: ${state.type}`,
            `• Topic: ${state.topic}`,
            `• Branch: ${state.branch}`,
            `• Status: ${statusText}`,
            ``,
            `Phases:`,
            ...state.phases.map(p => `  ${p.status === 'completed' ? '✅' : p.status === 'running' ? '🔄' : p.status === 'paused_at_gate' ? '⏸' : '⬜'} ${p.name} (${p.model})`),
          ].join('\n'),
        }],
      };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `❌ Pipeline failed: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── resume_pipeline ───────────────────────────────────────────────────────────
server.tool(
  'blog_resume_pipeline',
  'Resume a pipeline paused at an approval gate. Optionally pass feedback for the next phase.',
  {
    runId: z.string().describe('The run ID to resume'),
    feedback: z.string().optional().describe('Optional feedback or instructions for the next phase'),
  },
  async (args) => {
    log(`resume_pipeline: ${args.runId}`);
    try {
      const state = await resumePipeline(args.runId, args.feedback);
      const statusText = state.status === 'paused_at_gate'
        ? `⏸ 승인 대기: ${state.gateMessage}`
        : state.status === 'completed'
          ? '✅ 완료'
          : `▶ 실행 중 (phase: ${state.currentPhase})`;

      return {
        content: [{
          type: 'text' as const,
          text: [
            `파이프라인 재개됨`,
            `• Status: ${statusText}`,
            ``,
            `Phases:`,
            ...state.phases.map(p => `  ${p.status === 'completed' ? '✅' : p.status === 'running' ? '🔄' : p.status === 'failed' ? '❌' : '⬜'} ${p.name}`),
          ].join('\n'),
        }],
      };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `❌ Resume failed: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── get_status ────────────────────────────────────────────────────────────────
server.tool(
  'blog_get_status',
  'Get the current status of a pipeline run.',
  {
    runId: z.string().describe('The run ID to check'),
  },
  async (args) => {
    const state = readRunState(args.runId);
    if (!state) {
      return { content: [{ type: 'text' as const, text: `Run not found: ${args.runId}` }], isError: true };
    }
    return {
      content: [{
        type: 'text' as const,
        text: [
          `Run: ${state.id}`,
          `Type: ${state.type} | Topic: ${state.topic}`,
          `Status: ${state.status}`,
          `Branch: ${state.branch}`,
          state.gateMessage ? `Gate: ${state.gateMessage}` : '',
          state.error ? `Error: ${state.error}` : '',
          ``,
          `Phases:`,
          ...state.phases.map(p => {
            const icon = p.status === 'completed' ? '✅' : p.status === 'running' ? '🔄' : p.status === 'failed' ? '❌' : p.status === 'skipped' ? '⏭' : '⬜';
            return `  ${icon} ${p.name} (${p.model})${p.completedAt ? ` — ${p.completedAt}` : ''}`;
          }),
          ``,
          `Created: ${state.createdAt}`,
          `Updated: ${state.updatedAt}`,
        ].filter(Boolean).join('\n'),
      }],
    };
  },
);

// ── list_runs ─────────────────────────────────────────────────────────────────
server.tool(
  'blog_list_runs',
  'List all pipeline runs (active and completed).',
  { _dummy: z.string().optional().describe('unused') },
  async () => {
    ensureRunsDir();
    try {
      const entries = fs.readdirSync(RUNS_DIR).filter(e =>
        fs.statSync(path.join(RUNS_DIR, e)).isDirectory()
      );

      if (entries.length === 0) {
        return { content: [{ type: 'text' as const, text: '파이프라인 실행 이력 없음' }] };
      }

      const runs = entries
        .map(e => readRunState(e))
        .filter((s): s is RunState => s !== null)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

      const text = runs.map(r => {
        const icon = r.status === 'completed' ? '✅' : r.status === 'running' ? '🔄' : r.status === 'paused_at_gate' ? '⏸' : '❌';
        return `${icon} [${r.id}] ${r.type}: "${r.topic}" — ${r.status}`;
      }).join('\n');

      return { content: [{ type: 'text' as const, text }] };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `Error: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── get_draft ─────────────────────────────────────────────────────────────────
server.tool(
  'blog_get_draft',
  'Get the current draft HTML content from a pipeline run. Reads the latest HTML file produced on the run branch.',
  {
    runId: z.string().describe('The run ID'),
    language: z.enum(['ko', 'en']).optional().describe('Language version (default: ko)'),
  },
  async (args) => {
    const state = readRunState(args.runId);
    if (!state) {
      return { content: [{ type: 'text' as const, text: `Run not found: ${args.runId}` }], isError: true };
    }

    try {
      // Find HTML files modified on this branch
      execSync(`git checkout ${state.branch}`, { cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV });
      const diff = execSync(`git diff main --name-only -- "*.html"`, { cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV });
      const htmlFiles = diff.trim().split('\n').filter(Boolean);

      const lang = args.language || 'ko';
      const targetFile = htmlFiles.find(f => f.includes(`/${lang}/`)) || htmlFiles[0];

      if (!targetFile) {
        return { content: [{ type: 'text' as const, text: 'HTML 초안이 아직 생성되지 않았습니다.' }] };
      }

      const content = fs.readFileSync(path.join(BLOG_REPO, targetFile), 'utf-8');
      return {
        content: [{
          type: 'text' as const,
          text: `File: ${targetFile}\n\n${content.slice(0, 5000)}${content.length > 5000 ? '\n\n... (truncated)' : ''}`,
        }],
      };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `Error: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── preview ───────────────────────────────────────────────────────────────────
server.tool(
  'blog_preview',
  'Start a cloudflared preview tunnel for the blog repo. Returns a public URL. Optionally specify an article path.',
  {
    runId: z.string().optional().describe('Run ID to preview the draft from (switches to its branch)'),
    articlePath: z.string().optional().describe('Article path relative to repo root (e.g. "report/my-article/ko/index.html")'),
  },
  async (args) => {
    try {
      // Switch to the right branch if runId provided
      if (args.runId) {
        const state = readRunState(args.runId);
        if (state) {
          execSync(`git checkout ${state.branch}`, { cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV });
        }
      }

      const url = startPreview(args.articlePath);
      return { content: [{ type: 'text' as const, text: `🌐 Preview: ${url}` }] };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `Preview failed: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── submit_pr ─────────────────────────────────────────────────────────────────
server.tool(
  'blog_submit_pr',
  'Create a GitHub PR from a pipeline run branch to main.',
  {
    runId: z.string().describe('The run ID'),
    title: z.string().optional().describe('PR title (auto-generated if omitted)'),
    body: z.string().optional().describe('PR body (auto-generated if omitted)'),
  },
  async (args) => {
    const state = readRunState(args.runId);
    if (!state) {
      return { content: [{ type: 'text' as const, text: `Run not found: ${args.runId}` }], isError: true };
    }

    try {
      // Push branch
      execSync(`git checkout ${state.branch} && git push -u origin ${state.branch}`, {
        cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV,
      });

      // Create PR
      const title = args.title || `[${state.type}] ${state.topic}`;
      const body = args.body || [
        `## Summary`,
        ``,
        `Pipeline: ${state.type}`,
        `Topic: ${state.topic}`,
        `Run ID: ${state.id}`,
        ``,
        `## Phases completed`,
        ...state.phases.filter(p => p.status === 'completed').map(p => `- ✅ ${p.name} (${p.model})`),
        ``,
        `---`,
        `🤖 Generated by NanoClaw Blog MCP`,
      ].join('\n');

      const prUrl = execSync(
        `gh pr create --title "${title.replace(/"/g, '\\"')}" --body "${body.replace(/"/g, '\\"')}"`,
        { cwd: BLOG_REPO, encoding: 'utf-8', env: GIT_ENV },
      ).trim();

      return { content: [{ type: 'text' as const, text: `✅ PR 생성됨: ${prUrl}` }] };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `PR 생성 실패: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── query ─────────────────────────────────────────────────────────────────────
server.tool(
  'blog_query',
  'Ask a question about the blog repo — conventions, existing articles, skill details, or anything else. Uses Claude Code to search and answer from the repo context.',
  {
    question: z.string().describe('Your question about the blog repo'),
  },
  async (args) => {
    log(`query: ${args.question}`);
    try {
      ensureRunsDir();
      const result = runClaudeCode({
        prompt: `Answer this question about the blog repo. Search relevant files (CLAUDE.md, skills, articles.json, docs/) to give an accurate answer. Be concise.\n\nQuestion: ${args.question}`,
        model: MODEL_SONNET,
        runDir: RUNS_DIR,
        timeoutMs: 120_000,
      });
      return { content: [{ type: 'text' as const, text: result }] };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `Query failed: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── list_articles ─────────────────────────────────────────────────────────────
server.tool(
  'blog_list_articles',
  'Search and list existing blog articles from articles.json. Filter by category, language, keyword, or date.',
  {
    keyword: z.string().optional().describe('Search keyword (matches title or description)'),
    category: z.string().optional().describe('Filter by category: project, blog, report, story, event'),
    language: z.string().optional().describe('Filter by language: ko, en'),
    limit: z.number().optional().describe('Max results (default 10)'),
  },
  async (args) => {
    try {
      const raw = fs.readFileSync(ARTICLES_JSON, 'utf-8');
      let articles = JSON.parse(raw) as Array<Record<string, unknown>>;

      if (args.category) {
        articles = articles.filter(a => (a.path as string)?.startsWith(args.category!));
      }
      if (args.language) {
        articles = articles.filter(a => a.language === args.language);
      }
      if (args.keyword) {
        const kw = args.keyword.toLowerCase();
        articles = articles.filter(a =>
          (a.title as string)?.toLowerCase().includes(kw) ||
          (a.description as string)?.toLowerCase().includes(kw)
        );
      }

      const limit = args.limit || 10;
      const results = articles.slice(0, limit);

      if (results.length === 0) {
        return { content: [{ type: 'text' as const, text: '검색 결과 없음' }] };
      }

      const text = results.map(a =>
        `• *${a.title}*\n  ${a.date} | ${a.category || '—'} | ${a.language}\n  ${a.path}`
      ).join('\n\n');

      return { content: [{ type: 'text' as const, text: `${articles.length}건 중 ${results.length}건:\n\n${text}` }] };
    } catch (err) {
      return { content: [{ type: 'text' as const, text: `Error: ${err instanceof Error ? err.message : String(err)}` }], isError: true };
    }
  },
);

// ── Start server ──────────────────────────────────────────────────────────────
async function main() {
  log('Blog MCP starting...');

  // Verify blog repo exists
  if (!fs.existsSync(BLOG_REPO)) {
    log(`ERROR: Blog repo not found at ${BLOG_REPO}`);
    process.exit(1);
  }

  // Sync blog repo to latest main
  try {
    execSync('git fetch origin main && git checkout main && git pull origin main', {
      cwd: BLOG_REPO,
      encoding: 'utf-8',
      timeout: 30_000,
      env: GIT_ENV,
    });
    log('Blog repo synced to latest main');
  } catch (err) {
    log(`Warning: Could not sync blog repo: ${err}`);
  }

  const transport = new StdioServerTransport();
  await server.connect(transport);
  log('Blog MCP server running');
}

main().catch((err) => {
  log(`Fatal: ${err}`);
  process.exit(1);
});
