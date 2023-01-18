import { id } from '../Gallary';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            socialDatasetId: { fieldType: 'dataset', order: 3 },
        },
    },
};
