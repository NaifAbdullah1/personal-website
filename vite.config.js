import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // This attribute allows us to access the site within our home network
    host: '192.168.100.168', // Making the server accessible within my home's IP address
    port: 3000, // Default port for Vite
    open: true, 
  }
})
