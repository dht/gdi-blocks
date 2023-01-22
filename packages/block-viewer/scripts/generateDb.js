import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { globbySync } from 'globby';
import axios from 'axios';

const __dirname = path.resolve();
const root = path.resolve(__dirname, '../../..');
const cwd = path.resolve(root, 'blocks');

const pathDb = path.resolve(__dirname, '../server/src/data/db.json');
const pathOverrides = path.resolve(__dirname, '../server/src/data/overrides');

if (!fs.existsSync(pathDb)) {
    console.log('db.json does not exist');
    fs.writeFileSync(pathDb, '{}');
}

const run = async () => {
    console.time('refresh');

    const packages = globbySync('*/*', {
        cwd,
        onlyDirectories: true,
    });

    const db = {};

    await getDatasets(db);
    generateLibraryWidgets(db, packages);
    generateLibraryInstances(db, packages);

    mergeOverrides(db);

    writeJson('../server/src/data/db.json', toJsonServer(db));
};

const generateLibraryWidgets = (db, packages) => {
    console.time('generateLibraryWidgets');

    db.widgets = getBlocksData(packages);

    console.timeEnd('generateLibraryWidgets');
};

const generateLibraryInstances = (db, packages) => {
    console.time('generateLibraryInstances');

    const instances = {};
    const instanceProps = {};

    const blockData = getBlocksDataByTemplate(packages);
    const orderData = getOrderData();

    Object.keys(blockData).forEach((templateId) => {
        const value = blockData[templateId];

        Object.keys(value).forEach((blockId, index) => {
            const block = value[blockId];
            const { name, sampleData } = block;
            const id = `instance-${templateId}-${index + 1}`;
            const order = orderData[templateId][name] ?? 99;

            instances[id] = {
                id,
                widgetId: block.id,
                pageInstanceId: templateId,
                order,
            };

            const props = Object.values(sampleData)[0];

            instanceProps[id] = {
                id,
                ...flattenInstanceProps(props),
            };
        });
    });

    db.instances = instances;
    db.instanceProps = instanceProps;

    console.timeEnd('generateLibraryInstances');
};

const mergeOverrides = (db) => {
    prepareOverrides();

    const overrides = readOverrides();

    db.widgets = _.merge(db.widgets, overrides.widgets);
    db.instances = _.merge(db.instances, overrides.instances);
    db.instanceProps = _.merge(db.instanceProps, overrides.instancesProps);
    db.datasets = _.merge(db.datasets, overrides.datasets);
};

const prepareOverrides = () => {
    const paths = {
        datasets: path.resolve(pathOverrides, 'datasets.json'),
        instancesProps: path.resolve(pathOverrides, 'instancesProps.json'),
        instances: path.resolve(pathOverrides, 'instances.json'),
        widgets: path.resolve(pathOverrides, 'widgets.json'),
    };

    Object.values(paths).forEach((path) => {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, '{}');
        }
    });
};

const getDatasets = async (db) => {
    console.time('getDatasets');

    db.datasets = readJson('../server/src/data/datasets.json');

    console.timeEnd('getDatasets');
};

const readOverrides = () => {
    const output = {};

    const paths = {
        datasets: path.resolve(pathOverrides, 'datasets.json'),
        instancesProps: path.resolve(pathOverrides, 'instancesProps.json'),
        instances: path.resolve(pathOverrides, 'instances.json'),
        widgets: path.resolve(pathOverrides, 'widgets.json'),
    };

    Object.keys(paths).forEach((key) => {
        const path = paths[key];
        if (fs.existsSync(path)) {
            output[key] = JSON.parse(fs.readFileSync(path, 'utf-8'));
        }
    });

    return output;
};

const getBlocksData = (packages) => {
    const blockData = {};

    packages.forEach((packageName) => {
        const p = readPackage(packageName);
        blockData[p.block.id] = p.block;
    });

    return blockData;
};

const getBlocksDataByTemplate = (packages) => {
    const blockData = {};

    packages.forEach((packageName) => {
        const [templateName] = packageName.split('/');
        const p = readPackage(packageName);
        blockData[templateName] = blockData[templateName] ?? {};
        blockData[templateName][p.block.id] = p.block;
    });

    return blockData;
};

const getOrderData = () => {
    const pathOrder = path.resolve(
        root,
        'packages/block-viewer/src/data/raw/blocks.byTemplate.json'
    );

    if (!fs.existsSync(pathOrder)) {
        console.log('block.byTemplate.json does not exist');
        return;
    }

    return JSON.parse(fs.readFileSync(pathOrder, 'utf-8'));
};

const readPackage = (pathName) => {
    const pathSrc = path.resolve(cwd, `${pathName}/src`);

    const pathMeta = `${pathSrc}/meta`;
    const pathIndex = `${pathSrc}/index.ts`;

    if (!fs.existsSync(pathSrc)) {
        console.log('src path does not exist for ' + pathName);
        return;
    }

    if (!fs.existsSync(pathIndex)) {
        console.log('index.ts does not exist for ' + pathName);
        return;
    }

    const index = fs.readFileSync(pathIndex, 'utf-8');

    const regexId = /id: '([^']+)',/g;
    const id = regexId.exec(index)[1];

    const files = globbySync('*', {
        cwd: pathMeta,
    });

    let blockConfig = {
            params: {},
            sampleData: {},
            dimensions: {},
            screenshots: {},
        },
        output = {};

    files
        .filter((file) => !file.includes('datasets'))
        .forEach((file) => {
            const content = fs.readFileSync(`${pathMeta}/${file}`, 'utf-8');
            const partial = extractValue(content, { id }, file);

            blockConfig = {
                ...blockConfig,
                ...partial,
            };
        });

    output = extractValue(index, blockConfig);

    if (_.isEmpty(output)) {
        console.log(pathName + ' is empty');
    }

    return output;
};

const extractValue = (content, params, fileForDebug) => {
    const output = {};

    const regexVariable = /const ([^:]+)/g;
    const variable = regexVariable.exec(content)[1];

    content = content.replace(/^import [^;]+;/gm, '');
    content = content.replace(/^export [^{]+/gm, '');
    content = content.replace(/;/g, '');
    content = content.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gim, '');
    content = content.replace(/component: [a-z]+,?/gim, '');

    Object.keys(params).forEach((param) => {
        content = content.replace(
            new RegExp(param + ',', 'gim'),
            `${param}: params.${param},`
        );
    });

    try {
        output[variable] = new Function('params', `return ${content};`)(params);
    } catch (err) {
        console.log('err ->', fileForDebug, content);
    }

    return output;
};

const writeJson = (path, content) => {
    fs.writeFileSync(path, JSON.stringify(content, null, 4));
};

const readJson = (path) => {
    const raw = fs.readFileSync(path, 'utf8');
    return JSON.parse(raw);
};

const flattenInstanceProps = (instanceProps = {}) => {
    const output = {};

    const { strings = {}, colors = {}, extra = {} } = instanceProps;

    Object.keys(strings).forEach((key) => {
        output[`strings_${key}`] = strings[key];
    });

    Object.keys(colors).forEach((key) => {
        output[`colors_${key}`] = colors[key];
    });

    Object.keys(extra).forEach((key) => {
        output[`extra_${key}`] = extra[key];
    });

    return output;
};

const singles = ['datasets'];

const toJsonServer = (content) => {
    const output = {};

    Object.keys(content).forEach((key) => {
        const value = content[key];

        output[key] = singles.includes(key) ? value : Object.values(value);
    });

    return output;
};

run();
