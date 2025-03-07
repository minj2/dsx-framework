import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, ''),
    },
  },
  json: {
    namedExports: true, // JSON 파일을 모듈처럼 가져오기
  },
});
