import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            aboutDatasetId: { fieldType: 'dataset',  isRequired: true, order: 3 },
        },
    },
};
