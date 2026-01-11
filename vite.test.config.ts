import { defineConfig } from 'vite'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  plugins: [pages({
    entry: './test-emoji.ts'
  })],
  build: {
    outDir: 'test-dist'
  }
})
