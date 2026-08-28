import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const fail = (message) => errors.push(message);
const read = (relative) => readFile(path.join(root, relative), 'utf8');

const contentDirs = (await readdir(path.join(root, 'src', 'content'), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^season-\d{2}$/.test(entry.name));
const seasonCount = Math.max(...contentDirs.map((entry) => Number(entry.name.slice(-2))));
const chapterCount = seasonCount * 10;

const top20Text = await read('src/features/rankings/top20.ts');
const currentBlock = top20Text.split('export const topTwenty')[1]?.split('export const formerTopTwenty')[0] ?? '';
const currentRows = [...currentBlock.matchAll(/rank:\s*(\d+)\s*,\s*name:\s*'([^']+)'/g)]
  .map((match) => ({ rank: Number(match[1]), name: match[2] }));

if (currentRows.length !== 20) fail(`Current Top 20 must contain 20 rows; found ${currentRows.length}.`);
const ranks = currentRows.map((row) => row.rank);
const names = currentRows.map((row) => row.name);
if (new Set(ranks).size !== ranks.length) fail('Current Top 20 contains duplicate ranks.');
if (new Set(names).size !== names.length) fail('Current Top 20 contains duplicate names.');
for (let rank = 1; rank <= 20; rank += 1) {
  if (!ranks.includes(rank)) fail(`Current Top 20 is missing rank #${rank}.`);
}

const techniquesText = await read('src/features/techniques/data.ts');
const techniqueRows = [...techniquesText.matchAll(/id:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)'[\s\S]*?tier:\s*'([^']+)'[\s\S]*?reveal:\s*'([^']+)'/g)]
  .map((match) => ({ id: match[1], name: match[2], tier: match[3], reveal: match[4] }));
const ultimate = techniqueRows.find((row) => row.name === 'The Last Quiet Beneath Heaven');
const unwritten = techniqueRows.find((row) => row.name === 'Unwritten Law');
if (!ultimate) fail('Ultimate definition is missing from technique data.');
else if (ultimate.tier !== 'Ultimate' || ultimate.reveal !== 'Sealed') fail('The Last Quiet Beneath Heaven must remain a sealed Ultimate.');
if (!unwritten) fail('Unwritten Law definition is missing from technique data.');
else if (unwritten.tier !== 'Supreme' || unwritten.reveal !== 'Sealed') fail('Unwritten Law must remain a sealed Supreme.');

const indexText = await read('index.html');
const readerText = await read('assets/reader.js');
const readmeText = await read('README.md');
if (!indexText.includes(`${seasonCount} seasons`) || !indexText.includes(`${chapterCount}`)) {
  fail(`index.html does not advertise the detected ${seasonCount} seasons / ${chapterCount} chapters.`);
}
if (!new RegExp(`const\\s+SEASONS\\s*=\\s*${seasonCount}\\b`).test(readerText)) {
  fail(`assets/reader.js SEASONS constant does not match detected season count ${seasonCount}.`);
}
if (!readmeText.includes(`${seasonCount} seasons`) || !readmeText.includes(`${chapterCount} full prose chapters`)) {
  fail(`README.md does not match detected ${seasonCount} seasons / ${chapterCount} chapters.`);
}
if (!readerText.includes('dhBookmarksV2') || !readerText.includes('dhLastReadV2')) {
  fail('Reader storage keys dhBookmarksV2 / dhLastReadV2 are missing.');
}

if (errors.length) {
  console.error('\nCANON/INTEGRATION VALIDATION FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Canon validation passed: Top 20 structurally valid, locked arts sealed, reader/README counts match ${seasonCount} seasons / ${chapterCount} chapters.`);
