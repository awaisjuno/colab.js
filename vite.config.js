import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      'pages': '/src/pages',
      '@': '/src'
    }
  }
});
