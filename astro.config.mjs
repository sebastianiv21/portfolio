// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisibarra.dev',

  vite: {
    plugins: [tailwindcss()],
    // dev-only: node_modules is a symlink outside this worktree (variant compare)
    server: { fs: { strict: false } }
  },

  markdown: {
    shikiConfig: {
      // Dark is the default color, so it needs no CSS; the light theme rides
      // along in --shiki-light-* vars that global.css swaps in.
      themes: { light: 'gruvbox-light-hard', dark: 'gruvbox-dark-hard' },
      defaultColor: 'dark'
    }
  },

  integrations: [mdx(), sitemap()]
});