import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('vite').UserConfigExport}
 */
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]] } }),
    // react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
  build: {
    lib: {
      name: 'react-text-labeler',
      fileName: 'react-text-labeler',
      entry: resolve(__dirname, 'lib/index.ts'),
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
