import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            description2:{fieldType:'longText',order:2},
            buttonText:{fieldType:'text' , order:2}
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            socialDatasetId: { fieldType: 'dataset', order: 3 },
            ply03CardId:{fieldType:'dataset', order:2}
        },
    },
};
