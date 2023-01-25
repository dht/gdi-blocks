import { id } from '../Services';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
        },
        colors: {
        },
        extra: {
            serviceInfoDatasetId: { fieldType: 'dataset', isRequired:true , order: 3 }, 
        },
    },
};
