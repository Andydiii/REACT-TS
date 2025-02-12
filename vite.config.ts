import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ means starting from src directory
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // @ will be replaced with absolute path to src
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}],
  },
});
