import { id } from '../Services';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {  },
        colors: { },
        extra: {
            servicesDatasetId: { fieldType: 'dataset', isRequired:true, order: 3 },
        },
    },
};