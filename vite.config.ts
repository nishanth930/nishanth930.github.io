import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // User site served from the domain root (nishanth930.github.io).
  base: '/',
  plugins: [react()],
})
