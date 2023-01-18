import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/

export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist/site',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        visualizer(),
    ],
    resolve: {
        alias: {
			'@gdi/block-base': `${cwd}/packages/block-base/src`,
			'@gdi/block-card-ah4j1': `${cwd}/blocks/card/block-card-ah4j1/src`,
			'@gdi/block-apps-jf84j': `${cwd}/blocks/gdi/block-apps-jf84j/src`,
			'@gdi/block-features-j4k1h': `${cwd}/blocks/gdi/block-features-j4k1h/src`,
			'@gdi/block-footer-ajk34': `${cwd}/blocks/gdi/block-footer-ajk34/src`,
			'@gdi/block-gallery-ui5873': `${cwd}/blocks/gdi/block-gallery-ui5873/src`,
			'@gdi/block-hero-ajh53': `${cwd}/blocks/gdi/block-hero-ajh53/src`,
			'@gdi/block-top-41hj5': `${cwd}/blocks/gdi/block-top-41hj5/src`,
			'@gdi/block-twins-j1j43': `${cwd}/blocks/gdi/block-twins-j1j43/src`,
			'@gdi/block-cta-uiey3': `${cwd}/blocks/kickstarter/block-cta-uiey3/src`,
			'@gdi/block-divider-aku34': `${cwd}/blocks/kickstarter/block-divider-aku34/src`,
			'@gdi/block-footer-ui4y2': `${cwd}/blocks/kickstarter/block-footer-ui4y2/src`,
			'@gdi/block-hero-ouywy': `${cwd}/blocks/kickstarter/block-hero-ouywy/src`,
			'@gdi/block-quotes-opur3': `${cwd}/blocks/kickstarter/block-quotes-opur3/src`,
			'@gdi/block-top-9yur8': `${cwd}/blocks/kickstarter/block-top-9yur8/src`,
			'@gdi/block-twins-aou31': `${cwd}/blocks/kickstarter/block-twins-aou31/src`,
			'@gdi/block-about-ply03': `${cwd}/blocks/playground/block-about-ply03/src`,
			'@gdi/block-hero-ply01': `${cwd}/blocks/playground/block-hero-ply01/src`,
			'@gdi/block-hero-ply02': `${cwd}/blocks/playground/block-hero-ply02/src`,
			'@gdi/block-about-iuhr3': `${cwd}/blocks/starter/block-about-iuhr3/src`,
			'@gdi/block-contact-au487': `${cwd}/blocks/starter/block-contact-au487/src`,
			'@gdi/block-cta-p8y4a': `${cwd}/blocks/starter/block-cta-p8y4a/src`,
			'@gdi/block-header-aouu4': `${cwd}/blocks/starter/block-header-aouu4/src`,
			'@gdi/block-hero-hu45i': `${cwd}/blocks/starter/block-hero-hu45i/src`,
			'@gdi/block-numbers-jk123': `${cwd}/blocks/starter/block-numbers-jk123/src`,
			'@gdi/block-portfolio-aiou3': `${cwd}/blocks/starter/block-portfolio-aiou3/src`,
			'@gdi/block-quotes-iaj2f': `${cwd}/blocks/starter/block-quotes-iaj2f/src`,
			'@gdi/block-resume-iuo4f': `${cwd}/blocks/starter/block-resume-iuo4f/src`,
			'@gdi/block-section-gkj41': `${cwd}/blocks/starter/block-section-gkj41/src`,
			'@gdi/block-services-uoq83': `${cwd}/blocks/starter/block-services-uoq83/src`,
			'@gdi/block-top-aqwer': `${cwd}/blocks/starter/block-top-aqwer/src`,           
        },
    },
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
