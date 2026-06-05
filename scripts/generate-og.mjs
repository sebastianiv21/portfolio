// Generates public/og.png — the social share card, in the site's
// gruvbox + Marathon style. Run with: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

const C = {
  bg: '#1d2021',
  line: '#504945',
  fg: '#ebdbb2',
  dim: '#a89984',
  accent: '#fabd2f',
};

// scattered chevrons echoing the boids background
const birds = [
  [980, 120, 18, 0.9],
  [1040, 180, -25, 0.6],
  [900, 90, 10, 0.5],
  [1080, 250, 30, 0.7],
  [950, 300, -15, 0.45],
]
  .map(
    ([x, y, r, o]) =>
      `<text x="${x}" y="${y}" transform="rotate(${r} ${x} ${y})" font-family="Menlo, monospace" font-size="34" fill="${C.accent}" fill-opacity="${o}">&gt;</text>`,
  )
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="${C.line}" stroke-width="2"/>

  <!-- crop marks -->
  <path d="M20 60 V20 H60" fill="none" stroke="${C.accent}" stroke-width="4"/>
  <path d="M1180 570 V610 H1140" fill="none" stroke="${C.accent}" stroke-width="4"/>

  ${birds}

  <text x="70" y="130" font-family="Menlo, monospace" font-size="26" letter-spacing="6" fill="${C.accent}">// LUISIBARRA.DEV</text>

  <text x="64" y="300" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="150" letter-spacing="-4" fill="${C.fg}">LUIS</text>
  <text x="64" y="450" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="150" letter-spacing="-4" fill="${C.accent}">IBARRA</text>

  <text x="70" y="540" font-family="Menlo, monospace" font-size="30" fill="${C.dim}">DevOps &amp; Cloud Engineer  &#183;  AWS Solutions Architect &#8211; Associate</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
