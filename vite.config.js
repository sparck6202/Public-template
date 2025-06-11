import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
    transformMode: {
      web: [/.[jt]sx?$/],
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
  },

})
