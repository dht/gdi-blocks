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
           footerDataset : {fieldType:'dataset', order:0},

        },
    },
};
