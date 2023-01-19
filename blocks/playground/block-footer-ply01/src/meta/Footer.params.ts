import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {  imageUrl: { fieldType: 'image',  order: 1 }},
       },
};
