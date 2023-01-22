import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            address: { fieldType: 'longText', isRequired: true, order: 1 },
            mail: { fieldType: 'text', isRequired: true, order: 2 },
            tel: { fieldType: 'number', order: 3 },
            description: { fieldType: 'longText', isRequired: true, order: 4 },
        },
        colors: {},
        extra: {
            linksDatasetId: { fieldType: 'dataset', order: 0 },
            footerMenuDatasetId: { fieldType: 'dataset', order: 0 },
            menuHeaders: { fieldType: 'dataset', order: 1 },
        },
    },
};
