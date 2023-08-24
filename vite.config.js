import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// vue3单文件支持
import vue from '@vitejs/plugin-vue'
// 自动引入vue3 api
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
