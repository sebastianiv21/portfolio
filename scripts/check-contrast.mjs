// WCAG contrast check for both themes. Reads the tokens straight out of
// global.css so the palette and the check can't drift apart.
//   node scripts/check-contrast.mjs
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');

const block = (re) => {
  const body = css.match(re)?.[1] ?? '';
  return Object.fromEntries(
    [...body.matchAll(/(--color-[\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1], m[2]]),
  );
};

const dark = block(/@theme\s*\{([\s\S]*?)\n\}/);
const light = { ...dark, ...block(/\[data-theme='light'\]\s*\{([\s\S]*?)\n\}/) };

const lum = (hex) => {
  const ch = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// [foreground, background, minimum] — AA is 4.5:1 for body text, and 3:1 for
// text at 24px+ (or 18.7px+ bold) and for non-text marks.
const PAIRS = [
  ['--color-fg', '--color-bg-hard', 4.5],
  ['--color-fg-dim', '--color-bg-hard', 4.5],
  ['--color-fg-faint', '--color-bg-hard', 4.5],
  ['--color-fg', '--color-bg-raised', 4.5],
  ['--color-fg-dim', '--color-bg-raised', 4.5],
  ['--color-accent', '--color-bg-hard', 4.5],
  ['--color-orange', '--color-bg-hard', 4.5],
  // Headline-only, plus the crop marks: large text and non-text, so 3:1.
  ['--color-accent-display', '--color-bg-hard', 3],
  ['--color-accent-display', '--color-bg', 3],
  // Hero's inverted button: bg-hard text painted on an accent fill, plus hover.
  ['--color-bg-hard', '--color-accent', 4.5],
  ['--color-bg-hard', '--color-accent-deep', 4.5],
];

let failed = false;
for (const [name, tokens] of [
  ['dark', dark],
  ['light', light],
]) {
  console.log(`\n${name}`);
  for (const [fg, bg, min] of PAIRS) {
    const r = ratio(tokens[fg], tokens[bg]);
    const ok = r >= min;
    if (!ok) failed = true;
    console.log(
      `  ${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (need ${min})  ${fg} on ${bg}`,
    );
  }
}

process.exit(failed ? 1 : 0);
