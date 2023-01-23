import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            quotesDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
