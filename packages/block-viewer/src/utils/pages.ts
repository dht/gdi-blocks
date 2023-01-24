import byTemplate from '../data/raw/blocks.byTemplate.json';

export const calculatePagesFromInstances = (instances: Json) => {
    const output: any = {
        libraryPages: {},
        libraryPageInstances: {},
    };

    Object.values(instances).forEach((instance) => {
        const { pageInstanceId } = instance;

        output.libraryPages[pageInstanceId] = {
            id: pageInstanceId,
            title: pageInstanceId,
            description: '',
            iconName: '',
            path: '/',
            status: 'draft',
            tags: [],
            dataTags: [],
            order: 1,
            pageInstanceId,
        };

        output.libraryPageInstances[pageInstanceId] = {
            id: pageInstanceId,
            pageId: pageInstanceId,
            version: 'v1',
        };
    });

    return output;
};

export const findTemplateByBlockId = (blockId: string) => {
    let output = '';

    Object.keys(byTemplate).forEach((templateId) => {
        const template = byTemplate[templateId];

        if (Object.keys(template).includes(blockId)) {
            output = templateId;
        }
    });

    return output;
};
