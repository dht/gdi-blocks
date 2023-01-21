import { id } from '../Apps';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            appsDatasetId: { fieldType: 'dataset', isRequired: true, order: 0 },
            appsDataset :{fieldType:'dataset', order:1}
        },
    },
};
