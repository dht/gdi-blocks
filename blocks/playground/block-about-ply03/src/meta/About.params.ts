import { id } from '../About';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            descriptionOne: {
                fieldType: 'longText',
                isRequired: true,
                order: 0,
            },
            descriptionTwo: { fieldType: 'longText', order: 1 },
            header: { fieldType: 'text', isRequired: true, order: 2 },
            button: { fieldType: 'text', isRequired: true, order: 3 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            socialDatasetId: { fieldType: 'dataset', order: 3 },
        },
    },
};
