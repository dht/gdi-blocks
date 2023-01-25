import { id } from '../Contact';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            buttonText :{fieldType:'text',order:2},
            placeholder : {fieldType:'text',order:3},
        },
        colors: {},
        extra: {
            contactImage : {fieldType:'image', isRequired:true, order:2}
        },
    },
};
