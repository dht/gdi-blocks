import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { globbySync } from 'globby';
import axios from 'axios';

const __dirname = path.resolve();

const DATASETS_JSON_URL =
    'https://raw.githubusercontent.com/dht/gdi-jsons/main/viewer.json';

const run = async () => {
    console.time('refresh');

    const cwd = path.resolve(__dirname, '../blocks');

    const packages = globbySync('*/*', {
        cwd,
        onlyDirectories: true,
    });

    const viteAlias = [
        "\t\t\t'@gdi/block-base': `${cwd}/packages/block-base/src`,",
    ];

    const tsConfigPaths = {
        '@gdi/block-base': ['packages/block-base'],
    };

    const blockImports = [],
        blockParams = [],
        dependencies = [],
        byTemplate = {},
        menu = {};

    for (let packageName of packages) {
        const p = readJson(`${cwd}/${packageName}/package.json`);
        let [templateName, blockName] = packageName.split('/');
        blockName = blockName.replace('block-', '');
        const orderPath = `${cwd}/${templateName}/.order`;
        const menuPath = `${cwd}/${templateName}/.menu`;

        let orderValues = {},
            menuValues = [];

        if (fs.existsSync(orderPath)) {
            fs.readFileSync(orderPath, 'utf8')
                .split('\n')
                .forEach((b, index) => {
                    orderValues[b] = index;
                });
        }

        if (fs.existsSync(menuPath)) {
            menuValues = fs
                .readFileSync(menuPath, 'utf8')
                .split('\n')
                .filter((i) => i);

            menu[templateName] = menuValues;
        }

        byTemplate[templateName] = byTemplate[templateName] ?? {};
        byTemplate[templateName][blockName] = orderValues[blockName] ?? 99;

        const name = p.name.split('/').pop().replace('block-', '');
        const name_ = name.replace(/-/g, '_');

        tsConfigPaths[p.name] = [`blocks/${packageName}`];
        viteAlias.push(
            `\t\t\t'${p.name}': \`\${cwd}/blocks/${packageName}/src\`,`
        );

        dependencies[p.name] = 'latest';

        blockImports.push(
            `import { block as block_${name_} } from '@gdi/block-${name}';`
        );

        blockParams.push(`[block_${name_}.id]: block_${name_}`);
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

    const tsConfig = readJson(`../packages/block-viewer/tsconfig.json`);
    tsConfig.compilerOptions.paths = tsConfigPaths;
    writeJson(`../packages/block-viewer/tsconfig.json`, tsConfig);

    const contentBlockInit = templateBlockInit(blockImports, blockParams);
    fs.writeFileSync(
        '../packages/block-viewer/src/blocks/blocks.init.ts',
        contentBlockInit
    );

    const datasets = await axios.get(DATASETS_JSON_URL);
    // updateViewerPackageJson()

    writeJson(
        `../packages/block-viewer/src/blocks/blocks.datasets.json`,
        datasets.data
    );

    writeJson(
        '../packages/block-viewer/src/blocks/blocks.byTemplate.json',
        byTemplate
    );

    writeJson('../packages/block-viewer/src/blocks/blocks.menu.json', menu);

    console.timeEnd('refresh');
};

const updateViewerPackageJson = () => {
    const packageViewer = readJson('../packages/block-viewer/package.json');

    packageViewer.dependencies = {
        ...packageViewer.dependencies,
        ...dependencies,
    };

    writeJson('../packages/block-viewer/package.json', packageViewer);
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
