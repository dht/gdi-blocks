import { id } from '../Cta';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            productDatasetId : {fieldType:'dataset', order:2},
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            youtubeUrl : {fieldType:'text' , order:2}
        },
    },
};
