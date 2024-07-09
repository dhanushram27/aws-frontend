import { defineconfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineconfig({
  plugins: [react()],
  server: {
    watch:{
      usePolling: true,
    },
    host:true,
    strictPort: true,
    port: 5173 
  }
})
