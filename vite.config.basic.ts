import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/front_7th_chapter3-2/basic/',
  build: {
    outDir: 'dist/basic',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.basic.html')
    }
  }
});
