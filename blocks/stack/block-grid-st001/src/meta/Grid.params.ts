import { id } from '../Grid';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            button: { fieldType: 'text', order: 2 },
        },
        colors: {},
        extra: {
            placeholderImageUrl: {
                fieldType: 'image',
                isRequired: true,
                order: 1,
            },
            backImageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            backImageUrlMobile: {
                fieldType: 'image',
                isRequired: true,
                order: 1,
            },
            frontImageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            frontImageUrlMobile: {
                fieldType: 'image',
                isRequired: true,
                order: 1,
            },
            socialDatasetId: { fieldType: 'dataset', order: 3 },
        },
    },
};
