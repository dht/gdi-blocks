import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {  },
        colors: { },
        extra: {
            socialDatasetId: { fieldType: 'dataset', order: 3 },
        },
    },
};
