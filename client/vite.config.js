import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use `BASE_URL` or fallback to '/'
const base = process.env.BASE_URL || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    // Vite defaults are usually fine; keep assets inline limit reasonable
    assetsInlineLimit: 4096,
    sourcemap: false
  }
})
