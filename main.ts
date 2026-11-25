// Wednesday 25 November 2026 — The World in One Day (make.fun news-image-20261125).
// One-page newspaper: 36 dated stories across 7 regions, 3 illustrated leads,
// 12 small cards, a 21-story list, a schematic world map, a UTC timeline and a
// red DATE CHECK box naming the near-miss stories left out for being the wrong day.
// The image is entry.png beside this file; this program copies it to the output
// directory so the judge sees exactly those bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(destDir, 'entry.png');

const { size } = statSync(source);
if (size > 1024 * 1024) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate limit.`);
}
copyFileSync(source, dest);
console.log(`Wrote ${dest} (${size} bytes) — Wednesday 25 November 2026, 36 stories, 7 regions.`);
