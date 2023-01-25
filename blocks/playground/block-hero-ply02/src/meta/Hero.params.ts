import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            buttonText:{fieldType:'text' , order:3}
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            her01Dataset:{fieldType:'dataset',order:2}
        },
    },
};
