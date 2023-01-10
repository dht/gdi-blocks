import { id } from '../Cta';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            paragraph: { fieldType: 'text', isRequired: true, order: 2 },
        },
        colors: {},
        extra: {
            number: { fieldType: 'number', order: 0 },
        },
    },
};
