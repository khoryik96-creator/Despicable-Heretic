import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Despicable-Heretic/',
  build: {
    rollupOptions: {
      input: {
        reader: resolve(process.cwd(), 'index.html'),
        app: resolve(process.cwd(), 'react-preview.html'),
      },
    },
  },
});
