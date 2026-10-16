// Writes the industry demos to public/demo/<slug>/index.html (German) and public/demo/<slug>/en/index.html
// (English). Run: node scripts/demos/build.mjs   Fonts live in public/demo/fonts. Every page is noindex.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as salon from './salon.mjs';
import * as fitness from './fitness.mjs';
import * as beauty from './beauty.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, '..', '..', 'public', 'demo');

for (const demo of [salon, fitness, beauty]) {
  for (const lang of ['de', 'en']) {
    const html = demo.render(lang);
    if (/%%[A-Z_a-z]+%%/.test(html)) throw new Error(`unreplaced placeholder in ${demo.slug}/${lang}`);
    if (/undefined/.test(html)) throw new Error(`"undefined" in ${demo.slug}/${lang}`);
    const dir = lang === 'de' ? path.join(OUT, demo.slug) : path.join(OUT, demo.slug, 'en');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log('written', path.relative(process.cwd(), path.join(dir, 'index.html')), Buffer.byteLength(html), 'bytes');
  }
}
