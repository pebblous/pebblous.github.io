---
name: changelog
description: Record a blog change to history/changelog.jsonl
argument-hint: "[action] [post-path] [summary]"
---

When this skill is invoked (manually or by other skills after making changes):

## Overview

Appends a structured JSON line to `history/changelog.jsonl` recording what was changed, when, and why. Designed for future OpenTelemetry/Kibana ingestion.

## Schema

Each line in `changelog.jsonl` is a JSON object with these fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `timestamp` | string (ISO 8601) | yes | UTC time of the change |
| `post` | string | yes | Relative path from repo root (e.g., `project/DataGreenhouse/data-greenhouse-strategy/ko/index.html`) |
| `action` | string | yes | Change type — see Action Types below |
| `sections` | string[] | no | Section IDs or numbers affected (e.g., `["2.1", "3", "4.1"]`) |
| `summary` | string | yes | Human-readable description of what changed |
| `languages` | string[] | no | Languages affected (e.g., `["ko", "en"]`) |
| `files` | string[] | no | All files modified (relative paths) |
| `skill` | string | no | Skill that triggered this change (e.g., `text-reinforce`, `bilingual`) |
| `linesAdded` | number | no | Approximate lines added |

## Action Types

| Action | Description |
|--------|-------------|
| `text-reinforce` | Added narrative text before visuals |
| `new-post` | Created a new blog post |
| `bilingual` | Converted mono-language to bilingual |
| `style` | CSS/visual/layout changes |
| `fix` | Bug fix or content correction |
| `seo` | SEO improvements (meta, schema, etc.) |
| `feature` | New interactive feature or component |
| `refactor` | Code restructuring without visual change |
| `content` | Content update (text edits, not structural) |

## Steps

### 1. Determine change details

From the user's input or context, extract:
- **post**: Which post or page was changed
- **action**: What type of change (from Action Types)
- **summary**: Brief description
- **sections**: Which sections were affected (if applicable)
- **languages**: Which language versions (if applicable)

### 2. Append to changelog.jsonl

Use Bash to append a single JSON line:

```bash
echo '{"timestamp":"2026-03-01T14:30:00Z","post":"project/DataGreenhouse/...","action":"text-reinforce","sections":["2.1","3"],"summary":"Added narrative paragraphs before visuals","languages":["ko","en"]}' >> history/changelog.jsonl
```

Or use the Write tool to append if the file doesn't exist yet.

### 3. Confirm to user

Show a brief confirmation:
```
Logged: [action] on [post] — [summary]
```

## Automatic Logging

Other skills (text-reinforce, bilingual, new-post) should call `/changelog` after completing their work. The changelog skill can also be invoked manually for ad-hoc changes.

## File Location

- **Log file**: `history/changelog.jsonl` (repo root)
- **Git**: Include in commits — the history is part of the project record
- **Future**: Feed into OpenTelemetry collector → Elasticsearch → Kibana dashboard

## Example Entries

```jsonl
{"timestamp":"2026-03-01T14:30:00Z","post":"project/PhysicalAI/digital-twin-physical-ai-market","action":"text-reinforce","sections":["1","2","4"],"summary":"Added 5 narrative paragraphs before naked visuals","languages":["ko","en"],"skill":"text-reinforce","linesAdded":25}
{"timestamp":"2026-03-01T15:00:00Z","post":"index.html","action":"style","summary":"Unified header logo size from h-7 to h-8 md:h-10","files":["index.html"]}
{"timestamp":"2026-03-01T15:30:00Z","post":"project/DataGreenhouse/data-greenhouse-strategy","action":"text-reinforce","sections":["2.1","3","4.1"],"summary":"Added 3 narrative paragraphs: market trends, pattern overview, layer descriptions","languages":["ko","en"],"skill":"text-reinforce","linesAdded":18}
```
