import { id } from '../Gallery';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
        },
        colors: {},
        extra: {
            galleryDataset: { fieldType: 'dataset', order: 3 },
        },
    },
};
