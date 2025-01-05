import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  server: {
    proxy: {

      '/api': 'http://localhost:5000', // Прокси для API-запросов
    },
  },
  assetsInclude: ['**/*.glb'], // Добавляем поддержку .glb файлов

});
