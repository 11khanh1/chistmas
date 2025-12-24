import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set `base` to the repository name so Vite generates correct asset paths for GitHub Pages.
  // Update this value if your repo is named differently on GitHub.
  base: '/christmas-tree/',
  plugins: [react()],
})
