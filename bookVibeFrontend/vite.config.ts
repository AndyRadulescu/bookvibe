import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // or "modern"
            }
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setup.js',
    }
});
