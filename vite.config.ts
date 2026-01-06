import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@st': path.resolve(__dirname, './src/store'),
      '@home': path.resolve(__dirname, './src/features/home'),
      '@img': path.resolve(__dirname, './src/features/img'),
    },
  },
})
