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

// scattered gull silhouettes echoing the boids flock (head leads +x, rotated)
const gull = (x, y, deg, o, L = 16) => {
  const d = L * 0.5; // wingtip droop
  return `<g transform="translate(${x} ${y}) rotate(${deg})" fill="none" stroke="${C.accent}" stroke-opacity="${o}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M ${-L} ${-d} Q 0 -2 ${L * 0.6} 0 Q 0 2 ${-L} ${d}"/></g>`;
};
const birds = [
  [980, 120, 18, 0.9, 18],
  [1040, 185, -22, 0.65, 14],
  [905, 95, 8, 0.5, 12],
  [1085, 255, 26, 0.7, 16],
  [950, 305, -14, 0.45, 13],
  [1120, 150, -8, 0.55, 15],
]
  .map((b) => gull(...b))
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
