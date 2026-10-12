import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({plugins:[react(),tailwindcss()],build:{rollupOptions:{input:'dev.html'},target:'safari16',assetsInlineLimit:1000000,cssCodeSplit:false}});
