import { id } from '../Footer';

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
            contactImageUrl : {fieldType:'text',order:2}
        },
    },
};
