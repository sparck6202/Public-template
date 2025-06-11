import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      actions: resolve(__dirname, 'src/actions'),
      config: resolve(__dirname, 'src/config.js'),
    },
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
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    exclude: ['react-virtualized'],
  },
})
