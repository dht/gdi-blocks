import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import analyze from 'rollup-plugin-analyzer';
import p from './package.json';
import { externals } from 'shared-base';

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({}), react()],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Top',
            formats: ['es', 'umd'],
            fileName: (format) => `block-top-aqwer.${format}.js`,
        },
        rollupOptions: {
            plugins: [ANALYZE_BUNDLE ? analyze() : null],
            ...externals({
                react: '',
                'react-dom': '',
                'react/jsx-runtime': '',
                'react-select/creatable': '',
                ...p.dependencies,
                ...p.peerDependencies,
            }),
        },
    },
});
