import { id } from '../Header';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            socialDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 2,
            },
        },
    },
};
