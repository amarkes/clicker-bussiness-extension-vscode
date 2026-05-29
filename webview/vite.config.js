import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    // Inline assets pequenos para reduzir requisições no webview
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Nomes determinísticos para facilitar o rewrite de URIs na extensão
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
