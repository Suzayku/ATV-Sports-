import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/ATV-Sports-/',
    plugins: [react()],
    build: {
        outDir: 'docs'
    }
});
