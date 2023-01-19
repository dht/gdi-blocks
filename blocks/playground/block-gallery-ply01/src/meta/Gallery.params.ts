import { id } from '../Gallery';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            galleryDataset: { fieldType: 'dataset', order: 3 },
        },
    },
};
