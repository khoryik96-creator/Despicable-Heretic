import { copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const legacyIndex = path.join(dist, 'index.html');
const reactPreview = path.join(dist, 'react-preview.html');
const productionIndex = path.join(dist, 'index.html');

const [legacyHtml, reactHtml] = await Promise.all([
  readFile(legacyIndex, 'utf8'),
  readFile(reactPreview, 'utf8'),
]);

if (!legacyHtml.includes('assets/reader.js')) {
  throw new Error('Expected the pre-cutover dist/index.html to still be the legacy reader shell.');
}
if (!reactHtml.includes('id="root"')) {
  throw new Error('React preview build is missing the #root mount element.');
}
if (!/assets\/app-[^"']+\.js/.test(reactHtml)) {
  throw new Error('React preview build is missing its hashed application bundle.');
}
if (reactHtml.includes('assets/reader.js')) {
  throw new Error('React production candidate still references the legacy reader script.');
}

await copyFile(legacyIndex, path.join(dist, 'legacy-source-shell.html'));
await writeFile(productionIndex, reactHtml, 'utf8');
await writeFile(path.join(dist, '.nojekyll'), '', 'utf8');

const finalHtml = await readFile(productionIndex, 'utf8');
if (!finalHtml.includes('id="root"') || finalHtml.includes('assets/reader.js')) {
  throw new Error('Pages production index verification failed after cutover transform.');
}

console.log('Prepared dist/index.html as the React reader production entry; source index.html remains unchanged.');
