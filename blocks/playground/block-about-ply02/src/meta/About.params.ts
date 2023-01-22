import { id } from '../About';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            button: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            aboutDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 3,
            },
        },
    },
};
