import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', order: 0 },
            lists: { fieldType: 'dataset', order: 1 },
        },
        colors: {},
        extra: {
            quotesDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
