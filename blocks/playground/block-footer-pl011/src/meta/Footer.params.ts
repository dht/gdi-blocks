import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            FooterQuote: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            buttonText :{fieldType:'text',order:2},
            placeholder : {fieldType:'text',order:3},
            footerText : {fieldType:"text",order:4},
            reservedText:{fieldType:"text",order:5},
            sendButtonIcon:{fieldType:"text",order:6}
        },
        colors: {},
        extra: {
            headers : {fieldType:"dataset",order:0},
            footerResourcesDatasetId : {fieldType:'dataset', order:1},
            footerCompanyDatasetId:{fieldType:'dataset',order:2},
            footerContactDatasetId:{fieldType:'dataset',order:3}
        },
    },
};
