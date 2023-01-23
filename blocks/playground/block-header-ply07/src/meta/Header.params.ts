import { id } from '../Header';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {},
    },
};
