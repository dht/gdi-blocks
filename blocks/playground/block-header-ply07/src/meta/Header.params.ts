import { id } from '../Header';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            logoImageUrl: { fieldType: 'image', isRequired: true, order: 0 },
            githubUrl: { fieldType: 'url', order: 1 },
            socialDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 2,
            },
        },
    },
};
