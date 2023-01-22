import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { globbySync } from 'globby';
import axios from 'axios';

const DATASETS_JSON_URL =
    'https://raw.githubusercontent.com/dht/gdi-jsons/main/viewer.json';

const __dirname = path.resolve();
const cwd = path.resolve(__dirname, '../blocks');

const run = async () => {
    console.time('refresh');

    const packages = globbySync('*/*', {
        cwd,
        onlyDirectories: true,
    });

    fixVite(packages);
    fixTsConfig(packages);
    refreshBlockImports(packages);
    refreshMenu(packages);
    getOrder(packages);
};

const getOrder = (packages) => {
    console.time('getOrder');

    const byTemplate = {};

    for (let packageName of packages) {
        const p = readJson(`${cwd}/${packageName}/package.json`);
        let [templateName, blockName] = packageName.split('/');
        blockName = blockName.replace('block-', '');
        const orderPath = `${cwd}/${templateName}/.order`;

        let orderValues = {};

        if (fs.existsSync(orderPath)) {
            fs.readFileSync(orderPath, 'utf8')
                .split('\n')
                .forEach((b, index) => {
                    orderValues[b] = index;
                });
        }

        byTemplate[templateName] = byTemplate[templateName] ?? {};
        byTemplate[templateName][blockName] = orderValues[blockName] ?? 99;
    }

    writeJson(
        '../packages/block-viewer/src/data/raw/blocks.byTemplate.json',
        byTemplate
    );

    console.timeEnd('getOrder');
};

const fixVite = (packages) => {
    console.time('fixVite');

    const viteAlias = [
        "\t\t\t'@gdi/block-base': `${cwd}/packages/block-base/src`,",
        "\t\t\t'@gdi/store-viewer': `${cwd}/stores/gdi-store-viewer/src`,",
    ];

    for (let packageName of packages) {
        const p = readJson(`${cwd}/${packageName}/package.json`);

        viteAlias.push(
            `\t\t\t'${p.name}': \`\${cwd}/blocks/${packageName}/src\`,`
        );
    }

    let viteConfig = fs.readFileSync(
        `../packages/block-viewer/vite.config.js`,
        'utf8'
    );

    const regex = /alias: ([^}])+},/gim;

    viteConfig = viteConfig.replace(/\$\{cwd\}/g, '').replace(
        regex,
        `alias: {
${viteAlias.join('\n')}           
        },`
    );

    fs.writeFileSync(`../packages/block-viewer/vite.config.js`, viteConfig);

    console.timeEnd('fixVite');
};

const fixTsConfig = (packages) => {
    console.time('fixTsConfig');

    const tsConfigPaths = {
        '@gdi/block-base': ['packages/block-base'],
        '@gdi/store-viewer': ['stores/gdi-store-viewer'],
    };

    for (let packageName of packages) {
        const p = readJson(`${cwd}/${packageName}/package.json`);
        tsConfigPaths[p.name] = [`blocks/${packageName}`];
    }

    const tsConfig = readJson(`../packages/block-viewer/tsconfig.json`);
    tsConfig.compilerOptions.paths = tsConfigPaths;
    writeJson(`../packages/block-viewer/tsconfig.json`, tsConfig);

    console.timeEnd('fixTsConfig');
};

const refreshMenu = (packages) => {
    console.time('refreshMenu');
    const menu = {};

    for (let packageName of packages) {
        let [templateName, _blockName] = packageName.split('/');
        const menuPath = `${cwd}/${templateName}/.menu`;

        let menuValues = [];

        if (fs.existsSync(menuPath)) {
            menuValues = fs
                .readFileSync(menuPath, 'utf8')
                .split('\n')
                .filter((i) => i);

            menu[templateName] = menuValues;
        }
    }

    writeJson('../packages/block-viewer/src/data/blocks.menu.json', menu);

    console.timeEnd('refreshMenu');
};

const refreshBlockImports = (packages) => {
    console.time('refreshBlockImports');

    const blockImports = [],
        blockParams = [];

    for (let packageName of packages) {
        const p = readJson(`${cwd}/${packageName}/package.json`);
        const name = p.name.split('/').pop().replace('block-', '');
        const name_ = name.replace(/-/g, '_');

        blockImports.push(
            `import { block as block_${name_} } from '@gdi/block-${name}';`
        );

        blockParams.push(`[block_${name_}.id]: block_${name_}`);
    }

    const contentBlockInit = templateBlockInit(blockImports, blockParams);
    fs.writeFileSync(
        '../packages/block-viewer/src/data/blocks.init.ts',
        contentBlockInit
    );

    console.timeEnd('refreshBlockImports');
};

const readJson = (path) => {
    const raw = fs.readFileSync(path, 'utf8');
    return JSON.parse(raw);
};

const writeJson = (path, content) => {
    fs.writeFileSync(path, JSON.stringify(content, null, 4));
};

const templateBlockInit = (imports, params) => {
    return `import { initBlocks as initBlockBase } from '@gdi/engine';
${imports.join('\n')}
    
    export const initBlocks = () => {
        initBlockBase({
            ${params.join(',\n\t\t\t')}
        });
    };
    `;
};

run();
