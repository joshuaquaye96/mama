import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Fix blank page on Netlify
export default defineConfig({
  plugins: [react()],
  base: './', // <--- this line is the fix
})
