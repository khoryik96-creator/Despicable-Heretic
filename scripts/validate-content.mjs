import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content');
const errors = [];
const fail = (message) => errors.push(message);

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

const seasonDirs = (await readdir(contentRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^season-\d{2}$/.test(entry.name))
  .map((entry) => ({ name: entry.name, number: Number(entry.name.slice(-2)) }))
  .sort((a, b) => a.number - b.number);

if (!seasonDirs.length) fail('No season directories found under src/content.');

const maxSeason = seasonDirs.at(-1)?.number ?? 0;
for (let season = 1; season <= maxSeason; season += 1) {
  if (!seasonDirs.some((entry) => entry.number === season)) {
    fail(`Missing season directory season-${String(season).padStart(2, '0')}.`);
  }
}

let chapterCount = 0;
const manuscriptFiles = [];

for (const { name, number } of seasonDirs) {
  const dir = path.join(contentRoot, name);
  if (number === 1) {
    const files = (await readdir(dir)).filter((file) => /^chapter-\d{2}\.ts$/.test(file)).sort();
    const expected = Array.from({ length: 10 }, (_, i) => `chapter-${String(i + 1).padStart(2, '0')}.ts`);
    if (files.length !== 10 || expected.some((file) => !files.includes(file))) {
      fail(`${name} must contain chapter-01.ts through chapter-10.ts exactly once; found ${files.length} matching files.`);
    }
    chapterCount += files.length;
    manuscriptFiles.push(...files.map((file) => path.join(dir, file)));
    continue;
  }

  const bundle = path.join(dir, 'chapters.ts');
  if (!(await exists(bundle))) {
    fail(`${name} is missing chapters.ts.`);
    continue;
  }

  const text = await readFile(bundle, 'utf8');
  const keys = [...text.matchAll(/^\s*(\d+)\s*:\s*String\.raw`/gm)].map((match) => Number(match[1]));
  const unique = [...new Set(keys)].sort((a, b) => a - b);
  const expected = Array.from({ length: 10 }, (_, i) => i + 1);
  if (keys.length !== 10 || unique.length !== 10 || expected.some((n) => !unique.includes(n))) {
    fail(`${name}/chapters.ts must define String.raw chapter bodies 1-10 exactly once; found keys [${keys.join(', ')}].`);
  }
  chapterCount += unique.length;
  manuscriptFiles.push(bundle);
}

const forbidden = [
  { pattern: /\bRhen\b/g, label: 'Rhen (Quiet Regular contamination)' },
  { pattern: /\bSera\b/g, label: 'Sera (Quiet Regular contamination)' },
  { pattern: /\bPale Orchid\b/g, label: 'Pale Orchid (Quiet Regular contamination)' },
  { pattern: /\bThe Last Quiet Beneath Heaven\b/g, label: 'hard-locked Ultimate name outside an explicit untouched reminder' },
  { pattern: /\bUnwritten Law\b/g, label: 'sealed Supreme name outside an explicit sealed reminder' },
];

function stripAllowedLockReminders(text) {
  return text
    .replace(/\*\*Unwritten Law remained sealed\.\*\*/g, '')
    .replace(/\bUnwritten Law remained sealed\./g, '')
    .replace(/\*\*The Last Quiet Beneath Heaven remained untouched\.\*\*/g, '')
    .replace(/\bThe Last Quiet Beneath Heaven remained untouched\./g, '')
    .replace(/And\s+\*\*The Last Quiet Beneath Heaven\*\*\s+remained untouched\./g, '');
}

for (const file of manuscriptFiles) {
  const raw = await readFile(file, 'utf8');
  const text = stripAllowedLockReminders(raw);
  for (const { pattern, label } of forbidden) {
    pattern.lastIndex = 0;
    if (pattern.test(text)) fail(`${path.relative(root, file)} contains ${label}.`);
  }
}

const expectedTotal = maxSeason * 10;
if (chapterCount !== expectedTotal) {
  fail(`Chapter count mismatch: ${chapterCount} detected, expected ${expectedTotal} for ${maxSeason} seasons.`);
}

if (errors.length) {
  console.error('\nCONTENT VALIDATION FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content validation passed: ${maxSeason} contiguous seasons, ${chapterCount} chapters, no cross-novel contamination, and locked arts appear only in approved untouched/sealed reminders.`);
