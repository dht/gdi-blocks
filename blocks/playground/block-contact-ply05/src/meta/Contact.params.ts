import { id } from '../Contact';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            button: { fieldType: 'text', order: 3 },
        },
        colors: {},
        extra: {
            contactDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
