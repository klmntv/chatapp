import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('/antd/')) return 'vendor_antd'
          if (id.includes('/@dnd-kit/')) return 'vendor_dnd'
          if (id.includes('/@reduxjs/toolkit/')) return 'vendor_redux'
          if (id.includes('/react-redux/')) return 'vendor_react_redux'
          if (id.includes('/react-hook-form/')) return 'vendor_rhf'

          return 'vendor'
        },
      },
    },
  },
})
