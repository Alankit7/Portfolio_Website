import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'framer';
          }
          if (id.includes('node_modules/react-icons/')) {
            return 'icons';
          }
          if (id.includes('node_modules/react-tooltip/') || id.includes('node_modules/react-countup/') || id.includes('node_modules/react-intersection-observer/') || id.includes('node_modules/react-type-animation/')) {
            return 'utils';
          }
          if (id.includes('node_modules/react-hook-form/') || id.includes('node_modules/@emailjs/')) {
            return 'form';
          }
        },
      },
    },
  },
})
