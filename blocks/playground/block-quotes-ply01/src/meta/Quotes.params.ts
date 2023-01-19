import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            aboutDataset: { fieldType: 'dataset', order: 3 },
        },
    },
};
