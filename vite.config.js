import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for StepFree project
// base: './' ensures assets load correctly both locally and on GitHub Pages / Vercel
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
