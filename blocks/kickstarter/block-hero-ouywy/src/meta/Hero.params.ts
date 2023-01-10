import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            priceNote: { fieldType: 'text', order: 1 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 0 },
            previousPrice: { fieldType: 'number', order: 1 },
            currentPrice: { fieldType: 'number', isRequired: true, order: 2 },
            hudDatasetId: { fieldType: 'dataset', isRequired: true, order: 3 },
        },
    },
};
