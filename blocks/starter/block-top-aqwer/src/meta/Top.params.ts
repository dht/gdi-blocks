import { id } from '../Top';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            logoUrl: { fieldType: 'image', isRequired: true, order: 1 },
        },
    },
};
