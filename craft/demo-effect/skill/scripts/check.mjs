#!/usr/bin/env node
// Demo check for the blur reveal template. Prints one line per check and exits 1 if any fails.
// Needs Node 18 or later, no packages.
import {readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const file = resolve(here, '../assets/template/blur-reveal.tsx');

const checks = [
  ['respects reduced motion', 'prefers-reduced-motion'],
  ['starts only when visible', 'IntersectionObserver'],
  ['cleans up the observer', 'disconnect'],
];

let source;
try {
  source = readFileSync(file, 'utf8');
} catch (error) {
  console.log(`fail: cannot read ${file} (${error.code ?? error.message})`);
  process.exit(1);
}

let failed = 0;
for (const [name, needle] of checks) {
  const ok = source.includes(needle);
  if (!ok) failed++;
  console.log(`${ok ? 'ok' : 'fail'}: ${name} (${needle})`);
}
process.exit(failed ? 1 : 0);
