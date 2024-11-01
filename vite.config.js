import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gif', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Ensures various image types are processed
  build: {
    outDir: 'dist',
  },
});