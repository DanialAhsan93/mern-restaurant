import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import flowbiteReact from "flowbite-react/plugin/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  server: {
    host: '0.0.0.0',  // <- required
    port: 5173,       // <- optional, but good to be consistent
    strictPort: true,
  },
  // base: '/mern-restaurant/',
  
})