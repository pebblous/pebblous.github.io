#!/usr/bin/env node

/**
 * Mock of `bloglens.precheck` for testing precheck-gate.js without the real
 * BlogScope tool deployed. Emits a §4.4-contract-conformant envelope and a
 * controllable exit code.
 *
 * Invoked exactly like the real precheck CLI:
 *   node tools/__mocks__/mock-precheck.js <html-path...> --format json
 *
 * Controls (env):
 *   MOCK_EXIT   exit code to return (default "0").
 *   MOCK_BODY   what to print on stdout:
 *                 "envelope" (default) → valid contract envelope reflecting MOCK_EXIT
 *                 "garbage"            → non-JSON text (simulate contract breach)
 *                 "empty"              → print nothing
 *                 "notobject"          → JSON array (object-shape breach)
 *                 "noresults"          → JSON object lacking results[]
 *   MOCK_STDERR optional text to print on stderr.
 */

'use strict';

const exitCode = parseInt(process.env.MOCK_EXIT || '0', 10);
const body = process.env.MOCK_BODY || 'envelope';

if (process.env.MOCK_STDERR) {
  process.stderr.write(process.env.MOCK_STDERR + '\n');
}

// Parse argv the way the real precheck would: positional paths, with
// `--format json` consuming its value. Skip flags and any flag values.
const htmlPaths = [];
{
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--format') {
      i++; // skip the value (e.g. "json")
      continue;
    }
    if (a.startsWith('--')) continue;
    htmlPaths.push(a);
  }
}

function buildEnvelope() {
  // exit 0 → no blocking; exit 1 → one blocking violation on the first file.
  const hasBlocking = exitCode === 1;
  const results = htmlPaths.map((file, idx) => {
    const violations = [];
    // always emit a sample warning so PASS path also exercises reporting
    violations.push({
      rule: 'og_missing',
      severity: 'warning',
      line: null,
      message: 'og:image 누락(경고)',
    });
    if (hasBlocking && idx === 0) {
      violations.push({
        rule: 'jsonld_missing',
        severity: 'blocking',
        line: null,
        message: 'JSON-LD 구조화 데이터 누락',
      });
    }
    return { file, violations };
  });
  return {
    tool: 'bloglens.precheck',
    version: '0.1.0',
    criteriaVersion: '2026-05-28',
    summary: {
      files: results.length,
      blocking: hasBlocking ? 1 : 0,
      warning: results.length,
    },
    results,
  };
}

switch (body) {
  case 'garbage':
    process.stdout.write('this is not json at all <<<\n');
    break;
  case 'empty':
    break;
  case 'notobject':
    process.stdout.write(JSON.stringify([1, 2, 3]) + '\n');
    break;
  case 'noresults':
    process.stdout.write(JSON.stringify({ tool: 'bloglens.precheck', version: '0.1.0' }) + '\n');
    break;
  case 'envelope':
  default:
    process.stdout.write(JSON.stringify(buildEnvelope()) + '\n');
    break;
}

process.exit(exitCode);
