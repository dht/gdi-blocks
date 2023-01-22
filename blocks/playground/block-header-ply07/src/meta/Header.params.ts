import { id } from '../Header';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            headerDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 2,
            },
        },
    },
};
