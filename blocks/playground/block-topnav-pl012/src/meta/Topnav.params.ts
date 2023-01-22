import { id } from '../Topnav';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            logoUrl: { fieldType: 'image', isRequired: true, order: 1 },
            topNavDataset : {fieldType:'dataset', order:2}
        },
    },
};
