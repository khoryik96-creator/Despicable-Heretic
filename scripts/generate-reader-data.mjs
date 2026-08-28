import { readFile, readdir, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content');
const outputRoot = path.join(root, 'public', 'generated', 'reader');

function extractRawTemplate(text, label) {
  const match = text.match(/String\.raw`([\s\S]*?)`\s*;?\s*$/);
  if (!match) throw new Error(`Could not parse ${label}.`);
  return match[1];
}

function extractSeasonBundle(text, season) {
  const chapters = {};
  const rx = /(\d+)\s*:\s*String\.raw`([\s\S]*?)`\s*(?:,|\n};)/g;
  let match;
  while ((match = rx.exec(text))) chapters[Number(match[1])] = match[2];
  const numbers = Object.keys(chapters).map(Number).sort((a, b) => a - b);
  const expected = Array.from({ length: 10 }, (_, index) => index + 1);
  if (numbers.length !== 10 || expected.some((number) => !numbers.includes(number))) {
    throw new Error(`Season ${season} reader payload expected chapters 1-10; found [${numbers.join(', ')}].`);
  }
  return chapters;
}

async function readSeason(season) {
  const dir = path.join(contentRoot, `season-${String(season).padStart(2, '0')}`);
  if (season === 1) {
    const chapters = {};
    for (let chapter = 1; chapter <= 10; chapter += 1) {
      const file = path.join(dir, `chapter-${String(chapter).padStart(2, '0')}.ts`);
      const text = await readFile(file, 'utf8');
      chapters[chapter] = extractRawTemplate(text, `Season 1 Chapter ${chapter}`);
    }
    return chapters;
  }

  const text = await readFile(path.join(dir, 'chapters.ts'), 'utf8');
  return extractSeasonBundle(text, season);
}

const seasonDirs = (await readdir(contentRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^season-\d{2}$/.test(entry.name))
  .map((entry) => Number(entry.name.slice(-2)))
  .sort((a, b) => a - b);

const maxSeason = seasonDirs.at(-1) ?? 0;
for (let season = 1; season <= maxSeason; season += 1) {
  if (!seasonDirs.includes(season)) throw new Error(`Missing season-${String(season).padStart(2, '0')}.`);
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const season of seasonDirs) {
  const chapters = await readSeason(season);
  const payload = {
    version: 1,
    season,
    chapterCount: Object.keys(chapters).length,
    chapters,
  };
  const file = path.join(outputRoot, `season-${String(season).padStart(2, '0')}.json`);
  await writeFile(file, `${JSON.stringify(payload)}\n`, 'utf8');
}

await writeFile(
  path.join(outputRoot, 'index.json'),
  `${JSON.stringify({ version: 1, seasons: seasonDirs, seasonCount: maxSeason, chapterCount: seasonDirs.length * 10 })}\n`,
  'utf8',
);

console.log(`Generated ${seasonDirs.length} lazy reader season payloads (${seasonDirs.length * 10} chapters).`);
