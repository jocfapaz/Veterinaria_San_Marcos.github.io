import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Veterinaria_San_Marcos.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
