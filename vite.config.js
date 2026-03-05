import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Using relative path for base so it works on any GitHub Pages subpath
    base: './',
})
