import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            reviewsDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 3,
            },
        },
    },
};
