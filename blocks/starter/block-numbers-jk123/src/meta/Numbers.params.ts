import { id } from '../Numbers';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            numbersDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
