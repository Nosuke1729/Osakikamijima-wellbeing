import { defineConfig } from 'vite';
import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'copy-site-images',
    closeBundle() {
      mkdirSync(resolve('dist/images'), { recursive: true });
      cpSync(resolve('images'), resolve('dist/images'), { recursive: true });
    },
  }],
});
