import { id } from '../Gallery';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
        },
        colors: {},
        extra: {
            galleryDatasetId: { fieldType: 'dataset',  isRequired: true,order: 3 },
        },
    },
};
