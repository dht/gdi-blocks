import { id } from '../About';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            description: { fieldType: 'longText', order: 1 },
            secondDescription:{fieldType:'longText',order:2},
            buttonText:{fieldType:'text' , order:3}
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            aboutCardId:{fieldType:'dataset' , order:2}
        },
    },
};
