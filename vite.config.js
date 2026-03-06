import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages के लिए base path सेट करना ज़रूरी है 
  // क्योंकि आपकी Repo का नाम 'Romil-Chavda-Portfolio' है
  base: '/Romilchavda/Romil-Chavda-Portfolio/',
  
  build: {
    outDir: 'dist',
  }
})