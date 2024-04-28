import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        // laravel-vite-pluginのインポート部分を変更
        (async () => {
            const laravel = await import('laravel-vite-plugin');
            return laravel.default({
                input: 'resources/js/app.js',
                refresh: true,
            });
        })(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
