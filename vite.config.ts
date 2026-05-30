import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: () => [
      '/',
      '/about',
      '/services',
      '/pre-opening',
      '/experience',
      '/philosophy',
      '/contact',
      '/profile',
      '/insights',
      '/insights/miami-pre-opening-playbook',
      '/insights/what-a-fractional-gm-actually-does',
      '/insights/labor-cost-control-miami-restaurants',
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})
