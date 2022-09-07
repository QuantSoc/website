import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'assets', replacement: resolve(__dirname, 'src/assets') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
      { find: 'fonts', replacement: resolve(__dirname, 'src/fonts') },
      { find: 'routes', replacement: resolve(__dirname, 'src/routes') },
      { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
      { find: 'hooks', replacement: resolve(__dirname, 'src/hooks') },
    ],
  },
});
