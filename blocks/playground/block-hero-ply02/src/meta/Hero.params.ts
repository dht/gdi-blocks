import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            description: { fieldType: 'longText', order: 1 },
            buttonText:{fieldType:'text' , order:2}
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            clientLogoDataSetId:{fieldType:'dataset',order:2}
        },
    },
};
