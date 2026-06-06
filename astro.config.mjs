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

  integrations: [mdx(), sitemap()]
});