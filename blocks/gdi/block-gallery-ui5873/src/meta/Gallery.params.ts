import { id } from '../Gallery';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            galleryDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 0,
            },
        },
    },
};
