import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Portefolio/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        mongodbAgent: fileURLToPath(new URL('./mongodb-ai-agent.html', import.meta.url)),
      },
    },
  },
}))
