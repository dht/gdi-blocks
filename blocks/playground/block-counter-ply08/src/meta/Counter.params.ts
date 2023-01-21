import { id } from '../Counter';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            appsDataset :{fieldType:'dataset', order:1}
        },
    },
};
