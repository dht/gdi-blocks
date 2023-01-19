import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', order: 0 },
            addresss: { fieldType: 'longText', order: 1 },
            mail: { fieldType: 'text', order: 2 },
            tel: { fieldType: 'number', order: 3 },
        },
        colors: {},
        extra: {
            linksDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
